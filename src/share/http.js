/* http库 */
const axios = require('axios')

class Http {
  /**
   * GET request
   * @param {string} url
   * @param {object} [params]
   * @param {object} [options]
   */
  async get (url, params = {}, ...options) {
    const {data} = await axios.get(url, {
      params: params,
      ...options,
    })
    return data
  }

  /**
   * POST request
   * @param {string} url
   * @param {object} datas
   * @param {object} [options]
   */
  async post (url, datas = {}, ...options) {
    const {data} = await axios.post(url, datas, {
      ...options,
    })
    return data
  }
}

export default new Http()
