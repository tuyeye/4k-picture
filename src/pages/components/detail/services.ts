import request from '@/pages/request';

export async function getDetail(params: any) {
  return request('/getDetail', { params });
}
