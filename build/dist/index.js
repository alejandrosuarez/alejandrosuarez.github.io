var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
var __commonJS = (callback, module) => () => {
  if (!module) {
    module = {exports: {}};
    callback(module.exports, module);
  }
  return module.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {get: all[name], enumerable: true});
};

// build/dist/components/markdown/MarkdownRenderer/MarkdownRenderer.js
var require_MarkdownRenderer = __commonJS((exports) => {
  __markAsModule(exports);
  __export(exports, {
    default: () => MarkdownRenderer_default
  });
  prismjs_default.languages.stacktrace = {
    Error: /Error:.+/,
    Function: /at\s+\w+\s+\([^()]+\)/,
    File: /\(.*\)/
  };
  prismjs_default.languages.text = {
    Text: /.*/
  };
  var MarkdownRenderer2 = () => {
    const {slug} = useParams();
    const [content, setContent] = useState2("");
    useEffect2(() => {
      const fetchMarkdown = async () => {
        try {
          const response = await fetch(`/blog/${slug}.md`);
          if (!response.ok) {
            setContent("# Post Not Found\nThe requested blog post does not exist.");
            return;
          }
          const text = await response.text();
          setContent(text);
        } catch (error) {
          console.error("Error fetching the markdown file:", error);
          setContent("# Error\nFailed to load the blog post.");
        }
      };
      fetchMarkdown();
    }, [slug]);
    useEffect2(() => {
      prismjs_default.highlightAll();
    }, [content]);
    return /* @__PURE__ */ react.createElement(Container2, null, /* @__PURE__ */ react.createElement(Heading2, null, /* @__PURE__ */ react.createElement(NavbarContainer, null, /* @__PURE__ */ react.createElement("h2", null, /* @__PURE__ */ react.createElement(Link, {
      to: "/",
      style: {textDecoration: "none", color: "inherit"}
    }, "victor gonçalves"))), /* @__PURE__ */ react.createElement(ContainerInner2, null, /* @__PURE__ */ react.createElement(MarkdownWrapper, null, /* @__PURE__ */ react.createElement(markdown_to_jsx_default, {
      options: {
        overrides: {
          pre: {
            component: ({children, ...props}) => {
              return /* @__PURE__ */ react.createElement(StyledPre, {
                ...props
              }, children);
            }
          },
          code: {
            component: InlineCode
          },
          table: {
            component: StyledTable
          },
          strong: {
            component: StyledBold
          },
          img: {
            component: CenteredImage
          }
        }
      }
    }, content)))));
  };
  var MarkdownRenderer_default = MarkdownRenderer2;
});

// build/dist/pages/Main/Main.js
var require_Main = __commonJS((exports) => {
  __markAsModule(exports);
  __export(exports, {
    default: () => Main_default
  });
  var pages = {
    about: /* @__PURE__ */ react.createElement(About_default, null),
    work: /* @__PURE__ */ react.createElement(Work_default, null),
    projects: /* @__PURE__ */ react.createElement(Projects_default, null),
    blog: /* @__PURE__ */ react.createElement(Blog_default, null)
  };
  var Main2 = () => {
    const [currentPage, setCurrentPage] = useState2("about");
    const transitions = usePageTransitions(pages[currentPage]);
    return /* @__PURE__ */ react.createElement(Layout_default, null, /* @__PURE__ */ react.createElement(NavbarContainer, null, /* @__PURE__ */ react.createElement("h2", {
      onClick: () => setCurrentPage("about")
    }, "victor gonçalves"), /* @__PURE__ */ react.createElement(NavbarOptions, null, /* @__PURE__ */ react.createElement("p", {
      onClick: () => setCurrentPage("work")
    }, "work"), /* @__PURE__ */ react.createElement("p", {
      onClick: () => setCurrentPage("projects")
    }, "projects"), /* @__PURE__ */ react.createElement("p", {
      onClick: () => setCurrentPage("blog")
    }, "blog"))), transitions((style, item) => /* @__PURE__ */ react.createElement(animated.div, {
      style
    }, item)));
  };
  var Main_default = Main2;
});

// build/dist/pages/NotFound/NotFound.js
var require_NotFound = __commonJS((exports) => {
  __markAsModule(exports);
  __export(exports, {
    default: () => NotFound_default
  });
  var NotFound2 = () => {
    return /* @__PURE__ */ react.createElement(Container3, null, /* @__PURE__ */ react.createElement(Title, null, "404 - Page Not Found"), /* @__PURE__ */ react.createElement(Message, null, "Oops! The page you're looking for doesn't exist or has been moved."), /* @__PURE__ */ react.createElement(HomeLink, {
      to: "/"
    }, "Go Back Home"));
  };
  var NotFound_default = NotFound2;
});

// build/_snowpack/pkg/common/_commonjsHelpers-eb5a497e.js
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function createCommonjsModule(fn, basedir, module) {
  return module = {
    path: basedir,
    exports: {},
    require: function(path, base) {
      return commonjsRequire(path, base === void 0 || base === null ? module.path : base);
    }
  }, fn(module, module.exports), module.exports;
}
function commonjsRequire() {
  throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
}

// build/_snowpack/pkg/common/index-80d05b19.js
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l = Symbol.for("react.element");
var n = Symbol.for("react.portal");
var p = Symbol.for("react.fragment");
var q = Symbol.for("react.strict_mode");
var r = Symbol.for("react.profiler");
var t = Symbol.for("react.provider");
var u = Symbol.for("react.context");
var v = Symbol.for("react.forward_ref");
var w = Symbol.for("react.suspense");
var x = Symbol.for("react.memo");
var y = Symbol.for("react.lazy");
var z = Symbol.iterator;
function A(a2) {
  if (a2 === null || typeof a2 !== "object")
    return null;
  a2 = z && a2[z] || a2["@@iterator"];
  return typeof a2 === "function" ? a2 : null;
}
var B = {isMounted: function() {
  return false;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
}};
var C = Object.assign;
var D = {};
function E(a2, b3, e2) {
  this.props = a2;
  this.context = b3;
  this.refs = D;
  this.updater = e2 || B;
}
E.prototype.isReactComponent = {};
E.prototype.setState = function(a2, b3) {
  if (typeof a2 !== "object" && typeof a2 !== "function" && a2 != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, a2, b3, "setState");
};
E.prototype.forceUpdate = function(a2) {
  this.updater.enqueueForceUpdate(this, a2, "forceUpdate");
};
function F() {
}
F.prototype = E.prototype;
function G(a2, b3, e2) {
  this.props = a2;
  this.context = b3;
  this.refs = D;
  this.updater = e2 || B;
}
var H = G.prototype = new F();
H.constructor = G;
C(H, E.prototype);
H.isPureReactComponent = true;
var I = Array.isArray;
var J = Object.prototype.hasOwnProperty;
var K = {current: null};
var L = {key: true, ref: true, __self: true, __source: true};
function M(a2, b3, e2) {
  var d3, c7 = {}, k3 = null, h3 = null;
  if (b3 != null)
    for (d3 in b3.ref !== void 0 && (h3 = b3.ref), b3.key !== void 0 && (k3 = "" + b3.key), b3)
      J.call(b3, d3) && !L.hasOwnProperty(d3) && (c7[d3] = b3[d3]);
  var g3 = arguments.length - 2;
  if (g3 === 1)
    c7.children = e2;
  else if (1 < g3) {
    for (var f3 = Array(g3), m3 = 0; m3 < g3; m3++)
      f3[m3] = arguments[m3 + 2];
    c7.children = f3;
  }
  if (a2 && a2.defaultProps)
    for (d3 in g3 = a2.defaultProps, g3)
      c7[d3] === void 0 && (c7[d3] = g3[d3]);
  return {$$typeof: l, type: a2, key: k3, ref: h3, props: c7, _owner: K.current};
}
function N(a2, b3) {
  return {$$typeof: l, type: a2.type, key: b3, ref: a2.ref, props: a2.props, _owner: a2._owner};
}
function O(a2) {
  return typeof a2 === "object" && a2 !== null && a2.$$typeof === l;
}
function escape(a2) {
  var b3 = {"=": "=0", ":": "=2"};
  return "$" + a2.replace(/[=:]/g, function(a3) {
    return b3[a3];
  });
}
var P = /\/+/g;
function Q(a2, b3) {
  return typeof a2 === "object" && a2 !== null && a2.key != null ? escape("" + a2.key) : b3.toString(36);
}
function R(a2, b3, e2, d3, c7) {
  var k3 = typeof a2;
  if (k3 === "undefined" || k3 === "boolean")
    a2 = null;
  var h3 = false;
  if (a2 === null)
    h3 = true;
  else
    switch (k3) {
      case "string":
      case "number":
        h3 = true;
        break;
      case "object":
        switch (a2.$$typeof) {
          case l:
          case n:
            h3 = true;
        }
    }
  if (h3)
    return h3 = a2, c7 = c7(h3), a2 = d3 === "" ? "." + Q(h3, 0) : d3, I(c7) ? (e2 = "", a2 != null && (e2 = a2.replace(P, "$&/") + "/"), R(c7, b3, e2, "", function(a3) {
      return a3;
    })) : c7 != null && (O(c7) && (c7 = N(c7, e2 + (!c7.key || h3 && h3.key === c7.key ? "" : ("" + c7.key).replace(P, "$&/") + "/") + a2)), b3.push(c7)), 1;
  h3 = 0;
  d3 = d3 === "" ? "." : d3 + ":";
  if (I(a2))
    for (var g3 = 0; g3 < a2.length; g3++) {
      k3 = a2[g3];
      var f3 = d3 + Q(k3, g3);
      h3 += R(k3, b3, e2, f3, c7);
    }
  else if (f3 = A(a2), typeof f3 === "function")
    for (a2 = f3.call(a2), g3 = 0; !(k3 = a2.next()).done; )
      k3 = k3.value, f3 = d3 + Q(k3, g3++), h3 += R(k3, b3, e2, f3, c7);
  else if (k3 === "object")
    throw b3 = String(a2), Error("Objects are not valid as a React child (found: " + (b3 === "[object Object]" ? "object with keys {" + Object.keys(a2).join(", ") + "}" : b3) + "). If you meant to render a collection of children, use an array instead.");
  return h3;
}
function S(a2, b3, e2) {
  if (a2 == null)
    return a2;
  var d3 = [], c7 = 0;
  R(a2, d3, "", "", function(a3) {
    return b3.call(e2, a3, c7++);
  });
  return d3;
}
function T(a2) {
  if (a2._status === -1) {
    var b3 = a2._result;
    b3 = b3();
    b3.then(function(b4) {
      if (a2._status === 0 || a2._status === -1)
        a2._status = 1, a2._result = b4;
    }, function(b4) {
      if (a2._status === 0 || a2._status === -1)
        a2._status = 2, a2._result = b4;
    });
    a2._status === -1 && (a2._status = 0, a2._result = b3);
  }
  if (a2._status === 1)
    return a2._result.default;
  throw a2._result;
}
var U = {current: null};
var V = {transition: null};
var W = {ReactCurrentDispatcher: U, ReactCurrentBatchConfig: V, ReactCurrentOwner: K};
function X() {
  throw Error("act(...) is not supported in production builds of React.");
}
var Children = {map: S, forEach: function(a2, b3, e2) {
  S(a2, function() {
    b3.apply(this, arguments);
  }, e2);
}, count: function(a2) {
  var b3 = 0;
  S(a2, function() {
    b3++;
  });
  return b3;
}, toArray: function(a2) {
  return S(a2, function(a3) {
    return a3;
  }) || [];
}, only: function(a2) {
  if (!O(a2))
    throw Error("React.Children.only expected to receive a single React element child.");
  return a2;
}};
var Component = E;
var Fragment = p;
var Profiler = r;
var PureComponent = G;
var StrictMode = q;
var Suspense = w;
var __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W;
var act = X;
var cloneElement = function(a2, b3, e2) {
  if (a2 === null || a2 === void 0)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a2 + ".");
  var d3 = C({}, a2.props), c7 = a2.key, k3 = a2.ref, h3 = a2._owner;
  if (b3 != null) {
    b3.ref !== void 0 && (k3 = b3.ref, h3 = K.current);
    b3.key !== void 0 && (c7 = "" + b3.key);
    if (a2.type && a2.type.defaultProps)
      var g3 = a2.type.defaultProps;
    for (f3 in b3)
      J.call(b3, f3) && !L.hasOwnProperty(f3) && (d3[f3] = b3[f3] === void 0 && g3 !== void 0 ? g3[f3] : b3[f3]);
  }
  var f3 = arguments.length - 2;
  if (f3 === 1)
    d3.children = e2;
  else if (1 < f3) {
    g3 = Array(f3);
    for (var m3 = 0; m3 < f3; m3++)
      g3[m3] = arguments[m3 + 2];
    d3.children = g3;
  }
  return {$$typeof: l, type: a2.type, key: c7, ref: k3, props: d3, _owner: h3};
};
var createContext = function(a2) {
  a2 = {$$typeof: u, _currentValue: a2, _currentValue2: a2, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null};
  a2.Provider = {$$typeof: t, _context: a2};
  return a2.Consumer = a2;
};
var createElement = M;
var createFactory = function(a2) {
  var b3 = M.bind(null, a2);
  b3.type = a2;
  return b3;
};
var createRef = function() {
  return {current: null};
};
var forwardRef = function(a2) {
  return {$$typeof: v, render: a2};
};
var isValidElement = O;
var lazy = function(a2) {
  return {$$typeof: y, _payload: {_status: -1, _result: a2}, _init: T};
};
var memo = function(a2, b3) {
  return {$$typeof: x, type: a2, compare: b3 === void 0 ? null : b3};
};
var startTransition = function(a2) {
  var b3 = V.transition;
  V.transition = {};
  try {
    a2();
  } finally {
    V.transition = b3;
  }
};
var unstable_act = X;
var useCallback = function(a2, b3) {
  return U.current.useCallback(a2, b3);
};
var useContext = function(a2) {
  return U.current.useContext(a2);
};
var useDebugValue = function() {
};
var useDeferredValue = function(a2) {
  return U.current.useDeferredValue(a2);
};
var useEffect = function(a2, b3) {
  return U.current.useEffect(a2, b3);
};
var useId = function() {
  return U.current.useId();
};
var useImperativeHandle = function(a2, b3, e2) {
  return U.current.useImperativeHandle(a2, b3, e2);
};
var useInsertionEffect = function(a2, b3) {
  return U.current.useInsertionEffect(a2, b3);
};
var useLayoutEffect = function(a2, b3) {
  return U.current.useLayoutEffect(a2, b3);
};
var useMemo = function(a2, b3) {
  return U.current.useMemo(a2, b3);
};
var useReducer = function(a2, b3, e2) {
  return U.current.useReducer(a2, b3, e2);
};
var useRef = function(a2) {
  return U.current.useRef(a2);
};
var useState = function(a2) {
  return U.current.useState(a2);
};
var useSyncExternalStore = function(a2, b3, e2) {
  return U.current.useSyncExternalStore(a2, b3, e2);
};
var useTransition = function() {
  return U.current.useTransition();
};
var version = "18.3.1";
var react_production_min = {
  Children,
  Component,
  Fragment,
  Profiler,
  PureComponent,
  StrictMode,
  Suspense,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  act,
  cloneElement,
  createContext,
  createElement,
  createFactory,
  createRef,
  forwardRef,
  isValidElement,
  lazy,
  memo,
  startTransition,
  unstable_act,
  useCallback,
  useContext,
  useDebugValue,
  useDeferredValue,
  useEffect,
  useId,
  useImperativeHandle,
  useInsertionEffect,
  useLayoutEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
  useSyncExternalStore,
  useTransition,
  version
};
var react = createCommonjsModule(function(module) {
  {
    module.exports = react_production_min;
  }
});
var React = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(null), react, {
  default: react
}));

// build/_snowpack/pkg/react.js
var Children2 = react.Children;
var Suspense2 = react.Suspense;
var lazy2 = react.lazy;
var useEffect2 = react.useEffect;
var useState2 = react.useState;

// build/_snowpack/pkg/common/index-1b844e27.js
var scheduler_production_min = createCommonjsModule(function(module, exports) {
  function f3(a2, b3) {
    var c7 = a2.length;
    a2.push(b3);
    a:
      for (; 0 < c7; ) {
        var d3 = c7 - 1 >>> 1, e2 = a2[d3];
        if (0 < g3(e2, b3))
          a2[d3] = b3, a2[c7] = e2, c7 = d3;
        else
          break a;
      }
  }
  function h3(a2) {
    return a2.length === 0 ? null : a2[0];
  }
  function k3(a2) {
    if (a2.length === 0)
      return null;
    var b3 = a2[0], c7 = a2.pop();
    if (c7 !== b3) {
      a2[0] = c7;
      a:
        for (var d3 = 0, e2 = a2.length, w4 = e2 >>> 1; d3 < w4; ) {
          var m3 = 2 * (d3 + 1) - 1, C5 = a2[m3], n4 = m3 + 1, x4 = a2[n4];
          if (0 > g3(C5, c7))
            n4 < e2 && 0 > g3(x4, C5) ? (a2[d3] = x4, a2[n4] = c7, d3 = n4) : (a2[d3] = C5, a2[m3] = c7, d3 = m3);
          else if (n4 < e2 && 0 > g3(x4, c7))
            a2[d3] = x4, a2[n4] = c7, d3 = n4;
          else
            break a;
        }
    }
    return b3;
  }
  function g3(a2, b3) {
    var c7 = a2.sortIndex - b3.sortIndex;
    return c7 !== 0 ? c7 : a2.id - b3.id;
  }
  if (typeof performance === "object" && typeof performance.now === "function") {
    var l4 = performance;
    exports.unstable_now = function() {
      return l4.now();
    };
  } else {
    var p5 = Date, q4 = p5.now();
    exports.unstable_now = function() {
      return p5.now() - q4;
    };
  }
  var r4 = [], t4 = [], u3 = 1, v5 = null, y4 = 3, z5 = false, A5 = false, B5 = false, D5 = typeof setTimeout === "function" ? setTimeout : null, E5 = typeof clearTimeout === "function" ? clearTimeout : null, F4 = typeof setImmediate !== "undefined" ? setImmediate : null;
  typeof navigator !== "undefined" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function G5(a2) {
    for (var b3 = h3(t4); b3 !== null; ) {
      if (b3.callback === null)
        k3(t4);
      else if (b3.startTime <= a2)
        k3(t4), b3.sortIndex = b3.expirationTime, f3(r4, b3);
      else
        break;
      b3 = h3(t4);
    }
  }
  function H5(a2) {
    B5 = false;
    G5(a2);
    if (!A5)
      if (h3(r4) !== null)
        A5 = true, I5(J4);
      else {
        var b3 = h3(t4);
        b3 !== null && K5(H5, b3.startTime - a2);
      }
  }
  function J4(a2, b3) {
    A5 = false;
    B5 && (B5 = false, E5(L5), L5 = -1);
    z5 = true;
    var c7 = y4;
    try {
      G5(b3);
      for (v5 = h3(r4); v5 !== null && (!(v5.expirationTime > b3) || a2 && !M5()); ) {
        var d3 = v5.callback;
        if (typeof d3 === "function") {
          v5.callback = null;
          y4 = v5.priorityLevel;
          var e2 = d3(v5.expirationTime <= b3);
          b3 = exports.unstable_now();
          typeof e2 === "function" ? v5.callback = e2 : v5 === h3(r4) && k3(r4);
          G5(b3);
        } else
          k3(r4);
        v5 = h3(r4);
      }
      if (v5 !== null)
        var w4 = true;
      else {
        var m3 = h3(t4);
        m3 !== null && K5(H5, m3.startTime - b3);
        w4 = false;
      }
      return w4;
    } finally {
      v5 = null, y4 = c7, z5 = false;
    }
  }
  var N5 = false, O4 = null, L5 = -1, P5 = 5, Q5 = -1;
  function M5() {
    return exports.unstable_now() - Q5 < P5 ? false : true;
  }
  function R4() {
    if (O4 !== null) {
      var a2 = exports.unstable_now();
      Q5 = a2;
      var b3 = true;
      try {
        b3 = O4(true, a2);
      } finally {
        b3 ? S5() : (N5 = false, O4 = null);
      }
    } else
      N5 = false;
  }
  var S5;
  if (typeof F4 === "function")
    S5 = function() {
      F4(R4);
    };
  else if (typeof MessageChannel !== "undefined") {
    var T5 = new MessageChannel(), U5 = T5.port2;
    T5.port1.onmessage = R4;
    S5 = function() {
      U5.postMessage(null);
    };
  } else
    S5 = function() {
      D5(R4, 0);
    };
  function I5(a2) {
    O4 = a2;
    N5 || (N5 = true, S5());
  }
  function K5(a2, b3) {
    L5 = D5(function() {
      a2(exports.unstable_now());
    }, b3);
  }
  exports.unstable_IdlePriority = 5;
  exports.unstable_ImmediatePriority = 1;
  exports.unstable_LowPriority = 4;
  exports.unstable_NormalPriority = 3;
  exports.unstable_Profiling = null;
  exports.unstable_UserBlockingPriority = 2;
  exports.unstable_cancelCallback = function(a2) {
    a2.callback = null;
  };
  exports.unstable_continueExecution = function() {
    A5 || z5 || (A5 = true, I5(J4));
  };
  exports.unstable_forceFrameRate = function(a2) {
    0 > a2 || 125 < a2 ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P5 = 0 < a2 ? Math.floor(1e3 / a2) : 5;
  };
  exports.unstable_getCurrentPriorityLevel = function() {
    return y4;
  };
  exports.unstable_getFirstCallbackNode = function() {
    return h3(r4);
  };
  exports.unstable_next = function(a2) {
    switch (y4) {
      case 1:
      case 2:
      case 3:
        var b3 = 3;
        break;
      default:
        b3 = y4;
    }
    var c7 = y4;
    y4 = b3;
    try {
      return a2();
    } finally {
      y4 = c7;
    }
  };
  exports.unstable_pauseExecution = function() {
  };
  exports.unstable_requestPaint = function() {
  };
  exports.unstable_runWithPriority = function(a2, b3) {
    switch (a2) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        a2 = 3;
    }
    var c7 = y4;
    y4 = a2;
    try {
      return b3();
    } finally {
      y4 = c7;
    }
  };
  exports.unstable_scheduleCallback = function(a2, b3, c7) {
    var d3 = exports.unstable_now();
    typeof c7 === "object" && c7 !== null ? (c7 = c7.delay, c7 = typeof c7 === "number" && 0 < c7 ? d3 + c7 : d3) : c7 = d3;
    switch (a2) {
      case 1:
        var e2 = -1;
        break;
      case 2:
        e2 = 250;
        break;
      case 5:
        e2 = 1073741823;
        break;
      case 4:
        e2 = 1e4;
        break;
      default:
        e2 = 5e3;
    }
    e2 = c7 + e2;
    a2 = {id: u3++, callback: b3, priorityLevel: a2, startTime: c7, expirationTime: e2, sortIndex: -1};
    c7 > d3 ? (a2.sortIndex = c7, f3(t4, a2), h3(r4) === null && a2 === h3(t4) && (B5 ? (E5(L5), L5 = -1) : B5 = true, K5(H5, c7 - d3))) : (a2.sortIndex = e2, f3(r4, a2), A5 || z5 || (A5 = true, I5(J4)));
    return a2;
  };
  exports.unstable_shouldYield = M5;
  exports.unstable_wrapCallback = function(a2) {
    var b3 = y4;
    return function() {
      var c7 = y4;
      y4 = b3;
      try {
        return a2.apply(this, arguments);
      } finally {
        y4 = c7;
      }
    };
  };
});
var scheduler = createCommonjsModule(function(module) {
  {
    module.exports = scheduler_production_min;
  }
});
function p2(a2) {
  for (var b3 = "https://reactjs.org/docs/error-decoder.html?invariant=" + a2, c7 = 1; c7 < arguments.length; c7++)
    b3 += "&args[]=" + encodeURIComponent(arguments[c7]);
  return "Minified React error #" + a2 + "; visit " + b3 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var da = new Set();
var ea = {};
function fa(a2, b3) {
  ha(a2, b3);
  ha(a2 + "Capture", b3);
}
function ha(a2, b3) {
  ea[a2] = b3;
  for (a2 = 0; a2 < b3.length; a2++)
    da.add(b3[a2]);
}
var ia = !(typeof window === "undefined" || typeof window.document === "undefined" || typeof window.document.createElement === "undefined");
var ja = Object.prototype.hasOwnProperty;
var ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/;
var la = {};
var ma = {};
function oa(a2) {
  if (ja.call(ma, a2))
    return true;
  if (ja.call(la, a2))
    return false;
  if (ka.test(a2))
    return ma[a2] = true;
  la[a2] = true;
  return false;
}
function pa(a2, b3, c7, d3) {
  if (c7 !== null && c7.type === 0)
    return false;
  switch (typeof b3) {
    case "function":
    case "symbol":
      return true;
    case "boolean":
      if (d3)
        return false;
      if (c7 !== null)
        return !c7.acceptsBooleans;
      a2 = a2.toLowerCase().slice(0, 5);
      return a2 !== "data-" && a2 !== "aria-";
    default:
      return false;
  }
}
function qa(a2, b3, c7, d3) {
  if (b3 === null || typeof b3 === "undefined" || pa(a2, b3, c7, d3))
    return true;
  if (d3)
    return false;
  if (c7 !== null)
    switch (c7.type) {
      case 3:
        return !b3;
      case 4:
        return b3 === false;
      case 5:
        return isNaN(b3);
      case 6:
        return isNaN(b3) || 1 > b3;
    }
  return false;
}
function v2(a2, b3, c7, d3, e2, f3, g3) {
  this.acceptsBooleans = b3 === 2 || b3 === 3 || b3 === 4;
  this.attributeName = d3;
  this.attributeNamespace = e2;
  this.mustUseProperty = c7;
  this.propertyName = a2;
  this.type = b3;
  this.sanitizeURL = f3;
  this.removeEmptyString = g3;
}
var z2 = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a2) {
  z2[a2] = new v2(a2, 0, false, a2, null, false, false);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a2) {
  var b3 = a2[0];
  z2[b3] = new v2(b3, 1, false, a2[1], null, false, false);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a2) {
  z2[a2] = new v2(a2, 2, false, a2.toLowerCase(), null, false, false);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a2) {
  z2[a2] = new v2(a2, 2, false, a2, null, false, false);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a2) {
  z2[a2] = new v2(a2, 3, false, a2.toLowerCase(), null, false, false);
});
["checked", "multiple", "muted", "selected"].forEach(function(a2) {
  z2[a2] = new v2(a2, 3, true, a2, null, false, false);
});
["capture", "download"].forEach(function(a2) {
  z2[a2] = new v2(a2, 4, false, a2, null, false, false);
});
["cols", "rows", "size", "span"].forEach(function(a2) {
  z2[a2] = new v2(a2, 6, false, a2, null, false, false);
});
["rowSpan", "start"].forEach(function(a2) {
  z2[a2] = new v2(a2, 5, false, a2.toLowerCase(), null, false, false);
});
var ra = /[\-:]([a-z])/g;
function sa(a2) {
  return a2[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a2) {
  var b3 = a2.replace(ra, sa);
  z2[b3] = new v2(b3, 1, false, a2, null, false, false);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a2) {
  var b3 = a2.replace(ra, sa);
  z2[b3] = new v2(b3, 1, false, a2, "http://www.w3.org/1999/xlink", false, false);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(a2) {
  var b3 = a2.replace(ra, sa);
  z2[b3] = new v2(b3, 1, false, a2, "http://www.w3.org/XML/1998/namespace", false, false);
});
["tabIndex", "crossOrigin"].forEach(function(a2) {
  z2[a2] = new v2(a2, 1, false, a2.toLowerCase(), null, false, false);
});
z2.xlinkHref = new v2("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
["src", "href", "action", "formAction"].forEach(function(a2) {
  z2[a2] = new v2(a2, 1, false, a2.toLowerCase(), null, true, true);
});
function ta(a2, b3, c7, d3) {
  var e2 = z2.hasOwnProperty(b3) ? z2[b3] : null;
  if (e2 !== null ? e2.type !== 0 : d3 || !(2 < b3.length) || b3[0] !== "o" && b3[0] !== "O" || b3[1] !== "n" && b3[1] !== "N")
    qa(b3, c7, e2, d3) && (c7 = null), d3 || e2 === null ? oa(b3) && (c7 === null ? a2.removeAttribute(b3) : a2.setAttribute(b3, "" + c7)) : e2.mustUseProperty ? a2[e2.propertyName] = c7 === null ? e2.type === 3 ? false : "" : c7 : (b3 = e2.attributeName, d3 = e2.attributeNamespace, c7 === null ? a2.removeAttribute(b3) : (e2 = e2.type, c7 = e2 === 3 || e2 === 4 && c7 === true ? "" : "" + c7, d3 ? a2.setAttributeNS(d3, b3, c7) : a2.setAttribute(b3, c7)));
}
var ua = react.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
var va = Symbol.for("react.element");
var wa = Symbol.for("react.portal");
var ya = Symbol.for("react.fragment");
var za = Symbol.for("react.strict_mode");
var Aa = Symbol.for("react.profiler");
var Ba = Symbol.for("react.provider");
var Ca = Symbol.for("react.context");
var Da = Symbol.for("react.forward_ref");
var Ea = Symbol.for("react.suspense");
var Fa = Symbol.for("react.suspense_list");
var Ga = Symbol.for("react.memo");
var Ha = Symbol.for("react.lazy");
var Ia = Symbol.for("react.offscreen");
var Ja = Symbol.iterator;
function Ka(a2) {
  if (a2 === null || typeof a2 !== "object")
    return null;
  a2 = Ja && a2[Ja] || a2["@@iterator"];
  return typeof a2 === "function" ? a2 : null;
}
var A2 = Object.assign;
var La;
function Ma(a2) {
  if (La === void 0)
    try {
      throw Error();
    } catch (c7) {
      var b3 = c7.stack.trim().match(/\n( *(at )?)/);
      La = b3 && b3[1] || "";
    }
  return "\n" + La + a2;
}
var Na = false;
function Oa(a2, b3) {
  if (!a2 || Na)
    return "";
  Na = true;
  var c7 = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (b3)
      if (b3 = function() {
        throw Error();
      }, Object.defineProperty(b3.prototype, "props", {set: function() {
        throw Error();
      }}), typeof Reflect === "object" && Reflect.construct) {
        try {
          Reflect.construct(b3, []);
        } catch (l4) {
          var d3 = l4;
        }
        Reflect.construct(a2, [], b3);
      } else {
        try {
          b3.call();
        } catch (l4) {
          d3 = l4;
        }
        a2.call(b3.prototype);
      }
    else {
      try {
        throw Error();
      } catch (l4) {
        d3 = l4;
      }
      a2();
    }
  } catch (l4) {
    if (l4 && d3 && typeof l4.stack === "string") {
      for (var e2 = l4.stack.split("\n"), f3 = d3.stack.split("\n"), g3 = e2.length - 1, h3 = f3.length - 1; 1 <= g3 && 0 <= h3 && e2[g3] !== f3[h3]; )
        h3--;
      for (; 1 <= g3 && 0 <= h3; g3--, h3--)
        if (e2[g3] !== f3[h3]) {
          if (g3 !== 1 || h3 !== 1) {
            do
              if (g3--, h3--, 0 > h3 || e2[g3] !== f3[h3]) {
                var k3 = "\n" + e2[g3].replace(" at new ", " at ");
                a2.displayName && k3.includes("<anonymous>") && (k3 = k3.replace("<anonymous>", a2.displayName));
                return k3;
              }
            while (1 <= g3 && 0 <= h3);
          }
          break;
        }
    }
  } finally {
    Na = false, Error.prepareStackTrace = c7;
  }
  return (a2 = a2 ? a2.displayName || a2.name : "") ? Ma(a2) : "";
}
function Pa(a2) {
  switch (a2.tag) {
    case 5:
      return Ma(a2.type);
    case 16:
      return Ma("Lazy");
    case 13:
      return Ma("Suspense");
    case 19:
      return Ma("SuspenseList");
    case 0:
    case 2:
    case 15:
      return a2 = Oa(a2.type, false), a2;
    case 11:
      return a2 = Oa(a2.type.render, false), a2;
    case 1:
      return a2 = Oa(a2.type, true), a2;
    default:
      return "";
  }
}
function Qa(a2) {
  if (a2 == null)
    return null;
  if (typeof a2 === "function")
    return a2.displayName || a2.name || null;
  if (typeof a2 === "string")
    return a2;
  switch (a2) {
    case ya:
      return "Fragment";
    case wa:
      return "Portal";
    case Aa:
      return "Profiler";
    case za:
      return "StrictMode";
    case Ea:
      return "Suspense";
    case Fa:
      return "SuspenseList";
  }
  if (typeof a2 === "object")
    switch (a2.$$typeof) {
      case Ca:
        return (a2.displayName || "Context") + ".Consumer";
      case Ba:
        return (a2._context.displayName || "Context") + ".Provider";
      case Da:
        var b3 = a2.render;
        a2 = a2.displayName;
        a2 || (a2 = b3.displayName || b3.name || "", a2 = a2 !== "" ? "ForwardRef(" + a2 + ")" : "ForwardRef");
        return a2;
      case Ga:
        return b3 = a2.displayName || null, b3 !== null ? b3 : Qa(a2.type) || "Memo";
      case Ha:
        b3 = a2._payload;
        a2 = a2._init;
        try {
          return Qa(a2(b3));
        } catch (c7) {
        }
    }
  return null;
}
function Ra(a2) {
  var b3 = a2.type;
  switch (a2.tag) {
    case 24:
      return "Cache";
    case 9:
      return (b3.displayName || "Context") + ".Consumer";
    case 10:
      return (b3._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return a2 = b3.render, a2 = a2.displayName || a2.name || "", b3.displayName || (a2 !== "" ? "ForwardRef(" + a2 + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return b3;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Qa(b3);
    case 8:
      return b3 === za ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof b3 === "function")
        return b3.displayName || b3.name || null;
      if (typeof b3 === "string")
        return b3;
  }
  return null;
}
function Sa(a2) {
  switch (typeof a2) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return a2;
    case "object":
      return a2;
    default:
      return "";
  }
}
function Ta(a2) {
  var b3 = a2.type;
  return (a2 = a2.nodeName) && a2.toLowerCase() === "input" && (b3 === "checkbox" || b3 === "radio");
}
function Ua(a2) {
  var b3 = Ta(a2) ? "checked" : "value", c7 = Object.getOwnPropertyDescriptor(a2.constructor.prototype, b3), d3 = "" + a2[b3];
  if (!a2.hasOwnProperty(b3) && typeof c7 !== "undefined" && typeof c7.get === "function" && typeof c7.set === "function") {
    var e2 = c7.get, f3 = c7.set;
    Object.defineProperty(a2, b3, {configurable: true, get: function() {
      return e2.call(this);
    }, set: function(a3) {
      d3 = "" + a3;
      f3.call(this, a3);
    }});
    Object.defineProperty(a2, b3, {enumerable: c7.enumerable});
    return {getValue: function() {
      return d3;
    }, setValue: function(a3) {
      d3 = "" + a3;
    }, stopTracking: function() {
      a2._valueTracker = null;
      delete a2[b3];
    }};
  }
}
function Va(a2) {
  a2._valueTracker || (a2._valueTracker = Ua(a2));
}
function Wa(a2) {
  if (!a2)
    return false;
  var b3 = a2._valueTracker;
  if (!b3)
    return true;
  var c7 = b3.getValue();
  var d3 = "";
  a2 && (d3 = Ta(a2) ? a2.checked ? "true" : "false" : a2.value);
  a2 = d3;
  return a2 !== c7 ? (b3.setValue(a2), true) : false;
}
function Xa(a2) {
  a2 = a2 || (typeof document !== "undefined" ? document : void 0);
  if (typeof a2 === "undefined")
    return null;
  try {
    return a2.activeElement || a2.body;
  } catch (b3) {
    return a2.body;
  }
}
function Ya(a2, b3) {
  var c7 = b3.checked;
  return A2({}, b3, {defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: c7 != null ? c7 : a2._wrapperState.initialChecked});
}
function Za(a2, b3) {
  var c7 = b3.defaultValue == null ? "" : b3.defaultValue, d3 = b3.checked != null ? b3.checked : b3.defaultChecked;
  c7 = Sa(b3.value != null ? b3.value : c7);
  a2._wrapperState = {initialChecked: d3, initialValue: c7, controlled: b3.type === "checkbox" || b3.type === "radio" ? b3.checked != null : b3.value != null};
}
function ab(a2, b3) {
  b3 = b3.checked;
  b3 != null && ta(a2, "checked", b3, false);
}
function bb(a2, b3) {
  ab(a2, b3);
  var c7 = Sa(b3.value), d3 = b3.type;
  if (c7 != null)
    if (d3 === "number") {
      if (c7 === 0 && a2.value === "" || a2.value != c7)
        a2.value = "" + c7;
    } else
      a2.value !== "" + c7 && (a2.value = "" + c7);
  else if (d3 === "submit" || d3 === "reset") {
    a2.removeAttribute("value");
    return;
  }
  b3.hasOwnProperty("value") ? cb(a2, b3.type, c7) : b3.hasOwnProperty("defaultValue") && cb(a2, b3.type, Sa(b3.defaultValue));
  b3.checked == null && b3.defaultChecked != null && (a2.defaultChecked = !!b3.defaultChecked);
}
function db(a2, b3, c7) {
  if (b3.hasOwnProperty("value") || b3.hasOwnProperty("defaultValue")) {
    var d3 = b3.type;
    if (!(d3 !== "submit" && d3 !== "reset" || b3.value !== void 0 && b3.value !== null))
      return;
    b3 = "" + a2._wrapperState.initialValue;
    c7 || b3 === a2.value || (a2.value = b3);
    a2.defaultValue = b3;
  }
  c7 = a2.name;
  c7 !== "" && (a2.name = "");
  a2.defaultChecked = !!a2._wrapperState.initialChecked;
  c7 !== "" && (a2.name = c7);
}
function cb(a2, b3, c7) {
  if (b3 !== "number" || Xa(a2.ownerDocument) !== a2)
    c7 == null ? a2.defaultValue = "" + a2._wrapperState.initialValue : a2.defaultValue !== "" + c7 && (a2.defaultValue = "" + c7);
}
var eb = Array.isArray;
function fb(a2, b3, c7, d3) {
  a2 = a2.options;
  if (b3) {
    b3 = {};
    for (var e2 = 0; e2 < c7.length; e2++)
      b3["$" + c7[e2]] = true;
    for (c7 = 0; c7 < a2.length; c7++)
      e2 = b3.hasOwnProperty("$" + a2[c7].value), a2[c7].selected !== e2 && (a2[c7].selected = e2), e2 && d3 && (a2[c7].defaultSelected = true);
  } else {
    c7 = "" + Sa(c7);
    b3 = null;
    for (e2 = 0; e2 < a2.length; e2++) {
      if (a2[e2].value === c7) {
        a2[e2].selected = true;
        d3 && (a2[e2].defaultSelected = true);
        return;
      }
      b3 !== null || a2[e2].disabled || (b3 = a2[e2]);
    }
    b3 !== null && (b3.selected = true);
  }
}
function gb(a2, b3) {
  if (b3.dangerouslySetInnerHTML != null)
    throw Error(p2(91));
  return A2({}, b3, {value: void 0, defaultValue: void 0, children: "" + a2._wrapperState.initialValue});
}
function hb(a2, b3) {
  var c7 = b3.value;
  if (c7 == null) {
    c7 = b3.children;
    b3 = b3.defaultValue;
    if (c7 != null) {
      if (b3 != null)
        throw Error(p2(92));
      if (eb(c7)) {
        if (1 < c7.length)
          throw Error(p2(93));
        c7 = c7[0];
      }
      b3 = c7;
    }
    b3 == null && (b3 = "");
    c7 = b3;
  }
  a2._wrapperState = {initialValue: Sa(c7)};
}
function ib(a2, b3) {
  var c7 = Sa(b3.value), d3 = Sa(b3.defaultValue);
  c7 != null && (c7 = "" + c7, c7 !== a2.value && (a2.value = c7), b3.defaultValue == null && a2.defaultValue !== c7 && (a2.defaultValue = c7));
  d3 != null && (a2.defaultValue = "" + d3);
}
function jb(a2) {
  var b3 = a2.textContent;
  b3 === a2._wrapperState.initialValue && b3 !== "" && b3 !== null && (a2.value = b3);
}
function kb(a2) {
  switch (a2) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function lb(a2, b3) {
  return a2 == null || a2 === "http://www.w3.org/1999/xhtml" ? kb(b3) : a2 === "http://www.w3.org/2000/svg" && b3 === "foreignObject" ? "http://www.w3.org/1999/xhtml" : a2;
}
var mb;
var nb = function(a2) {
  return typeof MSApp !== "undefined" && MSApp.execUnsafeLocalFunction ? function(b3, c7, d3, e2) {
    MSApp.execUnsafeLocalFunction(function() {
      return a2(b3, c7, d3, e2);
    });
  } : a2;
}(function(a2, b3) {
  if (a2.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in a2)
    a2.innerHTML = b3;
  else {
    mb = mb || document.createElement("div");
    mb.innerHTML = "<svg>" + b3.valueOf().toString() + "</svg>";
    for (b3 = mb.firstChild; a2.firstChild; )
      a2.removeChild(a2.firstChild);
    for (; b3.firstChild; )
      a2.appendChild(b3.firstChild);
  }
});
function ob(a2, b3) {
  if (b3) {
    var c7 = a2.firstChild;
    if (c7 && c7 === a2.lastChild && c7.nodeType === 3) {
      c7.nodeValue = b3;
      return;
    }
  }
  a2.textContent = b3;
}
var pb = {
  animationIterationCount: true,
  aspectRatio: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridArea: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
};
var qb = ["Webkit", "ms", "Moz", "O"];
Object.keys(pb).forEach(function(a2) {
  qb.forEach(function(b3) {
    b3 = b3 + a2.charAt(0).toUpperCase() + a2.substring(1);
    pb[b3] = pb[a2];
  });
});
function rb(a2, b3, c7) {
  return b3 == null || typeof b3 === "boolean" || b3 === "" ? "" : c7 || typeof b3 !== "number" || b3 === 0 || pb.hasOwnProperty(a2) && pb[a2] ? ("" + b3).trim() : b3 + "px";
}
function sb(a2, b3) {
  a2 = a2.style;
  for (var c7 in b3)
    if (b3.hasOwnProperty(c7)) {
      var d3 = c7.indexOf("--") === 0, e2 = rb(c7, b3[c7], d3);
      c7 === "float" && (c7 = "cssFloat");
      d3 ? a2.setProperty(c7, e2) : a2[c7] = e2;
    }
}
var tb = A2({menuitem: true}, {area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true});
function ub(a2, b3) {
  if (b3) {
    if (tb[a2] && (b3.children != null || b3.dangerouslySetInnerHTML != null))
      throw Error(p2(137, a2));
    if (b3.dangerouslySetInnerHTML != null) {
      if (b3.children != null)
        throw Error(p2(60));
      if (typeof b3.dangerouslySetInnerHTML !== "object" || !("__html" in b3.dangerouslySetInnerHTML))
        throw Error(p2(61));
    }
    if (b3.style != null && typeof b3.style !== "object")
      throw Error(p2(62));
  }
}
function vb(a2, b3) {
  if (a2.indexOf("-") === -1)
    return typeof b3.is === "string";
  switch (a2) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return false;
    default:
      return true;
  }
}
var wb = null;
function xb(a2) {
  a2 = a2.target || a2.srcElement || window;
  a2.correspondingUseElement && (a2 = a2.correspondingUseElement);
  return a2.nodeType === 3 ? a2.parentNode : a2;
}
var yb = null;
var zb = null;
var Ab = null;
function Bb(a2) {
  if (a2 = Cb(a2)) {
    if (typeof yb !== "function")
      throw Error(p2(280));
    var b3 = a2.stateNode;
    b3 && (b3 = Db(b3), yb(a2.stateNode, a2.type, b3));
  }
}
function Eb(a2) {
  zb ? Ab ? Ab.push(a2) : Ab = [a2] : zb = a2;
}
function Fb() {
  if (zb) {
    var a2 = zb, b3 = Ab;
    Ab = zb = null;
    Bb(a2);
    if (b3)
      for (a2 = 0; a2 < b3.length; a2++)
        Bb(b3[a2]);
  }
}
function Gb(a2, b3) {
  return a2(b3);
}
function Hb() {
}
var Ib = false;
function Jb(a2, b3, c7) {
  if (Ib)
    return a2(b3, c7);
  Ib = true;
  try {
    return Gb(a2, b3, c7);
  } finally {
    if (Ib = false, zb !== null || Ab !== null)
      Hb(), Fb();
  }
}
function Kb(a2, b3) {
  var c7 = a2.stateNode;
  if (c7 === null)
    return null;
  var d3 = Db(c7);
  if (d3 === null)
    return null;
  c7 = d3[b3];
  a:
    switch (b3) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (d3 = !d3.disabled) || (a2 = a2.type, d3 = !(a2 === "button" || a2 === "input" || a2 === "select" || a2 === "textarea"));
        a2 = !d3;
        break a;
      default:
        a2 = false;
    }
  if (a2)
    return null;
  if (c7 && typeof c7 !== "function")
    throw Error(p2(231, b3, typeof c7));
  return c7;
}
var Lb = false;
if (ia)
  try {
    Mb = {};
    Object.defineProperty(Mb, "passive", {get: function() {
      Lb = true;
    }});
    window.addEventListener("test", Mb, Mb);
    window.removeEventListener("test", Mb, Mb);
  } catch (a2) {
    Lb = false;
  }
var Mb;
function Nb(a2, b3, c7, d3, e2, f3, g3, h3, k3) {
  var l4 = Array.prototype.slice.call(arguments, 3);
  try {
    b3.apply(c7, l4);
  } catch (m3) {
    this.onError(m3);
  }
}
var Ob = false;
var Pb = null;
var Qb = false;
var Rb = null;
var Sb = {onError: function(a2) {
  Ob = true;
  Pb = a2;
}};
function Tb(a2, b3, c7, d3, e2, f3, g3, h3, k3) {
  Ob = false;
  Pb = null;
  Nb.apply(Sb, arguments);
}
function Ub(a2, b3, c7, d3, e2, f3, g3, h3, k3) {
  Tb.apply(this, arguments);
  if (Ob) {
    if (Ob) {
      var l4 = Pb;
      Ob = false;
      Pb = null;
    } else
      throw Error(p2(198));
    Qb || (Qb = true, Rb = l4);
  }
}
function Vb(a2) {
  var b3 = a2, c7 = a2;
  if (a2.alternate)
    for (; b3.return; )
      b3 = b3.return;
  else {
    a2 = b3;
    do
      b3 = a2, (b3.flags & 4098) !== 0 && (c7 = b3.return), a2 = b3.return;
    while (a2);
  }
  return b3.tag === 3 ? c7 : null;
}
function Wb(a2) {
  if (a2.tag === 13) {
    var b3 = a2.memoizedState;
    b3 === null && (a2 = a2.alternate, a2 !== null && (b3 = a2.memoizedState));
    if (b3 !== null)
      return b3.dehydrated;
  }
  return null;
}
function Xb(a2) {
  if (Vb(a2) !== a2)
    throw Error(p2(188));
}
function Yb(a2) {
  var b3 = a2.alternate;
  if (!b3) {
    b3 = Vb(a2);
    if (b3 === null)
      throw Error(p2(188));
    return b3 !== a2 ? null : a2;
  }
  for (var c7 = a2, d3 = b3; ; ) {
    var e2 = c7.return;
    if (e2 === null)
      break;
    var f3 = e2.alternate;
    if (f3 === null) {
      d3 = e2.return;
      if (d3 !== null) {
        c7 = d3;
        continue;
      }
      break;
    }
    if (e2.child === f3.child) {
      for (f3 = e2.child; f3; ) {
        if (f3 === c7)
          return Xb(e2), a2;
        if (f3 === d3)
          return Xb(e2), b3;
        f3 = f3.sibling;
      }
      throw Error(p2(188));
    }
    if (c7.return !== d3.return)
      c7 = e2, d3 = f3;
    else {
      for (var g3 = false, h3 = e2.child; h3; ) {
        if (h3 === c7) {
          g3 = true;
          c7 = e2;
          d3 = f3;
          break;
        }
        if (h3 === d3) {
          g3 = true;
          d3 = e2;
          c7 = f3;
          break;
        }
        h3 = h3.sibling;
      }
      if (!g3) {
        for (h3 = f3.child; h3; ) {
          if (h3 === c7) {
            g3 = true;
            c7 = f3;
            d3 = e2;
            break;
          }
          if (h3 === d3) {
            g3 = true;
            d3 = f3;
            c7 = e2;
            break;
          }
          h3 = h3.sibling;
        }
        if (!g3)
          throw Error(p2(189));
      }
    }
    if (c7.alternate !== d3)
      throw Error(p2(190));
  }
  if (c7.tag !== 3)
    throw Error(p2(188));
  return c7.stateNode.current === c7 ? a2 : b3;
}
function Zb(a2) {
  a2 = Yb(a2);
  return a2 !== null ? $b(a2) : null;
}
function $b(a2) {
  if (a2.tag === 5 || a2.tag === 6)
    return a2;
  for (a2 = a2.child; a2 !== null; ) {
    var b3 = $b(a2);
    if (b3 !== null)
      return b3;
    a2 = a2.sibling;
  }
  return null;
}
var ac = scheduler.unstable_scheduleCallback;
var bc = scheduler.unstable_cancelCallback;
var cc = scheduler.unstable_shouldYield;
var dc = scheduler.unstable_requestPaint;
var B2 = scheduler.unstable_now;
var ec = scheduler.unstable_getCurrentPriorityLevel;
var fc = scheduler.unstable_ImmediatePriority;
var gc = scheduler.unstable_UserBlockingPriority;
var hc = scheduler.unstable_NormalPriority;
var ic = scheduler.unstable_LowPriority;
var jc = scheduler.unstable_IdlePriority;
var kc = null;
var lc = null;
function mc(a2) {
  if (lc && typeof lc.onCommitFiberRoot === "function")
    try {
      lc.onCommitFiberRoot(kc, a2, void 0, (a2.current.flags & 128) === 128);
    } catch (b3) {
    }
}
var oc = Math.clz32 ? Math.clz32 : nc;
var pc = Math.log;
var qc = Math.LN2;
function nc(a2) {
  a2 >>>= 0;
  return a2 === 0 ? 32 : 31 - (pc(a2) / qc | 0) | 0;
}
var rc = 64;
var sc = 4194304;
function tc(a2) {
  switch (a2 & -a2) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return a2 & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return a2 & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return a2;
  }
}
function uc(a2, b3) {
  var c7 = a2.pendingLanes;
  if (c7 === 0)
    return 0;
  var d3 = 0, e2 = a2.suspendedLanes, f3 = a2.pingedLanes, g3 = c7 & 268435455;
  if (g3 !== 0) {
    var h3 = g3 & ~e2;
    h3 !== 0 ? d3 = tc(h3) : (f3 &= g3, f3 !== 0 && (d3 = tc(f3)));
  } else
    g3 = c7 & ~e2, g3 !== 0 ? d3 = tc(g3) : f3 !== 0 && (d3 = tc(f3));
  if (d3 === 0)
    return 0;
  if (b3 !== 0 && b3 !== d3 && (b3 & e2) === 0 && (e2 = d3 & -d3, f3 = b3 & -b3, e2 >= f3 || e2 === 16 && (f3 & 4194240) !== 0))
    return b3;
  (d3 & 4) !== 0 && (d3 |= c7 & 16);
  b3 = a2.entangledLanes;
  if (b3 !== 0)
    for (a2 = a2.entanglements, b3 &= d3; 0 < b3; )
      c7 = 31 - oc(b3), e2 = 1 << c7, d3 |= a2[c7], b3 &= ~e2;
  return d3;
}
function vc(a2, b3) {
  switch (a2) {
    case 1:
    case 2:
    case 4:
      return b3 + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return b3 + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function wc(a2, b3) {
  for (var c7 = a2.suspendedLanes, d3 = a2.pingedLanes, e2 = a2.expirationTimes, f3 = a2.pendingLanes; 0 < f3; ) {
    var g3 = 31 - oc(f3), h3 = 1 << g3, k3 = e2[g3];
    if (k3 === -1) {
      if ((h3 & c7) === 0 || (h3 & d3) !== 0)
        e2[g3] = vc(h3, b3);
    } else
      k3 <= b3 && (a2.expiredLanes |= h3);
    f3 &= ~h3;
  }
}
function xc(a2) {
  a2 = a2.pendingLanes & -1073741825;
  return a2 !== 0 ? a2 : a2 & 1073741824 ? 1073741824 : 0;
}
function yc() {
  var a2 = rc;
  rc <<= 1;
  (rc & 4194240) === 0 && (rc = 64);
  return a2;
}
function zc(a2) {
  for (var b3 = [], c7 = 0; 31 > c7; c7++)
    b3.push(a2);
  return b3;
}
function Ac(a2, b3, c7) {
  a2.pendingLanes |= b3;
  b3 !== 536870912 && (a2.suspendedLanes = 0, a2.pingedLanes = 0);
  a2 = a2.eventTimes;
  b3 = 31 - oc(b3);
  a2[b3] = c7;
}
function Bc(a2, b3) {
  var c7 = a2.pendingLanes & ~b3;
  a2.pendingLanes = b3;
  a2.suspendedLanes = 0;
  a2.pingedLanes = 0;
  a2.expiredLanes &= b3;
  a2.mutableReadLanes &= b3;
  a2.entangledLanes &= b3;
  b3 = a2.entanglements;
  var d3 = a2.eventTimes;
  for (a2 = a2.expirationTimes; 0 < c7; ) {
    var e2 = 31 - oc(c7), f3 = 1 << e2;
    b3[e2] = 0;
    d3[e2] = -1;
    a2[e2] = -1;
    c7 &= ~f3;
  }
}
function Cc(a2, b3) {
  var c7 = a2.entangledLanes |= b3;
  for (a2 = a2.entanglements; c7; ) {
    var d3 = 31 - oc(c7), e2 = 1 << d3;
    e2 & b3 | a2[d3] & b3 && (a2[d3] |= b3);
    c7 &= ~e2;
  }
}
var C2 = 0;
function Dc(a2) {
  a2 &= -a2;
  return 1 < a2 ? 4 < a2 ? (a2 & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
}
var Ec;
var Fc;
var Gc;
var Hc;
var Ic;
var Jc = false;
var Kc = [];
var Lc = null;
var Mc = null;
var Nc = null;
var Oc = new Map();
var Pc = new Map();
var Qc = [];
var Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Sc(a2, b3) {
  switch (a2) {
    case "focusin":
    case "focusout":
      Lc = null;
      break;
    case "dragenter":
    case "dragleave":
      Mc = null;
      break;
    case "mouseover":
    case "mouseout":
      Nc = null;
      break;
    case "pointerover":
    case "pointerout":
      Oc.delete(b3.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Pc.delete(b3.pointerId);
  }
}
function Tc(a2, b3, c7, d3, e2, f3) {
  if (a2 === null || a2.nativeEvent !== f3)
    return a2 = {blockedOn: b3, domEventName: c7, eventSystemFlags: d3, nativeEvent: f3, targetContainers: [e2]}, b3 !== null && (b3 = Cb(b3), b3 !== null && Fc(b3)), a2;
  a2.eventSystemFlags |= d3;
  b3 = a2.targetContainers;
  e2 !== null && b3.indexOf(e2) === -1 && b3.push(e2);
  return a2;
}
function Uc(a2, b3, c7, d3, e2) {
  switch (b3) {
    case "focusin":
      return Lc = Tc(Lc, a2, b3, c7, d3, e2), true;
    case "dragenter":
      return Mc = Tc(Mc, a2, b3, c7, d3, e2), true;
    case "mouseover":
      return Nc = Tc(Nc, a2, b3, c7, d3, e2), true;
    case "pointerover":
      var f3 = e2.pointerId;
      Oc.set(f3, Tc(Oc.get(f3) || null, a2, b3, c7, d3, e2));
      return true;
    case "gotpointercapture":
      return f3 = e2.pointerId, Pc.set(f3, Tc(Pc.get(f3) || null, a2, b3, c7, d3, e2)), true;
  }
  return false;
}
function Vc(a2) {
  var b3 = Wc(a2.target);
  if (b3 !== null) {
    var c7 = Vb(b3);
    if (c7 !== null) {
      if (b3 = c7.tag, b3 === 13) {
        if (b3 = Wb(c7), b3 !== null) {
          a2.blockedOn = b3;
          Ic(a2.priority, function() {
            Gc(c7);
          });
          return;
        }
      } else if (b3 === 3 && c7.stateNode.current.memoizedState.isDehydrated) {
        a2.blockedOn = c7.tag === 3 ? c7.stateNode.containerInfo : null;
        return;
      }
    }
  }
  a2.blockedOn = null;
}
function Xc(a2) {
  if (a2.blockedOn !== null)
    return false;
  for (var b3 = a2.targetContainers; 0 < b3.length; ) {
    var c7 = Yc(a2.domEventName, a2.eventSystemFlags, b3[0], a2.nativeEvent);
    if (c7 === null) {
      c7 = a2.nativeEvent;
      var d3 = new c7.constructor(c7.type, c7);
      wb = d3;
      c7.target.dispatchEvent(d3);
      wb = null;
    } else
      return b3 = Cb(c7), b3 !== null && Fc(b3), a2.blockedOn = c7, false;
    b3.shift();
  }
  return true;
}
function Zc(a2, b3, c7) {
  Xc(a2) && c7.delete(b3);
}
function $c() {
  Jc = false;
  Lc !== null && Xc(Lc) && (Lc = null);
  Mc !== null && Xc(Mc) && (Mc = null);
  Nc !== null && Xc(Nc) && (Nc = null);
  Oc.forEach(Zc);
  Pc.forEach(Zc);
}
function ad(a2, b3) {
  a2.blockedOn === b3 && (a2.blockedOn = null, Jc || (Jc = true, scheduler.unstable_scheduleCallback(scheduler.unstable_NormalPriority, $c)));
}
function bd(a2) {
  function b3(b4) {
    return ad(b4, a2);
  }
  if (0 < Kc.length) {
    ad(Kc[0], a2);
    for (var c7 = 1; c7 < Kc.length; c7++) {
      var d3 = Kc[c7];
      d3.blockedOn === a2 && (d3.blockedOn = null);
    }
  }
  Lc !== null && ad(Lc, a2);
  Mc !== null && ad(Mc, a2);
  Nc !== null && ad(Nc, a2);
  Oc.forEach(b3);
  Pc.forEach(b3);
  for (c7 = 0; c7 < Qc.length; c7++)
    d3 = Qc[c7], d3.blockedOn === a2 && (d3.blockedOn = null);
  for (; 0 < Qc.length && (c7 = Qc[0], c7.blockedOn === null); )
    Vc(c7), c7.blockedOn === null && Qc.shift();
}
var cd = ua.ReactCurrentBatchConfig;
var dd = true;
function ed(a2, b3, c7, d3) {
  var e2 = C2, f3 = cd.transition;
  cd.transition = null;
  try {
    C2 = 1, fd(a2, b3, c7, d3);
  } finally {
    C2 = e2, cd.transition = f3;
  }
}
function gd(a2, b3, c7, d3) {
  var e2 = C2, f3 = cd.transition;
  cd.transition = null;
  try {
    C2 = 4, fd(a2, b3, c7, d3);
  } finally {
    C2 = e2, cd.transition = f3;
  }
}
function fd(a2, b3, c7, d3) {
  if (dd) {
    var e2 = Yc(a2, b3, c7, d3);
    if (e2 === null)
      hd(a2, b3, d3, id, c7), Sc(a2, d3);
    else if (Uc(e2, a2, b3, c7, d3))
      d3.stopPropagation();
    else if (Sc(a2, d3), b3 & 4 && -1 < Rc.indexOf(a2)) {
      for (; e2 !== null; ) {
        var f3 = Cb(e2);
        f3 !== null && Ec(f3);
        f3 = Yc(a2, b3, c7, d3);
        f3 === null && hd(a2, b3, d3, id, c7);
        if (f3 === e2)
          break;
        e2 = f3;
      }
      e2 !== null && d3.stopPropagation();
    } else
      hd(a2, b3, d3, null, c7);
  }
}
var id = null;
function Yc(a2, b3, c7, d3) {
  id = null;
  a2 = xb(d3);
  a2 = Wc(a2);
  if (a2 !== null)
    if (b3 = Vb(a2), b3 === null)
      a2 = null;
    else if (c7 = b3.tag, c7 === 13) {
      a2 = Wb(b3);
      if (a2 !== null)
        return a2;
      a2 = null;
    } else if (c7 === 3) {
      if (b3.stateNode.current.memoizedState.isDehydrated)
        return b3.tag === 3 ? b3.stateNode.containerInfo : null;
      a2 = null;
    } else
      b3 !== a2 && (a2 = null);
  id = a2;
  return null;
}
function jd(a2) {
  switch (a2) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (ec()) {
        case fc:
          return 1;
        case gc:
          return 4;
        case hc:
        case ic:
          return 16;
        case jc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var kd = null;
var ld = null;
var md = null;
function nd() {
  if (md)
    return md;
  var a2, b3 = ld, c7 = b3.length, d3, e2 = "value" in kd ? kd.value : kd.textContent, f3 = e2.length;
  for (a2 = 0; a2 < c7 && b3[a2] === e2[a2]; a2++)
    ;
  var g3 = c7 - a2;
  for (d3 = 1; d3 <= g3 && b3[c7 - d3] === e2[f3 - d3]; d3++)
    ;
  return md = e2.slice(a2, 1 < d3 ? 1 - d3 : void 0);
}
function od(a2) {
  var b3 = a2.keyCode;
  "charCode" in a2 ? (a2 = a2.charCode, a2 === 0 && b3 === 13 && (a2 = 13)) : a2 = b3;
  a2 === 10 && (a2 = 13);
  return 32 <= a2 || a2 === 13 ? a2 : 0;
}
function pd() {
  return true;
}
function qd() {
  return false;
}
function rd(a2) {
  function b3(b4, d3, e2, f3, g3) {
    this._reactName = b4;
    this._targetInst = e2;
    this.type = d3;
    this.nativeEvent = f3;
    this.target = g3;
    this.currentTarget = null;
    for (var c7 in a2)
      a2.hasOwnProperty(c7) && (b4 = a2[c7], this[c7] = b4 ? b4(f3) : f3[c7]);
    this.isDefaultPrevented = (f3.defaultPrevented != null ? f3.defaultPrevented : f3.returnValue === false) ? pd : qd;
    this.isPropagationStopped = qd;
    return this;
  }
  A2(b3.prototype, {preventDefault: function() {
    this.defaultPrevented = true;
    var a3 = this.nativeEvent;
    a3 && (a3.preventDefault ? a3.preventDefault() : typeof a3.returnValue !== "unknown" && (a3.returnValue = false), this.isDefaultPrevented = pd);
  }, stopPropagation: function() {
    var a3 = this.nativeEvent;
    a3 && (a3.stopPropagation ? a3.stopPropagation() : typeof a3.cancelBubble !== "unknown" && (a3.cancelBubble = true), this.isPropagationStopped = pd);
  }, persist: function() {
  }, isPersistent: pd});
  return b3;
}
var sd = {eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a2) {
  return a2.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0};
var td = rd(sd);
var ud = A2({}, sd, {view: 0, detail: 0});
var vd = rd(ud);
var wd;
var xd;
var yd;
var Ad = A2({}, ud, {screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a2) {
  return a2.relatedTarget === void 0 ? a2.fromElement === a2.srcElement ? a2.toElement : a2.fromElement : a2.relatedTarget;
}, movementX: function(a2) {
  if ("movementX" in a2)
    return a2.movementX;
  a2 !== yd && (yd && a2.type === "mousemove" ? (wd = a2.screenX - yd.screenX, xd = a2.screenY - yd.screenY) : xd = wd = 0, yd = a2);
  return wd;
}, movementY: function(a2) {
  return "movementY" in a2 ? a2.movementY : xd;
}});
var Bd = rd(Ad);
var Cd = A2({}, Ad, {dataTransfer: 0});
var Dd = rd(Cd);
var Ed = A2({}, ud, {relatedTarget: 0});
var Fd = rd(Ed);
var Gd = A2({}, sd, {animationName: 0, elapsedTime: 0, pseudoElement: 0});
var Hd = rd(Gd);
var Id = A2({}, sd, {clipboardData: function(a2) {
  return "clipboardData" in a2 ? a2.clipboardData : window.clipboardData;
}});
var Jd = rd(Id);
var Kd = A2({}, sd, {data: 0});
var Ld = rd(Kd);
var Md = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
};
var Nd = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
};
var Od = {Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey"};
function Pd(a2) {
  var b3 = this.nativeEvent;
  return b3.getModifierState ? b3.getModifierState(a2) : (a2 = Od[a2]) ? !!b3[a2] : false;
}
function zd() {
  return Pd;
}
var Qd = A2({}, ud, {key: function(a2) {
  if (a2.key) {
    var b3 = Md[a2.key] || a2.key;
    if (b3 !== "Unidentified")
      return b3;
  }
  return a2.type === "keypress" ? (a2 = od(a2), a2 === 13 ? "Enter" : String.fromCharCode(a2)) : a2.type === "keydown" || a2.type === "keyup" ? Nd[a2.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a2) {
  return a2.type === "keypress" ? od(a2) : 0;
}, keyCode: function(a2) {
  return a2.type === "keydown" || a2.type === "keyup" ? a2.keyCode : 0;
}, which: function(a2) {
  return a2.type === "keypress" ? od(a2) : a2.type === "keydown" || a2.type === "keyup" ? a2.keyCode : 0;
}});
var Rd = rd(Qd);
var Sd = A2({}, Ad, {pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0});
var Td = rd(Sd);
var Ud = A2({}, ud, {touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd});
var Vd = rd(Ud);
var Wd = A2({}, sd, {propertyName: 0, elapsedTime: 0, pseudoElement: 0});
var Xd = rd(Wd);
var Yd = A2({}, Ad, {
  deltaX: function(a2) {
    return "deltaX" in a2 ? a2.deltaX : "wheelDeltaX" in a2 ? -a2.wheelDeltaX : 0;
  },
  deltaY: function(a2) {
    return "deltaY" in a2 ? a2.deltaY : "wheelDeltaY" in a2 ? -a2.wheelDeltaY : "wheelDelta" in a2 ? -a2.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
});
var Zd = rd(Yd);
var $d = [9, 13, 27, 32];
var ae = ia && "CompositionEvent" in window;
var be = null;
ia && "documentMode" in document && (be = document.documentMode);
var ce = ia && "TextEvent" in window && !be;
var de = ia && (!ae || be && 8 < be && 11 >= be);
var ee = String.fromCharCode(32);
var fe = false;
function ge(a2, b3) {
  switch (a2) {
    case "keyup":
      return $d.indexOf(b3.keyCode) !== -1;
    case "keydown":
      return b3.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return true;
    default:
      return false;
  }
}
function he(a2) {
  a2 = a2.detail;
  return typeof a2 === "object" && "data" in a2 ? a2.data : null;
}
var ie = false;
function je(a2, b3) {
  switch (a2) {
    case "compositionend":
      return he(b3);
    case "keypress":
      if (b3.which !== 32)
        return null;
      fe = true;
      return ee;
    case "textInput":
      return a2 = b3.data, a2 === ee && fe ? null : a2;
    default:
      return null;
  }
}
function ke(a2, b3) {
  if (ie)
    return a2 === "compositionend" || !ae && ge(a2, b3) ? (a2 = nd(), md = ld = kd = null, ie = false, a2) : null;
  switch (a2) {
    case "paste":
      return null;
    case "keypress":
      if (!(b3.ctrlKey || b3.altKey || b3.metaKey) || b3.ctrlKey && b3.altKey) {
        if (b3.char && 1 < b3.char.length)
          return b3.char;
        if (b3.which)
          return String.fromCharCode(b3.which);
      }
      return null;
    case "compositionend":
      return de && b3.locale !== "ko" ? null : b3.data;
    default:
      return null;
  }
}
var le = {color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true};
function me(a2) {
  var b3 = a2 && a2.nodeName && a2.nodeName.toLowerCase();
  return b3 === "input" ? !!le[a2.type] : b3 === "textarea" ? true : false;
}
function ne(a2, b3, c7, d3) {
  Eb(d3);
  b3 = oe(b3, "onChange");
  0 < b3.length && (c7 = new td("onChange", "change", null, c7, d3), a2.push({event: c7, listeners: b3}));
}
var pe = null;
var qe = null;
function re(a2) {
  se(a2, 0);
}
function te(a2) {
  var b3 = ue(a2);
  if (Wa(b3))
    return a2;
}
function ve(a2, b3) {
  if (a2 === "change")
    return b3;
}
var we = false;
if (ia) {
  if (ia) {
    ye3 = "oninput" in document;
    if (!ye3) {
      ze3 = document.createElement("div");
      ze3.setAttribute("oninput", "return;");
      ye3 = typeof ze3.oninput === "function";
    }
    xe3 = ye3;
  } else
    xe3 = false;
  we = xe3 && (!document.documentMode || 9 < document.documentMode);
}
var xe3;
var ye3;
var ze3;
function Ae() {
  pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
}
function Be(a2) {
  if (a2.propertyName === "value" && te(qe)) {
    var b3 = [];
    ne(b3, qe, a2, xb(a2));
    Jb(re, b3);
  }
}
function Ce(a2, b3, c7) {
  a2 === "focusin" ? (Ae(), pe = b3, qe = c7, pe.attachEvent("onpropertychange", Be)) : a2 === "focusout" && Ae();
}
function De(a2) {
  if (a2 === "selectionchange" || a2 === "keyup" || a2 === "keydown")
    return te(qe);
}
function Ee(a2, b3) {
  if (a2 === "click")
    return te(b3);
}
function Fe(a2, b3) {
  if (a2 === "input" || a2 === "change")
    return te(b3);
}
function Ge(a2, b3) {
  return a2 === b3 && (a2 !== 0 || 1 / a2 === 1 / b3) || a2 !== a2 && b3 !== b3;
}
var He = typeof Object.is === "function" ? Object.is : Ge;
function Ie(a2, b3) {
  if (He(a2, b3))
    return true;
  if (typeof a2 !== "object" || a2 === null || typeof b3 !== "object" || b3 === null)
    return false;
  var c7 = Object.keys(a2), d3 = Object.keys(b3);
  if (c7.length !== d3.length)
    return false;
  for (d3 = 0; d3 < c7.length; d3++) {
    var e2 = c7[d3];
    if (!ja.call(b3, e2) || !He(a2[e2], b3[e2]))
      return false;
  }
  return true;
}
function Je(a2) {
  for (; a2 && a2.firstChild; )
    a2 = a2.firstChild;
  return a2;
}
function Ke(a2, b3) {
  var c7 = Je(a2);
  a2 = 0;
  for (var d3; c7; ) {
    if (c7.nodeType === 3) {
      d3 = a2 + c7.textContent.length;
      if (a2 <= b3 && d3 >= b3)
        return {node: c7, offset: b3 - a2};
      a2 = d3;
    }
    a: {
      for (; c7; ) {
        if (c7.nextSibling) {
          c7 = c7.nextSibling;
          break a;
        }
        c7 = c7.parentNode;
      }
      c7 = void 0;
    }
    c7 = Je(c7);
  }
}
function Le(a2, b3) {
  return a2 && b3 ? a2 === b3 ? true : a2 && a2.nodeType === 3 ? false : b3 && b3.nodeType === 3 ? Le(a2, b3.parentNode) : "contains" in a2 ? a2.contains(b3) : a2.compareDocumentPosition ? !!(a2.compareDocumentPosition(b3) & 16) : false : false;
}
function Me() {
  for (var a2 = window, b3 = Xa(); b3 instanceof a2.HTMLIFrameElement; ) {
    try {
      var c7 = typeof b3.contentWindow.location.href === "string";
    } catch (d3) {
      c7 = false;
    }
    if (c7)
      a2 = b3.contentWindow;
    else
      break;
    b3 = Xa(a2.document);
  }
  return b3;
}
function Ne(a2) {
  var b3 = a2 && a2.nodeName && a2.nodeName.toLowerCase();
  return b3 && (b3 === "input" && (a2.type === "text" || a2.type === "search" || a2.type === "tel" || a2.type === "url" || a2.type === "password") || b3 === "textarea" || a2.contentEditable === "true");
}
function Oe(a2) {
  var b3 = Me(), c7 = a2.focusedElem, d3 = a2.selectionRange;
  if (b3 !== c7 && c7 && c7.ownerDocument && Le(c7.ownerDocument.documentElement, c7)) {
    if (d3 !== null && Ne(c7)) {
      if (b3 = d3.start, a2 = d3.end, a2 === void 0 && (a2 = b3), "selectionStart" in c7)
        c7.selectionStart = b3, c7.selectionEnd = Math.min(a2, c7.value.length);
      else if (a2 = (b3 = c7.ownerDocument || document) && b3.defaultView || window, a2.getSelection) {
        a2 = a2.getSelection();
        var e2 = c7.textContent.length, f3 = Math.min(d3.start, e2);
        d3 = d3.end === void 0 ? f3 : Math.min(d3.end, e2);
        !a2.extend && f3 > d3 && (e2 = d3, d3 = f3, f3 = e2);
        e2 = Ke(c7, f3);
        var g3 = Ke(c7, d3);
        e2 && g3 && (a2.rangeCount !== 1 || a2.anchorNode !== e2.node || a2.anchorOffset !== e2.offset || a2.focusNode !== g3.node || a2.focusOffset !== g3.offset) && (b3 = b3.createRange(), b3.setStart(e2.node, e2.offset), a2.removeAllRanges(), f3 > d3 ? (a2.addRange(b3), a2.extend(g3.node, g3.offset)) : (b3.setEnd(g3.node, g3.offset), a2.addRange(b3)));
      }
    }
    b3 = [];
    for (a2 = c7; a2 = a2.parentNode; )
      a2.nodeType === 1 && b3.push({element: a2, left: a2.scrollLeft, top: a2.scrollTop});
    typeof c7.focus === "function" && c7.focus();
    for (c7 = 0; c7 < b3.length; c7++)
      a2 = b3[c7], a2.element.scrollLeft = a2.left, a2.element.scrollTop = a2.top;
  }
}
var Pe = ia && "documentMode" in document && 11 >= document.documentMode;
var Qe = null;
var Re = null;
var Se = null;
var Te = false;
function Ue(a2, b3, c7) {
  var d3 = c7.window === c7 ? c7.document : c7.nodeType === 9 ? c7 : c7.ownerDocument;
  Te || Qe == null || Qe !== Xa(d3) || (d3 = Qe, "selectionStart" in d3 && Ne(d3) ? d3 = {start: d3.selectionStart, end: d3.selectionEnd} : (d3 = (d3.ownerDocument && d3.ownerDocument.defaultView || window).getSelection(), d3 = {anchorNode: d3.anchorNode, anchorOffset: d3.anchorOffset, focusNode: d3.focusNode, focusOffset: d3.focusOffset}), Se && Ie(Se, d3) || (Se = d3, d3 = oe(Re, "onSelect"), 0 < d3.length && (b3 = new td("onSelect", "select", null, b3, c7), a2.push({event: b3, listeners: d3}), b3.target = Qe)));
}
function Ve(a2, b3) {
  var c7 = {};
  c7[a2.toLowerCase()] = b3.toLowerCase();
  c7["Webkit" + a2] = "webkit" + b3;
  c7["Moz" + a2] = "moz" + b3;
  return c7;
}
var We = {animationend: Ve("Animation", "AnimationEnd"), animationiteration: Ve("Animation", "AnimationIteration"), animationstart: Ve("Animation", "AnimationStart"), transitionend: Ve("Transition", "TransitionEnd")};
var Xe = {};
var Ye = {};
ia && (Ye = document.createElement("div").style, "AnimationEvent" in window || (delete We.animationend.animation, delete We.animationiteration.animation, delete We.animationstart.animation), "TransitionEvent" in window || delete We.transitionend.transition);
function Ze(a2) {
  if (Xe[a2])
    return Xe[a2];
  if (!We[a2])
    return a2;
  var b3 = We[a2], c7;
  for (c7 in b3)
    if (b3.hasOwnProperty(c7) && c7 in Ye)
      return Xe[a2] = b3[c7];
  return a2;
}
var $e = Ze("animationend");
var af = Ze("animationiteration");
var bf = Ze("animationstart");
var cf = Ze("transitionend");
var df = new Map();
var ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ff(a2, b3) {
  df.set(a2, b3);
  fa(b3, [a2]);
}
for (var gf = 0; gf < ef.length; gf++) {
  hf = ef[gf], jf = hf.toLowerCase(), kf = hf[0].toUpperCase() + hf.slice(1);
  ff(jf, "on" + kf);
}
var hf;
var jf;
var kf;
ff($e, "onAnimationEnd");
ff(af, "onAnimationIteration");
ff(bf, "onAnimationStart");
ff("dblclick", "onDoubleClick");
ff("focusin", "onFocus");
ff("focusout", "onBlur");
ff(cf, "onTransitionEnd");
ha("onMouseEnter", ["mouseout", "mouseover"]);
ha("onMouseLeave", ["mouseout", "mouseover"]);
ha("onPointerEnter", ["pointerout", "pointerover"]);
ha("onPointerLeave", ["pointerout", "pointerover"]);
fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ");
var mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
function nf(a2, b3, c7) {
  var d3 = a2.type || "unknown-event";
  a2.currentTarget = c7;
  Ub(d3, b3, void 0, a2);
  a2.currentTarget = null;
}
function se(a2, b3) {
  b3 = (b3 & 4) !== 0;
  for (var c7 = 0; c7 < a2.length; c7++) {
    var d3 = a2[c7], e2 = d3.event;
    d3 = d3.listeners;
    a: {
      var f3 = void 0;
      if (b3)
        for (var g3 = d3.length - 1; 0 <= g3; g3--) {
          var h3 = d3[g3], k3 = h3.instance, l4 = h3.currentTarget;
          h3 = h3.listener;
          if (k3 !== f3 && e2.isPropagationStopped())
            break a;
          nf(e2, h3, l4);
          f3 = k3;
        }
      else
        for (g3 = 0; g3 < d3.length; g3++) {
          h3 = d3[g3];
          k3 = h3.instance;
          l4 = h3.currentTarget;
          h3 = h3.listener;
          if (k3 !== f3 && e2.isPropagationStopped())
            break a;
          nf(e2, h3, l4);
          f3 = k3;
        }
    }
  }
  if (Qb)
    throw a2 = Rb, Qb = false, Rb = null, a2;
}
function D2(a2, b3) {
  var c7 = b3[of];
  c7 === void 0 && (c7 = b3[of] = new Set());
  var d3 = a2 + "__bubble";
  c7.has(d3) || (pf(b3, a2, 2, false), c7.add(d3));
}
function qf(a2, b3, c7) {
  var d3 = 0;
  b3 && (d3 |= 4);
  pf(c7, a2, d3, b3);
}
var rf = "_reactListening" + Math.random().toString(36).slice(2);
function sf(a2) {
  if (!a2[rf]) {
    a2[rf] = true;
    da.forEach(function(b4) {
      b4 !== "selectionchange" && (mf.has(b4) || qf(b4, false, a2), qf(b4, true, a2));
    });
    var b3 = a2.nodeType === 9 ? a2 : a2.ownerDocument;
    b3 === null || b3[rf] || (b3[rf] = true, qf("selectionchange", false, b3));
  }
}
function pf(a2, b3, c7, d3) {
  switch (jd(b3)) {
    case 1:
      var e2 = ed;
      break;
    case 4:
      e2 = gd;
      break;
    default:
      e2 = fd;
  }
  c7 = e2.bind(null, b3, c7, a2);
  e2 = void 0;
  !Lb || b3 !== "touchstart" && b3 !== "touchmove" && b3 !== "wheel" || (e2 = true);
  d3 ? e2 !== void 0 ? a2.addEventListener(b3, c7, {capture: true, passive: e2}) : a2.addEventListener(b3, c7, true) : e2 !== void 0 ? a2.addEventListener(b3, c7, {passive: e2}) : a2.addEventListener(b3, c7, false);
}
function hd(a2, b3, c7, d3, e2) {
  var f3 = d3;
  if ((b3 & 1) === 0 && (b3 & 2) === 0 && d3 !== null)
    a:
      for (; ; ) {
        if (d3 === null)
          return;
        var g3 = d3.tag;
        if (g3 === 3 || g3 === 4) {
          var h3 = d3.stateNode.containerInfo;
          if (h3 === e2 || h3.nodeType === 8 && h3.parentNode === e2)
            break;
          if (g3 === 4)
            for (g3 = d3.return; g3 !== null; ) {
              var k3 = g3.tag;
              if (k3 === 3 || k3 === 4) {
                if (k3 = g3.stateNode.containerInfo, k3 === e2 || k3.nodeType === 8 && k3.parentNode === e2)
                  return;
              }
              g3 = g3.return;
            }
          for (; h3 !== null; ) {
            g3 = Wc(h3);
            if (g3 === null)
              return;
            k3 = g3.tag;
            if (k3 === 5 || k3 === 6) {
              d3 = f3 = g3;
              continue a;
            }
            h3 = h3.parentNode;
          }
        }
        d3 = d3.return;
      }
  Jb(function() {
    var d4 = f3, e3 = xb(c7), g4 = [];
    a: {
      var h4 = df.get(a2);
      if (h4 !== void 0) {
        var k4 = td, n4 = a2;
        switch (a2) {
          case "keypress":
            if (od(c7) === 0)
              break a;
          case "keydown":
          case "keyup":
            k4 = Rd;
            break;
          case "focusin":
            n4 = "focus";
            k4 = Fd;
            break;
          case "focusout":
            n4 = "blur";
            k4 = Fd;
            break;
          case "beforeblur":
          case "afterblur":
            k4 = Fd;
            break;
          case "click":
            if (c7.button === 2)
              break a;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            k4 = Bd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k4 = Dd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k4 = Vd;
            break;
          case $e:
          case af:
          case bf:
            k4 = Hd;
            break;
          case cf:
            k4 = Xd;
            break;
          case "scroll":
            k4 = vd;
            break;
          case "wheel":
            k4 = Zd;
            break;
          case "copy":
          case "cut":
          case "paste":
            k4 = Jd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k4 = Td;
        }
        var t4 = (b3 & 4) !== 0, J4 = !t4 && a2 === "scroll", x4 = t4 ? h4 !== null ? h4 + "Capture" : null : h4;
        t4 = [];
        for (var w4 = d4, u3; w4 !== null; ) {
          u3 = w4;
          var F4 = u3.stateNode;
          u3.tag === 5 && F4 !== null && (u3 = F4, x4 !== null && (F4 = Kb(w4, x4), F4 != null && t4.push(tf(w4, F4, u3))));
          if (J4)
            break;
          w4 = w4.return;
        }
        0 < t4.length && (h4 = new k4(h4, n4, null, c7, e3), g4.push({event: h4, listeners: t4}));
      }
    }
    if ((b3 & 7) === 0) {
      a: {
        h4 = a2 === "mouseover" || a2 === "pointerover";
        k4 = a2 === "mouseout" || a2 === "pointerout";
        if (h4 && c7 !== wb && (n4 = c7.relatedTarget || c7.fromElement) && (Wc(n4) || n4[uf]))
          break a;
        if (k4 || h4) {
          h4 = e3.window === e3 ? e3 : (h4 = e3.ownerDocument) ? h4.defaultView || h4.parentWindow : window;
          if (k4) {
            if (n4 = c7.relatedTarget || c7.toElement, k4 = d4, n4 = n4 ? Wc(n4) : null, n4 !== null && (J4 = Vb(n4), n4 !== J4 || n4.tag !== 5 && n4.tag !== 6))
              n4 = null;
          } else
            k4 = null, n4 = d4;
          if (k4 !== n4) {
            t4 = Bd;
            F4 = "onMouseLeave";
            x4 = "onMouseEnter";
            w4 = "mouse";
            if (a2 === "pointerout" || a2 === "pointerover")
              t4 = Td, F4 = "onPointerLeave", x4 = "onPointerEnter", w4 = "pointer";
            J4 = k4 == null ? h4 : ue(k4);
            u3 = n4 == null ? h4 : ue(n4);
            h4 = new t4(F4, w4 + "leave", k4, c7, e3);
            h4.target = J4;
            h4.relatedTarget = u3;
            F4 = null;
            Wc(e3) === d4 && (t4 = new t4(x4, w4 + "enter", n4, c7, e3), t4.target = u3, t4.relatedTarget = J4, F4 = t4);
            J4 = F4;
            if (k4 && n4)
              b: {
                t4 = k4;
                x4 = n4;
                w4 = 0;
                for (u3 = t4; u3; u3 = vf(u3))
                  w4++;
                u3 = 0;
                for (F4 = x4; F4; F4 = vf(F4))
                  u3++;
                for (; 0 < w4 - u3; )
                  t4 = vf(t4), w4--;
                for (; 0 < u3 - w4; )
                  x4 = vf(x4), u3--;
                for (; w4--; ) {
                  if (t4 === x4 || x4 !== null && t4 === x4.alternate)
                    break b;
                  t4 = vf(t4);
                  x4 = vf(x4);
                }
                t4 = null;
              }
            else
              t4 = null;
            k4 !== null && wf(g4, h4, k4, t4, false);
            n4 !== null && J4 !== null && wf(g4, J4, n4, t4, true);
          }
        }
      }
      a: {
        h4 = d4 ? ue(d4) : window;
        k4 = h4.nodeName && h4.nodeName.toLowerCase();
        if (k4 === "select" || k4 === "input" && h4.type === "file")
          var na = ve;
        else if (me(h4))
          if (we)
            na = Fe;
          else {
            na = De;
            var xa = Ce;
          }
        else
          (k4 = h4.nodeName) && k4.toLowerCase() === "input" && (h4.type === "checkbox" || h4.type === "radio") && (na = Ee);
        if (na && (na = na(a2, d4))) {
          ne(g4, na, c7, e3);
          break a;
        }
        xa && xa(a2, h4, d4);
        a2 === "focusout" && (xa = h4._wrapperState) && xa.controlled && h4.type === "number" && cb(h4, "number", h4.value);
      }
      xa = d4 ? ue(d4) : window;
      switch (a2) {
        case "focusin":
          if (me(xa) || xa.contentEditable === "true")
            Qe = xa, Re = d4, Se = null;
          break;
        case "focusout":
          Se = Re = Qe = null;
          break;
        case "mousedown":
          Te = true;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Te = false;
          Ue(g4, c7, e3);
          break;
        case "selectionchange":
          if (Pe)
            break;
        case "keydown":
        case "keyup":
          Ue(g4, c7, e3);
      }
      var $a;
      if (ae)
        b: {
          switch (a2) {
            case "compositionstart":
              var ba = "onCompositionStart";
              break b;
            case "compositionend":
              ba = "onCompositionEnd";
              break b;
            case "compositionupdate":
              ba = "onCompositionUpdate";
              break b;
          }
          ba = void 0;
        }
      else
        ie ? ge(a2, c7) && (ba = "onCompositionEnd") : a2 === "keydown" && c7.keyCode === 229 && (ba = "onCompositionStart");
      ba && (de && c7.locale !== "ko" && (ie || ba !== "onCompositionStart" ? ba === "onCompositionEnd" && ie && ($a = nd()) : (kd = e3, ld = "value" in kd ? kd.value : kd.textContent, ie = true)), xa = oe(d4, ba), 0 < xa.length && (ba = new Ld(ba, a2, null, c7, e3), g4.push({event: ba, listeners: xa}), $a ? ba.data = $a : ($a = he(c7), $a !== null && (ba.data = $a))));
      if ($a = ce ? je(a2, c7) : ke(a2, c7))
        d4 = oe(d4, "onBeforeInput"), 0 < d4.length && (e3 = new Ld("onBeforeInput", "beforeinput", null, c7, e3), g4.push({event: e3, listeners: d4}), e3.data = $a);
    }
    se(g4, b3);
  });
}
function tf(a2, b3, c7) {
  return {instance: a2, listener: b3, currentTarget: c7};
}
function oe(a2, b3) {
  for (var c7 = b3 + "Capture", d3 = []; a2 !== null; ) {
    var e2 = a2, f3 = e2.stateNode;
    e2.tag === 5 && f3 !== null && (e2 = f3, f3 = Kb(a2, c7), f3 != null && d3.unshift(tf(a2, f3, e2)), f3 = Kb(a2, b3), f3 != null && d3.push(tf(a2, f3, e2)));
    a2 = a2.return;
  }
  return d3;
}
function vf(a2) {
  if (a2 === null)
    return null;
  do
    a2 = a2.return;
  while (a2 && a2.tag !== 5);
  return a2 ? a2 : null;
}
function wf(a2, b3, c7, d3, e2) {
  for (var f3 = b3._reactName, g3 = []; c7 !== null && c7 !== d3; ) {
    var h3 = c7, k3 = h3.alternate, l4 = h3.stateNode;
    if (k3 !== null && k3 === d3)
      break;
    h3.tag === 5 && l4 !== null && (h3 = l4, e2 ? (k3 = Kb(c7, f3), k3 != null && g3.unshift(tf(c7, k3, h3))) : e2 || (k3 = Kb(c7, f3), k3 != null && g3.push(tf(c7, k3, h3))));
    c7 = c7.return;
  }
  g3.length !== 0 && a2.push({event: b3, listeners: g3});
}
var xf = /\r\n?/g;
var yf = /\u0000|\uFFFD/g;
function zf(a2) {
  return (typeof a2 === "string" ? a2 : "" + a2).replace(xf, "\n").replace(yf, "");
}
function Af(a2, b3, c7) {
  b3 = zf(b3);
  if (zf(a2) !== b3 && c7)
    throw Error(p2(425));
}
function Bf() {
}
var Cf = null;
var Df = null;
function Ef(a2, b3) {
  return a2 === "textarea" || a2 === "noscript" || typeof b3.children === "string" || typeof b3.children === "number" || typeof b3.dangerouslySetInnerHTML === "object" && b3.dangerouslySetInnerHTML !== null && b3.dangerouslySetInnerHTML.__html != null;
}
var Ff = typeof setTimeout === "function" ? setTimeout : void 0;
var Gf = typeof clearTimeout === "function" ? clearTimeout : void 0;
var Hf = typeof Promise === "function" ? Promise : void 0;
var Jf = typeof queueMicrotask === "function" ? queueMicrotask : typeof Hf !== "undefined" ? function(a2) {
  return Hf.resolve(null).then(a2).catch(If);
} : Ff;
function If(a2) {
  setTimeout(function() {
    throw a2;
  });
}
function Kf(a2, b3) {
  var c7 = b3, d3 = 0;
  do {
    var e2 = c7.nextSibling;
    a2.removeChild(c7);
    if (e2 && e2.nodeType === 8)
      if (c7 = e2.data, c7 === "/$") {
        if (d3 === 0) {
          a2.removeChild(e2);
          bd(b3);
          return;
        }
        d3--;
      } else
        c7 !== "$" && c7 !== "$?" && c7 !== "$!" || d3++;
    c7 = e2;
  } while (c7);
  bd(b3);
}
function Lf(a2) {
  for (; a2 != null; a2 = a2.nextSibling) {
    var b3 = a2.nodeType;
    if (b3 === 1 || b3 === 3)
      break;
    if (b3 === 8) {
      b3 = a2.data;
      if (b3 === "$" || b3 === "$!" || b3 === "$?")
        break;
      if (b3 === "/$")
        return null;
    }
  }
  return a2;
}
function Mf(a2) {
  a2 = a2.previousSibling;
  for (var b3 = 0; a2; ) {
    if (a2.nodeType === 8) {
      var c7 = a2.data;
      if (c7 === "$" || c7 === "$!" || c7 === "$?") {
        if (b3 === 0)
          return a2;
        b3--;
      } else
        c7 === "/$" && b3++;
    }
    a2 = a2.previousSibling;
  }
  return null;
}
var Nf = Math.random().toString(36).slice(2);
var Of = "__reactFiber$" + Nf;
var Pf = "__reactProps$" + Nf;
var uf = "__reactContainer$" + Nf;
var of = "__reactEvents$" + Nf;
var Qf = "__reactListeners$" + Nf;
var Rf = "__reactHandles$" + Nf;
function Wc(a2) {
  var b3 = a2[Of];
  if (b3)
    return b3;
  for (var c7 = a2.parentNode; c7; ) {
    if (b3 = c7[uf] || c7[Of]) {
      c7 = b3.alternate;
      if (b3.child !== null || c7 !== null && c7.child !== null)
        for (a2 = Mf(a2); a2 !== null; ) {
          if (c7 = a2[Of])
            return c7;
          a2 = Mf(a2);
        }
      return b3;
    }
    a2 = c7;
    c7 = a2.parentNode;
  }
  return null;
}
function Cb(a2) {
  a2 = a2[Of] || a2[uf];
  return !a2 || a2.tag !== 5 && a2.tag !== 6 && a2.tag !== 13 && a2.tag !== 3 ? null : a2;
}
function ue(a2) {
  if (a2.tag === 5 || a2.tag === 6)
    return a2.stateNode;
  throw Error(p2(33));
}
function Db(a2) {
  return a2[Pf] || null;
}
var Sf = [];
var Tf = -1;
function Uf(a2) {
  return {current: a2};
}
function E2(a2) {
  0 > Tf || (a2.current = Sf[Tf], Sf[Tf] = null, Tf--);
}
function G2(a2, b3) {
  Tf++;
  Sf[Tf] = a2.current;
  a2.current = b3;
}
var Vf = {};
var H2 = Uf(Vf);
var Wf = Uf(false);
var Xf = Vf;
function Yf(a2, b3) {
  var c7 = a2.type.contextTypes;
  if (!c7)
    return Vf;
  var d3 = a2.stateNode;
  if (d3 && d3.__reactInternalMemoizedUnmaskedChildContext === b3)
    return d3.__reactInternalMemoizedMaskedChildContext;
  var e2 = {}, f3;
  for (f3 in c7)
    e2[f3] = b3[f3];
  d3 && (a2 = a2.stateNode, a2.__reactInternalMemoizedUnmaskedChildContext = b3, a2.__reactInternalMemoizedMaskedChildContext = e2);
  return e2;
}
function Zf(a2) {
  a2 = a2.childContextTypes;
  return a2 !== null && a2 !== void 0;
}
function $f() {
  E2(Wf);
  E2(H2);
}
function ag(a2, b3, c7) {
  if (H2.current !== Vf)
    throw Error(p2(168));
  G2(H2, b3);
  G2(Wf, c7);
}
function bg(a2, b3, c7) {
  var d3 = a2.stateNode;
  b3 = b3.childContextTypes;
  if (typeof d3.getChildContext !== "function")
    return c7;
  d3 = d3.getChildContext();
  for (var e2 in d3)
    if (!(e2 in b3))
      throw Error(p2(108, Ra(a2) || "Unknown", e2));
  return A2({}, c7, d3);
}
function cg(a2) {
  a2 = (a2 = a2.stateNode) && a2.__reactInternalMemoizedMergedChildContext || Vf;
  Xf = H2.current;
  G2(H2, a2);
  G2(Wf, Wf.current);
  return true;
}
function dg(a2, b3, c7) {
  var d3 = a2.stateNode;
  if (!d3)
    throw Error(p2(169));
  c7 ? (a2 = bg(a2, b3, Xf), d3.__reactInternalMemoizedMergedChildContext = a2, E2(Wf), E2(H2), G2(H2, a2)) : E2(Wf);
  G2(Wf, c7);
}
var eg = null;
var fg = false;
var gg = false;
function hg(a2) {
  eg === null ? eg = [a2] : eg.push(a2);
}
function ig(a2) {
  fg = true;
  hg(a2);
}
function jg() {
  if (!gg && eg !== null) {
    gg = true;
    var a2 = 0, b3 = C2;
    try {
      var c7 = eg;
      for (C2 = 1; a2 < c7.length; a2++) {
        var d3 = c7[a2];
        do
          d3 = d3(true);
        while (d3 !== null);
      }
      eg = null;
      fg = false;
    } catch (e2) {
      throw eg !== null && (eg = eg.slice(a2 + 1)), ac(fc, jg), e2;
    } finally {
      C2 = b3, gg = false;
    }
  }
  return null;
}
var kg = [];
var lg = 0;
var mg = null;
var ng = 0;
var og = [];
var pg = 0;
var qg = null;
var rg = 1;
var sg = "";
function tg(a2, b3) {
  kg[lg++] = ng;
  kg[lg++] = mg;
  mg = a2;
  ng = b3;
}
function ug(a2, b3, c7) {
  og[pg++] = rg;
  og[pg++] = sg;
  og[pg++] = qg;
  qg = a2;
  var d3 = rg;
  a2 = sg;
  var e2 = 32 - oc(d3) - 1;
  d3 &= ~(1 << e2);
  c7 += 1;
  var f3 = 32 - oc(b3) + e2;
  if (30 < f3) {
    var g3 = e2 - e2 % 5;
    f3 = (d3 & (1 << g3) - 1).toString(32);
    d3 >>= g3;
    e2 -= g3;
    rg = 1 << 32 - oc(b3) + e2 | c7 << e2 | d3;
    sg = f3 + a2;
  } else
    rg = 1 << f3 | c7 << e2 | d3, sg = a2;
}
function vg(a2) {
  a2.return !== null && (tg(a2, 1), ug(a2, 1, 0));
}
function wg(a2) {
  for (; a2 === mg; )
    mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
  for (; a2 === qg; )
    qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
}
var xg = null;
var yg = null;
var I2 = false;
var zg = null;
function Ag(a2, b3) {
  var c7 = Bg(5, null, null, 0);
  c7.elementType = "DELETED";
  c7.stateNode = b3;
  c7.return = a2;
  b3 = a2.deletions;
  b3 === null ? (a2.deletions = [c7], a2.flags |= 16) : b3.push(c7);
}
function Cg(a2, b3) {
  switch (a2.tag) {
    case 5:
      var c7 = a2.type;
      b3 = b3.nodeType !== 1 || c7.toLowerCase() !== b3.nodeName.toLowerCase() ? null : b3;
      return b3 !== null ? (a2.stateNode = b3, xg = a2, yg = Lf(b3.firstChild), true) : false;
    case 6:
      return b3 = a2.pendingProps === "" || b3.nodeType !== 3 ? null : b3, b3 !== null ? (a2.stateNode = b3, xg = a2, yg = null, true) : false;
    case 13:
      return b3 = b3.nodeType !== 8 ? null : b3, b3 !== null ? (c7 = qg !== null ? {id: rg, overflow: sg} : null, a2.memoizedState = {dehydrated: b3, treeContext: c7, retryLane: 1073741824}, c7 = Bg(18, null, null, 0), c7.stateNode = b3, c7.return = a2, a2.child = c7, xg = a2, yg = null, true) : false;
    default:
      return false;
  }
}
function Dg(a2) {
  return (a2.mode & 1) !== 0 && (a2.flags & 128) === 0;
}
function Eg(a2) {
  if (I2) {
    var b3 = yg;
    if (b3) {
      var c7 = b3;
      if (!Cg(a2, b3)) {
        if (Dg(a2))
          throw Error(p2(418));
        b3 = Lf(c7.nextSibling);
        var d3 = xg;
        b3 && Cg(a2, b3) ? Ag(d3, c7) : (a2.flags = a2.flags & -4097 | 2, I2 = false, xg = a2);
      }
    } else {
      if (Dg(a2))
        throw Error(p2(418));
      a2.flags = a2.flags & -4097 | 2;
      I2 = false;
      xg = a2;
    }
  }
}
function Fg(a2) {
  for (a2 = a2.return; a2 !== null && a2.tag !== 5 && a2.tag !== 3 && a2.tag !== 13; )
    a2 = a2.return;
  xg = a2;
}
function Gg(a2) {
  if (a2 !== xg)
    return false;
  if (!I2)
    return Fg(a2), I2 = true, false;
  var b3;
  (b3 = a2.tag !== 3) && !(b3 = a2.tag !== 5) && (b3 = a2.type, b3 = b3 !== "head" && b3 !== "body" && !Ef(a2.type, a2.memoizedProps));
  if (b3 && (b3 = yg)) {
    if (Dg(a2))
      throw Hg(), Error(p2(418));
    for (; b3; )
      Ag(a2, b3), b3 = Lf(b3.nextSibling);
  }
  Fg(a2);
  if (a2.tag === 13) {
    a2 = a2.memoizedState;
    a2 = a2 !== null ? a2.dehydrated : null;
    if (!a2)
      throw Error(p2(317));
    a: {
      a2 = a2.nextSibling;
      for (b3 = 0; a2; ) {
        if (a2.nodeType === 8) {
          var c7 = a2.data;
          if (c7 === "/$") {
            if (b3 === 0) {
              yg = Lf(a2.nextSibling);
              break a;
            }
            b3--;
          } else
            c7 !== "$" && c7 !== "$!" && c7 !== "$?" || b3++;
        }
        a2 = a2.nextSibling;
      }
      yg = null;
    }
  } else
    yg = xg ? Lf(a2.stateNode.nextSibling) : null;
  return true;
}
function Hg() {
  for (var a2 = yg; a2; )
    a2 = Lf(a2.nextSibling);
}
function Ig() {
  yg = xg = null;
  I2 = false;
}
function Jg(a2) {
  zg === null ? zg = [a2] : zg.push(a2);
}
var Kg = ua.ReactCurrentBatchConfig;
function Lg(a2, b3, c7) {
  a2 = c7.ref;
  if (a2 !== null && typeof a2 !== "function" && typeof a2 !== "object") {
    if (c7._owner) {
      c7 = c7._owner;
      if (c7) {
        if (c7.tag !== 1)
          throw Error(p2(309));
        var d3 = c7.stateNode;
      }
      if (!d3)
        throw Error(p2(147, a2));
      var e2 = d3, f3 = "" + a2;
      if (b3 !== null && b3.ref !== null && typeof b3.ref === "function" && b3.ref._stringRef === f3)
        return b3.ref;
      b3 = function(a3) {
        var b4 = e2.refs;
        a3 === null ? delete b4[f3] : b4[f3] = a3;
      };
      b3._stringRef = f3;
      return b3;
    }
    if (typeof a2 !== "string")
      throw Error(p2(284));
    if (!c7._owner)
      throw Error(p2(290, a2));
  }
  return a2;
}
function Mg(a2, b3) {
  a2 = Object.prototype.toString.call(b3);
  throw Error(p2(31, a2 === "[object Object]" ? "object with keys {" + Object.keys(b3).join(", ") + "}" : a2));
}
function Ng(a2) {
  var b3 = a2._init;
  return b3(a2._payload);
}
function Og(a2) {
  function b3(b4, c8) {
    if (a2) {
      var d4 = b4.deletions;
      d4 === null ? (b4.deletions = [c8], b4.flags |= 16) : d4.push(c8);
    }
  }
  function c7(c8, d4) {
    if (!a2)
      return null;
    for (; d4 !== null; )
      b3(c8, d4), d4 = d4.sibling;
    return null;
  }
  function d3(a3, b4) {
    for (a3 = new Map(); b4 !== null; )
      b4.key !== null ? a3.set(b4.key, b4) : a3.set(b4.index, b4), b4 = b4.sibling;
    return a3;
  }
  function e2(a3, b4) {
    a3 = Pg(a3, b4);
    a3.index = 0;
    a3.sibling = null;
    return a3;
  }
  function f3(b4, c8, d4) {
    b4.index = d4;
    if (!a2)
      return b4.flags |= 1048576, c8;
    d4 = b4.alternate;
    if (d4 !== null)
      return d4 = d4.index, d4 < c8 ? (b4.flags |= 2, c8) : d4;
    b4.flags |= 2;
    return c8;
  }
  function g3(b4) {
    a2 && b4.alternate === null && (b4.flags |= 2);
    return b4;
  }
  function h3(a3, b4, c8, d4) {
    if (b4 === null || b4.tag !== 6)
      return b4 = Qg(c8, a3.mode, d4), b4.return = a3, b4;
    b4 = e2(b4, c8);
    b4.return = a3;
    return b4;
  }
  function k3(a3, b4, c8, d4) {
    var f4 = c8.type;
    if (f4 === ya)
      return m3(a3, b4, c8.props.children, d4, c8.key);
    if (b4 !== null && (b4.elementType === f4 || typeof f4 === "object" && f4 !== null && f4.$$typeof === Ha && Ng(f4) === b4.type))
      return d4 = e2(b4, c8.props), d4.ref = Lg(a3, b4, c8), d4.return = a3, d4;
    d4 = Rg(c8.type, c8.key, c8.props, null, a3.mode, d4);
    d4.ref = Lg(a3, b4, c8);
    d4.return = a3;
    return d4;
  }
  function l4(a3, b4, c8, d4) {
    if (b4 === null || b4.tag !== 4 || b4.stateNode.containerInfo !== c8.containerInfo || b4.stateNode.implementation !== c8.implementation)
      return b4 = Sg(c8, a3.mode, d4), b4.return = a3, b4;
    b4 = e2(b4, c8.children || []);
    b4.return = a3;
    return b4;
  }
  function m3(a3, b4, c8, d4, f4) {
    if (b4 === null || b4.tag !== 7)
      return b4 = Tg(c8, a3.mode, d4, f4), b4.return = a3, b4;
    b4 = e2(b4, c8);
    b4.return = a3;
    return b4;
  }
  function q4(a3, b4, c8) {
    if (typeof b4 === "string" && b4 !== "" || typeof b4 === "number")
      return b4 = Qg("" + b4, a3.mode, c8), b4.return = a3, b4;
    if (typeof b4 === "object" && b4 !== null) {
      switch (b4.$$typeof) {
        case va:
          return c8 = Rg(b4.type, b4.key, b4.props, null, a3.mode, c8), c8.ref = Lg(a3, null, b4), c8.return = a3, c8;
        case wa:
          return b4 = Sg(b4, a3.mode, c8), b4.return = a3, b4;
        case Ha:
          var d4 = b4._init;
          return q4(a3, d4(b4._payload), c8);
      }
      if (eb(b4) || Ka(b4))
        return b4 = Tg(b4, a3.mode, c8, null), b4.return = a3, b4;
      Mg(a3, b4);
    }
    return null;
  }
  function r4(a3, b4, c8, d4) {
    var e3 = b4 !== null ? b4.key : null;
    if (typeof c8 === "string" && c8 !== "" || typeof c8 === "number")
      return e3 !== null ? null : h3(a3, b4, "" + c8, d4);
    if (typeof c8 === "object" && c8 !== null) {
      switch (c8.$$typeof) {
        case va:
          return c8.key === e3 ? k3(a3, b4, c8, d4) : null;
        case wa:
          return c8.key === e3 ? l4(a3, b4, c8, d4) : null;
        case Ha:
          return e3 = c8._init, r4(a3, b4, e3(c8._payload), d4);
      }
      if (eb(c8) || Ka(c8))
        return e3 !== null ? null : m3(a3, b4, c8, d4, null);
      Mg(a3, c8);
    }
    return null;
  }
  function y4(a3, b4, c8, d4, e3) {
    if (typeof d4 === "string" && d4 !== "" || typeof d4 === "number")
      return a3 = a3.get(c8) || null, h3(b4, a3, "" + d4, e3);
    if (typeof d4 === "object" && d4 !== null) {
      switch (d4.$$typeof) {
        case va:
          return a3 = a3.get(d4.key === null ? c8 : d4.key) || null, k3(b4, a3, d4, e3);
        case wa:
          return a3 = a3.get(d4.key === null ? c8 : d4.key) || null, l4(b4, a3, d4, e3);
        case Ha:
          var f4 = d4._init;
          return y4(a3, b4, c8, f4(d4._payload), e3);
      }
      if (eb(d4) || Ka(d4))
        return a3 = a3.get(c8) || null, m3(b4, a3, d4, e3, null);
      Mg(b4, d4);
    }
    return null;
  }
  function n4(e3, g4, h4, k4) {
    for (var l5 = null, m4 = null, u3 = g4, w4 = g4 = 0, x4 = null; u3 !== null && w4 < h4.length; w4++) {
      u3.index > w4 ? (x4 = u3, u3 = null) : x4 = u3.sibling;
      var n5 = r4(e3, u3, h4[w4], k4);
      if (n5 === null) {
        u3 === null && (u3 = x4);
        break;
      }
      a2 && u3 && n5.alternate === null && b3(e3, u3);
      g4 = f3(n5, g4, w4);
      m4 === null ? l5 = n5 : m4.sibling = n5;
      m4 = n5;
      u3 = x4;
    }
    if (w4 === h4.length)
      return c7(e3, u3), I2 && tg(e3, w4), l5;
    if (u3 === null) {
      for (; w4 < h4.length; w4++)
        u3 = q4(e3, h4[w4], k4), u3 !== null && (g4 = f3(u3, g4, w4), m4 === null ? l5 = u3 : m4.sibling = u3, m4 = u3);
      I2 && tg(e3, w4);
      return l5;
    }
    for (u3 = d3(e3, u3); w4 < h4.length; w4++)
      x4 = y4(u3, e3, w4, h4[w4], k4), x4 !== null && (a2 && x4.alternate !== null && u3.delete(x4.key === null ? w4 : x4.key), g4 = f3(x4, g4, w4), m4 === null ? l5 = x4 : m4.sibling = x4, m4 = x4);
    a2 && u3.forEach(function(a3) {
      return b3(e3, a3);
    });
    I2 && tg(e3, w4);
    return l5;
  }
  function t4(e3, g4, h4, k4) {
    var l5 = Ka(h4);
    if (typeof l5 !== "function")
      throw Error(p2(150));
    h4 = l5.call(h4);
    if (h4 == null)
      throw Error(p2(151));
    for (var u3 = l5 = null, m4 = g4, w4 = g4 = 0, x4 = null, n5 = h4.next(); m4 !== null && !n5.done; w4++, n5 = h4.next()) {
      m4.index > w4 ? (x4 = m4, m4 = null) : x4 = m4.sibling;
      var t5 = r4(e3, m4, n5.value, k4);
      if (t5 === null) {
        m4 === null && (m4 = x4);
        break;
      }
      a2 && m4 && t5.alternate === null && b3(e3, m4);
      g4 = f3(t5, g4, w4);
      u3 === null ? l5 = t5 : u3.sibling = t5;
      u3 = t5;
      m4 = x4;
    }
    if (n5.done)
      return c7(e3, m4), I2 && tg(e3, w4), l5;
    if (m4 === null) {
      for (; !n5.done; w4++, n5 = h4.next())
        n5 = q4(e3, n5.value, k4), n5 !== null && (g4 = f3(n5, g4, w4), u3 === null ? l5 = n5 : u3.sibling = n5, u3 = n5);
      I2 && tg(e3, w4);
      return l5;
    }
    for (m4 = d3(e3, m4); !n5.done; w4++, n5 = h4.next())
      n5 = y4(m4, e3, w4, n5.value, k4), n5 !== null && (a2 && n5.alternate !== null && m4.delete(n5.key === null ? w4 : n5.key), g4 = f3(n5, g4, w4), u3 === null ? l5 = n5 : u3.sibling = n5, u3 = n5);
    a2 && m4.forEach(function(a3) {
      return b3(e3, a3);
    });
    I2 && tg(e3, w4);
    return l5;
  }
  function J4(a3, d4, f4, h4) {
    typeof f4 === "object" && f4 !== null && f4.type === ya && f4.key === null && (f4 = f4.props.children);
    if (typeof f4 === "object" && f4 !== null) {
      switch (f4.$$typeof) {
        case va:
          a: {
            for (var k4 = f4.key, l5 = d4; l5 !== null; ) {
              if (l5.key === k4) {
                k4 = f4.type;
                if (k4 === ya) {
                  if (l5.tag === 7) {
                    c7(a3, l5.sibling);
                    d4 = e2(l5, f4.props.children);
                    d4.return = a3;
                    a3 = d4;
                    break a;
                  }
                } else if (l5.elementType === k4 || typeof k4 === "object" && k4 !== null && k4.$$typeof === Ha && Ng(k4) === l5.type) {
                  c7(a3, l5.sibling);
                  d4 = e2(l5, f4.props);
                  d4.ref = Lg(a3, l5, f4);
                  d4.return = a3;
                  a3 = d4;
                  break a;
                }
                c7(a3, l5);
                break;
              } else
                b3(a3, l5);
              l5 = l5.sibling;
            }
            f4.type === ya ? (d4 = Tg(f4.props.children, a3.mode, h4, f4.key), d4.return = a3, a3 = d4) : (h4 = Rg(f4.type, f4.key, f4.props, null, a3.mode, h4), h4.ref = Lg(a3, d4, f4), h4.return = a3, a3 = h4);
          }
          return g3(a3);
        case wa:
          a: {
            for (l5 = f4.key; d4 !== null; ) {
              if (d4.key === l5)
                if (d4.tag === 4 && d4.stateNode.containerInfo === f4.containerInfo && d4.stateNode.implementation === f4.implementation) {
                  c7(a3, d4.sibling);
                  d4 = e2(d4, f4.children || []);
                  d4.return = a3;
                  a3 = d4;
                  break a;
                } else {
                  c7(a3, d4);
                  break;
                }
              else
                b3(a3, d4);
              d4 = d4.sibling;
            }
            d4 = Sg(f4, a3.mode, h4);
            d4.return = a3;
            a3 = d4;
          }
          return g3(a3);
        case Ha:
          return l5 = f4._init, J4(a3, d4, l5(f4._payload), h4);
      }
      if (eb(f4))
        return n4(a3, d4, f4, h4);
      if (Ka(f4))
        return t4(a3, d4, f4, h4);
      Mg(a3, f4);
    }
    return typeof f4 === "string" && f4 !== "" || typeof f4 === "number" ? (f4 = "" + f4, d4 !== null && d4.tag === 6 ? (c7(a3, d4.sibling), d4 = e2(d4, f4), d4.return = a3, a3 = d4) : (c7(a3, d4), d4 = Qg(f4, a3.mode, h4), d4.return = a3, a3 = d4), g3(a3)) : c7(a3, d4);
  }
  return J4;
}
var Ug = Og(true);
var Vg = Og(false);
var Wg = Uf(null);
var Xg = null;
var Yg = null;
var Zg = null;
function $g() {
  Zg = Yg = Xg = null;
}
function ah(a2) {
  var b3 = Wg.current;
  E2(Wg);
  a2._currentValue = b3;
}
function bh(a2, b3, c7) {
  for (; a2 !== null; ) {
    var d3 = a2.alternate;
    (a2.childLanes & b3) !== b3 ? (a2.childLanes |= b3, d3 !== null && (d3.childLanes |= b3)) : d3 !== null && (d3.childLanes & b3) !== b3 && (d3.childLanes |= b3);
    if (a2 === c7)
      break;
    a2 = a2.return;
  }
}
function ch(a2, b3) {
  Xg = a2;
  Zg = Yg = null;
  a2 = a2.dependencies;
  a2 !== null && a2.firstContext !== null && ((a2.lanes & b3) !== 0 && (dh = true), a2.firstContext = null);
}
function eh(a2) {
  var b3 = a2._currentValue;
  if (Zg !== a2)
    if (a2 = {context: a2, memoizedValue: b3, next: null}, Yg === null) {
      if (Xg === null)
        throw Error(p2(308));
      Yg = a2;
      Xg.dependencies = {lanes: 0, firstContext: a2};
    } else
      Yg = Yg.next = a2;
  return b3;
}
var fh = null;
function gh(a2) {
  fh === null ? fh = [a2] : fh.push(a2);
}
function hh(a2, b3, c7, d3) {
  var e2 = b3.interleaved;
  e2 === null ? (c7.next = c7, gh(b3)) : (c7.next = e2.next, e2.next = c7);
  b3.interleaved = c7;
  return ih(a2, d3);
}
function ih(a2, b3) {
  a2.lanes |= b3;
  var c7 = a2.alternate;
  c7 !== null && (c7.lanes |= b3);
  c7 = a2;
  for (a2 = a2.return; a2 !== null; )
    a2.childLanes |= b3, c7 = a2.alternate, c7 !== null && (c7.childLanes |= b3), c7 = a2, a2 = a2.return;
  return c7.tag === 3 ? c7.stateNode : null;
}
var jh = false;
function kh(a2) {
  a2.updateQueue = {baseState: a2.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: {pending: null, interleaved: null, lanes: 0}, effects: null};
}
function lh(a2, b3) {
  a2 = a2.updateQueue;
  b3.updateQueue === a2 && (b3.updateQueue = {baseState: a2.baseState, firstBaseUpdate: a2.firstBaseUpdate, lastBaseUpdate: a2.lastBaseUpdate, shared: a2.shared, effects: a2.effects});
}
function mh(a2, b3) {
  return {eventTime: a2, lane: b3, tag: 0, payload: null, callback: null, next: null};
}
function nh(a2, b3, c7) {
  var d3 = a2.updateQueue;
  if (d3 === null)
    return null;
  d3 = d3.shared;
  if ((K2 & 2) !== 0) {
    var e2 = d3.pending;
    e2 === null ? b3.next = b3 : (b3.next = e2.next, e2.next = b3);
    d3.pending = b3;
    return ih(a2, c7);
  }
  e2 = d3.interleaved;
  e2 === null ? (b3.next = b3, gh(d3)) : (b3.next = e2.next, e2.next = b3);
  d3.interleaved = b3;
  return ih(a2, c7);
}
function oh(a2, b3, c7) {
  b3 = b3.updateQueue;
  if (b3 !== null && (b3 = b3.shared, (c7 & 4194240) !== 0)) {
    var d3 = b3.lanes;
    d3 &= a2.pendingLanes;
    c7 |= d3;
    b3.lanes = c7;
    Cc(a2, c7);
  }
}
function ph(a2, b3) {
  var c7 = a2.updateQueue, d3 = a2.alternate;
  if (d3 !== null && (d3 = d3.updateQueue, c7 === d3)) {
    var e2 = null, f3 = null;
    c7 = c7.firstBaseUpdate;
    if (c7 !== null) {
      do {
        var g3 = {eventTime: c7.eventTime, lane: c7.lane, tag: c7.tag, payload: c7.payload, callback: c7.callback, next: null};
        f3 === null ? e2 = f3 = g3 : f3 = f3.next = g3;
        c7 = c7.next;
      } while (c7 !== null);
      f3 === null ? e2 = f3 = b3 : f3 = f3.next = b3;
    } else
      e2 = f3 = b3;
    c7 = {baseState: d3.baseState, firstBaseUpdate: e2, lastBaseUpdate: f3, shared: d3.shared, effects: d3.effects};
    a2.updateQueue = c7;
    return;
  }
  a2 = c7.lastBaseUpdate;
  a2 === null ? c7.firstBaseUpdate = b3 : a2.next = b3;
  c7.lastBaseUpdate = b3;
}
function qh(a2, b3, c7, d3) {
  var e2 = a2.updateQueue;
  jh = false;
  var f3 = e2.firstBaseUpdate, g3 = e2.lastBaseUpdate, h3 = e2.shared.pending;
  if (h3 !== null) {
    e2.shared.pending = null;
    var k3 = h3, l4 = k3.next;
    k3.next = null;
    g3 === null ? f3 = l4 : g3.next = l4;
    g3 = k3;
    var m3 = a2.alternate;
    m3 !== null && (m3 = m3.updateQueue, h3 = m3.lastBaseUpdate, h3 !== g3 && (h3 === null ? m3.firstBaseUpdate = l4 : h3.next = l4, m3.lastBaseUpdate = k3));
  }
  if (f3 !== null) {
    var q4 = e2.baseState;
    g3 = 0;
    m3 = l4 = k3 = null;
    h3 = f3;
    do {
      var r4 = h3.lane, y4 = h3.eventTime;
      if ((d3 & r4) === r4) {
        m3 !== null && (m3 = m3.next = {
          eventTime: y4,
          lane: 0,
          tag: h3.tag,
          payload: h3.payload,
          callback: h3.callback,
          next: null
        });
        a: {
          var n4 = a2, t4 = h3;
          r4 = b3;
          y4 = c7;
          switch (t4.tag) {
            case 1:
              n4 = t4.payload;
              if (typeof n4 === "function") {
                q4 = n4.call(y4, q4, r4);
                break a;
              }
              q4 = n4;
              break a;
            case 3:
              n4.flags = n4.flags & -65537 | 128;
            case 0:
              n4 = t4.payload;
              r4 = typeof n4 === "function" ? n4.call(y4, q4, r4) : n4;
              if (r4 === null || r4 === void 0)
                break a;
              q4 = A2({}, q4, r4);
              break a;
            case 2:
              jh = true;
          }
        }
        h3.callback !== null && h3.lane !== 0 && (a2.flags |= 64, r4 = e2.effects, r4 === null ? e2.effects = [h3] : r4.push(h3));
      } else
        y4 = {eventTime: y4, lane: r4, tag: h3.tag, payload: h3.payload, callback: h3.callback, next: null}, m3 === null ? (l4 = m3 = y4, k3 = q4) : m3 = m3.next = y4, g3 |= r4;
      h3 = h3.next;
      if (h3 === null)
        if (h3 = e2.shared.pending, h3 === null)
          break;
        else
          r4 = h3, h3 = r4.next, r4.next = null, e2.lastBaseUpdate = r4, e2.shared.pending = null;
    } while (1);
    m3 === null && (k3 = q4);
    e2.baseState = k3;
    e2.firstBaseUpdate = l4;
    e2.lastBaseUpdate = m3;
    b3 = e2.shared.interleaved;
    if (b3 !== null) {
      e2 = b3;
      do
        g3 |= e2.lane, e2 = e2.next;
      while (e2 !== b3);
    } else
      f3 === null && (e2.shared.lanes = 0);
    rh |= g3;
    a2.lanes = g3;
    a2.memoizedState = q4;
  }
}
function sh(a2, b3, c7) {
  a2 = b3.effects;
  b3.effects = null;
  if (a2 !== null)
    for (b3 = 0; b3 < a2.length; b3++) {
      var d3 = a2[b3], e2 = d3.callback;
      if (e2 !== null) {
        d3.callback = null;
        d3 = c7;
        if (typeof e2 !== "function")
          throw Error(p2(191, e2));
        e2.call(d3);
      }
    }
}
var th = {};
var uh = Uf(th);
var vh = Uf(th);
var wh = Uf(th);
function xh(a2) {
  if (a2 === th)
    throw Error(p2(174));
  return a2;
}
function yh(a2, b3) {
  G2(wh, b3);
  G2(vh, a2);
  G2(uh, th);
  a2 = b3.nodeType;
  switch (a2) {
    case 9:
    case 11:
      b3 = (b3 = b3.documentElement) ? b3.namespaceURI : lb(null, "");
      break;
    default:
      a2 = a2 === 8 ? b3.parentNode : b3, b3 = a2.namespaceURI || null, a2 = a2.tagName, b3 = lb(b3, a2);
  }
  E2(uh);
  G2(uh, b3);
}
function zh() {
  E2(uh);
  E2(vh);
  E2(wh);
}
function Ah(a2) {
  xh(wh.current);
  var b3 = xh(uh.current);
  var c7 = lb(b3, a2.type);
  b3 !== c7 && (G2(vh, a2), G2(uh, c7));
}
function Bh(a2) {
  vh.current === a2 && (E2(uh), E2(vh));
}
var L2 = Uf(0);
function Ch(a2) {
  for (var b3 = a2; b3 !== null; ) {
    if (b3.tag === 13) {
      var c7 = b3.memoizedState;
      if (c7 !== null && (c7 = c7.dehydrated, c7 === null || c7.data === "$?" || c7.data === "$!"))
        return b3;
    } else if (b3.tag === 19 && b3.memoizedProps.revealOrder !== void 0) {
      if ((b3.flags & 128) !== 0)
        return b3;
    } else if (b3.child !== null) {
      b3.child.return = b3;
      b3 = b3.child;
      continue;
    }
    if (b3 === a2)
      break;
    for (; b3.sibling === null; ) {
      if (b3.return === null || b3.return === a2)
        return null;
      b3 = b3.return;
    }
    b3.sibling.return = b3.return;
    b3 = b3.sibling;
  }
  return null;
}
var Dh = [];
function Eh() {
  for (var a2 = 0; a2 < Dh.length; a2++)
    Dh[a2]._workInProgressVersionPrimary = null;
  Dh.length = 0;
}
var Fh = ua.ReactCurrentDispatcher;
var Gh = ua.ReactCurrentBatchConfig;
var Hh = 0;
var M2 = null;
var N2 = null;
var O2 = null;
var Ih = false;
var Jh = false;
var Kh = 0;
var Lh = 0;
function P2() {
  throw Error(p2(321));
}
function Mh(a2, b3) {
  if (b3 === null)
    return false;
  for (var c7 = 0; c7 < b3.length && c7 < a2.length; c7++)
    if (!He(a2[c7], b3[c7]))
      return false;
  return true;
}
function Nh(a2, b3, c7, d3, e2, f3) {
  Hh = f3;
  M2 = b3;
  b3.memoizedState = null;
  b3.updateQueue = null;
  b3.lanes = 0;
  Fh.current = a2 === null || a2.memoizedState === null ? Oh : Ph;
  a2 = c7(d3, e2);
  if (Jh) {
    f3 = 0;
    do {
      Jh = false;
      Kh = 0;
      if (25 <= f3)
        throw Error(p2(301));
      f3 += 1;
      O2 = N2 = null;
      b3.updateQueue = null;
      Fh.current = Qh;
      a2 = c7(d3, e2);
    } while (Jh);
  }
  Fh.current = Rh;
  b3 = N2 !== null && N2.next !== null;
  Hh = 0;
  O2 = N2 = M2 = null;
  Ih = false;
  if (b3)
    throw Error(p2(300));
  return a2;
}
function Sh() {
  var a2 = Kh !== 0;
  Kh = 0;
  return a2;
}
function Th() {
  var a2 = {memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null};
  O2 === null ? M2.memoizedState = O2 = a2 : O2 = O2.next = a2;
  return O2;
}
function Uh() {
  if (N2 === null) {
    var a2 = M2.alternate;
    a2 = a2 !== null ? a2.memoizedState : null;
  } else
    a2 = N2.next;
  var b3 = O2 === null ? M2.memoizedState : O2.next;
  if (b3 !== null)
    O2 = b3, N2 = a2;
  else {
    if (a2 === null)
      throw Error(p2(310));
    N2 = a2;
    a2 = {memoizedState: N2.memoizedState, baseState: N2.baseState, baseQueue: N2.baseQueue, queue: N2.queue, next: null};
    O2 === null ? M2.memoizedState = O2 = a2 : O2 = O2.next = a2;
  }
  return O2;
}
function Vh(a2, b3) {
  return typeof b3 === "function" ? b3(a2) : b3;
}
function Wh(a2) {
  var b3 = Uh(), c7 = b3.queue;
  if (c7 === null)
    throw Error(p2(311));
  c7.lastRenderedReducer = a2;
  var d3 = N2, e2 = d3.baseQueue, f3 = c7.pending;
  if (f3 !== null) {
    if (e2 !== null) {
      var g3 = e2.next;
      e2.next = f3.next;
      f3.next = g3;
    }
    d3.baseQueue = e2 = f3;
    c7.pending = null;
  }
  if (e2 !== null) {
    f3 = e2.next;
    d3 = d3.baseState;
    var h3 = g3 = null, k3 = null, l4 = f3;
    do {
      var m3 = l4.lane;
      if ((Hh & m3) === m3)
        k3 !== null && (k3 = k3.next = {lane: 0, action: l4.action, hasEagerState: l4.hasEagerState, eagerState: l4.eagerState, next: null}), d3 = l4.hasEagerState ? l4.eagerState : a2(d3, l4.action);
      else {
        var q4 = {
          lane: m3,
          action: l4.action,
          hasEagerState: l4.hasEagerState,
          eagerState: l4.eagerState,
          next: null
        };
        k3 === null ? (h3 = k3 = q4, g3 = d3) : k3 = k3.next = q4;
        M2.lanes |= m3;
        rh |= m3;
      }
      l4 = l4.next;
    } while (l4 !== null && l4 !== f3);
    k3 === null ? g3 = d3 : k3.next = h3;
    He(d3, b3.memoizedState) || (dh = true);
    b3.memoizedState = d3;
    b3.baseState = g3;
    b3.baseQueue = k3;
    c7.lastRenderedState = d3;
  }
  a2 = c7.interleaved;
  if (a2 !== null) {
    e2 = a2;
    do
      f3 = e2.lane, M2.lanes |= f3, rh |= f3, e2 = e2.next;
    while (e2 !== a2);
  } else
    e2 === null && (c7.lanes = 0);
  return [b3.memoizedState, c7.dispatch];
}
function Xh(a2) {
  var b3 = Uh(), c7 = b3.queue;
  if (c7 === null)
    throw Error(p2(311));
  c7.lastRenderedReducer = a2;
  var d3 = c7.dispatch, e2 = c7.pending, f3 = b3.memoizedState;
  if (e2 !== null) {
    c7.pending = null;
    var g3 = e2 = e2.next;
    do
      f3 = a2(f3, g3.action), g3 = g3.next;
    while (g3 !== e2);
    He(f3, b3.memoizedState) || (dh = true);
    b3.memoizedState = f3;
    b3.baseQueue === null && (b3.baseState = f3);
    c7.lastRenderedState = f3;
  }
  return [f3, d3];
}
function Yh() {
}
function Zh(a2, b3) {
  var c7 = M2, d3 = Uh(), e2 = b3(), f3 = !He(d3.memoizedState, e2);
  f3 && (d3.memoizedState = e2, dh = true);
  d3 = d3.queue;
  $h(ai.bind(null, c7, d3, a2), [a2]);
  if (d3.getSnapshot !== b3 || f3 || O2 !== null && O2.memoizedState.tag & 1) {
    c7.flags |= 2048;
    bi(9, ci.bind(null, c7, d3, e2, b3), void 0, null);
    if (Q2 === null)
      throw Error(p2(349));
    (Hh & 30) !== 0 || di(c7, b3, e2);
  }
  return e2;
}
function di(a2, b3, c7) {
  a2.flags |= 16384;
  a2 = {getSnapshot: b3, value: c7};
  b3 = M2.updateQueue;
  b3 === null ? (b3 = {lastEffect: null, stores: null}, M2.updateQueue = b3, b3.stores = [a2]) : (c7 = b3.stores, c7 === null ? b3.stores = [a2] : c7.push(a2));
}
function ci(a2, b3, c7, d3) {
  b3.value = c7;
  b3.getSnapshot = d3;
  ei(b3) && fi(a2);
}
function ai(a2, b3, c7) {
  return c7(function() {
    ei(b3) && fi(a2);
  });
}
function ei(a2) {
  var b3 = a2.getSnapshot;
  a2 = a2.value;
  try {
    var c7 = b3();
    return !He(a2, c7);
  } catch (d3) {
    return true;
  }
}
function fi(a2) {
  var b3 = ih(a2, 1);
  b3 !== null && gi(b3, a2, 1, -1);
}
function hi(a2) {
  var b3 = Th();
  typeof a2 === "function" && (a2 = a2());
  b3.memoizedState = b3.baseState = a2;
  a2 = {pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Vh, lastRenderedState: a2};
  b3.queue = a2;
  a2 = a2.dispatch = ii.bind(null, M2, a2);
  return [b3.memoizedState, a2];
}
function bi(a2, b3, c7, d3) {
  a2 = {tag: a2, create: b3, destroy: c7, deps: d3, next: null};
  b3 = M2.updateQueue;
  b3 === null ? (b3 = {lastEffect: null, stores: null}, M2.updateQueue = b3, b3.lastEffect = a2.next = a2) : (c7 = b3.lastEffect, c7 === null ? b3.lastEffect = a2.next = a2 : (d3 = c7.next, c7.next = a2, a2.next = d3, b3.lastEffect = a2));
  return a2;
}
function ji() {
  return Uh().memoizedState;
}
function ki(a2, b3, c7, d3) {
  var e2 = Th();
  M2.flags |= a2;
  e2.memoizedState = bi(1 | b3, c7, void 0, d3 === void 0 ? null : d3);
}
function li(a2, b3, c7, d3) {
  var e2 = Uh();
  d3 = d3 === void 0 ? null : d3;
  var f3 = void 0;
  if (N2 !== null) {
    var g3 = N2.memoizedState;
    f3 = g3.destroy;
    if (d3 !== null && Mh(d3, g3.deps)) {
      e2.memoizedState = bi(b3, c7, f3, d3);
      return;
    }
  }
  M2.flags |= a2;
  e2.memoizedState = bi(1 | b3, c7, f3, d3);
}
function mi(a2, b3) {
  return ki(8390656, 8, a2, b3);
}
function $h(a2, b3) {
  return li(2048, 8, a2, b3);
}
function ni(a2, b3) {
  return li(4, 2, a2, b3);
}
function oi(a2, b3) {
  return li(4, 4, a2, b3);
}
function pi(a2, b3) {
  if (typeof b3 === "function")
    return a2 = a2(), b3(a2), function() {
      b3(null);
    };
  if (b3 !== null && b3 !== void 0)
    return a2 = a2(), b3.current = a2, function() {
      b3.current = null;
    };
}
function qi(a2, b3, c7) {
  c7 = c7 !== null && c7 !== void 0 ? c7.concat([a2]) : null;
  return li(4, 4, pi.bind(null, b3, a2), c7);
}
function ri() {
}
function si(a2, b3) {
  var c7 = Uh();
  b3 = b3 === void 0 ? null : b3;
  var d3 = c7.memoizedState;
  if (d3 !== null && b3 !== null && Mh(b3, d3[1]))
    return d3[0];
  c7.memoizedState = [a2, b3];
  return a2;
}
function ti(a2, b3) {
  var c7 = Uh();
  b3 = b3 === void 0 ? null : b3;
  var d3 = c7.memoizedState;
  if (d3 !== null && b3 !== null && Mh(b3, d3[1]))
    return d3[0];
  a2 = a2();
  c7.memoizedState = [a2, b3];
  return a2;
}
function ui(a2, b3, c7) {
  if ((Hh & 21) === 0)
    return a2.baseState && (a2.baseState = false, dh = true), a2.memoizedState = c7;
  He(c7, b3) || (c7 = yc(), M2.lanes |= c7, rh |= c7, a2.baseState = true);
  return b3;
}
function vi(a2, b3) {
  var c7 = C2;
  C2 = c7 !== 0 && 4 > c7 ? c7 : 4;
  a2(true);
  var d3 = Gh.transition;
  Gh.transition = {};
  try {
    a2(false), b3();
  } finally {
    C2 = c7, Gh.transition = d3;
  }
}
function wi() {
  return Uh().memoizedState;
}
function xi(a2, b3, c7) {
  var d3 = yi(a2);
  c7 = {lane: d3, action: c7, hasEagerState: false, eagerState: null, next: null};
  if (zi(a2))
    Ai(b3, c7);
  else if (c7 = hh(a2, b3, c7, d3), c7 !== null) {
    var e2 = R2();
    gi(c7, a2, d3, e2);
    Bi(c7, b3, d3);
  }
}
function ii(a2, b3, c7) {
  var d3 = yi(a2), e2 = {lane: d3, action: c7, hasEagerState: false, eagerState: null, next: null};
  if (zi(a2))
    Ai(b3, e2);
  else {
    var f3 = a2.alternate;
    if (a2.lanes === 0 && (f3 === null || f3.lanes === 0) && (f3 = b3.lastRenderedReducer, f3 !== null))
      try {
        var g3 = b3.lastRenderedState, h3 = f3(g3, c7);
        e2.hasEagerState = true;
        e2.eagerState = h3;
        if (He(h3, g3)) {
          var k3 = b3.interleaved;
          k3 === null ? (e2.next = e2, gh(b3)) : (e2.next = k3.next, k3.next = e2);
          b3.interleaved = e2;
          return;
        }
      } catch (l4) {
      } finally {
      }
    c7 = hh(a2, b3, e2, d3);
    c7 !== null && (e2 = R2(), gi(c7, a2, d3, e2), Bi(c7, b3, d3));
  }
}
function zi(a2) {
  var b3 = a2.alternate;
  return a2 === M2 || b3 !== null && b3 === M2;
}
function Ai(a2, b3) {
  Jh = Ih = true;
  var c7 = a2.pending;
  c7 === null ? b3.next = b3 : (b3.next = c7.next, c7.next = b3);
  a2.pending = b3;
}
function Bi(a2, b3, c7) {
  if ((c7 & 4194240) !== 0) {
    var d3 = b3.lanes;
    d3 &= a2.pendingLanes;
    c7 |= d3;
    b3.lanes = c7;
    Cc(a2, c7);
  }
}
var Rh = {readContext: eh, useCallback: P2, useContext: P2, useEffect: P2, useImperativeHandle: P2, useInsertionEffect: P2, useLayoutEffect: P2, useMemo: P2, useReducer: P2, useRef: P2, useState: P2, useDebugValue: P2, useDeferredValue: P2, useTransition: P2, useMutableSource: P2, useSyncExternalStore: P2, useId: P2, unstable_isNewReconciler: false};
var Oh = {readContext: eh, useCallback: function(a2, b3) {
  Th().memoizedState = [a2, b3 === void 0 ? null : b3];
  return a2;
}, useContext: eh, useEffect: mi, useImperativeHandle: function(a2, b3, c7) {
  c7 = c7 !== null && c7 !== void 0 ? c7.concat([a2]) : null;
  return ki(4194308, 4, pi.bind(null, b3, a2), c7);
}, useLayoutEffect: function(a2, b3) {
  return ki(4194308, 4, a2, b3);
}, useInsertionEffect: function(a2, b3) {
  return ki(4, 2, a2, b3);
}, useMemo: function(a2, b3) {
  var c7 = Th();
  b3 = b3 === void 0 ? null : b3;
  a2 = a2();
  c7.memoizedState = [a2, b3];
  return a2;
}, useReducer: function(a2, b3, c7) {
  var d3 = Th();
  b3 = c7 !== void 0 ? c7(b3) : b3;
  d3.memoizedState = d3.baseState = b3;
  a2 = {pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a2, lastRenderedState: b3};
  d3.queue = a2;
  a2 = a2.dispatch = xi.bind(null, M2, a2);
  return [d3.memoizedState, a2];
}, useRef: function(a2) {
  var b3 = Th();
  a2 = {current: a2};
  return b3.memoizedState = a2;
}, useState: hi, useDebugValue: ri, useDeferredValue: function(a2) {
  return Th().memoizedState = a2;
}, useTransition: function() {
  var a2 = hi(false), b3 = a2[0];
  a2 = vi.bind(null, a2[1]);
  Th().memoizedState = a2;
  return [b3, a2];
}, useMutableSource: function() {
}, useSyncExternalStore: function(a2, b3, c7) {
  var d3 = M2, e2 = Th();
  if (I2) {
    if (c7 === void 0)
      throw Error(p2(407));
    c7 = c7();
  } else {
    c7 = b3();
    if (Q2 === null)
      throw Error(p2(349));
    (Hh & 30) !== 0 || di(d3, b3, c7);
  }
  e2.memoizedState = c7;
  var f3 = {value: c7, getSnapshot: b3};
  e2.queue = f3;
  mi(ai.bind(null, d3, f3, a2), [a2]);
  d3.flags |= 2048;
  bi(9, ci.bind(null, d3, f3, c7, b3), void 0, null);
  return c7;
}, useId: function() {
  var a2 = Th(), b3 = Q2.identifierPrefix;
  if (I2) {
    var c7 = sg;
    var d3 = rg;
    c7 = (d3 & ~(1 << 32 - oc(d3) - 1)).toString(32) + c7;
    b3 = ":" + b3 + "R" + c7;
    c7 = Kh++;
    0 < c7 && (b3 += "H" + c7.toString(32));
    b3 += ":";
  } else
    c7 = Lh++, b3 = ":" + b3 + "r" + c7.toString(32) + ":";
  return a2.memoizedState = b3;
}, unstable_isNewReconciler: false};
var Ph = {
  readContext: eh,
  useCallback: si,
  useContext: eh,
  useEffect: $h,
  useImperativeHandle: qi,
  useInsertionEffect: ni,
  useLayoutEffect: oi,
  useMemo: ti,
  useReducer: Wh,
  useRef: ji,
  useState: function() {
    return Wh(Vh);
  },
  useDebugValue: ri,
  useDeferredValue: function(a2) {
    var b3 = Uh();
    return ui(b3, N2.memoizedState, a2);
  },
  useTransition: function() {
    var a2 = Wh(Vh)[0], b3 = Uh().memoizedState;
    return [a2, b3];
  },
  useMutableSource: Yh,
  useSyncExternalStore: Zh,
  useId: wi,
  unstable_isNewReconciler: false
};
var Qh = {readContext: eh, useCallback: si, useContext: eh, useEffect: $h, useImperativeHandle: qi, useInsertionEffect: ni, useLayoutEffect: oi, useMemo: ti, useReducer: Xh, useRef: ji, useState: function() {
  return Xh(Vh);
}, useDebugValue: ri, useDeferredValue: function(a2) {
  var b3 = Uh();
  return N2 === null ? b3.memoizedState = a2 : ui(b3, N2.memoizedState, a2);
}, useTransition: function() {
  var a2 = Xh(Vh)[0], b3 = Uh().memoizedState;
  return [a2, b3];
}, useMutableSource: Yh, useSyncExternalStore: Zh, useId: wi, unstable_isNewReconciler: false};
function Ci(a2, b3) {
  if (a2 && a2.defaultProps) {
    b3 = A2({}, b3);
    a2 = a2.defaultProps;
    for (var c7 in a2)
      b3[c7] === void 0 && (b3[c7] = a2[c7]);
    return b3;
  }
  return b3;
}
function Di(a2, b3, c7, d3) {
  b3 = a2.memoizedState;
  c7 = c7(d3, b3);
  c7 = c7 === null || c7 === void 0 ? b3 : A2({}, b3, c7);
  a2.memoizedState = c7;
  a2.lanes === 0 && (a2.updateQueue.baseState = c7);
}
var Ei = {isMounted: function(a2) {
  return (a2 = a2._reactInternals) ? Vb(a2) === a2 : false;
}, enqueueSetState: function(a2, b3, c7) {
  a2 = a2._reactInternals;
  var d3 = R2(), e2 = yi(a2), f3 = mh(d3, e2);
  f3.payload = b3;
  c7 !== void 0 && c7 !== null && (f3.callback = c7);
  b3 = nh(a2, f3, e2);
  b3 !== null && (gi(b3, a2, e2, d3), oh(b3, a2, e2));
}, enqueueReplaceState: function(a2, b3, c7) {
  a2 = a2._reactInternals;
  var d3 = R2(), e2 = yi(a2), f3 = mh(d3, e2);
  f3.tag = 1;
  f3.payload = b3;
  c7 !== void 0 && c7 !== null && (f3.callback = c7);
  b3 = nh(a2, f3, e2);
  b3 !== null && (gi(b3, a2, e2, d3), oh(b3, a2, e2));
}, enqueueForceUpdate: function(a2, b3) {
  a2 = a2._reactInternals;
  var c7 = R2(), d3 = yi(a2), e2 = mh(c7, d3);
  e2.tag = 2;
  b3 !== void 0 && b3 !== null && (e2.callback = b3);
  b3 = nh(a2, e2, d3);
  b3 !== null && (gi(b3, a2, d3, c7), oh(b3, a2, d3));
}};
function Fi(a2, b3, c7, d3, e2, f3, g3) {
  a2 = a2.stateNode;
  return typeof a2.shouldComponentUpdate === "function" ? a2.shouldComponentUpdate(d3, f3, g3) : b3.prototype && b3.prototype.isPureReactComponent ? !Ie(c7, d3) || !Ie(e2, f3) : true;
}
function Gi(a2, b3, c7) {
  var d3 = false, e2 = Vf;
  var f3 = b3.contextType;
  typeof f3 === "object" && f3 !== null ? f3 = eh(f3) : (e2 = Zf(b3) ? Xf : H2.current, d3 = b3.contextTypes, f3 = (d3 = d3 !== null && d3 !== void 0) ? Yf(a2, e2) : Vf);
  b3 = new b3(c7, f3);
  a2.memoizedState = b3.state !== null && b3.state !== void 0 ? b3.state : null;
  b3.updater = Ei;
  a2.stateNode = b3;
  b3._reactInternals = a2;
  d3 && (a2 = a2.stateNode, a2.__reactInternalMemoizedUnmaskedChildContext = e2, a2.__reactInternalMemoizedMaskedChildContext = f3);
  return b3;
}
function Hi(a2, b3, c7, d3) {
  a2 = b3.state;
  typeof b3.componentWillReceiveProps === "function" && b3.componentWillReceiveProps(c7, d3);
  typeof b3.UNSAFE_componentWillReceiveProps === "function" && b3.UNSAFE_componentWillReceiveProps(c7, d3);
  b3.state !== a2 && Ei.enqueueReplaceState(b3, b3.state, null);
}
function Ii(a2, b3, c7, d3) {
  var e2 = a2.stateNode;
  e2.props = c7;
  e2.state = a2.memoizedState;
  e2.refs = {};
  kh(a2);
  var f3 = b3.contextType;
  typeof f3 === "object" && f3 !== null ? e2.context = eh(f3) : (f3 = Zf(b3) ? Xf : H2.current, e2.context = Yf(a2, f3));
  e2.state = a2.memoizedState;
  f3 = b3.getDerivedStateFromProps;
  typeof f3 === "function" && (Di(a2, b3, f3, c7), e2.state = a2.memoizedState);
  typeof b3.getDerivedStateFromProps === "function" || typeof e2.getSnapshotBeforeUpdate === "function" || typeof e2.UNSAFE_componentWillMount !== "function" && typeof e2.componentWillMount !== "function" || (b3 = e2.state, typeof e2.componentWillMount === "function" && e2.componentWillMount(), typeof e2.UNSAFE_componentWillMount === "function" && e2.UNSAFE_componentWillMount(), b3 !== e2.state && Ei.enqueueReplaceState(e2, e2.state, null), qh(a2, c7, e2, d3), e2.state = a2.memoizedState);
  typeof e2.componentDidMount === "function" && (a2.flags |= 4194308);
}
function Ji(a2, b3) {
  try {
    var c7 = "", d3 = b3;
    do
      c7 += Pa(d3), d3 = d3.return;
    while (d3);
    var e2 = c7;
  } catch (f3) {
    e2 = "\nError generating stack: " + f3.message + "\n" + f3.stack;
  }
  return {value: a2, source: b3, stack: e2, digest: null};
}
function Ki(a2, b3, c7) {
  return {value: a2, source: null, stack: c7 != null ? c7 : null, digest: b3 != null ? b3 : null};
}
function Li(a2, b3) {
  try {
    console.error(b3.value);
  } catch (c7) {
    setTimeout(function() {
      throw c7;
    });
  }
}
var Mi = typeof WeakMap === "function" ? WeakMap : Map;
function Ni(a2, b3, c7) {
  c7 = mh(-1, c7);
  c7.tag = 3;
  c7.payload = {element: null};
  var d3 = b3.value;
  c7.callback = function() {
    Oi || (Oi = true, Pi = d3);
    Li(a2, b3);
  };
  return c7;
}
function Qi(a2, b3, c7) {
  c7 = mh(-1, c7);
  c7.tag = 3;
  var d3 = a2.type.getDerivedStateFromError;
  if (typeof d3 === "function") {
    var e2 = b3.value;
    c7.payload = function() {
      return d3(e2);
    };
    c7.callback = function() {
      Li(a2, b3);
    };
  }
  var f3 = a2.stateNode;
  f3 !== null && typeof f3.componentDidCatch === "function" && (c7.callback = function() {
    Li(a2, b3);
    typeof d3 !== "function" && (Ri === null ? Ri = new Set([this]) : Ri.add(this));
    var c8 = b3.stack;
    this.componentDidCatch(b3.value, {componentStack: c8 !== null ? c8 : ""});
  });
  return c7;
}
function Si(a2, b3, c7) {
  var d3 = a2.pingCache;
  if (d3 === null) {
    d3 = a2.pingCache = new Mi();
    var e2 = new Set();
    d3.set(b3, e2);
  } else
    e2 = d3.get(b3), e2 === void 0 && (e2 = new Set(), d3.set(b3, e2));
  e2.has(c7) || (e2.add(c7), a2 = Ti.bind(null, a2, b3, c7), b3.then(a2, a2));
}
function Ui(a2) {
  do {
    var b3;
    if (b3 = a2.tag === 13)
      b3 = a2.memoizedState, b3 = b3 !== null ? b3.dehydrated !== null ? true : false : true;
    if (b3)
      return a2;
    a2 = a2.return;
  } while (a2 !== null);
  return null;
}
function Vi(a2, b3, c7, d3, e2) {
  if ((a2.mode & 1) === 0)
    return a2 === b3 ? a2.flags |= 65536 : (a2.flags |= 128, c7.flags |= 131072, c7.flags &= -52805, c7.tag === 1 && (c7.alternate === null ? c7.tag = 17 : (b3 = mh(-1, 1), b3.tag = 2, nh(c7, b3, 1))), c7.lanes |= 1), a2;
  a2.flags |= 65536;
  a2.lanes = e2;
  return a2;
}
var Wi = ua.ReactCurrentOwner;
var dh = false;
function Xi(a2, b3, c7, d3) {
  b3.child = a2 === null ? Vg(b3, null, c7, d3) : Ug(b3, a2.child, c7, d3);
}
function Yi(a2, b3, c7, d3, e2) {
  c7 = c7.render;
  var f3 = b3.ref;
  ch(b3, e2);
  d3 = Nh(a2, b3, c7, d3, f3, e2);
  c7 = Sh();
  if (a2 !== null && !dh)
    return b3.updateQueue = a2.updateQueue, b3.flags &= -2053, a2.lanes &= ~e2, Zi(a2, b3, e2);
  I2 && c7 && vg(b3);
  b3.flags |= 1;
  Xi(a2, b3, d3, e2);
  return b3.child;
}
function $i(a2, b3, c7, d3, e2) {
  if (a2 === null) {
    var f3 = c7.type;
    if (typeof f3 === "function" && !aj(f3) && f3.defaultProps === void 0 && c7.compare === null && c7.defaultProps === void 0)
      return b3.tag = 15, b3.type = f3, bj(a2, b3, f3, d3, e2);
    a2 = Rg(c7.type, null, d3, b3, b3.mode, e2);
    a2.ref = b3.ref;
    a2.return = b3;
    return b3.child = a2;
  }
  f3 = a2.child;
  if ((a2.lanes & e2) === 0) {
    var g3 = f3.memoizedProps;
    c7 = c7.compare;
    c7 = c7 !== null ? c7 : Ie;
    if (c7(g3, d3) && a2.ref === b3.ref)
      return Zi(a2, b3, e2);
  }
  b3.flags |= 1;
  a2 = Pg(f3, d3);
  a2.ref = b3.ref;
  a2.return = b3;
  return b3.child = a2;
}
function bj(a2, b3, c7, d3, e2) {
  if (a2 !== null) {
    var f3 = a2.memoizedProps;
    if (Ie(f3, d3) && a2.ref === b3.ref)
      if (dh = false, b3.pendingProps = d3 = f3, (a2.lanes & e2) !== 0)
        (a2.flags & 131072) !== 0 && (dh = true);
      else
        return b3.lanes = a2.lanes, Zi(a2, b3, e2);
  }
  return cj(a2, b3, c7, d3, e2);
}
function dj(a2, b3, c7) {
  var d3 = b3.pendingProps, e2 = d3.children, f3 = a2 !== null ? a2.memoizedState : null;
  if (d3.mode === "hidden")
    if ((b3.mode & 1) === 0)
      b3.memoizedState = {baseLanes: 0, cachePool: null, transitions: null}, G2(ej, fj), fj |= c7;
    else {
      if ((c7 & 1073741824) === 0)
        return a2 = f3 !== null ? f3.baseLanes | c7 : c7, b3.lanes = b3.childLanes = 1073741824, b3.memoizedState = {baseLanes: a2, cachePool: null, transitions: null}, b3.updateQueue = null, G2(ej, fj), fj |= a2, null;
      b3.memoizedState = {baseLanes: 0, cachePool: null, transitions: null};
      d3 = f3 !== null ? f3.baseLanes : c7;
      G2(ej, fj);
      fj |= d3;
    }
  else
    f3 !== null ? (d3 = f3.baseLanes | c7, b3.memoizedState = null) : d3 = c7, G2(ej, fj), fj |= d3;
  Xi(a2, b3, e2, c7);
  return b3.child;
}
function gj(a2, b3) {
  var c7 = b3.ref;
  if (a2 === null && c7 !== null || a2 !== null && a2.ref !== c7)
    b3.flags |= 512, b3.flags |= 2097152;
}
function cj(a2, b3, c7, d3, e2) {
  var f3 = Zf(c7) ? Xf : H2.current;
  f3 = Yf(b3, f3);
  ch(b3, e2);
  c7 = Nh(a2, b3, c7, d3, f3, e2);
  d3 = Sh();
  if (a2 !== null && !dh)
    return b3.updateQueue = a2.updateQueue, b3.flags &= -2053, a2.lanes &= ~e2, Zi(a2, b3, e2);
  I2 && d3 && vg(b3);
  b3.flags |= 1;
  Xi(a2, b3, c7, e2);
  return b3.child;
}
function hj(a2, b3, c7, d3, e2) {
  if (Zf(c7)) {
    var f3 = true;
    cg(b3);
  } else
    f3 = false;
  ch(b3, e2);
  if (b3.stateNode === null)
    ij(a2, b3), Gi(b3, c7, d3), Ii(b3, c7, d3, e2), d3 = true;
  else if (a2 === null) {
    var g3 = b3.stateNode, h3 = b3.memoizedProps;
    g3.props = h3;
    var k3 = g3.context, l4 = c7.contextType;
    typeof l4 === "object" && l4 !== null ? l4 = eh(l4) : (l4 = Zf(c7) ? Xf : H2.current, l4 = Yf(b3, l4));
    var m3 = c7.getDerivedStateFromProps, q4 = typeof m3 === "function" || typeof g3.getSnapshotBeforeUpdate === "function";
    q4 || typeof g3.UNSAFE_componentWillReceiveProps !== "function" && typeof g3.componentWillReceiveProps !== "function" || (h3 !== d3 || k3 !== l4) && Hi(b3, g3, d3, l4);
    jh = false;
    var r4 = b3.memoizedState;
    g3.state = r4;
    qh(b3, d3, g3, e2);
    k3 = b3.memoizedState;
    h3 !== d3 || r4 !== k3 || Wf.current || jh ? (typeof m3 === "function" && (Di(b3, c7, m3, d3), k3 = b3.memoizedState), (h3 = jh || Fi(b3, c7, h3, d3, r4, k3, l4)) ? (q4 || typeof g3.UNSAFE_componentWillMount !== "function" && typeof g3.componentWillMount !== "function" || (typeof g3.componentWillMount === "function" && g3.componentWillMount(), typeof g3.UNSAFE_componentWillMount === "function" && g3.UNSAFE_componentWillMount()), typeof g3.componentDidMount === "function" && (b3.flags |= 4194308)) : (typeof g3.componentDidMount === "function" && (b3.flags |= 4194308), b3.memoizedProps = d3, b3.memoizedState = k3), g3.props = d3, g3.state = k3, g3.context = l4, d3 = h3) : (typeof g3.componentDidMount === "function" && (b3.flags |= 4194308), d3 = false);
  } else {
    g3 = b3.stateNode;
    lh(a2, b3);
    h3 = b3.memoizedProps;
    l4 = b3.type === b3.elementType ? h3 : Ci(b3.type, h3);
    g3.props = l4;
    q4 = b3.pendingProps;
    r4 = g3.context;
    k3 = c7.contextType;
    typeof k3 === "object" && k3 !== null ? k3 = eh(k3) : (k3 = Zf(c7) ? Xf : H2.current, k3 = Yf(b3, k3));
    var y4 = c7.getDerivedStateFromProps;
    (m3 = typeof y4 === "function" || typeof g3.getSnapshotBeforeUpdate === "function") || typeof g3.UNSAFE_componentWillReceiveProps !== "function" && typeof g3.componentWillReceiveProps !== "function" || (h3 !== q4 || r4 !== k3) && Hi(b3, g3, d3, k3);
    jh = false;
    r4 = b3.memoizedState;
    g3.state = r4;
    qh(b3, d3, g3, e2);
    var n4 = b3.memoizedState;
    h3 !== q4 || r4 !== n4 || Wf.current || jh ? (typeof y4 === "function" && (Di(b3, c7, y4, d3), n4 = b3.memoizedState), (l4 = jh || Fi(b3, c7, l4, d3, r4, n4, k3) || false) ? (m3 || typeof g3.UNSAFE_componentWillUpdate !== "function" && typeof g3.componentWillUpdate !== "function" || (typeof g3.componentWillUpdate === "function" && g3.componentWillUpdate(d3, n4, k3), typeof g3.UNSAFE_componentWillUpdate === "function" && g3.UNSAFE_componentWillUpdate(d3, n4, k3)), typeof g3.componentDidUpdate === "function" && (b3.flags |= 4), typeof g3.getSnapshotBeforeUpdate === "function" && (b3.flags |= 1024)) : (typeof g3.componentDidUpdate !== "function" || h3 === a2.memoizedProps && r4 === a2.memoizedState || (b3.flags |= 4), typeof g3.getSnapshotBeforeUpdate !== "function" || h3 === a2.memoizedProps && r4 === a2.memoizedState || (b3.flags |= 1024), b3.memoizedProps = d3, b3.memoizedState = n4), g3.props = d3, g3.state = n4, g3.context = k3, d3 = l4) : (typeof g3.componentDidUpdate !== "function" || h3 === a2.memoizedProps && r4 === a2.memoizedState || (b3.flags |= 4), typeof g3.getSnapshotBeforeUpdate !== "function" || h3 === a2.memoizedProps && r4 === a2.memoizedState || (b3.flags |= 1024), d3 = false);
  }
  return jj(a2, b3, c7, d3, f3, e2);
}
function jj(a2, b3, c7, d3, e2, f3) {
  gj(a2, b3);
  var g3 = (b3.flags & 128) !== 0;
  if (!d3 && !g3)
    return e2 && dg(b3, c7, false), Zi(a2, b3, f3);
  d3 = b3.stateNode;
  Wi.current = b3;
  var h3 = g3 && typeof c7.getDerivedStateFromError !== "function" ? null : d3.render();
  b3.flags |= 1;
  a2 !== null && g3 ? (b3.child = Ug(b3, a2.child, null, f3), b3.child = Ug(b3, null, h3, f3)) : Xi(a2, b3, h3, f3);
  b3.memoizedState = d3.state;
  e2 && dg(b3, c7, true);
  return b3.child;
}
function kj(a2) {
  var b3 = a2.stateNode;
  b3.pendingContext ? ag(a2, b3.pendingContext, b3.pendingContext !== b3.context) : b3.context && ag(a2, b3.context, false);
  yh(a2, b3.containerInfo);
}
function lj(a2, b3, c7, d3, e2) {
  Ig();
  Jg(e2);
  b3.flags |= 256;
  Xi(a2, b3, c7, d3);
  return b3.child;
}
var mj = {dehydrated: null, treeContext: null, retryLane: 0};
function nj(a2) {
  return {baseLanes: a2, cachePool: null, transitions: null};
}
function oj(a2, b3, c7) {
  var d3 = b3.pendingProps, e2 = L2.current, f3 = false, g3 = (b3.flags & 128) !== 0, h3;
  (h3 = g3) || (h3 = a2 !== null && a2.memoizedState === null ? false : (e2 & 2) !== 0);
  if (h3)
    f3 = true, b3.flags &= -129;
  else if (a2 === null || a2.memoizedState !== null)
    e2 |= 1;
  G2(L2, e2 & 1);
  if (a2 === null) {
    Eg(b3);
    a2 = b3.memoizedState;
    if (a2 !== null && (a2 = a2.dehydrated, a2 !== null))
      return (b3.mode & 1) === 0 ? b3.lanes = 1 : a2.data === "$!" ? b3.lanes = 8 : b3.lanes = 1073741824, null;
    g3 = d3.children;
    a2 = d3.fallback;
    return f3 ? (d3 = b3.mode, f3 = b3.child, g3 = {mode: "hidden", children: g3}, (d3 & 1) === 0 && f3 !== null ? (f3.childLanes = 0, f3.pendingProps = g3) : f3 = pj(g3, d3, 0, null), a2 = Tg(a2, d3, c7, null), f3.return = b3, a2.return = b3, f3.sibling = a2, b3.child = f3, b3.child.memoizedState = nj(c7), b3.memoizedState = mj, a2) : qj(b3, g3);
  }
  e2 = a2.memoizedState;
  if (e2 !== null && (h3 = e2.dehydrated, h3 !== null))
    return rj(a2, b3, g3, d3, h3, e2, c7);
  if (f3) {
    f3 = d3.fallback;
    g3 = b3.mode;
    e2 = a2.child;
    h3 = e2.sibling;
    var k3 = {mode: "hidden", children: d3.children};
    (g3 & 1) === 0 && b3.child !== e2 ? (d3 = b3.child, d3.childLanes = 0, d3.pendingProps = k3, b3.deletions = null) : (d3 = Pg(e2, k3), d3.subtreeFlags = e2.subtreeFlags & 14680064);
    h3 !== null ? f3 = Pg(h3, f3) : (f3 = Tg(f3, g3, c7, null), f3.flags |= 2);
    f3.return = b3;
    d3.return = b3;
    d3.sibling = f3;
    b3.child = d3;
    d3 = f3;
    f3 = b3.child;
    g3 = a2.child.memoizedState;
    g3 = g3 === null ? nj(c7) : {baseLanes: g3.baseLanes | c7, cachePool: null, transitions: g3.transitions};
    f3.memoizedState = g3;
    f3.childLanes = a2.childLanes & ~c7;
    b3.memoizedState = mj;
    return d3;
  }
  f3 = a2.child;
  a2 = f3.sibling;
  d3 = Pg(f3, {mode: "visible", children: d3.children});
  (b3.mode & 1) === 0 && (d3.lanes = c7);
  d3.return = b3;
  d3.sibling = null;
  a2 !== null && (c7 = b3.deletions, c7 === null ? (b3.deletions = [a2], b3.flags |= 16) : c7.push(a2));
  b3.child = d3;
  b3.memoizedState = null;
  return d3;
}
function qj(a2, b3) {
  b3 = pj({mode: "visible", children: b3}, a2.mode, 0, null);
  b3.return = a2;
  return a2.child = b3;
}
function sj(a2, b3, c7, d3) {
  d3 !== null && Jg(d3);
  Ug(b3, a2.child, null, c7);
  a2 = qj(b3, b3.pendingProps.children);
  a2.flags |= 2;
  b3.memoizedState = null;
  return a2;
}
function rj(a2, b3, c7, d3, e2, f3, g3) {
  if (c7) {
    if (b3.flags & 256)
      return b3.flags &= -257, d3 = Ki(Error(p2(422))), sj(a2, b3, g3, d3);
    if (b3.memoizedState !== null)
      return b3.child = a2.child, b3.flags |= 128, null;
    f3 = d3.fallback;
    e2 = b3.mode;
    d3 = pj({mode: "visible", children: d3.children}, e2, 0, null);
    f3 = Tg(f3, e2, g3, null);
    f3.flags |= 2;
    d3.return = b3;
    f3.return = b3;
    d3.sibling = f3;
    b3.child = d3;
    (b3.mode & 1) !== 0 && Ug(b3, a2.child, null, g3);
    b3.child.memoizedState = nj(g3);
    b3.memoizedState = mj;
    return f3;
  }
  if ((b3.mode & 1) === 0)
    return sj(a2, b3, g3, null);
  if (e2.data === "$!") {
    d3 = e2.nextSibling && e2.nextSibling.dataset;
    if (d3)
      var h3 = d3.dgst;
    d3 = h3;
    f3 = Error(p2(419));
    d3 = Ki(f3, d3, void 0);
    return sj(a2, b3, g3, d3);
  }
  h3 = (g3 & a2.childLanes) !== 0;
  if (dh || h3) {
    d3 = Q2;
    if (d3 !== null) {
      switch (g3 & -g3) {
        case 4:
          e2 = 2;
          break;
        case 16:
          e2 = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          e2 = 32;
          break;
        case 536870912:
          e2 = 268435456;
          break;
        default:
          e2 = 0;
      }
      e2 = (e2 & (d3.suspendedLanes | g3)) !== 0 ? 0 : e2;
      e2 !== 0 && e2 !== f3.retryLane && (f3.retryLane = e2, ih(a2, e2), gi(d3, a2, e2, -1));
    }
    tj();
    d3 = Ki(Error(p2(421)));
    return sj(a2, b3, g3, d3);
  }
  if (e2.data === "$?")
    return b3.flags |= 128, b3.child = a2.child, b3 = uj.bind(null, a2), e2._reactRetry = b3, null;
  a2 = f3.treeContext;
  yg = Lf(e2.nextSibling);
  xg = b3;
  I2 = true;
  zg = null;
  a2 !== null && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a2.id, sg = a2.overflow, qg = b3);
  b3 = qj(b3, d3.children);
  b3.flags |= 4096;
  return b3;
}
function vj(a2, b3, c7) {
  a2.lanes |= b3;
  var d3 = a2.alternate;
  d3 !== null && (d3.lanes |= b3);
  bh(a2.return, b3, c7);
}
function wj(a2, b3, c7, d3, e2) {
  var f3 = a2.memoizedState;
  f3 === null ? a2.memoizedState = {isBackwards: b3, rendering: null, renderingStartTime: 0, last: d3, tail: c7, tailMode: e2} : (f3.isBackwards = b3, f3.rendering = null, f3.renderingStartTime = 0, f3.last = d3, f3.tail = c7, f3.tailMode = e2);
}
function xj(a2, b3, c7) {
  var d3 = b3.pendingProps, e2 = d3.revealOrder, f3 = d3.tail;
  Xi(a2, b3, d3.children, c7);
  d3 = L2.current;
  if ((d3 & 2) !== 0)
    d3 = d3 & 1 | 2, b3.flags |= 128;
  else {
    if (a2 !== null && (a2.flags & 128) !== 0)
      a:
        for (a2 = b3.child; a2 !== null; ) {
          if (a2.tag === 13)
            a2.memoizedState !== null && vj(a2, c7, b3);
          else if (a2.tag === 19)
            vj(a2, c7, b3);
          else if (a2.child !== null) {
            a2.child.return = a2;
            a2 = a2.child;
            continue;
          }
          if (a2 === b3)
            break a;
          for (; a2.sibling === null; ) {
            if (a2.return === null || a2.return === b3)
              break a;
            a2 = a2.return;
          }
          a2.sibling.return = a2.return;
          a2 = a2.sibling;
        }
    d3 &= 1;
  }
  G2(L2, d3);
  if ((b3.mode & 1) === 0)
    b3.memoizedState = null;
  else
    switch (e2) {
      case "forwards":
        c7 = b3.child;
        for (e2 = null; c7 !== null; )
          a2 = c7.alternate, a2 !== null && Ch(a2) === null && (e2 = c7), c7 = c7.sibling;
        c7 = e2;
        c7 === null ? (e2 = b3.child, b3.child = null) : (e2 = c7.sibling, c7.sibling = null);
        wj(b3, false, e2, c7, f3);
        break;
      case "backwards":
        c7 = null;
        e2 = b3.child;
        for (b3.child = null; e2 !== null; ) {
          a2 = e2.alternate;
          if (a2 !== null && Ch(a2) === null) {
            b3.child = e2;
            break;
          }
          a2 = e2.sibling;
          e2.sibling = c7;
          c7 = e2;
          e2 = a2;
        }
        wj(b3, true, c7, null, f3);
        break;
      case "together":
        wj(b3, false, null, null, void 0);
        break;
      default:
        b3.memoizedState = null;
    }
  return b3.child;
}
function ij(a2, b3) {
  (b3.mode & 1) === 0 && a2 !== null && (a2.alternate = null, b3.alternate = null, b3.flags |= 2);
}
function Zi(a2, b3, c7) {
  a2 !== null && (b3.dependencies = a2.dependencies);
  rh |= b3.lanes;
  if ((c7 & b3.childLanes) === 0)
    return null;
  if (a2 !== null && b3.child !== a2.child)
    throw Error(p2(153));
  if (b3.child !== null) {
    a2 = b3.child;
    c7 = Pg(a2, a2.pendingProps);
    b3.child = c7;
    for (c7.return = b3; a2.sibling !== null; )
      a2 = a2.sibling, c7 = c7.sibling = Pg(a2, a2.pendingProps), c7.return = b3;
    c7.sibling = null;
  }
  return b3.child;
}
function yj(a2, b3, c7) {
  switch (b3.tag) {
    case 3:
      kj(b3);
      Ig();
      break;
    case 5:
      Ah(b3);
      break;
    case 1:
      Zf(b3.type) && cg(b3);
      break;
    case 4:
      yh(b3, b3.stateNode.containerInfo);
      break;
    case 10:
      var d3 = b3.type._context, e2 = b3.memoizedProps.value;
      G2(Wg, d3._currentValue);
      d3._currentValue = e2;
      break;
    case 13:
      d3 = b3.memoizedState;
      if (d3 !== null) {
        if (d3.dehydrated !== null)
          return G2(L2, L2.current & 1), b3.flags |= 128, null;
        if ((c7 & b3.child.childLanes) !== 0)
          return oj(a2, b3, c7);
        G2(L2, L2.current & 1);
        a2 = Zi(a2, b3, c7);
        return a2 !== null ? a2.sibling : null;
      }
      G2(L2, L2.current & 1);
      break;
    case 19:
      d3 = (c7 & b3.childLanes) !== 0;
      if ((a2.flags & 128) !== 0) {
        if (d3)
          return xj(a2, b3, c7);
        b3.flags |= 128;
      }
      e2 = b3.memoizedState;
      e2 !== null && (e2.rendering = null, e2.tail = null, e2.lastEffect = null);
      G2(L2, L2.current);
      if (d3)
        break;
      else
        return null;
    case 22:
    case 23:
      return b3.lanes = 0, dj(a2, b3, c7);
  }
  return Zi(a2, b3, c7);
}
var zj;
var Aj;
var Bj;
var Cj;
zj = function(a2, b3) {
  for (var c7 = b3.child; c7 !== null; ) {
    if (c7.tag === 5 || c7.tag === 6)
      a2.appendChild(c7.stateNode);
    else if (c7.tag !== 4 && c7.child !== null) {
      c7.child.return = c7;
      c7 = c7.child;
      continue;
    }
    if (c7 === b3)
      break;
    for (; c7.sibling === null; ) {
      if (c7.return === null || c7.return === b3)
        return;
      c7 = c7.return;
    }
    c7.sibling.return = c7.return;
    c7 = c7.sibling;
  }
};
Aj = function() {
};
Bj = function(a2, b3, c7, d3) {
  var e2 = a2.memoizedProps;
  if (e2 !== d3) {
    a2 = b3.stateNode;
    xh(uh.current);
    var f3 = null;
    switch (c7) {
      case "input":
        e2 = Ya(a2, e2);
        d3 = Ya(a2, d3);
        f3 = [];
        break;
      case "select":
        e2 = A2({}, e2, {value: void 0});
        d3 = A2({}, d3, {value: void 0});
        f3 = [];
        break;
      case "textarea":
        e2 = gb(a2, e2);
        d3 = gb(a2, d3);
        f3 = [];
        break;
      default:
        typeof e2.onClick !== "function" && typeof d3.onClick === "function" && (a2.onclick = Bf);
    }
    ub(c7, d3);
    var g3;
    c7 = null;
    for (l4 in e2)
      if (!d3.hasOwnProperty(l4) && e2.hasOwnProperty(l4) && e2[l4] != null)
        if (l4 === "style") {
          var h3 = e2[l4];
          for (g3 in h3)
            h3.hasOwnProperty(g3) && (c7 || (c7 = {}), c7[g3] = "");
        } else
          l4 !== "dangerouslySetInnerHTML" && l4 !== "children" && l4 !== "suppressContentEditableWarning" && l4 !== "suppressHydrationWarning" && l4 !== "autoFocus" && (ea.hasOwnProperty(l4) ? f3 || (f3 = []) : (f3 = f3 || []).push(l4, null));
    for (l4 in d3) {
      var k3 = d3[l4];
      h3 = e2 != null ? e2[l4] : void 0;
      if (d3.hasOwnProperty(l4) && k3 !== h3 && (k3 != null || h3 != null))
        if (l4 === "style")
          if (h3) {
            for (g3 in h3)
              !h3.hasOwnProperty(g3) || k3 && k3.hasOwnProperty(g3) || (c7 || (c7 = {}), c7[g3] = "");
            for (g3 in k3)
              k3.hasOwnProperty(g3) && h3[g3] !== k3[g3] && (c7 || (c7 = {}), c7[g3] = k3[g3]);
          } else
            c7 || (f3 || (f3 = []), f3.push(l4, c7)), c7 = k3;
        else
          l4 === "dangerouslySetInnerHTML" ? (k3 = k3 ? k3.__html : void 0, h3 = h3 ? h3.__html : void 0, k3 != null && h3 !== k3 && (f3 = f3 || []).push(l4, k3)) : l4 === "children" ? typeof k3 !== "string" && typeof k3 !== "number" || (f3 = f3 || []).push(l4, "" + k3) : l4 !== "suppressContentEditableWarning" && l4 !== "suppressHydrationWarning" && (ea.hasOwnProperty(l4) ? (k3 != null && l4 === "onScroll" && D2("scroll", a2), f3 || h3 === k3 || (f3 = [])) : (f3 = f3 || []).push(l4, k3));
    }
    c7 && (f3 = f3 || []).push("style", c7);
    var l4 = f3;
    if (b3.updateQueue = l4)
      b3.flags |= 4;
  }
};
Cj = function(a2, b3, c7, d3) {
  c7 !== d3 && (b3.flags |= 4);
};
function Dj(a2, b3) {
  if (!I2)
    switch (a2.tailMode) {
      case "hidden":
        b3 = a2.tail;
        for (var c7 = null; b3 !== null; )
          b3.alternate !== null && (c7 = b3), b3 = b3.sibling;
        c7 === null ? a2.tail = null : c7.sibling = null;
        break;
      case "collapsed":
        c7 = a2.tail;
        for (var d3 = null; c7 !== null; )
          c7.alternate !== null && (d3 = c7), c7 = c7.sibling;
        d3 === null ? b3 || a2.tail === null ? a2.tail = null : a2.tail.sibling = null : d3.sibling = null;
    }
}
function S2(a2) {
  var b3 = a2.alternate !== null && a2.alternate.child === a2.child, c7 = 0, d3 = 0;
  if (b3)
    for (var e2 = a2.child; e2 !== null; )
      c7 |= e2.lanes | e2.childLanes, d3 |= e2.subtreeFlags & 14680064, d3 |= e2.flags & 14680064, e2.return = a2, e2 = e2.sibling;
  else
    for (e2 = a2.child; e2 !== null; )
      c7 |= e2.lanes | e2.childLanes, d3 |= e2.subtreeFlags, d3 |= e2.flags, e2.return = a2, e2 = e2.sibling;
  a2.subtreeFlags |= d3;
  a2.childLanes = c7;
  return b3;
}
function Ej(a2, b3, c7) {
  var d3 = b3.pendingProps;
  wg(b3);
  switch (b3.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return S2(b3), null;
    case 1:
      return Zf(b3.type) && $f(), S2(b3), null;
    case 3:
      d3 = b3.stateNode;
      zh();
      E2(Wf);
      E2(H2);
      Eh();
      d3.pendingContext && (d3.context = d3.pendingContext, d3.pendingContext = null);
      if (a2 === null || a2.child === null)
        Gg(b3) ? b3.flags |= 4 : a2 === null || a2.memoizedState.isDehydrated && (b3.flags & 256) === 0 || (b3.flags |= 1024, zg !== null && (Fj(zg), zg = null));
      Aj(a2, b3);
      S2(b3);
      return null;
    case 5:
      Bh(b3);
      var e2 = xh(wh.current);
      c7 = b3.type;
      if (a2 !== null && b3.stateNode != null)
        Bj(a2, b3, c7, d3, e2), a2.ref !== b3.ref && (b3.flags |= 512, b3.flags |= 2097152);
      else {
        if (!d3) {
          if (b3.stateNode === null)
            throw Error(p2(166));
          S2(b3);
          return null;
        }
        a2 = xh(uh.current);
        if (Gg(b3)) {
          d3 = b3.stateNode;
          c7 = b3.type;
          var f3 = b3.memoizedProps;
          d3[Of] = b3;
          d3[Pf] = f3;
          a2 = (b3.mode & 1) !== 0;
          switch (c7) {
            case "dialog":
              D2("cancel", d3);
              D2("close", d3);
              break;
            case "iframe":
            case "object":
            case "embed":
              D2("load", d3);
              break;
            case "video":
            case "audio":
              for (e2 = 0; e2 < lf.length; e2++)
                D2(lf[e2], d3);
              break;
            case "source":
              D2("error", d3);
              break;
            case "img":
            case "image":
            case "link":
              D2("error", d3);
              D2("load", d3);
              break;
            case "details":
              D2("toggle", d3);
              break;
            case "input":
              Za(d3, f3);
              D2("invalid", d3);
              break;
            case "select":
              d3._wrapperState = {wasMultiple: !!f3.multiple};
              D2("invalid", d3);
              break;
            case "textarea":
              hb(d3, f3), D2("invalid", d3);
          }
          ub(c7, f3);
          e2 = null;
          for (var g3 in f3)
            if (f3.hasOwnProperty(g3)) {
              var h3 = f3[g3];
              g3 === "children" ? typeof h3 === "string" ? d3.textContent !== h3 && (f3.suppressHydrationWarning !== true && Af(d3.textContent, h3, a2), e2 = ["children", h3]) : typeof h3 === "number" && d3.textContent !== "" + h3 && (f3.suppressHydrationWarning !== true && Af(d3.textContent, h3, a2), e2 = ["children", "" + h3]) : ea.hasOwnProperty(g3) && h3 != null && g3 === "onScroll" && D2("scroll", d3);
            }
          switch (c7) {
            case "input":
              Va(d3);
              db(d3, f3, true);
              break;
            case "textarea":
              Va(d3);
              jb(d3);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof f3.onClick === "function" && (d3.onclick = Bf);
          }
          d3 = e2;
          b3.updateQueue = d3;
          d3 !== null && (b3.flags |= 4);
        } else {
          g3 = e2.nodeType === 9 ? e2 : e2.ownerDocument;
          a2 === "http://www.w3.org/1999/xhtml" && (a2 = kb(c7));
          a2 === "http://www.w3.org/1999/xhtml" ? c7 === "script" ? (a2 = g3.createElement("div"), a2.innerHTML = "<script></script>", a2 = a2.removeChild(a2.firstChild)) : typeof d3.is === "string" ? a2 = g3.createElement(c7, {is: d3.is}) : (a2 = g3.createElement(c7), c7 === "select" && (g3 = a2, d3.multiple ? g3.multiple = true : d3.size && (g3.size = d3.size))) : a2 = g3.createElementNS(a2, c7);
          a2[Of] = b3;
          a2[Pf] = d3;
          zj(a2, b3, false, false);
          b3.stateNode = a2;
          a: {
            g3 = vb(c7, d3);
            switch (c7) {
              case "dialog":
                D2("cancel", a2);
                D2("close", a2);
                e2 = d3;
                break;
              case "iframe":
              case "object":
              case "embed":
                D2("load", a2);
                e2 = d3;
                break;
              case "video":
              case "audio":
                for (e2 = 0; e2 < lf.length; e2++)
                  D2(lf[e2], a2);
                e2 = d3;
                break;
              case "source":
                D2("error", a2);
                e2 = d3;
                break;
              case "img":
              case "image":
              case "link":
                D2("error", a2);
                D2("load", a2);
                e2 = d3;
                break;
              case "details":
                D2("toggle", a2);
                e2 = d3;
                break;
              case "input":
                Za(a2, d3);
                e2 = Ya(a2, d3);
                D2("invalid", a2);
                break;
              case "option":
                e2 = d3;
                break;
              case "select":
                a2._wrapperState = {wasMultiple: !!d3.multiple};
                e2 = A2({}, d3, {value: void 0});
                D2("invalid", a2);
                break;
              case "textarea":
                hb(a2, d3);
                e2 = gb(a2, d3);
                D2("invalid", a2);
                break;
              default:
                e2 = d3;
            }
            ub(c7, e2);
            h3 = e2;
            for (f3 in h3)
              if (h3.hasOwnProperty(f3)) {
                var k3 = h3[f3];
                f3 === "style" ? sb(a2, k3) : f3 === "dangerouslySetInnerHTML" ? (k3 = k3 ? k3.__html : void 0, k3 != null && nb(a2, k3)) : f3 === "children" ? typeof k3 === "string" ? (c7 !== "textarea" || k3 !== "") && ob(a2, k3) : typeof k3 === "number" && ob(a2, "" + k3) : f3 !== "suppressContentEditableWarning" && f3 !== "suppressHydrationWarning" && f3 !== "autoFocus" && (ea.hasOwnProperty(f3) ? k3 != null && f3 === "onScroll" && D2("scroll", a2) : k3 != null && ta(a2, f3, k3, g3));
              }
            switch (c7) {
              case "input":
                Va(a2);
                db(a2, d3, false);
                break;
              case "textarea":
                Va(a2);
                jb(a2);
                break;
              case "option":
                d3.value != null && a2.setAttribute("value", "" + Sa(d3.value));
                break;
              case "select":
                a2.multiple = !!d3.multiple;
                f3 = d3.value;
                f3 != null ? fb(a2, !!d3.multiple, f3, false) : d3.defaultValue != null && fb(a2, !!d3.multiple, d3.defaultValue, true);
                break;
              default:
                typeof e2.onClick === "function" && (a2.onclick = Bf);
            }
            switch (c7) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                d3 = !!d3.autoFocus;
                break a;
              case "img":
                d3 = true;
                break a;
              default:
                d3 = false;
            }
          }
          d3 && (b3.flags |= 4);
        }
        b3.ref !== null && (b3.flags |= 512, b3.flags |= 2097152);
      }
      S2(b3);
      return null;
    case 6:
      if (a2 && b3.stateNode != null)
        Cj(a2, b3, a2.memoizedProps, d3);
      else {
        if (typeof d3 !== "string" && b3.stateNode === null)
          throw Error(p2(166));
        c7 = xh(wh.current);
        xh(uh.current);
        if (Gg(b3)) {
          d3 = b3.stateNode;
          c7 = b3.memoizedProps;
          d3[Of] = b3;
          if (f3 = d3.nodeValue !== c7) {
            if (a2 = xg, a2 !== null)
              switch (a2.tag) {
                case 3:
                  Af(d3.nodeValue, c7, (a2.mode & 1) !== 0);
                  break;
                case 5:
                  a2.memoizedProps.suppressHydrationWarning !== true && Af(d3.nodeValue, c7, (a2.mode & 1) !== 0);
              }
          }
          f3 && (b3.flags |= 4);
        } else
          d3 = (c7.nodeType === 9 ? c7 : c7.ownerDocument).createTextNode(d3), d3[Of] = b3, b3.stateNode = d3;
      }
      S2(b3);
      return null;
    case 13:
      E2(L2);
      d3 = b3.memoizedState;
      if (a2 === null || a2.memoizedState !== null && a2.memoizedState.dehydrated !== null) {
        if (I2 && yg !== null && (b3.mode & 1) !== 0 && (b3.flags & 128) === 0)
          Hg(), Ig(), b3.flags |= 98560, f3 = false;
        else if (f3 = Gg(b3), d3 !== null && d3.dehydrated !== null) {
          if (a2 === null) {
            if (!f3)
              throw Error(p2(318));
            f3 = b3.memoizedState;
            f3 = f3 !== null ? f3.dehydrated : null;
            if (!f3)
              throw Error(p2(317));
            f3[Of] = b3;
          } else
            Ig(), (b3.flags & 128) === 0 && (b3.memoizedState = null), b3.flags |= 4;
          S2(b3);
          f3 = false;
        } else
          zg !== null && (Fj(zg), zg = null), f3 = true;
        if (!f3)
          return b3.flags & 65536 ? b3 : null;
      }
      if ((b3.flags & 128) !== 0)
        return b3.lanes = c7, b3;
      d3 = d3 !== null;
      d3 !== (a2 !== null && a2.memoizedState !== null) && d3 && (b3.child.flags |= 8192, (b3.mode & 1) !== 0 && (a2 === null || (L2.current & 1) !== 0 ? T2 === 0 && (T2 = 3) : tj()));
      b3.updateQueue !== null && (b3.flags |= 4);
      S2(b3);
      return null;
    case 4:
      return zh(), Aj(a2, b3), a2 === null && sf(b3.stateNode.containerInfo), S2(b3), null;
    case 10:
      return ah(b3.type._context), S2(b3), null;
    case 17:
      return Zf(b3.type) && $f(), S2(b3), null;
    case 19:
      E2(L2);
      f3 = b3.memoizedState;
      if (f3 === null)
        return S2(b3), null;
      d3 = (b3.flags & 128) !== 0;
      g3 = f3.rendering;
      if (g3 === null)
        if (d3)
          Dj(f3, false);
        else {
          if (T2 !== 0 || a2 !== null && (a2.flags & 128) !== 0)
            for (a2 = b3.child; a2 !== null; ) {
              g3 = Ch(a2);
              if (g3 !== null) {
                b3.flags |= 128;
                Dj(f3, false);
                d3 = g3.updateQueue;
                d3 !== null && (b3.updateQueue = d3, b3.flags |= 4);
                b3.subtreeFlags = 0;
                d3 = c7;
                for (c7 = b3.child; c7 !== null; )
                  f3 = c7, a2 = d3, f3.flags &= 14680066, g3 = f3.alternate, g3 === null ? (f3.childLanes = 0, f3.lanes = a2, f3.child = null, f3.subtreeFlags = 0, f3.memoizedProps = null, f3.memoizedState = null, f3.updateQueue = null, f3.dependencies = null, f3.stateNode = null) : (f3.childLanes = g3.childLanes, f3.lanes = g3.lanes, f3.child = g3.child, f3.subtreeFlags = 0, f3.deletions = null, f3.memoizedProps = g3.memoizedProps, f3.memoizedState = g3.memoizedState, f3.updateQueue = g3.updateQueue, f3.type = g3.type, a2 = g3.dependencies, f3.dependencies = a2 === null ? null : {lanes: a2.lanes, firstContext: a2.firstContext}), c7 = c7.sibling;
                G2(L2, L2.current & 1 | 2);
                return b3.child;
              }
              a2 = a2.sibling;
            }
          f3.tail !== null && B2() > Gj && (b3.flags |= 128, d3 = true, Dj(f3, false), b3.lanes = 4194304);
        }
      else {
        if (!d3)
          if (a2 = Ch(g3), a2 !== null) {
            if (b3.flags |= 128, d3 = true, c7 = a2.updateQueue, c7 !== null && (b3.updateQueue = c7, b3.flags |= 4), Dj(f3, true), f3.tail === null && f3.tailMode === "hidden" && !g3.alternate && !I2)
              return S2(b3), null;
          } else
            2 * B2() - f3.renderingStartTime > Gj && c7 !== 1073741824 && (b3.flags |= 128, d3 = true, Dj(f3, false), b3.lanes = 4194304);
        f3.isBackwards ? (g3.sibling = b3.child, b3.child = g3) : (c7 = f3.last, c7 !== null ? c7.sibling = g3 : b3.child = g3, f3.last = g3);
      }
      if (f3.tail !== null)
        return b3 = f3.tail, f3.rendering = b3, f3.tail = b3.sibling, f3.renderingStartTime = B2(), b3.sibling = null, c7 = L2.current, G2(L2, d3 ? c7 & 1 | 2 : c7 & 1), b3;
      S2(b3);
      return null;
    case 22:
    case 23:
      return Hj(), d3 = b3.memoizedState !== null, a2 !== null && a2.memoizedState !== null !== d3 && (b3.flags |= 8192), d3 && (b3.mode & 1) !== 0 ? (fj & 1073741824) !== 0 && (S2(b3), b3.subtreeFlags & 6 && (b3.flags |= 8192)) : S2(b3), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(p2(156, b3.tag));
}
function Ij(a2, b3) {
  wg(b3);
  switch (b3.tag) {
    case 1:
      return Zf(b3.type) && $f(), a2 = b3.flags, a2 & 65536 ? (b3.flags = a2 & -65537 | 128, b3) : null;
    case 3:
      return zh(), E2(Wf), E2(H2), Eh(), a2 = b3.flags, (a2 & 65536) !== 0 && (a2 & 128) === 0 ? (b3.flags = a2 & -65537 | 128, b3) : null;
    case 5:
      return Bh(b3), null;
    case 13:
      E2(L2);
      a2 = b3.memoizedState;
      if (a2 !== null && a2.dehydrated !== null) {
        if (b3.alternate === null)
          throw Error(p2(340));
        Ig();
      }
      a2 = b3.flags;
      return a2 & 65536 ? (b3.flags = a2 & -65537 | 128, b3) : null;
    case 19:
      return E2(L2), null;
    case 4:
      return zh(), null;
    case 10:
      return ah(b3.type._context), null;
    case 22:
    case 23:
      return Hj(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Jj = false;
var U2 = false;
var Kj = typeof WeakSet === "function" ? WeakSet : Set;
var V2 = null;
function Lj(a2, b3) {
  var c7 = a2.ref;
  if (c7 !== null)
    if (typeof c7 === "function")
      try {
        c7(null);
      } catch (d3) {
        W2(a2, b3, d3);
      }
    else
      c7.current = null;
}
function Mj(a2, b3, c7) {
  try {
    c7();
  } catch (d3) {
    W2(a2, b3, d3);
  }
}
var Nj = false;
function Oj(a2, b3) {
  Cf = dd;
  a2 = Me();
  if (Ne(a2)) {
    if ("selectionStart" in a2)
      var c7 = {start: a2.selectionStart, end: a2.selectionEnd};
    else
      a: {
        c7 = (c7 = a2.ownerDocument) && c7.defaultView || window;
        var d3 = c7.getSelection && c7.getSelection();
        if (d3 && d3.rangeCount !== 0) {
          c7 = d3.anchorNode;
          var e2 = d3.anchorOffset, f3 = d3.focusNode;
          d3 = d3.focusOffset;
          try {
            c7.nodeType, f3.nodeType;
          } catch (F4) {
            c7 = null;
            break a;
          }
          var g3 = 0, h3 = -1, k3 = -1, l4 = 0, m3 = 0, q4 = a2, r4 = null;
          b:
            for (; ; ) {
              for (var y4; ; ) {
                q4 !== c7 || e2 !== 0 && q4.nodeType !== 3 || (h3 = g3 + e2);
                q4 !== f3 || d3 !== 0 && q4.nodeType !== 3 || (k3 = g3 + d3);
                q4.nodeType === 3 && (g3 += q4.nodeValue.length);
                if ((y4 = q4.firstChild) === null)
                  break;
                r4 = q4;
                q4 = y4;
              }
              for (; ; ) {
                if (q4 === a2)
                  break b;
                r4 === c7 && ++l4 === e2 && (h3 = g3);
                r4 === f3 && ++m3 === d3 && (k3 = g3);
                if ((y4 = q4.nextSibling) !== null)
                  break;
                q4 = r4;
                r4 = q4.parentNode;
              }
              q4 = y4;
            }
          c7 = h3 === -1 || k3 === -1 ? null : {start: h3, end: k3};
        } else
          c7 = null;
      }
    c7 = c7 || {start: 0, end: 0};
  } else
    c7 = null;
  Df = {focusedElem: a2, selectionRange: c7};
  dd = false;
  for (V2 = b3; V2 !== null; )
    if (b3 = V2, a2 = b3.child, (b3.subtreeFlags & 1028) !== 0 && a2 !== null)
      a2.return = b3, V2 = a2;
    else
      for (; V2 !== null; ) {
        b3 = V2;
        try {
          var n4 = b3.alternate;
          if ((b3.flags & 1024) !== 0)
            switch (b3.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (n4 !== null) {
                  var t4 = n4.memoizedProps, J4 = n4.memoizedState, x4 = b3.stateNode, w4 = x4.getSnapshotBeforeUpdate(b3.elementType === b3.type ? t4 : Ci(b3.type, t4), J4);
                  x4.__reactInternalSnapshotBeforeUpdate = w4;
                }
                break;
              case 3:
                var u3 = b3.stateNode.containerInfo;
                u3.nodeType === 1 ? u3.textContent = "" : u3.nodeType === 9 && u3.documentElement && u3.removeChild(u3.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(p2(163));
            }
        } catch (F4) {
          W2(b3, b3.return, F4);
        }
        a2 = b3.sibling;
        if (a2 !== null) {
          a2.return = b3.return;
          V2 = a2;
          break;
        }
        V2 = b3.return;
      }
  n4 = Nj;
  Nj = false;
  return n4;
}
function Pj(a2, b3, c7) {
  var d3 = b3.updateQueue;
  d3 = d3 !== null ? d3.lastEffect : null;
  if (d3 !== null) {
    var e2 = d3 = d3.next;
    do {
      if ((e2.tag & a2) === a2) {
        var f3 = e2.destroy;
        e2.destroy = void 0;
        f3 !== void 0 && Mj(b3, c7, f3);
      }
      e2 = e2.next;
    } while (e2 !== d3);
  }
}
function Qj(a2, b3) {
  b3 = b3.updateQueue;
  b3 = b3 !== null ? b3.lastEffect : null;
  if (b3 !== null) {
    var c7 = b3 = b3.next;
    do {
      if ((c7.tag & a2) === a2) {
        var d3 = c7.create;
        c7.destroy = d3();
      }
      c7 = c7.next;
    } while (c7 !== b3);
  }
}
function Rj(a2) {
  var b3 = a2.ref;
  if (b3 !== null) {
    var c7 = a2.stateNode;
    switch (a2.tag) {
      case 5:
        a2 = c7;
        break;
      default:
        a2 = c7;
    }
    typeof b3 === "function" ? b3(a2) : b3.current = a2;
  }
}
function Sj(a2) {
  var b3 = a2.alternate;
  b3 !== null && (a2.alternate = null, Sj(b3));
  a2.child = null;
  a2.deletions = null;
  a2.sibling = null;
  a2.tag === 5 && (b3 = a2.stateNode, b3 !== null && (delete b3[Of], delete b3[Pf], delete b3[of], delete b3[Qf], delete b3[Rf]));
  a2.stateNode = null;
  a2.return = null;
  a2.dependencies = null;
  a2.memoizedProps = null;
  a2.memoizedState = null;
  a2.pendingProps = null;
  a2.stateNode = null;
  a2.updateQueue = null;
}
function Tj(a2) {
  return a2.tag === 5 || a2.tag === 3 || a2.tag === 4;
}
function Uj(a2) {
  a:
    for (; ; ) {
      for (; a2.sibling === null; ) {
        if (a2.return === null || Tj(a2.return))
          return null;
        a2 = a2.return;
      }
      a2.sibling.return = a2.return;
      for (a2 = a2.sibling; a2.tag !== 5 && a2.tag !== 6 && a2.tag !== 18; ) {
        if (a2.flags & 2)
          continue a;
        if (a2.child === null || a2.tag === 4)
          continue a;
        else
          a2.child.return = a2, a2 = a2.child;
      }
      if (!(a2.flags & 2))
        return a2.stateNode;
    }
}
function Vj(a2, b3, c7) {
  var d3 = a2.tag;
  if (d3 === 5 || d3 === 6)
    a2 = a2.stateNode, b3 ? c7.nodeType === 8 ? c7.parentNode.insertBefore(a2, b3) : c7.insertBefore(a2, b3) : (c7.nodeType === 8 ? (b3 = c7.parentNode, b3.insertBefore(a2, c7)) : (b3 = c7, b3.appendChild(a2)), c7 = c7._reactRootContainer, c7 !== null && c7 !== void 0 || b3.onclick !== null || (b3.onclick = Bf));
  else if (d3 !== 4 && (a2 = a2.child, a2 !== null))
    for (Vj(a2, b3, c7), a2 = a2.sibling; a2 !== null; )
      Vj(a2, b3, c7), a2 = a2.sibling;
}
function Wj(a2, b3, c7) {
  var d3 = a2.tag;
  if (d3 === 5 || d3 === 6)
    a2 = a2.stateNode, b3 ? c7.insertBefore(a2, b3) : c7.appendChild(a2);
  else if (d3 !== 4 && (a2 = a2.child, a2 !== null))
    for (Wj(a2, b3, c7), a2 = a2.sibling; a2 !== null; )
      Wj(a2, b3, c7), a2 = a2.sibling;
}
var X2 = null;
var Xj = false;
function Yj(a2, b3, c7) {
  for (c7 = c7.child; c7 !== null; )
    Zj(a2, b3, c7), c7 = c7.sibling;
}
function Zj(a2, b3, c7) {
  if (lc && typeof lc.onCommitFiberUnmount === "function")
    try {
      lc.onCommitFiberUnmount(kc, c7);
    } catch (h3) {
    }
  switch (c7.tag) {
    case 5:
      U2 || Lj(c7, b3);
    case 6:
      var d3 = X2, e2 = Xj;
      X2 = null;
      Yj(a2, b3, c7);
      X2 = d3;
      Xj = e2;
      X2 !== null && (Xj ? (a2 = X2, c7 = c7.stateNode, a2.nodeType === 8 ? a2.parentNode.removeChild(c7) : a2.removeChild(c7)) : X2.removeChild(c7.stateNode));
      break;
    case 18:
      X2 !== null && (Xj ? (a2 = X2, c7 = c7.stateNode, a2.nodeType === 8 ? Kf(a2.parentNode, c7) : a2.nodeType === 1 && Kf(a2, c7), bd(a2)) : Kf(X2, c7.stateNode));
      break;
    case 4:
      d3 = X2;
      e2 = Xj;
      X2 = c7.stateNode.containerInfo;
      Xj = true;
      Yj(a2, b3, c7);
      X2 = d3;
      Xj = e2;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!U2 && (d3 = c7.updateQueue, d3 !== null && (d3 = d3.lastEffect, d3 !== null))) {
        e2 = d3 = d3.next;
        do {
          var f3 = e2, g3 = f3.destroy;
          f3 = f3.tag;
          g3 !== void 0 && ((f3 & 2) !== 0 ? Mj(c7, b3, g3) : (f3 & 4) !== 0 && Mj(c7, b3, g3));
          e2 = e2.next;
        } while (e2 !== d3);
      }
      Yj(a2, b3, c7);
      break;
    case 1:
      if (!U2 && (Lj(c7, b3), d3 = c7.stateNode, typeof d3.componentWillUnmount === "function"))
        try {
          d3.props = c7.memoizedProps, d3.state = c7.memoizedState, d3.componentWillUnmount();
        } catch (h3) {
          W2(c7, b3, h3);
        }
      Yj(a2, b3, c7);
      break;
    case 21:
      Yj(a2, b3, c7);
      break;
    case 22:
      c7.mode & 1 ? (U2 = (d3 = U2) || c7.memoizedState !== null, Yj(a2, b3, c7), U2 = d3) : Yj(a2, b3, c7);
      break;
    default:
      Yj(a2, b3, c7);
  }
}
function ak(a2) {
  var b3 = a2.updateQueue;
  if (b3 !== null) {
    a2.updateQueue = null;
    var c7 = a2.stateNode;
    c7 === null && (c7 = a2.stateNode = new Kj());
    b3.forEach(function(b4) {
      var d3 = bk.bind(null, a2, b4);
      c7.has(b4) || (c7.add(b4), b4.then(d3, d3));
    });
  }
}
function ck(a2, b3) {
  var c7 = b3.deletions;
  if (c7 !== null)
    for (var d3 = 0; d3 < c7.length; d3++) {
      var e2 = c7[d3];
      try {
        var f3 = a2, g3 = b3, h3 = g3;
        a:
          for (; h3 !== null; ) {
            switch (h3.tag) {
              case 5:
                X2 = h3.stateNode;
                Xj = false;
                break a;
              case 3:
                X2 = h3.stateNode.containerInfo;
                Xj = true;
                break a;
              case 4:
                X2 = h3.stateNode.containerInfo;
                Xj = true;
                break a;
            }
            h3 = h3.return;
          }
        if (X2 === null)
          throw Error(p2(160));
        Zj(f3, g3, e2);
        X2 = null;
        Xj = false;
        var k3 = e2.alternate;
        k3 !== null && (k3.return = null);
        e2.return = null;
      } catch (l4) {
        W2(e2, b3, l4);
      }
    }
  if (b3.subtreeFlags & 12854)
    for (b3 = b3.child; b3 !== null; )
      dk(b3, a2), b3 = b3.sibling;
}
function dk(a2, b3) {
  var c7 = a2.alternate, d3 = a2.flags;
  switch (a2.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      ck(b3, a2);
      ek(a2);
      if (d3 & 4) {
        try {
          Pj(3, a2, a2.return), Qj(3, a2);
        } catch (t4) {
          W2(a2, a2.return, t4);
        }
        try {
          Pj(5, a2, a2.return);
        } catch (t4) {
          W2(a2, a2.return, t4);
        }
      }
      break;
    case 1:
      ck(b3, a2);
      ek(a2);
      d3 & 512 && c7 !== null && Lj(c7, c7.return);
      break;
    case 5:
      ck(b3, a2);
      ek(a2);
      d3 & 512 && c7 !== null && Lj(c7, c7.return);
      if (a2.flags & 32) {
        var e2 = a2.stateNode;
        try {
          ob(e2, "");
        } catch (t4) {
          W2(a2, a2.return, t4);
        }
      }
      if (d3 & 4 && (e2 = a2.stateNode, e2 != null)) {
        var f3 = a2.memoizedProps, g3 = c7 !== null ? c7.memoizedProps : f3, h3 = a2.type, k3 = a2.updateQueue;
        a2.updateQueue = null;
        if (k3 !== null)
          try {
            h3 === "input" && f3.type === "radio" && f3.name != null && ab(e2, f3);
            vb(h3, g3);
            var l4 = vb(h3, f3);
            for (g3 = 0; g3 < k3.length; g3 += 2) {
              var m3 = k3[g3], q4 = k3[g3 + 1];
              m3 === "style" ? sb(e2, q4) : m3 === "dangerouslySetInnerHTML" ? nb(e2, q4) : m3 === "children" ? ob(e2, q4) : ta(e2, m3, q4, l4);
            }
            switch (h3) {
              case "input":
                bb(e2, f3);
                break;
              case "textarea":
                ib(e2, f3);
                break;
              case "select":
                var r4 = e2._wrapperState.wasMultiple;
                e2._wrapperState.wasMultiple = !!f3.multiple;
                var y4 = f3.value;
                y4 != null ? fb(e2, !!f3.multiple, y4, false) : r4 !== !!f3.multiple && (f3.defaultValue != null ? fb(e2, !!f3.multiple, f3.defaultValue, true) : fb(e2, !!f3.multiple, f3.multiple ? [] : "", false));
            }
            e2[Pf] = f3;
          } catch (t4) {
            W2(a2, a2.return, t4);
          }
      }
      break;
    case 6:
      ck(b3, a2);
      ek(a2);
      if (d3 & 4) {
        if (a2.stateNode === null)
          throw Error(p2(162));
        e2 = a2.stateNode;
        f3 = a2.memoizedProps;
        try {
          e2.nodeValue = f3;
        } catch (t4) {
          W2(a2, a2.return, t4);
        }
      }
      break;
    case 3:
      ck(b3, a2);
      ek(a2);
      if (d3 & 4 && c7 !== null && c7.memoizedState.isDehydrated)
        try {
          bd(b3.containerInfo);
        } catch (t4) {
          W2(a2, a2.return, t4);
        }
      break;
    case 4:
      ck(b3, a2);
      ek(a2);
      break;
    case 13:
      ck(b3, a2);
      ek(a2);
      e2 = a2.child;
      e2.flags & 8192 && (f3 = e2.memoizedState !== null, e2.stateNode.isHidden = f3, !f3 || e2.alternate !== null && e2.alternate.memoizedState !== null || (fk = B2()));
      d3 & 4 && ak(a2);
      break;
    case 22:
      m3 = c7 !== null && c7.memoizedState !== null;
      a2.mode & 1 ? (U2 = (l4 = U2) || m3, ck(b3, a2), U2 = l4) : ck(b3, a2);
      ek(a2);
      if (d3 & 8192) {
        l4 = a2.memoizedState !== null;
        if ((a2.stateNode.isHidden = l4) && !m3 && (a2.mode & 1) !== 0)
          for (V2 = a2, m3 = a2.child; m3 !== null; ) {
            for (q4 = V2 = m3; V2 !== null; ) {
              r4 = V2;
              y4 = r4.child;
              switch (r4.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Pj(4, r4, r4.return);
                  break;
                case 1:
                  Lj(r4, r4.return);
                  var n4 = r4.stateNode;
                  if (typeof n4.componentWillUnmount === "function") {
                    d3 = r4;
                    c7 = r4.return;
                    try {
                      b3 = d3, n4.props = b3.memoizedProps, n4.state = b3.memoizedState, n4.componentWillUnmount();
                    } catch (t4) {
                      W2(d3, c7, t4);
                    }
                  }
                  break;
                case 5:
                  Lj(r4, r4.return);
                  break;
                case 22:
                  if (r4.memoizedState !== null) {
                    gk(q4);
                    continue;
                  }
              }
              y4 !== null ? (y4.return = r4, V2 = y4) : gk(q4);
            }
            m3 = m3.sibling;
          }
        a:
          for (m3 = null, q4 = a2; ; ) {
            if (q4.tag === 5) {
              if (m3 === null) {
                m3 = q4;
                try {
                  e2 = q4.stateNode, l4 ? (f3 = e2.style, typeof f3.setProperty === "function" ? f3.setProperty("display", "none", "important") : f3.display = "none") : (h3 = q4.stateNode, k3 = q4.memoizedProps.style, g3 = k3 !== void 0 && k3 !== null && k3.hasOwnProperty("display") ? k3.display : null, h3.style.display = rb("display", g3));
                } catch (t4) {
                  W2(a2, a2.return, t4);
                }
              }
            } else if (q4.tag === 6) {
              if (m3 === null)
                try {
                  q4.stateNode.nodeValue = l4 ? "" : q4.memoizedProps;
                } catch (t4) {
                  W2(a2, a2.return, t4);
                }
            } else if ((q4.tag !== 22 && q4.tag !== 23 || q4.memoizedState === null || q4 === a2) && q4.child !== null) {
              q4.child.return = q4;
              q4 = q4.child;
              continue;
            }
            if (q4 === a2)
              break a;
            for (; q4.sibling === null; ) {
              if (q4.return === null || q4.return === a2)
                break a;
              m3 === q4 && (m3 = null);
              q4 = q4.return;
            }
            m3 === q4 && (m3 = null);
            q4.sibling.return = q4.return;
            q4 = q4.sibling;
          }
      }
      break;
    case 19:
      ck(b3, a2);
      ek(a2);
      d3 & 4 && ak(a2);
      break;
    case 21:
      break;
    default:
      ck(b3, a2), ek(a2);
  }
}
function ek(a2) {
  var b3 = a2.flags;
  if (b3 & 2) {
    try {
      a: {
        for (var c7 = a2.return; c7 !== null; ) {
          if (Tj(c7)) {
            var d3 = c7;
            break a;
          }
          c7 = c7.return;
        }
        throw Error(p2(160));
      }
      switch (d3.tag) {
        case 5:
          var e2 = d3.stateNode;
          d3.flags & 32 && (ob(e2, ""), d3.flags &= -33);
          var f3 = Uj(a2);
          Wj(a2, f3, e2);
          break;
        case 3:
        case 4:
          var g3 = d3.stateNode.containerInfo, h3 = Uj(a2);
          Vj(a2, h3, g3);
          break;
        default:
          throw Error(p2(161));
      }
    } catch (k3) {
      W2(a2, a2.return, k3);
    }
    a2.flags &= -3;
  }
  b3 & 4096 && (a2.flags &= -4097);
}
function hk(a2, b3, c7) {
  V2 = a2;
  ik(a2);
}
function ik(a2, b3, c7) {
  for (var d3 = (a2.mode & 1) !== 0; V2 !== null; ) {
    var e2 = V2, f3 = e2.child;
    if (e2.tag === 22 && d3) {
      var g3 = e2.memoizedState !== null || Jj;
      if (!g3) {
        var h3 = e2.alternate, k3 = h3 !== null && h3.memoizedState !== null || U2;
        h3 = Jj;
        var l4 = U2;
        Jj = g3;
        if ((U2 = k3) && !l4)
          for (V2 = e2; V2 !== null; )
            g3 = V2, k3 = g3.child, g3.tag === 22 && g3.memoizedState !== null ? jk(e2) : k3 !== null ? (k3.return = g3, V2 = k3) : jk(e2);
        for (; f3 !== null; )
          V2 = f3, ik(f3), f3 = f3.sibling;
        V2 = e2;
        Jj = h3;
        U2 = l4;
      }
      kk(a2);
    } else
      (e2.subtreeFlags & 8772) !== 0 && f3 !== null ? (f3.return = e2, V2 = f3) : kk(a2);
  }
}
function kk(a2) {
  for (; V2 !== null; ) {
    var b3 = V2;
    if ((b3.flags & 8772) !== 0) {
      var c7 = b3.alternate;
      try {
        if ((b3.flags & 8772) !== 0)
          switch (b3.tag) {
            case 0:
            case 11:
            case 15:
              U2 || Qj(5, b3);
              break;
            case 1:
              var d3 = b3.stateNode;
              if (b3.flags & 4 && !U2)
                if (c7 === null)
                  d3.componentDidMount();
                else {
                  var e2 = b3.elementType === b3.type ? c7.memoizedProps : Ci(b3.type, c7.memoizedProps);
                  d3.componentDidUpdate(e2, c7.memoizedState, d3.__reactInternalSnapshotBeforeUpdate);
                }
              var f3 = b3.updateQueue;
              f3 !== null && sh(b3, f3, d3);
              break;
            case 3:
              var g3 = b3.updateQueue;
              if (g3 !== null) {
                c7 = null;
                if (b3.child !== null)
                  switch (b3.child.tag) {
                    case 5:
                      c7 = b3.child.stateNode;
                      break;
                    case 1:
                      c7 = b3.child.stateNode;
                  }
                sh(b3, g3, c7);
              }
              break;
            case 5:
              var h3 = b3.stateNode;
              if (c7 === null && b3.flags & 4) {
                c7 = h3;
                var k3 = b3.memoizedProps;
                switch (b3.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    k3.autoFocus && c7.focus();
                    break;
                  case "img":
                    k3.src && (c7.src = k3.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (b3.memoizedState === null) {
                var l4 = b3.alternate;
                if (l4 !== null) {
                  var m3 = l4.memoizedState;
                  if (m3 !== null) {
                    var q4 = m3.dehydrated;
                    q4 !== null && bd(q4);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(p2(163));
          }
        U2 || b3.flags & 512 && Rj(b3);
      } catch (r4) {
        W2(b3, b3.return, r4);
      }
    }
    if (b3 === a2) {
      V2 = null;
      break;
    }
    c7 = b3.sibling;
    if (c7 !== null) {
      c7.return = b3.return;
      V2 = c7;
      break;
    }
    V2 = b3.return;
  }
}
function gk(a2) {
  for (; V2 !== null; ) {
    var b3 = V2;
    if (b3 === a2) {
      V2 = null;
      break;
    }
    var c7 = b3.sibling;
    if (c7 !== null) {
      c7.return = b3.return;
      V2 = c7;
      break;
    }
    V2 = b3.return;
  }
}
function jk(a2) {
  for (; V2 !== null; ) {
    var b3 = V2;
    try {
      switch (b3.tag) {
        case 0:
        case 11:
        case 15:
          var c7 = b3.return;
          try {
            Qj(4, b3);
          } catch (k3) {
            W2(b3, c7, k3);
          }
          break;
        case 1:
          var d3 = b3.stateNode;
          if (typeof d3.componentDidMount === "function") {
            var e2 = b3.return;
            try {
              d3.componentDidMount();
            } catch (k3) {
              W2(b3, e2, k3);
            }
          }
          var f3 = b3.return;
          try {
            Rj(b3);
          } catch (k3) {
            W2(b3, f3, k3);
          }
          break;
        case 5:
          var g3 = b3.return;
          try {
            Rj(b3);
          } catch (k3) {
            W2(b3, g3, k3);
          }
      }
    } catch (k3) {
      W2(b3, b3.return, k3);
    }
    if (b3 === a2) {
      V2 = null;
      break;
    }
    var h3 = b3.sibling;
    if (h3 !== null) {
      h3.return = b3.return;
      V2 = h3;
      break;
    }
    V2 = b3.return;
  }
}
var lk = Math.ceil;
var mk = ua.ReactCurrentDispatcher;
var nk = ua.ReactCurrentOwner;
var ok = ua.ReactCurrentBatchConfig;
var K2 = 0;
var Q2 = null;
var Y = null;
var Z = 0;
var fj = 0;
var ej = Uf(0);
var T2 = 0;
var pk = null;
var rh = 0;
var qk = 0;
var rk = 0;
var sk = null;
var tk = null;
var fk = 0;
var Gj = Infinity;
var uk = null;
var Oi = false;
var Pi = null;
var Ri = null;
var vk = false;
var wk = null;
var xk = 0;
var yk = 0;
var zk = null;
var Ak = -1;
var Bk = 0;
function R2() {
  return (K2 & 6) !== 0 ? B2() : Ak !== -1 ? Ak : Ak = B2();
}
function yi(a2) {
  if ((a2.mode & 1) === 0)
    return 1;
  if ((K2 & 2) !== 0 && Z !== 0)
    return Z & -Z;
  if (Kg.transition !== null)
    return Bk === 0 && (Bk = yc()), Bk;
  a2 = C2;
  if (a2 !== 0)
    return a2;
  a2 = window.event;
  a2 = a2 === void 0 ? 16 : jd(a2.type);
  return a2;
}
function gi(a2, b3, c7, d3) {
  if (50 < yk)
    throw yk = 0, zk = null, Error(p2(185));
  Ac(a2, c7, d3);
  if ((K2 & 2) === 0 || a2 !== Q2)
    a2 === Q2 && ((K2 & 2) === 0 && (qk |= c7), T2 === 4 && Ck(a2, Z)), Dk(a2, d3), c7 === 1 && K2 === 0 && (b3.mode & 1) === 0 && (Gj = B2() + 500, fg && jg());
}
function Dk(a2, b3) {
  var c7 = a2.callbackNode;
  wc(a2, b3);
  var d3 = uc(a2, a2 === Q2 ? Z : 0);
  if (d3 === 0)
    c7 !== null && bc(c7), a2.callbackNode = null, a2.callbackPriority = 0;
  else if (b3 = d3 & -d3, a2.callbackPriority !== b3) {
    c7 != null && bc(c7);
    if (b3 === 1)
      a2.tag === 0 ? ig(Ek.bind(null, a2)) : hg(Ek.bind(null, a2)), Jf(function() {
        (K2 & 6) === 0 && jg();
      }), c7 = null;
    else {
      switch (Dc(d3)) {
        case 1:
          c7 = fc;
          break;
        case 4:
          c7 = gc;
          break;
        case 16:
          c7 = hc;
          break;
        case 536870912:
          c7 = jc;
          break;
        default:
          c7 = hc;
      }
      c7 = Fk(c7, Gk.bind(null, a2));
    }
    a2.callbackPriority = b3;
    a2.callbackNode = c7;
  }
}
function Gk(a2, b3) {
  Ak = -1;
  Bk = 0;
  if ((K2 & 6) !== 0)
    throw Error(p2(327));
  var c7 = a2.callbackNode;
  if (Hk() && a2.callbackNode !== c7)
    return null;
  var d3 = uc(a2, a2 === Q2 ? Z : 0);
  if (d3 === 0)
    return null;
  if ((d3 & 30) !== 0 || (d3 & a2.expiredLanes) !== 0 || b3)
    b3 = Ik(a2, d3);
  else {
    b3 = d3;
    var e2 = K2;
    K2 |= 2;
    var f3 = Jk();
    if (Q2 !== a2 || Z !== b3)
      uk = null, Gj = B2() + 500, Kk(a2, b3);
    do
      try {
        Lk();
        break;
      } catch (h3) {
        Mk(a2, h3);
      }
    while (1);
    $g();
    mk.current = f3;
    K2 = e2;
    Y !== null ? b3 = 0 : (Q2 = null, Z = 0, b3 = T2);
  }
  if (b3 !== 0) {
    b3 === 2 && (e2 = xc(a2), e2 !== 0 && (d3 = e2, b3 = Nk(a2, e2)));
    if (b3 === 1)
      throw c7 = pk, Kk(a2, 0), Ck(a2, d3), Dk(a2, B2()), c7;
    if (b3 === 6)
      Ck(a2, d3);
    else {
      e2 = a2.current.alternate;
      if ((d3 & 30) === 0 && !Ok(e2) && (b3 = Ik(a2, d3), b3 === 2 && (f3 = xc(a2), f3 !== 0 && (d3 = f3, b3 = Nk(a2, f3))), b3 === 1))
        throw c7 = pk, Kk(a2, 0), Ck(a2, d3), Dk(a2, B2()), c7;
      a2.finishedWork = e2;
      a2.finishedLanes = d3;
      switch (b3) {
        case 0:
        case 1:
          throw Error(p2(345));
        case 2:
          Pk(a2, tk, uk);
          break;
        case 3:
          Ck(a2, d3);
          if ((d3 & 130023424) === d3 && (b3 = fk + 500 - B2(), 10 < b3)) {
            if (uc(a2, 0) !== 0)
              break;
            e2 = a2.suspendedLanes;
            if ((e2 & d3) !== d3) {
              R2();
              a2.pingedLanes |= a2.suspendedLanes & e2;
              break;
            }
            a2.timeoutHandle = Ff(Pk.bind(null, a2, tk, uk), b3);
            break;
          }
          Pk(a2, tk, uk);
          break;
        case 4:
          Ck(a2, d3);
          if ((d3 & 4194240) === d3)
            break;
          b3 = a2.eventTimes;
          for (e2 = -1; 0 < d3; ) {
            var g3 = 31 - oc(d3);
            f3 = 1 << g3;
            g3 = b3[g3];
            g3 > e2 && (e2 = g3);
            d3 &= ~f3;
          }
          d3 = e2;
          d3 = B2() - d3;
          d3 = (120 > d3 ? 120 : 480 > d3 ? 480 : 1080 > d3 ? 1080 : 1920 > d3 ? 1920 : 3e3 > d3 ? 3e3 : 4320 > d3 ? 4320 : 1960 * lk(d3 / 1960)) - d3;
          if (10 < d3) {
            a2.timeoutHandle = Ff(Pk.bind(null, a2, tk, uk), d3);
            break;
          }
          Pk(a2, tk, uk);
          break;
        case 5:
          Pk(a2, tk, uk);
          break;
        default:
          throw Error(p2(329));
      }
    }
  }
  Dk(a2, B2());
  return a2.callbackNode === c7 ? Gk.bind(null, a2) : null;
}
function Nk(a2, b3) {
  var c7 = sk;
  a2.current.memoizedState.isDehydrated && (Kk(a2, b3).flags |= 256);
  a2 = Ik(a2, b3);
  a2 !== 2 && (b3 = tk, tk = c7, b3 !== null && Fj(b3));
  return a2;
}
function Fj(a2) {
  tk === null ? tk = a2 : tk.push.apply(tk, a2);
}
function Ok(a2) {
  for (var b3 = a2; ; ) {
    if (b3.flags & 16384) {
      var c7 = b3.updateQueue;
      if (c7 !== null && (c7 = c7.stores, c7 !== null))
        for (var d3 = 0; d3 < c7.length; d3++) {
          var e2 = c7[d3], f3 = e2.getSnapshot;
          e2 = e2.value;
          try {
            if (!He(f3(), e2))
              return false;
          } catch (g3) {
            return false;
          }
        }
    }
    c7 = b3.child;
    if (b3.subtreeFlags & 16384 && c7 !== null)
      c7.return = b3, b3 = c7;
    else {
      if (b3 === a2)
        break;
      for (; b3.sibling === null; ) {
        if (b3.return === null || b3.return === a2)
          return true;
        b3 = b3.return;
      }
      b3.sibling.return = b3.return;
      b3 = b3.sibling;
    }
  }
  return true;
}
function Ck(a2, b3) {
  b3 &= ~rk;
  b3 &= ~qk;
  a2.suspendedLanes |= b3;
  a2.pingedLanes &= ~b3;
  for (a2 = a2.expirationTimes; 0 < b3; ) {
    var c7 = 31 - oc(b3), d3 = 1 << c7;
    a2[c7] = -1;
    b3 &= ~d3;
  }
}
function Ek(a2) {
  if ((K2 & 6) !== 0)
    throw Error(p2(327));
  Hk();
  var b3 = uc(a2, 0);
  if ((b3 & 1) === 0)
    return Dk(a2, B2()), null;
  var c7 = Ik(a2, b3);
  if (a2.tag !== 0 && c7 === 2) {
    var d3 = xc(a2);
    d3 !== 0 && (b3 = d3, c7 = Nk(a2, d3));
  }
  if (c7 === 1)
    throw c7 = pk, Kk(a2, 0), Ck(a2, b3), Dk(a2, B2()), c7;
  if (c7 === 6)
    throw Error(p2(345));
  a2.finishedWork = a2.current.alternate;
  a2.finishedLanes = b3;
  Pk(a2, tk, uk);
  Dk(a2, B2());
  return null;
}
function Qk(a2, b3) {
  var c7 = K2;
  K2 |= 1;
  try {
    return a2(b3);
  } finally {
    K2 = c7, K2 === 0 && (Gj = B2() + 500, fg && jg());
  }
}
function Rk(a2) {
  wk !== null && wk.tag === 0 && (K2 & 6) === 0 && Hk();
  var b3 = K2;
  K2 |= 1;
  var c7 = ok.transition, d3 = C2;
  try {
    if (ok.transition = null, C2 = 1, a2)
      return a2();
  } finally {
    C2 = d3, ok.transition = c7, K2 = b3, (K2 & 6) === 0 && jg();
  }
}
function Hj() {
  fj = ej.current;
  E2(ej);
}
function Kk(a2, b3) {
  a2.finishedWork = null;
  a2.finishedLanes = 0;
  var c7 = a2.timeoutHandle;
  c7 !== -1 && (a2.timeoutHandle = -1, Gf(c7));
  if (Y !== null)
    for (c7 = Y.return; c7 !== null; ) {
      var d3 = c7;
      wg(d3);
      switch (d3.tag) {
        case 1:
          d3 = d3.type.childContextTypes;
          d3 !== null && d3 !== void 0 && $f();
          break;
        case 3:
          zh();
          E2(Wf);
          E2(H2);
          Eh();
          break;
        case 5:
          Bh(d3);
          break;
        case 4:
          zh();
          break;
        case 13:
          E2(L2);
          break;
        case 19:
          E2(L2);
          break;
        case 10:
          ah(d3.type._context);
          break;
        case 22:
        case 23:
          Hj();
      }
      c7 = c7.return;
    }
  Q2 = a2;
  Y = a2 = Pg(a2.current, null);
  Z = fj = b3;
  T2 = 0;
  pk = null;
  rk = qk = rh = 0;
  tk = sk = null;
  if (fh !== null) {
    for (b3 = 0; b3 < fh.length; b3++)
      if (c7 = fh[b3], d3 = c7.interleaved, d3 !== null) {
        c7.interleaved = null;
        var e2 = d3.next, f3 = c7.pending;
        if (f3 !== null) {
          var g3 = f3.next;
          f3.next = e2;
          d3.next = g3;
        }
        c7.pending = d3;
      }
    fh = null;
  }
  return a2;
}
function Mk(a2, b3) {
  do {
    var c7 = Y;
    try {
      $g();
      Fh.current = Rh;
      if (Ih) {
        for (var d3 = M2.memoizedState; d3 !== null; ) {
          var e2 = d3.queue;
          e2 !== null && (e2.pending = null);
          d3 = d3.next;
        }
        Ih = false;
      }
      Hh = 0;
      O2 = N2 = M2 = null;
      Jh = false;
      Kh = 0;
      nk.current = null;
      if (c7 === null || c7.return === null) {
        T2 = 1;
        pk = b3;
        Y = null;
        break;
      }
      a: {
        var f3 = a2, g3 = c7.return, h3 = c7, k3 = b3;
        b3 = Z;
        h3.flags |= 32768;
        if (k3 !== null && typeof k3 === "object" && typeof k3.then === "function") {
          var l4 = k3, m3 = h3, q4 = m3.tag;
          if ((m3.mode & 1) === 0 && (q4 === 0 || q4 === 11 || q4 === 15)) {
            var r4 = m3.alternate;
            r4 ? (m3.updateQueue = r4.updateQueue, m3.memoizedState = r4.memoizedState, m3.lanes = r4.lanes) : (m3.updateQueue = null, m3.memoizedState = null);
          }
          var y4 = Ui(g3);
          if (y4 !== null) {
            y4.flags &= -257;
            Vi(y4, g3, h3, f3, b3);
            y4.mode & 1 && Si(f3, l4, b3);
            b3 = y4;
            k3 = l4;
            var n4 = b3.updateQueue;
            if (n4 === null) {
              var t4 = new Set();
              t4.add(k3);
              b3.updateQueue = t4;
            } else
              n4.add(k3);
            break a;
          } else {
            if ((b3 & 1) === 0) {
              Si(f3, l4, b3);
              tj();
              break a;
            }
            k3 = Error(p2(426));
          }
        } else if (I2 && h3.mode & 1) {
          var J4 = Ui(g3);
          if (J4 !== null) {
            (J4.flags & 65536) === 0 && (J4.flags |= 256);
            Vi(J4, g3, h3, f3, b3);
            Jg(Ji(k3, h3));
            break a;
          }
        }
        f3 = k3 = Ji(k3, h3);
        T2 !== 4 && (T2 = 2);
        sk === null ? sk = [f3] : sk.push(f3);
        f3 = g3;
        do {
          switch (f3.tag) {
            case 3:
              f3.flags |= 65536;
              b3 &= -b3;
              f3.lanes |= b3;
              var x4 = Ni(f3, k3, b3);
              ph(f3, x4);
              break a;
            case 1:
              h3 = k3;
              var w4 = f3.type, u3 = f3.stateNode;
              if ((f3.flags & 128) === 0 && (typeof w4.getDerivedStateFromError === "function" || u3 !== null && typeof u3.componentDidCatch === "function" && (Ri === null || !Ri.has(u3)))) {
                f3.flags |= 65536;
                b3 &= -b3;
                f3.lanes |= b3;
                var F4 = Qi(f3, h3, b3);
                ph(f3, F4);
                break a;
              }
          }
          f3 = f3.return;
        } while (f3 !== null);
      }
      Sk(c7);
    } catch (na) {
      b3 = na;
      Y === c7 && c7 !== null && (Y = c7 = c7.return);
      continue;
    }
    break;
  } while (1);
}
function Jk() {
  var a2 = mk.current;
  mk.current = Rh;
  return a2 === null ? Rh : a2;
}
function tj() {
  if (T2 === 0 || T2 === 3 || T2 === 2)
    T2 = 4;
  Q2 === null || (rh & 268435455) === 0 && (qk & 268435455) === 0 || Ck(Q2, Z);
}
function Ik(a2, b3) {
  var c7 = K2;
  K2 |= 2;
  var d3 = Jk();
  if (Q2 !== a2 || Z !== b3)
    uk = null, Kk(a2, b3);
  do
    try {
      Tk();
      break;
    } catch (e2) {
      Mk(a2, e2);
    }
  while (1);
  $g();
  K2 = c7;
  mk.current = d3;
  if (Y !== null)
    throw Error(p2(261));
  Q2 = null;
  Z = 0;
  return T2;
}
function Tk() {
  for (; Y !== null; )
    Uk(Y);
}
function Lk() {
  for (; Y !== null && !cc(); )
    Uk(Y);
}
function Uk(a2) {
  var b3 = Vk(a2.alternate, a2, fj);
  a2.memoizedProps = a2.pendingProps;
  b3 === null ? Sk(a2) : Y = b3;
  nk.current = null;
}
function Sk(a2) {
  var b3 = a2;
  do {
    var c7 = b3.alternate;
    a2 = b3.return;
    if ((b3.flags & 32768) === 0) {
      if (c7 = Ej(c7, b3, fj), c7 !== null) {
        Y = c7;
        return;
      }
    } else {
      c7 = Ij(c7, b3);
      if (c7 !== null) {
        c7.flags &= 32767;
        Y = c7;
        return;
      }
      if (a2 !== null)
        a2.flags |= 32768, a2.subtreeFlags = 0, a2.deletions = null;
      else {
        T2 = 6;
        Y = null;
        return;
      }
    }
    b3 = b3.sibling;
    if (b3 !== null) {
      Y = b3;
      return;
    }
    Y = b3 = a2;
  } while (b3 !== null);
  T2 === 0 && (T2 = 5);
}
function Pk(a2, b3, c7) {
  var d3 = C2, e2 = ok.transition;
  try {
    ok.transition = null, C2 = 1, Wk(a2, b3, c7, d3);
  } finally {
    ok.transition = e2, C2 = d3;
  }
  return null;
}
function Wk(a2, b3, c7, d3) {
  do
    Hk();
  while (wk !== null);
  if ((K2 & 6) !== 0)
    throw Error(p2(327));
  c7 = a2.finishedWork;
  var e2 = a2.finishedLanes;
  if (c7 === null)
    return null;
  a2.finishedWork = null;
  a2.finishedLanes = 0;
  if (c7 === a2.current)
    throw Error(p2(177));
  a2.callbackNode = null;
  a2.callbackPriority = 0;
  var f3 = c7.lanes | c7.childLanes;
  Bc(a2, f3);
  a2 === Q2 && (Y = Q2 = null, Z = 0);
  (c7.subtreeFlags & 2064) === 0 && (c7.flags & 2064) === 0 || vk || (vk = true, Fk(hc, function() {
    Hk();
    return null;
  }));
  f3 = (c7.flags & 15990) !== 0;
  if ((c7.subtreeFlags & 15990) !== 0 || f3) {
    f3 = ok.transition;
    ok.transition = null;
    var g3 = C2;
    C2 = 1;
    var h3 = K2;
    K2 |= 4;
    nk.current = null;
    Oj(a2, c7);
    dk(c7, a2);
    Oe(Df);
    dd = !!Cf;
    Df = Cf = null;
    a2.current = c7;
    hk(c7);
    dc();
    K2 = h3;
    C2 = g3;
    ok.transition = f3;
  } else
    a2.current = c7;
  vk && (vk = false, wk = a2, xk = e2);
  f3 = a2.pendingLanes;
  f3 === 0 && (Ri = null);
  mc(c7.stateNode);
  Dk(a2, B2());
  if (b3 !== null)
    for (d3 = a2.onRecoverableError, c7 = 0; c7 < b3.length; c7++)
      e2 = b3[c7], d3(e2.value, {componentStack: e2.stack, digest: e2.digest});
  if (Oi)
    throw Oi = false, a2 = Pi, Pi = null, a2;
  (xk & 1) !== 0 && a2.tag !== 0 && Hk();
  f3 = a2.pendingLanes;
  (f3 & 1) !== 0 ? a2 === zk ? yk++ : (yk = 0, zk = a2) : yk = 0;
  jg();
  return null;
}
function Hk() {
  if (wk !== null) {
    var a2 = Dc(xk), b3 = ok.transition, c7 = C2;
    try {
      ok.transition = null;
      C2 = 16 > a2 ? 16 : a2;
      if (wk === null)
        var d3 = false;
      else {
        a2 = wk;
        wk = null;
        xk = 0;
        if ((K2 & 6) !== 0)
          throw Error(p2(331));
        var e2 = K2;
        K2 |= 4;
        for (V2 = a2.current; V2 !== null; ) {
          var f3 = V2, g3 = f3.child;
          if ((V2.flags & 16) !== 0) {
            var h3 = f3.deletions;
            if (h3 !== null) {
              for (var k3 = 0; k3 < h3.length; k3++) {
                var l4 = h3[k3];
                for (V2 = l4; V2 !== null; ) {
                  var m3 = V2;
                  switch (m3.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Pj(8, m3, f3);
                  }
                  var q4 = m3.child;
                  if (q4 !== null)
                    q4.return = m3, V2 = q4;
                  else
                    for (; V2 !== null; ) {
                      m3 = V2;
                      var r4 = m3.sibling, y4 = m3.return;
                      Sj(m3);
                      if (m3 === l4) {
                        V2 = null;
                        break;
                      }
                      if (r4 !== null) {
                        r4.return = y4;
                        V2 = r4;
                        break;
                      }
                      V2 = y4;
                    }
                }
              }
              var n4 = f3.alternate;
              if (n4 !== null) {
                var t4 = n4.child;
                if (t4 !== null) {
                  n4.child = null;
                  do {
                    var J4 = t4.sibling;
                    t4.sibling = null;
                    t4 = J4;
                  } while (t4 !== null);
                }
              }
              V2 = f3;
            }
          }
          if ((f3.subtreeFlags & 2064) !== 0 && g3 !== null)
            g3.return = f3, V2 = g3;
          else
            b:
              for (; V2 !== null; ) {
                f3 = V2;
                if ((f3.flags & 2048) !== 0)
                  switch (f3.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Pj(9, f3, f3.return);
                  }
                var x4 = f3.sibling;
                if (x4 !== null) {
                  x4.return = f3.return;
                  V2 = x4;
                  break b;
                }
                V2 = f3.return;
              }
        }
        var w4 = a2.current;
        for (V2 = w4; V2 !== null; ) {
          g3 = V2;
          var u3 = g3.child;
          if ((g3.subtreeFlags & 2064) !== 0 && u3 !== null)
            u3.return = g3, V2 = u3;
          else
            b:
              for (g3 = w4; V2 !== null; ) {
                h3 = V2;
                if ((h3.flags & 2048) !== 0)
                  try {
                    switch (h3.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Qj(9, h3);
                    }
                  } catch (na) {
                    W2(h3, h3.return, na);
                  }
                if (h3 === g3) {
                  V2 = null;
                  break b;
                }
                var F4 = h3.sibling;
                if (F4 !== null) {
                  F4.return = h3.return;
                  V2 = F4;
                  break b;
                }
                V2 = h3.return;
              }
        }
        K2 = e2;
        jg();
        if (lc && typeof lc.onPostCommitFiberRoot === "function")
          try {
            lc.onPostCommitFiberRoot(kc, a2);
          } catch (na) {
          }
        d3 = true;
      }
      return d3;
    } finally {
      C2 = c7, ok.transition = b3;
    }
  }
  return false;
}
function Xk(a2, b3, c7) {
  b3 = Ji(c7, b3);
  b3 = Ni(a2, b3, 1);
  a2 = nh(a2, b3, 1);
  b3 = R2();
  a2 !== null && (Ac(a2, 1, b3), Dk(a2, b3));
}
function W2(a2, b3, c7) {
  if (a2.tag === 3)
    Xk(a2, a2, c7);
  else
    for (; b3 !== null; ) {
      if (b3.tag === 3) {
        Xk(b3, a2, c7);
        break;
      } else if (b3.tag === 1) {
        var d3 = b3.stateNode;
        if (typeof b3.type.getDerivedStateFromError === "function" || typeof d3.componentDidCatch === "function" && (Ri === null || !Ri.has(d3))) {
          a2 = Ji(c7, a2);
          a2 = Qi(b3, a2, 1);
          b3 = nh(b3, a2, 1);
          a2 = R2();
          b3 !== null && (Ac(b3, 1, a2), Dk(b3, a2));
          break;
        }
      }
      b3 = b3.return;
    }
}
function Ti(a2, b3, c7) {
  var d3 = a2.pingCache;
  d3 !== null && d3.delete(b3);
  b3 = R2();
  a2.pingedLanes |= a2.suspendedLanes & c7;
  Q2 === a2 && (Z & c7) === c7 && (T2 === 4 || T2 === 3 && (Z & 130023424) === Z && 500 > B2() - fk ? Kk(a2, 0) : rk |= c7);
  Dk(a2, b3);
}
function Yk(a2, b3) {
  b3 === 0 && ((a2.mode & 1) === 0 ? b3 = 1 : (b3 = sc, sc <<= 1, (sc & 130023424) === 0 && (sc = 4194304)));
  var c7 = R2();
  a2 = ih(a2, b3);
  a2 !== null && (Ac(a2, b3, c7), Dk(a2, c7));
}
function uj(a2) {
  var b3 = a2.memoizedState, c7 = 0;
  b3 !== null && (c7 = b3.retryLane);
  Yk(a2, c7);
}
function bk(a2, b3) {
  var c7 = 0;
  switch (a2.tag) {
    case 13:
      var d3 = a2.stateNode;
      var e2 = a2.memoizedState;
      e2 !== null && (c7 = e2.retryLane);
      break;
    case 19:
      d3 = a2.stateNode;
      break;
    default:
      throw Error(p2(314));
  }
  d3 !== null && d3.delete(b3);
  Yk(a2, c7);
}
var Vk;
Vk = function(a2, b3, c7) {
  if (a2 !== null)
    if (a2.memoizedProps !== b3.pendingProps || Wf.current)
      dh = true;
    else {
      if ((a2.lanes & c7) === 0 && (b3.flags & 128) === 0)
        return dh = false, yj(a2, b3, c7);
      dh = (a2.flags & 131072) !== 0 ? true : false;
    }
  else
    dh = false, I2 && (b3.flags & 1048576) !== 0 && ug(b3, ng, b3.index);
  b3.lanes = 0;
  switch (b3.tag) {
    case 2:
      var d3 = b3.type;
      ij(a2, b3);
      a2 = b3.pendingProps;
      var e2 = Yf(b3, H2.current);
      ch(b3, c7);
      e2 = Nh(null, b3, d3, a2, e2, c7);
      var f3 = Sh();
      b3.flags |= 1;
      typeof e2 === "object" && e2 !== null && typeof e2.render === "function" && e2.$$typeof === void 0 ? (b3.tag = 1, b3.memoizedState = null, b3.updateQueue = null, Zf(d3) ? (f3 = true, cg(b3)) : f3 = false, b3.memoizedState = e2.state !== null && e2.state !== void 0 ? e2.state : null, kh(b3), e2.updater = Ei, b3.stateNode = e2, e2._reactInternals = b3, Ii(b3, d3, a2, c7), b3 = jj(null, b3, d3, true, f3, c7)) : (b3.tag = 0, I2 && f3 && vg(b3), Xi(null, b3, e2, c7), b3 = b3.child);
      return b3;
    case 16:
      d3 = b3.elementType;
      a: {
        ij(a2, b3);
        a2 = b3.pendingProps;
        e2 = d3._init;
        d3 = e2(d3._payload);
        b3.type = d3;
        e2 = b3.tag = Zk(d3);
        a2 = Ci(d3, a2);
        switch (e2) {
          case 0:
            b3 = cj(null, b3, d3, a2, c7);
            break a;
          case 1:
            b3 = hj(null, b3, d3, a2, c7);
            break a;
          case 11:
            b3 = Yi(null, b3, d3, a2, c7);
            break a;
          case 14:
            b3 = $i(null, b3, d3, Ci(d3.type, a2), c7);
            break a;
        }
        throw Error(p2(306, d3, ""));
      }
      return b3;
    case 0:
      return d3 = b3.type, e2 = b3.pendingProps, e2 = b3.elementType === d3 ? e2 : Ci(d3, e2), cj(a2, b3, d3, e2, c7);
    case 1:
      return d3 = b3.type, e2 = b3.pendingProps, e2 = b3.elementType === d3 ? e2 : Ci(d3, e2), hj(a2, b3, d3, e2, c7);
    case 3:
      a: {
        kj(b3);
        if (a2 === null)
          throw Error(p2(387));
        d3 = b3.pendingProps;
        f3 = b3.memoizedState;
        e2 = f3.element;
        lh(a2, b3);
        qh(b3, d3, null, c7);
        var g3 = b3.memoizedState;
        d3 = g3.element;
        if (f3.isDehydrated)
          if (f3 = {element: d3, isDehydrated: false, cache: g3.cache, pendingSuspenseBoundaries: g3.pendingSuspenseBoundaries, transitions: g3.transitions}, b3.updateQueue.baseState = f3, b3.memoizedState = f3, b3.flags & 256) {
            e2 = Ji(Error(p2(423)), b3);
            b3 = lj(a2, b3, d3, c7, e2);
            break a;
          } else if (d3 !== e2) {
            e2 = Ji(Error(p2(424)), b3);
            b3 = lj(a2, b3, d3, c7, e2);
            break a;
          } else
            for (yg = Lf(b3.stateNode.containerInfo.firstChild), xg = b3, I2 = true, zg = null, c7 = Vg(b3, null, d3, c7), b3.child = c7; c7; )
              c7.flags = c7.flags & -3 | 4096, c7 = c7.sibling;
        else {
          Ig();
          if (d3 === e2) {
            b3 = Zi(a2, b3, c7);
            break a;
          }
          Xi(a2, b3, d3, c7);
        }
        b3 = b3.child;
      }
      return b3;
    case 5:
      return Ah(b3), a2 === null && Eg(b3), d3 = b3.type, e2 = b3.pendingProps, f3 = a2 !== null ? a2.memoizedProps : null, g3 = e2.children, Ef(d3, e2) ? g3 = null : f3 !== null && Ef(d3, f3) && (b3.flags |= 32), gj(a2, b3), Xi(a2, b3, g3, c7), b3.child;
    case 6:
      return a2 === null && Eg(b3), null;
    case 13:
      return oj(a2, b3, c7);
    case 4:
      return yh(b3, b3.stateNode.containerInfo), d3 = b3.pendingProps, a2 === null ? b3.child = Ug(b3, null, d3, c7) : Xi(a2, b3, d3, c7), b3.child;
    case 11:
      return d3 = b3.type, e2 = b3.pendingProps, e2 = b3.elementType === d3 ? e2 : Ci(d3, e2), Yi(a2, b3, d3, e2, c7);
    case 7:
      return Xi(a2, b3, b3.pendingProps, c7), b3.child;
    case 8:
      return Xi(a2, b3, b3.pendingProps.children, c7), b3.child;
    case 12:
      return Xi(a2, b3, b3.pendingProps.children, c7), b3.child;
    case 10:
      a: {
        d3 = b3.type._context;
        e2 = b3.pendingProps;
        f3 = b3.memoizedProps;
        g3 = e2.value;
        G2(Wg, d3._currentValue);
        d3._currentValue = g3;
        if (f3 !== null)
          if (He(f3.value, g3)) {
            if (f3.children === e2.children && !Wf.current) {
              b3 = Zi(a2, b3, c7);
              break a;
            }
          } else
            for (f3 = b3.child, f3 !== null && (f3.return = b3); f3 !== null; ) {
              var h3 = f3.dependencies;
              if (h3 !== null) {
                g3 = f3.child;
                for (var k3 = h3.firstContext; k3 !== null; ) {
                  if (k3.context === d3) {
                    if (f3.tag === 1) {
                      k3 = mh(-1, c7 & -c7);
                      k3.tag = 2;
                      var l4 = f3.updateQueue;
                      if (l4 !== null) {
                        l4 = l4.shared;
                        var m3 = l4.pending;
                        m3 === null ? k3.next = k3 : (k3.next = m3.next, m3.next = k3);
                        l4.pending = k3;
                      }
                    }
                    f3.lanes |= c7;
                    k3 = f3.alternate;
                    k3 !== null && (k3.lanes |= c7);
                    bh(f3.return, c7, b3);
                    h3.lanes |= c7;
                    break;
                  }
                  k3 = k3.next;
                }
              } else if (f3.tag === 10)
                g3 = f3.type === b3.type ? null : f3.child;
              else if (f3.tag === 18) {
                g3 = f3.return;
                if (g3 === null)
                  throw Error(p2(341));
                g3.lanes |= c7;
                h3 = g3.alternate;
                h3 !== null && (h3.lanes |= c7);
                bh(g3, c7, b3);
                g3 = f3.sibling;
              } else
                g3 = f3.child;
              if (g3 !== null)
                g3.return = f3;
              else
                for (g3 = f3; g3 !== null; ) {
                  if (g3 === b3) {
                    g3 = null;
                    break;
                  }
                  f3 = g3.sibling;
                  if (f3 !== null) {
                    f3.return = g3.return;
                    g3 = f3;
                    break;
                  }
                  g3 = g3.return;
                }
              f3 = g3;
            }
        Xi(a2, b3, e2.children, c7);
        b3 = b3.child;
      }
      return b3;
    case 9:
      return e2 = b3.type, d3 = b3.pendingProps.children, ch(b3, c7), e2 = eh(e2), d3 = d3(e2), b3.flags |= 1, Xi(a2, b3, d3, c7), b3.child;
    case 14:
      return d3 = b3.type, e2 = Ci(d3, b3.pendingProps), e2 = Ci(d3.type, e2), $i(a2, b3, d3, e2, c7);
    case 15:
      return bj(a2, b3, b3.type, b3.pendingProps, c7);
    case 17:
      return d3 = b3.type, e2 = b3.pendingProps, e2 = b3.elementType === d3 ? e2 : Ci(d3, e2), ij(a2, b3), b3.tag = 1, Zf(d3) ? (a2 = true, cg(b3)) : a2 = false, ch(b3, c7), Gi(b3, d3, e2), Ii(b3, d3, e2, c7), jj(null, b3, d3, true, a2, c7);
    case 19:
      return xj(a2, b3, c7);
    case 22:
      return dj(a2, b3, c7);
  }
  throw Error(p2(156, b3.tag));
};
function Fk(a2, b3) {
  return ac(a2, b3);
}
function $k(a2, b3, c7, d3) {
  this.tag = a2;
  this.key = c7;
  this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
  this.index = 0;
  this.ref = null;
  this.pendingProps = b3;
  this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
  this.mode = d3;
  this.subtreeFlags = this.flags = 0;
  this.deletions = null;
  this.childLanes = this.lanes = 0;
  this.alternate = null;
}
function Bg(a2, b3, c7, d3) {
  return new $k(a2, b3, c7, d3);
}
function aj(a2) {
  a2 = a2.prototype;
  return !(!a2 || !a2.isReactComponent);
}
function Zk(a2) {
  if (typeof a2 === "function")
    return aj(a2) ? 1 : 0;
  if (a2 !== void 0 && a2 !== null) {
    a2 = a2.$$typeof;
    if (a2 === Da)
      return 11;
    if (a2 === Ga)
      return 14;
  }
  return 2;
}
function Pg(a2, b3) {
  var c7 = a2.alternate;
  c7 === null ? (c7 = Bg(a2.tag, b3, a2.key, a2.mode), c7.elementType = a2.elementType, c7.type = a2.type, c7.stateNode = a2.stateNode, c7.alternate = a2, a2.alternate = c7) : (c7.pendingProps = b3, c7.type = a2.type, c7.flags = 0, c7.subtreeFlags = 0, c7.deletions = null);
  c7.flags = a2.flags & 14680064;
  c7.childLanes = a2.childLanes;
  c7.lanes = a2.lanes;
  c7.child = a2.child;
  c7.memoizedProps = a2.memoizedProps;
  c7.memoizedState = a2.memoizedState;
  c7.updateQueue = a2.updateQueue;
  b3 = a2.dependencies;
  c7.dependencies = b3 === null ? null : {lanes: b3.lanes, firstContext: b3.firstContext};
  c7.sibling = a2.sibling;
  c7.index = a2.index;
  c7.ref = a2.ref;
  return c7;
}
function Rg(a2, b3, c7, d3, e2, f3) {
  var g3 = 2;
  d3 = a2;
  if (typeof a2 === "function")
    aj(a2) && (g3 = 1);
  else if (typeof a2 === "string")
    g3 = 5;
  else
    a:
      switch (a2) {
        case ya:
          return Tg(c7.children, e2, f3, b3);
        case za:
          g3 = 8;
          e2 |= 8;
          break;
        case Aa:
          return a2 = Bg(12, c7, b3, e2 | 2), a2.elementType = Aa, a2.lanes = f3, a2;
        case Ea:
          return a2 = Bg(13, c7, b3, e2), a2.elementType = Ea, a2.lanes = f3, a2;
        case Fa:
          return a2 = Bg(19, c7, b3, e2), a2.elementType = Fa, a2.lanes = f3, a2;
        case Ia:
          return pj(c7, e2, f3, b3);
        default:
          if (typeof a2 === "object" && a2 !== null)
            switch (a2.$$typeof) {
              case Ba:
                g3 = 10;
                break a;
              case Ca:
                g3 = 9;
                break a;
              case Da:
                g3 = 11;
                break a;
              case Ga:
                g3 = 14;
                break a;
              case Ha:
                g3 = 16;
                d3 = null;
                break a;
            }
          throw Error(p2(130, a2 == null ? a2 : typeof a2, ""));
      }
  b3 = Bg(g3, c7, b3, e2);
  b3.elementType = a2;
  b3.type = d3;
  b3.lanes = f3;
  return b3;
}
function Tg(a2, b3, c7, d3) {
  a2 = Bg(7, a2, d3, b3);
  a2.lanes = c7;
  return a2;
}
function pj(a2, b3, c7, d3) {
  a2 = Bg(22, a2, d3, b3);
  a2.elementType = Ia;
  a2.lanes = c7;
  a2.stateNode = {isHidden: false};
  return a2;
}
function Qg(a2, b3, c7) {
  a2 = Bg(6, a2, null, b3);
  a2.lanes = c7;
  return a2;
}
function Sg(a2, b3, c7) {
  b3 = Bg(4, a2.children !== null ? a2.children : [], a2.key, b3);
  b3.lanes = c7;
  b3.stateNode = {containerInfo: a2.containerInfo, pendingChildren: null, implementation: a2.implementation};
  return b3;
}
function al(a2, b3, c7, d3, e2) {
  this.tag = b3;
  this.containerInfo = a2;
  this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
  this.timeoutHandle = -1;
  this.callbackNode = this.pendingContext = this.context = null;
  this.callbackPriority = 0;
  this.eventTimes = zc(0);
  this.expirationTimes = zc(-1);
  this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
  this.entanglements = zc(0);
  this.identifierPrefix = d3;
  this.onRecoverableError = e2;
  this.mutableSourceEagerHydrationData = null;
}
function bl(a2, b3, c7, d3, e2, f3, g3, h3, k3) {
  a2 = new al(a2, b3, c7, h3, k3);
  b3 === 1 ? (b3 = 1, f3 === true && (b3 |= 8)) : b3 = 0;
  f3 = Bg(3, null, null, b3);
  a2.current = f3;
  f3.stateNode = a2;
  f3.memoizedState = {element: d3, isDehydrated: c7, cache: null, transitions: null, pendingSuspenseBoundaries: null};
  kh(f3);
  return a2;
}
function cl(a2, b3, c7) {
  var d3 = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {$$typeof: wa, key: d3 == null ? null : "" + d3, children: a2, containerInfo: b3, implementation: c7};
}
function dl(a2) {
  if (!a2)
    return Vf;
  a2 = a2._reactInternals;
  a: {
    if (Vb(a2) !== a2 || a2.tag !== 1)
      throw Error(p2(170));
    var b3 = a2;
    do {
      switch (b3.tag) {
        case 3:
          b3 = b3.stateNode.context;
          break a;
        case 1:
          if (Zf(b3.type)) {
            b3 = b3.stateNode.__reactInternalMemoizedMergedChildContext;
            break a;
          }
      }
      b3 = b3.return;
    } while (b3 !== null);
    throw Error(p2(171));
  }
  if (a2.tag === 1) {
    var c7 = a2.type;
    if (Zf(c7))
      return bg(a2, c7, b3);
  }
  return b3;
}
function el(a2, b3, c7, d3, e2, f3, g3, h3, k3) {
  a2 = bl(c7, d3, true, a2, e2, f3, g3, h3, k3);
  a2.context = dl(null);
  c7 = a2.current;
  d3 = R2();
  e2 = yi(c7);
  f3 = mh(d3, e2);
  f3.callback = b3 !== void 0 && b3 !== null ? b3 : null;
  nh(c7, f3, e2);
  a2.current.lanes = e2;
  Ac(a2, e2, d3);
  Dk(a2, d3);
  return a2;
}
function fl(a2, b3, c7, d3) {
  var e2 = b3.current, f3 = R2(), g3 = yi(e2);
  c7 = dl(c7);
  b3.context === null ? b3.context = c7 : b3.pendingContext = c7;
  b3 = mh(f3, g3);
  b3.payload = {element: a2};
  d3 = d3 === void 0 ? null : d3;
  d3 !== null && (b3.callback = d3);
  a2 = nh(e2, b3, g3);
  a2 !== null && (gi(a2, e2, g3, f3), oh(a2, e2, g3));
  return g3;
}
function gl(a2) {
  a2 = a2.current;
  if (!a2.child)
    return null;
  switch (a2.child.tag) {
    case 5:
      return a2.child.stateNode;
    default:
      return a2.child.stateNode;
  }
}
function hl(a2, b3) {
  a2 = a2.memoizedState;
  if (a2 !== null && a2.dehydrated !== null) {
    var c7 = a2.retryLane;
    a2.retryLane = c7 !== 0 && c7 < b3 ? c7 : b3;
  }
}
function il(a2, b3) {
  hl(a2, b3);
  (a2 = a2.alternate) && hl(a2, b3);
}
function jl() {
  return null;
}
var kl = typeof reportError === "function" ? reportError : function(a2) {
  console.error(a2);
};
function ll(a2) {
  this._internalRoot = a2;
}
ml.prototype.render = ll.prototype.render = function(a2) {
  var b3 = this._internalRoot;
  if (b3 === null)
    throw Error(p2(409));
  fl(a2, b3, null, null);
};
ml.prototype.unmount = ll.prototype.unmount = function() {
  var a2 = this._internalRoot;
  if (a2 !== null) {
    this._internalRoot = null;
    var b3 = a2.containerInfo;
    Rk(function() {
      fl(null, a2, null, null);
    });
    b3[uf] = null;
  }
};
function ml(a2) {
  this._internalRoot = a2;
}
ml.prototype.unstable_scheduleHydration = function(a2) {
  if (a2) {
    var b3 = Hc();
    a2 = {blockedOn: null, target: a2, priority: b3};
    for (var c7 = 0; c7 < Qc.length && b3 !== 0 && b3 < Qc[c7].priority; c7++)
      ;
    Qc.splice(c7, 0, a2);
    c7 === 0 && Vc(a2);
  }
};
function nl(a2) {
  return !(!a2 || a2.nodeType !== 1 && a2.nodeType !== 9 && a2.nodeType !== 11);
}
function ol(a2) {
  return !(!a2 || a2.nodeType !== 1 && a2.nodeType !== 9 && a2.nodeType !== 11 && (a2.nodeType !== 8 || a2.nodeValue !== " react-mount-point-unstable "));
}
function pl() {
}
function ql(a2, b3, c7, d3, e2) {
  if (e2) {
    if (typeof d3 === "function") {
      var f3 = d3;
      d3 = function() {
        var a3 = gl(g3);
        f3.call(a3);
      };
    }
    var g3 = el(b3, d3, a2, 0, null, false, false, "", pl);
    a2._reactRootContainer = g3;
    a2[uf] = g3.current;
    sf(a2.nodeType === 8 ? a2.parentNode : a2);
    Rk();
    return g3;
  }
  for (; e2 = a2.lastChild; )
    a2.removeChild(e2);
  if (typeof d3 === "function") {
    var h3 = d3;
    d3 = function() {
      var a3 = gl(k3);
      h3.call(a3);
    };
  }
  var k3 = bl(a2, 0, false, null, null, false, false, "", pl);
  a2._reactRootContainer = k3;
  a2[uf] = k3.current;
  sf(a2.nodeType === 8 ? a2.parentNode : a2);
  Rk(function() {
    fl(b3, k3, c7, d3);
  });
  return k3;
}
function rl(a2, b3, c7, d3, e2) {
  var f3 = c7._reactRootContainer;
  if (f3) {
    var g3 = f3;
    if (typeof e2 === "function") {
      var h3 = e2;
      e2 = function() {
        var a3 = gl(g3);
        h3.call(a3);
      };
    }
    fl(b3, g3, a2, e2);
  } else
    g3 = ql(c7, b3, a2, e2, d3);
  return gl(g3);
}
Ec = function(a2) {
  switch (a2.tag) {
    case 3:
      var b3 = a2.stateNode;
      if (b3.current.memoizedState.isDehydrated) {
        var c7 = tc(b3.pendingLanes);
        c7 !== 0 && (Cc(b3, c7 | 1), Dk(b3, B2()), (K2 & 6) === 0 && (Gj = B2() + 500, jg()));
      }
      break;
    case 13:
      Rk(function() {
        var b4 = ih(a2, 1);
        if (b4 !== null) {
          var c8 = R2();
          gi(b4, a2, 1, c8);
        }
      }), il(a2, 1);
  }
};
Fc = function(a2) {
  if (a2.tag === 13) {
    var b3 = ih(a2, 134217728);
    if (b3 !== null) {
      var c7 = R2();
      gi(b3, a2, 134217728, c7);
    }
    il(a2, 134217728);
  }
};
Gc = function(a2) {
  if (a2.tag === 13) {
    var b3 = yi(a2), c7 = ih(a2, b3);
    if (c7 !== null) {
      var d3 = R2();
      gi(c7, a2, b3, d3);
    }
    il(a2, b3);
  }
};
Hc = function() {
  return C2;
};
Ic = function(a2, b3) {
  var c7 = C2;
  try {
    return C2 = a2, b3();
  } finally {
    C2 = c7;
  }
};
yb = function(a2, b3, c7) {
  switch (b3) {
    case "input":
      bb(a2, c7);
      b3 = c7.name;
      if (c7.type === "radio" && b3 != null) {
        for (c7 = a2; c7.parentNode; )
          c7 = c7.parentNode;
        c7 = c7.querySelectorAll("input[name=" + JSON.stringify("" + b3) + '][type="radio"]');
        for (b3 = 0; b3 < c7.length; b3++) {
          var d3 = c7[b3];
          if (d3 !== a2 && d3.form === a2.form) {
            var e2 = Db(d3);
            if (!e2)
              throw Error(p2(90));
            Wa(d3);
            bb(d3, e2);
          }
        }
      }
      break;
    case "textarea":
      ib(a2, c7);
      break;
    case "select":
      b3 = c7.value, b3 != null && fb(a2, !!c7.multiple, b3, false);
  }
};
Gb = Qk;
Hb = Rk;
var sl = {usingClientEntryPoint: false, Events: [Cb, ue, Db, Eb, Fb, Qk]};
var tl = {findFiberByHostInstance: Wc, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom"};
var ul = {bundleType: tl.bundleType, version: tl.version, rendererPackageName: tl.rendererPackageName, rendererConfig: tl.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ua.ReactCurrentDispatcher, findHostInstanceByFiber: function(a2) {
  a2 = Zb(a2);
  return a2 === null ? null : a2.stateNode;
}, findFiberByHostInstance: tl.findFiberByHostInstance || jl, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426"};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined") {
  vl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!vl.isDisabled && vl.supportsFiber)
    try {
      kc = vl.inject(ul), lc = vl;
    } catch (a2) {
    }
}
var vl;
var __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED2 = sl;
var createPortal = function(a2, b3) {
  var c7 = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!nl(b3))
    throw Error(p2(200));
  return cl(a2, b3, null, c7);
};
var createRoot = function(a2, b3) {
  if (!nl(a2))
    throw Error(p2(299));
  var c7 = false, d3 = "", e2 = kl;
  b3 !== null && b3 !== void 0 && (b3.unstable_strictMode === true && (c7 = true), b3.identifierPrefix !== void 0 && (d3 = b3.identifierPrefix), b3.onRecoverableError !== void 0 && (e2 = b3.onRecoverableError));
  b3 = bl(a2, 1, false, null, null, c7, false, d3, e2);
  a2[uf] = b3.current;
  sf(a2.nodeType === 8 ? a2.parentNode : a2);
  return new ll(b3);
};
var findDOMNode = function(a2) {
  if (a2 == null)
    return null;
  if (a2.nodeType === 1)
    return a2;
  var b3 = a2._reactInternals;
  if (b3 === void 0) {
    if (typeof a2.render === "function")
      throw Error(p2(188));
    a2 = Object.keys(a2).join(",");
    throw Error(p2(268, a2));
  }
  a2 = Zb(b3);
  a2 = a2 === null ? null : a2.stateNode;
  return a2;
};
var flushSync = function(a2) {
  return Rk(a2);
};
var hydrate = function(a2, b3, c7) {
  if (!ol(b3))
    throw Error(p2(200));
  return rl(null, a2, b3, true, c7);
};
var hydrateRoot = function(a2, b3, c7) {
  if (!nl(a2))
    throw Error(p2(405));
  var d3 = c7 != null && c7.hydratedSources || null, e2 = false, f3 = "", g3 = kl;
  c7 !== null && c7 !== void 0 && (c7.unstable_strictMode === true && (e2 = true), c7.identifierPrefix !== void 0 && (f3 = c7.identifierPrefix), c7.onRecoverableError !== void 0 && (g3 = c7.onRecoverableError));
  b3 = el(b3, null, a2, 1, c7 != null ? c7 : null, e2, false, f3, g3);
  a2[uf] = b3.current;
  sf(a2);
  if (d3)
    for (a2 = 0; a2 < d3.length; a2++)
      c7 = d3[a2], e2 = c7._getVersion, e2 = e2(c7._source), b3.mutableSourceEagerHydrationData == null ? b3.mutableSourceEagerHydrationData = [c7, e2] : b3.mutableSourceEagerHydrationData.push(c7, e2);
  return new ml(b3);
};
var render = function(a2, b3, c7) {
  if (!ol(b3))
    throw Error(p2(200));
  return rl(null, a2, b3, false, c7);
};
var unmountComponentAtNode = function(a2) {
  if (!ol(a2))
    throw Error(p2(40));
  return a2._reactRootContainer ? (Rk(function() {
    rl(null, null, a2, false, function() {
      a2._reactRootContainer = null;
      a2[uf] = null;
    });
  }), true) : false;
};
var unstable_batchedUpdates = Qk;
var unstable_renderSubtreeIntoContainer = function(a2, b3, c7, d3) {
  if (!ol(c7))
    throw Error(p2(200));
  if (a2 == null || a2._reactInternals === void 0)
    throw Error(p2(38));
  return rl(a2, b3, c7, false, d3);
};
var version2 = "18.3.1-next-f1338f8080-20240426";
var reactDom_production_min = {
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED2,
  createPortal,
  createRoot,
  findDOMNode,
  flushSync,
  hydrate,
  hydrateRoot,
  render,
  unmountComponentAtNode,
  unstable_batchedUpdates,
  unstable_renderSubtreeIntoContainer,
  version: version2
};
var reactDom = createCommonjsModule(function(module) {
  function checkDCE() {
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
      return;
    }
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
    } catch (err) {
      console.error(err);
    }
  }
  {
    checkDCE();
    module.exports = reactDom_production_min;
  }
});
var ReactDOM = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(null), reactDom, {
  default: reactDom
}));

// build/_snowpack/pkg/react-router-dom.js
/**
 * @remix-run/router v1.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
var Action;
(function(Action2) {
  Action2["Pop"] = "POP";
  Action2["Push"] = "PUSH";
  Action2["Replace"] = "REPLACE";
})(Action || (Action = {}));
var PopStateEventType = "popstate";
function createBrowserHistory(options) {
  if (options === void 0) {
    options = {};
  }
  function createBrowserLocation(window2, globalHistory) {
    let {
      pathname,
      search,
      hash
    } = window2.location;
    return createLocation("", {
      pathname,
      search,
      hash
    }, globalHistory.state && globalHistory.state.usr || null, globalHistory.state && globalHistory.state.key || "default");
  }
  function createBrowserHref(window2, to2) {
    return typeof to2 === "string" ? to2 : createPath(to2);
  }
  return getUrlBasedHistory(createBrowserLocation, createBrowserHref, null, options);
}
function invariant(value, message) {
  if (value === false || value === null || typeof value === "undefined") {
    throw new Error(message);
  }
}
function warning(cond, message) {
  if (!cond) {
    if (typeof console !== "undefined")
      console.warn(message);
    try {
      throw new Error(message);
    } catch (e2) {
    }
  }
}
function createKey() {
  return Math.random().toString(36).substr(2, 8);
}
function getHistoryState(location, index) {
  return {
    usr: location.state,
    key: location.key,
    idx: index
  };
}
function createLocation(current, to2, state, key) {
  if (state === void 0) {
    state = null;
  }
  let location = _extends({
    pathname: typeof current === "string" ? current : current.pathname,
    search: "",
    hash: ""
  }, typeof to2 === "string" ? parsePath(to2) : to2, {
    state,
    key: to2 && to2.key || key || createKey()
  });
  return location;
}
function createPath(_ref) {
  let {
    pathname = "/",
    search = "",
    hash = ""
  } = _ref;
  if (search && search !== "?")
    pathname += search.charAt(0) === "?" ? search : "?" + search;
  if (hash && hash !== "#")
    pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
  return pathname;
}
function parsePath(path) {
  let parsedPath = {};
  if (path) {
    let hashIndex = path.indexOf("#");
    if (hashIndex >= 0) {
      parsedPath.hash = path.substr(hashIndex);
      path = path.substr(0, hashIndex);
    }
    let searchIndex = path.indexOf("?");
    if (searchIndex >= 0) {
      parsedPath.search = path.substr(searchIndex);
      path = path.substr(0, searchIndex);
    }
    if (path) {
      parsedPath.pathname = path;
    }
  }
  return parsedPath;
}
function getUrlBasedHistory(getLocation, createHref, validateLocation, options) {
  if (options === void 0) {
    options = {};
  }
  let {
    window: window2 = document.defaultView,
    v5Compat = false
  } = options;
  let globalHistory = window2.history;
  let action = Action.Pop;
  let listener = null;
  let index = getIndex();
  if (index == null) {
    index = 0;
    globalHistory.replaceState(_extends({}, globalHistory.state, {
      idx: index
    }), "");
  }
  function getIndex() {
    let state = globalHistory.state || {
      idx: null
    };
    return state.idx;
  }
  function handlePop() {
    action = Action.Pop;
    let nextIndex = getIndex();
    let delta = nextIndex == null ? null : nextIndex - index;
    index = nextIndex;
    if (listener) {
      listener({
        action,
        location: history.location,
        delta
      });
    }
  }
  function push(to2, state) {
    action = Action.Push;
    let location = createLocation(history.location, to2, state);
    if (validateLocation)
      validateLocation(location, to2);
    index = getIndex() + 1;
    let historyState = getHistoryState(location, index);
    let url = history.createHref(location);
    try {
      globalHistory.pushState(historyState, "", url);
    } catch (error) {
      if (error instanceof DOMException && error.name === "DataCloneError") {
        throw error;
      }
      window2.location.assign(url);
    }
    if (v5Compat && listener) {
      listener({
        action,
        location: history.location,
        delta: 1
      });
    }
  }
  function replace(to2, state) {
    action = Action.Replace;
    let location = createLocation(history.location, to2, state);
    if (validateLocation)
      validateLocation(location, to2);
    index = getIndex();
    let historyState = getHistoryState(location, index);
    let url = history.createHref(location);
    globalHistory.replaceState(historyState, "", url);
    if (v5Compat && listener) {
      listener({
        action,
        location: history.location,
        delta: 0
      });
    }
  }
  function createURL(to2) {
    let base = window2.location.origin !== "null" ? window2.location.origin : window2.location.href;
    let href = typeof to2 === "string" ? to2 : createPath(to2);
    href = href.replace(/ $/, "%20");
    invariant(base, "No window.location.(origin|href) available to create URL for href: " + href);
    return new URL(href, base);
  }
  let history = {
    get action() {
      return action;
    },
    get location() {
      return getLocation(window2, globalHistory);
    },
    listen(fn) {
      if (listener) {
        throw new Error("A history only accepts one active listener");
      }
      window2.addEventListener(PopStateEventType, handlePop);
      listener = fn;
      return () => {
        window2.removeEventListener(PopStateEventType, handlePop);
        listener = null;
      };
    },
    createHref(to2) {
      return createHref(window2, to2);
    },
    createURL,
    encodeLocation(to2) {
      let url = createURL(to2);
      return {
        pathname: url.pathname,
        search: url.search,
        hash: url.hash
      };
    },
    push,
    replace,
    go(n4) {
      return globalHistory.go(n4);
    }
  };
  return history;
}
var ResultType;
(function(ResultType2) {
  ResultType2["data"] = "data";
  ResultType2["deferred"] = "deferred";
  ResultType2["redirect"] = "redirect";
  ResultType2["error"] = "error";
})(ResultType || (ResultType = {}));
var immutableRouteKeys = new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
function isIndexRoute(route) {
  return route.index === true;
}
function convertRoutesToDataRoutes(routes2, mapRouteProperties2, parentPath, manifest) {
  if (parentPath === void 0) {
    parentPath = [];
  }
  if (manifest === void 0) {
    manifest = {};
  }
  return routes2.map((route, index) => {
    let treePath = [...parentPath, String(index)];
    let id2 = typeof route.id === "string" ? route.id : treePath.join("-");
    invariant(route.index !== true || !route.children, "Cannot specify children on an index route");
    invariant(!manifest[id2], 'Found a route id collision on id "' + id2 + `".  Route id's must be globally unique within Data Router usages`);
    if (isIndexRoute(route)) {
      let indexRoute = _extends({}, route, mapRouteProperties2(route), {
        id: id2
      });
      manifest[id2] = indexRoute;
      return indexRoute;
    } else {
      let pathOrLayoutRoute = _extends({}, route, mapRouteProperties2(route), {
        id: id2,
        children: void 0
      });
      manifest[id2] = pathOrLayoutRoute;
      if (route.children) {
        pathOrLayoutRoute.children = convertRoutesToDataRoutes(route.children, mapRouteProperties2, treePath, manifest);
      }
      return pathOrLayoutRoute;
    }
  });
}
function matchRoutes(routes2, locationArg, basename) {
  if (basename === void 0) {
    basename = "/";
  }
  return matchRoutesImpl(routes2, locationArg, basename, false);
}
function matchRoutesImpl(routes2, locationArg, basename, allowPartial) {
  let location = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
  let pathname = stripBasename(location.pathname || "/", basename);
  if (pathname == null) {
    return null;
  }
  let branches = flattenRoutes(routes2);
  rankRouteBranches(branches);
  let matches = null;
  for (let i2 = 0; matches == null && i2 < branches.length; ++i2) {
    let decoded = decodePath(pathname);
    matches = matchRouteBranch(branches[i2], decoded, allowPartial);
  }
  return matches;
}
function convertRouteMatchToUiMatch(match, loaderData) {
  let {
    route,
    pathname,
    params
  } = match;
  return {
    id: route.id,
    pathname,
    params,
    data: loaderData[route.id],
    handle: route.handle
  };
}
function flattenRoutes(routes2, branches, parentsMeta, parentPath) {
  if (branches === void 0) {
    branches = [];
  }
  if (parentsMeta === void 0) {
    parentsMeta = [];
  }
  if (parentPath === void 0) {
    parentPath = "";
  }
  let flattenRoute = (route, index, relativePath) => {
    let meta = {
      relativePath: relativePath === void 0 ? route.path || "" : relativePath,
      caseSensitive: route.caseSensitive === true,
      childrenIndex: index,
      route
    };
    if (meta.relativePath.startsWith("/")) {
      invariant(meta.relativePath.startsWith(parentPath), 'Absolute route path "' + meta.relativePath + '" nested under path ' + ('"' + parentPath + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes.");
      meta.relativePath = meta.relativePath.slice(parentPath.length);
    }
    let path = joinPaths([parentPath, meta.relativePath]);
    let routesMeta = parentsMeta.concat(meta);
    if (route.children && route.children.length > 0) {
      invariant(route.index !== true, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + path + '".'));
      flattenRoutes(route.children, branches, routesMeta, path);
    }
    if (route.path == null && !route.index) {
      return;
    }
    branches.push({
      path,
      score: computeScore(path, route.index),
      routesMeta
    });
  };
  routes2.forEach((route, index) => {
    var _route$path;
    if (route.path === "" || !((_route$path = route.path) != null && _route$path.includes("?"))) {
      flattenRoute(route, index);
    } else {
      for (let exploded of explodeOptionalSegments(route.path)) {
        flattenRoute(route, index, exploded);
      }
    }
  });
  return branches;
}
function explodeOptionalSegments(path) {
  let segments = path.split("/");
  if (segments.length === 0)
    return [];
  let [first, ...rest] = segments;
  let isOptional = first.endsWith("?");
  let required = first.replace(/\?$/, "");
  if (rest.length === 0) {
    return isOptional ? [required, ""] : [required];
  }
  let restExploded = explodeOptionalSegments(rest.join("/"));
  let result = [];
  result.push(...restExploded.map((subpath) => subpath === "" ? required : [required, subpath].join("/")));
  if (isOptional) {
    result.push(...restExploded);
  }
  return result.map((exploded) => path.startsWith("/") && exploded === "" ? "/" : exploded);
}
function rankRouteBranches(branches) {
  branches.sort((a2, b3) => a2.score !== b3.score ? b3.score - a2.score : compareIndexes(a2.routesMeta.map((meta) => meta.childrenIndex), b3.routesMeta.map((meta) => meta.childrenIndex)));
}
var paramRe = /^:[\w-]+$/;
var dynamicSegmentValue = 3;
var indexRouteValue = 2;
var emptySegmentValue = 1;
var staticSegmentValue = 10;
var splatPenalty = -2;
var isSplat = (s2) => s2 === "*";
function computeScore(path, index) {
  let segments = path.split("/");
  let initialScore = segments.length;
  if (segments.some(isSplat)) {
    initialScore += splatPenalty;
  }
  if (index) {
    initialScore += indexRouteValue;
  }
  return segments.filter((s2) => !isSplat(s2)).reduce((score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue), initialScore);
}
function compareIndexes(a2, b3) {
  let siblings = a2.length === b3.length && a2.slice(0, -1).every((n4, i2) => n4 === b3[i2]);
  return siblings ? a2[a2.length - 1] - b3[b3.length - 1] : 0;
}
function matchRouteBranch(branch, pathname, allowPartial) {
  if (allowPartial === void 0) {
    allowPartial = false;
  }
  let {
    routesMeta
  } = branch;
  let matchedParams = {};
  let matchedPathname = "/";
  let matches = [];
  for (let i2 = 0; i2 < routesMeta.length; ++i2) {
    let meta = routesMeta[i2];
    let end = i2 === routesMeta.length - 1;
    let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
    let match = matchPath({
      path: meta.relativePath,
      caseSensitive: meta.caseSensitive,
      end
    }, remainingPathname);
    let route = meta.route;
    if (!match && end && allowPartial && !routesMeta[routesMeta.length - 1].route.index) {
      match = matchPath({
        path: meta.relativePath,
        caseSensitive: meta.caseSensitive,
        end: false
      }, remainingPathname);
    }
    if (!match) {
      return null;
    }
    Object.assign(matchedParams, match.params);
    matches.push({
      params: matchedParams,
      pathname: joinPaths([matchedPathname, match.pathname]),
      pathnameBase: normalizePathname(joinPaths([matchedPathname, match.pathnameBase])),
      route
    });
    if (match.pathnameBase !== "/") {
      matchedPathname = joinPaths([matchedPathname, match.pathnameBase]);
    }
  }
  return matches;
}
function matchPath(pattern, pathname) {
  if (typeof pattern === "string") {
    pattern = {
      path: pattern,
      caseSensitive: false,
      end: true
    };
  }
  let [matcher, compiledParams] = compilePath(pattern.path, pattern.caseSensitive, pattern.end);
  let match = pathname.match(matcher);
  if (!match)
    return null;
  let matchedPathname = match[0];
  let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
  let captureGroups = match.slice(1);
  let params = compiledParams.reduce((memo2, _ref, index) => {
    let {
      paramName,
      isOptional
    } = _ref;
    if (paramName === "*") {
      let splatValue = captureGroups[index] || "";
      pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
    }
    const value = captureGroups[index];
    if (isOptional && !value) {
      memo2[paramName] = void 0;
    } else {
      memo2[paramName] = (value || "").replace(/%2F/g, "/");
    }
    return memo2;
  }, {});
  return {
    params,
    pathname: matchedPathname,
    pathnameBase,
    pattern
  };
}
function compilePath(path, caseSensitive, end) {
  if (caseSensitive === void 0) {
    caseSensitive = false;
  }
  if (end === void 0) {
    end = true;
  }
  warning(path === "*" || !path.endsWith("*") || path.endsWith("/*"), 'Route path "' + path + '" will be treated as if it were ' + ('"' + path.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + path.replace(/\*$/, "/*") + '".'));
  let params = [];
  let regexpSource = "^" + path.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (_3, paramName, isOptional) => {
    params.push({
      paramName,
      isOptional: isOptional != null
    });
    return isOptional ? "/?([^\\/]+)?" : "/([^\\/]+)";
  });
  if (path.endsWith("*")) {
    params.push({
      paramName: "*"
    });
    regexpSource += path === "*" || path === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$";
  } else if (end) {
    regexpSource += "\\/*$";
  } else if (path !== "" && path !== "/") {
    regexpSource += "(?:(?=\\/|$))";
  } else
    ;
  let matcher = new RegExp(regexpSource, caseSensitive ? void 0 : "i");
  return [matcher, params];
}
function decodePath(value) {
  try {
    return value.split("/").map((v5) => decodeURIComponent(v5).replace(/\//g, "%2F")).join("/");
  } catch (error) {
    warning(false, 'The URL path "' + value + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + error + ")."));
    return value;
  }
}
function stripBasename(pathname, basename) {
  if (basename === "/")
    return pathname;
  if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
    return null;
  }
  let startIndex = basename.endsWith("/") ? basename.length - 1 : basename.length;
  let nextChar = pathname.charAt(startIndex);
  if (nextChar && nextChar !== "/") {
    return null;
  }
  return pathname.slice(startIndex) || "/";
}
function resolvePath(to2, fromPathname) {
  if (fromPathname === void 0) {
    fromPathname = "/";
  }
  let {
    pathname: toPathname,
    search = "",
    hash = ""
  } = typeof to2 === "string" ? parsePath(to2) : to2;
  let pathname = toPathname ? toPathname.startsWith("/") ? toPathname : resolvePathname(toPathname, fromPathname) : fromPathname;
  return {
    pathname,
    search: normalizeSearch(search),
    hash: normalizeHash(hash)
  };
}
function resolvePathname(relativePath, fromPathname) {
  let segments = fromPathname.replace(/\/+$/, "").split("/");
  let relativeSegments = relativePath.split("/");
  relativeSegments.forEach((segment) => {
    if (segment === "..") {
      if (segments.length > 1)
        segments.pop();
    } else if (segment !== ".") {
      segments.push(segment);
    }
  });
  return segments.length > 1 ? segments.join("/") : "/";
}
function getInvalidPathError(char, field, dest, path) {
  return "Cannot include a '" + char + "' character in a manually specified " + ("`to." + field + "` field [" + JSON.stringify(path) + "].  Please separate it out to the ") + ("`to." + dest + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
}
function getPathContributingMatches(matches) {
  return matches.filter((match, index) => index === 0 || match.route.path && match.route.path.length > 0);
}
function getResolveToMatches(matches, v7_relativeSplatPath) {
  let pathMatches = getPathContributingMatches(matches);
  if (v7_relativeSplatPath) {
    return pathMatches.map((match, idx) => idx === pathMatches.length - 1 ? match.pathname : match.pathnameBase);
  }
  return pathMatches.map((match) => match.pathnameBase);
}
function resolveTo(toArg, routePathnames, locationPathname, isPathRelative) {
  if (isPathRelative === void 0) {
    isPathRelative = false;
  }
  let to2;
  if (typeof toArg === "string") {
    to2 = parsePath(toArg);
  } else {
    to2 = _extends({}, toArg);
    invariant(!to2.pathname || !to2.pathname.includes("?"), getInvalidPathError("?", "pathname", "search", to2));
    invariant(!to2.pathname || !to2.pathname.includes("#"), getInvalidPathError("#", "pathname", "hash", to2));
    invariant(!to2.search || !to2.search.includes("#"), getInvalidPathError("#", "search", "hash", to2));
  }
  let isEmptyPath = toArg === "" || to2.pathname === "";
  let toPathname = isEmptyPath ? "/" : to2.pathname;
  let from;
  if (toPathname == null) {
    from = locationPathname;
  } else {
    let routePathnameIndex = routePathnames.length - 1;
    if (!isPathRelative && toPathname.startsWith("..")) {
      let toSegments = toPathname.split("/");
      while (toSegments[0] === "..") {
        toSegments.shift();
        routePathnameIndex -= 1;
      }
      to2.pathname = toSegments.join("/");
    }
    from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
  }
  let path = resolvePath(to2, from);
  let hasExplicitTrailingSlash = toPathname && toPathname !== "/" && toPathname.endsWith("/");
  let hasCurrentTrailingSlash = (isEmptyPath || toPathname === ".") && locationPathname.endsWith("/");
  if (!path.pathname.endsWith("/") && (hasExplicitTrailingSlash || hasCurrentTrailingSlash)) {
    path.pathname += "/";
  }
  return path;
}
var joinPaths = (paths) => paths.join("/").replace(/\/\/+/g, "/");
var normalizePathname = (pathname) => pathname.replace(/\/+$/, "").replace(/^\/*/, "/");
var normalizeSearch = (search) => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
var normalizeHash = (hash) => !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;
var ErrorResponseImpl = class {
  constructor(status, statusText, data, internal) {
    if (internal === void 0) {
      internal = false;
    }
    this.status = status;
    this.statusText = statusText || "";
    this.internal = internal;
    if (data instanceof Error) {
      this.data = data.toString();
      this.error = data;
    } else {
      this.data = data;
    }
  }
};
function isRouteErrorResponse(error) {
  return error != null && typeof error.status === "number" && typeof error.statusText === "string" && typeof error.internal === "boolean" && "data" in error;
}
var validMutationMethodsArr = ["post", "put", "patch", "delete"];
var validMutationMethods = new Set(validMutationMethodsArr);
var validRequestMethodsArr = ["get", ...validMutationMethodsArr];
var validRequestMethods = new Set(validRequestMethodsArr);
var redirectStatusCodes = new Set([301, 302, 303, 307, 308]);
var redirectPreserveMethodStatusCodes = new Set([307, 308]);
var IDLE_NAVIGATION = {
  state: "idle",
  location: void 0,
  formMethod: void 0,
  formAction: void 0,
  formEncType: void 0,
  formData: void 0,
  json: void 0,
  text: void 0
};
var IDLE_FETCHER = {
  state: "idle",
  data: void 0,
  formMethod: void 0,
  formAction: void 0,
  formEncType: void 0,
  formData: void 0,
  json: void 0,
  text: void 0
};
var IDLE_BLOCKER = {
  state: "unblocked",
  proceed: void 0,
  reset: void 0,
  location: void 0
};
var ABSOLUTE_URL_REGEX = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
var defaultMapRouteProperties = (route) => ({
  hasErrorBoundary: Boolean(route.hasErrorBoundary)
});
var TRANSITIONS_STORAGE_KEY = "remix-router-transitions";
function createRouter(init) {
  const routerWindow = init.window ? init.window : typeof window !== "undefined" ? window : void 0;
  const isBrowser2 = typeof routerWindow !== "undefined" && typeof routerWindow.document !== "undefined" && typeof routerWindow.document.createElement !== "undefined";
  const isServer = !isBrowser2;
  invariant(init.routes.length > 0, "You must provide a non-empty routes array to createRouter");
  let mapRouteProperties2;
  if (init.mapRouteProperties) {
    mapRouteProperties2 = init.mapRouteProperties;
  } else if (init.detectErrorBoundary) {
    let detectErrorBoundary = init.detectErrorBoundary;
    mapRouteProperties2 = (route) => ({
      hasErrorBoundary: detectErrorBoundary(route)
    });
  } else {
    mapRouteProperties2 = defaultMapRouteProperties;
  }
  let manifest = {};
  let dataRoutes = convertRoutesToDataRoutes(init.routes, mapRouteProperties2, void 0, manifest);
  let inFlightDataRoutes;
  let basename = init.basename || "/";
  let dataStrategyImpl = init.dataStrategy || defaultDataStrategy;
  let patchRoutesOnNavigationImpl = init.patchRoutesOnNavigation;
  let future = _extends({
    v7_fetcherPersist: false,
    v7_normalizeFormMethod: false,
    v7_partialHydration: false,
    v7_prependBasename: false,
    v7_relativeSplatPath: false,
    v7_skipActionErrorRevalidation: false
  }, init.future);
  let unlistenHistory = null;
  let subscribers = new Set();
  let savedScrollPositions = null;
  let getScrollRestorationKey = null;
  let getScrollPosition = null;
  let initialScrollRestored = init.hydrationData != null;
  let initialMatches = matchRoutes(dataRoutes, init.history.location, basename);
  let initialErrors = null;
  if (initialMatches == null && !patchRoutesOnNavigationImpl) {
    let error = getInternalRouterError(404, {
      pathname: init.history.location.pathname
    });
    let {
      matches,
      route
    } = getShortCircuitMatches(dataRoutes);
    initialMatches = matches;
    initialErrors = {
      [route.id]: error
    };
  }
  if (initialMatches && !init.hydrationData) {
    let fogOfWar = checkFogOfWar(initialMatches, dataRoutes, init.history.location.pathname);
    if (fogOfWar.active) {
      initialMatches = null;
    }
  }
  let initialized;
  if (!initialMatches) {
    initialized = false;
    initialMatches = [];
    if (future.v7_partialHydration) {
      let fogOfWar = checkFogOfWar(null, dataRoutes, init.history.location.pathname);
      if (fogOfWar.active && fogOfWar.matches) {
        initialMatches = fogOfWar.matches;
      }
    }
  } else if (initialMatches.some((m3) => m3.route.lazy)) {
    initialized = false;
  } else if (!initialMatches.some((m3) => m3.route.loader)) {
    initialized = true;
  } else if (future.v7_partialHydration) {
    let loaderData = init.hydrationData ? init.hydrationData.loaderData : null;
    let errors = init.hydrationData ? init.hydrationData.errors : null;
    if (errors) {
      let idx = initialMatches.findIndex((m3) => errors[m3.route.id] !== void 0);
      initialized = initialMatches.slice(0, idx + 1).every((m3) => !shouldLoadRouteOnHydration(m3.route, loaderData, errors));
    } else {
      initialized = initialMatches.every((m3) => !shouldLoadRouteOnHydration(m3.route, loaderData, errors));
    }
  } else {
    initialized = init.hydrationData != null;
  }
  let router2;
  let state = {
    historyAction: init.history.action,
    location: init.history.location,
    matches: initialMatches,
    initialized,
    navigation: IDLE_NAVIGATION,
    restoreScrollPosition: init.hydrationData != null ? false : null,
    preventScrollReset: false,
    revalidation: "idle",
    loaderData: init.hydrationData && init.hydrationData.loaderData || {},
    actionData: init.hydrationData && init.hydrationData.actionData || null,
    errors: init.hydrationData && init.hydrationData.errors || initialErrors,
    fetchers: new Map(),
    blockers: new Map()
  };
  let pendingAction = Action.Pop;
  let pendingPreventScrollReset = false;
  let pendingNavigationController;
  let pendingViewTransitionEnabled = false;
  let appliedViewTransitions = new Map();
  let removePageHideEventListener = null;
  let isUninterruptedRevalidation = false;
  let isRevalidationRequired = false;
  let cancelledDeferredRoutes = [];
  let cancelledFetcherLoads = new Set();
  let fetchControllers = new Map();
  let incrementingLoadId = 0;
  let pendingNavigationLoadId = -1;
  let fetchReloadIds = new Map();
  let fetchRedirectIds = new Set();
  let fetchLoadMatches = new Map();
  let activeFetchers = new Map();
  let deletedFetchers = new Set();
  let activeDeferreds = new Map();
  let blockerFunctions = new Map();
  let unblockBlockerHistoryUpdate = void 0;
  function initialize() {
    unlistenHistory = init.history.listen((_ref) => {
      let {
        action: historyAction,
        location,
        delta
      } = _ref;
      if (unblockBlockerHistoryUpdate) {
        unblockBlockerHistoryUpdate();
        unblockBlockerHistoryUpdate = void 0;
        return;
      }
      warning(blockerFunctions.size === 0 || delta != null, "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");
      let blockerKey = shouldBlockNavigation({
        currentLocation: state.location,
        nextLocation: location,
        historyAction
      });
      if (blockerKey && delta != null) {
        let nextHistoryUpdatePromise = new Promise((resolve) => {
          unblockBlockerHistoryUpdate = resolve;
        });
        init.history.go(delta * -1);
        updateBlocker(blockerKey, {
          state: "blocked",
          location,
          proceed() {
            updateBlocker(blockerKey, {
              state: "proceeding",
              proceed: void 0,
              reset: void 0,
              location
            });
            nextHistoryUpdatePromise.then(() => init.history.go(delta));
          },
          reset() {
            let blockers = new Map(state.blockers);
            blockers.set(blockerKey, IDLE_BLOCKER);
            updateState({
              blockers
            });
          }
        });
        return;
      }
      return startNavigation(historyAction, location);
    });
    if (isBrowser2) {
      restoreAppliedTransitions(routerWindow, appliedViewTransitions);
      let _saveAppliedTransitions = () => persistAppliedTransitions(routerWindow, appliedViewTransitions);
      routerWindow.addEventListener("pagehide", _saveAppliedTransitions);
      removePageHideEventListener = () => routerWindow.removeEventListener("pagehide", _saveAppliedTransitions);
    }
    if (!state.initialized) {
      startNavigation(Action.Pop, state.location, {
        initialHydration: true
      });
    }
    return router2;
  }
  function dispose() {
    if (unlistenHistory) {
      unlistenHistory();
    }
    if (removePageHideEventListener) {
      removePageHideEventListener();
    }
    subscribers.clear();
    pendingNavigationController && pendingNavigationController.abort();
    state.fetchers.forEach((_3, key) => deleteFetcher(key));
    state.blockers.forEach((_3, key) => deleteBlocker(key));
  }
  function subscribe(fn) {
    subscribers.add(fn);
    return () => subscribers.delete(fn);
  }
  function updateState(newState, opts) {
    if (opts === void 0) {
      opts = {};
    }
    state = _extends({}, state, newState);
    let completedFetchers = [];
    let deletedFetchersKeys = [];
    if (future.v7_fetcherPersist) {
      state.fetchers.forEach((fetcher, key) => {
        if (fetcher.state === "idle") {
          if (deletedFetchers.has(key)) {
            deletedFetchersKeys.push(key);
          } else {
            completedFetchers.push(key);
          }
        }
      });
    }
    [...subscribers].forEach((subscriber) => subscriber(state, {
      deletedFetchers: deletedFetchersKeys,
      viewTransitionOpts: opts.viewTransitionOpts,
      flushSync: opts.flushSync === true
    }));
    if (future.v7_fetcherPersist) {
      completedFetchers.forEach((key) => state.fetchers.delete(key));
      deletedFetchersKeys.forEach((key) => deleteFetcher(key));
    }
  }
  function completeNavigation(location, newState, _temp) {
    var _location$state, _location$state2;
    let {
      flushSync: flushSync2
    } = _temp === void 0 ? {} : _temp;
    let isActionReload = state.actionData != null && state.navigation.formMethod != null && isMutationMethod(state.navigation.formMethod) && state.navigation.state === "loading" && ((_location$state = location.state) == null ? void 0 : _location$state._isRedirect) !== true;
    let actionData;
    if (newState.actionData) {
      if (Object.keys(newState.actionData).length > 0) {
        actionData = newState.actionData;
      } else {
        actionData = null;
      }
    } else if (isActionReload) {
      actionData = state.actionData;
    } else {
      actionData = null;
    }
    let loaderData = newState.loaderData ? mergeLoaderData(state.loaderData, newState.loaderData, newState.matches || [], newState.errors) : state.loaderData;
    let blockers = state.blockers;
    if (blockers.size > 0) {
      blockers = new Map(blockers);
      blockers.forEach((_3, k3) => blockers.set(k3, IDLE_BLOCKER));
    }
    let preventScrollReset = pendingPreventScrollReset === true || state.navigation.formMethod != null && isMutationMethod(state.navigation.formMethod) && ((_location$state2 = location.state) == null ? void 0 : _location$state2._isRedirect) !== true;
    if (inFlightDataRoutes) {
      dataRoutes = inFlightDataRoutes;
      inFlightDataRoutes = void 0;
    }
    if (isUninterruptedRevalidation)
      ;
    else if (pendingAction === Action.Pop)
      ;
    else if (pendingAction === Action.Push) {
      init.history.push(location, location.state);
    } else if (pendingAction === Action.Replace) {
      init.history.replace(location, location.state);
    }
    let viewTransitionOpts;
    if (pendingAction === Action.Pop) {
      let priorPaths = appliedViewTransitions.get(state.location.pathname);
      if (priorPaths && priorPaths.has(location.pathname)) {
        viewTransitionOpts = {
          currentLocation: state.location,
          nextLocation: location
        };
      } else if (appliedViewTransitions.has(location.pathname)) {
        viewTransitionOpts = {
          currentLocation: location,
          nextLocation: state.location
        };
      }
    } else if (pendingViewTransitionEnabled) {
      let toPaths = appliedViewTransitions.get(state.location.pathname);
      if (toPaths) {
        toPaths.add(location.pathname);
      } else {
        toPaths = new Set([location.pathname]);
        appliedViewTransitions.set(state.location.pathname, toPaths);
      }
      viewTransitionOpts = {
        currentLocation: state.location,
        nextLocation: location
      };
    }
    updateState(_extends({}, newState, {
      actionData,
      loaderData,
      historyAction: pendingAction,
      location,
      initialized: true,
      navigation: IDLE_NAVIGATION,
      revalidation: "idle",
      restoreScrollPosition: getSavedScrollPosition(location, newState.matches || state.matches),
      preventScrollReset,
      blockers
    }), {
      viewTransitionOpts,
      flushSync: flushSync2 === true
    });
    pendingAction = Action.Pop;
    pendingPreventScrollReset = false;
    pendingViewTransitionEnabled = false;
    isUninterruptedRevalidation = false;
    isRevalidationRequired = false;
    cancelledDeferredRoutes = [];
  }
  async function navigate(to2, opts) {
    if (typeof to2 === "number") {
      init.history.go(to2);
      return;
    }
    let normalizedPath = normalizeTo(state.location, state.matches, basename, future.v7_prependBasename, to2, future.v7_relativeSplatPath, opts == null ? void 0 : opts.fromRouteId, opts == null ? void 0 : opts.relative);
    let {
      path,
      submission,
      error
    } = normalizeNavigateOptions(future.v7_normalizeFormMethod, false, normalizedPath, opts);
    let currentLocation = state.location;
    let nextLocation = createLocation(state.location, path, opts && opts.state);
    nextLocation = _extends({}, nextLocation, init.history.encodeLocation(nextLocation));
    let userReplace = opts && opts.replace != null ? opts.replace : void 0;
    let historyAction = Action.Push;
    if (userReplace === true) {
      historyAction = Action.Replace;
    } else if (userReplace === false)
      ;
    else if (submission != null && isMutationMethod(submission.formMethod) && submission.formAction === state.location.pathname + state.location.search) {
      historyAction = Action.Replace;
    }
    let preventScrollReset = opts && "preventScrollReset" in opts ? opts.preventScrollReset === true : void 0;
    let flushSync2 = (opts && opts.flushSync) === true;
    let blockerKey = shouldBlockNavigation({
      currentLocation,
      nextLocation,
      historyAction
    });
    if (blockerKey) {
      updateBlocker(blockerKey, {
        state: "blocked",
        location: nextLocation,
        proceed() {
          updateBlocker(blockerKey, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: nextLocation
          });
          navigate(to2, opts);
        },
        reset() {
          let blockers = new Map(state.blockers);
          blockers.set(blockerKey, IDLE_BLOCKER);
          updateState({
            blockers
          });
        }
      });
      return;
    }
    return await startNavigation(historyAction, nextLocation, {
      submission,
      pendingError: error,
      preventScrollReset,
      replace: opts && opts.replace,
      enableViewTransition: opts && opts.viewTransition,
      flushSync: flushSync2
    });
  }
  function revalidate() {
    interruptActiveLoads();
    updateState({
      revalidation: "loading"
    });
    if (state.navigation.state === "submitting") {
      return;
    }
    if (state.navigation.state === "idle") {
      startNavigation(state.historyAction, state.location, {
        startUninterruptedRevalidation: true
      });
      return;
    }
    startNavigation(pendingAction || state.historyAction, state.navigation.location, {
      overrideNavigation: state.navigation,
      enableViewTransition: pendingViewTransitionEnabled === true
    });
  }
  async function startNavigation(historyAction, location, opts) {
    pendingNavigationController && pendingNavigationController.abort();
    pendingNavigationController = null;
    pendingAction = historyAction;
    isUninterruptedRevalidation = (opts && opts.startUninterruptedRevalidation) === true;
    saveScrollPosition(state.location, state.matches);
    pendingPreventScrollReset = (opts && opts.preventScrollReset) === true;
    pendingViewTransitionEnabled = (opts && opts.enableViewTransition) === true;
    let routesToUse = inFlightDataRoutes || dataRoutes;
    let loadingNavigation = opts && opts.overrideNavigation;
    let matches = matchRoutes(routesToUse, location, basename);
    let flushSync2 = (opts && opts.flushSync) === true;
    let fogOfWar = checkFogOfWar(matches, routesToUse, location.pathname);
    if (fogOfWar.active && fogOfWar.matches) {
      matches = fogOfWar.matches;
    }
    if (!matches) {
      let {
        error,
        notFoundMatches,
        route
      } = handleNavigational404(location.pathname);
      completeNavigation(location, {
        matches: notFoundMatches,
        loaderData: {},
        errors: {
          [route.id]: error
        }
      }, {
        flushSync: flushSync2
      });
      return;
    }
    if (state.initialized && !isRevalidationRequired && isHashChangeOnly(state.location, location) && !(opts && opts.submission && isMutationMethod(opts.submission.formMethod))) {
      completeNavigation(location, {
        matches
      }, {
        flushSync: flushSync2
      });
      return;
    }
    pendingNavigationController = new AbortController();
    let request = createClientSideRequest(init.history, location, pendingNavigationController.signal, opts && opts.submission);
    let pendingActionResult;
    if (opts && opts.pendingError) {
      pendingActionResult = [findNearestBoundary(matches).route.id, {
        type: ResultType.error,
        error: opts.pendingError
      }];
    } else if (opts && opts.submission && isMutationMethod(opts.submission.formMethod)) {
      let actionResult = await handleAction(request, location, opts.submission, matches, fogOfWar.active, {
        replace: opts.replace,
        flushSync: flushSync2
      });
      if (actionResult.shortCircuited) {
        return;
      }
      if (actionResult.pendingActionResult) {
        let [routeId, result] = actionResult.pendingActionResult;
        if (isErrorResult(result) && isRouteErrorResponse(result.error) && result.error.status === 404) {
          pendingNavigationController = null;
          completeNavigation(location, {
            matches: actionResult.matches,
            loaderData: {},
            errors: {
              [routeId]: result.error
            }
          });
          return;
        }
      }
      matches = actionResult.matches || matches;
      pendingActionResult = actionResult.pendingActionResult;
      loadingNavigation = getLoadingNavigation(location, opts.submission);
      flushSync2 = false;
      fogOfWar.active = false;
      request = createClientSideRequest(init.history, request.url, request.signal);
    }
    let {
      shortCircuited,
      matches: updatedMatches,
      loaderData,
      errors
    } = await handleLoaders(request, location, matches, fogOfWar.active, loadingNavigation, opts && opts.submission, opts && opts.fetcherSubmission, opts && opts.replace, opts && opts.initialHydration === true, flushSync2, pendingActionResult);
    if (shortCircuited) {
      return;
    }
    pendingNavigationController = null;
    completeNavigation(location, _extends({
      matches: updatedMatches || matches
    }, getActionDataForCommit(pendingActionResult), {
      loaderData,
      errors
    }));
  }
  async function handleAction(request, location, submission, matches, isFogOfWar, opts) {
    if (opts === void 0) {
      opts = {};
    }
    interruptActiveLoads();
    let navigation = getSubmittingNavigation(location, submission);
    updateState({
      navigation
    }, {
      flushSync: opts.flushSync === true
    });
    if (isFogOfWar) {
      let discoverResult = await discoverRoutes(matches, location.pathname, request.signal);
      if (discoverResult.type === "aborted") {
        return {
          shortCircuited: true
        };
      } else if (discoverResult.type === "error") {
        let boundaryId = findNearestBoundary(discoverResult.partialMatches).route.id;
        return {
          matches: discoverResult.partialMatches,
          pendingActionResult: [boundaryId, {
            type: ResultType.error,
            error: discoverResult.error
          }]
        };
      } else if (!discoverResult.matches) {
        let {
          notFoundMatches,
          error,
          route
        } = handleNavigational404(location.pathname);
        return {
          matches: notFoundMatches,
          pendingActionResult: [route.id, {
            type: ResultType.error,
            error
          }]
        };
      } else {
        matches = discoverResult.matches;
      }
    }
    let result;
    let actionMatch = getTargetMatch(matches, location);
    if (!actionMatch.route.action && !actionMatch.route.lazy) {
      result = {
        type: ResultType.error,
        error: getInternalRouterError(405, {
          method: request.method,
          pathname: location.pathname,
          routeId: actionMatch.route.id
        })
      };
    } else {
      let results = await callDataStrategy("action", state, request, [actionMatch], matches, null);
      result = results[actionMatch.route.id];
      if (request.signal.aborted) {
        return {
          shortCircuited: true
        };
      }
    }
    if (isRedirectResult(result)) {
      let replace;
      if (opts && opts.replace != null) {
        replace = opts.replace;
      } else {
        let location2 = normalizeRedirectLocation(result.response.headers.get("Location"), new URL(request.url), basename);
        replace = location2 === state.location.pathname + state.location.search;
      }
      await startRedirectNavigation(request, result, true, {
        submission,
        replace
      });
      return {
        shortCircuited: true
      };
    }
    if (isDeferredResult(result)) {
      throw getInternalRouterError(400, {
        type: "defer-action"
      });
    }
    if (isErrorResult(result)) {
      let boundaryMatch = findNearestBoundary(matches, actionMatch.route.id);
      if ((opts && opts.replace) !== true) {
        pendingAction = Action.Push;
      }
      return {
        matches,
        pendingActionResult: [boundaryMatch.route.id, result]
      };
    }
    return {
      matches,
      pendingActionResult: [actionMatch.route.id, result]
    };
  }
  async function handleLoaders(request, location, matches, isFogOfWar, overrideNavigation, submission, fetcherSubmission, replace, initialHydration, flushSync2, pendingActionResult) {
    let loadingNavigation = overrideNavigation || getLoadingNavigation(location, submission);
    let activeSubmission = submission || fetcherSubmission || getSubmissionFromNavigation(loadingNavigation);
    let shouldUpdateNavigationState = !isUninterruptedRevalidation && (!future.v7_partialHydration || !initialHydration);
    if (isFogOfWar) {
      if (shouldUpdateNavigationState) {
        let actionData = getUpdatedActionData(pendingActionResult);
        updateState(_extends({
          navigation: loadingNavigation
        }, actionData !== void 0 ? {
          actionData
        } : {}), {
          flushSync: flushSync2
        });
      }
      let discoverResult = await discoverRoutes(matches, location.pathname, request.signal);
      if (discoverResult.type === "aborted") {
        return {
          shortCircuited: true
        };
      } else if (discoverResult.type === "error") {
        let boundaryId = findNearestBoundary(discoverResult.partialMatches).route.id;
        return {
          matches: discoverResult.partialMatches,
          loaderData: {},
          errors: {
            [boundaryId]: discoverResult.error
          }
        };
      } else if (!discoverResult.matches) {
        let {
          error,
          notFoundMatches,
          route
        } = handleNavigational404(location.pathname);
        return {
          matches: notFoundMatches,
          loaderData: {},
          errors: {
            [route.id]: error
          }
        };
      } else {
        matches = discoverResult.matches;
      }
    }
    let routesToUse = inFlightDataRoutes || dataRoutes;
    let [matchesToLoad, revalidatingFetchers] = getMatchesToLoad(init.history, state, matches, activeSubmission, location, future.v7_partialHydration && initialHydration === true, future.v7_skipActionErrorRevalidation, isRevalidationRequired, cancelledDeferredRoutes, cancelledFetcherLoads, deletedFetchers, fetchLoadMatches, fetchRedirectIds, routesToUse, basename, pendingActionResult);
    cancelActiveDeferreds((routeId) => !(matches && matches.some((m3) => m3.route.id === routeId)) || matchesToLoad && matchesToLoad.some((m3) => m3.route.id === routeId));
    pendingNavigationLoadId = ++incrementingLoadId;
    if (matchesToLoad.length === 0 && revalidatingFetchers.length === 0) {
      let updatedFetchers2 = markFetchRedirectsDone();
      completeNavigation(location, _extends({
        matches,
        loaderData: {},
        errors: pendingActionResult && isErrorResult(pendingActionResult[1]) ? {
          [pendingActionResult[0]]: pendingActionResult[1].error
        } : null
      }, getActionDataForCommit(pendingActionResult), updatedFetchers2 ? {
        fetchers: new Map(state.fetchers)
      } : {}), {
        flushSync: flushSync2
      });
      return {
        shortCircuited: true
      };
    }
    if (shouldUpdateNavigationState) {
      let updates = {};
      if (!isFogOfWar) {
        updates.navigation = loadingNavigation;
        let actionData = getUpdatedActionData(pendingActionResult);
        if (actionData !== void 0) {
          updates.actionData = actionData;
        }
      }
      if (revalidatingFetchers.length > 0) {
        updates.fetchers = getUpdatedRevalidatingFetchers(revalidatingFetchers);
      }
      updateState(updates, {
        flushSync: flushSync2
      });
    }
    revalidatingFetchers.forEach((rf2) => {
      abortFetcher(rf2.key);
      if (rf2.controller) {
        fetchControllers.set(rf2.key, rf2.controller);
      }
    });
    let abortPendingFetchRevalidations = () => revalidatingFetchers.forEach((f3) => abortFetcher(f3.key));
    if (pendingNavigationController) {
      pendingNavigationController.signal.addEventListener("abort", abortPendingFetchRevalidations);
    }
    let {
      loaderResults,
      fetcherResults
    } = await callLoadersAndMaybeResolveData(state, matches, matchesToLoad, revalidatingFetchers, request);
    if (request.signal.aborted) {
      return {
        shortCircuited: true
      };
    }
    if (pendingNavigationController) {
      pendingNavigationController.signal.removeEventListener("abort", abortPendingFetchRevalidations);
    }
    revalidatingFetchers.forEach((rf2) => fetchControllers.delete(rf2.key));
    let redirect = findRedirect(loaderResults);
    if (redirect) {
      await startRedirectNavigation(request, redirect.result, true, {
        replace
      });
      return {
        shortCircuited: true
      };
    }
    redirect = findRedirect(fetcherResults);
    if (redirect) {
      fetchRedirectIds.add(redirect.key);
      await startRedirectNavigation(request, redirect.result, true, {
        replace
      });
      return {
        shortCircuited: true
      };
    }
    let {
      loaderData,
      errors
    } = processLoaderData(state, matches, loaderResults, pendingActionResult, revalidatingFetchers, fetcherResults, activeDeferreds);
    activeDeferreds.forEach((deferredData, routeId) => {
      deferredData.subscribe((aborted) => {
        if (aborted || deferredData.done) {
          activeDeferreds.delete(routeId);
        }
      });
    });
    if (future.v7_partialHydration && initialHydration && state.errors) {
      errors = _extends({}, state.errors, errors);
    }
    let updatedFetchers = markFetchRedirectsDone();
    let didAbortFetchLoads = abortStaleFetchLoads(pendingNavigationLoadId);
    let shouldUpdateFetchers = updatedFetchers || didAbortFetchLoads || revalidatingFetchers.length > 0;
    return _extends({
      matches,
      loaderData,
      errors
    }, shouldUpdateFetchers ? {
      fetchers: new Map(state.fetchers)
    } : {});
  }
  function getUpdatedActionData(pendingActionResult) {
    if (pendingActionResult && !isErrorResult(pendingActionResult[1])) {
      return {
        [pendingActionResult[0]]: pendingActionResult[1].data
      };
    } else if (state.actionData) {
      if (Object.keys(state.actionData).length === 0) {
        return null;
      } else {
        return state.actionData;
      }
    }
  }
  function getUpdatedRevalidatingFetchers(revalidatingFetchers) {
    revalidatingFetchers.forEach((rf2) => {
      let fetcher = state.fetchers.get(rf2.key);
      let revalidatingFetcher = getLoadingFetcher(void 0, fetcher ? fetcher.data : void 0);
      state.fetchers.set(rf2.key, revalidatingFetcher);
    });
    return new Map(state.fetchers);
  }
  function fetch2(key, routeId, href, opts) {
    if (isServer) {
      throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");
    }
    abortFetcher(key);
    let flushSync2 = (opts && opts.flushSync) === true;
    let routesToUse = inFlightDataRoutes || dataRoutes;
    let normalizedPath = normalizeTo(state.location, state.matches, basename, future.v7_prependBasename, href, future.v7_relativeSplatPath, routeId, opts == null ? void 0 : opts.relative);
    let matches = matchRoutes(routesToUse, normalizedPath, basename);
    let fogOfWar = checkFogOfWar(matches, routesToUse, normalizedPath);
    if (fogOfWar.active && fogOfWar.matches) {
      matches = fogOfWar.matches;
    }
    if (!matches) {
      setFetcherError(key, routeId, getInternalRouterError(404, {
        pathname: normalizedPath
      }), {
        flushSync: flushSync2
      });
      return;
    }
    let {
      path,
      submission,
      error
    } = normalizeNavigateOptions(future.v7_normalizeFormMethod, true, normalizedPath, opts);
    if (error) {
      setFetcherError(key, routeId, error, {
        flushSync: flushSync2
      });
      return;
    }
    let match = getTargetMatch(matches, path);
    let preventScrollReset = (opts && opts.preventScrollReset) === true;
    if (submission && isMutationMethod(submission.formMethod)) {
      handleFetcherAction(key, routeId, path, match, matches, fogOfWar.active, flushSync2, preventScrollReset, submission);
      return;
    }
    fetchLoadMatches.set(key, {
      routeId,
      path
    });
    handleFetcherLoader(key, routeId, path, match, matches, fogOfWar.active, flushSync2, preventScrollReset, submission);
  }
  async function handleFetcherAction(key, routeId, path, match, requestMatches, isFogOfWar, flushSync2, preventScrollReset, submission) {
    interruptActiveLoads();
    fetchLoadMatches.delete(key);
    function detectAndHandle405Error(m3) {
      if (!m3.route.action && !m3.route.lazy) {
        let error = getInternalRouterError(405, {
          method: submission.formMethod,
          pathname: path,
          routeId
        });
        setFetcherError(key, routeId, error, {
          flushSync: flushSync2
        });
        return true;
      }
      return false;
    }
    if (!isFogOfWar && detectAndHandle405Error(match)) {
      return;
    }
    let existingFetcher = state.fetchers.get(key);
    updateFetcherState(key, getSubmittingFetcher(submission, existingFetcher), {
      flushSync: flushSync2
    });
    let abortController = new AbortController();
    let fetchRequest = createClientSideRequest(init.history, path, abortController.signal, submission);
    if (isFogOfWar) {
      let discoverResult = await discoverRoutes(requestMatches, path, fetchRequest.signal);
      if (discoverResult.type === "aborted") {
        return;
      } else if (discoverResult.type === "error") {
        setFetcherError(key, routeId, discoverResult.error, {
          flushSync: flushSync2
        });
        return;
      } else if (!discoverResult.matches) {
        setFetcherError(key, routeId, getInternalRouterError(404, {
          pathname: path
        }), {
          flushSync: flushSync2
        });
        return;
      } else {
        requestMatches = discoverResult.matches;
        match = getTargetMatch(requestMatches, path);
        if (detectAndHandle405Error(match)) {
          return;
        }
      }
    }
    fetchControllers.set(key, abortController);
    let originatingLoadId = incrementingLoadId;
    let actionResults = await callDataStrategy("action", state, fetchRequest, [match], requestMatches, key);
    let actionResult = actionResults[match.route.id];
    if (fetchRequest.signal.aborted) {
      if (fetchControllers.get(key) === abortController) {
        fetchControllers.delete(key);
      }
      return;
    }
    if (future.v7_fetcherPersist && deletedFetchers.has(key)) {
      if (isRedirectResult(actionResult) || isErrorResult(actionResult)) {
        updateFetcherState(key, getDoneFetcher(void 0));
        return;
      }
    } else {
      if (isRedirectResult(actionResult)) {
        fetchControllers.delete(key);
        if (pendingNavigationLoadId > originatingLoadId) {
          updateFetcherState(key, getDoneFetcher(void 0));
          return;
        } else {
          fetchRedirectIds.add(key);
          updateFetcherState(key, getLoadingFetcher(submission));
          return startRedirectNavigation(fetchRequest, actionResult, false, {
            fetcherSubmission: submission,
            preventScrollReset
          });
        }
      }
      if (isErrorResult(actionResult)) {
        setFetcherError(key, routeId, actionResult.error);
        return;
      }
    }
    if (isDeferredResult(actionResult)) {
      throw getInternalRouterError(400, {
        type: "defer-action"
      });
    }
    let nextLocation = state.navigation.location || state.location;
    let revalidationRequest = createClientSideRequest(init.history, nextLocation, abortController.signal);
    let routesToUse = inFlightDataRoutes || dataRoutes;
    let matches = state.navigation.state !== "idle" ? matchRoutes(routesToUse, state.navigation.location, basename) : state.matches;
    invariant(matches, "Didn't find any matches after fetcher action");
    let loadId = ++incrementingLoadId;
    fetchReloadIds.set(key, loadId);
    let loadFetcher = getLoadingFetcher(submission, actionResult.data);
    state.fetchers.set(key, loadFetcher);
    let [matchesToLoad, revalidatingFetchers] = getMatchesToLoad(init.history, state, matches, submission, nextLocation, false, future.v7_skipActionErrorRevalidation, isRevalidationRequired, cancelledDeferredRoutes, cancelledFetcherLoads, deletedFetchers, fetchLoadMatches, fetchRedirectIds, routesToUse, basename, [match.route.id, actionResult]);
    revalidatingFetchers.filter((rf2) => rf2.key !== key).forEach((rf2) => {
      let staleKey = rf2.key;
      let existingFetcher2 = state.fetchers.get(staleKey);
      let revalidatingFetcher = getLoadingFetcher(void 0, existingFetcher2 ? existingFetcher2.data : void 0);
      state.fetchers.set(staleKey, revalidatingFetcher);
      abortFetcher(staleKey);
      if (rf2.controller) {
        fetchControllers.set(staleKey, rf2.controller);
      }
    });
    updateState({
      fetchers: new Map(state.fetchers)
    });
    let abortPendingFetchRevalidations = () => revalidatingFetchers.forEach((rf2) => abortFetcher(rf2.key));
    abortController.signal.addEventListener("abort", abortPendingFetchRevalidations);
    let {
      loaderResults,
      fetcherResults
    } = await callLoadersAndMaybeResolveData(state, matches, matchesToLoad, revalidatingFetchers, revalidationRequest);
    if (abortController.signal.aborted) {
      return;
    }
    abortController.signal.removeEventListener("abort", abortPendingFetchRevalidations);
    fetchReloadIds.delete(key);
    fetchControllers.delete(key);
    revalidatingFetchers.forEach((r4) => fetchControllers.delete(r4.key));
    let redirect = findRedirect(loaderResults);
    if (redirect) {
      return startRedirectNavigation(revalidationRequest, redirect.result, false, {
        preventScrollReset
      });
    }
    redirect = findRedirect(fetcherResults);
    if (redirect) {
      fetchRedirectIds.add(redirect.key);
      return startRedirectNavigation(revalidationRequest, redirect.result, false, {
        preventScrollReset
      });
    }
    let {
      loaderData,
      errors
    } = processLoaderData(state, matches, loaderResults, void 0, revalidatingFetchers, fetcherResults, activeDeferreds);
    if (state.fetchers.has(key)) {
      let doneFetcher = getDoneFetcher(actionResult.data);
      state.fetchers.set(key, doneFetcher);
    }
    abortStaleFetchLoads(loadId);
    if (state.navigation.state === "loading" && loadId > pendingNavigationLoadId) {
      invariant(pendingAction, "Expected pending action");
      pendingNavigationController && pendingNavigationController.abort();
      completeNavigation(state.navigation.location, {
        matches,
        loaderData,
        errors,
        fetchers: new Map(state.fetchers)
      });
    } else {
      updateState({
        errors,
        loaderData: mergeLoaderData(state.loaderData, loaderData, matches, errors),
        fetchers: new Map(state.fetchers)
      });
      isRevalidationRequired = false;
    }
  }
  async function handleFetcherLoader(key, routeId, path, match, matches, isFogOfWar, flushSync2, preventScrollReset, submission) {
    let existingFetcher = state.fetchers.get(key);
    updateFetcherState(key, getLoadingFetcher(submission, existingFetcher ? existingFetcher.data : void 0), {
      flushSync: flushSync2
    });
    let abortController = new AbortController();
    let fetchRequest = createClientSideRequest(init.history, path, abortController.signal);
    if (isFogOfWar) {
      let discoverResult = await discoverRoutes(matches, path, fetchRequest.signal);
      if (discoverResult.type === "aborted") {
        return;
      } else if (discoverResult.type === "error") {
        setFetcherError(key, routeId, discoverResult.error, {
          flushSync: flushSync2
        });
        return;
      } else if (!discoverResult.matches) {
        setFetcherError(key, routeId, getInternalRouterError(404, {
          pathname: path
        }), {
          flushSync: flushSync2
        });
        return;
      } else {
        matches = discoverResult.matches;
        match = getTargetMatch(matches, path);
      }
    }
    fetchControllers.set(key, abortController);
    let originatingLoadId = incrementingLoadId;
    let results = await callDataStrategy("loader", state, fetchRequest, [match], matches, key);
    let result = results[match.route.id];
    if (isDeferredResult(result)) {
      result = await resolveDeferredData(result, fetchRequest.signal, true) || result;
    }
    if (fetchControllers.get(key) === abortController) {
      fetchControllers.delete(key);
    }
    if (fetchRequest.signal.aborted) {
      return;
    }
    if (deletedFetchers.has(key)) {
      updateFetcherState(key, getDoneFetcher(void 0));
      return;
    }
    if (isRedirectResult(result)) {
      if (pendingNavigationLoadId > originatingLoadId) {
        updateFetcherState(key, getDoneFetcher(void 0));
        return;
      } else {
        fetchRedirectIds.add(key);
        await startRedirectNavigation(fetchRequest, result, false, {
          preventScrollReset
        });
        return;
      }
    }
    if (isErrorResult(result)) {
      setFetcherError(key, routeId, result.error);
      return;
    }
    invariant(!isDeferredResult(result), "Unhandled fetcher deferred data");
    updateFetcherState(key, getDoneFetcher(result.data));
  }
  async function startRedirectNavigation(request, redirect, isNavigation, _temp2) {
    let {
      submission,
      fetcherSubmission,
      preventScrollReset,
      replace
    } = _temp2 === void 0 ? {} : _temp2;
    if (redirect.response.headers.has("X-Remix-Revalidate")) {
      isRevalidationRequired = true;
    }
    let location = redirect.response.headers.get("Location");
    invariant(location, "Expected a Location header on the redirect Response");
    location = normalizeRedirectLocation(location, new URL(request.url), basename);
    let redirectLocation = createLocation(state.location, location, {
      _isRedirect: true
    });
    if (isBrowser2) {
      let isDocumentReload = false;
      if (redirect.response.headers.has("X-Remix-Reload-Document")) {
        isDocumentReload = true;
      } else if (ABSOLUTE_URL_REGEX.test(location)) {
        const url = init.history.createURL(location);
        isDocumentReload = url.origin !== routerWindow.location.origin || stripBasename(url.pathname, basename) == null;
      }
      if (isDocumentReload) {
        if (replace) {
          routerWindow.location.replace(location);
        } else {
          routerWindow.location.assign(location);
        }
        return;
      }
    }
    pendingNavigationController = null;
    let redirectHistoryAction = replace === true || redirect.response.headers.has("X-Remix-Replace") ? Action.Replace : Action.Push;
    let {
      formMethod,
      formAction,
      formEncType
    } = state.navigation;
    if (!submission && !fetcherSubmission && formMethod && formAction && formEncType) {
      submission = getSubmissionFromNavigation(state.navigation);
    }
    let activeSubmission = submission || fetcherSubmission;
    if (redirectPreserveMethodStatusCodes.has(redirect.response.status) && activeSubmission && isMutationMethod(activeSubmission.formMethod)) {
      await startNavigation(redirectHistoryAction, redirectLocation, {
        submission: _extends({}, activeSubmission, {
          formAction: location
        }),
        preventScrollReset: preventScrollReset || pendingPreventScrollReset,
        enableViewTransition: isNavigation ? pendingViewTransitionEnabled : void 0
      });
    } else {
      let overrideNavigation = getLoadingNavigation(redirectLocation, submission);
      await startNavigation(redirectHistoryAction, redirectLocation, {
        overrideNavigation,
        fetcherSubmission,
        preventScrollReset: preventScrollReset || pendingPreventScrollReset,
        enableViewTransition: isNavigation ? pendingViewTransitionEnabled : void 0
      });
    }
  }
  async function callDataStrategy(type, state2, request, matchesToLoad, matches, fetcherKey) {
    let results;
    let dataResults = {};
    try {
      results = await callDataStrategyImpl(dataStrategyImpl, type, state2, request, matchesToLoad, matches, fetcherKey, manifest, mapRouteProperties2);
    } catch (e2) {
      matchesToLoad.forEach((m3) => {
        dataResults[m3.route.id] = {
          type: ResultType.error,
          error: e2
        };
      });
      return dataResults;
    }
    for (let [routeId, result] of Object.entries(results)) {
      if (isRedirectDataStrategyResultResult(result)) {
        let response = result.result;
        dataResults[routeId] = {
          type: ResultType.redirect,
          response: normalizeRelativeRoutingRedirectResponse(response, request, routeId, matches, basename, future.v7_relativeSplatPath)
        };
      } else {
        dataResults[routeId] = await convertDataStrategyResultToDataResult(result);
      }
    }
    return dataResults;
  }
  async function callLoadersAndMaybeResolveData(state2, matches, matchesToLoad, fetchersToLoad, request) {
    let currentMatches = state2.matches;
    let loaderResultsPromise = callDataStrategy("loader", state2, request, matchesToLoad, matches, null);
    let fetcherResultsPromise = Promise.all(fetchersToLoad.map(async (f3) => {
      if (f3.matches && f3.match && f3.controller) {
        let results = await callDataStrategy("loader", state2, createClientSideRequest(init.history, f3.path, f3.controller.signal), [f3.match], f3.matches, f3.key);
        let result = results[f3.match.route.id];
        return {
          [f3.key]: result
        };
      } else {
        return Promise.resolve({
          [f3.key]: {
            type: ResultType.error,
            error: getInternalRouterError(404, {
              pathname: f3.path
            })
          }
        });
      }
    }));
    let loaderResults = await loaderResultsPromise;
    let fetcherResults = (await fetcherResultsPromise).reduce((acc, r4) => Object.assign(acc, r4), {});
    await Promise.all([resolveNavigationDeferredResults(matches, loaderResults, request.signal, currentMatches, state2.loaderData), resolveFetcherDeferredResults(matches, fetcherResults, fetchersToLoad)]);
    return {
      loaderResults,
      fetcherResults
    };
  }
  function interruptActiveLoads() {
    isRevalidationRequired = true;
    cancelledDeferredRoutes.push(...cancelActiveDeferreds());
    fetchLoadMatches.forEach((_3, key) => {
      if (fetchControllers.has(key)) {
        cancelledFetcherLoads.add(key);
      }
      abortFetcher(key);
    });
  }
  function updateFetcherState(key, fetcher, opts) {
    if (opts === void 0) {
      opts = {};
    }
    state.fetchers.set(key, fetcher);
    updateState({
      fetchers: new Map(state.fetchers)
    }, {
      flushSync: (opts && opts.flushSync) === true
    });
  }
  function setFetcherError(key, routeId, error, opts) {
    if (opts === void 0) {
      opts = {};
    }
    let boundaryMatch = findNearestBoundary(state.matches, routeId);
    deleteFetcher(key);
    updateState({
      errors: {
        [boundaryMatch.route.id]: error
      },
      fetchers: new Map(state.fetchers)
    }, {
      flushSync: (opts && opts.flushSync) === true
    });
  }
  function getFetcher(key) {
    if (future.v7_fetcherPersist) {
      activeFetchers.set(key, (activeFetchers.get(key) || 0) + 1);
      if (deletedFetchers.has(key)) {
        deletedFetchers.delete(key);
      }
    }
    return state.fetchers.get(key) || IDLE_FETCHER;
  }
  function deleteFetcher(key) {
    let fetcher = state.fetchers.get(key);
    if (fetchControllers.has(key) && !(fetcher && fetcher.state === "loading" && fetchReloadIds.has(key))) {
      abortFetcher(key);
    }
    fetchLoadMatches.delete(key);
    fetchReloadIds.delete(key);
    fetchRedirectIds.delete(key);
    deletedFetchers.delete(key);
    cancelledFetcherLoads.delete(key);
    state.fetchers.delete(key);
  }
  function deleteFetcherAndUpdateState(key) {
    if (future.v7_fetcherPersist) {
      let count = (activeFetchers.get(key) || 0) - 1;
      if (count <= 0) {
        activeFetchers.delete(key);
        deletedFetchers.add(key);
      } else {
        activeFetchers.set(key, count);
      }
    } else {
      deleteFetcher(key);
    }
    updateState({
      fetchers: new Map(state.fetchers)
    });
  }
  function abortFetcher(key) {
    let controller = fetchControllers.get(key);
    if (controller) {
      controller.abort();
      fetchControllers.delete(key);
    }
  }
  function markFetchersDone(keys) {
    for (let key of keys) {
      let fetcher = getFetcher(key);
      let doneFetcher = getDoneFetcher(fetcher.data);
      state.fetchers.set(key, doneFetcher);
    }
  }
  function markFetchRedirectsDone() {
    let doneKeys = [];
    let updatedFetchers = false;
    for (let key of fetchRedirectIds) {
      let fetcher = state.fetchers.get(key);
      invariant(fetcher, "Expected fetcher: " + key);
      if (fetcher.state === "loading") {
        fetchRedirectIds.delete(key);
        doneKeys.push(key);
        updatedFetchers = true;
      }
    }
    markFetchersDone(doneKeys);
    return updatedFetchers;
  }
  function abortStaleFetchLoads(landedId) {
    let yeetedKeys = [];
    for (let [key, id2] of fetchReloadIds) {
      if (id2 < landedId) {
        let fetcher = state.fetchers.get(key);
        invariant(fetcher, "Expected fetcher: " + key);
        if (fetcher.state === "loading") {
          abortFetcher(key);
          fetchReloadIds.delete(key);
          yeetedKeys.push(key);
        }
      }
    }
    markFetchersDone(yeetedKeys);
    return yeetedKeys.length > 0;
  }
  function getBlocker(key, fn) {
    let blocker = state.blockers.get(key) || IDLE_BLOCKER;
    if (blockerFunctions.get(key) !== fn) {
      blockerFunctions.set(key, fn);
    }
    return blocker;
  }
  function deleteBlocker(key) {
    state.blockers.delete(key);
    blockerFunctions.delete(key);
  }
  function updateBlocker(key, newBlocker) {
    let blocker = state.blockers.get(key) || IDLE_BLOCKER;
    invariant(blocker.state === "unblocked" && newBlocker.state === "blocked" || blocker.state === "blocked" && newBlocker.state === "blocked" || blocker.state === "blocked" && newBlocker.state === "proceeding" || blocker.state === "blocked" && newBlocker.state === "unblocked" || blocker.state === "proceeding" && newBlocker.state === "unblocked", "Invalid blocker state transition: " + blocker.state + " -> " + newBlocker.state);
    let blockers = new Map(state.blockers);
    blockers.set(key, newBlocker);
    updateState({
      blockers
    });
  }
  function shouldBlockNavigation(_ref2) {
    let {
      currentLocation,
      nextLocation,
      historyAction
    } = _ref2;
    if (blockerFunctions.size === 0) {
      return;
    }
    if (blockerFunctions.size > 1) {
      warning(false, "A router only supports one blocker at a time");
    }
    let entries = Array.from(blockerFunctions.entries());
    let [blockerKey, blockerFunction] = entries[entries.length - 1];
    let blocker = state.blockers.get(blockerKey);
    if (blocker && blocker.state === "proceeding") {
      return;
    }
    if (blockerFunction({
      currentLocation,
      nextLocation,
      historyAction
    })) {
      return blockerKey;
    }
  }
  function handleNavigational404(pathname) {
    let error = getInternalRouterError(404, {
      pathname
    });
    let routesToUse = inFlightDataRoutes || dataRoutes;
    let {
      matches,
      route
    } = getShortCircuitMatches(routesToUse);
    cancelActiveDeferreds();
    return {
      notFoundMatches: matches,
      route,
      error
    };
  }
  function cancelActiveDeferreds(predicate) {
    let cancelledRouteIds = [];
    activeDeferreds.forEach((dfd, routeId) => {
      if (!predicate || predicate(routeId)) {
        dfd.cancel();
        cancelledRouteIds.push(routeId);
        activeDeferreds.delete(routeId);
      }
    });
    return cancelledRouteIds;
  }
  function enableScrollRestoration(positions, getPosition, getKey) {
    savedScrollPositions = positions;
    getScrollPosition = getPosition;
    getScrollRestorationKey = getKey || null;
    if (!initialScrollRestored && state.navigation === IDLE_NAVIGATION) {
      initialScrollRestored = true;
      let y4 = getSavedScrollPosition(state.location, state.matches);
      if (y4 != null) {
        updateState({
          restoreScrollPosition: y4
        });
      }
    }
    return () => {
      savedScrollPositions = null;
      getScrollPosition = null;
      getScrollRestorationKey = null;
    };
  }
  function getScrollKey(location, matches) {
    if (getScrollRestorationKey) {
      let key = getScrollRestorationKey(location, matches.map((m3) => convertRouteMatchToUiMatch(m3, state.loaderData)));
      return key || location.key;
    }
    return location.key;
  }
  function saveScrollPosition(location, matches) {
    if (savedScrollPositions && getScrollPosition) {
      let key = getScrollKey(location, matches);
      savedScrollPositions[key] = getScrollPosition();
    }
  }
  function getSavedScrollPosition(location, matches) {
    if (savedScrollPositions) {
      let key = getScrollKey(location, matches);
      let y4 = savedScrollPositions[key];
      if (typeof y4 === "number") {
        return y4;
      }
    }
    return null;
  }
  function checkFogOfWar(matches, routesToUse, pathname) {
    if (patchRoutesOnNavigationImpl) {
      if (!matches) {
        let fogMatches = matchRoutesImpl(routesToUse, pathname, basename, true);
        return {
          active: true,
          matches: fogMatches || []
        };
      } else {
        if (Object.keys(matches[0].params).length > 0) {
          let partialMatches = matchRoutesImpl(routesToUse, pathname, basename, true);
          return {
            active: true,
            matches: partialMatches
          };
        }
      }
    }
    return {
      active: false,
      matches: null
    };
  }
  async function discoverRoutes(matches, pathname, signal) {
    if (!patchRoutesOnNavigationImpl) {
      return {
        type: "success",
        matches
      };
    }
    let partialMatches = matches;
    while (true) {
      let isNonHMR = inFlightDataRoutes == null;
      let routesToUse = inFlightDataRoutes || dataRoutes;
      let localManifest = manifest;
      try {
        await patchRoutesOnNavigationImpl({
          path: pathname,
          matches: partialMatches,
          patch: (routeId, children) => {
            if (signal.aborted)
              return;
            patchRoutesImpl(routeId, children, routesToUse, localManifest, mapRouteProperties2);
          }
        });
      } catch (e2) {
        return {
          type: "error",
          error: e2,
          partialMatches
        };
      } finally {
        if (isNonHMR && !signal.aborted) {
          dataRoutes = [...dataRoutes];
        }
      }
      if (signal.aborted) {
        return {
          type: "aborted"
        };
      }
      let newMatches = matchRoutes(routesToUse, pathname, basename);
      if (newMatches) {
        return {
          type: "success",
          matches: newMatches
        };
      }
      let newPartialMatches = matchRoutesImpl(routesToUse, pathname, basename, true);
      if (!newPartialMatches || partialMatches.length === newPartialMatches.length && partialMatches.every((m3, i2) => m3.route.id === newPartialMatches[i2].route.id)) {
        return {
          type: "success",
          matches: null
        };
      }
      partialMatches = newPartialMatches;
    }
  }
  function _internalSetRoutes(newRoutes) {
    manifest = {};
    inFlightDataRoutes = convertRoutesToDataRoutes(newRoutes, mapRouteProperties2, void 0, manifest);
  }
  function patchRoutes(routeId, children) {
    let isNonHMR = inFlightDataRoutes == null;
    let routesToUse = inFlightDataRoutes || dataRoutes;
    patchRoutesImpl(routeId, children, routesToUse, manifest, mapRouteProperties2);
    if (isNonHMR) {
      dataRoutes = [...dataRoutes];
      updateState({});
    }
  }
  router2 = {
    get basename() {
      return basename;
    },
    get future() {
      return future;
    },
    get state() {
      return state;
    },
    get routes() {
      return dataRoutes;
    },
    get window() {
      return routerWindow;
    },
    initialize,
    subscribe,
    enableScrollRestoration,
    navigate,
    fetch: fetch2,
    revalidate,
    createHref: (to2) => init.history.createHref(to2),
    encodeLocation: (to2) => init.history.encodeLocation(to2),
    getFetcher,
    deleteFetcher: deleteFetcherAndUpdateState,
    dispose,
    getBlocker,
    deleteBlocker,
    patchRoutes,
    _internalFetchControllers: fetchControllers,
    _internalActiveDeferreds: activeDeferreds,
    _internalSetRoutes
  };
  return router2;
}
function isSubmissionNavigation(opts) {
  return opts != null && ("formData" in opts && opts.formData != null || "body" in opts && opts.body !== void 0);
}
function normalizeTo(location, matches, basename, prependBasename, to2, v7_relativeSplatPath, fromRouteId, relative) {
  let contextualMatches;
  let activeRouteMatch;
  if (fromRouteId) {
    contextualMatches = [];
    for (let match of matches) {
      contextualMatches.push(match);
      if (match.route.id === fromRouteId) {
        activeRouteMatch = match;
        break;
      }
    }
  } else {
    contextualMatches = matches;
    activeRouteMatch = matches[matches.length - 1];
  }
  let path = resolveTo(to2 ? to2 : ".", getResolveToMatches(contextualMatches, v7_relativeSplatPath), stripBasename(location.pathname, basename) || location.pathname, relative === "path");
  if (to2 == null) {
    path.search = location.search;
    path.hash = location.hash;
  }
  if ((to2 == null || to2 === "" || to2 === ".") && activeRouteMatch) {
    let nakedIndex = hasNakedIndexQuery(path.search);
    if (activeRouteMatch.route.index && !nakedIndex) {
      path.search = path.search ? path.search.replace(/^\?/, "?index&") : "?index";
    } else if (!activeRouteMatch.route.index && nakedIndex) {
      let params = new URLSearchParams(path.search);
      let indexValues = params.getAll("index");
      params.delete("index");
      indexValues.filter((v5) => v5).forEach((v5) => params.append("index", v5));
      let qs = params.toString();
      path.search = qs ? "?" + qs : "";
    }
  }
  if (prependBasename && basename !== "/") {
    path.pathname = path.pathname === "/" ? basename : joinPaths([basename, path.pathname]);
  }
  return createPath(path);
}
function normalizeNavigateOptions(normalizeFormMethod, isFetcher, path, opts) {
  if (!opts || !isSubmissionNavigation(opts)) {
    return {
      path
    };
  }
  if (opts.formMethod && !isValidMethod(opts.formMethod)) {
    return {
      path,
      error: getInternalRouterError(405, {
        method: opts.formMethod
      })
    };
  }
  let getInvalidBodyError = () => ({
    path,
    error: getInternalRouterError(400, {
      type: "invalid-body"
    })
  });
  let rawFormMethod = opts.formMethod || "get";
  let formMethod = normalizeFormMethod ? rawFormMethod.toUpperCase() : rawFormMethod.toLowerCase();
  let formAction = stripHashFromPath(path);
  if (opts.body !== void 0) {
    if (opts.formEncType === "text/plain") {
      if (!isMutationMethod(formMethod)) {
        return getInvalidBodyError();
      }
      let text = typeof opts.body === "string" ? opts.body : opts.body instanceof FormData || opts.body instanceof URLSearchParams ? Array.from(opts.body.entries()).reduce((acc, _ref3) => {
        let [name, value] = _ref3;
        return "" + acc + name + "=" + value + "\n";
      }, "") : String(opts.body);
      return {
        path,
        submission: {
          formMethod,
          formAction,
          formEncType: opts.formEncType,
          formData: void 0,
          json: void 0,
          text
        }
      };
    } else if (opts.formEncType === "application/json") {
      if (!isMutationMethod(formMethod)) {
        return getInvalidBodyError();
      }
      try {
        let json = typeof opts.body === "string" ? JSON.parse(opts.body) : opts.body;
        return {
          path,
          submission: {
            formMethod,
            formAction,
            formEncType: opts.formEncType,
            formData: void 0,
            json,
            text: void 0
          }
        };
      } catch (e2) {
        return getInvalidBodyError();
      }
    }
  }
  invariant(typeof FormData === "function", "FormData is not available in this environment");
  let searchParams;
  let formData;
  if (opts.formData) {
    searchParams = convertFormDataToSearchParams(opts.formData);
    formData = opts.formData;
  } else if (opts.body instanceof FormData) {
    searchParams = convertFormDataToSearchParams(opts.body);
    formData = opts.body;
  } else if (opts.body instanceof URLSearchParams) {
    searchParams = opts.body;
    formData = convertSearchParamsToFormData(searchParams);
  } else if (opts.body == null) {
    searchParams = new URLSearchParams();
    formData = new FormData();
  } else {
    try {
      searchParams = new URLSearchParams(opts.body);
      formData = convertSearchParamsToFormData(searchParams);
    } catch (e2) {
      return getInvalidBodyError();
    }
  }
  let submission = {
    formMethod,
    formAction,
    formEncType: opts && opts.formEncType || "application/x-www-form-urlencoded",
    formData,
    json: void 0,
    text: void 0
  };
  if (isMutationMethod(submission.formMethod)) {
    return {
      path,
      submission
    };
  }
  let parsedPath = parsePath(path);
  if (isFetcher && parsedPath.search && hasNakedIndexQuery(parsedPath.search)) {
    searchParams.append("index", "");
  }
  parsedPath.search = "?" + searchParams;
  return {
    path: createPath(parsedPath),
    submission
  };
}
function getLoaderMatchesUntilBoundary(matches, boundaryId, includeBoundary) {
  if (includeBoundary === void 0) {
    includeBoundary = false;
  }
  let index = matches.findIndex((m3) => m3.route.id === boundaryId);
  if (index >= 0) {
    return matches.slice(0, includeBoundary ? index + 1 : index);
  }
  return matches;
}
function getMatchesToLoad(history, state, matches, submission, location, initialHydration, skipActionErrorRevalidation, isRevalidationRequired, cancelledDeferredRoutes, cancelledFetcherLoads, deletedFetchers, fetchLoadMatches, fetchRedirectIds, routesToUse, basename, pendingActionResult) {
  let actionResult = pendingActionResult ? isErrorResult(pendingActionResult[1]) ? pendingActionResult[1].error : pendingActionResult[1].data : void 0;
  let currentUrl = history.createURL(state.location);
  let nextUrl = history.createURL(location);
  let boundaryMatches = matches;
  if (initialHydration && state.errors) {
    boundaryMatches = getLoaderMatchesUntilBoundary(matches, Object.keys(state.errors)[0], true);
  } else if (pendingActionResult && isErrorResult(pendingActionResult[1])) {
    boundaryMatches = getLoaderMatchesUntilBoundary(matches, pendingActionResult[0]);
  }
  let actionStatus = pendingActionResult ? pendingActionResult[1].statusCode : void 0;
  let shouldSkipRevalidation = skipActionErrorRevalidation && actionStatus && actionStatus >= 400;
  let navigationMatches = boundaryMatches.filter((match, index) => {
    let {
      route
    } = match;
    if (route.lazy) {
      return true;
    }
    if (route.loader == null) {
      return false;
    }
    if (initialHydration) {
      return shouldLoadRouteOnHydration(route, state.loaderData, state.errors);
    }
    if (isNewLoader(state.loaderData, state.matches[index], match) || cancelledDeferredRoutes.some((id2) => id2 === match.route.id)) {
      return true;
    }
    let currentRouteMatch = state.matches[index];
    let nextRouteMatch = match;
    return shouldRevalidateLoader(match, _extends({
      currentUrl,
      currentParams: currentRouteMatch.params,
      nextUrl,
      nextParams: nextRouteMatch.params
    }, submission, {
      actionResult,
      actionStatus,
      defaultShouldRevalidate: shouldSkipRevalidation ? false : isRevalidationRequired || currentUrl.pathname + currentUrl.search === nextUrl.pathname + nextUrl.search || currentUrl.search !== nextUrl.search || isNewRouteInstance(currentRouteMatch, nextRouteMatch)
    }));
  });
  let revalidatingFetchers = [];
  fetchLoadMatches.forEach((f3, key) => {
    if (initialHydration || !matches.some((m3) => m3.route.id === f3.routeId) || deletedFetchers.has(key)) {
      return;
    }
    let fetcherMatches = matchRoutes(routesToUse, f3.path, basename);
    if (!fetcherMatches) {
      revalidatingFetchers.push({
        key,
        routeId: f3.routeId,
        path: f3.path,
        matches: null,
        match: null,
        controller: null
      });
      return;
    }
    let fetcher = state.fetchers.get(key);
    let fetcherMatch = getTargetMatch(fetcherMatches, f3.path);
    let shouldRevalidate = false;
    if (fetchRedirectIds.has(key)) {
      shouldRevalidate = false;
    } else if (cancelledFetcherLoads.has(key)) {
      cancelledFetcherLoads.delete(key);
      shouldRevalidate = true;
    } else if (fetcher && fetcher.state !== "idle" && fetcher.data === void 0) {
      shouldRevalidate = isRevalidationRequired;
    } else {
      shouldRevalidate = shouldRevalidateLoader(fetcherMatch, _extends({
        currentUrl,
        currentParams: state.matches[state.matches.length - 1].params,
        nextUrl,
        nextParams: matches[matches.length - 1].params
      }, submission, {
        actionResult,
        actionStatus,
        defaultShouldRevalidate: shouldSkipRevalidation ? false : isRevalidationRequired
      }));
    }
    if (shouldRevalidate) {
      revalidatingFetchers.push({
        key,
        routeId: f3.routeId,
        path: f3.path,
        matches: fetcherMatches,
        match: fetcherMatch,
        controller: new AbortController()
      });
    }
  });
  return [navigationMatches, revalidatingFetchers];
}
function shouldLoadRouteOnHydration(route, loaderData, errors) {
  if (route.lazy) {
    return true;
  }
  if (!route.loader) {
    return false;
  }
  let hasData = loaderData != null && loaderData[route.id] !== void 0;
  let hasError = errors != null && errors[route.id] !== void 0;
  if (!hasData && hasError) {
    return false;
  }
  if (typeof route.loader === "function" && route.loader.hydrate === true) {
    return true;
  }
  return !hasData && !hasError;
}
function isNewLoader(currentLoaderData, currentMatch, match) {
  let isNew = !currentMatch || match.route.id !== currentMatch.route.id;
  let isMissingData = currentLoaderData[match.route.id] === void 0;
  return isNew || isMissingData;
}
function isNewRouteInstance(currentMatch, match) {
  let currentPath = currentMatch.route.path;
  return currentMatch.pathname !== match.pathname || currentPath != null && currentPath.endsWith("*") && currentMatch.params["*"] !== match.params["*"];
}
function shouldRevalidateLoader(loaderMatch, arg) {
  if (loaderMatch.route.shouldRevalidate) {
    let routeChoice = loaderMatch.route.shouldRevalidate(arg);
    if (typeof routeChoice === "boolean") {
      return routeChoice;
    }
  }
  return arg.defaultShouldRevalidate;
}
function patchRoutesImpl(routeId, children, routesToUse, manifest, mapRouteProperties2) {
  var _childrenToPatch;
  let childrenToPatch;
  if (routeId) {
    let route = manifest[routeId];
    invariant(route, "No route found to patch children into: routeId = " + routeId);
    if (!route.children) {
      route.children = [];
    }
    childrenToPatch = route.children;
  } else {
    childrenToPatch = routesToUse;
  }
  let uniqueChildren = children.filter((newRoute) => !childrenToPatch.some((existingRoute) => isSameRoute(newRoute, existingRoute)));
  let newRoutes = convertRoutesToDataRoutes(uniqueChildren, mapRouteProperties2, [routeId || "_", "patch", String(((_childrenToPatch = childrenToPatch) == null ? void 0 : _childrenToPatch.length) || "0")], manifest);
  childrenToPatch.push(...newRoutes);
}
function isSameRoute(newRoute, existingRoute) {
  if ("id" in newRoute && "id" in existingRoute && newRoute.id === existingRoute.id) {
    return true;
  }
  if (!(newRoute.index === existingRoute.index && newRoute.path === existingRoute.path && newRoute.caseSensitive === existingRoute.caseSensitive)) {
    return false;
  }
  if ((!newRoute.children || newRoute.children.length === 0) && (!existingRoute.children || existingRoute.children.length === 0)) {
    return true;
  }
  return newRoute.children.every((aChild, i2) => {
    var _existingRoute$childr;
    return (_existingRoute$childr = existingRoute.children) == null ? void 0 : _existingRoute$childr.some((bChild) => isSameRoute(aChild, bChild));
  });
}
async function loadLazyRouteModule(route, mapRouteProperties2, manifest) {
  if (!route.lazy) {
    return;
  }
  let lazyRoute = await route.lazy();
  if (!route.lazy) {
    return;
  }
  let routeToUpdate = manifest[route.id];
  invariant(routeToUpdate, "No route found in manifest");
  let routeUpdates = {};
  for (let lazyRouteProperty in lazyRoute) {
    let staticRouteValue = routeToUpdate[lazyRouteProperty];
    let isPropertyStaticallyDefined = staticRouteValue !== void 0 && lazyRouteProperty !== "hasErrorBoundary";
    warning(!isPropertyStaticallyDefined, 'Route "' + routeToUpdate.id + '" has a static property "' + lazyRouteProperty + '" defined but its lazy function is also returning a value for this property. ' + ('The lazy route property "' + lazyRouteProperty + '" will be ignored.'));
    if (!isPropertyStaticallyDefined && !immutableRouteKeys.has(lazyRouteProperty)) {
      routeUpdates[lazyRouteProperty] = lazyRoute[lazyRouteProperty];
    }
  }
  Object.assign(routeToUpdate, routeUpdates);
  Object.assign(routeToUpdate, _extends({}, mapRouteProperties2(routeToUpdate), {
    lazy: void 0
  }));
}
async function defaultDataStrategy(_ref4) {
  let {
    matches
  } = _ref4;
  let matchesToLoad = matches.filter((m3) => m3.shouldLoad);
  let results = await Promise.all(matchesToLoad.map((m3) => m3.resolve()));
  return results.reduce((acc, result, i2) => Object.assign(acc, {
    [matchesToLoad[i2].route.id]: result
  }), {});
}
async function callDataStrategyImpl(dataStrategyImpl, type, state, request, matchesToLoad, matches, fetcherKey, manifest, mapRouteProperties2, requestContext) {
  let loadRouteDefinitionsPromises = matches.map((m3) => m3.route.lazy ? loadLazyRouteModule(m3.route, mapRouteProperties2, manifest) : void 0);
  let dsMatches = matches.map((match, i2) => {
    let loadRoutePromise = loadRouteDefinitionsPromises[i2];
    let shouldLoad = matchesToLoad.some((m3) => m3.route.id === match.route.id);
    let resolve = async (handlerOverride) => {
      if (handlerOverride && request.method === "GET" && (match.route.lazy || match.route.loader)) {
        shouldLoad = true;
      }
      return shouldLoad ? callLoaderOrAction(type, request, match, loadRoutePromise, handlerOverride, requestContext) : Promise.resolve({
        type: ResultType.data,
        result: void 0
      });
    };
    return _extends({}, match, {
      shouldLoad,
      resolve
    });
  });
  let results = await dataStrategyImpl({
    matches: dsMatches,
    request,
    params: matches[0].params,
    fetcherKey,
    context: requestContext
  });
  try {
    await Promise.all(loadRouteDefinitionsPromises);
  } catch (e2) {
  }
  return results;
}
async function callLoaderOrAction(type, request, match, loadRoutePromise, handlerOverride, staticContext) {
  let result;
  let onReject;
  let runHandler = (handler) => {
    let reject;
    let abortPromise = new Promise((_3, r4) => reject = r4);
    onReject = () => reject();
    request.signal.addEventListener("abort", onReject);
    let actualHandler = (ctx2) => {
      if (typeof handler !== "function") {
        return Promise.reject(new Error("You cannot call the handler for a route which defines a boolean " + ('"' + type + '" [routeId: ' + match.route.id + "]")));
      }
      return handler({
        request,
        params: match.params,
        context: staticContext
      }, ...ctx2 !== void 0 ? [ctx2] : []);
    };
    let handlerPromise = (async () => {
      try {
        let val = await (handlerOverride ? handlerOverride((ctx2) => actualHandler(ctx2)) : actualHandler());
        return {
          type: "data",
          result: val
        };
      } catch (e2) {
        return {
          type: "error",
          result: e2
        };
      }
    })();
    return Promise.race([handlerPromise, abortPromise]);
  };
  try {
    let handler = match.route[type];
    if (loadRoutePromise) {
      if (handler) {
        let handlerError;
        let [value] = await Promise.all([
          runHandler(handler).catch((e2) => {
            handlerError = e2;
          }),
          loadRoutePromise
        ]);
        if (handlerError !== void 0) {
          throw handlerError;
        }
        result = value;
      } else {
        await loadRoutePromise;
        handler = match.route[type];
        if (handler) {
          result = await runHandler(handler);
        } else if (type === "action") {
          let url = new URL(request.url);
          let pathname = url.pathname + url.search;
          throw getInternalRouterError(405, {
            method: request.method,
            pathname,
            routeId: match.route.id
          });
        } else {
          return {
            type: ResultType.data,
            result: void 0
          };
        }
      }
    } else if (!handler) {
      let url = new URL(request.url);
      let pathname = url.pathname + url.search;
      throw getInternalRouterError(404, {
        pathname
      });
    } else {
      result = await runHandler(handler);
    }
    invariant(result.result !== void 0, "You defined " + (type === "action" ? "an action" : "a loader") + " for route " + ('"' + match.route.id + "\" but didn't return anything from your `" + type + "` ") + "function. Please return a value or `null`.");
  } catch (e2) {
    return {
      type: ResultType.error,
      result: e2
    };
  } finally {
    if (onReject) {
      request.signal.removeEventListener("abort", onReject);
    }
  }
  return result;
}
async function convertDataStrategyResultToDataResult(dataStrategyResult) {
  let {
    result,
    type
  } = dataStrategyResult;
  if (isResponse(result)) {
    let data;
    try {
      let contentType = result.headers.get("Content-Type");
      if (contentType && /\bapplication\/json\b/.test(contentType)) {
        if (result.body == null) {
          data = null;
        } else {
          data = await result.json();
        }
      } else {
        data = await result.text();
      }
    } catch (e2) {
      return {
        type: ResultType.error,
        error: e2
      };
    }
    if (type === ResultType.error) {
      return {
        type: ResultType.error,
        error: new ErrorResponseImpl(result.status, result.statusText, data),
        statusCode: result.status,
        headers: result.headers
      };
    }
    return {
      type: ResultType.data,
      data,
      statusCode: result.status,
      headers: result.headers
    };
  }
  if (type === ResultType.error) {
    if (isDataWithResponseInit(result)) {
      var _result$init2;
      if (result.data instanceof Error) {
        var _result$init;
        return {
          type: ResultType.error,
          error: result.data,
          statusCode: (_result$init = result.init) == null ? void 0 : _result$init.status
        };
      }
      result = new ErrorResponseImpl(((_result$init2 = result.init) == null ? void 0 : _result$init2.status) || 500, void 0, result.data);
    }
    return {
      type: ResultType.error,
      error: result,
      statusCode: isRouteErrorResponse(result) ? result.status : void 0
    };
  }
  if (isDeferredData(result)) {
    var _result$init3, _result$init4;
    return {
      type: ResultType.deferred,
      deferredData: result,
      statusCode: (_result$init3 = result.init) == null ? void 0 : _result$init3.status,
      headers: ((_result$init4 = result.init) == null ? void 0 : _result$init4.headers) && new Headers(result.init.headers)
    };
  }
  if (isDataWithResponseInit(result)) {
    var _result$init5, _result$init6;
    return {
      type: ResultType.data,
      data: result.data,
      statusCode: (_result$init5 = result.init) == null ? void 0 : _result$init5.status,
      headers: (_result$init6 = result.init) != null && _result$init6.headers ? new Headers(result.init.headers) : void 0
    };
  }
  return {
    type: ResultType.data,
    data: result
  };
}
function normalizeRelativeRoutingRedirectResponse(response, request, routeId, matches, basename, v7_relativeSplatPath) {
  let location = response.headers.get("Location");
  invariant(location, "Redirects returned/thrown from loaders/actions must have a Location header");
  if (!ABSOLUTE_URL_REGEX.test(location)) {
    let trimmedMatches = matches.slice(0, matches.findIndex((m3) => m3.route.id === routeId) + 1);
    location = normalizeTo(new URL(request.url), trimmedMatches, basename, true, location, v7_relativeSplatPath);
    response.headers.set("Location", location);
  }
  return response;
}
function normalizeRedirectLocation(location, currentUrl, basename) {
  if (ABSOLUTE_URL_REGEX.test(location)) {
    let normalizedLocation = location;
    let url = normalizedLocation.startsWith("//") ? new URL(currentUrl.protocol + normalizedLocation) : new URL(normalizedLocation);
    let isSameBasename = stripBasename(url.pathname, basename) != null;
    if (url.origin === currentUrl.origin && isSameBasename) {
      return url.pathname + url.search + url.hash;
    }
  }
  return location;
}
function createClientSideRequest(history, location, signal, submission) {
  let url = history.createURL(stripHashFromPath(location)).toString();
  let init = {
    signal
  };
  if (submission && isMutationMethod(submission.formMethod)) {
    let {
      formMethod,
      formEncType
    } = submission;
    init.method = formMethod.toUpperCase();
    if (formEncType === "application/json") {
      init.headers = new Headers({
        "Content-Type": formEncType
      });
      init.body = JSON.stringify(submission.json);
    } else if (formEncType === "text/plain") {
      init.body = submission.text;
    } else if (formEncType === "application/x-www-form-urlencoded" && submission.formData) {
      init.body = convertFormDataToSearchParams(submission.formData);
    } else {
      init.body = submission.formData;
    }
  }
  return new Request(url, init);
}
function convertFormDataToSearchParams(formData) {
  let searchParams = new URLSearchParams();
  for (let [key, value] of formData.entries()) {
    searchParams.append(key, typeof value === "string" ? value : value.name);
  }
  return searchParams;
}
function convertSearchParamsToFormData(searchParams) {
  let formData = new FormData();
  for (let [key, value] of searchParams.entries()) {
    formData.append(key, value);
  }
  return formData;
}
function processRouteLoaderData(matches, results, pendingActionResult, activeDeferreds, skipLoaderErrorBubbling) {
  let loaderData = {};
  let errors = null;
  let statusCode;
  let foundError = false;
  let loaderHeaders = {};
  let pendingError = pendingActionResult && isErrorResult(pendingActionResult[1]) ? pendingActionResult[1].error : void 0;
  matches.forEach((match) => {
    if (!(match.route.id in results)) {
      return;
    }
    let id2 = match.route.id;
    let result = results[id2];
    invariant(!isRedirectResult(result), "Cannot handle redirect results in processLoaderData");
    if (isErrorResult(result)) {
      let error = result.error;
      if (pendingError !== void 0) {
        error = pendingError;
        pendingError = void 0;
      }
      errors = errors || {};
      if (skipLoaderErrorBubbling) {
        errors[id2] = error;
      } else {
        let boundaryMatch = findNearestBoundary(matches, id2);
        if (errors[boundaryMatch.route.id] == null) {
          errors[boundaryMatch.route.id] = error;
        }
      }
      loaderData[id2] = void 0;
      if (!foundError) {
        foundError = true;
        statusCode = isRouteErrorResponse(result.error) ? result.error.status : 500;
      }
      if (result.headers) {
        loaderHeaders[id2] = result.headers;
      }
    } else {
      if (isDeferredResult(result)) {
        activeDeferreds.set(id2, result.deferredData);
        loaderData[id2] = result.deferredData.data;
        if (result.statusCode != null && result.statusCode !== 200 && !foundError) {
          statusCode = result.statusCode;
        }
        if (result.headers) {
          loaderHeaders[id2] = result.headers;
        }
      } else {
        loaderData[id2] = result.data;
        if (result.statusCode && result.statusCode !== 200 && !foundError) {
          statusCode = result.statusCode;
        }
        if (result.headers) {
          loaderHeaders[id2] = result.headers;
        }
      }
    }
  });
  if (pendingError !== void 0 && pendingActionResult) {
    errors = {
      [pendingActionResult[0]]: pendingError
    };
    loaderData[pendingActionResult[0]] = void 0;
  }
  return {
    loaderData,
    errors,
    statusCode: statusCode || 200,
    loaderHeaders
  };
}
function processLoaderData(state, matches, results, pendingActionResult, revalidatingFetchers, fetcherResults, activeDeferreds) {
  let {
    loaderData,
    errors
  } = processRouteLoaderData(matches, results, pendingActionResult, activeDeferreds, false);
  revalidatingFetchers.forEach((rf2) => {
    let {
      key,
      match,
      controller
    } = rf2;
    let result = fetcherResults[key];
    invariant(result, "Did not find corresponding fetcher result");
    if (controller && controller.signal.aborted) {
      return;
    } else if (isErrorResult(result)) {
      let boundaryMatch = findNearestBoundary(state.matches, match == null ? void 0 : match.route.id);
      if (!(errors && errors[boundaryMatch.route.id])) {
        errors = _extends({}, errors, {
          [boundaryMatch.route.id]: result.error
        });
      }
      state.fetchers.delete(key);
    } else if (isRedirectResult(result)) {
      invariant(false, "Unhandled fetcher revalidation redirect");
    } else if (isDeferredResult(result)) {
      invariant(false, "Unhandled fetcher deferred data");
    } else {
      let doneFetcher = getDoneFetcher(result.data);
      state.fetchers.set(key, doneFetcher);
    }
  });
  return {
    loaderData,
    errors
  };
}
function mergeLoaderData(loaderData, newLoaderData, matches, errors) {
  let mergedLoaderData = _extends({}, newLoaderData);
  for (let match of matches) {
    let id2 = match.route.id;
    if (newLoaderData.hasOwnProperty(id2)) {
      if (newLoaderData[id2] !== void 0) {
        mergedLoaderData[id2] = newLoaderData[id2];
      }
    } else if (loaderData[id2] !== void 0 && match.route.loader) {
      mergedLoaderData[id2] = loaderData[id2];
    }
    if (errors && errors.hasOwnProperty(id2)) {
      break;
    }
  }
  return mergedLoaderData;
}
function getActionDataForCommit(pendingActionResult) {
  if (!pendingActionResult) {
    return {};
  }
  return isErrorResult(pendingActionResult[1]) ? {
    actionData: {}
  } : {
    actionData: {
      [pendingActionResult[0]]: pendingActionResult[1].data
    }
  };
}
function findNearestBoundary(matches, routeId) {
  let eligibleMatches = routeId ? matches.slice(0, matches.findIndex((m3) => m3.route.id === routeId) + 1) : [...matches];
  return eligibleMatches.reverse().find((m3) => m3.route.hasErrorBoundary === true) || matches[0];
}
function getShortCircuitMatches(routes2) {
  let route = routes2.length === 1 ? routes2[0] : routes2.find((r4) => r4.index || !r4.path || r4.path === "/") || {
    id: "__shim-error-route__"
  };
  return {
    matches: [{
      params: {},
      pathname: "",
      pathnameBase: "",
      route
    }],
    route
  };
}
function getInternalRouterError(status, _temp5) {
  let {
    pathname,
    routeId,
    method,
    type,
    message
  } = _temp5 === void 0 ? {} : _temp5;
  let statusText = "Unknown Server Error";
  let errorMessage = "Unknown @remix-run/router error";
  if (status === 400) {
    statusText = "Bad Request";
    if (method && pathname && routeId) {
      errorMessage = "You made a " + method + ' request to "' + pathname + '" but ' + ('did not provide a `loader` for route "' + routeId + '", ') + "so there is no way to handle the request.";
    } else if (type === "defer-action") {
      errorMessage = "defer() is not supported in actions";
    } else if (type === "invalid-body") {
      errorMessage = "Unable to encode submission body";
    }
  } else if (status === 403) {
    statusText = "Forbidden";
    errorMessage = 'Route "' + routeId + '" does not match URL "' + pathname + '"';
  } else if (status === 404) {
    statusText = "Not Found";
    errorMessage = 'No route matches URL "' + pathname + '"';
  } else if (status === 405) {
    statusText = "Method Not Allowed";
    if (method && pathname && routeId) {
      errorMessage = "You made a " + method.toUpperCase() + ' request to "' + pathname + '" but ' + ('did not provide an `action` for route "' + routeId + '", ') + "so there is no way to handle the request.";
    } else if (method) {
      errorMessage = 'Invalid request method "' + method.toUpperCase() + '"';
    }
  }
  return new ErrorResponseImpl(status || 500, statusText, new Error(errorMessage), true);
}
function findRedirect(results) {
  let entries = Object.entries(results);
  for (let i2 = entries.length - 1; i2 >= 0; i2--) {
    let [key, result] = entries[i2];
    if (isRedirectResult(result)) {
      return {
        key,
        result
      };
    }
  }
}
function stripHashFromPath(path) {
  let parsedPath = typeof path === "string" ? parsePath(path) : path;
  return createPath(_extends({}, parsedPath, {
    hash: ""
  }));
}
function isHashChangeOnly(a2, b3) {
  if (a2.pathname !== b3.pathname || a2.search !== b3.search) {
    return false;
  }
  if (a2.hash === "") {
    return b3.hash !== "";
  } else if (a2.hash === b3.hash) {
    return true;
  } else if (b3.hash !== "") {
    return true;
  }
  return false;
}
function isRedirectDataStrategyResultResult(result) {
  return isResponse(result.result) && redirectStatusCodes.has(result.result.status);
}
function isDeferredResult(result) {
  return result.type === ResultType.deferred;
}
function isErrorResult(result) {
  return result.type === ResultType.error;
}
function isRedirectResult(result) {
  return (result && result.type) === ResultType.redirect;
}
function isDataWithResponseInit(value) {
  return typeof value === "object" && value != null && "type" in value && "data" in value && "init" in value && value.type === "DataWithResponseInit";
}
function isDeferredData(value) {
  let deferred = value;
  return deferred && typeof deferred === "object" && typeof deferred.data === "object" && typeof deferred.subscribe === "function" && typeof deferred.cancel === "function" && typeof deferred.resolveData === "function";
}
function isResponse(value) {
  return value != null && typeof value.status === "number" && typeof value.statusText === "string" && typeof value.headers === "object" && typeof value.body !== "undefined";
}
function isValidMethod(method) {
  return validRequestMethods.has(method.toLowerCase());
}
function isMutationMethod(method) {
  return validMutationMethods.has(method.toLowerCase());
}
async function resolveNavigationDeferredResults(matches, results, signal, currentMatches, currentLoaderData) {
  let entries = Object.entries(results);
  for (let index = 0; index < entries.length; index++) {
    let [routeId, result] = entries[index];
    let match = matches.find((m3) => (m3 == null ? void 0 : m3.route.id) === routeId);
    if (!match) {
      continue;
    }
    let currentMatch = currentMatches.find((m3) => m3.route.id === match.route.id);
    let isRevalidatingLoader = currentMatch != null && !isNewRouteInstance(currentMatch, match) && (currentLoaderData && currentLoaderData[match.route.id]) !== void 0;
    if (isDeferredResult(result) && isRevalidatingLoader) {
      await resolveDeferredData(result, signal, false).then((result2) => {
        if (result2) {
          results[routeId] = result2;
        }
      });
    }
  }
}
async function resolveFetcherDeferredResults(matches, results, revalidatingFetchers) {
  for (let index = 0; index < revalidatingFetchers.length; index++) {
    let {
      key,
      routeId,
      controller
    } = revalidatingFetchers[index];
    let result = results[key];
    let match = matches.find((m3) => (m3 == null ? void 0 : m3.route.id) === routeId);
    if (!match) {
      continue;
    }
    if (isDeferredResult(result)) {
      invariant(controller, "Expected an AbortController for revalidating fetcher deferred result");
      await resolveDeferredData(result, controller.signal, true).then((result2) => {
        if (result2) {
          results[key] = result2;
        }
      });
    }
  }
}
async function resolveDeferredData(result, signal, unwrap) {
  if (unwrap === void 0) {
    unwrap = false;
  }
  let aborted = await result.deferredData.resolveData(signal);
  if (aborted) {
    return;
  }
  if (unwrap) {
    try {
      return {
        type: ResultType.data,
        data: result.deferredData.unwrappedData
      };
    } catch (e2) {
      return {
        type: ResultType.error,
        error: e2
      };
    }
  }
  return {
    type: ResultType.data,
    data: result.deferredData.data
  };
}
function hasNakedIndexQuery(search) {
  return new URLSearchParams(search).getAll("index").some((v5) => v5 === "");
}
function getTargetMatch(matches, location) {
  let search = typeof location === "string" ? parsePath(location).search : location.search;
  if (matches[matches.length - 1].route.index && hasNakedIndexQuery(search || "")) {
    return matches[matches.length - 1];
  }
  let pathMatches = getPathContributingMatches(matches);
  return pathMatches[pathMatches.length - 1];
}
function getSubmissionFromNavigation(navigation) {
  let {
    formMethod,
    formAction,
    formEncType,
    text,
    formData,
    json
  } = navigation;
  if (!formMethod || !formAction || !formEncType) {
    return;
  }
  if (text != null) {
    return {
      formMethod,
      formAction,
      formEncType,
      formData: void 0,
      json: void 0,
      text
    };
  } else if (formData != null) {
    return {
      formMethod,
      formAction,
      formEncType,
      formData,
      json: void 0,
      text: void 0
    };
  } else if (json !== void 0) {
    return {
      formMethod,
      formAction,
      formEncType,
      formData: void 0,
      json,
      text: void 0
    };
  }
}
function getLoadingNavigation(location, submission) {
  if (submission) {
    let navigation = {
      state: "loading",
      location,
      formMethod: submission.formMethod,
      formAction: submission.formAction,
      formEncType: submission.formEncType,
      formData: submission.formData,
      json: submission.json,
      text: submission.text
    };
    return navigation;
  } else {
    let navigation = {
      state: "loading",
      location,
      formMethod: void 0,
      formAction: void 0,
      formEncType: void 0,
      formData: void 0,
      json: void 0,
      text: void 0
    };
    return navigation;
  }
}
function getSubmittingNavigation(location, submission) {
  let navigation = {
    state: "submitting",
    location,
    formMethod: submission.formMethod,
    formAction: submission.formAction,
    formEncType: submission.formEncType,
    formData: submission.formData,
    json: submission.json,
    text: submission.text
  };
  return navigation;
}
function getLoadingFetcher(submission, data) {
  if (submission) {
    let fetcher = {
      state: "loading",
      formMethod: submission.formMethod,
      formAction: submission.formAction,
      formEncType: submission.formEncType,
      formData: submission.formData,
      json: submission.json,
      text: submission.text,
      data
    };
    return fetcher;
  } else {
    let fetcher = {
      state: "loading",
      formMethod: void 0,
      formAction: void 0,
      formEncType: void 0,
      formData: void 0,
      json: void 0,
      text: void 0,
      data
    };
    return fetcher;
  }
}
function getSubmittingFetcher(submission, existingFetcher) {
  let fetcher = {
    state: "submitting",
    formMethod: submission.formMethod,
    formAction: submission.formAction,
    formEncType: submission.formEncType,
    formData: submission.formData,
    json: submission.json,
    text: submission.text,
    data: existingFetcher ? existingFetcher.data : void 0
  };
  return fetcher;
}
function getDoneFetcher(data) {
  let fetcher = {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data
  };
  return fetcher;
}
function restoreAppliedTransitions(_window, transitions) {
  try {
    let sessionPositions = _window.sessionStorage.getItem(TRANSITIONS_STORAGE_KEY);
    if (sessionPositions) {
      let json = JSON.parse(sessionPositions);
      for (let [k3, v5] of Object.entries(json || {})) {
        if (v5 && Array.isArray(v5)) {
          transitions.set(k3, new Set(v5 || []));
        }
      }
    }
  } catch (e2) {
  }
}
function persistAppliedTransitions(_window, transitions) {
  if (transitions.size > 0) {
    let json = {};
    for (let [k3, v5] of transitions) {
      json[k3] = [...v5];
    }
    try {
      _window.sessionStorage.setItem(TRANSITIONS_STORAGE_KEY, JSON.stringify(json));
    } catch (error) {
      warning(false, "Failed to save applied view transitions in sessionStorage (" + error + ").");
    }
  }
}
/**
 * React Router v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function _extends$1() {
  _extends$1 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1.apply(this, arguments);
}
var DataRouterContext = /* @__PURE__ */ react.createContext(null);
var DataRouterStateContext = /* @__PURE__ */ react.createContext(null);
var NavigationContext = /* @__PURE__ */ react.createContext(null);
var LocationContext = /* @__PURE__ */ react.createContext(null);
var RouteContext = /* @__PURE__ */ react.createContext({
  outlet: null,
  matches: [],
  isDataRoute: false
});
var RouteErrorContext = /* @__PURE__ */ react.createContext(null);
function useHref(to2, _temp) {
  let {
    relative
  } = _temp === void 0 ? {} : _temp;
  !useInRouterContext() ? invariant(false) : void 0;
  let {
    basename,
    navigator: navigator2
  } = react.useContext(NavigationContext);
  let {
    hash,
    pathname,
    search
  } = useResolvedPath(to2, {
    relative
  });
  let joinedPathname = pathname;
  if (basename !== "/") {
    joinedPathname = pathname === "/" ? basename : joinPaths([basename, pathname]);
  }
  return navigator2.createHref({
    pathname: joinedPathname,
    search,
    hash
  });
}
function useInRouterContext() {
  return react.useContext(LocationContext) != null;
}
function useLocation() {
  !useInRouterContext() ? invariant(false) : void 0;
  return react.useContext(LocationContext).location;
}
function useIsomorphicLayoutEffect(cb2) {
  let isStatic = react.useContext(NavigationContext).static;
  if (!isStatic) {
    react.useLayoutEffect(cb2);
  }
}
function useNavigate() {
  let {
    isDataRoute
  } = react.useContext(RouteContext);
  return isDataRoute ? useNavigateStable() : useNavigateUnstable();
}
function useNavigateUnstable() {
  !useInRouterContext() ? invariant(false) : void 0;
  let dataRouterContext = react.useContext(DataRouterContext);
  let {
    basename,
    future,
    navigator: navigator2
  } = react.useContext(NavigationContext);
  let {
    matches
  } = react.useContext(RouteContext);
  let {
    pathname: locationPathname
  } = useLocation();
  let routePathnamesJson = JSON.stringify(getResolveToMatches(matches, future.v7_relativeSplatPath));
  let activeRef = react.useRef(false);
  useIsomorphicLayoutEffect(() => {
    activeRef.current = true;
  });
  let navigate = react.useCallback(function(to2, options) {
    if (options === void 0) {
      options = {};
    }
    if (!activeRef.current)
      return;
    if (typeof to2 === "number") {
      navigator2.go(to2);
      return;
    }
    let path = resolveTo(to2, JSON.parse(routePathnamesJson), locationPathname, options.relative === "path");
    if (dataRouterContext == null && basename !== "/") {
      path.pathname = path.pathname === "/" ? basename : joinPaths([basename, path.pathname]);
    }
    (!!options.replace ? navigator2.replace : navigator2.push)(path, options.state, options);
  }, [basename, navigator2, routePathnamesJson, locationPathname, dataRouterContext]);
  return navigate;
}
function useParams() {
  let {
    matches
  } = react.useContext(RouteContext);
  let routeMatch = matches[matches.length - 1];
  return routeMatch ? routeMatch.params : {};
}
function useResolvedPath(to2, _temp2) {
  let {
    relative
  } = _temp2 === void 0 ? {} : _temp2;
  let {
    future
  } = react.useContext(NavigationContext);
  let {
    matches
  } = react.useContext(RouteContext);
  let {
    pathname: locationPathname
  } = useLocation();
  let routePathnamesJson = JSON.stringify(getResolveToMatches(matches, future.v7_relativeSplatPath));
  return react.useMemo(() => resolveTo(to2, JSON.parse(routePathnamesJson), locationPathname, relative === "path"), [to2, routePathnamesJson, locationPathname, relative]);
}
function useRoutesImpl(routes2, locationArg, dataRouterState, future) {
  !useInRouterContext() ? invariant(false) : void 0;
  let {
    navigator: navigator2
  } = react.useContext(NavigationContext);
  let {
    matches: parentMatches
  } = react.useContext(RouteContext);
  let routeMatch = parentMatches[parentMatches.length - 1];
  let parentParams = routeMatch ? routeMatch.params : {};
  let parentPathname = routeMatch ? routeMatch.pathname : "/";
  let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
  let parentRoute = routeMatch && routeMatch.route;
  let locationFromContext = useLocation();
  let location;
  if (locationArg) {
    var _parsedLocationArg$pa;
    let parsedLocationArg = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
    !(parentPathnameBase === "/" || ((_parsedLocationArg$pa = parsedLocationArg.pathname) == null ? void 0 : _parsedLocationArg$pa.startsWith(parentPathnameBase))) ? invariant(false) : void 0;
    location = parsedLocationArg;
  } else {
    location = locationFromContext;
  }
  let pathname = location.pathname || "/";
  let remainingPathname = pathname;
  if (parentPathnameBase !== "/") {
    let parentSegments = parentPathnameBase.replace(/^\//, "").split("/");
    let segments = pathname.replace(/^\//, "").split("/");
    remainingPathname = "/" + segments.slice(parentSegments.length).join("/");
  }
  let matches = matchRoutes(routes2, {
    pathname: remainingPathname
  });
  let renderedMatches = _renderMatches(matches && matches.map((match) => Object.assign({}, match, {
    params: Object.assign({}, parentParams, match.params),
    pathname: joinPaths([
      parentPathnameBase,
      navigator2.encodeLocation ? navigator2.encodeLocation(match.pathname).pathname : match.pathname
    ]),
    pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : joinPaths([
      parentPathnameBase,
      navigator2.encodeLocation ? navigator2.encodeLocation(match.pathnameBase).pathname : match.pathnameBase
    ])
  })), parentMatches, dataRouterState, future);
  if (locationArg && renderedMatches) {
    return /* @__PURE__ */ react.createElement(LocationContext.Provider, {
      value: {
        location: _extends$1({
          pathname: "/",
          search: "",
          hash: "",
          state: null,
          key: "default"
        }, location),
        navigationType: Action.Pop
      }
    }, renderedMatches);
  }
  return renderedMatches;
}
function DefaultErrorComponent() {
  let error = useRouteError();
  let message = isRouteErrorResponse(error) ? error.status + " " + error.statusText : error instanceof Error ? error.message : JSON.stringify(error);
  let stack = error instanceof Error ? error.stack : null;
  let lightgrey = "rgba(200,200,200, 0.5)";
  let preStyles = {
    padding: "0.5rem",
    backgroundColor: lightgrey
  };
  let devInfo = null;
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ react.createElement("h3", {
    style: {
      fontStyle: "italic"
    }
  }, message), stack ? /* @__PURE__ */ react.createElement("pre", {
    style: preStyles
  }, stack) : null, devInfo);
}
var defaultErrorElement = /* @__PURE__ */ react.createElement(DefaultErrorComponent, null);
var RenderErrorBoundary = class extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.location,
      revalidation: props.revalidation,
      error: props.error
    };
  }
  static getDerivedStateFromError(error) {
    return {
      error
    };
  }
  static getDerivedStateFromProps(props, state) {
    if (state.location !== props.location || state.revalidation !== "idle" && props.revalidation === "idle") {
      return {
        error: props.error,
        location: props.location,
        revalidation: props.revalidation
      };
    }
    return {
      error: props.error !== void 0 ? props.error : state.error,
      location: state.location,
      revalidation: props.revalidation || state.revalidation
    };
  }
  componentDidCatch(error, errorInfo) {
    console.error("React Router caught the following error during render", error, errorInfo);
  }
  render() {
    return this.state.error !== void 0 ? /* @__PURE__ */ react.createElement(RouteContext.Provider, {
      value: this.props.routeContext
    }, /* @__PURE__ */ react.createElement(RouteErrorContext.Provider, {
      value: this.state.error,
      children: this.props.component
    })) : this.props.children;
  }
};
function RenderedRoute(_ref) {
  let {
    routeContext,
    match,
    children
  } = _ref;
  let dataRouterContext = react.useContext(DataRouterContext);
  if (dataRouterContext && dataRouterContext.static && dataRouterContext.staticContext && (match.route.errorElement || match.route.ErrorBoundary)) {
    dataRouterContext.staticContext._deepestRenderedBoundaryId = match.route.id;
  }
  return /* @__PURE__ */ react.createElement(RouteContext.Provider, {
    value: routeContext
  }, children);
}
function _renderMatches(matches, parentMatches, dataRouterState, future) {
  var _dataRouterState;
  if (parentMatches === void 0) {
    parentMatches = [];
  }
  if (dataRouterState === void 0) {
    dataRouterState = null;
  }
  if (future === void 0) {
    future = null;
  }
  if (matches == null) {
    var _future;
    if (!dataRouterState) {
      return null;
    }
    if (dataRouterState.errors) {
      matches = dataRouterState.matches;
    } else if ((_future = future) != null && _future.v7_partialHydration && parentMatches.length === 0 && !dataRouterState.initialized && dataRouterState.matches.length > 0) {
      matches = dataRouterState.matches;
    } else {
      return null;
    }
  }
  let renderedMatches = matches;
  let errors = (_dataRouterState = dataRouterState) == null ? void 0 : _dataRouterState.errors;
  if (errors != null) {
    let errorIndex = renderedMatches.findIndex((m3) => m3.route.id && (errors == null ? void 0 : errors[m3.route.id]) !== void 0);
    !(errorIndex >= 0) ? invariant(false) : void 0;
    renderedMatches = renderedMatches.slice(0, Math.min(renderedMatches.length, errorIndex + 1));
  }
  let renderFallback = false;
  let fallbackIndex = -1;
  if (dataRouterState && future && future.v7_partialHydration) {
    for (let i2 = 0; i2 < renderedMatches.length; i2++) {
      let match = renderedMatches[i2];
      if (match.route.HydrateFallback || match.route.hydrateFallbackElement) {
        fallbackIndex = i2;
      }
      if (match.route.id) {
        let {
          loaderData,
          errors: errors2
        } = dataRouterState;
        let needsToRunLoader = match.route.loader && loaderData[match.route.id] === void 0 && (!errors2 || errors2[match.route.id] === void 0);
        if (match.route.lazy || needsToRunLoader) {
          renderFallback = true;
          if (fallbackIndex >= 0) {
            renderedMatches = renderedMatches.slice(0, fallbackIndex + 1);
          } else {
            renderedMatches = [renderedMatches[0]];
          }
          break;
        }
      }
    }
  }
  return renderedMatches.reduceRight((outlet, match, index) => {
    let error;
    let shouldRenderHydrateFallback = false;
    let errorElement = null;
    let hydrateFallbackElement = null;
    if (dataRouterState) {
      error = errors && match.route.id ? errors[match.route.id] : void 0;
      errorElement = match.route.errorElement || defaultErrorElement;
      if (renderFallback) {
        if (fallbackIndex < 0 && index === 0) {
          shouldRenderHydrateFallback = true;
          hydrateFallbackElement = null;
        } else if (fallbackIndex === index) {
          shouldRenderHydrateFallback = true;
          hydrateFallbackElement = match.route.hydrateFallbackElement || null;
        }
      }
    }
    let matches2 = parentMatches.concat(renderedMatches.slice(0, index + 1));
    let getChildren = () => {
      let children;
      if (error) {
        children = errorElement;
      } else if (shouldRenderHydrateFallback) {
        children = hydrateFallbackElement;
      } else if (match.route.Component) {
        children = /* @__PURE__ */ react.createElement(match.route.Component, null);
      } else if (match.route.element) {
        children = match.route.element;
      } else {
        children = outlet;
      }
      return /* @__PURE__ */ react.createElement(RenderedRoute, {
        match,
        routeContext: {
          outlet,
          matches: matches2,
          isDataRoute: dataRouterState != null
        },
        children
      });
    };
    return dataRouterState && (match.route.ErrorBoundary || match.route.errorElement || index === 0) ? /* @__PURE__ */ react.createElement(RenderErrorBoundary, {
      location: dataRouterState.location,
      revalidation: dataRouterState.revalidation,
      component: errorElement,
      error,
      children: getChildren(),
      routeContext: {
        outlet: null,
        matches: matches2,
        isDataRoute: true
      }
    }) : getChildren();
  }, null);
}
var DataRouterHook = /* @__PURE__ */ function(DataRouterHook2) {
  DataRouterHook2["UseBlocker"] = "useBlocker";
  DataRouterHook2["UseRevalidator"] = "useRevalidator";
  DataRouterHook2["UseNavigateStable"] = "useNavigate";
  return DataRouterHook2;
}(DataRouterHook || {});
var DataRouterStateHook = /* @__PURE__ */ function(DataRouterStateHook2) {
  DataRouterStateHook2["UseBlocker"] = "useBlocker";
  DataRouterStateHook2["UseLoaderData"] = "useLoaderData";
  DataRouterStateHook2["UseActionData"] = "useActionData";
  DataRouterStateHook2["UseRouteError"] = "useRouteError";
  DataRouterStateHook2["UseNavigation"] = "useNavigation";
  DataRouterStateHook2["UseRouteLoaderData"] = "useRouteLoaderData";
  DataRouterStateHook2["UseMatches"] = "useMatches";
  DataRouterStateHook2["UseRevalidator"] = "useRevalidator";
  DataRouterStateHook2["UseNavigateStable"] = "useNavigate";
  DataRouterStateHook2["UseRouteId"] = "useRouteId";
  return DataRouterStateHook2;
}(DataRouterStateHook || {});
function useDataRouterContext(hookName) {
  let ctx2 = react.useContext(DataRouterContext);
  !ctx2 ? invariant(false) : void 0;
  return ctx2;
}
function useDataRouterState(hookName) {
  let state = react.useContext(DataRouterStateContext);
  !state ? invariant(false) : void 0;
  return state;
}
function useRouteContext(hookName) {
  let route = react.useContext(RouteContext);
  !route ? invariant(false) : void 0;
  return route;
}
function useCurrentRouteId(hookName) {
  let route = useRouteContext();
  let thisRoute = route.matches[route.matches.length - 1];
  !thisRoute.route.id ? invariant(false) : void 0;
  return thisRoute.route.id;
}
function useRouteError() {
  var _state$errors;
  let error = react.useContext(RouteErrorContext);
  let state = useDataRouterState(DataRouterStateHook.UseRouteError);
  let routeId = useCurrentRouteId(DataRouterStateHook.UseRouteError);
  if (error !== void 0) {
    return error;
  }
  return (_state$errors = state.errors) == null ? void 0 : _state$errors[routeId];
}
function useNavigateStable() {
  let {
    router: router2
  } = useDataRouterContext(DataRouterHook.UseNavigateStable);
  let id2 = useCurrentRouteId(DataRouterStateHook.UseNavigateStable);
  let activeRef = react.useRef(false);
  useIsomorphicLayoutEffect(() => {
    activeRef.current = true;
  });
  let navigate = react.useCallback(function(to2, options) {
    if (options === void 0) {
      options = {};
    }
    if (!activeRef.current)
      return;
    if (typeof to2 === "number") {
      router2.navigate(to2);
    } else {
      router2.navigate(to2, _extends$1({
        fromRouteId: id2
      }, options));
    }
  }, [router2, id2]);
  return navigate;
}
var alreadyWarned = {};
function warnOnce(key, message) {
  if (!alreadyWarned[message]) {
    alreadyWarned[message] = true;
    console.warn(message);
  }
}
var logDeprecation = (flag, msg, link) => warnOnce(flag, "⚠️ React Router Future Flag Warning: " + msg + ". " + ("You can use the `" + flag + "` future flag to opt-in early. ") + ("For more information, see " + link + "."));
function logV6DeprecationWarnings(renderFuture, routerFuture) {
  if (!(renderFuture != null && renderFuture.v7_startTransition)) {
    logDeprecation("v7_startTransition", "React Router will begin wrapping state updates in `React.startTransition` in v7", "https://reactrouter.com/v6/upgrading/future#v7_starttransition");
  }
  if (!(renderFuture != null && renderFuture.v7_relativeSplatPath) && (!routerFuture || !routerFuture.v7_relativeSplatPath)) {
    logDeprecation("v7_relativeSplatPath", "Relative route resolution within Splat routes is changing in v7", "https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath");
  }
  if (routerFuture) {
    if (!routerFuture.v7_fetcherPersist) {
      logDeprecation("v7_fetcherPersist", "The persistence behavior of fetchers is changing in v7", "https://reactrouter.com/v6/upgrading/future#v7_fetcherpersist");
    }
    if (!routerFuture.v7_normalizeFormMethod) {
      logDeprecation("v7_normalizeFormMethod", "Casing of `formMethod` fields is being normalized to uppercase in v7", "https://reactrouter.com/v6/upgrading/future#v7_normalizeformmethod");
    }
    if (!routerFuture.v7_partialHydration) {
      logDeprecation("v7_partialHydration", "`RouterProvider` hydration behavior is changing in v7", "https://reactrouter.com/v6/upgrading/future#v7_partialhydration");
    }
    if (!routerFuture.v7_skipActionErrorRevalidation) {
      logDeprecation("v7_skipActionErrorRevalidation", "The revalidation behavior after 4xx/5xx `action` responses is changing in v7", "https://reactrouter.com/v6/upgrading/future#v7_skipactionerrorrevalidation");
    }
  }
}
var START_TRANSITION = "startTransition";
var startTransitionImpl = React[START_TRANSITION];
function Router(_ref5) {
  let {
    basename: basenameProp = "/",
    children = null,
    location: locationProp,
    navigationType = Action.Pop,
    navigator: navigator2,
    static: staticProp = false,
    future
  } = _ref5;
  !!useInRouterContext() ? invariant(false) : void 0;
  let basename = basenameProp.replace(/^\/*/, "/");
  let navigationContext = react.useMemo(() => ({
    basename,
    navigator: navigator2,
    static: staticProp,
    future: _extends$1({
      v7_relativeSplatPath: false
    }, future)
  }), [basename, future, navigator2, staticProp]);
  if (typeof locationProp === "string") {
    locationProp = parsePath(locationProp);
  }
  let {
    pathname = "/",
    search = "",
    hash = "",
    state = null,
    key = "default"
  } = locationProp;
  let locationContext = react.useMemo(() => {
    let trailingPathname = stripBasename(pathname, basename);
    if (trailingPathname == null) {
      return null;
    }
    return {
      location: {
        pathname: trailingPathname,
        search,
        hash,
        state,
        key
      },
      navigationType
    };
  }, [basename, pathname, search, hash, state, key, navigationType]);
  if (locationContext == null) {
    return null;
  }
  return /* @__PURE__ */ react.createElement(NavigationContext.Provider, {
    value: navigationContext
  }, /* @__PURE__ */ react.createElement(LocationContext.Provider, {
    children,
    value: locationContext
  }));
}
var neverSettledPromise = new Promise(() => {
});
function mapRouteProperties(route) {
  let updates = {
    hasErrorBoundary: route.ErrorBoundary != null || route.errorElement != null
  };
  if (route.Component) {
    Object.assign(updates, {
      element: /* @__PURE__ */ react.createElement(route.Component),
      Component: void 0
    });
  }
  if (route.HydrateFallback) {
    Object.assign(updates, {
      hydrateFallbackElement: /* @__PURE__ */ react.createElement(route.HydrateFallback),
      HydrateFallback: void 0
    });
  }
  if (route.ErrorBoundary) {
    Object.assign(updates, {
      errorElement: /* @__PURE__ */ react.createElement(route.ErrorBoundary),
      ErrorBoundary: void 0
    });
  }
  return updates;
}
/**
 * React Router DOM v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function _extends$2() {
  _extends$2 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$2.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i2;
  for (i2 = 0; i2 < sourceKeys.length; i2++) {
    key = sourceKeys[i2];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
function shouldProcessLinkClick(event, target) {
  return event.button === 0 && (!target || target === "_self") && !isModifiedEvent(event);
}
var _excluded = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "viewTransition"];
var REACT_ROUTER_VERSION = "6";
try {
  window.__reactRouterVersion = REACT_ROUTER_VERSION;
} catch (e2) {
}
function createBrowserRouter(routes2, opts) {
  return createRouter({
    basename: opts == null ? void 0 : opts.basename,
    future: _extends$2({}, opts == null ? void 0 : opts.future, {
      v7_prependBasename: true
    }),
    history: createBrowserHistory({
      window: opts == null ? void 0 : opts.window
    }),
    hydrationData: (opts == null ? void 0 : opts.hydrationData) || parseHydrationData(),
    routes: routes2,
    mapRouteProperties,
    dataStrategy: opts == null ? void 0 : opts.dataStrategy,
    patchRoutesOnNavigation: opts == null ? void 0 : opts.patchRoutesOnNavigation,
    window: opts == null ? void 0 : opts.window
  }).initialize();
}
function parseHydrationData() {
  var _window;
  let state = (_window = window) == null ? void 0 : _window.__staticRouterHydrationData;
  if (state && state.errors) {
    state = _extends$2({}, state, {
      errors: deserializeErrors(state.errors)
    });
  }
  return state;
}
function deserializeErrors(errors) {
  if (!errors)
    return null;
  let entries = Object.entries(errors);
  let serialized = {};
  for (let [key, val] of entries) {
    if (val && val.__type === "RouteErrorResponse") {
      serialized[key] = new ErrorResponseImpl(val.status, val.statusText, val.data, val.internal === true);
    } else if (val && val.__type === "Error") {
      if (val.__subType) {
        let ErrorConstructor = window[val.__subType];
        if (typeof ErrorConstructor === "function") {
          try {
            let error = new ErrorConstructor(val.message);
            error.stack = "";
            serialized[key] = error;
          } catch (e2) {
          }
        }
      }
      if (serialized[key] == null) {
        let error = new Error(val.message);
        error.stack = "";
        serialized[key] = error;
      }
    } else {
      serialized[key] = val;
    }
  }
  return serialized;
}
var ViewTransitionContext = /* @__PURE__ */ react.createContext({
  isTransitioning: false
});
var FetchersContext = /* @__PURE__ */ react.createContext(new Map());
var START_TRANSITION$1 = "startTransition";
var startTransitionImpl$1 = React[START_TRANSITION$1];
var FLUSH_SYNC = "flushSync";
var flushSyncImpl = ReactDOM[FLUSH_SYNC];
var USE_ID = "useId";
var useIdImpl = React[USE_ID];
function startTransitionSafe(cb2) {
  if (startTransitionImpl$1) {
    startTransitionImpl$1(cb2);
  } else {
    cb2();
  }
}
function flushSyncSafe(cb2) {
  if (flushSyncImpl) {
    flushSyncImpl(cb2);
  } else {
    cb2();
  }
}
var Deferred = class {
  constructor() {
    this.status = "pending";
    this.promise = new Promise((resolve, reject) => {
      this.resolve = (value) => {
        if (this.status === "pending") {
          this.status = "resolved";
          resolve(value);
        }
      };
      this.reject = (reason) => {
        if (this.status === "pending") {
          this.status = "rejected";
          reject(reason);
        }
      };
    });
  }
};
function RouterProvider(_ref) {
  let {
    fallbackElement,
    router: router2,
    future
  } = _ref;
  let [state, setStateImpl] = react.useState(router2.state);
  let [pendingState, setPendingState] = react.useState();
  let [vtContext, setVtContext] = react.useState({
    isTransitioning: false
  });
  let [renderDfd, setRenderDfd] = react.useState();
  let [transition, setTransition] = react.useState();
  let [interruption, setInterruption] = react.useState();
  let fetcherData = react.useRef(new Map());
  let {
    v7_startTransition
  } = future || {};
  let optInStartTransition = react.useCallback((cb2) => {
    if (v7_startTransition) {
      startTransitionSafe(cb2);
    } else {
      cb2();
    }
  }, [v7_startTransition]);
  let setState = react.useCallback((newState, _ref2) => {
    let {
      deletedFetchers,
      flushSync: flushSync2,
      viewTransitionOpts
    } = _ref2;
    deletedFetchers.forEach((key) => fetcherData.current.delete(key));
    newState.fetchers.forEach((fetcher, key) => {
      if (fetcher.data !== void 0) {
        fetcherData.current.set(key, fetcher.data);
      }
    });
    let isViewTransitionUnavailable = router2.window == null || router2.window.document == null || typeof router2.window.document.startViewTransition !== "function";
    if (!viewTransitionOpts || isViewTransitionUnavailable) {
      if (flushSync2) {
        flushSyncSafe(() => setStateImpl(newState));
      } else {
        optInStartTransition(() => setStateImpl(newState));
      }
      return;
    }
    if (flushSync2) {
      flushSyncSafe(() => {
        if (transition) {
          renderDfd && renderDfd.resolve();
          transition.skipTransition();
        }
        setVtContext({
          isTransitioning: true,
          flushSync: true,
          currentLocation: viewTransitionOpts.currentLocation,
          nextLocation: viewTransitionOpts.nextLocation
        });
      });
      let t4 = router2.window.document.startViewTransition(() => {
        flushSyncSafe(() => setStateImpl(newState));
      });
      t4.finished.finally(() => {
        flushSyncSafe(() => {
          setRenderDfd(void 0);
          setTransition(void 0);
          setPendingState(void 0);
          setVtContext({
            isTransitioning: false
          });
        });
      });
      flushSyncSafe(() => setTransition(t4));
      return;
    }
    if (transition) {
      renderDfd && renderDfd.resolve();
      transition.skipTransition();
      setInterruption({
        state: newState,
        currentLocation: viewTransitionOpts.currentLocation,
        nextLocation: viewTransitionOpts.nextLocation
      });
    } else {
      setPendingState(newState);
      setVtContext({
        isTransitioning: true,
        flushSync: false,
        currentLocation: viewTransitionOpts.currentLocation,
        nextLocation: viewTransitionOpts.nextLocation
      });
    }
  }, [router2.window, transition, renderDfd, fetcherData, optInStartTransition]);
  react.useLayoutEffect(() => router2.subscribe(setState), [router2, setState]);
  react.useEffect(() => {
    if (vtContext.isTransitioning && !vtContext.flushSync) {
      setRenderDfd(new Deferred());
    }
  }, [vtContext]);
  react.useEffect(() => {
    if (renderDfd && pendingState && router2.window) {
      let newState = pendingState;
      let renderPromise = renderDfd.promise;
      let transition2 = router2.window.document.startViewTransition(async () => {
        optInStartTransition(() => setStateImpl(newState));
        await renderPromise;
      });
      transition2.finished.finally(() => {
        setRenderDfd(void 0);
        setTransition(void 0);
        setPendingState(void 0);
        setVtContext({
          isTransitioning: false
        });
      });
      setTransition(transition2);
    }
  }, [optInStartTransition, pendingState, renderDfd, router2.window]);
  react.useEffect(() => {
    if (renderDfd && pendingState && state.location.key === pendingState.location.key) {
      renderDfd.resolve();
    }
  }, [renderDfd, transition, state.location, pendingState]);
  react.useEffect(() => {
    if (!vtContext.isTransitioning && interruption) {
      setPendingState(interruption.state);
      setVtContext({
        isTransitioning: true,
        flushSync: false,
        currentLocation: interruption.currentLocation,
        nextLocation: interruption.nextLocation
      });
      setInterruption(void 0);
    }
  }, [vtContext.isTransitioning, interruption]);
  react.useEffect(() => {
  }, []);
  let navigator2 = react.useMemo(() => {
    return {
      createHref: router2.createHref,
      encodeLocation: router2.encodeLocation,
      go: (n4) => router2.navigate(n4),
      push: (to2, state2, opts) => router2.navigate(to2, {
        state: state2,
        preventScrollReset: opts == null ? void 0 : opts.preventScrollReset
      }),
      replace: (to2, state2, opts) => router2.navigate(to2, {
        replace: true,
        state: state2,
        preventScrollReset: opts == null ? void 0 : opts.preventScrollReset
      })
    };
  }, [router2]);
  let basename = router2.basename || "/";
  let dataRouterContext = react.useMemo(() => ({
    router: router2,
    navigator: navigator2,
    static: false,
    basename
  }), [router2, navigator2, basename]);
  let routerFuture = react.useMemo(() => ({
    v7_relativeSplatPath: router2.future.v7_relativeSplatPath
  }), [router2.future.v7_relativeSplatPath]);
  react.useEffect(() => logV6DeprecationWarnings(future, router2.future), [future, router2.future]);
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(DataRouterContext.Provider, {
    value: dataRouterContext
  }, /* @__PURE__ */ react.createElement(DataRouterStateContext.Provider, {
    value: state
  }, /* @__PURE__ */ react.createElement(FetchersContext.Provider, {
    value: fetcherData.current
  }, /* @__PURE__ */ react.createElement(ViewTransitionContext.Provider, {
    value: vtContext
  }, /* @__PURE__ */ react.createElement(Router, {
    basename,
    location: state.location,
    navigationType: state.historyAction,
    navigator: navigator2,
    future: routerFuture
  }, state.initialized || router2.future.v7_partialHydration ? /* @__PURE__ */ react.createElement(MemoizedDataRoutes, {
    routes: router2.routes,
    future: router2.future,
    state
  }) : fallbackElement))))), null);
}
var MemoizedDataRoutes = /* @__PURE__ */ react.memo(DataRoutes);
function DataRoutes(_ref3) {
  let {
    routes: routes2,
    future,
    state
  } = _ref3;
  return useRoutesImpl(routes2, void 0, state, future);
}
var isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
var ABSOLUTE_URL_REGEX$1 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
var Link = /* @__PURE__ */ react.forwardRef(function LinkWithRef(_ref7, ref) {
  let {
    onClick,
    relative,
    reloadDocument,
    replace,
    state,
    target,
    to: to2,
    preventScrollReset,
    viewTransition
  } = _ref7, rest = _objectWithoutPropertiesLoose(_ref7, _excluded);
  let {
    basename
  } = react.useContext(NavigationContext);
  let absoluteHref;
  let isExternal = false;
  if (typeof to2 === "string" && ABSOLUTE_URL_REGEX$1.test(to2)) {
    absoluteHref = to2;
    if (isBrowser) {
      try {
        let currentUrl = new URL(window.location.href);
        let targetUrl = to2.startsWith("//") ? new URL(currentUrl.protocol + to2) : new URL(to2);
        let path = stripBasename(targetUrl.pathname, basename);
        if (targetUrl.origin === currentUrl.origin && path != null) {
          to2 = path + targetUrl.search + targetUrl.hash;
        } else {
          isExternal = true;
        }
      } catch (e2) {
      }
    }
  }
  let href = useHref(to2, {
    relative
  });
  let internalOnClick = useLinkClickHandler(to2, {
    replace,
    state,
    target,
    preventScrollReset,
    relative,
    viewTransition
  });
  function handleClick(event) {
    if (onClick)
      onClick(event);
    if (!event.defaultPrevented) {
      internalOnClick(event);
    }
  }
  return /* @__PURE__ */ react.createElement("a", _extends$2({}, rest, {
    href: absoluteHref || href,
    onClick: isExternal || reloadDocument ? onClick : handleClick,
    ref,
    target
  }));
});
var DataRouterHook$1;
(function(DataRouterHook2) {
  DataRouterHook2["UseScrollRestoration"] = "useScrollRestoration";
  DataRouterHook2["UseSubmit"] = "useSubmit";
  DataRouterHook2["UseSubmitFetcher"] = "useSubmitFetcher";
  DataRouterHook2["UseFetcher"] = "useFetcher";
  DataRouterHook2["useViewTransitionState"] = "useViewTransitionState";
})(DataRouterHook$1 || (DataRouterHook$1 = {}));
var DataRouterStateHook$1;
(function(DataRouterStateHook2) {
  DataRouterStateHook2["UseFetcher"] = "useFetcher";
  DataRouterStateHook2["UseFetchers"] = "useFetchers";
  DataRouterStateHook2["UseScrollRestoration"] = "useScrollRestoration";
})(DataRouterStateHook$1 || (DataRouterStateHook$1 = {}));
function useLinkClickHandler(to2, _temp) {
  let {
    target,
    replace: replaceProp,
    state,
    preventScrollReset,
    relative,
    viewTransition
  } = _temp === void 0 ? {} : _temp;
  let navigate = useNavigate();
  let location = useLocation();
  let path = useResolvedPath(to2, {
    relative
  });
  return react.useCallback((event) => {
    if (shouldProcessLinkClick(event, target)) {
      event.preventDefault();
      let replace = replaceProp !== void 0 ? replaceProp : createPath(location) === createPath(path);
      navigate(to2, {
        replace,
        state,
        preventScrollReset,
        relative,
        viewTransition
      });
    }
  }, [location, navigate, path, replaceProp, state, target, to2, preventScrollReset, relative, viewTransition]);
}

// build/_snowpack/pkg/styled-components.js
function defaultSetTimout() {
  throw new Error("setTimeout has not been defined");
}
function defaultClearTimeout() {
  throw new Error("clearTimeout has not been defined");
}
var cachedSetTimeout = defaultSetTimout;
var cachedClearTimeout = defaultClearTimeout;
var globalContext;
if (typeof window !== "undefined") {
  globalContext = window;
} else if (typeof self !== "undefined") {
  globalContext = self;
} else {
  globalContext = {};
}
if (typeof globalContext.setTimeout === "function") {
  cachedSetTimeout = setTimeout;
}
if (typeof globalContext.clearTimeout === "function") {
  cachedClearTimeout = clearTimeout;
}
function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    return setTimeout(fun, 0);
  }
  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }
  try {
    return cachedSetTimeout(fun, 0);
  } catch (e2) {
    try {
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e3) {
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}
function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    return clearTimeout(marker);
  }
  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }
  try {
    return cachedClearTimeout(marker);
  } catch (e2) {
    try {
      return cachedClearTimeout.call(null, marker);
    } catch (e3) {
      return cachedClearTimeout.call(this, marker);
    }
  }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }
  draining = false;
  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }
  if (queue.length) {
    drainQueue();
  }
}
function drainQueue() {
  if (draining) {
    return;
  }
  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;
  while (len) {
    currentQueue = queue;
    queue = [];
    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }
    queueIndex = -1;
    len = queue.length;
  }
  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}
function nextTick(fun) {
  var args = new Array(arguments.length - 1);
  if (arguments.length > 1) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      args[i2 - 1] = arguments[i2];
    }
  }
  queue.push(new Item(fun, args));
  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}
function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}
Item.prototype.run = function() {
  this.fun.apply(null, this.array);
};
var title = "browser";
var platform = "browser";
var browser = true;
var argv = [];
var version3 = "";
var versions = {};
var release = {};
var config = {};
function noop() {
}
var on = noop;
var addListener = noop;
var once = noop;
var off = noop;
var removeListener = noop;
var removeAllListeners = noop;
var emit = noop;
function binding(name) {
  throw new Error("process.binding is not supported");
}
function cwd() {
  return "/";
}
function chdir(dir) {
  throw new Error("process.chdir is not supported");
}
function umask() {
  return 0;
}
var performance2 = globalContext.performance || {};
var performanceNow = performance2.now || performance2.mozNow || performance2.msNow || performance2.oNow || performance2.webkitNow || function() {
  return new Date().getTime();
};
function hrtime(previousTimestamp) {
  var clocktime = performanceNow.call(performance2) * 1e-3;
  var seconds = Math.floor(clocktime);
  var nanoseconds = Math.floor(clocktime % 1 * 1e9);
  if (previousTimestamp) {
    seconds = seconds - previousTimestamp[0];
    nanoseconds = nanoseconds - previousTimestamp[1];
    if (nanoseconds < 0) {
      seconds--;
      nanoseconds += 1e9;
    }
  }
  return [seconds, nanoseconds];
}
var startTime = new Date();
function uptime() {
  var currentTime = new Date();
  var dif = currentTime - startTime;
  return dif / 1e3;
}
var process = {
  nextTick,
  title,
  browser,
  env: {NODE_ENV: "production"},
  argv,
  version: version3,
  versions,
  on,
  addListener,
  once,
  off,
  removeListener,
  removeAllListeners,
  emit,
  binding,
  cwd,
  chdir,
  umask,
  hrtime,
  platform,
  release,
  config,
  uptime
};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element");
var REACT_PORTAL_TYPE = Symbol.for("react.portal");
var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
var REACT_CONSUMER_TYPE = Symbol.for("react.consumer");
var REACT_CONTEXT_TYPE = Symbol.for("react.context");
var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
var REACT_MEMO_TYPE = Symbol.for("react.memo");
var REACT_LAZY_TYPE = Symbol.for("react.lazy");
var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
var REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference");
function typeOf(object) {
  if (typeof object === "object" && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        switch (object = object.type, object) {
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
          case REACT_SUSPENSE_LIST_TYPE:
            return object;
          default:
            switch (object = object && object.$$typeof, object) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
                return object;
              case REACT_CONSUMER_TYPE:
                return object;
              default:
                return $$typeof;
            }
        }
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }
}
var ContextConsumer = REACT_CONSUMER_TYPE;
var ContextProvider = REACT_CONTEXT_TYPE;
var Element2 = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment2 = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler2 = REACT_PROFILER_TYPE;
var StrictMode2 = REACT_STRICT_MODE_TYPE;
var Suspense3 = REACT_SUSPENSE_TYPE;
var SuspenseList = REACT_SUSPENSE_LIST_TYPE;
var isContextConsumer = function(object) {
  return typeOf(object) === REACT_CONSUMER_TYPE;
};
var isContextProvider = function(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
};
var isElement = function(object) {
  return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
};
var isForwardRef = function(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
};
var isFragment = function(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
};
var isLazy = function(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
};
var isMemo = function(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
};
var isPortal = function(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
};
var isProfiler = function(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
};
var isStrictMode = function(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
};
var isSuspense = function(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
};
var isSuspenseList = function(object) {
  return typeOf(object) === REACT_SUSPENSE_LIST_TYPE;
};
var isValidElementType = function(type) {
  return typeof type === "string" || typeof type === "function" || type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_OFFSCREEN_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_CONSUMER_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_CLIENT_REFERENCE || type.getModuleId !== void 0) ? true : false;
};
var typeOf_1 = typeOf;
var reactIs_production = {
  ContextConsumer,
  ContextProvider,
  Element: Element2,
  ForwardRef,
  Fragment: Fragment2,
  Lazy,
  Memo,
  Portal,
  Profiler: Profiler2,
  StrictMode: StrictMode2,
  Suspense: Suspense3,
  SuspenseList,
  isContextConsumer,
  isContextProvider,
  isElement,
  isForwardRef,
  isFragment,
  isLazy,
  isMemo,
  isPortal,
  isProfiler,
  isStrictMode,
  isSuspense,
  isSuspenseList,
  isValidElementType,
  typeOf: typeOf_1
};
var reactIs = createCommonjsModule(function(module) {
  {
    module.exports = reactIs_production;
  }
});
function stylis_min(W5) {
  function M5(d3, c7, e2, h3, a2) {
    for (var m3 = 0, b3 = 0, v5 = 0, n4 = 0, q4, g3, x4 = 0, K5 = 0, k3, u3 = k3 = q4 = 0, l4 = 0, r4 = 0, I5 = 0, t4 = 0, B6 = e2.length, J4 = B6 - 1, y4, f3 = "", p5 = "", F5 = "", G6 = "", C5; l4 < B6; ) {
      g3 = e2.charCodeAt(l4);
      l4 === J4 && b3 + n4 + v5 + m3 !== 0 && (b3 !== 0 && (g3 = b3 === 47 ? 10 : 47), n4 = v5 = m3 = 0, B6++, J4++);
      if (b3 + n4 + v5 + m3 === 0) {
        if (l4 === J4 && (0 < r4 && (f3 = f3.replace(N5, "")), 0 < f3.trim().length)) {
          switch (g3) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              f3 += e2.charAt(l4);
          }
          g3 = 59;
        }
        switch (g3) {
          case 123:
            f3 = f3.trim();
            q4 = f3.charCodeAt(0);
            k3 = 1;
            for (t4 = ++l4; l4 < B6; ) {
              switch (g3 = e2.charCodeAt(l4)) {
                case 123:
                  k3++;
                  break;
                case 125:
                  k3--;
                  break;
                case 47:
                  switch (g3 = e2.charCodeAt(l4 + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u3 = l4 + 1; u3 < J4; ++u3) {
                          switch (e2.charCodeAt(u3)) {
                            case 47:
                              if (g3 === 42 && e2.charCodeAt(u3 - 1) === 42 && l4 + 2 !== u3) {
                                l4 = u3 + 1;
                                break a;
                              }
                              break;
                            case 10:
                              if (g3 === 47) {
                                l4 = u3 + 1;
                                break a;
                              }
                          }
                        }
                        l4 = u3;
                      }
                  }
                  break;
                case 91:
                  g3++;
                case 40:
                  g3++;
                case 34:
                case 39:
                  for (; l4++ < J4 && e2.charCodeAt(l4) !== g3; ) {
                  }
              }
              if (k3 === 0)
                break;
              l4++;
            }
            k3 = e2.substring(t4, l4);
            q4 === 0 && (q4 = (f3 = f3.replace(ca, "").trim()).charCodeAt(0));
            switch (q4) {
              case 64:
                0 < r4 && (f3 = f3.replace(N5, ""));
                g3 = f3.charCodeAt(1);
                switch (g3) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r4 = c7;
                    break;
                  default:
                    r4 = O4;
                }
                k3 = M5(c7, r4, k3, g3, a2 + 1);
                t4 = k3.length;
                0 < A5 && (r4 = X5(O4, f3, I5), C5 = H5(3, k3, r4, c7, D5, z5, t4, g3, a2, h3), f3 = r4.join(""), C5 !== void 0 && (t4 = (k3 = C5.trim()).length) === 0 && (g3 = 0, k3 = ""));
                if (0 < t4)
                  switch (g3) {
                    case 115:
                      f3 = f3.replace(da2, ea2);
                    case 100:
                    case 109:
                    case 45:
                      k3 = f3 + "{" + k3 + "}";
                      break;
                    case 107:
                      f3 = f3.replace(fa2, "$1 $2");
                      k3 = f3 + "{" + k3 + "}";
                      k3 = w4 === 1 || w4 === 2 && L5("@" + k3, 3) ? "@-webkit-" + k3 + "@" + k3 : "@" + k3;
                      break;
                    default:
                      k3 = f3 + k3, h3 === 112 && (k3 = (p5 += k3, ""));
                  }
                else
                  k3 = "";
                break;
              default:
                k3 = M5(c7, X5(c7, f3, I5), k3, h3, a2 + 1);
            }
            F5 += k3;
            k3 = I5 = r4 = u3 = q4 = 0;
            f3 = "";
            g3 = e2.charCodeAt(++l4);
            break;
          case 125:
          case 59:
            f3 = (0 < r4 ? f3.replace(N5, "") : f3).trim();
            if (1 < (t4 = f3.length))
              switch (u3 === 0 && (q4 = f3.charCodeAt(0), q4 === 45 || 96 < q4 && 123 > q4) && (t4 = (f3 = f3.replace(" ", ":")).length), 0 < A5 && (C5 = H5(1, f3, c7, d3, D5, z5, p5.length, h3, a2, h3)) !== void 0 && (t4 = (f3 = C5.trim()).length) === 0 && (f3 = "\0\0"), q4 = f3.charCodeAt(0), g3 = f3.charCodeAt(1), q4) {
                case 0:
                  break;
                case 64:
                  if (g3 === 105 || g3 === 99) {
                    G6 += f3 + e2.charAt(l4);
                    break;
                  }
                default:
                  f3.charCodeAt(t4 - 1) !== 58 && (p5 += P5(f3, q4, g3, f3.charCodeAt(2)));
              }
            I5 = r4 = u3 = q4 = 0;
            f3 = "";
            g3 = e2.charCodeAt(++l4);
        }
      }
      switch (g3) {
        case 13:
        case 10:
          b3 === 47 ? b3 = 0 : 1 + q4 === 0 && h3 !== 107 && 0 < f3.length && (r4 = 1, f3 += "\0");
          0 < A5 * Y4 && H5(0, f3, c7, d3, D5, z5, p5.length, h3, a2, h3);
          z5 = 1;
          D5++;
          break;
        case 59:
        case 125:
          if (b3 + n4 + v5 + m3 === 0) {
            z5++;
            break;
          }
        default:
          z5++;
          y4 = e2.charAt(l4);
          switch (g3) {
            case 9:
            case 32:
              if (n4 + m3 + b3 === 0)
                switch (x4) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    y4 = "";
                    break;
                  default:
                    g3 !== 32 && (y4 = " ");
                }
              break;
            case 0:
              y4 = "\\0";
              break;
            case 12:
              y4 = "\\f";
              break;
            case 11:
              y4 = "\\v";
              break;
            case 38:
              n4 + b3 + m3 === 0 && (r4 = I5 = 1, y4 = "\f" + y4);
              break;
            case 108:
              if (n4 + b3 + m3 + E5 === 0 && 0 < u3)
                switch (l4 - u3) {
                  case 2:
                    x4 === 112 && e2.charCodeAt(l4 - 3) === 58 && (E5 = x4);
                  case 8:
                    K5 === 111 && (E5 = K5);
                }
              break;
            case 58:
              n4 + b3 + m3 === 0 && (u3 = l4);
              break;
            case 44:
              b3 + v5 + n4 + m3 === 0 && (r4 = 1, y4 += "\r");
              break;
            case 34:
            case 39:
              b3 === 0 && (n4 = n4 === g3 ? 0 : n4 === 0 ? g3 : n4);
              break;
            case 91:
              n4 + b3 + v5 === 0 && m3++;
              break;
            case 93:
              n4 + b3 + v5 === 0 && m3--;
              break;
            case 41:
              n4 + b3 + m3 === 0 && v5--;
              break;
            case 40:
              if (n4 + b3 + m3 === 0) {
                if (q4 === 0)
                  switch (2 * x4 + 3 * K5) {
                    case 533:
                      break;
                    default:
                      q4 = 1;
                  }
                v5++;
              }
              break;
            case 64:
              b3 + v5 + n4 + m3 + u3 + k3 === 0 && (k3 = 1);
              break;
            case 42:
            case 47:
              if (!(0 < n4 + m3 + v5))
                switch (b3) {
                  case 0:
                    switch (2 * g3 + 3 * e2.charCodeAt(l4 + 1)) {
                      case 235:
                        b3 = 47;
                        break;
                      case 220:
                        t4 = l4, b3 = 42;
                    }
                    break;
                  case 42:
                    g3 === 47 && x4 === 42 && t4 + 2 !== l4 && (e2.charCodeAt(t4 + 2) === 33 && (p5 += e2.substring(t4, l4 + 1)), y4 = "", b3 = 0);
                }
          }
          b3 === 0 && (f3 += y4);
      }
      K5 = x4;
      x4 = g3;
      l4++;
    }
    t4 = p5.length;
    if (0 < t4) {
      r4 = c7;
      if (0 < A5 && (C5 = H5(2, p5, r4, d3, D5, z5, t4, h3, a2, h3), C5 !== void 0 && (p5 = C5).length === 0))
        return G6 + p5 + F5;
      p5 = r4.join(",") + "{" + p5 + "}";
      if (w4 * E5 !== 0) {
        w4 !== 2 || L5(p5, 2) || (E5 = 0);
        switch (E5) {
          case 111:
            p5 = p5.replace(ha2, ":-moz-$1") + p5;
            break;
          case 112:
            p5 = p5.replace(Q5, "::-webkit-input-$1") + p5.replace(Q5, "::-moz-$1") + p5.replace(Q5, ":-ms-input-$1") + p5;
        }
        E5 = 0;
      }
    }
    return G6 + p5 + F5;
  }
  function X5(d3, c7, e2) {
    var h3 = c7.trim().split(ia2);
    c7 = h3;
    var a2 = h3.length, m3 = d3.length;
    switch (m3) {
      case 0:
      case 1:
        var b3 = 0;
        for (d3 = m3 === 0 ? "" : d3[0] + " "; b3 < a2; ++b3) {
          c7[b3] = Z4(d3, c7[b3], e2).trim();
        }
        break;
      default:
        var v5 = b3 = 0;
        for (c7 = []; b3 < a2; ++b3) {
          for (var n4 = 0; n4 < m3; ++n4) {
            c7[v5++] = Z4(d3[n4] + " ", h3[b3], e2).trim();
          }
        }
    }
    return c7;
  }
  function Z4(d3, c7, e2) {
    var h3 = c7.charCodeAt(0);
    33 > h3 && (h3 = (c7 = c7.trim()).charCodeAt(0));
    switch (h3) {
      case 38:
        return c7.replace(F4, "$1" + d3.trim());
      case 58:
        return d3.trim() + c7.replace(F4, "$1" + d3.trim());
      default:
        if (0 < 1 * e2 && 0 < c7.indexOf("\f"))
          return c7.replace(F4, (d3.charCodeAt(0) === 58 ? "" : "$1") + d3.trim());
    }
    return d3 + c7;
  }
  function P5(d3, c7, e2, h3) {
    var a2 = d3 + ";", m3 = 2 * c7 + 3 * e2 + 4 * h3;
    if (m3 === 944) {
      d3 = a2.indexOf(":", 9) + 1;
      var b3 = a2.substring(d3, a2.length - 1).trim();
      b3 = a2.substring(0, d3).trim() + b3 + ";";
      return w4 === 1 || w4 === 2 && L5(b3, 1) ? "-webkit-" + b3 + b3 : b3;
    }
    if (w4 === 0 || w4 === 2 && !L5(a2, 1))
      return a2;
    switch (m3) {
      case 1015:
        return a2.charCodeAt(10) === 97 ? "-webkit-" + a2 + a2 : a2;
      case 951:
        return a2.charCodeAt(3) === 116 ? "-webkit-" + a2 + a2 : a2;
      case 963:
        return a2.charCodeAt(5) === 110 ? "-webkit-" + a2 + a2 : a2;
      case 1009:
        if (a2.charCodeAt(4) !== 100)
          break;
      case 969:
      case 942:
        return "-webkit-" + a2 + a2;
      case 978:
        return "-webkit-" + a2 + "-moz-" + a2 + a2;
      case 1019:
      case 983:
        return "-webkit-" + a2 + "-moz-" + a2 + "-ms-" + a2 + a2;
      case 883:
        if (a2.charCodeAt(8) === 45)
          return "-webkit-" + a2 + a2;
        if (0 < a2.indexOf("image-set(", 11))
          return a2.replace(ja2, "$1-webkit-$2") + a2;
        break;
      case 932:
        if (a2.charCodeAt(4) === 45)
          switch (a2.charCodeAt(5)) {
            case 103:
              return "-webkit-box-" + a2.replace("-grow", "") + "-webkit-" + a2 + "-ms-" + a2.replace("grow", "positive") + a2;
            case 115:
              return "-webkit-" + a2 + "-ms-" + a2.replace("shrink", "negative") + a2;
            case 98:
              return "-webkit-" + a2 + "-ms-" + a2.replace("basis", "preferred-size") + a2;
          }
        return "-webkit-" + a2 + "-ms-" + a2 + a2;
      case 964:
        return "-webkit-" + a2 + "-ms-flex-" + a2 + a2;
      case 1023:
        if (a2.charCodeAt(8) !== 99)
          break;
        b3 = a2.substring(a2.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify");
        return "-webkit-box-pack" + b3 + "-webkit-" + a2 + "-ms-flex-pack" + b3 + a2;
      case 1005:
        return ka2.test(a2) ? a2.replace(aa, ":-webkit-") + a2.replace(aa, ":-moz-") + a2 : a2;
      case 1e3:
        b3 = a2.substring(13).trim();
        c7 = b3.indexOf("-") + 1;
        switch (b3.charCodeAt(0) + b3.charCodeAt(c7)) {
          case 226:
            b3 = a2.replace(G5, "tb");
            break;
          case 232:
            b3 = a2.replace(G5, "tb-rl");
            break;
          case 220:
            b3 = a2.replace(G5, "lr");
            break;
          default:
            return a2;
        }
        return "-webkit-" + a2 + "-ms-" + b3 + a2;
      case 1017:
        if (a2.indexOf("sticky", 9) === -1)
          break;
      case 975:
        c7 = (a2 = d3).length - 10;
        b3 = (a2.charCodeAt(c7) === 33 ? a2.substring(0, c7) : a2).substring(d3.indexOf(":", 7) + 1).trim();
        switch (m3 = b3.charCodeAt(0) + (b3.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b3.charCodeAt(8))
              break;
          case 115:
            a2 = a2.replace(b3, "-webkit-" + b3) + ";" + a2;
            break;
          case 207:
          case 102:
            a2 = a2.replace(b3, "-webkit-" + (102 < m3 ? "inline-" : "") + "box") + ";" + a2.replace(b3, "-webkit-" + b3) + ";" + a2.replace(b3, "-ms-" + b3 + "box") + ";" + a2;
        }
        return a2 + ";";
      case 938:
        if (a2.charCodeAt(5) === 45)
          switch (a2.charCodeAt(6)) {
            case 105:
              return b3 = a2.replace("-items", ""), "-webkit-" + a2 + "-webkit-box-" + b3 + "-ms-flex-" + b3 + a2;
            case 115:
              return "-webkit-" + a2 + "-ms-flex-item-" + a2.replace(ba, "") + a2;
            default:
              return "-webkit-" + a2 + "-ms-flex-line-pack" + a2.replace("align-content", "").replace(ba, "") + a2;
          }
        break;
      case 973:
      case 989:
        if (a2.charCodeAt(3) !== 45 || a2.charCodeAt(4) === 122)
          break;
      case 931:
      case 953:
        if (la2.test(d3) === true)
          return (b3 = d3.substring(d3.indexOf(":") + 1)).charCodeAt(0) === 115 ? P5(d3.replace("stretch", "fill-available"), c7, e2, h3).replace(":fill-available", ":stretch") : a2.replace(b3, "-webkit-" + b3) + a2.replace(b3, "-moz-" + b3.replace("fill-", "")) + a2;
        break;
      case 962:
        if (a2 = "-webkit-" + a2 + (a2.charCodeAt(5) === 102 ? "-ms-" + a2 : "") + a2, e2 + h3 === 211 && a2.charCodeAt(13) === 105 && 0 < a2.indexOf("transform", 10))
          return a2.substring(0, a2.indexOf(";", 27) + 1).replace(ma2, "$1-webkit-$2") + a2;
    }
    return a2;
  }
  function L5(d3, c7) {
    var e2 = d3.indexOf(c7 === 1 ? ":" : "{"), h3 = d3.substring(0, c7 !== 3 ? e2 : 10);
    e2 = d3.substring(e2 + 1, d3.length - 1);
    return R4(c7 !== 2 ? h3 : h3.replace(na, "$1"), e2, c7);
  }
  function ea2(d3, c7) {
    var e2 = P5(c7, c7.charCodeAt(0), c7.charCodeAt(1), c7.charCodeAt(2));
    return e2 !== c7 + ";" ? e2.replace(oa2, " or ($1)").substring(4) : "(" + c7 + ")";
  }
  function H5(d3, c7, e2, h3, a2, m3, b3, v5, n4, q4) {
    for (var g3 = 0, x4 = c7, w5; g3 < A5; ++g3) {
      switch (w5 = S5[g3].call(B5, d3, x4, e2, h3, a2, m3, b3, v5, n4, q4)) {
        case void 0:
        case false:
        case true:
        case null:
          break;
        default:
          x4 = w5;
      }
    }
    if (x4 !== c7)
      return x4;
  }
  function T5(d3) {
    switch (d3) {
      case void 0:
      case null:
        A5 = S5.length = 0;
        break;
      default:
        if (typeof d3 === "function")
          S5[A5++] = d3;
        else if (typeof d3 === "object")
          for (var c7 = 0, e2 = d3.length; c7 < e2; ++c7) {
            T5(d3[c7]);
          }
        else
          Y4 = !!d3 | 0;
    }
    return T5;
  }
  function U5(d3) {
    d3 = d3.prefix;
    d3 !== void 0 && (R4 = null, d3 ? typeof d3 !== "function" ? w4 = 1 : (w4 = 2, R4 = d3) : w4 = 0);
    return U5;
  }
  function B5(d3, c7) {
    var e2 = d3;
    33 > e2.charCodeAt(0) && (e2 = e2.trim());
    V5 = e2;
    e2 = [V5];
    if (0 < A5) {
      var h3 = H5(-1, c7, e2, e2, D5, z5, 0, 0, 0, 0);
      h3 !== void 0 && typeof h3 === "string" && (c7 = h3);
    }
    var a2 = M5(O4, e2, c7, 0, 0);
    0 < A5 && (h3 = H5(-2, a2, e2, e2, D5, z5, a2.length, 0, 0, 0), h3 !== void 0 && (a2 = h3));
    V5 = "";
    E5 = 0;
    z5 = D5 = 1;
    return a2;
  }
  var ca = /^\0+/g, N5 = /[\0\r\f]/g, aa = /: */g, ka2 = /zoo|gra/, ma2 = /([,: ])(transform)/g, ia2 = /,\r+?/g, F4 = /([\t\r\n ])*\f?&/g, fa2 = /@(k\w+)\s*(\S*)\s*/, Q5 = /::(place)/g, ha2 = /:(read-only)/g, G5 = /[svh]\w+-[tblr]{2}/, da2 = /\(\s*(.*)\s*\)/g, oa2 = /([\s\S]*?);/g, ba = /-self|flex-/g, na = /[^]*?(:[rp][el]a[\w-]+)[^]*/, la2 = /stretch|:\s*\w+\-(?:conte|avail)/, ja2 = /([^-])(image-set\()/, z5 = 1, D5 = 1, E5 = 0, w4 = 1, O4 = [], S5 = [], A5 = 0, R4 = null, Y4 = 0, V5 = "";
  B5.use = T5;
  B5.set = U5;
  W5 !== void 0 && U5(W5);
  return B5;
}
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
function memoize(fn) {
  var cache = Object.create(null);
  return function(arg) {
    if (cache[arg] === void 0)
      cache[arg] = fn(arg);
    return cache[arg];
  };
}
var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
var isPropValid = /* @__PURE__ */ memoize(function(prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91;
});
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b = typeof Symbol === "function" && Symbol.for;
var c = b ? Symbol.for("react.element") : 60103;
var d = b ? Symbol.for("react.portal") : 60106;
var e = b ? Symbol.for("react.fragment") : 60107;
var f = b ? Symbol.for("react.strict_mode") : 60108;
var g = b ? Symbol.for("react.profiler") : 60114;
var h = b ? Symbol.for("react.provider") : 60109;
var k = b ? Symbol.for("react.context") : 60110;
var l2 = b ? Symbol.for("react.async_mode") : 60111;
var m = b ? Symbol.for("react.concurrent_mode") : 60111;
var n2 = b ? Symbol.for("react.forward_ref") : 60112;
var p3 = b ? Symbol.for("react.suspense") : 60113;
var q2 = b ? Symbol.for("react.suspense_list") : 60120;
var r2 = b ? Symbol.for("react.memo") : 60115;
var t2 = b ? Symbol.for("react.lazy") : 60116;
var v3 = b ? Symbol.for("react.block") : 60121;
var w2 = b ? Symbol.for("react.fundamental") : 60117;
var x2 = b ? Symbol.for("react.responder") : 60118;
var y2 = b ? Symbol.for("react.scope") : 60119;
function z3(a2) {
  if (typeof a2 === "object" && a2 !== null) {
    var u3 = a2.$$typeof;
    switch (u3) {
      case c:
        switch (a2 = a2.type, a2) {
          case l2:
          case m:
          case e:
          case g:
          case f:
          case p3:
            return a2;
          default:
            switch (a2 = a2 && a2.$$typeof, a2) {
              case k:
              case n2:
              case t2:
              case r2:
              case h:
                return a2;
              default:
                return u3;
            }
        }
      case d:
        return u3;
    }
  }
}
function A3(a2) {
  return z3(a2) === m;
}
var AsyncMode = l2;
var ConcurrentMode = m;
var ContextConsumer$1 = k;
var ContextProvider$1 = h;
var Element$1 = c;
var ForwardRef$1 = n2;
var Fragment$1 = e;
var Lazy$1 = t2;
var Memo$1 = r2;
var Portal$1 = d;
var Profiler$1 = g;
var StrictMode$1 = f;
var Suspense$1 = p3;
var isAsyncMode = function(a2) {
  return A3(a2) || z3(a2) === l2;
};
var isConcurrentMode = A3;
var isContextConsumer$1 = function(a2) {
  return z3(a2) === k;
};
var isContextProvider$1 = function(a2) {
  return z3(a2) === h;
};
var isElement$1 = function(a2) {
  return typeof a2 === "object" && a2 !== null && a2.$$typeof === c;
};
var isForwardRef$1 = function(a2) {
  return z3(a2) === n2;
};
var isFragment$1 = function(a2) {
  return z3(a2) === e;
};
var isLazy$1 = function(a2) {
  return z3(a2) === t2;
};
var isMemo$1 = function(a2) {
  return z3(a2) === r2;
};
var isPortal$1 = function(a2) {
  return z3(a2) === d;
};
var isProfiler$1 = function(a2) {
  return z3(a2) === g;
};
var isStrictMode$1 = function(a2) {
  return z3(a2) === f;
};
var isSuspense$1 = function(a2) {
  return z3(a2) === p3;
};
var isValidElementType$1 = function(a2) {
  return typeof a2 === "string" || typeof a2 === "function" || a2 === e || a2 === m || a2 === g || a2 === f || a2 === p3 || a2 === q2 || typeof a2 === "object" && a2 !== null && (a2.$$typeof === t2 || a2.$$typeof === r2 || a2.$$typeof === h || a2.$$typeof === k || a2.$$typeof === n2 || a2.$$typeof === w2 || a2.$$typeof === x2 || a2.$$typeof === y2 || a2.$$typeof === v3);
};
var typeOf$1 = z3;
var reactIs_production_min = {
  AsyncMode,
  ConcurrentMode,
  ContextConsumer: ContextConsumer$1,
  ContextProvider: ContextProvider$1,
  Element: Element$1,
  ForwardRef: ForwardRef$1,
  Fragment: Fragment$1,
  Lazy: Lazy$1,
  Memo: Memo$1,
  Portal: Portal$1,
  Profiler: Profiler$1,
  StrictMode: StrictMode$1,
  Suspense: Suspense$1,
  isAsyncMode,
  isConcurrentMode,
  isContextConsumer: isContextConsumer$1,
  isContextProvider: isContextProvider$1,
  isElement: isElement$1,
  isForwardRef: isForwardRef$1,
  isFragment: isFragment$1,
  isLazy: isLazy$1,
  isMemo: isMemo$1,
  isPortal: isPortal$1,
  isProfiler: isProfiler$1,
  isStrictMode: isStrictMode$1,
  isSuspense: isSuspense$1,
  isValidElementType: isValidElementType$1,
  typeOf: typeOf$1
};
var reactIs$1 = createCommonjsModule(function(module) {
  {
    module.exports = reactIs_production_min;
  }
});
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  $$typeof: true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  $$typeof: true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs$1.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs$1.Memo] = MEMO_STATICS;
function getStatics(component) {
  if (reactIs$1.isMemo(component)) {
    return MEMO_STATICS;
  }
  return TYPE_STATICS[component["$$typeof"]] || REACT_STATICS;
}
var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== "string") {
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);
      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }
    var keys = getOwnPropertyNames(sourceComponent);
    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }
    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);
    for (var i2 = 0; i2 < keys.length; ++i2) {
      var key = keys[i2];
      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
        try {
          defineProperty(targetComponent, key, descriptor);
        } catch (e2) {
        }
      }
    }
  }
  return targetComponent;
}
var hoistNonReactStatics_cjs = hoistNonReactStatics;
function y$1() {
  return (y$1 = Object.assign || function(e2) {
    for (var t4 = 1; t4 < arguments.length; t4++) {
      var n4 = arguments[t4];
      for (var r4 in n4)
        Object.prototype.hasOwnProperty.call(n4, r4) && (e2[r4] = n4[r4]);
    }
    return e2;
  }).apply(this, arguments);
}
var v$1 = function(e2, t4) {
  for (var n4 = [e2[0]], r4 = 0, o2 = t4.length; r4 < o2; r4 += 1)
    n4.push(t4[r4], e2[r4 + 1]);
  return n4;
};
var g$1 = function(t4) {
  return t4 !== null && typeof t4 == "object" && (t4.toString ? t4.toString() : Object.prototype.toString.call(t4)) === "[object Object]" && !reactIs.typeOf(t4);
};
var S3 = Object.freeze([]);
var w$1 = Object.freeze({});
function E3(e2) {
  return typeof e2 == "function";
}
function b$1(e2) {
  return e2.displayName || e2.name || "Component";
}
function _(e2) {
  return e2 && typeof e2.styledComponentId == "string";
}
var N3 = typeof process != "undefined" && process.env !== void 0 && process.env.SC_ATTR || "data-styled";
var C3 = typeof window != "undefined" && "HTMLElement" in window;
var I3 = Boolean(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process != "undefined" && process.env !== void 0 && false);
var P3 = {};
function D3(e2) {
  for (var t4 = arguments.length, n4 = new Array(t4 > 1 ? t4 - 1 : 0), r4 = 1; r4 < t4; r4++)
    n4[r4 - 1] = arguments[r4];
  throw new Error("An error occurred. See https://git.io/JUIaE#" + e2 + " for more information." + (n4.length > 0 ? " Args: " + n4.join(", ") : ""));
}
var j = function() {
  function e2(e3) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = e3;
  }
  var t4 = e2.prototype;
  return t4.indexOfGroup = function(e3) {
    for (var t5 = 0, n4 = 0; n4 < e3; n4++)
      t5 += this.groupSizes[n4];
    return t5;
  }, t4.insertRules = function(e3, t5) {
    if (e3 >= this.groupSizes.length) {
      for (var n4 = this.groupSizes, r4 = n4.length, o2 = r4; e3 >= o2; )
        (o2 <<= 1) < 0 && D3(16, "" + e3);
      this.groupSizes = new Uint32Array(o2), this.groupSizes.set(n4), this.length = o2;
      for (var s2 = r4; s2 < o2; s2++)
        this.groupSizes[s2] = 0;
    }
    for (var i2 = this.indexOfGroup(e3 + 1), a2 = 0, c7 = t5.length; a2 < c7; a2++)
      this.tag.insertRule(i2, t5[a2]) && (this.groupSizes[e3]++, i2++);
  }, t4.clearGroup = function(e3) {
    if (e3 < this.length) {
      var t5 = this.groupSizes[e3], n4 = this.indexOfGroup(e3), r4 = n4 + t5;
      this.groupSizes[e3] = 0;
      for (var o2 = n4; o2 < r4; o2++)
        this.tag.deleteRule(n4);
    }
  }, t4.getGroup = function(e3) {
    var t5 = "";
    if (e3 >= this.length || this.groupSizes[e3] === 0)
      return t5;
    for (var n4 = this.groupSizes[e3], r4 = this.indexOfGroup(e3), o2 = r4 + n4, s2 = r4; s2 < o2; s2++)
      t5 += this.tag.getRule(s2) + "/*!sc*/\n";
    return t5;
  }, e2;
}();
var T3 = new Map();
var x$1 = new Map();
var k$1 = 1;
var V3 = function(e2) {
  if (T3.has(e2))
    return T3.get(e2);
  for (; x$1.has(k$1); )
    k$1++;
  var t4 = k$1++;
  return T3.set(e2, t4), x$1.set(t4, e2), t4;
};
var B3 = function(e2) {
  return x$1.get(e2);
};
var z$1 = function(e2, t4) {
  t4 >= k$1 && (k$1 = t4 + 1), T3.set(e2, t4), x$1.set(t4, e2);
};
var M3 = "style[" + N3 + '][data-styled-version="5.3.11"]';
var G3 = new RegExp("^" + N3 + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)');
var L3 = function(e2, t4, n4) {
  for (var r4, o2 = n4.split(","), s2 = 0, i2 = o2.length; s2 < i2; s2++)
    (r4 = o2[s2]) && e2.registerName(t4, r4);
};
var F2 = function(e2, t4) {
  for (var n4 = (t4.textContent || "").split("/*!sc*/\n"), r4 = [], o2 = 0, s2 = n4.length; o2 < s2; o2++) {
    var i2 = n4[o2].trim();
    if (i2) {
      var a2 = i2.match(G3);
      if (a2) {
        var c7 = 0 | parseInt(a2[1], 10), u3 = a2[2];
        c7 !== 0 && (z$1(u3, c7), L3(e2, u3, a2[3]), e2.getTag().insertRules(c7, r4)), r4.length = 0;
      } else
        r4.push(i2);
    }
  }
};
var Y2 = function() {
  return typeof __webpack_nonce__ != "undefined" ? __webpack_nonce__ : null;
};
var q$1 = function(e2) {
  var t4 = document.head, n4 = e2 || t4, r4 = document.createElement("style"), o2 = function(e3) {
    for (var t5 = e3.childNodes, n5 = t5.length; n5 >= 0; n5--) {
      var r5 = t5[n5];
      if (r5 && r5.nodeType === 1 && r5.hasAttribute(N3))
        return r5;
    }
  }(n4), s2 = o2 !== void 0 ? o2.nextSibling : null;
  r4.setAttribute(N3, "active"), r4.setAttribute("data-styled-version", "5.3.11");
  var i2 = Y2();
  return i2 && r4.setAttribute("nonce", i2), n4.insertBefore(r4, s2), r4;
};
var H3 = function() {
  function e2(e3) {
    var t5 = this.element = q$1(e3);
    t5.appendChild(document.createTextNode("")), this.sheet = function(e4) {
      if (e4.sheet)
        return e4.sheet;
      for (var t6 = document.styleSheets, n4 = 0, r4 = t6.length; n4 < r4; n4++) {
        var o2 = t6[n4];
        if (o2.ownerNode === e4)
          return o2;
      }
      D3(17);
    }(t5), this.length = 0;
  }
  var t4 = e2.prototype;
  return t4.insertRule = function(e3, t5) {
    try {
      return this.sheet.insertRule(t5, e3), this.length++, true;
    } catch (e4) {
      return false;
    }
  }, t4.deleteRule = function(e3) {
    this.sheet.deleteRule(e3), this.length--;
  }, t4.getRule = function(e3) {
    var t5 = this.sheet.cssRules[e3];
    return t5 !== void 0 && typeof t5.cssText == "string" ? t5.cssText : "";
  }, e2;
}();
var $ = function() {
  function e2(e3) {
    var t5 = this.element = q$1(e3);
    this.nodes = t5.childNodes, this.length = 0;
  }
  var t4 = e2.prototype;
  return t4.insertRule = function(e3, t5) {
    if (e3 <= this.length && e3 >= 0) {
      var n4 = document.createTextNode(t5), r4 = this.nodes[e3];
      return this.element.insertBefore(n4, r4 || null), this.length++, true;
    }
    return false;
  }, t4.deleteRule = function(e3) {
    this.element.removeChild(this.nodes[e3]), this.length--;
  }, t4.getRule = function(e3) {
    return e3 < this.length ? this.nodes[e3].textContent : "";
  }, e2;
}();
var W3 = function() {
  function e2(e3) {
    this.rules = [], this.length = 0;
  }
  var t4 = e2.prototype;
  return t4.insertRule = function(e3, t5) {
    return e3 <= this.length && (this.rules.splice(e3, 0, t5), this.length++, true);
  }, t4.deleteRule = function(e3) {
    this.rules.splice(e3, 1), this.length--;
  }, t4.getRule = function(e3) {
    return e3 < this.length ? this.rules[e3] : "";
  }, e2;
}();
var U3 = C3;
var J2 = {isServer: !C3, useCSSOMInjection: !I3};
var X3 = function() {
  function e2(e3, t5, n4) {
    e3 === void 0 && (e3 = w$1), t5 === void 0 && (t5 = {}), this.options = y$1({}, J2, {}, e3), this.gs = t5, this.names = new Map(n4), this.server = !!e3.isServer, !this.server && C3 && U3 && (U3 = false, function(e4) {
      for (var t6 = document.querySelectorAll(M3), n5 = 0, r4 = t6.length; n5 < r4; n5++) {
        var o2 = t6[n5];
        o2 && o2.getAttribute(N3) !== "active" && (F2(e4, o2), o2.parentNode && o2.parentNode.removeChild(o2));
      }
    }(this));
  }
  e2.registerId = function(e3) {
    return V3(e3);
  };
  var t4 = e2.prototype;
  return t4.reconstructWithOptions = function(t5, n4) {
    return n4 === void 0 && (n4 = true), new e2(y$1({}, this.options, {}, t5), this.gs, n4 && this.names || void 0);
  }, t4.allocateGSInstance = function(e3) {
    return this.gs[e3] = (this.gs[e3] || 0) + 1;
  }, t4.getTag = function() {
    return this.tag || (this.tag = (n4 = (t5 = this.options).isServer, r4 = t5.useCSSOMInjection, o2 = t5.target, e3 = n4 ? new W3(o2) : r4 ? new H3(o2) : new $(o2), new j(e3)));
    var e3, t5, n4, r4, o2;
  }, t4.hasNameForId = function(e3, t5) {
    return this.names.has(e3) && this.names.get(e3).has(t5);
  }, t4.registerName = function(e3, t5) {
    if (V3(e3), this.names.has(e3))
      this.names.get(e3).add(t5);
    else {
      var n4 = new Set();
      n4.add(t5), this.names.set(e3, n4);
    }
  }, t4.insertRules = function(e3, t5, n4) {
    this.registerName(e3, t5), this.getTag().insertRules(V3(e3), n4);
  }, t4.clearNames = function(e3) {
    this.names.has(e3) && this.names.get(e3).clear();
  }, t4.clearRules = function(e3) {
    this.getTag().clearGroup(V3(e3)), this.clearNames(e3);
  }, t4.clearTag = function() {
    this.tag = void 0;
  }, t4.toString = function() {
    return function(e3) {
      for (var t5 = e3.getTag(), n4 = t5.length, r4 = "", o2 = 0; o2 < n4; o2++) {
        var s2 = B3(o2);
        if (s2 !== void 0) {
          var i2 = e3.names.get(s2), a2 = t5.getGroup(o2);
          if (i2 && a2 && i2.size) {
            var c7 = N3 + ".g" + o2 + '[id="' + s2 + '"]', u3 = "";
            i2 !== void 0 && i2.forEach(function(e4) {
              e4.length > 0 && (u3 += e4 + ",");
            }), r4 += "" + a2 + c7 + '{content:"' + u3 + '"}/*!sc*/\n';
          }
        }
      }
      return r4;
    }(this);
  }, e2;
}();
var Z2 = /(a)(d)/gi;
var K3 = function(e2) {
  return String.fromCharCode(e2 + (e2 > 25 ? 39 : 97));
};
function Q3(e2) {
  var t4, n4 = "";
  for (t4 = Math.abs(e2); t4 > 52; t4 = t4 / 52 | 0)
    n4 = K3(t4 % 52) + n4;
  return (K3(t4 % 52) + n4).replace(Z2, "$1-$2");
}
var ee2 = function(e2, t4) {
  for (var n4 = t4.length; n4; )
    e2 = 33 * e2 ^ t4.charCodeAt(--n4);
  return e2;
};
var te2 = function(e2) {
  return ee2(5381, e2);
};
function ne2(e2) {
  for (var t4 = 0; t4 < e2.length; t4 += 1) {
    var n4 = e2[t4];
    if (E3(n4) && !_(n4))
      return false;
  }
  return true;
}
var re2 = te2("5.3.11");
var oe2 = function() {
  function e2(e3, t4, n4) {
    this.rules = e3, this.staticRulesId = "", this.isStatic = (n4 === void 0 || n4.isStatic) && ne2(e3), this.componentId = t4, this.baseHash = ee2(re2, t4), this.baseStyle = n4, X3.registerId(t4);
  }
  return e2.prototype.generateAndInjectStyles = function(e3, t4, n4) {
    var r4 = this.componentId, o2 = [];
    if (this.baseStyle && o2.push(this.baseStyle.generateAndInjectStyles(e3, t4, n4)), this.isStatic && !n4.hash)
      if (this.staticRulesId && t4.hasNameForId(r4, this.staticRulesId))
        o2.push(this.staticRulesId);
      else {
        var s2 = _e(this.rules, e3, t4, n4).join(""), i2 = Q3(ee2(this.baseHash, s2) >>> 0);
        if (!t4.hasNameForId(r4, i2)) {
          var a2 = n4(s2, "." + i2, void 0, r4);
          t4.insertRules(r4, i2, a2);
        }
        o2.push(i2), this.staticRulesId = i2;
      }
    else {
      for (var c7 = this.rules.length, u3 = ee2(this.baseHash, n4.hash), l4 = "", d3 = 0; d3 < c7; d3++) {
        var h3 = this.rules[d3];
        if (typeof h3 == "string")
          l4 += h3, false;
        else if (h3) {
          var p5 = _e(h3, e3, t4, n4), f3 = Array.isArray(p5) ? p5.join("") : p5;
          u3 = ee2(u3, f3 + d3), l4 += f3;
        }
      }
      if (l4) {
        var m3 = Q3(u3 >>> 0);
        if (!t4.hasNameForId(r4, m3)) {
          var y4 = n4(l4, "." + m3, void 0, r4);
          t4.insertRules(r4, m3, y4);
        }
        o2.push(m3);
      }
    }
    return o2.join(" ");
  }, e2;
}();
var se2 = /^\s*\/\/.*$/gm;
var ie2 = [":", "[", ".", "#"];
function ae2(e2) {
  var t4, n4, r4, o2, s2 = e2 === void 0 ? w$1 : e2, i2 = s2.options, a2 = i2 === void 0 ? w$1 : i2, c7 = s2.plugins, u3 = c7 === void 0 ? S3 : c7, l4 = new stylis_min(a2), d3 = [], p5 = function(e3) {
    function t5(t6) {
      if (t6)
        try {
          e3(t6 + "}");
        } catch (e4) {
        }
    }
    return function(n5, r5, o3, s3, i3, a3, c8, u4, l5, d4) {
      switch (n5) {
        case 1:
          if (l5 === 0 && r5.charCodeAt(0) === 64)
            return e3(r5 + ";"), "";
          break;
        case 2:
          if (u4 === 0)
            return r5 + "/*|*/";
          break;
        case 3:
          switch (u4) {
            case 102:
            case 112:
              return e3(o3[0] + r5), "";
            default:
              return r5 + (d4 === 0 ? "/*|*/" : "");
          }
        case -2:
          r5.split("/*|*/}").forEach(t5);
      }
    };
  }(function(e3) {
    d3.push(e3);
  }), f3 = function(e3, r5, s3) {
    return r5 === 0 && ie2.indexOf(s3[n4.length]) !== -1 || s3.match(o2) ? e3 : "." + t4;
  };
  function m3(e3, s3, i3, a3) {
    a3 === void 0 && (a3 = "&");
    var c8 = e3.replace(se2, ""), u4 = s3 && i3 ? i3 + " " + s3 + " { " + c8 + " }" : c8;
    return t4 = a3, n4 = s3, r4 = new RegExp("\\" + n4 + "\\b", "g"), o2 = new RegExp("(\\" + n4 + "\\b){2,}"), l4(i3 || !s3 ? "" : s3, u4);
  }
  return l4.use([].concat(u3, [function(e3, t5, o3) {
    e3 === 2 && o3.length && o3[0].lastIndexOf(n4) > 0 && (o3[0] = o3[0].replace(r4, f3));
  }, p5, function(e3) {
    if (e3 === -2) {
      var t5 = d3;
      return d3 = [], t5;
    }
  }])), m3.hash = u3.length ? u3.reduce(function(e3, t5) {
    return t5.name || D3(15), ee2(e3, t5.name);
  }, 5381).toString() : "", m3;
}
var ce2 = react.createContext();
var ue2 = ce2.Consumer;
var le2 = react.createContext();
var de2 = (le2.Consumer, new X3());
var he2 = ae2();
function pe2() {
  return react.useContext(ce2) || de2;
}
function fe2() {
  return react.useContext(le2) || he2;
}
var ye = function() {
  function e2(e3, t4) {
    var n4 = this;
    this.inject = function(e4, t5) {
      t5 === void 0 && (t5 = he2);
      var r4 = n4.name + t5.hash;
      e4.hasNameForId(n4.id, r4) || e4.insertRules(n4.id, r4, t5(n4.rules, r4, "@keyframes"));
    }, this.toString = function() {
      return D3(12, String(n4.name));
    }, this.name = e3, this.id = "sc-keyframes-" + e3, this.rules = t4;
  }
  return e2.prototype.getName = function(e3) {
    return e3 === void 0 && (e3 = he2), this.name + e3.hash;
  }, e2;
}();
var ve2 = /([A-Z])/;
var ge2 = /([A-Z])/g;
var Se2 = /^ms-/;
var we2 = function(e2) {
  return "-" + e2.toLowerCase();
};
function Ee2(e2) {
  return ve2.test(e2) ? e2.replace(ge2, we2).replace(Se2, "-ms-") : e2;
}
var be2 = function(e2) {
  return e2 == null || e2 === false || e2 === "";
};
function _e(e2, n4, r4, o2) {
  if (Array.isArray(e2)) {
    for (var s2, i2 = [], a2 = 0, c7 = e2.length; a2 < c7; a2 += 1)
      (s2 = _e(e2[a2], n4, r4, o2)) !== "" && (Array.isArray(s2) ? i2.push.apply(i2, s2) : i2.push(s2));
    return i2;
  }
  if (be2(e2))
    return "";
  if (_(e2))
    return "." + e2.styledComponentId;
  if (E3(e2)) {
    if (typeof (l4 = e2) != "function" || l4.prototype && l4.prototype.isReactComponent || !n4)
      return e2;
    var u3 = e2(n4);
    return _e(u3, n4, r4, o2);
  }
  var l4;
  return e2 instanceof ye ? r4 ? (e2.inject(r4, o2), e2.getName(o2)) : e2 : g$1(e2) ? function e3(t4, n5) {
    var r5, o3, s3 = [];
    for (var i3 in t4)
      t4.hasOwnProperty(i3) && !be2(t4[i3]) && (Array.isArray(t4[i3]) && t4[i3].isCss || E3(t4[i3]) ? s3.push(Ee2(i3) + ":", t4[i3], ";") : g$1(t4[i3]) ? s3.push.apply(s3, e3(t4[i3], i3)) : s3.push(Ee2(i3) + ": " + (r5 = i3, (o3 = t4[i3]) == null || typeof o3 == "boolean" || o3 === "" ? "" : typeof o3 != "number" || o3 === 0 || r5 in unitlessKeys || r5.startsWith("--") ? String(o3).trim() : o3 + "px") + ";"));
    return n5 ? [n5 + " {"].concat(s3, ["}"]) : s3;
  }(e2) : e2.toString();
}
var Ne2 = function(e2) {
  return Array.isArray(e2) && (e2.isCss = true), e2;
};
function Ae2(e2) {
  for (var t4 = arguments.length, n4 = new Array(t4 > 1 ? t4 - 1 : 0), r4 = 1; r4 < t4; r4++)
    n4[r4 - 1] = arguments[r4];
  return E3(e2) || g$1(e2) ? Ne2(_e(v$1(S3, [e2].concat(n4)))) : n4.length === 0 && e2.length === 1 && typeof e2[0] == "string" ? e2 : Ne2(_e(v$1(e2, n4)));
}
var Oe2 = function(e2, t4, n4) {
  return n4 === void 0 && (n4 = w$1), e2.theme !== n4.theme && e2.theme || t4 || n4.theme;
};
var Re2 = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g;
var De2 = /(^-|-$)/g;
function je2(e2) {
  return e2.replace(Re2, "-").replace(De2, "");
}
var Te2 = function(e2) {
  return Q3(te2(e2) >>> 0);
};
function xe(e2) {
  return typeof e2 == "string" && true;
}
var ke2 = function(e2) {
  return typeof e2 == "function" || typeof e2 == "object" && e2 !== null && !Array.isArray(e2);
};
var Ve2 = function(e2) {
  return e2 !== "__proto__" && e2 !== "constructor" && e2 !== "prototype";
};
function Be2(e2, t4, n4) {
  var r4 = e2[n4];
  ke2(t4) && ke2(r4) ? ze(r4, t4) : e2[n4] = t4;
}
function ze(e2) {
  for (var t4 = arguments.length, n4 = new Array(t4 > 1 ? t4 - 1 : 0), r4 = 1; r4 < t4; r4++)
    n4[r4 - 1] = arguments[r4];
  for (var o2 = 0, s2 = n4; o2 < s2.length; o2++) {
    var i2 = s2[o2];
    if (ke2(i2))
      for (var a2 in i2)
        Ve2(a2) && Be2(e2, i2[a2], a2);
  }
  return e2;
}
var Me2 = react.createContext();
var Ge2 = Me2.Consumer;
function Le2(e2) {
  var t4 = react.useContext(Me2), n4 = react.useMemo(function() {
    return function(e3, t5) {
      if (!e3)
        return D3(14);
      if (E3(e3)) {
        var n5 = e3(t5);
        return n5;
      }
      return Array.isArray(e3) || typeof e3 != "object" ? D3(8) : t5 ? y$1({}, t5, {}, e3) : e3;
    }(e2.theme, t4);
  }, [e2.theme, t4]);
  return e2.children ? react.createElement(Me2.Provider, {value: n4}, e2.children) : null;
}
var Fe2 = {};
function Ye2(e2, t4, n4) {
  var o2 = _(e2), i2 = !xe(e2), a2 = t4.attrs, c7 = a2 === void 0 ? S3 : a2, l4 = t4.componentId, d3 = l4 === void 0 ? function(e3, t5) {
    var n5 = typeof e3 != "string" ? "sc" : je2(e3);
    Fe2[n5] = (Fe2[n5] || 0) + 1;
    var r4 = n5 + "-" + Te2("5.3.11" + n5 + Fe2[n5]);
    return t5 ? t5 + "-" + r4 : r4;
  }(t4.displayName, t4.parentComponentId) : l4, h3 = t4.displayName, p5 = h3 === void 0 ? function(e3) {
    return xe(e3) ? "styled." + e3 : "Styled(" + b$1(e3) + ")";
  }(e2) : h3, v5 = t4.displayName && t4.componentId ? je2(t4.displayName) + "-" + t4.componentId : t4.componentId || d3, g3 = o2 && e2.attrs ? Array.prototype.concat(e2.attrs, c7).filter(Boolean) : c7, N5 = t4.shouldForwardProp;
  o2 && e2.shouldForwardProp && (N5 = t4.shouldForwardProp ? function(n5, r4, o3) {
    return e2.shouldForwardProp(n5, r4, o3) && t4.shouldForwardProp(n5, r4, o3);
  } : e2.shouldForwardProp);
  var A5, C5 = new oe2(n4, v5, o2 ? e2.componentStyle : void 0), I5 = C5.isStatic && c7.length === 0, P5 = function(e3, t5) {
    return function(e4, t6, n5, r4) {
      var o3 = e4.attrs, i3 = e4.componentStyle, a3 = e4.defaultProps, c8 = e4.foldedComponentIds, l5 = e4.shouldForwardProp, d4 = e4.styledComponentId, h4 = e4.target, p6 = function(e5, t7, n6) {
        e5 === void 0 && (e5 = w$1);
        var r5 = y$1({}, t7, {theme: e5}), o4 = {};
        return n6.forEach(function(e6) {
          var t8, n7, s2, i4 = e6;
          for (t8 in E3(i4) && (i4 = i4(r5)), i4)
            r5[t8] = o4[t8] = t8 === "className" ? (n7 = o4[t8], s2 = i4[t8], n7 && s2 ? n7 + " " + s2 : n7 || s2) : i4[t8];
        }), [r5, o4];
      }(Oe2(t6, react.useContext(Me2), a3) || w$1, t6, o3), m3 = p6[0], v6 = p6[1], g4 = function(e5, t7, n6, r5) {
        var o4 = pe2(), s2 = fe2(), i4 = t7 ? e5.generateAndInjectStyles(w$1, o4, s2) : e5.generateAndInjectStyles(n6, o4, s2);
        return i4;
      }(i3, r4, m3), S5 = n5, b3 = v6.$as || t6.$as || v6.as || t6.as || h4, _3 = xe(b3), N6 = v6 !== t6 ? y$1({}, t6, {}, v6) : t6, A6 = {};
      for (var C6 in N6)
        C6[0] !== "$" && C6 !== "as" && (C6 === "forwardedAs" ? A6.as = N6[C6] : (l5 ? l5(C6, isPropValid, b3) : !_3 || isPropValid(C6)) && (A6[C6] = N6[C6]));
      return t6.style && v6.style !== t6.style && (A6.style = y$1({}, t6.style, {}, v6.style)), A6.className = Array.prototype.concat(c8, d4, g4 !== d4 ? g4 : null, t6.className, v6.className).filter(Boolean).join(" "), A6.ref = S5, react.createElement(b3, A6);
    }(A5, e3, t5, I5);
  };
  return P5.displayName = p5, (A5 = react.forwardRef(P5)).attrs = g3, A5.componentStyle = C5, A5.displayName = p5, A5.shouldForwardProp = N5, A5.foldedComponentIds = o2 ? Array.prototype.concat(e2.foldedComponentIds, e2.styledComponentId) : S3, A5.styledComponentId = v5, A5.target = o2 ? e2.target : e2, A5.withComponent = function(e3) {
    var r4 = t4.componentId, o3 = function(e4, t5) {
      if (e4 == null)
        return {};
      var n5, r5, o4 = {}, s3 = Object.keys(e4);
      for (r5 = 0; r5 < s3.length; r5++)
        n5 = s3[r5], t5.indexOf(n5) >= 0 || (o4[n5] = e4[n5]);
      return o4;
    }(t4, ["componentId"]), s2 = r4 && r4 + "-" + (xe(e3) ? e3 : je2(b$1(e3)));
    return Ye2(e3, y$1({}, o3, {attrs: g3, componentId: s2}), n4);
  }, Object.defineProperty(A5, "defaultProps", {get: function() {
    return this._foldedDefaultProps;
  }, set: function(t5) {
    this._foldedDefaultProps = o2 ? ze({}, e2.defaultProps, t5) : t5;
  }}), Object.defineProperty(A5, "toString", {value: function() {
    return "." + A5.styledComponentId;
  }}), i2 && hoistNonReactStatics_cjs(A5, e2, {attrs: true, componentStyle: true, displayName: true, foldedComponentIds: true, shouldForwardProp: true, styledComponentId: true, target: true, withComponent: true}), A5;
}
var qe2 = function(e2) {
  return function e3(t4, r4, o2) {
    if (o2 === void 0 && (o2 = w$1), !reactIs.isValidElementType(r4))
      return D3(1, String(r4));
    var s2 = function() {
      return t4(r4, o2, Ae2.apply(void 0, arguments));
    };
    return s2.withConfig = function(n4) {
      return e3(t4, r4, y$1({}, o2, {}, n4));
    }, s2.attrs = function(n4) {
      return e3(t4, r4, y$1({}, o2, {attrs: Array.prototype.concat(o2.attrs, n4).filter(Boolean)}));
    }, s2;
  }(Ye2, e2);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e2) {
  qe2[e2] = qe2(e2);
});
var He2 = function() {
  function e2(e3, t5) {
    this.rules = e3, this.componentId = t5, this.isStatic = ne2(e3), X3.registerId(this.componentId + 1);
  }
  var t4 = e2.prototype;
  return t4.createStyles = function(e3, t5, n4, r4) {
    var o2 = r4(_e(this.rules, t5, n4, r4).join(""), ""), s2 = this.componentId + e3;
    n4.insertRules(s2, s2, o2);
  }, t4.removeStyles = function(e3, t5) {
    t5.clearRules(this.componentId + e3);
  }, t4.renderStyles = function(e3, t5, n4, r4) {
    e3 > 2 && X3.registerId(this.componentId + e3), this.removeStyles(e3, n4), this.createStyles(e3, t5, n4, r4);
  }, e2;
}();
function $e2(e2) {
  for (var t4 = arguments.length, n4 = new Array(t4 > 1 ? t4 - 1 : 0), o2 = 1; o2 < t4; o2++)
    n4[o2 - 1] = arguments[o2];
  var i2 = Ae2.apply(void 0, [e2].concat(n4)), a2 = "sc-global-" + Te2(JSON.stringify(i2)), u3 = new He2(i2, a2);
  function d3(e3) {
    var t5 = pe2(), n5 = fe2(), o3 = react.useContext(Me2), d4 = react.useRef(t5.allocateGSInstance(a2)).current;
    return t5.server && h3(d4, e3, t5, o3, n5), react.useLayoutEffect(function() {
      if (!t5.server)
        return h3(d4, e3, t5, o3, n5), function() {
          return u3.removeStyles(d4, t5);
        };
    }, [d4, e3, t5, o3, n5]), null;
  }
  function h3(e3, t5, n5, r4, o3) {
    if (u3.isStatic)
      u3.renderStyles(e3, P3, n5, o3);
    else {
      var s2 = y$1({}, t5, {theme: Oe2(t5, r4, d3.defaultProps)});
      u3.renderStyles(e3, s2, n5, o3);
    }
  }
  return react.memo(d3);
}
var styled_components_default = qe2;

// build/_snowpack/pkg/react-spring.js
var updateQueue = makeQueue();
var raf = (fn) => schedule(fn, updateQueue);
var writeQueue = makeQueue();
raf.write = (fn) => schedule(fn, writeQueue);
var onStartQueue = makeQueue();
raf.onStart = (fn) => schedule(fn, onStartQueue);
var onFrameQueue = makeQueue();
raf.onFrame = (fn) => schedule(fn, onFrameQueue);
var onFinishQueue = makeQueue();
raf.onFinish = (fn) => schedule(fn, onFinishQueue);
var timeouts = [];
raf.setTimeout = (handler, ms) => {
  const time = raf.now() + ms;
  const cancel = () => {
    const i2 = timeouts.findIndex((t4) => t4.cancel == cancel);
    if (~i2)
      timeouts.splice(i2, 1);
    pendingCount -= ~i2 ? 1 : 0;
  };
  const timeout = {time, handler, cancel};
  timeouts.splice(findTimeout(time), 0, timeout);
  pendingCount += 1;
  start();
  return timeout;
};
var findTimeout = (time) => ~(~timeouts.findIndex((t4) => t4.time > time) || ~timeouts.length);
raf.cancel = (fn) => {
  onStartQueue.delete(fn);
  onFrameQueue.delete(fn);
  onFinishQueue.delete(fn);
  updateQueue.delete(fn);
  writeQueue.delete(fn);
};
raf.sync = (fn) => {
  sync = true;
  raf.batchedUpdates(fn);
  sync = false;
};
raf.throttle = (fn) => {
  let lastArgs;
  function queuedFn() {
    try {
      fn(...lastArgs);
    } finally {
      lastArgs = null;
    }
  }
  function throttled(...args) {
    lastArgs = args;
    raf.onStart(queuedFn);
  }
  throttled.handler = fn;
  throttled.cancel = () => {
    onStartQueue.delete(queuedFn);
    lastArgs = null;
  };
  return throttled;
};
var nativeRaf = typeof window != "undefined" ? window.requestAnimationFrame : () => {
};
raf.use = (impl) => nativeRaf = impl;
raf.now = typeof performance != "undefined" ? () => performance.now() : Date.now;
raf.batchedUpdates = (fn) => fn();
raf.catch = console.error;
raf.frameLoop = "always";
raf.advance = () => {
  if (raf.frameLoop !== "demand") {
    console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand");
  } else {
    update();
  }
};
var ts = -1;
var pendingCount = 0;
var sync = false;
function schedule(fn, queue2) {
  if (sync) {
    queue2.delete(fn);
    fn(0);
  } else {
    queue2.add(fn);
    start();
  }
}
function start() {
  if (ts < 0) {
    ts = 0;
    if (raf.frameLoop !== "demand") {
      nativeRaf(loop);
    }
  }
}
function stop() {
  ts = -1;
}
function loop() {
  if (~ts) {
    nativeRaf(loop);
    raf.batchedUpdates(update);
  }
}
function update() {
  const prevTs = ts;
  ts = raf.now();
  const count = findTimeout(ts);
  if (count) {
    eachSafely(timeouts.splice(0, count), (t4) => t4.handler());
    pendingCount -= count;
  }
  if (!pendingCount) {
    stop();
    return;
  }
  onStartQueue.flush();
  updateQueue.flush(prevTs ? Math.min(64, ts - prevTs) : 16.667);
  onFrameQueue.flush();
  writeQueue.flush();
  onFinishQueue.flush();
}
function makeQueue() {
  let next = /* @__PURE__ */ new Set();
  let current = next;
  return {
    add(fn) {
      pendingCount += current == next && !next.has(fn) ? 1 : 0;
      next.add(fn);
    },
    delete(fn) {
      pendingCount -= current == next && next.has(fn) ? 1 : 0;
      return next.delete(fn);
    },
    flush(arg) {
      if (current.size) {
        next = /* @__PURE__ */ new Set();
        pendingCount -= current.size;
        eachSafely(current, (fn) => fn(arg) && next.add(fn));
        pendingCount += next.size;
        current = next;
      }
    }
  };
}
function eachSafely(values, each2) {
  values.forEach((value) => {
    try {
      each2(value);
    } catch (e2) {
      raf.catch(e2);
    }
  });
}
var __defProp2 = Object.defineProperty;
var __export2 = (target, all) => {
  for (var name in all)
    __defProp2(target, name, {get: all[name], enumerable: true});
};
var globals_exports = {};
__export2(globals_exports, {
  assign: () => assign,
  colors: () => colors,
  createStringInterpolator: () => createStringInterpolator,
  skipAnimation: () => skipAnimation,
  to: () => to,
  willAdvance: () => willAdvance
});
function noop2() {
}
var defineHidden = (obj, key, value) => Object.defineProperty(obj, key, {value, writable: true, configurable: true});
var is = {
  arr: Array.isArray,
  obj: (a2) => !!a2 && a2.constructor.name === "Object",
  fun: (a2) => typeof a2 === "function",
  str: (a2) => typeof a2 === "string",
  num: (a2) => typeof a2 === "number",
  und: (a2) => a2 === void 0
};
function isEqual(a2, b3) {
  if (is.arr(a2)) {
    if (!is.arr(b3) || a2.length !== b3.length)
      return false;
    for (let i2 = 0; i2 < a2.length; i2++) {
      if (a2[i2] !== b3[i2])
        return false;
    }
    return true;
  }
  return a2 === b3;
}
var each = (obj, fn) => obj.forEach(fn);
function eachProp(obj, fn, ctx2) {
  if (is.arr(obj)) {
    for (let i2 = 0; i2 < obj.length; i2++) {
      fn.call(ctx2, obj[i2], `${i2}`);
    }
    return;
  }
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      fn.call(ctx2, obj[key], key);
    }
  }
}
var toArray = (a2) => is.und(a2) ? [] : is.arr(a2) ? a2 : [a2];
function flush(queue2, iterator) {
  if (queue2.size) {
    const items = Array.from(queue2);
    queue2.clear();
    each(items, iterator);
  }
}
var flushCalls = (queue2, ...args) => flush(queue2, (fn) => fn(...args));
var isSSR = () => typeof window === "undefined" || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent);
var createStringInterpolator;
var to;
var colors = null;
var skipAnimation = false;
var willAdvance = noop2;
var assign = (globals) => {
  if (globals.to)
    to = globals.to;
  if (globals.now)
    raf.now = globals.now;
  if (globals.colors !== void 0)
    colors = globals.colors;
  if (globals.skipAnimation != null)
    skipAnimation = globals.skipAnimation;
  if (globals.createStringInterpolator)
    createStringInterpolator = globals.createStringInterpolator;
  if (globals.requestAnimationFrame)
    raf.use(globals.requestAnimationFrame);
  if (globals.batchedUpdates)
    raf.batchedUpdates = globals.batchedUpdates;
  if (globals.willAdvance)
    willAdvance = globals.willAdvance;
  if (globals.frameLoop)
    raf.frameLoop = globals.frameLoop;
};
var startQueue = /* @__PURE__ */ new Set();
var currentFrame = [];
var prevFrame = [];
var priority = 0;
var frameLoop = {
  get idle() {
    return !startQueue.size && !currentFrame.length;
  },
  start(animation) {
    if (priority > animation.priority) {
      startQueue.add(animation);
      raf.onStart(flushStartQueue);
    } else {
      startSafely(animation);
      raf(advance);
    }
  },
  advance,
  sort(animation) {
    if (priority) {
      raf.onFrame(() => frameLoop.sort(animation));
    } else {
      const prevIndex = currentFrame.indexOf(animation);
      if (~prevIndex) {
        currentFrame.splice(prevIndex, 1);
        startUnsafely(animation);
      }
    }
  },
  clear() {
    currentFrame = [];
    startQueue.clear();
  }
};
function flushStartQueue() {
  startQueue.forEach(startSafely);
  startQueue.clear();
  raf(advance);
}
function startSafely(animation) {
  if (!currentFrame.includes(animation))
    startUnsafely(animation);
}
function startUnsafely(animation) {
  currentFrame.splice(findIndex(currentFrame, (other) => other.priority > animation.priority), 0, animation);
}
function advance(dt) {
  const nextFrame = prevFrame;
  for (let i2 = 0; i2 < currentFrame.length; i2++) {
    const animation = currentFrame[i2];
    priority = animation.priority;
    if (!animation.idle) {
      willAdvance(animation);
      animation.advance(dt);
      if (!animation.idle) {
        nextFrame.push(animation);
      }
    }
  }
  priority = 0;
  prevFrame = currentFrame;
  prevFrame.length = 0;
  currentFrame = nextFrame;
  return currentFrame.length > 0;
}
function findIndex(arr, test) {
  const index = arr.findIndex(test);
  return index < 0 ? arr.length : index;
}
var clamp = (min, max, v5) => Math.min(Math.max(v5, min), max);
var colors2 = {
  transparent: 0,
  aliceblue: 4042850303,
  antiquewhite: 4209760255,
  aqua: 16777215,
  aquamarine: 2147472639,
  azure: 4043309055,
  beige: 4126530815,
  bisque: 4293182719,
  black: 255,
  blanchedalmond: 4293643775,
  blue: 65535,
  blueviolet: 2318131967,
  brown: 2771004159,
  burlywood: 3736635391,
  burntsienna: 3934150143,
  cadetblue: 1604231423,
  chartreuse: 2147418367,
  chocolate: 3530104575,
  coral: 4286533887,
  cornflowerblue: 1687547391,
  cornsilk: 4294499583,
  crimson: 3692313855,
  cyan: 16777215,
  darkblue: 35839,
  darkcyan: 9145343,
  darkgoldenrod: 3095792639,
  darkgray: 2846468607,
  darkgreen: 6553855,
  darkgrey: 2846468607,
  darkkhaki: 3182914559,
  darkmagenta: 2332068863,
  darkolivegreen: 1433087999,
  darkorange: 4287365375,
  darkorchid: 2570243327,
  darkred: 2332033279,
  darksalmon: 3918953215,
  darkseagreen: 2411499519,
  darkslateblue: 1211993087,
  darkslategray: 793726975,
  darkslategrey: 793726975,
  darkturquoise: 13554175,
  darkviolet: 2483082239,
  deeppink: 4279538687,
  deepskyblue: 12582911,
  dimgray: 1768516095,
  dimgrey: 1768516095,
  dodgerblue: 512819199,
  firebrick: 2988581631,
  floralwhite: 4294635775,
  forestgreen: 579543807,
  fuchsia: 4278255615,
  gainsboro: 3705462015,
  ghostwhite: 4177068031,
  gold: 4292280575,
  goldenrod: 3668254975,
  gray: 2155905279,
  green: 8388863,
  greenyellow: 2919182335,
  grey: 2155905279,
  honeydew: 4043305215,
  hotpink: 4285117695,
  indianred: 3445382399,
  indigo: 1258324735,
  ivory: 4294963455,
  khaki: 4041641215,
  lavender: 3873897215,
  lavenderblush: 4293981695,
  lawngreen: 2096890111,
  lemonchiffon: 4294626815,
  lightblue: 2916673279,
  lightcoral: 4034953471,
  lightcyan: 3774873599,
  lightgoldenrodyellow: 4210742015,
  lightgray: 3553874943,
  lightgreen: 2431553791,
  lightgrey: 3553874943,
  lightpink: 4290167295,
  lightsalmon: 4288707327,
  lightseagreen: 548580095,
  lightskyblue: 2278488831,
  lightslategray: 2005441023,
  lightslategrey: 2005441023,
  lightsteelblue: 2965692159,
  lightyellow: 4294959359,
  lime: 16711935,
  limegreen: 852308735,
  linen: 4210091775,
  magenta: 4278255615,
  maroon: 2147483903,
  mediumaquamarine: 1724754687,
  mediumblue: 52735,
  mediumorchid: 3126187007,
  mediumpurple: 2473647103,
  mediumseagreen: 1018393087,
  mediumslateblue: 2070474495,
  mediumspringgreen: 16423679,
  mediumturquoise: 1221709055,
  mediumvioletred: 3340076543,
  midnightblue: 421097727,
  mintcream: 4127193855,
  mistyrose: 4293190143,
  moccasin: 4293178879,
  navajowhite: 4292783615,
  navy: 33023,
  oldlace: 4260751103,
  olive: 2155872511,
  olivedrab: 1804477439,
  orange: 4289003775,
  orangered: 4282712319,
  orchid: 3664828159,
  palegoldenrod: 4008225535,
  palegreen: 2566625535,
  paleturquoise: 2951671551,
  palevioletred: 3681588223,
  papayawhip: 4293907967,
  peachpuff: 4292524543,
  peru: 3448061951,
  pink: 4290825215,
  plum: 3718307327,
  powderblue: 2967529215,
  purple: 2147516671,
  rebeccapurple: 1714657791,
  red: 4278190335,
  rosybrown: 3163525119,
  royalblue: 1097458175,
  saddlebrown: 2336560127,
  salmon: 4202722047,
  sandybrown: 4104413439,
  seagreen: 780883967,
  seashell: 4294307583,
  sienna: 2689740287,
  silver: 3233857791,
  skyblue: 2278484991,
  slateblue: 1784335871,
  slategray: 1887473919,
  slategrey: 1887473919,
  snow: 4294638335,
  springgreen: 16744447,
  steelblue: 1182971135,
  tan: 3535047935,
  teal: 8421631,
  thistle: 3636451583,
  tomato: 4284696575,
  turquoise: 1088475391,
  violet: 4001558271,
  wheat: 4125012991,
  white: 4294967295,
  whitesmoke: 4126537215,
  yellow: 4294902015,
  yellowgreen: 2597139199
};
var NUMBER = "[-+]?\\d*\\.?\\d+";
var PERCENTAGE = NUMBER + "%";
function call(...parts) {
  return "\\(\\s*(" + parts.join(")\\s*,\\s*(") + ")\\s*\\)";
}
var rgb = new RegExp("rgb" + call(NUMBER, NUMBER, NUMBER));
var rgba = new RegExp("rgba" + call(NUMBER, NUMBER, NUMBER, NUMBER));
var hsl = new RegExp("hsl" + call(NUMBER, PERCENTAGE, PERCENTAGE));
var hsla = new RegExp("hsla" + call(NUMBER, PERCENTAGE, PERCENTAGE, NUMBER));
var hex3 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
var hex4 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
var hex6 = /^#([0-9a-fA-F]{6})$/;
var hex8 = /^#([0-9a-fA-F]{8})$/;
function normalizeColor(color) {
  let match;
  if (typeof color === "number") {
    return color >>> 0 === color && color >= 0 && color <= 4294967295 ? color : null;
  }
  if (match = hex6.exec(color))
    return parseInt(match[1] + "ff", 16) >>> 0;
  if (colors && colors[color] !== void 0) {
    return colors[color];
  }
  if (match = rgb.exec(color)) {
    return (parse255(match[1]) << 24 | parse255(match[2]) << 16 | parse255(match[3]) << 8 | 255) >>> 0;
  }
  if (match = rgba.exec(color)) {
    return (parse255(match[1]) << 24 | parse255(match[2]) << 16 | parse255(match[3]) << 8 | parse1(match[4])) >>> 0;
  }
  if (match = hex3.exec(color)) {
    return parseInt(match[1] + match[1] + match[2] + match[2] + match[3] + match[3] + "ff", 16) >>> 0;
  }
  if (match = hex8.exec(color))
    return parseInt(match[1], 16) >>> 0;
  if (match = hex4.exec(color)) {
    return parseInt(match[1] + match[1] + match[2] + match[2] + match[3] + match[3] + match[4] + match[4], 16) >>> 0;
  }
  if (match = hsl.exec(color)) {
    return (hslToRgb(parse360(match[1]), parsePercentage(match[2]), parsePercentage(match[3])) | 255) >>> 0;
  }
  if (match = hsla.exec(color)) {
    return (hslToRgb(parse360(match[1]), parsePercentage(match[2]), parsePercentage(match[3])) | parse1(match[4])) >>> 0;
  }
  return null;
}
function hue2rgb(p5, q4, t4) {
  if (t4 < 0)
    t4 += 1;
  if (t4 > 1)
    t4 -= 1;
  if (t4 < 1 / 6)
    return p5 + (q4 - p5) * 6 * t4;
  if (t4 < 1 / 2)
    return q4;
  if (t4 < 2 / 3)
    return p5 + (q4 - p5) * (2 / 3 - t4) * 6;
  return p5;
}
function hslToRgb(h3, s2, l4) {
  const q4 = l4 < 0.5 ? l4 * (1 + s2) : l4 + s2 - l4 * s2;
  const p5 = 2 * l4 - q4;
  const r4 = hue2rgb(p5, q4, h3 + 1 / 3);
  const g3 = hue2rgb(p5, q4, h3);
  const b3 = hue2rgb(p5, q4, h3 - 1 / 3);
  return Math.round(r4 * 255) << 24 | Math.round(g3 * 255) << 16 | Math.round(b3 * 255) << 8;
}
function parse255(str) {
  const int = parseInt(str, 10);
  if (int < 0)
    return 0;
  if (int > 255)
    return 255;
  return int;
}
function parse360(str) {
  const int = parseFloat(str);
  return (int % 360 + 360) % 360 / 360;
}
function parse1(str) {
  const num = parseFloat(str);
  if (num < 0)
    return 0;
  if (num > 1)
    return 255;
  return Math.round(num * 255);
}
function parsePercentage(str) {
  const int = parseFloat(str);
  if (int < 0)
    return 0;
  if (int > 100)
    return 1;
  return int / 100;
}
function colorToRgba(input) {
  let int32Color = normalizeColor(input);
  if (int32Color === null)
    return input;
  int32Color = int32Color || 0;
  const r4 = (int32Color & 4278190080) >>> 24;
  const g3 = (int32Color & 16711680) >>> 16;
  const b3 = (int32Color & 65280) >>> 8;
  const a2 = (int32Color & 255) / 255;
  return `rgba(${r4}, ${g3}, ${b3}, ${a2})`;
}
var createInterpolator = (range, output, extrapolate) => {
  if (is.fun(range)) {
    return range;
  }
  if (is.arr(range)) {
    return createInterpolator({
      range,
      output,
      extrapolate
    });
  }
  if (is.str(range.output[0])) {
    return createStringInterpolator(range);
  }
  const config3 = range;
  const outputRange = config3.output;
  const inputRange = config3.range || [0, 1];
  const extrapolateLeft = config3.extrapolateLeft || config3.extrapolate || "extend";
  const extrapolateRight = config3.extrapolateRight || config3.extrapolate || "extend";
  const easing = config3.easing || ((t4) => t4);
  return (input) => {
    const range2 = findRange(input, inputRange);
    return interpolate(input, inputRange[range2], inputRange[range2 + 1], outputRange[range2], outputRange[range2 + 1], easing, extrapolateLeft, extrapolateRight, config3.map);
  };
};
function interpolate(input, inputMin, inputMax, outputMin, outputMax, easing, extrapolateLeft, extrapolateRight, map) {
  let result = map ? map(input) : input;
  if (result < inputMin) {
    if (extrapolateLeft === "identity")
      return result;
    else if (extrapolateLeft === "clamp")
      result = inputMin;
  }
  if (result > inputMax) {
    if (extrapolateRight === "identity")
      return result;
    else if (extrapolateRight === "clamp")
      result = inputMax;
  }
  if (outputMin === outputMax)
    return outputMin;
  if (inputMin === inputMax)
    return input <= inputMin ? outputMin : outputMax;
  if (inputMin === -Infinity)
    result = -result;
  else if (inputMax === Infinity)
    result = result - inputMin;
  else
    result = (result - inputMin) / (inputMax - inputMin);
  result = easing(result);
  if (outputMin === -Infinity)
    result = -result;
  else if (outputMax === Infinity)
    result = result + outputMin;
  else
    result = result * (outputMax - outputMin) + outputMin;
  return result;
}
function findRange(input, inputRange) {
  for (var i2 = 1; i2 < inputRange.length - 1; ++i2)
    if (inputRange[i2] >= input)
      break;
  return i2 - 1;
}
var steps = (steps2, direction = "end") => (progress2) => {
  progress2 = direction === "end" ? Math.min(progress2, 0.999) : Math.max(progress2, 1e-3);
  const expanded = progress2 * steps2;
  const rounded = direction === "end" ? Math.floor(expanded) : Math.ceil(expanded);
  return clamp(0, 1, rounded / steps2);
};
var c1 = 1.70158;
var c2 = c1 * 1.525;
var c3 = c1 + 1;
var c4 = 2 * Math.PI / 3;
var c5 = 2 * Math.PI / 4.5;
var bounceOut = (x4) => {
  const n1 = 7.5625;
  const d1 = 2.75;
  if (x4 < 1 / d1) {
    return n1 * x4 * x4;
  } else if (x4 < 2 / d1) {
    return n1 * (x4 -= 1.5 / d1) * x4 + 0.75;
  } else if (x4 < 2.5 / d1) {
    return n1 * (x4 -= 2.25 / d1) * x4 + 0.9375;
  } else {
    return n1 * (x4 -= 2.625 / d1) * x4 + 0.984375;
  }
};
var easings = {
  linear: (x4) => x4,
  easeInQuad: (x4) => x4 * x4,
  easeOutQuad: (x4) => 1 - (1 - x4) * (1 - x4),
  easeInOutQuad: (x4) => x4 < 0.5 ? 2 * x4 * x4 : 1 - Math.pow(-2 * x4 + 2, 2) / 2,
  easeInCubic: (x4) => x4 * x4 * x4,
  easeOutCubic: (x4) => 1 - Math.pow(1 - x4, 3),
  easeInOutCubic: (x4) => x4 < 0.5 ? 4 * x4 * x4 * x4 : 1 - Math.pow(-2 * x4 + 2, 3) / 2,
  easeInQuart: (x4) => x4 * x4 * x4 * x4,
  easeOutQuart: (x4) => 1 - Math.pow(1 - x4, 4),
  easeInOutQuart: (x4) => x4 < 0.5 ? 8 * x4 * x4 * x4 * x4 : 1 - Math.pow(-2 * x4 + 2, 4) / 2,
  easeInQuint: (x4) => x4 * x4 * x4 * x4 * x4,
  easeOutQuint: (x4) => 1 - Math.pow(1 - x4, 5),
  easeInOutQuint: (x4) => x4 < 0.5 ? 16 * x4 * x4 * x4 * x4 * x4 : 1 - Math.pow(-2 * x4 + 2, 5) / 2,
  easeInSine: (x4) => 1 - Math.cos(x4 * Math.PI / 2),
  easeOutSine: (x4) => Math.sin(x4 * Math.PI / 2),
  easeInOutSine: (x4) => -(Math.cos(Math.PI * x4) - 1) / 2,
  easeInExpo: (x4) => x4 === 0 ? 0 : Math.pow(2, 10 * x4 - 10),
  easeOutExpo: (x4) => x4 === 1 ? 1 : 1 - Math.pow(2, -10 * x4),
  easeInOutExpo: (x4) => x4 === 0 ? 0 : x4 === 1 ? 1 : x4 < 0.5 ? Math.pow(2, 20 * x4 - 10) / 2 : (2 - Math.pow(2, -20 * x4 + 10)) / 2,
  easeInCirc: (x4) => 1 - Math.sqrt(1 - Math.pow(x4, 2)),
  easeOutCirc: (x4) => Math.sqrt(1 - Math.pow(x4 - 1, 2)),
  easeInOutCirc: (x4) => x4 < 0.5 ? (1 - Math.sqrt(1 - Math.pow(2 * x4, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * x4 + 2, 2)) + 1) / 2,
  easeInBack: (x4) => c3 * x4 * x4 * x4 - c1 * x4 * x4,
  easeOutBack: (x4) => 1 + c3 * Math.pow(x4 - 1, 3) + c1 * Math.pow(x4 - 1, 2),
  easeInOutBack: (x4) => x4 < 0.5 ? Math.pow(2 * x4, 2) * ((c2 + 1) * 2 * x4 - c2) / 2 : (Math.pow(2 * x4 - 2, 2) * ((c2 + 1) * (x4 * 2 - 2) + c2) + 2) / 2,
  easeInElastic: (x4) => x4 === 0 ? 0 : x4 === 1 ? 1 : -Math.pow(2, 10 * x4 - 10) * Math.sin((x4 * 10 - 10.75) * c4),
  easeOutElastic: (x4) => x4 === 0 ? 0 : x4 === 1 ? 1 : Math.pow(2, -10 * x4) * Math.sin((x4 * 10 - 0.75) * c4) + 1,
  easeInOutElastic: (x4) => x4 === 0 ? 0 : x4 === 1 ? 1 : x4 < 0.5 ? -(Math.pow(2, 20 * x4 - 10) * Math.sin((20 * x4 - 11.125) * c5)) / 2 : Math.pow(2, -20 * x4 + 10) * Math.sin((20 * x4 - 11.125) * c5) / 2 + 1,
  easeInBounce: (x4) => 1 - bounceOut(1 - x4),
  easeOutBounce: bounceOut,
  easeInOutBounce: (x4) => x4 < 0.5 ? (1 - bounceOut(1 - 2 * x4)) / 2 : (1 + bounceOut(2 * x4 - 1)) / 2,
  steps
};
var $get = Symbol.for("FluidValue.get");
var $observers = Symbol.for("FluidValue.observers");
var hasFluidValue = (arg) => Boolean(arg && arg[$get]);
var getFluidValue = (arg) => arg && arg[$get] ? arg[$get]() : arg;
var getFluidObservers = (target) => target[$observers] || null;
function callFluidObserver(observer2, event) {
  if (observer2.eventObserved) {
    observer2.eventObserved(event);
  } else {
    observer2(event);
  }
}
function callFluidObservers(target, event) {
  const observers = target[$observers];
  if (observers) {
    observers.forEach((observer2) => {
      callFluidObserver(observer2, event);
    });
  }
}
var FluidValue = class {
  constructor(get) {
    if (!get && !(get = this.get)) {
      throw Error("Unknown getter");
    }
    setFluidGetter(this, get);
  }
};
var setFluidGetter = (target, get) => setHidden(target, $get, get);
function addFluidObserver(target, observer2) {
  if (target[$get]) {
    let observers = target[$observers];
    if (!observers) {
      setHidden(target, $observers, observers = /* @__PURE__ */ new Set());
    }
    if (!observers.has(observer2)) {
      observers.add(observer2);
      if (target.observerAdded) {
        target.observerAdded(observers.size, observer2);
      }
    }
  }
  return observer2;
}
function removeFluidObserver(target, observer2) {
  const observers = target[$observers];
  if (observers && observers.has(observer2)) {
    const count = observers.size - 1;
    if (count) {
      observers.delete(observer2);
    } else {
      target[$observers] = null;
    }
    if (target.observerRemoved) {
      target.observerRemoved(count, observer2);
    }
  }
}
var setHidden = (target, key, value) => Object.defineProperty(target, key, {
  value,
  writable: true,
  configurable: true
});
var numberRegex = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
var colorRegex = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi;
var unitRegex = new RegExp(`(${numberRegex.source})(%|[a-z]+)`, "i");
var rgbaRegex = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi;
var cssVariableRegex = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
var variableToRgba = (input) => {
  const [token, fallback] = parseCSSVariable(input);
  if (!token || isSSR()) {
    return input;
  }
  const value = window.getComputedStyle(document.documentElement).getPropertyValue(token);
  if (value) {
    return value.trim();
  } else if (fallback && fallback.startsWith("--")) {
    const value2 = window.getComputedStyle(document.documentElement).getPropertyValue(fallback);
    if (value2) {
      return value2;
    } else {
      return input;
    }
  } else if (fallback && cssVariableRegex.test(fallback)) {
    return variableToRgba(fallback);
  } else if (fallback) {
    return fallback;
  }
  return input;
};
var parseCSSVariable = (current) => {
  const match = cssVariableRegex.exec(current);
  if (!match)
    return [,];
  const [, token, fallback] = match;
  return [token, fallback];
};
var namedColorRegex;
var rgbaRound = (_3, p1, p22, p32, p42) => `rgba(${Math.round(p1)}, ${Math.round(p22)}, ${Math.round(p32)}, ${p42})`;
var createStringInterpolator2 = (config3) => {
  if (!namedColorRegex)
    namedColorRegex = colors ? new RegExp(`(${Object.keys(colors).join("|")})(?!\\w)`, "g") : /^\b$/;
  const output = config3.output.map((value) => {
    return getFluidValue(value).replace(cssVariableRegex, variableToRgba).replace(colorRegex, colorToRgba).replace(namedColorRegex, colorToRgba);
  });
  const keyframes = output.map((value) => value.match(numberRegex).map(Number));
  const outputRanges = keyframes[0].map((_3, i2) => keyframes.map((values) => {
    if (!(i2 in values)) {
      throw Error('The arity of each "output" value must be equal');
    }
    return values[i2];
  }));
  const interpolators = outputRanges.map((output2) => createInterpolator({...config3, output: output2}));
  return (input) => {
    const missingUnit = !unitRegex.test(output[0]) && output.find((value) => unitRegex.test(value))?.replace(numberRegex, "");
    let i2 = 0;
    return output[0].replace(numberRegex, () => `${interpolators[i2++](input)}${missingUnit || ""}`).replace(rgbaRegex, rgbaRound);
  };
};
var prefix = "react-spring: ";
var once2 = (fn) => {
  const func = fn;
  let called = false;
  if (typeof func != "function") {
    throw new TypeError(`${prefix}once requires a function parameter`);
  }
  return (...args) => {
    if (!called) {
      func(...args);
      called = true;
    }
  };
};
var warnInterpolate = once2(console.warn);
function deprecateInterpolate() {
  warnInterpolate(`${prefix}The "interpolate" function is deprecated in v9 (use "to" instead)`);
}
var warnDirectCall = once2(console.warn);
function deprecateDirectCall() {
  warnDirectCall(`${prefix}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
}
function isAnimatedString(value) {
  return is.str(value) && (value[0] == "#" || /\d/.test(value) || !isSSR() && cssVariableRegex.test(value) || value in (colors || {}));
}
var useIsomorphicLayoutEffect2 = isSSR() ? react.useEffect : react.useLayoutEffect;
var useIsMounted = () => {
  const isMounted = react.useRef(false);
  useIsomorphicLayoutEffect2(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);
  return isMounted;
};
function useForceUpdate() {
  const update2 = react.useState()[1];
  const isMounted = useIsMounted();
  return () => {
    if (isMounted.current) {
      update2(Math.random());
    }
  };
}
function useMemoOne(getResult, inputs) {
  const [initial] = react.useState(() => ({
    inputs,
    result: getResult()
  }));
  const committed = react.useRef();
  const prevCache = committed.current;
  let cache = prevCache;
  if (cache) {
    const useCache = Boolean(inputs && cache.inputs && areInputsEqual(inputs, cache.inputs));
    if (!useCache) {
      cache = {
        inputs,
        result: getResult()
      };
    }
  } else {
    cache = initial;
  }
  react.useEffect(() => {
    committed.current = cache;
    if (prevCache == initial) {
      initial.inputs = initial.result = void 0;
    }
  }, [cache]);
  return cache.result;
}
function areInputsEqual(next, prev) {
  if (next.length !== prev.length) {
    return false;
  }
  for (let i2 = 0; i2 < next.length; i2++) {
    if (next[i2] !== prev[i2]) {
      return false;
    }
  }
  return true;
}
var useOnce = (effect) => react.useEffect(effect, emptyDeps);
var emptyDeps = [];
function usePrev(value) {
  const prevRef = react.useRef();
  react.useEffect(() => {
    prevRef.current = value;
  });
  return prevRef.current;
}
var $node = Symbol.for("Animated:node");
var isAnimated = (value) => !!value && value[$node] === value;
var getAnimated = (owner) => owner && owner[$node];
var setAnimated = (owner, node) => defineHidden(owner, $node, node);
var getPayload = (owner) => owner && owner[$node] && owner[$node].getPayload();
var Animated = class {
  constructor() {
    setAnimated(this, this);
  }
  getPayload() {
    return this.payload || [];
  }
};
var AnimatedValue = class extends Animated {
  constructor(_value) {
    super();
    this._value = _value;
    this.done = true;
    this.durationProgress = 0;
    if (is.num(this._value)) {
      this.lastPosition = this._value;
    }
  }
  static create(value) {
    return new AnimatedValue(value);
  }
  getPayload() {
    return [this];
  }
  getValue() {
    return this._value;
  }
  setValue(value, step) {
    if (is.num(value)) {
      this.lastPosition = value;
      if (step) {
        value = Math.round(value / step) * step;
        if (this.done) {
          this.lastPosition = value;
        }
      }
    }
    if (this._value === value) {
      return false;
    }
    this._value = value;
    return true;
  }
  reset() {
    const {done} = this;
    this.done = false;
    if (is.num(this._value)) {
      this.elapsedTime = 0;
      this.durationProgress = 0;
      this.lastPosition = this._value;
      if (done)
        this.lastVelocity = null;
      this.v0 = null;
    }
  }
};
var AnimatedString = class extends AnimatedValue {
  constructor(value) {
    super(0);
    this._string = null;
    this._toString = createInterpolator({
      output: [value, value]
    });
  }
  static create(value) {
    return new AnimatedString(value);
  }
  getValue() {
    const value = this._string;
    return value == null ? this._string = this._toString(this._value) : value;
  }
  setValue(value) {
    if (is.str(value)) {
      if (value == this._string) {
        return false;
      }
      this._string = value;
      this._value = 1;
    } else if (super.setValue(value)) {
      this._string = null;
    } else {
      return false;
    }
    return true;
  }
  reset(goal) {
    if (goal) {
      this._toString = createInterpolator({
        output: [this.getValue(), goal]
      });
    }
    this._value = 0;
    super.reset();
  }
};
var TreeContext = {dependencies: null};
var AnimatedObject = class extends Animated {
  constructor(source) {
    super();
    this.source = source;
    this.setValue(source);
  }
  getValue(animated2) {
    const values = {};
    eachProp(this.source, (source, key) => {
      if (isAnimated(source)) {
        values[key] = source.getValue(animated2);
      } else if (hasFluidValue(source)) {
        values[key] = getFluidValue(source);
      } else if (!animated2) {
        values[key] = source;
      }
    });
    return values;
  }
  setValue(source) {
    this.source = source;
    this.payload = this._makePayload(source);
  }
  reset() {
    if (this.payload) {
      each(this.payload, (node) => node.reset());
    }
  }
  _makePayload(source) {
    if (source) {
      const payload = /* @__PURE__ */ new Set();
      eachProp(source, this._addToPayload, payload);
      return Array.from(payload);
    }
  }
  _addToPayload(source) {
    if (TreeContext.dependencies && hasFluidValue(source)) {
      TreeContext.dependencies.add(source);
    }
    const payload = getPayload(source);
    if (payload) {
      each(payload, (node) => this.add(node));
    }
  }
};
var AnimatedArray = class extends AnimatedObject {
  constructor(source) {
    super(source);
  }
  static create(source) {
    return new AnimatedArray(source);
  }
  getValue() {
    return this.source.map((node) => node.getValue());
  }
  setValue(source) {
    const payload = this.getPayload();
    if (source.length == payload.length) {
      return payload.map((node, i2) => node.setValue(source[i2])).some(Boolean);
    }
    super.setValue(source.map(makeAnimated));
    return true;
  }
};
function makeAnimated(value) {
  const nodeType = isAnimatedString(value) ? AnimatedString : AnimatedValue;
  return nodeType.create(value);
}
function getAnimatedType(value) {
  const parentNode = getAnimated(value);
  return parentNode ? parentNode.constructor : is.arr(value) ? AnimatedArray : isAnimatedString(value) ? AnimatedString : AnimatedValue;
}
var withAnimated = (Component2, host2) => {
  const hasInstance = !is.fun(Component2) || Component2.prototype && Component2.prototype.isReactComponent;
  return react.forwardRef((givenProps, givenRef) => {
    const instanceRef = react.useRef(null);
    const ref = hasInstance && react.useCallback((value) => {
      instanceRef.current = updateRef(givenRef, value);
    }, [givenRef]);
    const [props, deps] = getAnimatedState(givenProps, host2);
    const forceUpdate = useForceUpdate();
    const callback = () => {
      const instance = instanceRef.current;
      if (hasInstance && !instance) {
        return;
      }
      const didUpdate = instance ? host2.applyAnimatedValues(instance, props.getValue(true)) : false;
      if (didUpdate === false) {
        forceUpdate();
      }
    };
    const observer = new PropsObserver(callback, deps);
    const observerRef = react.useRef();
    useIsomorphicLayoutEffect2(() => {
      observerRef.current = observer;
      each(deps, (dep) => addFluidObserver(dep, observer));
      return () => {
        if (observerRef.current) {
          each(observerRef.current.deps, (dep) => removeFluidObserver(dep, observerRef.current));
          raf.cancel(observerRef.current.update);
        }
      };
    });
    react.useEffect(callback, []);
    useOnce(() => () => {
      const observer2 = observerRef.current;
      each(observer2.deps, (dep) => removeFluidObserver(dep, observer2));
    });
    const usedProps = host2.getComponentProps(props.getValue());
    return /* @__PURE__ */ react.createElement(Component2, {...usedProps, ref});
  });
};
var PropsObserver = class {
  constructor(update2, deps) {
    this.update = update2;
    this.deps = deps;
  }
  eventObserved(event) {
    if (event.type == "change") {
      raf.write(this.update);
    }
  }
};
function getAnimatedState(props, host2) {
  const dependencies = /* @__PURE__ */ new Set();
  TreeContext.dependencies = dependencies;
  if (props.style)
    props = {
      ...props,
      style: host2.createAnimatedStyle(props.style)
    };
  props = new AnimatedObject(props);
  TreeContext.dependencies = null;
  return [props, dependencies];
}
function updateRef(ref, value) {
  if (ref) {
    if (is.fun(ref))
      ref(value);
    else
      ref.current = value;
  }
  return value;
}
var cacheKey = Symbol.for("AnimatedComponent");
var createHost = (components, {
  applyAnimatedValues: applyAnimatedValues2 = () => false,
  createAnimatedStyle = (style) => new AnimatedObject(style),
  getComponentProps = (props) => props
} = {}) => {
  const hostConfig = {
    applyAnimatedValues: applyAnimatedValues2,
    createAnimatedStyle,
    getComponentProps
  };
  const animated2 = (Component2) => {
    const displayName = getDisplayName(Component2) || "Anonymous";
    if (is.str(Component2)) {
      Component2 = animated2[Component2] || (animated2[Component2] = withAnimated(Component2, hostConfig));
    } else {
      Component2 = Component2[cacheKey] || (Component2[cacheKey] = withAnimated(Component2, hostConfig));
    }
    Component2.displayName = `Animated(${displayName})`;
    return Component2;
  };
  eachProp(components, (Component2, key) => {
    if (is.arr(components)) {
      key = getDisplayName(Component2);
    }
    animated2[key] = animated2(Component2);
  });
  return {
    animated: animated2
  };
};
var getDisplayName = (arg) => is.str(arg) ? arg : arg && is.str(arg.displayName) ? arg.displayName : is.fun(arg) && arg.name || null;
function callProp(value, ...args) {
  return is.fun(value) ? value(...args) : value;
}
var matchProp = (value, key) => value === true || !!(key && value && (is.fun(value) ? value(key) : toArray(value).includes(key)));
var resolveProp = (prop, key) => is.obj(prop) ? key && prop[key] : prop;
var getDefaultProp = (props, key) => props.default === true ? props[key] : props.default ? props.default[key] : void 0;
var noopTransform = (value) => value;
var getDefaultProps = (props, transform = noopTransform) => {
  let keys = DEFAULT_PROPS;
  if (props.default && props.default !== true) {
    props = props.default;
    keys = Object.keys(props);
  }
  const defaults2 = {};
  for (const key of keys) {
    const value = transform(props[key], key);
    if (!is.und(value)) {
      defaults2[key] = value;
    }
  }
  return defaults2;
};
var DEFAULT_PROPS = [
  "config",
  "onProps",
  "onStart",
  "onChange",
  "onPause",
  "onResume",
  "onRest"
];
var RESERVED_PROPS = {
  config: 1,
  from: 1,
  to: 1,
  ref: 1,
  loop: 1,
  reset: 1,
  pause: 1,
  cancel: 1,
  reverse: 1,
  immediate: 1,
  default: 1,
  delay: 1,
  onProps: 1,
  onStart: 1,
  onChange: 1,
  onPause: 1,
  onResume: 1,
  onRest: 1,
  onResolve: 1,
  items: 1,
  trail: 1,
  sort: 1,
  expires: 1,
  initial: 1,
  enter: 1,
  update: 1,
  leave: 1,
  children: 1,
  onDestroyed: 1,
  keys: 1,
  callId: 1,
  parentId: 1
};
function getForwardProps(props) {
  const forward = {};
  let count = 0;
  eachProp(props, (value, prop) => {
    if (!RESERVED_PROPS[prop]) {
      forward[prop] = value;
      count++;
    }
  });
  if (count) {
    return forward;
  }
}
function inferTo(props) {
  const to2 = getForwardProps(props);
  if (to2) {
    const out = {to: to2};
    eachProp(props, (val, key) => key in to2 || (out[key] = val));
    return out;
  }
  return {...props};
}
function computeGoal(value) {
  value = getFluidValue(value);
  return is.arr(value) ? value.map(computeGoal) : isAnimatedString(value) ? globals_exports.createStringInterpolator({
    range: [0, 1],
    output: [value, value]
  })(1) : value;
}
function hasProps(props) {
  for (const _3 in props)
    return true;
  return false;
}
function isAsyncTo(to2) {
  return is.fun(to2) || is.arr(to2) && is.obj(to2[0]);
}
function detachRefs(ctrl, ref) {
  ctrl.ref?.delete(ctrl);
  ref?.delete(ctrl);
}
function replaceRef(ctrl, ref) {
  if (ref && ctrl.ref !== ref) {
    ctrl.ref?.delete(ctrl);
    ref.add(ctrl);
    ctrl.ref = ref;
  }
}
var config2 = {
  default: {tension: 170, friction: 26},
  gentle: {tension: 120, friction: 14},
  wobbly: {tension: 180, friction: 12},
  stiff: {tension: 210, friction: 20},
  slow: {tension: 280, friction: 60},
  molasses: {tension: 280, friction: 120}
};
var defaults = {
  ...config2.default,
  mass: 1,
  damping: 1,
  easing: easings.linear,
  clamp: false
};
var AnimationConfig = class {
  constructor() {
    this.velocity = 0;
    Object.assign(this, defaults);
  }
};
function mergeConfig(config22, newConfig, defaultConfig) {
  if (defaultConfig) {
    defaultConfig = {...defaultConfig};
    sanitizeConfig(defaultConfig, newConfig);
    newConfig = {...defaultConfig, ...newConfig};
  }
  sanitizeConfig(config22, newConfig);
  Object.assign(config22, newConfig);
  for (const key in defaults) {
    if (config22[key] == null) {
      config22[key] = defaults[key];
    }
  }
  let {frequency, damping} = config22;
  const {mass} = config22;
  if (!is.und(frequency)) {
    if (frequency < 0.01)
      frequency = 0.01;
    if (damping < 0)
      damping = 0;
    config22.tension = Math.pow(2 * Math.PI / frequency, 2) * mass;
    config22.friction = 4 * Math.PI * damping * mass / frequency;
  }
  return config22;
}
function sanitizeConfig(config22, props) {
  if (!is.und(props.decay)) {
    config22.duration = void 0;
  } else {
    const isTensionConfig = !is.und(props.tension) || !is.und(props.friction);
    if (isTensionConfig || !is.und(props.frequency) || !is.und(props.damping) || !is.und(props.mass)) {
      config22.duration = void 0;
      config22.decay = void 0;
    }
    if (isTensionConfig) {
      config22.frequency = void 0;
    }
  }
}
var emptyArray = [];
var Animation = class {
  constructor() {
    this.changed = false;
    this.values = emptyArray;
    this.toValues = null;
    this.fromValues = emptyArray;
    this.config = new AnimationConfig();
    this.immediate = false;
  }
};
function scheduleProps(callId, {key, props, defaultProps, state, actions}) {
  return new Promise((resolve, reject) => {
    let delay;
    let timeout;
    let cancel = matchProp(props.cancel ?? defaultProps?.cancel, key);
    if (cancel) {
      onStart();
    } else {
      if (!is.und(props.pause)) {
        state.paused = matchProp(props.pause, key);
      }
      let pause = defaultProps?.pause;
      if (pause !== true) {
        pause = state.paused || matchProp(pause, key);
      }
      delay = callProp(props.delay || 0, key);
      if (pause) {
        state.resumeQueue.add(onResume);
        actions.pause();
      } else {
        actions.resume();
        onResume();
      }
    }
    function onPause() {
      state.resumeQueue.add(onResume);
      state.timeouts.delete(timeout);
      timeout.cancel();
      delay = timeout.time - raf.now();
    }
    function onResume() {
      if (delay > 0 && !globals_exports.skipAnimation) {
        state.delayed = true;
        timeout = raf.setTimeout(onStart, delay);
        state.pauseQueue.add(onPause);
        state.timeouts.add(timeout);
      } else {
        onStart();
      }
    }
    function onStart() {
      if (state.delayed) {
        state.delayed = false;
      }
      state.pauseQueue.delete(onPause);
      state.timeouts.delete(timeout);
      if (callId <= (state.cancelId || 0)) {
        cancel = true;
      }
      try {
        actions.start({...props, callId, cancel}, resolve);
      } catch (err) {
        reject(err);
      }
    }
  });
}
var getCombinedResult = (target, results) => results.length == 1 ? results[0] : results.some((result) => result.cancelled) ? getCancelledResult(target.get()) : results.every((result) => result.noop) ? getNoopResult(target.get()) : getFinishedResult(target.get(), results.every((result) => result.finished));
var getNoopResult = (value) => ({
  value,
  noop: true,
  finished: true,
  cancelled: false
});
var getFinishedResult = (value, finished, cancelled = false) => ({
  value,
  finished,
  cancelled
});
var getCancelledResult = (value) => ({
  value,
  cancelled: true,
  finished: false
});
function runAsync(to2, props, state, target) {
  const {callId, parentId, onRest} = props;
  const {asyncTo: prevTo, promise: prevPromise} = state;
  if (!parentId && to2 === prevTo && !props.reset) {
    return prevPromise;
  }
  return state.promise = (async () => {
    state.asyncId = callId;
    state.asyncTo = to2;
    const defaultProps = getDefaultProps(props, (value, key) => key === "onRest" ? void 0 : value);
    let preventBail;
    let bail;
    const bailPromise = new Promise((resolve, reject) => (preventBail = resolve, bail = reject));
    const bailIfEnded = (bailSignal) => {
      const bailResult = callId <= (state.cancelId || 0) && getCancelledResult(target) || callId !== state.asyncId && getFinishedResult(target, false);
      if (bailResult) {
        bailSignal.result = bailResult;
        bail(bailSignal);
        throw bailSignal;
      }
    };
    const animate = (arg1, arg2) => {
      const bailSignal = new BailSignal();
      const skipAnimationSignal = new SkipAnimationSignal();
      return (async () => {
        if (globals_exports.skipAnimation) {
          stopAsync(state);
          skipAnimationSignal.result = getFinishedResult(target, false);
          bail(skipAnimationSignal);
          throw skipAnimationSignal;
        }
        bailIfEnded(bailSignal);
        const props2 = is.obj(arg1) ? {...arg1} : {...arg2, to: arg1};
        props2.parentId = callId;
        eachProp(defaultProps, (value, key) => {
          if (is.und(props2[key])) {
            props2[key] = value;
          }
        });
        const result2 = await target.start(props2);
        bailIfEnded(bailSignal);
        if (state.paused) {
          await new Promise((resume) => {
            state.resumeQueue.add(resume);
          });
        }
        return result2;
      })();
    };
    let result;
    if (globals_exports.skipAnimation) {
      stopAsync(state);
      return getFinishedResult(target, false);
    }
    try {
      let animating;
      if (is.arr(to2)) {
        animating = (async (queue2) => {
          for (const props2 of queue2) {
            await animate(props2);
          }
        })(to2);
      } else {
        animating = Promise.resolve(to2(animate, target.stop.bind(target)));
      }
      await Promise.all([animating.then(preventBail), bailPromise]);
      result = getFinishedResult(target.get(), true, false);
    } catch (err) {
      if (err instanceof BailSignal) {
        result = err.result;
      } else if (err instanceof SkipAnimationSignal) {
        result = err.result;
      } else {
        throw err;
      }
    } finally {
      if (callId == state.asyncId) {
        state.asyncId = parentId;
        state.asyncTo = parentId ? prevTo : void 0;
        state.promise = parentId ? prevPromise : void 0;
      }
    }
    if (is.fun(onRest)) {
      raf.batchedUpdates(() => {
        onRest(result, target, target.item);
      });
    }
    return result;
  })();
}
function stopAsync(state, cancelId) {
  flush(state.timeouts, (t4) => t4.cancel());
  state.pauseQueue.clear();
  state.resumeQueue.clear();
  state.asyncId = state.asyncTo = state.promise = void 0;
  if (cancelId)
    state.cancelId = cancelId;
}
var BailSignal = class extends Error {
  constructor() {
    super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.");
  }
};
var SkipAnimationSignal = class extends Error {
  constructor() {
    super("SkipAnimationSignal");
  }
};
var isFrameValue = (value) => value instanceof FrameValue;
var nextId = 1;
var FrameValue = class extends FluidValue {
  constructor() {
    super(...arguments);
    this.id = nextId++;
    this._priority = 0;
  }
  get priority() {
    return this._priority;
  }
  set priority(priority2) {
    if (this._priority != priority2) {
      this._priority = priority2;
      this._onPriorityChange(priority2);
    }
  }
  get() {
    const node = getAnimated(this);
    return node && node.getValue();
  }
  to(...args) {
    return globals_exports.to(this, args);
  }
  interpolate(...args) {
    deprecateInterpolate();
    return globals_exports.to(this, args);
  }
  toJSON() {
    return this.get();
  }
  observerAdded(count) {
    if (count == 1)
      this._attach();
  }
  observerRemoved(count) {
    if (count == 0)
      this._detach();
  }
  _attach() {
  }
  _detach() {
  }
  _onChange(value, idle = false) {
    callFluidObservers(this, {
      type: "change",
      parent: this,
      value,
      idle
    });
  }
  _onPriorityChange(priority2) {
    if (!this.idle) {
      frameLoop.sort(this);
    }
    callFluidObservers(this, {
      type: "priority",
      parent: this,
      priority: priority2
    });
  }
};
var $P = Symbol.for("SpringPhase");
var HAS_ANIMATED = 1;
var IS_ANIMATING = 2;
var IS_PAUSED = 4;
var hasAnimated = (target) => (target[$P] & HAS_ANIMATED) > 0;
var isAnimating = (target) => (target[$P] & IS_ANIMATING) > 0;
var isPaused = (target) => (target[$P] & IS_PAUSED) > 0;
var setActiveBit = (target, active) => active ? target[$P] |= IS_ANIMATING | HAS_ANIMATED : target[$P] &= ~IS_ANIMATING;
var setPausedBit = (target, paused) => paused ? target[$P] |= IS_PAUSED : target[$P] &= ~IS_PAUSED;
var SpringValue = class extends FrameValue {
  constructor(arg1, arg2) {
    super();
    this.animation = new Animation();
    this.defaultProps = {};
    this._state = {
      paused: false,
      delayed: false,
      pauseQueue: /* @__PURE__ */ new Set(),
      resumeQueue: /* @__PURE__ */ new Set(),
      timeouts: /* @__PURE__ */ new Set()
    };
    this._pendingCalls = /* @__PURE__ */ new Set();
    this._lastCallId = 0;
    this._lastToId = 0;
    this._memoizedDuration = 0;
    if (!is.und(arg1) || !is.und(arg2)) {
      const props = is.obj(arg1) ? {...arg1} : {...arg2, from: arg1};
      if (is.und(props.default)) {
        props.default = true;
      }
      this.start(props);
    }
  }
  get idle() {
    return !(isAnimating(this) || this._state.asyncTo) || isPaused(this);
  }
  get goal() {
    return getFluidValue(this.animation.to);
  }
  get velocity() {
    const node = getAnimated(this);
    return node instanceof AnimatedValue ? node.lastVelocity || 0 : node.getPayload().map((node2) => node2.lastVelocity || 0);
  }
  get hasAnimated() {
    return hasAnimated(this);
  }
  get isAnimating() {
    return isAnimating(this);
  }
  get isPaused() {
    return isPaused(this);
  }
  get isDelayed() {
    return this._state.delayed;
  }
  advance(dt) {
    let idle = true;
    let changed = false;
    const anim = this.animation;
    let {toValues} = anim;
    const {config: config22} = anim;
    const payload = getPayload(anim.to);
    if (!payload && hasFluidValue(anim.to)) {
      toValues = toArray(getFluidValue(anim.to));
    }
    anim.values.forEach((node2, i2) => {
      if (node2.done)
        return;
      const to2 = node2.constructor == AnimatedString ? 1 : payload ? payload[i2].lastPosition : toValues[i2];
      let finished = anim.immediate;
      let position = to2;
      if (!finished) {
        position = node2.lastPosition;
        if (config22.tension <= 0) {
          node2.done = true;
          return;
        }
        let elapsed = node2.elapsedTime += dt;
        const from = anim.fromValues[i2];
        const v0 = node2.v0 != null ? node2.v0 : node2.v0 = is.arr(config22.velocity) ? config22.velocity[i2] : config22.velocity;
        let velocity;
        const precision = config22.precision || (from == to2 ? 5e-3 : Math.min(1, Math.abs(to2 - from) * 1e-3));
        if (!is.und(config22.duration)) {
          let p5 = 1;
          if (config22.duration > 0) {
            if (this._memoizedDuration !== config22.duration) {
              this._memoizedDuration = config22.duration;
              if (node2.durationProgress > 0) {
                node2.elapsedTime = config22.duration * node2.durationProgress;
                elapsed = node2.elapsedTime += dt;
              }
            }
            p5 = (config22.progress || 0) + elapsed / this._memoizedDuration;
            p5 = p5 > 1 ? 1 : p5 < 0 ? 0 : p5;
            node2.durationProgress = p5;
          }
          position = from + config22.easing(p5) * (to2 - from);
          velocity = (position - node2.lastPosition) / dt;
          finished = p5 == 1;
        } else if (config22.decay) {
          const decay = config22.decay === true ? 0.998 : config22.decay;
          const e2 = Math.exp(-(1 - decay) * elapsed);
          position = from + v0 / (1 - decay) * (1 - e2);
          finished = Math.abs(node2.lastPosition - position) <= precision;
          velocity = v0 * e2;
        } else {
          velocity = node2.lastVelocity == null ? v0 : node2.lastVelocity;
          const restVelocity = config22.restVelocity || precision / 10;
          const bounceFactor = config22.clamp ? 0 : config22.bounce;
          const canBounce = !is.und(bounceFactor);
          const isGrowing = from == to2 ? node2.v0 > 0 : from < to2;
          let isMoving;
          let isBouncing = false;
          const step = 1;
          const numSteps = Math.ceil(dt / step);
          for (let n4 = 0; n4 < numSteps; ++n4) {
            isMoving = Math.abs(velocity) > restVelocity;
            if (!isMoving) {
              finished = Math.abs(to2 - position) <= precision;
              if (finished) {
                break;
              }
            }
            if (canBounce) {
              isBouncing = position == to2 || position > to2 == isGrowing;
              if (isBouncing) {
                velocity = -velocity * bounceFactor;
                position = to2;
              }
            }
            const springForce = -config22.tension * 1e-6 * (position - to2);
            const dampingForce = -config22.friction * 1e-3 * velocity;
            const acceleration = (springForce + dampingForce) / config22.mass;
            velocity = velocity + acceleration * step;
            position = position + velocity * step;
          }
        }
        node2.lastVelocity = velocity;
        if (Number.isNaN(position)) {
          console.warn(`Got NaN while animating:`, this);
          finished = true;
        }
      }
      if (payload && !payload[i2].done) {
        finished = false;
      }
      if (finished) {
        node2.done = true;
      } else {
        idle = false;
      }
      if (node2.setValue(position, config22.round)) {
        changed = true;
      }
    });
    const node = getAnimated(this);
    const currVal = node.getValue();
    if (idle) {
      const finalVal = getFluidValue(anim.to);
      if ((currVal !== finalVal || changed) && !config22.decay) {
        node.setValue(finalVal);
        this._onChange(finalVal);
      } else if (changed && config22.decay) {
        this._onChange(currVal);
      }
      this._stop();
    } else if (changed) {
      this._onChange(currVal);
    }
  }
  set(value) {
    raf.batchedUpdates(() => {
      this._stop();
      this._focus(value);
      this._set(value);
    });
    return this;
  }
  pause() {
    this._update({pause: true});
  }
  resume() {
    this._update({pause: false});
  }
  finish() {
    if (isAnimating(this)) {
      const {to: to2, config: config22} = this.animation;
      raf.batchedUpdates(() => {
        this._onStart();
        if (!config22.decay) {
          this._set(to2, false);
        }
        this._stop();
      });
    }
    return this;
  }
  update(props) {
    const queue2 = this.queue || (this.queue = []);
    queue2.push(props);
    return this;
  }
  start(to2, arg2) {
    let queue2;
    if (!is.und(to2)) {
      queue2 = [is.obj(to2) ? to2 : {...arg2, to: to2}];
    } else {
      queue2 = this.queue || [];
      this.queue = [];
    }
    return Promise.all(queue2.map((props) => {
      const up = this._update(props);
      return up;
    })).then((results) => getCombinedResult(this, results));
  }
  stop(cancel) {
    const {to: to2} = this.animation;
    this._focus(this.get());
    stopAsync(this._state, cancel && this._lastCallId);
    raf.batchedUpdates(() => this._stop(to2, cancel));
    return this;
  }
  reset() {
    this._update({reset: true});
  }
  eventObserved(event) {
    if (event.type == "change") {
      this._start();
    } else if (event.type == "priority") {
      this.priority = event.priority + 1;
    }
  }
  _prepareNode(props) {
    const key = this.key || "";
    let {to: to2, from} = props;
    to2 = is.obj(to2) ? to2[key] : to2;
    if (to2 == null || isAsyncTo(to2)) {
      to2 = void 0;
    }
    from = is.obj(from) ? from[key] : from;
    if (from == null) {
      from = void 0;
    }
    const range = {to: to2, from};
    if (!hasAnimated(this)) {
      if (props.reverse)
        [to2, from] = [from, to2];
      from = getFluidValue(from);
      if (!is.und(from)) {
        this._set(from);
      } else if (!getAnimated(this)) {
        this._set(to2);
      }
    }
    return range;
  }
  _update({...props}, isLoop) {
    const {key, defaultProps} = this;
    if (props.default)
      Object.assign(defaultProps, getDefaultProps(props, (value, prop) => /^on/.test(prop) ? resolveProp(value, key) : value));
    mergeActiveFn(this, props, "onProps");
    sendEvent(this, "onProps", props, this);
    const range = this._prepareNode(props);
    if (Object.isFrozen(this)) {
      throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
    }
    const state = this._state;
    return scheduleProps(++this._lastCallId, {
      key,
      props,
      defaultProps,
      state,
      actions: {
        pause: () => {
          if (!isPaused(this)) {
            setPausedBit(this, true);
            flushCalls(state.pauseQueue);
            sendEvent(this, "onPause", getFinishedResult(this, checkFinished(this, this.animation.to)), this);
          }
        },
        resume: () => {
          if (isPaused(this)) {
            setPausedBit(this, false);
            if (isAnimating(this)) {
              this._resume();
            }
            flushCalls(state.resumeQueue);
            sendEvent(this, "onResume", getFinishedResult(this, checkFinished(this, this.animation.to)), this);
          }
        },
        start: this._merge.bind(this, range)
      }
    }).then((result) => {
      if (props.loop && result.finished && !(isLoop && result.noop)) {
        const nextProps = createLoopUpdate(props);
        if (nextProps) {
          return this._update(nextProps, true);
        }
      }
      return result;
    });
  }
  _merge(range, props, resolve) {
    if (props.cancel) {
      this.stop(true);
      return resolve(getCancelledResult(this));
    }
    const hasToProp = !is.und(range.to);
    const hasFromProp = !is.und(range.from);
    if (hasToProp || hasFromProp) {
      if (props.callId > this._lastToId) {
        this._lastToId = props.callId;
      } else {
        return resolve(getCancelledResult(this));
      }
    }
    const {key, defaultProps, animation: anim} = this;
    const {to: prevTo, from: prevFrom} = anim;
    let {to: to2 = prevTo, from = prevFrom} = range;
    if (hasFromProp && !hasToProp && (!props.default || is.und(to2))) {
      to2 = from;
    }
    if (props.reverse)
      [to2, from] = [from, to2];
    const hasFromChanged = !isEqual(from, prevFrom);
    if (hasFromChanged) {
      anim.from = from;
    }
    from = getFluidValue(from);
    const hasToChanged = !isEqual(to2, prevTo);
    if (hasToChanged) {
      this._focus(to2);
    }
    const hasAsyncTo = isAsyncTo(props.to);
    const {config: config22} = anim;
    const {decay, velocity} = config22;
    if (hasToProp || hasFromProp) {
      config22.velocity = 0;
    }
    if (props.config && !hasAsyncTo) {
      mergeConfig(config22, callProp(props.config, key), props.config !== defaultProps.config ? callProp(defaultProps.config, key) : void 0);
    }
    let node = getAnimated(this);
    if (!node || is.und(to2)) {
      return resolve(getFinishedResult(this, true));
    }
    const reset = is.und(props.reset) ? hasFromProp && !props.default : !is.und(from) && matchProp(props.reset, key);
    const value = reset ? from : this.get();
    const goal = computeGoal(to2);
    const isAnimatable = is.num(goal) || is.arr(goal) || isAnimatedString(goal);
    const immediate = !hasAsyncTo && (!isAnimatable || matchProp(defaultProps.immediate || props.immediate, key));
    if (hasToChanged) {
      const nodeType = getAnimatedType(to2);
      if (nodeType !== node.constructor) {
        if (immediate) {
          node = this._set(goal);
        } else
          throw Error(`Cannot animate between ${node.constructor.name} and ${nodeType.name}, as the "to" prop suggests`);
      }
    }
    const goalType = node.constructor;
    let started = hasFluidValue(to2);
    let finished = false;
    if (!started) {
      const hasValueChanged = reset || !hasAnimated(this) && hasFromChanged;
      if (hasToChanged || hasValueChanged) {
        finished = isEqual(computeGoal(value), goal);
        started = !finished;
      }
      if (!isEqual(anim.immediate, immediate) && !immediate || !isEqual(config22.decay, decay) || !isEqual(config22.velocity, velocity)) {
        started = true;
      }
    }
    if (finished && isAnimating(this)) {
      if (anim.changed && !reset) {
        started = true;
      } else if (!started) {
        this._stop(prevTo);
      }
    }
    if (!hasAsyncTo) {
      if (started || hasFluidValue(prevTo)) {
        anim.values = node.getPayload();
        anim.toValues = hasFluidValue(to2) ? null : goalType == AnimatedString ? [1] : toArray(goal);
      }
      if (anim.immediate != immediate) {
        anim.immediate = immediate;
        if (!immediate && !reset) {
          this._set(prevTo);
        }
      }
      if (started) {
        const {onRest} = anim;
        each(ACTIVE_EVENTS, (type) => mergeActiveFn(this, props, type));
        const result = getFinishedResult(this, checkFinished(this, prevTo));
        flushCalls(this._pendingCalls, result);
        this._pendingCalls.add(resolve);
        if (anim.changed)
          raf.batchedUpdates(() => {
            anim.changed = !reset;
            onRest?.(result, this);
            if (reset) {
              callProp(defaultProps.onRest, result);
            } else {
              anim.onStart?.(result, this);
            }
          });
      }
    }
    if (reset) {
      this._set(value);
    }
    if (hasAsyncTo) {
      resolve(runAsync(props.to, props, this._state, this));
    } else if (started) {
      this._start();
    } else if (isAnimating(this) && !hasToChanged) {
      this._pendingCalls.add(resolve);
    } else {
      resolve(getNoopResult(value));
    }
  }
  _focus(value) {
    const anim = this.animation;
    if (value !== anim.to) {
      if (getFluidObservers(this)) {
        this._detach();
      }
      anim.to = value;
      if (getFluidObservers(this)) {
        this._attach();
      }
    }
  }
  _attach() {
    let priority2 = 0;
    const {to: to2} = this.animation;
    if (hasFluidValue(to2)) {
      addFluidObserver(to2, this);
      if (isFrameValue(to2)) {
        priority2 = to2.priority + 1;
      }
    }
    this.priority = priority2;
  }
  _detach() {
    const {to: to2} = this.animation;
    if (hasFluidValue(to2)) {
      removeFluidObserver(to2, this);
    }
  }
  _set(arg, idle = true) {
    const value = getFluidValue(arg);
    if (!is.und(value)) {
      const oldNode = getAnimated(this);
      if (!oldNode || !isEqual(value, oldNode.getValue())) {
        const nodeType = getAnimatedType(value);
        if (!oldNode || oldNode.constructor != nodeType) {
          setAnimated(this, nodeType.create(value));
        } else {
          oldNode.setValue(value);
        }
        if (oldNode) {
          raf.batchedUpdates(() => {
            this._onChange(value, idle);
          });
        }
      }
    }
    return getAnimated(this);
  }
  _onStart() {
    const anim = this.animation;
    if (!anim.changed) {
      anim.changed = true;
      sendEvent(this, "onStart", getFinishedResult(this, checkFinished(this, anim.to)), this);
    }
  }
  _onChange(value, idle) {
    if (!idle) {
      this._onStart();
      callProp(this.animation.onChange, value, this);
    }
    callProp(this.defaultProps.onChange, value, this);
    super._onChange(value, idle);
  }
  _start() {
    const anim = this.animation;
    getAnimated(this).reset(getFluidValue(anim.to));
    if (!anim.immediate) {
      anim.fromValues = anim.values.map((node) => node.lastPosition);
    }
    if (!isAnimating(this)) {
      setActiveBit(this, true);
      if (!isPaused(this)) {
        this._resume();
      }
    }
  }
  _resume() {
    if (globals_exports.skipAnimation) {
      this.finish();
    } else {
      frameLoop.start(this);
    }
  }
  _stop(goal, cancel) {
    if (isAnimating(this)) {
      setActiveBit(this, false);
      const anim = this.animation;
      each(anim.values, (node) => {
        node.done = true;
      });
      if (anim.toValues) {
        anim.onChange = anim.onPause = anim.onResume = void 0;
      }
      callFluidObservers(this, {
        type: "idle",
        parent: this
      });
      const result = cancel ? getCancelledResult(this.get()) : getFinishedResult(this.get(), checkFinished(this, goal ?? anim.to));
      flushCalls(this._pendingCalls, result);
      if (anim.changed) {
        anim.changed = false;
        sendEvent(this, "onRest", result, this);
      }
    }
  }
};
function checkFinished(target, to2) {
  const goal = computeGoal(to2);
  const value = computeGoal(target.get());
  return isEqual(value, goal);
}
function createLoopUpdate(props, loop2 = props.loop, to2 = props.to) {
  const loopRet = callProp(loop2);
  if (loopRet) {
    const overrides = loopRet !== true && inferTo(loopRet);
    const reverse = (overrides || props).reverse;
    const reset = !overrides || overrides.reset;
    return createUpdate({
      ...props,
      loop: loop2,
      default: false,
      pause: void 0,
      to: !reverse || isAsyncTo(to2) ? to2 : void 0,
      from: reset ? props.from : void 0,
      reset,
      ...overrides
    });
  }
}
function createUpdate(props) {
  const {to: to2, from} = props = inferTo(props);
  const keys = /* @__PURE__ */ new Set();
  if (is.obj(to2))
    findDefined(to2, keys);
  if (is.obj(from))
    findDefined(from, keys);
  props.keys = keys.size ? Array.from(keys) : null;
  return props;
}
function declareUpdate(props) {
  const update2 = createUpdate(props);
  if (is.und(update2.default)) {
    update2.default = getDefaultProps(update2);
  }
  return update2;
}
function findDefined(values, keys) {
  eachProp(values, (value, key) => value != null && keys.add(key));
}
var ACTIVE_EVENTS = [
  "onStart",
  "onRest",
  "onChange",
  "onPause",
  "onResume"
];
function mergeActiveFn(target, props, type) {
  target.animation[type] = props[type] !== getDefaultProp(props, type) ? resolveProp(props[type], target.key) : void 0;
}
function sendEvent(target, type, ...args) {
  target.animation[type]?.(...args);
  target.defaultProps[type]?.(...args);
}
var BATCHED_EVENTS = ["onStart", "onChange", "onRest"];
var nextId2 = 1;
var Controller = class {
  constructor(props, flush3) {
    this.id = nextId2++;
    this.springs = {};
    this.queue = [];
    this._lastAsyncId = 0;
    this._active = /* @__PURE__ */ new Set();
    this._changed = /* @__PURE__ */ new Set();
    this._started = false;
    this._state = {
      paused: false,
      pauseQueue: /* @__PURE__ */ new Set(),
      resumeQueue: /* @__PURE__ */ new Set(),
      timeouts: /* @__PURE__ */ new Set()
    };
    this._events = {
      onStart: /* @__PURE__ */ new Map(),
      onChange: /* @__PURE__ */ new Map(),
      onRest: /* @__PURE__ */ new Map()
    };
    this._onFrame = this._onFrame.bind(this);
    if (flush3) {
      this._flush = flush3;
    }
    if (props) {
      this.start({default: true, ...props});
    }
  }
  get idle() {
    return !this._state.asyncTo && Object.values(this.springs).every((spring) => {
      return spring.idle && !spring.isDelayed && !spring.isPaused;
    });
  }
  get item() {
    return this._item;
  }
  set item(item) {
    this._item = item;
  }
  get() {
    const values = {};
    this.each((spring, key) => values[key] = spring.get());
    return values;
  }
  set(values) {
    for (const key in values) {
      const value = values[key];
      if (!is.und(value)) {
        this.springs[key].set(value);
      }
    }
  }
  update(props) {
    if (props) {
      this.queue.push(createUpdate(props));
    }
    return this;
  }
  start(props) {
    let {queue: queue2} = this;
    if (props) {
      queue2 = toArray(props).map(createUpdate);
    } else {
      this.queue = [];
    }
    if (this._flush) {
      return this._flush(this, queue2);
    }
    prepareKeys(this, queue2);
    return flushUpdateQueue(this, queue2);
  }
  stop(arg, keys) {
    if (arg !== !!arg) {
      keys = arg;
    }
    if (keys) {
      const springs = this.springs;
      each(toArray(keys), (key) => springs[key].stop(!!arg));
    } else {
      stopAsync(this._state, this._lastAsyncId);
      this.each((spring) => spring.stop(!!arg));
    }
    return this;
  }
  pause(keys) {
    if (is.und(keys)) {
      this.start({pause: true});
    } else {
      const springs = this.springs;
      each(toArray(keys), (key) => springs[key].pause());
    }
    return this;
  }
  resume(keys) {
    if (is.und(keys)) {
      this.start({pause: false});
    } else {
      const springs = this.springs;
      each(toArray(keys), (key) => springs[key].resume());
    }
    return this;
  }
  each(iterator) {
    eachProp(this.springs, iterator);
  }
  _onFrame() {
    const {onStart, onChange, onRest} = this._events;
    const active = this._active.size > 0;
    const changed = this._changed.size > 0;
    if (active && !this._started || changed && !this._started) {
      this._started = true;
      flush(onStart, ([onStart2, result]) => {
        result.value = this.get();
        onStart2(result, this, this._item);
      });
    }
    const idle = !active && this._started;
    const values = changed || idle && onRest.size ? this.get() : null;
    if (changed && onChange.size) {
      flush(onChange, ([onChange2, result]) => {
        result.value = values;
        onChange2(result, this, this._item);
      });
    }
    if (idle) {
      this._started = false;
      flush(onRest, ([onRest2, result]) => {
        result.value = values;
        onRest2(result, this, this._item);
      });
    }
  }
  eventObserved(event) {
    if (event.type == "change") {
      this._changed.add(event.parent);
      if (!event.idle) {
        this._active.add(event.parent);
      }
    } else if (event.type == "idle") {
      this._active.delete(event.parent);
    } else
      return;
    raf.onFrame(this._onFrame);
  }
};
function flushUpdateQueue(ctrl, queue2) {
  return Promise.all(queue2.map((props) => flushUpdate(ctrl, props))).then((results) => getCombinedResult(ctrl, results));
}
async function flushUpdate(ctrl, props, isLoop) {
  const {keys, to: to2, from, loop: loop2, onRest, onResolve} = props;
  const defaults2 = is.obj(props.default) && props.default;
  if (loop2) {
    props.loop = false;
  }
  if (to2 === false)
    props.to = null;
  if (from === false)
    props.from = null;
  const asyncTo = is.arr(to2) || is.fun(to2) ? to2 : void 0;
  if (asyncTo) {
    props.to = void 0;
    props.onRest = void 0;
    if (defaults2) {
      defaults2.onRest = void 0;
    }
  } else {
    each(BATCHED_EVENTS, (key) => {
      const handler = props[key];
      if (is.fun(handler)) {
        const queue2 = ctrl["_events"][key];
        props[key] = ({finished, cancelled}) => {
          const result2 = queue2.get(handler);
          if (result2) {
            if (!finished)
              result2.finished = false;
            if (cancelled)
              result2.cancelled = true;
          } else {
            queue2.set(handler, {
              value: null,
              finished: finished || false,
              cancelled: cancelled || false
            });
          }
        };
        if (defaults2) {
          defaults2[key] = props[key];
        }
      }
    });
  }
  const state = ctrl["_state"];
  if (props.pause === !state.paused) {
    state.paused = props.pause;
    flushCalls(props.pause ? state.pauseQueue : state.resumeQueue);
  } else if (state.paused) {
    props.pause = true;
  }
  const promises = (keys || Object.keys(ctrl.springs)).map((key) => ctrl.springs[key].start(props));
  const cancel = props.cancel === true || getDefaultProp(props, "cancel") === true;
  if (asyncTo || cancel && state.asyncId) {
    promises.push(scheduleProps(++ctrl["_lastAsyncId"], {
      props,
      state,
      actions: {
        pause: noop2,
        resume: noop2,
        start(props2, resolve) {
          if (cancel) {
            stopAsync(state, ctrl["_lastAsyncId"]);
            resolve(getCancelledResult(ctrl));
          } else {
            props2.onRest = onRest;
            resolve(runAsync(asyncTo, props2, state, ctrl));
          }
        }
      }
    }));
  }
  if (state.paused) {
    await new Promise((resume) => {
      state.resumeQueue.add(resume);
    });
  }
  const result = getCombinedResult(ctrl, await Promise.all(promises));
  if (loop2 && result.finished && !(isLoop && result.noop)) {
    const nextProps = createLoopUpdate(props, loop2, to2);
    if (nextProps) {
      prepareKeys(ctrl, [nextProps]);
      return flushUpdate(ctrl, nextProps, true);
    }
  }
  if (onResolve) {
    raf.batchedUpdates(() => onResolve(result, ctrl, ctrl.item));
  }
  return result;
}
function getSprings(ctrl, props) {
  const springs = {...ctrl.springs};
  if (props) {
    each(toArray(props), (props2) => {
      if (is.und(props2.keys)) {
        props2 = createUpdate(props2);
      }
      if (!is.obj(props2.to)) {
        props2 = {...props2, to: void 0};
      }
      prepareSprings(springs, props2, (key) => {
        return createSpring(key);
      });
    });
  }
  setSprings(ctrl, springs);
  return springs;
}
function setSprings(ctrl, springs) {
  eachProp(springs, (spring, key) => {
    if (!ctrl.springs[key]) {
      ctrl.springs[key] = spring;
      addFluidObserver(spring, ctrl);
    }
  });
}
function createSpring(key, observer) {
  const spring = new SpringValue();
  spring.key = key;
  if (observer) {
    addFluidObserver(spring, observer);
  }
  return spring;
}
function prepareSprings(springs, props, create) {
  if (props.keys) {
    each(props.keys, (key) => {
      const spring = springs[key] || (springs[key] = create(key));
      spring["_prepareNode"](props);
    });
  }
}
function prepareKeys(ctrl, queue2) {
  each(queue2, (props) => {
    prepareSprings(ctrl.springs, props, (key) => {
      return createSpring(key, ctrl);
    });
  });
}
var SpringContext = ({
  children,
  ...props
}) => {
  const inherited = react.useContext(ctx);
  const pause = props.pause || !!inherited.pause, immediate = props.immediate || !!inherited.immediate;
  props = useMemoOne(() => ({pause, immediate}), [pause, immediate]);
  const {Provider} = ctx;
  return /* @__PURE__ */ react.createElement(Provider, {value: props}, children);
};
var ctx = makeContext(SpringContext, {});
SpringContext.Provider = ctx.Provider;
SpringContext.Consumer = ctx.Consumer;
function makeContext(target, init) {
  Object.assign(target, react.createContext(init));
  target.Provider._context = target;
  target.Consumer._context = target;
  return target;
}
var SpringRef = () => {
  const current = [];
  const SpringRef2 = function(props) {
    deprecateDirectCall();
    const results = [];
    each(current, (ctrl, i2) => {
      if (is.und(props)) {
        results.push(ctrl.start());
      } else {
        const update2 = _getProps(props, ctrl, i2);
        if (update2) {
          results.push(ctrl.start(update2));
        }
      }
    });
    return results;
  };
  SpringRef2.current = current;
  SpringRef2.add = function(ctrl) {
    if (!current.includes(ctrl)) {
      current.push(ctrl);
    }
  };
  SpringRef2.delete = function(ctrl) {
    const i2 = current.indexOf(ctrl);
    if (~i2)
      current.splice(i2, 1);
  };
  SpringRef2.pause = function() {
    each(current, (ctrl) => ctrl.pause(...arguments));
    return this;
  };
  SpringRef2.resume = function() {
    each(current, (ctrl) => ctrl.resume(...arguments));
    return this;
  };
  SpringRef2.set = function(values) {
    each(current, (ctrl, i2) => {
      const update2 = is.fun(values) ? values(i2, ctrl) : values;
      if (update2) {
        ctrl.set(update2);
      }
    });
  };
  SpringRef2.start = function(props) {
    const results = [];
    each(current, (ctrl, i2) => {
      if (is.und(props)) {
        results.push(ctrl.start());
      } else {
        const update2 = this._getProps(props, ctrl, i2);
        if (update2) {
          results.push(ctrl.start(update2));
        }
      }
    });
    return results;
  };
  SpringRef2.stop = function() {
    each(current, (ctrl) => ctrl.stop(...arguments));
    return this;
  };
  SpringRef2.update = function(props) {
    each(current, (ctrl, i2) => ctrl.update(this._getProps(props, ctrl, i2)));
    return this;
  };
  const _getProps = function(arg, ctrl, index) {
    return is.fun(arg) ? arg(index, ctrl) : arg;
  };
  SpringRef2._getProps = _getProps;
  return SpringRef2;
};
function useSprings(length, props, deps) {
  const propsFn = is.fun(props) && props;
  if (propsFn && !deps)
    deps = [];
  const ref = react.useMemo(() => propsFn || arguments.length == 3 ? SpringRef() : void 0, []);
  const layoutId = react.useRef(0);
  const forceUpdate = useForceUpdate();
  const state = react.useMemo(() => ({
    ctrls: [],
    queue: [],
    flush(ctrl, updates2) {
      const springs2 = getSprings(ctrl, updates2);
      const canFlushSync = layoutId.current > 0 && !state.queue.length && !Object.keys(springs2).some((key) => !ctrl.springs[key]);
      return canFlushSync ? flushUpdateQueue(ctrl, updates2) : new Promise((resolve) => {
        setSprings(ctrl, springs2);
        state.queue.push(() => {
          resolve(flushUpdateQueue(ctrl, updates2));
        });
        forceUpdate();
      });
    }
  }), []);
  const ctrls = react.useRef([...state.ctrls]);
  const updates = [];
  const prevLength = usePrev(length) || 0;
  react.useMemo(() => {
    each(ctrls.current.slice(length, prevLength), (ctrl) => {
      detachRefs(ctrl, ref);
      ctrl.stop(true);
    });
    ctrls.current.length = length;
    declareUpdates(prevLength, length);
  }, [length]);
  react.useMemo(() => {
    declareUpdates(0, Math.min(prevLength, length));
  }, deps);
  function declareUpdates(startIndex, endIndex) {
    for (let i2 = startIndex; i2 < endIndex; i2++) {
      const ctrl = ctrls.current[i2] || (ctrls.current[i2] = new Controller(null, state.flush));
      const update2 = propsFn ? propsFn(i2, ctrl) : props[i2];
      if (update2) {
        updates[i2] = declareUpdate(update2);
      }
    }
  }
  const springs = ctrls.current.map((ctrl, i2) => getSprings(ctrl, updates[i2]));
  const context = react.useContext(SpringContext);
  const prevContext = usePrev(context);
  const hasContext = context !== prevContext && hasProps(context);
  useIsomorphicLayoutEffect2(() => {
    layoutId.current++;
    state.ctrls = ctrls.current;
    const {queue: queue2} = state;
    if (queue2.length) {
      state.queue = [];
      each(queue2, (cb2) => cb2());
    }
    each(ctrls.current, (ctrl, i2) => {
      ref?.add(ctrl);
      if (hasContext) {
        ctrl.start({default: context});
      }
      const update2 = updates[i2];
      if (update2) {
        replaceRef(ctrl, update2.ref);
        if (ctrl.ref) {
          ctrl.queue.push(update2);
        } else {
          ctrl.start(update2);
        }
      }
    });
  });
  useOnce(() => () => {
    each(state.ctrls, (ctrl) => ctrl.stop(true));
  });
  const values = springs.map((x4) => ({...x4}));
  return ref ? [values, ref] : values;
}
function useTrail(length, propsArg, deps) {
  const propsFn = is.fun(propsArg) && propsArg;
  if (propsFn && !deps)
    deps = [];
  let reverse = true;
  let passedRef = void 0;
  const result = useSprings(length, (i2, ctrl) => {
    const props = propsFn ? propsFn(i2, ctrl) : propsArg;
    passedRef = props.ref;
    reverse = reverse && props.reverse;
    return props;
  }, deps || [{}]);
  useIsomorphicLayoutEffect2(() => {
    each(result[1].current, (ctrl, i2) => {
      const parent = result[1].current[i2 + (reverse ? 1 : -1)];
      replaceRef(ctrl, passedRef);
      if (ctrl.ref) {
        if (parent) {
          ctrl.update({to: parent.springs});
        }
        return;
      }
      if (parent) {
        ctrl.start({to: parent.springs});
      } else {
        ctrl.start();
      }
    });
  }, deps);
  if (propsFn || arguments.length == 3) {
    const ref = passedRef ?? result[1];
    ref["_getProps"] = (propsArg2, ctrl, i2) => {
      const props = is.fun(propsArg2) ? propsArg2(i2, ctrl) : propsArg2;
      if (props) {
        const parent = ref.current[i2 + (props.reverse ? 1 : -1)];
        if (parent)
          props.to = parent.springs;
        return props;
      }
    };
    return result;
  }
  return result[0];
}
function useTransition2(data, props, deps) {
  const propsFn = is.fun(props) && props;
  const {
    reset,
    sort,
    trail = 0,
    expires = true,
    exitBeforeEnter = false,
    onDestroyed,
    ref: propsRef,
    config: propsConfig
  } = propsFn ? propsFn() : props;
  const ref = react.useMemo(() => propsFn || arguments.length == 3 ? SpringRef() : void 0, []);
  const items = toArray(data);
  const transitions = [];
  const usedTransitions = react.useRef(null);
  const prevTransitions = reset ? null : usedTransitions.current;
  useIsomorphicLayoutEffect2(() => {
    usedTransitions.current = transitions;
  });
  useOnce(() => {
    each(transitions, (t4) => {
      ref?.add(t4.ctrl);
      t4.ctrl.ref = ref;
    });
    return () => {
      each(usedTransitions.current, (t4) => {
        if (t4.expired) {
          clearTimeout(t4.expirationId);
        }
        detachRefs(t4.ctrl, ref);
        t4.ctrl.stop(true);
      });
    };
  });
  const keys = getKeys(items, propsFn ? propsFn() : props, prevTransitions);
  const expired = reset && usedTransitions.current || [];
  useIsomorphicLayoutEffect2(() => each(expired, ({ctrl, item, key}) => {
    detachRefs(ctrl, ref);
    callProp(onDestroyed, item, key);
  }));
  const reused = [];
  if (prevTransitions)
    each(prevTransitions, (t4, i2) => {
      if (t4.expired) {
        clearTimeout(t4.expirationId);
        expired.push(t4);
      } else {
        i2 = reused[i2] = keys.indexOf(t4.key);
        if (~i2)
          transitions[i2] = t4;
      }
    });
  each(items, (item, i2) => {
    if (!transitions[i2]) {
      transitions[i2] = {
        key: keys[i2],
        item,
        phase: "mount",
        ctrl: new Controller()
      };
      transitions[i2].ctrl.item = item;
    }
  });
  if (reused.length) {
    let i2 = -1;
    const {leave} = propsFn ? propsFn() : props;
    each(reused, (keyIndex, prevIndex) => {
      const t4 = prevTransitions[prevIndex];
      if (~keyIndex) {
        i2 = transitions.indexOf(t4);
        transitions[i2] = {...t4, item: items[keyIndex]};
      } else if (leave) {
        transitions.splice(++i2, 0, t4);
      }
    });
  }
  if (is.fun(sort)) {
    transitions.sort((a2, b3) => sort(a2.item, b3.item));
  }
  let delay = -trail;
  const forceUpdate = useForceUpdate();
  const defaultProps = getDefaultProps(props);
  const changes = /* @__PURE__ */ new Map();
  const exitingTransitions = react.useRef(/* @__PURE__ */ new Map());
  const forceChange = react.useRef(false);
  each(transitions, (t4, i2) => {
    const key = t4.key;
    const prevPhase = t4.phase;
    const p5 = propsFn ? propsFn() : props;
    let to2;
    let phase;
    const propsDelay = callProp(p5.delay || 0, key);
    if (prevPhase == "mount") {
      to2 = p5.enter;
      phase = "enter";
    } else {
      const isLeave = keys.indexOf(key) < 0;
      if (prevPhase != "leave") {
        if (isLeave) {
          to2 = p5.leave;
          phase = "leave";
        } else if (to2 = p5.update) {
          phase = "update";
        } else
          return;
      } else if (!isLeave) {
        to2 = p5.enter;
        phase = "enter";
      } else
        return;
    }
    to2 = callProp(to2, t4.item, i2);
    to2 = is.obj(to2) ? inferTo(to2) : {to: to2};
    if (!to2.config) {
      const config22 = propsConfig || defaultProps.config;
      to2.config = callProp(config22, t4.item, i2, phase);
    }
    delay += trail;
    const payload = {
      ...defaultProps,
      delay: propsDelay + delay,
      ref: propsRef,
      immediate: p5.immediate,
      reset: false,
      ...to2
    };
    if (phase == "enter" && is.und(payload.from)) {
      const p22 = propsFn ? propsFn() : props;
      const from = is.und(p22.initial) || prevTransitions ? p22.from : p22.initial;
      payload.from = callProp(from, t4.item, i2);
    }
    const {onResolve} = payload;
    payload.onResolve = (result) => {
      callProp(onResolve, result);
      const transitions2 = usedTransitions.current;
      const t22 = transitions2.find((t32) => t32.key === key);
      if (!t22)
        return;
      if (result.cancelled && t22.phase != "update") {
        return;
      }
      if (t22.ctrl.idle) {
        const idle = transitions2.every((t32) => t32.ctrl.idle);
        if (t22.phase == "leave") {
          const expiry = callProp(expires, t22.item);
          if (expiry !== false) {
            const expiryMs = expiry === true ? 0 : expiry;
            t22.expired = true;
            if (!idle && expiryMs > 0) {
              if (expiryMs <= 2147483647)
                t22.expirationId = setTimeout(forceUpdate, expiryMs);
              return;
            }
          }
        }
        if (idle && transitions2.some((t32) => t32.expired)) {
          exitingTransitions.current.delete(t22);
          if (exitBeforeEnter) {
            forceChange.current = true;
          }
          forceUpdate();
        }
      }
    };
    const springs = getSprings(t4.ctrl, payload);
    if (phase === "leave" && exitBeforeEnter) {
      exitingTransitions.current.set(t4, {phase, springs, payload});
    } else {
      changes.set(t4, {phase, springs, payload});
    }
  });
  const context = react.useContext(SpringContext);
  const prevContext = usePrev(context);
  const hasContext = context !== prevContext && hasProps(context);
  useIsomorphicLayoutEffect2(() => {
    if (hasContext) {
      each(transitions, (t4) => {
        t4.ctrl.start({default: context});
      });
    }
  }, [context]);
  each(changes, (_3, t4) => {
    if (exitingTransitions.current.size) {
      const ind = transitions.findIndex((state) => state.key === t4.key);
      transitions.splice(ind, 1);
    }
  });
  useIsomorphicLayoutEffect2(() => {
    each(exitingTransitions.current.size ? exitingTransitions.current : changes, ({phase, payload}, t4) => {
      const {ctrl} = t4;
      t4.phase = phase;
      ref?.add(ctrl);
      if (hasContext && phase == "enter") {
        ctrl.start({default: context});
      }
      if (payload) {
        replaceRef(ctrl, payload.ref);
        if ((ctrl.ref || ref) && !forceChange.current) {
          ctrl.update(payload);
        } else {
          ctrl.start(payload);
          if (forceChange.current) {
            forceChange.current = false;
          }
        }
      }
    });
  }, reset ? void 0 : deps);
  const renderTransitions = (render2) => /* @__PURE__ */ react.createElement(react.Fragment, null, transitions.map((t4, i2) => {
    const {springs} = changes.get(t4) || t4.ctrl;
    const elem = render2({...springs}, t4.item, t4, i2);
    return elem && elem.type ? /* @__PURE__ */ react.createElement(elem.type, {
      ...elem.props,
      key: is.str(t4.key) || is.num(t4.key) ? t4.key : t4.ctrl.id,
      ref: elem.ref
    }) : elem;
  }));
  return ref ? [renderTransitions, ref] : renderTransitions;
}
var nextKey = 1;
function getKeys(items, {key, keys = key}, prevTransitions) {
  if (keys === null) {
    const reused = /* @__PURE__ */ new Set();
    return items.map((item) => {
      const t4 = prevTransitions && prevTransitions.find((t22) => t22.item === item && t22.phase !== "leave" && !reused.has(t22));
      if (t4) {
        reused.add(t4);
        return t4.key;
      }
      return nextKey++;
    });
  }
  return is.und(keys) ? items : is.fun(keys) ? items.map(keys) : toArray(keys);
}
var Interpolation = class extends FrameValue {
  constructor(source, args) {
    super();
    this.source = source;
    this.idle = true;
    this._active = /* @__PURE__ */ new Set();
    this.calc = createInterpolator(...args);
    const value = this._get();
    const nodeType = getAnimatedType(value);
    setAnimated(this, nodeType.create(value));
  }
  advance(_dt) {
    const value = this._get();
    const oldValue = this.get();
    if (!isEqual(value, oldValue)) {
      getAnimated(this).setValue(value);
      this._onChange(value, this.idle);
    }
    if (!this.idle && checkIdle(this._active)) {
      becomeIdle(this);
    }
  }
  _get() {
    const inputs = is.arr(this.source) ? this.source.map(getFluidValue) : toArray(getFluidValue(this.source));
    return this.calc(...inputs);
  }
  _start() {
    if (this.idle && !checkIdle(this._active)) {
      this.idle = false;
      each(getPayload(this), (node) => {
        node.done = false;
      });
      if (globals_exports.skipAnimation) {
        raf.batchedUpdates(() => this.advance());
        becomeIdle(this);
      } else {
        frameLoop.start(this);
      }
    }
  }
  _attach() {
    let priority2 = 1;
    each(toArray(this.source), (source) => {
      if (hasFluidValue(source)) {
        addFluidObserver(source, this);
      }
      if (isFrameValue(source)) {
        if (!source.idle) {
          this._active.add(source);
        }
        priority2 = Math.max(priority2, source.priority + 1);
      }
    });
    this.priority = priority2;
    this._start();
  }
  _detach() {
    each(toArray(this.source), (source) => {
      if (hasFluidValue(source)) {
        removeFluidObserver(source, this);
      }
    });
    this._active.clear();
    becomeIdle(this);
  }
  eventObserved(event) {
    if (event.type == "change") {
      if (event.idle) {
        this.advance();
      } else {
        this._active.add(event.parent);
        this._start();
      }
    } else if (event.type == "idle") {
      this._active.delete(event.parent);
    } else if (event.type == "priority") {
      this.priority = toArray(this.source).reduce((highest, parent) => Math.max(highest, (isFrameValue(parent) ? parent.priority : 0) + 1), 0);
    }
  }
};
function isIdle(source) {
  return source.idle !== false;
}
function checkIdle(active) {
  return !active.size || Array.from(active).every(isIdle);
}
function becomeIdle(self2) {
  if (!self2.idle) {
    self2.idle = true;
    each(getPayload(self2), (node) => {
      node.done = true;
    });
    callFluidObservers(self2, {
      type: "idle",
      parent: self2
    });
  }
}
globals_exports.assign({
  createStringInterpolator: createStringInterpolator2,
  to: (source, args) => new Interpolation(source, args)
});
var isCustomPropRE = /^--/;
function dangerousStyleValue(name, value) {
  if (value == null || typeof value === "boolean" || value === "")
    return "";
  if (typeof value === "number" && value !== 0 && !isCustomPropRE.test(name) && !(isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name]))
    return value + "px";
  return ("" + value).trim();
}
var attributeCache = {};
function applyAnimatedValues(instance, props) {
  if (!instance.nodeType || !instance.setAttribute) {
    return false;
  }
  const isFilterElement = instance.nodeName === "filter" || instance.parentNode && instance.parentNode.nodeName === "filter";
  const {
    className,
    style,
    children,
    scrollTop,
    scrollLeft,
    viewBox,
    ...attributes
  } = props;
  const values = Object.values(attributes);
  const names = Object.keys(attributes).map((name) => isFilterElement || instance.hasAttribute(name) ? name : attributeCache[name] || (attributeCache[name] = name.replace(/([A-Z])/g, (n4) => "-" + n4.toLowerCase())));
  if (children !== void 0) {
    instance.textContent = children;
  }
  for (const name in style) {
    if (style.hasOwnProperty(name)) {
      const value = dangerousStyleValue(name, style[name]);
      if (isCustomPropRE.test(name)) {
        instance.style.setProperty(name, value);
      } else {
        instance.style[name] = value;
      }
    }
  }
  names.forEach((name, i2) => {
    instance.setAttribute(name, values[i2]);
  });
  if (className !== void 0) {
    instance.className = className;
  }
  if (scrollTop !== void 0) {
    instance.scrollTop = scrollTop;
  }
  if (scrollLeft !== void 0) {
    instance.scrollLeft = scrollLeft;
  }
  if (viewBox !== void 0) {
    instance.setAttribute("viewBox", viewBox);
  }
}
var isUnitlessNumber = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
};
var prefixKey = (prefix2, key) => prefix2 + key.charAt(0).toUpperCase() + key.substring(1);
var prefixes = ["Webkit", "Ms", "Moz", "O"];
isUnitlessNumber = Object.keys(isUnitlessNumber).reduce((acc, prop) => {
  prefixes.forEach((prefix2) => acc[prefixKey(prefix2, prop)] = acc[prop]);
  return acc;
}, isUnitlessNumber);
var domTransforms = /^(matrix|translate|scale|rotate|skew)/;
var pxTransforms = /^(translate)/;
var degTransforms = /^(rotate|skew)/;
var addUnit = (value, unit) => is.num(value) && value !== 0 ? value + unit : value;
var isValueIdentity = (value, id2) => is.arr(value) ? value.every((v5) => isValueIdentity(v5, id2)) : is.num(value) ? value === id2 : parseFloat(value) === id2;
var AnimatedStyle = class extends AnimatedObject {
  constructor({x: x4, y: y4, z: z5, ...style}) {
    const inputs = [];
    const transforms = [];
    if (x4 || y4 || z5) {
      inputs.push([x4 || 0, y4 || 0, z5 || 0]);
      transforms.push((xyz) => [
        `translate3d(${xyz.map((v5) => addUnit(v5, "px")).join(",")})`,
        isValueIdentity(xyz, 0)
      ]);
    }
    eachProp(style, (value, key) => {
      if (key === "transform") {
        inputs.push([value || ""]);
        transforms.push((transform) => [transform, transform === ""]);
      } else if (domTransforms.test(key)) {
        delete style[key];
        if (is.und(value))
          return;
        const unit = pxTransforms.test(key) ? "px" : degTransforms.test(key) ? "deg" : "";
        inputs.push(toArray(value));
        transforms.push(key === "rotate3d" ? ([x22, y22, z22, deg]) => [
          `rotate3d(${x22},${y22},${z22},${addUnit(deg, unit)})`,
          isValueIdentity(deg, 0)
        ] : (input) => [
          `${key}(${input.map((v5) => addUnit(v5, unit)).join(",")})`,
          isValueIdentity(input, key.startsWith("scale") ? 1 : 0)
        ]);
      }
    });
    if (inputs.length) {
      style.transform = new FluidTransform(inputs, transforms);
    }
    super(style);
  }
};
var FluidTransform = class extends FluidValue {
  constructor(inputs, transforms) {
    super();
    this.inputs = inputs;
    this.transforms = transforms;
    this._value = null;
  }
  get() {
    return this._value || (this._value = this._get());
  }
  _get() {
    let transform = "";
    let identity = true;
    each(this.inputs, (input, i2) => {
      const arg1 = getFluidValue(input[0]);
      const [t4, id2] = this.transforms[i2](is.arr(arg1) ? arg1 : input.map(getFluidValue));
      transform += " " + t4;
      identity = identity && id2;
    });
    return identity ? "none" : transform;
  }
  observerAdded(count) {
    if (count == 1)
      each(this.inputs, (input) => each(input, (value) => hasFluidValue(value) && addFluidObserver(value, this)));
  }
  observerRemoved(count) {
    if (count == 0)
      each(this.inputs, (input) => each(input, (value) => hasFluidValue(value) && removeFluidObserver(value, this)));
  }
  eventObserved(event) {
    if (event.type == "change") {
      this._value = null;
    }
    callFluidObservers(this, event);
  }
};
var primitives = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
];
globals_exports.assign({
  batchedUpdates: reactDom.unstable_batchedUpdates,
  createStringInterpolator: createStringInterpolator2,
  colors: colors2
});
var host = createHost(primitives, {
  applyAnimatedValues,
  createAnimatedStyle: (style) => new AnimatedStyle(style),
  getComponentProps: ({scrollTop, scrollLeft, ...props}) => props
});
var animated = host.animated;

// build/dist/components/animations/Fade/Fade.js
var FadeIn = (props) => {
  const items = Children2.toArray(props.children);
  const trail = useTrail(items.length, {
    from: {opacity: 0},
    to: {opacity: 1},
    config: {
      tension: 150
    }
  });
  return /* @__PURE__ */ react.createElement("div", {
    ...props
  }, /* @__PURE__ */ react.createElement("div", null, trail.map((props2, index) => /* @__PURE__ */ react.createElement(animated.div, {
    key: index.toString(),
    style: props2
  }, items[index]))));
};

// build/dist/styles/styles.js
var grayscale = {
  "50": "rgb(243, 243, 243)",
  "100": "rgb(239, 239, 239)",
  "200": "rgb(223, 223, 223)",
  "300": "rgb(202, 202, 202)",
  "400": "rgb(168, 168, 168)",
  "500": "rgb(122, 122, 122)",
  "600": "rgb(88, 88, 88)",
  "700": "rgb(63, 63, 63)",
  "800": "rgb(43, 43, 43)",
  "900": "rgb(35, 35, 35)"
};
var fonts = {
  PRIMARY: '"Calibre", "Inter", "San Francisco", "SF Pro Text", -apple-system,',
  SECONDARY: '"SF Mono","Fira Code","Fira Mono","Roboto Mono",monospace'
};
var Bold = styled_components_default.span`
  font-weight: 600;
  color: ${grayscale[900]};
  text-decoration: underline;
`;
var Link2 = styled_components_default.a`
  text-decoration: none;
  color: ${grayscale[900]};
`;

// build/dist/components/common/Button/Button.styles.js
var Button = styled_components_default.button`
  font-family: ${fonts.SECONDARY};
  padding: ${(props) => props.padding};
  border-radius: ${(props) => props.borderRadius};
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  margin: ${(props) => props.margin};
  transition: 0.2s;
  font-size: 1.2rem;
  text-decoration: none;
  transition: 0.2s;
  border-bottom: white;

  font-weight: 500;
  border: none;

  & a {
    margin: 0px;
  }

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }

  &:focus {
    outline: none;
  }
`;

// build/dist/components/common/Loading/Loading.styles.js
var Loader = styled_components_default.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 1.5rem;
  & p {
    font-size: 20px;
    color: ${grayscale[800]};
  }
`;
var Loading_styles_default = Loader;

// build/dist/components/common/Loading/Loading.js
var Loading = () => /* @__PURE__ */ react.createElement(Loading_styles_default, null, /* @__PURE__ */ react.createElement("p", null, "Loading..."));
var Loading_default = Loading;

// build/dist/styles/media.js
var size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "700px",
  tabletL: "992px",
  laptop: "1024px",
  laptopM: "1200px",
  laptopL: "1440px",
  desktop: "2560px"
};
var device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  tabletL: `(min-width: ${size.tabletL})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopM: `(min-width: ${size.laptopM})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
};
var CustomContainer = styled_components_default.div`
    width: ${(props) => props.width};
    display: ${(props) => props.display};
    height: ${(props) => props.height};
    padding: ${(props) => props.padding};
    margin: ${(props) => props.margin};
    max-width: ${(props) => props.maxWidth};
  min-height: ${(props) => props.minHeight};
`;

// build/dist/components/layout/Layout/Layout.styles.js
var Container = styled_components_default.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 5em;
`;
var ContainerInner = styled_components_default.div`
  width: 100%;
  & h2 {
    margin-top: 0px;
  }
  & p {
    font-size: 17px;
    color: ${grayscale[800]};
  }
  @media ${device.mobileS} {
    display: block;
  }

  @media ${device.tabletL} {
    display: block;
  }

  gap: 50px;
`;
var Heading = styled_components_default.div`
  position: relative;
  max-width: ${size.tablet};
  width: 100%;

  @media (max-width: ${size.tablet}) {
    box-sizing: border-box;
    width: 80%;
  }
`;

// build/dist/components/layout/Layout/Layout.js
var Layout = ({children}) => {
  return /* @__PURE__ */ react.createElement(Container, null, /* @__PURE__ */ react.createElement(Heading, null, children));
};
var Layout_default = Layout;

// build/dist/styles/variables.js
var grayscale2 = {
  50: "rgb(243, 243, 243)",
  100: "rgb(239, 239, 239)",
  200: "rgb(223, 223, 223)",
  300: "rgb(202, 202, 202)",
  400: "rgb(168, 168, 168)",
  500: "rgb(122, 122, 122)",
  600: "rgb(88, 88, 88)",
  700: "rgb(63, 63, 63)",
  800: "rgb(43, 43, 43)",
  900: "rgb(35, 35, 35)"
};

// build/dist/components/layout/Navbar/Navbar.styles.js
var NavbarContainer = styled_components_default.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;
var NavbarOptions = styled_components_default.div`
  display: flex;
  gap: 2em;
  transition: 0.2s;
  & p {
    margin: 0px;
    color: ${grayscale2[500]};
  }

  & p:hover {
    cursor: pointer;
    color: ${grayscale2[900]};
  }
`;

// build/dist/pages/Main/Main.styles.js
var Container2 = styled_components_default.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 5em;
`;
var Heading2 = styled_components_default.div`
  position: relative;
  max-width: ${size.tablet};
  width: 100%;
  @media (max-width: ${size.tablet}) {
    box-sizing: border-box;
    width: 80%;
  }
`;
var Navbar = styled_components_default.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;
var NavbarOptions2 = styled_components_default.div`
  display: flex;
  gap: 2em;
  transition: 0.2s;
  & p {
    margin: 0px;
    color: ${grayscale2[500]};
  }

  & p:hover {
    cursor: pointer;
    color: ${grayscale2[900]};
  }
`;
var ContainerInner2 = styled_components_default.div`
  width: 100%;
  & h2 {
    margin-top: 0px;
  }
  & p {
    font-size: 17px;
    color: ${grayscale2[800]};
  }
  @media ${device.mobileS} {
    display: block;
  }

  @media ${device.tabletL} {
    display: block;
  }

  gap: 50px;
`;
var Image = styled_components_default.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
  box-shadow: rgba(2, 12, 27, 0.6) 0px 10px 30px -15px;
`;
var Socials = styled_components_default.div`
  font-size: 1.5em;
`;
var Social = styled_components_default.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 20px;
  & p {
    margin: 0px;
    font-size: 16px;
  }
`;
var SocialLink = styled_components_default.a`
  text-decoration: none !important;

  color: ${grayscale2[500]};
  transition: 0.2s;

  &:hover {
    color: ${grayscale2[900]};
    cursor: pointer;
  }
`;
var Bar = styled_components_default.div`
  width: 40px;
  height: 1px;
  background-color: ${grayscale2[300]};
`;

// build/_snowpack/pkg/markdown-to-jsx.js
function t3() {
  return t3 = Object.assign ? Object.assign.bind() : function(e2) {
    for (var t4 = 1; t4 < arguments.length; t4++) {
      var n4 = arguments[t4];
      for (var r4 in n4)
        Object.prototype.hasOwnProperty.call(n4, r4) && (e2[r4] = n4[r4]);
    }
    return e2;
  }, t3.apply(this, arguments);
}
var n3 = ["children", "options"];
var r3 = {blockQuote: "0", breakLine: "1", breakThematic: "2", codeBlock: "3", codeFenced: "4", codeInline: "5", footnote: "6", footnoteReference: "7", gfmTask: "8", heading: "9", headingSetext: "10", htmlBlock: "11", htmlComment: "12", htmlSelfClosing: "13", image: "14", link: "15", linkAngleBraceStyleDetector: "16", linkBareUrlDetector: "17", linkMailtoDetector: "18", newlineCoalescer: "19", orderedList: "20", paragraph: "21", ref: "22", refImage: "23", refLink: "24", table: "25", tableSeparator: "26", text: "27", textBolded: "28", textEmphasized: "29", textEscaped: "30", textMarked: "31", textStrikethroughed: "32", unorderedList: "33"};
var i;
!function(e2) {
  e2[e2.MAX = 0] = "MAX", e2[e2.HIGH = 1] = "HIGH", e2[e2.MED = 2] = "MED", e2[e2.LOW = 3] = "LOW", e2[e2.MIN = 4] = "MIN";
}(i || (i = {}));
var l3 = ["allowFullScreen", "allowTransparency", "autoComplete", "autoFocus", "autoPlay", "cellPadding", "cellSpacing", "charSet", "classId", "colSpan", "contentEditable", "contextMenu", "crossOrigin", "encType", "formAction", "formEncType", "formMethod", "formNoValidate", "formTarget", "frameBorder", "hrefLang", "inputMode", "keyParams", "keyType", "marginHeight", "marginWidth", "maxLength", "mediaGroup", "minLength", "noValidate", "radioGroup", "readOnly", "rowSpan", "spellCheck", "srcDoc", "srcLang", "srcSet", "tabIndex", "useMap"].reduce((e2, t4) => (e2[t4.toLowerCase()] = t4, e2), {class: "className", for: "htmlFor"});
var a = {amp: "&", apos: "'", gt: ">", lt: "<", nbsp: " ", quot: "“"};
var o = ["style", "script"];
var c6 = /([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi;
var s = /mailto:/i;
var d2 = /\n{2,}$/;
var p4 = /^(\s*>[\s\S]*?)(?=\n\n|$)/;
var u2 = /^ *> ?/gm;
var f2 = /^(?:\[!([^\]]*)\]\n)?([\s\S]*)/;
var h2 = /^ {2,}\n/;
var m2 = /^(?:( *[-*_])){3,} *(?:\n *)+\n/;
var g2 = /^(?: {1,3})?(`{3,}|~{3,}) *(\S+)? *([^\n]*?)?\n([\s\S]*?)(?:\1\n?|$)/;
var y3 = /^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/;
var k2 = /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/;
var x3 = /^(?:\n *)*\n/;
var b2 = /\r\n?/g;
var v4 = /^\[\^([^\]]+)](:(.*)((\n+ {4,}.*)|(\n(?!\[\^).+))*)/;
var S4 = /^\[\^([^\]]+)]/;
var C4 = /\f/g;
var $2 = /^---[ \t]*\n(.|\n)*\n---[ \t]*\n/;
var E4 = /^\s*?\[(x|\s)\]/;
var w3 = /^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/;
var z4 = /^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/;
var L4 = /^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/;
var A4 = /^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?((?:[^>]*[^/])?)>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1\b)[\s\S])*?)<\/\1>(?!<\/\1>)\n*/i;
var T4 = /&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi;
var O3 = /^<!--[\s\S]*?(?:-->)/;
var B4 = /^(data|aria|x)-[a-z_][a-z\d_.-]*$/;
var M4 = /^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i;
var R3 = /^\{.*\}$/;
var I4 = /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/;
var U4 = /^<([^ >]+@[^ >]+)>/;
var D4 = /^<([^ >]+:\/[^ >]+)>/;
var N4 = /-([a-z])?/gi;
var j2 = /^(\|.*)\n(?: *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*))?\n?/;
var H4 = /^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/;
var P4 = /^!\[([^\]]*)\] ?\[([^\]]*)\]/;
var F3 = /^\[([^\]]*)\] ?\[([^\]]*)\]/;
var _2 = /(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/;
var G4 = /\t/g;
var W4 = /(^ *\||\| *$)/g;
var Z3 = /^ *:-+: *$/;
var q3 = /^ *:-+ *$/;
var Q4 = /^ *-+: *$/;
var V4 = "((?:\\[.*?\\][([].*?[)\\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~~.*?~~|==.*?==|.|\\n)*?)";
var X4 = new RegExp(`^([*_])\\1${V4}\\1\\1(?!\\1)`);
var J3 = new RegExp(`^([*_])${V4}\\1(?!\\1|\\w)`);
var K4 = new RegExp(`^==${V4}==`);
var Y3 = new RegExp(`^~~${V4}~~`);
var ee3 = /^\\([^0-9A-Za-z\s])/;
var te3 = /^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&#;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i;
var ne3 = /^\n+/;
var re3 = /^([ \t]*)/;
var ie3 = /\\([^\\])/g;
var le3 = / *\n+$/;
var ae3 = /(?:^|\n)( *)$/;
var oe3 = "(?:\\d+\\.)";
var ce3 = "(?:[*+-])";
function se3(e2) {
  return "( *)(" + (e2 === 1 ? oe3 : ce3) + ") +";
}
var de3 = se3(1);
var pe3 = se3(2);
function ue3(e2) {
  return new RegExp("^" + (e2 === 1 ? de3 : pe3));
}
var fe3 = ue3(1);
var he3 = ue3(2);
function me2(e2) {
  return new RegExp("^" + (e2 === 1 ? de3 : pe3) + "[^\\n]*(?:\\n(?!\\1" + (e2 === 1 ? oe3 : ce3) + " )[^\\n]*)*(\\n|$)", "gm");
}
var ge3 = me2(1);
var ye2 = me2(2);
function ke3(e2) {
  const t4 = e2 === 1 ? oe3 : ce3;
  return new RegExp("^( *)(" + t4 + ") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1" + t4 + " (?!" + t4 + " ))\\n*|\\s*\\n*$)");
}
var xe2 = ke3(1);
var be3 = ke3(2);
function ve3(e2, t4) {
  const n4 = t4 === 1, i2 = n4 ? xe2 : be3, l4 = n4 ? ge3 : ye2, a2 = n4 ? fe3 : he3;
  return {match(e3, t5) {
    const n5 = ae3.exec(t5.prevCapture);
    return n5 && (t5.list || !t5.inline && !t5.simple) ? i2.exec(e3 = n5[1] + e3) : null;
  }, order: 1, parse(e3, t5, r4) {
    const i3 = n4 ? +e3[2] : void 0, o2 = e3[0].replace(d2, "\n").match(l4);
    let c7 = false;
    return {items: o2.map(function(e4, n5) {
      const i4 = a2.exec(e4)[0].length, l5 = new RegExp("^ {1," + i4 + "}", "gm"), s2 = e4.replace(l5, "").replace(a2, ""), d3 = n5 === o2.length - 1, p5 = s2.indexOf("\n\n") !== -1 || d3 && c7;
      c7 = p5;
      const u3 = r4.inline, f3 = r4.list;
      let h3;
      r4.list = true, p5 ? (r4.inline = false, h3 = s2.replace(le3, "\n\n")) : (r4.inline = true, h3 = s2.replace(le3, ""));
      const m3 = t5(h3, r4);
      return r4.inline = u3, r4.list = f3, m3;
    }), ordered: n4, start: i3};
  }, render: (t5, n5, i3) => e2(t5.ordered ? "ol" : "ul", {key: i3.key, start: t5.type === r3.orderedList ? t5.start : void 0}, t5.items.map(function(t6, r4) {
    return e2("li", {key: r4}, n5(t6, i3));
  }))};
}
var Se3 = new RegExp(`^\\[((?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*)\\]\\(\\s*<?((?:\\([^)]*\\)|[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['"]([\\s\\S]*?)['"])?\\s*\\)`);
var Ce2 = /^!\[(.*?)\]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/;
var $e3 = [p4, g2, y3, w3, L4, z4, O3, j2, ge3, xe2, ye2, be3];
var Ee3 = [...$e3, /^[^\n]+(?:  \n|\n{2,})/, A4, M4];
function we3(e2) {
  return e2.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g, "a").replace(/[çÇ]/g, "c").replace(/[ðÐ]/g, "d").replace(/[ÈÉÊËéèêë]/g, "e").replace(/[ÏïÎîÍíÌì]/g, "i").replace(/[Ññ]/g, "n").replace(/[øØœŒÕõÔôÓóÒò]/g, "o").replace(/[ÜüÛûÚúÙù]/g, "u").replace(/[ŸÿÝý]/g, "y").replace(/[^a-z0-9- ]/gi, "").replace(/ /gi, "-").toLowerCase();
}
function ze2(e2) {
  return Q4.test(e2) ? "right" : Z3.test(e2) ? "center" : q3.test(e2) ? "left" : null;
}
function Le3(e2, t4, n4, i2) {
  const l4 = n4.inTable;
  n4.inTable = true;
  let a2 = e2.trim().split(/( *(?:`[^`]*`|\\\||\|) *)/).reduce((e3, l5) => (l5.trim() === "|" ? e3.push(i2 ? {type: r3.tableSeparator} : {type: r3.text, text: l5}) : l5 !== "" && e3.push.apply(e3, t4(l5, n4)), e3), []);
  n4.inTable = l4;
  let o2 = [[]];
  return a2.forEach(function(e3, t5) {
    e3.type === r3.tableSeparator ? t5 !== 0 && t5 !== a2.length - 1 && o2.push([]) : (e3.type !== r3.text || a2[t5 + 1] != null && a2[t5 + 1].type !== r3.tableSeparator || (e3.text = e3.text.trimEnd()), o2[o2.length - 1].push(e3));
  }), o2;
}
function Ae3(e2, t4, n4) {
  n4.inline = true;
  const i2 = e2[2] ? e2[2].replace(W4, "").split("|").map(ze2) : [], l4 = e2[3] ? function(e3, t5, n5) {
    return e3.trim().split("\n").map(function(e4) {
      return Le3(e4, t5, n5, true);
    });
  }(e2[3], t4, n4) : [], a2 = Le3(e2[1], t4, n4, !!l4.length);
  return n4.inline = false, l4.length ? {align: i2, cells: l4, header: a2, type: r3.table} : {children: a2, type: r3.paragraph};
}
function Te3(e2, t4) {
  return e2.align[t4] == null ? {} : {textAlign: e2.align[t4]};
}
function Oe3(e2) {
  return function(t4, n4) {
    return n4.inline ? e2.exec(t4) : null;
  };
}
function Be3(e2) {
  return function(t4, n4) {
    return n4.inline || n4.simple ? e2.exec(t4) : null;
  };
}
function Me3(e2) {
  return function(t4, n4) {
    return n4.inline || n4.simple ? null : e2.exec(t4);
  };
}
function Re3(e2) {
  return function(t4) {
    return e2.exec(t4);
  };
}
function Ie2(e2, t4) {
  if (t4.inline || t4.simple)
    return null;
  let n4 = "";
  e2.split("\n").every((e3) => !$e3.some((t5) => t5.test(e3)) && (n4 += e3 + "\n", e3.trim()));
  const r4 = n4.trimEnd();
  return r4 == "" ? null : [n4, r4];
}
function Ue2(e2) {
  try {
    if (decodeURIComponent(e2).replace(/[^A-Za-z0-9/:]/g, "").match(/^\s*(javascript|vbscript|data(?!:image)):/i))
      return null;
  } catch (e3) {
    return null;
  }
  return e2;
}
function De3(e2) {
  return e2.replace(ie3, "$1");
}
function Ne3(e2, t4, n4) {
  const r4 = n4.inline || false, i2 = n4.simple || false;
  n4.inline = true, n4.simple = true;
  const l4 = e2(t4, n4);
  return n4.inline = r4, n4.simple = i2, l4;
}
function je3(e2, t4, n4) {
  const r4 = n4.inline || false, i2 = n4.simple || false;
  n4.inline = false, n4.simple = true;
  const l4 = e2(t4, n4);
  return n4.inline = r4, n4.simple = i2, l4;
}
function He3(e2, t4, n4) {
  const r4 = n4.inline || false;
  n4.inline = false;
  const i2 = e2(t4, n4);
  return n4.inline = r4, i2;
}
var Pe2 = (e2, t4, n4) => ({children: Ne3(t4, e2[1], n4)});
function Fe3() {
  return {};
}
function _e2() {
  return null;
}
function Ge3(...e2) {
  return e2.filter(Boolean).join(" ");
}
function We2(e2, t4, n4) {
  let r4 = e2;
  const i2 = t4.split(".");
  for (; i2.length && (r4 = r4[i2[0]], r4 !== void 0); )
    i2.shift();
  return r4 || n4;
}
function Ze2(n4 = "", i2 = {}) {
  function d3(e2, n5, ...r4) {
    const l4 = We2(i2.overrides, `${e2}.props`, {});
    return i2.createElement(function(e3, t4) {
      const n6 = We2(t4, e3);
      return n6 ? typeof n6 == "function" || typeof n6 == "object" && "render" in n6 ? n6 : We2(t4, `${e3}.component`, e3) : e3;
    }(e2, i2.overrides), t3({}, n5, l4, {className: Ge3(n5 == null ? void 0 : n5.className, l4.className) || void 0}), ...r4);
  }
  function W5(e2) {
    e2 = e2.replace($2, "");
    let t4 = false;
    i2.forceInline ? t4 = true : i2.forceBlock || (t4 = _2.test(e2) === false);
    const n5 = le4(ie4(t4 ? e2 : `${e2.trimEnd().replace(ne3, "")}

`, {inline: t4}));
    for (; typeof n5[n5.length - 1] == "string" && !n5[n5.length - 1].trim(); )
      n5.pop();
    if (i2.wrapper === null)
      return n5;
    const r4 = i2.wrapper || (t4 ? "span" : "div");
    let l4;
    if (n5.length > 1 || i2.forceWrapper)
      l4 = n5;
    else {
      if (n5.length === 1)
        return l4 = n5[0], typeof l4 == "string" ? d3("span", {key: "outer"}, l4) : l4;
      l4 = null;
    }
    return i2.createElement(r4, {key: "outer"}, l4);
  }
  function Z4(e2, t4) {
    const n5 = t4.match(c6);
    return n5 ? n5.reduce(function(t5, n6, r4) {
      const a2 = n6.indexOf("=");
      if (a2 !== -1) {
        const r5 = function(e3) {
          return e3.indexOf("-") !== -1 && e3.match(B4) === null && (e3 = e3.replace(N4, function(e4, t6) {
            return t6.toUpperCase();
          })), e3;
        }(n6.slice(0, a2)).trim(), o2 = function(e3) {
          const t6 = e3[0];
          return (t6 === '"' || t6 === "'") && e3.length >= 2 && e3[e3.length - 1] === t6 ? e3.slice(1, -1) : e3;
        }(n6.slice(a2 + 1).trim()), c7 = l3[r5] || r5;
        if (c7 === "ref")
          return t5;
        const s2 = t5[c7] = function(e3, t6, n7, r6) {
          return t6 === "style" ? n7.split(/;\s?/).reduce(function(e4, t7) {
            const n8 = t7.slice(0, t7.indexOf(":"));
            return e4[n8.trim().replace(/(-[a-z])/g, (e5) => e5[1].toUpperCase())] = t7.slice(n8.length + 1).trim(), e4;
          }, {}) : t6 === "href" || t6 === "src" ? r6(n7, e3, t6) : (n7.match(R3) && (n7 = n7.slice(1, n7.length - 1)), n7 === "true" || n7 !== "false" && n7);
        }(e2, r5, o2, i2.sanitizer);
        typeof s2 == "string" && (A4.test(s2) || M4.test(s2)) && (t5[c7] = W5(s2.trim()));
      } else
        n6 !== "style" && (t5[l3[n6] || n6] = true);
      return t5;
    }, {}) : null;
  }
  i2.overrides = i2.overrides || {}, i2.sanitizer = i2.sanitizer || Ue2, i2.slugify = i2.slugify || we3, i2.namedCodesToUnicode = i2.namedCodesToUnicode ? t3({}, a, i2.namedCodesToUnicode) : a, i2.createElement = i2.createElement || react.createElement;
  const q4 = [], Q5 = {}, V5 = {[r3.blockQuote]: {match: Me3(p4), order: 1, parse(e2, t4, n5) {
    const [, r4, i3] = e2[0].replace(u2, "").match(f2);
    return {alert: r4, children: t4(i3, n5)};
  }, render(e2, t4, n5) {
    const l4 = {key: n5.key};
    return e2.alert && (l4.className = "markdown-alert-" + i2.slugify(e2.alert.toLowerCase(), we3), e2.children.unshift({attrs: {}, children: [{type: r3.text, text: e2.alert}], noInnerParse: true, type: r3.htmlBlock, tag: "header"})), d3("blockquote", l4, t4(e2.children, n5));
  }}, [r3.breakLine]: {match: Re3(h2), order: 1, parse: Fe3, render: (e2, t4, n5) => d3("br", {key: n5.key})}, [r3.breakThematic]: {match: Me3(m2), order: 1, parse: Fe3, render: (e2, t4, n5) => d3("hr", {key: n5.key})}, [r3.codeBlock]: {match: Me3(y3), order: 0, parse: (e2) => ({lang: void 0, text: e2[0].replace(/^ {4}/gm, "").replace(/\n+$/, "")}), render: (e2, n5, r4) => d3("pre", {key: r4.key}, d3("code", t3({}, e2.attrs, {className: e2.lang ? `lang-${e2.lang}` : ""}), e2.text))}, [r3.codeFenced]: {match: Me3(g2), order: 0, parse: (e2) => ({attrs: Z4("code", e2[3] || ""), lang: e2[2] || void 0, text: e2[4], type: r3.codeBlock})}, [r3.codeInline]: {match: Be3(k2), order: 3, parse: (e2) => ({text: e2[2]}), render: (e2, t4, n5) => d3("code", {key: n5.key}, e2.text)}, [r3.footnote]: {match: Me3(v4), order: 0, parse: (e2) => (q4.push({footnote: e2[2], identifier: e2[1]}), {}), render: _e2}, [r3.footnoteReference]: {match: Oe3(S4), order: 1, parse: (e2) => ({target: `#${i2.slugify(e2[1], we3)}`, text: e2[1]}), render: (e2, t4, n5) => d3("a", {key: n5.key, href: i2.sanitizer(e2.target, "a", "href")}, d3("sup", {key: n5.key}, e2.text))}, [r3.gfmTask]: {match: Oe3(E4), order: 1, parse: (e2) => ({completed: e2[1].toLowerCase() === "x"}), render: (e2, t4, n5) => d3("input", {checked: e2.completed, key: n5.key, readOnly: true, type: "checkbox"})}, [r3.heading]: {match: Me3(i2.enforceAtxHeadings ? z4 : w3), order: 1, parse: (e2, t4, n5) => ({children: Ne3(t4, e2[2], n5), id: i2.slugify(e2[2], we3), level: e2[1].length}), render: (e2, t4, n5) => d3(`h${e2.level}`, {id: e2.id, key: n5.key}, t4(e2.children, n5))}, [r3.headingSetext]: {match: Me3(L4), order: 0, parse: (e2, t4, n5) => ({children: Ne3(t4, e2[1], n5), level: e2[2] === "=" ? 1 : 2, type: r3.heading})}, [r3.htmlBlock]: {match: Re3(A4), order: 1, parse(e2, t4, n5) {
    const [, r4] = e2[3].match(re3), i3 = new RegExp(`^${r4}`, "gm"), l4 = e2[3].replace(i3, ""), a2 = (c7 = l4, Ee3.some((e3) => e3.test(c7)) ? He3 : Ne3);
    var c7;
    const s2 = e2[1].toLowerCase(), d4 = o.indexOf(s2) !== -1, p5 = (d4 ? s2 : e2[1]).trim(), u3 = {attrs: Z4(p5, e2[2]), noInnerParse: d4, tag: p5};
    return n5.inAnchor = n5.inAnchor || s2 === "a", d4 ? u3.text = e2[3] : u3.children = a2(t4, l4, n5), n5.inAnchor = false, u3;
  }, render: (e2, n5, r4) => d3(e2.tag, t3({key: r4.key}, e2.attrs), e2.text || (e2.children ? n5(e2.children, r4) : ""))}, [r3.htmlSelfClosing]: {match: Re3(M4), order: 1, parse(e2) {
    const t4 = e2[1].trim();
    return {attrs: Z4(t4, e2[2] || ""), tag: t4};
  }, render: (e2, n5, r4) => d3(e2.tag, t3({}, e2.attrs, {key: r4.key}))}, [r3.htmlComment]: {match: Re3(O3), order: 1, parse: () => ({}), render: _e2}, [r3.image]: {match: Be3(Ce2), order: 1, parse: (e2) => ({alt: e2[1], target: De3(e2[2]), title: e2[3]}), render: (e2, t4, n5) => d3("img", {key: n5.key, alt: e2.alt || void 0, title: e2.title || void 0, src: i2.sanitizer(e2.target, "img", "src")})}, [r3.link]: {match: Oe3(Se3), order: 3, parse: (e2, t4, n5) => ({children: je3(t4, e2[1], n5), target: De3(e2[2]), title: e2[3]}), render: (e2, t4, n5) => d3("a", {key: n5.key, href: i2.sanitizer(e2.target, "a", "href"), title: e2.title}, t4(e2.children, n5))}, [r3.linkAngleBraceStyleDetector]: {match: Oe3(D4), order: 0, parse: (e2) => ({children: [{text: e2[1], type: r3.text}], target: e2[1], type: r3.link})}, [r3.linkBareUrlDetector]: {match: (e2, t4) => t4.inAnchor || i2.disableAutoLink ? null : Oe3(I4)(e2, t4), order: 0, parse: (e2) => ({children: [{text: e2[1], type: r3.text}], target: e2[1], title: void 0, type: r3.link})}, [r3.linkMailtoDetector]: {match: Oe3(U4), order: 0, parse(e2) {
    let t4 = e2[1], n5 = e2[1];
    return s.test(n5) || (n5 = "mailto:" + n5), {children: [{text: t4.replace("mailto:", ""), type: r3.text}], target: n5, type: r3.link};
  }}, [r3.orderedList]: ve3(d3, 1), [r3.unorderedList]: ve3(d3, 2), [r3.newlineCoalescer]: {match: Me3(x3), order: 3, parse: Fe3, render: () => "\n"}, [r3.paragraph]: {match: Ie2, order: 3, parse: Pe2, render: (e2, t4, n5) => d3("p", {key: n5.key}, t4(e2.children, n5))}, [r3.ref]: {match: Oe3(H4), order: 0, parse: (e2) => (Q5[e2[1]] = {target: e2[2], title: e2[4]}, {}), render: _e2}, [r3.refImage]: {match: Be3(P4), order: 0, parse: (e2) => ({alt: e2[1] || void 0, ref: e2[2]}), render: (e2, t4, n5) => Q5[e2.ref] ? d3("img", {key: n5.key, alt: e2.alt, src: i2.sanitizer(Q5[e2.ref].target, "img", "src"), title: Q5[e2.ref].title}) : null}, [r3.refLink]: {match: Oe3(F3), order: 0, parse: (e2, t4, n5) => ({children: t4(e2[1], n5), fallbackChildren: e2[0], ref: e2[2]}), render: (e2, t4, n5) => Q5[e2.ref] ? d3("a", {key: n5.key, href: i2.sanitizer(Q5[e2.ref].target, "a", "href"), title: Q5[e2.ref].title}, t4(e2.children, n5)) : d3("span", {key: n5.key}, e2.fallbackChildren)}, [r3.table]: {match: Me3(j2), order: 1, parse: Ae3, render(e2, t4, n5) {
    const r4 = e2;
    return d3("table", {key: n5.key}, d3("thead", null, d3("tr", null, r4.header.map(function(e3, i3) {
      return d3("th", {key: i3, style: Te3(r4, i3)}, t4(e3, n5));
    }))), d3("tbody", null, r4.cells.map(function(e3, i3) {
      return d3("tr", {key: i3}, e3.map(function(e4, i4) {
        return d3("td", {key: i4, style: Te3(r4, i4)}, t4(e4, n5));
      }));
    })));
  }}, [r3.text]: {match: Re3(te3), order: 4, parse: (e2) => ({text: e2[0].replace(T4, (e3, t4) => i2.namedCodesToUnicode[t4] ? i2.namedCodesToUnicode[t4] : e3)}), render: (e2) => e2.text}, [r3.textBolded]: {match: Be3(X4), order: 2, parse: (e2, t4, n5) => ({children: t4(e2[2], n5)}), render: (e2, t4, n5) => d3("strong", {key: n5.key}, t4(e2.children, n5))}, [r3.textEmphasized]: {match: Be3(J3), order: 3, parse: (e2, t4, n5) => ({children: t4(e2[2], n5)}), render: (e2, t4, n5) => d3("em", {key: n5.key}, t4(e2.children, n5))}, [r3.textEscaped]: {match: Be3(ee3), order: 1, parse: (e2) => ({text: e2[1], type: r3.text})}, [r3.textMarked]: {match: Be3(K4), order: 3, parse: Pe2, render: (e2, t4, n5) => d3("mark", {key: n5.key}, t4(e2.children, n5))}, [r3.textStrikethroughed]: {match: Be3(Y3), order: 3, parse: Pe2, render: (e2, t4, n5) => d3("del", {key: n5.key}, t4(e2.children, n5))}};
  i2.disableParsingRawHTML === true && (delete V5[r3.htmlBlock], delete V5[r3.htmlSelfClosing]);
  const ie4 = function(e2) {
    let t4 = Object.keys(e2);
    function n5(r4, i3) {
      let l4 = [];
      for (i3.prevCapture = i3.prevCapture || ""; r4; ) {
        let a2 = 0;
        for (; a2 < t4.length; ) {
          const o2 = t4[a2], c7 = e2[o2], s2 = c7.match(r4, i3);
          if (s2) {
            const e3 = s2[0];
            i3.prevCapture += e3, r4 = r4.substring(e3.length);
            const t5 = c7.parse(s2, n5, i3);
            t5.type == null && (t5.type = o2), l4.push(t5);
            break;
          }
          a2++;
        }
      }
      return i3.prevCapture = "", l4;
    }
    return t4.sort(function(t5, n6) {
      let r4 = e2[t5].order, i3 = e2[n6].order;
      return r4 !== i3 ? r4 - i3 : t5 < n6 ? -1 : 1;
    }), function(e3, t5) {
      return n5(function(e4) {
        return e4.replace(b2, "\n").replace(C4, "").replace(G4, "    ");
      }(e3), t5);
    };
  }(V5), le4 = (ae4 = function(e2, t4) {
    return function(n5, r4, i3) {
      const l4 = e2[n5.type].render;
      return t4 ? t4(() => l4(n5, r4, i3), n5, r4, i3) : l4(n5, r4, i3);
    };
  }(V5, i2.renderRule), function e2(t4, n5 = {}) {
    if (Array.isArray(t4)) {
      const r4 = n5.key, i3 = [];
      let l4 = false;
      for (let r5 = 0; r5 < t4.length; r5++) {
        n5.key = r5;
        const a2 = e2(t4[r5], n5), o2 = typeof a2 == "string";
        o2 && l4 ? i3[i3.length - 1] += a2 : a2 !== null && i3.push(a2), l4 = o2;
      }
      return n5.key = r4, i3;
    }
    return ae4(t4, e2, n5);
  });
  var ae4;
  const oe4 = W5(n4);
  return q4.length ? d3("div", null, oe4, d3("footer", {key: "footer"}, q4.map(function(e2) {
    return d3("div", {id: i2.slugify(e2.identifier, we3), key: e2.identifier}, e2.identifier, le4(ie4(e2.footnote, {inline: true})));
  }))) : oe4;
}
var __pika_web_default_export_for_treeshaking__ = (t4) => {
  let {children: r4 = "", options: i2} = t4, l4 = function(e2, t5) {
    if (e2 == null)
      return {};
    var n4, r5, i3 = {}, l5 = Object.keys(e2);
    for (r5 = 0; r5 < l5.length; r5++)
      t5.indexOf(n4 = l5[r5]) >= 0 || (i3[n4] = e2[n4]);
    return i3;
  }(t4, n3);
  return react.cloneElement(Ze2(r4, i2), l4);
};
var markdown_to_jsx_default = __pika_web_default_export_for_treeshaking__;

// build/_snowpack/pkg/prismjs.js
var prism = createCommonjsModule(function(module) {
  var _self = typeof window !== "undefined" ? window : typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope ? self : {};
  /**
   * Prism: Lightweight, robust, elegant syntax highlighting
   *
   * @license MIT <https://opensource.org/licenses/MIT>
   * @author Lea Verou <https://lea.verou.me>
   * @namespace
   * @public
   */
  var Prism2 = function(_self2) {
    var lang = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i;
    var uniqueId = 0;
    var plainTextGrammar = {};
    var _3 = {
      manual: _self2.Prism && _self2.Prism.manual,
      disableWorkerMessageHandler: _self2.Prism && _self2.Prism.disableWorkerMessageHandler,
      util: {
        encode: function encode(tokens) {
          if (tokens instanceof Token) {
            return new Token(tokens.type, encode(tokens.content), tokens.alias);
          } else if (Array.isArray(tokens)) {
            return tokens.map(encode);
          } else {
            return tokens.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
          }
        },
        type: function(o2) {
          return Object.prototype.toString.call(o2).slice(8, -1);
        },
        objId: function(obj) {
          if (!obj["__id"]) {
            Object.defineProperty(obj, "__id", {value: ++uniqueId});
          }
          return obj["__id"];
        },
        clone: function deepClone(o2, visited) {
          visited = visited || {};
          var clone;
          var id2;
          switch (_3.util.type(o2)) {
            case "Object":
              id2 = _3.util.objId(o2);
              if (visited[id2]) {
                return visited[id2];
              }
              clone = {};
              visited[id2] = clone;
              for (var key in o2) {
                if (o2.hasOwnProperty(key)) {
                  clone[key] = deepClone(o2[key], visited);
                }
              }
              return clone;
            case "Array":
              id2 = _3.util.objId(o2);
              if (visited[id2]) {
                return visited[id2];
              }
              clone = [];
              visited[id2] = clone;
              o2.forEach(function(v5, i2) {
                clone[i2] = deepClone(v5, visited);
              });
              return clone;
            default:
              return o2;
          }
        },
        getLanguage: function(element) {
          while (element) {
            var m3 = lang.exec(element.className);
            if (m3) {
              return m3[1].toLowerCase();
            }
            element = element.parentElement;
          }
          return "none";
        },
        setLanguage: function(element, language) {
          element.className = element.className.replace(RegExp(lang, "gi"), "");
          element.classList.add("language-" + language);
        },
        currentScript: function() {
          if (typeof document === "undefined") {
            return null;
          }
          if ("currentScript" in document && 1 < 2) {
            return document.currentScript;
          }
          try {
            throw new Error();
          } catch (err) {
            var src = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(err.stack) || [])[1];
            if (src) {
              var scripts = document.getElementsByTagName("script");
              for (var i2 in scripts) {
                if (scripts[i2].src == src) {
                  return scripts[i2];
                }
              }
            }
            return null;
          }
        },
        isActive: function(element, className, defaultActivation) {
          var no = "no-" + className;
          while (element) {
            var classList = element.classList;
            if (classList.contains(className)) {
              return true;
            }
            if (classList.contains(no)) {
              return false;
            }
            element = element.parentElement;
          }
          return !!defaultActivation;
        }
      },
      languages: {
        plain: plainTextGrammar,
        plaintext: plainTextGrammar,
        text: plainTextGrammar,
        txt: plainTextGrammar,
        extend: function(id2, redef) {
          var lang2 = _3.util.clone(_3.languages[id2]);
          for (var key in redef) {
            lang2[key] = redef[key];
          }
          return lang2;
        },
        insertBefore: function(inside, before, insert, root) {
          root = root || _3.languages;
          var grammar = root[inside];
          var ret = {};
          for (var token in grammar) {
            if (grammar.hasOwnProperty(token)) {
              if (token == before) {
                for (var newToken in insert) {
                  if (insert.hasOwnProperty(newToken)) {
                    ret[newToken] = insert[newToken];
                  }
                }
              }
              if (!insert.hasOwnProperty(token)) {
                ret[token] = grammar[token];
              }
            }
          }
          var old = root[inside];
          root[inside] = ret;
          _3.languages.DFS(_3.languages, function(key, value) {
            if (value === old && key != inside) {
              this[key] = ret;
            }
          });
          return ret;
        },
        DFS: function DFS(o2, callback, type, visited) {
          visited = visited || {};
          var objId = _3.util.objId;
          for (var i2 in o2) {
            if (o2.hasOwnProperty(i2)) {
              callback.call(o2, i2, o2[i2], type || i2);
              var property = o2[i2];
              var propertyType = _3.util.type(property);
              if (propertyType === "Object" && !visited[objId(property)]) {
                visited[objId(property)] = true;
                DFS(property, callback, null, visited);
              } else if (propertyType === "Array" && !visited[objId(property)]) {
                visited[objId(property)] = true;
                DFS(property, callback, i2, visited);
              }
            }
          }
        }
      },
      plugins: {},
      highlightAll: function(async, callback) {
        _3.highlightAllUnder(document, async, callback);
      },
      highlightAllUnder: function(container, async, callback) {
        var env = {
          callback,
          container,
          selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
        };
        _3.hooks.run("before-highlightall", env);
        env.elements = Array.prototype.slice.apply(env.container.querySelectorAll(env.selector));
        _3.hooks.run("before-all-elements-highlight", env);
        for (var i2 = 0, element; element = env.elements[i2++]; ) {
          _3.highlightElement(element, async === true, env.callback);
        }
      },
      highlightElement: function(element, async, callback) {
        var language = _3.util.getLanguage(element);
        var grammar = _3.languages[language];
        _3.util.setLanguage(element, language);
        var parent = element.parentElement;
        if (parent && parent.nodeName.toLowerCase() === "pre") {
          _3.util.setLanguage(parent, language);
        }
        var code = element.textContent;
        var env = {
          element,
          language,
          grammar,
          code
        };
        function insertHighlightedCode(highlightedCode) {
          env.highlightedCode = highlightedCode;
          _3.hooks.run("before-insert", env);
          env.element.innerHTML = env.highlightedCode;
          _3.hooks.run("after-highlight", env);
          _3.hooks.run("complete", env);
          callback && callback.call(env.element);
        }
        _3.hooks.run("before-sanity-check", env);
        parent = env.element.parentElement;
        if (parent && parent.nodeName.toLowerCase() === "pre" && !parent.hasAttribute("tabindex")) {
          parent.setAttribute("tabindex", "0");
        }
        if (!env.code) {
          _3.hooks.run("complete", env);
          callback && callback.call(env.element);
          return;
        }
        _3.hooks.run("before-highlight", env);
        if (!env.grammar) {
          insertHighlightedCode(_3.util.encode(env.code));
          return;
        }
        if (async && _self2.Worker) {
          var worker = new Worker(_3.filename);
          worker.onmessage = function(evt) {
            insertHighlightedCode(evt.data);
          };
          worker.postMessage(JSON.stringify({
            language: env.language,
            code: env.code,
            immediateClose: true
          }));
        } else {
          insertHighlightedCode(_3.highlight(env.code, env.grammar, env.language));
        }
      },
      highlight: function(text, grammar, language) {
        var env = {
          code: text,
          grammar,
          language
        };
        _3.hooks.run("before-tokenize", env);
        if (!env.grammar) {
          throw new Error('The language "' + env.language + '" has no grammar.');
        }
        env.tokens = _3.tokenize(env.code, env.grammar);
        _3.hooks.run("after-tokenize", env);
        return Token.stringify(_3.util.encode(env.tokens), env.language);
      },
      tokenize: function(text, grammar) {
        var rest = grammar.rest;
        if (rest) {
          for (var token in rest) {
            grammar[token] = rest[token];
          }
          delete grammar.rest;
        }
        var tokenList = new LinkedList();
        addAfter(tokenList, tokenList.head, text);
        matchGrammar(text, tokenList, grammar, tokenList.head, 0);
        return toArray2(tokenList);
      },
      hooks: {
        all: {},
        add: function(name, callback) {
          var hooks = _3.hooks.all;
          hooks[name] = hooks[name] || [];
          hooks[name].push(callback);
        },
        run: function(name, env) {
          var callbacks = _3.hooks.all[name];
          if (!callbacks || !callbacks.length) {
            return;
          }
          for (var i2 = 0, callback; callback = callbacks[i2++]; ) {
            callback(env);
          }
        }
      },
      Token
    };
    _self2.Prism = _3;
    function Token(type, content, alias, matchedStr) {
      this.type = type;
      this.content = content;
      this.alias = alias;
      this.length = (matchedStr || "").length | 0;
    }
    Token.stringify = function stringify(o2, language) {
      if (typeof o2 == "string") {
        return o2;
      }
      if (Array.isArray(o2)) {
        var s2 = "";
        o2.forEach(function(e2) {
          s2 += stringify(e2, language);
        });
        return s2;
      }
      var env = {
        type: o2.type,
        content: stringify(o2.content, language),
        tag: "span",
        classes: ["token", o2.type],
        attributes: {},
        language
      };
      var aliases = o2.alias;
      if (aliases) {
        if (Array.isArray(aliases)) {
          Array.prototype.push.apply(env.classes, aliases);
        } else {
          env.classes.push(aliases);
        }
      }
      _3.hooks.run("wrap", env);
      var attributes = "";
      for (var name in env.attributes) {
        attributes += " " + name + '="' + (env.attributes[name] || "").replace(/"/g, "&quot;") + '"';
      }
      return "<" + env.tag + ' class="' + env.classes.join(" ") + '"' + attributes + ">" + env.content + "</" + env.tag + ">";
    };
    function matchPattern(pattern, pos, text, lookbehind) {
      pattern.lastIndex = pos;
      var match = pattern.exec(text);
      if (match && lookbehind && match[1]) {
        var lookbehindLength = match[1].length;
        match.index += lookbehindLength;
        match[0] = match[0].slice(lookbehindLength);
      }
      return match;
    }
    function matchGrammar(text, tokenList, grammar, startNode, startPos, rematch) {
      for (var token in grammar) {
        if (!grammar.hasOwnProperty(token) || !grammar[token]) {
          continue;
        }
        var patterns = grammar[token];
        patterns = Array.isArray(patterns) ? patterns : [patterns];
        for (var j3 = 0; j3 < patterns.length; ++j3) {
          if (rematch && rematch.cause == token + "," + j3) {
            return;
          }
          var patternObj = patterns[j3];
          var inside = patternObj.inside;
          var lookbehind = !!patternObj.lookbehind;
          var greedy = !!patternObj.greedy;
          var alias = patternObj.alias;
          if (greedy && !patternObj.pattern.global) {
            var flags = patternObj.pattern.toString().match(/[imsuy]*$/)[0];
            patternObj.pattern = RegExp(patternObj.pattern.source, flags + "g");
          }
          var pattern = patternObj.pattern || patternObj;
          for (var currentNode = startNode.next, pos = startPos; currentNode !== tokenList.tail; pos += currentNode.value.length, currentNode = currentNode.next) {
            if (rematch && pos >= rematch.reach) {
              break;
            }
            var str = currentNode.value;
            if (tokenList.length > text.length) {
              return;
            }
            if (str instanceof Token) {
              continue;
            }
            var removeCount = 1;
            var match;
            if (greedy) {
              match = matchPattern(pattern, pos, text, lookbehind);
              if (!match || match.index >= text.length) {
                break;
              }
              var from = match.index;
              var to2 = match.index + match[0].length;
              var p5 = pos;
              p5 += currentNode.value.length;
              while (from >= p5) {
                currentNode = currentNode.next;
                p5 += currentNode.value.length;
              }
              p5 -= currentNode.value.length;
              pos = p5;
              if (currentNode.value instanceof Token) {
                continue;
              }
              for (var k3 = currentNode; k3 !== tokenList.tail && (p5 < to2 || typeof k3.value === "string"); k3 = k3.next) {
                removeCount++;
                p5 += k3.value.length;
              }
              removeCount--;
              str = text.slice(pos, p5);
              match.index -= pos;
            } else {
              match = matchPattern(pattern, 0, str, lookbehind);
              if (!match) {
                continue;
              }
            }
            var from = match.index;
            var matchStr = match[0];
            var before = str.slice(0, from);
            var after = str.slice(from + matchStr.length);
            var reach = pos + str.length;
            if (rematch && reach > rematch.reach) {
              rematch.reach = reach;
            }
            var removeFrom = currentNode.prev;
            if (before) {
              removeFrom = addAfter(tokenList, removeFrom, before);
              pos += before.length;
            }
            removeRange(tokenList, removeFrom, removeCount);
            var wrapped = new Token(token, inside ? _3.tokenize(matchStr, inside) : matchStr, alias, matchStr);
            currentNode = addAfter(tokenList, removeFrom, wrapped);
            if (after) {
              addAfter(tokenList, currentNode, after);
            }
            if (removeCount > 1) {
              var nestedRematch = {
                cause: token + "," + j3,
                reach
              };
              matchGrammar(text, tokenList, grammar, currentNode.prev, pos, nestedRematch);
              if (rematch && nestedRematch.reach > rematch.reach) {
                rematch.reach = nestedRematch.reach;
              }
            }
          }
        }
      }
    }
    function LinkedList() {
      var head = {value: null, prev: null, next: null};
      var tail = {value: null, prev: head, next: null};
      head.next = tail;
      this.head = head;
      this.tail = tail;
      this.length = 0;
    }
    function addAfter(list, node, value) {
      var next = node.next;
      var newNode = {value, prev: node, next};
      node.next = newNode;
      next.prev = newNode;
      list.length++;
      return newNode;
    }
    function removeRange(list, node, count) {
      var next = node.next;
      for (var i2 = 0; i2 < count && next !== list.tail; i2++) {
        next = next.next;
      }
      node.next = next;
      next.prev = node;
      list.length -= i2;
    }
    function toArray2(list) {
      var array = [];
      var node = list.head.next;
      while (node !== list.tail) {
        array.push(node.value);
        node = node.next;
      }
      return array;
    }
    if (!_self2.document) {
      if (!_self2.addEventListener) {
        return _3;
      }
      if (!_3.disableWorkerMessageHandler) {
        _self2.addEventListener("message", function(evt) {
          var message = JSON.parse(evt.data);
          var lang2 = message.language;
          var code = message.code;
          var immediateClose = message.immediateClose;
          _self2.postMessage(_3.highlight(code, _3.languages[lang2], lang2));
          if (immediateClose) {
            _self2.close();
          }
        }, false);
      }
      return _3;
    }
    var script = _3.util.currentScript();
    if (script) {
      _3.filename = script.src;
      if (script.hasAttribute("data-manual")) {
        _3.manual = true;
      }
    }
    function highlightAutomaticallyCallback() {
      if (!_3.manual) {
        _3.highlightAll();
      }
    }
    if (!_3.manual) {
      var readyState = document.readyState;
      if (readyState === "loading" || readyState === "interactive" && script && script.defer) {
        document.addEventListener("DOMContentLoaded", highlightAutomaticallyCallback);
      } else {
        if (window.requestAnimationFrame) {
          window.requestAnimationFrame(highlightAutomaticallyCallback);
        } else {
          window.setTimeout(highlightAutomaticallyCallback, 16);
        }
      }
    }
    return _3;
  }(_self);
  if (module.exports) {
    module.exports = Prism2;
  }
  if (typeof commonjsGlobal !== "undefined") {
    commonjsGlobal.Prism = Prism2;
  }
  Prism2.languages.markup = {
    comment: {
      pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
      greedy: true
    },
    prolog: {
      pattern: /<\?[\s\S]+?\?>/,
      greedy: true
    },
    doctype: {
      pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
      greedy: true,
      inside: {
        "internal-subset": {
          pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
          lookbehind: true,
          greedy: true,
          inside: null
        },
        string: {
          pattern: /"[^"]*"|'[^']*'/,
          greedy: true
        },
        punctuation: /^<!|>$|[[\]]/,
        "doctype-tag": /^DOCTYPE/i,
        name: /[^\s<>'"]+/
      }
    },
    cdata: {
      pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
      greedy: true
    },
    tag: {
      pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
      greedy: true,
      inside: {
        tag: {
          pattern: /^<\/?[^\s>\/]+/,
          inside: {
            punctuation: /^<\/?/,
            namespace: /^[^\s>\/:]+:/
          }
        },
        "special-attr": [],
        "attr-value": {
          pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
          inside: {
            punctuation: [
              {
                pattern: /^=/,
                alias: "attr-equals"
              },
              {
                pattern: /^(\s*)["']|["']$/,
                lookbehind: true
              }
            ]
          }
        },
        punctuation: /\/?>/,
        "attr-name": {
          pattern: /[^\s>\/]+/,
          inside: {
            namespace: /^[^\s>\/:]+:/
          }
        }
      }
    },
    entity: [
      {
        pattern: /&[\da-z]{1,8};/i,
        alias: "named-entity"
      },
      /&#x?[\da-f]{1,8};/i
    ]
  };
  Prism2.languages.markup["tag"].inside["attr-value"].inside["entity"] = Prism2.languages.markup["entity"];
  Prism2.languages.markup["doctype"].inside["internal-subset"].inside = Prism2.languages.markup;
  Prism2.hooks.add("wrap", function(env) {
    if (env.type === "entity") {
      env.attributes["title"] = env.content.replace(/&amp;/, "&");
    }
  });
  Object.defineProperty(Prism2.languages.markup.tag, "addInlined", {
    value: function addInlined2(tagName, lang) {
      var includedCdataInside = {};
      includedCdataInside["language-" + lang] = {
        pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
        lookbehind: true,
        inside: Prism2.languages[lang]
      };
      includedCdataInside["cdata"] = /^<!\[CDATA\[|\]\]>$/i;
      var inside = {
        "included-cdata": {
          pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
          inside: includedCdataInside
        }
      };
      inside["language-" + lang] = {
        pattern: /[\s\S]+/,
        inside: Prism2.languages[lang]
      };
      var def = {};
      def[tagName] = {
        pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
          return tagName;
        }), "i"),
        lookbehind: true,
        greedy: true,
        inside
      };
      Prism2.languages.insertBefore("markup", "cdata", def);
    }
  });
  Object.defineProperty(Prism2.languages.markup.tag, "addAttribute", {
    value: function(attrName, lang) {
      Prism2.languages.markup.tag.inside["special-attr"].push({
        pattern: RegExp(/(^|["'\s])/.source + "(?:" + attrName + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source, "i"),
        lookbehind: true,
        inside: {
          "attr-name": /^[^\s=]+/,
          "attr-value": {
            pattern: /=[\s\S]+/,
            inside: {
              value: {
                pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                lookbehind: true,
                alias: [lang, "language-" + lang],
                inside: Prism2.languages[lang]
              },
              punctuation: [
                {
                  pattern: /^=/,
                  alias: "attr-equals"
                },
                /"|'/
              ]
            }
          }
        }
      });
    }
  });
  Prism2.languages.html = Prism2.languages.markup;
  Prism2.languages.mathml = Prism2.languages.markup;
  Prism2.languages.svg = Prism2.languages.markup;
  Prism2.languages.xml = Prism2.languages.extend("markup", {});
  Prism2.languages.ssml = Prism2.languages.xml;
  Prism2.languages.atom = Prism2.languages.xml;
  Prism2.languages.rss = Prism2.languages.xml;
  (function(Prism3) {
    var string = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
    Prism3.languages.css = {
      comment: /\/\*[\s\S]*?\*\//,
      atrule: {
        pattern: RegExp("@[\\w-](?:" + /[^;{\s"']|\s+(?!\s)/.source + "|" + string.source + ")*?" + /(?:;|(?=\s*\{))/.source),
        inside: {
          rule: /^@[\w-]+/,
          "selector-function-argument": {
            pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
            lookbehind: true,
            alias: "selector"
          },
          keyword: {
            pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
            lookbehind: true
          }
        }
      },
      url: {
        pattern: RegExp("\\burl\\((?:" + string.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
        greedy: true,
        inside: {
          function: /^url/i,
          punctuation: /^\(|\)$/,
          string: {
            pattern: RegExp("^" + string.source + "$"),
            alias: "url"
          }
        }
      },
      selector: {
        pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + string.source + ")*(?=\\s*\\{)"),
        lookbehind: true
      },
      string: {
        pattern: string,
        greedy: true
      },
      property: {
        pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
        lookbehind: true
      },
      important: /!important\b/i,
      function: {
        pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
        lookbehind: true
      },
      punctuation: /[(){};:,]/
    };
    Prism3.languages.css["atrule"].inside.rest = Prism3.languages.css;
    var markup = Prism3.languages.markup;
    if (markup) {
      markup.tag.addInlined("style", "css");
      markup.tag.addAttribute("style", "css");
    }
  })(Prism2);
  Prism2.languages.clike = {
    comment: [
      {
        pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
        lookbehind: true,
        greedy: true
      },
      {
        pattern: /(^|[^\\:])\/\/.*/,
        lookbehind: true,
        greedy: true
      }
    ],
    string: {
      pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
      greedy: true
    },
    "class-name": {
      pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
      lookbehind: true,
      inside: {
        punctuation: /[.\\]/
      }
    },
    keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
    boolean: /\b(?:false|true)\b/,
    function: /\b\w+(?=\()/,
    number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
    operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
    punctuation: /[{}[\];(),.:]/
  };
  Prism2.languages.javascript = Prism2.languages.extend("clike", {
    "class-name": [
      Prism2.languages.clike["class-name"],
      {
        pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
        lookbehind: true
      }
    ],
    keyword: [
      {
        pattern: /((?:^|\})\s*)catch\b/,
        lookbehind: true
      },
      {
        pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
        lookbehind: true
      }
    ],
    function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
    number: {
      pattern: RegExp(/(^|[^\w$])/.source + "(?:" + (/NaN|Infinity/.source + "|" + /0[bB][01]+(?:_[01]+)*n?/.source + "|" + /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + /\d+(?:_\d+)*n/.source + "|" + /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) + ")" + /(?![\w$])/.source),
      lookbehind: true
    },
    operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
  });
  Prism2.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;
  Prism2.languages.insertBefore("javascript", "keyword", {
    regex: {
      pattern: RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + /\//.source + "(?:" + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + "|" + /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ")" + /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),
      lookbehind: true,
      greedy: true,
      inside: {
        "regex-source": {
          pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
          lookbehind: true,
          alias: "language-regex",
          inside: Prism2.languages.regex
        },
        "regex-delimiter": /^\/|\/$/,
        "regex-flags": /^[a-z]+$/
      }
    },
    "function-variable": {
      pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
      alias: "function"
    },
    parameter: [
      {
        pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
        lookbehind: true,
        inside: Prism2.languages.javascript
      },
      {
        pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
        lookbehind: true,
        inside: Prism2.languages.javascript
      },
      {
        pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
        lookbehind: true,
        inside: Prism2.languages.javascript
      },
      {
        pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
        lookbehind: true,
        inside: Prism2.languages.javascript
      }
    ],
    constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
  });
  Prism2.languages.insertBefore("javascript", "string", {
    hashbang: {
      pattern: /^#!.*/,
      greedy: true,
      alias: "comment"
    },
    "template-string": {
      pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
      greedy: true,
      inside: {
        "template-punctuation": {
          pattern: /^`|`$/,
          alias: "string"
        },
        interpolation: {
          pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
          lookbehind: true,
          inside: {
            "interpolation-punctuation": {
              pattern: /^\$\{|\}$/,
              alias: "punctuation"
            },
            rest: Prism2.languages.javascript
          }
        },
        string: /[\s\S]+/
      }
    },
    "string-property": {
      pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
      lookbehind: true,
      greedy: true,
      alias: "property"
    }
  });
  Prism2.languages.insertBefore("javascript", "operator", {
    "literal-property": {
      pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
      lookbehind: true,
      alias: "property"
    }
  });
  if (Prism2.languages.markup) {
    Prism2.languages.markup.tag.addInlined("script", "javascript");
    Prism2.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, "javascript");
  }
  Prism2.languages.js = Prism2.languages.javascript;
  (function() {
    if (typeof Prism2 === "undefined" || typeof document === "undefined") {
      return;
    }
    if (!Element.prototype.matches) {
      Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
    }
    var LOADING_MESSAGE = "Loading…";
    var FAILURE_MESSAGE = function(status, message) {
      return "✖ Error " + status + " while fetching file: " + message;
    };
    var FAILURE_EMPTY_MESSAGE = "✖ Error: File does not exist or is empty";
    var EXTENSIONS = {
      js: "javascript",
      py: "python",
      rb: "ruby",
      ps1: "powershell",
      psm1: "powershell",
      sh: "bash",
      bat: "batch",
      h: "c",
      tex: "latex"
    };
    var STATUS_ATTR = "data-src-status";
    var STATUS_LOADING = "loading";
    var STATUS_LOADED = "loaded";
    var STATUS_FAILED = "failed";
    var SELECTOR = "pre[data-src]:not([" + STATUS_ATTR + '="' + STATUS_LOADED + '"]):not([' + STATUS_ATTR + '="' + STATUS_LOADING + '"])';
    function loadFile(src, success, error) {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", src, true);
      xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
          if (xhr.status < 400 && xhr.responseText) {
            success(xhr.responseText);
          } else {
            if (xhr.status >= 400) {
              error(FAILURE_MESSAGE(xhr.status, xhr.statusText));
            } else {
              error(FAILURE_EMPTY_MESSAGE);
            }
          }
        }
      };
      xhr.send(null);
    }
    function parseRange(range) {
      var m3 = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(range || "");
      if (m3) {
        var start2 = Number(m3[1]);
        var comma = m3[2];
        var end = m3[3];
        if (!comma) {
          return [start2, start2];
        }
        if (!end) {
          return [start2, void 0];
        }
        return [start2, Number(end)];
      }
      return void 0;
    }
    Prism2.hooks.add("before-highlightall", function(env) {
      env.selector += ", " + SELECTOR;
    });
    Prism2.hooks.add("before-sanity-check", function(env) {
      var pre = env.element;
      if (pre.matches(SELECTOR)) {
        env.code = "";
        pre.setAttribute(STATUS_ATTR, STATUS_LOADING);
        var code = pre.appendChild(document.createElement("CODE"));
        code.textContent = LOADING_MESSAGE;
        var src = pre.getAttribute("data-src");
        var language = env.language;
        if (language === "none") {
          var extension = (/\.(\w+)$/.exec(src) || [, "none"])[1];
          language = EXTENSIONS[extension] || extension;
        }
        Prism2.util.setLanguage(code, language);
        Prism2.util.setLanguage(pre, language);
        var autoloader = Prism2.plugins.autoloader;
        if (autoloader) {
          autoloader.loadLanguages(language);
        }
        loadFile(src, function(text) {
          pre.setAttribute(STATUS_ATTR, STATUS_LOADED);
          var range = parseRange(pre.getAttribute("data-range"));
          if (range) {
            var lines = text.split(/\r\n?|\n/g);
            var start2 = range[0];
            var end = range[1] == null ? lines.length : range[1];
            if (start2 < 0) {
              start2 += lines.length;
            }
            start2 = Math.max(0, Math.min(start2 - 1, lines.length));
            if (end < 0) {
              end += lines.length;
            }
            end = Math.max(0, Math.min(end, lines.length));
            text = lines.slice(start2, end).join("\n");
            if (!pre.hasAttribute("data-start")) {
              pre.setAttribute("data-start", String(start2 + 1));
            }
          }
          code.textContent = text;
          Prism2.highlightElement(code);
        }, function(error) {
          pre.setAttribute(STATUS_ATTR, STATUS_FAILED);
          code.textContent = error;
        });
      }
    });
    Prism2.plugins.fileHighlight = {
      highlight: function highlight(container) {
        var elements = (container || document).querySelectorAll(SELECTOR);
        for (var i2 = 0, element; element = elements[i2++]; ) {
          Prism2.highlightElement(element);
        }
      }
    };
    var logged = false;
    Prism2.fileHighlight = function() {
      if (!logged) {
        console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead.");
        logged = true;
      }
      Prism2.plugins.fileHighlight.highlight.apply(this, arguments);
    };
  })();
});
var prismjs_default = prism;

// build/dist/components/markdown/MarkdownRenderer/MarkdownRenderer.styles.js
var StyledTable = styled_components_default.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1em;

  th, td {
    border: 1px solid ${grayscale2[300]};
    padding: 0.5em;
    text-align: left;
  }

  th {
    background-color: ${grayscale2[200]};
    font-weight: bold;
  }

  tr:nth-child(even) {
    background-color: ${grayscale2[100]};
  }
`;
var InlineCode = styled_components_default.code`
  background: rgba(135, 131, 120, 0.15);
  border-radius: 3px;
  padding: 4px 6px;
  font-family: Menlo, Monaco, "Courier New", monospace;
  color: rgb(235, 87, 87);
  font-size: 0.9em;
  line-height: 1.4;
  /* Ensure it stays inline */
`;
var StyledPre = styled_components_default.pre`
  background: ${grayscale2[100]};
  border-radius: 5px;
  padding: 1em;
  margin-bottom: 1em;
  display: block;
  width: 100%;
  box-sizing: border-box;
  overflow-x: auto;

  /* Reset and normalize the code styles */
  code {
    font-family: Menlo, Monaco, "Courier New", monospace;
    font-size: 0.9em;
    white-space: pre; /* Preserve formatting for block code */
    padding: 0; /* Reset padding */
    margin: 0; /* Reset margin */
    background: none; /* Ensure no background from InlineCode */
    border: none; /* Reset any border styles */
  }
`;
var StyledBold = styled_components_default.strong`
  color: #C4554D;
`;
var MarkdownWrapper = styled_components_default.div`
  width: 100%;
  margin-top: 2em;

  /* Paragraph Styling */
  p {
    margin-top: 24px;
    margin-bottom: 24px;
    color: ${grayscale2[800]};
    font-size: 1em;
    line-height: 1.6;
    white-space: pre-wrap; /* Preserve line breaks within paragraphs */
  }

  /* Heading Styling with Different Font Sizes (Similar to Notion) */
  h1 {
    color: ${grayscale2[900]};
    margin-top: 32px;
    margin-bottom: 32px;
    font-size: 32px; /* h1: 32px */
  }

  h2 {
    color: ${grayscale2[900]};
    margin-top: 28px;
    margin-bottom: 28px;
    font-size: 24px; /* h2: 24px */
  }

  h3 {
    color: ${grayscale2[900]};
    margin-top: 24px;
    margin-bottom: 24px;
    font-size: 20px; /* h3: 20px */
  }

  h4 {
    color: ${grayscale2[900]};
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 16px; /* h4: 16px */
  }

  h5 {
    color: ${grayscale2[900]};
    margin-top: 16px;
    margin-bottom: 16px;
    font-size: 14px; /* h5: 14px */
  }

  h6 {
    color: ${grayscale2[900]};
    margin-top: 12px;
    margin-bottom: 12px;
    font-size: 12px; /* h6: 12px */
  }

  /* List Styling - Standard Indentation Without Extra Initial Indent */
  ul, ol {
    margin-left: 1.5em; /* Standard indentation */
    padding-left: 0; /* Remove left padding to prevent double indentation */
    list-style-position: outside; /* Bullets/numbers outside the list container */
  }

  li {
    margin-bottom: 0.5em;
    /* Optional: Add custom bullet styles if desired */
  }

  /* Blockquote Styling */
  blockquote {
    border-left: 4px solid ${grayscale2[300]};
    padding-left: 1em;
    color: ${grayscale2[600]};
    font-style: italic;
    margin: 1em 0;
  }

  /* Link Styling */
  a {
    color: ${grayscale2[500]};
    text-decoration: underline;
    &:hover {
      color: ${grayscale2[700]};
    }
  }

  /* Image Styling */
  img {
    max-width: 100%;
    height: auto;
    border-radius: 5px;
    margin-bottom: 1em;
  }

  hr {
    margin-top: 3em;
    margin-bottom: 3em;
  }
`;
var ImageWrapper = styled_components_default.div`
  display: flex;
  justify-content: center;
  margin: 1em 0;
  
  img {
    max-width: 100%;
    height: auto;
    border-radius: 5px;
  }
`;
var CenteredImage = styled_components_default.img`
  display: block;
  margin: 1em auto;
  max-width: 100%;
  height: auto;
  border: 1px solid ${grayscale2[200]};
  // box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.05);
  border-radius: 12px;

  @media (max-width: 600px) {
    max-width: 90%;
  }
`;

// build/_snowpack/pkg/prismjs/components/prism-bash.js
(function(Prism2) {
  var envVars = "\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b";
  var commandAfterHeredoc = {
    pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
    lookbehind: true,
    alias: "punctuation",
    inside: null
  };
  var insideString = {
    bash: commandAfterHeredoc,
    environment: {
      pattern: RegExp("\\$" + envVars),
      alias: "constant"
    },
    variable: [
      {
        pattern: /\$?\(\([\s\S]+?\)\)/,
        greedy: true,
        inside: {
          variable: [
            {
              pattern: /(^\$\(\([\s\S]+)\)\)/,
              lookbehind: true
            },
            /^\$\(\(/
          ],
          number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
          operator: /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,
          punctuation: /\(\(?|\)\)?|,|;/
        }
      },
      {
        pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
        greedy: true,
        inside: {
          variable: /^\$\(|^`|\)$|`$/
        }
      },
      {
        pattern: /\$\{[^}]+\}/,
        greedy: true,
        inside: {
          operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
          punctuation: /[\[\]]/,
          environment: {
            pattern: RegExp("(\\{)" + envVars),
            lookbehind: true,
            alias: "constant"
          }
        }
      },
      /\$(?:\w+|[#?*!@$])/
    ],
    entity: /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/
  };
  Prism2.languages.bash = {
    shebang: {
      pattern: /^#!\s*\/.*/,
      alias: "important"
    },
    comment: {
      pattern: /(^|[^"{\\$])#.*/,
      lookbehind: true
    },
    "function-name": [
      {
        pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,
        lookbehind: true,
        alias: "function"
      },
      {
        pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/,
        alias: "function"
      }
    ],
    "for-or-select": {
      pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
      alias: "variable",
      lookbehind: true
    },
    "assign-left": {
      pattern: /(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,
      inside: {
        environment: {
          pattern: RegExp("(^|[\\s;|&]|[<>]\\()" + envVars),
          lookbehind: true,
          alias: "constant"
        }
      },
      alias: "variable",
      lookbehind: true
    },
    parameter: {
      pattern: /(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,
      alias: "variable",
      lookbehind: true
    },
    string: [
      {
        pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,
        lookbehind: true,
        greedy: true,
        inside: insideString
      },
      {
        pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
        lookbehind: true,
        greedy: true,
        inside: {
          bash: commandAfterHeredoc
        }
      },
      {
        pattern: /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,
        lookbehind: true,
        greedy: true,
        inside: insideString
      },
      {
        pattern: /(^|[^$\\])'[^']*'/,
        lookbehind: true,
        greedy: true
      },
      {
        pattern: /\$'(?:[^'\\]|\\[\s\S])*'/,
        greedy: true,
        inside: {
          entity: insideString.entity
        }
      }
    ],
    environment: {
      pattern: RegExp("\\$?" + envVars),
      alias: "constant"
    },
    variable: insideString.variable,
    function: {
      pattern: /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
      lookbehind: true
    },
    keyword: {
      pattern: /(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,
      lookbehind: true
    },
    builtin: {
      pattern: /(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,
      lookbehind: true,
      alias: "class-name"
    },
    boolean: {
      pattern: /(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,
      lookbehind: true
    },
    "file-descriptor": {
      pattern: /\B&\d\b/,
      alias: "important"
    },
    operator: {
      pattern: /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,
      inside: {
        "file-descriptor": {
          pattern: /^\d/,
          alias: "important"
        }
      }
    },
    punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
    number: {
      pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
      lookbehind: true
    }
  };
  commandAfterHeredoc.inside = Prism2.languages.bash;
  var toBeCopied = [
    "comment",
    "function-name",
    "for-or-select",
    "assign-left",
    "parameter",
    "string",
    "environment",
    "function",
    "keyword",
    "builtin",
    "boolean",
    "file-descriptor",
    "operator",
    "punctuation",
    "number"
  ];
  var inside = insideString.variable[1].inside;
  for (var i2 = 0; i2 < toBeCopied.length; i2++) {
    inside[toBeCopied[i2]] = Prism2.languages.bash[toBeCopied[i2]];
  }
  Prism2.languages.sh = Prism2.languages.bash;
  Prism2.languages.shell = Prism2.languages.bash;
})(Prism);

// build/_snowpack/pkg/prismjs/components/prism-css.js
(function(Prism2) {
  var string = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
  Prism2.languages.css = {
    comment: /\/\*[\s\S]*?\*\//,
    atrule: {
      pattern: RegExp("@[\\w-](?:" + /[^;{\s"']|\s+(?!\s)/.source + "|" + string.source + ")*?" + /(?:;|(?=\s*\{))/.source),
      inside: {
        rule: /^@[\w-]+/,
        "selector-function-argument": {
          pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
          lookbehind: true,
          alias: "selector"
        },
        keyword: {
          pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
          lookbehind: true
        }
      }
    },
    url: {
      pattern: RegExp("\\burl\\((?:" + string.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
      greedy: true,
      inside: {
        function: /^url/i,
        punctuation: /^\(|\)$/,
        string: {
          pattern: RegExp("^" + string.source + "$"),
          alias: "url"
        }
      }
    },
    selector: {
      pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + string.source + ")*(?=\\s*\\{)"),
      lookbehind: true
    },
    string: {
      pattern: string,
      greedy: true
    },
    property: {
      pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
      lookbehind: true
    },
    important: /!important\b/i,
    function: {
      pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
      lookbehind: true
    },
    punctuation: /[(){};:,]/
  };
  Prism2.languages.css["atrule"].inside.rest = Prism2.languages.css;
  var markup = Prism2.languages.markup;
  if (markup) {
    markup.tag.addInlined("style", "css");
    markup.tag.addAttribute("style", "css");
  }
})(Prism);

// build/_snowpack/pkg/prismjs/components/prism-javascript.js
Prism.languages.javascript = Prism.languages.extend("clike", {
  "class-name": [
    Prism.languages.clike["class-name"],
    {
      pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
      lookbehind: true
    }
  ],
  keyword: [
    {
      pattern: /((?:^|\})\s*)catch\b/,
      lookbehind: true
    },
    {
      pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
      lookbehind: true
    }
  ],
  function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
  number: {
    pattern: RegExp(/(^|[^\w$])/.source + "(?:" + (/NaN|Infinity/.source + "|" + /0[bB][01]+(?:_[01]+)*n?/.source + "|" + /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + /\d+(?:_\d+)*n/.source + "|" + /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) + ")" + /(?![\w$])/.source),
    lookbehind: true
  },
  operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
});
Prism.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;
Prism.languages.insertBefore("javascript", "keyword", {
  regex: {
    pattern: RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + /\//.source + "(?:" + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + "|" + /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ")" + /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),
    lookbehind: true,
    greedy: true,
    inside: {
      "regex-source": {
        pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
        lookbehind: true,
        alias: "language-regex",
        inside: Prism.languages.regex
      },
      "regex-delimiter": /^\/|\/$/,
      "regex-flags": /^[a-z]+$/
    }
  },
  "function-variable": {
    pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
    alias: "function"
  },
  parameter: [
    {
      pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
      lookbehind: true,
      inside: Prism.languages.javascript
    },
    {
      pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
      lookbehind: true,
      inside: Prism.languages.javascript
    },
    {
      pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
      lookbehind: true,
      inside: Prism.languages.javascript
    },
    {
      pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
      lookbehind: true,
      inside: Prism.languages.javascript
    }
  ],
  constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
});
Prism.languages.insertBefore("javascript", "string", {
  hashbang: {
    pattern: /^#!.*/,
    greedy: true,
    alias: "comment"
  },
  "template-string": {
    pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
    greedy: true,
    inside: {
      "template-punctuation": {
        pattern: /^`|`$/,
        alias: "string"
      },
      interpolation: {
        pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
        lookbehind: true,
        inside: {
          "interpolation-punctuation": {
            pattern: /^\$\{|\}$/,
            alias: "punctuation"
          },
          rest: Prism.languages.javascript
        }
      },
      string: /[\s\S]+/
    }
  },
  "string-property": {
    pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
    lookbehind: true,
    greedy: true,
    alias: "property"
  }
});
Prism.languages.insertBefore("javascript", "operator", {
  "literal-property": {
    pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
    lookbehind: true,
    alias: "property"
  }
});
if (Prism.languages.markup) {
  Prism.languages.markup.tag.addInlined("script", "javascript");
  Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, "javascript");
}
Prism.languages.js = Prism.languages.javascript;

// build/_snowpack/pkg/prismjs/components/prism-markup.js
Prism.languages.markup = {
  comment: {
    pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
    greedy: true
  },
  prolog: {
    pattern: /<\?[\s\S]+?\?>/,
    greedy: true
  },
  doctype: {
    pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
    greedy: true,
    inside: {
      "internal-subset": {
        pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
        lookbehind: true,
        greedy: true,
        inside: null
      },
      string: {
        pattern: /"[^"]*"|'[^']*'/,
        greedy: true
      },
      punctuation: /^<!|>$|[[\]]/,
      "doctype-tag": /^DOCTYPE/i,
      name: /[^\s<>'"]+/
    }
  },
  cdata: {
    pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
    greedy: true
  },
  tag: {
    pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
    greedy: true,
    inside: {
      tag: {
        pattern: /^<\/?[^\s>\/]+/,
        inside: {
          punctuation: /^<\/?/,
          namespace: /^[^\s>\/:]+:/
        }
      },
      "special-attr": [],
      "attr-value": {
        pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
        inside: {
          punctuation: [
            {
              pattern: /^=/,
              alias: "attr-equals"
            },
            {
              pattern: /^(\s*)["']|["']$/,
              lookbehind: true
            }
          ]
        }
      },
      punctuation: /\/?>/,
      "attr-name": {
        pattern: /[^\s>\/]+/,
        inside: {
          namespace: /^[^\s>\/:]+:/
        }
      }
    }
  },
  entity: [
    {
      pattern: /&[\da-z]{1,8};/i,
      alias: "named-entity"
    },
    /&#x?[\da-f]{1,8};/i
  ]
};
Prism.languages.markup["tag"].inside["attr-value"].inside["entity"] = Prism.languages.markup["entity"];
Prism.languages.markup["doctype"].inside["internal-subset"].inside = Prism.languages.markup;
Prism.hooks.add("wrap", function(env) {
  if (env.type === "entity") {
    env.attributes["title"] = env.content.replace(/&amp;/, "&");
  }
});
Object.defineProperty(Prism.languages.markup.tag, "addInlined", {
  value: function addInlined(tagName, lang) {
    var includedCdataInside = {};
    includedCdataInside["language-" + lang] = {
      pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
      lookbehind: true,
      inside: Prism.languages[lang]
    };
    includedCdataInside["cdata"] = /^<!\[CDATA\[|\]\]>$/i;
    var inside = {
      "included-cdata": {
        pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
        inside: includedCdataInside
      }
    };
    inside["language-" + lang] = {
      pattern: /[\s\S]+/,
      inside: Prism.languages[lang]
    };
    var def = {};
    def[tagName] = {
      pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
        return tagName;
      }), "i"),
      lookbehind: true,
      greedy: true,
      inside
    };
    Prism.languages.insertBefore("markup", "cdata", def);
  }
});
Object.defineProperty(Prism.languages.markup.tag, "addAttribute", {
  value: function(attrName, lang) {
    Prism.languages.markup.tag.inside["special-attr"].push({
      pattern: RegExp(/(^|["'\s])/.source + "(?:" + attrName + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source, "i"),
      lookbehind: true,
      inside: {
        "attr-name": /^[^\s=]+/,
        "attr-value": {
          pattern: /=[\s\S]+/,
          inside: {
            value: {
              pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
              lookbehind: true,
              alias: [lang, "language-" + lang],
              inside: Prism.languages[lang]
            },
            punctuation: [
              {
                pattern: /^=/,
                alias: "attr-equals"
              },
              /"|'/
            ]
          }
        }
      }
    });
  }
});
Prism.languages.html = Prism.languages.markup;
Prism.languages.mathml = Prism.languages.markup;
Prism.languages.svg = Prism.languages.markup;
Prism.languages.xml = Prism.languages.extend("markup", {});
Prism.languages.ssml = Prism.languages.xml;
Prism.languages.atom = Prism.languages.xml;
Prism.languages.rss = Prism.languages.xml;

// build/_snowpack/pkg/prismjs/components/prism-python.js
Prism.languages.python = {
  comment: {
    pattern: /(^|[^\\])#.*/,
    lookbehind: true,
    greedy: true
  },
  "string-interpolation": {
    pattern: /(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
    greedy: true,
    inside: {
      interpolation: {
        pattern: /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,
        lookbehind: true,
        inside: {
          "format-spec": {
            pattern: /(:)[^:(){}]+(?=\}$)/,
            lookbehind: true
          },
          "conversion-option": {
            pattern: /![sra](?=[:}]$)/,
            alias: "punctuation"
          },
          rest: null
        }
      },
      string: /[\s\S]+/
    }
  },
  "triple-quoted-string": {
    pattern: /(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,
    greedy: true,
    alias: "string"
  },
  string: {
    pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
    greedy: true
  },
  function: {
    pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
    lookbehind: true
  },
  "class-name": {
    pattern: /(\bclass\s+)\w+/i,
    lookbehind: true
  },
  decorator: {
    pattern: /(^[\t ]*)@\w+(?:\.\w+)*/m,
    lookbehind: true,
    alias: ["annotation", "punctuation"],
    inside: {
      punctuation: /\./
    }
  },
  keyword: /\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
  builtin: /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
  boolean: /\b(?:False|None|True)\b/,
  number: /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,
  operator: /[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
  punctuation: /[{}[\];(),.:]/
};
Prism.languages.python["string-interpolation"].inside["interpolation"].inside.rest = Prism.languages.python;
Prism.languages.py = Prism.languages.python;

// build/_snowpack/pkg/prismjs/components/prism-sql.js
Prism.languages.sql = {
  comment: {
    pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,
    lookbehind: true
  },
  variable: [
    {
      pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,
      greedy: true
    },
    /@[\w.$]+/
  ],
  string: {
    pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,
    greedy: true,
    lookbehind: true
  },
  identifier: {
    pattern: /(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,
    greedy: true,
    lookbehind: true,
    inside: {
      punctuation: /^`|`$/
    }
  },
  function: /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
  keyword: /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
  boolean: /\b(?:FALSE|NULL|TRUE)\b/i,
  number: /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,
  operator: /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
  punctuation: /[;[\]()`,.]/
};

// build/_snowpack/pkg/prismjs/components/prism-typescript.js
(function(Prism2) {
  Prism2.languages.typescript = Prism2.languages.extend("javascript", {
    "class-name": {
      pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
      lookbehind: true,
      greedy: true,
      inside: null
    },
    builtin: /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/
  });
  Prism2.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/, /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/, /\btype\b(?=\s*(?:[\{*]|$))/);
  delete Prism2.languages.typescript["parameter"];
  delete Prism2.languages.typescript["literal-property"];
  var typeInside = Prism2.languages.extend("typescript", {});
  delete typeInside["class-name"];
  Prism2.languages.typescript["class-name"].inside = typeInside;
  Prism2.languages.insertBefore("typescript", "function", {
    decorator: {
      pattern: /@[$\w\xA0-\uFFFF]+/,
      inside: {
        at: {
          pattern: /^@/,
          alias: "operator"
        },
        function: /^[\s\S]+/
      }
    },
    "generic-function": {
      pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
      greedy: true,
      inside: {
        function: /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
        generic: {
          pattern: /<[\s\S]+/,
          alias: "class-name",
          inside: typeInside
        }
      }
    }
  });
  Prism2.languages.ts = Prism2.languages.typescript;
})(Prism);

// build/dist/components/markdown/index.js
var import_MarkdownRenderer = require_MarkdownRenderer();

// build/dist/router/withSuspense.js
var withSuspense = (Component2) => {
  return (props) => /* @__PURE__ */ react.createElement(Suspense2, {
    fallback: /* @__PURE__ */ react.createElement(Loading_default, null)
  }, /* @__PURE__ */ react.createElement(Component2, {
    ...props
  }));
};
var withSuspense_default = withSuspense;

// build/dist/hooks/usePageTransitions.js
var usePageTransitions = (currentPage) => useTransition2(currentPage, {
  from: {transform: "translateX(-20px)", opacity: 0},
  enter: {transform: "translateX(0px)", opacity: 1},
  leave: {transform: "translateY(20px)", opacity: 0},
  config: {
    mass: 1,
    friction: 20,
    tension: 200,
    duration: 300
  },
  exitBeforeEnter: true
});

// build/_snowpack/pkg/common/iconBase-a9876040.js
var DefaultContext = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
};
var IconContext = react.createContext && /* @__PURE__ */ react.createContext(DefaultContext);
var _excluded2 = ["attr", "size", "title"];
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose2(source, excluded);
  var key, i2;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i2 = 0; i2 < sourceSymbolKeys.length; i2++) {
      key = sourceSymbolKeys[i2];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose2(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  for (var key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (excluded.indexOf(key) >= 0)
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _extends2() {
  _extends2 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends2.apply(this, arguments);
}
function ownKeys(e2, r4) {
  var t4 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var o2 = Object.getOwnPropertySymbols(e2);
    r4 && (o2 = o2.filter(function(r22) {
      return Object.getOwnPropertyDescriptor(e2, r22).enumerable;
    })), t4.push.apply(t4, o2);
  }
  return t4;
}
function _objectSpread(e2) {
  for (var r4 = 1; r4 < arguments.length; r4++) {
    var t4 = arguments[r4] != null ? arguments[r4] : {};
    r4 % 2 ? ownKeys(Object(t4), true).forEach(function(r22) {
      _defineProperty(e2, r22, t4[r22]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t4)) : ownKeys(Object(t4)).forEach(function(r22) {
      Object.defineProperty(e2, r22, Object.getOwnPropertyDescriptor(t4, r22));
    });
  }
  return e2;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {value, enumerable: true, configurable: true, writable: true});
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(t4) {
  var i2 = _toPrimitive(t4, "string");
  return typeof i2 == "symbol" ? i2 : i2 + "";
}
function _toPrimitive(t4, r4) {
  if (typeof t4 != "object" || !t4)
    return t4;
  var e2 = t4[Symbol.toPrimitive];
  if (e2 !== void 0) {
    var i2 = e2.call(t4, r4 || "default");
    if (typeof i2 != "object")
      return i2;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r4 === "string" ? String : Number)(t4);
}
function Tree2Element(tree) {
  return tree && tree.map((node, i2) => /* @__PURE__ */ react.createElement(node.tag, _objectSpread({
    key: i2
  }, node.attr), Tree2Element(node.child)));
}
function GenIcon(data) {
  return (props) => /* @__PURE__ */ react.createElement(IconBase, _extends2({
    attr: _objectSpread({}, data.attr)
  }, props), Tree2Element(data.child));
}
function IconBase(props) {
  var elem = (conf) => {
    var {
      attr,
      size: size2,
      title: title2
    } = props, svgProps = _objectWithoutProperties(props, _excluded2);
    var computedSize = size2 || conf.size || "1em";
    var className;
    if (conf.className)
      className = conf.className;
    if (props.className)
      className = (className ? className + " " : "") + props.className;
    return /* @__PURE__ */ react.createElement("svg", _extends2({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className,
      style: _objectSpread(_objectSpread({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title2 && /* @__PURE__ */ react.createElement("title", null, title2), props.children);
  };
  return IconContext !== void 0 ? /* @__PURE__ */ react.createElement(IconContext.Consumer, null, (conf) => elem(conf)) : elem(DefaultContext);
}

// build/_snowpack/pkg/react-icons/fa.js
function FaGithub(props) {
  return GenIcon({tag: "svg", attr: {viewBox: "0 0 496 512"}, child: [{tag: "path", attr: {d: "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"}, child: []}]})(props);
}
function FaLinkedin(props) {
  return GenIcon({tag: "svg", attr: {viewBox: "0 0 448 512"}, child: [{tag: "path", attr: {d: "M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"}, child: []}]})(props);
}

// build/_snowpack/pkg/react-icons/io.js
function IoMdMail(props) {
  return GenIcon({tag: "svg", attr: {viewBox: "0 0 512 512"}, child: [{tag: "path", attr: {d: "M437.332 80H74.668C51.199 80 32 99.198 32 122.667v266.666C32 412.802 51.199 432 74.668 432h362.664C460.801 432 480 412.802 480 389.333V122.667C480 99.198 460.801 80 437.332 80zM432 170.667L256 288 80 170.667V128l176 117.333L432 128v42.667z"}, child: []}]})(props);
}

// build/dist/pages/About/About.styles.js
var Heading3 = styled_components_default.div`
  position: relative;
  max-width: ${size.tablet};
  width: 100%;
`;
var Navbar2 = styled_components_default.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;
var NavbarOptions3 = styled_components_default.div`
  display: flex;
  gap: 2em;
  transition: 0.2s;
  & p {
    margin: 0px;
    color: ${grayscale[500]};
  }

  & p:hover {
    cursor: pointer;
    color: ${grayscale[900]};
  }
`;
var ContainerInner3 = styled_components_default.div`
  position: relative;
  max-width: ${size.tablet};
  width: 100%;
`;
var Image2 = styled_components_default.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
  box-shadow: rgba(2, 12, 27, 0.6) 0px 10px 30px -15px;
`;
var Socials2 = styled_components_default.div`
  font-size: 1.5em;
`;
var Social2 = styled_components_default.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 20px;
  & p {
    margin: 0px;
    font-size: 16px;
  }
`;
var SocialLink2 = styled_components_default.a`
  text-decoration: none !important;

  color: ${grayscale[500]};
  transition: 0.2s;

  &:hover {
    color: ${grayscale[900]};
    cursor: pointer;
  }
`;
var Bar2 = styled_components_default.div`
  width: 20px;
  height: 1px;
  background-color: ${grayscale[300]};
`;

// build/dist/pages/About/About.js
var About = () => {
  return /* @__PURE__ */ react.createElement(ContainerInner3, null, /* @__PURE__ */ react.createElement("div", null, /* @__PURE__ */ react.createElement("p", null, "I recently graduated from Harvard with both Bachelor's and Master's degrees in Computer Science. With diverse experience in big tech, finance, startups, and entrepreneurship, I am currently thriving in a fast-paced, high-impact startup environment."), /* @__PURE__ */ react.createElement("p", null, "My career has spanned building full-stack mobile apps, trading platforms, robotics, AI and algorithmic solutions for type-1 diabetics, and scaling startup backends into robust APIs. I focus on writing clean, maintainable code, fostering clear communication, and driving collaborative teamwork to deliver high-quality solutions."), /* @__PURE__ */ react.createElement("p", null, "Born in São Paulo and raised in the U.S., I worked hard with my family to overcome the challenges of immigrant life and poverty. I became valedictorian and earned a full scholarship to Harvard. As the first in my family to earn a degree in the U.S., I bring resilience, determination, and a unique perspective to every project."), /* @__PURE__ */ react.createElement("p", null, "Outside of work, I’m passionate about photography, music, fitness, and travel, having explored ten countries and worked in San Francisco and New York City."), /* @__PURE__ */ react.createElement("p", null, "Feel free to reach out—let’s connect! :)"), /* @__PURE__ */ react.createElement(Socials2, null, /* @__PURE__ */ react.createElement(Social2, null, /* @__PURE__ */ react.createElement(FaGithub, null), /* @__PURE__ */ react.createElement(Bar2, null), /* @__PURE__ */ react.createElement("p", null, /* @__PURE__ */ react.createElement(SocialLink2, {
    href: "https://github.com/kiopsy",
    target: "_blank"
  }, "@kiopsy"))), /* @__PURE__ */ react.createElement(Social2, null, /* @__PURE__ */ react.createElement(FaLinkedin, null), /* @__PURE__ */ react.createElement(Bar2, null), /* @__PURE__ */ react.createElement("p", null, /* @__PURE__ */ react.createElement(SocialLink2, {
    href: "https://www.linkedin.com/in/vic-goncalves/",
    target: "_blank"
  }, "/in/vic-goncalves"))), /* @__PURE__ */ react.createElement(Social2, null, /* @__PURE__ */ react.createElement(IoMdMail, null), /* @__PURE__ */ react.createElement(Bar2, null), /* @__PURE__ */ react.createElement("p", null, /* @__PURE__ */ react.createElement(SocialLink2, {
    href: "mailto:victorgoncalves@college.harvard.edu"
  }, "victorgoncalves@college.harvard.edu"))))));
};
var About_default = About;

// build/dist/pages/Blog/Blog.constants.js
var BLOG_POSTS = [
  {
    slug: "hello-world",
    title: "def helloWorld():",
    date: "December 9, 2024",
    description: "My first blog post! A short introduction to myself and what I hope to achieve with victorgoncalves.com.",
    tags: ["Introduction"]
  },
  {
    slug: "guide-to-investing",
    title: "A Practical Guide to Investing",
    date: "December 20, 2024",
    description: "A guide to investing tailored for young professionals & beginners.",
    tags: ["Personal Finance", "Investing"]
  }
];

// build/dist/pages/Blog/Blog.styles.js
var ContainerInner4 = styled_components_default.div`
  position: relative;
  max-width: ${size.tablet};
  width: 100%;
`;
var Project = styled_components_default.div`
  width: 100%;
  margin-bottom: 1.5em;
  padding: 1.5em;
  box-sizing: border-box;
  border: 1px solid ${grayscale2[200]};
  border-radius: 2px;
`;
var BlogPost = styled_components_default.div`
  width: 100%;
  margin-bottom: 1.5em;
  padding: 1.5em;
  box-sizing: border-box;
  border: 1px solid ${grayscale2[200]};
  border-radius: 2px;
`;
var BlogPostHeading = styled_components_default.div`
  display: flex;
  align-items: center;
  gap: 8px;

  & h3 {
    margin: 0px;
  }
`;
var Date2 = styled_components_default.p`
  color: ${grayscale2[500]};
  margin-bottom: 0px;
`;
var Description = styled_components_default.p`
  color: ${grayscale2[700]};
  margin-bottom: 0px;
`;
var Tags = styled_components_default.div`
  width: 100%;
  margin-top: 1em;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;
var Label = styled_components_default.div`
  background-color: ${grayscale2[50]};
  border-radius: 50px;
  padding: 4px 8px;
  & p {
    margin: 0px;
    text-decoration: none;
    font-size: 14px;
    line-height: 1rem;
    color: ${grayscale2[800]};
  }
`;
var Bar3 = styled_components_default.div`
  width: 15px;
  height: 1px;
  background-color: ${grayscale2[300]};
`;
var StyledLink = styled_components_default(Link)`
  text-decoration: none;
  color: inherit;

  &:hover {
    text-decoration: none;
  }
`;

// build/dist/pages/Blog/Blog.js
var Home = () => {
  const sortedPosts = [...BLOG_POSTS].sort((a2, b3) => new Date(b3.date).getTime() - new Date(a2.date).getTime());
  return /* @__PURE__ */ react.createElement(ContainerInner4, null, /* @__PURE__ */ react.createElement("p", null, "Some thoughts and learnings from over the years"), sortedPosts.map((post) => {
    const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric"
    });
    return /* @__PURE__ */ react.createElement(StyledLink, {
      to: `/blog/${post.slug}`,
      key: post.slug
    }, /* @__PURE__ */ react.createElement(BlogPost, null, /* @__PURE__ */ react.createElement(BlogPostHeading, null, /* @__PURE__ */ react.createElement("h3", null, post.title)), /* @__PURE__ */ react.createElement(Date2, null, formattedDate), /* @__PURE__ */ react.createElement(Description, {
      style: {marginBottom: "0px"}
    }, post.description), /* @__PURE__ */ react.createElement(Tags, null, post.tags.map((tag) => /* @__PURE__ */ react.createElement(Label, {
      key: tag
    }, /* @__PURE__ */ react.createElement("p", null, tag))))));
  }));
};
var Blog_default = Home;

// build/dist/pages/Projects/Projects.constants.js
var PROJECTS = [
  {
    md_slug: "",
    title: "Secure QR Codes (SQR)",
    date: "April 2024 - May 2024",
    description: "Developed Secure QR (SQR) codes to address security vulnerabilities in traditional QR codes,        which are prone to QR phishing (quishing) and unauthorized access. Implemented digital signatures        and a third-party certification authority to enhance security while maintaining standard compatibility.        Used ECDSA for authentication and integrity validation.        Each SQR code embeds a URL and its entity's public key, making any content alterations detectable.",
    techStack: ["Python", "ECDSA", "QR"],
    link: "assets/sqr.pdf"
  },
  {
    md_slug: "",
    title: "Predicting Model Runtimes from Tensor Graphs",
    date: "September 2023 - December 2023",
    description: "Developed a graph neural network (GNN)-based cost model to predict runtime of tensor computation graphs on the        TPUGraphs dataset for a Kaggle competition. Enhanced the baseline GNN with attention layers and introduced        runtime violation ratios to address GPU memory constraints when loading graphs into memory. Achieved a 1.25x        improvement in validation OPA score over the baseline. Used the Harvard research compute cluster for large-scale training.",
    techStack: ["Python", "PyTorch", "Graph Neural Networks (GNNs)"],
    link: "assets/tpu_graphs.pdf"
  },
  {
    md_slug: "",
    title: "N=1 Type-1 Diabetes Dataset",
    date: "September 2023 - December 2023",
    description: "Conducted a personal study to improve glycemic control by creating a 2.5-month dataset integrating        diet, fitness, CGM, and insulin pump data. Developed Python scripts for data consolidation, cleaning,        and analysis. Used the dataset to explore advanced diabetes management strategies, including predicting        glucose levels, insulin dosages, and insulin sensitivity using machine learning and control theory.",
    techStack: ["Python"],
    link: "assets/t1d_dataset.pdf"
  },
  {
    md_slug: "",
    title: "Distributed Stock Exchange",
    date: "April 2023 - May 2023",
    description: "Distributed stock exchange system that utilizes decentralized architecture between exchange,        institution, broker, and client components. Implemented using gRPC for connections and Paxos        for distributed consensus and orderbook replication across exchange servers. Established automatic        reconnections between broker/institution and the exchange. Flask and HTML frontend UI.        Conducted experiments using trading bots with various strategies to test speed (latency/throughput)        and reliability of the system.",
    techStack: ["Python", "gRPC", "Paxos", "Flask", "SQL"],
    link: ""
  },
  {
    md_slug: "",
    title: "Facilitated Variation on Increasingly Complex Boolean Functions",
    date: "April 2023 - May 2023",
    description: "Recreated the study by Parter et al., 'Facilitated Variation: How Evolution Learns from Past Environments to Generalize to New Environments.'        Used a standard genetic algorithm to evolve encodings of increasingly complex boolean logic gates to fit a goal function.        Assessed facilitated variation and modularity in evolved solutions against baseline.",
    techStack: ["Python"],
    link: "assets/boolean_evolution.pdf"
  },
  {
    md_slug: "",
    title: "Auto.Tabs",
    date: "September 2022 - December 2022",
    description: "Chrome extension that uses Tensorflow.js and the Chrome API to group tabs        together by content similarity. Conducted a week-long user study on the extension’s usability.",
    techStack: ["JavaScript", "Chrome Extension API", "Tensorflow.js", "HCI"],
    link: "assets/auto_tabs.pdf"
  },
  {
    md_slug: "",
    title: "Portal",
    date: "October 2022 - December 2022",
    description: "Developed a 3D simulation using linear algebra, including vector functions, planes, and light beam reflections.        Created a ray-tracing algorithm to render 3D environments at various resolutions.         Collaborated with mechanical and electrical engineers to model MEMS mirror configurations for AR technologies.",
    techStack: ["Python", "NumPy"],
    link: ""
  },
  {
    md_slug: "",
    title: "Autonomous Frontier Exploration and Mapping",
    date: "May 2022 - June 2022",
    description: "Developed autonomous mapping and exploration for LoCoBot using SLAM, LiDAR, and a depth camera.        Compared wavefront frontier detection algorithms with greedy methods through simulations and hardware experiments.        Presented a live demo to an Arizona Search and Rescue coordinator.",
    techStack: ["Python", "Robot Operating System (ROS)", "Gazebo"],
    link: "/assets/autonomous_exploration.pdf"
  },
  {
    md_slug: "",
    title: "Blood Sugar Stabilization",
    date: "November 2020 - December 2020",
    description: "Web application using Flask, the Dexcom API, and a SQLite database. Allows diabetic users        to register/login and connect with their personal continuous glucose monitor database. Displays        a selected range of blood sugar to monitor glucose trends.",
    techStack: ["Python", "Flask", "Dexcom API", "SQLite"],
    link: ""
  }
];

// build/dist/pages/Projects/Projects.styles.js
var ContainerInner5 = styled_components_default.div`
  position: relative;
  max-width: ${size.tablet};
  width: 100%;
`;
var Project2 = styled_components_default.div`
  width: 100%;
  margin-bottom: 1.5em;
  padding: 1.5em;
  box-sizing: border-box;
  border: 1px solid ${grayscale[200]};
  border-radius: 2px;
`;
var Description2 = styled_components_default.p`
  color: ${grayscale[700]};
  margin-bottom: 0px;
`;
var TechStack = styled_components_default.div`
  width: 100%;
  margin-top: 1em;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;
var Label2 = styled_components_default.div`
  background-color: ${grayscale[50]};
  border-radius: 50px;
  padding: 4px 8px;
  & p {
    margin: 0px;
    text-decoration: none;
    font-size: 14px;
    line-height: 1rem;
    color: ${grayscale[800]};
  }
`;
var ProjectHeading = styled_components_default.div`
  display: flex;
  align-items: center;
  gap: 8px;

  & h3 {
    margin: 0px;
  }
`;
var Bar4 = styled_components_default.div`
  width: 15px;
  height: 1px;
  background-color: ${grayscale[300]};
`;
var ProjectLink = styled_components_default.a`
  color: ${grayscale[500]};
  text-decoration: underline;
  &:hover {
    cursor: pointer;
  }
`;

// build/dist/pages/Projects/Projects.js
var Projects = () => {
  return /* @__PURE__ */ react.createElement(ContainerInner5, null, /* @__PURE__ */ react.createElement("p", null, "a collection of my past and current projects"), PROJECTS.map((p5) => {
    return /* @__PURE__ */ react.createElement(Project2, null, /* @__PURE__ */ react.createElement(ProjectHeading, null, /* @__PURE__ */ react.createElement("h3", null, p5.title), p5.link != "" && /* @__PURE__ */ react.createElement(Bar4, null), p5.link != "" && /* @__PURE__ */ react.createElement(ProjectLink, {
      href: p5.link
    }, "paper")), /* @__PURE__ */ react.createElement(TechStack, null, p5.techStack.map((t4) => {
      return /* @__PURE__ */ react.createElement(Label2, null, /* @__PURE__ */ react.createElement("p", null, t4));
    })), /* @__PURE__ */ react.createElement(Description2, {
      style: {marginBottom: "0px"}
    }, p5.description));
  }));
};
var Projects_default = Projects;

// build/dist/pages/Work/Work.constants.js
var COMPANIES = [
  "Complete (YC W22)",
  "Health Harbor (YC S23)",
  "Goldman Sachs",
  "Meta",
  "Harvard (SEAS)"
];
var DESCRIPTIONS = [
  {
    role: "Incoming Founding Software Engineer",
    link: "https://www.complete.so/",
    date: "January 2025",
    description: [
      "Building the future of compensation!"
    ]
  },
  {
    role: "Founding Software Engineer",
    link: "https://www.healthharbor.co/",
    date: "June 2024 - December 2024",
    description: [
      "Scaled backend systems and APIs, increasing MRR from $500 to approximately $10,000.",
      "Enhanced inquiry automation for a major six-figure client by improving in-call AI agent and post-processing.",
      "Developed testing tools to evaluate AI agent performance and reproduce failure cases, boosting system reliability.",
      "Engineered AI call agent and transcript-to-JSON prompts, enhancing in-call performance and post-processing accuracy.",
      "Integrated PostHog analytics to create visualization dashboards for monitoring key company metrics.",
      "Implemented a secure bucketing system on Google Cloud for storing call recordings, maintaining HIPAA compliance.",
      "Integrated Plivo telephony API, reducing automation costs by 20%."
    ]
  },
  {
    role: "Summer Engineering Analyst",
    link: "https://www.goldmansachs.com/",
    date: "June 2023 - August 2023",
    description: [
      "Optimized a multi-threaded equities trading platform to meet sales traders' product requirements.",
      "Designed and deployed a notional conversion screen for high-touch securities orders using Java and XAML in a Linux environment.",
      "Developed a distributed log search tool with Slang, an in-house language, and Python, streaming logs from AWS S3 to prevent memory issues and improve log accessibility. This tool was inspired by a critical bug encountered on index rebalancing day.",
      "Achieved a 10x performance boost by parsing 1.5 billion logs in under 10 minutes using multiprocessing across 8 hosts."
    ]
  },
  {
    role: "Android Engineering MU Intern",
    link: "https://meta.com/",
    date: "June 2022 - August 2022",
    description: [
      "Completed an accelerated Java Android development course, building android replicas of Twitter, Instagram, and movie listing applications.",
      "Developed onCreate(), a full-stack Java and XML Android app for an idea-sharing social media platform for the capstone project.",
      "Implemented features including canvas drawing, idea filtering by stars and keywords, and sharing to Instagram Stories.",
      "Enabled users to search for ideas, add hashtags, manage ideas in global or private sections, and upvote ideas to earn karma points.",
      "Utilized Android and Google APIs with a Parse database for backend functionality."
    ]
  },
  {
    role: "Undergraduate Researcher",
    link: "https://doyle.seas.harvard.edu/",
    date: "May 2021 - December 2022",
    description: [
      "Collaborated with the Doyle Group at Harvard SEAS to develop artificial pancreas algorithms for type 1 diabetes management.",
      "Modeled real-time insulin absorption for use with in-body insulin sensors using the UVA/PADOVA type-1 diabetes simulator on MATLAB, enabling accurate insulin sensitivity calculations for closed-loop insulin pumps.",
      "Cleaned and prepared fitness tracker data from 40 patients in MATLAB for a future machine learning project, classifying exercise types (aerobic, anaerobic, interval) to support dynamic insulin delivery adjustments."
    ]
  }
];

// build/dist/pages/Work/Work.styles.js
var ContainerInner6 = styled_components_default.div`
  position: relative;
  max-width: ${size.tablet};
  width: 100%;
  & h1 {
  }

  margin-top: 1em;
`;
var WorkContainer = styled_components_default.div`
  position: relative;
  display: flex;
  gap: 1em;
  width: 100%;
  @media ${device.mobileS} {
    flex-direction: column;
  }
  @media ${device.tabletL} {
    flex-direction: row;
  }
`;
var Tabs = styled_components_default.div`
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  position: relative;
  @media ${device.mobileS} {
    width: calc(100% + 50px);
    padding-left: 25px;
    margin-left: -25px;
    display: flex;
    overflow-x: scroll;
  }
  @media ${device.tabletL} {
    padding: 0px;
    margin: 0px;
    width: max-content;
    overflow-x: inherit;
    display: block;
  }
`;
var Tab = styled_components_default.button`
  height: 40px;

  @media ${device.mobileS} {
    border-bottom: 2px solid ${grayscale[300]};
    border-left: none;
    min-width: 150px;
    justify-content: center;
  }
  @media ${device.tabletL} {
    border-left: 2px solid ${grayscale[300]};
    border-bottom: none;
    width: 250px;
    justify-content: start;
  }

  padding: 0px 20px;

  text-decoration: none;
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;

  color: ${(props) => props.active ? grayscale[900] : grayscale[300]};
  font-family: "Calibre", "Inter", "San Francisco", "SF Pro Text", -apple-system,
    system-ui, sans-serif;
  white-space: no-wrap;

  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

  &:hover {
    background-color: #eeeeee;
    cursor: pointer;
  }
`;
var ActiveLine = styled_components_default.div`
  @media ${device.mobileS} {
    width: 150px;
    margin-left: 25px;
    height: 2px;
    bottom: 0px;
    left: 0px;
    transform: translatex(calc(${(props) => props.index} * 150px));
  }
  @media ${device.tabletL} {
    width: 2px;
    margin: 0px;
    height: 40px;
    top: 0px;
    left: 0px;
    transform: translateY(calc(${(props) => props.index} * 40px));
  }

  position: absolute;

  background: ${grayscale[900]};

  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
`;
var Content = styled_components_default.div`
  width: 100%;

  @media ${device.mobileS} {
    margin: 2em 0px;
    padding: 0px;
  }
  @media ${device.tabletL} {
    margin: 0;
  }
`;
var Panel = styled_components_default.div`
  width: 100%;

  h3 {
    margin: 0px;
    font-weight: 550;
  }
`;
var Date3 = styled_components_default.p`
  margin: 1em 0px;
  opacity: 0.7;
`;
var List = styled_components_default.ul`
  padding: 0px;
  margin: 0px;
  list-style: none;
  font-size: 17px;
`;
var ListItem = styled_components_default.li`
  position: relative;
  padding-left: 30px;
  margin-bottom: 10px;
  opacity: 0.9;
  font-size: 16px;
  &:before {
    content: "▹";
    position: absolute;
    left: 0px;
  }
`;

// build/dist/pages/Work/Work.js
var Work = () => {
  const [index, setIndex] = useState2(0);
  return /* @__PURE__ */ react.createElement(ContainerInner6, null, /* @__PURE__ */ react.createElement(WorkContainer, null, /* @__PURE__ */ react.createElement(Tabs, null, COMPANIES.map((w4, i2) => /* @__PURE__ */ react.createElement(Tab, {
    onClick: () => setIndex(i2),
    active: index === i2
  }, w4)), /* @__PURE__ */ react.createElement(ActiveLine, {
    index
  })), /* @__PURE__ */ react.createElement(Content, null, /* @__PURE__ */ react.createElement(Panel, null, /* @__PURE__ */ react.createElement(FadeIn, null, /* @__PURE__ */ react.createElement("h3", null, DESCRIPTIONS[index].role, " @", " ", /* @__PURE__ */ react.createElement(Bold, null, /* @__PURE__ */ react.createElement(Link2, {
    href: DESCRIPTIONS[index].link
  }, COMPANIES[index]))), /* @__PURE__ */ react.createElement(Date3, null, DESCRIPTIONS[index].date), /* @__PURE__ */ react.createElement(List, null, DESCRIPTIONS[index].description.map((d3, i2) => {
    return /* @__PURE__ */ react.createElement(ListItem, {
      key: i2
    }, d3);
  })))))));
};
var Work_default = Work;

// build/dist/router/router.js
var Main = lazy2(() => Promise.resolve().then(() => require_Main()));
var MarkdownRenderer = lazy2(() => Promise.resolve().then(() => require_MarkdownRenderer()));

// build/dist/pages/NotFound/NotFound.styles.js
var Container3 = styled_components_default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  text-align: center;
  padding: 2rem;
`;
var Title = styled_components_default.h1`
  font-size: 3rem;
  color: ${({theme: theme2}) => theme2.colors.dark};
  margin-bottom: 1rem;

  @media ${device.tablet} {
    font-size: 2.5rem;
  }

  @media ${device.mobileL} {
    font-size: 2rem;
  }
`;
var Message = styled_components_default.p`
  font-size: 1.2rem;
  color: ${({theme: theme2}) => theme2.grayscale[700]};
  margin-bottom: 2rem;

  @media ${device.tablet} {
    font-size: 1rem;
  }

  @media ${device.mobileL} {
    font-size: 0.9rem;
  }
`;
var HomeLink = styled_components_default(Link)`
  padding: 0.75em 1.5em;
  background-color: ${({theme: theme2}) => theme2.colors.primary};
  color: ${({theme: theme2}) => theme2.colors.ternary};
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({theme: theme2}) => theme2.colors.highlight};
    cursor: pointer;
  }

  @media ${device.mobileL} {
    padding: 0.5em 1em;
    font-size: 0.9rem;
  }
`;
var Image3 = styled_components_default.img`
  width: 300px;
  max-width: 80%;
  height: auto;
  margin-bottom: 2rem;

  @media ${device.tablet} {
    width: 250px;
  }

  @media ${device.mobileL} {
    width: 200px;
  }
`;

// build/dist/router/router.js
var NotFound = lazy2(() => Promise.resolve().then(() => require_NotFound()));
var routes = [
  {
    path: "/",
    element: withSuspense_default(Main)({})
  },
  {
    path: "/blog/:slug",
    element: withSuspense_default(MarkdownRenderer)({})
  },
  {
    path: "*",
    element: withSuspense_default(NotFound)({})
  }
];
var router = createBrowserRouter(routes);
var router_default = router;

// build/dist/styles/globalStyles.js
var GlobalStyles = $e2`

  /* Base Styles */
  html {
    font-size: 16px;
    overflow-y: scroll;
    scrollbar-width: thin;
    scrollbar-color: rgba(0, 0, 0, 0.2) transparent;
  }

  /* Scrollbar Styles */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 4px;
  }
`;
var globalStyles_default = GlobalStyles;

// build/dist/styles/theme.js
var theme = {
  colors: {
    primary: "#FD8440",
    secondary: "#3E533C",
    ternary: "#FFF6E9",
    dark: "#1e3d59",
    highlight: "#17BEBB"
  },
  grayscale: {
    50: "rgb(243, 243, 243)",
    100: "rgb(239, 239, 239)",
    200: "rgb(223, 223, 223)",
    300: "rgb(202, 202, 202)",
    400: "rgb(168, 168, 168)",
    500: "rgb(122, 122, 122)",
    600: "rgb(88, 88, 88)",
    700: "rgb(63, 63, 63)",
    800: "rgb(43, 43, 43)",
    900: "rgb(35, 35, 35)"
  },
  fonts: {
    primary: '"Calibre", "Inter", "San Francisco", "SF Pro Text", -apple-system,',
    secondary: '"SF Mono","Fira Code","Fira Mono","Roboto Mono",monospace'
  },
  breakpoints: {
    mobileS: "320px",
    mobileM: "375px",
    mobileL: "425px",
    tablet: "768px",
    laptop: "1024px",
    laptopL: "1440px",
    desktop: "2560px"
  }
};

// build/dist/App.js
var App = () => {
  return /* @__PURE__ */ react.createElement(Le2, {
    theme
  }, /* @__PURE__ */ react.createElement(globalStyles_default, null), /* @__PURE__ */ react.createElement(RouterProvider, {
    router: router_default
  }));
};
var App_default = App;

// build/dist/index.js
reactDom.render(/* @__PURE__ */ react.createElement(react.StrictMode, null, /* @__PURE__ */ react.createElement(App_default, null)), document.getElementById("mainContent"));
//# sourceMappingURL=index.js.map
