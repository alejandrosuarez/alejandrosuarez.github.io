import React from "../../../_snowpack/pkg/react.js";
import {FaGithub, FaLinkedin} from "../../../_snowpack/pkg/react-icons/fa.js";
import {IoMdMail} from "../../../_snowpack/pkg/react-icons/io.js";
import {
  Bar,
  ContainerInner,
  Social,
  SocialLink,
  Socials
} from "./About.styles.js";
const About = () => {
  return /* @__PURE__ */ React.createElement(ContainerInner, null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", null, "I recently graduated from Harvard with both Bachelor's and Master's degrees in Computer Science. With diverse experience in big tech, finance, startups, and entrepreneurship, I am currently thriving in a fast-paced, high-impact startup environment."), /* @__PURE__ */ React.createElement("p", null, "My career has spanned building full-stack mobile apps, trading platforms, robotics, AI and algorithmic solutions for type-1 diabetics, and scaling startup backends into robust APIs. I focus on writing clean, maintainable code, fostering clear communication, and driving collaborative teamwork to deliver high-quality solutions."), /* @__PURE__ */ React.createElement("p", null, "Born in São Paulo and raised in the U.S., I worked hard with my family to overcome the challenges of immigrant life and poverty. I became valedictorian and earned a full scholarship to Harvard. As the first in my family to earn a degree in the U.S., I bring resilience, determination, and a unique perspective to every project."), /* @__PURE__ */ React.createElement("p", null, "Outside of work, I’m passionate about photography, music, fitness, and travel, having explored ten countries and worked in San Francisco and New York City."), /* @__PURE__ */ React.createElement("p", null, "Feel free to reach out—let’s connect! :)"), /* @__PURE__ */ React.createElement(Socials, null, /* @__PURE__ */ React.createElement(Social, null, /* @__PURE__ */ React.createElement(FaGithub, null), /* @__PURE__ */ React.createElement(Bar, null), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement(SocialLink, {
    href: "https://github.com/kiopsy",
    target: "_blank"
  }, "@kiopsy"))), /* @__PURE__ */ React.createElement(Social, null, /* @__PURE__ */ React.createElement(FaLinkedin, null), /* @__PURE__ */ React.createElement(Bar, null), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement(SocialLink, {
    href: "https://www.linkedin.com/in/vic-goncalves/",
    target: "_blank"
  }, "/in/vic-goncalves"))), /* @__PURE__ */ React.createElement(Social, null, /* @__PURE__ */ React.createElement(IoMdMail, null), /* @__PURE__ */ React.createElement(Bar, null), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement(SocialLink, {
    href: "mailto:victorgoncalves@college.harvard.edu"
  }, "victorgoncalves@college.harvard.edu"))))));
};
export default About;
