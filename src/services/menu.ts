// 路由控制
import { request } from 'umi';

export async function getMenuList(userid:string) {
  return request<API.HttpRule>('/api/menu/getMenu',{
    method:'POST',
    data:{userid}
  });
}
