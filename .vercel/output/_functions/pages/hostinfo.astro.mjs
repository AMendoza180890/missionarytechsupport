import { a as createComponent, f as renderComponent, d as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_D-G8JiKZ.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Section } from '../chunks/Section_Dhk1IdUR.mjs';
import { $ as $$Heading } from '../chunks/Heading_C55jawmY.mjs';
export { renderers } from '../renderers.mjs';

const $$HostInfo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Section", $$Section, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Heading", $$Heading, {}, { "heading-content": ($$result4) => renderTemplate`${maybeRenderHead()}<p>
Host information refers to the organization that will accommodate our team during the project. It includes details about their mission, staff, and current technological infrastructure. Understanding this information allows us to identify their needs in IT support and multimedia, ensuring our assistance aligns with their goals. This collaboration aims to strengthen their operations through effective and sustainable technology solutions.
</p>`, "heading-title": ($$result4) => renderTemplate`<h1 class="font-black h1">Host Information</h1>` })}  ` })} ` })}`;
}, "D:/missionary tech support/website/missionarytechsupport/src/pages/hostInfo.astro", void 0);

const $$file = "D:/missionary tech support/website/missionarytechsupport/src/pages/hostInfo.astro";
const $$url = "/hostInfo";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$HostInfo,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
