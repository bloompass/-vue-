import axios from 'axios'
const baseUrl = 'api/mobileWeb/newHomepage3'

export default {
  data () {
    return {
      bannerlist: ''
    }
  },
  mounted () {
    axios.get(baseUrl).then(res => {
      console.log(res.data.info)
      let arr = []
      for (let i = 0; i < res.data.info.banner.length; i++) {
        arr.push(res.data.info.banner[i])
      }
      console.log(arr)
      this.bannerlist = arr
    }).catch(err => {
      console.log(err)
    })
  }
}