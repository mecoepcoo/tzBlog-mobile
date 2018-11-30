import http from '../share/http'
import api from './apiConfig'

const postService = {
  created: function () {
    
  },
  methods: {
    _getPosts: function () {
      return http.get(`${api.siteRoot}posts`)
    }
  }
}

export default postService
