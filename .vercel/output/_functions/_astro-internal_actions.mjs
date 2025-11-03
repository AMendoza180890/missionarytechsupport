import './chunks/_astro_actions_BHCbYm3b.mjs';
import { render } from '@react-email/render';
import { Resend } from 'resend';
import { G as GithubAccessTokenEmail } from './chunks/templateEmail_Ca_WCogx.mjs';
import * as z from 'zod';
import { d as defineAction } from './chunks/server_BFwH1wrl.mjs';

const resend = new Resend("re_fSiL8ymW_75PsoGBoXdvZGGTbe4ie51rc");
const server = {
  send: defineAction({
    accept: "form",
    input: z.object({
      name: z.string().min(5).max(30),
      email: z.string().email(),
      message: z.string().min(10).max(300)
    }),
    handler: async ({ name, email, message }) => {
      const emailContent = GithubAccessTokenEmail({ username: name, email, message });
      const html = await render(emailContent);
      const text = await render(emailContent, { plainText: true });
      const { data, error } = await resend.emails.send({
        from: undefined                                 ,
        to: [undefined                               ],
        subject: "website contact form",
        html,
        text
      });
      if (error) {
        throw error;
      }
      return data;
    }
  })
};

export { server };
