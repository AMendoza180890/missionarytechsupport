import { a as createComponent, m as maybeRenderHead, f as renderComponent, F as Fragment, d as renderTemplate, r as renderSlot, c as createAstro, b as addAttribute } from '../chunks/astro/server_D-G8JiKZ.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Section } from '../chunks/Section_Dhk1IdUR.mjs';
import { $ as $$Article } from '../chunks/Article_BGdp9aiM.mjs';
import '../chunks/index_DfOMS8cV.mjs';
import { $ as $$Picture } from '../chunks/_astro_assets_C1sBkEwP.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:items-center"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["hero-content-left"])} ` })} ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["hero-content-right"])} ` })} </div>`;
}, "D:/missionary tech support/website/missionarytechsupport/src/components/Hero.astro", void 0);

const $$Astro = createAstro("https://missionarytechsupport.org");
const $$Badge = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Badge;
  const { color = "green", title = "" } = Astro2.props;
  const colors = {
    red: "bg-brand-red/5 text-brand-red ring-1 ring-brand-red",
    green: "bg-brand-green/5 text-brand-green ring-1 ring-brand-green",
    white: "bg-white"
  };
  return renderTemplate`${maybeRenderHead()}<span${addAttribute(`inline-flex not-prose items-center mb-4 rounded-full px-3 py-1 text-base font-semibold ${colors[color]}`, "class")}>${title}</span>`;
}, "D:/missionary tech support/website/missionarytechsupport/src/components/Badge.astro", void 0);

const AboutUsHeader = new Proxy({"src":"/_astro/aboutUs-header.D11YZpvr.jpg","width":8000,"height":5333,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/missionary tech support/website/missionarytechsupport/src/assets/img/aboutUs-header.jpg";
							}
							
							return target[name];
						}
					});

const $$AboutUs = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Section", $$Section, { "class:list": "bg-white" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Hero", $$Hero, {}, { "hero-content-left": ($$result4) => renderTemplate`${maybeRenderHead()}<div class="prose max-w-none max-lg:order-1"> <h1 class="font-black">
God-given talents, given back to Him through service
</h1> <p>
Connecting tech and media talents with ministry impact, empowering
          nonprofits to accelerate positive change globally. Partnering with
          nonprofit ministries around the world to provide general tech,
          web-development, photography, and media support.
</p> ${renderComponent($$result4, "Badge", $$Badge, { "title": "#MissionaryTechSupport" })} </div>`, "hero-content-right": ($$result4) => renderTemplate`<div> ${renderComponent($$result4, "Picture", $$Picture, { "class:list": "mx-auto", "src": AboutUsHeader, "height": 600, "formats": ["avif", "webp"], "alt": "A description of my image.", "loading": "eager", "fetchpriority": "high", "style": {
    border: "2px solid white",
    borderRadius: "10px"
  } })} </div>` })} ` })} ${renderComponent($$result2, "Section", $$Section, { "class:list": "bg-white" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Article", $$Article, {}, { "default": ($$result4) => renderTemplate` <h2>Our Story</h2> <p>
Our team is made up of a husband and wife duo, called to serve the Lord
        by serving His people. We believe that the Lord will use our skills to
        empower His ministries around the world.
</p> <p>
Allan, a Nicaraguan native, studied Computer Sciences at the University
        of Managua, going on to co-create WebNica, a company dedicated to
        support companies throughout the Americas with web development. He also
        served as the Head of Technology for a Christian nonprofit called
        Tesoros de Dios, God’s Treasures where he created websites, managed
        online fundraising campaigns, hosted webinars, and taught teenagers with
        disabilities computer skills.
</p> <p>
Kaley has a background in missions, photojournalism, and non-profit
        development. She traveled through Central America, Eastern Europe, and
        South Africa as part of a one year missionary program, serving as the
        photojournalist for the organization. She is passionate about creating
        content for ministries to send to supporters, bringing stories to life
        to spark passion in readers, and telling the Church of all the Lord is
        doing globally as an encouragement that He is still on the move as He
        was in Biblical days.
</p> <p>
We met while serving neighboring nonprofits in Managua, Nicaragua and
        have been serving together ever since. We are passionate about bringing
        encouragement and teachable skills to ministries around the world. Our
        goal is to use our gifts to help bring about a lasting change on a
        global level, all for the glory of God.
</p> ` })} ` })} ` })}`;
}, "D:/missionary tech support/website/missionarytechsupport/src/pages/about-us.astro", void 0);

const $$file = "D:/missionary tech support/website/missionarytechsupport/src/pages/about-us.astro";
const $$url = "/about-us";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$AboutUs,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
