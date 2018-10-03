import axios from 'axios';
import { commonParams } from './config';

export const getRecommend = function () {
  const url = '/api/getRecommend';
  const params = Object.assign({}, commonParams, {
    platform: 'h5',
    uin: 0,
    needNewCode: 1
  });

  return axios.get(url, {
    params
  }).then((res) => {
    return Promise.resolve(res.data);
  });
};

export const getDiscList = function () {
  const url = '/api/getDiscList';
  const params = Object.assign({}, commonParams, {
    picmid: 1,
    rnd: Math.random(),
    hostUin: 0,
    sin: 0,
    ein: 29,
    platform: 'yqq',
    sortId: 5,
    needNewCode: 1,
    categoryId: 10000000
  });

  return axios.get(url, {
    params
  }).then((res) => {
    return Promise.resolve(res.data);
  });
};

//export const getDis
