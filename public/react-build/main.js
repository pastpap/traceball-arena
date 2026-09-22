function jh(f) {
  return f && f.__esModule && Object.prototype.hasOwnProperty.call(f, "default") ? f.default : f;
}
var Ro = { exports: {} }, rn = {};
var my;
function Bh() {
  if (my) return rn;
  my = 1;
  var f = /* @__PURE__ */ Symbol.for("react.transitional.element"), s = /* @__PURE__ */ Symbol.for("react.fragment");
  function y(o, N, x) {
    var U = null;
    if (x !== void 0 && (U = "" + x), N.key !== void 0 && (U = "" + N.key), "key" in N) {
      x = {};
      for (var R in N)
        R !== "key" && (x[R] = N[R]);
    } else x = N;
    return N = x.ref, {
      $$typeof: f,
      type: o,
      key: U,
      ref: N !== void 0 ? N : null,
      props: x
    };
  }
  return rn.Fragment = s, rn.jsx = y, rn.jsxs = y, rn;
}
var vy;
function Yh() {
  return vy || (vy = 1, Ro.exports = Bh()), Ro.exports;
}
var E = Yh(), Do = { exports: {} }, J = {};
var hy;
function qh() {
  if (hy) return J;
  hy = 1;
  var f = /* @__PURE__ */ Symbol.for("react.transitional.element"), s = /* @__PURE__ */ Symbol.for("react.portal"), y = /* @__PURE__ */ Symbol.for("react.fragment"), o = /* @__PURE__ */ Symbol.for("react.strict_mode"), N = /* @__PURE__ */ Symbol.for("react.profiler"), x = /* @__PURE__ */ Symbol.for("react.consumer"), U = /* @__PURE__ */ Symbol.for("react.context"), R = /* @__PURE__ */ Symbol.for("react.forward_ref"), Q = /* @__PURE__ */ Symbol.for("react.suspense"), I = /* @__PURE__ */ Symbol.for("react.memo"), C = /* @__PURE__ */ Symbol.for("react.lazy"), p = /* @__PURE__ */ Symbol.for("react.activity"), B = /* @__PURE__ */ Symbol.for("react.view_transition"), dt = Symbol.iterator;
  function At(m) {
    return m === null || typeof m != "object" ? null : (m = dt && m[dt] || m["@@iterator"], typeof m == "function" ? m : null);
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
  }, j = Object.assign, ct = {};
  function Wt(m, A, X) {
    this.props = m, this.context = A, this.refs = ct, this.updater = X || _t;
  }
  Wt.prototype.isReactComponent = {}, Wt.prototype.setState = function(m, A) {
    if (typeof m != "object" && typeof m != "function" && m != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, m, A, "setState");
  }, Wt.prototype.forceUpdate = function(m) {
    this.updater.enqueueForceUpdate(this, m, "forceUpdate");
  };
  function ee() {
  }
  ee.prototype = Wt.prototype;
  function pl(m, A, X) {
    this.props = m, this.context = A, this.refs = ct, this.updater = X || _t;
  }
  var El = pl.prototype = new ee();
  El.constructor = pl, j(El, Wt.prototype), El.isPureReactComponent = !0;
  var $t = Array.isArray;
  function $() {
  }
  var ut = { H: null, A: null, T: null, S: null }, zl = Object.prototype.hasOwnProperty;
  function ll(m, A, X) {
    var L = X.ref;
    return {
      $$typeof: f,
      type: m,
      key: A,
      ref: L !== void 0 ? L : null,
      props: X
    };
  }
  function el(m, A) {
    return ll(m.type, A, m.props);
  }
  function Ft(m) {
    return typeof m == "object" && m !== null && m.$$typeof === f;
  }
  function Ql(m) {
    var A = { "=": "=0", ":": "=2" };
    return "$" + m.replace(/[=:]/g, function(X) {
      return A[X];
    });
  }
  var ue = /\/+/g;
  function Mt(m, A) {
    return typeof m == "object" && m !== null && m.key != null ? Ql("" + m.key) : A.toString(36);
  }
  function _(m) {
    switch (m.status) {
      case "fulfilled":
        return m.value;
      case "rejected":
        throw m.reason;
      default:
        switch (typeof m.status == "string" ? m.then($, $) : (m.status = "pending", m.then(
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
  function Y(m, A, X, L, at) {
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
            case s:
              ft = !0;
              break;
            case C:
              return ft = m._init, Y(
                ft(m._payload),
                A,
                X,
                L,
                at
              );
          }
      }
    if (ft)
      return at = at(m), ft = L === "" ? "." + Mt(m, 0) : L, $t(at) ? (X = "", ft != null && (X = ft.replace(ue, "$&/") + "/"), Y(at, A, X, "", function(ne) {
        return ne;
      })) : at != null && (Ft(at) && (at = el(
        at,
        X + (at.key == null || m && m.key === at.key ? "" : ("" + at.key).replace(
          ue,
          "$&/"
        ) + "/") + ft
      )), A.push(at)), 1;
    ft = 0;
    var q = L === "" ? "." : L + ":";
    if ($t(m))
      for (var K = 0; K < m.length; K++)
        L = m[K], nt = q + Mt(L, K), ft += Y(
          L,
          A,
          X,
          nt,
          at
        );
    else if (K = At(m), typeof K == "function")
      for (m = K.call(m), K = 0; !(L = m.next()).done; )
        L = L.value, nt = q + Mt(L, K++), ft += Y(
          L,
          A,
          X,
          nt,
          at
        );
    else if (nt === "object") {
      if (typeof m.then == "function")
        return Y(
          _(m),
          A,
          X,
          L,
          at
        );
      throw A = String(m), Error(
        "Objects are not valid as a React child (found: " + (A === "[object Object]" ? "object with keys {" + Object.keys(m).join(", ") + "}" : A) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return ft;
  }
  function V(m, A, X) {
    if (m == null) return m;
    var L = [], at = 0;
    return Y(m, L, "", "", function(nt) {
      return A.call(X, nt, at++);
    }), L;
  }
  function yt(m) {
    if (m._status === -1) {
      var A = m._result, X = A();
      X.then(
        function(L) {
          (m._status === 0 || m._status === -1) && (m._status = 1, m._result = L, X.status === void 0 && (X.status = "fulfilled", X.value = L));
        },
        function(L) {
          (m._status === 0 || m._status === -1) && (m._status = 2, m._result = L, X.status === void 0 && (X.status = "rejected", X.reason = L));
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
  function Ul(m) {
    var A = ut.T, X = {};
    X.types = A !== null ? A.types : null, ut.T = X;
    try {
      var L = m(), at = ut.S;
      at !== null && at(X, L), typeof L == "object" && L !== null && typeof L.then == "function" && L.then($, rt);
    } catch (nt) {
      rt(nt);
    } finally {
      A !== null && X.types !== null && (A.types = X.types), ut.T = A;
    }
  }
  function ae(m) {
    var A = ut.T;
    if (A !== null) {
      var X = A.types;
      X === null ? A.types = [m] : X.indexOf(m) === -1 && X.push(m);
    } else Ul(ae.bind(null, m));
  }
  var Pe = {
    map: V,
    forEach: function(m, A, X) {
      V(
        m,
        function() {
          A.apply(this, arguments);
        },
        X
      );
    },
    count: function(m) {
      var A = 0;
      return V(m, function() {
        A++;
      }), A;
    },
    toArray: function(m) {
      return V(m, function(A) {
        return A;
      }) || [];
    },
    only: function(m) {
      if (!Ft(m))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return m;
    }
  };
  return J.Activity = p, J.Children = Pe, J.Component = Wt, J.Fragment = y, J.Profiler = N, J.PureComponent = pl, J.StrictMode = o, J.Suspense = Q, J.ViewTransition = B, J.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ut, J.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(m) {
      return ut.H.useMemoCache(m);
    }
  }, J.addTransitionType = ae, J.cache = function(m) {
    return function() {
      return m.apply(null, arguments);
    };
  }, J.cacheSignal = function() {
    return null;
  }, J.cloneElement = function(m, A, X) {
    if (m == null)
      throw Error(
        "The argument must be a React element, but you passed " + m + "."
      );
    var L = j({}, m.props), at = m.key;
    if (A != null)
      for (nt in A.key !== void 0 && (at = "" + A.key), A)
        !zl.call(A, nt) || nt === "key" || nt === "__self" || nt === "__source" || nt === "ref" && A.ref === void 0 || (L[nt] = A[nt]);
    var nt = arguments.length - 2;
    if (nt === 1) L.children = X;
    else if (1 < nt) {
      for (var ft = Array(nt), q = 0; q < nt; q++)
        ft[q] = arguments[q + 2];
      L.children = ft;
    }
    return ll(m.type, at, L);
  }, J.createContext = function(m) {
    return m = {
      $$typeof: U,
      _currentValue: m,
      _currentValue2: m,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, m.Provider = m, m.Consumer = {
      $$typeof: x,
      _context: m
    }, m;
  }, J.createElement = function(m, A, X) {
    var L, at = {}, nt = null;
    if (A != null)
      for (L in A.key !== void 0 && (nt = "" + A.key), A)
        zl.call(A, L) && L !== "key" && L !== "__self" && L !== "__source" && (at[L] = A[L]);
    var ft = arguments.length - 2;
    if (ft === 1) at.children = X;
    else if (1 < ft) {
      for (var q = Array(ft), K = 0; K < ft; K++)
        q[K] = arguments[K + 2];
      at.children = q;
    }
    if (m && m.defaultProps)
      for (L in ft = m.defaultProps, ft)
        at[L] === void 0 && (at[L] = ft[L]);
    return ll(m, nt, at);
  }, J.createRef = function() {
    return { current: null };
  }, J.forwardRef = function(m) {
    return { $$typeof: R, render: m };
  }, J.isValidElement = Ft, J.lazy = function(m) {
    return {
      $$typeof: C,
      _payload: { _status: -1, _result: m },
      _init: yt
    };
  }, J.memo = function(m, A) {
    return {
      $$typeof: I,
      type: m,
      compare: A === void 0 ? null : A
    };
  }, J.startTransition = Ul, J.unstable_useCacheRefresh = function() {
    return ut.H.useCacheRefresh();
  }, J.use = function(m) {
    return ut.H.use(m);
  }, J.useActionState = function(m, A, X) {
    return ut.H.useActionState(m, A, X);
  }, J.useCallback = function(m, A) {
    return ut.H.useCallback(m, A);
  }, J.useContext = function(m) {
    return ut.H.useContext(m);
  }, J.useDebugValue = function() {
  }, J.useDeferredValue = function(m, A) {
    return ut.H.useDeferredValue(m, A);
  }, J.useEffect = function(m, A) {
    return ut.H.useEffect(m, A);
  }, J.useEffectEvent = function(m) {
    return ut.H.useEffectEvent(m);
  }, J.useId = function() {
    return ut.H.useId();
  }, J.useImperativeHandle = function(m, A, X) {
    return ut.H.useImperativeHandle(m, A, X);
  }, J.useInsertionEffect = function(m, A) {
    return ut.H.useInsertionEffect(m, A);
  }, J.useLayoutEffect = function(m, A) {
    return ut.H.useLayoutEffect(m, A);
  }, J.useMemo = function(m, A) {
    return ut.H.useMemo(m, A);
  }, J.useOptimistic = function(m, A) {
    return ut.H.useOptimistic(m, A);
  }, J.useReducer = function(m, A, X) {
    return ut.H.useReducer(m, A, X);
  }, J.useRef = function(m) {
    return ut.H.useRef(m);
  }, J.useState = function(m) {
    return ut.H.useState(m);
  }, J.useSyncExternalStore = function(m, A, X) {
    return ut.H.useSyncExternalStore(
      m,
      A,
      X
    );
  }, J.useTransition = function() {
    return ut.H.useTransition();
  }, J.version = "19.3.0", J;
}
var gy;
function Xo() {
  return gy || (gy = 1, Do.exports = qh()), Do.exports;
}
var ol = Xo();
const Gh = /* @__PURE__ */ jh(ol);
var Uo = { exports: {} }, sn = {}, Ho = { exports: {} }, jo = {};
var Sy;
function Qh() {
  return Sy || (Sy = 1, (function(f) {
    function s(_, Y) {
      var V = _.length;
      _.push(Y);
      t: for (; 0 < V; ) {
        var yt = V - 1 >>> 1, rt = _[yt];
        if (0 < N(rt, Y))
          _[yt] = Y, _[V] = rt, V = yt;
        else break t;
      }
    }
    function y(_) {
      return _.length === 0 ? null : _[0];
    }
    function o(_) {
      if (_.length === 0) return null;
      var Y = _[0], V = _.pop();
      if (V !== Y) {
        _[0] = V;
        t: for (var yt = 0, rt = _.length, Ul = rt >>> 1; yt < Ul; ) {
          var ae = 2 * (yt + 1) - 1, Pe = _[ae], m = ae + 1, A = _[m];
          if (0 > N(Pe, V))
            m < rt && 0 > N(A, Pe) ? (_[yt] = A, _[m] = V, yt = m) : (_[yt] = Pe, _[ae] = V, yt = ae);
          else if (m < rt && 0 > N(A, V))
            _[yt] = A, _[m] = V, yt = m;
          else break t;
        }
      }
      return Y;
    }
    function N(_, Y) {
      var V = _.sortIndex - Y.sortIndex;
      return V !== 0 ? V : _.id - Y.id;
    }
    if (f.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var x = performance;
      f.unstable_now = function() {
        return x.now();
      };
    } else {
      var U = Date, R = U.now();
      f.unstable_now = function() {
        return U.now() - R;
      };
    }
    var Q = [], I = [], C = 1, p = null, B = 3, dt = !1, At = !1, _t = !1, j = !1, ct = typeof setTimeout == "function" ? setTimeout : null, Wt = typeof clearTimeout == "function" ? clearTimeout : null, ee = typeof setImmediate < "u" ? setImmediate : null;
    function pl(_) {
      for (var Y = y(I); Y !== null; ) {
        if (Y.callback === null) o(I);
        else if (Y.startTime <= _)
          o(I), Y.sortIndex = Y.expirationTime, s(Q, Y);
        else break;
        Y = y(I);
      }
    }
    function El(_) {
      if (_t = !1, pl(_), !At)
        if (y(Q) !== null)
          At = !0, $t || ($t = !0, Ft());
        else {
          var Y = y(I);
          Y !== null && Mt(El, Y.startTime - _);
        }
    }
    var $t = !1, $ = -1, ut = 5, zl = -1;
    function ll() {
      return j ? !0 : !(f.unstable_now() - zl < ut);
    }
    function el() {
      if (j = !1, $t) {
        var _ = f.unstable_now();
        zl = _;
        var Y = !0;
        try {
          t: {
            At = !1, _t && (_t = !1, Wt($), $ = -1), dt = !0;
            var V = B;
            try {
              l: {
                for (pl(_), p = y(Q); p !== null && !(p.expirationTime > _ && ll()); ) {
                  var yt = p.callback;
                  if (typeof yt == "function") {
                    p.callback = null, B = p.priorityLevel;
                    var rt = yt(
                      p.expirationTime <= _
                    );
                    if (_ = f.unstable_now(), typeof rt == "function") {
                      p.callback = rt, pl(_), Y = !0;
                      break l;
                    }
                    p === y(Q) && o(Q), pl(_);
                  } else o(Q);
                  p = y(Q);
                }
                if (p !== null) Y = !0;
                else {
                  var Ul = y(I);
                  Ul !== null && Mt(
                    El,
                    Ul.startTime - _
                  ), Y = !1;
                }
              }
              break t;
            } finally {
              p = null, B = V, dt = !1;
            }
            Y = void 0;
          }
        } finally {
          Y ? Ft() : $t = !1;
        }
      }
    }
    var Ft;
    if (typeof ee == "function")
      Ft = function() {
        ee(el);
      };
    else if (typeof MessageChannel < "u") {
      var Ql = new MessageChannel(), ue = Ql.port2;
      Ql.port1.onmessage = el, Ft = function() {
        ue.postMessage(null);
      };
    } else
      Ft = function() {
        ct(el, 0);
      };
    function Mt(_, Y) {
      $ = ct(function() {
        _(f.unstable_now());
      }, Y);
    }
    f.unstable_IdlePriority = 5, f.unstable_ImmediatePriority = 1, f.unstable_LowPriority = 4, f.unstable_NormalPriority = 3, f.unstable_Profiling = null, f.unstable_UserBlockingPriority = 2, f.unstable_cancelCallback = function(_) {
      _.callback = null;
    }, f.unstable_forceFrameRate = function(_) {
      0 > _ || 125 < _ ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : ut = 0 < _ ? Math.floor(1e3 / _) : 5;
    }, f.unstable_getCurrentPriorityLevel = function() {
      return B;
    }, f.unstable_next = function(_) {
      switch (B) {
        case 1:
        case 2:
        case 3:
          var Y = 3;
          break;
        default:
          Y = B;
      }
      var V = B;
      B = Y;
      try {
        return _();
      } finally {
        B = V;
      }
    }, f.unstable_requestPaint = function() {
      j = !0;
    }, f.unstable_runWithPriority = function(_, Y) {
      switch (_) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          _ = 3;
      }
      var V = B;
      B = _;
      try {
        return Y();
      } finally {
        B = V;
      }
    }, f.unstable_scheduleCallback = function(_, Y, V) {
      var yt = f.unstable_now();
      switch (typeof V == "object" && V !== null ? (V = V.delay, V = typeof V == "number" && 0 < V ? yt + V : yt) : V = yt, _) {
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
      return rt = V + rt, _ = {
        id: C++,
        callback: Y,
        priorityLevel: _,
        startTime: V,
        expirationTime: rt,
        sortIndex: -1
      }, V > yt ? (_.sortIndex = V, s(I, _), y(Q) === null && _ === y(I) && (_t ? (Wt($), $ = -1) : _t = !0, Mt(El, V - yt))) : (_.sortIndex = rt, s(Q, _), At || dt || (At = !0, $t || ($t = !0, Ft()))), _;
    }, f.unstable_shouldYield = ll, f.unstable_wrapCallback = function(_) {
      var Y = B;
      return function() {
        var V = B;
        B = Y;
        try {
          return _.apply(this, arguments);
        } finally {
          B = V;
        }
      };
    };
  })(jo)), jo;
}
var by;
function Xh() {
  return by || (by = 1, Ho.exports = Qh()), Ho.exports;
}
var Bo = { exports: {} }, Jt = {};
var Ty;
function Lh() {
  if (Ty) return Jt;
  Ty = 1;
  var f = Xo();
  function s(C) {
    var p = "https://react.dev/errors/" + C;
    if (1 < arguments.length) {
      p += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var B = 2; B < arguments.length; B++)
        p += "&args[]=" + encodeURIComponent(arguments[B]);
    }
    return "Minified React error #" + C + "; visit " + p + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
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
  }, N = /* @__PURE__ */ Symbol.for("react.portal"), x = /* @__PURE__ */ Symbol.for("react.recoverable"), U = /* @__PURE__ */ Symbol.for("react.optimistic_key");
  function R(C, p, B) {
    var dt = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: N,
      key: dt == null ? null : dt === U ? U : "" + dt,
      children: C,
      containerInfo: p,
      implementation: B
    };
  }
  var Q = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function I(C, p) {
    if (C === "font") return "";
    if (typeof p == "string")
      return p === "use-credentials" ? p : "";
  }
  return Jt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, Jt.browser = function(C) {
    return { $$typeof: x, _reason: C };
  }, Jt.createPortal = function(C, p) {
    var B = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!p || p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11)
      throw Error(s(299));
    return R(C, p, null, B);
  }, Jt.flushSync = function(C) {
    var p = Q.T, B = o.p;
    try {
      if (Q.T = null, o.p = 2, C) return C();
    } finally {
      Q.T = p, o.p = B, o.d.f();
    }
  }, Jt.preconnect = function(C, p) {
    typeof C == "string" && (p ? (p = p.crossOrigin, p = typeof p == "string" ? p === "use-credentials" ? p : "" : void 0) : p = null, o.d.C(C, p));
  }, Jt.prefetchDNS = function(C) {
    typeof C == "string" && o.d.D(C);
  }, Jt.preinit = function(C, p) {
    if (typeof C == "string" && p && typeof p.as == "string") {
      var B = p.as, dt = I(B, p.crossOrigin), At = typeof p.integrity == "string" ? p.integrity : void 0, _t = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0;
      B === "style" ? o.d.S(
        C,
        typeof p.precedence == "string" ? p.precedence : void 0,
        {
          crossOrigin: dt,
          integrity: At,
          fetchPriority: _t
        }
      ) : B === "script" && o.d.X(C, {
        crossOrigin: dt,
        integrity: At,
        fetchPriority: _t,
        nonce: typeof p.nonce == "string" ? p.nonce : void 0
      });
    }
  }, Jt.preinitModule = function(C, p) {
    if (typeof C == "string")
      if (typeof p == "object" && p !== null) {
        if (p.as == null || p.as === "script") {
          var B = I(
            p.as,
            p.crossOrigin
          );
          o.d.M(C, {
            crossOrigin: B,
            integrity: typeof p.integrity == "string" ? p.integrity : void 0,
            nonce: typeof p.nonce == "string" ? p.nonce : void 0,
            fetchPriority: typeof p.fetchPriority == "string" ? p.fetchPriority : void 0
          });
        }
      } else p == null && o.d.M(C);
  }, Jt.preload = function(C, p) {
    if (typeof C == "string" && typeof p == "object" && p !== null && typeof p.as == "string") {
      var B = p.as, dt = I(B, p.crossOrigin);
      o.d.L(C, B, {
        crossOrigin: dt,
        integrity: typeof p.integrity == "string" ? p.integrity : void 0,
        nonce: typeof p.nonce == "string" ? p.nonce : void 0,
        type: typeof p.type == "string" ? p.type : void 0,
        fetchPriority: typeof p.fetchPriority == "string" ? p.fetchPriority : void 0,
        referrerPolicy: typeof p.referrerPolicy == "string" ? p.referrerPolicy : void 0,
        imageSrcSet: typeof p.imageSrcSet == "string" ? p.imageSrcSet : void 0,
        imageSizes: typeof p.imageSizes == "string" ? p.imageSizes : void 0,
        media: typeof p.media == "string" ? p.media : void 0
      });
    }
  }, Jt.preloadModule = function(C, p) {
    if (typeof C == "string")
      if (p) {
        var B = I(p.as, p.crossOrigin);
        o.d.m(C, {
          as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0,
          crossOrigin: B,
          integrity: typeof p.integrity == "string" ? p.integrity : void 0,
          nonce: typeof p.nonce == "string" ? p.nonce : void 0,
          fetchPriority: typeof p.fetchPriority == "string" ? p.fetchPriority : void 0
        });
      } else o.d.m(C);
  }, Jt.requestFormReset = function(C) {
    o.d.r(C);
  }, Jt.unstable_batchedUpdates = function(C, p) {
    return C(p);
  }, Jt.useFormState = function(C, p, B) {
    return Q.H.useFormState(C, p, B);
  }, Jt.useFormStatus = function() {
    return Q.H.useHostTransitionStatus();
  }, Jt.version = "19.3.0", Jt;
}
var py;
function Zh() {
  if (py) return Bo.exports;
  py = 1;
  function f() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f);
      } catch (s) {
        console.error(s);
      }
  }
  return f(), Bo.exports = Lh(), Bo.exports;
}
var Ey;
function Vh() {
  if (Ey) return sn;
  Ey = 1;
  var f = Xh(), s = Xo(), y = Zh();
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
  function U(t) {
    if (t.tag === 13) {
      var l = t.memoizedState;
      if (l === null && (t = t.alternate, t !== null && (l = t.memoizedState)), l !== null) return l.dehydrated;
    }
    return null;
  }
  function R(t) {
    if (t.tag === 31) {
      var l = t.memoizedState;
      if (l === null && (t = t.alternate, t !== null && (l = t.memoizedState)), l !== null) return l.dehydrated;
    }
    return null;
  }
  function Q(t) {
    if (x(t) !== t)
      throw Error(o(188));
  }
  function I(t) {
    var l = t.alternate;
    if (!l) {
      if (l = x(t), l === null) throw Error(o(188));
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
          if (n === e) return Q(a), t;
          if (n === u) return Q(a), l;
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
  function p(t, l, e, u, a, n) {
    for (; t !== null; ) {
      if ((t.tag === 5 || t.tag === 27 || t.tag === 6) && e(t, u, a, n) || (t.tag !== 22 || t.memoizedState === null) && (l || t.tag !== 5 && t.tag !== 27) && p(
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
  function _t(t, l, e, u) {
    for (; e !== null; ) {
      if (e === l) u.foundSelf = !0;
      else if (e.tag === 5 || e.tag === 27 || e.tag === 6) {
        if (u.foundSelf) return t[1] = e, !0;
        t[0] = e;
      } else if ((e.tag !== 22 || e.memoizedState === null) && _t(
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
  function j(t) {
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
  var ct = null, Wt = null;
  function ee(t, l, e) {
    return t === e ? !0 : t === l ? (ct = t, !0) : !1;
  }
  function pl(t, l, e) {
    return t === e ? (Wt = t, !1) : t === l ? (Wt !== null && (ct = t), !0) : !1;
  }
  function El(t) {
    if (t === null) return null;
    do
      t = t === null ? null : t.return;
    while (t && t.tag !== 5 && t.tag !== 27 && t.tag !== 3);
    return t || null;
  }
  function $t(t, l, e) {
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
  var $ = Object.assign, ut = /* @__PURE__ */ Symbol.for("react.element"), zl = /* @__PURE__ */ Symbol.for("react.transitional.element"), ll = /* @__PURE__ */ Symbol.for("react.portal"), el = /* @__PURE__ */ Symbol.for("react.fragment"), Ft = /* @__PURE__ */ Symbol.for("react.strict_mode"), Ql = /* @__PURE__ */ Symbol.for("react.profiler"), ue = /* @__PURE__ */ Symbol.for("react.consumer"), Mt = /* @__PURE__ */ Symbol.for("react.context"), _ = /* @__PURE__ */ Symbol.for("react.forward_ref"), Y = /* @__PURE__ */ Symbol.for("react.suspense"), V = /* @__PURE__ */ Symbol.for("react.suspense_list"), yt = /* @__PURE__ */ Symbol.for("react.memo"), rt = /* @__PURE__ */ Symbol.for("react.lazy"), Ul = /* @__PURE__ */ Symbol.for("react.activity"), ae = /* @__PURE__ */ Symbol.for("react.legacy_hidden"), Pe = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), m = /* @__PURE__ */ Symbol.for("react.view_transition"), A = /* @__PURE__ */ Symbol.for("react.recoverable"), X = Symbol.iterator;
  function L(t) {
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
      case Ql:
        return "Profiler";
      case Ft:
        return "StrictMode";
      case Y:
        return "Suspense";
      case V:
        return "SuspenseList";
      case Ul:
        return "Activity";
      case m:
        return "ViewTransition";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case ll:
          return "Portal";
        case Mt:
          return t.displayName || "Context";
        case ue:
          return (t._context.displayName || "Context") + ".Consumer";
        case _:
          var l = t.render;
          return t = t.displayName, t || (t = l.displayName || l.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case yt:
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
  var ft = Array.isArray, q = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, K = y.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ne = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, Wi = [], Ou = -1;
  function Xl(t) {
    return { current: t };
  }
  function Gt(t) {
    0 > Ou || (t.current = Wi[Ou], Wi[Ou] = null, Ou--);
  }
  function bt(t, l) {
    Ou++, Wi[Ou] = t.current, t.current = l;
  }
  var Ll = Xl(null), va = Xl(null), ze = Xl(null), yn = Xl(null);
  function mn(t, l) {
    switch (bt(ze, l), bt(va, t), bt(Ll, null), l.nodeType) {
      case 9:
      case 11:
        t = (t = l.documentElement) && (t = t.namespaceURI) ? z0(t) : 0;
        break;
      default:
        if (t = l.tagName, l = l.namespaceURI)
          l = z0(l), t = O0(l, t);
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
    Gt(Ll), bt(Ll, t);
  }
  function Nu() {
    Gt(Ll), Gt(va), Gt(ze);
  }
  function $i(t) {
    var l = t.memoizedState;
    l !== null && (da._currentValue = l.memoizedState, bt(yn, t)), l = Ll.current;
    var e = O0(l, t.type);
    l !== e && (bt(va, t), bt(Ll, e));
  }
  function vn(t) {
    va.current === t && (Gt(Ll), Gt(va)), yn.current === t && (Gt(yn), da._currentValue = ne);
  }
  var Fi, Vo;
  function Oe(t) {
    if (Fi === void 0)
      try {
        throw Error();
      } catch (e) {
        var l = e.stack.trim().match(/\n( *(at )?)/);
        Fi = l && l[1] || "", Vo = -1 < e.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Fi + t + Vo;
  }
  var Ii = !1;
  function ki(t, l) {
    if (!t || Ii) return "";
    Ii = !0;
    var e = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var u = {
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
                } catch (M) {
                  var v = M;
                }
                Reflect.construct(t, [], O);
              } else {
                try {
                  O.call();
                } catch (M) {
                  v = M;
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
              } catch (M) {
                v = M;
              }
              (O = t()) && typeof O.catch == "function" && O.catch(function() {
              });
            }
          } catch (M) {
            if (M && v && typeof M.stack == "string")
              return [M.stack, v.stack];
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
`), g = c.split(`
`);
        for (a = u = 0; u < r.length && !r[u].includes("DetermineComponentFrameRoot"); )
          u++;
        for (; a < g.length && !g[a].includes(
          "DetermineComponentFrameRoot"
        ); )
          a++;
        if (u === r.length || a === g.length)
          for (u = r.length - 1, a = g.length - 1; 1 <= u && 0 <= a && r[u] !== g[a]; )
            a--;
        for (; 1 <= u && 0 <= a; u--, a--)
          if (r[u] !== g[a]) {
            if (u !== 1 || a !== 1)
              do
                if (u--, a--, 0 > a || r[u] !== g[a]) {
                  var T = `
` + r[u].replace(" at new ", " at ");
                  return t.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", t.displayName)), T;
                }
              while (1 <= u && 0 <= a);
            break;
          }
      }
    } finally {
      Ii = !1, Error.prepareStackTrace = e;
    }
    return (e = t ? t.displayName || t.name : "") ? Oe(e) : "";
  }
  function Gy(t, l) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Oe(t.type);
      case 16:
        return Oe("Lazy");
      case 13:
        return t.child !== l && l !== null ? Oe("Suspense Fallback") : Oe("Suspense");
      case 19:
        return Oe("SuspenseList");
      case 0:
      case 15:
        return ki(t.type, !1);
      case 11:
        return ki(t.type.render, !1);
      case 1:
        return ki(t.type, !0);
      case 31:
        return Oe("Activity");
      case 30:
        return Oe("ViewTransition");
      default:
        return "";
    }
  }
  function Ko(t) {
    try {
      var l = "", e = null;
      do
        l += Gy(t, e), e = t, t = t.return;
      while (t);
      return l;
    } catch (u) {
      return `
Error generating stack: ` + u.message + `
` + u.stack;
    }
  }
  var Pi = Object.prototype.hasOwnProperty, tc = f.unstable_scheduleCallback, lc = f.unstable_cancelCallback, Qy = f.unstable_shouldYield, Xy = f.unstable_requestPaint, rl = f.unstable_now, Ly = f.unstable_getCurrentPriorityLevel, Jo = f.unstable_ImmediatePriority, wo = f.unstable_UserBlockingPriority, hn = f.unstable_NormalPriority, Zy = f.unstable_LowPriority, Wo = f.unstable_IdlePriority, Vy = f.log, Ky = f.unstable_setDisableYieldValue, ha = null, sl = null;
  function Ne(t) {
    if (typeof Vy == "function" && Ky(t), sl && typeof sl.setStrictMode == "function")
      try {
        sl.setStrictMode(ha, t);
      } catch {
      }
  }
  var dl = Math.clz32 ? Math.clz32 : Wy, Jy = Math.log, wy = Math.LN2;
  function Wy(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (Jy(t) / wy | 0) | 0;
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
  function $o(t, l) {
    (l & 8) !== 0 && (l |= l & 32);
    var e = t.entangledLanes;
    if (e !== 0)
      for (t = t.entanglements, e &= l; 0 < e; ) {
        var u = 31 - dl(e), a = 1 << u;
        l |= t[u], e &= ~a;
      }
    return l;
  }
  function $y(t, l) {
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
  function Fo() {
    var t = bn;
    return bn <<= 1, (bn & 62914560) === 0 && (bn = 4194304), t;
  }
  function ec(t) {
    for (var l = [], e = 0; 31 > e; e++) l.push(t);
    return l;
  }
  function Sa(t, l) {
    t.pendingLanes |= l, l !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function Fy(t, l, e, u, a, n) {
    var i = t.pendingLanes;
    t.pendingLanes = e, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= e, t.entangledLanes &= e, t.errorRecoveryDisabledLanes &= e, t.shellSuspendCounter = 0;
    var c = t.entanglements, r = t.expirationTimes, g = t.hiddenUpdates;
    for (e = i & ~e; 0 < e; ) {
      var T = 31 - dl(e), O = 1 << T;
      c[T] = 0, r[T] = -1;
      var v = g[T];
      if (v !== null)
        for (g[T] = null, T = 0; T < v.length; T++) {
          var b = v[T];
          b !== null && (b.lane &= -536870913);
        }
      e &= ~O;
    }
    u !== 0 && Io(t, u, 0), n !== 0 && a === 0 && t.tag !== 0 && (t.suspendedLanes |= n & ~(i & ~l));
  }
  function Io(t, l, e) {
    t.pendingLanes |= l, t.suspendedLanes &= ~l;
    var u = 31 - dl(l);
    t.entangledLanes |= l, t.entanglements[u] = t.entanglements[u] | 1073741824 | e & 261930;
  }
  function ko(t, l) {
    var e = t.entangledLanes |= l;
    for (t = t.entanglements; e; ) {
      var u = 31 - dl(e), a = 1 << u;
      a & l | t[u] & l && (t[u] |= l), e &= ~a;
    }
  }
  function Po(t, l) {
    var e = l & -l;
    return e = (e & 42) !== 0 ? 1 : uc(e), (e & (t.suspendedLanes | l)) !== 0 ? 0 : e;
  }
  function uc(t) {
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
  function ac(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function tr() {
    var t = K.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : cy(t.type));
  }
  function lr(t, l) {
    var e = K.p;
    try {
      return K.p = t, l();
    } finally {
      K.p = e;
    }
  }
  var ie = Math.random().toString(36).slice(2), Qt = "__reactFiber$" + ie, ul = "__reactProps$" + ie, Au = "__reactContainer$" + ie, er = "__reactEvents$" + ie, Iy = "__reactListeners$" + ie, ky = "__reactHandles$" + ie, ur = "__reactResources$" + ie, ba = "__reactMarker$" + ie, pn = "__reactLoad$" + ie;
  function En(t) {
    delete t[Qt], delete t[ul], delete t[Iy], delete t[ky];
  }
  function lu(t) {
    var l;
    if (l = t[Qt]) return l;
    for (var e = t.parentNode; e; ) {
      if (l = e[Au] || e[Qt]) {
        if (e = l.alternate, l.child !== null || e !== null && e.child !== null)
          for (t = X0(t); t !== null; ) {
            if (e = t[Qt]) return e;
            t = X0(t);
          }
        return l;
      }
      t = e, e = t.parentNode;
    }
    return null;
  }
  function _u(t) {
    if (t = t[Qt] || t[Au]) {
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
  function Cu(t) {
    var l = t[ur];
    return l || (l = t[ur] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), l;
  }
  function jt(t) {
    t[ba] = !0;
  }
  function ar(t) {
    t[pn] = void 0;
  }
  var nr = /* @__PURE__ */ new Set(), ir = {};
  function eu(t, l) {
    Mu(t, l), Mu(t + "Capture", l);
  }
  function Mu(t, l) {
    for (ir[t] = l, t = 0; t < l.length; t++)
      nr.add(l[t]);
  }
  var Py = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), cr = {}, fr = {};
  function tm(t) {
    return Pi.call(fr, t) ? !0 : Pi.call(cr, t) ? !1 : Py.test(t) ? fr[t] = !0 : (cr[t] = !0, !1);
  }
  var it = !1;
  function or() {
    var t = it;
    return it = !1, t;
  }
  function zn(t, l, e) {
    if (tm(l))
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
  function ce(t, l, e, u) {
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
  function yl(t) {
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
  function rr(t) {
    var l = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (l === "checkbox" || l === "radio");
  }
  function lm(t, l, e) {
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
  function nc(t) {
    if (!t._valueTracker) {
      var l = rr(t) ? "checked" : "value";
      t._valueTracker = lm(
        t,
        l,
        "" + t[l]
      );
    }
  }
  function sr(t) {
    if (!t) return !1;
    var l = t._valueTracker;
    if (!l) return !0;
    var e = l.getValue(), u = "";
    return t && (u = rr(t) ? t.checked ? "true" : "false" : t.value), t = u, t !== e ? (l.setValue(t), !0) : !1;
  }
  var em = /[\n"\\]/g;
  function Ol(t) {
    return t.replace(
      em,
      function(l) {
        return "\\" + l.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function ic(t, l, e, u, a, n, i, c) {
    t.name = "", i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? t.type = i : t.removeAttribute("type"), l != null ? i === "number" ? (l === 0 && t.value === "" || t.value != l) && (t.value = "" + yl(l)) : t.value !== "" + yl(l) && (t.value = "" + yl(l)) : i !== "submit" && i !== "reset" || t.removeAttribute("value"), l != null ? i === "number" && t.value == l ? cc(t, yl(t.value)) : cc(t, yl(l)) : e != null ? cc(t, yl(e)) : u != null && t.removeAttribute("value"), a == null && n != null && (t.defaultChecked = !!n), a != null && (t.checked = a && typeof a != "function" && typeof a != "symbol"), c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? t.name = "" + yl(c) : t.removeAttribute("name");
  }
  function dr(t, l, e, u, a, n, i, c) {
    if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (t.type = n), l != null || e != null) {
      if (!(n !== "submit" && n !== "reset" || l != null)) {
        nc(t);
        return;
      }
      e = e != null ? "" + yl(e) : "", l = l != null ? "" + yl(l) : e, c || l === t.value || (t.value = l), t.defaultValue = l;
    }
    u = u ?? a, u = typeof u != "function" && typeof u != "symbol" && !!u, t.checked = c ? t.checked : !!u, t.defaultChecked = !!u, i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (t.name = i), nc(t);
  }
  function cc(t, l) {
    t.defaultValue !== "" + l && (t.defaultValue = "" + l);
  }
  function xu(t, l, e, u) {
    if (t = t.options, l) {
      l = {};
      for (var a = 0; a < e.length; a++)
        l["$" + e[a]] = !0;
      for (e = 0; e < t.length; e++)
        a = l.hasOwnProperty("$" + t[e].value), t[e].selected !== a && (t[e].selected = a), a && u && (t[e].defaultSelected = !0);
    } else {
      for (e = "" + yl(e), l = null, a = 0; a < t.length; a++) {
        if (t[a].value === e) {
          t[a].selected = !0, u && (t[a].defaultSelected = !0);
          return;
        }
        l !== null || t[a].disabled || (l = t[a]);
      }
      l !== null && (l.selected = !0);
    }
  }
  function yr(t, l, e) {
    if (l != null && (l = "" + yl(l), l !== t.value && (t.value = l), e == null)) {
      t.defaultValue !== l && (t.defaultValue = l);
      return;
    }
    t.defaultValue = e != null ? "" + yl(e) : "";
  }
  function mr(t, l, e, u) {
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
    e = yl(l), t.defaultValue = e, u = t.textContent, u === e && u !== "" && u !== null && (t.value = u), nc(t);
  }
  function Ru(t, l) {
    if (l) {
      var e = t.firstChild;
      if (e && e === t.lastChild && e.nodeType === 3) {
        e.nodeValue = l;
        return;
      }
    }
    t.textContent = l;
  }
  var um = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function vr(t, l, e) {
    var u = l.indexOf("--") === 0;
    e == null || typeof e == "boolean" || e === "" ? u ? t.setProperty(l, "") : l === "float" ? t.cssFloat = "" : t[l] = "" : u ? t.setProperty(l, e) : typeof e != "number" || e === 0 || um.has(l) ? l === "float" ? t.cssFloat = e : t[l] = ("" + e).trim() : t[l] = e + "px";
  }
  function hr(t, l, e) {
    if (l != null && typeof l != "object")
      throw Error(o(62));
    if (t = t.style, e != null) {
      for (var u in e)
        !e.hasOwnProperty(u) || l != null && l.hasOwnProperty(u) || (u.indexOf("--") === 0 ? t.setProperty(u, "") : u === "float" ? t.cssFloat = "" : t[u] = "", it = !0);
      for (var a in l)
        u = l[a], l.hasOwnProperty(a) && e[a] !== u && (vr(t, a, u), it = !0);
    } else
      for (var n in l)
        l.hasOwnProperty(n) && vr(t, n, l[n]);
  }
  function fc(t) {
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
  var am = /* @__PURE__ */ new Map([
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
  ]), nm = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Nn(t) {
    return nm.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  function Zl() {
  }
  var oc = null;
  function rc(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var Du = null, Uu = null;
  function gr(t) {
    var l = _u(t);
    if (l && (t = l.stateNode)) {
      var e = t[ul] || null;
      t: switch (t = l.stateNode, l.type) {
        case "input":
          if (ic(
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
                ic(
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
              u = e[l], u.form === t.form && sr(u);
          }
          break t;
        case "textarea":
          yr(t, e.value, e.defaultValue);
          break t;
        case "select":
          l = e.value, l != null && xu(t, !!e.multiple, l, !1);
      }
    }
  }
  var sc = !1;
  function Sr(t, l, e) {
    if (sc) return t(l, e);
    sc = !0;
    try {
      var u = t(l);
      return u;
    } finally {
      if (sc = !1, (Du !== null || Uu !== null) && (Ni(), Du && (l = Du, t = Uu, Uu = Du = null, gr(l), t)))
        for (l = 0; l < t.length; l++) gr(t[l]);
    }
  }
  function pa(t, l) {
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
  var fe = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), dc = !1;
  if (fe)
    try {
      var Ea = {};
      Object.defineProperty(Ea, "passive", {
        get: function() {
          dc = !0;
        }
      }), window.addEventListener("test", Ea, Ea), window.removeEventListener("test", Ea, Ea);
    } catch {
      dc = !1;
    }
  var Ae = null, yc = null, An = null;
  function br() {
    if (An) return An;
    var t, l = yc, e = l.length, u, a = "value" in Ae ? Ae.value : Ae.textContent, n = a.length;
    for (t = 0; t < e && l[t] === a[t]; t++) ;
    var i = e - t;
    for (u = 1; u <= i && l[e - u] === a[n - u]; u++) ;
    return An = a.slice(t, 1 < u ? 1 - u : void 0);
  }
  function _n(t) {
    var l = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && l === 13 && (t = 13)) : t = l, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function Cn() {
    return !0;
  }
  function Tr() {
    return !1;
  }
  function It(t) {
    function l(e, u, a, n, i) {
      this._reactName = e, this._targetInst = a, this.type = u, this.nativeEvent = n, this.target = i, this.currentTarget = null;
      for (var c in t)
        t.hasOwnProperty(c) && (e = t[c], this[c] = e ? e(n) : n[c]);
      return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1) ? Cn : Tr, this.isPropagationStopped = Tr, this;
    }
    return $(l.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var e = this.nativeEvent;
        e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != "unknown" && (e.returnValue = !1), this.isDefaultPrevented = Cn);
      },
      stopPropagation: function() {
        var e = this.nativeEvent;
        e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0), this.isPropagationStopped = Cn);
      },
      persist: function() {
      },
      isPersistent: Cn
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
  }, Mn = It(_e), za = $({}, _e, { view: 0, detail: 0 }), im = It(za), mc, vc, Oa, xn = $({}, za, {
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
    getModifierState: gc,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== Oa && (Oa && t.type === "mousemove" ? (mc = t.screenX - Oa.screenX, vc = t.screenY - Oa.screenY) : vc = mc = 0, Oa = t), mc);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : vc;
    }
  }), pr = It(xn), cm = $({}, xn, { dataTransfer: 0 }), fm = It(cm), om = $({}, za, { relatedTarget: 0 }), hc = It(om), rm = $({}, _e, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), sm = It(rm), dm = $({}, _e, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), ym = It(dm), mm = $({}, _e, { data: 0 }), Er = It(mm), vm = {
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
  }, hm = {
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
  }, gm = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Sm(t) {
    var l = this.nativeEvent;
    return l.getModifierState ? l.getModifierState(t) : (t = gm[t]) ? !!l[t] : !1;
  }
  function gc() {
    return Sm;
  }
  var bm = $({}, za, {
    key: function(t) {
      if (t.key) {
        var l = vm[t.key] || t.key;
        if (l !== "Unidentified") return l;
      }
      return t.type === "keypress" ? (t = _n(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? hm[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: gc,
    charCode: function(t) {
      return t.type === "keypress" ? _n(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? _n(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), Tm = It(bm), pm = $({}, xn, {
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
  }), zr = It(pm), Em = $({}, _e, { submitter: 0 }), zm = It(Em), Om = $({}, za, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: gc
  }), Nm = It(Om), Am = $({}, _e, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), _m = It(Am), Cm = $({}, xn, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Mm = It(Cm), xm = $({}, _e, {
    newState: 0,
    oldState: 0,
    source: 0
  }), Rm = It(xm), Dm = [9, 13, 27, 32], Sc = fe && "CompositionEvent" in window, Na = null;
  fe && "documentMode" in document && (Na = document.documentMode);
  var Um = fe && "TextEvent" in window && !Na, Or = fe && (!Sc || Na && 8 < Na && 11 >= Na), Nr = " ", Ar = !1;
  function _r(t, l) {
    switch (t) {
      case "keyup":
        return Dm.indexOf(l.keyCode) !== -1;
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
  function Cr(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var Hu = !1;
  function Hm(t, l) {
    switch (t) {
      case "compositionend":
        return Cr(l);
      case "keypress":
        return l.which !== 32 ? null : (Ar = !0, Nr);
      case "textInput":
        return t = l.data, t === Nr && Ar ? null : t;
      default:
        return null;
    }
  }
  function jm(t, l) {
    if (Hu)
      return t === "compositionend" || !Sc && _r(t, l) ? (t = br(), An = yc = Ae = null, Hu = !1, t) : null;
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
        return Or && l.locale !== "ko" ? null : l.data;
      default:
        return null;
    }
  }
  var Bm = {
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
  function Mr(t) {
    var l = t && t.nodeName && t.nodeName.toLowerCase();
    return l === "input" ? !!Bm[t.type] : l === "textarea";
  }
  function xr(t, l, e, u) {
    Du ? Uu ? Uu.push(u) : Uu = [u] : Du = u, l = Ri(l, "onChange"), 0 < l.length && (e = new Mn(
      "onChange",
      "change",
      null,
      e,
      u
    ), t.push({ event: e, listeners: l }));
  }
  var Aa = null, _a = null;
  function Ym(t) {
    g0(t, 0);
  }
  function Rn(t) {
    var l = Ta(t);
    if (sr(l)) return t;
  }
  function Rr(t, l) {
    if (t === "change") return l;
  }
  var Dr = !1;
  if (fe) {
    var bc;
    if (fe) {
      var Tc = "oninput" in document;
      if (!Tc) {
        var Ur = document.createElement("div");
        Ur.setAttribute("oninput", "return;"), Tc = typeof Ur.oninput == "function";
      }
      bc = Tc;
    } else bc = !1;
    Dr = bc && (!document.documentMode || 9 < document.documentMode);
  }
  function Hr() {
    Aa && (Aa.detachEvent("onpropertychange", jr), _a = Aa = null);
  }
  function jr(t) {
    if (t.propertyName === "value" && Rn(_a)) {
      var l = [];
      xr(
        l,
        _a,
        t,
        rc(t)
      ), Sr(Ym, l);
    }
  }
  function qm(t, l, e) {
    t === "focusin" ? (Hr(), Aa = l, _a = e, Aa.attachEvent("onpropertychange", jr)) : t === "focusout" && Hr();
  }
  function Gm(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Rn(_a);
  }
  function Qm(t, l) {
    if (t === "click") return Rn(l);
  }
  function Xm(t, l) {
    if (t === "input" || t === "change")
      return Rn(l);
  }
  function Lm(t, l) {
    return t === l && (t !== 0 || 1 / t === 1 / l) || t !== t && l !== l;
  }
  var ml = typeof Object.is == "function" ? Object.is : Lm;
  function Ca(t, l) {
    if (ml(t, l)) return !0;
    if (typeof t != "object" || t === null || typeof l != "object" || l === null)
      return !1;
    var e = Object.keys(t), u = Object.keys(l);
    if (e.length !== u.length) return !1;
    for (u = 0; u < e.length; u++) {
      var a = e[u];
      if (!Pi.call(l, a) || !ml(t[a], l[a]))
        return !1;
    }
    return !0;
  }
  function pc(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  function Br(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Yr(t, l) {
    var e = Br(t);
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
      e = Br(e);
    }
  }
  function qr(t, l) {
    return t && l ? t === l ? !0 : t && t.nodeType === 3 ? !1 : l && l.nodeType === 3 ? qr(t, l.parentNode) : "contains" in t ? t.contains(l) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(l) & 16) : !1 : !1;
  }
  function Gr(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var l = pc(t.document); l instanceof t.HTMLIFrameElement; ) {
      try {
        var e = typeof l.contentWindow.location.href == "string";
      } catch {
        e = !1;
      }
      if (e) t = l.contentWindow;
      else break;
      l = pc(t.document);
    }
    return l;
  }
  function Ec(t) {
    var l = t && t.nodeName && t.nodeName.toLowerCase();
    return l && (l === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || l === "textarea" || t.contentEditable === "true");
  }
  var Zm = fe && "documentMode" in document && 11 >= document.documentMode, ju = null, zc = null, Ma = null, Oc = !1;
  function Qr(t, l, e) {
    var u = e.window === e ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
    Oc || ju == null || ju !== pc(u) || (u = ju, "selectionStart" in u && Ec(u) ? u = { start: u.selectionStart, end: u.selectionEnd } : (u = (u.ownerDocument && u.ownerDocument.defaultView || window).getSelection(), u = {
      anchorNode: u.anchorNode,
      anchorOffset: u.anchorOffset,
      focusNode: u.focusNode,
      focusOffset: u.focusOffset
    }), Ma && Ca(Ma, u) || (Ma = u, u = Ri(zc, "onSelect"), 0 < u.length && (l = new Mn(
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
  }, Nc = {}, Xr = {};
  fe && (Xr = document.createElement("div").style, "AnimationEvent" in window || (delete Bu.animationend.animation, delete Bu.animationiteration.animation, delete Bu.animationstart.animation), "TransitionEvent" in window || delete Bu.transitionend.transition);
  function au(t) {
    if (Nc[t]) return Nc[t];
    if (!Bu[t]) return t;
    var l = Bu[t], e;
    for (e in l)
      if (l.hasOwnProperty(e) && e in Xr)
        return Nc[t] = l[e];
    return t;
  }
  var Lr = au("animationend"), Zr = au("animationiteration"), Vr = au("animationstart"), Vm = au("transitionrun"), Km = au("transitionstart"), Jm = au("transitioncancel"), Kr = au("transitionend"), Jr = /* @__PURE__ */ new Map(), Ac = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Ac.push("scrollEnd");
  function Hl(t, l) {
    Jr.set(t, l), eu(l, [t]);
  }
  var wm = 0;
  function oe(t, l) {
    if (t.name != null && t.name !== "auto") return t.name;
    if (l.autoName !== null) return l.autoName;
    t = ql.identifierPrefix;
    var e = wm++;
    return t = "_" + t + "t_" + e.toString(32) + "_", l.autoName = t;
  }
  function wr(t) {
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
  function re(t, l) {
    return t = wr(t), l = wr(l), l == null ? t === "auto" ? null : t : l === "auto" ? null : l;
  }
  var Dn = typeof reportError == "function" ? reportError : function(t) {
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
  }, Nl = [], Yu = 0, _c = 0;
  function Un() {
    for (var t = Yu, l = _c = Yu = 0; l < t; ) {
      var e = Nl[l];
      Nl[l++] = null;
      var u = Nl[l];
      Nl[l++] = null;
      var a = Nl[l];
      Nl[l++] = null;
      var n = Nl[l];
      if (Nl[l++] = null, u !== null && a !== null) {
        var i = u.pending;
        i === null ? a.next = a : (a.next = i.next, i.next = a), u.pending = a;
      }
      n !== 0 && Wr(e, a, n);
    }
  }
  function Hn(t, l, e, u) {
    Nl[Yu++] = t, Nl[Yu++] = l, Nl[Yu++] = e, Nl[Yu++] = u, _c |= u, t.lanes |= u, t = t.alternate, t !== null && (t.lanes |= u);
  }
  function Cc(t, l, e, u) {
    return Hn(t, l, e, u), jn(t);
  }
  function nu(t, l) {
    return Hn(t, null, null, l), jn(t);
  }
  function Wr(t, l, e) {
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
  function Wm(t, l, e, u) {
    this.tag = t, this.key = e, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = l, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = u, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function al(t, l, e, u) {
    return new Wm(t, l, e, u);
  }
  function Mc(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function se(t, l) {
    var e = t.alternate;
    return e === null ? (e = al(
      t.tag,
      l,
      t.key,
      t.mode
    ), e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.alternate = t, t.alternate = e) : (e.pendingProps = l, e.type = t.type, e.flags = 0, e.subtreeFlags = 0, e.deletions = null), e.flags = t.flags & 1206910976, e.childLanes = t.childLanes, e.lanes = t.lanes, e.child = t.child, e.memoizedProps = t.memoizedProps, e.memoizedState = t.memoizedState, e.updateQueue = t.updateQueue, l = t.dependencies, e.dependencies = l === null ? null : { lanes: l.lanes, firstContext: l.firstContext }, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.refCleanup = t.refCleanup, e;
  }
  function $r(t, l) {
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
      i = Eh(
        t,
        e,
        Ll.current
      ) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (u) {
        case Ul:
          return t = al(31, e, l, a), t.elementType = Ul, t.lanes = n, t;
        case el:
          return iu(e.children, a, n, l);
        case Ft:
          i = 8, a |= 24;
          break;
        case Ql:
          return t = al(12, e, l, a | 2), t.elementType = Ql, t.lanes = n, t;
        case Y:
          return t = al(13, e, l, a), t.elementType = Y, t.lanes = n, t;
        case V:
          return t = al(19, e, l, a), t.elementType = V, t.lanes = n, t;
        case ae:
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
              case Mt:
                i = 10;
                break t;
              case ue:
                i = 9;
                break t;
              case _:
                i = 11;
                break t;
              case yt:
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
  function xc(t, l, e) {
    return t = al(6, t, null, l), t.lanes = e, t;
  }
  function Fr(t) {
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
  var Ir = /* @__PURE__ */ new WeakMap();
  function Al(t, l) {
    if (typeof t == "object" && t !== null) {
      var e = Ir.get(t);
      return e !== void 0 ? e : (l = {
        value: t,
        source: l,
        stack: Ko(l)
      }, Ir.set(t, l), l);
    }
    return {
      value: t,
      source: l,
      stack: Ko(l)
    };
  }
  var Gu = [], Qu = 0, Yn = null, xa = 0, _l = [], Cl = 0, Ce = null, Vl = 1, Kl = "";
  function de(t, l) {
    Gu[Qu++] = xa, Gu[Qu++] = Yn, Yn = t, xa = l;
  }
  function kr(t, l, e) {
    _l[Cl++] = Vl, _l[Cl++] = Kl, _l[Cl++] = Ce, Ce = t;
    var u = Vl;
    t = Kl;
    var a = 32 - dl(u) - 1;
    u &= ~(1 << a), e += 1;
    var n = 32 - dl(l) + a;
    if (30 < n) {
      var i = a - a % 5;
      n = (u & (1 << i) - 1).toString(32), u >>= i, a -= i, Vl = 1 << 32 - dl(l) + a | e << a | u, Kl = n + t;
    } else
      Vl = 1 << n | e << a | u, Kl = t;
  }
  function qn(t) {
    t.return !== null && (de(t, 1), kr(t, 1, 0));
  }
  function Dc(t) {
    for (; t === Yn; )
      Yn = Gu[--Qu], Gu[Qu] = null, xa = Gu[--Qu], Gu[Qu] = null;
    for (; t === Ce; )
      Ce = _l[--Cl], _l[Cl] = null, Kl = _l[--Cl], _l[Cl] = null, Vl = _l[--Cl], _l[Cl] = null;
  }
  function Pr(t, l) {
    _l[Cl++] = Vl, _l[Cl++] = Kl, _l[Cl++] = Ce, Vl = l.id, Kl = l.overflow, Ce = t;
  }
  var Bt = null, Tt = null, F = !1, Me = null, Ml = !1, Uc = Error(o(519));
  function xe(t) {
    var l = Error(
      o(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Ra(Al(l, t)), Uc;
  }
  function ts(t) {
    var l = t.stateNode, e = t.type, u = t.memoizedProps;
    switch (l[Qt] = t, l[ul] = u, e) {
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
        for (e = 0; e < Pa.length; e++)
          P(Pa[e], l);
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
        P("invalid", l), dr(
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
        P("invalid", l);
        break;
      case "textarea":
        P("invalid", l), mr(l, u.value, u.defaultValue, u.children);
    }
    e = u.children, typeof e != "string" && typeof e != "number" && typeof e != "bigint" || l.textContent === "" + e || u.suppressHydrationWarning === !0 || p0(l.textContent, e) ? (u.popover != null && (P("beforetoggle", l), P("toggle", l)), u.onScroll != null && P("scroll", l), u.onScrollEnd != null && P("scrollend", l), u.onClick != null && (l.onclick = Zl), l = !0) : l = !1, l || xe(t, !0);
  }
  function Gn(t) {
    for (Bt = t.return; Bt; )
      switch (Bt.tag) {
        case 5:
        case 31:
        case 13:
          Ml = !1;
          return;
        case 27:
        case 3:
          Ml = !0;
          return;
        default:
          Bt = Bt.return;
      }
  }
  function Xu(t) {
    if (t !== Bt) return !1;
    if (!F) return Gn(t), F = !0, !1;
    var l = t.tag, e;
    if ((e = l !== 3 && l !== 27) && ((e = l === 5) && (e = t.type, e = !(e !== "form" && e !== "button") || ro(t.type, t.memoizedProps)), e = !e), e && Tt && xe(t), Gn(t), l === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(o(317));
      Tt = Q0(t);
    } else if (l === 31) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(o(317));
      Tt = Q0(t);
    } else
      l === 27 ? (l = Tt, Je(t.type) ? (t = To, To = null, Tt = t) : Tt = l) : Tt = Bt ? Rl(t.stateNode.nextSibling) : null;
    return !0;
  }
  function cu() {
    Tt = Bt = null, F = !1;
  }
  function Hc() {
    var t = Me;
    return t !== null && (cl === null ? cl = t : cl.push.apply(
      cl,
      t
    ), Me = null), t;
  }
  function Ra(t) {
    Me === null ? Me = [t] : Me.push(t);
  }
  var jc = Xl(null), fu = null, ye = null;
  function Re(t, l, e) {
    bt(jc, l._currentValue), l._currentValue = e;
  }
  function me(t) {
    t._currentValue = jc.current, Gt(jc);
  }
  function Qn(t, l, e) {
    for (; t !== null; ) {
      var u = t.alternate;
      if ((t.childLanes & l) !== l ? (t.childLanes |= l, u !== null && (u.childLanes |= l)) : u !== null && (u.childLanes & l) !== l && (u.childLanes |= l), t === e) break;
      t = t.return;
    }
  }
  function Bc(t, l, e, u) {
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
              n.lanes |= e, c = n.alternate, c !== null && (c.lanes |= e), Qn(
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
        i.lanes |= e, n = i.alternate, n !== null && (n.lanes |= e), Qn(i, e, t), i = null;
      } else
        a.tag === 13 && a.memoizedState !== null && a.memoizedState.dehydrated === null ? (a.lanes |= e, i = a.alternate, i !== null && (i.lanes |= e), Qn(
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
          ml(a.pendingProps.value, i.value) || (t !== null ? t.push(c) : t = [c]);
        }
      } else if (a === yn.current) {
        if (i = a.alternate, i === null) throw Error(o(387));
        i.memoizedState.memoizedState !== a.memoizedState.memoizedState && (t !== null ? t.push(da) : t = [da]);
      }
      a = a.return;
    }
    return t !== null && Bc(
      l,
      t,
      e,
      u
    ), l.flags |= 262144, t !== null;
  }
  function Xn(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!ml(
        t.context._currentValue,
        t.memoizedValue
      ))
        return !0;
      t = t.next;
    }
    return !1;
  }
  function ru(t) {
    fu = t, ye = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function Xt(t) {
    return ls(fu, t);
  }
  function Ln(t, l) {
    return fu === null && ru(t), ls(t, l);
  }
  function ls(t, l) {
    var e = l._currentValue;
    if (l = { context: l, memoizedValue: e, next: null }, ye === null) {
      if (t === null) throw Error(o(308));
      ye = l, t.dependencies = { lanes: 0, firstContext: l }, t.flags |= 524288;
    } else ye = ye.next = l;
    return e;
  }
  var $m = typeof AbortController < "u" ? AbortController : function() {
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
  }, Fm = f.unstable_scheduleCallback, Im = f.unstable_NormalPriority, xt = {
    $$typeof: Mt,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Yc() {
    return {
      controller: new $m(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Da(t) {
    t.refCount--, t.refCount === 0 && Fm(Im, function() {
      t.controller.abort();
    });
  }
  function es(t, l) {
    if ((t.pendingLanes & 4194048) !== 0) {
      var e = t.transitionTypes;
      for (e === null && (e = t.transitionTypes = []), t = 0; t < l.length; t++) {
        var u = l[t];
        e.indexOf(u) === -1 && e.push(u);
      }
    }
  }
  var Ua = null;
  function km(t) {
    var l = t.transitionTypes;
    return t.transitionTypes = null, l;
  }
  var Ha = null, qc = 0, su = 0, Lu = null;
  function Pm(t, l) {
    if (Ha === null) {
      var e = Ha = [];
      qc = 0, su = lo(), Lu = {
        status: "pending",
        value: void 0,
        then: function(u) {
          e.push(u);
        }
      };
    }
    return qc++, l.then(us, us), l;
  }
  function us() {
    if (--qc === 0 && (Ua = null, Ha !== null)) {
      Lu !== null && (Lu.status = "fulfilled");
      var t = Ha;
      Ha = null, su = 0, Lu = null;
      for (var l = 0; l < t.length; l++) (0, t[l])();
    }
  }
  function tv(t, l) {
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
  var as = q.S;
  q.S = function(t, l) {
    if (Fd = rl(), typeof l == "object" && l !== null && typeof l.then == "function" && Pm(t, l), Ua !== null)
      for (var e = ia; e !== null; )
        es(e, Ua), e = e.next;
    if (e = t.types, e !== null) {
      for (var u = ia; u !== null; )
        es(u, e), u = u.next;
      if (su !== 0) {
        u = Ua, u === null && (u = Ua = []);
        for (var a = 0; a < e.length; a++) {
          var n = e[a];
          u.indexOf(n) === -1 && u.push(n);
        }
      }
    }
    as !== null && as(t, l);
  };
  var du = Xl(null);
  function Gc() {
    var t = du.current;
    return t !== null ? t : St.pooledCache;
  }
  function Zn(t, l) {
    l === null ? bt(du, du.current) : bt(du, l.pool);
  }
  function ns() {
    var t = Gc();
    return t === null ? null : { parent: xt._currentValue, pool: t };
  }
  var Zu = Error(o(460)), Qc = Error(o(474)), Vn = Error(o(542)), Kn = { then: function() {
  } };
  function is(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function cs(t, l, e) {
    switch (e = t[e], e === void 0 ? t.push(l) : e !== l && (l.then(Zl, Zl), l = e), l.status) {
      case "fulfilled":
        return l.value;
      case "rejected":
        throw t = l.reason, os(t), t === void 0 && !("reason" in l) ? Error(o(600)) : t;
      default:
        if (typeof l.status == "string") l.then(Zl, Zl);
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
            throw t = l.reason, os(t), t;
        }
        throw mu = l, Zu;
    }
  }
  function yu(t) {
    try {
      var l = t._init;
      return l(t._payload);
    } catch (e) {
      throw e !== null && typeof e == "object" && typeof e.then == "function" ? (mu = e, Zu) : e;
    }
  }
  var mu = null;
  function fs() {
    if (mu === null) throw Error(o(459));
    var t = mu;
    return mu = null, t;
  }
  function os(t) {
    if (t === Zu || t === Vn)
      throw Error(o(483));
  }
  var Vu = null, ja = 0;
  function Jn(t) {
    var l = ja;
    return ja += 1, Vu === null && (Vu = []), cs(Vu, t, l);
  }
  function De(t, l) {
    l = l.props.ref, t.ref = l !== void 0 ? l : null;
  }
  function wn(t, l) {
    throw l.$$typeof === ut ? Error(o(525)) : (t = Object.prototype.toString.call(l), Error(
      o(
        31,
        t === "[object Object]" ? "object with keys {" + Object.keys(l).join(", ") + "}" : t
      )
    ));
  }
  function rs(t) {
    function l(h, d) {
      if (t) {
        var S = h.deletions;
        S === null ? (h.deletions = [d], h.flags |= 16) : S.push(d);
      }
    }
    function e(h, d) {
      if (!t) return null;
      for (; d !== null; )
        l(h, d), d = d.sibling;
      return null;
    }
    function u(h) {
      for (var d = /* @__PURE__ */ new Map(); h !== null; )
        h.key === null ? d.set(h.index, h) : d.set(h.key, h), h = h.sibling;
      return d;
    }
    function a(h, d) {
      return h = se(h, d), h.index = 0, h.sibling = null, h;
    }
    function n(h, d, S) {
      return h.index = S, t ? (S = h.alternate, S !== null ? (S = S.index, S < d ? (h.flags |= 2, d) : S) : (h.flags |= 134217730, d)) : (h.flags |= 1048576, d);
    }
    function i(h) {
      return t && h.alternate === null && (h.flags |= 134217730), h;
    }
    function c(h, d, S, z) {
      return d === null || d.tag !== 6 ? (d = xc(S, h.mode, z), d.return = h, d) : (d = a(d, S), d.return = h, d);
    }
    function r(h, d, S, z) {
      var D = S.type;
      return D === el ? (h = T(
        h,
        d,
        S.props.children,
        z,
        S.key
      ), De(h, S), h) : d !== null && (d.elementType === D || typeof D == "object" && D !== null && D.$$typeof === rt && yu(D) === d.type) ? (d = a(d, S.props), De(d, S), d.return = h, d) : (d = Bn(
        S.type,
        S.key,
        S.props,
        null,
        h.mode,
        z
      ), De(d, S), d.return = h, d);
    }
    function g(h, d, S, z) {
      return d === null || d.tag !== 4 || d.stateNode.containerInfo !== S.containerInfo || d.stateNode.implementation !== S.implementation ? (d = Rc(S, h.mode, z), d.return = h, d) : (d = a(d, S.children || []), d.return = h, d);
    }
    function T(h, d, S, z, D) {
      return d === null || d.tag !== 7 ? (d = iu(
        S,
        h.mode,
        z,
        D
      ), d.return = h, d) : (d = a(d, S), d.return = h, d);
    }
    function O(h, d, S) {
      if (typeof d == "string" && d !== "" || typeof d == "number" || typeof d == "bigint")
        return d = xc(
          "" + d,
          h.mode,
          S
        ), d.return = h, d;
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case zl:
            return S = Bn(
              d.type,
              d.key,
              d.props,
              null,
              h.mode,
              S
            ), De(S, d), S.return = h, S;
          case ll:
            return d = Rc(
              d,
              h.mode,
              S
            ), d.return = h, d;
          case rt:
            return d = yu(d), O(h, d, S);
        }
        if (ft(d) || L(d))
          return d = iu(
            d,
            h.mode,
            S,
            null
          ), d.return = h, d;
        if (typeof d.then == "function")
          return O(h, Jn(d), S);
        if (d.$$typeof === Mt)
          return O(
            h,
            Ln(h, d),
            S
          );
        wn(h, d);
      }
      return null;
    }
    function v(h, d, S, z) {
      var D = d !== null ? d.key : null;
      if (typeof S == "string" && S !== "" || typeof S == "number" || typeof S == "bigint")
        return D !== null ? null : c(h, d, "" + S, z);
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case zl:
            return S.key === D ? r(h, d, S, z) : null;
          case ll:
            return S.key === D ? g(h, d, S, z) : null;
          case rt:
            return S = yu(S), v(h, d, S, z);
        }
        if (ft(S) || L(S))
          return D !== null ? null : T(h, d, S, z, null);
        if (typeof S.then == "function")
          return v(
            h,
            d,
            Jn(S),
            z
          );
        if (S.$$typeof === Mt)
          return v(
            h,
            d,
            Ln(h, S),
            z
          );
        wn(h, S);
      }
      return null;
    }
    function b(h, d, S, z, D) {
      if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint")
        return h = h.get(S) || null, c(d, h, "" + z, D);
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case zl:
            return h = h.get(
              z.key === null ? S : z.key
            ) || null, r(d, h, z, D);
          case ll:
            return h = h.get(
              z.key === null ? S : z.key
            ) || null, g(d, h, z, D);
          case rt:
            return z = yu(z), b(
              h,
              d,
              S,
              z,
              D
            );
        }
        if (ft(z) || L(z))
          return h = h.get(S) || null, T(d, h, z, D, null);
        if (typeof z.then == "function")
          return b(
            h,
            d,
            S,
            Jn(z),
            D
          );
        if (z.$$typeof === Mt)
          return b(
            h,
            d,
            S,
            Ln(d, z),
            D
          );
        wn(d, z);
      }
      return null;
    }
    function M(h, d, S, z) {
      for (var D = null, lt = null, G = d, Z = d = 0, Ut = null; G !== null && Z < S.length; Z++) {
        G.index > Z ? (Ut = G, G = null) : Ut = G.sibling;
        var et = v(
          h,
          G,
          S[Z],
          z
        );
        if (et === null) {
          G === null && (G = Ut);
          break;
        }
        t && G && et.alternate === null && l(h, G), d = n(et, d, Z), lt === null ? D = et : lt.sibling = et, lt = et, G = Ut;
      }
      if (Z === S.length)
        return e(h, G), F && de(h, Z), D;
      if (G === null) {
        for (; Z < S.length; Z++)
          G = O(h, S[Z], z), G !== null && (d = n(
            G,
            d,
            Z
          ), lt === null ? D = G : lt.sibling = G, lt = G);
        return F && de(h, Z), D;
      }
      for (G = u(G); Z < S.length; Z++)
        Ut = b(
          G,
          h,
          Z,
          S[Z],
          z
        ), Ut !== null && (t && (et = Ut.alternate, et !== null && G.delete(et.key === null ? Z : et.key)), d = n(
          Ut,
          d,
          Z
        ), lt === null ? D = Ut : lt.sibling = Ut, lt = Ut);
      return t && G.forEach(function(Ie) {
        return l(h, Ie);
      }), F && de(h, Z), D;
    }
    function H(h, d, S, z) {
      if (S == null) throw Error(o(151));
      for (var D = null, lt = null, G = d, Z = d = 0, Ut = null, et = S.next(); G !== null && !et.done; Z++, et = S.next()) {
        G.index > Z ? (Ut = G, G = null) : Ut = G.sibling;
        var Ie = v(h, G, et.value, z);
        if (Ie === null) {
          G === null && (G = Ut);
          break;
        }
        t && G && Ie.alternate === null && l(h, G), d = n(Ie, d, Z), lt === null ? D = Ie : lt.sibling = Ie, lt = Ie, G = Ut;
      }
      if (et.done)
        return e(h, G), F && de(h, Z), D;
      if (G === null) {
        for (; !et.done; Z++, et = S.next())
          et = O(h, et.value, z), et !== null && (d = n(et, d, Z), lt === null ? D = et : lt.sibling = et, lt = et);
        return F && de(h, Z), D;
      }
      for (G = u(G); !et.done; Z++, et = S.next())
        et = b(G, h, Z, et.value, z), et !== null && (t && (Ut = et.alternate, Ut !== null && G.delete(
          Ut.key === null ? Z : Ut.key
        )), d = n(et, d, Z), lt === null ? D = et : lt.sibling = et, lt = et);
      return t && G.forEach(function(Hh) {
        return l(h, Hh);
      }), F && de(h, Z), D;
    }
    function W(h, d, S, z) {
      if (typeof S == "object" && S !== null && S.type === el && S.key === null && S.props.ref === void 0 && (S = S.props.children), typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case zl:
            t: {
              for (var D = S.key; d !== null; ) {
                if (d.key === D) {
                  if (D = S.type, D === el) {
                    if (d.tag === 7) {
                      e(
                        h,
                        d.sibling
                      ), z = a(
                        d,
                        S.props.children
                      ), De(z, S), z.return = h, h = z;
                      break t;
                    }
                  } else if (d.elementType === D || typeof D == "object" && D !== null && D.$$typeof === rt && yu(D) === d.type) {
                    e(
                      h,
                      d.sibling
                    ), z = a(d, S.props), De(z, S), z.return = h, h = z;
                    break t;
                  }
                  e(h, d);
                  break;
                } else l(h, d);
                d = d.sibling;
              }
              S.type === el ? (z = iu(
                S.props.children,
                h.mode,
                z,
                S.key
              ), De(z, S), z.return = h, h = z) : (z = Bn(
                S.type,
                S.key,
                S.props,
                null,
                h.mode,
                z
              ), De(z, S), z.return = h, h = z);
            }
            return i(h);
          case ll:
            t: {
              for (D = S.key; d !== null; ) {
                if (d.key === D)
                  if (d.tag === 4 && d.stateNode.containerInfo === S.containerInfo && d.stateNode.implementation === S.implementation) {
                    e(
                      h,
                      d.sibling
                    ), z = a(d, S.children || []), z.return = h, h = z;
                    break t;
                  } else {
                    e(h, d);
                    break;
                  }
                else l(h, d);
                d = d.sibling;
              }
              z = Rc(S, h.mode, z), z.return = h, h = z;
            }
            return i(h);
          case rt:
            return S = yu(S), W(
              h,
              d,
              S,
              z
            );
        }
        if (ft(S))
          return M(
            h,
            d,
            S,
            z
          );
        if (L(S)) {
          if (D = L(S), typeof D != "function") throw Error(o(150));
          return S = D.call(S), H(
            h,
            d,
            S,
            z
          );
        }
        if (typeof S.then == "function")
          return W(
            h,
            d,
            Jn(S),
            z
          );
        if (S.$$typeof === Mt)
          return W(
            h,
            d,
            Ln(h, S),
            z
          );
        wn(h, S);
      }
      return typeof S == "string" && S !== "" || typeof S == "number" || typeof S == "bigint" ? (S = "" + S, d !== null && d.tag === 6 ? (e(h, d.sibling), z = a(d, S), z.return = h, h = z) : (e(h, d), z = xc(S, h.mode, z), z.return = h, h = z), i(h)) : e(h, d);
    }
    return function(h, d, S, z) {
      try {
        ja = 0;
        var D = W(
          h,
          d,
          S,
          z
        );
        return Vu = null, D;
      } catch (G) {
        if (G === Zu || G === Vn) throw G;
        var lt = al(29, G, null, h.mode);
        return lt.lanes = z, lt.return = h, lt;
      }
    };
  }
  var vu = rs(!0), ss = rs(!1), Ue = !1;
  function Xc(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Lc(t, l) {
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
  function je(t, l, e) {
    var u = t.updateQueue;
    if (u === null) return null;
    if (u = u.shared, (ot & 2) !== 0) {
      var a = u.pending;
      return a === null ? l.next = l : (l.next = a.next, a.next = l), u.pending = l, l = jn(t), Wr(t, null, e), l;
    }
    return Hn(t, u, l, e), jn(t);
  }
  function Ba(t, l, e) {
    if (l = l.updateQueue, l !== null && (l = l.shared, (e & 4194048) !== 0)) {
      var u = l.lanes;
      u &= t.pendingLanes, e |= u, l.lanes = e, ko(t, e);
    }
  }
  function Zc(t, l) {
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
  var Vc = !1;
  function Ya() {
    if (Vc) {
      var t = Lu;
      if (t !== null) throw t;
    }
  }
  function qa(t, l, e, u) {
    Vc = !1;
    var a = t.updateQueue;
    Ue = !1;
    var n = a.firstBaseUpdate, i = a.lastBaseUpdate, c = a.shared.pending;
    if (c !== null) {
      a.shared.pending = null;
      var r = c, g = r.next;
      r.next = null, i === null ? n = g : i.next = g, i = r;
      var T = t.alternate;
      T !== null && (T = T.updateQueue, c = T.lastBaseUpdate, c !== i && (c === null ? T.firstBaseUpdate = g : c.next = g, T.lastBaseUpdate = r));
    }
    if (n !== null) {
      var O = a.baseState;
      i = 0, T = g = r = null, c = n;
      do {
        var v = c.lane & -536870913, b = v !== c.lane;
        if (b ? (tt & v) === v : (u & v) === v) {
          v !== 0 && v === su && (Vc = !0), T !== null && (T = T.next = {
            lane: 0,
            tag: c.tag,
            payload: c.payload,
            callback: null,
            next: null
          });
          t: {
            var M = t, H = c;
            v = l;
            var W = e;
            switch (H.tag) {
              case 1:
                if (M = H.payload, typeof M == "function") {
                  O = M.call(W, O, v);
                  break t;
                }
                O = M;
                break t;
              case 3:
                M.flags = M.flags & -65537 | 128;
              case 0:
                if (M = H.payload, v = typeof M == "function" ? M.call(W, O, v) : M, v == null) break t;
                O = $({}, O, v);
                break t;
              case 2:
                Ue = !0;
            }
          }
          v = c.callback, v !== null && (t.flags |= 64, b && (t.flags |= 8192), b = a.callbacks, b === null ? a.callbacks = [v] : b.push(v));
        } else
          b = {
            lane: v,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null
          }, T === null ? (g = T = b, r = O) : T = T.next = b, i |= v;
        if (c = c.next, c === null) {
          if (c = a.shared.pending, c === null)
            break;
          b = c, c = b.next, b.next = null, a.lastBaseUpdate = b, a.shared.pending = null;
        }
      } while (!0);
      T === null && (r = O), a.baseState = r, a.firstBaseUpdate = g, a.lastBaseUpdate = T, n === null && (a.shared.lanes = 0), Le |= i, t.lanes = i, t.memoizedState = O;
    }
  }
  function ds(t, l) {
    if (typeof t != "function")
      throw Error(o(191, t));
    t.call(l);
  }
  function ys(t, l) {
    var e = t.callbacks;
    if (e !== null)
      for (t.callbacks = null, t = 0; t < e.length; t++)
        ds(e[t], l);
  }
  var Be = Xl(null), Wn = Xl(0);
  function ms(t, l) {
    t = be, bt(Wn, t), bt(Be, l), be = t | l.baseLanes;
  }
  function Kc() {
    bt(Wn, be), bt(Be, Be.current);
  }
  function Jc() {
    be = Wn.current, Gt(Be), Gt(Wn);
  }
  var Lt = Xl(null), wt = null;
  function Ye(t) {
    var l = t.alternate;
    bt(Zt, Zt.current & 1), bt(Lt, t), wt === null && (l === null || Be.current !== null || l.memoizedState !== null) && (wt = t);
  }
  function wc(t) {
    bt(Zt, Zt.current), bt(Lt, t), wt === null && (wt = t);
  }
  function vs(t) {
    t.tag === 22 ? (bt(Zt, Zt.current), bt(Lt, t), wt === null && (wt = t)) : qe();
  }
  function qe() {
    bt(Zt, Zt.current), bt(Lt, Lt.current);
  }
  function vl(t) {
    Gt(Lt), wt === t && (wt = null), Gt(Zt);
  }
  var Zt = Xl(0);
  function Ga(t, l) {
    bt(Lt, Lt.current), bt(Zt, l);
  }
  function Wc(t) {
    Gt(Zt), Gt(Lt), wt === t && (wt = null);
  }
  function $n(t) {
    for (var l = t; l !== null; ) {
      if (l.tag === 13) {
        var e = l.memoizedState;
        if (e !== null && (e = e.dehydrated, e === null || So(e) || bo(e)))
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
  var ve = 0, w = null, gt = null, Rt = null, Fn = !1, Ku = !1, hu = !1, In = 0, Qa = 0, Ju = null, lv = 0;
  function Ot() {
    throw Error(o(321));
  }
  function $c(t, l) {
    if (l === null) return !1;
    for (var e = 0; e < l.length && e < t.length; e++)
      if (!ml(t[e], l[e])) return !1;
    return !0;
  }
  function Fc(t, l, e, u, a, n) {
    return ve = n, w = l, l.memoizedState = null, l.updateQueue = null, l.lanes = 0, q.H = t === null || t.memoizedState === null ? ks : Ps, hu = !1, n = e(u, a), hu = !1, Ku && (n = gs(
      l,
      e,
      u,
      a
    )), hs(t), n;
  }
  function hs(t) {
    q.H = ai;
    var l = gt !== null && gt.next !== null;
    if (ve = 0, Rt = gt = w = null, Fn = !1, Qa = 0, Ju = null, l) throw Error(o(300));
    t === null || Dt || (t = t.dependencies, t !== null && Xn(t) && (Dt = !0));
  }
  function gs(t, l, e, u) {
    w = t;
    var a = 0;
    do {
      if (Ku && (Ju = null), Qa = 0, Ku = !1, 25 <= a) throw Error(o(301));
      if (a += 1, Rt = gt = null, t.updateQueue != null) {
        var n = t.updateQueue;
        n.lastEffect = null, n.events = null, n.stores = null, n.memoCache != null && (n.memoCache.index = 0);
      }
      q.H = ov, n = l(e, u);
    } while (Ku);
    return n;
  }
  function ev() {
    var t = q.H, l = t.useState()[0];
    return l = typeof l.then == "function" ? Xa(l) : l, t = t.useState()[0], (gt !== null ? gt.memoizedState : null) !== t && (w.flags |= 1024), l;
  }
  function Ic() {
    var t = In !== 0;
    return In = 0, t;
  }
  function kc(t, l, e) {
    l.updateQueue = t.updateQueue, l.flags &= -2053, t.lanes &= ~e;
  }
  function Pc(t) {
    if (Fn) {
      for (t = t.memoizedState; t !== null; ) {
        var l = t.queue;
        l !== null && (l.pending = null), t = t.next;
      }
      Fn = !1;
    }
    ve = 0, Rt = gt = w = null, Ku = !1, Qa = In = 0, Ju = null;
  }
  function kt() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Rt === null ? w.memoizedState = Rt = t : Rt = Rt.next = t, Rt;
  }
  function Ct() {
    if (gt === null) {
      var t = w.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = gt.next;
    var l = Rt === null ? w.memoizedState : Rt.next;
    if (l !== null)
      Rt = l, gt = t;
    else {
      if (t === null)
        throw w.alternate === null ? Error(o(467)) : Error(o(310));
      gt = t, t = {
        memoizedState: gt.memoizedState,
        baseState: gt.baseState,
        baseQueue: gt.baseQueue,
        queue: gt.queue,
        next: null
      }, Rt === null ? w.memoizedState = Rt = t : Rt = Rt.next = t;
    }
    return Rt;
  }
  function kn() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Xa(t) {
    var l = Qa;
    return Qa += 1, Ju === null && (Ju = []), t = cs(Ju, t, l), l = w, (Rt === null ? l.memoizedState : Rt.next) === null && (l = l.alternate, q.H = l === null || l.memoizedState === null ? ks : Ps), t;
  }
  function Pn(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return Xa(t);
      if (t.$$typeof === A) return;
      if (t.$$typeof === Mt) return Xt(t);
    }
    throw Error(o(438, String(t)));
  }
  function tf(t) {
    var l = null, e = w.updateQueue;
    if (e !== null && (l = e.memoCache), l == null) {
      var u = w.alternate;
      u !== null && (u = u.updateQueue, u !== null && (u = u.memoCache, u != null && (l = {
        data: u.data.map(function(a) {
          return a.slice();
        }),
        index: 0
      })));
    }
    if (l == null && (l = { data: [], index: 0 }), e === null && (e = kn(), w.updateQueue = e), e.memoCache = l, e = l.data[l.index], e === void 0)
      for (e = l.data[l.index] = Array(t), u = 0; u < t; u++)
        e[u] = Pe;
    return l.index++, e;
  }
  function he(t, l) {
    return typeof l == "function" ? l(t) : l;
  }
  function ti(t) {
    var l = Ct();
    return lf(l, gt, t);
  }
  function lf(t, l, e) {
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
      var c = i = null, r = null, g = l, T = !1;
      do {
        var O = g.lane & -536870913;
        if (O !== g.lane ? (tt & O) === O : (ve & O) === O) {
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
            }), O === su && (T = !0);
          else if ((ve & v) === v) {
            g = g.next, v === su && (T = !0);
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
            }, r === null ? (c = r = O, i = n) : r = r.next = O, w.lanes |= v, Le |= v;
          O = g.action, hu && e(n, O), n = g.hasEagerState ? g.eagerState : e(n, O);
        } else
          v = {
            lane: O,
            revertLane: g.revertLane,
            gesture: g.gesture,
            action: g.action,
            hasEagerState: g.hasEagerState,
            eagerState: g.eagerState,
            next: null
          }, r === null ? (c = r = v, i = n) : r = r.next = v, w.lanes |= O, Le |= O;
        g = g.next;
      } while (g !== null && g !== l);
      if (r === null ? i = n : r.next = c, !ml(n, t.memoizedState) && (Dt = !0, T && (e = Lu, e !== null)))
        throw e;
      t.memoizedState = n, t.baseState = i, t.baseQueue = r, u.lastRenderedState = n;
    }
    return a === null && (u.lanes = 0), [t.memoizedState, u.dispatch];
  }
  function ef(t) {
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
      ml(n, l.memoizedState) || (Dt = !0), l.memoizedState = n, l.baseQueue === null && (l.baseState = n), e.lastRenderedState = n;
    }
    return [n, u];
  }
  function Ss(t, l, e) {
    var u = w, a = Ct(), n = F;
    if (n) {
      if (e === void 0) throw Error(o(407));
      e = e();
    } else e = l();
    var i = !ml(
      (gt || a).memoizedState,
      e
    );
    if (i && (a.memoizedState = e, Dt = !0), a = a.queue, nf(ps.bind(null, u, a, t), [
      t
    ]), t = a.getSnapshot !== l || i || Rt !== null && (Rt.memoizedState.tag & 1) !== 0, wu(
      t ? 9 : 8,
      { destroy: void 0 },
      Ts.bind(null, u, a, e, l),
      null
    ), t) {
      if (u.flags |= 2048, St === null) throw Error(o(349));
      n || (ve & 127) !== 0 || bs(u, l, e);
    }
    return e;
  }
  function bs(t, l, e) {
    t.flags |= 16384, t = { getSnapshot: l, value: e }, l = w.updateQueue, l === null ? (l = kn(), w.updateQueue = l, l.stores = [t]) : (e = l.stores, e === null ? l.stores = [t] : e.push(t));
  }
  function Ts(t, l, e, u) {
    l.value = e, l.getSnapshot = u, Es(l) && zs(t);
  }
  function ps(t, l, e) {
    return e(function() {
      Es(l) && zs(t);
    });
  }
  function Es(t) {
    var l = t.getSnapshot;
    t = t.value;
    try {
      var e = l();
      return !ml(t, e);
    } catch {
      return !0;
    }
  }
  function zs(t) {
    var l = nu(t, 2);
    l !== null && fl(l, t, 2);
  }
  function uf(t) {
    var l = kt();
    if (typeof t == "function") {
      var e = t;
      if (t = e(), hu) {
        Ne(!0);
        try {
          e();
        } finally {
          Ne(!1);
        }
      }
    }
    return l.memoizedState = l.baseState = t, l.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: he,
      lastRenderedState: t
    }, l;
  }
  function Os(t, l, e, u) {
    return t.baseState = e, lf(
      t,
      gt,
      typeof u == "function" ? u : he
    );
  }
  function uv(t, l, e, u, a) {
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
      q.T !== null ? e(!0) : n.isTransition = !1, u(n), e = l.pending, e === null ? (n.next = l.pending = n, Ns(l, n)) : (n.next = e.next, l.pending = e.next = n);
    }
  }
  function Ns(t, l) {
    var e = l.action, u = l.payload, a = t.state;
    if (l.isTransition) {
      var n = q.T, i = {};
      i.types = n !== null ? n.types : null, q.T = i;
      try {
        var c = e(a, u), r = q.S;
        r !== null && r(i, c), As(t, l, c);
      } catch (g) {
        af(t, l, g);
      } finally {
        n !== null && i.types !== null && (n.types = i.types), q.T = n;
      }
    } else
      try {
        n = e(a, u), As(t, l, n);
      } catch (g) {
        af(t, l, g);
      }
  }
  function As(t, l, e) {
    e !== null && typeof e == "object" && typeof e.then == "function" ? e.then(
      function(u) {
        _s(t, l, u);
      },
      function(u) {
        return af(t, l, u);
      }
    ) : _s(t, l, e);
  }
  function _s(t, l, e) {
    l.status = "fulfilled", l.value = e, Cs(l), t.state = e, l = t.pending, l !== null && (e = l.next, e === l ? t.pending = null : (e = e.next, l.next = e, Ns(t, e)));
  }
  function af(t, l, e) {
    var u = t.pending;
    if (t.pending = null, u !== null) {
      u = u.next;
      do
        l.status = "rejected", l.reason = e, Cs(l), l = l.next;
      while (l !== u);
    }
    t.action = null;
  }
  function Cs(t) {
    t = t.listeners;
    for (var l = 0; l < t.length; l++) (0, t[l])();
  }
  function Ms(t, l) {
    return l;
  }
  function xs(t, l) {
    if (F) {
      var e = St.formState;
      if (e !== null) {
        t: {
          var u = w;
          if (F) {
            if (Tt) {
              l: {
                for (var a = Tt, n = Ml; a.nodeType !== 8; ) {
                  if (!n) {
                    a = null;
                    break l;
                  }
                  if (a = Rl(
                    a.nextSibling
                  ), a === null) {
                    a = null;
                    break l;
                  }
                }
                n = a.data, a = n === "F!" || n === "F" ? a : null;
              }
              if (a) {
                Tt = Rl(
                  a.nextSibling
                ), u = a.data === "F!";
                break t;
              }
            }
            xe(u);
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
      lastRenderedReducer: Ms,
      lastRenderedState: l
    }, e.queue = u, e = $s.bind(
      null,
      w,
      u
    ), u.dispatch = e, u = uf(!1), n = sf.bind(
      null,
      w,
      !1,
      u.queue
    ), u = kt(), a = {
      state: l,
      dispatch: null,
      action: t,
      pending: null
    }, u.queue = a, e = uv.bind(
      null,
      w,
      a,
      n,
      e
    ), a.dispatch = e, u.memoizedState = t, [l, e, !1];
  }
  function Rs(t) {
    var l = Ct();
    return Ds(l, gt, t);
  }
  function Ds(t, l, e) {
    if (l = lf(
      t,
      l,
      Ms
    )[0], t = ti(he)[0], typeof l == "object" && l !== null && typeof l.then == "function")
      try {
        var u = Xa(l);
      } catch (i) {
        throw i === Zu ? Vn : i;
      }
    else u = l;
    l = Ct();
    var a = l.queue, n = a.dispatch;
    return e !== l.memoizedState && (w.flags |= 2048, wu(
      9,
      { destroy: void 0 },
      av.bind(null, a, e),
      null
    )), [u, n, t];
  }
  function av(t, l) {
    t.action = l;
  }
  function Us(t) {
    var l = Ct(), e = gt;
    if (e !== null)
      return Ds(l, e, t);
    Ct(), l = l.memoizedState, e = Ct();
    var u = e.queue.dispatch;
    return e.memoizedState = t, [l, u, !1];
  }
  function wu(t, l, e, u) {
    return t = { tag: t, create: e, deps: u, inst: l, next: null }, l = w.updateQueue, l === null && (l = kn(), w.updateQueue = l), e = l.lastEffect, e === null ? l.lastEffect = t.next = t : (u = e.next, e.next = t, t.next = u, l.lastEffect = t), t;
  }
  function Hs() {
    return Ct().memoizedState;
  }
  function li(t, l, e, u) {
    var a = kt();
    w.flags |= t, a.memoizedState = wu(
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
    gt !== null && u !== null && $c(u, gt.memoizedState.deps) ? a.memoizedState = wu(l, n, e, u) : (w.flags |= t, a.memoizedState = wu(
      1 | l,
      n,
      e,
      u
    ));
  }
  function js(t, l) {
    li(8390656, 8, t, l);
  }
  function nf(t, l) {
    ei(2048, 8, t, l);
  }
  function nv(t) {
    w.flags |= 4;
    var l = w.updateQueue;
    if (l === null)
      l = kn(), w.updateQueue = l, l.events = [t];
    else {
      var e = l.events;
      e === null ? l.events = [t] : e.push(t);
    }
  }
  function Bs(t) {
    var l = Ct().memoizedState;
    return nv({ ref: l, nextImpl: t }), function() {
      if ((ot & 2) !== 0) throw Error(o(440));
      return l.impl.apply(void 0, arguments);
    };
  }
  function Ys(t, l) {
    return ei(4, 2, t, l);
  }
  function qs(t, l) {
    return ei(4, 4, t, l);
  }
  function Gs(t, l) {
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
  function Qs(t, l, e) {
    e = e != null ? e.concat([t]) : null, ei(4, 4, Gs.bind(null, l, t), e);
  }
  function cf() {
  }
  function Xs(t, l) {
    var e = Ct();
    l = l === void 0 ? null : l;
    var u = e.memoizedState;
    return l !== null && $c(l, u[1]) ? u[0] : (e.memoizedState = [t, l], t);
  }
  function Ls(t, l) {
    var e = Ct();
    l = l === void 0 ? null : l;
    var u = e.memoizedState;
    if (l !== null && $c(l, u[1]))
      return u[0];
    if (u = t(), hu) {
      Ne(!0);
      try {
        t();
      } finally {
        Ne(!1);
      }
    }
    return e.memoizedState = [u, l], u;
  }
  function ff(t, l, e) {
    return e === void 0 || (ve & 1073741824) !== 0 && (tt & 261930) === 0 ? t.memoizedState = l : (t.memoizedState = e, t = kd(), w.lanes |= t, Le |= t, e);
  }
  function Zs(t, l, e, u) {
    return ml(e, l) ? e : Be.current !== null ? (t = ff(t, e, u), ml(t, l) || (Dt = !0), t) : (ve & 106) === 0 || (ve & 1073741824) !== 0 && (tt & 261930) === 0 ? (Dt = !0, t.memoizedState = e) : (t = kd(), w.lanes |= t, Le |= t, l);
  }
  function Vs(t, l, e, u, a) {
    var n = K.p;
    K.p = n !== 0 && 8 > n ? n : 8;
    var i = q.T, c = {};
    c.types = i !== null ? i.types : null, q.T = c, sf(t, !1, l, e);
    try {
      var r = a(), g = q.S;
      if (g !== null && g(c, r), r !== null && typeof r == "object" && typeof r.then == "function") {
        var T = tv(
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
    } catch (O) {
      La(
        t,
        l,
        { then: function() {
        }, status: "rejected", reason: O },
        bl()
      );
    } finally {
      K.p = n, i !== null && c.types !== null && (i.types = c.types), q.T = i;
    }
  }
  function iv() {
  }
  function of(t, l, e, u) {
    if (t.tag !== 5) throw Error(o(476));
    var a = Ks(t).queue;
    Vs(
      t,
      a,
      l,
      ne,
      e === null ? iv : function() {
        return Js(t), e(u);
      }
    );
  }
  function Ks(t) {
    var l = t.memoizedState;
    if (l !== null) return l;
    l = {
      memoizedState: ne,
      baseState: ne,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: he,
        lastRenderedState: ne
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
        lastRenderedReducer: he,
        lastRenderedState: e
      },
      next: null
    }, t.memoizedState = l, t = t.alternate, t !== null && (t.memoizedState = l), l;
  }
  function Js(t) {
    var l = Ks(t);
    l.next === null && (l = t.alternate.memoizedState), La(
      t,
      l.next.queue,
      {},
      bl()
    );
  }
  function rf() {
    return Xt(da);
  }
  function ws() {
    return Ct().memoizedState;
  }
  function Ws() {
    return Ct().memoizedState;
  }
  function cv(t) {
    for (var l = t.return; l !== null; ) {
      switch (l.tag) {
        case 24:
        case 3:
          var e = bl();
          t = He(e);
          var u = je(l, t, e);
          u !== null && (fl(u, l, e), Ba(u, l, e)), l = { cache: Yc() }, t.payload = l;
          return;
      }
      l = l.return;
    }
  }
  function fv(t, l, e) {
    var u = bl();
    e = {
      lane: u,
      revertLane: 0,
      gesture: null,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, ui(t) ? Fs(l, e) : (e = Cc(t, l, e, u), e !== null && (fl(e, t, u), Is(e, l, u)));
  }
  function $s(t, l, e) {
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
    if (ui(t)) Fs(l, a);
    else {
      var n = t.alternate;
      if (t.lanes === 0 && (n === null || n.lanes === 0) && (n = l.lastRenderedReducer, n !== null))
        try {
          var i = l.lastRenderedState, c = n(i, e);
          if (a.hasEagerState = !0, a.eagerState = c, ml(c, i))
            return Hn(t, l, a, 0), St === null && Un(), !1;
        } catch {
        }
      if (e = Cc(t, l, a, u), e !== null)
        return fl(e, t, u), Is(e, l, u), !0;
    }
    return !1;
  }
  function sf(t, l, e, u) {
    if (u = {
      lane: 2,
      revertLane: lo(),
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, ui(t)) {
      if (l) throw Error(o(479));
    } else
      l = Cc(
        t,
        e,
        u,
        2
      ), l !== null && fl(l, t, 2);
  }
  function ui(t) {
    var l = t.alternate;
    return t === w || l !== null && l === w;
  }
  function Fs(t, l) {
    Ku = Fn = !0;
    var e = t.pending;
    e === null ? l.next = l : (l.next = e.next, e.next = l), t.pending = l;
  }
  function Is(t, l, e) {
    if ((e & 4194048) !== 0) {
      var u = l.lanes;
      u &= t.pendingLanes, e |= u, l.lanes = e, ko(t, e);
    }
  }
  var ai = {
    readContext: Xt,
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
  }, ks = {
    readContext: Xt,
    use: Pn,
    useCallback: function(t, l) {
      return kt().memoizedState = [
        t,
        l === void 0 ? null : l
      ], t;
    },
    useContext: Xt,
    useEffect: js,
    useImperativeHandle: function(t, l, e) {
      e = e != null ? e.concat([t]) : null, li(
        4194308,
        4,
        Gs.bind(null, l, t),
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
        Ne(!0);
        try {
          t();
        } finally {
          Ne(!1);
        }
      }
      return e.memoizedState = [u, l], u;
    },
    useReducer: function(t, l, e) {
      var u = kt();
      if (e !== void 0) {
        var a = e(l);
        if (hu) {
          Ne(!0);
          try {
            e(l);
          } finally {
            Ne(!1);
          }
        }
      } else a = l;
      return u.memoizedState = u.baseState = a, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: a
      }, u.queue = t, t = t.dispatch = fv.bind(
        null,
        w,
        t
      ), [u.memoizedState, t];
    },
    useRef: function(t) {
      var l = kt();
      return t = { current: t }, l.memoizedState = t;
    },
    useState: function(t) {
      t = uf(t);
      var l = t.queue, e = $s.bind(null, w, l);
      return l.dispatch = e, [t.memoizedState, e];
    },
    useDebugValue: cf,
    useDeferredValue: function(t, l) {
      var e = kt();
      return ff(e, t, l);
    },
    useTransition: function() {
      var t = uf(!1);
      return t = Vs.bind(
        null,
        w,
        t.queue,
        !0,
        !1
      ), kt().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, l, e) {
      var u = w, a = kt();
      if (F) {
        if (e === void 0)
          throw Error(o(407));
        e = e();
      } else {
        if (e = l(), St === null)
          throw Error(o(349));
        (tt & 127) !== 0 || bs(u, l, e);
      }
      a.memoizedState = e;
      var n = { value: e, getSnapshot: l };
      return a.queue = n, js(ps.bind(null, u, n, t), [
        t
      ]), u.flags |= 2048, wu(
        9,
        { destroy: void 0 },
        Ts.bind(
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
      if (F) {
        var e = Kl, u = Vl;
        e = (u & ~(1 << 32 - dl(u) - 1)).toString(32) + e, l = "_" + l + "R_" + e, e = In++, 0 < e && (l += "H" + e.toString(32)), l += "_";
      } else
        e = lv++, l = "_" + l + "r_" + e.toString(32) + "_";
      return t.memoizedState = l;
    },
    useHostTransitionStatus: rf,
    useFormState: xs,
    useActionState: xs,
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
      return l.queue = e, l = sf.bind(
        null,
        w,
        !0,
        e
      ), e.dispatch = l, [t, l];
    },
    useMemoCache: tf,
    useCacheRefresh: function() {
      return kt().memoizedState = cv.bind(
        null,
        w
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
  }, Ps = {
    readContext: Xt,
    use: Pn,
    useCallback: Xs,
    useContext: Xt,
    useEffect: nf,
    useImperativeHandle: Qs,
    useInsertionEffect: Ys,
    useLayoutEffect: qs,
    useMemo: Ls,
    useReducer: ti,
    useRef: Hs,
    useState: function() {
      return ti(he);
    },
    useDebugValue: cf,
    useDeferredValue: function(t, l) {
      var e = Ct();
      return Zs(
        e,
        gt.memoizedState,
        t,
        l
      );
    },
    useTransition: function() {
      var t = ti(he)[0], l = Ct().memoizedState;
      return [
        typeof t == "boolean" ? t : Xa(t),
        l
      ];
    },
    useSyncExternalStore: Ss,
    useId: ws,
    useHostTransitionStatus: rf,
    useFormState: Rs,
    useActionState: Rs,
    useOptimistic: function(t, l) {
      var e = Ct();
      return Os(e, gt, t, l);
    },
    useMemoCache: tf,
    useCacheRefresh: Ws,
    useEffectEvent: Bs
  }, ov = {
    readContext: Xt,
    use: Pn,
    useCallback: Xs,
    useContext: Xt,
    useEffect: nf,
    useImperativeHandle: Qs,
    useInsertionEffect: Ys,
    useLayoutEffect: qs,
    useMemo: Ls,
    useReducer: ef,
    useRef: Hs,
    useState: function() {
      return ef(he);
    },
    useDebugValue: cf,
    useDeferredValue: function(t, l) {
      var e = Ct();
      return gt === null ? ff(e, t, l) : Zs(
        e,
        gt.memoizedState,
        t,
        l
      );
    },
    useTransition: function() {
      var t = ef(he)[0], l = Ct().memoizedState;
      return [
        typeof t == "boolean" ? t : Xa(t),
        l
      ];
    },
    useSyncExternalStore: Ss,
    useId: ws,
    useHostTransitionStatus: rf,
    useFormState: Us,
    useActionState: Us,
    useOptimistic: function(t, l) {
      var e = Ct();
      return gt !== null ? Os(e, gt, t, l) : (e.baseState = t, [t, e.queue.dispatch]);
    },
    useMemoCache: tf,
    useCacheRefresh: Ws,
    useEffectEvent: Bs
  };
  function df(t, l, e, u) {
    l = t.memoizedState, e = e(u, l), e = e == null ? l : $({}, l, e), t.memoizedState = e, t.lanes === 0 && (t.updateQueue.baseState = e);
  }
  var yf = {
    enqueueSetState: function(t, l, e) {
      t = t._reactInternals;
      var u = bl(), a = He(u);
      a.payload = l, e != null && (a.callback = e), l = je(t, a, u), l !== null && (fl(l, t, u), Ba(l, t, u));
    },
    enqueueReplaceState: function(t, l, e) {
      t = t._reactInternals;
      var u = bl(), a = He(u);
      a.tag = 1, a.payload = l, e != null && (a.callback = e), l = je(t, a, u), l !== null && (fl(l, t, u), Ba(l, t, u));
    },
    enqueueForceUpdate: function(t, l) {
      t = t._reactInternals;
      var e = bl(), u = He(e);
      u.tag = 2, l != null && (u.callback = l), l = je(t, u, e), l !== null && (fl(l, t, e), Ba(l, t, e));
    }
  };
  function td(t, l, e, u, a, n, i) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(u, n, i) : l.prototype && l.prototype.isPureReactComponent ? !Ca(e, u) || !Ca(a, n) : !0;
  }
  function ld(t, l, e, u) {
    t = l.state, typeof l.componentWillReceiveProps == "function" && l.componentWillReceiveProps(e, u), typeof l.UNSAFE_componentWillReceiveProps == "function" && l.UNSAFE_componentWillReceiveProps(e, u), l.state !== t && yf.enqueueReplaceState(l, l.state, null);
  }
  function gu(t, l) {
    var e = l;
    if ("ref" in l) {
      e = {};
      for (var u in l)
        u !== "ref" && (e[u] = l[u]);
    }
    if (t = t.defaultProps) {
      e === l && (e = $({}, e));
      for (var a in t)
        e[a] === void 0 && (e[a] = t[a]);
    }
    return e;
  }
  function ed(t) {
    Dn(t);
  }
  function ud(t) {
    console.error(t);
  }
  function ad(t) {
    Dn(t);
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
  function nd(t, l, e) {
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
  function id(t) {
    return t = He(t), t.tag = 3, t;
  }
  function cd(t, l, e, u) {
    var a = e.type.getDerivedStateFromError;
    if (typeof a == "function") {
      var n = u.value;
      t.payload = function() {
        return a(n);
      }, t.callback = function() {
        nd(l, e, u);
      };
    }
    var i = e.stateNode;
    i !== null && typeof i.componentDidCatch == "function" && (t.callback = function() {
      nd(l, e, u), typeof a != "function" && (Ze === null ? Ze = /* @__PURE__ */ new Set([this]) : Ze.add(this));
      var c = u.stack;
      this.componentDidCatch(u.value, {
        componentStack: c !== null ? c : ""
      });
    });
  }
  function rv(t, l, e, u, a) {
    if (e.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
      if (l = e.alternate, l !== null && ou(
        l,
        e,
        a,
        !0
      ), e = Lt.current, e !== null) {
        switch (e.tag) {
          case 31:
          case 13:
          case 19:
            return wt === null ? Ai() : e.alternate === null && Nt === 0 && (Nt = 3), e.flags &= -257, e.flags |= 65536, e.lanes = a, u === Kn ? e.flags |= 16384 : (l = e.updateQueue, l === null ? e.updateQueue = /* @__PURE__ */ new Set([u]) : l.add(u), kf(t, u, a)), !1;
          case 22:
            return e.flags |= 65536, u === Kn ? e.flags |= 16384 : (l = e.updateQueue, l === null ? (l = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([u])
            }, e.updateQueue = l) : (e = l.retryQueue, e === null ? l.retryQueue = /* @__PURE__ */ new Set([u]) : e.add(u)), kf(t, u, a)), !1;
        }
        throw Error(o(435, e.tag));
      }
      return kf(t, u, a), Ai(), !1;
    }
    if (F)
      return l = Lt.current, l !== null ? ((l.flags & 65536) === 0 && (l.flags |= 256), l.flags |= 65536, l.lanes = a, u !== Uc && (t = Error(o(422), { cause: u }), Ra(Al(t, e)))) : (u !== Uc && (l = Error(o(423), {
        cause: u
      }), Ra(
        Al(l, e)
      )), t = t.current.alternate, t.flags |= 65536, a &= -a, t.lanes |= a, u = Al(u, e), a = mf(
        t.stateNode,
        u,
        a
      ), Zc(t, a), Nt !== 4 && (Nt = 2)), !1;
    var n = Error(o(520), { cause: u });
    if (n = Al(n, e), Fa === null ? Fa = [n] : Fa.push(n), Nt !== 4 && (Nt = 2), l === null) return !0;
    u = Al(u, e), e = l;
    do {
      switch (e.tag) {
        case 3:
          return e.flags |= 65536, t = a & -a, e.lanes |= t, t = mf(e.stateNode, u, t), Zc(e, t), !1;
        case 1:
          if (l = e.type, n = e.stateNode, (e.flags & 128) === 0 && (typeof l.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (Ze === null || !Ze.has(n))))
            return e.flags |= 65536, a &= -a, e.lanes |= a, a = id(a), cd(
              a,
              t,
              e,
              u
            ), Zc(e, a), !1;
          break;
        case 22:
          if (e.memoizedState !== null)
            return e.flags |= 65536, !1;
      }
      e = e.return;
    } while (e !== null);
    return !1;
  }
  var vf = Error(o(461)), Dt = !1;
  function Ht(t, l, e, u) {
    l.child = t === null ? ss(l, null, e, u) : vu(
      l,
      t.child,
      e,
      u
    );
  }
  function fd(t, l, e, u, a) {
    e = e.render;
    var n = l.ref;
    if ("ref" in u) {
      var i = {};
      for (var c in u)
        c !== "ref" && (i[c] = u[c]);
    } else i = u;
    return ru(l), u = Fc(
      t,
      l,
      e,
      i,
      n,
      a
    ), c = Ic(), t !== null && !Dt ? (kc(t, l, a), ge(t, l, a)) : (F && c && qn(l), l.flags |= 1, Ht(t, l, u, a), l.child);
  }
  function od(t, l, e, u, a) {
    if (t === null) {
      var n = e.type;
      return typeof n == "function" && !Mc(n) && n.defaultProps === void 0 && e.compare === null ? (l.tag = 15, l.type = n, rd(
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
      if (e = e.compare, e = e !== null ? e : Ca, e(i, u) && t.ref === l.ref)
        return ge(t, l, a);
    }
    return l.flags |= 1, t = se(n, u), t.ref = l.ref, t.return = l, l.child = t;
  }
  function rd(t, l, e, u, a) {
    if (t !== null) {
      var n = t.memoizedProps;
      if (Ca(n, u) && t.ref === l.ref)
        if (Dt = !1, l.pendingProps = u = n, zf(t, a))
          (t.flags & 131072) !== 0 && (Dt = !0);
        else
          return l.lanes = t.lanes, ge(t, l, a);
    }
    return hf(
      t,
      l,
      e,
      u,
      a
    );
  }
  function sd(t, l, e, u) {
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
        return dd(
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
        ), n !== null ? ms(l, n) : Kc(), vs(l);
      else
        return u = l.lanes = 536870912, dd(
          t,
          l,
          n !== null ? n.baseLanes | e : e,
          e,
          u
        );
    } else
      n !== null ? (Zn(l, n.cachePool), ms(l, n), qe(), l.memoizedState = null) : (t !== null && Zn(l, null), Kc(), qe());
    return Ht(t, l, a, e), l.child;
  }
  function Za(t, l) {
    return t !== null && t.tag === 22 || l.stateNode !== null || (l.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), l.sibling;
  }
  function dd(t, l, e, u, a) {
    var n = Gc();
    return n = n === null ? null : { parent: xt._currentValue, pool: n }, l.memoizedState = {
      baseLanes: e,
      cachePool: n
    }, t !== null && Zn(l, null), Kc(), vs(l), t !== null && ou(t, l, u, !0), l.childLanes = a, null;
  }
  function ii(t, l) {
    return l = ci(
      { mode: l.mode, children: l.children },
      t.mode
    ), l.ref = t.ref, t.child = l, l.return = t, l;
  }
  function yd(t, l, e) {
    return vu(l, t.child, null, e), t = ii(l, l.pendingProps), t.flags |= 2, vl(l), l.memoizedState = null, t;
  }
  function sv(t, l, e) {
    var u = l.pendingProps, a = (l.flags & 128) !== 0;
    if (l.flags &= -129, t === null) {
      if (F) {
        if (u.mode === "hidden")
          return t = ii(l, u), l.lanes = 536870912, t.memoizedState = { baseLanes: 0, cachePool: null }, Za(null, t);
        if (wc(l), (t = Tt) ? (t = G0(
          t,
          Ml
        ), t = t !== null && t.data === "&" ? t : null, t !== null && (l.memoizedState = {
          dehydrated: t,
          treeContext: Ce !== null ? { id: Vl, overflow: Kl } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, e = Fr(t), e.return = l, l.child = e, Bt = l, Tt = null)) : t = null, t === null) throw xe(l);
        return l.lanes = 536870912, null;
      }
      return ii(l, u);
    }
    var n = t.memoizedState;
    if (n !== null) {
      var i = n.dehydrated;
      if (wc(l), a)
        if (l.flags & 256)
          l.flags &= -257, l = yd(
            t,
            l,
            e
          );
        else if (l.memoizedState !== null)
          l.child = t.child, l.flags |= 128, l = null;
        else throw Error(o(558));
      else if (Dt || ou(t, l, e, !1), a = (e & t.childLanes) !== 0, Dt || a) {
        if (Be.current === null) {
          if (u = St, u !== null && (i = Po(u, e), i !== 0 && i !== n.retryLane))
            throw n.retryLane = i, nu(t, i), fl(u, t, i), vf;
          Ai();
        }
        l = yd(
          t,
          l,
          e
        );
      } else
        t = n.treeContext, Tt = Rl(i.nextSibling), Bt = l, F = !0, Me = null, Ml = !1, t !== null && Pr(l, t), l = ii(l, u), l.flags |= 134221824;
      return l;
    }
    return t = se(t.child, {
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
  function hf(t, l, e, u, a) {
    return ru(l), e = Fc(
      t,
      l,
      e,
      u,
      void 0,
      a
    ), u = Ic(), t !== null && !Dt ? (kc(t, l, a), ge(t, l, a)) : (F && u && qn(l), l.flags |= 1, Ht(t, l, e, a), l.child);
  }
  function md(t, l, e, u, a, n) {
    return ru(l), l.updateQueue = null, e = gs(
      l,
      u,
      e,
      a
    ), hs(t), u = Ic(), t !== null && !Dt ? (kc(t, l, n), ge(t, l, n)) : (F && u && qn(l), l.flags |= 1, Ht(t, l, e, n), l.child);
  }
  function vd(t, l, e, u, a) {
    if (ru(l), l.stateNode === null) {
      var n = qu, i = e.contextType;
      typeof i == "object" && i !== null && (n = Xt(i)), n = new e(u, n), l.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = yf, l.stateNode = n, n._reactInternals = l, n = l.stateNode, n.props = u, n.state = l.memoizedState, n.refs = {}, Xc(l), i = e.contextType, n.context = typeof i == "object" && i !== null ? Xt(i) : qu, n.state = l.memoizedState, i = e.getDerivedStateFromProps, typeof i == "function" && (df(
        l,
        e,
        i,
        u
      ), n.state = l.memoizedState), typeof e.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (i = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), i !== n.state && yf.enqueueReplaceState(n, n.state, null), qa(l, u, n, a), Ya(), n.state = l.memoizedState), typeof n.componentDidMount == "function" && (l.flags |= 4194308), u = !0;
    } else if (t === null) {
      n = l.stateNode;
      var c = l.memoizedProps, r = gu(e, c);
      n.props = r;
      var g = n.context, T = e.contextType;
      i = qu, typeof T == "object" && T !== null && (i = Xt(T));
      var O = e.getDerivedStateFromProps;
      T = typeof O == "function" || typeof n.getSnapshotBeforeUpdate == "function", c = l.pendingProps !== c, T || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (c || g !== i) && ld(
        l,
        n,
        u,
        i
      ), Ue = !1;
      var v = l.memoizedState;
      n.state = v, qa(l, u, n, a), Ya(), g = l.memoizedState, c || v !== g || Ue ? (typeof O == "function" && (df(
        l,
        e,
        O,
        u
      ), g = l.memoizedState), (r = Ue || td(
        l,
        e,
        r,
        u,
        v,
        g,
        i
      )) ? (T || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (l.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (l.flags |= 4194308), l.memoizedProps = u, l.memoizedState = g), n.props = u, n.state = g, n.context = i, u = r) : (typeof n.componentDidMount == "function" && (l.flags |= 4194308), u = !1);
    } else {
      n = l.stateNode, Lc(t, l), i = l.memoizedProps, T = gu(e, i), n.props = T, O = l.pendingProps, v = n.context, g = e.contextType, r = qu, typeof g == "object" && g !== null && (r = Xt(g)), c = e.getDerivedStateFromProps, (g = typeof c == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (i !== O || v !== r) && ld(
        l,
        n,
        u,
        r
      ), Ue = !1, v = l.memoizedState, n.state = v, qa(l, u, n, a), Ya();
      var b = l.memoizedState;
      i !== O || v !== b || Ue || t !== null && t.dependencies !== null && Xn(t.dependencies) ? (typeof c == "function" && (df(
        l,
        e,
        c,
        u
      ), b = l.memoizedState), (T = Ue || td(
        l,
        e,
        T,
        u,
        v,
        b,
        r
      ) || t !== null && t.dependencies !== null && Xn(t.dependencies)) ? (g || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(u, b, r), typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(
        u,
        b,
        r
      )), typeof n.componentDidUpdate == "function" && (l.flags |= 4), typeof n.getSnapshotBeforeUpdate == "function" && (l.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || i === t.memoizedProps && v === t.memoizedState || (l.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || i === t.memoizedProps && v === t.memoizedState || (l.flags |= 1024), l.memoizedProps = u, l.memoizedState = b), n.props = u, n.state = b, n.context = r, u = T) : (typeof n.componentDidUpdate != "function" || i === t.memoizedProps && v === t.memoizedState || (l.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || i === t.memoizedProps && v === t.memoizedState || (l.flags |= 1024), u = !1);
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
    )) : Ht(t, l, e, a), l.memoizedState = n.state, t = l.child) : t = ge(
      t,
      l,
      a
    ), t;
  }
  function hd(t, l, e, u) {
    return cu(), l.flags |= 256, Ht(t, l, e, u), l.child;
  }
  var gf = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Sf(t) {
    return { baseLanes: t, cachePool: ns() };
  }
  function bf(t, l, e) {
    return t = t !== null ? t.childLanes & ~e : 0, l && (t |= Sl), t;
  }
  function gd(t, l, e) {
    var u = l.pendingProps, a = !1, n = (l.flags & 128) !== 0, i;
    if ((i = n) || (i = t !== null && t.memoizedState === null ? !1 : (Zt.current & 2) !== 0), i && (a = !0, l.flags &= -129), i = (l.flags & 32) !== 0, l.flags &= -33, t === null) {
      if (F) {
        if (a ? Ye(l) : qe(), (t = Tt) ? (t = G0(
          t,
          Ml
        ), t = t !== null && t.data !== "&" ? t : null, t !== null && (l.memoizedState = {
          dehydrated: t,
          treeContext: Ce !== null ? { id: Vl, overflow: Kl } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, e = Fr(t), e.return = l, l.child = e, Bt = l, Tt = null)) : t = null, t === null) throw xe(l);
        return bo(t) ? l.lanes = 32 : l.lanes = 536870912, null;
      }
      return n = u.children, u = u.fallback, a ? (qe(), a = l.mode, n = ci(
        { mode: "hidden", children: n },
        a
      ), u = iu(
        u,
        a,
        e,
        null
      ), n.return = l, u.return = l, n.sibling = u, l.child = n, u = l.child, u.memoizedState = Sf(e), u.childLanes = bf(
        t,
        i,
        e
      ), l.memoizedState = gf, Za(null, u)) : (Ye(l), Tf(l, n));
    }
    var c = t.memoizedState;
    if (c !== null) {
      var r = c.dehydrated;
      if (r !== null)
        return dv(
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
    return a ? (qe(), a = u.fallback, n = l.mode, c = t.child, r = c.sibling, u = se(c, {
      mode: "hidden",
      children: u.children
    }), u.subtreeFlags = c.subtreeFlags & 1206910976, r !== null ? a = se(r, a) : (a = iu(
      a,
      n,
      e,
      null
    ), a.flags |= 2), a.return = l, u.return = l, u.sibling = a, l.child = u, Za(null, u), u = l.child, a = t.child.memoizedState, a === null ? a = Sf(e) : (n = a.cachePool, n !== null ? (c = xt._currentValue, n = n.parent !== c ? { parent: c, pool: c } : n) : n = ns(), a = {
      baseLanes: a.baseLanes | e,
      cachePool: n
    }), u.memoizedState = a, u.childLanes = bf(
      t,
      i,
      e
    ), l.memoizedState = gf, Za(t.child, u)) : (Ye(l), e = t.child, t = e.sibling, e = se(e, {
      mode: "visible",
      children: u.children
    }), e.return = l, e.sibling = null, t !== null && (i = l.deletions, i === null ? (l.deletions = [t], l.flags |= 16) : i.push(t)), l.child = e, l.memoizedState = null, e);
  }
  function Tf(t, l) {
    return l = ci(
      { mode: "visible", children: l },
      t.mode
    ), l.return = t, t.child = l;
  }
  function ci(t, l) {
    return t = al(22, t, null, l), t.lanes = 0, t;
  }
  function fi(t, l, e) {
    return vu(l, t.child, null, e), t = Tf(
      l,
      l.pendingProps.children
    ), t.flags |= 2, l.memoizedState = null, t;
  }
  function dv(t, l, e, u, a, n, i, c) {
    if (e)
      return l.flags & 256 ? (Ye(l), l.flags &= -257, fi(
        t,
        l,
        c
      )) : l.memoizedState !== null ? (qe(), l.child = t.child, l.flags |= 128, null) : (qe(), n = a.fallback, i = l.mode, a = ci(
        { mode: "visible", children: a.children },
        i
      ), n = iu(
        n,
        i,
        c,
        null
      ), n.flags |= 2, a.return = l, n.return = l, a.sibling = n, l.child = a, vu(l, t.child, null, c), a = l.child, a.memoizedState = Sf(c), a.childLanes = bf(
        t,
        u,
        c
      ), l.memoizedState = gf, Za(null, a));
    if (Ye(l), bo(n)) {
      if (u = n.nextSibling && n.nextSibling.dataset, u) var r = u.dgst;
      return u = r, u !== "" && (a = Error(o(419)), a.stack = "", a.digest = u, Ra({ value: a, source: null, stack: null })), fi(
        t,
        l,
        c
      );
    }
    if (Dt || ou(t, l, c, !1), u = (c & t.childLanes) !== 0, Dt || u) {
      if (Be.current !== null)
        return fi(
          t,
          l,
          c
        );
      if (u = St, u !== null && (a = Po(
        u,
        c
      ), a !== 0 && a !== i.retryLane))
        throw i.retryLane = a, nu(t, a), fl(u, t, a), vf;
      return So(n) || Ai(), fi(
        t,
        l,
        c
      );
    }
    return So(n) ? (l.flags |= 192, l.child = t.child, null) : (t = i.treeContext, Tt = Rl(n.nextSibling), Bt = l, F = !0, Me = null, Ml = !1, t !== null && Pr(l, t), l = Tf(
      l,
      a.children
    ), l.flags |= 134221824, l);
  }
  function Sd(t, l, e) {
    t.lanes |= l;
    var u = t.alternate;
    u !== null && (u.lanes |= l), Qn(t.return, l, e);
  }
  function bd(t) {
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
  function pf(t) {
    var l = t.child;
    for (t.child = null; l !== null; ) {
      var e = l.sibling;
      l.sibling = t.child, t.child = l, l = e;
    }
  }
  function Ef(t, l, e) {
    var u = l.pendingProps, a = u.revealOrder, n = u.tail;
    u = u.children;
    var i = Zt.current;
    if (l.flags & 128)
      return Ga(l, i), null;
    var c = (i & 2) !== 0;
    if (c ? (i = i & 1 | 2, l.flags |= 128) : i &= 1, Ga(l, i), a === "backwards" && t !== null ? (pf(t), Ht(t, l, u, e), pf(t)) : Ht(t, l, u, e), u = F ? xa : 0, !c && t !== null && (t.flags & 128) !== 0)
      t: for (t = l.child; t !== null; ) {
        if (t.tag === 13)
          t.memoizedState !== null && Sd(t, e, l);
        else if (t.tag === 19)
          Sd(t, e, l);
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
        e = bd(l.child), e === null ? (a = l.child, l.child = null) : (a = e.sibling, e.sibling = null, pf(l)), oi(
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
        e = bd(l.child), e === null ? (a = l.child, l.child = null) : (a = e.sibling, e.sibling = null), oi(
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
  function Td(t, l, e) {
    var u = l.pendingProps;
    return Re(l, l.type, u.value), Ht(t, l, u.children, e), l.child;
  }
  function ge(t, l, e) {
    if (t !== null && (l.dependencies = t.dependencies), Le |= l.lanes, (e & l.childLanes) === 0)
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
      for (t = l.child, e = se(t, t.pendingProps), l.child = e, e.return = l; t.sibling !== null; )
        t = t.sibling, e = e.sibling = se(t, t.pendingProps), e.return = l;
      e.sibling = null;
    }
    return l.child;
  }
  function zf(t, l) {
    return (t.lanes & l) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && Xn(t)));
  }
  function yv(t, l, e) {
    switch (l.tag) {
      case 3:
        mn(l, l.stateNode.containerInfo), Re(l, xt, t.memoizedState.cache), cu();
        break;
      case 27:
      case 5:
        $i(l);
        break;
      case 4:
        mn(l, l.stateNode.containerInfo);
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
          return l.flags |= 128, wc(l), null;
        break;
      case 13:
        var u = l.memoizedState;
        if (u !== null) {
          if (u.dehydrated !== null)
            return Ye(l), l.flags |= 128, null;
          u = ou(
            t,
            l,
            e,
            !1
          );
          var a = l.child.childLanes;
          return u || (e & a) !== 0 ? gd(t, l, e) : (Ye(l), t = ge(
            t,
            l,
            e
          ), t !== null ? t.sibling : null);
        }
        Ye(l);
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
        if (a = l.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), Ga(l, Zt.current), u) break;
        return null;
      case 22:
        return l.lanes = 0, sd(
          t,
          l,
          e,
          l.pendingProps
        );
      case 24:
        Re(l, xt, t.memoizedState.cache);
    }
    return ge(t, l, e);
  }
  function pd(t, l, e) {
    if (t !== null)
      if (t.memoizedProps !== l.pendingProps)
        Dt = !0;
      else {
        if (!zf(t, e) && (l.flags & 128) === 0)
          return Dt = !1, yv(
            t,
            l,
            e
          );
        Dt = (t.flags & 131072) !== 0;
      }
    else
      Dt = !1, F && (l.flags & 1048576) !== 0 && kr(l, xa, l.index);
    switch (l.lanes = 0, l.tag) {
      case 16:
        t: {
          var u = l.pendingProps;
          if (t = yu(l.elementType), l.type = t, typeof t == "function")
            Mc(t) ? (u = gu(t, u), l.tag = 1, l = vd(
              null,
              l,
              t,
              u,
              e
            )) : (l.tag = 0, l = hf(
              null,
              l,
              t,
              u,
              e
            ));
          else {
            if (t != null) {
              var a = t.$$typeof;
              if (a === _) {
                l.tag = 11, l = fd(
                  null,
                  l,
                  t,
                  u,
                  e
                );
                break t;
              } else if (a === yt) {
                l.tag = 14, l = od(
                  null,
                  l,
                  t,
                  u,
                  e
                );
                break t;
              } else if (a === Mt) {
                l.tag = 10, l.type = t, l = Td(
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
        return hf(
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
        ), vd(
          t,
          l,
          u,
          a,
          e
        );
      case 3:
        t: {
          if (mn(
            l,
            l.stateNode.containerInfo
          ), t === null) throw Error(o(387));
          u = l.pendingProps;
          var n = l.memoizedState;
          a = n.element, Lc(t, l), qa(l, u, null, e);
          var i = l.memoizedState;
          if (u = i.cache, Re(l, xt, u), u !== n.cache && Bc(
            l,
            [xt],
            e,
            !0
          ), Ya(), u = i.element, n.isDehydrated)
            if (n = {
              element: u,
              isDehydrated: !1,
              cache: i.cache
            }, l.updateQueue.baseState = n, l.memoizedState = n, l.flags & 256) {
              l = hd(
                t,
                l,
                u,
                e
              );
              break t;
            } else if (u !== a) {
              a = Al(
                Error(o(424)),
                l
              ), Ra(a), l = hd(
                t,
                l,
                u,
                e
              );
              break t;
            } else
              for (t = l.stateNode.containerInfo, t.nodeType === 9 ? t = t.body : t = t.nodeName === "HTML" ? t.ownerDocument.body : t, Tt = Rl(t.firstChild), Bt = l, F = !0, Me = null, Ml = !0, e = ss(
                l,
                null,
                u,
                e
              ), l.child = e; e; )
                e.flags = e.flags & -3 | 134221824, e = e.sibling;
          else {
            if (cu(), u === a) {
              l = ge(
                t,
                l,
                e
              );
              break t;
            }
            Ht(t, l, u, e);
          }
          l = l.child;
        }
        return l;
      case 26:
        return Wu(t, l), t === null ? (e = J0(
          l.type,
          null,
          l.pendingProps,
          null
        )) ? l.memoizedState = e : F || (l.stateNode = N0(
          l.type,
          l.pendingProps,
          ze.current,
          l
        )) : l.memoizedState = J0(
          l.type,
          t.memoizedProps,
          l.pendingProps,
          t.memoizedState
        ), null;
      case 27:
        return $i(l), t === null && F && (u = l.stateNode = L0(
          l.type,
          l.pendingProps,
          ze.current
        ), Bt = l, Ml = !0, a = Tt, Je(l.type) ? (To = a, Tt = Rl(u.firstChild)) : Tt = a), Ht(
          t,
          l,
          l.pendingProps.children,
          e
        ), Wu(t, l), t === null && (l.flags |= 4194304), l.child;
      case 5:
        return t === null && F && ((a = u = Tt) && (u = ch(
          u,
          l.type,
          l.pendingProps,
          Ml
        ), u !== null ? (l.stateNode = u, Bt = l, Tt = Rl(u.firstChild), Ml = !1, a = !0) : a = !1), a || xe(l)), $i(l), a = l.type, n = l.pendingProps, i = t !== null ? t.memoizedProps : null, u = n.children, ro(a, n) ? u = null : i !== null && ro(a, i) && (l.flags |= 32), l.memoizedState !== null && (a = Fc(
          t,
          l,
          ev,
          null,
          null,
          e
        ), da._currentValue = a), Wu(t, l), Ht(t, l, u, e), l.child;
      case 6:
        return t === null && F && ((t = e = Tt) && (e = fh(
          e,
          l.pendingProps,
          Ml
        ), e !== null ? (l.stateNode = e, Bt = l, Tt = null, t = !0) : t = !1), t || xe(l)), null;
      case 13:
        return gd(t, l, e);
      case 4:
        return mn(
          l,
          l.stateNode.containerInfo
        ), u = l.pendingProps, t === null ? l.child = vu(
          l,
          null,
          u,
          e
        ) : Ht(t, l, u, e), l.child;
      case 11:
        return fd(
          t,
          l,
          l.type,
          l.pendingProps,
          e
        );
      case 7:
        return u = l.pendingProps, Wu(t, l), Ht(t, l, u, e), l.child;
      case 8:
        return Ht(
          t,
          l,
          l.pendingProps.children,
          e
        ), l.child;
      case 12:
        return Ht(
          t,
          l,
          l.pendingProps.children,
          e
        ), l.child;
      case 10:
        return Td(t, l, e);
      case 9:
        return a = l.type._context, u = l.pendingProps.children, ru(l), a = Xt(a), u = u(a), l.flags |= 1, Ht(t, l, u, e), l.child;
      case 14:
        return od(
          t,
          l,
          l.type,
          l.pendingProps,
          e
        );
      case 15:
        return rd(
          t,
          l,
          l.type,
          l.pendingProps,
          e
        );
      case 19:
        return Ef(t, l, e);
      case 31:
        return sv(t, l, e);
      case 22:
        return sd(
          t,
          l,
          e,
          l.pendingProps
        );
      case 24:
        return ru(l), u = Xt(xt), t === null ? (a = Gc(), a === null && (a = St, n = Yc(), a.pooledCache = n, n.refCount++, n !== null && (a.pooledCacheLanes |= e), a = n), l.memoizedState = { parent: u, cache: a }, Xc(l), Re(l, xt, a)) : ((t.lanes & e) !== 0 && (Lc(t, l), qa(l, null, null, e), Ya()), a = t.memoizedState, n = l.memoizedState, a.parent !== u ? (a = { parent: u, cache: u }, l.memoizedState = a, l.lanes === 0 && (l.memoizedState = l.updateQueue.baseState = a), Re(l, xt, u)) : (u = n.cache, Re(l, xt, u), u !== a.cache && Bc(
          l,
          [xt],
          e,
          !0
        ))), Ht(
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
        }), u = l.pendingProps, u.name != null && u.name !== "auto" ? l.flags |= t === null ? 18882560 : 18874368 : F && qn(l), t !== null && t.memoizedProps.name !== u.name ? l.flags |= 4194816 : Wu(t, l), Ht(t, l, u.children, e), l.child;
      case 29:
        throw l.pendingProps;
    }
    throw Error(o(156, l.tag));
  }
  function Se(t) {
    t.flags |= 4;
  }
  function Of(t, l, e, u, a) {
    var n;
    if ((n = (t.mode & 32) !== 0) && (n = e === null ? F0(l, u) : F0(l, u) && (u.src !== e.src || u.srcSet !== e.srcSet)), n) {
      if (t.flags |= 16777216, (a & 335544128) === a)
        if (t.stateNode.complete) t.flags |= 8192;
        else if (e0()) t.flags |= 8192;
        else
          throw mu = Kn, Qc;
    } else t.flags &= -16777217;
  }
  function Ed(t, l) {
    if (l.type !== "stylesheet" || (l.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (t.flags |= 16777216, !I0(l))
      if (e0()) t.flags |= 8192;
      else
        throw mu = Kn, Qc;
  }
  function ri(t, l) {
    l !== null && (t.flags |= 4), t.flags & 16384 && (l = t.tag !== 22 ? Fo() : 536870912, t.lanes |= l, Pu |= l);
  }
  function Va(t, l) {
    if (!F)
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
  function pt(t) {
    var l = t.alternate !== null && t.alternate.child === t.child, e = 0, u = 0;
    if (l)
      for (var a = t.child; a !== null; )
        e |= a.lanes | a.childLanes, u |= a.subtreeFlags & 1206910976, u |= a.flags & 1206910976, a.return = t, a = a.sibling;
    else
      for (a = t.child; a !== null; )
        e |= a.lanes | a.childLanes, u |= a.subtreeFlags, u |= a.flags, a.return = t, a = a.sibling;
    return t.subtreeFlags |= u, t.childLanes = e, l;
  }
  function mv(t, l, e) {
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
        return pt(l), null;
      case 1:
        return pt(l), null;
      case 3:
        return e = l.stateNode, u = null, t !== null && (u = t.memoizedState.cache), l.memoizedState.cache !== u && (l.flags |= 2048), me(xt), Nu(), e.pendingContext && (e.context = e.pendingContext, e.pendingContext = null), (t === null || t.child === null) && (Xu(l) ? Se(l) : t === null || t.memoizedState.isDehydrated && (l.flags & 256) === 0 || (l.flags |= 1024, Hc())), pt(l), null;
      case 26:
        var a = l.type, n = l.memoizedState;
        return t === null ? (Se(l), n !== null ? (pt(l), Ed(l, n)) : (pt(l), Of(
          l,
          a,
          null,
          u,
          e
        ))) : n ? n !== t.memoizedState ? (Se(l), pt(l), Ed(l, n)) : (pt(l), l.flags &= -16777217) : (t = t.memoizedProps, t !== u && Se(l), pt(l), Of(
          l,
          a,
          t,
          u,
          e
        )), null;
      case 27:
        if (vn(l), e = ze.current, a = l.type, t !== null && l.stateNode != null)
          t.memoizedProps !== u && Se(l);
        else {
          if (!u) {
            if (l.stateNode === null)
              throw Error(o(166));
            return pt(l), l.subtreeFlags &= -33554433, null;
          }
          t = Ll.current, Xu(l) ? ts(l) : (t = L0(a, u, e), l.stateNode = t, Se(l));
        }
        return pt(l), l.subtreeFlags &= -33554433, null;
      case 5:
        if (vn(l), a = l.type, t !== null && l.stateNode != null)
          t.memoizedProps !== u && Se(l);
        else {
          if (!u) {
            if (l.stateNode === null)
              throw Error(o(166));
            return pt(l), l.subtreeFlags &= -33554433, null;
          }
          if (n = Ll.current, Xu(l))
            ts(l);
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
            t: switch (Kt(n, a, u), a) {
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
            u && Se(l);
          }
        }
        return pt(l), l.subtreeFlags &= -33554433, Of(
          l,
          l.type,
          t === null ? null : t.memoizedProps,
          l.pendingProps,
          e
        ), null;
      case 6:
        if (t && l.stateNode != null)
          t.memoizedProps !== u && Se(l);
        else {
          if (typeof u != "string" && l.stateNode === null)
            throw Error(o(166));
          if (t = ze.current, Xu(l)) {
            if (t = l.stateNode, e = l.memoizedProps, u = null, a = Bt, a !== null)
              switch (a.tag) {
                case 27:
                case 5:
                  u = a.memoizedProps;
              }
            t[Qt] = l, t = !!(t.nodeValue === e || u !== null && u.suppressHydrationWarning === !0 || p0(t.nodeValue, e)), t || xe(l, !0);
          } else
            t = ln(t).createTextNode(
              u
            ), t[Qt] = l, l.stateNode = t;
        }
        return pt(l), null;
      case 31:
        if (e = l.memoizedState, t === null || t.memoizedState !== null) {
          if (u = Xu(l), e !== null) {
            if (t === null) {
              if (!u) throw Error(o(318));
              if (t = l.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(o(557));
              t[Qt] = l;
            } else
              cu(), (l.flags & 128) === 0 && (l.memoizedState = null), l.flags |= 4;
            pt(l), t = !1;
          } else
            e = Hc(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = e), t = !0;
          if (!t)
            return l.flags & 256 ? (vl(l), l) : (vl(l), null);
          if ((l.flags & 128) !== 0)
            throw Error(o(558));
        }
        return pt(l), null;
      case 13:
        if (u = l.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (a = Xu(l), u !== null && u.dehydrated !== null) {
            if (t === null) {
              if (!a) throw Error(o(318));
              if (a = l.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(o(317));
              a[Qt] = l;
            } else
              cu(), (l.flags & 128) === 0 && (l.memoizedState = null), l.flags |= 4;
            pt(l), a = !1;
          } else
            a = Hc(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = a), a = !0;
          if (!a)
            return l.flags & 256 ? (vl(l), l) : (vl(l), null);
        }
        return vl(l), (l.flags & 128) !== 0 ? (l.lanes = e, l) : (e = u !== null, t = t !== null && t.memoizedState !== null, e && (u = l.child, a = null, u.alternate !== null && u.alternate.memoizedState !== null && u.alternate.memoizedState.cachePool !== null && (a = u.alternate.memoizedState.cachePool.pool), n = null, u.memoizedState !== null && u.memoizedState.cachePool !== null && (n = u.memoizedState.cachePool.pool), n !== a && (u.flags |= 2048)), e !== t && e && (l.child.flags |= 8192), ri(l, l.updateQueue), pt(l), null);
      case 4:
        return Nu(), t === null && no(l.stateNode.containerInfo), l.flags |= 67108864, pt(l), null;
      case 10:
        return me(l.type), pt(l), null;
      case 19:
        if (Wc(l), u = l.memoizedState, u === null) return pt(l), null;
        if (a = (l.flags & 128) !== 0, n = u.rendering, n === null)
          if (a) Va(u, !1);
          else {
            if (Nt !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = l.child; t !== null; ) {
                if (n = $n(t), n !== null) {
                  for (l.flags |= 128, Va(u, !1), t = n.updateQueue, l.updateQueue = t, ri(l, t), l.subtreeFlags = 0, t = e, e = l.child; e !== null; )
                    $r(e, t), e = e.sibling;
                  return Ga(
                    l,
                    Zt.current & 1 | 2
                  ), F && de(l, u.treeForkCount), l.child;
                }
                t = t.sibling;
              }
            u.tail !== null && rl() > Ei && (l.flags |= 128, a = !0, Va(u, !1), l.lanes = 4194304);
          }
        else {
          if (!a)
            if (t = $n(n), t !== null) {
              if (l.flags |= 128, a = !0, t = t.updateQueue, l.updateQueue = t, ri(l, t), Va(u, !0), u.tail === null && u.tailMode !== "collapsed" && u.tailMode !== "visible" && !n.alternate && !F)
                return pt(l), null;
            } else
              2 * rl() - u.renderingStartTime > Ei && e !== 536870912 && (l.flags |= 128, a = !0, Va(u, !1), l.lanes = 4194304);
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
          return u.rendering = t, u.tail = t.sibling, u.renderingStartTime = rl(), t.sibling = null, n = Zt.current, n = a ? n & 1 | 2 : n & 1, u.tailMode === "visible" || u.tailMode === "collapsed" || !e || F ? Ga(l, n) : (e = n, bt(Lt, l), bt(Zt, e), wt === null && (wt = l)), F && de(l, u.treeForkCount), t;
        }
        return pt(l), null;
      case 22:
      case 23:
        return vl(l), Jc(), u = l.memoizedState !== null, t !== null ? t.memoizedState !== null !== u && (l.flags |= 8192) : u && (l.flags |= 8192), u ? (e & 536870912) !== 0 && (l.flags & 128) === 0 && (pt(l), l.subtreeFlags & 6 && (l.flags |= 8192)) : pt(l), e = l.updateQueue, e !== null && ri(l, e.retryQueue), e = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), u = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), u !== e && (l.flags |= 2048), t !== null && Gt(du), null;
      case 24:
        return e = null, t !== null && (e = t.memoizedState.cache), l.memoizedState.cache !== e && (l.flags |= 2048), me(xt), pt(l), null;
      case 25:
        return null;
      case 30:
        return l.flags |= 33554432, pt(l), null;
    }
    throw Error(o(156, l.tag));
  }
  function vv(t, l) {
    switch (Dc(l), l.tag) {
      case 1:
        return t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
      case 3:
        return me(xt), Nu(), t = l.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (l.flags = t & -65537 | 128, l) : null;
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
        return Wc(l), t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, t = l.memoizedState, t !== null && (t.rendering = null, t.tail = null), l.flags |= 4, l) : null;
      case 4:
        return Nu(), null;
      case 10:
        return me(l.type), null;
      case 22:
      case 23:
        return vl(l), Jc(), t !== null && Gt(du), t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
      case 24:
        return me(xt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function zd(t, l) {
    switch (Dc(l), l.tag) {
      case 3:
        me(xt), Nu();
        break;
      case 26:
      case 27:
      case 5:
        vn(l);
        break;
      case 4:
        Nu();
        break;
      case 31:
        l.memoizedState !== null && vl(l);
        break;
      case 13:
        vl(l);
        break;
      case 19:
        Wc(l);
        break;
      case 10:
        me(l.type);
        break;
      case 22:
      case 23:
        vl(l), Jc(), t !== null && Gt(du);
        break;
      case 24:
        me(xt);
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
      vt(l, l.return, c);
    }
  }
  function Ge(t, l, e) {
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
              var r = e, g = c;
              try {
                g();
              } catch (T) {
                vt(
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
      vt(l, l.return, T);
    }
  }
  function Od(t) {
    var l = t.updateQueue;
    if (l !== null) {
      var e = t.stateNode;
      try {
        ys(l, e);
      } catch (u) {
        vt(t, t.return, u);
      }
    }
  }
  function Nd(t, l, e) {
    e.props = gu(
      t.type,
      t.memoizedProps
    ), e.state = t.memoizedState;
    try {
      e.componentWillUnmount();
    } catch (u) {
      vt(t, l, u);
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
            var u = t.stateNode;
            break;
          case 30:
            var a = t.stateNode, n = oe(t.memoizedProps, a);
            (a.ref === null || a.ref.name !== n) && (a.ref = D0(n)), u = a.ref;
            break;
          case 7:
            if (t.stateNode === null) {
              var i = new Tl(t);
              p(
                t.child,
                !1,
                nh,
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
      vt(t, l, c);
    }
  }
  function Vt(t, l) {
    var e = t.ref, u = t.refCleanup;
    if (e !== null)
      if (typeof u == "function")
        try {
          u();
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
  function si(t, l) {
    if ((t.tag === 5 || t.tag === 27 || t.tag === 6) && t.alternate === null && l !== null)
      for (var e = 0; e < l.length; e++)
        q0(
          t.stateNode,
          l[e]
        );
  }
  function Ad(t) {
    for (var l = t.return; l !== null && (Af(l) && q0(t.stateNode, l.stateNode), !Nf(l)); )
      l = l.return;
  }
  function Ja(t) {
    for (var l = t.return; l !== null && (Af(l) && ih(t.stateNode, l.stateNode), !Nf(l)); )
      l = l.return;
  }
  function Nf(t) {
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
      vt(t, t.return, a);
    }
  }
  function Cf(t, l, e) {
    try {
      var u = t.stateNode;
      Xv(u, t.type, e, l), u[ul] = l;
    } catch (a) {
      vt(t, t.return, a);
    }
  }
  function _d(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && Je(t.type) || t.tag === 4;
  }
  function Mf(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || _d(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && Je(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function xf(t, l, e, u) {
    var a = t.tag;
    if (a === 5 || a === 6)
      a = t.stateNode, l ? (e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e).insertBefore(a, l) : (l = e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, l.appendChild(a), e = e._reactRootContainer, e != null || l.onclick !== null || (l.onclick = Zl)), si(t, u), it = !0;
    else if (a !== 4 && (a === 27 && (si(t, u), u = null, Je(t.type) && (e = t.stateNode, l = null)), t = t.child, t !== null))
      for (xf(
        t,
        l,
        e,
        u
      ), t = t.sibling; t !== null; )
        xf(
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
    else if (a !== 4 && (a === 27 && (si(t, u), u = null, Je(t.type) && (e = t.stateNode)), t = t.child, t !== null))
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
  function Cd(t) {
    var l = t.stateNode, e = t.memoizedProps;
    try {
      for (var u = t.type, a = l.attributes; a.length; )
        l.removeAttributeNode(a[0]);
      Kt(l, u, e), l[Qt] = t, l[ul] = e;
    } catch (n) {
      vt(t, t.return, n);
    }
  }
  var yi = !1, hl = null;
  function Md(t) {
    (t.tag === 30 || (t.subtreeFlags & 33554432) !== 0) && (yi = !0);
  }
  var wl = null;
  function xd() {
    var t = wl;
    return wl = null, t;
  }
  var nl = 0;
  function $u(t, l, e, u, a) {
    return nl = 0, Rd(
      t.child,
      l,
      e,
      u,
      a
    );
  }
  function Rd(t, l, e, u, a) {
    for (var n = !1; t !== null; ) {
      if (t.tag === 5) {
        var i = t.stateNode;
        if (u !== null) {
          var c = mo(i);
          u.push(c), c.view && (n = !0);
        } else
          n || mo(i).view && (n = !0);
        yi = !0, x0(
          i,
          nl === 0 ? l : l + "_" + nl,
          e
        ), nl++;
      } else (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && a || Rd(
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
  function Wl(t, l) {
    for (; t !== null; )
      t.tag === 5 ? R0(t.stateNode, t.memoizedProps) : (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && l || Wl(
        t.child,
        l
      )), t = t.sibling;
  }
  function mi(t) {
    if ((t.subtreeFlags & 18874368) !== 0)
      for (t = t.child; t !== null; ) {
        if ((t.tag !== 22 || t.memoizedState === null) && (mi(t), t.tag === 30 && (t.flags & 18874368) !== 0 && t.stateNode.paired)) {
          var l = t.memoizedProps;
          if (l.name == null || l.name === "auto")
            throw Error(o(544));
          var e = l.name;
          l = re(l.default, l.share), l !== "none" && ($u(
            t,
            e,
            l,
            null,
            !1
          ) || Wl(t.child, !1));
        }
        t = t.sibling;
      }
  }
  function Rf(t, l) {
    if (t.tag === 30) {
      var e = t.stateNode, u = t.memoizedProps, a = oe(u, e), n = re(
        u.default,
        e.paired ? u.share : u.enter
      );
      n !== "none" ? $u(t, a, n, null, !1) ? (mi(t), e.paired || l || ua(t, u.onEnter)) : Wl(t.child, !1) : mi(t);
    } else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null; )
        Rf(t, l), t = t.sibling;
    else mi(t);
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
                  var n = re(
                    e.default,
                    e.share
                  );
                  if (n !== "none" && ($u(
                    t,
                    u,
                    n,
                    null,
                    !1
                  ) ? (n = t.stateNode, a.paired = n, n.paired = a, ua(t, e.onShare)) : Wl(t.child, !1)), l.delete(u), l.size === 0) break;
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
      var l = t.memoizedProps, e = oe(l, t.stateNode), u = hl !== null ? hl.get(e) : void 0, a = re(
        l.default,
        u !== void 0 ? l.share : l.exit
      );
      a !== "none" && ($u(t, e, a, null, !1) ? u !== void 0 ? (a = t.stateNode, u.paired = a, a.paired = u, hl.delete(e), ua(t, l.onShare)) : ua(t, l.onExit) : Wl(t.child, !1)), hl !== null && Df(t);
    } else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null; )
        Uf(t), t = t.sibling;
    else
      hl !== null && Df(t);
  }
  function Dd(t) {
    for (t = t.child; t !== null; ) {
      if (t.tag === 30) {
        var l = t.memoizedProps, e = oe(l, t.stateNode);
        l = re(l.default, l.update), t.flags &= -5, l !== "none" && $u(
          t,
          e,
          l,
          t.memoizedState = [],
          !1
        );
      } else
        (t.subtreeFlags & 33554432) !== 0 && Dd(t);
      t = t.sibling;
    }
  }
  function Hf(t) {
    if ((t.subtreeFlags & 18874368) !== 0)
      for (t = t.child; t !== null; ) {
        if (t.tag !== 22 || t.memoizedState === null) {
          if (t.tag === 30 && (t.flags & 18874368) !== 0) {
            var l = t.stateNode;
            l.paired !== null && (l.paired = null, Wl(t.child, !1));
          }
          Hf(t);
        }
        t = t.sibling;
      }
  }
  function vi(t) {
    if (t.tag === 30)
      t.stateNode.paired = null, Wl(t.child, !1), Hf(t);
    else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null; )
        vi(t), t = t.sibling;
    else Hf(t);
  }
  function Ud(t) {
    for (t = t.child; t !== null; )
      t.tag === 30 ? Wl(t.child, !1) : (t.subtreeFlags & 33554432) !== 0 && Ud(t), t = t.sibling;
  }
  function jf(t, l, e, u, a, n, i) {
    for (var c = !1; l !== null; ) {
      if (l.tag === 5) {
        var r = l.stateNode;
        if (n !== null && nl < n.length) {
          var g = n[nl], T = mo(r);
          (g.view || T.view) && (c = !0);
          var O;
          if (O = (t.flags & 4) === 0)
            if (T.clip) O = !0;
            else {
              O = g.rect;
              var v = T.rect;
              O = O.y !== v.y || O.x !== v.x || O.height !== v.height || O.width !== v.width;
            }
          O && (t.flags |= 4), T.abs ? T = !g.abs : (g = g.rect, T = T.rect, T = g.height !== T.height || g.width !== T.width), T && (t.flags |= 32);
        } else t.flags |= 32;
        (t.flags & 4) !== 0 && x0(
          r,
          nl === 0 ? e : e + "_" + nl,
          a
        ), c && (t.flags & 4) !== 0 || (wl === null && (wl = []), wl.push(
          r,
          nl === 0 ? u : u + "_" + nl,
          l.memoizedProps
        )), nl++;
      } else (l.tag !== 22 || l.memoizedState === null) && (l.tag === 30 && i ? t.flags |= l.flags & 32 : jf(
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
  function Hd(t, l) {
    for (t = t.child; t !== null; ) {
      if (t.tag === 30) {
        var e = t.memoizedProps, u = t.stateNode, a = oe(e, u), n = re(e.default, e.update), i;
        i = t.memoizedState, t.memoizedState = null, u = t;
        var c = t.child;
        nl = 0, a = jf(
          u,
          c,
          a,
          a,
          n,
          i,
          !1
        ), (t.flags & 4) !== 0 && a && ua(t, e.onUpdate);
      } else
        (t.subtreeFlags & 33554432) !== 0 && Hd(t);
      t = t.sibling;
    }
  }
  var Yt = !1, st = !1, $l = !1, Bf = !1, jd = typeof WeakSet == "function" ? WeakSet : Set, qt = null, Fl = !1, wa = !1, hi = !1, Yf = !1;
  function hv(t, l, e) {
    if (t = t.containerInfo, fo = ya, t = Gr(t), Ec(t)) {
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
            var c = 0, r = -1, g = -1, T = 0, O = 0, v = t, b = null;
            l: for (; ; ) {
              for (var M; v !== u || n !== 0 && v.nodeType !== 3 || (r = c + n), v !== i || a !== 0 && v.nodeType !== 3 || (g = c + a), v.nodeType === 3 && (c += v.nodeValue.length), (M = v.firstChild) !== null; )
                b = v, v = M;
              for (; ; ) {
                if (v === t) break l;
                if (b === u && ++T === n && (r = c), b === i && ++O === a && (g = c), (M = v.nextSibling) !== null) break;
                v = b, b = v.parentNode;
              }
              v = M;
            }
            u = r === -1 || g === -1 ? null : { start: r, end: g };
          } else u = null;
        }
      u = u || { start: 0, end: 0 };
    } else u = null;
    for (oo = { focusedElem: t, selectionRange: u }, ya = !1, e = (e & 335544064) === e, qt = l, l = e ? 9270 : 1024; qt !== null; ) {
      if (t = qt, e && (u = t.deletions, u !== null))
        for (n = 0; n < u.length; n++)
          e && Uf(u[n]);
      if (t.alternate === null && (t.flags & 2) !== 0)
        e && Md(t), gi(e);
      else {
        if (t.tag === 22) {
          if (u = t.alternate, t.memoizedState !== null) {
            u !== null && u.memoizedState === null && e && Uf(u), gi(e);
            continue;
          } else if (u !== null && u.memoizedState !== null) {
            e && Md(t), gi(e);
            continue;
          }
        }
        u = t.child, (t.subtreeFlags & l) !== 0 && u !== null ? (u.return = t, qt = u) : (e && Dd(t), gi(e));
      }
    }
    hl = null;
  }
  function gi(t) {
    for (; qt !== null; ) {
      var l = qt, e = t, u = l.alternate, a = l.flags;
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
              vt(l, l.return, c);
            }
          }
          break;
        case 3:
          if ((a & 1024) !== 0) {
            if (u = l.stateNode.containerInfo, e = u.nodeType, e === 9)
              go(u);
            else if (e === 1)
              switch (u.nodeName) {
                case "HEAD":
                case "HTML":
                case "BODY":
                  go(u);
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
          e && u !== null && (e = oe(
            u.memoizedProps,
            u.stateNode
          ), a = l.memoizedProps, a = re(a.default, a.update), a !== "none" && $u(
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
        u.return = l.return, qt = u;
        break;
      }
      qt = l.return;
    }
  }
  function Bd(t, l, e) {
    var u = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Il(t, e), u & 4 && Ka(5, e);
        break;
      case 1:
        if (Il(t, e), u & 4)
          if (t = e.stateNode, l === null)
            try {
              t.componentDidMount();
            } catch (i) {
              vt(e, e.return, i);
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
              vt(
                e,
                e.return,
                i
              );
            }
          }
        u & 64 && Od(e), u & 512 && Jl(e, e.return);
        break;
      case 3:
        if (Il(t, e), u & 64 && (t = e.updateQueue, t !== null)) {
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
            ys(t, l);
          } catch (i) {
            vt(e, e.return, i);
          }
        }
        break;
      case 27:
        l === null && u & 4 && Cd(e);
      case 26:
      case 5:
        Il(t, e), l === null && u & 4 && _f(e), u & 512 && Jl(e, e.return);
        break;
      case 12:
        Il(t, e);
        break;
      case 31:
        Il(t, e), u & 4 && Qd(t, e);
        break;
      case 13:
        Il(t, e), u & 4 && Xd(t, e), u & 64 && (t = e.memoizedState, t !== null && (t = t.dehydrated, t !== null && (e = Cv.bind(
          null,
          e
        ), oh(t, e))));
        break;
      case 22:
        if (u = e.memoizedState !== null || Yt, !u) {
          var n = l !== null && l.memoizedState !== null || st;
          l = Yt, a = st, Yt = u, (st = n) && !a ? (u = 2, (e.subtreeFlags & 8772) !== 0 && (u |= 1), Yl(
            t,
            e,
            u
          )) : Il(t, e), Yt = l, st = a;
        }
        break;
      case 30:
        Il(t, e), u & 512 && Jl(e, e.return);
        break;
      case 7:
        u & 512 && Jl(e, e.return);
      default:
        Il(t, e);
    }
  }
  function qf(t, l) {
    for (t = t.child; t !== null; )
      Yd(t, l), t = t.sibling;
  }
  function Yd(t, l) {
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
          vt(t, t.return, r);
        }
        Gf(t, l);
        break;
      case 6:
        try {
          t.stateNode.nodeValue = l ? "" : t.memoizedProps, it = !0;
        } catch (r) {
          vt(t, t.return, r);
        }
        break;
      case 18:
        try {
          var c = t.stateNode;
          l ? M0(c, !0) : M0(t.stateNode, !1);
        } catch (r) {
          vt(t, t.return, r);
        }
        break;
      case 22:
      case 23:
        t.memoizedState === null && qf(t, l);
        break;
      default:
        qf(t, l);
    }
  }
  function Gf(t, l) {
    if (t.subtreeFlags & 67108864)
      for (t = t.child; t !== null; ) {
        t: {
          var e = t, u = l;
          switch (e.tag) {
            case 4:
              Yd(e, u);
              break t;
            case 22:
              e.memoizedState === null && Gf(e, u);
              break t;
            default:
              Gf(e, u);
          }
        }
        t = t.sibling;
      }
  }
  function qd(t) {
    var l = t.alternate;
    l !== null && (t.alternate = null, qd(l)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (l = t.stateNode, l !== null && En(l)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var Et = null, il = !1;
  function jl(t, l, e) {
    for (e = e.child; e !== null; )
      Gd(t, l, e), e = e.sibling;
  }
  function Gd(t, l, e) {
    if (sl && typeof sl.onCommitFiberUnmount == "function")
      try {
        sl.onCommitFiberUnmount(ha, e);
      } catch {
      }
    switch (e.tag) {
      case 26:
        st || Vt(e, l), jl(
          t,
          l,
          e
        ), e.memoizedState ? e.memoizedState.count-- : e.stateNode && !st && (e = e.stateNode, e.parentNode.removeChild(e));
        break;
      case 27:
        st || Vt(e, l), Ja(e);
        var u = Et, a = il;
        Je(e.type) && (Et = e.stateNode, il = !1), jl(
          t,
          l,
          e
        ), Z0(
          e.stateNode,
          e.type,
          e.memoizedProps
        ), Et = u, il = a;
        break;
      case 5:
        st || Vt(e, l), Ja(e);
      case 6:
        if (e.tag === 6 && Ja(e), u = Et, a = il, Et = null, jl(
          t,
          l,
          e
        ), Et = u, il = a, Et !== null)
          if (il)
            try {
              (Et.nodeType === 9 ? Et.body : Et.nodeName === "HTML" ? Et.ownerDocument.body : Et).removeChild(e.stateNode), it = !0;
            } catch (n) {
              vt(
                e,
                l,
                n
              );
            }
          else
            try {
              Et.removeChild(e.stateNode), it = !0;
            } catch (n) {
              vt(
                e,
                l,
                n
              );
            }
        break;
      case 18:
        Et !== null && (il ? (t = Et, C0(
          t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
          e.stateNode
        ), ma(t)) : C0(Et, e.stateNode));
        break;
      case 4:
        u = Et, a = il, Et = e.stateNode.containerInfo, il = !0, jl(
          t,
          l,
          e
        ), Et = u, il = a;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Ge(2, e, l), st || Ge(4, e, l), jl(
          t,
          l,
          e
        );
        break;
      case 1:
        st || (Vt(e, l), u = e.stateNode, typeof u.componentWillUnmount == "function" && Nd(
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
        Vt(e, l), jl(
          t,
          l,
          e
        );
        break;
      case 7:
        st || Vt(e, l), jl(
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
  function Qd(t, l) {
    if (l.memoizedState === null && (t = l.alternate, t !== null && (t = t.memoizedState, t !== null))) {
      t = t.dehydrated;
      try {
        ma(t);
      } catch (e) {
        vt(l, l.return, e);
      }
    }
  }
  function Xd(t, l) {
    if (l.memoizedState === null && (t = l.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
      try {
        ma(t);
      } catch (e) {
        vt(l, l.return, e);
      }
  }
  function gv(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var l = t.stateNode;
        return l === null && (l = t.stateNode = new jd()), l;
      case 22:
        return t = t.stateNode, l = t._retryCache, l === null && (l = t._retryCache = new jd()), l;
      default:
        throw Error(o(435, t.tag));
    }
  }
  function Si(t, l) {
    var e = gv(t);
    l.forEach(function(u) {
      if (!e.has(u)) {
        e.add(u);
        var a = Mv.bind(null, t, u);
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
        Gd(i, c, n), Et = null, il = !1, i = n.alternate, i !== null && (i.return = null), n.return = null;
      }
    if (l.subtreeFlags & 13886)
      for (l = l.child; l !== null; )
        Ld(l, t, e), l = l.sibling;
  }
  var Bl = null;
  function Ld(t, l, e) {
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
        Pt(l, t, e), tl(t), a & 4 && (Ge(3, t, t.return), Ka(3, t), Ge(5, t, t.return));
        break;
      case 1:
        Pt(l, t, e), tl(t), a & 512 && (st || u === null || Vt(u, u.return)), a & 64 && Yt && (t = t.updateQueue, t !== null && (l = t.callbacks, l !== null && (e = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = e === null ? l : e.concat(l))));
        break;
      case 26:
        if (n = Bl, Pt(l, t, e), tl(t), a & 512 && (st || u === null || Vt(u, u.return)), a & 4)
          if (a = u !== null ? u.memoizedState : null, e = t.memoizedState, u === null)
            if (e === null)
              if (t.stateNode === null)
                if (Yt)
                  t.stateNode = N0(
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
                        )), Kt(u, l, e), u[Qt] = t, jt(u), l = u;
                        break t;
                      case "link":
                        if (n = $0(
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
                        u = a.createElement(l), Kt(u, l, e), a.head.appendChild(u);
                        break;
                      case "meta":
                        if (n = $0(
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
                        u = a.createElement(l), Kt(u, l, e), a.head.appendChild(u);
                        break;
                      default:
                        throw Error(o(468, l));
                    }
                    u[Qt] = t, jt(u), l = u;
                  }
                  t.stateNode = l;
                }
              else
                Yt || Oo(n, t.type, t.stateNode);
            else
              t.stateNode = W0(
                n,
                e,
                t.memoizedProps
              );
          else
            a !== e ? (a === null ? (l = u.stateNode, l === null || st || l.parentNode.removeChild(l)) : a.count--, e === null ? Yt || Oo(n, t.type, t.stateNode) : W0(n, e, t.memoizedProps)) : e === null && t.stateNode !== null && Cf(
              t,
              t.memoizedProps,
              u.memoizedProps
            );
        break;
      case 27:
        Pt(l, t, e), tl(t), a & 512 && (st || u === null || Vt(u, u.return)), u !== null && a & 4 && Cf(
          t,
          t.memoizedProps,
          u.memoizedProps
        );
        break;
      case 5:
        if (n = $l, $l = !1, Pt(l, t, e), $l = n, tl(t), a & 512 && (st || u === null || Vt(u, u.return)), t.flags & 32) {
          l = t.stateNode;
          try {
            Ru(l, ""), it = !0;
          } catch (T) {
            vt(t, t.return, T);
          }
        }
        a & 4 && t.stateNode != null && (l = t.memoizedProps, Cf(
          t,
          l,
          u !== null ? u.memoizedProps : l
        )), a & 1024 && (Bf = !0);
        break;
      case 6:
        if (Pt(l, t, e), tl(t), a & 4) {
          if (t.stateNode === null)
            throw Error(o(162));
          l = t.memoizedProps, e = t.stateNode;
          try {
            e.nodeValue = l, it = !0;
          } catch (T) {
            vt(t, t.return, T);
          }
        }
        break;
      case 3:
        if (it = !1, Ui = null, n = Bl, Bl = en(l.containerInfo), Pt(l, t, e), Bl = n, tl(t), a & 4 && u !== null && u.memoizedState.isDehydrated)
          try {
            ma(l.containerInfo);
          } catch (T) {
            vt(t, t.return, T);
          }
        Bf && (Bf = !1, Zd(t)), it = !1;
        break;
      case 4:
        a = $l, $l = Yt, u = or(), n = Bl, Bl = en(
          t.stateNode.containerInfo
        ), Pt(l, t, e), tl(t), Bl = n, it && wa && (hi = !0), it = u, $l = a;
        break;
      case 12:
        Pt(l, t, e), tl(t);
        break;
      case 31:
        Pt(l, t, e), tl(t), a & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, Si(t, l)));
        break;
      case 13:
        Pt(l, t, e), tl(t), t.child.flags & 8192 && t.memoizedState !== null != (u !== null && u.memoizedState !== null) && (pi = rl()), a & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, Si(t, l)));
        break;
      case 22:
        n = t.memoizedState !== null, i = u !== null && u.memoizedState !== null;
        var c = Yt, r = st, g = $l;
        Yt = c || n, $l = g || n, st = r || i, Pt(l, t, e), st = r, $l = g, Yt = c, tl(t), a & 8192 && (l = t.stateNode, l._visibility = n ? l._visibility & -2 : l._visibility | 1, !n || u === null || i || Yt || st || (l = i || st, e = Yt, u = st, Yt = n || Yt, st = l, Qe(t, 2), Yt = e, st = u), !n && $l || qf(t, n)), a & 4 && (l = t.updateQueue, l !== null && (e = l.retryQueue, e !== null && (l.retryQueue = null, Si(t, e))));
        break;
      case 19:
        Pt(l, t, e), tl(t), a & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, Si(t, l)));
        break;
      case 30:
        a & 512 && (st || u === null || Vt(u, u.return)), a = or(), n = wa, i = (e & 335544064) === e, c = t.memoizedProps, wa = i && re(
          c.default,
          c.update
        ) !== "none", Pt(l, t, e), tl(t), i && u !== null && it && (t.flags |= 4), wa = n, it = a;
        break;
      case 21:
        break;
      case 7:
        a & 512 && (st || u === null || Vt(u, u.return)), u && u.stateNode !== null && (u.stateNode._fragmentFiber = t);
      default:
        Pt(l, t, e), tl(t);
    }
  }
  function tl(t) {
    var l = t.flags;
    if (l & 2) {
      try {
        for (var e, u = t.return; u !== null; ) {
          if (_d(u)) {
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
          if (Nf(a)) break;
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
            var g = e.stateNode;
            e.flags & 32 && (Ru(g, ""), e.flags &= -33);
            var T = Mf(t);
            di(
              t,
              T,
              g,
              i
            );
            break;
          case 3:
          case 4:
            var O = e.stateNode.containerInfo, v = Mf(t);
            xf(
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
  function Zd(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var l = t;
        Zd(l), l.tag === 5 && l.flags & 1024 && (l = l.stateNode, ya = !0, l.reset(), ya = !1), t = t.sibling;
      }
  }
  function Fu(t, l) {
    if (l.subtreeFlags & 9270)
      for (l = l.child; l !== null; )
        Vd(l, t), l = l.sibling;
    else Hd(l);
  }
  function Vd(t, l) {
    var e = t.alternate;
    if (e === null) Rf(t, !1);
    else
      switch (t.tag) {
        case 3:
          if (Yf = Fl = !1, xd(), Fu(l, t), !Fl && !hi) {
            if (t = wl, t !== null)
              for (var u = 0; u < t.length; u += 3) {
                e = t[u];
                var a = t[u + 1];
                R0(e, t[u + 2]), e = e.ownerDocument.documentElement, e !== null && e.animate(
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
            )), Yf = !0;
          }
          wl = null;
          break;
        case 5:
          Fu(l, t);
          break;
        case 4:
          u = Fl, Fl = !1, Fu(l, t), Fl && (hi = !0), Fl = u;
          break;
        case 22:
          t.memoizedState === null && (e.memoizedState !== null ? Rf(t, !1) : Fu(l, t));
          break;
        case 30:
          u = Fl, a = xd(), Fl = !1, Fu(l, t), Fl && (t.flags |= 4);
          var n = t.memoizedProps, i = t.stateNode;
          l = oe(n, i), i = oe(e.memoizedProps, i);
          var c = re(n.default, n.update);
          c === "none" ? l = !1 : (n = e.memoizedState, e.memoizedState = null, e = t.child, nl = 0, l = jf(
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
          ), wl = a) : a !== null && (a.push.apply(a, wl), wl = a), Fl = (t.flags & 32) !== 0 ? !0 : u;
          break;
        default:
          Fu(l, t);
      }
  }
  function Il(t, l) {
    if (l.subtreeFlags & 8772)
      for (l = l.child; l !== null; )
        Bd(t, l.alternate, l), l = l.sibling;
  }
  function Qe(t, l) {
    for (t = t.child; t !== null; ) {
      var e = t, u = l;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Ge(4, e, e.return), Qe(
            e,
            u
          );
          break;
        case 1:
          Vt(e, e.return);
          var a = e.stateNode;
          typeof a.componentWillUnmount == "function" && Nd(
            e,
            e.return,
            a
          ), Qe(
            e,
            u
          );
          break;
        case 27:
          (u & 2) !== 0 && Z0(
            e.stateNode,
            e.type,
            e.memoizedProps
          );
        case 5:
          Vt(e, e.return), e.tag !== 5 && e.tag !== 27 || Ja(e), Qe(
            e,
            u
          );
          break;
        case 6:
          Ja(e);
          break;
        case 26:
          Vt(e, e.return), a = e.stateNode, e.memoizedState !== null || a === null || st || a.parentNode.removeChild(a), Qe(
            e,
            u
          );
          break;
        case 22:
          e.memoizedState === null && Qe(
            e,
            u
          );
          break;
        case 30:
          Vt(e, e.return), Qe(
            e,
            u
          );
          break;
        case 7:
          Vt(e, e.return);
        default:
          Qe(
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
              vt(u, u.return, T);
            }
          if (u = n, a = u.updateQueue, a !== null) {
            var r = u.stateNode;
            try {
              var g = a.shared.hiddenCallbacks;
              if (g !== null)
                for (a.shared.hiddenCallbacks = null, a = 0; a < g.length; a++)
                  ds(g[a], r);
            } catch (T) {
              vt(u, u.return, T);
            }
          }
          c && i & 64 && Od(n), Jl(n, n.return);
          break;
        case 27:
          (e & 2) !== 0 && Cd(n);
        case 5:
          n.tag !== 5 && n.tag !== 27 || Ad(n), Yl(
            a,
            n,
            e
          ), c && u === null && i & 4 && _f(n), Jl(n, n.return);
          break;
        case 6:
          Ad(n);
          break;
        case 26:
          r = n.stateNode, n.memoizedState !== null || r === null || Yt || Oo(
            en(r.ownerDocument),
            n.type,
            r
          ), Yl(
            a,
            n,
            e
          ), c && u === null && i & 4 && _f(n), Jl(n, n.return);
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
          ), c && i & 4 && Qd(a, n);
          break;
        case 13:
          Yl(
            a,
            n,
            e
          ), c && i & 4 && Xd(a, n);
          break;
        case 22:
          n.memoizedState === null && Yl(
            a,
            n,
            e
          ), Jl(n, n.return);
          break;
        case 30:
          Yl(
            a,
            n,
            e
          ), Jl(n, n.return);
          break;
        case 7:
          Jl(n, n.return);
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
  function Qf(t, l) {
    var e = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), t = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (t = l.memoizedState.cachePool.pool), t !== e && (t != null && t.refCount++, e != null && Da(e));
  }
  function Xf(t, l) {
    t = null, l.alternate !== null && (t = l.alternate.memoizedState.cache), l = l.memoizedState.cache, l !== t && (l.refCount++, t != null && Da(t));
  }
  function xl(t, l, e, u) {
    var a = (e & 335544064) === e;
    if (l.subtreeFlags & (a ? 10262 : 10256))
      for (l = l.child; l !== null; )
        Kd(
          t,
          l,
          e,
          u
        ), l = l.sibling;
    else a && Ud(l);
  }
  function Kd(t, l, e, u) {
    var a = (e & 335544064) === e;
    a && l.alternate === null && l.return !== null && l.return.alternate !== null && vi(l);
    var n = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        xl(
          t,
          l,
          e,
          u
        ), n & 2048 && Ka(9, l);
        break;
      case 1:
        xl(
          t,
          l,
          e,
          u
        );
        break;
      case 3:
        xl(
          t,
          l,
          e,
          u
        ), a && Yf && (t = t.containerInfo, t = t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, t.style.viewTransitionName === "root" && (t.style.viewTransitionName = ""), t = t.ownerDocument.documentElement, t !== null && t.style.viewTransitionName === "none" && (t.style.viewTransitionName = "")), n & 2048 && (n = null, l.alternate !== null && (n = l.alternate.memoizedState.cache), l = l.memoizedState.cache, l !== n && (l.refCount++, n != null && Da(n)));
        break;
      case 12:
        if (n & 2048) {
          xl(
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
          } catch (g) {
            vt(l, l.return, g);
          }
        } else
          xl(
            t,
            l,
            e,
            u
          );
        break;
      case 31:
        xl(
          t,
          l,
          e,
          u
        );
        break;
      case 13:
        xl(
          t,
          l,
          e,
          u
        );
        break;
      case 23:
        break;
      case 22:
        i = l.stateNode, c = l.alternate, l.memoizedState !== null ? (a && c !== null && c.memoizedState === null && vi(c), i._visibility & 2 ? xl(
          t,
          l,
          e,
          u
        ) : Wa(
          t,
          l
        )) : (a && c !== null && c.memoizedState !== null && vi(l), i._visibility & 2 ? xl(
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
        ))), n & 2048 && Qf(c, l);
        break;
      case 24:
        xl(
          t,
          l,
          e,
          u
        ), n & 2048 && Xf(l.alternate, l);
        break;
      case 30:
        a && (n = l.alternate, n !== null && (Wl(n.child, !0), Wl(l.child, !0))), xl(
          t,
          l,
          e,
          u
        );
        break;
      default:
        xl(
          t,
          l,
          e,
          u
        );
    }
  }
  function Iu(t, l, e, u, a) {
    for (a = a && ((l.subtreeFlags & 10256) !== 0 || !1), l = l.child; l !== null; ) {
      var n = t, i = l, c = e, r = u, g = i.flags;
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
          )), a && g & 2048 && Qf(
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
          ), a && g & 2048 && Xf(i.alternate, i);
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
            Wa(e, u), a & 2048 && Qf(
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
        Jd(
          t,
          l,
          e
        ), t = t.sibling;
  }
  function Jd(t, l, e) {
    switch (t.tag) {
      case 26:
        bu(
          t,
          l,
          e
        ), t.flags & Su && (t.memoizedState !== null ? zh(
          e,
          Bl,
          t.memoizedState,
          t.memoizedProps
        ) : (t = t.stateNode, (l & 335544128) === l && P0(e, t)));
        break;
      case 5:
        bu(
          t,
          l,
          e
        ), t.flags & Su && (t = t.stateNode, (l & 335544128) === l && P0(e, t));
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
  function wd(t) {
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
          qt = u, $d(
            u,
            t
          );
        }
      wd(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        Wd(t), t = t.sibling;
  }
  function Wd(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        $a(t), t.flags & 2048 && Ge(9, t, t.return);
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
          qt = u, $d(
            u,
            t
          );
        }
      wd(t);
    }
    for (t = t.child; t !== null; ) {
      switch (l = t, l.tag) {
        case 0:
        case 11:
        case 15:
          Ge(8, l, l.return), bi(l);
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
  function $d(t, l) {
    for (; qt !== null; ) {
      var e = qt;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          Ge(8, e, l);
          break;
        case 23:
        case 22:
          if (e.memoizedState !== null && e.memoizedState.cachePool !== null) {
            var u = e.memoizedState.cachePool.pool;
            u != null && u.refCount++;
          }
          break;
        case 24:
          Da(e.memoizedState.cache);
      }
      if (u = e.child, u !== null) u.return = e, qt = u;
      else
        t: for (e = t; qt !== null; ) {
          u = qt;
          var a = u.sibling, n = u.return;
          if (qd(u), u === e) {
            qt = null;
            break t;
          }
          if (a !== null) {
            a.return = n, qt = a;
            break t;
          }
          qt = n;
        }
    }
  }
  var Sv = {
    getCacheForType: function(t) {
      var l = Xt(xt), e = l.data.get(t);
      return e === void 0 && (e = t(), l.data.set(t, e)), e;
    },
    cacheSignal: function() {
      return Xt(xt).controller.signal;
    }
  }, bv = typeof WeakMap == "function" ? WeakMap : Map, ot = 0, St = null, k = null, tt = 0, mt = 0, gl = null, Xe = !1, ku = !1, Lf = !1, be = 0, Nt = 0, Le = 0, Tu = 0, Ti = 0, Sl = 0, Pu = 0, Fa = null, cl = null, Zf = !1, pi = 0, Fd = 0, Ei = 1 / 0, zi = null, Ze = null, zt = 0, ql = null, pu = null, kl = 0, Vf = 0, Kf = null, Id = null, ta = null, la = null, ea = null, Ia = 0, Oi = null;
  function bl() {
    return (ot & 2) !== 0 && tt !== 0 ? tt & -tt : q.T !== null ? lo() : tr();
  }
  function kd() {
    if (Sl === 0)
      if ((tt & 536870912) === 0 || F) {
        var t = Sn;
        Sn <<= 1, (Sn & 3932160) === 0 && (Sn = 262144), Sl = t;
      } else Sl = 536870912;
    return t = Lt.current, t !== null && (t.flags |= 32), Sl;
  }
  function ua(t, l) {
    if (l != null) {
      var e = t.stateNode, u = e.ref;
      u === null && (u = e.ref = D0(
        oe(t.memoizedProps, e)
      )), la === null && (la = []), la.push(l.bind(null, u));
    }
  }
  function fl(t, l, e) {
    (t === St && (mt === 2 || mt === 9) || t.cancelPendingCommit !== null) && (aa(t, 0), Ve(
      t,
      tt,
      Sl,
      !1
    )), Sa(t, e), ((ot & 2) === 0 || t !== St) && (t === St && ((ot & 2) === 0 && (Tu |= e), Nt === 4 && Ve(
      t,
      tt,
      Sl,
      !1
    )), Pl(t));
  }
  function Pd(t, l, e) {
    if ((ot & 6) !== 0) throw Error(o(327));
    var u = !e && (l & 127) === 0 && (l & t.expiredLanes) === 0 || ga(t, l), a = u ? Ev(t, l) : wf(t, l, !0), n = u;
    do {
      if (a === 0) {
        ku && !u && Ve(t, l, 0, !1);
        break;
      } else {
        if (e = t.current.alternate, n && !Tv(e)) {
          a = wf(t, l, !1), n = !1;
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
              if (r && (aa(c, i).flags |= 256), i = wf(
                c,
                i,
                !1
              ), i !== 2 && i !== 6) {
                if (Lf && !r) {
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
          aa(t, 0), Ve(t, l, 0, !0);
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
              Ve(
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
          if ((l & 62914560) === l && (a = pi + 300 - rl(), 10 < a)) {
            if (Ve(
              u,
              l,
              Sl,
              !Xe
            ), Tn(u, 0, !0) !== 0) break t;
            kl = l, u.timeoutHandle = yo(
              t0.bind(
                null,
                u,
                e,
                cl,
                zi,
                Zf,
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
          t0(
            u,
            e,
            cl,
            zi,
            Zf,
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
    Pl(t);
  }
  function t0(t, l, e, u, a, n, i, c, r, g, T, O, v, b) {
    t.timeoutHandle = -1;
    var M = l.subtreeFlags, H = (n & 335544064) === n;
    if (O = null, (H || M & 8192 || (M & 16785408) === 16785408) && (O = {
      stylesheets: null,
      count: 0,
      imgCount: 0,
      imgBytes: 0,
      suspenseyImages: [],
      waitingForImages: !0,
      waitingForViewTransition: !1,
      unsuspend: Zl
    }, hl = null, Jd(
      l,
      n,
      O
    ), H && (M = O, H = t.containerInfo, H = (H.nodeType === 9 ? H : H.ownerDocument).__reactViewTransition, H != null && (M.count++, M.waitingForViewTransition = !0, M = nn.bind(M), H.finished.then(M, M))), M = (n & 62914560) === n ? pi - rl() : (n & 4194048) === n ? Fd - rl() : 0, M = Oh(
      O,
      M
    ), M !== null)) {
      kl = n, t.cancelPendingCommit = M(
        f0.bind(
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
          g,
          T,
          O,
          null,
          v,
          b
        )
      ), Ve(t, n, i, !g);
      return;
    }
    f0(
      t,
      l,
      n,
      e,
      u,
      a,
      i,
      c,
      r,
      g,
      T,
      O
    );
  }
  function Tv(t) {
    for (var l = t; ; ) {
      var e = l.tag;
      if ((e === 0 || e === 11 || e === 15) && l.flags & 16384 && (e = l.updateQueue, e !== null && (e = e.stores, e !== null)))
        for (var u = 0; u < e.length; u++) {
          var a = e[u], n = a.getSnapshot;
          a = a.value;
          try {
            if (!ml(n(), a)) return !1;
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
  function Ve(t, l, e, u) {
    l = $o(t, l), l &= ~Ti, l &= ~Tu, t.suspendedLanes |= l, t.pingedLanes &= ~l, u && (t.warmLanes |= l), u = t.expirationTimes;
    for (var a = l; 0 < a; ) {
      var n = 31 - dl(a), i = 1 << n;
      u[n] = -1, a &= ~i;
    }
    e !== 0 && Io(t, e, l);
  }
  function Ni() {
    return (ot & 6) === 0 ? (ka(0), !1) : !0;
  }
  function Jf() {
    if (k !== null) {
      if (mt === 0)
        var t = k.return;
      else
        t = k, ye = fu = null, Pc(t), Vu = null, ja = 0, t = k;
      for (; t !== null; )
        zd(t.alternate, t), t = t.return;
      k = null;
    }
  }
  function aa(t, l) {
    var e = t.timeoutHandle;
    return e !== -1 && (t.timeoutHandle = -1, Vv(e)), e = t.cancelPendingCommit, e !== null && (t.cancelPendingCommit = null, e()), kl = 0, Jf(), St = t, k = e = se(t.current, null), tt = l, mt = 0, gl = null, Xe = !1, ku = ga(t, l), Lf = !1, Pu = Sl = Ti = Tu = Le = Nt = 0, cl = Fa = null, Zf = !1, be = $o(t, l), Un(), e;
  }
  function l0(t, l) {
    w = null, q.H = ai, l === Zu || l === Vn ? (l = fs(), mt = 3) : l === Qc ? (l = fs(), mt = 4) : mt = l === vf ? 8 : l !== null && typeof l == "object" && typeof l.then == "function" ? 6 : 1, gl = l, k === null && (Nt = 1, ni(
      t,
      Al(l, t.current)
    ));
  }
  function e0() {
    var t = Lt.current;
    return t === null ? !0 : (tt & 4194048) === tt ? wt === null : (tt & 62914560) === tt || (tt & 536870912) !== 0 ? t === wt : !1;
  }
  function u0() {
    var t = q.H;
    return q.H = ai, t === null ? ai : t;
  }
  function a0() {
    var t = q.A;
    return q.A = Sv, t;
  }
  function Ai() {
    Nt = 4, Xe || (tt & 4194048) !== tt && Lt.current !== null || (ku = !0), (Le & 134217727) === 0 && (Tu & 134217727) === 0 || St === null || Ve(
      St,
      tt,
      Sl,
      !1
    );
  }
  function wf(t, l, e) {
    var u = ot;
    ot |= 2;
    var a = u0(), n = a0();
    (St !== t || tt !== l) && (zi = null, aa(t, l)), l = !1;
    var i = Nt;
    t: do
      try {
        if (mt !== 0 && k !== null) {
          var c = k, r = gl;
          switch (mt) {
            case 8:
              Jf(), i = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              Lt.current === null && (l = !0);
              var g = mt;
              if (mt = 0, gl = null, na(t, c, r, g), e && ku) {
                i = 0;
                break t;
              }
              break;
            default:
              g = mt, mt = 0, gl = null, na(t, c, r, g);
          }
        }
        pv(), i = Nt;
        break;
      } catch (T) {
        l0(t, T);
      }
    while (!0);
    return l && t.shellSuspendCounter++, ye = fu = null, ot = u, q.H = a, q.A = n, k === null && (St = null, tt = 0, Un()), i;
  }
  function pv() {
    for (; k !== null; ) n0(k);
  }
  function Ev(t, l) {
    var e = ot;
    ot |= 2;
    var u = u0(), a = a0();
    St !== t || tt !== l ? (zi = null, Ei = rl() + 500, aa(t, l)) : ku = ga(
      t,
      l
    );
    t: do
      try {
        if (mt !== 0 && k !== null) {
          l = k;
          var n = gl;
          l: switch (mt) {
            case 1:
              mt = 0, gl = null, na(t, l, n, 1);
              break;
            case 2:
            case 9:
              if (is(n)) {
                mt = 0, gl = null, i0(l);
                break;
              }
              l = function() {
                mt !== 2 && mt !== 9 || St !== t || (mt = 7), Pl(t);
              }, n.then(l, l);
              break t;
            case 3:
              mt = 7;
              break t;
            case 4:
              mt = 5;
              break t;
            case 7:
              is(n) ? (mt = 0, gl = null, i0(l)) : (mt = 0, gl = null, na(t, l, n, 7));
              break;
            case 5:
              var i = null;
              switch (k.tag) {
                case 26:
                  i = k.memoizedState;
                case 5:
                case 27:
                  var c = k;
                  if (i ? I0(i) : c.stateNode.complete) {
                    mt = 0, gl = null;
                    var r = c.sibling;
                    if (r !== null) k = r;
                    else {
                      var g = c.return;
                      g !== null ? (k = g, _i(g)) : k = null;
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
              Jf(), Nt = 6;
              break t;
            default:
              throw Error(o(462));
          }
        }
        zv();
        break;
      } catch (T) {
        l0(t, T);
      }
    while (!0);
    return ye = fu = null, q.H = u, q.A = a, ot = e, k !== null ? 0 : (St = null, tt = 0, Un(), Nt);
  }
  function zv() {
    for (; k !== null && !Qy(); )
      n0(k);
  }
  function n0(t) {
    var l = pd(t.alternate, t, be);
    t.memoizedProps = t.pendingProps, l === null ? _i(t) : k = l;
  }
  function i0(t) {
    var l = t, e = l.alternate;
    switch (l.tag) {
      case 15:
      case 0:
        l = md(
          e,
          l,
          l.pendingProps,
          l.type,
          void 0,
          tt
        );
        break;
      case 11:
        l = md(
          e,
          l,
          l.pendingProps,
          l.type.render,
          l.ref,
          tt
        );
        break;
      case 5:
        Pc(l);
        var u = l;
        u === Bt && (F ? (Gn(u), u.tag === 5 && u.stateNode != null && (Tt = u.stateNode)) : (Gn(u), F = !0));
      default:
        zd(e, l), l = k = $r(l, be), l = pd(e, l, be);
    }
    t.memoizedProps = t.pendingProps, l === null ? _i(t) : k = l;
  }
  function na(t, l, e, u) {
    ye = fu = null, Pc(l), Vu = null, ja = 0;
    var a = l.return;
    try {
      if (rv(
        t,
        a,
        l,
        e,
        tt
      )) {
        Nt = 1, ni(
          t,
          Al(e, t.current)
        ), k = null;
        return;
      }
    } catch (n) {
      if (a !== null) throw k = a, n;
      Nt = 1, ni(
        t,
        Al(e, t.current)
      ), k = null;
      return;
    }
    l.flags & 32768 ? (F || u === 1 ? t = !0 : ku || (tt & 536870912) !== 0 ? t = !1 : (Xe = t = !0, (u === 2 || u === 9 || u === 3 || u === 6) && (u = Lt.current, u !== null && u.tag === 13 && (u.flags |= 16384))), c0(l, t)) : _i(l);
  }
  function _i(t) {
    var l = t;
    do {
      if ((l.flags & 32768) !== 0) {
        c0(
          l,
          Xe
        );
        return;
      }
      t = l.return;
      var e = mv(
        l.alternate,
        l,
        be
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
  function c0(t, l) {
    do {
      var e = vv(t.alternate, t);
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
  function f0(t, l, e, u, a, n, i, c, r, g, T, O) {
    t.cancelPendingCommit = null;
    do
      Ci();
    while (zt !== 0);
    if ((ot & 6) !== 0) throw Error(o(327));
    if (l !== null) {
      if (l === t.current) throw Error(o(177));
      t === St && (k = St = null, tt = 0), pu = l, ql = t, kl = e, Kf = a, Id = u, Ov(
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
  function Ov(t, l, e, u, a, n, i) {
    var c = l.lanes | l.childLanes;
    if (Vf = c, c |= _c, Fy(
      t,
      e,
      c,
      u,
      a,
      n
    ), la = null, (e & 335544064) === e ? (ea = km(t), u = 10262) : (ea = null, u = 10256), (l.subtreeFlags & u) !== 0 || (l.flags & u) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, xv(hn, function() {
      return If(), null;
    })) : (t.callbackNode = null, t.callbackPriority = 0), yi = !1, u = (l.flags & 13878) !== 0, (l.subtreeFlags & 13878) !== 0 || u) {
      u = q.T, q.T = null, a = K.p, K.p = 2, n = ot, ot |= 4;
      try {
        hv(t, l, e);
      } finally {
        ot = n, K.p = a, q.T = u;
      }
    }
    zt = 1, yi ? ta = Fv(
      i,
      t.containerInfo,
      ea,
      Wf,
      $f,
      Av,
      Ff,
      If,
      Nv
    ) : (Wf(), $f(), Ff());
  }
  function Nv(t) {
    if (zt !== 0) {
      var l = ql.onRecoverableError;
      l(t, { componentStack: null });
    }
  }
  function Av() {
    zt === 3 && (zt = 0, Vd(pu, ql), zt = 4);
  }
  function Wf() {
    if (zt === 1) {
      zt = 0;
      var t = ql, l = pu, e = kl, u = (l.flags & 13878) !== 0;
      if ((l.subtreeFlags & 13878) !== 0 || u) {
        u = q.T, q.T = null;
        var a = K.p;
        K.p = 2;
        var n = ot;
        ot |= 4;
        try {
          wa = hi = !1, Ld(l, t, e), e = oo;
          var i = Gr(t.containerInfo), c = e.focusedElem, r = e.selectionRange;
          if (i !== c && c && c.ownerDocument && qr(
            c.ownerDocument.documentElement,
            c
          )) {
            if (r !== null && Ec(c)) {
              var g = r.start, T = r.end;
              if (T === void 0 && (T = g), "selectionStart" in c)
                c.selectionStart = g, c.selectionEnd = Math.min(
                  T,
                  c.value.length
                );
              else {
                var O = c.ownerDocument || document, v = O && O.defaultView || window;
                if (v.getSelection) {
                  var b = v.getSelection(), M = c.textContent.length, H = Math.min(r.start, M), W = r.end === void 0 ? H : Math.min(r.end, M);
                  !b.extend && H > W && (i = W, W = H, H = i);
                  var h = Yr(
                    c,
                    H
                  ), d = Yr(
                    c,
                    W
                  );
                  if (h && d && (b.rangeCount !== 1 || b.anchorNode !== h.node || b.anchorOffset !== h.offset || b.focusNode !== d.node || b.focusOffset !== d.offset)) {
                    var S = O.createRange();
                    S.setStart(h.node, h.offset), b.removeAllRanges(), H > W ? (b.addRange(S), b.extend(d.node, d.offset)) : (S.setEnd(d.node, d.offset), b.addRange(S));
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
          ya = !!fo, oo = fo = null;
        } finally {
          ot = n, K.p = a, q.T = u;
        }
      }
      t.current = l, zt = 2;
    }
  }
  function $f() {
    if (zt === 2) {
      zt = 0;
      var t = ql, l = pu, e = (l.flags & 8772) !== 0;
      if ((l.subtreeFlags & 8772) !== 0 || e) {
        e = q.T, q.T = null;
        var u = K.p;
        K.p = 2;
        var a = ot;
        ot |= 4;
        try {
          Bd(t, l.alternate, l);
        } finally {
          ot = a, K.p = u, q.T = e;
        }
      }
      zt = 3;
    }
  }
  function Ff() {
    if (zt === 4 || zt === 3) {
      zt = 0;
      var t = ta;
      ta = null, Xy();
      var l = ql, e = pu, u = kl, a = Id, n = (u & 335544064) === u ? 10262 : 10256;
      if ((e.subtreeFlags & n) !== 0 || (e.flags & n) !== 0 ? zt = 5 : (zt = 0, pu = ql = null, o0(l, l.pendingLanes)), n = l.pendingLanes, n === 0 && (Ze = null), ac(u), e = e.stateNode, sl && typeof sl.onCommitFiberRoot == "function")
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
        e = q.T, n = K.p, K.p = 2, q.T = null;
        try {
          for (var i = l.onRecoverableError, c = 0; c < a.length; c++) {
            var r = a[c];
            i(r.value, {
              componentStack: r.stack
            });
          }
        } finally {
          q.T = e, K.p = n;
        }
      }
      if (a = la, i = ea, ea = null, a !== null && (la = null, i === null && (i = []), t !== null))
        for (r = 0; r < a.length; r++)
          e = (0, a[r])(
            i
          ), e !== void 0 && t.finished.finally(e);
      (kl & 3) !== 0 && Ci(), Pl(l), n = l.pendingLanes, (u & 261930) !== 0 && (n & 42) !== 0 ? l === Oi ? Ia++ : (Ia = 0, Oi = l) : (Ia = 0, Oi = null), ka(0);
    }
  }
  function o0(t, l) {
    (t.pooledCacheLanes &= l) === 0 && (l = t.pooledCache, l != null && (t.pooledCache = null, Da(l)));
  }
  function Ci() {
    return ta !== null && (ta.skipTransition(), ta = null), Wf(), $f(), Ff(), If();
  }
  function If() {
    if (zt !== 5) return !1;
    var t = ql, l = Vf;
    Vf = 0;
    var e = ac(kl), u = q.T, a = K.p;
    try {
      K.p = 32 > e ? 32 : e, q.T = null, e = Kf, Kf = null;
      var n = ql, i = kl;
      if (zt = 0, pu = ql = null, kl = 0, (ot & 6) !== 0) throw Error(o(331));
      var c = ot;
      if (ot |= 4, Wd(n.current), Kd(
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
      K.p = a, q.T = u, o0(t, l);
    }
  }
  function r0(t, l, e) {
    l = Al(e, l), l = mf(t.stateNode, l, 2), t = je(t, l, 2), t !== null && (Sa(t, 2), Pl(t));
  }
  function vt(t, l, e) {
    if (t.tag === 3)
      r0(t, t, e);
    else
      for (; l !== null; ) {
        if (l.tag === 3) {
          r0(
            l,
            t,
            e
          );
          break;
        } else if (l.tag === 1) {
          var u = l.stateNode;
          if (typeof l.type.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && (Ze === null || !Ze.has(u))) {
            t = Al(e, t), e = id(2), u = je(l, e, 2), u !== null && (cd(
              e,
              u,
              l,
              t
            ), Sa(u, 2), Pl(u));
            break;
          }
        }
        l = l.return;
      }
  }
  function kf(t, l, e) {
    var u = t.pingCache;
    if (u === null) {
      u = t.pingCache = new bv();
      var a = /* @__PURE__ */ new Set();
      u.set(l, a);
    } else
      a = u.get(l), a === void 0 && (a = /* @__PURE__ */ new Set(), u.set(l, a));
    a.has(e) || (Lf = !0, a.add(e), t = _v.bind(null, t, l, e), l.then(t, t));
  }
  function _v(t, l, e) {
    var u = t.pingCache;
    u !== null && u.delete(l), t.pingedLanes |= t.suspendedLanes & e, t.warmLanes &= ~e, St === t && (tt & e) === e && ((Nt === 4 || Nt === 3 && (tt & 62914560) === tt && 300 > rl() - pi) && (ot & 2) === 0 ? aa(t, 0) : Ti |= e, Pu === tt && (Pu = 0)), Pl(t);
  }
  function s0(t, l) {
    l === 0 && (l = Fo()), t = nu(t, l), t !== null && (Sa(t, l), Pl(t));
  }
  function Cv(t) {
    var l = t.memoizedState, e = 0;
    l !== null && (e = l.retryLane), s0(t, e);
  }
  function Mv(t, l) {
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
    u !== null && u.delete(l), s0(t, e);
  }
  function xv(t, l) {
    return tc(t, l);
  }
  var ia = null, ca = null, Pf = !1, Mi = !1, to = !1, Ke = 0;
  function Pl(t) {
    t !== ca && t.next === null && (ca === null ? ia = ca = t : ca = ca.next = t), Mi = !0, Pf || (Pf = !0, Dv());
  }
  function ka(t, l) {
    if (!to && Mi) {
      to = !0;
      do
        for (var e = !1, u = ia; u !== null; ) {
          if (t !== 0) {
            var a = u.pendingLanes;
            if (a === 0) var n = 0;
            else {
              var i = u.suspendedLanes, c = u.pingedLanes;
              n = (1 << 31 - dl(42 | t) + 1) - 1, n &= a & ~(i & ~c), n = n & 201326741 ? n & 201326741 | 1 : n ? n | 2 : 0;
            }
            n !== 0 && (e = !0, v0(u, n));
          } else
            n = tt, n = Tn(
              u,
              u === St ? n : 0,
              u.cancelPendingCommit !== null || u.timeoutHandle !== -1
            ), (n & 3) === 0 || ga(u, n) || (e = !0, v0(u, n));
          u = u.next;
        }
      while (e);
      to = !1;
    }
  }
  function Rv() {
    d0();
  }
  function d0() {
    Mi = Pf = !1;
    var t = 0;
    Ke !== 0 && Zv() && (t = Ke);
    for (var l = rl(), e = null, u = ia; u !== null; ) {
      var a = u.next, n = y0(u, l);
      n === 0 ? (u.next = null, e === null ? ia = a : e.next = a, a === null && (ca = e)) : (e = u, (t !== 0 || (n & 3) !== 0) && (Mi = !0)), u = a;
    }
    zt !== 0 && zt !== 5 || ka(t), Ke !== 0 && (Ke = 0);
  }
  function y0(t, l) {
    for (var e = t.suspendedLanes, u = t.pingedLanes, a = t.expirationTimes, n = t.pendingLanes & -62914561; 0 < n; ) {
      var i = 31 - dl(n), c = 1 << i, r = a[i];
      r === -1 ? ((c & e) === 0 || (c & u) !== 0) && (a[i] = $y(c, l)) : r <= l && (t.expiredLanes |= c), n &= ~c;
    }
    if (l = St, e = tt, e = Tn(
      t,
      t === l ? e : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), u = t.callbackNode, e === 0 || t === l && (mt === 2 || mt === 9) || t.cancelPendingCommit !== null)
      return u !== null && u !== null && lc(u), t.callbackNode = null, t.callbackPriority = 0;
    if ((e & 3) === 0 || ga(t, e)) {
      if (l = e & -e, l === t.callbackPriority) return l;
      switch (u !== null && lc(u), ac(e)) {
        case 2:
        case 8:
          e = wo;
          break;
        case 32:
          e = hn;
          break;
        case 268435456:
          e = Wo;
          break;
        default:
          e = hn;
      }
      return u = m0.bind(null, t), e = tc(e, u), t.callbackPriority = l, t.callbackNode = e, l;
    }
    return u !== null && u !== null && lc(u), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function m0(t, l) {
    if (zt !== 0 && zt !== 5)
      return t.callbackNode = null, t.callbackPriority = 0, null;
    var e = t.callbackNode;
    if (Ci() && t.callbackNode !== e)
      return null;
    var u = tt;
    return u = Tn(
      t,
      t === St ? u : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), u === 0 ? null : (Pd(t, u, l), y0(t, rl()), t.callbackNode != null && t.callbackNode === e ? m0.bind(null, t) : null);
  }
  function v0(t, l) {
    if (Ci()) return null;
    Pd(t, l, !0);
  }
  function Dv() {
    Kv(function() {
      (ot & 6) !== 0 ? tc(
        Jo,
        Rv
      ) : d0();
    });
  }
  function lo() {
    if (Ke === 0) {
      var t = su;
      t === 0 && (t = gn, gn <<= 1, (gn & 261888) === 0 && (gn = 256)), Ke = t;
    }
    return Ke;
  }
  function h0(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : Nn(t);
  }
  function Uv(t, l, e, u, a) {
    if (l === "submit" && e && e.stateNode === a) {
      var n = h0(
        (a[ul] || null).action
      ), i = u.submitter;
      i && (l = (l = i[ul] || null) ? h0(l.formAction) : i.getAttribute("formAction"), l !== null && (n = l, i = null));
      var c = new Mn(
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
                if (Ke !== 0) {
                  var r = new FormData(a, i);
                  of(
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
                typeof n == "function" && (c.preventDefault(), r = new FormData(a, i), of(
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
  for (var eo = 0; eo < Ac.length; eo++) {
    var uo = Ac[eo], Hv = uo.toLowerCase(), jv = uo[0].toUpperCase() + uo.slice(1);
    Hl(
      Hv,
      "on" + jv
    );
  }
  Hl(Lr, "onAnimationEnd"), Hl(Zr, "onAnimationIteration"), Hl(Vr, "onAnimationStart"), Hl("dblclick", "onDoubleClick"), Hl("focusin", "onFocus"), Hl("focusout", "onBlur"), Hl(Vm, "onTransitionRun"), Hl(Km, "onTransitionStart"), Hl(Jm, "onTransitionCancel"), Hl(Kr, "onTransitionEnd"), Mu("onMouseEnter", ["mouseout", "mouseover"]), Mu("onMouseLeave", ["mouseout", "mouseover"]), Mu("onPointerEnter", ["pointerout", "pointerover"]), Mu("onPointerLeave", ["pointerout", "pointerover"]), eu(
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
  ), Bv = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Pa)
  );
  function g0(t, l) {
    l = (l & 4) !== 0;
    for (var e = 0; e < t.length; e++) {
      var u = t[e], a = u.event;
      u = u.listeners;
      t: {
        var n = void 0;
        if (l)
          for (var i = u.length - 1; 0 <= i; i--) {
            var c = u[i], r = c.instance, g = c.currentTarget;
            if (c = c.listener, r !== n && a.isPropagationStopped())
              break t;
            n = c, a.currentTarget = g;
            try {
              n(a);
            } catch (T) {
              Dn(T);
            }
            a.currentTarget = null, n = r;
          }
        else
          for (i = 0; i < u.length; i++) {
            if (c = u[i], r = c.instance, g = c.currentTarget, c = c.listener, r !== n && a.isPropagationStopped())
              break t;
            n = c, a.currentTarget = g;
            try {
              n(a);
            } catch (T) {
              Dn(T);
            }
            a.currentTarget = null, n = r;
          }
      }
    }
  }
  function P(t, l) {
    var e = l[er];
    e === void 0 && (e = l[er] = /* @__PURE__ */ new Set());
    var u = t + "__bubble";
    e.has(u) || (S0(l, t, 2, !1), e.add(u));
  }
  function ao(t, l, e) {
    var u = 0;
    l && (u |= 4), S0(
      e,
      t,
      u,
      l
    );
  }
  var xi = "_reactListening" + Math.random().toString(36).slice(2);
  function no(t) {
    if (!t[xi]) {
      t[xi] = !0, nr.forEach(function(e) {
        e !== "selectionchange" && (Bv.has(e) || ao(e, !1, t), ao(e, !0, t));
      });
      var l = t.nodeType === 9 ? t : t.ownerDocument;
      l === null || l[xi] || (l[xi] = !0, ao("selectionchange", !1, l));
    }
  }
  function S0(t, l, e, u) {
    switch (cy(l)) {
      case 2:
        var a = Ch;
        break;
      case 8:
        a = Mh;
        break;
      default:
        a = Ao;
    }
    e = a.bind(
      null,
      l,
      e,
      t
    ), a = void 0, !dc || l !== "touchstart" && l !== "touchmove" && l !== "wheel" || (a = !0), u ? a !== void 0 ? t.addEventListener(l, e, {
      capture: !0,
      passive: a
    }) : t.addEventListener(l, e, !0) : a !== void 0 ? t.addEventListener(l, e, {
      passive: a
    }) : t.addEventListener(l, e, !1);
  }
  function io(t, l, e, u, a) {
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
    Sr(function() {
      var g = n, T = rc(e), O = [];
      t: {
        var v = Jr.get(t);
        if (v !== void 0) {
          var b = Mn, M = t;
          switch (t) {
            case "keypress":
              if (_n(e) === 0) break t;
            case "keydown":
            case "keyup":
              b = Tm;
              break;
            case "focusin":
              M = "focus", b = hc;
              break;
            case "focusout":
              M = "blur", b = hc;
              break;
            case "beforeblur":
            case "afterblur":
              b = hc;
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
              b = pr;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              b = fm;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              b = Nm;
              break;
            case Lr:
            case Zr:
            case Vr:
              b = sm;
              break;
            case Kr:
              b = _m;
              break;
            case "scroll":
            case "scrollend":
              b = im;
              break;
            case "wheel":
              b = Mm;
              break;
            case "copy":
            case "cut":
            case "paste":
              b = ym;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              b = zr;
              break;
            case "submit":
              b = zm;
              break;
            case "toggle":
            case "beforetoggle":
              b = Rm;
          }
          var H = (l & 4) !== 0, W = !H && (t === "scroll" || t === "scrollend"), h = H ? v !== null ? v + "Capture" : null : v;
          H = [];
          for (var d = g, S; d !== null; ) {
            var z = d;
            if (S = z.stateNode, z = z.tag, z !== 5 && z !== 26 && z !== 27 || S === null || h === null || (z = pa(d, h), z != null && H.push(
              tn(d, z, S)
            )), W) break;
            d = d.return;
          }
          0 < H.length && (v = new b(
            v,
            M,
            null,
            e,
            T
          ), O.push({ event: v, listeners: H }));
        }
      }
      if ((l & 7) === 0) {
        t: {
          if (b = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout", b && e !== oc && (M = e.relatedTarget || e.fromElement) && (lu(M) || M[Au]))
            break t;
          (v || b) && (M = T.window === T ? T : (b = T.ownerDocument) ? b.defaultView || b.parentWindow : window, v ? (b = e.relatedTarget || e.toElement, v = g, b = b ? lu(b) : null, b !== null && (W = x(b), H = b.tag, b !== W || H !== 5 && H !== 27 && H !== 6) && (b = null)) : (v = null, b = g), v !== b && (H = pr, z = "onMouseLeave", h = "onMouseEnter", d = "mouse", (t === "pointerout" || t === "pointerover") && (H = zr, z = "onPointerLeave", h = "onPointerEnter", d = "pointer"), W = v == null ? M : Ta(v), S = b == null ? M : Ta(b), M = new H(
            z,
            d + "leave",
            v,
            e,
            T
          ), M.target = W, M.relatedTarget = S, z = null, lu(T) === g && (H = new H(
            h,
            d + "enter",
            b,
            e,
            T
          ), H.target = S, H.relatedTarget = W, z = H), W = z, H = v && b ? $t(
            v,
            b,
            Yv
          ) : null, v !== null && b0(
            O,
            M,
            v,
            H,
            !1
          ), b !== null && W !== null && b0(
            O,
            W,
            b,
            H,
            !0
          )));
        }
        t: {
          if (v = g ? Ta(g) : window, b = v.nodeName && v.nodeName.toLowerCase(), b === "select" || b === "input" && v.type === "file")
            var D = Rr;
          else if (Mr(v))
            if (Dr)
              D = Xm;
            else {
              D = Gm;
              var lt = qm;
            }
          else
            b = v.nodeName, !b || b.toLowerCase() !== "input" || v.type !== "checkbox" && v.type !== "radio" ? g && fc(g.elementType) && (D = Rr) : D = Qm;
          if (D && (D = D(t, g))) {
            xr(
              O,
              D,
              e,
              T
            );
            break t;
          }
          lt && lt(t, v, g);
        }
        switch (lt = g ? Ta(g) : window, t) {
          case "focusin":
            (Mr(lt) || lt.contentEditable === "true") && (ju = lt, zc = g, Ma = null);
            break;
          case "focusout":
            Ma = zc = ju = null;
            break;
          case "mousedown":
            Oc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Oc = !1, Qr(O, e, T);
            break;
          case "selectionchange":
            if (Zm) break;
          case "keydown":
          case "keyup":
            Qr(O, e, T);
        }
        var G;
        if (Sc)
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
          Hu ? _r(t, e) && (Z = "onCompositionEnd") : t === "keydown" && e.keyCode === 229 && (Z = "onCompositionStart");
        Z && (Or && e.locale !== "ko" && (Hu || Z !== "onCompositionStart" ? Z === "onCompositionEnd" && Hu && (G = br()) : (Ae = T, yc = "value" in Ae ? Ae.value : Ae.textContent, Hu = !0)), lt = Ri(g, Z), 0 < lt.length && (Z = new Er(
          Z,
          t,
          null,
          e,
          T
        ), O.push({ event: Z, listeners: lt }), G ? Z.data = G : (G = Cr(e), G !== null && (Z.data = G)))), (G = Um ? Hm(t, e) : jm(t, e)) && (Z = Ri(g, "onBeforeInput"), 0 < Z.length && (lt = new Er(
          "onBeforeInput",
          "beforeinput",
          null,
          e,
          T
        ), O.push({
          event: lt,
          listeners: Z
        }), lt.data = G)), Uv(
          O,
          t,
          g,
          e,
          T
        );
      }
      g0(O, l);
    });
  }
  function tn(t, l, e) {
    return {
      instance: t,
      listener: l,
      currentTarget: e
    };
  }
  function Ri(t, l) {
    for (var e = l + "Capture", u = []; t !== null; ) {
      var a = t, n = a.stateNode;
      if (a = a.tag, a !== 5 && a !== 26 && a !== 27 || n === null || (a = pa(t, e), a != null && u.unshift(
        tn(t, a, n)
      ), a = pa(t, l), a != null && u.push(
        tn(t, a, n)
      )), t.tag === 3) return u;
      t = t.return;
    }
    return [];
  }
  function Yv(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function b0(t, l, e, u, a) {
    for (var n = l._reactName, i = []; e !== null && e !== u; ) {
      var c = e, r = c.alternate, g = c.stateNode;
      if (c = c.tag, r !== null && r === u) break;
      c !== 5 && c !== 26 && c !== 27 || g === null || (r = g, a ? (g = pa(e, n), g != null && i.unshift(
        tn(e, g, r)
      )) : a || (g = pa(e, n), g != null && i.push(
        tn(e, g, r)
      ))), e = e.return;
    }
    i.length !== 0 && t.push({ event: l, listeners: i });
  }
  var qv = /\r\n?/g, Gv = /\u0000|\uFFFD/g;
  function T0(t) {
    return (typeof t == "string" ? t : "" + t).replace(qv, `
`).replace(Gv, "");
  }
  function p0(t, l) {
    return l = T0(l), T0(t) === l;
  }
  function ht(t, l, e, u, a, n) {
    switch (e) {
      case "children":
        if (typeof u == "string")
          l === "body" || l === "textarea" && u === "" || Ru(t, u);
        else if (typeof u == "number" || typeof u == "bigint")
          l !== "body" && Ru(t, "" + u);
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
        hr(t, u, n);
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
        u = Nn(u), t.setAttribute(e, u);
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
          typeof n == "function" && (e === "formAction" ? (l !== "input" && ht(t, l, "name", a.name, a, null), ht(
            t,
            l,
            "formEncType",
            a.formEncType,
            a,
            null
          ), ht(
            t,
            l,
            "formMethod",
            a.formMethod,
            a,
            null
          ), ht(
            t,
            l,
            "formTarget",
            a.formTarget,
            a,
            null
          )) : (ht(t, l, "encType", a.encType, a, null), ht(t, l, "method", a.method, a, null), ht(t, l, "target", a.target, a, null)));
        if (u == null || typeof u == "symbol" || typeof u == "boolean") {
          t.removeAttribute(e);
          break;
        }
        u = Nn(u), t.setAttribute(e, u);
        break;
      case "onClick":
        u != null && (t.onclick = Zl);
        return;
      case "onScroll":
        u != null && P("scroll", t);
        return;
      case "onScrollEnd":
        u != null && P("scrollend", t);
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
        e = Nn(u), t.setAttributeNS(
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
        P("beforetoggle", t), P("toggle", t), zn(t, "popover", u);
        break;
      case "xlinkActuate":
        ce(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          u
        );
        break;
      case "xlinkArcrole":
        ce(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          u
        );
        break;
      case "xlinkRole":
        ce(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          u
        );
        break;
      case "xlinkShow":
        ce(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          u
        );
        break;
      case "xlinkTitle":
        ce(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          u
        );
        break;
      case "xlinkType":
        ce(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          u
        );
        break;
      case "xmlBase":
        ce(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          u
        );
        break;
      case "xmlLang":
        ce(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          u
        );
        break;
      case "xmlSpace":
        ce(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          u
        );
        break;
      case "is":
        zn(t, "is", u);
        break;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N")
          e = am.get(e) || e, zn(t, e, u);
        else return;
    }
    it = !0;
  }
  function co(t, l, e, u, a, n) {
    switch (e) {
      case "style":
        hr(t, u, n);
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
        if (typeof u == "string") Ru(t, u);
        else if (typeof u == "number" || typeof u == "bigint")
          Ru(t, "" + u);
        else return;
        break;
      case "onScroll":
        u != null && P("scroll", t);
        return;
      case "onScrollEnd":
        u != null && P("scrollend", t);
        return;
      case "onClick":
        u != null && (t.onclick = Zl);
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
        if (!ir.hasOwnProperty(e))
          t: {
            if (e[0] === "o" && e[1] === "n" && (a = e.endsWith("Capture"), n = e.slice(2, a ? e.length - 7 : void 0), l = t[ul] || null, l = l != null ? l[e] : null, typeof l == "function" && t.removeEventListener(n, l, a), typeof u == "function")) {
              typeof l != "function" && l !== null && (e in t ? t[e] = null : t.hasAttribute(e) && t.removeAttribute(e)), t.addEventListener(n, u, a);
              break t;
            }
            it = !0, e in t ? t[e] = u : u === !0 ? t.setAttribute(e, "") : zn(t, e, u);
          }
        return;
    }
    it = !0;
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
                  ht(t, l, n, i, e, null);
              }
          }
        a && ht(t, l, "srcSet", e.srcSet, e, null), u && ht(t, l, "src", e.src, e, null);
        return;
      case "input":
        P("invalid", t);
        var c = n = i = a = null, r = null, g = null;
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
                  g = T;
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
                  ht(t, l, u, T, e, null);
              }
          }
        dr(
          t,
          n,
          c,
          r,
          g,
          i,
          a,
          !1
        );
        return;
      case "select":
        P("invalid", t), u = i = n = null;
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
                ht(t, l, a, c, e, null);
            }
        l = n, e = i, t.multiple = !!u, l != null ? xu(t, !!u, l, !1) : e != null && xu(t, !!u, e, !0);
        return;
      case "textarea":
        P("invalid", t), n = a = u = null;
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
                ht(t, l, i, c, e, null);
            }
        mr(t, u, a, n);
        return;
      case "option":
        for (r in e)
          e.hasOwnProperty(r) && (u = e[r], u != null) && (r === "selected" ? t.selected = u && typeof u != "function" && typeof u != "symbol" : ht(t, l, r, u, e, null));
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
        for (u = 0; u < Pa.length; u++)
          P(Pa[u], t);
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
          if (e.hasOwnProperty(g) && (u = e[g], u != null))
            switch (g) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(o(137, l));
              default:
                ht(t, l, g, u, e, null);
            }
        return;
      default:
        if (fc(l)) {
          for (T in e)
            e.hasOwnProperty(T) && (u = e[T], u !== void 0 && co(
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
      e.hasOwnProperty(c) && (u = e[c], u != null && ht(t, l, c, u, e, null));
  }
  var Qv = {};
  function Xv(t, l, e, u) {
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
        var a = null, n = null, i = null, c = null, r = null, g = null, T = null;
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
                u.hasOwnProperty(b) || ht(t, l, b, null, u, O);
            }
        }
        for (var v in u) {
          var b = u[v];
          if (O = e[v], u.hasOwnProperty(v) && (b != null || O != null))
            switch (v) {
              case "type":
                b !== O && (it = !0), n = b;
                break;
              case "name":
                b !== O && (it = !0), a = b;
                break;
              case "checked":
                b !== O && (it = !0), g = b;
                break;
              case "defaultChecked":
                b !== O && (it = !0), T = b;
                break;
              case "value":
                b !== O && (it = !0), i = b;
                break;
              case "defaultValue":
                b !== O && (it = !0), c = b;
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
                  u,
                  O
                );
            }
        }
        ic(
          t,
          i,
          c,
          r,
          g,
          T,
          n,
          a
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
                u.hasOwnProperty(n) || ht(
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
                n !== r && (it = !0), v = n;
                break;
              case "defaultValue":
                n !== r && (it = !0), c = n;
                break;
              case "multiple":
                n !== r && (it = !0), i = n;
              default:
                n !== r && ht(
                  t,
                  l,
                  a,
                  n,
                  u,
                  r
                );
            }
        l = c, e = i, u = b, v != null ? xu(t, !!e, v, !1) : !!u != !!e && (l != null ? xu(t, !!e, l, !0) : xu(t, !!e, e ? [] : "", !1));
        return;
      case "textarea":
        b = v = null;
        for (c in e)
          if (a = e[c], e.hasOwnProperty(c) && a != null && !u.hasOwnProperty(c))
            switch (c) {
              case "value":
                break;
              case "children":
                break;
              default:
                ht(t, l, c, null, u, a);
            }
        for (i in u)
          if (a = u[i], n = e[i], u.hasOwnProperty(i) && (a != null || n != null))
            switch (i) {
              case "value":
                a !== n && (it = !0), v = a;
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
                a !== n && ht(t, l, i, a, u, n);
            }
        yr(t, v, b);
        return;
      case "option":
        for (var M in e)
          v = e[M], e.hasOwnProperty(M) && v != null && !u.hasOwnProperty(M) && (M === "selected" ? t.selected = !1 : ht(
            t,
            l,
            M,
            null,
            u,
            v
          ));
        for (r in u)
          v = u[r], b = e[r], u.hasOwnProperty(r) && v !== b && (v != null || b != null) && (r === "selected" ? (v !== b && (it = !0), t.selected = v && typeof v != "function" && typeof v != "symbol") : ht(
            t,
            l,
            r,
            v,
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
          v = e[H], e.hasOwnProperty(H) && v != null && !u.hasOwnProperty(H) && ht(t, l, H, null, u, v);
        for (g in u)
          if (v = u[g], b = e[g], u.hasOwnProperty(g) && v !== b && (v != null || b != null))
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
                  u,
                  b
                );
            }
        return;
      default:
        if (fc(l)) {
          for (var W in e)
            v = e[W], e.hasOwnProperty(W) && v !== void 0 && !u.hasOwnProperty(W) && co(
              t,
              l,
              W,
              void 0,
              u,
              v
            );
          for (T in u)
            v = u[T], b = e[T], !u.hasOwnProperty(T) || v === b || v === void 0 && b === void 0 || co(
              t,
              l,
              T,
              v,
              u,
              b
            );
          return;
        }
    }
    for (var h in e)
      v = e[h], e.hasOwnProperty(h) && v != null && !u.hasOwnProperty(h) && ht(t, l, h, null, u, v);
    for (O in u)
      v = u[O], b = e[O], !u.hasOwnProperty(O) || v === b || v == null && b == null || ht(t, l, O, v, u, b);
  }
  function E0(t) {
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
  function Lv() {
    if (typeof performance.getEntriesByType == "function") {
      for (var t = 0, l = 0, e = performance.getEntriesByType("resource"), u = 0; u < e.length; u++) {
        var a = e[u], n = a.transferSize, i = a.initiatorType, c = a.duration;
        if (n && c && E0(i)) {
          for (i = 0, c = a.responseEnd, u += 1; u < e.length; u++) {
            var r = e[u], g = r.startTime;
            if (g > c) break;
            var T = r.transferSize, O = r.initiatorType;
            T && E0(O) && (r = r.responseEnd, i += T * (r < c ? 1 : (c - g) / (r - g)));
          }
          if (--u, l += 8 * (n + i) / (a.duration / 1e3), t++, 10 < t) break;
        }
      }
      if (0 < t) return l / t / 1e6;
    }
    return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
  }
  var fo = null, oo = null;
  function ln(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function z0(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function O0(t, l) {
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
  function N0(t, l, e, u) {
    return e = ln(
      e
    ).createElement(t), e[Qt] = u, e[ul] = l, Kt(e, t, l), jt(e), e;
  }
  function ro(t, l) {
    return t === "textarea" || t === "noscript" || typeof l.children == "string" || typeof l.children == "number" || typeof l.children == "bigint" || typeof l.dangerouslySetInnerHTML == "object" && l.dangerouslySetInnerHTML !== null && l.dangerouslySetInnerHTML.__html != null;
  }
  var so = null;
  function Zv() {
    var t = window.event;
    return t && t.type === "popstate" ? t === so ? !1 : (so = t, !0) : (so = null, !1);
  }
  var yo = typeof setTimeout == "function" ? setTimeout : void 0, Vv = typeof clearTimeout == "function" ? clearTimeout : void 0, A0 = typeof Promise == "function" ? Promise : void 0, _0 = typeof requestAnimationFrame == "function" ? requestAnimationFrame : yo, Kv = typeof queueMicrotask == "function" ? queueMicrotask : typeof A0 < "u" ? function(t) {
    return A0.resolve(null).then(t).catch(Jv);
  } : yo;
  function Jv(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function Je(t) {
    return t === "head";
  }
  function C0(t, l) {
    var e = l, u = 0;
    do {
      var a = e.nextSibling;
      if (t.removeChild(e), a && a.nodeType === 8)
        if (e = a.data, e === "/$" || e === "/&") {
          if (u === 0) {
            t.removeChild(a), ma(l);
            return;
          }
          u--;
        } else if (e === "$" || e === "$?" || e === "$~" || e === "$!" || e === "&")
          u++;
        else if (e === "html")
          po(
            t.ownerDocument.documentElement
          );
        else if (e === "head") {
          e = t.ownerDocument.head, po(e);
          for (var n = e.firstChild; n; ) {
            var i = n.nextSibling, c = n.nodeName;
            n[ba] || c === "SCRIPT" || c === "STYLE" || c === "LINK" && n.rel.toLowerCase() === "stylesheet" || e.removeChild(n), n = i;
          }
        } else
          e === "body" && po(t.ownerDocument.body);
      e = a;
    } while (e);
    ma(l);
  }
  function M0(t, l) {
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
  function x0(t, l, e) {
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
  function R0(t, l) {
    t = t.style, l = l.style;
    var e = l != null ? l.hasOwnProperty("viewTransitionName") ? l.viewTransitionName : l.hasOwnProperty("view-transition-name") ? l["view-transition-name"] : null : null;
    t.viewTransitionName = e == null || typeof e == "boolean" ? "" : ("" + e).trim(), e = l != null ? l.hasOwnProperty("viewTransitionClass") ? l.viewTransitionClass : l.hasOwnProperty("view-transition-class") ? l["view-transition-class"] : null : null, t.viewTransitionClass = e == null || typeof e == "boolean" ? "" : ("" + e).trim(), t.display === "inline-block" && (l == null ? t.display = t.margin = "" : (e = l.display, t.display = e == null || typeof e == "boolean" ? "" : e, e = l.margin, e != null ? t.margin = e : (e = l.hasOwnProperty("marginTop") ? l.marginTop : l["margin-top"], t.marginTop = e == null || typeof e == "boolean" ? "" : e, l = l.hasOwnProperty("marginBottom") ? l.marginBottom : l["margin-bottom"], t.marginBottom = l == null || typeof l == "boolean" ? "" : l)));
  }
  function wv(t, l, e) {
    return e = e.ownerDocument.defaultView, {
      rect: t,
      abs: l.position === "absolute" || l.position === "fixed",
      clip: l.clipPath !== "none" || l.overflow !== "visible" || l.filter !== "none" || l.mask !== "none" || l.mask !== "none" || l.borderRadius !== "0px",
      view: 0 <= t.bottom && 0 <= t.right && t.top <= e.innerHeight && t.left <= e.innerWidth
    };
  }
  function mo(t) {
    var l = t.getBoundingClientRect(), e = getComputedStyle(t);
    return wv(l, e, t);
  }
  function Wv(t) {
    return t.documentElement.clientHeight;
  }
  function $v(t) {
    this.addEventListener("load", t), this.addEventListener("error", t);
  }
  function Fv(t, l, e, u, a, n, i, c, r) {
    var g = l.nodeType === 9 ? l : l.ownerDocument;
    try {
      var T = g.startViewTransition({
        update: function() {
          var v = g.defaultView, b = v.navigation && v.navigation.transition, M = g.fonts.status;
          u();
          var H = [];
          if (M === "loaded" && (Wv(g), g.fonts.status === "loading" && H.push(g.fonts.ready)), M = H.length, t !== null)
            for (var W = t.suspenseyImages, h = 0, d = 0; d < W.length; d++) {
              var S = W[d];
              if (!S.complete) {
                var z = S.getBoundingClientRect();
                if (0 < z.bottom && 0 < z.right && z.top < v.innerHeight && z.left < v.innerWidth) {
                  if (h += k0(S), h > Hi) {
                    H.length = M;
                    break;
                  }
                  S = new Promise(
                    $v.bind(S)
                  ), H.push(S);
                }
              }
            }
          if (0 < H.length)
            return v = Promise.race([
              Promise.all(H),
              new Promise(function(D) {
                return setTimeout(D, 500);
              })
            ]).then(a, a), (b ? Promise.allSettled([b.finished, v]) : v).then(n, n);
          if (a(), b)
            return b.finished.then(
              n,
              n
            );
          n();
        },
        types: e
      });
      g.__reactViewTransition = T;
      var O = [];
      return T.ready.then(
        function() {
          for (var v = g.documentElement.getAnimations({
            subtree: !0
          }), b = 0; b < v.length; b++) {
            var M = v[b], H = M.effect, W = H.pseudoElement;
            if (W != null && W.startsWith("::view-transition")) {
              O.push(M), M = H.getKeyframes();
              for (var h = W = void 0, d = !0, S = 0; S < M.length; S++) {
                var z = M[S], D = z.width;
                if (W === void 0) W = D;
                else if (W !== D) {
                  d = !1;
                  break;
                }
                if (D = z.height, h === void 0) h = D;
                else if (h !== D) {
                  d = !1;
                  break;
                }
                delete z.width, delete z.height, z.transform === "none" && delete z.transform;
              }
              d && W !== void 0 && h !== void 0 && (H.setKeyframes(M), d = getComputedStyle(
                H.target,
                H.pseudoElement
              ), d.width !== W || d.height !== h) && (d = M[0], d.width = W, d.height = h, d = M[M.length - 1], d.width = W, d.height = h, H.setKeyframes(M));
            }
          }
          i();
        },
        function(v) {
          g.__reactViewTransition === T && (g.__reactViewTransition = null);
          try {
            typeof v == "object" && v !== null && v.name === "InvalidStateError" && (v.message === "View transition was skipped because document visibility state is hidden." || v.message === "Skipping view transition because document visibility state has become hidden." || v.message === "Skipping view transition because viewport size changed." || v.message === "Transition was aborted because of invalid state") && (v = null), v !== null && r(v);
          } finally {
            u(), a(), i();
          }
        }
      ), T.finished.finally(function() {
        for (var v = 0; v < O.length; v++)
          O[v].cancel();
        g.__reactViewTransition === T && (g.__reactViewTransition = null), c();
      }), T;
    } catch {
      return u(), a(), i(), null;
    }
  }
  function Eu(t, l) {
    this._scope = document.documentElement, this._selector = "::view-transition-" + t + "(" + l + ")";
  }
  Eu.prototype.animate = function(t, l) {
    return l = typeof l == "number" ? { duration: l } : $({}, l), l.pseudoElement = this._selector, this._scope.animate(t, l);
  }, Eu.prototype.getAnimations = function() {
    for (var t = this._scope, l = this._selector, e = t.getAnimations({ subtree: !0 }), u = [], a = 0; a < e.length; a++) {
      var n = e[a].effect;
      n !== null && n.target === t && n.pseudoElement === l && u.push(e[a]);
    }
    return u;
  }, Eu.prototype.getComputedStyle = function() {
    return getComputedStyle(this._scope, this._selector);
  };
  function D0(t) {
    return {
      name: t,
      group: new Eu("group", t),
      imagePair: new Eu("image-pair", t),
      old: new Eu("old", t),
      new: new Eu("new", t)
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
      if (H0(n, t, l, e) === -1) {
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
        }), p(
          this._fragmentFiber.child,
          !1,
          Iv,
          t,
          c,
          u
        );
      }
      this._eventListeners = n;
    }
  };
  function Iv(t, l, e, u) {
    return j(t).addEventListener(
      l,
      e,
      u
    ), !1;
  }
  Tl.prototype.removeEventListener = function(t, l, e) {
    var u = this._eventListeners;
    if (u !== null && (l = H0(
      u,
      t,
      l,
      e
    ), l !== -1)) {
      var a = u[l];
      e = a.attachedListener;
      var n = a.cleanup;
      a = fa(a.optionsOrUseCapture), p(
        this._fragmentFiber.child,
        !1,
        kv,
        t,
        e,
        a
      ), u.splice(l, 1), n !== null && n();
    }
  };
  function kv(t, l, e, u) {
    return j(t).removeEventListener(
      l,
      e,
      u
    ), !1;
  }
  function fa(t) {
    return t != null && typeof t != "boolean" && (t.once === !0 || t.signal instanceof AbortSignal) ? { capture: t.capture, passive: t.passive } : t;
  }
  function U0(t) {
    return t == null ? "c=0" : typeof t == "boolean" ? "c=" + (t ? "1" : "0") : "c=" + (t.capture ? "1" : "0");
  }
  function H0(t, l, e, u) {
    if (t.length === 0) return -1;
    u = U0(u);
    for (var a = 0; a < t.length; a++) {
      var n = t[a];
      if (n.type === l && n.listener === e && U0(n.optionsOrUseCapture) === u)
        return a;
    }
    return -1;
  }
  Tl.prototype.dispatchEvent = function(t) {
    var l = B(
      this._fragmentFiber
    );
    if (l === null) return !0;
    l = j(l);
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
    p(
      this._fragmentFiber.child,
      !0,
      j0,
      t,
      void 0,
      void 0
    );
  };
  function j0(t, l) {
    return t.tag === 6 ? !1 : (t = j(t), rh(t, l));
  }
  Tl.prototype.focusLast = function(t) {
    var l = [];
    p(
      this._fragmentFiber.child,
      !0,
      vo,
      l,
      void 0,
      void 0
    );
    for (var e = l.length - 1; 0 <= e && !j0(l[e], t); e--) ;
  };
  function vo(t, l) {
    return l.push(t), !1;
  }
  Tl.prototype.blur = function() {
    var t = B(
      this._fragmentFiber
    );
    t !== null && (t = j(t), t = ln(t).activeElement, t !== null && p(
      this._fragmentFiber.child,
      !1,
      Pv,
      t,
      void 0,
      void 0
    ));
  };
  function Pv(t, l) {
    return t.tag === 6 ? !1 : (t = j(t), t === l || t.contains(l) ? (l.blur(), !0) : !1);
  }
  Tl.prototype.observeUsing = function(t) {
    this._observers === null && (this._observers = /* @__PURE__ */ new Set()), this._observers.add(t), p(
      this._fragmentFiber.child,
      !1,
      th,
      t,
      void 0,
      void 0
    );
  };
  function th(t, l) {
    return t.tag === 6 || (t = j(t), l.observe(t)), !1;
  }
  Tl.prototype.unobserveUsing = function(t) {
    var l = this._observers;
    if (l !== null && l.has(t)) {
      l.delete(t), p(
        this._fragmentFiber.child,
        !1,
        lh,
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
  function lh(t, l) {
    return t.tag === 6 || (t = j(t), l.unobserve(t)), !1;
  }
  var Gl = [], ho = !1;
  function eh(t, l, e) {
    Gl.push({
      fragmentInstance: t,
      observer: l,
      instance: e
    }), ho || (ho = !0, sh(function() {
      ho = !1;
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
    return p(
      this._fragmentFiber.child,
      !1,
      uh,
      t,
      void 0,
      void 0
    ), t;
  };
  function uh(t, l) {
    if (t.tag === 6) {
      t = t.stateNode;
      var e = t.ownerDocument.createRange();
      e.selectNodeContents(t), l.push.apply(l, e.getClientRects());
    } else
      t = j(t), l.push.apply(l, t.getClientRects());
    return !1;
  }
  Tl.prototype.getRootNode = function(t) {
    var l = B(
      this._fragmentFiber
    );
    return l === null ? this : j(l).getRootNode(t);
  }, Tl.prototype.compareDocumentPosition = function(t) {
    var l = B(
      this._fragmentFiber
    );
    if (l === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
    var e = [];
    p(
      this._fragmentFiber.child,
      !1,
      vo,
      e,
      void 0,
      void 0
    );
    var u = j(l);
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
      return e === t ? a = Node.DOCUMENT_POSITION_CONTAINS : u & Node.DOCUMENT_POSITION_CONTAINED_BY && (e = At(l)[1], e === null ? a = Node.DOCUMENT_POSITION_PRECEDING : (t = j(e).compareDocumentPosition(
        t
      ), a = t === 0 || t & Node.DOCUMENT_POSITION_FOLLOWING ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING)), a |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
    }
    l = j(e[0]), a = j(e[e.length - 1]);
    var n = dt(this._fragmentFiber) ? l.parentElement : u;
    if (n == null)
      return Node.DOCUMENT_POSITION_DISCONNECTED;
    u = n.compareDocumentPosition(l) & Node.DOCUMENT_POSITION_CONTAINED_BY, n = n.compareDocumentPosition(a) & Node.DOCUMENT_POSITION_CONTAINED_BY;
    var i = l.compareDocumentPosition(t), c = a.compareDocumentPosition(t), r = i & Node.DOCUMENT_POSITION_CONTAINED_BY || c & Node.DOCUMENT_POSITION_CONTAINED_BY;
    return c = u && n && i & Node.DOCUMENT_POSITION_FOLLOWING && c & Node.DOCUMENT_POSITION_PRECEDING, l = u && l === t || n && a === t || r || c ? Node.DOCUMENT_POSITION_CONTAINED_BY : !u && l === t || !n && a === t ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC : i, l & Node.DOCUMENT_POSITION_DISCONNECTED || l & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC || ah(
      l,
      this._fragmentFiber,
      e[0],
      e[e.length - 1],
      t
    ) ? l : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
  };
  function ah(t, l, e, u, a) {
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
    return t & Node.DOCUMENT_POSITION_PRECEDING ? ((l = !!n) && !(l = n === e) && (l = $t(
      e,
      n,
      El
    ), l === null ? l = !1 : (p(
      l,
      !0,
      ee,
      n,
      e
    ), n = ct, ct = null, l = n !== null)), l) : t & Node.DOCUMENT_POSITION_FOLLOWING ? ((l = !!n) && !(l = n === u) && (l = $t(
      u,
      n,
      El
    ), l === null ? l = !1 : (p(
      l,
      !0,
      pl,
      n,
      u
    ), n = ct, Wt = ct = null, l = n !== null)), l) : !1;
  }
  function B0(t, l) {
    var e = t.ownerDocument.createRange();
    e.selectNodeContents(t), t = e.getBoundingClientRect(), window.scrollTo(
      window.scrollX + t.left,
      l ? window.scrollY + t.top : window.scrollY + t.bottom - window.innerHeight
    );
  }
  Tl.prototype.scrollIntoView = function(t) {
    if (typeof t == "object") throw Error(o(566));
    var l = [];
    p(
      this._fragmentFiber.child,
      !1,
      vo,
      l,
      void 0,
      void 0
    );
    var e = t !== !1;
    if (l.length === 0) {
      var u = At(
        this._fragmentFiber
      );
      if (u = e ? u[1] || u[0] || B(this._fragmentFiber) : u[0] || u[1], u === null) return;
      if (u.tag === 6) {
        t = j(u), B0(t, e);
        return;
      }
      if (u = j(u), u.nodeType !== 9) {
        if (u.nodeType === 11) {
          e = "host" in u ? u.host : null, e !== null && e.scrollIntoView(t);
          return;
        }
        u.scrollIntoView(t);
      }
    }
    for (u = e ? l.length - 1 : 0; u !== (e ? -1 : l.length); ) {
      var a = l[u];
      a.tag === 6 ? (a = j(a), B0(a, e)) : j(a).scrollIntoView(t), u += e ? -1 : 1;
    }
  };
  function nh(t, l) {
    return t = j(t), Y0(t, l), !1;
  }
  function Y0(t, l) {
    t.reactFragments == null && (t.reactFragments = /* @__PURE__ */ new Set()), t.reactFragments.add(l);
  }
  function q0(t, l) {
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
    }), Y0(t, l));
  }
  function ih(t, l) {
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
      typeof n.rootMargin == "string" ? eh(
        l,
        n,
        t
      ) : n.unobserve(t);
    }), t.reactFragments != null && t.reactFragments.delete(l));
  }
  function go(t) {
    var l = t.firstChild;
    for (l && l.nodeType === 10 && (l = l.nextSibling); l; ) {
      var e = l;
      switch (l = l.nextSibling, e.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          go(e), En(e);
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
  function ch(t, l, e, u) {
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
      if (t = Rl(t.nextSibling), t === null) break;
    }
    return null;
  }
  function fh(t, l, e) {
    if (l === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = Rl(t.nextSibling), t === null)) return null;
    return t;
  }
  function G0(t, l) {
    for (; t.nodeType !== 8; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !l || (t = Rl(t.nextSibling), t === null)) return null;
    return t;
  }
  function So(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function bo(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
  }
  function oh(t, l) {
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
  function Rl(t) {
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
  var To = null;
  function Q0(t) {
    t = t.nextSibling;
    for (var l = 0; t; ) {
      if (t.nodeType === 8) {
        var e = t.data;
        if (e === "/$" || e === "/&") {
          if (l === 0)
            return Rl(t.nextSibling);
          l--;
        } else
          e !== "$" && e !== "$!" && e !== "$?" && e !== "$~" && e !== "&" || l++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function X0(t) {
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
  function rh(t, l) {
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
  function sh(t) {
    _0(function() {
      _0(function(l) {
        return t(l);
      });
    });
  }
  function L0(t, l, e) {
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
  function Z0(t, l, e) {
    for (var u in e) {
      var a = e[u];
      e.hasOwnProperty(u) && a != null && ht(t, l, u, null, Qv, a);
    }
    e.dangerouslySetInnerHTML != null && (t.textContent = ""), t.onclick === Zl && (t.onclick = null), En(t);
  }
  function po(t) {
    for (var l = t.attributes; l.length; )
      t.removeAttributeNode(l[0]);
    En(t);
  }
  var Dl = /* @__PURE__ */ new Map(), V0 = /* @__PURE__ */ new Set();
  function en(t) {
    if (typeof t.getRootNode == "function") {
      var l = t.getRootNode();
      if (l.nodeType === 9 || l.nodeType === 11) return l;
    }
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  var Te = K.d;
  K.d = {
    f: dh,
    r: yh,
    D: mh,
    C: vh,
    L: hh,
    m: gh,
    X: bh,
    S: Sh,
    M: Th
  };
  function dh() {
    var t = Te.f(), l = Ni();
    return t || l;
  }
  function yh(t) {
    var l = _u(t);
    l !== null && l.tag === 5 && l.type === "form" ? Js(l) : Te.r(t);
  }
  var oa = typeof document > "u" ? null : document;
  function K0(t, l, e) {
    var u = oa;
    if (u && typeof l == "string" && l) {
      var a = Ol(l);
      a = 'link[rel="' + t + '"][href="' + a + '"]', typeof e == "string" && (a += '[crossorigin="' + e + '"]'), V0.has(a) || (V0.add(a), t = { rel: t, crossOrigin: e, href: l }, u.querySelector(a) === null && (l = u.createElement("link"), Kt(l, "link", t), jt(l), u.head.appendChild(l)));
    }
  }
  function mh(t) {
    Te.D(t), K0("dns-prefetch", t, null);
  }
  function vh(t, l) {
    Te.C(t, l), K0("preconnect", t, l);
  }
  function hh(t, l, e) {
    Te.L(t, l, e);
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
      if (!(Dl.has(n) || (t = $(
        {
          rel: "preload",
          href: l === "image" && e && e.imageSrcSet ? void 0 : t,
          as: l
        },
        e
      ), Dl.set(n, t), u.querySelector(a) !== null || l === "style" && u.querySelector(un(n)) || l === "script" && u.querySelector(an(n))))) {
        var i = u.createElement("link");
        Kt(i, "link", t), l === "style" && (i[pn] = !0, i.onload = i.onerror = function() {
          ar(i);
        }), jt(i), u.head.appendChild(i);
      }
    }
  }
  function gh(t, l) {
    Te.m(t, l);
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
      if (!Dl.has(n) && (t = $({ rel: "modulepreload", href: t }, l), Dl.set(n, t), e.querySelector(a) === null)) {
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
        u = e.createElement("link"), Kt(u, "link", t), jt(u), e.head.appendChild(u);
      }
    }
  }
  function Sh(t, l, e) {
    Te.S(t, l, e);
    var u = oa;
    if (u && t) {
      var a = Cu(u).hoistableStyles, n = ra(t);
      l = l || "default";
      var i = a.get(n);
      if (!i) {
        var c = { loading: 0, preload: null };
        if (i = u.querySelector(
          un(n)
        ))
          c.loading = 5;
        else {
          t = $(
            { rel: "stylesheet", href: t, "data-precedence": l },
            e
          ), (e = Dl.get(n)) && Eo(t, e);
          var r = i = u.createElement("link");
          jt(r), Kt(r, "link", t), r._p = new Promise(function(g, T) {
            r.onload = g, r.onerror = T;
          }), r.addEventListener("load", function() {
            c.loading |= 1;
          }), r.addEventListener("error", function() {
            c.loading |= 2;
          }), c.loading |= 4, Di(i, l, u);
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
  function bh(t, l) {
    Te.X(t, l);
    var e = oa;
    if (e && t) {
      var u = Cu(e).hoistableScripts, a = sa(t), n = u.get(a);
      n || (n = e.querySelector(an(a)), n || (t = $({ src: t, async: !0 }, l), (l = Dl.get(a)) && zo(t, l), n = e.createElement("script"), jt(n), Kt(n, "link", t), e.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, u.set(a, n));
    }
  }
  function Th(t, l) {
    Te.M(t, l);
    var e = oa;
    if (e && t) {
      var u = Cu(e).hoistableScripts, a = sa(t), n = u.get(a);
      n || (n = e.querySelector(an(a)), n || (t = $({ src: t, async: !0, type: "module" }, l), (l = Dl.get(a)) && zo(t, l), n = e.createElement("script"), jt(n), Kt(n, "link", t), e.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, u.set(a, n));
    }
  }
  function J0(t, l, e, u) {
    var a = (a = ze.current) ? en(a) : null;
    if (!a) throw Error(o(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof e.precedence == "string" && typeof e.href == "string" ? (e = ra(e.href), l = Cu(
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
          var n = Cu(
            a
          ).hoistableStyles, i = n.get(t);
          if (i || (a = a.ownerDocument || a, i = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, n.set(t, i), (n = a.querySelector(
            un(t)
          )) ? n._p || (i.instance = n, i.state.loading = 5) : (n = Dl.get(t), n || (n = {
            rel: "preload",
            as: "style",
            href: e.href,
            crossOrigin: e.crossOrigin,
            integrity: e.integrity,
            media: e.media,
            hrefLang: e.hrefLang,
            referrerPolicy: e.referrerPolicy
          }, Dl.set(t, n)), ph(
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
        return l = e.async, e = e.src, typeof e == "string" && l && typeof l != "function" && typeof l != "symbol" ? (e = sa(e), l = Cu(
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
  function w0(t) {
    return $({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function ph(t, l, e, u) {
    if (l = t.querySelector(
      'link[rel="preload"][as="style"][' + l + "]"
    )) {
      if (l[pn] !== !0) {
        u.loading = 1;
        return;
      }
    } else
      l = t.createElement("link"), l[pn] = !0, l.onload = l.onerror = ar.bind(null, l), Kt(l, "link", e), jt(l), t.head.appendChild(l);
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
  function W0(t, l, e) {
    if (l.count++, l.instance === null)
      switch (l.type) {
        case "style":
          var u = t.querySelector(
            'style[data-href~="' + Ol(e.href) + '"]'
          );
          if (u)
            return l.instance = u, jt(u), u;
          var a = $({}, e, {
            "data-href": e.href,
            "data-precedence": e.precedence,
            href: null,
            precedence: null
          });
          return u = (t.ownerDocument || t).createElement(
            "style"
          ), jt(u), Kt(u, "style", a), Di(u, e.precedence, t), l.instance = u;
        case "stylesheet":
          a = ra(e.href);
          var n = t.querySelector(
            un(a)
          );
          if (n)
            return l.state.loading |= 4, l.instance = n, jt(n), n;
          u = w0(e), (a = Dl.get(a)) && Eo(u, a), n = (t.ownerDocument || t).createElement("link"), jt(n);
          var i = n;
          return i._p = new Promise(function(c, r) {
            i.onload = c, i.onerror = r;
          }), Kt(n, "link", u), l.state.loading |= 4, Di(n, e.precedence, t), l.instance = n;
        case "script":
          return n = sa(e.src), (a = t.querySelector(
            an(n)
          )) ? (l.instance = a, jt(a), a) : (u = e, (a = Dl.get(n)) && (u = $({}, e), zo(u, a)), t = t.ownerDocument || t, a = t.createElement("script"), jt(a), Kt(a, "link", u), t.head.appendChild(a), l.instance = a);
        case "void":
          return null;
        default:
          throw Error(o(443, l.type));
      }
    else
      l.type === "stylesheet" && (l.state.loading & 4) === 0 && (u = l.instance, l.state.loading |= 4, Di(u, e.precedence, t));
    return l.instance;
  }
  function Di(t, l, e) {
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
  var Ui = null;
  function $0(t, l, e) {
    if (Ui === null) {
      var u = /* @__PURE__ */ new Map(), a = Ui = /* @__PURE__ */ new Map();
      a.set(e, u);
    } else
      a = Ui, u = a.get(e), u || (u = /* @__PURE__ */ new Map(), a.set(e, u));
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
  function Oo(t, l, e) {
    t = t.ownerDocument || t, t.head.insertBefore(
      e,
      l === "title" ? t.querySelector("head > title") : null
    );
  }
  function Eh(t, l, e) {
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
  function F0(t, l) {
    return t === "img" && l.src != null && l.src !== "" && l.onLoad == null && l.loading !== "lazy";
  }
  function I0(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function k0(t) {
    return (t.width || 100) * (t.height || 100) * (typeof devicePixelRatio == "number" ? devicePixelRatio : 1) * 0.25;
  }
  function P0(t, l) {
    typeof l.decode == "function" && (t.imgCount++, l.complete || (t.imgBytes += k0(l), t.suspenseyImages.push(l)), t = Nh.bind(t), l.decode().then(t, t));
  }
  function zh(t, l, e, u) {
    if (e.type === "stylesheet" && (typeof u.media != "string" || matchMedia(u.media).matches !== !1) && (e.state.loading & 4) === 0) {
      if (e.instance === null) {
        var a = ra(u.href), n = l.querySelector(
          un(a)
        );
        if (n) {
          l = n._p, l !== null && typeof l == "object" && typeof l.then == "function" && (t.count++, t = nn.bind(t), l.then(t, t)), e.state.loading |= 4, e.instance = n, jt(n);
          return;
        }
        n = l.ownerDocument || l, u = w0(u), (a = Dl.get(a)) && Eo(u, a), n = n.createElement("link"), jt(n);
        var i = n;
        i._p = new Promise(function(c, r) {
          i.onload = c, i.onerror = r;
        }), Kt(n, "link", u), e.instance = n;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(e, l), (l = e.state.preload) && (e.state.loading & 3) === 0 && (t.count++, e = nn.bind(t), l.addEventListener("load", e), l.addEventListener("error", e));
    }
  }
  var Hi = 0;
  function Oh(t, l) {
    return t.stylesheets && t.count === 0 && Bi(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(e) {
      var u = setTimeout(function() {
        if (t.stylesheets && Bi(t, t.stylesheets), t.unsuspend) {
          var n = t.unsuspend;
          t.unsuspend = null, n();
        }
      }, 6e4 + l);
      0 < t.imgBytes && Hi === 0 && (Hi = 62500 * Lv());
      var a = setTimeout(
        function() {
          if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && Bi(t, t.stylesheets), t.unsuspend)) {
            var n = t.unsuspend;
            t.unsuspend = null, n();
          }
        },
        (t.imgBytes > Hi ? 50 : 800) + l
      );
      return t.unsuspend = e, function() {
        t.unsuspend = null, clearTimeout(u), clearTimeout(a);
      };
    } : null;
  }
  function ty(t) {
    if (t.count === 0 && (t.imgCount === 0 || !t.waitingForImages)) {
      if (t.stylesheets) Bi(t, t.stylesheets);
      else if (t.unsuspend) {
        var l = t.unsuspend;
        t.unsuspend = null, l();
      }
    }
  }
  function nn() {
    this.count--, ty(this);
  }
  function Nh() {
    this.imgCount--, ty(this);
  }
  var ji = null;
  function Bi(t, l) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, ji = /* @__PURE__ */ new Map(), l.forEach(Ah, t), ji = null, nn.call(t));
  }
  function Ah(t, l) {
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
    $$typeof: Mt,
    Provider: null,
    Consumer: null,
    _currentValue: ne,
    _currentValue2: ne,
    _threadCount: 0
  };
  function _h(t, l, e, u, a, n, i, c, r) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = ec(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ec(0), this.hiddenUpdates = ec(null), this.identifierPrefix = u, this.onUncaughtError = a, this.onCaughtError = n, this.onRecoverableError = i, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = r, this.transitionTypes = null, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function ly(t, l, e, u, a, n, i, c, r, g, T, O) {
    return t = new _h(
      t,
      l,
      e,
      i,
      r,
      g,
      T,
      O,
      c
    ), l = 1, n === !0 && (l |= 24), n = al(3, null, null, l), t.current = n, n.stateNode = t, l = Yc(), l.refCount++, t.pooledCache = l, l.refCount++, n.memoizedState = {
      element: u,
      isDehydrated: e,
      cache: l
    }, Xc(n), t;
  }
  function ey(t) {
    return t ? (t = qu, t) : qu;
  }
  function uy(t, l, e, u, a, n) {
    a = ey(a), u.context === null ? u.context = a : u.pendingContext = a, u = He(l), u.payload = { element: e }, n = n === void 0 ? null : n, n !== null && (u.callback = n), e = je(t, u, l), e !== null && (fl(e, t, l), Ba(e, t, l));
  }
  function ay(t, l) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var e = t.retryLane;
      t.retryLane = e !== 0 && e < l ? e : l;
    }
  }
  function No(t, l) {
    ay(t, l), (t = t.alternate) && ay(t, l);
  }
  function ny(t) {
    if (t.tag === 13 || t.tag === 31) {
      var l = nu(t, 67108864);
      l !== null && fl(l, t, 67108864), No(t, 67108864);
    }
  }
  function iy(t) {
    if (t.tag === 13 || t.tag === 31) {
      var l = bl();
      l = uc(l);
      var e = nu(t, l);
      e !== null && fl(e, t, l), No(t, l);
    }
  }
  var ya = !0;
  function Ch(t, l, e, u) {
    var a = q.T;
    q.T = null;
    var n = K.p;
    try {
      K.p = 2, Ao(t, l, e, u);
    } finally {
      K.p = n, q.T = a;
    }
  }
  function Mh(t, l, e, u) {
    var a = q.T;
    q.T = null;
    var n = K.p;
    try {
      K.p = 8, Ao(t, l, e, u);
    } finally {
      K.p = n, q.T = a;
    }
  }
  function Ao(t, l, e, u) {
    if (ya) {
      var a = _o(u);
      if (a === null)
        io(
          t,
          l,
          u,
          Yi,
          e
        ), fy(t, u);
      else if (Rh(
        a,
        t,
        l,
        e,
        u
      ))
        u.stopPropagation();
      else if (fy(t, u), l & 4 && -1 < xh.indexOf(t)) {
        for (; a !== null; ) {
          var n = _u(a);
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
                    Pl(n), (ot & 6) === 0 && (Ei = rl() + 500, ka(0));
                  }
                }
                break;
              case 31:
              case 13:
                c = nu(n, 2), c !== null && fl(c, n, 2), Ni(), No(n, 2);
            }
          if (n = _o(u), n === null && io(
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
        io(
          t,
          l,
          u,
          null,
          e
        );
    }
  }
  function _o(t) {
    return t = rc(t), Co(t);
  }
  var Yi = null;
  function Co(t) {
    if (Yi = null, t = lu(t), t !== null) {
      var l = x(t);
      if (l === null) t = null;
      else {
        var e = l.tag;
        if (e === 13) {
          if (t = U(l), t !== null) return t;
          t = null;
        } else if (e === 31) {
          if (t = R(l), t !== null) return t;
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
  function cy(t) {
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
        switch (Ly()) {
          case Jo:
            return 2;
          case wo:
            return 8;
          case hn:
          case Zy:
            return 32;
          case Wo:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Mo = !1, we = null, We = null, $e = null, cn = /* @__PURE__ */ new Map(), fn = /* @__PURE__ */ new Map(), Fe = [], xh = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function fy(t, l) {
    switch (t) {
      case "focusin":
      case "focusout":
        we = null;
        break;
      case "dragenter":
      case "dragleave":
        We = null;
        break;
      case "mouseover":
      case "mouseout":
        $e = null;
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
    }, l !== null && (l = _u(l), l !== null && ny(l)), t) : (t.eventSystemFlags |= u, l = t.targetContainers, a !== null && l.indexOf(a) === -1 && l.push(a), t);
  }
  function Rh(t, l, e, u, a) {
    switch (l) {
      case "focusin":
        return we = on(
          we,
          t,
          l,
          e,
          u,
          a
        ), !0;
      case "dragenter":
        return We = on(
          We,
          t,
          l,
          e,
          u,
          a
        ), !0;
      case "mouseover":
        return $e = on(
          $e,
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
  function oy(t) {
    var l = lu(t.target);
    if (l !== null) {
      var e = x(l);
      if (e !== null) {
        if (l = e.tag, l === 13) {
          if (l = U(e), l !== null) {
            t.blockedOn = l, lr(t.priority, function() {
              iy(e);
            });
            return;
          }
        } else if (l === 31) {
          if (l = R(e), l !== null) {
            t.blockedOn = l, lr(t.priority, function() {
              iy(e);
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
        oc = u, e.target.dispatchEvent(u), oc = null;
      } else
        return l = _u(e), l !== null && ny(l), t.blockedOn = e, !1;
      l.shift();
    }
    return !0;
  }
  function ry(t, l, e) {
    qi(t) && e.delete(l);
  }
  function Dh() {
    Mo = !1, we !== null && qi(we) && (we = null), We !== null && qi(We) && (We = null), $e !== null && qi($e) && ($e = null), cn.forEach(ry), fn.forEach(ry);
  }
  function Gi(t, l) {
    t.blockedOn === l && (t.blockedOn = null, Mo || (Mo = !0, f.unstable_scheduleCallback(
      f.unstable_NormalPriority,
      Dh
    )));
  }
  var Qi = null;
  function sy(t) {
    Qi !== t && (Qi = t, f.unstable_scheduleCallback(
      f.unstable_NormalPriority,
      function() {
        Qi === t && (Qi = null);
        for (var l = 0; l < t.length; l += 3) {
          var e = t[l], u = t[l + 1], a = t[l + 2];
          if (typeof u != "function") {
            if (Co(u || e) === null)
              continue;
            break;
          }
          var n = _u(e);
          n !== null && (t.splice(l, 3), l -= 3, of(
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
  function ma(t) {
    function l(r) {
      return Gi(r, t);
    }
    we !== null && Gi(we, t), We !== null && Gi(We, t), $e !== null && Gi($e, t), cn.forEach(l), fn.forEach(l);
    for (var e = 0; e < Fe.length; e++) {
      var u = Fe[e];
      u.blockedOn === t && (u.blockedOn = null);
    }
    for (; 0 < Fe.length && (e = Fe[0], e.blockedOn === null); )
      oy(e), e.blockedOn === null && Fe.shift();
    if (e = (t.ownerDocument || t).$$reactFormReplay, e != null)
      for (u = 0; u < e.length; u += 3) {
        var a = e[u], n = e[u + 1], i = a[ul] || null;
        if (typeof n == "function")
          i || sy(e);
        else if (i) {
          var c = null;
          if (n && n.hasAttribute("formAction")) {
            if (a = n, i = n[ul] || null)
              c = i.formAction;
            else if (Co(a) !== null) continue;
          } else c = i.action;
          typeof c == "function" ? e[u + 1] = c : (e.splice(u, 3), u -= 3), sy(e);
        }
      }
  }
  function dy() {
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
  function xo(t) {
    this._internalRoot = t;
  }
  Xi.prototype.render = xo.prototype.render = function(t) {
    var l = this._internalRoot;
    if (l === null) throw Error(o(409));
    var e = l.current, u = bl();
    uy(e, u, t, l, null, null);
  }, Xi.prototype.unmount = xo.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var l = t.containerInfo;
      uy(t.current, 2, null, t, null, null), Ni(), l[Au] = null;
    }
  };
  function Xi(t) {
    this._internalRoot = t;
  }
  Xi.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var l = tr();
      t = { blockedOn: null, target: t, priority: l };
      for (var e = 0; e < Fe.length && l !== 0 && l < Fe[e].priority; e++) ;
      Fe.splice(e, 0, t), e === 0 && oy(t);
    }
  };
  var yy = s.version;
  if (yy !== "19.3.0")
    throw Error(
      o(
        527,
        yy,
        "19.3.0"
      )
    );
  K.findDOMNode = function(t) {
    var l = t._reactInternals;
    if (l === void 0)
      throw typeof t.render == "function" ? Error(o(188)) : (t = Object.keys(t).join(","), Error(o(268, t)));
    return t = I(l), t = t !== null ? C(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var Uh = {
    bundleType: 0,
    version: "19.3.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: q,
    reconcilerVersion: "19.3.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Li = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Li.isDisabled && Li.supportsFiber)
      try {
        ha = Li.inject(
          Uh
        ), sl = Li;
      } catch {
      }
  }
  return sn.createRoot = function(t, l) {
    if (!N(t)) throw Error(o(299));
    var e = !1, u = "", a = ed, n = ud, i = ad;
    return l != null && (l.unstable_strictMode === !0 && (e = !0), l.identifierPrefix !== void 0 && (u = l.identifierPrefix), l.onUncaughtError !== void 0 && (a = l.onUncaughtError), l.onCaughtError !== void 0 && (n = l.onCaughtError), l.onRecoverableError !== void 0 && (i = l.onRecoverableError)), l = ly(
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
      dy
    ), t[Au] = l.current, no(t), new xo(l);
  }, sn.hydrateRoot = function(t, l, e) {
    if (!N(t)) throw Error(o(299));
    var u = !1, a = "", n = ed, i = ud, c = ad, r = null;
    return e != null && (e.unstable_strictMode === !0 && (u = !0), e.identifierPrefix !== void 0 && (a = e.identifierPrefix), e.onUncaughtError !== void 0 && (n = e.onUncaughtError), e.onCaughtError !== void 0 && (i = e.onCaughtError), e.onRecoverableError !== void 0 && (c = e.onRecoverableError), e.formState !== void 0 && (r = e.formState)), l = ly(
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
      dy
    ), l.context = ey(null), e = l.current, u = bl(), u = uc(u), a = He(u), a.callback = null, je(e, a, u), e = u, l.current.lanes = e, Sa(l, e), Pl(l), t[Au] = l.current, no(t), new Xi(l);
  }, sn.version = "19.3.0", sn;
}
var zy;
function Kh() {
  if (zy) return Uo.exports;
  zy = 1;
  function f() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f);
      } catch (s) {
        console.error(s);
      }
  }
  return f(), Uo.exports = Vh(), Uo.exports;
}
var Jh = Kh();
function wh(f) {
  return f && typeof f == "object" ? f : typeof window > "u" ? null : window;
}
function Oy({
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
function Wh({
  node: f,
  snapshot: s,
  ownSeat: y,
  replayIndex: o,
  flipVertical: N,
  onMoveClick: x,
  elmRuntime: U
} = {}) {
  const Q = wh(U)?.Elm?.BoardIsland?.init;
  if (typeof Q != "function" || !f)
    return {
      app: null,
      sendSnapshotUpdate: () => {
      },
      cleanup: () => {
      }
    };
  const I = Oy({
    snapshot: s,
    ownSeat: y,
    replayIndex: o,
    flipVertical: N
  }), C = Q({ node: f, flags: I }), p = C?.ports?.boardMoveClicked, B = C?.ports?.boardSnapshot, dt = (j) => {
    typeof x == "function" && x(j);
  };
  return typeof p?.subscribe == "function" && p.subscribe(dt), { app: C, sendSnapshotUpdate: (j) => {
    typeof B?.send == "function" && B.send(Oy(j));
  }, cleanup: () => {
    typeof p?.unsubscribe == "function" && p.unsubscribe(dt), typeof C?.unmount == "function" && C.unmount();
  } };
}
function $h({
  snapshot: f,
  ownSeat: s,
  replayIndex: y,
  flipVertical: o,
  onMoveClick: N
}) {
  const x = ol.useRef(null), U = ol.useRef(null), R = ol.useRef(N);
  R.current = N;
  const Q = ol.useMemo(
    () => ({ snapshot: f, ownSeat: s, replayIndex: y, flipVertical: o }),
    [f, s, y, o]
  );
  return ol.useEffect(() => (U.current = Wh({
    node: x.current,
    ...Q,
    onMoveClick: (I) => R.current?.(I)
  }), () => {
    U.current?.cleanup?.(), U.current = null;
  }), []), ol.useEffect(() => {
    U.current?.sendSnapshotUpdate?.(Q);
  }, [Q]), /* @__PURE__ */ E.jsx("div", { ref: x, "data-testid": "elm-board-island-host" });
}
const Fh = {
  marginTop: "20px",
  padding: "18px",
  borderRadius: "20px",
  background: "#f7fbf7",
  border: "1px solid rgba(16, 42, 26, 0.08)"
}, Ih = {
  display: "flex",
  justifyContent: "space-between",
  gap: "12px",
  alignItems: "flex-start",
  flexWrap: "wrap"
}, kh = {
  margin: 0,
  fontSize: "1.25rem"
}, Ny = {
  margin: "4px 0 0",
  fontSize: "0.9rem",
  color: "#567062"
}, Ph = {
  display: "inline-flex",
  alignItems: "center",
  gap: "8px",
  borderRadius: "999px",
  padding: "8px 12px",
  background: "rgba(16, 42, 26, 0.08)",
  fontWeight: 700
}, t1 = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))",
  gap: "12px",
  marginTop: "16px"
}, l1 = {
  padding: "14px",
  borderRadius: "16px",
  background: "#ffffff",
  border: "1px solid rgba(16, 42, 26, 0.08)"
}, te = {
  margin: 0,
  fontSize: "0.78rem",
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  color: "#567062"
}, le = {
  margin: "8px 0 0",
  fontSize: "1rem",
  fontWeight: 700,
  wordBreak: "break-word"
}, e1 = {
  marginTop: "16px",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: "10px 16px"
}, pe = {
  paddingTop: "10px",
  borderTop: "1px solid rgba(16, 42, 26, 0.08)"
}, u1 = {
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
}), a1 = {
  margin: "8px 0 0",
  paddingLeft: "18px",
  color: "#33513f"
};
function Dy(f) {
  return f === "p1" ? "Blue" : f === "p2" ? "Red" : "Unknown";
}
function n1(f) {
  const s = String(f || "").trim();
  return s === "vacant" ? "Open" : s === "disconnected" ? "Disconnected" : s === "active" ? "Occupied" : s || "Unknown";
}
function i1(f, s) {
  return f === "p1" ? "Blue" : f === "p2" ? "Red" : s ? "Waiting List" : "Watching";
}
function c1(f) {
  return `${Number(f?.p1 || 0)} - ${Number(f?.p2 || 0)}`;
}
function f1(f) {
  if (Array.isArray(f?.moves)) return f.moves.length;
  const s = Number(f?.moveCount);
  return Number.isFinite(s) ? s : 0;
}
function o1(f) {
  const s = Math.max(0, Math.ceil(Number(f || 0) / 1e3));
  if (s < 60) return `${s}s`;
  const y = Math.ceil(s / 60);
  if (y < 60) return `${y}m`;
  const o = Math.ceil(y / 60);
  return o < 24 ? `${o}h` : `${Math.ceil(o / 24)}d`;
}
function Qo(f, s, y) {
  const o = Number(f);
  if (!Number.isFinite(o) || o <= 0) return null;
  const N = o - Number(s || 0), x = o1(Math.abs(N));
  return y === "future" ? N >= 0 ? `in ${x}` : `${x} ago` : N <= 0 ? `${x} ago` : `in ${x}`;
}
function r1(f, s) {
  const y = Number(f?.moveTimeLimitMs);
  if (!Number.isFinite(y) || y <= 0) return "Untimed";
  const o = `${Math.round(y / 1e3)}s per move`, N = Number(f?.turnStartedAt);
  if (!Number.isFinite(N) || N <= 0) return o;
  const x = N + y, U = Qo(x, s, "future");
  return U ? `${o} • deadline ${U}` : o;
}
function s1(f) {
  const s = Number(f?.watcherCount);
  return Number.isFinite(s) && s >= 0 ? s : null;
}
function Ay(f, s) {
  const y = f?.[s] || {}, o = n1(y.status);
  return {
    id: s,
    label: `${Dy(s)} seat`,
    name: o === "Open" ? null : String(y.name || "").trim() || null,
    status: o
  };
}
function d1({
  snapshot: f,
  ownSeat: s = null,
  connectionStatus: y = "idle",
  isWaitingListMember: o = !1,
  claimableSeatActions: N = [],
  leaveSeatAction: x = null,
  waitingListAction: U = null,
  pauseResumeActions: R = [],
  newRoundAction: Q = null,
  nowMs: I = Date.now()
} = {}) {
  if (!f || typeof f != "object") return null;
  const C = f.game && typeof f.game == "object" ? f.game : {}, p = C.players && typeof C.players == "object" ? C.players : {}, B = Array.isArray(C.waitingList) ? C.waitingList : [], dt = String(f.boardCode || C.roomId || "").trim(), At = String(C.turn || "").trim();
  return {
    boardCode: dt,
    connectionStatus: String(y || "idle"),
    viewerRole: i1(String(s || "").trim(), o),
    seats: [Ay(p, "p1"), Ay(p, "p2")],
    sessionState: String(C.status || "waiting"),
    currentTurn: At ? Dy(At) : "Waiting",
    score: c1(C.score),
    moveCount: f1(C),
    timerSummary: r1(C, I),
    waitingListCount: B.length,
    waitingListNames: B.map((_t) => String(_t?.displayName || "").trim()).filter(Boolean),
    watcherCount: s1(C),
    lastActivity: Qo(C.lastActivityAt, I, "past"),
    expiry: Qo(C.expiresAt, I, "future"),
    actions: {
      claimableSeatActions: Array.isArray(N) ? N : [],
      leaveSeatAction: x,
      waitingListAction: U,
      pauseResumeActions: Array.isArray(R) ? R : [],
      newRoundAction: Q
    }
  };
}
function _y({ label: f, value: s, children: y }) {
  return /* @__PURE__ */ E.jsxs("article", { style: l1, children: [
    /* @__PURE__ */ E.jsx("p", { style: te, children: f }),
    /* @__PURE__ */ E.jsx("p", { style: le, children: s }),
    y
  ] });
}
function y1({
  snapshot: f,
  ownSeat: s,
  connectionStatus: y,
  isWaitingListMember: o,
  claimableSeatActions: N,
  leaveSeatAction: x,
  waitingListAction: U,
  pauseResumeActions: R,
  newRoundAction: Q,
  onClaimSeat: I,
  onLeaveSeat: C,
  onWaitingListAction: p,
  onPauseAction: B,
  onResumeAction: dt,
  onNewRoundAction: At,
  nowMs: _t
}) {
  const j = d1({
    snapshot: f,
    ownSeat: s,
    connectionStatus: y,
    isWaitingListMember: o,
    claimableSeatActions: N,
    leaveSeatAction: x,
    waitingListAction: U,
    pauseResumeActions: R,
    newRoundAction: Q,
    nowMs: _t
  });
  return j ? /* @__PURE__ */ E.jsxs("section", { style: Fh, "aria-label": "Match details", children: [
    /* @__PURE__ */ E.jsxs("div", { style: Ih, children: [
      /* @__PURE__ */ E.jsxs("div", { children: [
        /* @__PURE__ */ E.jsx("h2", { style: kh, children: "Match details" }),
        /* @__PURE__ */ E.jsxs("p", { style: Ny, children: [
          "Board ",
          j.boardCode || "not selected"
        ] })
      ] }),
      /* @__PURE__ */ E.jsx("div", { style: Ph, children: j.viewerRole })
    ] }),
    /* @__PURE__ */ E.jsxs("div", { style: t1, children: [
      /* @__PURE__ */ E.jsx(_y, { label: "Connection Status", value: j.connectionStatus }),
      j.seats.map((ct) => /* @__PURE__ */ E.jsx(
        _y,
        {
          label: ct.label,
          value: ct.name || ct.status,
          children: /* @__PURE__ */ E.jsxs("p", { style: Ny, children: [
            "Status: ",
            ct.status
          ] })
        },
        ct.id
      ))
    ] }),
    /* @__PURE__ */ E.jsxs("div", { style: e1, children: [
      /* @__PURE__ */ E.jsxs("div", { style: pe, children: [
        /* @__PURE__ */ E.jsx("p", { style: te, children: "Session State" }),
        /* @__PURE__ */ E.jsx("p", { style: le, children: j.sessionState })
      ] }),
      /* @__PURE__ */ E.jsxs("div", { style: pe, children: [
        /* @__PURE__ */ E.jsx("p", { style: te, children: "Current Turn" }),
        /* @__PURE__ */ E.jsx("p", { style: le, children: j.currentTurn })
      ] }),
      /* @__PURE__ */ E.jsxs("div", { style: pe, children: [
        /* @__PURE__ */ E.jsx("p", { style: te, children: "Score" }),
        /* @__PURE__ */ E.jsx("p", { style: le, children: j.score })
      ] }),
      /* @__PURE__ */ E.jsxs("div", { style: pe, children: [
        /* @__PURE__ */ E.jsx("p", { style: te, children: "Move Count" }),
        /* @__PURE__ */ E.jsx("p", { style: le, children: j.moveCount })
      ] }),
      /* @__PURE__ */ E.jsxs("div", { style: pe, children: [
        /* @__PURE__ */ E.jsx("p", { style: te, children: "Move Timer" }),
        /* @__PURE__ */ E.jsx("p", { style: le, children: j.timerSummary })
      ] }),
      /* @__PURE__ */ E.jsxs("div", { style: pe, children: [
        /* @__PURE__ */ E.jsx("p", { style: te, children: "Waiting List" }),
        /* @__PURE__ */ E.jsx("p", { style: le, children: j.waitingListCount }),
        j.waitingListNames.length > 0 ? /* @__PURE__ */ E.jsx("ul", { style: a1, children: j.waitingListNames.map((ct) => /* @__PURE__ */ E.jsx("li", { children: ct }, ct)) }) : null
      ] }),
      j.watcherCount !== null ? /* @__PURE__ */ E.jsxs("div", { style: pe, children: [
        /* @__PURE__ */ E.jsx("p", { style: te, children: "Watchers" }),
        /* @__PURE__ */ E.jsx("p", { style: le, children: j.watcherCount })
      ] }) : null,
      j.lastActivity ? /* @__PURE__ */ E.jsxs("div", { style: pe, children: [
        /* @__PURE__ */ E.jsx("p", { style: te, children: "Last Activity" }),
        /* @__PURE__ */ E.jsx("p", { style: le, children: j.lastActivity })
      ] }) : null,
      j.expiry ? /* @__PURE__ */ E.jsxs("div", { style: pe, children: [
        /* @__PURE__ */ E.jsx("p", { style: te, children: "Expires" }),
        /* @__PURE__ */ E.jsx("p", { style: le, children: j.expiry })
      ] }) : null
    ] }),
    /* @__PURE__ */ E.jsxs("div", { style: u1, children: [
      j.actions.claimableSeatActions.map((ct) => /* @__PURE__ */ E.jsx(
        "button",
        {
          type: "button",
          style: dn(!1),
          onClick: () => I?.(ct.seatId),
          children: ct.label
        },
        ct.seatId
      )),
      j.actions.leaveSeatAction ? /* @__PURE__ */ E.jsx(
        "button",
        {
          type: "button",
          style: dn(!!j.actions.leaveSeatAction.danger),
          onClick: () => C?.(),
          children: j.actions.leaveSeatAction.label
        }
      ) : null,
      j.actions.waitingListAction ? /* @__PURE__ */ E.jsx(
        "button",
        {
          type: "button",
          style: dn(!1),
          onClick: () => p?.(j.actions.waitingListAction.type),
          children: j.actions.waitingListAction.label
        }
      ) : null,
      j.actions.pauseResumeActions.map((ct) => /* @__PURE__ */ E.jsx(
        "button",
        {
          type: "button",
          style: dn(!1),
          onClick: () => {
            if (ct.type === "pause") {
              B?.("pause");
              return;
            }
            dt?.("resume");
          },
          children: ct.label
        },
        ct.type
      )),
      j.actions.newRoundAction ? /* @__PURE__ */ E.jsx(
        "button",
        {
          type: "button",
          style: dn(!1),
          onClick: () => At?.(),
          children: j.actions.newRoundAction.label
        }
      ) : null
    ] })
  ] }) : null;
}
const m1 = {
  marginTop: "20px",
  padding: "18px",
  borderRadius: "20px",
  background: "#f7fbf7",
  border: "1px solid rgba(16, 42, 26, 0.08)"
}, v1 = {
  margin: 0,
  fontSize: "1.1rem"
}, h1 = {
  margin: "8px 0 0",
  color: "#567062",
  lineHeight: 1.5
}, g1 = {
  marginTop: "14px",
  padding: "12px 14px",
  borderRadius: "14px",
  background: "#ffffff",
  border: "1px solid rgba(16, 42, 26, 0.08)",
  overflowWrap: "anywhere"
}, S1 = {
  color: "#0a5f20",
  fontWeight: 700,
  textDecoration: "none"
}, b1 = {
  display: "flex",
  gap: "10px",
  marginTop: "14px",
  flexWrap: "wrap",
  alignItems: "flex-start"
}, T1 = {
  border: "1px solid rgba(16, 42, 26, 0.12)",
  borderRadius: "999px",
  padding: "8px 14px",
  background: "#f7fbf7",
  color: "#102a1a",
  fontWeight: 700,
  cursor: "pointer"
}, p1 = {
  display: "inline-flex",
  flexDirection: "column",
  gap: "8px",
  alignItems: "center",
  textDecoration: "none",
  color: "#102a1a",
  fontWeight: 700
}, E1 = {
  width: "112px",
  height: "112px",
  borderRadius: "14px",
  background: "#ffffff",
  border: "1px solid rgba(16, 42, 26, 0.08)",
  padding: "6px",
  objectFit: "contain"
};
function Ji() {
  return globalThis.window?.location ?? globalThis.location ?? null;
}
function Uy() {
  return globalThis.window?.navigator ?? globalThis.navigator ?? null;
}
function Hy() {
  return globalThis.window?.document ?? globalThis.document ?? null;
}
function jy(f) {
  return String(f || "").trim();
}
function z1(f) {
  return f ? typeof f.href == "string" && f.href ? f.href : `${f.origin || ""}${f.pathname || "/react"}${f.search || ""}${f.hash || ""}` : "";
}
function Lo(f, { locationLike: s = Ji() } = {}) {
  const y = jy(f), o = z1(s);
  if (!y || !o) return "";
  const N = new URL(o);
  return N.pathname = "/react", N.search = "", N.hash = "", N.searchParams.set("board", y), N.toString();
}
function O1(f, { locationLike: s = Ji() } = {}) {
  const y = Lo(f, { locationLike: s });
  return y ? `/api/qr?url=${encodeURIComponent(y)}` : "";
}
function N1(f, s) {
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
async function A1({
  boardCode: f,
  locationLike: s = Ji(),
  navigatorLike: y = Uy(),
  documentLike: o = Hy()
} = {}) {
  const N = Lo(f, { locationLike: s });
  if (!N)
    return { ok: !1, error: "Share link unavailable." };
  if (typeof y?.clipboard?.writeText == "function")
    try {
      return await y.clipboard.writeText(N), { ok: !0, text: N };
    } catch {
    }
  return N1(N, o) ? { ok: !0, text: N } : { ok: !1, error: "Could not copy link. Copy it manually." };
}
function _1({
  boardCode: f,
  locationLike: s = Ji(),
  navigatorLike: y = Uy(),
  documentLike: o = Hy(),
  onToast: N
}) {
  const x = jy(f);
  if (!x) return null;
  const U = Lo(x, { locationLike: s }), R = O1(x, { locationLike: s });
  return /* @__PURE__ */ E.jsxs("section", { style: m1, "aria-label": "Share board link", children: [
    /* @__PURE__ */ E.jsx("h2", { style: v1, children: "Share" }),
    /* @__PURE__ */ E.jsx("p", { style: h1, children: "Copy the React board link or scan the QR code to open this board in the product shell." }),
    /* @__PURE__ */ E.jsx("div", { style: g1, children: /* @__PURE__ */ E.jsx("a", { href: U, style: S1, children: U }) }),
    /* @__PURE__ */ E.jsxs("div", { style: b1, children: [
      /* @__PURE__ */ E.jsx(
        "button",
        {
          type: "button",
          style: T1,
          onClick: async () => {
            const Q = await A1({
              boardCode: x,
              locationLike: s,
              navigatorLike: y,
              documentLike: o
            });
            N?.(
              Q.ok ? "Link copied to clipboard." : Q.error || "Could not copy link. Copy it manually."
            );
          },
          children: "Copy Link"
        }
      ),
      /* @__PURE__ */ E.jsxs("a", { href: U, style: p1, children: [
        /* @__PURE__ */ E.jsx(
          "img",
          {
            src: R,
            alt: `QR code for board ${x}`,
            style: E1
          }
        ),
        "Open board link"
      ] })
    ] })
  ] });
}
const C1 = {
  position: "relative",
  display: "inline-flex",
  justifyContent: "flex-end"
}, M1 = {
  border: "1px solid rgba(16, 42, 26, 0.12)",
  borderRadius: "999px",
  padding: "9px 14px",
  background: "#f7fbf7",
  color: "#102a1a",
  fontWeight: 700,
  cursor: "pointer"
}, x1 = {
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
}, Cy = {
  border: "1px solid rgba(16, 42, 26, 0.1)",
  borderRadius: "10px",
  padding: "8px 10px",
  textAlign: "left",
  background: "#f7fbf7",
  color: "#102a1a",
  fontWeight: 700,
  cursor: "pointer"
};
function R1({
  menuOpen: f,
  onToggle: s,
  onSelectRules: y,
  onSelectHistory: o
}) {
  return /* @__PURE__ */ E.jsxs("div", { style: C1, children: [
    /* @__PURE__ */ E.jsx(
      "button",
      {
        type: "button",
        style: M1,
        "aria-expanded": !!f,
        "aria-haspopup": "menu",
        "aria-label": f ? "Close menu" : "Open menu",
        onClick: () => s?.(!f),
        children: "Menu"
      }
    ),
    f ? /* @__PURE__ */ E.jsxs("div", { style: x1, role: "menu", "aria-label": "App menu", children: [
      /* @__PURE__ */ E.jsx(
        "button",
        {
          type: "button",
          role: "menuitem",
          style: Cy,
          onClick: () => y?.(),
          children: "Rules"
        }
      ),
      /* @__PURE__ */ E.jsx(
        "button",
        {
          type: "button",
          role: "menuitem",
          style: Cy,
          onClick: () => o?.(),
          children: "History"
        }
      )
    ] }) : null
  ] });
}
function D1({ open: f, onClose: s }) {
  return f ? /* @__PURE__ */ E.jsxs(
    "section",
    {
      className: "react-shell-modal",
      "aria-label": "Traceball rules",
      role: "dialog",
      "aria-modal": "true",
      children: [
        /* @__PURE__ */ E.jsxs("header", { className: "react-shell-modal-header", children: [
          /* @__PURE__ */ E.jsx("h2", { children: "Rules" }),
          /* @__PURE__ */ E.jsx(
            "button",
            {
              type: "button",
              className: "react-shell-modal-close",
              onClick: s,
              children: "Close"
            }
          )
        ] }),
        /* @__PURE__ */ E.jsxs("ul", { className: "react-shell-modal-list", children: [
          /* @__PURE__ */ E.jsx("li", { children: "Ball movement is one-step movement between neighboring dots." }),
          /* @__PURE__ */ E.jsx("li", { children: "You cannot reuse a segment that has already been drawn." }),
          /* @__PURE__ */ E.jsx("li", { children: "Landing on a visited dot, boundary rebound point, or gate-mouth center dot causes a bounce and grants an extra move." }),
          /* @__PURE__ */ E.jsx("li", { children: "You score by entering the opponent gate." }),
          /* @__PURE__ */ E.jsx("li", { children: "Own goal counts for the opponent." }),
          /* @__PURE__ */ E.jsx("li", { children: "No legal moves on your turn means you lose the round." }),
          /* @__PURE__ */ E.jsx("li", { children: "In online matches, server-authoritative timers and turn control decide pause, timeout, and legality." })
        ] })
      ]
    }
  ) : null;
}
function U1(f) {
  const s = Number(f);
  return Number.isFinite(s) && s >= 0 ? s : 0;
}
function H1({ open: f, localHistoryCount: s = 0, onClose: y }) {
  if (!f) return null;
  const o = U1(s);
  return /* @__PURE__ */ E.jsxs(
    "section",
    {
      className: "react-shell-modal",
      "aria-label": "Match history",
      role: "dialog",
      "aria-modal": "true",
      children: [
        /* @__PURE__ */ E.jsxs("header", { className: "react-shell-modal-header", children: [
          /* @__PURE__ */ E.jsx("h2", { children: "History" }),
          /* @__PURE__ */ E.jsx(
            "button",
            {
              type: "button",
              className: "react-shell-modal-close",
              onClick: y,
              children: "Close"
            }
          )
        ] }),
        /* @__PURE__ */ E.jsx("p", { children: "History replay will move here next." }),
        /* @__PURE__ */ E.jsxs("p", { children: [
          "Local snapshots available: ",
          o
        ] }),
        /* @__PURE__ */ E.jsx("p", { className: "react-shell-modal-note", children: "This slice is UI scaffolding only and does not claim full replay controls yet." })
      ]
    }
  );
}
function j1(f) {
  if (typeof f != "function")
    throw new Error("Fetch API unavailable.");
  return f;
}
async function B1(f) {
  return f.json();
}
async function Y1({ clientId: f, moveTimeLimitSeconds: s }, { fetchImpl: y = globalThis.fetch } = {}) {
  const o = j1(y), N = Number(s), x = {
    clientId: String(f || "").trim(),
    moveTimeLimitSeconds: Number.isFinite(N) ? N : 15
  }, U = await o("/api/rooms", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(x)
  });
  if (!U.ok)
    throw new Error(`Board creation failed: ${U.status}`);
  return B1(U);
}
function q1(f = globalThis.window?.location || globalThis.location) {
  const s = f?.protocol === "https:" ? "wss:" : "ws:", y = f?.host || "localhost";
  return `${s}//${y}/ws`;
}
function G1({
  roomId: f,
  clientId: s,
  onMessage: y,
  onStatus: o,
  WebSocketImpl: N = globalThis.window?.WebSocket || globalThis.WebSocket,
  socketUrl: x = q1()
} = {}) {
  if (typeof N != "function")
    throw new Error("WebSocket unavailable.");
  const U = new N(x);
  return U.onopen = () => {
    o?.("connected"), U.send(
      JSON.stringify({
        type: "watch",
        roomId: String(f || "").trim(),
        clientId: String(s || "").trim()
      })
    );
  }, U.onmessage = (R) => {
    try {
      y?.(JSON.parse(R.data));
    } catch {
      y?.({ type: "error", error: "malformed websocket message" });
    }
  }, U.onerror = () => {
    o?.("error");
  }, U.onclose = () => {
    o?.("disconnected");
  }, {
    socket: U,
    send(R) {
      U.send(JSON.stringify(R));
    },
    close() {
      U.close?.();
    }
  };
}
const My = "traceballElmClientId", Ki = "traceballPlayerName", Q1 = "traceballOnlineMoveTimer";
function wi() {
  return globalThis.window?.localStorage || globalThis.localStorage;
}
function X1(f = Math.random) {
  return f().toString(36).slice(2, 12);
}
function L1({
  storage: f = wi(),
  random: s = Math.random
} = {}) {
  const y = f?.getItem?.(My);
  if (y) return y;
  const o = `traceball-elm-${X1(s)}`;
  return f?.setItem?.(My, o), o;
}
function By(f = Math.random) {
  const s = (y) => y[Math.floor(f() * y.length)];
  return `${s(["Neon", "Turbo", "Cosmic", "Lucky", "Pixel", "Rocket", "Thunder"])} ${s(["Striker", "Falcon", "Comet", "Phantom", "Kicker", "Ace", "Wizard"])}`;
}
function Yy(f, s = "") {
  return String(f || "").replace(/\s+/g, " ").trim().slice(0, 24) || s;
}
function Z1({
  storage: f = wi(),
  randomName: s = By
} = {}) {
  const y = String(f?.getItem?.(Ki) || ""), o = Yy(y, "");
  if (o && o !== "Elm Player")
    return f?.setItem?.(Ki, o), o;
  const N = s();
  return f?.setItem?.(Ki, N), N;
}
function V1(f, { storage: s = wi(), randomName: y = By } = {}) {
  const o = Yy(f, y());
  return s?.setItem?.(Ki, o), o;
}
function K1(f, s = 15) {
  const y = Number(f);
  return Number.isFinite(y) && y >= 0 ? y : s;
}
function J1({
  storage: f = wi(),
  fallback: s = 15
} = {}) {
  return K1(
    f?.getItem?.(Q1),
    s
  );
}
function w1({
  clientId: f = "",
  playerName: s = "",
  connectionStatus: y = "idle",
  currentBoardCode: o = "",
  isWaitingListMember: N = !1,
  boardState: x = null,
  boardList: U = [],
  mainTab: R = "home",
  mode: Q = "online",
  toast: I = null,
  onlineMoveTimer: C = 15,
  localMoveTimer: p = 15,
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
    boardList: U,
    mainTab: R,
    mode: Q,
    toast: I,
    onlineSetup: {
      moveTimeLimitSeconds: C
    },
    localSetup: {
      moveTimeLimitSeconds: p
    },
    historyPanelOpen: B,
    rulesPanelOpen: dt
  };
}
function W1(f, s, y) {
  if (!y || typeof y != "object") return !1;
  const o = String(f || "").trim(), N = String(y.boardCode || "").trim();
  if (o && N && o !== N) return !1;
  if (!s || typeof s != "object") return !0;
  const x = String(s.boardCode || "").trim();
  if (!x || x !== N) return !0;
  const U = Number(s.version), R = Number(y.version);
  return Number.isFinite(U) ? Number.isFinite(R) ? R > U : !1 : !0;
}
function $1(f, s) {
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
      return W1(
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
const F1 = {
  minHeight: "100vh",
  display: "grid",
  placeItems: "center",
  padding: "32px 20px",
  background: "radial-gradient(circle at top, rgba(10, 143, 40, 0.18), transparent 38%), linear-gradient(180deg, #f6fbf4 0%, #e4f0e2 100%)",
  color: "#102a1a"
}, I1 = {
  width: "min(720px, 100%)",
  borderRadius: "24px",
  padding: "28px",
  background: "rgba(255, 255, 255, 0.92)",
  boxShadow: "0 24px 70px rgba(16, 42, 26, 0.16)",
  border: "1px solid rgba(16, 42, 26, 0.08)"
}, k1 = {
  margin: 0,
  fontSize: "0.85rem",
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: "#0a8f28",
  fontWeight: 700
}, P1 = {
  margin: "10px 0 12px",
  fontSize: "clamp(2rem, 4vw, 3.25rem)",
  lineHeight: 1.05
}, tg = {
  margin: 0,
  fontSize: "1.05rem",
  lineHeight: 1.6,
  color: "#33513f"
}, lg = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
  gap: "14px",
  marginTop: "24px"
}, Zi = {
  padding: "16px",
  borderRadius: "18px",
  background: "#f7fbf7",
  border: "1px solid rgba(16, 42, 26, 0.08)"
}, zu = {
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
}, eg = {
  width: "100%",
  marginTop: "10px",
  padding: "12px 14px",
  borderRadius: "12px",
  border: "1px solid rgba(16, 42, 26, 0.14)",
  fontSize: "1rem",
  boxSizing: "border-box"
}, xy = {
  display: "flex",
  gap: "10px",
  marginTop: "18px",
  flexWrap: "wrap"
}, Yo = (f) => ({
  border: "1px solid rgba(16, 42, 26, 0.12)",
  borderRadius: "999px",
  padding: "8px 14px",
  background: f ? "#102a1a" : "#f7fbf7",
  color: f ? "#f6fbf4" : "#102a1a",
  fontWeight: 700,
  cursor: "pointer"
}), qo = {
  marginTop: "18px",
  padding: "16px",
  borderRadius: "16px",
  background: "#eef7f0",
  border: "1px dashed rgba(16, 42, 26, 0.18)",
  color: "#153124",
  fontWeight: 600
}, ug = {
  marginTop: "24px",
  padding: "16px 18px",
  borderRadius: "18px",
  background: "#102a1a",
  color: "#f6fbf4",
  lineHeight: 1.55
}, ag = {
  display: "inline-block",
  width: "10px",
  height: "10px",
  borderRadius: "999px",
  marginRight: "8px",
  background: "#9aa79e"
};
function Ee(f) {
  return String(f || "").trim();
}
function ng(f) {
  const s = Number(f);
  return Number.isFinite(s) ? s : 0;
}
function qy(f) {
  const s = f?.game?.players;
  return s && typeof s == "object" ? s : null;
}
function ig(f) {
  const s = String(f || "").trim();
  return s === "active" || s === "disconnected";
}
function cg(f) {
  return f === "p1" ? "Claim Blue" : "Claim Red";
}
function fg(f) {
  return f?.game?.status === "playing" || f?.game?.status === "paused";
}
function og() {
  return globalThis.window?.history ?? globalThis.history ?? null;
}
function Zo() {
  return globalThis.window?.location ?? globalThis.location ?? null;
}
function rg(f) {
  return f ? typeof f.href == "string" && f.href ? f.href : `${f.origin || "http://localhost"}${f.pathname || "/react"}${f.search || ""}${f.hash || ""}` : "";
}
function sg({
  locationLike: f = Zo()
} = {}) {
  const s = rg(f);
  if (!s) return "";
  const y = new URL(s);
  return Ee(
    y.searchParams.get("board") || y.searchParams.get("room") || y.searchParams.get("code") || ""
  );
}
function dg(f) {
  if (!f || typeof f != "object" || String(f.type || "") !== "state") return null;
  const s = Ee(f.boardCode || f.roomId), y = f.board && typeof f.board == "object", o = f.game && typeof f.game == "object";
  return !s || !y && !o ? null : {
    boardCode: s,
    version: ng(f.version),
    ...y ? { board: f.board } : {},
    ...o ? { game: f.game } : {}
  };
}
function yg(f, { historyLike: s = og(), locationLike: y = Zo() } = {}) {
  if (!y || typeof s?.replaceState != "function")
    return null;
  const o = typeof y.href == "string" && y.href ? y.href : `${y.origin || "http://localhost"}${y.pathname || "/react"}${y.search || ""}${y.hash || ""}`, N = new URL(o);
  N.pathname = "/react", f ? N.searchParams.set("board", String(f).trim()) : N.searchParams.delete("board");
  const x = `${N.pathname}${N.search}${N.hash}`;
  return s.replaceState(s.state ?? null, "", x), x;
}
function mg({
  currentBoardCode: f,
  clientId: s,
  dispatch: y,
  onOwnSeat: o,
  onMessage: N,
  connect: x = G1
}) {
  const U = Ee(f);
  return !U || typeof x != "function" ? null : x({
    roomId: U,
    clientId: String(s || ""),
    onStatus(R) {
      y?.({ type: "setConnectionStatus", status: R });
    },
    onMessage(R) {
      if (N?.(R), R?.type === "joined") {
        const I = String(R.playerId || "").trim();
        (I === "p1" || I === "p2") && (o?.(I), y?.({ type: "setWaitingListMembership", isMember: !1 }));
        return;
      }
      if (R?.type === "left") {
        o?.(null), y?.({ type: "setWaitingListMembership", isMember: !1 }), y?.({ type: "setToast", toast: "You left the board." });
        return;
      }
      if (R?.type === "waitingListJoined") {
        y?.({ type: "setWaitingListMembership", isMember: !0 });
        return;
      }
      if (R?.type === "waitingListLeft") {
        y?.({ type: "setWaitingListMembership", isMember: !1 });
        return;
      }
      if (R?.type === "BoardNotFound" && typeof R.message == "string") {
        y?.({ type: "setToast", toast: R.message });
        return;
      }
      if (R?.type === "error" && typeof R.error == "string") {
        y?.({ type: "setToast", toast: R.error });
        return;
      }
      const Q = dg(R);
      Q && y?.({ type: "receiveBoardState", boardState: Q });
    }
  });
}
function Go({
  roomId: f,
  clientId: s,
  dispatch: y,
  setOwnSeat: o,
  connectionRef: N,
  activeBoardRef: x,
  onMessage: U,
  connect: R = mg
}) {
  const Q = Ee(f);
  if (!Q || typeof R != "function") return null;
  if (x?.current === Q && N?.current)
    return N.current;
  N?.current?.close?.(), N && (N.current = null), x && (x.current = Q), o?.(null);
  const I = R({
    currentBoardCode: Q,
    clientId: s,
    dispatch: y,
    onOwnSeat: o,
    onMessage: U
  });
  return N && (N.current = I), I;
}
function vg({ snapshot: f, ownSeat: s } = {}) {
  const y = String(s || "").trim();
  if (y === "p1" || y === "p2") return [];
  const o = qy(f);
  return o ? ["p1", "p2"].filter((N) => o?.[N]?.status === "vacant").map((N) => ({ seatId: N, label: cg(N) })) : [];
}
function hg({ ownSeat: f, snapshot: s } = {}) {
  const y = String(f || "").trim();
  return y !== "p1" && y !== "p2" ? null : fg(s) ? { label: "Leave Seat (Forfeit)", danger: !0 } : { label: "Leave Seat", danger: !1 };
}
function gg({
  ownSeat: f,
  snapshot: s,
  isWaitingListMember: y
} = {}) {
  const o = String(f || "").trim();
  if (o === "p1" || o === "p2") return null;
  if (y)
    return { type: "leave", label: "Leave Waiting List" };
  const N = qy(s);
  return N && ["p1", "p2"].every(
    (U) => ig(N?.[U]?.status)
  ) ? { type: "join", label: "Join Waiting List" } : null;
}
function Sg({ ownSeat: f, snapshot: s } = {}) {
  const y = String(f || "").trim();
  if (y !== "p1" && y !== "p2") return [];
  const o = String(s?.game?.status || "").trim();
  return o === "playing" ? s?.game?.turn === y ? [{ type: "pause", label: "Pause Game" }] : [] : o === "paused" ? (s?.game?.pause?.resumeTurn || s?.game?.pause?.byPlayerId || null) === y ? [{ type: "resume", label: "Resume Game" }] : [] : [];
}
function bg({ ownSeat: f, snapshot: s } = {}) {
  const y = String(f || "").trim();
  if (y !== "p1" && y !== "p2") return null;
  const o = String(s?.game?.status || "").trim();
  return o === "finished" ? { label: "Continue", reason: "between-rounds" } : o === "paused" && s?.game?.pause?.byPlayerId === y ? { label: "Start New Round", reason: "paused-owner" } : null;
}
function Tg({
  clientId: f,
  dispatch: s,
  startWatching: y,
  locationLike: o = Zo()
}) {
  const N = sg({ locationLike: o });
  return N ? (s?.({ type: "setCurrentBoardCode", boardCode: N }), y?.({
    roomId: N,
    clientId: f,
    onMessage(x) {
      x?.type === "BoardNotFound" && typeof x.message == "string" && s?.({ type: "setToast", toast: x.message }), x?.type === "error" && typeof x.error == "string" && s?.({ type: "setToast", toast: x.error });
    }
  })) : null;
}
function pg(f) {
  const s = f?.point;
  if (!s || typeof s != "object") return null;
  const y = Number(s.x), o = Number(s.y);
  return !Number.isFinite(y) || !Number.isFinite(o) ? null : { x: y, y: o };
}
function ke(f) {
  return typeof f?.send == "function" && Number(f?.socket?.readyState) === 1;
}
function Eg({
  payload: f,
  ownSeat: s,
  connection: y,
  dispatch: o
}) {
  if (!ke(y)) {
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
  const x = pg(f);
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
function zg({
  seatId: f,
  currentBoardCode: s,
  clientId: y,
  playerName: o,
  connection: N,
  dispatch: x
}) {
  if (!ke(N)) {
    x?.({
      type: "setToast",
      toast: "Connection unavailable. Reconnect to claim a seat."
    });
    return;
  }
  const U = String(f || "").trim();
  if (U !== "p1" && U !== "p2") {
    x?.({ type: "setToast", toast: "Invalid seat selection." });
    return;
  }
  N.send({
    type: "claimSeat",
    seatId: U,
    name: String(o || "").trim(),
    roomId: Ee(s),
    clientId: String(y || "").trim()
  });
}
function Og({
  currentBoardCode: f,
  clientId: s,
  playerName: y,
  connection: o,
  dispatch: N
}) {
  if (!ke(o)) {
    N?.({
      type: "setToast",
      toast: "Connection unavailable. Reconnect to join the waiting list."
    });
    return;
  }
  o.send({
    type: "joinWaitingList",
    name: String(y || "").trim(),
    roomId: Ee(f),
    clientId: String(s || "").trim()
  });
}
function Ng({
  currentBoardCode: f,
  clientId: s,
  connection: y,
  dispatch: o
}) {
  if (!ke(y)) {
    o?.({
      type: "setToast",
      toast: "Connection unavailable. Reconnect to leave the waiting list."
    });
    return;
  }
  y.send({
    type: "leaveWaitingList",
    roomId: Ee(f),
    clientId: String(s || "").trim()
  });
}
function Ag({ ownSeat: f, connection: s, dispatch: y }) {
  const o = String(f || "").trim();
  if (o !== "p1" && o !== "p2") {
    y?.({ type: "setToast", toast: "You are not occupying a seat." });
    return;
  }
  if (!ke(s)) {
    y?.({
      type: "setToast",
      toast: "Connection unavailable. Reconnect to leave your seat."
    });
    return;
  }
  s.send({ type: "leave" });
}
function _g({ ownSeat: f, connection: s, dispatch: y }) {
  const o = String(f || "").trim();
  if (o !== "p1" && o !== "p2") {
    y?.({ type: "setToast", toast: "You are not occupying a seat." });
    return;
  }
  if (!ke(s)) {
    y?.({
      type: "setToast",
      toast: "Connection unavailable. Reconnect to pause."
    });
    return;
  }
  s.send({ type: "pause" });
}
function Cg({ ownSeat: f, connection: s, dispatch: y }) {
  const o = String(f || "").trim();
  if (o !== "p1" && o !== "p2") {
    y?.({ type: "setToast", toast: "You are not occupying a seat." });
    return;
  }
  if (!ke(s)) {
    y?.({
      type: "setToast",
      toast: "Connection unavailable. Reconnect to resume."
    });
    return;
  }
  s.send({ type: "resume" });
}
function Mg({ ownSeat: f, connection: s, dispatch: y }) {
  const o = String(f || "").trim();
  if (o !== "p1" && o !== "p2") {
    y?.({ type: "setToast", toast: "You are not occupying a seat." });
    return;
  }
  if (!ke(s)) {
    y?.({
      type: "setToast",
      toast: "Connection unavailable. Reconnect to continue."
    });
    return;
  }
  s.send({ type: "reset" });
}
async function xg({
  clientId: f,
  moveTimeLimitSeconds: s,
  dispatch: y,
  create: o = Y1,
  syncUrl: N = yg,
  startWatching: x,
  refreshBoardList: U
}) {
  try {
    const R = await o({ clientId: f, moveTimeLimitSeconds: s }), Q = Ee(R?.roomId);
    if (!Q)
      throw new Error("Board creation response missing roomId.");
    return y?.({ type: "setCurrentBoardCode", boardCode: Q }), N?.(Q), x?.({ roomId: Q, clientId: f }), await U?.(), R;
  } catch (R) {
    return y?.({
      type: "setToast",
      toast: R instanceof Error && R.message ? R.message : "Board creation failed."
    }), null;
  }
}
function Rg({ initialState: f }) {
  const [s, y] = ol.useReducer($1, f), [o, N] = ol.useState(null), [x, U] = ol.useState(!1), R = ol.useRef(null), Q = ol.useRef(""), I = f?.demoBoardSnapshot || null, C = s.boardState || I, p = String(s.connectionStatus || "idle"), B = vg({
    snapshot: C,
    ownSeat: o
  }), dt = hg({
    ownSeat: o,
    snapshot: C
  }), At = gg({
    ownSeat: o,
    snapshot: C,
    isWaitingListMember: s.isWaitingListMember
  }), _t = Sg({
    ownSeat: o,
    snapshot: C
  }), j = bg({
    ownSeat: o,
    snapshot: C
  });
  ol.useEffect(() => {
    const _ = Tg({
      clientId: s.clientId,
      dispatch: y,
      startWatching: ({ roomId: Y, clientId: V, onMessage: yt }) => Go({
        roomId: Y,
        clientId: V,
        dispatch: y,
        setOwnSeat: N,
        connectionRef: R,
        activeBoardRef: Q,
        onMessage: yt
      })
    });
    return () => {
      R.current === _ && _ && (Q.current = "", R.current = null, _.close?.());
    };
  }, []), ol.useEffect(() => {
    const _ = Ee(s.currentBoardCode);
    if (!_) {
      R.current = null, N(null), y({ type: "setConnectionStatus", status: "idle" });
      return;
    }
    let Y = null;
    try {
      Y = Go({
        roomId: _,
        clientId: s.clientId,
        dispatch: y,
        setOwnSeat: N,
        connectionRef: R,
        activeBoardRef: Q,
        onMessage: null
      });
    } catch {
      Q.current = "", R.current = null, y({ type: "setConnectionStatus", status: "error" });
      return;
    }
    return () => {
      R.current === Y && (Q.current = "", R.current = null, Y?.close?.());
    };
  }, [s.currentBoardCode, s.clientId]);
  const ct = s.clientId && s.clientId.length > 6 ? `...${s.clientId.slice(-6)}` : "identity ready", Wt = (_) => {
    const Y = _.target.value;
    y({ type: "setPlayerName", playerName: Y }), V1(Y);
  }, ee = async () => {
    await xg({
      clientId: s.clientId,
      moveTimeLimitSeconds: s.onlineSetup.moveTimeLimitSeconds,
      dispatch: y,
      startWatching: ({ roomId: _, clientId: Y }) => Go({
        roomId: _,
        clientId: Y,
        dispatch: y,
        setOwnSeat: N,
        connectionRef: R,
        activeBoardRef: Q
      })
    });
  }, pl = (_) => {
    zg({
      seatId: _,
      currentBoardCode: s.currentBoardCode,
      clientId: s.clientId,
      playerName: s.playerName,
      connection: R.current,
      dispatch: y
    });
  }, El = () => {
    Ag({
      ownSeat: o,
      connection: R.current,
      dispatch: y
    });
  }, $t = (_) => {
    if (_ === "join") {
      Og({
        currentBoardCode: s.currentBoardCode,
        clientId: s.clientId,
        playerName: s.playerName,
        connection: R.current,
        dispatch: y
      });
      return;
    }
    Ng({
      currentBoardCode: s.currentBoardCode,
      clientId: s.clientId,
      connection: R.current,
      dispatch: y
    });
  }, $ = () => {
    _g({
      ownSeat: o,
      connection: R.current,
      dispatch: y
    });
  }, ut = () => {
    Cg({
      ownSeat: o,
      connection: R.current,
      dispatch: y
    });
  }, zl = () => {
    Mg({
      ownSeat: o,
      connection: R.current,
      dispatch: y
    });
  }, ll = (_) => {
    y({ type: "setToast", toast: _ });
  }, el = Array.isArray(C?.game?.moves) ? C.game.moves.length : 0, Ft = () => {
    U(!1), y({ type: "setHistoryPanelOpen", open: !1 }), y({ type: "setRulesPanelOpen", open: !0 });
  }, Ql = () => {
    U(!1), y({ type: "setRulesPanelOpen", open: !1 }), y({ type: "setHistoryPanelOpen", open: !0 });
  }, ue = () => {
    y({ type: "setRulesPanelOpen", open: !1 });
  }, Mt = () => {
    y({ type: "setHistoryPanelOpen", open: !1 });
  };
  return /* @__PURE__ */ E.jsx("main", { style: F1, children: /* @__PURE__ */ E.jsxs("section", { style: I1, children: [
    /* @__PURE__ */ E.jsxs(
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
          /* @__PURE__ */ E.jsxs("div", { style: { flex: "1 1 420px", minWidth: 0 }, children: [
            /* @__PURE__ */ E.jsx("p", { style: k1, children: "React product shell" }),
            /* @__PURE__ */ E.jsx("h1", { style: P1, children: "Traceball Arena" }),
            /* @__PURE__ */ E.jsx("p", { style: tg, children: "The React shell owns product state while Elm renders the board island. Online authority remains on the server." })
          ] }),
          /* @__PURE__ */ E.jsx(
            R1,
            {
              menuOpen: x,
              onToggle: U,
              onSelectRules: Ft,
              onSelectHistory: Ql
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ E.jsxs("div", { style: lg, children: [
      /* @__PURE__ */ E.jsxs("article", { style: Zi, children: [
        /* @__PURE__ */ E.jsx("p", { style: zu, children: "Player Name" }),
        /* @__PURE__ */ E.jsx(
          "input",
          {
            "aria-label": "Player name",
            value: s.playerName || "",
            onChange: Wt,
            style: eg,
            placeholder: "Enter your name"
          }
        )
      ] }),
      /* @__PURE__ */ E.jsxs("article", { style: Zi, children: [
        /* @__PURE__ */ E.jsx("p", { style: zu, children: "Client Identity" }),
        /* @__PURE__ */ E.jsx("p", { style: Vi, children: ct })
      ] }),
      /* @__PURE__ */ E.jsxs("article", { style: Zi, children: [
        /* @__PURE__ */ E.jsx("p", { style: zu, children: "Online Move Timer" }),
        /* @__PURE__ */ E.jsxs("p", { style: Vi, children: [
          s.onlineSetup.moveTimeLimitSeconds,
          "s"
        ] })
      ] }),
      /* @__PURE__ */ E.jsxs("article", { style: Zi, children: [
        /* @__PURE__ */ E.jsx("p", { style: zu, children: "Connection" }),
        /* @__PURE__ */ E.jsxs("p", { style: Vi, children: [
          /* @__PURE__ */ E.jsx(
            "span",
            {
              style: {
                ...ag,
                background: p === "connected" ? "#0a8f28" : p === "error" ? "#d64545" : "#9aa79e"
              }
            }
          ),
          p
        ] })
      ] })
    ] }),
    /* @__PURE__ */ E.jsxs("div", { style: { marginTop: "20px" }, children: [
      /* @__PURE__ */ E.jsx("p", { style: zu, children: "Selected Mode" }),
      /* @__PURE__ */ E.jsxs("div", { style: xy, children: [
        /* @__PURE__ */ E.jsx(
          "button",
          {
            type: "button",
            style: Yo(s.mode === "online"),
            onClick: () => y({ type: "setMode", mode: "online" }),
            children: "Online"
          }
        ),
        /* @__PURE__ */ E.jsx(
          "button",
          {
            type: "button",
            style: Yo(s.mode === "local"),
            onClick: () => y({ type: "setMode", mode: "local" }),
            children: "Local"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ E.jsxs("div", { style: { marginTop: "20px" }, children: [
      /* @__PURE__ */ E.jsx("p", { style: zu, children: "Online Actions" }),
      /* @__PURE__ */ E.jsx("div", { style: xy, children: /* @__PURE__ */ E.jsx(
        "button",
        {
          type: "button",
          style: Yo(!1),
          onClick: ee,
          children: "Create Board"
        }
      ) })
    ] }),
    /* @__PURE__ */ E.jsxs("div", { style: { marginTop: "20px" }, children: [
      /* @__PURE__ */ E.jsx("p", { style: zu, children: "Active Tab" }),
      /* @__PURE__ */ E.jsx("p", { style: Vi, children: s.mainTab || "home" })
    ] }),
    s.currentBoardCode ? /* @__PURE__ */ E.jsx(
      _1,
      {
        boardCode: s.currentBoardCode,
        onToast: ll
      }
    ) : null,
    C ? /* @__PURE__ */ E.jsx(
      y1,
      {
        snapshot: C,
        ownSeat: o,
        connectionStatus: p,
        isWaitingListMember: s.isWaitingListMember,
        claimableSeatActions: B,
        leaveSeatAction: dt,
        waitingListAction: At,
        pauseResumeActions: _t,
        newRoundAction: j,
        onClaimSeat: pl,
        onLeaveSeat: El,
        onWaitingListAction: $t,
        onPauseAction: $,
        onResumeAction: ut,
        onNewRoundAction: zl
      }
    ) : null,
    C ? /* @__PURE__ */ E.jsx("div", { style: qo, children: /* @__PURE__ */ E.jsx(
      $h,
      {
        snapshot: C,
        ownSeat: o,
        replayIndex: null,
        flipVertical: !1,
        onMoveClick: (_) => {
          console.info("Board move click", _), Eg({
            payload: _,
            ownSeat: o,
            connection: R.current,
            dispatch: y
          });
        }
      }
    ) }) : /* @__PURE__ */ E.jsx("div", { style: qo, children: "Board island not mounted yet" }),
    s.toast ? /* @__PURE__ */ E.jsx("div", { style: { ...qo, marginTop: "10px" }, children: s.toast }) : null,
    /* @__PURE__ */ E.jsx(D1, { open: s.rulesPanelOpen, onClose: ue }),
    /* @__PURE__ */ E.jsx(
      H1,
      {
        open: s.historyPanelOpen,
        localHistoryCount: el,
        onClose: Mt
      }
    ),
    /* @__PURE__ */ E.jsx("div", { style: ug, children: "Elm remains the board and replay correctness surface. The server remains authoritative for seats, timers, pause/resume, winners, and online move validation." })
  ] }) });
}
const Ry = document.getElementById("react-root");
if (Ry) {
  const f = w1({
    clientId: L1(),
    playerName: Z1(),
    onlineMoveTimer: J1()
  });
  Jh.createRoot(Ry).render(
    /* @__PURE__ */ E.jsx(Gh.StrictMode, { children: /* @__PURE__ */ E.jsx(Rg, { initialState: f }) })
  );
}
