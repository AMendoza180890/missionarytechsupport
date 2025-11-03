import { jsxs, jsx } from 'react/jsx-runtime';
import { Html, Head, Body, Container, Img, Text, Section } from '@react-email/components';

const baseUrl = "http://missionarytechsupport.org";
const GithubAccessTokenEmail = ({
  username,
  message,
  email
}) => /* @__PURE__ */ jsxs(Html, { children: [
  /* @__PURE__ */ jsx(Head, {}),
  /* @__PURE__ */ jsx(Body, { style: main, children: /* @__PURE__ */ jsxs(Container, { style: container, children: [
    /* @__PURE__ */ jsx(
      Img,
      {
        src: `${baseUrl}/_image?href=%2F_astro%2FlogoMTS.DLzC5v_P.png&w=612&h=568&f=webp`,
        width: "32",
        height: "32",
        alt: "Missionary Tech Support Logo"
      }
    ),
    /* @__PURE__ */ jsxs(Text, { style: title, children: [
      /* @__PURE__ */ jsx("strong", { children: "Missionary Tech Support" }),
      /* @__PURE__ */ jsx("p", { children: "Este es un mensaje enviado desde el formulario de contacto." })
    ] }),
    /* @__PURE__ */ jsx(Section, { style: section, children: /* @__PURE__ */ jsxs(Text, { style: text, children: [
      /* @__PURE__ */ jsx("strong", { children: "Name: " }),
      " ",
      username,
      " ",
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("strong", { children: "Email: " }),
      " ",
      /* @__PURE__ */ jsx("a", { href: `mailto:${email}`, children: email }),
      " ",
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("strong", { children: "Message: " }),
      " ",
      message
    ] }) }),
    /* @__PURE__ */ jsx(Text, { style: footer, children: /* @__PURE__ */ jsx("a", { href: "http://missionarytechsupport.org", children: "Missionary Tech Support 2025" }) })
  ] }) })
] });
GithubAccessTokenEmail.PreviewProps = {
  username: "alanturing",
  message: "This is a sample message from the contact form.",
  email: "alanturing@example.com"
};
const main = {
  backgroundColor: "#ffffff",
  color: "#24292e",
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"'
};
const container = {
  maxWidth: "480px",
  margin: "0 auto",
  padding: "20px 0 48px"
};
const title = {
  fontSize: "24px",
  lineHeight: 1.25
};
const section = {
  padding: "24px",
  border: "solid 1px #dedede",
  borderRadius: "5px",
  textAlign: "center"
};
const text = {
  margin: "0 0 10px 0",
  textAlign: "left"
};
const footer = {
  color: "#6a737d",
  fontSize: "12px",
  textAlign: "center",
  marginTop: "60px"
};

export { GithubAccessTokenEmail as G };
