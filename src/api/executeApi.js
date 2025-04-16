import axios from "../config/axios";

/**
 * @typedef {{code: string}}
 */
var executeBody;

const executeApi = {
  /**
   *
   * @param {executeBody} body
   * @returns
   */
  execute(body) {
    return axios.post("/executes", body);
  },
};

export default executeApi;
