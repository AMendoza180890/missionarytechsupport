import { a as createComponent, v as spreadAttributes, u as unescapeHTML, d as renderTemplate, c as createAstro, m as maybeRenderHead, f as renderComponent, F as Fragment, r as renderSlot } from '../chunks/astro/server_D-G8JiKZ.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Section } from '../chunks/Section_Dhk1IdUR.mjs';
import '../chunks/index_DfOMS8cV.mjs';
import { c as $$Image, $ as $$Picture } from '../chunks/_astro_assets_C1sBkEwP.mjs';
import 'clsx';
import { $ as $$Heading } from '../chunks/Heading_C55jawmY.mjs';
import { $ as $$Newsletter } from '../chunks/Newsletter_DIeuFefa.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const logoTdd = new Proxy({"src":"/_astro/logoTddTransparent.BG2cF296.png","width":2072,"height":536,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/missionary tech support/website/missionarytechsupport/src/assets/img/organizations/logoTddTransparent.png";
							}
							
							return target[name];
						}
					});

function createSvgComponent({ meta, attributes, children }) {
  const Component = createComponent((_, props) => {
    const normalizedProps = normalizeProps(attributes, props);
    return renderTemplate`<svg${spreadAttributes(normalizedProps)}>${unescapeHTML(children)}</svg>`;
  });
  return Object.assign(Component, meta);
}
const ATTRS_TO_DROP = ["xmlns", "xmlns:xlink", "version"];
const DEFAULT_ATTRS = {};
function dropAttributes(attributes) {
  for (const attr of ATTRS_TO_DROP) {
    delete attributes[attr];
  }
  return attributes;
}
function normalizeProps(attributes, props) {
  return dropAttributes({ ...DEFAULT_ATTRS, ...attributes, ...props });
}

const logoWr = createSvgComponent({"meta":{"src":"/_astro/wr-white.D-yKmmkY.svg","width":582,"height":107,"format":"svg"},"attributes":{"id":"b","viewBox":"0 0 581.61 107.48"},"children":"<defs><style>.d,.e{fill:#fff}.e{fill-rule:evenodd}</style></defs><g id=\"c\"><path class=\"d\" d=\"M200.06 29.74a2.375 2.375 0 0 0-1.94-1.01h-4.81c-1.01 0-1.91.64-2.24 1.6l-11.74 34.15-11.75-34.33c-.33-.96-1.23-1.6-2.24-1.6h-3.54c-1.01 0-1.91.64-2.24 1.6l-11.75 34.33-11.74-34.15c-.33-.95-1.23-1.6-2.24-1.6h-5c-.77 0-1.49.38-1.94 1.01-.44.63-.55 1.44-.29 2.17l16.98 46.66c.34.93 1.23 1.56 2.22 1.56h3.82c1 0 1.9-.64 2.23-1.58l11.65-33.28 11.57 33.27c.33.95 1.23 1.59 2.23 1.59h3.81c.99 0 1.88-.62 2.22-1.56l16.98-46.66c.26-.72.16-1.53-.29-2.17zm26.93-2.09c-14.71 0-26.24 11.69-26.24 26.6v.18c0 14.82 11.44 26.42 26.06 26.42s26.24-11.69 26.24-26.6v-.18c0-14.81-11.45-26.42-26.06-26.42zm0 44.3c-9.36 0-16.7-7.77-16.7-17.7v-.18c0-9.99 7.1-17.52 16.52-17.52s16.7 7.78 16.7 17.7v.18c0 9.99-7.1 17.52-16.52 17.52zM288 28.01c-7.03-.27-13.54 2.75-18.24 8.12V31.1c0-1.31-1.06-2.37-2.36-2.37h-4.45a2.36 2.36 0 0 0-2.36 2.37v46.3c0 1.31 1.06 2.37 2.36 2.37h4.45c1.3 0 2.36-1.06 2.36-2.37V58.42c0-14.36 8.89-20.79 17.7-20.79h.45c1.31 0 2.37-1.06 2.37-2.36v-4.9c0-1.27-1-2.31-2.27-2.36zm14.88-19.25h-4.45c-1.31 0-2.37 1.06-2.37 2.36V77.4c0 1.31 1.06 2.37 2.37 2.37h4.45c1.31 0 2.37-1.06 2.37-2.37V11.13a2.36 2.36 0 0 0-2.37-2.36zm58.11 0h-4.45c-1.31 0-2.37 1.06-2.37 2.36v23.36c-4.63-4.5-10.31-6.84-16.7-6.84-12.23 0-24.88 9.95-24.88 26.6v.18c0 16.54 12.65 26.42 24.88 26.42 6.4 0 12-2.38 16.7-7.1v3.65c0 1.31 1.06 2.37 2.37 2.37h4.45c1.3 0 2.36-1.06 2.36-2.37V11.13c0-1.31-1.06-2.36-2.36-2.36zm-23.06 63.1c-7.84 0-15.79-6.05-15.79-17.61v-.18c0-10.42 6.35-17.42 15.79-17.42 7.95 0 16.52 6.7 16.52 17.52v.18c0 10.82-8.57 17.52-16.52 17.52zm92.16-43.85c-7.03-.27-13.54 2.75-18.25 8.12V31.1c0-1.31-1.06-2.37-2.36-2.37h-4.45c-1.31 0-2.37 1.06-2.37 2.37v46.3c0 1.31 1.06 2.37 2.37 2.37h4.45a2.36 2.36 0 0 0 2.36-2.37V58.42c0-14.36 8.89-20.79 17.7-20.79h.46c1.31 0 2.37-1.06 2.37-2.36v-4.9c0-1.27-1-2.31-2.27-2.36zm96.87 36.82c-.97-.86-2.46-.77-3.33.19-4.18 4.67-8.68 6.93-13.76 6.93-9.36 0-16.7-7.77-16.7-17.7v-.18c0-9.82 7.17-17.52 16.33-17.52 5.8 0 9.69 2.77 13.75 6.92.45.45 1.06.71 1.69.71.64 0 1.25-.26 1.69-.72l3.18-3.27c.89-.91.89-2.36.01-3.28-4.14-4.31-10.18-9.26-20.23-9.26-14.32 0-25.97 11.94-25.97 26.6v.18c0 14.57 11.65 26.42 25.97 26.42 10.64 0 16.89-5.69 20.66-9.97.86-.98.77-2.48-.21-3.34l-3.09-2.72zM558 27.65c-13.65 0-24.34 11.65-24.34 26.52v.18c0 15.11 10.78 26.51 25.06 26.51 10.72 0 16.79-5.06 20.89-9.47.43-.46.66-1.09.63-1.73a2.35 2.35 0 0 0-.8-1.65l-3.08-2.73c-.96-.84-2.42-.77-3.29.16-4.15 4.44-8.65 6.51-14.16 6.51-6.5 0-13.75-4.25-15.48-13.52h35.72c1.19 0 2.2-.89 2.35-2.07.11-.87.11-1.26.11-2.11 0-15.66-9.71-26.6-23.61-26.6zm-.18 8.81c8.65 0 12.78 6.45 13.95 13.25h-28.31c1.57-7.81 7.3-13.25 14.36-13.25zm-100.49-8.28h-15.01c-1.36 0-2.35 1.09-2.35 2.35v4.45c0 1.64 1.38 2.35 2.41 2.35h15.26c4.68 0 10.27 3.58 10.27 10.35s-5.98-1.22-12.98-1.22-22.61 2.69-22.61 17.44S449 80.97 452.57 80.97c9.57 0 15.34-5.22 15.34-5.23v1.77c0 1.08.78 2.34 2.36 2.34h4.37c1.3 0 2.35-.99 2.35-2.34V47.82c0-8.92-6.56-19.66-19.66-19.66zm-4.5 43.89c-6.62 0-11.07-3.57-11.07-8.25s3.54-8.62 12.89-8.62c8.6 0 12.65 1.33 13.25 1.55v5.06c-.81 5.85-7.17 10.27-15.07 10.27z\" /><path class=\"e\" d=\"M53.74 0C24.06 0 0 24.06 0 53.74s24.06 53.74 53.74 53.74 53.74-24.06 53.74-53.74S83.42 0 53.74 0zm19.21 67.28l-5.48-8.23h-.08l-.38-.08 2.07-5.9.06.07c2.56 0 4.04-1.24 4.04-3.23v-.08c0-2.14-1.55-3.23-4.08-3.23h-3.22l-6.92 20.86h-6.57L46.91 51.8l-5.44 15.66H34.9l-9.09-27.39h7.97l4.74 15.73 5.24-15.81h6.49L55.5 55.8l4.74-15.73h9.96c4.16 0 6.32 1.09 8.15 2.95 1.59 1.55 2.41 3.65 2.41 6.33v.08c0 4.16-2.22 6.92-5.6 8.35l6.49 9.48h-8.7z\" /></g>"});

const logoJaf = new Proxy({"src":"/_astro/jaf.C4BO-zpO.png","width":1000,"height":255,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/missionary tech support/website/missionarytechsupport/src/assets/img/organizations/jaf.png";
							}
							
							return target[name];
						}
					});

const logoSpecialOlympics = new Proxy({"src":"/_astro/lspecialolympics.Cav3Bn0c.png","width":1000,"height":947,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/missionary tech support/website/missionarytechsupport/src/assets/img/organizations/lspecialolympics.png";
							}
							
							return target[name];
						}
					});

const logoHouseHope = new Proxy({"src":"/_astro/logoHouseHope.trYDFiPG.png","width":200,"height":200,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/missionary tech support/website/missionarytechsupport/src/assets/img/organizations/logoHouseHope.png";
							}
							
							return target[name];
						}
					});

const $$Astro$1 = createAstro("https://missionarytechsupport.org");
const $$LogoCloud = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$LogoCloud;
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class=" py-24 sm:py-32"> <div class="mx-auto max-w-7xl px-6 lg:px-8"> <h2 class="text-center text-lg/8 font-semibold text-white">${title}</h2> <div class="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5"> ${renderComponent($$result, "Image", $$Image, { "width": "158", "height": "48", "src": logoTdd, "alt": "A nonprofit organization Tesoros de Dios", "class": "col-span-2 max-h-30 w-full object-contain lg:col-span-1" })} ${renderComponent($$result, "Image", $$Image, { "width": "158", "height": "48", "src": logoWr, "alt": "A nonprofit organization World race", "class": "col-span-2 max-h-30 w-full object-contain lg:col-span-1" })} ${renderComponent($$result, "Image", $$Image, { "width": "158", "height": "48", "src": logoJaf, "alt": "A nonprofit organization Joni and Friends", "class": "col-span-2 max-h-30 w-full object-contain lg:col-span-1" })} ${renderComponent($$result, "Image", $$Image, { "width": "158", "height": "48", "src": logoSpecialOlympics, "alt": "A nonprofit organization Special Olympics", "class": "col-span-2 max-h-30 w-full object-contain lg:col-span-1" })} ${renderComponent($$result, "Image", $$Image, { "width": "158", "height": "48", "src": logoHouseHope, "alt": "A nonprofit organization House of Hope", "class": "col-span-2 max-h-30 w-full object-contain lg:col-span-1" })} </div> </div></div>`;
}, "D:/missionary tech support/website/missionarytechsupport/src/components/LogoCloud.astro", void 0);

const $$Grid = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 xl:gap-20"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["grid-content-1"])} ` })} ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["grid-content-2"])} ` })} ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["grid-content-3"])} ` })} </div>`;
}, "D:/missionary tech support/website/missionarytechsupport/src/components/Grid.astro", void 0);

const $$Astro = createAstro("https://missionarytechsupport.org");
const $$WideImage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$WideImage;
  const { image, alt, class: className } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Picture", $$Picture, { "src": image, "alt": alt, "class:list": [className, "object-cover object-center w-full"] })}`;
}, "D:/missionary tech support/website/missionarytechsupport/src/components/WideImage.astro", void 0);

const slide = new Proxy({"src":"/_astro/group-friends-planning-trip-cafe.DTmMMCcX.jpg","width":5811,"height":3874,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/missionary tech support/website/missionarytechsupport/src/assets/img/group-friends-planning-trip-cafe.jpg";
							}
							
							return target[name];
						}
					});

const itSupport = new Proxy({"src":"/_astro/it-support.BlcZPQMo.jpg","width":4000,"height":2725,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/missionary tech support/website/missionarytechsupport/src/assets/img/it-support.jpg";
							}
							
							return target[name];
						}
					});

const webDeveloper = new Proxy({"src":"/_astro/web-developer.BXsacFeY.jpg","width":4000,"height":2725,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/missionary tech support/website/missionarytechsupport/src/assets/img/web-developer.jpg";
							}
							
							return target[name];
						}
					});

const photographyMedia = new Proxy({"src":"/_astro/photography-media.DBKtX3Yz.jpg","width":4088,"height":2725,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/missionary tech support/website/missionarytechsupport/src/assets/img/photography-media.jpg";
							}
							
							return target[name];
						}
					});

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Home", "pageTitle": "Home", "description": "Welcome to Missionary Tech Support", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Section", $$Section, { "class:list": "bg-white", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<section data-astro-cid-j7pv25f6> <div slot="hero-content-left" class="prose max-w-max max-lg:order-1" data-astro-cid-j7pv25f6> <h1 class="font-black" data-astro-cid-j7pv25f6>
God-given talents, given back to Him through service
</h1> <p data-astro-cid-j7pv25f6>
Connecting tech and media talents with ministry impact, empowering
          nonprofits to accelerate positive change globally. Partnering with
          nonprofit ministries around the world to provide general tech,
          web-development, photography, and media support.
</p> </div> </section> ` })} ${renderComponent($$result2, "WideImage", $$WideImage, { "image": slide, "alt": "Group of friends helping people", "class:list": "aspect-video lg:aspect-[16/6]", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Section", $$Section, { "class:list": "bg-white", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Heading", $$Heading, { "data-astro-cid-j7pv25f6": true }, { "heading-content": ($$result4) => renderTemplate`<p data-astro-cid-j7pv25f6>
We would love to support what the Lord is doing in your ministry through
        the gifts He has given us. We believe that He gave us these talents for
        two reasons: to share and to empower. We would love to share these gifts
        with your ministry and empower your team by teaching these skills that
        you may use going forward.
</p>`, "heading-title": ($$result4) => renderTemplate`<h2 class="font-black text-brand-green h2" data-astro-cid-j7pv25f6>
What We Offer
</h2>` })} ${renderComponent($$result3, "Grid", $$Grid, { "data-astro-cid-j7pv25f6": true }, { "grid-content-1": ($$result4) => renderTemplate`<div data-astro-cid-j7pv25f6> <div class="flex flex-col items-center prose text-center" data-astro-cid-j7pv25f6> ${renderComponent($$result4, "Picture", $$Picture, { "class:list": "not-prose w-full h-auto gridImg", "src": itSupport, "formats": ["avif", "webp"], "alt": "IT support", "data-astro-cid-j7pv25f6": true })} <h3 class="h4 mt-0 font-black" data-astro-cid-j7pv25f6>IT Support</h3> <p data-astro-cid-j7pv25f6>
From troubleshooting to system monitoring, installation to
            configuration, our team has your back. We work to find lasting
            solutions to even the most difficult tech problems. We are happy to
            help set your nonprofit up for success by serving wherever there is
            an IT need.
</p> </div> </div>`, "grid-content-2": ($$result4) => renderTemplate`<div data-astro-cid-j7pv25f6> <div class="flex flex-col items-center prose text-center" data-astro-cid-j7pv25f6> ${renderComponent($$result4, "Picture", $$Picture, { "class:list": "not-prose w-full h-auto gridImg", "src": webDeveloper, "formats": ["avif", "webp"], "alt": "Web Development", "data-astro-cid-j7pv25f6": true })} <h3 class="h4 mt-0 font-black" data-astro-cid-j7pv25f6>Web Development</h3> <p data-astro-cid-j7pv25f6>
With a background in web development and coding, we would be pleased
            to design, build or maintain your ministry’s website. Whether you
            would like to add a new feature to your page, update photos, or
            create a new website altogether, we are here to help!
</p> </div> </div>`, "grid-content-3": ($$result4) => renderTemplate`<div data-astro-cid-j7pv25f6> <div class="flex flex-col items-center prose text-center" data-astro-cid-j7pv25f6> ${renderComponent($$result4, "Picture", $$Picture, { "class:list": "not-prose w-full h-auto gridImg", "src": photographyMedia, "formats": ["avif", "webp"], "alt": "Photography and media", "data-astro-cid-j7pv25f6": true })} <h3 class="h4 mt-0 font-black" data-astro-cid-j7pv25f6>Photography & Media</h3> <p data-astro-cid-j7pv25f6>
Storytelling is an important part of any ministry. Our team can take
            photos, write stories, and spread the word of all that God is doing
            through your work. We can give social media training, document
            testimonies in a newsletter, and aid in the crafting of fundraising
            campaigns.
</p> </div> </div>` })} ` })}   ${renderComponent($$result2, "Section", $$Section, { "class:list": "bg-brand-green relative", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate` <div class="py-0" data-astro-cid-j7pv25f6> ${renderComponent($$result3, "LogoCloud", $$LogoCloud, { "title": "Our Partners", "data-astro-cid-j7pv25f6": true })} </div> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="absolute h-40 w-full top-0 inset-x-0 rotate-180" preserveAspectRatio="none" data-astro-cid-j7pv25f6><path fill="#ffffff" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" data-astro-cid-j7pv25f6></path> </svg> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="absolute h-40 w-full bottom-0 inset-x-0" preserveAspectRatio="none" data-astro-cid-j7pv25f6><path fill="#ffffff" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" data-astro-cid-j7pv25f6></path> </svg> ` })} ${renderComponent($$result2, "Section", $$Section, { "class:list": "container py-1 lg:py-1", "contain": false, "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate`   ${renderComponent($$result3, "Newsletter", $$Newsletter, { "data-astro-cid-j7pv25f6": true })} ` })} ` })} `;
}, "D:/missionary tech support/website/missionarytechsupport/src/pages/index.astro", void 0);

const $$file = "D:/missionary tech support/website/missionarytechsupport/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
