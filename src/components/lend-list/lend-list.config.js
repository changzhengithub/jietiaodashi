module.exports = {
  content: '借出',
  router: true,
  vuex: {
    mutations: false,
    state: false
  },
  class: {
    'Account': false,
    'BM': false,
    'Btn': false,
    'Call': false,
    'Chat': false,
    'Check': false,
    'Citys': false,
    'Days': false,
    'Error': false,
    'Hasten': false,
    'Http': true,
    'Initial': false,
    'Mock': false,
    'Replace': false,
    'Router': false,
    'Sort': false,
    'Status': true,
    'Storage': true,
    'Time': false,
    'Type': true,
    'Url': false
  },
  components: {
    'billboard': false,
    'board': 1,
    'button': false,
    'contact-list': false,
    'deadline': false,
    'detail-list': false,
    'dialog': false,
    'image-bg': `require('../../assets/images/lend.png')`,
    'inputs': false,
    'keyboard': false,
    'modal': false,
    'modals': false,
    'nav': `{
        content: ['当前', '已放款', '已逾期', '已还清', '已失效'],
        active: ''
      }`,
    'pay-password': false,
    'pull-refresh': `''`,
    'receipt': `[]`,
    'tab': false,
    'tip': false,
    'title': `{
        contentText: '借出'
      }`,
    'without': 1,
    'work-card': false
  }
}
