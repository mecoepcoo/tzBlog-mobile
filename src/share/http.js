/* http库 */
const axios = require('axios')

class Http {
  /**
   * GET request
   * @param {string} url
   * @param {json} [params]
   */
  async get (url, params = '') {
    const {data} = await axios.get(url, {
      params: params
    })
    return data
  }

  /**
   * POST request
   * @param {string} url
   * @param {json} datas
   */
  async post (url, datas = {}) {
    const {data} = await axios.post(url, datas)
    return data
  }
}

export default new Http()
