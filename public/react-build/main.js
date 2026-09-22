function qh(f) {
  return f && f.__esModule && Object.prototype.hasOwnProperty.call(f, "default") ? f.default : f;
}
var Ho = { exports: {} }, dn = {};
var S0;
function Gh() {
  if (S0) return dn;
  S0 = 1;
  var f = /* @__PURE__ */ Symbol.for("react.transitional.element"), s = /* @__PURE__ */ Symbol.for("react.fragment");
  function y(o, N, x) {
    var D = null;
    if (x !== void 0 && (D = "" + x), N.key !== void 0 && (D = "" + N.key), "key" in N) {
      x = {};
      for (var M in N)
        M !== "key" && (x[M] = N[M]);
    } else x = N;
    return N = x.ref, {
      $$typeof: f,
      type: o,
      key: D,
      ref: N !== void 0 ? N : null,
      props: x
    };
  }
  return dn.Fragment = s, dn.jsx = y, dn.jsxs = y, dn;
}
var b0;
function Qh() {
  return b0 || (b0 = 1, Ho.exports = Gh()), Ho.exports;
}
var T = Qh(), Bo = { exports: {} }, w = {};
var p0;
function Xh() {
  if (p0) return w;
  p0 = 1;
  var f = /* @__PURE__ */ Symbol.for("react.transitional.element"), s = /* @__PURE__ */ Symbol.for("react.portal"), y = /* @__PURE__ */ Symbol.for("react.fragment"), o = /* @__PURE__ */ Symbol.for("react.strict_mode"), N = /* @__PURE__ */ Symbol.for("react.profiler"), x = /* @__PURE__ */ Symbol.for("react.consumer"), D = /* @__PURE__ */ Symbol.for("react.context"), M = /* @__PURE__ */ Symbol.for("react.forward_ref"), X = /* @__PURE__ */ Symbol.for("react.suspense"), I = /* @__PURE__ */ Symbol.for("react.memo"), _ = /* @__PURE__ */ Symbol.for("react.lazy"), E = /* @__PURE__ */ Symbol.for("react.activity"), B = /* @__PURE__ */ Symbol.for("react.view_transition"), dt = Symbol.iterator;
  function At(d) {
    return d === null || typeof d != "object" ? null : (d = dt && d[dt] || d["@@iterator"], typeof d == "function" ? d : null);
  }
  var _t = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, H = Object.assign, ft = {};
  function $t(d, A, q) {
    this.props = d, this.context = A, this.refs = ft, this.updater = q || _t;
  }
  $t.prototype.isReactComponent = {}, $t.prototype.setState = function(d, A) {
    if (typeof d != "object" && typeof d != "function" && d != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, d, A, "setState");
  }, $t.prototype.forceUpdate = function(d) {
    this.updater.enqueueForceUpdate(this, d, "forceUpdate");
  };
  function ae() {
  }
  ae.prototype = $t.prototype;
  function El(d, A, q) {
    this.props = d, this.context = A, this.refs = ft, this.updater = q || _t;
  }
  var zl = El.prototype = new ae();
  zl.constructor = El, H(zl, $t.prototype), zl.isPureReactComponent = !0;
  var Ft = Array.isArray;
  function $() {
  }
  var at = { H: null, A: null, T: null, S: null }, Ol = Object.prototype.hasOwnProperty;
  function ll(d, A, q) {
    var G = q.ref;
    return {
      $$typeof: f,
      type: d,
      key: A,
      ref: G !== void 0 ? G : null,
      props: q
    };
  }
  function el(d, A) {
    return ll(d.type, A, d.props);
  }
  function Jt(d) {
    return typeof d == "object" && d !== null && d.$$typeof === f;
  }
  function Hl(d) {
    var A = { "=": "=0", ":": "=2" };
    return "$" + d.replace(/[=:]/g, function(q) {
      return A[q];
    });
  }
  var ue = /\/+/g;
  function Ct(d, A) {
    return typeof d == "object" && d !== null && d.key != null ? Hl("" + d.key) : A.toString(36);
  }
  function R(d) {
    switch (d.status) {
      case "fulfilled":
        return d.value;
      case "rejected":
        throw d.reason;
      default:
        switch (typeof d.status == "string" ? d.then($, $) : (d.status = "pending", d.then(
          function(A) {
            d.status === "pending" && (d.status = "fulfilled", d.value = A);
          },
          function(A) {
            d.status === "pending" && (d.status = "rejected", d.reason = A);
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
  function V(d, A, q, G, ut) {
    var it = typeof d;
    (it === "undefined" || it === "boolean") && (d = null);
    var ot = !1;
    if (d === null) ot = !0;
    else
      switch (it) {
        case "bigint":
        case "string":
        case "number":
          ot = !0;
          break;
        case "object":
          switch (d.$$typeof) {
            case f:
            case s:
              ot = !0;
              break;
            case _:
              return ot = d._init, V(
                ot(d._payload),
                A,
                q,
                G,
                ut
              );
          }
      }
    if (ot)
      return ut = ut(d), ot = G === "" ? "." + Ct(d, 0) : G, Ft(ut) ? (q = "", ot != null && (q = ot.replace(ue, "$&/") + "/"), V(ut, A, q, "", function(ie) {
        return ie;
      })) : ut != null && (Jt(ut) && (ut = el(
        ut,
        q + (ut.key == null || d && d.key === ut.key ? "" : ("" + ut.key).replace(
          ue,
          "$&/"
        ) + "/") + ot
      )), A.push(ut)), 1;
    ot = 0;
    var Y = G === "" ? "." : G + ":";
    if (Ft(d))
      for (var K = 0; K < d.length; K++)
        G = d[K], it = Y + Ct(G, K), ot += V(
          G,
          A,
          q,
          it,
          ut
        );
    else if (K = At(d), typeof K == "function")
      for (d = K.call(d), K = 0; !(G = d.next()).done; )
        G = G.value, it = Y + Ct(G, K++), ot += V(
          G,
          A,
          q,
          it,
          ut
        );
    else if (it === "object") {
      if (typeof d.then == "function")
        return V(
          R(d),
          A,
          q,
          G,
          ut
        );
      throw A = String(d), Error(
        "Objects are not valid as a React child (found: " + (A === "[object Object]" ? "object with keys {" + Object.keys(d).join(", ") + "}" : A) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return ot;
  }
  function L(d, A, q) {
    if (d == null) return d;
    var G = [], ut = 0;
    return V(d, G, "", "", function(it) {
      return A.call(q, it, ut++);
    }), G;
  }
  function yt(d) {
    if (d._status === -1) {
      var A = d._result, q = A();
      q.then(
        function(G) {
          (d._status === 0 || d._status === -1) && (d._status = 1, d._result = G, q.status === void 0 && (q.status = "fulfilled", q.value = G));
        },
        function(G) {
          (d._status === 0 || d._status === -1) && (d._status = 2, d._result = G, q.status === void 0 && (q.status = "rejected", q.reason = G));
        }
      ), d._status === -1 && (d._status = 0, d._result = q);
    }
    if (d._status === 1) return d._result.default;
    throw d._result;
  }
  var nt = typeof reportError == "function" ? reportError : function(d) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var A = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof d == "object" && d !== null && typeof d.message == "string" ? String(d.message) : String(d),
        error: d
      });
      if (!window.dispatchEvent(A)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", d);
      return;
    }
    console.error(d);
  };
  function rl(d) {
    var A = at.T, q = {};
    q.types = A !== null ? A.types : null, at.T = q;
    try {
      var G = d(), ut = at.S;
      ut !== null && ut(q, G), typeof G == "object" && G !== null && typeof G.then == "function" && G.then($, nt);
    } catch (it) {
      nt(it);
    } finally {
      A !== null && q.types !== null && (A.types = q.types), at.T = A;
    }
  }
  function Nl(d) {
    var A = at.T;
    if (A !== null) {
      var q = A.types;
      q === null ? A.types = [d] : q.indexOf(d) === -1 && q.push(d);
    } else rl(Nl.bind(null, d));
  }
  var ne = {
    map: L,
    forEach: function(d, A, q) {
      L(
        d,
        function() {
          A.apply(this, arguments);
        },
        q
      );
    },
    count: function(d) {
      var A = 0;
      return L(d, function() {
        A++;
      }), A;
    },
    toArray: function(d) {
      return L(d, function(A) {
        return A;
      }) || [];
    },
    only: function(d) {
      if (!Jt(d))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return d;
    }
  };
  return w.Activity = E, w.Children = ne, w.Component = $t, w.Fragment = y, w.Profiler = N, w.PureComponent = El, w.StrictMode = o, w.Suspense = X, w.ViewTransition = B, w.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = at, w.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(d) {
      return at.H.useMemoCache(d);
    }
  }, w.addTransitionType = Nl, w.cache = function(d) {
    return function() {
      return d.apply(null, arguments);
    };
  }, w.cacheSignal = function() {
    return null;
  }, w.cloneElement = function(d, A, q) {
    if (d == null)
      throw Error(
        "The argument must be a React element, but you passed " + d + "."
      );
    var G = H({}, d.props), ut = d.key;
    if (A != null)
      for (it in A.key !== void 0 && (ut = "" + A.key), A)
        !Ol.call(A, it) || it === "key" || it === "__self" || it === "__source" || it === "ref" && A.ref === void 0 || (G[it] = A[it]);
    var it = arguments.length - 2;
    if (it === 1) G.children = q;
    else if (1 < it) {
      for (var ot = Array(it), Y = 0; Y < it; Y++)
        ot[Y] = arguments[Y + 2];
      G.children = ot;
    }
    return ll(d.type, ut, G);
  }, w.createContext = function(d) {
    return d = {
      $$typeof: D,
      _currentValue: d,
      _currentValue2: d,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, d.Provider = d, d.Consumer = {
      $$typeof: x,
      _context: d
    }, d;
  }, w.createElement = function(d, A, q) {
    var G, ut = {}, it = null;
    if (A != null)
      for (G in A.key !== void 0 && (it = "" + A.key), A)
        Ol.call(A, G) && G !== "key" && G !== "__self" && G !== "__source" && (ut[G] = A[G]);
    var ot = arguments.length - 2;
    if (ot === 1) ut.children = q;
    else if (1 < ot) {
      for (var Y = Array(ot), K = 0; K < ot; K++)
        Y[K] = arguments[K + 2];
      ut.children = Y;
    }
    if (d && d.defaultProps)
      for (G in ot = d.defaultProps, ot)
        ut[G] === void 0 && (ut[G] = ot[G]);
    return ll(d, it, ut);
  }, w.createRef = function() {
    return { current: null };
  }, w.forwardRef = function(d) {
    return { $$typeof: M, render: d };
  }, w.isValidElement = Jt, w.lazy = function(d) {
    return {
      $$typeof: _,
      _payload: { _status: -1, _result: d },
      _init: yt
    };
  }, w.memo = function(d, A) {
    return {
      $$typeof: I,
      type: d,
      compare: A === void 0 ? null : A
    };
  }, w.startTransition = rl, w.unstable_useCacheRefresh = function() {
    return at.H.useCacheRefresh();
  }, w.use = function(d) {
    return at.H.use(d);
  }, w.useActionState = function(d, A, q) {
    return at.H.useActionState(d, A, q);
  }, w.useCallback = function(d, A) {
    return at.H.useCallback(d, A);
  }, w.useContext = function(d) {
    return at.H.useContext(d);
  }, w.useDebugValue = function() {
  }, w.useDeferredValue = function(d, A) {
    return at.H.useDeferredValue(d, A);
  }, w.useEffect = function(d, A) {
    return at.H.useEffect(d, A);
  }, w.useEffectEvent = function(d) {
    return at.H.useEffectEvent(d);
  }, w.useId = function() {
    return at.H.useId();
  }, w.useImperativeHandle = function(d, A, q) {
    return at.H.useImperativeHandle(d, A, q);
  }, w.useInsertionEffect = function(d, A) {
    return at.H.useInsertionEffect(d, A);
  }, w.useLayoutEffect = function(d, A) {
    return at.H.useLayoutEffect(d, A);
  }, w.useMemo = function(d, A) {
    return at.H.useMemo(d, A);
  }, w.useOptimistic = function(d, A) {
    return at.H.useOptimistic(d, A);
  }, w.useReducer = function(d, A, q) {
    return at.H.useReducer(d, A, q);
  }, w.useRef = function(d) {
    return at.H.useRef(d);
  }, w.useState = function(d) {
    return at.H.useState(d);
  }, w.useSyncExternalStore = function(d, A, q) {
    return at.H.useSyncExternalStore(
      d,
      A,
      q
    );
  }, w.useTransition = function() {
    return at.H.useTransition();
  }, w.version = "19.3.0", w;
}
var T0;
function Ko() {
  return T0 || (T0 = 1, Bo.exports = Xh()), Bo.exports;
}
var ol = Ko();
const Lh = /* @__PURE__ */ qh(ol);
var Yo = { exports: {} }, yn = {}, qo = { exports: {} }, Go = {};
var E0;
function Zh() {
  return E0 || (E0 = 1, (function(f) {
    function s(R, V) {
      var L = R.length;
      R.push(V);
      t: for (; 0 < L; ) {
        var yt = L - 1 >>> 1, nt = R[yt];
        if (0 < N(nt, V))
          R[yt] = V, R[L] = nt, L = yt;
        else break t;
      }
    }
    function y(R) {
      return R.length === 0 ? null : R[0];
    }
    function o(R) {
      if (R.length === 0) return null;
      var V = R[0], L = R.pop();
      if (L !== V) {
        R[0] = L;
        t: for (var yt = 0, nt = R.length, rl = nt >>> 1; yt < rl; ) {
          var Nl = 2 * (yt + 1) - 1, ne = R[Nl], d = Nl + 1, A = R[d];
          if (0 > N(ne, L))
            d < nt && 0 > N(A, ne) ? (R[yt] = A, R[d] = L, yt = d) : (R[yt] = ne, R[Nl] = L, yt = Nl);
          else if (d < nt && 0 > N(A, L))
            R[yt] = A, R[d] = L, yt = d;
          else break t;
        }
      }
      return V;
    }
    function N(R, V) {
      var L = R.sortIndex - V.sortIndex;
      return L !== 0 ? L : R.id - V.id;
    }
    if (f.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var x = performance;
      f.unstable_now = function() {
        return x.now();
      };
    } else {
      var D = Date, M = D.now();
      f.unstable_now = function() {
        return D.now() - M;
      };
    }
    var X = [], I = [], _ = 1, E = null, B = 3, dt = !1, At = !1, _t = !1, H = !1, ft = typeof setTimeout == "function" ? setTimeout : null, $t = typeof clearTimeout == "function" ? clearTimeout : null, ae = typeof setImmediate < "u" ? setImmediate : null;
    function El(R) {
      for (var V = y(I); V !== null; ) {
        if (V.callback === null) o(I);
        else if (V.startTime <= R)
          o(I), V.sortIndex = V.expirationTime, s(X, V);
        else break;
        V = y(I);
      }
    }
    function zl(R) {
      if (_t = !1, El(R), !At)
        if (y(X) !== null)
          At = !0, Ft || (Ft = !0, Jt());
        else {
          var V = y(I);
          V !== null && Ct(zl, V.startTime - R);
        }
    }
    var Ft = !1, $ = -1, at = 5, Ol = -1;
    function ll() {
      return H ? !0 : !(f.unstable_now() - Ol < at);
    }
    function el() {
      if (H = !1, Ft) {
        var R = f.unstable_now();
        Ol = R;
        var V = !0;
        try {
          t: {
            At = !1, _t && (_t = !1, $t($), $ = -1), dt = !0;
            var L = B;
            try {
              l: {
                for (El(R), E = y(X); E !== null && !(E.expirationTime > R && ll()); ) {
                  var yt = E.callback;
                  if (typeof yt == "function") {
                    E.callback = null, B = E.priorityLevel;
                    var nt = yt(
                      E.expirationTime <= R
                    );
                    if (R = f.unstable_now(), typeof nt == "function") {
                      E.callback = nt, El(R), V = !0;
                      break l;
                    }
                    E === y(X) && o(X), El(R);
                  } else o(X);
                  E = y(X);
                }
                if (E !== null) V = !0;
                else {
                  var rl = y(I);
                  rl !== null && Ct(
                    zl,
                    rl.startTime - R
                  ), V = !1;
                }
              }
              break t;
            } finally {
              E = null, B = L, dt = !1;
            }
            V = void 0;
          }
        } finally {
          V ? Jt() : Ft = !1;
        }
      }
    }
    var Jt;
    if (typeof ae == "function")
      Jt = function() {
        ae(el);
      };
    else if (typeof MessageChannel < "u") {
      var Hl = new MessageChannel(), ue = Hl.port2;
      Hl.port1.onmessage = el, Jt = function() {
        ue.postMessage(null);
      };
    } else
      Jt = function() {
        ft(el, 0);
      };
    function Ct(R, V) {
      $ = ft(function() {
        R(f.unstable_now());
      }, V);
    }
    f.unstable_IdlePriority = 5, f.unstable_ImmediatePriority = 1, f.unstable_LowPriority = 4, f.unstable_NormalPriority = 3, f.unstable_Profiling = null, f.unstable_UserBlockingPriority = 2, f.unstable_cancelCallback = function(R) {
      R.callback = null;
    }, f.unstable_forceFrameRate = function(R) {
      0 > R || 125 < R ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : at = 0 < R ? Math.floor(1e3 / R) : 5;
    }, f.unstable_getCurrentPriorityLevel = function() {
      return B;
    }, f.unstable_next = function(R) {
      switch (B) {
        case 1:
        case 2:
        case 3:
          var V = 3;
          break;
        default:
          V = B;
      }
      var L = B;
      B = V;
      try {
        return R();
      } finally {
        B = L;
      }
    }, f.unstable_requestPaint = function() {
      H = !0;
    }, f.unstable_runWithPriority = function(R, V) {
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
      var L = B;
      B = R;
      try {
        return V();
      } finally {
        B = L;
      }
    }, f.unstable_scheduleCallback = function(R, V, L) {
      var yt = f.unstable_now();
      switch (typeof L == "object" && L !== null ? (L = L.delay, L = typeof L == "number" && 0 < L ? yt + L : yt) : L = yt, R) {
        case 1:
          var nt = -1;
          break;
        case 2:
          nt = 250;
          break;
        case 5:
          nt = 1073741823;
          break;
        case 4:
          nt = 1e4;
          break;
        default:
          nt = 5e3;
      }
      return nt = L + nt, R = {
        id: _++,
        callback: V,
        priorityLevel: R,
        startTime: L,
        expirationTime: nt,
        sortIndex: -1
      }, L > yt ? (R.sortIndex = L, s(I, R), y(X) === null && R === y(I) && (_t ? ($t($), $ = -1) : _t = !0, Ct(zl, L - yt))) : (R.sortIndex = nt, s(X, R), At || dt || (At = !0, Ft || (Ft = !0, Jt()))), R;
    }, f.unstable_shouldYield = ll, f.unstable_wrapCallback = function(R) {
      var V = B;
      return function() {
        var L = B;
        B = V;
        try {
          return R.apply(this, arguments);
        } finally {
          B = L;
        }
      };
    };
  })(Go)), Go;
}
var z0;
function Vh() {
  return z0 || (z0 = 1, qo.exports = Zh()), qo.exports;
}
var Qo = { exports: {} }, wt = {};
var O0;
function Kh() {
  if (O0) return wt;
  O0 = 1;
  var f = Ko();
  function s(_) {
    var E = "https://react.dev/errors/" + _;
    if (1 < arguments.length) {
      E += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var B = 2; B < arguments.length; B++)
        E += "&args[]=" + encodeURIComponent(arguments[B]);
    }
    return "Minified React error #" + _ + "; visit " + E + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function y() {
  }
  var o = {
    d: {
      f: y,
      r: function() {
        throw Error(s(522));
      },
      D: y,
      C: y,
      L: y,
      m: y,
      X: y,
      S: y,
      M: y
    },
    p: 0,
    findDOMNode: null
  }, N = /* @__PURE__ */ Symbol.for("react.portal"), x = /* @__PURE__ */ Symbol.for("react.recoverable"), D = /* @__PURE__ */ Symbol.for("react.optimistic_key");
  function M(_, E, B) {
    var dt = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: N,
      key: dt == null ? null : dt === D ? D : "" + dt,
      children: _,
      containerInfo: E,
      implementation: B
    };
  }
  var X = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function I(_, E) {
    if (_ === "font") return "";
    if (typeof E == "string")
      return E === "use-credentials" ? E : "";
  }
  return wt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, wt.browser = function(_) {
    return { $$typeof: x, _reason: _ };
  }, wt.createPortal = function(_, E) {
    var B = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!E || E.nodeType !== 1 && E.nodeType !== 9 && E.nodeType !== 11)
      throw Error(s(299));
    return M(_, E, null, B);
  }, wt.flushSync = function(_) {
    var E = X.T, B = o.p;
    try {
      if (X.T = null, o.p = 2, _) return _();
    } finally {
      X.T = E, o.p = B, o.d.f();
    }
  }, wt.preconnect = function(_, E) {
    typeof _ == "string" && (E ? (E = E.crossOrigin, E = typeof E == "string" ? E === "use-credentials" ? E : "" : void 0) : E = null, o.d.C(_, E));
  }, wt.prefetchDNS = function(_) {
    typeof _ == "string" && o.d.D(_);
  }, wt.preinit = function(_, E) {
    if (typeof _ == "string" && E && typeof E.as == "string") {
      var B = E.as, dt = I(B, E.crossOrigin), At = typeof E.integrity == "string" ? E.integrity : void 0, _t = typeof E.fetchPriority == "string" ? E.fetchPriority : void 0;
      B === "style" ? o.d.S(
        _,
        typeof E.precedence == "string" ? E.precedence : void 0,
        {
          crossOrigin: dt,
          integrity: At,
          fetchPriority: _t
        }
      ) : B === "script" && o.d.X(_, {
        crossOrigin: dt,
        integrity: At,
        fetchPriority: _t,
        nonce: typeof E.nonce == "string" ? E.nonce : void 0
      });
    }
  }, wt.preinitModule = function(_, E) {
    if (typeof _ == "string")
      if (typeof E == "object" && E !== null) {
        if (E.as == null || E.as === "script") {
          var B = I(
            E.as,
            E.crossOrigin
          );
          o.d.M(_, {
            crossOrigin: B,
            integrity: typeof E.integrity == "string" ? E.integrity : void 0,
            nonce: typeof E.nonce == "string" ? E.nonce : void 0,
            fetchPriority: typeof E.fetchPriority == "string" ? E.fetchPriority : void 0
          });
        }
      } else E == null && o.d.M(_);
  }, wt.preload = function(_, E) {
    if (typeof _ == "string" && typeof E == "object" && E !== null && typeof E.as == "string") {
      var B = E.as, dt = I(B, E.crossOrigin);
      o.d.L(_, B, {
        crossOrigin: dt,
        integrity: typeof E.integrity == "string" ? E.integrity : void 0,
        nonce: typeof E.nonce == "string" ? E.nonce : void 0,
        type: typeof E.type == "string" ? E.type : void 0,
        fetchPriority: typeof E.fetchPriority == "string" ? E.fetchPriority : void 0,
        referrerPolicy: typeof E.referrerPolicy == "string" ? E.referrerPolicy : void 0,
        imageSrcSet: typeof E.imageSrcSet == "string" ? E.imageSrcSet : void 0,
        imageSizes: typeof E.imageSizes == "string" ? E.imageSizes : void 0,
        media: typeof E.media == "string" ? E.media : void 0
      });
    }
  }, wt.preloadModule = function(_, E) {
    if (typeof _ == "string")
      if (E) {
        var B = I(E.as, E.crossOrigin);
        o.d.m(_, {
          as: typeof E.as == "string" && E.as !== "script" ? E.as : void 0,
          crossOrigin: B,
          integrity: typeof E.integrity == "string" ? E.integrity : void 0,
          nonce: typeof E.nonce == "string" ? E.nonce : void 0,
          fetchPriority: typeof E.fetchPriority == "string" ? E.fetchPriority : void 0
        });
      } else o.d.m(_);
  }, wt.requestFormReset = function(_) {
    o.d.r(_);
  }, wt.unstable_batchedUpdates = function(_, E) {
    return _(E);
  }, wt.useFormState = function(_, E, B) {
    return X.H.useFormState(_, E, B);
  }, wt.useFormStatus = function() {
    return X.H.useHostTransitionStatus();
  }, wt.version = "19.3.0", wt;
}
var N0;
function wh() {
  if (N0) return Qo.exports;
  N0 = 1;
  function f() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f);
      } catch (s) {
        console.error(s);
      }
  }
  return f(), Qo.exports = Kh(), Qo.exports;
}
var A0;
function Jh() {
  if (A0) return yn;
  A0 = 1;
  var f = Vh(), s = Ko(), y = wh();
  function o(t) {
    var l = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      l += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var e = 2; e < arguments.length; e++)
        l += "&args[]=" + encodeURIComponent(arguments[e]);
    }
    return "Minified React error #" + t + "; visit " + l + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function N(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function x(t) {
    for (var l = t, e = l; e && !e.alternate; )
      l = e, (l.flags & 4098) !== 0 && (t = l.return), e = l.return;
    for (; l.return; ) l = l.return;
    return l.tag === 3 ? t : null;
  }
  function D(t) {
    if (t.tag === 13) {
      var l = t.memoizedState;
      if (l === null && (t = t.alternate, t !== null && (l = t.memoizedState)), l !== null) return l.dehydrated;
    }
    return null;
  }
  function M(t) {
    if (t.tag === 31) {
      var l = t.memoizedState;
      if (l === null && (t = t.alternate, t !== null && (l = t.memoizedState)), l !== null) return l.dehydrated;
    }
    return null;
  }
  function X(t) {
    if (x(t) !== t)
      throw Error(o(188));
  }
  function I(t) {
    var l = t.alternate;
    if (!l) {
      if (l = x(t), l === null) throw Error(o(188));
      return l !== t ? null : t;
    }
    for (var e = t, a = l; ; ) {
      var u = e.return;
      if (u === null) break;
      var n = u.alternate;
      if (n === null) {
        if (a = u.return, a !== null) {
          e = a;
          continue;
        }
        break;
      }
      if (u.child === n.child) {
        for (n = u.child; n; ) {
          if (n === e) return X(u), t;
          if (n === a) return X(u), l;
          n = n.sibling;
        }
        throw Error(o(188));
      }
      if (e.return !== a.return) e = u, a = n;
      else {
        for (var i = !1, c = u.child; c; ) {
          if (c === e) {
            i = !0, e = u, a = n;
            break;
          }
          if (c === a) {
            i = !0, a = u, e = n;
            break;
          }
          c = c.sibling;
        }
        if (!i) {
          for (c = n.child; c; ) {
            if (c === e) {
              i = !0, e = n, a = u;
              break;
            }
            if (c === a) {
              i = !0, a = n, e = u;
              break;
            }
            c = c.sibling;
          }
          if (!i) throw Error(o(189));
        }
      }
      if (e.alternate !== a) throw Error(o(190));
    }
    if (e.tag !== 3) throw Error(o(188));
    return e.stateNode.current === e ? t : l;
  }
  function _(t) {
    var l = t.tag;
    if (l === 5 || l === 26 || l === 27 || l === 6) return t;
    for (t = t.child; t !== null; ) {
      if (l = _(t), l !== null) return l;
      t = t.sibling;
    }
    return null;
  }
  function E(t, l, e, a, u, n) {
    for (; t !== null; ) {
      if ((t.tag === 5 || t.tag === 27 || t.tag === 6) && e(t, a, u, n) || (t.tag !== 22 || t.memoizedState === null) && (l || t.tag !== 5 && t.tag !== 27) && E(
        t.child,
        l,
        e,
        a,
        u,
        n
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
  function dt(t) {
    var l = !1;
    for (t = t.return; t !== null && (t.tag === 4 && (l = !0), !(t.tag === 3 || t.tag === 5 || t.tag === 27)); )
      t = t.return;
    return l;
  }
  function At(t) {
    var l = [null, null], e = B(t);
    return e === null || _t(
      l,
      t,
      e.child,
      { foundSelf: !1 }
    ), l;
  }
  function _t(t, l, e, a) {
    for (; e !== null; ) {
      if (e === l) a.foundSelf = !0;
      else if (e.tag === 5 || e.tag === 27 || e.tag === 6) {
        if (a.foundSelf) return t[1] = e, !0;
        t[0] = e;
      } else if ((e.tag !== 22 || e.memoizedState === null) && _t(
        t,
        l,
        e.child,
        a
      ))
        return !0;
      e = e.sibling;
    }
    return !1;
  }
  function H(t) {
    switch (t.tag) {
      case 5:
      case 27:
      case 6:
        return t.stateNode;
      case 3:
        return t.stateNode.containerInfo;
      default:
        throw Error(o(559));
    }
  }
  var ft = null, $t = null;
  function ae(t, l, e) {
    return t === e ? !0 : t === l ? (ft = t, !0) : !1;
  }
  function El(t, l, e) {
    return t === e ? ($t = t, !1) : t === l ? ($t !== null && (ft = t), !0) : !1;
  }
  function zl(t) {
    if (t === null) return null;
    do
      t = t === null ? null : t.return;
    while (t && t.tag !== 5 && t.tag !== 27 && t.tag !== 3);
    return t || null;
  }
  function Ft(t, l, e) {
    for (var a = 0, u = t; u; u = e(u)) a++;
    u = 0;
    for (var n = l; n; n = e(n)) u++;
    for (; 0 < a - u; ) t = e(t), a--;
    for (; 0 < u - a; ) l = e(l), u--;
    for (; a--; ) {
      if (t === l || l !== null && t === l.alternate)
        return t;
      t = e(t), l = e(l);
    }
    return null;
  }
  var $ = Object.assign, at = /* @__PURE__ */ Symbol.for("react.element"), Ol = /* @__PURE__ */ Symbol.for("react.transitional.element"), ll = /* @__PURE__ */ Symbol.for("react.portal"), el = /* @__PURE__ */ Symbol.for("react.fragment"), Jt = /* @__PURE__ */ Symbol.for("react.strict_mode"), Hl = /* @__PURE__ */ Symbol.for("react.profiler"), ue = /* @__PURE__ */ Symbol.for("react.consumer"), Ct = /* @__PURE__ */ Symbol.for("react.context"), R = /* @__PURE__ */ Symbol.for("react.forward_ref"), V = /* @__PURE__ */ Symbol.for("react.suspense"), L = /* @__PURE__ */ Symbol.for("react.suspense_list"), yt = /* @__PURE__ */ Symbol.for("react.memo"), nt = /* @__PURE__ */ Symbol.for("react.lazy"), rl = /* @__PURE__ */ Symbol.for("react.activity"), Nl = /* @__PURE__ */ Symbol.for("react.legacy_hidden"), ne = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), d = /* @__PURE__ */ Symbol.for("react.view_transition"), A = /* @__PURE__ */ Symbol.for("react.recoverable"), q = Symbol.iterator;
  function G(t) {
    return t === null || typeof t != "object" ? null : (t = q && t[q] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var ut = /* @__PURE__ */ Symbol.for("react.client.reference");
  function it(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === ut ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case el:
        return "Fragment";
      case Hl:
        return "Profiler";
      case Jt:
        return "StrictMode";
      case V:
        return "Suspense";
      case L:
        return "SuspenseList";
      case rl:
        return "Activity";
      case d:
        return "ViewTransition";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case ll:
          return "Portal";
        case Ct:
          return t.displayName || "Context";
        case ue:
          return (t._context.displayName || "Context") + ".Consumer";
        case R:
          var l = t.render;
          return t = t.displayName, t || (t = l.displayName || l.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case yt:
          return l = t.displayName || null, l !== null ? l : it(t.type) || "Memo";
        case nt:
          l = t._payload, t = t._init;
          try {
            return it(t(l));
          } catch {
          }
      }
    return null;
  }
  var ot = Array.isArray, Y = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, K = y.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ie = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, ki = [], Oa = -1;
  function Ll(t) {
    return { current: t };
  }
  function Gt(t) {
    0 > Oa || (t.current = ki[Oa], ki[Oa] = null, Oa--);
  }
  function bt(t, l) {
    Oa++, ki[Oa] = t.current, t.current = l;
  }
  var Zl = Ll(null), gu = Ll(null), Oe = Ll(null), Sn = Ll(null);
  function bn(t, l) {
    switch (bt(Oe, l), bt(gu, t), bt(Zl, null), l.nodeType) {
      case 9:
      case 11:
        t = (t = l.documentElement) && (t = t.namespaceURI) ? _y(t) : 0;
        break;
      default:
        if (t = l.tagName, l = l.namespaceURI)
          l = _y(l), t = xy(l, t);
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
    Gt(Zl), bt(Zl, t);
  }
  function Na() {
    Gt(Zl), Gt(gu), Gt(Oe);
  }
  function Pi(t) {
    var l = t.memoizedState;
    l !== null && (du._currentValue = l.memoizedState, bt(Sn, t)), l = Zl.current;
    var e = xy(l, t.type);
    l !== e && (bt(gu, t), bt(Zl, e));
  }
  function pn(t) {
    gu.current === t && (Gt(Zl), Gt(gu)), Sn.current === t && (Gt(Sn), du._currentValue = ie);
  }
  var tc, Wo;
  function Ne(t) {
    if (tc === void 0)
      try {
        throw Error();
      } catch (e) {
        var l = e.stack.trim().match(/\n( *(at )?)/);
        tc = l && l[1] || "", Wo = -1 < e.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + tc + t + Wo;
  }
  var lc = !1;
  function ec(t, l) {
    if (!t || lc) return "";
    lc = !0;
    var e = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function() {
          try {
            if (l) {
              var O = function() {
                throw Error();
              };
              if (Object.defineProperty(O.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(O, []);
                } catch (C) {
                  var v = C;
                }
                Reflect.construct(t, [], O);
              } else {
                try {
                  O.call();
                } catch (C) {
                  v = C;
                }
                O = !1;
                try {
                  var b = Object.getOwnPropertyDescriptor(
                    t.prototype,
                    "props"
                  );
                  Object.defineProperty(t.prototype, "props", {
                    configurable: !0,
                    set: function() {
                      throw Error();
                    }
                  }), O = !0, new t();
                } finally {
                  O && (b !== void 0 ? Object.defineProperty(t.prototype, "props", b) : delete t.prototype.props);
                }
              }
            } else {
              try {
                throw Error();
              } catch (C) {
                v = C;
              }
              (O = t()) && typeof O.catch == "function" && O.catch(function() {
              });
            }
          } catch (C) {
            if (C && v && typeof C.stack == "string")
              return [C.stack, v.stack];
          }
          return [null, null];
        }
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      u && u.configurable && Object.defineProperty(
        a.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var n = a.DetermineComponentFrameRoot(), i = n[0], c = n[1];
      if (i && c) {
        var r = i.split(`
`), g = c.split(`
`);
        for (u = a = 0; a < r.length && !r[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; u < g.length && !g[u].includes(
          "DetermineComponentFrameRoot"
        ); )
          u++;
        if (a === r.length || u === g.length)
          for (a = r.length - 1, u = g.length - 1; 1 <= a && 0 <= u && r[a] !== g[u]; )
            u--;
        for (; 1 <= a && 0 <= u; a--, u--)
          if (r[a] !== g[u]) {
            if (a !== 1 || u !== 1)
              do
                if (a--, u--, 0 > u || r[a] !== g[u]) {
                  var p = `
` + r[a].replace(" at new ", " at ");
                  return t.displayName && p.includes("<anonymous>") && (p = p.replace("<anonymous>", t.displayName)), p;
                }
              while (1 <= a && 0 <= u);
            break;
          }
      }
    } finally {
      lc = !1, Error.prepareStackTrace = e;
    }
    return (e = t ? t.displayName || t.name : "") ? Ne(e) : "";
  }
  function L0(t, l) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Ne(t.type);
      case 16:
        return Ne("Lazy");
      case 13:
        return t.child !== l && l !== null ? Ne("Suspense Fallback") : Ne("Suspense");
      case 19:
        return Ne("SuspenseList");
      case 0:
      case 15:
        return ec(t.type, !1);
      case 11:
        return ec(t.type.render, !1);
      case 1:
        return ec(t.type, !0);
      case 31:
        return Ne("Activity");
      case 30:
        return Ne("ViewTransition");
      default:
        return "";
    }
  }
  function $o(t) {
    try {
      var l = "", e = null;
      do
        l += L0(t, e), e = t, t = t.return;
      while (t);
      return l;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var ac = Object.prototype.hasOwnProperty, uc = f.unstable_scheduleCallback, nc = f.unstable_cancelCallback, Z0 = f.unstable_shouldYield, V0 = f.unstable_requestPaint, sl = f.unstable_now, K0 = f.unstable_getCurrentPriorityLevel, Fo = f.unstable_ImmediatePriority, Io = f.unstable_UserBlockingPriority, Tn = f.unstable_NormalPriority, w0 = f.unstable_LowPriority, ko = f.unstable_IdlePriority, J0 = f.log, W0 = f.unstable_setDisableYieldValue, Su = null, dl = null;
  function Ae(t) {
    if (typeof J0 == "function" && W0(t), dl && typeof dl.setStrictMode == "function")
      try {
        dl.setStrictMode(Su, t);
      } catch {
      }
  }
  var yl = Math.clz32 ? Math.clz32 : I0, $0 = Math.log, F0 = Math.LN2;
  function I0(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - ($0(t) / F0 | 0) | 0;
  }
  var En = 256, zn = 262144, On = 4194304;
  function la(t) {
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
  function Nn(t, l, e) {
    var a = t.pendingLanes;
    if (a === 0) return 0;
    var u = 0, n = t.suspendedLanes, i = t.pingedLanes;
    t = t.warmLanes;
    var c = a & 134217727;
    return c !== 0 ? (a = c & ~n, a !== 0 ? u = la(a) : (i &= c, i !== 0 ? u = la(i) : e || (e = c & ~t, e !== 0 && (u = la(e))))) : (c = a & ~n, c !== 0 ? u = la(c) : i !== 0 ? u = la(i) : e || (e = a & ~t, e !== 0 && (u = la(e)))), u === 0 ? 0 : l !== 0 && l !== u && (l & n) === 0 && (n = u & -u, e = l & -l, n >= e || n === 32 && (e & 4194048) !== 0) ? l : u;
  }
  function bu(t, l) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & l) === 0;
  }
  function Po(t, l) {
    (l & 8) !== 0 && (l |= l & 32);
    var e = t.entangledLanes;
    if (e !== 0)
      for (t = t.entanglements, e &= l; 0 < e; ) {
        var a = 31 - yl(e), u = 1 << a;
        l |= t[a], e &= ~u;
      }
    return l;
  }
  function k0(t, l) {
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
  function tr() {
    var t = On;
    return On <<= 1, (On & 62914560) === 0 && (On = 4194304), t;
  }
  function ic(t) {
    for (var l = [], e = 0; 31 > e; e++) l.push(t);
    return l;
  }
  function pu(t, l) {
    t.pendingLanes |= l, l !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function P0(t, l, e, a, u, n) {
    var i = t.pendingLanes;
    t.pendingLanes = e, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= e, t.entangledLanes &= e, t.errorRecoveryDisabledLanes &= e, t.shellSuspendCounter = 0;
    var c = t.entanglements, r = t.expirationTimes, g = t.hiddenUpdates;
    for (e = i & ~e; 0 < e; ) {
      var p = 31 - yl(e), O = 1 << p;
      c[p] = 0, r[p] = -1;
      var v = g[p];
      if (v !== null)
        for (g[p] = null, p = 0; p < v.length; p++) {
          var b = v[p];
          b !== null && (b.lane &= -536870913);
        }
      e &= ~O;
    }
    a !== 0 && lr(t, a, 0), n !== 0 && u === 0 && t.tag !== 0 && (t.suspendedLanes |= n & ~(i & ~l));
  }
  function lr(t, l, e) {
    t.pendingLanes |= l, t.suspendedLanes &= ~l;
    var a = 31 - yl(l);
    t.entangledLanes |= l, t.entanglements[a] = t.entanglements[a] | 1073741824 | e & 261930;
  }
  function er(t, l) {
    var e = t.entangledLanes |= l;
    for (t = t.entanglements; e; ) {
      var a = 31 - yl(e), u = 1 << a;
      u & l | t[a] & l && (t[a] |= l), e &= ~u;
    }
  }
  function ar(t, l) {
    var e = l & -l;
    return e = (e & 42) !== 0 ? 1 : cc(e), (e & (t.suspendedLanes | l)) !== 0 ? 0 : e;
  }
  function cc(t) {
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
  function fc(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function ur() {
    var t = K.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : s0(t.type));
  }
  function nr(t, l) {
    var e = K.p;
    try {
      return K.p = t, l();
    } finally {
      K.p = e;
    }
  }
  var ce = Math.random().toString(36).slice(2), Qt = "__reactFiber$" + ce, al = "__reactProps$" + ce, Aa = "__reactContainer$" + ce, ir = "__reactEvents$" + ce, tm = "__reactListeners$" + ce, lm = "__reactHandles$" + ce, cr = "__reactResources$" + ce, Tu = "__reactMarker$" + ce, An = "__reactLoad$" + ce;
  function _n(t) {
    delete t[Qt], delete t[al], delete t[tm], delete t[lm];
  }
  function ea(t) {
    var l;
    if (l = t[Qt]) return l;
    for (var e = t.parentNode; e; ) {
      if (l = e[Aa] || e[Qt]) {
        if (e = l.alternate, l.child !== null || e !== null && e.child !== null)
          for (t = Ky(t); t !== null; ) {
            if (e = t[Qt]) return e;
            t = Ky(t);
          }
        return l;
      }
      t = e, e = t.parentNode;
    }
    return null;
  }
  function _a(t) {
    if (t = t[Qt] || t[Aa]) {
      var l = t.tag;
      if (l === 5 || l === 6 || l === 13 || l === 31 || l === 26 || l === 27 || l === 3)
        return t;
    }
    return null;
  }
  function Eu(t) {
    var l = t.tag;
    if (l === 5 || l === 26 || l === 27 || l === 6) return t.stateNode;
    throw Error(o(33));
  }
  function xa(t) {
    var l = t[cr];
    return l || (l = t[cr] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), l;
  }
  function Ht(t) {
    t[Tu] = !0;
  }
  function fr(t) {
    t[An] = void 0;
  }
  var or = /* @__PURE__ */ new Set(), rr = {};
  function aa(t, l) {
    Ca(t, l), Ca(t + "Capture", l);
  }
  function Ca(t, l) {
    for (rr[t] = l, t = 0; t < l.length; t++)
      or.add(l[t]);
  }
  var em = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), sr = {}, dr = {};
  function am(t) {
    return ac.call(dr, t) ? !0 : ac.call(sr, t) ? !1 : em.test(t) ? dr[t] = !0 : (sr[t] = !0, !1);
  }
  var ct = !1;
  function yr() {
    var t = ct;
    return ct = !1, t;
  }
  function xn(t, l, e) {
    if (am(l))
      if (e === null) t.removeAttribute(l);
      else {
        switch (typeof e) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(l);
            return;
          case "boolean":
            var a = l.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              t.removeAttribute(l);
              return;
            }
        }
        t.setAttribute(l, e);
      }
  }
  function Cn(t, l, e) {
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
  function fe(t, l, e, a) {
    if (a === null) t.removeAttribute(e);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttributeNS(l, e, a);
    }
  }
  function ml(t) {
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
  function mr(t) {
    var l = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (l === "checkbox" || l === "radio");
  }
  function um(t, l, e) {
    var a = Object.getOwnPropertyDescriptor(
      t.constructor.prototype,
      l
    );
    if (!t.hasOwnProperty(l) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var u = a.get, n = a.set;
      return Object.defineProperty(t, l, {
        configurable: !0,
        get: function() {
          return u.call(this);
        },
        set: function(i) {
          e = "" + i, n.call(this, i);
        }
      }), Object.defineProperty(t, l, {
        enumerable: a.enumerable
      }), {
        getValue: function() {
          return e;
        },
        setValue: function(i) {
          e = "" + i;
        },
        stopTracking: function() {
          t._valueTracker = null, delete t[l];
        }
      };
    }
  }
  function oc(t) {
    if (!t._valueTracker) {
      var l = mr(t) ? "checked" : "value";
      t._valueTracker = um(
        t,
        l,
        "" + t[l]
      );
    }
  }
  function vr(t) {
    if (!t) return !1;
    var l = t._valueTracker;
    if (!l) return !0;
    var e = l.getValue(), a = "";
    return t && (a = mr(t) ? t.checked ? "true" : "false" : t.value), t = a, t !== e ? (l.setValue(t), !0) : !1;
  }
  var nm = /[\n"\\]/g;
  function Al(t) {
    return t.replace(
      nm,
      function(l) {
        return "\\" + l.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function rc(t, l, e, a, u, n, i, c) {
    t.name = "", i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? t.type = i : t.removeAttribute("type"), l != null ? i === "number" ? (l === 0 && t.value === "" || t.value != l) && (t.value = "" + ml(l)) : t.value !== "" + ml(l) && (t.value = "" + ml(l)) : i !== "submit" && i !== "reset" || t.removeAttribute("value"), l != null ? i === "number" && t.value == l ? sc(t, ml(t.value)) : sc(t, ml(l)) : e != null ? sc(t, ml(e)) : a != null && t.removeAttribute("value"), u == null && n != null && (t.defaultChecked = !!n), u != null && (t.checked = u && typeof u != "function" && typeof u != "symbol"), c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? t.name = "" + ml(c) : t.removeAttribute("name");
  }
  function hr(t, l, e, a, u, n, i, c) {
    if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (t.type = n), l != null || e != null) {
      if (!(n !== "submit" && n !== "reset" || l != null)) {
        oc(t);
        return;
      }
      e = e != null ? "" + ml(e) : "", l = l != null ? "" + ml(l) : e, c || l === t.value || (t.value = l), t.defaultValue = l;
    }
    a = a ?? u, a = typeof a != "function" && typeof a != "symbol" && !!a, t.checked = c ? t.checked : !!a, t.defaultChecked = !!a, i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (t.name = i), oc(t);
  }
  function sc(t, l) {
    t.defaultValue !== "" + l && (t.defaultValue = "" + l);
  }
  function Ma(t, l, e, a) {
    if (t = t.options, l) {
      l = {};
      for (var u = 0; u < e.length; u++)
        l["$" + e[u]] = !0;
      for (e = 0; e < t.length; e++)
        u = l.hasOwnProperty("$" + t[e].value), t[e].selected !== u && (t[e].selected = u), u && a && (t[e].defaultSelected = !0);
    } else {
      for (e = "" + ml(e), l = null, u = 0; u < t.length; u++) {
        if (t[u].value === e) {
          t[u].selected = !0, a && (t[u].defaultSelected = !0);
          return;
        }
        l !== null || t[u].disabled || (l = t[u]);
      }
      l !== null && (l.selected = !0);
    }
  }
  function gr(t, l, e) {
    if (l != null && (l = "" + ml(l), l !== t.value && (t.value = l), e == null)) {
      t.defaultValue !== l && (t.defaultValue = l);
      return;
    }
    t.defaultValue = e != null ? "" + ml(e) : "";
  }
  function Sr(t, l, e, a) {
    if (l == null) {
      if (a != null) {
        if (e != null) throw Error(o(92));
        if (ot(a)) {
          if (1 < a.length) throw Error(o(93));
          a = a[0];
        }
        e = a;
      }
      e == null && (e = ""), l = e;
    }
    e = ml(l), t.defaultValue = e, a = t.textContent, a === e && a !== "" && a !== null && (t.value = a), oc(t);
  }
  function Ra(t, l) {
    if (l) {
      var e = t.firstChild;
      if (e && e === t.lastChild && e.nodeType === 3) {
        e.nodeValue = l;
        return;
      }
    }
    t.textContent = l;
  }
  var im = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function br(t, l, e) {
    var a = l.indexOf("--") === 0;
    e == null || typeof e == "boolean" || e === "" ? a ? t.setProperty(l, "") : l === "float" ? t.cssFloat = "" : t[l] = "" : a ? t.setProperty(l, e) : typeof e != "number" || e === 0 || im.has(l) ? l === "float" ? t.cssFloat = e : t[l] = ("" + e).trim() : t[l] = e + "px";
  }
  function pr(t, l, e) {
    if (l != null && typeof l != "object")
      throw Error(o(62));
    if (t = t.style, e != null) {
      for (var a in e)
        !e.hasOwnProperty(a) || l != null && l.hasOwnProperty(a) || (a.indexOf("--") === 0 ? t.setProperty(a, "") : a === "float" ? t.cssFloat = "" : t[a] = "", ct = !0);
      for (var u in l)
        a = l[u], l.hasOwnProperty(u) && e[u] !== a && (br(t, u, a), ct = !0);
    } else
      for (var n in l)
        l.hasOwnProperty(n) && br(t, n, l[n]);
  }
  function dc(t) {
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
  var cm = /* @__PURE__ */ new Map([
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
  ]), fm = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Mn(t) {
    return fm.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  function Vl() {
  }
  var yc = null;
  function mc(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var Da = null, Ua = null;
  function Tr(t) {
    var l = _a(t);
    if (l && (t = l.stateNode)) {
      var e = t[al] || null;
      t: switch (t = l.stateNode, l.type) {
        case "input":
          if (rc(
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
              'input[name="' + Al(
                "" + l
              ) + '"][type="radio"]'
            ), l = 0; l < e.length; l++) {
              var a = e[l];
              if (a !== t && a.form === t.form) {
                var u = a[al] || null;
                if (!u) throw Error(o(90));
                rc(
                  a,
                  u.value,
                  u.defaultValue,
                  u.defaultValue,
                  u.checked,
                  u.defaultChecked,
                  u.type,
                  u.name
                );
              }
            }
            for (l = 0; l < e.length; l++)
              a = e[l], a.form === t.form && vr(a);
          }
          break t;
        case "textarea":
          gr(t, e.value, e.defaultValue);
          break t;
        case "select":
          l = e.value, l != null && Ma(t, !!e.multiple, l, !1);
      }
    }
  }
  var vc = !1;
  function Er(t, l, e) {
    if (vc) return t(l, e);
    vc = !0;
    try {
      var a = t(l);
      return a;
    } finally {
      if (vc = !1, (Da !== null || Ua !== null) && (Mi(), Da && (l = Da, t = Ua, Ua = Da = null, Tr(l), t)))
        for (l = 0; l < t.length; l++) Tr(t[l]);
    }
  }
  function zu(t, l) {
    var e = t.stateNode;
    if (e === null) return null;
    var a = e[al] || null;
    if (a === null) return null;
    e = a[l];
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
        (a = !a.disabled) || (t = t.type, a = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !a;
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (e && typeof e != "function")
      throw Error(
        o(231, l, typeof e)
      );
    return e;
  }
  var oe = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), hc = !1;
  if (oe)
    try {
      var Ou = {};
      Object.defineProperty(Ou, "passive", {
        get: function() {
          hc = !0;
        }
      }), window.addEventListener("test", Ou, Ou), window.removeEventListener("test", Ou, Ou);
    } catch {
      hc = !1;
    }
  var _e = null, gc = null, Rn = null;
  function zr() {
    if (Rn) return Rn;
    var t, l = gc, e = l.length, a, u = "value" in _e ? _e.value : _e.textContent, n = u.length;
    for (t = 0; t < e && l[t] === u[t]; t++) ;
    var i = e - t;
    for (a = 1; a <= i && l[e - a] === u[n - a]; a++) ;
    return Rn = u.slice(t, 1 < a ? 1 - a : void 0);
  }
  function Dn(t) {
    var l = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && l === 13 && (t = 13)) : t = l, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function Un() {
    return !0;
  }
  function Or() {
    return !1;
  }
  function It(t) {
    function l(e, a, u, n, i) {
      this._reactName = e, this._targetInst = u, this.type = a, this.nativeEvent = n, this.target = i, this.currentTarget = null;
      for (var c in t)
        t.hasOwnProperty(c) && (e = t[c], this[c] = e ? e(n) : n[c]);
      return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1) ? Un : Or, this.isPropagationStopped = Or, this;
    }
    return $(l.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var e = this.nativeEvent;
        e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != "unknown" && (e.returnValue = !1), this.isDefaultPrevented = Un);
      },
      stopPropagation: function() {
        var e = this.nativeEvent;
        e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0), this.isPropagationStopped = Un);
      },
      persist: function() {
      },
      isPersistent: Un
    }), l;
  }
  var xe = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, jn = It(xe), Nu = $({}, xe, { view: 0, detail: 0 }), om = It(Nu), Sc, bc, Au, Hn = $({}, Nu, {
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
    getModifierState: Tc,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== Au && (Au && t.type === "mousemove" ? (Sc = t.screenX - Au.screenX, bc = t.screenY - Au.screenY) : bc = Sc = 0, Au = t), Sc);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : bc;
    }
  }), Nr = It(Hn), rm = $({}, Hn, { dataTransfer: 0 }), sm = It(rm), dm = $({}, Nu, { relatedTarget: 0 }), pc = It(dm), ym = $({}, xe, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), mm = It(ym), vm = $({}, xe, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), hm = It(vm), gm = $({}, xe, { data: 0 }), Ar = It(gm), Sm = {
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
  }, bm = {
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
  }, pm = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Tm(t) {
    var l = this.nativeEvent;
    return l.getModifierState ? l.getModifierState(t) : (t = pm[t]) ? !!l[t] : !1;
  }
  function Tc() {
    return Tm;
  }
  var Em = $({}, Nu, {
    key: function(t) {
      if (t.key) {
        var l = Sm[t.key] || t.key;
        if (l !== "Unidentified") return l;
      }
      return t.type === "keypress" ? (t = Dn(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? bm[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Tc,
    charCode: function(t) {
      return t.type === "keypress" ? Dn(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? Dn(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), zm = It(Em), Om = $({}, Hn, {
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
  }), _r = It(Om), Nm = $({}, xe, { submitter: 0 }), Am = It(Nm), _m = $({}, Nu, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Tc
  }), xm = It(_m), Cm = $({}, xe, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Mm = It(Cm), Rm = $({}, Hn, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Dm = It(Rm), Um = $({}, xe, {
    newState: 0,
    oldState: 0,
    source: 0
  }), jm = It(Um), Hm = [9, 13, 27, 32], Ec = oe && "CompositionEvent" in window, _u = null;
  oe && "documentMode" in document && (_u = document.documentMode);
  var Bm = oe && "TextEvent" in window && !_u, xr = oe && (!Ec || _u && 8 < _u && 11 >= _u), Cr = " ", Mr = !1;
  function Rr(t, l) {
    switch (t) {
      case "keyup":
        return Hm.indexOf(l.keyCode) !== -1;
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
  function Dr(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var ja = !1;
  function Ym(t, l) {
    switch (t) {
      case "compositionend":
        return Dr(l);
      case "keypress":
        return l.which !== 32 ? null : (Mr = !0, Cr);
      case "textInput":
        return t = l.data, t === Cr && Mr ? null : t;
      default:
        return null;
    }
  }
  function qm(t, l) {
    if (ja)
      return t === "compositionend" || !Ec && Rr(t, l) ? (t = zr(), Rn = gc = _e = null, ja = !1, t) : null;
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
        return xr && l.locale !== "ko" ? null : l.data;
      default:
        return null;
    }
  }
  var Gm = {
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
  function Ur(t) {
    var l = t && t.nodeName && t.nodeName.toLowerCase();
    return l === "input" ? !!Gm[t.type] : l === "textarea";
  }
  function jr(t, l, e, a) {
    Da ? Ua ? Ua.push(a) : Ua = [a] : Da = a, l = Bi(l, "onChange"), 0 < l.length && (e = new jn(
      "onChange",
      "change",
      null,
      e,
      a
    ), t.push({ event: e, listeners: l }));
  }
  var xu = null, Cu = null;
  function Qm(t) {
    Ty(t, 0);
  }
  function Bn(t) {
    var l = Eu(t);
    if (vr(l)) return t;
  }
  function Hr(t, l) {
    if (t === "change") return l;
  }
  var Br = !1;
  if (oe) {
    var zc;
    if (oe) {
      var Oc = "oninput" in document;
      if (!Oc) {
        var Yr = document.createElement("div");
        Yr.setAttribute("oninput", "return;"), Oc = typeof Yr.oninput == "function";
      }
      zc = Oc;
    } else zc = !1;
    Br = zc && (!document.documentMode || 9 < document.documentMode);
  }
  function qr() {
    xu && (xu.detachEvent("onpropertychange", Gr), Cu = xu = null);
  }
  function Gr(t) {
    if (t.propertyName === "value" && Bn(Cu)) {
      var l = [];
      jr(
        l,
        Cu,
        t,
        mc(t)
      ), Er(Qm, l);
    }
  }
  function Xm(t, l, e) {
    t === "focusin" ? (qr(), xu = l, Cu = e, xu.attachEvent("onpropertychange", Gr)) : t === "focusout" && qr();
  }
  function Lm(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Bn(Cu);
  }
  function Zm(t, l) {
    if (t === "click") return Bn(l);
  }
  function Vm(t, l) {
    if (t === "input" || t === "change")
      return Bn(l);
  }
  function Km(t, l) {
    return t === l && (t !== 0 || 1 / t === 1 / l) || t !== t && l !== l;
  }
  var vl = typeof Object.is == "function" ? Object.is : Km;
  function Mu(t, l) {
    if (vl(t, l)) return !0;
    if (typeof t != "object" || t === null || typeof l != "object" || l === null)
      return !1;
    var e = Object.keys(t), a = Object.keys(l);
    if (e.length !== a.length) return !1;
    for (a = 0; a < e.length; a++) {
      var u = e[a];
      if (!ac.call(l, u) || !vl(t[u], l[u]))
        return !1;
    }
    return !0;
  }
  function Nc(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  function Qr(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Xr(t, l) {
    var e = Qr(t);
    t = 0;
    for (var a; e; ) {
      if (e.nodeType === 3) {
        if (a = t + e.textContent.length, t <= l && a >= l)
          return { node: e, offset: l - t };
        t = a;
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
      e = Qr(e);
    }
  }
  function Lr(t, l) {
    return t && l ? t === l ? !0 : t && t.nodeType === 3 ? !1 : l && l.nodeType === 3 ? Lr(t, l.parentNode) : "contains" in t ? t.contains(l) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(l) & 16) : !1 : !1;
  }
  function Zr(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var l = Nc(t.document); l instanceof t.HTMLIFrameElement; ) {
      try {
        var e = typeof l.contentWindow.location.href == "string";
      } catch {
        e = !1;
      }
      if (e) t = l.contentWindow;
      else break;
      l = Nc(t.document);
    }
    return l;
  }
  function Ac(t) {
    var l = t && t.nodeName && t.nodeName.toLowerCase();
    return l && (l === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || l === "textarea" || t.contentEditable === "true");
  }
  var wm = oe && "documentMode" in document && 11 >= document.documentMode, Ha = null, _c = null, Ru = null, xc = !1;
  function Vr(t, l, e) {
    var a = e.window === e ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
    xc || Ha == null || Ha !== Nc(a) || (a = Ha, "selectionStart" in a && Ac(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), Ru && Mu(Ru, a) || (Ru = a, a = Bi(_c, "onSelect"), 0 < a.length && (l = new jn(
      "onSelect",
      "select",
      null,
      l,
      e
    ), t.push({ event: l, listeners: a }), l.target = Ha)));
  }
  function ua(t, l) {
    var e = {};
    return e[t.toLowerCase()] = l.toLowerCase(), e["Webkit" + t] = "webkit" + l, e["Moz" + t] = "moz" + l, e;
  }
  var Ba = {
    animationend: ua("Animation", "AnimationEnd"),
    animationiteration: ua("Animation", "AnimationIteration"),
    animationstart: ua("Animation", "AnimationStart"),
    transitionrun: ua("Transition", "TransitionRun"),
    transitionstart: ua("Transition", "TransitionStart"),
    transitioncancel: ua("Transition", "TransitionCancel"),
    transitionend: ua("Transition", "TransitionEnd")
  }, Cc = {}, Kr = {};
  oe && (Kr = document.createElement("div").style, "AnimationEvent" in window || (delete Ba.animationend.animation, delete Ba.animationiteration.animation, delete Ba.animationstart.animation), "TransitionEvent" in window || delete Ba.transitionend.transition);
  function na(t) {
    if (Cc[t]) return Cc[t];
    if (!Ba[t]) return t;
    var l = Ba[t], e;
    for (e in l)
      if (l.hasOwnProperty(e) && e in Kr)
        return Cc[t] = l[e];
    return t;
  }
  var wr = na("animationend"), Jr = na("animationiteration"), Wr = na("animationstart"), Jm = na("transitionrun"), Wm = na("transitionstart"), $m = na("transitioncancel"), $r = na("transitionend"), Fr = /* @__PURE__ */ new Map(), Mc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Mc.push("scrollEnd");
  function Bl(t, l) {
    Fr.set(t, l), aa(l, [t]);
  }
  var Fm = 0;
  function re(t, l) {
    if (t.name != null && t.name !== "auto") return t.name;
    if (l.autoName !== null) return l.autoName;
    t = Ql.identifierPrefix;
    var e = Fm++;
    return t = "_" + t + "t_" + e.toString(32) + "_", l.autoName = t;
  }
  function Ir(t) {
    if (t == null || typeof t == "string")
      return t;
    var l = null, e = eu;
    if (e !== null)
      for (var a = 0; a < e.length; a++) {
        var u = t[e[a]];
        if (u != null) {
          if (u === "none") return "none";
          l = l == null ? u : l + (" " + u);
        }
      }
    return l ?? t.default;
  }
  function se(t, l) {
    return t = Ir(t), l = Ir(l), l == null ? t === "auto" ? null : t : l === "auto" ? null : l;
  }
  var Yn = typeof reportError == "function" ? reportError : function(t) {
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
  }, _l = [], Ya = 0, Rc = 0;
  function qn() {
    for (var t = Ya, l = Rc = Ya = 0; l < t; ) {
      var e = _l[l];
      _l[l++] = null;
      var a = _l[l];
      _l[l++] = null;
      var u = _l[l];
      _l[l++] = null;
      var n = _l[l];
      if (_l[l++] = null, a !== null && u !== null) {
        var i = a.pending;
        i === null ? u.next = u : (u.next = i.next, i.next = u), a.pending = u;
      }
      n !== 0 && kr(e, u, n);
    }
  }
  function Gn(t, l, e, a) {
    _l[Ya++] = t, _l[Ya++] = l, _l[Ya++] = e, _l[Ya++] = a, Rc |= a, t.lanes |= a, t = t.alternate, t !== null && (t.lanes |= a);
  }
  function Dc(t, l, e, a) {
    return Gn(t, l, e, a), Qn(t);
  }
  function ia(t, l) {
    return Gn(t, null, null, l), Qn(t);
  }
  function kr(t, l, e) {
    t.lanes |= e;
    var a = t.alternate;
    a !== null && (a.lanes |= e);
    for (var u = !1, n = t.return; n !== null; )
      n.childLanes |= e, a = n.alternate, a !== null && (a.childLanes |= e), n.tag === 22 && (t = n.stateNode, t === null || t._visibility & 1 || (u = !0)), t = n, n = n.return;
    return t.tag === 3 ? (n = t.stateNode, u && l !== null && (u = 31 - yl(e), t = n.hiddenUpdates, a = t[u], a === null ? t[u] = [l] : a.push(l), l.lane = e | 536870912), n) : null;
  }
  function Qn(t) {
    if (50 < Pu)
      throw Pu = 0, Ci = null, Error(o(185));
    for (var l = t.return; l !== null; )
      t = l, l = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var qa = {};
  function Im(t, l, e, a) {
    this.tag = t, this.key = e, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = l, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ul(t, l, e, a) {
    return new Im(t, l, e, a);
  }
  function Uc(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function de(t, l) {
    var e = t.alternate;
    return e === null ? (e = ul(
      t.tag,
      l,
      t.key,
      t.mode
    ), e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.alternate = t, t.alternate = e) : (e.pendingProps = l, e.type = t.type, e.flags = 0, e.subtreeFlags = 0, e.deletions = null), e.flags = t.flags & 1206910976, e.childLanes = t.childLanes, e.lanes = t.lanes, e.child = t.child, e.memoizedProps = t.memoizedProps, e.memoizedState = t.memoizedState, e.updateQueue = t.updateQueue, l = t.dependencies, e.dependencies = l === null ? null : { lanes: l.lanes, firstContext: l.firstContext }, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.refCleanup = t.refCleanup, e;
  }
  function Pr(t, l) {
    t.flags &= 1206910978;
    var e = t.alternate;
    return e === null ? (t.childLanes = 0, t.lanes = l, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = e.childLanes, t.lanes = e.lanes, t.child = e.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = e.memoizedProps, t.memoizedState = e.memoizedState, t.updateQueue = e.updateQueue, t.type = e.type, l = e.dependencies, t.dependencies = l === null ? null : {
      lanes: l.lanes,
      firstContext: l.firstContext
    }), t;
  }
  function Xn(t, l, e, a, u, n) {
    var i = 0;
    if (a = t, typeof a == "function") Uc(a) && (i = 1);
    else if (typeof a == "string")
      i = Nh(
        t,
        e,
        Zl.current
      ) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (a) {
        case rl:
          return t = ul(31, e, l, u), t.elementType = rl, t.lanes = n, t;
        case el:
          return ca(e.children, u, n, l);
        case Jt:
          i = 8, u |= 24;
          break;
        case Hl:
          return t = ul(12, e, l, u | 2), t.elementType = Hl, t.lanes = n, t;
        case V:
          return t = ul(13, e, l, u), t.elementType = V, t.lanes = n, t;
        case L:
          return t = ul(19, e, l, u), t.elementType = L, t.lanes = n, t;
        case Nl:
        case d:
          return t = u | 32, t = ul(30, e, l, t), t.elementType = d, t.lanes = n, t.stateNode = {
            autoName: null,
            paired: null,
            clones: null,
            ref: null
          }, t;
        default:
          if (typeof a == "object" && a !== null)
            switch (a.$$typeof) {
              case Ct:
                i = 10;
                break t;
              case ue:
                i = 9;
                break t;
              case R:
                i = 11;
                break t;
              case yt:
                i = 14;
                break t;
              case nt:
                i = 16, a = null;
                break t;
            }
          i = 29, e = Error(
            o(130, t === null ? "null" : typeof t, "")
          ), a = null;
      }
    return l = ul(i, e, l, u), l.elementType = t, l.type = a, l.lanes = n, l;
  }
  function ca(t, l, e, a) {
    return t = ul(7, t, a, l), t.lanes = e, t;
  }
  function jc(t, l, e) {
    return t = ul(6, t, null, l), t.lanes = e, t;
  }
  function ts(t) {
    var l = ul(18, null, null, 0);
    return l.stateNode = t, l;
  }
  function Hc(t, l, e) {
    return l = ul(
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
  var ls = /* @__PURE__ */ new WeakMap();
  function xl(t, l) {
    if (typeof t == "object" && t !== null) {
      var e = ls.get(t);
      return e !== void 0 ? e : (l = {
        value: t,
        source: l,
        stack: $o(l)
      }, ls.set(t, l), l);
    }
    return {
      value: t,
      source: l,
      stack: $o(l)
    };
  }
  var Ga = [], Qa = 0, Ln = null, Du = 0, Cl = [], Ml = 0, Ce = null, Kl = 1, wl = "";
  function ye(t, l) {
    Ga[Qa++] = Du, Ga[Qa++] = Ln, Ln = t, Du = l;
  }
  function es(t, l, e) {
    Cl[Ml++] = Kl, Cl[Ml++] = wl, Cl[Ml++] = Ce, Ce = t;
    var a = Kl;
    t = wl;
    var u = 32 - yl(a) - 1;
    a &= ~(1 << u), e += 1;
    var n = 32 - yl(l) + u;
    if (30 < n) {
      var i = u - u % 5;
      n = (a & (1 << i) - 1).toString(32), a >>= i, u -= i, Kl = 1 << 32 - yl(l) + u | e << u | a, wl = n + t;
    } else
      Kl = 1 << n | e << u | a, wl = t;
  }
  function Zn(t) {
    t.return !== null && (ye(t, 1), es(t, 1, 0));
  }
  function Bc(t) {
    for (; t === Ln; )
      Ln = Ga[--Qa], Ga[Qa] = null, Du = Ga[--Qa], Ga[Qa] = null;
    for (; t === Ce; )
      Ce = Cl[--Ml], Cl[Ml] = null, wl = Cl[--Ml], Cl[Ml] = null, Kl = Cl[--Ml], Cl[Ml] = null;
  }
  function as(t, l) {
    Cl[Ml++] = Kl, Cl[Ml++] = wl, Cl[Ml++] = Ce, Kl = l.id, wl = l.overflow, Ce = t;
  }
  var Bt = null, pt = null, F = !1, Me = null, Rl = !1, Yc = Error(o(519));
  function Re(t) {
    var l = Error(
      o(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Uu(xl(l, t)), Yc;
  }
  function us(t) {
    var l = t.stateNode, e = t.type, a = t.memoizedProps;
    switch (l[Qt] = t, l[al] = a, e) {
      case "dialog":
        P("cancel", l), P("close", l);
        break;
      case "iframe":
      case "object":
      case "embed":
        P("load", l);
        break;
      case "video":
      case "audio":
        for (e = 0; e < ln.length; e++)
          P(ln[e], l);
        break;
      case "source":
        P("error", l);
        break;
      case "img":
      case "image":
      case "link":
        P("error", l), P("load", l);
        break;
      case "details":
        P("toggle", l);
        break;
      case "input":
        P("invalid", l), hr(
          l,
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
        P("invalid", l);
        break;
      case "textarea":
        P("invalid", l), Sr(l, a.value, a.defaultValue, a.children);
    }
    e = a.children, typeof e != "string" && typeof e != "number" && typeof e != "bigint" || l.textContent === "" + e || a.suppressHydrationWarning === !0 || Ny(l.textContent, e) ? (a.popover != null && (P("beforetoggle", l), P("toggle", l)), a.onScroll != null && P("scroll", l), a.onScrollEnd != null && P("scrollend", l), a.onClick != null && (l.onclick = Vl), l = !0) : l = !1, l || Re(t, !0);
  }
  function Vn(t) {
    for (Bt = t.return; Bt; )
      switch (Bt.tag) {
        case 5:
        case 31:
        case 13:
          Rl = !1;
          return;
        case 27:
        case 3:
          Rl = !0;
          return;
        default:
          Bt = Bt.return;
      }
  }
  function Xa(t) {
    if (t !== Bt) return !1;
    if (!F) return Vn(t), F = !0, !1;
    var l = t.tag, e;
    if ((e = l !== 3 && l !== 27) && ((e = l === 5) && (e = t.type, e = !(e !== "form" && e !== "button") || vo(t.type, t.memoizedProps)), e = !e), e && pt && Re(t), Vn(t), l === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(o(317));
      pt = Vy(t);
    } else if (l === 31) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(o(317));
      pt = Vy(t);
    } else
      l === 27 ? (l = pt, Je(t.type) ? (t = Oo, Oo = null, pt = t) : pt = l) : pt = Bt ? Ul(t.stateNode.nextSibling) : null;
    return !0;
  }
  function fa() {
    pt = Bt = null, F = !1;
  }
  function qc() {
    var t = Me;
    return t !== null && (cl === null ? cl = t : cl.push.apply(
      cl,
      t
    ), Me = null), t;
  }
  function Uu(t) {
    Me === null ? Me = [t] : Me.push(t);
  }
  var Gc = Ll(null), oa = null, me = null;
  function De(t, l, e) {
    bt(Gc, l._currentValue), l._currentValue = e;
  }
  function ve(t) {
    t._currentValue = Gc.current, Gt(Gc);
  }
  function Kn(t, l, e) {
    for (; t !== null; ) {
      var a = t.alternate;
      if ((t.childLanes & l) !== l ? (t.childLanes |= l, a !== null && (a.childLanes |= l)) : a !== null && (a.childLanes & l) !== l && (a.childLanes |= l), t === e) break;
      t = t.return;
    }
  }
  function Qc(t, l, e, a) {
    var u = t.child;
    for (u !== null && (u.return = t); u !== null; ) {
      var n = u.dependencies;
      if (n !== null) {
        var i = u.child;
        n = n.firstContext;
        t: for (; n !== null; ) {
          var c = n;
          n = u;
          for (var r = 0; r < l.length; r++)
            if (c.context === l[r]) {
              n.lanes |= e, c = n.alternate, c !== null && (c.lanes |= e), Kn(
                n.return,
                e,
                t
              ), a || (i = null);
              break t;
            }
          n = c.next;
        }
      } else if (u.tag === 18) {
        if (i = u.return, i === null) throw Error(o(341));
        i.lanes |= e, n = i.alternate, n !== null && (n.lanes |= e), Kn(i, e, t), i = null;
      } else
        u.tag === 13 && u.memoizedState !== null && u.memoizedState.dehydrated === null ? (u.lanes |= e, i = u.alternate, i !== null && (i.lanes |= e), Kn(
          u.return,
          e,
          t
        ), i = u.child, i = i !== null ? i.sibling : null) : i = u.child;
      if (i !== null) i.return = u;
      else
        for (i = u; i !== null; ) {
          if (i === t) {
            i = null;
            break;
          }
          if (u = i.sibling, u !== null) {
            u.return = i.return, i = u;
            break;
          }
          i = i.return;
        }
      u = i;
    }
  }
  function ra(t, l, e, a) {
    t = null;
    for (var u = l, n = !1; u !== null; ) {
      if (!n) {
        if ((u.flags & 524288) !== 0) n = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var i = u.alternate;
        if (i === null) throw Error(o(387));
        if (i = i.memoizedProps, i !== null) {
          var c = u.type;
          vl(u.pendingProps.value, i.value) || (t !== null ? t.push(c) : t = [c]);
        }
      } else if (u === Sn.current) {
        if (i = u.alternate, i === null) throw Error(o(387));
        i.memoizedState.memoizedState !== u.memoizedState.memoizedState && (t !== null ? t.push(du) : t = [du]);
      }
      u = u.return;
    }
    return t !== null && Qc(
      l,
      t,
      e,
      a
    ), l.flags |= 262144, t !== null;
  }
  function wn(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!vl(
        t.context._currentValue,
        t.memoizedValue
      ))
        return !0;
      t = t.next;
    }
    return !1;
  }
  function sa(t) {
    oa = t, me = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function Xt(t) {
    return ns(oa, t);
  }
  function Jn(t, l) {
    return oa === null && sa(t), ns(t, l);
  }
  function ns(t, l) {
    var e = l._currentValue;
    if (l = { context: l, memoizedValue: e, next: null }, me === null) {
      if (t === null) throw Error(o(308));
      me = l, t.dependencies = { lanes: 0, firstContext: l }, t.flags |= 524288;
    } else me = me.next = l;
    return e;
  }
  var km = typeof AbortController < "u" ? AbortController : function() {
    var t = [], l = this.signal = {
      aborted: !1,
      addEventListener: function(e, a) {
        t.push(a);
      }
    };
    this.abort = function() {
      l.aborted = !0, t.forEach(function(e) {
        return e();
      });
    };
  }, Pm = f.unstable_scheduleCallback, tv = f.unstable_NormalPriority, Mt = {
    $$typeof: Ct,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Xc() {
    return {
      controller: new km(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function ju(t) {
    t.refCount--, t.refCount === 0 && Pm(tv, function() {
      t.controller.abort();
    });
  }
  function is(t, l) {
    if ((t.pendingLanes & 4194048) !== 0) {
      var e = t.transitionTypes;
      for (e === null && (e = t.transitionTypes = []), t = 0; t < l.length; t++) {
        var a = l[t];
        e.indexOf(a) === -1 && e.push(a);
      }
    }
  }
  var Hu = null;
  function lv(t) {
    var l = t.transitionTypes;
    return t.transitionTypes = null, l;
  }
  var Bu = null, Lc = 0, da = 0, La = null;
  function ev(t, l) {
    if (Bu === null) {
      var e = Bu = [];
      Lc = 0, da = no(), La = {
        status: "pending",
        value: void 0,
        then: function(a) {
          e.push(a);
        }
      };
    }
    return Lc++, l.then(cs, cs), l;
  }
  function cs() {
    if (--Lc === 0 && (Hu = null, Bu !== null)) {
      La !== null && (La.status = "fulfilled");
      var t = Bu;
      Bu = null, da = 0, La = null;
      for (var l = 0; l < t.length; l++) (0, t[l])();
    }
  }
  function av(t, l) {
    var e = [], a = {
      status: "pending",
      value: null,
      reason: null,
      then: function(u) {
        e.push(u);
      }
    };
    return t.then(
      function() {
        a.status = "fulfilled", a.value = l;
        for (var u = 0; u < e.length; u++) (0, e[u])(l);
      },
      function(u) {
        for (a.status = "rejected", a.reason = u, u = 0; u < e.length; u++)
          (0, e[u])(void 0);
      }
    ), a;
  }
  var fs = Y.S;
  Y.S = function(t, l) {
    if (ty = sl(), typeof l == "object" && l !== null && typeof l.then == "function" && ev(t, l), Hu !== null)
      for (var e = iu; e !== null; )
        is(e, Hu), e = e.next;
    if (e = t.types, e !== null) {
      for (var a = iu; a !== null; )
        is(a, e), a = a.next;
      if (da !== 0) {
        a = Hu, a === null && (a = Hu = []);
        for (var u = 0; u < e.length; u++) {
          var n = e[u];
          a.indexOf(n) === -1 && a.push(n);
        }
      }
    }
    fs !== null && fs(t, l);
  };
  var ya = Ll(null);
  function Zc() {
    var t = ya.current;
    return t !== null ? t : St.pooledCache;
  }
  function Wn(t, l) {
    l === null ? bt(ya, ya.current) : bt(ya, l.pool);
  }
  function os() {
    var t = Zc();
    return t === null ? null : { parent: Mt._currentValue, pool: t };
  }
  var Za = Error(o(460)), Vc = Error(o(474)), $n = Error(o(542)), Fn = { then: function() {
  } };
  function rs(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function ss(t, l, e) {
    switch (e = t[e], e === void 0 ? t.push(l) : e !== l && (l.then(Vl, Vl), l = e), l.status) {
      case "fulfilled":
        return l.value;
      case "rejected":
        throw t = l.reason, ys(t), t === void 0 && !("reason" in l) ? Error(o(600)) : t;
      default:
        if (typeof l.status == "string") l.then(Vl, Vl);
        else {
          if (t = St, t !== null && 100 < t.shellSuspendCounter)
            throw Error(o(482));
          t = l, t.status = "pending", t.then(
            function(a) {
              if (l.status === "pending") {
                var u = l;
                u.status = "fulfilled", u.value = a;
              }
            },
            function(a) {
              if (l.status === "pending") {
                var u = l;
                u.status = "rejected", u.reason = a;
              }
            }
          );
        }
        switch (l.status) {
          case "fulfilled":
            return l.value;
          case "rejected":
            throw t = l.reason, ys(t), t;
        }
        throw va = l, Za;
    }
  }
  function ma(t) {
    try {
      var l = t._init;
      return l(t._payload);
    } catch (e) {
      throw e !== null && typeof e == "object" && typeof e.then == "function" ? (va = e, Za) : e;
    }
  }
  var va = null;
  function ds() {
    if (va === null) throw Error(o(459));
    var t = va;
    return va = null, t;
  }
  function ys(t) {
    if (t === Za || t === $n)
      throw Error(o(483));
  }
  var Va = null, Yu = 0;
  function In(t) {
    var l = Yu;
    return Yu += 1, Va === null && (Va = []), ss(Va, t, l);
  }
  function Ue(t, l) {
    l = l.props.ref, t.ref = l !== void 0 ? l : null;
  }
  function kn(t, l) {
    throw l.$$typeof === at ? Error(o(525)) : (t = Object.prototype.toString.call(l), Error(
      o(
        31,
        t === "[object Object]" ? "object with keys {" + Object.keys(l).join(", ") + "}" : t
      )
    ));
  }
  function ms(t) {
    function l(h, m) {
      if (t) {
        var S = h.deletions;
        S === null ? (h.deletions = [m], h.flags |= 16) : S.push(m);
      }
    }
    function e(h, m) {
      if (!t) return null;
      for (; m !== null; )
        l(h, m), m = m.sibling;
      return null;
    }
    function a(h) {
      for (var m = /* @__PURE__ */ new Map(); h !== null; )
        h.key === null ? m.set(h.index, h) : m.set(h.key, h), h = h.sibling;
      return m;
    }
    function u(h, m) {
      return h = de(h, m), h.index = 0, h.sibling = null, h;
    }
    function n(h, m, S) {
      return h.index = S, t ? (S = h.alternate, S !== null ? (S = S.index, S < m ? (h.flags |= 2, m) : S) : (h.flags |= 134217730, m)) : (h.flags |= 1048576, m);
    }
    function i(h) {
      return t && h.alternate === null && (h.flags |= 134217730), h;
    }
    function c(h, m, S, z) {
      return m === null || m.tag !== 6 ? (m = jc(S, h.mode, z), m.return = h, m) : (m = u(m, S), m.return = h, m);
    }
    function r(h, m, S, z) {
      var U = S.type;
      return U === el ? (h = p(
        h,
        m,
        S.props.children,
        z,
        S.key
      ), Ue(h, S), h) : m !== null && (m.elementType === U || typeof U == "object" && U !== null && U.$$typeof === nt && ma(U) === m.type) ? (m = u(m, S.props), Ue(m, S), m.return = h, m) : (m = Xn(
        S.type,
        S.key,
        S.props,
        null,
        h.mode,
        z
      ), Ue(m, S), m.return = h, m);
    }
    function g(h, m, S, z) {
      return m === null || m.tag !== 4 || m.stateNode.containerInfo !== S.containerInfo || m.stateNode.implementation !== S.implementation ? (m = Hc(S, h.mode, z), m.return = h, m) : (m = u(m, S.children || []), m.return = h, m);
    }
    function p(h, m, S, z, U) {
      return m === null || m.tag !== 7 ? (m = ca(
        S,
        h.mode,
        z,
        U
      ), m.return = h, m) : (m = u(m, S), m.return = h, m);
    }
    function O(h, m, S) {
      if (typeof m == "string" && m !== "" || typeof m == "number" || typeof m == "bigint")
        return m = jc(
          "" + m,
          h.mode,
          S
        ), m.return = h, m;
      if (typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case Ol:
            return S = Xn(
              m.type,
              m.key,
              m.props,
              null,
              h.mode,
              S
            ), Ue(S, m), S.return = h, S;
          case ll:
            return m = Hc(
              m,
              h.mode,
              S
            ), m.return = h, m;
          case nt:
            return m = ma(m), O(h, m, S);
        }
        if (ot(m) || G(m))
          return m = ca(
            m,
            h.mode,
            S,
            null
          ), m.return = h, m;
        if (typeof m.then == "function")
          return O(h, In(m), S);
        if (m.$$typeof === Ct)
          return O(
            h,
            Jn(h, m),
            S
          );
        kn(h, m);
      }
      return null;
    }
    function v(h, m, S, z) {
      var U = m !== null ? m.key : null;
      if (typeof S == "string" && S !== "" || typeof S == "number" || typeof S == "bigint")
        return U !== null ? null : c(h, m, "" + S, z);
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case Ol:
            return S.key === U ? r(h, m, S, z) : null;
          case ll:
            return S.key === U ? g(h, m, S, z) : null;
          case nt:
            return S = ma(S), v(h, m, S, z);
        }
        if (ot(S) || G(S))
          return U !== null ? null : p(h, m, S, z, null);
        if (typeof S.then == "function")
          return v(
            h,
            m,
            In(S),
            z
          );
        if (S.$$typeof === Ct)
          return v(
            h,
            m,
            Jn(h, S),
            z
          );
        kn(h, S);
      }
      return null;
    }
    function b(h, m, S, z, U) {
      if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint")
        return h = h.get(S) || null, c(m, h, "" + z, U);
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case Ol:
            return h = h.get(
              z.key === null ? S : z.key
            ) || null, r(m, h, z, U);
          case ll:
            return h = h.get(
              z.key === null ? S : z.key
            ) || null, g(m, h, z, U);
          case nt:
            return z = ma(z), b(
              h,
              m,
              S,
              z,
              U
            );
        }
        if (ot(z) || G(z))
          return h = h.get(S) || null, p(m, h, z, U, null);
        if (typeof z.then == "function")
          return b(
            h,
            m,
            S,
            In(z),
            U
          );
        if (z.$$typeof === Ct)
          return b(
            h,
            m,
            S,
            Jn(m, z),
            U
          );
        kn(m, z);
      }
      return null;
    }
    function C(h, m, S, z) {
      for (var U = null, lt = null, Q = m, Z = m = 0, Ut = null; Q !== null && Z < S.length; Z++) {
        Q.index > Z ? (Ut = Q, Q = null) : Ut = Q.sibling;
        var et = v(
          h,
          Q,
          S[Z],
          z
        );
        if (et === null) {
          Q === null && (Q = Ut);
          break;
        }
        t && Q && et.alternate === null && l(h, Q), m = n(et, m, Z), lt === null ? U = et : lt.sibling = et, lt = et, Q = Ut;
      }
      if (Z === S.length)
        return e(h, Q), F && ye(h, Z), U;
      if (Q === null) {
        for (; Z < S.length; Z++)
          Q = O(h, S[Z], z), Q !== null && (m = n(
            Q,
            m,
            Z
          ), lt === null ? U = Q : lt.sibling = Q, lt = Q);
        return F && ye(h, Z), U;
      }
      for (Q = a(Q); Z < S.length; Z++)
        Ut = b(
          Q,
          h,
          Z,
          S[Z],
          z
        ), Ut !== null && (t && (et = Ut.alternate, et !== null && Q.delete(et.key === null ? Z : et.key)), m = n(
          Ut,
          m,
          Z
        ), lt === null ? U = Ut : lt.sibling = Ut, lt = Ut);
      return t && Q.forEach(function(ke) {
        return l(h, ke);
      }), F && ye(h, Z), U;
    }
    function j(h, m, S, z) {
      if (S == null) throw Error(o(151));
      for (var U = null, lt = null, Q = m, Z = m = 0, Ut = null, et = S.next(); Q !== null && !et.done; Z++, et = S.next()) {
        Q.index > Z ? (Ut = Q, Q = null) : Ut = Q.sibling;
        var ke = v(h, Q, et.value, z);
        if (ke === null) {
          Q === null && (Q = Ut);
          break;
        }
        t && Q && ke.alternate === null && l(h, Q), m = n(ke, m, Z), lt === null ? U = ke : lt.sibling = ke, lt = ke, Q = Ut;
      }
      if (et.done)
        return e(h, Q), F && ye(h, Z), U;
      if (Q === null) {
        for (; !et.done; Z++, et = S.next())
          et = O(h, et.value, z), et !== null && (m = n(et, m, Z), lt === null ? U = et : lt.sibling = et, lt = et);
        return F && ye(h, Z), U;
      }
      for (Q = a(Q); !et.done; Z++, et = S.next())
        et = b(Q, h, Z, et.value, z), et !== null && (t && (Ut = et.alternate, Ut !== null && Q.delete(
          Ut.key === null ? Z : Ut.key
        )), m = n(et, m, Z), lt === null ? U = et : lt.sibling = et, lt = et);
      return t && Q.forEach(function(Yh) {
        return l(h, Yh);
      }), F && ye(h, Z), U;
    }
    function W(h, m, S, z) {
      if (typeof S == "object" && S !== null && S.type === el && S.key === null && S.props.ref === void 0 && (S = S.props.children), typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case Ol:
            t: {
              for (var U = S.key; m !== null; ) {
                if (m.key === U) {
                  if (U = S.type, U === el) {
                    if (m.tag === 7) {
                      e(
                        h,
                        m.sibling
                      ), z = u(
                        m,
                        S.props.children
                      ), Ue(z, S), z.return = h, h = z;
                      break t;
                    }
                  } else if (m.elementType === U || typeof U == "object" && U !== null && U.$$typeof === nt && ma(U) === m.type) {
                    e(
                      h,
                      m.sibling
                    ), z = u(m, S.props), Ue(z, S), z.return = h, h = z;
                    break t;
                  }
                  e(h, m);
                  break;
                } else l(h, m);
                m = m.sibling;
              }
              S.type === el ? (z = ca(
                S.props.children,
                h.mode,
                z,
                S.key
              ), Ue(z, S), z.return = h, h = z) : (z = Xn(
                S.type,
                S.key,
                S.props,
                null,
                h.mode,
                z
              ), Ue(z, S), z.return = h, h = z);
            }
            return i(h);
          case ll:
            t: {
              for (U = S.key; m !== null; ) {
                if (m.key === U)
                  if (m.tag === 4 && m.stateNode.containerInfo === S.containerInfo && m.stateNode.implementation === S.implementation) {
                    e(
                      h,
                      m.sibling
                    ), z = u(m, S.children || []), z.return = h, h = z;
                    break t;
                  } else {
                    e(h, m);
                    break;
                  }
                else l(h, m);
                m = m.sibling;
              }
              z = Hc(S, h.mode, z), z.return = h, h = z;
            }
            return i(h);
          case nt:
            return S = ma(S), W(
              h,
              m,
              S,
              z
            );
        }
        if (ot(S))
          return C(
            h,
            m,
            S,
            z
          );
        if (G(S)) {
          if (U = G(S), typeof U != "function") throw Error(o(150));
          return S = U.call(S), j(
            h,
            m,
            S,
            z
          );
        }
        if (typeof S.then == "function")
          return W(
            h,
            m,
            In(S),
            z
          );
        if (S.$$typeof === Ct)
          return W(
            h,
            m,
            Jn(h, S),
            z
          );
        kn(h, S);
      }
      return typeof S == "string" && S !== "" || typeof S == "number" || typeof S == "bigint" ? (S = "" + S, m !== null && m.tag === 6 ? (e(h, m.sibling), z = u(m, S), z.return = h, h = z) : (e(h, m), z = jc(S, h.mode, z), z.return = h, h = z), i(h)) : e(h, m);
    }
    return function(h, m, S, z) {
      try {
        Yu = 0;
        var U = W(
          h,
          m,
          S,
          z
        );
        return Va = null, U;
      } catch (Q) {
        if (Q === Za || Q === $n) throw Q;
        var lt = ul(29, Q, null, h.mode);
        return lt.lanes = z, lt.return = h, lt;
      }
    };
  }
  var ha = ms(!0), vs = ms(!1), je = !1;
  function Kc(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function wc(t, l) {
    t = t.updateQueue, l.updateQueue === t && (l.updateQueue = {
      baseState: t.baseState,
      firstBaseUpdate: t.firstBaseUpdate,
      lastBaseUpdate: t.lastBaseUpdate,
      shared: t.shared,
      callbacks: null
    });
  }
  function He(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Be(t, l, e) {
    var a = t.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (rt & 2) !== 0) {
      var u = a.pending;
      return u === null ? l.next = l : (l.next = u.next, u.next = l), a.pending = l, l = Qn(t), kr(t, null, e), l;
    }
    return Gn(t, a, l, e), Qn(t);
  }
  function qu(t, l, e) {
    if (l = l.updateQueue, l !== null && (l = l.shared, (e & 4194048) !== 0)) {
      var a = l.lanes;
      a &= t.pendingLanes, e |= a, l.lanes = e, er(t, e);
    }
  }
  function Jc(t, l) {
    var e = t.updateQueue, a = t.alternate;
    if (a !== null && (a = a.updateQueue, e === a)) {
      var u = null, n = null;
      if (e = e.firstBaseUpdate, e !== null) {
        do {
          var i = {
            lane: e.lane,
            tag: e.tag,
            payload: e.payload,
            callback: null,
            next: null
          };
          n === null ? u = n = i : n = n.next = i, e = e.next;
        } while (e !== null);
        n === null ? u = n = l : n = n.next = l;
      } else u = n = l;
      e = {
        baseState: a.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: n,
        shared: a.shared,
        callbacks: a.callbacks
      }, t.updateQueue = e;
      return;
    }
    t = e.lastBaseUpdate, t === null ? e.firstBaseUpdate = l : t.next = l, e.lastBaseUpdate = l;
  }
  var Wc = !1;
  function Gu() {
    if (Wc) {
      var t = La;
      if (t !== null) throw t;
    }
  }
  function Qu(t, l, e, a) {
    Wc = !1;
    var u = t.updateQueue;
    je = !1;
    var n = u.firstBaseUpdate, i = u.lastBaseUpdate, c = u.shared.pending;
    if (c !== null) {
      u.shared.pending = null;
      var r = c, g = r.next;
      r.next = null, i === null ? n = g : i.next = g, i = r;
      var p = t.alternate;
      p !== null && (p = p.updateQueue, c = p.lastBaseUpdate, c !== i && (c === null ? p.firstBaseUpdate = g : c.next = g, p.lastBaseUpdate = r));
    }
    if (n !== null) {
      var O = u.baseState;
      i = 0, p = g = r = null, c = n;
      do {
        var v = c.lane & -536870913, b = v !== c.lane;
        if (b ? (tt & v) === v : (a & v) === v) {
          v !== 0 && v === da && (Wc = !0), p !== null && (p = p.next = {
            lane: 0,
            tag: c.tag,
            payload: c.payload,
            callback: null,
            next: null
          });
          t: {
            var C = t, j = c;
            v = l;
            var W = e;
            switch (j.tag) {
              case 1:
                if (C = j.payload, typeof C == "function") {
                  O = C.call(W, O, v);
                  break t;
                }
                O = C;
                break t;
              case 3:
                C.flags = C.flags & -65537 | 128;
              case 0:
                if (C = j.payload, v = typeof C == "function" ? C.call(W, O, v) : C, v == null) break t;
                O = $({}, O, v);
                break t;
              case 2:
                je = !0;
            }
          }
          v = c.callback, v !== null && (t.flags |= 64, b && (t.flags |= 8192), b = u.callbacks, b === null ? u.callbacks = [v] : b.push(v));
        } else
          b = {
            lane: v,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null
          }, p === null ? (g = p = b, r = O) : p = p.next = b, i |= v;
        if (c = c.next, c === null) {
          if (c = u.shared.pending, c === null)
            break;
          b = c, c = b.next, b.next = null, u.lastBaseUpdate = b, u.shared.pending = null;
        }
      } while (!0);
      p === null && (r = O), u.baseState = r, u.firstBaseUpdate = g, u.lastBaseUpdate = p, n === null && (u.shared.lanes = 0), Ze |= i, t.lanes = i, t.memoizedState = O;
    }
  }
  function hs(t, l) {
    if (typeof t != "function")
      throw Error(o(191, t));
    t.call(l);
  }
  function gs(t, l) {
    var e = t.callbacks;
    if (e !== null)
      for (t.callbacks = null, t = 0; t < e.length; t++)
        hs(e[t], l);
  }
  var Ye = Ll(null), Pn = Ll(0);
  function Ss(t, l) {
    t = pe, bt(Pn, t), bt(Ye, l), pe = t | l.baseLanes;
  }
  function $c() {
    bt(Pn, pe), bt(Ye, Ye.current);
  }
  function Fc() {
    pe = Pn.current, Gt(Ye), Gt(Pn);
  }
  var Lt = Ll(null), Wt = null;
  function qe(t) {
    var l = t.alternate;
    bt(Zt, Zt.current & 1), bt(Lt, t), Wt === null && (l === null || Ye.current !== null || l.memoizedState !== null) && (Wt = t);
  }
  function Ic(t) {
    bt(Zt, Zt.current), bt(Lt, t), Wt === null && (Wt = t);
  }
  function bs(t) {
    t.tag === 22 ? (bt(Zt, Zt.current), bt(Lt, t), Wt === null && (Wt = t)) : Ge();
  }
  function Ge() {
    bt(Zt, Zt.current), bt(Lt, Lt.current);
  }
  function hl(t) {
    Gt(Lt), Wt === t && (Wt = null), Gt(Zt);
  }
  var Zt = Ll(0);
  function Xu(t, l) {
    bt(Lt, Lt.current), bt(Zt, l);
  }
  function kc(t) {
    Gt(Zt), Gt(Lt), Wt === t && (Wt = null);
  }
  function ti(t) {
    for (var l = t; l !== null; ) {
      if (l.tag === 13) {
        var e = l.memoizedState;
        if (e !== null && (e = e.dehydrated, e === null || Eo(e) || zo(e)))
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
  var he = 0, J = null, gt = null, Rt = null, li = !1, Ka = !1, ga = !1, ei = 0, Lu = 0, wa = null, uv = 0;
  function Ot() {
    throw Error(o(321));
  }
  function Pc(t, l) {
    if (l === null) return !1;
    for (var e = 0; e < l.length && e < t.length; e++)
      if (!vl(t[e], l[e])) return !1;
    return !0;
  }
  function tf(t, l, e, a, u, n) {
    return he = n, J = l, l.memoizedState = null, l.updateQueue = null, l.lanes = 0, Y.H = t === null || t.memoizedState === null ? ed : ad, ga = !1, n = e(a, u), ga = !1, Ka && (n = Ts(
      l,
      e,
      a,
      u
    )), ps(t), n;
  }
  function ps(t) {
    Y.H = oi;
    var l = gt !== null && gt.next !== null;
    if (he = 0, Rt = gt = J = null, li = !1, Lu = 0, wa = null, l) throw Error(o(300));
    t === null || Dt || (t = t.dependencies, t !== null && wn(t) && (Dt = !0));
  }
  function Ts(t, l, e, a) {
    J = t;
    var u = 0;
    do {
      if (Ka && (wa = null), Lu = 0, Ka = !1, 25 <= u) throw Error(o(301));
      if (u += 1, Rt = gt = null, t.updateQueue != null) {
        var n = t.updateQueue;
        n.lastEffect = null, n.events = null, n.stores = null, n.memoCache != null && (n.memoCache.index = 0);
      }
      Y.H = dv, n = l(e, a);
    } while (Ka);
    return n;
  }
  function nv() {
    var t = Y.H, l = t.useState()[0];
    return l = typeof l.then == "function" ? Zu(l) : l, t = t.useState()[0], (gt !== null ? gt.memoizedState : null) !== t && (J.flags |= 1024), l;
  }
  function lf() {
    var t = ei !== 0;
    return ei = 0, t;
  }
  function ef(t, l, e) {
    l.updateQueue = t.updateQueue, l.flags &= -2053, t.lanes &= ~e;
  }
  function af(t) {
    if (li) {
      for (t = t.memoizedState; t !== null; ) {
        var l = t.queue;
        l !== null && (l.pending = null), t = t.next;
      }
      li = !1;
    }
    he = 0, Rt = gt = J = null, Ka = !1, Lu = ei = 0, wa = null;
  }
  function kt() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Rt === null ? J.memoizedState = Rt = t : Rt = Rt.next = t, Rt;
  }
  function xt() {
    if (gt === null) {
      var t = J.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = gt.next;
    var l = Rt === null ? J.memoizedState : Rt.next;
    if (l !== null)
      Rt = l, gt = t;
    else {
      if (t === null)
        throw J.alternate === null ? Error(o(467)) : Error(o(310));
      gt = t, t = {
        memoizedState: gt.memoizedState,
        baseState: gt.baseState,
        baseQueue: gt.baseQueue,
        queue: gt.queue,
        next: null
      }, Rt === null ? J.memoizedState = Rt = t : Rt = Rt.next = t;
    }
    return Rt;
  }
  function ai() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Zu(t) {
    var l = Lu;
    return Lu += 1, wa === null && (wa = []), t = ss(wa, t, l), l = J, (Rt === null ? l.memoizedState : Rt.next) === null && (l = l.alternate, Y.H = l === null || l.memoizedState === null ? ed : ad), t;
  }
  function ui(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return Zu(t);
      if (t.$$typeof === A) return;
      if (t.$$typeof === Ct) return Xt(t);
    }
    throw Error(o(438, String(t)));
  }
  function uf(t) {
    var l = null, e = J.updateQueue;
    if (e !== null && (l = e.memoCache), l == null) {
      var a = J.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (l = {
        data: a.data.map(function(u) {
          return u.slice();
        }),
        index: 0
      })));
    }
    if (l == null && (l = { data: [], index: 0 }), e === null && (e = ai(), J.updateQueue = e), e.memoCache = l, e = l.data[l.index], e === void 0)
      for (e = l.data[l.index] = Array(t), a = 0; a < t; a++)
        e[a] = ne;
    return l.index++, e;
  }
  function ge(t, l) {
    return typeof l == "function" ? l(t) : l;
  }
  function ni(t) {
    var l = xt();
    return nf(l, gt, t);
  }
  function nf(t, l, e) {
    var a = t.queue;
    if (a === null) throw Error(o(311));
    a.lastRenderedReducer = e;
    var u = t.baseQueue, n = a.pending;
    if (n !== null) {
      if (u !== null) {
        var i = u.next;
        u.next = n.next, n.next = i;
      }
      l.baseQueue = u = n, a.pending = null;
    }
    if (n = t.baseState, u === null) t.memoizedState = n;
    else {
      l = u.next;
      var c = i = null, r = null, g = l, p = !1;
      do {
        var O = g.lane & -536870913;
        if (O !== g.lane ? (tt & O) === O : (he & O) === O) {
          var v = g.revertLane;
          if (v === 0)
            r !== null && (r = r.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: g.action,
              hasEagerState: g.hasEagerState,
              eagerState: g.eagerState,
              next: null
            }), O === da && (p = !0);
          else if ((he & v) === v) {
            g = g.next, v === da && (p = !0);
            continue;
          } else
            O = {
              lane: 0,
              revertLane: g.revertLane,
              gesture: null,
              action: g.action,
              hasEagerState: g.hasEagerState,
              eagerState: g.eagerState,
              next: null
            }, r === null ? (c = r = O, i = n) : r = r.next = O, J.lanes |= v, Ze |= v;
          O = g.action, ga && e(n, O), n = g.hasEagerState ? g.eagerState : e(n, O);
        } else
          v = {
            lane: O,
            revertLane: g.revertLane,
            gesture: g.gesture,
            action: g.action,
            hasEagerState: g.hasEagerState,
            eagerState: g.eagerState,
            next: null
          }, r === null ? (c = r = v, i = n) : r = r.next = v, J.lanes |= O, Ze |= O;
        g = g.next;
      } while (g !== null && g !== l);
      if (r === null ? i = n : r.next = c, !vl(n, t.memoizedState) && (Dt = !0, p && (e = La, e !== null)))
        throw e;
      t.memoizedState = n, t.baseState = i, t.baseQueue = r, a.lastRenderedState = n;
    }
    return u === null && (a.lanes = 0), [t.memoizedState, a.dispatch];
  }
  function cf(t) {
    var l = xt(), e = l.queue;
    if (e === null) throw Error(o(311));
    e.lastRenderedReducer = t;
    var a = e.dispatch, u = e.pending, n = l.memoizedState;
    if (u !== null) {
      e.pending = null;
      var i = u = u.next;
      do
        n = t(n, i.action), i = i.next;
      while (i !== u);
      vl(n, l.memoizedState) || (Dt = !0), l.memoizedState = n, l.baseQueue === null && (l.baseState = n), e.lastRenderedState = n;
    }
    return [n, a];
  }
  function Es(t, l, e) {
    var a = J, u = xt(), n = F;
    if (n) {
      if (e === void 0) throw Error(o(407));
      e = e();
    } else e = l();
    var i = !vl(
      (gt || u).memoizedState,
      e
    );
    if (i && (u.memoizedState = e, Dt = !0), u = u.queue, rf(Ns.bind(null, a, u, t), [
      t
    ]), t = u.getSnapshot !== l || i || Rt !== null && (Rt.memoizedState.tag & 1) !== 0, Ja(
      t ? 9 : 8,
      { destroy: void 0 },
      Os.bind(null, a, u, e, l),
      null
    ), t) {
      if (a.flags |= 2048, St === null) throw Error(o(349));
      n || (he & 127) !== 0 || zs(a, l, e);
    }
    return e;
  }
  function zs(t, l, e) {
    t.flags |= 16384, t = { getSnapshot: l, value: e }, l = J.updateQueue, l === null ? (l = ai(), J.updateQueue = l, l.stores = [t]) : (e = l.stores, e === null ? l.stores = [t] : e.push(t));
  }
  function Os(t, l, e, a) {
    l.value = e, l.getSnapshot = a, As(l) && _s(t);
  }
  function Ns(t, l, e) {
    return e(function() {
      As(l) && _s(t);
    });
  }
  function As(t) {
    var l = t.getSnapshot;
    t = t.value;
    try {
      var e = l();
      return !vl(t, e);
    } catch {
      return !0;
    }
  }
  function _s(t) {
    var l = ia(t, 2);
    l !== null && fl(l, t, 2);
  }
  function ff(t) {
    var l = kt();
    if (typeof t == "function") {
      var e = t;
      if (t = e(), ga) {
        Ae(!0);
        try {
          e();
        } finally {
          Ae(!1);
        }
      }
    }
    return l.memoizedState = l.baseState = t, l.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ge,
      lastRenderedState: t
    }, l;
  }
  function xs(t, l, e, a) {
    return t.baseState = e, nf(
      t,
      gt,
      typeof a == "function" ? a : ge
    );
  }
  function iv(t, l, e, a, u) {
    if (fi(t)) throw Error(o(485));
    if (t = l.action, t !== null) {
      var n = {
        payload: u,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(i) {
          n.listeners.push(i);
        }
      };
      Y.T !== null ? e(!0) : n.isTransition = !1, a(n), e = l.pending, e === null ? (n.next = l.pending = n, Cs(l, n)) : (n.next = e.next, l.pending = e.next = n);
    }
  }
  function Cs(t, l) {
    var e = l.action, a = l.payload, u = t.state;
    if (l.isTransition) {
      var n = Y.T, i = {};
      i.types = n !== null ? n.types : null, Y.T = i;
      try {
        var c = e(u, a), r = Y.S;
        r !== null && r(i, c), Ms(t, l, c);
      } catch (g) {
        of(t, l, g);
      } finally {
        n !== null && i.types !== null && (n.types = i.types), Y.T = n;
      }
    } else
      try {
        n = e(u, a), Ms(t, l, n);
      } catch (g) {
        of(t, l, g);
      }
  }
  function Ms(t, l, e) {
    e !== null && typeof e == "object" && typeof e.then == "function" ? e.then(
      function(a) {
        Rs(t, l, a);
      },
      function(a) {
        return of(t, l, a);
      }
    ) : Rs(t, l, e);
  }
  function Rs(t, l, e) {
    l.status = "fulfilled", l.value = e, Ds(l), t.state = e, l = t.pending, l !== null && (e = l.next, e === l ? t.pending = null : (e = e.next, l.next = e, Cs(t, e)));
  }
  function of(t, l, e) {
    var a = t.pending;
    if (t.pending = null, a !== null) {
      a = a.next;
      do
        l.status = "rejected", l.reason = e, Ds(l), l = l.next;
      while (l !== a);
    }
    t.action = null;
  }
  function Ds(t) {
    t = t.listeners;
    for (var l = 0; l < t.length; l++) (0, t[l])();
  }
  function Us(t, l) {
    return l;
  }
  function js(t, l) {
    if (F) {
      var e = St.formState;
      if (e !== null) {
        t: {
          var a = J;
          if (F) {
            if (pt) {
              l: {
                for (var u = pt, n = Rl; u.nodeType !== 8; ) {
                  if (!n) {
                    u = null;
                    break l;
                  }
                  if (u = Ul(
                    u.nextSibling
                  ), u === null) {
                    u = null;
                    break l;
                  }
                }
                n = u.data, u = n === "F!" || n === "F" ? u : null;
              }
              if (u) {
                pt = Ul(
                  u.nextSibling
                ), a = u.data === "F!";
                break t;
              }
            }
            Re(a);
          }
          a = !1;
        }
        a && (l = e[0]);
      }
    }
    return e = kt(), e.memoizedState = e.baseState = l, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Us,
      lastRenderedState: l
    }, e.queue = a, e = Ps.bind(
      null,
      J,
      a
    ), a.dispatch = e, a = ff(!1), n = vf.bind(
      null,
      J,
      !1,
      a.queue
    ), a = kt(), u = {
      state: l,
      dispatch: null,
      action: t,
      pending: null
    }, a.queue = u, e = iv.bind(
      null,
      J,
      u,
      n,
      e
    ), u.dispatch = e, a.memoizedState = t, [l, e, !1];
  }
  function Hs(t) {
    var l = xt();
    return Bs(l, gt, t);
  }
  function Bs(t, l, e) {
    if (l = nf(
      t,
      l,
      Us
    )[0], t = ni(ge)[0], typeof l == "object" && l !== null && typeof l.then == "function")
      try {
        var a = Zu(l);
      } catch (i) {
        throw i === Za ? $n : i;
      }
    else a = l;
    l = xt();
    var u = l.queue, n = u.dispatch;
    return e !== l.memoizedState && (J.flags |= 2048, Ja(
      9,
      { destroy: void 0 },
      cv.bind(null, u, e),
      null
    )), [a, n, t];
  }
  function cv(t, l) {
    t.action = l;
  }
  function Ys(t) {
    var l = xt(), e = gt;
    if (e !== null)
      return Bs(l, e, t);
    xt(), l = l.memoizedState, e = xt();
    var a = e.queue.dispatch;
    return e.memoizedState = t, [l, a, !1];
  }
  function Ja(t, l, e, a) {
    return t = { tag: t, create: e, deps: a, inst: l, next: null }, l = J.updateQueue, l === null && (l = ai(), J.updateQueue = l), e = l.lastEffect, e === null ? l.lastEffect = t.next = t : (a = e.next, e.next = t, t.next = a, l.lastEffect = t), t;
  }
  function qs() {
    return xt().memoizedState;
  }
  function ii(t, l, e, a) {
    var u = kt();
    J.flags |= t, u.memoizedState = Ja(
      1 | l,
      { destroy: void 0 },
      e,
      a === void 0 ? null : a
    );
  }
  function ci(t, l, e, a) {
    var u = xt();
    a = a === void 0 ? null : a;
    var n = u.memoizedState.inst;
    gt !== null && a !== null && Pc(a, gt.memoizedState.deps) ? u.memoizedState = Ja(l, n, e, a) : (J.flags |= t, u.memoizedState = Ja(
      1 | l,
      n,
      e,
      a
    ));
  }
  function Gs(t, l) {
    ii(8390656, 8, t, l);
  }
  function rf(t, l) {
    ci(2048, 8, t, l);
  }
  function fv(t) {
    J.flags |= 4;
    var l = J.updateQueue;
    if (l === null)
      l = ai(), J.updateQueue = l, l.events = [t];
    else {
      var e = l.events;
      e === null ? l.events = [t] : e.push(t);
    }
  }
  function Qs(t) {
    var l = xt().memoizedState;
    return fv({ ref: l, nextImpl: t }), function() {
      if ((rt & 2) !== 0) throw Error(o(440));
      return l.impl.apply(void 0, arguments);
    };
  }
  function Xs(t, l) {
    return ci(4, 2, t, l);
  }
  function Ls(t, l) {
    return ci(4, 4, t, l);
  }
  function Zs(t, l) {
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
  function Vs(t, l, e) {
    e = e != null ? e.concat([t]) : null, ci(4, 4, Zs.bind(null, l, t), e);
  }
  function sf() {
  }
  function Ks(t, l) {
    var e = xt();
    l = l === void 0 ? null : l;
    var a = e.memoizedState;
    return l !== null && Pc(l, a[1]) ? a[0] : (e.memoizedState = [t, l], t);
  }
  function ws(t, l) {
    var e = xt();
    l = l === void 0 ? null : l;
    var a = e.memoizedState;
    if (l !== null && Pc(l, a[1]))
      return a[0];
    if (a = t(), ga) {
      Ae(!0);
      try {
        t();
      } finally {
        Ae(!1);
      }
    }
    return e.memoizedState = [a, l], a;
  }
  function df(t, l, e) {
    return e === void 0 || (he & 1073741824) !== 0 && (tt & 261930) === 0 ? t.memoizedState = l : (t.memoizedState = e, t = ey(), J.lanes |= t, Ze |= t, e);
  }
  function Js(t, l, e, a) {
    return vl(e, l) ? e : Ye.current !== null ? (t = df(t, e, a), vl(t, l) || (Dt = !0), t) : (he & 106) === 0 || (he & 1073741824) !== 0 && (tt & 261930) === 0 ? (Dt = !0, t.memoizedState = e) : (t = ey(), J.lanes |= t, Ze |= t, l);
  }
  function Ws(t, l, e, a, u) {
    var n = K.p;
    K.p = n !== 0 && 8 > n ? n : 8;
    var i = Y.T, c = {};
    c.types = i !== null ? i.types : null, Y.T = c, vf(t, !1, l, e);
    try {
      var r = u(), g = Y.S;
      if (g !== null && g(c, r), r !== null && typeof r == "object" && typeof r.then == "function") {
        var p = av(
          r,
          a
        );
        Vu(
          t,
          l,
          p,
          pl(t)
        );
      } else
        Vu(
          t,
          l,
          a,
          pl(t)
        );
    } catch (O) {
      Vu(
        t,
        l,
        { then: function() {
        }, status: "rejected", reason: O },
        pl()
      );
    } finally {
      K.p = n, i !== null && c.types !== null && (i.types = c.types), Y.T = i;
    }
  }
  function ov() {
  }
  function yf(t, l, e, a) {
    if (t.tag !== 5) throw Error(o(476));
    var u = $s(t).queue;
    Ws(
      t,
      u,
      l,
      ie,
      e === null ? ov : function() {
        return Fs(t), e(a);
      }
    );
  }
  function $s(t) {
    var l = t.memoizedState;
    if (l !== null) return l;
    l = {
      memoizedState: ie,
      baseState: ie,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ge,
        lastRenderedState: ie
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
        lastRenderedReducer: ge,
        lastRenderedState: e
      },
      next: null
    }, t.memoizedState = l, t = t.alternate, t !== null && (t.memoizedState = l), l;
  }
  function Fs(t) {
    var l = $s(t);
    l.next === null && (l = t.alternate.memoizedState), Vu(
      t,
      l.next.queue,
      {},
      pl()
    );
  }
  function mf() {
    return Xt(du);
  }
  function Is() {
    return xt().memoizedState;
  }
  function ks() {
    return xt().memoizedState;
  }
  function rv(t) {
    for (var l = t.return; l !== null; ) {
      switch (l.tag) {
        case 24:
        case 3:
          var e = pl();
          t = He(e);
          var a = Be(l, t, e);
          a !== null && (fl(a, l, e), qu(a, l, e)), l = { cache: Xc() }, t.payload = l;
          return;
      }
      l = l.return;
    }
  }
  function sv(t, l, e) {
    var a = pl();
    e = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, fi(t) ? td(l, e) : (e = Dc(t, l, e, a), e !== null && (fl(e, t, a), ld(e, l, a)));
  }
  function Ps(t, l, e) {
    var a = pl();
    Vu(t, l, e, a);
  }
  function Vu(t, l, e, a) {
    var u = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (fi(t)) td(l, u);
    else {
      var n = t.alternate;
      if (t.lanes === 0 && (n === null || n.lanes === 0) && (n = l.lastRenderedReducer, n !== null))
        try {
          var i = l.lastRenderedState, c = n(i, e);
          if (u.hasEagerState = !0, u.eagerState = c, vl(c, i))
            return Gn(t, l, u, 0), St === null && qn(), !1;
        } catch {
        }
      if (e = Dc(t, l, u, a), e !== null)
        return fl(e, t, a), ld(e, l, a), !0;
    }
    return !1;
  }
  function vf(t, l, e, a) {
    if (a = {
      lane: 2,
      revertLane: no(),
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, fi(t)) {
      if (l) throw Error(o(479));
    } else
      l = Dc(
        t,
        e,
        a,
        2
      ), l !== null && fl(l, t, 2);
  }
  function fi(t) {
    var l = t.alternate;
    return t === J || l !== null && l === J;
  }
  function td(t, l) {
    Ka = li = !0;
    var e = t.pending;
    e === null ? l.next = l : (l.next = e.next, e.next = l), t.pending = l;
  }
  function ld(t, l, e) {
    if ((e & 4194048) !== 0) {
      var a = l.lanes;
      a &= t.pendingLanes, e |= a, l.lanes = e, er(t, e);
    }
  }
  var oi = {
    readContext: Xt,
    use: ui,
    useCallback: Ot,
    useContext: Ot,
    useEffect: Ot,
    useImperativeHandle: Ot,
    useLayoutEffect: Ot,
    useInsertionEffect: Ot,
    useMemo: Ot,
    useReducer: Ot,
    useRef: Ot,
    useState: Ot,
    useDebugValue: Ot,
    useDeferredValue: Ot,
    useTransition: Ot,
    useSyncExternalStore: Ot,
    useId: Ot,
    useHostTransitionStatus: Ot,
    useFormState: Ot,
    useActionState: Ot,
    useOptimistic: Ot,
    useMemoCache: Ot,
    useCacheRefresh: Ot,
    useEffectEvent: Ot
  }, ed = {
    readContext: Xt,
    use: ui,
    useCallback: function(t, l) {
      return kt().memoizedState = [
        t,
        l === void 0 ? null : l
      ], t;
    },
    useContext: Xt,
    useEffect: Gs,
    useImperativeHandle: function(t, l, e) {
      e = e != null ? e.concat([t]) : null, ii(
        4194308,
        4,
        Zs.bind(null, l, t),
        e
      );
    },
    useLayoutEffect: function(t, l) {
      return ii(4194308, 4, t, l);
    },
    useInsertionEffect: function(t, l) {
      ii(4, 2, t, l);
    },
    useMemo: function(t, l) {
      var e = kt();
      l = l === void 0 ? null : l;
      var a = t();
      if (ga) {
        Ae(!0);
        try {
          t();
        } finally {
          Ae(!1);
        }
      }
      return e.memoizedState = [a, l], a;
    },
    useReducer: function(t, l, e) {
      var a = kt();
      if (e !== void 0) {
        var u = e(l);
        if (ga) {
          Ae(!0);
          try {
            e(l);
          } finally {
            Ae(!1);
          }
        }
      } else u = l;
      return a.memoizedState = a.baseState = u, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: u
      }, a.queue = t, t = t.dispatch = sv.bind(
        null,
        J,
        t
      ), [a.memoizedState, t];
    },
    useRef: function(t) {
      var l = kt();
      return t = { current: t }, l.memoizedState = t;
    },
    useState: function(t) {
      t = ff(t);
      var l = t.queue, e = Ps.bind(null, J, l);
      return l.dispatch = e, [t.memoizedState, e];
    },
    useDebugValue: sf,
    useDeferredValue: function(t, l) {
      var e = kt();
      return df(e, t, l);
    },
    useTransition: function() {
      var t = ff(!1);
      return t = Ws.bind(
        null,
        J,
        t.queue,
        !0,
        !1
      ), kt().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, l, e) {
      var a = J, u = kt();
      if (F) {
        if (e === void 0)
          throw Error(o(407));
        e = e();
      } else {
        if (e = l(), St === null)
          throw Error(o(349));
        (tt & 127) !== 0 || zs(a, l, e);
      }
      u.memoizedState = e;
      var n = { value: e, getSnapshot: l };
      return u.queue = n, Gs(Ns.bind(null, a, n, t), [
        t
      ]), a.flags |= 2048, Ja(
        9,
        { destroy: void 0 },
        Os.bind(
          null,
          a,
          n,
          e,
          l
        ),
        null
      ), e;
    },
    useId: function() {
      var t = kt(), l = St.identifierPrefix;
      if (F) {
        var e = wl, a = Kl;
        e = (a & ~(1 << 32 - yl(a) - 1)).toString(32) + e, l = "_" + l + "R_" + e, e = ei++, 0 < e && (l += "H" + e.toString(32)), l += "_";
      } else
        e = uv++, l = "_" + l + "r_" + e.toString(32) + "_";
      return t.memoizedState = l;
    },
    useHostTransitionStatus: mf,
    useFormState: js,
    useActionState: js,
    useOptimistic: function(t) {
      var l = kt();
      l.memoizedState = l.baseState = t;
      var e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return l.queue = e, l = vf.bind(
        null,
        J,
        !0,
        e
      ), e.dispatch = l, [t, l];
    },
    useMemoCache: uf,
    useCacheRefresh: function() {
      return kt().memoizedState = rv.bind(
        null,
        J
      );
    },
    useEffectEvent: function(t) {
      var l = kt(), e = { impl: t };
      return l.memoizedState = e, function() {
        if ((rt & 2) !== 0)
          throw Error(o(440));
        return e.impl.apply(void 0, arguments);
      };
    }
  }, ad = {
    readContext: Xt,
    use: ui,
    useCallback: Ks,
    useContext: Xt,
    useEffect: rf,
    useImperativeHandle: Vs,
    useInsertionEffect: Xs,
    useLayoutEffect: Ls,
    useMemo: ws,
    useReducer: ni,
    useRef: qs,
    useState: function() {
      return ni(ge);
    },
    useDebugValue: sf,
    useDeferredValue: function(t, l) {
      var e = xt();
      return Js(
        e,
        gt.memoizedState,
        t,
        l
      );
    },
    useTransition: function() {
      var t = ni(ge)[0], l = xt().memoizedState;
      return [
        typeof t == "boolean" ? t : Zu(t),
        l
      ];
    },
    useSyncExternalStore: Es,
    useId: Is,
    useHostTransitionStatus: mf,
    useFormState: Hs,
    useActionState: Hs,
    useOptimistic: function(t, l) {
      var e = xt();
      return xs(e, gt, t, l);
    },
    useMemoCache: uf,
    useCacheRefresh: ks,
    useEffectEvent: Qs
  }, dv = {
    readContext: Xt,
    use: ui,
    useCallback: Ks,
    useContext: Xt,
    useEffect: rf,
    useImperativeHandle: Vs,
    useInsertionEffect: Xs,
    useLayoutEffect: Ls,
    useMemo: ws,
    useReducer: cf,
    useRef: qs,
    useState: function() {
      return cf(ge);
    },
    useDebugValue: sf,
    useDeferredValue: function(t, l) {
      var e = xt();
      return gt === null ? df(e, t, l) : Js(
        e,
        gt.memoizedState,
        t,
        l
      );
    },
    useTransition: function() {
      var t = cf(ge)[0], l = xt().memoizedState;
      return [
        typeof t == "boolean" ? t : Zu(t),
        l
      ];
    },
    useSyncExternalStore: Es,
    useId: Is,
    useHostTransitionStatus: mf,
    useFormState: Ys,
    useActionState: Ys,
    useOptimistic: function(t, l) {
      var e = xt();
      return gt !== null ? xs(e, gt, t, l) : (e.baseState = t, [t, e.queue.dispatch]);
    },
    useMemoCache: uf,
    useCacheRefresh: ks,
    useEffectEvent: Qs
  };
  function hf(t, l, e, a) {
    l = t.memoizedState, e = e(a, l), e = e == null ? l : $({}, l, e), t.memoizedState = e, t.lanes === 0 && (t.updateQueue.baseState = e);
  }
  var gf = {
    enqueueSetState: function(t, l, e) {
      t = t._reactInternals;
      var a = pl(), u = He(a);
      u.payload = l, e != null && (u.callback = e), l = Be(t, u, a), l !== null && (fl(l, t, a), qu(l, t, a));
    },
    enqueueReplaceState: function(t, l, e) {
      t = t._reactInternals;
      var a = pl(), u = He(a);
      u.tag = 1, u.payload = l, e != null && (u.callback = e), l = Be(t, u, a), l !== null && (fl(l, t, a), qu(l, t, a));
    },
    enqueueForceUpdate: function(t, l) {
      t = t._reactInternals;
      var e = pl(), a = He(e);
      a.tag = 2, l != null && (a.callback = l), l = Be(t, a, e), l !== null && (fl(l, t, e), qu(l, t, e));
    }
  };
  function ud(t, l, e, a, u, n, i) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(a, n, i) : l.prototype && l.prototype.isPureReactComponent ? !Mu(e, a) || !Mu(u, n) : !0;
  }
  function nd(t, l, e, a) {
    t = l.state, typeof l.componentWillReceiveProps == "function" && l.componentWillReceiveProps(e, a), typeof l.UNSAFE_componentWillReceiveProps == "function" && l.UNSAFE_componentWillReceiveProps(e, a), l.state !== t && gf.enqueueReplaceState(l, l.state, null);
  }
  function Sa(t, l) {
    var e = l;
    if ("ref" in l) {
      e = {};
      for (var a in l)
        a !== "ref" && (e[a] = l[a]);
    }
    if (t = t.defaultProps) {
      e === l && (e = $({}, e));
      for (var u in t)
        e[u] === void 0 && (e[u] = t[u]);
    }
    return e;
  }
  function id(t) {
    Yn(t);
  }
  function cd(t) {
    console.error(t);
  }
  function fd(t) {
    Yn(t);
  }
  function ri(t, l) {
    try {
      var e = t.onUncaughtError;
      e(l.value, { componentStack: l.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function od(t, l, e) {
    try {
      var a = t.onCaughtError;
      a(e.value, {
        componentStack: e.stack,
        errorBoundary: l.tag === 1 ? l.stateNode : null
      });
    } catch (u) {
      setTimeout(function() {
        throw u;
      });
    }
  }
  function Sf(t, l, e) {
    return e = He(e), e.tag = 3, e.payload = { element: null }, e.callback = function() {
      ri(t, l);
    }, e;
  }
  function rd(t) {
    return t = He(t), t.tag = 3, t;
  }
  function sd(t, l, e, a) {
    var u = e.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var n = a.value;
      t.payload = function() {
        return u(n);
      }, t.callback = function() {
        od(l, e, a);
      };
    }
    var i = e.stateNode;
    i !== null && typeof i.componentDidCatch == "function" && (t.callback = function() {
      od(l, e, a), typeof u != "function" && (Ve === null ? Ve = /* @__PURE__ */ new Set([this]) : Ve.add(this));
      var c = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: c !== null ? c : ""
      });
    });
  }
  function yv(t, l, e, a, u) {
    if (e.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (l = e.alternate, l !== null && ra(
        l,
        e,
        u,
        !0
      ), e = Lt.current, e !== null) {
        switch (e.tag) {
          case 31:
          case 13:
          case 19:
            return Wt === null ? Ri() : e.alternate === null && Nt === 0 && (Nt = 3), e.flags &= -257, e.flags |= 65536, e.lanes = u, a === Fn ? e.flags |= 16384 : (l = e.updateQueue, l === null ? e.updateQueue = /* @__PURE__ */ new Set([a]) : l.add(a), eo(t, a, u)), !1;
          case 22:
            return e.flags |= 65536, a === Fn ? e.flags |= 16384 : (l = e.updateQueue, l === null ? (l = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, e.updateQueue = l) : (e = l.retryQueue, e === null ? l.retryQueue = /* @__PURE__ */ new Set([a]) : e.add(a)), eo(t, a, u)), !1;
        }
        throw Error(o(435, e.tag));
      }
      return eo(t, a, u), Ri(), !1;
    }
    if (F)
      return l = Lt.current, l !== null ? ((l.flags & 65536) === 0 && (l.flags |= 256), l.flags |= 65536, l.lanes = u, a !== Yc && (t = Error(o(422), { cause: a }), Uu(xl(t, e)))) : (a !== Yc && (l = Error(o(423), {
        cause: a
      }), Uu(
        xl(l, e)
      )), t = t.current.alternate, t.flags |= 65536, u &= -u, t.lanes |= u, a = xl(a, e), u = Sf(
        t.stateNode,
        a,
        u
      ), Jc(t, u), Nt !== 4 && (Nt = 2)), !1;
    var n = Error(o(520), { cause: a });
    if (n = xl(n, e), ku === null ? ku = [n] : ku.push(n), Nt !== 4 && (Nt = 2), l === null) return !0;
    a = xl(a, e), e = l;
    do {
      switch (e.tag) {
        case 3:
          return e.flags |= 65536, t = u & -u, e.lanes |= t, t = Sf(e.stateNode, a, t), Jc(e, t), !1;
        case 1:
          if (l = e.type, n = e.stateNode, (e.flags & 128) === 0 && (typeof l.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (Ve === null || !Ve.has(n))))
            return e.flags |= 65536, u &= -u, e.lanes |= u, u = rd(u), sd(
              u,
              t,
              e,
              a
            ), Jc(e, u), !1;
          break;
        case 22:
          if (e.memoizedState !== null)
            return e.flags |= 65536, !1;
      }
      e = e.return;
    } while (e !== null);
    return !1;
  }
  var bf = Error(o(461)), Dt = !1;
  function jt(t, l, e, a) {
    l.child = t === null ? vs(l, null, e, a) : ha(
      l,
      t.child,
      e,
      a
    );
  }
  function dd(t, l, e, a, u) {
    e = e.render;
    var n = l.ref;
    if ("ref" in a) {
      var i = {};
      for (var c in a)
        c !== "ref" && (i[c] = a[c]);
    } else i = a;
    return sa(l), a = tf(
      t,
      l,
      e,
      i,
      n,
      u
    ), c = lf(), t !== null && !Dt ? (ef(t, l, u), Se(t, l, u)) : (F && c && Zn(l), l.flags |= 1, jt(t, l, a, u), l.child);
  }
  function yd(t, l, e, a, u) {
    if (t === null) {
      var n = e.type;
      return typeof n == "function" && !Uc(n) && n.defaultProps === void 0 && e.compare === null ? (l.tag = 15, l.type = n, md(
        t,
        l,
        n,
        a,
        u
      )) : (t = Xn(
        e.type,
        null,
        a,
        l,
        l.mode,
        u
      ), t.ref = l.ref, t.return = l, l.child = t);
    }
    if (n = t.child, !_f(t, u)) {
      var i = n.memoizedProps;
      if (e = e.compare, e = e !== null ? e : Mu, e(i, a) && t.ref === l.ref)
        return Se(t, l, u);
    }
    return l.flags |= 1, t = de(n, a), t.ref = l.ref, t.return = l, l.child = t;
  }
  function md(t, l, e, a, u) {
    if (t !== null) {
      var n = t.memoizedProps;
      if (Mu(n, a) && t.ref === l.ref)
        if (Dt = !1, l.pendingProps = a = n, _f(t, u))
          (t.flags & 131072) !== 0 && (Dt = !0);
        else
          return l.lanes = t.lanes, Se(t, l, u);
    }
    return pf(
      t,
      l,
      e,
      a,
      u
    );
  }
  function vd(t, l, e, a) {
    var u = a.children, n = t !== null ? t.memoizedState : null;
    if (t === null && l.stateNode === null && (l.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), a.mode === "hidden") {
      if ((l.flags & 128) !== 0) {
        if (n = n !== null ? n.baseLanes | e : e, t !== null) {
          for (a = l.child = t.child, u = 0; a !== null; )
            u = u | a.lanes | a.childLanes, a = a.sibling;
          a = u & ~n;
        } else a = 0, l.child = null;
        return hd(
          t,
          l,
          n,
          e,
          a
        );
      }
      if ((e & 536870912) !== 0)
        l.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && Wn(
          l,
          n !== null ? n.cachePool : null
        ), n !== null ? Ss(l, n) : $c(), bs(l);
      else
        return a = l.lanes = 536870912, hd(
          t,
          l,
          n !== null ? n.baseLanes | e : e,
          e,
          a
        );
    } else
      n !== null ? (Wn(l, n.cachePool), Ss(l, n), Ge(), l.memoizedState = null) : (t !== null && Wn(l, null), $c(), Ge());
    return jt(t, l, u, e), l.child;
  }
  function Ku(t, l) {
    return t !== null && t.tag === 22 || l.stateNode !== null || (l.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), l.sibling;
  }
  function hd(t, l, e, a, u) {
    var n = Zc();
    return n = n === null ? null : { parent: Mt._currentValue, pool: n }, l.memoizedState = {
      baseLanes: e,
      cachePool: n
    }, t !== null && Wn(l, null), $c(), bs(l), t !== null && ra(t, l, a, !0), l.childLanes = u, null;
  }
  function si(t, l) {
    return l = di(
      { mode: l.mode, children: l.children },
      t.mode
    ), l.ref = t.ref, t.child = l, l.return = t, l;
  }
  function gd(t, l, e) {
    return ha(l, t.child, null, e), t = si(l, l.pendingProps), t.flags |= 2, hl(l), l.memoizedState = null, t;
  }
  function mv(t, l, e) {
    var a = l.pendingProps, u = (l.flags & 128) !== 0;
    if (l.flags &= -129, t === null) {
      if (F) {
        if (a.mode === "hidden")
          return t = si(l, a), l.lanes = 536870912, t.memoizedState = { baseLanes: 0, cachePool: null }, Ku(null, t);
        if (Ic(l), (t = pt) ? (t = Zy(
          t,
          Rl
        ), t = t !== null && t.data === "&" ? t : null, t !== null && (l.memoizedState = {
          dehydrated: t,
          treeContext: Ce !== null ? { id: Kl, overflow: wl } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, e = ts(t), e.return = l, l.child = e, Bt = l, pt = null)) : t = null, t === null) throw Re(l);
        return l.lanes = 536870912, null;
      }
      return si(l, a);
    }
    var n = t.memoizedState;
    if (n !== null) {
      var i = n.dehydrated;
      if (Ic(l), u)
        if (l.flags & 256)
          l.flags &= -257, l = gd(
            t,
            l,
            e
          );
        else if (l.memoizedState !== null)
          l.child = t.child, l.flags |= 128, l = null;
        else throw Error(o(558));
      else if (Dt || ra(t, l, e, !1), u = (e & t.childLanes) !== 0, Dt || u) {
        if (Ye.current === null) {
          if (a = St, a !== null && (i = ar(a, e), i !== 0 && i !== n.retryLane))
            throw n.retryLane = i, ia(t, i), fl(a, t, i), bf;
          Ri();
        }
        l = gd(
          t,
          l,
          e
        );
      } else
        t = n.treeContext, pt = Ul(i.nextSibling), Bt = l, F = !0, Me = null, Rl = !1, t !== null && as(l, t), l = si(l, a), l.flags |= 134221824;
      return l;
    }
    return t = de(t.child, {
      mode: a.mode,
      children: a.children
    }), t.ref = l.ref, l.child = t, t.return = l, t;
  }
  function Wa(t, l) {
    var e = l.ref;
    if (e === null)
      t !== null && t.ref !== null && (l.flags |= 4194816);
    else {
      if (typeof e != "function" && typeof e != "object")
        throw Error(o(284));
      (t === null || t.ref !== e) && (l.flags |= 4194816);
    }
  }
  function pf(t, l, e, a, u) {
    return sa(l), e = tf(
      t,
      l,
      e,
      a,
      void 0,
      u
    ), a = lf(), t !== null && !Dt ? (ef(t, l, u), Se(t, l, u)) : (F && a && Zn(l), l.flags |= 1, jt(t, l, e, u), l.child);
  }
  function Sd(t, l, e, a, u, n) {
    return sa(l), l.updateQueue = null, e = Ts(
      l,
      a,
      e,
      u
    ), ps(t), a = lf(), t !== null && !Dt ? (ef(t, l, n), Se(t, l, n)) : (F && a && Zn(l), l.flags |= 1, jt(t, l, e, n), l.child);
  }
  function bd(t, l, e, a, u) {
    if (sa(l), l.stateNode === null) {
      var n = qa, i = e.contextType;
      typeof i == "object" && i !== null && (n = Xt(i)), n = new e(a, n), l.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = gf, l.stateNode = n, n._reactInternals = l, n = l.stateNode, n.props = a, n.state = l.memoizedState, n.refs = {}, Kc(l), i = e.contextType, n.context = typeof i == "object" && i !== null ? Xt(i) : qa, n.state = l.memoizedState, i = e.getDerivedStateFromProps, typeof i == "function" && (hf(
        l,
        e,
        i,
        a
      ), n.state = l.memoizedState), typeof e.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (i = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), i !== n.state && gf.enqueueReplaceState(n, n.state, null), Qu(l, a, n, u), Gu(), n.state = l.memoizedState), typeof n.componentDidMount == "function" && (l.flags |= 4194308), a = !0;
    } else if (t === null) {
      n = l.stateNode;
      var c = l.memoizedProps, r = Sa(e, c);
      n.props = r;
      var g = n.context, p = e.contextType;
      i = qa, typeof p == "object" && p !== null && (i = Xt(p));
      var O = e.getDerivedStateFromProps;
      p = typeof O == "function" || typeof n.getSnapshotBeforeUpdate == "function", c = l.pendingProps !== c, p || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (c || g !== i) && nd(
        l,
        n,
        a,
        i
      ), je = !1;
      var v = l.memoizedState;
      n.state = v, Qu(l, a, n, u), Gu(), g = l.memoizedState, c || v !== g || je ? (typeof O == "function" && (hf(
        l,
        e,
        O,
        a
      ), g = l.memoizedState), (r = je || ud(
        l,
        e,
        r,
        a,
        v,
        g,
        i
      )) ? (p || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (l.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (l.flags |= 4194308), l.memoizedProps = a, l.memoizedState = g), n.props = a, n.state = g, n.context = i, a = r) : (typeof n.componentDidMount == "function" && (l.flags |= 4194308), a = !1);
    } else {
      n = l.stateNode, wc(t, l), i = l.memoizedProps, p = Sa(e, i), n.props = p, O = l.pendingProps, v = n.context, g = e.contextType, r = qa, typeof g == "object" && g !== null && (r = Xt(g)), c = e.getDerivedStateFromProps, (g = typeof c == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (i !== O || v !== r) && nd(
        l,
        n,
        a,
        r
      ), je = !1, v = l.memoizedState, n.state = v, Qu(l, a, n, u), Gu();
      var b = l.memoizedState;
      i !== O || v !== b || je || t !== null && t.dependencies !== null && wn(t.dependencies) ? (typeof c == "function" && (hf(
        l,
        e,
        c,
        a
      ), b = l.memoizedState), (p = je || ud(
        l,
        e,
        p,
        a,
        v,
        b,
        r
      ) || t !== null && t.dependencies !== null && wn(t.dependencies)) ? (g || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(a, b, r), typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(
        a,
        b,
        r
      )), typeof n.componentDidUpdate == "function" && (l.flags |= 4), typeof n.getSnapshotBeforeUpdate == "function" && (l.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || i === t.memoizedProps && v === t.memoizedState || (l.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || i === t.memoizedProps && v === t.memoizedState || (l.flags |= 1024), l.memoizedProps = a, l.memoizedState = b), n.props = a, n.state = b, n.context = r, a = p) : (typeof n.componentDidUpdate != "function" || i === t.memoizedProps && v === t.memoizedState || (l.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || i === t.memoizedProps && v === t.memoizedState || (l.flags |= 1024), a = !1);
    }
    return n = a, Wa(t, l), a = (l.flags & 128) !== 0, n || a ? (n = l.stateNode, e = a && typeof e.getDerivedStateFromError != "function" ? null : n.render(), l.flags |= 1, t !== null && a ? (l.child = ha(
      l,
      t.child,
      null,
      u
    ), l.child = ha(
      l,
      null,
      e,
      u
    )) : jt(t, l, e, u), l.memoizedState = n.state, t = l.child) : t = Se(
      t,
      l,
      u
    ), t;
  }
  function pd(t, l, e, a) {
    return fa(), l.flags |= 256, jt(t, l, e, a), l.child;
  }
  var Tf = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Ef(t) {
    return { baseLanes: t, cachePool: os() };
  }
  function zf(t, l, e) {
    return t = t !== null ? t.childLanes & ~e : 0, l && (t |= bl), t;
  }
  function Td(t, l, e) {
    var a = l.pendingProps, u = !1, n = (l.flags & 128) !== 0, i;
    if ((i = n) || (i = t !== null && t.memoizedState === null ? !1 : (Zt.current & 2) !== 0), i && (u = !0, l.flags &= -129), i = (l.flags & 32) !== 0, l.flags &= -33, t === null) {
      if (F) {
        if (u ? qe(l) : Ge(), (t = pt) ? (t = Zy(
          t,
          Rl
        ), t = t !== null && t.data !== "&" ? t : null, t !== null && (l.memoizedState = {
          dehydrated: t,
          treeContext: Ce !== null ? { id: Kl, overflow: wl } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, e = ts(t), e.return = l, l.child = e, Bt = l, pt = null)) : t = null, t === null) throw Re(l);
        return zo(t) ? l.lanes = 32 : l.lanes = 536870912, null;
      }
      return n = a.children, a = a.fallback, u ? (Ge(), u = l.mode, n = di(
        { mode: "hidden", children: n },
        u
      ), a = ca(
        a,
        u,
        e,
        null
      ), n.return = l, a.return = l, n.sibling = a, l.child = n, a = l.child, a.memoizedState = Ef(e), a.childLanes = zf(
        t,
        i,
        e
      ), l.memoizedState = Tf, Ku(null, a)) : (qe(l), Of(l, n));
    }
    var c = t.memoizedState;
    if (c !== null) {
      var r = c.dehydrated;
      if (r !== null)
        return vv(
          t,
          l,
          n,
          i,
          a,
          r,
          c,
          e
        );
    }
    return u ? (Ge(), u = a.fallback, n = l.mode, c = t.child, r = c.sibling, a = de(c, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = c.subtreeFlags & 1206910976, r !== null ? u = de(r, u) : (u = ca(
      u,
      n,
      e,
      null
    ), u.flags |= 2), u.return = l, a.return = l, a.sibling = u, l.child = a, Ku(null, a), a = l.child, u = t.child.memoizedState, u === null ? u = Ef(e) : (n = u.cachePool, n !== null ? (c = Mt._currentValue, n = n.parent !== c ? { parent: c, pool: c } : n) : n = os(), u = {
      baseLanes: u.baseLanes | e,
      cachePool: n
    }), a.memoizedState = u, a.childLanes = zf(
      t,
      i,
      e
    ), l.memoizedState = Tf, Ku(t.child, a)) : (qe(l), e = t.child, t = e.sibling, e = de(e, {
      mode: "visible",
      children: a.children
    }), e.return = l, e.sibling = null, t !== null && (i = l.deletions, i === null ? (l.deletions = [t], l.flags |= 16) : i.push(t)), l.child = e, l.memoizedState = null, e);
  }
  function Of(t, l) {
    return l = di(
      { mode: "visible", children: l },
      t.mode
    ), l.return = t, t.child = l;
  }
  function di(t, l) {
    return t = ul(22, t, null, l), t.lanes = 0, t;
  }
  function yi(t, l, e) {
    return ha(l, t.child, null, e), t = Of(
      l,
      l.pendingProps.children
    ), t.flags |= 2, l.memoizedState = null, t;
  }
  function vv(t, l, e, a, u, n, i, c) {
    if (e)
      return l.flags & 256 ? (qe(l), l.flags &= -257, yi(
        t,
        l,
        c
      )) : l.memoizedState !== null ? (Ge(), l.child = t.child, l.flags |= 128, null) : (Ge(), n = u.fallback, i = l.mode, u = di(
        { mode: "visible", children: u.children },
        i
      ), n = ca(
        n,
        i,
        c,
        null
      ), n.flags |= 2, u.return = l, n.return = l, u.sibling = n, l.child = u, ha(l, t.child, null, c), u = l.child, u.memoizedState = Ef(c), u.childLanes = zf(
        t,
        a,
        c
      ), l.memoizedState = Tf, Ku(null, u));
    if (qe(l), zo(n)) {
      if (a = n.nextSibling && n.nextSibling.dataset, a) var r = a.dgst;
      return a = r, a !== "" && (u = Error(o(419)), u.stack = "", u.digest = a, Uu({ value: u, source: null, stack: null })), yi(
        t,
        l,
        c
      );
    }
    if (Dt || ra(t, l, c, !1), a = (c & t.childLanes) !== 0, Dt || a) {
      if (Ye.current !== null)
        return yi(
          t,
          l,
          c
        );
      if (a = St, a !== null && (u = ar(
        a,
        c
      ), u !== 0 && u !== i.retryLane))
        throw i.retryLane = u, ia(t, u), fl(a, t, u), bf;
      return Eo(n) || Ri(), yi(
        t,
        l,
        c
      );
    }
    return Eo(n) ? (l.flags |= 192, l.child = t.child, null) : (t = i.treeContext, pt = Ul(n.nextSibling), Bt = l, F = !0, Me = null, Rl = !1, t !== null && as(l, t), l = Of(
      l,
      u.children
    ), l.flags |= 134221824, l);
  }
  function Ed(t, l, e) {
    t.lanes |= l;
    var a = t.alternate;
    a !== null && (a.lanes |= l), Kn(t.return, l, e);
  }
  function zd(t) {
    for (var l = null; t !== null; ) {
      var e = t.alternate;
      e !== null && ti(e) === null && (l = t), t = t.sibling;
    }
    return l;
  }
  function mi(t, l, e, a, u, n) {
    var i = t.memoizedState;
    i === null ? t.memoizedState = {
      isBackwards: l,
      rendering: null,
      renderingStartTime: 0,
      last: a,
      tail: e,
      tailMode: u,
      treeForkCount: n
    } : (i.isBackwards = l, i.rendering = null, i.renderingStartTime = 0, i.last = a, i.tail = e, i.tailMode = u, i.treeForkCount = n);
  }
  function Nf(t) {
    var l = t.child;
    for (t.child = null; l !== null; ) {
      var e = l.sibling;
      l.sibling = t.child, t.child = l, l = e;
    }
  }
  function Af(t, l, e) {
    var a = l.pendingProps, u = a.revealOrder, n = a.tail;
    a = a.children;
    var i = Zt.current;
    if (l.flags & 128)
      return Xu(l, i), null;
    var c = (i & 2) !== 0;
    if (c ? (i = i & 1 | 2, l.flags |= 128) : i &= 1, Xu(l, i), u === "backwards" && t !== null ? (Nf(t), jt(t, l, a, e), Nf(t)) : jt(t, l, a, e), a = F ? Du : 0, !c && t !== null && (t.flags & 128) !== 0)
      t: for (t = l.child; t !== null; ) {
        if (t.tag === 13)
          t.memoizedState !== null && Ed(t, e, l);
        else if (t.tag === 19)
          Ed(t, e, l);
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
    switch (u) {
      case "backwards":
        e = zd(l.child), e === null ? (u = l.child, l.child = null) : (u = e.sibling, e.sibling = null, Nf(l)), mi(
          l,
          !0,
          u,
          null,
          n,
          a
        );
        break;
      case "unstable_legacy-backwards":
        for (e = null, u = l.child, l.child = null; u !== null; ) {
          if (t = u.alternate, t !== null && ti(t) === null) {
            l.child = u;
            break;
          }
          t = u.sibling, u.sibling = e, e = u, u = t;
        }
        mi(
          l,
          !0,
          e,
          null,
          n,
          a
        );
        break;
      case "together":
        mi(
          l,
          !1,
          null,
          null,
          void 0,
          a
        );
        break;
      case "independent":
        l.memoizedState = null;
        break;
      default:
        e = zd(l.child), e === null ? (u = l.child, l.child = null) : (u = e.sibling, e.sibling = null), mi(
          l,
          !1,
          u,
          e,
          n,
          a
        );
    }
    return l.child;
  }
  function Od(t, l, e) {
    var a = l.pendingProps;
    return De(l, l.type, a.value), jt(t, l, a.children, e), l.child;
  }
  function Se(t, l, e) {
    if (t !== null && (l.dependencies = t.dependencies), Ze |= l.lanes, (e & l.childLanes) === 0)
      if (t !== null) {
        if (ra(
          t,
          l,
          e,
          !1
        ), (e & l.childLanes) === 0)
          return null;
      } else return null;
    if (t !== null && l.child !== t.child)
      throw Error(o(153));
    if (l.child !== null) {
      for (t = l.child, e = de(t, t.pendingProps), l.child = e, e.return = l; t.sibling !== null; )
        t = t.sibling, e = e.sibling = de(t, t.pendingProps), e.return = l;
      e.sibling = null;
    }
    return l.child;
  }
  function _f(t, l) {
    return (t.lanes & l) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && wn(t)));
  }
  function hv(t, l, e) {
    switch (l.tag) {
      case 3:
        bn(l, l.stateNode.containerInfo), De(l, Mt, t.memoizedState.cache), fa();
        break;
      case 27:
      case 5:
        Pi(l);
        break;
      case 4:
        bn(l, l.stateNode.containerInfo);
        break;
      case 10:
        De(
          l,
          l.type,
          l.memoizedProps.value
        );
        break;
      case 31:
        if (l.memoizedState !== null)
          return l.flags |= 128, Ic(l), null;
        break;
      case 13:
        var a = l.memoizedState;
        if (a !== null) {
          if (a.dehydrated !== null)
            return qe(l), l.flags |= 128, null;
          a = ra(
            t,
            l,
            e,
            !1
          );
          var u = l.child.childLanes;
          return a || (e & u) !== 0 ? Td(t, l, e) : (qe(l), t = Se(
            t,
            l,
            e
          ), t !== null ? t.sibling : null);
        }
        qe(l);
        break;
      case 19:
        if (l.flags & 128)
          return Af(
            t,
            l,
            e
          );
        if (u = (t.flags & 128) !== 0, a = (e & l.childLanes) !== 0, a || (ra(
          t,
          l,
          e,
          !1
        ), a = (e & l.childLanes) !== 0), u) {
          if (a)
            return Af(
              t,
              l,
              e
            );
          l.flags |= 128;
        }
        if (u = l.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), Xu(l, Zt.current), a) break;
        return null;
      case 22:
        return l.lanes = 0, vd(
          t,
          l,
          e,
          l.pendingProps
        );
      case 24:
        De(l, Mt, t.memoizedState.cache);
    }
    return Se(t, l, e);
  }
  function Nd(t, l, e) {
    if (t !== null)
      if (t.memoizedProps !== l.pendingProps)
        Dt = !0;
      else {
        if (!_f(t, e) && (l.flags & 128) === 0)
          return Dt = !1, hv(
            t,
            l,
            e
          );
        Dt = (t.flags & 131072) !== 0;
      }
    else
      Dt = !1, F && (l.flags & 1048576) !== 0 && es(l, Du, l.index);
    switch (l.lanes = 0, l.tag) {
      case 16:
        t: {
          var a = l.pendingProps;
          if (t = ma(l.elementType), l.type = t, typeof t == "function")
            Uc(t) ? (a = Sa(t, a), l.tag = 1, l = bd(
              null,
              l,
              t,
              a,
              e
            )) : (l.tag = 0, l = pf(
              null,
              l,
              t,
              a,
              e
            ));
          else {
            if (t != null) {
              var u = t.$$typeof;
              if (u === R) {
                l.tag = 11, l = dd(
                  null,
                  l,
                  t,
                  a,
                  e
                );
                break t;
              } else if (u === yt) {
                l.tag = 14, l = yd(
                  null,
                  l,
                  t,
                  a,
                  e
                );
                break t;
              } else if (u === Ct) {
                l.tag = 10, l.type = t, l = Od(
                  null,
                  l,
                  e
                );
                break t;
              }
            }
            throw l = it(t) || t, Error(o(306, l, ""));
          }
        }
        return l;
      case 0:
        return pf(
          t,
          l,
          l.type,
          l.pendingProps,
          e
        );
      case 1:
        return a = l.type, u = Sa(
          a,
          l.pendingProps
        ), bd(
          t,
          l,
          a,
          u,
          e
        );
      case 3:
        t: {
          if (bn(
            l,
            l.stateNode.containerInfo
          ), t === null) throw Error(o(387));
          a = l.pendingProps;
          var n = l.memoizedState;
          u = n.element, wc(t, l), Qu(l, a, null, e);
          var i = l.memoizedState;
          if (a = i.cache, De(l, Mt, a), a !== n.cache && Qc(
            l,
            [Mt],
            e,
            !0
          ), Gu(), a = i.element, n.isDehydrated)
            if (n = {
              element: a,
              isDehydrated: !1,
              cache: i.cache
            }, l.updateQueue.baseState = n, l.memoizedState = n, l.flags & 256) {
              l = pd(
                t,
                l,
                a,
                e
              );
              break t;
            } else if (a !== u) {
              u = xl(
                Error(o(424)),
                l
              ), Uu(u), l = pd(
                t,
                l,
                a,
                e
              );
              break t;
            } else
              for (t = l.stateNode.containerInfo, t.nodeType === 9 ? t = t.body : t = t.nodeName === "HTML" ? t.ownerDocument.body : t, pt = Ul(t.firstChild), Bt = l, F = !0, Me = null, Rl = !0, e = vs(
                l,
                null,
                a,
                e
              ), l.child = e; e; )
                e.flags = e.flags & -3 | 134221824, e = e.sibling;
          else {
            if (fa(), a === u) {
              l = Se(
                t,
                l,
                e
              );
              break t;
            }
            jt(t, l, a, e);
          }
          l = l.child;
        }
        return l;
      case 26:
        return Wa(t, l), t === null ? (e = Fy(
          l.type,
          null,
          l.pendingProps,
          null
        )) ? l.memoizedState = e : F || (l.stateNode = Cy(
          l.type,
          l.pendingProps,
          Oe.current,
          l
        )) : l.memoizedState = Fy(
          l.type,
          t.memoizedProps,
          l.pendingProps,
          t.memoizedState
        ), null;
      case 27:
        return Pi(l), t === null && F && (a = l.stateNode = wy(
          l.type,
          l.pendingProps,
          Oe.current
        ), Bt = l, Rl = !0, u = pt, Je(l.type) ? (Oo = u, pt = Ul(a.firstChild)) : pt = u), jt(
          t,
          l,
          l.pendingProps.children,
          e
        ), Wa(t, l), t === null && (l.flags |= 4194304), l.child;
      case 5:
        return t === null && F && ((u = a = pt) && (a = rh(
          a,
          l.type,
          l.pendingProps,
          Rl
        ), a !== null ? (l.stateNode = a, Bt = l, pt = Ul(a.firstChild), Rl = !1, u = !0) : u = !1), u || Re(l)), Pi(l), u = l.type, n = l.pendingProps, i = t !== null ? t.memoizedProps : null, a = n.children, vo(u, n) ? a = null : i !== null && vo(u, i) && (l.flags |= 32), l.memoizedState !== null && (u = tf(
          t,
          l,
          nv,
          null,
          null,
          e
        ), du._currentValue = u), Wa(t, l), jt(t, l, a, e), l.child;
      case 6:
        return t === null && F && ((t = e = pt) && (e = sh(
          e,
          l.pendingProps,
          Rl
        ), e !== null ? (l.stateNode = e, Bt = l, pt = null, t = !0) : t = !1), t || Re(l)), null;
      case 13:
        return Td(t, l, e);
      case 4:
        return bn(
          l,
          l.stateNode.containerInfo
        ), a = l.pendingProps, t === null ? l.child = ha(
          l,
          null,
          a,
          e
        ) : jt(t, l, a, e), l.child;
      case 11:
        return dd(
          t,
          l,
          l.type,
          l.pendingProps,
          e
        );
      case 7:
        return a = l.pendingProps, Wa(t, l), jt(t, l, a, e), l.child;
      case 8:
        return jt(
          t,
          l,
          l.pendingProps.children,
          e
        ), l.child;
      case 12:
        return jt(
          t,
          l,
          l.pendingProps.children,
          e
        ), l.child;
      case 10:
        return Od(t, l, e);
      case 9:
        return u = l.type._context, a = l.pendingProps.children, sa(l), u = Xt(u), a = a(u), l.flags |= 1, jt(t, l, a, e), l.child;
      case 14:
        return yd(
          t,
          l,
          l.type,
          l.pendingProps,
          e
        );
      case 15:
        return md(
          t,
          l,
          l.type,
          l.pendingProps,
          e
        );
      case 19:
        return Af(t, l, e);
      case 31:
        return mv(t, l, e);
      case 22:
        return vd(
          t,
          l,
          e,
          l.pendingProps
        );
      case 24:
        return sa(l), a = Xt(Mt), t === null ? (u = Zc(), u === null && (u = St, n = Xc(), u.pooledCache = n, n.refCount++, n !== null && (u.pooledCacheLanes |= e), u = n), l.memoizedState = { parent: a, cache: u }, Kc(l), De(l, Mt, u)) : ((t.lanes & e) !== 0 && (wc(t, l), Qu(l, null, null, e), Gu()), u = t.memoizedState, n = l.memoizedState, u.parent !== a ? (u = { parent: a, cache: a }, l.memoizedState = u, l.lanes === 0 && (l.memoizedState = l.updateQueue.baseState = u), De(l, Mt, a)) : (a = n.cache, De(l, Mt, a), a !== u.cache && Qc(
          l,
          [Mt],
          e,
          !0
        ))), jt(
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
        }), a = l.pendingProps, a.name != null && a.name !== "auto" ? l.flags |= t === null ? 18882560 : 18874368 : F && Zn(l), t !== null && t.memoizedProps.name !== a.name ? l.flags |= 4194816 : Wa(t, l), jt(t, l, a.children, e), l.child;
      case 29:
        throw l.pendingProps;
    }
    throw Error(o(156, l.tag));
  }
  function be(t) {
    t.flags |= 4;
  }
  function xf(t, l, e, a, u) {
    var n;
    if ((n = (t.mode & 32) !== 0) && (n = e === null ? t0(l, a) : t0(l, a) && (a.src !== e.src || a.srcSet !== e.srcSet)), n) {
      if (t.flags |= 16777216, (u & 335544128) === u)
        if (t.stateNode.complete) t.flags |= 8192;
        else if (iy()) t.flags |= 8192;
        else
          throw va = Fn, Vc;
    } else t.flags &= -16777217;
  }
  function Ad(t, l) {
    if (l.type !== "stylesheet" || (l.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (t.flags |= 16777216, !l0(l))
      if (iy()) t.flags |= 8192;
      else
        throw va = Fn, Vc;
  }
  function vi(t, l) {
    l !== null && (t.flags |= 4), t.flags & 16384 && (l = t.tag !== 22 ? tr() : 536870912, t.lanes |= l, Pa |= l);
  }
  function wu(t, l) {
    if (!F)
      switch (t.tailMode) {
        case "visible":
          break;
        case "collapsed":
          for (var e = t.tail, a = null; e !== null; )
            e.alternate !== null && (a = e), e = e.sibling;
          a === null ? l || t.tail === null ? t.tail = null : t.tail.sibling = null : a.sibling = null;
          break;
        default:
          for (l = t.tail, e = null; l !== null; )
            l.alternate !== null && (e = l), l = l.sibling;
          e === null ? t.tail = null : e.sibling = null;
      }
  }
  function Tt(t) {
    var l = t.alternate !== null && t.alternate.child === t.child, e = 0, a = 0;
    if (l)
      for (var u = t.child; u !== null; )
        e |= u.lanes | u.childLanes, a |= u.subtreeFlags & 1206910976, a |= u.flags & 1206910976, u.return = t, u = u.sibling;
    else
      for (u = t.child; u !== null; )
        e |= u.lanes | u.childLanes, a |= u.subtreeFlags, a |= u.flags, u.return = t, u = u.sibling;
    return t.subtreeFlags |= a, t.childLanes = e, l;
  }
  function gv(t, l, e) {
    var a = l.pendingProps;
    switch (Bc(l), l.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Tt(l), null;
      case 1:
        return Tt(l), null;
      case 3:
        return e = l.stateNode, a = null, t !== null && (a = t.memoizedState.cache), l.memoizedState.cache !== a && (l.flags |= 2048), ve(Mt), Na(), e.pendingContext && (e.context = e.pendingContext, e.pendingContext = null), (t === null || t.child === null) && (Xa(l) ? be(l) : t === null || t.memoizedState.isDehydrated && (l.flags & 256) === 0 || (l.flags |= 1024, qc())), Tt(l), null;
      case 26:
        var u = l.type, n = l.memoizedState;
        return t === null ? (be(l), n !== null ? (Tt(l), Ad(l, n)) : (Tt(l), xf(
          l,
          u,
          null,
          a,
          e
        ))) : n ? n !== t.memoizedState ? (be(l), Tt(l), Ad(l, n)) : (Tt(l), l.flags &= -16777217) : (t = t.memoizedProps, t !== a && be(l), Tt(l), xf(
          l,
          u,
          t,
          a,
          e
        )), null;
      case 27:
        if (pn(l), e = Oe.current, u = l.type, t !== null && l.stateNode != null)
          t.memoizedProps !== a && be(l);
        else {
          if (!a) {
            if (l.stateNode === null)
              throw Error(o(166));
            return Tt(l), l.subtreeFlags &= -33554433, null;
          }
          t = Zl.current, Xa(l) ? us(l) : (t = wy(u, a, e), l.stateNode = t, be(l));
        }
        return Tt(l), l.subtreeFlags &= -33554433, null;
      case 5:
        if (pn(l), u = l.type, t !== null && l.stateNode != null)
          t.memoizedProps !== a && be(l);
        else {
          if (!a) {
            if (l.stateNode === null)
              throw Error(o(166));
            return Tt(l), l.subtreeFlags &= -33554433, null;
          }
          if (n = Zl.current, Xa(l))
            us(l);
          else {
            var i = an(
              Oe.current
            );
            switch (n) {
              case 1:
                n = i.createElementNS(
                  "http://www.w3.org/2000/svg",
                  u
                );
                break;
              case 2:
                n = i.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  u
                );
                break;
              default:
                switch (u) {
                  case "svg":
                    n = i.createElementNS(
                      "http://www.w3.org/2000/svg",
                      u
                    );
                    break;
                  case "math":
                    n = i.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      u
                    );
                    break;
                  case "script":
                    n = i.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(
                      n.firstChild
                    );
                    break;
                  case "select":
                    n = typeof a.is == "string" ? i.createElement("select", {
                      is: a.is
                    }) : i.createElement("select"), a.multiple ? n.multiple = !0 : a.size && (n.size = a.size);
                    break;
                  default:
                    n = typeof a.is == "string" ? i.createElement(u, { is: a.is }) : i.createElement(u);
                }
            }
            n[Qt] = l, n[al] = a;
            t: for (i = l.child; i !== null; ) {
              if (i.tag === 5 || i.tag === 6)
                n.appendChild(i.stateNode);
              else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                i.child.return = i, i = i.child;
                continue;
              }
              if (i === l) break t;
              for (; i.sibling === null; ) {
                if (i.return === null || i.return === l)
                  break t;
                i = i.return;
              }
              i.sibling.return = i.return, i = i.sibling;
            }
            l.stateNode = n;
            t: switch (Kt(n, u, a), u) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break t;
              case "img":
                a = !0;
                break t;
              default:
                a = !1;
            }
            a && be(l);
          }
        }
        return Tt(l), l.subtreeFlags &= -33554433, xf(
          l,
          l.type,
          t === null ? null : t.memoizedProps,
          l.pendingProps,
          e
        ), null;
      case 6:
        if (t && l.stateNode != null)
          t.memoizedProps !== a && be(l);
        else {
          if (typeof a != "string" && l.stateNode === null)
            throw Error(o(166));
          if (t = Oe.current, Xa(l)) {
            if (t = l.stateNode, e = l.memoizedProps, a = null, u = Bt, u !== null)
              switch (u.tag) {
                case 27:
                case 5:
                  a = u.memoizedProps;
              }
            t[Qt] = l, t = !!(t.nodeValue === e || a !== null && a.suppressHydrationWarning === !0 || Ny(t.nodeValue, e)), t || Re(l, !0);
          } else
            t = an(t).createTextNode(
              a
            ), t[Qt] = l, l.stateNode = t;
        }
        return Tt(l), null;
      case 31:
        if (e = l.memoizedState, t === null || t.memoizedState !== null) {
          if (a = Xa(l), e !== null) {
            if (t === null) {
              if (!a) throw Error(o(318));
              if (t = l.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(o(557));
              t[Qt] = l;
            } else
              fa(), (l.flags & 128) === 0 && (l.memoizedState = null), l.flags |= 4;
            Tt(l), t = !1;
          } else
            e = qc(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = e), t = !0;
          if (!t)
            return l.flags & 256 ? (hl(l), l) : (hl(l), null);
          if ((l.flags & 128) !== 0)
            throw Error(o(558));
        }
        return Tt(l), null;
      case 13:
        if (a = l.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (u = Xa(l), a !== null && a.dehydrated !== null) {
            if (t === null) {
              if (!u) throw Error(o(318));
              if (u = l.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(o(317));
              u[Qt] = l;
            } else
              fa(), (l.flags & 128) === 0 && (l.memoizedState = null), l.flags |= 4;
            Tt(l), u = !1;
          } else
            u = qc(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = u), u = !0;
          if (!u)
            return l.flags & 256 ? (hl(l), l) : (hl(l), null);
        }
        return hl(l), (l.flags & 128) !== 0 ? (l.lanes = e, l) : (e = a !== null, t = t !== null && t.memoizedState !== null, e && (a = l.child, u = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (u = a.alternate.memoizedState.cachePool.pool), n = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (n = a.memoizedState.cachePool.pool), n !== u && (a.flags |= 2048)), e !== t && e && (l.child.flags |= 8192), vi(l, l.updateQueue), Tt(l), null);
      case 4:
        return Na(), t === null && oo(l.stateNode.containerInfo), l.flags |= 67108864, Tt(l), null;
      case 10:
        return ve(l.type), Tt(l), null;
      case 19:
        if (kc(l), a = l.memoizedState, a === null) return Tt(l), null;
        if (u = (l.flags & 128) !== 0, n = a.rendering, n === null)
          if (u) wu(a, !1);
          else {
            if (Nt !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = l.child; t !== null; ) {
                if (n = ti(t), n !== null) {
                  for (l.flags |= 128, wu(a, !1), t = n.updateQueue, l.updateQueue = t, vi(l, t), l.subtreeFlags = 0, t = e, e = l.child; e !== null; )
                    Pr(e, t), e = e.sibling;
                  return Xu(
                    l,
                    Zt.current & 1 | 2
                  ), F && ye(l, a.treeForkCount), l.child;
                }
                t = t.sibling;
              }
            a.tail !== null && sl() > _i && (l.flags |= 128, u = !0, wu(a, !1), l.lanes = 4194304);
          }
        else {
          if (!u)
            if (t = ti(n), t !== null) {
              if (l.flags |= 128, u = !0, t = t.updateQueue, l.updateQueue = t, vi(l, t), wu(a, !0), a.tail === null && a.tailMode !== "collapsed" && a.tailMode !== "visible" && !n.alternate && !F)
                return Tt(l), null;
            } else
              2 * sl() - a.renderingStartTime > _i && e !== 536870912 && (l.flags |= 128, u = !0, wu(a, !1), l.lanes = 4194304);
          a.isBackwards ? (n.sibling = l.child, l.child = n) : (t = a.last, t !== null ? t.sibling = n : l.child = n, a.last = n);
        }
        if (a.tail !== null) {
          t = a.tail;
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
          return a.rendering = t, a.tail = t.sibling, a.renderingStartTime = sl(), t.sibling = null, n = Zt.current, n = u ? n & 1 | 2 : n & 1, a.tailMode === "visible" || a.tailMode === "collapsed" || !e || F ? Xu(l, n) : (e = n, bt(Lt, l), bt(Zt, e), Wt === null && (Wt = l)), F && ye(l, a.treeForkCount), t;
        }
        return Tt(l), null;
      case 22:
      case 23:
        return hl(l), Fc(), a = l.memoizedState !== null, t !== null ? t.memoizedState !== null !== a && (l.flags |= 8192) : a && (l.flags |= 8192), a ? (e & 536870912) !== 0 && (l.flags & 128) === 0 && (Tt(l), l.subtreeFlags & 6 && (l.flags |= 8192)) : Tt(l), e = l.updateQueue, e !== null && vi(l, e.retryQueue), e = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), a = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (a = l.memoizedState.cachePool.pool), a !== e && (l.flags |= 2048), t !== null && Gt(ya), null;
      case 24:
        return e = null, t !== null && (e = t.memoizedState.cache), l.memoizedState.cache !== e && (l.flags |= 2048), ve(Mt), Tt(l), null;
      case 25:
        return null;
      case 30:
        return l.flags |= 33554432, Tt(l), null;
    }
    throw Error(o(156, l.tag));
  }
  function Sv(t, l) {
    switch (Bc(l), l.tag) {
      case 1:
        return t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
      case 3:
        return ve(Mt), Na(), t = l.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (l.flags = t & -65537 | 128, l) : null;
      case 26:
      case 27:
      case 5:
        return pn(l), null;
      case 31:
        if (l.memoizedState !== null) {
          if (hl(l), l.alternate === null)
            throw Error(o(340));
          fa();
        }
        return t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
      case 13:
        if (hl(l), t = l.memoizedState, t !== null && t.dehydrated !== null) {
          if (l.alternate === null)
            throw Error(o(340));
          fa();
        }
        return t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
      case 19:
        return kc(l), t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, t = l.memoizedState, t !== null && (t.rendering = null, t.tail = null), l.flags |= 4, l) : null;
      case 4:
        return Na(), null;
      case 10:
        return ve(l.type), null;
      case 22:
      case 23:
        return hl(l), Fc(), t !== null && Gt(ya), t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
      case 24:
        return ve(Mt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function _d(t, l) {
    switch (Bc(l), l.tag) {
      case 3:
        ve(Mt), Na();
        break;
      case 26:
      case 27:
      case 5:
        pn(l);
        break;
      case 4:
        Na();
        break;
      case 31:
        l.memoizedState !== null && hl(l);
        break;
      case 13:
        hl(l);
        break;
      case 19:
        kc(l);
        break;
      case 10:
        ve(l.type);
        break;
      case 22:
      case 23:
        hl(l), Fc(), t !== null && Gt(ya);
        break;
      case 24:
        ve(Mt);
    }
  }
  function Ju(t, l) {
    try {
      var e = l.updateQueue, a = e !== null ? e.lastEffect : null;
      if (a !== null) {
        var u = a.next;
        e = u;
        do {
          if ((e.tag & t) === t) {
            a = void 0;
            var n = e.create, i = e.inst;
            a = n(), i.destroy = a;
          }
          e = e.next;
        } while (e !== u);
      }
    } catch (c) {
      vt(l, l.return, c);
    }
  }
  function Qe(t, l, e) {
    try {
      var a = l.updateQueue, u = a !== null ? a.lastEffect : null;
      if (u !== null) {
        var n = u.next;
        a = n;
        do {
          if ((a.tag & t) === t) {
            var i = a.inst, c = i.destroy;
            if (c !== void 0) {
              i.destroy = void 0, u = l;
              var r = e, g = c;
              try {
                g();
              } catch (p) {
                vt(
                  u,
                  r,
                  p
                );
              }
            }
          }
          a = a.next;
        } while (a !== n);
      }
    } catch (p) {
      vt(l, l.return, p);
    }
  }
  function xd(t) {
    var l = t.updateQueue;
    if (l !== null) {
      var e = t.stateNode;
      try {
        gs(l, e);
      } catch (a) {
        vt(t, t.return, a);
      }
    }
  }
  function Cd(t, l, e) {
    e.props = Sa(
      t.type,
      t.memoizedProps
    ), e.state = t.memoizedState;
    try {
      e.componentWillUnmount();
    } catch (a) {
      vt(t, l, a);
    }
  }
  function Jl(t, l) {
    try {
      var e = t.ref;
      if (e !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var a = t.stateNode;
            break;
          case 30:
            var u = t.stateNode, n = re(t.memoizedProps, u);
            (u.ref === null || u.ref.name !== n) && (u.ref = By(n)), a = u.ref;
            break;
          case 7:
            if (t.stateNode === null) {
              var i = new Tl(t);
              E(
                t.child,
                !1,
                fh,
                i,
                void 0,
                void 0
              ), t.stateNode = i;
            }
            a = t.stateNode;
            break;
          default:
            a = t.stateNode;
        }
        typeof e == "function" ? t.refCleanup = e(a) : e.current = a;
      }
    } catch (c) {
      vt(t, l, c);
    }
  }
  function Vt(t, l) {
    var e = t.ref, a = t.refCleanup;
    if (e !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (u) {
          vt(t, l, u);
        } finally {
          t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
        }
      else if (typeof e == "function")
        try {
          e(null);
        } catch (u) {
          vt(t, l, u);
        }
      else e.current = null;
  }
  function hi(t, l) {
    if ((t.tag === 5 || t.tag === 27 || t.tag === 6) && t.alternate === null && l !== null)
      for (var e = 0; e < l.length; e++)
        Ly(
          t.stateNode,
          l[e]
        );
  }
  function Md(t) {
    for (var l = t.return; l !== null && (Mf(l) && Ly(t.stateNode, l.stateNode), !Cf(l)); )
      l = l.return;
  }
  function Wu(t) {
    for (var l = t.return; l !== null && (Mf(l) && oh(t.stateNode, l.stateNode), !Cf(l)); )
      l = l.return;
  }
  function Cf(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 27;
  }
  function Mf(t) {
    return t && t.tag === 7 && t.stateNode !== null;
  }
  function Rf(t) {
    var l = t.type, e = t.memoizedProps, a = t.stateNode;
    try {
      t: switch (l) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          e.autoFocus && a.focus();
          break t;
        case "img":
          e.src ? a.src = e.src : e.srcSet && (a.srcset = e.srcSet);
      }
    } catch (u) {
      vt(t, t.return, u);
    }
  }
  function Df(t, l, e) {
    try {
      var a = t.stateNode;
      Vv(a, t.type, e, l), a[al] = l;
    } catch (u) {
      vt(t, t.return, u);
    }
  }
  function Rd(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && Je(t.type) || t.tag === 4;
  }
  function Uf(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || Rd(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && Je(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function jf(t, l, e, a) {
    var u = t.tag;
    if (u === 5 || u === 6)
      u = t.stateNode, l ? (e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e).insertBefore(u, l) : (l = e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, l.appendChild(u), e = e._reactRootContainer, e != null || l.onclick !== null || (l.onclick = Vl)), hi(t, a), ct = !0;
    else if (u !== 4 && (u === 27 && (hi(t, a), a = null, Je(t.type) && (e = t.stateNode, l = null)), t = t.child, t !== null))
      for (jf(
        t,
        l,
        e,
        a
      ), t = t.sibling; t !== null; )
        jf(
          t,
          l,
          e,
          a
        ), t = t.sibling;
  }
  function gi(t, l, e, a) {
    var u = t.tag;
    if (u === 5 || u === 6)
      u = t.stateNode, l ? e.insertBefore(u, l) : e.appendChild(u), hi(t, a), ct = !0;
    else if (u !== 4 && (u === 27 && (hi(t, a), a = null, Je(t.type) && (e = t.stateNode)), t = t.child, t !== null))
      for (gi(
        t,
        l,
        e,
        a
      ), t = t.sibling; t !== null; )
        gi(
          t,
          l,
          e,
          a
        ), t = t.sibling;
  }
  function Dd(t) {
    var l = t.stateNode, e = t.memoizedProps;
    try {
      for (var a = t.type, u = l.attributes; u.length; )
        l.removeAttributeNode(u[0]);
      Kt(l, a, e), l[Qt] = t, l[al] = e;
    } catch (n) {
      vt(t, t.return, n);
    }
  }
  var Si = !1, gl = null;
  function Ud(t) {
    (t.tag === 30 || (t.subtreeFlags & 33554432) !== 0) && (Si = !0);
  }
  var Wl = null;
  function jd() {
    var t = Wl;
    return Wl = null, t;
  }
  var nl = 0;
  function $a(t, l, e, a, u) {
    return nl = 0, Hd(
      t.child,
      l,
      e,
      a,
      u
    );
  }
  function Hd(t, l, e, a, u) {
    for (var n = !1; t !== null; ) {
      if (t.tag === 5) {
        var i = t.stateNode;
        if (a !== null) {
          var c = So(i);
          a.push(c), c.view && (n = !0);
        } else
          n || So(i).view && (n = !0);
        Si = !0, jy(
          i,
          nl === 0 ? l : l + "_" + nl,
          e
        ), nl++;
      } else (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && u || Hd(
        t.child,
        l,
        e,
        a,
        u
      ) && (n = !0));
      t = t.sibling;
    }
    return n;
  }
  function $l(t, l) {
    for (; t !== null; )
      t.tag === 5 ? Hy(t.stateNode, t.memoizedProps) : (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && l || $l(
        t.child,
        l
      )), t = t.sibling;
  }
  function bi(t) {
    if ((t.subtreeFlags & 18874368) !== 0)
      for (t = t.child; t !== null; ) {
        if ((t.tag !== 22 || t.memoizedState === null) && (bi(t), t.tag === 30 && (t.flags & 18874368) !== 0 && t.stateNode.paired)) {
          var l = t.memoizedProps;
          if (l.name == null || l.name === "auto")
            throw Error(o(544));
          var e = l.name;
          l = se(l.default, l.share), l !== "none" && ($a(
            t,
            e,
            l,
            null,
            !1
          ) || $l(t.child, !1));
        }
        t = t.sibling;
      }
  }
  function Hf(t, l) {
    if (t.tag === 30) {
      var e = t.stateNode, a = t.memoizedProps, u = re(a, e), n = se(
        a.default,
        e.paired ? a.share : a.enter
      );
      n !== "none" ? $a(t, u, n, null, !1) ? (bi(t), e.paired || l || au(t, a.onEnter)) : $l(t.child, !1) : bi(t);
    } else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null; )
        Hf(t, l), t = t.sibling;
    else bi(t);
  }
  function Bf(t) {
    if (gl !== null && gl.size !== 0) {
      var l = gl;
      if ((t.subtreeFlags & 18874368) !== 0)
        for (t = t.child; t !== null; ) {
          if (t.tag !== 22 || t.memoizedState === null) {
            if (t.tag === 30 && (t.flags & 18874368) !== 0) {
              var e = t.memoizedProps, a = e.name;
              if (a != null && a !== "auto") {
                var u = l.get(a);
                if (u !== void 0) {
                  var n = se(
                    e.default,
                    e.share
                  );
                  if (n !== "none" && ($a(
                    t,
                    a,
                    n,
                    null,
                    !1
                  ) ? (n = t.stateNode, u.paired = n, n.paired = u, au(t, e.onShare)) : $l(t.child, !1)), l.delete(a), l.size === 0) break;
                }
              }
            }
            Bf(t);
          }
          t = t.sibling;
        }
    }
  }
  function Yf(t) {
    if (t.tag === 30) {
      var l = t.memoizedProps, e = re(l, t.stateNode), a = gl !== null ? gl.get(e) : void 0, u = se(
        l.default,
        a !== void 0 ? l.share : l.exit
      );
      u !== "none" && ($a(t, e, u, null, !1) ? a !== void 0 ? (u = t.stateNode, a.paired = u, u.paired = a, gl.delete(e), au(t, l.onShare)) : au(t, l.onExit) : $l(t.child, !1)), gl !== null && Bf(t);
    } else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null; )
        Yf(t), t = t.sibling;
    else
      gl !== null && Bf(t);
  }
  function Bd(t) {
    for (t = t.child; t !== null; ) {
      if (t.tag === 30) {
        var l = t.memoizedProps, e = re(l, t.stateNode);
        l = se(l.default, l.update), t.flags &= -5, l !== "none" && $a(
          t,
          e,
          l,
          t.memoizedState = [],
          !1
        );
      } else
        (t.subtreeFlags & 33554432) !== 0 && Bd(t);
      t = t.sibling;
    }
  }
  function qf(t) {
    if ((t.subtreeFlags & 18874368) !== 0)
      for (t = t.child; t !== null; ) {
        if (t.tag !== 22 || t.memoizedState === null) {
          if (t.tag === 30 && (t.flags & 18874368) !== 0) {
            var l = t.stateNode;
            l.paired !== null && (l.paired = null, $l(t.child, !1));
          }
          qf(t);
        }
        t = t.sibling;
      }
  }
  function pi(t) {
    if (t.tag === 30)
      t.stateNode.paired = null, $l(t.child, !1), qf(t);
    else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null; )
        pi(t), t = t.sibling;
    else qf(t);
  }
  function Yd(t) {
    for (t = t.child; t !== null; )
      t.tag === 30 ? $l(t.child, !1) : (t.subtreeFlags & 33554432) !== 0 && Yd(t), t = t.sibling;
  }
  function Gf(t, l, e, a, u, n, i) {
    for (var c = !1; l !== null; ) {
      if (l.tag === 5) {
        var r = l.stateNode;
        if (n !== null && nl < n.length) {
          var g = n[nl], p = So(r);
          (g.view || p.view) && (c = !0);
          var O;
          if (O = (t.flags & 4) === 0)
            if (p.clip) O = !0;
            else {
              O = g.rect;
              var v = p.rect;
              O = O.y !== v.y || O.x !== v.x || O.height !== v.height || O.width !== v.width;
            }
          O && (t.flags |= 4), p.abs ? p = !g.abs : (g = g.rect, p = p.rect, p = g.height !== p.height || g.width !== p.width), p && (t.flags |= 32);
        } else t.flags |= 32;
        (t.flags & 4) !== 0 && jy(
          r,
          nl === 0 ? e : e + "_" + nl,
          u
        ), c && (t.flags & 4) !== 0 || (Wl === null && (Wl = []), Wl.push(
          r,
          nl === 0 ? a : a + "_" + nl,
          l.memoizedProps
        )), nl++;
      } else (l.tag !== 22 || l.memoizedState === null) && (l.tag === 30 && i ? t.flags |= l.flags & 32 : Gf(
        t,
        l.child,
        e,
        a,
        u,
        n,
        i
      ) && (c = !0));
      l = l.sibling;
    }
    return c;
  }
  function qd(t, l) {
    for (t = t.child; t !== null; ) {
      if (t.tag === 30) {
        var e = t.memoizedProps, a = t.stateNode, u = re(e, a), n = se(e.default, e.update), i;
        i = t.memoizedState, t.memoizedState = null, a = t;
        var c = t.child;
        nl = 0, u = Gf(
          a,
          c,
          u,
          u,
          n,
          i,
          !1
        ), (t.flags & 4) !== 0 && u && au(t, e.onUpdate);
      } else
        (t.subtreeFlags & 33554432) !== 0 && qd(t);
      t = t.sibling;
    }
  }
  var Yt = !1, st = !1, Fl = !1, Qf = !1, Gd = typeof WeakSet == "function" ? WeakSet : Set, qt = null, Il = !1, $u = !1, Ti = !1, Xf = !1;
  function bv(t, l, e) {
    if (t = t.containerInfo, yo = yu, t = Zr(t), Ac(t)) {
      if ("selectionStart" in t)
        var a = {
          start: t.selectionStart,
          end: t.selectionEnd
        };
      else
        t: {
          a = (a = t.ownerDocument) && a.defaultView || window;
          var u = a.getSelection && a.getSelection();
          if (u && u.rangeCount !== 0) {
            a = u.anchorNode;
            var n = u.anchorOffset, i = u.focusNode;
            u = u.focusOffset;
            try {
              a.nodeType, i.nodeType;
            } catch {
              a = null;
              break t;
            }
            var c = 0, r = -1, g = -1, p = 0, O = 0, v = t, b = null;
            l: for (; ; ) {
              for (var C; v !== a || n !== 0 && v.nodeType !== 3 || (r = c + n), v !== i || u !== 0 && v.nodeType !== 3 || (g = c + u), v.nodeType === 3 && (c += v.nodeValue.length), (C = v.firstChild) !== null; )
                b = v, v = C;
              for (; ; ) {
                if (v === t) break l;
                if (b === a && ++p === n && (r = c), b === i && ++O === u && (g = c), (C = v.nextSibling) !== null) break;
                v = b, b = v.parentNode;
              }
              v = C;
            }
            a = r === -1 || g === -1 ? null : { start: r, end: g };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (mo = { focusedElem: t, selectionRange: a }, yu = !1, e = (e & 335544064) === e, qt = l, l = e ? 9270 : 1024; qt !== null; ) {
      if (t = qt, e && (a = t.deletions, a !== null))
        for (n = 0; n < a.length; n++)
          e && Yf(a[n]);
      if (t.alternate === null && (t.flags & 2) !== 0)
        e && Ud(t), Ei(e);
      else {
        if (t.tag === 22) {
          if (a = t.alternate, t.memoizedState !== null) {
            a !== null && a.memoizedState === null && e && Yf(a), Ei(e);
            continue;
          } else if (a !== null && a.memoizedState !== null) {
            e && Ud(t), Ei(e);
            continue;
          }
        }
        a = t.child, (t.subtreeFlags & l) !== 0 && a !== null ? (a.return = t, qt = a) : (e && Bd(t), Ei(e));
      }
    }
    gl = null;
  }
  function Ei(t) {
    for (; qt !== null; ) {
      var l = qt, e = t, a = l.alternate, u = l.flags;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if ((u & 1024) !== 0 && a !== null) {
            e = void 0, u = a.memoizedProps, a = a.memoizedState;
            var n = l.stateNode;
            try {
              var i = Sa(
                l.type,
                u
              );
              e = n.getSnapshotBeforeUpdate(
                i,
                a
              ), n.__reactInternalSnapshotBeforeUpdate = e;
            } catch (c) {
              vt(l, l.return, c);
            }
          }
          break;
        case 3:
          if ((u & 1024) !== 0) {
            if (a = l.stateNode.containerInfo, e = a.nodeType, e === 9)
              To(a);
            else if (e === 1)
              switch (a.nodeName) {
                case "HEAD":
                case "HTML":
                case "BODY":
                  To(a);
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
          e && a !== null && (e = re(
            a.memoizedProps,
            a.stateNode
          ), u = l.memoizedProps, u = se(u.default, u.update), u !== "none" && $a(
            a,
            e,
            u,
            a.memoizedState = [],
            !0
          ));
          break;
        default:
          if ((u & 1024) !== 0) throw Error(o(163));
      }
      if (a = l.sibling, a !== null) {
        a.return = l.return, qt = a;
        break;
      }
      qt = l.return;
    }
  }
  function Qd(t, l, e) {
    var a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        kl(t, e), a & 4 && Ju(5, e);
        break;
      case 1:
        if (kl(t, e), a & 4)
          if (t = e.stateNode, l === null)
            try {
              t.componentDidMount();
            } catch (i) {
              vt(e, e.return, i);
            }
          else {
            var u = Sa(
              e.type,
              l.memoizedProps
            );
            l = l.memoizedState;
            try {
              t.componentDidUpdate(
                u,
                l,
                t.__reactInternalSnapshotBeforeUpdate
              );
            } catch (i) {
              vt(
                e,
                e.return,
                i
              );
            }
          }
        a & 64 && xd(e), a & 512 && Jl(e, e.return);
        break;
      case 3:
        if (kl(t, e), a & 64 && (t = e.updateQueue, t !== null)) {
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
            gs(t, l);
          } catch (i) {
            vt(e, e.return, i);
          }
        }
        break;
      case 27:
        l === null && a & 4 && Dd(e);
      case 26:
      case 5:
        kl(t, e), l === null && a & 4 && Rf(e), a & 512 && Jl(e, e.return);
        break;
      case 12:
        kl(t, e);
        break;
      case 31:
        kl(t, e), a & 4 && Vd(t, e);
        break;
      case 13:
        kl(t, e), a & 4 && Kd(t, e), a & 64 && (t = e.memoizedState, t !== null && (t = t.dehydrated, t !== null && (e = Rv.bind(
          null,
          e
        ), dh(t, e))));
        break;
      case 22:
        if (a = e.memoizedState !== null || Yt, !a) {
          var n = l !== null && l.memoizedState !== null || st;
          l = Yt, u = st, Yt = a, (st = n) && !u ? (a = 2, (e.subtreeFlags & 8772) !== 0 && (a |= 1), Gl(
            t,
            e,
            a
          )) : kl(t, e), Yt = l, st = u;
        }
        break;
      case 30:
        kl(t, e), a & 512 && Jl(e, e.return);
        break;
      case 7:
        a & 512 && Jl(e, e.return);
      default:
        kl(t, e);
    }
  }
  function Lf(t, l) {
    for (t = t.child; t !== null; )
      Xd(t, l), t = t.sibling;
  }
  function Xd(t, l) {
    switch (t.tag) {
      case 5:
      case 26:
        try {
          var e = t.stateNode;
          if (l) {
            var a = e.style;
            typeof a.setProperty == "function" ? a.setProperty("display", "none", "important") : a.display = "none";
          } else {
            var u = t.stateNode, n = t.memoizedProps.style, i = n != null && n.hasOwnProperty("display") ? n.display : null;
            u.style.display = i == null || typeof i == "boolean" ? "" : ("" + i).trim();
          }
        } catch (r) {
          vt(t, t.return, r);
        }
        Zf(t, l);
        break;
      case 6:
        try {
          t.stateNode.nodeValue = l ? "" : t.memoizedProps, ct = !0;
        } catch (r) {
          vt(t, t.return, r);
        }
        break;
      case 18:
        try {
          var c = t.stateNode;
          l ? Uy(c, !0) : Uy(t.stateNode, !1);
        } catch (r) {
          vt(t, t.return, r);
        }
        break;
      case 22:
      case 23:
        t.memoizedState === null && Lf(t, l);
        break;
      default:
        Lf(t, l);
    }
  }
  function Zf(t, l) {
    if (t.subtreeFlags & 67108864)
      for (t = t.child; t !== null; ) {
        t: {
          var e = t, a = l;
          switch (e.tag) {
            case 4:
              Xd(e, a);
              break t;
            case 22:
              e.memoizedState === null && Zf(e, a);
              break t;
            default:
              Zf(e, a);
          }
        }
        t = t.sibling;
      }
  }
  function Ld(t) {
    var l = t.alternate;
    l !== null && (t.alternate = null, Ld(l)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (l = t.stateNode, l !== null && _n(l)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var Et = null, il = !1;
  function Yl(t, l, e) {
    for (e = e.child; e !== null; )
      Zd(t, l, e), e = e.sibling;
  }
  function Zd(t, l, e) {
    if (dl && typeof dl.onCommitFiberUnmount == "function")
      try {
        dl.onCommitFiberUnmount(Su, e);
      } catch {
      }
    switch (e.tag) {
      case 26:
        st || Vt(e, l), Yl(
          t,
          l,
          e
        ), e.memoizedState ? e.memoizedState.count-- : e.stateNode && !st && (e = e.stateNode, e.parentNode.removeChild(e));
        break;
      case 27:
        st || Vt(e, l), Wu(e);
        var a = Et, u = il;
        Je(e.type) && (Et = e.stateNode, il = !1), Yl(
          t,
          l,
          e
        ), Jy(
          e.stateNode,
          e.type,
          e.memoizedProps
        ), Et = a, il = u;
        break;
      case 5:
        st || Vt(e, l), Wu(e);
      case 6:
        if (e.tag === 6 && Wu(e), a = Et, u = il, Et = null, Yl(
          t,
          l,
          e
        ), Et = a, il = u, Et !== null)
          if (il)
            try {
              (Et.nodeType === 9 ? Et.body : Et.nodeName === "HTML" ? Et.ownerDocument.body : Et).removeChild(e.stateNode), ct = !0;
            } catch (n) {
              vt(
                e,
                l,
                n
              );
            }
          else
            try {
              Et.removeChild(e.stateNode), ct = !0;
            } catch (n) {
              vt(
                e,
                l,
                n
              );
            }
        break;
      case 18:
        Et !== null && (il ? (t = Et, Dy(
          t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
          e.stateNode
        ), mu(t)) : Dy(Et, e.stateNode));
        break;
      case 4:
        a = Et, u = il, Et = e.stateNode.containerInfo, il = !0, Yl(
          t,
          l,
          e
        ), Et = a, il = u;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Qe(2, e, l), st || Qe(4, e, l), Yl(
          t,
          l,
          e
        );
        break;
      case 1:
        st || (Vt(e, l), a = e.stateNode, typeof a.componentWillUnmount == "function" && Cd(
          e,
          l,
          a
        )), Yl(
          t,
          l,
          e
        );
        break;
      case 21:
        Yl(
          t,
          l,
          e
        );
        break;
      case 22:
        st = (a = st) || e.memoizedState !== null, Yl(
          t,
          l,
          e
        ), st = a;
        break;
      case 30:
        Vt(e, l), Yl(
          t,
          l,
          e
        );
        break;
      case 7:
        st || Vt(e, l), Yl(
          t,
          l,
          e
        );
        break;
      default:
        Yl(
          t,
          l,
          e
        );
    }
  }
  function Vd(t, l) {
    if (l.memoizedState === null && (t = l.alternate, t !== null && (t = t.memoizedState, t !== null))) {
      t = t.dehydrated;
      try {
        mu(t);
      } catch (e) {
        vt(l, l.return, e);
      }
    }
  }
  function Kd(t, l) {
    if (l.memoizedState === null && (t = l.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
      try {
        mu(t);
      } catch (e) {
        vt(l, l.return, e);
      }
  }
  function pv(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var l = t.stateNode;
        return l === null && (l = t.stateNode = new Gd()), l;
      case 22:
        return t = t.stateNode, l = t._retryCache, l === null && (l = t._retryCache = new Gd()), l;
      default:
        throw Error(o(435, t.tag));
    }
  }
  function zi(t, l) {
    var e = pv(t);
    l.forEach(function(a) {
      if (!e.has(a)) {
        e.add(a);
        var u = Dv.bind(null, t, a);
        a.then(u, u);
      }
    });
  }
  function Pt(t, l, e) {
    var a = l.deletions;
    if (a !== null)
      for (var u = 0; u < a.length; u++) {
        var n = a[u], i = t, c = l, r = c;
        t: for (; r !== null; ) {
          switch (r.tag) {
            case 27:
              if (Je(r.type)) {
                Et = r.stateNode, il = !1;
                break t;
              }
              break;
            case 5:
              Et = r.stateNode, il = !1;
              break t;
            case 3:
            case 4:
              Et = r.stateNode.containerInfo, il = !0;
              break t;
          }
          r = r.return;
        }
        if (Et === null) throw Error(o(160));
        Zd(i, c, n), Et = null, il = !1, i = n.alternate, i !== null && (i.return = null), n.return = null;
      }
    if (l.subtreeFlags & 13886)
      for (l = l.child; l !== null; )
        wd(l, t, e), l = l.sibling;
  }
  var ql = null;
  function wd(t, l, e) {
    var a = t.alternate, u = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (u & 4 && (a = t.updateQueue, a = a !== null ? a.events : null, a !== null))
          for (var n = 0; n < a.length; n++) {
            var i = a[n];
            i.ref.impl = i.nextImpl;
          }
        Pt(l, t, e), tl(t), u & 4 && (Qe(3, t, t.return), Ju(3, t), Qe(5, t, t.return));
        break;
      case 1:
        Pt(l, t, e), tl(t), u & 512 && (st || a === null || Vt(a, a.return)), u & 64 && Yt && (t = t.updateQueue, t !== null && (l = t.callbacks, l !== null && (e = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = e === null ? l : e.concat(l))));
        break;
      case 26:
        if (n = ql, Pt(l, t, e), tl(t), u & 512 && (st || a === null || Vt(a, a.return)), u & 4)
          if (u = a !== null ? a.memoizedState : null, e = t.memoizedState, a === null)
            if (e === null)
              if (t.stateNode === null)
                if (Yt)
                  t.stateNode = Cy(
                    t.type,
                    t.memoizedProps,
                    l.containerInfo,
                    t
                  );
                else {
                  t: {
                    l = t.type, e = t.memoizedProps, u = n.ownerDocument || n;
                    l: switch (l) {
                      case "title":
                        a = u.getElementsByTagName("title")[0], (!a || a[Tu] || a[Qt] || a.namespaceURI === "http://www.w3.org/2000/svg" || a.hasAttribute("itemprop")) && (a = u.createElement(l), u.head.insertBefore(
                          a,
                          u.querySelector("head > title")
                        )), Kt(a, l, e), a[Qt] = t, Ht(a), l = a;
                        break t;
                      case "link":
                        if (n = Py(
                          "link",
                          "href",
                          u
                        ).get(l + (e.href || ""))) {
                          for (i = 0; i < n.length; i++)
                            if (a = n[i], a.getAttribute("href") === (e.href == null || e.href === "" ? null : e.href) && a.getAttribute("rel") === (e.rel == null ? null : e.rel) && a.getAttribute("title") === (e.title == null ? null : e.title) && a.getAttribute("crossorigin") === (e.crossOrigin == null ? null : e.crossOrigin)) {
                              n.splice(i, 1);
                              break l;
                            }
                        }
                        a = u.createElement(l), Kt(a, l, e), u.head.appendChild(a);
                        break;
                      case "meta":
                        if (n = Py(
                          "meta",
                          "content",
                          u
                        ).get(l + (e.content || ""))) {
                          for (i = 0; i < n.length; i++)
                            if (a = n[i], a.getAttribute("content") === (e.content == null ? null : "" + e.content) && a.getAttribute("name") === (e.name == null ? null : e.name) && a.getAttribute("property") === (e.property == null ? null : e.property) && a.getAttribute("http-equiv") === (e.httpEquiv == null ? null : e.httpEquiv) && a.getAttribute("charset") === (e.charSet == null ? null : e.charSet)) {
                              n.splice(i, 1);
                              break l;
                            }
                        }
                        a = u.createElement(l), Kt(a, l, e), u.head.appendChild(a);
                        break;
                      default:
                        throw Error(o(468, l));
                    }
                    a[Qt] = t, Ht(a), l = a;
                  }
                  t.stateNode = l;
                }
              else
                Yt || xo(n, t.type, t.stateNode);
            else
              t.stateNode = ky(
                n,
                e,
                t.memoizedProps
              );
          else
            u !== e ? (u === null ? (l = a.stateNode, l === null || st || l.parentNode.removeChild(l)) : u.count--, e === null ? Yt || xo(n, t.type, t.stateNode) : ky(n, e, t.memoizedProps)) : e === null && t.stateNode !== null && Df(
              t,
              t.memoizedProps,
              a.memoizedProps
            );
        break;
      case 27:
        Pt(l, t, e), tl(t), u & 512 && (st || a === null || Vt(a, a.return)), a !== null && u & 4 && Df(
          t,
          t.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (n = Fl, Fl = !1, Pt(l, t, e), Fl = n, tl(t), u & 512 && (st || a === null || Vt(a, a.return)), t.flags & 32) {
          l = t.stateNode;
          try {
            Ra(l, ""), ct = !0;
          } catch (p) {
            vt(t, t.return, p);
          }
        }
        u & 4 && t.stateNode != null && (l = t.memoizedProps, Df(
          t,
          l,
          a !== null ? a.memoizedProps : l
        )), u & 1024 && (Qf = !0);
        break;
      case 6:
        if (Pt(l, t, e), tl(t), u & 4) {
          if (t.stateNode === null)
            throw Error(o(162));
          l = t.memoizedProps, e = t.stateNode;
          try {
            e.nodeValue = l, ct = !0;
          } catch (p) {
            vt(t, t.return, p);
          }
        }
        break;
      case 3:
        if (ct = !1, qi = null, n = ql, ql = un(l.containerInfo), Pt(l, t, e), ql = n, tl(t), u & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            mu(l.containerInfo);
          } catch (p) {
            vt(t, t.return, p);
          }
        Qf && (Qf = !1, Jd(t)), ct = !1;
        break;
      case 4:
        u = Fl, Fl = Yt, a = yr(), n = ql, ql = un(
          t.stateNode.containerInfo
        ), Pt(l, t, e), tl(t), ql = n, ct && $u && (Ti = !0), ct = a, Fl = u;
        break;
      case 12:
        Pt(l, t, e), tl(t);
        break;
      case 31:
        Pt(l, t, e), tl(t), u & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, zi(t, l)));
        break;
      case 13:
        Pt(l, t, e), tl(t), t.child.flags & 8192 && t.memoizedState !== null != (a !== null && a.memoizedState !== null) && (Ai = sl()), u & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, zi(t, l)));
        break;
      case 22:
        n = t.memoizedState !== null, i = a !== null && a.memoizedState !== null;
        var c = Yt, r = st, g = Fl;
        Yt = c || n, Fl = g || n, st = r || i, Pt(l, t, e), st = r, Fl = g, Yt = c, tl(t), u & 8192 && (l = t.stateNode, l._visibility = n ? l._visibility & -2 : l._visibility | 1, !n || a === null || i || Yt || st || (l = i || st, e = Yt, a = st, Yt = n || Yt, st = l, Xe(t, 2), Yt = e, st = a), !n && Fl || Lf(t, n)), u & 4 && (l = t.updateQueue, l !== null && (e = l.retryQueue, e !== null && (l.retryQueue = null, zi(t, e))));
        break;
      case 19:
        Pt(l, t, e), tl(t), u & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, zi(t, l)));
        break;
      case 30:
        u & 512 && (st || a === null || Vt(a, a.return)), u = yr(), n = $u, i = (e & 335544064) === e, c = t.memoizedProps, $u = i && se(
          c.default,
          c.update
        ) !== "none", Pt(l, t, e), tl(t), i && a !== null && ct && (t.flags |= 4), $u = n, ct = u;
        break;
      case 21:
        break;
      case 7:
        u & 512 && (st || a === null || Vt(a, a.return)), a && a.stateNode !== null && (a.stateNode._fragmentFiber = t);
      default:
        Pt(l, t, e), tl(t);
    }
  }
  function tl(t) {
    var l = t.flags;
    if (l & 2) {
      try {
        for (var e, a = t.return; a !== null; ) {
          if (Rd(a)) {
            e = a;
            break;
          }
          a = a.return;
        }
        a = null;
        for (var u = t.return; u !== null; ) {
          if (Mf(u)) {
            var n = u.stateNode;
            a === null ? a = [n] : a.push(n);
          }
          if (Cf(u)) break;
          u = u.return;
        }
        var i = a;
        if (e == null) throw Error(o(160));
        switch (e.tag) {
          case 27:
            var c = e.stateNode, r = Uf(t);
            gi(
              t,
              r,
              c,
              i
            );
            break;
          case 5:
            var g = e.stateNode;
            e.flags & 32 && (Ra(g, ""), e.flags &= -33);
            var p = Uf(t);
            gi(
              t,
              p,
              g,
              i
            );
            break;
          case 3:
          case 4:
            var O = e.stateNode.containerInfo, v = Uf(t);
            jf(
              t,
              v,
              O,
              i
            );
            break;
          default:
            throw Error(o(161));
        }
      } catch (b) {
        vt(t, t.return, b);
      }
      t.flags &= -3;
    }
    l & 4096 && (t.flags &= -4097);
  }
  function Jd(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var l = t;
        Jd(l), l.tag === 5 && l.flags & 1024 && (l = l.stateNode, yu = !0, l.reset(), yu = !1), t = t.sibling;
      }
  }
  function Fa(t, l) {
    if (l.subtreeFlags & 9270)
      for (l = l.child; l !== null; )
        Wd(l, t), l = l.sibling;
    else qd(l);
  }
  function Wd(t, l) {
    var e = t.alternate;
    if (e === null) Hf(t, !1);
    else
      switch (t.tag) {
        case 3:
          if (Xf = Il = !1, jd(), Fa(l, t), !Il && !Ti) {
            if (t = Wl, t !== null)
              for (var a = 0; a < t.length; a += 3) {
                e = t[a];
                var u = t[a + 1];
                Hy(e, t[a + 2]), e = e.ownerDocument.documentElement, e !== null && e.animate(
                  { opacity: [0, 0], pointerEvents: ["none", "none"] },
                  {
                    duration: 0,
                    fill: "forwards",
                    pseudoElement: "::view-transition-group(" + u + ")"
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
            )), Xf = !0;
          }
          Wl = null;
          break;
        case 5:
          Fa(l, t);
          break;
        case 4:
          a = Il, Il = !1, Fa(l, t), Il && (Ti = !0), Il = a;
          break;
        case 22:
          t.memoizedState === null && (e.memoizedState !== null ? Hf(t, !1) : Fa(l, t));
          break;
        case 30:
          a = Il, u = jd(), Il = !1, Fa(l, t), Il && (t.flags |= 4);
          var n = t.memoizedProps, i = t.stateNode;
          l = re(n, i), i = re(e.memoizedProps, i);
          var c = se(n.default, n.update);
          c === "none" ? l = !1 : (n = e.memoizedState, e.memoizedState = null, e = t.child, nl = 0, l = Gf(
            t,
            e,
            l,
            i,
            c,
            n,
            !0
          ), nl !== (n === null ? 0 : n.length) && (t.flags |= 32)), (t.flags & 4) !== 0 && l ? (au(
            t,
            t.memoizedProps.onUpdate
          ), Wl = u) : u !== null && (u.push.apply(u, Wl), Wl = u), Il = (t.flags & 32) !== 0 ? !0 : a;
          break;
        default:
          Fa(l, t);
      }
  }
  function kl(t, l) {
    if (l.subtreeFlags & 8772)
      for (l = l.child; l !== null; )
        Qd(t, l.alternate, l), l = l.sibling;
  }
  function Xe(t, l) {
    for (t = t.child; t !== null; ) {
      var e = t, a = l;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Qe(4, e, e.return), Xe(
            e,
            a
          );
          break;
        case 1:
          Vt(e, e.return);
          var u = e.stateNode;
          typeof u.componentWillUnmount == "function" && Cd(
            e,
            e.return,
            u
          ), Xe(
            e,
            a
          );
          break;
        case 27:
          (a & 2) !== 0 && Jy(
            e.stateNode,
            e.type,
            e.memoizedProps
          );
        case 5:
          Vt(e, e.return), e.tag !== 5 && e.tag !== 27 || Wu(e), Xe(
            e,
            a
          );
          break;
        case 6:
          Wu(e);
          break;
        case 26:
          Vt(e, e.return), u = e.stateNode, e.memoizedState !== null || u === null || st || u.parentNode.removeChild(u), Xe(
            e,
            a
          );
          break;
        case 22:
          e.memoizedState === null && Xe(
            e,
            a
          );
          break;
        case 30:
          Vt(e, e.return), Xe(
            e,
            a
          );
          break;
        case 7:
          Vt(e, e.return);
        default:
          Xe(
            e,
            a
          );
      }
      t = t.sibling;
    }
  }
  function Gl(t, l, e) {
    for (e = (l.subtreeFlags & 8772) !== 0 ? e : e & -2, l = l.child; l !== null; ) {
      var a = l.alternate, u = t, n = l, i = n.flags, c = (e & 1) !== 0;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Gl(
            u,
            n,
            e
          ), Ju(4, n);
          break;
        case 1:
          if (Gl(
            u,
            n,
            e
          ), a = n, u = a.stateNode, typeof u.componentDidMount == "function")
            try {
              u.componentDidMount();
            } catch (p) {
              vt(a, a.return, p);
            }
          if (a = n, u = a.updateQueue, u !== null) {
            var r = a.stateNode;
            try {
              var g = u.shared.hiddenCallbacks;
              if (g !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < g.length; u++)
                  hs(g[u], r);
            } catch (p) {
              vt(a, a.return, p);
            }
          }
          c && i & 64 && xd(n), Jl(n, n.return);
          break;
        case 27:
          (e & 2) !== 0 && Dd(n);
        case 5:
          n.tag !== 5 && n.tag !== 27 || Md(n), Gl(
            u,
            n,
            e
          ), c && a === null && i & 4 && Rf(n), Jl(n, n.return);
          break;
        case 6:
          Md(n);
          break;
        case 26:
          r = n.stateNode, n.memoizedState !== null || r === null || Yt || xo(
            un(r.ownerDocument),
            n.type,
            r
          ), Gl(
            u,
            n,
            e
          ), c && a === null && i & 4 && Rf(n), Jl(n, n.return);
          break;
        case 12:
          Gl(
            u,
            n,
            e
          );
          break;
        case 31:
          Gl(
            u,
            n,
            e
          ), c && i & 4 && Vd(u, n);
          break;
        case 13:
          Gl(
            u,
            n,
            e
          ), c && i & 4 && Kd(u, n);
          break;
        case 22:
          n.memoizedState === null && Gl(
            u,
            n,
            e
          ), Jl(n, n.return);
          break;
        case 30:
          Gl(
            u,
            n,
            e
          ), Jl(n, n.return);
          break;
        case 7:
          Jl(n, n.return);
        default:
          Gl(
            u,
            n,
            e
          );
      }
      l = l.sibling;
    }
  }
  function Vf(t, l) {
    var e = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), t = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (t = l.memoizedState.cachePool.pool), t !== e && (t != null && t.refCount++, e != null && ju(e));
  }
  function Kf(t, l) {
    t = null, l.alternate !== null && (t = l.alternate.memoizedState.cache), l = l.memoizedState.cache, l !== t && (l.refCount++, t != null && ju(t));
  }
  function Dl(t, l, e, a) {
    var u = (e & 335544064) === e;
    if (l.subtreeFlags & (u ? 10262 : 10256))
      for (l = l.child; l !== null; )
        $d(
          t,
          l,
          e,
          a
        ), l = l.sibling;
    else u && Yd(l);
  }
  function $d(t, l, e, a) {
    var u = (e & 335544064) === e;
    u && l.alternate === null && l.return !== null && l.return.alternate !== null && pi(l);
    var n = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        Dl(
          t,
          l,
          e,
          a
        ), n & 2048 && Ju(9, l);
        break;
      case 1:
        Dl(
          t,
          l,
          e,
          a
        );
        break;
      case 3:
        Dl(
          t,
          l,
          e,
          a
        ), u && Xf && (t = t.containerInfo, t = t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, t.style.viewTransitionName === "root" && (t.style.viewTransitionName = ""), t = t.ownerDocument.documentElement, t !== null && t.style.viewTransitionName === "none" && (t.style.viewTransitionName = "")), n & 2048 && (n = null, l.alternate !== null && (n = l.alternate.memoizedState.cache), l = l.memoizedState.cache, l !== n && (l.refCount++, n != null && ju(n)));
        break;
      case 12:
        if (n & 2048) {
          Dl(
            t,
            l,
            e,
            a
          ), n = l.stateNode;
          try {
            var i = l.memoizedProps, c = i.id, r = i.onPostCommit;
            typeof r == "function" && r(
              c,
              l.alternate === null ? "mount" : "update",
              n.passiveEffectDuration,
              -0
            );
          } catch (g) {
            vt(l, l.return, g);
          }
        } else
          Dl(
            t,
            l,
            e,
            a
          );
        break;
      case 31:
        Dl(
          t,
          l,
          e,
          a
        );
        break;
      case 13:
        Dl(
          t,
          l,
          e,
          a
        );
        break;
      case 23:
        break;
      case 22:
        i = l.stateNode, c = l.alternate, l.memoizedState !== null ? (u && c !== null && c.memoizedState === null && pi(c), i._visibility & 2 ? Dl(
          t,
          l,
          e,
          a
        ) : Fu(
          t,
          l
        )) : (u && c !== null && c.memoizedState !== null && pi(l), i._visibility & 2 ? Dl(
          t,
          l,
          e,
          a
        ) : (i._visibility |= 2, Ia(
          t,
          l,
          e,
          a,
          (l.subtreeFlags & 10256) !== 0 || !1
        ))), n & 2048 && Vf(c, l);
        break;
      case 24:
        Dl(
          t,
          l,
          e,
          a
        ), n & 2048 && Kf(l.alternate, l);
        break;
      case 30:
        u && (n = l.alternate, n !== null && ($l(n.child, !0), $l(l.child, !0))), Dl(
          t,
          l,
          e,
          a
        );
        break;
      default:
        Dl(
          t,
          l,
          e,
          a
        );
    }
  }
  function Ia(t, l, e, a, u) {
    for (u = u && ((l.subtreeFlags & 10256) !== 0 || !1), l = l.child; l !== null; ) {
      var n = t, i = l, c = e, r = a, g = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          Ia(
            n,
            i,
            c,
            r,
            u
          ), Ju(8, i);
          break;
        case 23:
          break;
        case 22:
          var p = i.stateNode;
          i.memoizedState !== null ? p._visibility & 2 ? Ia(
            n,
            i,
            c,
            r,
            u
          ) : Fu(
            n,
            i
          ) : (p._visibility |= 2, Ia(
            n,
            i,
            c,
            r,
            u
          )), u && g & 2048 && Vf(
            i.alternate,
            i
          );
          break;
        case 24:
          Ia(
            n,
            i,
            c,
            r,
            u
          ), u && g & 2048 && Kf(i.alternate, i);
          break;
        default:
          Ia(
            n,
            i,
            c,
            r,
            u
          );
      }
      l = l.sibling;
    }
  }
  function Fu(t, l) {
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; ) {
        var e = t, a = l, u = a.flags;
        switch (a.tag) {
          case 22:
            Fu(e, a), u & 2048 && Vf(
              a.alternate,
              a
            );
            break;
          case 24:
            Fu(e, a), u & 2048 && Kf(a.alternate, a);
            break;
          default:
            Fu(e, a);
        }
        l = l.sibling;
      }
  }
  var ba = 8192;
  function pa(t, l, e) {
    if (t.subtreeFlags & ba)
      for (t = t.child; t !== null; )
        Fd(
          t,
          l,
          e
        ), t = t.sibling;
  }
  function Fd(t, l, e) {
    switch (t.tag) {
      case 26:
        pa(
          t,
          l,
          e
        ), t.flags & ba && (t.memoizedState !== null ? Ah(
          e,
          ql,
          t.memoizedState,
          t.memoizedProps
        ) : (t = t.stateNode, (l & 335544128) === l && a0(e, t)));
        break;
      case 5:
        pa(
          t,
          l,
          e
        ), t.flags & ba && (t = t.stateNode, (l & 335544128) === l && a0(e, t));
        break;
      case 3:
      case 4:
        var a = ql;
        ql = un(t.stateNode.containerInfo), pa(
          t,
          l,
          e
        ), ql = a;
        break;
      case 22:
        t.memoizedState === null && (a = t.alternate, a !== null && a.memoizedState !== null ? (a = ba, ba = 16777216, pa(
          t,
          l,
          e
        ), ba = a) : pa(
          t,
          l,
          e
        ));
        break;
      case 30:
        if ((t.flags & ba) !== 0 && (a = t.memoizedProps.name, a != null && a !== "auto")) {
          var u = t.stateNode;
          u.paired = null, gl === null && (gl = /* @__PURE__ */ new Map()), gl.set(a, u);
        }
        pa(
          t,
          l,
          e
        );
        break;
      default:
        pa(
          t,
          l,
          e
        );
    }
  }
  function Id(t) {
    var l = t.alternate;
    if (l !== null && (t = l.child, t !== null)) {
      l.child = null;
      do
        l = t.sibling, t.sibling = null, t = l;
      while (t !== null);
    }
  }
  function Iu(t) {
    var l = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (l !== null)
        for (var e = 0; e < l.length; e++) {
          var a = l[e];
          qt = a, Pd(
            a,
            t
          );
        }
      Id(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        kd(t), t = t.sibling;
  }
  function kd(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Iu(t), t.flags & 2048 && Qe(9, t, t.return);
        break;
      case 3:
        Iu(t);
        break;
      case 12:
        Iu(t);
        break;
      case 22:
        var l = t.stateNode;
        t.memoizedState !== null && l._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (l._visibility &= -3, Oi(t)) : Iu(t);
        break;
      default:
        Iu(t);
    }
  }
  function Oi(t) {
    var l = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (l !== null)
        for (var e = 0; e < l.length; e++) {
          var a = l[e];
          qt = a, Pd(
            a,
            t
          );
        }
      Id(t);
    }
    for (t = t.child; t !== null; ) {
      switch (l = t, l.tag) {
        case 0:
        case 11:
        case 15:
          Qe(8, l, l.return), Oi(l);
          break;
        case 22:
          e = l.stateNode, e._visibility & 2 && (e._visibility &= -3, Oi(l));
          break;
        default:
          Oi(l);
      }
      t = t.sibling;
    }
  }
  function Pd(t, l) {
    for (; qt !== null; ) {
      var e = qt;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          Qe(8, e, l);
          break;
        case 23:
        case 22:
          if (e.memoizedState !== null && e.memoizedState.cachePool !== null) {
            var a = e.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          ju(e.memoizedState.cache);
      }
      if (a = e.child, a !== null) a.return = e, qt = a;
      else
        t: for (e = t; qt !== null; ) {
          a = qt;
          var u = a.sibling, n = a.return;
          if (Ld(a), a === e) {
            qt = null;
            break t;
          }
          if (u !== null) {
            u.return = n, qt = u;
            break t;
          }
          qt = n;
        }
    }
  }
  var Tv = {
    getCacheForType: function(t) {
      var l = Xt(Mt), e = l.data.get(t);
      return e === void 0 && (e = t(), l.data.set(t, e)), e;
    },
    cacheSignal: function() {
      return Xt(Mt).controller.signal;
    }
  }, Ev = typeof WeakMap == "function" ? WeakMap : Map, rt = 0, St = null, k = null, tt = 0, mt = 0, Sl = null, Le = !1, ka = !1, wf = !1, pe = 0, Nt = 0, Ze = 0, Ta = 0, Ni = 0, bl = 0, Pa = 0, ku = null, cl = null, Jf = !1, Ai = 0, ty = 0, _i = 1 / 0, xi = null, Ve = null, zt = 0, Ql = null, Ea = null, Pl = 0, Wf = 0, $f = null, ly = null, tu = null, lu = null, eu = null, Pu = 0, Ci = null;
  function pl() {
    return (rt & 2) !== 0 && tt !== 0 ? tt & -tt : Y.T !== null ? no() : ur();
  }
  function ey() {
    if (bl === 0)
      if ((tt & 536870912) === 0 || F) {
        var t = zn;
        zn <<= 1, (zn & 3932160) === 0 && (zn = 262144), bl = t;
      } else bl = 536870912;
    return t = Lt.current, t !== null && (t.flags |= 32), bl;
  }
  function au(t, l) {
    if (l != null) {
      var e = t.stateNode, a = e.ref;
      a === null && (a = e.ref = By(
        re(t.memoizedProps, e)
      )), lu === null && (lu = []), lu.push(l.bind(null, a));
    }
  }
  function fl(t, l, e) {
    (t === St && (mt === 2 || mt === 9) || t.cancelPendingCommit !== null) && (uu(t, 0), Ke(
      t,
      tt,
      bl,
      !1
    )), pu(t, e), ((rt & 2) === 0 || t !== St) && (t === St && ((rt & 2) === 0 && (Ta |= e), Nt === 4 && Ke(
      t,
      tt,
      bl,
      !1
    )), te(t));
  }
  function ay(t, l, e) {
    if ((rt & 6) !== 0) throw Error(o(327));
    var a = !e && (l & 127) === 0 && (l & t.expiredLanes) === 0 || bu(t, l), u = a ? Nv(t, l) : If(t, l, !0), n = a;
    do {
      if (u === 0) {
        ka && !a && Ke(t, l, 0, !1);
        break;
      } else {
        if (e = t.current.alternate, n && !zv(e)) {
          u = If(t, l, !1), n = !1;
          continue;
        }
        if (u === 2) {
          if (n = l, t.errorRecoveryDisabledLanes & n)
            var i = 0;
          else
            i = t.pendingLanes & -536870913, i = i !== 0 ? i : i & 536870912 ? 536870912 : 0;
          if (i !== 0) {
            l = i;
            t: {
              var c = t;
              u = ku;
              var r = c.current.memoizedState.isDehydrated;
              if (r && (uu(c, i).flags |= 256), i = If(
                c,
                i,
                !1
              ), i !== 2 && i !== 6) {
                if (wf && !r) {
                  c.errorRecoveryDisabledLanes |= n, Ta |= n, u = 4;
                  break t;
                }
                n = cl, cl = u, n !== null && (cl === null ? cl = n : cl.push.apply(
                  cl,
                  n
                ));
              }
              u = i;
            }
            if (n = !1, u !== 2) continue;
          }
        }
        if (u === 1) {
          uu(t, 0), Ke(t, l, 0, !0);
          break;
        }
        t: {
          switch (a = t, n = u, n) {
            case 0:
            case 1:
              throw Error(o(345));
            case 4:
              if ((l & 4194048) !== l && (l & 62914560) !== l)
                break;
            case 6:
              Ke(
                a,
                l,
                bl,
                !Le
              );
              break t;
            case 2:
              cl = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(o(329));
          }
          if ((l & 62914560) === l && (u = Ai + 300 - sl(), 10 < u)) {
            if (Ke(
              a,
              l,
              bl,
              !Le
            ), Nn(a, 0, !0) !== 0) break t;
            Pl = l, a.timeoutHandle = go(
              uy.bind(
                null,
                a,
                e,
                cl,
                xi,
                Jf,
                l,
                bl,
                Ta,
                Pa,
                Le,
                n,
                "Throttled",
                -0,
                0
              ),
              u
            );
            break t;
          }
          uy(
            a,
            e,
            cl,
            xi,
            Jf,
            l,
            bl,
            Ta,
            Pa,
            Le,
            n,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    te(t);
  }
  function uy(t, l, e, a, u, n, i, c, r, g, p, O, v, b) {
    t.timeoutHandle = -1;
    var C = l.subtreeFlags, j = (n & 335544064) === n;
    if (O = null, (j || C & 8192 || (C & 16785408) === 16785408) && (O = {
      stylesheets: null,
      count: 0,
      imgCount: 0,
      imgBytes: 0,
      suspenseyImages: [],
      waitingForImages: !0,
      waitingForViewTransition: !1,
      unsuspend: Vl
    }, gl = null, Fd(
      l,
      n,
      O
    ), j && (C = O, j = t.containerInfo, j = (j.nodeType === 9 ? j : j.ownerDocument).__reactViewTransition, j != null && (C.count++, C.waitingForViewTransition = !0, C = fn.bind(C), j.finished.then(C, C))), C = (n & 62914560) === n ? Ai - sl() : (n & 4194048) === n ? ty - sl() : 0, C = _h(
      O,
      C
    ), C !== null)) {
      Pl = n, t.cancelPendingCommit = C(
        dy.bind(
          null,
          t,
          l,
          n,
          e,
          a,
          u,
          i,
          c,
          r,
          g,
          p,
          O,
          null,
          v,
          b
        )
      ), Ke(t, n, i, !g);
      return;
    }
    dy(
      t,
      l,
      n,
      e,
      a,
      u,
      i,
      c,
      r,
      g,
      p,
      O
    );
  }
  function zv(t) {
    for (var l = t; ; ) {
      var e = l.tag;
      if ((e === 0 || e === 11 || e === 15) && l.flags & 16384 && (e = l.updateQueue, e !== null && (e = e.stores, e !== null)))
        for (var a = 0; a < e.length; a++) {
          var u = e[a], n = u.getSnapshot;
          u = u.value;
          try {
            if (!vl(n(), u)) return !1;
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
  function Ke(t, l, e, a) {
    l = Po(t, l), l &= ~Ni, l &= ~Ta, t.suspendedLanes |= l, t.pingedLanes &= ~l, a && (t.warmLanes |= l), a = t.expirationTimes;
    for (var u = l; 0 < u; ) {
      var n = 31 - yl(u), i = 1 << n;
      a[n] = -1, u &= ~i;
    }
    e !== 0 && lr(t, e, l);
  }
  function Mi() {
    return (rt & 6) === 0 ? (tn(0), !1) : !0;
  }
  function Ff() {
    if (k !== null) {
      if (mt === 0)
        var t = k.return;
      else
        t = k, me = oa = null, af(t), Va = null, Yu = 0, t = k;
      for (; t !== null; )
        _d(t.alternate, t), t = t.return;
      k = null;
    }
  }
  function uu(t, l) {
    var e = t.timeoutHandle;
    return e !== -1 && (t.timeoutHandle = -1, Jv(e)), e = t.cancelPendingCommit, e !== null && (t.cancelPendingCommit = null, e()), Pl = 0, Ff(), St = t, k = e = de(t.current, null), tt = l, mt = 0, Sl = null, Le = !1, ka = bu(t, l), wf = !1, Pa = bl = Ni = Ta = Ze = Nt = 0, cl = ku = null, Jf = !1, pe = Po(t, l), qn(), e;
  }
  function ny(t, l) {
    J = null, Y.H = oi, l === Za || l === $n ? (l = ds(), mt = 3) : l === Vc ? (l = ds(), mt = 4) : mt = l === bf ? 8 : l !== null && typeof l == "object" && typeof l.then == "function" ? 6 : 1, Sl = l, k === null && (Nt = 1, ri(
      t,
      xl(l, t.current)
    ));
  }
  function iy() {
    var t = Lt.current;
    return t === null ? !0 : (tt & 4194048) === tt ? Wt === null : (tt & 62914560) === tt || (tt & 536870912) !== 0 ? t === Wt : !1;
  }
  function cy() {
    var t = Y.H;
    return Y.H = oi, t === null ? oi : t;
  }
  function fy() {
    var t = Y.A;
    return Y.A = Tv, t;
  }
  function Ri() {
    Nt = 4, Le || (tt & 4194048) !== tt && Lt.current !== null || (ka = !0), (Ze & 134217727) === 0 && (Ta & 134217727) === 0 || St === null || Ke(
      St,
      tt,
      bl,
      !1
    );
  }
  function If(t, l, e) {
    var a = rt;
    rt |= 2;
    var u = cy(), n = fy();
    (St !== t || tt !== l) && (xi = null, uu(t, l)), l = !1;
    var i = Nt;
    t: do
      try {
        if (mt !== 0 && k !== null) {
          var c = k, r = Sl;
          switch (mt) {
            case 8:
              Ff(), i = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              Lt.current === null && (l = !0);
              var g = mt;
              if (mt = 0, Sl = null, nu(t, c, r, g), e && ka) {
                i = 0;
                break t;
              }
              break;
            default:
              g = mt, mt = 0, Sl = null, nu(t, c, r, g);
          }
        }
        Ov(), i = Nt;
        break;
      } catch (p) {
        ny(t, p);
      }
    while (!0);
    return l && t.shellSuspendCounter++, me = oa = null, rt = a, Y.H = u, Y.A = n, k === null && (St = null, tt = 0, qn()), i;
  }
  function Ov() {
    for (; k !== null; ) oy(k);
  }
  function Nv(t, l) {
    var e = rt;
    rt |= 2;
    var a = cy(), u = fy();
    St !== t || tt !== l ? (xi = null, _i = sl() + 500, uu(t, l)) : ka = bu(
      t,
      l
    );
    t: do
      try {
        if (mt !== 0 && k !== null) {
          l = k;
          var n = Sl;
          l: switch (mt) {
            case 1:
              mt = 0, Sl = null, nu(t, l, n, 1);
              break;
            case 2:
            case 9:
              if (rs(n)) {
                mt = 0, Sl = null, ry(l);
                break;
              }
              l = function() {
                mt !== 2 && mt !== 9 || St !== t || (mt = 7), te(t);
              }, n.then(l, l);
              break t;
            case 3:
              mt = 7;
              break t;
            case 4:
              mt = 5;
              break t;
            case 7:
              rs(n) ? (mt = 0, Sl = null, ry(l)) : (mt = 0, Sl = null, nu(t, l, n, 7));
              break;
            case 5:
              var i = null;
              switch (k.tag) {
                case 26:
                  i = k.memoizedState;
                case 5:
                case 27:
                  var c = k;
                  if (i ? l0(i) : c.stateNode.complete) {
                    mt = 0, Sl = null;
                    var r = c.sibling;
                    if (r !== null) k = r;
                    else {
                      var g = c.return;
                      g !== null ? (k = g, Di(g)) : k = null;
                    }
                    break l;
                  }
              }
              mt = 0, Sl = null, nu(t, l, n, 5);
              break;
            case 6:
              mt = 0, Sl = null, nu(t, l, n, 6);
              break;
            case 8:
              Ff(), Nt = 6;
              break t;
            default:
              throw Error(o(462));
          }
        }
        Av();
        break;
      } catch (p) {
        ny(t, p);
      }
    while (!0);
    return me = oa = null, Y.H = a, Y.A = u, rt = e, k !== null ? 0 : (St = null, tt = 0, qn(), Nt);
  }
  function Av() {
    for (; k !== null && !Z0(); )
      oy(k);
  }
  function oy(t) {
    var l = Nd(t.alternate, t, pe);
    t.memoizedProps = t.pendingProps, l === null ? Di(t) : k = l;
  }
  function ry(t) {
    var l = t, e = l.alternate;
    switch (l.tag) {
      case 15:
      case 0:
        l = Sd(
          e,
          l,
          l.pendingProps,
          l.type,
          void 0,
          tt
        );
        break;
      case 11:
        l = Sd(
          e,
          l,
          l.pendingProps,
          l.type.render,
          l.ref,
          tt
        );
        break;
      case 5:
        af(l);
        var a = l;
        a === Bt && (F ? (Vn(a), a.tag === 5 && a.stateNode != null && (pt = a.stateNode)) : (Vn(a), F = !0));
      default:
        _d(e, l), l = k = Pr(l, pe), l = Nd(e, l, pe);
    }
    t.memoizedProps = t.pendingProps, l === null ? Di(t) : k = l;
  }
  function nu(t, l, e, a) {
    me = oa = null, af(l), Va = null, Yu = 0;
    var u = l.return;
    try {
      if (yv(
        t,
        u,
        l,
        e,
        tt
      )) {
        Nt = 1, ri(
          t,
          xl(e, t.current)
        ), k = null;
        return;
      }
    } catch (n) {
      if (u !== null) throw k = u, n;
      Nt = 1, ri(
        t,
        xl(e, t.current)
      ), k = null;
      return;
    }
    l.flags & 32768 ? (F || a === 1 ? t = !0 : ka || (tt & 536870912) !== 0 ? t = !1 : (Le = t = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = Lt.current, a !== null && a.tag === 13 && (a.flags |= 16384))), sy(l, t)) : Di(l);
  }
  function Di(t) {
    var l = t;
    do {
      if ((l.flags & 32768) !== 0) {
        sy(
          l,
          Le
        );
        return;
      }
      t = l.return;
      var e = gv(
        l.alternate,
        l,
        pe
      );
      if (e !== null) {
        k = e;
        return;
      }
      if (l = l.sibling, l !== null) {
        k = l;
        return;
      }
      k = l = t;
    } while (l !== null);
    Nt === 0 && (Nt = 5);
  }
  function sy(t, l) {
    do {
      var e = Sv(t.alternate, t);
      if (e !== null) {
        e.flags &= 32767, k = e;
        return;
      }
      if (e = t.return, e !== null && (e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null), !l && (t = t.sibling, t !== null)) {
        k = t;
        return;
      }
      k = t = e;
    } while (t !== null);
    Nt = 6, k = null;
  }
  function dy(t, l, e, a, u, n, i, c, r, g, p, O) {
    t.cancelPendingCommit = null;
    do
      Ui();
    while (zt !== 0);
    if ((rt & 6) !== 0) throw Error(o(327));
    if (l !== null) {
      if (l === t.current) throw Error(o(177));
      t === St && (k = St = null, tt = 0), Ea = l, Ql = t, Pl = e, $f = u, ly = a, _v(
        t,
        l,
        e,
        i,
        c,
        r,
        O
      );
    }
  }
  function _v(t, l, e, a, u, n, i) {
    var c = l.lanes | l.childLanes;
    if (Wf = c, c |= Rc, P0(
      t,
      e,
      c,
      a,
      u,
      n
    ), lu = null, (e & 335544064) === e ? (eu = lv(t), a = 10262) : (eu = null, a = 10256), (l.subtreeFlags & a) !== 0 || (l.flags & a) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, Uv(Tn, function() {
      return lo(), null;
    })) : (t.callbackNode = null, t.callbackPriority = 0), Si = !1, a = (l.flags & 13878) !== 0, (l.subtreeFlags & 13878) !== 0 || a) {
      a = Y.T, Y.T = null, u = K.p, K.p = 2, n = rt, rt |= 4;
      try {
        bv(t, l, e);
      } finally {
        rt = n, K.p = u, Y.T = a;
      }
    }
    zt = 1, Si ? tu = Pv(
      i,
      t.containerInfo,
      eu,
      kf,
      Pf,
      Cv,
      to,
      lo,
      xv
    ) : (kf(), Pf(), to());
  }
  function xv(t) {
    if (zt !== 0) {
      var l = Ql.onRecoverableError;
      l(t, { componentStack: null });
    }
  }
  function Cv() {
    zt === 3 && (zt = 0, Wd(Ea, Ql), zt = 4);
  }
  function kf() {
    if (zt === 1) {
      zt = 0;
      var t = Ql, l = Ea, e = Pl, a = (l.flags & 13878) !== 0;
      if ((l.subtreeFlags & 13878) !== 0 || a) {
        a = Y.T, Y.T = null;
        var u = K.p;
        K.p = 2;
        var n = rt;
        rt |= 4;
        try {
          $u = Ti = !1, wd(l, t, e), e = mo;
          var i = Zr(t.containerInfo), c = e.focusedElem, r = e.selectionRange;
          if (i !== c && c && c.ownerDocument && Lr(
            c.ownerDocument.documentElement,
            c
          )) {
            if (r !== null && Ac(c)) {
              var g = r.start, p = r.end;
              if (p === void 0 && (p = g), "selectionStart" in c)
                c.selectionStart = g, c.selectionEnd = Math.min(
                  p,
                  c.value.length
                );
              else {
                var O = c.ownerDocument || document, v = O && O.defaultView || window;
                if (v.getSelection) {
                  var b = v.getSelection(), C = c.textContent.length, j = Math.min(r.start, C), W = r.end === void 0 ? j : Math.min(r.end, C);
                  !b.extend && j > W && (i = W, W = j, j = i);
                  var h = Xr(
                    c,
                    j
                  ), m = Xr(
                    c,
                    W
                  );
                  if (h && m && (b.rangeCount !== 1 || b.anchorNode !== h.node || b.anchorOffset !== h.offset || b.focusNode !== m.node || b.focusOffset !== m.offset)) {
                    var S = O.createRange();
                    S.setStart(h.node, h.offset), b.removeAllRanges(), j > W ? (b.addRange(S), b.extend(m.node, m.offset)) : (S.setEnd(m.node, m.offset), b.addRange(S));
                  }
                }
              }
            }
            for (O = [], b = c; b = b.parentNode; )
              b.nodeType === 1 && O.push({
                element: b,
                left: b.scrollLeft,
                top: b.scrollTop
              });
            for (typeof c.focus == "function" && c.focus(), c = 0; c < O.length; c++) {
              var z = O[c];
              z.element.scrollLeft = z.left, z.element.scrollTop = z.top;
            }
          }
          yu = !!yo, mo = yo = null;
        } finally {
          rt = n, K.p = u, Y.T = a;
        }
      }
      t.current = l, zt = 2;
    }
  }
  function Pf() {
    if (zt === 2) {
      zt = 0;
      var t = Ql, l = Ea, e = (l.flags & 8772) !== 0;
      if ((l.subtreeFlags & 8772) !== 0 || e) {
        e = Y.T, Y.T = null;
        var a = K.p;
        K.p = 2;
        var u = rt;
        rt |= 4;
        try {
          Qd(t, l.alternate, l);
        } finally {
          rt = u, K.p = a, Y.T = e;
        }
      }
      zt = 3;
    }
  }
  function to() {
    if (zt === 4 || zt === 3) {
      zt = 0;
      var t = tu;
      tu = null, V0();
      var l = Ql, e = Ea, a = Pl, u = ly, n = (a & 335544064) === a ? 10262 : 10256;
      if ((e.subtreeFlags & n) !== 0 || (e.flags & n) !== 0 ? zt = 5 : (zt = 0, Ea = Ql = null, yy(l, l.pendingLanes)), n = l.pendingLanes, n === 0 && (Ve = null), fc(a), e = e.stateNode, dl && typeof dl.onCommitFiberRoot == "function")
        try {
          dl.onCommitFiberRoot(
            Su,
            e,
            void 0,
            (e.current.flags & 128) === 128
          );
        } catch {
        }
      if (u !== null) {
        e = Y.T, n = K.p, K.p = 2, Y.T = null;
        try {
          for (var i = l.onRecoverableError, c = 0; c < u.length; c++) {
            var r = u[c];
            i(r.value, {
              componentStack: r.stack
            });
          }
        } finally {
          Y.T = e, K.p = n;
        }
      }
      if (u = lu, i = eu, eu = null, u !== null && (lu = null, i === null && (i = []), t !== null))
        for (r = 0; r < u.length; r++)
          e = (0, u[r])(
            i
          ), e !== void 0 && t.finished.finally(e);
      (Pl & 3) !== 0 && Ui(), te(l), n = l.pendingLanes, (a & 261930) !== 0 && (n & 42) !== 0 ? l === Ci ? Pu++ : (Pu = 0, Ci = l) : (Pu = 0, Ci = null), tn(0);
    }
  }
  function yy(t, l) {
    (t.pooledCacheLanes &= l) === 0 && (l = t.pooledCache, l != null && (t.pooledCache = null, ju(l)));
  }
  function Ui() {
    return tu !== null && (tu.skipTransition(), tu = null), kf(), Pf(), to(), lo();
  }
  function lo() {
    if (zt !== 5) return !1;
    var t = Ql, l = Wf;
    Wf = 0;
    var e = fc(Pl), a = Y.T, u = K.p;
    try {
      K.p = 32 > e ? 32 : e, Y.T = null, e = $f, $f = null;
      var n = Ql, i = Pl;
      if (zt = 0, Ea = Ql = null, Pl = 0, (rt & 6) !== 0) throw Error(o(331));
      var c = rt;
      if (rt |= 4, kd(n.current), $d(
        n,
        n.current,
        i,
        e
      ), rt = c, tn(0, !1), dl && typeof dl.onPostCommitFiberRoot == "function")
        try {
          dl.onPostCommitFiberRoot(Su, n);
        } catch {
        }
      return !0;
    } finally {
      K.p = u, Y.T = a, yy(t, l);
    }
  }
  function my(t, l, e) {
    l = xl(e, l), l = Sf(t.stateNode, l, 2), t = Be(t, l, 2), t !== null && (pu(t, 2), te(t));
  }
  function vt(t, l, e) {
    if (t.tag === 3)
      my(t, t, e);
    else
      for (; l !== null; ) {
        if (l.tag === 3) {
          my(
            l,
            t,
            e
          );
          break;
        } else if (l.tag === 1) {
          var a = l.stateNode;
          if (typeof l.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (Ve === null || !Ve.has(a))) {
            t = xl(e, t), e = rd(2), a = Be(l, e, 2), a !== null && (sd(
              e,
              a,
              l,
              t
            ), pu(a, 2), te(a));
            break;
          }
        }
        l = l.return;
      }
  }
  function eo(t, l, e) {
    var a = t.pingCache;
    if (a === null) {
      a = t.pingCache = new Ev();
      var u = /* @__PURE__ */ new Set();
      a.set(l, u);
    } else
      u = a.get(l), u === void 0 && (u = /* @__PURE__ */ new Set(), a.set(l, u));
    u.has(e) || (wf = !0, u.add(e), t = Mv.bind(null, t, l, e), l.then(t, t));
  }
  function Mv(t, l, e) {
    var a = t.pingCache;
    a !== null && a.delete(l), t.pingedLanes |= t.suspendedLanes & e, t.warmLanes &= ~e, St === t && (tt & e) === e && ((Nt === 4 || Nt === 3 && (tt & 62914560) === tt && 300 > sl() - Ai) && (rt & 2) === 0 ? uu(t, 0) : Ni |= e, Pa === tt && (Pa = 0)), te(t);
  }
  function vy(t, l) {
    l === 0 && (l = tr()), t = ia(t, l), t !== null && (pu(t, l), te(t));
  }
  function Rv(t) {
    var l = t.memoizedState, e = 0;
    l !== null && (e = l.retryLane), vy(t, e);
  }
  function Dv(t, l) {
    var e = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var a = t.stateNode, u = t.memoizedState;
        u !== null && (e = u.retryLane);
        break;
      case 19:
        a = t.stateNode;
        break;
      case 22:
        a = t.stateNode._retryCache;
        break;
      default:
        throw Error(o(314));
    }
    a !== null && a.delete(l), vy(t, e);
  }
  function Uv(t, l) {
    return uc(t, l);
  }
  var iu = null, cu = null, ao = !1, ji = !1, uo = !1, we = 0;
  function te(t) {
    t !== cu && t.next === null && (cu === null ? iu = cu = t : cu = cu.next = t), ji = !0, ao || (ao = !0, Hv());
  }
  function tn(t, l) {
    if (!uo && ji) {
      uo = !0;
      do
        for (var e = !1, a = iu; a !== null; ) {
          if (t !== 0) {
            var u = a.pendingLanes;
            if (u === 0) var n = 0;
            else {
              var i = a.suspendedLanes, c = a.pingedLanes;
              n = (1 << 31 - yl(42 | t) + 1) - 1, n &= u & ~(i & ~c), n = n & 201326741 ? n & 201326741 | 1 : n ? n | 2 : 0;
            }
            n !== 0 && (e = !0, by(a, n));
          } else
            n = tt, n = Nn(
              a,
              a === St ? n : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (n & 3) === 0 || bu(a, n) || (e = !0, by(a, n));
          a = a.next;
        }
      while (e);
      uo = !1;
    }
  }
  function jv() {
    hy();
  }
  function hy() {
    ji = ao = !1;
    var t = 0;
    we !== 0 && wv() && (t = we);
    for (var l = sl(), e = null, a = iu; a !== null; ) {
      var u = a.next, n = gy(a, l);
      n === 0 ? (a.next = null, e === null ? iu = u : e.next = u, u === null && (cu = e)) : (e = a, (t !== 0 || (n & 3) !== 0) && (ji = !0)), a = u;
    }
    zt !== 0 && zt !== 5 || tn(t), we !== 0 && (we = 0);
  }
  function gy(t, l) {
    for (var e = t.suspendedLanes, a = t.pingedLanes, u = t.expirationTimes, n = t.pendingLanes & -62914561; 0 < n; ) {
      var i = 31 - yl(n), c = 1 << i, r = u[i];
      r === -1 ? ((c & e) === 0 || (c & a) !== 0) && (u[i] = k0(c, l)) : r <= l && (t.expiredLanes |= c), n &= ~c;
    }
    if (l = St, e = tt, e = Nn(
      t,
      t === l ? e : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), a = t.callbackNode, e === 0 || t === l && (mt === 2 || mt === 9) || t.cancelPendingCommit !== null)
      return a !== null && a !== null && nc(a), t.callbackNode = null, t.callbackPriority = 0;
    if ((e & 3) === 0 || bu(t, e)) {
      if (l = e & -e, l === t.callbackPriority) return l;
      switch (a !== null && nc(a), fc(e)) {
        case 2:
        case 8:
          e = Io;
          break;
        case 32:
          e = Tn;
          break;
        case 268435456:
          e = ko;
          break;
        default:
          e = Tn;
      }
      return a = Sy.bind(null, t), e = uc(e, a), t.callbackPriority = l, t.callbackNode = e, l;
    }
    return a !== null && a !== null && nc(a), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function Sy(t, l) {
    if (zt !== 0 && zt !== 5)
      return t.callbackNode = null, t.callbackPriority = 0, null;
    var e = t.callbackNode;
    if (Ui() && t.callbackNode !== e)
      return null;
    var a = tt;
    return a = Nn(
      t,
      t === St ? a : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), a === 0 ? null : (ay(t, a, l), gy(t, sl()), t.callbackNode != null && t.callbackNode === e ? Sy.bind(null, t) : null);
  }
  function by(t, l) {
    if (Ui()) return null;
    ay(t, l, !0);
  }
  function Hv() {
    Wv(function() {
      (rt & 6) !== 0 ? uc(
        Fo,
        jv
      ) : hy();
    });
  }
  function no() {
    if (we === 0) {
      var t = da;
      t === 0 && (t = En, En <<= 1, (En & 261888) === 0 && (En = 256)), we = t;
    }
    return we;
  }
  function py(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : Mn(t);
  }
  function Bv(t, l, e, a, u) {
    if (l === "submit" && e && e.stateNode === u) {
      var n = py(
        (u[al] || null).action
      ), i = a.submitter;
      i && (l = (l = i[al] || null) ? py(l.formAction) : i.getAttribute("formAction"), l !== null && (n = l, i = null));
      var c = new jn(
        "action",
        "action",
        null,
        a,
        u
      );
      t.push({
        event: c,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (a.defaultPrevented) {
                if (we !== 0) {
                  var r = new FormData(u, i);
                  yf(
                    e,
                    {
                      pending: !0,
                      data: r,
                      method: u.method,
                      action: n
                    },
                    null,
                    r
                  );
                }
              } else
                typeof n == "function" && (c.preventDefault(), r = new FormData(u, i), yf(
                  e,
                  {
                    pending: !0,
                    data: r,
                    method: u.method,
                    action: n
                  },
                  n,
                  r
                ));
            },
            currentTarget: u
          }
        ]
      });
    }
  }
  for (var io = 0; io < Mc.length; io++) {
    var co = Mc[io], Yv = co.toLowerCase(), qv = co[0].toUpperCase() + co.slice(1);
    Bl(
      Yv,
      "on" + qv
    );
  }
  Bl(wr, "onAnimationEnd"), Bl(Jr, "onAnimationIteration"), Bl(Wr, "onAnimationStart"), Bl("dblclick", "onDoubleClick"), Bl("focusin", "onFocus"), Bl("focusout", "onBlur"), Bl(Jm, "onTransitionRun"), Bl(Wm, "onTransitionStart"), Bl($m, "onTransitionCancel"), Bl($r, "onTransitionEnd"), Ca("onMouseEnter", ["mouseout", "mouseover"]), Ca("onMouseLeave", ["mouseout", "mouseover"]), Ca("onPointerEnter", ["pointerout", "pointerover"]), Ca("onPointerLeave", ["pointerout", "pointerover"]), aa(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), aa(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), aa("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), aa(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), aa(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), aa(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var ln = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Gv = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ln)
  );
  function Ty(t, l) {
    l = (l & 4) !== 0;
    for (var e = 0; e < t.length; e++) {
      var a = t[e], u = a.event;
      a = a.listeners;
      t: {
        var n = void 0;
        if (l)
          for (var i = a.length - 1; 0 <= i; i--) {
            var c = a[i], r = c.instance, g = c.currentTarget;
            if (c = c.listener, r !== n && u.isPropagationStopped())
              break t;
            n = c, u.currentTarget = g;
            try {
              n(u);
            } catch (p) {
              Yn(p);
            }
            u.currentTarget = null, n = r;
          }
        else
          for (i = 0; i < a.length; i++) {
            if (c = a[i], r = c.instance, g = c.currentTarget, c = c.listener, r !== n && u.isPropagationStopped())
              break t;
            n = c, u.currentTarget = g;
            try {
              n(u);
            } catch (p) {
              Yn(p);
            }
            u.currentTarget = null, n = r;
          }
      }
    }
  }
  function P(t, l) {
    var e = l[ir];
    e === void 0 && (e = l[ir] = /* @__PURE__ */ new Set());
    var a = t + "__bubble";
    e.has(a) || (Ey(l, t, 2, !1), e.add(a));
  }
  function fo(t, l, e) {
    var a = 0;
    l && (a |= 4), Ey(
      e,
      t,
      a,
      l
    );
  }
  var Hi = "_reactListening" + Math.random().toString(36).slice(2);
  function oo(t) {
    if (!t[Hi]) {
      t[Hi] = !0, or.forEach(function(e) {
        e !== "selectionchange" && (Gv.has(e) || fo(e, !1, t), fo(e, !0, t));
      });
      var l = t.nodeType === 9 ? t : t.ownerDocument;
      l === null || l[Hi] || (l[Hi] = !0, fo("selectionchange", !1, l));
    }
  }
  function Ey(t, l, e, a) {
    switch (s0(l)) {
      case 2:
        var u = Rh;
        break;
      case 8:
        u = Dh;
        break;
      default:
        u = Mo;
    }
    e = u.bind(
      null,
      l,
      e,
      t
    ), u = void 0, !hc || l !== "touchstart" && l !== "touchmove" && l !== "wheel" || (u = !0), a ? u !== void 0 ? t.addEventListener(l, e, {
      capture: !0,
      passive: u
    }) : t.addEventListener(l, e, !0) : u !== void 0 ? t.addEventListener(l, e, {
      passive: u
    }) : t.addEventListener(l, e, !1);
  }
  function ro(t, l, e, a, u) {
    var n = a;
    if ((l & 1) === 0 && (l & 2) === 0 && a !== null)
      t: for (; ; ) {
        if (a === null) return;
        var i = a.tag;
        if (i === 3 || i === 4) {
          var c = a.stateNode.containerInfo;
          if (c === u) break;
          if (i === 4)
            for (i = a.return; i !== null; ) {
              var r = i.tag;
              if ((r === 3 || r === 4) && i.stateNode.containerInfo === u)
                return;
              i = i.return;
            }
          for (; c !== null; ) {
            if (i = ea(c), i === null) return;
            if (r = i.tag, r === 5 || r === 6 || r === 26 || r === 27) {
              a = n = i;
              continue t;
            }
            c = c.parentNode;
          }
        }
        a = a.return;
      }
    Er(function() {
      var g = n, p = mc(e), O = [];
      t: {
        var v = Fr.get(t);
        if (v !== void 0) {
          var b = jn, C = t;
          switch (t) {
            case "keypress":
              if (Dn(e) === 0) break t;
            case "keydown":
            case "keyup":
              b = zm;
              break;
            case "focusin":
              C = "focus", b = pc;
              break;
            case "focusout":
              C = "blur", b = pc;
              break;
            case "beforeblur":
            case "afterblur":
              b = pc;
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
              b = Nr;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              b = sm;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              b = xm;
              break;
            case wr:
            case Jr:
            case Wr:
              b = mm;
              break;
            case $r:
              b = Mm;
              break;
            case "scroll":
            case "scrollend":
              b = om;
              break;
            case "wheel":
              b = Dm;
              break;
            case "copy":
            case "cut":
            case "paste":
              b = hm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              b = _r;
              break;
            case "submit":
              b = Am;
              break;
            case "toggle":
            case "beforetoggle":
              b = jm;
          }
          var j = (l & 4) !== 0, W = !j && (t === "scroll" || t === "scrollend"), h = j ? v !== null ? v + "Capture" : null : v;
          j = [];
          for (var m = g, S; m !== null; ) {
            var z = m;
            if (S = z.stateNode, z = z.tag, z !== 5 && z !== 26 && z !== 27 || S === null || h === null || (z = zu(m, h), z != null && j.push(
              en(m, z, S)
            )), W) break;
            m = m.return;
          }
          0 < j.length && (v = new b(
            v,
            C,
            null,
            e,
            p
          ), O.push({ event: v, listeners: j }));
        }
      }
      if ((l & 7) === 0) {
        t: {
          if (b = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout", b && e !== yc && (C = e.relatedTarget || e.fromElement) && (ea(C) || C[Aa]))
            break t;
          (v || b) && (C = p.window === p ? p : (b = p.ownerDocument) ? b.defaultView || b.parentWindow : window, v ? (b = e.relatedTarget || e.toElement, v = g, b = b ? ea(b) : null, b !== null && (W = x(b), j = b.tag, b !== W || j !== 5 && j !== 27 && j !== 6) && (b = null)) : (v = null, b = g), v !== b && (j = Nr, z = "onMouseLeave", h = "onMouseEnter", m = "mouse", (t === "pointerout" || t === "pointerover") && (j = _r, z = "onPointerLeave", h = "onPointerEnter", m = "pointer"), W = v == null ? C : Eu(v), S = b == null ? C : Eu(b), C = new j(
            z,
            m + "leave",
            v,
            e,
            p
          ), C.target = W, C.relatedTarget = S, z = null, ea(p) === g && (j = new j(
            h,
            m + "enter",
            b,
            e,
            p
          ), j.target = S, j.relatedTarget = W, z = j), W = z, j = v && b ? Ft(
            v,
            b,
            Qv
          ) : null, v !== null && zy(
            O,
            C,
            v,
            j,
            !1
          ), b !== null && W !== null && zy(
            O,
            W,
            b,
            j,
            !0
          )));
        }
        t: {
          if (v = g ? Eu(g) : window, b = v.nodeName && v.nodeName.toLowerCase(), b === "select" || b === "input" && v.type === "file")
            var U = Hr;
          else if (Ur(v))
            if (Br)
              U = Vm;
            else {
              U = Lm;
              var lt = Xm;
            }
          else
            b = v.nodeName, !b || b.toLowerCase() !== "input" || v.type !== "checkbox" && v.type !== "radio" ? g && dc(g.elementType) && (U = Hr) : U = Zm;
          if (U && (U = U(t, g))) {
            jr(
              O,
              U,
              e,
              p
            );
            break t;
          }
          lt && lt(t, v, g);
        }
        switch (lt = g ? Eu(g) : window, t) {
          case "focusin":
            (Ur(lt) || lt.contentEditable === "true") && (Ha = lt, _c = g, Ru = null);
            break;
          case "focusout":
            Ru = _c = Ha = null;
            break;
          case "mousedown":
            xc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            xc = !1, Vr(O, e, p);
            break;
          case "selectionchange":
            if (wm) break;
          case "keydown":
          case "keyup":
            Vr(O, e, p);
        }
        var Q;
        if (Ec)
          t: {
            switch (t) {
              case "compositionstart":
                var Z = "onCompositionStart";
                break t;
              case "compositionend":
                Z = "onCompositionEnd";
                break t;
              case "compositionupdate":
                Z = "onCompositionUpdate";
                break t;
            }
            Z = void 0;
          }
        else
          ja ? Rr(t, e) && (Z = "onCompositionEnd") : t === "keydown" && e.keyCode === 229 && (Z = "onCompositionStart");
        Z && (xr && e.locale !== "ko" && (ja || Z !== "onCompositionStart" ? Z === "onCompositionEnd" && ja && (Q = zr()) : (_e = p, gc = "value" in _e ? _e.value : _e.textContent, ja = !0)), lt = Bi(g, Z), 0 < lt.length && (Z = new Ar(
          Z,
          t,
          null,
          e,
          p
        ), O.push({ event: Z, listeners: lt }), Q ? Z.data = Q : (Q = Dr(e), Q !== null && (Z.data = Q)))), (Q = Bm ? Ym(t, e) : qm(t, e)) && (Z = Bi(g, "onBeforeInput"), 0 < Z.length && (lt = new Ar(
          "onBeforeInput",
          "beforeinput",
          null,
          e,
          p
        ), O.push({
          event: lt,
          listeners: Z
        }), lt.data = Q)), Bv(
          O,
          t,
          g,
          e,
          p
        );
      }
      Ty(O, l);
    });
  }
  function en(t, l, e) {
    return {
      instance: t,
      listener: l,
      currentTarget: e
    };
  }
  function Bi(t, l) {
    for (var e = l + "Capture", a = []; t !== null; ) {
      var u = t, n = u.stateNode;
      if (u = u.tag, u !== 5 && u !== 26 && u !== 27 || n === null || (u = zu(t, e), u != null && a.unshift(
        en(t, u, n)
      ), u = zu(t, l), u != null && a.push(
        en(t, u, n)
      )), t.tag === 3) return a;
      t = t.return;
    }
    return [];
  }
  function Qv(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function zy(t, l, e, a, u) {
    for (var n = l._reactName, i = []; e !== null && e !== a; ) {
      var c = e, r = c.alternate, g = c.stateNode;
      if (c = c.tag, r !== null && r === a) break;
      c !== 5 && c !== 26 && c !== 27 || g === null || (r = g, u ? (g = zu(e, n), g != null && i.unshift(
        en(e, g, r)
      )) : u || (g = zu(e, n), g != null && i.push(
        en(e, g, r)
      ))), e = e.return;
    }
    i.length !== 0 && t.push({ event: l, listeners: i });
  }
  var Xv = /\r\n?/g, Lv = /\u0000|\uFFFD/g;
  function Oy(t) {
    return (typeof t == "string" ? t : "" + t).replace(Xv, `
`).replace(Lv, "");
  }
  function Ny(t, l) {
    return l = Oy(l), Oy(t) === l;
  }
  function ht(t, l, e, a, u, n) {
    switch (e) {
      case "children":
        if (typeof a == "string")
          l === "body" || l === "textarea" && a === "" || Ra(t, a);
        else if (typeof a == "number" || typeof a == "bigint")
          l !== "body" && Ra(t, "" + a);
        else return;
        break;
      case "className":
        Cn(t, "class", a);
        break;
      case "tabIndex":
        Cn(t, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Cn(t, e, a);
        break;
      case "style":
        pr(t, a, n);
        return;
      case "data":
        if (l !== "object") {
          Cn(t, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (l !== "a" || e !== "href")) {
          t.removeAttribute(e);
          break;
        }
        if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(e);
          break;
        }
        a = Mn(a), t.setAttribute(e, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          t.setAttribute(
            e,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof n == "function" && (e === "formAction" ? (l !== "input" && ht(t, l, "name", u.name, u, null), ht(
            t,
            l,
            "formEncType",
            u.formEncType,
            u,
            null
          ), ht(
            t,
            l,
            "formMethod",
            u.formMethod,
            u,
            null
          ), ht(
            t,
            l,
            "formTarget",
            u.formTarget,
            u,
            null
          )) : (ht(t, l, "encType", u.encType, u, null), ht(t, l, "method", u.method, u, null), ht(t, l, "target", u.target, u, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(e);
          break;
        }
        a = Mn(a), t.setAttribute(e, a);
        break;
      case "onClick":
        a != null && (t.onclick = Vl);
        return;
      case "onScroll":
        a != null && P("scroll", t);
        return;
      case "onScrollEnd":
        a != null && P("scrollend", t);
        return;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(o(61));
          if (e = a.__html, e != null) {
            if (u.children != null) throw Error(o(60));
            n?.__html !== e && (t.innerHTML = e);
          }
        }
        break;
      case "multiple":
        t.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        t.muted = a && typeof a != "function" && typeof a != "symbol";
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
          t.removeAttribute("xlink:href");
          break;
        }
        e = Mn(a), t.setAttributeNS(
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
        a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(e, a) : t.removeAttribute(e);
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
        a && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(e, "") : t.removeAttribute(e);
        break;
      case "capture":
      case "download":
        a === !0 ? t.setAttribute(e, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(e, a) : t.removeAttribute(e);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? t.setAttribute(e, a) : t.removeAttribute(e);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? t.removeAttribute(e) : t.setAttribute(e, a);
        break;
      case "popover":
        P("beforetoggle", t), P("toggle", t), xn(t, "popover", a);
        break;
      case "xlinkActuate":
        fe(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          a
        );
        break;
      case "xlinkArcrole":
        fe(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          a
        );
        break;
      case "xlinkRole":
        fe(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          a
        );
        break;
      case "xlinkShow":
        fe(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          a
        );
        break;
      case "xlinkTitle":
        fe(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          a
        );
        break;
      case "xlinkType":
        fe(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          a
        );
        break;
      case "xmlBase":
        fe(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          a
        );
        break;
      case "xmlLang":
        fe(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          a
        );
        break;
      case "xmlSpace":
        fe(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          a
        );
        break;
      case "is":
        xn(t, "is", a);
        break;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N")
          e = cm.get(e) || e, xn(t, e, a);
        else return;
    }
    ct = !0;
  }
  function so(t, l, e, a, u, n) {
    switch (e) {
      case "style":
        pr(t, a, n);
        return;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(o(61));
          if (e = a.__html, e != null) {
            if (u.children != null) throw Error(o(60));
            n?.__html !== e && (t.innerHTML = e);
          }
        }
        break;
      case "children":
        if (typeof a == "string") Ra(t, a);
        else if (typeof a == "number" || typeof a == "bigint")
          Ra(t, "" + a);
        else return;
        break;
      case "onScroll":
        a != null && P("scroll", t);
        return;
      case "onScrollEnd":
        a != null && P("scrollend", t);
        return;
      case "onClick":
        a != null && (t.onclick = Vl);
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
        if (!rr.hasOwnProperty(e))
          t: {
            if (e[0] === "o" && e[1] === "n" && (u = e.endsWith("Capture"), n = e.slice(2, u ? e.length - 7 : void 0), l = t[al] || null, l = l != null ? l[e] : null, typeof l == "function" && t.removeEventListener(n, l, u), typeof a == "function")) {
              typeof l != "function" && l !== null && (e in t ? t[e] = null : t.hasAttribute(e) && t.removeAttribute(e)), t.addEventListener(n, a, u);
              break t;
            }
            ct = !0, e in t ? t[e] = a : a === !0 ? t.setAttribute(e, "") : xn(t, e, a);
          }
        return;
    }
    ct = !0;
  }
  function Kt(t, l, e) {
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
        P("error", t), P("load", t);
        var a = !1, u = !1, n;
        for (n in e)
          if (e.hasOwnProperty(n)) {
            var i = e[n];
            if (i != null)
              switch (n) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  u = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(o(137, l));
                default:
                  ht(t, l, n, i, e, null);
              }
          }
        u && ht(t, l, "srcSet", e.srcSet, e, null), a && ht(t, l, "src", e.src, e, null);
        return;
      case "input":
        P("invalid", t);
        var c = n = i = u = null, r = null, g = null;
        for (a in e)
          if (e.hasOwnProperty(a)) {
            var p = e[a];
            if (p != null)
              switch (a) {
                case "name":
                  u = p;
                  break;
                case "type":
                  i = p;
                  break;
                case "checked":
                  r = p;
                  break;
                case "defaultChecked":
                  g = p;
                  break;
                case "value":
                  n = p;
                  break;
                case "defaultValue":
                  c = p;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (p != null)
                    throw Error(o(137, l));
                  break;
                default:
                  ht(t, l, a, p, e, null);
              }
          }
        hr(
          t,
          n,
          c,
          r,
          g,
          i,
          u,
          !1
        );
        return;
      case "select":
        P("invalid", t), a = i = n = null;
        for (u in e)
          if (e.hasOwnProperty(u) && (c = e[u], c != null))
            switch (u) {
              case "value":
                n = c;
                break;
              case "defaultValue":
                i = c;
                break;
              case "multiple":
                a = c;
              default:
                ht(t, l, u, c, e, null);
            }
        l = n, e = i, t.multiple = !!a, l != null ? Ma(t, !!a, l, !1) : e != null && Ma(t, !!a, e, !0);
        return;
      case "textarea":
        P("invalid", t), n = u = a = null;
        for (i in e)
          if (e.hasOwnProperty(i) && (c = e[i], c != null))
            switch (i) {
              case "value":
                a = c;
                break;
              case "defaultValue":
                u = c;
                break;
              case "children":
                n = c;
                break;
              case "dangerouslySetInnerHTML":
                if (c != null) throw Error(o(91));
                break;
              default:
                ht(t, l, i, c, e, null);
            }
        Sr(t, a, u, n);
        return;
      case "option":
        for (r in e)
          e.hasOwnProperty(r) && (a = e[r], a != null) && (r === "selected" ? t.selected = a && typeof a != "function" && typeof a != "symbol" : ht(t, l, r, a, e, null));
        return;
      case "dialog":
        P("beforetoggle", t), P("toggle", t), P("cancel", t), P("close", t);
        break;
      case "iframe":
      case "object":
        P("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < ln.length; a++)
          P(ln[a], t);
        break;
      case "image":
        P("error", t), P("load", t);
        break;
      case "details":
        P("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        P("error", t), P("load", t);
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
        for (g in e)
          if (e.hasOwnProperty(g) && (a = e[g], a != null))
            switch (g) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(o(137, l));
              default:
                ht(t, l, g, a, e, null);
            }
        return;
      default:
        if (dc(l)) {
          for (p in e)
            e.hasOwnProperty(p) && (a = e[p], a !== void 0 && so(
              t,
              l,
              p,
              a,
              e,
              void 0
            ));
          return;
        }
    }
    for (c in e)
      e.hasOwnProperty(c) && (a = e[c], a != null && ht(t, l, c, a, e, null));
  }
  var Zv = {};
  function Vv(t, l, e, a) {
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
        var u = null, n = null, i = null, c = null, r = null, g = null, p = null;
        for (b in e) {
          var O = e[b];
          if (e.hasOwnProperty(b) && O != null)
            switch (b) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                r = O;
              default:
                a.hasOwnProperty(b) || ht(t, l, b, null, a, O);
            }
        }
        for (var v in a) {
          var b = a[v];
          if (O = e[v], a.hasOwnProperty(v) && (b != null || O != null))
            switch (v) {
              case "type":
                b !== O && (ct = !0), n = b;
                break;
              case "name":
                b !== O && (ct = !0), u = b;
                break;
              case "checked":
                b !== O && (ct = !0), g = b;
                break;
              case "defaultChecked":
                b !== O && (ct = !0), p = b;
                break;
              case "value":
                b !== O && (ct = !0), i = b;
                break;
              case "defaultValue":
                b !== O && (ct = !0), c = b;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (b != null)
                  throw Error(o(137, l));
                break;
              default:
                b !== O && ht(
                  t,
                  l,
                  v,
                  b,
                  a,
                  O
                );
            }
        }
        rc(
          t,
          i,
          c,
          r,
          g,
          p,
          n,
          u
        );
        return;
      case "select":
        b = i = c = v = null;
        for (n in e)
          if (r = e[n], e.hasOwnProperty(n) && r != null)
            switch (n) {
              case "value":
                break;
              case "multiple":
                b = r;
              default:
                a.hasOwnProperty(n) || ht(
                  t,
                  l,
                  n,
                  null,
                  a,
                  r
                );
            }
        for (u in a)
          if (n = a[u], r = e[u], a.hasOwnProperty(u) && (n != null || r != null))
            switch (u) {
              case "value":
                n !== r && (ct = !0), v = n;
                break;
              case "defaultValue":
                n !== r && (ct = !0), c = n;
                break;
              case "multiple":
                n !== r && (ct = !0), i = n;
              default:
                n !== r && ht(
                  t,
                  l,
                  u,
                  n,
                  a,
                  r
                );
            }
        l = c, e = i, a = b, v != null ? Ma(t, !!e, v, !1) : !!a != !!e && (l != null ? Ma(t, !!e, l, !0) : Ma(t, !!e, e ? [] : "", !1));
        return;
      case "textarea":
        b = v = null;
        for (c in e)
          if (u = e[c], e.hasOwnProperty(c) && u != null && !a.hasOwnProperty(c))
            switch (c) {
              case "value":
                break;
              case "children":
                break;
              default:
                ht(t, l, c, null, a, u);
            }
        for (i in a)
          if (u = a[i], n = e[i], a.hasOwnProperty(i) && (u != null || n != null))
            switch (i) {
              case "value":
                u !== n && (ct = !0), v = u;
                break;
              case "defaultValue":
                u !== n && (ct = !0), b = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(o(91));
                break;
              default:
                u !== n && ht(t, l, i, u, a, n);
            }
        gr(t, v, b);
        return;
      case "option":
        for (var C in e)
          v = e[C], e.hasOwnProperty(C) && v != null && !a.hasOwnProperty(C) && (C === "selected" ? t.selected = !1 : ht(
            t,
            l,
            C,
            null,
            a,
            v
          ));
        for (r in a)
          v = a[r], b = e[r], a.hasOwnProperty(r) && v !== b && (v != null || b != null) && (r === "selected" ? (v !== b && (ct = !0), t.selected = v && typeof v != "function" && typeof v != "symbol") : ht(
            t,
            l,
            r,
            v,
            a,
            b
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
        for (var j in e)
          v = e[j], e.hasOwnProperty(j) && v != null && !a.hasOwnProperty(j) && ht(t, l, j, null, a, v);
        for (g in a)
          if (v = a[g], b = e[g], a.hasOwnProperty(g) && v !== b && (v != null || b != null))
            switch (g) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (v != null)
                  throw Error(o(137, l));
                break;
              default:
                ht(
                  t,
                  l,
                  g,
                  v,
                  a,
                  b
                );
            }
        return;
      default:
        if (dc(l)) {
          for (var W in e)
            v = e[W], e.hasOwnProperty(W) && v !== void 0 && !a.hasOwnProperty(W) && so(
              t,
              l,
              W,
              void 0,
              a,
              v
            );
          for (p in a)
            v = a[p], b = e[p], !a.hasOwnProperty(p) || v === b || v === void 0 && b === void 0 || so(
              t,
              l,
              p,
              v,
              a,
              b
            );
          return;
        }
    }
    for (var h in e)
      v = e[h], e.hasOwnProperty(h) && v != null && !a.hasOwnProperty(h) && ht(t, l, h, null, a, v);
    for (O in a)
      v = a[O], b = e[O], !a.hasOwnProperty(O) || v === b || v == null && b == null || ht(t, l, O, v, a, b);
  }
  function Ay(t) {
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
  function Kv() {
    if (typeof performance.getEntriesByType == "function") {
      for (var t = 0, l = 0, e = performance.getEntriesByType("resource"), a = 0; a < e.length; a++) {
        var u = e[a], n = u.transferSize, i = u.initiatorType, c = u.duration;
        if (n && c && Ay(i)) {
          for (i = 0, c = u.responseEnd, a += 1; a < e.length; a++) {
            var r = e[a], g = r.startTime;
            if (g > c) break;
            var p = r.transferSize, O = r.initiatorType;
            p && Ay(O) && (r = r.responseEnd, i += p * (r < c ? 1 : (c - g) / (r - g)));
          }
          if (--a, l += 8 * (n + i) / (u.duration / 1e3), t++, 10 < t) break;
        }
      }
      if (0 < t) return l / t / 1e6;
    }
    return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
  }
  var yo = null, mo = null;
  function an(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function _y(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function xy(t, l) {
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
  function Cy(t, l, e, a) {
    return e = an(
      e
    ).createElement(t), e[Qt] = a, e[al] = l, Kt(e, t, l), Ht(e), e;
  }
  function vo(t, l) {
    return t === "textarea" || t === "noscript" || typeof l.children == "string" || typeof l.children == "number" || typeof l.children == "bigint" || typeof l.dangerouslySetInnerHTML == "object" && l.dangerouslySetInnerHTML !== null && l.dangerouslySetInnerHTML.__html != null;
  }
  var ho = null;
  function wv() {
    var t = window.event;
    return t && t.type === "popstate" ? t === ho ? !1 : (ho = t, !0) : (ho = null, !1);
  }
  var go = typeof setTimeout == "function" ? setTimeout : void 0, Jv = typeof clearTimeout == "function" ? clearTimeout : void 0, My = typeof Promise == "function" ? Promise : void 0, Ry = typeof requestAnimationFrame == "function" ? requestAnimationFrame : go, Wv = typeof queueMicrotask == "function" ? queueMicrotask : typeof My < "u" ? function(t) {
    return My.resolve(null).then(t).catch($v);
  } : go;
  function $v(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function Je(t) {
    return t === "head";
  }
  function Dy(t, l) {
    var e = l, a = 0;
    do {
      var u = e.nextSibling;
      if (t.removeChild(e), u && u.nodeType === 8)
        if (e = u.data, e === "/$" || e === "/&") {
          if (a === 0) {
            t.removeChild(u), mu(l);
            return;
          }
          a--;
        } else if (e === "$" || e === "$?" || e === "$~" || e === "$!" || e === "&")
          a++;
        else if (e === "html")
          No(
            t.ownerDocument.documentElement
          );
        else if (e === "head") {
          e = t.ownerDocument.head, No(e);
          for (var n = e.firstChild; n; ) {
            var i = n.nextSibling, c = n.nodeName;
            n[Tu] || c === "SCRIPT" || c === "STYLE" || c === "LINK" && n.rel.toLowerCase() === "stylesheet" || e.removeChild(n), n = i;
          }
        } else
          e === "body" && No(t.ownerDocument.body);
      e = u;
    } while (e);
    mu(l);
  }
  function Uy(t, l) {
    var e = t;
    t = 0;
    do {
      var a = e.nextSibling;
      if (e.nodeType === 1 ? l ? (e._stashedDisplay = e.style.display, e.style.display = "none") : (e.style.display = e._stashedDisplay || "", e.getAttribute("style") === "" && e.removeAttribute("style")) : e.nodeType === 3 && (l ? (e._stashedText = e.nodeValue, e.nodeValue = "") : e.nodeValue = e._stashedText || ""), a && a.nodeType === 8)
        if (e = a.data, e === "/$") {
          if (t === 0) break;
          t--;
        } else
          e !== "$" && e !== "$?" && e !== "$~" && e !== "$!" || t++;
      e = a;
    } while (e);
  }
  function jy(t, l, e) {
    if (l = CSS.escape(l) !== l ? "r-" + btoa(l).replace(/=/g, "") : l, t.style.viewTransitionName = l, e != null && (t.style.viewTransitionClass = e), e = getComputedStyle(t), e.display === "inline") {
      if (l = t.getClientRects(), l.length === 1) var a = 1;
      else
        for (var u = a = 0; u < l.length; u++) {
          var n = l[u];
          0 < n.width && 0 < n.height && a++;
        }
      a === 1 && (t = t.style, t.display = l.length === 1 ? "inline-block" : "block", t.marginTop = "-" + e.paddingTop, t.marginBottom = "-" + e.paddingBottom);
    }
  }
  function Hy(t, l) {
    t = t.style, l = l.style;
    var e = l != null ? l.hasOwnProperty("viewTransitionName") ? l.viewTransitionName : l.hasOwnProperty("view-transition-name") ? l["view-transition-name"] : null : null;
    t.viewTransitionName = e == null || typeof e == "boolean" ? "" : ("" + e).trim(), e = l != null ? l.hasOwnProperty("viewTransitionClass") ? l.viewTransitionClass : l.hasOwnProperty("view-transition-class") ? l["view-transition-class"] : null : null, t.viewTransitionClass = e == null || typeof e == "boolean" ? "" : ("" + e).trim(), t.display === "inline-block" && (l == null ? t.display = t.margin = "" : (e = l.display, t.display = e == null || typeof e == "boolean" ? "" : e, e = l.margin, e != null ? t.margin = e : (e = l.hasOwnProperty("marginTop") ? l.marginTop : l["margin-top"], t.marginTop = e == null || typeof e == "boolean" ? "" : e, l = l.hasOwnProperty("marginBottom") ? l.marginBottom : l["margin-bottom"], t.marginBottom = l == null || typeof l == "boolean" ? "" : l)));
  }
  function Fv(t, l, e) {
    return e = e.ownerDocument.defaultView, {
      rect: t,
      abs: l.position === "absolute" || l.position === "fixed",
      clip: l.clipPath !== "none" || l.overflow !== "visible" || l.filter !== "none" || l.mask !== "none" || l.mask !== "none" || l.borderRadius !== "0px",
      view: 0 <= t.bottom && 0 <= t.right && t.top <= e.innerHeight && t.left <= e.innerWidth
    };
  }
  function So(t) {
    var l = t.getBoundingClientRect(), e = getComputedStyle(t);
    return Fv(l, e, t);
  }
  function Iv(t) {
    return t.documentElement.clientHeight;
  }
  function kv(t) {
    this.addEventListener("load", t), this.addEventListener("error", t);
  }
  function Pv(t, l, e, a, u, n, i, c, r) {
    var g = l.nodeType === 9 ? l : l.ownerDocument;
    try {
      var p = g.startViewTransition({
        update: function() {
          var v = g.defaultView, b = v.navigation && v.navigation.transition, C = g.fonts.status;
          a();
          var j = [];
          if (C === "loaded" && (Iv(g), g.fonts.status === "loading" && j.push(g.fonts.ready)), C = j.length, t !== null)
            for (var W = t.suspenseyImages, h = 0, m = 0; m < W.length; m++) {
              var S = W[m];
              if (!S.complete) {
                var z = S.getBoundingClientRect();
                if (0 < z.bottom && 0 < z.right && z.top < v.innerHeight && z.left < v.innerWidth) {
                  if (h += e0(S), h > Gi) {
                    j.length = C;
                    break;
                  }
                  S = new Promise(
                    kv.bind(S)
                  ), j.push(S);
                }
              }
            }
          if (0 < j.length)
            return v = Promise.race([
              Promise.all(j),
              new Promise(function(U) {
                return setTimeout(U, 500);
              })
            ]).then(u, u), (b ? Promise.allSettled([b.finished, v]) : v).then(n, n);
          if (u(), b)
            return b.finished.then(
              n,
              n
            );
          n();
        },
        types: e
      });
      g.__reactViewTransition = p;
      var O = [];
      return p.ready.then(
        function() {
          for (var v = g.documentElement.getAnimations({
            subtree: !0
          }), b = 0; b < v.length; b++) {
            var C = v[b], j = C.effect, W = j.pseudoElement;
            if (W != null && W.startsWith("::view-transition")) {
              O.push(C), C = j.getKeyframes();
              for (var h = W = void 0, m = !0, S = 0; S < C.length; S++) {
                var z = C[S], U = z.width;
                if (W === void 0) W = U;
                else if (W !== U) {
                  m = !1;
                  break;
                }
                if (U = z.height, h === void 0) h = U;
                else if (h !== U) {
                  m = !1;
                  break;
                }
                delete z.width, delete z.height, z.transform === "none" && delete z.transform;
              }
              m && W !== void 0 && h !== void 0 && (j.setKeyframes(C), m = getComputedStyle(
                j.target,
                j.pseudoElement
              ), m.width !== W || m.height !== h) && (m = C[0], m.width = W, m.height = h, m = C[C.length - 1], m.width = W, m.height = h, j.setKeyframes(C));
            }
          }
          i();
        },
        function(v) {
          g.__reactViewTransition === p && (g.__reactViewTransition = null);
          try {
            typeof v == "object" && v !== null && v.name === "InvalidStateError" && (v.message === "View transition was skipped because document visibility state is hidden." || v.message === "Skipping view transition because document visibility state has become hidden." || v.message === "Skipping view transition because viewport size changed." || v.message === "Transition was aborted because of invalid state") && (v = null), v !== null && r(v);
          } finally {
            a(), u(), i();
          }
        }
      ), p.finished.finally(function() {
        for (var v = 0; v < O.length; v++)
          O[v].cancel();
        g.__reactViewTransition === p && (g.__reactViewTransition = null), c();
      }), p;
    } catch {
      return a(), u(), i(), null;
    }
  }
  function za(t, l) {
    this._scope = document.documentElement, this._selector = "::view-transition-" + t + "(" + l + ")";
  }
  za.prototype.animate = function(t, l) {
    return l = typeof l == "number" ? { duration: l } : $({}, l), l.pseudoElement = this._selector, this._scope.animate(t, l);
  }, za.prototype.getAnimations = function() {
    for (var t = this._scope, l = this._selector, e = t.getAnimations({ subtree: !0 }), a = [], u = 0; u < e.length; u++) {
      var n = e[u].effect;
      n !== null && n.target === t && n.pseudoElement === l && a.push(e[u]);
    }
    return a;
  }, za.prototype.getComputedStyle = function() {
    return getComputedStyle(this._scope, this._selector);
  };
  function By(t) {
    return {
      name: t,
      group: new za("group", t),
      imagePair: new za("image-pair", t),
      old: new za("old", t),
      new: new za("new", t)
    };
  }
  function Tl(t) {
    this._fragmentFiber = t, this._observers = this._eventListeners = null;
  }
  Tl.prototype.addEventListener = function(t, l, e) {
    var a = null, u = null;
    if (!(e != null && typeof e != "boolean" && (a = e.signal || null, a !== null && a.aborted))) {
      this._eventListeners === null && (this._eventListeners = []);
      var n = this._eventListeners;
      if (qy(n, t, l, e) === -1) {
        var i = this, c = l;
        e != null && typeof e != "boolean" && e.once === !0 && (c = function(r) {
          i.removeEventListener(
            t,
            l,
            e
          ), typeof l == "function" ? l.call(this, r) : l.handleEvent(r);
        }), a !== null && (u = i.removeEventListener.bind(
          i,
          t,
          l,
          e
        ), a.addEventListener("abort", u, { once: !0 }), u = a.removeEventListener.bind(a, "abort", u)), a = fu(e), n.push({
          type: t,
          listener: l,
          optionsOrUseCapture: e,
          attachedListener: c,
          cleanup: u
        }), E(
          this._fragmentFiber.child,
          !1,
          th,
          t,
          c,
          a
        );
      }
      this._eventListeners = n;
    }
  };
  function th(t, l, e, a) {
    return H(t).addEventListener(
      l,
      e,
      a
    ), !1;
  }
  Tl.prototype.removeEventListener = function(t, l, e) {
    var a = this._eventListeners;
    if (a !== null && (l = qy(
      a,
      t,
      l,
      e
    ), l !== -1)) {
      var u = a[l];
      e = u.attachedListener;
      var n = u.cleanup;
      u = fu(u.optionsOrUseCapture), E(
        this._fragmentFiber.child,
        !1,
        lh,
        t,
        e,
        u
      ), a.splice(l, 1), n !== null && n();
    }
  };
  function lh(t, l, e, a) {
    return H(t).removeEventListener(
      l,
      e,
      a
    ), !1;
  }
  function fu(t) {
    return t != null && typeof t != "boolean" && (t.once === !0 || t.signal instanceof AbortSignal) ? { capture: t.capture, passive: t.passive } : t;
  }
  function Yy(t) {
    return t == null ? "c=0" : typeof t == "boolean" ? "c=" + (t ? "1" : "0") : "c=" + (t.capture ? "1" : "0");
  }
  function qy(t, l, e, a) {
    if (t.length === 0) return -1;
    a = Yy(a);
    for (var u = 0; u < t.length; u++) {
      var n = t[u];
      if (n.type === l && n.listener === e && Yy(n.optionsOrUseCapture) === a)
        return u;
    }
    return -1;
  }
  Tl.prototype.dispatchEvent = function(t) {
    var l = B(
      this._fragmentFiber
    );
    if (l === null) return !0;
    l = H(l);
    var e = this._eventListeners;
    if (e !== null && 0 < e.length || !t.bubbles) {
      var a = l.nodeType === 9 ? l.createComment("") : document.createTextNode("");
      if (e)
        for (var u = 0; u < e.length; u++) {
          var n = e[u];
          a.addEventListener(
            n.type,
            n.attachedListener,
            fu(n.optionsOrUseCapture)
          );
        }
      if (l.appendChild(a), t = a.dispatchEvent(t), e)
        for (u = 0; u < e.length; u++)
          n = e[u], a.removeEventListener(
            n.type,
            n.attachedListener,
            fu(n.optionsOrUseCapture)
          );
      return l.removeChild(a), t;
    }
    return l.dispatchEvent(t);
  }, Tl.prototype.focus = function(t) {
    E(
      this._fragmentFiber.child,
      !0,
      Gy,
      t,
      void 0,
      void 0
    );
  };
  function Gy(t, l) {
    return t.tag === 6 ? !1 : (t = H(t), yh(t, l));
  }
  Tl.prototype.focusLast = function(t) {
    var l = [];
    E(
      this._fragmentFiber.child,
      !0,
      bo,
      l,
      void 0,
      void 0
    );
    for (var e = l.length - 1; 0 <= e && !Gy(l[e], t); e--) ;
  };
  function bo(t, l) {
    return l.push(t), !1;
  }
  Tl.prototype.blur = function() {
    var t = B(
      this._fragmentFiber
    );
    t !== null && (t = H(t), t = an(t).activeElement, t !== null && E(
      this._fragmentFiber.child,
      !1,
      eh,
      t,
      void 0,
      void 0
    ));
  };
  function eh(t, l) {
    return t.tag === 6 ? !1 : (t = H(t), t === l || t.contains(l) ? (l.blur(), !0) : !1);
  }
  Tl.prototype.observeUsing = function(t) {
    this._observers === null && (this._observers = /* @__PURE__ */ new Set()), this._observers.add(t), E(
      this._fragmentFiber.child,
      !1,
      ah,
      t,
      void 0,
      void 0
    );
  };
  function ah(t, l) {
    return t.tag === 6 || (t = H(t), l.observe(t)), !1;
  }
  Tl.prototype.unobserveUsing = function(t) {
    var l = this._observers;
    if (l !== null && l.has(t)) {
      l.delete(t), E(
        this._fragmentFiber.child,
        !1,
        uh,
        t,
        void 0,
        void 0
      );
      for (var e = l = 0; e < Xl.length; e++) {
        var a = Xl[e];
        a.fragmentInstance === this && a.observer === t ? t.unobserve(a.instance) : Xl[l++] = a;
      }
      Xl.length = l;
    }
  };
  function uh(t, l) {
    return t.tag === 6 || (t = H(t), l.unobserve(t)), !1;
  }
  var Xl = [], po = !1;
  function nh(t, l, e) {
    Xl.push({
      fragmentInstance: t,
      observer: l,
      instance: e
    }), po || (po = !0, mh(function() {
      po = !1;
      var a = Xl;
      Xl = [];
      for (var u = 0; u < a.length; u++) {
        var n = a[u];
        n.observer.unobserve(n.instance);
      }
    }));
  }
  Tl.prototype.getClientRects = function() {
    var t = [];
    return E(
      this._fragmentFiber.child,
      !1,
      ih,
      t,
      void 0,
      void 0
    ), t;
  };
  function ih(t, l) {
    if (t.tag === 6) {
      t = t.stateNode;
      var e = t.ownerDocument.createRange();
      e.selectNodeContents(t), l.push.apply(l, e.getClientRects());
    } else
      t = H(t), l.push.apply(l, t.getClientRects());
    return !1;
  }
  Tl.prototype.getRootNode = function(t) {
    var l = B(
      this._fragmentFiber
    );
    return l === null ? this : H(l).getRootNode(t);
  }, Tl.prototype.compareDocumentPosition = function(t) {
    var l = B(
      this._fragmentFiber
    );
    if (l === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
    var e = [];
    E(
      this._fragmentFiber.child,
      !1,
      bo,
      e,
      void 0,
      void 0
    );
    var a = H(l);
    if (e.length === 0) {
      if (e = a, dt(this._fragmentFiber)) {
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
      var u = a = e.compareDocumentPosition(t);
      return e === t ? u = Node.DOCUMENT_POSITION_CONTAINS : a & Node.DOCUMENT_POSITION_CONTAINED_BY && (e = At(l)[1], e === null ? u = Node.DOCUMENT_POSITION_PRECEDING : (t = H(e).compareDocumentPosition(
        t
      ), u = t === 0 || t & Node.DOCUMENT_POSITION_FOLLOWING ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING)), u |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
    }
    l = H(e[0]), u = H(e[e.length - 1]);
    var n = dt(this._fragmentFiber) ? l.parentElement : a;
    if (n == null)
      return Node.DOCUMENT_POSITION_DISCONNECTED;
    a = n.compareDocumentPosition(l) & Node.DOCUMENT_POSITION_CONTAINED_BY, n = n.compareDocumentPosition(u) & Node.DOCUMENT_POSITION_CONTAINED_BY;
    var i = l.compareDocumentPosition(t), c = u.compareDocumentPosition(t), r = i & Node.DOCUMENT_POSITION_CONTAINED_BY || c & Node.DOCUMENT_POSITION_CONTAINED_BY;
    return c = a && n && i & Node.DOCUMENT_POSITION_FOLLOWING && c & Node.DOCUMENT_POSITION_PRECEDING, l = a && l === t || n && u === t || r || c ? Node.DOCUMENT_POSITION_CONTAINED_BY : !a && l === t || !n && u === t ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC : i, l & Node.DOCUMENT_POSITION_DISCONNECTED || l & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC || ch(
      l,
      this._fragmentFiber,
      e[0],
      e[e.length - 1],
      t
    ) ? l : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
  };
  function ch(t, l, e, a, u) {
    var n = ea(u);
    if (t & Node.DOCUMENT_POSITION_CONTAINED_BY) {
      if (e = !!n)
        t: {
          for (; n !== null; ) {
            if (n.tag === 7 && (n === l || n.alternate === l)) {
              e = !0;
              break t;
            }
            n = n.return;
          }
          e = !1;
        }
      return e;
    }
    if (t & Node.DOCUMENT_POSITION_CONTAINS) {
      if (n === null)
        return n = u.ownerDocument, u === n || u === n.documentElement || u === n.body;
      t: {
        for (n = l, l = B(l); n !== null; ) {
          if (!(n.tag !== 5 && n.tag !== 3 && n.tag !== 27 || n !== l && n.alternate !== l)) {
            n = !0;
            break t;
          }
          n = n.return;
        }
        n = !1;
      }
      return n;
    }
    return t & Node.DOCUMENT_POSITION_PRECEDING ? ((l = !!n) && !(l = n === e) && (l = Ft(
      e,
      n,
      zl
    ), l === null ? l = !1 : (E(
      l,
      !0,
      ae,
      n,
      e
    ), n = ft, ft = null, l = n !== null)), l) : t & Node.DOCUMENT_POSITION_FOLLOWING ? ((l = !!n) && !(l = n === a) && (l = Ft(
      a,
      n,
      zl
    ), l === null ? l = !1 : (E(
      l,
      !0,
      El,
      n,
      a
    ), n = ft, $t = ft = null, l = n !== null)), l) : !1;
  }
  function Qy(t, l) {
    var e = t.ownerDocument.createRange();
    e.selectNodeContents(t), t = e.getBoundingClientRect(), window.scrollTo(
      window.scrollX + t.left,
      l ? window.scrollY + t.top : window.scrollY + t.bottom - window.innerHeight
    );
  }
  Tl.prototype.scrollIntoView = function(t) {
    if (typeof t == "object") throw Error(o(566));
    var l = [];
    E(
      this._fragmentFiber.child,
      !1,
      bo,
      l,
      void 0,
      void 0
    );
    var e = t !== !1;
    if (l.length === 0) {
      var a = At(
        this._fragmentFiber
      );
      if (a = e ? a[1] || a[0] || B(this._fragmentFiber) : a[0] || a[1], a === null) return;
      if (a.tag === 6) {
        t = H(a), Qy(t, e);
        return;
      }
      if (a = H(a), a.nodeType !== 9) {
        if (a.nodeType === 11) {
          e = "host" in a ? a.host : null, e !== null && e.scrollIntoView(t);
          return;
        }
        a.scrollIntoView(t);
      }
    }
    for (a = e ? l.length - 1 : 0; a !== (e ? -1 : l.length); ) {
      var u = l[a];
      u.tag === 6 ? (u = H(u), Qy(u, e)) : H(u).scrollIntoView(t), a += e ? -1 : 1;
    }
  };
  function fh(t, l) {
    return t = H(t), Xy(t, l), !1;
  }
  function Xy(t, l) {
    t.reactFragments == null && (t.reactFragments = /* @__PURE__ */ new Set()), t.reactFragments.add(l);
  }
  function Ly(t, l) {
    var e = l._eventListeners;
    if (e !== null)
      for (var a = 0; a < e.length; a++) {
        var u = e[a];
        t.addEventListener(
          u.type,
          u.attachedListener,
          fu(u.optionsOrUseCapture)
        );
      }
    t.nodeType !== 3 && (e = l._observers, e !== null && e.forEach(function(n) {
      for (var i = 0, c = 0; c < Xl.length; c++) {
        var r = Xl[c];
        (r.fragmentInstance !== l || r.observer !== n || r.instance !== t) && (Xl[i++] = r);
      }
      Xl.length = i, n.observe(t);
    }), Xy(t, l));
  }
  function oh(t, l) {
    var e = l._eventListeners;
    if (e !== null)
      for (var a = 0; a < e.length; a++) {
        var u = e[a];
        t.removeEventListener(
          u.type,
          u.attachedListener,
          fu(u.optionsOrUseCapture)
        );
      }
    t.nodeType !== 3 && (e = l._observers, e !== null && e.forEach(function(n) {
      typeof n.rootMargin == "string" ? nh(
        l,
        n,
        t
      ) : n.unobserve(t);
    }), t.reactFragments != null && t.reactFragments.delete(l));
  }
  function To(t) {
    var l = t.firstChild;
    for (l && l.nodeType === 10 && (l = l.nextSibling); l; ) {
      var e = l;
      switch (l = l.nextSibling, e.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          To(e), _n(e);
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
  function rh(t, l, e, a) {
    for (; t.nodeType === 1; ) {
      var u = e;
      if (t.nodeName.toLowerCase() !== l.toLowerCase()) {
        if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden"))
          break;
      } else if (a) {
        if (!t[Tu])
          switch (l) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (n = t.getAttribute("rel"), n === "stylesheet" && t.hasAttribute("data-precedence"))
                break;
              if (n !== u.rel || t.getAttribute("href") !== (u.href == null || u.href === "" ? null : u.href) || t.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin) || t.getAttribute("title") !== (u.title == null ? null : u.title))
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (n = t.getAttribute("src"), (n !== (u.src == null ? null : u.src) || t.getAttribute("type") !== (u.type == null ? null : u.type) || t.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin)) && n && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
                break;
              return t;
            default:
              return t;
          }
      } else if (l === "input" && t.type === "hidden") {
        var n = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && t.getAttribute("name") === n)
          return t;
      } else return t;
      if (t = Ul(t.nextSibling), t === null) break;
    }
    return null;
  }
  function sh(t, l, e) {
    if (l === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = Ul(t.nextSibling), t === null)) return null;
    return t;
  }
  function Zy(t, l) {
    for (; t.nodeType !== 8; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !l || (t = Ul(t.nextSibling), t === null)) return null;
    return t;
  }
  function Eo(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function zo(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
  }
  function dh(t, l) {
    var e = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = l;
    else if (t.data !== "$?" || e.readyState !== "loading")
      l();
    else {
      var a = function() {
        l(), e.removeEventListener("DOMContentLoaded", a);
      };
      e.addEventListener("DOMContentLoaded", a), t._reactRetry = a;
    }
  }
  function Ul(t) {
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
  var Oo = null;
  function Vy(t) {
    t = t.nextSibling;
    for (var l = 0; t; ) {
      if (t.nodeType === 8) {
        var e = t.data;
        if (e === "/$" || e === "/&") {
          if (l === 0)
            return Ul(t.nextSibling);
          l--;
        } else
          e !== "$" && e !== "$!" && e !== "$?" && e !== "$~" && e !== "&" || l++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function Ky(t) {
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
  function yh(t, l) {
    function e() {
      a = !0;
    }
    if (t.ownerDocument.activeElement === t) return !0;
    var a = !1;
    try {
      t.ownerDocument.addEventListener("focus", e, !0), (t.focus || HTMLElement.prototype.focus).call(t, l);
    } finally {
      t.ownerDocument.removeEventListener("focus", e, !0);
    }
    return a;
  }
  function mh(t) {
    Ry(function() {
      Ry(function(l) {
        return t(l);
      });
    });
  }
  function wy(t, l, e) {
    switch (l = an(e), t) {
      case "html":
        if (t = l.documentElement, !t) throw Error(o(452));
        return t;
      case "head":
        if (t = l.head, !t) throw Error(o(453));
        return t;
      case "body":
        if (t = l.body, !t) throw Error(o(454));
        return t;
      default:
        throw Error(o(451));
    }
  }
  function Jy(t, l, e) {
    for (var a in e) {
      var u = e[a];
      e.hasOwnProperty(a) && u != null && ht(t, l, a, null, Zv, u);
    }
    e.dangerouslySetInnerHTML != null && (t.textContent = ""), t.onclick === Vl && (t.onclick = null), _n(t);
  }
  function No(t) {
    for (var l = t.attributes; l.length; )
      t.removeAttributeNode(l[0]);
    _n(t);
  }
  var jl = /* @__PURE__ */ new Map(), Wy = /* @__PURE__ */ new Set();
  function un(t) {
    if (typeof t.getRootNode == "function") {
      var l = t.getRootNode();
      if (l.nodeType === 9 || l.nodeType === 11) return l;
    }
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  var Te = K.d;
  K.d = {
    f: vh,
    r: hh,
    D: gh,
    C: Sh,
    L: bh,
    m: ph,
    X: Eh,
    S: Th,
    M: zh
  };
  function vh() {
    var t = Te.f(), l = Mi();
    return t || l;
  }
  function hh(t) {
    var l = _a(t);
    l !== null && l.tag === 5 && l.type === "form" ? Fs(l) : Te.r(t);
  }
  var ou = typeof document > "u" ? null : document;
  function $y(t, l, e) {
    var a = ou;
    if (a && typeof l == "string" && l) {
      var u = Al(l);
      u = 'link[rel="' + t + '"][href="' + u + '"]', typeof e == "string" && (u += '[crossorigin="' + e + '"]'), Wy.has(u) || (Wy.add(u), t = { rel: t, crossOrigin: e, href: l }, a.querySelector(u) === null && (l = a.createElement("link"), Kt(l, "link", t), Ht(l), a.head.appendChild(l)));
    }
  }
  function gh(t) {
    Te.D(t), $y("dns-prefetch", t, null);
  }
  function Sh(t, l) {
    Te.C(t, l), $y("preconnect", t, l);
  }
  function bh(t, l, e) {
    Te.L(t, l, e);
    var a = ou;
    if (a && t && l) {
      var u = 'link[rel="preload"][as="' + Al(l) + '"]';
      l === "image" && e && e.imageSrcSet ? (u += '[imagesrcset="' + Al(
        e.imageSrcSet
      ) + '"]', typeof e.imageSizes == "string" && (u += '[imagesizes="' + Al(
        e.imageSizes
      ) + '"]')) : u += '[href="' + Al(t) + '"]';
      var n = u;
      switch (l) {
        case "style":
          n = ru(t);
          break;
        case "script":
          n = su(t);
      }
      if (!(jl.has(n) || (t = $(
        {
          rel: "preload",
          href: l === "image" && e && e.imageSrcSet ? void 0 : t,
          as: l
        },
        e
      ), jl.set(n, t), a.querySelector(u) !== null || l === "style" && a.querySelector(nn(n)) || l === "script" && a.querySelector(cn(n))))) {
        var i = a.createElement("link");
        Kt(i, "link", t), l === "style" && (i[An] = !0, i.onload = i.onerror = function() {
          fr(i);
        }), Ht(i), a.head.appendChild(i);
      }
    }
  }
  function ph(t, l) {
    Te.m(t, l);
    var e = ou;
    if (e && t) {
      var a = l && typeof l.as == "string" ? l.as : "script", u = 'link[rel="modulepreload"][as="' + Al(a) + '"][href="' + Al(t) + '"]', n = u;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = su(t);
      }
      if (!jl.has(n) && (t = $({ rel: "modulepreload", href: t }, l), jl.set(n, t), e.querySelector(u) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (e.querySelector(cn(n)))
              return;
        }
        a = e.createElement("link"), Kt(a, "link", t), Ht(a), e.head.appendChild(a);
      }
    }
  }
  function Th(t, l, e) {
    Te.S(t, l, e);
    var a = ou;
    if (a && t) {
      var u = xa(a).hoistableStyles, n = ru(t);
      l = l || "default";
      var i = u.get(n);
      if (!i) {
        var c = { loading: 0, preload: null };
        if (i = a.querySelector(
          nn(n)
        ))
          c.loading = 5;
        else {
          t = $(
            { rel: "stylesheet", href: t, "data-precedence": l },
            e
          ), (e = jl.get(n)) && Ao(t, e);
          var r = i = a.createElement("link");
          Ht(r), Kt(r, "link", t), r._p = new Promise(function(g, p) {
            r.onload = g, r.onerror = p;
          }), r.addEventListener("load", function() {
            c.loading |= 1;
          }), r.addEventListener("error", function() {
            c.loading |= 2;
          }), c.loading |= 4, Yi(i, l, a);
        }
        i = {
          type: "stylesheet",
          instance: i,
          count: 1,
          state: c
        }, u.set(n, i);
      }
    }
  }
  function Eh(t, l) {
    Te.X(t, l);
    var e = ou;
    if (e && t) {
      var a = xa(e).hoistableScripts, u = su(t), n = a.get(u);
      n || (n = e.querySelector(cn(u)), n || (t = $({ src: t, async: !0 }, l), (l = jl.get(u)) && _o(t, l), n = e.createElement("script"), Ht(n), Kt(n, "link", t), e.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, a.set(u, n));
    }
  }
  function zh(t, l) {
    Te.M(t, l);
    var e = ou;
    if (e && t) {
      var a = xa(e).hoistableScripts, u = su(t), n = a.get(u);
      n || (n = e.querySelector(cn(u)), n || (t = $({ src: t, async: !0, type: "module" }, l), (l = jl.get(u)) && _o(t, l), n = e.createElement("script"), Ht(n), Kt(n, "link", t), e.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, a.set(u, n));
    }
  }
  function Fy(t, l, e, a) {
    var u = (u = Oe.current) ? un(u) : null;
    if (!u) throw Error(o(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof e.precedence == "string" && typeof e.href == "string" ? (e = ru(e.href), l = xa(
          u
        ).hoistableStyles, a = l.get(e), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, l.set(e, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (e.rel === "stylesheet" && typeof e.href == "string" && typeof e.precedence == "string") {
          t = ru(e.href);
          var n = xa(
            u
          ).hoistableStyles, i = n.get(t);
          if (i || (u = u.ownerDocument || u, i = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, n.set(t, i), (n = u.querySelector(
            nn(t)
          )) ? n._p || (i.instance = n, i.state.loading = 5) : (n = jl.get(t), n || (n = {
            rel: "preload",
            as: "style",
            href: e.href,
            crossOrigin: e.crossOrigin,
            integrity: e.integrity,
            media: e.media,
            hrefLang: e.hrefLang,
            referrerPolicy: e.referrerPolicy
          }, jl.set(t, n)), Oh(
            u,
            t,
            n,
            i.state
          ))), l && a === null)
            throw Error(o(528, ""));
          return i;
        }
        if (l && a !== null)
          throw Error(o(529, ""));
        return null;
      case "script":
        return l = e.async, e = e.src, typeof e == "string" && l && typeof l != "function" && typeof l != "symbol" ? (e = su(e), l = xa(
          u
        ).hoistableScripts, a = l.get(e), a || (a = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, l.set(e, a)), a) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(o(444, t));
    }
  }
  function ru(t) {
    return 'href="' + Al(t) + '"';
  }
  function nn(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function Iy(t) {
    return $({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function Oh(t, l, e, a) {
    if (l = t.querySelector(
      'link[rel="preload"][as="style"][' + l + "]"
    )) {
      if (l[An] !== !0) {
        a.loading = 1;
        return;
      }
    } else
      l = t.createElement("link"), l[An] = !0, l.onload = l.onerror = fr.bind(null, l), Kt(l, "link", e), Ht(l), t.head.appendChild(l);
    a.preload = l, l.addEventListener("load", function() {
      return a.loading |= 1;
    }), l.addEventListener("error", function() {
      return a.loading |= 2;
    });
  }
  function su(t) {
    return '[src="' + Al(t) + '"]';
  }
  function cn(t) {
    return "script[async]" + t;
  }
  function ky(t, l, e) {
    if (l.count++, l.instance === null)
      switch (l.type) {
        case "style":
          var a = t.querySelector(
            'style[data-href~="' + Al(e.href) + '"]'
          );
          if (a)
            return l.instance = a, Ht(a), a;
          var u = $({}, e, {
            "data-href": e.href,
            "data-precedence": e.precedence,
            href: null,
            precedence: null
          });
          return a = (t.ownerDocument || t).createElement(
            "style"
          ), Ht(a), Kt(a, "style", u), Yi(a, e.precedence, t), l.instance = a;
        case "stylesheet":
          u = ru(e.href);
          var n = t.querySelector(
            nn(u)
          );
          if (n)
            return l.state.loading |= 4, l.instance = n, Ht(n), n;
          a = Iy(e), (u = jl.get(u)) && Ao(a, u), n = (t.ownerDocument || t).createElement("link"), Ht(n);
          var i = n;
          return i._p = new Promise(function(c, r) {
            i.onload = c, i.onerror = r;
          }), Kt(n, "link", a), l.state.loading |= 4, Yi(n, e.precedence, t), l.instance = n;
        case "script":
          return n = su(e.src), (u = t.querySelector(
            cn(n)
          )) ? (l.instance = u, Ht(u), u) : (a = e, (u = jl.get(n)) && (a = $({}, e), _o(a, u)), t = t.ownerDocument || t, u = t.createElement("script"), Ht(u), Kt(u, "link", a), t.head.appendChild(u), l.instance = u);
        case "void":
          return null;
        default:
          throw Error(o(443, l.type));
      }
    else
      l.type === "stylesheet" && (l.state.loading & 4) === 0 && (a = l.instance, l.state.loading |= 4, Yi(a, e.precedence, t));
    return l.instance;
  }
  function Yi(t, l, e) {
    for (var a = e.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), u = a.length ? a[a.length - 1] : null, n = u, i = 0; i < a.length; i++) {
      var c = a[i];
      if (c.dataset.precedence === l) n = c;
      else if (n !== u) break;
    }
    n ? n.parentNode.insertBefore(t, n.nextSibling) : (l = e.nodeType === 9 ? e.head : e, l.insertBefore(t, l.firstChild));
  }
  function Ao(t, l) {
    t.crossOrigin == null && (t.crossOrigin = l.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = l.referrerPolicy), t.title == null && (t.title = l.title);
  }
  function _o(t, l) {
    t.crossOrigin == null && (t.crossOrigin = l.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = l.referrerPolicy), t.integrity == null && (t.integrity = l.integrity);
  }
  var qi = null;
  function Py(t, l, e) {
    if (qi === null) {
      var a = /* @__PURE__ */ new Map(), u = qi = /* @__PURE__ */ new Map();
      u.set(e, a);
    } else
      u = qi, a = u.get(e), a || (a = /* @__PURE__ */ new Map(), u.set(e, a));
    if (a.has(t)) return a;
    for (a.set(t, null), e = e.getElementsByTagName(t), u = 0; u < e.length; u++) {
      var n = e[u];
      if (!(n[Tu] || n[Qt] || t === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
        var i = n.getAttribute(l) || "";
        i = t + i;
        var c = a.get(i);
        c ? c.push(n) : a.set(i, [n]);
      }
    }
    return a;
  }
  function xo(t, l, e) {
    t = t.ownerDocument || t, t.head.insertBefore(
      e,
      l === "title" ? t.querySelector("head > title") : null
    );
  }
  function Nh(t, l, e) {
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
  function t0(t, l) {
    return t === "img" && l.src != null && l.src !== "" && l.onLoad == null && l.loading !== "lazy";
  }
  function l0(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function e0(t) {
    return (t.width || 100) * (t.height || 100) * (typeof devicePixelRatio == "number" ? devicePixelRatio : 1) * 0.25;
  }
  function a0(t, l) {
    typeof l.decode == "function" && (t.imgCount++, l.complete || (t.imgBytes += e0(l), t.suspenseyImages.push(l)), t = xh.bind(t), l.decode().then(t, t));
  }
  function Ah(t, l, e, a) {
    if (e.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (e.state.loading & 4) === 0) {
      if (e.instance === null) {
        var u = ru(a.href), n = l.querySelector(
          nn(u)
        );
        if (n) {
          l = n._p, l !== null && typeof l == "object" && typeof l.then == "function" && (t.count++, t = fn.bind(t), l.then(t, t)), e.state.loading |= 4, e.instance = n, Ht(n);
          return;
        }
        n = l.ownerDocument || l, a = Iy(a), (u = jl.get(u)) && Ao(a, u), n = n.createElement("link"), Ht(n);
        var i = n;
        i._p = new Promise(function(c, r) {
          i.onload = c, i.onerror = r;
        }), Kt(n, "link", a), e.instance = n;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(e, l), (l = e.state.preload) && (e.state.loading & 3) === 0 && (t.count++, e = fn.bind(t), l.addEventListener("load", e), l.addEventListener("error", e));
    }
  }
  var Gi = 0;
  function _h(t, l) {
    return t.stylesheets && t.count === 0 && Xi(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(e) {
      var a = setTimeout(function() {
        if (t.stylesheets && Xi(t, t.stylesheets), t.unsuspend) {
          var n = t.unsuspend;
          t.unsuspend = null, n();
        }
      }, 6e4 + l);
      0 < t.imgBytes && Gi === 0 && (Gi = 62500 * Kv());
      var u = setTimeout(
        function() {
          if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && Xi(t, t.stylesheets), t.unsuspend)) {
            var n = t.unsuspend;
            t.unsuspend = null, n();
          }
        },
        (t.imgBytes > Gi ? 50 : 800) + l
      );
      return t.unsuspend = e, function() {
        t.unsuspend = null, clearTimeout(a), clearTimeout(u);
      };
    } : null;
  }
  function u0(t) {
    if (t.count === 0 && (t.imgCount === 0 || !t.waitingForImages)) {
      if (t.stylesheets) Xi(t, t.stylesheets);
      else if (t.unsuspend) {
        var l = t.unsuspend;
        t.unsuspend = null, l();
      }
    }
  }
  function fn() {
    this.count--, u0(this);
  }
  function xh() {
    this.imgCount--, u0(this);
  }
  var Qi = null;
  function Xi(t, l) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, Qi = /* @__PURE__ */ new Map(), l.forEach(Ch, t), Qi = null, fn.call(t));
  }
  function Ch(t, l) {
    if (!(l.state.loading & 4)) {
      var e = Qi.get(t);
      if (e) var a = e.get(null);
      else {
        e = /* @__PURE__ */ new Map(), Qi.set(t, e);
        for (var u = t.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), n = 0; n < u.length; n++) {
          var i = u[n];
          (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") && (e.set(i.dataset.precedence, i), a = i);
        }
        a && e.set(null, a);
      }
      u = l.instance, i = u.getAttribute("data-precedence"), n = e.get(i) || a, n === a && e.set(null, u), e.set(i, u), this.count++, a = fn.bind(this), u.addEventListener("load", a), u.addEventListener("error", a), n ? n.parentNode.insertBefore(u, n.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(u, t.firstChild)), l.state.loading |= 4;
    }
  }
  var du = {
    $$typeof: Ct,
    Provider: null,
    Consumer: null,
    _currentValue: ie,
    _currentValue2: ie,
    _threadCount: 0
  };
  function Mh(t, l, e, a, u, n, i, c, r) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = ic(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ic(0), this.hiddenUpdates = ic(null), this.identifierPrefix = a, this.onUncaughtError = u, this.onCaughtError = n, this.onRecoverableError = i, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = r, this.transitionTypes = null, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function n0(t, l, e, a, u, n, i, c, r, g, p, O) {
    return t = new Mh(
      t,
      l,
      e,
      i,
      r,
      g,
      p,
      O,
      c
    ), l = 1, n === !0 && (l |= 24), n = ul(3, null, null, l), t.current = n, n.stateNode = t, l = Xc(), l.refCount++, t.pooledCache = l, l.refCount++, n.memoizedState = {
      element: a,
      isDehydrated: e,
      cache: l
    }, Kc(n), t;
  }
  function i0(t) {
    return t ? (t = qa, t) : qa;
  }
  function c0(t, l, e, a, u, n) {
    u = i0(u), a.context === null ? a.context = u : a.pendingContext = u, a = He(l), a.payload = { element: e }, n = n === void 0 ? null : n, n !== null && (a.callback = n), e = Be(t, a, l), e !== null && (fl(e, t, l), qu(e, t, l));
  }
  function f0(t, l) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var e = t.retryLane;
      t.retryLane = e !== 0 && e < l ? e : l;
    }
  }
  function Co(t, l) {
    f0(t, l), (t = t.alternate) && f0(t, l);
  }
  function o0(t) {
    if (t.tag === 13 || t.tag === 31) {
      var l = ia(t, 67108864);
      l !== null && fl(l, t, 67108864), Co(t, 67108864);
    }
  }
  function r0(t) {
    if (t.tag === 13 || t.tag === 31) {
      var l = pl();
      l = cc(l);
      var e = ia(t, l);
      e !== null && fl(e, t, l), Co(t, l);
    }
  }
  var yu = !0;
  function Rh(t, l, e, a) {
    var u = Y.T;
    Y.T = null;
    var n = K.p;
    try {
      K.p = 2, Mo(t, l, e, a);
    } finally {
      K.p = n, Y.T = u;
    }
  }
  function Dh(t, l, e, a) {
    var u = Y.T;
    Y.T = null;
    var n = K.p;
    try {
      K.p = 8, Mo(t, l, e, a);
    } finally {
      K.p = n, Y.T = u;
    }
  }
  function Mo(t, l, e, a) {
    if (yu) {
      var u = Ro(a);
      if (u === null)
        ro(
          t,
          l,
          a,
          Li,
          e
        ), d0(t, a);
      else if (jh(
        u,
        t,
        l,
        e,
        a
      ))
        a.stopPropagation();
      else if (d0(t, a), l & 4 && -1 < Uh.indexOf(t)) {
        for (; u !== null; ) {
          var n = _a(u);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (n = n.stateNode, n.current.memoizedState.isDehydrated) {
                  var i = la(n.pendingLanes);
                  if (i !== 0) {
                    var c = n;
                    for (c.pendingLanes |= 2, c.entangledLanes |= 2; i; ) {
                      var r = 1 << 31 - yl(i);
                      c.entanglements[1] |= r, i &= ~r;
                    }
                    te(n), (rt & 6) === 0 && (_i = sl() + 500, tn(0));
                  }
                }
                break;
              case 31:
              case 13:
                c = ia(n, 2), c !== null && fl(c, n, 2), Mi(), Co(n, 2);
            }
          if (n = Ro(a), n === null && ro(
            t,
            l,
            a,
            Li,
            e
          ), n === u) break;
          u = n;
        }
        u !== null && a.stopPropagation();
      } else
        ro(
          t,
          l,
          a,
          null,
          e
        );
    }
  }
  function Ro(t) {
    return t = mc(t), Do(t);
  }
  var Li = null;
  function Do(t) {
    if (Li = null, t = ea(t), t !== null) {
      var l = x(t);
      if (l === null) t = null;
      else {
        var e = l.tag;
        if (e === 13) {
          if (t = D(l), t !== null) return t;
          t = null;
        } else if (e === 31) {
          if (t = M(l), t !== null) return t;
          t = null;
        } else if (e === 3) {
          if (l.stateNode.current.memoizedState.isDehydrated)
            return l.tag === 3 ? l.stateNode.containerInfo : null;
          t = null;
        } else l !== t && (t = null);
      }
    }
    return Li = t, null;
  }
  function s0(t) {
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
        switch (K0()) {
          case Fo:
            return 2;
          case Io:
            return 8;
          case Tn:
          case w0:
            return 32;
          case ko:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Uo = !1, We = null, $e = null, Fe = null, on = /* @__PURE__ */ new Map(), rn = /* @__PURE__ */ new Map(), Ie = [], Uh = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function d0(t, l) {
    switch (t) {
      case "focusin":
      case "focusout":
        We = null;
        break;
      case "dragenter":
      case "dragleave":
        $e = null;
        break;
      case "mouseover":
      case "mouseout":
        Fe = null;
        break;
      case "pointerover":
      case "pointerout":
        on.delete(l.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        rn.delete(l.pointerId);
    }
  }
  function sn(t, l, e, a, u, n) {
    return t === null || t.nativeEvent !== n ? (t = {
      blockedOn: l,
      domEventName: e,
      eventSystemFlags: a,
      nativeEvent: n,
      targetContainers: [u]
    }, l !== null && (l = _a(l), l !== null && o0(l)), t) : (t.eventSystemFlags |= a, l = t.targetContainers, u !== null && l.indexOf(u) === -1 && l.push(u), t);
  }
  function jh(t, l, e, a, u) {
    switch (l) {
      case "focusin":
        return We = sn(
          We,
          t,
          l,
          e,
          a,
          u
        ), !0;
      case "dragenter":
        return $e = sn(
          $e,
          t,
          l,
          e,
          a,
          u
        ), !0;
      case "mouseover":
        return Fe = sn(
          Fe,
          t,
          l,
          e,
          a,
          u
        ), !0;
      case "pointerover":
        var n = u.pointerId;
        return on.set(
          n,
          sn(
            on.get(n) || null,
            t,
            l,
            e,
            a,
            u
          )
        ), !0;
      case "gotpointercapture":
        return n = u.pointerId, rn.set(
          n,
          sn(
            rn.get(n) || null,
            t,
            l,
            e,
            a,
            u
          )
        ), !0;
    }
    return !1;
  }
  function y0(t) {
    var l = ea(t.target);
    if (l !== null) {
      var e = x(l);
      if (e !== null) {
        if (l = e.tag, l === 13) {
          if (l = D(e), l !== null) {
            t.blockedOn = l, nr(t.priority, function() {
              r0(e);
            });
            return;
          }
        } else if (l === 31) {
          if (l = M(e), l !== null) {
            t.blockedOn = l, nr(t.priority, function() {
              r0(e);
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
  function Zi(t) {
    if (t.blockedOn !== null) return !1;
    for (var l = t.targetContainers; 0 < l.length; ) {
      var e = Ro(t.nativeEvent);
      if (e === null) {
        e = t.nativeEvent;
        var a = new e.constructor(
          e.type,
          e
        );
        yc = a, e.target.dispatchEvent(a), yc = null;
      } else
        return l = _a(e), l !== null && o0(l), t.blockedOn = e, !1;
      l.shift();
    }
    return !0;
  }
  function m0(t, l, e) {
    Zi(t) && e.delete(l);
  }
  function Hh() {
    Uo = !1, We !== null && Zi(We) && (We = null), $e !== null && Zi($e) && ($e = null), Fe !== null && Zi(Fe) && (Fe = null), on.forEach(m0), rn.forEach(m0);
  }
  function Vi(t, l) {
    t.blockedOn === l && (t.blockedOn = null, Uo || (Uo = !0, f.unstable_scheduleCallback(
      f.unstable_NormalPriority,
      Hh
    )));
  }
  var Ki = null;
  function v0(t) {
    Ki !== t && (Ki = t, f.unstable_scheduleCallback(
      f.unstable_NormalPriority,
      function() {
        Ki === t && (Ki = null);
        for (var l = 0; l < t.length; l += 3) {
          var e = t[l], a = t[l + 1], u = t[l + 2];
          if (typeof a != "function") {
            if (Do(a || e) === null)
              continue;
            break;
          }
          var n = _a(e);
          n !== null && (t.splice(l, 3), l -= 3, yf(
            n,
            {
              pending: !0,
              data: u,
              method: e.method,
              action: a
            },
            a,
            u
          ));
        }
      }
    ));
  }
  function mu(t) {
    function l(r) {
      return Vi(r, t);
    }
    We !== null && Vi(We, t), $e !== null && Vi($e, t), Fe !== null && Vi(Fe, t), on.forEach(l), rn.forEach(l);
    for (var e = 0; e < Ie.length; e++) {
      var a = Ie[e];
      a.blockedOn === t && (a.blockedOn = null);
    }
    for (; 0 < Ie.length && (e = Ie[0], e.blockedOn === null); )
      y0(e), e.blockedOn === null && Ie.shift();
    if (e = (t.ownerDocument || t).$$reactFormReplay, e != null)
      for (a = 0; a < e.length; a += 3) {
        var u = e[a], n = e[a + 1], i = u[al] || null;
        if (typeof n == "function")
          i || v0(e);
        else if (i) {
          var c = null;
          if (n && n.hasAttribute("formAction")) {
            if (u = n, i = n[al] || null)
              c = i.formAction;
            else if (Do(u) !== null) continue;
          } else c = i.action;
          typeof c == "function" ? e[a + 1] = c : (e.splice(a, 3), a -= 3), v0(e);
        }
      }
  }
  function h0() {
    function t(n) {
      n.canIntercept && n.info === "react-transition" && n.intercept({
        handler: function() {
          return new Promise(function(i) {
            return u = i;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function l() {
      u !== null && (u(), u = null), a || setTimeout(e, 20);
    }
    function e() {
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
      var a = !1, u = null;
      return navigation.addEventListener("navigate", t), navigation.addEventListener("navigatesuccess", l), navigation.addEventListener("navigateerror", l), setTimeout(e, 100), function() {
        a = !0, navigation.removeEventListener("navigate", t), navigation.removeEventListener("navigatesuccess", l), navigation.removeEventListener("navigateerror", l), u !== null && (u(), u = null);
      };
    }
  }
  function jo(t) {
    this._internalRoot = t;
  }
  wi.prototype.render = jo.prototype.render = function(t) {
    var l = this._internalRoot;
    if (l === null) throw Error(o(409));
    var e = l.current, a = pl();
    c0(e, a, t, l, null, null);
  }, wi.prototype.unmount = jo.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var l = t.containerInfo;
      c0(t.current, 2, null, t, null, null), Mi(), l[Aa] = null;
    }
  };
  function wi(t) {
    this._internalRoot = t;
  }
  wi.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var l = ur();
      t = { blockedOn: null, target: t, priority: l };
      for (var e = 0; e < Ie.length && l !== 0 && l < Ie[e].priority; e++) ;
      Ie.splice(e, 0, t), e === 0 && y0(t);
    }
  };
  var g0 = s.version;
  if (g0 !== "19.3.0")
    throw Error(
      o(
        527,
        g0,
        "19.3.0"
      )
    );
  K.findDOMNode = function(t) {
    var l = t._reactInternals;
    if (l === void 0)
      throw typeof t.render == "function" ? Error(o(188)) : (t = Object.keys(t).join(","), Error(o(268, t)));
    return t = I(l), t = t !== null ? _(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var Bh = {
    bundleType: 0,
    version: "19.3.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: Y,
    reconcilerVersion: "19.3.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ji = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ji.isDisabled && Ji.supportsFiber)
      try {
        Su = Ji.inject(
          Bh
        ), dl = Ji;
      } catch {
      }
  }
  return yn.createRoot = function(t, l) {
    if (!N(t)) throw Error(o(299));
    var e = !1, a = "", u = id, n = cd, i = fd;
    return l != null && (l.unstable_strictMode === !0 && (e = !0), l.identifierPrefix !== void 0 && (a = l.identifierPrefix), l.onUncaughtError !== void 0 && (u = l.onUncaughtError), l.onCaughtError !== void 0 && (n = l.onCaughtError), l.onRecoverableError !== void 0 && (i = l.onRecoverableError)), l = n0(
      t,
      1,
      !1,
      null,
      null,
      e,
      a,
      null,
      u,
      n,
      i,
      h0
    ), t[Aa] = l.current, oo(t), new jo(l);
  }, yn.hydrateRoot = function(t, l, e) {
    if (!N(t)) throw Error(o(299));
    var a = !1, u = "", n = id, i = cd, c = fd, r = null;
    return e != null && (e.unstable_strictMode === !0 && (a = !0), e.identifierPrefix !== void 0 && (u = e.identifierPrefix), e.onUncaughtError !== void 0 && (n = e.onUncaughtError), e.onCaughtError !== void 0 && (i = e.onCaughtError), e.onRecoverableError !== void 0 && (c = e.onRecoverableError), e.formState !== void 0 && (r = e.formState)), l = n0(
      t,
      1,
      !0,
      l,
      e ?? null,
      a,
      u,
      r,
      n,
      i,
      c,
      h0
    ), l.context = i0(null), e = l.current, a = pl(), a = cc(a), u = He(a), u.callback = null, Be(e, u, a), e = a, l.current.lanes = e, pu(l, e), te(l), t[Aa] = l.current, oo(t), new wi(l);
  }, yn.version = "19.3.0", yn;
}
var _0;
function Wh() {
  if (_0) return Yo.exports;
  _0 = 1;
  function f() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f);
      } catch (s) {
        console.error(s);
      }
  }
  return f(), Yo.exports = Jh(), Yo.exports;
}
var $h = Wh();
function Fh(f) {
  return f && typeof f == "object" ? f : typeof window > "u" ? null : window;
}
function x0({
  snapshot: f,
  ownSeat: s = null,
  replayIndex: y = null,
  flipVertical: o = !1
} = {}) {
  const N = f && typeof f == "object" && !Array.isArray(f) ? { ...f } : {};
  return {
    ...N,
    boardCode: String(N.boardCode || ""),
    version: Number.isFinite(Number(N.version)) ? Number(N.version) : 0,
    ownSeat: s,
    replayIndex: y,
    flipVertical: !!o
  };
}
function Ih({
  node: f,
  snapshot: s,
  ownSeat: y,
  replayIndex: o,
  flipVertical: N,
  onMoveClick: x,
  elmRuntime: D
} = {}) {
  const X = Fh(D)?.Elm?.BoardIsland?.init;
  if (typeof X != "function" || !f)
    return {
      app: null,
      sendSnapshotUpdate: () => {
      },
      cleanup: () => {
      }
    };
  const I = x0({
    snapshot: s,
    ownSeat: y,
    replayIndex: o,
    flipVertical: N
  }), _ = X({ node: f, flags: I }), E = _?.ports?.boardMoveClicked, B = _?.ports?.boardSnapshot, dt = (H) => {
    typeof x == "function" && x(H);
  };
  return typeof E?.subscribe == "function" && E.subscribe(dt), { app: _, sendSnapshotUpdate: (H) => {
    typeof B?.send == "function" && B.send(x0(H));
  }, cleanup: () => {
    typeof E?.unsubscribe == "function" && E.unsubscribe(dt), typeof _?.unmount == "function" && _.unmount();
  } };
}
function kh({
  snapshot: f,
  ownSeat: s,
  replayIndex: y,
  flipVertical: o,
  onMoveClick: N
}) {
  const x = ol.useRef(null), D = ol.useRef(null), M = ol.useRef(N);
  M.current = N;
  const X = ol.useMemo(
    () => ({ snapshot: f, ownSeat: s, replayIndex: y, flipVertical: o }),
    [f, s, y, o]
  );
  return ol.useEffect(() => (D.current = Ih({
    node: x.current,
    ...X,
    onMoveClick: (I) => M.current?.(I)
  }), () => {
    D.current?.cleanup?.(), D.current = null;
  }), []), ol.useEffect(() => {
    D.current?.sendSnapshotUpdate?.(X);
  }, [X]), /* @__PURE__ */ T.jsx("div", { ref: x, "data-testid": "elm-board-island-host" });
}
const Ph = {
  marginTop: "20px",
  padding: "18px",
  borderRadius: "20px",
  background: "#f7fbf7",
  border: "1px solid rgba(16, 42, 26, 0.08)"
}, t1 = {
  display: "flex",
  justifyContent: "space-between",
  gap: "12px",
  alignItems: "flex-start",
  flexWrap: "wrap"
}, l1 = {
  margin: 0,
  fontSize: "1.25rem"
}, C0 = {
  margin: "4px 0 0",
  fontSize: "0.9rem",
  color: "#567062"
}, e1 = {
  display: "inline-flex",
  alignItems: "center",
  gap: "8px",
  borderRadius: "999px",
  padding: "8px 12px",
  background: "rgba(16, 42, 26, 0.08)",
  fontWeight: 700
}, a1 = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))",
  gap: "12px",
  marginTop: "16px"
}, u1 = {
  padding: "14px",
  borderRadius: "16px",
  background: "#ffffff",
  border: "1px solid rgba(16, 42, 26, 0.08)"
}, le = {
  margin: 0,
  fontSize: "0.78rem",
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  color: "#567062"
}, ee = {
  margin: "8px 0 0",
  fontSize: "1rem",
  fontWeight: 700,
  wordBreak: "break-word"
}, n1 = {
  marginTop: "16px",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: "10px 16px"
}, Ee = {
  paddingTop: "10px",
  borderTop: "1px solid rgba(16, 42, 26, 0.08)"
}, i1 = {
  display: "flex",
  gap: "10px",
  marginTop: "16px",
  flexWrap: "wrap"
}, mn = (f = !1) => ({
  border: "1px solid rgba(16, 42, 26, 0.12)",
  borderRadius: "999px",
  padding: "8px 14px",
  background: f ? "#fff1f1" : "#f7fbf7",
  color: f ? "#9b1c1c" : "#102a1a",
  fontWeight: 700,
  cursor: "pointer"
}), c1 = {
  margin: "8px 0 0",
  paddingLeft: "18px",
  color: "#33513f"
};
function H0(f) {
  return f === "p1" ? "Blue" : f === "p2" ? "Red" : "Unknown";
}
function f1(f) {
  const s = String(f || "").trim();
  return s === "vacant" ? "Open" : s === "disconnected" ? "Disconnected" : s === "active" ? "Occupied" : s || "Unknown";
}
function o1(f, s) {
  return f === "p1" ? "Blue" : f === "p2" ? "Red" : s ? "Waiting List" : "Watching";
}
function r1(f) {
  return `${Number(f?.p1 || 0)} - ${Number(f?.p2 || 0)}`;
}
function s1(f) {
  if (Array.isArray(f?.moves)) return f.moves.length;
  const s = Number(f?.moveCount);
  return Number.isFinite(s) ? s : 0;
}
function d1(f) {
  const s = Math.max(0, Math.ceil(Number(f || 0) / 1e3));
  if (s < 60) return `${s}s`;
  const y = Math.ceil(s / 60);
  if (y < 60) return `${y}m`;
  const o = Math.ceil(y / 60);
  return o < 24 ? `${o}h` : `${Math.ceil(o / 24)}d`;
}
function Vo(f, s, y) {
  const o = Number(f);
  if (!Number.isFinite(o) || o <= 0) return null;
  const N = o - Number(s || 0), x = d1(Math.abs(N));
  return y === "future" ? N >= 0 ? `in ${x}` : `${x} ago` : N <= 0 ? `${x} ago` : `in ${x}`;
}
function y1(f, s) {
  const y = Number(f?.moveTimeLimitMs);
  if (!Number.isFinite(y) || y <= 0) return "Untimed";
  const o = `${Math.round(y / 1e3)}s per move`, N = Number(f?.turnStartedAt);
  if (!Number.isFinite(N) || N <= 0) return o;
  const x = N + y, D = Vo(x, s, "future");
  return D ? `${o} • deadline ${D}` : o;
}
function m1(f) {
  const s = Number(f?.watcherCount);
  return Number.isFinite(s) && s >= 0 ? s : null;
}
function M0(f, s) {
  const y = f?.[s] || {}, o = f1(y.status);
  return {
    id: s,
    label: `${H0(s)} seat`,
    name: o === "Open" ? null : String(y.name || "").trim() || null,
    status: o
  };
}
function v1({
  snapshot: f,
  ownSeat: s = null,
  connectionStatus: y = "idle",
  isWaitingListMember: o = !1,
  claimableSeatActions: N = [],
  leaveSeatAction: x = null,
  waitingListAction: D = null,
  pauseResumeActions: M = [],
  newRoundAction: X = null,
  nowMs: I = Date.now()
} = {}) {
  if (!f || typeof f != "object") return null;
  const _ = f.game && typeof f.game == "object" ? f.game : {}, E = _.players && typeof _.players == "object" ? _.players : {}, B = Array.isArray(_.waitingList) ? _.waitingList : [], dt = String(f.boardCode || _.roomId || "").trim(), At = String(_.turn || "").trim();
  return {
    boardCode: dt,
    connectionStatus: String(y || "idle"),
    viewerRole: o1(String(s || "").trim(), o),
    seats: [M0(E, "p1"), M0(E, "p2")],
    sessionState: String(_.status || "waiting"),
    currentTurn: At ? H0(At) : "Waiting",
    score: r1(_.score),
    moveCount: s1(_),
    timerSummary: y1(_, I),
    waitingListCount: B.length,
    waitingListNames: B.map((_t) => String(_t?.displayName || "").trim()).filter(Boolean),
    watcherCount: m1(_),
    lastActivity: Vo(_.lastActivityAt, I, "past"),
    expiry: Vo(_.expiresAt, I, "future"),
    actions: {
      claimableSeatActions: Array.isArray(N) ? N : [],
      leaveSeatAction: x,
      waitingListAction: D,
      pauseResumeActions: Array.isArray(M) ? M : [],
      newRoundAction: X
    }
  };
}
function R0({ label: f, value: s, children: y }) {
  return /* @__PURE__ */ T.jsxs("article", { style: u1, children: [
    /* @__PURE__ */ T.jsx("p", { style: le, children: f }),
    /* @__PURE__ */ T.jsx("p", { style: ee, children: s }),
    y
  ] });
}
function h1({
  snapshot: f,
  ownSeat: s,
  connectionStatus: y,
  isWaitingListMember: o,
  claimableSeatActions: N,
  leaveSeatAction: x,
  waitingListAction: D,
  pauseResumeActions: M,
  newRoundAction: X,
  onClaimSeat: I,
  onLeaveSeat: _,
  onWaitingListAction: E,
  onPauseAction: B,
  onResumeAction: dt,
  onNewRoundAction: At,
  nowMs: _t
}) {
  const H = v1({
    snapshot: f,
    ownSeat: s,
    connectionStatus: y,
    isWaitingListMember: o,
    claimableSeatActions: N,
    leaveSeatAction: x,
    waitingListAction: D,
    pauseResumeActions: M,
    newRoundAction: X,
    nowMs: _t
  });
  return H ? /* @__PURE__ */ T.jsxs("section", { style: Ph, "aria-label": "Match details", children: [
    /* @__PURE__ */ T.jsxs("div", { style: t1, children: [
      /* @__PURE__ */ T.jsxs("div", { children: [
        /* @__PURE__ */ T.jsx("h2", { style: l1, children: "Match details" }),
        /* @__PURE__ */ T.jsxs("p", { style: C0, children: [
          "Board ",
          H.boardCode || "not selected"
        ] })
      ] }),
      /* @__PURE__ */ T.jsx("div", { style: e1, children: H.viewerRole })
    ] }),
    /* @__PURE__ */ T.jsxs("div", { style: a1, children: [
      /* @__PURE__ */ T.jsx(R0, { label: "Connection Status", value: H.connectionStatus }),
      H.seats.map((ft) => /* @__PURE__ */ T.jsx(
        R0,
        {
          label: ft.label,
          value: ft.name || ft.status,
          children: /* @__PURE__ */ T.jsxs("p", { style: C0, children: [
            "Status: ",
            ft.status
          ] })
        },
        ft.id
      ))
    ] }),
    /* @__PURE__ */ T.jsxs("div", { style: n1, children: [
      /* @__PURE__ */ T.jsxs("div", { style: Ee, children: [
        /* @__PURE__ */ T.jsx("p", { style: le, children: "Session State" }),
        /* @__PURE__ */ T.jsx("p", { style: ee, children: H.sessionState })
      ] }),
      /* @__PURE__ */ T.jsxs("div", { style: Ee, children: [
        /* @__PURE__ */ T.jsx("p", { style: le, children: "Current Turn" }),
        /* @__PURE__ */ T.jsx("p", { style: ee, children: H.currentTurn })
      ] }),
      /* @__PURE__ */ T.jsxs("div", { style: Ee, children: [
        /* @__PURE__ */ T.jsx("p", { style: le, children: "Score" }),
        /* @__PURE__ */ T.jsx("p", { style: ee, children: H.score })
      ] }),
      /* @__PURE__ */ T.jsxs("div", { style: Ee, children: [
        /* @__PURE__ */ T.jsx("p", { style: le, children: "Move Count" }),
        /* @__PURE__ */ T.jsx("p", { style: ee, children: H.moveCount })
      ] }),
      /* @__PURE__ */ T.jsxs("div", { style: Ee, children: [
        /* @__PURE__ */ T.jsx("p", { style: le, children: "Move Timer" }),
        /* @__PURE__ */ T.jsx("p", { style: ee, children: H.timerSummary })
      ] }),
      /* @__PURE__ */ T.jsxs("div", { style: Ee, children: [
        /* @__PURE__ */ T.jsx("p", { style: le, children: "Waiting List" }),
        /* @__PURE__ */ T.jsx("p", { style: ee, children: H.waitingListCount }),
        H.waitingListNames.length > 0 ? /* @__PURE__ */ T.jsx("ul", { style: c1, children: H.waitingListNames.map((ft) => /* @__PURE__ */ T.jsx("li", { children: ft }, ft)) }) : null
      ] }),
      H.watcherCount !== null ? /* @__PURE__ */ T.jsxs("div", { style: Ee, children: [
        /* @__PURE__ */ T.jsx("p", { style: le, children: "Watchers" }),
        /* @__PURE__ */ T.jsx("p", { style: ee, children: H.watcherCount })
      ] }) : null,
      H.lastActivity ? /* @__PURE__ */ T.jsxs("div", { style: Ee, children: [
        /* @__PURE__ */ T.jsx("p", { style: le, children: "Last Activity" }),
        /* @__PURE__ */ T.jsx("p", { style: ee, children: H.lastActivity })
      ] }) : null,
      H.expiry ? /* @__PURE__ */ T.jsxs("div", { style: Ee, children: [
        /* @__PURE__ */ T.jsx("p", { style: le, children: "Expires" }),
        /* @__PURE__ */ T.jsx("p", { style: ee, children: H.expiry })
      ] }) : null
    ] }),
    /* @__PURE__ */ T.jsxs("div", { style: i1, children: [
      H.actions.claimableSeatActions.map((ft) => /* @__PURE__ */ T.jsx(
        "button",
        {
          type: "button",
          style: mn(!1),
          onClick: () => I?.(ft.seatId),
          children: ft.label
        },
        ft.seatId
      )),
      H.actions.leaveSeatAction ? /* @__PURE__ */ T.jsx(
        "button",
        {
          type: "button",
          style: mn(!!H.actions.leaveSeatAction.danger),
          onClick: () => _?.(),
          children: H.actions.leaveSeatAction.label
        }
      ) : null,
      H.actions.waitingListAction ? /* @__PURE__ */ T.jsx(
        "button",
        {
          type: "button",
          style: mn(!1),
          onClick: () => E?.(H.actions.waitingListAction.type),
          children: H.actions.waitingListAction.label
        }
      ) : null,
      H.actions.pauseResumeActions.map((ft) => /* @__PURE__ */ T.jsx(
        "button",
        {
          type: "button",
          style: mn(!1),
          onClick: () => {
            if (ft.type === "pause") {
              B?.("pause");
              return;
            }
            dt?.("resume");
          },
          children: ft.label
        },
        ft.type
      )),
      H.actions.newRoundAction ? /* @__PURE__ */ T.jsx(
        "button",
        {
          type: "button",
          style: mn(!1),
          onClick: () => At?.(),
          children: H.actions.newRoundAction.label
        }
      ) : null
    ] })
  ] }) : null;
}
const g1 = {
  marginTop: "20px",
  padding: "18px",
  borderRadius: "20px",
  background: "#f7fbf7",
  border: "1px solid rgba(16, 42, 26, 0.08)"
}, S1 = {
  margin: 0,
  fontSize: "1.1rem"
}, b1 = {
  margin: "8px 0 0",
  color: "#567062",
  lineHeight: 1.5
}, p1 = {
  marginTop: "14px",
  padding: "12px 14px",
  borderRadius: "14px",
  background: "#ffffff",
  border: "1px solid rgba(16, 42, 26, 0.08)",
  overflowWrap: "anywhere"
}, T1 = {
  color: "#0a5f20",
  fontWeight: 700,
  textDecoration: "none"
}, E1 = {
  display: "flex",
  gap: "10px",
  marginTop: "14px",
  flexWrap: "wrap",
  alignItems: "flex-start"
}, z1 = {
  border: "1px solid rgba(16, 42, 26, 0.12)",
  borderRadius: "999px",
  padding: "8px 14px",
  background: "#f7fbf7",
  color: "#102a1a",
  fontWeight: 700,
  cursor: "pointer"
}, O1 = {
  display: "inline-flex",
  flexDirection: "column",
  gap: "8px",
  alignItems: "center",
  textDecoration: "none",
  color: "#102a1a",
  fontWeight: 700
}, N1 = {
  width: "112px",
  height: "112px",
  borderRadius: "14px",
  background: "#ffffff",
  border: "1px solid rgba(16, 42, 26, 0.08)",
  padding: "6px",
  objectFit: "contain"
};
function Fi() {
  return globalThis.window?.location ?? globalThis.location ?? null;
}
function B0() {
  return globalThis.window?.navigator ?? globalThis.navigator ?? null;
}
function Y0() {
  return globalThis.window?.document ?? globalThis.document ?? null;
}
function q0(f) {
  return String(f || "").trim();
}
function A1(f) {
  return f ? typeof f.href == "string" && f.href ? f.href : `${f.origin || ""}${f.pathname || "/react"}${f.search || ""}${f.hash || ""}` : "";
}
function wo(f, { locationLike: s = Fi() } = {}) {
  const y = q0(f), o = A1(s);
  if (!y || !o) return "";
  const N = new URL(o);
  return N.pathname = "/react", N.search = "", N.hash = "", N.searchParams.set("board", y), N.toString();
}
function _1(f, { locationLike: s = Fi() } = {}) {
  const y = wo(f, { locationLike: s });
  return y ? `/api/qr?url=${encodeURIComponent(y)}` : "";
}
function x1(f, s) {
  if (!s?.body || typeof s.createElement != "function")
    return !1;
  const y = s.createElement("textarea");
  y.value = f, y.setAttribute?.("readonly", "readonly"), y.style.position = "fixed", y.style.top = "-1000px", y.style.opacity = "0", s.body.appendChild(y);
  try {
    return y.focus?.(), y.select?.(), s.execCommand?.("copy") === !0;
  } finally {
    typeof s.body.removeChild == "function" ? s.body.removeChild(y) : y.remove?.();
  }
}
async function C1({
  boardCode: f,
  locationLike: s = Fi(),
  navigatorLike: y = B0(),
  documentLike: o = Y0()
} = {}) {
  const N = wo(f, { locationLike: s });
  if (!N)
    return { ok: !1, error: "Share link unavailable." };
  if (typeof y?.clipboard?.writeText == "function")
    try {
      return await y.clipboard.writeText(N), { ok: !0, text: N };
    } catch {
    }
  return x1(N, o) ? { ok: !0, text: N } : { ok: !1, error: "Could not copy link. Copy it manually." };
}
function M1({
  boardCode: f,
  locationLike: s = Fi(),
  navigatorLike: y = B0(),
  documentLike: o = Y0(),
  onToast: N
}) {
  const x = q0(f);
  if (!x) return null;
  const D = wo(x, { locationLike: s }), M = _1(x, { locationLike: s });
  return /* @__PURE__ */ T.jsxs("section", { style: g1, "aria-label": "Share board link", children: [
    /* @__PURE__ */ T.jsx("h2", { style: S1, children: "Share" }),
    /* @__PURE__ */ T.jsx("p", { style: b1, children: "Copy the React board link or scan the QR code to open this board in the product shell." }),
    /* @__PURE__ */ T.jsx("div", { style: p1, children: /* @__PURE__ */ T.jsx("a", { href: D, style: T1, children: D }) }),
    /* @__PURE__ */ T.jsxs("div", { style: E1, children: [
      /* @__PURE__ */ T.jsx(
        "button",
        {
          type: "button",
          style: z1,
          onClick: async () => {
            const X = await C1({
              boardCode: x,
              locationLike: s,
              navigatorLike: y,
              documentLike: o
            });
            N?.(
              X.ok ? "Link copied to clipboard." : X.error || "Could not copy link. Copy it manually."
            );
          },
          children: "Copy Link"
        }
      ),
      /* @__PURE__ */ T.jsxs("a", { href: D, style: O1, children: [
        /* @__PURE__ */ T.jsx(
          "img",
          {
            src: M,
            alt: `QR code for board ${x}`,
            style: N1
          }
        ),
        "Open board link"
      ] })
    ] })
  ] });
}
const R1 = {
  position: "relative",
  display: "inline-flex",
  justifyContent: "flex-end"
}, D1 = {
  border: "1px solid rgba(16, 42, 26, 0.12)",
  borderRadius: "999px",
  padding: "9px 14px",
  background: "#f7fbf7",
  color: "#102a1a",
  fontWeight: 700,
  cursor: "pointer"
}, U1 = {
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
}, D0 = {
  border: "1px solid rgba(16, 42, 26, 0.1)",
  borderRadius: "10px",
  padding: "8px 10px",
  textAlign: "left",
  background: "#f7fbf7",
  color: "#102a1a",
  fontWeight: 700,
  cursor: "pointer"
};
function j1({
  menuOpen: f,
  onToggle: s,
  onSelectRules: y,
  onSelectHistory: o
}) {
  return /* @__PURE__ */ T.jsxs("div", { style: R1, children: [
    /* @__PURE__ */ T.jsx(
      "button",
      {
        type: "button",
        style: D1,
        "aria-expanded": !!f,
        "aria-haspopup": "menu",
        "aria-label": f ? "Close menu" : "Open menu",
        onClick: () => s?.(!f),
        children: "Menu"
      }
    ),
    f ? /* @__PURE__ */ T.jsxs("div", { style: U1, role: "menu", "aria-label": "App menu", children: [
      /* @__PURE__ */ T.jsx(
        "button",
        {
          type: "button",
          role: "menuitem",
          style: D0,
          onClick: () => y?.(),
          children: "Rules"
        }
      ),
      /* @__PURE__ */ T.jsx(
        "button",
        {
          type: "button",
          role: "menuitem",
          style: D0,
          onClick: () => o?.(),
          children: "History"
        }
      )
    ] }) : null
  ] });
}
const H1 = {
  marginTop: "18px"
}, B1 = {
  display: "grid",
  gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
  gap: "8px"
}, Y1 = (f) => ({
  border: "1px solid rgba(16, 42, 26, 0.12)",
  borderRadius: "999px",
  padding: "8px 10px",
  background: f ? "#102a1a" : "#f7fbf7",
  color: f ? "#f6fbf4" : "#102a1a",
  fontWeight: 700,
  cursor: "pointer",
  width: "100%"
});
function q1({ tabs: f = [], activeTab: s = "home", onChangeTab: y }) {
  const o = Array.isArray(f) ? f : [];
  return o.length === 0 ? null : /* @__PURE__ */ T.jsx("nav", { style: H1, "aria-label": "Shell navigation", children: /* @__PURE__ */ T.jsx("div", { style: B1, children: o.map((N) => {
    const x = String(N.id || "").trim(), D = String(N.label || x || "Tab"), M = x === s;
    return /* @__PURE__ */ T.jsx(
      "button",
      {
        type: "button",
        style: Y1(M),
        "aria-label": `Go to ${D} section`,
        "aria-current": M ? "page" : void 0,
        onClick: () => y?.(x),
        children: D
      },
      x
    );
  }) }) });
}
function G1({ open: f, onClose: s }) {
  return f ? /* @__PURE__ */ T.jsxs(
    "section",
    {
      className: "react-shell-modal",
      "aria-label": "Traceball rules",
      role: "dialog",
      "aria-modal": "true",
      children: [
        /* @__PURE__ */ T.jsxs("header", { className: "react-shell-modal-header", children: [
          /* @__PURE__ */ T.jsx("h2", { children: "Rules" }),
          /* @__PURE__ */ T.jsx(
            "button",
            {
              type: "button",
              className: "react-shell-modal-close",
              onClick: s,
              children: "Close"
            }
          )
        ] }),
        /* @__PURE__ */ T.jsxs("ul", { className: "react-shell-modal-list", children: [
          /* @__PURE__ */ T.jsx("li", { children: "Ball movement is one-step movement between neighboring dots." }),
          /* @__PURE__ */ T.jsx("li", { children: "You cannot reuse a segment that has already been drawn." }),
          /* @__PURE__ */ T.jsx("li", { children: "Landing on a visited dot, boundary rebound point, or gate-mouth center dot causes a bounce and grants an extra move." }),
          /* @__PURE__ */ T.jsx("li", { children: "You score by entering the opponent gate." }),
          /* @__PURE__ */ T.jsx("li", { children: "Own goal counts for the opponent." }),
          /* @__PURE__ */ T.jsx("li", { children: "No legal moves on your turn means you lose the round." }),
          /* @__PURE__ */ T.jsx("li", { children: "In online matches, server-authoritative timers and turn control decide pause, timeout, and legality." })
        ] })
      ]
    }
  ) : null;
}
function Q1(f) {
  const s = Number(f);
  return Number.isFinite(s) && s >= 0 ? s : 0;
}
function X1({ open: f, localHistoryCount: s = 0, onClose: y }) {
  if (!f) return null;
  const o = Q1(s);
  return /* @__PURE__ */ T.jsxs(
    "section",
    {
      className: "react-shell-modal",
      "aria-label": "Match history",
      role: "dialog",
      "aria-modal": "true",
      children: [
        /* @__PURE__ */ T.jsxs("header", { className: "react-shell-modal-header", children: [
          /* @__PURE__ */ T.jsx("h2", { children: "History" }),
          /* @__PURE__ */ T.jsx(
            "button",
            {
              type: "button",
              className: "react-shell-modal-close",
              onClick: y,
              children: "Close"
            }
          )
        ] }),
        /* @__PURE__ */ T.jsx("p", { children: "History replay will move here next." }),
        /* @__PURE__ */ T.jsxs("p", { children: [
          "Local snapshots available: ",
          o
        ] }),
        /* @__PURE__ */ T.jsx("p", { className: "react-shell-modal-note", children: "This slice is UI scaffolding only and does not claim full replay controls yet." })
      ]
    }
  );
}
function L1(f) {
  if (typeof f != "function")
    throw new Error("Fetch API unavailable.");
  return f;
}
async function Z1(f) {
  return f.json();
}
async function V1({ clientId: f, moveTimeLimitSeconds: s }, { fetchImpl: y = globalThis.fetch } = {}) {
  const o = L1(y), N = Number(s), x = {
    clientId: String(f || "").trim(),
    moveTimeLimitSeconds: Number.isFinite(N) ? N : 15
  }, D = await o("/api/rooms", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(x)
  });
  if (!D.ok)
    throw new Error(`Board creation failed: ${D.status}`);
  return Z1(D);
}
function K1(f = globalThis.window?.location || globalThis.location) {
  const s = f?.protocol === "https:" ? "wss:" : "ws:", y = f?.host || "localhost";
  return `${s}//${y}/ws`;
}
function w1({
  roomId: f,
  clientId: s,
  onMessage: y,
  onStatus: o,
  WebSocketImpl: N = globalThis.window?.WebSocket || globalThis.WebSocket,
  socketUrl: x = K1()
} = {}) {
  if (typeof N != "function")
    throw new Error("WebSocket unavailable.");
  const D = new N(x);
  return D.onopen = () => {
    o?.("connected"), D.send(
      JSON.stringify({
        type: "watch",
        roomId: String(f || "").trim(),
        clientId: String(s || "").trim()
      })
    );
  }, D.onmessage = (M) => {
    try {
      y?.(JSON.parse(M.data));
    } catch {
      y?.({ type: "error", error: "malformed websocket message" });
    }
  }, D.onerror = () => {
    o?.("error");
  }, D.onclose = () => {
    o?.("disconnected");
  }, {
    socket: D,
    send(M) {
      D.send(JSON.stringify(M));
    },
    close() {
      D.close?.();
    }
  };
}
const U0 = "traceballElmClientId", $i = "traceballPlayerName", J1 = "traceballOnlineMoveTimer";
function Ii() {
  return globalThis.window?.localStorage || globalThis.localStorage;
}
function W1(f = Math.random) {
  return f().toString(36).slice(2, 12);
}
function $1({
  storage: f = Ii(),
  random: s = Math.random
} = {}) {
  const y = f?.getItem?.(U0);
  if (y) return y;
  const o = `traceball-elm-${W1(s)}`;
  return f?.setItem?.(U0, o), o;
}
function G0(f = Math.random) {
  const s = (y) => y[Math.floor(f() * y.length)];
  return `${s(["Neon", "Turbo", "Cosmic", "Lucky", "Pixel", "Rocket", "Thunder"])} ${s(["Striker", "Falcon", "Comet", "Phantom", "Kicker", "Ace", "Wizard"])}`;
}
function Q0(f, s = "") {
  return String(f || "").replace(/\s+/g, " ").trim().slice(0, 24) || s;
}
function F1({
  storage: f = Ii(),
  randomName: s = G0
} = {}) {
  const y = String(f?.getItem?.($i) || ""), o = Q0(y, "");
  if (o && o !== "Elm Player")
    return f?.setItem?.($i, o), o;
  const N = s();
  return f?.setItem?.($i, N), N;
}
function I1(f, { storage: s = Ii(), randomName: y = G0 } = {}) {
  const o = Q0(f, y());
  return s?.setItem?.($i, o), o;
}
function k1(f, s = 15) {
  const y = Number(f);
  return Number.isFinite(y) && y >= 0 ? y : s;
}
function P1({
  storage: f = Ii(),
  fallback: s = 15
} = {}) {
  return k1(
    f?.getItem?.(J1),
    s
  );
}
function tg({
  clientId: f = "",
  playerName: s = "",
  connectionStatus: y = "idle",
  currentBoardCode: o = "",
  isWaitingListMember: N = !1,
  boardState: x = null,
  boardList: D = [],
  mainTab: M = "home",
  mode: X = "online",
  toast: I = null,
  onlineMoveTimer: _ = 15,
  localMoveTimer: E = 15,
  historyPanelOpen: B = !1,
  rulesPanelOpen: dt = !1
} = {}) {
  return {
    clientId: f,
    playerName: s,
    connectionStatus: y,
    currentBoardCode: o,
    isWaitingListMember: N,
    boardState: x,
    boardList: D,
    mainTab: M,
    mode: X,
    toast: I,
    onlineSetup: {
      moveTimeLimitSeconds: _
    },
    localSetup: {
      moveTimeLimitSeconds: E
    },
    historyPanelOpen: B,
    rulesPanelOpen: dt
  };
}
function lg(f, s, y) {
  if (!y || typeof y != "object") return !1;
  const o = String(f || "").trim(), N = String(y.boardCode || "").trim();
  if (o && N && o !== N) return !1;
  if (!s || typeof s != "object") return !0;
  const x = String(s.boardCode || "").trim();
  if (!x || x !== N) return !0;
  const D = Number(s.version), M = Number(y.version);
  return Number.isFinite(D) ? Number.isFinite(M) ? M > D : !1 : !0;
}
function eg(f, s) {
  if (!s || typeof s != "object") return f;
  switch (s.type) {
    case "hydrateShell":
      return { ...f, ...s.payload };
    case "setPlayerName":
      return { ...f, playerName: String(s.playerName || "") };
    case "setConnectionStatus":
      return { ...f, connectionStatus: String(s.status || "idle") };
    case "setCurrentBoardCode":
      return {
        ...f,
        currentBoardCode: String(s.boardCode || ""),
        isWaitingListMember: !1
      };
    case "setWaitingListMembership":
      return {
        ...f,
        isWaitingListMember: !!s.isMember
      };
    case "receiveBoardState":
      return lg(
        f.currentBoardCode,
        f.boardState,
        s.boardState
      ) ? {
        ...f,
        boardState: s.boardState,
        currentBoardCode: String(
          s.boardState?.boardCode || f.currentBoardCode || ""
        )
      } : f;
    case "receiveBoardList":
      return {
        ...f,
        boardList: Array.isArray(s.boardList) ? s.boardList : Array.isArray(s.boardList?.rooms) ? s.boardList.rooms : []
      };
    case "setMainTab":
      return { ...f, mainTab: String(s.mainTab || f.mainTab) };
    case "setMode":
      return { ...f, mode: String(s.mode || f.mode) };
    case "setToast":
      return { ...f, toast: s.toast ?? null };
    case "setHistoryPanelOpen":
      return { ...f, historyPanelOpen: !!s.open };
    case "setRulesPanelOpen":
      return { ...f, rulesPanelOpen: !!s.open };
    case "setOnlineMoveTimer":
      return {
        ...f,
        onlineSetup: {
          ...f.onlineSetup,
          moveTimeLimitSeconds: Number(s.seconds)
        }
      };
    case "setLocalMoveTimer":
      return {
        ...f,
        localSetup: {
          ...f.localSetup,
          moveTimeLimitSeconds: Number(s.seconds)
        }
      };
    default:
      return f;
  }
}
const ag = {
  minHeight: "100vh",
  display: "grid",
  placeItems: "center",
  padding: "32px 20px",
  background: "radial-gradient(circle at top, rgba(10, 143, 40, 0.18), transparent 38%), linear-gradient(180deg, #f6fbf4 0%, #e4f0e2 100%)",
  color: "#102a1a"
}, ug = {
  width: "min(720px, 100%)",
  borderRadius: "24px",
  padding: "28px",
  background: "rgba(255, 255, 255, 0.92)",
  boxShadow: "0 24px 70px rgba(16, 42, 26, 0.16)",
  border: "1px solid rgba(16, 42, 26, 0.08)"
}, ng = {
  margin: 0,
  fontSize: "0.85rem",
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: "#0a8f28",
  fontWeight: 700
}, ig = {
  margin: "10px 0 12px",
  fontSize: "clamp(2rem, 4vw, 3.25rem)",
  lineHeight: 1.05
}, Xo = {
  margin: 0,
  fontSize: "1.05rem",
  lineHeight: 1.6,
  color: "#33513f"
}, cg = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
  gap: "14px",
  marginTop: "24px"
}, vu = {
  padding: "16px",
  borderRadius: "18px",
  background: "#f7fbf7",
  border: "1px solid rgba(16, 42, 26, 0.08)"
}, Pe = {
  margin: 0,
  fontSize: "0.78rem",
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  color: "#567062"
}, hu = {
  margin: "8px 0 0",
  fontSize: "1rem",
  fontWeight: 700,
  wordBreak: "break-word"
}, fg = {
  width: "100%",
  marginTop: "10px",
  padding: "12px 14px",
  borderRadius: "12px",
  border: "1px solid rgba(16, 42, 26, 0.14)",
  fontSize: "1rem",
  boxSizing: "border-box"
}, Lo = {
  display: "flex",
  gap: "10px",
  marginTop: "18px",
  flexWrap: "wrap"
}, vn = (f) => ({
  border: "1px solid rgba(16, 42, 26, 0.12)",
  borderRadius: "999px",
  padding: "8px 14px",
  background: f ? "#102a1a" : "#f7fbf7",
  color: f ? "#f6fbf4" : "#102a1a",
  fontWeight: 700,
  cursor: "pointer"
}), Wi = {
  marginTop: "18px",
  padding: "16px",
  borderRadius: "16px",
  background: "#eef7f0",
  border: "1px dashed rgba(16, 42, 26, 0.18)",
  color: "#153124",
  fontWeight: 600
}, og = {
  marginTop: "24px",
  padding: "16px 18px",
  borderRadius: "18px",
  background: "#102a1a",
  color: "#f6fbf4",
  lineHeight: 1.55
}, rg = {
  marginTop: "18px",
  display: "grid",
  gap: "14px"
}, hn = {
  padding: "18px",
  borderRadius: "18px",
  background: "#f7fbf7",
  border: "1px solid rgba(16, 42, 26, 0.08)"
}, gn = {
  margin: "0 0 10px",
  fontSize: "1.2rem"
}, sg = {
  display: "grid",
  gap: "10px",
  gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))"
}, dg = {
  display: "inline-block",
  width: "10px",
  height: "10px",
  borderRadius: "999px",
  marginRight: "8px",
  background: "#9aa79e"
};
function ze(f) {
  return String(f || "").trim();
}
function yg(f) {
  const s = Number(f);
  return Number.isFinite(s) ? s : 0;
}
function X0(f) {
  const s = f?.game?.players;
  return s && typeof s == "object" ? s : null;
}
function mg(f) {
  const s = String(f || "").trim();
  return s === "active" || s === "disconnected";
}
function vg(f) {
  return f === "p1" ? "Claim Blue" : "Claim Red";
}
function hg(f) {
  return f?.game?.status === "playing" || f?.game?.status === "paused";
}
function gg() {
  return globalThis.window?.history ?? globalThis.history ?? null;
}
function Jo() {
  return globalThis.window?.location ?? globalThis.location ?? null;
}
function Sg(f) {
  return f ? typeof f.href == "string" && f.href ? f.href : `${f.origin || "http://localhost"}${f.pathname || "/react"}${f.search || ""}${f.hash || ""}` : "";
}
function bg({
  locationLike: f = Jo()
} = {}) {
  const s = Sg(f);
  if (!s) return "";
  const y = new URL(s);
  return ze(
    y.searchParams.get("board") || y.searchParams.get("room") || y.searchParams.get("code") || ""
  );
}
function pg(f) {
  if (!f || typeof f != "object" || String(f.type || "") !== "state") return null;
  const s = ze(f.boardCode || f.roomId), y = f.board && typeof f.board == "object", o = f.game && typeof f.game == "object";
  return !s || !y && !o ? null : {
    boardCode: s,
    version: yg(f.version),
    ...y ? { board: f.board } : {},
    ...o ? { game: f.game } : {}
  };
}
function Tg(f, { historyLike: s = gg(), locationLike: y = Jo() } = {}) {
  if (!y || typeof s?.replaceState != "function")
    return null;
  const o = typeof y.href == "string" && y.href ? y.href : `${y.origin || "http://localhost"}${y.pathname || "/react"}${y.search || ""}${y.hash || ""}`, N = new URL(o);
  N.pathname = "/react", f ? N.searchParams.set("board", String(f).trim()) : N.searchParams.delete("board");
  const x = `${N.pathname}${N.search}${N.hash}`;
  return s.replaceState(s.state ?? null, "", x), x;
}
function Eg({
  currentBoardCode: f,
  clientId: s,
  dispatch: y,
  onOwnSeat: o,
  onMessage: N,
  connect: x = w1
}) {
  const D = ze(f);
  return !D || typeof x != "function" ? null : x({
    roomId: D,
    clientId: String(s || ""),
    onStatus(M) {
      y?.({ type: "setConnectionStatus", status: M });
    },
    onMessage(M) {
      if (N?.(M), M?.type === "joined") {
        const I = String(M.playerId || "").trim();
        (I === "p1" || I === "p2") && (o?.(I), y?.({ type: "setWaitingListMembership", isMember: !1 }));
        return;
      }
      if (M?.type === "left") {
        o?.(null), y?.({ type: "setWaitingListMembership", isMember: !1 }), y?.({ type: "setToast", toast: "You left the board." });
        return;
      }
      if (M?.type === "waitingListJoined") {
        y?.({ type: "setWaitingListMembership", isMember: !0 });
        return;
      }
      if (M?.type === "waitingListLeft") {
        y?.({ type: "setWaitingListMembership", isMember: !1 });
        return;
      }
      if (M?.type === "BoardNotFound" && typeof M.message == "string") {
        y?.({ type: "setToast", toast: M.message });
        return;
      }
      if (M?.type === "error" && typeof M.error == "string") {
        y?.({ type: "setToast", toast: M.error });
        return;
      }
      const X = pg(M);
      X && y?.({ type: "receiveBoardState", boardState: X });
    }
  });
}
function Zo({
  roomId: f,
  clientId: s,
  dispatch: y,
  setOwnSeat: o,
  connectionRef: N,
  activeBoardRef: x,
  onMessage: D,
  connect: M = Eg
}) {
  const X = ze(f);
  if (!X || typeof M != "function") return null;
  if (x?.current === X && N?.current)
    return N.current;
  N?.current?.close?.(), N && (N.current = null), x && (x.current = X), o?.(null);
  const I = M({
    currentBoardCode: X,
    clientId: s,
    dispatch: y,
    onOwnSeat: o,
    onMessage: D
  });
  return N && (N.current = I), I;
}
function zg({ snapshot: f, ownSeat: s } = {}) {
  const y = String(s || "").trim();
  if (y === "p1" || y === "p2") return [];
  const o = X0(f);
  return o ? ["p1", "p2"].filter((N) => o?.[N]?.status === "vacant").map((N) => ({ seatId: N, label: vg(N) })) : [];
}
function Og({ ownSeat: f, snapshot: s } = {}) {
  const y = String(f || "").trim();
  return y !== "p1" && y !== "p2" ? null : hg(s) ? { label: "Leave Seat (Forfeit)", danger: !0 } : { label: "Leave Seat", danger: !1 };
}
function Ng({
  ownSeat: f,
  snapshot: s,
  isWaitingListMember: y
} = {}) {
  const o = String(f || "").trim();
  if (o === "p1" || o === "p2") return null;
  if (y)
    return { type: "leave", label: "Leave Waiting List" };
  const N = X0(s);
  return N && ["p1", "p2"].every(
    (D) => mg(N?.[D]?.status)
  ) ? { type: "join", label: "Join Waiting List" } : null;
}
function Ag({ ownSeat: f, snapshot: s } = {}) {
  const y = String(f || "").trim();
  if (y !== "p1" && y !== "p2") return [];
  const o = String(s?.game?.status || "").trim();
  return o === "playing" ? s?.game?.turn === y ? [{ type: "pause", label: "Pause Game" }] : [] : o === "paused" ? (s?.game?.pause?.resumeTurn || s?.game?.pause?.byPlayerId || null) === y ? [{ type: "resume", label: "Resume Game" }] : [] : [];
}
function _g({ ownSeat: f, snapshot: s } = {}) {
  const y = String(f || "").trim();
  if (y !== "p1" && y !== "p2") return null;
  const o = String(s?.game?.status || "").trim();
  return o === "finished" ? { label: "Continue", reason: "between-rounds" } : o === "paused" && s?.game?.pause?.byPlayerId === y ? { label: "Start New Round", reason: "paused-owner" } : null;
}
function xg({
  clientId: f,
  dispatch: s,
  startWatching: y,
  locationLike: o = Jo()
}) {
  const N = bg({ locationLike: o });
  return N ? (s?.({ type: "setCurrentBoardCode", boardCode: N }), y?.({
    roomId: N,
    clientId: f,
    onMessage(x) {
      x?.type === "BoardNotFound" && typeof x.message == "string" && s?.({ type: "setToast", toast: x.message }), x?.type === "error" && typeof x.error == "string" && s?.({ type: "setToast", toast: x.error });
    }
  })) : null;
}
function Cg(f) {
  const s = f?.point;
  if (!s || typeof s != "object") return null;
  const y = Number(s.x), o = Number(s.y);
  return !Number.isFinite(y) || !Number.isFinite(o) ? null : { x: y, y: o };
}
function ta(f) {
  return typeof f?.send == "function" && Number(f?.socket?.readyState) === 1;
}
function Mg({
  payload: f,
  ownSeat: s,
  connection: y,
  dispatch: o
}) {
  if (!ta(y)) {
    o?.({
      type: "setToast",
      toast: "Connection unavailable. Reconnect to move."
    });
    return;
  }
  const N = String(s || "").trim();
  if (N !== "p1" && N !== "p2") {
    o?.({ type: "setToast", toast: "Join a seat to move." });
    return;
  }
  const x = Cg(f);
  if (!x) {
    o?.({ type: "setToast", toast: "Invalid move target." });
    return;
  }
  try {
    y.send({ type: "move", to: x });
  } catch {
    o?.({
      type: "setToast",
      toast: "Move could not be sent. Reconnect and try again."
    });
  }
}
function Rg({
  seatId: f,
  currentBoardCode: s,
  clientId: y,
  playerName: o,
  connection: N,
  dispatch: x
}) {
  if (!ta(N)) {
    x?.({
      type: "setToast",
      toast: "Connection unavailable. Reconnect to claim a seat."
    });
    return;
  }
  const D = String(f || "").trim();
  if (D !== "p1" && D !== "p2") {
    x?.({ type: "setToast", toast: "Invalid seat selection." });
    return;
  }
  N.send({
    type: "claimSeat",
    seatId: D,
    name: String(o || "").trim(),
    roomId: ze(s),
    clientId: String(y || "").trim()
  });
}
function Dg({
  currentBoardCode: f,
  clientId: s,
  playerName: y,
  connection: o,
  dispatch: N
}) {
  if (!ta(o)) {
    N?.({
      type: "setToast",
      toast: "Connection unavailable. Reconnect to join the waiting list."
    });
    return;
  }
  o.send({
    type: "joinWaitingList",
    name: String(y || "").trim(),
    roomId: ze(f),
    clientId: String(s || "").trim()
  });
}
function Ug({
  currentBoardCode: f,
  clientId: s,
  connection: y,
  dispatch: o
}) {
  if (!ta(y)) {
    o?.({
      type: "setToast",
      toast: "Connection unavailable. Reconnect to leave the waiting list."
    });
    return;
  }
  y.send({
    type: "leaveWaitingList",
    roomId: ze(f),
    clientId: String(s || "").trim()
  });
}
function jg({ ownSeat: f, connection: s, dispatch: y }) {
  const o = String(f || "").trim();
  if (o !== "p1" && o !== "p2") {
    y?.({ type: "setToast", toast: "You are not occupying a seat." });
    return;
  }
  if (!ta(s)) {
    y?.({
      type: "setToast",
      toast: "Connection unavailable. Reconnect to leave your seat."
    });
    return;
  }
  s.send({ type: "leave" });
}
function Hg({ ownSeat: f, connection: s, dispatch: y }) {
  const o = String(f || "").trim();
  if (o !== "p1" && o !== "p2") {
    y?.({ type: "setToast", toast: "You are not occupying a seat." });
    return;
  }
  if (!ta(s)) {
    y?.({
      type: "setToast",
      toast: "Connection unavailable. Reconnect to pause."
    });
    return;
  }
  s.send({ type: "pause" });
}
function Bg({ ownSeat: f, connection: s, dispatch: y }) {
  const o = String(f || "").trim();
  if (o !== "p1" && o !== "p2") {
    y?.({ type: "setToast", toast: "You are not occupying a seat." });
    return;
  }
  if (!ta(s)) {
    y?.({
      type: "setToast",
      toast: "Connection unavailable. Reconnect to resume."
    });
    return;
  }
  s.send({ type: "resume" });
}
function Yg({ ownSeat: f, connection: s, dispatch: y }) {
  const o = String(f || "").trim();
  if (o !== "p1" && o !== "p2") {
    y?.({ type: "setToast", toast: "You are not occupying a seat." });
    return;
  }
  if (!ta(s)) {
    y?.({
      type: "setToast",
      toast: "Connection unavailable. Reconnect to continue."
    });
    return;
  }
  s.send({ type: "reset" });
}
async function qg({
  clientId: f,
  moveTimeLimitSeconds: s,
  dispatch: y,
  create: o = V1,
  syncUrl: N = Tg,
  startWatching: x,
  refreshBoardList: D
}) {
  try {
    const M = await o({ clientId: f, moveTimeLimitSeconds: s }), X = ze(M?.roomId);
    if (!X)
      throw new Error("Board creation response missing roomId.");
    return y?.({ type: "setCurrentBoardCode", boardCode: X }), N?.(X), x?.({ roomId: X, clientId: f }), await D?.(), M;
  } catch (M) {
    return y?.({
      type: "setToast",
      toast: M instanceof Error && M.message ? M.message : "Board creation failed."
    }), null;
  }
}
function Gg({ initialState: f }) {
  const [s, y] = ol.useReducer(eg, f), [o, N] = ol.useState(null), [x, D] = ol.useState(!1), M = ol.useRef(null), X = ol.useRef(""), I = f?.demoBoardSnapshot || null, _ = s.boardState || I, E = String(s.connectionStatus || "idle"), B = zg({
    snapshot: _,
    ownSeat: o
  }), dt = Og({
    ownSeat: o,
    snapshot: _
  }), At = Ng({
    ownSeat: o,
    snapshot: _,
    isWaitingListMember: s.isWaitingListMember
  }), _t = Ag({
    ownSeat: o,
    snapshot: _
  }), H = _g({
    ownSeat: o,
    snapshot: _
  });
  ol.useEffect(() => {
    const d = xg({
      clientId: s.clientId,
      dispatch: y,
      startWatching: ({ roomId: A, clientId: q, onMessage: G }) => Zo({
        roomId: A,
        clientId: q,
        dispatch: y,
        setOwnSeat: N,
        connectionRef: M,
        activeBoardRef: X,
        onMessage: G
      })
    });
    return () => {
      M.current === d && d && (X.current = "", M.current = null, d.close?.());
    };
  }, []), ol.useEffect(() => {
    const d = ze(s.currentBoardCode);
    if (!d) {
      M.current = null, N(null), y({ type: "setConnectionStatus", status: "idle" });
      return;
    }
    let A = null;
    try {
      A = Zo({
        roomId: d,
        clientId: s.clientId,
        dispatch: y,
        setOwnSeat: N,
        connectionRef: M,
        activeBoardRef: X,
        onMessage: null
      });
    } catch {
      X.current = "", M.current = null, y({ type: "setConnectionStatus", status: "error" });
      return;
    }
    return () => {
      M.current === A && (X.current = "", M.current = null, A?.close?.());
    };
  }, [s.currentBoardCode, s.clientId]);
  const ft = s.clientId && s.clientId.length > 6 ? `...${s.clientId.slice(-6)}` : "identity ready", $t = (d) => {
    const A = d.target.value;
    y({ type: "setPlayerName", playerName: A }), I1(A);
  }, ae = async () => {
    await qg({
      clientId: s.clientId,
      moveTimeLimitSeconds: s.onlineSetup.moveTimeLimitSeconds,
      dispatch: y,
      startWatching: ({ roomId: d, clientId: A }) => Zo({
        roomId: d,
        clientId: A,
        dispatch: y,
        setOwnSeat: N,
        connectionRef: M,
        activeBoardRef: X
      })
    });
  }, El = (d) => {
    Rg({
      seatId: d,
      currentBoardCode: s.currentBoardCode,
      clientId: s.clientId,
      playerName: s.playerName,
      connection: M.current,
      dispatch: y
    });
  }, zl = () => {
    jg({
      ownSeat: o,
      connection: M.current,
      dispatch: y
    });
  }, Ft = (d) => {
    if (d === "join") {
      Dg({
        currentBoardCode: s.currentBoardCode,
        clientId: s.clientId,
        playerName: s.playerName,
        connection: M.current,
        dispatch: y
      });
      return;
    }
    Ug({
      currentBoardCode: s.currentBoardCode,
      clientId: s.clientId,
      connection: M.current,
      dispatch: y
    });
  }, $ = () => {
    Hg({
      ownSeat: o,
      connection: M.current,
      dispatch: y
    });
  }, at = () => {
    Bg({
      ownSeat: o,
      connection: M.current,
      dispatch: y
    });
  }, Ol = () => {
    Yg({
      ownSeat: o,
      connection: M.current,
      dispatch: y
    });
  }, ll = (d) => {
    y({ type: "setToast", toast: d });
  }, el = Array.isArray(_?.game?.moves) ? _.game.moves.length : 0, Jt = () => {
    D(!1), y({ type: "setHistoryPanelOpen", open: !1 }), y({ type: "setRulesPanelOpen", open: !0 });
  }, Hl = () => {
    D(!1), y({ type: "setRulesPanelOpen", open: !1 }), y({ type: "setHistoryPanelOpen", open: !0 });
  }, ue = () => {
    y({ type: "setRulesPanelOpen", open: !1 });
  }, Ct = () => {
    y({ type: "setHistoryPanelOpen", open: !1 });
  }, R = [
    { id: "home", label: "Home" },
    { id: "play", label: "Play" },
    { id: "match", label: "Match" },
    s.currentBoardCode ? { id: "share", label: "Share" } : { id: "menu", label: "Menu" }
  ], L = new Set(R.map((d) => d.id)).has(s.mainTab) ? s.mainTab : "home", yt = L === "home", nt = L === "play", rl = L === "match", Nl = L === "share", ne = L === "menu";
  return /* @__PURE__ */ T.jsx("main", { style: ag, children: /* @__PURE__ */ T.jsxs("section", { style: ug, children: [
    /* @__PURE__ */ T.jsxs(
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
          /* @__PURE__ */ T.jsxs("div", { style: { flex: "1 1 420px", minWidth: 0 }, children: [
            /* @__PURE__ */ T.jsx("p", { style: ng, children: "React product shell" }),
            /* @__PURE__ */ T.jsx("h1", { style: ig, children: "Traceball Arena" }),
            /* @__PURE__ */ T.jsx("p", { style: Xo, children: "The React shell owns product state while Elm renders the board island. Online authority remains on the server." })
          ] }),
          /* @__PURE__ */ T.jsx(
            j1,
            {
              menuOpen: x,
              onToggle: D,
              onSelectRules: Jt,
              onSelectHistory: Hl
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ T.jsx(
      q1,
      {
        tabs: R,
        activeTab: L,
        onChangeTab: (d) => y({ type: "setMainTab", mainTab: d })
      }
    ),
    /* @__PURE__ */ T.jsxs("div", { style: { marginTop: "16px" }, children: [
      /* @__PURE__ */ T.jsx("p", { style: Pe, children: "Active Tab" }),
      /* @__PURE__ */ T.jsx("p", { style: hu, children: L })
    ] }),
    /* @__PURE__ */ T.jsxs("div", { style: rg, className: "shell-sections", children: [
      /* @__PURE__ */ T.jsxs(
        "section",
        {
          style: hn,
          className: "shell-section-card",
          "data-section": "home",
          "data-visible": yt ? "true" : "false",
          children: [
            /* @__PURE__ */ T.jsx("h2", { style: gn, children: "Home setup" }),
            /* @__PURE__ */ T.jsxs("div", { style: cg, children: [
              /* @__PURE__ */ T.jsxs("article", { style: vu, children: [
                /* @__PURE__ */ T.jsx("p", { style: Pe, children: "Player Name" }),
                /* @__PURE__ */ T.jsx(
                  "input",
                  {
                    "aria-label": "Player name",
                    value: s.playerName || "",
                    onChange: $t,
                    style: fg,
                    placeholder: "Enter your name"
                  }
                )
              ] }),
              /* @__PURE__ */ T.jsxs("article", { style: vu, children: [
                /* @__PURE__ */ T.jsx("p", { style: Pe, children: "Client Identity" }),
                /* @__PURE__ */ T.jsx("p", { style: hu, children: ft })
              ] })
            ] }),
            /* @__PURE__ */ T.jsxs("div", { style: { marginTop: "16px" }, children: [
              /* @__PURE__ */ T.jsx("p", { style: Pe, children: "Selected Mode" }),
              /* @__PURE__ */ T.jsxs("div", { style: Lo, children: [
                /* @__PURE__ */ T.jsx(
                  "button",
                  {
                    type: "button",
                    style: vn(s.mode === "online"),
                    onClick: () => y({ type: "setMode", mode: "online" }),
                    children: "Online"
                  }
                ),
                /* @__PURE__ */ T.jsx(
                  "button",
                  {
                    type: "button",
                    style: vn(s.mode === "local"),
                    onClick: () => y({ type: "setMode", mode: "local" }),
                    children: "Local"
                  }
                )
              ] })
            ] }),
            s.mode === "online" ? /* @__PURE__ */ T.jsxs(
              "article",
              {
                style: { ...vu, marginTop: "14px" },
                "data-setup-card": "online",
                children: [
                  /* @__PURE__ */ T.jsx("p", { style: Pe, children: "Online setup" }),
                  /* @__PURE__ */ T.jsxs("p", { style: hu, children: [
                    "Move timer: ",
                    s.onlineSetup.moveTimeLimitSeconds,
                    "s"
                  ] }),
                  /* @__PURE__ */ T.jsx("div", { style: Lo, children: /* @__PURE__ */ T.jsx(
                    "button",
                    {
                      type: "button",
                      style: vn(!1),
                      onClick: ae,
                      children: "Create Board"
                    }
                  ) })
                ]
              }
            ) : /* @__PURE__ */ T.jsxs(
              "article",
              {
                style: { ...vu, marginTop: "14px" },
                "data-setup-card": "local",
                children: [
                  /* @__PURE__ */ T.jsx("p", { style: Pe, children: "Local setup" }),
                  /* @__PURE__ */ T.jsxs("p", { style: hu, children: [
                    "Move timer: ",
                    s.localSetup.moveTimeLimitSeconds,
                    "s"
                  ] }),
                  /* @__PURE__ */ T.jsx("p", { style: { ...Xo, marginTop: "8px" }, children: "Local board controls stay isolated from online room setup." })
                ]
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ T.jsxs(
        "section",
        {
          style: hn,
          className: "shell-section-card",
          "data-section": "play",
          "data-visible": nt ? "true" : "false",
          children: [
            /* @__PURE__ */ T.jsx("h2", { style: gn, children: "Play" }),
            /* @__PURE__ */ T.jsxs("div", { style: sg, children: [
              /* @__PURE__ */ T.jsxs("article", { style: vu, children: [
                /* @__PURE__ */ T.jsx("p", { style: Pe, children: "Board" }),
                /* @__PURE__ */ T.jsx("p", { style: hu, children: s.currentBoardCode || "Not selected" })
              ] }),
              /* @__PURE__ */ T.jsxs("article", { style: vu, children: [
                /* @__PURE__ */ T.jsx("p", { style: Pe, children: "Connection" }),
                /* @__PURE__ */ T.jsxs("p", { style: hu, children: [
                  /* @__PURE__ */ T.jsx(
                    "span",
                    {
                      style: {
                        ...dg,
                        background: E === "connected" ? "#0a8f28" : E === "error" ? "#d64545" : "#9aa79e"
                      }
                    }
                  ),
                  E
                ] })
              ] })
            ] }),
            _ ? /* @__PURE__ */ T.jsx("div", { style: Wi, children: /* @__PURE__ */ T.jsx(
              kh,
              {
                snapshot: _,
                ownSeat: o,
                replayIndex: null,
                flipVertical: !1,
                onMoveClick: (d) => {
                  console.info("Board move click", d), Mg({
                    payload: d,
                    ownSeat: o,
                    connection: M.current,
                    dispatch: y
                  });
                }
              }
            ) }) : /* @__PURE__ */ T.jsx("div", { style: Wi, children: "Board island not mounted yet" })
          ]
        }
      ),
      /* @__PURE__ */ T.jsxs(
        "section",
        {
          style: hn,
          className: "shell-section-card",
          "data-section": "match",
          "data-visible": rl ? "true" : "false",
          children: [
            /* @__PURE__ */ T.jsx("h2", { style: gn, children: "Match" }),
            _ ? /* @__PURE__ */ T.jsx(
              h1,
              {
                snapshot: _,
                ownSeat: o,
                connectionStatus: E,
                isWaitingListMember: s.isWaitingListMember,
                claimableSeatActions: B,
                leaveSeatAction: dt,
                waitingListAction: At,
                pauseResumeActions: _t,
                newRoundAction: H,
                onClaimSeat: El,
                onLeaveSeat: zl,
                onWaitingListAction: Ft,
                onPauseAction: $,
                onResumeAction: at,
                onNewRoundAction: Ol
              }
            ) : /* @__PURE__ */ T.jsx("div", { style: Wi, children: "Open or create a board to view match details." })
          ]
        }
      ),
      s.currentBoardCode ? /* @__PURE__ */ T.jsxs(
        "section",
        {
          style: hn,
          className: "shell-section-card",
          "data-section": "share",
          "data-visible": Nl ? "true" : "false",
          children: [
            /* @__PURE__ */ T.jsx("h2", { style: gn, children: "Share" }),
            Nl ? /* @__PURE__ */ T.jsx(
              M1,
              {
                boardCode: s.currentBoardCode,
                onToast: ll
              }
            ) : null
          ]
        }
      ) : /* @__PURE__ */ T.jsxs(
        "section",
        {
          style: hn,
          className: "shell-section-card",
          "data-section": "menu",
          "data-visible": ne ? "true" : "false",
          children: [
            /* @__PURE__ */ T.jsx("h2", { style: gn, children: "Menu" }),
            /* @__PURE__ */ T.jsx("p", { style: Xo, children: "Open lightweight product panels." }),
            /* @__PURE__ */ T.jsxs("div", { style: Lo, children: [
              /* @__PURE__ */ T.jsx(
                "button",
                {
                  type: "button",
                  style: vn(!1),
                  onClick: Jt,
                  children: "Rules"
                }
              ),
              /* @__PURE__ */ T.jsx(
                "button",
                {
                  type: "button",
                  style: vn(!1),
                  onClick: Hl,
                  children: "History"
                }
              )
            ] })
          ]
        }
      )
    ] }),
    s.toast ? /* @__PURE__ */ T.jsx("div", { style: { ...Wi, marginTop: "10px" }, children: s.toast }) : null,
    /* @__PURE__ */ T.jsx(G1, { open: s.rulesPanelOpen, onClose: ue }),
    /* @__PURE__ */ T.jsx(
      X1,
      {
        open: s.historyPanelOpen,
        localHistoryCount: el,
        onClose: Ct
      }
    ),
    /* @__PURE__ */ T.jsx("div", { style: og, children: "Elm remains the board and replay correctness surface. The server remains authoritative for seats, timers, pause/resume, winners, and online move validation." })
  ] }) });
}
const j0 = document.getElementById("react-root");
if (j0) {
  const f = tg({
    clientId: $1(),
    playerName: F1(),
    onlineMoveTimer: P1()
  });
  $h.createRoot(j0).render(
    /* @__PURE__ */ T.jsx(Lh.StrictMode, { children: /* @__PURE__ */ T.jsx(Gg, { initialState: f }) })
  );
}
