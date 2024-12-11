import {FadeIn} from "../../components/index.js";
import {Bold, Link} from "../../styles/styles.js";
import React, {useState} from "../../../_snowpack/pkg/react.js";
import {COMPANIES, DESCRIPTIONS} from "./Work.constants.js";
import {
  ActiveLine,
  ContainerInner,
  Content,
  Date,
  List,
  ListItem,
  Panel,
  Tab,
  Tabs,
  WorkContainer
} from "./Work.styles.js";
const Work = () => {
  const [index, setIndex] = useState(0);
  return /* @__PURE__ */ React.createElement(ContainerInner, null, /* @__PURE__ */ React.createElement(WorkContainer, null, /* @__PURE__ */ React.createElement(Tabs, null, COMPANIES.map((w, i) => /* @__PURE__ */ React.createElement(Tab, {
    onClick: () => setIndex(i),
    active: index === i
  }, w)), /* @__PURE__ */ React.createElement(ActiveLine, {
    index
  })), /* @__PURE__ */ React.createElement(Content, null, /* @__PURE__ */ React.createElement(Panel, null, /* @__PURE__ */ React.createElement(FadeIn, null, /* @__PURE__ */ React.createElement("h3", null, DESCRIPTIONS[index].role, " @", " ", /* @__PURE__ */ React.createElement(Bold, null, /* @__PURE__ */ React.createElement(Link, {
    href: DESCRIPTIONS[index].link
  }, COMPANIES[index]))), /* @__PURE__ */ React.createElement(Date, null, DESCRIPTIONS[index].date), /* @__PURE__ */ React.createElement(List, null, DESCRIPTIONS[index].description.map((d, i) => {
    return /* @__PURE__ */ React.createElement(ListItem, {
      key: i
    }, d);
  })))))));
};
export default Work;
