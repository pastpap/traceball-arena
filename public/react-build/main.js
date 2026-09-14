function m1(h) {
  return h && h.__esModule && Object.prototype.hasOwnProperty.call(h, "default") ? h.default : h;
}
var Oo = { exports: {} }, en = {};
var as;
function h1() {
  if (as) return en;
  as = 1;
  var h = /* @__PURE__ */ Symbol.for("react.transitional.element"), z = /* @__PURE__ */ Symbol.for("react.fragment");
  function O(d, Y, Z) {
    var G = null;
    if (Z !== void 0 && (G = "" + Z), Y.key !== void 0 && (G = "" + Y.key), "key" in Y) {
      Z = {};
      for (var al in Y)
        al !== "key" && (Z[al] = Y[al]);
    } else Z = Y;
    return Y = Z.ref, {
      $$typeof: h,
      type: d,
      key: G,
      ref: Y !== void 0 ? Y : null,
      props: Z
    };
  }
  return en.Fragment = z, en.jsx = O, en.jsxs = O, en;
}
var es;
function g1() {
  return es || (es = 1, Oo.exports = h1()), Oo.exports;
}
var k = g1(), No = { exports: {} }, Q = {};
var ns;
function S1() {
  if (ns) return Q;
  ns = 1;
  var h = /* @__PURE__ */ Symbol.for("react.transitional.element"), z = /* @__PURE__ */ Symbol.for("react.portal"), O = /* @__PURE__ */ Symbol.for("react.fragment"), d = /* @__PURE__ */ Symbol.for("react.strict_mode"), Y = /* @__PURE__ */ Symbol.for("react.profiler"), Z = /* @__PURE__ */ Symbol.for("react.consumer"), G = /* @__PURE__ */ Symbol.for("react.context"), al = /* @__PURE__ */ Symbol.for("react.forward_ref"), J = /* @__PURE__ */ Symbol.for("react.suspense"), Tl = /* @__PURE__ */ Symbol.for("react.memo"), R = /* @__PURE__ */ Symbol.for("react.lazy"), T = /* @__PURE__ */ Symbol.for("react.activity"), C = /* @__PURE__ */ Symbol.for("react.view_transition"), Ol = Symbol.iterator;
  function $l(v) {
    return v === null || typeof v != "object" ? null : (v = Ol && v[Ol] || v["@@iterator"], typeof v == "function" ? v : null);
  }
  var Kl = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, il = Object.assign, gt = {};
  function at(v, _, p) {
    this.props = v, this.context = _, this.refs = gt, this.updater = p || Kl;
  }
  at.prototype.isReactComponent = {}, at.prototype.setState = function(v, _) {
    if (typeof v != "object" && typeof v != "function" && v != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, v, _, "setState");
  }, at.prototype.forceUpdate = function(v) {
    this.updater.enqueueForceUpdate(this, v, "forceUpdate");
  };
  function Ju() {
  }
  Ju.prototype = at.prototype;
  function jt(v, _, p) {
    this.props = v, this.context = _, this.refs = gt, this.updater = p || Kl;
  }
  var xt = jt.prototype = new Ju();
  xt.constructor = jt, il(xt, at.prototype), xt.isPureReactComponent = !0;
  var et = Array.isArray;
  function w() {
  }
  var el = { H: null, A: null, T: null, S: null }, Gt = Object.prototype.hasOwnProperty;
  function St(v, _, p) {
    var B = p.ref;
    return {
      $$typeof: h,
      type: v,
      key: _,
      ref: B !== void 0 ? B : null,
      props: p
    };
  }
  function Tt(v, _) {
    return St(v.type, _, v.props);
  }
  function nt(v) {
    return typeof v == "object" && v !== null && v.$$typeof === h;
  }
  function hu(v) {
    var _ = { "=": "=0", ":": "=2" };
    return "$" + v.replace(/[=:]/g, function(p) {
      return _[p];
    });
  }
  var wu = /\/+/g;
  function Rl(v, _) {
    return typeof v == "object" && v !== null && v.key != null ? hu("" + v.key) : _.toString(36);
  }
  function A(v) {
    switch (v.status) {
      case "fulfilled":
        return v.value;
      case "rejected":
        throw v.reason;
      default:
        switch (typeof v.status == "string" ? v.then(w, w) : (v.status = "pending", v.then(
          function(_) {
            v.status === "pending" && (v.status = "fulfilled", v.value = _);
          },
          function(_) {
            v.status === "pending" && (v.status = "rejected", v.reason = _);
          }
        )), v.status) {
          case "fulfilled":
            return v.value;
          case "rejected":
            throw v.reason;
        }
    }
    throw v;
  }
  function j(v, _, p, B, ll) {
    var tl = typeof v;
    (tl === "undefined" || tl === "boolean") && (v = null);
    var nl = !1;
    if (v === null) nl = !0;
    else
      switch (tl) {
        case "bigint":
        case "string":
        case "number":
          nl = !0;
          break;
        case "object":
          switch (v.$$typeof) {
            case h:
            case z:
              nl = !0;
              break;
            case R:
              return nl = v._init, j(
                nl(v._payload),
                _,
                p,
                B,
                ll
              );
          }
      }
    if (nl)
      return ll = ll(v), nl = B === "" ? "." + Rl(v, 0) : B, et(ll) ? (p = "", nl != null && (p = nl.replace(wu, "$&/") + "/"), j(ll, _, p, "", function(lu) {
        return lu;
      })) : ll != null && (nt(ll) && (ll = Tt(
        ll,
        p + (ll.key == null || v && v.key === ll.key ? "" : ("" + ll.key).replace(
          wu,
          "$&/"
        ) + "/") + nl
      )), _.push(ll)), 1;
    nl = 0;
    var U = B === "" ? "." : B + ":";
    if (et(v))
      for (var X = 0; X < v.length; X++)
        B = v[X], tl = U + Rl(B, X), nl += j(
          B,
          _,
          p,
          tl,
          ll
        );
    else if (X = $l(v), typeof X == "function")
      for (v = X.call(v), X = 0; !(B = v.next()).done; )
        B = B.value, tl = U + Rl(B, X++), nl += j(
          B,
          _,
          p,
          tl,
          ll
        );
    else if (tl === "object") {
      if (typeof v.then == "function")
        return j(
          A(v),
          _,
          p,
          B,
          ll
        );
      throw _ = String(v), Error(
        "Objects are not valid as a React child (found: " + (_ === "[object Object]" ? "object with keys {" + Object.keys(v).join(", ") + "}" : _) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return nl;
  }
  function x(v, _, p) {
    if (v == null) return v;
    var B = [], ll = 0;
    return j(v, B, "", "", function(tl) {
      return _.call(p, tl, ll++);
    }), B;
  }
  function yl(v) {
    if (v._status === -1) {
      var _ = v._result, p = _();
      p.then(
        function(B) {
          (v._status === 0 || v._status === -1) && (v._status = 1, v._result = B, p.status === void 0 && (p.status = "fulfilled", p.value = B));
        },
        function(B) {
          (v._status === 0 || v._status === -1) && (v._status = 2, v._result = B, p.status === void 0 && (p.status = "rejected", p.reason = B));
        }
      ), v._status === -1 && (v._status = 0, v._result = p);
    }
    if (v._status === 1) return v._result.default;
    throw v._result;
  }
  var cl = typeof reportError == "function" ? reportError : function(v) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var _ = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof v == "object" && v !== null && typeof v.message == "string" ? String(v.message) : String(v),
        error: v
      });
      if (!window.dispatchEvent(_)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", v);
      return;
    }
    console.error(v);
  };
  function Ct(v) {
    var _ = el.T, p = {};
    p.types = _ !== null ? _.types : null, el.T = p;
    try {
      var B = v(), ll = el.S;
      ll !== null && ll(p, B), typeof B == "object" && B !== null && typeof B.then == "function" && B.then(w, cl);
    } catch (tl) {
      cl(tl);
    } finally {
      _ !== null && p.types !== null && (_.types = p.types), el.T = _;
    }
  }
  function Pt(v) {
    var _ = el.T;
    if (_ !== null) {
      var p = _.types;
      p === null ? _.types = [v] : p.indexOf(v) === -1 && p.push(v);
    } else Ct(Pt.bind(null, v));
  }
  var Wu = {
    map: x,
    forEach: function(v, _, p) {
      x(
        v,
        function() {
          _.apply(this, arguments);
        },
        p
      );
    },
    count: function(v) {
      var _ = 0;
      return x(v, function() {
        _++;
      }), _;
    },
    toArray: function(v) {
      return x(v, function(_) {
        return _;
      }) || [];
    },
    only: function(v) {
      if (!nt(v))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return v;
    }
  };
  return Q.Activity = T, Q.Children = Wu, Q.Component = at, Q.Fragment = O, Q.Profiler = Y, Q.PureComponent = jt, Q.StrictMode = d, Q.Suspense = J, Q.ViewTransition = C, Q.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = el, Q.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(v) {
      return el.H.useMemoCache(v);
    }
  }, Q.addTransitionType = Pt, Q.cache = function(v) {
    return function() {
      return v.apply(null, arguments);
    };
  }, Q.cacheSignal = function() {
    return null;
  }, Q.cloneElement = function(v, _, p) {
    if (v == null)
      throw Error(
        "The argument must be a React element, but you passed " + v + "."
      );
    var B = il({}, v.props), ll = v.key;
    if (_ != null)
      for (tl in _.key !== void 0 && (ll = "" + _.key), _)
        !Gt.call(_, tl) || tl === "key" || tl === "__self" || tl === "__source" || tl === "ref" && _.ref === void 0 || (B[tl] = _[tl]);
    var tl = arguments.length - 2;
    if (tl === 1) B.children = p;
    else if (1 < tl) {
      for (var nl = Array(tl), U = 0; U < tl; U++)
        nl[U] = arguments[U + 2];
      B.children = nl;
    }
    return St(v.type, ll, B);
  }, Q.createContext = function(v) {
    return v = {
      $$typeof: G,
      _currentValue: v,
      _currentValue2: v,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, v.Provider = v, v.Consumer = {
      $$typeof: Z,
      _context: v
    }, v;
  }, Q.createElement = function(v, _, p) {
    var B, ll = {}, tl = null;
    if (_ != null)
      for (B in _.key !== void 0 && (tl = "" + _.key), _)
        Gt.call(_, B) && B !== "key" && B !== "__self" && B !== "__source" && (ll[B] = _[B]);
    var nl = arguments.length - 2;
    if (nl === 1) ll.children = p;
    else if (1 < nl) {
      for (var U = Array(nl), X = 0; X < nl; X++)
        U[X] = arguments[X + 2];
      ll.children = U;
    }
    if (v && v.defaultProps)
      for (B in nl = v.defaultProps, nl)
        ll[B] === void 0 && (ll[B] = nl[B]);
    return St(v, tl, ll);
  }, Q.createRef = function() {
    return { current: null };
  }, Q.forwardRef = function(v) {
    return { $$typeof: al, render: v };
  }, Q.isValidElement = nt, Q.lazy = function(v) {
    return {
      $$typeof: R,
      _payload: { _status: -1, _result: v },
      _init: yl
    };
  }, Q.memo = function(v, _) {
    return {
      $$typeof: Tl,
      type: v,
      compare: _ === void 0 ? null : _
    };
  }, Q.startTransition = Ct, Q.unstable_useCacheRefresh = function() {
    return el.H.useCacheRefresh();
  }, Q.use = function(v) {
    return el.H.use(v);
  }, Q.useActionState = function(v, _, p) {
    return el.H.useActionState(v, _, p);
  }, Q.useCallback = function(v, _) {
    return el.H.useCallback(v, _);
  }, Q.useContext = function(v) {
    return el.H.useContext(v);
  }, Q.useDebugValue = function() {
  }, Q.useDeferredValue = function(v, _) {
    return el.H.useDeferredValue(v, _);
  }, Q.useEffect = function(v, _) {
    return el.H.useEffect(v, _);
  }, Q.useEffectEvent = function(v) {
    return el.H.useEffectEvent(v);
  }, Q.useId = function() {
    return el.H.useId();
  }, Q.useImperativeHandle = function(v, _, p) {
    return el.H.useImperativeHandle(v, _, p);
  }, Q.useInsertionEffect = function(v, _) {
    return el.H.useInsertionEffect(v, _);
  }, Q.useLayoutEffect = function(v, _) {
    return el.H.useLayoutEffect(v, _);
  }, Q.useMemo = function(v, _) {
    return el.H.useMemo(v, _);
  }, Q.useOptimistic = function(v, _) {
    return el.H.useOptimistic(v, _);
  }, Q.useReducer = function(v, _, p) {
    return el.H.useReducer(v, _, p);
  }, Q.useRef = function(v) {
    return el.H.useRef(v);
  }, Q.useState = function(v) {
    return el.H.useState(v);
  }, Q.useSyncExternalStore = function(v, _, p) {
    return el.H.useSyncExternalStore(
      v,
      _,
      p
    );
  }, Q.useTransition = function() {
    return el.H.useTransition();
  }, Q.version = "19.3.0", Q;
}
var fs;
function Ro() {
  return fs || (fs = 1, No.exports = S1()), No.exports;
}
var qt = Ro();
const T1 = /* @__PURE__ */ m1(qt);
var Ao = { exports: {} }, nn = {}, Mo = { exports: {} }, Do = {};
var is;
function b1() {
  return is || (is = 1, (function(h) {
    function z(A, j) {
      var x = A.length;
      A.push(j);
      l: for (; 0 < x; ) {
        var yl = x - 1 >>> 1, cl = A[yl];
        if (0 < Y(cl, j))
          A[yl] = j, A[x] = cl, x = yl;
        else break l;
      }
    }
    function O(A) {
      return A.length === 0 ? null : A[0];
    }
    function d(A) {
      if (A.length === 0) return null;
      var j = A[0], x = A.pop();
      if (x !== j) {
        A[0] = x;
        l: for (var yl = 0, cl = A.length, Ct = cl >>> 1; yl < Ct; ) {
          var Pt = 2 * (yl + 1) - 1, Wu = A[Pt], v = Pt + 1, _ = A[v];
          if (0 > Y(Wu, x))
            v < cl && 0 > Y(_, Wu) ? (A[yl] = _, A[v] = x, yl = v) : (A[yl] = Wu, A[Pt] = x, yl = Pt);
          else if (v < cl && 0 > Y(_, x))
            A[yl] = _, A[v] = x, yl = v;
          else break l;
        }
      }
      return j;
    }
    function Y(A, j) {
      var x = A.sortIndex - j.sortIndex;
      return x !== 0 ? x : A.id - j.id;
    }
    if (h.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var Z = performance;
      h.unstable_now = function() {
        return Z.now();
      };
    } else {
      var G = Date, al = G.now();
      h.unstable_now = function() {
        return G.now() - al;
      };
    }
    var J = [], Tl = [], R = 1, T = null, C = 3, Ol = !1, $l = !1, Kl = !1, il = !1, gt = typeof setTimeout == "function" ? setTimeout : null, at = typeof clearTimeout == "function" ? clearTimeout : null, Ju = typeof setImmediate < "u" ? setImmediate : null;
    function jt(A) {
      for (var j = O(Tl); j !== null; ) {
        if (j.callback === null) d(Tl);
        else if (j.startTime <= A)
          d(Tl), j.sortIndex = j.expirationTime, z(J, j);
        else break;
        j = O(Tl);
      }
    }
    function xt(A) {
      if (Kl = !1, jt(A), !$l)
        if (O(J) !== null)
          $l = !0, et || (et = !0, nt());
        else {
          var j = O(Tl);
          j !== null && Rl(xt, j.startTime - A);
        }
    }
    var et = !1, w = -1, el = 5, Gt = -1;
    function St() {
      return il ? !0 : !(h.unstable_now() - Gt < el);
    }
    function Tt() {
      if (il = !1, et) {
        var A = h.unstable_now();
        Gt = A;
        var j = !0;
        try {
          l: {
            $l = !1, Kl && (Kl = !1, at(w), w = -1), Ol = !0;
            var x = C;
            try {
              t: {
                for (jt(A), T = O(J); T !== null && !(T.expirationTime > A && St()); ) {
                  var yl = T.callback;
                  if (typeof yl == "function") {
                    T.callback = null, C = T.priorityLevel;
                    var cl = yl(
                      T.expirationTime <= A
                    );
                    if (A = h.unstable_now(), typeof cl == "function") {
                      T.callback = cl, jt(A), j = !0;
                      break t;
                    }
                    T === O(J) && d(J), jt(A);
                  } else d(J);
                  T = O(J);
                }
                if (T !== null) j = !0;
                else {
                  var Ct = O(Tl);
                  Ct !== null && Rl(
                    xt,
                    Ct.startTime - A
                  ), j = !1;
                }
              }
              break l;
            } finally {
              T = null, C = x, Ol = !1;
            }
            j = void 0;
          }
        } finally {
          j ? nt() : et = !1;
        }
      }
    }
    var nt;
    if (typeof Ju == "function")
      nt = function() {
        Ju(Tt);
      };
    else if (typeof MessageChannel < "u") {
      var hu = new MessageChannel(), wu = hu.port2;
      hu.port1.onmessage = Tt, nt = function() {
        wu.postMessage(null);
      };
    } else
      nt = function() {
        gt(Tt, 0);
      };
    function Rl(A, j) {
      w = gt(function() {
        A(h.unstable_now());
      }, j);
    }
    h.unstable_IdlePriority = 5, h.unstable_ImmediatePriority = 1, h.unstable_LowPriority = 4, h.unstable_NormalPriority = 3, h.unstable_Profiling = null, h.unstable_UserBlockingPriority = 2, h.unstable_cancelCallback = function(A) {
      A.callback = null;
    }, h.unstable_forceFrameRate = function(A) {
      0 > A || 125 < A ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : el = 0 < A ? Math.floor(1e3 / A) : 5;
    }, h.unstable_getCurrentPriorityLevel = function() {
      return C;
    }, h.unstable_next = function(A) {
      switch (C) {
        case 1:
        case 2:
        case 3:
          var j = 3;
          break;
        default:
          j = C;
      }
      var x = C;
      C = j;
      try {
        return A();
      } finally {
        C = x;
      }
    }, h.unstable_requestPaint = function() {
      il = !0;
    }, h.unstable_runWithPriority = function(A, j) {
      switch (A) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          A = 3;
      }
      var x = C;
      C = A;
      try {
        return j();
      } finally {
        C = x;
      }
    }, h.unstable_scheduleCallback = function(A, j, x) {
      var yl = h.unstable_now();
      switch (typeof x == "object" && x !== null ? (x = x.delay, x = typeof x == "number" && 0 < x ? yl + x : yl) : x = yl, A) {
        case 1:
          var cl = -1;
          break;
        case 2:
          cl = 250;
          break;
        case 5:
          cl = 1073741823;
          break;
        case 4:
          cl = 1e4;
          break;
        default:
          cl = 5e3;
      }
      return cl = x + cl, A = {
        id: R++,
        callback: j,
        priorityLevel: A,
        startTime: x,
        expirationTime: cl,
        sortIndex: -1
      }, x > yl ? (A.sortIndex = x, z(Tl, A), O(J) === null && A === O(Tl) && (Kl ? (at(w), w = -1) : Kl = !0, Rl(xt, x - yl))) : (A.sortIndex = cl, z(J, A), $l || Ol || ($l = !0, et || (et = !0, nt()))), A;
    }, h.unstable_shouldYield = St, h.unstable_wrapCallback = function(A) {
      var j = C;
      return function() {
        var x = C;
        C = j;
        try {
          return A.apply(this, arguments);
        } finally {
          C = x;
        }
      };
    };
  })(Do)), Do;
}
var cs;
function E1() {
  return cs || (cs = 1, Mo.exports = b1()), Mo.exports;
}
var Co = { exports: {} }, Vl = {};
var os;
function z1() {
  if (os) return Vl;
  os = 1;
  var h = Ro();
  function z(R) {
    var T = "https://react.dev/errors/" + R;
    if (1 < arguments.length) {
      T += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var C = 2; C < arguments.length; C++)
        T += "&args[]=" + encodeURIComponent(arguments[C]);
    }
    return "Minified React error #" + R + "; visit " + T + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function O() {
  }
  var d = {
    d: {
      f: O,
      r: function() {
        throw Error(z(522));
      },
      D: O,
      C: O,
      L: O,
      m: O,
      X: O,
      S: O,
      M: O
    },
    p: 0,
    findDOMNode: null
  }, Y = /* @__PURE__ */ Symbol.for("react.portal"), Z = /* @__PURE__ */ Symbol.for("react.recoverable"), G = /* @__PURE__ */ Symbol.for("react.optimistic_key");
  function al(R, T, C) {
    var Ol = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: Y,
      key: Ol == null ? null : Ol === G ? G : "" + Ol,
      children: R,
      containerInfo: T,
      implementation: C
    };
  }
  var J = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function Tl(R, T) {
    if (R === "font") return "";
    if (typeof T == "string")
      return T === "use-credentials" ? T : "";
  }
  return Vl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = d, Vl.browser = function(R) {
    return { $$typeof: Z, _reason: R };
  }, Vl.createPortal = function(R, T) {
    var C = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!T || T.nodeType !== 1 && T.nodeType !== 9 && T.nodeType !== 11)
      throw Error(z(299));
    return al(R, T, null, C);
  }, Vl.flushSync = function(R) {
    var T = J.T, C = d.p;
    try {
      if (J.T = null, d.p = 2, R) return R();
    } finally {
      J.T = T, d.p = C, d.d.f();
    }
  }, Vl.preconnect = function(R, T) {
    typeof R == "string" && (T ? (T = T.crossOrigin, T = typeof T == "string" ? T === "use-credentials" ? T : "" : void 0) : T = null, d.d.C(R, T));
  }, Vl.prefetchDNS = function(R) {
    typeof R == "string" && d.d.D(R);
  }, Vl.preinit = function(R, T) {
    if (typeof R == "string" && T && typeof T.as == "string") {
      var C = T.as, Ol = Tl(C, T.crossOrigin), $l = typeof T.integrity == "string" ? T.integrity : void 0, Kl = typeof T.fetchPriority == "string" ? T.fetchPriority : void 0;
      C === "style" ? d.d.S(
        R,
        typeof T.precedence == "string" ? T.precedence : void 0,
        {
          crossOrigin: Ol,
          integrity: $l,
          fetchPriority: Kl
        }
      ) : C === "script" && d.d.X(R, {
        crossOrigin: Ol,
        integrity: $l,
        fetchPriority: Kl,
        nonce: typeof T.nonce == "string" ? T.nonce : void 0
      });
    }
  }, Vl.preinitModule = function(R, T) {
    if (typeof R == "string")
      if (typeof T == "object" && T !== null) {
        if (T.as == null || T.as === "script") {
          var C = Tl(
            T.as,
            T.crossOrigin
          );
          d.d.M(R, {
            crossOrigin: C,
            integrity: typeof T.integrity == "string" ? T.integrity : void 0,
            nonce: typeof T.nonce == "string" ? T.nonce : void 0,
            fetchPriority: typeof T.fetchPriority == "string" ? T.fetchPriority : void 0
          });
        }
      } else T == null && d.d.M(R);
  }, Vl.preload = function(R, T) {
    if (typeof R == "string" && typeof T == "object" && T !== null && typeof T.as == "string") {
      var C = T.as, Ol = Tl(C, T.crossOrigin);
      d.d.L(R, C, {
        crossOrigin: Ol,
        integrity: typeof T.integrity == "string" ? T.integrity : void 0,
        nonce: typeof T.nonce == "string" ? T.nonce : void 0,
        type: typeof T.type == "string" ? T.type : void 0,
        fetchPriority: typeof T.fetchPriority == "string" ? T.fetchPriority : void 0,
        referrerPolicy: typeof T.referrerPolicy == "string" ? T.referrerPolicy : void 0,
        imageSrcSet: typeof T.imageSrcSet == "string" ? T.imageSrcSet : void 0,
        imageSizes: typeof T.imageSizes == "string" ? T.imageSizes : void 0,
        media: typeof T.media == "string" ? T.media : void 0
      });
    }
  }, Vl.preloadModule = function(R, T) {
    if (typeof R == "string")
      if (T) {
        var C = Tl(T.as, T.crossOrigin);
        d.d.m(R, {
          as: typeof T.as == "string" && T.as !== "script" ? T.as : void 0,
          crossOrigin: C,
          integrity: typeof T.integrity == "string" ? T.integrity : void 0,
          nonce: typeof T.nonce == "string" ? T.nonce : void 0,
          fetchPriority: typeof T.fetchPriority == "string" ? T.fetchPriority : void 0
        });
      } else d.d.m(R);
  }, Vl.requestFormReset = function(R) {
    d.d.r(R);
  }, Vl.unstable_batchedUpdates = function(R, T) {
    return R(T);
  }, Vl.useFormState = function(R, T, C) {
    return J.H.useFormState(R, T, C);
  }, Vl.useFormStatus = function() {
    return J.H.useHostTransitionStatus();
  }, Vl.version = "19.3.0", Vl;
}
var vs;
function _1() {
  if (vs) return Co.exports;
  vs = 1;
  function h() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(h);
      } catch (z) {
        console.error(z);
      }
  }
  return h(), Co.exports = z1(), Co.exports;
}
var rs;
function O1() {
  if (rs) return nn;
  rs = 1;
  var h = E1(), z = Ro(), O = _1();
  function d(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var u = 2; u < arguments.length; u++)
        t += "&args[]=" + encodeURIComponent(arguments[u]);
    }
    return "Minified React error #" + l + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function Y(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function Z(l) {
    for (var t = l, u = t; u && !u.alternate; )
      t = u, (t.flags & 4098) !== 0 && (l = t.return), u = t.return;
    for (; t.return; ) t = t.return;
    return t.tag === 3 ? l : null;
  }
  function G(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function al(l) {
    if (l.tag === 31) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function J(l) {
    if (Z(l) !== l)
      throw Error(d(188));
  }
  function Tl(l) {
    var t = l.alternate;
    if (!t) {
      if (t = Z(l), t === null) throw Error(d(188));
      return t !== l ? null : l;
    }
    for (var u = l, a = t; ; ) {
      var e = u.return;
      if (e === null) break;
      var n = e.alternate;
      if (n === null) {
        if (a = e.return, a !== null) {
          u = a;
          continue;
        }
        break;
      }
      if (e.child === n.child) {
        for (n = e.child; n; ) {
          if (n === u) return J(e), l;
          if (n === a) return J(e), t;
          n = n.sibling;
        }
        throw Error(d(188));
      }
      if (u.return !== a.return) u = e, a = n;
      else {
        for (var f = !1, i = e.child; i; ) {
          if (i === u) {
            f = !0, u = e, a = n;
            break;
          }
          if (i === a) {
            f = !0, a = e, u = n;
            break;
          }
          i = i.sibling;
        }
        if (!f) {
          for (i = n.child; i; ) {
            if (i === u) {
              f = !0, u = n, a = e;
              break;
            }
            if (i === a) {
              f = !0, a = n, u = e;
              break;
            }
            i = i.sibling;
          }
          if (!f) throw Error(d(189));
        }
      }
      if (u.alternate !== a) throw Error(d(190));
    }
    if (u.tag !== 3) throw Error(d(188));
    return u.stateNode.current === u ? l : t;
  }
  function R(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null; ) {
      if (t = R(l), t !== null) return t;
      l = l.sibling;
    }
    return null;
  }
  function T(l, t, u, a, e, n) {
    for (; l !== null; ) {
      if ((l.tag === 5 || l.tag === 27 || l.tag === 6) && u(l, a, e, n) || (l.tag !== 22 || l.memoizedState === null) && (t || l.tag !== 5 && l.tag !== 27) && T(
        l.child,
        t,
        u,
        a,
        e,
        n
      ))
        return !0;
      l = l.sibling;
    }
    return !1;
  }
  function C(l) {
    for (l = l.return; l !== null; ) {
      if (l.tag === 3 || l.tag === 5 || l.tag === 27) return l;
      l = l.return;
    }
    return null;
  }
  function Ol(l) {
    var t = !1;
    for (l = l.return; l !== null && (l.tag === 4 && (t = !0), !(l.tag === 3 || l.tag === 5 || l.tag === 27)); )
      l = l.return;
    return t;
  }
  function $l(l) {
    var t = [null, null], u = C(l);
    return u === null || Kl(
      t,
      l,
      u.child,
      { foundSelf: !1 }
    ), t;
  }
  function Kl(l, t, u, a) {
    for (; u !== null; ) {
      if (u === t) a.foundSelf = !0;
      else if (u.tag === 5 || u.tag === 27 || u.tag === 6) {
        if (a.foundSelf) return l[1] = u, !0;
        l[0] = u;
      } else if ((u.tag !== 22 || u.memoizedState === null) && Kl(
        l,
        t,
        u.child,
        a
      ))
        return !0;
      u = u.sibling;
    }
    return !1;
  }
  function il(l) {
    switch (l.tag) {
      case 5:
      case 27:
      case 6:
        return l.stateNode;
      case 3:
        return l.stateNode.containerInfo;
      default:
        throw Error(d(559));
    }
  }
  var gt = null, at = null;
  function Ju(l, t, u) {
    return l === u ? !0 : l === t ? (gt = l, !0) : !1;
  }
  function jt(l, t, u) {
    return l === u ? (at = l, !1) : l === t ? (at !== null && (gt = l), !0) : !1;
  }
  function xt(l) {
    if (l === null) return null;
    do
      l = l === null ? null : l.return;
    while (l && l.tag !== 5 && l.tag !== 27 && l.tag !== 3);
    return l || null;
  }
  function et(l, t, u) {
    for (var a = 0, e = l; e; e = u(e)) a++;
    e = 0;
    for (var n = t; n; n = u(n)) e++;
    for (; 0 < a - e; ) l = u(l), a--;
    for (; 0 < e - a; ) t = u(t), e--;
    for (; a--; ) {
      if (l === t || t !== null && l === t.alternate)
        return l;
      l = u(l), t = u(t);
    }
    return null;
  }
  var w = Object.assign, el = /* @__PURE__ */ Symbol.for("react.element"), Gt = /* @__PURE__ */ Symbol.for("react.transitional.element"), St = /* @__PURE__ */ Symbol.for("react.portal"), Tt = /* @__PURE__ */ Symbol.for("react.fragment"), nt = /* @__PURE__ */ Symbol.for("react.strict_mode"), hu = /* @__PURE__ */ Symbol.for("react.profiler"), wu = /* @__PURE__ */ Symbol.for("react.consumer"), Rl = /* @__PURE__ */ Symbol.for("react.context"), A = /* @__PURE__ */ Symbol.for("react.forward_ref"), j = /* @__PURE__ */ Symbol.for("react.suspense"), x = /* @__PURE__ */ Symbol.for("react.suspense_list"), yl = /* @__PURE__ */ Symbol.for("react.memo"), cl = /* @__PURE__ */ Symbol.for("react.lazy"), Ct = /* @__PURE__ */ Symbol.for("react.activity"), Pt = /* @__PURE__ */ Symbol.for("react.legacy_hidden"), Wu = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), v = /* @__PURE__ */ Symbol.for("react.view_transition"), _ = /* @__PURE__ */ Symbol.for("react.recoverable"), p = Symbol.iterator;
  function B(l) {
    return l === null || typeof l != "object" ? null : (l = p && l[p] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var ll = /* @__PURE__ */ Symbol.for("react.client.reference");
  function tl(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === ll ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case Tt:
        return "Fragment";
      case hu:
        return "Profiler";
      case nt:
        return "StrictMode";
      case j:
        return "Suspense";
      case x:
        return "SuspenseList";
      case Ct:
        return "Activity";
      case v:
        return "ViewTransition";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case St:
          return "Portal";
        case Rl:
          return l.displayName || "Context";
        case wu:
          return (l._context.displayName || "Context") + ".Consumer";
        case A:
          var t = l.render;
          return l = l.displayName, l || (l = t.displayName || t.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case yl:
          return t = l.displayName || null, t !== null ? t : tl(l.type) || "Memo";
        case cl:
          t = l._payload, l = l._init;
          try {
            return tl(l(t));
          } catch {
          }
      }
    return null;
  }
  var nl = Array.isArray, U = z.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, X = O.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, lu = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, Zf = [], Sa = -1;
  function Xt(l) {
    return { current: l };
  }
  function ql(l) {
    0 > Sa || (l.current = Zf[Sa], Zf[Sa] = null, Sa--);
  }
  function hl(l, t) {
    Sa++, Zf[Sa] = l.current, l.current = t;
  }
  var Qt = Xt(null), ve = Xt(null), gu = Xt(null), fn = Xt(null);
  function cn(l, t) {
    switch (hl(gu, t), hl(ve, l), hl(Qt, null), t.nodeType) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? dd(l) : 0;
        break;
      default:
        if (l = t.tagName, t = t.namespaceURI)
          t = dd(t), l = sd(t, l);
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
    ql(Qt), hl(Qt, l);
  }
  function Ta() {
    ql(Qt), ql(ve), ql(gu);
  }
  function Vf(l) {
    var t = l.memoizedState;
    t !== null && (fe._currentValue = t.memoizedState, hl(fn, l)), t = Qt.current;
    var u = sd(t, l.type);
    t !== u && (hl(ve, l), hl(Qt, u));
  }
  function on(l) {
    ve.current === l && (ql(Qt), ql(ve)), fn.current === l && (ql(fn), fe._currentValue = lu);
  }
  var Lf, po;
  function Su(l) {
    if (Lf === void 0)
      try {
        throw Error();
      } catch (u) {
        var t = u.stack.trim().match(/\n( *(at )?)/);
        Lf = t && t[1] || "", po = -1 < u.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < u.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Lf + l + po;
  }
  var Kf = !1;
  function Jf(l, t) {
    if (!l || Kf) return "";
    Kf = !0;
    var u = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var E = function() {
                throw Error();
              };
              if (Object.defineProperty(E.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(E, []);
                } catch (N) {
                  var r = N;
                }
                Reflect.construct(l, [], E);
              } else {
                try {
                  E.call();
                } catch (N) {
                  r = N;
                }
                E = !1;
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
                  }), E = !0, new l();
                } finally {
                  E && (g !== void 0 ? Object.defineProperty(l.prototype, "props", g) : delete l.prototype.props);
                }
              }
            } else {
              try {
                throw Error();
              } catch (N) {
                r = N;
              }
              (E = l()) && typeof E.catch == "function" && E.catch(function() {
              });
            }
          } catch (N) {
            if (N && r && typeof N.stack == "string")
              return [N.stack, r.stack];
          }
          return [null, null];
        }
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var e = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      e && e.configurable && Object.defineProperty(
        a.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var n = a.DetermineComponentFrameRoot(), f = n[0], i = n[1];
      if (f && i) {
        var c = f.split(`
`), y = i.split(`
`);
        for (e = a = 0; a < c.length && !c[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; e < y.length && !y[e].includes(
          "DetermineComponentFrameRoot"
        ); )
          e++;
        if (a === c.length || e === y.length)
          for (a = c.length - 1, e = y.length - 1; 1 <= a && 0 <= e && c[a] !== y[e]; )
            e--;
        for (; 1 <= a && 0 <= e; a--, e--)
          if (c[a] !== y[e]) {
            if (a !== 1 || e !== 1)
              do
                if (a--, e--, 0 > e || c[a] !== y[e]) {
                  var S = `
` + c[a].replace(" at new ", " at ");
                  return l.displayName && S.includes("<anonymous>") && (S = S.replace("<anonymous>", l.displayName)), S;
                }
              while (1 <= a && 0 <= e);
            break;
          }
      }
    } finally {
      Kf = !1, Error.prepareStackTrace = u;
    }
    return (u = l ? l.displayName || l.name : "") ? Su(u) : "";
  }
  function Ts(l, t) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return Su(l.type);
      case 16:
        return Su("Lazy");
      case 13:
        return l.child !== t && t !== null ? Su("Suspense Fallback") : Su("Suspense");
      case 19:
        return Su("SuspenseList");
      case 0:
      case 15:
        return Jf(l.type, !1);
      case 11:
        return Jf(l.type.render, !1);
      case 1:
        return Jf(l.type, !0);
      case 31:
        return Su("Activity");
      case 30:
        return Su("ViewTransition");
      default:
        return "";
    }
  }
  function Bo(l) {
    try {
      var t = "", u = null;
      do
        t += Ts(l, u), u = l, l = l.return;
      while (l);
      return t;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var wf = Object.prototype.hasOwnProperty, Wf = h.unstable_scheduleCallback, Ff = h.unstable_cancelCallback, bs = h.unstable_shouldYield, Es = h.unstable_requestPaint, ft = h.unstable_now, zs = h.unstable_getCurrentPriorityLevel, Yo = h.unstable_ImmediatePriority, qo = h.unstable_UserBlockingPriority, vn = h.unstable_NormalPriority, _s = h.unstable_LowPriority, jo = h.unstable_IdlePriority, Os = h.log, Ns = h.unstable_setDisableYieldValue, re = null, it = null;
  function Tu(l) {
    if (typeof Os == "function" && Ns(l), it && typeof it.setStrictMode == "function")
      try {
        it.setStrictMode(re, l);
      } catch {
      }
  }
  var ct = Math.clz32 ? Math.clz32 : Ds, As = Math.log, Ms = Math.LN2;
  function Ds(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (As(l) / Ms | 0) | 0;
  }
  var rn = 256, dn = 262144, sn = 4194304;
  function Fu(l) {
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
  function yn(l, t, u) {
    var a = l.pendingLanes;
    if (a === 0) return 0;
    var e = 0, n = l.suspendedLanes, f = l.pingedLanes;
    l = l.warmLanes;
    var i = a & 134217727;
    return i !== 0 ? (a = i & ~n, a !== 0 ? e = Fu(a) : (f &= i, f !== 0 ? e = Fu(f) : u || (u = i & ~l, u !== 0 && (e = Fu(u))))) : (i = a & ~n, i !== 0 ? e = Fu(i) : f !== 0 ? e = Fu(f) : u || (u = a & ~l, u !== 0 && (e = Fu(u)))), e === 0 ? 0 : t !== 0 && t !== e && (t & n) === 0 && (n = e & -e, u = t & -t, n >= u || n === 32 && (u & 4194048) !== 0) ? t : e;
  }
  function de(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function xo(l, t) {
    (t & 8) !== 0 && (t |= t & 32);
    var u = l.entangledLanes;
    if (u !== 0)
      for (l = l.entanglements, u &= t; 0 < u; ) {
        var a = 31 - ct(u), e = 1 << a;
        t |= l[a], u &= ~e;
      }
    return t;
  }
  function Cs(l, t) {
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
  function Go() {
    var l = sn;
    return sn <<= 1, (sn & 62914560) === 0 && (sn = 4194304), l;
  }
  function $f(l) {
    for (var t = [], u = 0; 31 > u; u++) t.push(l);
    return t;
  }
  function se(l, t) {
    l.pendingLanes |= t, t !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function Us(l, t, u, a, e, n) {
    var f = l.pendingLanes;
    l.pendingLanes = u, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= u, l.entangledLanes &= u, l.errorRecoveryDisabledLanes &= u, l.shellSuspendCounter = 0;
    var i = l.entanglements, c = l.expirationTimes, y = l.hiddenUpdates;
    for (u = f & ~u; 0 < u; ) {
      var S = 31 - ct(u), E = 1 << S;
      i[S] = 0, c[S] = -1;
      var r = y[S];
      if (r !== null)
        for (y[S] = null, S = 0; S < r.length; S++) {
          var g = r[S];
          g !== null && (g.lane &= -536870913);
        }
      u &= ~E;
    }
    a !== 0 && Xo(l, a, 0), n !== 0 && e === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(f & ~t));
  }
  function Xo(l, t, u) {
    l.pendingLanes |= t, l.suspendedLanes &= ~t;
    var a = 31 - ct(t);
    l.entangledLanes |= t, l.entanglements[a] = l.entanglements[a] | 1073741824 | u & 261930;
  }
  function Qo(l, t) {
    var u = l.entangledLanes |= t;
    for (l = l.entanglements; u; ) {
      var a = 31 - ct(u), e = 1 << a;
      e & t | l[a] & t && (l[a] |= t), u &= ~e;
    }
  }
  function Zo(l, t) {
    var u = t & -t;
    return u = (u & 42) !== 0 ? 1 : If(u), (u & (l.suspendedLanes | t)) !== 0 ? 0 : u;
  }
  function If(l) {
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
  function kf(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Vo() {
    var l = X.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : $d(l.type));
  }
  function Lo(l, t) {
    var u = X.p;
    try {
      return X.p = l, t();
    } finally {
      X.p = u;
    }
  }
  var tu = Math.random().toString(36).slice(2), jl = "__reactFiber$" + tu, Il = "__reactProps$" + tu, ba = "__reactContainer$" + tu, Ko = "__reactEvents$" + tu, Rs = "__reactListeners$" + tu, Hs = "__reactHandles$" + tu, Jo = "__reactResources$" + tu, ye = "__reactMarker$" + tu, mn = "__reactLoad$" + tu;
  function hn(l) {
    delete l[jl], delete l[Il], delete l[Rs], delete l[Hs];
  }
  function $u(l) {
    var t;
    if (t = l[jl]) return t;
    for (var u = l.parentNode; u; ) {
      if (t = u[ba] || u[jl]) {
        if (u = t.alternate, t.child !== null || u !== null && u.child !== null)
          for (l = Ud(l); l !== null; ) {
            if (u = l[jl]) return u;
            l = Ud(l);
          }
        return t;
      }
      l = u, u = l.parentNode;
    }
    return null;
  }
  function Ea(l) {
    if (l = l[jl] || l[ba]) {
      var t = l.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return l;
    }
    return null;
  }
  function me(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(d(33));
  }
  function za(l) {
    var t = l[Jo];
    return t || (t = l[Jo] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function Hl(l) {
    l[ye] = !0;
  }
  function wo(l) {
    l[mn] = void 0;
  }
  var Wo = /* @__PURE__ */ new Set(), Fo = {};
  function Iu(l, t) {
    _a(l, t), _a(l + "Capture", t);
  }
  function _a(l, t) {
    for (Fo[l] = t, l = 0; l < t.length; l++)
      Wo.add(t[l]);
  }
  var ps = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), $o = {}, Io = {};
  function Bs(l) {
    return wf.call(Io, l) ? !0 : wf.call($o, l) ? !1 : ps.test(l) ? Io[l] = !0 : ($o[l] = !0, !1);
  }
  var ul = !1;
  function ko() {
    var l = ul;
    return ul = !1, l;
  }
  function gn(l, t, u) {
    if (Bs(t))
      if (u === null) l.removeAttribute(t);
      else {
        switch (typeof u) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(t);
            return;
          case "boolean":
            var a = t.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              l.removeAttribute(t);
              return;
            }
        }
        l.setAttribute(t, u);
      }
  }
  function Sn(l, t, u) {
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
  function uu(l, t, u, a) {
    if (a === null) l.removeAttribute(u);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(u);
          return;
      }
      l.setAttributeNS(t, u, a);
    }
  }
  function ot(l) {
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
  function Po(l) {
    var t = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Ys(l, t, u) {
    var a = Object.getOwnPropertyDescriptor(
      l.constructor.prototype,
      t
    );
    if (!l.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var e = a.get, n = a.set;
      return Object.defineProperty(l, t, {
        configurable: !0,
        get: function() {
          return e.call(this);
        },
        set: function(f) {
          u = "" + f, n.call(this, f);
        }
      }), Object.defineProperty(l, t, {
        enumerable: a.enumerable
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
  function Pf(l) {
    if (!l._valueTracker) {
      var t = Po(l) ? "checked" : "value";
      l._valueTracker = Ys(
        l,
        t,
        "" + l[t]
      );
    }
  }
  function l0(l) {
    if (!l) return !1;
    var t = l._valueTracker;
    if (!t) return !0;
    var u = t.getValue(), a = "";
    return l && (a = Po(l) ? l.checked ? "true" : "false" : l.value), l = a, l !== u ? (t.setValue(l), !0) : !1;
  }
  var qs = /[\n"\\]/g;
  function bt(l) {
    return l.replace(
      qs,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function li(l, t, u, a, e, n, f, i) {
    l.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? l.type = f : l.removeAttribute("type"), t != null ? f === "number" ? (t === 0 && l.value === "" || l.value != t) && (l.value = "" + ot(t)) : l.value !== "" + ot(t) && (l.value = "" + ot(t)) : f !== "submit" && f !== "reset" || l.removeAttribute("value"), t != null ? f === "number" && l.value == t ? ti(l, ot(l.value)) : ti(l, ot(t)) : u != null ? ti(l, ot(u)) : a != null && l.removeAttribute("value"), e == null && n != null && (l.defaultChecked = !!n), e != null && (l.checked = e && typeof e != "function" && typeof e != "symbol"), i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? l.name = "" + ot(i) : l.removeAttribute("name");
  }
  function t0(l, t, u, a, e, n, f, i) {
    if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (l.type = n), t != null || u != null) {
      if (!(n !== "submit" && n !== "reset" || t != null)) {
        Pf(l);
        return;
      }
      u = u != null ? "" + ot(u) : "", t = t != null ? "" + ot(t) : u, i || t === l.value || (l.value = t), l.defaultValue = t;
    }
    a = a ?? e, a = typeof a != "function" && typeof a != "symbol" && !!a, l.checked = i ? l.checked : !!a, l.defaultChecked = !!a, f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (l.name = f), Pf(l);
  }
  function ti(l, t) {
    l.defaultValue !== "" + t && (l.defaultValue = "" + t);
  }
  function Oa(l, t, u, a) {
    if (l = l.options, t) {
      t = {};
      for (var e = 0; e < u.length; e++)
        t["$" + u[e]] = !0;
      for (u = 0; u < l.length; u++)
        e = t.hasOwnProperty("$" + l[u].value), l[u].selected !== e && (l[u].selected = e), e && a && (l[u].defaultSelected = !0);
    } else {
      for (u = "" + ot(u), t = null, e = 0; e < l.length; e++) {
        if (l[e].value === u) {
          l[e].selected = !0, a && (l[e].defaultSelected = !0);
          return;
        }
        t !== null || l[e].disabled || (t = l[e]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function u0(l, t, u) {
    if (t != null && (t = "" + ot(t), t !== l.value && (l.value = t), u == null)) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = u != null ? "" + ot(u) : "";
  }
  function a0(l, t, u, a) {
    if (t == null) {
      if (a != null) {
        if (u != null) throw Error(d(92));
        if (nl(a)) {
          if (1 < a.length) throw Error(d(93));
          a = a[0];
        }
        u = a;
      }
      u == null && (u = ""), t = u;
    }
    u = ot(t), l.defaultValue = u, a = l.textContent, a === u && a !== "" && a !== null && (l.value = a), Pf(l);
  }
  function Na(l, t) {
    if (t) {
      var u = l.firstChild;
      if (u && u === l.lastChild && u.nodeType === 3) {
        u.nodeValue = t;
        return;
      }
    }
    l.textContent = t;
  }
  var js = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function e0(l, t, u) {
    var a = t.indexOf("--") === 0;
    u == null || typeof u == "boolean" || u === "" ? a ? l.setProperty(t, "") : t === "float" ? l.cssFloat = "" : l[t] = "" : a ? l.setProperty(t, u) : typeof u != "number" || u === 0 || js.has(t) ? t === "float" ? l.cssFloat = u : l[t] = ("" + u).trim() : l[t] = u + "px";
  }
  function n0(l, t, u) {
    if (t != null && typeof t != "object")
      throw Error(d(62));
    if (l = l.style, u != null) {
      for (var a in u)
        !u.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? l.setProperty(a, "") : a === "float" ? l.cssFloat = "" : l[a] = "", ul = !0);
      for (var e in t)
        a = t[e], t.hasOwnProperty(e) && u[e] !== a && (e0(l, e, a), ul = !0);
    } else
      for (var n in t)
        t.hasOwnProperty(n) && e0(l, n, t[n]);
  }
  function ui(l) {
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
  var xs = /* @__PURE__ */ new Map([
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
  ]), Gs = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Tn(l) {
    return Gs.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  function Zt() {
  }
  var ai = null;
  function ei(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var Aa = null, Ma = null;
  function f0(l) {
    var t = Ea(l);
    if (t && (l = t.stateNode)) {
      var u = l[Il] || null;
      l: switch (l = t.stateNode, t.type) {
        case "input":
          if (li(
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
              'input[name="' + bt(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < u.length; t++) {
              var a = u[t];
              if (a !== l && a.form === l.form) {
                var e = a[Il] || null;
                if (!e) throw Error(d(90));
                li(
                  a,
                  e.value,
                  e.defaultValue,
                  e.defaultValue,
                  e.checked,
                  e.defaultChecked,
                  e.type,
                  e.name
                );
              }
            }
            for (t = 0; t < u.length; t++)
              a = u[t], a.form === l.form && l0(a);
          }
          break l;
        case "textarea":
          u0(l, u.value, u.defaultValue);
          break l;
        case "select":
          t = u.value, t != null && Oa(l, !!u.multiple, t, !1);
      }
    }
  }
  var ni = !1;
  function i0(l, t, u) {
    if (ni) return l(t, u);
    ni = !0;
    try {
      var a = l(t);
      return a;
    } finally {
      if (ni = !1, (Aa !== null || Ma !== null) && (bf(), Aa && (t = Aa, l = Ma, Ma = Aa = null, f0(t), l)))
        for (t = 0; t < l.length; t++) f0(l[t]);
    }
  }
  function he(l, t) {
    var u = l.stateNode;
    if (u === null) return null;
    var a = u[Il] || null;
    if (a === null) return null;
    u = a[t];
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
        (a = !a.disabled) || (l = l.type, a = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !a;
        break l;
      default:
        l = !1;
    }
    if (l) return null;
    if (u && typeof u != "function")
      throw Error(
        d(231, t, typeof u)
      );
    return u;
  }
  var au = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), fi = !1;
  if (au)
    try {
      var ge = {};
      Object.defineProperty(ge, "passive", {
        get: function() {
          fi = !0;
        }
      }), window.addEventListener("test", ge, ge), window.removeEventListener("test", ge, ge);
    } catch {
      fi = !1;
    }
  var bu = null, ii = null, bn = null;
  function c0() {
    if (bn) return bn;
    var l, t = ii, u = t.length, a, e = "value" in bu ? bu.value : bu.textContent, n = e.length;
    for (l = 0; l < u && t[l] === e[l]; l++) ;
    var f = u - l;
    for (a = 1; a <= f && t[u - a] === e[n - a]; a++) ;
    return bn = e.slice(l, 1 < a ? 1 - a : void 0);
  }
  function En(l) {
    var t = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && t === 13 && (l = 13)) : l = t, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function zn() {
    return !0;
  }
  function o0() {
    return !1;
  }
  function Jl(l) {
    function t(u, a, e, n, f) {
      this._reactName = u, this._targetInst = e, this.type = a, this.nativeEvent = n, this.target = f, this.currentTarget = null;
      for (var i in l)
        l.hasOwnProperty(i) && (u = l[i], this[i] = u ? u(n) : n[i]);
      return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1) ? zn : o0, this.isPropagationStopped = o0, this;
    }
    return w(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var u = this.nativeEvent;
        u && (u.preventDefault ? u.preventDefault() : typeof u.returnValue != "unknown" && (u.returnValue = !1), this.isDefaultPrevented = zn);
      },
      stopPropagation: function() {
        var u = this.nativeEvent;
        u && (u.stopPropagation ? u.stopPropagation() : typeof u.cancelBubble != "unknown" && (u.cancelBubble = !0), this.isPropagationStopped = zn);
      },
      persist: function() {
      },
      isPersistent: zn
    }), t;
  }
  var Eu = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, _n = Jl(Eu), Se = w({}, Eu, { view: 0, detail: 0 }), Xs = Jl(Se), ci, oi, Te, On = w({}, Se, {
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
    getModifierState: ri,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== Te && (Te && l.type === "mousemove" ? (ci = l.screenX - Te.screenX, oi = l.screenY - Te.screenY) : oi = ci = 0, Te = l), ci);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : oi;
    }
  }), v0 = Jl(On), Qs = w({}, On, { dataTransfer: 0 }), Zs = Jl(Qs), Vs = w({}, Se, { relatedTarget: 0 }), vi = Jl(Vs), Ls = w({}, Eu, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Ks = Jl(Ls), Js = w({}, Eu, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), ws = Jl(Js), Ws = w({}, Eu, { data: 0 }), r0 = Jl(Ws), Fs = {
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
  }, $s = {
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
  }, Is = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function ks(l) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(l) : (l = Is[l]) ? !!t[l] : !1;
  }
  function ri() {
    return ks;
  }
  var Ps = w({}, Se, {
    key: function(l) {
      if (l.key) {
        var t = Fs[l.key] || l.key;
        if (t !== "Unidentified") return t;
      }
      return l.type === "keypress" ? (l = En(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? $s[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ri,
    charCode: function(l) {
      return l.type === "keypress" ? En(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? En(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), ly = Jl(Ps), ty = w({}, On, {
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
  }), d0 = Jl(ty), uy = w({}, Eu, { submitter: 0 }), ay = Jl(uy), ey = w({}, Se, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ri
  }), ny = Jl(ey), fy = w({}, Eu, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), iy = Jl(fy), cy = w({}, On, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), oy = Jl(cy), vy = w({}, Eu, {
    newState: 0,
    oldState: 0,
    source: 0
  }), ry = Jl(vy), dy = [9, 13, 27, 32], di = au && "CompositionEvent" in window, be = null;
  au && "documentMode" in document && (be = document.documentMode);
  var sy = au && "TextEvent" in window && !be, s0 = au && (!di || be && 8 < be && 11 >= be), y0 = " ", m0 = !1;
  function h0(l, t) {
    switch (l) {
      case "keyup":
        return dy.indexOf(t.keyCode) !== -1;
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
  function g0(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var Da = !1;
  function yy(l, t) {
    switch (l) {
      case "compositionend":
        return g0(t);
      case "keypress":
        return t.which !== 32 ? null : (m0 = !0, y0);
      case "textInput":
        return l = t.data, l === y0 && m0 ? null : l;
      default:
        return null;
    }
  }
  function my(l, t) {
    if (Da)
      return l === "compositionend" || !di && h0(l, t) ? (l = c0(), bn = ii = bu = null, Da = !1, l) : null;
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
        return s0 && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var hy = {
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
  function S0(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!hy[l.type] : t === "textarea";
  }
  function T0(l, t, u, a) {
    Aa ? Ma ? Ma.push(a) : Ma = [a] : Aa = a, t = Af(t, "onChange"), 0 < t.length && (u = new _n(
      "onChange",
      "change",
      null,
      u,
      a
    ), l.push({ event: u, listeners: t }));
  }
  var Ee = null, ze = null;
  function gy(l) {
    fd(l, 0);
  }
  function Nn(l) {
    var t = me(l);
    if (l0(t)) return l;
  }
  function b0(l, t) {
    if (l === "change") return t;
  }
  var E0 = !1;
  if (au) {
    var si;
    if (au) {
      var yi = "oninput" in document;
      if (!yi) {
        var z0 = document.createElement("div");
        z0.setAttribute("oninput", "return;"), yi = typeof z0.oninput == "function";
      }
      si = yi;
    } else si = !1;
    E0 = si && (!document.documentMode || 9 < document.documentMode);
  }
  function _0() {
    Ee && (Ee.detachEvent("onpropertychange", O0), ze = Ee = null);
  }
  function O0(l) {
    if (l.propertyName === "value" && Nn(ze)) {
      var t = [];
      T0(
        t,
        ze,
        l,
        ei(l)
      ), i0(gy, t);
    }
  }
  function Sy(l, t, u) {
    l === "focusin" ? (_0(), Ee = t, ze = u, Ee.attachEvent("onpropertychange", O0)) : l === "focusout" && _0();
  }
  function Ty(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return Nn(ze);
  }
  function by(l, t) {
    if (l === "click") return Nn(t);
  }
  function Ey(l, t) {
    if (l === "input" || l === "change")
      return Nn(t);
  }
  function zy(l, t) {
    return l === t && (l !== 0 || 1 / l === 1 / t) || l !== l && t !== t;
  }
  var vt = typeof Object.is == "function" ? Object.is : zy;
  function _e(l, t) {
    if (vt(l, t)) return !0;
    if (typeof l != "object" || l === null || typeof t != "object" || t === null)
      return !1;
    var u = Object.keys(l), a = Object.keys(t);
    if (u.length !== a.length) return !1;
    for (a = 0; a < u.length; a++) {
      var e = u[a];
      if (!wf.call(t, e) || !vt(l[e], t[e]))
        return !1;
    }
    return !0;
  }
  function mi(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  function N0(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function A0(l, t) {
    var u = N0(l);
    l = 0;
    for (var a; u; ) {
      if (u.nodeType === 3) {
        if (a = l + u.textContent.length, l <= t && a >= t)
          return { node: u, offset: t - l };
        l = a;
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
      u = N0(u);
    }
  }
  function M0(l, t) {
    return l && t ? l === t ? !0 : l && l.nodeType === 3 ? !1 : t && t.nodeType === 3 ? M0(l, t.parentNode) : "contains" in l ? l.contains(t) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function D0(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var t = mi(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var u = typeof t.contentWindow.location.href == "string";
      } catch {
        u = !1;
      }
      if (u) l = t.contentWindow;
      else break;
      t = mi(l.document);
    }
    return t;
  }
  function hi(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t && (t === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || t === "textarea" || l.contentEditable === "true");
  }
  var _y = au && "documentMode" in document && 11 >= document.documentMode, Ca = null, gi = null, Oe = null, Si = !1;
  function C0(l, t, u) {
    var a = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    Si || Ca == null || Ca !== mi(a) || (a = Ca, "selectionStart" in a && hi(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), Oe && _e(Oe, a) || (Oe = a, a = Af(gi, "onSelect"), 0 < a.length && (t = new _n(
      "onSelect",
      "select",
      null,
      t,
      u
    ), l.push({ event: t, listeners: a }), t.target = Ca)));
  }
  function ku(l, t) {
    var u = {};
    return u[l.toLowerCase()] = t.toLowerCase(), u["Webkit" + l] = "webkit" + t, u["Moz" + l] = "moz" + t, u;
  }
  var Ua = {
    animationend: ku("Animation", "AnimationEnd"),
    animationiteration: ku("Animation", "AnimationIteration"),
    animationstart: ku("Animation", "AnimationStart"),
    transitionrun: ku("Transition", "TransitionRun"),
    transitionstart: ku("Transition", "TransitionStart"),
    transitioncancel: ku("Transition", "TransitionCancel"),
    transitionend: ku("Transition", "TransitionEnd")
  }, Ti = {}, U0 = {};
  au && (U0 = document.createElement("div").style, "AnimationEvent" in window || (delete Ua.animationend.animation, delete Ua.animationiteration.animation, delete Ua.animationstart.animation), "TransitionEvent" in window || delete Ua.transitionend.transition);
  function Pu(l) {
    if (Ti[l]) return Ti[l];
    if (!Ua[l]) return l;
    var t = Ua[l], u;
    for (u in t)
      if (t.hasOwnProperty(u) && u in U0)
        return Ti[l] = t[u];
    return l;
  }
  var R0 = Pu("animationend"), H0 = Pu("animationiteration"), p0 = Pu("animationstart"), Oy = Pu("transitionrun"), Ny = Pu("transitionstart"), Ay = Pu("transitioncancel"), B0 = Pu("transitionend"), Y0 = /* @__PURE__ */ new Map(), bi = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  bi.push("scrollEnd");
  function Ut(l, t) {
    Y0.set(l, t), Iu(t, [l]);
  }
  var My = 0;
  function eu(l, t) {
    if (l.name != null && l.name !== "auto") return l.name;
    if (t.autoName !== null) return t.autoName;
    l = Bt.identifierPrefix;
    var u = My++;
    return l = "_" + l + "t_" + u.toString(32) + "_", t.autoName = l;
  }
  function q0(l) {
    if (l == null || typeof l == "string")
      return l;
    var t = null, u = $a;
    if (u !== null)
      for (var a = 0; a < u.length; a++) {
        var e = l[u[a]];
        if (e != null) {
          if (e === "none") return "none";
          t = t == null ? e : t + (" " + e);
        }
      }
    return t ?? l.default;
  }
  function nu(l, t) {
    return l = q0(l), t = q0(t), t == null ? l === "auto" ? null : l : t === "auto" ? null : t;
  }
  var An = typeof reportError == "function" ? reportError : function(l) {
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
  }, Et = [], Ra = 0, Ei = 0;
  function Mn() {
    for (var l = Ra, t = Ei = Ra = 0; t < l; ) {
      var u = Et[t];
      Et[t++] = null;
      var a = Et[t];
      Et[t++] = null;
      var e = Et[t];
      Et[t++] = null;
      var n = Et[t];
      if (Et[t++] = null, a !== null && e !== null) {
        var f = a.pending;
        f === null ? e.next = e : (e.next = f.next, f.next = e), a.pending = e;
      }
      n !== 0 && j0(u, e, n);
    }
  }
  function Dn(l, t, u, a) {
    Et[Ra++] = l, Et[Ra++] = t, Et[Ra++] = u, Et[Ra++] = a, Ei |= a, l.lanes |= a, l = l.alternate, l !== null && (l.lanes |= a);
  }
  function zi(l, t, u, a) {
    return Dn(l, t, u, a), Cn(l);
  }
  function la(l, t) {
    return Dn(l, null, null, t), Cn(l);
  }
  function j0(l, t, u) {
    l.lanes |= u;
    var a = l.alternate;
    a !== null && (a.lanes |= u);
    for (var e = !1, n = l.return; n !== null; )
      n.childLanes |= u, a = n.alternate, a !== null && (a.childLanes |= u), n.tag === 22 && (l = n.stateNode, l === null || l._visibility & 1 || (e = !0)), l = n, n = n.return;
    return l.tag === 3 ? (n = l.stateNode, e && t !== null && (e = 31 - ct(u), l = n.hiddenUpdates, a = l[e], a === null ? l[e] = [t] : a.push(t), t.lane = u | 536870912), n) : null;
  }
  function Cn(l) {
    if (50 < Je)
      throw Je = 0, Tf = null, Error(d(185));
    for (var t = l.return; t !== null; )
      l = t, t = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var Ha = {};
  function Dy(l, t, u, a) {
    this.tag = l, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function kl(l, t, u, a) {
    return new Dy(l, t, u, a);
  }
  function _i(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function fu(l, t) {
    var u = l.alternate;
    return u === null ? (u = kl(
      l.tag,
      t,
      l.key,
      l.mode
    ), u.elementType = l.elementType, u.type = l.type, u.stateNode = l.stateNode, u.alternate = l, l.alternate = u) : (u.pendingProps = t, u.type = l.type, u.flags = 0, u.subtreeFlags = 0, u.deletions = null), u.flags = l.flags & 1206910976, u.childLanes = l.childLanes, u.lanes = l.lanes, u.child = l.child, u.memoizedProps = l.memoizedProps, u.memoizedState = l.memoizedState, u.updateQueue = l.updateQueue, t = l.dependencies, u.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, u.sibling = l.sibling, u.index = l.index, u.ref = l.ref, u.refCleanup = l.refCleanup, u;
  }
  function x0(l, t) {
    l.flags &= 1206910978;
    var u = l.alternate;
    return u === null ? (l.childLanes = 0, l.lanes = t, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = u.childLanes, l.lanes = u.lanes, l.child = u.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = u.memoizedProps, l.memoizedState = u.memoizedState, l.updateQueue = u.updateQueue, l.type = u.type, t = u.dependencies, l.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), l;
  }
  function Un(l, t, u, a, e, n) {
    var f = 0;
    if (a = l, typeof a == "function") _i(a) && (f = 1);
    else if (typeof a == "string")
      f = u1(
        l,
        u,
        Qt.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      l: switch (a) {
        case Ct:
          return l = kl(31, u, t, e), l.elementType = Ct, l.lanes = n, l;
        case Tt:
          return ta(u.children, e, n, t);
        case nt:
          f = 8, e |= 24;
          break;
        case hu:
          return l = kl(12, u, t, e | 2), l.elementType = hu, l.lanes = n, l;
        case j:
          return l = kl(13, u, t, e), l.elementType = j, l.lanes = n, l;
        case x:
          return l = kl(19, u, t, e), l.elementType = x, l.lanes = n, l;
        case Pt:
        case v:
          return l = e | 32, l = kl(30, u, t, l), l.elementType = v, l.lanes = n, l.stateNode = {
            autoName: null,
            paired: null,
            clones: null,
            ref: null
          }, l;
        default:
          if (typeof a == "object" && a !== null)
            switch (a.$$typeof) {
              case Rl:
                f = 10;
                break l;
              case wu:
                f = 9;
                break l;
              case A:
                f = 11;
                break l;
              case yl:
                f = 14;
                break l;
              case cl:
                f = 16, a = null;
                break l;
            }
          f = 29, u = Error(
            d(130, l === null ? "null" : typeof l, "")
          ), a = null;
      }
    return t = kl(f, u, t, e), t.elementType = l, t.type = a, t.lanes = n, t;
  }
  function ta(l, t, u, a) {
    return l = kl(7, l, a, t), l.lanes = u, l;
  }
  function Oi(l, t, u) {
    return l = kl(6, l, null, t), l.lanes = u, l;
  }
  function G0(l) {
    var t = kl(18, null, null, 0);
    return t.stateNode = l, t;
  }
  function Ni(l, t, u) {
    return t = kl(
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
  var X0 = /* @__PURE__ */ new WeakMap();
  function zt(l, t) {
    if (typeof l == "object" && l !== null) {
      var u = X0.get(l);
      return u !== void 0 ? u : (t = {
        value: l,
        source: t,
        stack: Bo(t)
      }, X0.set(l, t), t);
    }
    return {
      value: l,
      source: t,
      stack: Bo(t)
    };
  }
  var pa = [], Ba = 0, Rn = null, Ne = 0, _t = [], Ot = 0, zu = null, Vt = 1, Lt = "";
  function iu(l, t) {
    pa[Ba++] = Ne, pa[Ba++] = Rn, Rn = l, Ne = t;
  }
  function Q0(l, t, u) {
    _t[Ot++] = Vt, _t[Ot++] = Lt, _t[Ot++] = zu, zu = l;
    var a = Vt;
    l = Lt;
    var e = 32 - ct(a) - 1;
    a &= ~(1 << e), u += 1;
    var n = 32 - ct(t) + e;
    if (30 < n) {
      var f = e - e % 5;
      n = (a & (1 << f) - 1).toString(32), a >>= f, e -= f, Vt = 1 << 32 - ct(t) + e | u << e | a, Lt = n + l;
    } else
      Vt = 1 << n | u << e | a, Lt = l;
  }
  function Hn(l) {
    l.return !== null && (iu(l, 1), Q0(l, 1, 0));
  }
  function Ai(l) {
    for (; l === Rn; )
      Rn = pa[--Ba], pa[Ba] = null, Ne = pa[--Ba], pa[Ba] = null;
    for (; l === zu; )
      zu = _t[--Ot], _t[Ot] = null, Lt = _t[--Ot], _t[Ot] = null, Vt = _t[--Ot], _t[Ot] = null;
  }
  function Z0(l, t) {
    _t[Ot++] = Vt, _t[Ot++] = Lt, _t[Ot++] = zu, Vt = t.id, Lt = t.overflow, zu = l;
  }
  var pl = null, gl = null, K = !1, _u = null, Nt = !1, Mi = Error(d(519));
  function Ou(l) {
    var t = Error(
      d(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Ae(zt(t, l)), Mi;
  }
  function V0(l) {
    var t = l.stateNode, u = l.type, a = l.memoizedProps;
    switch (t[jl] = l, t[Il] = a, u) {
      case "dialog":
        F("cancel", t), F("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        F("load", t);
        break;
      case "video":
      case "audio":
        for (u = 0; u < We.length; u++)
          F(We[u], t);
        break;
      case "source":
        F("error", t);
        break;
      case "img":
      case "image":
      case "link":
        F("error", t), F("load", t);
        break;
      case "details":
        F("toggle", t);
        break;
      case "input":
        F("invalid", t), t0(
          t,
          a.value,
          a.defaultValue,
          a.checked,
          a.defaultChecked,
          a.type,
          a.name,
          !0
        );
        break;
      case "select":
        F("invalid", t);
        break;
      case "textarea":
        F("invalid", t), a0(t, a.value, a.defaultValue, a.children);
    }
    u = a.children, typeof u != "string" && typeof u != "number" && typeof u != "bigint" || t.textContent === "" + u || a.suppressHydrationWarning === !0 || vd(t.textContent, u) ? (a.popover != null && (F("beforetoggle", t), F("toggle", t)), a.onScroll != null && F("scroll", t), a.onScrollEnd != null && F("scrollend", t), a.onClick != null && (t.onclick = Zt), t = !0) : t = !1, t || Ou(l, !0);
  }
  function pn(l) {
    for (pl = l.return; pl; )
      switch (pl.tag) {
        case 5:
        case 31:
        case 13:
          Nt = !1;
          return;
        case 27:
        case 3:
          Nt = !0;
          return;
        default:
          pl = pl.return;
      }
  }
  function Ya(l) {
    if (l !== pl) return !1;
    if (!K) return pn(l), K = !0, !1;
    var t = l.tag, u;
    if ((u = t !== 3 && t !== 27) && ((u = t === 5) && (u = l.type, u = !(u !== "form" && u !== "button") || ao(l.type, l.memoizedProps)), u = !u), u && gl && Ou(l), pn(l), t === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(d(317));
      gl = Cd(l);
    } else if (t === 31) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(d(317));
      gl = Cd(l);
    } else
      t === 27 ? (t = gl, Xu(l.type) ? (l = so, so = null, gl = l) : gl = t) : gl = pl ? Mt(l.stateNode.nextSibling) : null;
    return !0;
  }
  function ua() {
    gl = pl = null, K = !1;
  }
  function Di() {
    var l = _u;
    return l !== null && (tt === null ? tt = l : tt.push.apply(
      tt,
      l
    ), _u = null), l;
  }
  function Ae(l) {
    _u === null ? _u = [l] : _u.push(l);
  }
  var Ci = Xt(null), aa = null, cu = null;
  function Nu(l, t, u) {
    hl(Ci, t._currentValue), t._currentValue = u;
  }
  function ou(l) {
    l._currentValue = Ci.current, ql(Ci);
  }
  function Bn(l, t, u) {
    for (; l !== null; ) {
      var a = l.alternate;
      if ((l.childLanes & t) !== t ? (l.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), l === u) break;
      l = l.return;
    }
  }
  function Ui(l, t, u, a) {
    var e = l.child;
    for (e !== null && (e.return = l); e !== null; ) {
      var n = e.dependencies;
      if (n !== null) {
        var f = e.child;
        n = n.firstContext;
        l: for (; n !== null; ) {
          var i = n;
          n = e;
          for (var c = 0; c < t.length; c++)
            if (i.context === t[c]) {
              n.lanes |= u, i = n.alternate, i !== null && (i.lanes |= u), Bn(
                n.return,
                u,
                l
              ), a || (f = null);
              break l;
            }
          n = i.next;
        }
      } else if (e.tag === 18) {
        if (f = e.return, f === null) throw Error(d(341));
        f.lanes |= u, n = f.alternate, n !== null && (n.lanes |= u), Bn(f, u, l), f = null;
      } else
        e.tag === 13 && e.memoizedState !== null && e.memoizedState.dehydrated === null ? (e.lanes |= u, f = e.alternate, f !== null && (f.lanes |= u), Bn(
          e.return,
          u,
          l
        ), f = e.child, f = f !== null ? f.sibling : null) : f = e.child;
      if (f !== null) f.return = e;
      else
        for (f = e; f !== null; ) {
          if (f === l) {
            f = null;
            break;
          }
          if (e = f.sibling, e !== null) {
            e.return = f.return, f = e;
            break;
          }
          f = f.return;
        }
      e = f;
    }
  }
  function ea(l, t, u, a) {
    l = null;
    for (var e = t, n = !1; e !== null; ) {
      if (!n) {
        if ((e.flags & 524288) !== 0) n = !0;
        else if ((e.flags & 262144) !== 0) break;
      }
      if (e.tag === 10) {
        var f = e.alternate;
        if (f === null) throw Error(d(387));
        if (f = f.memoizedProps, f !== null) {
          var i = e.type;
          vt(e.pendingProps.value, f.value) || (l !== null ? l.push(i) : l = [i]);
        }
      } else if (e === fn.current) {
        if (f = e.alternate, f === null) throw Error(d(387));
        f.memoizedState.memoizedState !== e.memoizedState.memoizedState && (l !== null ? l.push(fe) : l = [fe]);
      }
      e = e.return;
    }
    return l !== null && Ui(
      t,
      l,
      u,
      a
    ), t.flags |= 262144, l !== null;
  }
  function Yn(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!vt(
        l.context._currentValue,
        l.memoizedValue
      ))
        return !0;
      l = l.next;
    }
    return !1;
  }
  function na(l) {
    aa = l, cu = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function xl(l) {
    return L0(aa, l);
  }
  function qn(l, t) {
    return aa === null && na(l), L0(l, t);
  }
  function L0(l, t) {
    var u = t._currentValue;
    if (t = { context: t, memoizedValue: u, next: null }, cu === null) {
      if (l === null) throw Error(d(308));
      cu = t, l.dependencies = { lanes: 0, firstContext: t }, l.flags |= 524288;
    } else cu = cu.next = t;
    return u;
  }
  var Cy = typeof AbortController < "u" ? AbortController : function() {
    var l = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(u, a) {
        l.push(a);
      }
    };
    this.abort = function() {
      t.aborted = !0, l.forEach(function(u) {
        return u();
      });
    };
  }, Uy = h.unstable_scheduleCallback, Ry = h.unstable_NormalPriority, Al = {
    $$typeof: Rl,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Ri() {
    return {
      controller: new Cy(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Me(l) {
    l.refCount--, l.refCount === 0 && Uy(Ry, function() {
      l.controller.abort();
    });
  }
  function K0(l, t) {
    if ((l.pendingLanes & 4194048) !== 0) {
      var u = l.transitionTypes;
      for (u === null && (u = l.transitionTypes = []), l = 0; l < t.length; l++) {
        var a = t[l];
        u.indexOf(a) === -1 && u.push(a);
      }
    }
  }
  var De = null;
  function Hy(l) {
    var t = l.transitionTypes;
    return l.transitionTypes = null, t;
  }
  var Ce = null, Hi = 0, fa = 0, qa = null;
  function py(l, t) {
    if (Ce === null) {
      var u = Ce = [];
      Hi = 0, fa = Wc(), qa = {
        status: "pending",
        value: void 0,
        then: function(a) {
          u.push(a);
        }
      };
    }
    return Hi++, t.then(J0, J0), t;
  }
  function J0() {
    if (--Hi === 0 && (De = null, Ce !== null)) {
      qa !== null && (qa.status = "fulfilled");
      var l = Ce;
      Ce = null, fa = 0, qa = null;
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function By(l, t) {
    var u = [], a = {
      status: "pending",
      value: null,
      reason: null,
      then: function(e) {
        u.push(e);
      }
    };
    return l.then(
      function() {
        a.status = "fulfilled", a.value = t;
        for (var e = 0; e < u.length; e++) (0, u[e])(t);
      },
      function(e) {
        for (a.status = "rejected", a.reason = e, e = 0; e < u.length; e++)
          (0, u[e])(void 0);
      }
    ), a;
  }
  var w0 = U.S;
  U.S = function(l, t) {
    if (Gr = ft(), typeof t == "object" && t !== null && typeof t.then == "function" && py(l, t), De !== null)
      for (var u = le; u !== null; )
        K0(u, De), u = u.next;
    if (u = l.types, u !== null) {
      for (var a = le; a !== null; )
        K0(a, u), a = a.next;
      if (fa !== 0) {
        a = De, a === null && (a = De = []);
        for (var e = 0; e < u.length; e++) {
          var n = u[e];
          a.indexOf(n) === -1 && a.push(n);
        }
      }
    }
    w0 !== null && w0(l, t);
  };
  var ia = Xt(null);
  function pi() {
    var l = ia.current;
    return l !== null ? l : ml.pooledCache;
  }
  function jn(l, t) {
    t === null ? hl(ia, ia.current) : hl(ia, t.pool);
  }
  function W0() {
    var l = pi();
    return l === null ? null : { parent: Al._currentValue, pool: l };
  }
  var ja = Error(d(460)), Bi = Error(d(474)), xn = Error(d(542)), Gn = { then: function() {
  } };
  function F0(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function $0(l, t, u) {
    switch (u = l[u], u === void 0 ? l.push(t) : u !== t && (t.then(Zt, Zt), t = u), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw l = t.reason, k0(l), l === void 0 && !("reason" in t) ? Error(d(600)) : l;
      default:
        if (typeof t.status == "string") t.then(Zt, Zt);
        else {
          if (l = ml, l !== null && 100 < l.shellSuspendCounter)
            throw Error(d(482));
          l = t, l.status = "pending", l.then(
            function(a) {
              if (t.status === "pending") {
                var e = t;
                e.status = "fulfilled", e.value = a;
              }
            },
            function(a) {
              if (t.status === "pending") {
                var e = t;
                e.status = "rejected", e.reason = a;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw l = t.reason, k0(l), l;
        }
        throw oa = t, ja;
    }
  }
  function ca(l) {
    try {
      var t = l._init;
      return t(l._payload);
    } catch (u) {
      throw u !== null && typeof u == "object" && typeof u.then == "function" ? (oa = u, ja) : u;
    }
  }
  var oa = null;
  function I0() {
    if (oa === null) throw Error(d(459));
    var l = oa;
    return oa = null, l;
  }
  function k0(l) {
    if (l === ja || l === xn)
      throw Error(d(483));
  }
  var xa = null, Ue = 0;
  function Xn(l) {
    var t = Ue;
    return Ue += 1, xa === null && (xa = []), $0(xa, l, t);
  }
  function Au(l, t) {
    t = t.props.ref, l.ref = t !== void 0 ? t : null;
  }
  function Qn(l, t) {
    throw t.$$typeof === el ? Error(d(525)) : (l = Object.prototype.toString.call(t), Error(
      d(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : l
      )
    ));
  }
  function P0(l) {
    function t(s, o) {
      if (l) {
        var m = s.deletions;
        m === null ? (s.deletions = [o], s.flags |= 16) : m.push(o);
      }
    }
    function u(s, o) {
      if (!l) return null;
      for (; o !== null; )
        t(s, o), o = o.sibling;
      return null;
    }
    function a(s) {
      for (var o = /* @__PURE__ */ new Map(); s !== null; )
        s.key === null ? o.set(s.index, s) : o.set(s.key, s), s = s.sibling;
      return o;
    }
    function e(s, o) {
      return s = fu(s, o), s.index = 0, s.sibling = null, s;
    }
    function n(s, o, m) {
      return s.index = m, l ? (m = s.alternate, m !== null ? (m = m.index, m < o ? (s.flags |= 2, o) : m) : (s.flags |= 134217730, o)) : (s.flags |= 1048576, o);
    }
    function f(s) {
      return l && s.alternate === null && (s.flags |= 134217730), s;
    }
    function i(s, o, m, b) {
      return o === null || o.tag !== 6 ? (o = Oi(m, s.mode, b), o.return = s, o) : (o = e(o, m), o.return = s, o);
    }
    function c(s, o, m, b) {
      var M = m.type;
      return M === Tt ? (s = S(
        s,
        o,
        m.props.children,
        b,
        m.key
      ), Au(s, m), s) : o !== null && (o.elementType === M || typeof M == "object" && M !== null && M.$$typeof === cl && ca(M) === o.type) ? (o = e(o, m.props), Au(o, m), o.return = s, o) : (o = Un(
        m.type,
        m.key,
        m.props,
        null,
        s.mode,
        b
      ), Au(o, m), o.return = s, o);
    }
    function y(s, o, m, b) {
      return o === null || o.tag !== 4 || o.stateNode.containerInfo !== m.containerInfo || o.stateNode.implementation !== m.implementation ? (o = Ni(m, s.mode, b), o.return = s, o) : (o = e(o, m.children || []), o.return = s, o);
    }
    function S(s, o, m, b, M) {
      return o === null || o.tag !== 7 ? (o = ta(
        m,
        s.mode,
        b,
        M
      ), o.return = s, o) : (o = e(o, m), o.return = s, o);
    }
    function E(s, o, m) {
      if (typeof o == "string" && o !== "" || typeof o == "number" || typeof o == "bigint")
        return o = Oi(
          "" + o,
          s.mode,
          m
        ), o.return = s, o;
      if (typeof o == "object" && o !== null) {
        switch (o.$$typeof) {
          case Gt:
            return m = Un(
              o.type,
              o.key,
              o.props,
              null,
              s.mode,
              m
            ), Au(m, o), m.return = s, m;
          case St:
            return o = Ni(
              o,
              s.mode,
              m
            ), o.return = s, o;
          case cl:
            return o = ca(o), E(s, o, m);
        }
        if (nl(o) || B(o))
          return o = ta(
            o,
            s.mode,
            m,
            null
          ), o.return = s, o;
        if (typeof o.then == "function")
          return E(s, Xn(o), m);
        if (o.$$typeof === Rl)
          return E(
            s,
            qn(s, o),
            m
          );
        Qn(s, o);
      }
      return null;
    }
    function r(s, o, m, b) {
      var M = o !== null ? o.key : null;
      if (typeof m == "string" && m !== "" || typeof m == "number" || typeof m == "bigint")
        return M !== null ? null : i(s, o, "" + m, b);
      if (typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case Gt:
            return m.key === M ? c(s, o, m, b) : null;
          case St:
            return m.key === M ? y(s, o, m, b) : null;
          case cl:
            return m = ca(m), r(s, o, m, b);
        }
        if (nl(m) || B(m))
          return M !== null ? null : S(s, o, m, b, null);
        if (typeof m.then == "function")
          return r(
            s,
            o,
            Xn(m),
            b
          );
        if (m.$$typeof === Rl)
          return r(
            s,
            o,
            qn(s, m),
            b
          );
        Qn(s, m);
      }
      return null;
    }
    function g(s, o, m, b, M) {
      if (typeof b == "string" && b !== "" || typeof b == "number" || typeof b == "bigint")
        return s = s.get(m) || null, i(o, s, "" + b, M);
      if (typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case Gt:
            return s = s.get(
              b.key === null ? m : b.key
            ) || null, c(o, s, b, M);
          case St:
            return s = s.get(
              b.key === null ? m : b.key
            ) || null, y(o, s, b, M);
          case cl:
            return b = ca(b), g(
              s,
              o,
              m,
              b,
              M
            );
        }
        if (nl(b) || B(b))
          return s = s.get(m) || null, S(o, s, b, M, null);
        if (typeof b.then == "function")
          return g(
            s,
            o,
            m,
            Xn(b),
            M
          );
        if (b.$$typeof === Rl)
          return g(
            s,
            o,
            m,
            qn(o, b),
            M
          );
        Qn(o, b);
      }
      return null;
    }
    function N(s, o, m, b) {
      for (var M = null, I = null, H = o, q = o = 0, Cl = null; H !== null && q < m.length; q++) {
        H.index > q ? (Cl = H, H = null) : Cl = H.sibling;
        var P = r(
          s,
          H,
          m[q],
          b
        );
        if (P === null) {
          H === null && (H = Cl);
          break;
        }
        l && H && P.alternate === null && t(s, H), o = n(P, o, q), I === null ? M = P : I.sibling = P, I = P, H = Cl;
      }
      if (q === m.length)
        return u(s, H), K && iu(s, q), M;
      if (H === null) {
        for (; q < m.length; q++)
          H = E(s, m[q], b), H !== null && (o = n(
            H,
            o,
            q
          ), I === null ? M = H : I.sibling = H, I = H);
        return K && iu(s, q), M;
      }
      for (H = a(H); q < m.length; q++)
        Cl = g(
          H,
          s,
          q,
          m[q],
          b
        ), Cl !== null && (l && (P = Cl.alternate, P !== null && H.delete(P.key === null ? q : P.key)), o = n(
          Cl,
          o,
          q
        ), I === null ? M = Cl : I.sibling = Cl, I = Cl);
      return l && H.forEach(function(Ku) {
        return t(s, Ku);
      }), K && iu(s, q), M;
    }
    function D(s, o, m, b) {
      if (m == null) throw Error(d(151));
      for (var M = null, I = null, H = o, q = o = 0, Cl = null, P = m.next(); H !== null && !P.done; q++, P = m.next()) {
        H.index > q ? (Cl = H, H = null) : Cl = H.sibling;
        var Ku = r(s, H, P.value, b);
        if (Ku === null) {
          H === null && (H = Cl);
          break;
        }
        l && H && Ku.alternate === null && t(s, H), o = n(Ku, o, q), I === null ? M = Ku : I.sibling = Ku, I = Ku, H = Cl;
      }
      if (P.done)
        return u(s, H), K && iu(s, q), M;
      if (H === null) {
        for (; !P.done; q++, P = m.next())
          P = E(s, P.value, b), P !== null && (o = n(P, o, q), I === null ? M = P : I.sibling = P, I = P);
        return K && iu(s, q), M;
      }
      for (H = a(H); !P.done; q++, P = m.next())
        P = g(H, s, q, P.value, b), P !== null && (l && (Cl = P.alternate, Cl !== null && H.delete(
          Cl.key === null ? q : Cl.key
        )), o = n(P, o, q), I === null ? M = P : I.sibling = P, I = P);
      return l && H.forEach(function(y1) {
        return t(s, y1);
      }), K && iu(s, q), M;
    }
    function L(s, o, m, b) {
      if (typeof m == "object" && m !== null && m.type === Tt && m.key === null && m.props.ref === void 0 && (m = m.props.children), typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case Gt:
            l: {
              for (var M = m.key; o !== null; ) {
                if (o.key === M) {
                  if (M = m.type, M === Tt) {
                    if (o.tag === 7) {
                      u(
                        s,
                        o.sibling
                      ), b = e(
                        o,
                        m.props.children
                      ), Au(b, m), b.return = s, s = b;
                      break l;
                    }
                  } else if (o.elementType === M || typeof M == "object" && M !== null && M.$$typeof === cl && ca(M) === o.type) {
                    u(
                      s,
                      o.sibling
                    ), b = e(o, m.props), Au(b, m), b.return = s, s = b;
                    break l;
                  }
                  u(s, o);
                  break;
                } else t(s, o);
                o = o.sibling;
              }
              m.type === Tt ? (b = ta(
                m.props.children,
                s.mode,
                b,
                m.key
              ), Au(b, m), b.return = s, s = b) : (b = Un(
                m.type,
                m.key,
                m.props,
                null,
                s.mode,
                b
              ), Au(b, m), b.return = s, s = b);
            }
            return f(s);
          case St:
            l: {
              for (M = m.key; o !== null; ) {
                if (o.key === M)
                  if (o.tag === 4 && o.stateNode.containerInfo === m.containerInfo && o.stateNode.implementation === m.implementation) {
                    u(
                      s,
                      o.sibling
                    ), b = e(o, m.children || []), b.return = s, s = b;
                    break l;
                  } else {
                    u(s, o);
                    break;
                  }
                else t(s, o);
                o = o.sibling;
              }
              b = Ni(m, s.mode, b), b.return = s, s = b;
            }
            return f(s);
          case cl:
            return m = ca(m), L(
              s,
              o,
              m,
              b
            );
        }
        if (nl(m))
          return N(
            s,
            o,
            m,
            b
          );
        if (B(m)) {
          if (M = B(m), typeof M != "function") throw Error(d(150));
          return m = M.call(m), D(
            s,
            o,
            m,
            b
          );
        }
        if (typeof m.then == "function")
          return L(
            s,
            o,
            Xn(m),
            b
          );
        if (m.$$typeof === Rl)
          return L(
            s,
            o,
            qn(s, m),
            b
          );
        Qn(s, m);
      }
      return typeof m == "string" && m !== "" || typeof m == "number" || typeof m == "bigint" ? (m = "" + m, o !== null && o.tag === 6 ? (u(s, o.sibling), b = e(o, m), b.return = s, s = b) : (u(s, o), b = Oi(m, s.mode, b), b.return = s, s = b), f(s)) : u(s, o);
    }
    return function(s, o, m, b) {
      try {
        Ue = 0;
        var M = L(
          s,
          o,
          m,
          b
        );
        return xa = null, M;
      } catch (H) {
        if (H === ja || H === xn) throw H;
        var I = kl(29, H, null, s.mode);
        return I.lanes = b, I.return = s, I;
      }
    };
  }
  var va = P0(!0), lv = P0(!1), Mu = !1;
  function Yi(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function qi(l, t) {
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
  function Cu(l, t, u) {
    var a = l.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (fl & 2) !== 0) {
      var e = a.pending;
      return e === null ? t.next = t : (t.next = e.next, e.next = t), a.pending = t, t = Cn(l), j0(l, null, u), t;
    }
    return Dn(l, a, t, u), Cn(l);
  }
  function Re(l, t, u) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (u & 4194048) !== 0)) {
      var a = t.lanes;
      a &= l.pendingLanes, u |= a, t.lanes = u, Qo(l, u);
    }
  }
  function ji(l, t) {
    var u = l.updateQueue, a = l.alternate;
    if (a !== null && (a = a.updateQueue, u === a)) {
      var e = null, n = null;
      if (u = u.firstBaseUpdate, u !== null) {
        do {
          var f = {
            lane: u.lane,
            tag: u.tag,
            payload: u.payload,
            callback: null,
            next: null
          };
          n === null ? e = n = f : n = n.next = f, u = u.next;
        } while (u !== null);
        n === null ? e = n = t : n = n.next = t;
      } else e = n = t;
      u = {
        baseState: a.baseState,
        firstBaseUpdate: e,
        lastBaseUpdate: n,
        shared: a.shared,
        callbacks: a.callbacks
      }, l.updateQueue = u;
      return;
    }
    l = u.lastBaseUpdate, l === null ? u.firstBaseUpdate = t : l.next = t, u.lastBaseUpdate = t;
  }
  var xi = !1;
  function He() {
    if (xi) {
      var l = qa;
      if (l !== null) throw l;
    }
  }
  function pe(l, t, u, a) {
    xi = !1;
    var e = l.updateQueue;
    Mu = !1;
    var n = e.firstBaseUpdate, f = e.lastBaseUpdate, i = e.shared.pending;
    if (i !== null) {
      e.shared.pending = null;
      var c = i, y = c.next;
      c.next = null, f === null ? n = y : f.next = y, f = c;
      var S = l.alternate;
      S !== null && (S = S.updateQueue, i = S.lastBaseUpdate, i !== f && (i === null ? S.firstBaseUpdate = y : i.next = y, S.lastBaseUpdate = c));
    }
    if (n !== null) {
      var E = e.baseState;
      f = 0, S = y = c = null, i = n;
      do {
        var r = i.lane & -536870913, g = r !== i.lane;
        if (g ? ($ & r) === r : (a & r) === r) {
          r !== 0 && r === fa && (xi = !0), S !== null && (S = S.next = {
            lane: 0,
            tag: i.tag,
            payload: i.payload,
            callback: null,
            next: null
          });
          l: {
            var N = l, D = i;
            r = t;
            var L = u;
            switch (D.tag) {
              case 1:
                if (N = D.payload, typeof N == "function") {
                  E = N.call(L, E, r);
                  break l;
                }
                E = N;
                break l;
              case 3:
                N.flags = N.flags & -65537 | 128;
              case 0:
                if (N = D.payload, r = typeof N == "function" ? N.call(L, E, r) : N, r == null) break l;
                E = w({}, E, r);
                break l;
              case 2:
                Mu = !0;
            }
          }
          r = i.callback, r !== null && (l.flags |= 64, g && (l.flags |= 8192), g = e.callbacks, g === null ? e.callbacks = [r] : g.push(r));
        } else
          g = {
            lane: r,
            tag: i.tag,
            payload: i.payload,
            callback: i.callback,
            next: null
          }, S === null ? (y = S = g, c = E) : S = S.next = g, f |= r;
        if (i = i.next, i === null) {
          if (i = e.shared.pending, i === null)
            break;
          g = i, i = g.next, g.next = null, e.lastBaseUpdate = g, e.shared.pending = null;
        }
      } while (!0);
      S === null && (c = E), e.baseState = c, e.firstBaseUpdate = y, e.lastBaseUpdate = S, n === null && (e.shared.lanes = 0), qu |= f, l.lanes = f, l.memoizedState = E;
    }
  }
  function tv(l, t) {
    if (typeof l != "function")
      throw Error(d(191, l));
    l.call(t);
  }
  function uv(l, t) {
    var u = l.callbacks;
    if (u !== null)
      for (l.callbacks = null, l = 0; l < u.length; l++)
        tv(u[l], t);
  }
  var Uu = Xt(null), Zn = Xt(0);
  function av(l, t) {
    l = yu, hl(Zn, l), hl(Uu, t), yu = l | t.baseLanes;
  }
  function Gi() {
    hl(Zn, yu), hl(Uu, Uu.current);
  }
  function Xi() {
    yu = Zn.current, ql(Uu), ql(Zn);
  }
  var Gl = Xt(null), Ll = null;
  function Ru(l) {
    var t = l.alternate;
    hl(Xl, Xl.current & 1), hl(Gl, l), Ll === null && (t === null || Uu.current !== null || t.memoizedState !== null) && (Ll = l);
  }
  function Qi(l) {
    hl(Xl, Xl.current), hl(Gl, l), Ll === null && (Ll = l);
  }
  function ev(l) {
    l.tag === 22 ? (hl(Xl, Xl.current), hl(Gl, l), Ll === null && (Ll = l)) : Hu();
  }
  function Hu() {
    hl(Xl, Xl.current), hl(Gl, Gl.current);
  }
  function rt(l) {
    ql(Gl), Ll === l && (Ll = null), ql(Xl);
  }
  var Xl = Xt(0);
  function Be(l, t) {
    hl(Gl, Gl.current), hl(Xl, t);
  }
  function Zi(l) {
    ql(Xl), ql(Gl), Ll === l && (Ll = null);
  }
  function Vn(l) {
    for (var t = l; t !== null; ) {
      if (t.tag === 13) {
        var u = t.memoizedState;
        if (u !== null && (u = u.dehydrated, u === null || vo(u) || ro(u)))
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
  var vu = 0, V = null, sl = null, Ml = null, Ln = !1, Ga = !1, ra = !1, Kn = 0, Ye = 0, Xa = null, Yy = 0;
  function zl() {
    throw Error(d(321));
  }
  function Vi(l, t) {
    if (t === null) return !1;
    for (var u = 0; u < t.length && u < l.length; u++)
      if (!vt(l[u], t[u])) return !1;
    return !0;
  }
  function Li(l, t, u, a, e, n) {
    return vu = n, V = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, U.H = l === null || l.memoizedState === null ? Qv : Zv, ra = !1, n = u(a, e), ra = !1, Ga && (n = fv(
      t,
      u,
      a,
      e
    )), nv(l), n;
  }
  function nv(l) {
    U.H = kn;
    var t = sl !== null && sl.next !== null;
    if (vu = 0, Ml = sl = V = null, Ln = !1, Ye = 0, Xa = null, t) throw Error(d(300));
    l === null || Dl || (l = l.dependencies, l !== null && Yn(l) && (Dl = !0));
  }
  function fv(l, t, u, a) {
    V = l;
    var e = 0;
    do {
      if (Ga && (Xa = null), Ye = 0, Ga = !1, 25 <= e) throw Error(d(301));
      if (e += 1, Ml = sl = null, l.updateQueue != null) {
        var n = l.updateQueue;
        n.lastEffect = null, n.events = null, n.stores = null, n.memoCache != null && (n.memoCache.index = 0);
      }
      U.H = Vy, n = t(u, a);
    } while (Ga);
    return n;
  }
  function qy() {
    var l = U.H, t = l.useState()[0];
    return t = typeof t.then == "function" ? qe(t) : t, l = l.useState()[0], (sl !== null ? sl.memoizedState : null) !== l && (V.flags |= 1024), t;
  }
  function Ki() {
    var l = Kn !== 0;
    return Kn = 0, l;
  }
  function Ji(l, t, u) {
    t.updateQueue = l.updateQueue, t.flags &= -2053, l.lanes &= ~u;
  }
  function wi(l) {
    if (Ln) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        t !== null && (t.pending = null), l = l.next;
      }
      Ln = !1;
    }
    vu = 0, Ml = sl = V = null, Ga = !1, Ye = Kn = 0, Xa = null;
  }
  function wl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Ml === null ? V.memoizedState = Ml = l : Ml = Ml.next = l, Ml;
  }
  function Nl() {
    if (sl === null) {
      var l = V.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = sl.next;
    var t = Ml === null ? V.memoizedState : Ml.next;
    if (t !== null)
      Ml = t, sl = l;
    else {
      if (l === null)
        throw V.alternate === null ? Error(d(467)) : Error(d(310));
      sl = l, l = {
        memoizedState: sl.memoizedState,
        baseState: sl.baseState,
        baseQueue: sl.baseQueue,
        queue: sl.queue,
        next: null
      }, Ml === null ? V.memoizedState = Ml = l : Ml = Ml.next = l;
    }
    return Ml;
  }
  function Jn() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function qe(l) {
    var t = Ye;
    return Ye += 1, Xa === null && (Xa = []), l = $0(Xa, l, t), t = V, (Ml === null ? t.memoizedState : Ml.next) === null && (t = t.alternate, U.H = t === null || t.memoizedState === null ? Qv : Zv), l;
  }
  function wn(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return qe(l);
      if (l.$$typeof === _) return;
      if (l.$$typeof === Rl) return xl(l);
    }
    throw Error(d(438, String(l)));
  }
  function Wi(l) {
    var t = null, u = V.updateQueue;
    if (u !== null && (t = u.memoCache), t == null) {
      var a = V.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (t = {
        data: a.data.map(function(e) {
          return e.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), u === null && (u = Jn(), V.updateQueue = u), u.memoCache = t, u = t.data[t.index], u === void 0)
      for (u = t.data[t.index] = Array(l), a = 0; a < l; a++)
        u[a] = Wu;
    return t.index++, u;
  }
  function ru(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function Wn(l) {
    var t = Nl();
    return Fi(t, sl, l);
  }
  function Fi(l, t, u) {
    var a = l.queue;
    if (a === null) throw Error(d(311));
    a.lastRenderedReducer = u;
    var e = l.baseQueue, n = a.pending;
    if (n !== null) {
      if (e !== null) {
        var f = e.next;
        e.next = n.next, n.next = f;
      }
      t.baseQueue = e = n, a.pending = null;
    }
    if (n = l.baseState, e === null) l.memoizedState = n;
    else {
      t = e.next;
      var i = f = null, c = null, y = t, S = !1;
      do {
        var E = y.lane & -536870913;
        if (E !== y.lane ? ($ & E) === E : (vu & E) === E) {
          var r = y.revertLane;
          if (r === 0)
            c !== null && (c = c.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: y.action,
              hasEagerState: y.hasEagerState,
              eagerState: y.eagerState,
              next: null
            }), E === fa && (S = !0);
          else if ((vu & r) === r) {
            y = y.next, r === fa && (S = !0);
            continue;
          } else
            E = {
              lane: 0,
              revertLane: y.revertLane,
              gesture: null,
              action: y.action,
              hasEagerState: y.hasEagerState,
              eagerState: y.eagerState,
              next: null
            }, c === null ? (i = c = E, f = n) : c = c.next = E, V.lanes |= r, qu |= r;
          E = y.action, ra && u(n, E), n = y.hasEagerState ? y.eagerState : u(n, E);
        } else
          r = {
            lane: E,
            revertLane: y.revertLane,
            gesture: y.gesture,
            action: y.action,
            hasEagerState: y.hasEagerState,
            eagerState: y.eagerState,
            next: null
          }, c === null ? (i = c = r, f = n) : c = c.next = r, V.lanes |= E, qu |= E;
        y = y.next;
      } while (y !== null && y !== t);
      if (c === null ? f = n : c.next = i, !vt(n, l.memoizedState) && (Dl = !0, S && (u = qa, u !== null)))
        throw u;
      l.memoizedState = n, l.baseState = f, l.baseQueue = c, a.lastRenderedState = n;
    }
    return e === null && (a.lanes = 0), [l.memoizedState, a.dispatch];
  }
  function $i(l) {
    var t = Nl(), u = t.queue;
    if (u === null) throw Error(d(311));
    u.lastRenderedReducer = l;
    var a = u.dispatch, e = u.pending, n = t.memoizedState;
    if (e !== null) {
      u.pending = null;
      var f = e = e.next;
      do
        n = l(n, f.action), f = f.next;
      while (f !== e);
      vt(n, t.memoizedState) || (Dl = !0), t.memoizedState = n, t.baseQueue === null && (t.baseState = n), u.lastRenderedState = n;
    }
    return [n, a];
  }
  function iv(l, t, u) {
    var a = V, e = Nl(), n = K;
    if (n) {
      if (u === void 0) throw Error(d(407));
      u = u();
    } else u = t();
    var f = !vt(
      (sl || e).memoizedState,
      u
    );
    if (f && (e.memoizedState = u, Dl = !0), e = e.queue, Pi(vv.bind(null, a, e, l), [
      l
    ]), l = e.getSnapshot !== t || f || Ml !== null && (Ml.memoizedState.tag & 1) !== 0, Qa(
      l ? 9 : 8,
      { destroy: void 0 },
      ov.bind(null, a, e, u, t),
      null
    ), l) {
      if (a.flags |= 2048, ml === null) throw Error(d(349));
      n || (vu & 127) !== 0 || cv(a, t, u);
    }
    return u;
  }
  function cv(l, t, u) {
    l.flags |= 16384, l = { getSnapshot: t, value: u }, t = V.updateQueue, t === null ? (t = Jn(), V.updateQueue = t, t.stores = [l]) : (u = t.stores, u === null ? t.stores = [l] : u.push(l));
  }
  function ov(l, t, u, a) {
    t.value = u, t.getSnapshot = a, rv(t) && dv(l);
  }
  function vv(l, t, u) {
    return u(function() {
      rv(t) && dv(l);
    });
  }
  function rv(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var u = t();
      return !vt(l, u);
    } catch {
      return !0;
    }
  }
  function dv(l) {
    var t = la(l, 2);
    t !== null && ut(t, l, 2);
  }
  function Ii(l) {
    var t = wl();
    if (typeof l == "function") {
      var u = l;
      if (l = u(), ra) {
        Tu(!0);
        try {
          u();
        } finally {
          Tu(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = l, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ru,
      lastRenderedState: l
    }, t;
  }
  function sv(l, t, u, a) {
    return l.baseState = u, Fi(
      l,
      sl,
      typeof a == "function" ? a : ru
    );
  }
  function jy(l, t, u, a, e) {
    if (In(l)) throw Error(d(485));
    if (l = t.action, l !== null) {
      var n = {
        payload: e,
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
      U.T !== null ? u(!0) : n.isTransition = !1, a(n), u = t.pending, u === null ? (n.next = t.pending = n, yv(t, n)) : (n.next = u.next, t.pending = u.next = n);
    }
  }
  function yv(l, t) {
    var u = t.action, a = t.payload, e = l.state;
    if (t.isTransition) {
      var n = U.T, f = {};
      f.types = n !== null ? n.types : null, U.T = f;
      try {
        var i = u(e, a), c = U.S;
        c !== null && c(f, i), mv(l, t, i);
      } catch (y) {
        ki(l, t, y);
      } finally {
        n !== null && f.types !== null && (n.types = f.types), U.T = n;
      }
    } else
      try {
        n = u(e, a), mv(l, t, n);
      } catch (y) {
        ki(l, t, y);
      }
  }
  function mv(l, t, u) {
    u !== null && typeof u == "object" && typeof u.then == "function" ? u.then(
      function(a) {
        hv(l, t, a);
      },
      function(a) {
        return ki(l, t, a);
      }
    ) : hv(l, t, u);
  }
  function hv(l, t, u) {
    t.status = "fulfilled", t.value = u, gv(t), l.state = u, t = l.pending, t !== null && (u = t.next, u === t ? l.pending = null : (u = u.next, t.next = u, yv(l, u)));
  }
  function ki(l, t, u) {
    var a = l.pending;
    if (l.pending = null, a !== null) {
      a = a.next;
      do
        t.status = "rejected", t.reason = u, gv(t), t = t.next;
      while (t !== a);
    }
    l.action = null;
  }
  function gv(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function Sv(l, t) {
    return t;
  }
  function Tv(l, t) {
    if (K) {
      var u = ml.formState;
      if (u !== null) {
        l: {
          var a = V;
          if (K) {
            if (gl) {
              t: {
                for (var e = gl, n = Nt; e.nodeType !== 8; ) {
                  if (!n) {
                    e = null;
                    break t;
                  }
                  if (e = Mt(
                    e.nextSibling
                  ), e === null) {
                    e = null;
                    break t;
                  }
                }
                n = e.data, e = n === "F!" || n === "F" ? e : null;
              }
              if (e) {
                gl = Mt(
                  e.nextSibling
                ), a = e.data === "F!";
                break l;
              }
            }
            Ou(a);
          }
          a = !1;
        }
        a && (t = u[0]);
      }
    }
    return u = wl(), u.memoizedState = u.baseState = t, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Sv,
      lastRenderedState: t
    }, u.queue = a, u = xv.bind(
      null,
      V,
      a
    ), a.dispatch = u, a = Ii(!1), n = ec.bind(
      null,
      V,
      !1,
      a.queue
    ), a = wl(), e = {
      state: t,
      dispatch: null,
      action: l,
      pending: null
    }, a.queue = e, u = jy.bind(
      null,
      V,
      e,
      n,
      u
    ), e.dispatch = u, a.memoizedState = l, [t, u, !1];
  }
  function bv(l) {
    var t = Nl();
    return Ev(t, sl, l);
  }
  function Ev(l, t, u) {
    if (t = Fi(
      l,
      t,
      Sv
    )[0], l = Wn(ru)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var a = qe(t);
      } catch (f) {
        throw f === ja ? xn : f;
      }
    else a = t;
    t = Nl();
    var e = t.queue, n = e.dispatch;
    return u !== t.memoizedState && (V.flags |= 2048, Qa(
      9,
      { destroy: void 0 },
      xy.bind(null, e, u),
      null
    )), [a, n, l];
  }
  function xy(l, t) {
    l.action = t;
  }
  function zv(l) {
    var t = Nl(), u = sl;
    if (u !== null)
      return Ev(t, u, l);
    Nl(), t = t.memoizedState, u = Nl();
    var a = u.queue.dispatch;
    return u.memoizedState = l, [t, a, !1];
  }
  function Qa(l, t, u, a) {
    return l = { tag: l, create: u, deps: a, inst: t, next: null }, t = V.updateQueue, t === null && (t = Jn(), V.updateQueue = t), u = t.lastEffect, u === null ? t.lastEffect = l.next = l : (a = u.next, u.next = l, l.next = a, t.lastEffect = l), l;
  }
  function _v() {
    return Nl().memoizedState;
  }
  function Fn(l, t, u, a) {
    var e = wl();
    V.flags |= l, e.memoizedState = Qa(
      1 | t,
      { destroy: void 0 },
      u,
      a === void 0 ? null : a
    );
  }
  function $n(l, t, u, a) {
    var e = Nl();
    a = a === void 0 ? null : a;
    var n = e.memoizedState.inst;
    sl !== null && a !== null && Vi(a, sl.memoizedState.deps) ? e.memoizedState = Qa(t, n, u, a) : (V.flags |= l, e.memoizedState = Qa(
      1 | t,
      n,
      u,
      a
    ));
  }
  function Ov(l, t) {
    Fn(8390656, 8, l, t);
  }
  function Pi(l, t) {
    $n(2048, 8, l, t);
  }
  function Gy(l) {
    V.flags |= 4;
    var t = V.updateQueue;
    if (t === null)
      t = Jn(), V.updateQueue = t, t.events = [l];
    else {
      var u = t.events;
      u === null ? t.events = [l] : u.push(l);
    }
  }
  function Nv(l) {
    var t = Nl().memoizedState;
    return Gy({ ref: t, nextImpl: l }), function() {
      if ((fl & 2) !== 0) throw Error(d(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function Av(l, t) {
    return $n(4, 2, l, t);
  }
  function Mv(l, t) {
    return $n(4, 4, l, t);
  }
  function Dv(l, t) {
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
  function Cv(l, t, u) {
    u = u != null ? u.concat([l]) : null, $n(4, 4, Dv.bind(null, t, l), u);
  }
  function lc() {
  }
  function Uv(l, t) {
    var u = Nl();
    t = t === void 0 ? null : t;
    var a = u.memoizedState;
    return t !== null && Vi(t, a[1]) ? a[0] : (u.memoizedState = [l, t], l);
  }
  function Rv(l, t) {
    var u = Nl();
    t = t === void 0 ? null : t;
    var a = u.memoizedState;
    if (t !== null && Vi(t, a[1]))
      return a[0];
    if (a = l(), ra) {
      Tu(!0);
      try {
        l();
      } finally {
        Tu(!1);
      }
    }
    return u.memoizedState = [a, t], a;
  }
  function tc(l, t, u) {
    return u === void 0 || (vu & 1073741824) !== 0 && ($ & 261930) === 0 ? l.memoizedState = t : (l.memoizedState = u, l = Qr(), V.lanes |= l, qu |= l, u);
  }
  function Hv(l, t, u, a) {
    return vt(u, t) ? u : Uu.current !== null ? (l = tc(l, u, a), vt(l, t) || (Dl = !0), l) : (vu & 106) === 0 || (vu & 1073741824) !== 0 && ($ & 261930) === 0 ? (Dl = !0, l.memoizedState = u) : (l = Qr(), V.lanes |= l, qu |= l, t);
  }
  function pv(l, t, u, a, e) {
    var n = X.p;
    X.p = n !== 0 && 8 > n ? n : 8;
    var f = U.T, i = {};
    i.types = f !== null ? f.types : null, U.T = i, ec(l, !1, t, u);
    try {
      var c = e(), y = U.S;
      if (y !== null && y(i, c), c !== null && typeof c == "object" && typeof c.then == "function") {
        var S = By(
          c,
          a
        );
        je(
          l,
          t,
          S,
          mt(l)
        );
      } else
        je(
          l,
          t,
          a,
          mt(l)
        );
    } catch (E) {
      je(
        l,
        t,
        { then: function() {
        }, status: "rejected", reason: E },
        mt()
      );
    } finally {
      X.p = n, f !== null && i.types !== null && (f.types = i.types), U.T = f;
    }
  }
  function Xy() {
  }
  function uc(l, t, u, a) {
    if (l.tag !== 5) throw Error(d(476));
    var e = Bv(l).queue;
    pv(
      l,
      e,
      t,
      lu,
      u === null ? Xy : function() {
        return Yv(l), u(a);
      }
    );
  }
  function Bv(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: lu,
      baseState: lu,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ru,
        lastRenderedState: lu
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
        lastRenderedReducer: ru,
        lastRenderedState: u
      },
      next: null
    }, l.memoizedState = t, l = l.alternate, l !== null && (l.memoizedState = t), t;
  }
  function Yv(l) {
    var t = Bv(l);
    t.next === null && (t = l.alternate.memoizedState), je(
      l,
      t.next.queue,
      {},
      mt()
    );
  }
  function ac() {
    return xl(fe);
  }
  function qv() {
    return Nl().memoizedState;
  }
  function jv() {
    return Nl().memoizedState;
  }
  function Qy(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var u = mt();
          l = Du(u);
          var a = Cu(t, l, u);
          a !== null && (ut(a, t, u), Re(a, t, u)), t = { cache: Ri() }, l.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function Zy(l, t, u) {
    var a = mt();
    u = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, In(l) ? Gv(t, u) : (u = zi(l, t, u, a), u !== null && (ut(u, l, a), Xv(u, t, a)));
  }
  function xv(l, t, u) {
    var a = mt();
    je(l, t, u, a);
  }
  function je(l, t, u, a) {
    var e = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (In(l)) Gv(t, e);
    else {
      var n = l.alternate;
      if (l.lanes === 0 && (n === null || n.lanes === 0) && (n = t.lastRenderedReducer, n !== null))
        try {
          var f = t.lastRenderedState, i = n(f, u);
          if (e.hasEagerState = !0, e.eagerState = i, vt(i, f))
            return Dn(l, t, e, 0), ml === null && Mn(), !1;
        } catch {
        }
      if (u = zi(l, t, e, a), u !== null)
        return ut(u, l, a), Xv(u, t, a), !0;
    }
    return !1;
  }
  function ec(l, t, u, a) {
    if (a = {
      lane: 2,
      revertLane: Wc(),
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, In(l)) {
      if (t) throw Error(d(479));
    } else
      t = zi(
        l,
        u,
        a,
        2
      ), t !== null && ut(t, l, 2);
  }
  function In(l) {
    var t = l.alternate;
    return l === V || t !== null && t === V;
  }
  function Gv(l, t) {
    Ga = Ln = !0;
    var u = l.pending;
    u === null ? t.next = t : (t.next = u.next, u.next = t), l.pending = t;
  }
  function Xv(l, t, u) {
    if ((u & 4194048) !== 0) {
      var a = t.lanes;
      a &= l.pendingLanes, u |= a, t.lanes = u, Qo(l, u);
    }
  }
  var kn = {
    readContext: xl,
    use: wn,
    useCallback: zl,
    useContext: zl,
    useEffect: zl,
    useImperativeHandle: zl,
    useLayoutEffect: zl,
    useInsertionEffect: zl,
    useMemo: zl,
    useReducer: zl,
    useRef: zl,
    useState: zl,
    useDebugValue: zl,
    useDeferredValue: zl,
    useTransition: zl,
    useSyncExternalStore: zl,
    useId: zl,
    useHostTransitionStatus: zl,
    useFormState: zl,
    useActionState: zl,
    useOptimistic: zl,
    useMemoCache: zl,
    useCacheRefresh: zl,
    useEffectEvent: zl
  }, Qv = {
    readContext: xl,
    use: wn,
    useCallback: function(l, t) {
      return wl().memoizedState = [
        l,
        t === void 0 ? null : t
      ], l;
    },
    useContext: xl,
    useEffect: Ov,
    useImperativeHandle: function(l, t, u) {
      u = u != null ? u.concat([l]) : null, Fn(
        4194308,
        4,
        Dv.bind(null, t, l),
        u
      );
    },
    useLayoutEffect: function(l, t) {
      return Fn(4194308, 4, l, t);
    },
    useInsertionEffect: function(l, t) {
      Fn(4, 2, l, t);
    },
    useMemo: function(l, t) {
      var u = wl();
      t = t === void 0 ? null : t;
      var a = l();
      if (ra) {
        Tu(!0);
        try {
          l();
        } finally {
          Tu(!1);
        }
      }
      return u.memoizedState = [a, t], a;
    },
    useReducer: function(l, t, u) {
      var a = wl();
      if (u !== void 0) {
        var e = u(t);
        if (ra) {
          Tu(!0);
          try {
            u(t);
          } finally {
            Tu(!1);
          }
        }
      } else e = t;
      return a.memoizedState = a.baseState = e, l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l,
        lastRenderedState: e
      }, a.queue = l, l = l.dispatch = Zy.bind(
        null,
        V,
        l
      ), [a.memoizedState, l];
    },
    useRef: function(l) {
      var t = wl();
      return l = { current: l }, t.memoizedState = l;
    },
    useState: function(l) {
      l = Ii(l);
      var t = l.queue, u = xv.bind(null, V, t);
      return t.dispatch = u, [l.memoizedState, u];
    },
    useDebugValue: lc,
    useDeferredValue: function(l, t) {
      var u = wl();
      return tc(u, l, t);
    },
    useTransition: function() {
      var l = Ii(!1);
      return l = pv.bind(
        null,
        V,
        l.queue,
        !0,
        !1
      ), wl().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, t, u) {
      var a = V, e = wl();
      if (K) {
        if (u === void 0)
          throw Error(d(407));
        u = u();
      } else {
        if (u = t(), ml === null)
          throw Error(d(349));
        ($ & 127) !== 0 || cv(a, t, u);
      }
      e.memoizedState = u;
      var n = { value: u, getSnapshot: t };
      return e.queue = n, Ov(vv.bind(null, a, n, l), [
        l
      ]), a.flags |= 2048, Qa(
        9,
        { destroy: void 0 },
        ov.bind(
          null,
          a,
          n,
          u,
          t
        ),
        null
      ), u;
    },
    useId: function() {
      var l = wl(), t = ml.identifierPrefix;
      if (K) {
        var u = Lt, a = Vt;
        u = (a & ~(1 << 32 - ct(a) - 1)).toString(32) + u, t = "_" + t + "R_" + u, u = Kn++, 0 < u && (t += "H" + u.toString(32)), t += "_";
      } else
        u = Yy++, t = "_" + t + "r_" + u.toString(32) + "_";
      return l.memoizedState = t;
    },
    useHostTransitionStatus: ac,
    useFormState: Tv,
    useActionState: Tv,
    useOptimistic: function(l) {
      var t = wl();
      t.memoizedState = t.baseState = l;
      var u = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = u, t = ec.bind(
        null,
        V,
        !0,
        u
      ), u.dispatch = t, [l, t];
    },
    useMemoCache: Wi,
    useCacheRefresh: function() {
      return wl().memoizedState = Qy.bind(
        null,
        V
      );
    },
    useEffectEvent: function(l) {
      var t = wl(), u = { impl: l };
      return t.memoizedState = u, function() {
        if ((fl & 2) !== 0)
          throw Error(d(440));
        return u.impl.apply(void 0, arguments);
      };
    }
  }, Zv = {
    readContext: xl,
    use: wn,
    useCallback: Uv,
    useContext: xl,
    useEffect: Pi,
    useImperativeHandle: Cv,
    useInsertionEffect: Av,
    useLayoutEffect: Mv,
    useMemo: Rv,
    useReducer: Wn,
    useRef: _v,
    useState: function() {
      return Wn(ru);
    },
    useDebugValue: lc,
    useDeferredValue: function(l, t) {
      var u = Nl();
      return Hv(
        u,
        sl.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = Wn(ru)[0], t = Nl().memoizedState;
      return [
        typeof l == "boolean" ? l : qe(l),
        t
      ];
    },
    useSyncExternalStore: iv,
    useId: qv,
    useHostTransitionStatus: ac,
    useFormState: bv,
    useActionState: bv,
    useOptimistic: function(l, t) {
      var u = Nl();
      return sv(u, sl, l, t);
    },
    useMemoCache: Wi,
    useCacheRefresh: jv,
    useEffectEvent: Nv
  }, Vy = {
    readContext: xl,
    use: wn,
    useCallback: Uv,
    useContext: xl,
    useEffect: Pi,
    useImperativeHandle: Cv,
    useInsertionEffect: Av,
    useLayoutEffect: Mv,
    useMemo: Rv,
    useReducer: $i,
    useRef: _v,
    useState: function() {
      return $i(ru);
    },
    useDebugValue: lc,
    useDeferredValue: function(l, t) {
      var u = Nl();
      return sl === null ? tc(u, l, t) : Hv(
        u,
        sl.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = $i(ru)[0], t = Nl().memoizedState;
      return [
        typeof l == "boolean" ? l : qe(l),
        t
      ];
    },
    useSyncExternalStore: iv,
    useId: qv,
    useHostTransitionStatus: ac,
    useFormState: zv,
    useActionState: zv,
    useOptimistic: function(l, t) {
      var u = Nl();
      return sl !== null ? sv(u, sl, l, t) : (u.baseState = l, [l, u.queue.dispatch]);
    },
    useMemoCache: Wi,
    useCacheRefresh: jv,
    useEffectEvent: Nv
  };
  function nc(l, t, u, a) {
    t = l.memoizedState, u = u(a, t), u = u == null ? t : w({}, t, u), l.memoizedState = u, l.lanes === 0 && (l.updateQueue.baseState = u);
  }
  var fc = {
    enqueueSetState: function(l, t, u) {
      l = l._reactInternals;
      var a = mt(), e = Du(a);
      e.payload = t, u != null && (e.callback = u), t = Cu(l, e, a), t !== null && (ut(t, l, a), Re(t, l, a));
    },
    enqueueReplaceState: function(l, t, u) {
      l = l._reactInternals;
      var a = mt(), e = Du(a);
      e.tag = 1, e.payload = t, u != null && (e.callback = u), t = Cu(l, e, a), t !== null && (ut(t, l, a), Re(t, l, a));
    },
    enqueueForceUpdate: function(l, t) {
      l = l._reactInternals;
      var u = mt(), a = Du(u);
      a.tag = 2, t != null && (a.callback = t), t = Cu(l, a, u), t !== null && (ut(t, l, u), Re(t, l, u));
    }
  };
  function Vv(l, t, u, a, e, n, f) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(a, n, f) : t.prototype && t.prototype.isPureReactComponent ? !_e(u, a) || !_e(e, n) : !0;
  }
  function Lv(l, t, u, a) {
    l = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(u, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(u, a), t.state !== l && fc.enqueueReplaceState(t, t.state, null);
  }
  function da(l, t) {
    var u = t;
    if ("ref" in t) {
      u = {};
      for (var a in t)
        a !== "ref" && (u[a] = t[a]);
    }
    if (l = l.defaultProps) {
      u === t && (u = w({}, u));
      for (var e in l)
        u[e] === void 0 && (u[e] = l[e]);
    }
    return u;
  }
  function Kv(l) {
    An(l);
  }
  function Jv(l) {
    console.error(l);
  }
  function wv(l) {
    An(l);
  }
  function Pn(l, t) {
    try {
      var u = l.onUncaughtError;
      u(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function Wv(l, t, u) {
    try {
      var a = l.onCaughtError;
      a(u.value, {
        componentStack: u.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (e) {
      setTimeout(function() {
        throw e;
      });
    }
  }
  function ic(l, t, u) {
    return u = Du(u), u.tag = 3, u.payload = { element: null }, u.callback = function() {
      Pn(l, t);
    }, u;
  }
  function Fv(l) {
    return l = Du(l), l.tag = 3, l;
  }
  function $v(l, t, u, a) {
    var e = u.type.getDerivedStateFromError;
    if (typeof e == "function") {
      var n = a.value;
      l.payload = function() {
        return e(n);
      }, l.callback = function() {
        Wv(t, u, a);
      };
    }
    var f = u.stateNode;
    f !== null && typeof f.componentDidCatch == "function" && (l.callback = function() {
      Wv(t, u, a), typeof e != "function" && (ju === null ? ju = /* @__PURE__ */ new Set([this]) : ju.add(this));
      var i = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: i !== null ? i : ""
      });
    });
  }
  function Ly(l, t, u, a, e) {
    if (u.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (t = u.alternate, t !== null && ea(
        t,
        u,
        e,
        !0
      ), u = Gl.current, u !== null) {
        switch (u.tag) {
          case 31:
          case 13:
          case 19:
            return Ll === null ? Ef() : u.alternate === null && _l === 0 && (_l = 3), u.flags &= -257, u.flags |= 65536, u.lanes = e, a === Gn ? u.flags |= 16384 : (t = u.updateQueue, t === null ? u.updateQueue = /* @__PURE__ */ new Set([a]) : t.add(a), Kc(l, a, e)), !1;
          case 22:
            return u.flags |= 65536, a === Gn ? u.flags |= 16384 : (t = u.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, u.updateQueue = t) : (u = t.retryQueue, u === null ? t.retryQueue = /* @__PURE__ */ new Set([a]) : u.add(a)), Kc(l, a, e)), !1;
        }
        throw Error(d(435, u.tag));
      }
      return Kc(l, a, e), Ef(), !1;
    }
    if (K)
      return t = Gl.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = e, a !== Mi && (l = Error(d(422), { cause: a }), Ae(zt(l, u)))) : (a !== Mi && (t = Error(d(423), {
        cause: a
      }), Ae(
        zt(t, u)
      )), l = l.current.alternate, l.flags |= 65536, e &= -e, l.lanes |= e, a = zt(a, u), e = ic(
        l.stateNode,
        a,
        e
      ), ji(l, e), _l !== 4 && (_l = 2)), !1;
    var n = Error(d(520), { cause: a });
    if (n = zt(n, u), Ke === null ? Ke = [n] : Ke.push(n), _l !== 4 && (_l = 2), t === null) return !0;
    a = zt(a, u), u = t;
    do {
      switch (u.tag) {
        case 3:
          return u.flags |= 65536, l = e & -e, u.lanes |= l, l = ic(u.stateNode, a, l), ji(u, l), !1;
        case 1:
          if (t = u.type, n = u.stateNode, (u.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (ju === null || !ju.has(n))))
            return u.flags |= 65536, e &= -e, u.lanes |= e, e = Fv(e), $v(
              e,
              l,
              u,
              a
            ), ji(u, e), !1;
          break;
        case 22:
          if (u.memoizedState !== null)
            return u.flags |= 65536, !1;
      }
      u = u.return;
    } while (u !== null);
    return !1;
  }
  var cc = Error(d(461)), Dl = !1;
  function Ul(l, t, u, a) {
    t.child = l === null ? lv(t, null, u, a) : va(
      t,
      l.child,
      u,
      a
    );
  }
  function Iv(l, t, u, a, e) {
    u = u.render;
    var n = t.ref;
    if ("ref" in a) {
      var f = {};
      for (var i in a)
        i !== "ref" && (f[i] = a[i]);
    } else f = a;
    return na(t), a = Li(
      l,
      t,
      u,
      f,
      n,
      e
    ), i = Ki(), l !== null && !Dl ? (Ji(l, t, e), du(l, t, e)) : (K && i && Hn(t), t.flags |= 1, Ul(l, t, a, e), t.child);
  }
  function kv(l, t, u, a, e) {
    if (l === null) {
      var n = u.type;
      return typeof n == "function" && !_i(n) && n.defaultProps === void 0 && u.compare === null ? (t.tag = 15, t.type = n, Pv(
        l,
        t,
        n,
        a,
        e
      )) : (l = Un(
        u.type,
        null,
        a,
        t,
        t.mode,
        e
      ), l.ref = t.ref, l.return = t, t.child = l);
    }
    if (n = l.child, !hc(l, e)) {
      var f = n.memoizedProps;
      if (u = u.compare, u = u !== null ? u : _e, u(f, a) && l.ref === t.ref)
        return du(l, t, e);
    }
    return t.flags |= 1, l = fu(n, a), l.ref = t.ref, l.return = t, t.child = l;
  }
  function Pv(l, t, u, a, e) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (_e(n, a) && l.ref === t.ref)
        if (Dl = !1, t.pendingProps = a = n, hc(l, e))
          (l.flags & 131072) !== 0 && (Dl = !0);
        else
          return t.lanes = l.lanes, du(l, t, e);
    }
    return oc(
      l,
      t,
      u,
      a,
      e
    );
  }
  function lr(l, t, u, a) {
    var e = a.children, n = l !== null ? l.memoizedState : null;
    if (l === null && t.stateNode === null && (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), a.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (n = n !== null ? n.baseLanes | u : u, l !== null) {
          for (a = t.child = l.child, e = 0; a !== null; )
            e = e | a.lanes | a.childLanes, a = a.sibling;
          a = e & ~n;
        } else a = 0, t.child = null;
        return tr(
          l,
          t,
          n,
          u,
          a
        );
      }
      if ((u & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && jn(
          t,
          n !== null ? n.cachePool : null
        ), n !== null ? av(t, n) : Gi(), ev(t);
      else
        return a = t.lanes = 536870912, tr(
          l,
          t,
          n !== null ? n.baseLanes | u : u,
          u,
          a
        );
    } else
      n !== null ? (jn(t, n.cachePool), av(t, n), Hu(), t.memoizedState = null) : (l !== null && jn(t, null), Gi(), Hu());
    return Ul(l, t, e, u), t.child;
  }
  function xe(l, t) {
    return l !== null && l.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function tr(l, t, u, a, e) {
    var n = pi();
    return n = n === null ? null : { parent: Al._currentValue, pool: n }, t.memoizedState = {
      baseLanes: u,
      cachePool: n
    }, l !== null && jn(t, null), Gi(), ev(t), l !== null && ea(l, t, a, !0), t.childLanes = e, null;
  }
  function lf(l, t) {
    return t = tf(
      { mode: t.mode, children: t.children },
      l.mode
    ), t.ref = l.ref, l.child = t, t.return = l, t;
  }
  function ur(l, t, u) {
    return va(t, l.child, null, u), l = lf(t, t.pendingProps), l.flags |= 2, rt(t), t.memoizedState = null, l;
  }
  function Ky(l, t, u) {
    var a = t.pendingProps, e = (t.flags & 128) !== 0;
    if (t.flags &= -129, l === null) {
      if (K) {
        if (a.mode === "hidden")
          return l = lf(t, a), t.lanes = 536870912, l.memoizedState = { baseLanes: 0, cachePool: null }, xe(null, l);
        if (Qi(t), (l = gl) ? (l = Dd(
          l,
          Nt
        ), l = l !== null && l.data === "&" ? l : null, l !== null && (t.memoizedState = {
          dehydrated: l,
          treeContext: zu !== null ? { id: Vt, overflow: Lt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, u = G0(l), u.return = t, t.child = u, pl = t, gl = null)) : l = null, l === null) throw Ou(t);
        return t.lanes = 536870912, null;
      }
      return lf(t, a);
    }
    var n = l.memoizedState;
    if (n !== null) {
      var f = n.dehydrated;
      if (Qi(t), e)
        if (t.flags & 256)
          t.flags &= -257, t = ur(
            l,
            t,
            u
          );
        else if (t.memoizedState !== null)
          t.child = l.child, t.flags |= 128, t = null;
        else throw Error(d(558));
      else if (Dl || ea(l, t, u, !1), e = (u & l.childLanes) !== 0, Dl || e) {
        if (Uu.current === null) {
          if (a = ml, a !== null && (f = Zo(a, u), f !== 0 && f !== n.retryLane))
            throw n.retryLane = f, la(l, f), ut(a, l, f), cc;
          Ef();
        }
        t = ur(
          l,
          t,
          u
        );
      } else
        l = n.treeContext, gl = Mt(f.nextSibling), pl = t, K = !0, _u = null, Nt = !1, l !== null && Z0(t, l), t = lf(t, a), t.flags |= 134221824;
      return t;
    }
    return l = fu(l.child, {
      mode: a.mode,
      children: a.children
    }), l.ref = t.ref, t.child = l, l.return = t, l;
  }
  function Za(l, t) {
    var u = t.ref;
    if (u === null)
      l !== null && l.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof u != "function" && typeof u != "object")
        throw Error(d(284));
      (l === null || l.ref !== u) && (t.flags |= 4194816);
    }
  }
  function oc(l, t, u, a, e) {
    return na(t), u = Li(
      l,
      t,
      u,
      a,
      void 0,
      e
    ), a = Ki(), l !== null && !Dl ? (Ji(l, t, e), du(l, t, e)) : (K && a && Hn(t), t.flags |= 1, Ul(l, t, u, e), t.child);
  }
  function ar(l, t, u, a, e, n) {
    return na(t), t.updateQueue = null, u = fv(
      t,
      a,
      u,
      e
    ), nv(l), a = Ki(), l !== null && !Dl ? (Ji(l, t, n), du(l, t, n)) : (K && a && Hn(t), t.flags |= 1, Ul(l, t, u, n), t.child);
  }
  function er(l, t, u, a, e) {
    if (na(t), t.stateNode === null) {
      var n = Ha, f = u.contextType;
      typeof f == "object" && f !== null && (n = xl(f)), n = new u(a, n), t.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = fc, t.stateNode = n, n._reactInternals = t, n = t.stateNode, n.props = a, n.state = t.memoizedState, n.refs = {}, Yi(t), f = u.contextType, n.context = typeof f == "object" && f !== null ? xl(f) : Ha, n.state = t.memoizedState, f = u.getDerivedStateFromProps, typeof f == "function" && (nc(
        t,
        u,
        f,
        a
      ), n.state = t.memoizedState), typeof u.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (f = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), f !== n.state && fc.enqueueReplaceState(n, n.state, null), pe(t, a, n, e), He(), n.state = t.memoizedState), typeof n.componentDidMount == "function" && (t.flags |= 4194308), a = !0;
    } else if (l === null) {
      n = t.stateNode;
      var i = t.memoizedProps, c = da(u, i);
      n.props = c;
      var y = n.context, S = u.contextType;
      f = Ha, typeof S == "object" && S !== null && (f = xl(S));
      var E = u.getDerivedStateFromProps;
      S = typeof E == "function" || typeof n.getSnapshotBeforeUpdate == "function", i = t.pendingProps !== i, S || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (i || y !== f) && Lv(
        t,
        n,
        a,
        f
      ), Mu = !1;
      var r = t.memoizedState;
      n.state = r, pe(t, a, n, e), He(), y = t.memoizedState, i || r !== y || Mu ? (typeof E == "function" && (nc(
        t,
        u,
        E,
        a
      ), y = t.memoizedState), (c = Mu || Vv(
        t,
        u,
        c,
        a,
        r,
        y,
        f
      )) ? (S || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = y), n.props = a, n.state = y, n.context = f, a = c) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), a = !1);
    } else {
      n = t.stateNode, qi(l, t), f = t.memoizedProps, S = da(u, f), n.props = S, E = t.pendingProps, r = n.context, y = u.contextType, c = Ha, typeof y == "object" && y !== null && (c = xl(y)), i = u.getDerivedStateFromProps, (y = typeof i == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (f !== E || r !== c) && Lv(
        t,
        n,
        a,
        c
      ), Mu = !1, r = t.memoizedState, n.state = r, pe(t, a, n, e), He();
      var g = t.memoizedState;
      f !== E || r !== g || Mu || l !== null && l.dependencies !== null && Yn(l.dependencies) ? (typeof i == "function" && (nc(
        t,
        u,
        i,
        a
      ), g = t.memoizedState), (S = Mu || Vv(
        t,
        u,
        S,
        a,
        r,
        g,
        c
      ) || l !== null && l.dependencies !== null && Yn(l.dependencies)) ? (y || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(a, g, c), typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(
        a,
        g,
        c
      )), typeof n.componentDidUpdate == "function" && (t.flags |= 4), typeof n.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || f === l.memoizedProps && r === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || f === l.memoizedProps && r === l.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = g), n.props = a, n.state = g, n.context = c, a = S) : (typeof n.componentDidUpdate != "function" || f === l.memoizedProps && r === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || f === l.memoizedProps && r === l.memoizedState || (t.flags |= 1024), a = !1);
    }
    return n = a, Za(l, t), a = (t.flags & 128) !== 0, n || a ? (n = t.stateNode, u = a && typeof u.getDerivedStateFromError != "function" ? null : n.render(), t.flags |= 1, l !== null && a ? (t.child = va(
      t,
      l.child,
      null,
      e
    ), t.child = va(
      t,
      null,
      u,
      e
    )) : Ul(l, t, u, e), t.memoizedState = n.state, l = t.child) : l = du(
      l,
      t,
      e
    ), l;
  }
  function nr(l, t, u, a) {
    return ua(), t.flags |= 256, Ul(l, t, u, a), t.child;
  }
  var vc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function rc(l) {
    return { baseLanes: l, cachePool: W0() };
  }
  function dc(l, t, u) {
    return l = l !== null ? l.childLanes & ~u : 0, t && (l |= yt), l;
  }
  function fr(l, t, u) {
    var a = t.pendingProps, e = !1, n = (t.flags & 128) !== 0, f;
    if ((f = n) || (f = l !== null && l.memoizedState === null ? !1 : (Xl.current & 2) !== 0), f && (e = !0, t.flags &= -129), f = (t.flags & 32) !== 0, t.flags &= -33, l === null) {
      if (K) {
        if (e ? Ru(t) : Hu(), (l = gl) ? (l = Dd(
          l,
          Nt
        ), l = l !== null && l.data !== "&" ? l : null, l !== null && (t.memoizedState = {
          dehydrated: l,
          treeContext: zu !== null ? { id: Vt, overflow: Lt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, u = G0(l), u.return = t, t.child = u, pl = t, gl = null)) : l = null, l === null) throw Ou(t);
        return ro(l) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      return n = a.children, a = a.fallback, e ? (Hu(), e = t.mode, n = tf(
        { mode: "hidden", children: n },
        e
      ), a = ta(
        a,
        e,
        u,
        null
      ), n.return = t, a.return = t, n.sibling = a, t.child = n, a = t.child, a.memoizedState = rc(u), a.childLanes = dc(
        l,
        f,
        u
      ), t.memoizedState = vc, xe(null, a)) : (Ru(t), sc(t, n));
    }
    var i = l.memoizedState;
    if (i !== null) {
      var c = i.dehydrated;
      if (c !== null)
        return Jy(
          l,
          t,
          n,
          f,
          a,
          c,
          i,
          u
        );
    }
    return e ? (Hu(), e = a.fallback, n = t.mode, i = l.child, c = i.sibling, a = fu(i, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = i.subtreeFlags & 1206910976, c !== null ? e = fu(c, e) : (e = ta(
      e,
      n,
      u,
      null
    ), e.flags |= 2), e.return = t, a.return = t, a.sibling = e, t.child = a, xe(null, a), a = t.child, e = l.child.memoizedState, e === null ? e = rc(u) : (n = e.cachePool, n !== null ? (i = Al._currentValue, n = n.parent !== i ? { parent: i, pool: i } : n) : n = W0(), e = {
      baseLanes: e.baseLanes | u,
      cachePool: n
    }), a.memoizedState = e, a.childLanes = dc(
      l,
      f,
      u
    ), t.memoizedState = vc, xe(l.child, a)) : (Ru(t), u = l.child, l = u.sibling, u = fu(u, {
      mode: "visible",
      children: a.children
    }), u.return = t, u.sibling = null, l !== null && (f = t.deletions, f === null ? (t.deletions = [l], t.flags |= 16) : f.push(l)), t.child = u, t.memoizedState = null, u);
  }
  function sc(l, t) {
    return t = tf(
      { mode: "visible", children: t },
      l.mode
    ), t.return = l, l.child = t;
  }
  function tf(l, t) {
    return l = kl(22, l, null, t), l.lanes = 0, l;
  }
  function uf(l, t, u) {
    return va(t, l.child, null, u), l = sc(
      t,
      t.pendingProps.children
    ), l.flags |= 2, t.memoizedState = null, l;
  }
  function Jy(l, t, u, a, e, n, f, i) {
    if (u)
      return t.flags & 256 ? (Ru(t), t.flags &= -257, uf(
        l,
        t,
        i
      )) : t.memoizedState !== null ? (Hu(), t.child = l.child, t.flags |= 128, null) : (Hu(), n = e.fallback, f = t.mode, e = tf(
        { mode: "visible", children: e.children },
        f
      ), n = ta(
        n,
        f,
        i,
        null
      ), n.flags |= 2, e.return = t, n.return = t, e.sibling = n, t.child = e, va(t, l.child, null, i), e = t.child, e.memoizedState = rc(i), e.childLanes = dc(
        l,
        a,
        i
      ), t.memoizedState = vc, xe(null, e));
    if (Ru(t), ro(n)) {
      if (a = n.nextSibling && n.nextSibling.dataset, a) var c = a.dgst;
      return a = c, a !== "" && (e = Error(d(419)), e.stack = "", e.digest = a, Ae({ value: e, source: null, stack: null })), uf(
        l,
        t,
        i
      );
    }
    if (Dl || ea(l, t, i, !1), a = (i & l.childLanes) !== 0, Dl || a) {
      if (Uu.current !== null)
        return uf(
          l,
          t,
          i
        );
      if (a = ml, a !== null && (e = Zo(
        a,
        i
      ), e !== 0 && e !== f.retryLane))
        throw f.retryLane = e, la(l, e), ut(a, l, e), cc;
      return vo(n) || Ef(), uf(
        l,
        t,
        i
      );
    }
    return vo(n) ? (t.flags |= 192, t.child = l.child, null) : (l = f.treeContext, gl = Mt(n.nextSibling), pl = t, K = !0, _u = null, Nt = !1, l !== null && Z0(t, l), t = sc(
      t,
      e.children
    ), t.flags |= 134221824, t);
  }
  function ir(l, t, u) {
    l.lanes |= t;
    var a = l.alternate;
    a !== null && (a.lanes |= t), Bn(l.return, t, u);
  }
  function cr(l) {
    for (var t = null; l !== null; ) {
      var u = l.alternate;
      u !== null && Vn(u) === null && (t = l), l = l.sibling;
    }
    return t;
  }
  function af(l, t, u, a, e, n) {
    var f = l.memoizedState;
    f === null ? l.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: a,
      tail: u,
      tailMode: e,
      treeForkCount: n
    } : (f.isBackwards = t, f.rendering = null, f.renderingStartTime = 0, f.last = a, f.tail = u, f.tailMode = e, f.treeForkCount = n);
  }
  function yc(l) {
    var t = l.child;
    for (l.child = null; t !== null; ) {
      var u = t.sibling;
      t.sibling = l.child, l.child = t, t = u;
    }
  }
  function mc(l, t, u) {
    var a = t.pendingProps, e = a.revealOrder, n = a.tail;
    a = a.children;
    var f = Xl.current;
    if (t.flags & 128)
      return Be(t, f), null;
    var i = (f & 2) !== 0;
    if (i ? (f = f & 1 | 2, t.flags |= 128) : f &= 1, Be(t, f), e === "backwards" && l !== null ? (yc(l), Ul(l, t, a, u), yc(l)) : Ul(l, t, a, u), a = K ? Ne : 0, !i && l !== null && (l.flags & 128) !== 0)
      l: for (l = t.child; l !== null; ) {
        if (l.tag === 13)
          l.memoizedState !== null && ir(l, u, t);
        else if (l.tag === 19)
          ir(l, u, t);
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
    switch (e) {
      case "backwards":
        u = cr(t.child), u === null ? (e = t.child, t.child = null) : (e = u.sibling, u.sibling = null, yc(t)), af(
          t,
          !0,
          e,
          null,
          n,
          a
        );
        break;
      case "unstable_legacy-backwards":
        for (u = null, e = t.child, t.child = null; e !== null; ) {
          if (l = e.alternate, l !== null && Vn(l) === null) {
            t.child = e;
            break;
          }
          l = e.sibling, e.sibling = u, u = e, e = l;
        }
        af(
          t,
          !0,
          u,
          null,
          n,
          a
        );
        break;
      case "together":
        af(
          t,
          !1,
          null,
          null,
          void 0,
          a
        );
        break;
      case "independent":
        t.memoizedState = null;
        break;
      default:
        u = cr(t.child), u === null ? (e = t.child, t.child = null) : (e = u.sibling, u.sibling = null), af(
          t,
          !1,
          e,
          u,
          n,
          a
        );
    }
    return t.child;
  }
  function or(l, t, u) {
    var a = t.pendingProps;
    return Nu(t, t.type, a.value), Ul(l, t, a.children, u), t.child;
  }
  function du(l, t, u) {
    if (l !== null && (t.dependencies = l.dependencies), qu |= t.lanes, (u & t.childLanes) === 0)
      if (l !== null) {
        if (ea(
          l,
          t,
          u,
          !1
        ), (u & t.childLanes) === 0)
          return null;
      } else return null;
    if (l !== null && t.child !== l.child)
      throw Error(d(153));
    if (t.child !== null) {
      for (l = t.child, u = fu(l, l.pendingProps), t.child = u, u.return = t; l.sibling !== null; )
        l = l.sibling, u = u.sibling = fu(l, l.pendingProps), u.return = t;
      u.sibling = null;
    }
    return t.child;
  }
  function hc(l, t) {
    return (l.lanes & t) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && Yn(l)));
  }
  function wy(l, t, u) {
    switch (t.tag) {
      case 3:
        cn(t, t.stateNode.containerInfo), Nu(t, Al, l.memoizedState.cache), ua();
        break;
      case 27:
      case 5:
        Vf(t);
        break;
      case 4:
        cn(t, t.stateNode.containerInfo);
        break;
      case 10:
        Nu(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, Qi(t), null;
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null) {
          if (a.dehydrated !== null)
            return Ru(t), t.flags |= 128, null;
          a = ea(
            l,
            t,
            u,
            !1
          );
          var e = t.child.childLanes;
          return a || (u & e) !== 0 ? fr(l, t, u) : (Ru(t), l = du(
            l,
            t,
            u
          ), l !== null ? l.sibling : null);
        }
        Ru(t);
        break;
      case 19:
        if (t.flags & 128)
          return mc(
            l,
            t,
            u
          );
        if (e = (l.flags & 128) !== 0, a = (u & t.childLanes) !== 0, a || (ea(
          l,
          t,
          u,
          !1
        ), a = (u & t.childLanes) !== 0), e) {
          if (a)
            return mc(
              l,
              t,
              u
            );
          t.flags |= 128;
        }
        if (e = t.memoizedState, e !== null && (e.rendering = null, e.tail = null, e.lastEffect = null), Be(t, Xl.current), a) break;
        return null;
      case 22:
        return t.lanes = 0, lr(
          l,
          t,
          u,
          t.pendingProps
        );
      case 24:
        Nu(t, Al, l.memoizedState.cache);
    }
    return du(l, t, u);
  }
  function vr(l, t, u) {
    if (l !== null)
      if (l.memoizedProps !== t.pendingProps)
        Dl = !0;
      else {
        if (!hc(l, u) && (t.flags & 128) === 0)
          return Dl = !1, wy(
            l,
            t,
            u
          );
        Dl = (l.flags & 131072) !== 0;
      }
    else
      Dl = !1, K && (t.flags & 1048576) !== 0 && Q0(t, Ne, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        l: {
          var a = t.pendingProps;
          if (l = ca(t.elementType), t.type = l, typeof l == "function")
            _i(l) ? (a = da(l, a), t.tag = 1, t = er(
              null,
              t,
              l,
              a,
              u
            )) : (t.tag = 0, t = oc(
              null,
              t,
              l,
              a,
              u
            ));
          else {
            if (l != null) {
              var e = l.$$typeof;
              if (e === A) {
                t.tag = 11, t = Iv(
                  null,
                  t,
                  l,
                  a,
                  u
                );
                break l;
              } else if (e === yl) {
                t.tag = 14, t = kv(
                  null,
                  t,
                  l,
                  a,
                  u
                );
                break l;
              } else if (e === Rl) {
                t.tag = 10, t.type = l, t = or(
                  null,
                  t,
                  u
                );
                break l;
              }
            }
            throw t = tl(l) || l, Error(d(306, t, ""));
          }
        }
        return t;
      case 0:
        return oc(
          l,
          t,
          t.type,
          t.pendingProps,
          u
        );
      case 1:
        return a = t.type, e = da(
          a,
          t.pendingProps
        ), er(
          l,
          t,
          a,
          e,
          u
        );
      case 3:
        l: {
          if (cn(
            t,
            t.stateNode.containerInfo
          ), l === null) throw Error(d(387));
          a = t.pendingProps;
          var n = t.memoizedState;
          e = n.element, qi(l, t), pe(t, a, null, u);
          var f = t.memoizedState;
          if (a = f.cache, Nu(t, Al, a), a !== n.cache && Ui(
            t,
            [Al],
            u,
            !0
          ), He(), a = f.element, n.isDehydrated)
            if (n = {
              element: a,
              isDehydrated: !1,
              cache: f.cache
            }, t.updateQueue.baseState = n, t.memoizedState = n, t.flags & 256) {
              t = nr(
                l,
                t,
                a,
                u
              );
              break l;
            } else if (a !== e) {
              e = zt(
                Error(d(424)),
                t
              ), Ae(e), t = nr(
                l,
                t,
                a,
                u
              );
              break l;
            } else
              for (l = t.stateNode.containerInfo, l.nodeType === 9 ? l = l.body : l = l.nodeName === "HTML" ? l.ownerDocument.body : l, gl = Mt(l.firstChild), pl = t, K = !0, _u = null, Nt = !0, u = lv(
                t,
                null,
                a,
                u
              ), t.child = u; u; )
                u.flags = u.flags & -3 | 134221824, u = u.sibling;
          else {
            if (ua(), a === e) {
              t = du(
                l,
                t,
                u
              );
              break l;
            }
            Ul(l, t, a, u);
          }
          t = t.child;
        }
        return t;
      case 26:
        return Za(l, t), l === null ? (u = Yd(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = u : K || (t.stateNode = yd(
          t.type,
          t.pendingProps,
          gu.current,
          t
        )) : t.memoizedState = Yd(
          t.type,
          l.memoizedProps,
          t.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return Vf(t), l === null && K && (a = t.stateNode = Rd(
          t.type,
          t.pendingProps,
          gu.current
        ), pl = t, Nt = !0, e = gl, Xu(t.type) ? (so = e, gl = Mt(a.firstChild)) : gl = e), Ul(
          l,
          t,
          t.pendingProps.children,
          u
        ), Za(l, t), l === null && (t.flags |= 4194304), t.child;
      case 5:
        return l === null && K && ((e = a = gl) && (a = Qm(
          a,
          t.type,
          t.pendingProps,
          Nt
        ), a !== null ? (t.stateNode = a, pl = t, gl = Mt(a.firstChild), Nt = !1, e = !0) : e = !1), e || Ou(t)), Vf(t), e = t.type, n = t.pendingProps, f = l !== null ? l.memoizedProps : null, a = n.children, ao(e, n) ? a = null : f !== null && ao(e, f) && (t.flags |= 32), t.memoizedState !== null && (e = Li(
          l,
          t,
          qy,
          null,
          null,
          u
        ), fe._currentValue = e), Za(l, t), Ul(l, t, a, u), t.child;
      case 6:
        return l === null && K && ((l = u = gl) && (u = Zm(
          u,
          t.pendingProps,
          Nt
        ), u !== null ? (t.stateNode = u, pl = t, gl = null, l = !0) : l = !1), l || Ou(t)), null;
      case 13:
        return fr(l, t, u);
      case 4:
        return cn(
          t,
          t.stateNode.containerInfo
        ), a = t.pendingProps, l === null ? t.child = va(
          t,
          null,
          a,
          u
        ) : Ul(l, t, a, u), t.child;
      case 11:
        return Iv(
          l,
          t,
          t.type,
          t.pendingProps,
          u
        );
      case 7:
        return a = t.pendingProps, Za(l, t), Ul(l, t, a, u), t.child;
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
        return or(l, t, u);
      case 9:
        return e = t.type._context, a = t.pendingProps.children, na(t), e = xl(e), a = a(e), t.flags |= 1, Ul(l, t, a, u), t.child;
      case 14:
        return kv(
          l,
          t,
          t.type,
          t.pendingProps,
          u
        );
      case 15:
        return Pv(
          l,
          t,
          t.type,
          t.pendingProps,
          u
        );
      case 19:
        return mc(l, t, u);
      case 31:
        return Ky(l, t, u);
      case 22:
        return lr(
          l,
          t,
          u,
          t.pendingProps
        );
      case 24:
        return na(t), a = xl(Al), l === null ? (e = pi(), e === null && (e = ml, n = Ri(), e.pooledCache = n, n.refCount++, n !== null && (e.pooledCacheLanes |= u), e = n), t.memoizedState = { parent: a, cache: e }, Yi(t), Nu(t, Al, e)) : ((l.lanes & u) !== 0 && (qi(l, t), pe(t, null, null, u), He()), e = l.memoizedState, n = t.memoizedState, e.parent !== a ? (e = { parent: a, cache: a }, t.memoizedState = e, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = e), Nu(t, Al, a)) : (a = n.cache, Nu(t, Al, a), a !== e.cache && Ui(
          t,
          [Al],
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
        }), a = t.pendingProps, a.name != null && a.name !== "auto" ? t.flags |= l === null ? 18882560 : 18874368 : K && Hn(t), l !== null && l.memoizedProps.name !== a.name ? t.flags |= 4194816 : Za(l, t), Ul(l, t, a.children, u), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(d(156, t.tag));
  }
  function su(l) {
    l.flags |= 4;
  }
  function gc(l, t, u, a, e) {
    var n;
    if ((n = (l.mode & 32) !== 0) && (n = u === null ? Gd(t, a) : Gd(t, a) && (a.src !== u.src || a.srcSet !== u.srcSet)), n) {
      if (l.flags |= 16777216, (e & 335544128) === e)
        if (l.stateNode.complete) l.flags |= 8192;
        else if (Kr()) l.flags |= 8192;
        else
          throw oa = Gn, Bi;
    } else l.flags &= -16777217;
  }
  function rr(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !Xd(t))
      if (Kr()) l.flags |= 8192;
      else
        throw oa = Gn, Bi;
  }
  function ef(l, t) {
    t !== null && (l.flags |= 4), l.flags & 16384 && (t = l.tag !== 22 ? Go() : 536870912, l.lanes |= t, wa |= t);
  }
  function Ge(l, t) {
    if (!K)
      switch (l.tailMode) {
        case "visible":
          break;
        case "collapsed":
          for (var u = l.tail, a = null; u !== null; )
            u.alternate !== null && (a = u), u = u.sibling;
          a === null ? t || l.tail === null ? l.tail = null : l.tail.sibling = null : a.sibling = null;
          break;
        default:
          for (t = l.tail, u = null; t !== null; )
            t.alternate !== null && (u = t), t = t.sibling;
          u === null ? l.tail = null : u.sibling = null;
      }
  }
  function Sl(l) {
    var t = l.alternate !== null && l.alternate.child === l.child, u = 0, a = 0;
    if (t)
      for (var e = l.child; e !== null; )
        u |= e.lanes | e.childLanes, a |= e.subtreeFlags & 1206910976, a |= e.flags & 1206910976, e.return = l, e = e.sibling;
    else
      for (e = l.child; e !== null; )
        u |= e.lanes | e.childLanes, a |= e.subtreeFlags, a |= e.flags, e.return = l, e = e.sibling;
    return l.subtreeFlags |= a, l.childLanes = u, t;
  }
  function Wy(l, t, u) {
    var a = t.pendingProps;
    switch (Ai(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Sl(t), null;
      case 1:
        return Sl(t), null;
      case 3:
        return u = t.stateNode, a = null, l !== null && (a = l.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), ou(Al), Ta(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (l === null || l.child === null) && (Ya(t) ? su(t) : l === null || l.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Di())), Sl(t), null;
      case 26:
        var e = t.type, n = t.memoizedState;
        return l === null ? (su(t), n !== null ? (Sl(t), rr(t, n)) : (Sl(t), gc(
          t,
          e,
          null,
          a,
          u
        ))) : n ? n !== l.memoizedState ? (su(t), Sl(t), rr(t, n)) : (Sl(t), t.flags &= -16777217) : (l = l.memoizedProps, l !== a && su(t), Sl(t), gc(
          t,
          e,
          l,
          a,
          u
        )), null;
      case 27:
        if (on(t), u = gu.current, e = t.type, l !== null && t.stateNode != null)
          l.memoizedProps !== a && su(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(d(166));
            return Sl(t), t.subtreeFlags &= -33554433, null;
          }
          l = Qt.current, Ya(t) ? V0(t) : (l = Rd(e, a, u), t.stateNode = l, su(t));
        }
        return Sl(t), t.subtreeFlags &= -33554433, null;
      case 5:
        if (on(t), e = t.type, l !== null && t.stateNode != null)
          l.memoizedProps !== a && su(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(d(166));
            return Sl(t), t.subtreeFlags &= -33554433, null;
          }
          if (n = Qt.current, Ya(t))
            V0(t);
          else {
            var f = $e(
              gu.current
            );
            switch (n) {
              case 1:
                n = f.createElementNS(
                  "http://www.w3.org/2000/svg",
                  e
                );
                break;
              case 2:
                n = f.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  e
                );
                break;
              default:
                switch (e) {
                  case "svg":
                    n = f.createElementNS(
                      "http://www.w3.org/2000/svg",
                      e
                    );
                    break;
                  case "math":
                    n = f.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      e
                    );
                    break;
                  case "script":
                    n = f.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(
                      n.firstChild
                    );
                    break;
                  case "select":
                    n = typeof a.is == "string" ? f.createElement("select", {
                      is: a.is
                    }) : f.createElement("select"), a.multiple ? n.multiple = !0 : a.size && (n.size = a.size);
                    break;
                  default:
                    n = typeof a.is == "string" ? f.createElement(e, { is: a.is }) : f.createElement(e);
                }
            }
            n[jl] = t, n[Il] = a;
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
            l: switch (Zl(n, e, a), e) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break l;
              case "img":
                a = !0;
                break l;
              default:
                a = !1;
            }
            a && su(t);
          }
        }
        return Sl(t), t.subtreeFlags &= -33554433, gc(
          t,
          t.type,
          l === null ? null : l.memoizedProps,
          t.pendingProps,
          u
        ), null;
      case 6:
        if (l && t.stateNode != null)
          l.memoizedProps !== a && su(t);
        else {
          if (typeof a != "string" && t.stateNode === null)
            throw Error(d(166));
          if (l = gu.current, Ya(t)) {
            if (l = t.stateNode, u = t.memoizedProps, a = null, e = pl, e !== null)
              switch (e.tag) {
                case 27:
                case 5:
                  a = e.memoizedProps;
              }
            l[jl] = t, l = !!(l.nodeValue === u || a !== null && a.suppressHydrationWarning === !0 || vd(l.nodeValue, u)), l || Ou(t, !0);
          } else
            l = $e(l).createTextNode(
              a
            ), l[jl] = t, t.stateNode = l;
        }
        return Sl(t), null;
      case 31:
        if (u = t.memoizedState, l === null || l.memoizedState !== null) {
          if (a = Ya(t), u !== null) {
            if (l === null) {
              if (!a) throw Error(d(318));
              if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(d(557));
              l[jl] = t;
            } else
              ua(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Sl(t), l = !1;
          } else
            u = Di(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = u), l = !0;
          if (!l)
            return t.flags & 256 ? (rt(t), t) : (rt(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(d(558));
        }
        return Sl(t), null;
      case 13:
        if (a = t.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (e = Ya(t), a !== null && a.dehydrated !== null) {
            if (l === null) {
              if (!e) throw Error(d(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(d(317));
              e[jl] = t;
            } else
              ua(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Sl(t), e = !1;
          } else
            e = Di(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = e), e = !0;
          if (!e)
            return t.flags & 256 ? (rt(t), t) : (rt(t), null);
        }
        return rt(t), (t.flags & 128) !== 0 ? (t.lanes = u, t) : (u = a !== null, l = l !== null && l.memoizedState !== null, u && (a = t.child, e = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (e = a.alternate.memoizedState.cachePool.pool), n = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (n = a.memoizedState.cachePool.pool), n !== e && (a.flags |= 2048)), u !== l && u && (t.child.flags |= 8192), ef(t, t.updateQueue), Sl(t), null);
      case 4:
        return Ta(), l === null && kc(t.stateNode.containerInfo), t.flags |= 67108864, Sl(t), null;
      case 10:
        return ou(t.type), Sl(t), null;
      case 19:
        if (Zi(t), a = t.memoizedState, a === null) return Sl(t), null;
        if (e = (t.flags & 128) !== 0, n = a.rendering, n === null)
          if (e) Ge(a, !1);
          else {
            if (_l !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = t.child; l !== null; ) {
                if (n = Vn(l), n !== null) {
                  for (t.flags |= 128, Ge(a, !1), l = n.updateQueue, t.updateQueue = l, ef(t, l), t.subtreeFlags = 0, l = u, u = t.child; u !== null; )
                    x0(u, l), u = u.sibling;
                  return Be(
                    t,
                    Xl.current & 1 | 2
                  ), K && iu(t, a.treeForkCount), t.child;
                }
                l = l.sibling;
              }
            a.tail !== null && ft() > gf && (t.flags |= 128, e = !0, Ge(a, !1), t.lanes = 4194304);
          }
        else {
          if (!e)
            if (l = Vn(n), l !== null) {
              if (t.flags |= 128, e = !0, l = l.updateQueue, t.updateQueue = l, ef(t, l), Ge(a, !0), a.tail === null && a.tailMode !== "collapsed" && a.tailMode !== "visible" && !n.alternate && !K)
                return Sl(t), null;
            } else
              2 * ft() - a.renderingStartTime > gf && u !== 536870912 && (t.flags |= 128, e = !0, Ge(a, !1), t.lanes = 4194304);
          a.isBackwards ? (n.sibling = t.child, t.child = n) : (l = a.last, l !== null ? l.sibling = n : t.child = n, a.last = n);
        }
        if (a.tail !== null) {
          l = a.tail;
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
          return a.rendering = l, a.tail = l.sibling, a.renderingStartTime = ft(), l.sibling = null, n = Xl.current, n = e ? n & 1 | 2 : n & 1, a.tailMode === "visible" || a.tailMode === "collapsed" || !u || K ? Be(t, n) : (u = n, hl(Gl, t), hl(Xl, u), Ll === null && (Ll = t)), K && iu(t, a.treeForkCount), l;
        }
        return Sl(t), null;
      case 22:
      case 23:
        return rt(t), Xi(), a = t.memoizedState !== null, l !== null ? l.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (u & 536870912) !== 0 && (t.flags & 128) === 0 && (Sl(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Sl(t), u = t.updateQueue, u !== null && ef(t, u.retryQueue), u = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== u && (t.flags |= 2048), l !== null && ql(ia), null;
      case 24:
        return u = null, l !== null && (u = l.memoizedState.cache), t.memoizedState.cache !== u && (t.flags |= 2048), ou(Al), Sl(t), null;
      case 25:
        return null;
      case 30:
        return t.flags |= 33554432, Sl(t), null;
    }
    throw Error(d(156, t.tag));
  }
  function Fy(l, t) {
    switch (Ai(t), t.tag) {
      case 1:
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 3:
        return ou(Al), Ta(), l = t.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (t.flags = l & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return on(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (rt(t), t.alternate === null)
            throw Error(d(340));
          ua();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 13:
        if (rt(t), l = t.memoizedState, l !== null && l.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(d(340));
          ua();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 19:
        return Zi(t), l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null), t.flags |= 4, t) : null;
      case 4:
        return Ta(), null;
      case 10:
        return ou(t.type), null;
      case 22:
      case 23:
        return rt(t), Xi(), l !== null && ql(ia), l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 24:
        return ou(Al), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function dr(l, t) {
    switch (Ai(t), t.tag) {
      case 3:
        ou(Al), Ta();
        break;
      case 26:
      case 27:
      case 5:
        on(t);
        break;
      case 4:
        Ta();
        break;
      case 31:
        t.memoizedState !== null && rt(t);
        break;
      case 13:
        rt(t);
        break;
      case 19:
        Zi(t);
        break;
      case 10:
        ou(t.type);
        break;
      case 22:
      case 23:
        rt(t), Xi(), l !== null && ql(ia);
        break;
      case 24:
        ou(Al);
    }
  }
  function Xe(l, t) {
    try {
      var u = t.updateQueue, a = u !== null ? u.lastEffect : null;
      if (a !== null) {
        var e = a.next;
        u = e;
        do {
          if ((u.tag & l) === l) {
            a = void 0;
            var n = u.create, f = u.inst;
            a = n(), f.destroy = a;
          }
          u = u.next;
        } while (u !== e);
      }
    } catch (i) {
      rl(t, t.return, i);
    }
  }
  function pu(l, t, u) {
    try {
      var a = t.updateQueue, e = a !== null ? a.lastEffect : null;
      if (e !== null) {
        var n = e.next;
        a = n;
        do {
          if ((a.tag & l) === l) {
            var f = a.inst, i = f.destroy;
            if (i !== void 0) {
              f.destroy = void 0, e = t;
              var c = u, y = i;
              try {
                y();
              } catch (S) {
                rl(
                  e,
                  c,
                  S
                );
              }
            }
          }
          a = a.next;
        } while (a !== n);
      }
    } catch (S) {
      rl(t, t.return, S);
    }
  }
  function sr(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var u = l.stateNode;
      try {
        uv(t, u);
      } catch (a) {
        rl(l, l.return, a);
      }
    }
  }
  function yr(l, t, u) {
    u.props = da(
      l.type,
      l.memoizedProps
    ), u.state = l.memoizedState;
    try {
      u.componentWillUnmount();
    } catch (a) {
      rl(l, t, a);
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
            var a = l.stateNode;
            break;
          case 30:
            var e = l.stateNode, n = eu(l.memoizedProps, e);
            (e.ref === null || e.ref.name !== n) && (e.ref = Ed(n)), a = e.ref;
            break;
          case 7:
            if (l.stateNode === null) {
              var f = new ht(l);
              T(
                l.child,
                !1,
                Gm,
                f,
                void 0,
                void 0
              ), l.stateNode = f;
            }
            a = l.stateNode;
            break;
          default:
            a = l.stateNode;
        }
        typeof u == "function" ? l.refCleanup = u(a) : u.current = a;
      }
    } catch (i) {
      rl(l, t, i);
    }
  }
  function Ql(l, t) {
    var u = l.ref, a = l.refCleanup;
    if (u !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (e) {
          rl(l, t, e);
        } finally {
          l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
        }
      else if (typeof u == "function")
        try {
          u(null);
        } catch (e) {
          rl(l, t, e);
        }
      else u.current = null;
  }
  function nf(l, t) {
    if ((l.tag === 5 || l.tag === 27 || l.tag === 6) && l.alternate === null && t !== null)
      for (var u = 0; u < t.length; u++)
        Md(
          l.stateNode,
          t[u]
        );
  }
  function mr(l) {
    for (var t = l.return; t !== null && (Tc(t) && Md(l.stateNode, t.stateNode), !Sc(t)); )
      t = t.return;
  }
  function Qe(l) {
    for (var t = l.return; t !== null && (Tc(t) && Xm(l.stateNode, t.stateNode), !Sc(t)); )
      t = t.return;
  }
  function Sc(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 27;
  }
  function Tc(l) {
    return l && l.tag === 7 && l.stateNode !== null;
  }
  function bc(l) {
    var t = l.type, u = l.memoizedProps, a = l.stateNode;
    try {
      l: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          u.autoFocus && a.focus();
          break l;
        case "img":
          u.src ? a.src = u.src : u.srcSet && (a.srcset = u.srcSet);
      }
    } catch (e) {
      rl(l, l.return, e);
    }
  }
  function Ec(l, t, u) {
    try {
      var a = l.stateNode;
      Em(a, l.type, u, t), a[Il] = t;
    } catch (e) {
      rl(l, l.return, e);
    }
  }
  function hr(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && Xu(l.type) || l.tag === 4;
  }
  function zc(l) {
    l: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || hr(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && Xu(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue l;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function _c(l, t, u, a) {
    var e = l.tag;
    if (e === 5 || e === 6)
      e = l.stateNode, t ? (u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u).insertBefore(e, t) : (t = u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u, t.appendChild(e), u = u._reactRootContainer, u != null || t.onclick !== null || (t.onclick = Zt)), nf(l, a), ul = !0;
    else if (e !== 4 && (e === 27 && (nf(l, a), a = null, Xu(l.type) && (u = l.stateNode, t = null)), l = l.child, l !== null))
      for (_c(
        l,
        t,
        u,
        a
      ), l = l.sibling; l !== null; )
        _c(
          l,
          t,
          u,
          a
        ), l = l.sibling;
  }
  function ff(l, t, u, a) {
    var e = l.tag;
    if (e === 5 || e === 6)
      e = l.stateNode, t ? u.insertBefore(e, t) : u.appendChild(e), nf(l, a), ul = !0;
    else if (e !== 4 && (e === 27 && (nf(l, a), a = null, Xu(l.type) && (u = l.stateNode)), l = l.child, l !== null))
      for (ff(
        l,
        t,
        u,
        a
      ), l = l.sibling; l !== null; )
        ff(
          l,
          t,
          u,
          a
        ), l = l.sibling;
  }
  function gr(l) {
    var t = l.stateNode, u = l.memoizedProps;
    try {
      for (var a = l.type, e = t.attributes; e.length; )
        t.removeAttributeNode(e[0]);
      Zl(t, a, u), t[jl] = l, t[Il] = u;
    } catch (n) {
      rl(l, l.return, n);
    }
  }
  var cf = !1, dt = null;
  function Sr(l) {
    (l.tag === 30 || (l.subtreeFlags & 33554432) !== 0) && (cf = !0);
  }
  var Jt = null;
  function Tr() {
    var l = Jt;
    return Jt = null, l;
  }
  var Pl = 0;
  function Va(l, t, u, a, e) {
    return Pl = 0, br(
      l.child,
      t,
      u,
      a,
      e
    );
  }
  function br(l, t, u, a, e) {
    for (var n = !1; l !== null; ) {
      if (l.tag === 5) {
        var f = l.stateNode;
        if (a !== null) {
          var i = fo(f);
          a.push(i), i.view && (n = !0);
        } else
          n || fo(f).view && (n = !0);
        cf = !0, Td(
          f,
          Pl === 0 ? t : t + "_" + Pl,
          u
        ), Pl++;
      } else (l.tag !== 22 || l.memoizedState === null) && (l.tag === 30 && e || br(
        l.child,
        t,
        u,
        a,
        e
      ) && (n = !0));
      l = l.sibling;
    }
    return n;
  }
  function wt(l, t) {
    for (; l !== null; )
      l.tag === 5 ? bd(l.stateNode, l.memoizedProps) : (l.tag !== 22 || l.memoizedState === null) && (l.tag === 30 && t || wt(
        l.child,
        t
      )), l = l.sibling;
  }
  function of(l) {
    if ((l.subtreeFlags & 18874368) !== 0)
      for (l = l.child; l !== null; ) {
        if ((l.tag !== 22 || l.memoizedState === null) && (of(l), l.tag === 30 && (l.flags & 18874368) !== 0 && l.stateNode.paired)) {
          var t = l.memoizedProps;
          if (t.name == null || t.name === "auto")
            throw Error(d(544));
          var u = t.name;
          t = nu(t.default, t.share), t !== "none" && (Va(
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
  function Oc(l, t) {
    if (l.tag === 30) {
      var u = l.stateNode, a = l.memoizedProps, e = eu(a, u), n = nu(
        a.default,
        u.paired ? a.share : a.enter
      );
      n !== "none" ? Va(l, e, n, null, !1) ? (of(l), u.paired || t || Ia(l, a.onEnter)) : wt(l.child, !1) : of(l);
    } else if ((l.subtreeFlags & 33554432) !== 0)
      for (l = l.child; l !== null; )
        Oc(l, t), l = l.sibling;
    else of(l);
  }
  function Nc(l) {
    if (dt !== null && dt.size !== 0) {
      var t = dt;
      if ((l.subtreeFlags & 18874368) !== 0)
        for (l = l.child; l !== null; ) {
          if (l.tag !== 22 || l.memoizedState === null) {
            if (l.tag === 30 && (l.flags & 18874368) !== 0) {
              var u = l.memoizedProps, a = u.name;
              if (a != null && a !== "auto") {
                var e = t.get(a);
                if (e !== void 0) {
                  var n = nu(
                    u.default,
                    u.share
                  );
                  if (n !== "none" && (Va(
                    l,
                    a,
                    n,
                    null,
                    !1
                  ) ? (n = l.stateNode, e.paired = n, n.paired = e, Ia(l, u.onShare)) : wt(l.child, !1)), t.delete(a), t.size === 0) break;
                }
              }
            }
            Nc(l);
          }
          l = l.sibling;
        }
    }
  }
  function Ac(l) {
    if (l.tag === 30) {
      var t = l.memoizedProps, u = eu(t, l.stateNode), a = dt !== null ? dt.get(u) : void 0, e = nu(
        t.default,
        a !== void 0 ? t.share : t.exit
      );
      e !== "none" && (Va(l, u, e, null, !1) ? a !== void 0 ? (e = l.stateNode, a.paired = e, e.paired = a, dt.delete(u), Ia(l, t.onShare)) : Ia(l, t.onExit) : wt(l.child, !1)), dt !== null && Nc(l);
    } else if ((l.subtreeFlags & 33554432) !== 0)
      for (l = l.child; l !== null; )
        Ac(l), l = l.sibling;
    else
      dt !== null && Nc(l);
  }
  function Er(l) {
    for (l = l.child; l !== null; ) {
      if (l.tag === 30) {
        var t = l.memoizedProps, u = eu(t, l.stateNode);
        t = nu(t.default, t.update), l.flags &= -5, t !== "none" && Va(
          l,
          u,
          t,
          l.memoizedState = [],
          !1
        );
      } else
        (l.subtreeFlags & 33554432) !== 0 && Er(l);
      l = l.sibling;
    }
  }
  function Mc(l) {
    if ((l.subtreeFlags & 18874368) !== 0)
      for (l = l.child; l !== null; ) {
        if (l.tag !== 22 || l.memoizedState === null) {
          if (l.tag === 30 && (l.flags & 18874368) !== 0) {
            var t = l.stateNode;
            t.paired !== null && (t.paired = null, wt(l.child, !1));
          }
          Mc(l);
        }
        l = l.sibling;
      }
  }
  function vf(l) {
    if (l.tag === 30)
      l.stateNode.paired = null, wt(l.child, !1), Mc(l);
    else if ((l.subtreeFlags & 33554432) !== 0)
      for (l = l.child; l !== null; )
        vf(l), l = l.sibling;
    else Mc(l);
  }
  function zr(l) {
    for (l = l.child; l !== null; )
      l.tag === 30 ? wt(l.child, !1) : (l.subtreeFlags & 33554432) !== 0 && zr(l), l = l.sibling;
  }
  function Dc(l, t, u, a, e, n, f) {
    for (var i = !1; t !== null; ) {
      if (t.tag === 5) {
        var c = t.stateNode;
        if (n !== null && Pl < n.length) {
          var y = n[Pl], S = fo(c);
          (y.view || S.view) && (i = !0);
          var E;
          if (E = (l.flags & 4) === 0)
            if (S.clip) E = !0;
            else {
              E = y.rect;
              var r = S.rect;
              E = E.y !== r.y || E.x !== r.x || E.height !== r.height || E.width !== r.width;
            }
          E && (l.flags |= 4), S.abs ? S = !y.abs : (y = y.rect, S = S.rect, S = y.height !== S.height || y.width !== S.width), S && (l.flags |= 32);
        } else l.flags |= 32;
        (l.flags & 4) !== 0 && Td(
          c,
          Pl === 0 ? u : u + "_" + Pl,
          e
        ), i && (l.flags & 4) !== 0 || (Jt === null && (Jt = []), Jt.push(
          c,
          Pl === 0 ? a : a + "_" + Pl,
          t.memoizedProps
        )), Pl++;
      } else (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && f ? l.flags |= t.flags & 32 : Dc(
        l,
        t.child,
        u,
        a,
        e,
        n,
        f
      ) && (i = !0));
      t = t.sibling;
    }
    return i;
  }
  function _r(l, t) {
    for (l = l.child; l !== null; ) {
      if (l.tag === 30) {
        var u = l.memoizedProps, a = l.stateNode, e = eu(u, a), n = nu(u.default, u.update), f;
        f = l.memoizedState, l.memoizedState = null, a = l;
        var i = l.child;
        Pl = 0, e = Dc(
          a,
          i,
          e,
          e,
          n,
          f,
          !1
        ), (l.flags & 4) !== 0 && e && Ia(l, u.onUpdate);
      } else
        (l.subtreeFlags & 33554432) !== 0 && _r(l);
      l = l.sibling;
    }
  }
  var Bl = !1, ol = !1, Wt = !1, Cc = !1, Or = typeof WeakSet == "function" ? WeakSet : Set, Yl = null, Ft = !1, Ze = !1, rf = !1, Uc = !1;
  function $y(l, t, u) {
    if (l = l.containerInfo, to = ie, l = D0(l), hi(l)) {
      if ("selectionStart" in l)
        var a = {
          start: l.selectionStart,
          end: l.selectionEnd
        };
      else
        l: {
          a = (a = l.ownerDocument) && a.defaultView || window;
          var e = a.getSelection && a.getSelection();
          if (e && e.rangeCount !== 0) {
            a = e.anchorNode;
            var n = e.anchorOffset, f = e.focusNode;
            e = e.focusOffset;
            try {
              a.nodeType, f.nodeType;
            } catch {
              a = null;
              break l;
            }
            var i = 0, c = -1, y = -1, S = 0, E = 0, r = l, g = null;
            t: for (; ; ) {
              for (var N; r !== a || n !== 0 && r.nodeType !== 3 || (c = i + n), r !== f || e !== 0 && r.nodeType !== 3 || (y = i + e), r.nodeType === 3 && (i += r.nodeValue.length), (N = r.firstChild) !== null; )
                g = r, r = N;
              for (; ; ) {
                if (r === l) break t;
                if (g === a && ++S === n && (c = i), g === f && ++E === e && (y = i), (N = r.nextSibling) !== null) break;
                r = g, g = r.parentNode;
              }
              r = N;
            }
            a = c === -1 || y === -1 ? null : { start: c, end: y };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (uo = { focusedElem: l, selectionRange: a }, ie = !1, u = (u & 335544064) === u, Yl = t, t = u ? 9270 : 1024; Yl !== null; ) {
      if (l = Yl, u && (a = l.deletions, a !== null))
        for (n = 0; n < a.length; n++)
          u && Ac(a[n]);
      if (l.alternate === null && (l.flags & 2) !== 0)
        u && Sr(l), df(u);
      else {
        if (l.tag === 22) {
          if (a = l.alternate, l.memoizedState !== null) {
            a !== null && a.memoizedState === null && u && Ac(a), df(u);
            continue;
          } else if (a !== null && a.memoizedState !== null) {
            u && Sr(l), df(u);
            continue;
          }
        }
        a = l.child, (l.subtreeFlags & t) !== 0 && a !== null ? (a.return = l, Yl = a) : (u && Er(l), df(u));
      }
    }
    dt = null;
  }
  function df(l) {
    for (; Yl !== null; ) {
      var t = Yl, u = l, a = t.alternate, e = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if ((e & 1024) !== 0 && a !== null) {
            u = void 0, e = a.memoizedProps, a = a.memoizedState;
            var n = t.stateNode;
            try {
              var f = da(
                t.type,
                e
              );
              u = n.getSnapshotBeforeUpdate(
                f,
                a
              ), n.__reactInternalSnapshotBeforeUpdate = u;
            } catch (i) {
              rl(t, t.return, i);
            }
          }
          break;
        case 3:
          if ((e & 1024) !== 0) {
            if (a = t.stateNode.containerInfo, u = a.nodeType, u === 9)
              oo(a);
            else if (u === 1)
              switch (a.nodeName) {
                case "HEAD":
                case "HTML":
                case "BODY":
                  oo(a);
                  break;
                default:
                  a.textContent = "";
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
          u && a !== null && (u = eu(
            a.memoizedProps,
            a.stateNode
          ), e = t.memoizedProps, e = nu(e.default, e.update), e !== "none" && Va(
            a,
            u,
            e,
            a.memoizedState = [],
            !0
          ));
          break;
        default:
          if ((e & 1024) !== 0) throw Error(d(163));
      }
      if (a = t.sibling, a !== null) {
        a.return = t.return, Yl = a;
        break;
      }
      Yl = t.return;
    }
  }
  function Nr(l, t, u) {
    var a = u.flags;
    switch (u.tag) {
      case 0:
      case 11:
      case 15:
        $t(l, u), a & 4 && Xe(5, u);
        break;
      case 1:
        if ($t(l, u), a & 4)
          if (l = u.stateNode, t === null)
            try {
              l.componentDidMount();
            } catch (f) {
              rl(u, u.return, f);
            }
          else {
            var e = da(
              u.type,
              t.memoizedProps
            );
            t = t.memoizedState;
            try {
              l.componentDidUpdate(
                e,
                t,
                l.__reactInternalSnapshotBeforeUpdate
              );
            } catch (f) {
              rl(
                u,
                u.return,
                f
              );
            }
          }
        a & 64 && sr(u), a & 512 && Kt(u, u.return);
        break;
      case 3:
        if ($t(l, u), a & 64 && (l = u.updateQueue, l !== null)) {
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
            uv(l, t);
          } catch (f) {
            rl(u, u.return, f);
          }
        }
        break;
      case 27:
        t === null && a & 4 && gr(u);
      case 26:
      case 5:
        $t(l, u), t === null && a & 4 && bc(u), a & 512 && Kt(u, u.return);
        break;
      case 12:
        $t(l, u);
        break;
      case 31:
        $t(l, u), a & 4 && Cr(l, u);
        break;
      case 13:
        $t(l, u), a & 4 && Ur(l, u), a & 64 && (l = u.memoizedState, l !== null && (l = l.dehydrated, l !== null && (u = cm.bind(
          null,
          u
        ), Vm(l, u))));
        break;
      case 22:
        if (a = u.memoizedState !== null || Bl, !a) {
          var n = t !== null && t.memoizedState !== null || ol;
          t = Bl, e = ol, Bl = a, (ol = n) && !e ? (a = 2, (u.subtreeFlags & 8772) !== 0 && (a |= 1), pt(
            l,
            u,
            a
          )) : $t(l, u), Bl = t, ol = e;
        }
        break;
      case 30:
        $t(l, u), a & 512 && Kt(u, u.return);
        break;
      case 7:
        a & 512 && Kt(u, u.return);
      default:
        $t(l, u);
    }
  }
  function Rc(l, t) {
    for (l = l.child; l !== null; )
      Ar(l, t), l = l.sibling;
  }
  function Ar(l, t) {
    switch (l.tag) {
      case 5:
      case 26:
        try {
          var u = l.stateNode;
          if (t) {
            var a = u.style;
            typeof a.setProperty == "function" ? a.setProperty("display", "none", "important") : a.display = "none";
          } else {
            var e = l.stateNode, n = l.memoizedProps.style, f = n != null && n.hasOwnProperty("display") ? n.display : null;
            e.style.display = f == null || typeof f == "boolean" ? "" : ("" + f).trim();
          }
        } catch (c) {
          rl(l, l.return, c);
        }
        Hc(l, t);
        break;
      case 6:
        try {
          l.stateNode.nodeValue = t ? "" : l.memoizedProps, ul = !0;
        } catch (c) {
          rl(l, l.return, c);
        }
        break;
      case 18:
        try {
          var i = l.stateNode;
          t ? Sd(i, !0) : Sd(l.stateNode, !1);
        } catch (c) {
          rl(l, l.return, c);
        }
        break;
      case 22:
      case 23:
        l.memoizedState === null && Rc(l, t);
        break;
      default:
        Rc(l, t);
    }
  }
  function Hc(l, t) {
    if (l.subtreeFlags & 67108864)
      for (l = l.child; l !== null; ) {
        l: {
          var u = l, a = t;
          switch (u.tag) {
            case 4:
              Ar(u, a);
              break l;
            case 22:
              u.memoizedState === null && Hc(u, a);
              break l;
            default:
              Hc(u, a);
          }
        }
        l = l.sibling;
      }
  }
  function Mr(l) {
    var t = l.alternate;
    t !== null && (l.alternate = null, Mr(t)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (t = l.stateNode, t !== null && hn(t)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var bl = null, lt = !1;
  function Rt(l, t, u) {
    for (u = u.child; u !== null; )
      Dr(l, t, u), u = u.sibling;
  }
  function Dr(l, t, u) {
    if (it && typeof it.onCommitFiberUnmount == "function")
      try {
        it.onCommitFiberUnmount(re, u);
      } catch {
      }
    switch (u.tag) {
      case 26:
        ol || Ql(u, t), Rt(
          l,
          t,
          u
        ), u.memoizedState ? u.memoizedState.count-- : u.stateNode && !ol && (u = u.stateNode, u.parentNode.removeChild(u));
        break;
      case 27:
        ol || Ql(u, t), Qe(u);
        var a = bl, e = lt;
        Xu(u.type) && (bl = u.stateNode, lt = !1), Rt(
          l,
          t,
          u
        ), Hd(
          u.stateNode,
          u.type,
          u.memoizedProps
        ), bl = a, lt = e;
        break;
      case 5:
        ol || Ql(u, t), Qe(u);
      case 6:
        if (u.tag === 6 && Qe(u), a = bl, e = lt, bl = null, Rt(
          l,
          t,
          u
        ), bl = a, lt = e, bl !== null)
          if (lt)
            try {
              (bl.nodeType === 9 ? bl.body : bl.nodeName === "HTML" ? bl.ownerDocument.body : bl).removeChild(u.stateNode), ul = !0;
            } catch (n) {
              rl(
                u,
                t,
                n
              );
            }
          else
            try {
              bl.removeChild(u.stateNode), ul = !0;
            } catch (n) {
              rl(
                u,
                t,
                n
              );
            }
        break;
      case 18:
        bl !== null && (lt ? (l = bl, gd(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          u.stateNode
        ), ce(l)) : gd(bl, u.stateNode));
        break;
      case 4:
        a = bl, e = lt, bl = u.stateNode.containerInfo, lt = !0, Rt(
          l,
          t,
          u
        ), bl = a, lt = e;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        pu(2, u, t), ol || pu(4, u, t), Rt(
          l,
          t,
          u
        );
        break;
      case 1:
        ol || (Ql(u, t), a = u.stateNode, typeof a.componentWillUnmount == "function" && yr(
          u,
          t,
          a
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
        ol = (a = ol) || u.memoizedState !== null, Rt(
          l,
          t,
          u
        ), ol = a;
        break;
      case 30:
        Ql(u, t), Rt(
          l,
          t,
          u
        );
        break;
      case 7:
        ol || Ql(u, t), Rt(
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
  function Cr(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null))) {
      l = l.dehydrated;
      try {
        ce(l);
      } catch (u) {
        rl(t, t.return, u);
      }
    }
  }
  function Ur(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        ce(l);
      } catch (u) {
        rl(t, t.return, u);
      }
  }
  function Iy(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var t = l.stateNode;
        return t === null && (t = l.stateNode = new Or()), t;
      case 22:
        return l = l.stateNode, t = l._retryCache, t === null && (t = l._retryCache = new Or()), t;
      default:
        throw Error(d(435, l.tag));
    }
  }
  function sf(l, t) {
    var u = Iy(l);
    t.forEach(function(a) {
      if (!u.has(a)) {
        u.add(a);
        var e = om.bind(null, l, a);
        a.then(e, e);
      }
    });
  }
  function Wl(l, t, u) {
    var a = t.deletions;
    if (a !== null)
      for (var e = 0; e < a.length; e++) {
        var n = a[e], f = l, i = t, c = i;
        l: for (; c !== null; ) {
          switch (c.tag) {
            case 27:
              if (Xu(c.type)) {
                bl = c.stateNode, lt = !1;
                break l;
              }
              break;
            case 5:
              bl = c.stateNode, lt = !1;
              break l;
            case 3:
            case 4:
              bl = c.stateNode.containerInfo, lt = !0;
              break l;
          }
          c = c.return;
        }
        if (bl === null) throw Error(d(160));
        Dr(f, i, n), bl = null, lt = !1, f = n.alternate, f !== null && (f.return = null), n.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        Rr(t, l, u), t = t.sibling;
  }
  var Ht = null;
  function Rr(l, t, u) {
    var a = l.alternate, e = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (e & 4 && (a = l.updateQueue, a = a !== null ? a.events : null, a !== null))
          for (var n = 0; n < a.length; n++) {
            var f = a[n];
            f.ref.impl = f.nextImpl;
          }
        Wl(t, l, u), Fl(l), e & 4 && (pu(3, l, l.return), Xe(3, l), pu(5, l, l.return));
        break;
      case 1:
        Wl(t, l, u), Fl(l), e & 512 && (ol || a === null || Ql(a, a.return)), e & 64 && Bl && (l = l.updateQueue, l !== null && (t = l.callbacks, t !== null && (u = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = u === null ? t : u.concat(t))));
        break;
      case 26:
        if (n = Ht, Wl(t, l, u), Fl(l), e & 512 && (ol || a === null || Ql(a, a.return)), e & 4)
          if (e = a !== null ? a.memoizedState : null, u = l.memoizedState, a === null)
            if (u === null)
              if (l.stateNode === null)
                if (Bl)
                  l.stateNode = yd(
                    l.type,
                    l.memoizedProps,
                    t.containerInfo,
                    l
                  );
                else {
                  l: {
                    t = l.type, u = l.memoizedProps, e = n.ownerDocument || n;
                    t: switch (t) {
                      case "title":
                        a = e.getElementsByTagName("title")[0], (!a || a[ye] || a[jl] || a.namespaceURI === "http://www.w3.org/2000/svg" || a.hasAttribute("itemprop")) && (a = e.createElement(t), e.head.insertBefore(
                          a,
                          e.querySelector("head > title")
                        )), Zl(a, t, u), a[jl] = l, Hl(a), t = a;
                        break l;
                      case "link":
                        if (n = xd(
                          "link",
                          "href",
                          e
                        ).get(t + (u.href || ""))) {
                          for (f = 0; f < n.length; f++)
                            if (a = n[f], a.getAttribute("href") === (u.href == null || u.href === "" ? null : u.href) && a.getAttribute("rel") === (u.rel == null ? null : u.rel) && a.getAttribute("title") === (u.title == null ? null : u.title) && a.getAttribute("crossorigin") === (u.crossOrigin == null ? null : u.crossOrigin)) {
                              n.splice(f, 1);
                              break t;
                            }
                        }
                        a = e.createElement(t), Zl(a, t, u), e.head.appendChild(a);
                        break;
                      case "meta":
                        if (n = xd(
                          "meta",
                          "content",
                          e
                        ).get(t + (u.content || ""))) {
                          for (f = 0; f < n.length; f++)
                            if (a = n[f], a.getAttribute("content") === (u.content == null ? null : "" + u.content) && a.getAttribute("name") === (u.name == null ? null : u.name) && a.getAttribute("property") === (u.property == null ? null : u.property) && a.getAttribute("http-equiv") === (u.httpEquiv == null ? null : u.httpEquiv) && a.getAttribute("charset") === (u.charSet == null ? null : u.charSet)) {
                              n.splice(f, 1);
                              break t;
                            }
                        }
                        a = e.createElement(t), Zl(a, t, u), e.head.appendChild(a);
                        break;
                      default:
                        throw Error(d(468, t));
                    }
                    a[jl] = l, Hl(a), t = a;
                  }
                  l.stateNode = t;
                }
              else
                Bl || go(n, l.type, l.stateNode);
            else
              l.stateNode = jd(
                n,
                u,
                l.memoizedProps
              );
          else
            e !== u ? (e === null ? (t = a.stateNode, t === null || ol || t.parentNode.removeChild(t)) : e.count--, u === null ? Bl || go(n, l.type, l.stateNode) : jd(n, u, l.memoizedProps)) : u === null && l.stateNode !== null && Ec(
              l,
              l.memoizedProps,
              a.memoizedProps
            );
        break;
      case 27:
        Wl(t, l, u), Fl(l), e & 512 && (ol || a === null || Ql(a, a.return)), a !== null && e & 4 && Ec(
          l,
          l.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (n = Wt, Wt = !1, Wl(t, l, u), Wt = n, Fl(l), e & 512 && (ol || a === null || Ql(a, a.return)), l.flags & 32) {
          t = l.stateNode;
          try {
            Na(t, ""), ul = !0;
          } catch (S) {
            rl(l, l.return, S);
          }
        }
        e & 4 && l.stateNode != null && (t = l.memoizedProps, Ec(
          l,
          t,
          a !== null ? a.memoizedProps : t
        )), e & 1024 && (Cc = !0);
        break;
      case 6:
        if (Wl(t, l, u), Fl(l), e & 4) {
          if (l.stateNode === null)
            throw Error(d(162));
          t = l.memoizedProps, u = l.stateNode;
          try {
            u.nodeValue = t, ul = !0;
          } catch (S) {
            rl(l, l.return, S);
          }
        }
        break;
      case 3:
        if (ul = !1, Df = null, n = Ht, Ht = Ie(t.containerInfo), Wl(t, l, u), Ht = n, Fl(l), e & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            ce(t.containerInfo);
          } catch (S) {
            rl(l, l.return, S);
          }
        Cc && (Cc = !1, Hr(l)), ul = !1;
        break;
      case 4:
        e = Wt, Wt = Bl, a = ko(), n = Ht, Ht = Ie(
          l.stateNode.containerInfo
        ), Wl(t, l, u), Fl(l), Ht = n, ul && Ze && (rf = !0), ul = a, Wt = e;
        break;
      case 12:
        Wl(t, l, u), Fl(l);
        break;
      case 31:
        Wl(t, l, u), Fl(l), e & 4 && (t = l.updateQueue, t !== null && (l.updateQueue = null, sf(l, t)));
        break;
      case 13:
        Wl(t, l, u), Fl(l), l.child.flags & 8192 && l.memoizedState !== null != (a !== null && a.memoizedState !== null) && (hf = ft()), e & 4 && (t = l.updateQueue, t !== null && (l.updateQueue = null, sf(l, t)));
        break;
      case 22:
        n = l.memoizedState !== null, f = a !== null && a.memoizedState !== null;
        var i = Bl, c = ol, y = Wt;
        Bl = i || n, Wt = y || n, ol = c || f, Wl(t, l, u), ol = c, Wt = y, Bl = i, Fl(l), e & 8192 && (t = l.stateNode, t._visibility = n ? t._visibility & -2 : t._visibility | 1, !n || a === null || f || Bl || ol || (t = f || ol, u = Bl, a = ol, Bl = n || Bl, ol = t, Bu(l, 2), Bl = u, ol = a), !n && Wt || Rc(l, n)), e & 4 && (t = l.updateQueue, t !== null && (u = t.retryQueue, u !== null && (t.retryQueue = null, sf(l, u))));
        break;
      case 19:
        Wl(t, l, u), Fl(l), e & 4 && (t = l.updateQueue, t !== null && (l.updateQueue = null, sf(l, t)));
        break;
      case 30:
        e & 512 && (ol || a === null || Ql(a, a.return)), e = ko(), n = Ze, f = (u & 335544064) === u, i = l.memoizedProps, Ze = f && nu(
          i.default,
          i.update
        ) !== "none", Wl(t, l, u), Fl(l), f && a !== null && ul && (l.flags |= 4), Ze = n, ul = e;
        break;
      case 21:
        break;
      case 7:
        e & 512 && (ol || a === null || Ql(a, a.return)), a && a.stateNode !== null && (a.stateNode._fragmentFiber = l);
      default:
        Wl(t, l, u), Fl(l);
    }
  }
  function Fl(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        for (var u, a = l.return; a !== null; ) {
          if (hr(a)) {
            u = a;
            break;
          }
          a = a.return;
        }
        a = null;
        for (var e = l.return; e !== null; ) {
          if (Tc(e)) {
            var n = e.stateNode;
            a === null ? a = [n] : a.push(n);
          }
          if (Sc(e)) break;
          e = e.return;
        }
        var f = a;
        if (u == null) throw Error(d(160));
        switch (u.tag) {
          case 27:
            var i = u.stateNode, c = zc(l);
            ff(
              l,
              c,
              i,
              f
            );
            break;
          case 5:
            var y = u.stateNode;
            u.flags & 32 && (Na(y, ""), u.flags &= -33);
            var S = zc(l);
            ff(
              l,
              S,
              y,
              f
            );
            break;
          case 3:
          case 4:
            var E = u.stateNode.containerInfo, r = zc(l);
            _c(
              l,
              r,
              E,
              f
            );
            break;
          default:
            throw Error(d(161));
        }
      } catch (g) {
        rl(l, l.return, g);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function Hr(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var t = l;
        Hr(t), t.tag === 5 && t.flags & 1024 && (t = t.stateNode, ie = !0, t.reset(), ie = !1), l = l.sibling;
      }
  }
  function La(l, t) {
    if (t.subtreeFlags & 9270)
      for (t = t.child; t !== null; )
        pr(t, l), t = t.sibling;
    else _r(t);
  }
  function pr(l, t) {
    var u = l.alternate;
    if (u === null) Oc(l, !1);
    else
      switch (l.tag) {
        case 3:
          if (Uc = Ft = !1, Tr(), La(t, l), !Ft && !rf) {
            if (l = Jt, l !== null)
              for (var a = 0; a < l.length; a += 3) {
                u = l[a];
                var e = l[a + 1];
                bd(u, l[a + 2]), u = u.ownerDocument.documentElement, u !== null && u.animate(
                  { opacity: [0, 0], pointerEvents: ["none", "none"] },
                  {
                    duration: 0,
                    fill: "forwards",
                    pseudoElement: "::view-transition-group(" + e + ")"
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
            )), Uc = !0;
          }
          Jt = null;
          break;
        case 5:
          La(t, l);
          break;
        case 4:
          a = Ft, Ft = !1, La(t, l), Ft && (rf = !0), Ft = a;
          break;
        case 22:
          l.memoizedState === null && (u.memoizedState !== null ? Oc(l, !1) : La(t, l));
          break;
        case 30:
          a = Ft, e = Tr(), Ft = !1, La(t, l), Ft && (l.flags |= 4);
          var n = l.memoizedProps, f = l.stateNode;
          t = eu(n, f), f = eu(u.memoizedProps, f);
          var i = nu(n.default, n.update);
          i === "none" ? t = !1 : (n = u.memoizedState, u.memoizedState = null, u = l.child, Pl = 0, t = Dc(
            l,
            u,
            t,
            f,
            i,
            n,
            !0
          ), Pl !== (n === null ? 0 : n.length) && (l.flags |= 32)), (l.flags & 4) !== 0 && t ? (Ia(
            l,
            l.memoizedProps.onUpdate
          ), Jt = e) : e !== null && (e.push.apply(e, Jt), Jt = e), Ft = (l.flags & 32) !== 0 ? !0 : a;
          break;
        default:
          La(t, l);
      }
  }
  function $t(l, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        Nr(l, t.alternate, t), t = t.sibling;
  }
  function Bu(l, t) {
    for (l = l.child; l !== null; ) {
      var u = l, a = t;
      switch (u.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          pu(4, u, u.return), Bu(
            u,
            a
          );
          break;
        case 1:
          Ql(u, u.return);
          var e = u.stateNode;
          typeof e.componentWillUnmount == "function" && yr(
            u,
            u.return,
            e
          ), Bu(
            u,
            a
          );
          break;
        case 27:
          (a & 2) !== 0 && Hd(
            u.stateNode,
            u.type,
            u.memoizedProps
          );
        case 5:
          Ql(u, u.return), u.tag !== 5 && u.tag !== 27 || Qe(u), Bu(
            u,
            a
          );
          break;
        case 6:
          Qe(u);
          break;
        case 26:
          Ql(u, u.return), e = u.stateNode, u.memoizedState !== null || e === null || ol || e.parentNode.removeChild(e), Bu(
            u,
            a
          );
          break;
        case 22:
          u.memoizedState === null && Bu(
            u,
            a
          );
          break;
        case 30:
          Ql(u, u.return), Bu(
            u,
            a
          );
          break;
        case 7:
          Ql(u, u.return);
        default:
          Bu(
            u,
            a
          );
      }
      l = l.sibling;
    }
  }
  function pt(l, t, u) {
    for (u = (t.subtreeFlags & 8772) !== 0 ? u : u & -2, t = t.child; t !== null; ) {
      var a = t.alternate, e = l, n = t, f = n.flags, i = (u & 1) !== 0;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          pt(
            e,
            n,
            u
          ), Xe(4, n);
          break;
        case 1:
          if (pt(
            e,
            n,
            u
          ), a = n, e = a.stateNode, typeof e.componentDidMount == "function")
            try {
              e.componentDidMount();
            } catch (S) {
              rl(a, a.return, S);
            }
          if (a = n, e = a.updateQueue, e !== null) {
            var c = a.stateNode;
            try {
              var y = e.shared.hiddenCallbacks;
              if (y !== null)
                for (e.shared.hiddenCallbacks = null, e = 0; e < y.length; e++)
                  tv(y[e], c);
            } catch (S) {
              rl(a, a.return, S);
            }
          }
          i && f & 64 && sr(n), Kt(n, n.return);
          break;
        case 27:
          (u & 2) !== 0 && gr(n);
        case 5:
          n.tag !== 5 && n.tag !== 27 || mr(n), pt(
            e,
            n,
            u
          ), i && a === null && f & 4 && bc(n), Kt(n, n.return);
          break;
        case 6:
          mr(n);
          break;
        case 26:
          c = n.stateNode, n.memoizedState !== null || c === null || Bl || go(
            Ie(c.ownerDocument),
            n.type,
            c
          ), pt(
            e,
            n,
            u
          ), i && a === null && f & 4 && bc(n), Kt(n, n.return);
          break;
        case 12:
          pt(
            e,
            n,
            u
          );
          break;
        case 31:
          pt(
            e,
            n,
            u
          ), i && f & 4 && Cr(e, n);
          break;
        case 13:
          pt(
            e,
            n,
            u
          ), i && f & 4 && Ur(e, n);
          break;
        case 22:
          n.memoizedState === null && pt(
            e,
            n,
            u
          ), Kt(n, n.return);
          break;
        case 30:
          pt(
            e,
            n,
            u
          ), Kt(n, n.return);
          break;
        case 7:
          Kt(n, n.return);
        default:
          pt(
            e,
            n,
            u
          );
      }
      t = t.sibling;
    }
  }
  function pc(l, t) {
    var u = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== u && (l != null && l.refCount++, u != null && Me(u));
  }
  function Bc(l, t) {
    l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && Me(l));
  }
  function At(l, t, u, a) {
    var e = (u & 335544064) === u;
    if (t.subtreeFlags & (e ? 10262 : 10256))
      for (t = t.child; t !== null; )
        Br(
          l,
          t,
          u,
          a
        ), t = t.sibling;
    else e && zr(t);
  }
  function Br(l, t, u, a) {
    var e = (u & 335544064) === u;
    e && t.alternate === null && t.return !== null && t.return.alternate !== null && vf(t);
    var n = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        At(
          l,
          t,
          u,
          a
        ), n & 2048 && Xe(9, t);
        break;
      case 1:
        At(
          l,
          t,
          u,
          a
        );
        break;
      case 3:
        At(
          l,
          t,
          u,
          a
        ), e && Uc && (l = l.containerInfo, l = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, l.style.viewTransitionName === "root" && (l.style.viewTransitionName = ""), l = l.ownerDocument.documentElement, l !== null && l.style.viewTransitionName === "none" && (l.style.viewTransitionName = "")), n & 2048 && (n = null, t.alternate !== null && (n = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== n && (t.refCount++, n != null && Me(n)));
        break;
      case 12:
        if (n & 2048) {
          At(
            l,
            t,
            u,
            a
          ), n = t.stateNode;
          try {
            var f = t.memoizedProps, i = f.id, c = f.onPostCommit;
            typeof c == "function" && c(
              i,
              t.alternate === null ? "mount" : "update",
              n.passiveEffectDuration,
              -0
            );
          } catch (y) {
            rl(t, t.return, y);
          }
        } else
          At(
            l,
            t,
            u,
            a
          );
        break;
      case 31:
        At(
          l,
          t,
          u,
          a
        );
        break;
      case 13:
        At(
          l,
          t,
          u,
          a
        );
        break;
      case 23:
        break;
      case 22:
        f = t.stateNode, i = t.alternate, t.memoizedState !== null ? (e && i !== null && i.memoizedState === null && vf(i), f._visibility & 2 ? At(
          l,
          t,
          u,
          a
        ) : Ve(
          l,
          t
        )) : (e && i !== null && i.memoizedState !== null && vf(t), f._visibility & 2 ? At(
          l,
          t,
          u,
          a
        ) : (f._visibility |= 2, Ka(
          l,
          t,
          u,
          a,
          (t.subtreeFlags & 10256) !== 0 || !1
        ))), n & 2048 && pc(i, t);
        break;
      case 24:
        At(
          l,
          t,
          u,
          a
        ), n & 2048 && Bc(t.alternate, t);
        break;
      case 30:
        e && (n = t.alternate, n !== null && (wt(n.child, !0), wt(t.child, !0))), At(
          l,
          t,
          u,
          a
        );
        break;
      default:
        At(
          l,
          t,
          u,
          a
        );
    }
  }
  function Ka(l, t, u, a, e) {
    for (e = e && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var n = l, f = t, i = u, c = a, y = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          Ka(
            n,
            f,
            i,
            c,
            e
          ), Xe(8, f);
          break;
        case 23:
          break;
        case 22:
          var S = f.stateNode;
          f.memoizedState !== null ? S._visibility & 2 ? Ka(
            n,
            f,
            i,
            c,
            e
          ) : Ve(
            n,
            f
          ) : (S._visibility |= 2, Ka(
            n,
            f,
            i,
            c,
            e
          )), e && y & 2048 && pc(
            f.alternate,
            f
          );
          break;
        case 24:
          Ka(
            n,
            f,
            i,
            c,
            e
          ), e && y & 2048 && Bc(f.alternate, f);
          break;
        default:
          Ka(
            n,
            f,
            i,
            c,
            e
          );
      }
      t = t.sibling;
    }
  }
  function Ve(l, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var u = l, a = t, e = a.flags;
        switch (a.tag) {
          case 22:
            Ve(u, a), e & 2048 && pc(
              a.alternate,
              a
            );
            break;
          case 24:
            Ve(u, a), e & 2048 && Bc(a.alternate, a);
            break;
          default:
            Ve(u, a);
        }
        t = t.sibling;
      }
  }
  var sa = 8192;
  function ya(l, t, u) {
    if (l.subtreeFlags & sa)
      for (l = l.child; l !== null; )
        Yr(
          l,
          t,
          u
        ), l = l.sibling;
  }
  function Yr(l, t, u) {
    switch (l.tag) {
      case 26:
        ya(
          l,
          t,
          u
        ), l.flags & sa && (l.memoizedState !== null ? a1(
          u,
          Ht,
          l.memoizedState,
          l.memoizedProps
        ) : (l = l.stateNode, (t & 335544128) === t && Zd(u, l)));
        break;
      case 5:
        ya(
          l,
          t,
          u
        ), l.flags & sa && (l = l.stateNode, (t & 335544128) === t && Zd(u, l));
        break;
      case 3:
      case 4:
        var a = Ht;
        Ht = Ie(l.stateNode.containerInfo), ya(
          l,
          t,
          u
        ), Ht = a;
        break;
      case 22:
        l.memoizedState === null && (a = l.alternate, a !== null && a.memoizedState !== null ? (a = sa, sa = 16777216, ya(
          l,
          t,
          u
        ), sa = a) : ya(
          l,
          t,
          u
        ));
        break;
      case 30:
        if ((l.flags & sa) !== 0 && (a = l.memoizedProps.name, a != null && a !== "auto")) {
          var e = l.stateNode;
          e.paired = null, dt === null && (dt = /* @__PURE__ */ new Map()), dt.set(a, e);
        }
        ya(
          l,
          t,
          u
        );
        break;
      default:
        ya(
          l,
          t,
          u
        );
    }
  }
  function qr(l) {
    var t = l.alternate;
    if (t !== null && (l = t.child, l !== null)) {
      t.child = null;
      do
        t = l.sibling, l.sibling = null, l = t;
      while (l !== null);
    }
  }
  function Le(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var u = 0; u < t.length; u++) {
          var a = t[u];
          Yl = a, xr(
            a,
            l
          );
        }
      qr(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        jr(l), l = l.sibling;
  }
  function jr(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        Le(l), l.flags & 2048 && pu(9, l, l.return);
        break;
      case 3:
        Le(l);
        break;
      case 12:
        Le(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null && t._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (t._visibility &= -3, yf(l)) : Le(l);
        break;
      default:
        Le(l);
    }
  }
  function yf(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var u = 0; u < t.length; u++) {
          var a = t[u];
          Yl = a, xr(
            a,
            l
          );
        }
      qr(l);
    }
    for (l = l.child; l !== null; ) {
      switch (t = l, t.tag) {
        case 0:
        case 11:
        case 15:
          pu(8, t, t.return), yf(t);
          break;
        case 22:
          u = t.stateNode, u._visibility & 2 && (u._visibility &= -3, yf(t));
          break;
        default:
          yf(t);
      }
      l = l.sibling;
    }
  }
  function xr(l, t) {
    for (; Yl !== null; ) {
      var u = Yl;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          pu(8, u, t);
          break;
        case 23:
        case 22:
          if (u.memoizedState !== null && u.memoizedState.cachePool !== null) {
            var a = u.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          Me(u.memoizedState.cache);
      }
      if (a = u.child, a !== null) a.return = u, Yl = a;
      else
        l: for (u = l; Yl !== null; ) {
          a = Yl;
          var e = a.sibling, n = a.return;
          if (Mr(a), a === u) {
            Yl = null;
            break l;
          }
          if (e !== null) {
            e.return = n, Yl = e;
            break l;
          }
          Yl = n;
        }
    }
  }
  var ky = {
    getCacheForType: function(l) {
      var t = xl(Al), u = t.data.get(l);
      return u === void 0 && (u = l(), t.data.set(l, u)), u;
    },
    cacheSignal: function() {
      return xl(Al).controller.signal;
    }
  }, Py = typeof WeakMap == "function" ? WeakMap : Map, fl = 0, ml = null, W = null, $ = 0, vl = 0, st = null, Yu = !1, Ja = !1, Yc = !1, yu = 0, _l = 0, qu = 0, ma = 0, mf = 0, yt = 0, wa = 0, Ke = null, tt = null, qc = !1, hf = 0, Gr = 0, gf = 1 / 0, Sf = null, ju = null, El = 0, Bt = null, ha = null, It = 0, jc = 0, xc = null, Xr = null, Wa = null, Fa = null, $a = null, Je = 0, Tf = null;
  function mt() {
    return (fl & 2) !== 0 && $ !== 0 ? $ & -$ : U.T !== null ? Wc() : Vo();
  }
  function Qr() {
    if (yt === 0)
      if (($ & 536870912) === 0 || K) {
        var l = dn;
        dn <<= 1, (dn & 3932160) === 0 && (dn = 262144), yt = l;
      } else yt = 536870912;
    return l = Gl.current, l !== null && (l.flags |= 32), yt;
  }
  function Ia(l, t) {
    if (t != null) {
      var u = l.stateNode, a = u.ref;
      a === null && (a = u.ref = Ed(
        eu(l.memoizedProps, u)
      )), Fa === null && (Fa = []), Fa.push(t.bind(null, a));
    }
  }
  function ut(l, t, u) {
    (l === ml && (vl === 2 || vl === 9) || l.cancelPendingCommit !== null) && (ka(l, 0), xu(
      l,
      $,
      yt,
      !1
    )), se(l, u), ((fl & 2) === 0 || l !== ml) && (l === ml && ((fl & 2) === 0 && (ma |= u), _l === 4 && xu(
      l,
      $,
      yt,
      !1
    )), kt(l));
  }
  function Zr(l, t, u) {
    if ((fl & 6) !== 0) throw Error(d(327));
    var a = !u && (t & 127) === 0 && (t & l.expiredLanes) === 0 || de(l, t), e = a ? um(l, t) : Xc(l, t, !0), n = a;
    do {
      if (e === 0) {
        Ja && !a && xu(l, t, 0, !1);
        break;
      } else {
        if (u = l.current.alternate, n && !lm(u)) {
          e = Xc(l, t, !1), n = !1;
          continue;
        }
        if (e === 2) {
          if (n = t, l.errorRecoveryDisabledLanes & n)
            var f = 0;
          else
            f = l.pendingLanes & -536870913, f = f !== 0 ? f : f & 536870912 ? 536870912 : 0;
          if (f !== 0) {
            t = f;
            l: {
              var i = l;
              e = Ke;
              var c = i.current.memoizedState.isDehydrated;
              if (c && (ka(i, f).flags |= 256), f = Xc(
                i,
                f,
                !1
              ), f !== 2 && f !== 6) {
                if (Yc && !c) {
                  i.errorRecoveryDisabledLanes |= n, ma |= n, e = 4;
                  break l;
                }
                n = tt, tt = e, n !== null && (tt === null ? tt = n : tt.push.apply(
                  tt,
                  n
                ));
              }
              e = f;
            }
            if (n = !1, e !== 2) continue;
          }
        }
        if (e === 1) {
          ka(l, 0), xu(l, t, 0, !0);
          break;
        }
        l: {
          switch (a = l, n = e, n) {
            case 0:
            case 1:
              throw Error(d(345));
            case 4:
              if ((t & 4194048) !== t && (t & 62914560) !== t)
                break;
            case 6:
              xu(
                a,
                t,
                yt,
                !Yu
              );
              break l;
            case 2:
              tt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(d(329));
          }
          if ((t & 62914560) === t && (e = hf + 300 - ft(), 10 < e)) {
            if (xu(
              a,
              t,
              yt,
              !Yu
            ), yn(a, 0, !0) !== 0) break l;
            It = t, a.timeoutHandle = no(
              Vr.bind(
                null,
                a,
                u,
                tt,
                Sf,
                qc,
                t,
                yt,
                ma,
                wa,
                Yu,
                n,
                "Throttled",
                -0,
                0
              ),
              e
            );
            break l;
          }
          Vr(
            a,
            u,
            tt,
            Sf,
            qc,
            t,
            yt,
            ma,
            wa,
            Yu,
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
  function Vr(l, t, u, a, e, n, f, i, c, y, S, E, r, g) {
    l.timeoutHandle = -1;
    var N = t.subtreeFlags, D = (n & 335544064) === n;
    if (E = null, (D || N & 8192 || (N & 16785408) === 16785408) && (E = {
      stylesheets: null,
      count: 0,
      imgCount: 0,
      imgBytes: 0,
      suspenseyImages: [],
      waitingForImages: !0,
      waitingForViewTransition: !1,
      unsuspend: Zt
    }, dt = null, Yr(
      t,
      n,
      E
    ), D && (N = E, D = l.containerInfo, D = (D.nodeType === 9 ? D : D.ownerDocument).__reactViewTransition, D != null && (N.count++, N.waitingForViewTransition = !0, N = ln.bind(N), D.finished.then(N, N))), N = (n & 62914560) === n ? hf - ft() : (n & 4194048) === n ? Gr - ft() : 0, N = e1(
      E,
      N
    ), N !== null)) {
      It = n, l.cancelPendingCommit = N(
        Ir.bind(
          null,
          l,
          t,
          n,
          u,
          a,
          e,
          f,
          i,
          c,
          y,
          S,
          E,
          null,
          r,
          g
        )
      ), xu(l, n, f, !y);
      return;
    }
    Ir(
      l,
      t,
      n,
      u,
      a,
      e,
      f,
      i,
      c,
      y,
      S,
      E
    );
  }
  function lm(l) {
    for (var t = l; ; ) {
      var u = t.tag;
      if ((u === 0 || u === 11 || u === 15) && t.flags & 16384 && (u = t.updateQueue, u !== null && (u = u.stores, u !== null)))
        for (var a = 0; a < u.length; a++) {
          var e = u[a], n = e.getSnapshot;
          e = e.value;
          try {
            if (!vt(n(), e)) return !1;
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
  function xu(l, t, u, a) {
    t = xo(l, t), t &= ~mf, t &= ~ma, l.suspendedLanes |= t, l.pingedLanes &= ~t, a && (l.warmLanes |= t), a = l.expirationTimes;
    for (var e = t; 0 < e; ) {
      var n = 31 - ct(e), f = 1 << n;
      a[n] = -1, e &= ~f;
    }
    u !== 0 && Xo(l, u, t);
  }
  function bf() {
    return (fl & 6) === 0 ? (we(0), !1) : !0;
  }
  function Gc() {
    if (W !== null) {
      if (vl === 0)
        var l = W.return;
      else
        l = W, cu = aa = null, wi(l), xa = null, Ue = 0, l = W;
      for (; l !== null; )
        dr(l.alternate, l), l = l.return;
      W = null;
    }
  }
  function ka(l, t) {
    var u = l.timeoutHandle;
    return u !== -1 && (l.timeoutHandle = -1, Om(u)), u = l.cancelPendingCommit, u !== null && (l.cancelPendingCommit = null, u()), It = 0, Gc(), ml = l, W = u = fu(l.current, null), $ = t, vl = 0, st = null, Yu = !1, Ja = de(l, t), Yc = !1, wa = yt = mf = ma = qu = _l = 0, tt = Ke = null, qc = !1, yu = xo(l, t), Mn(), u;
  }
  function Lr(l, t) {
    V = null, U.H = kn, t === ja || t === xn ? (t = I0(), vl = 3) : t === Bi ? (t = I0(), vl = 4) : vl = t === cc ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, st = t, W === null && (_l = 1, Pn(
      l,
      zt(t, l.current)
    ));
  }
  function Kr() {
    var l = Gl.current;
    return l === null ? !0 : ($ & 4194048) === $ ? Ll === null : ($ & 62914560) === $ || ($ & 536870912) !== 0 ? l === Ll : !1;
  }
  function Jr() {
    var l = U.H;
    return U.H = kn, l === null ? kn : l;
  }
  function wr() {
    var l = U.A;
    return U.A = ky, l;
  }
  function Ef() {
    _l = 4, Yu || ($ & 4194048) !== $ && Gl.current !== null || (Ja = !0), (qu & 134217727) === 0 && (ma & 134217727) === 0 || ml === null || xu(
      ml,
      $,
      yt,
      !1
    );
  }
  function Xc(l, t, u) {
    var a = fl;
    fl |= 2;
    var e = Jr(), n = wr();
    (ml !== l || $ !== t) && (Sf = null, ka(l, t)), t = !1;
    var f = _l;
    l: do
      try {
        if (vl !== 0 && W !== null) {
          var i = W, c = st;
          switch (vl) {
            case 8:
              Gc(), f = 6;
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              Gl.current === null && (t = !0);
              var y = vl;
              if (vl = 0, st = null, Pa(l, i, c, y), u && Ja) {
                f = 0;
                break l;
              }
              break;
            default:
              y = vl, vl = 0, st = null, Pa(l, i, c, y);
          }
        }
        tm(), f = _l;
        break;
      } catch (S) {
        Lr(l, S);
      }
    while (!0);
    return t && l.shellSuspendCounter++, cu = aa = null, fl = a, U.H = e, U.A = n, W === null && (ml = null, $ = 0, Mn()), f;
  }
  function tm() {
    for (; W !== null; ) Wr(W);
  }
  function um(l, t) {
    var u = fl;
    fl |= 2;
    var a = Jr(), e = wr();
    ml !== l || $ !== t ? (Sf = null, gf = ft() + 500, ka(l, t)) : Ja = de(
      l,
      t
    );
    l: do
      try {
        if (vl !== 0 && W !== null) {
          t = W;
          var n = st;
          t: switch (vl) {
            case 1:
              vl = 0, st = null, Pa(l, t, n, 1);
              break;
            case 2:
            case 9:
              if (F0(n)) {
                vl = 0, st = null, Fr(t);
                break;
              }
              t = function() {
                vl !== 2 && vl !== 9 || ml !== l || (vl = 7), kt(l);
              }, n.then(t, t);
              break l;
            case 3:
              vl = 7;
              break l;
            case 4:
              vl = 5;
              break l;
            case 7:
              F0(n) ? (vl = 0, st = null, Fr(t)) : (vl = 0, st = null, Pa(l, t, n, 7));
              break;
            case 5:
              var f = null;
              switch (W.tag) {
                case 26:
                  f = W.memoizedState;
                case 5:
                case 27:
                  var i = W;
                  if (f ? Xd(f) : i.stateNode.complete) {
                    vl = 0, st = null;
                    var c = i.sibling;
                    if (c !== null) W = c;
                    else {
                      var y = i.return;
                      y !== null ? (W = y, zf(y)) : W = null;
                    }
                    break t;
                  }
              }
              vl = 0, st = null, Pa(l, t, n, 5);
              break;
            case 6:
              vl = 0, st = null, Pa(l, t, n, 6);
              break;
            case 8:
              Gc(), _l = 6;
              break l;
            default:
              throw Error(d(462));
          }
        }
        am();
        break;
      } catch (S) {
        Lr(l, S);
      }
    while (!0);
    return cu = aa = null, U.H = a, U.A = e, fl = u, W !== null ? 0 : (ml = null, $ = 0, Mn(), _l);
  }
  function am() {
    for (; W !== null && !bs(); )
      Wr(W);
  }
  function Wr(l) {
    var t = vr(l.alternate, l, yu);
    l.memoizedProps = l.pendingProps, t === null ? zf(l) : W = t;
  }
  function Fr(l) {
    var t = l, u = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = ar(
          u,
          t,
          t.pendingProps,
          t.type,
          void 0,
          $
        );
        break;
      case 11:
        t = ar(
          u,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          $
        );
        break;
      case 5:
        wi(t);
        var a = t;
        a === pl && (K ? (pn(a), a.tag === 5 && a.stateNode != null && (gl = a.stateNode)) : (pn(a), K = !0));
      default:
        dr(u, t), t = W = x0(t, yu), t = vr(u, t, yu);
    }
    l.memoizedProps = l.pendingProps, t === null ? zf(l) : W = t;
  }
  function Pa(l, t, u, a) {
    cu = aa = null, wi(t), xa = null, Ue = 0;
    var e = t.return;
    try {
      if (Ly(
        l,
        e,
        t,
        u,
        $
      )) {
        _l = 1, Pn(
          l,
          zt(u, l.current)
        ), W = null;
        return;
      }
    } catch (n) {
      if (e !== null) throw W = e, n;
      _l = 1, Pn(
        l,
        zt(u, l.current)
      ), W = null;
      return;
    }
    t.flags & 32768 ? (K || a === 1 ? l = !0 : Ja || ($ & 536870912) !== 0 ? l = !1 : (Yu = l = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = Gl.current, a !== null && a.tag === 13 && (a.flags |= 16384))), $r(t, l)) : zf(t);
  }
  function zf(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        $r(
          t,
          Yu
        );
        return;
      }
      l = t.return;
      var u = Wy(
        t.alternate,
        t,
        yu
      );
      if (u !== null) {
        W = u;
        return;
      }
      if (t = t.sibling, t !== null) {
        W = t;
        return;
      }
      W = t = l;
    } while (t !== null);
    _l === 0 && (_l = 5);
  }
  function $r(l, t) {
    do {
      var u = Fy(l.alternate, l);
      if (u !== null) {
        u.flags &= 32767, W = u;
        return;
      }
      if (u = l.return, u !== null && (u.flags |= 32768, u.subtreeFlags = 0, u.deletions = null), !t && (l = l.sibling, l !== null)) {
        W = l;
        return;
      }
      W = l = u;
    } while (l !== null);
    _l = 6, W = null;
  }
  function Ir(l, t, u, a, e, n, f, i, c, y, S, E) {
    l.cancelPendingCommit = null;
    do
      _f();
    while (El !== 0);
    if ((fl & 6) !== 0) throw Error(d(327));
    if (t !== null) {
      if (t === l.current) throw Error(d(177));
      l === ml && (W = ml = null, $ = 0), ha = t, Bt = l, It = u, xc = e, Xr = a, em(
        l,
        t,
        u,
        f,
        i,
        c,
        E
      );
    }
  }
  function em(l, t, u, a, e, n, f) {
    var i = t.lanes | t.childLanes;
    if (jc = i, i |= Ei, Us(
      l,
      u,
      i,
      a,
      e,
      n
    ), Fa = null, (u & 335544064) === u ? ($a = Hy(l), a = 10262) : ($a = null, a = 10256), (t.subtreeFlags & a) !== 0 || (t.flags & a) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, vm(vn, function() {
      return Lc(), null;
    })) : (l.callbackNode = null, l.callbackPriority = 0), cf = !1, a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
      a = U.T, U.T = null, e = X.p, X.p = 2, n = fl, fl |= 4;
      try {
        $y(l, t, u);
      } finally {
        fl = n, X.p = e, U.T = a;
      }
    }
    El = 1, cf ? Wa = Um(
      f,
      l.containerInfo,
      $a,
      Qc,
      Zc,
      fm,
      Vc,
      Lc,
      nm
    ) : (Qc(), Zc(), Vc());
  }
  function nm(l) {
    if (El !== 0) {
      var t = Bt.onRecoverableError;
      t(l, { componentStack: null });
    }
  }
  function fm() {
    El === 3 && (El = 0, pr(ha, Bt), El = 4);
  }
  function Qc() {
    if (El === 1) {
      El = 0;
      var l = Bt, t = ha, u = It, a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        a = U.T, U.T = null;
        var e = X.p;
        X.p = 2;
        var n = fl;
        fl |= 4;
        try {
          Ze = rf = !1, Rr(t, l, u), u = uo;
          var f = D0(l.containerInfo), i = u.focusedElem, c = u.selectionRange;
          if (f !== i && i && i.ownerDocument && M0(
            i.ownerDocument.documentElement,
            i
          )) {
            if (c !== null && hi(i)) {
              var y = c.start, S = c.end;
              if (S === void 0 && (S = y), "selectionStart" in i)
                i.selectionStart = y, i.selectionEnd = Math.min(
                  S,
                  i.value.length
                );
              else {
                var E = i.ownerDocument || document, r = E && E.defaultView || window;
                if (r.getSelection) {
                  var g = r.getSelection(), N = i.textContent.length, D = Math.min(c.start, N), L = c.end === void 0 ? D : Math.min(c.end, N);
                  !g.extend && D > L && (f = L, L = D, D = f);
                  var s = A0(
                    i,
                    D
                  ), o = A0(
                    i,
                    L
                  );
                  if (s && o && (g.rangeCount !== 1 || g.anchorNode !== s.node || g.anchorOffset !== s.offset || g.focusNode !== o.node || g.focusOffset !== o.offset)) {
                    var m = E.createRange();
                    m.setStart(s.node, s.offset), g.removeAllRanges(), D > L ? (g.addRange(m), g.extend(o.node, o.offset)) : (m.setEnd(o.node, o.offset), g.addRange(m));
                  }
                }
              }
            }
            for (E = [], g = i; g = g.parentNode; )
              g.nodeType === 1 && E.push({
                element: g,
                left: g.scrollLeft,
                top: g.scrollTop
              });
            for (typeof i.focus == "function" && i.focus(), i = 0; i < E.length; i++) {
              var b = E[i];
              b.element.scrollLeft = b.left, b.element.scrollTop = b.top;
            }
          }
          ie = !!to, uo = to = null;
        } finally {
          fl = n, X.p = e, U.T = a;
        }
      }
      l.current = t, El = 2;
    }
  }
  function Zc() {
    if (El === 2) {
      El = 0;
      var l = Bt, t = ha, u = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || u) {
        u = U.T, U.T = null;
        var a = X.p;
        X.p = 2;
        var e = fl;
        fl |= 4;
        try {
          Nr(l, t.alternate, t);
        } finally {
          fl = e, X.p = a, U.T = u;
        }
      }
      El = 3;
    }
  }
  function Vc() {
    if (El === 4 || El === 3) {
      El = 0;
      var l = Wa;
      Wa = null, Es();
      var t = Bt, u = ha, a = It, e = Xr, n = (a & 335544064) === a ? 10262 : 10256;
      if ((u.subtreeFlags & n) !== 0 || (u.flags & n) !== 0 ? El = 5 : (El = 0, ha = Bt = null, kr(t, t.pendingLanes)), n = t.pendingLanes, n === 0 && (ju = null), kf(a), u = u.stateNode, it && typeof it.onCommitFiberRoot == "function")
        try {
          it.onCommitFiberRoot(
            re,
            u,
            void 0,
            (u.current.flags & 128) === 128
          );
        } catch {
        }
      if (e !== null) {
        u = U.T, n = X.p, X.p = 2, U.T = null;
        try {
          for (var f = t.onRecoverableError, i = 0; i < e.length; i++) {
            var c = e[i];
            f(c.value, {
              componentStack: c.stack
            });
          }
        } finally {
          U.T = u, X.p = n;
        }
      }
      if (e = Fa, f = $a, $a = null, e !== null && (Fa = null, f === null && (f = []), l !== null))
        for (c = 0; c < e.length; c++)
          u = (0, e[c])(
            f
          ), u !== void 0 && l.finished.finally(u);
      (It & 3) !== 0 && _f(), kt(t), n = t.pendingLanes, (a & 261930) !== 0 && (n & 42) !== 0 ? t === Tf ? Je++ : (Je = 0, Tf = t) : (Je = 0, Tf = null), we(0);
    }
  }
  function kr(l, t) {
    (l.pooledCacheLanes &= t) === 0 && (t = l.pooledCache, t != null && (l.pooledCache = null, Me(t)));
  }
  function _f() {
    return Wa !== null && (Wa.skipTransition(), Wa = null), Qc(), Zc(), Vc(), Lc();
  }
  function Lc() {
    if (El !== 5) return !1;
    var l = Bt, t = jc;
    jc = 0;
    var u = kf(It), a = U.T, e = X.p;
    try {
      X.p = 32 > u ? 32 : u, U.T = null, u = xc, xc = null;
      var n = Bt, f = It;
      if (El = 0, ha = Bt = null, It = 0, (fl & 6) !== 0) throw Error(d(331));
      var i = fl;
      if (fl |= 4, jr(n.current), Br(
        n,
        n.current,
        f,
        u
      ), fl = i, we(0, !1), it && typeof it.onPostCommitFiberRoot == "function")
        try {
          it.onPostCommitFiberRoot(re, n);
        } catch {
        }
      return !0;
    } finally {
      X.p = e, U.T = a, kr(l, t);
    }
  }
  function Pr(l, t, u) {
    t = zt(u, t), t = ic(l.stateNode, t, 2), l = Cu(l, t, 2), l !== null && (se(l, 2), kt(l));
  }
  function rl(l, t, u) {
    if (l.tag === 3)
      Pr(l, l, u);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Pr(
            t,
            l,
            u
          );
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (ju === null || !ju.has(a))) {
            l = zt(u, l), u = Fv(2), a = Cu(t, u, 2), a !== null && ($v(
              u,
              a,
              t,
              l
            ), se(a, 2), kt(a));
            break;
          }
        }
        t = t.return;
      }
  }
  function Kc(l, t, u) {
    var a = l.pingCache;
    if (a === null) {
      a = l.pingCache = new Py();
      var e = /* @__PURE__ */ new Set();
      a.set(t, e);
    } else
      e = a.get(t), e === void 0 && (e = /* @__PURE__ */ new Set(), a.set(t, e));
    e.has(u) || (Yc = !0, e.add(u), l = im.bind(null, l, t, u), t.then(l, l));
  }
  function im(l, t, u) {
    var a = l.pingCache;
    a !== null && a.delete(t), l.pingedLanes |= l.suspendedLanes & u, l.warmLanes &= ~u, ml === l && ($ & u) === u && ((_l === 4 || _l === 3 && ($ & 62914560) === $ && 300 > ft() - hf) && (fl & 2) === 0 ? ka(l, 0) : mf |= u, wa === $ && (wa = 0)), kt(l);
  }
  function ld(l, t) {
    t === 0 && (t = Go()), l = la(l, t), l !== null && (se(l, t), kt(l));
  }
  function cm(l) {
    var t = l.memoizedState, u = 0;
    t !== null && (u = t.retryLane), ld(l, u);
  }
  function om(l, t) {
    var u = 0;
    switch (l.tag) {
      case 31:
      case 13:
        var a = l.stateNode, e = l.memoizedState;
        e !== null && (u = e.retryLane);
        break;
      case 19:
        a = l.stateNode;
        break;
      case 22:
        a = l.stateNode._retryCache;
        break;
      default:
        throw Error(d(314));
    }
    a !== null && a.delete(t), ld(l, u);
  }
  function vm(l, t) {
    return Wf(l, t);
  }
  var le = null, te = null, Jc = !1, Of = !1, wc = !1, Gu = 0;
  function kt(l) {
    l !== te && l.next === null && (te === null ? le = te = l : te = te.next = l), Of = !0, Jc || (Jc = !0, dm());
  }
  function we(l, t) {
    if (!wc && Of) {
      wc = !0;
      do
        for (var u = !1, a = le; a !== null; ) {
          if (l !== 0) {
            var e = a.pendingLanes;
            if (e === 0) var n = 0;
            else {
              var f = a.suspendedLanes, i = a.pingedLanes;
              n = (1 << 31 - ct(42 | l) + 1) - 1, n &= e & ~(f & ~i), n = n & 201326741 ? n & 201326741 | 1 : n ? n | 2 : 0;
            }
            n !== 0 && (u = !0, ed(a, n));
          } else
            n = $, n = yn(
              a,
              a === ml ? n : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (n & 3) === 0 || de(a, n) || (u = !0, ed(a, n));
          a = a.next;
        }
      while (u);
      wc = !1;
    }
  }
  function rm() {
    td();
  }
  function td() {
    Of = Jc = !1;
    var l = 0;
    Gu !== 0 && _m() && (l = Gu);
    for (var t = ft(), u = null, a = le; a !== null; ) {
      var e = a.next, n = ud(a, t);
      n === 0 ? (a.next = null, u === null ? le = e : u.next = e, e === null && (te = u)) : (u = a, (l !== 0 || (n & 3) !== 0) && (Of = !0)), a = e;
    }
    El !== 0 && El !== 5 || we(l), Gu !== 0 && (Gu = 0);
  }
  function ud(l, t) {
    for (var u = l.suspendedLanes, a = l.pingedLanes, e = l.expirationTimes, n = l.pendingLanes & -62914561; 0 < n; ) {
      var f = 31 - ct(n), i = 1 << f, c = e[f];
      c === -1 ? ((i & u) === 0 || (i & a) !== 0) && (e[f] = Cs(i, t)) : c <= t && (l.expiredLanes |= i), n &= ~i;
    }
    if (t = ml, u = $, u = yn(
      l,
      l === t ? u : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), a = l.callbackNode, u === 0 || l === t && (vl === 2 || vl === 9) || l.cancelPendingCommit !== null)
      return a !== null && a !== null && Ff(a), l.callbackNode = null, l.callbackPriority = 0;
    if ((u & 3) === 0 || de(l, u)) {
      if (t = u & -u, t === l.callbackPriority) return t;
      switch (a !== null && Ff(a), kf(u)) {
        case 2:
        case 8:
          u = qo;
          break;
        case 32:
          u = vn;
          break;
        case 268435456:
          u = jo;
          break;
        default:
          u = vn;
      }
      return a = ad.bind(null, l), u = Wf(u, a), l.callbackPriority = t, l.callbackNode = u, t;
    }
    return a !== null && a !== null && Ff(a), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function ad(l, t) {
    if (El !== 0 && El !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var u = l.callbackNode;
    if (_f() && l.callbackNode !== u)
      return null;
    var a = $;
    return a = yn(
      l,
      l === ml ? a : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), a === 0 ? null : (Zr(l, a, t), ud(l, ft()), l.callbackNode != null && l.callbackNode === u ? ad.bind(null, l) : null);
  }
  function ed(l, t) {
    if (_f()) return null;
    Zr(l, t, !0);
  }
  function dm() {
    Nm(function() {
      (fl & 6) !== 0 ? Wf(
        Yo,
        rm
      ) : td();
    });
  }
  function Wc() {
    if (Gu === 0) {
      var l = fa;
      l === 0 && (l = rn, rn <<= 1, (rn & 261888) === 0 && (rn = 256)), Gu = l;
    }
    return Gu;
  }
  function nd(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : Tn(l);
  }
  function sm(l, t, u, a, e) {
    if (t === "submit" && u && u.stateNode === e) {
      var n = nd(
        (e[Il] || null).action
      ), f = a.submitter;
      f && (t = (t = f[Il] || null) ? nd(t.formAction) : f.getAttribute("formAction"), t !== null && (n = t, f = null));
      var i = new _n(
        "action",
        "action",
        null,
        a,
        e
      );
      l.push({
        event: i,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (a.defaultPrevented) {
                if (Gu !== 0) {
                  var c = new FormData(e, f);
                  uc(
                    u,
                    {
                      pending: !0,
                      data: c,
                      method: e.method,
                      action: n
                    },
                    null,
                    c
                  );
                }
              } else
                typeof n == "function" && (i.preventDefault(), c = new FormData(e, f), uc(
                  u,
                  {
                    pending: !0,
                    data: c,
                    method: e.method,
                    action: n
                  },
                  n,
                  c
                ));
            },
            currentTarget: e
          }
        ]
      });
    }
  }
  for (var Fc = 0; Fc < bi.length; Fc++) {
    var $c = bi[Fc], ym = $c.toLowerCase(), mm = $c[0].toUpperCase() + $c.slice(1);
    Ut(
      ym,
      "on" + mm
    );
  }
  Ut(R0, "onAnimationEnd"), Ut(H0, "onAnimationIteration"), Ut(p0, "onAnimationStart"), Ut("dblclick", "onDoubleClick"), Ut("focusin", "onFocus"), Ut("focusout", "onBlur"), Ut(Oy, "onTransitionRun"), Ut(Ny, "onTransitionStart"), Ut(Ay, "onTransitionCancel"), Ut(B0, "onTransitionEnd"), _a("onMouseEnter", ["mouseout", "mouseover"]), _a("onMouseLeave", ["mouseout", "mouseover"]), _a("onPointerEnter", ["pointerout", "pointerover"]), _a("onPointerLeave", ["pointerout", "pointerover"]), Iu(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Iu(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Iu("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Iu(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Iu(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Iu(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var We = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), hm = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(We)
  );
  function fd(l, t) {
    t = (t & 4) !== 0;
    for (var u = 0; u < l.length; u++) {
      var a = l[u], e = a.event;
      a = a.listeners;
      l: {
        var n = void 0;
        if (t)
          for (var f = a.length - 1; 0 <= f; f--) {
            var i = a[f], c = i.instance, y = i.currentTarget;
            if (i = i.listener, c !== n && e.isPropagationStopped())
              break l;
            n = i, e.currentTarget = y;
            try {
              n(e);
            } catch (S) {
              An(S);
            }
            e.currentTarget = null, n = c;
          }
        else
          for (f = 0; f < a.length; f++) {
            if (i = a[f], c = i.instance, y = i.currentTarget, i = i.listener, c !== n && e.isPropagationStopped())
              break l;
            n = i, e.currentTarget = y;
            try {
              n(e);
            } catch (S) {
              An(S);
            }
            e.currentTarget = null, n = c;
          }
      }
    }
  }
  function F(l, t) {
    var u = t[Ko];
    u === void 0 && (u = t[Ko] = /* @__PURE__ */ new Set());
    var a = l + "__bubble";
    u.has(a) || (id(t, l, 2, !1), u.add(a));
  }
  function Ic(l, t, u) {
    var a = 0;
    t && (a |= 4), id(
      u,
      l,
      a,
      t
    );
  }
  var Nf = "_reactListening" + Math.random().toString(36).slice(2);
  function kc(l) {
    if (!l[Nf]) {
      l[Nf] = !0, Wo.forEach(function(u) {
        u !== "selectionchange" && (hm.has(u) || Ic(u, !1, l), Ic(u, !0, l));
      });
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[Nf] || (t[Nf] = !0, Ic("selectionchange", !1, t));
    }
  }
  function id(l, t, u, a) {
    switch ($d(t)) {
      case 2:
        var e = c1;
        break;
      case 8:
        e = o1;
        break;
      default:
        e = To;
    }
    u = e.bind(
      null,
      t,
      u,
      l
    ), e = void 0, !fi || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (e = !0), a ? e !== void 0 ? l.addEventListener(t, u, {
      capture: !0,
      passive: e
    }) : l.addEventListener(t, u, !0) : e !== void 0 ? l.addEventListener(t, u, {
      passive: e
    }) : l.addEventListener(t, u, !1);
  }
  function Pc(l, t, u, a, e) {
    var n = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      l: for (; ; ) {
        if (a === null) return;
        var f = a.tag;
        if (f === 3 || f === 4) {
          var i = a.stateNode.containerInfo;
          if (i === e) break;
          if (f === 4)
            for (f = a.return; f !== null; ) {
              var c = f.tag;
              if ((c === 3 || c === 4) && f.stateNode.containerInfo === e)
                return;
              f = f.return;
            }
          for (; i !== null; ) {
            if (f = $u(i), f === null) return;
            if (c = f.tag, c === 5 || c === 6 || c === 26 || c === 27) {
              a = n = f;
              continue l;
            }
            i = i.parentNode;
          }
        }
        a = a.return;
      }
    i0(function() {
      var y = n, S = ei(u), E = [];
      l: {
        var r = Y0.get(l);
        if (r !== void 0) {
          var g = _n, N = l;
          switch (l) {
            case "keypress":
              if (En(u) === 0) break l;
            case "keydown":
            case "keyup":
              g = ly;
              break;
            case "focusin":
              N = "focus", g = vi;
              break;
            case "focusout":
              N = "blur", g = vi;
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
              g = v0;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              g = Zs;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              g = ny;
              break;
            case R0:
            case H0:
            case p0:
              g = Ks;
              break;
            case B0:
              g = iy;
              break;
            case "scroll":
            case "scrollend":
              g = Xs;
              break;
            case "wheel":
              g = oy;
              break;
            case "copy":
            case "cut":
            case "paste":
              g = ws;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              g = d0;
              break;
            case "submit":
              g = ay;
              break;
            case "toggle":
            case "beforetoggle":
              g = ry;
          }
          var D = (t & 4) !== 0, L = !D && (l === "scroll" || l === "scrollend"), s = D ? r !== null ? r + "Capture" : null : r;
          D = [];
          for (var o = y, m; o !== null; ) {
            var b = o;
            if (m = b.stateNode, b = b.tag, b !== 5 && b !== 26 && b !== 27 || m === null || s === null || (b = he(o, s), b != null && D.push(
              Fe(o, b, m)
            )), L) break;
            o = o.return;
          }
          0 < D.length && (r = new g(
            r,
            N,
            null,
            u,
            S
          ), E.push({ event: r, listeners: D }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (g = l === "mouseover" || l === "pointerover", r = l === "mouseout" || l === "pointerout", g && u !== ai && (N = u.relatedTarget || u.fromElement) && ($u(N) || N[ba]))
            break l;
          (r || g) && (N = S.window === S ? S : (g = S.ownerDocument) ? g.defaultView || g.parentWindow : window, r ? (g = u.relatedTarget || u.toElement, r = y, g = g ? $u(g) : null, g !== null && (L = Z(g), D = g.tag, g !== L || D !== 5 && D !== 27 && D !== 6) && (g = null)) : (r = null, g = y), r !== g && (D = v0, b = "onMouseLeave", s = "onMouseEnter", o = "mouse", (l === "pointerout" || l === "pointerover") && (D = d0, b = "onPointerLeave", s = "onPointerEnter", o = "pointer"), L = r == null ? N : me(r), m = g == null ? N : me(g), N = new D(
            b,
            o + "leave",
            r,
            u,
            S
          ), N.target = L, N.relatedTarget = m, b = null, $u(S) === y && (D = new D(
            s,
            o + "enter",
            g,
            u,
            S
          ), D.target = m, D.relatedTarget = L, b = D), L = b, D = r && g ? et(
            r,
            g,
            gm
          ) : null, r !== null && cd(
            E,
            N,
            r,
            D,
            !1
          ), g !== null && L !== null && cd(
            E,
            L,
            g,
            D,
            !0
          )));
        }
        l: {
          if (r = y ? me(y) : window, g = r.nodeName && r.nodeName.toLowerCase(), g === "select" || g === "input" && r.type === "file")
            var M = b0;
          else if (S0(r))
            if (E0)
              M = Ey;
            else {
              M = Ty;
              var I = Sy;
            }
          else
            g = r.nodeName, !g || g.toLowerCase() !== "input" || r.type !== "checkbox" && r.type !== "radio" ? y && ui(y.elementType) && (M = b0) : M = by;
          if (M && (M = M(l, y))) {
            T0(
              E,
              M,
              u,
              S
            );
            break l;
          }
          I && I(l, r, y);
        }
        switch (I = y ? me(y) : window, l) {
          case "focusin":
            (S0(I) || I.contentEditable === "true") && (Ca = I, gi = y, Oe = null);
            break;
          case "focusout":
            Oe = gi = Ca = null;
            break;
          case "mousedown":
            Si = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Si = !1, C0(E, u, S);
            break;
          case "selectionchange":
            if (_y) break;
          case "keydown":
          case "keyup":
            C0(E, u, S);
        }
        var H;
        if (di)
          l: {
            switch (l) {
              case "compositionstart":
                var q = "onCompositionStart";
                break l;
              case "compositionend":
                q = "onCompositionEnd";
                break l;
              case "compositionupdate":
                q = "onCompositionUpdate";
                break l;
            }
            q = void 0;
          }
        else
          Da ? h0(l, u) && (q = "onCompositionEnd") : l === "keydown" && u.keyCode === 229 && (q = "onCompositionStart");
        q && (s0 && u.locale !== "ko" && (Da || q !== "onCompositionStart" ? q === "onCompositionEnd" && Da && (H = c0()) : (bu = S, ii = "value" in bu ? bu.value : bu.textContent, Da = !0)), I = Af(y, q), 0 < I.length && (q = new r0(
          q,
          l,
          null,
          u,
          S
        ), E.push({ event: q, listeners: I }), H ? q.data = H : (H = g0(u), H !== null && (q.data = H)))), (H = sy ? yy(l, u) : my(l, u)) && (q = Af(y, "onBeforeInput"), 0 < q.length && (I = new r0(
          "onBeforeInput",
          "beforeinput",
          null,
          u,
          S
        ), E.push({
          event: I,
          listeners: q
        }), I.data = H)), sm(
          E,
          l,
          y,
          u,
          S
        );
      }
      fd(E, t);
    });
  }
  function Fe(l, t, u) {
    return {
      instance: l,
      listener: t,
      currentTarget: u
    };
  }
  function Af(l, t) {
    for (var u = t + "Capture", a = []; l !== null; ) {
      var e = l, n = e.stateNode;
      if (e = e.tag, e !== 5 && e !== 26 && e !== 27 || n === null || (e = he(l, u), e != null && a.unshift(
        Fe(l, e, n)
      ), e = he(l, t), e != null && a.push(
        Fe(l, e, n)
      )), l.tag === 3) return a;
      l = l.return;
    }
    return [];
  }
  function gm(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function cd(l, t, u, a, e) {
    for (var n = t._reactName, f = []; u !== null && u !== a; ) {
      var i = u, c = i.alternate, y = i.stateNode;
      if (i = i.tag, c !== null && c === a) break;
      i !== 5 && i !== 26 && i !== 27 || y === null || (c = y, e ? (y = he(u, n), y != null && f.unshift(
        Fe(u, y, c)
      )) : e || (y = he(u, n), y != null && f.push(
        Fe(u, y, c)
      ))), u = u.return;
    }
    f.length !== 0 && l.push({ event: t, listeners: f });
  }
  var Sm = /\r\n?/g, Tm = /\u0000|\uFFFD/g;
  function od(l) {
    return (typeof l == "string" ? l : "" + l).replace(Sm, `
`).replace(Tm, "");
  }
  function vd(l, t) {
    return t = od(t), od(l) === t;
  }
  function dl(l, t, u, a, e, n) {
    switch (u) {
      case "children":
        if (typeof a == "string")
          t === "body" || t === "textarea" && a === "" || Na(l, a);
        else if (typeof a == "number" || typeof a == "bigint")
          t !== "body" && Na(l, "" + a);
        else return;
        break;
      case "className":
        Sn(l, "class", a);
        break;
      case "tabIndex":
        Sn(l, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Sn(l, u, a);
        break;
      case "style":
        n0(l, a, n);
        return;
      case "data":
        if (t !== "object") {
          Sn(l, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (t !== "a" || u !== "href")) {
          l.removeAttribute(u);
          break;
        }
        if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
          l.removeAttribute(u);
          break;
        }
        a = Tn(a), l.setAttribute(u, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          l.setAttribute(
            u,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof n == "function" && (u === "formAction" ? (t !== "input" && dl(l, t, "name", e.name, e, null), dl(
            l,
            t,
            "formEncType",
            e.formEncType,
            e,
            null
          ), dl(
            l,
            t,
            "formMethod",
            e.formMethod,
            e,
            null
          ), dl(
            l,
            t,
            "formTarget",
            e.formTarget,
            e,
            null
          )) : (dl(l, t, "encType", e.encType, e, null), dl(l, t, "method", e.method, e, null), dl(l, t, "target", e.target, e, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          l.removeAttribute(u);
          break;
        }
        a = Tn(a), l.setAttribute(u, a);
        break;
      case "onClick":
        a != null && (l.onclick = Zt);
        return;
      case "onScroll":
        a != null && F("scroll", l);
        return;
      case "onScrollEnd":
        a != null && F("scrollend", l);
        return;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(d(61));
          if (u = a.__html, u != null) {
            if (e.children != null) throw Error(d(60));
            n?.__html !== u && (l.innerHTML = u);
          }
        }
        break;
      case "multiple":
        l.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        l.muted = a && typeof a != "function" && typeof a != "symbol";
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
        if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
          l.removeAttribute("xlink:href");
          break;
        }
        u = Tn(a), l.setAttributeNS(
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
        a != null && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(u, a) : l.removeAttribute(u);
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
        a && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(u, "") : l.removeAttribute(u);
        break;
      case "capture":
      case "download":
        a === !0 ? l.setAttribute(u, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(u, a) : l.removeAttribute(u);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? l.setAttribute(u, a) : l.removeAttribute(u);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? l.removeAttribute(u) : l.setAttribute(u, a);
        break;
      case "popover":
        F("beforetoggle", l), F("toggle", l), gn(l, "popover", a);
        break;
      case "xlinkActuate":
        uu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          a
        );
        break;
      case "xlinkArcrole":
        uu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          a
        );
        break;
      case "xlinkRole":
        uu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          a
        );
        break;
      case "xlinkShow":
        uu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          a
        );
        break;
      case "xlinkTitle":
        uu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          a
        );
        break;
      case "xlinkType":
        uu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          a
        );
        break;
      case "xmlBase":
        uu(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          a
        );
        break;
      case "xmlLang":
        uu(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          a
        );
        break;
      case "xmlSpace":
        uu(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          a
        );
        break;
      case "is":
        gn(l, "is", a);
        break;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!(2 < u.length) || u[0] !== "o" && u[0] !== "O" || u[1] !== "n" && u[1] !== "N")
          u = xs.get(u) || u, gn(l, u, a);
        else return;
    }
    ul = !0;
  }
  function lo(l, t, u, a, e, n) {
    switch (u) {
      case "style":
        n0(l, a, n);
        return;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(d(61));
          if (u = a.__html, u != null) {
            if (e.children != null) throw Error(d(60));
            n?.__html !== u && (l.innerHTML = u);
          }
        }
        break;
      case "children":
        if (typeof a == "string") Na(l, a);
        else if (typeof a == "number" || typeof a == "bigint")
          Na(l, "" + a);
        else return;
        break;
      case "onScroll":
        a != null && F("scroll", l);
        return;
      case "onScrollEnd":
        a != null && F("scrollend", l);
        return;
      case "onClick":
        a != null && (l.onclick = Zt);
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
        if (!Fo.hasOwnProperty(u))
          l: {
            if (u[0] === "o" && u[1] === "n" && (e = u.endsWith("Capture"), n = u.slice(2, e ? u.length - 7 : void 0), t = l[Il] || null, t = t != null ? t[u] : null, typeof t == "function" && l.removeEventListener(n, t, e), typeof a == "function")) {
              typeof t != "function" && t !== null && (u in l ? l[u] = null : l.hasAttribute(u) && l.removeAttribute(u)), l.addEventListener(n, a, e);
              break l;
            }
            ul = !0, u in l ? l[u] = a : a === !0 ? l.setAttribute(u, "") : gn(l, u, a);
          }
        return;
    }
    ul = !0;
  }
  function Zl(l, t, u) {
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
        F("error", l), F("load", l);
        var a = !1, e = !1, n;
        for (n in u)
          if (u.hasOwnProperty(n)) {
            var f = u[n];
            if (f != null)
              switch (n) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  e = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(d(137, t));
                default:
                  dl(l, t, n, f, u, null);
              }
          }
        e && dl(l, t, "srcSet", u.srcSet, u, null), a && dl(l, t, "src", u.src, u, null);
        return;
      case "input":
        F("invalid", l);
        var i = n = f = e = null, c = null, y = null;
        for (a in u)
          if (u.hasOwnProperty(a)) {
            var S = u[a];
            if (S != null)
              switch (a) {
                case "name":
                  e = S;
                  break;
                case "type":
                  f = S;
                  break;
                case "checked":
                  c = S;
                  break;
                case "defaultChecked":
                  y = S;
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
                    throw Error(d(137, t));
                  break;
                default:
                  dl(l, t, a, S, u, null);
              }
          }
        t0(
          l,
          n,
          i,
          c,
          y,
          f,
          e,
          !1
        );
        return;
      case "select":
        F("invalid", l), a = f = n = null;
        for (e in u)
          if (u.hasOwnProperty(e) && (i = u[e], i != null))
            switch (e) {
              case "value":
                n = i;
                break;
              case "defaultValue":
                f = i;
                break;
              case "multiple":
                a = i;
              default:
                dl(l, t, e, i, u, null);
            }
        t = n, u = f, l.multiple = !!a, t != null ? Oa(l, !!a, t, !1) : u != null && Oa(l, !!a, u, !0);
        return;
      case "textarea":
        F("invalid", l), n = e = a = null;
        for (f in u)
          if (u.hasOwnProperty(f) && (i = u[f], i != null))
            switch (f) {
              case "value":
                a = i;
                break;
              case "defaultValue":
                e = i;
                break;
              case "children":
                n = i;
                break;
              case "dangerouslySetInnerHTML":
                if (i != null) throw Error(d(91));
                break;
              default:
                dl(l, t, f, i, u, null);
            }
        a0(l, a, e, n);
        return;
      case "option":
        for (c in u)
          u.hasOwnProperty(c) && (a = u[c], a != null) && (c === "selected" ? l.selected = a && typeof a != "function" && typeof a != "symbol" : dl(l, t, c, a, u, null));
        return;
      case "dialog":
        F("beforetoggle", l), F("toggle", l), F("cancel", l), F("close", l);
        break;
      case "iframe":
      case "object":
        F("load", l);
        break;
      case "video":
      case "audio":
        for (a = 0; a < We.length; a++)
          F(We[a], l);
        break;
      case "image":
        F("error", l), F("load", l);
        break;
      case "details":
        F("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        F("error", l), F("load", l);
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
        for (y in u)
          if (u.hasOwnProperty(y) && (a = u[y], a != null))
            switch (y) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(d(137, t));
              default:
                dl(l, t, y, a, u, null);
            }
        return;
      default:
        if (ui(t)) {
          for (S in u)
            u.hasOwnProperty(S) && (a = u[S], a !== void 0 && lo(
              l,
              t,
              S,
              a,
              u,
              void 0
            ));
          return;
        }
    }
    for (i in u)
      u.hasOwnProperty(i) && (a = u[i], a != null && dl(l, t, i, a, u, null));
  }
  var bm = {};
  function Em(l, t, u, a) {
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
        var e = null, n = null, f = null, i = null, c = null, y = null, S = null;
        for (g in u) {
          var E = u[g];
          if (u.hasOwnProperty(g) && E != null)
            switch (g) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                c = E;
              default:
                a.hasOwnProperty(g) || dl(l, t, g, null, a, E);
            }
        }
        for (var r in a) {
          var g = a[r];
          if (E = u[r], a.hasOwnProperty(r) && (g != null || E != null))
            switch (r) {
              case "type":
                g !== E && (ul = !0), n = g;
                break;
              case "name":
                g !== E && (ul = !0), e = g;
                break;
              case "checked":
                g !== E && (ul = !0), y = g;
                break;
              case "defaultChecked":
                g !== E && (ul = !0), S = g;
                break;
              case "value":
                g !== E && (ul = !0), f = g;
                break;
              case "defaultValue":
                g !== E && (ul = !0), i = g;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (g != null)
                  throw Error(d(137, t));
                break;
              default:
                g !== E && dl(
                  l,
                  t,
                  r,
                  g,
                  a,
                  E
                );
            }
        }
        li(
          l,
          f,
          i,
          c,
          y,
          S,
          n,
          e
        );
        return;
      case "select":
        g = f = i = r = null;
        for (n in u)
          if (c = u[n], u.hasOwnProperty(n) && c != null)
            switch (n) {
              case "value":
                break;
              case "multiple":
                g = c;
              default:
                a.hasOwnProperty(n) || dl(
                  l,
                  t,
                  n,
                  null,
                  a,
                  c
                );
            }
        for (e in a)
          if (n = a[e], c = u[e], a.hasOwnProperty(e) && (n != null || c != null))
            switch (e) {
              case "value":
                n !== c && (ul = !0), r = n;
                break;
              case "defaultValue":
                n !== c && (ul = !0), i = n;
                break;
              case "multiple":
                n !== c && (ul = !0), f = n;
              default:
                n !== c && dl(
                  l,
                  t,
                  e,
                  n,
                  a,
                  c
                );
            }
        t = i, u = f, a = g, r != null ? Oa(l, !!u, r, !1) : !!a != !!u && (t != null ? Oa(l, !!u, t, !0) : Oa(l, !!u, u ? [] : "", !1));
        return;
      case "textarea":
        g = r = null;
        for (i in u)
          if (e = u[i], u.hasOwnProperty(i) && e != null && !a.hasOwnProperty(i))
            switch (i) {
              case "value":
                break;
              case "children":
                break;
              default:
                dl(l, t, i, null, a, e);
            }
        for (f in a)
          if (e = a[f], n = u[f], a.hasOwnProperty(f) && (e != null || n != null))
            switch (f) {
              case "value":
                e !== n && (ul = !0), r = e;
                break;
              case "defaultValue":
                e !== n && (ul = !0), g = e;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (e != null) throw Error(d(91));
                break;
              default:
                e !== n && dl(l, t, f, e, a, n);
            }
        u0(l, r, g);
        return;
      case "option":
        for (var N in u)
          r = u[N], u.hasOwnProperty(N) && r != null && !a.hasOwnProperty(N) && (N === "selected" ? l.selected = !1 : dl(
            l,
            t,
            N,
            null,
            a,
            r
          ));
        for (c in a)
          r = a[c], g = u[c], a.hasOwnProperty(c) && r !== g && (r != null || g != null) && (c === "selected" ? (r !== g && (ul = !0), l.selected = r && typeof r != "function" && typeof r != "symbol") : dl(
            l,
            t,
            c,
            r,
            a,
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
        for (var D in u)
          r = u[D], u.hasOwnProperty(D) && r != null && !a.hasOwnProperty(D) && dl(l, t, D, null, a, r);
        for (y in a)
          if (r = a[y], g = u[y], a.hasOwnProperty(y) && r !== g && (r != null || g != null))
            switch (y) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (r != null)
                  throw Error(d(137, t));
                break;
              default:
                dl(
                  l,
                  t,
                  y,
                  r,
                  a,
                  g
                );
            }
        return;
      default:
        if (ui(t)) {
          for (var L in u)
            r = u[L], u.hasOwnProperty(L) && r !== void 0 && !a.hasOwnProperty(L) && lo(
              l,
              t,
              L,
              void 0,
              a,
              r
            );
          for (S in a)
            r = a[S], g = u[S], !a.hasOwnProperty(S) || r === g || r === void 0 && g === void 0 || lo(
              l,
              t,
              S,
              r,
              a,
              g
            );
          return;
        }
    }
    for (var s in u)
      r = u[s], u.hasOwnProperty(s) && r != null && !a.hasOwnProperty(s) && dl(l, t, s, null, a, r);
    for (E in a)
      r = a[E], g = u[E], !a.hasOwnProperty(E) || r === g || r == null && g == null || dl(l, t, E, r, a, g);
  }
  function rd(l) {
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
  function zm() {
    if (typeof performance.getEntriesByType == "function") {
      for (var l = 0, t = 0, u = performance.getEntriesByType("resource"), a = 0; a < u.length; a++) {
        var e = u[a], n = e.transferSize, f = e.initiatorType, i = e.duration;
        if (n && i && rd(f)) {
          for (f = 0, i = e.responseEnd, a += 1; a < u.length; a++) {
            var c = u[a], y = c.startTime;
            if (y > i) break;
            var S = c.transferSize, E = c.initiatorType;
            S && rd(E) && (c = c.responseEnd, f += S * (c < i ? 1 : (i - y) / (c - y)));
          }
          if (--a, t += 8 * (n + f) / (e.duration / 1e3), l++, 10 < l) break;
        }
      }
      if (0 < l) return t / l / 1e6;
    }
    return navigator.connection && (l = navigator.connection.downlink, typeof l == "number") ? l : 5;
  }
  var to = null, uo = null;
  function $e(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function dd(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function sd(l, t) {
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
  function yd(l, t, u, a) {
    return u = $e(
      u
    ).createElement(l), u[jl] = a, u[Il] = t, Zl(u, l, t), Hl(u), u;
  }
  function ao(l, t) {
    return l === "textarea" || l === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var eo = null;
  function _m() {
    var l = window.event;
    return l && l.type === "popstate" ? l === eo ? !1 : (eo = l, !0) : (eo = null, !1);
  }
  var no = typeof setTimeout == "function" ? setTimeout : void 0, Om = typeof clearTimeout == "function" ? clearTimeout : void 0, md = typeof Promise == "function" ? Promise : void 0, hd = typeof requestAnimationFrame == "function" ? requestAnimationFrame : no, Nm = typeof queueMicrotask == "function" ? queueMicrotask : typeof md < "u" ? function(l) {
    return md.resolve(null).then(l).catch(Am);
  } : no;
  function Am(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function Xu(l) {
    return l === "head";
  }
  function gd(l, t) {
    var u = t, a = 0;
    do {
      var e = u.nextSibling;
      if (l.removeChild(u), e && e.nodeType === 8)
        if (u = e.data, u === "/$" || u === "/&") {
          if (a === 0) {
            l.removeChild(e), ce(t);
            return;
          }
          a--;
        } else if (u === "$" || u === "$?" || u === "$~" || u === "$!" || u === "&")
          a++;
        else if (u === "html")
          yo(
            l.ownerDocument.documentElement
          );
        else if (u === "head") {
          u = l.ownerDocument.head, yo(u);
          for (var n = u.firstChild; n; ) {
            var f = n.nextSibling, i = n.nodeName;
            n[ye] || i === "SCRIPT" || i === "STYLE" || i === "LINK" && n.rel.toLowerCase() === "stylesheet" || u.removeChild(n), n = f;
          }
        } else
          u === "body" && yo(l.ownerDocument.body);
      u = e;
    } while (u);
    ce(t);
  }
  function Sd(l, t) {
    var u = l;
    l = 0;
    do {
      var a = u.nextSibling;
      if (u.nodeType === 1 ? t ? (u._stashedDisplay = u.style.display, u.style.display = "none") : (u.style.display = u._stashedDisplay || "", u.getAttribute("style") === "" && u.removeAttribute("style")) : u.nodeType === 3 && (t ? (u._stashedText = u.nodeValue, u.nodeValue = "") : u.nodeValue = u._stashedText || ""), a && a.nodeType === 8)
        if (u = a.data, u === "/$") {
          if (l === 0) break;
          l--;
        } else
          u !== "$" && u !== "$?" && u !== "$~" && u !== "$!" || l++;
      u = a;
    } while (u);
  }
  function Td(l, t, u) {
    if (t = CSS.escape(t) !== t ? "r-" + btoa(t).replace(/=/g, "") : t, l.style.viewTransitionName = t, u != null && (l.style.viewTransitionClass = u), u = getComputedStyle(l), u.display === "inline") {
      if (t = l.getClientRects(), t.length === 1) var a = 1;
      else
        for (var e = a = 0; e < t.length; e++) {
          var n = t[e];
          0 < n.width && 0 < n.height && a++;
        }
      a === 1 && (l = l.style, l.display = t.length === 1 ? "inline-block" : "block", l.marginTop = "-" + u.paddingTop, l.marginBottom = "-" + u.paddingBottom);
    }
  }
  function bd(l, t) {
    l = l.style, t = t.style;
    var u = t != null ? t.hasOwnProperty("viewTransitionName") ? t.viewTransitionName : t.hasOwnProperty("view-transition-name") ? t["view-transition-name"] : null : null;
    l.viewTransitionName = u == null || typeof u == "boolean" ? "" : ("" + u).trim(), u = t != null ? t.hasOwnProperty("viewTransitionClass") ? t.viewTransitionClass : t.hasOwnProperty("view-transition-class") ? t["view-transition-class"] : null : null, l.viewTransitionClass = u == null || typeof u == "boolean" ? "" : ("" + u).trim(), l.display === "inline-block" && (t == null ? l.display = l.margin = "" : (u = t.display, l.display = u == null || typeof u == "boolean" ? "" : u, u = t.margin, u != null ? l.margin = u : (u = t.hasOwnProperty("marginTop") ? t.marginTop : t["margin-top"], l.marginTop = u == null || typeof u == "boolean" ? "" : u, t = t.hasOwnProperty("marginBottom") ? t.marginBottom : t["margin-bottom"], l.marginBottom = t == null || typeof t == "boolean" ? "" : t)));
  }
  function Mm(l, t, u) {
    return u = u.ownerDocument.defaultView, {
      rect: l,
      abs: t.position === "absolute" || t.position === "fixed",
      clip: t.clipPath !== "none" || t.overflow !== "visible" || t.filter !== "none" || t.mask !== "none" || t.mask !== "none" || t.borderRadius !== "0px",
      view: 0 <= l.bottom && 0 <= l.right && l.top <= u.innerHeight && l.left <= u.innerWidth
    };
  }
  function fo(l) {
    var t = l.getBoundingClientRect(), u = getComputedStyle(l);
    return Mm(t, u, l);
  }
  function Dm(l) {
    return l.documentElement.clientHeight;
  }
  function Cm(l) {
    this.addEventListener("load", l), this.addEventListener("error", l);
  }
  function Um(l, t, u, a, e, n, f, i, c) {
    var y = t.nodeType === 9 ? t : t.ownerDocument;
    try {
      var S = y.startViewTransition({
        update: function() {
          var r = y.defaultView, g = r.navigation && r.navigation.transition, N = y.fonts.status;
          a();
          var D = [];
          if (N === "loaded" && (Dm(y), y.fonts.status === "loading" && D.push(y.fonts.ready)), N = D.length, l !== null)
            for (var L = l.suspenseyImages, s = 0, o = 0; o < L.length; o++) {
              var m = L[o];
              if (!m.complete) {
                var b = m.getBoundingClientRect();
                if (0 < b.bottom && 0 < b.right && b.top < r.innerHeight && b.left < r.innerWidth) {
                  if (s += Qd(m), s > Cf) {
                    D.length = N;
                    break;
                  }
                  m = new Promise(
                    Cm.bind(m)
                  ), D.push(m);
                }
              }
            }
          if (0 < D.length)
            return r = Promise.race([
              Promise.all(D),
              new Promise(function(M) {
                return setTimeout(M, 500);
              })
            ]).then(e, e), (g ? Promise.allSettled([g.finished, r]) : r).then(n, n);
          if (e(), g)
            return g.finished.then(
              n,
              n
            );
          n();
        },
        types: u
      });
      y.__reactViewTransition = S;
      var E = [];
      return S.ready.then(
        function() {
          for (var r = y.documentElement.getAnimations({
            subtree: !0
          }), g = 0; g < r.length; g++) {
            var N = r[g], D = N.effect, L = D.pseudoElement;
            if (L != null && L.startsWith("::view-transition")) {
              E.push(N), N = D.getKeyframes();
              for (var s = L = void 0, o = !0, m = 0; m < N.length; m++) {
                var b = N[m], M = b.width;
                if (L === void 0) L = M;
                else if (L !== M) {
                  o = !1;
                  break;
                }
                if (M = b.height, s === void 0) s = M;
                else if (s !== M) {
                  o = !1;
                  break;
                }
                delete b.width, delete b.height, b.transform === "none" && delete b.transform;
              }
              o && L !== void 0 && s !== void 0 && (D.setKeyframes(N), o = getComputedStyle(
                D.target,
                D.pseudoElement
              ), o.width !== L || o.height !== s) && (o = N[0], o.width = L, o.height = s, o = N[N.length - 1], o.width = L, o.height = s, D.setKeyframes(N));
            }
          }
          f();
        },
        function(r) {
          y.__reactViewTransition === S && (y.__reactViewTransition = null);
          try {
            typeof r == "object" && r !== null && r.name === "InvalidStateError" && (r.message === "View transition was skipped because document visibility state is hidden." || r.message === "Skipping view transition because document visibility state has become hidden." || r.message === "Skipping view transition because viewport size changed." || r.message === "Transition was aborted because of invalid state") && (r = null), r !== null && c(r);
          } finally {
            a(), e(), f();
          }
        }
      ), S.finished.finally(function() {
        for (var r = 0; r < E.length; r++)
          E[r].cancel();
        y.__reactViewTransition === S && (y.__reactViewTransition = null), i();
      }), S;
    } catch {
      return a(), e(), f(), null;
    }
  }
  function ga(l, t) {
    this._scope = document.documentElement, this._selector = "::view-transition-" + l + "(" + t + ")";
  }
  ga.prototype.animate = function(l, t) {
    return t = typeof t == "number" ? { duration: t } : w({}, t), t.pseudoElement = this._selector, this._scope.animate(l, t);
  }, ga.prototype.getAnimations = function() {
    for (var l = this._scope, t = this._selector, u = l.getAnimations({ subtree: !0 }), a = [], e = 0; e < u.length; e++) {
      var n = u[e].effect;
      n !== null && n.target === l && n.pseudoElement === t && a.push(u[e]);
    }
    return a;
  }, ga.prototype.getComputedStyle = function() {
    return getComputedStyle(this._scope, this._selector);
  };
  function Ed(l) {
    return {
      name: l,
      group: new ga("group", l),
      imagePair: new ga("image-pair", l),
      old: new ga("old", l),
      new: new ga("new", l)
    };
  }
  function ht(l) {
    this._fragmentFiber = l, this._observers = this._eventListeners = null;
  }
  ht.prototype.addEventListener = function(l, t, u) {
    var a = null, e = null;
    if (!(u != null && typeof u != "boolean" && (a = u.signal || null, a !== null && a.aborted))) {
      this._eventListeners === null && (this._eventListeners = []);
      var n = this._eventListeners;
      if (_d(n, l, t, u) === -1) {
        var f = this, i = t;
        u != null && typeof u != "boolean" && u.once === !0 && (i = function(c) {
          f.removeEventListener(
            l,
            t,
            u
          ), typeof t == "function" ? t.call(this, c) : t.handleEvent(c);
        }), a !== null && (e = f.removeEventListener.bind(
          f,
          l,
          t,
          u
        ), a.addEventListener("abort", e, { once: !0 }), e = a.removeEventListener.bind(a, "abort", e)), a = ue(u), n.push({
          type: l,
          listener: t,
          optionsOrUseCapture: u,
          attachedListener: i,
          cleanup: e
        }), T(
          this._fragmentFiber.child,
          !1,
          Rm,
          l,
          i,
          a
        );
      }
      this._eventListeners = n;
    }
  };
  function Rm(l, t, u, a) {
    return il(l).addEventListener(
      t,
      u,
      a
    ), !1;
  }
  ht.prototype.removeEventListener = function(l, t, u) {
    var a = this._eventListeners;
    if (a !== null && (t = _d(
      a,
      l,
      t,
      u
    ), t !== -1)) {
      var e = a[t];
      u = e.attachedListener;
      var n = e.cleanup;
      e = ue(e.optionsOrUseCapture), T(
        this._fragmentFiber.child,
        !1,
        Hm,
        l,
        u,
        e
      ), a.splice(t, 1), n !== null && n();
    }
  };
  function Hm(l, t, u, a) {
    return il(l).removeEventListener(
      t,
      u,
      a
    ), !1;
  }
  function ue(l) {
    return l != null && typeof l != "boolean" && (l.once === !0 || l.signal instanceof AbortSignal) ? { capture: l.capture, passive: l.passive } : l;
  }
  function zd(l) {
    return l == null ? "c=0" : typeof l == "boolean" ? "c=" + (l ? "1" : "0") : "c=" + (l.capture ? "1" : "0");
  }
  function _d(l, t, u, a) {
    if (l.length === 0) return -1;
    a = zd(a);
    for (var e = 0; e < l.length; e++) {
      var n = l[e];
      if (n.type === t && n.listener === u && zd(n.optionsOrUseCapture) === a)
        return e;
    }
    return -1;
  }
  ht.prototype.dispatchEvent = function(l) {
    var t = C(
      this._fragmentFiber
    );
    if (t === null) return !0;
    t = il(t);
    var u = this._eventListeners;
    if (u !== null && 0 < u.length || !l.bubbles) {
      var a = t.nodeType === 9 ? t.createComment("") : document.createTextNode("");
      if (u)
        for (var e = 0; e < u.length; e++) {
          var n = u[e];
          a.addEventListener(
            n.type,
            n.attachedListener,
            ue(n.optionsOrUseCapture)
          );
        }
      if (t.appendChild(a), l = a.dispatchEvent(l), u)
        for (e = 0; e < u.length; e++)
          n = u[e], a.removeEventListener(
            n.type,
            n.attachedListener,
            ue(n.optionsOrUseCapture)
          );
      return t.removeChild(a), l;
    }
    return t.dispatchEvent(l);
  }, ht.prototype.focus = function(l) {
    T(
      this._fragmentFiber.child,
      !0,
      Od,
      l,
      void 0,
      void 0
    );
  };
  function Od(l, t) {
    return l.tag === 6 ? !1 : (l = il(l), Lm(l, t));
  }
  ht.prototype.focusLast = function(l) {
    var t = [];
    T(
      this._fragmentFiber.child,
      !0,
      io,
      t,
      void 0,
      void 0
    );
    for (var u = t.length - 1; 0 <= u && !Od(t[u], l); u--) ;
  };
  function io(l, t) {
    return t.push(l), !1;
  }
  ht.prototype.blur = function() {
    var l = C(
      this._fragmentFiber
    );
    l !== null && (l = il(l), l = $e(l).activeElement, l !== null && T(
      this._fragmentFiber.child,
      !1,
      pm,
      l,
      void 0,
      void 0
    ));
  };
  function pm(l, t) {
    return l.tag === 6 ? !1 : (l = il(l), l === t || l.contains(t) ? (t.blur(), !0) : !1);
  }
  ht.prototype.observeUsing = function(l) {
    this._observers === null && (this._observers = /* @__PURE__ */ new Set()), this._observers.add(l), T(
      this._fragmentFiber.child,
      !1,
      Bm,
      l,
      void 0,
      void 0
    );
  };
  function Bm(l, t) {
    return l.tag === 6 || (l = il(l), t.observe(l)), !1;
  }
  ht.prototype.unobserveUsing = function(l) {
    var t = this._observers;
    if (t !== null && t.has(l)) {
      t.delete(l), T(
        this._fragmentFiber.child,
        !1,
        Ym,
        l,
        void 0,
        void 0
      );
      for (var u = t = 0; u < Yt.length; u++) {
        var a = Yt[u];
        a.fragmentInstance === this && a.observer === l ? l.unobserve(a.instance) : Yt[t++] = a;
      }
      Yt.length = t;
    }
  };
  function Ym(l, t) {
    return l.tag === 6 || (l = il(l), t.unobserve(l)), !1;
  }
  var Yt = [], co = !1;
  function qm(l, t, u) {
    Yt.push({
      fragmentInstance: l,
      observer: t,
      instance: u
    }), co || (co = !0, Km(function() {
      co = !1;
      var a = Yt;
      Yt = [];
      for (var e = 0; e < a.length; e++) {
        var n = a[e];
        n.observer.unobserve(n.instance);
      }
    }));
  }
  ht.prototype.getClientRects = function() {
    var l = [];
    return T(
      this._fragmentFiber.child,
      !1,
      jm,
      l,
      void 0,
      void 0
    ), l;
  };
  function jm(l, t) {
    if (l.tag === 6) {
      l = l.stateNode;
      var u = l.ownerDocument.createRange();
      u.selectNodeContents(l), t.push.apply(t, u.getClientRects());
    } else
      l = il(l), t.push.apply(t, l.getClientRects());
    return !1;
  }
  ht.prototype.getRootNode = function(l) {
    var t = C(
      this._fragmentFiber
    );
    return t === null ? this : il(t).getRootNode(l);
  }, ht.prototype.compareDocumentPosition = function(l) {
    var t = C(
      this._fragmentFiber
    );
    if (t === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
    var u = [];
    T(
      this._fragmentFiber.child,
      !1,
      io,
      u,
      void 0,
      void 0
    );
    var a = il(t);
    if (u.length === 0) {
      if (u = a, Ol(this._fragmentFiber)) {
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
      var e = a = u.compareDocumentPosition(l);
      return u === l ? e = Node.DOCUMENT_POSITION_CONTAINS : a & Node.DOCUMENT_POSITION_CONTAINED_BY && (u = $l(t)[1], u === null ? e = Node.DOCUMENT_POSITION_PRECEDING : (l = il(u).compareDocumentPosition(
        l
      ), e = l === 0 || l & Node.DOCUMENT_POSITION_FOLLOWING ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING)), e |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
    }
    t = il(u[0]), e = il(u[u.length - 1]);
    var n = Ol(this._fragmentFiber) ? t.parentElement : a;
    if (n == null)
      return Node.DOCUMENT_POSITION_DISCONNECTED;
    a = n.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY, n = n.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_CONTAINED_BY;
    var f = t.compareDocumentPosition(l), i = e.compareDocumentPosition(l), c = f & Node.DOCUMENT_POSITION_CONTAINED_BY || i & Node.DOCUMENT_POSITION_CONTAINED_BY;
    return i = a && n && f & Node.DOCUMENT_POSITION_FOLLOWING && i & Node.DOCUMENT_POSITION_PRECEDING, t = a && t === l || n && e === l || c || i ? Node.DOCUMENT_POSITION_CONTAINED_BY : !a && t === l || !n && e === l ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC : f, t & Node.DOCUMENT_POSITION_DISCONNECTED || t & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC || xm(
      t,
      this._fragmentFiber,
      u[0],
      u[u.length - 1],
      l
    ) ? t : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
  };
  function xm(l, t, u, a, e) {
    var n = $u(e);
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
        return n = e.ownerDocument, e === n || e === n.documentElement || e === n.body;
      l: {
        for (n = t, t = C(t); n !== null; ) {
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
    return l & Node.DOCUMENT_POSITION_PRECEDING ? ((t = !!n) && !(t = n === u) && (t = et(
      u,
      n,
      xt
    ), t === null ? t = !1 : (T(
      t,
      !0,
      Ju,
      n,
      u
    ), n = gt, gt = null, t = n !== null)), t) : l & Node.DOCUMENT_POSITION_FOLLOWING ? ((t = !!n) && !(t = n === a) && (t = et(
      a,
      n,
      xt
    ), t === null ? t = !1 : (T(
      t,
      !0,
      jt,
      n,
      a
    ), n = gt, at = gt = null, t = n !== null)), t) : !1;
  }
  function Nd(l, t) {
    var u = l.ownerDocument.createRange();
    u.selectNodeContents(l), l = u.getBoundingClientRect(), window.scrollTo(
      window.scrollX + l.left,
      t ? window.scrollY + l.top : window.scrollY + l.bottom - window.innerHeight
    );
  }
  ht.prototype.scrollIntoView = function(l) {
    if (typeof l == "object") throw Error(d(566));
    var t = [];
    T(
      this._fragmentFiber.child,
      !1,
      io,
      t,
      void 0,
      void 0
    );
    var u = l !== !1;
    if (t.length === 0) {
      var a = $l(
        this._fragmentFiber
      );
      if (a = u ? a[1] || a[0] || C(this._fragmentFiber) : a[0] || a[1], a === null) return;
      if (a.tag === 6) {
        l = il(a), Nd(l, u);
        return;
      }
      if (a = il(a), a.nodeType !== 9) {
        if (a.nodeType === 11) {
          u = "host" in a ? a.host : null, u !== null && u.scrollIntoView(l);
          return;
        }
        a.scrollIntoView(l);
      }
    }
    for (a = u ? t.length - 1 : 0; a !== (u ? -1 : t.length); ) {
      var e = t[a];
      e.tag === 6 ? (e = il(e), Nd(e, u)) : il(e).scrollIntoView(l), a += u ? -1 : 1;
    }
  };
  function Gm(l, t) {
    return l = il(l), Ad(l, t), !1;
  }
  function Ad(l, t) {
    l.reactFragments == null && (l.reactFragments = /* @__PURE__ */ new Set()), l.reactFragments.add(t);
  }
  function Md(l, t) {
    var u = t._eventListeners;
    if (u !== null)
      for (var a = 0; a < u.length; a++) {
        var e = u[a];
        l.addEventListener(
          e.type,
          e.attachedListener,
          ue(e.optionsOrUseCapture)
        );
      }
    l.nodeType !== 3 && (u = t._observers, u !== null && u.forEach(function(n) {
      for (var f = 0, i = 0; i < Yt.length; i++) {
        var c = Yt[i];
        (c.fragmentInstance !== t || c.observer !== n || c.instance !== l) && (Yt[f++] = c);
      }
      Yt.length = f, n.observe(l);
    }), Ad(l, t));
  }
  function Xm(l, t) {
    var u = t._eventListeners;
    if (u !== null)
      for (var a = 0; a < u.length; a++) {
        var e = u[a];
        l.removeEventListener(
          e.type,
          e.attachedListener,
          ue(e.optionsOrUseCapture)
        );
      }
    l.nodeType !== 3 && (u = t._observers, u !== null && u.forEach(function(n) {
      typeof n.rootMargin == "string" ? qm(
        t,
        n,
        l
      ) : n.unobserve(l);
    }), l.reactFragments != null && l.reactFragments.delete(t));
  }
  function oo(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var u = t;
      switch (t = t.nextSibling, u.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          oo(u), hn(u);
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
  function Qm(l, t, u, a) {
    for (; l.nodeType === 1; ) {
      var e = u;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (l.nodeName !== "INPUT" || l.type !== "hidden"))
          break;
      } else if (a) {
        if (!l[ye])
          switch (t) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (n = l.getAttribute("rel"), n === "stylesheet" && l.hasAttribute("data-precedence"))
                break;
              if (n !== e.rel || l.getAttribute("href") !== (e.href == null || e.href === "" ? null : e.href) || l.getAttribute("crossorigin") !== (e.crossOrigin == null ? null : e.crossOrigin) || l.getAttribute("title") !== (e.title == null ? null : e.title))
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (n = l.getAttribute("src"), (n !== (e.src == null ? null : e.src) || l.getAttribute("type") !== (e.type == null ? null : e.type) || l.getAttribute("crossorigin") !== (e.crossOrigin == null ? null : e.crossOrigin)) && n && l.hasAttribute("async") && !l.hasAttribute("itemprop"))
                break;
              return l;
            default:
              return l;
          }
      } else if (t === "input" && l.type === "hidden") {
        var n = e.name == null ? null : "" + e.name;
        if (e.type === "hidden" && l.getAttribute("name") === n)
          return l;
      } else return l;
      if (l = Mt(l.nextSibling), l === null) break;
    }
    return null;
  }
  function Zm(l, t, u) {
    if (t === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !u || (l = Mt(l.nextSibling), l === null)) return null;
    return l;
  }
  function Dd(l, t) {
    for (; l.nodeType !== 8; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !t || (l = Mt(l.nextSibling), l === null)) return null;
    return l;
  }
  function vo(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function ro(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState !== "loading";
  }
  function Vm(l, t) {
    var u = l.ownerDocument;
    if (l.data === "$~") l._reactRetry = t;
    else if (l.data !== "$?" || u.readyState !== "loading")
      t();
    else {
      var a = function() {
        t(), u.removeEventListener("DOMContentLoaded", a);
      };
      u.addEventListener("DOMContentLoaded", a), l._reactRetry = a;
    }
  }
  function Mt(l) {
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
  var so = null;
  function Cd(l) {
    l = l.nextSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === "/$" || u === "/&") {
          if (t === 0)
            return Mt(l.nextSibling);
          t--;
        } else
          u !== "$" && u !== "$!" && u !== "$?" && u !== "$~" && u !== "&" || t++;
      }
      l = l.nextSibling;
    }
    return null;
  }
  function Ud(l) {
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
  function Lm(l, t) {
    function u() {
      a = !0;
    }
    if (l.ownerDocument.activeElement === l) return !0;
    var a = !1;
    try {
      l.ownerDocument.addEventListener("focus", u, !0), (l.focus || HTMLElement.prototype.focus).call(l, t);
    } finally {
      l.ownerDocument.removeEventListener("focus", u, !0);
    }
    return a;
  }
  function Km(l) {
    hd(function() {
      hd(function(t) {
        return l(t);
      });
    });
  }
  function Rd(l, t, u) {
    switch (t = $e(u), l) {
      case "html":
        if (l = t.documentElement, !l) throw Error(d(452));
        return l;
      case "head":
        if (l = t.head, !l) throw Error(d(453));
        return l;
      case "body":
        if (l = t.body, !l) throw Error(d(454));
        return l;
      default:
        throw Error(d(451));
    }
  }
  function Hd(l, t, u) {
    for (var a in u) {
      var e = u[a];
      u.hasOwnProperty(a) && e != null && dl(l, t, a, null, bm, e);
    }
    u.dangerouslySetInnerHTML != null && (l.textContent = ""), l.onclick === Zt && (l.onclick = null), hn(l);
  }
  function yo(l) {
    for (var t = l.attributes; t.length; )
      l.removeAttributeNode(t[0]);
    hn(l);
  }
  var Dt = /* @__PURE__ */ new Map(), pd = /* @__PURE__ */ new Set();
  function Ie(l) {
    if (typeof l.getRootNode == "function") {
      var t = l.getRootNode();
      if (t.nodeType === 9 || t.nodeType === 11) return t;
    }
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  var mu = X.d;
  X.d = {
    f: Jm,
    r: wm,
    D: Wm,
    C: Fm,
    L: $m,
    m: Im,
    X: Pm,
    S: km,
    M: l1
  };
  function Jm() {
    var l = mu.f(), t = bf();
    return l || t;
  }
  function wm(l) {
    var t = Ea(l);
    t !== null && t.tag === 5 && t.type === "form" ? Yv(t) : mu.r(l);
  }
  var ae = typeof document > "u" ? null : document;
  function Bd(l, t, u) {
    var a = ae;
    if (a && typeof t == "string" && t) {
      var e = bt(t);
      e = 'link[rel="' + l + '"][href="' + e + '"]', typeof u == "string" && (e += '[crossorigin="' + u + '"]'), pd.has(e) || (pd.add(e), l = { rel: l, crossOrigin: u, href: t }, a.querySelector(e) === null && (t = a.createElement("link"), Zl(t, "link", l), Hl(t), a.head.appendChild(t)));
    }
  }
  function Wm(l) {
    mu.D(l), Bd("dns-prefetch", l, null);
  }
  function Fm(l, t) {
    mu.C(l, t), Bd("preconnect", l, t);
  }
  function $m(l, t, u) {
    mu.L(l, t, u);
    var a = ae;
    if (a && l && t) {
      var e = 'link[rel="preload"][as="' + bt(t) + '"]';
      t === "image" && u && u.imageSrcSet ? (e += '[imagesrcset="' + bt(
        u.imageSrcSet
      ) + '"]', typeof u.imageSizes == "string" && (e += '[imagesizes="' + bt(
        u.imageSizes
      ) + '"]')) : e += '[href="' + bt(l) + '"]';
      var n = e;
      switch (t) {
        case "style":
          n = ee(l);
          break;
        case "script":
          n = ne(l);
      }
      if (!(Dt.has(n) || (l = w(
        {
          rel: "preload",
          href: t === "image" && u && u.imageSrcSet ? void 0 : l,
          as: t
        },
        u
      ), Dt.set(n, l), a.querySelector(e) !== null || t === "style" && a.querySelector(ke(n)) || t === "script" && a.querySelector(Pe(n))))) {
        var f = a.createElement("link");
        Zl(f, "link", l), t === "style" && (f[mn] = !0, f.onload = f.onerror = function() {
          wo(f);
        }), Hl(f), a.head.appendChild(f);
      }
    }
  }
  function Im(l, t) {
    mu.m(l, t);
    var u = ae;
    if (u && l) {
      var a = t && typeof t.as == "string" ? t.as : "script", e = 'link[rel="modulepreload"][as="' + bt(a) + '"][href="' + bt(l) + '"]', n = e;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = ne(l);
      }
      if (!Dt.has(n) && (l = w({ rel: "modulepreload", href: l }, t), Dt.set(n, l), u.querySelector(e) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (u.querySelector(Pe(n)))
              return;
        }
        a = u.createElement("link"), Zl(a, "link", l), Hl(a), u.head.appendChild(a);
      }
    }
  }
  function km(l, t, u) {
    mu.S(l, t, u);
    var a = ae;
    if (a && l) {
      var e = za(a).hoistableStyles, n = ee(l);
      t = t || "default";
      var f = e.get(n);
      if (!f) {
        var i = { loading: 0, preload: null };
        if (f = a.querySelector(
          ke(n)
        ))
          i.loading = 5;
        else {
          l = w(
            { rel: "stylesheet", href: l, "data-precedence": t },
            u
          ), (u = Dt.get(n)) && mo(l, u);
          var c = f = a.createElement("link");
          Hl(c), Zl(c, "link", l), c._p = new Promise(function(y, S) {
            c.onload = y, c.onerror = S;
          }), c.addEventListener("load", function() {
            i.loading |= 1;
          }), c.addEventListener("error", function() {
            i.loading |= 2;
          }), i.loading |= 4, Mf(f, t, a);
        }
        f = {
          type: "stylesheet",
          instance: f,
          count: 1,
          state: i
        }, e.set(n, f);
      }
    }
  }
  function Pm(l, t) {
    mu.X(l, t);
    var u = ae;
    if (u && l) {
      var a = za(u).hoistableScripts, e = ne(l), n = a.get(e);
      n || (n = u.querySelector(Pe(e)), n || (l = w({ src: l, async: !0 }, t), (t = Dt.get(e)) && ho(l, t), n = u.createElement("script"), Hl(n), Zl(n, "link", l), u.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, a.set(e, n));
    }
  }
  function l1(l, t) {
    mu.M(l, t);
    var u = ae;
    if (u && l) {
      var a = za(u).hoistableScripts, e = ne(l), n = a.get(e);
      n || (n = u.querySelector(Pe(e)), n || (l = w({ src: l, async: !0, type: "module" }, t), (t = Dt.get(e)) && ho(l, t), n = u.createElement("script"), Hl(n), Zl(n, "link", l), u.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, a.set(e, n));
    }
  }
  function Yd(l, t, u, a) {
    var e = (e = gu.current) ? Ie(e) : null;
    if (!e) throw Error(d(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof u.precedence == "string" && typeof u.href == "string" ? (u = ee(u.href), t = za(
          e
        ).hoistableStyles, a = t.get(u), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, t.set(u, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (u.rel === "stylesheet" && typeof u.href == "string" && typeof u.precedence == "string") {
          l = ee(u.href);
          var n = za(
            e
          ).hoistableStyles, f = n.get(l);
          if (f || (e = e.ownerDocument || e, f = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, n.set(l, f), (n = e.querySelector(
            ke(l)
          )) ? n._p || (f.instance = n, f.state.loading = 5) : (n = Dt.get(l), n || (n = {
            rel: "preload",
            as: "style",
            href: u.href,
            crossOrigin: u.crossOrigin,
            integrity: u.integrity,
            media: u.media,
            hrefLang: u.hrefLang,
            referrerPolicy: u.referrerPolicy
          }, Dt.set(l, n)), t1(
            e,
            l,
            n,
            f.state
          ))), t && a === null)
            throw Error(d(528, ""));
          return f;
        }
        if (t && a !== null)
          throw Error(d(529, ""));
        return null;
      case "script":
        return t = u.async, u = u.src, typeof u == "string" && t && typeof t != "function" && typeof t != "symbol" ? (u = ne(u), t = za(
          e
        ).hoistableScripts, a = t.get(u), a || (a = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, t.set(u, a)), a) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(d(444, l));
    }
  }
  function ee(l) {
    return 'href="' + bt(l) + '"';
  }
  function ke(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function qd(l) {
    return w({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function t1(l, t, u, a) {
    if (t = l.querySelector(
      'link[rel="preload"][as="style"][' + t + "]"
    )) {
      if (t[mn] !== !0) {
        a.loading = 1;
        return;
      }
    } else
      t = l.createElement("link"), t[mn] = !0, t.onload = t.onerror = wo.bind(null, t), Zl(t, "link", u), Hl(t), l.head.appendChild(t);
    a.preload = t, t.addEventListener("load", function() {
      return a.loading |= 1;
    }), t.addEventListener("error", function() {
      return a.loading |= 2;
    });
  }
  function ne(l) {
    return '[src="' + bt(l) + '"]';
  }
  function Pe(l) {
    return "script[async]" + l;
  }
  function jd(l, t, u) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var a = l.querySelector(
            'style[data-href~="' + bt(u.href) + '"]'
          );
          if (a)
            return t.instance = a, Hl(a), a;
          var e = w({}, u, {
            "data-href": u.href,
            "data-precedence": u.precedence,
            href: null,
            precedence: null
          });
          return a = (l.ownerDocument || l).createElement(
            "style"
          ), Hl(a), Zl(a, "style", e), Mf(a, u.precedence, l), t.instance = a;
        case "stylesheet":
          e = ee(u.href);
          var n = l.querySelector(
            ke(e)
          );
          if (n)
            return t.state.loading |= 4, t.instance = n, Hl(n), n;
          a = qd(u), (e = Dt.get(e)) && mo(a, e), n = (l.ownerDocument || l).createElement("link"), Hl(n);
          var f = n;
          return f._p = new Promise(function(i, c) {
            f.onload = i, f.onerror = c;
          }), Zl(n, "link", a), t.state.loading |= 4, Mf(n, u.precedence, l), t.instance = n;
        case "script":
          return n = ne(u.src), (e = l.querySelector(
            Pe(n)
          )) ? (t.instance = e, Hl(e), e) : (a = u, (e = Dt.get(n)) && (a = w({}, u), ho(a, e)), l = l.ownerDocument || l, e = l.createElement("script"), Hl(e), Zl(e, "link", a), l.head.appendChild(e), t.instance = e);
        case "void":
          return null;
        default:
          throw Error(d(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, Mf(a, u.precedence, l));
    return t.instance;
  }
  function Mf(l, t, u) {
    for (var a = u.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), e = a.length ? a[a.length - 1] : null, n = e, f = 0; f < a.length; f++) {
      var i = a[f];
      if (i.dataset.precedence === t) n = i;
      else if (n !== e) break;
    }
    n ? n.parentNode.insertBefore(l, n.nextSibling) : (t = u.nodeType === 9 ? u.head : u, t.insertBefore(l, t.firstChild));
  }
  function mo(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.title == null && (l.title = t.title);
  }
  function ho(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.integrity == null && (l.integrity = t.integrity);
  }
  var Df = null;
  function xd(l, t, u) {
    if (Df === null) {
      var a = /* @__PURE__ */ new Map(), e = Df = /* @__PURE__ */ new Map();
      e.set(u, a);
    } else
      e = Df, a = e.get(u), a || (a = /* @__PURE__ */ new Map(), e.set(u, a));
    if (a.has(l)) return a;
    for (a.set(l, null), u = u.getElementsByTagName(l), e = 0; e < u.length; e++) {
      var n = u[e];
      if (!(n[ye] || n[jl] || l === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
        var f = n.getAttribute(t) || "";
        f = l + f;
        var i = a.get(f);
        i ? i.push(n) : a.set(f, [n]);
      }
    }
    return a;
  }
  function go(l, t, u) {
    l = l.ownerDocument || l, l.head.insertBefore(
      u,
      t === "title" ? l.querySelector("head > title") : null
    );
  }
  function u1(l, t, u) {
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
  function Gd(l, t) {
    return l === "img" && t.src != null && t.src !== "" && t.onLoad == null && t.loading !== "lazy";
  }
  function Xd(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function Qd(l) {
    return (l.width || 100) * (l.height || 100) * (typeof devicePixelRatio == "number" ? devicePixelRatio : 1) * 0.25;
  }
  function Zd(l, t) {
    typeof t.decode == "function" && (l.imgCount++, t.complete || (l.imgBytes += Qd(t), l.suspenseyImages.push(t)), l = n1.bind(l), t.decode().then(l, l));
  }
  function a1(l, t, u, a) {
    if (u.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (u.state.loading & 4) === 0) {
      if (u.instance === null) {
        var e = ee(a.href), n = t.querySelector(
          ke(e)
        );
        if (n) {
          t = n._p, t !== null && typeof t == "object" && typeof t.then == "function" && (l.count++, l = ln.bind(l), t.then(l, l)), u.state.loading |= 4, u.instance = n, Hl(n);
          return;
        }
        n = t.ownerDocument || t, a = qd(a), (e = Dt.get(e)) && mo(a, e), n = n.createElement("link"), Hl(n);
        var f = n;
        f._p = new Promise(function(i, c) {
          f.onload = i, f.onerror = c;
        }), Zl(n, "link", a), u.instance = n;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(u, t), (t = u.state.preload) && (u.state.loading & 3) === 0 && (l.count++, u = ln.bind(l), t.addEventListener("load", u), t.addEventListener("error", u));
    }
  }
  var Cf = 0;
  function e1(l, t) {
    return l.stylesheets && l.count === 0 && Rf(l, l.stylesheets), 0 < l.count || 0 < l.imgCount ? function(u) {
      var a = setTimeout(function() {
        if (l.stylesheets && Rf(l, l.stylesheets), l.unsuspend) {
          var n = l.unsuspend;
          l.unsuspend = null, n();
        }
      }, 6e4 + t);
      0 < l.imgBytes && Cf === 0 && (Cf = 62500 * zm());
      var e = setTimeout(
        function() {
          if (l.waitingForImages = !1, l.count === 0 && (l.stylesheets && Rf(l, l.stylesheets), l.unsuspend)) {
            var n = l.unsuspend;
            l.unsuspend = null, n();
          }
        },
        (l.imgBytes > Cf ? 50 : 800) + t
      );
      return l.unsuspend = u, function() {
        l.unsuspend = null, clearTimeout(a), clearTimeout(e);
      };
    } : null;
  }
  function Vd(l) {
    if (l.count === 0 && (l.imgCount === 0 || !l.waitingForImages)) {
      if (l.stylesheets) Rf(l, l.stylesheets);
      else if (l.unsuspend) {
        var t = l.unsuspend;
        l.unsuspend = null, t();
      }
    }
  }
  function ln() {
    this.count--, Vd(this);
  }
  function n1() {
    this.imgCount--, Vd(this);
  }
  var Uf = null;
  function Rf(l, t) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, Uf = /* @__PURE__ */ new Map(), t.forEach(f1, l), Uf = null, ln.call(l));
  }
  function f1(l, t) {
    if (!(t.state.loading & 4)) {
      var u = Uf.get(l);
      if (u) var a = u.get(null);
      else {
        u = /* @__PURE__ */ new Map(), Uf.set(l, u);
        for (var e = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), n = 0; n < e.length; n++) {
          var f = e[n];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") && (u.set(f.dataset.precedence, f), a = f);
        }
        a && u.set(null, a);
      }
      e = t.instance, f = e.getAttribute("data-precedence"), n = u.get(f) || a, n === a && u.set(null, e), u.set(f, e), this.count++, a = ln.bind(this), e.addEventListener("load", a), e.addEventListener("error", a), n ? n.parentNode.insertBefore(e, n.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(e, l.firstChild)), t.state.loading |= 4;
    }
  }
  var fe = {
    $$typeof: Rl,
    Provider: null,
    Consumer: null,
    _currentValue: lu,
    _currentValue2: lu,
    _threadCount: 0
  };
  function i1(l, t, u, a, e, n, f, i, c) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = $f(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = $f(0), this.hiddenUpdates = $f(null), this.identifierPrefix = a, this.onUncaughtError = e, this.onCaughtError = n, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = c, this.transitionTypes = null, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Ld(l, t, u, a, e, n, f, i, c, y, S, E) {
    return l = new i1(
      l,
      t,
      u,
      f,
      c,
      y,
      S,
      E,
      i
    ), t = 1, n === !0 && (t |= 24), n = kl(3, null, null, t), l.current = n, n.stateNode = l, t = Ri(), t.refCount++, l.pooledCache = t, t.refCount++, n.memoizedState = {
      element: a,
      isDehydrated: u,
      cache: t
    }, Yi(n), l;
  }
  function Kd(l) {
    return l ? (l = Ha, l) : Ha;
  }
  function Jd(l, t, u, a, e, n) {
    e = Kd(e), a.context === null ? a.context = e : a.pendingContext = e, a = Du(t), a.payload = { element: u }, n = n === void 0 ? null : n, n !== null && (a.callback = n), u = Cu(l, a, t), u !== null && (ut(u, l, t), Re(u, l, t));
  }
  function wd(l, t) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var u = l.retryLane;
      l.retryLane = u !== 0 && u < t ? u : t;
    }
  }
  function So(l, t) {
    wd(l, t), (l = l.alternate) && wd(l, t);
  }
  function Wd(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = la(l, 67108864);
      t !== null && ut(t, l, 67108864), So(l, 67108864);
    }
  }
  function Fd(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = mt();
      t = If(t);
      var u = la(l, t);
      u !== null && ut(u, l, t), So(l, t);
    }
  }
  var ie = !0;
  function c1(l, t, u, a) {
    var e = U.T;
    U.T = null;
    var n = X.p;
    try {
      X.p = 2, To(l, t, u, a);
    } finally {
      X.p = n, U.T = e;
    }
  }
  function o1(l, t, u, a) {
    var e = U.T;
    U.T = null;
    var n = X.p;
    try {
      X.p = 8, To(l, t, u, a);
    } finally {
      X.p = n, U.T = e;
    }
  }
  function To(l, t, u, a) {
    if (ie) {
      var e = bo(a);
      if (e === null)
        Pc(
          l,
          t,
          a,
          Hf,
          u
        ), Id(l, a);
      else if (r1(
        e,
        l,
        t,
        u,
        a
      ))
        a.stopPropagation();
      else if (Id(l, a), t & 4 && -1 < v1.indexOf(l)) {
        for (; e !== null; ) {
          var n = Ea(e);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (n = n.stateNode, n.current.memoizedState.isDehydrated) {
                  var f = Fu(n.pendingLanes);
                  if (f !== 0) {
                    var i = n;
                    for (i.pendingLanes |= 2, i.entangledLanes |= 2; f; ) {
                      var c = 1 << 31 - ct(f);
                      i.entanglements[1] |= c, f &= ~c;
                    }
                    kt(n), (fl & 6) === 0 && (gf = ft() + 500, we(0));
                  }
                }
                break;
              case 31:
              case 13:
                i = la(n, 2), i !== null && ut(i, n, 2), bf(), So(n, 2);
            }
          if (n = bo(a), n === null && Pc(
            l,
            t,
            a,
            Hf,
            u
          ), n === e) break;
          e = n;
        }
        e !== null && a.stopPropagation();
      } else
        Pc(
          l,
          t,
          a,
          null,
          u
        );
    }
  }
  function bo(l) {
    return l = ei(l), Eo(l);
  }
  var Hf = null;
  function Eo(l) {
    if (Hf = null, l = $u(l), l !== null) {
      var t = Z(l);
      if (t === null) l = null;
      else {
        var u = t.tag;
        if (u === 13) {
          if (l = G(t), l !== null) return l;
          l = null;
        } else if (u === 31) {
          if (l = al(t), l !== null) return l;
          l = null;
        } else if (u === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return Hf = l, null;
  }
  function $d(l) {
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
        switch (zs()) {
          case Yo:
            return 2;
          case qo:
            return 8;
          case vn:
          case _s:
            return 32;
          case jo:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var zo = !1, Qu = null, Zu = null, Vu = null, tn = /* @__PURE__ */ new Map(), un = /* @__PURE__ */ new Map(), Lu = [], v1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Id(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        Qu = null;
        break;
      case "dragenter":
      case "dragleave":
        Zu = null;
        break;
      case "mouseover":
      case "mouseout":
        Vu = null;
        break;
      case "pointerover":
      case "pointerout":
        tn.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        un.delete(t.pointerId);
    }
  }
  function an(l, t, u, a, e, n) {
    return l === null || l.nativeEvent !== n ? (l = {
      blockedOn: t,
      domEventName: u,
      eventSystemFlags: a,
      nativeEvent: n,
      targetContainers: [e]
    }, t !== null && (t = Ea(t), t !== null && Wd(t)), l) : (l.eventSystemFlags |= a, t = l.targetContainers, e !== null && t.indexOf(e) === -1 && t.push(e), l);
  }
  function r1(l, t, u, a, e) {
    switch (t) {
      case "focusin":
        return Qu = an(
          Qu,
          l,
          t,
          u,
          a,
          e
        ), !0;
      case "dragenter":
        return Zu = an(
          Zu,
          l,
          t,
          u,
          a,
          e
        ), !0;
      case "mouseover":
        return Vu = an(
          Vu,
          l,
          t,
          u,
          a,
          e
        ), !0;
      case "pointerover":
        var n = e.pointerId;
        return tn.set(
          n,
          an(
            tn.get(n) || null,
            l,
            t,
            u,
            a,
            e
          )
        ), !0;
      case "gotpointercapture":
        return n = e.pointerId, un.set(
          n,
          an(
            un.get(n) || null,
            l,
            t,
            u,
            a,
            e
          )
        ), !0;
    }
    return !1;
  }
  function kd(l) {
    var t = $u(l.target);
    if (t !== null) {
      var u = Z(t);
      if (u !== null) {
        if (t = u.tag, t === 13) {
          if (t = G(u), t !== null) {
            l.blockedOn = t, Lo(l.priority, function() {
              Fd(u);
            });
            return;
          }
        } else if (t === 31) {
          if (t = al(u), t !== null) {
            l.blockedOn = t, Lo(l.priority, function() {
              Fd(u);
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
  function pf(l) {
    if (l.blockedOn !== null) return !1;
    for (var t = l.targetContainers; 0 < t.length; ) {
      var u = bo(l.nativeEvent);
      if (u === null) {
        u = l.nativeEvent;
        var a = new u.constructor(
          u.type,
          u
        );
        ai = a, u.target.dispatchEvent(a), ai = null;
      } else
        return t = Ea(u), t !== null && Wd(t), l.blockedOn = u, !1;
      t.shift();
    }
    return !0;
  }
  function Pd(l, t, u) {
    pf(l) && u.delete(t);
  }
  function d1() {
    zo = !1, Qu !== null && pf(Qu) && (Qu = null), Zu !== null && pf(Zu) && (Zu = null), Vu !== null && pf(Vu) && (Vu = null), tn.forEach(Pd), un.forEach(Pd);
  }
  function Bf(l, t) {
    l.blockedOn === t && (l.blockedOn = null, zo || (zo = !0, h.unstable_scheduleCallback(
      h.unstable_NormalPriority,
      d1
    )));
  }
  var Yf = null;
  function ls(l) {
    Yf !== l && (Yf = l, h.unstable_scheduleCallback(
      h.unstable_NormalPriority,
      function() {
        Yf === l && (Yf = null);
        for (var t = 0; t < l.length; t += 3) {
          var u = l[t], a = l[t + 1], e = l[t + 2];
          if (typeof a != "function") {
            if (Eo(a || u) === null)
              continue;
            break;
          }
          var n = Ea(u);
          n !== null && (l.splice(t, 3), t -= 3, uc(
            n,
            {
              pending: !0,
              data: e,
              method: u.method,
              action: a
            },
            a,
            e
          ));
        }
      }
    ));
  }
  function ce(l) {
    function t(c) {
      return Bf(c, l);
    }
    Qu !== null && Bf(Qu, l), Zu !== null && Bf(Zu, l), Vu !== null && Bf(Vu, l), tn.forEach(t), un.forEach(t);
    for (var u = 0; u < Lu.length; u++) {
      var a = Lu[u];
      a.blockedOn === l && (a.blockedOn = null);
    }
    for (; 0 < Lu.length && (u = Lu[0], u.blockedOn === null); )
      kd(u), u.blockedOn === null && Lu.shift();
    if (u = (l.ownerDocument || l).$$reactFormReplay, u != null)
      for (a = 0; a < u.length; a += 3) {
        var e = u[a], n = u[a + 1], f = e[Il] || null;
        if (typeof n == "function")
          f || ls(u);
        else if (f) {
          var i = null;
          if (n && n.hasAttribute("formAction")) {
            if (e = n, f = n[Il] || null)
              i = f.formAction;
            else if (Eo(e) !== null) continue;
          } else i = f.action;
          typeof i == "function" ? u[a + 1] = i : (u.splice(a, 3), a -= 3), ls(u);
        }
      }
  }
  function ts() {
    function l(n) {
      n.canIntercept && n.info === "react-transition" && n.intercept({
        handler: function() {
          return new Promise(function(f) {
            return e = f;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function t() {
      e !== null && (e(), e = null), a || setTimeout(u, 20);
    }
    function u() {
      if (!a && !navigation.transition) {
        var n = navigation.currentEntry;
        n && n.url != null && navigation.navigate(n.url, {
          state: n.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var a = !1, e = null;
      return navigation.addEventListener("navigate", l), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(u, 100), function() {
        a = !0, navigation.removeEventListener("navigate", l), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), e !== null && (e(), e = null);
      };
    }
  }
  function _o(l) {
    this._internalRoot = l;
  }
  qf.prototype.render = _o.prototype.render = function(l) {
    var t = this._internalRoot;
    if (t === null) throw Error(d(409));
    var u = t.current, a = mt();
    Jd(u, a, l, t, null, null);
  }, qf.prototype.unmount = _o.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var t = l.containerInfo;
      Jd(l.current, 2, null, l, null, null), bf(), t[ba] = null;
    }
  };
  function qf(l) {
    this._internalRoot = l;
  }
  qf.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var t = Vo();
      l = { blockedOn: null, target: l, priority: t };
      for (var u = 0; u < Lu.length && t !== 0 && t < Lu[u].priority; u++) ;
      Lu.splice(u, 0, l), u === 0 && kd(l);
    }
  };
  var us = z.version;
  if (us !== "19.3.0")
    throw Error(
      d(
        527,
        us,
        "19.3.0"
      )
    );
  X.findDOMNode = function(l) {
    var t = l._reactInternals;
    if (t === void 0)
      throw typeof l.render == "function" ? Error(d(188)) : (l = Object.keys(l).join(","), Error(d(268, l)));
    return l = Tl(t), l = l !== null ? R(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var s1 = {
    bundleType: 0,
    version: "19.3.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: U,
    reconcilerVersion: "19.3.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var jf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!jf.isDisabled && jf.supportsFiber)
      try {
        re = jf.inject(
          s1
        ), it = jf;
      } catch {
      }
  }
  return nn.createRoot = function(l, t) {
    if (!Y(l)) throw Error(d(299));
    var u = !1, a = "", e = Kv, n = Jv, f = wv;
    return t != null && (t.unstable_strictMode === !0 && (u = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (e = t.onUncaughtError), t.onCaughtError !== void 0 && (n = t.onCaughtError), t.onRecoverableError !== void 0 && (f = t.onRecoverableError)), t = Ld(
      l,
      1,
      !1,
      null,
      null,
      u,
      a,
      null,
      e,
      n,
      f,
      ts
    ), l[ba] = t.current, kc(l), new _o(t);
  }, nn.hydrateRoot = function(l, t, u) {
    if (!Y(l)) throw Error(d(299));
    var a = !1, e = "", n = Kv, f = Jv, i = wv, c = null;
    return u != null && (u.unstable_strictMode === !0 && (a = !0), u.identifierPrefix !== void 0 && (e = u.identifierPrefix), u.onUncaughtError !== void 0 && (n = u.onUncaughtError), u.onCaughtError !== void 0 && (f = u.onCaughtError), u.onRecoverableError !== void 0 && (i = u.onRecoverableError), u.formState !== void 0 && (c = u.formState)), t = Ld(
      l,
      1,
      !0,
      t,
      u ?? null,
      a,
      e,
      c,
      n,
      f,
      i,
      ts
    ), t.context = Kd(null), u = t.current, a = mt(), a = If(a), e = Du(a), e.callback = null, Cu(u, e, a), u = a, t.current.lanes = u, se(t, u), kt(t), l[ba] = t.current, kc(l), new qf(t);
  }, nn.version = "19.3.0", nn;
}
var ds;
function N1() {
  if (ds) return Ao.exports;
  ds = 1;
  function h() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(h);
      } catch (z) {
        console.error(z);
      }
  }
  return h(), Ao.exports = O1(), Ao.exports;
}
var A1 = N1();
function M1(h) {
  return h && typeof h == "object" ? h : typeof window > "u" ? null : window;
}
function ss({
  snapshot: h,
  ownSeat: z = null,
  replayIndex: O = null,
  flipVertical: d = !1
} = {}) {
  const Y = h && typeof h == "object" && !Array.isArray(h) ? { ...h } : {};
  return {
    ...Y,
    boardCode: String(Y.boardCode || ""),
    version: Number.isFinite(Number(Y.version)) ? Number(Y.version) : 0,
    ownSeat: z,
    replayIndex: O,
    flipVertical: !!d
  };
}
function D1({
  node: h,
  snapshot: z,
  ownSeat: O,
  replayIndex: d,
  flipVertical: Y,
  onMoveClick: Z,
  elmRuntime: G
} = {}) {
  const J = M1(G)?.Elm?.BoardIsland?.init;
  if (typeof J != "function" || !h)
    return {
      app: null,
      sendSnapshotUpdate: () => {
      },
      cleanup: () => {
      }
    };
  const Tl = ss({
    snapshot: z,
    ownSeat: O,
    replayIndex: d,
    flipVertical: Y
  }), R = J({ node: h, flags: Tl }), T = R?.ports?.boardMoveClicked, C = R?.ports?.boardSnapshot, Ol = (il) => {
    typeof Z == "function" && Z(il);
  };
  return typeof T?.subscribe == "function" && T.subscribe(Ol), { app: R, sendSnapshotUpdate: (il) => {
    typeof C?.send == "function" && C.send(ss(il));
  }, cleanup: () => {
    typeof T?.unsubscribe == "function" && T.unsubscribe(Ol), typeof R?.unmount == "function" && R.unmount();
  } };
}
function C1({
  snapshot: h,
  ownSeat: z,
  replayIndex: O,
  flipVertical: d,
  onMoveClick: Y
}) {
  const Z = qt.useRef(null), G = qt.useRef(null), al = qt.useRef(Y);
  al.current = Y;
  const J = qt.useMemo(
    () => ({ snapshot: h, ownSeat: z, replayIndex: O, flipVertical: d }),
    [h, z, O, d]
  );
  return qt.useEffect(() => (G.current = D1({
    node: Z.current,
    ...J,
    onMoveClick: (Tl) => al.current?.(Tl)
  }), () => {
    G.current?.cleanup?.(), G.current = null;
  }), []), qt.useEffect(() => {
    G.current?.sendSnapshotUpdate?.(J);
  }, [J]), /* @__PURE__ */ k.jsx("div", { ref: Z, "data-testid": "elm-board-island-host" });
}
function U1(h = globalThis.window?.location || globalThis.location) {
  const z = h?.protocol === "https:" ? "wss:" : "ws:", O = h?.host || "localhost";
  return `${z}//${O}/ws`;
}
function R1({
  roomId: h,
  clientId: z,
  onMessage: O,
  onStatus: d,
  WebSocketImpl: Y = globalThis.window?.WebSocket || globalThis.WebSocket,
  socketUrl: Z = U1()
} = {}) {
  if (typeof Y != "function")
    throw new Error("WebSocket unavailable.");
  const G = new Y(Z);
  return G.onopen = () => {
    d?.("connected"), G.send(
      JSON.stringify({
        type: "watch",
        roomId: String(h || "").trim(),
        clientId: String(z || "").trim()
      })
    );
  }, G.onmessage = (al) => {
    try {
      O?.(JSON.parse(al.data));
    } catch {
      O?.({ type: "error", error: "malformed websocket message" });
    }
  }, G.onerror = () => {
    d?.("error");
  }, G.onclose = () => {
    d?.("disconnected");
  }, {
    socket: G,
    send(al) {
      G.send(JSON.stringify(al));
    },
    close() {
      G.close?.();
    }
  };
}
const ys = "traceballElmClientId", Xf = "traceballPlayerName", H1 = "traceballOnlineMoveTimer";
function Qf() {
  return globalThis.window?.localStorage || globalThis.localStorage;
}
function p1(h = Math.random) {
  return h().toString(36).slice(2, 12);
}
function B1({
  storage: h = Qf(),
  random: z = Math.random
} = {}) {
  const O = h?.getItem?.(ys);
  if (O) return O;
  const d = `traceball-elm-${p1(z)}`;
  return h?.setItem?.(ys, d), d;
}
function gs(h = Math.random) {
  const z = (O) => O[Math.floor(h() * O.length)];
  return `${z(["Neon", "Turbo", "Cosmic", "Lucky", "Pixel", "Rocket", "Thunder"])} ${z(["Striker", "Falcon", "Comet", "Phantom", "Kicker", "Ace", "Wizard"])}`;
}
function Ss(h, z = "") {
  return String(h || "").replace(/\s+/g, " ").trim().slice(0, 24) || z;
}
function Y1({
  storage: h = Qf(),
  randomName: z = gs
} = {}) {
  const O = String(h?.getItem?.(Xf) || ""), d = Ss(O, "");
  if (d && d !== "Elm Player")
    return h?.setItem?.(Xf, d), d;
  const Y = z();
  return h?.setItem?.(Xf, Y), Y;
}
function q1(h, { storage: z = Qf(), randomName: O = gs } = {}) {
  const d = Ss(h, O());
  return z?.setItem?.(Xf, d), d;
}
function j1(h, z = 15) {
  const O = Number(h);
  return Number.isFinite(O) && O >= 0 ? O : z;
}
function x1({
  storage: h = Qf(),
  fallback: z = 15
} = {}) {
  return j1(
    h?.getItem?.(H1),
    z
  );
}
function G1({
  clientId: h = "",
  playerName: z = "",
  connectionStatus: O = "idle",
  currentBoardCode: d = "",
  boardState: Y = null,
  boardList: Z = [],
  mainTab: G = "home",
  mode: al = "online",
  toast: J = null,
  onlineMoveTimer: Tl = 15,
  localMoveTimer: R = 15,
  historyPanelOpen: T = !1,
  rulesPanelOpen: C = !1
} = {}) {
  return {
    clientId: h,
    playerName: z,
    connectionStatus: O,
    currentBoardCode: d,
    boardState: Y,
    boardList: Z,
    mainTab: G,
    mode: al,
    toast: J,
    onlineSetup: {
      moveTimeLimitSeconds: Tl
    },
    localSetup: {
      moveTimeLimitSeconds: R
    },
    historyPanelOpen: T,
    rulesPanelOpen: C
  };
}
function X1(h, z, O) {
  if (!O || typeof O != "object") return !1;
  const d = String(h || "").trim(), Y = String(O.boardCode || "").trim();
  if (d && Y && d !== Y) return !1;
  if (!z || typeof z != "object") return !0;
  const Z = String(z.boardCode || "").trim();
  if (!Z || Z !== Y) return !0;
  const G = Number(z.version), al = Number(O.version);
  return Number.isFinite(G) ? Number.isFinite(al) ? al > G : !1 : !0;
}
function Q1(h, z) {
  if (!z || typeof z != "object") return h;
  switch (z.type) {
    case "hydrateShell":
      return { ...h, ...z.payload };
    case "setPlayerName":
      return { ...h, playerName: String(z.playerName || "") };
    case "setConnectionStatus":
      return { ...h, connectionStatus: String(z.status || "idle") };
    case "setCurrentBoardCode":
      return { ...h, currentBoardCode: String(z.boardCode || "") };
    case "receiveBoardState":
      return X1(
        h.currentBoardCode,
        h.boardState,
        z.boardState
      ) ? {
        ...h,
        boardState: z.boardState,
        currentBoardCode: String(
          z.boardState?.boardCode || h.currentBoardCode || ""
        )
      } : h;
    case "receiveBoardList":
      return {
        ...h,
        boardList: Array.isArray(z.boardList) ? z.boardList : Array.isArray(z.boardList?.rooms) ? z.boardList.rooms : []
      };
    case "setMainTab":
      return { ...h, mainTab: String(z.mainTab || h.mainTab) };
    case "setMode":
      return { ...h, mode: String(z.mode || h.mode) };
    case "setToast":
      return { ...h, toast: z.toast ?? null };
    case "setHistoryPanelOpen":
      return { ...h, historyPanelOpen: !!z.open };
    case "setRulesPanelOpen":
      return { ...h, rulesPanelOpen: !!z.open };
    case "setOnlineMoveTimer":
      return {
        ...h,
        onlineSetup: {
          ...h.onlineSetup,
          moveTimeLimitSeconds: Number(z.seconds)
        }
      };
    case "setLocalMoveTimer":
      return {
        ...h,
        localSetup: {
          ...h.localSetup,
          moveTimeLimitSeconds: Number(z.seconds)
        }
      };
    default:
      return h;
  }
}
const Z1 = {
  minHeight: "100vh",
  display: "grid",
  placeItems: "center",
  padding: "32px 20px",
  background: "radial-gradient(circle at top, rgba(10, 143, 40, 0.18), transparent 38%), linear-gradient(180deg, #f6fbf4 0%, #e4f0e2 100%)",
  color: "#102a1a"
}, V1 = {
  width: "min(720px, 100%)",
  borderRadius: "24px",
  padding: "28px",
  background: "rgba(255, 255, 255, 0.92)",
  boxShadow: "0 24px 70px rgba(16, 42, 26, 0.16)",
  border: "1px solid rgba(16, 42, 26, 0.08)"
}, L1 = {
  margin: 0,
  fontSize: "0.85rem",
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: "#0a8f28",
  fontWeight: 700
}, K1 = {
  margin: "10px 0 12px",
  fontSize: "clamp(2rem, 4vw, 3.25rem)",
  lineHeight: 1.05
}, J1 = {
  margin: 0,
  fontSize: "1.05rem",
  lineHeight: 1.6,
  color: "#33513f"
}, w1 = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
  gap: "14px",
  marginTop: "24px"
}, xf = {
  padding: "16px",
  borderRadius: "18px",
  background: "#f7fbf7",
  border: "1px solid rgba(16, 42, 26, 0.08)"
}, oe = {
  margin: 0,
  fontSize: "0.78rem",
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  color: "#567062"
}, Gf = {
  margin: "8px 0 0",
  fontSize: "1rem",
  fontWeight: 700,
  wordBreak: "break-word"
}, W1 = {
  width: "100%",
  marginTop: "10px",
  padding: "12px 14px",
  borderRadius: "12px",
  border: "1px solid rgba(16, 42, 26, 0.14)",
  fontSize: "1rem",
  boxSizing: "border-box"
}, F1 = {
  display: "flex",
  gap: "10px",
  marginTop: "18px",
  flexWrap: "wrap"
}, ms = (h) => ({
  border: "1px solid rgba(16, 42, 26, 0.12)",
  borderRadius: "999px",
  padding: "8px 14px",
  background: h ? "#102a1a" : "#f7fbf7",
  color: h ? "#f6fbf4" : "#102a1a",
  fontWeight: 700,
  cursor: "pointer"
}), Uo = {
  marginTop: "18px",
  padding: "16px",
  borderRadius: "16px",
  background: "#eef7f0",
  border: "1px dashed rgba(16, 42, 26, 0.18)",
  color: "#153124",
  fontWeight: 600
}, $1 = {
  marginTop: "24px",
  padding: "16px 18px",
  borderRadius: "18px",
  background: "#102a1a",
  color: "#f6fbf4",
  lineHeight: 1.55
}, I1 = {
  display: "inline-block",
  width: "10px",
  height: "10px",
  borderRadius: "999px",
  marginRight: "8px",
  background: "#9aa79e"
};
function Ho(h) {
  return String(h || "").trim();
}
function k1(h) {
  const z = Number(h);
  return Number.isFinite(z) ? z : 0;
}
function P1(h) {
  if (!h || typeof h != "object" || String(h.type || "") !== "state") return null;
  const z = Ho(h.boardCode || h.roomId), O = h.board && typeof h.board == "object", d = h.game && typeof h.game == "object";
  return !z || !O && !d ? null : {
    boardCode: z,
    version: k1(h.version),
    ...O ? { board: h.board } : {},
    ...d ? { game: h.game } : {}
  };
}
function lh({
  currentBoardCode: h,
  clientId: z,
  dispatch: O,
  onOwnSeat: d,
  connect: Y = R1
}) {
  const Z = Ho(h);
  return !Z || typeof Y != "function" ? null : Y({
    roomId: Z,
    clientId: String(z || ""),
    onStatus(G) {
      O?.({ type: "setConnectionStatus", status: G });
    },
    onMessage(G) {
      if (G?.type === "joined") {
        const J = String(G.playerId || "").trim();
        (J === "p1" || J === "p2") && d?.(J);
        return;
      }
      if (G?.type === "error" && typeof G.error == "string") {
        O?.({ type: "setToast", toast: G.error });
        return;
      }
      const al = P1(G);
      al && O?.({ type: "receiveBoardState", boardState: al });
    }
  });
}
function th(h) {
  const z = h?.point;
  if (!z || typeof z != "object") return null;
  const O = Number(z.x), d = Number(z.y);
  return !Number.isFinite(O) || !Number.isFinite(d) ? null : { x: O, y: d };
}
function uh(h) {
  return typeof h?.send == "function" && Number(h?.socket?.readyState) === 1;
}
function ah({
  payload: h,
  ownSeat: z,
  connection: O,
  dispatch: d
}) {
  if (!uh(O)) {
    d?.({
      type: "setToast",
      toast: "Connection unavailable. Reconnect to move."
    });
    return;
  }
  const Y = String(z || "").trim();
  if (Y !== "p1" && Y !== "p2") {
    d?.({ type: "setToast", toast: "Join a seat to move." });
    return;
  }
  const Z = th(h);
  if (!Z) {
    d?.({ type: "setToast", toast: "Invalid move target." });
    return;
  }
  try {
    O.send({ type: "move", to: Z });
  } catch {
    d?.({
      type: "setToast",
      toast: "Move could not be sent. Reconnect and try again."
    });
  }
}
function eh({ initialState: h }) {
  const [z, O] = qt.useReducer(Q1, h), [d, Y] = qt.useState(null), Z = qt.useRef(null), G = h?.demoBoardSnapshot || null, al = z.boardState || G, J = String(z.connectionStatus || "idle");
  qt.useEffect(() => {
    const T = Ho(z.currentBoardCode);
    if (!T) {
      Z.current = null, Y(null), O({ type: "setConnectionStatus", status: "idle" });
      return;
    }
    let C = null;
    try {
      Y(null), C = lh({
        currentBoardCode: T,
        clientId: z.clientId,
        dispatch: O,
        onOwnSeat: Y
      }), Z.current = C;
    } catch {
      Z.current = null, O({ type: "setConnectionStatus", status: "error" });
      return;
    }
    return () => {
      Z.current = null, C?.close?.();
    };
  }, [z.currentBoardCode, z.clientId]);
  const Tl = z.clientId && z.clientId.length > 6 ? `...${z.clientId.slice(-6)}` : "identity ready", R = (T) => {
    const C = T.target.value;
    O({ type: "setPlayerName", playerName: C }), q1(C);
  };
  return /* @__PURE__ */ k.jsx("main", { style: Z1, children: /* @__PURE__ */ k.jsxs("section", { style: V1, children: [
    /* @__PURE__ */ k.jsx("p", { style: L1, children: "React product shell" }),
    /* @__PURE__ */ k.jsx("h1", { style: K1, children: "Traceball Arena" }),
    /* @__PURE__ */ k.jsx("p", { style: J1, children: "The React shell owns product state only. The Elm board island is not mounted yet, and online authority remains on the server." }),
    /* @__PURE__ */ k.jsxs("div", { style: w1, children: [
      /* @__PURE__ */ k.jsxs("article", { style: xf, children: [
        /* @__PURE__ */ k.jsx("p", { style: oe, children: "Player Name" }),
        /* @__PURE__ */ k.jsx(
          "input",
          {
            "aria-label": "Player name",
            value: z.playerName || "",
            onChange: R,
            style: W1,
            placeholder: "Enter your name"
          }
        )
      ] }),
      /* @__PURE__ */ k.jsxs("article", { style: xf, children: [
        /* @__PURE__ */ k.jsx("p", { style: oe, children: "Client Identity" }),
        /* @__PURE__ */ k.jsx("p", { style: Gf, children: Tl })
      ] }),
      /* @__PURE__ */ k.jsxs("article", { style: xf, children: [
        /* @__PURE__ */ k.jsx("p", { style: oe, children: "Online Move Timer" }),
        /* @__PURE__ */ k.jsxs("p", { style: Gf, children: [
          z.onlineSetup.moveTimeLimitSeconds,
          "s"
        ] })
      ] }),
      /* @__PURE__ */ k.jsxs("article", { style: xf, children: [
        /* @__PURE__ */ k.jsx("p", { style: oe, children: "Connection" }),
        /* @__PURE__ */ k.jsxs("p", { style: Gf, children: [
          /* @__PURE__ */ k.jsx(
            "span",
            {
              style: {
                ...I1,
                background: J === "connected" ? "#0a8f28" : J === "error" ? "#d64545" : "#9aa79e"
              }
            }
          ),
          J
        ] })
      ] })
    ] }),
    /* @__PURE__ */ k.jsxs("div", { style: { marginTop: "20px" }, children: [
      /* @__PURE__ */ k.jsx("p", { style: oe, children: "Selected Mode" }),
      /* @__PURE__ */ k.jsxs("div", { style: F1, children: [
        /* @__PURE__ */ k.jsx(
          "button",
          {
            type: "button",
            style: ms(z.mode === "online"),
            onClick: () => O({ type: "setMode", mode: "online" }),
            children: "Online"
          }
        ),
        /* @__PURE__ */ k.jsx(
          "button",
          {
            type: "button",
            style: ms(z.mode === "local"),
            onClick: () => O({ type: "setMode", mode: "local" }),
            children: "Local"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ k.jsxs("div", { style: { marginTop: "20px" }, children: [
      /* @__PURE__ */ k.jsx("p", { style: oe, children: "Active Tab" }),
      /* @__PURE__ */ k.jsx("p", { style: Gf, children: z.mainTab || "home" })
    ] }),
    al ? /* @__PURE__ */ k.jsx("div", { style: Uo, children: /* @__PURE__ */ k.jsx(
      C1,
      {
        snapshot: al,
        ownSeat: d,
        replayIndex: null,
        flipVertical: !1,
        onMoveClick: (T) => {
          console.info("Board move click", T), ah({
            payload: T,
            ownSeat: d,
            connection: Z.current,
            dispatch: O
          });
        }
      }
    ) }) : /* @__PURE__ */ k.jsx("div", { style: Uo, children: "Board island not mounted yet" }),
    z.toast ? /* @__PURE__ */ k.jsx("div", { style: { ...Uo, marginTop: "10px" }, children: z.toast }) : null,
    /* @__PURE__ */ k.jsx("div", { style: $1, children: "Elm remains the board and replay correctness surface. The server remains authoritative for seats, timers, pause/resume, winners, and online move validation." })
  ] }) });
}
const hs = document.getElementById("react-root");
if (hs) {
  const h = G1({
    clientId: B1(),
    playerName: Y1(),
    onlineMoveTimer: x1()
  });
  A1.createRoot(hs).render(
    /* @__PURE__ */ k.jsx(T1.StrictMode, { children: /* @__PURE__ */ k.jsx(eh, { initialState: h }) })
  );
}
