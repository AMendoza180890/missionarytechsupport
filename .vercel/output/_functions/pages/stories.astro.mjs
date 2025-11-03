import { a as createComponent, f as renderComponent, e as renderScript, d as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_D-G8JiKZ.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Section } from '../chunks/Section_Dhk1IdUR.mjs';
import { $ as $$Heading } from '../chunks/Heading_C55jawmY.mjs';
import { g as getCollection } from '../chunks/_astro_content_CTdN7Q3P.mjs';
import { $ as $$Newsletter } from '../chunks/Newsletter_DIeuFefa.mjs';
export { renderers } from '../renderers.mjs';

const $$Stories = createComponent(async ($$result, $$props, $$slots) => {
  await getCollection("gallery");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Section", $$Section, { "class:list": "[&>.container]:pb-0" }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Heading", $$Heading, {}, { "heading-content": async ($$result4) => renderTemplate`${maybeRenderHead()}<p>
At Missionary Tech Support, we believe that every project, mission trip, and act of service carries a story worth sharing. Through this blog, we open a window into the experiences, challenges, and testimonies of those who use technology to empower ministries around the world. Our goal is to inspire others to see how faith and innovation come together to make a lasting impact — one story at a time.
</p>`, "heading-title": async ($$result4) => renderTemplate`<h1 class="font-black h1">Stories</h1>` })} ` })}  ${renderComponent($$result2, "Newsletter", $$Newsletter, {})} ` })} ${renderScript($$result, "D:/missionary tech support/website/missionarytechsupport/src/pages/stories.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/missionary tech support/website/missionarytechsupport/src/pages/stories.astro", void 0);

const $$file = "D:/missionary tech support/website/missionarytechsupport/src/pages/stories.astro";
const $$url = "/stories";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Stories,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
