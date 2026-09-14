function T1(s) {
  return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s;
}
var Mo = { exports: {} }, nn = {};
var cv;
function b1() {
  if (cv) return nn;
  cv = 1;
  var s = /* @__PURE__ */ Symbol.for("react.transitional.element"), T = /* @__PURE__ */ Symbol.for("react.fragment");
  function _(o, N, M) {
    var H = null;
    if (M !== void 0 && (H = "" + M), N.key !== void 0 && (H = "" + N.key), "key" in N) {
      M = {};
      for (var x in N)
        x !== "key" && (M[x] = N[x]);
    } else M = N;
    return N = M.ref, {
      $$typeof: s,
      type: o,
      key: H,
      ref: N !== void 0 ? N : null,
      props: M
    };
  }
  return nn.Fragment = T, nn.jsx = _, nn.jsxs = _, nn;
}
var ov;
function E1() {
  return ov || (ov = 1, Mo.exports = b1()), Mo.exports;
}
var X = E1(), Co = { exports: {} }, K = {};
var rv;
function z1() {
  if (rv) return K;
  rv = 1;
  var s = /* @__PURE__ */ Symbol.for("react.transitional.element"), T = /* @__PURE__ */ Symbol.for("react.portal"), _ = /* @__PURE__ */ Symbol.for("react.fragment"), o = /* @__PURE__ */ Symbol.for("react.strict_mode"), N = /* @__PURE__ */ Symbol.for("react.profiler"), M = /* @__PURE__ */ Symbol.for("react.consumer"), H = /* @__PURE__ */ Symbol.for("react.context"), x = /* @__PURE__ */ Symbol.for("react.forward_ref"), Z = /* @__PURE__ */ Symbol.for("react.suspense"), tl = /* @__PURE__ */ Symbol.for("react.memo"), U = /* @__PURE__ */ Symbol.for("react.lazy"), b = /* @__PURE__ */ Symbol.for("react.activity"), Y = /* @__PURE__ */ Symbol.for("react.view_transition"), zl = Symbol.iterator;
  function Kl(d) {
    return d === null || typeof d != "object" ? null : (d = zl && d[zl] || d["@@iterator"], typeof d == "function" ? d : null);
  }
  var el = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, $ = Object.assign, kl = {};
  function wl(d, O, j) {
    this.props = d, this.context = O, this.refs = kl, this.updater = j || el;
  }
  wl.prototype.isReactComponent = {}, wl.prototype.setState = function(d, O) {
    if (typeof d != "object" && typeof d != "function" && d != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, d, O, "setState");
  }, wl.prototype.forceUpdate = function(d) {
    this.updater.enqueueForceUpdate(this, d, "forceUpdate");
  };
  function wu() {
  }
  wu.prototype = wl.prototype;
  function qt(d, O, j) {
    this.props = d, this.context = O, this.refs = kl, this.updater = j || el;
  }
  var xt = qt.prototype = new wu();
  xt.constructor = qt, $(xt, wl.prototype), xt.isPureReactComponent = !0;
  var nt = Array.isArray;
  function W() {
  }
  var il = { H: null, A: null, T: null, S: null }, Gt = Object.prototype.hasOwnProperty;
  function Tt(d, O, j) {
    var q = j.ref;
    return {
      $$typeof: s,
      type: d,
      key: O,
      ref: q !== void 0 ? q : null,
      props: j
    };
  }
  function bt(d, O) {
    return Tt(d.type, O, d.props);
  }
  function ft(d) {
    return typeof d == "object" && d !== null && d.$$typeof === s;
  }
  function gu(d) {
    var O = { "=": "=0", ":": "=2" };
    return "$" + d.replace(/[=:]/g, function(j) {
      return O[j];
    });
  }
  var $u = /\/+/g;
  function Rl(d, O) {
    return typeof d == "object" && d !== null && d.key != null ? gu("" + d.key) : O.toString(36);
  }
  function C(d) {
    switch (d.status) {
      case "fulfilled":
        return d.value;
      case "rejected":
        throw d.reason;
      default:
        switch (typeof d.status == "string" ? d.then(W, W) : (d.status = "pending", d.then(
          function(O) {
            d.status === "pending" && (d.status = "fulfilled", d.value = O);
          },
          function(O) {
            d.status === "pending" && (d.status = "rejected", d.reason = O);
          }
        )), d.status) {
          case "fulfilled":
            return d.value;
          case "rejected":
            throw d.reason;
        }
    }
    throw d;
  }
  function Q(d, O, j, q, al) {
    var nl = typeof d;
    (nl === "undefined" || nl === "boolean") && (d = null);
    var cl = !1;
    if (d === null) cl = !0;
    else
      switch (nl) {
        case "bigint":
        case "string":
        case "number":
          cl = !0;
          break;
        case "object":
          switch (d.$$typeof) {
            case s:
            case T:
              cl = !0;
              break;
            case U:
              return cl = d._init, Q(
                cl(d._payload),
                O,
                j,
                q,
                al
              );
          }
      }
    if (cl)
      return al = al(d), cl = q === "" ? "." + Rl(d, 0) : q, nt(al) ? (j = "", cl != null && (j = cl.replace($u, "$&/") + "/"), Q(al, O, j, "", function(tu) {
        return tu;
      })) : al != null && (ft(al) && (al = bt(
        al,
        j + (al.key == null || d && d.key === al.key ? "" : ("" + al.key).replace(
          $u,
          "$&/"
        ) + "/") + cl
      )), O.push(al)), 1;
    cl = 0;
    var R = q === "" ? "." : q + ":";
    if (nt(d))
      for (var L = 0; L < d.length; L++)
        q = d[L], nl = R + Rl(q, L), cl += Q(
          q,
          O,
          j,
          nl,
          al
        );
    else if (L = Kl(d), typeof L == "function")
      for (d = L.call(d), L = 0; !(q = d.next()).done; )
        q = q.value, nl = R + Rl(q, L++), cl += Q(
          q,
          O,
          j,
          nl,
          al
        );
    else if (nl === "object") {
      if (typeof d.then == "function")
        return Q(
          C(d),
          O,
          j,
          q,
          al
        );
      throw O = String(d), Error(
        "Objects are not valid as a React child (found: " + (O === "[object Object]" ? "object with keys {" + Object.keys(d).join(", ") + "}" : O) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return cl;
  }
  function V(d, O, j) {
    if (d == null) return d;
    var q = [], al = 0;
    return Q(d, q, "", "", function(nl) {
      return O.call(j, nl, al++);
    }), q;
  }
  function hl(d) {
    if (d._status === -1) {
      var O = d._result, j = O();
      j.then(
        function(q) {
          (d._status === 0 || d._status === -1) && (d._status = 1, d._result = q, j.status === void 0 && (j.status = "fulfilled", j.value = q));
        },
        function(q) {
          (d._status === 0 || d._status === -1) && (d._status = 2, d._result = q, j.status === void 0 && (j.status = "rejected", j.reason = q));
        }
      ), d._status === -1 && (d._status = 0, d._result = j);
    }
    if (d._status === 1) return d._result.default;
    throw d._result;
  }
  var rl = typeof reportError == "function" ? reportError : function(d) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var O = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof d == "object" && d !== null && typeof d.message == "string" ? String(d.message) : String(d),
        error: d
      });
      if (!window.dispatchEvent(O)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", d);
      return;
    }
    console.error(d);
  };
  function pt(d) {
    var O = il.T, j = {};
    j.types = O !== null ? O.types : null, il.T = j;
    try {
      var q = d(), al = il.S;
      al !== null && al(j, q), typeof q == "object" && q !== null && typeof q.then == "function" && q.then(W, rl);
    } catch (nl) {
      rl(nl);
    } finally {
      O !== null && j.types !== null && (O.types = j.types), il.T = O;
    }
  }
  function lu(d) {
    var O = il.T;
    if (O !== null) {
      var j = O.types;
      j === null ? O.types = [d] : j.indexOf(d) === -1 && j.push(d);
    } else pt(lu.bind(null, d));
  }
  var Fu = {
    map: V,
    forEach: function(d, O, j) {
      V(
        d,
        function() {
          O.apply(this, arguments);
        },
        j
      );
    },
    count: function(d) {
      var O = 0;
      return V(d, function() {
        O++;
      }), O;
    },
    toArray: function(d) {
      return V(d, function(O) {
        return O;
      }) || [];
    },
    only: function(d) {
      if (!ft(d))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return d;
    }
  };
  return K.Activity = b, K.Children = Fu, K.Component = wl, K.Fragment = _, K.Profiler = N, K.PureComponent = qt, K.StrictMode = o, K.Suspense = Z, K.ViewTransition = Y, K.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = il, K.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(d) {
      return il.H.useMemoCache(d);
    }
  }, K.addTransitionType = lu, K.cache = function(d) {
    return function() {
      return d.apply(null, arguments);
    };
  }, K.cacheSignal = function() {
    return null;
  }, K.cloneElement = function(d, O, j) {
    if (d == null)
      throw Error(
        "The argument must be a React element, but you passed " + d + "."
      );
    var q = $({}, d.props), al = d.key;
    if (O != null)
      for (nl in O.key !== void 0 && (al = "" + O.key), O)
        !Gt.call(O, nl) || nl === "key" || nl === "__self" || nl === "__source" || nl === "ref" && O.ref === void 0 || (q[nl] = O[nl]);
    var nl = arguments.length - 2;
    if (nl === 1) q.children = j;
    else if (1 < nl) {
      for (var cl = Array(nl), R = 0; R < nl; R++)
        cl[R] = arguments[R + 2];
      q.children = cl;
    }
    return Tt(d.type, al, q);
  }, K.createContext = function(d) {
    return d = {
      $$typeof: H,
      _currentValue: d,
      _currentValue2: d,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, d.Provider = d, d.Consumer = {
      $$typeof: M,
      _context: d
    }, d;
  }, K.createElement = function(d, O, j) {
    var q, al = {}, nl = null;
    if (O != null)
      for (q in O.key !== void 0 && (nl = "" + O.key), O)
        Gt.call(O, q) && q !== "key" && q !== "__self" && q !== "__source" && (al[q] = O[q]);
    var cl = arguments.length - 2;
    if (cl === 1) al.children = j;
    else if (1 < cl) {
      for (var R = Array(cl), L = 0; L < cl; L++)
        R[L] = arguments[L + 2];
      al.children = R;
    }
    if (d && d.defaultProps)
      for (q in cl = d.defaultProps, cl)
        al[q] === void 0 && (al[q] = cl[q]);
    return Tt(d, nl, al);
  }, K.createRef = function() {
    return { current: null };
  }, K.forwardRef = function(d) {
    return { $$typeof: x, render: d };
  }, K.isValidElement = ft, K.lazy = function(d) {
    return {
      $$typeof: U,
      _payload: { _status: -1, _result: d },
      _init: hl
    };
  }, K.memo = function(d, O) {
    return {
      $$typeof: tl,
      type: d,
      compare: O === void 0 ? null : O
    };
  }, K.startTransition = pt, K.unstable_useCacheRefresh = function() {
    return il.H.useCacheRefresh();
  }, K.use = function(d) {
    return il.H.use(d);
  }, K.useActionState = function(d, O, j) {
    return il.H.useActionState(d, O, j);
  }, K.useCallback = function(d, O) {
    return il.H.useCallback(d, O);
  }, K.useContext = function(d) {
    return il.H.useContext(d);
  }, K.useDebugValue = function() {
  }, K.useDeferredValue = function(d, O) {
    return il.H.useDeferredValue(d, O);
  }, K.useEffect = function(d, O) {
    return il.H.useEffect(d, O);
  }, K.useEffectEvent = function(d) {
    return il.H.useEffectEvent(d);
  }, K.useId = function() {
    return il.H.useId();
  }, K.useImperativeHandle = function(d, O, j) {
    return il.H.useImperativeHandle(d, O, j);
  }, K.useInsertionEffect = function(d, O) {
    return il.H.useInsertionEffect(d, O);
  }, K.useLayoutEffect = function(d, O) {
    return il.H.useLayoutEffect(d, O);
  }, K.useMemo = function(d, O) {
    return il.H.useMemo(d, O);
  }, K.useOptimistic = function(d, O) {
    return il.H.useOptimistic(d, O);
  }, K.useReducer = function(d, O, j) {
    return il.H.useReducer(d, O, j);
  }, K.useRef = function(d) {
    return il.H.useRef(d);
  }, K.useState = function(d) {
    return il.H.useState(d);
  }, K.useSyncExternalStore = function(d, O, j) {
    return il.H.useSyncExternalStore(
      d,
      O,
      j
    );
  }, K.useTransition = function() {
    return il.H.useTransition();
  }, K.version = "19.3.0", K;
}
var sv;
function Yo() {
  return sv || (sv = 1, Co.exports = z1()), Co.exports;
}
var St = Yo();
const _1 = /* @__PURE__ */ T1(St);
var Do = { exports: {} }, fn = {}, po = { exports: {} }, Uo = {};
var dv;
function O1() {
  return dv || (dv = 1, (function(s) {
    function T(C, Q) {
      var V = C.length;
      C.push(Q);
      l: for (; 0 < V; ) {
        var hl = V - 1 >>> 1, rl = C[hl];
        if (0 < N(rl, Q))
          C[hl] = Q, C[V] = rl, V = hl;
        else break l;
      }
    }
    function _(C) {
      return C.length === 0 ? null : C[0];
    }
    function o(C) {
      if (C.length === 0) return null;
      var Q = C[0], V = C.pop();
      if (V !== Q) {
        C[0] = V;
        l: for (var hl = 0, rl = C.length, pt = rl >>> 1; hl < pt; ) {
          var lu = 2 * (hl + 1) - 1, Fu = C[lu], d = lu + 1, O = C[d];
          if (0 > N(Fu, V))
            d < rl && 0 > N(O, Fu) ? (C[hl] = O, C[d] = V, hl = d) : (C[hl] = Fu, C[lu] = V, hl = lu);
          else if (d < rl && 0 > N(O, V))
            C[hl] = O, C[d] = V, hl = d;
          else break l;
        }
      }
      return Q;
    }
    function N(C, Q) {
      var V = C.sortIndex - Q.sortIndex;
      return V !== 0 ? V : C.id - Q.id;
    }
    if (s.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var M = performance;
      s.unstable_now = function() {
        return M.now();
      };
    } else {
      var H = Date, x = H.now();
      s.unstable_now = function() {
        return H.now() - x;
      };
    }
    var Z = [], tl = [], U = 1, b = null, Y = 3, zl = !1, Kl = !1, el = !1, $ = !1, kl = typeof setTimeout == "function" ? setTimeout : null, wl = typeof clearTimeout == "function" ? clearTimeout : null, wu = typeof setImmediate < "u" ? setImmediate : null;
    function qt(C) {
      for (var Q = _(tl); Q !== null; ) {
        if (Q.callback === null) o(tl);
        else if (Q.startTime <= C)
          o(tl), Q.sortIndex = Q.expirationTime, T(Z, Q);
        else break;
        Q = _(tl);
      }
    }
    function xt(C) {
      if (el = !1, qt(C), !Kl)
        if (_(Z) !== null)
          Kl = !0, nt || (nt = !0, ft());
        else {
          var Q = _(tl);
          Q !== null && Rl(xt, Q.startTime - C);
        }
    }
    var nt = !1, W = -1, il = 5, Gt = -1;
    function Tt() {
      return $ ? !0 : !(s.unstable_now() - Gt < il);
    }
    function bt() {
      if ($ = !1, nt) {
        var C = s.unstable_now();
        Gt = C;
        var Q = !0;
        try {
          l: {
            Kl = !1, el && (el = !1, wl(W), W = -1), zl = !0;
            var V = Y;
            try {
              t: {
                for (qt(C), b = _(Z); b !== null && !(b.expirationTime > C && Tt()); ) {
                  var hl = b.callback;
                  if (typeof hl == "function") {
                    b.callback = null, Y = b.priorityLevel;
                    var rl = hl(
                      b.expirationTime <= C
                    );
                    if (C = s.unstable_now(), typeof rl == "function") {
                      b.callback = rl, qt(C), Q = !0;
                      break t;
                    }
                    b === _(Z) && o(Z), qt(C);
                  } else o(Z);
                  b = _(Z);
                }
                if (b !== null) Q = !0;
                else {
                  var pt = _(tl);
                  pt !== null && Rl(
                    xt,
                    pt.startTime - C
                  ), Q = !1;
                }
              }
              break l;
            } finally {
              b = null, Y = V, zl = !1;
            }
            Q = void 0;
          }
        } finally {
          Q ? ft() : nt = !1;
        }
      }
    }
    var ft;
    if (typeof wu == "function")
      ft = function() {
        wu(bt);
      };
    else if (typeof MessageChannel < "u") {
      var gu = new MessageChannel(), $u = gu.port2;
      gu.port1.onmessage = bt, ft = function() {
        $u.postMessage(null);
      };
    } else
      ft = function() {
        kl(bt, 0);
      };
    function Rl(C, Q) {
      W = kl(function() {
        C(s.unstable_now());
      }, Q);
    }
    s.unstable_IdlePriority = 5, s.unstable_ImmediatePriority = 1, s.unstable_LowPriority = 4, s.unstable_NormalPriority = 3, s.unstable_Profiling = null, s.unstable_UserBlockingPriority = 2, s.unstable_cancelCallback = function(C) {
      C.callback = null;
    }, s.unstable_forceFrameRate = function(C) {
      0 > C || 125 < C ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : il = 0 < C ? Math.floor(1e3 / C) : 5;
    }, s.unstable_getCurrentPriorityLevel = function() {
      return Y;
    }, s.unstable_next = function(C) {
      switch (Y) {
        case 1:
        case 2:
        case 3:
          var Q = 3;
          break;
        default:
          Q = Y;
      }
      var V = Y;
      Y = Q;
      try {
        return C();
      } finally {
        Y = V;
      }
    }, s.unstable_requestPaint = function() {
      $ = !0;
    }, s.unstable_runWithPriority = function(C, Q) {
      switch (C) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          C = 3;
      }
      var V = Y;
      Y = C;
      try {
        return Q();
      } finally {
        Y = V;
      }
    }, s.unstable_scheduleCallback = function(C, Q, V) {
      var hl = s.unstable_now();
      switch (typeof V == "object" && V !== null ? (V = V.delay, V = typeof V == "number" && 0 < V ? hl + V : hl) : V = hl, C) {
        case 1:
          var rl = -1;
          break;
        case 2:
          rl = 250;
          break;
        case 5:
          rl = 1073741823;
          break;
        case 4:
          rl = 1e4;
          break;
        default:
          rl = 5e3;
      }
      return rl = V + rl, C = {
        id: U++,
        callback: Q,
        priorityLevel: C,
        startTime: V,
        expirationTime: rl,
        sortIndex: -1
      }, V > hl ? (C.sortIndex = V, T(tl, C), _(Z) === null && C === _(tl) && (el ? (wl(W), W = -1) : el = !0, Rl(xt, V - hl))) : (C.sortIndex = rl, T(Z, C), Kl || zl || (Kl = !0, nt || (nt = !0, ft()))), C;
    }, s.unstable_shouldYield = Tt, s.unstable_wrapCallback = function(C) {
      var Q = Y;
      return function() {
        var V = Y;
        Y = Q;
        try {
          return C.apply(this, arguments);
        } finally {
          Y = V;
        }
      };
    };
  })(Uo)), Uo;
}
var vv;
function N1() {
  return vv || (vv = 1, po.exports = O1()), po.exports;
}
var Ro = { exports: {} }, Ll = {};
var yv;
function A1() {
  if (yv) return Ll;
  yv = 1;
  var s = Yo();
  function T(U) {
    var b = "https://react.dev/errors/" + U;
    if (1 < arguments.length) {
      b += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var Y = 2; Y < arguments.length; Y++)
        b += "&args[]=" + encodeURIComponent(arguments[Y]);
    }
    return "Minified React error #" + U + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function _() {
  }
  var o = {
    d: {
      f: _,
      r: function() {
        throw Error(T(522));
      },
      D: _,
      C: _,
      L: _,
      m: _,
      X: _,
      S: _,
      M: _
    },
    p: 0,
    findDOMNode: null
  }, N = /* @__PURE__ */ Symbol.for("react.portal"), M = /* @__PURE__ */ Symbol.for("react.recoverable"), H = /* @__PURE__ */ Symbol.for("react.optimistic_key");
  function x(U, b, Y) {
    var zl = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: N,
      key: zl == null ? null : zl === H ? H : "" + zl,
      children: U,
      containerInfo: b,
      implementation: Y
    };
  }
  var Z = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function tl(U, b) {
    if (U === "font") return "";
    if (typeof b == "string")
      return b === "use-credentials" ? b : "";
  }
  return Ll.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, Ll.browser = function(U) {
    return { $$typeof: M, _reason: U };
  }, Ll.createPortal = function(U, b) {
    var Y = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!b || b.nodeType !== 1 && b.nodeType !== 9 && b.nodeType !== 11)
      throw Error(T(299));
    return x(U, b, null, Y);
  }, Ll.flushSync = function(U) {
    var b = Z.T, Y = o.p;
    try {
      if (Z.T = null, o.p = 2, U) return U();
    } finally {
      Z.T = b, o.p = Y, o.d.f();
    }
  }, Ll.preconnect = function(U, b) {
    typeof U == "string" && (b ? (b = b.crossOrigin, b = typeof b == "string" ? b === "use-credentials" ? b : "" : void 0) : b = null, o.d.C(U, b));
  }, Ll.prefetchDNS = function(U) {
    typeof U == "string" && o.d.D(U);
  }, Ll.preinit = function(U, b) {
    if (typeof U == "string" && b && typeof b.as == "string") {
      var Y = b.as, zl = tl(Y, b.crossOrigin), Kl = typeof b.integrity == "string" ? b.integrity : void 0, el = typeof b.fetchPriority == "string" ? b.fetchPriority : void 0;
      Y === "style" ? o.d.S(
        U,
        typeof b.precedence == "string" ? b.precedence : void 0,
        {
          crossOrigin: zl,
          integrity: Kl,
          fetchPriority: el
        }
      ) : Y === "script" && o.d.X(U, {
        crossOrigin: zl,
        integrity: Kl,
        fetchPriority: el,
        nonce: typeof b.nonce == "string" ? b.nonce : void 0
      });
    }
  }, Ll.preinitModule = function(U, b) {
    if (typeof U == "string")
      if (typeof b == "object" && b !== null) {
        if (b.as == null || b.as === "script") {
          var Y = tl(
            b.as,
            b.crossOrigin
          );
          o.d.M(U, {
            crossOrigin: Y,
            integrity: typeof b.integrity == "string" ? b.integrity : void 0,
            nonce: typeof b.nonce == "string" ? b.nonce : void 0,
            fetchPriority: typeof b.fetchPriority == "string" ? b.fetchPriority : void 0
          });
        }
      } else b == null && o.d.M(U);
  }, Ll.preload = function(U, b) {
    if (typeof U == "string" && typeof b == "object" && b !== null && typeof b.as == "string") {
      var Y = b.as, zl = tl(Y, b.crossOrigin);
      o.d.L(U, Y, {
        crossOrigin: zl,
        integrity: typeof b.integrity == "string" ? b.integrity : void 0,
        nonce: typeof b.nonce == "string" ? b.nonce : void 0,
        type: typeof b.type == "string" ? b.type : void 0,
        fetchPriority: typeof b.fetchPriority == "string" ? b.fetchPriority : void 0,
        referrerPolicy: typeof b.referrerPolicy == "string" ? b.referrerPolicy : void 0,
        imageSrcSet: typeof b.imageSrcSet == "string" ? b.imageSrcSet : void 0,
        imageSizes: typeof b.imageSizes == "string" ? b.imageSizes : void 0,
        media: typeof b.media == "string" ? b.media : void 0
      });
    }
  }, Ll.preloadModule = function(U, b) {
    if (typeof U == "string")
      if (b) {
        var Y = tl(b.as, b.crossOrigin);
        o.d.m(U, {
          as: typeof b.as == "string" && b.as !== "script" ? b.as : void 0,
          crossOrigin: Y,
          integrity: typeof b.integrity == "string" ? b.integrity : void 0,
          nonce: typeof b.nonce == "string" ? b.nonce : void 0,
          fetchPriority: typeof b.fetchPriority == "string" ? b.fetchPriority : void 0
        });
      } else o.d.m(U);
  }, Ll.requestFormReset = function(U) {
    o.d.r(U);
  }, Ll.unstable_batchedUpdates = function(U, b) {
    return U(b);
  }, Ll.useFormState = function(U, b, Y) {
    return Z.H.useFormState(U, b, Y);
  }, Ll.useFormStatus = function() {
    return Z.H.useHostTransitionStatus();
  }, Ll.version = "19.3.0", Ll;
}
var mv;
function M1() {
  if (mv) return Ro.exports;
  mv = 1;
  function s() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s);
      } catch (T) {
        console.error(T);
      }
  }
  return s(), Ro.exports = A1(), Ro.exports;
}
var hv;
function C1() {
  if (hv) return fn;
  hv = 1;
  var s = N1(), T = Yo(), _ = M1();
  function o(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var u = 2; u < arguments.length; u++)
        t += "&args[]=" + encodeURIComponent(arguments[u]);
    }
    return "Minified React error #" + l + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function N(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function M(l) {
    for (var t = l, u = t; u && !u.alternate; )
      t = u, (t.flags & 4098) !== 0 && (l = t.return), u = t.return;
    for (; t.return; ) t = t.return;
    return t.tag === 3 ? l : null;
  }
  function H(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function x(l) {
    if (l.tag === 31) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function Z(l) {
    if (M(l) !== l)
      throw Error(o(188));
  }
  function tl(l) {
    var t = l.alternate;
    if (!t) {
      if (t = M(l), t === null) throw Error(o(188));
      return t !== l ? null : l;
    }
    for (var u = l, e = t; ; ) {
      var a = u.return;
      if (a === null) break;
      var n = a.alternate;
      if (n === null) {
        if (e = a.return, e !== null) {
          u = e;
          continue;
        }
        break;
      }
      if (a.child === n.child) {
        for (n = a.child; n; ) {
          if (n === u) return Z(a), l;
          if (n === e) return Z(a), t;
          n = n.sibling;
        }
        throw Error(o(188));
      }
      if (u.return !== e.return) u = a, e = n;
      else {
        for (var f = !1, i = a.child; i; ) {
          if (i === u) {
            f = !0, u = a, e = n;
            break;
          }
          if (i === e) {
            f = !0, e = a, u = n;
            break;
          }
          i = i.sibling;
        }
        if (!f) {
          for (i = n.child; i; ) {
            if (i === u) {
              f = !0, u = n, e = a;
              break;
            }
            if (i === e) {
              f = !0, e = n, u = a;
              break;
            }
            i = i.sibling;
          }
          if (!f) throw Error(o(189));
        }
      }
      if (u.alternate !== e) throw Error(o(190));
    }
    if (u.tag !== 3) throw Error(o(188));
    return u.stateNode.current === u ? l : t;
  }
  function U(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null; ) {
      if (t = U(l), t !== null) return t;
      l = l.sibling;
    }
    return null;
  }
  function b(l, t, u, e, a, n) {
    for (; l !== null; ) {
      if ((l.tag === 5 || l.tag === 27 || l.tag === 6) && u(l, e, a, n) || (l.tag !== 22 || l.memoizedState === null) && (t || l.tag !== 5 && l.tag !== 27) && b(
        l.child,
        t,
        u,
        e,
        a,
        n
      ))
        return !0;
      l = l.sibling;
    }
    return !1;
  }
  function Y(l) {
    for (l = l.return; l !== null; ) {
      if (l.tag === 3 || l.tag === 5 || l.tag === 27) return l;
      l = l.return;
    }
    return null;
  }
  function zl(l) {
    var t = !1;
    for (l = l.return; l !== null && (l.tag === 4 && (t = !0), !(l.tag === 3 || l.tag === 5 || l.tag === 27)); )
      l = l.return;
    return t;
  }
  function Kl(l) {
    var t = [null, null], u = Y(l);
    return u === null || el(
      t,
      l,
      u.child,
      { foundSelf: !1 }
    ), t;
  }
  function el(l, t, u, e) {
    for (; u !== null; ) {
      if (u === t) e.foundSelf = !0;
      else if (u.tag === 5 || u.tag === 27 || u.tag === 6) {
        if (e.foundSelf) return l[1] = u, !0;
        l[0] = u;
      } else if ((u.tag !== 22 || u.memoizedState === null) && el(
        l,
        t,
        u.child,
        e
      ))
        return !0;
      u = u.sibling;
    }
    return !1;
  }
  function $(l) {
    switch (l.tag) {
      case 5:
      case 27:
      case 6:
        return l.stateNode;
      case 3:
        return l.stateNode.containerInfo;
      default:
        throw Error(o(559));
    }
  }
  var kl = null, wl = null;
  function wu(l, t, u) {
    return l === u ? !0 : l === t ? (kl = l, !0) : !1;
  }
  function qt(l, t, u) {
    return l === u ? (wl = l, !1) : l === t ? (wl !== null && (kl = l), !0) : !1;
  }
  function xt(l) {
    if (l === null) return null;
    do
      l = l === null ? null : l.return;
    while (l && l.tag !== 5 && l.tag !== 27 && l.tag !== 3);
    return l || null;
  }
  function nt(l, t, u) {
    for (var e = 0, a = l; a; a = u(a)) e++;
    a = 0;
    for (var n = t; n; n = u(n)) a++;
    for (; 0 < e - a; ) l = u(l), e--;
    for (; 0 < a - e; ) t = u(t), a--;
    for (; e--; ) {
      if (l === t || t !== null && l === t.alternate)
        return l;
      l = u(l), t = u(t);
    }
    return null;
  }
  var W = Object.assign, il = /* @__PURE__ */ Symbol.for("react.element"), Gt = /* @__PURE__ */ Symbol.for("react.transitional.element"), Tt = /* @__PURE__ */ Symbol.for("react.portal"), bt = /* @__PURE__ */ Symbol.for("react.fragment"), ft = /* @__PURE__ */ Symbol.for("react.strict_mode"), gu = /* @__PURE__ */ Symbol.for("react.profiler"), $u = /* @__PURE__ */ Symbol.for("react.consumer"), Rl = /* @__PURE__ */ Symbol.for("react.context"), C = /* @__PURE__ */ Symbol.for("react.forward_ref"), Q = /* @__PURE__ */ Symbol.for("react.suspense"), V = /* @__PURE__ */ Symbol.for("react.suspense_list"), hl = /* @__PURE__ */ Symbol.for("react.memo"), rl = /* @__PURE__ */ Symbol.for("react.lazy"), pt = /* @__PURE__ */ Symbol.for("react.activity"), lu = /* @__PURE__ */ Symbol.for("react.legacy_hidden"), Fu = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), d = /* @__PURE__ */ Symbol.for("react.view_transition"), O = /* @__PURE__ */ Symbol.for("react.recoverable"), j = Symbol.iterator;
  function q(l) {
    return l === null || typeof l != "object" ? null : (l = j && l[j] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var al = /* @__PURE__ */ Symbol.for("react.client.reference");
  function nl(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === al ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case bt:
        return "Fragment";
      case gu:
        return "Profiler";
      case ft:
        return "StrictMode";
      case Q:
        return "Suspense";
      case V:
        return "SuspenseList";
      case pt:
        return "Activity";
      case d:
        return "ViewTransition";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case Tt:
          return "Portal";
        case Rl:
          return l.displayName || "Context";
        case $u:
          return (l._context.displayName || "Context") + ".Consumer";
        case C:
          var t = l.render;
          return l = l.displayName, l || (l = t.displayName || t.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case hl:
          return t = l.displayName || null, t !== null ? t : nl(l.type) || "Memo";
        case rl:
          t = l._payload, l = l._init;
          try {
            return nl(l(t));
          } catch {
          }
      }
    return null;
  }
  var cl = Array.isArray, R = T.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, L = _.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, tu = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, Kf = [], be = -1;
  function Xt(l) {
    return { current: l };
  }
  function ql(l) {
    0 > be || (l.current = Kf[be], Kf[be] = null, be--);
  }
  function Sl(l, t) {
    be++, Kf[be] = l.current, l.current = t;
  }
  var Qt = Xt(null), sa = Xt(null), Su = Xt(null), rn = Xt(null);
  function sn(l, t) {
    switch (Sl(Su, t), Sl(sa, l), Sl(Qt, null), t.nodeType) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? gd(l) : 0;
        break;
      default:
        if (l = t.tagName, t = t.namespaceURI)
          t = gd(t), l = Sd(t, l);
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    ql(Qt), Sl(Qt, l);
  }
  function Ee() {
    ql(Qt), ql(sa), ql(Su);
  }
  function Jf(l) {
    var t = l.memoizedState;
    t !== null && (ca._currentValue = t.memoizedState, Sl(rn, l)), t = Qt.current;
    var u = Sd(t, l.type);
    t !== u && (Sl(sa, l), Sl(Qt, u));
  }
  function dn(l) {
    sa.current === l && (ql(Qt), ql(sa)), rn.current === l && (ql(rn), ca._currentValue = tu);
  }
  var wf, xo;
  function Tu(l) {
    if (wf === void 0)
      try {
        throw Error();
      } catch (u) {
        var t = u.stack.trim().match(/\n( *(at )?)/);
        wf = t && t[1] || "", xo = -1 < u.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < u.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + wf + l + xo;
  }
  var $f = !1;
  function Ff(l, t) {
    if (!l || $f) return "";
    $f = !0;
    var u = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var e = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var z = function() {
                throw Error();
              };
              if (Object.defineProperty(z.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(z, []);
                } catch (A) {
                  var v = A;
                }
                Reflect.construct(l, [], z);
              } else {
                try {
                  z.call();
                } catch (A) {
                  v = A;
                }
                z = !1;
                try {
                  var g = Object.getOwnPropertyDescriptor(
                    l.prototype,
                    "props"
                  );
                  Object.defineProperty(l.prototype, "props", {
                    configurable: !0,
                    set: function() {
                      throw Error();
                    }
                  }), z = !0, new l();
                } finally {
                  z && (g !== void 0 ? Object.defineProperty(l.prototype, "props", g) : delete l.prototype.props);
                }
              }
            } else {
              try {
                throw Error();
              } catch (A) {
                v = A;
              }
              (z = l()) && typeof z.catch == "function" && z.catch(function() {
              });
            }
          } catch (A) {
            if (A && v && typeof A.stack == "string")
              return [A.stack, v.stack];
          }
          return [null, null];
        }
      };
      e.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var a = Object.getOwnPropertyDescriptor(
        e.DetermineComponentFrameRoot,
        "name"
      );
      a && a.configurable && Object.defineProperty(
        e.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var n = e.DetermineComponentFrameRoot(), f = n[0], i = n[1];
      if (f && i) {
        var c = f.split(`
`), m = i.split(`
`);
        for (a = e = 0; e < c.length && !c[e].includes("DetermineComponentFrameRoot"); )
          e++;
        for (; a < m.length && !m[a].includes(
          "DetermineComponentFrameRoot"
        ); )
          a++;
        if (e === c.length || a === m.length)
          for (e = c.length - 1, a = m.length - 1; 1 <= e && 0 <= a && c[e] !== m[a]; )
            a--;
        for (; 1 <= e && 0 <= a; e--, a--)
          if (c[e] !== m[a]) {
            if (e !== 1 || a !== 1)
              do
                if (e--, a--, 0 > a || c[e] !== m[a]) {
                  var S = `
` + c[e].replace(" at new ", " at ");
                  return l.displayName && S.includes("<anonymous>") && (S = S.replace("<anonymous>", l.displayName)), S;
                }
              while (1 <= e && 0 <= a);
            break;
          }
      }
    } finally {
      $f = !1, Error.prepareStackTrace = u;
    }
    return (u = l ? l.displayName || l.name : "") ? Tu(u) : "";
  }
  function _v(l, t) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return Tu(l.type);
      case 16:
        return Tu("Lazy");
      case 13:
        return l.child !== t && t !== null ? Tu("Suspense Fallback") : Tu("Suspense");
      case 19:
        return Tu("SuspenseList");
      case 0:
      case 15:
        return Ff(l.type, !1);
      case 11:
        return Ff(l.type.render, !1);
      case 1:
        return Ff(l.type, !0);
      case 31:
        return Tu("Activity");
      case 30:
        return Tu("ViewTransition");
      default:
        return "";
    }
  }
  function Go(l) {
    try {
      var t = "", u = null;
      do
        t += _v(l, u), u = l, l = l.return;
      while (l);
      return t;
    } catch (e) {
      return `
Error generating stack: ` + e.message + `
` + e.stack;
    }
  }
  var Wf = Object.prototype.hasOwnProperty, If = s.unstable_scheduleCallback, kf = s.unstable_cancelCallback, Ov = s.unstable_shouldYield, Nv = s.unstable_requestPaint, it = s.unstable_now, Av = s.unstable_getCurrentPriorityLevel, Xo = s.unstable_ImmediatePriority, Qo = s.unstable_UserBlockingPriority, vn = s.unstable_NormalPriority, Mv = s.unstable_LowPriority, Zo = s.unstable_IdlePriority, Cv = s.log, Dv = s.unstable_setDisableYieldValue, da = null, ct = null;
  function bu(l) {
    if (typeof Cv == "function" && Dv(l), ct && typeof ct.setStrictMode == "function")
      try {
        ct.setStrictMode(da, l);
      } catch {
      }
  }
  var ot = Math.clz32 ? Math.clz32 : Rv, pv = Math.log, Uv = Math.LN2;
  function Rv(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (pv(l) / Uv | 0) | 0;
  }
  var yn = 256, mn = 262144, hn = 4194304;
  function Wu(l) {
    var t = l & 42;
    if (t !== 0) return t;
    switch (l & -l) {
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
        return 64;
      case 128:
        return 128;
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
        return l & -l;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function gn(l, t, u) {
    var e = l.pendingLanes;
    if (e === 0) return 0;
    var a = 0, n = l.suspendedLanes, f = l.pingedLanes;
    l = l.warmLanes;
    var i = e & 134217727;
    return i !== 0 ? (e = i & ~n, e !== 0 ? a = Wu(e) : (f &= i, f !== 0 ? a = Wu(f) : u || (u = i & ~l, u !== 0 && (a = Wu(u))))) : (i = e & ~n, i !== 0 ? a = Wu(i) : f !== 0 ? a = Wu(f) : u || (u = e & ~l, u !== 0 && (a = Wu(u)))), a === 0 ? 0 : t !== 0 && t !== a && (t & n) === 0 && (n = a & -a, u = t & -t, n >= u || n === 32 && (u & 4194048) !== 0) ? t : a;
  }
  function va(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function Vo(l, t) {
    (t & 8) !== 0 && (t |= t & 32);
    var u = l.entangledLanes;
    if (u !== 0)
      for (l = l.entanglements, u &= t; 0 < u; ) {
        var e = 31 - ot(u), a = 1 << e;
        t |= l[e], u &= ~a;
      }
    return t;
  }
  function Hv(l, t) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
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
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Lo() {
    var l = hn;
    return hn <<= 1, (hn & 62914560) === 0 && (hn = 4194304), l;
  }
  function Pf(l) {
    for (var t = [], u = 0; 31 > u; u++) t.push(l);
    return t;
  }
  function ya(l, t) {
    l.pendingLanes |= t, t !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function Bv(l, t, u, e, a, n) {
    var f = l.pendingLanes;
    l.pendingLanes = u, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= u, l.entangledLanes &= u, l.errorRecoveryDisabledLanes &= u, l.shellSuspendCounter = 0;
    var i = l.entanglements, c = l.expirationTimes, m = l.hiddenUpdates;
    for (u = f & ~u; 0 < u; ) {
      var S = 31 - ot(u), z = 1 << S;
      i[S] = 0, c[S] = -1;
      var v = m[S];
      if (v !== null)
        for (m[S] = null, S = 0; S < v.length; S++) {
          var g = v[S];
          g !== null && (g.lane &= -536870913);
        }
      u &= ~z;
    }
    e !== 0 && Ko(l, e, 0), n !== 0 && a === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(f & ~t));
  }
  function Ko(l, t, u) {
    l.pendingLanes |= t, l.suspendedLanes &= ~t;
    var e = 31 - ot(t);
    l.entangledLanes |= t, l.entanglements[e] = l.entanglements[e] | 1073741824 | u & 261930;
  }
  function Jo(l, t) {
    var u = l.entangledLanes |= t;
    for (l = l.entanglements; u; ) {
      var e = 31 - ot(u), a = 1 << e;
      a & t | l[e] & t && (l[e] |= t), u &= ~a;
    }
  }
  function wo(l, t) {
    var u = t & -t;
    return u = (u & 42) !== 0 ? 1 : li(u), (u & (l.suspendedLanes | t)) !== 0 ? 0 : u;
  }
  function li(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
        break;
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
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function ti(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function $o() {
    var l = L.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : tv(l.type));
  }
  function Fo(l, t) {
    var u = L.p;
    try {
      return L.p = l, t();
    } finally {
      L.p = u;
    }
  }
  var uu = Math.random().toString(36).slice(2), xl = "__reactFiber$" + uu, Pl = "__reactProps$" + uu, ze = "__reactContainer$" + uu, Wo = "__reactEvents$" + uu, Yv = "__reactListeners$" + uu, jv = "__reactHandles$" + uu, Io = "__reactResources$" + uu, ma = "__reactMarker$" + uu, Sn = "__reactLoad$" + uu;
  function Tn(l) {
    delete l[xl], delete l[Pl], delete l[Yv], delete l[jv];
  }
  function Iu(l) {
    var t;
    if (t = l[xl]) return t;
    for (var u = l.parentNode; u; ) {
      if (t = u[ze] || u[xl]) {
        if (u = t.alternate, t.child !== null || u !== null && u.child !== null)
          for (l = Yd(l); l !== null; ) {
            if (u = l[xl]) return u;
            l = Yd(l);
          }
        return t;
      }
      l = u, u = l.parentNode;
    }
    return null;
  }
  function _e(l) {
    if (l = l[xl] || l[ze]) {
      var t = l.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return l;
    }
    return null;
  }
  function ha(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(o(33));
  }
  function Oe(l) {
    var t = l[Io];
    return t || (t = l[Io] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function Hl(l) {
    l[ma] = !0;
  }
  function ko(l) {
    l[Sn] = void 0;
  }
  var Po = /* @__PURE__ */ new Set(), lr = {};
  function ku(l, t) {
    Ne(l, t), Ne(l + "Capture", t);
  }
  function Ne(l, t) {
    for (lr[l] = t, l = 0; l < t.length; l++)
      Po.add(t[l]);
  }
  var qv = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), tr = {}, ur = {};
  function xv(l) {
    return Wf.call(ur, l) ? !0 : Wf.call(tr, l) ? !1 : qv.test(l) ? ur[l] = !0 : (tr[l] = !0, !1);
  }
  var fl = !1;
  function er() {
    var l = fl;
    return fl = !1, l;
  }
  function bn(l, t, u) {
    if (xv(t))
      if (u === null) l.removeAttribute(t);
      else {
        switch (typeof u) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(t);
            return;
          case "boolean":
            var e = t.toLowerCase().slice(0, 5);
            if (e !== "data-" && e !== "aria-") {
              l.removeAttribute(t);
              return;
            }
        }
        l.setAttribute(t, u);
      }
  }
  function En(l, t, u) {
    if (u === null) l.removeAttribute(t);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(t);
          return;
      }
      l.setAttribute(t, u);
    }
  }
  function eu(l, t, u, e) {
    if (e === null) l.removeAttribute(u);
    else {
      switch (typeof e) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(u);
          return;
      }
      l.setAttributeNS(t, u, e);
    }
  }
  function rt(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function ar(l) {
    var t = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Gv(l, t, u) {
    var e = Object.getOwnPropertyDescriptor(
      l.constructor.prototype,
      t
    );
    if (!l.hasOwnProperty(t) && typeof e < "u" && typeof e.get == "function" && typeof e.set == "function") {
      var a = e.get, n = e.set;
      return Object.defineProperty(l, t, {
        configurable: !0,
        get: function() {
          return a.call(this);
        },
        set: function(f) {
          u = "" + f, n.call(this, f);
        }
      }), Object.defineProperty(l, t, {
        enumerable: e.enumerable
      }), {
        getValue: function() {
          return u;
        },
        setValue: function(f) {
          u = "" + f;
        },
        stopTracking: function() {
          l._valueTracker = null, delete l[t];
        }
      };
    }
  }
  function ui(l) {
    if (!l._valueTracker) {
      var t = ar(l) ? "checked" : "value";
      l._valueTracker = Gv(
        l,
        t,
        "" + l[t]
      );
    }
  }
  function nr(l) {
    if (!l) return !1;
    var t = l._valueTracker;
    if (!t) return !0;
    var u = t.getValue(), e = "";
    return l && (e = ar(l) ? l.checked ? "true" : "false" : l.value), l = e, l !== u ? (t.setValue(l), !0) : !1;
  }
  var Xv = /[\n"\\]/g;
  function Et(l) {
    return l.replace(
      Xv,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function ei(l, t, u, e, a, n, f, i) {
    l.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? l.type = f : l.removeAttribute("type"), t != null ? f === "number" ? (t === 0 && l.value === "" || l.value != t) && (l.value = "" + rt(t)) : l.value !== "" + rt(t) && (l.value = "" + rt(t)) : f !== "submit" && f !== "reset" || l.removeAttribute("value"), t != null ? f === "number" && l.value == t ? ai(l, rt(l.value)) : ai(l, rt(t)) : u != null ? ai(l, rt(u)) : e != null && l.removeAttribute("value"), a == null && n != null && (l.defaultChecked = !!n), a != null && (l.checked = a && typeof a != "function" && typeof a != "symbol"), i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? l.name = "" + rt(i) : l.removeAttribute("name");
  }
  function fr(l, t, u, e, a, n, f, i) {
    if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (l.type = n), t != null || u != null) {
      if (!(n !== "submit" && n !== "reset" || t != null)) {
        ui(l);
        return;
      }
      u = u != null ? "" + rt(u) : "", t = t != null ? "" + rt(t) : u, i || t === l.value || (l.value = t), l.defaultValue = t;
    }
    e = e ?? a, e = typeof e != "function" && typeof e != "symbol" && !!e, l.checked = i ? l.checked : !!e, l.defaultChecked = !!e, f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (l.name = f), ui(l);
  }
  function ai(l, t) {
    l.defaultValue !== "" + t && (l.defaultValue = "" + t);
  }
  function Ae(l, t, u, e) {
    if (l = l.options, t) {
      t = {};
      for (var a = 0; a < u.length; a++)
        t["$" + u[a]] = !0;
      for (u = 0; u < l.length; u++)
        a = t.hasOwnProperty("$" + l[u].value), l[u].selected !== a && (l[u].selected = a), a && e && (l[u].defaultSelected = !0);
    } else {
      for (u = "" + rt(u), t = null, a = 0; a < l.length; a++) {
        if (l[a].value === u) {
          l[a].selected = !0, e && (l[a].defaultSelected = !0);
          return;
        }
        t !== null || l[a].disabled || (t = l[a]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function ir(l, t, u) {
    if (t != null && (t = "" + rt(t), t !== l.value && (l.value = t), u == null)) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = u != null ? "" + rt(u) : "";
  }
  function cr(l, t, u, e) {
    if (t == null) {
      if (e != null) {
        if (u != null) throw Error(o(92));
        if (cl(e)) {
          if (1 < e.length) throw Error(o(93));
          e = e[0];
        }
        u = e;
      }
      u == null && (u = ""), t = u;
    }
    u = rt(t), l.defaultValue = u, e = l.textContent, e === u && e !== "" && e !== null && (l.value = e), ui(l);
  }
  function Me(l, t) {
    if (t) {
      var u = l.firstChild;
      if (u && u === l.lastChild && u.nodeType === 3) {
        u.nodeValue = t;
        return;
      }
    }
    l.textContent = t;
  }
  var Qv = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function or(l, t, u) {
    var e = t.indexOf("--") === 0;
    u == null || typeof u == "boolean" || u === "" ? e ? l.setProperty(t, "") : t === "float" ? l.cssFloat = "" : l[t] = "" : e ? l.setProperty(t, u) : typeof u != "number" || u === 0 || Qv.has(t) ? t === "float" ? l.cssFloat = u : l[t] = ("" + u).trim() : l[t] = u + "px";
  }
  function rr(l, t, u) {
    if (t != null && typeof t != "object")
      throw Error(o(62));
    if (l = l.style, u != null) {
      for (var e in u)
        !u.hasOwnProperty(e) || t != null && t.hasOwnProperty(e) || (e.indexOf("--") === 0 ? l.setProperty(e, "") : e === "float" ? l.cssFloat = "" : l[e] = "", fl = !0);
      for (var a in t)
        e = t[a], t.hasOwnProperty(a) && u[a] !== e && (or(l, a, e), fl = !0);
    } else
      for (var n in t)
        t.hasOwnProperty(n) && or(l, n, t[n]);
  }
  function ni(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Zv = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["maskType", "mask-type"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), Vv = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function zn(l) {
    return Vv.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  function Zt() {
  }
  var fi = null;
  function ii(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var Ce = null, De = null;
  function sr(l) {
    var t = _e(l);
    if (t && (l = t.stateNode)) {
      var u = l[Pl] || null;
      l: switch (l = t.stateNode, t.type) {
        case "input":
          if (ei(
            l,
            u.value,
            u.defaultValue,
            u.defaultValue,
            u.checked,
            u.defaultChecked,
            u.type,
            u.name
          ), t = u.name, u.type === "radio" && t != null) {
            for (u = l; u.parentNode; ) u = u.parentNode;
            for (u = u.querySelectorAll(
              'input[name="' + Et(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < u.length; t++) {
              var e = u[t];
              if (e !== l && e.form === l.form) {
                var a = e[Pl] || null;
                if (!a) throw Error(o(90));
                ei(
                  e,
                  a.value,
                  a.defaultValue,
                  a.defaultValue,
                  a.checked,
                  a.defaultChecked,
                  a.type,
                  a.name
                );
              }
            }
            for (t = 0; t < u.length; t++)
              e = u[t], e.form === l.form && nr(e);
          }
          break l;
        case "textarea":
          ir(l, u.value, u.defaultValue);
          break l;
        case "select":
          t = u.value, t != null && Ae(l, !!u.multiple, t, !1);
      }
    }
  }
  var ci = !1;
  function dr(l, t, u) {
    if (ci) return l(t, u);
    ci = !0;
    try {
      var e = l(t);
      return e;
    } finally {
      if (ci = !1, (Ce !== null || De !== null) && (_f(), Ce && (t = Ce, l = De, De = Ce = null, sr(t), l)))
        for (t = 0; t < l.length; t++) sr(l[t]);
    }
  }
  function ga(l, t) {
    var u = l.stateNode;
    if (u === null) return null;
    var e = u[Pl] || null;
    if (e === null) return null;
    u = e[t];
    l: switch (t) {
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
        (e = !e.disabled) || (l = l.type, e = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !e;
        break l;
      default:
        l = !1;
    }
    if (l) return null;
    if (u && typeof u != "function")
      throw Error(
        o(231, t, typeof u)
      );
    return u;
  }
  var au = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), oi = !1;
  if (au)
    try {
      var Sa = {};
      Object.defineProperty(Sa, "passive", {
        get: function() {
          oi = !0;
        }
      }), window.addEventListener("test", Sa, Sa), window.removeEventListener("test", Sa, Sa);
    } catch {
      oi = !1;
    }
  var Eu = null, ri = null, _n = null;
  function vr() {
    if (_n) return _n;
    var l, t = ri, u = t.length, e, a = "value" in Eu ? Eu.value : Eu.textContent, n = a.length;
    for (l = 0; l < u && t[l] === a[l]; l++) ;
    var f = u - l;
    for (e = 1; e <= f && t[u - e] === a[n - e]; e++) ;
    return _n = a.slice(l, 1 < e ? 1 - e : void 0);
  }
  function On(l) {
    var t = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && t === 13 && (l = 13)) : l = t, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function Nn() {
    return !0;
  }
  function yr() {
    return !1;
  }
  function $l(l) {
    function t(u, e, a, n, f) {
      this._reactName = u, this._targetInst = a, this.type = e, this.nativeEvent = n, this.target = f, this.currentTarget = null;
      for (var i in l)
        l.hasOwnProperty(i) && (u = l[i], this[i] = u ? u(n) : n[i]);
      return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1) ? Nn : yr, this.isPropagationStopped = yr, this;
    }
    return W(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var u = this.nativeEvent;
        u && (u.preventDefault ? u.preventDefault() : typeof u.returnValue != "unknown" && (u.returnValue = !1), this.isDefaultPrevented = Nn);
      },
      stopPropagation: function() {
        var u = this.nativeEvent;
        u && (u.stopPropagation ? u.stopPropagation() : typeof u.cancelBubble != "unknown" && (u.cancelBubble = !0), this.isPropagationStopped = Nn);
      },
      persist: function() {
      },
      isPersistent: Nn
    }), t;
  }
  var zu = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, An = $l(zu), Ta = W({}, zu, { view: 0, detail: 0 }), Lv = $l(Ta), si, di, ba, Mn = W({}, Ta, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: yi,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== ba && (ba && l.type === "mousemove" ? (si = l.screenX - ba.screenX, di = l.screenY - ba.screenY) : di = si = 0, ba = l), si);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : di;
    }
  }), mr = $l(Mn), Kv = W({}, Mn, { dataTransfer: 0 }), Jv = $l(Kv), wv = W({}, Ta, { relatedTarget: 0 }), vi = $l(wv), $v = W({}, zu, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Fv = $l($v), Wv = W({}, zu, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), Iv = $l(Wv), kv = W({}, zu, { data: 0 }), hr = $l(kv), Pv = {
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
  }, ly = {
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
  }, ty = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function uy(l) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(l) : (l = ty[l]) ? !!t[l] : !1;
  }
  function yi() {
    return uy;
  }
  var ey = W({}, Ta, {
    key: function(l) {
      if (l.key) {
        var t = Pv[l.key] || l.key;
        if (t !== "Unidentified") return t;
      }
      return l.type === "keypress" ? (l = On(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? ly[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: yi,
    charCode: function(l) {
      return l.type === "keypress" ? On(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? On(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), ay = $l(ey), ny = W({}, Mn, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), gr = $l(ny), fy = W({}, zu, { submitter: 0 }), iy = $l(fy), cy = W({}, Ta, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: yi
  }), oy = $l(cy), ry = W({}, zu, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), sy = $l(ry), dy = W({}, Mn, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), vy = $l(dy), yy = W({}, zu, {
    newState: 0,
    oldState: 0,
    source: 0
  }), my = $l(yy), hy = [9, 13, 27, 32], mi = au && "CompositionEvent" in window, Ea = null;
  au && "documentMode" in document && (Ea = document.documentMode);
  var gy = au && "TextEvent" in window && !Ea, Sr = au && (!mi || Ea && 8 < Ea && 11 >= Ea), Tr = " ", br = !1;
  function Er(l, t) {
    switch (l) {
      case "keyup":
        return hy.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function zr(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var pe = !1;
  function Sy(l, t) {
    switch (l) {
      case "compositionend":
        return zr(t);
      case "keypress":
        return t.which !== 32 ? null : (br = !0, Tr);
      case "textInput":
        return l = t.data, l === Tr && br ? null : l;
      default:
        return null;
    }
  }
  function Ty(l, t) {
    if (pe)
      return l === "compositionend" || !mi && Er(l, t) ? (l = vr(), _n = ri = Eu = null, pe = !1, l) : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length)
            return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Sr && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var by = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function _r(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!by[l.type] : t === "textarea";
  }
  function Or(l, t, u, e) {
    Ce ? De ? De.push(e) : De = [e] : Ce = e, t = Df(t, "onChange"), 0 < t.length && (u = new An(
      "onChange",
      "change",
      null,
      u,
      e
    ), l.push({ event: u, listeners: t }));
  }
  var za = null, _a = null;
  function Ey(l) {
    sd(l, 0);
  }
  function Cn(l) {
    var t = ha(l);
    if (nr(t)) return l;
  }
  function Nr(l, t) {
    if (l === "change") return t;
  }
  var Ar = !1;
  if (au) {
    var hi;
    if (au) {
      var gi = "oninput" in document;
      if (!gi) {
        var Mr = document.createElement("div");
        Mr.setAttribute("oninput", "return;"), gi = typeof Mr.oninput == "function";
      }
      hi = gi;
    } else hi = !1;
    Ar = hi && (!document.documentMode || 9 < document.documentMode);
  }
  function Cr() {
    za && (za.detachEvent("onpropertychange", Dr), _a = za = null);
  }
  function Dr(l) {
    if (l.propertyName === "value" && Cn(_a)) {
      var t = [];
      Or(
        t,
        _a,
        l,
        ii(l)
      ), dr(Ey, t);
    }
  }
  function zy(l, t, u) {
    l === "focusin" ? (Cr(), za = t, _a = u, za.attachEvent("onpropertychange", Dr)) : l === "focusout" && Cr();
  }
  function _y(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return Cn(_a);
  }
  function Oy(l, t) {
    if (l === "click") return Cn(t);
  }
  function Ny(l, t) {
    if (l === "input" || l === "change")
      return Cn(t);
  }
  function Ay(l, t) {
    return l === t && (l !== 0 || 1 / l === 1 / t) || l !== l && t !== t;
  }
  var st = typeof Object.is == "function" ? Object.is : Ay;
  function Oa(l, t) {
    if (st(l, t)) return !0;
    if (typeof l != "object" || l === null || typeof t != "object" || t === null)
      return !1;
    var u = Object.keys(l), e = Object.keys(t);
    if (u.length !== e.length) return !1;
    for (e = 0; e < u.length; e++) {
      var a = u[e];
      if (!Wf.call(t, a) || !st(l[a], t[a]))
        return !1;
    }
    return !0;
  }
  function Si(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  function pr(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function Ur(l, t) {
    var u = pr(l);
    l = 0;
    for (var e; u; ) {
      if (u.nodeType === 3) {
        if (e = l + u.textContent.length, l <= t && e >= t)
          return { node: u, offset: t - l };
        l = e;
      }
      l: {
        for (; u; ) {
          if (u.nextSibling) {
            u = u.nextSibling;
            break l;
          }
          u = u.parentNode;
        }
        u = void 0;
      }
      u = pr(u);
    }
  }
  function Rr(l, t) {
    return l && t ? l === t ? !0 : l && l.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Rr(l, t.parentNode) : "contains" in l ? l.contains(t) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Hr(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var t = Si(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var u = typeof t.contentWindow.location.href == "string";
      } catch {
        u = !1;
      }
      if (u) l = t.contentWindow;
      else break;
      t = Si(l.document);
    }
    return t;
  }
  function Ti(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t && (t === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || t === "textarea" || l.contentEditable === "true");
  }
  var My = au && "documentMode" in document && 11 >= document.documentMode, Ue = null, bi = null, Na = null, Ei = !1;
  function Br(l, t, u) {
    var e = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    Ei || Ue == null || Ue !== Si(e) || (e = Ue, "selectionStart" in e && Ti(e) ? e = { start: e.selectionStart, end: e.selectionEnd } : (e = (e.ownerDocument && e.ownerDocument.defaultView || window).getSelection(), e = {
      anchorNode: e.anchorNode,
      anchorOffset: e.anchorOffset,
      focusNode: e.focusNode,
      focusOffset: e.focusOffset
    }), Na && Oa(Na, e) || (Na = e, e = Df(bi, "onSelect"), 0 < e.length && (t = new An(
      "onSelect",
      "select",
      null,
      t,
      u
    ), l.push({ event: t, listeners: e }), t.target = Ue)));
  }
  function Pu(l, t) {
    var u = {};
    return u[l.toLowerCase()] = t.toLowerCase(), u["Webkit" + l] = "webkit" + t, u["Moz" + l] = "moz" + t, u;
  }
  var Re = {
    animationend: Pu("Animation", "AnimationEnd"),
    animationiteration: Pu("Animation", "AnimationIteration"),
    animationstart: Pu("Animation", "AnimationStart"),
    transitionrun: Pu("Transition", "TransitionRun"),
    transitionstart: Pu("Transition", "TransitionStart"),
    transitioncancel: Pu("Transition", "TransitionCancel"),
    transitionend: Pu("Transition", "TransitionEnd")
  }, zi = {}, Yr = {};
  au && (Yr = document.createElement("div").style, "AnimationEvent" in window || (delete Re.animationend.animation, delete Re.animationiteration.animation, delete Re.animationstart.animation), "TransitionEvent" in window || delete Re.transitionend.transition);
  function le(l) {
    if (zi[l]) return zi[l];
    if (!Re[l]) return l;
    var t = Re[l], u;
    for (u in t)
      if (t.hasOwnProperty(u) && u in Yr)
        return zi[l] = t[u];
    return l;
  }
  var jr = le("animationend"), qr = le("animationiteration"), xr = le("animationstart"), Cy = le("transitionrun"), Dy = le("transitionstart"), py = le("transitioncancel"), Gr = le("transitionend"), Xr = /* @__PURE__ */ new Map(), _i = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  _i.push("scrollEnd");
  function Ut(l, t) {
    Xr.set(l, t), ku(t, [l]);
  }
  var Uy = 0;
  function nu(l, t) {
    if (l.name != null && l.name !== "auto") return l.name;
    if (t.autoName !== null) return t.autoName;
    l = Yt.identifierPrefix;
    var u = Uy++;
    return l = "_" + l + "t_" + u.toString(32) + "_", t.autoName = l;
  }
  function Qr(l) {
    if (l == null || typeof l == "string")
      return l;
    var t = null, u = ke;
    if (u !== null)
      for (var e = 0; e < u.length; e++) {
        var a = l[u[e]];
        if (a != null) {
          if (a === "none") return "none";
          t = t == null ? a : t + (" " + a);
        }
      }
    return t ?? l.default;
  }
  function fu(l, t) {
    return l = Qr(l), t = Qr(t), t == null ? l === "auto" ? null : l : t === "auto" ? null : t;
  }
  var Dn = typeof reportError == "function" ? reportError : function(l) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l),
        error: l
      });
      if (!window.dispatchEvent(t)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", l);
      return;
    }
    console.error(l);
  }, zt = [], He = 0, Oi = 0;
  function pn() {
    for (var l = He, t = Oi = He = 0; t < l; ) {
      var u = zt[t];
      zt[t++] = null;
      var e = zt[t];
      zt[t++] = null;
      var a = zt[t];
      zt[t++] = null;
      var n = zt[t];
      if (zt[t++] = null, e !== null && a !== null) {
        var f = e.pending;
        f === null ? a.next = a : (a.next = f.next, f.next = a), e.pending = a;
      }
      n !== 0 && Zr(u, a, n);
    }
  }
  function Un(l, t, u, e) {
    zt[He++] = l, zt[He++] = t, zt[He++] = u, zt[He++] = e, Oi |= e, l.lanes |= e, l = l.alternate, l !== null && (l.lanes |= e);
  }
  function Ni(l, t, u, e) {
    return Un(l, t, u, e), Rn(l);
  }
  function te(l, t) {
    return Un(l, null, null, t), Rn(l);
  }
  function Zr(l, t, u) {
    l.lanes |= u;
    var e = l.alternate;
    e !== null && (e.lanes |= u);
    for (var a = !1, n = l.return; n !== null; )
      n.childLanes |= u, e = n.alternate, e !== null && (e.childLanes |= u), n.tag === 22 && (l = n.stateNode, l === null || l._visibility & 1 || (a = !0)), l = n, n = n.return;
    return l.tag === 3 ? (n = l.stateNode, a && t !== null && (a = 31 - ot(u), l = n.hiddenUpdates, e = l[a], e === null ? l[a] = [t] : e.push(t), t.lane = u | 536870912), n) : null;
  }
  function Rn(l) {
    if (50 < wa)
      throw wa = 0, zf = null, Error(o(185));
    for (var t = l.return; t !== null; )
      l = t, t = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var Be = {};
  function Ry(l, t, u, e) {
    this.tag = l, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = e, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function lt(l, t, u, e) {
    return new Ry(l, t, u, e);
  }
  function Ai(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function iu(l, t) {
    var u = l.alternate;
    return u === null ? (u = lt(
      l.tag,
      t,
      l.key,
      l.mode
    ), u.elementType = l.elementType, u.type = l.type, u.stateNode = l.stateNode, u.alternate = l, l.alternate = u) : (u.pendingProps = t, u.type = l.type, u.flags = 0, u.subtreeFlags = 0, u.deletions = null), u.flags = l.flags & 1206910976, u.childLanes = l.childLanes, u.lanes = l.lanes, u.child = l.child, u.memoizedProps = l.memoizedProps, u.memoizedState = l.memoizedState, u.updateQueue = l.updateQueue, t = l.dependencies, u.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, u.sibling = l.sibling, u.index = l.index, u.ref = l.ref, u.refCleanup = l.refCleanup, u;
  }
  function Vr(l, t) {
    l.flags &= 1206910978;
    var u = l.alternate;
    return u === null ? (l.childLanes = 0, l.lanes = t, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = u.childLanes, l.lanes = u.lanes, l.child = u.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = u.memoizedProps, l.memoizedState = u.memoizedState, l.updateQueue = u.updateQueue, l.type = u.type, t = u.dependencies, l.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), l;
  }
  function Hn(l, t, u, e, a, n) {
    var f = 0;
    if (e = l, typeof e == "function") Ai(e) && (f = 1);
    else if (typeof e == "string")
      f = f1(
        l,
        u,
        Qt.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      l: switch (e) {
        case pt:
          return l = lt(31, u, t, a), l.elementType = pt, l.lanes = n, l;
        case bt:
          return ue(u.children, a, n, t);
        case ft:
          f = 8, a |= 24;
          break;
        case gu:
          return l = lt(12, u, t, a | 2), l.elementType = gu, l.lanes = n, l;
        case Q:
          return l = lt(13, u, t, a), l.elementType = Q, l.lanes = n, l;
        case V:
          return l = lt(19, u, t, a), l.elementType = V, l.lanes = n, l;
        case lu:
        case d:
          return l = a | 32, l = lt(30, u, t, l), l.elementType = d, l.lanes = n, l.stateNode = {
            autoName: null,
            paired: null,
            clones: null,
            ref: null
          }, l;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Rl:
                f = 10;
                break l;
              case $u:
                f = 9;
                break l;
              case C:
                f = 11;
                break l;
              case hl:
                f = 14;
                break l;
              case rl:
                f = 16, e = null;
                break l;
            }
          f = 29, u = Error(
            o(130, l === null ? "null" : typeof l, "")
          ), e = null;
      }
    return t = lt(f, u, t, a), t.elementType = l, t.type = e, t.lanes = n, t;
  }
  function ue(l, t, u, e) {
    return l = lt(7, l, e, t), l.lanes = u, l;
  }
  function Mi(l, t, u) {
    return l = lt(6, l, null, t), l.lanes = u, l;
  }
  function Lr(l) {
    var t = lt(18, null, null, 0);
    return t.stateNode = l, t;
  }
  function Ci(l, t, u) {
    return t = lt(
      4,
      l.children !== null ? l.children : [],
      l.key,
      t
    ), t.lanes = u, t.stateNode = {
      containerInfo: l.containerInfo,
      pendingChildren: null,
      implementation: l.implementation
    }, t;
  }
  var Kr = /* @__PURE__ */ new WeakMap();
  function _t(l, t) {
    if (typeof l == "object" && l !== null) {
      var u = Kr.get(l);
      return u !== void 0 ? u : (t = {
        value: l,
        source: t,
        stack: Go(t)
      }, Kr.set(l, t), t);
    }
    return {
      value: l,
      source: t,
      stack: Go(t)
    };
  }
  var Ye = [], je = 0, Bn = null, Aa = 0, Ot = [], Nt = 0, _u = null, Vt = 1, Lt = "";
  function cu(l, t) {
    Ye[je++] = Aa, Ye[je++] = Bn, Bn = l, Aa = t;
  }
  function Jr(l, t, u) {
    Ot[Nt++] = Vt, Ot[Nt++] = Lt, Ot[Nt++] = _u, _u = l;
    var e = Vt;
    l = Lt;
    var a = 32 - ot(e) - 1;
    e &= ~(1 << a), u += 1;
    var n = 32 - ot(t) + a;
    if (30 < n) {
      var f = a - a % 5;
      n = (e & (1 << f) - 1).toString(32), e >>= f, a -= f, Vt = 1 << 32 - ot(t) + a | u << a | e, Lt = n + l;
    } else
      Vt = 1 << n | u << a | e, Lt = l;
  }
  function Yn(l) {
    l.return !== null && (cu(l, 1), Jr(l, 1, 0));
  }
  function Di(l) {
    for (; l === Bn; )
      Bn = Ye[--je], Ye[je] = null, Aa = Ye[--je], Ye[je] = null;
    for (; l === _u; )
      _u = Ot[--Nt], Ot[Nt] = null, Lt = Ot[--Nt], Ot[Nt] = null, Vt = Ot[--Nt], Ot[Nt] = null;
  }
  function wr(l, t) {
    Ot[Nt++] = Vt, Ot[Nt++] = Lt, Ot[Nt++] = _u, Vt = t.id, Lt = t.overflow, _u = l;
  }
  var Bl = null, Tl = null, F = !1, Ou = null, At = !1, pi = Error(o(519));
  function Nu(l) {
    var t = Error(
      o(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Ma(_t(t, l)), pi;
  }
  function $r(l) {
    var t = l.stateNode, u = l.type, e = l.memoizedProps;
    switch (t[xl] = l, t[Pl] = e, u) {
      case "dialog":
        k("cancel", t), k("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        k("load", t);
        break;
      case "video":
      case "audio":
        for (u = 0; u < Fa.length; u++)
          k(Fa[u], t);
        break;
      case "source":
        k("error", t);
        break;
      case "img":
      case "image":
      case "link":
        k("error", t), k("load", t);
        break;
      case "details":
        k("toggle", t);
        break;
      case "input":
        k("invalid", t), fr(
          t,
          e.value,
          e.defaultValue,
          e.checked,
          e.defaultChecked,
          e.type,
          e.name,
          !0
        );
        break;
      case "select":
        k("invalid", t);
        break;
      case "textarea":
        k("invalid", t), cr(t, e.value, e.defaultValue, e.children);
    }
    u = e.children, typeof u != "string" && typeof u != "number" && typeof u != "bigint" || t.textContent === "" + u || e.suppressHydrationWarning === !0 || md(t.textContent, u) ? (e.popover != null && (k("beforetoggle", t), k("toggle", t)), e.onScroll != null && k("scroll", t), e.onScrollEnd != null && k("scrollend", t), e.onClick != null && (t.onclick = Zt), t = !0) : t = !1, t || Nu(l, !0);
  }
  function jn(l) {
    for (Bl = l.return; Bl; )
      switch (Bl.tag) {
        case 5:
        case 31:
        case 13:
          At = !1;
          return;
        case 27:
        case 3:
          At = !0;
          return;
        default:
          Bl = Bl.return;
      }
  }
  function qe(l) {
    if (l !== Bl) return !1;
    if (!F) return jn(l), F = !0, !1;
    var t = l.tag, u;
    if ((u = t !== 3 && t !== 27) && ((u = t === 5) && (u = l.type, u = !(u !== "form" && u !== "button") || fo(l.type, l.memoizedProps)), u = !u), u && Tl && Nu(l), jn(l), t === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(o(317));
      Tl = Bd(l);
    } else if (t === 31) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(o(317));
      Tl = Bd(l);
    } else
      t === 27 ? (t = Tl, Qu(l.type) ? (l = ho, ho = null, Tl = l) : Tl = t) : Tl = Bl ? Ct(l.stateNode.nextSibling) : null;
    return !0;
  }
  function ee() {
    Tl = Bl = null, F = !1;
  }
  function Ui() {
    var l = Ou;
    return l !== null && (et === null ? et = l : et.push.apply(
      et,
      l
    ), Ou = null), l;
  }
  function Ma(l) {
    Ou === null ? Ou = [l] : Ou.push(l);
  }
  var Ri = Xt(null), ae = null, ou = null;
  function Au(l, t, u) {
    Sl(Ri, t._currentValue), t._currentValue = u;
  }
  function ru(l) {
    l._currentValue = Ri.current, ql(Ri);
  }
  function qn(l, t, u) {
    for (; l !== null; ) {
      var e = l.alternate;
      if ((l.childLanes & t) !== t ? (l.childLanes |= t, e !== null && (e.childLanes |= t)) : e !== null && (e.childLanes & t) !== t && (e.childLanes |= t), l === u) break;
      l = l.return;
    }
  }
  function Hi(l, t, u, e) {
    var a = l.child;
    for (a !== null && (a.return = l); a !== null; ) {
      var n = a.dependencies;
      if (n !== null) {
        var f = a.child;
        n = n.firstContext;
        l: for (; n !== null; ) {
          var i = n;
          n = a;
          for (var c = 0; c < t.length; c++)
            if (i.context === t[c]) {
              n.lanes |= u, i = n.alternate, i !== null && (i.lanes |= u), qn(
                n.return,
                u,
                l
              ), e || (f = null);
              break l;
            }
          n = i.next;
        }
      } else if (a.tag === 18) {
        if (f = a.return, f === null) throw Error(o(341));
        f.lanes |= u, n = f.alternate, n !== null && (n.lanes |= u), qn(f, u, l), f = null;
      } else
        a.tag === 13 && a.memoizedState !== null && a.memoizedState.dehydrated === null ? (a.lanes |= u, f = a.alternate, f !== null && (f.lanes |= u), qn(
          a.return,
          u,
          l
        ), f = a.child, f = f !== null ? f.sibling : null) : f = a.child;
      if (f !== null) f.return = a;
      else
        for (f = a; f !== null; ) {
          if (f === l) {
            f = null;
            break;
          }
          if (a = f.sibling, a !== null) {
            a.return = f.return, f = a;
            break;
          }
          f = f.return;
        }
      a = f;
    }
  }
  function ne(l, t, u, e) {
    l = null;
    for (var a = t, n = !1; a !== null; ) {
      if (!n) {
        if ((a.flags & 524288) !== 0) n = !0;
        else if ((a.flags & 262144) !== 0) break;
      }
      if (a.tag === 10) {
        var f = a.alternate;
        if (f === null) throw Error(o(387));
        if (f = f.memoizedProps, f !== null) {
          var i = a.type;
          st(a.pendingProps.value, f.value) || (l !== null ? l.push(i) : l = [i]);
        }
      } else if (a === rn.current) {
        if (f = a.alternate, f === null) throw Error(o(387));
        f.memoizedState.memoizedState !== a.memoizedState.memoizedState && (l !== null ? l.push(ca) : l = [ca]);
      }
      a = a.return;
    }
    return l !== null && Hi(
      t,
      l,
      u,
      e
    ), t.flags |= 262144, l !== null;
  }
  function xn(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!st(
        l.context._currentValue,
        l.memoizedValue
      ))
        return !0;
      l = l.next;
    }
    return !1;
  }
  function fe(l) {
    ae = l, ou = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function Gl(l) {
    return Fr(ae, l);
  }
  function Gn(l, t) {
    return ae === null && fe(l), Fr(l, t);
  }
  function Fr(l, t) {
    var u = t._currentValue;
    if (t = { context: t, memoizedValue: u, next: null }, ou === null) {
      if (l === null) throw Error(o(308));
      ou = t, l.dependencies = { lanes: 0, firstContext: t }, l.flags |= 524288;
    } else ou = ou.next = t;
    return u;
  }
  var Hy = typeof AbortController < "u" ? AbortController : function() {
    var l = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(u, e) {
        l.push(e);
      }
    };
    this.abort = function() {
      t.aborted = !0, l.forEach(function(u) {
        return u();
      });
    };
  }, By = s.unstable_scheduleCallback, Yy = s.unstable_NormalPriority, Ml = {
    $$typeof: Rl,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Bi() {
    return {
      controller: new Hy(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Ca(l) {
    l.refCount--, l.refCount === 0 && By(Yy, function() {
      l.controller.abort();
    });
  }
  function Wr(l, t) {
    if ((l.pendingLanes & 4194048) !== 0) {
      var u = l.transitionTypes;
      for (u === null && (u = l.transitionTypes = []), l = 0; l < t.length; l++) {
        var e = t[l];
        u.indexOf(e) === -1 && u.push(e);
      }
    }
  }
  var Da = null;
  function jy(l) {
    var t = l.transitionTypes;
    return l.transitionTypes = null, t;
  }
  var pa = null, Yi = 0, ie = 0, xe = null;
  function qy(l, t) {
    if (pa === null) {
      var u = pa = [];
      Yi = 0, ie = Ic(), xe = {
        status: "pending",
        value: void 0,
        then: function(e) {
          u.push(e);
        }
      };
    }
    return Yi++, t.then(Ir, Ir), t;
  }
  function Ir() {
    if (--Yi === 0 && (Da = null, pa !== null)) {
      xe !== null && (xe.status = "fulfilled");
      var l = pa;
      pa = null, ie = 0, xe = null;
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function xy(l, t) {
    var u = [], e = {
      status: "pending",
      value: null,
      reason: null,
      then: function(a) {
        u.push(a);
      }
    };
    return l.then(
      function() {
        e.status = "fulfilled", e.value = t;
        for (var a = 0; a < u.length; a++) (0, u[a])(t);
      },
      function(a) {
        for (e.status = "rejected", e.reason = a, a = 0; a < u.length; a++)
          (0, u[a])(void 0);
      }
    ), e;
  }
  var kr = R.S;
  R.S = function(l, t) {
    if (Ls = it(), typeof t == "object" && t !== null && typeof t.then == "function" && qy(l, t), Da !== null)
      for (var u = ua; u !== null; )
        Wr(u, Da), u = u.next;
    if (u = l.types, u !== null) {
      for (var e = ua; e !== null; )
        Wr(e, u), e = e.next;
      if (ie !== 0) {
        e = Da, e === null && (e = Da = []);
        for (var a = 0; a < u.length; a++) {
          var n = u[a];
          e.indexOf(n) === -1 && e.push(n);
        }
      }
    }
    kr !== null && kr(l, t);
  };
  var ce = Xt(null);
  function ji() {
    var l = ce.current;
    return l !== null ? l : gl.pooledCache;
  }
  function Xn(l, t) {
    t === null ? Sl(ce, ce.current) : Sl(ce, t.pool);
  }
  function Pr() {
    var l = ji();
    return l === null ? null : { parent: Ml._currentValue, pool: l };
  }
  var Ge = Error(o(460)), qi = Error(o(474)), Qn = Error(o(542)), Zn = { then: function() {
  } };
  function l0(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function t0(l, t, u) {
    switch (u = l[u], u === void 0 ? l.push(t) : u !== t && (t.then(Zt, Zt), t = u), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw l = t.reason, e0(l), l === void 0 && !("reason" in t) ? Error(o(600)) : l;
      default:
        if (typeof t.status == "string") t.then(Zt, Zt);
        else {
          if (l = gl, l !== null && 100 < l.shellSuspendCounter)
            throw Error(o(482));
          l = t, l.status = "pending", l.then(
            function(e) {
              if (t.status === "pending") {
                var a = t;
                a.status = "fulfilled", a.value = e;
              }
            },
            function(e) {
              if (t.status === "pending") {
                var a = t;
                a.status = "rejected", a.reason = e;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw l = t.reason, e0(l), l;
        }
        throw re = t, Ge;
    }
  }
  function oe(l) {
    try {
      var t = l._init;
      return t(l._payload);
    } catch (u) {
      throw u !== null && typeof u == "object" && typeof u.then == "function" ? (re = u, Ge) : u;
    }
  }
  var re = null;
  function u0() {
    if (re === null) throw Error(o(459));
    var l = re;
    return re = null, l;
  }
  function e0(l) {
    if (l === Ge || l === Qn)
      throw Error(o(483));
  }
  var Xe = null, Ua = 0;
  function Vn(l) {
    var t = Ua;
    return Ua += 1, Xe === null && (Xe = []), t0(Xe, l, t);
  }
  function Mu(l, t) {
    t = t.props.ref, l.ref = t !== void 0 ? t : null;
  }
  function Ln(l, t) {
    throw t.$$typeof === il ? Error(o(525)) : (l = Object.prototype.toString.call(t), Error(
      o(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : l
      )
    ));
  }
  function a0(l) {
    function t(y, r) {
      if (l) {
        var h = y.deletions;
        h === null ? (y.deletions = [r], y.flags |= 16) : h.push(r);
      }
    }
    function u(y, r) {
      if (!l) return null;
      for (; r !== null; )
        t(y, r), r = r.sibling;
      return null;
    }
    function e(y) {
      for (var r = /* @__PURE__ */ new Map(); y !== null; )
        y.key === null ? r.set(y.index, y) : r.set(y.key, y), y = y.sibling;
      return r;
    }
    function a(y, r) {
      return y = iu(y, r), y.index = 0, y.sibling = null, y;
    }
    function n(y, r, h) {
      return y.index = h, l ? (h = y.alternate, h !== null ? (h = h.index, h < r ? (y.flags |= 2, r) : h) : (y.flags |= 134217730, r)) : (y.flags |= 1048576, r);
    }
    function f(y) {
      return l && y.alternate === null && (y.flags |= 134217730), y;
    }
    function i(y, r, h, E) {
      return r === null || r.tag !== 6 ? (r = Mi(h, y.mode, E), r.return = y, r) : (r = a(r, h), r.return = y, r);
    }
    function c(y, r, h, E) {
      var D = h.type;
      return D === bt ? (y = S(
        y,
        r,
        h.props.children,
        E,
        h.key
      ), Mu(y, h), y) : r !== null && (r.elementType === D || typeof D == "object" && D !== null && D.$$typeof === rl && oe(D) === r.type) ? (r = a(r, h.props), Mu(r, h), r.return = y, r) : (r = Hn(
        h.type,
        h.key,
        h.props,
        null,
        y.mode,
        E
      ), Mu(r, h), r.return = y, r);
    }
    function m(y, r, h, E) {
      return r === null || r.tag !== 4 || r.stateNode.containerInfo !== h.containerInfo || r.stateNode.implementation !== h.implementation ? (r = Ci(h, y.mode, E), r.return = y, r) : (r = a(r, h.children || []), r.return = y, r);
    }
    function S(y, r, h, E, D) {
      return r === null || r.tag !== 7 ? (r = ue(
        h,
        y.mode,
        E,
        D
      ), r.return = y, r) : (r = a(r, h), r.return = y, r);
    }
    function z(y, r, h) {
      if (typeof r == "string" && r !== "" || typeof r == "number" || typeof r == "bigint")
        return r = Mi(
          "" + r,
          y.mode,
          h
        ), r.return = y, r;
      if (typeof r == "object" && r !== null) {
        switch (r.$$typeof) {
          case Gt:
            return h = Hn(
              r.type,
              r.key,
              r.props,
              null,
              y.mode,
              h
            ), Mu(h, r), h.return = y, h;
          case Tt:
            return r = Ci(
              r,
              y.mode,
              h
            ), r.return = y, r;
          case rl:
            return r = oe(r), z(y, r, h);
        }
        if (cl(r) || q(r))
          return r = ue(
            r,
            y.mode,
            h,
            null
          ), r.return = y, r;
        if (typeof r.then == "function")
          return z(y, Vn(r), h);
        if (r.$$typeof === Rl)
          return z(
            y,
            Gn(y, r),
            h
          );
        Ln(y, r);
      }
      return null;
    }
    function v(y, r, h, E) {
      var D = r !== null ? r.key : null;
      if (typeof h == "string" && h !== "" || typeof h == "number" || typeof h == "bigint")
        return D !== null ? null : i(y, r, "" + h, E);
      if (typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case Gt:
            return h.key === D ? c(y, r, h, E) : null;
          case Tt:
            return h.key === D ? m(y, r, h, E) : null;
          case rl:
            return h = oe(h), v(y, r, h, E);
        }
        if (cl(h) || q(h))
          return D !== null ? null : S(y, r, h, E, null);
        if (typeof h.then == "function")
          return v(
            y,
            r,
            Vn(h),
            E
          );
        if (h.$$typeof === Rl)
          return v(
            y,
            r,
            Gn(y, h),
            E
          );
        Ln(y, h);
      }
      return null;
    }
    function g(y, r, h, E, D) {
      if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint")
        return y = y.get(h) || null, i(r, y, "" + E, D);
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case Gt:
            return y = y.get(
              E.key === null ? h : E.key
            ) || null, c(r, y, E, D);
          case Tt:
            return y = y.get(
              E.key === null ? h : E.key
            ) || null, m(r, y, E, D);
          case rl:
            return E = oe(E), g(
              y,
              r,
              h,
              E,
              D
            );
        }
        if (cl(E) || q(E))
          return y = y.get(h) || null, S(r, y, E, D, null);
        if (typeof E.then == "function")
          return g(
            y,
            r,
            h,
            Vn(E),
            D
          );
        if (E.$$typeof === Rl)
          return g(
            y,
            r,
            h,
            Gn(r, E),
            D
          );
        Ln(r, E);
      }
      return null;
    }
    function A(y, r, h, E) {
      for (var D = null, ll = null, B = r, G = r = 0, pl = null; B !== null && G < h.length; G++) {
        B.index > G ? (pl = B, B = null) : pl = B.sibling;
        var ul = v(
          y,
          B,
          h[G],
          E
        );
        if (ul === null) {
          B === null && (B = pl);
          break;
        }
        l && B && ul.alternate === null && t(y, B), r = n(ul, r, G), ll === null ? D = ul : ll.sibling = ul, ll = ul, B = pl;
      }
      if (G === h.length)
        return u(y, B), F && cu(y, G), D;
      if (B === null) {
        for (; G < h.length; G++)
          B = z(y, h[G], E), B !== null && (r = n(
            B,
            r,
            G
          ), ll === null ? D = B : ll.sibling = B, ll = B);
        return F && cu(y, G), D;
      }
      for (B = e(B); G < h.length; G++)
        pl = g(
          B,
          y,
          G,
          h[G],
          E
        ), pl !== null && (l && (ul = pl.alternate, ul !== null && B.delete(ul.key === null ? G : ul.key)), r = n(
          pl,
          r,
          G
        ), ll === null ? D = pl : ll.sibling = pl, ll = pl);
      return l && B.forEach(function(Ju) {
        return t(y, Ju);
      }), F && cu(y, G), D;
    }
    function p(y, r, h, E) {
      if (h == null) throw Error(o(151));
      for (var D = null, ll = null, B = r, G = r = 0, pl = null, ul = h.next(); B !== null && !ul.done; G++, ul = h.next()) {
        B.index > G ? (pl = B, B = null) : pl = B.sibling;
        var Ju = v(y, B, ul.value, E);
        if (Ju === null) {
          B === null && (B = pl);
          break;
        }
        l && B && Ju.alternate === null && t(y, B), r = n(Ju, r, G), ll === null ? D = Ju : ll.sibling = Ju, ll = Ju, B = pl;
      }
      if (ul.done)
        return u(y, B), F && cu(y, G), D;
      if (B === null) {
        for (; !ul.done; G++, ul = h.next())
          ul = z(y, ul.value, E), ul !== null && (r = n(ul, r, G), ll === null ? D = ul : ll.sibling = ul, ll = ul);
        return F && cu(y, G), D;
      }
      for (B = e(B); !ul.done; G++, ul = h.next())
        ul = g(B, y, G, ul.value, E), ul !== null && (l && (pl = ul.alternate, pl !== null && B.delete(
          pl.key === null ? G : pl.key
        )), r = n(ul, r, G), ll === null ? D = ul : ll.sibling = ul, ll = ul);
      return l && B.forEach(function(S1) {
        return t(y, S1);
      }), F && cu(y, G), D;
    }
    function w(y, r, h, E) {
      if (typeof h == "object" && h !== null && h.type === bt && h.key === null && h.props.ref === void 0 && (h = h.props.children), typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case Gt:
            l: {
              for (var D = h.key; r !== null; ) {
                if (r.key === D) {
                  if (D = h.type, D === bt) {
                    if (r.tag === 7) {
                      u(
                        y,
                        r.sibling
                      ), E = a(
                        r,
                        h.props.children
                      ), Mu(E, h), E.return = y, y = E;
                      break l;
                    }
                  } else if (r.elementType === D || typeof D == "object" && D !== null && D.$$typeof === rl && oe(D) === r.type) {
                    u(
                      y,
                      r.sibling
                    ), E = a(r, h.props), Mu(E, h), E.return = y, y = E;
                    break l;
                  }
                  u(y, r);
                  break;
                } else t(y, r);
                r = r.sibling;
              }
              h.type === bt ? (E = ue(
                h.props.children,
                y.mode,
                E,
                h.key
              ), Mu(E, h), E.return = y, y = E) : (E = Hn(
                h.type,
                h.key,
                h.props,
                null,
                y.mode,
                E
              ), Mu(E, h), E.return = y, y = E);
            }
            return f(y);
          case Tt:
            l: {
              for (D = h.key; r !== null; ) {
                if (r.key === D)
                  if (r.tag === 4 && r.stateNode.containerInfo === h.containerInfo && r.stateNode.implementation === h.implementation) {
                    u(
                      y,
                      r.sibling
                    ), E = a(r, h.children || []), E.return = y, y = E;
                    break l;
                  } else {
                    u(y, r);
                    break;
                  }
                else t(y, r);
                r = r.sibling;
              }
              E = Ci(h, y.mode, E), E.return = y, y = E;
            }
            return f(y);
          case rl:
            return h = oe(h), w(
              y,
              r,
              h,
              E
            );
        }
        if (cl(h))
          return A(
            y,
            r,
            h,
            E
          );
        if (q(h)) {
          if (D = q(h), typeof D != "function") throw Error(o(150));
          return h = D.call(h), p(
            y,
            r,
            h,
            E
          );
        }
        if (typeof h.then == "function")
          return w(
            y,
            r,
            Vn(h),
            E
          );
        if (h.$$typeof === Rl)
          return w(
            y,
            r,
            Gn(y, h),
            E
          );
        Ln(y, h);
      }
      return typeof h == "string" && h !== "" || typeof h == "number" || typeof h == "bigint" ? (h = "" + h, r !== null && r.tag === 6 ? (u(y, r.sibling), E = a(r, h), E.return = y, y = E) : (u(y, r), E = Mi(h, y.mode, E), E.return = y, y = E), f(y)) : u(y, r);
    }
    return function(y, r, h, E) {
      try {
        Ua = 0;
        var D = w(
          y,
          r,
          h,
          E
        );
        return Xe = null, D;
      } catch (B) {
        if (B === Ge || B === Qn) throw B;
        var ll = lt(29, B, null, y.mode);
        return ll.lanes = E, ll.return = y, ll;
      }
    };
  }
  var se = a0(!0), n0 = a0(!1), Cu = !1;
  function xi(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Gi(l, t) {
    l = l.updateQueue, t.updateQueue === l && (t.updateQueue = {
      baseState: l.baseState,
      firstBaseUpdate: l.firstBaseUpdate,
      lastBaseUpdate: l.lastBaseUpdate,
      shared: l.shared,
      callbacks: null
    });
  }
  function Du(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function pu(l, t, u) {
    var e = l.updateQueue;
    if (e === null) return null;
    if (e = e.shared, (ol & 2) !== 0) {
      var a = e.pending;
      return a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t, t = Rn(l), Zr(l, null, u), t;
    }
    return Un(l, e, t, u), Rn(l);
  }
  function Ra(l, t, u) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (u & 4194048) !== 0)) {
      var e = t.lanes;
      e &= l.pendingLanes, u |= e, t.lanes = u, Jo(l, u);
    }
  }
  function Xi(l, t) {
    var u = l.updateQueue, e = l.alternate;
    if (e !== null && (e = e.updateQueue, u === e)) {
      var a = null, n = null;
      if (u = u.firstBaseUpdate, u !== null) {
        do {
          var f = {
            lane: u.lane,
            tag: u.tag,
            payload: u.payload,
            callback: null,
            next: null
          };
          n === null ? a = n = f : n = n.next = f, u = u.next;
        } while (u !== null);
        n === null ? a = n = t : n = n.next = t;
      } else a = n = t;
      u = {
        baseState: e.baseState,
        firstBaseUpdate: a,
        lastBaseUpdate: n,
        shared: e.shared,
        callbacks: e.callbacks
      }, l.updateQueue = u;
      return;
    }
    l = u.lastBaseUpdate, l === null ? u.firstBaseUpdate = t : l.next = t, u.lastBaseUpdate = t;
  }
  var Qi = !1;
  function Ha() {
    if (Qi) {
      var l = xe;
      if (l !== null) throw l;
    }
  }
  function Ba(l, t, u, e) {
    Qi = !1;
    var a = l.updateQueue;
    Cu = !1;
    var n = a.firstBaseUpdate, f = a.lastBaseUpdate, i = a.shared.pending;
    if (i !== null) {
      a.shared.pending = null;
      var c = i, m = c.next;
      c.next = null, f === null ? n = m : f.next = m, f = c;
      var S = l.alternate;
      S !== null && (S = S.updateQueue, i = S.lastBaseUpdate, i !== f && (i === null ? S.firstBaseUpdate = m : i.next = m, S.lastBaseUpdate = c));
    }
    if (n !== null) {
      var z = a.baseState;
      f = 0, S = m = c = null, i = n;
      do {
        var v = i.lane & -536870913, g = v !== i.lane;
        if (g ? (P & v) === v : (e & v) === v) {
          v !== 0 && v === ie && (Qi = !0), S !== null && (S = S.next = {
            lane: 0,
            tag: i.tag,
            payload: i.payload,
            callback: null,
            next: null
          });
          l: {
            var A = l, p = i;
            v = t;
            var w = u;
            switch (p.tag) {
              case 1:
                if (A = p.payload, typeof A == "function") {
                  z = A.call(w, z, v);
                  break l;
                }
                z = A;
                break l;
              case 3:
                A.flags = A.flags & -65537 | 128;
              case 0:
                if (A = p.payload, v = typeof A == "function" ? A.call(w, z, v) : A, v == null) break l;
                z = W({}, z, v);
                break l;
              case 2:
                Cu = !0;
            }
          }
          v = i.callback, v !== null && (l.flags |= 64, g && (l.flags |= 8192), g = a.callbacks, g === null ? a.callbacks = [v] : g.push(v));
        } else
          g = {
            lane: v,
            tag: i.tag,
            payload: i.payload,
            callback: i.callback,
            next: null
          }, S === null ? (m = S = g, c = z) : S = S.next = g, f |= v;
        if (i = i.next, i === null) {
          if (i = a.shared.pending, i === null)
            break;
          g = i, i = g.next, g.next = null, a.lastBaseUpdate = g, a.shared.pending = null;
        }
      } while (!0);
      S === null && (c = z), a.baseState = c, a.firstBaseUpdate = m, a.lastBaseUpdate = S, n === null && (a.shared.lanes = 0), qu |= f, l.lanes = f, l.memoizedState = z;
    }
  }
  function f0(l, t) {
    if (typeof l != "function")
      throw Error(o(191, l));
    l.call(t);
  }
  function i0(l, t) {
    var u = l.callbacks;
    if (u !== null)
      for (l.callbacks = null, l = 0; l < u.length; l++)
        f0(u[l], t);
  }
  var Uu = Xt(null), Kn = Xt(0);
  function c0(l, t) {
    l = mu, Sl(Kn, l), Sl(Uu, t), mu = l | t.baseLanes;
  }
  function Zi() {
    Sl(Kn, mu), Sl(Uu, Uu.current);
  }
  function Vi() {
    mu = Kn.current, ql(Uu), ql(Kn);
  }
  var Xl = Xt(null), Jl = null;
  function Ru(l) {
    var t = l.alternate;
    Sl(Ql, Ql.current & 1), Sl(Xl, l), Jl === null && (t === null || Uu.current !== null || t.memoizedState !== null) && (Jl = l);
  }
  function Li(l) {
    Sl(Ql, Ql.current), Sl(Xl, l), Jl === null && (Jl = l);
  }
  function o0(l) {
    l.tag === 22 ? (Sl(Ql, Ql.current), Sl(Xl, l), Jl === null && (Jl = l)) : Hu();
  }
  function Hu() {
    Sl(Ql, Ql.current), Sl(Xl, Xl.current);
  }
  function dt(l) {
    ql(Xl), Jl === l && (Jl = null), ql(Ql);
  }
  var Ql = Xt(0);
  function Ya(l, t) {
    Sl(Xl, Xl.current), Sl(Ql, t);
  }
  function Ki(l) {
    ql(Ql), ql(Xl), Jl === l && (Jl = null);
  }
  function Jn(l) {
    for (var t = l; t !== null; ) {
      if (t.tag === 13) {
        var u = t.memoizedState;
        if (u !== null && (u = u.dehydrated, u === null || yo(u) || mo(u)))
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== "independent") {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === l) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === l) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var su = 0, J = null, ml = null, Cl = null, wn = !1, Qe = !1, de = !1, $n = 0, ja = 0, Ze = null, Gy = 0;
  function Ol() {
    throw Error(o(321));
  }
  function Ji(l, t) {
    if (t === null) return !1;
    for (var u = 0; u < t.length && u < l.length; u++)
      if (!st(l[u], t[u])) return !1;
    return !0;
  }
  function wi(l, t, u, e, a, n) {
    return su = n, J = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, R.H = l === null || l.memoizedState === null ? J0 : w0, de = !1, n = u(e, a), de = !1, Qe && (n = s0(
      t,
      u,
      e,
      a
    )), r0(l), n;
  }
  function r0(l) {
    R.H = tf;
    var t = ml !== null && ml.next !== null;
    if (su = 0, Cl = ml = J = null, wn = !1, ja = 0, Ze = null, t) throw Error(o(300));
    l === null || Dl || (l = l.dependencies, l !== null && xn(l) && (Dl = !0));
  }
  function s0(l, t, u, e) {
    J = l;
    var a = 0;
    do {
      if (Qe && (Ze = null), ja = 0, Qe = !1, 25 <= a) throw Error(o(301));
      if (a += 1, Cl = ml = null, l.updateQueue != null) {
        var n = l.updateQueue;
        n.lastEffect = null, n.events = null, n.stores = null, n.memoCache != null && (n.memoCache.index = 0);
      }
      R.H = wy, n = t(u, e);
    } while (Qe);
    return n;
  }
  function Xy() {
    var l = R.H, t = l.useState()[0];
    return t = typeof t.then == "function" ? qa(t) : t, l = l.useState()[0], (ml !== null ? ml.memoizedState : null) !== l && (J.flags |= 1024), t;
  }
  function $i() {
    var l = $n !== 0;
    return $n = 0, l;
  }
  function Fi(l, t, u) {
    t.updateQueue = l.updateQueue, t.flags &= -2053, l.lanes &= ~u;
  }
  function Wi(l) {
    if (wn) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        t !== null && (t.pending = null), l = l.next;
      }
      wn = !1;
    }
    su = 0, Cl = ml = J = null, Qe = !1, ja = $n = 0, Ze = null;
  }
  function Fl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Cl === null ? J.memoizedState = Cl = l : Cl = Cl.next = l, Cl;
  }
  function Al() {
    if (ml === null) {
      var l = J.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = ml.next;
    var t = Cl === null ? J.memoizedState : Cl.next;
    if (t !== null)
      Cl = t, ml = l;
    else {
      if (l === null)
        throw J.alternate === null ? Error(o(467)) : Error(o(310));
      ml = l, l = {
        memoizedState: ml.memoizedState,
        baseState: ml.baseState,
        baseQueue: ml.baseQueue,
        queue: ml.queue,
        next: null
      }, Cl === null ? J.memoizedState = Cl = l : Cl = Cl.next = l;
    }
    return Cl;
  }
  function Fn() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function qa(l) {
    var t = ja;
    return ja += 1, Ze === null && (Ze = []), l = t0(Ze, l, t), t = J, (Cl === null ? t.memoizedState : Cl.next) === null && (t = t.alternate, R.H = t === null || t.memoizedState === null ? J0 : w0), l;
  }
  function Wn(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return qa(l);
      if (l.$$typeof === O) return;
      if (l.$$typeof === Rl) return Gl(l);
    }
    throw Error(o(438, String(l)));
  }
  function Ii(l) {
    var t = null, u = J.updateQueue;
    if (u !== null && (t = u.memoCache), t == null) {
      var e = J.alternate;
      e !== null && (e = e.updateQueue, e !== null && (e = e.memoCache, e != null && (t = {
        data: e.data.map(function(a) {
          return a.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), u === null && (u = Fn(), J.updateQueue = u), u.memoCache = t, u = t.data[t.index], u === void 0)
      for (u = t.data[t.index] = Array(l), e = 0; e < l; e++)
        u[e] = Fu;
    return t.index++, u;
  }
  function du(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function In(l) {
    var t = Al();
    return ki(t, ml, l);
  }
  function ki(l, t, u) {
    var e = l.queue;
    if (e === null) throw Error(o(311));
    e.lastRenderedReducer = u;
    var a = l.baseQueue, n = e.pending;
    if (n !== null) {
      if (a !== null) {
        var f = a.next;
        a.next = n.next, n.next = f;
      }
      t.baseQueue = a = n, e.pending = null;
    }
    if (n = l.baseState, a === null) l.memoizedState = n;
    else {
      t = a.next;
      var i = f = null, c = null, m = t, S = !1;
      do {
        var z = m.lane & -536870913;
        if (z !== m.lane ? (P & z) === z : (su & z) === z) {
          var v = m.revertLane;
          if (v === 0)
            c !== null && (c = c.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: m.action,
              hasEagerState: m.hasEagerState,
              eagerState: m.eagerState,
              next: null
            }), z === ie && (S = !0);
          else if ((su & v) === v) {
            m = m.next, v === ie && (S = !0);
            continue;
          } else
            z = {
              lane: 0,
              revertLane: m.revertLane,
              gesture: null,
              action: m.action,
              hasEagerState: m.hasEagerState,
              eagerState: m.eagerState,
              next: null
            }, c === null ? (i = c = z, f = n) : c = c.next = z, J.lanes |= v, qu |= v;
          z = m.action, de && u(n, z), n = m.hasEagerState ? m.eagerState : u(n, z);
        } else
          v = {
            lane: z,
            revertLane: m.revertLane,
            gesture: m.gesture,
            action: m.action,
            hasEagerState: m.hasEagerState,
            eagerState: m.eagerState,
            next: null
          }, c === null ? (i = c = v, f = n) : c = c.next = v, J.lanes |= z, qu |= z;
        m = m.next;
      } while (m !== null && m !== t);
      if (c === null ? f = n : c.next = i, !st(n, l.memoizedState) && (Dl = !0, S && (u = xe, u !== null)))
        throw u;
      l.memoizedState = n, l.baseState = f, l.baseQueue = c, e.lastRenderedState = n;
    }
    return a === null && (e.lanes = 0), [l.memoizedState, e.dispatch];
  }
  function Pi(l) {
    var t = Al(), u = t.queue;
    if (u === null) throw Error(o(311));
    u.lastRenderedReducer = l;
    var e = u.dispatch, a = u.pending, n = t.memoizedState;
    if (a !== null) {
      u.pending = null;
      var f = a = a.next;
      do
        n = l(n, f.action), f = f.next;
      while (f !== a);
      st(n, t.memoizedState) || (Dl = !0), t.memoizedState = n, t.baseQueue === null && (t.baseState = n), u.lastRenderedState = n;
    }
    return [n, e];
  }
  function d0(l, t, u) {
    var e = J, a = Al(), n = F;
    if (n) {
      if (u === void 0) throw Error(o(407));
      u = u();
    } else u = t();
    var f = !st(
      (ml || a).memoizedState,
      u
    );
    if (f && (a.memoizedState = u, Dl = !0), a = a.queue, uc(m0.bind(null, e, a, l), [
      l
    ]), l = a.getSnapshot !== t || f || Cl !== null && (Cl.memoizedState.tag & 1) !== 0, Ve(
      l ? 9 : 8,
      { destroy: void 0 },
      y0.bind(null, e, a, u, t),
      null
    ), l) {
      if (e.flags |= 2048, gl === null) throw Error(o(349));
      n || (su & 127) !== 0 || v0(e, t, u);
    }
    return u;
  }
  function v0(l, t, u) {
    l.flags |= 16384, l = { getSnapshot: t, value: u }, t = J.updateQueue, t === null ? (t = Fn(), J.updateQueue = t, t.stores = [l]) : (u = t.stores, u === null ? t.stores = [l] : u.push(l));
  }
  function y0(l, t, u, e) {
    t.value = u, t.getSnapshot = e, h0(t) && g0(l);
  }
  function m0(l, t, u) {
    return u(function() {
      h0(t) && g0(l);
    });
  }
  function h0(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var u = t();
      return !st(l, u);
    } catch {
      return !0;
    }
  }
  function g0(l) {
    var t = te(l, 2);
    t !== null && at(t, l, 2);
  }
  function lc(l) {
    var t = Fl();
    if (typeof l == "function") {
      var u = l;
      if (l = u(), de) {
        bu(!0);
        try {
          u();
        } finally {
          bu(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = l, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: du,
      lastRenderedState: l
    }, t;
  }
  function S0(l, t, u, e) {
    return l.baseState = u, ki(
      l,
      ml,
      typeof e == "function" ? e : du
    );
  }
  function Qy(l, t, u, e, a) {
    if (lf(l)) throw Error(o(485));
    if (l = t.action, l !== null) {
      var n = {
        payload: a,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(f) {
          n.listeners.push(f);
        }
      };
      R.T !== null ? u(!0) : n.isTransition = !1, e(n), u = t.pending, u === null ? (n.next = t.pending = n, T0(t, n)) : (n.next = u.next, t.pending = u.next = n);
    }
  }
  function T0(l, t) {
    var u = t.action, e = t.payload, a = l.state;
    if (t.isTransition) {
      var n = R.T, f = {};
      f.types = n !== null ? n.types : null, R.T = f;
      try {
        var i = u(a, e), c = R.S;
        c !== null && c(f, i), b0(l, t, i);
      } catch (m) {
        tc(l, t, m);
      } finally {
        n !== null && f.types !== null && (n.types = f.types), R.T = n;
      }
    } else
      try {
        n = u(a, e), b0(l, t, n);
      } catch (m) {
        tc(l, t, m);
      }
  }
  function b0(l, t, u) {
    u !== null && typeof u == "object" && typeof u.then == "function" ? u.then(
      function(e) {
        E0(l, t, e);
      },
      function(e) {
        return tc(l, t, e);
      }
    ) : E0(l, t, u);
  }
  function E0(l, t, u) {
    t.status = "fulfilled", t.value = u, z0(t), l.state = u, t = l.pending, t !== null && (u = t.next, u === t ? l.pending = null : (u = u.next, t.next = u, T0(l, u)));
  }
  function tc(l, t, u) {
    var e = l.pending;
    if (l.pending = null, e !== null) {
      e = e.next;
      do
        t.status = "rejected", t.reason = u, z0(t), t = t.next;
      while (t !== e);
    }
    l.action = null;
  }
  function z0(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function _0(l, t) {
    return t;
  }
  function O0(l, t) {
    if (F) {
      var u = gl.formState;
      if (u !== null) {
        l: {
          var e = J;
          if (F) {
            if (Tl) {
              t: {
                for (var a = Tl, n = At; a.nodeType !== 8; ) {
                  if (!n) {
                    a = null;
                    break t;
                  }
                  if (a = Ct(
                    a.nextSibling
                  ), a === null) {
                    a = null;
                    break t;
                  }
                }
                n = a.data, a = n === "F!" || n === "F" ? a : null;
              }
              if (a) {
                Tl = Ct(
                  a.nextSibling
                ), e = a.data === "F!";
                break l;
              }
            }
            Nu(e);
          }
          e = !1;
        }
        e && (t = u[0]);
      }
    }
    return u = Fl(), u.memoizedState = u.baseState = t, e = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: _0,
      lastRenderedState: t
    }, u.queue = e, u = V0.bind(
      null,
      J,
      e
    ), e.dispatch = u, e = lc(!1), n = ic.bind(
      null,
      J,
      !1,
      e.queue
    ), e = Fl(), a = {
      state: t,
      dispatch: null,
      action: l,
      pending: null
    }, e.queue = a, u = Qy.bind(
      null,
      J,
      a,
      n,
      u
    ), a.dispatch = u, e.memoizedState = l, [t, u, !1];
  }
  function N0(l) {
    var t = Al();
    return A0(t, ml, l);
  }
  function A0(l, t, u) {
    if (t = ki(
      l,
      t,
      _0
    )[0], l = In(du)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var e = qa(t);
      } catch (f) {
        throw f === Ge ? Qn : f;
      }
    else e = t;
    t = Al();
    var a = t.queue, n = a.dispatch;
    return u !== t.memoizedState && (J.flags |= 2048, Ve(
      9,
      { destroy: void 0 },
      Zy.bind(null, a, u),
      null
    )), [e, n, l];
  }
  function Zy(l, t) {
    l.action = t;
  }
  function M0(l) {
    var t = Al(), u = ml;
    if (u !== null)
      return A0(t, u, l);
    Al(), t = t.memoizedState, u = Al();
    var e = u.queue.dispatch;
    return u.memoizedState = l, [t, e, !1];
  }
  function Ve(l, t, u, e) {
    return l = { tag: l, create: u, deps: e, inst: t, next: null }, t = J.updateQueue, t === null && (t = Fn(), J.updateQueue = t), u = t.lastEffect, u === null ? t.lastEffect = l.next = l : (e = u.next, u.next = l, l.next = e, t.lastEffect = l), l;
  }
  function C0() {
    return Al().memoizedState;
  }
  function kn(l, t, u, e) {
    var a = Fl();
    J.flags |= l, a.memoizedState = Ve(
      1 | t,
      { destroy: void 0 },
      u,
      e === void 0 ? null : e
    );
  }
  function Pn(l, t, u, e) {
    var a = Al();
    e = e === void 0 ? null : e;
    var n = a.memoizedState.inst;
    ml !== null && e !== null && Ji(e, ml.memoizedState.deps) ? a.memoizedState = Ve(t, n, u, e) : (J.flags |= l, a.memoizedState = Ve(
      1 | t,
      n,
      u,
      e
    ));
  }
  function D0(l, t) {
    kn(8390656, 8, l, t);
  }
  function uc(l, t) {
    Pn(2048, 8, l, t);
  }
  function Vy(l) {
    J.flags |= 4;
    var t = J.updateQueue;
    if (t === null)
      t = Fn(), J.updateQueue = t, t.events = [l];
    else {
      var u = t.events;
      u === null ? t.events = [l] : u.push(l);
    }
  }
  function p0(l) {
    var t = Al().memoizedState;
    return Vy({ ref: t, nextImpl: l }), function() {
      if ((ol & 2) !== 0) throw Error(o(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function U0(l, t) {
    return Pn(4, 2, l, t);
  }
  function R0(l, t) {
    return Pn(4, 4, l, t);
  }
  function H0(l, t) {
    if (typeof t == "function") {
      l = l();
      var u = t(l);
      return function() {
        typeof u == "function" ? u() : t(null);
      };
    }
    if (t != null)
      return l = l(), t.current = l, function() {
        t.current = null;
      };
  }
  function B0(l, t, u) {
    u = u != null ? u.concat([l]) : null, Pn(4, 4, H0.bind(null, t, l), u);
  }
  function ec() {
  }
  function Y0(l, t) {
    var u = Al();
    t = t === void 0 ? null : t;
    var e = u.memoizedState;
    return t !== null && Ji(t, e[1]) ? e[0] : (u.memoizedState = [l, t], l);
  }
  function j0(l, t) {
    var u = Al();
    t = t === void 0 ? null : t;
    var e = u.memoizedState;
    if (t !== null && Ji(t, e[1]))
      return e[0];
    if (e = l(), de) {
      bu(!0);
      try {
        l();
      } finally {
        bu(!1);
      }
    }
    return u.memoizedState = [e, t], e;
  }
  function ac(l, t, u) {
    return u === void 0 || (su & 1073741824) !== 0 && (P & 261930) === 0 ? l.memoizedState = t : (l.memoizedState = u, l = Js(), J.lanes |= l, qu |= l, u);
  }
  function q0(l, t, u, e) {
    return st(u, t) ? u : Uu.current !== null ? (l = ac(l, u, e), st(l, t) || (Dl = !0), l) : (su & 106) === 0 || (su & 1073741824) !== 0 && (P & 261930) === 0 ? (Dl = !0, l.memoizedState = u) : (l = Js(), J.lanes |= l, qu |= l, t);
  }
  function x0(l, t, u, e, a) {
    var n = L.p;
    L.p = n !== 0 && 8 > n ? n : 8;
    var f = R.T, i = {};
    i.types = f !== null ? f.types : null, R.T = i, ic(l, !1, t, u);
    try {
      var c = a(), m = R.S;
      if (m !== null && m(i, c), c !== null && typeof c == "object" && typeof c.then == "function") {
        var S = xy(
          c,
          e
        );
        xa(
          l,
          t,
          S,
          ht(l)
        );
      } else
        xa(
          l,
          t,
          e,
          ht(l)
        );
    } catch (z) {
      xa(
        l,
        t,
        { then: function() {
        }, status: "rejected", reason: z },
        ht()
      );
    } finally {
      L.p = n, f !== null && i.types !== null && (f.types = i.types), R.T = f;
    }
  }
  function Ly() {
  }
  function nc(l, t, u, e) {
    if (l.tag !== 5) throw Error(o(476));
    var a = G0(l).queue;
    x0(
      l,
      a,
      t,
      tu,
      u === null ? Ly : function() {
        return X0(l), u(e);
      }
    );
  }
  function G0(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: tu,
      baseState: tu,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: du,
        lastRenderedState: tu
      },
      next: null
    };
    var u = {};
    return t.next = {
      memoizedState: u,
      baseState: u,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: du,
        lastRenderedState: u
      },
      next: null
    }, l.memoizedState = t, l = l.alternate, l !== null && (l.memoizedState = t), t;
  }
  function X0(l) {
    var t = G0(l);
    t.next === null && (t = l.alternate.memoizedState), xa(
      l,
      t.next.queue,
      {},
      ht()
    );
  }
  function fc() {
    return Gl(ca);
  }
  function Q0() {
    return Al().memoizedState;
  }
  function Z0() {
    return Al().memoizedState;
  }
  function Ky(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var u = ht();
          l = Du(u);
          var e = pu(t, l, u);
          e !== null && (at(e, t, u), Ra(e, t, u)), t = { cache: Bi() }, l.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function Jy(l, t, u) {
    var e = ht();
    u = {
      lane: e,
      revertLane: 0,
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, lf(l) ? L0(t, u) : (u = Ni(l, t, u, e), u !== null && (at(u, l, e), K0(u, t, e)));
  }
  function V0(l, t, u) {
    var e = ht();
    xa(l, t, u, e);
  }
  function xa(l, t, u, e) {
    var a = {
      lane: e,
      revertLane: 0,
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (lf(l)) L0(t, a);
    else {
      var n = l.alternate;
      if (l.lanes === 0 && (n === null || n.lanes === 0) && (n = t.lastRenderedReducer, n !== null))
        try {
          var f = t.lastRenderedState, i = n(f, u);
          if (a.hasEagerState = !0, a.eagerState = i, st(i, f))
            return Un(l, t, a, 0), gl === null && pn(), !1;
        } catch {
        }
      if (u = Ni(l, t, a, e), u !== null)
        return at(u, l, e), K0(u, t, e), !0;
    }
    return !1;
  }
  function ic(l, t, u, e) {
    if (e = {
      lane: 2,
      revertLane: Ic(),
      gesture: null,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, lf(l)) {
      if (t) throw Error(o(479));
    } else
      t = Ni(
        l,
        u,
        e,
        2
      ), t !== null && at(t, l, 2);
  }
  function lf(l) {
    var t = l.alternate;
    return l === J || t !== null && t === J;
  }
  function L0(l, t) {
    Qe = wn = !0;
    var u = l.pending;
    u === null ? t.next = t : (t.next = u.next, u.next = t), l.pending = t;
  }
  function K0(l, t, u) {
    if ((u & 4194048) !== 0) {
      var e = t.lanes;
      e &= l.pendingLanes, u |= e, t.lanes = u, Jo(l, u);
    }
  }
  var tf = {
    readContext: Gl,
    use: Wn,
    useCallback: Ol,
    useContext: Ol,
    useEffect: Ol,
    useImperativeHandle: Ol,
    useLayoutEffect: Ol,
    useInsertionEffect: Ol,
    useMemo: Ol,
    useReducer: Ol,
    useRef: Ol,
    useState: Ol,
    useDebugValue: Ol,
    useDeferredValue: Ol,
    useTransition: Ol,
    useSyncExternalStore: Ol,
    useId: Ol,
    useHostTransitionStatus: Ol,
    useFormState: Ol,
    useActionState: Ol,
    useOptimistic: Ol,
    useMemoCache: Ol,
    useCacheRefresh: Ol,
    useEffectEvent: Ol
  }, J0 = {
    readContext: Gl,
    use: Wn,
    useCallback: function(l, t) {
      return Fl().memoizedState = [
        l,
        t === void 0 ? null : t
      ], l;
    },
    useContext: Gl,
    useEffect: D0,
    useImperativeHandle: function(l, t, u) {
      u = u != null ? u.concat([l]) : null, kn(
        4194308,
        4,
        H0.bind(null, t, l),
        u
      );
    },
    useLayoutEffect: function(l, t) {
      return kn(4194308, 4, l, t);
    },
    useInsertionEffect: function(l, t) {
      kn(4, 2, l, t);
    },
    useMemo: function(l, t) {
      var u = Fl();
      t = t === void 0 ? null : t;
      var e = l();
      if (de) {
        bu(!0);
        try {
          l();
        } finally {
          bu(!1);
        }
      }
      return u.memoizedState = [e, t], e;
    },
    useReducer: function(l, t, u) {
      var e = Fl();
      if (u !== void 0) {
        var a = u(t);
        if (de) {
          bu(!0);
          try {
            u(t);
          } finally {
            bu(!1);
          }
        }
      } else a = t;
      return e.memoizedState = e.baseState = a, l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l,
        lastRenderedState: a
      }, e.queue = l, l = l.dispatch = Jy.bind(
        null,
        J,
        l
      ), [e.memoizedState, l];
    },
    useRef: function(l) {
      var t = Fl();
      return l = { current: l }, t.memoizedState = l;
    },
    useState: function(l) {
      l = lc(l);
      var t = l.queue, u = V0.bind(null, J, t);
      return t.dispatch = u, [l.memoizedState, u];
    },
    useDebugValue: ec,
    useDeferredValue: function(l, t) {
      var u = Fl();
      return ac(u, l, t);
    },
    useTransition: function() {
      var l = lc(!1);
      return l = x0.bind(
        null,
        J,
        l.queue,
        !0,
        !1
      ), Fl().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, t, u) {
      var e = J, a = Fl();
      if (F) {
        if (u === void 0)
          throw Error(o(407));
        u = u();
      } else {
        if (u = t(), gl === null)
          throw Error(o(349));
        (P & 127) !== 0 || v0(e, t, u);
      }
      a.memoizedState = u;
      var n = { value: u, getSnapshot: t };
      return a.queue = n, D0(m0.bind(null, e, n, l), [
        l
      ]), e.flags |= 2048, Ve(
        9,
        { destroy: void 0 },
        y0.bind(
          null,
          e,
          n,
          u,
          t
        ),
        null
      ), u;
    },
    useId: function() {
      var l = Fl(), t = gl.identifierPrefix;
      if (F) {
        var u = Lt, e = Vt;
        u = (e & ~(1 << 32 - ot(e) - 1)).toString(32) + u, t = "_" + t + "R_" + u, u = $n++, 0 < u && (t += "H" + u.toString(32)), t += "_";
      } else
        u = Gy++, t = "_" + t + "r_" + u.toString(32) + "_";
      return l.memoizedState = t;
    },
    useHostTransitionStatus: fc,
    useFormState: O0,
    useActionState: O0,
    useOptimistic: function(l) {
      var t = Fl();
      t.memoizedState = t.baseState = l;
      var u = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = u, t = ic.bind(
        null,
        J,
        !0,
        u
      ), u.dispatch = t, [l, t];
    },
    useMemoCache: Ii,
    useCacheRefresh: function() {
      return Fl().memoizedState = Ky.bind(
        null,
        J
      );
    },
    useEffectEvent: function(l) {
      var t = Fl(), u = { impl: l };
      return t.memoizedState = u, function() {
        if ((ol & 2) !== 0)
          throw Error(o(440));
        return u.impl.apply(void 0, arguments);
      };
    }
  }, w0 = {
    readContext: Gl,
    use: Wn,
    useCallback: Y0,
    useContext: Gl,
    useEffect: uc,
    useImperativeHandle: B0,
    useInsertionEffect: U0,
    useLayoutEffect: R0,
    useMemo: j0,
    useReducer: In,
    useRef: C0,
    useState: function() {
      return In(du);
    },
    useDebugValue: ec,
    useDeferredValue: function(l, t) {
      var u = Al();
      return q0(
        u,
        ml.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = In(du)[0], t = Al().memoizedState;
      return [
        typeof l == "boolean" ? l : qa(l),
        t
      ];
    },
    useSyncExternalStore: d0,
    useId: Q0,
    useHostTransitionStatus: fc,
    useFormState: N0,
    useActionState: N0,
    useOptimistic: function(l, t) {
      var u = Al();
      return S0(u, ml, l, t);
    },
    useMemoCache: Ii,
    useCacheRefresh: Z0,
    useEffectEvent: p0
  }, wy = {
    readContext: Gl,
    use: Wn,
    useCallback: Y0,
    useContext: Gl,
    useEffect: uc,
    useImperativeHandle: B0,
    useInsertionEffect: U0,
    useLayoutEffect: R0,
    useMemo: j0,
    useReducer: Pi,
    useRef: C0,
    useState: function() {
      return Pi(du);
    },
    useDebugValue: ec,
    useDeferredValue: function(l, t) {
      var u = Al();
      return ml === null ? ac(u, l, t) : q0(
        u,
        ml.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = Pi(du)[0], t = Al().memoizedState;
      return [
        typeof l == "boolean" ? l : qa(l),
        t
      ];
    },
    useSyncExternalStore: d0,
    useId: Q0,
    useHostTransitionStatus: fc,
    useFormState: M0,
    useActionState: M0,
    useOptimistic: function(l, t) {
      var u = Al();
      return ml !== null ? S0(u, ml, l, t) : (u.baseState = l, [l, u.queue.dispatch]);
    },
    useMemoCache: Ii,
    useCacheRefresh: Z0,
    useEffectEvent: p0
  };
  function cc(l, t, u, e) {
    t = l.memoizedState, u = u(e, t), u = u == null ? t : W({}, t, u), l.memoizedState = u, l.lanes === 0 && (l.updateQueue.baseState = u);
  }
  var oc = {
    enqueueSetState: function(l, t, u) {
      l = l._reactInternals;
      var e = ht(), a = Du(e);
      a.payload = t, u != null && (a.callback = u), t = pu(l, a, e), t !== null && (at(t, l, e), Ra(t, l, e));
    },
    enqueueReplaceState: function(l, t, u) {
      l = l._reactInternals;
      var e = ht(), a = Du(e);
      a.tag = 1, a.payload = t, u != null && (a.callback = u), t = pu(l, a, e), t !== null && (at(t, l, e), Ra(t, l, e));
    },
    enqueueForceUpdate: function(l, t) {
      l = l._reactInternals;
      var u = ht(), e = Du(u);
      e.tag = 2, t != null && (e.callback = t), t = pu(l, e, u), t !== null && (at(t, l, u), Ra(t, l, u));
    }
  };
  function $0(l, t, u, e, a, n, f) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(e, n, f) : t.prototype && t.prototype.isPureReactComponent ? !Oa(u, e) || !Oa(a, n) : !0;
  }
  function F0(l, t, u, e) {
    l = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(u, e), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(u, e), t.state !== l && oc.enqueueReplaceState(t, t.state, null);
  }
  function ve(l, t) {
    var u = t;
    if ("ref" in t) {
      u = {};
      for (var e in t)
        e !== "ref" && (u[e] = t[e]);
    }
    if (l = l.defaultProps) {
      u === t && (u = W({}, u));
      for (var a in l)
        u[a] === void 0 && (u[a] = l[a]);
    }
    return u;
  }
  function W0(l) {
    Dn(l);
  }
  function I0(l) {
    console.error(l);
  }
  function k0(l) {
    Dn(l);
  }
  function uf(l, t) {
    try {
      var u = l.onUncaughtError;
      u(t.value, { componentStack: t.stack });
    } catch (e) {
      setTimeout(function() {
        throw e;
      });
    }
  }
  function P0(l, t, u) {
    try {
      var e = l.onCaughtError;
      e(u.value, {
        componentStack: u.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function rc(l, t, u) {
    return u = Du(u), u.tag = 3, u.payload = { element: null }, u.callback = function() {
      uf(l, t);
    }, u;
  }
  function ls(l) {
    return l = Du(l), l.tag = 3, l;
  }
  function ts(l, t, u, e) {
    var a = u.type.getDerivedStateFromError;
    if (typeof a == "function") {
      var n = e.value;
      l.payload = function() {
        return a(n);
      }, l.callback = function() {
        P0(t, u, e);
      };
    }
    var f = u.stateNode;
    f !== null && typeof f.componentDidCatch == "function" && (l.callback = function() {
      P0(t, u, e), typeof a != "function" && (xu === null ? xu = /* @__PURE__ */ new Set([this]) : xu.add(this));
      var i = e.stack;
      this.componentDidCatch(e.value, {
        componentStack: i !== null ? i : ""
      });
    });
  }
  function $y(l, t, u, e, a) {
    if (u.flags |= 32768, e !== null && typeof e == "object" && typeof e.then == "function") {
      if (t = u.alternate, t !== null && ne(
        t,
        u,
        a,
        !0
      ), u = Xl.current, u !== null) {
        switch (u.tag) {
          case 31:
          case 13:
          case 19:
            return Jl === null ? Of() : u.alternate === null && Nl === 0 && (Nl = 3), u.flags &= -257, u.flags |= 65536, u.lanes = a, e === Zn ? u.flags |= 16384 : (t = u.updateQueue, t === null ? u.updateQueue = /* @__PURE__ */ new Set([e]) : t.add(e), $c(l, e, a)), !1;
          case 22:
            return u.flags |= 65536, e === Zn ? u.flags |= 16384 : (t = u.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([e])
            }, u.updateQueue = t) : (u = t.retryQueue, u === null ? t.retryQueue = /* @__PURE__ */ new Set([e]) : u.add(e)), $c(l, e, a)), !1;
        }
        throw Error(o(435, u.tag));
      }
      return $c(l, e, a), Of(), !1;
    }
    if (F)
      return t = Xl.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = a, e !== pi && (l = Error(o(422), { cause: e }), Ma(_t(l, u)))) : (e !== pi && (t = Error(o(423), {
        cause: e
      }), Ma(
        _t(t, u)
      )), l = l.current.alternate, l.flags |= 65536, a &= -a, l.lanes |= a, e = _t(e, u), a = rc(
        l.stateNode,
        e,
        a
      ), Xi(l, a), Nl !== 4 && (Nl = 2)), !1;
    var n = Error(o(520), { cause: e });
    if (n = _t(n, u), Ja === null ? Ja = [n] : Ja.push(n), Nl !== 4 && (Nl = 2), t === null) return !0;
    e = _t(e, u), u = t;
    do {
      switch (u.tag) {
        case 3:
          return u.flags |= 65536, l = a & -a, u.lanes |= l, l = rc(u.stateNode, e, l), Xi(u, l), !1;
        case 1:
          if (t = u.type, n = u.stateNode, (u.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (xu === null || !xu.has(n))))
            return u.flags |= 65536, a &= -a, u.lanes |= a, a = ls(a), ts(
              a,
              l,
              u,
              e
            ), Xi(u, a), !1;
          break;
        case 22:
          if (u.memoizedState !== null)
            return u.flags |= 65536, !1;
      }
      u = u.return;
    } while (u !== null);
    return !1;
  }
  var sc = Error(o(461)), Dl = !1;
  function Ul(l, t, u, e) {
    t.child = l === null ? n0(t, null, u, e) : se(
      t,
      l.child,
      u,
      e
    );
  }
  function us(l, t, u, e, a) {
    u = u.render;
    var n = t.ref;
    if ("ref" in e) {
      var f = {};
      for (var i in e)
        i !== "ref" && (f[i] = e[i]);
    } else f = e;
    return fe(t), e = wi(
      l,
      t,
      u,
      f,
      n,
      a
    ), i = $i(), l !== null && !Dl ? (Fi(l, t, a), vu(l, t, a)) : (F && i && Yn(t), t.flags |= 1, Ul(l, t, e, a), t.child);
  }
  function es(l, t, u, e, a) {
    if (l === null) {
      var n = u.type;
      return typeof n == "function" && !Ai(n) && n.defaultProps === void 0 && u.compare === null ? (t.tag = 15, t.type = n, as(
        l,
        t,
        n,
        e,
        a
      )) : (l = Hn(
        u.type,
        null,
        e,
        t,
        t.mode,
        a
      ), l.ref = t.ref, l.return = t, t.child = l);
    }
    if (n = l.child, !Tc(l, a)) {
      var f = n.memoizedProps;
      if (u = u.compare, u = u !== null ? u : Oa, u(f, e) && l.ref === t.ref)
        return vu(l, t, a);
    }
    return t.flags |= 1, l = iu(n, e), l.ref = t.ref, l.return = t, t.child = l;
  }
  function as(l, t, u, e, a) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (Oa(n, e) && l.ref === t.ref)
        if (Dl = !1, t.pendingProps = e = n, Tc(l, a))
          (l.flags & 131072) !== 0 && (Dl = !0);
        else
          return t.lanes = l.lanes, vu(l, t, a);
    }
    return dc(
      l,
      t,
      u,
      e,
      a
    );
  }
  function ns(l, t, u, e) {
    var a = e.children, n = l !== null ? l.memoizedState : null;
    if (l === null && t.stateNode === null && (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), e.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (n = n !== null ? n.baseLanes | u : u, l !== null) {
          for (e = t.child = l.child, a = 0; e !== null; )
            a = a | e.lanes | e.childLanes, e = e.sibling;
          e = a & ~n;
        } else e = 0, t.child = null;
        return fs(
          l,
          t,
          n,
          u,
          e
        );
      }
      if ((u & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && Xn(
          t,
          n !== null ? n.cachePool : null
        ), n !== null ? c0(t, n) : Zi(), o0(t);
      else
        return e = t.lanes = 536870912, fs(
          l,
          t,
          n !== null ? n.baseLanes | u : u,
          u,
          e
        );
    } else
      n !== null ? (Xn(t, n.cachePool), c0(t, n), Hu(), t.memoizedState = null) : (l !== null && Xn(t, null), Zi(), Hu());
    return Ul(l, t, a, u), t.child;
  }
  function Ga(l, t) {
    return l !== null && l.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function fs(l, t, u, e, a) {
    var n = ji();
    return n = n === null ? null : { parent: Ml._currentValue, pool: n }, t.memoizedState = {
      baseLanes: u,
      cachePool: n
    }, l !== null && Xn(t, null), Zi(), o0(t), l !== null && ne(l, t, e, !0), t.childLanes = a, null;
  }
  function ef(l, t) {
    return t = af(
      { mode: t.mode, children: t.children },
      l.mode
    ), t.ref = l.ref, l.child = t, t.return = l, t;
  }
  function is(l, t, u) {
    return se(t, l.child, null, u), l = ef(t, t.pendingProps), l.flags |= 2, dt(t), t.memoizedState = null, l;
  }
  function Fy(l, t, u) {
    var e = t.pendingProps, a = (t.flags & 128) !== 0;
    if (t.flags &= -129, l === null) {
      if (F) {
        if (e.mode === "hidden")
          return l = ef(t, e), t.lanes = 536870912, l.memoizedState = { baseLanes: 0, cachePool: null }, Ga(null, l);
        if (Li(t), (l = Tl) ? (l = Hd(
          l,
          At
        ), l = l !== null && l.data === "&" ? l : null, l !== null && (t.memoizedState = {
          dehydrated: l,
          treeContext: _u !== null ? { id: Vt, overflow: Lt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, u = Lr(l), u.return = t, t.child = u, Bl = t, Tl = null)) : l = null, l === null) throw Nu(t);
        return t.lanes = 536870912, null;
      }
      return ef(t, e);
    }
    var n = l.memoizedState;
    if (n !== null) {
      var f = n.dehydrated;
      if (Li(t), a)
        if (t.flags & 256)
          t.flags &= -257, t = is(
            l,
            t,
            u
          );
        else if (t.memoizedState !== null)
          t.child = l.child, t.flags |= 128, t = null;
        else throw Error(o(558));
      else if (Dl || ne(l, t, u, !1), a = (u & l.childLanes) !== 0, Dl || a) {
        if (Uu.current === null) {
          if (e = gl, e !== null && (f = wo(e, u), f !== 0 && f !== n.retryLane))
            throw n.retryLane = f, te(l, f), at(e, l, f), sc;
          Of();
        }
        t = is(
          l,
          t,
          u
        );
      } else
        l = n.treeContext, Tl = Ct(f.nextSibling), Bl = t, F = !0, Ou = null, At = !1, l !== null && wr(t, l), t = ef(t, e), t.flags |= 134221824;
      return t;
    }
    return l = iu(l.child, {
      mode: e.mode,
      children: e.children
    }), l.ref = t.ref, t.child = l, l.return = t, l;
  }
  function Le(l, t) {
    var u = t.ref;
    if (u === null)
      l !== null && l.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof u != "function" && typeof u != "object")
        throw Error(o(284));
      (l === null || l.ref !== u) && (t.flags |= 4194816);
    }
  }
  function dc(l, t, u, e, a) {
    return fe(t), u = wi(
      l,
      t,
      u,
      e,
      void 0,
      a
    ), e = $i(), l !== null && !Dl ? (Fi(l, t, a), vu(l, t, a)) : (F && e && Yn(t), t.flags |= 1, Ul(l, t, u, a), t.child);
  }
  function cs(l, t, u, e, a, n) {
    return fe(t), t.updateQueue = null, u = s0(
      t,
      e,
      u,
      a
    ), r0(l), e = $i(), l !== null && !Dl ? (Fi(l, t, n), vu(l, t, n)) : (F && e && Yn(t), t.flags |= 1, Ul(l, t, u, n), t.child);
  }
  function os(l, t, u, e, a) {
    if (fe(t), t.stateNode === null) {
      var n = Be, f = u.contextType;
      typeof f == "object" && f !== null && (n = Gl(f)), n = new u(e, n), t.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = oc, t.stateNode = n, n._reactInternals = t, n = t.stateNode, n.props = e, n.state = t.memoizedState, n.refs = {}, xi(t), f = u.contextType, n.context = typeof f == "object" && f !== null ? Gl(f) : Be, n.state = t.memoizedState, f = u.getDerivedStateFromProps, typeof f == "function" && (cc(
        t,
        u,
        f,
        e
      ), n.state = t.memoizedState), typeof u.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (f = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), f !== n.state && oc.enqueueReplaceState(n, n.state, null), Ba(t, e, n, a), Ha(), n.state = t.memoizedState), typeof n.componentDidMount == "function" && (t.flags |= 4194308), e = !0;
    } else if (l === null) {
      n = t.stateNode;
      var i = t.memoizedProps, c = ve(u, i);
      n.props = c;
      var m = n.context, S = u.contextType;
      f = Be, typeof S == "object" && S !== null && (f = Gl(S));
      var z = u.getDerivedStateFromProps;
      S = typeof z == "function" || typeof n.getSnapshotBeforeUpdate == "function", i = t.pendingProps !== i, S || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (i || m !== f) && F0(
        t,
        n,
        e,
        f
      ), Cu = !1;
      var v = t.memoizedState;
      n.state = v, Ba(t, e, n, a), Ha(), m = t.memoizedState, i || v !== m || Cu ? (typeof z == "function" && (cc(
        t,
        u,
        z,
        e
      ), m = t.memoizedState), (c = Cu || $0(
        t,
        u,
        c,
        e,
        v,
        m,
        f
      )) ? (S || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = e, t.memoizedState = m), n.props = e, n.state = m, n.context = f, e = c) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), e = !1);
    } else {
      n = t.stateNode, Gi(l, t), f = t.memoizedProps, S = ve(u, f), n.props = S, z = t.pendingProps, v = n.context, m = u.contextType, c = Be, typeof m == "object" && m !== null && (c = Gl(m)), i = u.getDerivedStateFromProps, (m = typeof i == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (f !== z || v !== c) && F0(
        t,
        n,
        e,
        c
      ), Cu = !1, v = t.memoizedState, n.state = v, Ba(t, e, n, a), Ha();
      var g = t.memoizedState;
      f !== z || v !== g || Cu || l !== null && l.dependencies !== null && xn(l.dependencies) ? (typeof i == "function" && (cc(
        t,
        u,
        i,
        e
      ), g = t.memoizedState), (S = Cu || $0(
        t,
        u,
        S,
        e,
        v,
        g,
        c
      ) || l !== null && l.dependencies !== null && xn(l.dependencies)) ? (m || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(e, g, c), typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(
        e,
        g,
        c
      )), typeof n.componentDidUpdate == "function" && (t.flags |= 4), typeof n.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || f === l.memoizedProps && v === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || f === l.memoizedProps && v === l.memoizedState || (t.flags |= 1024), t.memoizedProps = e, t.memoizedState = g), n.props = e, n.state = g, n.context = c, e = S) : (typeof n.componentDidUpdate != "function" || f === l.memoizedProps && v === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || f === l.memoizedProps && v === l.memoizedState || (t.flags |= 1024), e = !1);
    }
    return n = e, Le(l, t), e = (t.flags & 128) !== 0, n || e ? (n = t.stateNode, u = e && typeof u.getDerivedStateFromError != "function" ? null : n.render(), t.flags |= 1, l !== null && e ? (t.child = se(
      t,
      l.child,
      null,
      a
    ), t.child = se(
      t,
      null,
      u,
      a
    )) : Ul(l, t, u, a), t.memoizedState = n.state, l = t.child) : l = vu(
      l,
      t,
      a
    ), l;
  }
  function rs(l, t, u, e) {
    return ee(), t.flags |= 256, Ul(l, t, u, e), t.child;
  }
  var vc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function yc(l) {
    return { baseLanes: l, cachePool: Pr() };
  }
  function mc(l, t, u) {
    return l = l !== null ? l.childLanes & ~u : 0, t && (l |= mt), l;
  }
  function ss(l, t, u) {
    var e = t.pendingProps, a = !1, n = (t.flags & 128) !== 0, f;
    if ((f = n) || (f = l !== null && l.memoizedState === null ? !1 : (Ql.current & 2) !== 0), f && (a = !0, t.flags &= -129), f = (t.flags & 32) !== 0, t.flags &= -33, l === null) {
      if (F) {
        if (a ? Ru(t) : Hu(), (l = Tl) ? (l = Hd(
          l,
          At
        ), l = l !== null && l.data !== "&" ? l : null, l !== null && (t.memoizedState = {
          dehydrated: l,
          treeContext: _u !== null ? { id: Vt, overflow: Lt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, u = Lr(l), u.return = t, t.child = u, Bl = t, Tl = null)) : l = null, l === null) throw Nu(t);
        return mo(l) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      return n = e.children, e = e.fallback, a ? (Hu(), a = t.mode, n = af(
        { mode: "hidden", children: n },
        a
      ), e = ue(
        e,
        a,
        u,
        null
      ), n.return = t, e.return = t, n.sibling = e, t.child = n, e = t.child, e.memoizedState = yc(u), e.childLanes = mc(
        l,
        f,
        u
      ), t.memoizedState = vc, Ga(null, e)) : (Ru(t), hc(t, n));
    }
    var i = l.memoizedState;
    if (i !== null) {
      var c = i.dehydrated;
      if (c !== null)
        return Wy(
          l,
          t,
          n,
          f,
          e,
          c,
          i,
          u
        );
    }
    return a ? (Hu(), a = e.fallback, n = t.mode, i = l.child, c = i.sibling, e = iu(i, {
      mode: "hidden",
      children: e.children
    }), e.subtreeFlags = i.subtreeFlags & 1206910976, c !== null ? a = iu(c, a) : (a = ue(
      a,
      n,
      u,
      null
    ), a.flags |= 2), a.return = t, e.return = t, e.sibling = a, t.child = e, Ga(null, e), e = t.child, a = l.child.memoizedState, a === null ? a = yc(u) : (n = a.cachePool, n !== null ? (i = Ml._currentValue, n = n.parent !== i ? { parent: i, pool: i } : n) : n = Pr(), a = {
      baseLanes: a.baseLanes | u,
      cachePool: n
    }), e.memoizedState = a, e.childLanes = mc(
      l,
      f,
      u
    ), t.memoizedState = vc, Ga(l.child, e)) : (Ru(t), u = l.child, l = u.sibling, u = iu(u, {
      mode: "visible",
      children: e.children
    }), u.return = t, u.sibling = null, l !== null && (f = t.deletions, f === null ? (t.deletions = [l], t.flags |= 16) : f.push(l)), t.child = u, t.memoizedState = null, u);
  }
  function hc(l, t) {
    return t = af(
      { mode: "visible", children: t },
      l.mode
    ), t.return = l, l.child = t;
  }
  function af(l, t) {
    return l = lt(22, l, null, t), l.lanes = 0, l;
  }
  function nf(l, t, u) {
    return se(t, l.child, null, u), l = hc(
      t,
      t.pendingProps.children
    ), l.flags |= 2, t.memoizedState = null, l;
  }
  function Wy(l, t, u, e, a, n, f, i) {
    if (u)
      return t.flags & 256 ? (Ru(t), t.flags &= -257, nf(
        l,
        t,
        i
      )) : t.memoizedState !== null ? (Hu(), t.child = l.child, t.flags |= 128, null) : (Hu(), n = a.fallback, f = t.mode, a = af(
        { mode: "visible", children: a.children },
        f
      ), n = ue(
        n,
        f,
        i,
        null
      ), n.flags |= 2, a.return = t, n.return = t, a.sibling = n, t.child = a, se(t, l.child, null, i), a = t.child, a.memoizedState = yc(i), a.childLanes = mc(
        l,
        e,
        i
      ), t.memoizedState = vc, Ga(null, a));
    if (Ru(t), mo(n)) {
      if (e = n.nextSibling && n.nextSibling.dataset, e) var c = e.dgst;
      return e = c, e !== "" && (a = Error(o(419)), a.stack = "", a.digest = e, Ma({ value: a, source: null, stack: null })), nf(
        l,
        t,
        i
      );
    }
    if (Dl || ne(l, t, i, !1), e = (i & l.childLanes) !== 0, Dl || e) {
      if (Uu.current !== null)
        return nf(
          l,
          t,
          i
        );
      if (e = gl, e !== null && (a = wo(
        e,
        i
      ), a !== 0 && a !== f.retryLane))
        throw f.retryLane = a, te(l, a), at(e, l, a), sc;
      return yo(n) || Of(), nf(
        l,
        t,
        i
      );
    }
    return yo(n) ? (t.flags |= 192, t.child = l.child, null) : (l = f.treeContext, Tl = Ct(n.nextSibling), Bl = t, F = !0, Ou = null, At = !1, l !== null && wr(t, l), t = hc(
      t,
      a.children
    ), t.flags |= 134221824, t);
  }
  function ds(l, t, u) {
    l.lanes |= t;
    var e = l.alternate;
    e !== null && (e.lanes |= t), qn(l.return, t, u);
  }
  function vs(l) {
    for (var t = null; l !== null; ) {
      var u = l.alternate;
      u !== null && Jn(u) === null && (t = l), l = l.sibling;
    }
    return t;
  }
  function ff(l, t, u, e, a, n) {
    var f = l.memoizedState;
    f === null ? l.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: e,
      tail: u,
      tailMode: a,
      treeForkCount: n
    } : (f.isBackwards = t, f.rendering = null, f.renderingStartTime = 0, f.last = e, f.tail = u, f.tailMode = a, f.treeForkCount = n);
  }
  function gc(l) {
    var t = l.child;
    for (l.child = null; t !== null; ) {
      var u = t.sibling;
      t.sibling = l.child, l.child = t, t = u;
    }
  }
  function Sc(l, t, u) {
    var e = t.pendingProps, a = e.revealOrder, n = e.tail;
    e = e.children;
    var f = Ql.current;
    if (t.flags & 128)
      return Ya(t, f), null;
    var i = (f & 2) !== 0;
    if (i ? (f = f & 1 | 2, t.flags |= 128) : f &= 1, Ya(t, f), a === "backwards" && l !== null ? (gc(l), Ul(l, t, e, u), gc(l)) : Ul(l, t, e, u), e = F ? Aa : 0, !i && l !== null && (l.flags & 128) !== 0)
      l: for (l = t.child; l !== null; ) {
        if (l.tag === 13)
          l.memoizedState !== null && ds(l, u, t);
        else if (l.tag === 19)
          ds(l, u, t);
        else if (l.child !== null) {
          l.child.return = l, l = l.child;
          continue;
        }
        if (l === t) break l;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t)
            break l;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    switch (a) {
      case "backwards":
        u = vs(t.child), u === null ? (a = t.child, t.child = null) : (a = u.sibling, u.sibling = null, gc(t)), ff(
          t,
          !0,
          a,
          null,
          n,
          e
        );
        break;
      case "unstable_legacy-backwards":
        for (u = null, a = t.child, t.child = null; a !== null; ) {
          if (l = a.alternate, l !== null && Jn(l) === null) {
            t.child = a;
            break;
          }
          l = a.sibling, a.sibling = u, u = a, a = l;
        }
        ff(
          t,
          !0,
          u,
          null,
          n,
          e
        );
        break;
      case "together":
        ff(
          t,
          !1,
          null,
          null,
          void 0,
          e
        );
        break;
      case "independent":
        t.memoizedState = null;
        break;
      default:
        u = vs(t.child), u === null ? (a = t.child, t.child = null) : (a = u.sibling, u.sibling = null), ff(
          t,
          !1,
          a,
          u,
          n,
          e
        );
    }
    return t.child;
  }
  function ys(l, t, u) {
    var e = t.pendingProps;
    return Au(t, t.type, e.value), Ul(l, t, e.children, u), t.child;
  }
  function vu(l, t, u) {
    if (l !== null && (t.dependencies = l.dependencies), qu |= t.lanes, (u & t.childLanes) === 0)
      if (l !== null) {
        if (ne(
          l,
          t,
          u,
          !1
        ), (u & t.childLanes) === 0)
          return null;
      } else return null;
    if (l !== null && t.child !== l.child)
      throw Error(o(153));
    if (t.child !== null) {
      for (l = t.child, u = iu(l, l.pendingProps), t.child = u, u.return = t; l.sibling !== null; )
        l = l.sibling, u = u.sibling = iu(l, l.pendingProps), u.return = t;
      u.sibling = null;
    }
    return t.child;
  }
  function Tc(l, t) {
    return (l.lanes & t) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && xn(l)));
  }
  function Iy(l, t, u) {
    switch (t.tag) {
      case 3:
        sn(t, t.stateNode.containerInfo), Au(t, Ml, l.memoizedState.cache), ee();
        break;
      case 27:
      case 5:
        Jf(t);
        break;
      case 4:
        sn(t, t.stateNode.containerInfo);
        break;
      case 10:
        Au(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, Li(t), null;
        break;
      case 13:
        var e = t.memoizedState;
        if (e !== null) {
          if (e.dehydrated !== null)
            return Ru(t), t.flags |= 128, null;
          e = ne(
            l,
            t,
            u,
            !1
          );
          var a = t.child.childLanes;
          return e || (u & a) !== 0 ? ss(l, t, u) : (Ru(t), l = vu(
            l,
            t,
            u
          ), l !== null ? l.sibling : null);
        }
        Ru(t);
        break;
      case 19:
        if (t.flags & 128)
          return Sc(
            l,
            t,
            u
          );
        if (a = (l.flags & 128) !== 0, e = (u & t.childLanes) !== 0, e || (ne(
          l,
          t,
          u,
          !1
        ), e = (u & t.childLanes) !== 0), a) {
          if (e)
            return Sc(
              l,
              t,
              u
            );
          t.flags |= 128;
        }
        if (a = t.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), Ya(t, Ql.current), e) break;
        return null;
      case 22:
        return t.lanes = 0, ns(
          l,
          t,
          u,
          t.pendingProps
        );
      case 24:
        Au(t, Ml, l.memoizedState.cache);
    }
    return vu(l, t, u);
  }
  function ms(l, t, u) {
    if (l !== null)
      if (l.memoizedProps !== t.pendingProps)
        Dl = !0;
      else {
        if (!Tc(l, u) && (t.flags & 128) === 0)
          return Dl = !1, Iy(
            l,
            t,
            u
          );
        Dl = (l.flags & 131072) !== 0;
      }
    else
      Dl = !1, F && (t.flags & 1048576) !== 0 && Jr(t, Aa, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        l: {
          var e = t.pendingProps;
          if (l = oe(t.elementType), t.type = l, typeof l == "function")
            Ai(l) ? (e = ve(l, e), t.tag = 1, t = os(
              null,
              t,
              l,
              e,
              u
            )) : (t.tag = 0, t = dc(
              null,
              t,
              l,
              e,
              u
            ));
          else {
            if (l != null) {
              var a = l.$$typeof;
              if (a === C) {
                t.tag = 11, t = us(
                  null,
                  t,
                  l,
                  e,
                  u
                );
                break l;
              } else if (a === hl) {
                t.tag = 14, t = es(
                  null,
                  t,
                  l,
                  e,
                  u
                );
                break l;
              } else if (a === Rl) {
                t.tag = 10, t.type = l, t = ys(
                  null,
                  t,
                  u
                );
                break l;
              }
            }
            throw t = nl(l) || l, Error(o(306, t, ""));
          }
        }
        return t;
      case 0:
        return dc(
          l,
          t,
          t.type,
          t.pendingProps,
          u
        );
      case 1:
        return e = t.type, a = ve(
          e,
          t.pendingProps
        ), os(
          l,
          t,
          e,
          a,
          u
        );
      case 3:
        l: {
          if (sn(
            t,
            t.stateNode.containerInfo
          ), l === null) throw Error(o(387));
          e = t.pendingProps;
          var n = t.memoizedState;
          a = n.element, Gi(l, t), Ba(t, e, null, u);
          var f = t.memoizedState;
          if (e = f.cache, Au(t, Ml, e), e !== n.cache && Hi(
            t,
            [Ml],
            u,
            !0
          ), Ha(), e = f.element, n.isDehydrated)
            if (n = {
              element: e,
              isDehydrated: !1,
              cache: f.cache
            }, t.updateQueue.baseState = n, t.memoizedState = n, t.flags & 256) {
              t = rs(
                l,
                t,
                e,
                u
              );
              break l;
            } else if (e !== a) {
              a = _t(
                Error(o(424)),
                t
              ), Ma(a), t = rs(
                l,
                t,
                e,
                u
              );
              break l;
            } else
              for (l = t.stateNode.containerInfo, l.nodeType === 9 ? l = l.body : l = l.nodeName === "HTML" ? l.ownerDocument.body : l, Tl = Ct(l.firstChild), Bl = t, F = !0, Ou = null, At = !0, u = n0(
                t,
                null,
                e,
                u
              ), t.child = u; u; )
                u.flags = u.flags & -3 | 134221824, u = u.sibling;
          else {
            if (ee(), e === a) {
              t = vu(
                l,
                t,
                u
              );
              break l;
            }
            Ul(l, t, e, u);
          }
          t = t.child;
        }
        return t;
      case 26:
        return Le(l, t), l === null ? (u = Xd(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = u : F || (t.stateNode = Td(
          t.type,
          t.pendingProps,
          Su.current,
          t
        )) : t.memoizedState = Xd(
          t.type,
          l.memoizedProps,
          t.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return Jf(t), l === null && F && (e = t.stateNode = jd(
          t.type,
          t.pendingProps,
          Su.current
        ), Bl = t, At = !0, a = Tl, Qu(t.type) ? (ho = a, Tl = Ct(e.firstChild)) : Tl = a), Ul(
          l,
          t,
          t.pendingProps.children,
          u
        ), Le(l, t), l === null && (t.flags |= 4194304), t.child;
      case 5:
        return l === null && F && ((a = e = Tl) && (e = Km(
          e,
          t.type,
          t.pendingProps,
          At
        ), e !== null ? (t.stateNode = e, Bl = t, Tl = Ct(e.firstChild), At = !1, a = !0) : a = !1), a || Nu(t)), Jf(t), a = t.type, n = t.pendingProps, f = l !== null ? l.memoizedProps : null, e = n.children, fo(a, n) ? e = null : f !== null && fo(a, f) && (t.flags |= 32), t.memoizedState !== null && (a = wi(
          l,
          t,
          Xy,
          null,
          null,
          u
        ), ca._currentValue = a), Le(l, t), Ul(l, t, e, u), t.child;
      case 6:
        return l === null && F && ((l = u = Tl) && (u = Jm(
          u,
          t.pendingProps,
          At
        ), u !== null ? (t.stateNode = u, Bl = t, Tl = null, l = !0) : l = !1), l || Nu(t)), null;
      case 13:
        return ss(l, t, u);
      case 4:
        return sn(
          t,
          t.stateNode.containerInfo
        ), e = t.pendingProps, l === null ? t.child = se(
          t,
          null,
          e,
          u
        ) : Ul(l, t, e, u), t.child;
      case 11:
        return us(
          l,
          t,
          t.type,
          t.pendingProps,
          u
        );
      case 7:
        return e = t.pendingProps, Le(l, t), Ul(l, t, e, u), t.child;
      case 8:
        return Ul(
          l,
          t,
          t.pendingProps.children,
          u
        ), t.child;
      case 12:
        return Ul(
          l,
          t,
          t.pendingProps.children,
          u
        ), t.child;
      case 10:
        return ys(l, t, u);
      case 9:
        return a = t.type._context, e = t.pendingProps.children, fe(t), a = Gl(a), e = e(a), t.flags |= 1, Ul(l, t, e, u), t.child;
      case 14:
        return es(
          l,
          t,
          t.type,
          t.pendingProps,
          u
        );
      case 15:
        return as(
          l,
          t,
          t.type,
          t.pendingProps,
          u
        );
      case 19:
        return Sc(l, t, u);
      case 31:
        return Fy(l, t, u);
      case 22:
        return ns(
          l,
          t,
          u,
          t.pendingProps
        );
      case 24:
        return fe(t), e = Gl(Ml), l === null ? (a = ji(), a === null && (a = gl, n = Bi(), a.pooledCache = n, n.refCount++, n !== null && (a.pooledCacheLanes |= u), a = n), t.memoizedState = { parent: e, cache: a }, xi(t), Au(t, Ml, a)) : ((l.lanes & u) !== 0 && (Gi(l, t), Ba(t, null, null, u), Ha()), a = l.memoizedState, n = t.memoizedState, a.parent !== e ? (a = { parent: e, cache: e }, t.memoizedState = a, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = a), Au(t, Ml, e)) : (e = n.cache, Au(t, Ml, e), e !== a.cache && Hi(
          t,
          [Ml],
          u,
          !0
        ))), Ul(
          l,
          t,
          t.pendingProps.children,
          u
        ), t.child;
      case 30:
        return t.stateNode === null && (t.stateNode = {
          autoName: null,
          paired: null,
          clones: null,
          ref: null
        }), e = t.pendingProps, e.name != null && e.name !== "auto" ? t.flags |= l === null ? 18882560 : 18874368 : F && Yn(t), l !== null && l.memoizedProps.name !== e.name ? t.flags |= 4194816 : Le(l, t), Ul(l, t, e.children, u), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(o(156, t.tag));
  }
  function yu(l) {
    l.flags |= 4;
  }
  function bc(l, t, u, e, a) {
    var n;
    if ((n = (l.mode & 32) !== 0) && (n = u === null ? Ld(t, e) : Ld(t, e) && (e.src !== u.src || e.srcSet !== u.srcSet)), n) {
      if (l.flags |= 16777216, (a & 335544128) === a)
        if (l.stateNode.complete) l.flags |= 8192;
        else if (Ws()) l.flags |= 8192;
        else
          throw re = Zn, qi;
    } else l.flags &= -16777217;
  }
  function hs(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !Kd(t))
      if (Ws()) l.flags |= 8192;
      else
        throw re = Zn, qi;
  }
  function cf(l, t) {
    t !== null && (l.flags |= 4), l.flags & 16384 && (t = l.tag !== 22 ? Lo() : 536870912, l.lanes |= t, Fe |= t);
  }
  function Xa(l, t) {
    if (!F)
      switch (l.tailMode) {
        case "visible":
          break;
        case "collapsed":
          for (var u = l.tail, e = null; u !== null; )
            u.alternate !== null && (e = u), u = u.sibling;
          e === null ? t || l.tail === null ? l.tail = null : l.tail.sibling = null : e.sibling = null;
          break;
        default:
          for (t = l.tail, u = null; t !== null; )
            t.alternate !== null && (u = t), t = t.sibling;
          u === null ? l.tail = null : u.sibling = null;
      }
  }
  function bl(l) {
    var t = l.alternate !== null && l.alternate.child === l.child, u = 0, e = 0;
    if (t)
      for (var a = l.child; a !== null; )
        u |= a.lanes | a.childLanes, e |= a.subtreeFlags & 1206910976, e |= a.flags & 1206910976, a.return = l, a = a.sibling;
    else
      for (a = l.child; a !== null; )
        u |= a.lanes | a.childLanes, e |= a.subtreeFlags, e |= a.flags, a.return = l, a = a.sibling;
    return l.subtreeFlags |= e, l.childLanes = u, t;
  }
  function ky(l, t, u) {
    var e = t.pendingProps;
    switch (Di(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return bl(t), null;
      case 1:
        return bl(t), null;
      case 3:
        return u = t.stateNode, e = null, l !== null && (e = l.memoizedState.cache), t.memoizedState.cache !== e && (t.flags |= 2048), ru(Ml), Ee(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (l === null || l.child === null) && (qe(t) ? yu(t) : l === null || l.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Ui())), bl(t), null;
      case 26:
        var a = t.type, n = t.memoizedState;
        return l === null ? (yu(t), n !== null ? (bl(t), hs(t, n)) : (bl(t), bc(
          t,
          a,
          null,
          e,
          u
        ))) : n ? n !== l.memoizedState ? (yu(t), bl(t), hs(t, n)) : (bl(t), t.flags &= -16777217) : (l = l.memoizedProps, l !== e && yu(t), bl(t), bc(
          t,
          a,
          l,
          e,
          u
        )), null;
      case 27:
        if (dn(t), u = Su.current, a = t.type, l !== null && t.stateNode != null)
          l.memoizedProps !== e && yu(t);
        else {
          if (!e) {
            if (t.stateNode === null)
              throw Error(o(166));
            return bl(t), t.subtreeFlags &= -33554433, null;
          }
          l = Qt.current, qe(t) ? $r(t) : (l = jd(a, e, u), t.stateNode = l, yu(t));
        }
        return bl(t), t.subtreeFlags &= -33554433, null;
      case 5:
        if (dn(t), a = t.type, l !== null && t.stateNode != null)
          l.memoizedProps !== e && yu(t);
        else {
          if (!e) {
            if (t.stateNode === null)
              throw Error(o(166));
            return bl(t), t.subtreeFlags &= -33554433, null;
          }
          if (n = Qt.current, qe(t))
            $r(t);
          else {
            var f = Ia(
              Su.current
            );
            switch (n) {
              case 1:
                n = f.createElementNS(
                  "http://www.w3.org/2000/svg",
                  a
                );
                break;
              case 2:
                n = f.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  a
                );
                break;
              default:
                switch (a) {
                  case "svg":
                    n = f.createElementNS(
                      "http://www.w3.org/2000/svg",
                      a
                    );
                    break;
                  case "math":
                    n = f.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      a
                    );
                    break;
                  case "script":
                    n = f.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(
                      n.firstChild
                    );
                    break;
                  case "select":
                    n = typeof e.is == "string" ? f.createElement("select", {
                      is: e.is
                    }) : f.createElement("select"), e.multiple ? n.multiple = !0 : e.size && (n.size = e.size);
                    break;
                  default:
                    n = typeof e.is == "string" ? f.createElement(a, { is: e.is }) : f.createElement(a);
                }
            }
            n[xl] = t, n[Pl] = e;
            l: for (f = t.child; f !== null; ) {
              if (f.tag === 5 || f.tag === 6)
                n.appendChild(f.stateNode);
              else if (f.tag !== 4 && f.tag !== 27 && f.child !== null) {
                f.child.return = f, f = f.child;
                continue;
              }
              if (f === t) break l;
              for (; f.sibling === null; ) {
                if (f.return === null || f.return === t)
                  break l;
                f = f.return;
              }
              f.sibling.return = f.return, f = f.sibling;
            }
            t.stateNode = n;
            l: switch (Vl(n, a, e), a) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                e = !!e.autoFocus;
                break l;
              case "img":
                e = !0;
                break l;
              default:
                e = !1;
            }
            e && yu(t);
          }
        }
        return bl(t), t.subtreeFlags &= -33554433, bc(
          t,
          t.type,
          l === null ? null : l.memoizedProps,
          t.pendingProps,
          u
        ), null;
      case 6:
        if (l && t.stateNode != null)
          l.memoizedProps !== e && yu(t);
        else {
          if (typeof e != "string" && t.stateNode === null)
            throw Error(o(166));
          if (l = Su.current, qe(t)) {
            if (l = t.stateNode, u = t.memoizedProps, e = null, a = Bl, a !== null)
              switch (a.tag) {
                case 27:
                case 5:
                  e = a.memoizedProps;
              }
            l[xl] = t, l = !!(l.nodeValue === u || e !== null && e.suppressHydrationWarning === !0 || md(l.nodeValue, u)), l || Nu(t, !0);
          } else
            l = Ia(l).createTextNode(
              e
            ), l[xl] = t, t.stateNode = l;
        }
        return bl(t), null;
      case 31:
        if (u = t.memoizedState, l === null || l.memoizedState !== null) {
          if (e = qe(t), u !== null) {
            if (l === null) {
              if (!e) throw Error(o(318));
              if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(o(557));
              l[xl] = t;
            } else
              ee(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            bl(t), l = !1;
          } else
            u = Ui(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = u), l = !0;
          if (!l)
            return t.flags & 256 ? (dt(t), t) : (dt(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(o(558));
        }
        return bl(t), null;
      case 13:
        if (e = t.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (a = qe(t), e !== null && e.dehydrated !== null) {
            if (l === null) {
              if (!a) throw Error(o(318));
              if (a = t.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(o(317));
              a[xl] = t;
            } else
              ee(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            bl(t), a = !1;
          } else
            a = Ui(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = a), a = !0;
          if (!a)
            return t.flags & 256 ? (dt(t), t) : (dt(t), null);
        }
        return dt(t), (t.flags & 128) !== 0 ? (t.lanes = u, t) : (u = e !== null, l = l !== null && l.memoizedState !== null, u && (e = t.child, a = null, e.alternate !== null && e.alternate.memoizedState !== null && e.alternate.memoizedState.cachePool !== null && (a = e.alternate.memoizedState.cachePool.pool), n = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), n !== a && (e.flags |= 2048)), u !== l && u && (t.child.flags |= 8192), cf(t, t.updateQueue), bl(t), null);
      case 4:
        return Ee(), l === null && to(t.stateNode.containerInfo), t.flags |= 67108864, bl(t), null;
      case 10:
        return ru(t.type), bl(t), null;
      case 19:
        if (Ki(t), e = t.memoizedState, e === null) return bl(t), null;
        if (a = (t.flags & 128) !== 0, n = e.rendering, n === null)
          if (a) Xa(e, !1);
          else {
            if (Nl !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = t.child; l !== null; ) {
                if (n = Jn(l), n !== null) {
                  for (t.flags |= 128, Xa(e, !1), l = n.updateQueue, t.updateQueue = l, cf(t, l), t.subtreeFlags = 0, l = u, u = t.child; u !== null; )
                    Vr(u, l), u = u.sibling;
                  return Ya(
                    t,
                    Ql.current & 1 | 2
                  ), F && cu(t, e.treeForkCount), t.child;
                }
                l = l.sibling;
              }
            e.tail !== null && it() > bf && (t.flags |= 128, a = !0, Xa(e, !1), t.lanes = 4194304);
          }
        else {
          if (!a)
            if (l = Jn(n), l !== null) {
              if (t.flags |= 128, a = !0, l = l.updateQueue, t.updateQueue = l, cf(t, l), Xa(e, !0), e.tail === null && e.tailMode !== "collapsed" && e.tailMode !== "visible" && !n.alternate && !F)
                return bl(t), null;
            } else
              2 * it() - e.renderingStartTime > bf && u !== 536870912 && (t.flags |= 128, a = !0, Xa(e, !1), t.lanes = 4194304);
          e.isBackwards ? (n.sibling = t.child, t.child = n) : (l = e.last, l !== null ? l.sibling = n : t.child = n, e.last = n);
        }
        if (e.tail !== null) {
          l = e.tail;
          l: {
            for (u = l; u !== null; ) {
              if (u.alternate !== null) {
                u = !1;
                break l;
              }
              u = u.sibling;
            }
            u = !0;
          }
          return e.rendering = l, e.tail = l.sibling, e.renderingStartTime = it(), l.sibling = null, n = Ql.current, n = a ? n & 1 | 2 : n & 1, e.tailMode === "visible" || e.tailMode === "collapsed" || !u || F ? Ya(t, n) : (u = n, Sl(Xl, t), Sl(Ql, u), Jl === null && (Jl = t)), F && cu(t, e.treeForkCount), l;
        }
        return bl(t), null;
      case 22:
      case 23:
        return dt(t), Vi(), e = t.memoizedState !== null, l !== null ? l.memoizedState !== null !== e && (t.flags |= 8192) : e && (t.flags |= 8192), e ? (u & 536870912) !== 0 && (t.flags & 128) === 0 && (bl(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : bl(t), u = t.updateQueue, u !== null && cf(t, u.retryQueue), u = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== u && (t.flags |= 2048), l !== null && ql(ce), null;
      case 24:
        return u = null, l !== null && (u = l.memoizedState.cache), t.memoizedState.cache !== u && (t.flags |= 2048), ru(Ml), bl(t), null;
      case 25:
        return null;
      case 30:
        return t.flags |= 33554432, bl(t), null;
    }
    throw Error(o(156, t.tag));
  }
  function Py(l, t) {
    switch (Di(t), t.tag) {
      case 1:
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 3:
        return ru(Ml), Ee(), l = t.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (t.flags = l & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return dn(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (dt(t), t.alternate === null)
            throw Error(o(340));
          ee();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 13:
        if (dt(t), l = t.memoizedState, l !== null && l.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(o(340));
          ee();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 19:
        return Ki(t), l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null), t.flags |= 4, t) : null;
      case 4:
        return Ee(), null;
      case 10:
        return ru(t.type), null;
      case 22:
      case 23:
        return dt(t), Vi(), l !== null && ql(ce), l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 24:
        return ru(Ml), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function gs(l, t) {
    switch (Di(t), t.tag) {
      case 3:
        ru(Ml), Ee();
        break;
      case 26:
      case 27:
      case 5:
        dn(t);
        break;
      case 4:
        Ee();
        break;
      case 31:
        t.memoizedState !== null && dt(t);
        break;
      case 13:
        dt(t);
        break;
      case 19:
        Ki(t);
        break;
      case 10:
        ru(t.type);
        break;
      case 22:
      case 23:
        dt(t), Vi(), l !== null && ql(ce);
        break;
      case 24:
        ru(Ml);
    }
  }
  function Qa(l, t) {
    try {
      var u = t.updateQueue, e = u !== null ? u.lastEffect : null;
      if (e !== null) {
        var a = e.next;
        u = a;
        do {
          if ((u.tag & l) === l) {
            e = void 0;
            var n = u.create, f = u.inst;
            e = n(), f.destroy = e;
          }
          u = u.next;
        } while (u !== a);
      }
    } catch (i) {
      vl(t, t.return, i);
    }
  }
  function Bu(l, t, u) {
    try {
      var e = t.updateQueue, a = e !== null ? e.lastEffect : null;
      if (a !== null) {
        var n = a.next;
        e = n;
        do {
          if ((e.tag & l) === l) {
            var f = e.inst, i = f.destroy;
            if (i !== void 0) {
              f.destroy = void 0, a = t;
              var c = u, m = i;
              try {
                m();
              } catch (S) {
                vl(
                  a,
                  c,
                  S
                );
              }
            }
          }
          e = e.next;
        } while (e !== n);
      }
    } catch (S) {
      vl(t, t.return, S);
    }
  }
  function Ss(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var u = l.stateNode;
      try {
        i0(t, u);
      } catch (e) {
        vl(l, l.return, e);
      }
    }
  }
  function Ts(l, t, u) {
    u.props = ve(
      l.type,
      l.memoizedProps
    ), u.state = l.memoizedState;
    try {
      u.componentWillUnmount();
    } catch (e) {
      vl(l, t, e);
    }
  }
  function Kt(l, t) {
    try {
      var u = l.ref;
      if (u !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var e = l.stateNode;
            break;
          case 30:
            var a = l.stateNode, n = nu(l.memoizedProps, a);
            (a.ref === null || a.ref.name !== n) && (a.ref = Ad(n)), e = a.ref;
            break;
          case 7:
            if (l.stateNode === null) {
              var f = new gt(l);
              b(
                l.child,
                !1,
                Vm,
                f,
                void 0,
                void 0
              ), l.stateNode = f;
            }
            e = l.stateNode;
            break;
          default:
            e = l.stateNode;
        }
        typeof u == "function" ? l.refCleanup = u(e) : u.current = e;
      }
    } catch (i) {
      vl(l, t, i);
    }
  }
  function Zl(l, t) {
    var u = l.ref, e = l.refCleanup;
    if (u !== null)
      if (typeof e == "function")
        try {
          e();
        } catch (a) {
          vl(l, t, a);
        } finally {
          l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
        }
      else if (typeof u == "function")
        try {
          u(null);
        } catch (a) {
          vl(l, t, a);
        }
      else u.current = null;
  }
  function of(l, t) {
    if ((l.tag === 5 || l.tag === 27 || l.tag === 6) && l.alternate === null && t !== null)
      for (var u = 0; u < t.length; u++)
        Rd(
          l.stateNode,
          t[u]
        );
  }
  function bs(l) {
    for (var t = l.return; t !== null && (zc(t) && Rd(l.stateNode, t.stateNode), !Ec(t)); )
      t = t.return;
  }
  function Za(l) {
    for (var t = l.return; t !== null && (zc(t) && Lm(l.stateNode, t.stateNode), !Ec(t)); )
      t = t.return;
  }
  function Ec(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 27;
  }
  function zc(l) {
    return l && l.tag === 7 && l.stateNode !== null;
  }
  function _c(l) {
    var t = l.type, u = l.memoizedProps, e = l.stateNode;
    try {
      l: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          u.autoFocus && e.focus();
          break l;
        case "img":
          u.src ? e.src = u.src : u.srcSet && (e.srcset = u.srcSet);
      }
    } catch (a) {
      vl(l, l.return, a);
    }
  }
  function Oc(l, t, u) {
    try {
      var e = l.stateNode;
      Nm(e, l.type, u, t), e[Pl] = t;
    } catch (a) {
      vl(l, l.return, a);
    }
  }
  function Es(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && Qu(l.type) || l.tag === 4;
  }
  function Nc(l) {
    l: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || Es(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && Qu(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue l;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function Ac(l, t, u, e) {
    var a = l.tag;
    if (a === 5 || a === 6)
      a = l.stateNode, t ? (u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u).insertBefore(a, t) : (t = u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u, t.appendChild(a), u = u._reactRootContainer, u != null || t.onclick !== null || (t.onclick = Zt)), of(l, e), fl = !0;
    else if (a !== 4 && (a === 27 && (of(l, e), e = null, Qu(l.type) && (u = l.stateNode, t = null)), l = l.child, l !== null))
      for (Ac(
        l,
        t,
        u,
        e
      ), l = l.sibling; l !== null; )
        Ac(
          l,
          t,
          u,
          e
        ), l = l.sibling;
  }
  function rf(l, t, u, e) {
    var a = l.tag;
    if (a === 5 || a === 6)
      a = l.stateNode, t ? u.insertBefore(a, t) : u.appendChild(a), of(l, e), fl = !0;
    else if (a !== 4 && (a === 27 && (of(l, e), e = null, Qu(l.type) && (u = l.stateNode)), l = l.child, l !== null))
      for (rf(
        l,
        t,
        u,
        e
      ), l = l.sibling; l !== null; )
        rf(
          l,
          t,
          u,
          e
        ), l = l.sibling;
  }
  function zs(l) {
    var t = l.stateNode, u = l.memoizedProps;
    try {
      for (var e = l.type, a = t.attributes; a.length; )
        t.removeAttributeNode(a[0]);
      Vl(t, e, u), t[xl] = l, t[Pl] = u;
    } catch (n) {
      vl(l, l.return, n);
    }
  }
  var sf = !1, vt = null;
  function _s(l) {
    (l.tag === 30 || (l.subtreeFlags & 33554432) !== 0) && (sf = !0);
  }
  var Jt = null;
  function Os() {
    var l = Jt;
    return Jt = null, l;
  }
  var tt = 0;
  function Ke(l, t, u, e, a) {
    return tt = 0, Ns(
      l.child,
      t,
      u,
      e,
      a
    );
  }
  function Ns(l, t, u, e, a) {
    for (var n = !1; l !== null; ) {
      if (l.tag === 5) {
        var f = l.stateNode;
        if (e !== null) {
          var i = oo(f);
          e.push(i), i.view && (n = !0);
        } else
          n || oo(f).view && (n = !0);
        sf = !0, Od(
          f,
          tt === 0 ? t : t + "_" + tt,
          u
        ), tt++;
      } else (l.tag !== 22 || l.memoizedState === null) && (l.tag === 30 && a || Ns(
        l.child,
        t,
        u,
        e,
        a
      ) && (n = !0));
      l = l.sibling;
    }
    return n;
  }
  function wt(l, t) {
    for (; l !== null; )
      l.tag === 5 ? Nd(l.stateNode, l.memoizedProps) : (l.tag !== 22 || l.memoizedState === null) && (l.tag === 30 && t || wt(
        l.child,
        t
      )), l = l.sibling;
  }
  function df(l) {
    if ((l.subtreeFlags & 18874368) !== 0)
      for (l = l.child; l !== null; ) {
        if ((l.tag !== 22 || l.memoizedState === null) && (df(l), l.tag === 30 && (l.flags & 18874368) !== 0 && l.stateNode.paired)) {
          var t = l.memoizedProps;
          if (t.name == null || t.name === "auto")
            throw Error(o(544));
          var u = t.name;
          t = fu(t.default, t.share), t !== "none" && (Ke(
            l,
            u,
            t,
            null,
            !1
          ) || wt(l.child, !1));
        }
        l = l.sibling;
      }
  }
  function Mc(l, t) {
    if (l.tag === 30) {
      var u = l.stateNode, e = l.memoizedProps, a = nu(e, u), n = fu(
        e.default,
        u.paired ? e.share : e.enter
      );
      n !== "none" ? Ke(l, a, n, null, !1) ? (df(l), u.paired || t || Pe(l, e.onEnter)) : wt(l.child, !1) : df(l);
    } else if ((l.subtreeFlags & 33554432) !== 0)
      for (l = l.child; l !== null; )
        Mc(l, t), l = l.sibling;
    else df(l);
  }
  function Cc(l) {
    if (vt !== null && vt.size !== 0) {
      var t = vt;
      if ((l.subtreeFlags & 18874368) !== 0)
        for (l = l.child; l !== null; ) {
          if (l.tag !== 22 || l.memoizedState === null) {
            if (l.tag === 30 && (l.flags & 18874368) !== 0) {
              var u = l.memoizedProps, e = u.name;
              if (e != null && e !== "auto") {
                var a = t.get(e);
                if (a !== void 0) {
                  var n = fu(
                    u.default,
                    u.share
                  );
                  if (n !== "none" && (Ke(
                    l,
                    e,
                    n,
                    null,
                    !1
                  ) ? (n = l.stateNode, a.paired = n, n.paired = a, Pe(l, u.onShare)) : wt(l.child, !1)), t.delete(e), t.size === 0) break;
                }
              }
            }
            Cc(l);
          }
          l = l.sibling;
        }
    }
  }
  function Dc(l) {
    if (l.tag === 30) {
      var t = l.memoizedProps, u = nu(t, l.stateNode), e = vt !== null ? vt.get(u) : void 0, a = fu(
        t.default,
        e !== void 0 ? t.share : t.exit
      );
      a !== "none" && (Ke(l, u, a, null, !1) ? e !== void 0 ? (a = l.stateNode, e.paired = a, a.paired = e, vt.delete(u), Pe(l, t.onShare)) : Pe(l, t.onExit) : wt(l.child, !1)), vt !== null && Cc(l);
    } else if ((l.subtreeFlags & 33554432) !== 0)
      for (l = l.child; l !== null; )
        Dc(l), l = l.sibling;
    else
      vt !== null && Cc(l);
  }
  function As(l) {
    for (l = l.child; l !== null; ) {
      if (l.tag === 30) {
        var t = l.memoizedProps, u = nu(t, l.stateNode);
        t = fu(t.default, t.update), l.flags &= -5, t !== "none" && Ke(
          l,
          u,
          t,
          l.memoizedState = [],
          !1
        );
      } else
        (l.subtreeFlags & 33554432) !== 0 && As(l);
      l = l.sibling;
    }
  }
  function pc(l) {
    if ((l.subtreeFlags & 18874368) !== 0)
      for (l = l.child; l !== null; ) {
        if (l.tag !== 22 || l.memoizedState === null) {
          if (l.tag === 30 && (l.flags & 18874368) !== 0) {
            var t = l.stateNode;
            t.paired !== null && (t.paired = null, wt(l.child, !1));
          }
          pc(l);
        }
        l = l.sibling;
      }
  }
  function vf(l) {
    if (l.tag === 30)
      l.stateNode.paired = null, wt(l.child, !1), pc(l);
    else if ((l.subtreeFlags & 33554432) !== 0)
      for (l = l.child; l !== null; )
        vf(l), l = l.sibling;
    else pc(l);
  }
  function Ms(l) {
    for (l = l.child; l !== null; )
      l.tag === 30 ? wt(l.child, !1) : (l.subtreeFlags & 33554432) !== 0 && Ms(l), l = l.sibling;
  }
  function Uc(l, t, u, e, a, n, f) {
    for (var i = !1; t !== null; ) {
      if (t.tag === 5) {
        var c = t.stateNode;
        if (n !== null && tt < n.length) {
          var m = n[tt], S = oo(c);
          (m.view || S.view) && (i = !0);
          var z;
          if (z = (l.flags & 4) === 0)
            if (S.clip) z = !0;
            else {
              z = m.rect;
              var v = S.rect;
              z = z.y !== v.y || z.x !== v.x || z.height !== v.height || z.width !== v.width;
            }
          z && (l.flags |= 4), S.abs ? S = !m.abs : (m = m.rect, S = S.rect, S = m.height !== S.height || m.width !== S.width), S && (l.flags |= 32);
        } else l.flags |= 32;
        (l.flags & 4) !== 0 && Od(
          c,
          tt === 0 ? u : u + "_" + tt,
          a
        ), i && (l.flags & 4) !== 0 || (Jt === null && (Jt = []), Jt.push(
          c,
          tt === 0 ? e : e + "_" + tt,
          t.memoizedProps
        )), tt++;
      } else (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && f ? l.flags |= t.flags & 32 : Uc(
        l,
        t.child,
        u,
        e,
        a,
        n,
        f
      ) && (i = !0));
      t = t.sibling;
    }
    return i;
  }
  function Cs(l, t) {
    for (l = l.child; l !== null; ) {
      if (l.tag === 30) {
        var u = l.memoizedProps, e = l.stateNode, a = nu(u, e), n = fu(u.default, u.update), f;
        f = l.memoizedState, l.memoizedState = null, e = l;
        var i = l.child;
        tt = 0, a = Uc(
          e,
          i,
          a,
          a,
          n,
          f,
          !1
        ), (l.flags & 4) !== 0 && a && Pe(l, u.onUpdate);
      } else
        (l.subtreeFlags & 33554432) !== 0 && Cs(l);
      l = l.sibling;
    }
  }
  var Yl = !1, sl = !1, $t = !1, Rc = !1, Ds = typeof WeakSet == "function" ? WeakSet : Set, jl = null, Ft = !1, Va = !1, yf = !1, Hc = !1;
  function lm(l, t, u) {
    if (l = l.containerInfo, ao = oa, l = Hr(l), Ti(l)) {
      if ("selectionStart" in l)
        var e = {
          start: l.selectionStart,
          end: l.selectionEnd
        };
      else
        l: {
          e = (e = l.ownerDocument) && e.defaultView || window;
          var a = e.getSelection && e.getSelection();
          if (a && a.rangeCount !== 0) {
            e = a.anchorNode;
            var n = a.anchorOffset, f = a.focusNode;
            a = a.focusOffset;
            try {
              e.nodeType, f.nodeType;
            } catch {
              e = null;
              break l;
            }
            var i = 0, c = -1, m = -1, S = 0, z = 0, v = l, g = null;
            t: for (; ; ) {
              for (var A; v !== e || n !== 0 && v.nodeType !== 3 || (c = i + n), v !== f || a !== 0 && v.nodeType !== 3 || (m = i + a), v.nodeType === 3 && (i += v.nodeValue.length), (A = v.firstChild) !== null; )
                g = v, v = A;
              for (; ; ) {
                if (v === l) break t;
                if (g === e && ++S === n && (c = i), g === f && ++z === a && (m = i), (A = v.nextSibling) !== null) break;
                v = g, g = v.parentNode;
              }
              v = A;
            }
            e = c === -1 || m === -1 ? null : { start: c, end: m };
          } else e = null;
        }
      e = e || { start: 0, end: 0 };
    } else e = null;
    for (no = { focusedElem: l, selectionRange: e }, oa = !1, u = (u & 335544064) === u, jl = t, t = u ? 9270 : 1024; jl !== null; ) {
      if (l = jl, u && (e = l.deletions, e !== null))
        for (n = 0; n < e.length; n++)
          u && Dc(e[n]);
      if (l.alternate === null && (l.flags & 2) !== 0)
        u && _s(l), mf(u);
      else {
        if (l.tag === 22) {
          if (e = l.alternate, l.memoizedState !== null) {
            e !== null && e.memoizedState === null && u && Dc(e), mf(u);
            continue;
          } else if (e !== null && e.memoizedState !== null) {
            u && _s(l), mf(u);
            continue;
          }
        }
        e = l.child, (l.subtreeFlags & t) !== 0 && e !== null ? (e.return = l, jl = e) : (u && As(l), mf(u));
      }
    }
    vt = null;
  }
  function mf(l) {
    for (; jl !== null; ) {
      var t = jl, u = l, e = t.alternate, a = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if ((a & 1024) !== 0 && e !== null) {
            u = void 0, a = e.memoizedProps, e = e.memoizedState;
            var n = t.stateNode;
            try {
              var f = ve(
                t.type,
                a
              );
              u = n.getSnapshotBeforeUpdate(
                f,
                e
              ), n.__reactInternalSnapshotBeforeUpdate = u;
            } catch (i) {
              vl(t, t.return, i);
            }
          }
          break;
        case 3:
          if ((a & 1024) !== 0) {
            if (e = t.stateNode.containerInfo, u = e.nodeType, u === 9)
              vo(e);
            else if (u === 1)
              switch (e.nodeName) {
                case "HEAD":
                case "HTML":
                case "BODY":
                  vo(e);
                  break;
                default:
                  e.textContent = "";
              }
          }
          break;
        case 5:
        case 26:
        case 27:
        case 6:
        case 4:
        case 17:
          break;
        case 30:
          u && e !== null && (u = nu(
            e.memoizedProps,
            e.stateNode
          ), a = t.memoizedProps, a = fu(a.default, a.update), a !== "none" && Ke(
            e,
            u,
            a,
            e.memoizedState = [],
            !0
          ));
          break;
        default:
          if ((a & 1024) !== 0) throw Error(o(163));
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, jl = e;
        break;
      }
      jl = t.return;
    }
  }
  function ps(l, t, u) {
    var e = u.flags;
    switch (u.tag) {
      case 0:
      case 11:
      case 15:
        Wt(l, u), e & 4 && Qa(5, u);
        break;
      case 1:
        if (Wt(l, u), e & 4)
          if (l = u.stateNode, t === null)
            try {
              l.componentDidMount();
            } catch (f) {
              vl(u, u.return, f);
            }
          else {
            var a = ve(
              u.type,
              t.memoizedProps
            );
            t = t.memoizedState;
            try {
              l.componentDidUpdate(
                a,
                t,
                l.__reactInternalSnapshotBeforeUpdate
              );
            } catch (f) {
              vl(
                u,
                u.return,
                f
              );
            }
          }
        e & 64 && Ss(u), e & 512 && Kt(u, u.return);
        break;
      case 3:
        if (Wt(l, u), e & 64 && (l = u.updateQueue, l !== null)) {
          if (t = null, u.child !== null)
            switch (u.child.tag) {
              case 27:
              case 5:
                t = u.child.stateNode;
                break;
              case 1:
                t = u.child.stateNode;
            }
          try {
            i0(l, t);
          } catch (f) {
            vl(u, u.return, f);
          }
        }
        break;
      case 27:
        t === null && e & 4 && zs(u);
      case 26:
      case 5:
        Wt(l, u), t === null && e & 4 && _c(u), e & 512 && Kt(u, u.return);
        break;
      case 12:
        Wt(l, u);
        break;
      case 31:
        Wt(l, u), e & 4 && Bs(l, u);
        break;
      case 13:
        Wt(l, u), e & 4 && Ys(l, u), e & 64 && (l = u.memoizedState, l !== null && (l = l.dehydrated, l !== null && (u = dm.bind(
          null,
          u
        ), wm(l, u))));
        break;
      case 22:
        if (e = u.memoizedState !== null || Yl, !e) {
          var n = t !== null && t.memoizedState !== null || sl;
          t = Yl, a = sl, Yl = e, (sl = n) && !a ? (e = 2, (u.subtreeFlags & 8772) !== 0 && (e |= 1), Bt(
            l,
            u,
            e
          )) : Wt(l, u), Yl = t, sl = a;
        }
        break;
      case 30:
        Wt(l, u), e & 512 && Kt(u, u.return);
        break;
      case 7:
        e & 512 && Kt(u, u.return);
      default:
        Wt(l, u);
    }
  }
  function Bc(l, t) {
    for (l = l.child; l !== null; )
      Us(l, t), l = l.sibling;
  }
  function Us(l, t) {
    switch (l.tag) {
      case 5:
      case 26:
        try {
          var u = l.stateNode;
          if (t) {
            var e = u.style;
            typeof e.setProperty == "function" ? e.setProperty("display", "none", "important") : e.display = "none";
          } else {
            var a = l.stateNode, n = l.memoizedProps.style, f = n != null && n.hasOwnProperty("display") ? n.display : null;
            a.style.display = f == null || typeof f == "boolean" ? "" : ("" + f).trim();
          }
        } catch (c) {
          vl(l, l.return, c);
        }
        Yc(l, t);
        break;
      case 6:
        try {
          l.stateNode.nodeValue = t ? "" : l.memoizedProps, fl = !0;
        } catch (c) {
          vl(l, l.return, c);
        }
        break;
      case 18:
        try {
          var i = l.stateNode;
          t ? _d(i, !0) : _d(l.stateNode, !1);
        } catch (c) {
          vl(l, l.return, c);
        }
        break;
      case 22:
      case 23:
        l.memoizedState === null && Bc(l, t);
        break;
      default:
        Bc(l, t);
    }
  }
  function Yc(l, t) {
    if (l.subtreeFlags & 67108864)
      for (l = l.child; l !== null; ) {
        l: {
          var u = l, e = t;
          switch (u.tag) {
            case 4:
              Us(u, e);
              break l;
            case 22:
              u.memoizedState === null && Yc(u, e);
              break l;
            default:
              Yc(u, e);
          }
        }
        l = l.sibling;
      }
  }
  function Rs(l) {
    var t = l.alternate;
    t !== null && (l.alternate = null, Rs(t)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (t = l.stateNode, t !== null && Tn(t)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var El = null, ut = !1;
  function Rt(l, t, u) {
    for (u = u.child; u !== null; )
      Hs(l, t, u), u = u.sibling;
  }
  function Hs(l, t, u) {
    if (ct && typeof ct.onCommitFiberUnmount == "function")
      try {
        ct.onCommitFiberUnmount(da, u);
      } catch {
      }
    switch (u.tag) {
      case 26:
        sl || Zl(u, t), Rt(
          l,
          t,
          u
        ), u.memoizedState ? u.memoizedState.count-- : u.stateNode && !sl && (u = u.stateNode, u.parentNode.removeChild(u));
        break;
      case 27:
        sl || Zl(u, t), Za(u);
        var e = El, a = ut;
        Qu(u.type) && (El = u.stateNode, ut = !1), Rt(
          l,
          t,
          u
        ), qd(
          u.stateNode,
          u.type,
          u.memoizedProps
        ), El = e, ut = a;
        break;
      case 5:
        sl || Zl(u, t), Za(u);
      case 6:
        if (u.tag === 6 && Za(u), e = El, a = ut, El = null, Rt(
          l,
          t,
          u
        ), El = e, ut = a, El !== null)
          if (ut)
            try {
              (El.nodeType === 9 ? El.body : El.nodeName === "HTML" ? El.ownerDocument.body : El).removeChild(u.stateNode), fl = !0;
            } catch (n) {
              vl(
                u,
                t,
                n
              );
            }
          else
            try {
              El.removeChild(u.stateNode), fl = !0;
            } catch (n) {
              vl(
                u,
                t,
                n
              );
            }
        break;
      case 18:
        El !== null && (ut ? (l = El, zd(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          u.stateNode
        ), ra(l)) : zd(El, u.stateNode));
        break;
      case 4:
        e = El, a = ut, El = u.stateNode.containerInfo, ut = !0, Rt(
          l,
          t,
          u
        ), El = e, ut = a;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Bu(2, u, t), sl || Bu(4, u, t), Rt(
          l,
          t,
          u
        );
        break;
      case 1:
        sl || (Zl(u, t), e = u.stateNode, typeof e.componentWillUnmount == "function" && Ts(
          u,
          t,
          e
        )), Rt(
          l,
          t,
          u
        );
        break;
      case 21:
        Rt(
          l,
          t,
          u
        );
        break;
      case 22:
        sl = (e = sl) || u.memoizedState !== null, Rt(
          l,
          t,
          u
        ), sl = e;
        break;
      case 30:
        Zl(u, t), Rt(
          l,
          t,
          u
        );
        break;
      case 7:
        sl || Zl(u, t), Rt(
          l,
          t,
          u
        );
        break;
      default:
        Rt(
          l,
          t,
          u
        );
    }
  }
  function Bs(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null))) {
      l = l.dehydrated;
      try {
        ra(l);
      } catch (u) {
        vl(t, t.return, u);
      }
    }
  }
  function Ys(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        ra(l);
      } catch (u) {
        vl(t, t.return, u);
      }
  }
  function tm(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var t = l.stateNode;
        return t === null && (t = l.stateNode = new Ds()), t;
      case 22:
        return l = l.stateNode, t = l._retryCache, t === null && (t = l._retryCache = new Ds()), t;
      default:
        throw Error(o(435, l.tag));
    }
  }
  function hf(l, t) {
    var u = tm(l);
    t.forEach(function(e) {
      if (!u.has(e)) {
        u.add(e);
        var a = vm.bind(null, l, e);
        e.then(a, a);
      }
    });
  }
  function Wl(l, t, u) {
    var e = t.deletions;
    if (e !== null)
      for (var a = 0; a < e.length; a++) {
        var n = e[a], f = l, i = t, c = i;
        l: for (; c !== null; ) {
          switch (c.tag) {
            case 27:
              if (Qu(c.type)) {
                El = c.stateNode, ut = !1;
                break l;
              }
              break;
            case 5:
              El = c.stateNode, ut = !1;
              break l;
            case 3:
            case 4:
              El = c.stateNode.containerInfo, ut = !0;
              break l;
          }
          c = c.return;
        }
        if (El === null) throw Error(o(160));
        Hs(f, i, n), El = null, ut = !1, f = n.alternate, f !== null && (f.return = null), n.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        js(t, l, u), t = t.sibling;
  }
  var Ht = null;
  function js(l, t, u) {
    var e = l.alternate, a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (a & 4 && (e = l.updateQueue, e = e !== null ? e.events : null, e !== null))
          for (var n = 0; n < e.length; n++) {
            var f = e[n];
            f.ref.impl = f.nextImpl;
          }
        Wl(t, l, u), Il(l), a & 4 && (Bu(3, l, l.return), Qa(3, l), Bu(5, l, l.return));
        break;
      case 1:
        Wl(t, l, u), Il(l), a & 512 && (sl || e === null || Zl(e, e.return)), a & 64 && Yl && (l = l.updateQueue, l !== null && (t = l.callbacks, t !== null && (u = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = u === null ? t : u.concat(t))));
        break;
      case 26:
        if (n = Ht, Wl(t, l, u), Il(l), a & 512 && (sl || e === null || Zl(e, e.return)), a & 4)
          if (a = e !== null ? e.memoizedState : null, u = l.memoizedState, e === null)
            if (u === null)
              if (l.stateNode === null)
                if (Yl)
                  l.stateNode = Td(
                    l.type,
                    l.memoizedProps,
                    t.containerInfo,
                    l
                  );
                else {
                  l: {
                    t = l.type, u = l.memoizedProps, a = n.ownerDocument || n;
                    t: switch (t) {
                      case "title":
                        e = a.getElementsByTagName("title")[0], (!e || e[ma] || e[xl] || e.namespaceURI === "http://www.w3.org/2000/svg" || e.hasAttribute("itemprop")) && (e = a.createElement(t), a.head.insertBefore(
                          e,
                          a.querySelector("head > title")
                        )), Vl(e, t, u), e[xl] = l, Hl(e), t = e;
                        break l;
                      case "link":
                        if (n = Vd(
                          "link",
                          "href",
                          a
                        ).get(t + (u.href || ""))) {
                          for (f = 0; f < n.length; f++)
                            if (e = n[f], e.getAttribute("href") === (u.href == null || u.href === "" ? null : u.href) && e.getAttribute("rel") === (u.rel == null ? null : u.rel) && e.getAttribute("title") === (u.title == null ? null : u.title) && e.getAttribute("crossorigin") === (u.crossOrigin == null ? null : u.crossOrigin)) {
                              n.splice(f, 1);
                              break t;
                            }
                        }
                        e = a.createElement(t), Vl(e, t, u), a.head.appendChild(e);
                        break;
                      case "meta":
                        if (n = Vd(
                          "meta",
                          "content",
                          a
                        ).get(t + (u.content || ""))) {
                          for (f = 0; f < n.length; f++)
                            if (e = n[f], e.getAttribute("content") === (u.content == null ? null : "" + u.content) && e.getAttribute("name") === (u.name == null ? null : u.name) && e.getAttribute("property") === (u.property == null ? null : u.property) && e.getAttribute("http-equiv") === (u.httpEquiv == null ? null : u.httpEquiv) && e.getAttribute("charset") === (u.charSet == null ? null : u.charSet)) {
                              n.splice(f, 1);
                              break t;
                            }
                        }
                        e = a.createElement(t), Vl(e, t, u), a.head.appendChild(e);
                        break;
                      default:
                        throw Error(o(468, t));
                    }
                    e[xl] = l, Hl(e), t = e;
                  }
                  l.stateNode = t;
                }
              else
                Yl || bo(n, l.type, l.stateNode);
            else
              l.stateNode = Zd(
                n,
                u,
                l.memoizedProps
              );
          else
            a !== u ? (a === null ? (t = e.stateNode, t === null || sl || t.parentNode.removeChild(t)) : a.count--, u === null ? Yl || bo(n, l.type, l.stateNode) : Zd(n, u, l.memoizedProps)) : u === null && l.stateNode !== null && Oc(
              l,
              l.memoizedProps,
              e.memoizedProps
            );
        break;
      case 27:
        Wl(t, l, u), Il(l), a & 512 && (sl || e === null || Zl(e, e.return)), e !== null && a & 4 && Oc(
          l,
          l.memoizedProps,
          e.memoizedProps
        );
        break;
      case 5:
        if (n = $t, $t = !1, Wl(t, l, u), $t = n, Il(l), a & 512 && (sl || e === null || Zl(e, e.return)), l.flags & 32) {
          t = l.stateNode;
          try {
            Me(t, ""), fl = !0;
          } catch (S) {
            vl(l, l.return, S);
          }
        }
        a & 4 && l.stateNode != null && (t = l.memoizedProps, Oc(
          l,
          t,
          e !== null ? e.memoizedProps : t
        )), a & 1024 && (Rc = !0);
        break;
      case 6:
        if (Wl(t, l, u), Il(l), a & 4) {
          if (l.stateNode === null)
            throw Error(o(162));
          t = l.memoizedProps, u = l.stateNode;
          try {
            u.nodeValue = t, fl = !0;
          } catch (S) {
            vl(l, l.return, S);
          }
        }
        break;
      case 3:
        if (fl = !1, Uf = null, n = Ht, Ht = ka(t.containerInfo), Wl(t, l, u), Ht = n, Il(l), a & 4 && e !== null && e.memoizedState.isDehydrated)
          try {
            ra(t.containerInfo);
          } catch (S) {
            vl(l, l.return, S);
          }
        Rc && (Rc = !1, qs(l)), fl = !1;
        break;
      case 4:
        a = $t, $t = Yl, e = er(), n = Ht, Ht = ka(
          l.stateNode.containerInfo
        ), Wl(t, l, u), Il(l), Ht = n, fl && Va && (yf = !0), fl = e, $t = a;
        break;
      case 12:
        Wl(t, l, u), Il(l);
        break;
      case 31:
        Wl(t, l, u), Il(l), a & 4 && (t = l.updateQueue, t !== null && (l.updateQueue = null, hf(l, t)));
        break;
      case 13:
        Wl(t, l, u), Il(l), l.child.flags & 8192 && l.memoizedState !== null != (e !== null && e.memoizedState !== null) && (Tf = it()), a & 4 && (t = l.updateQueue, t !== null && (l.updateQueue = null, hf(l, t)));
        break;
      case 22:
        n = l.memoizedState !== null, f = e !== null && e.memoizedState !== null;
        var i = Yl, c = sl, m = $t;
        Yl = i || n, $t = m || n, sl = c || f, Wl(t, l, u), sl = c, $t = m, Yl = i, Il(l), a & 8192 && (t = l.stateNode, t._visibility = n ? t._visibility & -2 : t._visibility | 1, !n || e === null || f || Yl || sl || (t = f || sl, u = Yl, e = sl, Yl = n || Yl, sl = t, Yu(l, 2), Yl = u, sl = e), !n && $t || Bc(l, n)), a & 4 && (t = l.updateQueue, t !== null && (u = t.retryQueue, u !== null && (t.retryQueue = null, hf(l, u))));
        break;
      case 19:
        Wl(t, l, u), Il(l), a & 4 && (t = l.updateQueue, t !== null && (l.updateQueue = null, hf(l, t)));
        break;
      case 30:
        a & 512 && (sl || e === null || Zl(e, e.return)), a = er(), n = Va, f = (u & 335544064) === u, i = l.memoizedProps, Va = f && fu(
          i.default,
          i.update
        ) !== "none", Wl(t, l, u), Il(l), f && e !== null && fl && (l.flags |= 4), Va = n, fl = a;
        break;
      case 21:
        break;
      case 7:
        a & 512 && (sl || e === null || Zl(e, e.return)), e && e.stateNode !== null && (e.stateNode._fragmentFiber = l);
      default:
        Wl(t, l, u), Il(l);
    }
  }
  function Il(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        for (var u, e = l.return; e !== null; ) {
          if (Es(e)) {
            u = e;
            break;
          }
          e = e.return;
        }
        e = null;
        for (var a = l.return; a !== null; ) {
          if (zc(a)) {
            var n = a.stateNode;
            e === null ? e = [n] : e.push(n);
          }
          if (Ec(a)) break;
          a = a.return;
        }
        var f = e;
        if (u == null) throw Error(o(160));
        switch (u.tag) {
          case 27:
            var i = u.stateNode, c = Nc(l);
            rf(
              l,
              c,
              i,
              f
            );
            break;
          case 5:
            var m = u.stateNode;
            u.flags & 32 && (Me(m, ""), u.flags &= -33);
            var S = Nc(l);
            rf(
              l,
              S,
              m,
              f
            );
            break;
          case 3:
          case 4:
            var z = u.stateNode.containerInfo, v = Nc(l);
            Ac(
              l,
              v,
              z,
              f
            );
            break;
          default:
            throw Error(o(161));
        }
      } catch (g) {
        vl(l, l.return, g);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function qs(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var t = l;
        qs(t), t.tag === 5 && t.flags & 1024 && (t = t.stateNode, oa = !0, t.reset(), oa = !1), l = l.sibling;
      }
  }
  function Je(l, t) {
    if (t.subtreeFlags & 9270)
      for (t = t.child; t !== null; )
        xs(t, l), t = t.sibling;
    else Cs(t);
  }
  function xs(l, t) {
    var u = l.alternate;
    if (u === null) Mc(l, !1);
    else
      switch (l.tag) {
        case 3:
          if (Hc = Ft = !1, Os(), Je(t, l), !Ft && !yf) {
            if (l = Jt, l !== null)
              for (var e = 0; e < l.length; e += 3) {
                u = l[e];
                var a = l[e + 1];
                Nd(u, l[e + 2]), u = u.ownerDocument.documentElement, u !== null && u.animate(
                  { opacity: [0, 0], pointerEvents: ["none", "none"] },
                  {
                    duration: 0,
                    fill: "forwards",
                    pseudoElement: "::view-transition-group(" + a + ")"
                  }
                );
              }
            l = t.containerInfo, l = l.nodeType === 9 ? l.documentElement : l.ownerDocument.documentElement, l !== null && l.style.viewTransitionName === "" && (l.style.viewTransitionName = "none", l.animate(
              { opacity: [0, 0], pointerEvents: ["none", "none"] },
              {
                duration: 0,
                fill: "forwards",
                pseudoElement: "::view-transition-group(root)"
              }
            ), l.animate(
              { width: [0, 0], height: [0, 0] },
              {
                duration: 0,
                fill: "forwards",
                pseudoElement: "::view-transition"
              }
            )), Hc = !0;
          }
          Jt = null;
          break;
        case 5:
          Je(t, l);
          break;
        case 4:
          e = Ft, Ft = !1, Je(t, l), Ft && (yf = !0), Ft = e;
          break;
        case 22:
          l.memoizedState === null && (u.memoizedState !== null ? Mc(l, !1) : Je(t, l));
          break;
        case 30:
          e = Ft, a = Os(), Ft = !1, Je(t, l), Ft && (l.flags |= 4);
          var n = l.memoizedProps, f = l.stateNode;
          t = nu(n, f), f = nu(u.memoizedProps, f);
          var i = fu(n.default, n.update);
          i === "none" ? t = !1 : (n = u.memoizedState, u.memoizedState = null, u = l.child, tt = 0, t = Uc(
            l,
            u,
            t,
            f,
            i,
            n,
            !0
          ), tt !== (n === null ? 0 : n.length) && (l.flags |= 32)), (l.flags & 4) !== 0 && t ? (Pe(
            l,
            l.memoizedProps.onUpdate
          ), Jt = a) : a !== null && (a.push.apply(a, Jt), Jt = a), Ft = (l.flags & 32) !== 0 ? !0 : e;
          break;
        default:
          Je(t, l);
      }
  }
  function Wt(l, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        ps(l, t.alternate, t), t = t.sibling;
  }
  function Yu(l, t) {
    for (l = l.child; l !== null; ) {
      var u = l, e = t;
      switch (u.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Bu(4, u, u.return), Yu(
            u,
            e
          );
          break;
        case 1:
          Zl(u, u.return);
          var a = u.stateNode;
          typeof a.componentWillUnmount == "function" && Ts(
            u,
            u.return,
            a
          ), Yu(
            u,
            e
          );
          break;
        case 27:
          (e & 2) !== 0 && qd(
            u.stateNode,
            u.type,
            u.memoizedProps
          );
        case 5:
          Zl(u, u.return), u.tag !== 5 && u.tag !== 27 || Za(u), Yu(
            u,
            e
          );
          break;
        case 6:
          Za(u);
          break;
        case 26:
          Zl(u, u.return), a = u.stateNode, u.memoizedState !== null || a === null || sl || a.parentNode.removeChild(a), Yu(
            u,
            e
          );
          break;
        case 22:
          u.memoizedState === null && Yu(
            u,
            e
          );
          break;
        case 30:
          Zl(u, u.return), Yu(
            u,
            e
          );
          break;
        case 7:
          Zl(u, u.return);
        default:
          Yu(
            u,
            e
          );
      }
      l = l.sibling;
    }
  }
  function Bt(l, t, u) {
    for (u = (t.subtreeFlags & 8772) !== 0 ? u : u & -2, t = t.child; t !== null; ) {
      var e = t.alternate, a = l, n = t, f = n.flags, i = (u & 1) !== 0;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Bt(
            a,
            n,
            u
          ), Qa(4, n);
          break;
        case 1:
          if (Bt(
            a,
            n,
            u
          ), e = n, a = e.stateNode, typeof a.componentDidMount == "function")
            try {
              a.componentDidMount();
            } catch (S) {
              vl(e, e.return, S);
            }
          if (e = n, a = e.updateQueue, a !== null) {
            var c = e.stateNode;
            try {
              var m = a.shared.hiddenCallbacks;
              if (m !== null)
                for (a.shared.hiddenCallbacks = null, a = 0; a < m.length; a++)
                  f0(m[a], c);
            } catch (S) {
              vl(e, e.return, S);
            }
          }
          i && f & 64 && Ss(n), Kt(n, n.return);
          break;
        case 27:
          (u & 2) !== 0 && zs(n);
        case 5:
          n.tag !== 5 && n.tag !== 27 || bs(n), Bt(
            a,
            n,
            u
          ), i && e === null && f & 4 && _c(n), Kt(n, n.return);
          break;
        case 6:
          bs(n);
          break;
        case 26:
          c = n.stateNode, n.memoizedState !== null || c === null || Yl || bo(
            ka(c.ownerDocument),
            n.type,
            c
          ), Bt(
            a,
            n,
            u
          ), i && e === null && f & 4 && _c(n), Kt(n, n.return);
          break;
        case 12:
          Bt(
            a,
            n,
            u
          );
          break;
        case 31:
          Bt(
            a,
            n,
            u
          ), i && f & 4 && Bs(a, n);
          break;
        case 13:
          Bt(
            a,
            n,
            u
          ), i && f & 4 && Ys(a, n);
          break;
        case 22:
          n.memoizedState === null && Bt(
            a,
            n,
            u
          ), Kt(n, n.return);
          break;
        case 30:
          Bt(
            a,
            n,
            u
          ), Kt(n, n.return);
          break;
        case 7:
          Kt(n, n.return);
        default:
          Bt(
            a,
            n,
            u
          );
      }
      t = t.sibling;
    }
  }
  function jc(l, t) {
    var u = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== u && (l != null && l.refCount++, u != null && Ca(u));
  }
  function qc(l, t) {
    l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && Ca(l));
  }
  function Mt(l, t, u, e) {
    var a = (u & 335544064) === u;
    if (t.subtreeFlags & (a ? 10262 : 10256))
      for (t = t.child; t !== null; )
        Gs(
          l,
          t,
          u,
          e
        ), t = t.sibling;
    else a && Ms(t);
  }
  function Gs(l, t, u, e) {
    var a = (u & 335544064) === u;
    a && t.alternate === null && t.return !== null && t.return.alternate !== null && vf(t);
    var n = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Mt(
          l,
          t,
          u,
          e
        ), n & 2048 && Qa(9, t);
        break;
      case 1:
        Mt(
          l,
          t,
          u,
          e
        );
        break;
      case 3:
        Mt(
          l,
          t,
          u,
          e
        ), a && Hc && (l = l.containerInfo, l = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, l.style.viewTransitionName === "root" && (l.style.viewTransitionName = ""), l = l.ownerDocument.documentElement, l !== null && l.style.viewTransitionName === "none" && (l.style.viewTransitionName = "")), n & 2048 && (n = null, t.alternate !== null && (n = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== n && (t.refCount++, n != null && Ca(n)));
        break;
      case 12:
        if (n & 2048) {
          Mt(
            l,
            t,
            u,
            e
          ), n = t.stateNode;
          try {
            var f = t.memoizedProps, i = f.id, c = f.onPostCommit;
            typeof c == "function" && c(
              i,
              t.alternate === null ? "mount" : "update",
              n.passiveEffectDuration,
              -0
            );
          } catch (m) {
            vl(t, t.return, m);
          }
        } else
          Mt(
            l,
            t,
            u,
            e
          );
        break;
      case 31:
        Mt(
          l,
          t,
          u,
          e
        );
        break;
      case 13:
        Mt(
          l,
          t,
          u,
          e
        );
        break;
      case 23:
        break;
      case 22:
        f = t.stateNode, i = t.alternate, t.memoizedState !== null ? (a && i !== null && i.memoizedState === null && vf(i), f._visibility & 2 ? Mt(
          l,
          t,
          u,
          e
        ) : La(
          l,
          t
        )) : (a && i !== null && i.memoizedState !== null && vf(t), f._visibility & 2 ? Mt(
          l,
          t,
          u,
          e
        ) : (f._visibility |= 2, we(
          l,
          t,
          u,
          e,
          (t.subtreeFlags & 10256) !== 0 || !1
        ))), n & 2048 && jc(i, t);
        break;
      case 24:
        Mt(
          l,
          t,
          u,
          e
        ), n & 2048 && qc(t.alternate, t);
        break;
      case 30:
        a && (n = t.alternate, n !== null && (wt(n.child, !0), wt(t.child, !0))), Mt(
          l,
          t,
          u,
          e
        );
        break;
      default:
        Mt(
          l,
          t,
          u,
          e
        );
    }
  }
  function we(l, t, u, e, a) {
    for (a = a && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var n = l, f = t, i = u, c = e, m = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          we(
            n,
            f,
            i,
            c,
            a
          ), Qa(8, f);
          break;
        case 23:
          break;
        case 22:
          var S = f.stateNode;
          f.memoizedState !== null ? S._visibility & 2 ? we(
            n,
            f,
            i,
            c,
            a
          ) : La(
            n,
            f
          ) : (S._visibility |= 2, we(
            n,
            f,
            i,
            c,
            a
          )), a && m & 2048 && jc(
            f.alternate,
            f
          );
          break;
        case 24:
          we(
            n,
            f,
            i,
            c,
            a
          ), a && m & 2048 && qc(f.alternate, f);
          break;
        default:
          we(
            n,
            f,
            i,
            c,
            a
          );
      }
      t = t.sibling;
    }
  }
  function La(l, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var u = l, e = t, a = e.flags;
        switch (e.tag) {
          case 22:
            La(u, e), a & 2048 && jc(
              e.alternate,
              e
            );
            break;
          case 24:
            La(u, e), a & 2048 && qc(e.alternate, e);
            break;
          default:
            La(u, e);
        }
        t = t.sibling;
      }
  }
  var ye = 8192;
  function me(l, t, u) {
    if (l.subtreeFlags & ye)
      for (l = l.child; l !== null; )
        Xs(
          l,
          t,
          u
        ), l = l.sibling;
  }
  function Xs(l, t, u) {
    switch (l.tag) {
      case 26:
        me(
          l,
          t,
          u
        ), l.flags & ye && (l.memoizedState !== null ? i1(
          u,
          Ht,
          l.memoizedState,
          l.memoizedProps
        ) : (l = l.stateNode, (t & 335544128) === t && wd(u, l)));
        break;
      case 5:
        me(
          l,
          t,
          u
        ), l.flags & ye && (l = l.stateNode, (t & 335544128) === t && wd(u, l));
        break;
      case 3:
      case 4:
        var e = Ht;
        Ht = ka(l.stateNode.containerInfo), me(
          l,
          t,
          u
        ), Ht = e;
        break;
      case 22:
        l.memoizedState === null && (e = l.alternate, e !== null && e.memoizedState !== null ? (e = ye, ye = 16777216, me(
          l,
          t,
          u
        ), ye = e) : me(
          l,
          t,
          u
        ));
        break;
      case 30:
        if ((l.flags & ye) !== 0 && (e = l.memoizedProps.name, e != null && e !== "auto")) {
          var a = l.stateNode;
          a.paired = null, vt === null && (vt = /* @__PURE__ */ new Map()), vt.set(e, a);
        }
        me(
          l,
          t,
          u
        );
        break;
      default:
        me(
          l,
          t,
          u
        );
    }
  }
  function Qs(l) {
    var t = l.alternate;
    if (t !== null && (l = t.child, l !== null)) {
      t.child = null;
      do
        t = l.sibling, l.sibling = null, l = t;
      while (l !== null);
    }
  }
  function Ka(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var u = 0; u < t.length; u++) {
          var e = t[u];
          jl = e, Vs(
            e,
            l
          );
        }
      Qs(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        Zs(l), l = l.sibling;
  }
  function Zs(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        Ka(l), l.flags & 2048 && Bu(9, l, l.return);
        break;
      case 3:
        Ka(l);
        break;
      case 12:
        Ka(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null && t._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (t._visibility &= -3, gf(l)) : Ka(l);
        break;
      default:
        Ka(l);
    }
  }
  function gf(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var u = 0; u < t.length; u++) {
          var e = t[u];
          jl = e, Vs(
            e,
            l
          );
        }
      Qs(l);
    }
    for (l = l.child; l !== null; ) {
      switch (t = l, t.tag) {
        case 0:
        case 11:
        case 15:
          Bu(8, t, t.return), gf(t);
          break;
        case 22:
          u = t.stateNode, u._visibility & 2 && (u._visibility &= -3, gf(t));
          break;
        default:
          gf(t);
      }
      l = l.sibling;
    }
  }
  function Vs(l, t) {
    for (; jl !== null; ) {
      var u = jl;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          Bu(8, u, t);
          break;
        case 23:
        case 22:
          if (u.memoizedState !== null && u.memoizedState.cachePool !== null) {
            var e = u.memoizedState.cachePool.pool;
            e != null && e.refCount++;
          }
          break;
        case 24:
          Ca(u.memoizedState.cache);
      }
      if (e = u.child, e !== null) e.return = u, jl = e;
      else
        l: for (u = l; jl !== null; ) {
          e = jl;
          var a = e.sibling, n = e.return;
          if (Rs(e), e === u) {
            jl = null;
            break l;
          }
          if (a !== null) {
            a.return = n, jl = a;
            break l;
          }
          jl = n;
        }
    }
  }
  var um = {
    getCacheForType: function(l) {
      var t = Gl(Ml), u = t.data.get(l);
      return u === void 0 && (u = l(), t.data.set(l, u)), u;
    },
    cacheSignal: function() {
      return Gl(Ml).controller.signal;
    }
  }, em = typeof WeakMap == "function" ? WeakMap : Map, ol = 0, gl = null, I = null, P = 0, dl = 0, yt = null, ju = !1, $e = !1, xc = !1, mu = 0, Nl = 0, qu = 0, he = 0, Sf = 0, mt = 0, Fe = 0, Ja = null, et = null, Gc = !1, Tf = 0, Ls = 0, bf = 1 / 0, Ef = null, xu = null, _l = 0, Yt = null, ge = null, It = 0, Xc = 0, Qc = null, Ks = null, We = null, Ie = null, ke = null, wa = 0, zf = null;
  function ht() {
    return (ol & 2) !== 0 && P !== 0 ? P & -P : R.T !== null ? Ic() : $o();
  }
  function Js() {
    if (mt === 0)
      if ((P & 536870912) === 0 || F) {
        var l = mn;
        mn <<= 1, (mn & 3932160) === 0 && (mn = 262144), mt = l;
      } else mt = 536870912;
    return l = Xl.current, l !== null && (l.flags |= 32), mt;
  }
  function Pe(l, t) {
    if (t != null) {
      var u = l.stateNode, e = u.ref;
      e === null && (e = u.ref = Ad(
        nu(l.memoizedProps, u)
      )), Ie === null && (Ie = []), Ie.push(t.bind(null, e));
    }
  }
  function at(l, t, u) {
    (l === gl && (dl === 2 || dl === 9) || l.cancelPendingCommit !== null) && (la(l, 0), Gu(
      l,
      P,
      mt,
      !1
    )), ya(l, u), ((ol & 2) === 0 || l !== gl) && (l === gl && ((ol & 2) === 0 && (he |= u), Nl === 4 && Gu(
      l,
      P,
      mt,
      !1
    )), kt(l));
  }
  function ws(l, t, u) {
    if ((ol & 6) !== 0) throw Error(o(327));
    var e = !u && (t & 127) === 0 && (t & l.expiredLanes) === 0 || va(l, t), a = e ? fm(l, t) : Vc(l, t, !0), n = e;
    do {
      if (a === 0) {
        $e && !e && Gu(l, t, 0, !1);
        break;
      } else {
        if (u = l.current.alternate, n && !am(u)) {
          a = Vc(l, t, !1), n = !1;
          continue;
        }
        if (a === 2) {
          if (n = t, l.errorRecoveryDisabledLanes & n)
            var f = 0;
          else
            f = l.pendingLanes & -536870913, f = f !== 0 ? f : f & 536870912 ? 536870912 : 0;
          if (f !== 0) {
            t = f;
            l: {
              var i = l;
              a = Ja;
              var c = i.current.memoizedState.isDehydrated;
              if (c && (la(i, f).flags |= 256), f = Vc(
                i,
                f,
                !1
              ), f !== 2 && f !== 6) {
                if (xc && !c) {
                  i.errorRecoveryDisabledLanes |= n, he |= n, a = 4;
                  break l;
                }
                n = et, et = a, n !== null && (et === null ? et = n : et.push.apply(
                  et,
                  n
                ));
              }
              a = f;
            }
            if (n = !1, a !== 2) continue;
          }
        }
        if (a === 1) {
          la(l, 0), Gu(l, t, 0, !0);
          break;
        }
        l: {
          switch (e = l, n = a, n) {
            case 0:
            case 1:
              throw Error(o(345));
            case 4:
              if ((t & 4194048) !== t && (t & 62914560) !== t)
                break;
            case 6:
              Gu(
                e,
                t,
                mt,
                !ju
              );
              break l;
            case 2:
              et = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(o(329));
          }
          if ((t & 62914560) === t && (a = Tf + 300 - it(), 10 < a)) {
            if (Gu(
              e,
              t,
              mt,
              !ju
            ), gn(e, 0, !0) !== 0) break l;
            It = t, e.timeoutHandle = co(
              $s.bind(
                null,
                e,
                u,
                et,
                Ef,
                Gc,
                t,
                mt,
                he,
                Fe,
                ju,
                n,
                "Throttled",
                -0,
                0
              ),
              a
            );
            break l;
          }
          $s(
            e,
            u,
            et,
            Ef,
            Gc,
            t,
            mt,
            he,
            Fe,
            ju,
            n,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    kt(l);
  }
  function $s(l, t, u, e, a, n, f, i, c, m, S, z, v, g) {
    l.timeoutHandle = -1;
    var A = t.subtreeFlags, p = (n & 335544064) === n;
    if (z = null, (p || A & 8192 || (A & 16785408) === 16785408) && (z = {
      stylesheets: null,
      count: 0,
      imgCount: 0,
      imgBytes: 0,
      suspenseyImages: [],
      waitingForImages: !0,
      waitingForViewTransition: !1,
      unsuspend: Zt
    }, vt = null, Xs(
      t,
      n,
      z
    ), p && (A = z, p = l.containerInfo, p = (p.nodeType === 9 ? p : p.ownerDocument).__reactViewTransition, p != null && (A.count++, A.waitingForViewTransition = !0, A = tn.bind(A), p.finished.then(A, A))), A = (n & 62914560) === n ? Tf - it() : (n & 4194048) === n ? Ls - it() : 0, A = c1(
      z,
      A
    ), A !== null)) {
      It = n, l.cancelPendingCommit = A(
        ud.bind(
          null,
          l,
          t,
          n,
          u,
          e,
          a,
          f,
          i,
          c,
          m,
          S,
          z,
          null,
          v,
          g
        )
      ), Gu(l, n, f, !m);
      return;
    }
    ud(
      l,
      t,
      n,
      u,
      e,
      a,
      f,
      i,
      c,
      m,
      S,
      z
    );
  }
  function am(l) {
    for (var t = l; ; ) {
      var u = t.tag;
      if ((u === 0 || u === 11 || u === 15) && t.flags & 16384 && (u = t.updateQueue, u !== null && (u = u.stores, u !== null)))
        for (var e = 0; e < u.length; e++) {
          var a = u[e], n = a.getSnapshot;
          a = a.value;
          try {
            if (!st(n(), a)) return !1;
          } catch {
            return !1;
          }
        }
      if (u = t.child, t.subtreeFlags & 16384 && u !== null)
        u.return = t, t = u;
      else {
        if (t === l) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === l) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function Gu(l, t, u, e) {
    t = Vo(l, t), t &= ~Sf, t &= ~he, l.suspendedLanes |= t, l.pingedLanes &= ~t, e && (l.warmLanes |= t), e = l.expirationTimes;
    for (var a = t; 0 < a; ) {
      var n = 31 - ot(a), f = 1 << n;
      e[n] = -1, a &= ~f;
    }
    u !== 0 && Ko(l, u, t);
  }
  function _f() {
    return (ol & 6) === 0 ? ($a(0), !1) : !0;
  }
  function Zc() {
    if (I !== null) {
      if (dl === 0)
        var l = I.return;
      else
        l = I, ou = ae = null, Wi(l), Xe = null, Ua = 0, l = I;
      for (; l !== null; )
        gs(l.alternate, l), l = l.return;
      I = null;
    }
  }
  function la(l, t) {
    var u = l.timeoutHandle;
    return u !== -1 && (l.timeoutHandle = -1, Cm(u)), u = l.cancelPendingCommit, u !== null && (l.cancelPendingCommit = null, u()), It = 0, Zc(), gl = l, I = u = iu(l.current, null), P = t, dl = 0, yt = null, ju = !1, $e = va(l, t), xc = !1, Fe = mt = Sf = he = qu = Nl = 0, et = Ja = null, Gc = !1, mu = Vo(l, t), pn(), u;
  }
  function Fs(l, t) {
    J = null, R.H = tf, t === Ge || t === Qn ? (t = u0(), dl = 3) : t === qi ? (t = u0(), dl = 4) : dl = t === sc ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, yt = t, I === null && (Nl = 1, uf(
      l,
      _t(t, l.current)
    ));
  }
  function Ws() {
    var l = Xl.current;
    return l === null ? !0 : (P & 4194048) === P ? Jl === null : (P & 62914560) === P || (P & 536870912) !== 0 ? l === Jl : !1;
  }
  function Is() {
    var l = R.H;
    return R.H = tf, l === null ? tf : l;
  }
  function ks() {
    var l = R.A;
    return R.A = um, l;
  }
  function Of() {
    Nl = 4, ju || (P & 4194048) !== P && Xl.current !== null || ($e = !0), (qu & 134217727) === 0 && (he & 134217727) === 0 || gl === null || Gu(
      gl,
      P,
      mt,
      !1
    );
  }
  function Vc(l, t, u) {
    var e = ol;
    ol |= 2;
    var a = Is(), n = ks();
    (gl !== l || P !== t) && (Ef = null, la(l, t)), t = !1;
    var f = Nl;
    l: do
      try {
        if (dl !== 0 && I !== null) {
          var i = I, c = yt;
          switch (dl) {
            case 8:
              Zc(), f = 6;
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              Xl.current === null && (t = !0);
              var m = dl;
              if (dl = 0, yt = null, ta(l, i, c, m), u && $e) {
                f = 0;
                break l;
              }
              break;
            default:
              m = dl, dl = 0, yt = null, ta(l, i, c, m);
          }
        }
        nm(), f = Nl;
        break;
      } catch (S) {
        Fs(l, S);
      }
    while (!0);
    return t && l.shellSuspendCounter++, ou = ae = null, ol = e, R.H = a, R.A = n, I === null && (gl = null, P = 0, pn()), f;
  }
  function nm() {
    for (; I !== null; ) Ps(I);
  }
  function fm(l, t) {
    var u = ol;
    ol |= 2;
    var e = Is(), a = ks();
    gl !== l || P !== t ? (Ef = null, bf = it() + 500, la(l, t)) : $e = va(
      l,
      t
    );
    l: do
      try {
        if (dl !== 0 && I !== null) {
          t = I;
          var n = yt;
          t: switch (dl) {
            case 1:
              dl = 0, yt = null, ta(l, t, n, 1);
              break;
            case 2:
            case 9:
              if (l0(n)) {
                dl = 0, yt = null, ld(t);
                break;
              }
              t = function() {
                dl !== 2 && dl !== 9 || gl !== l || (dl = 7), kt(l);
              }, n.then(t, t);
              break l;
            case 3:
              dl = 7;
              break l;
            case 4:
              dl = 5;
              break l;
            case 7:
              l0(n) ? (dl = 0, yt = null, ld(t)) : (dl = 0, yt = null, ta(l, t, n, 7));
              break;
            case 5:
              var f = null;
              switch (I.tag) {
                case 26:
                  f = I.memoizedState;
                case 5:
                case 27:
                  var i = I;
                  if (f ? Kd(f) : i.stateNode.complete) {
                    dl = 0, yt = null;
                    var c = i.sibling;
                    if (c !== null) I = c;
                    else {
                      var m = i.return;
                      m !== null ? (I = m, Nf(m)) : I = null;
                    }
                    break t;
                  }
              }
              dl = 0, yt = null, ta(l, t, n, 5);
              break;
            case 6:
              dl = 0, yt = null, ta(l, t, n, 6);
              break;
            case 8:
              Zc(), Nl = 6;
              break l;
            default:
              throw Error(o(462));
          }
        }
        im();
        break;
      } catch (S) {
        Fs(l, S);
      }
    while (!0);
    return ou = ae = null, R.H = e, R.A = a, ol = u, I !== null ? 0 : (gl = null, P = 0, pn(), Nl);
  }
  function im() {
    for (; I !== null && !Ov(); )
      Ps(I);
  }
  function Ps(l) {
    var t = ms(l.alternate, l, mu);
    l.memoizedProps = l.pendingProps, t === null ? Nf(l) : I = t;
  }
  function ld(l) {
    var t = l, u = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = cs(
          u,
          t,
          t.pendingProps,
          t.type,
          void 0,
          P
        );
        break;
      case 11:
        t = cs(
          u,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          P
        );
        break;
      case 5:
        Wi(t);
        var e = t;
        e === Bl && (F ? (jn(e), e.tag === 5 && e.stateNode != null && (Tl = e.stateNode)) : (jn(e), F = !0));
      default:
        gs(u, t), t = I = Vr(t, mu), t = ms(u, t, mu);
    }
    l.memoizedProps = l.pendingProps, t === null ? Nf(l) : I = t;
  }
  function ta(l, t, u, e) {
    ou = ae = null, Wi(t), Xe = null, Ua = 0;
    var a = t.return;
    try {
      if ($y(
        l,
        a,
        t,
        u,
        P
      )) {
        Nl = 1, uf(
          l,
          _t(u, l.current)
        ), I = null;
        return;
      }
    } catch (n) {
      if (a !== null) throw I = a, n;
      Nl = 1, uf(
        l,
        _t(u, l.current)
      ), I = null;
      return;
    }
    t.flags & 32768 ? (F || e === 1 ? l = !0 : $e || (P & 536870912) !== 0 ? l = !1 : (ju = l = !0, (e === 2 || e === 9 || e === 3 || e === 6) && (e = Xl.current, e !== null && e.tag === 13 && (e.flags |= 16384))), td(t, l)) : Nf(t);
  }
  function Nf(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        td(
          t,
          ju
        );
        return;
      }
      l = t.return;
      var u = ky(
        t.alternate,
        t,
        mu
      );
      if (u !== null) {
        I = u;
        return;
      }
      if (t = t.sibling, t !== null) {
        I = t;
        return;
      }
      I = t = l;
    } while (t !== null);
    Nl === 0 && (Nl = 5);
  }
  function td(l, t) {
    do {
      var u = Py(l.alternate, l);
      if (u !== null) {
        u.flags &= 32767, I = u;
        return;
      }
      if (u = l.return, u !== null && (u.flags |= 32768, u.subtreeFlags = 0, u.deletions = null), !t && (l = l.sibling, l !== null)) {
        I = l;
        return;
      }
      I = l = u;
    } while (l !== null);
    Nl = 6, I = null;
  }
  function ud(l, t, u, e, a, n, f, i, c, m, S, z) {
    l.cancelPendingCommit = null;
    do
      Af();
    while (_l !== 0);
    if ((ol & 6) !== 0) throw Error(o(327));
    if (t !== null) {
      if (t === l.current) throw Error(o(177));
      l === gl && (I = gl = null, P = 0), ge = t, Yt = l, It = u, Qc = a, Ks = e, cm(
        l,
        t,
        u,
        f,
        i,
        c,
        z
      );
    }
  }
  function cm(l, t, u, e, a, n, f) {
    var i = t.lanes | t.childLanes;
    if (Xc = i, i |= Oi, Bv(
      l,
      u,
      i,
      e,
      a,
      n
    ), Ie = null, (u & 335544064) === u ? (ke = jy(l), e = 10262) : (ke = null, e = 10256), (t.subtreeFlags & e) !== 0 || (t.flags & e) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, ym(vn, function() {
      return wc(), null;
    })) : (l.callbackNode = null, l.callbackPriority = 0), sf = !1, e = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || e) {
      e = R.T, R.T = null, a = L.p, L.p = 2, n = ol, ol |= 4;
      try {
        lm(l, t, u);
      } finally {
        ol = n, L.p = a, R.T = e;
      }
    }
    _l = 1, sf ? We = Bm(
      f,
      l.containerInfo,
      ke,
      Lc,
      Kc,
      rm,
      Jc,
      wc,
      om
    ) : (Lc(), Kc(), Jc());
  }
  function om(l) {
    if (_l !== 0) {
      var t = Yt.onRecoverableError;
      t(l, { componentStack: null });
    }
  }
  function rm() {
    _l === 3 && (_l = 0, xs(ge, Yt), _l = 4);
  }
  function Lc() {
    if (_l === 1) {
      _l = 0;
      var l = Yt, t = ge, u = It, e = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || e) {
        e = R.T, R.T = null;
        var a = L.p;
        L.p = 2;
        var n = ol;
        ol |= 4;
        try {
          Va = yf = !1, js(t, l, u), u = no;
          var f = Hr(l.containerInfo), i = u.focusedElem, c = u.selectionRange;
          if (f !== i && i && i.ownerDocument && Rr(
            i.ownerDocument.documentElement,
            i
          )) {
            if (c !== null && Ti(i)) {
              var m = c.start, S = c.end;
              if (S === void 0 && (S = m), "selectionStart" in i)
                i.selectionStart = m, i.selectionEnd = Math.min(
                  S,
                  i.value.length
                );
              else {
                var z = i.ownerDocument || document, v = z && z.defaultView || window;
                if (v.getSelection) {
                  var g = v.getSelection(), A = i.textContent.length, p = Math.min(c.start, A), w = c.end === void 0 ? p : Math.min(c.end, A);
                  !g.extend && p > w && (f = w, w = p, p = f);
                  var y = Ur(
                    i,
                    p
                  ), r = Ur(
                    i,
                    w
                  );
                  if (y && r && (g.rangeCount !== 1 || g.anchorNode !== y.node || g.anchorOffset !== y.offset || g.focusNode !== r.node || g.focusOffset !== r.offset)) {
                    var h = z.createRange();
                    h.setStart(y.node, y.offset), g.removeAllRanges(), p > w ? (g.addRange(h), g.extend(r.node, r.offset)) : (h.setEnd(r.node, r.offset), g.addRange(h));
                  }
                }
              }
            }
            for (z = [], g = i; g = g.parentNode; )
              g.nodeType === 1 && z.push({
                element: g,
                left: g.scrollLeft,
                top: g.scrollTop
              });
            for (typeof i.focus == "function" && i.focus(), i = 0; i < z.length; i++) {
              var E = z[i];
              E.element.scrollLeft = E.left, E.element.scrollTop = E.top;
            }
          }
          oa = !!ao, no = ao = null;
        } finally {
          ol = n, L.p = a, R.T = e;
        }
      }
      l.current = t, _l = 2;
    }
  }
  function Kc() {
    if (_l === 2) {
      _l = 0;
      var l = Yt, t = ge, u = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || u) {
        u = R.T, R.T = null;
        var e = L.p;
        L.p = 2;
        var a = ol;
        ol |= 4;
        try {
          ps(l, t.alternate, t);
        } finally {
          ol = a, L.p = e, R.T = u;
        }
      }
      _l = 3;
    }
  }
  function Jc() {
    if (_l === 4 || _l === 3) {
      _l = 0;
      var l = We;
      We = null, Nv();
      var t = Yt, u = ge, e = It, a = Ks, n = (e & 335544064) === e ? 10262 : 10256;
      if ((u.subtreeFlags & n) !== 0 || (u.flags & n) !== 0 ? _l = 5 : (_l = 0, ge = Yt = null, ed(t, t.pendingLanes)), n = t.pendingLanes, n === 0 && (xu = null), ti(e), u = u.stateNode, ct && typeof ct.onCommitFiberRoot == "function")
        try {
          ct.onCommitFiberRoot(
            da,
            u,
            void 0,
            (u.current.flags & 128) === 128
          );
        } catch {
        }
      if (a !== null) {
        u = R.T, n = L.p, L.p = 2, R.T = null;
        try {
          for (var f = t.onRecoverableError, i = 0; i < a.length; i++) {
            var c = a[i];
            f(c.value, {
              componentStack: c.stack
            });
          }
        } finally {
          R.T = u, L.p = n;
        }
      }
      if (a = Ie, f = ke, ke = null, a !== null && (Ie = null, f === null && (f = []), l !== null))
        for (c = 0; c < a.length; c++)
          u = (0, a[c])(
            f
          ), u !== void 0 && l.finished.finally(u);
      (It & 3) !== 0 && Af(), kt(t), n = t.pendingLanes, (e & 261930) !== 0 && (n & 42) !== 0 ? t === zf ? wa++ : (wa = 0, zf = t) : (wa = 0, zf = null), $a(0);
    }
  }
  function ed(l, t) {
    (l.pooledCacheLanes &= t) === 0 && (t = l.pooledCache, t != null && (l.pooledCache = null, Ca(t)));
  }
  function Af() {
    return We !== null && (We.skipTransition(), We = null), Lc(), Kc(), Jc(), wc();
  }
  function wc() {
    if (_l !== 5) return !1;
    var l = Yt, t = Xc;
    Xc = 0;
    var u = ti(It), e = R.T, a = L.p;
    try {
      L.p = 32 > u ? 32 : u, R.T = null, u = Qc, Qc = null;
      var n = Yt, f = It;
      if (_l = 0, ge = Yt = null, It = 0, (ol & 6) !== 0) throw Error(o(331));
      var i = ol;
      if (ol |= 4, Zs(n.current), Gs(
        n,
        n.current,
        f,
        u
      ), ol = i, $a(0, !1), ct && typeof ct.onPostCommitFiberRoot == "function")
        try {
          ct.onPostCommitFiberRoot(da, n);
        } catch {
        }
      return !0;
    } finally {
      L.p = a, R.T = e, ed(l, t);
    }
  }
  function ad(l, t, u) {
    t = _t(u, t), t = rc(l.stateNode, t, 2), l = pu(l, t, 2), l !== null && (ya(l, 2), kt(l));
  }
  function vl(l, t, u) {
    if (l.tag === 3)
      ad(l, l, u);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          ad(
            t,
            l,
            u
          );
          break;
        } else if (t.tag === 1) {
          var e = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof e.componentDidCatch == "function" && (xu === null || !xu.has(e))) {
            l = _t(u, l), u = ls(2), e = pu(t, u, 2), e !== null && (ts(
              u,
              e,
              t,
              l
            ), ya(e, 2), kt(e));
            break;
          }
        }
        t = t.return;
      }
  }
  function $c(l, t, u) {
    var e = l.pingCache;
    if (e === null) {
      e = l.pingCache = new em();
      var a = /* @__PURE__ */ new Set();
      e.set(t, a);
    } else
      a = e.get(t), a === void 0 && (a = /* @__PURE__ */ new Set(), e.set(t, a));
    a.has(u) || (xc = !0, a.add(u), l = sm.bind(null, l, t, u), t.then(l, l));
  }
  function sm(l, t, u) {
    var e = l.pingCache;
    e !== null && e.delete(t), l.pingedLanes |= l.suspendedLanes & u, l.warmLanes &= ~u, gl === l && (P & u) === u && ((Nl === 4 || Nl === 3 && (P & 62914560) === P && 300 > it() - Tf) && (ol & 2) === 0 ? la(l, 0) : Sf |= u, Fe === P && (Fe = 0)), kt(l);
  }
  function nd(l, t) {
    t === 0 && (t = Lo()), l = te(l, t), l !== null && (ya(l, t), kt(l));
  }
  function dm(l) {
    var t = l.memoizedState, u = 0;
    t !== null && (u = t.retryLane), nd(l, u);
  }
  function vm(l, t) {
    var u = 0;
    switch (l.tag) {
      case 31:
      case 13:
        var e = l.stateNode, a = l.memoizedState;
        a !== null && (u = a.retryLane);
        break;
      case 19:
        e = l.stateNode;
        break;
      case 22:
        e = l.stateNode._retryCache;
        break;
      default:
        throw Error(o(314));
    }
    e !== null && e.delete(t), nd(l, u);
  }
  function ym(l, t) {
    return If(l, t);
  }
  var ua = null, ea = null, Fc = !1, Mf = !1, Wc = !1, Xu = 0;
  function kt(l) {
    l !== ea && l.next === null && (ea === null ? ua = ea = l : ea = ea.next = l), Mf = !0, Fc || (Fc = !0, hm());
  }
  function $a(l, t) {
    if (!Wc && Mf) {
      Wc = !0;
      do
        for (var u = !1, e = ua; e !== null; ) {
          if (l !== 0) {
            var a = e.pendingLanes;
            if (a === 0) var n = 0;
            else {
              var f = e.suspendedLanes, i = e.pingedLanes;
              n = (1 << 31 - ot(42 | l) + 1) - 1, n &= a & ~(f & ~i), n = n & 201326741 ? n & 201326741 | 1 : n ? n | 2 : 0;
            }
            n !== 0 && (u = !0, od(e, n));
          } else
            n = P, n = gn(
              e,
              e === gl ? n : 0,
              e.cancelPendingCommit !== null || e.timeoutHandle !== -1
            ), (n & 3) === 0 || va(e, n) || (u = !0, od(e, n));
          e = e.next;
        }
      while (u);
      Wc = !1;
    }
  }
  function mm() {
    fd();
  }
  function fd() {
    Mf = Fc = !1;
    var l = 0;
    Xu !== 0 && Mm() && (l = Xu);
    for (var t = it(), u = null, e = ua; e !== null; ) {
      var a = e.next, n = id(e, t);
      n === 0 ? (e.next = null, u === null ? ua = a : u.next = a, a === null && (ea = u)) : (u = e, (l !== 0 || (n & 3) !== 0) && (Mf = !0)), e = a;
    }
    _l !== 0 && _l !== 5 || $a(l), Xu !== 0 && (Xu = 0);
  }
  function id(l, t) {
    for (var u = l.suspendedLanes, e = l.pingedLanes, a = l.expirationTimes, n = l.pendingLanes & -62914561; 0 < n; ) {
      var f = 31 - ot(n), i = 1 << f, c = a[f];
      c === -1 ? ((i & u) === 0 || (i & e) !== 0) && (a[f] = Hv(i, t)) : c <= t && (l.expiredLanes |= i), n &= ~i;
    }
    if (t = gl, u = P, u = gn(
      l,
      l === t ? u : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), e = l.callbackNode, u === 0 || l === t && (dl === 2 || dl === 9) || l.cancelPendingCommit !== null)
      return e !== null && e !== null && kf(e), l.callbackNode = null, l.callbackPriority = 0;
    if ((u & 3) === 0 || va(l, u)) {
      if (t = u & -u, t === l.callbackPriority) return t;
      switch (e !== null && kf(e), ti(u)) {
        case 2:
        case 8:
          u = Qo;
          break;
        case 32:
          u = vn;
          break;
        case 268435456:
          u = Zo;
          break;
        default:
          u = vn;
      }
      return e = cd.bind(null, l), u = If(u, e), l.callbackPriority = t, l.callbackNode = u, t;
    }
    return e !== null && e !== null && kf(e), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function cd(l, t) {
    if (_l !== 0 && _l !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var u = l.callbackNode;
    if (Af() && l.callbackNode !== u)
      return null;
    var e = P;
    return e = gn(
      l,
      l === gl ? e : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), e === 0 ? null : (ws(l, e, t), id(l, it()), l.callbackNode != null && l.callbackNode === u ? cd.bind(null, l) : null);
  }
  function od(l, t) {
    if (Af()) return null;
    ws(l, t, !0);
  }
  function hm() {
    Dm(function() {
      (ol & 6) !== 0 ? If(
        Xo,
        mm
      ) : fd();
    });
  }
  function Ic() {
    if (Xu === 0) {
      var l = ie;
      l === 0 && (l = yn, yn <<= 1, (yn & 261888) === 0 && (yn = 256)), Xu = l;
    }
    return Xu;
  }
  function rd(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : zn(l);
  }
  function gm(l, t, u, e, a) {
    if (t === "submit" && u && u.stateNode === a) {
      var n = rd(
        (a[Pl] || null).action
      ), f = e.submitter;
      f && (t = (t = f[Pl] || null) ? rd(t.formAction) : f.getAttribute("formAction"), t !== null && (n = t, f = null));
      var i = new An(
        "action",
        "action",
        null,
        e,
        a
      );
      l.push({
        event: i,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (e.defaultPrevented) {
                if (Xu !== 0) {
                  var c = new FormData(a, f);
                  nc(
                    u,
                    {
                      pending: !0,
                      data: c,
                      method: a.method,
                      action: n
                    },
                    null,
                    c
                  );
                }
              } else
                typeof n == "function" && (i.preventDefault(), c = new FormData(a, f), nc(
                  u,
                  {
                    pending: !0,
                    data: c,
                    method: a.method,
                    action: n
                  },
                  n,
                  c
                ));
            },
            currentTarget: a
          }
        ]
      });
    }
  }
  for (var kc = 0; kc < _i.length; kc++) {
    var Pc = _i[kc], Sm = Pc.toLowerCase(), Tm = Pc[0].toUpperCase() + Pc.slice(1);
    Ut(
      Sm,
      "on" + Tm
    );
  }
  Ut(jr, "onAnimationEnd"), Ut(qr, "onAnimationIteration"), Ut(xr, "onAnimationStart"), Ut("dblclick", "onDoubleClick"), Ut("focusin", "onFocus"), Ut("focusout", "onBlur"), Ut(Cy, "onTransitionRun"), Ut(Dy, "onTransitionStart"), Ut(py, "onTransitionCancel"), Ut(Gr, "onTransitionEnd"), Ne("onMouseEnter", ["mouseout", "mouseover"]), Ne("onMouseLeave", ["mouseout", "mouseover"]), Ne("onPointerEnter", ["pointerout", "pointerover"]), Ne("onPointerLeave", ["pointerout", "pointerover"]), ku(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), ku(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), ku("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), ku(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), ku(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), ku(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Fa = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), bm = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Fa)
  );
  function sd(l, t) {
    t = (t & 4) !== 0;
    for (var u = 0; u < l.length; u++) {
      var e = l[u], a = e.event;
      e = e.listeners;
      l: {
        var n = void 0;
        if (t)
          for (var f = e.length - 1; 0 <= f; f--) {
            var i = e[f], c = i.instance, m = i.currentTarget;
            if (i = i.listener, c !== n && a.isPropagationStopped())
              break l;
            n = i, a.currentTarget = m;
            try {
              n(a);
            } catch (S) {
              Dn(S);
            }
            a.currentTarget = null, n = c;
          }
        else
          for (f = 0; f < e.length; f++) {
            if (i = e[f], c = i.instance, m = i.currentTarget, i = i.listener, c !== n && a.isPropagationStopped())
              break l;
            n = i, a.currentTarget = m;
            try {
              n(a);
            } catch (S) {
              Dn(S);
            }
            a.currentTarget = null, n = c;
          }
      }
    }
  }
  function k(l, t) {
    var u = t[Wo];
    u === void 0 && (u = t[Wo] = /* @__PURE__ */ new Set());
    var e = l + "__bubble";
    u.has(e) || (dd(t, l, 2, !1), u.add(e));
  }
  function lo(l, t, u) {
    var e = 0;
    t && (e |= 4), dd(
      u,
      l,
      e,
      t
    );
  }
  var Cf = "_reactListening" + Math.random().toString(36).slice(2);
  function to(l) {
    if (!l[Cf]) {
      l[Cf] = !0, Po.forEach(function(u) {
        u !== "selectionchange" && (bm.has(u) || lo(u, !1, l), lo(u, !0, l));
      });
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[Cf] || (t[Cf] = !0, lo("selectionchange", !1, t));
    }
  }
  function dd(l, t, u, e) {
    switch (tv(t)) {
      case 2:
        var a = d1;
        break;
      case 8:
        a = v1;
        break;
      default:
        a = zo;
    }
    u = a.bind(
      null,
      t,
      u,
      l
    ), a = void 0, !oi || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (a = !0), e ? a !== void 0 ? l.addEventListener(t, u, {
      capture: !0,
      passive: a
    }) : l.addEventListener(t, u, !0) : a !== void 0 ? l.addEventListener(t, u, {
      passive: a
    }) : l.addEventListener(t, u, !1);
  }
  function uo(l, t, u, e, a) {
    var n = e;
    if ((t & 1) === 0 && (t & 2) === 0 && e !== null)
      l: for (; ; ) {
        if (e === null) return;
        var f = e.tag;
        if (f === 3 || f === 4) {
          var i = e.stateNode.containerInfo;
          if (i === a) break;
          if (f === 4)
            for (f = e.return; f !== null; ) {
              var c = f.tag;
              if ((c === 3 || c === 4) && f.stateNode.containerInfo === a)
                return;
              f = f.return;
            }
          for (; i !== null; ) {
            if (f = Iu(i), f === null) return;
            if (c = f.tag, c === 5 || c === 6 || c === 26 || c === 27) {
              e = n = f;
              continue l;
            }
            i = i.parentNode;
          }
        }
        e = e.return;
      }
    dr(function() {
      var m = n, S = ii(u), z = [];
      l: {
        var v = Xr.get(l);
        if (v !== void 0) {
          var g = An, A = l;
          switch (l) {
            case "keypress":
              if (On(u) === 0) break l;
            case "keydown":
            case "keyup":
              g = ay;
              break;
            case "focusin":
              A = "focus", g = vi;
              break;
            case "focusout":
              A = "blur", g = vi;
              break;
            case "beforeblur":
            case "afterblur":
              g = vi;
              break;
            case "click":
              if (u.button === 2) break l;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              g = mr;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              g = Jv;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              g = oy;
              break;
            case jr:
            case qr:
            case xr:
              g = Fv;
              break;
            case Gr:
              g = sy;
              break;
            case "scroll":
            case "scrollend":
              g = Lv;
              break;
            case "wheel":
              g = vy;
              break;
            case "copy":
            case "cut":
            case "paste":
              g = Iv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              g = gr;
              break;
            case "submit":
              g = iy;
              break;
            case "toggle":
            case "beforetoggle":
              g = my;
          }
          var p = (t & 4) !== 0, w = !p && (l === "scroll" || l === "scrollend"), y = p ? v !== null ? v + "Capture" : null : v;
          p = [];
          for (var r = m, h; r !== null; ) {
            var E = r;
            if (h = E.stateNode, E = E.tag, E !== 5 && E !== 26 && E !== 27 || h === null || y === null || (E = ga(r, y), E != null && p.push(
              Wa(r, E, h)
            )), w) break;
            r = r.return;
          }
          0 < p.length && (v = new g(
            v,
            A,
            null,
            u,
            S
          ), z.push({ event: v, listeners: p }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (g = l === "mouseover" || l === "pointerover", v = l === "mouseout" || l === "pointerout", g && u !== fi && (A = u.relatedTarget || u.fromElement) && (Iu(A) || A[ze]))
            break l;
          (v || g) && (A = S.window === S ? S : (g = S.ownerDocument) ? g.defaultView || g.parentWindow : window, v ? (g = u.relatedTarget || u.toElement, v = m, g = g ? Iu(g) : null, g !== null && (w = M(g), p = g.tag, g !== w || p !== 5 && p !== 27 && p !== 6) && (g = null)) : (v = null, g = m), v !== g && (p = mr, E = "onMouseLeave", y = "onMouseEnter", r = "mouse", (l === "pointerout" || l === "pointerover") && (p = gr, E = "onPointerLeave", y = "onPointerEnter", r = "pointer"), w = v == null ? A : ha(v), h = g == null ? A : ha(g), A = new p(
            E,
            r + "leave",
            v,
            u,
            S
          ), A.target = w, A.relatedTarget = h, E = null, Iu(S) === m && (p = new p(
            y,
            r + "enter",
            g,
            u,
            S
          ), p.target = h, p.relatedTarget = w, E = p), w = E, p = v && g ? nt(
            v,
            g,
            Em
          ) : null, v !== null && vd(
            z,
            A,
            v,
            p,
            !1
          ), g !== null && w !== null && vd(
            z,
            w,
            g,
            p,
            !0
          )));
        }
        l: {
          if (v = m ? ha(m) : window, g = v.nodeName && v.nodeName.toLowerCase(), g === "select" || g === "input" && v.type === "file")
            var D = Nr;
          else if (_r(v))
            if (Ar)
              D = Ny;
            else {
              D = _y;
              var ll = zy;
            }
          else
            g = v.nodeName, !g || g.toLowerCase() !== "input" || v.type !== "checkbox" && v.type !== "radio" ? m && ni(m.elementType) && (D = Nr) : D = Oy;
          if (D && (D = D(l, m))) {
            Or(
              z,
              D,
              u,
              S
            );
            break l;
          }
          ll && ll(l, v, m);
        }
        switch (ll = m ? ha(m) : window, l) {
          case "focusin":
            (_r(ll) || ll.contentEditable === "true") && (Ue = ll, bi = m, Na = null);
            break;
          case "focusout":
            Na = bi = Ue = null;
            break;
          case "mousedown":
            Ei = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Ei = !1, Br(z, u, S);
            break;
          case "selectionchange":
            if (My) break;
          case "keydown":
          case "keyup":
            Br(z, u, S);
        }
        var B;
        if (mi)
          l: {
            switch (l) {
              case "compositionstart":
                var G = "onCompositionStart";
                break l;
              case "compositionend":
                G = "onCompositionEnd";
                break l;
              case "compositionupdate":
                G = "onCompositionUpdate";
                break l;
            }
            G = void 0;
          }
        else
          pe ? Er(l, u) && (G = "onCompositionEnd") : l === "keydown" && u.keyCode === 229 && (G = "onCompositionStart");
        G && (Sr && u.locale !== "ko" && (pe || G !== "onCompositionStart" ? G === "onCompositionEnd" && pe && (B = vr()) : (Eu = S, ri = "value" in Eu ? Eu.value : Eu.textContent, pe = !0)), ll = Df(m, G), 0 < ll.length && (G = new hr(
          G,
          l,
          null,
          u,
          S
        ), z.push({ event: G, listeners: ll }), B ? G.data = B : (B = zr(u), B !== null && (G.data = B)))), (B = gy ? Sy(l, u) : Ty(l, u)) && (G = Df(m, "onBeforeInput"), 0 < G.length && (ll = new hr(
          "onBeforeInput",
          "beforeinput",
          null,
          u,
          S
        ), z.push({
          event: ll,
          listeners: G
        }), ll.data = B)), gm(
          z,
          l,
          m,
          u,
          S
        );
      }
      sd(z, t);
    });
  }
  function Wa(l, t, u) {
    return {
      instance: l,
      listener: t,
      currentTarget: u
    };
  }
  function Df(l, t) {
    for (var u = t + "Capture", e = []; l !== null; ) {
      var a = l, n = a.stateNode;
      if (a = a.tag, a !== 5 && a !== 26 && a !== 27 || n === null || (a = ga(l, u), a != null && e.unshift(
        Wa(l, a, n)
      ), a = ga(l, t), a != null && e.push(
        Wa(l, a, n)
      )), l.tag === 3) return e;
      l = l.return;
    }
    return [];
  }
  function Em(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function vd(l, t, u, e, a) {
    for (var n = t._reactName, f = []; u !== null && u !== e; ) {
      var i = u, c = i.alternate, m = i.stateNode;
      if (i = i.tag, c !== null && c === e) break;
      i !== 5 && i !== 26 && i !== 27 || m === null || (c = m, a ? (m = ga(u, n), m != null && f.unshift(
        Wa(u, m, c)
      )) : a || (m = ga(u, n), m != null && f.push(
        Wa(u, m, c)
      ))), u = u.return;
    }
    f.length !== 0 && l.push({ event: t, listeners: f });
  }
  var zm = /\r\n?/g, _m = /\u0000|\uFFFD/g;
  function yd(l) {
    return (typeof l == "string" ? l : "" + l).replace(zm, `
`).replace(_m, "");
  }
  function md(l, t) {
    return t = yd(t), yd(l) === t;
  }
  function yl(l, t, u, e, a, n) {
    switch (u) {
      case "children":
        if (typeof e == "string")
          t === "body" || t === "textarea" && e === "" || Me(l, e);
        else if (typeof e == "number" || typeof e == "bigint")
          t !== "body" && Me(l, "" + e);
        else return;
        break;
      case "className":
        En(l, "class", e);
        break;
      case "tabIndex":
        En(l, "tabindex", e);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        En(l, u, e);
        break;
      case "style":
        rr(l, e, n);
        return;
      case "data":
        if (t !== "object") {
          En(l, "data", e);
          break;
        }
      case "src":
      case "href":
        if (e === "" && (t !== "a" || u !== "href")) {
          l.removeAttribute(u);
          break;
        }
        if (e == null || typeof e == "function" || typeof e == "symbol" || typeof e == "boolean") {
          l.removeAttribute(u);
          break;
        }
        e = zn(e), l.setAttribute(u, e);
        break;
      case "action":
      case "formAction":
        if (typeof e == "function") {
          l.setAttribute(
            u,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof n == "function" && (u === "formAction" ? (t !== "input" && yl(l, t, "name", a.name, a, null), yl(
            l,
            t,
            "formEncType",
            a.formEncType,
            a,
            null
          ), yl(
            l,
            t,
            "formMethod",
            a.formMethod,
            a,
            null
          ), yl(
            l,
            t,
            "formTarget",
            a.formTarget,
            a,
            null
          )) : (yl(l, t, "encType", a.encType, a, null), yl(l, t, "method", a.method, a, null), yl(l, t, "target", a.target, a, null)));
        if (e == null || typeof e == "symbol" || typeof e == "boolean") {
          l.removeAttribute(u);
          break;
        }
        e = zn(e), l.setAttribute(u, e);
        break;
      case "onClick":
        e != null && (l.onclick = Zt);
        return;
      case "onScroll":
        e != null && k("scroll", l);
        return;
      case "onScrollEnd":
        e != null && k("scrollend", l);
        return;
      case "dangerouslySetInnerHTML":
        if (e != null) {
          if (typeof e != "object" || !("__html" in e))
            throw Error(o(61));
          if (u = e.__html, u != null) {
            if (a.children != null) throw Error(o(60));
            n?.__html !== u && (l.innerHTML = u);
          }
        }
        break;
      case "multiple":
        l.multiple = e && typeof e != "function" && typeof e != "symbol";
        break;
      case "muted":
        l.muted = e && typeof e != "function" && typeof e != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (e == null || typeof e == "function" || typeof e == "boolean" || typeof e == "symbol") {
          l.removeAttribute("xlink:href");
          break;
        }
        u = zn(e), l.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          u
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        e != null && typeof e != "function" && typeof e != "symbol" ? l.setAttribute(u, e) : l.removeAttribute(u);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "credentialless":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        e && typeof e != "function" && typeof e != "symbol" ? l.setAttribute(u, "") : l.removeAttribute(u);
        break;
      case "capture":
      case "download":
        e === !0 ? l.setAttribute(u, "") : e !== !1 && e != null && typeof e != "function" && typeof e != "symbol" ? l.setAttribute(u, e) : l.removeAttribute(u);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        e != null && typeof e != "function" && typeof e != "symbol" && !isNaN(e) && 1 <= e ? l.setAttribute(u, e) : l.removeAttribute(u);
        break;
      case "rowSpan":
      case "start":
        e == null || typeof e == "function" || typeof e == "symbol" || isNaN(e) ? l.removeAttribute(u) : l.setAttribute(u, e);
        break;
      case "popover":
        k("beforetoggle", l), k("toggle", l), bn(l, "popover", e);
        break;
      case "xlinkActuate":
        eu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          e
        );
        break;
      case "xlinkArcrole":
        eu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          e
        );
        break;
      case "xlinkRole":
        eu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          e
        );
        break;
      case "xlinkShow":
        eu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          e
        );
        break;
      case "xlinkTitle":
        eu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          e
        );
        break;
      case "xlinkType":
        eu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          e
        );
        break;
      case "xmlBase":
        eu(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          e
        );
        break;
      case "xmlLang":
        eu(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          e
        );
        break;
      case "xmlSpace":
        eu(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          e
        );
        break;
      case "is":
        bn(l, "is", e);
        break;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!(2 < u.length) || u[0] !== "o" && u[0] !== "O" || u[1] !== "n" && u[1] !== "N")
          u = Zv.get(u) || u, bn(l, u, e);
        else return;
    }
    fl = !0;
  }
  function eo(l, t, u, e, a, n) {
    switch (u) {
      case "style":
        rr(l, e, n);
        return;
      case "dangerouslySetInnerHTML":
        if (e != null) {
          if (typeof e != "object" || !("__html" in e))
            throw Error(o(61));
          if (u = e.__html, u != null) {
            if (a.children != null) throw Error(o(60));
            n?.__html !== u && (l.innerHTML = u);
          }
        }
        break;
      case "children":
        if (typeof e == "string") Me(l, e);
        else if (typeof e == "number" || typeof e == "bigint")
          Me(l, "" + e);
        else return;
        break;
      case "onScroll":
        e != null && k("scroll", l);
        return;
      case "onScrollEnd":
        e != null && k("scrollend", l);
        return;
      case "onClick":
        e != null && (l.onclick = Zt);
        return;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        return;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!lr.hasOwnProperty(u))
          l: {
            if (u[0] === "o" && u[1] === "n" && (a = u.endsWith("Capture"), n = u.slice(2, a ? u.length - 7 : void 0), t = l[Pl] || null, t = t != null ? t[u] : null, typeof t == "function" && l.removeEventListener(n, t, a), typeof e == "function")) {
              typeof t != "function" && t !== null && (u in l ? l[u] = null : l.hasAttribute(u) && l.removeAttribute(u)), l.addEventListener(n, e, a);
              break l;
            }
            fl = !0, u in l ? l[u] = e : e === !0 ? l.setAttribute(u, "") : bn(l, u, e);
          }
        return;
    }
    fl = !0;
  }
  function Vl(l, t, u) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        k("error", l), k("load", l);
        var e = !1, a = !1, n;
        for (n in u)
          if (u.hasOwnProperty(n)) {
            var f = u[n];
            if (f != null)
              switch (n) {
                case "src":
                  e = !0;
                  break;
                case "srcSet":
                  a = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(o(137, t));
                default:
                  yl(l, t, n, f, u, null);
              }
          }
        a && yl(l, t, "srcSet", u.srcSet, u, null), e && yl(l, t, "src", u.src, u, null);
        return;
      case "input":
        k("invalid", l);
        var i = n = f = a = null, c = null, m = null;
        for (e in u)
          if (u.hasOwnProperty(e)) {
            var S = u[e];
            if (S != null)
              switch (e) {
                case "name":
                  a = S;
                  break;
                case "type":
                  f = S;
                  break;
                case "checked":
                  c = S;
                  break;
                case "defaultChecked":
                  m = S;
                  break;
                case "value":
                  n = S;
                  break;
                case "defaultValue":
                  i = S;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (S != null)
                    throw Error(o(137, t));
                  break;
                default:
                  yl(l, t, e, S, u, null);
              }
          }
        fr(
          l,
          n,
          i,
          c,
          m,
          f,
          a,
          !1
        );
        return;
      case "select":
        k("invalid", l), e = f = n = null;
        for (a in u)
          if (u.hasOwnProperty(a) && (i = u[a], i != null))
            switch (a) {
              case "value":
                n = i;
                break;
              case "defaultValue":
                f = i;
                break;
              case "multiple":
                e = i;
              default:
                yl(l, t, a, i, u, null);
            }
        t = n, u = f, l.multiple = !!e, t != null ? Ae(l, !!e, t, !1) : u != null && Ae(l, !!e, u, !0);
        return;
      case "textarea":
        k("invalid", l), n = a = e = null;
        for (f in u)
          if (u.hasOwnProperty(f) && (i = u[f], i != null))
            switch (f) {
              case "value":
                e = i;
                break;
              case "defaultValue":
                a = i;
                break;
              case "children":
                n = i;
                break;
              case "dangerouslySetInnerHTML":
                if (i != null) throw Error(o(91));
                break;
              default:
                yl(l, t, f, i, u, null);
            }
        cr(l, e, a, n);
        return;
      case "option":
        for (c in u)
          u.hasOwnProperty(c) && (e = u[c], e != null) && (c === "selected" ? l.selected = e && typeof e != "function" && typeof e != "symbol" : yl(l, t, c, e, u, null));
        return;
      case "dialog":
        k("beforetoggle", l), k("toggle", l), k("cancel", l), k("close", l);
        break;
      case "iframe":
      case "object":
        k("load", l);
        break;
      case "video":
      case "audio":
        for (e = 0; e < Fa.length; e++)
          k(Fa[e], l);
        break;
      case "image":
        k("error", l), k("load", l);
        break;
      case "details":
        k("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        k("error", l), k("load", l);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (m in u)
          if (u.hasOwnProperty(m) && (e = u[m], e != null))
            switch (m) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(o(137, t));
              default:
                yl(l, t, m, e, u, null);
            }
        return;
      default:
        if (ni(t)) {
          for (S in u)
            u.hasOwnProperty(S) && (e = u[S], e !== void 0 && eo(
              l,
              t,
              S,
              e,
              u,
              void 0
            ));
          return;
        }
    }
    for (i in u)
      u.hasOwnProperty(i) && (e = u[i], e != null && yl(l, t, i, e, u, null));
  }
  var Om = {};
  function Nm(l, t, u, e) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var a = null, n = null, f = null, i = null, c = null, m = null, S = null;
        for (g in u) {
          var z = u[g];
          if (u.hasOwnProperty(g) && z != null)
            switch (g) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                c = z;
              default:
                e.hasOwnProperty(g) || yl(l, t, g, null, e, z);
            }
        }
        for (var v in e) {
          var g = e[v];
          if (z = u[v], e.hasOwnProperty(v) && (g != null || z != null))
            switch (v) {
              case "type":
                g !== z && (fl = !0), n = g;
                break;
              case "name":
                g !== z && (fl = !0), a = g;
                break;
              case "checked":
                g !== z && (fl = !0), m = g;
                break;
              case "defaultChecked":
                g !== z && (fl = !0), S = g;
                break;
              case "value":
                g !== z && (fl = !0), f = g;
                break;
              case "defaultValue":
                g !== z && (fl = !0), i = g;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (g != null)
                  throw Error(o(137, t));
                break;
              default:
                g !== z && yl(
                  l,
                  t,
                  v,
                  g,
                  e,
                  z
                );
            }
        }
        ei(
          l,
          f,
          i,
          c,
          m,
          S,
          n,
          a
        );
        return;
      case "select":
        g = f = i = v = null;
        for (n in u)
          if (c = u[n], u.hasOwnProperty(n) && c != null)
            switch (n) {
              case "value":
                break;
              case "multiple":
                g = c;
              default:
                e.hasOwnProperty(n) || yl(
                  l,
                  t,
                  n,
                  null,
                  e,
                  c
                );
            }
        for (a in e)
          if (n = e[a], c = u[a], e.hasOwnProperty(a) && (n != null || c != null))
            switch (a) {
              case "value":
                n !== c && (fl = !0), v = n;
                break;
              case "defaultValue":
                n !== c && (fl = !0), i = n;
                break;
              case "multiple":
                n !== c && (fl = !0), f = n;
              default:
                n !== c && yl(
                  l,
                  t,
                  a,
                  n,
                  e,
                  c
                );
            }
        t = i, u = f, e = g, v != null ? Ae(l, !!u, v, !1) : !!e != !!u && (t != null ? Ae(l, !!u, t, !0) : Ae(l, !!u, u ? [] : "", !1));
        return;
      case "textarea":
        g = v = null;
        for (i in u)
          if (a = u[i], u.hasOwnProperty(i) && a != null && !e.hasOwnProperty(i))
            switch (i) {
              case "value":
                break;
              case "children":
                break;
              default:
                yl(l, t, i, null, e, a);
            }
        for (f in e)
          if (a = e[f], n = u[f], e.hasOwnProperty(f) && (a != null || n != null))
            switch (f) {
              case "value":
                a !== n && (fl = !0), v = a;
                break;
              case "defaultValue":
                a !== n && (fl = !0), g = a;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (a != null) throw Error(o(91));
                break;
              default:
                a !== n && yl(l, t, f, a, e, n);
            }
        ir(l, v, g);
        return;
      case "option":
        for (var A in u)
          v = u[A], u.hasOwnProperty(A) && v != null && !e.hasOwnProperty(A) && (A === "selected" ? l.selected = !1 : yl(
            l,
            t,
            A,
            null,
            e,
            v
          ));
        for (c in e)
          v = e[c], g = u[c], e.hasOwnProperty(c) && v !== g && (v != null || g != null) && (c === "selected" ? (v !== g && (fl = !0), l.selected = v && typeof v != "function" && typeof v != "symbol") : yl(
            l,
            t,
            c,
            v,
            e,
            g
          ));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var p in u)
          v = u[p], u.hasOwnProperty(p) && v != null && !e.hasOwnProperty(p) && yl(l, t, p, null, e, v);
        for (m in e)
          if (v = e[m], g = u[m], e.hasOwnProperty(m) && v !== g && (v != null || g != null))
            switch (m) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (v != null)
                  throw Error(o(137, t));
                break;
              default:
                yl(
                  l,
                  t,
                  m,
                  v,
                  e,
                  g
                );
            }
        return;
      default:
        if (ni(t)) {
          for (var w in u)
            v = u[w], u.hasOwnProperty(w) && v !== void 0 && !e.hasOwnProperty(w) && eo(
              l,
              t,
              w,
              void 0,
              e,
              v
            );
          for (S in e)
            v = e[S], g = u[S], !e.hasOwnProperty(S) || v === g || v === void 0 && g === void 0 || eo(
              l,
              t,
              S,
              v,
              e,
              g
            );
          return;
        }
    }
    for (var y in u)
      v = u[y], u.hasOwnProperty(y) && v != null && !e.hasOwnProperty(y) && yl(l, t, y, null, e, v);
    for (z in e)
      v = e[z], g = u[z], !e.hasOwnProperty(z) || v === g || v == null && g == null || yl(l, t, z, v, e, g);
  }
  function hd(l) {
    switch (l) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function Am() {
    if (typeof performance.getEntriesByType == "function") {
      for (var l = 0, t = 0, u = performance.getEntriesByType("resource"), e = 0; e < u.length; e++) {
        var a = u[e], n = a.transferSize, f = a.initiatorType, i = a.duration;
        if (n && i && hd(f)) {
          for (f = 0, i = a.responseEnd, e += 1; e < u.length; e++) {
            var c = u[e], m = c.startTime;
            if (m > i) break;
            var S = c.transferSize, z = c.initiatorType;
            S && hd(z) && (c = c.responseEnd, f += S * (c < i ? 1 : (i - m) / (c - m)));
          }
          if (--e, t += 8 * (n + f) / (a.duration / 1e3), l++, 10 < l) break;
        }
      }
      if (0 < l) return t / l / 1e6;
    }
    return navigator.connection && (l = navigator.connection.downlink, typeof l == "number") ? l : 5;
  }
  var ao = null, no = null;
  function Ia(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function gd(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Sd(l, t) {
    if (l === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && t === "foreignObject" ? 0 : l;
  }
  function Td(l, t, u, e) {
    return u = Ia(
      u
    ).createElement(l), u[xl] = e, u[Pl] = t, Vl(u, l, t), Hl(u), u;
  }
  function fo(l, t) {
    return l === "textarea" || l === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var io = null;
  function Mm() {
    var l = window.event;
    return l && l.type === "popstate" ? l === io ? !1 : (io = l, !0) : (io = null, !1);
  }
  var co = typeof setTimeout == "function" ? setTimeout : void 0, Cm = typeof clearTimeout == "function" ? clearTimeout : void 0, bd = typeof Promise == "function" ? Promise : void 0, Ed = typeof requestAnimationFrame == "function" ? requestAnimationFrame : co, Dm = typeof queueMicrotask == "function" ? queueMicrotask : typeof bd < "u" ? function(l) {
    return bd.resolve(null).then(l).catch(pm);
  } : co;
  function pm(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function Qu(l) {
    return l === "head";
  }
  function zd(l, t) {
    var u = t, e = 0;
    do {
      var a = u.nextSibling;
      if (l.removeChild(u), a && a.nodeType === 8)
        if (u = a.data, u === "/$" || u === "/&") {
          if (e === 0) {
            l.removeChild(a), ra(t);
            return;
          }
          e--;
        } else if (u === "$" || u === "$?" || u === "$~" || u === "$!" || u === "&")
          e++;
        else if (u === "html")
          go(
            l.ownerDocument.documentElement
          );
        else if (u === "head") {
          u = l.ownerDocument.head, go(u);
          for (var n = u.firstChild; n; ) {
            var f = n.nextSibling, i = n.nodeName;
            n[ma] || i === "SCRIPT" || i === "STYLE" || i === "LINK" && n.rel.toLowerCase() === "stylesheet" || u.removeChild(n), n = f;
          }
        } else
          u === "body" && go(l.ownerDocument.body);
      u = a;
    } while (u);
    ra(t);
  }
  function _d(l, t) {
    var u = l;
    l = 0;
    do {
      var e = u.nextSibling;
      if (u.nodeType === 1 ? t ? (u._stashedDisplay = u.style.display, u.style.display = "none") : (u.style.display = u._stashedDisplay || "", u.getAttribute("style") === "" && u.removeAttribute("style")) : u.nodeType === 3 && (t ? (u._stashedText = u.nodeValue, u.nodeValue = "") : u.nodeValue = u._stashedText || ""), e && e.nodeType === 8)
        if (u = e.data, u === "/$") {
          if (l === 0) break;
          l--;
        } else
          u !== "$" && u !== "$?" && u !== "$~" && u !== "$!" || l++;
      u = e;
    } while (u);
  }
  function Od(l, t, u) {
    if (t = CSS.escape(t) !== t ? "r-" + btoa(t).replace(/=/g, "") : t, l.style.viewTransitionName = t, u != null && (l.style.viewTransitionClass = u), u = getComputedStyle(l), u.display === "inline") {
      if (t = l.getClientRects(), t.length === 1) var e = 1;
      else
        for (var a = e = 0; a < t.length; a++) {
          var n = t[a];
          0 < n.width && 0 < n.height && e++;
        }
      e === 1 && (l = l.style, l.display = t.length === 1 ? "inline-block" : "block", l.marginTop = "-" + u.paddingTop, l.marginBottom = "-" + u.paddingBottom);
    }
  }
  function Nd(l, t) {
    l = l.style, t = t.style;
    var u = t != null ? t.hasOwnProperty("viewTransitionName") ? t.viewTransitionName : t.hasOwnProperty("view-transition-name") ? t["view-transition-name"] : null : null;
    l.viewTransitionName = u == null || typeof u == "boolean" ? "" : ("" + u).trim(), u = t != null ? t.hasOwnProperty("viewTransitionClass") ? t.viewTransitionClass : t.hasOwnProperty("view-transition-class") ? t["view-transition-class"] : null : null, l.viewTransitionClass = u == null || typeof u == "boolean" ? "" : ("" + u).trim(), l.display === "inline-block" && (t == null ? l.display = l.margin = "" : (u = t.display, l.display = u == null || typeof u == "boolean" ? "" : u, u = t.margin, u != null ? l.margin = u : (u = t.hasOwnProperty("marginTop") ? t.marginTop : t["margin-top"], l.marginTop = u == null || typeof u == "boolean" ? "" : u, t = t.hasOwnProperty("marginBottom") ? t.marginBottom : t["margin-bottom"], l.marginBottom = t == null || typeof t == "boolean" ? "" : t)));
  }
  function Um(l, t, u) {
    return u = u.ownerDocument.defaultView, {
      rect: l,
      abs: t.position === "absolute" || t.position === "fixed",
      clip: t.clipPath !== "none" || t.overflow !== "visible" || t.filter !== "none" || t.mask !== "none" || t.mask !== "none" || t.borderRadius !== "0px",
      view: 0 <= l.bottom && 0 <= l.right && l.top <= u.innerHeight && l.left <= u.innerWidth
    };
  }
  function oo(l) {
    var t = l.getBoundingClientRect(), u = getComputedStyle(l);
    return Um(t, u, l);
  }
  function Rm(l) {
    return l.documentElement.clientHeight;
  }
  function Hm(l) {
    this.addEventListener("load", l), this.addEventListener("error", l);
  }
  function Bm(l, t, u, e, a, n, f, i, c) {
    var m = t.nodeType === 9 ? t : t.ownerDocument;
    try {
      var S = m.startViewTransition({
        update: function() {
          var v = m.defaultView, g = v.navigation && v.navigation.transition, A = m.fonts.status;
          e();
          var p = [];
          if (A === "loaded" && (Rm(m), m.fonts.status === "loading" && p.push(m.fonts.ready)), A = p.length, l !== null)
            for (var w = l.suspenseyImages, y = 0, r = 0; r < w.length; r++) {
              var h = w[r];
              if (!h.complete) {
                var E = h.getBoundingClientRect();
                if (0 < E.bottom && 0 < E.right && E.top < v.innerHeight && E.left < v.innerWidth) {
                  if (y += Jd(h), y > Rf) {
                    p.length = A;
                    break;
                  }
                  h = new Promise(
                    Hm.bind(h)
                  ), p.push(h);
                }
              }
            }
          if (0 < p.length)
            return v = Promise.race([
              Promise.all(p),
              new Promise(function(D) {
                return setTimeout(D, 500);
              })
            ]).then(a, a), (g ? Promise.allSettled([g.finished, v]) : v).then(n, n);
          if (a(), g)
            return g.finished.then(
              n,
              n
            );
          n();
        },
        types: u
      });
      m.__reactViewTransition = S;
      var z = [];
      return S.ready.then(
        function() {
          for (var v = m.documentElement.getAnimations({
            subtree: !0
          }), g = 0; g < v.length; g++) {
            var A = v[g], p = A.effect, w = p.pseudoElement;
            if (w != null && w.startsWith("::view-transition")) {
              z.push(A), A = p.getKeyframes();
              for (var y = w = void 0, r = !0, h = 0; h < A.length; h++) {
                var E = A[h], D = E.width;
                if (w === void 0) w = D;
                else if (w !== D) {
                  r = !1;
                  break;
                }
                if (D = E.height, y === void 0) y = D;
                else if (y !== D) {
                  r = !1;
                  break;
                }
                delete E.width, delete E.height, E.transform === "none" && delete E.transform;
              }
              r && w !== void 0 && y !== void 0 && (p.setKeyframes(A), r = getComputedStyle(
                p.target,
                p.pseudoElement
              ), r.width !== w || r.height !== y) && (r = A[0], r.width = w, r.height = y, r = A[A.length - 1], r.width = w, r.height = y, p.setKeyframes(A));
            }
          }
          f();
        },
        function(v) {
          m.__reactViewTransition === S && (m.__reactViewTransition = null);
          try {
            typeof v == "object" && v !== null && v.name === "InvalidStateError" && (v.message === "View transition was skipped because document visibility state is hidden." || v.message === "Skipping view transition because document visibility state has become hidden." || v.message === "Skipping view transition because viewport size changed." || v.message === "Transition was aborted because of invalid state") && (v = null), v !== null && c(v);
          } finally {
            e(), a(), f();
          }
        }
      ), S.finished.finally(function() {
        for (var v = 0; v < z.length; v++)
          z[v].cancel();
        m.__reactViewTransition === S && (m.__reactViewTransition = null), i();
      }), S;
    } catch {
      return e(), a(), f(), null;
    }
  }
  function Se(l, t) {
    this._scope = document.documentElement, this._selector = "::view-transition-" + l + "(" + t + ")";
  }
  Se.prototype.animate = function(l, t) {
    return t = typeof t == "number" ? { duration: t } : W({}, t), t.pseudoElement = this._selector, this._scope.animate(l, t);
  }, Se.prototype.getAnimations = function() {
    for (var l = this._scope, t = this._selector, u = l.getAnimations({ subtree: !0 }), e = [], a = 0; a < u.length; a++) {
      var n = u[a].effect;
      n !== null && n.target === l && n.pseudoElement === t && e.push(u[a]);
    }
    return e;
  }, Se.prototype.getComputedStyle = function() {
    return getComputedStyle(this._scope, this._selector);
  };
  function Ad(l) {
    return {
      name: l,
      group: new Se("group", l),
      imagePair: new Se("image-pair", l),
      old: new Se("old", l),
      new: new Se("new", l)
    };
  }
  function gt(l) {
    this._fragmentFiber = l, this._observers = this._eventListeners = null;
  }
  gt.prototype.addEventListener = function(l, t, u) {
    var e = null, a = null;
    if (!(u != null && typeof u != "boolean" && (e = u.signal || null, e !== null && e.aborted))) {
      this._eventListeners === null && (this._eventListeners = []);
      var n = this._eventListeners;
      if (Cd(n, l, t, u) === -1) {
        var f = this, i = t;
        u != null && typeof u != "boolean" && u.once === !0 && (i = function(c) {
          f.removeEventListener(
            l,
            t,
            u
          ), typeof t == "function" ? t.call(this, c) : t.handleEvent(c);
        }), e !== null && (a = f.removeEventListener.bind(
          f,
          l,
          t,
          u
        ), e.addEventListener("abort", a, { once: !0 }), a = e.removeEventListener.bind(e, "abort", a)), e = aa(u), n.push({
          type: l,
          listener: t,
          optionsOrUseCapture: u,
          attachedListener: i,
          cleanup: a
        }), b(
          this._fragmentFiber.child,
          !1,
          Ym,
          l,
          i,
          e
        );
      }
      this._eventListeners = n;
    }
  };
  function Ym(l, t, u, e) {
    return $(l).addEventListener(
      t,
      u,
      e
    ), !1;
  }
  gt.prototype.removeEventListener = function(l, t, u) {
    var e = this._eventListeners;
    if (e !== null && (t = Cd(
      e,
      l,
      t,
      u
    ), t !== -1)) {
      var a = e[t];
      u = a.attachedListener;
      var n = a.cleanup;
      a = aa(a.optionsOrUseCapture), b(
        this._fragmentFiber.child,
        !1,
        jm,
        l,
        u,
        a
      ), e.splice(t, 1), n !== null && n();
    }
  };
  function jm(l, t, u, e) {
    return $(l).removeEventListener(
      t,
      u,
      e
    ), !1;
  }
  function aa(l) {
    return l != null && typeof l != "boolean" && (l.once === !0 || l.signal instanceof AbortSignal) ? { capture: l.capture, passive: l.passive } : l;
  }
  function Md(l) {
    return l == null ? "c=0" : typeof l == "boolean" ? "c=" + (l ? "1" : "0") : "c=" + (l.capture ? "1" : "0");
  }
  function Cd(l, t, u, e) {
    if (l.length === 0) return -1;
    e = Md(e);
    for (var a = 0; a < l.length; a++) {
      var n = l[a];
      if (n.type === t && n.listener === u && Md(n.optionsOrUseCapture) === e)
        return a;
    }
    return -1;
  }
  gt.prototype.dispatchEvent = function(l) {
    var t = Y(
      this._fragmentFiber
    );
    if (t === null) return !0;
    t = $(t);
    var u = this._eventListeners;
    if (u !== null && 0 < u.length || !l.bubbles) {
      var e = t.nodeType === 9 ? t.createComment("") : document.createTextNode("");
      if (u)
        for (var a = 0; a < u.length; a++) {
          var n = u[a];
          e.addEventListener(
            n.type,
            n.attachedListener,
            aa(n.optionsOrUseCapture)
          );
        }
      if (t.appendChild(e), l = e.dispatchEvent(l), u)
        for (a = 0; a < u.length; a++)
          n = u[a], e.removeEventListener(
            n.type,
            n.attachedListener,
            aa(n.optionsOrUseCapture)
          );
      return t.removeChild(e), l;
    }
    return t.dispatchEvent(l);
  }, gt.prototype.focus = function(l) {
    b(
      this._fragmentFiber.child,
      !0,
      Dd,
      l,
      void 0,
      void 0
    );
  };
  function Dd(l, t) {
    return l.tag === 6 ? !1 : (l = $(l), $m(l, t));
  }
  gt.prototype.focusLast = function(l) {
    var t = [];
    b(
      this._fragmentFiber.child,
      !0,
      ro,
      t,
      void 0,
      void 0
    );
    for (var u = t.length - 1; 0 <= u && !Dd(t[u], l); u--) ;
  };
  function ro(l, t) {
    return t.push(l), !1;
  }
  gt.prototype.blur = function() {
    var l = Y(
      this._fragmentFiber
    );
    l !== null && (l = $(l), l = Ia(l).activeElement, l !== null && b(
      this._fragmentFiber.child,
      !1,
      qm,
      l,
      void 0,
      void 0
    ));
  };
  function qm(l, t) {
    return l.tag === 6 ? !1 : (l = $(l), l === t || l.contains(t) ? (t.blur(), !0) : !1);
  }
  gt.prototype.observeUsing = function(l) {
    this._observers === null && (this._observers = /* @__PURE__ */ new Set()), this._observers.add(l), b(
      this._fragmentFiber.child,
      !1,
      xm,
      l,
      void 0,
      void 0
    );
  };
  function xm(l, t) {
    return l.tag === 6 || (l = $(l), t.observe(l)), !1;
  }
  gt.prototype.unobserveUsing = function(l) {
    var t = this._observers;
    if (t !== null && t.has(l)) {
      t.delete(l), b(
        this._fragmentFiber.child,
        !1,
        Gm,
        l,
        void 0,
        void 0
      );
      for (var u = t = 0; u < jt.length; u++) {
        var e = jt[u];
        e.fragmentInstance === this && e.observer === l ? l.unobserve(e.instance) : jt[t++] = e;
      }
      jt.length = t;
    }
  };
  function Gm(l, t) {
    return l.tag === 6 || (l = $(l), t.unobserve(l)), !1;
  }
  var jt = [], so = !1;
  function Xm(l, t, u) {
    jt.push({
      fragmentInstance: l,
      observer: t,
      instance: u
    }), so || (so = !0, Fm(function() {
      so = !1;
      var e = jt;
      jt = [];
      for (var a = 0; a < e.length; a++) {
        var n = e[a];
        n.observer.unobserve(n.instance);
      }
    }));
  }
  gt.prototype.getClientRects = function() {
    var l = [];
    return b(
      this._fragmentFiber.child,
      !1,
      Qm,
      l,
      void 0,
      void 0
    ), l;
  };
  function Qm(l, t) {
    if (l.tag === 6) {
      l = l.stateNode;
      var u = l.ownerDocument.createRange();
      u.selectNodeContents(l), t.push.apply(t, u.getClientRects());
    } else
      l = $(l), t.push.apply(t, l.getClientRects());
    return !1;
  }
  gt.prototype.getRootNode = function(l) {
    var t = Y(
      this._fragmentFiber
    );
    return t === null ? this : $(t).getRootNode(l);
  }, gt.prototype.compareDocumentPosition = function(l) {
    var t = Y(
      this._fragmentFiber
    );
    if (t === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
    var u = [];
    b(
      this._fragmentFiber.child,
      !1,
      ro,
      u,
      void 0,
      void 0
    );
    var e = $(t);
    if (u.length === 0) {
      if (u = e, zl(this._fragmentFiber)) {
        l: {
          for (t = this._fragmentFiber.return; t !== null; ) {
            if (t.tag === 4) {
              t = t.stateNode.containerInfo;
              break l;
            }
            if (t.tag === 3 || t.tag === 5 || t.tag === 27)
              break;
            t = t.return;
          }
          t = null;
        }
        t != null && (u = t);
      }
      t = this._fragmentFiber;
      var a = e = u.compareDocumentPosition(l);
      return u === l ? a = Node.DOCUMENT_POSITION_CONTAINS : e & Node.DOCUMENT_POSITION_CONTAINED_BY && (u = Kl(t)[1], u === null ? a = Node.DOCUMENT_POSITION_PRECEDING : (l = $(u).compareDocumentPosition(
        l
      ), a = l === 0 || l & Node.DOCUMENT_POSITION_FOLLOWING ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING)), a |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
    }
    t = $(u[0]), a = $(u[u.length - 1]);
    var n = zl(this._fragmentFiber) ? t.parentElement : e;
    if (n == null)
      return Node.DOCUMENT_POSITION_DISCONNECTED;
    e = n.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY, n = n.compareDocumentPosition(a) & Node.DOCUMENT_POSITION_CONTAINED_BY;
    var f = t.compareDocumentPosition(l), i = a.compareDocumentPosition(l), c = f & Node.DOCUMENT_POSITION_CONTAINED_BY || i & Node.DOCUMENT_POSITION_CONTAINED_BY;
    return i = e && n && f & Node.DOCUMENT_POSITION_FOLLOWING && i & Node.DOCUMENT_POSITION_PRECEDING, t = e && t === l || n && a === l || c || i ? Node.DOCUMENT_POSITION_CONTAINED_BY : !e && t === l || !n && a === l ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC : f, t & Node.DOCUMENT_POSITION_DISCONNECTED || t & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC || Zm(
      t,
      this._fragmentFiber,
      u[0],
      u[u.length - 1],
      l
    ) ? t : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
  };
  function Zm(l, t, u, e, a) {
    var n = Iu(a);
    if (l & Node.DOCUMENT_POSITION_CONTAINED_BY) {
      if (u = !!n)
        l: {
          for (; n !== null; ) {
            if (n.tag === 7 && (n === t || n.alternate === t)) {
              u = !0;
              break l;
            }
            n = n.return;
          }
          u = !1;
        }
      return u;
    }
    if (l & Node.DOCUMENT_POSITION_CONTAINS) {
      if (n === null)
        return n = a.ownerDocument, a === n || a === n.documentElement || a === n.body;
      l: {
        for (n = t, t = Y(t); n !== null; ) {
          if (!(n.tag !== 5 && n.tag !== 3 && n.tag !== 27 || n !== t && n.alternate !== t)) {
            n = !0;
            break l;
          }
          n = n.return;
        }
        n = !1;
      }
      return n;
    }
    return l & Node.DOCUMENT_POSITION_PRECEDING ? ((t = !!n) && !(t = n === u) && (t = nt(
      u,
      n,
      xt
    ), t === null ? t = !1 : (b(
      t,
      !0,
      wu,
      n,
      u
    ), n = kl, kl = null, t = n !== null)), t) : l & Node.DOCUMENT_POSITION_FOLLOWING ? ((t = !!n) && !(t = n === e) && (t = nt(
      e,
      n,
      xt
    ), t === null ? t = !1 : (b(
      t,
      !0,
      qt,
      n,
      e
    ), n = kl, wl = kl = null, t = n !== null)), t) : !1;
  }
  function pd(l, t) {
    var u = l.ownerDocument.createRange();
    u.selectNodeContents(l), l = u.getBoundingClientRect(), window.scrollTo(
      window.scrollX + l.left,
      t ? window.scrollY + l.top : window.scrollY + l.bottom - window.innerHeight
    );
  }
  gt.prototype.scrollIntoView = function(l) {
    if (typeof l == "object") throw Error(o(566));
    var t = [];
    b(
      this._fragmentFiber.child,
      !1,
      ro,
      t,
      void 0,
      void 0
    );
    var u = l !== !1;
    if (t.length === 0) {
      var e = Kl(
        this._fragmentFiber
      );
      if (e = u ? e[1] || e[0] || Y(this._fragmentFiber) : e[0] || e[1], e === null) return;
      if (e.tag === 6) {
        l = $(e), pd(l, u);
        return;
      }
      if (e = $(e), e.nodeType !== 9) {
        if (e.nodeType === 11) {
          u = "host" in e ? e.host : null, u !== null && u.scrollIntoView(l);
          return;
        }
        e.scrollIntoView(l);
      }
    }
    for (e = u ? t.length - 1 : 0; e !== (u ? -1 : t.length); ) {
      var a = t[e];
      a.tag === 6 ? (a = $(a), pd(a, u)) : $(a).scrollIntoView(l), e += u ? -1 : 1;
    }
  };
  function Vm(l, t) {
    return l = $(l), Ud(l, t), !1;
  }
  function Ud(l, t) {
    l.reactFragments == null && (l.reactFragments = /* @__PURE__ */ new Set()), l.reactFragments.add(t);
  }
  function Rd(l, t) {
    var u = t._eventListeners;
    if (u !== null)
      for (var e = 0; e < u.length; e++) {
        var a = u[e];
        l.addEventListener(
          a.type,
          a.attachedListener,
          aa(a.optionsOrUseCapture)
        );
      }
    l.nodeType !== 3 && (u = t._observers, u !== null && u.forEach(function(n) {
      for (var f = 0, i = 0; i < jt.length; i++) {
        var c = jt[i];
        (c.fragmentInstance !== t || c.observer !== n || c.instance !== l) && (jt[f++] = c);
      }
      jt.length = f, n.observe(l);
    }), Ud(l, t));
  }
  function Lm(l, t) {
    var u = t._eventListeners;
    if (u !== null)
      for (var e = 0; e < u.length; e++) {
        var a = u[e];
        l.removeEventListener(
          a.type,
          a.attachedListener,
          aa(a.optionsOrUseCapture)
        );
      }
    l.nodeType !== 3 && (u = t._observers, u !== null && u.forEach(function(n) {
      typeof n.rootMargin == "string" ? Xm(
        t,
        n,
        l
      ) : n.unobserve(l);
    }), l.reactFragments != null && l.reactFragments.delete(t));
  }
  function vo(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var u = t;
      switch (t = t.nextSibling, u.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          vo(u), Tn(u);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (u.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(u);
    }
  }
  function Km(l, t, u, e) {
    for (; l.nodeType === 1; ) {
      var a = u;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!e && (l.nodeName !== "INPUT" || l.type !== "hidden"))
          break;
      } else if (e) {
        if (!l[ma])
          switch (t) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (n = l.getAttribute("rel"), n === "stylesheet" && l.hasAttribute("data-precedence"))
                break;
              if (n !== a.rel || l.getAttribute("href") !== (a.href == null || a.href === "" ? null : a.href) || l.getAttribute("crossorigin") !== (a.crossOrigin == null ? null : a.crossOrigin) || l.getAttribute("title") !== (a.title == null ? null : a.title))
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (n = l.getAttribute("src"), (n !== (a.src == null ? null : a.src) || l.getAttribute("type") !== (a.type == null ? null : a.type) || l.getAttribute("crossorigin") !== (a.crossOrigin == null ? null : a.crossOrigin)) && n && l.hasAttribute("async") && !l.hasAttribute("itemprop"))
                break;
              return l;
            default:
              return l;
          }
      } else if (t === "input" && l.type === "hidden") {
        var n = a.name == null ? null : "" + a.name;
        if (a.type === "hidden" && l.getAttribute("name") === n)
          return l;
      } else return l;
      if (l = Ct(l.nextSibling), l === null) break;
    }
    return null;
  }
  function Jm(l, t, u) {
    if (t === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !u || (l = Ct(l.nextSibling), l === null)) return null;
    return l;
  }
  function Hd(l, t) {
    for (; l.nodeType !== 8; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !t || (l = Ct(l.nextSibling), l === null)) return null;
    return l;
  }
  function yo(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function mo(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState !== "loading";
  }
  function wm(l, t) {
    var u = l.ownerDocument;
    if (l.data === "$~") l._reactRetry = t;
    else if (l.data !== "$?" || u.readyState !== "loading")
      t();
    else {
      var e = function() {
        t(), u.removeEventListener("DOMContentLoaded", e);
      };
      u.addEventListener("DOMContentLoaded", e), l._reactRetry = e;
    }
  }
  function Ct(l) {
    for (; l != null; l = l.nextSibling) {
      var t = l.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = l.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F")
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return l;
  }
  var ho = null;
  function Bd(l) {
    l = l.nextSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === "/$" || u === "/&") {
          if (t === 0)
            return Ct(l.nextSibling);
          t--;
        } else
          u !== "$" && u !== "$!" && u !== "$?" && u !== "$~" && u !== "&" || t++;
      }
      l = l.nextSibling;
    }
    return null;
  }
  function Yd(l) {
    l = l.previousSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === "$" || u === "$!" || u === "$?" || u === "$~" || u === "&") {
          if (t === 0) return l;
          t--;
        } else u !== "/$" && u !== "/&" || t++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function $m(l, t) {
    function u() {
      e = !0;
    }
    if (l.ownerDocument.activeElement === l) return !0;
    var e = !1;
    try {
      l.ownerDocument.addEventListener("focus", u, !0), (l.focus || HTMLElement.prototype.focus).call(l, t);
    } finally {
      l.ownerDocument.removeEventListener("focus", u, !0);
    }
    return e;
  }
  function Fm(l) {
    Ed(function() {
      Ed(function(t) {
        return l(t);
      });
    });
  }
  function jd(l, t, u) {
    switch (t = Ia(u), l) {
      case "html":
        if (l = t.documentElement, !l) throw Error(o(452));
        return l;
      case "head":
        if (l = t.head, !l) throw Error(o(453));
        return l;
      case "body":
        if (l = t.body, !l) throw Error(o(454));
        return l;
      default:
        throw Error(o(451));
    }
  }
  function qd(l, t, u) {
    for (var e in u) {
      var a = u[e];
      u.hasOwnProperty(e) && a != null && yl(l, t, e, null, Om, a);
    }
    u.dangerouslySetInnerHTML != null && (l.textContent = ""), l.onclick === Zt && (l.onclick = null), Tn(l);
  }
  function go(l) {
    for (var t = l.attributes; t.length; )
      l.removeAttributeNode(t[0]);
    Tn(l);
  }
  var Dt = /* @__PURE__ */ new Map(), xd = /* @__PURE__ */ new Set();
  function ka(l) {
    if (typeof l.getRootNode == "function") {
      var t = l.getRootNode();
      if (t.nodeType === 9 || t.nodeType === 11) return t;
    }
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  var hu = L.d;
  L.d = {
    f: Wm,
    r: Im,
    D: km,
    C: Pm,
    L: l1,
    m: t1,
    X: e1,
    S: u1,
    M: a1
  };
  function Wm() {
    var l = hu.f(), t = _f();
    return l || t;
  }
  function Im(l) {
    var t = _e(l);
    t !== null && t.tag === 5 && t.type === "form" ? X0(t) : hu.r(l);
  }
  var na = typeof document > "u" ? null : document;
  function Gd(l, t, u) {
    var e = na;
    if (e && typeof t == "string" && t) {
      var a = Et(t);
      a = 'link[rel="' + l + '"][href="' + a + '"]', typeof u == "string" && (a += '[crossorigin="' + u + '"]'), xd.has(a) || (xd.add(a), l = { rel: l, crossOrigin: u, href: t }, e.querySelector(a) === null && (t = e.createElement("link"), Vl(t, "link", l), Hl(t), e.head.appendChild(t)));
    }
  }
  function km(l) {
    hu.D(l), Gd("dns-prefetch", l, null);
  }
  function Pm(l, t) {
    hu.C(l, t), Gd("preconnect", l, t);
  }
  function l1(l, t, u) {
    hu.L(l, t, u);
    var e = na;
    if (e && l && t) {
      var a = 'link[rel="preload"][as="' + Et(t) + '"]';
      t === "image" && u && u.imageSrcSet ? (a += '[imagesrcset="' + Et(
        u.imageSrcSet
      ) + '"]', typeof u.imageSizes == "string" && (a += '[imagesizes="' + Et(
        u.imageSizes
      ) + '"]')) : a += '[href="' + Et(l) + '"]';
      var n = a;
      switch (t) {
        case "style":
          n = fa(l);
          break;
        case "script":
          n = ia(l);
      }
      if (!(Dt.has(n) || (l = W(
        {
          rel: "preload",
          href: t === "image" && u && u.imageSrcSet ? void 0 : l,
          as: t
        },
        u
      ), Dt.set(n, l), e.querySelector(a) !== null || t === "style" && e.querySelector(Pa(n)) || t === "script" && e.querySelector(ln(n))))) {
        var f = e.createElement("link");
        Vl(f, "link", l), t === "style" && (f[Sn] = !0, f.onload = f.onerror = function() {
          ko(f);
        }), Hl(f), e.head.appendChild(f);
      }
    }
  }
  function t1(l, t) {
    hu.m(l, t);
    var u = na;
    if (u && l) {
      var e = t && typeof t.as == "string" ? t.as : "script", a = 'link[rel="modulepreload"][as="' + Et(e) + '"][href="' + Et(l) + '"]', n = a;
      switch (e) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = ia(l);
      }
      if (!Dt.has(n) && (l = W({ rel: "modulepreload", href: l }, t), Dt.set(n, l), u.querySelector(a) === null)) {
        switch (e) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (u.querySelector(ln(n)))
              return;
        }
        e = u.createElement("link"), Vl(e, "link", l), Hl(e), u.head.appendChild(e);
      }
    }
  }
  function u1(l, t, u) {
    hu.S(l, t, u);
    var e = na;
    if (e && l) {
      var a = Oe(e).hoistableStyles, n = fa(l);
      t = t || "default";
      var f = a.get(n);
      if (!f) {
        var i = { loading: 0, preload: null };
        if (f = e.querySelector(
          Pa(n)
        ))
          i.loading = 5;
        else {
          l = W(
            { rel: "stylesheet", href: l, "data-precedence": t },
            u
          ), (u = Dt.get(n)) && So(l, u);
          var c = f = e.createElement("link");
          Hl(c), Vl(c, "link", l), c._p = new Promise(function(m, S) {
            c.onload = m, c.onerror = S;
          }), c.addEventListener("load", function() {
            i.loading |= 1;
          }), c.addEventListener("error", function() {
            i.loading |= 2;
          }), i.loading |= 4, pf(f, t, e);
        }
        f = {
          type: "stylesheet",
          instance: f,
          count: 1,
          state: i
        }, a.set(n, f);
      }
    }
  }
  function e1(l, t) {
    hu.X(l, t);
    var u = na;
    if (u && l) {
      var e = Oe(u).hoistableScripts, a = ia(l), n = e.get(a);
      n || (n = u.querySelector(ln(a)), n || (l = W({ src: l, async: !0 }, t), (t = Dt.get(a)) && To(l, t), n = u.createElement("script"), Hl(n), Vl(n, "link", l), u.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, e.set(a, n));
    }
  }
  function a1(l, t) {
    hu.M(l, t);
    var u = na;
    if (u && l) {
      var e = Oe(u).hoistableScripts, a = ia(l), n = e.get(a);
      n || (n = u.querySelector(ln(a)), n || (l = W({ src: l, async: !0, type: "module" }, t), (t = Dt.get(a)) && To(l, t), n = u.createElement("script"), Hl(n), Vl(n, "link", l), u.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, e.set(a, n));
    }
  }
  function Xd(l, t, u, e) {
    var a = (a = Su.current) ? ka(a) : null;
    if (!a) throw Error(o(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof u.precedence == "string" && typeof u.href == "string" ? (u = fa(u.href), t = Oe(
          a
        ).hoistableStyles, e = t.get(u), e || (e = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, t.set(u, e)), e) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (u.rel === "stylesheet" && typeof u.href == "string" && typeof u.precedence == "string") {
          l = fa(u.href);
          var n = Oe(
            a
          ).hoistableStyles, f = n.get(l);
          if (f || (a = a.ownerDocument || a, f = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, n.set(l, f), (n = a.querySelector(
            Pa(l)
          )) ? n._p || (f.instance = n, f.state.loading = 5) : (n = Dt.get(l), n || (n = {
            rel: "preload",
            as: "style",
            href: u.href,
            crossOrigin: u.crossOrigin,
            integrity: u.integrity,
            media: u.media,
            hrefLang: u.hrefLang,
            referrerPolicy: u.referrerPolicy
          }, Dt.set(l, n)), n1(
            a,
            l,
            n,
            f.state
          ))), t && e === null)
            throw Error(o(528, ""));
          return f;
        }
        if (t && e !== null)
          throw Error(o(529, ""));
        return null;
      case "script":
        return t = u.async, u = u.src, typeof u == "string" && t && typeof t != "function" && typeof t != "symbol" ? (u = ia(u), t = Oe(
          a
        ).hoistableScripts, e = t.get(u), e || (e = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, t.set(u, e)), e) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(o(444, l));
    }
  }
  function fa(l) {
    return 'href="' + Et(l) + '"';
  }
  function Pa(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function Qd(l) {
    return W({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function n1(l, t, u, e) {
    if (t = l.querySelector(
      'link[rel="preload"][as="style"][' + t + "]"
    )) {
      if (t[Sn] !== !0) {
        e.loading = 1;
        return;
      }
    } else
      t = l.createElement("link"), t[Sn] = !0, t.onload = t.onerror = ko.bind(null, t), Vl(t, "link", u), Hl(t), l.head.appendChild(t);
    e.preload = t, t.addEventListener("load", function() {
      return e.loading |= 1;
    }), t.addEventListener("error", function() {
      return e.loading |= 2;
    });
  }
  function ia(l) {
    return '[src="' + Et(l) + '"]';
  }
  function ln(l) {
    return "script[async]" + l;
  }
  function Zd(l, t, u) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var e = l.querySelector(
            'style[data-href~="' + Et(u.href) + '"]'
          );
          if (e)
            return t.instance = e, Hl(e), e;
          var a = W({}, u, {
            "data-href": u.href,
            "data-precedence": u.precedence,
            href: null,
            precedence: null
          });
          return e = (l.ownerDocument || l).createElement(
            "style"
          ), Hl(e), Vl(e, "style", a), pf(e, u.precedence, l), t.instance = e;
        case "stylesheet":
          a = fa(u.href);
          var n = l.querySelector(
            Pa(a)
          );
          if (n)
            return t.state.loading |= 4, t.instance = n, Hl(n), n;
          e = Qd(u), (a = Dt.get(a)) && So(e, a), n = (l.ownerDocument || l).createElement("link"), Hl(n);
          var f = n;
          return f._p = new Promise(function(i, c) {
            f.onload = i, f.onerror = c;
          }), Vl(n, "link", e), t.state.loading |= 4, pf(n, u.precedence, l), t.instance = n;
        case "script":
          return n = ia(u.src), (a = l.querySelector(
            ln(n)
          )) ? (t.instance = a, Hl(a), a) : (e = u, (a = Dt.get(n)) && (e = W({}, u), To(e, a)), l = l.ownerDocument || l, a = l.createElement("script"), Hl(a), Vl(a, "link", e), l.head.appendChild(a), t.instance = a);
        case "void":
          return null;
        default:
          throw Error(o(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (e = t.instance, t.state.loading |= 4, pf(e, u.precedence, l));
    return t.instance;
  }
  function pf(l, t, u) {
    for (var e = u.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), a = e.length ? e[e.length - 1] : null, n = a, f = 0; f < e.length; f++) {
      var i = e[f];
      if (i.dataset.precedence === t) n = i;
      else if (n !== a) break;
    }
    n ? n.parentNode.insertBefore(l, n.nextSibling) : (t = u.nodeType === 9 ? u.head : u, t.insertBefore(l, t.firstChild));
  }
  function So(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.title == null && (l.title = t.title);
  }
  function To(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.integrity == null && (l.integrity = t.integrity);
  }
  var Uf = null;
  function Vd(l, t, u) {
    if (Uf === null) {
      var e = /* @__PURE__ */ new Map(), a = Uf = /* @__PURE__ */ new Map();
      a.set(u, e);
    } else
      a = Uf, e = a.get(u), e || (e = /* @__PURE__ */ new Map(), a.set(u, e));
    if (e.has(l)) return e;
    for (e.set(l, null), u = u.getElementsByTagName(l), a = 0; a < u.length; a++) {
      var n = u[a];
      if (!(n[ma] || n[xl] || l === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
        var f = n.getAttribute(t) || "";
        f = l + f;
        var i = e.get(f);
        i ? i.push(n) : e.set(f, [n]);
      }
    }
    return e;
  }
  function bo(l, t, u) {
    l = l.ownerDocument || l, l.head.insertBefore(
      u,
      t === "title" ? l.querySelector("head > title") : null
    );
  }
  function f1(l, t, u) {
    if (u === 1 || t.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
          break;
        return !0;
      case "link":
        if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
          break;
        return t.rel === "stylesheet" ? (l = t.disabled, typeof t.precedence == "string" && l == null) : !0;
      case "script":
        if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
          return !0;
    }
    return !1;
  }
  function Ld(l, t) {
    return l === "img" && t.src != null && t.src !== "" && t.onLoad == null && t.loading !== "lazy";
  }
  function Kd(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function Jd(l) {
    return (l.width || 100) * (l.height || 100) * (typeof devicePixelRatio == "number" ? devicePixelRatio : 1) * 0.25;
  }
  function wd(l, t) {
    typeof t.decode == "function" && (l.imgCount++, t.complete || (l.imgBytes += Jd(t), l.suspenseyImages.push(t)), l = o1.bind(l), t.decode().then(l, l));
  }
  function i1(l, t, u, e) {
    if (u.type === "stylesheet" && (typeof e.media != "string" || matchMedia(e.media).matches !== !1) && (u.state.loading & 4) === 0) {
      if (u.instance === null) {
        var a = fa(e.href), n = t.querySelector(
          Pa(a)
        );
        if (n) {
          t = n._p, t !== null && typeof t == "object" && typeof t.then == "function" && (l.count++, l = tn.bind(l), t.then(l, l)), u.state.loading |= 4, u.instance = n, Hl(n);
          return;
        }
        n = t.ownerDocument || t, e = Qd(e), (a = Dt.get(a)) && So(e, a), n = n.createElement("link"), Hl(n);
        var f = n;
        f._p = new Promise(function(i, c) {
          f.onload = i, f.onerror = c;
        }), Vl(n, "link", e), u.instance = n;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(u, t), (t = u.state.preload) && (u.state.loading & 3) === 0 && (l.count++, u = tn.bind(l), t.addEventListener("load", u), t.addEventListener("error", u));
    }
  }
  var Rf = 0;
  function c1(l, t) {
    return l.stylesheets && l.count === 0 && Bf(l, l.stylesheets), 0 < l.count || 0 < l.imgCount ? function(u) {
      var e = setTimeout(function() {
        if (l.stylesheets && Bf(l, l.stylesheets), l.unsuspend) {
          var n = l.unsuspend;
          l.unsuspend = null, n();
        }
      }, 6e4 + t);
      0 < l.imgBytes && Rf === 0 && (Rf = 62500 * Am());
      var a = setTimeout(
        function() {
          if (l.waitingForImages = !1, l.count === 0 && (l.stylesheets && Bf(l, l.stylesheets), l.unsuspend)) {
            var n = l.unsuspend;
            l.unsuspend = null, n();
          }
        },
        (l.imgBytes > Rf ? 50 : 800) + t
      );
      return l.unsuspend = u, function() {
        l.unsuspend = null, clearTimeout(e), clearTimeout(a);
      };
    } : null;
  }
  function $d(l) {
    if (l.count === 0 && (l.imgCount === 0 || !l.waitingForImages)) {
      if (l.stylesheets) Bf(l, l.stylesheets);
      else if (l.unsuspend) {
        var t = l.unsuspend;
        l.unsuspend = null, t();
      }
    }
  }
  function tn() {
    this.count--, $d(this);
  }
  function o1() {
    this.imgCount--, $d(this);
  }
  var Hf = null;
  function Bf(l, t) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, Hf = /* @__PURE__ */ new Map(), t.forEach(r1, l), Hf = null, tn.call(l));
  }
  function r1(l, t) {
    if (!(t.state.loading & 4)) {
      var u = Hf.get(l);
      if (u) var e = u.get(null);
      else {
        u = /* @__PURE__ */ new Map(), Hf.set(l, u);
        for (var a = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), n = 0; n < a.length; n++) {
          var f = a[n];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") && (u.set(f.dataset.precedence, f), e = f);
        }
        e && u.set(null, e);
      }
      a = t.instance, f = a.getAttribute("data-precedence"), n = u.get(f) || e, n === e && u.set(null, a), u.set(f, a), this.count++, e = tn.bind(this), a.addEventListener("load", e), a.addEventListener("error", e), n ? n.parentNode.insertBefore(a, n.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(a, l.firstChild)), t.state.loading |= 4;
    }
  }
  var ca = {
    $$typeof: Rl,
    Provider: null,
    Consumer: null,
    _currentValue: tu,
    _currentValue2: tu,
    _threadCount: 0
  };
  function s1(l, t, u, e, a, n, f, i, c) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Pf(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Pf(0), this.hiddenUpdates = Pf(null), this.identifierPrefix = e, this.onUncaughtError = a, this.onCaughtError = n, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = c, this.transitionTypes = null, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Fd(l, t, u, e, a, n, f, i, c, m, S, z) {
    return l = new s1(
      l,
      t,
      u,
      f,
      c,
      m,
      S,
      z,
      i
    ), t = 1, n === !0 && (t |= 24), n = lt(3, null, null, t), l.current = n, n.stateNode = l, t = Bi(), t.refCount++, l.pooledCache = t, t.refCount++, n.memoizedState = {
      element: e,
      isDehydrated: u,
      cache: t
    }, xi(n), l;
  }
  function Wd(l) {
    return l ? (l = Be, l) : Be;
  }
  function Id(l, t, u, e, a, n) {
    a = Wd(a), e.context === null ? e.context = a : e.pendingContext = a, e = Du(t), e.payload = { element: u }, n = n === void 0 ? null : n, n !== null && (e.callback = n), u = pu(l, e, t), u !== null && (at(u, l, t), Ra(u, l, t));
  }
  function kd(l, t) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var u = l.retryLane;
      l.retryLane = u !== 0 && u < t ? u : t;
    }
  }
  function Eo(l, t) {
    kd(l, t), (l = l.alternate) && kd(l, t);
  }
  function Pd(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = te(l, 67108864);
      t !== null && at(t, l, 67108864), Eo(l, 67108864);
    }
  }
  function lv(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = ht();
      t = li(t);
      var u = te(l, t);
      u !== null && at(u, l, t), Eo(l, t);
    }
  }
  var oa = !0;
  function d1(l, t, u, e) {
    var a = R.T;
    R.T = null;
    var n = L.p;
    try {
      L.p = 2, zo(l, t, u, e);
    } finally {
      L.p = n, R.T = a;
    }
  }
  function v1(l, t, u, e) {
    var a = R.T;
    R.T = null;
    var n = L.p;
    try {
      L.p = 8, zo(l, t, u, e);
    } finally {
      L.p = n, R.T = a;
    }
  }
  function zo(l, t, u, e) {
    if (oa) {
      var a = _o(e);
      if (a === null)
        uo(
          l,
          t,
          e,
          Yf,
          u
        ), uv(l, e);
      else if (m1(
        a,
        l,
        t,
        u,
        e
      ))
        e.stopPropagation();
      else if (uv(l, e), t & 4 && -1 < y1.indexOf(l)) {
        for (; a !== null; ) {
          var n = _e(a);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (n = n.stateNode, n.current.memoizedState.isDehydrated) {
                  var f = Wu(n.pendingLanes);
                  if (f !== 0) {
                    var i = n;
                    for (i.pendingLanes |= 2, i.entangledLanes |= 2; f; ) {
                      var c = 1 << 31 - ot(f);
                      i.entanglements[1] |= c, f &= ~c;
                    }
                    kt(n), (ol & 6) === 0 && (bf = it() + 500, $a(0));
                  }
                }
                break;
              case 31:
              case 13:
                i = te(n, 2), i !== null && at(i, n, 2), _f(), Eo(n, 2);
            }
          if (n = _o(e), n === null && uo(
            l,
            t,
            e,
            Yf,
            u
          ), n === a) break;
          a = n;
        }
        a !== null && e.stopPropagation();
      } else
        uo(
          l,
          t,
          e,
          null,
          u
        );
    }
  }
  function _o(l) {
    return l = ii(l), Oo(l);
  }
  var Yf = null;
  function Oo(l) {
    if (Yf = null, l = Iu(l), l !== null) {
      var t = M(l);
      if (t === null) l = null;
      else {
        var u = t.tag;
        if (u === 13) {
          if (l = H(t), l !== null) return l;
          l = null;
        } else if (u === 31) {
          if (l = x(t), l !== null) return l;
          l = null;
        } else if (u === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return Yf = l, null;
  }
  function tv(l) {
    switch (l) {
      case "beforetoggle":
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
      case "seeked":
      case "submit":
      case "toggle":
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
      case "fullscreenerror":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
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
      case "resize":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Av()) {
          case Xo:
            return 2;
          case Qo:
            return 8;
          case vn:
          case Mv:
            return 32;
          case Zo:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var No = !1, Zu = null, Vu = null, Lu = null, un = /* @__PURE__ */ new Map(), en = /* @__PURE__ */ new Map(), Ku = [], y1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function uv(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        Zu = null;
        break;
      case "dragenter":
      case "dragleave":
        Vu = null;
        break;
      case "mouseover":
      case "mouseout":
        Lu = null;
        break;
      case "pointerover":
      case "pointerout":
        un.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        en.delete(t.pointerId);
    }
  }
  function an(l, t, u, e, a, n) {
    return l === null || l.nativeEvent !== n ? (l = {
      blockedOn: t,
      domEventName: u,
      eventSystemFlags: e,
      nativeEvent: n,
      targetContainers: [a]
    }, t !== null && (t = _e(t), t !== null && Pd(t)), l) : (l.eventSystemFlags |= e, t = l.targetContainers, a !== null && t.indexOf(a) === -1 && t.push(a), l);
  }
  function m1(l, t, u, e, a) {
    switch (t) {
      case "focusin":
        return Zu = an(
          Zu,
          l,
          t,
          u,
          e,
          a
        ), !0;
      case "dragenter":
        return Vu = an(
          Vu,
          l,
          t,
          u,
          e,
          a
        ), !0;
      case "mouseover":
        return Lu = an(
          Lu,
          l,
          t,
          u,
          e,
          a
        ), !0;
      case "pointerover":
        var n = a.pointerId;
        return un.set(
          n,
          an(
            un.get(n) || null,
            l,
            t,
            u,
            e,
            a
          )
        ), !0;
      case "gotpointercapture":
        return n = a.pointerId, en.set(
          n,
          an(
            en.get(n) || null,
            l,
            t,
            u,
            e,
            a
          )
        ), !0;
    }
    return !1;
  }
  function ev(l) {
    var t = Iu(l.target);
    if (t !== null) {
      var u = M(t);
      if (u !== null) {
        if (t = u.tag, t === 13) {
          if (t = H(u), t !== null) {
            l.blockedOn = t, Fo(l.priority, function() {
              lv(u);
            });
            return;
          }
        } else if (t === 31) {
          if (t = x(u), t !== null) {
            l.blockedOn = t, Fo(l.priority, function() {
              lv(u);
            });
            return;
          }
        } else if (t === 3 && u.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = u.tag === 3 ? u.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function jf(l) {
    if (l.blockedOn !== null) return !1;
    for (var t = l.targetContainers; 0 < t.length; ) {
      var u = _o(l.nativeEvent);
      if (u === null) {
        u = l.nativeEvent;
        var e = new u.constructor(
          u.type,
          u
        );
        fi = e, u.target.dispatchEvent(e), fi = null;
      } else
        return t = _e(u), t !== null && Pd(t), l.blockedOn = u, !1;
      t.shift();
    }
    return !0;
  }
  function av(l, t, u) {
    jf(l) && u.delete(t);
  }
  function h1() {
    No = !1, Zu !== null && jf(Zu) && (Zu = null), Vu !== null && jf(Vu) && (Vu = null), Lu !== null && jf(Lu) && (Lu = null), un.forEach(av), en.forEach(av);
  }
  function qf(l, t) {
    l.blockedOn === t && (l.blockedOn = null, No || (No = !0, s.unstable_scheduleCallback(
      s.unstable_NormalPriority,
      h1
    )));
  }
  var xf = null;
  function nv(l) {
    xf !== l && (xf = l, s.unstable_scheduleCallback(
      s.unstable_NormalPriority,
      function() {
        xf === l && (xf = null);
        for (var t = 0; t < l.length; t += 3) {
          var u = l[t], e = l[t + 1], a = l[t + 2];
          if (typeof e != "function") {
            if (Oo(e || u) === null)
              continue;
            break;
          }
          var n = _e(u);
          n !== null && (l.splice(t, 3), t -= 3, nc(
            n,
            {
              pending: !0,
              data: a,
              method: u.method,
              action: e
            },
            e,
            a
          ));
        }
      }
    ));
  }
  function ra(l) {
    function t(c) {
      return qf(c, l);
    }
    Zu !== null && qf(Zu, l), Vu !== null && qf(Vu, l), Lu !== null && qf(Lu, l), un.forEach(t), en.forEach(t);
    for (var u = 0; u < Ku.length; u++) {
      var e = Ku[u];
      e.blockedOn === l && (e.blockedOn = null);
    }
    for (; 0 < Ku.length && (u = Ku[0], u.blockedOn === null); )
      ev(u), u.blockedOn === null && Ku.shift();
    if (u = (l.ownerDocument || l).$$reactFormReplay, u != null)
      for (e = 0; e < u.length; e += 3) {
        var a = u[e], n = u[e + 1], f = a[Pl] || null;
        if (typeof n == "function")
          f || nv(u);
        else if (f) {
          var i = null;
          if (n && n.hasAttribute("formAction")) {
            if (a = n, f = n[Pl] || null)
              i = f.formAction;
            else if (Oo(a) !== null) continue;
          } else i = f.action;
          typeof i == "function" ? u[e + 1] = i : (u.splice(e, 3), e -= 3), nv(u);
        }
      }
  }
  function fv() {
    function l(n) {
      n.canIntercept && n.info === "react-transition" && n.intercept({
        handler: function() {
          return new Promise(function(f) {
            return a = f;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function t() {
      a !== null && (a(), a = null), e || setTimeout(u, 20);
    }
    function u() {
      if (!e && !navigation.transition) {
        var n = navigation.currentEntry;
        n && n.url != null && navigation.navigate(n.url, {
          state: n.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var e = !1, a = null;
      return navigation.addEventListener("navigate", l), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(u, 100), function() {
        e = !0, navigation.removeEventListener("navigate", l), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), a !== null && (a(), a = null);
      };
    }
  }
  function Ao(l) {
    this._internalRoot = l;
  }
  Gf.prototype.render = Ao.prototype.render = function(l) {
    var t = this._internalRoot;
    if (t === null) throw Error(o(409));
    var u = t.current, e = ht();
    Id(u, e, l, t, null, null);
  }, Gf.prototype.unmount = Ao.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var t = l.containerInfo;
      Id(l.current, 2, null, l, null, null), _f(), t[ze] = null;
    }
  };
  function Gf(l) {
    this._internalRoot = l;
  }
  Gf.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var t = $o();
      l = { blockedOn: null, target: l, priority: t };
      for (var u = 0; u < Ku.length && t !== 0 && t < Ku[u].priority; u++) ;
      Ku.splice(u, 0, l), u === 0 && ev(l);
    }
  };
  var iv = T.version;
  if (iv !== "19.3.0")
    throw Error(
      o(
        527,
        iv,
        "19.3.0"
      )
    );
  L.findDOMNode = function(l) {
    var t = l._reactInternals;
    if (t === void 0)
      throw typeof l.render == "function" ? Error(o(188)) : (l = Object.keys(l).join(","), Error(o(268, l)));
    return l = tl(t), l = l !== null ? U(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var g1 = {
    bundleType: 0,
    version: "19.3.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: R,
    reconcilerVersion: "19.3.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Xf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Xf.isDisabled && Xf.supportsFiber)
      try {
        da = Xf.inject(
          g1
        ), ct = Xf;
      } catch {
      }
  }
  return fn.createRoot = function(l, t) {
    if (!N(l)) throw Error(o(299));
    var u = !1, e = "", a = W0, n = I0, f = k0;
    return t != null && (t.unstable_strictMode === !0 && (u = !0), t.identifierPrefix !== void 0 && (e = t.identifierPrefix), t.onUncaughtError !== void 0 && (a = t.onUncaughtError), t.onCaughtError !== void 0 && (n = t.onCaughtError), t.onRecoverableError !== void 0 && (f = t.onRecoverableError)), t = Fd(
      l,
      1,
      !1,
      null,
      null,
      u,
      e,
      null,
      a,
      n,
      f,
      fv
    ), l[ze] = t.current, to(l), new Ao(t);
  }, fn.hydrateRoot = function(l, t, u) {
    if (!N(l)) throw Error(o(299));
    var e = !1, a = "", n = W0, f = I0, i = k0, c = null;
    return u != null && (u.unstable_strictMode === !0 && (e = !0), u.identifierPrefix !== void 0 && (a = u.identifierPrefix), u.onUncaughtError !== void 0 && (n = u.onUncaughtError), u.onCaughtError !== void 0 && (f = u.onCaughtError), u.onRecoverableError !== void 0 && (i = u.onRecoverableError), u.formState !== void 0 && (c = u.formState)), t = Fd(
      l,
      1,
      !0,
      t,
      u ?? null,
      e,
      a,
      c,
      n,
      f,
      i,
      fv
    ), t.context = Wd(null), u = t.current, e = ht(), e = li(e), a = Du(e), a.callback = null, pu(u, a, e), u = e, t.current.lanes = u, ya(t, u), kt(t), l[ze] = t.current, to(l), new Gf(t);
  }, fn.version = "19.3.0", fn;
}
var gv;
function D1() {
  if (gv) return Do.exports;
  gv = 1;
  function s() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s);
      } catch (T) {
        console.error(T);
      }
  }
  return s(), Do.exports = C1(), Do.exports;
}
var p1 = D1();
function U1(s) {
  return s && typeof s == "object" ? s : typeof window > "u" ? null : window;
}
function Sv({
  snapshot: s,
  ownSeat: T = null,
  replayIndex: _ = null,
  flipVertical: o = !1
} = {}) {
  const N = s && typeof s == "object" && !Array.isArray(s) ? { ...s } : {};
  return {
    ...N,
    boardCode: String(N.boardCode || ""),
    version: Number.isFinite(Number(N.version)) ? Number(N.version) : 0,
    ownSeat: T,
    replayIndex: _,
    flipVertical: !!o
  };
}
function R1({
  node: s,
  snapshot: T,
  ownSeat: _,
  replayIndex: o,
  flipVertical: N,
  onMoveClick: M,
  elmRuntime: H
} = {}) {
  const Z = U1(H)?.Elm?.BoardIsland?.init;
  if (typeof Z != "function" || !s)
    return {
      app: null,
      sendSnapshotUpdate: () => {
      },
      cleanup: () => {
      }
    };
  const tl = Sv({
    snapshot: T,
    ownSeat: _,
    replayIndex: o,
    flipVertical: N
  }), U = Z({ node: s, flags: tl }), b = U?.ports?.boardMoveClicked, Y = U?.ports?.boardSnapshot, zl = ($) => {
    typeof M == "function" && M($);
  };
  return typeof b?.subscribe == "function" && b.subscribe(zl), { app: U, sendSnapshotUpdate: ($) => {
    typeof Y?.send == "function" && Y.send(Sv($));
  }, cleanup: () => {
    typeof b?.unsubscribe == "function" && b.unsubscribe(zl), typeof U?.unmount == "function" && U.unmount();
  } };
}
function H1({
  snapshot: s,
  ownSeat: T,
  replayIndex: _,
  flipVertical: o,
  onMoveClick: N
}) {
  const M = St.useRef(null), H = St.useRef(null), x = St.useRef(N);
  x.current = N;
  const Z = St.useMemo(
    () => ({ snapshot: s, ownSeat: T, replayIndex: _, flipVertical: o }),
    [s, T, _, o]
  );
  return St.useEffect(() => (H.current = R1({
    node: M.current,
    ...Z,
    onMoveClick: (tl) => x.current?.(tl)
  }), () => {
    H.current?.cleanup?.(), H.current = null;
  }), []), St.useEffect(() => {
    H.current?.sendSnapshotUpdate?.(Z);
  }, [Z]), /* @__PURE__ */ X.jsx("div", { ref: M, "data-testid": "elm-board-island-host" });
}
function B1(s) {
  if (typeof s != "function")
    throw new Error("Fetch API unavailable.");
  return s;
}
async function Y1(s) {
  return s.json();
}
async function j1({ clientId: s, moveTimeLimitSeconds: T }, { fetchImpl: _ = globalThis.fetch } = {}) {
  const o = B1(_), N = Number(T), M = {
    clientId: String(s || "").trim(),
    moveTimeLimitSeconds: Number.isFinite(N) ? N : 15
  }, H = await o("/api/rooms", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(M)
  });
  if (!H.ok)
    throw new Error(`Board creation failed: ${H.status}`);
  return Y1(H);
}
function q1(s = globalThis.window?.location || globalThis.location) {
  const T = s?.protocol === "https:" ? "wss:" : "ws:", _ = s?.host || "localhost";
  return `${T}//${_}/ws`;
}
function x1({
  roomId: s,
  clientId: T,
  onMessage: _,
  onStatus: o,
  WebSocketImpl: N = globalThis.window?.WebSocket || globalThis.WebSocket,
  socketUrl: M = q1()
} = {}) {
  if (typeof N != "function")
    throw new Error("WebSocket unavailable.");
  const H = new N(M);
  return H.onopen = () => {
    o?.("connected"), H.send(
      JSON.stringify({
        type: "watch",
        roomId: String(s || "").trim(),
        clientId: String(T || "").trim()
      })
    );
  }, H.onmessage = (x) => {
    try {
      _?.(JSON.parse(x.data));
    } catch {
      _?.({ type: "error", error: "malformed websocket message" });
    }
  }, H.onerror = () => {
    o?.("error");
  }, H.onclose = () => {
    o?.("disconnected");
  }, {
    socket: H,
    send(x) {
      H.send(JSON.stringify(x));
    },
    close() {
      H.close?.();
    }
  };
}
const Tv = "traceballElmClientId", Vf = "traceballPlayerName", G1 = "traceballOnlineMoveTimer";
function Lf() {
  return globalThis.window?.localStorage || globalThis.localStorage;
}
function X1(s = Math.random) {
  return s().toString(36).slice(2, 12);
}
function Q1({
  storage: s = Lf(),
  random: T = Math.random
} = {}) {
  const _ = s?.getItem?.(Tv);
  if (_) return _;
  const o = `traceball-elm-${X1(T)}`;
  return s?.setItem?.(Tv, o), o;
}
function Ev(s = Math.random) {
  const T = (_) => _[Math.floor(s() * _.length)];
  return `${T(["Neon", "Turbo", "Cosmic", "Lucky", "Pixel", "Rocket", "Thunder"])} ${T(["Striker", "Falcon", "Comet", "Phantom", "Kicker", "Ace", "Wizard"])}`;
}
function zv(s, T = "") {
  return String(s || "").replace(/\s+/g, " ").trim().slice(0, 24) || T;
}
function Z1({
  storage: s = Lf(),
  randomName: T = Ev
} = {}) {
  const _ = String(s?.getItem?.(Vf) || ""), o = zv(_, "");
  if (o && o !== "Elm Player")
    return s?.setItem?.(Vf, o), o;
  const N = T();
  return s?.setItem?.(Vf, N), N;
}
function V1(s, { storage: T = Lf(), randomName: _ = Ev } = {}) {
  const o = zv(s, _());
  return T?.setItem?.(Vf, o), o;
}
function L1(s, T = 15) {
  const _ = Number(s);
  return Number.isFinite(_) && _ >= 0 ? _ : T;
}
function K1({
  storage: s = Lf(),
  fallback: T = 15
} = {}) {
  return L1(
    s?.getItem?.(G1),
    T
  );
}
function J1({
  clientId: s = "",
  playerName: T = "",
  connectionStatus: _ = "idle",
  currentBoardCode: o = "",
  boardState: N = null,
  boardList: M = [],
  mainTab: H = "home",
  mode: x = "online",
  toast: Z = null,
  onlineMoveTimer: tl = 15,
  localMoveTimer: U = 15,
  historyPanelOpen: b = !1,
  rulesPanelOpen: Y = !1
} = {}) {
  return {
    clientId: s,
    playerName: T,
    connectionStatus: _,
    currentBoardCode: o,
    boardState: N,
    boardList: M,
    mainTab: H,
    mode: x,
    toast: Z,
    onlineSetup: {
      moveTimeLimitSeconds: tl
    },
    localSetup: {
      moveTimeLimitSeconds: U
    },
    historyPanelOpen: b,
    rulesPanelOpen: Y
  };
}
function w1(s, T, _) {
  if (!_ || typeof _ != "object") return !1;
  const o = String(s || "").trim(), N = String(_.boardCode || "").trim();
  if (o && N && o !== N) return !1;
  if (!T || typeof T != "object") return !0;
  const M = String(T.boardCode || "").trim();
  if (!M || M !== N) return !0;
  const H = Number(T.version), x = Number(_.version);
  return Number.isFinite(H) ? Number.isFinite(x) ? x > H : !1 : !0;
}
function $1(s, T) {
  if (!T || typeof T != "object") return s;
  switch (T.type) {
    case "hydrateShell":
      return { ...s, ...T.payload };
    case "setPlayerName":
      return { ...s, playerName: String(T.playerName || "") };
    case "setConnectionStatus":
      return { ...s, connectionStatus: String(T.status || "idle") };
    case "setCurrentBoardCode":
      return { ...s, currentBoardCode: String(T.boardCode || "") };
    case "receiveBoardState":
      return w1(
        s.currentBoardCode,
        s.boardState,
        T.boardState
      ) ? {
        ...s,
        boardState: T.boardState,
        currentBoardCode: String(
          T.boardState?.boardCode || s.currentBoardCode || ""
        )
      } : s;
    case "receiveBoardList":
      return {
        ...s,
        boardList: Array.isArray(T.boardList) ? T.boardList : Array.isArray(T.boardList?.rooms) ? T.boardList.rooms : []
      };
    case "setMainTab":
      return { ...s, mainTab: String(T.mainTab || s.mainTab) };
    case "setMode":
      return { ...s, mode: String(T.mode || s.mode) };
    case "setToast":
      return { ...s, toast: T.toast ?? null };
    case "setHistoryPanelOpen":
      return { ...s, historyPanelOpen: !!T.open };
    case "setRulesPanelOpen":
      return { ...s, rulesPanelOpen: !!T.open };
    case "setOnlineMoveTimer":
      return {
        ...s,
        onlineSetup: {
          ...s.onlineSetup,
          moveTimeLimitSeconds: Number(T.seconds)
        }
      };
    case "setLocalMoveTimer":
      return {
        ...s,
        localSetup: {
          ...s.localSetup,
          moveTimeLimitSeconds: Number(T.seconds)
        }
      };
    default:
      return s;
  }
}
const F1 = {
  minHeight: "100vh",
  display: "grid",
  placeItems: "center",
  padding: "32px 20px",
  background: "radial-gradient(circle at top, rgba(10, 143, 40, 0.18), transparent 38%), linear-gradient(180deg, #f6fbf4 0%, #e4f0e2 100%)",
  color: "#102a1a"
}, W1 = {
  width: "min(720px, 100%)",
  borderRadius: "24px",
  padding: "28px",
  background: "rgba(255, 255, 255, 0.92)",
  boxShadow: "0 24px 70px rgba(16, 42, 26, 0.16)",
  border: "1px solid rgba(16, 42, 26, 0.08)"
}, I1 = {
  margin: 0,
  fontSize: "0.85rem",
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: "#0a8f28",
  fontWeight: 700
}, k1 = {
  margin: "10px 0 12px",
  fontSize: "clamp(2rem, 4vw, 3.25rem)",
  lineHeight: 1.05
}, P1 = {
  margin: 0,
  fontSize: "1.05rem",
  lineHeight: 1.6,
  color: "#33513f"
}, lh = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
  gap: "14px",
  marginTop: "24px"
}, Qf = {
  padding: "16px",
  borderRadius: "18px",
  background: "#f7fbf7",
  border: "1px solid rgba(16, 42, 26, 0.08)"
}, Pt = {
  margin: 0,
  fontSize: "0.78rem",
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  color: "#567062"
}, cn = {
  margin: "8px 0 0",
  fontSize: "1rem",
  fontWeight: 700,
  wordBreak: "break-word"
}, th = {
  width: "100%",
  marginTop: "10px",
  padding: "12px 14px",
  borderRadius: "12px",
  border: "1px solid rgba(16, 42, 26, 0.14)",
  fontSize: "1rem",
  boxSizing: "border-box"
}, Zf = {
  display: "flex",
  gap: "10px",
  marginTop: "18px",
  flexWrap: "wrap"
}, on = (s) => ({
  border: "1px solid rgba(16, 42, 26, 0.12)",
  borderRadius: "999px",
  padding: "8px 14px",
  background: s ? "#102a1a" : "#f7fbf7",
  color: s ? "#f6fbf4" : "#102a1a",
  fontWeight: 700,
  cursor: "pointer"
}), Ho = {
  marginTop: "18px",
  padding: "16px",
  borderRadius: "16px",
  background: "#eef7f0",
  border: "1px dashed rgba(16, 42, 26, 0.18)",
  color: "#153124",
  fontWeight: 600
}, uh = {
  marginTop: "24px",
  padding: "16px 18px",
  borderRadius: "18px",
  background: "#102a1a",
  color: "#f6fbf4",
  lineHeight: 1.55
}, eh = {
  display: "inline-block",
  width: "10px",
  height: "10px",
  borderRadius: "999px",
  marginRight: "8px",
  background: "#9aa79e"
};
function Te(s) {
  return String(s || "").trim();
}
function ah(s) {
  const T = Number(s);
  return Number.isFinite(T) ? T : 0;
}
function nh(s) {
  const T = s?.game?.players;
  return T && typeof T == "object" ? T : null;
}
function fh(s) {
  return s === "p1" ? "Claim Blue" : "Claim Red";
}
function ih(s) {
  return s?.game?.status === "playing" || s?.game?.status === "paused";
}
function ch() {
  return globalThis.window?.history ?? globalThis.history ?? null;
}
function jo() {
  return globalThis.window?.location ?? globalThis.location ?? null;
}
function oh(s) {
  return s ? typeof s.href == "string" && s.href ? s.href : `${s.origin || "http://localhost"}${s.pathname || "/react"}${s.search || ""}${s.hash || ""}` : "";
}
function rh({
  locationLike: s = jo()
} = {}) {
  const T = oh(s);
  if (!T) return "";
  const _ = new URL(T);
  return Te(
    _.searchParams.get("board") || _.searchParams.get("room") || _.searchParams.get("code") || ""
  );
}
function sh(s) {
  if (!s || typeof s != "object" || String(s.type || "") !== "state") return null;
  const T = Te(s.boardCode || s.roomId), _ = s.board && typeof s.board == "object", o = s.game && typeof s.game == "object";
  return !T || !_ && !o ? null : {
    boardCode: T,
    version: ah(s.version),
    ..._ ? { board: s.board } : {},
    ...o ? { game: s.game } : {}
  };
}
function dh(s, { historyLike: T = ch(), locationLike: _ = jo() } = {}) {
  if (!_ || typeof T?.replaceState != "function")
    return null;
  const o = typeof _.href == "string" && _.href ? _.href : `${_.origin || "http://localhost"}${_.pathname || "/react"}${_.search || ""}${_.hash || ""}`, N = new URL(o);
  N.pathname = "/react", s ? N.searchParams.set("board", String(s).trim()) : N.searchParams.delete("board");
  const M = `${N.pathname}${N.search}${N.hash}`;
  return T.replaceState(T.state ?? null, "", M), M;
}
function vh({
  currentBoardCode: s,
  clientId: T,
  dispatch: _,
  onOwnSeat: o,
  onMessage: N,
  connect: M = x1
}) {
  const H = Te(s);
  return !H || typeof M != "function" ? null : M({
    roomId: H,
    clientId: String(T || ""),
    onStatus(x) {
      _?.({ type: "setConnectionStatus", status: x });
    },
    onMessage(x) {
      if (N?.(x), x?.type === "joined") {
        const tl = String(x.playerId || "").trim();
        (tl === "p1" || tl === "p2") && o?.(tl);
        return;
      }
      if (x?.type === "left") {
        o?.(null), _?.({ type: "setToast", toast: "You left the board." });
        return;
      }
      if (x?.type === "BoardNotFound" && typeof x.message == "string") {
        _?.({ type: "setToast", toast: x.message });
        return;
      }
      if (x?.type === "error" && typeof x.error == "string") {
        _?.({ type: "setToast", toast: x.error });
        return;
      }
      const Z = sh(x);
      Z && _?.({ type: "receiveBoardState", boardState: Z });
    }
  });
}
function Bo({
  roomId: s,
  clientId: T,
  dispatch: _,
  setOwnSeat: o,
  connectionRef: N,
  activeBoardRef: M,
  onMessage: H,
  connect: x = vh
}) {
  const Z = Te(s);
  if (!Z || typeof x != "function") return null;
  if (M?.current === Z && N?.current)
    return N.current;
  N?.current?.close?.(), N && (N.current = null), M && (M.current = Z), o?.(null);
  const tl = x({
    currentBoardCode: Z,
    clientId: T,
    dispatch: _,
    onOwnSeat: o,
    onMessage: H
  });
  return N && (N.current = tl), tl;
}
function yh({ snapshot: s, ownSeat: T } = {}) {
  const _ = String(T || "").trim();
  if (_ === "p1" || _ === "p2") return [];
  const o = nh(s);
  return o ? ["p1", "p2"].filter((N) => o?.[N]?.status === "vacant").map((N) => ({ seatId: N, label: fh(N) })) : [];
}
function mh({ ownSeat: s, snapshot: T } = {}) {
  const _ = String(s || "").trim();
  return _ !== "p1" && _ !== "p2" ? null : ih(T) ? { label: "Leave Seat (Forfeit)", danger: !0 } : { label: "Leave Seat", danger: !1 };
}
function hh({
  clientId: s,
  dispatch: T,
  startWatching: _,
  locationLike: o = jo()
}) {
  const N = rh({ locationLike: o });
  return N ? (T?.({ type: "setCurrentBoardCode", boardCode: N }), _?.({
    roomId: N,
    clientId: s,
    onMessage(M) {
      M?.type === "BoardNotFound" && typeof M.message == "string" && T?.({ type: "setToast", toast: M.message }), M?.type === "error" && typeof M.error == "string" && T?.({ type: "setToast", toast: M.error });
    }
  })) : null;
}
function gh(s) {
  const T = s?.point;
  if (!T || typeof T != "object") return null;
  const _ = Number(T.x), o = Number(T.y);
  return !Number.isFinite(_) || !Number.isFinite(o) ? null : { x: _, y: o };
}
function qo(s) {
  return typeof s?.send == "function" && Number(s?.socket?.readyState) === 1;
}
function Sh({
  payload: s,
  ownSeat: T,
  connection: _,
  dispatch: o
}) {
  if (!qo(_)) {
    o?.({
      type: "setToast",
      toast: "Connection unavailable. Reconnect to move."
    });
    return;
  }
  const N = String(T || "").trim();
  if (N !== "p1" && N !== "p2") {
    o?.({ type: "setToast", toast: "Join a seat to move." });
    return;
  }
  const M = gh(s);
  if (!M) {
    o?.({ type: "setToast", toast: "Invalid move target." });
    return;
  }
  try {
    _.send({ type: "move", to: M });
  } catch {
    o?.({
      type: "setToast",
      toast: "Move could not be sent. Reconnect and try again."
    });
  }
}
function Th({
  seatId: s,
  currentBoardCode: T,
  clientId: _,
  playerName: o,
  connection: N,
  dispatch: M
}) {
  if (!qo(N)) {
    M?.({
      type: "setToast",
      toast: "Connection unavailable. Reconnect to claim a seat."
    });
    return;
  }
  const H = String(s || "").trim();
  if (H !== "p1" && H !== "p2") {
    M?.({ type: "setToast", toast: "Invalid seat selection." });
    return;
  }
  N.send({
    type: "claimSeat",
    seatId: H,
    name: String(o || "").trim(),
    roomId: Te(T),
    clientId: String(_ || "").trim()
  });
}
function bh({ ownSeat: s, connection: T, dispatch: _ }) {
  const o = String(s || "").trim();
  if (o !== "p1" && o !== "p2") {
    _?.({ type: "setToast", toast: "You are not occupying a seat." });
    return;
  }
  if (!qo(T)) {
    _?.({
      type: "setToast",
      toast: "Connection unavailable. Reconnect to leave your seat."
    });
    return;
  }
  T.send({ type: "leave" });
}
async function Eh({
  clientId: s,
  moveTimeLimitSeconds: T,
  dispatch: _,
  create: o = j1,
  syncUrl: N = dh,
  startWatching: M,
  refreshBoardList: H
}) {
  try {
    const x = await o({ clientId: s, moveTimeLimitSeconds: T }), Z = Te(x?.roomId);
    if (!Z)
      throw new Error("Board creation response missing roomId.");
    return _?.({ type: "setCurrentBoardCode", boardCode: Z }), N?.(Z), M?.({ roomId: Z, clientId: s }), await H?.(), x;
  } catch (x) {
    return _?.({
      type: "setToast",
      toast: x instanceof Error && x.message ? x.message : "Board creation failed."
    }), null;
  }
}
function zh({ initialState: s }) {
  const [T, _] = St.useReducer($1, s), [o, N] = St.useState(null), M = St.useRef(null), H = St.useRef(""), x = s?.demoBoardSnapshot || null, Z = T.boardState || x, tl = String(T.connectionStatus || "idle"), U = yh({
    snapshot: Z,
    ownSeat: o
  }), b = mh({
    ownSeat: o,
    snapshot: Z
  });
  St.useEffect(() => {
    const el = hh({
      clientId: T.clientId,
      dispatch: _,
      startWatching: ({ roomId: $, clientId: kl, onMessage: wl }) => Bo({
        roomId: $,
        clientId: kl,
        dispatch: _,
        setOwnSeat: N,
        connectionRef: M,
        activeBoardRef: H,
        onMessage: wl
      })
    });
    return () => {
      M.current === el && el && (H.current = "", M.current = null, el.close?.());
    };
  }, []), St.useEffect(() => {
    const el = Te(T.currentBoardCode);
    if (!el) {
      M.current = null, N(null), _({ type: "setConnectionStatus", status: "idle" });
      return;
    }
    let $ = null;
    try {
      $ = Bo({
        roomId: el,
        clientId: T.clientId,
        dispatch: _,
        setOwnSeat: N,
        connectionRef: M,
        activeBoardRef: H,
        onMessage: null
      });
    } catch {
      H.current = "", M.current = null, _({ type: "setConnectionStatus", status: "error" });
      return;
    }
    return () => {
      M.current === $ && (H.current = "", M.current = null, $?.close?.());
    };
  }, [T.currentBoardCode, T.clientId]);
  const Y = T.clientId && T.clientId.length > 6 ? `...${T.clientId.slice(-6)}` : "identity ready", zl = (el) => {
    const $ = el.target.value;
    _({ type: "setPlayerName", playerName: $ }), V1($);
  }, Kl = async () => {
    await Eh({
      clientId: T.clientId,
      moveTimeLimitSeconds: T.onlineSetup.moveTimeLimitSeconds,
      dispatch: _,
      startWatching: ({ roomId: el, clientId: $ }) => Bo({
        roomId: el,
        clientId: $,
        dispatch: _,
        setOwnSeat: N,
        connectionRef: M,
        activeBoardRef: H
      })
    });
  };
  return /* @__PURE__ */ X.jsx("main", { style: F1, children: /* @__PURE__ */ X.jsxs("section", { style: W1, children: [
    /* @__PURE__ */ X.jsx("p", { style: I1, children: "React product shell" }),
    /* @__PURE__ */ X.jsx("h1", { style: k1, children: "Traceball Arena" }),
    /* @__PURE__ */ X.jsx("p", { style: P1, children: "The React shell owns product state only. The Elm board island is not mounted yet, and online authority remains on the server." }),
    /* @__PURE__ */ X.jsxs("div", { style: lh, children: [
      /* @__PURE__ */ X.jsxs("article", { style: Qf, children: [
        /* @__PURE__ */ X.jsx("p", { style: Pt, children: "Player Name" }),
        /* @__PURE__ */ X.jsx(
          "input",
          {
            "aria-label": "Player name",
            value: T.playerName || "",
            onChange: zl,
            style: th,
            placeholder: "Enter your name"
          }
        )
      ] }),
      /* @__PURE__ */ X.jsxs("article", { style: Qf, children: [
        /* @__PURE__ */ X.jsx("p", { style: Pt, children: "Client Identity" }),
        /* @__PURE__ */ X.jsx("p", { style: cn, children: Y })
      ] }),
      /* @__PURE__ */ X.jsxs("article", { style: Qf, children: [
        /* @__PURE__ */ X.jsx("p", { style: Pt, children: "Online Move Timer" }),
        /* @__PURE__ */ X.jsxs("p", { style: cn, children: [
          T.onlineSetup.moveTimeLimitSeconds,
          "s"
        ] })
      ] }),
      /* @__PURE__ */ X.jsxs("article", { style: Qf, children: [
        /* @__PURE__ */ X.jsx("p", { style: Pt, children: "Connection" }),
        /* @__PURE__ */ X.jsxs("p", { style: cn, children: [
          /* @__PURE__ */ X.jsx(
            "span",
            {
              style: {
                ...eh,
                background: tl === "connected" ? "#0a8f28" : tl === "error" ? "#d64545" : "#9aa79e"
              }
            }
          ),
          tl
        ] })
      ] })
    ] }),
    /* @__PURE__ */ X.jsxs("div", { style: { marginTop: "20px" }, children: [
      /* @__PURE__ */ X.jsx("p", { style: Pt, children: "Selected Mode" }),
      /* @__PURE__ */ X.jsxs("div", { style: Zf, children: [
        /* @__PURE__ */ X.jsx(
          "button",
          {
            type: "button",
            style: on(T.mode === "online"),
            onClick: () => _({ type: "setMode", mode: "online" }),
            children: "Online"
          }
        ),
        /* @__PURE__ */ X.jsx(
          "button",
          {
            type: "button",
            style: on(T.mode === "local"),
            onClick: () => _({ type: "setMode", mode: "local" }),
            children: "Local"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ X.jsxs("div", { style: { marginTop: "20px" }, children: [
      /* @__PURE__ */ X.jsx("p", { style: Pt, children: "Online Actions" }),
      /* @__PURE__ */ X.jsx("div", { style: Zf, children: /* @__PURE__ */ X.jsx(
        "button",
        {
          type: "button",
          style: on(!1),
          onClick: Kl,
          children: "Create Board"
        }
      ) })
    ] }),
    /* @__PURE__ */ X.jsxs("div", { style: { marginTop: "20px" }, children: [
      /* @__PURE__ */ X.jsx("p", { style: Pt, children: "Active Tab" }),
      /* @__PURE__ */ X.jsx("p", { style: cn, children: T.mainTab || "home" })
    ] }),
    T.currentBoardCode ? /* @__PURE__ */ X.jsxs("div", { style: { marginTop: "20px" }, children: [
      /* @__PURE__ */ X.jsx("p", { style: Pt, children: "Current Board" }),
      /* @__PURE__ */ X.jsx("p", { style: cn, children: T.currentBoardCode })
    ] }) : null,
    U.length > 0 ? /* @__PURE__ */ X.jsxs("div", { style: { marginTop: "20px" }, children: [
      /* @__PURE__ */ X.jsx("p", { style: Pt, children: "Match" }),
      /* @__PURE__ */ X.jsx("div", { style: Zf, children: U.map((el) => /* @__PURE__ */ X.jsx(
        "button",
        {
          type: "button",
          style: on(!1),
          onClick: () => Th({
            seatId: el.seatId,
            currentBoardCode: T.currentBoardCode,
            clientId: T.clientId,
            playerName: T.playerName,
            connection: M.current,
            dispatch: _
          }),
          children: el.label
        },
        el.seatId
      )) })
    ] }) : null,
    b ? /* @__PURE__ */ X.jsxs("div", { style: { marginTop: "20px" }, children: [
      /* @__PURE__ */ X.jsx("p", { style: Pt, children: "Seat" }),
      /* @__PURE__ */ X.jsx("div", { style: Zf, children: /* @__PURE__ */ X.jsx(
        "button",
        {
          type: "button",
          style: on(!1),
          onClick: () => bh({
            ownSeat: o,
            connection: M.current,
            dispatch: _
          }),
          children: b.label
        }
      ) })
    ] }) : null,
    Z ? /* @__PURE__ */ X.jsx("div", { style: Ho, children: /* @__PURE__ */ X.jsx(
      H1,
      {
        snapshot: Z,
        ownSeat: o,
        replayIndex: null,
        flipVertical: !1,
        onMoveClick: (el) => {
          console.info("Board move click", el), Sh({
            payload: el,
            ownSeat: o,
            connection: M.current,
            dispatch: _
          });
        }
      }
    ) }) : /* @__PURE__ */ X.jsx("div", { style: Ho, children: "Board island not mounted yet" }),
    T.toast ? /* @__PURE__ */ X.jsx("div", { style: { ...Ho, marginTop: "10px" }, children: T.toast }) : null,
    /* @__PURE__ */ X.jsx("div", { style: uh, children: "Elm remains the board and replay correctness surface. The server remains authoritative for seats, timers, pause/resume, winners, and online move validation." })
  ] }) });
}
const bv = document.getElementById("react-root");
if (bv) {
  const s = J1({
    clientId: Q1(),
    playerName: Z1(),
    onlineMoveTimer: K1()
  });
  p1.createRoot(bv).render(
    /* @__PURE__ */ X.jsx(_1.StrictMode, { children: /* @__PURE__ */ X.jsx(zh, { initialState: s }) })
  );
}
