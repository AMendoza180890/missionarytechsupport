import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_fP1wMkrv.mjs';
import { manifest } from './manifest_DS5da2-c.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/_actions/_---path_.astro.mjs');
const _page2 = () => import('./pages/404.astro.mjs');
const _page3 = () => import('./pages/about-us.astro.mjs');
const _page4 = () => import('./pages/api/email.astro.mjs');
const _page5 = () => import('./pages/api/suscribe.astro.mjs');
const _page6 = () => import('./pages/book.astro.mjs');
const _page7 = () => import('./pages/contact.astro.mjs');
const _page8 = () => import('./pages/donate.astro.mjs');
const _page9 = () => import('./pages/gallery.astro.mjs');
const _page10 = () => import('./pages/hostinfo.astro.mjs');
const _page11 = () => import('./pages/menu.astro.mjs');
const _page12 = () => import('./pages/privacy-policy.astro.mjs');
const _page13 = () => import('./pages/stories.astro.mjs');
const _page14 = () => import('./pages/thank-you.astro.mjs');
const _page15 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["node_modules/astro/dist/actions/runtime/route.js", _page1],
    ["src/pages/404.astro", _page2],
    ["src/pages/about-us.astro", _page3],
    ["src/pages/API/email.ts", _page4],
    ["src/pages/API/suscribe.ts", _page5],
    ["src/pages/book.astro", _page6],
    ["src/pages/contact.astro", _page7],
    ["src/pages/donate.astro", _page8],
    ["src/pages/gallery.astro", _page9],
    ["src/pages/hostInfo.astro", _page10],
    ["src/pages/menu.astro", _page11],
    ["src/pages/privacy-policy.mdx", _page12],
    ["src/pages/stories.astro", _page13],
    ["src/pages/thank-you.astro", _page14],
    ["src/pages/index.astro", _page15]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_astro-internal_actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "0d2bfe8a-b7c9-4bd5-b495-2fd436c2d547",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
