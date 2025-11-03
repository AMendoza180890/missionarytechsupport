import { a as createComponent, m as maybeRenderHead, e as renderScript, b as addAttribute, d as renderTemplate, f as renderComponent } from '../chunks/astro/server_D-G8JiKZ.mjs';
import 'kleur/colors';
import { s as siteLang, b as siteCurrency, $ as $$Layout, a as $$Section } from '../chunks/Section_Dhk1IdUR.mjs';
import { $ as $$Heading } from '../chunks/Heading_C55jawmY.mjs';
import 'clsx';
import { g as getCollection } from '../chunks/_astro_content_CTdN7Q3P.mjs';
/* empty css                                */
export { renderers } from '../renderers.mjs';

const $$Menu$1 = createComponent(async ($$result, $$props, $$slots) => {
  const plates = await getCollection("plates");
  const siteLangFormat = siteLang.replace("_", "-");
  return renderTemplate`<!-- Quick Nav --><!-- <div id="plate-nav-wrapper" class="mb-20 sticky top-8 z-10">
	<nav class="bg-brand-green text-white sm:rounded-full max-w-5xl mx-auto">
		<div class="swiper-plates w-auto overflow-hidden">
			<ul id="plate-nav" class="px-2.5 py-3 swiper-wrapper">
				{
					plates.map((plate) => (
						<li class="swiper-slide !w-auto last:mr-5">
							<a
								href={\`#\${plate.data.slug}\`}
								class="rounded-full px-2 py-1 transition font-medium select-none"
								data-category-link={plate.data.slug}
							>
								{plate.data.prettyName}
							</a>
						</li>
					))
				}
			</ul>
		</div>
	</nav>
</div> -->${maybeRenderHead()}<div class="grid grid-cols-1 gap-y-32" data-astro-cid-2j44jlrm> ${plates.map((plate) => renderTemplate`<div${addAttribute(plate.data.slug, "id")} class="space-y-16 scroll-mt-20"${addAttribute(plate.data.slug, "data-category-section")} data-astro-cid-2j44jlrm> <div class="flex flex-col items-center gap-2 max-w-lg mx-auto text-balance text-center" data-astro-cid-2j44jlrm> <h3 class="h4 text-brand-green/70" data-astro-cid-2j44jlrm>${plate.data.prettyName}</h3> <p data-astro-cid-2j44jlrm>${plate.data.description}</p> </div> <dl class="max-w-5xl mx-auto" data-astro-cid-2j44jlrm> <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-x-16 xl:gap-x-32" data-astro-cid-2j44jlrm> ${plate.data.plates.map((item) => renderTemplate`<div data-astro-cid-2j44jlrm> <dt data-astro-cid-2j44jlrm> <div class="flex justify-between items-center" data-astro-cid-2j44jlrm> <span class="font-bold text-2xl tracking-wide" data-astro-cid-2j44jlrm>${item.name}</span> <span class="font-medium text-lg" data-astro-cid-2j44jlrm> ${new Intl.NumberFormat(siteLangFormat, {
    style: "currency",
    currency: siteCurrency
  }).format(item.price)} </span> </div> </dt> <dd data-astro-cid-2j44jlrm> <p class="mt-2 text-gray-500 tracking-wide leading-normal text-balance" data-astro-cid-2j44jlrm> ${item.description} </p> </dd> </div>`)} </div> </dl> </div>`)} </div>  ${renderScript($$result, "D:/missionary tech support/website/missionarytechsupport/src/components/Menu.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/missionary tech support/website/missionarytechsupport/src/components/Menu.astro", void 0);

const $$Menu = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Section", $$Section, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Heading", $$Heading, {}, { "heading-content": ($$result4) => renderTemplate`${maybeRenderHead()}<p>
We offer a variety of dishes, from traditional to modern, that are sure to satisfy your cravings.
</p>`, "heading-title": ($$result4) => renderTemplate`<h1 class="font-black text-brand-green h2">Our menu</h1>` })} ${renderComponent($$result3, "MenuList", $$Menu$1, {})} ` })} ` })}`;
}, "D:/missionary tech support/website/missionarytechsupport/src/pages/menu.astro", void 0);

const $$file = "D:/missionary tech support/website/missionarytechsupport/src/pages/menu.astro";
const $$url = "/menu";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Menu,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
