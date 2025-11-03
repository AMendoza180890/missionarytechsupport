import { a as createComponent, m as maybeRenderHead, d as renderTemplate, f as renderComponent } from '../chunks/astro/server_D-G8JiKZ.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Section } from '../chunks/Section_Dhk1IdUR.mjs';
import { $ as $$Heading } from '../chunks/Heading_C55jawmY.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$FormBook = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<form action="#"> <div class="flex flex-col gap-8 mx-auto max-w-md"> <div> <label for="name">Name</label> <div class="mt-2"> <input type="text" name="name" id="name" required> </div> </div> <div> <label for="email">Email</label> <div class="mt-2 grid grid-cols-1"> <input type="email" name="email" id="email" required> </div> </div> <div> <label for="phone">Phone</label> <div class="mt-2"> <input type="text" name="phone" id="phone" required> </div> <small class="italic text-gray-500">We will call you to confirm your reservation</small> </div> <div> <label for="date">Date & Time</label> <div class="mt-2"> <input type="datetime-local" name="date" id="date" required> </div> <small class="italic text-gray-500">We cannot guarantee availability at the chosen time and date, but will look for the closest opening</small> </div> <div> <label for="message">Notes</label> <div class="mt-2"> <textarea name="message" id="message" rows="4" required placeholder="Let us know if you have any allergies, or have a specific table in mind"></textarea> </div> </div> <div> <button type="submit" class="button button-green group !px-8"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 -rotate-45 -mt-1 inline-block mr-1 group-hover:rotate-0 transition duration-300"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"></path> </svg>
Send
</button> </div> </div> </form>`;
}, "D:/missionary tech support/website/missionarytechsupport/src/components/forms/FormBook.astro", void 0);

const $$Book = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Section", $$Section, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Heading", $$Heading, {}, { "heading-content": ($$result4) => renderTemplate`${maybeRenderHead()}<p class="text-pretty">
Reserve a table for your next meal. We'll get back to you to confirm your booking.
</p>`, "heading-title": ($$result4) => renderTemplate`<h2 class="font-black text-brand-green h2">Book a table</h2>` })} ${renderComponent($$result3, "FormBook", $$FormBook, {})} ` })} ` })}`;
}, "D:/missionary tech support/website/missionarytechsupport/src/pages/book.astro", void 0);

const $$file = "D:/missionary tech support/website/missionarytechsupport/src/pages/book.astro";
const $$url = "/book";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Book,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
