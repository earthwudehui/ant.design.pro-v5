import request from 'umi-request';
import { TableListParams } from './data.d';

export async function queryAdmin(params?: TableListParams) {
  return request('/api/resmanage/usermanage/queryAdmin', {
    method: 'POST',
    data: { params },
  });
}
