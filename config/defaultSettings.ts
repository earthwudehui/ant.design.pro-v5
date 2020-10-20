import { Settings as LayoutSettings } from '@ant-design/pro-layout';

export default {
  "navTheme": "dark",
    "primaryColor": "#1890ff",
    "layout": "side",
    "contentWidth": "Fluid",
    "fixedHeader": false,
    "fixSiderbar": true,
    "menu": {
    "locale": false
  },
  "title": "Ant Design Pro",
    "pwa": false,
    "iconfontUrl": ""
} as LayoutSettings & {
  pwa: boolean;
};
