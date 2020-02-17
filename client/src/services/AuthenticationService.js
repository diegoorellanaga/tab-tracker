import Api from '@/services/Api'

export default {
  register (credentials) {
    return Api().post('register', credentials)
  },
  register2 (credentials) {
    return Api().post('register2', credentials)
  }
}
// AuthenticationRegister.register({data}) // this is how you call it
