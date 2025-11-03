import { c as createAstro, a as createComponent, b as addAttribute, e as renderScript, d as renderTemplate, m as maybeRenderHead, f as renderComponent, t as renderHead, r as renderSlot } from './astro/server_D-G8JiKZ.mjs';
import 'kleur/colors';
/* empty css                            */
import 'clsx';
import './index_DfOMS8cV.mjs';
import { c as $$Image } from './_astro_assets_C1sBkEwP.mjs';

const $$Astro$3 = createAstro("https://missionarytechsupport.org");
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "D:/missionary tech support/website/missionarytechsupport/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/missionary tech support/website/missionarytechsupport/node_modules/astro/components/ClientRouter.astro", void 0);

const logoImagen = new Proxy({"src":"/_astro/logoMTS.DLzC5v_P.png","width":612,"height":568,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/missionary tech support/website/missionarytechsupport/src/assets/images/logoMTS.png";
							}
							
							return target[name];
						}
					});

const menuMain = [
    {
        name: "Home",
        url: "/",
        highlighted: false,
    },
    {
        name: "About Us",
        url: "/about-us",
        highlighted: false,
    },
    {
        name: "Host info",
        url: "/hostInfo",
        highlighted: false,
    },
    {
        name: "Stories",
        url: "/stories",
        highlighted: false,
    },
    {
        name: "Contact",
        url: "/contact",
        highlighted: false,
    },
    {
        name: "Donate",
        url: "/donate",
        highlighted: true,
    },
];

const $$Astro$2 = createAstro("https://missionarytechsupport.org");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Header;
  const rmTrailingSlash = (path) => {
    return path.endsWith("/") && path.length > 1 ? path.slice(0, path.length - 1) : path;
  };
  const pathname = rmTrailingSlash(Astro2.url.pathname);
  return renderTemplate`${maybeRenderHead()}<header x-data="{ open: false }" @keydown.window.escape="open = false"> <div class="container py-6"> <nav class="flex items-center justify-between" aria-label="Global"> <a href="/" class="-m-1.5 p-1.5"> <!-- <p class="font-bold text-4xl text-brand-green">{firstTitle}<span class="text-brand-red bg-brand-red/5 px-3 ml-1 rounded-lg">{secondTitle}</span></p> --> ${renderComponent($$result, "Image", $$Image, { "src": logoImagen, "class": "w-40 h-38", "alt": "Missionary Tech Support Logo" })}</a> <div class="flex lg:hidden"> <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5" @click="open = true"> <span class="sr-only">Open main menu</span> <svg class="size-8 text-brand-green" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon"> <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path> </svg> </button> </div> <div class="hidden lg:flex lg:gap-x-12 lg:items-center"> ${menuMain.map((item) => renderTemplate`<a${addAttribute(item.url, "href")}${addAttribute(`transition text-base/6 font-semibold hover:text-brand-green ${item.highlighted ? "menu-item-highlighted" : ""} ${pathname === item.url ? "menu-item-active" : ""}`, "class")}> ${item.name} </a>`)} </div> </nav> <div class="lg:hidden" x-ref="dialog" x-show="open" x-cloak aria-modal="true"> <div class="fixed inset-0 z-50 w-full overflow-y-auto bg-white px-8 py-6" x-show="open" x-transition:enter="transition ease-out" x-transition:enter-start="opacity-0" x-transition:enter-end="opacity-100" x-transition:leave="transition ease-in" x-transition:leave-start="opacity-100" x-transition:leave-end="opacity-0" x-cloak> <div class="flex items-center justify-between"> <a href="/" class="-m-1.5 p-1.5"> ${renderComponent($$result, "Image", $$Image, { "src": logoImagen, "class": "w-40 h-38", "alt": "Missionary Tech Support Logo" })} <!-- <p class="font-bold text-4xl text-brand-green">Astro<span class="text-brand-red">Pie</span></p> --> </a> <button type="button" class="-m-2.5 p-2.5 text-brand-red" @click="open = false"> <span class="sr-only">Close menu</span> <svg class="size-8" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" data-slot="icon"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"></path> </svg> </button> </div> <div class="mt-6 flow-root"> <div class="-my-6 divide-y divide-gray-500/10"> <div class="space-y-2 py-6 mt-16"> ${menuMain.map((item) => renderTemplate`<a @click="open = false"${addAttribute(item.url, "href")}${addAttribute(`block py-2 text-center font-semibold text-3xl ${item.highlighted ? "menu-item-highlighted w-max mx-auto !px-8 !py-2" : ""} ${pathname === item.url ? "menu-item-active" : ""}`, "class")}> ${item.name} </a>`)} </div> </div> </div> </div> </div> </div> </header>`;
}, "D:/missionary tech support/website/missionarytechsupport/src/components/Header.astro", void 0);

const siteLang = "en-US";
const siteCurrency = "USD";
const siteName = "Missionary Tech Support";
const themeColor = "#FF0000";

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="bg-brand-green text-white"> <div class="container pt-10 pb-8"> ${renderComponent($$result, "Image", $$Image, { "src": logoImagen, "class": "flex flex-col sm:flex-row items-center justify-center mx-auto w-40 h-38", "alt": "Missionary Tech Support Logo" })} <!-- <p class="text-center font-bold text-4xl text-white">{firstTitle}<span class="text-brand-red bg-white px-3 ml-1 rounded-lg">{secondTitle}</span></p> --> <nav class="flex flex-col sm:flex-row items-center justify-center gap-x-12 gap-y-3 font-medium mt-6" aria-label="Footer"> ${menuMain.map((item) => renderTemplate`<a${addAttribute(item.url, "href")} class="hover:underline"> ${item.name} </a>`)} </nav> <p class="mt-10 text-center text-sm">&copy; ${currentYear} ${siteName}. All rights reserved. <a class="underline" href="/privacy-policy">Privacy policy</a></p> </div> </footer>`;
}, "D:/missionary tech support/website/missionarytechsupport/src/components/Footer.astro", void 0);

const $$Astro$1 = createAstro("https://missionarytechsupport.org");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { pageTitle, title, description } = Astro2.props;
  const baseUrl = `${Astro2.url.protocol}//${Astro2.url.host}`;
  return renderTemplate`<html${addAttribute(siteLang, "lang")}> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="theme-color"${addAttribute(themeColor, "content")}><meta name="description"${addAttribute(description, "content")}><meta name="robots" content="index,follow"><meta name="googlebot" content="index,follow"><link rel="author" href="humans.txt"><!-- <link
			rel="apple-touch-icon"
			sizes="180x180"
			href="/images/favicon/apple-touch-icon.png"
		/> --><link rel="icon"${addAttribute(`${baseUrl}/icons/MTS.ico`, "href")}><!-- <link
			rel="icon"
			type="image/png"
			sizes="16x16"
			href="/images/favicon/favicon-16x16.png"
		/>
		<link rel="manifest" href="/site.webmanifest" />
		<link
			rel="mask-icon"
			href="/images/favicon/safari-pinned-tab.svg"
			color="#E6F4FF"
		/> --><meta name="msapplication-TileColor" content="#ffffff"><meta property="og:url"${addAttribute(Astro2.url, "content")}><meta property="og:type" content="website"><meta property="og:title"${addAttribute(title, "content")}><meta property="og:image"${addAttribute(`${baseUrl}/images/logoMTS-og.png`, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:site_name" content="WP Infusion"><meta property="og:locale"${addAttribute(siteLang, "content")}><meta name="twitter:card" content="summary"><meta name="twitter:url"${addAttribute(Astro2.url, "content")}><meta name="twitter:title"${addAttribute(title, "content")}><meta name="twitter:description"${addAttribute(description, "content")}><meta name="twitter:image"${addAttribute(`${baseUrl}/images/logoMTS-og.png`, "content")}><title>${pageTitle}</title>${renderComponent($$result, "ClientRouter", $$ClientRouter, {})}${renderComponent($$result, "ViewTransitions", $$ClientRouter, {})}${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <main> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "D:/missionary tech support/website/missionarytechsupport/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro("https://missionarytechsupport.org");
const $$Section = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Section;
  const { id, class: className, contain = true } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(className, "class")}> <div${addAttribute(`${contain ? "container py-16 lg:py-32" : ""}`, "class")}> ${renderSlot($$result, $$slots["default"])} </div> </section>`;
}, "D:/missionary tech support/website/missionarytechsupport/src/components/Section.astro", void 0);

export { $$Layout as $, $$Section as a, siteCurrency as b, siteLang as s };
