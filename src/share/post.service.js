import http from '../share/http'
import config from '../share/config'

const postService = {
  created: function () {
    console.log('hello')
  },
  methods: {
    _getPosts: function () {
      return http.get(`${config.siteRoot}posts`)
    }
  }
}

export default postService
