import axios from "axios";

const get = async (url, params) => {
  axios({
    method: "get",
    params: params,
  });
};

const post = (url, params) => {};
