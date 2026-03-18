
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 811, hash: 'e42e6d03a3c8d9d6f5f44412f67499f2261cbdb5effcd95eeade0f5debe9646e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 949, hash: 'dc52d07d4667b0222d93e88b86801c6b54021dddd955ddad98f2099c92593d0f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 31802, hash: 'e5ab42c14cbf9835e703ab91cc15148a5093015581f0b6b680875f27ec15c066', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-QSJVMTHD.css': {size: 2114, hash: 'UKA0qG49rPw', text: () => import('./assets-chunks/styles-QSJVMTHD_css.mjs').then(m => m.default)}
  },
};
