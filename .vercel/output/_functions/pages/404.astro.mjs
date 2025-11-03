import { a as createComponent, f as renderComponent, d as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_D-G8JiKZ.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Section } from '../chunks/Section_Dhk1IdUR.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Section", $$Section, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="min-h-full mx-auto w-full max-w-6xl"> <div class="text-center"> <p class="font-bold text-brand-red text-8xl">404</p> <h1 class="mt-8 text-4xl font-black text-balance lg:text-5xl">This page could not be found.</h1> <p class="mt-6 text-base text-balance">You may have mistyped the address or the page may have moved.</p> <div class="mt-16"> <a href="/" class="button button-green"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-4 inline-block -mt-0.5 mr-1"> <path fill-rule="evenodd" d="M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707l7-7Z" clip-rule="evenodd"></path> </svg>
Go back home
</a> </div> </div> </div> ` })} ` })}`;
}, "D:/missionary tech support/website/missionarytechsupport/src/pages/404.astro", void 0);

const $$file = "D:/missionary tech support/website/missionarytechsupport/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
