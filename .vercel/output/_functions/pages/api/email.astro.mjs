import { render } from '@react-email/render';
import { Resend } from 'resend';
import { G as GithubAccessTokenEmail } from '../../chunks/templateEmail_Ca_WCogx.mjs';
export { renderers } from '../../renderers.mjs';

const resend = new Resend("re_fSiL8ymW_75PsoGBoXdvZGGTbe4ie51rc");
s;
const GET = async () => {
  const emailContent = GithubAccessTokenEmail({ username: "Acme" });
  const html = await render(emailContent);
  const text = await render(emailContent, { plainText: true });
  const { data, error } = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: ["delivered@resend.dev"],
    subject: "Hello world",
    html,
    text
  });
  if (error) {
    return new Response(JSON.stringify(error));
  }
  return new Response(JSON.stringify(data));
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
