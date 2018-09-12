export default class Storage {
  static set origin (origin) {
    window.app.$store.commit('saveOrigin', origin)
  }

  static get origin () {
    return window.app.$store.state.token
  }

  static set id (id) {
    window.app.$store.commit('saveId', id)
  }

  static get id () {
    return window.app.$store.state.id
  }

  static set oid (oid) {
    window.app.$store.commit('saveOid', oid)
  }

  static get oid () {
    return window.app.$store.state.oid
  }

  static set token (token) {
    window.app.$store.commit('saveToken', token)
  }

  static get token () {
    return window.app.$store.state.token
  }

  static set phone (phone) {
    window.app.$store.commit('savePhone', phone)
  }

  static get phone () {
    return window.app.$store.state.phone
  }

  static set name (name) {
    window.app.$store.commit('saveName', name)
  }

  static get name () {
    return window.app.$store.state.name
  }

  static set paySet (paySet) {
    window.app.$store.commit('savePaySet', paySet)
  }

  static get paySet () {
    return window.app.$store.state.paySet
  }

  static set publishObject (publishObject) {
    window.app.$store.commit('savePublishObject', publishObject)
  }

  static get publishObject () {
    return window.app.$store.state.publishObject
  }

  static set clearPublishObject (friendList) {
    window.app.$store.commit('clearPublishObject', friendList)
  }

  static get clearPublishObject () {
    return window.app.$store.state.friendList
  }

  static set purpose (purpose) {
    window.app.$store.commit('savePurpose', purpose)
  }

  static get purpose () {
    return window.app.$store.state.purpose
  }

  static set card (card) {
    window.app.$store.commit('saveBankCard', card)
  }
  static get card () {
    return window.app.$store.state.card
  }
}
