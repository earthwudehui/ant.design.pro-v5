export interface TableListItem {
  id: number;
  name: string;
  password: string;
  realName: string;
  mobile: string;
}

export interface TableListParams {
  id?: number;
  name?: string;
  password?: string;
  realName?: string;
  mobile?: string;
  status?: string;
  loginDate?: Date;

  pageSize?: number;
  currentPage?: number;
  filter?: { [key: string]: any[] };
  sorter?: { [key: string]: any };
}
