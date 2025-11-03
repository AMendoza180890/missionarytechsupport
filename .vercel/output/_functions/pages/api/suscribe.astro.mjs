export { renderers } from '../../renderers.mjs';

const POST = async ({ request }) => {
  try {
    const { email } = await request.json();
    const apikey = undefined                                              ;
    const resp = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "api-key": apikey
      },
      body: JSON.stringify({
        email,
        listIds: [5]
      })
    });
    const data = await resp.json();
    return new Response(JSON.stringify(data), { status: resp.status });
  } catch (err) {
    return new Response(JSON.stringify({ error: err }), { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
