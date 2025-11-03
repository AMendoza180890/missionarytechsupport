import { a as createComponent, f as renderComponent, e as renderScript, d as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_D-G8JiKZ.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Section } from '../chunks/Section_Dhk1IdUR.mjs';
import { $ as $$Heading } from '../chunks/Heading_C55jawmY.mjs';
import '../chunks/index_DfOMS8cV.mjs';
import { $ as $$Picture } from '../chunks/_astro_assets_C1sBkEwP.mjs';
import { g as getCollection } from '../chunks/_astro_content_CTdN7Q3P.mjs';
export { renderers } from '../renderers.mjs';

const $$Gallery = createComponent(async ($$result, $$props, $$slots) => {
  const gallery = await getCollection("gallery");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Section", $$Section, { "class:list": "[&>.container]:pb-0" }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Heading", $$Heading, {}, { "heading-content": async ($$result4) => renderTemplate`${maybeRenderHead()}<p>
Get a feel of our restaurant and food through our gallery. We promise a memorable culinary experience.
</p>`, "heading-title": async ($$result4) => renderTemplate`<h1 class="font-black h1">Gallery</h1>` })} ` })} <div class="masonry-grid grid grid-cols-2 lg:grid-cols-3 pb-16 lg:pb-32"> ${gallery.map((item, index) => renderTemplate`<div class="masonry-grid-item"> <a${addAttribute(item.data.image.src, "href")} class="glightbox"> ${renderComponent($$result2, "Picture", $$Picture, { "src": item.data.image, "alt": item.data.alt, "class": "h-full w-full object-cover object-center", "loading": index < 3 ? "eager" : "lazy", "fetchpriority": index < 3 ? "high" : "auto" })} </a> </div>`)} </div> ` })} ${renderScript($$result, "D:/missionary tech support/website/missionarytechsupport/src/pages/gallery.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/missionary tech support/website/missionarytechsupport/src/pages/gallery.astro", void 0);

const $$file = "D:/missionary tech support/website/missionarytechsupport/src/pages/gallery.astro";
const $$url = "/gallery";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Gallery,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
