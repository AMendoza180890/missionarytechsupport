import { a as createComponent, m as maybeRenderHead, f as renderComponent, F as Fragment, d as renderTemplate, r as renderSlot } from './astro/server_D-G8JiKZ.mjs';
import 'kleur/colors';

const $$Heading = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="mx-auto max-w-5xl text-center prose mb-20"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["heading-title"])} ` })} ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["heading-content"])} ` })} </div>`;
}, "D:/missionary tech support/website/missionarytechsupport/src/components/Heading.astro", void 0);

export { $$Heading as $ };
