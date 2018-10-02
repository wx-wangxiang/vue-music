import axios from 'axios';
import { commonParams } from './config';

export const getRecommend = function () {
  const url = '/api/getCommend';
  const params = Object.assign({}, commonParams, {
    platform: 'h5',
    uin: 0,
    needNewCode: 1
  });

  axios.get(url, {
    params
  }).then((res) => {
    console.log(res);
  });
}
