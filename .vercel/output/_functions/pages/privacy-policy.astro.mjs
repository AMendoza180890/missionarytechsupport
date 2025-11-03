import { _ as __astro_tag_component__, g as createVNode, F as Fragment } from '../chunks/astro/server_D-G8JiKZ.mjs';
import { a as $$Section, $ as $$Layout } from '../chunks/Section_Dhk1IdUR.mjs';
import { $ as $$Article } from '../chunks/Article_BGdp9aiM.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const frontmatter = {};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "privacy-policy",
    "text": "Privacy Policy"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    p: "p",
    ...props.components
  };
  return createVNode($$Layout, {
    title: "Privacy Policy",
    description: "Our privacy policy.",
    children: createVNode($$Section, {
      children: createVNode($$Article, {
        contain: true,
        children: [createVNode(_components.h1, {
          id: "privacy-policy",
          children: "Privacy Policy"
        }), createVNode(_components.p, {
          children: ["Your privacy is important to us. It is our policy to respect your privacy regarding any information we may collect from you across our website, ", createVNode(_components.a, {
            href: "https://www.example.com",
            children: "https://www.example.com"
          }), ", and other sites we own and operate."]
        }), createVNode(_components.p, {
          children: "We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used."
        }), createVNode(_components.p, {
          children: "We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorised access, disclosure, copying, use or modification."
        }), createVNode(_components.p, {
          children: "We don’t share any personally identifying information publicly or with third-parties, except when required to by law."
        }), createVNode(_components.p, {
          children: "Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies."
        }), createVNode(_components.p, {
          children: "You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services."
        }), createVNode(_components.p, {
          children: "Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us."
        }), createVNode(_components.p, {
          children: "This policy is effective as of 1 January 2025."
        })]
      })
    })
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
const url = "/privacy-policy";
const file = "D:/missionary tech support/website/missionarytechsupport/src/pages/privacy-policy.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "D:/missionary tech support/website/missionarytechsupport/src/pages/privacy-policy.mdx";
__astro_tag_component__(Content, 'astro:jsx');

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    Content,
    default: Content,
    file,
    frontmatter,
    getHeadings,
    url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
