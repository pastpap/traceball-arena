function C1(f) {
  return f && f.__esModule && Object.prototype.hasOwnProperty.call(f, "default") ? f.default : f;
}
var Ro = { exports: {} }, rn = {};
var dm;
function R1() {
  if (dm) return rn;
  dm = 1;
  var f = /* @__PURE__ */ Symbol.for("react.transitional.element"), d = /* @__PURE__ */ Symbol.for("react.fragment");
  function g(o, O, _) {
    var U = null;
    if (_ !== void 0 && (U = "" + _), O.key !== void 0 && (U = "" + O.key), "key" in O) {
      _ = {};
      for (var Y in O)
        Y !== "key" && (_[Y] = O[Y]);
    } else _ = O;
    return O = _.ref, {
      $$typeof: f,
      type: o,
      key: U,
      ref: O !== void 0 ? O : null,
      props: _
    };
  }
  return rn.Fragment = d, rn.jsx = g, rn.jsxs = g, rn;
}
var mm;
function D1() {
  return mm || (mm = 1, Ro.exports = R1()), Ro.exports;
}
var N = D1(), Do = { exports: {} }, w = {};
var ym;
function U1() {
  if (ym) return w;
  ym = 1;
  var f = /* @__PURE__ */ Symbol.for("react.transitional.element"), d = /* @__PURE__ */ Symbol.for("react.portal"), g = /* @__PURE__ */ Symbol.for("react.fragment"), o = /* @__PURE__ */ Symbol.for("react.strict_mode"), O = /* @__PURE__ */ Symbol.for("react.profiler"), _ = /* @__PURE__ */ Symbol.for("react.consumer"), U = /* @__PURE__ */ Symbol.for("react.context"), Y = /* @__PURE__ */ Symbol.for("react.forward_ref"), G = /* @__PURE__ */ Symbol.for("react.suspense"), F = /* @__PURE__ */ Symbol.for("react.memo"), C = /* @__PURE__ */ Symbol.for("react.lazy"), E = /* @__PURE__ */ Symbol.for("react.activity"), j = /* @__PURE__ */ Symbol.for("react.view_transition"), dt = Symbol.iterator;
  function _t(m) {
    return m === null || typeof m != "object" ? null : (m = dt && m[dt] || m["@@iterator"], typeof m == "function" ? m : null);
  }
  var Nt = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, x = Object.assign, ct = {};
  function $t(m, A, X) {
    this.props = m, this.context = A, this.refs = ct, this.updater = X || Nt;
  }
  $t.prototype.isReactComponent = {}, $t.prototype.setState = function(m, A) {
    if (typeof m != "object" && typeof m != "function" && m != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, m, A, "setState");
  }, $t.prototype.forceUpdate = function(m) {
    this.updater.enqueueForceUpdate(this, m, "forceUpdate");
  };
  function le() {
  }
  le.prototype = $t.prototype;
  function zl(m, A, X) {
    this.props = m, this.context = A, this.refs = ct, this.updater = X || Nt;
  }
  var pl = zl.prototype = new le();
  pl.constructor = zl, x(pl, $t.prototype), pl.isPureReactComponent = !0;
  var Ft = Array.isArray;
  function I() {
  }
  var Z = { H: null, A: null, T: null, S: null }, Mt = Object.prototype.hasOwnProperty;
  function ll(m, A, X) {
    var Q = X.ref;
    return {
      $$typeof: f,
      type: m,
      key: A,
      ref: Q !== void 0 ? Q : null,
      props: X
    };
  }
  function el(m, A) {
    return ll(m.type, A, m.props);
  }
  function ol(m) {
    return typeof m == "object" && m !== null && m.$$typeof === f;
  }
  function Ee(m) {
    var A = { "=": "=0", ":": "=2" };
    return "$" + m.replace(/[=:]/g, function(X) {
      return A[X];
    });
  }
  var ke = /\/+/g;
  function jt(m, A) {
    return typeof m == "object" && m !== null && m.key != null ? Ee("" + m.key) : A.toString(36);
  }
  function R(m) {
    switch (m.status) {
      case "fulfilled":
        return m.value;
      case "rejected":
        throw m.reason;
      default:
        switch (typeof m.status == "string" ? m.then(I, I) : (m.status = "pending", m.then(
          function(A) {
            m.status === "pending" && (m.status = "fulfilled", m.value = A);
          },
          function(A) {
            m.status === "pending" && (m.status = "rejected", m.reason = A);
          }
        )), m.status) {
          case "fulfilled":
            return m.value;
          case "rejected":
            throw m.reason;
        }
    }
    throw m;
  }
  function V(m, A, X, Q, at) {
    var nt = typeof m;
    (nt === "undefined" || nt === "boolean") && (m = null);
    var ft = !1;
    if (m === null) ft = !0;
    else
      switch (nt) {
        case "bigint":
        case "string":
        case "number":
          ft = !0;
          break;
        case "object":
          switch (m.$$typeof) {
            case f:
            case d:
              ft = !0;
              break;
            case C:
              return ft = m._init, V(
                ft(m._payload),
                A,
                X,
                Q,
                at
              );
          }
      }
    if (ft)
      return at = at(m), ft = Q === "" ? "." + jt(m, 0) : Q, Ft(at) ? (X = "", ft != null && (X = ft.replace(ke, "$&/") + "/"), V(at, A, X, "", function(ue) {
        return ue;
      })) : at != null && (ol(at) && (at = el(
        at,
        X + (at.key == null || m && m.key === at.key ? "" : ("" + at.key).replace(
          ke,
          "$&/"
        ) + "/") + ft
      )), A.push(at)), 1;
    ft = 0;
    var B = Q === "" ? "." : Q + ":";
    if (Ft(m))
      for (var J = 0; J < m.length; J++)
        Q = m[J], nt = B + jt(Q, J), ft += V(
          Q,
          A,
          X,
          nt,
          at
        );
    else if (J = _t(m), typeof J == "function")
      for (m = J.call(m), J = 0; !(Q = m.next()).done; )
        Q = Q.value, nt = B + jt(Q, J++), ft += V(
          Q,
          A,
          X,
          nt,
          at
        );
    else if (nt === "object") {
      if (typeof m.then == "function")
        return V(
          R(m),
          A,
          X,
          Q,
          at
        );
      throw A = String(m), Error(
        "Objects are not valid as a React child (found: " + (A === "[object Object]" ? "object with keys {" + Object.keys(m).join(", ") + "}" : A) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return ft;
  }
  function K(m, A, X) {
    if (m == null) return m;
    var Q = [], at = 0;
    return V(m, Q, "", "", function(nt) {
      return A.call(X, nt, at++);
    }), Q;
  }
  function gt(m) {
    if (m._status === -1) {
      var A = m._result, X = A();
      X.then(
        function(Q) {
          (m._status === 0 || m._status === -1) && (m._status = 1, m._result = Q, X.status === void 0 && (X.status = "fulfilled", X.value = Q));
        },
        function(Q) {
          (m._status === 0 || m._status === -1) && (m._status = 2, m._result = Q, X.status === void 0 && (X.status = "rejected", X.reason = Q));
        }
      ), m._status === -1 && (m._status = 0, m._result = X);
    }
    if (m._status === 1) return m._result.default;
    throw m._result;
  }
  var rt = typeof reportError == "function" ? reportError : function(m) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var A = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof m == "object" && m !== null && typeof m.message == "string" ? String(m.message) : String(m),
        error: m
      });
      if (!window.dispatchEvent(A)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", m);
      return;
    }
    console.error(m);
  };
  function Hl(m) {
    var A = Z.T, X = {};
    X.types = A !== null ? A.types : null, Z.T = X;
    try {
      var Q = m(), at = Z.S;
      at !== null && at(X, Q), typeof Q == "object" && Q !== null && typeof Q.then == "function" && Q.then(I, rt);
    } catch (nt) {
      rt(nt);
    } finally {
      A !== null && X.types !== null && (A.types = X.types), Z.T = A;
    }
  }
  function ee(m) {
    var A = Z.T;
    if (A !== null) {
      var X = A.types;
      X === null ? A.types = [m] : X.indexOf(m) === -1 && X.push(m);
    } else Hl(ee.bind(null, m));
  }
  var Pe = {
    map: K,
    forEach: function(m, A, X) {
      K(
        m,
        function() {
          A.apply(this, arguments);
        },
        X
      );
    },
    count: function(m) {
      var A = 0;
      return K(m, function() {
        A++;
      }), A;
    },
    toArray: function(m) {
      return K(m, function(A) {
        return A;
      }) || [];
    },
    only: function(m) {
      if (!ol(m))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return m;
    }
  };
  return w.Activity = E, w.Children = Pe, w.Component = $t, w.Fragment = g, w.Profiler = O, w.PureComponent = zl, w.StrictMode = o, w.Suspense = G, w.ViewTransition = j, w.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Z, w.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(m) {
      return Z.H.useMemoCache(m);
    }
  }, w.addTransitionType = ee, w.cache = function(m) {
    return function() {
      return m.apply(null, arguments);
    };
  }, w.cacheSignal = function() {
    return null;
  }, w.cloneElement = function(m, A, X) {
    if (m == null)
      throw Error(
        "The argument must be a React element, but you passed " + m + "."
      );
    var Q = x({}, m.props), at = m.key;
    if (A != null)
      for (nt in A.key !== void 0 && (at = "" + A.key), A)
        !Mt.call(A, nt) || nt === "key" || nt === "__self" || nt === "__source" || nt === "ref" && A.ref === void 0 || (Q[nt] = A[nt]);
    var nt = arguments.length - 2;
    if (nt === 1) Q.children = X;
    else if (1 < nt) {
      for (var ft = Array(nt), B = 0; B < nt; B++)
        ft[B] = arguments[B + 2];
      Q.children = ft;
    }
    return ll(m.type, at, Q);
  }, w.createContext = function(m) {
    return m = {
      $$typeof: U,
      _currentValue: m,
      _currentValue2: m,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, m.Provider = m, m.Consumer = {
      $$typeof: _,
      _context: m
    }, m;
  }, w.createElement = function(m, A, X) {
    var Q, at = {}, nt = null;
    if (A != null)
      for (Q in A.key !== void 0 && (nt = "" + A.key), A)
        Mt.call(A, Q) && Q !== "key" && Q !== "__self" && Q !== "__source" && (at[Q] = A[Q]);
    var ft = arguments.length - 2;
    if (ft === 1) at.children = X;
    else if (1 < ft) {
      for (var B = Array(ft), J = 0; J < ft; J++)
        B[J] = arguments[J + 2];
      at.children = B;
    }
    if (m && m.defaultProps)
      for (Q in ft = m.defaultProps, ft)
        at[Q] === void 0 && (at[Q] = ft[Q]);
    return ll(m, nt, at);
  }, w.createRef = function() {
    return { current: null };
  }, w.forwardRef = function(m) {
    return { $$typeof: Y, render: m };
  }, w.isValidElement = ol, w.lazy = function(m) {
    return {
      $$typeof: C,
      _payload: { _status: -1, _result: m },
      _init: gt
    };
  }, w.memo = function(m, A) {
    return {
      $$typeof: F,
      type: m,
      compare: A === void 0 ? null : A
    };
  }, w.startTransition = Hl, w.unstable_useCacheRefresh = function() {
    return Z.H.useCacheRefresh();
  }, w.use = function(m) {
    return Z.H.use(m);
  }, w.useActionState = function(m, A, X) {
    return Z.H.useActionState(m, A, X);
  }, w.useCallback = function(m, A) {
    return Z.H.useCallback(m, A);
  }, w.useContext = function(m) {
    return Z.H.useContext(m);
  }, w.useDebugValue = function() {
  }, w.useDeferredValue = function(m, A) {
    return Z.H.useDeferredValue(m, A);
  }, w.useEffect = function(m, A) {
    return Z.H.useEffect(m, A);
  }, w.useEffectEvent = function(m) {
    return Z.H.useEffectEvent(m);
  }, w.useId = function() {
    return Z.H.useId();
  }, w.useImperativeHandle = function(m, A, X) {
    return Z.H.useImperativeHandle(m, A, X);
  }, w.useInsertionEffect = function(m, A) {
    return Z.H.useInsertionEffect(m, A);
  }, w.useLayoutEffect = function(m, A) {
    return Z.H.useLayoutEffect(m, A);
  }, w.useMemo = function(m, A) {
    return Z.H.useMemo(m, A);
  }, w.useOptimistic = function(m, A) {
    return Z.H.useOptimistic(m, A);
  }, w.useReducer = function(m, A, X) {
    return Z.H.useReducer(m, A, X);
  }, w.useRef = function(m) {
    return Z.H.useRef(m);
  }, w.useState = function(m) {
    return Z.H.useState(m);
  }, w.useSyncExternalStore = function(m, A, X) {
    return Z.H.useSyncExternalStore(
      m,
      A,
      X
    );
  }, w.useTransition = function() {
    return Z.H.useTransition();
  }, w.version = "19.3.0", w;
}
var vm;
function Xo() {
  return vm || (vm = 1, Do.exports = U1()), Do.exports;
}
var El = Xo();
const H1 = /* @__PURE__ */ C1(El);
var Uo = { exports: {} }, sn = {}, Ho = { exports: {} }, xo = {};
var hm;
function x1() {
  return hm || (hm = 1, (function(f) {
    function d(R, V) {
      var K = R.length;
      R.push(V);
      t: for (; 0 < K; ) {
        var gt = K - 1 >>> 1, rt = R[gt];
        if (0 < O(rt, V))
          R[gt] = V, R[K] = rt, K = gt;
        else break t;
      }
    }
    function g(R) {
      return R.length === 0 ? null : R[0];
    }
    function o(R) {
      if (R.length === 0) return null;
      var V = R[0], K = R.pop();
      if (K !== V) {
        R[0] = K;
        t: for (var gt = 0, rt = R.length, Hl = rt >>> 1; gt < Hl; ) {
          var ee = 2 * (gt + 1) - 1, Pe = R[ee], m = ee + 1, A = R[m];
          if (0 > O(Pe, K))
            m < rt && 0 > O(A, Pe) ? (R[gt] = A, R[m] = K, gt = m) : (R[gt] = Pe, R[ee] = K, gt = ee);
          else if (m < rt && 0 > O(A, K))
            R[gt] = A, R[m] = K, gt = m;
          else break t;
        }
      }
      return V;
    }
    function O(R, V) {
      var K = R.sortIndex - V.sortIndex;
      return K !== 0 ? K : R.id - V.id;
    }
    if (f.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var _ = performance;
      f.unstable_now = function() {
        return _.now();
      };
    } else {
      var U = Date, Y = U.now();
      f.unstable_now = function() {
        return U.now() - Y;
      };
    }
    var G = [], F = [], C = 1, E = null, j = 3, dt = !1, _t = !1, Nt = !1, x = !1, ct = typeof setTimeout == "function" ? setTimeout : null, $t = typeof clearTimeout == "function" ? clearTimeout : null, le = typeof setImmediate < "u" ? setImmediate : null;
    function zl(R) {
      for (var V = g(F); V !== null; ) {
        if (V.callback === null) o(F);
        else if (V.startTime <= R)
          o(F), V.sortIndex = V.expirationTime, d(G, V);
        else break;
        V = g(F);
      }
    }
    function pl(R) {
      if (Nt = !1, zl(R), !_t)
        if (g(G) !== null)
          _t = !0, Ft || (Ft = !0, ol());
        else {
          var V = g(F);
          V !== null && jt(pl, V.startTime - R);
        }
    }
    var Ft = !1, I = -1, Z = 5, Mt = -1;
    function ll() {
      return x ? !0 : !(f.unstable_now() - Mt < Z);
    }
    function el() {
      if (x = !1, Ft) {
        var R = f.unstable_now();
        Mt = R;
        var V = !0;
        try {
          t: {
            _t = !1, Nt && (Nt = !1, $t(I), I = -1), dt = !0;
            var K = j;
            try {
              l: {
                for (zl(R), E = g(G); E !== null && !(E.expirationTime > R && ll()); ) {
                  var gt = E.callback;
                  if (typeof gt == "function") {
                    E.callback = null, j = E.priorityLevel;
                    var rt = gt(
                      E.expirationTime <= R
                    );
                    if (R = f.unstable_now(), typeof rt == "function") {
                      E.callback = rt, zl(R), V = !0;
                      break l;
                    }
                    E === g(G) && o(G), zl(R);
                  } else o(G);
                  E = g(G);
                }
                if (E !== null) V = !0;
                else {
                  var Hl = g(F);
                  Hl !== null && jt(
                    pl,
                    Hl.startTime - R
                  ), V = !1;
                }
              }
              break t;
            } finally {
              E = null, j = K, dt = !1;
            }
            V = void 0;
          }
        } finally {
          V ? ol() : Ft = !1;
        }
      }
    }
    var ol;
    if (typeof le == "function")
      ol = function() {
        le(el);
      };
    else if (typeof MessageChannel < "u") {
      var Ee = new MessageChannel(), ke = Ee.port2;
      Ee.port1.onmessage = el, ol = function() {
        ke.postMessage(null);
      };
    } else
      ol = function() {
        ct(el, 0);
      };
    function jt(R, V) {
      I = ct(function() {
        R(f.unstable_now());
      }, V);
    }
    f.unstable_IdlePriority = 5, f.unstable_ImmediatePriority = 1, f.unstable_LowPriority = 4, f.unstable_NormalPriority = 3, f.unstable_Profiling = null, f.unstable_UserBlockingPriority = 2, f.unstable_cancelCallback = function(R) {
      R.callback = null;
    }, f.unstable_forceFrameRate = function(R) {
      0 > R || 125 < R ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Z = 0 < R ? Math.floor(1e3 / R) : 5;
    }, f.unstable_getCurrentPriorityLevel = function() {
      return j;
    }, f.unstable_next = function(R) {
      switch (j) {
        case 1:
        case 2:
        case 3:
          var V = 3;
          break;
        default:
          V = j;
      }
      var K = j;
      j = V;
      try {
        return R();
      } finally {
        j = K;
      }
    }, f.unstable_requestPaint = function() {
      x = !0;
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
      var K = j;
      j = R;
      try {
        return V();
      } finally {
        j = K;
      }
    }, f.unstable_scheduleCallback = function(R, V, K) {
      var gt = f.unstable_now();
      switch (typeof K == "object" && K !== null ? (K = K.delay, K = typeof K == "number" && 0 < K ? gt + K : gt) : K = gt, R) {
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
      return rt = K + rt, R = {
        id: C++,
        callback: V,
        priorityLevel: R,
        startTime: K,
        expirationTime: rt,
        sortIndex: -1
      }, K > gt ? (R.sortIndex = K, d(F, R), g(G) === null && R === g(F) && (Nt ? ($t(I), I = -1) : Nt = !0, jt(pl, K - gt))) : (R.sortIndex = rt, d(G, R), _t || dt || (_t = !0, Ft || (Ft = !0, ol()))), R;
    }, f.unstable_shouldYield = ll, f.unstable_wrapCallback = function(R) {
      var V = j;
      return function() {
        var K = j;
        j = V;
        try {
          return R.apply(this, arguments);
        } finally {
          j = K;
        }
      };
    };
  })(xo)), xo;
}
var gm;
function j1() {
  return gm || (gm = 1, Ho.exports = x1()), Ho.exports;
}
var jo = { exports: {} }, wt = {};
var Sm;
function B1() {
  if (Sm) return wt;
  Sm = 1;
  var f = Xo();
  function d(C) {
    var E = "https://react.dev/errors/" + C;
    if (1 < arguments.length) {
      E += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var j = 2; j < arguments.length; j++)
        E += "&args[]=" + encodeURIComponent(arguments[j]);
    }
    return "Minified React error #" + C + "; visit " + E + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function g() {
  }
  var o = {
    d: {
      f: g,
      r: function() {
        throw Error(d(522));
      },
      D: g,
      C: g,
      L: g,
      m: g,
      X: g,
      S: g,
      M: g
    },
    p: 0,
    findDOMNode: null
  }, O = /* @__PURE__ */ Symbol.for("react.portal"), _ = /* @__PURE__ */ Symbol.for("react.recoverable"), U = /* @__PURE__ */ Symbol.for("react.optimistic_key");
  function Y(C, E, j) {
    var dt = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: O,
      key: dt == null ? null : dt === U ? U : "" + dt,
      children: C,
      containerInfo: E,
      implementation: j
    };
  }
  var G = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function F(C, E) {
    if (C === "font") return "";
    if (typeof E == "string")
      return E === "use-credentials" ? E : "";
  }
  return wt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, wt.browser = function(C) {
    return { $$typeof: _, _reason: C };
  }, wt.createPortal = function(C, E) {
    var j = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!E || E.nodeType !== 1 && E.nodeType !== 9 && E.nodeType !== 11)
      throw Error(d(299));
    return Y(C, E, null, j);
  }, wt.flushSync = function(C) {
    var E = G.T, j = o.p;
    try {
      if (G.T = null, o.p = 2, C) return C();
    } finally {
      G.T = E, o.p = j, o.d.f();
    }
  }, wt.preconnect = function(C, E) {
    typeof C == "string" && (E ? (E = E.crossOrigin, E = typeof E == "string" ? E === "use-credentials" ? E : "" : void 0) : E = null, o.d.C(C, E));
  }, wt.prefetchDNS = function(C) {
    typeof C == "string" && o.d.D(C);
  }, wt.preinit = function(C, E) {
    if (typeof C == "string" && E && typeof E.as == "string") {
      var j = E.as, dt = F(j, E.crossOrigin), _t = typeof E.integrity == "string" ? E.integrity : void 0, Nt = typeof E.fetchPriority == "string" ? E.fetchPriority : void 0;
      j === "style" ? o.d.S(
        C,
        typeof E.precedence == "string" ? E.precedence : void 0,
        {
          crossOrigin: dt,
          integrity: _t,
          fetchPriority: Nt
        }
      ) : j === "script" && o.d.X(C, {
        crossOrigin: dt,
        integrity: _t,
        fetchPriority: Nt,
        nonce: typeof E.nonce == "string" ? E.nonce : void 0
      });
    }
  }, wt.preinitModule = function(C, E) {
    if (typeof C == "string")
      if (typeof E == "object" && E !== null) {
        if (E.as == null || E.as === "script") {
          var j = F(
            E.as,
            E.crossOrigin
          );
          o.d.M(C, {
            crossOrigin: j,
            integrity: typeof E.integrity == "string" ? E.integrity : void 0,
            nonce: typeof E.nonce == "string" ? E.nonce : void 0,
            fetchPriority: typeof E.fetchPriority == "string" ? E.fetchPriority : void 0
          });
        }
      } else E == null && o.d.M(C);
  }, wt.preload = function(C, E) {
    if (typeof C == "string" && typeof E == "object" && E !== null && typeof E.as == "string") {
      var j = E.as, dt = F(j, E.crossOrigin);
      o.d.L(C, j, {
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
  }, wt.preloadModule = function(C, E) {
    if (typeof C == "string")
      if (E) {
        var j = F(E.as, E.crossOrigin);
        o.d.m(C, {
          as: typeof E.as == "string" && E.as !== "script" ? E.as : void 0,
          crossOrigin: j,
          integrity: typeof E.integrity == "string" ? E.integrity : void 0,
          nonce: typeof E.nonce == "string" ? E.nonce : void 0,
          fetchPriority: typeof E.fetchPriority == "string" ? E.fetchPriority : void 0
        });
      } else o.d.m(C);
  }, wt.requestFormReset = function(C) {
    o.d.r(C);
  }, wt.unstable_batchedUpdates = function(C, E) {
    return C(E);
  }, wt.useFormState = function(C, E, j) {
    return G.H.useFormState(C, E, j);
  }, wt.useFormStatus = function() {
    return G.H.useHostTransitionStatus();
  }, wt.version = "19.3.0", wt;
}
var bm;
function Y1() {
  if (bm) return jo.exports;
  bm = 1;
  function f() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f);
      } catch (d) {
        console.error(d);
      }
  }
  return f(), jo.exports = B1(), jo.exports;
}
var Tm;
function q1() {
  if (Tm) return sn;
  Tm = 1;
  var f = j1(), d = Xo(), g = Y1();
  function o(t) {
    var l = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      l += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var e = 2; e < arguments.length; e++)
        l += "&args[]=" + encodeURIComponent(arguments[e]);
    }
    return "Minified React error #" + t + "; visit " + l + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function O(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function _(t) {
    for (var l = t, e = l; e && !e.alternate; )
      l = e, (l.flags & 4098) !== 0 && (t = l.return), e = l.return;
    for (; l.return; ) l = l.return;
    return l.tag === 3 ? t : null;
  }
  function U(t) {
    if (t.tag === 13) {
      var l = t.memoizedState;
      if (l === null && (t = t.alternate, t !== null && (l = t.memoizedState)), l !== null) return l.dehydrated;
    }
    return null;
  }
  function Y(t) {
    if (t.tag === 31) {
      var l = t.memoizedState;
      if (l === null && (t = t.alternate, t !== null && (l = t.memoizedState)), l !== null) return l.dehydrated;
    }
    return null;
  }
  function G(t) {
    if (_(t) !== t)
      throw Error(o(188));
  }
  function F(t) {
    var l = t.alternate;
    if (!l) {
      if (l = _(t), l === null) throw Error(o(188));
      return l !== t ? null : t;
    }
    for (var e = t, u = l; ; ) {
      var a = e.return;
      if (a === null) break;
      var n = a.alternate;
      if (n === null) {
        if (u = a.return, u !== null) {
          e = u;
          continue;
        }
        break;
      }
      if (a.child === n.child) {
        for (n = a.child; n; ) {
          if (n === e) return G(a), t;
          if (n === u) return G(a), l;
          n = n.sibling;
        }
        throw Error(o(188));
      }
      if (e.return !== u.return) e = a, u = n;
      else {
        for (var i = !1, c = a.child; c; ) {
          if (c === e) {
            i = !0, e = a, u = n;
            break;
          }
          if (c === u) {
            i = !0, u = a, e = n;
            break;
          }
          c = c.sibling;
        }
        if (!i) {
          for (c = n.child; c; ) {
            if (c === e) {
              i = !0, e = n, u = a;
              break;
            }
            if (c === u) {
              i = !0, u = n, e = a;
              break;
            }
            c = c.sibling;
          }
          if (!i) throw Error(o(189));
        }
      }
      if (e.alternate !== u) throw Error(o(190));
    }
    if (e.tag !== 3) throw Error(o(188));
    return e.stateNode.current === e ? t : l;
  }
  function C(t) {
    var l = t.tag;
    if (l === 5 || l === 26 || l === 27 || l === 6) return t;
    for (t = t.child; t !== null; ) {
      if (l = C(t), l !== null) return l;
      t = t.sibling;
    }
    return null;
  }
  function E(t, l, e, u, a, n) {
    for (; t !== null; ) {
      if ((t.tag === 5 || t.tag === 27 || t.tag === 6) && e(t, u, a, n) || (t.tag !== 22 || t.memoizedState === null) && (l || t.tag !== 5 && t.tag !== 27) && E(
        t.child,
        l,
        e,
        u,
        a,
        n
      ))
        return !0;
      t = t.sibling;
    }
    return !1;
  }
  function j(t) {
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
  function _t(t) {
    var l = [null, null], e = j(t);
    return e === null || Nt(
      l,
      t,
      e.child,
      { foundSelf: !1 }
    ), l;
  }
  function Nt(t, l, e, u) {
    for (; e !== null; ) {
      if (e === l) u.foundSelf = !0;
      else if (e.tag === 5 || e.tag === 27 || e.tag === 6) {
        if (u.foundSelf) return t[1] = e, !0;
        t[0] = e;
      } else if ((e.tag !== 22 || e.memoizedState === null) && Nt(
        t,
        l,
        e.child,
        u
      ))
        return !0;
      e = e.sibling;
    }
    return !1;
  }
  function x(t) {
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
  var ct = null, $t = null;
  function le(t, l, e) {
    return t === e ? !0 : t === l ? (ct = t, !0) : !1;
  }
  function zl(t, l, e) {
    return t === e ? ($t = t, !1) : t === l ? ($t !== null && (ct = t), !0) : !1;
  }
  function pl(t) {
    if (t === null) return null;
    do
      t = t === null ? null : t.return;
    while (t && t.tag !== 5 && t.tag !== 27 && t.tag !== 3);
    return t || null;
  }
  function Ft(t, l, e) {
    for (var u = 0, a = t; a; a = e(a)) u++;
    a = 0;
    for (var n = l; n; n = e(n)) a++;
    for (; 0 < u - a; ) t = e(t), u--;
    for (; 0 < a - u; ) l = e(l), a--;
    for (; u--; ) {
      if (t === l || l !== null && t === l.alternate)
        return t;
      t = e(t), l = e(l);
    }
    return null;
  }
  var I = Object.assign, Z = /* @__PURE__ */ Symbol.for("react.element"), Mt = /* @__PURE__ */ Symbol.for("react.transitional.element"), ll = /* @__PURE__ */ Symbol.for("react.portal"), el = /* @__PURE__ */ Symbol.for("react.fragment"), ol = /* @__PURE__ */ Symbol.for("react.strict_mode"), Ee = /* @__PURE__ */ Symbol.for("react.profiler"), ke = /* @__PURE__ */ Symbol.for("react.consumer"), jt = /* @__PURE__ */ Symbol.for("react.context"), R = /* @__PURE__ */ Symbol.for("react.forward_ref"), V = /* @__PURE__ */ Symbol.for("react.suspense"), K = /* @__PURE__ */ Symbol.for("react.suspense_list"), gt = /* @__PURE__ */ Symbol.for("react.memo"), rt = /* @__PURE__ */ Symbol.for("react.lazy"), Hl = /* @__PURE__ */ Symbol.for("react.activity"), ee = /* @__PURE__ */ Symbol.for("react.legacy_hidden"), Pe = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), m = /* @__PURE__ */ Symbol.for("react.view_transition"), A = /* @__PURE__ */ Symbol.for("react.recoverable"), X = Symbol.iterator;
  function Q(t) {
    return t === null || typeof t != "object" ? null : (t = X && t[X] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var at = /* @__PURE__ */ Symbol.for("react.client.reference");
  function nt(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === at ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case el:
        return "Fragment";
      case Ee:
        return "Profiler";
      case ol:
        return "StrictMode";
      case V:
        return "Suspense";
      case K:
        return "SuspenseList";
      case Hl:
        return "Activity";
      case m:
        return "ViewTransition";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case ll:
          return "Portal";
        case jt:
          return t.displayName || "Context";
        case ke:
          return (t._context.displayName || "Context") + ".Consumer";
        case R:
          var l = t.render;
          return t = t.displayName, t || (t = l.displayName || l.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case gt:
          return l = t.displayName || null, l !== null ? l : nt(t.type) || "Memo";
        case rt:
          l = t._payload, t = t._init;
          try {
            return nt(t(l));
          } catch {
          }
      }
    return null;
  }
  var ft = Array.isArray, B = d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, J = g.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ue = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, wi = [], Ou = -1;
  function Xl(t) {
    return { current: t };
  }
  function Xt(t) {
    0 > Ou || (t.current = wi[Ou], wi[Ou] = null, Ou--);
  }
  function bt(t, l) {
    Ou++, wi[Ou] = t.current, t.current = l;
  }
  var Ql = Xl(null), va = Xl(null), ze = Xl(null), mn = Xl(null);
  function yn(t, l) {
    switch (bt(ze, l), bt(va, t), bt(Ql, null), l.nodeType) {
      case 9:
      case 11:
        t = (t = l.documentElement) && (t = t.namespaceURI) ? E0(t) : 0;
        break;
      default:
        if (t = l.tagName, l = l.namespaceURI)
          l = E0(l), t = z0(l, t);
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
    Xt(Ql), bt(Ql, t);
  }
  function Au() {
    Xt(Ql), Xt(va), Xt(ze);
  }
  function Wi(t) {
    var l = t.memoizedState;
    l !== null && (da._currentValue = l.memoizedState, bt(mn, t)), l = Ql.current;
    var e = z0(l, t.type);
    l !== e && (bt(va, t), bt(Ql, e));
  }
  function vn(t) {
    va.current === t && (Xt(Ql), Xt(va)), mn.current === t && (Xt(mn), da._currentValue = ue);
  }
  var $i, Lo;
  function pe(t) {
    if ($i === void 0)
      try {
        throw Error();
      } catch (e) {
        var l = e.stack.trim().match(/\n( *(at )?)/);
        $i = l && l[1] || "", Lo = -1 < e.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + $i + t + Lo;
  }
  var Fi = !1;
  function Ii(t, l) {
    if (!t || Fi) return "";
    Fi = !0;
    var e = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var u = {
        DetermineComponentFrameRoot: function() {
          try {
            if (l) {
              var p = function() {
                throw Error();
              };
              if (Object.defineProperty(p.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(p, []);
                } catch (M) {
                  var y = M;
                }
                Reflect.construct(t, [], p);
              } else {
                try {
                  p.call();
                } catch (M) {
                  y = M;
                }
                p = !1;
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
                  }), p = !0, new t();
                } finally {
                  p && (b !== void 0 ? Object.defineProperty(t.prototype, "props", b) : delete t.prototype.props);
                }
              }
            } else {
              try {
                throw Error();
              } catch (M) {
                y = M;
              }
              (p = t()) && typeof p.catch == "function" && p.catch(function() {
              });
            }
          } catch (M) {
            if (M && y && typeof M.stack == "string")
              return [M.stack, y.stack];
          }
          return [null, null];
        }
      };
      u.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var a = Object.getOwnPropertyDescriptor(
        u.DetermineComponentFrameRoot,
        "name"
      );
      a && a.configurable && Object.defineProperty(
        u.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var n = u.DetermineComponentFrameRoot(), i = n[0], c = n[1];
      if (i && c) {
        var r = i.split(`
`), h = c.split(`
`);
        for (a = u = 0; u < r.length && !r[u].includes("DetermineComponentFrameRoot"); )
          u++;
        for (; a < h.length && !h[a].includes(
          "DetermineComponentFrameRoot"
        ); )
          a++;
        if (u === r.length || a === h.length)
          for (u = r.length - 1, a = h.length - 1; 1 <= u && 0 <= a && r[u] !== h[a]; )
            a--;
        for (; 1 <= u && 0 <= a; u--, a--)
          if (r[u] !== h[a]) {
            if (u !== 1 || a !== 1)
              do
                if (u--, a--, 0 > a || r[u] !== h[a]) {
                  var T = `
` + r[u].replace(" at new ", " at ");
                  return t.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", t.displayName)), T;
                }
              while (1 <= u && 0 <= a);
            break;
          }
      }
    } finally {
      Fi = !1, Error.prepareStackTrace = e;
    }
    return (e = t ? t.displayName || t.name : "") ? pe(e) : "";
  }
  function Hm(t, l) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return pe(t.type);
      case 16:
        return pe("Lazy");
      case 13:
        return t.child !== l && l !== null ? pe("Suspense Fallback") : pe("Suspense");
      case 19:
        return pe("SuspenseList");
      case 0:
      case 15:
        return Ii(t.type, !1);
      case 11:
        return Ii(t.type.render, !1);
      case 1:
        return Ii(t.type, !0);
      case 31:
        return pe("Activity");
      case 30:
        return pe("ViewTransition");
      default:
        return "";
    }
  }
  function Zo(t) {
    try {
      var l = "", e = null;
      do
        l += Hm(t, e), e = t, t = t.return;
      while (t);
      return l;
    } catch (u) {
      return `
Error generating stack: ` + u.message + `
` + u.stack;
    }
  }
  var ki = Object.prototype.hasOwnProperty, Pi = f.unstable_scheduleCallback, tc = f.unstable_cancelCallback, xm = f.unstable_shouldYield, jm = f.unstable_requestPaint, rl = f.unstable_now, Bm = f.unstable_getCurrentPriorityLevel, Vo = f.unstable_ImmediatePriority, Ko = f.unstable_UserBlockingPriority, hn = f.unstable_NormalPriority, Ym = f.unstable_LowPriority, Jo = f.unstable_IdlePriority, qm = f.log, Gm = f.unstable_setDisableYieldValue, ha = null, sl = null;
  function Oe(t) {
    if (typeof qm == "function" && Gm(t), sl && typeof sl.setStrictMode == "function")
      try {
        sl.setStrictMode(ha, t);
      } catch {
      }
  }
  var dl = Math.clz32 ? Math.clz32 : Lm, Xm = Math.log, Qm = Math.LN2;
  function Lm(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (Xm(t) / Qm | 0) | 0;
  }
  var gn = 256, Sn = 262144, bn = 4194304;
  function tu(t) {
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
  function Tn(t, l, e) {
    var u = t.pendingLanes;
    if (u === 0) return 0;
    var a = 0, n = t.suspendedLanes, i = t.pingedLanes;
    t = t.warmLanes;
    var c = u & 134217727;
    return c !== 0 ? (u = c & ~n, u !== 0 ? a = tu(u) : (i &= c, i !== 0 ? a = tu(i) : e || (e = c & ~t, e !== 0 && (a = tu(e))))) : (c = u & ~n, c !== 0 ? a = tu(c) : i !== 0 ? a = tu(i) : e || (e = u & ~t, e !== 0 && (a = tu(e)))), a === 0 ? 0 : l !== 0 && l !== a && (l & n) === 0 && (n = a & -a, e = l & -l, n >= e || n === 32 && (e & 4194048) !== 0) ? l : a;
  }
  function ga(t, l) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & l) === 0;
  }
  function wo(t, l) {
    (l & 8) !== 0 && (l |= l & 32);
    var e = t.entangledLanes;
    if (e !== 0)
      for (t = t.entanglements, e &= l; 0 < e; ) {
        var u = 31 - dl(e), a = 1 << u;
        l |= t[u], e &= ~a;
      }
    return l;
  }
  function Zm(t, l) {
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
  function Wo() {
    var t = bn;
    return bn <<= 1, (bn & 62914560) === 0 && (bn = 4194304), t;
  }
  function lc(t) {
    for (var l = [], e = 0; 31 > e; e++) l.push(t);
    return l;
  }
  function Sa(t, l) {
    t.pendingLanes |= l, l !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function Vm(t, l, e, u, a, n) {
    var i = t.pendingLanes;
    t.pendingLanes = e, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= e, t.entangledLanes &= e, t.errorRecoveryDisabledLanes &= e, t.shellSuspendCounter = 0;
    var c = t.entanglements, r = t.expirationTimes, h = t.hiddenUpdates;
    for (e = i & ~e; 0 < e; ) {
      var T = 31 - dl(e), p = 1 << T;
      c[T] = 0, r[T] = -1;
      var y = h[T];
      if (y !== null)
        for (h[T] = null, T = 0; T < y.length; T++) {
          var b = y[T];
          b !== null && (b.lane &= -536870913);
        }
      e &= ~p;
    }
    u !== 0 && $o(t, u, 0), n !== 0 && a === 0 && t.tag !== 0 && (t.suspendedLanes |= n & ~(i & ~l));
  }
  function $o(t, l, e) {
    t.pendingLanes |= l, t.suspendedLanes &= ~l;
    var u = 31 - dl(l);
    t.entangledLanes |= l, t.entanglements[u] = t.entanglements[u] | 1073741824 | e & 261930;
  }
  function Fo(t, l) {
    var e = t.entangledLanes |= l;
    for (t = t.entanglements; e; ) {
      var u = 31 - dl(e), a = 1 << u;
      a & l | t[u] & l && (t[u] |= l), e &= ~a;
    }
  }
  function Io(t, l) {
    var e = l & -l;
    return e = (e & 42) !== 0 ? 1 : ec(e), (e & (t.suspendedLanes | l)) !== 0 ? 0 : e;
  }
  function ec(t) {
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
  function uc(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function ko() {
    var t = J.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : nm(t.type));
  }
  function Po(t, l) {
    var e = J.p;
    try {
      return J.p = t, l();
    } finally {
      J.p = e;
    }
  }
  var ae = Math.random().toString(36).slice(2), Qt = "__reactFiber$" + ae, ul = "__reactProps$" + ae, _u = "__reactContainer$" + ae, tr = "__reactEvents$" + ae, Km = "__reactListeners$" + ae, Jm = "__reactHandles$" + ae, lr = "__reactResources$" + ae, ba = "__reactMarker$" + ae, En = "__reactLoad$" + ae;
  function zn(t) {
    delete t[Qt], delete t[ul], delete t[Km], delete t[Jm];
  }
  function lu(t) {
    var l;
    if (l = t[Qt]) return l;
    for (var e = t.parentNode; e; ) {
      if (l = e[_u] || e[Qt]) {
        if (e = l.alternate, l.child !== null || e !== null && e.child !== null)
          for (t = G0(t); t !== null; ) {
            if (e = t[Qt]) return e;
            t = G0(t);
          }
        return l;
      }
      t = e, e = t.parentNode;
    }
    return null;
  }
  function Nu(t) {
    if (t = t[Qt] || t[_u]) {
      var l = t.tag;
      if (l === 5 || l === 6 || l === 13 || l === 31 || l === 26 || l === 27 || l === 3)
        return t;
    }
    return null;
  }
  function Ta(t) {
    var l = t.tag;
    if (l === 5 || l === 26 || l === 27 || l === 6) return t.stateNode;
    throw Error(o(33));
  }
  function Mu(t) {
    var l = t[lr];
    return l || (l = t[lr] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), l;
  }
  function Bt(t) {
    t[ba] = !0;
  }
  function er(t) {
    t[En] = void 0;
  }
  var ur = /* @__PURE__ */ new Set(), ar = {};
  function eu(t, l) {
    Cu(t, l), Cu(t + "Capture", l);
  }
  function Cu(t, l) {
    for (ar[t] = l, t = 0; t < l.length; t++)
      ur.add(l[t]);
  }
  var wm = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), nr = {}, ir = {};
  function Wm(t) {
    return ki.call(ir, t) ? !0 : ki.call(nr, t) ? !1 : wm.test(t) ? ir[t] = !0 : (nr[t] = !0, !1);
  }
  var it = !1;
  function cr() {
    var t = it;
    return it = !1, t;
  }
  function pn(t, l, e) {
    if (Wm(l))
      if (e === null) t.removeAttribute(l);
      else {
        switch (typeof e) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(l);
            return;
          case "boolean":
            var u = l.toLowerCase().slice(0, 5);
            if (u !== "data-" && u !== "aria-") {
              t.removeAttribute(l);
              return;
            }
        }
        t.setAttribute(l, e);
      }
  }
  function On(t, l, e) {
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
  function ne(t, l, e, u) {
    if (u === null) t.removeAttribute(e);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttributeNS(l, e, u);
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
  function fr(t) {
    var l = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (l === "checkbox" || l === "radio");
  }
  function $m(t, l, e) {
    var u = Object.getOwnPropertyDescriptor(
      t.constructor.prototype,
      l
    );
    if (!t.hasOwnProperty(l) && typeof u < "u" && typeof u.get == "function" && typeof u.set == "function") {
      var a = u.get, n = u.set;
      return Object.defineProperty(t, l, {
        configurable: !0,
        get: function() {
          return a.call(this);
        },
        set: function(i) {
          e = "" + i, n.call(this, i);
        }
      }), Object.defineProperty(t, l, {
        enumerable: u.enumerable
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
  function ac(t) {
    if (!t._valueTracker) {
      var l = fr(t) ? "checked" : "value";
      t._valueTracker = $m(
        t,
        l,
        "" + t[l]
      );
    }
  }
  function or(t) {
    if (!t) return !1;
    var l = t._valueTracker;
    if (!l) return !0;
    var e = l.getValue(), u = "";
    return t && (u = fr(t) ? t.checked ? "true" : "false" : t.value), t = u, t !== e ? (l.setValue(t), !0) : !1;
  }
  var Fm = /[\n"\\]/g;
  function Ol(t) {
    return t.replace(
      Fm,
      function(l) {
        return "\\" + l.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function nc(t, l, e, u, a, n, i, c) {
    t.name = "", i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? t.type = i : t.removeAttribute("type"), l != null ? i === "number" ? (l === 0 && t.value === "" || t.value != l) && (t.value = "" + ml(l)) : t.value !== "" + ml(l) && (t.value = "" + ml(l)) : i !== "submit" && i !== "reset" || t.removeAttribute("value"), l != null ? i === "number" && t.value == l ? ic(t, ml(t.value)) : ic(t, ml(l)) : e != null ? ic(t, ml(e)) : u != null && t.removeAttribute("value"), a == null && n != null && (t.defaultChecked = !!n), a != null && (t.checked = a && typeof a != "function" && typeof a != "symbol"), c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? t.name = "" + ml(c) : t.removeAttribute("name");
  }
  function rr(t, l, e, u, a, n, i, c) {
    if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (t.type = n), l != null || e != null) {
      if (!(n !== "submit" && n !== "reset" || l != null)) {
        ac(t);
        return;
      }
      e = e != null ? "" + ml(e) : "", l = l != null ? "" + ml(l) : e, c || l === t.value || (t.value = l), t.defaultValue = l;
    }
    u = u ?? a, u = typeof u != "function" && typeof u != "symbol" && !!u, t.checked = c ? t.checked : !!u, t.defaultChecked = !!u, i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (t.name = i), ac(t);
  }
  function ic(t, l) {
    t.defaultValue !== "" + l && (t.defaultValue = "" + l);
  }
  function Ru(t, l, e, u) {
    if (t = t.options, l) {
      l = {};
      for (var a = 0; a < e.length; a++)
        l["$" + e[a]] = !0;
      for (e = 0; e < t.length; e++)
        a = l.hasOwnProperty("$" + t[e].value), t[e].selected !== a && (t[e].selected = a), a && u && (t[e].defaultSelected = !0);
    } else {
      for (e = "" + ml(e), l = null, a = 0; a < t.length; a++) {
        if (t[a].value === e) {
          t[a].selected = !0, u && (t[a].defaultSelected = !0);
          return;
        }
        l !== null || t[a].disabled || (l = t[a]);
      }
      l !== null && (l.selected = !0);
    }
  }
  function sr(t, l, e) {
    if (l != null && (l = "" + ml(l), l !== t.value && (t.value = l), e == null)) {
      t.defaultValue !== l && (t.defaultValue = l);
      return;
    }
    t.defaultValue = e != null ? "" + ml(e) : "";
  }
  function dr(t, l, e, u) {
    if (l == null) {
      if (u != null) {
        if (e != null) throw Error(o(92));
        if (ft(u)) {
          if (1 < u.length) throw Error(o(93));
          u = u[0];
        }
        e = u;
      }
      e == null && (e = ""), l = e;
    }
    e = ml(l), t.defaultValue = e, u = t.textContent, u === e && u !== "" && u !== null && (t.value = u), ac(t);
  }
  function Du(t, l) {
    if (l) {
      var e = t.firstChild;
      if (e && e === t.lastChild && e.nodeType === 3) {
        e.nodeValue = l;
        return;
      }
    }
    t.textContent = l;
  }
  var Im = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function mr(t, l, e) {
    var u = l.indexOf("--") === 0;
    e == null || typeof e == "boolean" || e === "" ? u ? t.setProperty(l, "") : l === "float" ? t.cssFloat = "" : t[l] = "" : u ? t.setProperty(l, e) : typeof e != "number" || e === 0 || Im.has(l) ? l === "float" ? t.cssFloat = e : t[l] = ("" + e).trim() : t[l] = e + "px";
  }
  function yr(t, l, e) {
    if (l != null && typeof l != "object")
      throw Error(o(62));
    if (t = t.style, e != null) {
      for (var u in e)
        !e.hasOwnProperty(u) || l != null && l.hasOwnProperty(u) || (u.indexOf("--") === 0 ? t.setProperty(u, "") : u === "float" ? t.cssFloat = "" : t[u] = "", it = !0);
      for (var a in l)
        u = l[a], l.hasOwnProperty(a) && e[a] !== u && (mr(t, a, u), it = !0);
    } else
      for (var n in l)
        l.hasOwnProperty(n) && mr(t, n, l[n]);
  }
  function cc(t) {
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
  var km = /* @__PURE__ */ new Map([
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
  ]), Pm = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function An(t) {
    return Pm.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  function Ll() {
  }
  var fc = null;
  function oc(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var Uu = null, Hu = null;
  function vr(t) {
    var l = Nu(t);
    if (l && (t = l.stateNode)) {
      var e = t[ul] || null;
      t: switch (t = l.stateNode, l.type) {
        case "input":
          if (nc(
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
              'input[name="' + Ol(
                "" + l
              ) + '"][type="radio"]'
            ), l = 0; l < e.length; l++) {
              var u = e[l];
              if (u !== t && u.form === t.form) {
                var a = u[ul] || null;
                if (!a) throw Error(o(90));
                nc(
                  u,
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
              u = e[l], u.form === t.form && or(u);
          }
          break t;
        case "textarea":
          sr(t, e.value, e.defaultValue);
          break t;
        case "select":
          l = e.value, l != null && Ru(t, !!e.multiple, l, !1);
      }
    }
  }
  var rc = !1;
  function hr(t, l, e) {
    if (rc) return t(l, e);
    rc = !0;
    try {
      var u = t(l);
      return u;
    } finally {
      if (rc = !1, (Uu !== null || Hu !== null) && (Ai(), Uu && (l = Uu, t = Hu, Hu = Uu = null, vr(l), t)))
        for (l = 0; l < t.length; l++) vr(t[l]);
    }
  }
  function Ea(t, l) {
    var e = t.stateNode;
    if (e === null) return null;
    var u = e[ul] || null;
    if (u === null) return null;
    e = u[l];
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
        (u = !u.disabled) || (t = t.type, u = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !u;
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
  var ie = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), sc = !1;
  if (ie)
    try {
      var za = {};
      Object.defineProperty(za, "passive", {
        get: function() {
          sc = !0;
        }
      }), window.addEventListener("test", za, za), window.removeEventListener("test", za, za);
    } catch {
      sc = !1;
    }
  var Ae = null, dc = null, _n = null;
  function gr() {
    if (_n) return _n;
    var t, l = dc, e = l.length, u, a = "value" in Ae ? Ae.value : Ae.textContent, n = a.length;
    for (t = 0; t < e && l[t] === a[t]; t++) ;
    var i = e - t;
    for (u = 1; u <= i && l[e - u] === a[n - u]; u++) ;
    return _n = a.slice(t, 1 < u ? 1 - u : void 0);
  }
  function Nn(t) {
    var l = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && l === 13 && (t = 13)) : t = l, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function Mn() {
    return !0;
  }
  function Sr() {
    return !1;
  }
  function It(t) {
    function l(e, u, a, n, i) {
      this._reactName = e, this._targetInst = a, this.type = u, this.nativeEvent = n, this.target = i, this.currentTarget = null;
      for (var c in t)
        t.hasOwnProperty(c) && (e = t[c], this[c] = e ? e(n) : n[c]);
      return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1) ? Mn : Sr, this.isPropagationStopped = Sr, this;
    }
    return I(l.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var e = this.nativeEvent;
        e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != "unknown" && (e.returnValue = !1), this.isDefaultPrevented = Mn);
      },
      stopPropagation: function() {
        var e = this.nativeEvent;
        e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0), this.isPropagationStopped = Mn);
      },
      persist: function() {
      },
      isPersistent: Mn
    }), l;
  }
  var _e = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Cn = It(_e), pa = I({}, _e, { view: 0, detail: 0 }), ty = It(pa), mc, yc, Oa, Rn = I({}, pa, {
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
    getModifierState: hc,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== Oa && (Oa && t.type === "mousemove" ? (mc = t.screenX - Oa.screenX, yc = t.screenY - Oa.screenY) : yc = mc = 0, Oa = t), mc);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : yc;
    }
  }), br = It(Rn), ly = I({}, Rn, { dataTransfer: 0 }), ey = It(ly), uy = I({}, pa, { relatedTarget: 0 }), vc = It(uy), ay = I({}, _e, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), ny = It(ay), iy = I({}, _e, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), cy = It(iy), fy = I({}, _e, { data: 0 }), Tr = It(fy), oy = {
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
  }, ry = {
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
  }, sy = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function dy(t) {
    var l = this.nativeEvent;
    return l.getModifierState ? l.getModifierState(t) : (t = sy[t]) ? !!l[t] : !1;
  }
  function hc() {
    return dy;
  }
  var my = I({}, pa, {
    key: function(t) {
      if (t.key) {
        var l = oy[t.key] || t.key;
        if (l !== "Unidentified") return l;
      }
      return t.type === "keypress" ? (t = Nn(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? ry[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: hc,
    charCode: function(t) {
      return t.type === "keypress" ? Nn(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? Nn(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), yy = It(my), vy = I({}, Rn, {
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
  }), Er = It(vy), hy = I({}, _e, { submitter: 0 }), gy = It(hy), Sy = I({}, pa, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: hc
  }), by = It(Sy), Ty = I({}, _e, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Ey = It(Ty), zy = I({}, Rn, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), py = It(zy), Oy = I({}, _e, {
    newState: 0,
    oldState: 0,
    source: 0
  }), Ay = It(Oy), _y = [9, 13, 27, 32], gc = ie && "CompositionEvent" in window, Aa = null;
  ie && "documentMode" in document && (Aa = document.documentMode);
  var Ny = ie && "TextEvent" in window && !Aa, zr = ie && (!gc || Aa && 8 < Aa && 11 >= Aa), pr = " ", Or = !1;
  function Ar(t, l) {
    switch (t) {
      case "keyup":
        return _y.indexOf(l.keyCode) !== -1;
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
  function _r(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var xu = !1;
  function My(t, l) {
    switch (t) {
      case "compositionend":
        return _r(l);
      case "keypress":
        return l.which !== 32 ? null : (Or = !0, pr);
      case "textInput":
        return t = l.data, t === pr && Or ? null : t;
      default:
        return null;
    }
  }
  function Cy(t, l) {
    if (xu)
      return t === "compositionend" || !gc && Ar(t, l) ? (t = gr(), _n = dc = Ae = null, xu = !1, t) : null;
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
        return zr && l.locale !== "ko" ? null : l.data;
      default:
        return null;
    }
  }
  var Ry = {
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
  function Nr(t) {
    var l = t && t.nodeName && t.nodeName.toLowerCase();
    return l === "input" ? !!Ry[t.type] : l === "textarea";
  }
  function Mr(t, l, e, u) {
    Uu ? Hu ? Hu.push(u) : Hu = [u] : Uu = u, l = Di(l, "onChange"), 0 < l.length && (e = new Cn(
      "onChange",
      "change",
      null,
      e,
      u
    ), t.push({ event: e, listeners: l }));
  }
  var _a = null, Na = null;
  function Dy(t) {
    v0(t, 0);
  }
  function Dn(t) {
    var l = Ta(t);
    if (or(l)) return t;
  }
  function Cr(t, l) {
    if (t === "change") return l;
  }
  var Rr = !1;
  if (ie) {
    var Sc;
    if (ie) {
      var bc = "oninput" in document;
      if (!bc) {
        var Dr = document.createElement("div");
        Dr.setAttribute("oninput", "return;"), bc = typeof Dr.oninput == "function";
      }
      Sc = bc;
    } else Sc = !1;
    Rr = Sc && (!document.documentMode || 9 < document.documentMode);
  }
  function Ur() {
    _a && (_a.detachEvent("onpropertychange", Hr), Na = _a = null);
  }
  function Hr(t) {
    if (t.propertyName === "value" && Dn(Na)) {
      var l = [];
      Mr(
        l,
        Na,
        t,
        oc(t)
      ), hr(Dy, l);
    }
  }
  function Uy(t, l, e) {
    t === "focusin" ? (Ur(), _a = l, Na = e, _a.attachEvent("onpropertychange", Hr)) : t === "focusout" && Ur();
  }
  function Hy(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Dn(Na);
  }
  function xy(t, l) {
    if (t === "click") return Dn(l);
  }
  function jy(t, l) {
    if (t === "input" || t === "change")
      return Dn(l);
  }
  function By(t, l) {
    return t === l && (t !== 0 || 1 / t === 1 / l) || t !== t && l !== l;
  }
  var yl = typeof Object.is == "function" ? Object.is : By;
  function Ma(t, l) {
    if (yl(t, l)) return !0;
    if (typeof t != "object" || t === null || typeof l != "object" || l === null)
      return !1;
    var e = Object.keys(t), u = Object.keys(l);
    if (e.length !== u.length) return !1;
    for (u = 0; u < e.length; u++) {
      var a = e[u];
      if (!ki.call(l, a) || !yl(t[a], l[a]))
        return !1;
    }
    return !0;
  }
  function Tc(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  function xr(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function jr(t, l) {
    var e = xr(t);
    t = 0;
    for (var u; e; ) {
      if (e.nodeType === 3) {
        if (u = t + e.textContent.length, t <= l && u >= l)
          return { node: e, offset: l - t };
        t = u;
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
      e = xr(e);
    }
  }
  function Br(t, l) {
    return t && l ? t === l ? !0 : t && t.nodeType === 3 ? !1 : l && l.nodeType === 3 ? Br(t, l.parentNode) : "contains" in t ? t.contains(l) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(l) & 16) : !1 : !1;
  }
  function Yr(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var l = Tc(t.document); l instanceof t.HTMLIFrameElement; ) {
      try {
        var e = typeof l.contentWindow.location.href == "string";
      } catch {
        e = !1;
      }
      if (e) t = l.contentWindow;
      else break;
      l = Tc(t.document);
    }
    return l;
  }
  function Ec(t) {
    var l = t && t.nodeName && t.nodeName.toLowerCase();
    return l && (l === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || l === "textarea" || t.contentEditable === "true");
  }
  var Yy = ie && "documentMode" in document && 11 >= document.documentMode, ju = null, zc = null, Ca = null, pc = !1;
  function qr(t, l, e) {
    var u = e.window === e ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
    pc || ju == null || ju !== Tc(u) || (u = ju, "selectionStart" in u && Ec(u) ? u = { start: u.selectionStart, end: u.selectionEnd } : (u = (u.ownerDocument && u.ownerDocument.defaultView || window).getSelection(), u = {
      anchorNode: u.anchorNode,
      anchorOffset: u.anchorOffset,
      focusNode: u.focusNode,
      focusOffset: u.focusOffset
    }), Ca && Ma(Ca, u) || (Ca = u, u = Di(zc, "onSelect"), 0 < u.length && (l = new Cn(
      "onSelect",
      "select",
      null,
      l,
      e
    ), t.push({ event: l, listeners: u }), l.target = ju)));
  }
  function uu(t, l) {
    var e = {};
    return e[t.toLowerCase()] = l.toLowerCase(), e["Webkit" + t] = "webkit" + l, e["Moz" + t] = "moz" + l, e;
  }
  var Bu = {
    animationend: uu("Animation", "AnimationEnd"),
    animationiteration: uu("Animation", "AnimationIteration"),
    animationstart: uu("Animation", "AnimationStart"),
    transitionrun: uu("Transition", "TransitionRun"),
    transitionstart: uu("Transition", "TransitionStart"),
    transitioncancel: uu("Transition", "TransitionCancel"),
    transitionend: uu("Transition", "TransitionEnd")
  }, Oc = {}, Gr = {};
  ie && (Gr = document.createElement("div").style, "AnimationEvent" in window || (delete Bu.animationend.animation, delete Bu.animationiteration.animation, delete Bu.animationstart.animation), "TransitionEvent" in window || delete Bu.transitionend.transition);
  function au(t) {
    if (Oc[t]) return Oc[t];
    if (!Bu[t]) return t;
    var l = Bu[t], e;
    for (e in l)
      if (l.hasOwnProperty(e) && e in Gr)
        return Oc[t] = l[e];
    return t;
  }
  var Xr = au("animationend"), Qr = au("animationiteration"), Lr = au("animationstart"), qy = au("transitionrun"), Gy = au("transitionstart"), Xy = au("transitioncancel"), Zr = au("transitionend"), Vr = /* @__PURE__ */ new Map(), Ac = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Ac.push("scrollEnd");
  function xl(t, l) {
    Vr.set(t, l), eu(l, [t]);
  }
  var Qy = 0;
  function ce(t, l) {
    if (t.name != null && t.name !== "auto") return t.name;
    if (l.autoName !== null) return l.autoName;
    t = ql.identifierPrefix;
    var e = Qy++;
    return t = "_" + t + "t_" + e.toString(32) + "_", l.autoName = t;
  }
  function Kr(t) {
    if (t == null || typeof t == "string")
      return t;
    var l = null, e = ea;
    if (e !== null)
      for (var u = 0; u < e.length; u++) {
        var a = t[e[u]];
        if (a != null) {
          if (a === "none") return "none";
          l = l == null ? a : l + (" " + a);
        }
      }
    return l ?? t.default;
  }
  function fe(t, l) {
    return t = Kr(t), l = Kr(l), l == null ? t === "auto" ? null : t : l === "auto" ? null : l;
  }
  var Un = typeof reportError == "function" ? reportError : function(t) {
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
  }, Al = [], Yu = 0, _c = 0;
  function Hn() {
    for (var t = Yu, l = _c = Yu = 0; l < t; ) {
      var e = Al[l];
      Al[l++] = null;
      var u = Al[l];
      Al[l++] = null;
      var a = Al[l];
      Al[l++] = null;
      var n = Al[l];
      if (Al[l++] = null, u !== null && a !== null) {
        var i = u.pending;
        i === null ? a.next = a : (a.next = i.next, i.next = a), u.pending = a;
      }
      n !== 0 && Jr(e, a, n);
    }
  }
  function xn(t, l, e, u) {
    Al[Yu++] = t, Al[Yu++] = l, Al[Yu++] = e, Al[Yu++] = u, _c |= u, t.lanes |= u, t = t.alternate, t !== null && (t.lanes |= u);
  }
  function Nc(t, l, e, u) {
    return xn(t, l, e, u), jn(t);
  }
  function nu(t, l) {
    return xn(t, null, null, l), jn(t);
  }
  function Jr(t, l, e) {
    t.lanes |= e;
    var u = t.alternate;
    u !== null && (u.lanes |= e);
    for (var a = !1, n = t.return; n !== null; )
      n.childLanes |= e, u = n.alternate, u !== null && (u.childLanes |= e), n.tag === 22 && (t = n.stateNode, t === null || t._visibility & 1 || (a = !0)), t = n, n = n.return;
    return t.tag === 3 ? (n = t.stateNode, a && l !== null && (a = 31 - dl(e), t = n.hiddenUpdates, u = t[a], u === null ? t[a] = [l] : u.push(l), l.lane = e | 536870912), n) : null;
  }
  function jn(t) {
    if (50 < Ia)
      throw Ia = 0, Oi = null, Error(o(185));
    for (var l = t.return; l !== null; )
      t = l, l = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var qu = {};
  function Ly(t, l, e, u) {
    this.tag = t, this.key = e, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = l, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = u, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function al(t, l, e, u) {
    return new Ly(t, l, e, u);
  }
  function Mc(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function oe(t, l) {
    var e = t.alternate;
    return e === null ? (e = al(
      t.tag,
      l,
      t.key,
      t.mode
    ), e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.alternate = t, t.alternate = e) : (e.pendingProps = l, e.type = t.type, e.flags = 0, e.subtreeFlags = 0, e.deletions = null), e.flags = t.flags & 1206910976, e.childLanes = t.childLanes, e.lanes = t.lanes, e.child = t.child, e.memoizedProps = t.memoizedProps, e.memoizedState = t.memoizedState, e.updateQueue = t.updateQueue, l = t.dependencies, e.dependencies = l === null ? null : { lanes: l.lanes, firstContext: l.firstContext }, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.refCleanup = t.refCleanup, e;
  }
  function wr(t, l) {
    t.flags &= 1206910978;
    var e = t.alternate;
    return e === null ? (t.childLanes = 0, t.lanes = l, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = e.childLanes, t.lanes = e.lanes, t.child = e.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = e.memoizedProps, t.memoizedState = e.memoizedState, t.updateQueue = e.updateQueue, t.type = e.type, l = e.dependencies, t.dependencies = l === null ? null : {
      lanes: l.lanes,
      firstContext: l.firstContext
    }), t;
  }
  function Bn(t, l, e, u, a, n) {
    var i = 0;
    if (u = t, typeof u == "function") Mc(u) && (i = 1);
    else if (typeof u == "string")
      i = h1(
        t,
        e,
        Ql.current
      ) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (u) {
        case Hl:
          return t = al(31, e, l, a), t.elementType = Hl, t.lanes = n, t;
        case el:
          return iu(e.children, a, n, l);
        case ol:
          i = 8, a |= 24;
          break;
        case Ee:
          return t = al(12, e, l, a | 2), t.elementType = Ee, t.lanes = n, t;
        case V:
          return t = al(13, e, l, a), t.elementType = V, t.lanes = n, t;
        case K:
          return t = al(19, e, l, a), t.elementType = K, t.lanes = n, t;
        case ee:
        case m:
          return t = a | 32, t = al(30, e, l, t), t.elementType = m, t.lanes = n, t.stateNode = {
            autoName: null,
            paired: null,
            clones: null,
            ref: null
          }, t;
        default:
          if (typeof u == "object" && u !== null)
            switch (u.$$typeof) {
              case jt:
                i = 10;
                break t;
              case ke:
                i = 9;
                break t;
              case R:
                i = 11;
                break t;
              case gt:
                i = 14;
                break t;
              case rt:
                i = 16, u = null;
                break t;
            }
          i = 29, e = Error(
            o(130, t === null ? "null" : typeof t, "")
          ), u = null;
      }
    return l = al(i, e, l, a), l.elementType = t, l.type = u, l.lanes = n, l;
  }
  function iu(t, l, e, u) {
    return t = al(7, t, u, l), t.lanes = e, t;
  }
  function Cc(t, l, e) {
    return t = al(6, t, null, l), t.lanes = e, t;
  }
  function Wr(t) {
    var l = al(18, null, null, 0);
    return l.stateNode = t, l;
  }
  function Rc(t, l, e) {
    return l = al(
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
  var $r = /* @__PURE__ */ new WeakMap();
  function _l(t, l) {
    if (typeof t == "object" && t !== null) {
      var e = $r.get(t);
      return e !== void 0 ? e : (l = {
        value: t,
        source: l,
        stack: Zo(l)
      }, $r.set(t, l), l);
    }
    return {
      value: t,
      source: l,
      stack: Zo(l)
    };
  }
  var Gu = [], Xu = 0, Yn = null, Ra = 0, Nl = [], Ml = 0, Ne = null, Zl = 1, Vl = "";
  function re(t, l) {
    Gu[Xu++] = Ra, Gu[Xu++] = Yn, Yn = t, Ra = l;
  }
  function Fr(t, l, e) {
    Nl[Ml++] = Zl, Nl[Ml++] = Vl, Nl[Ml++] = Ne, Ne = t;
    var u = Zl;
    t = Vl;
    var a = 32 - dl(u) - 1;
    u &= ~(1 << a), e += 1;
    var n = 32 - dl(l) + a;
    if (30 < n) {
      var i = a - a % 5;
      n = (u & (1 << i) - 1).toString(32), u >>= i, a -= i, Zl = 1 << 32 - dl(l) + a | e << a | u, Vl = n + t;
    } else
      Zl = 1 << n | e << a | u, Vl = t;
  }
  function qn(t) {
    t.return !== null && (re(t, 1), Fr(t, 1, 0));
  }
  function Dc(t) {
    for (; t === Yn; )
      Yn = Gu[--Xu], Gu[Xu] = null, Ra = Gu[--Xu], Gu[Xu] = null;
    for (; t === Ne; )
      Ne = Nl[--Ml], Nl[Ml] = null, Vl = Nl[--Ml], Nl[Ml] = null, Zl = Nl[--Ml], Nl[Ml] = null;
  }
  function Ir(t, l) {
    Nl[Ml++] = Zl, Nl[Ml++] = Vl, Nl[Ml++] = Ne, Zl = l.id, Vl = l.overflow, Ne = t;
  }
  var Yt = null, Tt = null, k = !1, Me = null, Cl = !1, Uc = Error(o(519));
  function Ce(t) {
    var l = Error(
      o(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Da(_l(l, t)), Uc;
  }
  function kr(t) {
    var l = t.stateNode, e = t.type, u = t.memoizedProps;
    switch (l[Qt] = t, l[ul] = u, e) {
      case "dialog":
        tt("cancel", l), tt("close", l);
        break;
      case "iframe":
      case "object":
      case "embed":
        tt("load", l);
        break;
      case "video":
      case "audio":
        for (e = 0; e < Pa.length; e++)
          tt(Pa[e], l);
        break;
      case "source":
        tt("error", l);
        break;
      case "img":
      case "image":
      case "link":
        tt("error", l), tt("load", l);
        break;
      case "details":
        tt("toggle", l);
        break;
      case "input":
        tt("invalid", l), rr(
          l,
          u.value,
          u.defaultValue,
          u.checked,
          u.defaultChecked,
          u.type,
          u.name,
          !0
        );
        break;
      case "select":
        tt("invalid", l);
        break;
      case "textarea":
        tt("invalid", l), dr(l, u.value, u.defaultValue, u.children);
    }
    e = u.children, typeof e != "string" && typeof e != "number" && typeof e != "bigint" || l.textContent === "" + e || u.suppressHydrationWarning === !0 || b0(l.textContent, e) ? (u.popover != null && (tt("beforetoggle", l), tt("toggle", l)), u.onScroll != null && tt("scroll", l), u.onScrollEnd != null && tt("scrollend", l), u.onClick != null && (l.onclick = Ll), l = !0) : l = !1, l || Ce(t, !0);
  }
  function Gn(t) {
    for (Yt = t.return; Yt; )
      switch (Yt.tag) {
        case 5:
        case 31:
        case 13:
          Cl = !1;
          return;
        case 27:
        case 3:
          Cl = !0;
          return;
        default:
          Yt = Yt.return;
      }
  }
  function Qu(t) {
    if (t !== Yt) return !1;
    if (!k) return Gn(t), k = !0, !1;
    var l = t.tag, e;
    if ((e = l !== 3 && l !== 27) && ((e = l === 5) && (e = t.type, e = !(e !== "form" && e !== "button") || oo(t.type, t.memoizedProps)), e = !e), e && Tt && Ce(t), Gn(t), l === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(o(317));
      Tt = q0(t);
    } else if (l === 31) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(o(317));
      Tt = q0(t);
    } else
      l === 27 ? (l = Tt, Ke(t.type) ? (t = bo, bo = null, Tt = t) : Tt = l) : Tt = Yt ? Dl(t.stateNode.nextSibling) : null;
    return !0;
  }
  function cu() {
    Tt = Yt = null, k = !1;
  }
  function Hc() {
    var t = Me;
    return t !== null && (cl === null ? cl = t : cl.push.apply(
      cl,
      t
    ), Me = null), t;
  }
  function Da(t) {
    Me === null ? Me = [t] : Me.push(t);
  }
  var xc = Xl(null), fu = null, se = null;
  function Re(t, l, e) {
    bt(xc, l._currentValue), l._currentValue = e;
  }
  function de(t) {
    t._currentValue = xc.current, Xt(xc);
  }
  function Xn(t, l, e) {
    for (; t !== null; ) {
      var u = t.alternate;
      if ((t.childLanes & l) !== l ? (t.childLanes |= l, u !== null && (u.childLanes |= l)) : u !== null && (u.childLanes & l) !== l && (u.childLanes |= l), t === e) break;
      t = t.return;
    }
  }
  function jc(t, l, e, u) {
    var a = t.child;
    for (a !== null && (a.return = t); a !== null; ) {
      var n = a.dependencies;
      if (n !== null) {
        var i = a.child;
        n = n.firstContext;
        t: for (; n !== null; ) {
          var c = n;
          n = a;
          for (var r = 0; r < l.length; r++)
            if (c.context === l[r]) {
              n.lanes |= e, c = n.alternate, c !== null && (c.lanes |= e), Xn(
                n.return,
                e,
                t
              ), u || (i = null);
              break t;
            }
          n = c.next;
        }
      } else if (a.tag === 18) {
        if (i = a.return, i === null) throw Error(o(341));
        i.lanes |= e, n = i.alternate, n !== null && (n.lanes |= e), Xn(i, e, t), i = null;
      } else
        a.tag === 13 && a.memoizedState !== null && a.memoizedState.dehydrated === null ? (a.lanes |= e, i = a.alternate, i !== null && (i.lanes |= e), Xn(
          a.return,
          e,
          t
        ), i = a.child, i = i !== null ? i.sibling : null) : i = a.child;
      if (i !== null) i.return = a;
      else
        for (i = a; i !== null; ) {
          if (i === t) {
            i = null;
            break;
          }
          if (a = i.sibling, a !== null) {
            a.return = i.return, i = a;
            break;
          }
          i = i.return;
        }
      a = i;
    }
  }
  function ou(t, l, e, u) {
    t = null;
    for (var a = l, n = !1; a !== null; ) {
      if (!n) {
        if ((a.flags & 524288) !== 0) n = !0;
        else if ((a.flags & 262144) !== 0) break;
      }
      if (a.tag === 10) {
        var i = a.alternate;
        if (i === null) throw Error(o(387));
        if (i = i.memoizedProps, i !== null) {
          var c = a.type;
          yl(a.pendingProps.value, i.value) || (t !== null ? t.push(c) : t = [c]);
        }
      } else if (a === mn.current) {
        if (i = a.alternate, i === null) throw Error(o(387));
        i.memoizedState.memoizedState !== a.memoizedState.memoizedState && (t !== null ? t.push(da) : t = [da]);
      }
      a = a.return;
    }
    return t !== null && jc(
      l,
      t,
      e,
      u
    ), l.flags |= 262144, t !== null;
  }
  function Qn(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!yl(
        t.context._currentValue,
        t.memoizedValue
      ))
        return !0;
      t = t.next;
    }
    return !1;
  }
  function ru(t) {
    fu = t, se = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function Lt(t) {
    return Pr(fu, t);
  }
  function Ln(t, l) {
    return fu === null && ru(t), Pr(t, l);
  }
  function Pr(t, l) {
    var e = l._currentValue;
    if (l = { context: l, memoizedValue: e, next: null }, se === null) {
      if (t === null) throw Error(o(308));
      se = l, t.dependencies = { lanes: 0, firstContext: l }, t.flags |= 524288;
    } else se = se.next = l;
    return e;
  }
  var Zy = typeof AbortController < "u" ? AbortController : function() {
    var t = [], l = this.signal = {
      aborted: !1,
      addEventListener: function(e, u) {
        t.push(u);
      }
    };
    this.abort = function() {
      l.aborted = !0, t.forEach(function(e) {
        return e();
      });
    };
  }, Vy = f.unstable_scheduleCallback, Ky = f.unstable_NormalPriority, Rt = {
    $$typeof: jt,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Bc() {
    return {
      controller: new Zy(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Ua(t) {
    t.refCount--, t.refCount === 0 && Vy(Ky, function() {
      t.controller.abort();
    });
  }
  function ts(t, l) {
    if ((t.pendingLanes & 4194048) !== 0) {
      var e = t.transitionTypes;
      for (e === null && (e = t.transitionTypes = []), t = 0; t < l.length; t++) {
        var u = l[t];
        e.indexOf(u) === -1 && e.push(u);
      }
    }
  }
  var Ha = null;
  function Jy(t) {
    var l = t.transitionTypes;
    return t.transitionTypes = null, l;
  }
  var xa = null, Yc = 0, su = 0, Lu = null;
  function wy(t, l) {
    if (xa === null) {
      var e = xa = [];
      Yc = 0, su = to(), Lu = {
        status: "pending",
        value: void 0,
        then: function(u) {
          e.push(u);
        }
      };
    }
    return Yc++, l.then(ls, ls), l;
  }
  function ls() {
    if (--Yc === 0 && (Ha = null, xa !== null)) {
      Lu !== null && (Lu.status = "fulfilled");
      var t = xa;
      xa = null, su = 0, Lu = null;
      for (var l = 0; l < t.length; l++) (0, t[l])();
    }
  }
  function Wy(t, l) {
    var e = [], u = {
      status: "pending",
      value: null,
      reason: null,
      then: function(a) {
        e.push(a);
      }
    };
    return t.then(
      function() {
        u.status = "fulfilled", u.value = l;
        for (var a = 0; a < e.length; a++) (0, e[a])(l);
      },
      function(a) {
        for (u.status = "rejected", u.reason = a, a = 0; a < e.length; a++)
          (0, e[a])(void 0);
      }
    ), u;
  }
  var es = B.S;
  B.S = function(t, l) {
    if (Wd = rl(), typeof l == "object" && l !== null && typeof l.then == "function" && wy(t, l), Ha !== null)
      for (var e = ia; e !== null; )
        ts(e, Ha), e = e.next;
    if (e = t.types, e !== null) {
      for (var u = ia; u !== null; )
        ts(u, e), u = u.next;
      if (su !== 0) {
        u = Ha, u === null && (u = Ha = []);
        for (var a = 0; a < e.length; a++) {
          var n = e[a];
          u.indexOf(n) === -1 && u.push(n);
        }
      }
    }
    es !== null && es(t, l);
  };
  var du = Xl(null);
  function qc() {
    var t = du.current;
    return t !== null ? t : St.pooledCache;
  }
  function Zn(t, l) {
    l === null ? bt(du, du.current) : bt(du, l.pool);
  }
  function us() {
    var t = qc();
    return t === null ? null : { parent: Rt._currentValue, pool: t };
  }
  var Zu = Error(o(460)), Gc = Error(o(474)), Vn = Error(o(542)), Kn = { then: function() {
  } };
  function as(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function ns(t, l, e) {
    switch (e = t[e], e === void 0 ? t.push(l) : e !== l && (l.then(Ll, Ll), l = e), l.status) {
      case "fulfilled":
        return l.value;
      case "rejected":
        throw t = l.reason, cs(t), t === void 0 && !("reason" in l) ? Error(o(600)) : t;
      default:
        if (typeof l.status == "string") l.then(Ll, Ll);
        else {
          if (t = St, t !== null && 100 < t.shellSuspendCounter)
            throw Error(o(482));
          t = l, t.status = "pending", t.then(
            function(u) {
              if (l.status === "pending") {
                var a = l;
                a.status = "fulfilled", a.value = u;
              }
            },
            function(u) {
              if (l.status === "pending") {
                var a = l;
                a.status = "rejected", a.reason = u;
              }
            }
          );
        }
        switch (l.status) {
          case "fulfilled":
            return l.value;
          case "rejected":
            throw t = l.reason, cs(t), t;
        }
        throw yu = l, Zu;
    }
  }
  function mu(t) {
    try {
      var l = t._init;
      return l(t._payload);
    } catch (e) {
      throw e !== null && typeof e == "object" && typeof e.then == "function" ? (yu = e, Zu) : e;
    }
  }
  var yu = null;
  function is() {
    if (yu === null) throw Error(o(459));
    var t = yu;
    return yu = null, t;
  }
  function cs(t) {
    if (t === Zu || t === Vn)
      throw Error(o(483));
  }
  var Vu = null, ja = 0;
  function Jn(t) {
    var l = ja;
    return ja += 1, Vu === null && (Vu = []), ns(Vu, t, l);
  }
  function De(t, l) {
    l = l.props.ref, t.ref = l !== void 0 ? l : null;
  }
  function wn(t, l) {
    throw l.$$typeof === Z ? Error(o(525)) : (t = Object.prototype.toString.call(l), Error(
      o(
        31,
        t === "[object Object]" ? "object with keys {" + Object.keys(l).join(", ") + "}" : t
      )
    ));
  }
  function fs(t) {
    function l(v, s) {
      if (t) {
        var S = v.deletions;
        S === null ? (v.deletions = [s], v.flags |= 16) : S.push(s);
      }
    }
    function e(v, s) {
      if (!t) return null;
      for (; s !== null; )
        l(v, s), s = s.sibling;
      return null;
    }
    function u(v) {
      for (var s = /* @__PURE__ */ new Map(); v !== null; )
        v.key === null ? s.set(v.index, v) : s.set(v.key, v), v = v.sibling;
      return s;
    }
    function a(v, s) {
      return v = oe(v, s), v.index = 0, v.sibling = null, v;
    }
    function n(v, s, S) {
      return v.index = S, t ? (S = v.alternate, S !== null ? (S = S.index, S < s ? (v.flags |= 2, s) : S) : (v.flags |= 134217730, s)) : (v.flags |= 1048576, s);
    }
    function i(v) {
      return t && v.alternate === null && (v.flags |= 134217730), v;
    }
    function c(v, s, S, z) {
      return s === null || s.tag !== 6 ? (s = Cc(S, v.mode, z), s.return = v, s) : (s = a(s, S), s.return = v, s);
    }
    function r(v, s, S, z) {
      var D = S.type;
      return D === el ? (v = T(
        v,
        s,
        S.props.children,
        z,
        S.key
      ), De(v, S), v) : s !== null && (s.elementType === D || typeof D == "object" && D !== null && D.$$typeof === rt && mu(D) === s.type) ? (s = a(s, S.props), De(s, S), s.return = v, s) : (s = Bn(
        S.type,
        S.key,
        S.props,
        null,
        v.mode,
        z
      ), De(s, S), s.return = v, s);
    }
    function h(v, s, S, z) {
      return s === null || s.tag !== 4 || s.stateNode.containerInfo !== S.containerInfo || s.stateNode.implementation !== S.implementation ? (s = Rc(S, v.mode, z), s.return = v, s) : (s = a(s, S.children || []), s.return = v, s);
    }
    function T(v, s, S, z, D) {
      return s === null || s.tag !== 7 ? (s = iu(
        S,
        v.mode,
        z,
        D
      ), s.return = v, s) : (s = a(s, S), s.return = v, s);
    }
    function p(v, s, S) {
      if (typeof s == "string" && s !== "" || typeof s == "number" || typeof s == "bigint")
        return s = Cc(
          "" + s,
          v.mode,
          S
        ), s.return = v, s;
      if (typeof s == "object" && s !== null) {
        switch (s.$$typeof) {
          case Mt:
            return S = Bn(
              s.type,
              s.key,
              s.props,
              null,
              v.mode,
              S
            ), De(S, s), S.return = v, S;
          case ll:
            return s = Rc(
              s,
              v.mode,
              S
            ), s.return = v, s;
          case rt:
            return s = mu(s), p(v, s, S);
        }
        if (ft(s) || Q(s))
          return s = iu(
            s,
            v.mode,
            S,
            null
          ), s.return = v, s;
        if (typeof s.then == "function")
          return p(v, Jn(s), S);
        if (s.$$typeof === jt)
          return p(
            v,
            Ln(v, s),
            S
          );
        wn(v, s);
      }
      return null;
    }
    function y(v, s, S, z) {
      var D = s !== null ? s.key : null;
      if (typeof S == "string" && S !== "" || typeof S == "number" || typeof S == "bigint")
        return D !== null ? null : c(v, s, "" + S, z);
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case Mt:
            return S.key === D ? r(v, s, S, z) : null;
          case ll:
            return S.key === D ? h(v, s, S, z) : null;
          case rt:
            return S = mu(S), y(v, s, S, z);
        }
        if (ft(S) || Q(S))
          return D !== null ? null : T(v, s, S, z, null);
        if (typeof S.then == "function")
          return y(
            v,
            s,
            Jn(S),
            z
          );
        if (S.$$typeof === jt)
          return y(
            v,
            s,
            Ln(v, S),
            z
          );
        wn(v, S);
      }
      return null;
    }
    function b(v, s, S, z, D) {
      if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint")
        return v = v.get(S) || null, c(s, v, "" + z, D);
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case Mt:
            return v = v.get(
              z.key === null ? S : z.key
            ) || null, r(s, v, z, D);
          case ll:
            return v = v.get(
              z.key === null ? S : z.key
            ) || null, h(s, v, z, D);
          case rt:
            return z = mu(z), b(
              v,
              s,
              S,
              z,
              D
            );
        }
        if (ft(z) || Q(z))
          return v = v.get(S) || null, T(s, v, z, D, null);
        if (typeof z.then == "function")
          return b(
            v,
            s,
            S,
            Jn(z),
            D
          );
        if (z.$$typeof === jt)
          return b(
            v,
            s,
            S,
            Ln(s, z),
            D
          );
        wn(s, z);
      }
      return null;
    }
    function M(v, s, S, z) {
      for (var D = null, et = null, q = s, L = s = 0, Ht = null; q !== null && L < S.length; L++) {
        q.index > L ? (Ht = q, q = null) : Ht = q.sibling;
        var ut = y(
          v,
          q,
          S[L],
          z
        );
        if (ut === null) {
          q === null && (q = Ht);
          break;
        }
        t && q && ut.alternate === null && l(v, q), s = n(ut, s, L), et === null ? D = ut : et.sibling = ut, et = ut, q = Ht;
      }
      if (L === S.length)
        return e(v, q), k && re(v, L), D;
      if (q === null) {
        for (; L < S.length; L++)
          q = p(v, S[L], z), q !== null && (s = n(
            q,
            s,
            L
          ), et === null ? D = q : et.sibling = q, et = q);
        return k && re(v, L), D;
      }
      for (q = u(q); L < S.length; L++)
        Ht = b(
          q,
          v,
          L,
          S[L],
          z
        ), Ht !== null && (t && (ut = Ht.alternate, ut !== null && q.delete(ut.key === null ? L : ut.key)), s = n(
          Ht,
          s,
          L
        ), et === null ? D = Ht : et.sibling = Ht, et = Ht);
      return t && q.forEach(function(Fe) {
        return l(v, Fe);
      }), k && re(v, L), D;
    }
    function H(v, s, S, z) {
      if (S == null) throw Error(o(151));
      for (var D = null, et = null, q = s, L = s = 0, Ht = null, ut = S.next(); q !== null && !ut.done; L++, ut = S.next()) {
        q.index > L ? (Ht = q, q = null) : Ht = q.sibling;
        var Fe = y(v, q, ut.value, z);
        if (Fe === null) {
          q === null && (q = Ht);
          break;
        }
        t && q && Fe.alternate === null && l(v, q), s = n(Fe, s, L), et === null ? D = Fe : et.sibling = Fe, et = Fe, q = Ht;
      }
      if (ut.done)
        return e(v, q), k && re(v, L), D;
      if (q === null) {
        for (; !ut.done; L++, ut = S.next())
          ut = p(v, ut.value, z), ut !== null && (s = n(ut, s, L), et === null ? D = ut : et.sibling = ut, et = ut);
        return k && re(v, L), D;
      }
      for (q = u(q); !ut.done; L++, ut = S.next())
        ut = b(q, v, L, ut.value, z), ut !== null && (t && (Ht = ut.alternate, Ht !== null && q.delete(
          Ht.key === null ? L : Ht.key
        )), s = n(ut, s, L), et === null ? D = ut : et.sibling = ut, et = ut);
      return t && q.forEach(function(M1) {
        return l(v, M1);
      }), k && re(v, L), D;
    }
    function $(v, s, S, z) {
      if (typeof S == "object" && S !== null && S.type === el && S.key === null && S.props.ref === void 0 && (S = S.props.children), typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case Mt:
            t: {
              for (var D = S.key; s !== null; ) {
                if (s.key === D) {
                  if (D = S.type, D === el) {
                    if (s.tag === 7) {
                      e(
                        v,
                        s.sibling
                      ), z = a(
                        s,
                        S.props.children
                      ), De(z, S), z.return = v, v = z;
                      break t;
                    }
                  } else if (s.elementType === D || typeof D == "object" && D !== null && D.$$typeof === rt && mu(D) === s.type) {
                    e(
                      v,
                      s.sibling
                    ), z = a(s, S.props), De(z, S), z.return = v, v = z;
                    break t;
                  }
                  e(v, s);
                  break;
                } else l(v, s);
                s = s.sibling;
              }
              S.type === el ? (z = iu(
                S.props.children,
                v.mode,
                z,
                S.key
              ), De(z, S), z.return = v, v = z) : (z = Bn(
                S.type,
                S.key,
                S.props,
                null,
                v.mode,
                z
              ), De(z, S), z.return = v, v = z);
            }
            return i(v);
          case ll:
            t: {
              for (D = S.key; s !== null; ) {
                if (s.key === D)
                  if (s.tag === 4 && s.stateNode.containerInfo === S.containerInfo && s.stateNode.implementation === S.implementation) {
                    e(
                      v,
                      s.sibling
                    ), z = a(s, S.children || []), z.return = v, v = z;
                    break t;
                  } else {
                    e(v, s);
                    break;
                  }
                else l(v, s);
                s = s.sibling;
              }
              z = Rc(S, v.mode, z), z.return = v, v = z;
            }
            return i(v);
          case rt:
            return S = mu(S), $(
              v,
              s,
              S,
              z
            );
        }
        if (ft(S))
          return M(
            v,
            s,
            S,
            z
          );
        if (Q(S)) {
          if (D = Q(S), typeof D != "function") throw Error(o(150));
          return S = D.call(S), H(
            v,
            s,
            S,
            z
          );
        }
        if (typeof S.then == "function")
          return $(
            v,
            s,
            Jn(S),
            z
          );
        if (S.$$typeof === jt)
          return $(
            v,
            s,
            Ln(v, S),
            z
          );
        wn(v, S);
      }
      return typeof S == "string" && S !== "" || typeof S == "number" || typeof S == "bigint" ? (S = "" + S, s !== null && s.tag === 6 ? (e(v, s.sibling), z = a(s, S), z.return = v, v = z) : (e(v, s), z = Cc(S, v.mode, z), z.return = v, v = z), i(v)) : e(v, s);
    }
    return function(v, s, S, z) {
      try {
        ja = 0;
        var D = $(
          v,
          s,
          S,
          z
        );
        return Vu = null, D;
      } catch (q) {
        if (q === Zu || q === Vn) throw q;
        var et = al(29, q, null, v.mode);
        return et.lanes = z, et.return = v, et;
      }
    };
  }
  var vu = fs(!0), os = fs(!1), Ue = !1;
  function Xc(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Qc(t, l) {
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
  function xe(t, l, e) {
    var u = t.updateQueue;
    if (u === null) return null;
    if (u = u.shared, (ot & 2) !== 0) {
      var a = u.pending;
      return a === null ? l.next = l : (l.next = a.next, a.next = l), u.pending = l, l = jn(t), Jr(t, null, e), l;
    }
    return xn(t, u, l, e), jn(t);
  }
  function Ba(t, l, e) {
    if (l = l.updateQueue, l !== null && (l = l.shared, (e & 4194048) !== 0)) {
      var u = l.lanes;
      u &= t.pendingLanes, e |= u, l.lanes = e, Fo(t, e);
    }
  }
  function Lc(t, l) {
    var e = t.updateQueue, u = t.alternate;
    if (u !== null && (u = u.updateQueue, e === u)) {
      var a = null, n = null;
      if (e = e.firstBaseUpdate, e !== null) {
        do {
          var i = {
            lane: e.lane,
            tag: e.tag,
            payload: e.payload,
            callback: null,
            next: null
          };
          n === null ? a = n = i : n = n.next = i, e = e.next;
        } while (e !== null);
        n === null ? a = n = l : n = n.next = l;
      } else a = n = l;
      e = {
        baseState: u.baseState,
        firstBaseUpdate: a,
        lastBaseUpdate: n,
        shared: u.shared,
        callbacks: u.callbacks
      }, t.updateQueue = e;
      return;
    }
    t = e.lastBaseUpdate, t === null ? e.firstBaseUpdate = l : t.next = l, e.lastBaseUpdate = l;
  }
  var Zc = !1;
  function Ya() {
    if (Zc) {
      var t = Lu;
      if (t !== null) throw t;
    }
  }
  function qa(t, l, e, u) {
    Zc = !1;
    var a = t.updateQueue;
    Ue = !1;
    var n = a.firstBaseUpdate, i = a.lastBaseUpdate, c = a.shared.pending;
    if (c !== null) {
      a.shared.pending = null;
      var r = c, h = r.next;
      r.next = null, i === null ? n = h : i.next = h, i = r;
      var T = t.alternate;
      T !== null && (T = T.updateQueue, c = T.lastBaseUpdate, c !== i && (c === null ? T.firstBaseUpdate = h : c.next = h, T.lastBaseUpdate = r));
    }
    if (n !== null) {
      var p = a.baseState;
      i = 0, T = h = r = null, c = n;
      do {
        var y = c.lane & -536870913, b = y !== c.lane;
        if (b ? (lt & y) === y : (u & y) === y) {
          y !== 0 && y === su && (Zc = !0), T !== null && (T = T.next = {
            lane: 0,
            tag: c.tag,
            payload: c.payload,
            callback: null,
            next: null
          });
          t: {
            var M = t, H = c;
            y = l;
            var $ = e;
            switch (H.tag) {
              case 1:
                if (M = H.payload, typeof M == "function") {
                  p = M.call($, p, y);
                  break t;
                }
                p = M;
                break t;
              case 3:
                M.flags = M.flags & -65537 | 128;
              case 0:
                if (M = H.payload, y = typeof M == "function" ? M.call($, p, y) : M, y == null) break t;
                p = I({}, p, y);
                break t;
              case 2:
                Ue = !0;
            }
          }
          y = c.callback, y !== null && (t.flags |= 64, b && (t.flags |= 8192), b = a.callbacks, b === null ? a.callbacks = [y] : b.push(y));
        } else
          b = {
            lane: y,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null
          }, T === null ? (h = T = b, r = p) : T = T.next = b, i |= y;
        if (c = c.next, c === null) {
          if (c = a.shared.pending, c === null)
            break;
          b = c, c = b.next, b.next = null, a.lastBaseUpdate = b, a.shared.pending = null;
        }
      } while (!0);
      T === null && (r = p), a.baseState = r, a.firstBaseUpdate = h, a.lastBaseUpdate = T, n === null && (a.shared.lanes = 0), Qe |= i, t.lanes = i, t.memoizedState = p;
    }
  }
  function rs(t, l) {
    if (typeof t != "function")
      throw Error(o(191, t));
    t.call(l);
  }
  function ss(t, l) {
    var e = t.callbacks;
    if (e !== null)
      for (t.callbacks = null, t = 0; t < e.length; t++)
        rs(e[t], l);
  }
  var je = Xl(null), Wn = Xl(0);
  function ds(t, l) {
    t = ge, bt(Wn, t), bt(je, l), ge = t | l.baseLanes;
  }
  function Vc() {
    bt(Wn, ge), bt(je, je.current);
  }
  function Kc() {
    ge = Wn.current, Xt(je), Xt(Wn);
  }
  var Zt = Xl(null), Wt = null;
  function Be(t) {
    var l = t.alternate;
    bt(Vt, Vt.current & 1), bt(Zt, t), Wt === null && (l === null || je.current !== null || l.memoizedState !== null) && (Wt = t);
  }
  function Jc(t) {
    bt(Vt, Vt.current), bt(Zt, t), Wt === null && (Wt = t);
  }
  function ms(t) {
    t.tag === 22 ? (bt(Vt, Vt.current), bt(Zt, t), Wt === null && (Wt = t)) : Ye();
  }
  function Ye() {
    bt(Vt, Vt.current), bt(Zt, Zt.current);
  }
  function vl(t) {
    Xt(Zt), Wt === t && (Wt = null), Xt(Vt);
  }
  var Vt = Xl(0);
  function Ga(t, l) {
    bt(Zt, Zt.current), bt(Vt, l);
  }
  function wc(t) {
    Xt(Vt), Xt(Zt), Wt === t && (Wt = null);
  }
  function $n(t) {
    for (var l = t; l !== null; ) {
      if (l.tag === 13) {
        var e = l.memoizedState;
        if (e !== null && (e = e.dehydrated, e === null || go(e) || So(e)))
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
  var me = 0, W = null, ht = null, Dt = null, Fn = !1, Ku = !1, hu = !1, In = 0, Xa = 0, Ju = null, $y = 0;
  function Ot() {
    throw Error(o(321));
  }
  function Wc(t, l) {
    if (l === null) return !1;
    for (var e = 0; e < l.length && e < t.length; e++)
      if (!yl(t[e], l[e])) return !1;
    return !0;
  }
  function $c(t, l, e, u, a, n) {
    return me = n, W = l, l.memoizedState = null, l.updateQueue = null, l.lanes = 0, B.H = t === null || t.memoizedState === null ? Fs : Is, hu = !1, n = e(u, a), hu = !1, Ku && (n = vs(
      l,
      e,
      u,
      a
    )), ys(t), n;
  }
  function ys(t) {
    B.H = ai;
    var l = ht !== null && ht.next !== null;
    if (me = 0, Dt = ht = W = null, Fn = !1, Xa = 0, Ju = null, l) throw Error(o(300));
    t === null || Ut || (t = t.dependencies, t !== null && Qn(t) && (Ut = !0));
  }
  function vs(t, l, e, u) {
    W = t;
    var a = 0;
    do {
      if (Ku && (Ju = null), Xa = 0, Ku = !1, 25 <= a) throw Error(o(301));
      if (a += 1, Dt = ht = null, t.updateQueue != null) {
        var n = t.updateQueue;
        n.lastEffect = null, n.events = null, n.stores = null, n.memoCache != null && (n.memoCache.index = 0);
      }
      B.H = uv, n = l(e, u);
    } while (Ku);
    return n;
  }
  function Fy() {
    var t = B.H, l = t.useState()[0];
    return l = typeof l.then == "function" ? Qa(l) : l, t = t.useState()[0], (ht !== null ? ht.memoizedState : null) !== t && (W.flags |= 1024), l;
  }
  function Fc() {
    var t = In !== 0;
    return In = 0, t;
  }
  function Ic(t, l, e) {
    l.updateQueue = t.updateQueue, l.flags &= -2053, t.lanes &= ~e;
  }
  function kc(t) {
    if (Fn) {
      for (t = t.memoizedState; t !== null; ) {
        var l = t.queue;
        l !== null && (l.pending = null), t = t.next;
      }
      Fn = !1;
    }
    me = 0, Dt = ht = W = null, Ku = !1, Xa = In = 0, Ju = null;
  }
  function kt() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Dt === null ? W.memoizedState = Dt = t : Dt = Dt.next = t, Dt;
  }
  function Ct() {
    if (ht === null) {
      var t = W.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = ht.next;
    var l = Dt === null ? W.memoizedState : Dt.next;
    if (l !== null)
      Dt = l, ht = t;
    else {
      if (t === null)
        throw W.alternate === null ? Error(o(467)) : Error(o(310));
      ht = t, t = {
        memoizedState: ht.memoizedState,
        baseState: ht.baseState,
        baseQueue: ht.baseQueue,
        queue: ht.queue,
        next: null
      }, Dt === null ? W.memoizedState = Dt = t : Dt = Dt.next = t;
    }
    return Dt;
  }
  function kn() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Qa(t) {
    var l = Xa;
    return Xa += 1, Ju === null && (Ju = []), t = ns(Ju, t, l), l = W, (Dt === null ? l.memoizedState : Dt.next) === null && (l = l.alternate, B.H = l === null || l.memoizedState === null ? Fs : Is), t;
  }
  function Pn(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return Qa(t);
      if (t.$$typeof === A) return;
      if (t.$$typeof === jt) return Lt(t);
    }
    throw Error(o(438, String(t)));
  }
  function Pc(t) {
    var l = null, e = W.updateQueue;
    if (e !== null && (l = e.memoCache), l == null) {
      var u = W.alternate;
      u !== null && (u = u.updateQueue, u !== null && (u = u.memoCache, u != null && (l = {
        data: u.data.map(function(a) {
          return a.slice();
        }),
        index: 0
      })));
    }
    if (l == null && (l = { data: [], index: 0 }), e === null && (e = kn(), W.updateQueue = e), e.memoCache = l, e = l.data[l.index], e === void 0)
      for (e = l.data[l.index] = Array(t), u = 0; u < t; u++)
        e[u] = Pe;
    return l.index++, e;
  }
  function ye(t, l) {
    return typeof l == "function" ? l(t) : l;
  }
  function ti(t) {
    var l = Ct();
    return tf(l, ht, t);
  }
  function tf(t, l, e) {
    var u = t.queue;
    if (u === null) throw Error(o(311));
    u.lastRenderedReducer = e;
    var a = t.baseQueue, n = u.pending;
    if (n !== null) {
      if (a !== null) {
        var i = a.next;
        a.next = n.next, n.next = i;
      }
      l.baseQueue = a = n, u.pending = null;
    }
    if (n = t.baseState, a === null) t.memoizedState = n;
    else {
      l = a.next;
      var c = i = null, r = null, h = l, T = !1;
      do {
        var p = h.lane & -536870913;
        if (p !== h.lane ? (lt & p) === p : (me & p) === p) {
          var y = h.revertLane;
          if (y === 0)
            r !== null && (r = r.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: h.action,
              hasEagerState: h.hasEagerState,
              eagerState: h.eagerState,
              next: null
            }), p === su && (T = !0);
          else if ((me & y) === y) {
            h = h.next, y === su && (T = !0);
            continue;
          } else
            p = {
              lane: 0,
              revertLane: h.revertLane,
              gesture: null,
              action: h.action,
              hasEagerState: h.hasEagerState,
              eagerState: h.eagerState,
              next: null
            }, r === null ? (c = r = p, i = n) : r = r.next = p, W.lanes |= y, Qe |= y;
          p = h.action, hu && e(n, p), n = h.hasEagerState ? h.eagerState : e(n, p);
        } else
          y = {
            lane: p,
            revertLane: h.revertLane,
            gesture: h.gesture,
            action: h.action,
            hasEagerState: h.hasEagerState,
            eagerState: h.eagerState,
            next: null
          }, r === null ? (c = r = y, i = n) : r = r.next = y, W.lanes |= p, Qe |= p;
        h = h.next;
      } while (h !== null && h !== l);
      if (r === null ? i = n : r.next = c, !yl(n, t.memoizedState) && (Ut = !0, T && (e = Lu, e !== null)))
        throw e;
      t.memoizedState = n, t.baseState = i, t.baseQueue = r, u.lastRenderedState = n;
    }
    return a === null && (u.lanes = 0), [t.memoizedState, u.dispatch];
  }
  function lf(t) {
    var l = Ct(), e = l.queue;
    if (e === null) throw Error(o(311));
    e.lastRenderedReducer = t;
    var u = e.dispatch, a = e.pending, n = l.memoizedState;
    if (a !== null) {
      e.pending = null;
      var i = a = a.next;
      do
        n = t(n, i.action), i = i.next;
      while (i !== a);
      yl(n, l.memoizedState) || (Ut = !0), l.memoizedState = n, l.baseQueue === null && (l.baseState = n), e.lastRenderedState = n;
    }
    return [n, u];
  }
  function hs(t, l, e) {
    var u = W, a = Ct(), n = k;
    if (n) {
      if (e === void 0) throw Error(o(407));
      e = e();
    } else e = l();
    var i = !yl(
      (ht || a).memoizedState,
      e
    );
    if (i && (a.memoizedState = e, Ut = !0), a = a.queue, af(bs.bind(null, u, a, t), [
      t
    ]), t = a.getSnapshot !== l || i || Dt !== null && (Dt.memoizedState.tag & 1) !== 0, wu(
      t ? 9 : 8,
      { destroy: void 0 },
      Ss.bind(null, u, a, e, l),
      null
    ), t) {
      if (u.flags |= 2048, St === null) throw Error(o(349));
      n || (me & 127) !== 0 || gs(u, l, e);
    }
    return e;
  }
  function gs(t, l, e) {
    t.flags |= 16384, t = { getSnapshot: l, value: e }, l = W.updateQueue, l === null ? (l = kn(), W.updateQueue = l, l.stores = [t]) : (e = l.stores, e === null ? l.stores = [t] : e.push(t));
  }
  function Ss(t, l, e, u) {
    l.value = e, l.getSnapshot = u, Ts(l) && Es(t);
  }
  function bs(t, l, e) {
    return e(function() {
      Ts(l) && Es(t);
    });
  }
  function Ts(t) {
    var l = t.getSnapshot;
    t = t.value;
    try {
      var e = l();
      return !yl(t, e);
    } catch {
      return !0;
    }
  }
  function Es(t) {
    var l = nu(t, 2);
    l !== null && fl(l, t, 2);
  }
  function ef(t) {
    var l = kt();
    if (typeof t == "function") {
      var e = t;
      if (t = e(), hu) {
        Oe(!0);
        try {
          e();
        } finally {
          Oe(!1);
        }
      }
    }
    return l.memoizedState = l.baseState = t, l.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ye,
      lastRenderedState: t
    }, l;
  }
  function zs(t, l, e, u) {
    return t.baseState = e, tf(
      t,
      ht,
      typeof u == "function" ? u : ye
    );
  }
  function Iy(t, l, e, u, a) {
    if (ui(t)) throw Error(o(485));
    if (t = l.action, t !== null) {
      var n = {
        payload: a,
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
      B.T !== null ? e(!0) : n.isTransition = !1, u(n), e = l.pending, e === null ? (n.next = l.pending = n, ps(l, n)) : (n.next = e.next, l.pending = e.next = n);
    }
  }
  function ps(t, l) {
    var e = l.action, u = l.payload, a = t.state;
    if (l.isTransition) {
      var n = B.T, i = {};
      i.types = n !== null ? n.types : null, B.T = i;
      try {
        var c = e(a, u), r = B.S;
        r !== null && r(i, c), Os(t, l, c);
      } catch (h) {
        uf(t, l, h);
      } finally {
        n !== null && i.types !== null && (n.types = i.types), B.T = n;
      }
    } else
      try {
        n = e(a, u), Os(t, l, n);
      } catch (h) {
        uf(t, l, h);
      }
  }
  function Os(t, l, e) {
    e !== null && typeof e == "object" && typeof e.then == "function" ? e.then(
      function(u) {
        As(t, l, u);
      },
      function(u) {
        return uf(t, l, u);
      }
    ) : As(t, l, e);
  }
  function As(t, l, e) {
    l.status = "fulfilled", l.value = e, _s(l), t.state = e, l = t.pending, l !== null && (e = l.next, e === l ? t.pending = null : (e = e.next, l.next = e, ps(t, e)));
  }
  function uf(t, l, e) {
    var u = t.pending;
    if (t.pending = null, u !== null) {
      u = u.next;
      do
        l.status = "rejected", l.reason = e, _s(l), l = l.next;
      while (l !== u);
    }
    t.action = null;
  }
  function _s(t) {
    t = t.listeners;
    for (var l = 0; l < t.length; l++) (0, t[l])();
  }
  function Ns(t, l) {
    return l;
  }
  function Ms(t, l) {
    if (k) {
      var e = St.formState;
      if (e !== null) {
        t: {
          var u = W;
          if (k) {
            if (Tt) {
              l: {
                for (var a = Tt, n = Cl; a.nodeType !== 8; ) {
                  if (!n) {
                    a = null;
                    break l;
                  }
                  if (a = Dl(
                    a.nextSibling
                  ), a === null) {
                    a = null;
                    break l;
                  }
                }
                n = a.data, a = n === "F!" || n === "F" ? a : null;
              }
              if (a) {
                Tt = Dl(
                  a.nextSibling
                ), u = a.data === "F!";
                break t;
              }
            }
            Ce(u);
          }
          u = !1;
        }
        u && (l = e[0]);
      }
    }
    return e = kt(), e.memoizedState = e.baseState = l, u = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ns,
      lastRenderedState: l
    }, e.queue = u, e = ws.bind(
      null,
      W,
      u
    ), u.dispatch = e, u = ef(!1), n = rf.bind(
      null,
      W,
      !1,
      u.queue
    ), u = kt(), a = {
      state: l,
      dispatch: null,
      action: t,
      pending: null
    }, u.queue = a, e = Iy.bind(
      null,
      W,
      a,
      n,
      e
    ), a.dispatch = e, u.memoizedState = t, [l, e, !1];
  }
  function Cs(t) {
    var l = Ct();
    return Rs(l, ht, t);
  }
  function Rs(t, l, e) {
    if (l = tf(
      t,
      l,
      Ns
    )[0], t = ti(ye)[0], typeof l == "object" && l !== null && typeof l.then == "function")
      try {
        var u = Qa(l);
      } catch (i) {
        throw i === Zu ? Vn : i;
      }
    else u = l;
    l = Ct();
    var a = l.queue, n = a.dispatch;
    return e !== l.memoizedState && (W.flags |= 2048, wu(
      9,
      { destroy: void 0 },
      ky.bind(null, a, e),
      null
    )), [u, n, t];
  }
  function ky(t, l) {
    t.action = l;
  }
  function Ds(t) {
    var l = Ct(), e = ht;
    if (e !== null)
      return Rs(l, e, t);
    Ct(), l = l.memoizedState, e = Ct();
    var u = e.queue.dispatch;
    return e.memoizedState = t, [l, u, !1];
  }
  function wu(t, l, e, u) {
    return t = { tag: t, create: e, deps: u, inst: l, next: null }, l = W.updateQueue, l === null && (l = kn(), W.updateQueue = l), e = l.lastEffect, e === null ? l.lastEffect = t.next = t : (u = e.next, e.next = t, t.next = u, l.lastEffect = t), t;
  }
  function Us() {
    return Ct().memoizedState;
  }
  function li(t, l, e, u) {
    var a = kt();
    W.flags |= t, a.memoizedState = wu(
      1 | l,
      { destroy: void 0 },
      e,
      u === void 0 ? null : u
    );
  }
  function ei(t, l, e, u) {
    var a = Ct();
    u = u === void 0 ? null : u;
    var n = a.memoizedState.inst;
    ht !== null && u !== null && Wc(u, ht.memoizedState.deps) ? a.memoizedState = wu(l, n, e, u) : (W.flags |= t, a.memoizedState = wu(
      1 | l,
      n,
      e,
      u
    ));
  }
  function Hs(t, l) {
    li(8390656, 8, t, l);
  }
  function af(t, l) {
    ei(2048, 8, t, l);
  }
  function Py(t) {
    W.flags |= 4;
    var l = W.updateQueue;
    if (l === null)
      l = kn(), W.updateQueue = l, l.events = [t];
    else {
      var e = l.events;
      e === null ? l.events = [t] : e.push(t);
    }
  }
  function xs(t) {
    var l = Ct().memoizedState;
    return Py({ ref: l, nextImpl: t }), function() {
      if ((ot & 2) !== 0) throw Error(o(440));
      return l.impl.apply(void 0, arguments);
    };
  }
  function js(t, l) {
    return ei(4, 2, t, l);
  }
  function Bs(t, l) {
    return ei(4, 4, t, l);
  }
  function Ys(t, l) {
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
  function qs(t, l, e) {
    e = e != null ? e.concat([t]) : null, ei(4, 4, Ys.bind(null, l, t), e);
  }
  function nf() {
  }
  function Gs(t, l) {
    var e = Ct();
    l = l === void 0 ? null : l;
    var u = e.memoizedState;
    return l !== null && Wc(l, u[1]) ? u[0] : (e.memoizedState = [t, l], t);
  }
  function Xs(t, l) {
    var e = Ct();
    l = l === void 0 ? null : l;
    var u = e.memoizedState;
    if (l !== null && Wc(l, u[1]))
      return u[0];
    if (u = t(), hu) {
      Oe(!0);
      try {
        t();
      } finally {
        Oe(!1);
      }
    }
    return e.memoizedState = [u, l], u;
  }
  function cf(t, l, e) {
    return e === void 0 || (me & 1073741824) !== 0 && (lt & 261930) === 0 ? t.memoizedState = l : (t.memoizedState = e, t = Fd(), W.lanes |= t, Qe |= t, e);
  }
  function Qs(t, l, e, u) {
    return yl(e, l) ? e : je.current !== null ? (t = cf(t, e, u), yl(t, l) || (Ut = !0), t) : (me & 106) === 0 || (me & 1073741824) !== 0 && (lt & 261930) === 0 ? (Ut = !0, t.memoizedState = e) : (t = Fd(), W.lanes |= t, Qe |= t, l);
  }
  function Ls(t, l, e, u, a) {
    var n = J.p;
    J.p = n !== 0 && 8 > n ? n : 8;
    var i = B.T, c = {};
    c.types = i !== null ? i.types : null, B.T = c, rf(t, !1, l, e);
    try {
      var r = a(), h = B.S;
      if (h !== null && h(c, r), r !== null && typeof r == "object" && typeof r.then == "function") {
        var T = Wy(
          r,
          u
        );
        La(
          t,
          l,
          T,
          bl(t)
        );
      } else
        La(
          t,
          l,
          u,
          bl(t)
        );
    } catch (p) {
      La(
        t,
        l,
        { then: function() {
        }, status: "rejected", reason: p },
        bl()
      );
    } finally {
      J.p = n, i !== null && c.types !== null && (i.types = c.types), B.T = i;
    }
  }
  function tv() {
  }
  function ff(t, l, e, u) {
    if (t.tag !== 5) throw Error(o(476));
    var a = Zs(t).queue;
    Ls(
      t,
      a,
      l,
      ue,
      e === null ? tv : function() {
        return Vs(t), e(u);
      }
    );
  }
  function Zs(t) {
    var l = t.memoizedState;
    if (l !== null) return l;
    l = {
      memoizedState: ue,
      baseState: ue,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ye,
        lastRenderedState: ue
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
        lastRenderedReducer: ye,
        lastRenderedState: e
      },
      next: null
    }, t.memoizedState = l, t = t.alternate, t !== null && (t.memoizedState = l), l;
  }
  function Vs(t) {
    var l = Zs(t);
    l.next === null && (l = t.alternate.memoizedState), La(
      t,
      l.next.queue,
      {},
      bl()
    );
  }
  function of() {
    return Lt(da);
  }
  function Ks() {
    return Ct().memoizedState;
  }
  function Js() {
    return Ct().memoizedState;
  }
  function lv(t) {
    for (var l = t.return; l !== null; ) {
      switch (l.tag) {
        case 24:
        case 3:
          var e = bl();
          t = He(e);
          var u = xe(l, t, e);
          u !== null && (fl(u, l, e), Ba(u, l, e)), l = { cache: Bc() }, t.payload = l;
          return;
      }
      l = l.return;
    }
  }
  function ev(t, l, e) {
    var u = bl();
    e = {
      lane: u,
      revertLane: 0,
      gesture: null,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, ui(t) ? Ws(l, e) : (e = Nc(t, l, e, u), e !== null && (fl(e, t, u), $s(e, l, u)));
  }
  function ws(t, l, e) {
    var u = bl();
    La(t, l, e, u);
  }
  function La(t, l, e, u) {
    var a = {
      lane: u,
      revertLane: 0,
      gesture: null,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (ui(t)) Ws(l, a);
    else {
      var n = t.alternate;
      if (t.lanes === 0 && (n === null || n.lanes === 0) && (n = l.lastRenderedReducer, n !== null))
        try {
          var i = l.lastRenderedState, c = n(i, e);
          if (a.hasEagerState = !0, a.eagerState = c, yl(c, i))
            return xn(t, l, a, 0), St === null && Hn(), !1;
        } catch {
        }
      if (e = Nc(t, l, a, u), e !== null)
        return fl(e, t, u), $s(e, l, u), !0;
    }
    return !1;
  }
  function rf(t, l, e, u) {
    if (u = {
      lane: 2,
      revertLane: to(),
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, ui(t)) {
      if (l) throw Error(o(479));
    } else
      l = Nc(
        t,
        e,
        u,
        2
      ), l !== null && fl(l, t, 2);
  }
  function ui(t) {
    var l = t.alternate;
    return t === W || l !== null && l === W;
  }
  function Ws(t, l) {
    Ku = Fn = !0;
    var e = t.pending;
    e === null ? l.next = l : (l.next = e.next, e.next = l), t.pending = l;
  }
  function $s(t, l, e) {
    if ((e & 4194048) !== 0) {
      var u = l.lanes;
      u &= t.pendingLanes, e |= u, l.lanes = e, Fo(t, e);
    }
  }
  var ai = {
    readContext: Lt,
    use: Pn,
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
  }, Fs = {
    readContext: Lt,
    use: Pn,
    useCallback: function(t, l) {
      return kt().memoizedState = [
        t,
        l === void 0 ? null : l
      ], t;
    },
    useContext: Lt,
    useEffect: Hs,
    useImperativeHandle: function(t, l, e) {
      e = e != null ? e.concat([t]) : null, li(
        4194308,
        4,
        Ys.bind(null, l, t),
        e
      );
    },
    useLayoutEffect: function(t, l) {
      return li(4194308, 4, t, l);
    },
    useInsertionEffect: function(t, l) {
      li(4, 2, t, l);
    },
    useMemo: function(t, l) {
      var e = kt();
      l = l === void 0 ? null : l;
      var u = t();
      if (hu) {
        Oe(!0);
        try {
          t();
        } finally {
          Oe(!1);
        }
      }
      return e.memoizedState = [u, l], u;
    },
    useReducer: function(t, l, e) {
      var u = kt();
      if (e !== void 0) {
        var a = e(l);
        if (hu) {
          Oe(!0);
          try {
            e(l);
          } finally {
            Oe(!1);
          }
        }
      } else a = l;
      return u.memoizedState = u.baseState = a, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: a
      }, u.queue = t, t = t.dispatch = ev.bind(
        null,
        W,
        t
      ), [u.memoizedState, t];
    },
    useRef: function(t) {
      var l = kt();
      return t = { current: t }, l.memoizedState = t;
    },
    useState: function(t) {
      t = ef(t);
      var l = t.queue, e = ws.bind(null, W, l);
      return l.dispatch = e, [t.memoizedState, e];
    },
    useDebugValue: nf,
    useDeferredValue: function(t, l) {
      var e = kt();
      return cf(e, t, l);
    },
    useTransition: function() {
      var t = ef(!1);
      return t = Ls.bind(
        null,
        W,
        t.queue,
        !0,
        !1
      ), kt().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, l, e) {
      var u = W, a = kt();
      if (k) {
        if (e === void 0)
          throw Error(o(407));
        e = e();
      } else {
        if (e = l(), St === null)
          throw Error(o(349));
        (lt & 127) !== 0 || gs(u, l, e);
      }
      a.memoizedState = e;
      var n = { value: e, getSnapshot: l };
      return a.queue = n, Hs(bs.bind(null, u, n, t), [
        t
      ]), u.flags |= 2048, wu(
        9,
        { destroy: void 0 },
        Ss.bind(
          null,
          u,
          n,
          e,
          l
        ),
        null
      ), e;
    },
    useId: function() {
      var t = kt(), l = St.identifierPrefix;
      if (k) {
        var e = Vl, u = Zl;
        e = (u & ~(1 << 32 - dl(u) - 1)).toString(32) + e, l = "_" + l + "R_" + e, e = In++, 0 < e && (l += "H" + e.toString(32)), l += "_";
      } else
        e = $y++, l = "_" + l + "r_" + e.toString(32) + "_";
      return t.memoizedState = l;
    },
    useHostTransitionStatus: of,
    useFormState: Ms,
    useActionState: Ms,
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
      return l.queue = e, l = rf.bind(
        null,
        W,
        !0,
        e
      ), e.dispatch = l, [t, l];
    },
    useMemoCache: Pc,
    useCacheRefresh: function() {
      return kt().memoizedState = lv.bind(
        null,
        W
      );
    },
    useEffectEvent: function(t) {
      var l = kt(), e = { impl: t };
      return l.memoizedState = e, function() {
        if ((ot & 2) !== 0)
          throw Error(o(440));
        return e.impl.apply(void 0, arguments);
      };
    }
  }, Is = {
    readContext: Lt,
    use: Pn,
    useCallback: Gs,
    useContext: Lt,
    useEffect: af,
    useImperativeHandle: qs,
    useInsertionEffect: js,
    useLayoutEffect: Bs,
    useMemo: Xs,
    useReducer: ti,
    useRef: Us,
    useState: function() {
      return ti(ye);
    },
    useDebugValue: nf,
    useDeferredValue: function(t, l) {
      var e = Ct();
      return Qs(
        e,
        ht.memoizedState,
        t,
        l
      );
    },
    useTransition: function() {
      var t = ti(ye)[0], l = Ct().memoizedState;
      return [
        typeof t == "boolean" ? t : Qa(t),
        l
      ];
    },
    useSyncExternalStore: hs,
    useId: Ks,
    useHostTransitionStatus: of,
    useFormState: Cs,
    useActionState: Cs,
    useOptimistic: function(t, l) {
      var e = Ct();
      return zs(e, ht, t, l);
    },
    useMemoCache: Pc,
    useCacheRefresh: Js,
    useEffectEvent: xs
  }, uv = {
    readContext: Lt,
    use: Pn,
    useCallback: Gs,
    useContext: Lt,
    useEffect: af,
    useImperativeHandle: qs,
    useInsertionEffect: js,
    useLayoutEffect: Bs,
    useMemo: Xs,
    useReducer: lf,
    useRef: Us,
    useState: function() {
      return lf(ye);
    },
    useDebugValue: nf,
    useDeferredValue: function(t, l) {
      var e = Ct();
      return ht === null ? cf(e, t, l) : Qs(
        e,
        ht.memoizedState,
        t,
        l
      );
    },
    useTransition: function() {
      var t = lf(ye)[0], l = Ct().memoizedState;
      return [
        typeof t == "boolean" ? t : Qa(t),
        l
      ];
    },
    useSyncExternalStore: hs,
    useId: Ks,
    useHostTransitionStatus: of,
    useFormState: Ds,
    useActionState: Ds,
    useOptimistic: function(t, l) {
      var e = Ct();
      return ht !== null ? zs(e, ht, t, l) : (e.baseState = t, [t, e.queue.dispatch]);
    },
    useMemoCache: Pc,
    useCacheRefresh: Js,
    useEffectEvent: xs
  };
  function sf(t, l, e, u) {
    l = t.memoizedState, e = e(u, l), e = e == null ? l : I({}, l, e), t.memoizedState = e, t.lanes === 0 && (t.updateQueue.baseState = e);
  }
  var df = {
    enqueueSetState: function(t, l, e) {
      t = t._reactInternals;
      var u = bl(), a = He(u);
      a.payload = l, e != null && (a.callback = e), l = xe(t, a, u), l !== null && (fl(l, t, u), Ba(l, t, u));
    },
    enqueueReplaceState: function(t, l, e) {
      t = t._reactInternals;
      var u = bl(), a = He(u);
      a.tag = 1, a.payload = l, e != null && (a.callback = e), l = xe(t, a, u), l !== null && (fl(l, t, u), Ba(l, t, u));
    },
    enqueueForceUpdate: function(t, l) {
      t = t._reactInternals;
      var e = bl(), u = He(e);
      u.tag = 2, l != null && (u.callback = l), l = xe(t, u, e), l !== null && (fl(l, t, e), Ba(l, t, e));
    }
  };
  function ks(t, l, e, u, a, n, i) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(u, n, i) : l.prototype && l.prototype.isPureReactComponent ? !Ma(e, u) || !Ma(a, n) : !0;
  }
  function Ps(t, l, e, u) {
    t = l.state, typeof l.componentWillReceiveProps == "function" && l.componentWillReceiveProps(e, u), typeof l.UNSAFE_componentWillReceiveProps == "function" && l.UNSAFE_componentWillReceiveProps(e, u), l.state !== t && df.enqueueReplaceState(l, l.state, null);
  }
  function gu(t, l) {
    var e = l;
    if ("ref" in l) {
      e = {};
      for (var u in l)
        u !== "ref" && (e[u] = l[u]);
    }
    if (t = t.defaultProps) {
      e === l && (e = I({}, e));
      for (var a in t)
        e[a] === void 0 && (e[a] = t[a]);
    }
    return e;
  }
  function td(t) {
    Un(t);
  }
  function ld(t) {
    console.error(t);
  }
  function ed(t) {
    Un(t);
  }
  function ni(t, l) {
    try {
      var e = t.onUncaughtError;
      e(l.value, { componentStack: l.stack });
    } catch (u) {
      setTimeout(function() {
        throw u;
      });
    }
  }
  function ud(t, l, e) {
    try {
      var u = t.onCaughtError;
      u(e.value, {
        componentStack: e.stack,
        errorBoundary: l.tag === 1 ? l.stateNode : null
      });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function mf(t, l, e) {
    return e = He(e), e.tag = 3, e.payload = { element: null }, e.callback = function() {
      ni(t, l);
    }, e;
  }
  function ad(t) {
    return t = He(t), t.tag = 3, t;
  }
  function nd(t, l, e, u) {
    var a = e.type.getDerivedStateFromError;
    if (typeof a == "function") {
      var n = u.value;
      t.payload = function() {
        return a(n);
      }, t.callback = function() {
        ud(l, e, u);
      };
    }
    var i = e.stateNode;
    i !== null && typeof i.componentDidCatch == "function" && (t.callback = function() {
      ud(l, e, u), typeof a != "function" && (Le === null ? Le = /* @__PURE__ */ new Set([this]) : Le.add(this));
      var c = u.stack;
      this.componentDidCatch(u.value, {
        componentStack: c !== null ? c : ""
      });
    });
  }
  function av(t, l, e, u, a) {
    if (e.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
      if (l = e.alternate, l !== null && ou(
        l,
        e,
        a,
        !0
      ), e = Zt.current, e !== null) {
        switch (e.tag) {
          case 31:
          case 13:
          case 19:
            return Wt === null ? _i() : e.alternate === null && At === 0 && (At = 3), e.flags &= -257, e.flags |= 65536, e.lanes = a, u === Kn ? e.flags |= 16384 : (l = e.updateQueue, l === null ? e.updateQueue = /* @__PURE__ */ new Set([u]) : l.add(u), If(t, u, a)), !1;
          case 22:
            return e.flags |= 65536, u === Kn ? e.flags |= 16384 : (l = e.updateQueue, l === null ? (l = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([u])
            }, e.updateQueue = l) : (e = l.retryQueue, e === null ? l.retryQueue = /* @__PURE__ */ new Set([u]) : e.add(u)), If(t, u, a)), !1;
        }
        throw Error(o(435, e.tag));
      }
      return If(t, u, a), _i(), !1;
    }
    if (k)
      return l = Zt.current, l !== null ? ((l.flags & 65536) === 0 && (l.flags |= 256), l.flags |= 65536, l.lanes = a, u !== Uc && (t = Error(o(422), { cause: u }), Da(_l(t, e)))) : (u !== Uc && (l = Error(o(423), {
        cause: u
      }), Da(
        _l(l, e)
      )), t = t.current.alternate, t.flags |= 65536, a &= -a, t.lanes |= a, u = _l(u, e), a = mf(
        t.stateNode,
        u,
        a
      ), Lc(t, a), At !== 4 && (At = 2)), !1;
    var n = Error(o(520), { cause: u });
    if (n = _l(n, e), Fa === null ? Fa = [n] : Fa.push(n), At !== 4 && (At = 2), l === null) return !0;
    u = _l(u, e), e = l;
    do {
      switch (e.tag) {
        case 3:
          return e.flags |= 65536, t = a & -a, e.lanes |= t, t = mf(e.stateNode, u, t), Lc(e, t), !1;
        case 1:
          if (l = e.type, n = e.stateNode, (e.flags & 128) === 0 && (typeof l.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (Le === null || !Le.has(n))))
            return e.flags |= 65536, a &= -a, e.lanes |= a, a = ad(a), nd(
              a,
              t,
              e,
              u
            ), Lc(e, a), !1;
          break;
        case 22:
          if (e.memoizedState !== null)
            return e.flags |= 65536, !1;
      }
      e = e.return;
    } while (e !== null);
    return !1;
  }
  var yf = Error(o(461)), Ut = !1;
  function xt(t, l, e, u) {
    l.child = t === null ? os(l, null, e, u) : vu(
      l,
      t.child,
      e,
      u
    );
  }
  function id(t, l, e, u, a) {
    e = e.render;
    var n = l.ref;
    if ("ref" in u) {
      var i = {};
      for (var c in u)
        c !== "ref" && (i[c] = u[c]);
    } else i = u;
    return ru(l), u = $c(
      t,
      l,
      e,
      i,
      n,
      a
    ), c = Fc(), t !== null && !Ut ? (Ic(t, l, a), ve(t, l, a)) : (k && c && qn(l), l.flags |= 1, xt(t, l, u, a), l.child);
  }
  function cd(t, l, e, u, a) {
    if (t === null) {
      var n = e.type;
      return typeof n == "function" && !Mc(n) && n.defaultProps === void 0 && e.compare === null ? (l.tag = 15, l.type = n, fd(
        t,
        l,
        n,
        u,
        a
      )) : (t = Bn(
        e.type,
        null,
        u,
        l,
        l.mode,
        a
      ), t.ref = l.ref, t.return = l, l.child = t);
    }
    if (n = t.child, !zf(t, a)) {
      var i = n.memoizedProps;
      if (e = e.compare, e = e !== null ? e : Ma, e(i, u) && t.ref === l.ref)
        return ve(t, l, a);
    }
    return l.flags |= 1, t = oe(n, u), t.ref = l.ref, t.return = l, l.child = t;
  }
  function fd(t, l, e, u, a) {
    if (t !== null) {
      var n = t.memoizedProps;
      if (Ma(n, u) && t.ref === l.ref)
        if (Ut = !1, l.pendingProps = u = n, zf(t, a))
          (t.flags & 131072) !== 0 && (Ut = !0);
        else
          return l.lanes = t.lanes, ve(t, l, a);
    }
    return vf(
      t,
      l,
      e,
      u,
      a
    );
  }
  function od(t, l, e, u) {
    var a = u.children, n = t !== null ? t.memoizedState : null;
    if (t === null && l.stateNode === null && (l.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), u.mode === "hidden") {
      if ((l.flags & 128) !== 0) {
        if (n = n !== null ? n.baseLanes | e : e, t !== null) {
          for (u = l.child = t.child, a = 0; u !== null; )
            a = a | u.lanes | u.childLanes, u = u.sibling;
          u = a & ~n;
        } else u = 0, l.child = null;
        return rd(
          t,
          l,
          n,
          e,
          u
        );
      }
      if ((e & 536870912) !== 0)
        l.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && Zn(
          l,
          n !== null ? n.cachePool : null
        ), n !== null ? ds(l, n) : Vc(), ms(l);
      else
        return u = l.lanes = 536870912, rd(
          t,
          l,
          n !== null ? n.baseLanes | e : e,
          e,
          u
        );
    } else
      n !== null ? (Zn(l, n.cachePool), ds(l, n), Ye(), l.memoizedState = null) : (t !== null && Zn(l, null), Vc(), Ye());
    return xt(t, l, a, e), l.child;
  }
  function Za(t, l) {
    return t !== null && t.tag === 22 || l.stateNode !== null || (l.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), l.sibling;
  }
  function rd(t, l, e, u, a) {
    var n = qc();
    return n = n === null ? null : { parent: Rt._currentValue, pool: n }, l.memoizedState = {
      baseLanes: e,
      cachePool: n
    }, t !== null && Zn(l, null), Vc(), ms(l), t !== null && ou(t, l, u, !0), l.childLanes = a, null;
  }
  function ii(t, l) {
    return l = ci(
      { mode: l.mode, children: l.children },
      t.mode
    ), l.ref = t.ref, t.child = l, l.return = t, l;
  }
  function sd(t, l, e) {
    return vu(l, t.child, null, e), t = ii(l, l.pendingProps), t.flags |= 2, vl(l), l.memoizedState = null, t;
  }
  function nv(t, l, e) {
    var u = l.pendingProps, a = (l.flags & 128) !== 0;
    if (l.flags &= -129, t === null) {
      if (k) {
        if (u.mode === "hidden")
          return t = ii(l, u), l.lanes = 536870912, t.memoizedState = { baseLanes: 0, cachePool: null }, Za(null, t);
        if (Jc(l), (t = Tt) ? (t = Y0(
          t,
          Cl
        ), t = t !== null && t.data === "&" ? t : null, t !== null && (l.memoizedState = {
          dehydrated: t,
          treeContext: Ne !== null ? { id: Zl, overflow: Vl } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, e = Wr(t), e.return = l, l.child = e, Yt = l, Tt = null)) : t = null, t === null) throw Ce(l);
        return l.lanes = 536870912, null;
      }
      return ii(l, u);
    }
    var n = t.memoizedState;
    if (n !== null) {
      var i = n.dehydrated;
      if (Jc(l), a)
        if (l.flags & 256)
          l.flags &= -257, l = sd(
            t,
            l,
            e
          );
        else if (l.memoizedState !== null)
          l.child = t.child, l.flags |= 128, l = null;
        else throw Error(o(558));
      else if (Ut || ou(t, l, e, !1), a = (e & t.childLanes) !== 0, Ut || a) {
        if (je.current === null) {
          if (u = St, u !== null && (i = Io(u, e), i !== 0 && i !== n.retryLane))
            throw n.retryLane = i, nu(t, i), fl(u, t, i), yf;
          _i();
        }
        l = sd(
          t,
          l,
          e
        );
      } else
        t = n.treeContext, Tt = Dl(i.nextSibling), Yt = l, k = !0, Me = null, Cl = !1, t !== null && Ir(l, t), l = ii(l, u), l.flags |= 134221824;
      return l;
    }
    return t = oe(t.child, {
      mode: u.mode,
      children: u.children
    }), t.ref = l.ref, l.child = t, t.return = l, t;
  }
  function Wu(t, l) {
    var e = l.ref;
    if (e === null)
      t !== null && t.ref !== null && (l.flags |= 4194816);
    else {
      if (typeof e != "function" && typeof e != "object")
        throw Error(o(284));
      (t === null || t.ref !== e) && (l.flags |= 4194816);
    }
  }
  function vf(t, l, e, u, a) {
    return ru(l), e = $c(
      t,
      l,
      e,
      u,
      void 0,
      a
    ), u = Fc(), t !== null && !Ut ? (Ic(t, l, a), ve(t, l, a)) : (k && u && qn(l), l.flags |= 1, xt(t, l, e, a), l.child);
  }
  function dd(t, l, e, u, a, n) {
    return ru(l), l.updateQueue = null, e = vs(
      l,
      u,
      e,
      a
    ), ys(t), u = Fc(), t !== null && !Ut ? (Ic(t, l, n), ve(t, l, n)) : (k && u && qn(l), l.flags |= 1, xt(t, l, e, n), l.child);
  }
  function md(t, l, e, u, a) {
    if (ru(l), l.stateNode === null) {
      var n = qu, i = e.contextType;
      typeof i == "object" && i !== null && (n = Lt(i)), n = new e(u, n), l.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = df, l.stateNode = n, n._reactInternals = l, n = l.stateNode, n.props = u, n.state = l.memoizedState, n.refs = {}, Xc(l), i = e.contextType, n.context = typeof i == "object" && i !== null ? Lt(i) : qu, n.state = l.memoizedState, i = e.getDerivedStateFromProps, typeof i == "function" && (sf(
        l,
        e,
        i,
        u
      ), n.state = l.memoizedState), typeof e.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (i = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), i !== n.state && df.enqueueReplaceState(n, n.state, null), qa(l, u, n, a), Ya(), n.state = l.memoizedState), typeof n.componentDidMount == "function" && (l.flags |= 4194308), u = !0;
    } else if (t === null) {
      n = l.stateNode;
      var c = l.memoizedProps, r = gu(e, c);
      n.props = r;
      var h = n.context, T = e.contextType;
      i = qu, typeof T == "object" && T !== null && (i = Lt(T));
      var p = e.getDerivedStateFromProps;
      T = typeof p == "function" || typeof n.getSnapshotBeforeUpdate == "function", c = l.pendingProps !== c, T || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (c || h !== i) && Ps(
        l,
        n,
        u,
        i
      ), Ue = !1;
      var y = l.memoizedState;
      n.state = y, qa(l, u, n, a), Ya(), h = l.memoizedState, c || y !== h || Ue ? (typeof p == "function" && (sf(
        l,
        e,
        p,
        u
      ), h = l.memoizedState), (r = Ue || ks(
        l,
        e,
        r,
        u,
        y,
        h,
        i
      )) ? (T || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (l.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (l.flags |= 4194308), l.memoizedProps = u, l.memoizedState = h), n.props = u, n.state = h, n.context = i, u = r) : (typeof n.componentDidMount == "function" && (l.flags |= 4194308), u = !1);
    } else {
      n = l.stateNode, Qc(t, l), i = l.memoizedProps, T = gu(e, i), n.props = T, p = l.pendingProps, y = n.context, h = e.contextType, r = qu, typeof h == "object" && h !== null && (r = Lt(h)), c = e.getDerivedStateFromProps, (h = typeof c == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (i !== p || y !== r) && Ps(
        l,
        n,
        u,
        r
      ), Ue = !1, y = l.memoizedState, n.state = y, qa(l, u, n, a), Ya();
      var b = l.memoizedState;
      i !== p || y !== b || Ue || t !== null && t.dependencies !== null && Qn(t.dependencies) ? (typeof c == "function" && (sf(
        l,
        e,
        c,
        u
      ), b = l.memoizedState), (T = Ue || ks(
        l,
        e,
        T,
        u,
        y,
        b,
        r
      ) || t !== null && t.dependencies !== null && Qn(t.dependencies)) ? (h || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(u, b, r), typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(
        u,
        b,
        r
      )), typeof n.componentDidUpdate == "function" && (l.flags |= 4), typeof n.getSnapshotBeforeUpdate == "function" && (l.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || i === t.memoizedProps && y === t.memoizedState || (l.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || i === t.memoizedProps && y === t.memoizedState || (l.flags |= 1024), l.memoizedProps = u, l.memoizedState = b), n.props = u, n.state = b, n.context = r, u = T) : (typeof n.componentDidUpdate != "function" || i === t.memoizedProps && y === t.memoizedState || (l.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || i === t.memoizedProps && y === t.memoizedState || (l.flags |= 1024), u = !1);
    }
    return n = u, Wu(t, l), u = (l.flags & 128) !== 0, n || u ? (n = l.stateNode, e = u && typeof e.getDerivedStateFromError != "function" ? null : n.render(), l.flags |= 1, t !== null && u ? (l.child = vu(
      l,
      t.child,
      null,
      a
    ), l.child = vu(
      l,
      null,
      e,
      a
    )) : xt(t, l, e, a), l.memoizedState = n.state, t = l.child) : t = ve(
      t,
      l,
      a
    ), t;
  }
  function yd(t, l, e, u) {
    return cu(), l.flags |= 256, xt(t, l, e, u), l.child;
  }
  var hf = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function gf(t) {
    return { baseLanes: t, cachePool: us() };
  }
  function Sf(t, l, e) {
    return t = t !== null ? t.childLanes & ~e : 0, l && (t |= Sl), t;
  }
  function vd(t, l, e) {
    var u = l.pendingProps, a = !1, n = (l.flags & 128) !== 0, i;
    if ((i = n) || (i = t !== null && t.memoizedState === null ? !1 : (Vt.current & 2) !== 0), i && (a = !0, l.flags &= -129), i = (l.flags & 32) !== 0, l.flags &= -33, t === null) {
      if (k) {
        if (a ? Be(l) : Ye(), (t = Tt) ? (t = Y0(
          t,
          Cl
        ), t = t !== null && t.data !== "&" ? t : null, t !== null && (l.memoizedState = {
          dehydrated: t,
          treeContext: Ne !== null ? { id: Zl, overflow: Vl } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, e = Wr(t), e.return = l, l.child = e, Yt = l, Tt = null)) : t = null, t === null) throw Ce(l);
        return So(t) ? l.lanes = 32 : l.lanes = 536870912, null;
      }
      return n = u.children, u = u.fallback, a ? (Ye(), a = l.mode, n = ci(
        { mode: "hidden", children: n },
        a
      ), u = iu(
        u,
        a,
        e,
        null
      ), n.return = l, u.return = l, n.sibling = u, l.child = n, u = l.child, u.memoizedState = gf(e), u.childLanes = Sf(
        t,
        i,
        e
      ), l.memoizedState = hf, Za(null, u)) : (Be(l), bf(l, n));
    }
    var c = t.memoizedState;
    if (c !== null) {
      var r = c.dehydrated;
      if (r !== null)
        return iv(
          t,
          l,
          n,
          i,
          u,
          r,
          c,
          e
        );
    }
    return a ? (Ye(), a = u.fallback, n = l.mode, c = t.child, r = c.sibling, u = oe(c, {
      mode: "hidden",
      children: u.children
    }), u.subtreeFlags = c.subtreeFlags & 1206910976, r !== null ? a = oe(r, a) : (a = iu(
      a,
      n,
      e,
      null
    ), a.flags |= 2), a.return = l, u.return = l, u.sibling = a, l.child = u, Za(null, u), u = l.child, a = t.child.memoizedState, a === null ? a = gf(e) : (n = a.cachePool, n !== null ? (c = Rt._currentValue, n = n.parent !== c ? { parent: c, pool: c } : n) : n = us(), a = {
      baseLanes: a.baseLanes | e,
      cachePool: n
    }), u.memoizedState = a, u.childLanes = Sf(
      t,
      i,
      e
    ), l.memoizedState = hf, Za(t.child, u)) : (Be(l), e = t.child, t = e.sibling, e = oe(e, {
      mode: "visible",
      children: u.children
    }), e.return = l, e.sibling = null, t !== null && (i = l.deletions, i === null ? (l.deletions = [t], l.flags |= 16) : i.push(t)), l.child = e, l.memoizedState = null, e);
  }
  function bf(t, l) {
    return l = ci(
      { mode: "visible", children: l },
      t.mode
    ), l.return = t, t.child = l;
  }
  function ci(t, l) {
    return t = al(22, t, null, l), t.lanes = 0, t;
  }
  function fi(t, l, e) {
    return vu(l, t.child, null, e), t = bf(
      l,
      l.pendingProps.children
    ), t.flags |= 2, l.memoizedState = null, t;
  }
  function iv(t, l, e, u, a, n, i, c) {
    if (e)
      return l.flags & 256 ? (Be(l), l.flags &= -257, fi(
        t,
        l,
        c
      )) : l.memoizedState !== null ? (Ye(), l.child = t.child, l.flags |= 128, null) : (Ye(), n = a.fallback, i = l.mode, a = ci(
        { mode: "visible", children: a.children },
        i
      ), n = iu(
        n,
        i,
        c,
        null
      ), n.flags |= 2, a.return = l, n.return = l, a.sibling = n, l.child = a, vu(l, t.child, null, c), a = l.child, a.memoizedState = gf(c), a.childLanes = Sf(
        t,
        u,
        c
      ), l.memoizedState = hf, Za(null, a));
    if (Be(l), So(n)) {
      if (u = n.nextSibling && n.nextSibling.dataset, u) var r = u.dgst;
      return u = r, u !== "" && (a = Error(o(419)), a.stack = "", a.digest = u, Da({ value: a, source: null, stack: null })), fi(
        t,
        l,
        c
      );
    }
    if (Ut || ou(t, l, c, !1), u = (c & t.childLanes) !== 0, Ut || u) {
      if (je.current !== null)
        return fi(
          t,
          l,
          c
        );
      if (u = St, u !== null && (a = Io(
        u,
        c
      ), a !== 0 && a !== i.retryLane))
        throw i.retryLane = a, nu(t, a), fl(u, t, a), yf;
      return go(n) || _i(), fi(
        t,
        l,
        c
      );
    }
    return go(n) ? (l.flags |= 192, l.child = t.child, null) : (t = i.treeContext, Tt = Dl(n.nextSibling), Yt = l, k = !0, Me = null, Cl = !1, t !== null && Ir(l, t), l = bf(
      l,
      a.children
    ), l.flags |= 134221824, l);
  }
  function hd(t, l, e) {
    t.lanes |= l;
    var u = t.alternate;
    u !== null && (u.lanes |= l), Xn(t.return, l, e);
  }
  function gd(t) {
    for (var l = null; t !== null; ) {
      var e = t.alternate;
      e !== null && $n(e) === null && (l = t), t = t.sibling;
    }
    return l;
  }
  function oi(t, l, e, u, a, n) {
    var i = t.memoizedState;
    i === null ? t.memoizedState = {
      isBackwards: l,
      rendering: null,
      renderingStartTime: 0,
      last: u,
      tail: e,
      tailMode: a,
      treeForkCount: n
    } : (i.isBackwards = l, i.rendering = null, i.renderingStartTime = 0, i.last = u, i.tail = e, i.tailMode = a, i.treeForkCount = n);
  }
  function Tf(t) {
    var l = t.child;
    for (t.child = null; l !== null; ) {
      var e = l.sibling;
      l.sibling = t.child, t.child = l, l = e;
    }
  }
  function Ef(t, l, e) {
    var u = l.pendingProps, a = u.revealOrder, n = u.tail;
    u = u.children;
    var i = Vt.current;
    if (l.flags & 128)
      return Ga(l, i), null;
    var c = (i & 2) !== 0;
    if (c ? (i = i & 1 | 2, l.flags |= 128) : i &= 1, Ga(l, i), a === "backwards" && t !== null ? (Tf(t), xt(t, l, u, e), Tf(t)) : xt(t, l, u, e), u = k ? Ra : 0, !c && t !== null && (t.flags & 128) !== 0)
      t: for (t = l.child; t !== null; ) {
        if (t.tag === 13)
          t.memoizedState !== null && hd(t, e, l);
        else if (t.tag === 19)
          hd(t, e, l);
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
        e = gd(l.child), e === null ? (a = l.child, l.child = null) : (a = e.sibling, e.sibling = null, Tf(l)), oi(
          l,
          !0,
          a,
          null,
          n,
          u
        );
        break;
      case "unstable_legacy-backwards":
        for (e = null, a = l.child, l.child = null; a !== null; ) {
          if (t = a.alternate, t !== null && $n(t) === null) {
            l.child = a;
            break;
          }
          t = a.sibling, a.sibling = e, e = a, a = t;
        }
        oi(
          l,
          !0,
          e,
          null,
          n,
          u
        );
        break;
      case "together":
        oi(
          l,
          !1,
          null,
          null,
          void 0,
          u
        );
        break;
      case "independent":
        l.memoizedState = null;
        break;
      default:
        e = gd(l.child), e === null ? (a = l.child, l.child = null) : (a = e.sibling, e.sibling = null), oi(
          l,
          !1,
          a,
          e,
          n,
          u
        );
    }
    return l.child;
  }
  function Sd(t, l, e) {
    var u = l.pendingProps;
    return Re(l, l.type, u.value), xt(t, l, u.children, e), l.child;
  }
  function ve(t, l, e) {
    if (t !== null && (l.dependencies = t.dependencies), Qe |= l.lanes, (e & l.childLanes) === 0)
      if (t !== null) {
        if (ou(
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
      for (t = l.child, e = oe(t, t.pendingProps), l.child = e, e.return = l; t.sibling !== null; )
        t = t.sibling, e = e.sibling = oe(t, t.pendingProps), e.return = l;
      e.sibling = null;
    }
    return l.child;
  }
  function zf(t, l) {
    return (t.lanes & l) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && Qn(t)));
  }
  function cv(t, l, e) {
    switch (l.tag) {
      case 3:
        yn(l, l.stateNode.containerInfo), Re(l, Rt, t.memoizedState.cache), cu();
        break;
      case 27:
      case 5:
        Wi(l);
        break;
      case 4:
        yn(l, l.stateNode.containerInfo);
        break;
      case 10:
        Re(
          l,
          l.type,
          l.memoizedProps.value
        );
        break;
      case 31:
        if (l.memoizedState !== null)
          return l.flags |= 128, Jc(l), null;
        break;
      case 13:
        var u = l.memoizedState;
        if (u !== null) {
          if (u.dehydrated !== null)
            return Be(l), l.flags |= 128, null;
          u = ou(
            t,
            l,
            e,
            !1
          );
          var a = l.child.childLanes;
          return u || (e & a) !== 0 ? vd(t, l, e) : (Be(l), t = ve(
            t,
            l,
            e
          ), t !== null ? t.sibling : null);
        }
        Be(l);
        break;
      case 19:
        if (l.flags & 128)
          return Ef(
            t,
            l,
            e
          );
        if (a = (t.flags & 128) !== 0, u = (e & l.childLanes) !== 0, u || (ou(
          t,
          l,
          e,
          !1
        ), u = (e & l.childLanes) !== 0), a) {
          if (u)
            return Ef(
              t,
              l,
              e
            );
          l.flags |= 128;
        }
        if (a = l.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), Ga(l, Vt.current), u) break;
        return null;
      case 22:
        return l.lanes = 0, od(
          t,
          l,
          e,
          l.pendingProps
        );
      case 24:
        Re(l, Rt, t.memoizedState.cache);
    }
    return ve(t, l, e);
  }
  function bd(t, l, e) {
    if (t !== null)
      if (t.memoizedProps !== l.pendingProps)
        Ut = !0;
      else {
        if (!zf(t, e) && (l.flags & 128) === 0)
          return Ut = !1, cv(
            t,
            l,
            e
          );
        Ut = (t.flags & 131072) !== 0;
      }
    else
      Ut = !1, k && (l.flags & 1048576) !== 0 && Fr(l, Ra, l.index);
    switch (l.lanes = 0, l.tag) {
      case 16:
        t: {
          var u = l.pendingProps;
          if (t = mu(l.elementType), l.type = t, typeof t == "function")
            Mc(t) ? (u = gu(t, u), l.tag = 1, l = md(
              null,
              l,
              t,
              u,
              e
            )) : (l.tag = 0, l = vf(
              null,
              l,
              t,
              u,
              e
            ));
          else {
            if (t != null) {
              var a = t.$$typeof;
              if (a === R) {
                l.tag = 11, l = id(
                  null,
                  l,
                  t,
                  u,
                  e
                );
                break t;
              } else if (a === gt) {
                l.tag = 14, l = cd(
                  null,
                  l,
                  t,
                  u,
                  e
                );
                break t;
              } else if (a === jt) {
                l.tag = 10, l.type = t, l = Sd(
                  null,
                  l,
                  e
                );
                break t;
              }
            }
            throw l = nt(t) || t, Error(o(306, l, ""));
          }
        }
        return l;
      case 0:
        return vf(
          t,
          l,
          l.type,
          l.pendingProps,
          e
        );
      case 1:
        return u = l.type, a = gu(
          u,
          l.pendingProps
        ), md(
          t,
          l,
          u,
          a,
          e
        );
      case 3:
        t: {
          if (yn(
            l,
            l.stateNode.containerInfo
          ), t === null) throw Error(o(387));
          u = l.pendingProps;
          var n = l.memoizedState;
          a = n.element, Qc(t, l), qa(l, u, null, e);
          var i = l.memoizedState;
          if (u = i.cache, Re(l, Rt, u), u !== n.cache && jc(
            l,
            [Rt],
            e,
            !0
          ), Ya(), u = i.element, n.isDehydrated)
            if (n = {
              element: u,
              isDehydrated: !1,
              cache: i.cache
            }, l.updateQueue.baseState = n, l.memoizedState = n, l.flags & 256) {
              l = yd(
                t,
                l,
                u,
                e
              );
              break t;
            } else if (u !== a) {
              a = _l(
                Error(o(424)),
                l
              ), Da(a), l = yd(
                t,
                l,
                u,
                e
              );
              break t;
            } else
              for (t = l.stateNode.containerInfo, t.nodeType === 9 ? t = t.body : t = t.nodeName === "HTML" ? t.ownerDocument.body : t, Tt = Dl(t.firstChild), Yt = l, k = !0, Me = null, Cl = !0, e = os(
                l,
                null,
                u,
                e
              ), l.child = e; e; )
                e.flags = e.flags & -3 | 134221824, e = e.sibling;
          else {
            if (cu(), u === a) {
              l = ve(
                t,
                l,
                e
              );
              break t;
            }
            xt(t, l, u, e);
          }
          l = l.child;
        }
        return l;
      case 26:
        return Wu(t, l), t === null ? (e = V0(
          l.type,
          null,
          l.pendingProps,
          null
        )) ? l.memoizedState = e : k || (l.stateNode = p0(
          l.type,
          l.pendingProps,
          ze.current,
          l
        )) : l.memoizedState = V0(
          l.type,
          t.memoizedProps,
          l.pendingProps,
          t.memoizedState
        ), null;
      case 27:
        return Wi(l), t === null && k && (u = l.stateNode = X0(
          l.type,
          l.pendingProps,
          ze.current
        ), Yt = l, Cl = !0, a = Tt, Ke(l.type) ? (bo = a, Tt = Dl(u.firstChild)) : Tt = a), xt(
          t,
          l,
          l.pendingProps.children,
          e
        ), Wu(t, l), t === null && (l.flags |= 4194304), l.child;
      case 5:
        return t === null && k && ((a = u = Tt) && (u = l1(
          u,
          l.type,
          l.pendingProps,
          Cl
        ), u !== null ? (l.stateNode = u, Yt = l, Tt = Dl(u.firstChild), Cl = !1, a = !0) : a = !1), a || Ce(l)), Wi(l), a = l.type, n = l.pendingProps, i = t !== null ? t.memoizedProps : null, u = n.children, oo(a, n) ? u = null : i !== null && oo(a, i) && (l.flags |= 32), l.memoizedState !== null && (a = $c(
          t,
          l,
          Fy,
          null,
          null,
          e
        ), da._currentValue = a), Wu(t, l), xt(t, l, u, e), l.child;
      case 6:
        return t === null && k && ((t = e = Tt) && (e = e1(
          e,
          l.pendingProps,
          Cl
        ), e !== null ? (l.stateNode = e, Yt = l, Tt = null, t = !0) : t = !1), t || Ce(l)), null;
      case 13:
        return vd(t, l, e);
      case 4:
        return yn(
          l,
          l.stateNode.containerInfo
        ), u = l.pendingProps, t === null ? l.child = vu(
          l,
          null,
          u,
          e
        ) : xt(t, l, u, e), l.child;
      case 11:
        return id(
          t,
          l,
          l.type,
          l.pendingProps,
          e
        );
      case 7:
        return u = l.pendingProps, Wu(t, l), xt(t, l, u, e), l.child;
      case 8:
        return xt(
          t,
          l,
          l.pendingProps.children,
          e
        ), l.child;
      case 12:
        return xt(
          t,
          l,
          l.pendingProps.children,
          e
        ), l.child;
      case 10:
        return Sd(t, l, e);
      case 9:
        return a = l.type._context, u = l.pendingProps.children, ru(l), a = Lt(a), u = u(a), l.flags |= 1, xt(t, l, u, e), l.child;
      case 14:
        return cd(
          t,
          l,
          l.type,
          l.pendingProps,
          e
        );
      case 15:
        return fd(
          t,
          l,
          l.type,
          l.pendingProps,
          e
        );
      case 19:
        return Ef(t, l, e);
      case 31:
        return nv(t, l, e);
      case 22:
        return od(
          t,
          l,
          e,
          l.pendingProps
        );
      case 24:
        return ru(l), u = Lt(Rt), t === null ? (a = qc(), a === null && (a = St, n = Bc(), a.pooledCache = n, n.refCount++, n !== null && (a.pooledCacheLanes |= e), a = n), l.memoizedState = { parent: u, cache: a }, Xc(l), Re(l, Rt, a)) : ((t.lanes & e) !== 0 && (Qc(t, l), qa(l, null, null, e), Ya()), a = t.memoizedState, n = l.memoizedState, a.parent !== u ? (a = { parent: u, cache: u }, l.memoizedState = a, l.lanes === 0 && (l.memoizedState = l.updateQueue.baseState = a), Re(l, Rt, u)) : (u = n.cache, Re(l, Rt, u), u !== a.cache && jc(
          l,
          [Rt],
          e,
          !0
        ))), xt(
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
        }), u = l.pendingProps, u.name != null && u.name !== "auto" ? l.flags |= t === null ? 18882560 : 18874368 : k && qn(l), t !== null && t.memoizedProps.name !== u.name ? l.flags |= 4194816 : Wu(t, l), xt(t, l, u.children, e), l.child;
      case 29:
        throw l.pendingProps;
    }
    throw Error(o(156, l.tag));
  }
  function he(t) {
    t.flags |= 4;
  }
  function pf(t, l, e, u, a) {
    var n;
    if ((n = (t.mode & 32) !== 0) && (n = e === null ? W0(l, u) : W0(l, u) && (u.src !== e.src || u.srcSet !== e.srcSet)), n) {
      if (t.flags |= 16777216, (a & 335544128) === a)
        if (t.stateNode.complete) t.flags |= 8192;
        else if (t0()) t.flags |= 8192;
        else
          throw yu = Kn, Gc;
    } else t.flags &= -16777217;
  }
  function Td(t, l) {
    if (l.type !== "stylesheet" || (l.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (t.flags |= 16777216, !$0(l))
      if (t0()) t.flags |= 8192;
      else
        throw yu = Kn, Gc;
  }
  function ri(t, l) {
    l !== null && (t.flags |= 4), t.flags & 16384 && (l = t.tag !== 22 ? Wo() : 536870912, t.lanes |= l, Pu |= l);
  }
  function Va(t, l) {
    if (!k)
      switch (t.tailMode) {
        case "visible":
          break;
        case "collapsed":
          for (var e = t.tail, u = null; e !== null; )
            e.alternate !== null && (u = e), e = e.sibling;
          u === null ? l || t.tail === null ? t.tail = null : t.tail.sibling = null : u.sibling = null;
          break;
        default:
          for (l = t.tail, e = null; l !== null; )
            l.alternate !== null && (e = l), l = l.sibling;
          e === null ? t.tail = null : e.sibling = null;
      }
  }
  function Et(t) {
    var l = t.alternate !== null && t.alternate.child === t.child, e = 0, u = 0;
    if (l)
      for (var a = t.child; a !== null; )
        e |= a.lanes | a.childLanes, u |= a.subtreeFlags & 1206910976, u |= a.flags & 1206910976, a.return = t, a = a.sibling;
    else
      for (a = t.child; a !== null; )
        e |= a.lanes | a.childLanes, u |= a.subtreeFlags, u |= a.flags, a.return = t, a = a.sibling;
    return t.subtreeFlags |= u, t.childLanes = e, l;
  }
  function fv(t, l, e) {
    var u = l.pendingProps;
    switch (Dc(l), l.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Et(l), null;
      case 1:
        return Et(l), null;
      case 3:
        return e = l.stateNode, u = null, t !== null && (u = t.memoizedState.cache), l.memoizedState.cache !== u && (l.flags |= 2048), de(Rt), Au(), e.pendingContext && (e.context = e.pendingContext, e.pendingContext = null), (t === null || t.child === null) && (Qu(l) ? he(l) : t === null || t.memoizedState.isDehydrated && (l.flags & 256) === 0 || (l.flags |= 1024, Hc())), Et(l), null;
      case 26:
        var a = l.type, n = l.memoizedState;
        return t === null ? (he(l), n !== null ? (Et(l), Td(l, n)) : (Et(l), pf(
          l,
          a,
          null,
          u,
          e
        ))) : n ? n !== t.memoizedState ? (he(l), Et(l), Td(l, n)) : (Et(l), l.flags &= -16777217) : (t = t.memoizedProps, t !== u && he(l), Et(l), pf(
          l,
          a,
          t,
          u,
          e
        )), null;
      case 27:
        if (vn(l), e = ze.current, a = l.type, t !== null && l.stateNode != null)
          t.memoizedProps !== u && he(l);
        else {
          if (!u) {
            if (l.stateNode === null)
              throw Error(o(166));
            return Et(l), l.subtreeFlags &= -33554433, null;
          }
          t = Ql.current, Qu(l) ? kr(l) : (t = X0(a, u, e), l.stateNode = t, he(l));
        }
        return Et(l), l.subtreeFlags &= -33554433, null;
      case 5:
        if (vn(l), a = l.type, t !== null && l.stateNode != null)
          t.memoizedProps !== u && he(l);
        else {
          if (!u) {
            if (l.stateNode === null)
              throw Error(o(166));
            return Et(l), l.subtreeFlags &= -33554433, null;
          }
          if (n = Ql.current, Qu(l))
            kr(l);
          else {
            var i = ln(
              ze.current
            );
            switch (n) {
              case 1:
                n = i.createElementNS(
                  "http://www.w3.org/2000/svg",
                  a
                );
                break;
              case 2:
                n = i.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  a
                );
                break;
              default:
                switch (a) {
                  case "svg":
                    n = i.createElementNS(
                      "http://www.w3.org/2000/svg",
                      a
                    );
                    break;
                  case "math":
                    n = i.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      a
                    );
                    break;
                  case "script":
                    n = i.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(
                      n.firstChild
                    );
                    break;
                  case "select":
                    n = typeof u.is == "string" ? i.createElement("select", {
                      is: u.is
                    }) : i.createElement("select"), u.multiple ? n.multiple = !0 : u.size && (n.size = u.size);
                    break;
                  default:
                    n = typeof u.is == "string" ? i.createElement(a, { is: u.is }) : i.createElement(a);
                }
            }
            n[Qt] = l, n[ul] = u;
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
            t: switch (Jt(n, a, u), a) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                u = !!u.autoFocus;
                break t;
              case "img":
                u = !0;
                break t;
              default:
                u = !1;
            }
            u && he(l);
          }
        }
        return Et(l), l.subtreeFlags &= -33554433, pf(
          l,
          l.type,
          t === null ? null : t.memoizedProps,
          l.pendingProps,
          e
        ), null;
      case 6:
        if (t && l.stateNode != null)
          t.memoizedProps !== u && he(l);
        else {
          if (typeof u != "string" && l.stateNode === null)
            throw Error(o(166));
          if (t = ze.current, Qu(l)) {
            if (t = l.stateNode, e = l.memoizedProps, u = null, a = Yt, a !== null)
              switch (a.tag) {
                case 27:
                case 5:
                  u = a.memoizedProps;
              }
            t[Qt] = l, t = !!(t.nodeValue === e || u !== null && u.suppressHydrationWarning === !0 || b0(t.nodeValue, e)), t || Ce(l, !0);
          } else
            t = ln(t).createTextNode(
              u
            ), t[Qt] = l, l.stateNode = t;
        }
        return Et(l), null;
      case 31:
        if (e = l.memoizedState, t === null || t.memoizedState !== null) {
          if (u = Qu(l), e !== null) {
            if (t === null) {
              if (!u) throw Error(o(318));
              if (t = l.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(o(557));
              t[Qt] = l;
            } else
              cu(), (l.flags & 128) === 0 && (l.memoizedState = null), l.flags |= 4;
            Et(l), t = !1;
          } else
            e = Hc(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = e), t = !0;
          if (!t)
            return l.flags & 256 ? (vl(l), l) : (vl(l), null);
          if ((l.flags & 128) !== 0)
            throw Error(o(558));
        }
        return Et(l), null;
      case 13:
        if (u = l.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (a = Qu(l), u !== null && u.dehydrated !== null) {
            if (t === null) {
              if (!a) throw Error(o(318));
              if (a = l.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(o(317));
              a[Qt] = l;
            } else
              cu(), (l.flags & 128) === 0 && (l.memoizedState = null), l.flags |= 4;
            Et(l), a = !1;
          } else
            a = Hc(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = a), a = !0;
          if (!a)
            return l.flags & 256 ? (vl(l), l) : (vl(l), null);
        }
        return vl(l), (l.flags & 128) !== 0 ? (l.lanes = e, l) : (e = u !== null, t = t !== null && t.memoizedState !== null, e && (u = l.child, a = null, u.alternate !== null && u.alternate.memoizedState !== null && u.alternate.memoizedState.cachePool !== null && (a = u.alternate.memoizedState.cachePool.pool), n = null, u.memoizedState !== null && u.memoizedState.cachePool !== null && (n = u.memoizedState.cachePool.pool), n !== a && (u.flags |= 2048)), e !== t && e && (l.child.flags |= 8192), ri(l, l.updateQueue), Et(l), null);
      case 4:
        return Au(), t === null && ao(l.stateNode.containerInfo), l.flags |= 67108864, Et(l), null;
      case 10:
        return de(l.type), Et(l), null;
      case 19:
        if (wc(l), u = l.memoizedState, u === null) return Et(l), null;
        if (a = (l.flags & 128) !== 0, n = u.rendering, n === null)
          if (a) Va(u, !1);
          else {
            if (At !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = l.child; t !== null; ) {
                if (n = $n(t), n !== null) {
                  for (l.flags |= 128, Va(u, !1), t = n.updateQueue, l.updateQueue = t, ri(l, t), l.subtreeFlags = 0, t = e, e = l.child; e !== null; )
                    wr(e, t), e = e.sibling;
                  return Ga(
                    l,
                    Vt.current & 1 | 2
                  ), k && re(l, u.treeForkCount), l.child;
                }
                t = t.sibling;
              }
            u.tail !== null && rl() > zi && (l.flags |= 128, a = !0, Va(u, !1), l.lanes = 4194304);
          }
        else {
          if (!a)
            if (t = $n(n), t !== null) {
              if (l.flags |= 128, a = !0, t = t.updateQueue, l.updateQueue = t, ri(l, t), Va(u, !0), u.tail === null && u.tailMode !== "collapsed" && u.tailMode !== "visible" && !n.alternate && !k)
                return Et(l), null;
            } else
              2 * rl() - u.renderingStartTime > zi && e !== 536870912 && (l.flags |= 128, a = !0, Va(u, !1), l.lanes = 4194304);
          u.isBackwards ? (n.sibling = l.child, l.child = n) : (t = u.last, t !== null ? t.sibling = n : l.child = n, u.last = n);
        }
        if (u.tail !== null) {
          t = u.tail;
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
          return u.rendering = t, u.tail = t.sibling, u.renderingStartTime = rl(), t.sibling = null, n = Vt.current, n = a ? n & 1 | 2 : n & 1, u.tailMode === "visible" || u.tailMode === "collapsed" || !e || k ? Ga(l, n) : (e = n, bt(Zt, l), bt(Vt, e), Wt === null && (Wt = l)), k && re(l, u.treeForkCount), t;
        }
        return Et(l), null;
      case 22:
      case 23:
        return vl(l), Kc(), u = l.memoizedState !== null, t !== null ? t.memoizedState !== null !== u && (l.flags |= 8192) : u && (l.flags |= 8192), u ? (e & 536870912) !== 0 && (l.flags & 128) === 0 && (Et(l), l.subtreeFlags & 6 && (l.flags |= 8192)) : Et(l), e = l.updateQueue, e !== null && ri(l, e.retryQueue), e = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), u = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), u !== e && (l.flags |= 2048), t !== null && Xt(du), null;
      case 24:
        return e = null, t !== null && (e = t.memoizedState.cache), l.memoizedState.cache !== e && (l.flags |= 2048), de(Rt), Et(l), null;
      case 25:
        return null;
      case 30:
        return l.flags |= 33554432, Et(l), null;
    }
    throw Error(o(156, l.tag));
  }
  function ov(t, l) {
    switch (Dc(l), l.tag) {
      case 1:
        return t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
      case 3:
        return de(Rt), Au(), t = l.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (l.flags = t & -65537 | 128, l) : null;
      case 26:
      case 27:
      case 5:
        return vn(l), null;
      case 31:
        if (l.memoizedState !== null) {
          if (vl(l), l.alternate === null)
            throw Error(o(340));
          cu();
        }
        return t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
      case 13:
        if (vl(l), t = l.memoizedState, t !== null && t.dehydrated !== null) {
          if (l.alternate === null)
            throw Error(o(340));
          cu();
        }
        return t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
      case 19:
        return wc(l), t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, t = l.memoizedState, t !== null && (t.rendering = null, t.tail = null), l.flags |= 4, l) : null;
      case 4:
        return Au(), null;
      case 10:
        return de(l.type), null;
      case 22:
      case 23:
        return vl(l), Kc(), t !== null && Xt(du), t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
      case 24:
        return de(Rt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Ed(t, l) {
    switch (Dc(l), l.tag) {
      case 3:
        de(Rt), Au();
        break;
      case 26:
      case 27:
      case 5:
        vn(l);
        break;
      case 4:
        Au();
        break;
      case 31:
        l.memoizedState !== null && vl(l);
        break;
      case 13:
        vl(l);
        break;
      case 19:
        wc(l);
        break;
      case 10:
        de(l.type);
        break;
      case 22:
      case 23:
        vl(l), Kc(), t !== null && Xt(du);
        break;
      case 24:
        de(Rt);
    }
  }
  function Ka(t, l) {
    try {
      var e = l.updateQueue, u = e !== null ? e.lastEffect : null;
      if (u !== null) {
        var a = u.next;
        e = a;
        do {
          if ((e.tag & t) === t) {
            u = void 0;
            var n = e.create, i = e.inst;
            u = n(), i.destroy = u;
          }
          e = e.next;
        } while (e !== a);
      }
    } catch (c) {
      yt(l, l.return, c);
    }
  }
  function qe(t, l, e) {
    try {
      var u = l.updateQueue, a = u !== null ? u.lastEffect : null;
      if (a !== null) {
        var n = a.next;
        u = n;
        do {
          if ((u.tag & t) === t) {
            var i = u.inst, c = i.destroy;
            if (c !== void 0) {
              i.destroy = void 0, a = l;
              var r = e, h = c;
              try {
                h();
              } catch (T) {
                yt(
                  a,
                  r,
                  T
                );
              }
            }
          }
          u = u.next;
        } while (u !== n);
      }
    } catch (T) {
      yt(l, l.return, T);
    }
  }
  function zd(t) {
    var l = t.updateQueue;
    if (l !== null) {
      var e = t.stateNode;
      try {
        ss(l, e);
      } catch (u) {
        yt(t, t.return, u);
      }
    }
  }
  function pd(t, l, e) {
    e.props = gu(
      t.type,
      t.memoizedProps
    ), e.state = t.memoizedState;
    try {
      e.componentWillUnmount();
    } catch (u) {
      yt(t, l, u);
    }
  }
  function Kl(t, l) {
    try {
      var e = t.ref;
      if (e !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var u = t.stateNode;
            break;
          case 30:
            var a = t.stateNode, n = ce(t.memoizedProps, a);
            (a.ref === null || a.ref.name !== n) && (a.ref = R0(n)), u = a.ref;
            break;
          case 7:
            if (t.stateNode === null) {
              var i = new Tl(t);
              E(
                t.child,
                !1,
                Pv,
                i,
                void 0,
                void 0
              ), t.stateNode = i;
            }
            u = t.stateNode;
            break;
          default:
            u = t.stateNode;
        }
        typeof e == "function" ? t.refCleanup = e(u) : e.current = u;
      }
    } catch (c) {
      yt(t, l, c);
    }
  }
  function Kt(t, l) {
    var e = t.ref, u = t.refCleanup;
    if (e !== null)
      if (typeof u == "function")
        try {
          u();
        } catch (a) {
          yt(t, l, a);
        } finally {
          t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
        }
      else if (typeof e == "function")
        try {
          e(null);
        } catch (a) {
          yt(t, l, a);
        }
      else e.current = null;
  }
  function si(t, l) {
    if ((t.tag === 5 || t.tag === 27 || t.tag === 6) && t.alternate === null && l !== null)
      for (var e = 0; e < l.length; e++)
        B0(
          t.stateNode,
          l[e]
        );
  }
  function Od(t) {
    for (var l = t.return; l !== null && (Af(l) && B0(t.stateNode, l.stateNode), !Of(l)); )
      l = l.return;
  }
  function Ja(t) {
    for (var l = t.return; l !== null && (Af(l) && t1(t.stateNode, l.stateNode), !Of(l)); )
      l = l.return;
  }
  function Of(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 27;
  }
  function Af(t) {
    return t && t.tag === 7 && t.stateNode !== null;
  }
  function _f(t) {
    var l = t.type, e = t.memoizedProps, u = t.stateNode;
    try {
      t: switch (l) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          e.autoFocus && u.focus();
          break t;
        case "img":
          e.src ? u.src = e.src : e.srcSet && (u.srcset = e.srcSet);
      }
    } catch (a) {
      yt(t, t.return, a);
    }
  }
  function Nf(t, l, e) {
    try {
      var u = t.stateNode;
      jv(u, t.type, e, l), u[ul] = l;
    } catch (a) {
      yt(t, t.return, a);
    }
  }
  function Ad(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && Ke(t.type) || t.tag === 4;
  }
  function Mf(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || Ad(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && Ke(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Cf(t, l, e, u) {
    var a = t.tag;
    if (a === 5 || a === 6)
      a = t.stateNode, l ? (e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e).insertBefore(a, l) : (l = e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, l.appendChild(a), e = e._reactRootContainer, e != null || l.onclick !== null || (l.onclick = Ll)), si(t, u), it = !0;
    else if (a !== 4 && (a === 27 && (si(t, u), u = null, Ke(t.type) && (e = t.stateNode, l = null)), t = t.child, t !== null))
      for (Cf(
        t,
        l,
        e,
        u
      ), t = t.sibling; t !== null; )
        Cf(
          t,
          l,
          e,
          u
        ), t = t.sibling;
  }
  function di(t, l, e, u) {
    var a = t.tag;
    if (a === 5 || a === 6)
      a = t.stateNode, l ? e.insertBefore(a, l) : e.appendChild(a), si(t, u), it = !0;
    else if (a !== 4 && (a === 27 && (si(t, u), u = null, Ke(t.type) && (e = t.stateNode)), t = t.child, t !== null))
      for (di(
        t,
        l,
        e,
        u
      ), t = t.sibling; t !== null; )
        di(
          t,
          l,
          e,
          u
        ), t = t.sibling;
  }
  function _d(t) {
    var l = t.stateNode, e = t.memoizedProps;
    try {
      for (var u = t.type, a = l.attributes; a.length; )
        l.removeAttributeNode(a[0]);
      Jt(l, u, e), l[Qt] = t, l[ul] = e;
    } catch (n) {
      yt(t, t.return, n);
    }
  }
  var mi = !1, hl = null;
  function Nd(t) {
    (t.tag === 30 || (t.subtreeFlags & 33554432) !== 0) && (mi = !0);
  }
  var Jl = null;
  function Md() {
    var t = Jl;
    return Jl = null, t;
  }
  var nl = 0;
  function $u(t, l, e, u, a) {
    return nl = 0, Cd(
      t.child,
      l,
      e,
      u,
      a
    );
  }
  function Cd(t, l, e, u, a) {
    for (var n = !1; t !== null; ) {
      if (t.tag === 5) {
        var i = t.stateNode;
        if (u !== null) {
          var c = mo(i);
          u.push(c), c.view && (n = !0);
        } else
          n || mo(i).view && (n = !0);
        mi = !0, M0(
          i,
          nl === 0 ? l : l + "_" + nl,
          e
        ), nl++;
      } else (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && a || Cd(
        t.child,
        l,
        e,
        u,
        a
      ) && (n = !0));
      t = t.sibling;
    }
    return n;
  }
  function wl(t, l) {
    for (; t !== null; )
      t.tag === 5 ? C0(t.stateNode, t.memoizedProps) : (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && l || wl(
        t.child,
        l
      )), t = t.sibling;
  }
  function yi(t) {
    if ((t.subtreeFlags & 18874368) !== 0)
      for (t = t.child; t !== null; ) {
        if ((t.tag !== 22 || t.memoizedState === null) && (yi(t), t.tag === 30 && (t.flags & 18874368) !== 0 && t.stateNode.paired)) {
          var l = t.memoizedProps;
          if (l.name == null || l.name === "auto")
            throw Error(o(544));
          var e = l.name;
          l = fe(l.default, l.share), l !== "none" && ($u(
            t,
            e,
            l,
            null,
            !1
          ) || wl(t.child, !1));
        }
        t = t.sibling;
      }
  }
  function Rf(t, l) {
    if (t.tag === 30) {
      var e = t.stateNode, u = t.memoizedProps, a = ce(u, e), n = fe(
        u.default,
        e.paired ? u.share : u.enter
      );
      n !== "none" ? $u(t, a, n, null, !1) ? (yi(t), e.paired || l || ua(t, u.onEnter)) : wl(t.child, !1) : yi(t);
    } else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null; )
        Rf(t, l), t = t.sibling;
    else yi(t);
  }
  function Df(t) {
    if (hl !== null && hl.size !== 0) {
      var l = hl;
      if ((t.subtreeFlags & 18874368) !== 0)
        for (t = t.child; t !== null; ) {
          if (t.tag !== 22 || t.memoizedState === null) {
            if (t.tag === 30 && (t.flags & 18874368) !== 0) {
              var e = t.memoizedProps, u = e.name;
              if (u != null && u !== "auto") {
                var a = l.get(u);
                if (a !== void 0) {
                  var n = fe(
                    e.default,
                    e.share
                  );
                  if (n !== "none" && ($u(
                    t,
                    u,
                    n,
                    null,
                    !1
                  ) ? (n = t.stateNode, a.paired = n, n.paired = a, ua(t, e.onShare)) : wl(t.child, !1)), l.delete(u), l.size === 0) break;
                }
              }
            }
            Df(t);
          }
          t = t.sibling;
        }
    }
  }
  function Uf(t) {
    if (t.tag === 30) {
      var l = t.memoizedProps, e = ce(l, t.stateNode), u = hl !== null ? hl.get(e) : void 0, a = fe(
        l.default,
        u !== void 0 ? l.share : l.exit
      );
      a !== "none" && ($u(t, e, a, null, !1) ? u !== void 0 ? (a = t.stateNode, u.paired = a, a.paired = u, hl.delete(e), ua(t, l.onShare)) : ua(t, l.onExit) : wl(t.child, !1)), hl !== null && Df(t);
    } else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null; )
        Uf(t), t = t.sibling;
    else
      hl !== null && Df(t);
  }
  function Rd(t) {
    for (t = t.child; t !== null; ) {
      if (t.tag === 30) {
        var l = t.memoizedProps, e = ce(l, t.stateNode);
        l = fe(l.default, l.update), t.flags &= -5, l !== "none" && $u(
          t,
          e,
          l,
          t.memoizedState = [],
          !1
        );
      } else
        (t.subtreeFlags & 33554432) !== 0 && Rd(t);
      t = t.sibling;
    }
  }
  function Hf(t) {
    if ((t.subtreeFlags & 18874368) !== 0)
      for (t = t.child; t !== null; ) {
        if (t.tag !== 22 || t.memoizedState === null) {
          if (t.tag === 30 && (t.flags & 18874368) !== 0) {
            var l = t.stateNode;
            l.paired !== null && (l.paired = null, wl(t.child, !1));
          }
          Hf(t);
        }
        t = t.sibling;
      }
  }
  function vi(t) {
    if (t.tag === 30)
      t.stateNode.paired = null, wl(t.child, !1), Hf(t);
    else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null; )
        vi(t), t = t.sibling;
    else Hf(t);
  }
  function Dd(t) {
    for (t = t.child; t !== null; )
      t.tag === 30 ? wl(t.child, !1) : (t.subtreeFlags & 33554432) !== 0 && Dd(t), t = t.sibling;
  }
  function xf(t, l, e, u, a, n, i) {
    for (var c = !1; l !== null; ) {
      if (l.tag === 5) {
        var r = l.stateNode;
        if (n !== null && nl < n.length) {
          var h = n[nl], T = mo(r);
          (h.view || T.view) && (c = !0);
          var p;
          if (p = (t.flags & 4) === 0)
            if (T.clip) p = !0;
            else {
              p = h.rect;
              var y = T.rect;
              p = p.y !== y.y || p.x !== y.x || p.height !== y.height || p.width !== y.width;
            }
          p && (t.flags |= 4), T.abs ? T = !h.abs : (h = h.rect, T = T.rect, T = h.height !== T.height || h.width !== T.width), T && (t.flags |= 32);
        } else t.flags |= 32;
        (t.flags & 4) !== 0 && M0(
          r,
          nl === 0 ? e : e + "_" + nl,
          a
        ), c && (t.flags & 4) !== 0 || (Jl === null && (Jl = []), Jl.push(
          r,
          nl === 0 ? u : u + "_" + nl,
          l.memoizedProps
        )), nl++;
      } else (l.tag !== 22 || l.memoizedState === null) && (l.tag === 30 && i ? t.flags |= l.flags & 32 : xf(
        t,
        l.child,
        e,
        u,
        a,
        n,
        i
      ) && (c = !0));
      l = l.sibling;
    }
    return c;
  }
  function Ud(t, l) {
    for (t = t.child; t !== null; ) {
      if (t.tag === 30) {
        var e = t.memoizedProps, u = t.stateNode, a = ce(e, u), n = fe(e.default, e.update), i;
        i = t.memoizedState, t.memoizedState = null, u = t;
        var c = t.child;
        nl = 0, a = xf(
          u,
          c,
          a,
          a,
          n,
          i,
          !1
        ), (t.flags & 4) !== 0 && a && ua(t, e.onUpdate);
      } else
        (t.subtreeFlags & 33554432) !== 0 && Ud(t);
      t = t.sibling;
    }
  }
  var qt = !1, st = !1, Wl = !1, jf = !1, Hd = typeof WeakSet == "function" ? WeakSet : Set, Gt = null, $l = !1, wa = !1, hi = !1, Bf = !1;
  function rv(t, l, e) {
    if (t = t.containerInfo, co = ma, t = Yr(t), Ec(t)) {
      if ("selectionStart" in t)
        var u = {
          start: t.selectionStart,
          end: t.selectionEnd
        };
      else
        t: {
          u = (u = t.ownerDocument) && u.defaultView || window;
          var a = u.getSelection && u.getSelection();
          if (a && a.rangeCount !== 0) {
            u = a.anchorNode;
            var n = a.anchorOffset, i = a.focusNode;
            a = a.focusOffset;
            try {
              u.nodeType, i.nodeType;
            } catch {
              u = null;
              break t;
            }
            var c = 0, r = -1, h = -1, T = 0, p = 0, y = t, b = null;
            l: for (; ; ) {
              for (var M; y !== u || n !== 0 && y.nodeType !== 3 || (r = c + n), y !== i || a !== 0 && y.nodeType !== 3 || (h = c + a), y.nodeType === 3 && (c += y.nodeValue.length), (M = y.firstChild) !== null; )
                b = y, y = M;
              for (; ; ) {
                if (y === t) break l;
                if (b === u && ++T === n && (r = c), b === i && ++p === a && (h = c), (M = y.nextSibling) !== null) break;
                y = b, b = y.parentNode;
              }
              y = M;
            }
            u = r === -1 || h === -1 ? null : { start: r, end: h };
          } else u = null;
        }
      u = u || { start: 0, end: 0 };
    } else u = null;
    for (fo = { focusedElem: t, selectionRange: u }, ma = !1, e = (e & 335544064) === e, Gt = l, l = e ? 9270 : 1024; Gt !== null; ) {
      if (t = Gt, e && (u = t.deletions, u !== null))
        for (n = 0; n < u.length; n++)
          e && Uf(u[n]);
      if (t.alternate === null && (t.flags & 2) !== 0)
        e && Nd(t), gi(e);
      else {
        if (t.tag === 22) {
          if (u = t.alternate, t.memoizedState !== null) {
            u !== null && u.memoizedState === null && e && Uf(u), gi(e);
            continue;
          } else if (u !== null && u.memoizedState !== null) {
            e && Nd(t), gi(e);
            continue;
          }
        }
        u = t.child, (t.subtreeFlags & l) !== 0 && u !== null ? (u.return = t, Gt = u) : (e && Rd(t), gi(e));
      }
    }
    hl = null;
  }
  function gi(t) {
    for (; Gt !== null; ) {
      var l = Gt, e = t, u = l.alternate, a = l.flags;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if ((a & 1024) !== 0 && u !== null) {
            e = void 0, a = u.memoizedProps, u = u.memoizedState;
            var n = l.stateNode;
            try {
              var i = gu(
                l.type,
                a
              );
              e = n.getSnapshotBeforeUpdate(
                i,
                u
              ), n.__reactInternalSnapshotBeforeUpdate = e;
            } catch (c) {
              yt(l, l.return, c);
            }
          }
          break;
        case 3:
          if ((a & 1024) !== 0) {
            if (u = l.stateNode.containerInfo, e = u.nodeType, e === 9)
              ho(u);
            else if (e === 1)
              switch (u.nodeName) {
                case "HEAD":
                case "HTML":
                case "BODY":
                  ho(u);
                  break;
                default:
                  u.textContent = "";
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
          e && u !== null && (e = ce(
            u.memoizedProps,
            u.stateNode
          ), a = l.memoizedProps, a = fe(a.default, a.update), a !== "none" && $u(
            u,
            e,
            a,
            u.memoizedState = [],
            !0
          ));
          break;
        default:
          if ((a & 1024) !== 0) throw Error(o(163));
      }
      if (u = l.sibling, u !== null) {
        u.return = l.return, Gt = u;
        break;
      }
      Gt = l.return;
    }
  }
  function xd(t, l, e) {
    var u = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Fl(t, e), u & 4 && Ka(5, e);
        break;
      case 1:
        if (Fl(t, e), u & 4)
          if (t = e.stateNode, l === null)
            try {
              t.componentDidMount();
            } catch (i) {
              yt(e, e.return, i);
            }
          else {
            var a = gu(
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
            } catch (i) {
              yt(
                e,
                e.return,
                i
              );
            }
          }
        u & 64 && zd(e), u & 512 && Kl(e, e.return);
        break;
      case 3:
        if (Fl(t, e), u & 64 && (t = e.updateQueue, t !== null)) {
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
            ss(t, l);
          } catch (i) {
            yt(e, e.return, i);
          }
        }
        break;
      case 27:
        l === null && u & 4 && _d(e);
      case 26:
      case 5:
        Fl(t, e), l === null && u & 4 && _f(e), u & 512 && Kl(e, e.return);
        break;
      case 12:
        Fl(t, e);
        break;
      case 31:
        Fl(t, e), u & 4 && qd(t, e);
        break;
      case 13:
        Fl(t, e), u & 4 && Gd(t, e), u & 64 && (t = e.memoizedState, t !== null && (t = t.dehydrated, t !== null && (e = zv.bind(
          null,
          e
        ), u1(t, e))));
        break;
      case 22:
        if (u = e.memoizedState !== null || qt, !u) {
          var n = l !== null && l.memoizedState !== null || st;
          l = qt, a = st, qt = u, (st = n) && !a ? (u = 2, (e.subtreeFlags & 8772) !== 0 && (u |= 1), Yl(
            t,
            e,
            u
          )) : Fl(t, e), qt = l, st = a;
        }
        break;
      case 30:
        Fl(t, e), u & 512 && Kl(e, e.return);
        break;
      case 7:
        u & 512 && Kl(e, e.return);
      default:
        Fl(t, e);
    }
  }
  function Yf(t, l) {
    for (t = t.child; t !== null; )
      jd(t, l), t = t.sibling;
  }
  function jd(t, l) {
    switch (t.tag) {
      case 5:
      case 26:
        try {
          var e = t.stateNode;
          if (l) {
            var u = e.style;
            typeof u.setProperty == "function" ? u.setProperty("display", "none", "important") : u.display = "none";
          } else {
            var a = t.stateNode, n = t.memoizedProps.style, i = n != null && n.hasOwnProperty("display") ? n.display : null;
            a.style.display = i == null || typeof i == "boolean" ? "" : ("" + i).trim();
          }
        } catch (r) {
          yt(t, t.return, r);
        }
        qf(t, l);
        break;
      case 6:
        try {
          t.stateNode.nodeValue = l ? "" : t.memoizedProps, it = !0;
        } catch (r) {
          yt(t, t.return, r);
        }
        break;
      case 18:
        try {
          var c = t.stateNode;
          l ? N0(c, !0) : N0(t.stateNode, !1);
        } catch (r) {
          yt(t, t.return, r);
        }
        break;
      case 22:
      case 23:
        t.memoizedState === null && Yf(t, l);
        break;
      default:
        Yf(t, l);
    }
  }
  function qf(t, l) {
    if (t.subtreeFlags & 67108864)
      for (t = t.child; t !== null; ) {
        t: {
          var e = t, u = l;
          switch (e.tag) {
            case 4:
              jd(e, u);
              break t;
            case 22:
              e.memoizedState === null && qf(e, u);
              break t;
            default:
              qf(e, u);
          }
        }
        t = t.sibling;
      }
  }
  function Bd(t) {
    var l = t.alternate;
    l !== null && (t.alternate = null, Bd(l)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (l = t.stateNode, l !== null && zn(l)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var zt = null, il = !1;
  function jl(t, l, e) {
    for (e = e.child; e !== null; )
      Yd(t, l, e), e = e.sibling;
  }
  function Yd(t, l, e) {
    if (sl && typeof sl.onCommitFiberUnmount == "function")
      try {
        sl.onCommitFiberUnmount(ha, e);
      } catch {
      }
    switch (e.tag) {
      case 26:
        st || Kt(e, l), jl(
          t,
          l,
          e
        ), e.memoizedState ? e.memoizedState.count-- : e.stateNode && !st && (e = e.stateNode, e.parentNode.removeChild(e));
        break;
      case 27:
        st || Kt(e, l), Ja(e);
        var u = zt, a = il;
        Ke(e.type) && (zt = e.stateNode, il = !1), jl(
          t,
          l,
          e
        ), Q0(
          e.stateNode,
          e.type,
          e.memoizedProps
        ), zt = u, il = a;
        break;
      case 5:
        st || Kt(e, l), Ja(e);
      case 6:
        if (e.tag === 6 && Ja(e), u = zt, a = il, zt = null, jl(
          t,
          l,
          e
        ), zt = u, il = a, zt !== null)
          if (il)
            try {
              (zt.nodeType === 9 ? zt.body : zt.nodeName === "HTML" ? zt.ownerDocument.body : zt).removeChild(e.stateNode), it = !0;
            } catch (n) {
              yt(
                e,
                l,
                n
              );
            }
          else
            try {
              zt.removeChild(e.stateNode), it = !0;
            } catch (n) {
              yt(
                e,
                l,
                n
              );
            }
        break;
      case 18:
        zt !== null && (il ? (t = zt, _0(
          t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
          e.stateNode
        ), ya(t)) : _0(zt, e.stateNode));
        break;
      case 4:
        u = zt, a = il, zt = e.stateNode.containerInfo, il = !0, jl(
          t,
          l,
          e
        ), zt = u, il = a;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        qe(2, e, l), st || qe(4, e, l), jl(
          t,
          l,
          e
        );
        break;
      case 1:
        st || (Kt(e, l), u = e.stateNode, typeof u.componentWillUnmount == "function" && pd(
          e,
          l,
          u
        )), jl(
          t,
          l,
          e
        );
        break;
      case 21:
        jl(
          t,
          l,
          e
        );
        break;
      case 22:
        st = (u = st) || e.memoizedState !== null, jl(
          t,
          l,
          e
        ), st = u;
        break;
      case 30:
        Kt(e, l), jl(
          t,
          l,
          e
        );
        break;
      case 7:
        st || Kt(e, l), jl(
          t,
          l,
          e
        );
        break;
      default:
        jl(
          t,
          l,
          e
        );
    }
  }
  function qd(t, l) {
    if (l.memoizedState === null && (t = l.alternate, t !== null && (t = t.memoizedState, t !== null))) {
      t = t.dehydrated;
      try {
        ya(t);
      } catch (e) {
        yt(l, l.return, e);
      }
    }
  }
  function Gd(t, l) {
    if (l.memoizedState === null && (t = l.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
      try {
        ya(t);
      } catch (e) {
        yt(l, l.return, e);
      }
  }
  function sv(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var l = t.stateNode;
        return l === null && (l = t.stateNode = new Hd()), l;
      case 22:
        return t = t.stateNode, l = t._retryCache, l === null && (l = t._retryCache = new Hd()), l;
      default:
        throw Error(o(435, t.tag));
    }
  }
  function Si(t, l) {
    var e = sv(t);
    l.forEach(function(u) {
      if (!e.has(u)) {
        e.add(u);
        var a = pv.bind(null, t, u);
        u.then(a, a);
      }
    });
  }
  function Pt(t, l, e) {
    var u = l.deletions;
    if (u !== null)
      for (var a = 0; a < u.length; a++) {
        var n = u[a], i = t, c = l, r = c;
        t: for (; r !== null; ) {
          switch (r.tag) {
            case 27:
              if (Ke(r.type)) {
                zt = r.stateNode, il = !1;
                break t;
              }
              break;
            case 5:
              zt = r.stateNode, il = !1;
              break t;
            case 3:
            case 4:
              zt = r.stateNode.containerInfo, il = !0;
              break t;
          }
          r = r.return;
        }
        if (zt === null) throw Error(o(160));
        Yd(i, c, n), zt = null, il = !1, i = n.alternate, i !== null && (i.return = null), n.return = null;
      }
    if (l.subtreeFlags & 13886)
      for (l = l.child; l !== null; )
        Xd(l, t, e), l = l.sibling;
  }
  var Bl = null;
  function Xd(t, l, e) {
    var u = t.alternate, a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (a & 4 && (u = t.updateQueue, u = u !== null ? u.events : null, u !== null))
          for (var n = 0; n < u.length; n++) {
            var i = u[n];
            i.ref.impl = i.nextImpl;
          }
        Pt(l, t, e), tl(t), a & 4 && (qe(3, t, t.return), Ka(3, t), qe(5, t, t.return));
        break;
      case 1:
        Pt(l, t, e), tl(t), a & 512 && (st || u === null || Kt(u, u.return)), a & 64 && qt && (t = t.updateQueue, t !== null && (l = t.callbacks, l !== null && (e = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = e === null ? l : e.concat(l))));
        break;
      case 26:
        if (n = Bl, Pt(l, t, e), tl(t), a & 512 && (st || u === null || Kt(u, u.return)), a & 4)
          if (a = u !== null ? u.memoizedState : null, e = t.memoizedState, u === null)
            if (e === null)
              if (t.stateNode === null)
                if (qt)
                  t.stateNode = p0(
                    t.type,
                    t.memoizedProps,
                    l.containerInfo,
                    t
                  );
                else {
                  t: {
                    l = t.type, e = t.memoizedProps, a = n.ownerDocument || n;
                    l: switch (l) {
                      case "title":
                        u = a.getElementsByTagName("title")[0], (!u || u[ba] || u[Qt] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = a.createElement(l), a.head.insertBefore(
                          u,
                          a.querySelector("head > title")
                        )), Jt(u, l, e), u[Qt] = t, Bt(u), l = u;
                        break t;
                      case "link":
                        if (n = w0(
                          "link",
                          "href",
                          a
                        ).get(l + (e.href || ""))) {
                          for (i = 0; i < n.length; i++)
                            if (u = n[i], u.getAttribute("href") === (e.href == null || e.href === "" ? null : e.href) && u.getAttribute("rel") === (e.rel == null ? null : e.rel) && u.getAttribute("title") === (e.title == null ? null : e.title) && u.getAttribute("crossorigin") === (e.crossOrigin == null ? null : e.crossOrigin)) {
                              n.splice(i, 1);
                              break l;
                            }
                        }
                        u = a.createElement(l), Jt(u, l, e), a.head.appendChild(u);
                        break;
                      case "meta":
                        if (n = w0(
                          "meta",
                          "content",
                          a
                        ).get(l + (e.content || ""))) {
                          for (i = 0; i < n.length; i++)
                            if (u = n[i], u.getAttribute("content") === (e.content == null ? null : "" + e.content) && u.getAttribute("name") === (e.name == null ? null : e.name) && u.getAttribute("property") === (e.property == null ? null : e.property) && u.getAttribute("http-equiv") === (e.httpEquiv == null ? null : e.httpEquiv) && u.getAttribute("charset") === (e.charSet == null ? null : e.charSet)) {
                              n.splice(i, 1);
                              break l;
                            }
                        }
                        u = a.createElement(l), Jt(u, l, e), a.head.appendChild(u);
                        break;
                      default:
                        throw Error(o(468, l));
                    }
                    u[Qt] = t, Bt(u), l = u;
                  }
                  t.stateNode = l;
                }
              else
                qt || po(n, t.type, t.stateNode);
            else
              t.stateNode = J0(
                n,
                e,
                t.memoizedProps
              );
          else
            a !== e ? (a === null ? (l = u.stateNode, l === null || st || l.parentNode.removeChild(l)) : a.count--, e === null ? qt || po(n, t.type, t.stateNode) : J0(n, e, t.memoizedProps)) : e === null && t.stateNode !== null && Nf(
              t,
              t.memoizedProps,
              u.memoizedProps
            );
        break;
      case 27:
        Pt(l, t, e), tl(t), a & 512 && (st || u === null || Kt(u, u.return)), u !== null && a & 4 && Nf(
          t,
          t.memoizedProps,
          u.memoizedProps
        );
        break;
      case 5:
        if (n = Wl, Wl = !1, Pt(l, t, e), Wl = n, tl(t), a & 512 && (st || u === null || Kt(u, u.return)), t.flags & 32) {
          l = t.stateNode;
          try {
            Du(l, ""), it = !0;
          } catch (T) {
            yt(t, t.return, T);
          }
        }
        a & 4 && t.stateNode != null && (l = t.memoizedProps, Nf(
          t,
          l,
          u !== null ? u.memoizedProps : l
        )), a & 1024 && (jf = !0);
        break;
      case 6:
        if (Pt(l, t, e), tl(t), a & 4) {
          if (t.stateNode === null)
            throw Error(o(162));
          l = t.memoizedProps, e = t.stateNode;
          try {
            e.nodeValue = l, it = !0;
          } catch (T) {
            yt(t, t.return, T);
          }
        }
        break;
      case 3:
        if (it = !1, Hi = null, n = Bl, Bl = en(l.containerInfo), Pt(l, t, e), Bl = n, tl(t), a & 4 && u !== null && u.memoizedState.isDehydrated)
          try {
            ya(l.containerInfo);
          } catch (T) {
            yt(t, t.return, T);
          }
        jf && (jf = !1, Qd(t)), it = !1;
        break;
      case 4:
        a = Wl, Wl = qt, u = cr(), n = Bl, Bl = en(
          t.stateNode.containerInfo
        ), Pt(l, t, e), tl(t), Bl = n, it && wa && (hi = !0), it = u, Wl = a;
        break;
      case 12:
        Pt(l, t, e), tl(t);
        break;
      case 31:
        Pt(l, t, e), tl(t), a & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, Si(t, l)));
        break;
      case 13:
        Pt(l, t, e), tl(t), t.child.flags & 8192 && t.memoizedState !== null != (u !== null && u.memoizedState !== null) && (Ei = rl()), a & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, Si(t, l)));
        break;
      case 22:
        n = t.memoizedState !== null, i = u !== null && u.memoizedState !== null;
        var c = qt, r = st, h = Wl;
        qt = c || n, Wl = h || n, st = r || i, Pt(l, t, e), st = r, Wl = h, qt = c, tl(t), a & 8192 && (l = t.stateNode, l._visibility = n ? l._visibility & -2 : l._visibility | 1, !n || u === null || i || qt || st || (l = i || st, e = qt, u = st, qt = n || qt, st = l, Ge(t, 2), qt = e, st = u), !n && Wl || Yf(t, n)), a & 4 && (l = t.updateQueue, l !== null && (e = l.retryQueue, e !== null && (l.retryQueue = null, Si(t, e))));
        break;
      case 19:
        Pt(l, t, e), tl(t), a & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, Si(t, l)));
        break;
      case 30:
        a & 512 && (st || u === null || Kt(u, u.return)), a = cr(), n = wa, i = (e & 335544064) === e, c = t.memoizedProps, wa = i && fe(
          c.default,
          c.update
        ) !== "none", Pt(l, t, e), tl(t), i && u !== null && it && (t.flags |= 4), wa = n, it = a;
        break;
      case 21:
        break;
      case 7:
        a & 512 && (st || u === null || Kt(u, u.return)), u && u.stateNode !== null && (u.stateNode._fragmentFiber = t);
      default:
        Pt(l, t, e), tl(t);
    }
  }
  function tl(t) {
    var l = t.flags;
    if (l & 2) {
      try {
        for (var e, u = t.return; u !== null; ) {
          if (Ad(u)) {
            e = u;
            break;
          }
          u = u.return;
        }
        u = null;
        for (var a = t.return; a !== null; ) {
          if (Af(a)) {
            var n = a.stateNode;
            u === null ? u = [n] : u.push(n);
          }
          if (Of(a)) break;
          a = a.return;
        }
        var i = u;
        if (e == null) throw Error(o(160));
        switch (e.tag) {
          case 27:
            var c = e.stateNode, r = Mf(t);
            di(
              t,
              r,
              c,
              i
            );
            break;
          case 5:
            var h = e.stateNode;
            e.flags & 32 && (Du(h, ""), e.flags &= -33);
            var T = Mf(t);
            di(
              t,
              T,
              h,
              i
            );
            break;
          case 3:
          case 4:
            var p = e.stateNode.containerInfo, y = Mf(t);
            Cf(
              t,
              y,
              p,
              i
            );
            break;
          default:
            throw Error(o(161));
        }
      } catch (b) {
        yt(t, t.return, b);
      }
      t.flags &= -3;
    }
    l & 4096 && (t.flags &= -4097);
  }
  function Qd(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var l = t;
        Qd(l), l.tag === 5 && l.flags & 1024 && (l = l.stateNode, ma = !0, l.reset(), ma = !1), t = t.sibling;
      }
  }
  function Fu(t, l) {
    if (l.subtreeFlags & 9270)
      for (l = l.child; l !== null; )
        Ld(l, t), l = l.sibling;
    else Ud(l);
  }
  function Ld(t, l) {
    var e = t.alternate;
    if (e === null) Rf(t, !1);
    else
      switch (t.tag) {
        case 3:
          if (Bf = $l = !1, Md(), Fu(l, t), !$l && !hi) {
            if (t = Jl, t !== null)
              for (var u = 0; u < t.length; u += 3) {
                e = t[u];
                var a = t[u + 1];
                C0(e, t[u + 2]), e = e.ownerDocument.documentElement, e !== null && e.animate(
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
            )), Bf = !0;
          }
          Jl = null;
          break;
        case 5:
          Fu(l, t);
          break;
        case 4:
          u = $l, $l = !1, Fu(l, t), $l && (hi = !0), $l = u;
          break;
        case 22:
          t.memoizedState === null && (e.memoizedState !== null ? Rf(t, !1) : Fu(l, t));
          break;
        case 30:
          u = $l, a = Md(), $l = !1, Fu(l, t), $l && (t.flags |= 4);
          var n = t.memoizedProps, i = t.stateNode;
          l = ce(n, i), i = ce(e.memoizedProps, i);
          var c = fe(n.default, n.update);
          c === "none" ? l = !1 : (n = e.memoizedState, e.memoizedState = null, e = t.child, nl = 0, l = xf(
            t,
            e,
            l,
            i,
            c,
            n,
            !0
          ), nl !== (n === null ? 0 : n.length) && (t.flags |= 32)), (t.flags & 4) !== 0 && l ? (ua(
            t,
            t.memoizedProps.onUpdate
          ), Jl = a) : a !== null && (a.push.apply(a, Jl), Jl = a), $l = (t.flags & 32) !== 0 ? !0 : u;
          break;
        default:
          Fu(l, t);
      }
  }
  function Fl(t, l) {
    if (l.subtreeFlags & 8772)
      for (l = l.child; l !== null; )
        xd(t, l.alternate, l), l = l.sibling;
  }
  function Ge(t, l) {
    for (t = t.child; t !== null; ) {
      var e = t, u = l;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          qe(4, e, e.return), Ge(
            e,
            u
          );
          break;
        case 1:
          Kt(e, e.return);
          var a = e.stateNode;
          typeof a.componentWillUnmount == "function" && pd(
            e,
            e.return,
            a
          ), Ge(
            e,
            u
          );
          break;
        case 27:
          (u & 2) !== 0 && Q0(
            e.stateNode,
            e.type,
            e.memoizedProps
          );
        case 5:
          Kt(e, e.return), e.tag !== 5 && e.tag !== 27 || Ja(e), Ge(
            e,
            u
          );
          break;
        case 6:
          Ja(e);
          break;
        case 26:
          Kt(e, e.return), a = e.stateNode, e.memoizedState !== null || a === null || st || a.parentNode.removeChild(a), Ge(
            e,
            u
          );
          break;
        case 22:
          e.memoizedState === null && Ge(
            e,
            u
          );
          break;
        case 30:
          Kt(e, e.return), Ge(
            e,
            u
          );
          break;
        case 7:
          Kt(e, e.return);
        default:
          Ge(
            e,
            u
          );
      }
      t = t.sibling;
    }
  }
  function Yl(t, l, e) {
    for (e = (l.subtreeFlags & 8772) !== 0 ? e : e & -2, l = l.child; l !== null; ) {
      var u = l.alternate, a = t, n = l, i = n.flags, c = (e & 1) !== 0;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Yl(
            a,
            n,
            e
          ), Ka(4, n);
          break;
        case 1:
          if (Yl(
            a,
            n,
            e
          ), u = n, a = u.stateNode, typeof a.componentDidMount == "function")
            try {
              a.componentDidMount();
            } catch (T) {
              yt(u, u.return, T);
            }
          if (u = n, a = u.updateQueue, a !== null) {
            var r = u.stateNode;
            try {
              var h = a.shared.hiddenCallbacks;
              if (h !== null)
                for (a.shared.hiddenCallbacks = null, a = 0; a < h.length; a++)
                  rs(h[a], r);
            } catch (T) {
              yt(u, u.return, T);
            }
          }
          c && i & 64 && zd(n), Kl(n, n.return);
          break;
        case 27:
          (e & 2) !== 0 && _d(n);
        case 5:
          n.tag !== 5 && n.tag !== 27 || Od(n), Yl(
            a,
            n,
            e
          ), c && u === null && i & 4 && _f(n), Kl(n, n.return);
          break;
        case 6:
          Od(n);
          break;
        case 26:
          r = n.stateNode, n.memoizedState !== null || r === null || qt || po(
            en(r.ownerDocument),
            n.type,
            r
          ), Yl(
            a,
            n,
            e
          ), c && u === null && i & 4 && _f(n), Kl(n, n.return);
          break;
        case 12:
          Yl(
            a,
            n,
            e
          );
          break;
        case 31:
          Yl(
            a,
            n,
            e
          ), c && i & 4 && qd(a, n);
          break;
        case 13:
          Yl(
            a,
            n,
            e
          ), c && i & 4 && Gd(a, n);
          break;
        case 22:
          n.memoizedState === null && Yl(
            a,
            n,
            e
          ), Kl(n, n.return);
          break;
        case 30:
          Yl(
            a,
            n,
            e
          ), Kl(n, n.return);
          break;
        case 7:
          Kl(n, n.return);
        default:
          Yl(
            a,
            n,
            e
          );
      }
      l = l.sibling;
    }
  }
  function Gf(t, l) {
    var e = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), t = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (t = l.memoizedState.cachePool.pool), t !== e && (t != null && t.refCount++, e != null && Ua(e));
  }
  function Xf(t, l) {
    t = null, l.alternate !== null && (t = l.alternate.memoizedState.cache), l = l.memoizedState.cache, l !== t && (l.refCount++, t != null && Ua(t));
  }
  function Rl(t, l, e, u) {
    var a = (e & 335544064) === e;
    if (l.subtreeFlags & (a ? 10262 : 10256))
      for (l = l.child; l !== null; )
        Zd(
          t,
          l,
          e,
          u
        ), l = l.sibling;
    else a && Dd(l);
  }
  function Zd(t, l, e, u) {
    var a = (e & 335544064) === e;
    a && l.alternate === null && l.return !== null && l.return.alternate !== null && vi(l);
    var n = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        Rl(
          t,
          l,
          e,
          u
        ), n & 2048 && Ka(9, l);
        break;
      case 1:
        Rl(
          t,
          l,
          e,
          u
        );
        break;
      case 3:
        Rl(
          t,
          l,
          e,
          u
        ), a && Bf && (t = t.containerInfo, t = t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, t.style.viewTransitionName === "root" && (t.style.viewTransitionName = ""), t = t.ownerDocument.documentElement, t !== null && t.style.viewTransitionName === "none" && (t.style.viewTransitionName = "")), n & 2048 && (n = null, l.alternate !== null && (n = l.alternate.memoizedState.cache), l = l.memoizedState.cache, l !== n && (l.refCount++, n != null && Ua(n)));
        break;
      case 12:
        if (n & 2048) {
          Rl(
            t,
            l,
            e,
            u
          ), n = l.stateNode;
          try {
            var i = l.memoizedProps, c = i.id, r = i.onPostCommit;
            typeof r == "function" && r(
              c,
              l.alternate === null ? "mount" : "update",
              n.passiveEffectDuration,
              -0
            );
          } catch (h) {
            yt(l, l.return, h);
          }
        } else
          Rl(
            t,
            l,
            e,
            u
          );
        break;
      case 31:
        Rl(
          t,
          l,
          e,
          u
        );
        break;
      case 13:
        Rl(
          t,
          l,
          e,
          u
        );
        break;
      case 23:
        break;
      case 22:
        i = l.stateNode, c = l.alternate, l.memoizedState !== null ? (a && c !== null && c.memoizedState === null && vi(c), i._visibility & 2 ? Rl(
          t,
          l,
          e,
          u
        ) : Wa(
          t,
          l
        )) : (a && c !== null && c.memoizedState !== null && vi(l), i._visibility & 2 ? Rl(
          t,
          l,
          e,
          u
        ) : (i._visibility |= 2, Iu(
          t,
          l,
          e,
          u,
          (l.subtreeFlags & 10256) !== 0 || !1
        ))), n & 2048 && Gf(c, l);
        break;
      case 24:
        Rl(
          t,
          l,
          e,
          u
        ), n & 2048 && Xf(l.alternate, l);
        break;
      case 30:
        a && (n = l.alternate, n !== null && (wl(n.child, !0), wl(l.child, !0))), Rl(
          t,
          l,
          e,
          u
        );
        break;
      default:
        Rl(
          t,
          l,
          e,
          u
        );
    }
  }
  function Iu(t, l, e, u, a) {
    for (a = a && ((l.subtreeFlags & 10256) !== 0 || !1), l = l.child; l !== null; ) {
      var n = t, i = l, c = e, r = u, h = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          Iu(
            n,
            i,
            c,
            r,
            a
          ), Ka(8, i);
          break;
        case 23:
          break;
        case 22:
          var T = i.stateNode;
          i.memoizedState !== null ? T._visibility & 2 ? Iu(
            n,
            i,
            c,
            r,
            a
          ) : Wa(
            n,
            i
          ) : (T._visibility |= 2, Iu(
            n,
            i,
            c,
            r,
            a
          )), a && h & 2048 && Gf(
            i.alternate,
            i
          );
          break;
        case 24:
          Iu(
            n,
            i,
            c,
            r,
            a
          ), a && h & 2048 && Xf(i.alternate, i);
          break;
        default:
          Iu(
            n,
            i,
            c,
            r,
            a
          );
      }
      l = l.sibling;
    }
  }
  function Wa(t, l) {
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; ) {
        var e = t, u = l, a = u.flags;
        switch (u.tag) {
          case 22:
            Wa(e, u), a & 2048 && Gf(
              u.alternate,
              u
            );
            break;
          case 24:
            Wa(e, u), a & 2048 && Xf(u.alternate, u);
            break;
          default:
            Wa(e, u);
        }
        l = l.sibling;
      }
  }
  var Su = 8192;
  function bu(t, l, e) {
    if (t.subtreeFlags & Su)
      for (t = t.child; t !== null; )
        Vd(
          t,
          l,
          e
        ), t = t.sibling;
  }
  function Vd(t, l, e) {
    switch (t.tag) {
      case 26:
        bu(
          t,
          l,
          e
        ), t.flags & Su && (t.memoizedState !== null ? g1(
          e,
          Bl,
          t.memoizedState,
          t.memoizedProps
        ) : (t = t.stateNode, (l & 335544128) === l && I0(e, t)));
        break;
      case 5:
        bu(
          t,
          l,
          e
        ), t.flags & Su && (t = t.stateNode, (l & 335544128) === l && I0(e, t));
        break;
      case 3:
      case 4:
        var u = Bl;
        Bl = en(t.stateNode.containerInfo), bu(
          t,
          l,
          e
        ), Bl = u;
        break;
      case 22:
        t.memoizedState === null && (u = t.alternate, u !== null && u.memoizedState !== null ? (u = Su, Su = 16777216, bu(
          t,
          l,
          e
        ), Su = u) : bu(
          t,
          l,
          e
        ));
        break;
      case 30:
        if ((t.flags & Su) !== 0 && (u = t.memoizedProps.name, u != null && u !== "auto")) {
          var a = t.stateNode;
          a.paired = null, hl === null && (hl = /* @__PURE__ */ new Map()), hl.set(u, a);
        }
        bu(
          t,
          l,
          e
        );
        break;
      default:
        bu(
          t,
          l,
          e
        );
    }
  }
  function Kd(t) {
    var l = t.alternate;
    if (l !== null && (t = l.child, t !== null)) {
      l.child = null;
      do
        l = t.sibling, t.sibling = null, t = l;
      while (t !== null);
    }
  }
  function $a(t) {
    var l = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (l !== null)
        for (var e = 0; e < l.length; e++) {
          var u = l[e];
          Gt = u, wd(
            u,
            t
          );
        }
      Kd(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        Jd(t), t = t.sibling;
  }
  function Jd(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        $a(t), t.flags & 2048 && qe(9, t, t.return);
        break;
      case 3:
        $a(t);
        break;
      case 12:
        $a(t);
        break;
      case 22:
        var l = t.stateNode;
        t.memoizedState !== null && l._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (l._visibility &= -3, bi(t)) : $a(t);
        break;
      default:
        $a(t);
    }
  }
  function bi(t) {
    var l = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (l !== null)
        for (var e = 0; e < l.length; e++) {
          var u = l[e];
          Gt = u, wd(
            u,
            t
          );
        }
      Kd(t);
    }
    for (t = t.child; t !== null; ) {
      switch (l = t, l.tag) {
        case 0:
        case 11:
        case 15:
          qe(8, l, l.return), bi(l);
          break;
        case 22:
          e = l.stateNode, e._visibility & 2 && (e._visibility &= -3, bi(l));
          break;
        default:
          bi(l);
      }
      t = t.sibling;
    }
  }
  function wd(t, l) {
    for (; Gt !== null; ) {
      var e = Gt;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          qe(8, e, l);
          break;
        case 23:
        case 22:
          if (e.memoizedState !== null && e.memoizedState.cachePool !== null) {
            var u = e.memoizedState.cachePool.pool;
            u != null && u.refCount++;
          }
          break;
        case 24:
          Ua(e.memoizedState.cache);
      }
      if (u = e.child, u !== null) u.return = e, Gt = u;
      else
        t: for (e = t; Gt !== null; ) {
          u = Gt;
          var a = u.sibling, n = u.return;
          if (Bd(u), u === e) {
            Gt = null;
            break t;
          }
          if (a !== null) {
            a.return = n, Gt = a;
            break t;
          }
          Gt = n;
        }
    }
  }
  var dv = {
    getCacheForType: function(t) {
      var l = Lt(Rt), e = l.data.get(t);
      return e === void 0 && (e = t(), l.data.set(t, e)), e;
    },
    cacheSignal: function() {
      return Lt(Rt).controller.signal;
    }
  }, mv = typeof WeakMap == "function" ? WeakMap : Map, ot = 0, St = null, P = null, lt = 0, mt = 0, gl = null, Xe = !1, ku = !1, Qf = !1, ge = 0, At = 0, Qe = 0, Tu = 0, Ti = 0, Sl = 0, Pu = 0, Fa = null, cl = null, Lf = !1, Ei = 0, Wd = 0, zi = 1 / 0, pi = null, Le = null, pt = 0, ql = null, Eu = null, Il = 0, Zf = 0, Vf = null, $d = null, ta = null, la = null, ea = null, Ia = 0, Oi = null;
  function bl() {
    return (ot & 2) !== 0 && lt !== 0 ? lt & -lt : B.T !== null ? to() : ko();
  }
  function Fd() {
    if (Sl === 0)
      if ((lt & 536870912) === 0 || k) {
        var t = Sn;
        Sn <<= 1, (Sn & 3932160) === 0 && (Sn = 262144), Sl = t;
      } else Sl = 536870912;
    return t = Zt.current, t !== null && (t.flags |= 32), Sl;
  }
  function ua(t, l) {
    if (l != null) {
      var e = t.stateNode, u = e.ref;
      u === null && (u = e.ref = R0(
        ce(t.memoizedProps, e)
      )), la === null && (la = []), la.push(l.bind(null, u));
    }
  }
  function fl(t, l, e) {
    (t === St && (mt === 2 || mt === 9) || t.cancelPendingCommit !== null) && (aa(t, 0), Ze(
      t,
      lt,
      Sl,
      !1
    )), Sa(t, e), ((ot & 2) === 0 || t !== St) && (t === St && ((ot & 2) === 0 && (Tu |= e), At === 4 && Ze(
      t,
      lt,
      Sl,
      !1
    )), kl(t));
  }
  function Id(t, l, e) {
    if ((ot & 6) !== 0) throw Error(o(327));
    var u = !e && (l & 127) === 0 && (l & t.expiredLanes) === 0 || ga(t, l), a = u ? hv(t, l) : Jf(t, l, !0), n = u;
    do {
      if (a === 0) {
        ku && !u && Ze(t, l, 0, !1);
        break;
      } else {
        if (e = t.current.alternate, n && !yv(e)) {
          a = Jf(t, l, !1), n = !1;
          continue;
        }
        if (a === 2) {
          if (n = l, t.errorRecoveryDisabledLanes & n)
            var i = 0;
          else
            i = t.pendingLanes & -536870913, i = i !== 0 ? i : i & 536870912 ? 536870912 : 0;
          if (i !== 0) {
            l = i;
            t: {
              var c = t;
              a = Fa;
              var r = c.current.memoizedState.isDehydrated;
              if (r && (aa(c, i).flags |= 256), i = Jf(
                c,
                i,
                !1
              ), i !== 2 && i !== 6) {
                if (Qf && !r) {
                  c.errorRecoveryDisabledLanes |= n, Tu |= n, a = 4;
                  break t;
                }
                n = cl, cl = a, n !== null && (cl === null ? cl = n : cl.push.apply(
                  cl,
                  n
                ));
              }
              a = i;
            }
            if (n = !1, a !== 2) continue;
          }
        }
        if (a === 1) {
          aa(t, 0), Ze(t, l, 0, !0);
          break;
        }
        t: {
          switch (u = t, n = a, n) {
            case 0:
            case 1:
              throw Error(o(345));
            case 4:
              if ((l & 4194048) !== l && (l & 62914560) !== l)
                break;
            case 6:
              Ze(
                u,
                l,
                Sl,
                !Xe
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
          if ((l & 62914560) === l && (a = Ei + 300 - rl(), 10 < a)) {
            if (Ze(
              u,
              l,
              Sl,
              !Xe
            ), Tn(u, 0, !0) !== 0) break t;
            Il = l, u.timeoutHandle = so(
              kd.bind(
                null,
                u,
                e,
                cl,
                pi,
                Lf,
                l,
                Sl,
                Tu,
                Pu,
                Xe,
                n,
                "Throttled",
                -0,
                0
              ),
              a
            );
            break t;
          }
          kd(
            u,
            e,
            cl,
            pi,
            Lf,
            l,
            Sl,
            Tu,
            Pu,
            Xe,
            n,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    kl(t);
  }
  function kd(t, l, e, u, a, n, i, c, r, h, T, p, y, b) {
    t.timeoutHandle = -1;
    var M = l.subtreeFlags, H = (n & 335544064) === n;
    if (p = null, (H || M & 8192 || (M & 16785408) === 16785408) && (p = {
      stylesheets: null,
      count: 0,
      imgCount: 0,
      imgBytes: 0,
      suspenseyImages: [],
      waitingForImages: !0,
      waitingForViewTransition: !1,
      unsuspend: Ll
    }, hl = null, Vd(
      l,
      n,
      p
    ), H && (M = p, H = t.containerInfo, H = (H.nodeType === 9 ? H : H.ownerDocument).__reactViewTransition, H != null && (M.count++, M.waitingForViewTransition = !0, M = nn.bind(M), H.finished.then(M, M))), M = (n & 62914560) === n ? Ei - rl() : (n & 4194048) === n ? Wd - rl() : 0, M = S1(
      p,
      M
    ), M !== null)) {
      Il = n, t.cancelPendingCommit = M(
        i0.bind(
          null,
          t,
          l,
          n,
          e,
          u,
          a,
          i,
          c,
          r,
          h,
          T,
          p,
          null,
          y,
          b
        )
      ), Ze(t, n, i, !h);
      return;
    }
    i0(
      t,
      l,
      n,
      e,
      u,
      a,
      i,
      c,
      r,
      h,
      T,
      p
    );
  }
  function yv(t) {
    for (var l = t; ; ) {
      var e = l.tag;
      if ((e === 0 || e === 11 || e === 15) && l.flags & 16384 && (e = l.updateQueue, e !== null && (e = e.stores, e !== null)))
        for (var u = 0; u < e.length; u++) {
          var a = e[u], n = a.getSnapshot;
          a = a.value;
          try {
            if (!yl(n(), a)) return !1;
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
  function Ze(t, l, e, u) {
    l = wo(t, l), l &= ~Ti, l &= ~Tu, t.suspendedLanes |= l, t.pingedLanes &= ~l, u && (t.warmLanes |= l), u = t.expirationTimes;
    for (var a = l; 0 < a; ) {
      var n = 31 - dl(a), i = 1 << n;
      u[n] = -1, a &= ~i;
    }
    e !== 0 && $o(t, e, l);
  }
  function Ai() {
    return (ot & 6) === 0 ? (ka(0), !1) : !0;
  }
  function Kf() {
    if (P !== null) {
      if (mt === 0)
        var t = P.return;
      else
        t = P, se = fu = null, kc(t), Vu = null, ja = 0, t = P;
      for (; t !== null; )
        Ed(t.alternate, t), t = t.return;
      P = null;
    }
  }
  function aa(t, l) {
    var e = t.timeoutHandle;
    return e !== -1 && (t.timeoutHandle = -1, qv(e)), e = t.cancelPendingCommit, e !== null && (t.cancelPendingCommit = null, e()), Il = 0, Kf(), St = t, P = e = oe(t.current, null), lt = l, mt = 0, gl = null, Xe = !1, ku = ga(t, l), Qf = !1, Pu = Sl = Ti = Tu = Qe = At = 0, cl = Fa = null, Lf = !1, ge = wo(t, l), Hn(), e;
  }
  function Pd(t, l) {
    W = null, B.H = ai, l === Zu || l === Vn ? (l = is(), mt = 3) : l === Gc ? (l = is(), mt = 4) : mt = l === yf ? 8 : l !== null && typeof l == "object" && typeof l.then == "function" ? 6 : 1, gl = l, P === null && (At = 1, ni(
      t,
      _l(l, t.current)
    ));
  }
  function t0() {
    var t = Zt.current;
    return t === null ? !0 : (lt & 4194048) === lt ? Wt === null : (lt & 62914560) === lt || (lt & 536870912) !== 0 ? t === Wt : !1;
  }
  function l0() {
    var t = B.H;
    return B.H = ai, t === null ? ai : t;
  }
  function e0() {
    var t = B.A;
    return B.A = dv, t;
  }
  function _i() {
    At = 4, Xe || (lt & 4194048) !== lt && Zt.current !== null || (ku = !0), (Qe & 134217727) === 0 && (Tu & 134217727) === 0 || St === null || Ze(
      St,
      lt,
      Sl,
      !1
    );
  }
  function Jf(t, l, e) {
    var u = ot;
    ot |= 2;
    var a = l0(), n = e0();
    (St !== t || lt !== l) && (pi = null, aa(t, l)), l = !1;
    var i = At;
    t: do
      try {
        if (mt !== 0 && P !== null) {
          var c = P, r = gl;
          switch (mt) {
            case 8:
              Kf(), i = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              Zt.current === null && (l = !0);
              var h = mt;
              if (mt = 0, gl = null, na(t, c, r, h), e && ku) {
                i = 0;
                break t;
              }
              break;
            default:
              h = mt, mt = 0, gl = null, na(t, c, r, h);
          }
        }
        vv(), i = At;
        break;
      } catch (T) {
        Pd(t, T);
      }
    while (!0);
    return l && t.shellSuspendCounter++, se = fu = null, ot = u, B.H = a, B.A = n, P === null && (St = null, lt = 0, Hn()), i;
  }
  function vv() {
    for (; P !== null; ) u0(P);
  }
  function hv(t, l) {
    var e = ot;
    ot |= 2;
    var u = l0(), a = e0();
    St !== t || lt !== l ? (pi = null, zi = rl() + 500, aa(t, l)) : ku = ga(
      t,
      l
    );
    t: do
      try {
        if (mt !== 0 && P !== null) {
          l = P;
          var n = gl;
          l: switch (mt) {
            case 1:
              mt = 0, gl = null, na(t, l, n, 1);
              break;
            case 2:
            case 9:
              if (as(n)) {
                mt = 0, gl = null, a0(l);
                break;
              }
              l = function() {
                mt !== 2 && mt !== 9 || St !== t || (mt = 7), kl(t);
              }, n.then(l, l);
              break t;
            case 3:
              mt = 7;
              break t;
            case 4:
              mt = 5;
              break t;
            case 7:
              as(n) ? (mt = 0, gl = null, a0(l)) : (mt = 0, gl = null, na(t, l, n, 7));
              break;
            case 5:
              var i = null;
              switch (P.tag) {
                case 26:
                  i = P.memoizedState;
                case 5:
                case 27:
                  var c = P;
                  if (i ? $0(i) : c.stateNode.complete) {
                    mt = 0, gl = null;
                    var r = c.sibling;
                    if (r !== null) P = r;
                    else {
                      var h = c.return;
                      h !== null ? (P = h, Ni(h)) : P = null;
                    }
                    break l;
                  }
              }
              mt = 0, gl = null, na(t, l, n, 5);
              break;
            case 6:
              mt = 0, gl = null, na(t, l, n, 6);
              break;
            case 8:
              Kf(), At = 6;
              break t;
            default:
              throw Error(o(462));
          }
        }
        gv();
        break;
      } catch (T) {
        Pd(t, T);
      }
    while (!0);
    return se = fu = null, B.H = u, B.A = a, ot = e, P !== null ? 0 : (St = null, lt = 0, Hn(), At);
  }
  function gv() {
    for (; P !== null && !xm(); )
      u0(P);
  }
  function u0(t) {
    var l = bd(t.alternate, t, ge);
    t.memoizedProps = t.pendingProps, l === null ? Ni(t) : P = l;
  }
  function a0(t) {
    var l = t, e = l.alternate;
    switch (l.tag) {
      case 15:
      case 0:
        l = dd(
          e,
          l,
          l.pendingProps,
          l.type,
          void 0,
          lt
        );
        break;
      case 11:
        l = dd(
          e,
          l,
          l.pendingProps,
          l.type.render,
          l.ref,
          lt
        );
        break;
      case 5:
        kc(l);
        var u = l;
        u === Yt && (k ? (Gn(u), u.tag === 5 && u.stateNode != null && (Tt = u.stateNode)) : (Gn(u), k = !0));
      default:
        Ed(e, l), l = P = wr(l, ge), l = bd(e, l, ge);
    }
    t.memoizedProps = t.pendingProps, l === null ? Ni(t) : P = l;
  }
  function na(t, l, e, u) {
    se = fu = null, kc(l), Vu = null, ja = 0;
    var a = l.return;
    try {
      if (av(
        t,
        a,
        l,
        e,
        lt
      )) {
        At = 1, ni(
          t,
          _l(e, t.current)
        ), P = null;
        return;
      }
    } catch (n) {
      if (a !== null) throw P = a, n;
      At = 1, ni(
        t,
        _l(e, t.current)
      ), P = null;
      return;
    }
    l.flags & 32768 ? (k || u === 1 ? t = !0 : ku || (lt & 536870912) !== 0 ? t = !1 : (Xe = t = !0, (u === 2 || u === 9 || u === 3 || u === 6) && (u = Zt.current, u !== null && u.tag === 13 && (u.flags |= 16384))), n0(l, t)) : Ni(l);
  }
  function Ni(t) {
    var l = t;
    do {
      if ((l.flags & 32768) !== 0) {
        n0(
          l,
          Xe
        );
        return;
      }
      t = l.return;
      var e = fv(
        l.alternate,
        l,
        ge
      );
      if (e !== null) {
        P = e;
        return;
      }
      if (l = l.sibling, l !== null) {
        P = l;
        return;
      }
      P = l = t;
    } while (l !== null);
    At === 0 && (At = 5);
  }
  function n0(t, l) {
    do {
      var e = ov(t.alternate, t);
      if (e !== null) {
        e.flags &= 32767, P = e;
        return;
      }
      if (e = t.return, e !== null && (e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null), !l && (t = t.sibling, t !== null)) {
        P = t;
        return;
      }
      P = t = e;
    } while (t !== null);
    At = 6, P = null;
  }
  function i0(t, l, e, u, a, n, i, c, r, h, T, p) {
    t.cancelPendingCommit = null;
    do
      Mi();
    while (pt !== 0);
    if ((ot & 6) !== 0) throw Error(o(327));
    if (l !== null) {
      if (l === t.current) throw Error(o(177));
      t === St && (P = St = null, lt = 0), Eu = l, ql = t, Il = e, Vf = a, $d = u, Sv(
        t,
        l,
        e,
        i,
        c,
        r,
        p
      );
    }
  }
  function Sv(t, l, e, u, a, n, i) {
    var c = l.lanes | l.childLanes;
    if (Zf = c, c |= _c, Vm(
      t,
      e,
      c,
      u,
      a,
      n
    ), la = null, (e & 335544064) === e ? (ea = Jy(t), u = 10262) : (ea = null, u = 10256), (l.subtreeFlags & u) !== 0 || (l.flags & u) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, Ov(hn, function() {
      return Ff(), null;
    })) : (t.callbackNode = null, t.callbackPriority = 0), mi = !1, u = (l.flags & 13878) !== 0, (l.subtreeFlags & 13878) !== 0 || u) {
      u = B.T, B.T = null, a = J.p, J.p = 2, n = ot, ot |= 4;
      try {
        rv(t, l, e);
      } finally {
        ot = n, J.p = a, B.T = u;
      }
    }
    pt = 1, mi ? ta = Vv(
      i,
      t.containerInfo,
      ea,
      wf,
      Wf,
      Tv,
      $f,
      Ff,
      bv
    ) : (wf(), Wf(), $f());
  }
  function bv(t) {
    if (pt !== 0) {
      var l = ql.onRecoverableError;
      l(t, { componentStack: null });
    }
  }
  function Tv() {
    pt === 3 && (pt = 0, Ld(Eu, ql), pt = 4);
  }
  function wf() {
    if (pt === 1) {
      pt = 0;
      var t = ql, l = Eu, e = Il, u = (l.flags & 13878) !== 0;
      if ((l.subtreeFlags & 13878) !== 0 || u) {
        u = B.T, B.T = null;
        var a = J.p;
        J.p = 2;
        var n = ot;
        ot |= 4;
        try {
          wa = hi = !1, Xd(l, t, e), e = fo;
          var i = Yr(t.containerInfo), c = e.focusedElem, r = e.selectionRange;
          if (i !== c && c && c.ownerDocument && Br(
            c.ownerDocument.documentElement,
            c
          )) {
            if (r !== null && Ec(c)) {
              var h = r.start, T = r.end;
              if (T === void 0 && (T = h), "selectionStart" in c)
                c.selectionStart = h, c.selectionEnd = Math.min(
                  T,
                  c.value.length
                );
              else {
                var p = c.ownerDocument || document, y = p && p.defaultView || window;
                if (y.getSelection) {
                  var b = y.getSelection(), M = c.textContent.length, H = Math.min(r.start, M), $ = r.end === void 0 ? H : Math.min(r.end, M);
                  !b.extend && H > $ && (i = $, $ = H, H = i);
                  var v = jr(
                    c,
                    H
                  ), s = jr(
                    c,
                    $
                  );
                  if (v && s && (b.rangeCount !== 1 || b.anchorNode !== v.node || b.anchorOffset !== v.offset || b.focusNode !== s.node || b.focusOffset !== s.offset)) {
                    var S = p.createRange();
                    S.setStart(v.node, v.offset), b.removeAllRanges(), H > $ ? (b.addRange(S), b.extend(s.node, s.offset)) : (S.setEnd(s.node, s.offset), b.addRange(S));
                  }
                }
              }
            }
            for (p = [], b = c; b = b.parentNode; )
              b.nodeType === 1 && p.push({
                element: b,
                left: b.scrollLeft,
                top: b.scrollTop
              });
            for (typeof c.focus == "function" && c.focus(), c = 0; c < p.length; c++) {
              var z = p[c];
              z.element.scrollLeft = z.left, z.element.scrollTop = z.top;
            }
          }
          ma = !!co, fo = co = null;
        } finally {
          ot = n, J.p = a, B.T = u;
        }
      }
      t.current = l, pt = 2;
    }
  }
  function Wf() {
    if (pt === 2) {
      pt = 0;
      var t = ql, l = Eu, e = (l.flags & 8772) !== 0;
      if ((l.subtreeFlags & 8772) !== 0 || e) {
        e = B.T, B.T = null;
        var u = J.p;
        J.p = 2;
        var a = ot;
        ot |= 4;
        try {
          xd(t, l.alternate, l);
        } finally {
          ot = a, J.p = u, B.T = e;
        }
      }
      pt = 3;
    }
  }
  function $f() {
    if (pt === 4 || pt === 3) {
      pt = 0;
      var t = ta;
      ta = null, jm();
      var l = ql, e = Eu, u = Il, a = $d, n = (u & 335544064) === u ? 10262 : 10256;
      if ((e.subtreeFlags & n) !== 0 || (e.flags & n) !== 0 ? pt = 5 : (pt = 0, Eu = ql = null, c0(l, l.pendingLanes)), n = l.pendingLanes, n === 0 && (Le = null), uc(u), e = e.stateNode, sl && typeof sl.onCommitFiberRoot == "function")
        try {
          sl.onCommitFiberRoot(
            ha,
            e,
            void 0,
            (e.current.flags & 128) === 128
          );
        } catch {
        }
      if (a !== null) {
        e = B.T, n = J.p, J.p = 2, B.T = null;
        try {
          for (var i = l.onRecoverableError, c = 0; c < a.length; c++) {
            var r = a[c];
            i(r.value, {
              componentStack: r.stack
            });
          }
        } finally {
          B.T = e, J.p = n;
        }
      }
      if (a = la, i = ea, ea = null, a !== null && (la = null, i === null && (i = []), t !== null))
        for (r = 0; r < a.length; r++)
          e = (0, a[r])(
            i
          ), e !== void 0 && t.finished.finally(e);
      (Il & 3) !== 0 && Mi(), kl(l), n = l.pendingLanes, (u & 261930) !== 0 && (n & 42) !== 0 ? l === Oi ? Ia++ : (Ia = 0, Oi = l) : (Ia = 0, Oi = null), ka(0);
    }
  }
  function c0(t, l) {
    (t.pooledCacheLanes &= l) === 0 && (l = t.pooledCache, l != null && (t.pooledCache = null, Ua(l)));
  }
  function Mi() {
    return ta !== null && (ta.skipTransition(), ta = null), wf(), Wf(), $f(), Ff();
  }
  function Ff() {
    if (pt !== 5) return !1;
    var t = ql, l = Zf;
    Zf = 0;
    var e = uc(Il), u = B.T, a = J.p;
    try {
      J.p = 32 > e ? 32 : e, B.T = null, e = Vf, Vf = null;
      var n = ql, i = Il;
      if (pt = 0, Eu = ql = null, Il = 0, (ot & 6) !== 0) throw Error(o(331));
      var c = ot;
      if (ot |= 4, Jd(n.current), Zd(
        n,
        n.current,
        i,
        e
      ), ot = c, ka(0, !1), sl && typeof sl.onPostCommitFiberRoot == "function")
        try {
          sl.onPostCommitFiberRoot(ha, n);
        } catch {
        }
      return !0;
    } finally {
      J.p = a, B.T = u, c0(t, l);
    }
  }
  function f0(t, l, e) {
    l = _l(e, l), l = mf(t.stateNode, l, 2), t = xe(t, l, 2), t !== null && (Sa(t, 2), kl(t));
  }
  function yt(t, l, e) {
    if (t.tag === 3)
      f0(t, t, e);
    else
      for (; l !== null; ) {
        if (l.tag === 3) {
          f0(
            l,
            t,
            e
          );
          break;
        } else if (l.tag === 1) {
          var u = l.stateNode;
          if (typeof l.type.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && (Le === null || !Le.has(u))) {
            t = _l(e, t), e = ad(2), u = xe(l, e, 2), u !== null && (nd(
              e,
              u,
              l,
              t
            ), Sa(u, 2), kl(u));
            break;
          }
        }
        l = l.return;
      }
  }
  function If(t, l, e) {
    var u = t.pingCache;
    if (u === null) {
      u = t.pingCache = new mv();
      var a = /* @__PURE__ */ new Set();
      u.set(l, a);
    } else
      a = u.get(l), a === void 0 && (a = /* @__PURE__ */ new Set(), u.set(l, a));
    a.has(e) || (Qf = !0, a.add(e), t = Ev.bind(null, t, l, e), l.then(t, t));
  }
  function Ev(t, l, e) {
    var u = t.pingCache;
    u !== null && u.delete(l), t.pingedLanes |= t.suspendedLanes & e, t.warmLanes &= ~e, St === t && (lt & e) === e && ((At === 4 || At === 3 && (lt & 62914560) === lt && 300 > rl() - Ei) && (ot & 2) === 0 ? aa(t, 0) : Ti |= e, Pu === lt && (Pu = 0)), kl(t);
  }
  function o0(t, l) {
    l === 0 && (l = Wo()), t = nu(t, l), t !== null && (Sa(t, l), kl(t));
  }
  function zv(t) {
    var l = t.memoizedState, e = 0;
    l !== null && (e = l.retryLane), o0(t, e);
  }
  function pv(t, l) {
    var e = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var u = t.stateNode, a = t.memoizedState;
        a !== null && (e = a.retryLane);
        break;
      case 19:
        u = t.stateNode;
        break;
      case 22:
        u = t.stateNode._retryCache;
        break;
      default:
        throw Error(o(314));
    }
    u !== null && u.delete(l), o0(t, e);
  }
  function Ov(t, l) {
    return Pi(t, l);
  }
  var ia = null, ca = null, kf = !1, Ci = !1, Pf = !1, Ve = 0;
  function kl(t) {
    t !== ca && t.next === null && (ca === null ? ia = ca = t : ca = ca.next = t), Ci = !0, kf || (kf = !0, _v());
  }
  function ka(t, l) {
    if (!Pf && Ci) {
      Pf = !0;
      do
        for (var e = !1, u = ia; u !== null; ) {
          if (t !== 0) {
            var a = u.pendingLanes;
            if (a === 0) var n = 0;
            else {
              var i = u.suspendedLanes, c = u.pingedLanes;
              n = (1 << 31 - dl(42 | t) + 1) - 1, n &= a & ~(i & ~c), n = n & 201326741 ? n & 201326741 | 1 : n ? n | 2 : 0;
            }
            n !== 0 && (e = !0, m0(u, n));
          } else
            n = lt, n = Tn(
              u,
              u === St ? n : 0,
              u.cancelPendingCommit !== null || u.timeoutHandle !== -1
            ), (n & 3) === 0 || ga(u, n) || (e = !0, m0(u, n));
          u = u.next;
        }
      while (e);
      Pf = !1;
    }
  }
  function Av() {
    r0();
  }
  function r0() {
    Ci = kf = !1;
    var t = 0;
    Ve !== 0 && Yv() && (t = Ve);
    for (var l = rl(), e = null, u = ia; u !== null; ) {
      var a = u.next, n = s0(u, l);
      n === 0 ? (u.next = null, e === null ? ia = a : e.next = a, a === null && (ca = e)) : (e = u, (t !== 0 || (n & 3) !== 0) && (Ci = !0)), u = a;
    }
    pt !== 0 && pt !== 5 || ka(t), Ve !== 0 && (Ve = 0);
  }
  function s0(t, l) {
    for (var e = t.suspendedLanes, u = t.pingedLanes, a = t.expirationTimes, n = t.pendingLanes & -62914561; 0 < n; ) {
      var i = 31 - dl(n), c = 1 << i, r = a[i];
      r === -1 ? ((c & e) === 0 || (c & u) !== 0) && (a[i] = Zm(c, l)) : r <= l && (t.expiredLanes |= c), n &= ~c;
    }
    if (l = St, e = lt, e = Tn(
      t,
      t === l ? e : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), u = t.callbackNode, e === 0 || t === l && (mt === 2 || mt === 9) || t.cancelPendingCommit !== null)
      return u !== null && u !== null && tc(u), t.callbackNode = null, t.callbackPriority = 0;
    if ((e & 3) === 0 || ga(t, e)) {
      if (l = e & -e, l === t.callbackPriority) return l;
      switch (u !== null && tc(u), uc(e)) {
        case 2:
        case 8:
          e = Ko;
          break;
        case 32:
          e = hn;
          break;
        case 268435456:
          e = Jo;
          break;
        default:
          e = hn;
      }
      return u = d0.bind(null, t), e = Pi(e, u), t.callbackPriority = l, t.callbackNode = e, l;
    }
    return u !== null && u !== null && tc(u), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function d0(t, l) {
    if (pt !== 0 && pt !== 5)
      return t.callbackNode = null, t.callbackPriority = 0, null;
    var e = t.callbackNode;
    if (Mi() && t.callbackNode !== e)
      return null;
    var u = lt;
    return u = Tn(
      t,
      t === St ? u : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), u === 0 ? null : (Id(t, u, l), s0(t, rl()), t.callbackNode != null && t.callbackNode === e ? d0.bind(null, t) : null);
  }
  function m0(t, l) {
    if (Mi()) return null;
    Id(t, l, !0);
  }
  function _v() {
    Gv(function() {
      (ot & 6) !== 0 ? Pi(
        Vo,
        Av
      ) : r0();
    });
  }
  function to() {
    if (Ve === 0) {
      var t = su;
      t === 0 && (t = gn, gn <<= 1, (gn & 261888) === 0 && (gn = 256)), Ve = t;
    }
    return Ve;
  }
  function y0(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : An(t);
  }
  function Nv(t, l, e, u, a) {
    if (l === "submit" && e && e.stateNode === a) {
      var n = y0(
        (a[ul] || null).action
      ), i = u.submitter;
      i && (l = (l = i[ul] || null) ? y0(l.formAction) : i.getAttribute("formAction"), l !== null && (n = l, i = null));
      var c = new Cn(
        "action",
        "action",
        null,
        u,
        a
      );
      t.push({
        event: c,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (u.defaultPrevented) {
                if (Ve !== 0) {
                  var r = new FormData(a, i);
                  ff(
                    e,
                    {
                      pending: !0,
                      data: r,
                      method: a.method,
                      action: n
                    },
                    null,
                    r
                  );
                }
              } else
                typeof n == "function" && (c.preventDefault(), r = new FormData(a, i), ff(
                  e,
                  {
                    pending: !0,
                    data: r,
                    method: a.method,
                    action: n
                  },
                  n,
                  r
                ));
            },
            currentTarget: a
          }
        ]
      });
    }
  }
  for (var lo = 0; lo < Ac.length; lo++) {
    var eo = Ac[lo], Mv = eo.toLowerCase(), Cv = eo[0].toUpperCase() + eo.slice(1);
    xl(
      Mv,
      "on" + Cv
    );
  }
  xl(Xr, "onAnimationEnd"), xl(Qr, "onAnimationIteration"), xl(Lr, "onAnimationStart"), xl("dblclick", "onDoubleClick"), xl("focusin", "onFocus"), xl("focusout", "onBlur"), xl(qy, "onTransitionRun"), xl(Gy, "onTransitionStart"), xl(Xy, "onTransitionCancel"), xl(Zr, "onTransitionEnd"), Cu("onMouseEnter", ["mouseout", "mouseover"]), Cu("onMouseLeave", ["mouseout", "mouseover"]), Cu("onPointerEnter", ["pointerout", "pointerover"]), Cu("onPointerLeave", ["pointerout", "pointerover"]), eu(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), eu(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), eu("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), eu(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), eu(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), eu(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Pa = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Rv = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Pa)
  );
  function v0(t, l) {
    l = (l & 4) !== 0;
    for (var e = 0; e < t.length; e++) {
      var u = t[e], a = u.event;
      u = u.listeners;
      t: {
        var n = void 0;
        if (l)
          for (var i = u.length - 1; 0 <= i; i--) {
            var c = u[i], r = c.instance, h = c.currentTarget;
            if (c = c.listener, r !== n && a.isPropagationStopped())
              break t;
            n = c, a.currentTarget = h;
            try {
              n(a);
            } catch (T) {
              Un(T);
            }
            a.currentTarget = null, n = r;
          }
        else
          for (i = 0; i < u.length; i++) {
            if (c = u[i], r = c.instance, h = c.currentTarget, c = c.listener, r !== n && a.isPropagationStopped())
              break t;
            n = c, a.currentTarget = h;
            try {
              n(a);
            } catch (T) {
              Un(T);
            }
            a.currentTarget = null, n = r;
          }
      }
    }
  }
  function tt(t, l) {
    var e = l[tr];
    e === void 0 && (e = l[tr] = /* @__PURE__ */ new Set());
    var u = t + "__bubble";
    e.has(u) || (h0(l, t, 2, !1), e.add(u));
  }
  function uo(t, l, e) {
    var u = 0;
    l && (u |= 4), h0(
      e,
      t,
      u,
      l
    );
  }
  var Ri = "_reactListening" + Math.random().toString(36).slice(2);
  function ao(t) {
    if (!t[Ri]) {
      t[Ri] = !0, ur.forEach(function(e) {
        e !== "selectionchange" && (Rv.has(e) || uo(e, !1, t), uo(e, !0, t));
      });
      var l = t.nodeType === 9 ? t : t.ownerDocument;
      l === null || l[Ri] || (l[Ri] = !0, uo("selectionchange", !1, l));
    }
  }
  function h0(t, l, e, u) {
    switch (nm(l)) {
      case 2:
        var a = z1;
        break;
      case 8:
        a = p1;
        break;
      default:
        a = Ao;
    }
    e = a.bind(
      null,
      l,
      e,
      t
    ), a = void 0, !sc || l !== "touchstart" && l !== "touchmove" && l !== "wheel" || (a = !0), u ? a !== void 0 ? t.addEventListener(l, e, {
      capture: !0,
      passive: a
    }) : t.addEventListener(l, e, !0) : a !== void 0 ? t.addEventListener(l, e, {
      passive: a
    }) : t.addEventListener(l, e, !1);
  }
  function no(t, l, e, u, a) {
    var n = u;
    if ((l & 1) === 0 && (l & 2) === 0 && u !== null)
      t: for (; ; ) {
        if (u === null) return;
        var i = u.tag;
        if (i === 3 || i === 4) {
          var c = u.stateNode.containerInfo;
          if (c === a) break;
          if (i === 4)
            for (i = u.return; i !== null; ) {
              var r = i.tag;
              if ((r === 3 || r === 4) && i.stateNode.containerInfo === a)
                return;
              i = i.return;
            }
          for (; c !== null; ) {
            if (i = lu(c), i === null) return;
            if (r = i.tag, r === 5 || r === 6 || r === 26 || r === 27) {
              u = n = i;
              continue t;
            }
            c = c.parentNode;
          }
        }
        u = u.return;
      }
    hr(function() {
      var h = n, T = oc(e), p = [];
      t: {
        var y = Vr.get(t);
        if (y !== void 0) {
          var b = Cn, M = t;
          switch (t) {
            case "keypress":
              if (Nn(e) === 0) break t;
            case "keydown":
            case "keyup":
              b = yy;
              break;
            case "focusin":
              M = "focus", b = vc;
              break;
            case "focusout":
              M = "blur", b = vc;
              break;
            case "beforeblur":
            case "afterblur":
              b = vc;
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
              b = br;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              b = ey;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              b = by;
              break;
            case Xr:
            case Qr:
            case Lr:
              b = ny;
              break;
            case Zr:
              b = Ey;
              break;
            case "scroll":
            case "scrollend":
              b = ty;
              break;
            case "wheel":
              b = py;
              break;
            case "copy":
            case "cut":
            case "paste":
              b = cy;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              b = Er;
              break;
            case "submit":
              b = gy;
              break;
            case "toggle":
            case "beforetoggle":
              b = Ay;
          }
          var H = (l & 4) !== 0, $ = !H && (t === "scroll" || t === "scrollend"), v = H ? y !== null ? y + "Capture" : null : y;
          H = [];
          for (var s = h, S; s !== null; ) {
            var z = s;
            if (S = z.stateNode, z = z.tag, z !== 5 && z !== 26 && z !== 27 || S === null || v === null || (z = Ea(s, v), z != null && H.push(
              tn(s, z, S)
            )), $) break;
            s = s.return;
          }
          0 < H.length && (y = new b(
            y,
            M,
            null,
            e,
            T
          ), p.push({ event: y, listeners: H }));
        }
      }
      if ((l & 7) === 0) {
        t: {
          if (b = t === "mouseover" || t === "pointerover", y = t === "mouseout" || t === "pointerout", b && e !== fc && (M = e.relatedTarget || e.fromElement) && (lu(M) || M[_u]))
            break t;
          (y || b) && (M = T.window === T ? T : (b = T.ownerDocument) ? b.defaultView || b.parentWindow : window, y ? (b = e.relatedTarget || e.toElement, y = h, b = b ? lu(b) : null, b !== null && ($ = _(b), H = b.tag, b !== $ || H !== 5 && H !== 27 && H !== 6) && (b = null)) : (y = null, b = h), y !== b && (H = br, z = "onMouseLeave", v = "onMouseEnter", s = "mouse", (t === "pointerout" || t === "pointerover") && (H = Er, z = "onPointerLeave", v = "onPointerEnter", s = "pointer"), $ = y == null ? M : Ta(y), S = b == null ? M : Ta(b), M = new H(
            z,
            s + "leave",
            y,
            e,
            T
          ), M.target = $, M.relatedTarget = S, z = null, lu(T) === h && (H = new H(
            v,
            s + "enter",
            b,
            e,
            T
          ), H.target = S, H.relatedTarget = $, z = H), $ = z, H = y && b ? Ft(
            y,
            b,
            Dv
          ) : null, y !== null && g0(
            p,
            M,
            y,
            H,
            !1
          ), b !== null && $ !== null && g0(
            p,
            $,
            b,
            H,
            !0
          )));
        }
        t: {
          if (y = h ? Ta(h) : window, b = y.nodeName && y.nodeName.toLowerCase(), b === "select" || b === "input" && y.type === "file")
            var D = Cr;
          else if (Nr(y))
            if (Rr)
              D = jy;
            else {
              D = Hy;
              var et = Uy;
            }
          else
            b = y.nodeName, !b || b.toLowerCase() !== "input" || y.type !== "checkbox" && y.type !== "radio" ? h && cc(h.elementType) && (D = Cr) : D = xy;
          if (D && (D = D(t, h))) {
            Mr(
              p,
              D,
              e,
              T
            );
            break t;
          }
          et && et(t, y, h);
        }
        switch (et = h ? Ta(h) : window, t) {
          case "focusin":
            (Nr(et) || et.contentEditable === "true") && (ju = et, zc = h, Ca = null);
            break;
          case "focusout":
            Ca = zc = ju = null;
            break;
          case "mousedown":
            pc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            pc = !1, qr(p, e, T);
            break;
          case "selectionchange":
            if (Yy) break;
          case "keydown":
          case "keyup":
            qr(p, e, T);
        }
        var q;
        if (gc)
          t: {
            switch (t) {
              case "compositionstart":
                var L = "onCompositionStart";
                break t;
              case "compositionend":
                L = "onCompositionEnd";
                break t;
              case "compositionupdate":
                L = "onCompositionUpdate";
                break t;
            }
            L = void 0;
          }
        else
          xu ? Ar(t, e) && (L = "onCompositionEnd") : t === "keydown" && e.keyCode === 229 && (L = "onCompositionStart");
        L && (zr && e.locale !== "ko" && (xu || L !== "onCompositionStart" ? L === "onCompositionEnd" && xu && (q = gr()) : (Ae = T, dc = "value" in Ae ? Ae.value : Ae.textContent, xu = !0)), et = Di(h, L), 0 < et.length && (L = new Tr(
          L,
          t,
          null,
          e,
          T
        ), p.push({ event: L, listeners: et }), q ? L.data = q : (q = _r(e), q !== null && (L.data = q)))), (q = Ny ? My(t, e) : Cy(t, e)) && (L = Di(h, "onBeforeInput"), 0 < L.length && (et = new Tr(
          "onBeforeInput",
          "beforeinput",
          null,
          e,
          T
        ), p.push({
          event: et,
          listeners: L
        }), et.data = q)), Nv(
          p,
          t,
          h,
          e,
          T
        );
      }
      v0(p, l);
    });
  }
  function tn(t, l, e) {
    return {
      instance: t,
      listener: l,
      currentTarget: e
    };
  }
  function Di(t, l) {
    for (var e = l + "Capture", u = []; t !== null; ) {
      var a = t, n = a.stateNode;
      if (a = a.tag, a !== 5 && a !== 26 && a !== 27 || n === null || (a = Ea(t, e), a != null && u.unshift(
        tn(t, a, n)
      ), a = Ea(t, l), a != null && u.push(
        tn(t, a, n)
      )), t.tag === 3) return u;
      t = t.return;
    }
    return [];
  }
  function Dv(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function g0(t, l, e, u, a) {
    for (var n = l._reactName, i = []; e !== null && e !== u; ) {
      var c = e, r = c.alternate, h = c.stateNode;
      if (c = c.tag, r !== null && r === u) break;
      c !== 5 && c !== 26 && c !== 27 || h === null || (r = h, a ? (h = Ea(e, n), h != null && i.unshift(
        tn(e, h, r)
      )) : a || (h = Ea(e, n), h != null && i.push(
        tn(e, h, r)
      ))), e = e.return;
    }
    i.length !== 0 && t.push({ event: l, listeners: i });
  }
  var Uv = /\r\n?/g, Hv = /\u0000|\uFFFD/g;
  function S0(t) {
    return (typeof t == "string" ? t : "" + t).replace(Uv, `
`).replace(Hv, "");
  }
  function b0(t, l) {
    return l = S0(l), S0(t) === l;
  }
  function vt(t, l, e, u, a, n) {
    switch (e) {
      case "children":
        if (typeof u == "string")
          l === "body" || l === "textarea" && u === "" || Du(t, u);
        else if (typeof u == "number" || typeof u == "bigint")
          l !== "body" && Du(t, "" + u);
        else return;
        break;
      case "className":
        On(t, "class", u);
        break;
      case "tabIndex":
        On(t, "tabindex", u);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        On(t, e, u);
        break;
      case "style":
        yr(t, u, n);
        return;
      case "data":
        if (l !== "object") {
          On(t, "data", u);
          break;
        }
      case "src":
      case "href":
        if (u === "" && (l !== "a" || e !== "href")) {
          t.removeAttribute(e);
          break;
        }
        if (u == null || typeof u == "function" || typeof u == "symbol" || typeof u == "boolean") {
          t.removeAttribute(e);
          break;
        }
        u = An(u), t.setAttribute(e, u);
        break;
      case "action":
      case "formAction":
        if (typeof u == "function") {
          t.setAttribute(
            e,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof n == "function" && (e === "formAction" ? (l !== "input" && vt(t, l, "name", a.name, a, null), vt(
            t,
            l,
            "formEncType",
            a.formEncType,
            a,
            null
          ), vt(
            t,
            l,
            "formMethod",
            a.formMethod,
            a,
            null
          ), vt(
            t,
            l,
            "formTarget",
            a.formTarget,
            a,
            null
          )) : (vt(t, l, "encType", a.encType, a, null), vt(t, l, "method", a.method, a, null), vt(t, l, "target", a.target, a, null)));
        if (u == null || typeof u == "symbol" || typeof u == "boolean") {
          t.removeAttribute(e);
          break;
        }
        u = An(u), t.setAttribute(e, u);
        break;
      case "onClick":
        u != null && (t.onclick = Ll);
        return;
      case "onScroll":
        u != null && tt("scroll", t);
        return;
      case "onScrollEnd":
        u != null && tt("scrollend", t);
        return;
      case "dangerouslySetInnerHTML":
        if (u != null) {
          if (typeof u != "object" || !("__html" in u))
            throw Error(o(61));
          if (e = u.__html, e != null) {
            if (a.children != null) throw Error(o(60));
            n?.__html !== e && (t.innerHTML = e);
          }
        }
        break;
      case "multiple":
        t.multiple = u && typeof u != "function" && typeof u != "symbol";
        break;
      case "muted":
        t.muted = u && typeof u != "function" && typeof u != "symbol";
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
        if (u == null || typeof u == "function" || typeof u == "boolean" || typeof u == "symbol") {
          t.removeAttribute("xlink:href");
          break;
        }
        e = An(u), t.setAttributeNS(
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
        u != null && typeof u != "function" && typeof u != "symbol" ? t.setAttribute(e, u) : t.removeAttribute(e);
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
        u && typeof u != "function" && typeof u != "symbol" ? t.setAttribute(e, "") : t.removeAttribute(e);
        break;
      case "capture":
      case "download":
        u === !0 ? t.setAttribute(e, "") : u !== !1 && u != null && typeof u != "function" && typeof u != "symbol" ? t.setAttribute(e, u) : t.removeAttribute(e);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        u != null && typeof u != "function" && typeof u != "symbol" && !isNaN(u) && 1 <= u ? t.setAttribute(e, u) : t.removeAttribute(e);
        break;
      case "rowSpan":
      case "start":
        u == null || typeof u == "function" || typeof u == "symbol" || isNaN(u) ? t.removeAttribute(e) : t.setAttribute(e, u);
        break;
      case "popover":
        tt("beforetoggle", t), tt("toggle", t), pn(t, "popover", u);
        break;
      case "xlinkActuate":
        ne(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          u
        );
        break;
      case "xlinkArcrole":
        ne(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          u
        );
        break;
      case "xlinkRole":
        ne(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          u
        );
        break;
      case "xlinkShow":
        ne(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          u
        );
        break;
      case "xlinkTitle":
        ne(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          u
        );
        break;
      case "xlinkType":
        ne(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          u
        );
        break;
      case "xmlBase":
        ne(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          u
        );
        break;
      case "xmlLang":
        ne(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          u
        );
        break;
      case "xmlSpace":
        ne(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          u
        );
        break;
      case "is":
        pn(t, "is", u);
        break;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N")
          e = km.get(e) || e, pn(t, e, u);
        else return;
    }
    it = !0;
  }
  function io(t, l, e, u, a, n) {
    switch (e) {
      case "style":
        yr(t, u, n);
        return;
      case "dangerouslySetInnerHTML":
        if (u != null) {
          if (typeof u != "object" || !("__html" in u))
            throw Error(o(61));
          if (e = u.__html, e != null) {
            if (a.children != null) throw Error(o(60));
            n?.__html !== e && (t.innerHTML = e);
          }
        }
        break;
      case "children":
        if (typeof u == "string") Du(t, u);
        else if (typeof u == "number" || typeof u == "bigint")
          Du(t, "" + u);
        else return;
        break;
      case "onScroll":
        u != null && tt("scroll", t);
        return;
      case "onScrollEnd":
        u != null && tt("scrollend", t);
        return;
      case "onClick":
        u != null && (t.onclick = Ll);
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
        if (!ar.hasOwnProperty(e))
          t: {
            if (e[0] === "o" && e[1] === "n" && (a = e.endsWith("Capture"), n = e.slice(2, a ? e.length - 7 : void 0), l = t[ul] || null, l = l != null ? l[e] : null, typeof l == "function" && t.removeEventListener(n, l, a), typeof u == "function")) {
              typeof l != "function" && l !== null && (e in t ? t[e] = null : t.hasAttribute(e) && t.removeAttribute(e)), t.addEventListener(n, u, a);
              break t;
            }
            it = !0, e in t ? t[e] = u : u === !0 ? t.setAttribute(e, "") : pn(t, e, u);
          }
        return;
    }
    it = !0;
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
        tt("error", t), tt("load", t);
        var u = !1, a = !1, n;
        for (n in e)
          if (e.hasOwnProperty(n)) {
            var i = e[n];
            if (i != null)
              switch (n) {
                case "src":
                  u = !0;
                  break;
                case "srcSet":
                  a = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(o(137, l));
                default:
                  vt(t, l, n, i, e, null);
              }
          }
        a && vt(t, l, "srcSet", e.srcSet, e, null), u && vt(t, l, "src", e.src, e, null);
        return;
      case "input":
        tt("invalid", t);
        var c = n = i = a = null, r = null, h = null;
        for (u in e)
          if (e.hasOwnProperty(u)) {
            var T = e[u];
            if (T != null)
              switch (u) {
                case "name":
                  a = T;
                  break;
                case "type":
                  i = T;
                  break;
                case "checked":
                  r = T;
                  break;
                case "defaultChecked":
                  h = T;
                  break;
                case "value":
                  n = T;
                  break;
                case "defaultValue":
                  c = T;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (T != null)
                    throw Error(o(137, l));
                  break;
                default:
                  vt(t, l, u, T, e, null);
              }
          }
        rr(
          t,
          n,
          c,
          r,
          h,
          i,
          a,
          !1
        );
        return;
      case "select":
        tt("invalid", t), u = i = n = null;
        for (a in e)
          if (e.hasOwnProperty(a) && (c = e[a], c != null))
            switch (a) {
              case "value":
                n = c;
                break;
              case "defaultValue":
                i = c;
                break;
              case "multiple":
                u = c;
              default:
                vt(t, l, a, c, e, null);
            }
        l = n, e = i, t.multiple = !!u, l != null ? Ru(t, !!u, l, !1) : e != null && Ru(t, !!u, e, !0);
        return;
      case "textarea":
        tt("invalid", t), n = a = u = null;
        for (i in e)
          if (e.hasOwnProperty(i) && (c = e[i], c != null))
            switch (i) {
              case "value":
                u = c;
                break;
              case "defaultValue":
                a = c;
                break;
              case "children":
                n = c;
                break;
              case "dangerouslySetInnerHTML":
                if (c != null) throw Error(o(91));
                break;
              default:
                vt(t, l, i, c, e, null);
            }
        dr(t, u, a, n);
        return;
      case "option":
        for (r in e)
          e.hasOwnProperty(r) && (u = e[r], u != null) && (r === "selected" ? t.selected = u && typeof u != "function" && typeof u != "symbol" : vt(t, l, r, u, e, null));
        return;
      case "dialog":
        tt("beforetoggle", t), tt("toggle", t), tt("cancel", t), tt("close", t);
        break;
      case "iframe":
      case "object":
        tt("load", t);
        break;
      case "video":
      case "audio":
        for (u = 0; u < Pa.length; u++)
          tt(Pa[u], t);
        break;
      case "image":
        tt("error", t), tt("load", t);
        break;
      case "details":
        tt("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        tt("error", t), tt("load", t);
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
        for (h in e)
          if (e.hasOwnProperty(h) && (u = e[h], u != null))
            switch (h) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(o(137, l));
              default:
                vt(t, l, h, u, e, null);
            }
        return;
      default:
        if (cc(l)) {
          for (T in e)
            e.hasOwnProperty(T) && (u = e[T], u !== void 0 && io(
              t,
              l,
              T,
              u,
              e,
              void 0
            ));
          return;
        }
    }
    for (c in e)
      e.hasOwnProperty(c) && (u = e[c], u != null && vt(t, l, c, u, e, null));
  }
  var xv = {};
  function jv(t, l, e, u) {
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
        var a = null, n = null, i = null, c = null, r = null, h = null, T = null;
        for (b in e) {
          var p = e[b];
          if (e.hasOwnProperty(b) && p != null)
            switch (b) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                r = p;
              default:
                u.hasOwnProperty(b) || vt(t, l, b, null, u, p);
            }
        }
        for (var y in u) {
          var b = u[y];
          if (p = e[y], u.hasOwnProperty(y) && (b != null || p != null))
            switch (y) {
              case "type":
                b !== p && (it = !0), n = b;
                break;
              case "name":
                b !== p && (it = !0), a = b;
                break;
              case "checked":
                b !== p && (it = !0), h = b;
                break;
              case "defaultChecked":
                b !== p && (it = !0), T = b;
                break;
              case "value":
                b !== p && (it = !0), i = b;
                break;
              case "defaultValue":
                b !== p && (it = !0), c = b;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (b != null)
                  throw Error(o(137, l));
                break;
              default:
                b !== p && vt(
                  t,
                  l,
                  y,
                  b,
                  u,
                  p
                );
            }
        }
        nc(
          t,
          i,
          c,
          r,
          h,
          T,
          n,
          a
        );
        return;
      case "select":
        b = i = c = y = null;
        for (n in e)
          if (r = e[n], e.hasOwnProperty(n) && r != null)
            switch (n) {
              case "value":
                break;
              case "multiple":
                b = r;
              default:
                u.hasOwnProperty(n) || vt(
                  t,
                  l,
                  n,
                  null,
                  u,
                  r
                );
            }
        for (a in u)
          if (n = u[a], r = e[a], u.hasOwnProperty(a) && (n != null || r != null))
            switch (a) {
              case "value":
                n !== r && (it = !0), y = n;
                break;
              case "defaultValue":
                n !== r && (it = !0), c = n;
                break;
              case "multiple":
                n !== r && (it = !0), i = n;
              default:
                n !== r && vt(
                  t,
                  l,
                  a,
                  n,
                  u,
                  r
                );
            }
        l = c, e = i, u = b, y != null ? Ru(t, !!e, y, !1) : !!u != !!e && (l != null ? Ru(t, !!e, l, !0) : Ru(t, !!e, e ? [] : "", !1));
        return;
      case "textarea":
        b = y = null;
        for (c in e)
          if (a = e[c], e.hasOwnProperty(c) && a != null && !u.hasOwnProperty(c))
            switch (c) {
              case "value":
                break;
              case "children":
                break;
              default:
                vt(t, l, c, null, u, a);
            }
        for (i in u)
          if (a = u[i], n = e[i], u.hasOwnProperty(i) && (a != null || n != null))
            switch (i) {
              case "value":
                a !== n && (it = !0), y = a;
                break;
              case "defaultValue":
                a !== n && (it = !0), b = a;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (a != null) throw Error(o(91));
                break;
              default:
                a !== n && vt(t, l, i, a, u, n);
            }
        sr(t, y, b);
        return;
      case "option":
        for (var M in e)
          y = e[M], e.hasOwnProperty(M) && y != null && !u.hasOwnProperty(M) && (M === "selected" ? t.selected = !1 : vt(
            t,
            l,
            M,
            null,
            u,
            y
          ));
        for (r in u)
          y = u[r], b = e[r], u.hasOwnProperty(r) && y !== b && (y != null || b != null) && (r === "selected" ? (y !== b && (it = !0), t.selected = y && typeof y != "function" && typeof y != "symbol") : vt(
            t,
            l,
            r,
            y,
            u,
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
        for (var H in e)
          y = e[H], e.hasOwnProperty(H) && y != null && !u.hasOwnProperty(H) && vt(t, l, H, null, u, y);
        for (h in u)
          if (y = u[h], b = e[h], u.hasOwnProperty(h) && y !== b && (y != null || b != null))
            switch (h) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (y != null)
                  throw Error(o(137, l));
                break;
              default:
                vt(
                  t,
                  l,
                  h,
                  y,
                  u,
                  b
                );
            }
        return;
      default:
        if (cc(l)) {
          for (var $ in e)
            y = e[$], e.hasOwnProperty($) && y !== void 0 && !u.hasOwnProperty($) && io(
              t,
              l,
              $,
              void 0,
              u,
              y
            );
          for (T in u)
            y = u[T], b = e[T], !u.hasOwnProperty(T) || y === b || y === void 0 && b === void 0 || io(
              t,
              l,
              T,
              y,
              u,
              b
            );
          return;
        }
    }
    for (var v in e)
      y = e[v], e.hasOwnProperty(v) && y != null && !u.hasOwnProperty(v) && vt(t, l, v, null, u, y);
    for (p in u)
      y = u[p], b = e[p], !u.hasOwnProperty(p) || y === b || y == null && b == null || vt(t, l, p, y, u, b);
  }
  function T0(t) {
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
  function Bv() {
    if (typeof performance.getEntriesByType == "function") {
      for (var t = 0, l = 0, e = performance.getEntriesByType("resource"), u = 0; u < e.length; u++) {
        var a = e[u], n = a.transferSize, i = a.initiatorType, c = a.duration;
        if (n && c && T0(i)) {
          for (i = 0, c = a.responseEnd, u += 1; u < e.length; u++) {
            var r = e[u], h = r.startTime;
            if (h > c) break;
            var T = r.transferSize, p = r.initiatorType;
            T && T0(p) && (r = r.responseEnd, i += T * (r < c ? 1 : (c - h) / (r - h)));
          }
          if (--u, l += 8 * (n + i) / (a.duration / 1e3), t++, 10 < t) break;
        }
      }
      if (0 < t) return l / t / 1e6;
    }
    return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
  }
  var co = null, fo = null;
  function ln(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function E0(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function z0(t, l) {
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
  function p0(t, l, e, u) {
    return e = ln(
      e
    ).createElement(t), e[Qt] = u, e[ul] = l, Jt(e, t, l), Bt(e), e;
  }
  function oo(t, l) {
    return t === "textarea" || t === "noscript" || typeof l.children == "string" || typeof l.children == "number" || typeof l.children == "bigint" || typeof l.dangerouslySetInnerHTML == "object" && l.dangerouslySetInnerHTML !== null && l.dangerouslySetInnerHTML.__html != null;
  }
  var ro = null;
  function Yv() {
    var t = window.event;
    return t && t.type === "popstate" ? t === ro ? !1 : (ro = t, !0) : (ro = null, !1);
  }
  var so = typeof setTimeout == "function" ? setTimeout : void 0, qv = typeof clearTimeout == "function" ? clearTimeout : void 0, O0 = typeof Promise == "function" ? Promise : void 0, A0 = typeof requestAnimationFrame == "function" ? requestAnimationFrame : so, Gv = typeof queueMicrotask == "function" ? queueMicrotask : typeof O0 < "u" ? function(t) {
    return O0.resolve(null).then(t).catch(Xv);
  } : so;
  function Xv(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function Ke(t) {
    return t === "head";
  }
  function _0(t, l) {
    var e = l, u = 0;
    do {
      var a = e.nextSibling;
      if (t.removeChild(e), a && a.nodeType === 8)
        if (e = a.data, e === "/$" || e === "/&") {
          if (u === 0) {
            t.removeChild(a), ya(l);
            return;
          }
          u--;
        } else if (e === "$" || e === "$?" || e === "$~" || e === "$!" || e === "&")
          u++;
        else if (e === "html")
          To(
            t.ownerDocument.documentElement
          );
        else if (e === "head") {
          e = t.ownerDocument.head, To(e);
          for (var n = e.firstChild; n; ) {
            var i = n.nextSibling, c = n.nodeName;
            n[ba] || c === "SCRIPT" || c === "STYLE" || c === "LINK" && n.rel.toLowerCase() === "stylesheet" || e.removeChild(n), n = i;
          }
        } else
          e === "body" && To(t.ownerDocument.body);
      e = a;
    } while (e);
    ya(l);
  }
  function N0(t, l) {
    var e = t;
    t = 0;
    do {
      var u = e.nextSibling;
      if (e.nodeType === 1 ? l ? (e._stashedDisplay = e.style.display, e.style.display = "none") : (e.style.display = e._stashedDisplay || "", e.getAttribute("style") === "" && e.removeAttribute("style")) : e.nodeType === 3 && (l ? (e._stashedText = e.nodeValue, e.nodeValue = "") : e.nodeValue = e._stashedText || ""), u && u.nodeType === 8)
        if (e = u.data, e === "/$") {
          if (t === 0) break;
          t--;
        } else
          e !== "$" && e !== "$?" && e !== "$~" && e !== "$!" || t++;
      e = u;
    } while (e);
  }
  function M0(t, l, e) {
    if (l = CSS.escape(l) !== l ? "r-" + btoa(l).replace(/=/g, "") : l, t.style.viewTransitionName = l, e != null && (t.style.viewTransitionClass = e), e = getComputedStyle(t), e.display === "inline") {
      if (l = t.getClientRects(), l.length === 1) var u = 1;
      else
        for (var a = u = 0; a < l.length; a++) {
          var n = l[a];
          0 < n.width && 0 < n.height && u++;
        }
      u === 1 && (t = t.style, t.display = l.length === 1 ? "inline-block" : "block", t.marginTop = "-" + e.paddingTop, t.marginBottom = "-" + e.paddingBottom);
    }
  }
  function C0(t, l) {
    t = t.style, l = l.style;
    var e = l != null ? l.hasOwnProperty("viewTransitionName") ? l.viewTransitionName : l.hasOwnProperty("view-transition-name") ? l["view-transition-name"] : null : null;
    t.viewTransitionName = e == null || typeof e == "boolean" ? "" : ("" + e).trim(), e = l != null ? l.hasOwnProperty("viewTransitionClass") ? l.viewTransitionClass : l.hasOwnProperty("view-transition-class") ? l["view-transition-class"] : null : null, t.viewTransitionClass = e == null || typeof e == "boolean" ? "" : ("" + e).trim(), t.display === "inline-block" && (l == null ? t.display = t.margin = "" : (e = l.display, t.display = e == null || typeof e == "boolean" ? "" : e, e = l.margin, e != null ? t.margin = e : (e = l.hasOwnProperty("marginTop") ? l.marginTop : l["margin-top"], t.marginTop = e == null || typeof e == "boolean" ? "" : e, l = l.hasOwnProperty("marginBottom") ? l.marginBottom : l["margin-bottom"], t.marginBottom = l == null || typeof l == "boolean" ? "" : l)));
  }
  function Qv(t, l, e) {
    return e = e.ownerDocument.defaultView, {
      rect: t,
      abs: l.position === "absolute" || l.position === "fixed",
      clip: l.clipPath !== "none" || l.overflow !== "visible" || l.filter !== "none" || l.mask !== "none" || l.mask !== "none" || l.borderRadius !== "0px",
      view: 0 <= t.bottom && 0 <= t.right && t.top <= e.innerHeight && t.left <= e.innerWidth
    };
  }
  function mo(t) {
    var l = t.getBoundingClientRect(), e = getComputedStyle(t);
    return Qv(l, e, t);
  }
  function Lv(t) {
    return t.documentElement.clientHeight;
  }
  function Zv(t) {
    this.addEventListener("load", t), this.addEventListener("error", t);
  }
  function Vv(t, l, e, u, a, n, i, c, r) {
    var h = l.nodeType === 9 ? l : l.ownerDocument;
    try {
      var T = h.startViewTransition({
        update: function() {
          var y = h.defaultView, b = y.navigation && y.navigation.transition, M = h.fonts.status;
          u();
          var H = [];
          if (M === "loaded" && (Lv(h), h.fonts.status === "loading" && H.push(h.fonts.ready)), M = H.length, t !== null)
            for (var $ = t.suspenseyImages, v = 0, s = 0; s < $.length; s++) {
              var S = $[s];
              if (!S.complete) {
                var z = S.getBoundingClientRect();
                if (0 < z.bottom && 0 < z.right && z.top < y.innerHeight && z.left < y.innerWidth) {
                  if (v += F0(S), v > xi) {
                    H.length = M;
                    break;
                  }
                  S = new Promise(
                    Zv.bind(S)
                  ), H.push(S);
                }
              }
            }
          if (0 < H.length)
            return y = Promise.race([
              Promise.all(H),
              new Promise(function(D) {
                return setTimeout(D, 500);
              })
            ]).then(a, a), (b ? Promise.allSettled([b.finished, y]) : y).then(n, n);
          if (a(), b)
            return b.finished.then(
              n,
              n
            );
          n();
        },
        types: e
      });
      h.__reactViewTransition = T;
      var p = [];
      return T.ready.then(
        function() {
          for (var y = h.documentElement.getAnimations({
            subtree: !0
          }), b = 0; b < y.length; b++) {
            var M = y[b], H = M.effect, $ = H.pseudoElement;
            if ($ != null && $.startsWith("::view-transition")) {
              p.push(M), M = H.getKeyframes();
              for (var v = $ = void 0, s = !0, S = 0; S < M.length; S++) {
                var z = M[S], D = z.width;
                if ($ === void 0) $ = D;
                else if ($ !== D) {
                  s = !1;
                  break;
                }
                if (D = z.height, v === void 0) v = D;
                else if (v !== D) {
                  s = !1;
                  break;
                }
                delete z.width, delete z.height, z.transform === "none" && delete z.transform;
              }
              s && $ !== void 0 && v !== void 0 && (H.setKeyframes(M), s = getComputedStyle(
                H.target,
                H.pseudoElement
              ), s.width !== $ || s.height !== v) && (s = M[0], s.width = $, s.height = v, s = M[M.length - 1], s.width = $, s.height = v, H.setKeyframes(M));
            }
          }
          i();
        },
        function(y) {
          h.__reactViewTransition === T && (h.__reactViewTransition = null);
          try {
            typeof y == "object" && y !== null && y.name === "InvalidStateError" && (y.message === "View transition was skipped because document visibility state is hidden." || y.message === "Skipping view transition because document visibility state has become hidden." || y.message === "Skipping view transition because viewport size changed." || y.message === "Transition was aborted because of invalid state") && (y = null), y !== null && r(y);
          } finally {
            u(), a(), i();
          }
        }
      ), T.finished.finally(function() {
        for (var y = 0; y < p.length; y++)
          p[y].cancel();
        h.__reactViewTransition === T && (h.__reactViewTransition = null), c();
      }), T;
    } catch {
      return u(), a(), i(), null;
    }
  }
  function zu(t, l) {
    this._scope = document.documentElement, this._selector = "::view-transition-" + t + "(" + l + ")";
  }
  zu.prototype.animate = function(t, l) {
    return l = typeof l == "number" ? { duration: l } : I({}, l), l.pseudoElement = this._selector, this._scope.animate(t, l);
  }, zu.prototype.getAnimations = function() {
    for (var t = this._scope, l = this._selector, e = t.getAnimations({ subtree: !0 }), u = [], a = 0; a < e.length; a++) {
      var n = e[a].effect;
      n !== null && n.target === t && n.pseudoElement === l && u.push(e[a]);
    }
    return u;
  }, zu.prototype.getComputedStyle = function() {
    return getComputedStyle(this._scope, this._selector);
  };
  function R0(t) {
    return {
      name: t,
      group: new zu("group", t),
      imagePair: new zu("image-pair", t),
      old: new zu("old", t),
      new: new zu("new", t)
    };
  }
  function Tl(t) {
    this._fragmentFiber = t, this._observers = this._eventListeners = null;
  }
  Tl.prototype.addEventListener = function(t, l, e) {
    var u = null, a = null;
    if (!(e != null && typeof e != "boolean" && (u = e.signal || null, u !== null && u.aborted))) {
      this._eventListeners === null && (this._eventListeners = []);
      var n = this._eventListeners;
      if (U0(n, t, l, e) === -1) {
        var i = this, c = l;
        e != null && typeof e != "boolean" && e.once === !0 && (c = function(r) {
          i.removeEventListener(
            t,
            l,
            e
          ), typeof l == "function" ? l.call(this, r) : l.handleEvent(r);
        }), u !== null && (a = i.removeEventListener.bind(
          i,
          t,
          l,
          e
        ), u.addEventListener("abort", a, { once: !0 }), a = u.removeEventListener.bind(u, "abort", a)), u = fa(e), n.push({
          type: t,
          listener: l,
          optionsOrUseCapture: e,
          attachedListener: c,
          cleanup: a
        }), E(
          this._fragmentFiber.child,
          !1,
          Kv,
          t,
          c,
          u
        );
      }
      this._eventListeners = n;
    }
  };
  function Kv(t, l, e, u) {
    return x(t).addEventListener(
      l,
      e,
      u
    ), !1;
  }
  Tl.prototype.removeEventListener = function(t, l, e) {
    var u = this._eventListeners;
    if (u !== null && (l = U0(
      u,
      t,
      l,
      e
    ), l !== -1)) {
      var a = u[l];
      e = a.attachedListener;
      var n = a.cleanup;
      a = fa(a.optionsOrUseCapture), E(
        this._fragmentFiber.child,
        !1,
        Jv,
        t,
        e,
        a
      ), u.splice(l, 1), n !== null && n();
    }
  };
  function Jv(t, l, e, u) {
    return x(t).removeEventListener(
      l,
      e,
      u
    ), !1;
  }
  function fa(t) {
    return t != null && typeof t != "boolean" && (t.once === !0 || t.signal instanceof AbortSignal) ? { capture: t.capture, passive: t.passive } : t;
  }
  function D0(t) {
    return t == null ? "c=0" : typeof t == "boolean" ? "c=" + (t ? "1" : "0") : "c=" + (t.capture ? "1" : "0");
  }
  function U0(t, l, e, u) {
    if (t.length === 0) return -1;
    u = D0(u);
    for (var a = 0; a < t.length; a++) {
      var n = t[a];
      if (n.type === l && n.listener === e && D0(n.optionsOrUseCapture) === u)
        return a;
    }
    return -1;
  }
  Tl.prototype.dispatchEvent = function(t) {
    var l = j(
      this._fragmentFiber
    );
    if (l === null) return !0;
    l = x(l);
    var e = this._eventListeners;
    if (e !== null && 0 < e.length || !t.bubbles) {
      var u = l.nodeType === 9 ? l.createComment("") : document.createTextNode("");
      if (e)
        for (var a = 0; a < e.length; a++) {
          var n = e[a];
          u.addEventListener(
            n.type,
            n.attachedListener,
            fa(n.optionsOrUseCapture)
          );
        }
      if (l.appendChild(u), t = u.dispatchEvent(t), e)
        for (a = 0; a < e.length; a++)
          n = e[a], u.removeEventListener(
            n.type,
            n.attachedListener,
            fa(n.optionsOrUseCapture)
          );
      return l.removeChild(u), t;
    }
    return l.dispatchEvent(t);
  }, Tl.prototype.focus = function(t) {
    E(
      this._fragmentFiber.child,
      !0,
      H0,
      t,
      void 0,
      void 0
    );
  };
  function H0(t, l) {
    return t.tag === 6 ? !1 : (t = x(t), a1(t, l));
  }
  Tl.prototype.focusLast = function(t) {
    var l = [];
    E(
      this._fragmentFiber.child,
      !0,
      yo,
      l,
      void 0,
      void 0
    );
    for (var e = l.length - 1; 0 <= e && !H0(l[e], t); e--) ;
  };
  function yo(t, l) {
    return l.push(t), !1;
  }
  Tl.prototype.blur = function() {
    var t = j(
      this._fragmentFiber
    );
    t !== null && (t = x(t), t = ln(t).activeElement, t !== null && E(
      this._fragmentFiber.child,
      !1,
      wv,
      t,
      void 0,
      void 0
    ));
  };
  function wv(t, l) {
    return t.tag === 6 ? !1 : (t = x(t), t === l || t.contains(l) ? (l.blur(), !0) : !1);
  }
  Tl.prototype.observeUsing = function(t) {
    this._observers === null && (this._observers = /* @__PURE__ */ new Set()), this._observers.add(t), E(
      this._fragmentFiber.child,
      !1,
      Wv,
      t,
      void 0,
      void 0
    );
  };
  function Wv(t, l) {
    return t.tag === 6 || (t = x(t), l.observe(t)), !1;
  }
  Tl.prototype.unobserveUsing = function(t) {
    var l = this._observers;
    if (l !== null && l.has(t)) {
      l.delete(t), E(
        this._fragmentFiber.child,
        !1,
        $v,
        t,
        void 0,
        void 0
      );
      for (var e = l = 0; e < Gl.length; e++) {
        var u = Gl[e];
        u.fragmentInstance === this && u.observer === t ? t.unobserve(u.instance) : Gl[l++] = u;
      }
      Gl.length = l;
    }
  };
  function $v(t, l) {
    return t.tag === 6 || (t = x(t), l.unobserve(t)), !1;
  }
  var Gl = [], vo = !1;
  function Fv(t, l, e) {
    Gl.push({
      fragmentInstance: t,
      observer: l,
      instance: e
    }), vo || (vo = !0, n1(function() {
      vo = !1;
      var u = Gl;
      Gl = [];
      for (var a = 0; a < u.length; a++) {
        var n = u[a];
        n.observer.unobserve(n.instance);
      }
    }));
  }
  Tl.prototype.getClientRects = function() {
    var t = [];
    return E(
      this._fragmentFiber.child,
      !1,
      Iv,
      t,
      void 0,
      void 0
    ), t;
  };
  function Iv(t, l) {
    if (t.tag === 6) {
      t = t.stateNode;
      var e = t.ownerDocument.createRange();
      e.selectNodeContents(t), l.push.apply(l, e.getClientRects());
    } else
      t = x(t), l.push.apply(l, t.getClientRects());
    return !1;
  }
  Tl.prototype.getRootNode = function(t) {
    var l = j(
      this._fragmentFiber
    );
    return l === null ? this : x(l).getRootNode(t);
  }, Tl.prototype.compareDocumentPosition = function(t) {
    var l = j(
      this._fragmentFiber
    );
    if (l === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
    var e = [];
    E(
      this._fragmentFiber.child,
      !1,
      yo,
      e,
      void 0,
      void 0
    );
    var u = x(l);
    if (e.length === 0) {
      if (e = u, dt(this._fragmentFiber)) {
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
      var a = u = e.compareDocumentPosition(t);
      return e === t ? a = Node.DOCUMENT_POSITION_CONTAINS : u & Node.DOCUMENT_POSITION_CONTAINED_BY && (e = _t(l)[1], e === null ? a = Node.DOCUMENT_POSITION_PRECEDING : (t = x(e).compareDocumentPosition(
        t
      ), a = t === 0 || t & Node.DOCUMENT_POSITION_FOLLOWING ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING)), a |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
    }
    l = x(e[0]), a = x(e[e.length - 1]);
    var n = dt(this._fragmentFiber) ? l.parentElement : u;
    if (n == null)
      return Node.DOCUMENT_POSITION_DISCONNECTED;
    u = n.compareDocumentPosition(l) & Node.DOCUMENT_POSITION_CONTAINED_BY, n = n.compareDocumentPosition(a) & Node.DOCUMENT_POSITION_CONTAINED_BY;
    var i = l.compareDocumentPosition(t), c = a.compareDocumentPosition(t), r = i & Node.DOCUMENT_POSITION_CONTAINED_BY || c & Node.DOCUMENT_POSITION_CONTAINED_BY;
    return c = u && n && i & Node.DOCUMENT_POSITION_FOLLOWING && c & Node.DOCUMENT_POSITION_PRECEDING, l = u && l === t || n && a === t || r || c ? Node.DOCUMENT_POSITION_CONTAINED_BY : !u && l === t || !n && a === t ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC : i, l & Node.DOCUMENT_POSITION_DISCONNECTED || l & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC || kv(
      l,
      this._fragmentFiber,
      e[0],
      e[e.length - 1],
      t
    ) ? l : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
  };
  function kv(t, l, e, u, a) {
    var n = lu(a);
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
        return n = a.ownerDocument, a === n || a === n.documentElement || a === n.body;
      t: {
        for (n = l, l = j(l); n !== null; ) {
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
      pl
    ), l === null ? l = !1 : (E(
      l,
      !0,
      le,
      n,
      e
    ), n = ct, ct = null, l = n !== null)), l) : t & Node.DOCUMENT_POSITION_FOLLOWING ? ((l = !!n) && !(l = n === u) && (l = Ft(
      u,
      n,
      pl
    ), l === null ? l = !1 : (E(
      l,
      !0,
      zl,
      n,
      u
    ), n = ct, $t = ct = null, l = n !== null)), l) : !1;
  }
  function x0(t, l) {
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
      yo,
      l,
      void 0,
      void 0
    );
    var e = t !== !1;
    if (l.length === 0) {
      var u = _t(
        this._fragmentFiber
      );
      if (u = e ? u[1] || u[0] || j(this._fragmentFiber) : u[0] || u[1], u === null) return;
      if (u.tag === 6) {
        t = x(u), x0(t, e);
        return;
      }
      if (u = x(u), u.nodeType !== 9) {
        if (u.nodeType === 11) {
          e = "host" in u ? u.host : null, e !== null && e.scrollIntoView(t);
          return;
        }
        u.scrollIntoView(t);
      }
    }
    for (u = e ? l.length - 1 : 0; u !== (e ? -1 : l.length); ) {
      var a = l[u];
      a.tag === 6 ? (a = x(a), x0(a, e)) : x(a).scrollIntoView(t), u += e ? -1 : 1;
    }
  };
  function Pv(t, l) {
    return t = x(t), j0(t, l), !1;
  }
  function j0(t, l) {
    t.reactFragments == null && (t.reactFragments = /* @__PURE__ */ new Set()), t.reactFragments.add(l);
  }
  function B0(t, l) {
    var e = l._eventListeners;
    if (e !== null)
      for (var u = 0; u < e.length; u++) {
        var a = e[u];
        t.addEventListener(
          a.type,
          a.attachedListener,
          fa(a.optionsOrUseCapture)
        );
      }
    t.nodeType !== 3 && (e = l._observers, e !== null && e.forEach(function(n) {
      for (var i = 0, c = 0; c < Gl.length; c++) {
        var r = Gl[c];
        (r.fragmentInstance !== l || r.observer !== n || r.instance !== t) && (Gl[i++] = r);
      }
      Gl.length = i, n.observe(t);
    }), j0(t, l));
  }
  function t1(t, l) {
    var e = l._eventListeners;
    if (e !== null)
      for (var u = 0; u < e.length; u++) {
        var a = e[u];
        t.removeEventListener(
          a.type,
          a.attachedListener,
          fa(a.optionsOrUseCapture)
        );
      }
    t.nodeType !== 3 && (e = l._observers, e !== null && e.forEach(function(n) {
      typeof n.rootMargin == "string" ? Fv(
        l,
        n,
        t
      ) : n.unobserve(t);
    }), t.reactFragments != null && t.reactFragments.delete(l));
  }
  function ho(t) {
    var l = t.firstChild;
    for (l && l.nodeType === 10 && (l = l.nextSibling); l; ) {
      var e = l;
      switch (l = l.nextSibling, e.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          ho(e), zn(e);
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
  function l1(t, l, e, u) {
    for (; t.nodeType === 1; ) {
      var a = e;
      if (t.nodeName.toLowerCase() !== l.toLowerCase()) {
        if (!u && (t.nodeName !== "INPUT" || t.type !== "hidden"))
          break;
      } else if (u) {
        if (!t[ba])
          switch (l) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (n = t.getAttribute("rel"), n === "stylesheet" && t.hasAttribute("data-precedence"))
                break;
              if (n !== a.rel || t.getAttribute("href") !== (a.href == null || a.href === "" ? null : a.href) || t.getAttribute("crossorigin") !== (a.crossOrigin == null ? null : a.crossOrigin) || t.getAttribute("title") !== (a.title == null ? null : a.title))
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (n = t.getAttribute("src"), (n !== (a.src == null ? null : a.src) || t.getAttribute("type") !== (a.type == null ? null : a.type) || t.getAttribute("crossorigin") !== (a.crossOrigin == null ? null : a.crossOrigin)) && n && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
                break;
              return t;
            default:
              return t;
          }
      } else if (l === "input" && t.type === "hidden") {
        var n = a.name == null ? null : "" + a.name;
        if (a.type === "hidden" && t.getAttribute("name") === n)
          return t;
      } else return t;
      if (t = Dl(t.nextSibling), t === null) break;
    }
    return null;
  }
  function e1(t, l, e) {
    if (l === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = Dl(t.nextSibling), t === null)) return null;
    return t;
  }
  function Y0(t, l) {
    for (; t.nodeType !== 8; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !l || (t = Dl(t.nextSibling), t === null)) return null;
    return t;
  }
  function go(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function So(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
  }
  function u1(t, l) {
    var e = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = l;
    else if (t.data !== "$?" || e.readyState !== "loading")
      l();
    else {
      var u = function() {
        l(), e.removeEventListener("DOMContentLoaded", u);
      };
      e.addEventListener("DOMContentLoaded", u), t._reactRetry = u;
    }
  }
  function Dl(t) {
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
  var bo = null;
  function q0(t) {
    t = t.nextSibling;
    for (var l = 0; t; ) {
      if (t.nodeType === 8) {
        var e = t.data;
        if (e === "/$" || e === "/&") {
          if (l === 0)
            return Dl(t.nextSibling);
          l--;
        } else
          e !== "$" && e !== "$!" && e !== "$?" && e !== "$~" && e !== "&" || l++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function G0(t) {
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
  function a1(t, l) {
    function e() {
      u = !0;
    }
    if (t.ownerDocument.activeElement === t) return !0;
    var u = !1;
    try {
      t.ownerDocument.addEventListener("focus", e, !0), (t.focus || HTMLElement.prototype.focus).call(t, l);
    } finally {
      t.ownerDocument.removeEventListener("focus", e, !0);
    }
    return u;
  }
  function n1(t) {
    A0(function() {
      A0(function(l) {
        return t(l);
      });
    });
  }
  function X0(t, l, e) {
    switch (l = ln(e), t) {
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
  function Q0(t, l, e) {
    for (var u in e) {
      var a = e[u];
      e.hasOwnProperty(u) && a != null && vt(t, l, u, null, xv, a);
    }
    e.dangerouslySetInnerHTML != null && (t.textContent = ""), t.onclick === Ll && (t.onclick = null), zn(t);
  }
  function To(t) {
    for (var l = t.attributes; l.length; )
      t.removeAttributeNode(l[0]);
    zn(t);
  }
  var Ul = /* @__PURE__ */ new Map(), L0 = /* @__PURE__ */ new Set();
  function en(t) {
    if (typeof t.getRootNode == "function") {
      var l = t.getRootNode();
      if (l.nodeType === 9 || l.nodeType === 11) return l;
    }
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  var Se = J.d;
  J.d = {
    f: i1,
    r: c1,
    D: f1,
    C: o1,
    L: r1,
    m: s1,
    X: m1,
    S: d1,
    M: y1
  };
  function i1() {
    var t = Se.f(), l = Ai();
    return t || l;
  }
  function c1(t) {
    var l = Nu(t);
    l !== null && l.tag === 5 && l.type === "form" ? Vs(l) : Se.r(t);
  }
  var oa = typeof document > "u" ? null : document;
  function Z0(t, l, e) {
    var u = oa;
    if (u && typeof l == "string" && l) {
      var a = Ol(l);
      a = 'link[rel="' + t + '"][href="' + a + '"]', typeof e == "string" && (a += '[crossorigin="' + e + '"]'), L0.has(a) || (L0.add(a), t = { rel: t, crossOrigin: e, href: l }, u.querySelector(a) === null && (l = u.createElement("link"), Jt(l, "link", t), Bt(l), u.head.appendChild(l)));
    }
  }
  function f1(t) {
    Se.D(t), Z0("dns-prefetch", t, null);
  }
  function o1(t, l) {
    Se.C(t, l), Z0("preconnect", t, l);
  }
  function r1(t, l, e) {
    Se.L(t, l, e);
    var u = oa;
    if (u && t && l) {
      var a = 'link[rel="preload"][as="' + Ol(l) + '"]';
      l === "image" && e && e.imageSrcSet ? (a += '[imagesrcset="' + Ol(
        e.imageSrcSet
      ) + '"]', typeof e.imageSizes == "string" && (a += '[imagesizes="' + Ol(
        e.imageSizes
      ) + '"]')) : a += '[href="' + Ol(t) + '"]';
      var n = a;
      switch (l) {
        case "style":
          n = ra(t);
          break;
        case "script":
          n = sa(t);
      }
      if (!(Ul.has(n) || (t = I(
        {
          rel: "preload",
          href: l === "image" && e && e.imageSrcSet ? void 0 : t,
          as: l
        },
        e
      ), Ul.set(n, t), u.querySelector(a) !== null || l === "style" && u.querySelector(un(n)) || l === "script" && u.querySelector(an(n))))) {
        var i = u.createElement("link");
        Jt(i, "link", t), l === "style" && (i[En] = !0, i.onload = i.onerror = function() {
          er(i);
        }), Bt(i), u.head.appendChild(i);
      }
    }
  }
  function s1(t, l) {
    Se.m(t, l);
    var e = oa;
    if (e && t) {
      var u = l && typeof l.as == "string" ? l.as : "script", a = 'link[rel="modulepreload"][as="' + Ol(u) + '"][href="' + Ol(t) + '"]', n = a;
      switch (u) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = sa(t);
      }
      if (!Ul.has(n) && (t = I({ rel: "modulepreload", href: t }, l), Ul.set(n, t), e.querySelector(a) === null)) {
        switch (u) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (e.querySelector(an(n)))
              return;
        }
        u = e.createElement("link"), Jt(u, "link", t), Bt(u), e.head.appendChild(u);
      }
    }
  }
  function d1(t, l, e) {
    Se.S(t, l, e);
    var u = oa;
    if (u && t) {
      var a = Mu(u).hoistableStyles, n = ra(t);
      l = l || "default";
      var i = a.get(n);
      if (!i) {
        var c = { loading: 0, preload: null };
        if (i = u.querySelector(
          un(n)
        ))
          c.loading = 5;
        else {
          t = I(
            { rel: "stylesheet", href: t, "data-precedence": l },
            e
          ), (e = Ul.get(n)) && Eo(t, e);
          var r = i = u.createElement("link");
          Bt(r), Jt(r, "link", t), r._p = new Promise(function(h, T) {
            r.onload = h, r.onerror = T;
          }), r.addEventListener("load", function() {
            c.loading |= 1;
          }), r.addEventListener("error", function() {
            c.loading |= 2;
          }), c.loading |= 4, Ui(i, l, u);
        }
        i = {
          type: "stylesheet",
          instance: i,
          count: 1,
          state: c
        }, a.set(n, i);
      }
    }
  }
  function m1(t, l) {
    Se.X(t, l);
    var e = oa;
    if (e && t) {
      var u = Mu(e).hoistableScripts, a = sa(t), n = u.get(a);
      n || (n = e.querySelector(an(a)), n || (t = I({ src: t, async: !0 }, l), (l = Ul.get(a)) && zo(t, l), n = e.createElement("script"), Bt(n), Jt(n, "link", t), e.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, u.set(a, n));
    }
  }
  function y1(t, l) {
    Se.M(t, l);
    var e = oa;
    if (e && t) {
      var u = Mu(e).hoistableScripts, a = sa(t), n = u.get(a);
      n || (n = e.querySelector(an(a)), n || (t = I({ src: t, async: !0, type: "module" }, l), (l = Ul.get(a)) && zo(t, l), n = e.createElement("script"), Bt(n), Jt(n, "link", t), e.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, u.set(a, n));
    }
  }
  function V0(t, l, e, u) {
    var a = (a = ze.current) ? en(a) : null;
    if (!a) throw Error(o(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof e.precedence == "string" && typeof e.href == "string" ? (e = ra(e.href), l = Mu(
          a
        ).hoistableStyles, u = l.get(e), u || (u = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, l.set(e, u)), u) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (e.rel === "stylesheet" && typeof e.href == "string" && typeof e.precedence == "string") {
          t = ra(e.href);
          var n = Mu(
            a
          ).hoistableStyles, i = n.get(t);
          if (i || (a = a.ownerDocument || a, i = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, n.set(t, i), (n = a.querySelector(
            un(t)
          )) ? n._p || (i.instance = n, i.state.loading = 5) : (n = Ul.get(t), n || (n = {
            rel: "preload",
            as: "style",
            href: e.href,
            crossOrigin: e.crossOrigin,
            integrity: e.integrity,
            media: e.media,
            hrefLang: e.hrefLang,
            referrerPolicy: e.referrerPolicy
          }, Ul.set(t, n)), v1(
            a,
            t,
            n,
            i.state
          ))), l && u === null)
            throw Error(o(528, ""));
          return i;
        }
        if (l && u !== null)
          throw Error(o(529, ""));
        return null;
      case "script":
        return l = e.async, e = e.src, typeof e == "string" && l && typeof l != "function" && typeof l != "symbol" ? (e = sa(e), l = Mu(
          a
        ).hoistableScripts, u = l.get(e), u || (u = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, l.set(e, u)), u) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(o(444, t));
    }
  }
  function ra(t) {
    return 'href="' + Ol(t) + '"';
  }
  function un(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function K0(t) {
    return I({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function v1(t, l, e, u) {
    if (l = t.querySelector(
      'link[rel="preload"][as="style"][' + l + "]"
    )) {
      if (l[En] !== !0) {
        u.loading = 1;
        return;
      }
    } else
      l = t.createElement("link"), l[En] = !0, l.onload = l.onerror = er.bind(null, l), Jt(l, "link", e), Bt(l), t.head.appendChild(l);
    u.preload = l, l.addEventListener("load", function() {
      return u.loading |= 1;
    }), l.addEventListener("error", function() {
      return u.loading |= 2;
    });
  }
  function sa(t) {
    return '[src="' + Ol(t) + '"]';
  }
  function an(t) {
    return "script[async]" + t;
  }
  function J0(t, l, e) {
    if (l.count++, l.instance === null)
      switch (l.type) {
        case "style":
          var u = t.querySelector(
            'style[data-href~="' + Ol(e.href) + '"]'
          );
          if (u)
            return l.instance = u, Bt(u), u;
          var a = I({}, e, {
            "data-href": e.href,
            "data-precedence": e.precedence,
            href: null,
            precedence: null
          });
          return u = (t.ownerDocument || t).createElement(
            "style"
          ), Bt(u), Jt(u, "style", a), Ui(u, e.precedence, t), l.instance = u;
        case "stylesheet":
          a = ra(e.href);
          var n = t.querySelector(
            un(a)
          );
          if (n)
            return l.state.loading |= 4, l.instance = n, Bt(n), n;
          u = K0(e), (a = Ul.get(a)) && Eo(u, a), n = (t.ownerDocument || t).createElement("link"), Bt(n);
          var i = n;
          return i._p = new Promise(function(c, r) {
            i.onload = c, i.onerror = r;
          }), Jt(n, "link", u), l.state.loading |= 4, Ui(n, e.precedence, t), l.instance = n;
        case "script":
          return n = sa(e.src), (a = t.querySelector(
            an(n)
          )) ? (l.instance = a, Bt(a), a) : (u = e, (a = Ul.get(n)) && (u = I({}, e), zo(u, a)), t = t.ownerDocument || t, a = t.createElement("script"), Bt(a), Jt(a, "link", u), t.head.appendChild(a), l.instance = a);
        case "void":
          return null;
        default:
          throw Error(o(443, l.type));
      }
    else
      l.type === "stylesheet" && (l.state.loading & 4) === 0 && (u = l.instance, l.state.loading |= 4, Ui(u, e.precedence, t));
    return l.instance;
  }
  function Ui(t, l, e) {
    for (var u = e.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), a = u.length ? u[u.length - 1] : null, n = a, i = 0; i < u.length; i++) {
      var c = u[i];
      if (c.dataset.precedence === l) n = c;
      else if (n !== a) break;
    }
    n ? n.parentNode.insertBefore(t, n.nextSibling) : (l = e.nodeType === 9 ? e.head : e, l.insertBefore(t, l.firstChild));
  }
  function Eo(t, l) {
    t.crossOrigin == null && (t.crossOrigin = l.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = l.referrerPolicy), t.title == null && (t.title = l.title);
  }
  function zo(t, l) {
    t.crossOrigin == null && (t.crossOrigin = l.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = l.referrerPolicy), t.integrity == null && (t.integrity = l.integrity);
  }
  var Hi = null;
  function w0(t, l, e) {
    if (Hi === null) {
      var u = /* @__PURE__ */ new Map(), a = Hi = /* @__PURE__ */ new Map();
      a.set(e, u);
    } else
      a = Hi, u = a.get(e), u || (u = /* @__PURE__ */ new Map(), a.set(e, u));
    if (u.has(t)) return u;
    for (u.set(t, null), e = e.getElementsByTagName(t), a = 0; a < e.length; a++) {
      var n = e[a];
      if (!(n[ba] || n[Qt] || t === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
        var i = n.getAttribute(l) || "";
        i = t + i;
        var c = u.get(i);
        c ? c.push(n) : u.set(i, [n]);
      }
    }
    return u;
  }
  function po(t, l, e) {
    t = t.ownerDocument || t, t.head.insertBefore(
      e,
      l === "title" ? t.querySelector("head > title") : null
    );
  }
  function h1(t, l, e) {
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
  function W0(t, l) {
    return t === "img" && l.src != null && l.src !== "" && l.onLoad == null && l.loading !== "lazy";
  }
  function $0(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function F0(t) {
    return (t.width || 100) * (t.height || 100) * (typeof devicePixelRatio == "number" ? devicePixelRatio : 1) * 0.25;
  }
  function I0(t, l) {
    typeof l.decode == "function" && (t.imgCount++, l.complete || (t.imgBytes += F0(l), t.suspenseyImages.push(l)), t = b1.bind(t), l.decode().then(t, t));
  }
  function g1(t, l, e, u) {
    if (e.type === "stylesheet" && (typeof u.media != "string" || matchMedia(u.media).matches !== !1) && (e.state.loading & 4) === 0) {
      if (e.instance === null) {
        var a = ra(u.href), n = l.querySelector(
          un(a)
        );
        if (n) {
          l = n._p, l !== null && typeof l == "object" && typeof l.then == "function" && (t.count++, t = nn.bind(t), l.then(t, t)), e.state.loading |= 4, e.instance = n, Bt(n);
          return;
        }
        n = l.ownerDocument || l, u = K0(u), (a = Ul.get(a)) && Eo(u, a), n = n.createElement("link"), Bt(n);
        var i = n;
        i._p = new Promise(function(c, r) {
          i.onload = c, i.onerror = r;
        }), Jt(n, "link", u), e.instance = n;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(e, l), (l = e.state.preload) && (e.state.loading & 3) === 0 && (t.count++, e = nn.bind(t), l.addEventListener("load", e), l.addEventListener("error", e));
    }
  }
  var xi = 0;
  function S1(t, l) {
    return t.stylesheets && t.count === 0 && Bi(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(e) {
      var u = setTimeout(function() {
        if (t.stylesheets && Bi(t, t.stylesheets), t.unsuspend) {
          var n = t.unsuspend;
          t.unsuspend = null, n();
        }
      }, 6e4 + l);
      0 < t.imgBytes && xi === 0 && (xi = 62500 * Bv());
      var a = setTimeout(
        function() {
          if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && Bi(t, t.stylesheets), t.unsuspend)) {
            var n = t.unsuspend;
            t.unsuspend = null, n();
          }
        },
        (t.imgBytes > xi ? 50 : 800) + l
      );
      return t.unsuspend = e, function() {
        t.unsuspend = null, clearTimeout(u), clearTimeout(a);
      };
    } : null;
  }
  function k0(t) {
    if (t.count === 0 && (t.imgCount === 0 || !t.waitingForImages)) {
      if (t.stylesheets) Bi(t, t.stylesheets);
      else if (t.unsuspend) {
        var l = t.unsuspend;
        t.unsuspend = null, l();
      }
    }
  }
  function nn() {
    this.count--, k0(this);
  }
  function b1() {
    this.imgCount--, k0(this);
  }
  var ji = null;
  function Bi(t, l) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, ji = /* @__PURE__ */ new Map(), l.forEach(T1, t), ji = null, nn.call(t));
  }
  function T1(t, l) {
    if (!(l.state.loading & 4)) {
      var e = ji.get(t);
      if (e) var u = e.get(null);
      else {
        e = /* @__PURE__ */ new Map(), ji.set(t, e);
        for (var a = t.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), n = 0; n < a.length; n++) {
          var i = a[n];
          (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") && (e.set(i.dataset.precedence, i), u = i);
        }
        u && e.set(null, u);
      }
      a = l.instance, i = a.getAttribute("data-precedence"), n = e.get(i) || u, n === u && e.set(null, a), e.set(i, a), this.count++, u = nn.bind(this), a.addEventListener("load", u), a.addEventListener("error", u), n ? n.parentNode.insertBefore(a, n.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(a, t.firstChild)), l.state.loading |= 4;
    }
  }
  var da = {
    $$typeof: jt,
    Provider: null,
    Consumer: null,
    _currentValue: ue,
    _currentValue2: ue,
    _threadCount: 0
  };
  function E1(t, l, e, u, a, n, i, c, r) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = lc(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = lc(0), this.hiddenUpdates = lc(null), this.identifierPrefix = u, this.onUncaughtError = a, this.onCaughtError = n, this.onRecoverableError = i, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = r, this.transitionTypes = null, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function P0(t, l, e, u, a, n, i, c, r, h, T, p) {
    return t = new E1(
      t,
      l,
      e,
      i,
      r,
      h,
      T,
      p,
      c
    ), l = 1, n === !0 && (l |= 24), n = al(3, null, null, l), t.current = n, n.stateNode = t, l = Bc(), l.refCount++, t.pooledCache = l, l.refCount++, n.memoizedState = {
      element: u,
      isDehydrated: e,
      cache: l
    }, Xc(n), t;
  }
  function tm(t) {
    return t ? (t = qu, t) : qu;
  }
  function lm(t, l, e, u, a, n) {
    a = tm(a), u.context === null ? u.context = a : u.pendingContext = a, u = He(l), u.payload = { element: e }, n = n === void 0 ? null : n, n !== null && (u.callback = n), e = xe(t, u, l), e !== null && (fl(e, t, l), Ba(e, t, l));
  }
  function em(t, l) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var e = t.retryLane;
      t.retryLane = e !== 0 && e < l ? e : l;
    }
  }
  function Oo(t, l) {
    em(t, l), (t = t.alternate) && em(t, l);
  }
  function um(t) {
    if (t.tag === 13 || t.tag === 31) {
      var l = nu(t, 67108864);
      l !== null && fl(l, t, 67108864), Oo(t, 67108864);
    }
  }
  function am(t) {
    if (t.tag === 13 || t.tag === 31) {
      var l = bl();
      l = ec(l);
      var e = nu(t, l);
      e !== null && fl(e, t, l), Oo(t, l);
    }
  }
  var ma = !0;
  function z1(t, l, e, u) {
    var a = B.T;
    B.T = null;
    var n = J.p;
    try {
      J.p = 2, Ao(t, l, e, u);
    } finally {
      J.p = n, B.T = a;
    }
  }
  function p1(t, l, e, u) {
    var a = B.T;
    B.T = null;
    var n = J.p;
    try {
      J.p = 8, Ao(t, l, e, u);
    } finally {
      J.p = n, B.T = a;
    }
  }
  function Ao(t, l, e, u) {
    if (ma) {
      var a = _o(u);
      if (a === null)
        no(
          t,
          l,
          u,
          Yi,
          e
        ), im(t, u);
      else if (A1(
        a,
        t,
        l,
        e,
        u
      ))
        u.stopPropagation();
      else if (im(t, u), l & 4 && -1 < O1.indexOf(t)) {
        for (; a !== null; ) {
          var n = Nu(a);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (n = n.stateNode, n.current.memoizedState.isDehydrated) {
                  var i = tu(n.pendingLanes);
                  if (i !== 0) {
                    var c = n;
                    for (c.pendingLanes |= 2, c.entangledLanes |= 2; i; ) {
                      var r = 1 << 31 - dl(i);
                      c.entanglements[1] |= r, i &= ~r;
                    }
                    kl(n), (ot & 6) === 0 && (zi = rl() + 500, ka(0));
                  }
                }
                break;
              case 31:
              case 13:
                c = nu(n, 2), c !== null && fl(c, n, 2), Ai(), Oo(n, 2);
            }
          if (n = _o(u), n === null && no(
            t,
            l,
            u,
            Yi,
            e
          ), n === a) break;
          a = n;
        }
        a !== null && u.stopPropagation();
      } else
        no(
          t,
          l,
          u,
          null,
          e
        );
    }
  }
  function _o(t) {
    return t = oc(t), No(t);
  }
  var Yi = null;
  function No(t) {
    if (Yi = null, t = lu(t), t !== null) {
      var l = _(t);
      if (l === null) t = null;
      else {
        var e = l.tag;
        if (e === 13) {
          if (t = U(l), t !== null) return t;
          t = null;
        } else if (e === 31) {
          if (t = Y(l), t !== null) return t;
          t = null;
        } else if (e === 3) {
          if (l.stateNode.current.memoizedState.isDehydrated)
            return l.tag === 3 ? l.stateNode.containerInfo : null;
          t = null;
        } else l !== t && (t = null);
      }
    }
    return Yi = t, null;
  }
  function nm(t) {
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
        switch (Bm()) {
          case Vo:
            return 2;
          case Ko:
            return 8;
          case hn:
          case Ym:
            return 32;
          case Jo:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Mo = !1, Je = null, we = null, We = null, cn = /* @__PURE__ */ new Map(), fn = /* @__PURE__ */ new Map(), $e = [], O1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function im(t, l) {
    switch (t) {
      case "focusin":
      case "focusout":
        Je = null;
        break;
      case "dragenter":
      case "dragleave":
        we = null;
        break;
      case "mouseover":
      case "mouseout":
        We = null;
        break;
      case "pointerover":
      case "pointerout":
        cn.delete(l.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        fn.delete(l.pointerId);
    }
  }
  function on(t, l, e, u, a, n) {
    return t === null || t.nativeEvent !== n ? (t = {
      blockedOn: l,
      domEventName: e,
      eventSystemFlags: u,
      nativeEvent: n,
      targetContainers: [a]
    }, l !== null && (l = Nu(l), l !== null && um(l)), t) : (t.eventSystemFlags |= u, l = t.targetContainers, a !== null && l.indexOf(a) === -1 && l.push(a), t);
  }
  function A1(t, l, e, u, a) {
    switch (l) {
      case "focusin":
        return Je = on(
          Je,
          t,
          l,
          e,
          u,
          a
        ), !0;
      case "dragenter":
        return we = on(
          we,
          t,
          l,
          e,
          u,
          a
        ), !0;
      case "mouseover":
        return We = on(
          We,
          t,
          l,
          e,
          u,
          a
        ), !0;
      case "pointerover":
        var n = a.pointerId;
        return cn.set(
          n,
          on(
            cn.get(n) || null,
            t,
            l,
            e,
            u,
            a
          )
        ), !0;
      case "gotpointercapture":
        return n = a.pointerId, fn.set(
          n,
          on(
            fn.get(n) || null,
            t,
            l,
            e,
            u,
            a
          )
        ), !0;
    }
    return !1;
  }
  function cm(t) {
    var l = lu(t.target);
    if (l !== null) {
      var e = _(l);
      if (e !== null) {
        if (l = e.tag, l === 13) {
          if (l = U(e), l !== null) {
            t.blockedOn = l, Po(t.priority, function() {
              am(e);
            });
            return;
          }
        } else if (l === 31) {
          if (l = Y(e), l !== null) {
            t.blockedOn = l, Po(t.priority, function() {
              am(e);
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
  function qi(t) {
    if (t.blockedOn !== null) return !1;
    for (var l = t.targetContainers; 0 < l.length; ) {
      var e = _o(t.nativeEvent);
      if (e === null) {
        e = t.nativeEvent;
        var u = new e.constructor(
          e.type,
          e
        );
        fc = u, e.target.dispatchEvent(u), fc = null;
      } else
        return l = Nu(e), l !== null && um(l), t.blockedOn = e, !1;
      l.shift();
    }
    return !0;
  }
  function fm(t, l, e) {
    qi(t) && e.delete(l);
  }
  function _1() {
    Mo = !1, Je !== null && qi(Je) && (Je = null), we !== null && qi(we) && (we = null), We !== null && qi(We) && (We = null), cn.forEach(fm), fn.forEach(fm);
  }
  function Gi(t, l) {
    t.blockedOn === l && (t.blockedOn = null, Mo || (Mo = !0, f.unstable_scheduleCallback(
      f.unstable_NormalPriority,
      _1
    )));
  }
  var Xi = null;
  function om(t) {
    Xi !== t && (Xi = t, f.unstable_scheduleCallback(
      f.unstable_NormalPriority,
      function() {
        Xi === t && (Xi = null);
        for (var l = 0; l < t.length; l += 3) {
          var e = t[l], u = t[l + 1], a = t[l + 2];
          if (typeof u != "function") {
            if (No(u || e) === null)
              continue;
            break;
          }
          var n = Nu(e);
          n !== null && (t.splice(l, 3), l -= 3, ff(
            n,
            {
              pending: !0,
              data: a,
              method: e.method,
              action: u
            },
            u,
            a
          ));
        }
      }
    ));
  }
  function ya(t) {
    function l(r) {
      return Gi(r, t);
    }
    Je !== null && Gi(Je, t), we !== null && Gi(we, t), We !== null && Gi(We, t), cn.forEach(l), fn.forEach(l);
    for (var e = 0; e < $e.length; e++) {
      var u = $e[e];
      u.blockedOn === t && (u.blockedOn = null);
    }
    for (; 0 < $e.length && (e = $e[0], e.blockedOn === null); )
      cm(e), e.blockedOn === null && $e.shift();
    if (e = (t.ownerDocument || t).$$reactFormReplay, e != null)
      for (u = 0; u < e.length; u += 3) {
        var a = e[u], n = e[u + 1], i = a[ul] || null;
        if (typeof n == "function")
          i || om(e);
        else if (i) {
          var c = null;
          if (n && n.hasAttribute("formAction")) {
            if (a = n, i = n[ul] || null)
              c = i.formAction;
            else if (No(a) !== null) continue;
          } else c = i.action;
          typeof c == "function" ? e[u + 1] = c : (e.splice(u, 3), u -= 3), om(e);
        }
      }
  }
  function rm() {
    function t(n) {
      n.canIntercept && n.info === "react-transition" && n.intercept({
        handler: function() {
          return new Promise(function(i) {
            return a = i;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function l() {
      a !== null && (a(), a = null), u || setTimeout(e, 20);
    }
    function e() {
      if (!u && !navigation.transition) {
        var n = navigation.currentEntry;
        n && n.url != null && navigation.navigate(n.url, {
          state: n.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var u = !1, a = null;
      return navigation.addEventListener("navigate", t), navigation.addEventListener("navigatesuccess", l), navigation.addEventListener("navigateerror", l), setTimeout(e, 100), function() {
        u = !0, navigation.removeEventListener("navigate", t), navigation.removeEventListener("navigatesuccess", l), navigation.removeEventListener("navigateerror", l), a !== null && (a(), a = null);
      };
    }
  }
  function Co(t) {
    this._internalRoot = t;
  }
  Qi.prototype.render = Co.prototype.render = function(t) {
    var l = this._internalRoot;
    if (l === null) throw Error(o(409));
    var e = l.current, u = bl();
    lm(e, u, t, l, null, null);
  }, Qi.prototype.unmount = Co.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var l = t.containerInfo;
      lm(t.current, 2, null, t, null, null), Ai(), l[_u] = null;
    }
  };
  function Qi(t) {
    this._internalRoot = t;
  }
  Qi.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var l = ko();
      t = { blockedOn: null, target: t, priority: l };
      for (var e = 0; e < $e.length && l !== 0 && l < $e[e].priority; e++) ;
      $e.splice(e, 0, t), e === 0 && cm(t);
    }
  };
  var sm = d.version;
  if (sm !== "19.3.0")
    throw Error(
      o(
        527,
        sm,
        "19.3.0"
      )
    );
  J.findDOMNode = function(t) {
    var l = t._reactInternals;
    if (l === void 0)
      throw typeof t.render == "function" ? Error(o(188)) : (t = Object.keys(t).join(","), Error(o(268, t)));
    return t = F(l), t = t !== null ? C(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var N1 = {
    bundleType: 0,
    version: "19.3.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: B,
    reconcilerVersion: "19.3.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Li = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Li.isDisabled && Li.supportsFiber)
      try {
        ha = Li.inject(
          N1
        ), sl = Li;
      } catch {
      }
  }
  return sn.createRoot = function(t, l) {
    if (!O(t)) throw Error(o(299));
    var e = !1, u = "", a = td, n = ld, i = ed;
    return l != null && (l.unstable_strictMode === !0 && (e = !0), l.identifierPrefix !== void 0 && (u = l.identifierPrefix), l.onUncaughtError !== void 0 && (a = l.onUncaughtError), l.onCaughtError !== void 0 && (n = l.onCaughtError), l.onRecoverableError !== void 0 && (i = l.onRecoverableError)), l = P0(
      t,
      1,
      !1,
      null,
      null,
      e,
      u,
      null,
      a,
      n,
      i,
      rm
    ), t[_u] = l.current, ao(t), new Co(l);
  }, sn.hydrateRoot = function(t, l, e) {
    if (!O(t)) throw Error(o(299));
    var u = !1, a = "", n = td, i = ld, c = ed, r = null;
    return e != null && (e.unstable_strictMode === !0 && (u = !0), e.identifierPrefix !== void 0 && (a = e.identifierPrefix), e.onUncaughtError !== void 0 && (n = e.onUncaughtError), e.onCaughtError !== void 0 && (i = e.onCaughtError), e.onRecoverableError !== void 0 && (c = e.onRecoverableError), e.formState !== void 0 && (r = e.formState)), l = P0(
      t,
      1,
      !0,
      l,
      e ?? null,
      u,
      a,
      r,
      n,
      i,
      c,
      rm
    ), l.context = tm(null), e = l.current, u = bl(), u = ec(u), a = He(u), a.callback = null, xe(e, a, u), e = u, l.current.lanes = e, Sa(l, e), kl(l), t[_u] = l.current, ao(t), new Qi(l);
  }, sn.version = "19.3.0", sn;
}
var Em;
function G1() {
  if (Em) return Uo.exports;
  Em = 1;
  function f() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f);
      } catch (d) {
        console.error(d);
      }
  }
  return f(), Uo.exports = q1(), Uo.exports;
}
var X1 = G1();
function Q1(f) {
  return f && typeof f == "object" ? f : typeof window > "u" ? null : window;
}
function zm({
  snapshot: f,
  ownSeat: d = null,
  replayIndex: g = null,
  flipVertical: o = !1
} = {}) {
  const O = f && typeof f == "object" && !Array.isArray(f) ? { ...f } : {};
  return {
    ...O,
    boardCode: String(O.boardCode || ""),
    version: Number.isFinite(Number(O.version)) ? Number(O.version) : 0,
    ownSeat: d,
    replayIndex: g,
    flipVertical: !!o
  };
}
function L1({
  node: f,
  snapshot: d,
  ownSeat: g,
  replayIndex: o,
  flipVertical: O,
  onMoveClick: _,
  elmRuntime: U
} = {}) {
  const G = Q1(U)?.Elm?.BoardIsland?.init;
  if (typeof G != "function" || !f)
    return {
      app: null,
      sendSnapshotUpdate: () => {
      },
      cleanup: () => {
      }
    };
  const F = zm({
    snapshot: d,
    ownSeat: g,
    replayIndex: o,
    flipVertical: O
  }), C = G({ node: f, flags: F }), E = C?.ports?.boardMoveClicked, j = C?.ports?.boardSnapshot, dt = (x) => {
    typeof _ == "function" && _(x);
  };
  return typeof E?.subscribe == "function" && E.subscribe(dt), { app: C, sendSnapshotUpdate: (x) => {
    typeof j?.send == "function" && j.send(zm(x));
  }, cleanup: () => {
    typeof E?.unsubscribe == "function" && E.unsubscribe(dt), typeof C?.unmount == "function" && C.unmount();
  } };
}
function Z1({
  snapshot: f,
  ownSeat: d,
  replayIndex: g,
  flipVertical: o,
  onMoveClick: O
}) {
  const _ = El.useRef(null), U = El.useRef(null), Y = El.useRef(O);
  Y.current = O;
  const G = El.useMemo(
    () => ({ snapshot: f, ownSeat: d, replayIndex: g, flipVertical: o }),
    [f, d, g, o]
  );
  return El.useEffect(() => (U.current = L1({
    node: _.current,
    ...G,
    onMoveClick: (F) => Y.current?.(F)
  }), () => {
    U.current?.cleanup?.(), U.current = null;
  }), []), El.useEffect(() => {
    U.current?.sendSnapshotUpdate?.(G);
  }, [G]), /* @__PURE__ */ N.jsx("div", { ref: _, "data-testid": "elm-board-island-host" });
}
const V1 = {
  marginTop: "20px",
  padding: "18px",
  borderRadius: "20px",
  background: "#f7fbf7",
  border: "1px solid rgba(16, 42, 26, 0.08)"
}, K1 = {
  display: "flex",
  justifyContent: "space-between",
  gap: "12px",
  alignItems: "flex-start",
  flexWrap: "wrap"
}, J1 = {
  margin: 0,
  fontSize: "1.25rem"
}, pm = {
  margin: "4px 0 0",
  fontSize: "0.9rem",
  color: "#567062"
}, w1 = {
  display: "inline-flex",
  alignItems: "center",
  gap: "8px",
  borderRadius: "999px",
  padding: "8px 12px",
  background: "rgba(16, 42, 26, 0.08)",
  fontWeight: 700
}, W1 = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))",
  gap: "12px",
  marginTop: "16px"
}, $1 = {
  padding: "14px",
  borderRadius: "16px",
  background: "#ffffff",
  border: "1px solid rgba(16, 42, 26, 0.08)"
}, Pl = {
  margin: 0,
  fontSize: "0.78rem",
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  color: "#567062"
}, te = {
  margin: "8px 0 0",
  fontSize: "1rem",
  fontWeight: 700,
  wordBreak: "break-word"
}, F1 = {
  marginTop: "16px",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: "10px 16px"
}, be = {
  paddingTop: "10px",
  borderTop: "1px solid rgba(16, 42, 26, 0.08)"
}, I1 = {
  display: "flex",
  gap: "10px",
  marginTop: "16px",
  flexWrap: "wrap"
}, dn = (f = !1) => ({
  border: "1px solid rgba(16, 42, 26, 0.12)",
  borderRadius: "999px",
  padding: "8px 14px",
  background: f ? "#fff1f1" : "#f7fbf7",
  color: f ? "#9b1c1c" : "#102a1a",
  fontWeight: 700,
  cursor: "pointer"
}), k1 = {
  margin: "8px 0 0",
  paddingLeft: "18px",
  color: "#33513f"
};
function Cm(f) {
  return f === "p1" ? "Blue" : f === "p2" ? "Red" : "Unknown";
}
function P1(f) {
  const d = String(f || "").trim();
  return d === "vacant" ? "Open" : d === "disconnected" ? "Disconnected" : d === "active" ? "Occupied" : d || "Unknown";
}
function th(f, d) {
  return f === "p1" ? "Blue" : f === "p2" ? "Red" : d ? "Waiting List" : "Watching";
}
function lh(f) {
  return `${Number(f?.p1 || 0)} - ${Number(f?.p2 || 0)}`;
}
function eh(f) {
  if (Array.isArray(f?.moves)) return f.moves.length;
  const d = Number(f?.moveCount);
  return Number.isFinite(d) ? d : 0;
}
function uh(f) {
  const d = Math.max(0, Math.ceil(Number(f || 0) / 1e3));
  if (d < 60) return `${d}s`;
  const g = Math.ceil(d / 60);
  if (g < 60) return `${g}m`;
  const o = Math.ceil(g / 60);
  return o < 24 ? `${o}h` : `${Math.ceil(o / 24)}d`;
}
function Go(f, d, g) {
  const o = Number(f);
  if (!Number.isFinite(o) || o <= 0) return null;
  const O = o - Number(d || 0), _ = uh(Math.abs(O));
  return g === "future" ? O >= 0 ? `in ${_}` : `${_} ago` : O <= 0 ? `${_} ago` : `in ${_}`;
}
function ah(f, d) {
  const g = Number(f?.moveTimeLimitMs);
  if (!Number.isFinite(g) || g <= 0) return "Untimed";
  const o = `${Math.round(g / 1e3)}s per move`, O = Number(f?.turnStartedAt);
  if (!Number.isFinite(O) || O <= 0) return o;
  const _ = O + g, U = Go(_, d, "future");
  return U ? `${o} • deadline ${U}` : o;
}
function nh(f) {
  const d = Number(f?.watcherCount);
  return Number.isFinite(d) && d >= 0 ? d : null;
}
function Om(f, d) {
  const g = f?.[d] || {}, o = P1(g.status);
  return {
    id: d,
    label: `${Cm(d)} seat`,
    name: o === "Open" ? null : String(g.name || "").trim() || null,
    status: o
  };
}
function ih({
  snapshot: f,
  ownSeat: d = null,
  connectionStatus: g = "idle",
  isWaitingListMember: o = !1,
  claimableSeatActions: O = [],
  leaveSeatAction: _ = null,
  waitingListAction: U = null,
  pauseResumeActions: Y = [],
  newRoundAction: G = null,
  nowMs: F = Date.now()
} = {}) {
  if (!f || typeof f != "object") return null;
  const C = f.game && typeof f.game == "object" ? f.game : {}, E = C.players && typeof C.players == "object" ? C.players : {}, j = Array.isArray(C.waitingList) ? C.waitingList : [], dt = String(f.boardCode || C.roomId || "").trim(), _t = String(C.turn || "").trim();
  return {
    boardCode: dt,
    connectionStatus: String(g || "idle"),
    viewerRole: th(String(d || "").trim(), o),
    seats: [Om(E, "p1"), Om(E, "p2")],
    sessionState: String(C.status || "waiting"),
    currentTurn: _t ? Cm(_t) : "Waiting",
    score: lh(C.score),
    moveCount: eh(C),
    timerSummary: ah(C, F),
    waitingListCount: j.length,
    waitingListNames: j.map((Nt) => String(Nt?.displayName || "").trim()).filter(Boolean),
    watcherCount: nh(C),
    lastActivity: Go(C.lastActivityAt, F, "past"),
    expiry: Go(C.expiresAt, F, "future"),
    actions: {
      claimableSeatActions: Array.isArray(O) ? O : [],
      leaveSeatAction: _,
      waitingListAction: U,
      pauseResumeActions: Array.isArray(Y) ? Y : [],
      newRoundAction: G
    }
  };
}
function Am({ label: f, value: d, children: g }) {
  return /* @__PURE__ */ N.jsxs("article", { style: $1, children: [
    /* @__PURE__ */ N.jsx("p", { style: Pl, children: f }),
    /* @__PURE__ */ N.jsx("p", { style: te, children: d }),
    g
  ] });
}
function ch({
  snapshot: f,
  ownSeat: d,
  connectionStatus: g,
  isWaitingListMember: o,
  claimableSeatActions: O,
  leaveSeatAction: _,
  waitingListAction: U,
  pauseResumeActions: Y,
  newRoundAction: G,
  onClaimSeat: F,
  onLeaveSeat: C,
  onWaitingListAction: E,
  onPauseAction: j,
  onResumeAction: dt,
  onNewRoundAction: _t,
  nowMs: Nt
}) {
  const x = ih({
    snapshot: f,
    ownSeat: d,
    connectionStatus: g,
    isWaitingListMember: o,
    claimableSeatActions: O,
    leaveSeatAction: _,
    waitingListAction: U,
    pauseResumeActions: Y,
    newRoundAction: G,
    nowMs: Nt
  });
  return x ? /* @__PURE__ */ N.jsxs("section", { style: V1, "aria-label": "Match details", children: [
    /* @__PURE__ */ N.jsxs("div", { style: K1, children: [
      /* @__PURE__ */ N.jsxs("div", { children: [
        /* @__PURE__ */ N.jsx("h2", { style: J1, children: "Match details" }),
        /* @__PURE__ */ N.jsxs("p", { style: pm, children: [
          "Board ",
          x.boardCode || "not selected"
        ] })
      ] }),
      /* @__PURE__ */ N.jsx("div", { style: w1, children: x.viewerRole })
    ] }),
    /* @__PURE__ */ N.jsxs("div", { style: W1, children: [
      /* @__PURE__ */ N.jsx(Am, { label: "Connection Status", value: x.connectionStatus }),
      x.seats.map((ct) => /* @__PURE__ */ N.jsx(
        Am,
        {
          label: ct.label,
          value: ct.name || ct.status,
          children: /* @__PURE__ */ N.jsxs("p", { style: pm, children: [
            "Status: ",
            ct.status
          ] })
        },
        ct.id
      ))
    ] }),
    /* @__PURE__ */ N.jsxs("div", { style: F1, children: [
      /* @__PURE__ */ N.jsxs("div", { style: be, children: [
        /* @__PURE__ */ N.jsx("p", { style: Pl, children: "Session State" }),
        /* @__PURE__ */ N.jsx("p", { style: te, children: x.sessionState })
      ] }),
      /* @__PURE__ */ N.jsxs("div", { style: be, children: [
        /* @__PURE__ */ N.jsx("p", { style: Pl, children: "Current Turn" }),
        /* @__PURE__ */ N.jsx("p", { style: te, children: x.currentTurn })
      ] }),
      /* @__PURE__ */ N.jsxs("div", { style: be, children: [
        /* @__PURE__ */ N.jsx("p", { style: Pl, children: "Score" }),
        /* @__PURE__ */ N.jsx("p", { style: te, children: x.score })
      ] }),
      /* @__PURE__ */ N.jsxs("div", { style: be, children: [
        /* @__PURE__ */ N.jsx("p", { style: Pl, children: "Move Count" }),
        /* @__PURE__ */ N.jsx("p", { style: te, children: x.moveCount })
      ] }),
      /* @__PURE__ */ N.jsxs("div", { style: be, children: [
        /* @__PURE__ */ N.jsx("p", { style: Pl, children: "Move Timer" }),
        /* @__PURE__ */ N.jsx("p", { style: te, children: x.timerSummary })
      ] }),
      /* @__PURE__ */ N.jsxs("div", { style: be, children: [
        /* @__PURE__ */ N.jsx("p", { style: Pl, children: "Waiting List" }),
        /* @__PURE__ */ N.jsx("p", { style: te, children: x.waitingListCount }),
        x.waitingListNames.length > 0 ? /* @__PURE__ */ N.jsx("ul", { style: k1, children: x.waitingListNames.map((ct) => /* @__PURE__ */ N.jsx("li", { children: ct }, ct)) }) : null
      ] }),
      x.watcherCount !== null ? /* @__PURE__ */ N.jsxs("div", { style: be, children: [
        /* @__PURE__ */ N.jsx("p", { style: Pl, children: "Watchers" }),
        /* @__PURE__ */ N.jsx("p", { style: te, children: x.watcherCount })
      ] }) : null,
      x.lastActivity ? /* @__PURE__ */ N.jsxs("div", { style: be, children: [
        /* @__PURE__ */ N.jsx("p", { style: Pl, children: "Last Activity" }),
        /* @__PURE__ */ N.jsx("p", { style: te, children: x.lastActivity })
      ] }) : null,
      x.expiry ? /* @__PURE__ */ N.jsxs("div", { style: be, children: [
        /* @__PURE__ */ N.jsx("p", { style: Pl, children: "Expires" }),
        /* @__PURE__ */ N.jsx("p", { style: te, children: x.expiry })
      ] }) : null
    ] }),
    /* @__PURE__ */ N.jsxs("div", { style: I1, children: [
      x.actions.claimableSeatActions.map((ct) => /* @__PURE__ */ N.jsx(
        "button",
        {
          type: "button",
          style: dn(!1),
          onClick: () => F?.(ct.seatId),
          children: ct.label
        },
        ct.seatId
      )),
      x.actions.leaveSeatAction ? /* @__PURE__ */ N.jsx(
        "button",
        {
          type: "button",
          style: dn(!!x.actions.leaveSeatAction.danger),
          onClick: () => C?.(),
          children: x.actions.leaveSeatAction.label
        }
      ) : null,
      x.actions.waitingListAction ? /* @__PURE__ */ N.jsx(
        "button",
        {
          type: "button",
          style: dn(!1),
          onClick: () => E?.(x.actions.waitingListAction.type),
          children: x.actions.waitingListAction.label
        }
      ) : null,
      x.actions.pauseResumeActions.map((ct) => /* @__PURE__ */ N.jsx(
        "button",
        {
          type: "button",
          style: dn(!1),
          onClick: () => {
            if (ct.type === "pause") {
              j?.("pause");
              return;
            }
            dt?.("resume");
          },
          children: ct.label
        },
        ct.type
      )),
      x.actions.newRoundAction ? /* @__PURE__ */ N.jsx(
        "button",
        {
          type: "button",
          style: dn(!1),
          onClick: () => _t?.(),
          children: x.actions.newRoundAction.label
        }
      ) : null
    ] })
  ] }) : null;
}
function fh(f) {
  if (typeof f != "function")
    throw new Error("Fetch API unavailable.");
  return f;
}
async function oh(f) {
  return f.json();
}
async function rh({ clientId: f, moveTimeLimitSeconds: d }, { fetchImpl: g = globalThis.fetch } = {}) {
  const o = fh(g), O = Number(d), _ = {
    clientId: String(f || "").trim(),
    moveTimeLimitSeconds: Number.isFinite(O) ? O : 15
  }, U = await o("/api/rooms", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(_)
  });
  if (!U.ok)
    throw new Error(`Board creation failed: ${U.status}`);
  return oh(U);
}
function sh(f = globalThis.window?.location || globalThis.location) {
  const d = f?.protocol === "https:" ? "wss:" : "ws:", g = f?.host || "localhost";
  return `${d}//${g}/ws`;
}
function dh({
  roomId: f,
  clientId: d,
  onMessage: g,
  onStatus: o,
  WebSocketImpl: O = globalThis.window?.WebSocket || globalThis.WebSocket,
  socketUrl: _ = sh()
} = {}) {
  if (typeof O != "function")
    throw new Error("WebSocket unavailable.");
  const U = new O(_);
  return U.onopen = () => {
    o?.("connected"), U.send(
      JSON.stringify({
        type: "watch",
        roomId: String(f || "").trim(),
        clientId: String(d || "").trim()
      })
    );
  }, U.onmessage = (Y) => {
    try {
      g?.(JSON.parse(Y.data));
    } catch {
      g?.({ type: "error", error: "malformed websocket message" });
    }
  }, U.onerror = () => {
    o?.("error");
  }, U.onclose = () => {
    o?.("disconnected");
  }, {
    socket: U,
    send(Y) {
      U.send(JSON.stringify(Y));
    },
    close() {
      U.close?.();
    }
  };
}
const _m = "traceballElmClientId", Ki = "traceballPlayerName", mh = "traceballOnlineMoveTimer";
function Ji() {
  return globalThis.window?.localStorage || globalThis.localStorage;
}
function yh(f = Math.random) {
  return f().toString(36).slice(2, 12);
}
function vh({
  storage: f = Ji(),
  random: d = Math.random
} = {}) {
  const g = f?.getItem?.(_m);
  if (g) return g;
  const o = `traceball-elm-${yh(d)}`;
  return f?.setItem?.(_m, o), o;
}
function Rm(f = Math.random) {
  const d = (g) => g[Math.floor(f() * g.length)];
  return `${d(["Neon", "Turbo", "Cosmic", "Lucky", "Pixel", "Rocket", "Thunder"])} ${d(["Striker", "Falcon", "Comet", "Phantom", "Kicker", "Ace", "Wizard"])}`;
}
function Dm(f, d = "") {
  return String(f || "").replace(/\s+/g, " ").trim().slice(0, 24) || d;
}
function hh({
  storage: f = Ji(),
  randomName: d = Rm
} = {}) {
  const g = String(f?.getItem?.(Ki) || ""), o = Dm(g, "");
  if (o && o !== "Elm Player")
    return f?.setItem?.(Ki, o), o;
  const O = d();
  return f?.setItem?.(Ki, O), O;
}
function gh(f, { storage: d = Ji(), randomName: g = Rm } = {}) {
  const o = Dm(f, g());
  return d?.setItem?.(Ki, o), o;
}
function Sh(f, d = 15) {
  const g = Number(f);
  return Number.isFinite(g) && g >= 0 ? g : d;
}
function bh({
  storage: f = Ji(),
  fallback: d = 15
} = {}) {
  return Sh(
    f?.getItem?.(mh),
    d
  );
}
function Th({
  clientId: f = "",
  playerName: d = "",
  connectionStatus: g = "idle",
  currentBoardCode: o = "",
  isWaitingListMember: O = !1,
  boardState: _ = null,
  boardList: U = [],
  mainTab: Y = "home",
  mode: G = "online",
  toast: F = null,
  onlineMoveTimer: C = 15,
  localMoveTimer: E = 15,
  historyPanelOpen: j = !1,
  rulesPanelOpen: dt = !1
} = {}) {
  return {
    clientId: f,
    playerName: d,
    connectionStatus: g,
    currentBoardCode: o,
    isWaitingListMember: O,
    boardState: _,
    boardList: U,
    mainTab: Y,
    mode: G,
    toast: F,
    onlineSetup: {
      moveTimeLimitSeconds: C
    },
    localSetup: {
      moveTimeLimitSeconds: E
    },
    historyPanelOpen: j,
    rulesPanelOpen: dt
  };
}
function Eh(f, d, g) {
  if (!g || typeof g != "object") return !1;
  const o = String(f || "").trim(), O = String(g.boardCode || "").trim();
  if (o && O && o !== O) return !1;
  if (!d || typeof d != "object") return !0;
  const _ = String(d.boardCode || "").trim();
  if (!_ || _ !== O) return !0;
  const U = Number(d.version), Y = Number(g.version);
  return Number.isFinite(U) ? Number.isFinite(Y) ? Y > U : !1 : !0;
}
function zh(f, d) {
  if (!d || typeof d != "object") return f;
  switch (d.type) {
    case "hydrateShell":
      return { ...f, ...d.payload };
    case "setPlayerName":
      return { ...f, playerName: String(d.playerName || "") };
    case "setConnectionStatus":
      return { ...f, connectionStatus: String(d.status || "idle") };
    case "setCurrentBoardCode":
      return {
        ...f,
        currentBoardCode: String(d.boardCode || ""),
        isWaitingListMember: !1
      };
    case "setWaitingListMembership":
      return {
        ...f,
        isWaitingListMember: !!d.isMember
      };
    case "receiveBoardState":
      return Eh(
        f.currentBoardCode,
        f.boardState,
        d.boardState
      ) ? {
        ...f,
        boardState: d.boardState,
        currentBoardCode: String(
          d.boardState?.boardCode || f.currentBoardCode || ""
        )
      } : f;
    case "receiveBoardList":
      return {
        ...f,
        boardList: Array.isArray(d.boardList) ? d.boardList : Array.isArray(d.boardList?.rooms) ? d.boardList.rooms : []
      };
    case "setMainTab":
      return { ...f, mainTab: String(d.mainTab || f.mainTab) };
    case "setMode":
      return { ...f, mode: String(d.mode || f.mode) };
    case "setToast":
      return { ...f, toast: d.toast ?? null };
    case "setHistoryPanelOpen":
      return { ...f, historyPanelOpen: !!d.open };
    case "setRulesPanelOpen":
      return { ...f, rulesPanelOpen: !!d.open };
    case "setOnlineMoveTimer":
      return {
        ...f,
        onlineSetup: {
          ...f.onlineSetup,
          moveTimeLimitSeconds: Number(d.seconds)
        }
      };
    case "setLocalMoveTimer":
      return {
        ...f,
        localSetup: {
          ...f.localSetup,
          moveTimeLimitSeconds: Number(d.seconds)
        }
      };
    default:
      return f;
  }
}
const ph = {
  minHeight: "100vh",
  display: "grid",
  placeItems: "center",
  padding: "32px 20px",
  background: "radial-gradient(circle at top, rgba(10, 143, 40, 0.18), transparent 38%), linear-gradient(180deg, #f6fbf4 0%, #e4f0e2 100%)",
  color: "#102a1a"
}, Oh = {
  width: "min(720px, 100%)",
  borderRadius: "24px",
  padding: "28px",
  background: "rgba(255, 255, 255, 0.92)",
  boxShadow: "0 24px 70px rgba(16, 42, 26, 0.16)",
  border: "1px solid rgba(16, 42, 26, 0.08)"
}, Ah = {
  margin: 0,
  fontSize: "0.85rem",
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: "#0a8f28",
  fontWeight: 700
}, _h = {
  margin: "10px 0 12px",
  fontSize: "clamp(2rem, 4vw, 3.25rem)",
  lineHeight: 1.05
}, Nh = {
  margin: 0,
  fontSize: "1.05rem",
  lineHeight: 1.6,
  color: "#33513f"
}, Mh = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
  gap: "14px",
  marginTop: "24px"
}, Zi = {
  padding: "16px",
  borderRadius: "18px",
  background: "#f7fbf7",
  border: "1px solid rgba(16, 42, 26, 0.08)"
}, pu = {
  margin: 0,
  fontSize: "0.78rem",
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  color: "#567062"
}, Vi = {
  margin: "8px 0 0",
  fontSize: "1rem",
  fontWeight: 700,
  wordBreak: "break-word"
}, Ch = {
  width: "100%",
  marginTop: "10px",
  padding: "12px 14px",
  borderRadius: "12px",
  border: "1px solid rgba(16, 42, 26, 0.14)",
  fontSize: "1rem",
  boxSizing: "border-box"
}, Nm = {
  display: "flex",
  gap: "10px",
  marginTop: "18px",
  flexWrap: "wrap"
}, Bo = (f) => ({
  border: "1px solid rgba(16, 42, 26, 0.12)",
  borderRadius: "999px",
  padding: "8px 14px",
  background: f ? "#102a1a" : "#f7fbf7",
  color: f ? "#f6fbf4" : "#102a1a",
  fontWeight: 700,
  cursor: "pointer"
}), Yo = {
  marginTop: "18px",
  padding: "16px",
  borderRadius: "16px",
  background: "#eef7f0",
  border: "1px dashed rgba(16, 42, 26, 0.18)",
  color: "#153124",
  fontWeight: 600
}, Rh = {
  marginTop: "24px",
  padding: "16px 18px",
  borderRadius: "18px",
  background: "#102a1a",
  color: "#f6fbf4",
  lineHeight: 1.55
}, Dh = {
  display: "inline-block",
  width: "10px",
  height: "10px",
  borderRadius: "999px",
  marginRight: "8px",
  background: "#9aa79e"
};
function Te(f) {
  return String(f || "").trim();
}
function Uh(f) {
  const d = Number(f);
  return Number.isFinite(d) ? d : 0;
}
function Um(f) {
  const d = f?.game?.players;
  return d && typeof d == "object" ? d : null;
}
function Hh(f) {
  const d = String(f || "").trim();
  return d === "active" || d === "disconnected";
}
function xh(f) {
  return f === "p1" ? "Claim Blue" : "Claim Red";
}
function jh(f) {
  return f?.game?.status === "playing" || f?.game?.status === "paused";
}
function Bh() {
  return globalThis.window?.history ?? globalThis.history ?? null;
}
function Qo() {
  return globalThis.window?.location ?? globalThis.location ?? null;
}
function Yh(f) {
  return f ? typeof f.href == "string" && f.href ? f.href : `${f.origin || "http://localhost"}${f.pathname || "/react"}${f.search || ""}${f.hash || ""}` : "";
}
function qh({
  locationLike: f = Qo()
} = {}) {
  const d = Yh(f);
  if (!d) return "";
  const g = new URL(d);
  return Te(
    g.searchParams.get("board") || g.searchParams.get("room") || g.searchParams.get("code") || ""
  );
}
function Gh(f) {
  if (!f || typeof f != "object" || String(f.type || "") !== "state") return null;
  const d = Te(f.boardCode || f.roomId), g = f.board && typeof f.board == "object", o = f.game && typeof f.game == "object";
  return !d || !g && !o ? null : {
    boardCode: d,
    version: Uh(f.version),
    ...g ? { board: f.board } : {},
    ...o ? { game: f.game } : {}
  };
}
function Xh(f, { historyLike: d = Bh(), locationLike: g = Qo() } = {}) {
  if (!g || typeof d?.replaceState != "function")
    return null;
  const o = typeof g.href == "string" && g.href ? g.href : `${g.origin || "http://localhost"}${g.pathname || "/react"}${g.search || ""}${g.hash || ""}`, O = new URL(o);
  O.pathname = "/react", f ? O.searchParams.set("board", String(f).trim()) : O.searchParams.delete("board");
  const _ = `${O.pathname}${O.search}${O.hash}`;
  return d.replaceState(d.state ?? null, "", _), _;
}
function Qh({
  currentBoardCode: f,
  clientId: d,
  dispatch: g,
  onOwnSeat: o,
  onMessage: O,
  connect: _ = dh
}) {
  const U = Te(f);
  return !U || typeof _ != "function" ? null : _({
    roomId: U,
    clientId: String(d || ""),
    onStatus(Y) {
      g?.({ type: "setConnectionStatus", status: Y });
    },
    onMessage(Y) {
      if (O?.(Y), Y?.type === "joined") {
        const F = String(Y.playerId || "").trim();
        (F === "p1" || F === "p2") && (o?.(F), g?.({ type: "setWaitingListMembership", isMember: !1 }));
        return;
      }
      if (Y?.type === "left") {
        o?.(null), g?.({ type: "setWaitingListMembership", isMember: !1 }), g?.({ type: "setToast", toast: "You left the board." });
        return;
      }
      if (Y?.type === "waitingListJoined") {
        g?.({ type: "setWaitingListMembership", isMember: !0 });
        return;
      }
      if (Y?.type === "waitingListLeft") {
        g?.({ type: "setWaitingListMembership", isMember: !1 });
        return;
      }
      if (Y?.type === "BoardNotFound" && typeof Y.message == "string") {
        g?.({ type: "setToast", toast: Y.message });
        return;
      }
      if (Y?.type === "error" && typeof Y.error == "string") {
        g?.({ type: "setToast", toast: Y.error });
        return;
      }
      const G = Gh(Y);
      G && g?.({ type: "receiveBoardState", boardState: G });
    }
  });
}
function qo({
  roomId: f,
  clientId: d,
  dispatch: g,
  setOwnSeat: o,
  connectionRef: O,
  activeBoardRef: _,
  onMessage: U,
  connect: Y = Qh
}) {
  const G = Te(f);
  if (!G || typeof Y != "function") return null;
  if (_?.current === G && O?.current)
    return O.current;
  O?.current?.close?.(), O && (O.current = null), _ && (_.current = G), o?.(null);
  const F = Y({
    currentBoardCode: G,
    clientId: d,
    dispatch: g,
    onOwnSeat: o,
    onMessage: U
  });
  return O && (O.current = F), F;
}
function Lh({ snapshot: f, ownSeat: d } = {}) {
  const g = String(d || "").trim();
  if (g === "p1" || g === "p2") return [];
  const o = Um(f);
  return o ? ["p1", "p2"].filter((O) => o?.[O]?.status === "vacant").map((O) => ({ seatId: O, label: xh(O) })) : [];
}
function Zh({ ownSeat: f, snapshot: d } = {}) {
  const g = String(f || "").trim();
  return g !== "p1" && g !== "p2" ? null : jh(d) ? { label: "Leave Seat (Forfeit)", danger: !0 } : { label: "Leave Seat", danger: !1 };
}
function Vh({
  ownSeat: f,
  snapshot: d,
  isWaitingListMember: g
} = {}) {
  const o = String(f || "").trim();
  if (o === "p1" || o === "p2") return null;
  if (g)
    return { type: "leave", label: "Leave Waiting List" };
  const O = Um(d);
  return O && ["p1", "p2"].every(
    (U) => Hh(O?.[U]?.status)
  ) ? { type: "join", label: "Join Waiting List" } : null;
}
function Kh({ ownSeat: f, snapshot: d } = {}) {
  const g = String(f || "").trim();
  if (g !== "p1" && g !== "p2") return [];
  const o = String(d?.game?.status || "").trim();
  return o === "playing" ? d?.game?.turn === g ? [{ type: "pause", label: "Pause Game" }] : [] : o === "paused" ? (d?.game?.pause?.resumeTurn || d?.game?.pause?.byPlayerId || null) === g ? [{ type: "resume", label: "Resume Game" }] : [] : [];
}
function Jh({ ownSeat: f, snapshot: d } = {}) {
  const g = String(f || "").trim();
  if (g !== "p1" && g !== "p2") return null;
  const o = String(d?.game?.status || "").trim();
  return o === "finished" ? { label: "Continue", reason: "between-rounds" } : o === "paused" && d?.game?.pause?.byPlayerId === g ? { label: "Start New Round", reason: "paused-owner" } : null;
}
function wh({
  clientId: f,
  dispatch: d,
  startWatching: g,
  locationLike: o = Qo()
}) {
  const O = qh({ locationLike: o });
  return O ? (d?.({ type: "setCurrentBoardCode", boardCode: O }), g?.({
    roomId: O,
    clientId: f,
    onMessage(_) {
      _?.type === "BoardNotFound" && typeof _.message == "string" && d?.({ type: "setToast", toast: _.message }), _?.type === "error" && typeof _.error == "string" && d?.({ type: "setToast", toast: _.error });
    }
  })) : null;
}
function Wh(f) {
  const d = f?.point;
  if (!d || typeof d != "object") return null;
  const g = Number(d.x), o = Number(d.y);
  return !Number.isFinite(g) || !Number.isFinite(o) ? null : { x: g, y: o };
}
function Ie(f) {
  return typeof f?.send == "function" && Number(f?.socket?.readyState) === 1;
}
function $h({
  payload: f,
  ownSeat: d,
  connection: g,
  dispatch: o
}) {
  if (!Ie(g)) {
    o?.({
      type: "setToast",
      toast: "Connection unavailable. Reconnect to move."
    });
    return;
  }
  const O = String(d || "").trim();
  if (O !== "p1" && O !== "p2") {
    o?.({ type: "setToast", toast: "Join a seat to move." });
    return;
  }
  const _ = Wh(f);
  if (!_) {
    o?.({ type: "setToast", toast: "Invalid move target." });
    return;
  }
  try {
    g.send({ type: "move", to: _ });
  } catch {
    o?.({
      type: "setToast",
      toast: "Move could not be sent. Reconnect and try again."
    });
  }
}
function Fh({
  seatId: f,
  currentBoardCode: d,
  clientId: g,
  playerName: o,
  connection: O,
  dispatch: _
}) {
  if (!Ie(O)) {
    _?.({
      type: "setToast",
      toast: "Connection unavailable. Reconnect to claim a seat."
    });
    return;
  }
  const U = String(f || "").trim();
  if (U !== "p1" && U !== "p2") {
    _?.({ type: "setToast", toast: "Invalid seat selection." });
    return;
  }
  O.send({
    type: "claimSeat",
    seatId: U,
    name: String(o || "").trim(),
    roomId: Te(d),
    clientId: String(g || "").trim()
  });
}
function Ih({
  currentBoardCode: f,
  clientId: d,
  playerName: g,
  connection: o,
  dispatch: O
}) {
  if (!Ie(o)) {
    O?.({
      type: "setToast",
      toast: "Connection unavailable. Reconnect to join the waiting list."
    });
    return;
  }
  o.send({
    type: "joinWaitingList",
    name: String(g || "").trim(),
    roomId: Te(f),
    clientId: String(d || "").trim()
  });
}
function kh({
  currentBoardCode: f,
  clientId: d,
  connection: g,
  dispatch: o
}) {
  if (!Ie(g)) {
    o?.({
      type: "setToast",
      toast: "Connection unavailable. Reconnect to leave the waiting list."
    });
    return;
  }
  g.send({
    type: "leaveWaitingList",
    roomId: Te(f),
    clientId: String(d || "").trim()
  });
}
function Ph({ ownSeat: f, connection: d, dispatch: g }) {
  const o = String(f || "").trim();
  if (o !== "p1" && o !== "p2") {
    g?.({ type: "setToast", toast: "You are not occupying a seat." });
    return;
  }
  if (!Ie(d)) {
    g?.({
      type: "setToast",
      toast: "Connection unavailable. Reconnect to leave your seat."
    });
    return;
  }
  d.send({ type: "leave" });
}
function tg({ ownSeat: f, connection: d, dispatch: g }) {
  const o = String(f || "").trim();
  if (o !== "p1" && o !== "p2") {
    g?.({ type: "setToast", toast: "You are not occupying a seat." });
    return;
  }
  if (!Ie(d)) {
    g?.({
      type: "setToast",
      toast: "Connection unavailable. Reconnect to pause."
    });
    return;
  }
  d.send({ type: "pause" });
}
function lg({ ownSeat: f, connection: d, dispatch: g }) {
  const o = String(f || "").trim();
  if (o !== "p1" && o !== "p2") {
    g?.({ type: "setToast", toast: "You are not occupying a seat." });
    return;
  }
  if (!Ie(d)) {
    g?.({
      type: "setToast",
      toast: "Connection unavailable. Reconnect to resume."
    });
    return;
  }
  d.send({ type: "resume" });
}
function eg({ ownSeat: f, connection: d, dispatch: g }) {
  const o = String(f || "").trim();
  if (o !== "p1" && o !== "p2") {
    g?.({ type: "setToast", toast: "You are not occupying a seat." });
    return;
  }
  if (!Ie(d)) {
    g?.({
      type: "setToast",
      toast: "Connection unavailable. Reconnect to continue."
    });
    return;
  }
  d.send({ type: "reset" });
}
async function ug({
  clientId: f,
  moveTimeLimitSeconds: d,
  dispatch: g,
  create: o = rh,
  syncUrl: O = Xh,
  startWatching: _,
  refreshBoardList: U
}) {
  try {
    const Y = await o({ clientId: f, moveTimeLimitSeconds: d }), G = Te(Y?.roomId);
    if (!G)
      throw new Error("Board creation response missing roomId.");
    return g?.({ type: "setCurrentBoardCode", boardCode: G }), O?.(G), _?.({ roomId: G, clientId: f }), await U?.(), Y;
  } catch (Y) {
    return g?.({
      type: "setToast",
      toast: Y instanceof Error && Y.message ? Y.message : "Board creation failed."
    }), null;
  }
}
function ag({ initialState: f }) {
  const [d, g] = El.useReducer(zh, f), [o, O] = El.useState(null), _ = El.useRef(null), U = El.useRef(""), Y = f?.demoBoardSnapshot || null, G = d.boardState || Y, F = String(d.connectionStatus || "idle"), C = Lh({
    snapshot: G,
    ownSeat: o
  }), E = Zh({
    ownSeat: o,
    snapshot: G
  }), j = Vh({
    ownSeat: o,
    snapshot: G,
    isWaitingListMember: d.isWaitingListMember
  }), dt = Kh({
    ownSeat: o,
    snapshot: G
  }), _t = Jh({
    ownSeat: o,
    snapshot: G
  });
  El.useEffect(() => {
    const Z = wh({
      clientId: d.clientId,
      dispatch: g,
      startWatching: ({ roomId: Mt, clientId: ll, onMessage: el }) => qo({
        roomId: Mt,
        clientId: ll,
        dispatch: g,
        setOwnSeat: O,
        connectionRef: _,
        activeBoardRef: U,
        onMessage: el
      })
    });
    return () => {
      _.current === Z && Z && (U.current = "", _.current = null, Z.close?.());
    };
  }, []), El.useEffect(() => {
    const Z = Te(d.currentBoardCode);
    if (!Z) {
      _.current = null, O(null), g({ type: "setConnectionStatus", status: "idle" });
      return;
    }
    let Mt = null;
    try {
      Mt = qo({
        roomId: Z,
        clientId: d.clientId,
        dispatch: g,
        setOwnSeat: O,
        connectionRef: _,
        activeBoardRef: U,
        onMessage: null
      });
    } catch {
      U.current = "", _.current = null, g({ type: "setConnectionStatus", status: "error" });
      return;
    }
    return () => {
      _.current === Mt && (U.current = "", _.current = null, Mt?.close?.());
    };
  }, [d.currentBoardCode, d.clientId]);
  const Nt = d.clientId && d.clientId.length > 6 ? `...${d.clientId.slice(-6)}` : "identity ready", x = (Z) => {
    const Mt = Z.target.value;
    g({ type: "setPlayerName", playerName: Mt }), gh(Mt);
  }, ct = async () => {
    await ug({
      clientId: d.clientId,
      moveTimeLimitSeconds: d.onlineSetup.moveTimeLimitSeconds,
      dispatch: g,
      startWatching: ({ roomId: Z, clientId: Mt }) => qo({
        roomId: Z,
        clientId: Mt,
        dispatch: g,
        setOwnSeat: O,
        connectionRef: _,
        activeBoardRef: U
      })
    });
  }, $t = (Z) => {
    Fh({
      seatId: Z,
      currentBoardCode: d.currentBoardCode,
      clientId: d.clientId,
      playerName: d.playerName,
      connection: _.current,
      dispatch: g
    });
  }, le = () => {
    Ph({
      ownSeat: o,
      connection: _.current,
      dispatch: g
    });
  }, zl = (Z) => {
    if (Z === "join") {
      Ih({
        currentBoardCode: d.currentBoardCode,
        clientId: d.clientId,
        playerName: d.playerName,
        connection: _.current,
        dispatch: g
      });
      return;
    }
    kh({
      currentBoardCode: d.currentBoardCode,
      clientId: d.clientId,
      connection: _.current,
      dispatch: g
    });
  }, pl = () => {
    tg({
      ownSeat: o,
      connection: _.current,
      dispatch: g
    });
  }, Ft = () => {
    lg({
      ownSeat: o,
      connection: _.current,
      dispatch: g
    });
  }, I = () => {
    eg({
      ownSeat: o,
      connection: _.current,
      dispatch: g
    });
  };
  return /* @__PURE__ */ N.jsx("main", { style: ph, children: /* @__PURE__ */ N.jsxs("section", { style: Oh, children: [
    /* @__PURE__ */ N.jsx("p", { style: Ah, children: "React product shell" }),
    /* @__PURE__ */ N.jsx("h1", { style: _h, children: "Traceball Arena" }),
    /* @__PURE__ */ N.jsx("p", { style: Nh, children: "The React shell owns product state while Elm renders the board island. Online authority remains on the server." }),
    /* @__PURE__ */ N.jsxs("div", { style: Mh, children: [
      /* @__PURE__ */ N.jsxs("article", { style: Zi, children: [
        /* @__PURE__ */ N.jsx("p", { style: pu, children: "Player Name" }),
        /* @__PURE__ */ N.jsx(
          "input",
          {
            "aria-label": "Player name",
            value: d.playerName || "",
            onChange: x,
            style: Ch,
            placeholder: "Enter your name"
          }
        )
      ] }),
      /* @__PURE__ */ N.jsxs("article", { style: Zi, children: [
        /* @__PURE__ */ N.jsx("p", { style: pu, children: "Client Identity" }),
        /* @__PURE__ */ N.jsx("p", { style: Vi, children: Nt })
      ] }),
      /* @__PURE__ */ N.jsxs("article", { style: Zi, children: [
        /* @__PURE__ */ N.jsx("p", { style: pu, children: "Online Move Timer" }),
        /* @__PURE__ */ N.jsxs("p", { style: Vi, children: [
          d.onlineSetup.moveTimeLimitSeconds,
          "s"
        ] })
      ] }),
      /* @__PURE__ */ N.jsxs("article", { style: Zi, children: [
        /* @__PURE__ */ N.jsx("p", { style: pu, children: "Connection" }),
        /* @__PURE__ */ N.jsxs("p", { style: Vi, children: [
          /* @__PURE__ */ N.jsx(
            "span",
            {
              style: {
                ...Dh,
                background: F === "connected" ? "#0a8f28" : F === "error" ? "#d64545" : "#9aa79e"
              }
            }
          ),
          F
        ] })
      ] })
    ] }),
    /* @__PURE__ */ N.jsxs("div", { style: { marginTop: "20px" }, children: [
      /* @__PURE__ */ N.jsx("p", { style: pu, children: "Selected Mode" }),
      /* @__PURE__ */ N.jsxs("div", { style: Nm, children: [
        /* @__PURE__ */ N.jsx(
          "button",
          {
            type: "button",
            style: Bo(d.mode === "online"),
            onClick: () => g({ type: "setMode", mode: "online" }),
            children: "Online"
          }
        ),
        /* @__PURE__ */ N.jsx(
          "button",
          {
            type: "button",
            style: Bo(d.mode === "local"),
            onClick: () => g({ type: "setMode", mode: "local" }),
            children: "Local"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ N.jsxs("div", { style: { marginTop: "20px" }, children: [
      /* @__PURE__ */ N.jsx("p", { style: pu, children: "Online Actions" }),
      /* @__PURE__ */ N.jsx("div", { style: Nm, children: /* @__PURE__ */ N.jsx(
        "button",
        {
          type: "button",
          style: Bo(!1),
          onClick: ct,
          children: "Create Board"
        }
      ) })
    ] }),
    /* @__PURE__ */ N.jsxs("div", { style: { marginTop: "20px" }, children: [
      /* @__PURE__ */ N.jsx("p", { style: pu, children: "Active Tab" }),
      /* @__PURE__ */ N.jsx("p", { style: Vi, children: d.mainTab || "home" })
    ] }),
    G ? /* @__PURE__ */ N.jsx(
      ch,
      {
        snapshot: G,
        ownSeat: o,
        connectionStatus: F,
        isWaitingListMember: d.isWaitingListMember,
        claimableSeatActions: C,
        leaveSeatAction: E,
        waitingListAction: j,
        pauseResumeActions: dt,
        newRoundAction: _t,
        onClaimSeat: $t,
        onLeaveSeat: le,
        onWaitingListAction: zl,
        onPauseAction: pl,
        onResumeAction: Ft,
        onNewRoundAction: I
      }
    ) : null,
    G ? /* @__PURE__ */ N.jsx("div", { style: Yo, children: /* @__PURE__ */ N.jsx(
      Z1,
      {
        snapshot: G,
        ownSeat: o,
        replayIndex: null,
        flipVertical: !1,
        onMoveClick: (Z) => {
          console.info("Board move click", Z), $h({
            payload: Z,
            ownSeat: o,
            connection: _.current,
            dispatch: g
          });
        }
      }
    ) }) : /* @__PURE__ */ N.jsx("div", { style: Yo, children: "Board island not mounted yet" }),
    d.toast ? /* @__PURE__ */ N.jsx("div", { style: { ...Yo, marginTop: "10px" }, children: d.toast }) : null,
    /* @__PURE__ */ N.jsx("div", { style: Rh, children: "Elm remains the board and replay correctness surface. The server remains authoritative for seats, timers, pause/resume, winners, and online move validation." })
  ] }) });
}
const Mm = document.getElementById("react-root");
if (Mm) {
  const f = Th({
    clientId: vh(),
    playerName: hh(),
    onlineMoveTimer: bh()
  });
  X1.createRoot(Mm).render(
    /* @__PURE__ */ N.jsx(H1.StrictMode, { children: /* @__PURE__ */ N.jsx(ag, { initialState: f }) })
  );
}
