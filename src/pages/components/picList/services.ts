import request from '@/pages/request';
import { picListKey } from './data.t';

export async function getList(params: picListKey) {
  return request('/getList', { params });
}
