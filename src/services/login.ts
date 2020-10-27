import { request } from 'umi';

export interface LoginParamsType {
  username: string;
  password: string;
  mobile: string;
  captcha: string;
  type: string;
}

export async function fakeAccountLogin(params: LoginParamsType) {
  return request<API.LoginStateType>('/api/frameadmin/account', {
    method: 'POST',
    data: params,
  });
}

export async function getFakeCaptcha(mobile: string) {
  return request(`/api/frameadmin/captcha?mobile=${mobile}`);
}

export async function outLogin(userid: string) {
  return request<API.HttpRule>('/api/frameadmin/outLogin', {
    method: 'POST',
    data: { userid },
  });
}
