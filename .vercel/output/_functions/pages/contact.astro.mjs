import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, d as renderTemplate, f as renderComponent } from '../chunks/astro/server_D-G8JiKZ.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Section } from '../chunks/Section_Dhk1IdUR.mjs';
import { $ as $$Heading } from '../chunks/Heading_C55jawmY.mjs';
import 'clsx';
import { a as actions } from '../chunks/_astro_actions_BHCbYm3b.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://missionarytechsupport.org");
const $$FormContact = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FormContact;
  return renderTemplate`${maybeRenderHead()}<form${addAttribute(actions.send, "action")} method="POST"> <div class="flex flex-col gap-8 mx-auto max-w-md"> <div> <label for="name">Name</label> <div class="mt-2"> <input type="text" name="name" id="name" required> </div> </div> <div> <label for="email">Email</label> <div class="mt-2 grid grid-cols-1"> <input type="email" name="email" id="email" placeholder="you@example.com" required> </div> </div> <div> <label for="message">Message</label> <div class="mt-2"> <textarea name="message" id="message" rows="4" required></textarea> </div> </div> <div> <button type="submit" class="button button-green group !px-8"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 -rotate-45 -mt-1 inline-block mr-1 group-hover:rotate-0 transition duration-300"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"></path> </svg>
Send
</button> </div> </div> </form>`;
}, "D:/missionary tech support/website/missionarytechsupport/src/components/forms/FormContact.astro", void 0);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Section", $$Section, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Heading", $$Heading, {}, { "heading-content": ($$result4) => renderTemplate`${maybeRenderHead()}<p>
We’d love to hear from you! Whether you have questions about our
        services, want to partner with us, or simply wish to learn more about
        how technology can support your ministry, our team is here to help.
        Reach out to us today — together, we can find the right solutions to
        empower your mission and make a greater impact.
</p>`, "heading-title": ($$result4) => renderTemplate`<h1 class="font-black h1">Get in Touch</h1>` })} ${renderComponent($$result3, "FormContact", $$FormContact, {})} ` })} ` })}`;
}, "D:/missionary tech support/website/missionarytechsupport/src/pages/contact.astro", void 0);

const $$file = "D:/missionary tech support/website/missionarytechsupport/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
