<template>
  <!-- s 消息 -->
  <section class="messages">
    <div class="messages-header font-30 color-white">
      <p>最近消息</p>
      <i class="iconfont icon-jiahao" @click="openMore"></i>
    </div>
    <div class="messages-content">
      <div class="content-search padding-horizontal-30 font-24 border-bottom-1" @click="gotoPage('search-friend')">
        <div class="search-content">
          <i class="iconfont icon-sousuo"></i>
          <span class="font-30 color-balck">搜索手机号</span>
        </div>
      </div>
      <ul class="content-list padding-horizontal-30">
        <li class="list-item border-bottom-1" v-for="(item, index) in sessions" :key="index" @click="gotoChat(item)" @touchstart="tapDeleteModal" @touchend="showDeleteModal(item, index)">
          <div class="item-portrait">
            <img :src="item.portrait">
          </div>
          <div class="item-message padding-horizontal-30">
            <div class="message-title">
              <p class="font-27 color-light-blue">
                <span>{{item.name}}</span>
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-cong"></use>
                </svg>
              </p>
              <p class="font-18 color-light-grey">{{item.chatTime}}</p>
            </div>
            <div class="message-recently">
              <div class="recently-lastmsg">
                <p class="lastmsg-newest  font-24 color-light-grey" v-if="item.lastMsg.status == 'success'">{{item.content}}</p>
                <i class="iconfont icon-tishi1 font-24" v-if="item.lastMsg.status == 'fail'"></i>
              </div>
              <div class="recently-badge" v-if="item.unread"><span class="color-white font-21">{{item.unread > 100 ? +99 : item.unread}}</span></div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <ModalComponent v-show="modalShow" @CLOSE_EVENT="closeModal">
      <MoreComponent v-if="moreShow"></MoreComponent>
      <DeleteSessionComponent v-if="deleteSessionShow" @DELETE_SESSION_EVENT="deleteSession"></DeleteSessionComponent>
    </ModalComponent>
  </section>
  <!-- e 消息 -->
</template>

<script>
import MoreComponent from './more/more.vue'
import DeleteSessionComponent from './delete-session/delete-session.vue'
// include dependence
import Chat from '../../../class/Chat.class.js'
import Router from '../../../class/Router.class.js'
import Storage from '../../../class/Storage.class.js'
import Time from '../../../class/Time.class.js'
import ModalComponent from '../../../module/modal/modal.vue'
export default {
  name: 'MessageComponent',
  data () {
    return {
      longTap: null,
      sessions: [],
      infoArr: [],
      updatesession: {},
      modalShow: false,
      moreShow: false,
      deleteSessionShow: false,
      deleteSessionItem: null,
      deleteSessionIndex: null
      // start params
      // end params
    }
  },
  components: {
    ModalComponent,
    MoreComponent,
    DeleteSessionComponent
    // TabComponent
    // include components
  },
  created () {
    this.init()
  },
  methods: {
    init () {
      if (!Storage.sessions) return
      this.dealSessions(Storage.sessions)
    },
    gotoChat (item) {
      Storage.userInfo = {
        account: item.to,
        avatar: item.portrait,
        nick: item.name,
        updateTime: item.updateTime
      }
      Chat.sessionUnread(item.id)
      Storage.sessionId = item.id
      Chat.target = {
        id: item.to,
        portrait: item.portrait
      }
      Router.push('chat')
    },
    gotoPage (page) {
      Router.push(page)
    },
    // 删除会话
    deleteSession () {
      Chat.deleteSessions(this.deleteSessionItem.id).success(data => {
        this.sessions.splice(this.deleteSessionIndex, 1)
        Storage.sessions = this.sessions
        this.modalShow = false
        this.deleteSessionShow = false
      })
    },
    openMore () {
      this.modalShow = true
      this.moreShow = true
    },
    closeModal () {
      this.modalShow = false
      this.deleteSessionShow = false
      this.moreShow = false
    },
    // 长按
    tapDeleteModal () {
      clearInterval(this.longTap)
      this.longTap = setTimeout(() => {
        this.modalShow = true
        this.deleteSessionShow = true
      }, 1000)
    },
    showDeleteModal (item, index) {
      clearInterval(this.longTap)
      this.deleteSessionItem = item
      this.deleteSessionIndex = index
    },
    // 处理sessions
    dealSessions (sessions) {
      let accounts = []
      let count = -1
      sessions.forEach((item, index) => {
        if (item.lastMsg) {
          let account = item.id.substr(4)
          accounts.push(account)
          if (this.$store.state.updatesession) {
            if (item.to === this.$store.state.updatesession.to) {
              item.lastMsg = this.$store.state.updatesession.lastMsg
              item.unread = this.$store.state.updatesession.unread
            }
          }
          item.chatTime = this.dealTime(item.lastMsg.time)
          this.disposeMessageType(item)
          this.sessions.push(item)
        }
      })
      for (let i = 0; i < accounts.length; i += 150) {
        count++
        this.getUserInfo(accounts.slice(i, i + 150), count)
      }
    },
    // 获取用户信息
    getUserInfo (accounts, index) {
      Chat.getUserInfo(accounts).success(data => {
        data.forEach((item, i) => {
          this.sessions[index * 150 + i].portrait = item.avatar ? item.avatar : require('../../../../static/img/master.png')
          this.sessions[index * 150 + i].name = item.nick ? item.nick : item.account
        })
        this.sessions = [...this.sessions]
      })
    },
    // 处理消息类型
    disposeMessageType (message) {
      let msgType = message.lastMsg.type
      if (!/text|image|file|audio|video|geo|custom|tip|notification/i.test(msgType)) return ''
      switch (msgType) {
        case 'notification':
          message.content = this.disposeCallMsg(message.lastMsg.attach)
          break
        case 'custom':
          let custom = JSON.parse(message.lastMsg.content)
          if (custom.type === 3) {
            message.content = '[贴图]'
          } else {
            message.content = '[自定义消息]'
          }
          break
        case 'text':
          message.content = message.lastMsg.text
          break
        case 'image':
          message.content = '[图片]'
          break
        case 'audio':
          message.content = '[语音]'
          break
        case 'video':
          message.content = '[视频]'
          break
        case 'geo':
          message.content = '[位置]'
          break
        case 'tip':
          message.content = '[提醒消息]'
          break
        case 'robot':
          message.content = '[机器人消息]'
          break
        case 'file':
          if (!/exe|bat/i.test(message.lastMsg.file.ext)) {
            message.content = '[文件]'
          } else {
            message.content = '[非法文件，已被本站拦截]'
          }
          break
        default:
          message.content += '[未知消息类型]'
          break
      }
    },
    // 处理显示时间
    dealTime (updateTime) {
      let chatTime = ''
      let weeHour = new Date(new Date().setHours(0, 0, 0, 0))
      let befroeWeehour = new Date(new Date().setHours(0, 0, 0, 0)) - 86400000
      if (updateTime > weeHour) {
        chatTime = Time.format('HH', updateTime) > 12 ? '下午  ' + Time.format('hh : mm', updateTime) : '上午  ' + Time.format('hh : mm', updateTime)
        return chatTime
      }
      if (updateTime > befroeWeehour) {
        chatTime = '昨天'
        return chatTime
      }
      chatTime = Time.format('YYYY-MM-DD', updateTime)
      return chatTime
    },
    // 音视频消息处理
    disposeCallMsg (msg) {
      console.log(msg)
      let toggleType = null
      if (typeof msg.duration === 'number') msg.duration = this.dealCallTime(msg.duration)
      if (!msg.duration) msg.duration = ''
      if (msg.netcallType === 1) toggleType = '[音频通话]' + msg.duration
      if (msg.netcallType === 2) toggleType = '[视频通话]' + msg.duration
      return toggleType
    },
    dealCallTime (time) {
      let callTime = null
      let callHour = null
      let callMinute = null
      let callSecond = null
      callHour = this.fillZero(parseInt(time / 60 / 60))
      callMinute = this.fillZero(parseInt(time / 60))
      callSecond = this.fillZero(time % 60)
      if (parseInt(time / 60 / 60)) {
        callTime = callHour + ' : ' + callMinute + ' : ' + callSecond
        return callTime
      }
      callTime = callMinute + ' : ' + callSecond
      return callTime
    },
    fillZero (num) {
      num = num < 10 ? '0' + num : num
      return num
    }
  },
  watch: {
    // 监听消息，更新未读数
    '$store.state.updatesession' (updatesession) {
      this.sessions.forEach(item => {
        if (item.to === updatesession.to) {
          item.lastMsg = updatesession.lastMsg
          item.unread = updatesession.unread
          item.chatTime = this.dealTime(updatesession.updateTime)
          this.disposeMessageType(item)
        }
      })
    },
    // 更新会话列表
    '$store.state.sessions': function (sessions) {
      this.dealSessions(sessions)
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./messages.scss";
</style>
