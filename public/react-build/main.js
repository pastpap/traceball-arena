function N1(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var $o = { exports: {} }, Tu = {};
var H0;
function O1() {
  if (H0) return Tu;
  H0 = 1;
  var i = /* @__PURE__ */ Symbol.for("react.transitional.element"), f = /* @__PURE__ */ Symbol.for("react.fragment");
  function s(r, b, A) {
    var C = null;
    if (A !== void 0 && (C = "" + A), b.key !== void 0 && (C = "" + b.key), "key" in b) {
      A = {};
      for (var _ in b)
        _ !== "key" && (A[_] = b[_]);
    } else A = b;
    return b = A.ref, {
      $$typeof: i,
      type: r,
      key: C,
      ref: b !== void 0 ? b : null,
      props: A
    };
  }
  return Tu.Fragment = f, Tu.jsx = s, Tu.jsxs = s, Tu;
}
var Y0;
function _1() {
  return Y0 || (Y0 = 1, $o.exports = O1()), $o.exports;
}
var m = _1(), Wo = { exports: {} }, J = {};
var L0;
function C1() {
  if (L0) return J;
  L0 = 1;
  var i = /* @__PURE__ */ Symbol.for("react.transitional.element"), f = /* @__PURE__ */ Symbol.for("react.portal"), s = /* @__PURE__ */ Symbol.for("react.fragment"), r = /* @__PURE__ */ Symbol.for("react.strict_mode"), b = /* @__PURE__ */ Symbol.for("react.profiler"), A = /* @__PURE__ */ Symbol.for("react.consumer"), C = /* @__PURE__ */ Symbol.for("react.context"), _ = /* @__PURE__ */ Symbol.for("react.forward_ref"), j = /* @__PURE__ */ Symbol.for("react.suspense"), $ = /* @__PURE__ */ Symbol.for("react.memo"), D = /* @__PURE__ */ Symbol.for("react.lazy"), T = /* @__PURE__ */ Symbol.for("react.activity"), B = /* @__PURE__ */ Symbol.for("react.view_transition"), et = Symbol.iterator;
  function Ot(h) {
    return h === null || typeof h != "object" ? null : (h = et && h[et] || h["@@iterator"], typeof h == "function" ? h : null);
  }
  var At = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, P = Object.assign, Wt = {};
  function w(h, O, L) {
    this.props = h, this.context = O, this.refs = Wt, this.updater = L || At;
  }
  w.prototype.isReactComponent = {}, w.prototype.setState = function(h, O) {
    if (typeof h != "object" && typeof h != "function" && h != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, h, O, "setState");
  }, w.prototype.forceUpdate = function(h) {
    this.updater.enqueueForceUpdate(this, h, "forceUpdate");
  };
  function Tt() {
  }
  Tt.prototype = w.prototype;
  function zl(h, O, L) {
    this.props = h, this.context = O, this.refs = Wt, this.updater = L || At;
  }
  var Nl = zl.prototype = new Tt();
  Nl.constructor = zl, P(Nl, w.prototype), Nl.isPureReactComponent = !0;
  var Pt = Array.isArray;
  function I() {
  }
  var ot = { H: null, A: null, T: null, S: null }, Ol = Object.prototype.hasOwnProperty;
  function ul(h, O, L) {
    var q = L.ref;
    return {
      $$typeof: i,
      type: h,
      key: O,
      ref: q !== void 0 ? q : null,
      props: L
    };
  }
  function il(h, O) {
    return ul(h.type, O, h.props);
  }
  function tl(h) {
    return typeof h == "object" && h !== null && h.$$typeof === i;
  }
  function Jl(h) {
    var O = { "=": "=0", ":": "=2" };
    return "$" + h.replace(/[=:]/g, function(L) {
      return O[L];
    });
  }
  var oe = /\/+/g;
  function Rt(h, O) {
    return typeof h == "object" && h !== null && h.key != null ? Jl("" + h.key) : O.toString(36);
  }
  function R(h) {
    switch (h.status) {
      case "fulfilled":
        return h.value;
      case "rejected":
        throw h.reason;
      default:
        switch (typeof h.status == "string" ? h.then(I, I) : (h.status = "pending", h.then(
          function(O) {
            h.status === "pending" && (h.status = "fulfilled", h.value = O);
          },
          function(O) {
            h.status === "pending" && (h.status = "rejected", h.reason = O);
          }
        )), h.status) {
          case "fulfilled":
            return h.value;
          case "rejected":
            throw h.reason;
        }
    }
    throw h;
  }
  function Q(h, O, L, q, ut) {
    var it = typeof h;
    (it === "undefined" || it === "boolean") && (h = null);
    var ct = !1;
    if (h === null) ct = !0;
    else
      switch (it) {
        case "bigint":
        case "string":
        case "number":
          ct = !0;
          break;
        case "object":
          switch (h.$$typeof) {
            case i:
            case f:
              ct = !0;
              break;
            case D:
              return ct = h._init, Q(
                ct(h._payload),
                O,
                L,
                q,
                ut
              );
          }
      }
    if (ct)
      return ut = ut(h), ct = q === "" ? "." + Rt(h, 0) : q, Pt(ut) ? (L = "", ct != null && (L = ct.replace(oe, "$&/") + "/"), Q(ut, O, L, "", function(ql) {
        return ql;
      })) : ut != null && (tl(ut) && (ut = il(
        ut,
        L + (ut.key == null || h && h.key === ut.key ? "" : ("" + ut.key).replace(
          oe,
          "$&/"
        ) + "/") + ct
      )), O.push(ut)), 1;
    ct = 0;
    var Y = q === "" ? "." : q + ":";
    if (Pt(h))
      for (var X = 0; X < h.length; X++)
        q = h[X], it = Y + Rt(q, X), ct += Q(
          q,
          O,
          L,
          it,
          ut
        );
    else if (X = Ot(h), typeof X == "function")
      for (h = X.call(h), X = 0; !(q = h.next()).done; )
        q = q.value, it = Y + Rt(q, X++), ct += Q(
          q,
          O,
          L,
          it,
          ut
        );
    else if (it === "object") {
      if (typeof h.then == "function")
        return Q(
          R(h),
          O,
          L,
          q,
          ut
        );
      throw O = String(h), Error(
        "Objects are not valid as a React child (found: " + (O === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : O) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return ct;
  }
  function Z(h, O, L) {
    if (h == null) return h;
    var q = [], ut = 0;
    return Q(h, q, "", "", function(it) {
      return O.call(L, it, ut++);
    }), q;
  }
  function mt(h) {
    if (h._status === -1) {
      var O = h._result, L = O();
      L.then(
        function(q) {
          (h._status === 0 || h._status === -1) && (h._status = 1, h._result = q, L.status === void 0 && (L.status = "fulfilled", L.value = q));
        },
        function(q) {
          (h._status === 0 || h._status === -1) && (h._status = 2, h._result = q, L.status === void 0 && (L.status = "rejected", L.reason = q));
        }
      ), h._status === -1 && (h._status = 0, h._result = L);
    }
    if (h._status === 1) return h._result.default;
    throw h._result;
  }
  var rt = typeof reportError == "function" ? reportError : function(h) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var O = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof h == "object" && h !== null && typeof h.message == "string" ? String(h.message) : String(h),
        error: h
      });
      if (!window.dispatchEvent(O)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", h);
      return;
    }
    console.error(h);
  };
  function cl(h) {
    var O = ot.T, L = {};
    L.types = O !== null ? O.types : null, ot.T = L;
    try {
      var q = h(), ut = ot.S;
      ut !== null && ut(L, q), typeof q == "object" && q !== null && typeof q.then == "function" && q.then(I, rt);
    } catch (it) {
      rt(it);
    } finally {
      O !== null && L.types !== null && (O.types = L.types), ot.T = O;
    }
  }
  function Ll(h) {
    var O = ot.T;
    if (O !== null) {
      var L = O.types;
      L === null ? O.types = [h] : L.indexOf(h) === -1 && L.push(h);
    } else cl(Ll.bind(null, h));
  }
  var re = {
    map: Z,
    forEach: function(h, O, L) {
      Z(
        h,
        function() {
          O.apply(this, arguments);
        },
        L
      );
    },
    count: function(h) {
      var O = 0;
      return Z(h, function() {
        O++;
      }), O;
    },
    toArray: function(h) {
      return Z(h, function(O) {
        return O;
      }) || [];
    },
    only: function(h) {
      if (!tl(h))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return h;
    }
  };
  return J.Activity = T, J.Children = re, J.Component = w, J.Fragment = s, J.Profiler = b, J.PureComponent = zl, J.StrictMode = r, J.Suspense = j, J.ViewTransition = B, J.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ot, J.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(h) {
      return ot.H.useMemoCache(h);
    }
  }, J.addTransitionType = Ll, J.cache = function(h) {
    return function() {
      return h.apply(null, arguments);
    };
  }, J.cacheSignal = function() {
    return null;
  }, J.cloneElement = function(h, O, L) {
    if (h == null)
      throw Error(
        "The argument must be a React element, but you passed " + h + "."
      );
    var q = P({}, h.props), ut = h.key;
    if (O != null)
      for (it in O.key !== void 0 && (ut = "" + O.key), O)
        !Ol.call(O, it) || it === "key" || it === "__self" || it === "__source" || it === "ref" && O.ref === void 0 || (q[it] = O[it]);
    var it = arguments.length - 2;
    if (it === 1) q.children = L;
    else if (1 < it) {
      for (var ct = Array(it), Y = 0; Y < it; Y++)
        ct[Y] = arguments[Y + 2];
      q.children = ct;
    }
    return ul(h.type, ut, q);
  }, J.createContext = function(h) {
    return h = {
      $$typeof: C,
      _currentValue: h,
      _currentValue2: h,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, h.Provider = h, h.Consumer = {
      $$typeof: A,
      _context: h
    }, h;
  }, J.createElement = function(h, O, L) {
    var q, ut = {}, it = null;
    if (O != null)
      for (q in O.key !== void 0 && (it = "" + O.key), O)
        Ol.call(O, q) && q !== "key" && q !== "__self" && q !== "__source" && (ut[q] = O[q]);
    var ct = arguments.length - 2;
    if (ct === 1) ut.children = L;
    else if (1 < ct) {
      for (var Y = Array(ct), X = 0; X < ct; X++)
        Y[X] = arguments[X + 2];
      ut.children = Y;
    }
    if (h && h.defaultProps)
      for (q in ct = h.defaultProps, ct)
        ut[q] === void 0 && (ut[q] = ct[q]);
    return ul(h, it, ut);
  }, J.createRef = function() {
    return { current: null };
  }, J.forwardRef = function(h) {
    return { $$typeof: _, render: h };
  }, J.isValidElement = tl, J.lazy = function(h) {
    return {
      $$typeof: D,
      _payload: { _status: -1, _result: h },
      _init: mt
    };
  }, J.memo = function(h, O) {
    return {
      $$typeof: $,
      type: h,
      compare: O === void 0 ? null : O
    };
  }, J.startTransition = cl, J.unstable_useCacheRefresh = function() {
    return ot.H.useCacheRefresh();
  }, J.use = function(h) {
    return ot.H.use(h);
  }, J.useActionState = function(h, O, L) {
    return ot.H.useActionState(h, O, L);
  }, J.useCallback = function(h, O) {
    return ot.H.useCallback(h, O);
  }, J.useContext = function(h) {
    return ot.H.useContext(h);
  }, J.useDebugValue = function() {
  }, J.useDeferredValue = function(h, O) {
    return ot.H.useDeferredValue(h, O);
  }, J.useEffect = function(h, O) {
    return ot.H.useEffect(h, O);
  }, J.useEffectEvent = function(h) {
    return ot.H.useEffectEvent(h);
  }, J.useId = function() {
    return ot.H.useId();
  }, J.useImperativeHandle = function(h, O, L) {
    return ot.H.useImperativeHandle(h, O, L);
  }, J.useInsertionEffect = function(h, O) {
    return ot.H.useInsertionEffect(h, O);
  }, J.useLayoutEffect = function(h, O) {
    return ot.H.useLayoutEffect(h, O);
  }, J.useMemo = function(h, O) {
    return ot.H.useMemo(h, O);
  }, J.useOptimistic = function(h, O) {
    return ot.H.useOptimistic(h, O);
  }, J.useReducer = function(h, O, L) {
    return ot.H.useReducer(h, O, L);
  }, J.useRef = function(h) {
    return ot.H.useRef(h);
  }, J.useState = function(h) {
    return ot.H.useState(h);
  }, J.useSyncExternalStore = function(h, O, L) {
    return ot.H.useSyncExternalStore(
      h,
      O,
      L
    );
  }, J.useTransition = function() {
    return ot.H.useTransition();
  }, J.version = "19.3.0", J;
}
var q0;
function ir() {
  return q0 || (q0 = 1, Wo.exports = C1()), Wo.exports;
}
var kt = ir();
const M1 = /* @__PURE__ */ N1(kt);
var Fo = { exports: {} }, Eu = {}, Io = { exports: {} }, ko = {};
var G0;
function R1() {
  return G0 || (G0 = 1, (function(i) {
    function f(R, Q) {
      var Z = R.length;
      R.push(Q);
      t: for (; 0 < Z; ) {
        var mt = Z - 1 >>> 1, rt = R[mt];
        if (0 < b(rt, Q))
          R[mt] = Q, R[Z] = rt, Z = mt;
        else break t;
      }
    }
    function s(R) {
      return R.length === 0 ? null : R[0];
    }
    function r(R) {
      if (R.length === 0) return null;
      var Q = R[0], Z = R.pop();
      if (Z !== Q) {
        R[0] = Z;
        t: for (var mt = 0, rt = R.length, cl = rt >>> 1; mt < cl; ) {
          var Ll = 2 * (mt + 1) - 1, re = R[Ll], h = Ll + 1, O = R[h];
          if (0 > b(re, Z))
            h < rt && 0 > b(O, re) ? (R[mt] = O, R[h] = Z, mt = h) : (R[mt] = re, R[Ll] = Z, mt = Ll);
          else if (h < rt && 0 > b(O, Z))
            R[mt] = O, R[h] = Z, mt = h;
          else break t;
        }
      }
      return Q;
    }
    function b(R, Q) {
      var Z = R.sortIndex - Q.sortIndex;
      return Z !== 0 ? Z : R.id - Q.id;
    }
    if (i.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var A = performance;
      i.unstable_now = function() {
        return A.now();
      };
    } else {
      var C = Date, _ = C.now();
      i.unstable_now = function() {
        return C.now() - _;
      };
    }
    var j = [], $ = [], D = 1, T = null, B = 3, et = !1, Ot = !1, At = !1, P = !1, Wt = typeof setTimeout == "function" ? setTimeout : null, w = typeof clearTimeout == "function" ? clearTimeout : null, Tt = typeof setImmediate < "u" ? setImmediate : null;
    function zl(R) {
      for (var Q = s($); Q !== null; ) {
        if (Q.callback === null) r($);
        else if (Q.startTime <= R)
          r($), Q.sortIndex = Q.expirationTime, f(j, Q);
        else break;
        Q = s($);
      }
    }
    function Nl(R) {
      if (At = !1, zl(R), !Ot)
        if (s(j) !== null)
          Ot = !0, Pt || (Pt = !0, tl());
        else {
          var Q = s($);
          Q !== null && Rt(Nl, Q.startTime - R);
        }
    }
    var Pt = !1, I = -1, ot = 5, Ol = -1;
    function ul() {
      return P ? !0 : !(i.unstable_now() - Ol < ot);
    }
    function il() {
      if (P = !1, Pt) {
        var R = i.unstable_now();
        Ol = R;
        var Q = !0;
        try {
          t: {
            Ot = !1, At && (At = !1, w(I), I = -1), et = !0;
            var Z = B;
            try {
              l: {
                for (zl(R), T = s(j); T !== null && !(T.expirationTime > R && ul()); ) {
                  var mt = T.callback;
                  if (typeof mt == "function") {
                    T.callback = null, B = T.priorityLevel;
                    var rt = mt(
                      T.expirationTime <= R
                    );
                    if (R = i.unstable_now(), typeof rt == "function") {
                      T.callback = rt, zl(R), Q = !0;
                      break l;
                    }
                    T === s(j) && r(j), zl(R);
                  } else r(j);
                  T = s(j);
                }
                if (T !== null) Q = !0;
                else {
                  var cl = s($);
                  cl !== null && Rt(
                    Nl,
                    cl.startTime - R
                  ), Q = !1;
                }
              }
              break t;
            } finally {
              T = null, B = Z, et = !1;
            }
            Q = void 0;
          }
        } finally {
          Q ? tl() : Pt = !1;
        }
      }
    }
    var tl;
    if (typeof Tt == "function")
      tl = function() {
        Tt(il);
      };
    else if (typeof MessageChannel < "u") {
      var Jl = new MessageChannel(), oe = Jl.port2;
      Jl.port1.onmessage = il, tl = function() {
        oe.postMessage(null);
      };
    } else
      tl = function() {
        Wt(il, 0);
      };
    function Rt(R, Q) {
      I = Wt(function() {
        R(i.unstable_now());
      }, Q);
    }
    i.unstable_IdlePriority = 5, i.unstable_ImmediatePriority = 1, i.unstable_LowPriority = 4, i.unstable_NormalPriority = 3, i.unstable_Profiling = null, i.unstable_UserBlockingPriority = 2, i.unstable_cancelCallback = function(R) {
      R.callback = null;
    }, i.unstable_forceFrameRate = function(R) {
      0 > R || 125 < R ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : ot = 0 < R ? Math.floor(1e3 / R) : 5;
    }, i.unstable_getCurrentPriorityLevel = function() {
      return B;
    }, i.unstable_next = function(R) {
      switch (B) {
        case 1:
        case 2:
        case 3:
          var Q = 3;
          break;
        default:
          Q = B;
      }
      var Z = B;
      B = Q;
      try {
        return R();
      } finally {
        B = Z;
      }
    }, i.unstable_requestPaint = function() {
      P = !0;
    }, i.unstable_runWithPriority = function(R, Q) {
      switch (R) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          R = 3;
      }
      var Z = B;
      B = R;
      try {
        return Q();
      } finally {
        B = Z;
      }
    }, i.unstable_scheduleCallback = function(R, Q, Z) {
      var mt = i.unstable_now();
      switch (typeof Z == "object" && Z !== null ? (Z = Z.delay, Z = typeof Z == "number" && 0 < Z ? mt + Z : mt) : Z = mt, R) {
        case 1:
          var rt = -1;
          break;
        case 2:
          rt = 250;
          break;
        case 5:
          rt = 1073741823;
          break;
        case 4:
          rt = 1e4;
          break;
        default:
          rt = 5e3;
      }
      return rt = Z + rt, R = {
        id: D++,
        callback: Q,
        priorityLevel: R,
        startTime: Z,
        expirationTime: rt,
        sortIndex: -1
      }, Z > mt ? (R.sortIndex = Z, f($, R), s(j) === null && R === s($) && (At ? (w(I), I = -1) : At = !0, Rt(Nl, Z - mt))) : (R.sortIndex = rt, f(j, R), Ot || et || (Ot = !0, Pt || (Pt = !0, tl()))), R;
    }, i.unstable_shouldYield = ul, i.unstable_wrapCallback = function(R) {
      var Q = B;
      return function() {
        var Z = B;
        B = Q;
        try {
          return R.apply(this, arguments);
        } finally {
          B = Z;
        }
      };
    };
  })(ko)), ko;
}
var X0;
function j1() {
  return X0 || (X0 = 1, Io.exports = R1()), Io.exports;
}
var Po = { exports: {} }, $t = {};
var Q0;
function D1() {
  if (Q0) return $t;
  Q0 = 1;
  var i = ir();
  function f(D) {
    var T = "https://react.dev/errors/" + D;
    if (1 < arguments.length) {
      T += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var B = 2; B < arguments.length; B++)
        T += "&args[]=" + encodeURIComponent(arguments[B]);
    }
    return "Minified React error #" + D + "; visit " + T + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function s() {
  }
  var r = {
    d: {
      f: s,
      r: function() {
        throw Error(f(522));
      },
      D: s,
      C: s,
      L: s,
      m: s,
      X: s,
      S: s,
      M: s
    },
    p: 0,
    findDOMNode: null
  }, b = /* @__PURE__ */ Symbol.for("react.portal"), A = /* @__PURE__ */ Symbol.for("react.recoverable"), C = /* @__PURE__ */ Symbol.for("react.optimistic_key");
  function _(D, T, B) {
    var et = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: b,
      key: et == null ? null : et === C ? C : "" + et,
      children: D,
      containerInfo: T,
      implementation: B
    };
  }
  var j = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function $(D, T) {
    if (D === "font") return "";
    if (typeof T == "string")
      return T === "use-credentials" ? T : "";
  }
  return $t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r, $t.browser = function(D) {
    return { $$typeof: A, _reason: D };
  }, $t.createPortal = function(D, T) {
    var B = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!T || T.nodeType !== 1 && T.nodeType !== 9 && T.nodeType !== 11)
      throw Error(f(299));
    return _(D, T, null, B);
  }, $t.flushSync = function(D) {
    var T = j.T, B = r.p;
    try {
      if (j.T = null, r.p = 2, D) return D();
    } finally {
      j.T = T, r.p = B, r.d.f();
    }
  }, $t.preconnect = function(D, T) {
    typeof D == "string" && (T ? (T = T.crossOrigin, T = typeof T == "string" ? T === "use-credentials" ? T : "" : void 0) : T = null, r.d.C(D, T));
  }, $t.prefetchDNS = function(D) {
    typeof D == "string" && r.d.D(D);
  }, $t.preinit = function(D, T) {
    if (typeof D == "string" && T && typeof T.as == "string") {
      var B = T.as, et = $(B, T.crossOrigin), Ot = typeof T.integrity == "string" ? T.integrity : void 0, At = typeof T.fetchPriority == "string" ? T.fetchPriority : void 0;
      B === "style" ? r.d.S(
        D,
        typeof T.precedence == "string" ? T.precedence : void 0,
        {
          crossOrigin: et,
          integrity: Ot,
          fetchPriority: At
        }
      ) : B === "script" && r.d.X(D, {
        crossOrigin: et,
        integrity: Ot,
        fetchPriority: At,
        nonce: typeof T.nonce == "string" ? T.nonce : void 0
      });
    }
  }, $t.preinitModule = function(D, T) {
    if (typeof D == "string")
      if (typeof T == "object" && T !== null) {
        if (T.as == null || T.as === "script") {
          var B = $(
            T.as,
            T.crossOrigin
          );
          r.d.M(D, {
            crossOrigin: B,
            integrity: typeof T.integrity == "string" ? T.integrity : void 0,
            nonce: typeof T.nonce == "string" ? T.nonce : void 0,
            fetchPriority: typeof T.fetchPriority == "string" ? T.fetchPriority : void 0
          });
        }
      } else T == null && r.d.M(D);
  }, $t.preload = function(D, T) {
    if (typeof D == "string" && typeof T == "object" && T !== null && typeof T.as == "string") {
      var B = T.as, et = $(B, T.crossOrigin);
      r.d.L(D, B, {
        crossOrigin: et,
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
  }, $t.preloadModule = function(D, T) {
    if (typeof D == "string")
      if (T) {
        var B = $(T.as, T.crossOrigin);
        r.d.m(D, {
          as: typeof T.as == "string" && T.as !== "script" ? T.as : void 0,
          crossOrigin: B,
          integrity: typeof T.integrity == "string" ? T.integrity : void 0,
          nonce: typeof T.nonce == "string" ? T.nonce : void 0,
          fetchPriority: typeof T.fetchPriority == "string" ? T.fetchPriority : void 0
        });
      } else r.d.m(D);
  }, $t.requestFormReset = function(D) {
    r.d.r(D);
  }, $t.unstable_batchedUpdates = function(D, T) {
    return D(T);
  }, $t.useFormState = function(D, T, B) {
    return j.H.useFormState(D, T, B);
  }, $t.useFormStatus = function() {
    return j.H.useHostTransitionStatus();
  }, $t.version = "19.3.0", $t;
}
var V0;
function U1() {
  if (V0) return Po.exports;
  V0 = 1;
  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (f) {
        console.error(f);
      }
  }
  return i(), Po.exports = D1(), Po.exports;
}
var Z0;
function B1() {
  if (Z0) return Eu;
  Z0 = 1;
  var i = j1(), f = ir(), s = U1();
  function r(t) {
    var l = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      l += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var e = 2; e < arguments.length; e++)
        l += "&args[]=" + encodeURIComponent(arguments[e]);
    }
    return "Minified React error #" + t + "; visit " + l + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function b(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function A(t) {
    for (var l = t, e = l; e && !e.alternate; )
      l = e, (l.flags & 4098) !== 0 && (t = l.return), e = l.return;
    for (; l.return; ) l = l.return;
    return l.tag === 3 ? t : null;
  }
  function C(t) {
    if (t.tag === 13) {
      var l = t.memoizedState;
      if (l === null && (t = t.alternate, t !== null && (l = t.memoizedState)), l !== null) return l.dehydrated;
    }
    return null;
  }
  function _(t) {
    if (t.tag === 31) {
      var l = t.memoizedState;
      if (l === null && (t = t.alternate, t !== null && (l = t.memoizedState)), l !== null) return l.dehydrated;
    }
    return null;
  }
  function j(t) {
    if (A(t) !== t)
      throw Error(r(188));
  }
  function $(t) {
    var l = t.alternate;
    if (!l) {
      if (l = A(t), l === null) throw Error(r(188));
      return l !== t ? null : t;
    }
    for (var e = t, n = l; ; ) {
      var a = e.return;
      if (a === null) break;
      var u = a.alternate;
      if (u === null) {
        if (n = a.return, n !== null) {
          e = n;
          continue;
        }
        break;
      }
      if (a.child === u.child) {
        for (u = a.child; u; ) {
          if (u === e) return j(a), t;
          if (u === n) return j(a), l;
          u = u.sibling;
        }
        throw Error(r(188));
      }
      if (e.return !== n.return) e = a, n = u;
      else {
        for (var c = !1, o = a.child; o; ) {
          if (o === e) {
            c = !0, e = a, n = u;
            break;
          }
          if (o === n) {
            c = !0, n = a, e = u;
            break;
          }
          o = o.sibling;
        }
        if (!c) {
          for (o = u.child; o; ) {
            if (o === e) {
              c = !0, e = u, n = a;
              break;
            }
            if (o === n) {
              c = !0, n = u, e = a;
              break;
            }
            o = o.sibling;
          }
          if (!c) throw Error(r(189));
        }
      }
      if (e.alternate !== n) throw Error(r(190));
    }
    if (e.tag !== 3) throw Error(r(188));
    return e.stateNode.current === e ? t : l;
  }
  function D(t) {
    var l = t.tag;
    if (l === 5 || l === 26 || l === 27 || l === 6) return t;
    for (t = t.child; t !== null; ) {
      if (l = D(t), l !== null) return l;
      t = t.sibling;
    }
    return null;
  }
  function T(t, l, e, n, a, u) {
    for (; t !== null; ) {
      if ((t.tag === 5 || t.tag === 27 || t.tag === 6) && e(t, n, a, u) || (t.tag !== 22 || t.memoizedState === null) && (l || t.tag !== 5 && t.tag !== 27) && T(
        t.child,
        l,
        e,
        n,
        a,
        u
      ))
        return !0;
      t = t.sibling;
    }
    return !1;
  }
  function B(t) {
    for (t = t.return; t !== null; ) {
      if (t.tag === 3 || t.tag === 5 || t.tag === 27) return t;
      t = t.return;
    }
    return null;
  }
  function et(t) {
    var l = !1;
    for (t = t.return; t !== null && (t.tag === 4 && (l = !0), !(t.tag === 3 || t.tag === 5 || t.tag === 27)); )
      t = t.return;
    return l;
  }
  function Ot(t) {
    var l = [null, null], e = B(t);
    return e === null || At(
      l,
      t,
      e.child,
      { foundSelf: !1 }
    ), l;
  }
  function At(t, l, e, n) {
    for (; e !== null; ) {
      if (e === l) n.foundSelf = !0;
      else if (e.tag === 5 || e.tag === 27 || e.tag === 6) {
        if (n.foundSelf) return t[1] = e, !0;
        t[0] = e;
      } else if ((e.tag !== 22 || e.memoizedState === null) && At(
        t,
        l,
        e.child,
        n
      ))
        return !0;
      e = e.sibling;
    }
    return !1;
  }
  function P(t) {
    switch (t.tag) {
      case 5:
      case 27:
      case 6:
        return t.stateNode;
      case 3:
        return t.stateNode.containerInfo;
      default:
        throw Error(r(559));
    }
  }
  var Wt = null, w = null;
  function Tt(t, l, e) {
    return t === e ? !0 : t === l ? (Wt = t, !0) : !1;
  }
  function zl(t, l, e) {
    return t === e ? (w = t, !1) : t === l ? (w !== null && (Wt = t), !0) : !1;
  }
  function Nl(t) {
    if (t === null) return null;
    do
      t = t === null ? null : t.return;
    while (t && t.tag !== 5 && t.tag !== 27 && t.tag !== 3);
    return t || null;
  }
  function Pt(t, l, e) {
    for (var n = 0, a = t; a; a = e(a)) n++;
    a = 0;
    for (var u = l; u; u = e(u)) a++;
    for (; 0 < n - a; ) t = e(t), n--;
    for (; 0 < a - n; ) l = e(l), a--;
    for (; n--; ) {
      if (t === l || l !== null && t === l.alternate)
        return t;
      t = e(t), l = e(l);
    }
    return null;
  }
  var I = Object.assign, ot = /* @__PURE__ */ Symbol.for("react.element"), Ol = /* @__PURE__ */ Symbol.for("react.transitional.element"), ul = /* @__PURE__ */ Symbol.for("react.portal"), il = /* @__PURE__ */ Symbol.for("react.fragment"), tl = /* @__PURE__ */ Symbol.for("react.strict_mode"), Jl = /* @__PURE__ */ Symbol.for("react.profiler"), oe = /* @__PURE__ */ Symbol.for("react.consumer"), Rt = /* @__PURE__ */ Symbol.for("react.context"), R = /* @__PURE__ */ Symbol.for("react.forward_ref"), Q = /* @__PURE__ */ Symbol.for("react.suspense"), Z = /* @__PURE__ */ Symbol.for("react.suspense_list"), mt = /* @__PURE__ */ Symbol.for("react.memo"), rt = /* @__PURE__ */ Symbol.for("react.lazy"), cl = /* @__PURE__ */ Symbol.for("react.activity"), Ll = /* @__PURE__ */ Symbol.for("react.legacy_hidden"), re = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), h = /* @__PURE__ */ Symbol.for("react.view_transition"), O = /* @__PURE__ */ Symbol.for("react.recoverable"), L = Symbol.iterator;
  function q(t) {
    return t === null || typeof t != "object" ? null : (t = L && t[L] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var ut = /* @__PURE__ */ Symbol.for("react.client.reference");
  function it(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === ut ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case il:
        return "Fragment";
      case Jl:
        return "Profiler";
      case tl:
        return "StrictMode";
      case Q:
        return "Suspense";
      case Z:
        return "SuspenseList";
      case cl:
        return "Activity";
      case h:
        return "ViewTransition";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case ul:
          return "Portal";
        case Rt:
          return t.displayName || "Context";
        case oe:
          return (t._context.displayName || "Context") + ".Consumer";
        case R:
          var l = t.render;
          return t = t.displayName, t || (t = l.displayName || l.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case mt:
          return l = t.displayName || null, l !== null ? l : it(t.type) || "Memo";
        case rt:
          l = t._payload, t = t._init;
          try {
            return it(t(l));
          } catch {
          }
      }
    return null;
  }
  var ct = Array.isArray, Y = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, X = s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ql = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, fn = [], je = -1;
  function _l(t) {
    return { current: t };
  }
  function jt(t) {
    0 > je || (t.current = fn[je], fn[je] = null, je--);
  }
  function St(t, l) {
    je++, fn[je] = t.current, t.current = l;
  }
  var K = _l(null), Ft = _l(null), $l = _l(null), jn = _l(null);
  function Ou(t, l) {
    switch (St($l, l), St(Ft, t), St(K, null), l.nodeType) {
      case 9:
      case 11:
        t = (t = l.documentElement) && (t = t.namespaceURI) ? wy(t) : 0;
        break;
      default:
        if (t = l.tagName, l = l.namespaceURI)
          l = wy(l), t = Ky(l, t);
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    jt(K), St(K, t);
  }
  function Dn() {
    jt(K), jt(Ft), jt($l);
  }
  function dc(t) {
    var l = t.memoizedState;
    l !== null && (ba._currentValue = l.memoizedState, St(jn, t)), l = K.current;
    var e = Ky(l, t.type);
    l !== e && (St(Ft, t), St(K, e));
  }
  function _u(t) {
    Ft.current === t && (jt(K), jt(Ft)), jn.current === t && (jt(jn), ba._currentValue = ql);
  }
  var yc, dr;
  function De(t) {
    if (yc === void 0)
      try {
        throw Error();
      } catch (e) {
        var l = e.stack.trim().match(/\n( *(at )?)/);
        yc = l && l[1] || "", dr = -1 < e.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + yc + t + dr;
  }
  var mc = !1;
  function hc(t, l) {
    if (!t || mc) return "";
    mc = !0;
    var e = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var n = {
        DetermineComponentFrameRoot: function() {
          try {
            if (l) {
              var N = function() {
                throw Error();
              };
              if (Object.defineProperty(N.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(N, []);
                } catch (M) {
                  var v = M;
                }
                Reflect.construct(t, [], N);
              } else {
                try {
                  N.call();
                } catch (M) {
                  v = M;
                }
                N = !1;
                try {
                  var E = Object.getOwnPropertyDescriptor(
                    t.prototype,
                    "props"
                  );
                  Object.defineProperty(t.prototype, "props", {
                    configurable: !0,
                    set: function() {
                      throw Error();
                    }
                  }), N = !0, new t();
                } finally {
                  N && (E !== void 0 ? Object.defineProperty(t.prototype, "props", E) : delete t.prototype.props);
                }
              }
            } else {
              try {
                throw Error();
              } catch (M) {
                v = M;
              }
              (N = t()) && typeof N.catch == "function" && N.catch(function() {
              });
            }
          } catch (M) {
            if (M && v && typeof M.stack == "string")
              return [M.stack, v.stack];
          }
          return [null, null];
        }
      };
      n.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var a = Object.getOwnPropertyDescriptor(
        n.DetermineComponentFrameRoot,
        "name"
      );
      a && a.configurable && Object.defineProperty(
        n.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var u = n.DetermineComponentFrameRoot(), c = u[0], o = u[1];
      if (c && o) {
        var d = c.split(`
`), S = o.split(`
`);
        for (a = n = 0; n < d.length && !d[n].includes("DetermineComponentFrameRoot"); )
          n++;
        for (; a < S.length && !S[a].includes(
          "DetermineComponentFrameRoot"
        ); )
          a++;
        if (n === d.length || a === S.length)
          for (n = d.length - 1, a = S.length - 1; 1 <= n && 0 <= a && d[n] !== S[a]; )
            a--;
        for (; 1 <= n && 0 <= a; n--, a--)
          if (d[n] !== S[a]) {
            if (n !== 1 || a !== 1)
              do
                if (n--, a--, 0 > a || d[n] !== S[a]) {
                  var x = `
` + d[n].replace(" at new ", " at ");
                  return t.displayName && x.includes("<anonymous>") && (x = x.replace("<anonymous>", t.displayName)), x;
                }
              while (1 <= n && 0 <= a);
            break;
          }
      }
    } finally {
      mc = !1, Error.prepareStackTrace = e;
    }
    return (e = t ? t.displayName || t.name : "") ? De(e) : "";
  }
  function Mm(t, l) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return De(t.type);
      case 16:
        return De("Lazy");
      case 13:
        return t.child !== l && l !== null ? De("Suspense Fallback") : De("Suspense");
      case 19:
        return De("SuspenseList");
      case 0:
      case 15:
        return hc(t.type, !1);
      case 11:
        return hc(t.type.render, !1);
      case 1:
        return hc(t.type, !0);
      case 31:
        return De("Activity");
      case 30:
        return De("ViewTransition");
      default:
        return "";
    }
  }
  function yr(t) {
    try {
      var l = "", e = null;
      do
        l += Mm(t, e), e = t, t = t.return;
      while (t);
      return l;
    } catch (n) {
      return `
Error generating stack: ` + n.message + `
` + n.stack;
    }
  }
  var vc = Object.prototype.hasOwnProperty, gc = i.unstable_scheduleCallback, Sc = i.unstable_cancelCallback, Rm = i.unstable_shouldYield, jm = i.unstable_requestPaint, ml = i.unstable_now, Dm = i.unstable_getCurrentPriorityLevel, mr = i.unstable_ImmediatePriority, hr = i.unstable_UserBlockingPriority, Cu = i.unstable_NormalPriority, Um = i.unstable_LowPriority, vr = i.unstable_IdlePriority, Bm = i.log, Hm = i.unstable_setDisableYieldValue, _a = null, hl = null;
  function Ue(t) {
    if (typeof Bm == "function" && Hm(t), hl && typeof hl.setStrictMode == "function")
      try {
        hl.setStrictMode(_a, t);
      } catch {
      }
  }
  var vl = Math.clz32 ? Math.clz32 : qm, Ym = Math.log, Lm = Math.LN2;
  function qm(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (Ym(t) / Lm | 0) | 0;
  }
  var Mu = 256, Ru = 262144, ju = 4194304;
  function on(t) {
    var l = t & 42;
    if (l !== 0) return l;
    switch (t & -t) {
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
        return t & -t;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
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
        return t;
    }
  }
  function Du(t, l, e) {
    var n = t.pendingLanes;
    if (n === 0) return 0;
    var a = 0, u = t.suspendedLanes, c = t.pingedLanes;
    t = t.warmLanes;
    var o = n & 134217727;
    return o !== 0 ? (n = o & ~u, n !== 0 ? a = on(n) : (c &= o, c !== 0 ? a = on(c) : e || (e = o & ~t, e !== 0 && (a = on(e))))) : (o = n & ~u, o !== 0 ? a = on(o) : c !== 0 ? a = on(c) : e || (e = n & ~t, e !== 0 && (a = on(e)))), a === 0 ? 0 : l !== 0 && l !== a && (l & u) === 0 && (u = a & -a, e = l & -l, u >= e || u === 32 && (e & 4194048) !== 0) ? l : a;
  }
  function Ca(t, l) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & l) === 0;
  }
  function gr(t, l) {
    (l & 8) !== 0 && (l |= l & 32);
    var e = t.entangledLanes;
    if (e !== 0)
      for (t = t.entanglements, e &= l; 0 < e; ) {
        var n = 31 - vl(e), a = 1 << n;
        l |= t[n], e &= ~a;
      }
    return l;
  }
  function Gm(t, l) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return l + 250;
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
        return l + 5e3;
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
  function Sr() {
    var t = ju;
    return ju <<= 1, (ju & 62914560) === 0 && (ju = 4194304), t;
  }
  function pc(t) {
    for (var l = [], e = 0; 31 > e; e++) l.push(t);
    return l;
  }
  function Ma(t, l) {
    t.pendingLanes |= l, l !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function Xm(t, l, e, n, a, u) {
    var c = t.pendingLanes;
    t.pendingLanes = e, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= e, t.entangledLanes &= e, t.errorRecoveryDisabledLanes &= e, t.shellSuspendCounter = 0;
    var o = t.entanglements, d = t.expirationTimes, S = t.hiddenUpdates;
    for (e = c & ~e; 0 < e; ) {
      var x = 31 - vl(e), N = 1 << x;
      o[x] = 0, d[x] = -1;
      var v = S[x];
      if (v !== null)
        for (S[x] = null, x = 0; x < v.length; x++) {
          var E = v[x];
          E !== null && (E.lane &= -536870913);
        }
      e &= ~N;
    }
    n !== 0 && pr(t, n, 0), u !== 0 && a === 0 && t.tag !== 0 && (t.suspendedLanes |= u & ~(c & ~l));
  }
  function pr(t, l, e) {
    t.pendingLanes |= l, t.suspendedLanes &= ~l;
    var n = 31 - vl(l);
    t.entangledLanes |= l, t.entanglements[n] = t.entanglements[n] | 1073741824 | e & 261930;
  }
  function br(t, l) {
    var e = t.entangledLanes |= l;
    for (t = t.entanglements; e; ) {
      var n = 31 - vl(e), a = 1 << n;
      a & l | t[n] & l && (t[n] |= l), e &= ~a;
    }
  }
  function Tr(t, l) {
    var e = l & -l;
    return e = (e & 42) !== 0 ? 1 : bc(e), (e & (t.suspendedLanes | l)) !== 0 ? 0 : e;
  }
  function bc(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
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
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function Tc(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Er() {
    var t = X.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : C0(t.type));
  }
  function xr(t, l) {
    var e = X.p;
    try {
      return X.p = t, l();
    } finally {
      X.p = e;
    }
  }
  var se = Math.random().toString(36).slice(2), Qt = "__reactFiber$" + se, fl = "__reactProps$" + se, Un = "__reactContainer$" + se, Ar = "__reactEvents$" + se, Qm = "__reactListeners$" + se, Vm = "__reactHandles$" + se, zr = "__reactResources$" + se, Ra = "__reactMarker$" + se, Uu = "__reactLoad$" + se;
  function Bu(t) {
    delete t[Qt], delete t[fl], delete t[Qm], delete t[Vm];
  }
  function rn(t) {
    var l;
    if (l = t[Qt]) return l;
    for (var e = t.parentNode; e; ) {
      if (l = e[Un] || e[Qt]) {
        if (e = l.alternate, l.child !== null || e !== null && e.child !== null)
          for (t = o0(t); t !== null; ) {
            if (e = t[Qt]) return e;
            t = o0(t);
          }
        return l;
      }
      t = e, e = t.parentNode;
    }
    return null;
  }
  function Bn(t) {
    if (t = t[Qt] || t[Un]) {
      var l = t.tag;
      if (l === 5 || l === 6 || l === 13 || l === 31 || l === 26 || l === 27 || l === 3)
        return t;
    }
    return null;
  }
  function ja(t) {
    var l = t.tag;
    if (l === 5 || l === 26 || l === 27 || l === 6) return t.stateNode;
    throw Error(r(33));
  }
  function Hn(t) {
    var l = t[zr];
    return l || (l = t[zr] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), l;
  }
  function Lt(t) {
    t[Ra] = !0;
  }
  function Nr(t) {
    t[Uu] = void 0;
  }
  var Or = /* @__PURE__ */ new Set(), _r = {};
  function sn(t, l) {
    Yn(t, l), Yn(t + "Capture", l);
  }
  function Yn(t, l) {
    for (_r[t] = l, t = 0; t < l.length; t++)
      Or.add(l[t]);
  }
  var Zm = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Cr = {}, Mr = {};
  function wm(t) {
    return vc.call(Mr, t) ? !0 : vc.call(Cr, t) ? !1 : Zm.test(t) ? Mr[t] = !0 : (Cr[t] = !0, !1);
  }
  var st = !1;
  function Rr() {
    var t = st;
    return st = !1, t;
  }
  function Hu(t, l, e) {
    if (wm(l))
      if (e === null) t.removeAttribute(l);
      else {
        switch (typeof e) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(l);
            return;
          case "boolean":
            var n = l.toLowerCase().slice(0, 5);
            if (n !== "data-" && n !== "aria-") {
              t.removeAttribute(l);
              return;
            }
        }
        t.setAttribute(l, e);
      }
  }
  function Yu(t, l, e) {
    if (e === null) t.removeAttribute(l);
    else {
      switch (typeof e) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(l);
          return;
      }
      t.setAttribute(l, e);
    }
  }
  function de(t, l, e, n) {
    if (n === null) t.removeAttribute(e);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttributeNS(l, e, n);
    }
  }
  function gl(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function jr(t) {
    var l = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (l === "checkbox" || l === "radio");
  }
  function Km(t, l, e) {
    var n = Object.getOwnPropertyDescriptor(
      t.constructor.prototype,
      l
    );
    if (!t.hasOwnProperty(l) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var a = n.get, u = n.set;
      return Object.defineProperty(t, l, {
        configurable: !0,
        get: function() {
          return a.call(this);
        },
        set: function(c) {
          e = "" + c, u.call(this, c);
        }
      }), Object.defineProperty(t, l, {
        enumerable: n.enumerable
      }), {
        getValue: function() {
          return e;
        },
        setValue: function(c) {
          e = "" + c;
        },
        stopTracking: function() {
          t._valueTracker = null, delete t[l];
        }
      };
    }
  }
  function Ec(t) {
    if (!t._valueTracker) {
      var l = jr(t) ? "checked" : "value";
      t._valueTracker = Km(
        t,
        l,
        "" + t[l]
      );
    }
  }
  function Dr(t) {
    if (!t) return !1;
    var l = t._valueTracker;
    if (!l) return !0;
    var e = l.getValue(), n = "";
    return t && (n = jr(t) ? t.checked ? "true" : "false" : t.value), t = n, t !== e ? (l.setValue(t), !0) : !1;
  }
  var Jm = /[\n"\\]/g;
  function Cl(t) {
    return t.replace(
      Jm,
      function(l) {
        return "\\" + l.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function xc(t, l, e, n, a, u, c, o) {
    t.name = "", c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? t.type = c : t.removeAttribute("type"), l != null ? c === "number" ? (l === 0 && t.value === "" || t.value != l) && (t.value = "" + gl(l)) : t.value !== "" + gl(l) && (t.value = "" + gl(l)) : c !== "submit" && c !== "reset" || t.removeAttribute("value"), l != null ? c === "number" && t.value == l ? Ac(t, gl(t.value)) : Ac(t, gl(l)) : e != null ? Ac(t, gl(e)) : n != null && t.removeAttribute("value"), a == null && u != null && (t.defaultChecked = !!u), a != null && (t.checked = a && typeof a != "function" && typeof a != "symbol"), o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" ? t.name = "" + gl(o) : t.removeAttribute("name");
  }
  function Ur(t, l, e, n, a, u, c, o) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (t.type = u), l != null || e != null) {
      if (!(u !== "submit" && u !== "reset" || l != null)) {
        Ec(t);
        return;
      }
      e = e != null ? "" + gl(e) : "", l = l != null ? "" + gl(l) : e, o || l === t.value || (t.value = l), t.defaultValue = l;
    }
    n = n ?? a, n = typeof n != "function" && typeof n != "symbol" && !!n, t.checked = o ? t.checked : !!n, t.defaultChecked = !!n, c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (t.name = c), Ec(t);
  }
  function Ac(t, l) {
    t.defaultValue !== "" + l && (t.defaultValue = "" + l);
  }
  function Ln(t, l, e, n) {
    if (t = t.options, l) {
      l = {};
      for (var a = 0; a < e.length; a++)
        l["$" + e[a]] = !0;
      for (e = 0; e < t.length; e++)
        a = l.hasOwnProperty("$" + t[e].value), t[e].selected !== a && (t[e].selected = a), a && n && (t[e].defaultSelected = !0);
    } else {
      for (e = "" + gl(e), l = null, a = 0; a < t.length; a++) {
        if (t[a].value === e) {
          t[a].selected = !0, n && (t[a].defaultSelected = !0);
          return;
        }
        l !== null || t[a].disabled || (l = t[a]);
      }
      l !== null && (l.selected = !0);
    }
  }
  function Br(t, l, e) {
    if (l != null && (l = "" + gl(l), l !== t.value && (t.value = l), e == null)) {
      t.defaultValue !== l && (t.defaultValue = l);
      return;
    }
    t.defaultValue = e != null ? "" + gl(e) : "";
  }
  function Hr(t, l, e, n) {
    if (l == null) {
      if (n != null) {
        if (e != null) throw Error(r(92));
        if (ct(n)) {
          if (1 < n.length) throw Error(r(93));
          n = n[0];
        }
        e = n;
      }
      e == null && (e = ""), l = e;
    }
    e = gl(l), t.defaultValue = e, n = t.textContent, n === e && n !== "" && n !== null && (t.value = n), Ec(t);
  }
  function qn(t, l) {
    if (l) {
      var e = t.firstChild;
      if (e && e === t.lastChild && e.nodeType === 3) {
        e.nodeValue = l;
        return;
      }
    }
    t.textContent = l;
  }
  var $m = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Yr(t, l, e) {
    var n = l.indexOf("--") === 0;
    e == null || typeof e == "boolean" || e === "" ? n ? t.setProperty(l, "") : l === "float" ? t.cssFloat = "" : t[l] = "" : n ? t.setProperty(l, e) : typeof e != "number" || e === 0 || $m.has(l) ? l === "float" ? t.cssFloat = e : t[l] = ("" + e).trim() : t[l] = e + "px";
  }
  function Lr(t, l, e) {
    if (l != null && typeof l != "object")
      throw Error(r(62));
    if (t = t.style, e != null) {
      for (var n in e)
        !e.hasOwnProperty(n) || l != null && l.hasOwnProperty(n) || (n.indexOf("--") === 0 ? t.setProperty(n, "") : n === "float" ? t.cssFloat = "" : t[n] = "", st = !0);
      for (var a in l)
        n = l[a], l.hasOwnProperty(a) && e[a] !== n && (Yr(t, a, n), st = !0);
    } else
      for (var u in l)
        l.hasOwnProperty(u) && Yr(t, u, l[u]);
  }
  function zc(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
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
  var Wm = /* @__PURE__ */ new Map([
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
  ]), Fm = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Lu(t) {
    return Fm.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  function Wl() {
  }
  var Nc = null;
  function Oc(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var Gn = null, Xn = null;
  function qr(t) {
    var l = Bn(t);
    if (l && (t = l.stateNode)) {
      var e = t[fl] || null;
      t: switch (t = l.stateNode, l.type) {
        case "input":
          if (xc(
            t,
            e.value,
            e.defaultValue,
            e.defaultValue,
            e.checked,
            e.defaultChecked,
            e.type,
            e.name
          ), l = e.name, e.type === "radio" && l != null) {
            for (e = t; e.parentNode; ) e = e.parentNode;
            for (e = e.querySelectorAll(
              'input[name="' + Cl(
                "" + l
              ) + '"][type="radio"]'
            ), l = 0; l < e.length; l++) {
              var n = e[l];
              if (n !== t && n.form === t.form) {
                var a = n[fl] || null;
                if (!a) throw Error(r(90));
                xc(
                  n,
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
            for (l = 0; l < e.length; l++)
              n = e[l], n.form === t.form && Dr(n);
          }
          break t;
        case "textarea":
          Br(t, e.value, e.defaultValue);
          break t;
        case "select":
          l = e.value, l != null && Ln(t, !!e.multiple, l, !1);
      }
    }
  }
  var _c = !1;
  function Gr(t, l, e) {
    if (_c) return t(l, e);
    _c = !0;
    try {
      var n = t(l);
      return n;
    } finally {
      if (_c = !1, (Gn !== null || Xn !== null) && (Li(), Gn && (l = Gn, t = Xn, Xn = Gn = null, qr(l), t)))
        for (l = 0; l < t.length; l++) qr(t[l]);
    }
  }
  function Da(t, l) {
    var e = t.stateNode;
    if (e === null) return null;
    var n = e[fl] || null;
    if (n === null) return null;
    e = n[l];
    t: switch (l) {
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
        (n = !n.disabled) || (t = t.type, n = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !n;
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (e && typeof e != "function")
      throw Error(
        r(231, l, typeof e)
      );
    return e;
  }
  var ye = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Cc = !1;
  if (ye)
    try {
      var Ua = {};
      Object.defineProperty(Ua, "passive", {
        get: function() {
          Cc = !0;
        }
      }), window.addEventListener("test", Ua, Ua), window.removeEventListener("test", Ua, Ua);
    } catch {
      Cc = !1;
    }
  var Be = null, Mc = null, qu = null;
  function Xr() {
    if (qu) return qu;
    var t, l = Mc, e = l.length, n, a = "value" in Be ? Be.value : Be.textContent, u = a.length;
    for (t = 0; t < e && l[t] === a[t]; t++) ;
    var c = e - t;
    for (n = 1; n <= c && l[e - n] === a[u - n]; n++) ;
    return qu = a.slice(t, 1 < n ? 1 - n : void 0);
  }
  function Gu(t) {
    var l = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && l === 13 && (t = 13)) : t = l, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function Xu() {
    return !0;
  }
  function Qr() {
    return !1;
  }
  function ll(t) {
    function l(e, n, a, u, c) {
      this._reactName = e, this._targetInst = a, this.type = n, this.nativeEvent = u, this.target = c, this.currentTarget = null;
      for (var o in t)
        t.hasOwnProperty(o) && (e = t[o], this[o] = e ? e(u) : u[o]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? Xu : Qr, this.isPropagationStopped = Qr, this;
    }
    return I(l.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var e = this.nativeEvent;
        e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != "unknown" && (e.returnValue = !1), this.isDefaultPrevented = Xu);
      },
      stopPropagation: function() {
        var e = this.nativeEvent;
        e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0), this.isPropagationStopped = Xu);
      },
      persist: function() {
      },
      isPersistent: Xu
    }), l;
  }
  var He = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Qu = ll(He), Ba = I({}, He, { view: 0, detail: 0 }), Im = ll(Ba), Rc, jc, Ha, Vu = I({}, Ba, {
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
    getModifierState: Uc,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== Ha && (Ha && t.type === "mousemove" ? (Rc = t.screenX - Ha.screenX, jc = t.screenY - Ha.screenY) : jc = Rc = 0, Ha = t), Rc);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : jc;
    }
  }), Vr = ll(Vu), km = I({}, Vu, { dataTransfer: 0 }), Pm = ll(km), th = I({}, Ba, { relatedTarget: 0 }), Dc = ll(th), lh = I({}, He, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), eh = ll(lh), nh = I({}, He, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), ah = ll(nh), uh = I({}, He, { data: 0 }), Zr = ll(uh), ih = {
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
  }, ch = {
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
  }, fh = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function oh(t) {
    var l = this.nativeEvent;
    return l.getModifierState ? l.getModifierState(t) : (t = fh[t]) ? !!l[t] : !1;
  }
  function Uc() {
    return oh;
  }
  var rh = I({}, Ba, {
    key: function(t) {
      if (t.key) {
        var l = ih[t.key] || t.key;
        if (l !== "Unidentified") return l;
      }
      return t.type === "keypress" ? (t = Gu(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? ch[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Uc,
    charCode: function(t) {
      return t.type === "keypress" ? Gu(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? Gu(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), sh = ll(rh), dh = I({}, Vu, {
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
  }), wr = ll(dh), yh = I({}, He, { submitter: 0 }), mh = ll(yh), hh = I({}, Ba, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Uc
  }), vh = ll(hh), gh = I({}, He, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Sh = ll(gh), ph = I({}, Vu, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), bh = ll(ph), Th = I({}, He, {
    newState: 0,
    oldState: 0,
    source: 0
  }), Eh = ll(Th), xh = [9, 13, 27, 32], Bc = ye && "CompositionEvent" in window, Ya = null;
  ye && "documentMode" in document && (Ya = document.documentMode);
  var Ah = ye && "TextEvent" in window && !Ya, Kr = ye && (!Bc || Ya && 8 < Ya && 11 >= Ya), Jr = " ", $r = !1;
  function Wr(t, l) {
    switch (t) {
      case "keyup":
        return xh.indexOf(l.keyCode) !== -1;
      case "keydown":
        return l.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Fr(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var Qn = !1;
  function zh(t, l) {
    switch (t) {
      case "compositionend":
        return Fr(l);
      case "keypress":
        return l.which !== 32 ? null : ($r = !0, Jr);
      case "textInput":
        return t = l.data, t === Jr && $r ? null : t;
      default:
        return null;
    }
  }
  function Nh(t, l) {
    if (Qn)
      return t === "compositionend" || !Bc && Wr(t, l) ? (t = Xr(), qu = Mc = Be = null, Qn = !1, t) : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(l.ctrlKey || l.altKey || l.metaKey) || l.ctrlKey && l.altKey) {
          if (l.char && 1 < l.char.length)
            return l.char;
          if (l.which) return String.fromCharCode(l.which);
        }
        return null;
      case "compositionend":
        return Kr && l.locale !== "ko" ? null : l.data;
      default:
        return null;
    }
  }
  var Oh = {
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
  function Ir(t) {
    var l = t && t.nodeName && t.nodeName.toLowerCase();
    return l === "input" ? !!Oh[t.type] : l === "textarea";
  }
  function kr(t, l, e, n) {
    Gn ? Xn ? Xn.push(n) : Xn = [n] : Gn = n, l = Zi(l, "onChange"), 0 < l.length && (e = new Qu(
      "onChange",
      "change",
      null,
      e,
      n
    ), t.push({ event: e, listeners: l }));
  }
  var La = null, qa = null;
  function _h(t) {
    qy(t, 0);
  }
  function Zu(t) {
    var l = ja(t);
    if (Dr(l)) return t;
  }
  function Pr(t, l) {
    if (t === "change") return l;
  }
  var ts = !1;
  if (ye) {
    var Hc;
    if (ye) {
      var Yc = "oninput" in document;
      if (!Yc) {
        var ls = document.createElement("div");
        ls.setAttribute("oninput", "return;"), Yc = typeof ls.oninput == "function";
      }
      Hc = Yc;
    } else Hc = !1;
    ts = Hc && (!document.documentMode || 9 < document.documentMode);
  }
  function es() {
    La && (La.detachEvent("onpropertychange", ns), qa = La = null);
  }
  function ns(t) {
    if (t.propertyName === "value" && Zu(qa)) {
      var l = [];
      kr(
        l,
        qa,
        t,
        Oc(t)
      ), Gr(_h, l);
    }
  }
  function Ch(t, l, e) {
    t === "focusin" ? (es(), La = l, qa = e, La.attachEvent("onpropertychange", ns)) : t === "focusout" && es();
  }
  function Mh(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Zu(qa);
  }
  function Rh(t, l) {
    if (t === "click") return Zu(l);
  }
  function jh(t, l) {
    if (t === "input" || t === "change")
      return Zu(l);
  }
  function Dh(t, l) {
    return t === l && (t !== 0 || 1 / t === 1 / l) || t !== t && l !== l;
  }
  var Sl = typeof Object.is == "function" ? Object.is : Dh;
  function Ga(t, l) {
    if (Sl(t, l)) return !0;
    if (typeof t != "object" || t === null || typeof l != "object" || l === null)
      return !1;
    var e = Object.keys(t), n = Object.keys(l);
    if (e.length !== n.length) return !1;
    for (n = 0; n < e.length; n++) {
      var a = e[n];
      if (!vc.call(l, a) || !Sl(t[a], l[a]))
        return !1;
    }
    return !0;
  }
  function Lc(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  function as(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function us(t, l) {
    var e = as(t);
    t = 0;
    for (var n; e; ) {
      if (e.nodeType === 3) {
        if (n = t + e.textContent.length, t <= l && n >= l)
          return { node: e, offset: l - t };
        t = n;
      }
      t: {
        for (; e; ) {
          if (e.nextSibling) {
            e = e.nextSibling;
            break t;
          }
          e = e.parentNode;
        }
        e = void 0;
      }
      e = as(e);
    }
  }
  function is(t, l) {
    return t && l ? t === l ? !0 : t && t.nodeType === 3 ? !1 : l && l.nodeType === 3 ? is(t, l.parentNode) : "contains" in t ? t.contains(l) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(l) & 16) : !1 : !1;
  }
  function cs(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var l = Lc(t.document); l instanceof t.HTMLIFrameElement; ) {
      try {
        var e = typeof l.contentWindow.location.href == "string";
      } catch {
        e = !1;
      }
      if (e) t = l.contentWindow;
      else break;
      l = Lc(t.document);
    }
    return l;
  }
  function qc(t) {
    var l = t && t.nodeName && t.nodeName.toLowerCase();
    return l && (l === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || l === "textarea" || t.contentEditable === "true");
  }
  var Uh = ye && "documentMode" in document && 11 >= document.documentMode, Vn = null, Gc = null, Xa = null, Xc = !1;
  function fs(t, l, e) {
    var n = e.window === e ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
    Xc || Vn == null || Vn !== Lc(n) || (n = Vn, "selectionStart" in n && qc(n) ? n = { start: n.selectionStart, end: n.selectionEnd } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = {
      anchorNode: n.anchorNode,
      anchorOffset: n.anchorOffset,
      focusNode: n.focusNode,
      focusOffset: n.focusOffset
    }), Xa && Ga(Xa, n) || (Xa = n, n = Zi(Gc, "onSelect"), 0 < n.length && (l = new Qu(
      "onSelect",
      "select",
      null,
      l,
      e
    ), t.push({ event: l, listeners: n }), l.target = Vn)));
  }
  function dn(t, l) {
    var e = {};
    return e[t.toLowerCase()] = l.toLowerCase(), e["Webkit" + t] = "webkit" + l, e["Moz" + t] = "moz" + l, e;
  }
  var Zn = {
    animationend: dn("Animation", "AnimationEnd"),
    animationiteration: dn("Animation", "AnimationIteration"),
    animationstart: dn("Animation", "AnimationStart"),
    transitionrun: dn("Transition", "TransitionRun"),
    transitionstart: dn("Transition", "TransitionStart"),
    transitioncancel: dn("Transition", "TransitionCancel"),
    transitionend: dn("Transition", "TransitionEnd")
  }, Qc = {}, os = {};
  ye && (os = document.createElement("div").style, "AnimationEvent" in window || (delete Zn.animationend.animation, delete Zn.animationiteration.animation, delete Zn.animationstart.animation), "TransitionEvent" in window || delete Zn.transitionend.transition);
  function yn(t) {
    if (Qc[t]) return Qc[t];
    if (!Zn[t]) return t;
    var l = Zn[t], e;
    for (e in l)
      if (l.hasOwnProperty(e) && e in os)
        return Qc[t] = l[e];
    return t;
  }
  var rs = yn("animationend"), ss = yn("animationiteration"), ds = yn("animationstart"), Bh = yn("transitionrun"), Hh = yn("transitionstart"), Yh = yn("transitioncancel"), ys = yn("transitionend"), ms = /* @__PURE__ */ new Map(), Vc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Vc.push("scrollEnd");
  function Gl(t, l) {
    ms.set(t, l), sn(l, [t]);
  }
  var Lh = 0;
  function me(t, l) {
    if (t.name != null && t.name !== "auto") return t.name;
    if (l.autoName !== null) return l.autoName;
    t = Zl.identifierPrefix;
    var e = Lh++;
    return t = "_" + t + "t_" + e.toString(32) + "_", l.autoName = t;
  }
  function hs(t) {
    if (t == null || typeof t == "string")
      return t;
    var l = null, e = ra;
    if (e !== null)
      for (var n = 0; n < e.length; n++) {
        var a = t[e[n]];
        if (a != null) {
          if (a === "none") return "none";
          l = l == null ? a : l + (" " + a);
        }
      }
    return l ?? t.default;
  }
  function he(t, l) {
    return t = hs(t), l = hs(l), l == null ? t === "auto" ? null : t : l === "auto" ? null : l;
  }
  var wu = typeof reportError == "function" ? reportError : function(t) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var l = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
        error: t
      });
      if (!window.dispatchEvent(l)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", t);
      return;
    }
    console.error(t);
  }, Ml = [], wn = 0, Zc = 0;
  function Ku() {
    for (var t = wn, l = Zc = wn = 0; l < t; ) {
      var e = Ml[l];
      Ml[l++] = null;
      var n = Ml[l];
      Ml[l++] = null;
      var a = Ml[l];
      Ml[l++] = null;
      var u = Ml[l];
      if (Ml[l++] = null, n !== null && a !== null) {
        var c = n.pending;
        c === null ? a.next = a : (a.next = c.next, c.next = a), n.pending = a;
      }
      u !== 0 && vs(e, a, u);
    }
  }
  function Ju(t, l, e, n) {
    Ml[wn++] = t, Ml[wn++] = l, Ml[wn++] = e, Ml[wn++] = n, Zc |= n, t.lanes |= n, t = t.alternate, t !== null && (t.lanes |= n);
  }
  function wc(t, l, e, n) {
    return Ju(t, l, e, n), $u(t);
  }
  function mn(t, l) {
    return Ju(t, null, null, l), $u(t);
  }
  function vs(t, l, e) {
    t.lanes |= e;
    var n = t.alternate;
    n !== null && (n.lanes |= e);
    for (var a = !1, u = t.return; u !== null; )
      u.childLanes |= e, n = u.alternate, n !== null && (n.childLanes |= e), u.tag === 22 && (t = u.stateNode, t === null || t._visibility & 1 || (a = !0)), t = u, u = u.return;
    return t.tag === 3 ? (u = t.stateNode, a && l !== null && (a = 31 - vl(e), t = u.hiddenUpdates, n = t[a], n === null ? t[a] = [l] : n.push(l), l.lane = e | 536870912), u) : null;
  }
  function $u(t) {
    if (50 < ou)
      throw ou = 0, Yi = null, Error(r(185));
    for (var l = t.return; l !== null; )
      t = l, l = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var Kn = {};
  function qh(t, l, e, n) {
    this.tag = t, this.key = e, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = l, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ol(t, l, e, n) {
    return new qh(t, l, e, n);
  }
  function Kc(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function ve(t, l) {
    var e = t.alternate;
    return e === null ? (e = ol(
      t.tag,
      l,
      t.key,
      t.mode
    ), e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.alternate = t, t.alternate = e) : (e.pendingProps = l, e.type = t.type, e.flags = 0, e.subtreeFlags = 0, e.deletions = null), e.flags = t.flags & 1206910976, e.childLanes = t.childLanes, e.lanes = t.lanes, e.child = t.child, e.memoizedProps = t.memoizedProps, e.memoizedState = t.memoizedState, e.updateQueue = t.updateQueue, l = t.dependencies, e.dependencies = l === null ? null : { lanes: l.lanes, firstContext: l.firstContext }, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.refCleanup = t.refCleanup, e;
  }
  function gs(t, l) {
    t.flags &= 1206910978;
    var e = t.alternate;
    return e === null ? (t.childLanes = 0, t.lanes = l, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = e.childLanes, t.lanes = e.lanes, t.child = e.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = e.memoizedProps, t.memoizedState = e.memoizedState, t.updateQueue = e.updateQueue, t.type = e.type, l = e.dependencies, t.dependencies = l === null ? null : {
      lanes: l.lanes,
      firstContext: l.firstContext
    }), t;
  }
  function Wu(t, l, e, n, a, u) {
    var c = 0;
    if (n = t, typeof n == "function") Kc(n) && (c = 1);
    else if (typeof n == "string")
      c = y1(
        t,
        e,
        K.current
      ) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (n) {
        case cl:
          return t = ol(31, e, l, a), t.elementType = cl, t.lanes = u, t;
        case il:
          return hn(e.children, a, u, l);
        case tl:
          c = 8, a |= 24;
          break;
        case Jl:
          return t = ol(12, e, l, a | 2), t.elementType = Jl, t.lanes = u, t;
        case Q:
          return t = ol(13, e, l, a), t.elementType = Q, t.lanes = u, t;
        case Z:
          return t = ol(19, e, l, a), t.elementType = Z, t.lanes = u, t;
        case Ll:
        case h:
          return t = a | 32, t = ol(30, e, l, t), t.elementType = h, t.lanes = u, t.stateNode = {
            autoName: null,
            paired: null,
            clones: null,
            ref: null
          }, t;
        default:
          if (typeof n == "object" && n !== null)
            switch (n.$$typeof) {
              case Rt:
                c = 10;
                break t;
              case oe:
                c = 9;
                break t;
              case R:
                c = 11;
                break t;
              case mt:
                c = 14;
                break t;
              case rt:
                c = 16, n = null;
                break t;
            }
          c = 29, e = Error(
            r(130, t === null ? "null" : typeof t, "")
          ), n = null;
      }
    return l = ol(c, e, l, a), l.elementType = t, l.type = n, l.lanes = u, l;
  }
  function hn(t, l, e, n) {
    return t = ol(7, t, n, l), t.lanes = e, t;
  }
  function Jc(t, l, e) {
    return t = ol(6, t, null, l), t.lanes = e, t;
  }
  function Ss(t) {
    var l = ol(18, null, null, 0);
    return l.stateNode = t, l;
  }
  function $c(t, l, e) {
    return l = ol(
      4,
      t.children !== null ? t.children : [],
      t.key,
      l
    ), l.lanes = e, l.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation
    }, l;
  }
  var ps = /* @__PURE__ */ new WeakMap();
  function Rl(t, l) {
    if (typeof t == "object" && t !== null) {
      var e = ps.get(t);
      return e !== void 0 ? e : (l = {
        value: t,
        source: l,
        stack: yr(l)
      }, ps.set(t, l), l);
    }
    return {
      value: t,
      source: l,
      stack: yr(l)
    };
  }
  var Jn = [], $n = 0, Fu = null, Qa = 0, jl = [], Dl = 0, Ye = null, Fl = 1, Il = "";
  function ge(t, l) {
    Jn[$n++] = Qa, Jn[$n++] = Fu, Fu = t, Qa = l;
  }
  function bs(t, l, e) {
    jl[Dl++] = Fl, jl[Dl++] = Il, jl[Dl++] = Ye, Ye = t;
    var n = Fl;
    t = Il;
    var a = 32 - vl(n) - 1;
    n &= ~(1 << a), e += 1;
    var u = 32 - vl(l) + a;
    if (30 < u) {
      var c = a - a % 5;
      u = (n & (1 << c) - 1).toString(32), n >>= c, a -= c, Fl = 1 << 32 - vl(l) + a | e << a | n, Il = u + t;
    } else
      Fl = 1 << u | e << a | n, Il = t;
  }
  function Iu(t) {
    t.return !== null && (ge(t, 1), bs(t, 1, 0));
  }
  function Wc(t) {
    for (; t === Fu; )
      Fu = Jn[--$n], Jn[$n] = null, Qa = Jn[--$n], Jn[$n] = null;
    for (; t === Ye; )
      Ye = jl[--Dl], jl[Dl] = null, Il = jl[--Dl], jl[Dl] = null, Fl = jl[--Dl], jl[Dl] = null;
  }
  function Ts(t, l) {
    jl[Dl++] = Fl, jl[Dl++] = Il, jl[Dl++] = Ye, Fl = l.id, Il = l.overflow, Ye = t;
  }
  var qt = null, Et = null, k = !1, Le = null, Ul = !1, Fc = Error(r(519));
  function qe(t) {
    var l = Error(
      r(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Va(Rl(l, t)), Fc;
  }
  function Es(t) {
    var l = t.stateNode, e = t.type, n = t.memoizedProps;
    switch (l[Qt] = t, l[fl] = n, e) {
      case "dialog":
        lt("cancel", l), lt("close", l);
        break;
      case "iframe":
      case "object":
      case "embed":
        lt("load", l);
        break;
      case "video":
      case "audio":
        for (e = 0; e < su.length; e++)
          lt(su[e], l);
        break;
      case "source":
        lt("error", l);
        break;
      case "img":
      case "image":
      case "link":
        lt("error", l), lt("load", l);
        break;
      case "details":
        lt("toggle", l);
        break;
      case "input":
        lt("invalid", l), Ur(
          l,
          n.value,
          n.defaultValue,
          n.checked,
          n.defaultChecked,
          n.type,
          n.name,
          !0
        );
        break;
      case "select":
        lt("invalid", l);
        break;
      case "textarea":
        lt("invalid", l), Hr(l, n.value, n.defaultValue, n.children);
    }
    e = n.children, typeof e != "string" && typeof e != "number" && typeof e != "bigint" || l.textContent === "" + e || n.suppressHydrationWarning === !0 || Vy(l.textContent, e) ? (n.popover != null && (lt("beforetoggle", l), lt("toggle", l)), n.onScroll != null && lt("scroll", l), n.onScrollEnd != null && lt("scrollend", l), n.onClick != null && (l.onclick = Wl), l = !0) : l = !1, l || qe(t, !0);
  }
  function ku(t) {
    for (qt = t.return; qt; )
      switch (qt.tag) {
        case 5:
        case 31:
        case 13:
          Ul = !1;
          return;
        case 27:
        case 3:
          Ul = !0;
          return;
        default:
          qt = qt.return;
      }
  }
  function Wn(t) {
    if (t !== qt) return !1;
    if (!k) return ku(t), k = !0, !1;
    var l = t.tag, e;
    if ((e = l !== 3 && l !== 27) && ((e = l === 5) && (e = t.type, e = !(e !== "form" && e !== "button") || _o(t.type, t.memoizedProps)), e = !e), e && Et && qe(t), ku(t), l === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(317));
      Et = f0(t);
    } else if (l === 31) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(317));
      Et = f0(t);
    } else
      l === 27 ? (l = Et, ln(t.type) ? (t = Yo, Yo = null, Et = t) : Et = l) : Et = qt ? Hl(t.stateNode.nextSibling) : null;
    return !0;
  }
  function vn() {
    Et = qt = null, k = !1;
  }
  function Ic() {
    var t = Le;
    return t !== null && (dl === null ? dl = t : dl.push.apply(
      dl,
      t
    ), Le = null), t;
  }
  function Va(t) {
    Le === null ? Le = [t] : Le.push(t);
  }
  var kc = _l(null), gn = null, Se = null;
  function Ge(t, l, e) {
    St(kc, l._currentValue), l._currentValue = e;
  }
  function pe(t) {
    t._currentValue = kc.current, jt(kc);
  }
  function Pu(t, l, e) {
    for (; t !== null; ) {
      var n = t.alternate;
      if ((t.childLanes & l) !== l ? (t.childLanes |= l, n !== null && (n.childLanes |= l)) : n !== null && (n.childLanes & l) !== l && (n.childLanes |= l), t === e) break;
      t = t.return;
    }
  }
  function Pc(t, l, e, n) {
    var a = t.child;
    for (a !== null && (a.return = t); a !== null; ) {
      var u = a.dependencies;
      if (u !== null) {
        var c = a.child;
        u = u.firstContext;
        t: for (; u !== null; ) {
          var o = u;
          u = a;
          for (var d = 0; d < l.length; d++)
            if (o.context === l[d]) {
              u.lanes |= e, o = u.alternate, o !== null && (o.lanes |= e), Pu(
                u.return,
                e,
                t
              ), n || (c = null);
              break t;
            }
          u = o.next;
        }
      } else if (a.tag === 18) {
        if (c = a.return, c === null) throw Error(r(341));
        c.lanes |= e, u = c.alternate, u !== null && (u.lanes |= e), Pu(c, e, t), c = null;
      } else
        a.tag === 13 && a.memoizedState !== null && a.memoizedState.dehydrated === null ? (a.lanes |= e, c = a.alternate, c !== null && (c.lanes |= e), Pu(
          a.return,
          e,
          t
        ), c = a.child, c = c !== null ? c.sibling : null) : c = a.child;
      if (c !== null) c.return = a;
      else
        for (c = a; c !== null; ) {
          if (c === t) {
            c = null;
            break;
          }
          if (a = c.sibling, a !== null) {
            a.return = c.return, c = a;
            break;
          }
          c = c.return;
        }
      a = c;
    }
  }
  function Sn(t, l, e, n) {
    t = null;
    for (var a = l, u = !1; a !== null; ) {
      if (!u) {
        if ((a.flags & 524288) !== 0) u = !0;
        else if ((a.flags & 262144) !== 0) break;
      }
      if (a.tag === 10) {
        var c = a.alternate;
        if (c === null) throw Error(r(387));
        if (c = c.memoizedProps, c !== null) {
          var o = a.type;
          Sl(a.pendingProps.value, c.value) || (t !== null ? t.push(o) : t = [o]);
        }
      } else if (a === jn.current) {
        if (c = a.alternate, c === null) throw Error(r(387));
        c.memoizedState.memoizedState !== a.memoizedState.memoizedState && (t !== null ? t.push(ba) : t = [ba]);
      }
      a = a.return;
    }
    return t !== null && Pc(
      l,
      t,
      e,
      n
    ), l.flags |= 262144, t !== null;
  }
  function ti(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!Sl(
        t.context._currentValue,
        t.memoizedValue
      ))
        return !0;
      t = t.next;
    }
    return !1;
  }
  function pn(t) {
    gn = t, Se = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function Vt(t) {
    return xs(gn, t);
  }
  function li(t, l) {
    return gn === null && pn(t), xs(t, l);
  }
  function xs(t, l) {
    var e = l._currentValue;
    if (l = { context: l, memoizedValue: e, next: null }, Se === null) {
      if (t === null) throw Error(r(308));
      Se = l, t.dependencies = { lanes: 0, firstContext: l }, t.flags |= 524288;
    } else Se = Se.next = l;
    return e;
  }
  var Gh = typeof AbortController < "u" ? AbortController : function() {
    var t = [], l = this.signal = {
      aborted: !1,
      addEventListener: function(e, n) {
        t.push(n);
      }
    };
    this.abort = function() {
      l.aborted = !0, t.forEach(function(e) {
        return e();
      });
    };
  }, Xh = i.unstable_scheduleCallback, Qh = i.unstable_NormalPriority, Dt = {
    $$typeof: Rt,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function tf() {
    return {
      controller: new Gh(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Za(t) {
    t.refCount--, t.refCount === 0 && Xh(Qh, function() {
      t.controller.abort();
    });
  }
  function As(t, l) {
    if ((t.pendingLanes & 4194048) !== 0) {
      var e = t.transitionTypes;
      for (e === null && (e = t.transitionTypes = []), t = 0; t < l.length; t++) {
        var n = l[t];
        e.indexOf(n) === -1 && e.push(n);
      }
    }
  }
  var wa = null;
  function Vh(t) {
    var l = t.transitionTypes;
    return t.transitionTypes = null, l;
  }
  var Ka = null, lf = 0, bn = 0, Fn = null;
  function Zh(t, l) {
    if (Ka === null) {
      var e = Ka = [];
      lf = 0, bn = po(), Fn = {
        status: "pending",
        value: void 0,
        then: function(n) {
          e.push(n);
        }
      };
    }
    return lf++, l.then(zs, zs), l;
  }
  function zs() {
    if (--lf === 0 && (wa = null, Ka !== null)) {
      Fn !== null && (Fn.status = "fulfilled");
      var t = Ka;
      Ka = null, bn = 0, Fn = null;
      for (var l = 0; l < t.length; l++) (0, t[l])();
    }
  }
  function wh(t, l) {
    var e = [], n = {
      status: "pending",
      value: null,
      reason: null,
      then: function(a) {
        e.push(a);
      }
    };
    return t.then(
      function() {
        n.status = "fulfilled", n.value = l;
        for (var a = 0; a < e.length; a++) (0, e[a])(l);
      },
      function(a) {
        for (n.status = "rejected", n.reason = a, a = 0; a < e.length; a++)
          (0, e[a])(void 0);
      }
    ), n;
  }
  var Ns = Y.S;
  Y.S = function(t, l) {
    if (Sy = ml(), typeof l == "object" && l !== null && typeof l.then == "function" && Zh(t, l), wa !== null)
      for (var e = ma; e !== null; )
        As(e, wa), e = e.next;
    if (e = t.types, e !== null) {
      for (var n = ma; n !== null; )
        As(n, e), n = n.next;
      if (bn !== 0) {
        n = wa, n === null && (n = wa = []);
        for (var a = 0; a < e.length; a++) {
          var u = e[a];
          n.indexOf(u) === -1 && n.push(u);
        }
      }
    }
    Ns !== null && Ns(t, l);
  };
  var Tn = _l(null);
  function ef() {
    var t = Tn.current;
    return t !== null ? t : bt.pooledCache;
  }
  function ei(t, l) {
    l === null ? St(Tn, Tn.current) : St(Tn, l.pool);
  }
  function Os() {
    var t = ef();
    return t === null ? null : { parent: Dt._currentValue, pool: t };
  }
  var In = Error(r(460)), nf = Error(r(474)), ni = Error(r(542)), ai = { then: function() {
  } };
  function _s(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function Cs(t, l, e) {
    switch (e = t[e], e === void 0 ? t.push(l) : e !== l && (l.then(Wl, Wl), l = e), l.status) {
      case "fulfilled":
        return l.value;
      case "rejected":
        throw t = l.reason, Rs(t), t === void 0 && !("reason" in l) ? Error(r(600)) : t;
      default:
        if (typeof l.status == "string") l.then(Wl, Wl);
        else {
          if (t = bt, t !== null && 100 < t.shellSuspendCounter)
            throw Error(r(482));
          t = l, t.status = "pending", t.then(
            function(n) {
              if (l.status === "pending") {
                var a = l;
                a.status = "fulfilled", a.value = n;
              }
            },
            function(n) {
              if (l.status === "pending") {
                var a = l;
                a.status = "rejected", a.reason = n;
              }
            }
          );
        }
        switch (l.status) {
          case "fulfilled":
            return l.value;
          case "rejected":
            throw t = l.reason, Rs(t), t;
        }
        throw xn = l, In;
    }
  }
  function En(t) {
    try {
      var l = t._init;
      return l(t._payload);
    } catch (e) {
      throw e !== null && typeof e == "object" && typeof e.then == "function" ? (xn = e, In) : e;
    }
  }
  var xn = null;
  function Ms() {
    if (xn === null) throw Error(r(459));
    var t = xn;
    return xn = null, t;
  }
  function Rs(t) {
    if (t === In || t === ni)
      throw Error(r(483));
  }
  var kn = null, Ja = 0;
  function ui(t) {
    var l = Ja;
    return Ja += 1, kn === null && (kn = []), Cs(kn, t, l);
  }
  function Xe(t, l) {
    l = l.props.ref, t.ref = l !== void 0 ? l : null;
  }
  function ii(t, l) {
    throw l.$$typeof === ot ? Error(r(525)) : (t = Object.prototype.toString.call(l), Error(
      r(
        31,
        t === "[object Object]" ? "object with keys {" + Object.keys(l).join(", ") + "}" : t
      )
    ));
  }
  function js(t) {
    function l(g, y) {
      if (t) {
        var p = g.deletions;
        p === null ? (g.deletions = [y], g.flags |= 16) : p.push(y);
      }
    }
    function e(g, y) {
      if (!t) return null;
      for (; y !== null; )
        l(g, y), y = y.sibling;
      return null;
    }
    function n(g) {
      for (var y = /* @__PURE__ */ new Map(); g !== null; )
        g.key === null ? y.set(g.index, g) : y.set(g.key, g), g = g.sibling;
      return y;
    }
    function a(g, y) {
      return g = ve(g, y), g.index = 0, g.sibling = null, g;
    }
    function u(g, y, p) {
      return g.index = p, t ? (p = g.alternate, p !== null ? (p = p.index, p < y ? (g.flags |= 2, y) : p) : (g.flags |= 134217730, y)) : (g.flags |= 1048576, y);
    }
    function c(g) {
      return t && g.alternate === null && (g.flags |= 134217730), g;
    }
    function o(g, y, p, z) {
      return y === null || y.tag !== 6 ? (y = Jc(p, g.mode, z), y.return = g, y) : (y = a(y, p), y.return = g, y);
    }
    function d(g, y, p, z) {
      var U = p.type;
      return U === il ? (g = x(
        g,
        y,
        p.props.children,
        z,
        p.key
      ), Xe(g, p), g) : y !== null && (y.elementType === U || typeof U == "object" && U !== null && U.$$typeof === rt && En(U) === y.type) ? (y = a(y, p.props), Xe(y, p), y.return = g, y) : (y = Wu(
        p.type,
        p.key,
        p.props,
        null,
        g.mode,
        z
      ), Xe(y, p), y.return = g, y);
    }
    function S(g, y, p, z) {
      return y === null || y.tag !== 4 || y.stateNode.containerInfo !== p.containerInfo || y.stateNode.implementation !== p.implementation ? (y = $c(p, g.mode, z), y.return = g, y) : (y = a(y, p.children || []), y.return = g, y);
    }
    function x(g, y, p, z, U) {
      return y === null || y.tag !== 7 ? (y = hn(
        p,
        g.mode,
        z,
        U
      ), y.return = g, y) : (y = a(y, p), y.return = g, y);
    }
    function N(g, y, p) {
      if (typeof y == "string" && y !== "" || typeof y == "number" || typeof y == "bigint")
        return y = Jc(
          "" + y,
          g.mode,
          p
        ), y.return = g, y;
      if (typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case Ol:
            return p = Wu(
              y.type,
              y.key,
              y.props,
              null,
              g.mode,
              p
            ), Xe(p, y), p.return = g, p;
          case ul:
            return y = $c(
              y,
              g.mode,
              p
            ), y.return = g, y;
          case rt:
            return y = En(y), N(g, y, p);
        }
        if (ct(y) || q(y))
          return y = hn(
            y,
            g.mode,
            p,
            null
          ), y.return = g, y;
        if (typeof y.then == "function")
          return N(g, ui(y), p);
        if (y.$$typeof === Rt)
          return N(
            g,
            li(g, y),
            p
          );
        ii(g, y);
      }
      return null;
    }
    function v(g, y, p, z) {
      var U = y !== null ? y.key : null;
      if (typeof p == "string" && p !== "" || typeof p == "number" || typeof p == "bigint")
        return U !== null ? null : o(g, y, "" + p, z);
      if (typeof p == "object" && p !== null) {
        switch (p.$$typeof) {
          case Ol:
            return p.key === U ? d(g, y, p, z) : null;
          case ul:
            return p.key === U ? S(g, y, p, z) : null;
          case rt:
            return p = En(p), v(g, y, p, z);
        }
        if (ct(p) || q(p))
          return U !== null ? null : x(g, y, p, z, null);
        if (typeof p.then == "function")
          return v(
            g,
            y,
            ui(p),
            z
          );
        if (p.$$typeof === Rt)
          return v(
            g,
            y,
            li(g, p),
            z
          );
        ii(g, p);
      }
      return null;
    }
    function E(g, y, p, z, U) {
      if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint")
        return g = g.get(p) || null, o(y, g, "" + z, U);
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case Ol:
            return g = g.get(
              z.key === null ? p : z.key
            ) || null, d(y, g, z, U);
          case ul:
            return g = g.get(
              z.key === null ? p : z.key
            ) || null, S(y, g, z, U);
          case rt:
            return z = En(z), E(
              g,
              y,
              p,
              z,
              U
            );
        }
        if (ct(z) || q(z))
          return g = g.get(p) || null, x(y, g, z, U, null);
        if (typeof z.then == "function")
          return E(
            g,
            y,
            p,
            ui(z),
            U
          );
        if (z.$$typeof === Rt)
          return E(
            g,
            y,
            p,
            li(y, z),
            U
          );
        ii(y, z);
      }
      return null;
    }
    function M(g, y, p, z) {
      for (var U = null, at = null, G = y, V = y = 0, Ht = null; G !== null && V < p.length; V++) {
        G.index > V ? (Ht = G, G = null) : Ht = G.sibling;
        var ft = v(
          g,
          G,
          p[V],
          z
        );
        if (ft === null) {
          G === null && (G = Ht);
          break;
        }
        t && G && ft.alternate === null && l(g, G), y = u(ft, y, V), at === null ? U = ft : at.sibling = ft, at = ft, G = Ht;
      }
      if (V === p.length)
        return e(g, G), k && ge(g, V), U;
      if (G === null) {
        for (; V < p.length; V++)
          G = N(g, p[V], z), G !== null && (y = u(
            G,
            y,
            V
          ), at === null ? U = G : at.sibling = G, at = G);
        return k && ge(g, V), U;
      }
      for (G = n(G); V < p.length; V++)
        Ht = E(
          G,
          g,
          V,
          p[V],
          z
        ), Ht !== null && (t && (ft = Ht.alternate, ft !== null && G.delete(ft.key === null ? V : ft.key)), y = u(
          Ht,
          y,
          V
        ), at === null ? U = Ht : at.sibling = Ht, at = Ht);
      return t && G.forEach(function(cn) {
        return l(g, cn);
      }), k && ge(g, V), U;
    }
    function H(g, y, p, z) {
      if (p == null) throw Error(r(151));
      for (var U = null, at = null, G = y, V = y = 0, Ht = null, ft = p.next(); G !== null && !ft.done; V++, ft = p.next()) {
        G.index > V ? (Ht = G, G = null) : Ht = G.sibling;
        var cn = v(g, G, ft.value, z);
        if (cn === null) {
          G === null && (G = Ht);
          break;
        }
        t && G && cn.alternate === null && l(g, G), y = u(cn, y, V), at === null ? U = cn : at.sibling = cn, at = cn, G = Ht;
      }
      if (ft.done)
        return e(g, G), k && ge(g, V), U;
      if (G === null) {
        for (; !ft.done; V++, ft = p.next())
          ft = N(g, ft.value, z), ft !== null && (y = u(ft, y, V), at === null ? U = ft : at.sibling = ft, at = ft);
        return k && ge(g, V), U;
      }
      for (G = n(G); !ft.done; V++, ft = p.next())
        ft = E(G, g, V, ft.value, z), ft !== null && (t && (Ht = ft.alternate, Ht !== null && G.delete(
          Ht.key === null ? V : Ht.key
        )), y = u(ft, y, V), at === null ? U = ft : at.sibling = ft, at = ft);
      return t && G.forEach(function(z1) {
        return l(g, z1);
      }), k && ge(g, V), U;
    }
    function F(g, y, p, z) {
      if (typeof p == "object" && p !== null && p.type === il && p.key === null && p.props.ref === void 0 && (p = p.props.children), typeof p == "object" && p !== null) {
        switch (p.$$typeof) {
          case Ol:
            t: {
              for (var U = p.key; y !== null; ) {
                if (y.key === U) {
                  if (U = p.type, U === il) {
                    if (y.tag === 7) {
                      e(
                        g,
                        y.sibling
                      ), z = a(
                        y,
                        p.props.children
                      ), Xe(z, p), z.return = g, g = z;
                      break t;
                    }
                  } else if (y.elementType === U || typeof U == "object" && U !== null && U.$$typeof === rt && En(U) === y.type) {
                    e(
                      g,
                      y.sibling
                    ), z = a(y, p.props), Xe(z, p), z.return = g, g = z;
                    break t;
                  }
                  e(g, y);
                  break;
                } else l(g, y);
                y = y.sibling;
              }
              p.type === il ? (z = hn(
                p.props.children,
                g.mode,
                z,
                p.key
              ), Xe(z, p), z.return = g, g = z) : (z = Wu(
                p.type,
                p.key,
                p.props,
                null,
                g.mode,
                z
              ), Xe(z, p), z.return = g, g = z);
            }
            return c(g);
          case ul:
            t: {
              for (U = p.key; y !== null; ) {
                if (y.key === U)
                  if (y.tag === 4 && y.stateNode.containerInfo === p.containerInfo && y.stateNode.implementation === p.implementation) {
                    e(
                      g,
                      y.sibling
                    ), z = a(y, p.children || []), z.return = g, g = z;
                    break t;
                  } else {
                    e(g, y);
                    break;
                  }
                else l(g, y);
                y = y.sibling;
              }
              z = $c(p, g.mode, z), z.return = g, g = z;
            }
            return c(g);
          case rt:
            return p = En(p), F(
              g,
              y,
              p,
              z
            );
        }
        if (ct(p))
          return M(
            g,
            y,
            p,
            z
          );
        if (q(p)) {
          if (U = q(p), typeof U != "function") throw Error(r(150));
          return p = U.call(p), H(
            g,
            y,
            p,
            z
          );
        }
        if (typeof p.then == "function")
          return F(
            g,
            y,
            ui(p),
            z
          );
        if (p.$$typeof === Rt)
          return F(
            g,
            y,
            li(g, p),
            z
          );
        ii(g, p);
      }
      return typeof p == "string" && p !== "" || typeof p == "number" || typeof p == "bigint" ? (p = "" + p, y !== null && y.tag === 6 ? (e(g, y.sibling), z = a(y, p), z.return = g, g = z) : (e(g, y), z = Jc(p, g.mode, z), z.return = g, g = z), c(g)) : e(g, y);
    }
    return function(g, y, p, z) {
      try {
        Ja = 0;
        var U = F(
          g,
          y,
          p,
          z
        );
        return kn = null, U;
      } catch (G) {
        if (G === In || G === ni) throw G;
        var at = ol(29, G, null, g.mode);
        return at.lanes = z, at.return = g, at;
      }
    };
  }
  var An = js(!0), Ds = js(!1), Qe = !1;
  function af(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function uf(t, l) {
    t = t.updateQueue, l.updateQueue === t && (l.updateQueue = {
      baseState: t.baseState,
      firstBaseUpdate: t.firstBaseUpdate,
      lastBaseUpdate: t.lastBaseUpdate,
      shared: t.shared,
      callbacks: null
    });
  }
  function Ve(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Ze(t, l, e) {
    var n = t.updateQueue;
    if (n === null) return null;
    if (n = n.shared, (dt & 2) !== 0) {
      var a = n.pending;
      return a === null ? l.next = l : (l.next = a.next, a.next = l), n.pending = l, l = $u(t), vs(t, null, e), l;
    }
    return Ju(t, n, l, e), $u(t);
  }
  function $a(t, l, e) {
    if (l = l.updateQueue, l !== null && (l = l.shared, (e & 4194048) !== 0)) {
      var n = l.lanes;
      n &= t.pendingLanes, e |= n, l.lanes = e, br(t, e);
    }
  }
  function cf(t, l) {
    var e = t.updateQueue, n = t.alternate;
    if (n !== null && (n = n.updateQueue, e === n)) {
      var a = null, u = null;
      if (e = e.firstBaseUpdate, e !== null) {
        do {
          var c = {
            lane: e.lane,
            tag: e.tag,
            payload: e.payload,
            callback: null,
            next: null
          };
          u === null ? a = u = c : u = u.next = c, e = e.next;
        } while (e !== null);
        u === null ? a = u = l : u = u.next = l;
      } else a = u = l;
      e = {
        baseState: n.baseState,
        firstBaseUpdate: a,
        lastBaseUpdate: u,
        shared: n.shared,
        callbacks: n.callbacks
      }, t.updateQueue = e;
      return;
    }
    t = e.lastBaseUpdate, t === null ? e.firstBaseUpdate = l : t.next = l, e.lastBaseUpdate = l;
  }
  var ff = !1;
  function Wa() {
    if (ff) {
      var t = Fn;
      if (t !== null) throw t;
    }
  }
  function Fa(t, l, e, n) {
    ff = !1;
    var a = t.updateQueue;
    Qe = !1;
    var u = a.firstBaseUpdate, c = a.lastBaseUpdate, o = a.shared.pending;
    if (o !== null) {
      a.shared.pending = null;
      var d = o, S = d.next;
      d.next = null, c === null ? u = S : c.next = S, c = d;
      var x = t.alternate;
      x !== null && (x = x.updateQueue, o = x.lastBaseUpdate, o !== c && (o === null ? x.firstBaseUpdate = S : o.next = S, x.lastBaseUpdate = d));
    }
    if (u !== null) {
      var N = a.baseState;
      c = 0, x = S = d = null, o = u;
      do {
        var v = o.lane & -536870913, E = v !== o.lane;
        if (E ? (nt & v) === v : (n & v) === v) {
          v !== 0 && v === bn && (ff = !0), x !== null && (x = x.next = {
            lane: 0,
            tag: o.tag,
            payload: o.payload,
            callback: null,
            next: null
          });
          t: {
            var M = t, H = o;
            v = l;
            var F = e;
            switch (H.tag) {
              case 1:
                if (M = H.payload, typeof M == "function") {
                  N = M.call(F, N, v);
                  break t;
                }
                N = M;
                break t;
              case 3:
                M.flags = M.flags & -65537 | 128;
              case 0:
                if (M = H.payload, v = typeof M == "function" ? M.call(F, N, v) : M, v == null) break t;
                N = I({}, N, v);
                break t;
              case 2:
                Qe = !0;
            }
          }
          v = o.callback, v !== null && (t.flags |= 64, E && (t.flags |= 8192), E = a.callbacks, E === null ? a.callbacks = [v] : E.push(v));
        } else
          E = {
            lane: v,
            tag: o.tag,
            payload: o.payload,
            callback: o.callback,
            next: null
          }, x === null ? (S = x = E, d = N) : x = x.next = E, c |= v;
        if (o = o.next, o === null) {
          if (o = a.shared.pending, o === null)
            break;
          E = o, o = E.next, E.next = null, a.lastBaseUpdate = E, a.shared.pending = null;
        }
      } while (!0);
      x === null && (d = N), a.baseState = d, a.firstBaseUpdate = S, a.lastBaseUpdate = x, u === null && (a.shared.lanes = 0), Ie |= c, t.lanes = c, t.memoizedState = N;
    }
  }
  function Us(t, l) {
    if (typeof t != "function")
      throw Error(r(191, t));
    t.call(l);
  }
  function Bs(t, l) {
    var e = t.callbacks;
    if (e !== null)
      for (t.callbacks = null, t = 0; t < e.length; t++)
        Us(e[t], l);
  }
  var we = _l(null), ci = _l(0);
  function Hs(t, l) {
    t = Ae, St(ci, t), St(we, l), Ae = t | l.baseLanes;
  }
  function of() {
    St(ci, Ae), St(we, we.current);
  }
  function rf() {
    Ae = ci.current, jt(we), jt(ci);
  }
  var Zt = _l(null), It = null;
  function Ke(t) {
    var l = t.alternate;
    St(wt, wt.current & 1), St(Zt, t), It === null && (l === null || we.current !== null || l.memoizedState !== null) && (It = t);
  }
  function sf(t) {
    St(wt, wt.current), St(Zt, t), It === null && (It = t);
  }
  function Ys(t) {
    t.tag === 22 ? (St(wt, wt.current), St(Zt, t), It === null && (It = t)) : Je();
  }
  function Je() {
    St(wt, wt.current), St(Zt, Zt.current);
  }
  function pl(t) {
    jt(Zt), It === t && (It = null), jt(wt);
  }
  var wt = _l(0);
  function Ia(t, l) {
    St(Zt, Zt.current), St(wt, l);
  }
  function df(t) {
    jt(wt), jt(Zt), It === t && (It = null);
  }
  function fi(t) {
    for (var l = t; l !== null; ) {
      if (l.tag === 13) {
        var e = l.memoizedState;
        if (e !== null && (e = e.dehydrated, e === null || Bo(e) || Ho(e)))
          return l;
      } else if (l.tag === 19 && l.memoizedProps.revealOrder !== "independent") {
        if ((l.flags & 128) !== 0) return l;
      } else if (l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === t) break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === t) return null;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
    return null;
  }
  var be = 0, W = null, pt = null, Ut = null, oi = !1, Pn = !1, zn = !1, ri = 0, ka = 0, ta = null, Kh = 0;
  function _t() {
    throw Error(r(321));
  }
  function yf(t, l) {
    if (l === null) return !1;
    for (var e = 0; e < l.length && e < t.length; e++)
      if (!Sl(t[e], l[e])) return !1;
    return !0;
  }
  function mf(t, l, e, n, a, u) {
    return be = u, W = l, l.memoizedState = null, l.updateQueue = null, l.lanes = 0, Y.H = t === null || t.memoizedState === null ? bd : Td, zn = !1, u = e(n, a), zn = !1, Pn && (u = qs(
      l,
      e,
      n,
      a
    )), Ls(t), u;
  }
  function Ls(t) {
    Y.H = gi;
    var l = pt !== null && pt.next !== null;
    if (be = 0, Ut = pt = W = null, oi = !1, ka = 0, ta = null, l) throw Error(r(300));
    t === null || Bt || (t = t.dependencies, t !== null && ti(t) && (Bt = !0));
  }
  function qs(t, l, e, n) {
    W = t;
    var a = 0;
    do {
      if (Pn && (ta = null), ka = 0, Pn = !1, 25 <= a) throw Error(r(301));
      if (a += 1, Ut = pt = null, t.updateQueue != null) {
        var u = t.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      Y.H = tv, u = l(e, n);
    } while (Pn);
    return u;
  }
  function Jh() {
    var t = Y.H, l = t.useState()[0];
    return l = typeof l.then == "function" ? Pa(l) : l, t = t.useState()[0], (pt !== null ? pt.memoizedState : null) !== t && (W.flags |= 1024), l;
  }
  function hf() {
    var t = ri !== 0;
    return ri = 0, t;
  }
  function vf(t, l, e) {
    l.updateQueue = t.updateQueue, l.flags &= -2053, t.lanes &= ~e;
  }
  function gf(t) {
    if (oi) {
      for (t = t.memoizedState; t !== null; ) {
        var l = t.queue;
        l !== null && (l.pending = null), t = t.next;
      }
      oi = !1;
    }
    be = 0, Ut = pt = W = null, Pn = !1, ka = ri = 0, ta = null;
  }
  function el() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Ut === null ? W.memoizedState = Ut = t : Ut = Ut.next = t, Ut;
  }
  function Mt() {
    if (pt === null) {
      var t = W.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = pt.next;
    var l = Ut === null ? W.memoizedState : Ut.next;
    if (l !== null)
      Ut = l, pt = t;
    else {
      if (t === null)
        throw W.alternate === null ? Error(r(467)) : Error(r(310));
      pt = t, t = {
        memoizedState: pt.memoizedState,
        baseState: pt.baseState,
        baseQueue: pt.baseQueue,
        queue: pt.queue,
        next: null
      }, Ut === null ? W.memoizedState = Ut = t : Ut = Ut.next = t;
    }
    return Ut;
  }
  function si() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Pa(t) {
    var l = ka;
    return ka += 1, ta === null && (ta = []), t = Cs(ta, t, l), l = W, (Ut === null ? l.memoizedState : Ut.next) === null && (l = l.alternate, Y.H = l === null || l.memoizedState === null ? bd : Td), t;
  }
  function di(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return Pa(t);
      if (t.$$typeof === O) return;
      if (t.$$typeof === Rt) return Vt(t);
    }
    throw Error(r(438, String(t)));
  }
  function Sf(t) {
    var l = null, e = W.updateQueue;
    if (e !== null && (l = e.memoCache), l == null) {
      var n = W.alternate;
      n !== null && (n = n.updateQueue, n !== null && (n = n.memoCache, n != null && (l = {
        data: n.data.map(function(a) {
          return a.slice();
        }),
        index: 0
      })));
    }
    if (l == null && (l = { data: [], index: 0 }), e === null && (e = si(), W.updateQueue = e), e.memoCache = l, e = l.data[l.index], e === void 0)
      for (e = l.data[l.index] = Array(t), n = 0; n < t; n++)
        e[n] = re;
    return l.index++, e;
  }
  function Te(t, l) {
    return typeof l == "function" ? l(t) : l;
  }
  function yi(t) {
    var l = Mt();
    return pf(l, pt, t);
  }
  function pf(t, l, e) {
    var n = t.queue;
    if (n === null) throw Error(r(311));
    n.lastRenderedReducer = e;
    var a = t.baseQueue, u = n.pending;
    if (u !== null) {
      if (a !== null) {
        var c = a.next;
        a.next = u.next, u.next = c;
      }
      l.baseQueue = a = u, n.pending = null;
    }
    if (u = t.baseState, a === null) t.memoizedState = u;
    else {
      l = a.next;
      var o = c = null, d = null, S = l, x = !1;
      do {
        var N = S.lane & -536870913;
        if (N !== S.lane ? (nt & N) === N : (be & N) === N) {
          var v = S.revertLane;
          if (v === 0)
            d !== null && (d = d.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: S.action,
              hasEagerState: S.hasEagerState,
              eagerState: S.eagerState,
              next: null
            }), N === bn && (x = !0);
          else if ((be & v) === v) {
            S = S.next, v === bn && (x = !0);
            continue;
          } else
            N = {
              lane: 0,
              revertLane: S.revertLane,
              gesture: null,
              action: S.action,
              hasEagerState: S.hasEagerState,
              eagerState: S.eagerState,
              next: null
            }, d === null ? (o = d = N, c = u) : d = d.next = N, W.lanes |= v, Ie |= v;
          N = S.action, zn && e(u, N), u = S.hasEagerState ? S.eagerState : e(u, N);
        } else
          v = {
            lane: N,
            revertLane: S.revertLane,
            gesture: S.gesture,
            action: S.action,
            hasEagerState: S.hasEagerState,
            eagerState: S.eagerState,
            next: null
          }, d === null ? (o = d = v, c = u) : d = d.next = v, W.lanes |= N, Ie |= N;
        S = S.next;
      } while (S !== null && S !== l);
      if (d === null ? c = u : d.next = o, !Sl(u, t.memoizedState) && (Bt = !0, x && (e = Fn, e !== null)))
        throw e;
      t.memoizedState = u, t.baseState = c, t.baseQueue = d, n.lastRenderedState = u;
    }
    return a === null && (n.lanes = 0), [t.memoizedState, n.dispatch];
  }
  function bf(t) {
    var l = Mt(), e = l.queue;
    if (e === null) throw Error(r(311));
    e.lastRenderedReducer = t;
    var n = e.dispatch, a = e.pending, u = l.memoizedState;
    if (a !== null) {
      e.pending = null;
      var c = a = a.next;
      do
        u = t(u, c.action), c = c.next;
      while (c !== a);
      Sl(u, l.memoizedState) || (Bt = !0), l.memoizedState = u, l.baseQueue === null && (l.baseState = u), e.lastRenderedState = u;
    }
    return [u, n];
  }
  function Gs(t, l, e) {
    var n = W, a = Mt(), u = k;
    if (u) {
      if (e === void 0) throw Error(r(407));
      e = e();
    } else e = l();
    var c = !Sl(
      (pt || a).memoizedState,
      e
    );
    if (c && (a.memoizedState = e, Bt = !0), a = a.queue, xf(Vs.bind(null, n, a, t), [
      t
    ]), t = a.getSnapshot !== l || c || Ut !== null && (Ut.memoizedState.tag & 1) !== 0, la(
      t ? 9 : 8,
      { destroy: void 0 },
      Qs.bind(null, n, a, e, l),
      null
    ), t) {
      if (n.flags |= 2048, bt === null) throw Error(r(349));
      u || (be & 127) !== 0 || Xs(n, l, e);
    }
    return e;
  }
  function Xs(t, l, e) {
    t.flags |= 16384, t = { getSnapshot: l, value: e }, l = W.updateQueue, l === null ? (l = si(), W.updateQueue = l, l.stores = [t]) : (e = l.stores, e === null ? l.stores = [t] : e.push(t));
  }
  function Qs(t, l, e, n) {
    l.value = e, l.getSnapshot = n, Zs(l) && ws(t);
  }
  function Vs(t, l, e) {
    return e(function() {
      Zs(l) && ws(t);
    });
  }
  function Zs(t) {
    var l = t.getSnapshot;
    t = t.value;
    try {
      var e = l();
      return !Sl(t, e);
    } catch {
      return !0;
    }
  }
  function ws(t) {
    var l = mn(t, 2);
    l !== null && yl(l, t, 2);
  }
  function Tf(t) {
    var l = el();
    if (typeof t == "function") {
      var e = t;
      if (t = e(), zn) {
        Ue(!0);
        try {
          e();
        } finally {
          Ue(!1);
        }
      }
    }
    return l.memoizedState = l.baseState = t, l.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Te,
      lastRenderedState: t
    }, l;
  }
  function Ks(t, l, e, n) {
    return t.baseState = e, pf(
      t,
      pt,
      typeof n == "function" ? n : Te
    );
  }
  function $h(t, l, e, n, a) {
    if (vi(t)) throw Error(r(485));
    if (t = l.action, t !== null) {
      var u = {
        payload: a,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(c) {
          u.listeners.push(c);
        }
      };
      Y.T !== null ? e(!0) : u.isTransition = !1, n(u), e = l.pending, e === null ? (u.next = l.pending = u, Js(l, u)) : (u.next = e.next, l.pending = e.next = u);
    }
  }
  function Js(t, l) {
    var e = l.action, n = l.payload, a = t.state;
    if (l.isTransition) {
      var u = Y.T, c = {};
      c.types = u !== null ? u.types : null, Y.T = c;
      try {
        var o = e(a, n), d = Y.S;
        d !== null && d(c, o), $s(t, l, o);
      } catch (S) {
        Ef(t, l, S);
      } finally {
        u !== null && c.types !== null && (u.types = c.types), Y.T = u;
      }
    } else
      try {
        u = e(a, n), $s(t, l, u);
      } catch (S) {
        Ef(t, l, S);
      }
  }
  function $s(t, l, e) {
    e !== null && typeof e == "object" && typeof e.then == "function" ? e.then(
      function(n) {
        Ws(t, l, n);
      },
      function(n) {
        return Ef(t, l, n);
      }
    ) : Ws(t, l, e);
  }
  function Ws(t, l, e) {
    l.status = "fulfilled", l.value = e, Fs(l), t.state = e, l = t.pending, l !== null && (e = l.next, e === l ? t.pending = null : (e = e.next, l.next = e, Js(t, e)));
  }
  function Ef(t, l, e) {
    var n = t.pending;
    if (t.pending = null, n !== null) {
      n = n.next;
      do
        l.status = "rejected", l.reason = e, Fs(l), l = l.next;
      while (l !== n);
    }
    t.action = null;
  }
  function Fs(t) {
    t = t.listeners;
    for (var l = 0; l < t.length; l++) (0, t[l])();
  }
  function Is(t, l) {
    return l;
  }
  function ks(t, l) {
    if (k) {
      var e = bt.formState;
      if (e !== null) {
        t: {
          var n = W;
          if (k) {
            if (Et) {
              l: {
                for (var a = Et, u = Ul; a.nodeType !== 8; ) {
                  if (!u) {
                    a = null;
                    break l;
                  }
                  if (a = Hl(
                    a.nextSibling
                  ), a === null) {
                    a = null;
                    break l;
                  }
                }
                u = a.data, a = u === "F!" || u === "F" ? a : null;
              }
              if (a) {
                Et = Hl(
                  a.nextSibling
                ), n = a.data === "F!";
                break t;
              }
            }
            qe(n);
          }
          n = !1;
        }
        n && (l = e[0]);
      }
    }
    return e = el(), e.memoizedState = e.baseState = l, n = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Is,
      lastRenderedState: l
    }, e.queue = n, e = gd.bind(
      null,
      W,
      n
    ), n.dispatch = e, n = Tf(!1), u = _f.bind(
      null,
      W,
      !1,
      n.queue
    ), n = el(), a = {
      state: l,
      dispatch: null,
      action: t,
      pending: null
    }, n.queue = a, e = $h.bind(
      null,
      W,
      a,
      u,
      e
    ), a.dispatch = e, n.memoizedState = t, [l, e, !1];
  }
  function Ps(t) {
    var l = Mt();
    return td(l, pt, t);
  }
  function td(t, l, e) {
    if (l = pf(
      t,
      l,
      Is
    )[0], t = yi(Te)[0], typeof l == "object" && l !== null && typeof l.then == "function")
      try {
        var n = Pa(l);
      } catch (c) {
        throw c === In ? ni : c;
      }
    else n = l;
    l = Mt();
    var a = l.queue, u = a.dispatch;
    return e !== l.memoizedState && (W.flags |= 2048, la(
      9,
      { destroy: void 0 },
      Wh.bind(null, a, e),
      null
    )), [n, u, t];
  }
  function Wh(t, l) {
    t.action = l;
  }
  function ld(t) {
    var l = Mt(), e = pt;
    if (e !== null)
      return td(l, e, t);
    Mt(), l = l.memoizedState, e = Mt();
    var n = e.queue.dispatch;
    return e.memoizedState = t, [l, n, !1];
  }
  function la(t, l, e, n) {
    return t = { tag: t, create: e, deps: n, inst: l, next: null }, l = W.updateQueue, l === null && (l = si(), W.updateQueue = l), e = l.lastEffect, e === null ? l.lastEffect = t.next = t : (n = e.next, e.next = t, t.next = n, l.lastEffect = t), t;
  }
  function ed() {
    return Mt().memoizedState;
  }
  function mi(t, l, e, n) {
    var a = el();
    W.flags |= t, a.memoizedState = la(
      1 | l,
      { destroy: void 0 },
      e,
      n === void 0 ? null : n
    );
  }
  function hi(t, l, e, n) {
    var a = Mt();
    n = n === void 0 ? null : n;
    var u = a.memoizedState.inst;
    pt !== null && n !== null && yf(n, pt.memoizedState.deps) ? a.memoizedState = la(l, u, e, n) : (W.flags |= t, a.memoizedState = la(
      1 | l,
      u,
      e,
      n
    ));
  }
  function nd(t, l) {
    mi(8390656, 8, t, l);
  }
  function xf(t, l) {
    hi(2048, 8, t, l);
  }
  function Fh(t) {
    W.flags |= 4;
    var l = W.updateQueue;
    if (l === null)
      l = si(), W.updateQueue = l, l.events = [t];
    else {
      var e = l.events;
      e === null ? l.events = [t] : e.push(t);
    }
  }
  function ad(t) {
    var l = Mt().memoizedState;
    return Fh({ ref: l, nextImpl: t }), function() {
      if ((dt & 2) !== 0) throw Error(r(440));
      return l.impl.apply(void 0, arguments);
    };
  }
  function ud(t, l) {
    return hi(4, 2, t, l);
  }
  function id(t, l) {
    return hi(4, 4, t, l);
  }
  function cd(t, l) {
    if (typeof l == "function") {
      t = t();
      var e = l(t);
      return function() {
        typeof e == "function" ? e() : l(null);
      };
    }
    if (l != null)
      return t = t(), l.current = t, function() {
        l.current = null;
      };
  }
  function fd(t, l, e) {
    e = e != null ? e.concat([t]) : null, hi(4, 4, cd.bind(null, l, t), e);
  }
  function Af() {
  }
  function od(t, l) {
    var e = Mt();
    l = l === void 0 ? null : l;
    var n = e.memoizedState;
    return l !== null && yf(l, n[1]) ? n[0] : (e.memoizedState = [t, l], t);
  }
  function rd(t, l) {
    var e = Mt();
    l = l === void 0 ? null : l;
    var n = e.memoizedState;
    if (l !== null && yf(l, n[1]))
      return n[0];
    if (n = t(), zn) {
      Ue(!0);
      try {
        t();
      } finally {
        Ue(!1);
      }
    }
    return e.memoizedState = [n, l], n;
  }
  function zf(t, l, e) {
    return e === void 0 || (be & 1073741824) !== 0 && (nt & 261930) === 0 ? t.memoizedState = l : (t.memoizedState = e, t = by(), W.lanes |= t, Ie |= t, e);
  }
  function sd(t, l, e, n) {
    return Sl(e, l) ? e : we.current !== null ? (t = zf(t, e, n), Sl(t, l) || (Bt = !0), t) : (be & 106) === 0 || (be & 1073741824) !== 0 && (nt & 261930) === 0 ? (Bt = !0, t.memoizedState = e) : (t = by(), W.lanes |= t, Ie |= t, l);
  }
  function dd(t, l, e, n, a) {
    var u = X.p;
    X.p = u !== 0 && 8 > u ? u : 8;
    var c = Y.T, o = {};
    o.types = c !== null ? c.types : null, Y.T = o, _f(t, !1, l, e);
    try {
      var d = a(), S = Y.S;
      if (S !== null && S(o, d), d !== null && typeof d == "object" && typeof d.then == "function") {
        var x = wh(
          d,
          n
        );
        tu(
          t,
          l,
          x,
          xl(t)
        );
      } else
        tu(
          t,
          l,
          n,
          xl(t)
        );
    } catch (N) {
      tu(
        t,
        l,
        { then: function() {
        }, status: "rejected", reason: N },
        xl()
      );
    } finally {
      X.p = u, c !== null && o.types !== null && (c.types = o.types), Y.T = c;
    }
  }
  function Ih() {
  }
  function Nf(t, l, e, n) {
    if (t.tag !== 5) throw Error(r(476));
    var a = yd(t).queue;
    dd(
      t,
      a,
      l,
      ql,
      e === null ? Ih : function() {
        return md(t), e(n);
      }
    );
  }
  function yd(t) {
    var l = t.memoizedState;
    if (l !== null) return l;
    l = {
      memoizedState: ql,
      baseState: ql,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Te,
        lastRenderedState: ql
      },
      next: null
    };
    var e = {};
    return l.next = {
      memoizedState: e,
      baseState: e,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Te,
        lastRenderedState: e
      },
      next: null
    }, t.memoizedState = l, t = t.alternate, t !== null && (t.memoizedState = l), l;
  }
  function md(t) {
    var l = yd(t);
    l.next === null && (l = t.alternate.memoizedState), tu(
      t,
      l.next.queue,
      {},
      xl()
    );
  }
  function Of() {
    return Vt(ba);
  }
  function hd() {
    return Mt().memoizedState;
  }
  function vd() {
    return Mt().memoizedState;
  }
  function kh(t) {
    for (var l = t.return; l !== null; ) {
      switch (l.tag) {
        case 24:
        case 3:
          var e = xl();
          t = Ve(e);
          var n = Ze(l, t, e);
          n !== null && (yl(n, l, e), $a(n, l, e)), l = { cache: tf() }, t.payload = l;
          return;
      }
      l = l.return;
    }
  }
  function Ph(t, l, e) {
    var n = xl();
    e = {
      lane: n,
      revertLane: 0,
      gesture: null,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, vi(t) ? Sd(l, e) : (e = wc(t, l, e, n), e !== null && (yl(e, t, n), pd(e, l, n)));
  }
  function gd(t, l, e) {
    var n = xl();
    tu(t, l, e, n);
  }
  function tu(t, l, e, n) {
    var a = {
      lane: n,
      revertLane: 0,
      gesture: null,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (vi(t)) Sd(l, a);
    else {
      var u = t.alternate;
      if (t.lanes === 0 && (u === null || u.lanes === 0) && (u = l.lastRenderedReducer, u !== null))
        try {
          var c = l.lastRenderedState, o = u(c, e);
          if (a.hasEagerState = !0, a.eagerState = o, Sl(o, c))
            return Ju(t, l, a, 0), bt === null && Ku(), !1;
        } catch {
        }
      if (e = wc(t, l, a, n), e !== null)
        return yl(e, t, n), pd(e, l, n), !0;
    }
    return !1;
  }
  function _f(t, l, e, n) {
    if (n = {
      lane: 2,
      revertLane: po(),
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, vi(t)) {
      if (l) throw Error(r(479));
    } else
      l = wc(
        t,
        e,
        n,
        2
      ), l !== null && yl(l, t, 2);
  }
  function vi(t) {
    var l = t.alternate;
    return t === W || l !== null && l === W;
  }
  function Sd(t, l) {
    Pn = oi = !0;
    var e = t.pending;
    e === null ? l.next = l : (l.next = e.next, e.next = l), t.pending = l;
  }
  function pd(t, l, e) {
    if ((e & 4194048) !== 0) {
      var n = l.lanes;
      n &= t.pendingLanes, e |= n, l.lanes = e, br(t, e);
    }
  }
  var gi = {
    readContext: Vt,
    use: di,
    useCallback: _t,
    useContext: _t,
    useEffect: _t,
    useImperativeHandle: _t,
    useLayoutEffect: _t,
    useInsertionEffect: _t,
    useMemo: _t,
    useReducer: _t,
    useRef: _t,
    useState: _t,
    useDebugValue: _t,
    useDeferredValue: _t,
    useTransition: _t,
    useSyncExternalStore: _t,
    useId: _t,
    useHostTransitionStatus: _t,
    useFormState: _t,
    useActionState: _t,
    useOptimistic: _t,
    useMemoCache: _t,
    useCacheRefresh: _t,
    useEffectEvent: _t
  }, bd = {
    readContext: Vt,
    use: di,
    useCallback: function(t, l) {
      return el().memoizedState = [
        t,
        l === void 0 ? null : l
      ], t;
    },
    useContext: Vt,
    useEffect: nd,
    useImperativeHandle: function(t, l, e) {
      e = e != null ? e.concat([t]) : null, mi(
        4194308,
        4,
        cd.bind(null, l, t),
        e
      );
    },
    useLayoutEffect: function(t, l) {
      return mi(4194308, 4, t, l);
    },
    useInsertionEffect: function(t, l) {
      mi(4, 2, t, l);
    },
    useMemo: function(t, l) {
      var e = el();
      l = l === void 0 ? null : l;
      var n = t();
      if (zn) {
        Ue(!0);
        try {
          t();
        } finally {
          Ue(!1);
        }
      }
      return e.memoizedState = [n, l], n;
    },
    useReducer: function(t, l, e) {
      var n = el();
      if (e !== void 0) {
        var a = e(l);
        if (zn) {
          Ue(!0);
          try {
            e(l);
          } finally {
            Ue(!1);
          }
        }
      } else a = l;
      return n.memoizedState = n.baseState = a, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: a
      }, n.queue = t, t = t.dispatch = Ph.bind(
        null,
        W,
        t
      ), [n.memoizedState, t];
    },
    useRef: function(t) {
      var l = el();
      return t = { current: t }, l.memoizedState = t;
    },
    useState: function(t) {
      t = Tf(t);
      var l = t.queue, e = gd.bind(null, W, l);
      return l.dispatch = e, [t.memoizedState, e];
    },
    useDebugValue: Af,
    useDeferredValue: function(t, l) {
      var e = el();
      return zf(e, t, l);
    },
    useTransition: function() {
      var t = Tf(!1);
      return t = dd.bind(
        null,
        W,
        t.queue,
        !0,
        !1
      ), el().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, l, e) {
      var n = W, a = el();
      if (k) {
        if (e === void 0)
          throw Error(r(407));
        e = e();
      } else {
        if (e = l(), bt === null)
          throw Error(r(349));
        (nt & 127) !== 0 || Xs(n, l, e);
      }
      a.memoizedState = e;
      var u = { value: e, getSnapshot: l };
      return a.queue = u, nd(Vs.bind(null, n, u, t), [
        t
      ]), n.flags |= 2048, la(
        9,
        { destroy: void 0 },
        Qs.bind(
          null,
          n,
          u,
          e,
          l
        ),
        null
      ), e;
    },
    useId: function() {
      var t = el(), l = bt.identifierPrefix;
      if (k) {
        var e = Il, n = Fl;
        e = (n & ~(1 << 32 - vl(n) - 1)).toString(32) + e, l = "_" + l + "R_" + e, e = ri++, 0 < e && (l += "H" + e.toString(32)), l += "_";
      } else
        e = Kh++, l = "_" + l + "r_" + e.toString(32) + "_";
      return t.memoizedState = l;
    },
    useHostTransitionStatus: Of,
    useFormState: ks,
    useActionState: ks,
    useOptimistic: function(t) {
      var l = el();
      l.memoizedState = l.baseState = t;
      var e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return l.queue = e, l = _f.bind(
        null,
        W,
        !0,
        e
      ), e.dispatch = l, [t, l];
    },
    useMemoCache: Sf,
    useCacheRefresh: function() {
      return el().memoizedState = kh.bind(
        null,
        W
      );
    },
    useEffectEvent: function(t) {
      var l = el(), e = { impl: t };
      return l.memoizedState = e, function() {
        if ((dt & 2) !== 0)
          throw Error(r(440));
        return e.impl.apply(void 0, arguments);
      };
    }
  }, Td = {
    readContext: Vt,
    use: di,
    useCallback: od,
    useContext: Vt,
    useEffect: xf,
    useImperativeHandle: fd,
    useInsertionEffect: ud,
    useLayoutEffect: id,
    useMemo: rd,
    useReducer: yi,
    useRef: ed,
    useState: function() {
      return yi(Te);
    },
    useDebugValue: Af,
    useDeferredValue: function(t, l) {
      var e = Mt();
      return sd(
        e,
        pt.memoizedState,
        t,
        l
      );
    },
    useTransition: function() {
      var t = yi(Te)[0], l = Mt().memoizedState;
      return [
        typeof t == "boolean" ? t : Pa(t),
        l
      ];
    },
    useSyncExternalStore: Gs,
    useId: hd,
    useHostTransitionStatus: Of,
    useFormState: Ps,
    useActionState: Ps,
    useOptimistic: function(t, l) {
      var e = Mt();
      return Ks(e, pt, t, l);
    },
    useMemoCache: Sf,
    useCacheRefresh: vd,
    useEffectEvent: ad
  }, tv = {
    readContext: Vt,
    use: di,
    useCallback: od,
    useContext: Vt,
    useEffect: xf,
    useImperativeHandle: fd,
    useInsertionEffect: ud,
    useLayoutEffect: id,
    useMemo: rd,
    useReducer: bf,
    useRef: ed,
    useState: function() {
      return bf(Te);
    },
    useDebugValue: Af,
    useDeferredValue: function(t, l) {
      var e = Mt();
      return pt === null ? zf(e, t, l) : sd(
        e,
        pt.memoizedState,
        t,
        l
      );
    },
    useTransition: function() {
      var t = bf(Te)[0], l = Mt().memoizedState;
      return [
        typeof t == "boolean" ? t : Pa(t),
        l
      ];
    },
    useSyncExternalStore: Gs,
    useId: hd,
    useHostTransitionStatus: Of,
    useFormState: ld,
    useActionState: ld,
    useOptimistic: function(t, l) {
      var e = Mt();
      return pt !== null ? Ks(e, pt, t, l) : (e.baseState = t, [t, e.queue.dispatch]);
    },
    useMemoCache: Sf,
    useCacheRefresh: vd,
    useEffectEvent: ad
  };
  function Cf(t, l, e, n) {
    l = t.memoizedState, e = e(n, l), e = e == null ? l : I({}, l, e), t.memoizedState = e, t.lanes === 0 && (t.updateQueue.baseState = e);
  }
  var Mf = {
    enqueueSetState: function(t, l, e) {
      t = t._reactInternals;
      var n = xl(), a = Ve(n);
      a.payload = l, e != null && (a.callback = e), l = Ze(t, a, n), l !== null && (yl(l, t, n), $a(l, t, n));
    },
    enqueueReplaceState: function(t, l, e) {
      t = t._reactInternals;
      var n = xl(), a = Ve(n);
      a.tag = 1, a.payload = l, e != null && (a.callback = e), l = Ze(t, a, n), l !== null && (yl(l, t, n), $a(l, t, n));
    },
    enqueueForceUpdate: function(t, l) {
      t = t._reactInternals;
      var e = xl(), n = Ve(e);
      n.tag = 2, l != null && (n.callback = l), l = Ze(t, n, e), l !== null && (yl(l, t, e), $a(l, t, e));
    }
  };
  function Ed(t, l, e, n, a, u, c) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(n, u, c) : l.prototype && l.prototype.isPureReactComponent ? !Ga(e, n) || !Ga(a, u) : !0;
  }
  function xd(t, l, e, n) {
    t = l.state, typeof l.componentWillReceiveProps == "function" && l.componentWillReceiveProps(e, n), typeof l.UNSAFE_componentWillReceiveProps == "function" && l.UNSAFE_componentWillReceiveProps(e, n), l.state !== t && Mf.enqueueReplaceState(l, l.state, null);
  }
  function Nn(t, l) {
    var e = l;
    if ("ref" in l) {
      e = {};
      for (var n in l)
        n !== "ref" && (e[n] = l[n]);
    }
    if (t = t.defaultProps) {
      e === l && (e = I({}, e));
      for (var a in t)
        e[a] === void 0 && (e[a] = t[a]);
    }
    return e;
  }
  function Ad(t) {
    wu(t);
  }
  function zd(t) {
    console.error(t);
  }
  function Nd(t) {
    wu(t);
  }
  function Si(t, l) {
    try {
      var e = t.onUncaughtError;
      e(l.value, { componentStack: l.stack });
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  function Od(t, l, e) {
    try {
      var n = t.onCaughtError;
      n(e.value, {
        componentStack: e.stack,
        errorBoundary: l.tag === 1 ? l.stateNode : null
      });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function Rf(t, l, e) {
    return e = Ve(e), e.tag = 3, e.payload = { element: null }, e.callback = function() {
      Si(t, l);
    }, e;
  }
  function _d(t) {
    return t = Ve(t), t.tag = 3, t;
  }
  function Cd(t, l, e, n) {
    var a = e.type.getDerivedStateFromError;
    if (typeof a == "function") {
      var u = n.value;
      t.payload = function() {
        return a(u);
      }, t.callback = function() {
        Od(l, e, n);
      };
    }
    var c = e.stateNode;
    c !== null && typeof c.componentDidCatch == "function" && (t.callback = function() {
      Od(l, e, n), typeof a != "function" && (ke === null ? ke = /* @__PURE__ */ new Set([this]) : ke.add(this));
      var o = n.stack;
      this.componentDidCatch(n.value, {
        componentStack: o !== null ? o : ""
      });
    });
  }
  function lv(t, l, e, n, a) {
    if (e.flags |= 32768, n !== null && typeof n == "object" && typeof n.then == "function") {
      if (l = e.alternate, l !== null && Sn(
        l,
        e,
        a,
        !0
      ), e = Zt.current, e !== null) {
        switch (e.tag) {
          case 31:
          case 13:
          case 19:
            return It === null ? qi() : e.alternate === null && Ct === 0 && (Ct = 3), e.flags &= -257, e.flags |= 65536, e.lanes = a, n === ai ? e.flags |= 16384 : (l = e.updateQueue, l === null ? e.updateQueue = /* @__PURE__ */ new Set([n]) : l.add(n), vo(t, n, a)), !1;
          case 22:
            return e.flags |= 65536, n === ai ? e.flags |= 16384 : (l = e.updateQueue, l === null ? (l = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([n])
            }, e.updateQueue = l) : (e = l.retryQueue, e === null ? l.retryQueue = /* @__PURE__ */ new Set([n]) : e.add(n)), vo(t, n, a)), !1;
        }
        throw Error(r(435, e.tag));
      }
      return vo(t, n, a), qi(), !1;
    }
    if (k)
      return l = Zt.current, l !== null ? ((l.flags & 65536) === 0 && (l.flags |= 256), l.flags |= 65536, l.lanes = a, n !== Fc && (t = Error(r(422), { cause: n }), Va(Rl(t, e)))) : (n !== Fc && (l = Error(r(423), {
        cause: n
      }), Va(
        Rl(l, e)
      )), t = t.current.alternate, t.flags |= 65536, a &= -a, t.lanes |= a, n = Rl(n, e), a = Rf(
        t.stateNode,
        n,
        a
      ), cf(t, a), Ct !== 4 && (Ct = 2)), !1;
    var u = Error(r(520), { cause: n });
    if (u = Rl(u, e), fu === null ? fu = [u] : fu.push(u), Ct !== 4 && (Ct = 2), l === null) return !0;
    n = Rl(n, e), e = l;
    do {
      switch (e.tag) {
        case 3:
          return e.flags |= 65536, t = a & -a, e.lanes |= t, t = Rf(e.stateNode, n, t), cf(e, t), !1;
        case 1:
          if (l = e.type, u = e.stateNode, (e.flags & 128) === 0 && (typeof l.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (ke === null || !ke.has(u))))
            return e.flags |= 65536, a &= -a, e.lanes |= a, a = _d(a), Cd(
              a,
              t,
              e,
              n
            ), cf(e, a), !1;
          break;
        case 22:
          if (e.memoizedState !== null)
            return e.flags |= 65536, !1;
      }
      e = e.return;
    } while (e !== null);
    return !1;
  }
  var jf = Error(r(461)), Bt = !1;
  function Yt(t, l, e, n) {
    l.child = t === null ? Ds(l, null, e, n) : An(
      l,
      t.child,
      e,
      n
    );
  }
  function Md(t, l, e, n, a) {
    e = e.render;
    var u = l.ref;
    if ("ref" in n) {
      var c = {};
      for (var o in n)
        o !== "ref" && (c[o] = n[o]);
    } else c = n;
    return pn(l), n = mf(
      t,
      l,
      e,
      c,
      u,
      a
    ), o = hf(), t !== null && !Bt ? (vf(t, l, a), Ee(t, l, a)) : (k && o && Iu(l), l.flags |= 1, Yt(t, l, n, a), l.child);
  }
  function Rd(t, l, e, n, a) {
    if (t === null) {
      var u = e.type;
      return typeof u == "function" && !Kc(u) && u.defaultProps === void 0 && e.compare === null ? (l.tag = 15, l.type = u, jd(
        t,
        l,
        u,
        n,
        a
      )) : (t = Wu(
        e.type,
        null,
        n,
        l,
        l.mode,
        a
      ), t.ref = l.ref, t.return = l, l.child = t);
    }
    if (u = t.child, !Gf(t, a)) {
      var c = u.memoizedProps;
      if (e = e.compare, e = e !== null ? e : Ga, e(c, n) && t.ref === l.ref)
        return Ee(t, l, a);
    }
    return l.flags |= 1, t = ve(u, n), t.ref = l.ref, t.return = l, l.child = t;
  }
  function jd(t, l, e, n, a) {
    if (t !== null) {
      var u = t.memoizedProps;
      if (Ga(u, n) && t.ref === l.ref)
        if (Bt = !1, l.pendingProps = n = u, Gf(t, a))
          (t.flags & 131072) !== 0 && (Bt = !0);
        else
          return l.lanes = t.lanes, Ee(t, l, a);
    }
    return Df(
      t,
      l,
      e,
      n,
      a
    );
  }
  function Dd(t, l, e, n) {
    var a = n.children, u = t !== null ? t.memoizedState : null;
    if (t === null && l.stateNode === null && (l.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), n.mode === "hidden") {
      if ((l.flags & 128) !== 0) {
        if (u = u !== null ? u.baseLanes | e : e, t !== null) {
          for (n = l.child = t.child, a = 0; n !== null; )
            a = a | n.lanes | n.childLanes, n = n.sibling;
          n = a & ~u;
        } else n = 0, l.child = null;
        return Ud(
          t,
          l,
          u,
          e,
          n
        );
      }
      if ((e & 536870912) !== 0)
        l.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && ei(
          l,
          u !== null ? u.cachePool : null
        ), u !== null ? Hs(l, u) : of(), Ys(l);
      else
        return n = l.lanes = 536870912, Ud(
          t,
          l,
          u !== null ? u.baseLanes | e : e,
          e,
          n
        );
    } else
      u !== null ? (ei(l, u.cachePool), Hs(l, u), Je(), l.memoizedState = null) : (t !== null && ei(l, null), of(), Je());
    return Yt(t, l, a, e), l.child;
  }
  function lu(t, l) {
    return t !== null && t.tag === 22 || l.stateNode !== null || (l.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), l.sibling;
  }
  function Ud(t, l, e, n, a) {
    var u = ef();
    return u = u === null ? null : { parent: Dt._currentValue, pool: u }, l.memoizedState = {
      baseLanes: e,
      cachePool: u
    }, t !== null && ei(l, null), of(), Ys(l), t !== null && Sn(t, l, n, !0), l.childLanes = a, null;
  }
  function pi(t, l) {
    return l = bi(
      { mode: l.mode, children: l.children },
      t.mode
    ), l.ref = t.ref, t.child = l, l.return = t, l;
  }
  function Bd(t, l, e) {
    return An(l, t.child, null, e), t = pi(l, l.pendingProps), t.flags |= 2, pl(l), l.memoizedState = null, t;
  }
  function ev(t, l, e) {
    var n = l.pendingProps, a = (l.flags & 128) !== 0;
    if (l.flags &= -129, t === null) {
      if (k) {
        if (n.mode === "hidden")
          return t = pi(l, n), l.lanes = 536870912, t.memoizedState = { baseLanes: 0, cachePool: null }, lu(null, t);
        if (sf(l), (t = Et) ? (t = c0(
          t,
          Ul
        ), t = t !== null && t.data === "&" ? t : null, t !== null && (l.memoizedState = {
          dehydrated: t,
          treeContext: Ye !== null ? { id: Fl, overflow: Il } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, e = Ss(t), e.return = l, l.child = e, qt = l, Et = null)) : t = null, t === null) throw qe(l);
        return l.lanes = 536870912, null;
      }
      return pi(l, n);
    }
    var u = t.memoizedState;
    if (u !== null) {
      var c = u.dehydrated;
      if (sf(l), a)
        if (l.flags & 256)
          l.flags &= -257, l = Bd(
            t,
            l,
            e
          );
        else if (l.memoizedState !== null)
          l.child = t.child, l.flags |= 128, l = null;
        else throw Error(r(558));
      else if (Bt || Sn(t, l, e, !1), a = (e & t.childLanes) !== 0, Bt || a) {
        if (we.current === null) {
          if (n = bt, n !== null && (c = Tr(n, e), c !== 0 && c !== u.retryLane))
            throw u.retryLane = c, mn(t, c), yl(n, t, c), jf;
          qi();
        }
        l = Bd(
          t,
          l,
          e
        );
      } else
        t = u.treeContext, Et = Hl(c.nextSibling), qt = l, k = !0, Le = null, Ul = !1, t !== null && Ts(l, t), l = pi(l, n), l.flags |= 134221824;
      return l;
    }
    return t = ve(t.child, {
      mode: n.mode,
      children: n.children
    }), t.ref = l.ref, l.child = t, t.return = l, t;
  }
  function ea(t, l) {
    var e = l.ref;
    if (e === null)
      t !== null && t.ref !== null && (l.flags |= 4194816);
    else {
      if (typeof e != "function" && typeof e != "object")
        throw Error(r(284));
      (t === null || t.ref !== e) && (l.flags |= 4194816);
    }
  }
  function Df(t, l, e, n, a) {
    return pn(l), e = mf(
      t,
      l,
      e,
      n,
      void 0,
      a
    ), n = hf(), t !== null && !Bt ? (vf(t, l, a), Ee(t, l, a)) : (k && n && Iu(l), l.flags |= 1, Yt(t, l, e, a), l.child);
  }
  function Hd(t, l, e, n, a, u) {
    return pn(l), l.updateQueue = null, e = qs(
      l,
      n,
      e,
      a
    ), Ls(t), n = hf(), t !== null && !Bt ? (vf(t, l, u), Ee(t, l, u)) : (k && n && Iu(l), l.flags |= 1, Yt(t, l, e, u), l.child);
  }
  function Yd(t, l, e, n, a) {
    if (pn(l), l.stateNode === null) {
      var u = Kn, c = e.contextType;
      typeof c == "object" && c !== null && (u = Vt(c)), u = new e(n, u), l.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = Mf, l.stateNode = u, u._reactInternals = l, u = l.stateNode, u.props = n, u.state = l.memoizedState, u.refs = {}, af(l), c = e.contextType, u.context = typeof c == "object" && c !== null ? Vt(c) : Kn, u.state = l.memoizedState, c = e.getDerivedStateFromProps, typeof c == "function" && (Cf(
        l,
        e,
        c,
        n
      ), u.state = l.memoizedState), typeof e.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (c = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), c !== u.state && Mf.enqueueReplaceState(u, u.state, null), Fa(l, n, u, a), Wa(), u.state = l.memoizedState), typeof u.componentDidMount == "function" && (l.flags |= 4194308), n = !0;
    } else if (t === null) {
      u = l.stateNode;
      var o = l.memoizedProps, d = Nn(e, o);
      u.props = d;
      var S = u.context, x = e.contextType;
      c = Kn, typeof x == "object" && x !== null && (c = Vt(x));
      var N = e.getDerivedStateFromProps;
      x = typeof N == "function" || typeof u.getSnapshotBeforeUpdate == "function", o = l.pendingProps !== o, x || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (o || S !== c) && xd(
        l,
        u,
        n,
        c
      ), Qe = !1;
      var v = l.memoizedState;
      u.state = v, Fa(l, n, u, a), Wa(), S = l.memoizedState, o || v !== S || Qe ? (typeof N == "function" && (Cf(
        l,
        e,
        N,
        n
      ), S = l.memoizedState), (d = Qe || Ed(
        l,
        e,
        d,
        n,
        v,
        S,
        c
      )) ? (x || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (l.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (l.flags |= 4194308), l.memoizedProps = n, l.memoizedState = S), u.props = n, u.state = S, u.context = c, n = d) : (typeof u.componentDidMount == "function" && (l.flags |= 4194308), n = !1);
    } else {
      u = l.stateNode, uf(t, l), c = l.memoizedProps, x = Nn(e, c), u.props = x, N = l.pendingProps, v = u.context, S = e.contextType, d = Kn, typeof S == "object" && S !== null && (d = Vt(S)), o = e.getDerivedStateFromProps, (S = typeof o == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (c !== N || v !== d) && xd(
        l,
        u,
        n,
        d
      ), Qe = !1, v = l.memoizedState, u.state = v, Fa(l, n, u, a), Wa();
      var E = l.memoizedState;
      c !== N || v !== E || Qe || t !== null && t.dependencies !== null && ti(t.dependencies) ? (typeof o == "function" && (Cf(
        l,
        e,
        o,
        n
      ), E = l.memoizedState), (x = Qe || Ed(
        l,
        e,
        x,
        n,
        v,
        E,
        d
      ) || t !== null && t.dependencies !== null && ti(t.dependencies)) ? (S || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(n, E, d), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(
        n,
        E,
        d
      )), typeof u.componentDidUpdate == "function" && (l.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (l.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || c === t.memoizedProps && v === t.memoizedState || (l.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || c === t.memoizedProps && v === t.memoizedState || (l.flags |= 1024), l.memoizedProps = n, l.memoizedState = E), u.props = n, u.state = E, u.context = d, n = x) : (typeof u.componentDidUpdate != "function" || c === t.memoizedProps && v === t.memoizedState || (l.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || c === t.memoizedProps && v === t.memoizedState || (l.flags |= 1024), n = !1);
    }
    return u = n, ea(t, l), n = (l.flags & 128) !== 0, u || n ? (u = l.stateNode, e = n && typeof e.getDerivedStateFromError != "function" ? null : u.render(), l.flags |= 1, t !== null && n ? (l.child = An(
      l,
      t.child,
      null,
      a
    ), l.child = An(
      l,
      null,
      e,
      a
    )) : Yt(t, l, e, a), l.memoizedState = u.state, t = l.child) : t = Ee(
      t,
      l,
      a
    ), t;
  }
  function Ld(t, l, e, n) {
    return vn(), l.flags |= 256, Yt(t, l, e, n), l.child;
  }
  var Uf = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Bf(t) {
    return { baseLanes: t, cachePool: Os() };
  }
  function Hf(t, l, e) {
    return t = t !== null ? t.childLanes & ~e : 0, l && (t |= El), t;
  }
  function qd(t, l, e) {
    var n = l.pendingProps, a = !1, u = (l.flags & 128) !== 0, c;
    if ((c = u) || (c = t !== null && t.memoizedState === null ? !1 : (wt.current & 2) !== 0), c && (a = !0, l.flags &= -129), c = (l.flags & 32) !== 0, l.flags &= -33, t === null) {
      if (k) {
        if (a ? Ke(l) : Je(), (t = Et) ? (t = c0(
          t,
          Ul
        ), t = t !== null && t.data !== "&" ? t : null, t !== null && (l.memoizedState = {
          dehydrated: t,
          treeContext: Ye !== null ? { id: Fl, overflow: Il } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, e = Ss(t), e.return = l, l.child = e, qt = l, Et = null)) : t = null, t === null) throw qe(l);
        return Ho(t) ? l.lanes = 32 : l.lanes = 536870912, null;
      }
      return u = n.children, n = n.fallback, a ? (Je(), a = l.mode, u = bi(
        { mode: "hidden", children: u },
        a
      ), n = hn(
        n,
        a,
        e,
        null
      ), u.return = l, n.return = l, u.sibling = n, l.child = u, n = l.child, n.memoizedState = Bf(e), n.childLanes = Hf(
        t,
        c,
        e
      ), l.memoizedState = Uf, lu(null, n)) : (Ke(l), Yf(l, u));
    }
    var o = t.memoizedState;
    if (o !== null) {
      var d = o.dehydrated;
      if (d !== null)
        return nv(
          t,
          l,
          u,
          c,
          n,
          d,
          o,
          e
        );
    }
    return a ? (Je(), a = n.fallback, u = l.mode, o = t.child, d = o.sibling, n = ve(o, {
      mode: "hidden",
      children: n.children
    }), n.subtreeFlags = o.subtreeFlags & 1206910976, d !== null ? a = ve(d, a) : (a = hn(
      a,
      u,
      e,
      null
    ), a.flags |= 2), a.return = l, n.return = l, n.sibling = a, l.child = n, lu(null, n), n = l.child, a = t.child.memoizedState, a === null ? a = Bf(e) : (u = a.cachePool, u !== null ? (o = Dt._currentValue, u = u.parent !== o ? { parent: o, pool: o } : u) : u = Os(), a = {
      baseLanes: a.baseLanes | e,
      cachePool: u
    }), n.memoizedState = a, n.childLanes = Hf(
      t,
      c,
      e
    ), l.memoizedState = Uf, lu(t.child, n)) : (Ke(l), e = t.child, t = e.sibling, e = ve(e, {
      mode: "visible",
      children: n.children
    }), e.return = l, e.sibling = null, t !== null && (c = l.deletions, c === null ? (l.deletions = [t], l.flags |= 16) : c.push(t)), l.child = e, l.memoizedState = null, e);
  }
  function Yf(t, l) {
    return l = bi(
      { mode: "visible", children: l },
      t.mode
    ), l.return = t, t.child = l;
  }
  function bi(t, l) {
    return t = ol(22, t, null, l), t.lanes = 0, t;
  }
  function Ti(t, l, e) {
    return An(l, t.child, null, e), t = Yf(
      l,
      l.pendingProps.children
    ), t.flags |= 2, l.memoizedState = null, t;
  }
  function nv(t, l, e, n, a, u, c, o) {
    if (e)
      return l.flags & 256 ? (Ke(l), l.flags &= -257, Ti(
        t,
        l,
        o
      )) : l.memoizedState !== null ? (Je(), l.child = t.child, l.flags |= 128, null) : (Je(), u = a.fallback, c = l.mode, a = bi(
        { mode: "visible", children: a.children },
        c
      ), u = hn(
        u,
        c,
        o,
        null
      ), u.flags |= 2, a.return = l, u.return = l, a.sibling = u, l.child = a, An(l, t.child, null, o), a = l.child, a.memoizedState = Bf(o), a.childLanes = Hf(
        t,
        n,
        o
      ), l.memoizedState = Uf, lu(null, a));
    if (Ke(l), Ho(u)) {
      if (n = u.nextSibling && u.nextSibling.dataset, n) var d = n.dgst;
      return n = d, n !== "" && (a = Error(r(419)), a.stack = "", a.digest = n, Va({ value: a, source: null, stack: null })), Ti(
        t,
        l,
        o
      );
    }
    if (Bt || Sn(t, l, o, !1), n = (o & t.childLanes) !== 0, Bt || n) {
      if (we.current !== null)
        return Ti(
          t,
          l,
          o
        );
      if (n = bt, n !== null && (a = Tr(
        n,
        o
      ), a !== 0 && a !== c.retryLane))
        throw c.retryLane = a, mn(t, a), yl(n, t, a), jf;
      return Bo(u) || qi(), Ti(
        t,
        l,
        o
      );
    }
    return Bo(u) ? (l.flags |= 192, l.child = t.child, null) : (t = c.treeContext, Et = Hl(u.nextSibling), qt = l, k = !0, Le = null, Ul = !1, t !== null && Ts(l, t), l = Yf(
      l,
      a.children
    ), l.flags |= 134221824, l);
  }
  function Gd(t, l, e) {
    t.lanes |= l;
    var n = t.alternate;
    n !== null && (n.lanes |= l), Pu(t.return, l, e);
  }
  function Xd(t) {
    for (var l = null; t !== null; ) {
      var e = t.alternate;
      e !== null && fi(e) === null && (l = t), t = t.sibling;
    }
    return l;
  }
  function Ei(t, l, e, n, a, u) {
    var c = t.memoizedState;
    c === null ? t.memoizedState = {
      isBackwards: l,
      rendering: null,
      renderingStartTime: 0,
      last: n,
      tail: e,
      tailMode: a,
      treeForkCount: u
    } : (c.isBackwards = l, c.rendering = null, c.renderingStartTime = 0, c.last = n, c.tail = e, c.tailMode = a, c.treeForkCount = u);
  }
  function Lf(t) {
    var l = t.child;
    for (t.child = null; l !== null; ) {
      var e = l.sibling;
      l.sibling = t.child, t.child = l, l = e;
    }
  }
  function qf(t, l, e) {
    var n = l.pendingProps, a = n.revealOrder, u = n.tail;
    n = n.children;
    var c = wt.current;
    if (l.flags & 128)
      return Ia(l, c), null;
    var o = (c & 2) !== 0;
    if (o ? (c = c & 1 | 2, l.flags |= 128) : c &= 1, Ia(l, c), a === "backwards" && t !== null ? (Lf(t), Yt(t, l, n, e), Lf(t)) : Yt(t, l, n, e), n = k ? Qa : 0, !o && t !== null && (t.flags & 128) !== 0)
      t: for (t = l.child; t !== null; ) {
        if (t.tag === 13)
          t.memoizedState !== null && Gd(t, e, l);
        else if (t.tag === 19)
          Gd(t, e, l);
        else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === l) break t;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === l)
            break t;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    switch (a) {
      case "backwards":
        e = Xd(l.child), e === null ? (a = l.child, l.child = null) : (a = e.sibling, e.sibling = null, Lf(l)), Ei(
          l,
          !0,
          a,
          null,
          u,
          n
        );
        break;
      case "unstable_legacy-backwards":
        for (e = null, a = l.child, l.child = null; a !== null; ) {
          if (t = a.alternate, t !== null && fi(t) === null) {
            l.child = a;
            break;
          }
          t = a.sibling, a.sibling = e, e = a, a = t;
        }
        Ei(
          l,
          !0,
          e,
          null,
          u,
          n
        );
        break;
      case "together":
        Ei(
          l,
          !1,
          null,
          null,
          void 0,
          n
        );
        break;
      case "independent":
        l.memoizedState = null;
        break;
      default:
        e = Xd(l.child), e === null ? (a = l.child, l.child = null) : (a = e.sibling, e.sibling = null), Ei(
          l,
          !1,
          a,
          e,
          u,
          n
        );
    }
    return l.child;
  }
  function Qd(t, l, e) {
    var n = l.pendingProps;
    return Ge(l, l.type, n.value), Yt(t, l, n.children, e), l.child;
  }
  function Ee(t, l, e) {
    if (t !== null && (l.dependencies = t.dependencies), Ie |= l.lanes, (e & l.childLanes) === 0)
      if (t !== null) {
        if (Sn(
          t,
          l,
          e,
          !1
        ), (e & l.childLanes) === 0)
          return null;
      } else return null;
    if (t !== null && l.child !== t.child)
      throw Error(r(153));
    if (l.child !== null) {
      for (t = l.child, e = ve(t, t.pendingProps), l.child = e, e.return = l; t.sibling !== null; )
        t = t.sibling, e = e.sibling = ve(t, t.pendingProps), e.return = l;
      e.sibling = null;
    }
    return l.child;
  }
  function Gf(t, l) {
    return (t.lanes & l) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && ti(t)));
  }
  function av(t, l, e) {
    switch (l.tag) {
      case 3:
        Ou(l, l.stateNode.containerInfo), Ge(l, Dt, t.memoizedState.cache), vn();
        break;
      case 27:
      case 5:
        dc(l);
        break;
      case 4:
        Ou(l, l.stateNode.containerInfo);
        break;
      case 10:
        Ge(
          l,
          l.type,
          l.memoizedProps.value
        );
        break;
      case 31:
        if (l.memoizedState !== null)
          return l.flags |= 128, sf(l), null;
        break;
      case 13:
        var n = l.memoizedState;
        if (n !== null) {
          if (n.dehydrated !== null)
            return Ke(l), l.flags |= 128, null;
          n = Sn(
            t,
            l,
            e,
            !1
          );
          var a = l.child.childLanes;
          return n || (e & a) !== 0 ? qd(t, l, e) : (Ke(l), t = Ee(
            t,
            l,
            e
          ), t !== null ? t.sibling : null);
        }
        Ke(l);
        break;
      case 19:
        if (l.flags & 128)
          return qf(
            t,
            l,
            e
          );
        if (a = (t.flags & 128) !== 0, n = (e & l.childLanes) !== 0, n || (Sn(
          t,
          l,
          e,
          !1
        ), n = (e & l.childLanes) !== 0), a) {
          if (n)
            return qf(
              t,
              l,
              e
            );
          l.flags |= 128;
        }
        if (a = l.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), Ia(l, wt.current), n) break;
        return null;
      case 22:
        return l.lanes = 0, Dd(
          t,
          l,
          e,
          l.pendingProps
        );
      case 24:
        Ge(l, Dt, t.memoizedState.cache);
    }
    return Ee(t, l, e);
  }
  function Vd(t, l, e) {
    if (t !== null)
      if (t.memoizedProps !== l.pendingProps)
        Bt = !0;
      else {
        if (!Gf(t, e) && (l.flags & 128) === 0)
          return Bt = !1, av(
            t,
            l,
            e
          );
        Bt = (t.flags & 131072) !== 0;
      }
    else
      Bt = !1, k && (l.flags & 1048576) !== 0 && bs(l, Qa, l.index);
    switch (l.lanes = 0, l.tag) {
      case 16:
        t: {
          var n = l.pendingProps;
          if (t = En(l.elementType), l.type = t, typeof t == "function")
            Kc(t) ? (n = Nn(t, n), l.tag = 1, l = Yd(
              null,
              l,
              t,
              n,
              e
            )) : (l.tag = 0, l = Df(
              null,
              l,
              t,
              n,
              e
            ));
          else {
            if (t != null) {
              var a = t.$$typeof;
              if (a === R) {
                l.tag = 11, l = Md(
                  null,
                  l,
                  t,
                  n,
                  e
                );
                break t;
              } else if (a === mt) {
                l.tag = 14, l = Rd(
                  null,
                  l,
                  t,
                  n,
                  e
                );
                break t;
              } else if (a === Rt) {
                l.tag = 10, l.type = t, l = Qd(
                  null,
                  l,
                  e
                );
                break t;
              }
            }
            throw l = it(t) || t, Error(r(306, l, ""));
          }
        }
        return l;
      case 0:
        return Df(
          t,
          l,
          l.type,
          l.pendingProps,
          e
        );
      case 1:
        return n = l.type, a = Nn(
          n,
          l.pendingProps
        ), Yd(
          t,
          l,
          n,
          a,
          e
        );
      case 3:
        t: {
          if (Ou(
            l,
            l.stateNode.containerInfo
          ), t === null) throw Error(r(387));
          n = l.pendingProps;
          var u = l.memoizedState;
          a = u.element, uf(t, l), Fa(l, n, null, e);
          var c = l.memoizedState;
          if (n = c.cache, Ge(l, Dt, n), n !== u.cache && Pc(
            l,
            [Dt],
            e,
            !0
          ), Wa(), n = c.element, u.isDehydrated)
            if (u = {
              element: n,
              isDehydrated: !1,
              cache: c.cache
            }, l.updateQueue.baseState = u, l.memoizedState = u, l.flags & 256) {
              l = Ld(
                t,
                l,
                n,
                e
              );
              break t;
            } else if (n !== a) {
              a = Rl(
                Error(r(424)),
                l
              ), Va(a), l = Ld(
                t,
                l,
                n,
                e
              );
              break t;
            } else
              for (t = l.stateNode.containerInfo, t.nodeType === 9 ? t = t.body : t = t.nodeName === "HTML" ? t.ownerDocument.body : t, Et = Hl(t.firstChild), qt = l, k = !0, Le = null, Ul = !0, e = Ds(
                l,
                null,
                n,
                e
              ), l.child = e; e; )
                e.flags = e.flags & -3 | 134221824, e = e.sibling;
          else {
            if (vn(), n === a) {
              l = Ee(
                t,
                l,
                e
              );
              break t;
            }
            Yt(t, l, n, e);
          }
          l = l.child;
        }
        return l;
      case 26:
        return ea(t, l), t === null ? (e = m0(
          l.type,
          null,
          l.pendingProps,
          null
        )) ? l.memoizedState = e : k || (l.stateNode = Jy(
          l.type,
          l.pendingProps,
          $l.current,
          l
        )) : l.memoizedState = m0(
          l.type,
          t.memoizedProps,
          l.pendingProps,
          t.memoizedState
        ), null;
      case 27:
        return dc(l), t === null && k && (n = l.stateNode = r0(
          l.type,
          l.pendingProps,
          $l.current
        ), qt = l, Ul = !0, a = Et, ln(l.type) ? (Yo = a, Et = Hl(n.firstChild)) : Et = a), Yt(
          t,
          l,
          l.pendingProps.children,
          e
        ), ea(t, l), t === null && (l.flags |= 4194304), l.child;
      case 5:
        return t === null && k && ((a = n = Et) && (n = kv(
          n,
          l.type,
          l.pendingProps,
          Ul
        ), n !== null ? (l.stateNode = n, qt = l, Et = Hl(n.firstChild), Ul = !1, a = !0) : a = !1), a || qe(l)), dc(l), a = l.type, u = l.pendingProps, c = t !== null ? t.memoizedProps : null, n = u.children, _o(a, u) ? n = null : c !== null && _o(a, c) && (l.flags |= 32), l.memoizedState !== null && (a = mf(
          t,
          l,
          Jh,
          null,
          null,
          e
        ), ba._currentValue = a), ea(t, l), Yt(t, l, n, e), l.child;
      case 6:
        return t === null && k && ((t = e = Et) && (e = Pv(
          e,
          l.pendingProps,
          Ul
        ), e !== null ? (l.stateNode = e, qt = l, Et = null, t = !0) : t = !1), t || qe(l)), null;
      case 13:
        return qd(t, l, e);
      case 4:
        return Ou(
          l,
          l.stateNode.containerInfo
        ), n = l.pendingProps, t === null ? l.child = An(
          l,
          null,
          n,
          e
        ) : Yt(t, l, n, e), l.child;
      case 11:
        return Md(
          t,
          l,
          l.type,
          l.pendingProps,
          e
        );
      case 7:
        return n = l.pendingProps, ea(t, l), Yt(t, l, n, e), l.child;
      case 8:
        return Yt(
          t,
          l,
          l.pendingProps.children,
          e
        ), l.child;
      case 12:
        return Yt(
          t,
          l,
          l.pendingProps.children,
          e
        ), l.child;
      case 10:
        return Qd(t, l, e);
      case 9:
        return a = l.type._context, n = l.pendingProps.children, pn(l), a = Vt(a), n = n(a), l.flags |= 1, Yt(t, l, n, e), l.child;
      case 14:
        return Rd(
          t,
          l,
          l.type,
          l.pendingProps,
          e
        );
      case 15:
        return jd(
          t,
          l,
          l.type,
          l.pendingProps,
          e
        );
      case 19:
        return qf(t, l, e);
      case 31:
        return ev(t, l, e);
      case 22:
        return Dd(
          t,
          l,
          e,
          l.pendingProps
        );
      case 24:
        return pn(l), n = Vt(Dt), t === null ? (a = ef(), a === null && (a = bt, u = tf(), a.pooledCache = u, u.refCount++, u !== null && (a.pooledCacheLanes |= e), a = u), l.memoizedState = { parent: n, cache: a }, af(l), Ge(l, Dt, a)) : ((t.lanes & e) !== 0 && (uf(t, l), Fa(l, null, null, e), Wa()), a = t.memoizedState, u = l.memoizedState, a.parent !== n ? (a = { parent: n, cache: n }, l.memoizedState = a, l.lanes === 0 && (l.memoizedState = l.updateQueue.baseState = a), Ge(l, Dt, n)) : (n = u.cache, Ge(l, Dt, n), n !== a.cache && Pc(
          l,
          [Dt],
          e,
          !0
        ))), Yt(
          t,
          l,
          l.pendingProps.children,
          e
        ), l.child;
      case 30:
        return l.stateNode === null && (l.stateNode = {
          autoName: null,
          paired: null,
          clones: null,
          ref: null
        }), n = l.pendingProps, n.name != null && n.name !== "auto" ? l.flags |= t === null ? 18882560 : 18874368 : k && Iu(l), t !== null && t.memoizedProps.name !== n.name ? l.flags |= 4194816 : ea(t, l), Yt(t, l, n.children, e), l.child;
      case 29:
        throw l.pendingProps;
    }
    throw Error(r(156, l.tag));
  }
  function xe(t) {
    t.flags |= 4;
  }
  function Xf(t, l, e, n, a) {
    var u;
    if ((u = (t.mode & 32) !== 0) && (u = e === null ? S0(l, n) : S0(l, n) && (n.src !== e.src || n.srcSet !== e.srcSet)), u) {
      if (t.flags |= 16777216, (a & 335544128) === a)
        if (t.stateNode.complete) t.flags |= 8192;
        else if (Ay()) t.flags |= 8192;
        else
          throw xn = ai, nf;
    } else t.flags &= -16777217;
  }
  function Zd(t, l) {
    if (l.type !== "stylesheet" || (l.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (t.flags |= 16777216, !p0(l))
      if (Ay()) t.flags |= 8192;
      else
        throw xn = ai, nf;
  }
  function xi(t, l) {
    l !== null && (t.flags |= 4), t.flags & 16384 && (l = t.tag !== 22 ? Sr() : 536870912, t.lanes |= l, ca |= l);
  }
  function eu(t, l) {
    if (!k)
      switch (t.tailMode) {
        case "visible":
          break;
        case "collapsed":
          for (var e = t.tail, n = null; e !== null; )
            e.alternate !== null && (n = e), e = e.sibling;
          n === null ? l || t.tail === null ? t.tail = null : t.tail.sibling = null : n.sibling = null;
          break;
        default:
          for (l = t.tail, e = null; l !== null; )
            l.alternate !== null && (e = l), l = l.sibling;
          e === null ? t.tail = null : e.sibling = null;
      }
  }
  function xt(t) {
    var l = t.alternate !== null && t.alternate.child === t.child, e = 0, n = 0;
    if (l)
      for (var a = t.child; a !== null; )
        e |= a.lanes | a.childLanes, n |= a.subtreeFlags & 1206910976, n |= a.flags & 1206910976, a.return = t, a = a.sibling;
    else
      for (a = t.child; a !== null; )
        e |= a.lanes | a.childLanes, n |= a.subtreeFlags, n |= a.flags, a.return = t, a = a.sibling;
    return t.subtreeFlags |= n, t.childLanes = e, l;
  }
  function uv(t, l, e) {
    var n = l.pendingProps;
    switch (Wc(l), l.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return xt(l), null;
      case 1:
        return xt(l), null;
      case 3:
        return e = l.stateNode, n = null, t !== null && (n = t.memoizedState.cache), l.memoizedState.cache !== n && (l.flags |= 2048), pe(Dt), Dn(), e.pendingContext && (e.context = e.pendingContext, e.pendingContext = null), (t === null || t.child === null) && (Wn(l) ? xe(l) : t === null || t.memoizedState.isDehydrated && (l.flags & 256) === 0 || (l.flags |= 1024, Ic())), xt(l), null;
      case 26:
        var a = l.type, u = l.memoizedState;
        return t === null ? (xe(l), u !== null ? (xt(l), Zd(l, u)) : (xt(l), Xf(
          l,
          a,
          null,
          n,
          e
        ))) : u ? u !== t.memoizedState ? (xe(l), xt(l), Zd(l, u)) : (xt(l), l.flags &= -16777217) : (t = t.memoizedProps, t !== n && xe(l), xt(l), Xf(
          l,
          a,
          t,
          n,
          e
        )), null;
      case 27:
        if (_u(l), e = $l.current, a = l.type, t !== null && l.stateNode != null)
          t.memoizedProps !== n && xe(l);
        else {
          if (!n) {
            if (l.stateNode === null)
              throw Error(r(166));
            return xt(l), l.subtreeFlags &= -33554433, null;
          }
          t = K.current, Wn(l) ? Es(l) : (t = r0(a, n, e), l.stateNode = t, xe(l));
        }
        return xt(l), l.subtreeFlags &= -33554433, null;
      case 5:
        if (_u(l), a = l.type, t !== null && l.stateNode != null)
          t.memoizedProps !== n && xe(l);
        else {
          if (!n) {
            if (l.stateNode === null)
              throw Error(r(166));
            return xt(l), l.subtreeFlags &= -33554433, null;
          }
          if (u = K.current, Wn(l))
            Es(l);
          else {
            var c = yu(
              $l.current
            );
            switch (u) {
              case 1:
                u = c.createElementNS(
                  "http://www.w3.org/2000/svg",
                  a
                );
                break;
              case 2:
                u = c.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  a
                );
                break;
              default:
                switch (a) {
                  case "svg":
                    u = c.createElementNS(
                      "http://www.w3.org/2000/svg",
                      a
                    );
                    break;
                  case "math":
                    u = c.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      a
                    );
                    break;
                  case "script":
                    u = c.createElement("div"), u.innerHTML = "<script><\/script>", u = u.removeChild(
                      u.firstChild
                    );
                    break;
                  case "select":
                    u = typeof n.is == "string" ? c.createElement("select", {
                      is: n.is
                    }) : c.createElement("select"), n.multiple ? u.multiple = !0 : n.size && (u.size = n.size);
                    break;
                  default:
                    u = typeof n.is == "string" ? c.createElement(a, { is: n.is }) : c.createElement(a);
                }
            }
            u[Qt] = l, u[fl] = n;
            t: for (c = l.child; c !== null; ) {
              if (c.tag === 5 || c.tag === 6)
                u.appendChild(c.stateNode);
              else if (c.tag !== 4 && c.tag !== 27 && c.child !== null) {
                c.child.return = c, c = c.child;
                continue;
              }
              if (c === l) break t;
              for (; c.sibling === null; ) {
                if (c.return === null || c.return === l)
                  break t;
                c = c.return;
              }
              c.sibling.return = c.return, c = c.sibling;
            }
            l.stateNode = u;
            t: switch (Jt(u, a, n), a) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                n = !!n.autoFocus;
                break t;
              case "img":
                n = !0;
                break t;
              default:
                n = !1;
            }
            n && xe(l);
          }
        }
        return xt(l), l.subtreeFlags &= -33554433, Xf(
          l,
          l.type,
          t === null ? null : t.memoizedProps,
          l.pendingProps,
          e
        ), null;
      case 6:
        if (t && l.stateNode != null)
          t.memoizedProps !== n && xe(l);
        else {
          if (typeof n != "string" && l.stateNode === null)
            throw Error(r(166));
          if (t = $l.current, Wn(l)) {
            if (t = l.stateNode, e = l.memoizedProps, n = null, a = qt, a !== null)
              switch (a.tag) {
                case 27:
                case 5:
                  n = a.memoizedProps;
              }
            t[Qt] = l, t = !!(t.nodeValue === e || n !== null && n.suppressHydrationWarning === !0 || Vy(t.nodeValue, e)), t || qe(l, !0);
          } else
            t = yu(t).createTextNode(
              n
            ), t[Qt] = l, l.stateNode = t;
        }
        return xt(l), null;
      case 31:
        if (e = l.memoizedState, t === null || t.memoizedState !== null) {
          if (n = Wn(l), e !== null) {
            if (t === null) {
              if (!n) throw Error(r(318));
              if (t = l.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(557));
              t[Qt] = l;
            } else
              vn(), (l.flags & 128) === 0 && (l.memoizedState = null), l.flags |= 4;
            xt(l), t = !1;
          } else
            e = Ic(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = e), t = !0;
          if (!t)
            return l.flags & 256 ? (pl(l), l) : (pl(l), null);
          if ((l.flags & 128) !== 0)
            throw Error(r(558));
        }
        return xt(l), null;
      case 13:
        if (n = l.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (a = Wn(l), n !== null && n.dehydrated !== null) {
            if (t === null) {
              if (!a) throw Error(r(318));
              if (a = l.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(r(317));
              a[Qt] = l;
            } else
              vn(), (l.flags & 128) === 0 && (l.memoizedState = null), l.flags |= 4;
            xt(l), a = !1;
          } else
            a = Ic(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = a), a = !0;
          if (!a)
            return l.flags & 256 ? (pl(l), l) : (pl(l), null);
        }
        return pl(l), (l.flags & 128) !== 0 ? (l.lanes = e, l) : (e = n !== null, t = t !== null && t.memoizedState !== null, e && (n = l.child, a = null, n.alternate !== null && n.alternate.memoizedState !== null && n.alternate.memoizedState.cachePool !== null && (a = n.alternate.memoizedState.cachePool.pool), u = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (u = n.memoizedState.cachePool.pool), u !== a && (n.flags |= 2048)), e !== t && e && (l.child.flags |= 8192), xi(l, l.updateQueue), xt(l), null);
      case 4:
        return Dn(), t === null && xo(l.stateNode.containerInfo), l.flags |= 67108864, xt(l), null;
      case 10:
        return pe(l.type), xt(l), null;
      case 19:
        if (df(l), n = l.memoizedState, n === null) return xt(l), null;
        if (a = (l.flags & 128) !== 0, u = n.rendering, u === null)
          if (a) eu(n, !1);
          else {
            if (Ct !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = l.child; t !== null; ) {
                if (u = fi(t), u !== null) {
                  for (l.flags |= 128, eu(n, !1), t = u.updateQueue, l.updateQueue = t, xi(l, t), l.subtreeFlags = 0, t = e, e = l.child; e !== null; )
                    gs(e, t), e = e.sibling;
                  return Ia(
                    l,
                    wt.current & 1 | 2
                  ), k && ge(l, n.treeForkCount), l.child;
                }
                t = t.sibling;
              }
            n.tail !== null && ml() > Bi && (l.flags |= 128, a = !0, eu(n, !1), l.lanes = 4194304);
          }
        else {
          if (!a)
            if (t = fi(u), t !== null) {
              if (l.flags |= 128, a = !0, t = t.updateQueue, l.updateQueue = t, xi(l, t), eu(n, !0), n.tail === null && n.tailMode !== "collapsed" && n.tailMode !== "visible" && !u.alternate && !k)
                return xt(l), null;
            } else
              2 * ml() - n.renderingStartTime > Bi && e !== 536870912 && (l.flags |= 128, a = !0, eu(n, !1), l.lanes = 4194304);
          n.isBackwards ? (u.sibling = l.child, l.child = u) : (t = n.last, t !== null ? t.sibling = u : l.child = u, n.last = u);
        }
        if (n.tail !== null) {
          t = n.tail;
          t: {
            for (e = t; e !== null; ) {
              if (e.alternate !== null) {
                e = !1;
                break t;
              }
              e = e.sibling;
            }
            e = !0;
          }
          return n.rendering = t, n.tail = t.sibling, n.renderingStartTime = ml(), t.sibling = null, u = wt.current, u = a ? u & 1 | 2 : u & 1, n.tailMode === "visible" || n.tailMode === "collapsed" || !e || k ? Ia(l, u) : (e = u, St(Zt, l), St(wt, e), It === null && (It = l)), k && ge(l, n.treeForkCount), t;
        }
        return xt(l), null;
      case 22:
      case 23:
        return pl(l), rf(), n = l.memoizedState !== null, t !== null ? t.memoizedState !== null !== n && (l.flags |= 8192) : n && (l.flags |= 8192), n ? (e & 536870912) !== 0 && (l.flags & 128) === 0 && (xt(l), l.subtreeFlags & 6 && (l.flags |= 8192)) : xt(l), e = l.updateQueue, e !== null && xi(l, e.retryQueue), e = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), n = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (n = l.memoizedState.cachePool.pool), n !== e && (l.flags |= 2048), t !== null && jt(Tn), null;
      case 24:
        return e = null, t !== null && (e = t.memoizedState.cache), l.memoizedState.cache !== e && (l.flags |= 2048), pe(Dt), xt(l), null;
      case 25:
        return null;
      case 30:
        return l.flags |= 33554432, xt(l), null;
    }
    throw Error(r(156, l.tag));
  }
  function iv(t, l) {
    switch (Wc(l), l.tag) {
      case 1:
        return t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
      case 3:
        return pe(Dt), Dn(), t = l.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (l.flags = t & -65537 | 128, l) : null;
      case 26:
      case 27:
      case 5:
        return _u(l), null;
      case 31:
        if (l.memoizedState !== null) {
          if (pl(l), l.alternate === null)
            throw Error(r(340));
          vn();
        }
        return t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
      case 13:
        if (pl(l), t = l.memoizedState, t !== null && t.dehydrated !== null) {
          if (l.alternate === null)
            throw Error(r(340));
          vn();
        }
        return t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
      case 19:
        return df(l), t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, t = l.memoizedState, t !== null && (t.rendering = null, t.tail = null), l.flags |= 4, l) : null;
      case 4:
        return Dn(), null;
      case 10:
        return pe(l.type), null;
      case 22:
      case 23:
        return pl(l), rf(), t !== null && jt(Tn), t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
      case 24:
        return pe(Dt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function wd(t, l) {
    switch (Wc(l), l.tag) {
      case 3:
        pe(Dt), Dn();
        break;
      case 26:
      case 27:
      case 5:
        _u(l);
        break;
      case 4:
        Dn();
        break;
      case 31:
        l.memoizedState !== null && pl(l);
        break;
      case 13:
        pl(l);
        break;
      case 19:
        df(l);
        break;
      case 10:
        pe(l.type);
        break;
      case 22:
      case 23:
        pl(l), rf(), t !== null && jt(Tn);
        break;
      case 24:
        pe(Dt);
    }
  }
  function nu(t, l) {
    try {
      var e = l.updateQueue, n = e !== null ? e.lastEffect : null;
      if (n !== null) {
        var a = n.next;
        e = a;
        do {
          if ((e.tag & t) === t) {
            n = void 0;
            var u = e.create, c = e.inst;
            n = u(), c.destroy = n;
          }
          e = e.next;
        } while (e !== a);
      }
    } catch (o) {
      vt(l, l.return, o);
    }
  }
  function $e(t, l, e) {
    try {
      var n = l.updateQueue, a = n !== null ? n.lastEffect : null;
      if (a !== null) {
        var u = a.next;
        n = u;
        do {
          if ((n.tag & t) === t) {
            var c = n.inst, o = c.destroy;
            if (o !== void 0) {
              c.destroy = void 0, a = l;
              var d = e, S = o;
              try {
                S();
              } catch (x) {
                vt(
                  a,
                  d,
                  x
                );
              }
            }
          }
          n = n.next;
        } while (n !== u);
      }
    } catch (x) {
      vt(l, l.return, x);
    }
  }
  function Kd(t) {
    var l = t.updateQueue;
    if (l !== null) {
      var e = t.stateNode;
      try {
        Bs(l, e);
      } catch (n) {
        vt(t, t.return, n);
      }
    }
  }
  function Jd(t, l, e) {
    e.props = Nn(
      t.type,
      t.memoizedProps
    ), e.state = t.memoizedState;
    try {
      e.componentWillUnmount();
    } catch (n) {
      vt(t, l, n);
    }
  }
  function kl(t, l) {
    try {
      var e = t.ref;
      if (e !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var n = t.stateNode;
            break;
          case 30:
            var a = t.stateNode, u = me(t.memoizedProps, a);
            (a.ref === null || a.ref.name !== u) && (a.ref = t0(u)), n = a.ref;
            break;
          case 7:
            if (t.stateNode === null) {
              var c = new Al(t);
              T(
                t.child,
                !1,
                Fv,
                c,
                void 0,
                void 0
              ), t.stateNode = c;
            }
            n = t.stateNode;
            break;
          default:
            n = t.stateNode;
        }
        typeof e == "function" ? t.refCleanup = e(n) : e.current = n;
      }
    } catch (o) {
      vt(t, l, o);
    }
  }
  function Kt(t, l) {
    var e = t.ref, n = t.refCleanup;
    if (e !== null)
      if (typeof n == "function")
        try {
          n();
        } catch (a) {
          vt(t, l, a);
        } finally {
          t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
        }
      else if (typeof e == "function")
        try {
          e(null);
        } catch (a) {
          vt(t, l, a);
        }
      else e.current = null;
  }
  function Ai(t, l) {
    if ((t.tag === 5 || t.tag === 27 || t.tag === 6) && t.alternate === null && l !== null)
      for (var e = 0; e < l.length; e++)
        i0(
          t.stateNode,
          l[e]
        );
  }
  function $d(t) {
    for (var l = t.return; l !== null && (Vf(l) && i0(t.stateNode, l.stateNode), !Qf(l)); )
      l = l.return;
  }
  function au(t) {
    for (var l = t.return; l !== null && (Vf(l) && Iv(t.stateNode, l.stateNode), !Qf(l)); )
      l = l.return;
  }
  function Qf(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 27;
  }
  function Vf(t) {
    return t && t.tag === 7 && t.stateNode !== null;
  }
  function Zf(t) {
    var l = t.type, e = t.memoizedProps, n = t.stateNode;
    try {
      t: switch (l) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          e.autoFocus && n.focus();
          break t;
        case "img":
          e.src ? n.src = e.src : e.srcSet && (n.srcset = e.srcSet);
      }
    } catch (a) {
      vt(t, t.return, a);
    }
  }
  function wf(t, l, e) {
    try {
      var n = t.stateNode;
      jv(n, t.type, e, l), n[fl] = l;
    } catch (a) {
      vt(t, t.return, a);
    }
  }
  function Wd(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && ln(t.type) || t.tag === 4;
  }
  function Kf(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || Wd(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && ln(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Jf(t, l, e, n) {
    var a = t.tag;
    if (a === 5 || a === 6)
      a = t.stateNode, l ? (e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e).insertBefore(a, l) : (l = e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, l.appendChild(a), e = e._reactRootContainer, e != null || l.onclick !== null || (l.onclick = Wl)), Ai(t, n), st = !0;
    else if (a !== 4 && (a === 27 && (Ai(t, n), n = null, ln(t.type) && (e = t.stateNode, l = null)), t = t.child, t !== null))
      for (Jf(
        t,
        l,
        e,
        n
      ), t = t.sibling; t !== null; )
        Jf(
          t,
          l,
          e,
          n
        ), t = t.sibling;
  }
  function zi(t, l, e, n) {
    var a = t.tag;
    if (a === 5 || a === 6)
      a = t.stateNode, l ? e.insertBefore(a, l) : e.appendChild(a), Ai(t, n), st = !0;
    else if (a !== 4 && (a === 27 && (Ai(t, n), n = null, ln(t.type) && (e = t.stateNode)), t = t.child, t !== null))
      for (zi(
        t,
        l,
        e,
        n
      ), t = t.sibling; t !== null; )
        zi(
          t,
          l,
          e,
          n
        ), t = t.sibling;
  }
  function Fd(t) {
    var l = t.stateNode, e = t.memoizedProps;
    try {
      for (var n = t.type, a = l.attributes; a.length; )
        l.removeAttributeNode(a[0]);
      Jt(l, n, e), l[Qt] = t, l[fl] = e;
    } catch (u) {
      vt(t, t.return, u);
    }
  }
  var Ni = !1, bl = null;
  function Id(t) {
    (t.tag === 30 || (t.subtreeFlags & 33554432) !== 0) && (Ni = !0);
  }
  var Pl = null;
  function kd() {
    var t = Pl;
    return Pl = null, t;
  }
  var rl = 0;
  function na(t, l, e, n, a) {
    return rl = 0, Pd(
      t.child,
      l,
      e,
      n,
      a
    );
  }
  function Pd(t, l, e, n, a) {
    for (var u = !1; t !== null; ) {
      if (t.tag === 5) {
        var c = t.stateNode;
        if (n !== null) {
          var o = Ro(c);
          n.push(o), o.view && (u = !0);
        } else
          u || Ro(c).view && (u = !0);
        Ni = !0, ky(
          c,
          rl === 0 ? l : l + "_" + rl,
          e
        ), rl++;
      } else (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && a || Pd(
        t.child,
        l,
        e,
        n,
        a
      ) && (u = !0));
      t = t.sibling;
    }
    return u;
  }
  function te(t, l) {
    for (; t !== null; )
      t.tag === 5 ? Py(t.stateNode, t.memoizedProps) : (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && l || te(
        t.child,
        l
      )), t = t.sibling;
  }
  function Oi(t) {
    if ((t.subtreeFlags & 18874368) !== 0)
      for (t = t.child; t !== null; ) {
        if ((t.tag !== 22 || t.memoizedState === null) && (Oi(t), t.tag === 30 && (t.flags & 18874368) !== 0 && t.stateNode.paired)) {
          var l = t.memoizedProps;
          if (l.name == null || l.name === "auto")
            throw Error(r(544));
          var e = l.name;
          l = he(l.default, l.share), l !== "none" && (na(
            t,
            e,
            l,
            null,
            !1
          ) || te(t.child, !1));
        }
        t = t.sibling;
      }
  }
  function $f(t, l) {
    if (t.tag === 30) {
      var e = t.stateNode, n = t.memoizedProps, a = me(n, e), u = he(
        n.default,
        e.paired ? n.share : n.enter
      );
      u !== "none" ? na(t, a, u, null, !1) ? (Oi(t), e.paired || l || sa(t, n.onEnter)) : te(t.child, !1) : Oi(t);
    } else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null; )
        $f(t, l), t = t.sibling;
    else Oi(t);
  }
  function Wf(t) {
    if (bl !== null && bl.size !== 0) {
      var l = bl;
      if ((t.subtreeFlags & 18874368) !== 0)
        for (t = t.child; t !== null; ) {
          if (t.tag !== 22 || t.memoizedState === null) {
            if (t.tag === 30 && (t.flags & 18874368) !== 0) {
              var e = t.memoizedProps, n = e.name;
              if (n != null && n !== "auto") {
                var a = l.get(n);
                if (a !== void 0) {
                  var u = he(
                    e.default,
                    e.share
                  );
                  if (u !== "none" && (na(
                    t,
                    n,
                    u,
                    null,
                    !1
                  ) ? (u = t.stateNode, a.paired = u, u.paired = a, sa(t, e.onShare)) : te(t.child, !1)), l.delete(n), l.size === 0) break;
                }
              }
            }
            Wf(t);
          }
          t = t.sibling;
        }
    }
  }
  function Ff(t) {
    if (t.tag === 30) {
      var l = t.memoizedProps, e = me(l, t.stateNode), n = bl !== null ? bl.get(e) : void 0, a = he(
        l.default,
        n !== void 0 ? l.share : l.exit
      );
      a !== "none" && (na(t, e, a, null, !1) ? n !== void 0 ? (a = t.stateNode, n.paired = a, a.paired = n, bl.delete(e), sa(t, l.onShare)) : sa(t, l.onExit) : te(t.child, !1)), bl !== null && Wf(t);
    } else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null; )
        Ff(t), t = t.sibling;
    else
      bl !== null && Wf(t);
  }
  function ty(t) {
    for (t = t.child; t !== null; ) {
      if (t.tag === 30) {
        var l = t.memoizedProps, e = me(l, t.stateNode);
        l = he(l.default, l.update), t.flags &= -5, l !== "none" && na(
          t,
          e,
          l,
          t.memoizedState = [],
          !1
        );
      } else
        (t.subtreeFlags & 33554432) !== 0 && ty(t);
      t = t.sibling;
    }
  }
  function If(t) {
    if ((t.subtreeFlags & 18874368) !== 0)
      for (t = t.child; t !== null; ) {
        if (t.tag !== 22 || t.memoizedState === null) {
          if (t.tag === 30 && (t.flags & 18874368) !== 0) {
            var l = t.stateNode;
            l.paired !== null && (l.paired = null, te(t.child, !1));
          }
          If(t);
        }
        t = t.sibling;
      }
  }
  function _i(t) {
    if (t.tag === 30)
      t.stateNode.paired = null, te(t.child, !1), If(t);
    else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null; )
        _i(t), t = t.sibling;
    else If(t);
  }
  function ly(t) {
    for (t = t.child; t !== null; )
      t.tag === 30 ? te(t.child, !1) : (t.subtreeFlags & 33554432) !== 0 && ly(t), t = t.sibling;
  }
  function kf(t, l, e, n, a, u, c) {
    for (var o = !1; l !== null; ) {
      if (l.tag === 5) {
        var d = l.stateNode;
        if (u !== null && rl < u.length) {
          var S = u[rl], x = Ro(d);
          (S.view || x.view) && (o = !0);
          var N;
          if (N = (t.flags & 4) === 0)
            if (x.clip) N = !0;
            else {
              N = S.rect;
              var v = x.rect;
              N = N.y !== v.y || N.x !== v.x || N.height !== v.height || N.width !== v.width;
            }
          N && (t.flags |= 4), x.abs ? x = !S.abs : (S = S.rect, x = x.rect, x = S.height !== x.height || S.width !== x.width), x && (t.flags |= 32);
        } else t.flags |= 32;
        (t.flags & 4) !== 0 && ky(
          d,
          rl === 0 ? e : e + "_" + rl,
          a
        ), o && (t.flags & 4) !== 0 || (Pl === null && (Pl = []), Pl.push(
          d,
          rl === 0 ? n : n + "_" + rl,
          l.memoizedProps
        )), rl++;
      } else (l.tag !== 22 || l.memoizedState === null) && (l.tag === 30 && c ? t.flags |= l.flags & 32 : kf(
        t,
        l.child,
        e,
        n,
        a,
        u,
        c
      ) && (o = !0));
      l = l.sibling;
    }
    return o;
  }
  function ey(t, l) {
    for (t = t.child; t !== null; ) {
      if (t.tag === 30) {
        var e = t.memoizedProps, n = t.stateNode, a = me(e, n), u = he(e.default, e.update), c;
        c = t.memoizedState, t.memoizedState = null, n = t;
        var o = t.child;
        rl = 0, a = kf(
          n,
          o,
          a,
          a,
          u,
          c,
          !1
        ), (t.flags & 4) !== 0 && a && sa(t, e.onUpdate);
      } else
        (t.subtreeFlags & 33554432) !== 0 && ey(t);
      t = t.sibling;
    }
  }
  var Gt = !1, yt = !1, le = !1, Pf = !1, ny = typeof WeakSet == "function" ? WeakSet : Set, Xt = null, ee = !1, uu = !1, Ci = !1, to = !1;
  function cv(t, l, e) {
    if (t = t.containerInfo, No = Ta, t = cs(t), qc(t)) {
      if ("selectionStart" in t)
        var n = {
          start: t.selectionStart,
          end: t.selectionEnd
        };
      else
        t: {
          n = (n = t.ownerDocument) && n.defaultView || window;
          var a = n.getSelection && n.getSelection();
          if (a && a.rangeCount !== 0) {
            n = a.anchorNode;
            var u = a.anchorOffset, c = a.focusNode;
            a = a.focusOffset;
            try {
              n.nodeType, c.nodeType;
            } catch {
              n = null;
              break t;
            }
            var o = 0, d = -1, S = -1, x = 0, N = 0, v = t, E = null;
            l: for (; ; ) {
              for (var M; v !== n || u !== 0 && v.nodeType !== 3 || (d = o + u), v !== c || a !== 0 && v.nodeType !== 3 || (S = o + a), v.nodeType === 3 && (o += v.nodeValue.length), (M = v.firstChild) !== null; )
                E = v, v = M;
              for (; ; ) {
                if (v === t) break l;
                if (E === n && ++x === u && (d = o), E === c && ++N === a && (S = o), (M = v.nextSibling) !== null) break;
                v = E, E = v.parentNode;
              }
              v = M;
            }
            n = d === -1 || S === -1 ? null : { start: d, end: S };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (Oo = { focusedElem: t, selectionRange: n }, Ta = !1, e = (e & 335544064) === e, Xt = l, l = e ? 9270 : 1024; Xt !== null; ) {
      if (t = Xt, e && (n = t.deletions, n !== null))
        for (u = 0; u < n.length; u++)
          e && Ff(n[u]);
      if (t.alternate === null && (t.flags & 2) !== 0)
        e && Id(t), Mi(e);
      else {
        if (t.tag === 22) {
          if (n = t.alternate, t.memoizedState !== null) {
            n !== null && n.memoizedState === null && e && Ff(n), Mi(e);
            continue;
          } else if (n !== null && n.memoizedState !== null) {
            e && Id(t), Mi(e);
            continue;
          }
        }
        n = t.child, (t.subtreeFlags & l) !== 0 && n !== null ? (n.return = t, Xt = n) : (e && ty(t), Mi(e));
      }
    }
    bl = null;
  }
  function Mi(t) {
    for (; Xt !== null; ) {
      var l = Xt, e = t, n = l.alternate, a = l.flags;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if ((a & 1024) !== 0 && n !== null) {
            e = void 0, a = n.memoizedProps, n = n.memoizedState;
            var u = l.stateNode;
            try {
              var c = Nn(
                l.type,
                a
              );
              e = u.getSnapshotBeforeUpdate(
                c,
                n
              ), u.__reactInternalSnapshotBeforeUpdate = e;
            } catch (o) {
              vt(l, l.return, o);
            }
          }
          break;
        case 3:
          if ((a & 1024) !== 0) {
            if (n = l.stateNode.containerInfo, e = n.nodeType, e === 9)
              Uo(n);
            else if (e === 1)
              switch (n.nodeName) {
                case "HEAD":
                case "HTML":
                case "BODY":
                  Uo(n);
                  break;
                default:
                  n.textContent = "";
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
          e && n !== null && (e = me(
            n.memoizedProps,
            n.stateNode
          ), a = l.memoizedProps, a = he(a.default, a.update), a !== "none" && na(
            n,
            e,
            a,
            n.memoizedState = [],
            !0
          ));
          break;
        default:
          if ((a & 1024) !== 0) throw Error(r(163));
      }
      if (n = l.sibling, n !== null) {
        n.return = l.return, Xt = n;
        break;
      }
      Xt = l.return;
    }
  }
  function ay(t, l, e) {
    var n = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        ne(t, e), n & 4 && nu(5, e);
        break;
      case 1:
        if (ne(t, e), n & 4)
          if (t = e.stateNode, l === null)
            try {
              t.componentDidMount();
            } catch (c) {
              vt(e, e.return, c);
            }
          else {
            var a = Nn(
              e.type,
              l.memoizedProps
            );
            l = l.memoizedState;
            try {
              t.componentDidUpdate(
                a,
                l,
                t.__reactInternalSnapshotBeforeUpdate
              );
            } catch (c) {
              vt(
                e,
                e.return,
                c
              );
            }
          }
        n & 64 && Kd(e), n & 512 && kl(e, e.return);
        break;
      case 3:
        if (ne(t, e), n & 64 && (t = e.updateQueue, t !== null)) {
          if (l = null, e.child !== null)
            switch (e.child.tag) {
              case 27:
              case 5:
                l = e.child.stateNode;
                break;
              case 1:
                l = e.child.stateNode;
            }
          try {
            Bs(t, l);
          } catch (c) {
            vt(e, e.return, c);
          }
        }
        break;
      case 27:
        l === null && n & 4 && Fd(e);
      case 26:
      case 5:
        ne(t, e), l === null && n & 4 && Zf(e), n & 512 && kl(e, e.return);
        break;
      case 12:
        ne(t, e);
        break;
      case 31:
        ne(t, e), n & 4 && fy(t, e);
        break;
      case 13:
        ne(t, e), n & 4 && oy(t, e), n & 64 && (t = e.memoizedState, t !== null && (t = t.dehydrated, t !== null && (e = pv.bind(
          null,
          e
        ), t1(t, e))));
        break;
      case 22:
        if (n = e.memoizedState !== null || Gt, !n) {
          var u = l !== null && l.memoizedState !== null || yt;
          l = Gt, a = yt, Gt = n, (yt = u) && !a ? (n = 2, (e.subtreeFlags & 8772) !== 0 && (n |= 1), Vl(
            t,
            e,
            n
          )) : ne(t, e), Gt = l, yt = a;
        }
        break;
      case 30:
        ne(t, e), n & 512 && kl(e, e.return);
        break;
      case 7:
        n & 512 && kl(e, e.return);
      default:
        ne(t, e);
    }
  }
  function lo(t, l) {
    for (t = t.child; t !== null; )
      uy(t, l), t = t.sibling;
  }
  function uy(t, l) {
    switch (t.tag) {
      case 5:
      case 26:
        try {
          var e = t.stateNode;
          if (l) {
            var n = e.style;
            typeof n.setProperty == "function" ? n.setProperty("display", "none", "important") : n.display = "none";
          } else {
            var a = t.stateNode, u = t.memoizedProps.style, c = u != null && u.hasOwnProperty("display") ? u.display : null;
            a.style.display = c == null || typeof c == "boolean" ? "" : ("" + c).trim();
          }
        } catch (d) {
          vt(t, t.return, d);
        }
        eo(t, l);
        break;
      case 6:
        try {
          t.stateNode.nodeValue = l ? "" : t.memoizedProps, st = !0;
        } catch (d) {
          vt(t, t.return, d);
        }
        break;
      case 18:
        try {
          var o = t.stateNode;
          l ? Iy(o, !0) : Iy(t.stateNode, !1);
        } catch (d) {
          vt(t, t.return, d);
        }
        break;
      case 22:
      case 23:
        t.memoizedState === null && lo(t, l);
        break;
      default:
        lo(t, l);
    }
  }
  function eo(t, l) {
    if (t.subtreeFlags & 67108864)
      for (t = t.child; t !== null; ) {
        t: {
          var e = t, n = l;
          switch (e.tag) {
            case 4:
              uy(e, n);
              break t;
            case 22:
              e.memoizedState === null && eo(e, n);
              break t;
            default:
              eo(e, n);
          }
        }
        t = t.sibling;
      }
  }
  function iy(t) {
    var l = t.alternate;
    l !== null && (t.alternate = null, iy(l)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (l = t.stateNode, l !== null && Bu(l)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var zt = null, sl = !1;
  function Xl(t, l, e) {
    for (e = e.child; e !== null; )
      cy(t, l, e), e = e.sibling;
  }
  function cy(t, l, e) {
    if (hl && typeof hl.onCommitFiberUnmount == "function")
      try {
        hl.onCommitFiberUnmount(_a, e);
      } catch {
      }
    switch (e.tag) {
      case 26:
        yt || Kt(e, l), Xl(
          t,
          l,
          e
        ), e.memoizedState ? e.memoizedState.count-- : e.stateNode && !yt && (e = e.stateNode, e.parentNode.removeChild(e));
        break;
      case 27:
        yt || Kt(e, l), au(e);
        var n = zt, a = sl;
        ln(e.type) && (zt = e.stateNode, sl = !1), Xl(
          t,
          l,
          e
        ), s0(
          e.stateNode,
          e.type,
          e.memoizedProps
        ), zt = n, sl = a;
        break;
      case 5:
        yt || Kt(e, l), au(e);
      case 6:
        if (e.tag === 6 && au(e), n = zt, a = sl, zt = null, Xl(
          t,
          l,
          e
        ), zt = n, sl = a, zt !== null)
          if (sl)
            try {
              (zt.nodeType === 9 ? zt.body : zt.nodeName === "HTML" ? zt.ownerDocument.body : zt).removeChild(e.stateNode), st = !0;
            } catch (u) {
              vt(
                e,
                l,
                u
              );
            }
          else
            try {
              zt.removeChild(e.stateNode), st = !0;
            } catch (u) {
              vt(
                e,
                l,
                u
              );
            }
        break;
      case 18:
        zt !== null && (sl ? (t = zt, Fy(
          t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
          e.stateNode
        ), Ea(t)) : Fy(zt, e.stateNode));
        break;
      case 4:
        n = zt, a = sl, zt = e.stateNode.containerInfo, sl = !0, Xl(
          t,
          l,
          e
        ), zt = n, sl = a;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        $e(2, e, l), yt || $e(4, e, l), Xl(
          t,
          l,
          e
        );
        break;
      case 1:
        yt || (Kt(e, l), n = e.stateNode, typeof n.componentWillUnmount == "function" && Jd(
          e,
          l,
          n
        )), Xl(
          t,
          l,
          e
        );
        break;
      case 21:
        Xl(
          t,
          l,
          e
        );
        break;
      case 22:
        yt = (n = yt) || e.memoizedState !== null, Xl(
          t,
          l,
          e
        ), yt = n;
        break;
      case 30:
        Kt(e, l), Xl(
          t,
          l,
          e
        );
        break;
      case 7:
        yt || Kt(e, l), Xl(
          t,
          l,
          e
        );
        break;
      default:
        Xl(
          t,
          l,
          e
        );
    }
  }
  function fy(t, l) {
    if (l.memoizedState === null && (t = l.alternate, t !== null && (t = t.memoizedState, t !== null))) {
      t = t.dehydrated;
      try {
        Ea(t);
      } catch (e) {
        vt(l, l.return, e);
      }
    }
  }
  function oy(t, l) {
    if (l.memoizedState === null && (t = l.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
      try {
        Ea(t);
      } catch (e) {
        vt(l, l.return, e);
      }
  }
  function fv(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var l = t.stateNode;
        return l === null && (l = t.stateNode = new ny()), l;
      case 22:
        return t = t.stateNode, l = t._retryCache, l === null && (l = t._retryCache = new ny()), l;
      default:
        throw Error(r(435, t.tag));
    }
  }
  function Ri(t, l) {
    var e = fv(t);
    l.forEach(function(n) {
      if (!e.has(n)) {
        e.add(n);
        var a = bv.bind(null, t, n);
        n.then(a, a);
      }
    });
  }
  function nl(t, l, e) {
    var n = l.deletions;
    if (n !== null)
      for (var a = 0; a < n.length; a++) {
        var u = n[a], c = t, o = l, d = o;
        t: for (; d !== null; ) {
          switch (d.tag) {
            case 27:
              if (ln(d.type)) {
                zt = d.stateNode, sl = !1;
                break t;
              }
              break;
            case 5:
              zt = d.stateNode, sl = !1;
              break t;
            case 3:
            case 4:
              zt = d.stateNode.containerInfo, sl = !0;
              break t;
          }
          d = d.return;
        }
        if (zt === null) throw Error(r(160));
        cy(c, o, u), zt = null, sl = !1, c = u.alternate, c !== null && (c.return = null), u.return = null;
      }
    if (l.subtreeFlags & 13886)
      for (l = l.child; l !== null; )
        ry(l, t, e), l = l.sibling;
  }
  var Ql = null;
  function ry(t, l, e) {
    var n = t.alternate, a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (a & 4 && (n = t.updateQueue, n = n !== null ? n.events : null, n !== null))
          for (var u = 0; u < n.length; u++) {
            var c = n[u];
            c.ref.impl = c.nextImpl;
          }
        nl(l, t, e), al(t), a & 4 && ($e(3, t, t.return), nu(3, t), $e(5, t, t.return));
        break;
      case 1:
        nl(l, t, e), al(t), a & 512 && (yt || n === null || Kt(n, n.return)), a & 64 && Gt && (t = t.updateQueue, t !== null && (l = t.callbacks, l !== null && (e = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = e === null ? l : e.concat(l))));
        break;
      case 26:
        if (u = Ql, nl(l, t, e), al(t), a & 512 && (yt || n === null || Kt(n, n.return)), a & 4)
          if (a = n !== null ? n.memoizedState : null, e = t.memoizedState, n === null)
            if (e === null)
              if (t.stateNode === null)
                if (Gt)
                  t.stateNode = Jy(
                    t.type,
                    t.memoizedProps,
                    l.containerInfo,
                    t
                  );
                else {
                  t: {
                    l = t.type, e = t.memoizedProps, a = u.ownerDocument || u;
                    l: switch (l) {
                      case "title":
                        n = a.getElementsByTagName("title")[0], (!n || n[Ra] || n[Qt] || n.namespaceURI === "http://www.w3.org/2000/svg" || n.hasAttribute("itemprop")) && (n = a.createElement(l), a.head.insertBefore(
                          n,
                          a.querySelector("head > title")
                        )), Jt(n, l, e), n[Qt] = t, Lt(n), l = n;
                        break t;
                      case "link":
                        if (u = g0(
                          "link",
                          "href",
                          a
                        ).get(l + (e.href || ""))) {
                          for (c = 0; c < u.length; c++)
                            if (n = u[c], n.getAttribute("href") === (e.href == null || e.href === "" ? null : e.href) && n.getAttribute("rel") === (e.rel == null ? null : e.rel) && n.getAttribute("title") === (e.title == null ? null : e.title) && n.getAttribute("crossorigin") === (e.crossOrigin == null ? null : e.crossOrigin)) {
                              u.splice(c, 1);
                              break l;
                            }
                        }
                        n = a.createElement(l), Jt(n, l, e), a.head.appendChild(n);
                        break;
                      case "meta":
                        if (u = g0(
                          "meta",
                          "content",
                          a
                        ).get(l + (e.content || ""))) {
                          for (c = 0; c < u.length; c++)
                            if (n = u[c], n.getAttribute("content") === (e.content == null ? null : "" + e.content) && n.getAttribute("name") === (e.name == null ? null : e.name) && n.getAttribute("property") === (e.property == null ? null : e.property) && n.getAttribute("http-equiv") === (e.httpEquiv == null ? null : e.httpEquiv) && n.getAttribute("charset") === (e.charSet == null ? null : e.charSet)) {
                              u.splice(c, 1);
                              break l;
                            }
                        }
                        n = a.createElement(l), Jt(n, l, e), a.head.appendChild(n);
                        break;
                      default:
                        throw Error(r(468, l));
                    }
                    n[Qt] = t, Lt(n), l = n;
                  }
                  t.stateNode = l;
                }
              else
                Gt || Xo(u, t.type, t.stateNode);
            else
              t.stateNode = v0(
                u,
                e,
                t.memoizedProps
              );
          else
            a !== e ? (a === null ? (l = n.stateNode, l === null || yt || l.parentNode.removeChild(l)) : a.count--, e === null ? Gt || Xo(u, t.type, t.stateNode) : v0(u, e, t.memoizedProps)) : e === null && t.stateNode !== null && wf(
              t,
              t.memoizedProps,
              n.memoizedProps
            );
        break;
      case 27:
        nl(l, t, e), al(t), a & 512 && (yt || n === null || Kt(n, n.return)), n !== null && a & 4 && wf(
          t,
          t.memoizedProps,
          n.memoizedProps
        );
        break;
      case 5:
        if (u = le, le = !1, nl(l, t, e), le = u, al(t), a & 512 && (yt || n === null || Kt(n, n.return)), t.flags & 32) {
          l = t.stateNode;
          try {
            qn(l, ""), st = !0;
          } catch (x) {
            vt(t, t.return, x);
          }
        }
        a & 4 && t.stateNode != null && (l = t.memoizedProps, wf(
          t,
          l,
          n !== null ? n.memoizedProps : l
        )), a & 1024 && (Pf = !0);
        break;
      case 6:
        if (nl(l, t, e), al(t), a & 4) {
          if (t.stateNode === null)
            throw Error(r(162));
          l = t.memoizedProps, e = t.stateNode;
          try {
            e.nodeValue = l, st = !0;
          } catch (x) {
            vt(t, t.return, x);
          }
        }
        break;
      case 3:
        if (st = !1, Ki = null, u = Ql, Ql = mu(l.containerInfo), nl(l, t, e), Ql = u, al(t), a & 4 && n !== null && n.memoizedState.isDehydrated)
          try {
            Ea(l.containerInfo);
          } catch (x) {
            vt(t, t.return, x);
          }
        Pf && (Pf = !1, sy(t)), st = !1;
        break;
      case 4:
        a = le, le = Gt, n = Rr(), u = Ql, Ql = mu(
          t.stateNode.containerInfo
        ), nl(l, t, e), al(t), Ql = u, st && uu && (Ci = !0), st = n, le = a;
        break;
      case 12:
        nl(l, t, e), al(t);
        break;
      case 31:
        nl(l, t, e), al(t), a & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, Ri(t, l)));
        break;
      case 13:
        nl(l, t, e), al(t), t.child.flags & 8192 && t.memoizedState !== null != (n !== null && n.memoizedState !== null) && (Ui = ml()), a & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, Ri(t, l)));
        break;
      case 22:
        u = t.memoizedState !== null, c = n !== null && n.memoizedState !== null;
        var o = Gt, d = yt, S = le;
        Gt = o || u, le = S || u, yt = d || c, nl(l, t, e), yt = d, le = S, Gt = o, al(t), a & 8192 && (l = t.stateNode, l._visibility = u ? l._visibility & -2 : l._visibility | 1, !u || n === null || c || Gt || yt || (l = c || yt, e = Gt, n = yt, Gt = u || Gt, yt = l, We(t, 2), Gt = e, yt = n), !u && le || lo(t, u)), a & 4 && (l = t.updateQueue, l !== null && (e = l.retryQueue, e !== null && (l.retryQueue = null, Ri(t, e))));
        break;
      case 19:
        nl(l, t, e), al(t), a & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, Ri(t, l)));
        break;
      case 30:
        a & 512 && (yt || n === null || Kt(n, n.return)), a = Rr(), u = uu, c = (e & 335544064) === e, o = t.memoizedProps, uu = c && he(
          o.default,
          o.update
        ) !== "none", nl(l, t, e), al(t), c && n !== null && st && (t.flags |= 4), uu = u, st = a;
        break;
      case 21:
        break;
      case 7:
        a & 512 && (yt || n === null || Kt(n, n.return)), n && n.stateNode !== null && (n.stateNode._fragmentFiber = t);
      default:
        nl(l, t, e), al(t);
    }
  }
  function al(t) {
    var l = t.flags;
    if (l & 2) {
      try {
        for (var e, n = t.return; n !== null; ) {
          if (Wd(n)) {
            e = n;
            break;
          }
          n = n.return;
        }
        n = null;
        for (var a = t.return; a !== null; ) {
          if (Vf(a)) {
            var u = a.stateNode;
            n === null ? n = [u] : n.push(u);
          }
          if (Qf(a)) break;
          a = a.return;
        }
        var c = n;
        if (e == null) throw Error(r(160));
        switch (e.tag) {
          case 27:
            var o = e.stateNode, d = Kf(t);
            zi(
              t,
              d,
              o,
              c
            );
            break;
          case 5:
            var S = e.stateNode;
            e.flags & 32 && (qn(S, ""), e.flags &= -33);
            var x = Kf(t);
            zi(
              t,
              x,
              S,
              c
            );
            break;
          case 3:
          case 4:
            var N = e.stateNode.containerInfo, v = Kf(t);
            Jf(
              t,
              v,
              N,
              c
            );
            break;
          default:
            throw Error(r(161));
        }
      } catch (E) {
        vt(t, t.return, E);
      }
      t.flags &= -3;
    }
    l & 4096 && (t.flags &= -4097);
  }
  function sy(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var l = t;
        sy(l), l.tag === 5 && l.flags & 1024 && (l = l.stateNode, Ta = !0, l.reset(), Ta = !1), t = t.sibling;
      }
  }
  function aa(t, l) {
    if (l.subtreeFlags & 9270)
      for (l = l.child; l !== null; )
        dy(l, t), l = l.sibling;
    else ey(l);
  }
  function dy(t, l) {
    var e = t.alternate;
    if (e === null) $f(t, !1);
    else
      switch (t.tag) {
        case 3:
          if (to = ee = !1, kd(), aa(l, t), !ee && !Ci) {
            if (t = Pl, t !== null)
              for (var n = 0; n < t.length; n += 3) {
                e = t[n];
                var a = t[n + 1];
                Py(e, t[n + 2]), e = e.ownerDocument.documentElement, e !== null && e.animate(
                  { opacity: [0, 0], pointerEvents: ["none", "none"] },
                  {
                    duration: 0,
                    fill: "forwards",
                    pseudoElement: "::view-transition-group(" + a + ")"
                  }
                );
              }
            t = l.containerInfo, t = t.nodeType === 9 ? t.documentElement : t.ownerDocument.documentElement, t !== null && t.style.viewTransitionName === "" && (t.style.viewTransitionName = "none", t.animate(
              { opacity: [0, 0], pointerEvents: ["none", "none"] },
              {
                duration: 0,
                fill: "forwards",
                pseudoElement: "::view-transition-group(root)"
              }
            ), t.animate(
              { width: [0, 0], height: [0, 0] },
              {
                duration: 0,
                fill: "forwards",
                pseudoElement: "::view-transition"
              }
            )), to = !0;
          }
          Pl = null;
          break;
        case 5:
          aa(l, t);
          break;
        case 4:
          n = ee, ee = !1, aa(l, t), ee && (Ci = !0), ee = n;
          break;
        case 22:
          t.memoizedState === null && (e.memoizedState !== null ? $f(t, !1) : aa(l, t));
          break;
        case 30:
          n = ee, a = kd(), ee = !1, aa(l, t), ee && (t.flags |= 4);
          var u = t.memoizedProps, c = t.stateNode;
          l = me(u, c), c = me(e.memoizedProps, c);
          var o = he(u.default, u.update);
          o === "none" ? l = !1 : (u = e.memoizedState, e.memoizedState = null, e = t.child, rl = 0, l = kf(
            t,
            e,
            l,
            c,
            o,
            u,
            !0
          ), rl !== (u === null ? 0 : u.length) && (t.flags |= 32)), (t.flags & 4) !== 0 && l ? (sa(
            t,
            t.memoizedProps.onUpdate
          ), Pl = a) : a !== null && (a.push.apply(a, Pl), Pl = a), ee = (t.flags & 32) !== 0 ? !0 : n;
          break;
        default:
          aa(l, t);
      }
  }
  function ne(t, l) {
    if (l.subtreeFlags & 8772)
      for (l = l.child; l !== null; )
        ay(t, l.alternate, l), l = l.sibling;
  }
  function We(t, l) {
    for (t = t.child; t !== null; ) {
      var e = t, n = l;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          $e(4, e, e.return), We(
            e,
            n
          );
          break;
        case 1:
          Kt(e, e.return);
          var a = e.stateNode;
          typeof a.componentWillUnmount == "function" && Jd(
            e,
            e.return,
            a
          ), We(
            e,
            n
          );
          break;
        case 27:
          (n & 2) !== 0 && s0(
            e.stateNode,
            e.type,
            e.memoizedProps
          );
        case 5:
          Kt(e, e.return), e.tag !== 5 && e.tag !== 27 || au(e), We(
            e,
            n
          );
          break;
        case 6:
          au(e);
          break;
        case 26:
          Kt(e, e.return), a = e.stateNode, e.memoizedState !== null || a === null || yt || a.parentNode.removeChild(a), We(
            e,
            n
          );
          break;
        case 22:
          e.memoizedState === null && We(
            e,
            n
          );
          break;
        case 30:
          Kt(e, e.return), We(
            e,
            n
          );
          break;
        case 7:
          Kt(e, e.return);
        default:
          We(
            e,
            n
          );
      }
      t = t.sibling;
    }
  }
  function Vl(t, l, e) {
    for (e = (l.subtreeFlags & 8772) !== 0 ? e : e & -2, l = l.child; l !== null; ) {
      var n = l.alternate, a = t, u = l, c = u.flags, o = (e & 1) !== 0;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          Vl(
            a,
            u,
            e
          ), nu(4, u);
          break;
        case 1:
          if (Vl(
            a,
            u,
            e
          ), n = u, a = n.stateNode, typeof a.componentDidMount == "function")
            try {
              a.componentDidMount();
            } catch (x) {
              vt(n, n.return, x);
            }
          if (n = u, a = n.updateQueue, a !== null) {
            var d = n.stateNode;
            try {
              var S = a.shared.hiddenCallbacks;
              if (S !== null)
                for (a.shared.hiddenCallbacks = null, a = 0; a < S.length; a++)
                  Us(S[a], d);
            } catch (x) {
              vt(n, n.return, x);
            }
          }
          o && c & 64 && Kd(u), kl(u, u.return);
          break;
        case 27:
          (e & 2) !== 0 && Fd(u);
        case 5:
          u.tag !== 5 && u.tag !== 27 || $d(u), Vl(
            a,
            u,
            e
          ), o && n === null && c & 4 && Zf(u), kl(u, u.return);
          break;
        case 6:
          $d(u);
          break;
        case 26:
          d = u.stateNode, u.memoizedState !== null || d === null || Gt || Xo(
            mu(d.ownerDocument),
            u.type,
            d
          ), Vl(
            a,
            u,
            e
          ), o && n === null && c & 4 && Zf(u), kl(u, u.return);
          break;
        case 12:
          Vl(
            a,
            u,
            e
          );
          break;
        case 31:
          Vl(
            a,
            u,
            e
          ), o && c & 4 && fy(a, u);
          break;
        case 13:
          Vl(
            a,
            u,
            e
          ), o && c & 4 && oy(a, u);
          break;
        case 22:
          u.memoizedState === null && Vl(
            a,
            u,
            e
          ), kl(u, u.return);
          break;
        case 30:
          Vl(
            a,
            u,
            e
          ), kl(u, u.return);
          break;
        case 7:
          kl(u, u.return);
        default:
          Vl(
            a,
            u,
            e
          );
      }
      l = l.sibling;
    }
  }
  function no(t, l) {
    var e = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), t = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (t = l.memoizedState.cachePool.pool), t !== e && (t != null && t.refCount++, e != null && Za(e));
  }
  function ao(t, l) {
    t = null, l.alternate !== null && (t = l.alternate.memoizedState.cache), l = l.memoizedState.cache, l !== t && (l.refCount++, t != null && Za(t));
  }
  function Bl(t, l, e, n) {
    var a = (e & 335544064) === e;
    if (l.subtreeFlags & (a ? 10262 : 10256))
      for (l = l.child; l !== null; )
        yy(
          t,
          l,
          e,
          n
        ), l = l.sibling;
    else a && ly(l);
  }
  function yy(t, l, e, n) {
    var a = (e & 335544064) === e;
    a && l.alternate === null && l.return !== null && l.return.alternate !== null && _i(l);
    var u = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        Bl(
          t,
          l,
          e,
          n
        ), u & 2048 && nu(9, l);
        break;
      case 1:
        Bl(
          t,
          l,
          e,
          n
        );
        break;
      case 3:
        Bl(
          t,
          l,
          e,
          n
        ), a && to && (t = t.containerInfo, t = t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, t.style.viewTransitionName === "root" && (t.style.viewTransitionName = ""), t = t.ownerDocument.documentElement, t !== null && t.style.viewTransitionName === "none" && (t.style.viewTransitionName = "")), u & 2048 && (u = null, l.alternate !== null && (u = l.alternate.memoizedState.cache), l = l.memoizedState.cache, l !== u && (l.refCount++, u != null && Za(u)));
        break;
      case 12:
        if (u & 2048) {
          Bl(
            t,
            l,
            e,
            n
          ), u = l.stateNode;
          try {
            var c = l.memoizedProps, o = c.id, d = c.onPostCommit;
            typeof d == "function" && d(
              o,
              l.alternate === null ? "mount" : "update",
              u.passiveEffectDuration,
              -0
            );
          } catch (S) {
            vt(l, l.return, S);
          }
        } else
          Bl(
            t,
            l,
            e,
            n
          );
        break;
      case 31:
        Bl(
          t,
          l,
          e,
          n
        );
        break;
      case 13:
        Bl(
          t,
          l,
          e,
          n
        );
        break;
      case 23:
        break;
      case 22:
        c = l.stateNode, o = l.alternate, l.memoizedState !== null ? (a && o !== null && o.memoizedState === null && _i(o), c._visibility & 2 ? Bl(
          t,
          l,
          e,
          n
        ) : iu(
          t,
          l
        )) : (a && o !== null && o.memoizedState !== null && _i(l), c._visibility & 2 ? Bl(
          t,
          l,
          e,
          n
        ) : (c._visibility |= 2, ua(
          t,
          l,
          e,
          n,
          (l.subtreeFlags & 10256) !== 0 || !1
        ))), u & 2048 && no(o, l);
        break;
      case 24:
        Bl(
          t,
          l,
          e,
          n
        ), u & 2048 && ao(l.alternate, l);
        break;
      case 30:
        a && (u = l.alternate, u !== null && (te(u.child, !0), te(l.child, !0))), Bl(
          t,
          l,
          e,
          n
        );
        break;
      default:
        Bl(
          t,
          l,
          e,
          n
        );
    }
  }
  function ua(t, l, e, n, a) {
    for (a = a && ((l.subtreeFlags & 10256) !== 0 || !1), l = l.child; l !== null; ) {
      var u = t, c = l, o = e, d = n, S = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          ua(
            u,
            c,
            o,
            d,
            a
          ), nu(8, c);
          break;
        case 23:
          break;
        case 22:
          var x = c.stateNode;
          c.memoizedState !== null ? x._visibility & 2 ? ua(
            u,
            c,
            o,
            d,
            a
          ) : iu(
            u,
            c
          ) : (x._visibility |= 2, ua(
            u,
            c,
            o,
            d,
            a
          )), a && S & 2048 && no(
            c.alternate,
            c
          );
          break;
        case 24:
          ua(
            u,
            c,
            o,
            d,
            a
          ), a && S & 2048 && ao(c.alternate, c);
          break;
        default:
          ua(
            u,
            c,
            o,
            d,
            a
          );
      }
      l = l.sibling;
    }
  }
  function iu(t, l) {
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; ) {
        var e = t, n = l, a = n.flags;
        switch (n.tag) {
          case 22:
            iu(e, n), a & 2048 && no(
              n.alternate,
              n
            );
            break;
          case 24:
            iu(e, n), a & 2048 && ao(n.alternate, n);
            break;
          default:
            iu(e, n);
        }
        l = l.sibling;
      }
  }
  var On = 8192;
  function _n(t, l, e) {
    if (t.subtreeFlags & On)
      for (t = t.child; t !== null; )
        my(
          t,
          l,
          e
        ), t = t.sibling;
  }
  function my(t, l, e) {
    switch (t.tag) {
      case 26:
        _n(
          t,
          l,
          e
        ), t.flags & On && (t.memoizedState !== null ? m1(
          e,
          Ql,
          t.memoizedState,
          t.memoizedProps
        ) : (t = t.stateNode, (l & 335544128) === l && T0(e, t)));
        break;
      case 5:
        _n(
          t,
          l,
          e
        ), t.flags & On && (t = t.stateNode, (l & 335544128) === l && T0(e, t));
        break;
      case 3:
      case 4:
        var n = Ql;
        Ql = mu(t.stateNode.containerInfo), _n(
          t,
          l,
          e
        ), Ql = n;
        break;
      case 22:
        t.memoizedState === null && (n = t.alternate, n !== null && n.memoizedState !== null ? (n = On, On = 16777216, _n(
          t,
          l,
          e
        ), On = n) : _n(
          t,
          l,
          e
        ));
        break;
      case 30:
        if ((t.flags & On) !== 0 && (n = t.memoizedProps.name, n != null && n !== "auto")) {
          var a = t.stateNode;
          a.paired = null, bl === null && (bl = /* @__PURE__ */ new Map()), bl.set(n, a);
        }
        _n(
          t,
          l,
          e
        );
        break;
      default:
        _n(
          t,
          l,
          e
        );
    }
  }
  function hy(t) {
    var l = t.alternate;
    if (l !== null && (t = l.child, t !== null)) {
      l.child = null;
      do
        l = t.sibling, t.sibling = null, t = l;
      while (t !== null);
    }
  }
  function cu(t) {
    var l = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (l !== null)
        for (var e = 0; e < l.length; e++) {
          var n = l[e];
          Xt = n, gy(
            n,
            t
          );
        }
      hy(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        vy(t), t = t.sibling;
  }
  function vy(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        cu(t), t.flags & 2048 && $e(9, t, t.return);
        break;
      case 3:
        cu(t);
        break;
      case 12:
        cu(t);
        break;
      case 22:
        var l = t.stateNode;
        t.memoizedState !== null && l._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (l._visibility &= -3, ji(t)) : cu(t);
        break;
      default:
        cu(t);
    }
  }
  function ji(t) {
    var l = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (l !== null)
        for (var e = 0; e < l.length; e++) {
          var n = l[e];
          Xt = n, gy(
            n,
            t
          );
        }
      hy(t);
    }
    for (t = t.child; t !== null; ) {
      switch (l = t, l.tag) {
        case 0:
        case 11:
        case 15:
          $e(8, l, l.return), ji(l);
          break;
        case 22:
          e = l.stateNode, e._visibility & 2 && (e._visibility &= -3, ji(l));
          break;
        default:
          ji(l);
      }
      t = t.sibling;
    }
  }
  function gy(t, l) {
    for (; Xt !== null; ) {
      var e = Xt;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          $e(8, e, l);
          break;
        case 23:
        case 22:
          if (e.memoizedState !== null && e.memoizedState.cachePool !== null) {
            var n = e.memoizedState.cachePool.pool;
            n != null && n.refCount++;
          }
          break;
        case 24:
          Za(e.memoizedState.cache);
      }
      if (n = e.child, n !== null) n.return = e, Xt = n;
      else
        t: for (e = t; Xt !== null; ) {
          n = Xt;
          var a = n.sibling, u = n.return;
          if (iy(n), n === e) {
            Xt = null;
            break t;
          }
          if (a !== null) {
            a.return = u, Xt = a;
            break t;
          }
          Xt = u;
        }
    }
  }
  var ov = {
    getCacheForType: function(t) {
      var l = Vt(Dt), e = l.data.get(t);
      return e === void 0 && (e = t(), l.data.set(t, e)), e;
    },
    cacheSignal: function() {
      return Vt(Dt).controller.signal;
    }
  }, rv = typeof WeakMap == "function" ? WeakMap : Map, dt = 0, bt = null, tt = null, nt = 0, ht = 0, Tl = null, Fe = !1, ia = !1, uo = !1, Ae = 0, Ct = 0, Ie = 0, Cn = 0, Di = 0, El = 0, ca = 0, fu = null, dl = null, io = !1, Ui = 0, Sy = 0, Bi = 1 / 0, Hi = null, ke = null, Nt = 0, Zl = null, Mn = null, ae = 0, co = 0, fo = null, py = null, fa = null, oa = null, ra = null, ou = 0, Yi = null;
  function xl() {
    return (dt & 2) !== 0 && nt !== 0 ? nt & -nt : Y.T !== null ? po() : Er();
  }
  function by() {
    if (El === 0)
      if ((nt & 536870912) === 0 || k) {
        var t = Ru;
        Ru <<= 1, (Ru & 3932160) === 0 && (Ru = 262144), El = t;
      } else El = 536870912;
    return t = Zt.current, t !== null && (t.flags |= 32), El;
  }
  function sa(t, l) {
    if (l != null) {
      var e = t.stateNode, n = e.ref;
      n === null && (n = e.ref = t0(
        me(t.memoizedProps, e)
      )), oa === null && (oa = []), oa.push(l.bind(null, n));
    }
  }
  function yl(t, l, e) {
    (t === bt && (ht === 2 || ht === 9) || t.cancelPendingCommit !== null) && (da(t, 0), Pe(
      t,
      nt,
      El,
      !1
    )), Ma(t, e), ((dt & 2) === 0 || t !== bt) && (t === bt && ((dt & 2) === 0 && (Cn |= e), Ct === 4 && Pe(
      t,
      nt,
      El,
      !1
    )), ue(t));
  }
  function Ty(t, l, e) {
    if ((dt & 6) !== 0) throw Error(r(327));
    var n = !e && (l & 127) === 0 && (l & t.expiredLanes) === 0 || Ca(t, l), a = n ? yv(t, l) : ro(t, l, !0), u = n;
    do {
      if (a === 0) {
        ia && !n && Pe(t, l, 0, !1);
        break;
      } else {
        if (e = t.current.alternate, u && !sv(e)) {
          a = ro(t, l, !1), u = !1;
          continue;
        }
        if (a === 2) {
          if (u = l, t.errorRecoveryDisabledLanes & u)
            var c = 0;
          else
            c = t.pendingLanes & -536870913, c = c !== 0 ? c : c & 536870912 ? 536870912 : 0;
          if (c !== 0) {
            l = c;
            t: {
              var o = t;
              a = fu;
              var d = o.current.memoizedState.isDehydrated;
              if (d && (da(o, c).flags |= 256), c = ro(
                o,
                c,
                !1
              ), c !== 2 && c !== 6) {
                if (uo && !d) {
                  o.errorRecoveryDisabledLanes |= u, Cn |= u, a = 4;
                  break t;
                }
                u = dl, dl = a, u !== null && (dl === null ? dl = u : dl.push.apply(
                  dl,
                  u
                ));
              }
              a = c;
            }
            if (u = !1, a !== 2) continue;
          }
        }
        if (a === 1) {
          da(t, 0), Pe(t, l, 0, !0);
          break;
        }
        t: {
          switch (n = t, u = a, u) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((l & 4194048) !== l && (l & 62914560) !== l)
                break;
            case 6:
              Pe(
                n,
                l,
                El,
                !Fe
              );
              break t;
            case 2:
              dl = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if ((l & 62914560) === l && (a = Ui + 300 - ml(), 10 < a)) {
            if (Pe(
              n,
              l,
              El,
              !Fe
            ), Du(n, 0, !0) !== 0) break t;
            ae = l, n.timeoutHandle = Mo(
              Ey.bind(
                null,
                n,
                e,
                dl,
                Hi,
                io,
                l,
                El,
                Cn,
                ca,
                Fe,
                u,
                "Throttled",
                -0,
                0
              ),
              a
            );
            break t;
          }
          Ey(
            n,
            e,
            dl,
            Hi,
            io,
            l,
            El,
            Cn,
            ca,
            Fe,
            u,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    ue(t);
  }
  function Ey(t, l, e, n, a, u, c, o, d, S, x, N, v, E) {
    t.timeoutHandle = -1;
    var M = l.subtreeFlags, H = (u & 335544064) === u;
    if (N = null, (H || M & 8192 || (M & 16785408) === 16785408) && (N = {
      stylesheets: null,
      count: 0,
      imgCount: 0,
      imgBytes: 0,
      suspenseyImages: [],
      waitingForImages: !0,
      waitingForViewTransition: !1,
      unsuspend: Wl
    }, bl = null, my(
      l,
      u,
      N
    ), H && (M = N, H = t.containerInfo, H = (H.nodeType === 9 ? H : H.ownerDocument).__reactViewTransition, H != null && (M.count++, M.waitingForViewTransition = !0, M = gu.bind(M), H.finished.then(M, M))), M = (u & 62914560) === u ? Ui - ml() : (u & 4194048) === u ? Sy - ml() : 0, M = h1(
      N,
      M
    ), M !== null)) {
      ae = u, t.cancelPendingCommit = M(
        My.bind(
          null,
          t,
          l,
          u,
          e,
          n,
          a,
          c,
          o,
          d,
          S,
          x,
          N,
          null,
          v,
          E
        )
      ), Pe(t, u, c, !S);
      return;
    }
    My(
      t,
      l,
      u,
      e,
      n,
      a,
      c,
      o,
      d,
      S,
      x,
      N
    );
  }
  function sv(t) {
    for (var l = t; ; ) {
      var e = l.tag;
      if ((e === 0 || e === 11 || e === 15) && l.flags & 16384 && (e = l.updateQueue, e !== null && (e = e.stores, e !== null)))
        for (var n = 0; n < e.length; n++) {
          var a = e[n], u = a.getSnapshot;
          a = a.value;
          try {
            if (!Sl(u(), a)) return !1;
          } catch {
            return !1;
          }
        }
      if (e = l.child, l.subtreeFlags & 16384 && e !== null)
        e.return = l, l = e;
      else {
        if (l === t) break;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t) return !0;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    }
    return !0;
  }
  function Pe(t, l, e, n) {
    l = gr(t, l), l &= ~Di, l &= ~Cn, t.suspendedLanes |= l, t.pingedLanes &= ~l, n && (t.warmLanes |= l), n = t.expirationTimes;
    for (var a = l; 0 < a; ) {
      var u = 31 - vl(a), c = 1 << u;
      n[u] = -1, a &= ~c;
    }
    e !== 0 && pr(t, e, l);
  }
  function Li() {
    return (dt & 6) === 0 ? (ru(0), !1) : !0;
  }
  function oo() {
    if (tt !== null) {
      if (ht === 0)
        var t = tt.return;
      else
        t = tt, Se = gn = null, gf(t), kn = null, Ja = 0, t = tt;
      for (; t !== null; )
        wd(t.alternate, t), t = t.return;
      tt = null;
    }
  }
  function da(t, l) {
    var e = t.timeoutHandle;
    return e !== -1 && (t.timeoutHandle = -1, Bv(e)), e = t.cancelPendingCommit, e !== null && (t.cancelPendingCommit = null, e()), ae = 0, oo(), bt = t, tt = e = ve(t.current, null), nt = l, ht = 0, Tl = null, Fe = !1, ia = Ca(t, l), uo = !1, ca = El = Di = Cn = Ie = Ct = 0, dl = fu = null, io = !1, Ae = gr(t, l), Ku(), e;
  }
  function xy(t, l) {
    W = null, Y.H = gi, l === In || l === ni ? (l = Ms(), ht = 3) : l === nf ? (l = Ms(), ht = 4) : ht = l === jf ? 8 : l !== null && typeof l == "object" && typeof l.then == "function" ? 6 : 1, Tl = l, tt === null && (Ct = 1, Si(
      t,
      Rl(l, t.current)
    ));
  }
  function Ay() {
    var t = Zt.current;
    return t === null ? !0 : (nt & 4194048) === nt ? It === null : (nt & 62914560) === nt || (nt & 536870912) !== 0 ? t === It : !1;
  }
  function zy() {
    var t = Y.H;
    return Y.H = gi, t === null ? gi : t;
  }
  function Ny() {
    var t = Y.A;
    return Y.A = ov, t;
  }
  function qi() {
    Ct = 4, Fe || (nt & 4194048) !== nt && Zt.current !== null || (ia = !0), (Ie & 134217727) === 0 && (Cn & 134217727) === 0 || bt === null || Pe(
      bt,
      nt,
      El,
      !1
    );
  }
  function ro(t, l, e) {
    var n = dt;
    dt |= 2;
    var a = zy(), u = Ny();
    (bt !== t || nt !== l) && (Hi = null, da(t, l)), l = !1;
    var c = Ct;
    t: do
      try {
        if (ht !== 0 && tt !== null) {
          var o = tt, d = Tl;
          switch (ht) {
            case 8:
              oo(), c = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              Zt.current === null && (l = !0);
              var S = ht;
              if (ht = 0, Tl = null, ya(t, o, d, S), e && ia) {
                c = 0;
                break t;
              }
              break;
            default:
              S = ht, ht = 0, Tl = null, ya(t, o, d, S);
          }
        }
        dv(), c = Ct;
        break;
      } catch (x) {
        xy(t, x);
      }
    while (!0);
    return l && t.shellSuspendCounter++, Se = gn = null, dt = n, Y.H = a, Y.A = u, tt === null && (bt = null, nt = 0, Ku()), c;
  }
  function dv() {
    for (; tt !== null; ) Oy(tt);
  }
  function yv(t, l) {
    var e = dt;
    dt |= 2;
    var n = zy(), a = Ny();
    bt !== t || nt !== l ? (Hi = null, Bi = ml() + 500, da(t, l)) : ia = Ca(
      t,
      l
    );
    t: do
      try {
        if (ht !== 0 && tt !== null) {
          l = tt;
          var u = Tl;
          l: switch (ht) {
            case 1:
              ht = 0, Tl = null, ya(t, l, u, 1);
              break;
            case 2:
            case 9:
              if (_s(u)) {
                ht = 0, Tl = null, _y(l);
                break;
              }
              l = function() {
                ht !== 2 && ht !== 9 || bt !== t || (ht = 7), ue(t);
              }, u.then(l, l);
              break t;
            case 3:
              ht = 7;
              break t;
            case 4:
              ht = 5;
              break t;
            case 7:
              _s(u) ? (ht = 0, Tl = null, _y(l)) : (ht = 0, Tl = null, ya(t, l, u, 7));
              break;
            case 5:
              var c = null;
              switch (tt.tag) {
                case 26:
                  c = tt.memoizedState;
                case 5:
                case 27:
                  var o = tt;
                  if (c ? p0(c) : o.stateNode.complete) {
                    ht = 0, Tl = null;
                    var d = o.sibling;
                    if (d !== null) tt = d;
                    else {
                      var S = o.return;
                      S !== null ? (tt = S, Gi(S)) : tt = null;
                    }
                    break l;
                  }
              }
              ht = 0, Tl = null, ya(t, l, u, 5);
              break;
            case 6:
              ht = 0, Tl = null, ya(t, l, u, 6);
              break;
            case 8:
              oo(), Ct = 6;
              break t;
            default:
              throw Error(r(462));
          }
        }
        mv();
        break;
      } catch (x) {
        xy(t, x);
      }
    while (!0);
    return Se = gn = null, Y.H = n, Y.A = a, dt = e, tt !== null ? 0 : (bt = null, nt = 0, Ku(), Ct);
  }
  function mv() {
    for (; tt !== null && !Rm(); )
      Oy(tt);
  }
  function Oy(t) {
    var l = Vd(t.alternate, t, Ae);
    t.memoizedProps = t.pendingProps, l === null ? Gi(t) : tt = l;
  }
  function _y(t) {
    var l = t, e = l.alternate;
    switch (l.tag) {
      case 15:
      case 0:
        l = Hd(
          e,
          l,
          l.pendingProps,
          l.type,
          void 0,
          nt
        );
        break;
      case 11:
        l = Hd(
          e,
          l,
          l.pendingProps,
          l.type.render,
          l.ref,
          nt
        );
        break;
      case 5:
        gf(l);
        var n = l;
        n === qt && (k ? (ku(n), n.tag === 5 && n.stateNode != null && (Et = n.stateNode)) : (ku(n), k = !0));
      default:
        wd(e, l), l = tt = gs(l, Ae), l = Vd(e, l, Ae);
    }
    t.memoizedProps = t.pendingProps, l === null ? Gi(t) : tt = l;
  }
  function ya(t, l, e, n) {
    Se = gn = null, gf(l), kn = null, Ja = 0;
    var a = l.return;
    try {
      if (lv(
        t,
        a,
        l,
        e,
        nt
      )) {
        Ct = 1, Si(
          t,
          Rl(e, t.current)
        ), tt = null;
        return;
      }
    } catch (u) {
      if (a !== null) throw tt = a, u;
      Ct = 1, Si(
        t,
        Rl(e, t.current)
      ), tt = null;
      return;
    }
    l.flags & 32768 ? (k || n === 1 ? t = !0 : ia || (nt & 536870912) !== 0 ? t = !1 : (Fe = t = !0, (n === 2 || n === 9 || n === 3 || n === 6) && (n = Zt.current, n !== null && n.tag === 13 && (n.flags |= 16384))), Cy(l, t)) : Gi(l);
  }
  function Gi(t) {
    var l = t;
    do {
      if ((l.flags & 32768) !== 0) {
        Cy(
          l,
          Fe
        );
        return;
      }
      t = l.return;
      var e = uv(
        l.alternate,
        l,
        Ae
      );
      if (e !== null) {
        tt = e;
        return;
      }
      if (l = l.sibling, l !== null) {
        tt = l;
        return;
      }
      tt = l = t;
    } while (l !== null);
    Ct === 0 && (Ct = 5);
  }
  function Cy(t, l) {
    do {
      var e = iv(t.alternate, t);
      if (e !== null) {
        e.flags &= 32767, tt = e;
        return;
      }
      if (e = t.return, e !== null && (e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null), !l && (t = t.sibling, t !== null)) {
        tt = t;
        return;
      }
      tt = t = e;
    } while (t !== null);
    Ct = 6, tt = null;
  }
  function My(t, l, e, n, a, u, c, o, d, S, x, N) {
    t.cancelPendingCommit = null;
    do
      Xi();
    while (Nt !== 0);
    if ((dt & 6) !== 0) throw Error(r(327));
    if (l !== null) {
      if (l === t.current) throw Error(r(177));
      t === bt && (tt = bt = null, nt = 0), Mn = l, Zl = t, ae = e, fo = a, py = n, hv(
        t,
        l,
        e,
        c,
        o,
        d,
        N
      );
    }
  }
  function hv(t, l, e, n, a, u, c) {
    var o = l.lanes | l.childLanes;
    if (co = o, o |= Zc, Xm(
      t,
      e,
      o,
      n,
      a,
      u
    ), oa = null, (e & 335544064) === e ? (ra = Vh(t), n = 10262) : (ra = null, n = 10256), (l.subtreeFlags & n) !== 0 || (l.flags & n) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, Tv(Cu, function() {
      return ho(), null;
    })) : (t.callbackNode = null, t.callbackPriority = 0), Ni = !1, n = (l.flags & 13878) !== 0, (l.subtreeFlags & 13878) !== 0 || n) {
      n = Y.T, Y.T = null, a = X.p, X.p = 2, u = dt, dt |= 4;
      try {
        cv(t, l, e);
      } finally {
        dt = u, X.p = a, Y.T = n;
      }
    }
    Nt = 1, Ni ? fa = Xv(
      c,
      t.containerInfo,
      ra,
      so,
      yo,
      gv,
      mo,
      ho,
      vv
    ) : (so(), yo(), mo());
  }
  function vv(t) {
    if (Nt !== 0) {
      var l = Zl.onRecoverableError;
      l(t, { componentStack: null });
    }
  }
  function gv() {
    Nt === 3 && (Nt = 0, dy(Mn, Zl), Nt = 4);
  }
  function so() {
    if (Nt === 1) {
      Nt = 0;
      var t = Zl, l = Mn, e = ae, n = (l.flags & 13878) !== 0;
      if ((l.subtreeFlags & 13878) !== 0 || n) {
        n = Y.T, Y.T = null;
        var a = X.p;
        X.p = 2;
        var u = dt;
        dt |= 4;
        try {
          uu = Ci = !1, ry(l, t, e), e = Oo;
          var c = cs(t.containerInfo), o = e.focusedElem, d = e.selectionRange;
          if (c !== o && o && o.ownerDocument && is(
            o.ownerDocument.documentElement,
            o
          )) {
            if (d !== null && qc(o)) {
              var S = d.start, x = d.end;
              if (x === void 0 && (x = S), "selectionStart" in o)
                o.selectionStart = S, o.selectionEnd = Math.min(
                  x,
                  o.value.length
                );
              else {
                var N = o.ownerDocument || document, v = N && N.defaultView || window;
                if (v.getSelection) {
                  var E = v.getSelection(), M = o.textContent.length, H = Math.min(d.start, M), F = d.end === void 0 ? H : Math.min(d.end, M);
                  !E.extend && H > F && (c = F, F = H, H = c);
                  var g = us(
                    o,
                    H
                  ), y = us(
                    o,
                    F
                  );
                  if (g && y && (E.rangeCount !== 1 || E.anchorNode !== g.node || E.anchorOffset !== g.offset || E.focusNode !== y.node || E.focusOffset !== y.offset)) {
                    var p = N.createRange();
                    p.setStart(g.node, g.offset), E.removeAllRanges(), H > F ? (E.addRange(p), E.extend(y.node, y.offset)) : (p.setEnd(y.node, y.offset), E.addRange(p));
                  }
                }
              }
            }
            for (N = [], E = o; E = E.parentNode; )
              E.nodeType === 1 && N.push({
                element: E,
                left: E.scrollLeft,
                top: E.scrollTop
              });
            for (typeof o.focus == "function" && o.focus(), o = 0; o < N.length; o++) {
              var z = N[o];
              z.element.scrollLeft = z.left, z.element.scrollTop = z.top;
            }
          }
          Ta = !!No, Oo = No = null;
        } finally {
          dt = u, X.p = a, Y.T = n;
        }
      }
      t.current = l, Nt = 2;
    }
  }
  function yo() {
    if (Nt === 2) {
      Nt = 0;
      var t = Zl, l = Mn, e = (l.flags & 8772) !== 0;
      if ((l.subtreeFlags & 8772) !== 0 || e) {
        e = Y.T, Y.T = null;
        var n = X.p;
        X.p = 2;
        var a = dt;
        dt |= 4;
        try {
          ay(t, l.alternate, l);
        } finally {
          dt = a, X.p = n, Y.T = e;
        }
      }
      Nt = 3;
    }
  }
  function mo() {
    if (Nt === 4 || Nt === 3) {
      Nt = 0;
      var t = fa;
      fa = null, jm();
      var l = Zl, e = Mn, n = ae, a = py, u = (n & 335544064) === n ? 10262 : 10256;
      if ((e.subtreeFlags & u) !== 0 || (e.flags & u) !== 0 ? Nt = 5 : (Nt = 0, Mn = Zl = null, Ry(l, l.pendingLanes)), u = l.pendingLanes, u === 0 && (ke = null), Tc(n), e = e.stateNode, hl && typeof hl.onCommitFiberRoot == "function")
        try {
          hl.onCommitFiberRoot(
            _a,
            e,
            void 0,
            (e.current.flags & 128) === 128
          );
        } catch {
        }
      if (a !== null) {
        e = Y.T, u = X.p, X.p = 2, Y.T = null;
        try {
          for (var c = l.onRecoverableError, o = 0; o < a.length; o++) {
            var d = a[o];
            c(d.value, {
              componentStack: d.stack
            });
          }
        } finally {
          Y.T = e, X.p = u;
        }
      }
      if (a = oa, c = ra, ra = null, a !== null && (oa = null, c === null && (c = []), t !== null))
        for (d = 0; d < a.length; d++)
          e = (0, a[d])(
            c
          ), e !== void 0 && t.finished.finally(e);
      (ae & 3) !== 0 && Xi(), ue(l), u = l.pendingLanes, (n & 261930) !== 0 && (u & 42) !== 0 ? l === Yi ? ou++ : (ou = 0, Yi = l) : (ou = 0, Yi = null), ru(0);
    }
  }
  function Ry(t, l) {
    (t.pooledCacheLanes &= l) === 0 && (l = t.pooledCache, l != null && (t.pooledCache = null, Za(l)));
  }
  function Xi() {
    return fa !== null && (fa.skipTransition(), fa = null), so(), yo(), mo(), ho();
  }
  function ho() {
    if (Nt !== 5) return !1;
    var t = Zl, l = co;
    co = 0;
    var e = Tc(ae), n = Y.T, a = X.p;
    try {
      X.p = 32 > e ? 32 : e, Y.T = null, e = fo, fo = null;
      var u = Zl, c = ae;
      if (Nt = 0, Mn = Zl = null, ae = 0, (dt & 6) !== 0) throw Error(r(331));
      var o = dt;
      if (dt |= 4, vy(u.current), yy(
        u,
        u.current,
        c,
        e
      ), dt = o, ru(0, !1), hl && typeof hl.onPostCommitFiberRoot == "function")
        try {
          hl.onPostCommitFiberRoot(_a, u);
        } catch {
        }
      return !0;
    } finally {
      X.p = a, Y.T = n, Ry(t, l);
    }
  }
  function jy(t, l, e) {
    l = Rl(e, l), l = Rf(t.stateNode, l, 2), t = Ze(t, l, 2), t !== null && (Ma(t, 2), ue(t));
  }
  function vt(t, l, e) {
    if (t.tag === 3)
      jy(t, t, e);
    else
      for (; l !== null; ) {
        if (l.tag === 3) {
          jy(
            l,
            t,
            e
          );
          break;
        } else if (l.tag === 1) {
          var n = l.stateNode;
          if (typeof l.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (ke === null || !ke.has(n))) {
            t = Rl(e, t), e = _d(2), n = Ze(l, e, 2), n !== null && (Cd(
              e,
              n,
              l,
              t
            ), Ma(n, 2), ue(n));
            break;
          }
        }
        l = l.return;
      }
  }
  function vo(t, l, e) {
    var n = t.pingCache;
    if (n === null) {
      n = t.pingCache = new rv();
      var a = /* @__PURE__ */ new Set();
      n.set(l, a);
    } else
      a = n.get(l), a === void 0 && (a = /* @__PURE__ */ new Set(), n.set(l, a));
    a.has(e) || (uo = !0, a.add(e), t = Sv.bind(null, t, l, e), l.then(t, t));
  }
  function Sv(t, l, e) {
    var n = t.pingCache;
    n !== null && n.delete(l), t.pingedLanes |= t.suspendedLanes & e, t.warmLanes &= ~e, bt === t && (nt & e) === e && ((Ct === 4 || Ct === 3 && (nt & 62914560) === nt && 300 > ml() - Ui) && (dt & 2) === 0 ? da(t, 0) : Di |= e, ca === nt && (ca = 0)), ue(t);
  }
  function Dy(t, l) {
    l === 0 && (l = Sr()), t = mn(t, l), t !== null && (Ma(t, l), ue(t));
  }
  function pv(t) {
    var l = t.memoizedState, e = 0;
    l !== null && (e = l.retryLane), Dy(t, e);
  }
  function bv(t, l) {
    var e = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var n = t.stateNode, a = t.memoizedState;
        a !== null && (e = a.retryLane);
        break;
      case 19:
        n = t.stateNode;
        break;
      case 22:
        n = t.stateNode._retryCache;
        break;
      default:
        throw Error(r(314));
    }
    n !== null && n.delete(l), Dy(t, e);
  }
  function Tv(t, l) {
    return gc(t, l);
  }
  var ma = null, ha = null, go = !1, Qi = !1, So = !1, tn = 0;
  function ue(t) {
    t !== ha && t.next === null && (ha === null ? ma = ha = t : ha = ha.next = t), Qi = !0, go || (go = !0, xv());
  }
  function ru(t, l) {
    if (!So && Qi) {
      So = !0;
      do
        for (var e = !1, n = ma; n !== null; ) {
          if (t !== 0) {
            var a = n.pendingLanes;
            if (a === 0) var u = 0;
            else {
              var c = n.suspendedLanes, o = n.pingedLanes;
              u = (1 << 31 - vl(42 | t) + 1) - 1, u &= a & ~(c & ~o), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (e = !0, Yy(n, u));
          } else
            u = nt, u = Du(
              n,
              n === bt ? u : 0,
              n.cancelPendingCommit !== null || n.timeoutHandle !== -1
            ), (u & 3) === 0 || Ca(n, u) || (e = !0, Yy(n, u));
          n = n.next;
        }
      while (e);
      So = !1;
    }
  }
  function Ev() {
    Uy();
  }
  function Uy() {
    Qi = go = !1;
    var t = 0;
    tn !== 0 && Uv() && (t = tn);
    for (var l = ml(), e = null, n = ma; n !== null; ) {
      var a = n.next, u = By(n, l);
      u === 0 ? (n.next = null, e === null ? ma = a : e.next = a, a === null && (ha = e)) : (e = n, (t !== 0 || (u & 3) !== 0) && (Qi = !0)), n = a;
    }
    Nt !== 0 && Nt !== 5 || ru(t), tn !== 0 && (tn = 0);
  }
  function By(t, l) {
    for (var e = t.suspendedLanes, n = t.pingedLanes, a = t.expirationTimes, u = t.pendingLanes & -62914561; 0 < u; ) {
      var c = 31 - vl(u), o = 1 << c, d = a[c];
      d === -1 ? ((o & e) === 0 || (o & n) !== 0) && (a[c] = Gm(o, l)) : d <= l && (t.expiredLanes |= o), u &= ~o;
    }
    if (l = bt, e = nt, e = Du(
      t,
      t === l ? e : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), n = t.callbackNode, e === 0 || t === l && (ht === 2 || ht === 9) || t.cancelPendingCommit !== null)
      return n !== null && n !== null && Sc(n), t.callbackNode = null, t.callbackPriority = 0;
    if ((e & 3) === 0 || Ca(t, e)) {
      if (l = e & -e, l === t.callbackPriority) return l;
      switch (n !== null && Sc(n), Tc(e)) {
        case 2:
        case 8:
          e = hr;
          break;
        case 32:
          e = Cu;
          break;
        case 268435456:
          e = vr;
          break;
        default:
          e = Cu;
      }
      return n = Hy.bind(null, t), e = gc(e, n), t.callbackPriority = l, t.callbackNode = e, l;
    }
    return n !== null && n !== null && Sc(n), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function Hy(t, l) {
    if (Nt !== 0 && Nt !== 5)
      return t.callbackNode = null, t.callbackPriority = 0, null;
    var e = t.callbackNode;
    if (Xi() && t.callbackNode !== e)
      return null;
    var n = nt;
    return n = Du(
      t,
      t === bt ? n : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), n === 0 ? null : (Ty(t, n, l), By(t, ml()), t.callbackNode != null && t.callbackNode === e ? Hy.bind(null, t) : null);
  }
  function Yy(t, l) {
    if (Xi()) return null;
    Ty(t, l, !0);
  }
  function xv() {
    Hv(function() {
      (dt & 6) !== 0 ? gc(
        mr,
        Ev
      ) : Uy();
    });
  }
  function po() {
    if (tn === 0) {
      var t = bn;
      t === 0 && (t = Mu, Mu <<= 1, (Mu & 261888) === 0 && (Mu = 256)), tn = t;
    }
    return tn;
  }
  function Ly(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : Lu(t);
  }
  function Av(t, l, e, n, a) {
    if (l === "submit" && e && e.stateNode === a) {
      var u = Ly(
        (a[fl] || null).action
      ), c = n.submitter;
      c && (l = (l = c[fl] || null) ? Ly(l.formAction) : c.getAttribute("formAction"), l !== null && (u = l, c = null));
      var o = new Qu(
        "action",
        "action",
        null,
        n,
        a
      );
      t.push({
        event: o,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (n.defaultPrevented) {
                if (tn !== 0) {
                  var d = new FormData(a, c);
                  Nf(
                    e,
                    {
                      pending: !0,
                      data: d,
                      method: a.method,
                      action: u
                    },
                    null,
                    d
                  );
                }
              } else
                typeof u == "function" && (o.preventDefault(), d = new FormData(a, c), Nf(
                  e,
                  {
                    pending: !0,
                    data: d,
                    method: a.method,
                    action: u
                  },
                  u,
                  d
                ));
            },
            currentTarget: a
          }
        ]
      });
    }
  }
  for (var bo = 0; bo < Vc.length; bo++) {
    var To = Vc[bo], zv = To.toLowerCase(), Nv = To[0].toUpperCase() + To.slice(1);
    Gl(
      zv,
      "on" + Nv
    );
  }
  Gl(rs, "onAnimationEnd"), Gl(ss, "onAnimationIteration"), Gl(ds, "onAnimationStart"), Gl("dblclick", "onDoubleClick"), Gl("focusin", "onFocus"), Gl("focusout", "onBlur"), Gl(Bh, "onTransitionRun"), Gl(Hh, "onTransitionStart"), Gl(Yh, "onTransitionCancel"), Gl(ys, "onTransitionEnd"), Yn("onMouseEnter", ["mouseout", "mouseover"]), Yn("onMouseLeave", ["mouseout", "mouseover"]), Yn("onPointerEnter", ["pointerout", "pointerover"]), Yn("onPointerLeave", ["pointerout", "pointerover"]), sn(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), sn(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), sn("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), sn(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), sn(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), sn(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var su = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Ov = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(su)
  );
  function qy(t, l) {
    l = (l & 4) !== 0;
    for (var e = 0; e < t.length; e++) {
      var n = t[e], a = n.event;
      n = n.listeners;
      t: {
        var u = void 0;
        if (l)
          for (var c = n.length - 1; 0 <= c; c--) {
            var o = n[c], d = o.instance, S = o.currentTarget;
            if (o = o.listener, d !== u && a.isPropagationStopped())
              break t;
            u = o, a.currentTarget = S;
            try {
              u(a);
            } catch (x) {
              wu(x);
            }
            a.currentTarget = null, u = d;
          }
        else
          for (c = 0; c < n.length; c++) {
            if (o = n[c], d = o.instance, S = o.currentTarget, o = o.listener, d !== u && a.isPropagationStopped())
              break t;
            u = o, a.currentTarget = S;
            try {
              u(a);
            } catch (x) {
              wu(x);
            }
            a.currentTarget = null, u = d;
          }
      }
    }
  }
  function lt(t, l) {
    var e = l[Ar];
    e === void 0 && (e = l[Ar] = /* @__PURE__ */ new Set());
    var n = t + "__bubble";
    e.has(n) || (Gy(l, t, 2, !1), e.add(n));
  }
  function Eo(t, l, e) {
    var n = 0;
    l && (n |= 4), Gy(
      e,
      t,
      n,
      l
    );
  }
  var Vi = "_reactListening" + Math.random().toString(36).slice(2);
  function xo(t) {
    if (!t[Vi]) {
      t[Vi] = !0, Or.forEach(function(e) {
        e !== "selectionchange" && (Ov.has(e) || Eo(e, !1, t), Eo(e, !0, t));
      });
      var l = t.nodeType === 9 ? t : t.ownerDocument;
      l === null || l[Vi] || (l[Vi] = !0, Eo("selectionchange", !1, l));
    }
  }
  function Gy(t, l, e, n) {
    switch (C0(l)) {
      case 2:
        var a = p1;
        break;
      case 8:
        a = b1;
        break;
      default:
        a = Vo;
    }
    e = a.bind(
      null,
      l,
      e,
      t
    ), a = void 0, !Cc || l !== "touchstart" && l !== "touchmove" && l !== "wheel" || (a = !0), n ? a !== void 0 ? t.addEventListener(l, e, {
      capture: !0,
      passive: a
    }) : t.addEventListener(l, e, !0) : a !== void 0 ? t.addEventListener(l, e, {
      passive: a
    }) : t.addEventListener(l, e, !1);
  }
  function Ao(t, l, e, n, a) {
    var u = n;
    if ((l & 1) === 0 && (l & 2) === 0 && n !== null)
      t: for (; ; ) {
        if (n === null) return;
        var c = n.tag;
        if (c === 3 || c === 4) {
          var o = n.stateNode.containerInfo;
          if (o === a) break;
          if (c === 4)
            for (c = n.return; c !== null; ) {
              var d = c.tag;
              if ((d === 3 || d === 4) && c.stateNode.containerInfo === a)
                return;
              c = c.return;
            }
          for (; o !== null; ) {
            if (c = rn(o), c === null) return;
            if (d = c.tag, d === 5 || d === 6 || d === 26 || d === 27) {
              n = u = c;
              continue t;
            }
            o = o.parentNode;
          }
        }
        n = n.return;
      }
    Gr(function() {
      var S = u, x = Oc(e), N = [];
      t: {
        var v = ms.get(t);
        if (v !== void 0) {
          var E = Qu, M = t;
          switch (t) {
            case "keypress":
              if (Gu(e) === 0) break t;
            case "keydown":
            case "keyup":
              E = sh;
              break;
            case "focusin":
              M = "focus", E = Dc;
              break;
            case "focusout":
              M = "blur", E = Dc;
              break;
            case "beforeblur":
            case "afterblur":
              E = Dc;
              break;
            case "click":
              if (e.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              E = Vr;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              E = Pm;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              E = vh;
              break;
            case rs:
            case ss:
            case ds:
              E = eh;
              break;
            case ys:
              E = Sh;
              break;
            case "scroll":
            case "scrollend":
              E = Im;
              break;
            case "wheel":
              E = bh;
              break;
            case "copy":
            case "cut":
            case "paste":
              E = ah;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              E = wr;
              break;
            case "submit":
              E = mh;
              break;
            case "toggle":
            case "beforetoggle":
              E = Eh;
          }
          var H = (l & 4) !== 0, F = !H && (t === "scroll" || t === "scrollend"), g = H ? v !== null ? v + "Capture" : null : v;
          H = [];
          for (var y = S, p; y !== null; ) {
            var z = y;
            if (p = z.stateNode, z = z.tag, z !== 5 && z !== 26 && z !== 27 || p === null || g === null || (z = Da(y, g), z != null && H.push(
              du(y, z, p)
            )), F) break;
            y = y.return;
          }
          0 < H.length && (v = new E(
            v,
            M,
            null,
            e,
            x
          ), N.push({ event: v, listeners: H }));
        }
      }
      if ((l & 7) === 0) {
        t: {
          if (E = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout", E && e !== Nc && (M = e.relatedTarget || e.fromElement) && (rn(M) || M[Un]))
            break t;
          (v || E) && (M = x.window === x ? x : (E = x.ownerDocument) ? E.defaultView || E.parentWindow : window, v ? (E = e.relatedTarget || e.toElement, v = S, E = E ? rn(E) : null, E !== null && (F = A(E), H = E.tag, E !== F || H !== 5 && H !== 27 && H !== 6) && (E = null)) : (v = null, E = S), v !== E && (H = Vr, z = "onMouseLeave", g = "onMouseEnter", y = "mouse", (t === "pointerout" || t === "pointerover") && (H = wr, z = "onPointerLeave", g = "onPointerEnter", y = "pointer"), F = v == null ? M : ja(v), p = E == null ? M : ja(E), M = new H(
            z,
            y + "leave",
            v,
            e,
            x
          ), M.target = F, M.relatedTarget = p, z = null, rn(x) === S && (H = new H(
            g,
            y + "enter",
            E,
            e,
            x
          ), H.target = p, H.relatedTarget = F, z = H), F = z, H = v && E ? Pt(
            v,
            E,
            _v
          ) : null, v !== null && Xy(
            N,
            M,
            v,
            H,
            !1
          ), E !== null && F !== null && Xy(
            N,
            F,
            E,
            H,
            !0
          )));
        }
        t: {
          if (v = S ? ja(S) : window, E = v.nodeName && v.nodeName.toLowerCase(), E === "select" || E === "input" && v.type === "file")
            var U = Pr;
          else if (Ir(v))
            if (ts)
              U = jh;
            else {
              U = Mh;
              var at = Ch;
            }
          else
            E = v.nodeName, !E || E.toLowerCase() !== "input" || v.type !== "checkbox" && v.type !== "radio" ? S && zc(S.elementType) && (U = Pr) : U = Rh;
          if (U && (U = U(t, S))) {
            kr(
              N,
              U,
              e,
              x
            );
            break t;
          }
          at && at(t, v, S);
        }
        switch (at = S ? ja(S) : window, t) {
          case "focusin":
            (Ir(at) || at.contentEditable === "true") && (Vn = at, Gc = S, Xa = null);
            break;
          case "focusout":
            Xa = Gc = Vn = null;
            break;
          case "mousedown":
            Xc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Xc = !1, fs(N, e, x);
            break;
          case "selectionchange":
            if (Uh) break;
          case "keydown":
          case "keyup":
            fs(N, e, x);
        }
        var G;
        if (Bc)
          t: {
            switch (t) {
              case "compositionstart":
                var V = "onCompositionStart";
                break t;
              case "compositionend":
                V = "onCompositionEnd";
                break t;
              case "compositionupdate":
                V = "onCompositionUpdate";
                break t;
            }
            V = void 0;
          }
        else
          Qn ? Wr(t, e) && (V = "onCompositionEnd") : t === "keydown" && e.keyCode === 229 && (V = "onCompositionStart");
        V && (Kr && e.locale !== "ko" && (Qn || V !== "onCompositionStart" ? V === "onCompositionEnd" && Qn && (G = Xr()) : (Be = x, Mc = "value" in Be ? Be.value : Be.textContent, Qn = !0)), at = Zi(S, V), 0 < at.length && (V = new Zr(
          V,
          t,
          null,
          e,
          x
        ), N.push({ event: V, listeners: at }), G ? V.data = G : (G = Fr(e), G !== null && (V.data = G)))), (G = Ah ? zh(t, e) : Nh(t, e)) && (V = Zi(S, "onBeforeInput"), 0 < V.length && (at = new Zr(
          "onBeforeInput",
          "beforeinput",
          null,
          e,
          x
        ), N.push({
          event: at,
          listeners: V
        }), at.data = G)), Av(
          N,
          t,
          S,
          e,
          x
        );
      }
      qy(N, l);
    });
  }
  function du(t, l, e) {
    return {
      instance: t,
      listener: l,
      currentTarget: e
    };
  }
  function Zi(t, l) {
    for (var e = l + "Capture", n = []; t !== null; ) {
      var a = t, u = a.stateNode;
      if (a = a.tag, a !== 5 && a !== 26 && a !== 27 || u === null || (a = Da(t, e), a != null && n.unshift(
        du(t, a, u)
      ), a = Da(t, l), a != null && n.push(
        du(t, a, u)
      )), t.tag === 3) return n;
      t = t.return;
    }
    return [];
  }
  function _v(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Xy(t, l, e, n, a) {
    for (var u = l._reactName, c = []; e !== null && e !== n; ) {
      var o = e, d = o.alternate, S = o.stateNode;
      if (o = o.tag, d !== null && d === n) break;
      o !== 5 && o !== 26 && o !== 27 || S === null || (d = S, a ? (S = Da(e, u), S != null && c.unshift(
        du(e, S, d)
      )) : a || (S = Da(e, u), S != null && c.push(
        du(e, S, d)
      ))), e = e.return;
    }
    c.length !== 0 && t.push({ event: l, listeners: c });
  }
  var Cv = /\r\n?/g, Mv = /\u0000|\uFFFD/g;
  function Qy(t) {
    return (typeof t == "string" ? t : "" + t).replace(Cv, `
`).replace(Mv, "");
  }
  function Vy(t, l) {
    return l = Qy(l), Qy(t) === l;
  }
  function gt(t, l, e, n, a, u) {
    switch (e) {
      case "children":
        if (typeof n == "string")
          l === "body" || l === "textarea" && n === "" || qn(t, n);
        else if (typeof n == "number" || typeof n == "bigint")
          l !== "body" && qn(t, "" + n);
        else return;
        break;
      case "className":
        Yu(t, "class", n);
        break;
      case "tabIndex":
        Yu(t, "tabindex", n);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Yu(t, e, n);
        break;
      case "style":
        Lr(t, n, u);
        return;
      case "data":
        if (l !== "object") {
          Yu(t, "data", n);
          break;
        }
      case "src":
      case "href":
        if (n === "" && (l !== "a" || e !== "href")) {
          t.removeAttribute(e);
          break;
        }
        if (n == null || typeof n == "function" || typeof n == "symbol" || typeof n == "boolean") {
          t.removeAttribute(e);
          break;
        }
        n = Lu(n), t.setAttribute(e, n);
        break;
      case "action":
      case "formAction":
        if (typeof n == "function") {
          t.setAttribute(
            e,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof u == "function" && (e === "formAction" ? (l !== "input" && gt(t, l, "name", a.name, a, null), gt(
            t,
            l,
            "formEncType",
            a.formEncType,
            a,
            null
          ), gt(
            t,
            l,
            "formMethod",
            a.formMethod,
            a,
            null
          ), gt(
            t,
            l,
            "formTarget",
            a.formTarget,
            a,
            null
          )) : (gt(t, l, "encType", a.encType, a, null), gt(t, l, "method", a.method, a, null), gt(t, l, "target", a.target, a, null)));
        if (n == null || typeof n == "symbol" || typeof n == "boolean") {
          t.removeAttribute(e);
          break;
        }
        n = Lu(n), t.setAttribute(e, n);
        break;
      case "onClick":
        n != null && (t.onclick = Wl);
        return;
      case "onScroll":
        n != null && lt("scroll", t);
        return;
      case "onScrollEnd":
        n != null && lt("scrollend", t);
        return;
      case "dangerouslySetInnerHTML":
        if (n != null) {
          if (typeof n != "object" || !("__html" in n))
            throw Error(r(61));
          if (e = n.__html, e != null) {
            if (a.children != null) throw Error(r(60));
            u?.__html !== e && (t.innerHTML = e);
          }
        }
        break;
      case "multiple":
        t.multiple = n && typeof n != "function" && typeof n != "symbol";
        break;
      case "muted":
        t.muted = n && typeof n != "function" && typeof n != "symbol";
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
        if (n == null || typeof n == "function" || typeof n == "boolean" || typeof n == "symbol") {
          t.removeAttribute("xlink:href");
          break;
        }
        e = Lu(n), t.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          e
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
        n != null && typeof n != "function" && typeof n != "symbol" ? t.setAttribute(e, n) : t.removeAttribute(e);
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
        n && typeof n != "function" && typeof n != "symbol" ? t.setAttribute(e, "") : t.removeAttribute(e);
        break;
      case "capture":
      case "download":
        n === !0 ? t.setAttribute(e, "") : n !== !1 && n != null && typeof n != "function" && typeof n != "symbol" ? t.setAttribute(e, n) : t.removeAttribute(e);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        n != null && typeof n != "function" && typeof n != "symbol" && !isNaN(n) && 1 <= n ? t.setAttribute(e, n) : t.removeAttribute(e);
        break;
      case "rowSpan":
      case "start":
        n == null || typeof n == "function" || typeof n == "symbol" || isNaN(n) ? t.removeAttribute(e) : t.setAttribute(e, n);
        break;
      case "popover":
        lt("beforetoggle", t), lt("toggle", t), Hu(t, "popover", n);
        break;
      case "xlinkActuate":
        de(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          n
        );
        break;
      case "xlinkArcrole":
        de(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          n
        );
        break;
      case "xlinkRole":
        de(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          n
        );
        break;
      case "xlinkShow":
        de(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          n
        );
        break;
      case "xlinkTitle":
        de(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          n
        );
        break;
      case "xlinkType":
        de(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          n
        );
        break;
      case "xmlBase":
        de(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          n
        );
        break;
      case "xmlLang":
        de(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          n
        );
        break;
      case "xmlSpace":
        de(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          n
        );
        break;
      case "is":
        Hu(t, "is", n);
        break;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N")
          e = Wm.get(e) || e, Hu(t, e, n);
        else return;
    }
    st = !0;
  }
  function zo(t, l, e, n, a, u) {
    switch (e) {
      case "style":
        Lr(t, n, u);
        return;
      case "dangerouslySetInnerHTML":
        if (n != null) {
          if (typeof n != "object" || !("__html" in n))
            throw Error(r(61));
          if (e = n.__html, e != null) {
            if (a.children != null) throw Error(r(60));
            u?.__html !== e && (t.innerHTML = e);
          }
        }
        break;
      case "children":
        if (typeof n == "string") qn(t, n);
        else if (typeof n == "number" || typeof n == "bigint")
          qn(t, "" + n);
        else return;
        break;
      case "onScroll":
        n != null && lt("scroll", t);
        return;
      case "onScrollEnd":
        n != null && lt("scrollend", t);
        return;
      case "onClick":
        n != null && (t.onclick = Wl);
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
        if (!_r.hasOwnProperty(e))
          t: {
            if (e[0] === "o" && e[1] === "n" && (a = e.endsWith("Capture"), u = e.slice(2, a ? e.length - 7 : void 0), l = t[fl] || null, l = l != null ? l[e] : null, typeof l == "function" && t.removeEventListener(u, l, a), typeof n == "function")) {
              typeof l != "function" && l !== null && (e in t ? t[e] = null : t.hasAttribute(e) && t.removeAttribute(e)), t.addEventListener(u, n, a);
              break t;
            }
            st = !0, e in t ? t[e] = n : n === !0 ? t.setAttribute(e, "") : Hu(t, e, n);
          }
        return;
    }
    st = !0;
  }
  function Jt(t, l, e) {
    switch (l) {
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
        lt("error", t), lt("load", t);
        var n = !1, a = !1, u;
        for (u in e)
          if (e.hasOwnProperty(u)) {
            var c = e[u];
            if (c != null)
              switch (u) {
                case "src":
                  n = !0;
                  break;
                case "srcSet":
                  a = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(r(137, l));
                default:
                  gt(t, l, u, c, e, null);
              }
          }
        a && gt(t, l, "srcSet", e.srcSet, e, null), n && gt(t, l, "src", e.src, e, null);
        return;
      case "input":
        lt("invalid", t);
        var o = u = c = a = null, d = null, S = null;
        for (n in e)
          if (e.hasOwnProperty(n)) {
            var x = e[n];
            if (x != null)
              switch (n) {
                case "name":
                  a = x;
                  break;
                case "type":
                  c = x;
                  break;
                case "checked":
                  d = x;
                  break;
                case "defaultChecked":
                  S = x;
                  break;
                case "value":
                  u = x;
                  break;
                case "defaultValue":
                  o = x;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (x != null)
                    throw Error(r(137, l));
                  break;
                default:
                  gt(t, l, n, x, e, null);
              }
          }
        Ur(
          t,
          u,
          o,
          d,
          S,
          c,
          a,
          !1
        );
        return;
      case "select":
        lt("invalid", t), n = c = u = null;
        for (a in e)
          if (e.hasOwnProperty(a) && (o = e[a], o != null))
            switch (a) {
              case "value":
                u = o;
                break;
              case "defaultValue":
                c = o;
                break;
              case "multiple":
                n = o;
              default:
                gt(t, l, a, o, e, null);
            }
        l = u, e = c, t.multiple = !!n, l != null ? Ln(t, !!n, l, !1) : e != null && Ln(t, !!n, e, !0);
        return;
      case "textarea":
        lt("invalid", t), u = a = n = null;
        for (c in e)
          if (e.hasOwnProperty(c) && (o = e[c], o != null))
            switch (c) {
              case "value":
                n = o;
                break;
              case "defaultValue":
                a = o;
                break;
              case "children":
                u = o;
                break;
              case "dangerouslySetInnerHTML":
                if (o != null) throw Error(r(91));
                break;
              default:
                gt(t, l, c, o, e, null);
            }
        Hr(t, n, a, u);
        return;
      case "option":
        for (d in e)
          e.hasOwnProperty(d) && (n = e[d], n != null) && (d === "selected" ? t.selected = n && typeof n != "function" && typeof n != "symbol" : gt(t, l, d, n, e, null));
        return;
      case "dialog":
        lt("beforetoggle", t), lt("toggle", t), lt("cancel", t), lt("close", t);
        break;
      case "iframe":
      case "object":
        lt("load", t);
        break;
      case "video":
      case "audio":
        for (n = 0; n < su.length; n++)
          lt(su[n], t);
        break;
      case "image":
        lt("error", t), lt("load", t);
        break;
      case "details":
        lt("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        lt("error", t), lt("load", t);
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
        for (S in e)
          if (e.hasOwnProperty(S) && (n = e[S], n != null))
            switch (S) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, l));
              default:
                gt(t, l, S, n, e, null);
            }
        return;
      default:
        if (zc(l)) {
          for (x in e)
            e.hasOwnProperty(x) && (n = e[x], n !== void 0 && zo(
              t,
              l,
              x,
              n,
              e,
              void 0
            ));
          return;
        }
    }
    for (o in e)
      e.hasOwnProperty(o) && (n = e[o], n != null && gt(t, l, o, n, e, null));
  }
  var Rv = {};
  function jv(t, l, e, n) {
    switch (l) {
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
        var a = null, u = null, c = null, o = null, d = null, S = null, x = null;
        for (E in e) {
          var N = e[E];
          if (e.hasOwnProperty(E) && N != null)
            switch (E) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                d = N;
              default:
                n.hasOwnProperty(E) || gt(t, l, E, null, n, N);
            }
        }
        for (var v in n) {
          var E = n[v];
          if (N = e[v], n.hasOwnProperty(v) && (E != null || N != null))
            switch (v) {
              case "type":
                E !== N && (st = !0), u = E;
                break;
              case "name":
                E !== N && (st = !0), a = E;
                break;
              case "checked":
                E !== N && (st = !0), S = E;
                break;
              case "defaultChecked":
                E !== N && (st = !0), x = E;
                break;
              case "value":
                E !== N && (st = !0), c = E;
                break;
              case "defaultValue":
                E !== N && (st = !0), o = E;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (E != null)
                  throw Error(r(137, l));
                break;
              default:
                E !== N && gt(
                  t,
                  l,
                  v,
                  E,
                  n,
                  N
                );
            }
        }
        xc(
          t,
          c,
          o,
          d,
          S,
          x,
          u,
          a
        );
        return;
      case "select":
        E = c = o = v = null;
        for (u in e)
          if (d = e[u], e.hasOwnProperty(u) && d != null)
            switch (u) {
              case "value":
                break;
              case "multiple":
                E = d;
              default:
                n.hasOwnProperty(u) || gt(
                  t,
                  l,
                  u,
                  null,
                  n,
                  d
                );
            }
        for (a in n)
          if (u = n[a], d = e[a], n.hasOwnProperty(a) && (u != null || d != null))
            switch (a) {
              case "value":
                u !== d && (st = !0), v = u;
                break;
              case "defaultValue":
                u !== d && (st = !0), o = u;
                break;
              case "multiple":
                u !== d && (st = !0), c = u;
              default:
                u !== d && gt(
                  t,
                  l,
                  a,
                  u,
                  n,
                  d
                );
            }
        l = o, e = c, n = E, v != null ? Ln(t, !!e, v, !1) : !!n != !!e && (l != null ? Ln(t, !!e, l, !0) : Ln(t, !!e, e ? [] : "", !1));
        return;
      case "textarea":
        E = v = null;
        for (o in e)
          if (a = e[o], e.hasOwnProperty(o) && a != null && !n.hasOwnProperty(o))
            switch (o) {
              case "value":
                break;
              case "children":
                break;
              default:
                gt(t, l, o, null, n, a);
            }
        for (c in n)
          if (a = n[c], u = e[c], n.hasOwnProperty(c) && (a != null || u != null))
            switch (c) {
              case "value":
                a !== u && (st = !0), v = a;
                break;
              case "defaultValue":
                a !== u && (st = !0), E = a;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (a != null) throw Error(r(91));
                break;
              default:
                a !== u && gt(t, l, c, a, n, u);
            }
        Br(t, v, E);
        return;
      case "option":
        for (var M in e)
          v = e[M], e.hasOwnProperty(M) && v != null && !n.hasOwnProperty(M) && (M === "selected" ? t.selected = !1 : gt(
            t,
            l,
            M,
            null,
            n,
            v
          ));
        for (d in n)
          v = n[d], E = e[d], n.hasOwnProperty(d) && v !== E && (v != null || E != null) && (d === "selected" ? (v !== E && (st = !0), t.selected = v && typeof v != "function" && typeof v != "symbol") : gt(
            t,
            l,
            d,
            v,
            n,
            E
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
        for (var H in e)
          v = e[H], e.hasOwnProperty(H) && v != null && !n.hasOwnProperty(H) && gt(t, l, H, null, n, v);
        for (S in n)
          if (v = n[S], E = e[S], n.hasOwnProperty(S) && v !== E && (v != null || E != null))
            switch (S) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (v != null)
                  throw Error(r(137, l));
                break;
              default:
                gt(
                  t,
                  l,
                  S,
                  v,
                  n,
                  E
                );
            }
        return;
      default:
        if (zc(l)) {
          for (var F in e)
            v = e[F], e.hasOwnProperty(F) && v !== void 0 && !n.hasOwnProperty(F) && zo(
              t,
              l,
              F,
              void 0,
              n,
              v
            );
          for (x in n)
            v = n[x], E = e[x], !n.hasOwnProperty(x) || v === E || v === void 0 && E === void 0 || zo(
              t,
              l,
              x,
              v,
              n,
              E
            );
          return;
        }
    }
    for (var g in e)
      v = e[g], e.hasOwnProperty(g) && v != null && !n.hasOwnProperty(g) && gt(t, l, g, null, n, v);
    for (N in n)
      v = n[N], E = e[N], !n.hasOwnProperty(N) || v === E || v == null && E == null || gt(t, l, N, v, n, E);
  }
  function Zy(t) {
    switch (t) {
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
  function Dv() {
    if (typeof performance.getEntriesByType == "function") {
      for (var t = 0, l = 0, e = performance.getEntriesByType("resource"), n = 0; n < e.length; n++) {
        var a = e[n], u = a.transferSize, c = a.initiatorType, o = a.duration;
        if (u && o && Zy(c)) {
          for (c = 0, o = a.responseEnd, n += 1; n < e.length; n++) {
            var d = e[n], S = d.startTime;
            if (S > o) break;
            var x = d.transferSize, N = d.initiatorType;
            x && Zy(N) && (d = d.responseEnd, c += x * (d < o ? 1 : (o - S) / (d - S)));
          }
          if (--n, l += 8 * (u + c) / (a.duration / 1e3), t++, 10 < t) break;
        }
      }
      if (0 < t) return l / t / 1e6;
    }
    return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
  }
  var No = null, Oo = null;
  function yu(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function wy(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Ky(t, l) {
    if (t === 0)
      switch (l) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && l === "foreignObject" ? 0 : t;
  }
  function Jy(t, l, e, n) {
    return e = yu(
      e
    ).createElement(t), e[Qt] = n, e[fl] = l, Jt(e, t, l), Lt(e), e;
  }
  function _o(t, l) {
    return t === "textarea" || t === "noscript" || typeof l.children == "string" || typeof l.children == "number" || typeof l.children == "bigint" || typeof l.dangerouslySetInnerHTML == "object" && l.dangerouslySetInnerHTML !== null && l.dangerouslySetInnerHTML.__html != null;
  }
  var Co = null;
  function Uv() {
    var t = window.event;
    return t && t.type === "popstate" ? t === Co ? !1 : (Co = t, !0) : (Co = null, !1);
  }
  var Mo = typeof setTimeout == "function" ? setTimeout : void 0, Bv = typeof clearTimeout == "function" ? clearTimeout : void 0, $y = typeof Promise == "function" ? Promise : void 0, Wy = typeof requestAnimationFrame == "function" ? requestAnimationFrame : Mo, Hv = typeof queueMicrotask == "function" ? queueMicrotask : typeof $y < "u" ? function(t) {
    return $y.resolve(null).then(t).catch(Yv);
  } : Mo;
  function Yv(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function ln(t) {
    return t === "head";
  }
  function Fy(t, l) {
    var e = l, n = 0;
    do {
      var a = e.nextSibling;
      if (t.removeChild(e), a && a.nodeType === 8)
        if (e = a.data, e === "/$" || e === "/&") {
          if (n === 0) {
            t.removeChild(a), Ea(l);
            return;
          }
          n--;
        } else if (e === "$" || e === "$?" || e === "$~" || e === "$!" || e === "&")
          n++;
        else if (e === "html")
          Lo(
            t.ownerDocument.documentElement
          );
        else if (e === "head") {
          e = t.ownerDocument.head, Lo(e);
          for (var u = e.firstChild; u; ) {
            var c = u.nextSibling, o = u.nodeName;
            u[Ra] || o === "SCRIPT" || o === "STYLE" || o === "LINK" && u.rel.toLowerCase() === "stylesheet" || e.removeChild(u), u = c;
          }
        } else
          e === "body" && Lo(t.ownerDocument.body);
      e = a;
    } while (e);
    Ea(l);
  }
  function Iy(t, l) {
    var e = t;
    t = 0;
    do {
      var n = e.nextSibling;
      if (e.nodeType === 1 ? l ? (e._stashedDisplay = e.style.display, e.style.display = "none") : (e.style.display = e._stashedDisplay || "", e.getAttribute("style") === "" && e.removeAttribute("style")) : e.nodeType === 3 && (l ? (e._stashedText = e.nodeValue, e.nodeValue = "") : e.nodeValue = e._stashedText || ""), n && n.nodeType === 8)
        if (e = n.data, e === "/$") {
          if (t === 0) break;
          t--;
        } else
          e !== "$" && e !== "$?" && e !== "$~" && e !== "$!" || t++;
      e = n;
    } while (e);
  }
  function ky(t, l, e) {
    if (l = CSS.escape(l) !== l ? "r-" + btoa(l).replace(/=/g, "") : l, t.style.viewTransitionName = l, e != null && (t.style.viewTransitionClass = e), e = getComputedStyle(t), e.display === "inline") {
      if (l = t.getClientRects(), l.length === 1) var n = 1;
      else
        for (var a = n = 0; a < l.length; a++) {
          var u = l[a];
          0 < u.width && 0 < u.height && n++;
        }
      n === 1 && (t = t.style, t.display = l.length === 1 ? "inline-block" : "block", t.marginTop = "-" + e.paddingTop, t.marginBottom = "-" + e.paddingBottom);
    }
  }
  function Py(t, l) {
    t = t.style, l = l.style;
    var e = l != null ? l.hasOwnProperty("viewTransitionName") ? l.viewTransitionName : l.hasOwnProperty("view-transition-name") ? l["view-transition-name"] : null : null;
    t.viewTransitionName = e == null || typeof e == "boolean" ? "" : ("" + e).trim(), e = l != null ? l.hasOwnProperty("viewTransitionClass") ? l.viewTransitionClass : l.hasOwnProperty("view-transition-class") ? l["view-transition-class"] : null : null, t.viewTransitionClass = e == null || typeof e == "boolean" ? "" : ("" + e).trim(), t.display === "inline-block" && (l == null ? t.display = t.margin = "" : (e = l.display, t.display = e == null || typeof e == "boolean" ? "" : e, e = l.margin, e != null ? t.margin = e : (e = l.hasOwnProperty("marginTop") ? l.marginTop : l["margin-top"], t.marginTop = e == null || typeof e == "boolean" ? "" : e, l = l.hasOwnProperty("marginBottom") ? l.marginBottom : l["margin-bottom"], t.marginBottom = l == null || typeof l == "boolean" ? "" : l)));
  }
  function Lv(t, l, e) {
    return e = e.ownerDocument.defaultView, {
      rect: t,
      abs: l.position === "absolute" || l.position === "fixed",
      clip: l.clipPath !== "none" || l.overflow !== "visible" || l.filter !== "none" || l.mask !== "none" || l.mask !== "none" || l.borderRadius !== "0px",
      view: 0 <= t.bottom && 0 <= t.right && t.top <= e.innerHeight && t.left <= e.innerWidth
    };
  }
  function Ro(t) {
    var l = t.getBoundingClientRect(), e = getComputedStyle(t);
    return Lv(l, e, t);
  }
  function qv(t) {
    return t.documentElement.clientHeight;
  }
  function Gv(t) {
    this.addEventListener("load", t), this.addEventListener("error", t);
  }
  function Xv(t, l, e, n, a, u, c, o, d) {
    var S = l.nodeType === 9 ? l : l.ownerDocument;
    try {
      var x = S.startViewTransition({
        update: function() {
          var v = S.defaultView, E = v.navigation && v.navigation.transition, M = S.fonts.status;
          n();
          var H = [];
          if (M === "loaded" && (qv(S), S.fonts.status === "loading" && H.push(S.fonts.ready)), M = H.length, t !== null)
            for (var F = t.suspenseyImages, g = 0, y = 0; y < F.length; y++) {
              var p = F[y];
              if (!p.complete) {
                var z = p.getBoundingClientRect();
                if (0 < z.bottom && 0 < z.right && z.top < v.innerHeight && z.left < v.innerWidth) {
                  if (g += b0(p), g > Ji) {
                    H.length = M;
                    break;
                  }
                  p = new Promise(
                    Gv.bind(p)
                  ), H.push(p);
                }
              }
            }
          if (0 < H.length)
            return v = Promise.race([
              Promise.all(H),
              new Promise(function(U) {
                return setTimeout(U, 500);
              })
            ]).then(a, a), (E ? Promise.allSettled([E.finished, v]) : v).then(u, u);
          if (a(), E)
            return E.finished.then(
              u,
              u
            );
          u();
        },
        types: e
      });
      S.__reactViewTransition = x;
      var N = [];
      return x.ready.then(
        function() {
          for (var v = S.documentElement.getAnimations({
            subtree: !0
          }), E = 0; E < v.length; E++) {
            var M = v[E], H = M.effect, F = H.pseudoElement;
            if (F != null && F.startsWith("::view-transition")) {
              N.push(M), M = H.getKeyframes();
              for (var g = F = void 0, y = !0, p = 0; p < M.length; p++) {
                var z = M[p], U = z.width;
                if (F === void 0) F = U;
                else if (F !== U) {
                  y = !1;
                  break;
                }
                if (U = z.height, g === void 0) g = U;
                else if (g !== U) {
                  y = !1;
                  break;
                }
                delete z.width, delete z.height, z.transform === "none" && delete z.transform;
              }
              y && F !== void 0 && g !== void 0 && (H.setKeyframes(M), y = getComputedStyle(
                H.target,
                H.pseudoElement
              ), y.width !== F || y.height !== g) && (y = M[0], y.width = F, y.height = g, y = M[M.length - 1], y.width = F, y.height = g, H.setKeyframes(M));
            }
          }
          c();
        },
        function(v) {
          S.__reactViewTransition === x && (S.__reactViewTransition = null);
          try {
            typeof v == "object" && v !== null && v.name === "InvalidStateError" && (v.message === "View transition was skipped because document visibility state is hidden." || v.message === "Skipping view transition because document visibility state has become hidden." || v.message === "Skipping view transition because viewport size changed." || v.message === "Transition was aborted because of invalid state") && (v = null), v !== null && d(v);
          } finally {
            n(), a(), c();
          }
        }
      ), x.finished.finally(function() {
        for (var v = 0; v < N.length; v++)
          N[v].cancel();
        S.__reactViewTransition === x && (S.__reactViewTransition = null), o();
      }), x;
    } catch {
      return n(), a(), c(), null;
    }
  }
  function Rn(t, l) {
    this._scope = document.documentElement, this._selector = "::view-transition-" + t + "(" + l + ")";
  }
  Rn.prototype.animate = function(t, l) {
    return l = typeof l == "number" ? { duration: l } : I({}, l), l.pseudoElement = this._selector, this._scope.animate(t, l);
  }, Rn.prototype.getAnimations = function() {
    for (var t = this._scope, l = this._selector, e = t.getAnimations({ subtree: !0 }), n = [], a = 0; a < e.length; a++) {
      var u = e[a].effect;
      u !== null && u.target === t && u.pseudoElement === l && n.push(e[a]);
    }
    return n;
  }, Rn.prototype.getComputedStyle = function() {
    return getComputedStyle(this._scope, this._selector);
  };
  function t0(t) {
    return {
      name: t,
      group: new Rn("group", t),
      imagePair: new Rn("image-pair", t),
      old: new Rn("old", t),
      new: new Rn("new", t)
    };
  }
  function Al(t) {
    this._fragmentFiber = t, this._observers = this._eventListeners = null;
  }
  Al.prototype.addEventListener = function(t, l, e) {
    var n = null, a = null;
    if (!(e != null && typeof e != "boolean" && (n = e.signal || null, n !== null && n.aborted))) {
      this._eventListeners === null && (this._eventListeners = []);
      var u = this._eventListeners;
      if (e0(u, t, l, e) === -1) {
        var c = this, o = l;
        e != null && typeof e != "boolean" && e.once === !0 && (o = function(d) {
          c.removeEventListener(
            t,
            l,
            e
          ), typeof l == "function" ? l.call(this, d) : l.handleEvent(d);
        }), n !== null && (a = c.removeEventListener.bind(
          c,
          t,
          l,
          e
        ), n.addEventListener("abort", a, { once: !0 }), a = n.removeEventListener.bind(n, "abort", a)), n = va(e), u.push({
          type: t,
          listener: l,
          optionsOrUseCapture: e,
          attachedListener: o,
          cleanup: a
        }), T(
          this._fragmentFiber.child,
          !1,
          Qv,
          t,
          o,
          n
        );
      }
      this._eventListeners = u;
    }
  };
  function Qv(t, l, e, n) {
    return P(t).addEventListener(
      l,
      e,
      n
    ), !1;
  }
  Al.prototype.removeEventListener = function(t, l, e) {
    var n = this._eventListeners;
    if (n !== null && (l = e0(
      n,
      t,
      l,
      e
    ), l !== -1)) {
      var a = n[l];
      e = a.attachedListener;
      var u = a.cleanup;
      a = va(a.optionsOrUseCapture), T(
        this._fragmentFiber.child,
        !1,
        Vv,
        t,
        e,
        a
      ), n.splice(l, 1), u !== null && u();
    }
  };
  function Vv(t, l, e, n) {
    return P(t).removeEventListener(
      l,
      e,
      n
    ), !1;
  }
  function va(t) {
    return t != null && typeof t != "boolean" && (t.once === !0 || t.signal instanceof AbortSignal) ? { capture: t.capture, passive: t.passive } : t;
  }
  function l0(t) {
    return t == null ? "c=0" : typeof t == "boolean" ? "c=" + (t ? "1" : "0") : "c=" + (t.capture ? "1" : "0");
  }
  function e0(t, l, e, n) {
    if (t.length === 0) return -1;
    n = l0(n);
    for (var a = 0; a < t.length; a++) {
      var u = t[a];
      if (u.type === l && u.listener === e && l0(u.optionsOrUseCapture) === n)
        return a;
    }
    return -1;
  }
  Al.prototype.dispatchEvent = function(t) {
    var l = B(
      this._fragmentFiber
    );
    if (l === null) return !0;
    l = P(l);
    var e = this._eventListeners;
    if (e !== null && 0 < e.length || !t.bubbles) {
      var n = l.nodeType === 9 ? l.createComment("") : document.createTextNode("");
      if (e)
        for (var a = 0; a < e.length; a++) {
          var u = e[a];
          n.addEventListener(
            u.type,
            u.attachedListener,
            va(u.optionsOrUseCapture)
          );
        }
      if (l.appendChild(n), t = n.dispatchEvent(t), e)
        for (a = 0; a < e.length; a++)
          u = e[a], n.removeEventListener(
            u.type,
            u.attachedListener,
            va(u.optionsOrUseCapture)
          );
      return l.removeChild(n), t;
    }
    return l.dispatchEvent(t);
  }, Al.prototype.focus = function(t) {
    T(
      this._fragmentFiber.child,
      !0,
      n0,
      t,
      void 0,
      void 0
    );
  };
  function n0(t, l) {
    return t.tag === 6 ? !1 : (t = P(t), l1(t, l));
  }
  Al.prototype.focusLast = function(t) {
    var l = [];
    T(
      this._fragmentFiber.child,
      !0,
      jo,
      l,
      void 0,
      void 0
    );
    for (var e = l.length - 1; 0 <= e && !n0(l[e], t); e--) ;
  };
  function jo(t, l) {
    return l.push(t), !1;
  }
  Al.prototype.blur = function() {
    var t = B(
      this._fragmentFiber
    );
    t !== null && (t = P(t), t = yu(t).activeElement, t !== null && T(
      this._fragmentFiber.child,
      !1,
      Zv,
      t,
      void 0,
      void 0
    ));
  };
  function Zv(t, l) {
    return t.tag === 6 ? !1 : (t = P(t), t === l || t.contains(l) ? (l.blur(), !0) : !1);
  }
  Al.prototype.observeUsing = function(t) {
    this._observers === null && (this._observers = /* @__PURE__ */ new Set()), this._observers.add(t), T(
      this._fragmentFiber.child,
      !1,
      wv,
      t,
      void 0,
      void 0
    );
  };
  function wv(t, l) {
    return t.tag === 6 || (t = P(t), l.observe(t)), !1;
  }
  Al.prototype.unobserveUsing = function(t) {
    var l = this._observers;
    if (l !== null && l.has(t)) {
      l.delete(t), T(
        this._fragmentFiber.child,
        !1,
        Kv,
        t,
        void 0,
        void 0
      );
      for (var e = l = 0; e < wl.length; e++) {
        var n = wl[e];
        n.fragmentInstance === this && n.observer === t ? t.unobserve(n.instance) : wl[l++] = n;
      }
      wl.length = l;
    }
  };
  function Kv(t, l) {
    return t.tag === 6 || (t = P(t), l.unobserve(t)), !1;
  }
  var wl = [], Do = !1;
  function Jv(t, l, e) {
    wl.push({
      fragmentInstance: t,
      observer: l,
      instance: e
    }), Do || (Do = !0, e1(function() {
      Do = !1;
      var n = wl;
      wl = [];
      for (var a = 0; a < n.length; a++) {
        var u = n[a];
        u.observer.unobserve(u.instance);
      }
    }));
  }
  Al.prototype.getClientRects = function() {
    var t = [];
    return T(
      this._fragmentFiber.child,
      !1,
      $v,
      t,
      void 0,
      void 0
    ), t;
  };
  function $v(t, l) {
    if (t.tag === 6) {
      t = t.stateNode;
      var e = t.ownerDocument.createRange();
      e.selectNodeContents(t), l.push.apply(l, e.getClientRects());
    } else
      t = P(t), l.push.apply(l, t.getClientRects());
    return !1;
  }
  Al.prototype.getRootNode = function(t) {
    var l = B(
      this._fragmentFiber
    );
    return l === null ? this : P(l).getRootNode(t);
  }, Al.prototype.compareDocumentPosition = function(t) {
    var l = B(
      this._fragmentFiber
    );
    if (l === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
    var e = [];
    T(
      this._fragmentFiber.child,
      !1,
      jo,
      e,
      void 0,
      void 0
    );
    var n = P(l);
    if (e.length === 0) {
      if (e = n, et(this._fragmentFiber)) {
        t: {
          for (l = this._fragmentFiber.return; l !== null; ) {
            if (l.tag === 4) {
              l = l.stateNode.containerInfo;
              break t;
            }
            if (l.tag === 3 || l.tag === 5 || l.tag === 27)
              break;
            l = l.return;
          }
          l = null;
        }
        l != null && (e = l);
      }
      l = this._fragmentFiber;
      var a = n = e.compareDocumentPosition(t);
      return e === t ? a = Node.DOCUMENT_POSITION_CONTAINS : n & Node.DOCUMENT_POSITION_CONTAINED_BY && (e = Ot(l)[1], e === null ? a = Node.DOCUMENT_POSITION_PRECEDING : (t = P(e).compareDocumentPosition(
        t
      ), a = t === 0 || t & Node.DOCUMENT_POSITION_FOLLOWING ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING)), a |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
    }
    l = P(e[0]), a = P(e[e.length - 1]);
    var u = et(this._fragmentFiber) ? l.parentElement : n;
    if (u == null)
      return Node.DOCUMENT_POSITION_DISCONNECTED;
    n = u.compareDocumentPosition(l) & Node.DOCUMENT_POSITION_CONTAINED_BY, u = u.compareDocumentPosition(a) & Node.DOCUMENT_POSITION_CONTAINED_BY;
    var c = l.compareDocumentPosition(t), o = a.compareDocumentPosition(t), d = c & Node.DOCUMENT_POSITION_CONTAINED_BY || o & Node.DOCUMENT_POSITION_CONTAINED_BY;
    return o = n && u && c & Node.DOCUMENT_POSITION_FOLLOWING && o & Node.DOCUMENT_POSITION_PRECEDING, l = n && l === t || u && a === t || d || o ? Node.DOCUMENT_POSITION_CONTAINED_BY : !n && l === t || !u && a === t ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC : c, l & Node.DOCUMENT_POSITION_DISCONNECTED || l & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC || Wv(
      l,
      this._fragmentFiber,
      e[0],
      e[e.length - 1],
      t
    ) ? l : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
  };
  function Wv(t, l, e, n, a) {
    var u = rn(a);
    if (t & Node.DOCUMENT_POSITION_CONTAINED_BY) {
      if (e = !!u)
        t: {
          for (; u !== null; ) {
            if (u.tag === 7 && (u === l || u.alternate === l)) {
              e = !0;
              break t;
            }
            u = u.return;
          }
          e = !1;
        }
      return e;
    }
    if (t & Node.DOCUMENT_POSITION_CONTAINS) {
      if (u === null)
        return u = a.ownerDocument, a === u || a === u.documentElement || a === u.body;
      t: {
        for (u = l, l = B(l); u !== null; ) {
          if (!(u.tag !== 5 && u.tag !== 3 && u.tag !== 27 || u !== l && u.alternate !== l)) {
            u = !0;
            break t;
          }
          u = u.return;
        }
        u = !1;
      }
      return u;
    }
    return t & Node.DOCUMENT_POSITION_PRECEDING ? ((l = !!u) && !(l = u === e) && (l = Pt(
      e,
      u,
      Nl
    ), l === null ? l = !1 : (T(
      l,
      !0,
      Tt,
      u,
      e
    ), u = Wt, Wt = null, l = u !== null)), l) : t & Node.DOCUMENT_POSITION_FOLLOWING ? ((l = !!u) && !(l = u === n) && (l = Pt(
      n,
      u,
      Nl
    ), l === null ? l = !1 : (T(
      l,
      !0,
      zl,
      u,
      n
    ), u = Wt, w = Wt = null, l = u !== null)), l) : !1;
  }
  function a0(t, l) {
    var e = t.ownerDocument.createRange();
    e.selectNodeContents(t), t = e.getBoundingClientRect(), window.scrollTo(
      window.scrollX + t.left,
      l ? window.scrollY + t.top : window.scrollY + t.bottom - window.innerHeight
    );
  }
  Al.prototype.scrollIntoView = function(t) {
    if (typeof t == "object") throw Error(r(566));
    var l = [];
    T(
      this._fragmentFiber.child,
      !1,
      jo,
      l,
      void 0,
      void 0
    );
    var e = t !== !1;
    if (l.length === 0) {
      var n = Ot(
        this._fragmentFiber
      );
      if (n = e ? n[1] || n[0] || B(this._fragmentFiber) : n[0] || n[1], n === null) return;
      if (n.tag === 6) {
        t = P(n), a0(t, e);
        return;
      }
      if (n = P(n), n.nodeType !== 9) {
        if (n.nodeType === 11) {
          e = "host" in n ? n.host : null, e !== null && e.scrollIntoView(t);
          return;
        }
        n.scrollIntoView(t);
      }
    }
    for (n = e ? l.length - 1 : 0; n !== (e ? -1 : l.length); ) {
      var a = l[n];
      a.tag === 6 ? (a = P(a), a0(a, e)) : P(a).scrollIntoView(t), n += e ? -1 : 1;
    }
  };
  function Fv(t, l) {
    return t = P(t), u0(t, l), !1;
  }
  function u0(t, l) {
    t.reactFragments == null && (t.reactFragments = /* @__PURE__ */ new Set()), t.reactFragments.add(l);
  }
  function i0(t, l) {
    var e = l._eventListeners;
    if (e !== null)
      for (var n = 0; n < e.length; n++) {
        var a = e[n];
        t.addEventListener(
          a.type,
          a.attachedListener,
          va(a.optionsOrUseCapture)
        );
      }
    t.nodeType !== 3 && (e = l._observers, e !== null && e.forEach(function(u) {
      for (var c = 0, o = 0; o < wl.length; o++) {
        var d = wl[o];
        (d.fragmentInstance !== l || d.observer !== u || d.instance !== t) && (wl[c++] = d);
      }
      wl.length = c, u.observe(t);
    }), u0(t, l));
  }
  function Iv(t, l) {
    var e = l._eventListeners;
    if (e !== null)
      for (var n = 0; n < e.length; n++) {
        var a = e[n];
        t.removeEventListener(
          a.type,
          a.attachedListener,
          va(a.optionsOrUseCapture)
        );
      }
    t.nodeType !== 3 && (e = l._observers, e !== null && e.forEach(function(u) {
      typeof u.rootMargin == "string" ? Jv(
        l,
        u,
        t
      ) : u.unobserve(t);
    }), t.reactFragments != null && t.reactFragments.delete(l));
  }
  function Uo(t) {
    var l = t.firstChild;
    for (l && l.nodeType === 10 && (l = l.nextSibling); l; ) {
      var e = l;
      switch (l = l.nextSibling, e.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Uo(e), Bu(e);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (e.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(e);
    }
  }
  function kv(t, l, e, n) {
    for (; t.nodeType === 1; ) {
      var a = e;
      if (t.nodeName.toLowerCase() !== l.toLowerCase()) {
        if (!n && (t.nodeName !== "INPUT" || t.type !== "hidden"))
          break;
      } else if (n) {
        if (!t[Ra])
          switch (l) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (u = t.getAttribute("rel"), u === "stylesheet" && t.hasAttribute("data-precedence"))
                break;
              if (u !== a.rel || t.getAttribute("href") !== (a.href == null || a.href === "" ? null : a.href) || t.getAttribute("crossorigin") !== (a.crossOrigin == null ? null : a.crossOrigin) || t.getAttribute("title") !== (a.title == null ? null : a.title))
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (u = t.getAttribute("src"), (u !== (a.src == null ? null : a.src) || t.getAttribute("type") !== (a.type == null ? null : a.type) || t.getAttribute("crossorigin") !== (a.crossOrigin == null ? null : a.crossOrigin)) && u && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
                break;
              return t;
            default:
              return t;
          }
      } else if (l === "input" && t.type === "hidden") {
        var u = a.name == null ? null : "" + a.name;
        if (a.type === "hidden" && t.getAttribute("name") === u)
          return t;
      } else return t;
      if (t = Hl(t.nextSibling), t === null) break;
    }
    return null;
  }
  function Pv(t, l, e) {
    if (l === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = Hl(t.nextSibling), t === null)) return null;
    return t;
  }
  function c0(t, l) {
    for (; t.nodeType !== 8; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !l || (t = Hl(t.nextSibling), t === null)) return null;
    return t;
  }
  function Bo(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function Ho(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
  }
  function t1(t, l) {
    var e = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = l;
    else if (t.data !== "$?" || e.readyState !== "loading")
      l();
    else {
      var n = function() {
        l(), e.removeEventListener("DOMContentLoaded", n);
      };
      e.addEventListener("DOMContentLoaded", n), t._reactRetry = n;
    }
  }
  function Hl(t) {
    for (; t != null; t = t.nextSibling) {
      var l = t.nodeType;
      if (l === 1 || l === 3) break;
      if (l === 8) {
        if (l = t.data, l === "$" || l === "$!" || l === "$?" || l === "$~" || l === "&" || l === "F!" || l === "F")
          break;
        if (l === "/$" || l === "/&") return null;
      }
    }
    return t;
  }
  var Yo = null;
  function f0(t) {
    t = t.nextSibling;
    for (var l = 0; t; ) {
      if (t.nodeType === 8) {
        var e = t.data;
        if (e === "/$" || e === "/&") {
          if (l === 0)
            return Hl(t.nextSibling);
          l--;
        } else
          e !== "$" && e !== "$!" && e !== "$?" && e !== "$~" && e !== "&" || l++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function o0(t) {
    t = t.previousSibling;
    for (var l = 0; t; ) {
      if (t.nodeType === 8) {
        var e = t.data;
        if (e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&") {
          if (l === 0) return t;
          l--;
        } else e !== "/$" && e !== "/&" || l++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function l1(t, l) {
    function e() {
      n = !0;
    }
    if (t.ownerDocument.activeElement === t) return !0;
    var n = !1;
    try {
      t.ownerDocument.addEventListener("focus", e, !0), (t.focus || HTMLElement.prototype.focus).call(t, l);
    } finally {
      t.ownerDocument.removeEventListener("focus", e, !0);
    }
    return n;
  }
  function e1(t) {
    Wy(function() {
      Wy(function(l) {
        return t(l);
      });
    });
  }
  function r0(t, l, e) {
    switch (l = yu(e), t) {
      case "html":
        if (t = l.documentElement, !t) throw Error(r(452));
        return t;
      case "head":
        if (t = l.head, !t) throw Error(r(453));
        return t;
      case "body":
        if (t = l.body, !t) throw Error(r(454));
        return t;
      default:
        throw Error(r(451));
    }
  }
  function s0(t, l, e) {
    for (var n in e) {
      var a = e[n];
      e.hasOwnProperty(n) && a != null && gt(t, l, n, null, Rv, a);
    }
    e.dangerouslySetInnerHTML != null && (t.textContent = ""), t.onclick === Wl && (t.onclick = null), Bu(t);
  }
  function Lo(t) {
    for (var l = t.attributes; l.length; )
      t.removeAttributeNode(l[0]);
    Bu(t);
  }
  var Yl = /* @__PURE__ */ new Map(), d0 = /* @__PURE__ */ new Set();
  function mu(t) {
    if (typeof t.getRootNode == "function") {
      var l = t.getRootNode();
      if (l.nodeType === 9 || l.nodeType === 11) return l;
    }
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  var ze = X.d;
  X.d = {
    f: n1,
    r: a1,
    D: u1,
    C: i1,
    L: c1,
    m: f1,
    X: r1,
    S: o1,
    M: s1
  };
  function n1() {
    var t = ze.f(), l = Li();
    return t || l;
  }
  function a1(t) {
    var l = Bn(t);
    l !== null && l.tag === 5 && l.type === "form" ? md(l) : ze.r(t);
  }
  var ga = typeof document > "u" ? null : document;
  function y0(t, l, e) {
    var n = ga;
    if (n && typeof l == "string" && l) {
      var a = Cl(l);
      a = 'link[rel="' + t + '"][href="' + a + '"]', typeof e == "string" && (a += '[crossorigin="' + e + '"]'), d0.has(a) || (d0.add(a), t = { rel: t, crossOrigin: e, href: l }, n.querySelector(a) === null && (l = n.createElement("link"), Jt(l, "link", t), Lt(l), n.head.appendChild(l)));
    }
  }
  function u1(t) {
    ze.D(t), y0("dns-prefetch", t, null);
  }
  function i1(t, l) {
    ze.C(t, l), y0("preconnect", t, l);
  }
  function c1(t, l, e) {
    ze.L(t, l, e);
    var n = ga;
    if (n && t && l) {
      var a = 'link[rel="preload"][as="' + Cl(l) + '"]';
      l === "image" && e && e.imageSrcSet ? (a += '[imagesrcset="' + Cl(
        e.imageSrcSet
      ) + '"]', typeof e.imageSizes == "string" && (a += '[imagesizes="' + Cl(
        e.imageSizes
      ) + '"]')) : a += '[href="' + Cl(t) + '"]';
      var u = a;
      switch (l) {
        case "style":
          u = Sa(t);
          break;
        case "script":
          u = pa(t);
      }
      if (!(Yl.has(u) || (t = I(
        {
          rel: "preload",
          href: l === "image" && e && e.imageSrcSet ? void 0 : t,
          as: l
        },
        e
      ), Yl.set(u, t), n.querySelector(a) !== null || l === "style" && n.querySelector(hu(u)) || l === "script" && n.querySelector(vu(u))))) {
        var c = n.createElement("link");
        Jt(c, "link", t), l === "style" && (c[Uu] = !0, c.onload = c.onerror = function() {
          Nr(c);
        }), Lt(c), n.head.appendChild(c);
      }
    }
  }
  function f1(t, l) {
    ze.m(t, l);
    var e = ga;
    if (e && t) {
      var n = l && typeof l.as == "string" ? l.as : "script", a = 'link[rel="modulepreload"][as="' + Cl(n) + '"][href="' + Cl(t) + '"]', u = a;
      switch (n) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = pa(t);
      }
      if (!Yl.has(u) && (t = I({ rel: "modulepreload", href: t }, l), Yl.set(u, t), e.querySelector(a) === null)) {
        switch (n) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (e.querySelector(vu(u)))
              return;
        }
        n = e.createElement("link"), Jt(n, "link", t), Lt(n), e.head.appendChild(n);
      }
    }
  }
  function o1(t, l, e) {
    ze.S(t, l, e);
    var n = ga;
    if (n && t) {
      var a = Hn(n).hoistableStyles, u = Sa(t);
      l = l || "default";
      var c = a.get(u);
      if (!c) {
        var o = { loading: 0, preload: null };
        if (c = n.querySelector(
          hu(u)
        ))
          o.loading = 5;
        else {
          t = I(
            { rel: "stylesheet", href: t, "data-precedence": l },
            e
          ), (e = Yl.get(u)) && qo(t, e);
          var d = c = n.createElement("link");
          Lt(d), Jt(d, "link", t), d._p = new Promise(function(S, x) {
            d.onload = S, d.onerror = x;
          }), d.addEventListener("load", function() {
            o.loading |= 1;
          }), d.addEventListener("error", function() {
            o.loading |= 2;
          }), o.loading |= 4, wi(c, l, n);
        }
        c = {
          type: "stylesheet",
          instance: c,
          count: 1,
          state: o
        }, a.set(u, c);
      }
    }
  }
  function r1(t, l) {
    ze.X(t, l);
    var e = ga;
    if (e && t) {
      var n = Hn(e).hoistableScripts, a = pa(t), u = n.get(a);
      u || (u = e.querySelector(vu(a)), u || (t = I({ src: t, async: !0 }, l), (l = Yl.get(a)) && Go(t, l), u = e.createElement("script"), Lt(u), Jt(u, "link", t), e.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, n.set(a, u));
    }
  }
  function s1(t, l) {
    ze.M(t, l);
    var e = ga;
    if (e && t) {
      var n = Hn(e).hoistableScripts, a = pa(t), u = n.get(a);
      u || (u = e.querySelector(vu(a)), u || (t = I({ src: t, async: !0, type: "module" }, l), (l = Yl.get(a)) && Go(t, l), u = e.createElement("script"), Lt(u), Jt(u, "link", t), e.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, n.set(a, u));
    }
  }
  function m0(t, l, e, n) {
    var a = (a = $l.current) ? mu(a) : null;
    if (!a) throw Error(r(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof e.precedence == "string" && typeof e.href == "string" ? (e = Sa(e.href), l = Hn(
          a
        ).hoistableStyles, n = l.get(e), n || (n = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, l.set(e, n)), n) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (e.rel === "stylesheet" && typeof e.href == "string" && typeof e.precedence == "string") {
          t = Sa(e.href);
          var u = Hn(
            a
          ).hoistableStyles, c = u.get(t);
          if (c || (a = a.ownerDocument || a, c = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, u.set(t, c), (u = a.querySelector(
            hu(t)
          )) ? u._p || (c.instance = u, c.state.loading = 5) : (u = Yl.get(t), u || (u = {
            rel: "preload",
            as: "style",
            href: e.href,
            crossOrigin: e.crossOrigin,
            integrity: e.integrity,
            media: e.media,
            hrefLang: e.hrefLang,
            referrerPolicy: e.referrerPolicy
          }, Yl.set(t, u)), d1(
            a,
            t,
            u,
            c.state
          ))), l && n === null)
            throw Error(r(528, ""));
          return c;
        }
        if (l && n !== null)
          throw Error(r(529, ""));
        return null;
      case "script":
        return l = e.async, e = e.src, typeof e == "string" && l && typeof l != "function" && typeof l != "symbol" ? (e = pa(e), l = Hn(
          a
        ).hoistableScripts, n = l.get(e), n || (n = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, l.set(e, n)), n) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(r(444, t));
    }
  }
  function Sa(t) {
    return 'href="' + Cl(t) + '"';
  }
  function hu(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function h0(t) {
    return I({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function d1(t, l, e, n) {
    if (l = t.querySelector(
      'link[rel="preload"][as="style"][' + l + "]"
    )) {
      if (l[Uu] !== !0) {
        n.loading = 1;
        return;
      }
    } else
      l = t.createElement("link"), l[Uu] = !0, l.onload = l.onerror = Nr.bind(null, l), Jt(l, "link", e), Lt(l), t.head.appendChild(l);
    n.preload = l, l.addEventListener("load", function() {
      return n.loading |= 1;
    }), l.addEventListener("error", function() {
      return n.loading |= 2;
    });
  }
  function pa(t) {
    return '[src="' + Cl(t) + '"]';
  }
  function vu(t) {
    return "script[async]" + t;
  }
  function v0(t, l, e) {
    if (l.count++, l.instance === null)
      switch (l.type) {
        case "style":
          var n = t.querySelector(
            'style[data-href~="' + Cl(e.href) + '"]'
          );
          if (n)
            return l.instance = n, Lt(n), n;
          var a = I({}, e, {
            "data-href": e.href,
            "data-precedence": e.precedence,
            href: null,
            precedence: null
          });
          return n = (t.ownerDocument || t).createElement(
            "style"
          ), Lt(n), Jt(n, "style", a), wi(n, e.precedence, t), l.instance = n;
        case "stylesheet":
          a = Sa(e.href);
          var u = t.querySelector(
            hu(a)
          );
          if (u)
            return l.state.loading |= 4, l.instance = u, Lt(u), u;
          n = h0(e), (a = Yl.get(a)) && qo(n, a), u = (t.ownerDocument || t).createElement("link"), Lt(u);
          var c = u;
          return c._p = new Promise(function(o, d) {
            c.onload = o, c.onerror = d;
          }), Jt(u, "link", n), l.state.loading |= 4, wi(u, e.precedence, t), l.instance = u;
        case "script":
          return u = pa(e.src), (a = t.querySelector(
            vu(u)
          )) ? (l.instance = a, Lt(a), a) : (n = e, (a = Yl.get(u)) && (n = I({}, e), Go(n, a)), t = t.ownerDocument || t, a = t.createElement("script"), Lt(a), Jt(a, "link", n), t.head.appendChild(a), l.instance = a);
        case "void":
          return null;
        default:
          throw Error(r(443, l.type));
      }
    else
      l.type === "stylesheet" && (l.state.loading & 4) === 0 && (n = l.instance, l.state.loading |= 4, wi(n, e.precedence, t));
    return l.instance;
  }
  function wi(t, l, e) {
    for (var n = e.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), a = n.length ? n[n.length - 1] : null, u = a, c = 0; c < n.length; c++) {
      var o = n[c];
      if (o.dataset.precedence === l) u = o;
      else if (u !== a) break;
    }
    u ? u.parentNode.insertBefore(t, u.nextSibling) : (l = e.nodeType === 9 ? e.head : e, l.insertBefore(t, l.firstChild));
  }
  function qo(t, l) {
    t.crossOrigin == null && (t.crossOrigin = l.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = l.referrerPolicy), t.title == null && (t.title = l.title);
  }
  function Go(t, l) {
    t.crossOrigin == null && (t.crossOrigin = l.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = l.referrerPolicy), t.integrity == null && (t.integrity = l.integrity);
  }
  var Ki = null;
  function g0(t, l, e) {
    if (Ki === null) {
      var n = /* @__PURE__ */ new Map(), a = Ki = /* @__PURE__ */ new Map();
      a.set(e, n);
    } else
      a = Ki, n = a.get(e), n || (n = /* @__PURE__ */ new Map(), a.set(e, n));
    if (n.has(t)) return n;
    for (n.set(t, null), e = e.getElementsByTagName(t), a = 0; a < e.length; a++) {
      var u = e[a];
      if (!(u[Ra] || u[Qt] || t === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
        var c = u.getAttribute(l) || "";
        c = t + c;
        var o = n.get(c);
        o ? o.push(u) : n.set(c, [u]);
      }
    }
    return n;
  }
  function Xo(t, l, e) {
    t = t.ownerDocument || t, t.head.insertBefore(
      e,
      l === "title" ? t.querySelector("head > title") : null
    );
  }
  function y1(t, l, e) {
    if (e === 1 || l.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof l.precedence != "string" || typeof l.href != "string" || l.href === "")
          break;
        return !0;
      case "link":
        if (typeof l.rel != "string" || typeof l.href != "string" || l.href === "" || l.onLoad || l.onError)
          break;
        return l.rel === "stylesheet" ? (t = l.disabled, typeof l.precedence == "string" && t == null) : !0;
      case "script":
        if (l.async && typeof l.async != "function" && typeof l.async != "symbol" && !l.onLoad && !l.onError && l.src && typeof l.src == "string")
          return !0;
    }
    return !1;
  }
  function S0(t, l) {
    return t === "img" && l.src != null && l.src !== "" && l.onLoad == null && l.loading !== "lazy";
  }
  function p0(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function b0(t) {
    return (t.width || 100) * (t.height || 100) * (typeof devicePixelRatio == "number" ? devicePixelRatio : 1) * 0.25;
  }
  function T0(t, l) {
    typeof l.decode == "function" && (t.imgCount++, l.complete || (t.imgBytes += b0(l), t.suspenseyImages.push(l)), t = v1.bind(t), l.decode().then(t, t));
  }
  function m1(t, l, e, n) {
    if (e.type === "stylesheet" && (typeof n.media != "string" || matchMedia(n.media).matches !== !1) && (e.state.loading & 4) === 0) {
      if (e.instance === null) {
        var a = Sa(n.href), u = l.querySelector(
          hu(a)
        );
        if (u) {
          l = u._p, l !== null && typeof l == "object" && typeof l.then == "function" && (t.count++, t = gu.bind(t), l.then(t, t)), e.state.loading |= 4, e.instance = u, Lt(u);
          return;
        }
        u = l.ownerDocument || l, n = h0(n), (a = Yl.get(a)) && qo(n, a), u = u.createElement("link"), Lt(u);
        var c = u;
        c._p = new Promise(function(o, d) {
          c.onload = o, c.onerror = d;
        }), Jt(u, "link", n), e.instance = u;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(e, l), (l = e.state.preload) && (e.state.loading & 3) === 0 && (t.count++, e = gu.bind(t), l.addEventListener("load", e), l.addEventListener("error", e));
    }
  }
  var Ji = 0;
  function h1(t, l) {
    return t.stylesheets && t.count === 0 && Wi(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(e) {
      var n = setTimeout(function() {
        if (t.stylesheets && Wi(t, t.stylesheets), t.unsuspend) {
          var u = t.unsuspend;
          t.unsuspend = null, u();
        }
      }, 6e4 + l);
      0 < t.imgBytes && Ji === 0 && (Ji = 62500 * Dv());
      var a = setTimeout(
        function() {
          if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && Wi(t, t.stylesheets), t.unsuspend)) {
            var u = t.unsuspend;
            t.unsuspend = null, u();
          }
        },
        (t.imgBytes > Ji ? 50 : 800) + l
      );
      return t.unsuspend = e, function() {
        t.unsuspend = null, clearTimeout(n), clearTimeout(a);
      };
    } : null;
  }
  function E0(t) {
    if (t.count === 0 && (t.imgCount === 0 || !t.waitingForImages)) {
      if (t.stylesheets) Wi(t, t.stylesheets);
      else if (t.unsuspend) {
        var l = t.unsuspend;
        t.unsuspend = null, l();
      }
    }
  }
  function gu() {
    this.count--, E0(this);
  }
  function v1() {
    this.imgCount--, E0(this);
  }
  var $i = null;
  function Wi(t, l) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, $i = /* @__PURE__ */ new Map(), l.forEach(g1, t), $i = null, gu.call(t));
  }
  function g1(t, l) {
    if (!(l.state.loading & 4)) {
      var e = $i.get(t);
      if (e) var n = e.get(null);
      else {
        e = /* @__PURE__ */ new Map(), $i.set(t, e);
        for (var a = t.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), u = 0; u < a.length; u++) {
          var c = a[u];
          (c.nodeName === "LINK" || c.getAttribute("media") !== "not all") && (e.set(c.dataset.precedence, c), n = c);
        }
        n && e.set(null, n);
      }
      a = l.instance, c = a.getAttribute("data-precedence"), u = e.get(c) || n, u === n && e.set(null, a), e.set(c, a), this.count++, n = gu.bind(this), a.addEventListener("load", n), a.addEventListener("error", n), u ? u.parentNode.insertBefore(a, u.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(a, t.firstChild)), l.state.loading |= 4;
    }
  }
  var ba = {
    $$typeof: Rt,
    Provider: null,
    Consumer: null,
    _currentValue: ql,
    _currentValue2: ql,
    _threadCount: 0
  };
  function S1(t, l, e, n, a, u, c, o, d) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = pc(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = pc(0), this.hiddenUpdates = pc(null), this.identifierPrefix = n, this.onUncaughtError = a, this.onCaughtError = u, this.onRecoverableError = c, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = d, this.transitionTypes = null, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function x0(t, l, e, n, a, u, c, o, d, S, x, N) {
    return t = new S1(
      t,
      l,
      e,
      c,
      d,
      S,
      x,
      N,
      o
    ), l = 1, u === !0 && (l |= 24), u = ol(3, null, null, l), t.current = u, u.stateNode = t, l = tf(), l.refCount++, t.pooledCache = l, l.refCount++, u.memoizedState = {
      element: n,
      isDehydrated: e,
      cache: l
    }, af(u), t;
  }
  function A0(t) {
    return t ? (t = Kn, t) : Kn;
  }
  function z0(t, l, e, n, a, u) {
    a = A0(a), n.context === null ? n.context = a : n.pendingContext = a, n = Ve(l), n.payload = { element: e }, u = u === void 0 ? null : u, u !== null && (n.callback = u), e = Ze(t, n, l), e !== null && (yl(e, t, l), $a(e, t, l));
  }
  function N0(t, l) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var e = t.retryLane;
      t.retryLane = e !== 0 && e < l ? e : l;
    }
  }
  function Qo(t, l) {
    N0(t, l), (t = t.alternate) && N0(t, l);
  }
  function O0(t) {
    if (t.tag === 13 || t.tag === 31) {
      var l = mn(t, 67108864);
      l !== null && yl(l, t, 67108864), Qo(t, 67108864);
    }
  }
  function _0(t) {
    if (t.tag === 13 || t.tag === 31) {
      var l = xl();
      l = bc(l);
      var e = mn(t, l);
      e !== null && yl(e, t, l), Qo(t, l);
    }
  }
  var Ta = !0;
  function p1(t, l, e, n) {
    var a = Y.T;
    Y.T = null;
    var u = X.p;
    try {
      X.p = 2, Vo(t, l, e, n);
    } finally {
      X.p = u, Y.T = a;
    }
  }
  function b1(t, l, e, n) {
    var a = Y.T;
    Y.T = null;
    var u = X.p;
    try {
      X.p = 8, Vo(t, l, e, n);
    } finally {
      X.p = u, Y.T = a;
    }
  }
  function Vo(t, l, e, n) {
    if (Ta) {
      var a = Zo(n);
      if (a === null)
        Ao(
          t,
          l,
          n,
          Fi,
          e
        ), M0(t, n);
      else if (E1(
        a,
        t,
        l,
        e,
        n
      ))
        n.stopPropagation();
      else if (M0(t, n), l & 4 && -1 < T1.indexOf(t)) {
        for (; a !== null; ) {
          var u = Bn(a);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                  var c = on(u.pendingLanes);
                  if (c !== 0) {
                    var o = u;
                    for (o.pendingLanes |= 2, o.entangledLanes |= 2; c; ) {
                      var d = 1 << 31 - vl(c);
                      o.entanglements[1] |= d, c &= ~d;
                    }
                    ue(u), (dt & 6) === 0 && (Bi = ml() + 500, ru(0));
                  }
                }
                break;
              case 31:
              case 13:
                o = mn(u, 2), o !== null && yl(o, u, 2), Li(), Qo(u, 2);
            }
          if (u = Zo(n), u === null && Ao(
            t,
            l,
            n,
            Fi,
            e
          ), u === a) break;
          a = u;
        }
        a !== null && n.stopPropagation();
      } else
        Ao(
          t,
          l,
          n,
          null,
          e
        );
    }
  }
  function Zo(t) {
    return t = Oc(t), wo(t);
  }
  var Fi = null;
  function wo(t) {
    if (Fi = null, t = rn(t), t !== null) {
      var l = A(t);
      if (l === null) t = null;
      else {
        var e = l.tag;
        if (e === 13) {
          if (t = C(l), t !== null) return t;
          t = null;
        } else if (e === 31) {
          if (t = _(l), t !== null) return t;
          t = null;
        } else if (e === 3) {
          if (l.stateNode.current.memoizedState.isDehydrated)
            return l.tag === 3 ? l.stateNode.containerInfo : null;
          t = null;
        } else l !== t && (t = null);
      }
    }
    return Fi = t, null;
  }
  function C0(t) {
    switch (t) {
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
        switch (Dm()) {
          case mr:
            return 2;
          case hr:
            return 8;
          case Cu:
          case Um:
            return 32;
          case vr:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Ko = !1, en = null, nn = null, an = null, Su = /* @__PURE__ */ new Map(), pu = /* @__PURE__ */ new Map(), un = [], T1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function M0(t, l) {
    switch (t) {
      case "focusin":
      case "focusout":
        en = null;
        break;
      case "dragenter":
      case "dragleave":
        nn = null;
        break;
      case "mouseover":
      case "mouseout":
        an = null;
        break;
      case "pointerover":
      case "pointerout":
        Su.delete(l.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        pu.delete(l.pointerId);
    }
  }
  function bu(t, l, e, n, a, u) {
    return t === null || t.nativeEvent !== u ? (t = {
      blockedOn: l,
      domEventName: e,
      eventSystemFlags: n,
      nativeEvent: u,
      targetContainers: [a]
    }, l !== null && (l = Bn(l), l !== null && O0(l)), t) : (t.eventSystemFlags |= n, l = t.targetContainers, a !== null && l.indexOf(a) === -1 && l.push(a), t);
  }
  function E1(t, l, e, n, a) {
    switch (l) {
      case "focusin":
        return en = bu(
          en,
          t,
          l,
          e,
          n,
          a
        ), !0;
      case "dragenter":
        return nn = bu(
          nn,
          t,
          l,
          e,
          n,
          a
        ), !0;
      case "mouseover":
        return an = bu(
          an,
          t,
          l,
          e,
          n,
          a
        ), !0;
      case "pointerover":
        var u = a.pointerId;
        return Su.set(
          u,
          bu(
            Su.get(u) || null,
            t,
            l,
            e,
            n,
            a
          )
        ), !0;
      case "gotpointercapture":
        return u = a.pointerId, pu.set(
          u,
          bu(
            pu.get(u) || null,
            t,
            l,
            e,
            n,
            a
          )
        ), !0;
    }
    return !1;
  }
  function R0(t) {
    var l = rn(t.target);
    if (l !== null) {
      var e = A(l);
      if (e !== null) {
        if (l = e.tag, l === 13) {
          if (l = C(e), l !== null) {
            t.blockedOn = l, xr(t.priority, function() {
              _0(e);
            });
            return;
          }
        } else if (l === 31) {
          if (l = _(e), l !== null) {
            t.blockedOn = l, xr(t.priority, function() {
              _0(e);
            });
            return;
          }
        } else if (l === 3 && e.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = e.tag === 3 ? e.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Ii(t) {
    if (t.blockedOn !== null) return !1;
    for (var l = t.targetContainers; 0 < l.length; ) {
      var e = Zo(t.nativeEvent);
      if (e === null) {
        e = t.nativeEvent;
        var n = new e.constructor(
          e.type,
          e
        );
        Nc = n, e.target.dispatchEvent(n), Nc = null;
      } else
        return l = Bn(e), l !== null && O0(l), t.blockedOn = e, !1;
      l.shift();
    }
    return !0;
  }
  function j0(t, l, e) {
    Ii(t) && e.delete(l);
  }
  function x1() {
    Ko = !1, en !== null && Ii(en) && (en = null), nn !== null && Ii(nn) && (nn = null), an !== null && Ii(an) && (an = null), Su.forEach(j0), pu.forEach(j0);
  }
  function ki(t, l) {
    t.blockedOn === l && (t.blockedOn = null, Ko || (Ko = !0, i.unstable_scheduleCallback(
      i.unstable_NormalPriority,
      x1
    )));
  }
  var Pi = null;
  function D0(t) {
    Pi !== t && (Pi = t, i.unstable_scheduleCallback(
      i.unstable_NormalPriority,
      function() {
        Pi === t && (Pi = null);
        for (var l = 0; l < t.length; l += 3) {
          var e = t[l], n = t[l + 1], a = t[l + 2];
          if (typeof n != "function") {
            if (wo(n || e) === null)
              continue;
            break;
          }
          var u = Bn(e);
          u !== null && (t.splice(l, 3), l -= 3, Nf(
            u,
            {
              pending: !0,
              data: a,
              method: e.method,
              action: n
            },
            n,
            a
          ));
        }
      }
    ));
  }
  function Ea(t) {
    function l(d) {
      return ki(d, t);
    }
    en !== null && ki(en, t), nn !== null && ki(nn, t), an !== null && ki(an, t), Su.forEach(l), pu.forEach(l);
    for (var e = 0; e < un.length; e++) {
      var n = un[e];
      n.blockedOn === t && (n.blockedOn = null);
    }
    for (; 0 < un.length && (e = un[0], e.blockedOn === null); )
      R0(e), e.blockedOn === null && un.shift();
    if (e = (t.ownerDocument || t).$$reactFormReplay, e != null)
      for (n = 0; n < e.length; n += 3) {
        var a = e[n], u = e[n + 1], c = a[fl] || null;
        if (typeof u == "function")
          c || D0(e);
        else if (c) {
          var o = null;
          if (u && u.hasAttribute("formAction")) {
            if (a = u, c = u[fl] || null)
              o = c.formAction;
            else if (wo(a) !== null) continue;
          } else o = c.action;
          typeof o == "function" ? e[n + 1] = o : (e.splice(n, 3), n -= 3), D0(e);
        }
      }
  }
  function U0() {
    function t(u) {
      u.canIntercept && u.info === "react-transition" && u.intercept({
        handler: function() {
          return new Promise(function(c) {
            return a = c;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function l() {
      a !== null && (a(), a = null), n || setTimeout(e, 20);
    }
    function e() {
      if (!n && !navigation.transition) {
        var u = navigation.currentEntry;
        u && u.url != null && navigation.navigate(u.url, {
          state: u.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var n = !1, a = null;
      return navigation.addEventListener("navigate", t), navigation.addEventListener("navigatesuccess", l), navigation.addEventListener("navigateerror", l), setTimeout(e, 100), function() {
        n = !0, navigation.removeEventListener("navigate", t), navigation.removeEventListener("navigatesuccess", l), navigation.removeEventListener("navigateerror", l), a !== null && (a(), a = null);
      };
    }
  }
  function Jo(t) {
    this._internalRoot = t;
  }
  tc.prototype.render = Jo.prototype.render = function(t) {
    var l = this._internalRoot;
    if (l === null) throw Error(r(409));
    var e = l.current, n = xl();
    z0(e, n, t, l, null, null);
  }, tc.prototype.unmount = Jo.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var l = t.containerInfo;
      z0(t.current, 2, null, t, null, null), Li(), l[Un] = null;
    }
  };
  function tc(t) {
    this._internalRoot = t;
  }
  tc.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var l = Er();
      t = { blockedOn: null, target: t, priority: l };
      for (var e = 0; e < un.length && l !== 0 && l < un[e].priority; e++) ;
      un.splice(e, 0, t), e === 0 && R0(t);
    }
  };
  var B0 = f.version;
  if (B0 !== "19.3.0")
    throw Error(
      r(
        527,
        B0,
        "19.3.0"
      )
    );
  X.findDOMNode = function(t) {
    var l = t._reactInternals;
    if (l === void 0)
      throw typeof t.render == "function" ? Error(r(188)) : (t = Object.keys(t).join(","), Error(r(268, t)));
    return t = $(l), t = t !== null ? D(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var A1 = {
    bundleType: 0,
    version: "19.3.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: Y,
    reconcilerVersion: "19.3.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var lc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!lc.isDisabled && lc.supportsFiber)
      try {
        _a = lc.inject(
          A1
        ), hl = lc;
      } catch {
      }
  }
  return Eu.createRoot = function(t, l) {
    if (!b(t)) throw Error(r(299));
    var e = !1, n = "", a = Ad, u = zd, c = Nd;
    return l != null && (l.unstable_strictMode === !0 && (e = !0), l.identifierPrefix !== void 0 && (n = l.identifierPrefix), l.onUncaughtError !== void 0 && (a = l.onUncaughtError), l.onCaughtError !== void 0 && (u = l.onCaughtError), l.onRecoverableError !== void 0 && (c = l.onRecoverableError)), l = x0(
      t,
      1,
      !1,
      null,
      null,
      e,
      n,
      null,
      a,
      u,
      c,
      U0
    ), t[Un] = l.current, xo(t), new Jo(l);
  }, Eu.hydrateRoot = function(t, l, e) {
    if (!b(t)) throw Error(r(299));
    var n = !1, a = "", u = Ad, c = zd, o = Nd, d = null;
    return e != null && (e.unstable_strictMode === !0 && (n = !0), e.identifierPrefix !== void 0 && (a = e.identifierPrefix), e.onUncaughtError !== void 0 && (u = e.onUncaughtError), e.onCaughtError !== void 0 && (c = e.onCaughtError), e.onRecoverableError !== void 0 && (o = e.onRecoverableError), e.formState !== void 0 && (d = e.formState)), l = x0(
      t,
      1,
      !0,
      l,
      e ?? null,
      n,
      a,
      d,
      u,
      c,
      o,
      U0
    ), l.context = A0(null), e = l.current, n = xl(), n = bc(n), a = Ve(n), a.callback = null, Ze(e, a, n), e = n, l.current.lanes = e, Ma(l, e), ue(l), t[Un] = l.current, xo(t), new tc(l);
  }, Eu.version = "19.3.0", Eu;
}
var w0;
function H1() {
  if (w0) return Fo.exports;
  w0 = 1;
  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (f) {
        console.error(f);
      }
  }
  return i(), Fo.exports = B1(), Fo.exports;
}
var Y1 = H1();
function L1(i) {
  return i && typeof i == "object" ? i : typeof window > "u" ? null : window;
}
function K0({
  snapshot: i,
  ownSeat: f = null,
  replayIndex: s = null,
  flipVertical: r = !1
} = {}) {
  const b = i && typeof i == "object" && !Array.isArray(i) ? { ...i } : {};
  return {
    ...b,
    boardCode: String(b.boardCode || ""),
    version: Number.isFinite(Number(b.version)) ? Number(b.version) : 0,
    ownSeat: f,
    replayIndex: s,
    flipVertical: !!r
  };
}
function q1({
  node: i,
  snapshot: f,
  ownSeat: s,
  replayIndex: r,
  flipVertical: b,
  onMoveClick: A,
  elmRuntime: C
} = {}) {
  const j = L1(C)?.Elm?.BoardIsland?.init;
  if (typeof j != "function" || !i)
    return {
      app: null,
      sendSnapshotUpdate: () => {
      },
      cleanup: () => {
      }
    };
  const $ = K0({
    snapshot: f,
    ownSeat: s,
    replayIndex: r,
    flipVertical: b
  }), D = j({ node: i, flags: $ }), T = D?.ports?.boardMoveClicked, B = D?.ports?.boardSnapshot, et = (P) => {
    typeof A == "function" && A(P);
  };
  return typeof T?.subscribe == "function" && T.subscribe(et), { app: D, sendSnapshotUpdate: (P) => {
    typeof B?.send == "function" && B.send(K0(P));
  }, cleanup: () => {
    typeof T?.unsubscribe == "function" && T.unsubscribe(et), typeof D?.unmount == "function" && D.unmount();
  } };
}
function J0({
  snapshot: i,
  ownSeat: f,
  replayIndex: s,
  flipVertical: r,
  onMoveClick: b
}) {
  const A = kt.useRef(null), C = kt.useRef(null), _ = kt.useRef(b);
  _.current = b;
  const j = kt.useMemo(
    () => ({ snapshot: i, ownSeat: f, replayIndex: s, flipVertical: r }),
    [i, f, s, r]
  );
  return kt.useEffect(() => (C.current = q1({
    node: A.current,
    ...j,
    onMoveClick: ($) => _.current?.($)
  }), () => {
    C.current?.cleanup?.(), C.current = null;
  }), []), kt.useEffect(() => {
    C.current?.sendSnapshotUpdate?.(j);
  }, [j]), /* @__PURE__ */ m.jsx("div", { ref: A, "data-testid": "elm-board-island-host" });
}
const G1 = {
  marginTop: "20px",
  padding: "18px",
  borderRadius: "20px",
  background: "#f7fbf7",
  border: "1px solid rgba(16, 42, 26, 0.08)"
}, X1 = {
  display: "flex",
  justifyContent: "space-between",
  gap: "12px",
  alignItems: "flex-start",
  flexWrap: "wrap"
}, Q1 = {
  margin: 0,
  fontSize: "1.25rem"
}, $0 = {
  margin: "4px 0 0",
  fontSize: "0.9rem",
  color: "#567062"
}, V1 = {
  display: "inline-flex",
  alignItems: "center",
  gap: "8px",
  borderRadius: "999px",
  padding: "8px 12px",
  background: "rgba(16, 42, 26, 0.08)",
  fontWeight: 700
}, Z1 = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))",
  gap: "12px",
  marginTop: "16px"
}, w1 = {
  padding: "14px",
  borderRadius: "16px",
  background: "#ffffff",
  border: "1px solid rgba(16, 42, 26, 0.08)"
}, ie = {
  margin: 0,
  fontSize: "0.78rem",
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  color: "#567062"
}, ce = {
  margin: "8px 0 0",
  fontSize: "1rem",
  fontWeight: 700,
  wordBreak: "break-word"
}, K1 = {
  marginTop: "16px",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: "10px 16px"
}, Ne = {
  paddingTop: "10px",
  borderTop: "1px solid rgba(16, 42, 26, 0.08)"
}, J1 = {
  display: "flex",
  gap: "10px",
  marginTop: "16px",
  flexWrap: "wrap"
}, xa = (i = !1) => ({
  border: "1px solid rgba(16, 42, 26, 0.12)",
  borderRadius: "999px",
  padding: "8px 14px",
  background: i ? "#fff1f1" : "#f7fbf7",
  color: i ? "#9b1c1c" : "#102a1a",
  fontWeight: 700,
  cursor: "pointer"
}), $1 = {
  margin: "8px 0 0",
  paddingLeft: "18px",
  color: "#33513f"
};
function sm(i) {
  return i === "p1" ? "Blue" : i === "p2" ? "Red" : "Unknown";
}
function W1(i) {
  const f = String(i || "").trim();
  return f === "vacant" ? "Open" : f === "disconnected" ? "Disconnected" : f === "active" ? "Occupied" : f || "Unknown";
}
function F1(i, f) {
  return i === "p1" ? "Blue" : i === "p2" ? "Red" : f ? "Waiting List" : "Watching";
}
function I1(i) {
  return `${Number(i?.p1 || 0)} - ${Number(i?.p2 || 0)}`;
}
function k1(i) {
  if (Array.isArray(i?.moves)) return i.moves.length;
  const f = Number(i?.moveCount);
  return Number.isFinite(f) ? f : 0;
}
function P1(i) {
  const f = Math.max(0, Math.ceil(Number(i || 0) / 1e3));
  if (f < 60) return `${f}s`;
  const s = Math.ceil(f / 60);
  if (s < 60) return `${s}m`;
  const r = Math.ceil(s / 60);
  return r < 24 ? `${r}h` : `${Math.ceil(r / 24)}d`;
}
function ar(i, f, s) {
  const r = Number(i);
  if (!Number.isFinite(r) || r <= 0) return null;
  const b = r - Number(f || 0), A = P1(Math.abs(b));
  return s === "future" ? b >= 0 ? `in ${A}` : `${A} ago` : b <= 0 ? `${A} ago` : `in ${A}`;
}
function tg(i, f) {
  const s = Number(i?.moveTimeLimitMs);
  if (!Number.isFinite(s) || s <= 0) return "Untimed";
  const r = `${Math.round(s / 1e3)}s per move`, b = Number(i?.turnStartedAt);
  if (!Number.isFinite(b) || b <= 0) return r;
  const A = b + s, C = ar(A, f, "future");
  return C ? `${r} • deadline ${C}` : r;
}
function lg(i) {
  const f = Number(i?.watcherCount);
  return Number.isFinite(f) && f >= 0 ? f : null;
}
function W0(i, f) {
  const s = i?.[f] || {}, r = W1(s.status);
  return {
    id: f,
    label: `${sm(f)} seat`,
    name: r === "Open" ? null : String(s.name || "").trim() || null,
    status: r
  };
}
function eg({
  snapshot: i,
  ownSeat: f = null,
  connectionStatus: s = "idle",
  isWaitingListMember: r = !1,
  claimableSeatActions: b = [],
  leaveSeatAction: A = null,
  waitingListAction: C = null,
  pauseResumeActions: _ = [],
  newRoundAction: j = null,
  freeSeatAction: $ = null,
  nowMs: D = Date.now()
} = {}) {
  if (!i || typeof i != "object") return null;
  const T = i.game && typeof i.game == "object" ? i.game : {}, B = T.players && typeof T.players == "object" ? T.players : {}, et = Array.isArray(T.waitingList) ? T.waitingList : [], Ot = String(i.boardCode || T.roomId || "").trim(), At = String(T.turn || "").trim();
  return {
    boardCode: Ot,
    connectionStatus: String(s || "idle"),
    viewerRole: F1(String(f || "").trim(), r),
    seats: [W0(B, "p1"), W0(B, "p2")],
    sessionState: String(T.status || "waiting"),
    currentTurn: At ? sm(At) : "Waiting",
    score: I1(T.score),
    moveCount: k1(T),
    timerSummary: tg(T, D),
    waitingListCount: et.length,
    waitingListNames: et.map((P) => String(P?.displayName || "").trim()).filter(Boolean),
    watcherCount: lg(T),
    lastActivity: ar(T.lastActivityAt, D, "past"),
    expiry: ar(T.expiresAt, D, "future"),
    actions: {
      claimableSeatActions: Array.isArray(b) ? b : [],
      leaveSeatAction: A,
      waitingListAction: C,
      pauseResumeActions: Array.isArray(_) ? _ : [],
      newRoundAction: j,
      freeSeatAction: $
    }
  };
}
function F0({ label: i, value: f, children: s }) {
  return /* @__PURE__ */ m.jsxs("article", { style: w1, children: [
    /* @__PURE__ */ m.jsx("p", { style: ie, children: i }),
    /* @__PURE__ */ m.jsx("p", { style: ce, children: f }),
    s
  ] });
}
function ng({
  snapshot: i,
  ownSeat: f,
  connectionStatus: s,
  isWaitingListMember: r,
  claimableSeatActions: b,
  leaveSeatAction: A,
  waitingListAction: C,
  pauseResumeActions: _,
  newRoundAction: j,
  freeSeatAction: $,
  onClaimSeat: D,
  onLeaveSeat: T,
  onWaitingListAction: B,
  onPauseAction: et,
  onResumeAction: Ot,
  onNewRoundAction: At,
  onFreeSeatAction: P,
  nowMs: Wt
}) {
  const w = eg({
    snapshot: i,
    ownSeat: f,
    connectionStatus: s,
    isWaitingListMember: r,
    claimableSeatActions: b,
    leaveSeatAction: A,
    waitingListAction: C,
    pauseResumeActions: _,
    newRoundAction: j,
    freeSeatAction: $,
    nowMs: Wt
  });
  return w ? /* @__PURE__ */ m.jsxs("section", { style: G1, "aria-label": "Match details", children: [
    /* @__PURE__ */ m.jsxs("div", { style: X1, children: [
      /* @__PURE__ */ m.jsxs("div", { children: [
        /* @__PURE__ */ m.jsx("h2", { style: Q1, children: "Match details" }),
        /* @__PURE__ */ m.jsxs("p", { style: $0, children: [
          "Board ",
          w.boardCode || "not selected"
        ] })
      ] }),
      /* @__PURE__ */ m.jsx("div", { style: V1, children: w.viewerRole })
    ] }),
    /* @__PURE__ */ m.jsxs("div", { style: Z1, children: [
      /* @__PURE__ */ m.jsx(F0, { label: "Connection Status", value: w.connectionStatus }),
      w.seats.map((Tt) => /* @__PURE__ */ m.jsx(
        F0,
        {
          label: Tt.label,
          value: Tt.name || Tt.status,
          children: /* @__PURE__ */ m.jsxs("p", { style: $0, children: [
            "Status: ",
            Tt.status
          ] })
        },
        Tt.id
      ))
    ] }),
    /* @__PURE__ */ m.jsxs("div", { style: K1, children: [
      /* @__PURE__ */ m.jsxs("div", { style: Ne, children: [
        /* @__PURE__ */ m.jsx("p", { style: ie, children: "Session State" }),
        /* @__PURE__ */ m.jsx("p", { style: ce, children: w.sessionState })
      ] }),
      /* @__PURE__ */ m.jsxs("div", { style: Ne, children: [
        /* @__PURE__ */ m.jsx("p", { style: ie, children: "Current Turn" }),
        /* @__PURE__ */ m.jsx("p", { style: ce, children: w.currentTurn })
      ] }),
      /* @__PURE__ */ m.jsxs("div", { style: Ne, children: [
        /* @__PURE__ */ m.jsx("p", { style: ie, children: "Score" }),
        /* @__PURE__ */ m.jsx("p", { style: ce, children: w.score })
      ] }),
      /* @__PURE__ */ m.jsxs("div", { style: Ne, children: [
        /* @__PURE__ */ m.jsx("p", { style: ie, children: "Move Count" }),
        /* @__PURE__ */ m.jsx("p", { style: ce, children: w.moveCount })
      ] }),
      /* @__PURE__ */ m.jsxs("div", { style: Ne, children: [
        /* @__PURE__ */ m.jsx("p", { style: ie, children: "Move Timer" }),
        /* @__PURE__ */ m.jsx("p", { style: ce, children: w.timerSummary })
      ] }),
      /* @__PURE__ */ m.jsxs("div", { style: Ne, children: [
        /* @__PURE__ */ m.jsx("p", { style: ie, children: "Waiting List" }),
        /* @__PURE__ */ m.jsx("p", { style: ce, children: w.waitingListCount }),
        w.waitingListNames.length > 0 ? /* @__PURE__ */ m.jsx("ul", { style: $1, children: w.waitingListNames.map((Tt) => /* @__PURE__ */ m.jsx("li", { children: Tt }, Tt)) }) : null
      ] }),
      w.watcherCount !== null ? /* @__PURE__ */ m.jsxs("div", { style: Ne, children: [
        /* @__PURE__ */ m.jsx("p", { style: ie, children: "Watchers" }),
        /* @__PURE__ */ m.jsx("p", { style: ce, children: w.watcherCount })
      ] }) : null,
      w.lastActivity ? /* @__PURE__ */ m.jsxs("div", { style: Ne, children: [
        /* @__PURE__ */ m.jsx("p", { style: ie, children: "Last Activity" }),
        /* @__PURE__ */ m.jsx("p", { style: ce, children: w.lastActivity })
      ] }) : null,
      w.expiry ? /* @__PURE__ */ m.jsxs("div", { style: Ne, children: [
        /* @__PURE__ */ m.jsx("p", { style: ie, children: "Expires" }),
        /* @__PURE__ */ m.jsx("p", { style: ce, children: w.expiry })
      ] }) : null
    ] }),
    /* @__PURE__ */ m.jsxs("div", { style: J1, children: [
      w.actions.claimableSeatActions.map((Tt) => /* @__PURE__ */ m.jsx(
        "button",
        {
          type: "button",
          style: xa(!1),
          onClick: () => D?.(Tt.seatId),
          children: Tt.label
        },
        Tt.seatId
      )),
      w.actions.leaveSeatAction ? /* @__PURE__ */ m.jsx(
        "button",
        {
          type: "button",
          style: xa(!!w.actions.leaveSeatAction.danger),
          onClick: () => T?.(),
          children: w.actions.leaveSeatAction.label
        }
      ) : null,
      w.actions.waitingListAction ? /* @__PURE__ */ m.jsx(
        "button",
        {
          type: "button",
          style: xa(!1),
          onClick: () => B?.(w.actions.waitingListAction.type),
          children: w.actions.waitingListAction.label
        }
      ) : null,
      w.actions.pauseResumeActions.map((Tt) => /* @__PURE__ */ m.jsx(
        "button",
        {
          type: "button",
          style: xa(!1),
          onClick: () => {
            if (Tt.type === "pause") {
              et?.("pause");
              return;
            }
            Ot?.("resume");
          },
          children: Tt.label
        },
        Tt.type
      )),
      w.actions.newRoundAction ? /* @__PURE__ */ m.jsx(
        "button",
        {
          type: "button",
          style: xa(!1),
          onClick: () => At?.(),
          children: w.actions.newRoundAction.label
        }
      ) : null,
      w.actions.freeSeatAction ? /* @__PURE__ */ m.jsx(
        "button",
        {
          type: "button",
          style: xa(!1),
          onClick: () => P?.(w.actions.freeSeatAction.seatId),
          children: w.actions.freeSeatAction.label
        }
      ) : null
    ] })
  ] }) : null;
}
const ag = {
  marginTop: "20px",
  padding: "18px",
  borderRadius: "20px",
  background: "#f7fbf7",
  border: "1px solid rgba(16, 42, 26, 0.08)"
}, ug = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "12px",
  flexWrap: "wrap"
}, ig = {
  margin: 0,
  fontSize: "1.25rem"
}, cg = {
  margin: "4px 0 0",
  fontSize: "0.9rem",
  color: "#567062"
}, fg = {
  marginTop: "14px",
  fontSize: "0.95rem",
  color: "#567062"
}, og = {
  listStyle: "none",
  margin: "14px 0 0",
  padding: 0,
  display: "grid",
  gap: "10px"
}, rg = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "12px",
  flexWrap: "wrap",
  padding: "12px 14px",
  borderRadius: "16px",
  background: "#ffffff",
  border: "1px solid rgba(16, 42, 26, 0.08)"
}, sg = {
  margin: 0,
  fontWeight: 700,
  fontSize: "1rem"
}, dg = {
  margin: "4px 0 0",
  fontSize: "0.82rem",
  color: "#567062"
}, yg = {
  display: "flex",
  gap: "8px",
  flexWrap: "wrap"
}, tr = (i = !1) => ({
  border: "1px solid rgba(16, 42, 26, 0.12)",
  borderRadius: "999px",
  padding: "8px 14px",
  background: i ? "#fff1f1" : "#f7fbf7",
  color: i ? "#9b1c1c" : "#102a1a",
  fontWeight: 700,
  cursor: "pointer"
});
function mg(i) {
  switch (String(i || "").trim()) {
    case "WaitingForPlayers":
      return "Waiting for players";
    case "OneSeatOccupied":
      return "1 seat occupied";
    case "SessionActive":
      return "Game in progress";
    case "SessionPaused":
      return "Game paused";
    case "BetweenRounds":
      return "Round complete";
    default:
      return i || "Unknown";
  }
}
function hg({ boards: i } = {}) {
  const f = Array.isArray(i) ? i : [];
  return {
    isEmpty: f.length === 0,
    boards: f.map((s) => ({
      roomId: String(s?.roomId || "").trim(),
      stateLabel: mg(s?.state),
      occupiedCount: Number(s?.occupancy?.occupiedCount ?? 0),
      isOwner: !!s?.isOwner
    })).filter((s) => !!s.roomId)
  };
}
function vg({ boards: i, onRefresh: f, onOpen: s, onDelete: r }) {
  const b = hg({ boards: i });
  return /* @__PURE__ */ m.jsxs("section", { style: ag, "aria-label": "Boards list", children: [
    /* @__PURE__ */ m.jsxs("div", { style: ug, children: [
      /* @__PURE__ */ m.jsxs("div", { children: [
        /* @__PURE__ */ m.jsx("h2", { style: ig, children: "Live boards" }),
        /* @__PURE__ */ m.jsx("p", { style: cg, children: "Boards refresh only when you ask them to." })
      ] }),
      /* @__PURE__ */ m.jsx("button", { type: "button", style: tr(!1), onClick: () => f?.(), children: "Refresh" })
    ] }),
    b.isEmpty ? /* @__PURE__ */ m.jsx("p", { style: fg, children: "No live boards. Create one from Home!" }) : /* @__PURE__ */ m.jsx("ul", { style: og, children: b.boards.map((A) => /* @__PURE__ */ m.jsxs("li", { style: rg, "data-board-card": A.roomId, children: [
      /* @__PURE__ */ m.jsxs("div", { children: [
        /* @__PURE__ */ m.jsx("p", { style: sg, children: A.roomId }),
        /* @__PURE__ */ m.jsxs("p", { style: dg, children: [
          A.occupiedCount,
          "/2 seated • ",
          A.stateLabel
        ] })
      ] }),
      /* @__PURE__ */ m.jsxs("div", { style: yg, children: [
        /* @__PURE__ */ m.jsx(
          "button",
          {
            type: "button",
            style: tr(!1),
            onClick: () => s?.(A.roomId),
            children: "Open"
          }
        ),
        A.isOwner ? /* @__PURE__ */ m.jsx(
          "button",
          {
            type: "button",
            style: tr(!0),
            onClick: () => r?.(A.roomId),
            children: "Delete"
          }
        ) : null
      ] })
    ] }, A.roomId)) })
  ] });
}
const gg = {
  marginTop: "20px",
  padding: "18px",
  borderRadius: "20px",
  background: "#f7fbf7",
  border: "1px solid rgba(16, 42, 26, 0.08)"
}, Sg = {
  margin: 0,
  fontSize: "1.1rem"
}, pg = {
  margin: "8px 0 0",
  color: "#567062",
  lineHeight: 1.5
}, bg = {
  marginTop: "14px",
  padding: "12px 14px",
  borderRadius: "14px",
  background: "#ffffff",
  border: "1px solid rgba(16, 42, 26, 0.08)",
  overflowWrap: "anywhere"
}, Tg = {
  color: "#0a5f20",
  fontWeight: 700,
  textDecoration: "none"
}, Eg = {
  display: "flex",
  gap: "10px",
  marginTop: "14px",
  flexWrap: "wrap",
  alignItems: "flex-start"
}, xg = {
  border: "1px solid rgba(16, 42, 26, 0.12)",
  borderRadius: "999px",
  padding: "8px 14px",
  background: "#f7fbf7",
  color: "#102a1a",
  fontWeight: 700,
  cursor: "pointer"
}, Ag = {
  display: "inline-flex",
  flexDirection: "column",
  gap: "8px",
  alignItems: "center",
  textDecoration: "none",
  color: "#102a1a",
  fontWeight: 700
}, zg = {
  width: "112px",
  height: "112px",
  borderRadius: "14px",
  background: "#ffffff",
  border: "1px solid rgba(16, 42, 26, 0.08)",
  padding: "6px",
  objectFit: "contain"
};
function oc() {
  return globalThis.window?.location ?? globalThis.location ?? null;
}
function dm() {
  return globalThis.window?.navigator ?? globalThis.navigator ?? null;
}
function ym() {
  return globalThis.window?.document ?? globalThis.document ?? null;
}
function mm(i) {
  return String(i || "").trim();
}
function Ng(i) {
  return i ? typeof i.href == "string" && i.href ? i.href : `${i.origin || ""}${i.pathname || "/react"}${i.search || ""}${i.hash || ""}` : "";
}
function cr(i, { locationLike: f = oc() } = {}) {
  const s = mm(i), r = Ng(f);
  if (!s || !r) return "";
  const b = new URL(r);
  return b.pathname = "/react", b.search = "", b.hash = "", b.searchParams.set("board", s), b.toString();
}
function Og(i, { locationLike: f = oc() } = {}) {
  const s = cr(i, { locationLike: f });
  return s ? `/api/qr?url=${encodeURIComponent(s)}` : "";
}
function _g(i, f) {
  if (!f?.body || typeof f.createElement != "function")
    return !1;
  const s = f.createElement("textarea");
  s.value = i, s.setAttribute?.("readonly", "readonly"), s.style.position = "fixed", s.style.top = "-1000px", s.style.opacity = "0", f.body.appendChild(s);
  try {
    return s.focus?.(), s.select?.(), f.execCommand?.("copy") === !0;
  } finally {
    typeof f.body.removeChild == "function" ? f.body.removeChild(s) : s.remove?.();
  }
}
async function Cg({
  boardCode: i,
  locationLike: f = oc(),
  navigatorLike: s = dm(),
  documentLike: r = ym()
} = {}) {
  const b = cr(i, { locationLike: f });
  if (!b)
    return { ok: !1, error: "Share link unavailable." };
  if (typeof s?.clipboard?.writeText == "function")
    try {
      return await s.clipboard.writeText(b), { ok: !0, text: b };
    } catch {
    }
  return _g(b, r) ? { ok: !0, text: b } : { ok: !1, error: "Could not copy link. Copy it manually." };
}
function Mg({
  boardCode: i,
  locationLike: f = oc(),
  navigatorLike: s = dm(),
  documentLike: r = ym(),
  onToast: b
}) {
  const A = mm(i);
  if (!A) return null;
  const C = cr(A, { locationLike: f }), _ = Og(A, { locationLike: f });
  return /* @__PURE__ */ m.jsxs("section", { style: gg, "aria-label": "Share board link", children: [
    /* @__PURE__ */ m.jsx("h2", { style: Sg, children: "Share" }),
    /* @__PURE__ */ m.jsx("p", { style: pg, children: "Copy the React board link or scan the QR code to open this board in the product shell." }),
    /* @__PURE__ */ m.jsx("div", { style: bg, children: /* @__PURE__ */ m.jsx("a", { href: C, style: Tg, children: C }) }),
    /* @__PURE__ */ m.jsxs("div", { style: Eg, children: [
      /* @__PURE__ */ m.jsx(
        "button",
        {
          type: "button",
          style: xg,
          onClick: async () => {
            const j = await Cg({
              boardCode: A,
              locationLike: f,
              navigatorLike: s,
              documentLike: r
            });
            b?.(
              j.ok ? "Link copied to clipboard." : j.error || "Could not copy link. Copy it manually."
            );
          },
          children: "Copy Link"
        }
      ),
      /* @__PURE__ */ m.jsxs("a", { href: C, style: Ag, children: [
        /* @__PURE__ */ m.jsx(
          "img",
          {
            src: _,
            alt: `QR code for board ${A}`,
            style: zg
          }
        ),
        "Open board link"
      ] })
    ] })
  ] });
}
const Rg = {
  position: "relative",
  display: "inline-flex",
  justifyContent: "flex-end"
}, jg = {
  border: "1px solid rgba(16, 42, 26, 0.12)",
  borderRadius: "999px",
  padding: "9px 14px",
  background: "#f7fbf7",
  color: "#102a1a",
  fontWeight: 700,
  cursor: "pointer"
}, Dg = {
  position: "absolute",
  top: "calc(100% + 8px)",
  right: 0,
  minWidth: "160px",
  borderRadius: "14px",
  padding: "8px",
  border: "1px solid rgba(16, 42, 26, 0.12)",
  background: "#ffffff",
  boxShadow: "0 16px 38px rgba(16, 42, 26, 0.14)",
  display: "grid",
  gap: "6px",
  zIndex: 10
}, I0 = {
  border: "1px solid rgba(16, 42, 26, 0.1)",
  borderRadius: "10px",
  padding: "8px 10px",
  textAlign: "left",
  background: "#f7fbf7",
  color: "#102a1a",
  fontWeight: 700,
  cursor: "pointer"
};
function Ug({
  menuOpen: i,
  onToggle: f,
  onSelectRules: s,
  onSelectHistory: r
}) {
  return /* @__PURE__ */ m.jsxs("div", { style: Rg, children: [
    /* @__PURE__ */ m.jsx(
      "button",
      {
        type: "button",
        style: jg,
        "aria-expanded": !!i,
        "aria-haspopup": "menu",
        "aria-label": i ? "Close menu" : "Open menu",
        onClick: () => f?.(!i),
        children: "Menu"
      }
    ),
    i ? /* @__PURE__ */ m.jsxs("div", { style: Dg, role: "menu", "aria-label": "App menu", children: [
      /* @__PURE__ */ m.jsx(
        "button",
        {
          type: "button",
          role: "menuitem",
          style: I0,
          onClick: () => s?.(),
          children: "Rules"
        }
      ),
      /* @__PURE__ */ m.jsx(
        "button",
        {
          type: "button",
          role: "menuitem",
          style: I0,
          onClick: () => r?.(),
          children: "History"
        }
      )
    ] }) : null
  ] });
}
const Bg = {
  marginTop: "18px"
};
function Hg(i) {
  return {
    display: "grid",
    gridTemplateColumns: `repeat(${Math.max(1, i)}, minmax(0, 1fr))`,
    gap: "8px"
  };
}
const Yg = (i) => ({
  border: "1px solid rgba(16, 42, 26, 0.12)",
  borderRadius: "999px",
  padding: "8px 10px",
  background: i ? "#102a1a" : "#f7fbf7",
  color: i ? "#f6fbf4" : "#102a1a",
  fontWeight: 700,
  cursor: "pointer",
  width: "100%"
});
function Lg({ tabs: i = [], activeTab: f = "home", onChangeTab: s }) {
  const r = Array.isArray(i) ? i : [];
  return r.length === 0 ? null : /* @__PURE__ */ m.jsx("nav", { style: Bg, "aria-label": "Shell navigation", children: /* @__PURE__ */ m.jsx("div", { style: Hg(r.length), children: r.map((b) => {
    const A = String(b.id || "").trim(), C = String(b.label || A || "Tab"), _ = A === f;
    return /* @__PURE__ */ m.jsx(
      "button",
      {
        type: "button",
        style: Yg(_),
        "aria-label": `Go to ${C} section`,
        "aria-current": _ ? "page" : void 0,
        onClick: () => s?.(A),
        children: C
      },
      A
    );
  }) }) });
}
const qg = {
  marginTop: "14px",
  padding: "16px",
  borderRadius: "18px",
  background: "#f7fbf7",
  border: "1px solid rgba(16, 42, 26, 0.08)"
}, ec = {
  margin: 0,
  fontSize: "0.78rem",
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  color: "#567062"
}, Gg = {
  display: "grid",
  gap: "12px",
  gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
  marginTop: "10px"
}, k0 = {
  width: "100%",
  marginTop: "6px",
  padding: "10px 12px",
  borderRadius: "12px",
  border: "1px solid rgba(16, 42, 26, 0.14)",
  fontSize: "1rem",
  boxSizing: "border-box"
}, Xg = {
  display: "flex",
  gap: "8px",
  marginTop: "8px",
  flexWrap: "wrap"
}, Qg = (i) => ({
  border: "1px solid rgba(16, 42, 26, 0.12)",
  borderRadius: "999px",
  padding: "6px 12px",
  background: i ? "#102a1a" : "#ffffff",
  color: i ? "#f6fbf4" : "#102a1a",
  fontWeight: 700,
  cursor: "pointer"
}), Vg = {
  marginTop: "16px",
  border: "1px solid rgba(16, 42, 26, 0.12)",
  borderRadius: "999px",
  padding: "10px 16px",
  background: "#0a8f28",
  color: "#f6fbf4",
  fontWeight: 700,
  cursor: "pointer"
}, P0 = {
  marginTop: "10px",
  fontSize: "0.9rem",
  color: "#567062",
  lineHeight: 1.5
}, Zg = [0, 5, 10, 15, 20, 30];
function wg({
  blueName: i,
  redName: f,
  moveTimeLimitSeconds: s,
  onChangeBlueName: r,
  onChangeRedName: b,
  onChangeMoveTimer: A,
  onStartMatch: C,
  hasActiveMatch: _
}) {
  return /* @__PURE__ */ m.jsxs("article", { style: qg, "data-setup-card": "local", children: [
    /* @__PURE__ */ m.jsx("p", { style: ec, children: "Local setup" }),
    /* @__PURE__ */ m.jsxs("div", { style: Gg, children: [
      /* @__PURE__ */ m.jsxs("label", { children: [
        /* @__PURE__ */ m.jsx("span", { style: ec, children: "Blue player name" }),
        /* @__PURE__ */ m.jsx(
          "input",
          {
            "aria-label": "Blue player name",
            value: i || "",
            onChange: (j) => r?.(j),
            style: k0,
            placeholder: "Blue"
          }
        )
      ] }),
      /* @__PURE__ */ m.jsxs("label", { children: [
        /* @__PURE__ */ m.jsx("span", { style: ec, children: "Red player name" }),
        /* @__PURE__ */ m.jsx(
          "input",
          {
            "aria-label": "Red player name",
            value: f || "",
            onChange: (j) => b?.(j),
            style: k0,
            placeholder: "Red"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ m.jsx("p", { style: { ...ec, marginTop: "14px" }, children: "Local move timer" }),
    /* @__PURE__ */ m.jsx("div", { style: Xg, children: Zg.map((j) => /* @__PURE__ */ m.jsx(
      "button",
      {
        type: "button",
        "aria-label": j === 0 ? "No local move timer" : `${j}s local move timer`,
        style: Qg(Number(s) === j),
        onClick: () => A?.(j),
        children: j === 0 ? "No timer" : `${j}s`
      },
      j
    )) }),
    /* @__PURE__ */ m.jsx("p", { style: P0, children: "Timer selection is not enforced yet." }),
    /* @__PURE__ */ m.jsx(
      "button",
      {
        type: "button",
        style: Vg,
        onClick: () => C?.(),
        children: _ ? "Restart Local Match" : "Start Local Match"
      }
    ),
    /* @__PURE__ */ m.jsx("p", { style: P0, children: "Local same-screen play stays on this device. No room code, invite link, or server connection is used." })
  ] });
}
function Kg({ open: i, onClose: f }) {
  return i ? /* @__PURE__ */ m.jsxs(
    "section",
    {
      className: "react-shell-modal",
      "aria-label": "Traceball rules",
      role: "dialog",
      "aria-modal": "true",
      children: [
        /* @__PURE__ */ m.jsxs("header", { className: "react-shell-modal-header", children: [
          /* @__PURE__ */ m.jsx("h2", { children: "Rules" }),
          /* @__PURE__ */ m.jsx(
            "button",
            {
              type: "button",
              className: "react-shell-modal-close",
              onClick: f,
              children: "Close"
            }
          )
        ] }),
        /* @__PURE__ */ m.jsxs("ul", { className: "react-shell-modal-list", children: [
          /* @__PURE__ */ m.jsx("li", { children: "Ball movement is one-step movement between neighboring dots." }),
          /* @__PURE__ */ m.jsx("li", { children: "You cannot reuse a segment that has already been drawn." }),
          /* @__PURE__ */ m.jsx("li", { children: "Landing on a visited dot, boundary rebound point, or gate-mouth center dot causes a bounce and grants an extra move." }),
          /* @__PURE__ */ m.jsx("li", { children: "You score by entering the opponent gate." }),
          /* @__PURE__ */ m.jsx("li", { children: "Own goal counts for the opponent." }),
          /* @__PURE__ */ m.jsx("li", { children: "No legal moves on your turn means you lose the round." }),
          /* @__PURE__ */ m.jsx("li", { children: "In online matches, server-authoritative timers and turn control decide pause, timeout, and legality." })
        ] })
      ]
    }
  ) : null;
}
function Jg(i) {
  const f = Number(i);
  return Number.isFinite(f) && f >= 0 ? f : 0;
}
function $g({ open: i, localHistoryCount: f = 0, onClose: s }) {
  if (!i) return null;
  const r = Jg(f);
  return /* @__PURE__ */ m.jsxs(
    "section",
    {
      className: "react-shell-modal",
      "aria-label": "Match history",
      role: "dialog",
      "aria-modal": "true",
      children: [
        /* @__PURE__ */ m.jsxs("header", { className: "react-shell-modal-header", children: [
          /* @__PURE__ */ m.jsx("h2", { children: "History" }),
          /* @__PURE__ */ m.jsx(
            "button",
            {
              type: "button",
              className: "react-shell-modal-close",
              onClick: s,
              children: "Close"
            }
          )
        ] }),
        /* @__PURE__ */ m.jsx("p", { children: "History replay will move here next." }),
        /* @__PURE__ */ m.jsxs("p", { children: [
          "Local snapshots available: ",
          r
        ] }),
        /* @__PURE__ */ m.jsx("p", { className: "react-shell-modal-note", children: "This slice is UI scaffolding only and does not claim full replay controls yet." })
      ]
    }
  );
}
function fr(i) {
  if (typeof i != "function")
    throw new Error("Fetch API unavailable.");
  return i;
}
async function or(i) {
  return i.json();
}
async function Wg(i, { fetchImpl: f = globalThis.fetch } = {}) {
  const r = await fr(f)(
    `/api/rooms?clientId=${encodeURIComponent(String(i || "").trim())}`,
    { cache: "no-store" }
  );
  if (!r.ok)
    throw new Error(`Board list request failed: ${r.status}`);
  return or(r);
}
async function Fg({ clientId: i, moveTimeLimitSeconds: f }, { fetchImpl: s = globalThis.fetch } = {}) {
  const r = fr(s), b = Number(f), A = {
    clientId: String(i || "").trim(),
    moveTimeLimitSeconds: Number.isFinite(b) ? b : 15
  }, C = await r("/api/rooms", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(A)
  });
  if (!C.ok)
    throw new Error(`Board creation failed: ${C.status}`);
  return or(C);
}
async function Ig({ roomId: i, clientId: f }, { fetchImpl: s = globalThis.fetch } = {}) {
  const b = await fr(s)(
    `/api/rooms/${encodeURIComponent(String(i || "").trim())}?clientId=${encodeURIComponent(String(f || "").trim())}`,
    { method: "DELETE" }
  );
  if (!b.ok) {
    let A = `Board delete failed: ${b.status}`;
    try {
      const C = await b.json();
      typeof C?.error == "string" && C.error && (A = C.error);
    } catch {
    }
    throw new Error(A);
  }
  return or(b);
}
function kg(i = globalThis.window?.location || globalThis.location) {
  const f = i?.protocol === "https:" ? "wss:" : "ws:", s = i?.host || "localhost";
  return `${f}//${s}/ws`;
}
function Pg({
  roomId: i,
  clientId: f,
  onMessage: s,
  onStatus: r,
  WebSocketImpl: b = globalThis.window?.WebSocket || globalThis.WebSocket,
  socketUrl: A = kg()
} = {}) {
  if (typeof b != "function")
    throw new Error("WebSocket unavailable.");
  const C = new b(A);
  return C.onopen = () => {
    r?.("connected"), C.send(
      JSON.stringify({
        type: "watch",
        roomId: String(i || "").trim(),
        clientId: String(f || "").trim()
      })
    );
  }, C.onmessage = (_) => {
    try {
      s?.(JSON.parse(_.data));
    } catch {
      s?.({ type: "error", error: "malformed websocket message" });
    }
  }, C.onerror = () => {
    r?.("error");
  }, C.onclose = () => {
    r?.("disconnected");
  }, {
    socket: C,
    send(_) {
      C.send(JSON.stringify(_));
    },
    close() {
      C.close?.();
    }
  };
}
const tm = "traceballElmClientId", nc = "traceballPlayerName", tS = "traceballOnlineMoveTimer";
function rc() {
  return globalThis.window?.localStorage || globalThis.localStorage;
}
function lS(i = Math.random) {
  return i().toString(36).slice(2, 12);
}
function eS({
  storage: i = rc(),
  random: f = Math.random
} = {}) {
  const s = i?.getItem?.(tm);
  if (s) return s;
  const r = `traceball-elm-${lS(f)}`;
  return i?.setItem?.(tm, r), r;
}
function hm(i = Math.random) {
  const f = (s) => s[Math.floor(i() * s.length)];
  return `${f(["Neon", "Turbo", "Cosmic", "Lucky", "Pixel", "Rocket", "Thunder"])} ${f(["Striker", "Falcon", "Comet", "Phantom", "Kicker", "Ace", "Wizard"])}`;
}
function vm(i, f = "") {
  return String(i || "").replace(/\s+/g, " ").trim().slice(0, 24) || f;
}
function nS({
  storage: i = rc(),
  randomName: f = hm
} = {}) {
  const s = String(i?.getItem?.(nc) || ""), r = vm(s, "");
  if (r && r !== "Elm Player")
    return i?.setItem?.(nc, r), r;
  const b = f();
  return i?.setItem?.(nc, b), b;
}
function aS(i, { storage: f = rc(), randomName: s = hm } = {}) {
  const r = vm(i, s());
  return f?.setItem?.(nc, r), r;
}
function uS(i, f = 15) {
  const s = Number(i);
  return Number.isFinite(s) && s >= 0 ? s : f;
}
function iS({
  storage: i = rc(),
  fallback: f = 15
} = {}) {
  return uS(
    i?.getItem?.(tS),
    f
  );
}
const Na = 9, fe = 13, uc = 0, ic = fe - 1, Au = 3, zu = 5, cc = { x: 4, y: 6 }, cS = [0, 5e3, 1e4, 15e3, 2e4, 3e4], fS = 15e3, oS = 10080 * 60 * 1e3;
function rS(i, f = {}) {
  const s = Number.isFinite(f.now) ? f.now : Date.now();
  return {
    roomId: i,
    creatorClientId: xm(f.creatorClientId),
    status: "waiting",
    players: { p1: Nu("p1"), p2: Nu("p2") },
    turn: "p1",
    ball: { ...cc },
    visited: [Oa(cc)],
    segments: [],
    moves: [],
    score: { p1: 0, p2: 0 },
    winner: null,
    endReason: null,
    moveTimeLimitMs: mS(
      f.moveTimeLimitMs ?? ES(f.moveTimeLimitSeconds),
      fS
    ),
    turnStartedAt: null,
    lastTimeout: null,
    consecutiveTimeouts: 0,
    timeoutStreaks: { p1: 0, p2: 0 },
    pause: null,
    sessionId: null,
    sessionStartedAt: null,
    sessionEndedAt: null,
    history: [],
    watcherClientIds: [],
    waitingList: [],
    createdAt: s,
    updatedAt: s,
    version: 1
  };
}
function sS(i) {
  return {
    roomId: i.roomId,
    status: i.status,
    players: SS(i.players),
    watchers: [],
    waitingList: pS(i.waitingList),
    turn: i.turn,
    ball: i.ball,
    visited: i.visited,
    segments: i.segments,
    moves: i.moves,
    score: i.score,
    winner: i.winner,
    endReason: i.endReason,
    moveTimeLimitMs: i.moveTimeLimitMs || 0,
    turnStartedAt: i.turnStartedAt,
    lastTimeout: i.lastTimeout || null,
    consecutiveTimeouts: i.consecutiveTimeouts || 0,
    timeoutStreaks: Sm(i),
    pause: i.pause || null,
    sessionId: i.sessionId || null,
    sessionStartedAt: i.sessionStartedAt || null,
    sessionEndedAt: i.sessionEndedAt || null,
    history: Array.isArray(i.history) ? i.history.slice(-10) : [],
    historyCount: Array.isArray(i.history) ? i.history.length : 0,
    createdAt: i.createdAt ?? null,
    updatedAt: i.updatedAt ?? null,
    lastActivityAt: gm(i),
    expiresAt: dS(i),
    legalMoves: i.status === "playing" ? pm(i) : [],
    board: {
      width: Na,
      height: fe,
      goalXMin: Au,
      goalXMax: zu
    }
  };
}
function gm(i) {
  return Number(i?.updatedAt ?? i?.createdAt ?? 0);
}
function Sm(i) {
  const f = i.timeoutStreaks || {};
  return i.timeoutStreaks = {
    p1: Number(f.p1 || 0),
    p2: Number(f.p2 || 0)
  }, i.timeoutStreaks;
}
function dS(i) {
  return gm(i) + oS;
}
function lm(i, f, s, r, b = Date.now()) {
  if (rr(i), !["p1", "p2"].includes(f))
    return { ok: !1, error: "Invalid seat." };
  const A = xm(r), C = bS(s, f);
  if (A) {
    for (const _ of ["p1", "p2"])
      if (i.players[_]?.clientId === A)
        return i.players[_].name = C, i.players[_].status = "active", i.players[_].disconnectedAt = null, i.players[_].canBeFreedAt = null, nm(i, A), am(i, A), fc(i, b), { ok: !0, playerId: _, rejoined: !0 };
  }
  return i.players[f]?.status === "disconnected" ? {
    ok: !1,
    error: "That seat is reserved for the disconnected player."
  } : Tm(i.players[f]) ? { ok: !1, error: "That seat is already occupied." } : (i.players[f] = {
    ...Nu(f),
    name: C,
    clientId: A,
    status: "active"
  }, nm(i, A), am(i, A), Em(i) && i.status === "waiting" && gS(i, b), fc(i, b), { ok: !0, playerId: f });
}
function yS(i, f, s, r = Date.now()) {
  if (i.status !== "playing")
    return { ok: !1, error: "Game is not playing." };
  if (hS(i, r))
    return { ok: !1, error: "Time expired.", timeout: !0 };
  if (i.turn !== f) return { ok: !1, error: "Not your turn." };
  const b = i.ball, A = xS(s);
  if (!A) return { ok: !1, error: "Invalid target." };
  if (!AS(b, A))
    return { ok: !1, error: "Move one point in any of 8 directions." };
  if (!Am(A))
    return { ok: !1, error: "Move stays on the pitch or through a gate." };
  if (Om(i, b, A))
    return { ok: !1, error: "That line was already used." };
  if (zm(b, A))
    return { ok: !1, error: "The margin line is already traced." };
  if (Nm(b, A))
    return { ok: !1, error: "Cannot cut through the outside corner." };
  i.consecutiveTimeouts = 0, Sm(i)[f] = 0, i.pause = null;
  const C = i.visited.includes(Oa(A)), _ = zS(A), j = _m(b, A);
  i.segments.push(j), i.ball = A, C || i.visited.push(Oa(A));
  const $ = {
    playerId: f,
    from: b,
    to: A,
    segment: j,
    bounce: !1,
    at: r
  }, D = NS(f, A);
  if (D)
    return i.status = "finished", i.turnStartedAt = null, um(i, D.winner, D.reason), $.goal = !0, i.moves.push($), fc(i, r), { ok: !0, gameOver: !0 };
  const T = C || _;
  if ($.bounce = T, i.moves.push($), T || (i.turn = ur(f)), pm(i).length === 0) {
    i.status = "finished", i.turnStartedAt = null;
    const et = ur(i.turn);
    um(
      i,
      et,
      `${im(i, i.turn)} is stuck — ${im(i, et)} wins.`
    );
  } else
    bm(i, r);
  return fc(i, r), { ok: !0, bounce: T };
}
function pm(i) {
  const f = [];
  for (let s = -1; s <= 1; s += 1)
    for (let r = -1; r <= 1; r += 1) {
      if (r === 0 && s === 0) continue;
      const b = { x: i.ball.x + r, y: i.ball.y + s };
      Am(b) && !Om(i, i.ball, b) && !zm(i.ball, b) && !Nm(i.ball, b) && f.push(b);
    }
  return f;
}
function mS(i, f = 0) {
  const s = Number(i);
  if (!Number.isFinite(s)) return f;
  const r = Math.round(s);
  return cS.includes(r) ? r : f;
}
function bm(i, f = Date.now()) {
  i.turnStartedAt = i.status === "playing" && i.moveTimeLimitMs > 0 ? f : null;
}
function hS(i, f = Date.now()) {
  return i.status === "playing" && i.moveTimeLimitMs > 0 && Number.isFinite(i.turnStartedAt) && f - i.turnStartedAt >= i.moveTimeLimitMs;
}
function Nu(i) {
  return {
    id: i,
    name: i === "p1" ? "Blue" : "Red",
    color: i === "p1" ? "#0b7cff" : "#ff3b30",
    clientId: null,
    status: "vacant"
  };
}
function Tm(i) {
  return i?.status === "active";
}
function vS(i) {
  return rr(i), ["p1", "p2"].filter((f) => Tm(i.players[f])).length;
}
function Em(i) {
  return vS(i) === 2;
}
function gS(i, f = Date.now()) {
  return rr(i), Em(i) ? (i.status = "playing", i.turn = "p1", i.ball = { ...cc }, i.visited = [Oa(cc)], i.segments = [], i.moves = [], i.score = { p1: 0, p2: 0 }, i.winner = null, i.endReason = null, i.sessionId = TS(f), i.sessionStartedAt = f, i.sessionEndedAt = null, i.lastTimeout = null, i.consecutiveTimeouts = 0, i.timeoutStreaks = { p1: 0, p2: 0 }, i.pause = null, bm(i, f), i.updatedAt = f, { ok: !0 }) : { ok: !1, error: "Both seats must be filled before starting." };
}
function SS(i = {}) {
  return {
    p1: em(i.p1, "p1"),
    p2: em(i.p2, "p2")
  };
}
function em(i, f) {
  const s = i || Nu(f), r = s.canBeFreedAt ?? null;
  return {
    id: s.id || f,
    name: s.name || (f === "p1" ? "Blue" : "Red"),
    color: s.color || (f === "p1" ? "#0b7cff" : "#ff3b30"),
    status: s.status || "active",
    disconnectedAt: s.disconnectedAt ?? null,
    canBeFreedAt: r,
    canBeFreed: s.status === "disconnected" && Number.isFinite(r) ? Date.now() >= r : !1
  };
}
function pS(i = []) {
  return Array.isArray(i) ? i.map((f) => ({
    displayName: String(f?.displayName || f?.name || "Guest").slice(
      0,
      24
    ),
    joinedAt: Number.isFinite(f?.joinedAt) ? f.joinedAt : null
  })) : [];
}
function rr(i) {
  i.players = i.players || {};
  for (const f of ["p1", "p2"])
    i.players[f] ? i.players[f].status || (i.players[f].status = "active") : i.players[f] = Nu(f), i.players[f].color || (i.players[f].color = f === "p1" ? "#0b7cff" : "#ff3b30"), i.players[f].id || (i.players[f].id = f);
  Array.isArray(i.history) || (i.history = []), Array.isArray(i.waitingList) || (i.waitingList = []);
}
function xm(i) {
  return String(i || "").trim().slice(0, 80) || null;
}
function bS(i, f) {
  return String(i || "").trim().slice(0, 24) || (f === "p1" ? "Blue" : f === "p2" ? "Red" : "Guest");
}
function fc(i, f = Date.now()) {
  i.updatedAt = f, i.version = Number(i.version || 0) + 1;
}
function TS(i = Date.now()) {
  return `session-${i}-${Math.random().toString(36).slice(2, 8)}`;
}
function nm(i, f) {
  !f || !Array.isArray(i.watcherClientIds) || (i.watcherClientIds = i.watcherClientIds.filter((s) => s !== f));
}
function am(i, f) {
  !f || !Array.isArray(i.waitingList) || (i.waitingList = i.waitingList.filter(
    (s) => s.clientId !== f
  ));
}
function um(i, f, s) {
  i.winner || (i.winner = f, i.endReason = s, i.score = i.score || { p1: 0, p2: 0 }, i.score[f] = (i.score[f] || 0) + 1);
}
function im(i, f) {
  return i.players[f]?.name || f;
}
function ur(i) {
  return i === "p1" ? "p2" : "p1";
}
function Oa(i) {
  return `${i.x},${i.y}`;
}
function ES(i) {
  if (!(i == null || i === ""))
    return Number(i) * 1e3;
}
function xS(i) {
  const f = Number(i?.x), s = Number(i?.y);
  return !Number.isInteger(f) || !Number.isInteger(s) ? null : { x: f, y: s };
}
function AS(i, f) {
  const s = Math.abs(i.x - f.x), r = Math.abs(i.y - f.y);
  return s <= 1 && r <= 1 && s + r > 0;
}
function Am(i) {
  const f = i.x >= 0 && i.x < Na && i.y > uc && i.y < ic, s = i.x >= Au && i.x <= zu && (i.y === uc || i.y === ic);
  return f || s;
}
function zS(i) {
  return i.x === 0 || i.x === Na - 1 || i.y === 1 || i.y === fe - 2;
}
function zm(i, f) {
  const s = Math.abs(i.x - f.x), r = Math.abs(i.y - f.y);
  return s + r !== 1 ? !1 : i.x === f.x && (i.x === 0 || i.x === Na - 1) && i.y >= 1 && i.y <= fe - 2 && f.y >= 1 && f.y <= fe - 2 ? !0 : i.y === f.y && (i.y === 1 || i.y === fe - 2) && i.x >= 0 && i.x < Na && f.x >= 0 && f.x < Na ? !(Math.min(i.x, f.x) >= Au && Math.max(i.x, f.x) <= zu) : !1;
}
function Nm(i, f) {
  if (!(Math.abs(i.x - f.x) === 1 && Math.abs(i.y - f.y) === 1)) return !1;
  const r = i.y === 1 && f.y === 0 || i.y === 0 && f.y === 1, b = i.y === fe - 2 && f.y === fe - 1 || i.y === fe - 1 && f.y === fe - 2;
  return !!((r || b) && (f.x < Au || f.x > zu || i.x < Au || i.x > zu));
}
function Om(i, f, s) {
  return i.segments.includes(_m(f, s));
}
function _m(i, f) {
  const s = Oa(i), r = Oa(f);
  return s < r ? `${s}|${r}` : `${r}|${s}`;
}
function NS(i, f) {
  if (f.y !== uc && f.y !== ic) return null;
  const s = i === "p1";
  return s && f.y === uc || !s && f.y === ic ? { winner: i, reason: `${i} scored!` } : { winner: ur(i), reason: `Own goal by ${i}.` };
}
const Cm = "LOCAL", OS = "local-blue", _S = "local-red";
function cm(i, f) {
  return String(i || "").trim() || f;
}
function CS({
  blueName: i,
  redName: f,
  moveTimeLimitSeconds: s
} = {}) {
  const r = rS(Cm, {
    moveTimeLimitSeconds: Number(s) || 0
  });
  return lm(r, "p1", cm(i, "Blue"), OS), lm(r, "p2", cm(f, "Red"), _S), r;
}
function ac(i) {
  return !i || typeof i != "object" ? null : {
    boardCode: Cm,
    version: Number(i.version) || 0,
    game: sS(i)
  };
}
function MS(i = {}) {
  const f = CS(i);
  return { game: f, snapshot: ac(f) };
}
function RS(i) {
  const f = i?.point;
  if (!f || typeof f != "object") return null;
  const s = Number(f.x), r = Number(f.y);
  return !Number.isFinite(s) || !Number.isFinite(r) ? null : { x: s, y: r };
}
function jS({ game: i, payload: f } = {}) {
  if (!i || typeof i != "object")
    return { ok: !1, error: "Start a local match first.", snapshot: null };
  const s = RS(f);
  if (!s)
    return {
      ok: !1,
      error: "Invalid move target.",
      snapshot: ac(i)
    };
  const r = String(i.turn || "").trim();
  return r !== "p1" && r !== "p2" ? {
    ok: !1,
    error: "No active local turn.",
    snapshot: ac(i)
  } : { ...yS(i, r, s), snapshot: ac(i) };
}
function DS(i) {
  const f = String(i?.game?.turn || "").trim();
  return f === "p1" || f === "p2" ? f : null;
}
function US({
  clientId: i = "",
  playerName: f = "",
  connectionStatus: s = "idle",
  currentBoardCode: r = "",
  isWaitingListMember: b = !1,
  boardState: A = null,
  boardList: C = [],
  mainTab: _ = "home",
  mode: j = "online",
  toast: $ = null,
  onlineMoveTimer: D = 15,
  localMoveTimer: T = 15,
  localBlueName: B = "",
  localRedName: et = "",
  localSnapshot: Ot = null,
  historyPanelOpen: At = !1,
  rulesPanelOpen: P = !1
} = {}) {
  return {
    clientId: i,
    playerName: f,
    connectionStatus: s,
    currentBoardCode: r,
    isWaitingListMember: b,
    boardState: A,
    boardList: C,
    mainTab: _,
    mode: j,
    toast: $,
    onlineSetup: {
      moveTimeLimitSeconds: D
    },
    localSetup: {
      moveTimeLimitSeconds: T,
      blueName: B,
      redName: et
    },
    localSnapshot: Ot,
    historyPanelOpen: At,
    rulesPanelOpen: P
  };
}
function BS(i, f, s) {
  if (!s || typeof s != "object") return !1;
  const r = String(i || "").trim(), b = String(s.boardCode || "").trim();
  if (r && b && r !== b) return !1;
  if (!f || typeof f != "object") return !0;
  const A = String(f.boardCode || "").trim();
  if (!A || A !== b) return !0;
  const C = Number(f.version), _ = Number(s.version);
  return Number.isFinite(C) ? Number.isFinite(_) ? _ > C : !1 : !0;
}
function HS(i, f) {
  if (!f || typeof f != "object") return i;
  switch (f.type) {
    case "hydrateShell":
      return { ...i, ...f.payload };
    case "setPlayerName":
      return { ...i, playerName: String(f.playerName || "") };
    case "setConnectionStatus":
      return { ...i, connectionStatus: String(f.status || "idle") };
    case "setCurrentBoardCode":
      return {
        ...i,
        currentBoardCode: String(f.boardCode || ""),
        isWaitingListMember: !1
      };
    case "setWaitingListMembership":
      return {
        ...i,
        isWaitingListMember: !!f.isMember
      };
    case "receiveBoardState":
      return BS(
        i.currentBoardCode,
        i.boardState,
        f.boardState
      ) ? {
        ...i,
        boardState: f.boardState,
        currentBoardCode: String(
          f.boardState?.boardCode || i.currentBoardCode || ""
        )
      } : i;
    case "receiveBoardList":
      return {
        ...i,
        boardList: Array.isArray(f.boardList) ? f.boardList : Array.isArray(f.boardList?.rooms) ? f.boardList.rooms : []
      };
    case "setMainTab":
      return { ...i, mainTab: String(f.mainTab || i.mainTab) };
    case "setMode":
      return { ...i, mode: String(f.mode || i.mode) };
    case "setToast":
      return { ...i, toast: f.toast ?? null };
    case "setHistoryPanelOpen":
      return { ...i, historyPanelOpen: !!f.open };
    case "setRulesPanelOpen":
      return { ...i, rulesPanelOpen: !!f.open };
    case "setOnlineMoveTimer":
      return {
        ...i,
        onlineSetup: {
          ...i.onlineSetup,
          moveTimeLimitSeconds: Number(f.seconds)
        }
      };
    case "setLocalMoveTimer":
      return {
        ...i,
        localSetup: {
          ...i.localSetup,
          moveTimeLimitSeconds: Number(f.seconds)
        }
      };
    case "setLocalBlueName":
      return {
        ...i,
        localSetup: {
          ...i.localSetup,
          blueName: String(f.name || "")
        }
      };
    case "setLocalRedName":
      return {
        ...i,
        localSetup: {
          ...i.localSetup,
          redName: String(f.name || "")
        }
      };
    case "startLocalMatch":
      return !f.snapshot || typeof f.snapshot != "object" ? i : { ...i, localSnapshot: f.snapshot };
    case "receiveLocalGameState":
      return !f.snapshot || typeof f.snapshot != "object" ? i : { ...i, localSnapshot: f.snapshot };
    default:
      return i;
  }
}
const YS = {
  minHeight: "100vh",
  display: "grid",
  placeItems: "center",
  padding: "32px 20px",
  background: "radial-gradient(circle at top, rgba(10, 143, 40, 0.18), transparent 38%), linear-gradient(180deg, #f6fbf4 0%, #e4f0e2 100%)",
  color: "#102a1a"
}, LS = {
  width: "min(720px, 100%)",
  borderRadius: "24px",
  padding: "28px",
  background: "rgba(255, 255, 255, 0.92)",
  boxShadow: "0 24px 70px rgba(16, 42, 26, 0.16)",
  border: "1px solid rgba(16, 42, 26, 0.08)"
}, qS = {
  margin: 0,
  fontSize: "0.85rem",
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: "#0a8f28",
  fontWeight: 700
}, GS = {
  margin: "10px 0 12px",
  fontSize: "clamp(2rem, 4vw, 3.25rem)",
  lineHeight: 1.05
}, fm = {
  margin: 0,
  fontSize: "1.05rem",
  lineHeight: 1.6,
  color: "#33513f"
}, XS = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
  gap: "14px",
  marginTop: "24px"
}, Oe = {
  padding: "16px",
  borderRadius: "18px",
  background: "#f7fbf7",
  border: "1px solid rgba(16, 42, 26, 0.08)"
}, Kl = {
  margin: 0,
  fontSize: "0.78rem",
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  color: "#567062"
}, _e = {
  margin: "8px 0 0",
  fontSize: "1rem",
  fontWeight: 700,
  wordBreak: "break-word"
}, QS = {
  width: "100%",
  marginTop: "10px",
  padding: "12px 14px",
  borderRadius: "12px",
  border: "1px solid rgba(16, 42, 26, 0.14)",
  fontSize: "1rem",
  boxSizing: "border-box"
}, lr = {
  display: "flex",
  gap: "10px",
  marginTop: "18px",
  flexWrap: "wrap"
}, xu = (i) => ({
  border: "1px solid rgba(16, 42, 26, 0.12)",
  borderRadius: "999px",
  padding: "8px 14px",
  background: i ? "#102a1a" : "#f7fbf7",
  color: i ? "#f6fbf4" : "#102a1a",
  fontWeight: 700,
  cursor: "pointer"
}), Ce = {
  marginTop: "18px",
  padding: "16px",
  borderRadius: "16px",
  background: "#eef7f0",
  border: "1px dashed rgba(16, 42, 26, 0.18)",
  color: "#153124",
  fontWeight: 600
}, VS = {
  marginTop: "24px",
  padding: "16px 18px",
  borderRadius: "18px",
  background: "#102a1a",
  color: "#f6fbf4",
  lineHeight: 1.55
}, ZS = {
  marginTop: "18px",
  display: "grid",
  gap: "14px"
}, Aa = {
  padding: "18px",
  borderRadius: "18px",
  background: "#f7fbf7",
  border: "1px solid rgba(16, 42, 26, 0.08)"
}, za = {
  margin: "0 0 10px",
  fontSize: "1.2rem"
}, om = {
  display: "grid",
  gap: "10px",
  gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))"
}, wS = {
  display: "inline-block",
  width: "10px",
  height: "10px",
  borderRadius: "999px",
  marginRight: "8px",
  background: "#9aa79e"
};
function Me(i) {
  return String(i || "").trim();
}
function KS(i) {
  const f = Number(i);
  return Number.isFinite(f) ? f : 0;
}
function sr(i) {
  const f = i?.game?.players;
  return f && typeof f == "object" ? f : null;
}
function JS(i) {
  const f = String(i || "").trim();
  return f === "active" || f === "disconnected";
}
function $S(i) {
  return i === "p1" ? "Claim Blue" : "Claim Red";
}
function WS(i) {
  return i?.game?.status === "playing" || i?.game?.status === "paused";
}
function FS() {
  return globalThis.window?.history ?? globalThis.history ?? null;
}
function sc() {
  return globalThis.window?.location ?? globalThis.location ?? null;
}
function IS(i) {
  return i ? typeof i.href == "string" && i.href ? i.href : `${i.origin || "http://localhost"}${i.pathname || "/react"}${i.search || ""}${i.hash || ""}` : "";
}
function kS({
  locationLike: i = sc()
} = {}) {
  const f = IS(i);
  if (!f) return "";
  const s = new URL(f);
  return Me(
    s.searchParams.get("board") || s.searchParams.get("room") || s.searchParams.get("code") || ""
  );
}
function PS(i) {
  if (!i || typeof i != "object" || String(i.type || "") !== "state") return null;
  const f = Me(i.boardCode || i.roomId), s = i.board && typeof i.board == "object", r = i.game && typeof i.game == "object";
  return !f || !s && !r ? null : {
    boardCode: f,
    version: KS(i.version),
    ...s ? { board: i.board } : {},
    ...r ? { game: i.game } : {}
  };
}
function tp(i, { historyLike: f = FS(), locationLike: s = sc() } = {}) {
  if (!s || typeof f?.replaceState != "function")
    return null;
  const r = typeof s.href == "string" && s.href ? s.href : `${s.origin || "http://localhost"}${s.pathname || "/react"}${s.search || ""}${s.hash || ""}`, b = new URL(r);
  b.pathname = "/react", i ? b.searchParams.set("board", String(i).trim()) : b.searchParams.delete("board");
  const A = `${b.pathname}${b.search}${b.hash}`;
  return f.replaceState(f.state ?? null, "", A), A;
}
function lp({
  currentBoardCode: i,
  clientId: f,
  dispatch: s,
  onOwnSeat: r,
  onMessage: b,
  connect: A = Pg
}) {
  const C = Me(i);
  return !C || typeof A != "function" ? null : A({
    roomId: C,
    clientId: String(f || ""),
    onStatus(_) {
      s?.({ type: "setConnectionStatus", status: _ });
    },
    onMessage(_) {
      if (b?.(_), _?.type === "joined") {
        const $ = String(_.playerId || "").trim();
        ($ === "p1" || $ === "p2") && (r?.($), s?.({ type: "setWaitingListMembership", isMember: !1 }));
        return;
      }
      if (_?.type === "left") {
        r?.(null), s?.({ type: "setWaitingListMembership", isMember: !1 }), s?.({ type: "setToast", toast: "You left the board." });
        return;
      }
      if (_?.type === "waitingListJoined") {
        s?.({ type: "setWaitingListMembership", isMember: !0 });
        return;
      }
      if (_?.type === "waitingListLeft") {
        s?.({ type: "setWaitingListMembership", isMember: !1 });
        return;
      }
      if (_?.type === "BoardNotFound" && typeof _.message == "string") {
        s?.({ type: "setToast", toast: _.message });
        return;
      }
      if (_?.type === "error" && typeof _.error == "string") {
        s?.({ type: "setToast", toast: _.error });
        return;
      }
      const j = PS(_);
      j && s?.({ type: "receiveBoardState", boardState: j });
    }
  });
}
function er({
  roomId: i,
  clientId: f,
  dispatch: s,
  setOwnSeat: r,
  connectionRef: b,
  activeBoardRef: A,
  onMessage: C,
  connect: _ = lp
}) {
  const j = Me(i);
  if (!j || typeof _ != "function") return null;
  if (A?.current === j && b?.current)
    return b.current;
  b?.current?.close?.(), b && (b.current = null), A && (A.current = j), r?.(null);
  const $ = _({
    currentBoardCode: j,
    clientId: f,
    dispatch: s,
    onOwnSeat: r,
    onMessage: C
  });
  return b && (b.current = $), $;
}
function ep({ snapshot: i, ownSeat: f } = {}) {
  const s = String(f || "").trim();
  if (s === "p1" || s === "p2") return [];
  const r = sr(i);
  return r ? ["p1", "p2"].filter((b) => r?.[b]?.status === "vacant").map((b) => ({ seatId: b, label: $S(b) })) : [];
}
function np({ ownSeat: i, snapshot: f } = {}) {
  const s = String(i || "").trim();
  return s !== "p1" && s !== "p2" ? null : WS(f) ? { label: "Leave Seat (Forfeit)", danger: !0 } : { label: "Leave Seat", danger: !1 };
}
function ap({
  ownSeat: i,
  snapshot: f,
  isWaitingListMember: s
} = {}) {
  const r = String(i || "").trim();
  if (r === "p1" || r === "p2") return null;
  if (s)
    return { type: "leave", label: "Leave Waiting List" };
  const b = sr(f);
  return b && ["p1", "p2"].every(
    (C) => JS(b?.[C]?.status)
  ) ? { type: "join", label: "Join Waiting List" } : null;
}
function up({ ownSeat: i, snapshot: f } = {}) {
  const s = String(i || "").trim();
  if (s !== "p1" && s !== "p2") return [];
  const r = String(f?.game?.status || "").trim();
  return r === "playing" ? f?.game?.turn === s ? [{ type: "pause", label: "Pause Game" }] : [] : r === "paused" ? (f?.game?.pause?.resumeTurn || f?.game?.pause?.byPlayerId || null) === s ? [{ type: "resume", label: "Resume Game" }] : [] : [];
}
function ip({ ownSeat: i, snapshot: f } = {}) {
  const s = String(i || "").trim();
  if (s !== "p1" && s !== "p2") return null;
  const r = String(f?.game?.status || "").trim();
  return r === "finished" ? { label: "Continue", reason: "between-rounds" } : r === "paused" && f?.game?.pause?.byPlayerId === s ? { label: "Start New Round", reason: "paused-owner" } : null;
}
function cp({ ownSeat: i, snapshot: f } = {}) {
  const s = String(i || "").trim();
  if (s !== "p1" && s !== "p2") return null;
  const r = s === "p1" ? "p2" : "p1", A = sr(f)?.[r];
  return !A || A.status !== "disconnected" || !A.canBeFreed ? null : { seatId: r, label: "Make Seat Available" };
}
function fp({
  clientId: i,
  dispatch: f,
  startWatching: s,
  locationLike: r = sc()
}) {
  const b = kS({ locationLike: r });
  return b ? (f?.({ type: "setCurrentBoardCode", boardCode: b }), s?.({
    roomId: b,
    clientId: i,
    onMessage(A) {
      A?.type === "BoardNotFound" && typeof A.message == "string" && f?.({ type: "setToast", toast: A.message }), A?.type === "error" && typeof A.error == "string" && f?.({ type: "setToast", toast: A.error });
    }
  })) : null;
}
function op(i) {
  const f = i?.point;
  if (!f || typeof f != "object") return null;
  const s = Number(f.x), r = Number(f.y);
  return !Number.isFinite(s) || !Number.isFinite(r) ? null : { x: s, y: r };
}
function Re(i) {
  return typeof i?.send == "function" && Number(i?.socket?.readyState) === 1;
}
function rp({
  payload: i,
  ownSeat: f,
  connection: s,
  dispatch: r
}) {
  if (!Re(s)) {
    r?.({
      type: "setToast",
      toast: "Connection unavailable. Reconnect to move."
    });
    return;
  }
  const b = String(f || "").trim();
  if (b !== "p1" && b !== "p2") {
    r?.({ type: "setToast", toast: "Join a seat to move." });
    return;
  }
  const A = op(i);
  if (!A) {
    r?.({ type: "setToast", toast: "Invalid move target." });
    return;
  }
  try {
    s.send({ type: "move", to: A });
  } catch {
    r?.({
      type: "setToast",
      toast: "Move could not be sent. Reconnect and try again."
    });
  }
}
function sp({
  seatId: i,
  currentBoardCode: f,
  clientId: s,
  playerName: r,
  connection: b,
  dispatch: A
}) {
  if (!Re(b)) {
    A?.({
      type: "setToast",
      toast: "Connection unavailable. Reconnect to claim a seat."
    });
    return;
  }
  const C = String(i || "").trim();
  if (C !== "p1" && C !== "p2") {
    A?.({ type: "setToast", toast: "Invalid seat selection." });
    return;
  }
  b.send({
    type: "claimSeat",
    seatId: C,
    name: String(r || "").trim(),
    roomId: Me(f),
    clientId: String(s || "").trim()
  });
}
function dp({
  currentBoardCode: i,
  clientId: f,
  playerName: s,
  connection: r,
  dispatch: b
}) {
  if (!Re(r)) {
    b?.({
      type: "setToast",
      toast: "Connection unavailable. Reconnect to join the waiting list."
    });
    return;
  }
  r.send({
    type: "joinWaitingList",
    name: String(s || "").trim(),
    roomId: Me(i),
    clientId: String(f || "").trim()
  });
}
function yp({
  currentBoardCode: i,
  clientId: f,
  connection: s,
  dispatch: r
}) {
  if (!Re(s)) {
    r?.({
      type: "setToast",
      toast: "Connection unavailable. Reconnect to leave the waiting list."
    });
    return;
  }
  s.send({
    type: "leaveWaitingList",
    roomId: Me(i),
    clientId: String(f || "").trim()
  });
}
function mp({ ownSeat: i, connection: f, dispatch: s }) {
  const r = String(i || "").trim();
  if (r !== "p1" && r !== "p2") {
    s?.({ type: "setToast", toast: "You are not occupying a seat." });
    return;
  }
  if (!Re(f)) {
    s?.({
      type: "setToast",
      toast: "Connection unavailable. Reconnect to leave your seat."
    });
    return;
  }
  f.send({ type: "leave" });
}
function hp({ ownSeat: i, connection: f, dispatch: s }) {
  const r = String(i || "").trim();
  if (r !== "p1" && r !== "p2") {
    s?.({ type: "setToast", toast: "You are not occupying a seat." });
    return;
  }
  if (!Re(f)) {
    s?.({
      type: "setToast",
      toast: "Connection unavailable. Reconnect to pause."
    });
    return;
  }
  f.send({ type: "pause" });
}
function vp({ ownSeat: i, connection: f, dispatch: s }) {
  const r = String(i || "").trim();
  if (r !== "p1" && r !== "p2") {
    s?.({ type: "setToast", toast: "You are not occupying a seat." });
    return;
  }
  if (!Re(f)) {
    s?.({
      type: "setToast",
      toast: "Connection unavailable. Reconnect to resume."
    });
    return;
  }
  f.send({ type: "resume" });
}
function gp({ ownSeat: i, connection: f, dispatch: s }) {
  const r = String(i || "").trim();
  if (r !== "p1" && r !== "p2") {
    s?.({ type: "setToast", toast: "You are not occupying a seat." });
    return;
  }
  if (!Re(f)) {
    s?.({
      type: "setToast",
      toast: "Connection unavailable. Reconnect to continue."
    });
    return;
  }
  f.send({ type: "reset" });
}
function Sp({ ownSeat: i, seatId: f, connection: s, dispatch: r }) {
  const b = String(i || "").trim();
  if (b !== "p1" && b !== "p2") {
    r?.({ type: "setToast", toast: "You are not occupying a seat." });
    return;
  }
  const A = String(f || "").trim();
  if (A !== "p1" && A !== "p2") {
    r?.({ type: "setToast", toast: "Invalid seat." });
    return;
  }
  if (!Re(s)) {
    r?.({
      type: "setToast",
      toast: "Connection unavailable. Reconnect to free the seat."
    });
    return;
  }
  s.send({ type: "freeSeat", seatId: A });
}
function pp(i) {
  const f = String(i || "").trim();
  return f ? `/react?board=${encodeURIComponent(f)}` : null;
}
function bp({
  roomId: i,
  locationLike: f = sc()
} = {}) {
  const s = pp(i);
  if (!(!s || !f)) {
    if (typeof f.assign == "function") {
      f.assign(s);
      return;
    }
    f.href = s;
  }
}
async function nr({
  clientId: i,
  dispatch: f,
  fetchList: s = Wg
} = {}) {
  try {
    const r = await s(i);
    f?.({ type: "receiveBoardList", boardList: r });
  } catch {
    f?.({
      type: "setToast",
      toast: "Could not refresh the boards list."
    });
  }
}
async function Tp({
  roomId: i,
  clientId: f,
  dispatch: s,
  deleteRequest: r = Ig,
  refreshList: b
} = {}) {
  const A = String(i || "").trim();
  if (A)
    try {
      await r({ roomId: A, clientId: f }), s?.({ type: "setToast", toast: `Board ${A} deleted.` }), await b?.();
    } catch (C) {
      s?.({
        type: "setToast",
        toast: C instanceof Error && C.message ? C.message : "Board delete failed."
      });
    }
}
async function Ep({
  clientId: i,
  moveTimeLimitSeconds: f,
  dispatch: s,
  create: r = Fg,
  syncUrl: b = tp,
  startWatching: A,
  refreshBoardList: C
}) {
  try {
    const _ = await r({ clientId: i, moveTimeLimitSeconds: f }), j = Me(_?.roomId);
    if (!j)
      throw new Error("Board creation response missing roomId.");
    return s?.({ type: "setCurrentBoardCode", boardCode: j }), b?.(j), A?.({ roomId: j, clientId: i }), await C?.(), _;
  } catch (_) {
    return s?.({
      type: "setToast",
      toast: _ instanceof Error && _.message ? _.message : "Board creation failed."
    }), null;
  }
}
function xp({
  blueName: i,
  redName: f,
  moveTimeLimitSeconds: s,
  dispatch: r,
  localGameRef: b,
  createMatch: A = MS
}) {
  const { game: C, snapshot: _ } = A({
    blueName: i,
    redName: f,
    moveTimeLimitSeconds: s
  });
  return b && (b.current = C), r?.({ type: "startLocalMatch", snapshot: _ }), _;
}
function Ap({
  payload: i,
  localGameRef: f,
  dispatch: s,
  applyMove: r = jS
}) {
  const b = f?.current, { error: A, snapshot: C } = r({ game: b, payload: i });
  C && s?.({ type: "receiveLocalGameState", snapshot: C }), A && s?.({ type: "setToast", toast: A });
}
function zp({ initialState: i }) {
  const [f, s] = kt.useReducer(HS, i), [r, b] = kt.useState(null), [A, C] = kt.useState(!1), _ = kt.useRef(null), j = kt.useRef(""), $ = kt.useRef(null), D = i?.demoBoardSnapshot || null, T = f.boardState || D, B = String(f.connectionStatus || "idle"), et = f.mode === "local", Ot = DS(f.localSnapshot), At = f.localSnapshot?.game?.status === "finished", P = ep({
    snapshot: T,
    ownSeat: r
  }), Wt = np({
    ownSeat: r,
    snapshot: T
  }), w = ap({
    ownSeat: r,
    snapshot: T,
    isWaitingListMember: f.isWaitingListMember
  }), Tt = up({
    ownSeat: r,
    snapshot: T
  }), zl = ip({
    ownSeat: r,
    snapshot: T
  }), Nl = cp({
    ownSeat: r,
    snapshot: T
  });
  kt.useEffect(() => {
    const K = fp({
      clientId: f.clientId,
      dispatch: s,
      startWatching: ({ roomId: Ft, clientId: $l, onMessage: jn }) => er({
        roomId: Ft,
        clientId: $l,
        dispatch: s,
        setOwnSeat: b,
        connectionRef: _,
        activeBoardRef: j,
        onMessage: jn
      })
    });
    return () => {
      _.current === K && K && (j.current = "", _.current = null, K.close?.());
    };
  }, []), kt.useEffect(() => {
    const K = Me(f.currentBoardCode);
    if (!K) {
      _.current = null, b(null), s({ type: "setConnectionStatus", status: "idle" });
      return;
    }
    let Ft = null;
    try {
      Ft = er({
        roomId: K,
        clientId: f.clientId,
        dispatch: s,
        setOwnSeat: b,
        connectionRef: _,
        activeBoardRef: j,
        onMessage: null
      });
    } catch {
      j.current = "", _.current = null, s({ type: "setConnectionStatus", status: "error" });
      return;
    }
    return () => {
      _.current === Ft && (j.current = "", _.current = null, Ft?.close?.());
    };
  }, [f.currentBoardCode, f.clientId]);
  const Pt = f.clientId && f.clientId.length > 6 ? `...${f.clientId.slice(-6)}` : "identity ready", I = (K) => {
    const Ft = K.target.value;
    s({ type: "setPlayerName", playerName: Ft }), aS(Ft);
  }, ot = async () => {
    await Ep({
      clientId: f.clientId,
      moveTimeLimitSeconds: f.onlineSetup.moveTimeLimitSeconds,
      dispatch: s,
      startWatching: ({ roomId: K, clientId: Ft }) => er({
        roomId: K,
        clientId: Ft,
        dispatch: s,
        setOwnSeat: b,
        connectionRef: _,
        activeBoardRef: j
      }),
      refreshBoardList: () => nr({ clientId: f.clientId, dispatch: s })
    });
  }, Ol = (K) => {
    s({ type: "setLocalBlueName", name: K.target.value });
  }, ul = (K) => {
    s({ type: "setLocalRedName", name: K.target.value });
  }, il = (K) => {
    s({ type: "setLocalMoveTimer", seconds: K });
  }, tl = () => {
    xp({
      blueName: f.localSetup.blueName,
      redName: f.localSetup.redName,
      moveTimeLimitSeconds: f.localSetup.moveTimeLimitSeconds,
      dispatch: s,
      localGameRef: $
    });
  }, Jl = (K) => {
    Ap({ payload: K, localGameRef: $, dispatch: s });
  }, oe = (K) => {
    sp({
      seatId: K,
      currentBoardCode: f.currentBoardCode,
      clientId: f.clientId,
      playerName: f.playerName,
      connection: _.current,
      dispatch: s
    });
  }, Rt = () => {
    mp({
      ownSeat: r,
      connection: _.current,
      dispatch: s
    });
  }, R = (K) => {
    if (K === "join") {
      dp({
        currentBoardCode: f.currentBoardCode,
        clientId: f.clientId,
        playerName: f.playerName,
        connection: _.current,
        dispatch: s
      });
      return;
    }
    yp({
      currentBoardCode: f.currentBoardCode,
      clientId: f.clientId,
      connection: _.current,
      dispatch: s
    });
  }, Q = () => {
    hp({
      ownSeat: r,
      connection: _.current,
      dispatch: s
    });
  }, Z = () => {
    vp({
      ownSeat: r,
      connection: _.current,
      dispatch: s
    });
  }, mt = () => {
    gp({
      ownSeat: r,
      connection: _.current,
      dispatch: s
    });
  }, rt = (K) => {
    Sp({
      ownSeat: r,
      seatId: K,
      connection: _.current,
      dispatch: s
    });
  }, cl = () => {
    nr({ clientId: f.clientId, dispatch: s });
  }, Ll = (K) => {
    bp({ roomId: K });
  }, re = (K) => {
    Tp({
      roomId: K,
      clientId: f.clientId,
      dispatch: s,
      refreshList: cl
    });
  }, h = (K) => {
    s({ type: "setToast", toast: K });
  }, O = Array.isArray(T?.game?.moves) ? T.game.moves.length : 0, L = () => {
    C(!1), s({ type: "setHistoryPanelOpen", open: !1 }), s({ type: "setRulesPanelOpen", open: !0 });
  }, q = () => {
    C(!1), s({ type: "setRulesPanelOpen", open: !1 }), s({ type: "setHistoryPanelOpen", open: !0 });
  }, ut = () => {
    s({ type: "setRulesPanelOpen", open: !1 });
  }, it = () => {
    s({ type: "setHistoryPanelOpen", open: !1 });
  }, ct = [
    { id: "home", label: "Home" },
    { id: "boards", label: "Boards" },
    { id: "play", label: "Play" },
    { id: "match", label: "Match" },
    f.currentBoardCode ? { id: "share", label: "Share" } : { id: "menu", label: "Menu" }
  ], X = new Set(ct.map((K) => K.id)).has(f.mainTab) ? f.mainTab : "home", ql = X === "home", fn = X === "boards", je = X === "play", _l = X === "match", jt = X === "share", St = X === "menu";
  return kt.useEffect(() => {
    fn && nr({ clientId: f.clientId, dispatch: s });
  }, [fn]), /* @__PURE__ */ m.jsx("main", { style: YS, children: /* @__PURE__ */ m.jsxs("section", { style: LS, children: [
    /* @__PURE__ */ m.jsxs(
      "div",
      {
        style: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "14px",
          flexWrap: "wrap"
        },
        children: [
          /* @__PURE__ */ m.jsxs("div", { style: { flex: "1 1 420px", minWidth: 0 }, children: [
            /* @__PURE__ */ m.jsx("p", { style: qS, children: "React product shell" }),
            /* @__PURE__ */ m.jsx("h1", { style: GS, children: "Traceball Arena" }),
            /* @__PURE__ */ m.jsx("p", { style: fm, children: "The React shell owns product state while Elm renders the board island. Online authority remains on the server." })
          ] }),
          /* @__PURE__ */ m.jsx(
            Ug,
            {
              menuOpen: A,
              onToggle: C,
              onSelectRules: L,
              onSelectHistory: q
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ m.jsx(
      Lg,
      {
        tabs: ct,
        activeTab: X,
        onChangeTab: (K) => s({ type: "setMainTab", mainTab: K })
      }
    ),
    /* @__PURE__ */ m.jsxs("div", { style: { marginTop: "16px" }, children: [
      /* @__PURE__ */ m.jsx("p", { style: Kl, children: "Active Tab" }),
      /* @__PURE__ */ m.jsx("p", { style: _e, children: X })
    ] }),
    /* @__PURE__ */ m.jsxs("div", { style: ZS, className: "shell-sections", children: [
      /* @__PURE__ */ m.jsxs(
        "section",
        {
          style: Aa,
          className: "shell-section-card",
          "data-section": "home",
          "data-visible": ql ? "true" : "false",
          children: [
            /* @__PURE__ */ m.jsx("h2", { style: za, children: "Home setup" }),
            /* @__PURE__ */ m.jsxs("div", { style: XS, children: [
              /* @__PURE__ */ m.jsxs("article", { style: Oe, children: [
                /* @__PURE__ */ m.jsx("p", { style: Kl, children: "Player Name" }),
                /* @__PURE__ */ m.jsx(
                  "input",
                  {
                    "aria-label": "Player name",
                    value: f.playerName || "",
                    onChange: I,
                    style: QS,
                    placeholder: "Enter your name"
                  }
                )
              ] }),
              /* @__PURE__ */ m.jsxs("article", { style: Oe, children: [
                /* @__PURE__ */ m.jsx("p", { style: Kl, children: "Client Identity" }),
                /* @__PURE__ */ m.jsx("p", { style: _e, children: Pt })
              ] })
            ] }),
            /* @__PURE__ */ m.jsxs("div", { style: { marginTop: "16px" }, children: [
              /* @__PURE__ */ m.jsx("p", { style: Kl, children: "Selected Mode" }),
              /* @__PURE__ */ m.jsxs("div", { style: lr, children: [
                /* @__PURE__ */ m.jsx(
                  "button",
                  {
                    type: "button",
                    style: xu(f.mode === "online"),
                    onClick: () => s({ type: "setMode", mode: "online" }),
                    children: "Online"
                  }
                ),
                /* @__PURE__ */ m.jsx(
                  "button",
                  {
                    type: "button",
                    style: xu(f.mode === "local"),
                    onClick: () => s({ type: "setMode", mode: "local" }),
                    children: "Local"
                  }
                )
              ] })
            ] }),
            f.mode === "online" ? /* @__PURE__ */ m.jsxs(
              "article",
              {
                style: { ...Oe, marginTop: "14px" },
                "data-setup-card": "online",
                children: [
                  /* @__PURE__ */ m.jsx("p", { style: Kl, children: "Online setup" }),
                  /* @__PURE__ */ m.jsxs("p", { style: _e, children: [
                    "Move timer: ",
                    f.onlineSetup.moveTimeLimitSeconds,
                    "s"
                  ] }),
                  /* @__PURE__ */ m.jsx("div", { style: lr, children: /* @__PURE__ */ m.jsx(
                    "button",
                    {
                      type: "button",
                      style: xu(!1),
                      onClick: ot,
                      children: "Create Board"
                    }
                  ) })
                ]
              }
            ) : /* @__PURE__ */ m.jsx(
              wg,
              {
                blueName: f.localSetup.blueName,
                redName: f.localSetup.redName,
                moveTimeLimitSeconds: f.localSetup.moveTimeLimitSeconds,
                onChangeBlueName: Ol,
                onChangeRedName: ul,
                onChangeMoveTimer: il,
                onStartMatch: tl,
                hasActiveMatch: !!f.localSnapshot
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ m.jsxs(
        "section",
        {
          style: Aa,
          className: "shell-section-card",
          "data-section": "boards",
          "data-visible": fn ? "true" : "false",
          children: [
            /* @__PURE__ */ m.jsx("h2", { style: za, children: "Boards" }),
            /* @__PURE__ */ m.jsx(
              vg,
              {
                boards: f.boardList,
                onRefresh: cl,
                onOpen: Ll,
                onDelete: re
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ m.jsxs(
        "section",
        {
          style: Aa,
          className: "shell-section-card",
          "data-section": "play",
          "data-visible": je ? "true" : "false",
          children: [
            /* @__PURE__ */ m.jsx("h2", { style: za, children: "Play" }),
            et ? null : /* @__PURE__ */ m.jsxs("div", { style: om, children: [
              /* @__PURE__ */ m.jsxs("article", { style: Oe, children: [
                /* @__PURE__ */ m.jsx("p", { style: Kl, children: "Board" }),
                /* @__PURE__ */ m.jsx("p", { style: _e, children: f.currentBoardCode || "Not selected" })
              ] }),
              /* @__PURE__ */ m.jsxs("article", { style: Oe, children: [
                /* @__PURE__ */ m.jsx("p", { style: Kl, children: "Connection" }),
                /* @__PURE__ */ m.jsxs("p", { style: _e, children: [
                  /* @__PURE__ */ m.jsx(
                    "span",
                    {
                      style: {
                        ...wS,
                        background: B === "connected" ? "#0a8f28" : B === "error" ? "#d64545" : "#9aa79e"
                      }
                    }
                  ),
                  B
                ] })
              ] })
            ] }),
            et ? f.localSnapshot ? /* @__PURE__ */ m.jsx("div", { style: Ce, children: /* @__PURE__ */ m.jsx(
              J0,
              {
                snapshot: f.localSnapshot,
                ownSeat: Ot,
                replayIndex: null,
                flipVertical: !1,
                onMoveClick: Jl
              }
            ) }) : /* @__PURE__ */ m.jsx("div", { style: Ce, children: "Start a local match from Home to play on this device." }) : T ? /* @__PURE__ */ m.jsx("div", { style: Ce, children: /* @__PURE__ */ m.jsx(
              J0,
              {
                snapshot: T,
                ownSeat: r,
                replayIndex: null,
                flipVertical: !1,
                onMoveClick: (K) => {
                  console.info("Board move click", K), rp({
                    payload: K,
                    ownSeat: r,
                    connection: _.current,
                    dispatch: s
                  });
                }
              }
            ) }) : /* @__PURE__ */ m.jsx("div", { style: Ce, children: "Board island not mounted yet" }),
            et && At ? /* @__PURE__ */ m.jsx("div", { style: Ce, children: "Round over. Start a new local match from Home to play again." }) : null
          ]
        }
      ),
      /* @__PURE__ */ m.jsxs(
        "section",
        {
          style: Aa,
          className: "shell-section-card",
          "data-section": "match",
          "data-visible": _l ? "true" : "false",
          children: [
            /* @__PURE__ */ m.jsx("h2", { style: za, children: "Match" }),
            et ? f.localSnapshot ? /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
              /* @__PURE__ */ m.jsxs("div", { style: om, children: [
                /* @__PURE__ */ m.jsxs("article", { style: Oe, children: [
                  /* @__PURE__ */ m.jsx("p", { style: Kl, children: "Blue" }),
                  /* @__PURE__ */ m.jsx("p", { style: _e, children: f.localSnapshot.game?.players?.p1?.name || "Blue" })
                ] }),
                /* @__PURE__ */ m.jsxs("article", { style: Oe, children: [
                  /* @__PURE__ */ m.jsx("p", { style: Kl, children: "Red" }),
                  /* @__PURE__ */ m.jsx("p", { style: _e, children: f.localSnapshot.game?.players?.p2?.name || "Red" })
                ] }),
                /* @__PURE__ */ m.jsxs("article", { style: Oe, children: [
                  /* @__PURE__ */ m.jsx("p", { style: Kl, children: "Score" }),
                  /* @__PURE__ */ m.jsxs("p", { style: _e, children: [
                    Number(f.localSnapshot.game?.score?.p1 || 0),
                    " -",
                    " ",
                    Number(f.localSnapshot.game?.score?.p2 || 0)
                  ] })
                ] }),
                /* @__PURE__ */ m.jsxs("article", { style: Oe, children: [
                  /* @__PURE__ */ m.jsx("p", { style: Kl, children: "Turn" }),
                  /* @__PURE__ */ m.jsx("p", { style: _e, children: f.localSnapshot.game?.turn === "p2" ? "Red" : "Blue" })
                ] })
              ] }),
              At ? /* @__PURE__ */ m.jsx("div", { style: Ce, children: "Round over. Start a new local match from Home to play again." }) : null
            ] }) : /* @__PURE__ */ m.jsx("div", { style: Ce, children: "Start a local match from Home to see match details." }) : T ? /* @__PURE__ */ m.jsx(
              ng,
              {
                snapshot: T,
                ownSeat: r,
                connectionStatus: B,
                isWaitingListMember: f.isWaitingListMember,
                claimableSeatActions: P,
                leaveSeatAction: Wt,
                waitingListAction: w,
                pauseResumeActions: Tt,
                newRoundAction: zl,
                freeSeatAction: Nl,
                onClaimSeat: oe,
                onLeaveSeat: Rt,
                onWaitingListAction: R,
                onPauseAction: Q,
                onResumeAction: Z,
                onNewRoundAction: mt,
                onFreeSeatAction: rt
              }
            ) : /* @__PURE__ */ m.jsx("div", { style: Ce, children: "Open or create a board to view match details." })
          ]
        }
      ),
      f.currentBoardCode ? /* @__PURE__ */ m.jsxs(
        "section",
        {
          style: Aa,
          className: "shell-section-card",
          "data-section": "share",
          "data-visible": jt ? "true" : "false",
          children: [
            /* @__PURE__ */ m.jsx("h2", { style: za, children: "Share" }),
            jt ? /* @__PURE__ */ m.jsx(
              Mg,
              {
                boardCode: f.currentBoardCode,
                onToast: h
              }
            ) : null
          ]
        }
      ) : /* @__PURE__ */ m.jsxs(
        "section",
        {
          style: Aa,
          className: "shell-section-card",
          "data-section": "menu",
          "data-visible": St ? "true" : "false",
          children: [
            /* @__PURE__ */ m.jsx("h2", { style: za, children: "Menu" }),
            /* @__PURE__ */ m.jsx("p", { style: fm, children: "Open lightweight product panels." }),
            /* @__PURE__ */ m.jsxs("div", { style: lr, children: [
              /* @__PURE__ */ m.jsx(
                "button",
                {
                  type: "button",
                  style: xu(!1),
                  onClick: L,
                  children: "Rules"
                }
              ),
              /* @__PURE__ */ m.jsx(
                "button",
                {
                  type: "button",
                  style: xu(!1),
                  onClick: q,
                  children: "History"
                }
              )
            ] })
          ]
        }
      )
    ] }),
    f.toast ? /* @__PURE__ */ m.jsx("div", { style: { ...Ce, marginTop: "10px" }, children: f.toast }) : null,
    /* @__PURE__ */ m.jsx(Kg, { open: f.rulesPanelOpen, onClose: ut }),
    /* @__PURE__ */ m.jsx(
      $g,
      {
        open: f.historyPanelOpen,
        localHistoryCount: O,
        onClose: it
      }
    ),
    /* @__PURE__ */ m.jsx("div", { style: VS, children: "Elm remains the board and replay correctness surface. The server remains authoritative for seats, timers, pause/resume, winners, and online move validation." })
  ] }) });
}
const rm = document.getElementById("react-root");
if (rm) {
  const i = US({
    clientId: eS(),
    playerName: nS(),
    onlineMoveTimer: iS()
  });
  Y1.createRoot(rm).render(
    /* @__PURE__ */ m.jsx(M1.StrictMode, { children: /* @__PURE__ */ m.jsx(zp, { initialState: i }) })
  );
}
typeof navigator < "u" && "serviceWorker" in navigator && navigator.serviceWorker.register("/sw.js").then((i) => {
  i.update?.().catch?.(() => {
  }), i.waiting && i.waiting.postMessage({ type: "SKIP_WAITING" });
}).catch(() => {
});
