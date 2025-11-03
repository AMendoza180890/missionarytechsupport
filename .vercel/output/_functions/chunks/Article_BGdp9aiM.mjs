import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, r as renderSlot, d as renderTemplate } from './astro/server_D-G8JiKZ.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://missionarytechsupport.org");
const $$Article = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Article;
  const { contain = false } = Astro2.props;
  const classname = contain ? "prose mx-auto" : "prose max-w-none";
  return renderTemplate`${maybeRenderHead()}<article${addAttribute(classname, "class")}> ${renderSlot($$result, $$slots["default"])} </article>`;
}, "D:/missionary tech support/website/missionarytechsupport/src/components/Article.astro", void 0);

export { $$Article as $ };
