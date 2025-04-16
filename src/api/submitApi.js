import axios from "../config/axios";

/**
 * @typedef {{
 *  code:string
 *  questionId: string
 * }}
 */
var submissonsType;

const submitApi = {
  /**
   *
   * @param {submissonsType} body
   */
  submit(body) {
    return axios.post("submissions", body);
  },
};

export default submitApi;
