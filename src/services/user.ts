import { request } from 'umi';

export async function query() {
  return request<API.CurrentUser[]>('/api/users');
}

export async function queryCurrent(userid: string) {
  return request<API.CurrentUser>('/api/frameadmin/currentUser', {
    method: 'POST',
    data: { userid },
  });
}

export async function queryNotices(): Promise<any> {
  return request<{ data: API.NoticeIconData[] }>('/api/notices');
}
