import request from 'umi-request';
import { TableListParams } from './data.d';
import { TableListItem } from '@/services/resmanageservice/usermanage/data';

export async function queryUser(params?: TableListParams) {
  return request('/api/resmanage/usermanage/queryUser', {
    method: 'POST',
    data: { params },
  });
}

export async function saveUser(params: TableListItem) {
  return request('/api/resmanage/usermanage/saveUser', {
    method: 'POST',
    data: {
      ...params,
      method: 'post',
    },
  });
}
