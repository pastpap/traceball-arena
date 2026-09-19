function Hh(f) {
  return f && f.__esModule && Object.prototype.hasOwnProperty.call(f, "default") ? f.default : f;
}
var Do = { exports: {} }, rn = {};
var my;
function jh() {
  if (my) return rn;
  my = 1;
  var f = /* @__PURE__ */ Symbol.for("react.transitional.element"), s = /* @__PURE__ */ Symbol.for("react.fragment");
  function y(o, O, N) {
    var D = null;
    if (N !== void 0 && (D = "" + N), O.key !== void 0 && (D = "" + O.key), "key" in O) {
      N = {};
      for (var B in O)
        B !== "key" && (N[B] = O[B]);
    } else N = O;
    return O = N.ref, {
      $$typeof: f,
      type: o,
      key: D,
      ref: O !== void 0 ? O : null,
      props: N
    };
  }
  return rn.Fragment = s, rn.jsx = y, rn.jsxs = y, rn;
}
var vy;
function Bh() {
  return vy || (vy = 1, Do.exports = jh()), Do.exports;
}
var A = Bh(), Uo = { exports: {} }, J = {};
var hy;
function Yh() {
  if (hy) return J;
  hy = 1;
  var f = /* @__PURE__ */ Symbol.for("react.transitional.element"), s = /* @__PURE__ */ Symbol.for("react.portal"), y = /* @__PURE__ */ Symbol.for("react.fragment"), o = /* @__PURE__ */ Symbol.for("react.strict_mode"), O = /* @__PURE__ */ Symbol.for("react.profiler"), N = /* @__PURE__ */ Symbol.for("react.consumer"), D = /* @__PURE__ */ Symbol.for("react.context"), B = /* @__PURE__ */ Symbol.for("react.forward_ref"), Y = /* @__PURE__ */ Symbol.for("react.suspense"), W = /* @__PURE__ */ Symbol.for("react.memo"), M = /* @__PURE__ */ Symbol.for("react.lazy"), p = /* @__PURE__ */ Symbol.for("react.activity"), j = /* @__PURE__ */ Symbol.for("react.view_transition"), yt = Symbol.iterator;
  function Ct(m) {
    return m === null || typeof m != "object" ? null : (m = yt && m[yt] || m["@@iterator"], typeof m == "function" ? m : null);
  }
  var Mt = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, H = Object.assign, ct = {};
  function Ft(m, _, Q) {
    this.props = m, this.context = _, this.refs = ct, this.updater = Q || Mt;
  }
  Ft.prototype.isReactComponent = {}, Ft.prototype.setState = function(m, _) {
    if (typeof m != "object" && typeof m != "function" && m != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, m, _, "setState");
  }, Ft.prototype.forceUpdate = function(m) {
    this.updater.enqueueForceUpdate(this, m, "forceUpdate");
  };
  function le() {
  }
  le.prototype = Ft.prototype;
  function El(m, _, Q) {
    this.props = m, this.context = _, this.refs = ct, this.updater = Q || Mt;
  }
  var zl = El.prototype = new le();
  zl.constructor = El, H(zl, Ft.prototype), zl.isPureReactComponent = !0;
  var It = Array.isArray;
  function F() {
  }
  var ut = { H: null, A: null, T: null, S: null }, rt = Object.prototype.hasOwnProperty;
  function Ot(m, _, Q) {
    var X = Q.ref;
    return {
      $$typeof: f,
      type: m,
      key: _,
      ref: X !== void 0 ? X : null,
      props: Q
    };
  }
  function ul(m, _) {
    return Ot(m.type, _, m.props);
  }
  function kt(m) {
    return typeof m == "object" && m !== null && m.$$typeof === f;
  }
  function pe(m) {
    var _ = { "=": "=0", ":": "=2" };
    return "$" + m.replace(/[=:]/g, function(Q) {
      return _[Q];
    });
  }
  var ke = /\/+/g;
  function Bt(m, _) {
    return typeof m == "object" && m !== null && m.key != null ? pe("" + m.key) : _.toString(36);
  }
  function R(m) {
    switch (m.status) {
      case "fulfilled":
        return m.value;
      case "rejected":
        throw m.reason;
      default:
        switch (typeof m.status == "string" ? m.then(F, F) : (m.status = "pending", m.then(
          function(_) {
            m.status === "pending" && (m.status = "fulfilled", m.value = _);
          },
          function(_) {
            m.status === "pending" && (m.status = "rejected", m.reason = _);
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
  function Z(m, _, Q, X, at) {
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
            case M:
              return ft = m._init, Z(
                ft(m._payload),
                _,
                Q,
                X,
                at
              );
          }
      }
    if (ft)
      return at = at(m), ft = X === "" ? "." + Bt(m, 0) : X, It(at) ? (Q = "", ft != null && (Q = ft.replace(ke, "$&/") + "/"), Z(at, _, Q, "", function(ue) {
        return ue;
      })) : at != null && (kt(at) && (at = ul(
        at,
        Q + (at.key == null || m && m.key === at.key ? "" : ("" + at.key).replace(
          ke,
          "$&/"
        ) + "/") + ft
      )), _.push(at)), 1;
    ft = 0;
    var q = X === "" ? "." : X + ":";
    if (It(m))
      for (var K = 0; K < m.length; K++)
        X = m[K], nt = q + Bt(X, K), ft += Z(
          X,
          _,
          Q,
          nt,
          at
        );
    else if (K = Ct(m), typeof K == "function")
      for (m = K.call(m), K = 0; !(X = m.next()).done; )
        X = X.value, nt = q + Bt(X, K++), ft += Z(
          X,
          _,
          Q,
          nt,
          at
        );
    else if (nt === "object") {
      if (typeof m.then == "function")
        return Z(
          R(m),
          _,
          Q,
          X,
          at
        );
      throw _ = String(m), Error(
        "Objects are not valid as a React child (found: " + (_ === "[object Object]" ? "object with keys {" + Object.keys(m).join(", ") + "}" : _) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return ft;
  }
  function V(m, _, Q) {
    if (m == null) return m;
    var X = [], at = 0;
    return Z(m, X, "", "", function(nt) {
      return _.call(Q, nt, at++);
    }), X;
  }
  function St(m) {
    if (m._status === -1) {
      var _ = m._result, Q = _();
      Q.then(
        function(X) {
          (m._status === 0 || m._status === -1) && (m._status = 1, m._result = X, Q.status === void 0 && (Q.status = "fulfilled", Q.value = X));
        },
        function(X) {
          (m._status === 0 || m._status === -1) && (m._status = 2, m._result = X, Q.status === void 0 && (Q.status = "rejected", Q.reason = X));
        }
      ), m._status === -1 && (m._status = 0, m._result = Q);
    }
    if (m._status === 1) return m._result.default;
    throw m._result;
  }
  var st = typeof reportError == "function" ? reportError : function(m) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var _ = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof m == "object" && m !== null && typeof m.message == "string" ? String(m.message) : String(m),
        error: m
      });
      if (!window.dispatchEvent(_)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", m);
      return;
    }
    console.error(m);
  };
  function xl(m) {
    var _ = ut.T, Q = {};
    Q.types = _ !== null ? _.types : null, ut.T = Q;
    try {
      var X = m(), at = ut.S;
      at !== null && at(Q, X), typeof X == "object" && X !== null && typeof X.then == "function" && X.then(F, st);
    } catch (nt) {
      st(nt);
    } finally {
      _ !== null && Q.types !== null && (_.types = Q.types), ut.T = _;
    }
  }
  function ee(m) {
    var _ = ut.T;
    if (_ !== null) {
      var Q = _.types;
      Q === null ? _.types = [m] : Q.indexOf(m) === -1 && Q.push(m);
    } else xl(ee.bind(null, m));
  }
  var Pe = {
    map: V,
    forEach: function(m, _, Q) {
      V(
        m,
        function() {
          _.apply(this, arguments);
        },
        Q
      );
    },
    count: function(m) {
      var _ = 0;
      return V(m, function() {
        _++;
      }), _;
    },
    toArray: function(m) {
      return V(m, function(_) {
        return _;
      }) || [];
    },
    only: function(m) {
      if (!kt(m))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return m;
    }
  };
  return J.Activity = p, J.Children = Pe, J.Component = Ft, J.Fragment = y, J.Profiler = O, J.PureComponent = El, J.StrictMode = o, J.Suspense = Y, J.ViewTransition = j, J.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ut, J.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(m) {
      return ut.H.useMemoCache(m);
    }
  }, J.addTransitionType = ee, J.cache = function(m) {
    return function() {
      return m.apply(null, arguments);
    };
  }, J.cacheSignal = function() {
    return null;
  }, J.cloneElement = function(m, _, Q) {
    if (m == null)
      throw Error(
        "The argument must be a React element, but you passed " + m + "."
      );
    var X = H({}, m.props), at = m.key;
    if (_ != null)
      for (nt in _.key !== void 0 && (at = "" + _.key), _)
        !rt.call(_, nt) || nt === "key" || nt === "__self" || nt === "__source" || nt === "ref" && _.ref === void 0 || (X[nt] = _[nt]);
    var nt = arguments.length - 2;
    if (nt === 1) X.children = Q;
    else if (1 < nt) {
      for (var ft = Array(nt), q = 0; q < nt; q++)
        ft[q] = arguments[q + 2];
      X.children = ft;
    }
    return Ot(m.type, at, X);
  }, J.createContext = function(m) {
    return m = {
      $$typeof: D,
      _currentValue: m,
      _currentValue2: m,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, m.Provider = m, m.Consumer = {
      $$typeof: N,
      _context: m
    }, m;
  }, J.createElement = function(m, _, Q) {
    var X, at = {}, nt = null;
    if (_ != null)
      for (X in _.key !== void 0 && (nt = "" + _.key), _)
        rt.call(_, X) && X !== "key" && X !== "__self" && X !== "__source" && (at[X] = _[X]);
    var ft = arguments.length - 2;
    if (ft === 1) at.children = Q;
    else if (1 < ft) {
      for (var q = Array(ft), K = 0; K < ft; K++)
        q[K] = arguments[K + 2];
      at.children = q;
    }
    if (m && m.defaultProps)
      for (X in ft = m.defaultProps, ft)
        at[X] === void 0 && (at[X] = ft[X]);
    return Ot(m, nt, at);
  }, J.createRef = function() {
    return { current: null };
  }, J.forwardRef = function(m) {
    return { $$typeof: B, render: m };
  }, J.isValidElement = kt, J.lazy = function(m) {
    return {
      $$typeof: M,
      _payload: { _status: -1, _result: m },
      _init: St
    };
  }, J.memo = function(m, _) {
    return {
      $$typeof: W,
      type: m,
      compare: _ === void 0 ? null : _
    };
  }, J.startTransition = xl, J.unstable_useCacheRefresh = function() {
    return ut.H.useCacheRefresh();
  }, J.use = function(m) {
    return ut.H.use(m);
  }, J.useActionState = function(m, _, Q) {
    return ut.H.useActionState(m, _, Q);
  }, J.useCallback = function(m, _) {
    return ut.H.useCallback(m, _);
  }, J.useContext = function(m) {
    return ut.H.useContext(m);
  }, J.useDebugValue = function() {
  }, J.useDeferredValue = function(m, _) {
    return ut.H.useDeferredValue(m, _);
  }, J.useEffect = function(m, _) {
    return ut.H.useEffect(m, _);
  }, J.useEffectEvent = function(m) {
    return ut.H.useEffectEvent(m);
  }, J.useId = function() {
    return ut.H.useId();
  }, J.useImperativeHandle = function(m, _, Q) {
    return ut.H.useImperativeHandle(m, _, Q);
  }, J.useInsertionEffect = function(m, _) {
    return ut.H.useInsertionEffect(m, _);
  }, J.useLayoutEffect = function(m, _) {
    return ut.H.useLayoutEffect(m, _);
  }, J.useMemo = function(m, _) {
    return ut.H.useMemo(m, _);
  }, J.useOptimistic = function(m, _) {
    return ut.H.useOptimistic(m, _);
  }, J.useReducer = function(m, _, Q) {
    return ut.H.useReducer(m, _, Q);
  }, J.useRef = function(m) {
    return ut.H.useRef(m);
  }, J.useState = function(m) {
    return ut.H.useState(m);
  }, J.useSyncExternalStore = function(m, _, Q) {
    return ut.H.useSyncExternalStore(
      m,
      _,
      Q
    );
  }, J.useTransition = function() {
    return ut.H.useTransition();
  }, J.version = "19.3.0", J;
}
var gy;
function Xo() {
  return gy || (gy = 1, Uo.exports = Yh()), Uo.exports;
}
var pl = Xo();
const qh = /* @__PURE__ */ Hh(pl);
var xo = { exports: {} }, sn = {}, Ho = { exports: {} }, jo = {};
var Sy;
function Gh() {
  return Sy || (Sy = 1, (function(f) {
    function s(R, Z) {
      var V = R.length;
      R.push(Z);
      t: for (; 0 < V; ) {
        var St = V - 1 >>> 1, st = R[St];
        if (0 < O(st, Z))
          R[St] = Z, R[V] = st, V = St;
        else break t;
      }
    }
    function y(R) {
      return R.length === 0 ? null : R[0];
    }
    function o(R) {
      if (R.length === 0) return null;
      var Z = R[0], V = R.pop();
      if (V !== Z) {
        R[0] = V;
        t: for (var St = 0, st = R.length, xl = st >>> 1; St < xl; ) {
          var ee = 2 * (St + 1) - 1, Pe = R[ee], m = ee + 1, _ = R[m];
          if (0 > O(Pe, V))
            m < st && 0 > O(_, Pe) ? (R[St] = _, R[m] = V, St = m) : (R[St] = Pe, R[ee] = V, St = ee);
          else if (m < st && 0 > O(_, V))
            R[St] = _, R[m] = V, St = m;
          else break t;
        }
      }
      return Z;
    }
    function O(R, Z) {
      var V = R.sortIndex - Z.sortIndex;
      return V !== 0 ? V : R.id - Z.id;
    }
    if (f.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var N = performance;
      f.unstable_now = function() {
        return N.now();
      };
    } else {
      var D = Date, B = D.now();
      f.unstable_now = function() {
        return D.now() - B;
      };
    }
    var Y = [], W = [], M = 1, p = null, j = 3, yt = !1, Ct = !1, Mt = !1, H = !1, ct = typeof setTimeout == "function" ? setTimeout : null, Ft = typeof clearTimeout == "function" ? clearTimeout : null, le = typeof setImmediate < "u" ? setImmediate : null;
    function El(R) {
      for (var Z = y(W); Z !== null; ) {
        if (Z.callback === null) o(W);
        else if (Z.startTime <= R)
          o(W), Z.sortIndex = Z.expirationTime, s(Y, Z);
        else break;
        Z = y(W);
      }
    }
    function zl(R) {
      if (Mt = !1, El(R), !Ct)
        if (y(Y) !== null)
          Ct = !0, It || (It = !0, kt());
        else {
          var Z = y(W);
          Z !== null && Bt(zl, Z.startTime - R);
        }
    }
    var It = !1, F = -1, ut = 5, rt = -1;
    function Ot() {
      return H ? !0 : !(f.unstable_now() - rt < ut);
    }
    function ul() {
      if (H = !1, It) {
        var R = f.unstable_now();
        rt = R;
        var Z = !0;
        try {
          t: {
            Ct = !1, Mt && (Mt = !1, Ft(F), F = -1), yt = !0;
            var V = j;
            try {
              l: {
                for (El(R), p = y(Y); p !== null && !(p.expirationTime > R && Ot()); ) {
                  var St = p.callback;
                  if (typeof St == "function") {
                    p.callback = null, j = p.priorityLevel;
                    var st = St(
                      p.expirationTime <= R
                    );
                    if (R = f.unstable_now(), typeof st == "function") {
                      p.callback = st, El(R), Z = !0;
                      break l;
                    }
                    p === y(Y) && o(Y), El(R);
                  } else o(Y);
                  p = y(Y);
                }
                if (p !== null) Z = !0;
                else {
                  var xl = y(W);
                  xl !== null && Bt(
                    zl,
                    xl.startTime - R
                  ), Z = !1;
                }
              }
              break t;
            } finally {
              p = null, j = V, yt = !1;
            }
            Z = void 0;
          }
        } finally {
          Z ? kt() : It = !1;
        }
      }
    }
    var kt;
    if (typeof le == "function")
      kt = function() {
        le(ul);
      };
    else if (typeof MessageChannel < "u") {
      var pe = new MessageChannel(), ke = pe.port2;
      pe.port1.onmessage = ul, kt = function() {
        ke.postMessage(null);
      };
    } else
      kt = function() {
        ct(ul, 0);
      };
    function Bt(R, Z) {
      F = ct(function() {
        R(f.unstable_now());
      }, Z);
    }
    f.unstable_IdlePriority = 5, f.unstable_ImmediatePriority = 1, f.unstable_LowPriority = 4, f.unstable_NormalPriority = 3, f.unstable_Profiling = null, f.unstable_UserBlockingPriority = 2, f.unstable_cancelCallback = function(R) {
      R.callback = null;
    }, f.unstable_forceFrameRate = function(R) {
      0 > R || 125 < R ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : ut = 0 < R ? Math.floor(1e3 / R) : 5;
    }, f.unstable_getCurrentPriorityLevel = function() {
      return j;
    }, f.unstable_next = function(R) {
      switch (j) {
        case 1:
        case 2:
        case 3:
          var Z = 3;
          break;
        default:
          Z = j;
      }
      var V = j;
      j = Z;
      try {
        return R();
      } finally {
        j = V;
      }
    }, f.unstable_requestPaint = function() {
      H = !0;
    }, f.unstable_runWithPriority = function(R, Z) {
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
      var V = j;
      j = R;
      try {
        return Z();
      } finally {
        j = V;
      }
    }, f.unstable_scheduleCallback = function(R, Z, V) {
      var St = f.unstable_now();
      switch (typeof V == "object" && V !== null ? (V = V.delay, V = typeof V == "number" && 0 < V ? St + V : St) : V = St, R) {
        case 1:
          var st = -1;
          break;
        case 2:
          st = 250;
          break;
        case 5:
          st = 1073741823;
          break;
        case 4:
          st = 1e4;
          break;
        default:
          st = 5e3;
      }
      return st = V + st, R = {
        id: M++,
        callback: Z,
        priorityLevel: R,
        startTime: V,
        expirationTime: st,
        sortIndex: -1
      }, V > St ? (R.sortIndex = V, s(W, R), y(Y) === null && R === y(W) && (Mt ? (Ft(F), F = -1) : Mt = !0, Bt(zl, V - St))) : (R.sortIndex = st, s(Y, R), Ct || yt || (Ct = !0, It || (It = !0, kt()))), R;
    }, f.unstable_shouldYield = Ot, f.unstable_wrapCallback = function(R) {
      var Z = j;
      return function() {
        var V = j;
        j = Z;
        try {
          return R.apply(this, arguments);
        } finally {
          j = V;
        }
      };
    };
  })(jo)), jo;
}
var by;
function Qh() {
  return by || (by = 1, Ho.exports = Gh()), Ho.exports;
}
var Bo = { exports: {} }, $t = {};
var Ty;
function Xh() {
  if (Ty) return $t;
  Ty = 1;
  var f = Xo();
  function s(M) {
    var p = "https://react.dev/errors/" + M;
    if (1 < arguments.length) {
      p += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var j = 2; j < arguments.length; j++)
        p += "&args[]=" + encodeURIComponent(arguments[j]);
    }
    return "Minified React error #" + M + "; visit " + p + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
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
  }, O = /* @__PURE__ */ Symbol.for("react.portal"), N = /* @__PURE__ */ Symbol.for("react.recoverable"), D = /* @__PURE__ */ Symbol.for("react.optimistic_key");
  function B(M, p, j) {
    var yt = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: O,
      key: yt == null ? null : yt === D ? D : "" + yt,
      children: M,
      containerInfo: p,
      implementation: j
    };
  }
  var Y = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function W(M, p) {
    if (M === "font") return "";
    if (typeof p == "string")
      return p === "use-credentials" ? p : "";
  }
  return $t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, $t.browser = function(M) {
    return { $$typeof: N, _reason: M };
  }, $t.createPortal = function(M, p) {
    var j = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!p || p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11)
      throw Error(s(299));
    return B(M, p, null, j);
  }, $t.flushSync = function(M) {
    var p = Y.T, j = o.p;
    try {
      if (Y.T = null, o.p = 2, M) return M();
    } finally {
      Y.T = p, o.p = j, o.d.f();
    }
  }, $t.preconnect = function(M, p) {
    typeof M == "string" && (p ? (p = p.crossOrigin, p = typeof p == "string" ? p === "use-credentials" ? p : "" : void 0) : p = null, o.d.C(M, p));
  }, $t.prefetchDNS = function(M) {
    typeof M == "string" && o.d.D(M);
  }, $t.preinit = function(M, p) {
    if (typeof M == "string" && p && typeof p.as == "string") {
      var j = p.as, yt = W(j, p.crossOrigin), Ct = typeof p.integrity == "string" ? p.integrity : void 0, Mt = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0;
      j === "style" ? o.d.S(
        M,
        typeof p.precedence == "string" ? p.precedence : void 0,
        {
          crossOrigin: yt,
          integrity: Ct,
          fetchPriority: Mt
        }
      ) : j === "script" && o.d.X(M, {
        crossOrigin: yt,
        integrity: Ct,
        fetchPriority: Mt,
        nonce: typeof p.nonce == "string" ? p.nonce : void 0
      });
    }
  }, $t.preinitModule = function(M, p) {
    if (typeof M == "string")
      if (typeof p == "object" && p !== null) {
        if (p.as == null || p.as === "script") {
          var j = W(
            p.as,
            p.crossOrigin
          );
          o.d.M(M, {
            crossOrigin: j,
            integrity: typeof p.integrity == "string" ? p.integrity : void 0,
            nonce: typeof p.nonce == "string" ? p.nonce : void 0,
            fetchPriority: typeof p.fetchPriority == "string" ? p.fetchPriority : void 0
          });
        }
      } else p == null && o.d.M(M);
  }, $t.preload = function(M, p) {
    if (typeof M == "string" && typeof p == "object" && p !== null && typeof p.as == "string") {
      var j = p.as, yt = W(j, p.crossOrigin);
      o.d.L(M, j, {
        crossOrigin: yt,
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
  }, $t.preloadModule = function(M, p) {
    if (typeof M == "string")
      if (p) {
        var j = W(p.as, p.crossOrigin);
        o.d.m(M, {
          as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0,
          crossOrigin: j,
          integrity: typeof p.integrity == "string" ? p.integrity : void 0,
          nonce: typeof p.nonce == "string" ? p.nonce : void 0,
          fetchPriority: typeof p.fetchPriority == "string" ? p.fetchPriority : void 0
        });
      } else o.d.m(M);
  }, $t.requestFormReset = function(M) {
    o.d.r(M);
  }, $t.unstable_batchedUpdates = function(M, p) {
    return M(p);
  }, $t.useFormState = function(M, p, j) {
    return Y.H.useFormState(M, p, j);
  }, $t.useFormStatus = function() {
    return Y.H.useHostTransitionStatus();
  }, $t.version = "19.3.0", $t;
}
var py;
function Lh() {
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
  return f(), Bo.exports = Xh(), Bo.exports;
}
var Ey;
function Zh() {
  if (Ey) return sn;
  Ey = 1;
  var f = Qh(), s = Xo(), y = Lh();
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
  function N(t) {
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
  function B(t) {
    if (t.tag === 31) {
      var l = t.memoizedState;
      if (l === null && (t = t.alternate, t !== null && (l = t.memoizedState)), l !== null) return l.dehydrated;
    }
    return null;
  }
  function Y(t) {
    if (N(t) !== t)
      throw Error(o(188));
  }
  function W(t) {
    var l = t.alternate;
    if (!l) {
      if (l = N(t), l === null) throw Error(o(188));
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
          if (n === e) return Y(a), t;
          if (n === u) return Y(a), l;
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
  function M(t) {
    var l = t.tag;
    if (l === 5 || l === 26 || l === 27 || l === 6) return t;
    for (t = t.child; t !== null; ) {
      if (l = M(t), l !== null) return l;
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
  function j(t) {
    for (t = t.return; t !== null; ) {
      if (t.tag === 3 || t.tag === 5 || t.tag === 27) return t;
      t = t.return;
    }
    return null;
  }
  function yt(t) {
    var l = !1;
    for (t = t.return; t !== null && (t.tag === 4 && (l = !0), !(t.tag === 3 || t.tag === 5 || t.tag === 27)); )
      t = t.return;
    return l;
  }
  function Ct(t) {
    var l = [null, null], e = j(t);
    return e === null || Mt(
      l,
      t,
      e.child,
      { foundSelf: !1 }
    ), l;
  }
  function Mt(t, l, e, u) {
    for (; e !== null; ) {
      if (e === l) u.foundSelf = !0;
      else if (e.tag === 5 || e.tag === 27 || e.tag === 6) {
        if (u.foundSelf) return t[1] = e, !0;
        t[0] = e;
      } else if ((e.tag !== 22 || e.memoizedState === null) && Mt(
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
  var ct = null, Ft = null;
  function le(t, l, e) {
    return t === e ? !0 : t === l ? (ct = t, !0) : !1;
  }
  function El(t, l, e) {
    return t === e ? (Ft = t, !1) : t === l ? (Ft !== null && (ct = t), !0) : !1;
  }
  function zl(t) {
    if (t === null) return null;
    do
      t = t === null ? null : t.return;
    while (t && t.tag !== 5 && t.tag !== 27 && t.tag !== 3);
    return t || null;
  }
  function It(t, l, e) {
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
  var F = Object.assign, ut = /* @__PURE__ */ Symbol.for("react.element"), rt = /* @__PURE__ */ Symbol.for("react.transitional.element"), Ot = /* @__PURE__ */ Symbol.for("react.portal"), ul = /* @__PURE__ */ Symbol.for("react.fragment"), kt = /* @__PURE__ */ Symbol.for("react.strict_mode"), pe = /* @__PURE__ */ Symbol.for("react.profiler"), ke = /* @__PURE__ */ Symbol.for("react.consumer"), Bt = /* @__PURE__ */ Symbol.for("react.context"), R = /* @__PURE__ */ Symbol.for("react.forward_ref"), Z = /* @__PURE__ */ Symbol.for("react.suspense"), V = /* @__PURE__ */ Symbol.for("react.suspense_list"), St = /* @__PURE__ */ Symbol.for("react.memo"), st = /* @__PURE__ */ Symbol.for("react.lazy"), xl = /* @__PURE__ */ Symbol.for("react.activity"), ee = /* @__PURE__ */ Symbol.for("react.legacy_hidden"), Pe = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), m = /* @__PURE__ */ Symbol.for("react.view_transition"), _ = /* @__PURE__ */ Symbol.for("react.recoverable"), Q = Symbol.iterator;
  function X(t) {
    return t === null || typeof t != "object" ? null : (t = Q && t[Q] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var at = /* @__PURE__ */ Symbol.for("react.client.reference");
  function nt(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === at ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case ul:
        return "Fragment";
      case pe:
        return "Profiler";
      case kt:
        return "StrictMode";
      case Z:
        return "Suspense";
      case V:
        return "SuspenseList";
      case xl:
        return "Activity";
      case m:
        return "ViewTransition";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case Ot:
          return "Portal";
        case Bt:
          return t.displayName || "Context";
        case ke:
          return (t._context.displayName || "Context") + ".Consumer";
        case R:
          var l = t.render;
          return t = t.displayName, t || (t = l.displayName || l.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case St:
          return l = t.displayName || null, l !== null ? l : nt(t.type) || "Memo";
        case st:
          l = t._payload, t = t._init;
          try {
            return nt(t(l));
          } catch {
          }
      }
    return null;
  }
  var ft = Array.isArray, q = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, K = y.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ue = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, $i = [], Ou = -1;
  function Ql(t) {
    return { current: t };
  }
  function Xt(t) {
    0 > Ou || (t.current = $i[Ou], $i[Ou] = null, Ou--);
  }
  function Tt(t, l) {
    Ou++, $i[Ou] = t.current, t.current = l;
  }
  var Xl = Ql(null), va = Ql(null), Ee = Ql(null), yn = Ql(null);
  function mn(t, l) {
    switch (Tt(Ee, l), Tt(va, t), Tt(Xl, null), l.nodeType) {
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
    Xt(Xl), Tt(Xl, t);
  }
  function Au() {
    Xt(Xl), Xt(va), Xt(Ee);
  }
  function Wi(t) {
    var l = t.memoizedState;
    l !== null && (da._currentValue = l.memoizedState, Tt(yn, t)), l = Xl.current;
    var e = O0(l, t.type);
    l !== e && (Tt(va, t), Tt(Xl, e));
  }
  function vn(t) {
    va.current === t && (Xt(Xl), Xt(va)), yn.current === t && (Xt(yn), da._currentValue = ue);
  }
  var Fi, Vo;
  function ze(t) {
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
                } catch (C) {
                  var v = C;
                }
                Reflect.construct(t, [], z);
              } else {
                try {
                  z.call();
                } catch (C) {
                  v = C;
                }
                z = !1;
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
                  }), z = !0, new t();
                } finally {
                  z && (b !== void 0 ? Object.defineProperty(t.prototype, "props", b) : delete t.prototype.props);
                }
              }
            } else {
              try {
                throw Error();
              } catch (C) {
                v = C;
              }
              (z = t()) && typeof z.catch == "function" && z.catch(function() {
              });
            }
          } catch (C) {
            if (C && v && typeof C.stack == "string")
              return [C.stack, v.stack];
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
    return (e = t ? t.displayName || t.name : "") ? ze(e) : "";
  }
  function qy(t, l) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return ze(t.type);
      case 16:
        return ze("Lazy");
      case 13:
        return t.child !== l && l !== null ? ze("Suspense Fallback") : ze("Suspense");
      case 19:
        return ze("SuspenseList");
      case 0:
      case 15:
        return ki(t.type, !1);
      case 11:
        return ki(t.type.render, !1);
      case 1:
        return ki(t.type, !0);
      case 31:
        return ze("Activity");
      case 30:
        return ze("ViewTransition");
      default:
        return "";
    }
  }
  function Ko(t) {
    try {
      var l = "", e = null;
      do
        l += qy(t, e), e = t, t = t.return;
      while (t);
      return l;
    } catch (u) {
      return `
Error generating stack: ` + u.message + `
` + u.stack;
    }
  }
  var Pi = Object.prototype.hasOwnProperty, tc = f.unstable_scheduleCallback, lc = f.unstable_cancelCallback, Gy = f.unstable_shouldYield, Qy = f.unstable_requestPaint, rl = f.unstable_now, Xy = f.unstable_getCurrentPriorityLevel, Jo = f.unstable_ImmediatePriority, wo = f.unstable_UserBlockingPriority, hn = f.unstable_NormalPriority, Ly = f.unstable_LowPriority, $o = f.unstable_IdlePriority, Zy = f.log, Vy = f.unstable_setDisableYieldValue, ha = null, sl = null;
  function Oe(t) {
    if (typeof Zy == "function" && Vy(t), sl && typeof sl.setStrictMode == "function")
      try {
        sl.setStrictMode(ha, t);
      } catch {
      }
  }
  var dl = Math.clz32 ? Math.clz32 : wy, Ky = Math.log, Jy = Math.LN2;
  function wy(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (Ky(t) / Jy | 0) | 0;
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
  function Wo(t, l) {
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
  function Wy(t, l, e, u, a, n) {
    var i = t.pendingLanes;
    t.pendingLanes = e, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= e, t.entangledLanes &= e, t.errorRecoveryDisabledLanes &= e, t.shellSuspendCounter = 0;
    var c = t.entanglements, r = t.expirationTimes, g = t.hiddenUpdates;
    for (e = i & ~e; 0 < e; ) {
      var T = 31 - dl(e), z = 1 << T;
      c[T] = 0, r[T] = -1;
      var v = g[T];
      if (v !== null)
        for (g[T] = null, T = 0; T < v.length; T++) {
          var b = v[T];
          b !== null && (b.lane &= -536870913);
        }
      e &= ~z;
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
  var ae = Math.random().toString(36).slice(2), Lt = "__reactFiber$" + ae, al = "__reactProps$" + ae, _u = "__reactContainer$" + ae, er = "__reactEvents$" + ae, Fy = "__reactListeners$" + ae, Iy = "__reactHandles$" + ae, ur = "__reactResources$" + ae, ba = "__reactMarker$" + ae, pn = "__reactLoad$" + ae;
  function En(t) {
    delete t[Lt], delete t[al], delete t[Fy], delete t[Iy];
  }
  function lu(t) {
    var l;
    if (l = t[Lt]) return l;
    for (var e = t.parentNode; e; ) {
      if (l = e[_u] || e[Lt]) {
        if (e = l.alternate, l.child !== null || e !== null && e.child !== null)
          for (t = X0(t); t !== null; ) {
            if (e = t[Lt]) return e;
            t = X0(t);
          }
        return l;
      }
      t = e, e = t.parentNode;
    }
    return null;
  }
  function Nu(t) {
    if (t = t[Lt] || t[_u]) {
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
  function Yt(t) {
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
  var ky = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), cr = {}, fr = {};
  function Py(t) {
    return Pi.call(fr, t) ? !0 : Pi.call(cr, t) ? !1 : ky.test(t) ? fr[t] = !0 : (cr[t] = !0, !1);
  }
  var it = !1;
  function or() {
    var t = it;
    return it = !1, t;
  }
  function zn(t, l, e) {
    if (Py(l))
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
  function tm(t, l, e) {
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
      t._valueTracker = tm(
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
  var lm = /[\n"\\]/g;
  function Ol(t) {
    return t.replace(
      lm,
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
  function Ru(t, l, e, u) {
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
  var em = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function vr(t, l, e) {
    var u = l.indexOf("--") === 0;
    e == null || typeof e == "boolean" || e === "" ? u ? t.setProperty(l, "") : l === "float" ? t.cssFloat = "" : t[l] = "" : u ? t.setProperty(l, e) : typeof e != "number" || e === 0 || em.has(l) ? l === "float" ? t.cssFloat = e : t[l] = ("" + e).trim() : t[l] = e + "px";
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
  var um = /* @__PURE__ */ new Map([
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
  ]), am = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function An(t) {
    return am.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  function Ll() {
  }
  var oc = null;
  function rc(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var Uu = null, xu = null;
  function gr(t) {
    var l = Nu(t);
    if (l && (t = l.stateNode)) {
      var e = t[al] || null;
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
                var a = u[al] || null;
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
          l = e.value, l != null && Ru(t, !!e.multiple, l, !1);
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
      if (sc = !1, (Uu !== null || xu !== null) && (Ai(), Uu && (l = Uu, t = xu, xu = Uu = null, gr(l), t)))
        for (l = 0; l < t.length; l++) gr(t[l]);
    }
  }
  function pa(t, l) {
    var e = t.stateNode;
    if (e === null) return null;
    var u = e[al] || null;
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
  var ie = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), dc = !1;
  if (ie)
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
  var Ae = null, yc = null, _n = null;
  function br() {
    if (_n) return _n;
    var t, l = yc, e = l.length, u, a = "value" in Ae ? Ae.value : Ae.textContent, n = a.length;
    for (t = 0; t < e && l[t] === a[t]; t++) ;
    var i = e - t;
    for (u = 1; u <= i && l[e - u] === a[n - u]; u++) ;
    return _n = a.slice(t, 1 < u ? 1 - u : void 0);
  }
  function Nn(t) {
    var l = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && l === 13 && (t = 13)) : t = l, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function Cn() {
    return !0;
  }
  function Tr() {
    return !1;
  }
  function Pt(t) {
    function l(e, u, a, n, i) {
      this._reactName = e, this._targetInst = a, this.type = u, this.nativeEvent = n, this.target = i, this.currentTarget = null;
      for (var c in t)
        t.hasOwnProperty(c) && (e = t[c], this[c] = e ? e(n) : n[c]);
      return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1) ? Cn : Tr, this.isPropagationStopped = Tr, this;
    }
    return F(l.prototype, {
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
  }, Mn = Pt(_e), za = F({}, _e, { view: 0, detail: 0 }), nm = Pt(za), mc, vc, Oa, Rn = F({}, za, {
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
  }), pr = Pt(Rn), im = F({}, Rn, { dataTransfer: 0 }), cm = Pt(im), fm = F({}, za, { relatedTarget: 0 }), hc = Pt(fm), om = F({}, _e, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), rm = Pt(om), sm = F({}, _e, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), dm = Pt(sm), ym = F({}, _e, { data: 0 }), Er = Pt(ym), mm = {
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
  }, vm = {
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
  }, hm = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function gm(t) {
    var l = this.nativeEvent;
    return l.getModifierState ? l.getModifierState(t) : (t = hm[t]) ? !!l[t] : !1;
  }
  function gc() {
    return gm;
  }
  var Sm = F({}, za, {
    key: function(t) {
      if (t.key) {
        var l = mm[t.key] || t.key;
        if (l !== "Unidentified") return l;
      }
      return t.type === "keypress" ? (t = Nn(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? vm[t.keyCode] || "Unidentified" : "";
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
      return t.type === "keypress" ? Nn(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? Nn(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), bm = Pt(Sm), Tm = F({}, Rn, {
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
  }), zr = Pt(Tm), pm = F({}, _e, { submitter: 0 }), Em = Pt(pm), zm = F({}, za, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: gc
  }), Om = Pt(zm), Am = F({}, _e, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), _m = Pt(Am), Nm = F({}, Rn, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Cm = Pt(Nm), Mm = F({}, _e, {
    newState: 0,
    oldState: 0,
    source: 0
  }), Rm = Pt(Mm), Dm = [9, 13, 27, 32], Sc = ie && "CompositionEvent" in window, Aa = null;
  ie && "documentMode" in document && (Aa = document.documentMode);
  var Um = ie && "TextEvent" in window && !Aa, Or = ie && (!Sc || Aa && 8 < Aa && 11 >= Aa), Ar = " ", _r = !1;
  function Nr(t, l) {
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
  function xm(t, l) {
    switch (t) {
      case "compositionend":
        return Cr(l);
      case "keypress":
        return l.which !== 32 ? null : (_r = !0, Ar);
      case "textInput":
        return t = l.data, t === Ar && _r ? null : t;
      default:
        return null;
    }
  }
  function Hm(t, l) {
    if (Hu)
      return t === "compositionend" || !Sc && Nr(t, l) ? (t = br(), _n = yc = Ae = null, Hu = !1, t) : null;
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
  var jm = {
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
    return l === "input" ? !!jm[t.type] : l === "textarea";
  }
  function Rr(t, l, e, u) {
    Uu ? xu ? xu.push(u) : xu = [u] : Uu = u, l = Di(l, "onChange"), 0 < l.length && (e = new Mn(
      "onChange",
      "change",
      null,
      e,
      u
    ), t.push({ event: e, listeners: l }));
  }
  var _a = null, Na = null;
  function Bm(t) {
    g0(t, 0);
  }
  function Dn(t) {
    var l = Ta(t);
    if (sr(l)) return t;
  }
  function Dr(t, l) {
    if (t === "change") return l;
  }
  var Ur = !1;
  if (ie) {
    var bc;
    if (ie) {
      var Tc = "oninput" in document;
      if (!Tc) {
        var xr = document.createElement("div");
        xr.setAttribute("oninput", "return;"), Tc = typeof xr.oninput == "function";
      }
      bc = Tc;
    } else bc = !1;
    Ur = bc && (!document.documentMode || 9 < document.documentMode);
  }
  function Hr() {
    _a && (_a.detachEvent("onpropertychange", jr), Na = _a = null);
  }
  function jr(t) {
    if (t.propertyName === "value" && Dn(Na)) {
      var l = [];
      Rr(
        l,
        Na,
        t,
        rc(t)
      ), Sr(Bm, l);
    }
  }
  function Ym(t, l, e) {
    t === "focusin" ? (Hr(), _a = l, Na = e, _a.attachEvent("onpropertychange", jr)) : t === "focusout" && Hr();
  }
  function qm(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Dn(Na);
  }
  function Gm(t, l) {
    if (t === "click") return Dn(l);
  }
  function Qm(t, l) {
    if (t === "input" || t === "change")
      return Dn(l);
  }
  function Xm(t, l) {
    return t === l && (t !== 0 || 1 / t === 1 / l) || t !== t && l !== l;
  }
  var ml = typeof Object.is == "function" ? Object.is : Xm;
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
  var Lm = ie && "documentMode" in document && 11 >= document.documentMode, ju = null, zc = null, Ma = null, Oc = !1;
  function Qr(t, l, e) {
    var u = e.window === e ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
    Oc || ju == null || ju !== pc(u) || (u = ju, "selectionStart" in u && Ec(u) ? u = { start: u.selectionStart, end: u.selectionEnd } : (u = (u.ownerDocument && u.ownerDocument.defaultView || window).getSelection(), u = {
      anchorNode: u.anchorNode,
      anchorOffset: u.anchorOffset,
      focusNode: u.focusNode,
      focusOffset: u.focusOffset
    }), Ma && Ca(Ma, u) || (Ma = u, u = Di(zc, "onSelect"), 0 < u.length && (l = new Mn(
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
  }, Ac = {}, Xr = {};
  ie && (Xr = document.createElement("div").style, "AnimationEvent" in window || (delete Bu.animationend.animation, delete Bu.animationiteration.animation, delete Bu.animationstart.animation), "TransitionEvent" in window || delete Bu.transitionend.transition);
  function au(t) {
    if (Ac[t]) return Ac[t];
    if (!Bu[t]) return t;
    var l = Bu[t], e;
    for (e in l)
      if (l.hasOwnProperty(e) && e in Xr)
        return Ac[t] = l[e];
    return t;
  }
  var Lr = au("animationend"), Zr = au("animationiteration"), Vr = au("animationstart"), Zm = au("transitionrun"), Vm = au("transitionstart"), Km = au("transitioncancel"), Kr = au("transitionend"), Jr = /* @__PURE__ */ new Map(), _c = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  _c.push("scrollEnd");
  function Hl(t, l) {
    Jr.set(t, l), eu(l, [t]);
  }
  var Jm = 0;
  function ce(t, l) {
    if (t.name != null && t.name !== "auto") return t.name;
    if (l.autoName !== null) return l.autoName;
    t = ql.identifierPrefix;
    var e = Jm++;
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
  function fe(t, l) {
    return t = wr(t), l = wr(l), l == null ? t === "auto" ? null : t : l === "auto" ? null : l;
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
  }, Al = [], Yu = 0, Nc = 0;
  function xn() {
    for (var t = Yu, l = Nc = Yu = 0; l < t; ) {
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
      n !== 0 && $r(e, a, n);
    }
  }
  function Hn(t, l, e, u) {
    Al[Yu++] = t, Al[Yu++] = l, Al[Yu++] = e, Al[Yu++] = u, Nc |= u, t.lanes |= u, t = t.alternate, t !== null && (t.lanes |= u);
  }
  function Cc(t, l, e, u) {
    return Hn(t, l, e, u), jn(t);
  }
  function nu(t, l) {
    return Hn(t, null, null, l), jn(t);
  }
  function $r(t, l, e) {
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
  function wm(t, l, e, u) {
    this.tag = t, this.key = e, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = l, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = u, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function nl(t, l, e, u) {
    return new wm(t, l, e, u);
  }
  function Mc(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function oe(t, l) {
    var e = t.alternate;
    return e === null ? (e = nl(
      t.tag,
      l,
      t.key,
      t.mode
    ), e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.alternate = t, t.alternate = e) : (e.pendingProps = l, e.type = t.type, e.flags = 0, e.subtreeFlags = 0, e.deletions = null), e.flags = t.flags & 1206910976, e.childLanes = t.childLanes, e.lanes = t.lanes, e.child = t.child, e.memoizedProps = t.memoizedProps, e.memoizedState = t.memoizedState, e.updateQueue = t.updateQueue, l = t.dependencies, e.dependencies = l === null ? null : { lanes: l.lanes, firstContext: l.firstContext }, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.refCleanup = t.refCleanup, e;
  }
  function Wr(t, l) {
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
      i = ph(
        t,
        e,
        Xl.current
      ) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (u) {
        case xl:
          return t = nl(31, e, l, a), t.elementType = xl, t.lanes = n, t;
        case ul:
          return iu(e.children, a, n, l);
        case kt:
          i = 8, a |= 24;
          break;
        case pe:
          return t = nl(12, e, l, a | 2), t.elementType = pe, t.lanes = n, t;
        case Z:
          return t = nl(13, e, l, a), t.elementType = Z, t.lanes = n, t;
        case V:
          return t = nl(19, e, l, a), t.elementType = V, t.lanes = n, t;
        case ee:
        case m:
          return t = a | 32, t = nl(30, e, l, t), t.elementType = m, t.lanes = n, t.stateNode = {
            autoName: null,
            paired: null,
            clones: null,
            ref: null
          }, t;
        default:
          if (typeof u == "object" && u !== null)
            switch (u.$$typeof) {
              case Bt:
                i = 10;
                break t;
              case ke:
                i = 9;
                break t;
              case R:
                i = 11;
                break t;
              case St:
                i = 14;
                break t;
              case st:
                i = 16, u = null;
                break t;
            }
          i = 29, e = Error(
            o(130, t === null ? "null" : typeof t, "")
          ), u = null;
      }
    return l = nl(i, e, l, a), l.elementType = t, l.type = u, l.lanes = n, l;
  }
  function iu(t, l, e, u) {
    return t = nl(7, t, u, l), t.lanes = e, t;
  }
  function Rc(t, l, e) {
    return t = nl(6, t, null, l), t.lanes = e, t;
  }
  function Fr(t) {
    var l = nl(18, null, null, 0);
    return l.stateNode = t, l;
  }
  function Dc(t, l, e) {
    return l = nl(
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
  function _l(t, l) {
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
  var Gu = [], Qu = 0, Yn = null, Ra = 0, Nl = [], Cl = 0, Ne = null, Zl = 1, Vl = "";
  function re(t, l) {
    Gu[Qu++] = Ra, Gu[Qu++] = Yn, Yn = t, Ra = l;
  }
  function kr(t, l, e) {
    Nl[Cl++] = Zl, Nl[Cl++] = Vl, Nl[Cl++] = Ne, Ne = t;
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
    t.return !== null && (re(t, 1), kr(t, 1, 0));
  }
  function Uc(t) {
    for (; t === Yn; )
      Yn = Gu[--Qu], Gu[Qu] = null, Ra = Gu[--Qu], Gu[Qu] = null;
    for (; t === Ne; )
      Ne = Nl[--Cl], Nl[Cl] = null, Vl = Nl[--Cl], Nl[Cl] = null, Zl = Nl[--Cl], Nl[Cl] = null;
  }
  function Pr(t, l) {
    Nl[Cl++] = Zl, Nl[Cl++] = Vl, Nl[Cl++] = Ne, Zl = l.id, Vl = l.overflow, Ne = t;
  }
  var qt = null, pt = null, I = !1, Ce = null, Ml = !1, xc = Error(o(519));
  function Me(t) {
    var l = Error(
      o(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Da(_l(l, t)), xc;
  }
  function ts(t) {
    var l = t.stateNode, e = t.type, u = t.memoizedProps;
    switch (l[Lt] = t, l[al] = u, e) {
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
    e = u.children, typeof e != "string" && typeof e != "number" && typeof e != "bigint" || l.textContent === "" + e || u.suppressHydrationWarning === !0 || p0(l.textContent, e) ? (u.popover != null && (P("beforetoggle", l), P("toggle", l)), u.onScroll != null && P("scroll", l), u.onScrollEnd != null && P("scrollend", l), u.onClick != null && (l.onclick = Ll), l = !0) : l = !1, l || Me(t, !0);
  }
  function Gn(t) {
    for (qt = t.return; qt; )
      switch (qt.tag) {
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
          qt = qt.return;
      }
  }
  function Xu(t) {
    if (t !== qt) return !1;
    if (!I) return Gn(t), I = !0, !1;
    var l = t.tag, e;
    if ((e = l !== 3 && l !== 27) && ((e = l === 5) && (e = t.type, e = !(e !== "form" && e !== "button") || ro(t.type, t.memoizedProps)), e = !e), e && pt && Me(t), Gn(t), l === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(o(317));
      pt = Q0(t);
    } else if (l === 31) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(o(317));
      pt = Q0(t);
    } else
      l === 27 ? (l = pt, Ke(t.type) ? (t = To, To = null, pt = t) : pt = l) : pt = qt ? Dl(t.stateNode.nextSibling) : null;
    return !0;
  }
  function cu() {
    pt = qt = null, I = !1;
  }
  function Hc() {
    var t = Ce;
    return t !== null && (fl === null ? fl = t : fl.push.apply(
      fl,
      t
    ), Ce = null), t;
  }
  function Da(t) {
    Ce === null ? Ce = [t] : Ce.push(t);
  }
  var jc = Ql(null), fu = null, se = null;
  function Re(t, l, e) {
    Tt(jc, l._currentValue), l._currentValue = e;
  }
  function de(t) {
    t._currentValue = jc.current, Xt(jc);
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
    fu = t, se = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function Zt(t) {
    return ls(fu, t);
  }
  function Ln(t, l) {
    return fu === null && ru(t), ls(t, l);
  }
  function ls(t, l) {
    var e = l._currentValue;
    if (l = { context: l, memoizedValue: e, next: null }, se === null) {
      if (t === null) throw Error(o(308));
      se = l, t.dependencies = { lanes: 0, firstContext: l }, t.flags |= 524288;
    } else se = se.next = l;
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
  }, Wm = f.unstable_scheduleCallback, Fm = f.unstable_NormalPriority, Dt = {
    $$typeof: Bt,
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
  function Ua(t) {
    t.refCount--, t.refCount === 0 && Wm(Fm, function() {
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
  var xa = null;
  function Im(t) {
    var l = t.transitionTypes;
    return t.transitionTypes = null, l;
  }
  var Ha = null, qc = 0, su = 0, Lu = null;
  function km(t, l) {
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
    if (--qc === 0 && (xa = null, Ha !== null)) {
      Lu !== null && (Lu.status = "fulfilled");
      var t = Ha;
      Ha = null, su = 0, Lu = null;
      for (var l = 0; l < t.length; l++) (0, t[l])();
    }
  }
  function Pm(t, l) {
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
    if (Fd = rl(), typeof l == "object" && l !== null && typeof l.then == "function" && km(t, l), xa !== null)
      for (var e = ia; e !== null; )
        es(e, xa), e = e.next;
    if (e = t.types, e !== null) {
      for (var u = ia; u !== null; )
        es(u, e), u = u.next;
      if (su !== 0) {
        u = xa, u === null && (u = xa = []);
        for (var a = 0; a < e.length; a++) {
          var n = e[a];
          u.indexOf(n) === -1 && u.push(n);
        }
      }
    }
    as !== null && as(t, l);
  };
  var du = Ql(null);
  function Gc() {
    var t = du.current;
    return t !== null ? t : bt.pooledCache;
  }
  function Zn(t, l) {
    l === null ? Tt(du, du.current) : Tt(du, l.pool);
  }
  function ns() {
    var t = Gc();
    return t === null ? null : { parent: Dt._currentValue, pool: t };
  }
  var Zu = Error(o(460)), Qc = Error(o(474)), Vn = Error(o(542)), Kn = { then: function() {
  } };
  function is(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function cs(t, l, e) {
    switch (e = t[e], e === void 0 ? t.push(l) : e !== l && (l.then(Ll, Ll), l = e), l.status) {
      case "fulfilled":
        return l.value;
      case "rejected":
        throw t = l.reason, os(t), t === void 0 && !("reason" in l) ? Error(o(600)) : t;
      default:
        if (typeof l.status == "string") l.then(Ll, Ll);
        else {
          if (t = bt, t !== null && 100 < t.shellSuspendCounter)
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
      return h = oe(h, d), h.index = 0, h.sibling = null, h;
    }
    function n(h, d, S) {
      return h.index = S, t ? (S = h.alternate, S !== null ? (S = S.index, S < d ? (h.flags |= 2, d) : S) : (h.flags |= 134217730, d)) : (h.flags |= 1048576, d);
    }
    function i(h) {
      return t && h.alternate === null && (h.flags |= 134217730), h;
    }
    function c(h, d, S, E) {
      return d === null || d.tag !== 6 ? (d = Rc(S, h.mode, E), d.return = h, d) : (d = a(d, S), d.return = h, d);
    }
    function r(h, d, S, E) {
      var U = S.type;
      return U === ul ? (h = T(
        h,
        d,
        S.props.children,
        E,
        S.key
      ), De(h, S), h) : d !== null && (d.elementType === U || typeof U == "object" && U !== null && U.$$typeof === st && yu(U) === d.type) ? (d = a(d, S.props), De(d, S), d.return = h, d) : (d = Bn(
        S.type,
        S.key,
        S.props,
        null,
        h.mode,
        E
      ), De(d, S), d.return = h, d);
    }
    function g(h, d, S, E) {
      return d === null || d.tag !== 4 || d.stateNode.containerInfo !== S.containerInfo || d.stateNode.implementation !== S.implementation ? (d = Dc(S, h.mode, E), d.return = h, d) : (d = a(d, S.children || []), d.return = h, d);
    }
    function T(h, d, S, E, U) {
      return d === null || d.tag !== 7 ? (d = iu(
        S,
        h.mode,
        E,
        U
      ), d.return = h, d) : (d = a(d, S), d.return = h, d);
    }
    function z(h, d, S) {
      if (typeof d == "string" && d !== "" || typeof d == "number" || typeof d == "bigint")
        return d = Rc(
          "" + d,
          h.mode,
          S
        ), d.return = h, d;
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case rt:
            return S = Bn(
              d.type,
              d.key,
              d.props,
              null,
              h.mode,
              S
            ), De(S, d), S.return = h, S;
          case Ot:
            return d = Dc(
              d,
              h.mode,
              S
            ), d.return = h, d;
          case st:
            return d = yu(d), z(h, d, S);
        }
        if (ft(d) || X(d))
          return d = iu(
            d,
            h.mode,
            S,
            null
          ), d.return = h, d;
        if (typeof d.then == "function")
          return z(h, Jn(d), S);
        if (d.$$typeof === Bt)
          return z(
            h,
            Ln(h, d),
            S
          );
        wn(h, d);
      }
      return null;
    }
    function v(h, d, S, E) {
      var U = d !== null ? d.key : null;
      if (typeof S == "string" && S !== "" || typeof S == "number" || typeof S == "bigint")
        return U !== null ? null : c(h, d, "" + S, E);
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case rt:
            return S.key === U ? r(h, d, S, E) : null;
          case Ot:
            return S.key === U ? g(h, d, S, E) : null;
          case st:
            return S = yu(S), v(h, d, S, E);
        }
        if (ft(S) || X(S))
          return U !== null ? null : T(h, d, S, E, null);
        if (typeof S.then == "function")
          return v(
            h,
            d,
            Jn(S),
            E
          );
        if (S.$$typeof === Bt)
          return v(
            h,
            d,
            Ln(h, S),
            E
          );
        wn(h, S);
      }
      return null;
    }
    function b(h, d, S, E, U) {
      if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint")
        return h = h.get(S) || null, c(d, h, "" + E, U);
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case rt:
            return h = h.get(
              E.key === null ? S : E.key
            ) || null, r(d, h, E, U);
          case Ot:
            return h = h.get(
              E.key === null ? S : E.key
            ) || null, g(d, h, E, U);
          case st:
            return E = yu(E), b(
              h,
              d,
              S,
              E,
              U
            );
        }
        if (ft(E) || X(E))
          return h = h.get(S) || null, T(d, h, E, U, null);
        if (typeof E.then == "function")
          return b(
            h,
            d,
            S,
            Jn(E),
            U
          );
        if (E.$$typeof === Bt)
          return b(
            h,
            d,
            S,
            Ln(d, E),
            U
          );
        wn(d, E);
      }
      return null;
    }
    function C(h, d, S, E) {
      for (var U = null, lt = null, G = d, L = d = 0, Ht = null; G !== null && L < S.length; L++) {
        G.index > L ? (Ht = G, G = null) : Ht = G.sibling;
        var et = v(
          h,
          G,
          S[L],
          E
        );
        if (et === null) {
          G === null && (G = Ht);
          break;
        }
        t && G && et.alternate === null && l(h, G), d = n(et, d, L), lt === null ? U = et : lt.sibling = et, lt = et, G = Ht;
      }
      if (L === S.length)
        return e(h, G), I && re(h, L), U;
      if (G === null) {
        for (; L < S.length; L++)
          G = z(h, S[L], E), G !== null && (d = n(
            G,
            d,
            L
          ), lt === null ? U = G : lt.sibling = G, lt = G);
        return I && re(h, L), U;
      }
      for (G = u(G); L < S.length; L++)
        Ht = b(
          G,
          h,
          L,
          S[L],
          E
        ), Ht !== null && (t && (et = Ht.alternate, et !== null && G.delete(et.key === null ? L : et.key)), d = n(
          Ht,
          d,
          L
        ), lt === null ? U = Ht : lt.sibling = Ht, lt = Ht);
      return t && G.forEach(function(Fe) {
        return l(h, Fe);
      }), I && re(h, L), U;
    }
    function x(h, d, S, E) {
      if (S == null) throw Error(o(151));
      for (var U = null, lt = null, G = d, L = d = 0, Ht = null, et = S.next(); G !== null && !et.done; L++, et = S.next()) {
        G.index > L ? (Ht = G, G = null) : Ht = G.sibling;
        var Fe = v(h, G, et.value, E);
        if (Fe === null) {
          G === null && (G = Ht);
          break;
        }
        t && G && Fe.alternate === null && l(h, G), d = n(Fe, d, L), lt === null ? U = Fe : lt.sibling = Fe, lt = Fe, G = Ht;
      }
      if (et.done)
        return e(h, G), I && re(h, L), U;
      if (G === null) {
        for (; !et.done; L++, et = S.next())
          et = z(h, et.value, E), et !== null && (d = n(et, d, L), lt === null ? U = et : lt.sibling = et, lt = et);
        return I && re(h, L), U;
      }
      for (G = u(G); !et.done; L++, et = S.next())
        et = b(G, h, L, et.value, E), et !== null && (t && (Ht = et.alternate, Ht !== null && G.delete(
          Ht.key === null ? L : Ht.key
        )), d = n(et, d, L), lt === null ? U = et : lt.sibling = et, lt = et);
      return t && G.forEach(function(xh) {
        return l(h, xh);
      }), I && re(h, L), U;
    }
    function $(h, d, S, E) {
      if (typeof S == "object" && S !== null && S.type === ul && S.key === null && S.props.ref === void 0 && (S = S.props.children), typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case rt:
            t: {
              for (var U = S.key; d !== null; ) {
                if (d.key === U) {
                  if (U = S.type, U === ul) {
                    if (d.tag === 7) {
                      e(
                        h,
                        d.sibling
                      ), E = a(
                        d,
                        S.props.children
                      ), De(E, S), E.return = h, h = E;
                      break t;
                    }
                  } else if (d.elementType === U || typeof U == "object" && U !== null && U.$$typeof === st && yu(U) === d.type) {
                    e(
                      h,
                      d.sibling
                    ), E = a(d, S.props), De(E, S), E.return = h, h = E;
                    break t;
                  }
                  e(h, d);
                  break;
                } else l(h, d);
                d = d.sibling;
              }
              S.type === ul ? (E = iu(
                S.props.children,
                h.mode,
                E,
                S.key
              ), De(E, S), E.return = h, h = E) : (E = Bn(
                S.type,
                S.key,
                S.props,
                null,
                h.mode,
                E
              ), De(E, S), E.return = h, h = E);
            }
            return i(h);
          case Ot:
            t: {
              for (U = S.key; d !== null; ) {
                if (d.key === U)
                  if (d.tag === 4 && d.stateNode.containerInfo === S.containerInfo && d.stateNode.implementation === S.implementation) {
                    e(
                      h,
                      d.sibling
                    ), E = a(d, S.children || []), E.return = h, h = E;
                    break t;
                  } else {
                    e(h, d);
                    break;
                  }
                else l(h, d);
                d = d.sibling;
              }
              E = Dc(S, h.mode, E), E.return = h, h = E;
            }
            return i(h);
          case st:
            return S = yu(S), $(
              h,
              d,
              S,
              E
            );
        }
        if (ft(S))
          return C(
            h,
            d,
            S,
            E
          );
        if (X(S)) {
          if (U = X(S), typeof U != "function") throw Error(o(150));
          return S = U.call(S), x(
            h,
            d,
            S,
            E
          );
        }
        if (typeof S.then == "function")
          return $(
            h,
            d,
            Jn(S),
            E
          );
        if (S.$$typeof === Bt)
          return $(
            h,
            d,
            Ln(h, S),
            E
          );
        wn(h, S);
      }
      return typeof S == "string" && S !== "" || typeof S == "number" || typeof S == "bigint" ? (S = "" + S, d !== null && d.tag === 6 ? (e(h, d.sibling), E = a(d, S), E.return = h, h = E) : (e(h, d), E = Rc(S, h.mode, E), E.return = h, h = E), i(h)) : e(h, d);
    }
    return function(h, d, S, E) {
      try {
        ja = 0;
        var U = $(
          h,
          d,
          S,
          E
        );
        return Vu = null, U;
      } catch (G) {
        if (G === Zu || G === Vn) throw G;
        var lt = nl(29, G, null, h.mode);
        return lt.lanes = E, lt.return = h, lt;
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
  function xe(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function He(t, l, e) {
    var u = t.updateQueue;
    if (u === null) return null;
    if (u = u.shared, (ot & 2) !== 0) {
      var a = u.pending;
      return a === null ? l.next = l : (l.next = a.next, a.next = l), u.pending = l, l = jn(t), $r(t, null, e), l;
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
      var z = a.baseState;
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
            var C = t, x = c;
            v = l;
            var $ = e;
            switch (x.tag) {
              case 1:
                if (C = x.payload, typeof C == "function") {
                  z = C.call($, z, v);
                  break t;
                }
                z = C;
                break t;
              case 3:
                C.flags = C.flags & -65537 | 128;
              case 0:
                if (C = x.payload, v = typeof C == "function" ? C.call($, z, v) : C, v == null) break t;
                z = F({}, z, v);
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
          }, T === null ? (g = T = b, r = z) : T = T.next = b, i |= v;
        if (c = c.next, c === null) {
          if (c = a.shared.pending, c === null)
            break;
          b = c, c = b.next, b.next = null, a.lastBaseUpdate = b, a.shared.pending = null;
        }
      } while (!0);
      T === null && (r = z), a.baseState = r, a.firstBaseUpdate = g, a.lastBaseUpdate = T, n === null && (a.shared.lanes = 0), Xe |= i, t.lanes = i, t.memoizedState = z;
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
  var je = Ql(null), $n = Ql(0);
  function ms(t, l) {
    t = ge, Tt($n, t), Tt(je, l), ge = t | l.baseLanes;
  }
  function Kc() {
    Tt($n, ge), Tt(je, je.current);
  }
  function Jc() {
    ge = $n.current, Xt(je), Xt($n);
  }
  var Vt = Ql(null), Wt = null;
  function Be(t) {
    var l = t.alternate;
    Tt(Kt, Kt.current & 1), Tt(Vt, t), Wt === null && (l === null || je.current !== null || l.memoizedState !== null) && (Wt = t);
  }
  function wc(t) {
    Tt(Kt, Kt.current), Tt(Vt, t), Wt === null && (Wt = t);
  }
  function vs(t) {
    t.tag === 22 ? (Tt(Kt, Kt.current), Tt(Vt, t), Wt === null && (Wt = t)) : Ye();
  }
  function Ye() {
    Tt(Kt, Kt.current), Tt(Vt, Vt.current);
  }
  function vl(t) {
    Xt(Vt), Wt === t && (Wt = null), Xt(Kt);
  }
  var Kt = Ql(0);
  function Ga(t, l) {
    Tt(Vt, Vt.current), Tt(Kt, l);
  }
  function $c(t) {
    Xt(Kt), Xt(Vt), Wt === t && (Wt = null);
  }
  function Wn(t) {
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
  var ye = 0, w = null, gt = null, Ut = null, Fn = !1, Ku = !1, hu = !1, In = 0, Qa = 0, Ju = null, tv = 0;
  function _t() {
    throw Error(o(321));
  }
  function Wc(t, l) {
    if (l === null) return !1;
    for (var e = 0; e < l.length && e < t.length; e++)
      if (!ml(t[e], l[e])) return !1;
    return !0;
  }
  function Fc(t, l, e, u, a, n) {
    return ye = n, w = l, l.memoizedState = null, l.updateQueue = null, l.lanes = 0, q.H = t === null || t.memoizedState === null ? ks : Ps, hu = !1, n = e(u, a), hu = !1, Ku && (n = gs(
      l,
      e,
      u,
      a
    )), hs(t), n;
  }
  function hs(t) {
    q.H = ai;
    var l = gt !== null && gt.next !== null;
    if (ye = 0, Ut = gt = w = null, Fn = !1, Qa = 0, Ju = null, l) throw Error(o(300));
    t === null || xt || (t = t.dependencies, t !== null && Xn(t) && (xt = !0));
  }
  function gs(t, l, e, u) {
    w = t;
    var a = 0;
    do {
      if (Ku && (Ju = null), Qa = 0, Ku = !1, 25 <= a) throw Error(o(301));
      if (a += 1, Ut = gt = null, t.updateQueue != null) {
        var n = t.updateQueue;
        n.lastEffect = null, n.events = null, n.stores = null, n.memoCache != null && (n.memoCache.index = 0);
      }
      q.H = fv, n = l(e, u);
    } while (Ku);
    return n;
  }
  function lv() {
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
    ye = 0, Ut = gt = w = null, Ku = !1, Qa = In = 0, Ju = null;
  }
  function tl() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Ut === null ? w.memoizedState = Ut = t : Ut = Ut.next = t, Ut;
  }
  function Rt() {
    if (gt === null) {
      var t = w.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = gt.next;
    var l = Ut === null ? w.memoizedState : Ut.next;
    if (l !== null)
      Ut = l, gt = t;
    else {
      if (t === null)
        throw w.alternate === null ? Error(o(467)) : Error(o(310));
      gt = t, t = {
        memoizedState: gt.memoizedState,
        baseState: gt.baseState,
        baseQueue: gt.baseQueue,
        queue: gt.queue,
        next: null
      }, Ut === null ? w.memoizedState = Ut = t : Ut = Ut.next = t;
    }
    return Ut;
  }
  function kn() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Xa(t) {
    var l = Qa;
    return Qa += 1, Ju === null && (Ju = []), t = cs(Ju, t, l), l = w, (Ut === null ? l.memoizedState : Ut.next) === null && (l = l.alternate, q.H = l === null || l.memoizedState === null ? ks : Ps), t;
  }
  function Pn(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return Xa(t);
      if (t.$$typeof === _) return;
      if (t.$$typeof === Bt) return Zt(t);
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
  function me(t, l) {
    return typeof l == "function" ? l(t) : l;
  }
  function ti(t) {
    var l = Rt();
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
        var z = g.lane & -536870913;
        if (z !== g.lane ? (tt & z) === z : (ye & z) === z) {
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
            }), z === su && (T = !0);
          else if ((ye & v) === v) {
            g = g.next, v === su && (T = !0);
            continue;
          } else
            z = {
              lane: 0,
              revertLane: g.revertLane,
              gesture: null,
              action: g.action,
              hasEagerState: g.hasEagerState,
              eagerState: g.eagerState,
              next: null
            }, r === null ? (c = r = z, i = n) : r = r.next = z, w.lanes |= v, Xe |= v;
          z = g.action, hu && e(n, z), n = g.hasEagerState ? g.eagerState : e(n, z);
        } else
          v = {
            lane: z,
            revertLane: g.revertLane,
            gesture: g.gesture,
            action: g.action,
            hasEagerState: g.hasEagerState,
            eagerState: g.eagerState,
            next: null
          }, r === null ? (c = r = v, i = n) : r = r.next = v, w.lanes |= z, Xe |= z;
        g = g.next;
      } while (g !== null && g !== l);
      if (r === null ? i = n : r.next = c, !ml(n, t.memoizedState) && (xt = !0, T && (e = Lu, e !== null)))
        throw e;
      t.memoizedState = n, t.baseState = i, t.baseQueue = r, u.lastRenderedState = n;
    }
    return a === null && (u.lanes = 0), [t.memoizedState, u.dispatch];
  }
  function ef(t) {
    var l = Rt(), e = l.queue;
    if (e === null) throw Error(o(311));
    e.lastRenderedReducer = t;
    var u = e.dispatch, a = e.pending, n = l.memoizedState;
    if (a !== null) {
      e.pending = null;
      var i = a = a.next;
      do
        n = t(n, i.action), i = i.next;
      while (i !== a);
      ml(n, l.memoizedState) || (xt = !0), l.memoizedState = n, l.baseQueue === null && (l.baseState = n), e.lastRenderedState = n;
    }
    return [n, u];
  }
  function Ss(t, l, e) {
    var u = w, a = Rt(), n = I;
    if (n) {
      if (e === void 0) throw Error(o(407));
      e = e();
    } else e = l();
    var i = !ml(
      (gt || a).memoizedState,
      e
    );
    if (i && (a.memoizedState = e, xt = !0), a = a.queue, nf(ps.bind(null, u, a, t), [
      t
    ]), t = a.getSnapshot !== l || i || Ut !== null && (Ut.memoizedState.tag & 1) !== 0, wu(
      t ? 9 : 8,
      { destroy: void 0 },
      Ts.bind(null, u, a, e, l),
      null
    ), t) {
      if (u.flags |= 2048, bt === null) throw Error(o(349));
      n || (ye & 127) !== 0 || bs(u, l, e);
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
    l !== null && ol(l, t, 2);
  }
  function uf(t) {
    var l = tl();
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
      lastRenderedReducer: me,
      lastRenderedState: t
    }, l;
  }
  function Os(t, l, e, u) {
    return t.baseState = e, lf(
      t,
      gt,
      typeof u == "function" ? u : me
    );
  }
  function ev(t, l, e, u, a) {
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
      q.T !== null ? e(!0) : n.isTransition = !1, u(n), e = l.pending, e === null ? (n.next = l.pending = n, As(l, n)) : (n.next = e.next, l.pending = e.next = n);
    }
  }
  function As(t, l) {
    var e = l.action, u = l.payload, a = t.state;
    if (l.isTransition) {
      var n = q.T, i = {};
      i.types = n !== null ? n.types : null, q.T = i;
      try {
        var c = e(a, u), r = q.S;
        r !== null && r(i, c), _s(t, l, c);
      } catch (g) {
        af(t, l, g);
      } finally {
        n !== null && i.types !== null && (n.types = i.types), q.T = n;
      }
    } else
      try {
        n = e(a, u), _s(t, l, n);
      } catch (g) {
        af(t, l, g);
      }
  }
  function _s(t, l, e) {
    e !== null && typeof e == "object" && typeof e.then == "function" ? e.then(
      function(u) {
        Ns(t, l, u);
      },
      function(u) {
        return af(t, l, u);
      }
    ) : Ns(t, l, e);
  }
  function Ns(t, l, e) {
    l.status = "fulfilled", l.value = e, Cs(l), t.state = e, l = t.pending, l !== null && (e = l.next, e === l ? t.pending = null : (e = e.next, l.next = e, As(t, e)));
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
  function Rs(t, l) {
    if (I) {
      var e = bt.formState;
      if (e !== null) {
        t: {
          var u = w;
          if (I) {
            if (pt) {
              l: {
                for (var a = pt, n = Ml; a.nodeType !== 8; ) {
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
                pt = Dl(
                  a.nextSibling
                ), u = a.data === "F!";
                break t;
              }
            }
            Me(u);
          }
          u = !1;
        }
        u && (l = e[0]);
      }
    }
    return e = tl(), e.memoizedState = e.baseState = l, u = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ms,
      lastRenderedState: l
    }, e.queue = u, e = Ws.bind(
      null,
      w,
      u
    ), u.dispatch = e, u = uf(!1), n = sf.bind(
      null,
      w,
      !1,
      u.queue
    ), u = tl(), a = {
      state: l,
      dispatch: null,
      action: t,
      pending: null
    }, u.queue = a, e = ev.bind(
      null,
      w,
      a,
      n,
      e
    ), a.dispatch = e, u.memoizedState = t, [l, e, !1];
  }
  function Ds(t) {
    var l = Rt();
    return Us(l, gt, t);
  }
  function Us(t, l, e) {
    if (l = lf(
      t,
      l,
      Ms
    )[0], t = ti(me)[0], typeof l == "object" && l !== null && typeof l.then == "function")
      try {
        var u = Xa(l);
      } catch (i) {
        throw i === Zu ? Vn : i;
      }
    else u = l;
    l = Rt();
    var a = l.queue, n = a.dispatch;
    return e !== l.memoizedState && (w.flags |= 2048, wu(
      9,
      { destroy: void 0 },
      uv.bind(null, a, e),
      null
    )), [u, n, t];
  }
  function uv(t, l) {
    t.action = l;
  }
  function xs(t) {
    var l = Rt(), e = gt;
    if (e !== null)
      return Us(l, e, t);
    Rt(), l = l.memoizedState, e = Rt();
    var u = e.queue.dispatch;
    return e.memoizedState = t, [l, u, !1];
  }
  function wu(t, l, e, u) {
    return t = { tag: t, create: e, deps: u, inst: l, next: null }, l = w.updateQueue, l === null && (l = kn(), w.updateQueue = l), e = l.lastEffect, e === null ? l.lastEffect = t.next = t : (u = e.next, e.next = t, t.next = u, l.lastEffect = t), t;
  }
  function Hs() {
    return Rt().memoizedState;
  }
  function li(t, l, e, u) {
    var a = tl();
    w.flags |= t, a.memoizedState = wu(
      1 | l,
      { destroy: void 0 },
      e,
      u === void 0 ? null : u
    );
  }
  function ei(t, l, e, u) {
    var a = Rt();
    u = u === void 0 ? null : u;
    var n = a.memoizedState.inst;
    gt !== null && u !== null && Wc(u, gt.memoizedState.deps) ? a.memoizedState = wu(l, n, e, u) : (w.flags |= t, a.memoizedState = wu(
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
  function av(t) {
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
    var l = Rt().memoizedState;
    return av({ ref: l, nextImpl: t }), function() {
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
    var e = Rt();
    l = l === void 0 ? null : l;
    var u = e.memoizedState;
    return l !== null && Wc(l, u[1]) ? u[0] : (e.memoizedState = [t, l], t);
  }
  function Ls(t, l) {
    var e = Rt();
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
  function ff(t, l, e) {
    return e === void 0 || (ye & 1073741824) !== 0 && (tt & 261930) === 0 ? t.memoizedState = l : (t.memoizedState = e, t = kd(), w.lanes |= t, Xe |= t, e);
  }
  function Zs(t, l, e, u) {
    return ml(e, l) ? e : je.current !== null ? (t = ff(t, e, u), ml(t, l) || (xt = !0), t) : (ye & 106) === 0 || (ye & 1073741824) !== 0 && (tt & 261930) === 0 ? (xt = !0, t.memoizedState = e) : (t = kd(), w.lanes |= t, Xe |= t, l);
  }
  function Vs(t, l, e, u, a) {
    var n = K.p;
    K.p = n !== 0 && 8 > n ? n : 8;
    var i = q.T, c = {};
    c.types = i !== null ? i.types : null, q.T = c, sf(t, !1, l, e);
    try {
      var r = a(), g = q.S;
      if (g !== null && g(c, r), r !== null && typeof r == "object" && typeof r.then == "function") {
        var T = Pm(
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
    } catch (z) {
      La(
        t,
        l,
        { then: function() {
        }, status: "rejected", reason: z },
        bl()
      );
    } finally {
      K.p = n, i !== null && c.types !== null && (i.types = c.types), q.T = i;
    }
  }
  function nv() {
  }
  function of(t, l, e, u) {
    if (t.tag !== 5) throw Error(o(476));
    var a = Ks(t).queue;
    Vs(
      t,
      a,
      l,
      ue,
      e === null ? nv : function() {
        return Js(t), e(u);
      }
    );
  }
  function Ks(t) {
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
        lastRenderedReducer: me,
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
        lastRenderedReducer: me,
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
    return Zt(da);
  }
  function ws() {
    return Rt().memoizedState;
  }
  function $s() {
    return Rt().memoizedState;
  }
  function iv(t) {
    for (var l = t.return; l !== null; ) {
      switch (l.tag) {
        case 24:
        case 3:
          var e = bl();
          t = xe(e);
          var u = He(l, t, e);
          u !== null && (ol(u, l, e), Ba(u, l, e)), l = { cache: Yc() }, t.payload = l;
          return;
      }
      l = l.return;
    }
  }
  function cv(t, l, e) {
    var u = bl();
    e = {
      lane: u,
      revertLane: 0,
      gesture: null,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, ui(t) ? Fs(l, e) : (e = Cc(t, l, e, u), e !== null && (ol(e, t, u), Is(e, l, u)));
  }
  function Ws(t, l, e) {
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
            return Hn(t, l, a, 0), bt === null && xn(), !1;
        } catch {
        }
      if (e = Cc(t, l, a, u), e !== null)
        return ol(e, t, u), Is(e, l, u), !0;
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
      ), l !== null && ol(l, t, 2);
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
    readContext: Zt,
    use: Pn,
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
  }, ks = {
    readContext: Zt,
    use: Pn,
    useCallback: function(t, l) {
      return tl().memoizedState = [
        t,
        l === void 0 ? null : l
      ], t;
    },
    useContext: Zt,
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
      var e = tl();
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
      var u = tl();
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
      }, u.queue = t, t = t.dispatch = cv.bind(
        null,
        w,
        t
      ), [u.memoizedState, t];
    },
    useRef: function(t) {
      var l = tl();
      return t = { current: t }, l.memoizedState = t;
    },
    useState: function(t) {
      t = uf(t);
      var l = t.queue, e = Ws.bind(null, w, l);
      return l.dispatch = e, [t.memoizedState, e];
    },
    useDebugValue: cf,
    useDeferredValue: function(t, l) {
      var e = tl();
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
      ), tl().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, l, e) {
      var u = w, a = tl();
      if (I) {
        if (e === void 0)
          throw Error(o(407));
        e = e();
      } else {
        if (e = l(), bt === null)
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
      var t = tl(), l = bt.identifierPrefix;
      if (I) {
        var e = Vl, u = Zl;
        e = (u & ~(1 << 32 - dl(u) - 1)).toString(32) + e, l = "_" + l + "R_" + e, e = In++, 0 < e && (l += "H" + e.toString(32)), l += "_";
      } else
        e = tv++, l = "_" + l + "r_" + e.toString(32) + "_";
      return t.memoizedState = l;
    },
    useHostTransitionStatus: rf,
    useFormState: Rs,
    useActionState: Rs,
    useOptimistic: function(t) {
      var l = tl();
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
      return tl().memoizedState = iv.bind(
        null,
        w
      );
    },
    useEffectEvent: function(t) {
      var l = tl(), e = { impl: t };
      return l.memoizedState = e, function() {
        if ((ot & 2) !== 0)
          throw Error(o(440));
        return e.impl.apply(void 0, arguments);
      };
    }
  }, Ps = {
    readContext: Zt,
    use: Pn,
    useCallback: Xs,
    useContext: Zt,
    useEffect: nf,
    useImperativeHandle: Qs,
    useInsertionEffect: Ys,
    useLayoutEffect: qs,
    useMemo: Ls,
    useReducer: ti,
    useRef: Hs,
    useState: function() {
      return ti(me);
    },
    useDebugValue: cf,
    useDeferredValue: function(t, l) {
      var e = Rt();
      return Zs(
        e,
        gt.memoizedState,
        t,
        l
      );
    },
    useTransition: function() {
      var t = ti(me)[0], l = Rt().memoizedState;
      return [
        typeof t == "boolean" ? t : Xa(t),
        l
      ];
    },
    useSyncExternalStore: Ss,
    useId: ws,
    useHostTransitionStatus: rf,
    useFormState: Ds,
    useActionState: Ds,
    useOptimistic: function(t, l) {
      var e = Rt();
      return Os(e, gt, t, l);
    },
    useMemoCache: tf,
    useCacheRefresh: $s,
    useEffectEvent: Bs
  }, fv = {
    readContext: Zt,
    use: Pn,
    useCallback: Xs,
    useContext: Zt,
    useEffect: nf,
    useImperativeHandle: Qs,
    useInsertionEffect: Ys,
    useLayoutEffect: qs,
    useMemo: Ls,
    useReducer: ef,
    useRef: Hs,
    useState: function() {
      return ef(me);
    },
    useDebugValue: cf,
    useDeferredValue: function(t, l) {
      var e = Rt();
      return gt === null ? ff(e, t, l) : Zs(
        e,
        gt.memoizedState,
        t,
        l
      );
    },
    useTransition: function() {
      var t = ef(me)[0], l = Rt().memoizedState;
      return [
        typeof t == "boolean" ? t : Xa(t),
        l
      ];
    },
    useSyncExternalStore: Ss,
    useId: ws,
    useHostTransitionStatus: rf,
    useFormState: xs,
    useActionState: xs,
    useOptimistic: function(t, l) {
      var e = Rt();
      return gt !== null ? Os(e, gt, t, l) : (e.baseState = t, [t, e.queue.dispatch]);
    },
    useMemoCache: tf,
    useCacheRefresh: $s,
    useEffectEvent: Bs
  };
  function df(t, l, e, u) {
    l = t.memoizedState, e = e(u, l), e = e == null ? l : F({}, l, e), t.memoizedState = e, t.lanes === 0 && (t.updateQueue.baseState = e);
  }
  var yf = {
    enqueueSetState: function(t, l, e) {
      t = t._reactInternals;
      var u = bl(), a = xe(u);
      a.payload = l, e != null && (a.callback = e), l = He(t, a, u), l !== null && (ol(l, t, u), Ba(l, t, u));
    },
    enqueueReplaceState: function(t, l, e) {
      t = t._reactInternals;
      var u = bl(), a = xe(u);
      a.tag = 1, a.payload = l, e != null && (a.callback = e), l = He(t, a, u), l !== null && (ol(l, t, u), Ba(l, t, u));
    },
    enqueueForceUpdate: function(t, l) {
      t = t._reactInternals;
      var e = bl(), u = xe(e);
      u.tag = 2, l != null && (u.callback = l), l = He(t, u, e), l !== null && (ol(l, t, e), Ba(l, t, e));
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
      e === l && (e = F({}, e));
      for (var a in t)
        e[a] === void 0 && (e[a] = t[a]);
    }
    return e;
  }
  function ed(t) {
    Un(t);
  }
  function ud(t) {
    console.error(t);
  }
  function ad(t) {
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
    return e = xe(e), e.tag = 3, e.payload = { element: null }, e.callback = function() {
      ni(t, l);
    }, e;
  }
  function id(t) {
    return t = xe(t), t.tag = 3, t;
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
      nd(l, e, u), typeof a != "function" && (Le === null ? Le = /* @__PURE__ */ new Set([this]) : Le.add(this));
      var c = u.stack;
      this.componentDidCatch(u.value, {
        componentStack: c !== null ? c : ""
      });
    });
  }
  function ov(t, l, e, u, a) {
    if (e.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
      if (l = e.alternate, l !== null && ou(
        l,
        e,
        a,
        !0
      ), e = Vt.current, e !== null) {
        switch (e.tag) {
          case 31:
          case 13:
          case 19:
            return Wt === null ? _i() : e.alternate === null && Nt === 0 && (Nt = 3), e.flags &= -257, e.flags |= 65536, e.lanes = a, u === Kn ? e.flags |= 16384 : (l = e.updateQueue, l === null ? e.updateQueue = /* @__PURE__ */ new Set([u]) : l.add(u), kf(t, u, a)), !1;
          case 22:
            return e.flags |= 65536, u === Kn ? e.flags |= 16384 : (l = e.updateQueue, l === null ? (l = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([u])
            }, e.updateQueue = l) : (e = l.retryQueue, e === null ? l.retryQueue = /* @__PURE__ */ new Set([u]) : e.add(u)), kf(t, u, a)), !1;
        }
        throw Error(o(435, e.tag));
      }
      return kf(t, u, a), _i(), !1;
    }
    if (I)
      return l = Vt.current, l !== null ? ((l.flags & 65536) === 0 && (l.flags |= 256), l.flags |= 65536, l.lanes = a, u !== xc && (t = Error(o(422), { cause: u }), Da(_l(t, e)))) : (u !== xc && (l = Error(o(423), {
        cause: u
      }), Da(
        _l(l, e)
      )), t = t.current.alternate, t.flags |= 65536, a &= -a, t.lanes |= a, u = _l(u, e), a = mf(
        t.stateNode,
        u,
        a
      ), Zc(t, a), Nt !== 4 && (Nt = 2)), !1;
    var n = Error(o(520), { cause: u });
    if (n = _l(n, e), Fa === null ? Fa = [n] : Fa.push(n), Nt !== 4 && (Nt = 2), l === null) return !0;
    u = _l(u, e), e = l;
    do {
      switch (e.tag) {
        case 3:
          return e.flags |= 65536, t = a & -a, e.lanes |= t, t = mf(e.stateNode, u, t), Zc(e, t), !1;
        case 1:
          if (l = e.type, n = e.stateNode, (e.flags & 128) === 0 && (typeof l.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (Le === null || !Le.has(n))))
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
  var vf = Error(o(461)), xt = !1;
  function jt(t, l, e, u) {
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
    ), c = Ic(), t !== null && !xt ? (kc(t, l, a), ve(t, l, a)) : (I && c && qn(l), l.flags |= 1, jt(t, l, u, a), l.child);
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
        return ve(t, l, a);
    }
    return l.flags |= 1, t = oe(n, u), t.ref = l.ref, t.return = l, l.child = t;
  }
  function rd(t, l, e, u, a) {
    if (t !== null) {
      var n = t.memoizedProps;
      if (Ca(n, u) && t.ref === l.ref)
        if (xt = !1, l.pendingProps = u = n, zf(t, a))
          (t.flags & 131072) !== 0 && (xt = !0);
        else
          return l.lanes = t.lanes, ve(t, l, a);
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
      n !== null ? (Zn(l, n.cachePool), ms(l, n), Ye(), l.memoizedState = null) : (t !== null && Zn(l, null), Kc(), Ye());
    return jt(t, l, a, e), l.child;
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
    return n = n === null ? null : { parent: Dt._currentValue, pool: n }, l.memoizedState = {
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
  function rv(t, l, e) {
    var u = l.pendingProps, a = (l.flags & 128) !== 0;
    if (l.flags &= -129, t === null) {
      if (I) {
        if (u.mode === "hidden")
          return t = ii(l, u), l.lanes = 536870912, t.memoizedState = { baseLanes: 0, cachePool: null }, Za(null, t);
        if (wc(l), (t = pt) ? (t = G0(
          t,
          Ml
        ), t = t !== null && t.data === "&" ? t : null, t !== null && (l.memoizedState = {
          dehydrated: t,
          treeContext: Ne !== null ? { id: Zl, overflow: Vl } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, e = Fr(t), e.return = l, l.child = e, qt = l, pt = null)) : t = null, t === null) throw Me(l);
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
      else if (xt || ou(t, l, e, !1), a = (e & t.childLanes) !== 0, xt || a) {
        if (je.current === null) {
          if (u = bt, u !== null && (i = Po(u, e), i !== 0 && i !== n.retryLane))
            throw n.retryLane = i, nu(t, i), ol(u, t, i), vf;
          _i();
        }
        l = yd(
          t,
          l,
          e
        );
      } else
        t = n.treeContext, pt = Dl(i.nextSibling), qt = l, I = !0, Ce = null, Ml = !1, t !== null && Pr(l, t), l = ii(l, u), l.flags |= 134221824;
      return l;
    }
    return t = oe(t.child, {
      mode: u.mode,
      children: u.children
    }), t.ref = l.ref, l.child = t, t.return = l, t;
  }
  function $u(t, l) {
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
    ), u = Ic(), t !== null && !xt ? (kc(t, l, a), ve(t, l, a)) : (I && u && qn(l), l.flags |= 1, jt(t, l, e, a), l.child);
  }
  function md(t, l, e, u, a, n) {
    return ru(l), l.updateQueue = null, e = gs(
      l,
      u,
      e,
      a
    ), hs(t), u = Ic(), t !== null && !xt ? (kc(t, l, n), ve(t, l, n)) : (I && u && qn(l), l.flags |= 1, jt(t, l, e, n), l.child);
  }
  function vd(t, l, e, u, a) {
    if (ru(l), l.stateNode === null) {
      var n = qu, i = e.contextType;
      typeof i == "object" && i !== null && (n = Zt(i)), n = new e(u, n), l.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = yf, l.stateNode = n, n._reactInternals = l, n = l.stateNode, n.props = u, n.state = l.memoizedState, n.refs = {}, Xc(l), i = e.contextType, n.context = typeof i == "object" && i !== null ? Zt(i) : qu, n.state = l.memoizedState, i = e.getDerivedStateFromProps, typeof i == "function" && (df(
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
      i = qu, typeof T == "object" && T !== null && (i = Zt(T));
      var z = e.getDerivedStateFromProps;
      T = typeof z == "function" || typeof n.getSnapshotBeforeUpdate == "function", c = l.pendingProps !== c, T || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (c || g !== i) && ld(
        l,
        n,
        u,
        i
      ), Ue = !1;
      var v = l.memoizedState;
      n.state = v, qa(l, u, n, a), Ya(), g = l.memoizedState, c || v !== g || Ue ? (typeof z == "function" && (df(
        l,
        e,
        z,
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
      n = l.stateNode, Lc(t, l), i = l.memoizedProps, T = gu(e, i), n.props = T, z = l.pendingProps, v = n.context, g = e.contextType, r = qu, typeof g == "object" && g !== null && (r = Zt(g)), c = e.getDerivedStateFromProps, (g = typeof c == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (i !== z || v !== r) && ld(
        l,
        n,
        u,
        r
      ), Ue = !1, v = l.memoizedState, n.state = v, qa(l, u, n, a), Ya();
      var b = l.memoizedState;
      i !== z || v !== b || Ue || t !== null && t.dependencies !== null && Xn(t.dependencies) ? (typeof c == "function" && (df(
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
    return n = u, $u(t, l), u = (l.flags & 128) !== 0, n || u ? (n = l.stateNode, e = u && typeof e.getDerivedStateFromError != "function" ? null : n.render(), l.flags |= 1, t !== null && u ? (l.child = vu(
      l,
      t.child,
      null,
      a
    ), l.child = vu(
      l,
      null,
      e,
      a
    )) : jt(t, l, e, a), l.memoizedState = n.state, t = l.child) : t = ve(
      t,
      l,
      a
    ), t;
  }
  function hd(t, l, e, u) {
    return cu(), l.flags |= 256, jt(t, l, e, u), l.child;
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
    if ((i = n) || (i = t !== null && t.memoizedState === null ? !1 : (Kt.current & 2) !== 0), i && (a = !0, l.flags &= -129), i = (l.flags & 32) !== 0, l.flags &= -33, t === null) {
      if (I) {
        if (a ? Be(l) : Ye(), (t = pt) ? (t = G0(
          t,
          Ml
        ), t = t !== null && t.data !== "&" ? t : null, t !== null && (l.memoizedState = {
          dehydrated: t,
          treeContext: Ne !== null ? { id: Zl, overflow: Vl } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, e = Fr(t), e.return = l, l.child = e, qt = l, pt = null)) : t = null, t === null) throw Me(l);
        return bo(t) ? l.lanes = 32 : l.lanes = 536870912, null;
      }
      return n = u.children, u = u.fallback, a ? (Ye(), a = l.mode, n = ci(
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
      ), l.memoizedState = gf, Za(null, u)) : (Be(l), Tf(l, n));
    }
    var c = t.memoizedState;
    if (c !== null) {
      var r = c.dehydrated;
      if (r !== null)
        return sv(
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
    ), a.flags |= 2), a.return = l, u.return = l, u.sibling = a, l.child = u, Za(null, u), u = l.child, a = t.child.memoizedState, a === null ? a = Sf(e) : (n = a.cachePool, n !== null ? (c = Dt._currentValue, n = n.parent !== c ? { parent: c, pool: c } : n) : n = ns(), a = {
      baseLanes: a.baseLanes | e,
      cachePool: n
    }), u.memoizedState = a, u.childLanes = bf(
      t,
      i,
      e
    ), l.memoizedState = gf, Za(t.child, u)) : (Be(l), e = t.child, t = e.sibling, e = oe(e, {
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
    return t = nl(22, t, null, l), t.lanes = 0, t;
  }
  function fi(t, l, e) {
    return vu(l, t.child, null, e), t = Tf(
      l,
      l.pendingProps.children
    ), t.flags |= 2, l.memoizedState = null, t;
  }
  function sv(t, l, e, u, a, n, i, c) {
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
      ), n.flags |= 2, a.return = l, n.return = l, a.sibling = n, l.child = a, vu(l, t.child, null, c), a = l.child, a.memoizedState = Sf(c), a.childLanes = bf(
        t,
        u,
        c
      ), l.memoizedState = gf, Za(null, a));
    if (Be(l), bo(n)) {
      if (u = n.nextSibling && n.nextSibling.dataset, u) var r = u.dgst;
      return u = r, u !== "" && (a = Error(o(419)), a.stack = "", a.digest = u, Da({ value: a, source: null, stack: null })), fi(
        t,
        l,
        c
      );
    }
    if (xt || ou(t, l, c, !1), u = (c & t.childLanes) !== 0, xt || u) {
      if (je.current !== null)
        return fi(
          t,
          l,
          c
        );
      if (u = bt, u !== null && (a = Po(
        u,
        c
      ), a !== 0 && a !== i.retryLane))
        throw i.retryLane = a, nu(t, a), ol(u, t, a), vf;
      return So(n) || _i(), fi(
        t,
        l,
        c
      );
    }
    return So(n) ? (l.flags |= 192, l.child = t.child, null) : (t = i.treeContext, pt = Dl(n.nextSibling), qt = l, I = !0, Ce = null, Ml = !1, t !== null && Pr(l, t), l = Tf(
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
      e !== null && Wn(e) === null && (l = t), t = t.sibling;
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
    var i = Kt.current;
    if (l.flags & 128)
      return Ga(l, i), null;
    var c = (i & 2) !== 0;
    if (c ? (i = i & 1 | 2, l.flags |= 128) : i &= 1, Ga(l, i), a === "backwards" && t !== null ? (pf(t), jt(t, l, u, e), pf(t)) : jt(t, l, u, e), u = I ? Ra : 0, !c && t !== null && (t.flags & 128) !== 0)
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
          if (t = a.alternate, t !== null && Wn(t) === null) {
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
    return Re(l, l.type, u.value), jt(t, l, u.children, e), l.child;
  }
  function ve(t, l, e) {
    if (t !== null && (l.dependencies = t.dependencies), Xe |= l.lanes, (e & l.childLanes) === 0)
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
    return (t.lanes & l) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && Xn(t)));
  }
  function dv(t, l, e) {
    switch (l.tag) {
      case 3:
        mn(l, l.stateNode.containerInfo), Re(l, Dt, t.memoizedState.cache), cu();
        break;
      case 27:
      case 5:
        Wi(l);
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
            return Be(l), l.flags |= 128, null;
          u = ou(
            t,
            l,
            e,
            !1
          );
          var a = l.child.childLanes;
          return u || (e & a) !== 0 ? gd(t, l, e) : (Be(l), t = ve(
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
        if (a = l.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), Ga(l, Kt.current), u) break;
        return null;
      case 22:
        return l.lanes = 0, sd(
          t,
          l,
          e,
          l.pendingProps
        );
      case 24:
        Re(l, Dt, t.memoizedState.cache);
    }
    return ve(t, l, e);
  }
  function pd(t, l, e) {
    if (t !== null)
      if (t.memoizedProps !== l.pendingProps)
        xt = !0;
      else {
        if (!zf(t, e) && (l.flags & 128) === 0)
          return xt = !1, dv(
            t,
            l,
            e
          );
        xt = (t.flags & 131072) !== 0;
      }
    else
      xt = !1, I && (l.flags & 1048576) !== 0 && kr(l, Ra, l.index);
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
              if (a === R) {
                l.tag = 11, l = fd(
                  null,
                  l,
                  t,
                  u,
                  e
                );
                break t;
              } else if (a === St) {
                l.tag = 14, l = od(
                  null,
                  l,
                  t,
                  u,
                  e
                );
                break t;
              } else if (a === Bt) {
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
          if (u = i.cache, Re(l, Dt, u), u !== n.cache && Bc(
            l,
            [Dt],
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
              a = _l(
                Error(o(424)),
                l
              ), Da(a), l = hd(
                t,
                l,
                u,
                e
              );
              break t;
            } else
              for (t = l.stateNode.containerInfo, t.nodeType === 9 ? t = t.body : t = t.nodeName === "HTML" ? t.ownerDocument.body : t, pt = Dl(t.firstChild), qt = l, I = !0, Ce = null, Ml = !0, e = ss(
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
            jt(t, l, u, e);
          }
          l = l.child;
        }
        return l;
      case 26:
        return $u(t, l), t === null ? (e = J0(
          l.type,
          null,
          l.pendingProps,
          null
        )) ? l.memoizedState = e : I || (l.stateNode = A0(
          l.type,
          l.pendingProps,
          Ee.current,
          l
        )) : l.memoizedState = J0(
          l.type,
          t.memoizedProps,
          l.pendingProps,
          t.memoizedState
        ), null;
      case 27:
        return Wi(l), t === null && I && (u = l.stateNode = L0(
          l.type,
          l.pendingProps,
          Ee.current
        ), qt = l, Ml = !0, a = pt, Ke(l.type) ? (To = a, pt = Dl(u.firstChild)) : pt = a), jt(
          t,
          l,
          l.pendingProps.children,
          e
        ), $u(t, l), t === null && (l.flags |= 4194304), l.child;
      case 5:
        return t === null && I && ((a = u = pt) && (u = ih(
          u,
          l.type,
          l.pendingProps,
          Ml
        ), u !== null ? (l.stateNode = u, qt = l, pt = Dl(u.firstChild), Ml = !1, a = !0) : a = !1), a || Me(l)), Wi(l), a = l.type, n = l.pendingProps, i = t !== null ? t.memoizedProps : null, u = n.children, ro(a, n) ? u = null : i !== null && ro(a, i) && (l.flags |= 32), l.memoizedState !== null && (a = Fc(
          t,
          l,
          lv,
          null,
          null,
          e
        ), da._currentValue = a), $u(t, l), jt(t, l, u, e), l.child;
      case 6:
        return t === null && I && ((t = e = pt) && (e = ch(
          e,
          l.pendingProps,
          Ml
        ), e !== null ? (l.stateNode = e, qt = l, pt = null, t = !0) : t = !1), t || Me(l)), null;
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
        ) : jt(t, l, u, e), l.child;
      case 11:
        return fd(
          t,
          l,
          l.type,
          l.pendingProps,
          e
        );
      case 7:
        return u = l.pendingProps, $u(t, l), jt(t, l, u, e), l.child;
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
        return Td(t, l, e);
      case 9:
        return a = l.type._context, u = l.pendingProps.children, ru(l), a = Zt(a), u = u(a), l.flags |= 1, jt(t, l, u, e), l.child;
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
        return rv(t, l, e);
      case 22:
        return sd(
          t,
          l,
          e,
          l.pendingProps
        );
      case 24:
        return ru(l), u = Zt(Dt), t === null ? (a = Gc(), a === null && (a = bt, n = Yc(), a.pooledCache = n, n.refCount++, n !== null && (a.pooledCacheLanes |= e), a = n), l.memoizedState = { parent: u, cache: a }, Xc(l), Re(l, Dt, a)) : ((t.lanes & e) !== 0 && (Lc(t, l), qa(l, null, null, e), Ya()), a = t.memoizedState, n = l.memoizedState, a.parent !== u ? (a = { parent: u, cache: u }, l.memoizedState = a, l.lanes === 0 && (l.memoizedState = l.updateQueue.baseState = a), Re(l, Dt, u)) : (u = n.cache, Re(l, Dt, u), u !== a.cache && Bc(
          l,
          [Dt],
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
        }), u = l.pendingProps, u.name != null && u.name !== "auto" ? l.flags |= t === null ? 18882560 : 18874368 : I && qn(l), t !== null && t.memoizedProps.name !== u.name ? l.flags |= 4194816 : $u(t, l), jt(t, l, u.children, e), l.child;
      case 29:
        throw l.pendingProps;
    }
    throw Error(o(156, l.tag));
  }
  function he(t) {
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
    if (!I)
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
  function yv(t, l, e) {
    var u = l.pendingProps;
    switch (Uc(l), l.tag) {
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
        return e = l.stateNode, u = null, t !== null && (u = t.memoizedState.cache), l.memoizedState.cache !== u && (l.flags |= 2048), de(Dt), Au(), e.pendingContext && (e.context = e.pendingContext, e.pendingContext = null), (t === null || t.child === null) && (Xu(l) ? he(l) : t === null || t.memoizedState.isDehydrated && (l.flags & 256) === 0 || (l.flags |= 1024, Hc())), Et(l), null;
      case 26:
        var a = l.type, n = l.memoizedState;
        return t === null ? (he(l), n !== null ? (Et(l), Ed(l, n)) : (Et(l), Of(
          l,
          a,
          null,
          u,
          e
        ))) : n ? n !== t.memoizedState ? (he(l), Et(l), Ed(l, n)) : (Et(l), l.flags &= -16777217) : (t = t.memoizedProps, t !== u && he(l), Et(l), Of(
          l,
          a,
          t,
          u,
          e
        )), null;
      case 27:
        if (vn(l), e = Ee.current, a = l.type, t !== null && l.stateNode != null)
          t.memoizedProps !== u && he(l);
        else {
          if (!u) {
            if (l.stateNode === null)
              throw Error(o(166));
            return Et(l), l.subtreeFlags &= -33554433, null;
          }
          t = Xl.current, Xu(l) ? ts(l) : (t = L0(a, u, e), l.stateNode = t, he(l));
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
          if (n = Xl.current, Xu(l))
            ts(l);
          else {
            var i = ln(
              Ee.current
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
            n[Lt] = l, n[al] = u;
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
            t: switch (wt(n, a, u), a) {
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
        return Et(l), l.subtreeFlags &= -33554433, Of(
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
          if (t = Ee.current, Xu(l)) {
            if (t = l.stateNode, e = l.memoizedProps, u = null, a = qt, a !== null)
              switch (a.tag) {
                case 27:
                case 5:
                  u = a.memoizedProps;
              }
            t[Lt] = l, t = !!(t.nodeValue === e || u !== null && u.suppressHydrationWarning === !0 || p0(t.nodeValue, e)), t || Me(l, !0);
          } else
            t = ln(t).createTextNode(
              u
            ), t[Lt] = l, l.stateNode = t;
        }
        return Et(l), null;
      case 31:
        if (e = l.memoizedState, t === null || t.memoizedState !== null) {
          if (u = Xu(l), e !== null) {
            if (t === null) {
              if (!u) throw Error(o(318));
              if (t = l.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(o(557));
              t[Lt] = l;
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
          if (a = Xu(l), u !== null && u.dehydrated !== null) {
            if (t === null) {
              if (!a) throw Error(o(318));
              if (a = l.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(o(317));
              a[Lt] = l;
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
        return Au(), t === null && no(l.stateNode.containerInfo), l.flags |= 67108864, Et(l), null;
      case 10:
        return de(l.type), Et(l), null;
      case 19:
        if ($c(l), u = l.memoizedState, u === null) return Et(l), null;
        if (a = (l.flags & 128) !== 0, n = u.rendering, n === null)
          if (a) Va(u, !1);
          else {
            if (Nt !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = l.child; t !== null; ) {
                if (n = Wn(t), n !== null) {
                  for (l.flags |= 128, Va(u, !1), t = n.updateQueue, l.updateQueue = t, ri(l, t), l.subtreeFlags = 0, t = e, e = l.child; e !== null; )
                    Wr(e, t), e = e.sibling;
                  return Ga(
                    l,
                    Kt.current & 1 | 2
                  ), I && re(l, u.treeForkCount), l.child;
                }
                t = t.sibling;
              }
            u.tail !== null && rl() > Ei && (l.flags |= 128, a = !0, Va(u, !1), l.lanes = 4194304);
          }
        else {
          if (!a)
            if (t = Wn(n), t !== null) {
              if (l.flags |= 128, a = !0, t = t.updateQueue, l.updateQueue = t, ri(l, t), Va(u, !0), u.tail === null && u.tailMode !== "collapsed" && u.tailMode !== "visible" && !n.alternate && !I)
                return Et(l), null;
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
          return u.rendering = t, u.tail = t.sibling, u.renderingStartTime = rl(), t.sibling = null, n = Kt.current, n = a ? n & 1 | 2 : n & 1, u.tailMode === "visible" || u.tailMode === "collapsed" || !e || I ? Ga(l, n) : (e = n, Tt(Vt, l), Tt(Kt, e), Wt === null && (Wt = l)), I && re(l, u.treeForkCount), t;
        }
        return Et(l), null;
      case 22:
      case 23:
        return vl(l), Jc(), u = l.memoizedState !== null, t !== null ? t.memoizedState !== null !== u && (l.flags |= 8192) : u && (l.flags |= 8192), u ? (e & 536870912) !== 0 && (l.flags & 128) === 0 && (Et(l), l.subtreeFlags & 6 && (l.flags |= 8192)) : Et(l), e = l.updateQueue, e !== null && ri(l, e.retryQueue), e = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), u = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), u !== e && (l.flags |= 2048), t !== null && Xt(du), null;
      case 24:
        return e = null, t !== null && (e = t.memoizedState.cache), l.memoizedState.cache !== e && (l.flags |= 2048), de(Dt), Et(l), null;
      case 25:
        return null;
      case 30:
        return l.flags |= 33554432, Et(l), null;
    }
    throw Error(o(156, l.tag));
  }
  function mv(t, l) {
    switch (Uc(l), l.tag) {
      case 1:
        return t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
      case 3:
        return de(Dt), Au(), t = l.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (l.flags = t & -65537 | 128, l) : null;
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
        return $c(l), t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, t = l.memoizedState, t !== null && (t.rendering = null, t.tail = null), l.flags |= 4, l) : null;
      case 4:
        return Au(), null;
      case 10:
        return de(l.type), null;
      case 22:
      case 23:
        return vl(l), Jc(), t !== null && Xt(du), t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
      case 24:
        return de(Dt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function zd(t, l) {
    switch (Uc(l), l.tag) {
      case 3:
        de(Dt), Au();
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
        $c(l);
        break;
      case 10:
        de(l.type);
        break;
      case 22:
      case 23:
        vl(l), Jc(), t !== null && Xt(du);
        break;
      case 24:
        de(Dt);
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
  function Ad(t, l, e) {
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
            (a.ref === null || a.ref.name !== n) && (a.ref = U0(n)), u = a.ref;
            break;
          case 7:
            if (t.stateNode === null) {
              var i = new Tl(t);
              p(
                t.child,
                !1,
                ah,
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
  function Jt(t, l) {
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
  function _d(t) {
    for (var l = t.return; l !== null && (_f(l) && q0(t.stateNode, l.stateNode), !Af(l)); )
      l = l.return;
  }
  function Ja(t) {
    for (var l = t.return; l !== null && (_f(l) && nh(t.stateNode, l.stateNode), !Af(l)); )
      l = l.return;
  }
  function Af(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 27;
  }
  function _f(t) {
    return t && t.tag === 7 && t.stateNode !== null;
  }
  function Nf(t) {
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
      Qv(u, t.type, e, l), u[al] = l;
    } catch (a) {
      vt(t, t.return, a);
    }
  }
  function Nd(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && Ke(t.type) || t.tag === 4;
  }
  function Mf(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || Nd(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && Ke(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Rf(t, l, e, u) {
    var a = t.tag;
    if (a === 5 || a === 6)
      a = t.stateNode, l ? (e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e).insertBefore(a, l) : (l = e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, l.appendChild(a), e = e._reactRootContainer, e != null || l.onclick !== null || (l.onclick = Ll)), si(t, u), it = !0;
    else if (a !== 4 && (a === 27 && (si(t, u), u = null, Ke(t.type) && (e = t.stateNode, l = null)), t = t.child, t !== null))
      for (Rf(
        t,
        l,
        e,
        u
      ), t = t.sibling; t !== null; )
        Rf(
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
  function Cd(t) {
    var l = t.stateNode, e = t.memoizedProps;
    try {
      for (var u = t.type, a = l.attributes; a.length; )
        l.removeAttributeNode(a[0]);
      wt(l, u, e), l[Lt] = t, l[al] = e;
    } catch (n) {
      vt(t, t.return, n);
    }
  }
  var yi = !1, hl = null;
  function Md(t) {
    (t.tag === 30 || (t.subtreeFlags & 33554432) !== 0) && (yi = !0);
  }
  var Jl = null;
  function Rd() {
    var t = Jl;
    return Jl = null, t;
  }
  var il = 0;
  function Wu(t, l, e, u, a) {
    return il = 0, Dd(
      t.child,
      l,
      e,
      u,
      a
    );
  }
  function Dd(t, l, e, u, a) {
    for (var n = !1; t !== null; ) {
      if (t.tag === 5) {
        var i = t.stateNode;
        if (u !== null) {
          var c = mo(i);
          u.push(c), c.view && (n = !0);
        } else
          n || mo(i).view && (n = !0);
        yi = !0, R0(
          i,
          il === 0 ? l : l + "_" + il,
          e
        ), il++;
      } else (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && a || Dd(
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
      t.tag === 5 ? D0(t.stateNode, t.memoizedProps) : (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && l || wl(
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
          l = fe(l.default, l.share), l !== "none" && (Wu(
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
  function Df(t, l) {
    if (t.tag === 30) {
      var e = t.stateNode, u = t.memoizedProps, a = ce(u, e), n = fe(
        u.default,
        e.paired ? u.share : u.enter
      );
      n !== "none" ? Wu(t, a, n, null, !1) ? (mi(t), e.paired || l || ua(t, u.onEnter)) : wl(t.child, !1) : mi(t);
    } else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null; )
        Df(t, l), t = t.sibling;
    else mi(t);
  }
  function Uf(t) {
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
                  if (n !== "none" && (Wu(
                    t,
                    u,
                    n,
                    null,
                    !1
                  ) ? (n = t.stateNode, a.paired = n, n.paired = a, ua(t, e.onShare)) : wl(t.child, !1)), l.delete(u), l.size === 0) break;
                }
              }
            }
            Uf(t);
          }
          t = t.sibling;
        }
    }
  }
  function xf(t) {
    if (t.tag === 30) {
      var l = t.memoizedProps, e = ce(l, t.stateNode), u = hl !== null ? hl.get(e) : void 0, a = fe(
        l.default,
        u !== void 0 ? l.share : l.exit
      );
      a !== "none" && (Wu(t, e, a, null, !1) ? u !== void 0 ? (a = t.stateNode, u.paired = a, a.paired = u, hl.delete(e), ua(t, l.onShare)) : ua(t, l.onExit) : wl(t.child, !1)), hl !== null && Uf(t);
    } else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null; )
        xf(t), t = t.sibling;
    else
      hl !== null && Uf(t);
  }
  function Ud(t) {
    for (t = t.child; t !== null; ) {
      if (t.tag === 30) {
        var l = t.memoizedProps, e = ce(l, t.stateNode);
        l = fe(l.default, l.update), t.flags &= -5, l !== "none" && Wu(
          t,
          e,
          l,
          t.memoizedState = [],
          !1
        );
      } else
        (t.subtreeFlags & 33554432) !== 0 && Ud(t);
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
  function xd(t) {
    for (t = t.child; t !== null; )
      t.tag === 30 ? wl(t.child, !1) : (t.subtreeFlags & 33554432) !== 0 && xd(t), t = t.sibling;
  }
  function jf(t, l, e, u, a, n, i) {
    for (var c = !1; l !== null; ) {
      if (l.tag === 5) {
        var r = l.stateNode;
        if (n !== null && il < n.length) {
          var g = n[il], T = mo(r);
          (g.view || T.view) && (c = !0);
          var z;
          if (z = (t.flags & 4) === 0)
            if (T.clip) z = !0;
            else {
              z = g.rect;
              var v = T.rect;
              z = z.y !== v.y || z.x !== v.x || z.height !== v.height || z.width !== v.width;
            }
          z && (t.flags |= 4), T.abs ? T = !g.abs : (g = g.rect, T = T.rect, T = g.height !== T.height || g.width !== T.width), T && (t.flags |= 32);
        } else t.flags |= 32;
        (t.flags & 4) !== 0 && R0(
          r,
          il === 0 ? e : e + "_" + il,
          a
        ), c && (t.flags & 4) !== 0 || (Jl === null && (Jl = []), Jl.push(
          r,
          il === 0 ? u : u + "_" + il,
          l.memoizedProps
        )), il++;
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
        var e = t.memoizedProps, u = t.stateNode, a = ce(e, u), n = fe(e.default, e.update), i;
        i = t.memoizedState, t.memoizedState = null, u = t;
        var c = t.child;
        il = 0, a = jf(
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
  var Gt = !1, dt = !1, $l = !1, Bf = !1, jd = typeof WeakSet == "function" ? WeakSet : Set, Qt = null, Wl = !1, wa = !1, hi = !1, Yf = !1;
  function vv(t, l, e) {
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
            var c = 0, r = -1, g = -1, T = 0, z = 0, v = t, b = null;
            l: for (; ; ) {
              for (var C; v !== u || n !== 0 && v.nodeType !== 3 || (r = c + n), v !== i || a !== 0 && v.nodeType !== 3 || (g = c + a), v.nodeType === 3 && (c += v.nodeValue.length), (C = v.firstChild) !== null; )
                b = v, v = C;
              for (; ; ) {
                if (v === t) break l;
                if (b === u && ++T === n && (r = c), b === i && ++z === a && (g = c), (C = v.nextSibling) !== null) break;
                v = b, b = v.parentNode;
              }
              v = C;
            }
            u = r === -1 || g === -1 ? null : { start: r, end: g };
          } else u = null;
        }
      u = u || { start: 0, end: 0 };
    } else u = null;
    for (oo = { focusedElem: t, selectionRange: u }, ya = !1, e = (e & 335544064) === e, Qt = l, l = e ? 9270 : 1024; Qt !== null; ) {
      if (t = Qt, e && (u = t.deletions, u !== null))
        for (n = 0; n < u.length; n++)
          e && xf(u[n]);
      if (t.alternate === null && (t.flags & 2) !== 0)
        e && Md(t), gi(e);
      else {
        if (t.tag === 22) {
          if (u = t.alternate, t.memoizedState !== null) {
            u !== null && u.memoizedState === null && e && xf(u), gi(e);
            continue;
          } else if (u !== null && u.memoizedState !== null) {
            e && Md(t), gi(e);
            continue;
          }
        }
        u = t.child, (t.subtreeFlags & l) !== 0 && u !== null ? (u.return = t, Qt = u) : (e && Ud(t), gi(e));
      }
    }
    hl = null;
  }
  function gi(t) {
    for (; Qt !== null; ) {
      var l = Qt, e = t, u = l.alternate, a = l.flags;
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
          e && u !== null && (e = ce(
            u.memoizedProps,
            u.stateNode
          ), a = l.memoizedProps, a = fe(a.default, a.update), a !== "none" && Wu(
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
        u.return = l.return, Qt = u;
        break;
      }
      Qt = l.return;
    }
  }
  function Bd(t, l, e) {
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
        u & 64 && Od(e), u & 512 && Kl(e, e.return);
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
        Fl(t, e), l === null && u & 4 && Nf(e), u & 512 && Kl(e, e.return);
        break;
      case 12:
        Fl(t, e);
        break;
      case 31:
        Fl(t, e), u & 4 && Qd(t, e);
        break;
      case 13:
        Fl(t, e), u & 4 && Xd(t, e), u & 64 && (t = e.memoizedState, t !== null && (t = t.dehydrated, t !== null && (e = Nv.bind(
          null,
          e
        ), fh(t, e))));
        break;
      case 22:
        if (u = e.memoizedState !== null || Gt, !u) {
          var n = l !== null && l.memoizedState !== null || dt;
          l = Gt, a = dt, Gt = u, (dt = n) && !a ? (u = 2, (e.subtreeFlags & 8772) !== 0 && (u |= 1), Yl(
            t,
            e,
            u
          )) : Fl(t, e), Gt = l, dt = a;
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
  var zt = null, cl = !1;
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
        dt || Jt(e, l), jl(
          t,
          l,
          e
        ), e.memoizedState ? e.memoizedState.count-- : e.stateNode && !dt && (e = e.stateNode, e.parentNode.removeChild(e));
        break;
      case 27:
        dt || Jt(e, l), Ja(e);
        var u = zt, a = cl;
        Ke(e.type) && (zt = e.stateNode, cl = !1), jl(
          t,
          l,
          e
        ), Z0(
          e.stateNode,
          e.type,
          e.memoizedProps
        ), zt = u, cl = a;
        break;
      case 5:
        dt || Jt(e, l), Ja(e);
      case 6:
        if (e.tag === 6 && Ja(e), u = zt, a = cl, zt = null, jl(
          t,
          l,
          e
        ), zt = u, cl = a, zt !== null)
          if (cl)
            try {
              (zt.nodeType === 9 ? zt.body : zt.nodeName === "HTML" ? zt.ownerDocument.body : zt).removeChild(e.stateNode), it = !0;
            } catch (n) {
              vt(
                e,
                l,
                n
              );
            }
          else
            try {
              zt.removeChild(e.stateNode), it = !0;
            } catch (n) {
              vt(
                e,
                l,
                n
              );
            }
        break;
      case 18:
        zt !== null && (cl ? (t = zt, C0(
          t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
          e.stateNode
        ), ma(t)) : C0(zt, e.stateNode));
        break;
      case 4:
        u = zt, a = cl, zt = e.stateNode.containerInfo, cl = !0, jl(
          t,
          l,
          e
        ), zt = u, cl = a;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        qe(2, e, l), dt || qe(4, e, l), jl(
          t,
          l,
          e
        );
        break;
      case 1:
        dt || (Jt(e, l), u = e.stateNode, typeof u.componentWillUnmount == "function" && Ad(
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
        dt = (u = dt) || e.memoizedState !== null, jl(
          t,
          l,
          e
        ), dt = u;
        break;
      case 30:
        Jt(e, l), jl(
          t,
          l,
          e
        );
        break;
      case 7:
        dt || Jt(e, l), jl(
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
  function hv(t) {
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
    var e = hv(t);
    l.forEach(function(u) {
      if (!e.has(u)) {
        e.add(u);
        var a = Cv.bind(null, t, u);
        u.then(a, a);
      }
    });
  }
  function ll(t, l, e) {
    var u = l.deletions;
    if (u !== null)
      for (var a = 0; a < u.length; a++) {
        var n = u[a], i = t, c = l, r = c;
        t: for (; r !== null; ) {
          switch (r.tag) {
            case 27:
              if (Ke(r.type)) {
                zt = r.stateNode, cl = !1;
                break t;
              }
              break;
            case 5:
              zt = r.stateNode, cl = !1;
              break t;
            case 3:
            case 4:
              zt = r.stateNode.containerInfo, cl = !0;
              break t;
          }
          r = r.return;
        }
        if (zt === null) throw Error(o(160));
        Gd(i, c, n), zt = null, cl = !1, i = n.alternate, i !== null && (i.return = null), n.return = null;
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
        ll(l, t, e), el(t), a & 4 && (qe(3, t, t.return), Ka(3, t), qe(5, t, t.return));
        break;
      case 1:
        ll(l, t, e), el(t), a & 512 && (dt || u === null || Jt(u, u.return)), a & 64 && Gt && (t = t.updateQueue, t !== null && (l = t.callbacks, l !== null && (e = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = e === null ? l : e.concat(l))));
        break;
      case 26:
        if (n = Bl, ll(l, t, e), el(t), a & 512 && (dt || u === null || Jt(u, u.return)), a & 4)
          if (a = u !== null ? u.memoizedState : null, e = t.memoizedState, u === null)
            if (e === null)
              if (t.stateNode === null)
                if (Gt)
                  t.stateNode = A0(
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
                        u = a.getElementsByTagName("title")[0], (!u || u[ba] || u[Lt] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = a.createElement(l), a.head.insertBefore(
                          u,
                          a.querySelector("head > title")
                        )), wt(u, l, e), u[Lt] = t, Yt(u), l = u;
                        break t;
                      case "link":
                        if (n = W0(
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
                        u = a.createElement(l), wt(u, l, e), a.head.appendChild(u);
                        break;
                      case "meta":
                        if (n = W0(
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
                        u = a.createElement(l), wt(u, l, e), a.head.appendChild(u);
                        break;
                      default:
                        throw Error(o(468, l));
                    }
                    u[Lt] = t, Yt(u), l = u;
                  }
                  t.stateNode = l;
                }
              else
                Gt || Oo(n, t.type, t.stateNode);
            else
              t.stateNode = $0(
                n,
                e,
                t.memoizedProps
              );
          else
            a !== e ? (a === null ? (l = u.stateNode, l === null || dt || l.parentNode.removeChild(l)) : a.count--, e === null ? Gt || Oo(n, t.type, t.stateNode) : $0(n, e, t.memoizedProps)) : e === null && t.stateNode !== null && Cf(
              t,
              t.memoizedProps,
              u.memoizedProps
            );
        break;
      case 27:
        ll(l, t, e), el(t), a & 512 && (dt || u === null || Jt(u, u.return)), u !== null && a & 4 && Cf(
          t,
          t.memoizedProps,
          u.memoizedProps
        );
        break;
      case 5:
        if (n = $l, $l = !1, ll(l, t, e), $l = n, el(t), a & 512 && (dt || u === null || Jt(u, u.return)), t.flags & 32) {
          l = t.stateNode;
          try {
            Du(l, ""), it = !0;
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
        if (ll(l, t, e), el(t), a & 4) {
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
        if (it = !1, xi = null, n = Bl, Bl = en(l.containerInfo), ll(l, t, e), Bl = n, el(t), a & 4 && u !== null && u.memoizedState.isDehydrated)
          try {
            ma(l.containerInfo);
          } catch (T) {
            vt(t, t.return, T);
          }
        Bf && (Bf = !1, Zd(t)), it = !1;
        break;
      case 4:
        a = $l, $l = Gt, u = or(), n = Bl, Bl = en(
          t.stateNode.containerInfo
        ), ll(l, t, e), el(t), Bl = n, it && wa && (hi = !0), it = u, $l = a;
        break;
      case 12:
        ll(l, t, e), el(t);
        break;
      case 31:
        ll(l, t, e), el(t), a & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, Si(t, l)));
        break;
      case 13:
        ll(l, t, e), el(t), t.child.flags & 8192 && t.memoizedState !== null != (u !== null && u.memoizedState !== null) && (pi = rl()), a & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, Si(t, l)));
        break;
      case 22:
        n = t.memoizedState !== null, i = u !== null && u.memoizedState !== null;
        var c = Gt, r = dt, g = $l;
        Gt = c || n, $l = g || n, dt = r || i, ll(l, t, e), dt = r, $l = g, Gt = c, el(t), a & 8192 && (l = t.stateNode, l._visibility = n ? l._visibility & -2 : l._visibility | 1, !n || u === null || i || Gt || dt || (l = i || dt, e = Gt, u = dt, Gt = n || Gt, dt = l, Ge(t, 2), Gt = e, dt = u), !n && $l || qf(t, n)), a & 4 && (l = t.updateQueue, l !== null && (e = l.retryQueue, e !== null && (l.retryQueue = null, Si(t, e))));
        break;
      case 19:
        ll(l, t, e), el(t), a & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, Si(t, l)));
        break;
      case 30:
        a & 512 && (dt || u === null || Jt(u, u.return)), a = or(), n = wa, i = (e & 335544064) === e, c = t.memoizedProps, wa = i && fe(
          c.default,
          c.update
        ) !== "none", ll(l, t, e), el(t), i && u !== null && it && (t.flags |= 4), wa = n, it = a;
        break;
      case 21:
        break;
      case 7:
        a & 512 && (dt || u === null || Jt(u, u.return)), u && u.stateNode !== null && (u.stateNode._fragmentFiber = t);
      default:
        ll(l, t, e), el(t);
    }
  }
  function el(t) {
    var l = t.flags;
    if (l & 2) {
      try {
        for (var e, u = t.return; u !== null; ) {
          if (Nd(u)) {
            e = u;
            break;
          }
          u = u.return;
        }
        u = null;
        for (var a = t.return; a !== null; ) {
          if (_f(a)) {
            var n = a.stateNode;
            u === null ? u = [n] : u.push(n);
          }
          if (Af(a)) break;
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
            e.flags & 32 && (Du(g, ""), e.flags &= -33);
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
            var z = e.stateNode.containerInfo, v = Mf(t);
            Rf(
              t,
              v,
              z,
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
    if (e === null) Df(t, !1);
    else
      switch (t.tag) {
        case 3:
          if (Yf = Wl = !1, Rd(), Fu(l, t), !Wl && !hi) {
            if (t = Jl, t !== null)
              for (var u = 0; u < t.length; u += 3) {
                e = t[u];
                var a = t[u + 1];
                D0(e, t[u + 2]), e = e.ownerDocument.documentElement, e !== null && e.animate(
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
          Jl = null;
          break;
        case 5:
          Fu(l, t);
          break;
        case 4:
          u = Wl, Wl = !1, Fu(l, t), Wl && (hi = !0), Wl = u;
          break;
        case 22:
          t.memoizedState === null && (e.memoizedState !== null ? Df(t, !1) : Fu(l, t));
          break;
        case 30:
          u = Wl, a = Rd(), Wl = !1, Fu(l, t), Wl && (t.flags |= 4);
          var n = t.memoizedProps, i = t.stateNode;
          l = ce(n, i), i = ce(e.memoizedProps, i);
          var c = fe(n.default, n.update);
          c === "none" ? l = !1 : (n = e.memoizedState, e.memoizedState = null, e = t.child, il = 0, l = jf(
            t,
            e,
            l,
            i,
            c,
            n,
            !0
          ), il !== (n === null ? 0 : n.length) && (t.flags |= 32)), (t.flags & 4) !== 0 && l ? (ua(
            t,
            t.memoizedProps.onUpdate
          ), Jl = a) : a !== null && (a.push.apply(a, Jl), Jl = a), Wl = (t.flags & 32) !== 0 ? !0 : u;
          break;
        default:
          Fu(l, t);
      }
  }
  function Fl(t, l) {
    if (l.subtreeFlags & 8772)
      for (l = l.child; l !== null; )
        Bd(t, l.alternate, l), l = l.sibling;
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
          Jt(e, e.return);
          var a = e.stateNode;
          typeof a.componentWillUnmount == "function" && Ad(
            e,
            e.return,
            a
          ), Ge(
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
          Jt(e, e.return), e.tag !== 5 && e.tag !== 27 || Ja(e), Ge(
            e,
            u
          );
          break;
        case 6:
          Ja(e);
          break;
        case 26:
          Jt(e, e.return), a = e.stateNode, e.memoizedState !== null || a === null || dt || a.parentNode.removeChild(a), Ge(
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
          Jt(e, e.return), Ge(
            e,
            u
          );
          break;
        case 7:
          Jt(e, e.return);
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
          c && i & 64 && Od(n), Kl(n, n.return);
          break;
        case 27:
          (e & 2) !== 0 && Cd(n);
        case 5:
          n.tag !== 5 && n.tag !== 27 || _d(n), Yl(
            a,
            n,
            e
          ), c && u === null && i & 4 && Nf(n), Kl(n, n.return);
          break;
        case 6:
          _d(n);
          break;
        case 26:
          r = n.stateNode, n.memoizedState !== null || r === null || Gt || Oo(
            en(r.ownerDocument),
            n.type,
            r
          ), Yl(
            a,
            n,
            e
          ), c && u === null && i & 4 && Nf(n), Kl(n, n.return);
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
  function Qf(t, l) {
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
        Kd(
          t,
          l,
          e,
          u
        ), l = l.sibling;
    else a && xd(l);
  }
  function Kd(t, l, e, u) {
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
        ), a && Yf && (t = t.containerInfo, t = t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, t.style.viewTransitionName === "root" && (t.style.viewTransitionName = ""), t = t.ownerDocument.documentElement, t !== null && t.style.viewTransitionName === "none" && (t.style.viewTransitionName = "")), n & 2048 && (n = null, l.alternate !== null && (n = l.alternate.memoizedState.cache), l = l.memoizedState.cache, l !== n && (l.refCount++, n != null && Ua(n)));
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
          } catch (g) {
            vt(l, l.return, g);
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
        ) : $a(
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
        ))), n & 2048 && Qf(c, l);
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
          ) : $a(
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
  function $a(t, l) {
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; ) {
        var e = t, u = l, a = u.flags;
        switch (u.tag) {
          case 22:
            $a(e, u), a & 2048 && Qf(
              u.alternate,
              u
            );
            break;
          case 24:
            $a(e, u), a & 2048 && Xf(u.alternate, u);
            break;
          default:
            $a(e, u);
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
        ), t.flags & Su && (t.memoizedState !== null ? Eh(
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
  function Wa(t) {
    var l = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (l !== null)
        for (var e = 0; e < l.length; e++) {
          var u = l[e];
          Qt = u, Wd(
            u,
            t
          );
        }
      wd(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        $d(t), t = t.sibling;
  }
  function $d(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Wa(t), t.flags & 2048 && qe(9, t, t.return);
        break;
      case 3:
        Wa(t);
        break;
      case 12:
        Wa(t);
        break;
      case 22:
        var l = t.stateNode;
        t.memoizedState !== null && l._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (l._visibility &= -3, bi(t)) : Wa(t);
        break;
      default:
        Wa(t);
    }
  }
  function bi(t) {
    var l = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (l !== null)
        for (var e = 0; e < l.length; e++) {
          var u = l[e];
          Qt = u, Wd(
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
  function Wd(t, l) {
    for (; Qt !== null; ) {
      var e = Qt;
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
      if (u = e.child, u !== null) u.return = e, Qt = u;
      else
        t: for (e = t; Qt !== null; ) {
          u = Qt;
          var a = u.sibling, n = u.return;
          if (qd(u), u === e) {
            Qt = null;
            break t;
          }
          if (a !== null) {
            a.return = n, Qt = a;
            break t;
          }
          Qt = n;
        }
    }
  }
  var gv = {
    getCacheForType: function(t) {
      var l = Zt(Dt), e = l.data.get(t);
      return e === void 0 && (e = t(), l.data.set(t, e)), e;
    },
    cacheSignal: function() {
      return Zt(Dt).controller.signal;
    }
  }, Sv = typeof WeakMap == "function" ? WeakMap : Map, ot = 0, bt = null, k = null, tt = 0, mt = 0, gl = null, Qe = !1, ku = !1, Lf = !1, ge = 0, Nt = 0, Xe = 0, Tu = 0, Ti = 0, Sl = 0, Pu = 0, Fa = null, fl = null, Zf = !1, pi = 0, Fd = 0, Ei = 1 / 0, zi = null, Le = null, At = 0, ql = null, pu = null, Il = 0, Vf = 0, Kf = null, Id = null, ta = null, la = null, ea = null, Ia = 0, Oi = null;
  function bl() {
    return (ot & 2) !== 0 && tt !== 0 ? tt & -tt : q.T !== null ? lo() : tr();
  }
  function kd() {
    if (Sl === 0)
      if ((tt & 536870912) === 0 || I) {
        var t = Sn;
        Sn <<= 1, (Sn & 3932160) === 0 && (Sn = 262144), Sl = t;
      } else Sl = 536870912;
    return t = Vt.current, t !== null && (t.flags |= 32), Sl;
  }
  function ua(t, l) {
    if (l != null) {
      var e = t.stateNode, u = e.ref;
      u === null && (u = e.ref = U0(
        ce(t.memoizedProps, e)
      )), la === null && (la = []), la.push(l.bind(null, u));
    }
  }
  function ol(t, l, e) {
    (t === bt && (mt === 2 || mt === 9) || t.cancelPendingCommit !== null) && (aa(t, 0), Ze(
      t,
      tt,
      Sl,
      !1
    )), Sa(t, e), ((ot & 2) === 0 || t !== bt) && (t === bt && ((ot & 2) === 0 && (Tu |= e), Nt === 4 && Ze(
      t,
      tt,
      Sl,
      !1
    )), kl(t));
  }
  function Pd(t, l, e) {
    if ((ot & 6) !== 0) throw Error(o(327));
    var u = !e && (l & 127) === 0 && (l & t.expiredLanes) === 0 || ga(t, l), a = u ? pv(t, l) : wf(t, l, !0), n = u;
    do {
      if (a === 0) {
        ku && !u && Ze(t, l, 0, !1);
        break;
      } else {
        if (e = t.current.alternate, n && !bv(e)) {
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
                n = fl, fl = a, n !== null && (fl === null ? fl = n : fl.push.apply(
                  fl,
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
                !Qe
              );
              break t;
            case 2:
              fl = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(o(329));
          }
          if ((l & 62914560) === l && (a = pi + 300 - rl(), 10 < a)) {
            if (Ze(
              u,
              l,
              Sl,
              !Qe
            ), Tn(u, 0, !0) !== 0) break t;
            Il = l, u.timeoutHandle = yo(
              t0.bind(
                null,
                u,
                e,
                fl,
                zi,
                Zf,
                l,
                Sl,
                Tu,
                Pu,
                Qe,
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
            fl,
            zi,
            Zf,
            l,
            Sl,
            Tu,
            Pu,
            Qe,
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
  function t0(t, l, e, u, a, n, i, c, r, g, T, z, v, b) {
    t.timeoutHandle = -1;
    var C = l.subtreeFlags, x = (n & 335544064) === n;
    if (z = null, (x || C & 8192 || (C & 16785408) === 16785408) && (z = {
      stylesheets: null,
      count: 0,
      imgCount: 0,
      imgBytes: 0,
      suspenseyImages: [],
      waitingForImages: !0,
      waitingForViewTransition: !1,
      unsuspend: Ll
    }, hl = null, Jd(
      l,
      n,
      z
    ), x && (C = z, x = t.containerInfo, x = (x.nodeType === 9 ? x : x.ownerDocument).__reactViewTransition, x != null && (C.count++, C.waitingForViewTransition = !0, C = nn.bind(C), x.finished.then(C, C))), C = (n & 62914560) === n ? pi - rl() : (n & 4194048) === n ? Fd - rl() : 0, C = zh(
      z,
      C
    ), C !== null)) {
      Il = n, t.cancelPendingCommit = C(
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
          z,
          null,
          v,
          b
        )
      ), Ze(t, n, i, !g);
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
      z
    );
  }
  function bv(t) {
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
  function Ze(t, l, e, u) {
    l = Wo(t, l), l &= ~Ti, l &= ~Tu, t.suspendedLanes |= l, t.pingedLanes &= ~l, u && (t.warmLanes |= l), u = t.expirationTimes;
    for (var a = l; 0 < a; ) {
      var n = 31 - dl(a), i = 1 << n;
      u[n] = -1, a &= ~i;
    }
    e !== 0 && Io(t, e, l);
  }
  function Ai() {
    return (ot & 6) === 0 ? (ka(0), !1) : !0;
  }
  function Jf() {
    if (k !== null) {
      if (mt === 0)
        var t = k.return;
      else
        t = k, se = fu = null, Pc(t), Vu = null, ja = 0, t = k;
      for (; t !== null; )
        zd(t.alternate, t), t = t.return;
      k = null;
    }
  }
  function aa(t, l) {
    var e = t.timeoutHandle;
    return e !== -1 && (t.timeoutHandle = -1, Zv(e)), e = t.cancelPendingCommit, e !== null && (t.cancelPendingCommit = null, e()), Il = 0, Jf(), bt = t, k = e = oe(t.current, null), tt = l, mt = 0, gl = null, Qe = !1, ku = ga(t, l), Lf = !1, Pu = Sl = Ti = Tu = Xe = Nt = 0, fl = Fa = null, Zf = !1, ge = Wo(t, l), xn(), e;
  }
  function l0(t, l) {
    w = null, q.H = ai, l === Zu || l === Vn ? (l = fs(), mt = 3) : l === Qc ? (l = fs(), mt = 4) : mt = l === vf ? 8 : l !== null && typeof l == "object" && typeof l.then == "function" ? 6 : 1, gl = l, k === null && (Nt = 1, ni(
      t,
      _l(l, t.current)
    ));
  }
  function e0() {
    var t = Vt.current;
    return t === null ? !0 : (tt & 4194048) === tt ? Wt === null : (tt & 62914560) === tt || (tt & 536870912) !== 0 ? t === Wt : !1;
  }
  function u0() {
    var t = q.H;
    return q.H = ai, t === null ? ai : t;
  }
  function a0() {
    var t = q.A;
    return q.A = gv, t;
  }
  function _i() {
    Nt = 4, Qe || (tt & 4194048) !== tt && Vt.current !== null || (ku = !0), (Xe & 134217727) === 0 && (Tu & 134217727) === 0 || bt === null || Ze(
      bt,
      tt,
      Sl,
      !1
    );
  }
  function wf(t, l, e) {
    var u = ot;
    ot |= 2;
    var a = u0(), n = a0();
    (bt !== t || tt !== l) && (zi = null, aa(t, l)), l = !1;
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
              Vt.current === null && (l = !0);
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
        Tv(), i = Nt;
        break;
      } catch (T) {
        l0(t, T);
      }
    while (!0);
    return l && t.shellSuspendCounter++, se = fu = null, ot = u, q.H = a, q.A = n, k === null && (bt = null, tt = 0, xn()), i;
  }
  function Tv() {
    for (; k !== null; ) n0(k);
  }
  function pv(t, l) {
    var e = ot;
    ot |= 2;
    var u = u0(), a = a0();
    bt !== t || tt !== l ? (zi = null, Ei = rl() + 500, aa(t, l)) : ku = ga(
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
                mt !== 2 && mt !== 9 || bt !== t || (mt = 7), kl(t);
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
                      g !== null ? (k = g, Ni(g)) : k = null;
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
        Ev();
        break;
      } catch (T) {
        l0(t, T);
      }
    while (!0);
    return se = fu = null, q.H = u, q.A = a, ot = e, k !== null ? 0 : (bt = null, tt = 0, xn(), Nt);
  }
  function Ev() {
    for (; k !== null && !Gy(); )
      n0(k);
  }
  function n0(t) {
    var l = pd(t.alternate, t, ge);
    t.memoizedProps = t.pendingProps, l === null ? Ni(t) : k = l;
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
        u === qt && (I ? (Gn(u), u.tag === 5 && u.stateNode != null && (pt = u.stateNode)) : (Gn(u), I = !0));
      default:
        zd(e, l), l = k = Wr(l, ge), l = pd(e, l, ge);
    }
    t.memoizedProps = t.pendingProps, l === null ? Ni(t) : k = l;
  }
  function na(t, l, e, u) {
    se = fu = null, Pc(l), Vu = null, ja = 0;
    var a = l.return;
    try {
      if (ov(
        t,
        a,
        l,
        e,
        tt
      )) {
        Nt = 1, ni(
          t,
          _l(e, t.current)
        ), k = null;
        return;
      }
    } catch (n) {
      if (a !== null) throw k = a, n;
      Nt = 1, ni(
        t,
        _l(e, t.current)
      ), k = null;
      return;
    }
    l.flags & 32768 ? (I || u === 1 ? t = !0 : ku || (tt & 536870912) !== 0 ? t = !1 : (Qe = t = !0, (u === 2 || u === 9 || u === 3 || u === 6) && (u = Vt.current, u !== null && u.tag === 13 && (u.flags |= 16384))), c0(l, t)) : Ni(l);
  }
  function Ni(t) {
    var l = t;
    do {
      if ((l.flags & 32768) !== 0) {
        c0(
          l,
          Qe
        );
        return;
      }
      t = l.return;
      var e = yv(
        l.alternate,
        l,
        ge
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
      var e = mv(t.alternate, t);
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
  function f0(t, l, e, u, a, n, i, c, r, g, T, z) {
    t.cancelPendingCommit = null;
    do
      Ci();
    while (At !== 0);
    if ((ot & 6) !== 0) throw Error(o(327));
    if (l !== null) {
      if (l === t.current) throw Error(o(177));
      t === bt && (k = bt = null, tt = 0), pu = l, ql = t, Il = e, Kf = a, Id = u, zv(
        t,
        l,
        e,
        i,
        c,
        r,
        z
      );
    }
  }
  function zv(t, l, e, u, a, n, i) {
    var c = l.lanes | l.childLanes;
    if (Vf = c, c |= Nc, Wy(
      t,
      e,
      c,
      u,
      a,
      n
    ), la = null, (e & 335544064) === e ? (ea = Im(t), u = 10262) : (ea = null, u = 10256), (l.subtreeFlags & u) !== 0 || (l.flags & u) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, Mv(hn, function() {
      return If(), null;
    })) : (t.callbackNode = null, t.callbackPriority = 0), yi = !1, u = (l.flags & 13878) !== 0, (l.subtreeFlags & 13878) !== 0 || u) {
      u = q.T, q.T = null, a = K.p, K.p = 2, n = ot, ot |= 4;
      try {
        vv(t, l, e);
      } finally {
        ot = n, K.p = a, q.T = u;
      }
    }
    At = 1, yi ? ta = Wv(
      i,
      t.containerInfo,
      ea,
      $f,
      Wf,
      Av,
      Ff,
      If,
      Ov
    ) : ($f(), Wf(), Ff());
  }
  function Ov(t) {
    if (At !== 0) {
      var l = ql.onRecoverableError;
      l(t, { componentStack: null });
    }
  }
  function Av() {
    At === 3 && (At = 0, Vd(pu, ql), At = 4);
  }
  function $f() {
    if (At === 1) {
      At = 0;
      var t = ql, l = pu, e = Il, u = (l.flags & 13878) !== 0;
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
                var z = c.ownerDocument || document, v = z && z.defaultView || window;
                if (v.getSelection) {
                  var b = v.getSelection(), C = c.textContent.length, x = Math.min(r.start, C), $ = r.end === void 0 ? x : Math.min(r.end, C);
                  !b.extend && x > $ && (i = $, $ = x, x = i);
                  var h = Yr(
                    c,
                    x
                  ), d = Yr(
                    c,
                    $
                  );
                  if (h && d && (b.rangeCount !== 1 || b.anchorNode !== h.node || b.anchorOffset !== h.offset || b.focusNode !== d.node || b.focusOffset !== d.offset)) {
                    var S = z.createRange();
                    S.setStart(h.node, h.offset), b.removeAllRanges(), x > $ ? (b.addRange(S), b.extend(d.node, d.offset)) : (S.setEnd(d.node, d.offset), b.addRange(S));
                  }
                }
              }
            }
            for (z = [], b = c; b = b.parentNode; )
              b.nodeType === 1 && z.push({
                element: b,
                left: b.scrollLeft,
                top: b.scrollTop
              });
            for (typeof c.focus == "function" && c.focus(), c = 0; c < z.length; c++) {
              var E = z[c];
              E.element.scrollLeft = E.left, E.element.scrollTop = E.top;
            }
          }
          ya = !!fo, oo = fo = null;
        } finally {
          ot = n, K.p = a, q.T = u;
        }
      }
      t.current = l, At = 2;
    }
  }
  function Wf() {
    if (At === 2) {
      At = 0;
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
      At = 3;
    }
  }
  function Ff() {
    if (At === 4 || At === 3) {
      At = 0;
      var t = ta;
      ta = null, Qy();
      var l = ql, e = pu, u = Il, a = Id, n = (u & 335544064) === u ? 10262 : 10256;
      if ((e.subtreeFlags & n) !== 0 || (e.flags & n) !== 0 ? At = 5 : (At = 0, pu = ql = null, o0(l, l.pendingLanes)), n = l.pendingLanes, n === 0 && (Le = null), ac(u), e = e.stateNode, sl && typeof sl.onCommitFiberRoot == "function")
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
      (Il & 3) !== 0 && Ci(), kl(l), n = l.pendingLanes, (u & 261930) !== 0 && (n & 42) !== 0 ? l === Oi ? Ia++ : (Ia = 0, Oi = l) : (Ia = 0, Oi = null), ka(0);
    }
  }
  function o0(t, l) {
    (t.pooledCacheLanes &= l) === 0 && (l = t.pooledCache, l != null && (t.pooledCache = null, Ua(l)));
  }
  function Ci() {
    return ta !== null && (ta.skipTransition(), ta = null), $f(), Wf(), Ff(), If();
  }
  function If() {
    if (At !== 5) return !1;
    var t = ql, l = Vf;
    Vf = 0;
    var e = ac(Il), u = q.T, a = K.p;
    try {
      K.p = 32 > e ? 32 : e, q.T = null, e = Kf, Kf = null;
      var n = ql, i = Il;
      if (At = 0, pu = ql = null, Il = 0, (ot & 6) !== 0) throw Error(o(331));
      var c = ot;
      if (ot |= 4, $d(n.current), Kd(
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
    l = _l(e, l), l = mf(t.stateNode, l, 2), t = He(t, l, 2), t !== null && (Sa(t, 2), kl(t));
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
          if (typeof l.type.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && (Le === null || !Le.has(u))) {
            t = _l(e, t), e = id(2), u = He(l, e, 2), u !== null && (cd(
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
  function kf(t, l, e) {
    var u = t.pingCache;
    if (u === null) {
      u = t.pingCache = new Sv();
      var a = /* @__PURE__ */ new Set();
      u.set(l, a);
    } else
      a = u.get(l), a === void 0 && (a = /* @__PURE__ */ new Set(), u.set(l, a));
    a.has(e) || (Lf = !0, a.add(e), t = _v.bind(null, t, l, e), l.then(t, t));
  }
  function _v(t, l, e) {
    var u = t.pingCache;
    u !== null && u.delete(l), t.pingedLanes |= t.suspendedLanes & e, t.warmLanes &= ~e, bt === t && (tt & e) === e && ((Nt === 4 || Nt === 3 && (tt & 62914560) === tt && 300 > rl() - pi) && (ot & 2) === 0 ? aa(t, 0) : Ti |= e, Pu === tt && (Pu = 0)), kl(t);
  }
  function s0(t, l) {
    l === 0 && (l = Fo()), t = nu(t, l), t !== null && (Sa(t, l), kl(t));
  }
  function Nv(t) {
    var l = t.memoizedState, e = 0;
    l !== null && (e = l.retryLane), s0(t, e);
  }
  function Cv(t, l) {
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
  function Mv(t, l) {
    return tc(t, l);
  }
  var ia = null, ca = null, Pf = !1, Mi = !1, to = !1, Ve = 0;
  function kl(t) {
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
              u === bt ? n : 0,
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
    Ve !== 0 && Lv() && (t = Ve);
    for (var l = rl(), e = null, u = ia; u !== null; ) {
      var a = u.next, n = y0(u, l);
      n === 0 ? (u.next = null, e === null ? ia = a : e.next = a, a === null && (ca = e)) : (e = u, (t !== 0 || (n & 3) !== 0) && (Mi = !0)), u = a;
    }
    At !== 0 && At !== 5 || ka(t), Ve !== 0 && (Ve = 0);
  }
  function y0(t, l) {
    for (var e = t.suspendedLanes, u = t.pingedLanes, a = t.expirationTimes, n = t.pendingLanes & -62914561; 0 < n; ) {
      var i = 31 - dl(n), c = 1 << i, r = a[i];
      r === -1 ? ((c & e) === 0 || (c & u) !== 0) && (a[i] = $y(c, l)) : r <= l && (t.expiredLanes |= c), n &= ~c;
    }
    if (l = bt, e = tt, e = Tn(
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
          e = $o;
          break;
        default:
          e = hn;
      }
      return u = m0.bind(null, t), e = tc(e, u), t.callbackPriority = l, t.callbackNode = e, l;
    }
    return u !== null && u !== null && lc(u), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function m0(t, l) {
    if (At !== 0 && At !== 5)
      return t.callbackNode = null, t.callbackPriority = 0, null;
    var e = t.callbackNode;
    if (Ci() && t.callbackNode !== e)
      return null;
    var u = tt;
    return u = Tn(
      t,
      t === bt ? u : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), u === 0 ? null : (Pd(t, u, l), y0(t, rl()), t.callbackNode != null && t.callbackNode === e ? m0.bind(null, t) : null);
  }
  function v0(t, l) {
    if (Ci()) return null;
    Pd(t, l, !0);
  }
  function Dv() {
    Vv(function() {
      (ot & 6) !== 0 ? tc(
        Jo,
        Rv
      ) : d0();
    });
  }
  function lo() {
    if (Ve === 0) {
      var t = su;
      t === 0 && (t = gn, gn <<= 1, (gn & 261888) === 0 && (gn = 256)), Ve = t;
    }
    return Ve;
  }
  function h0(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : An(t);
  }
  function Uv(t, l, e, u, a) {
    if (l === "submit" && e && e.stateNode === a) {
      var n = h0(
        (a[al] || null).action
      ), i = u.submitter;
      i && (l = (l = i[al] || null) ? h0(l.formAction) : i.getAttribute("formAction"), l !== null && (n = l, i = null));
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
                if (Ve !== 0) {
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
  for (var eo = 0; eo < _c.length; eo++) {
    var uo = _c[eo], xv = uo.toLowerCase(), Hv = uo[0].toUpperCase() + uo.slice(1);
    Hl(
      xv,
      "on" + Hv
    );
  }
  Hl(Lr, "onAnimationEnd"), Hl(Zr, "onAnimationIteration"), Hl(Vr, "onAnimationStart"), Hl("dblclick", "onDoubleClick"), Hl("focusin", "onFocus"), Hl("focusout", "onBlur"), Hl(Zm, "onTransitionRun"), Hl(Vm, "onTransitionStart"), Hl(Km, "onTransitionCancel"), Hl(Kr, "onTransitionEnd"), Mu("onMouseEnter", ["mouseout", "mouseover"]), Mu("onMouseLeave", ["mouseout", "mouseover"]), Mu("onPointerEnter", ["pointerout", "pointerover"]), Mu("onPointerLeave", ["pointerout", "pointerover"]), eu(
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
  ), jv = new Set(
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
              Un(T);
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
              Un(T);
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
  var Ri = "_reactListening" + Math.random().toString(36).slice(2);
  function no(t) {
    if (!t[Ri]) {
      t[Ri] = !0, nr.forEach(function(e) {
        e !== "selectionchange" && (jv.has(e) || ao(e, !1, t), ao(e, !0, t));
      });
      var l = t.nodeType === 9 ? t : t.ownerDocument;
      l === null || l[Ri] || (l[Ri] = !0, ao("selectionchange", !1, l));
    }
  }
  function S0(t, l, e, u) {
    switch (cy(l)) {
      case 2:
        var a = Nh;
        break;
      case 8:
        a = Ch;
        break;
      default:
        a = _o;
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
      var g = n, T = rc(e), z = [];
      t: {
        var v = Jr.get(t);
        if (v !== void 0) {
          var b = Mn, C = t;
          switch (t) {
            case "keypress":
              if (Nn(e) === 0) break t;
            case "keydown":
            case "keyup":
              b = bm;
              break;
            case "focusin":
              C = "focus", b = hc;
              break;
            case "focusout":
              C = "blur", b = hc;
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
              b = cm;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              b = Om;
              break;
            case Lr:
            case Zr:
            case Vr:
              b = rm;
              break;
            case Kr:
              b = _m;
              break;
            case "scroll":
            case "scrollend":
              b = nm;
              break;
            case "wheel":
              b = Cm;
              break;
            case "copy":
            case "cut":
            case "paste":
              b = dm;
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
              b = Em;
              break;
            case "toggle":
            case "beforetoggle":
              b = Rm;
          }
          var x = (l & 4) !== 0, $ = !x && (t === "scroll" || t === "scrollend"), h = x ? v !== null ? v + "Capture" : null : v;
          x = [];
          for (var d = g, S; d !== null; ) {
            var E = d;
            if (S = E.stateNode, E = E.tag, E !== 5 && E !== 26 && E !== 27 || S === null || h === null || (E = pa(d, h), E != null && x.push(
              tn(d, E, S)
            )), $) break;
            d = d.return;
          }
          0 < x.length && (v = new b(
            v,
            C,
            null,
            e,
            T
          ), z.push({ event: v, listeners: x }));
        }
      }
      if ((l & 7) === 0) {
        t: {
          if (b = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout", b && e !== oc && (C = e.relatedTarget || e.fromElement) && (lu(C) || C[_u]))
            break t;
          (v || b) && (C = T.window === T ? T : (b = T.ownerDocument) ? b.defaultView || b.parentWindow : window, v ? (b = e.relatedTarget || e.toElement, v = g, b = b ? lu(b) : null, b !== null && ($ = N(b), x = b.tag, b !== $ || x !== 5 && x !== 27 && x !== 6) && (b = null)) : (v = null, b = g), v !== b && (x = pr, E = "onMouseLeave", h = "onMouseEnter", d = "mouse", (t === "pointerout" || t === "pointerover") && (x = zr, E = "onPointerLeave", h = "onPointerEnter", d = "pointer"), $ = v == null ? C : Ta(v), S = b == null ? C : Ta(b), C = new x(
            E,
            d + "leave",
            v,
            e,
            T
          ), C.target = $, C.relatedTarget = S, E = null, lu(T) === g && (x = new x(
            h,
            d + "enter",
            b,
            e,
            T
          ), x.target = S, x.relatedTarget = $, E = x), $ = E, x = v && b ? It(
            v,
            b,
            Bv
          ) : null, v !== null && b0(
            z,
            C,
            v,
            x,
            !1
          ), b !== null && $ !== null && b0(
            z,
            $,
            b,
            x,
            !0
          )));
        }
        t: {
          if (v = g ? Ta(g) : window, b = v.nodeName && v.nodeName.toLowerCase(), b === "select" || b === "input" && v.type === "file")
            var U = Dr;
          else if (Mr(v))
            if (Ur)
              U = Qm;
            else {
              U = qm;
              var lt = Ym;
            }
          else
            b = v.nodeName, !b || b.toLowerCase() !== "input" || v.type !== "checkbox" && v.type !== "radio" ? g && fc(g.elementType) && (U = Dr) : U = Gm;
          if (U && (U = U(t, g))) {
            Rr(
              z,
              U,
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
            Oc = !1, Qr(z, e, T);
            break;
          case "selectionchange":
            if (Lm) break;
          case "keydown":
          case "keyup":
            Qr(z, e, T);
        }
        var G;
        if (Sc)
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
          Hu ? Nr(t, e) && (L = "onCompositionEnd") : t === "keydown" && e.keyCode === 229 && (L = "onCompositionStart");
        L && (Or && e.locale !== "ko" && (Hu || L !== "onCompositionStart" ? L === "onCompositionEnd" && Hu && (G = br()) : (Ae = T, yc = "value" in Ae ? Ae.value : Ae.textContent, Hu = !0)), lt = Di(g, L), 0 < lt.length && (L = new Er(
          L,
          t,
          null,
          e,
          T
        ), z.push({ event: L, listeners: lt }), G ? L.data = G : (G = Cr(e), G !== null && (L.data = G)))), (G = Um ? xm(t, e) : Hm(t, e)) && (L = Di(g, "onBeforeInput"), 0 < L.length && (lt = new Er(
          "onBeforeInput",
          "beforeinput",
          null,
          e,
          T
        ), z.push({
          event: lt,
          listeners: L
        }), lt.data = G)), Uv(
          z,
          t,
          g,
          e,
          T
        );
      }
      g0(z, l);
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
      if (a = a.tag, a !== 5 && a !== 26 && a !== 27 || n === null || (a = pa(t, e), a != null && u.unshift(
        tn(t, a, n)
      ), a = pa(t, l), a != null && u.push(
        tn(t, a, n)
      )), t.tag === 3) return u;
      t = t.return;
    }
    return [];
  }
  function Bv(t) {
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
  var Yv = /\r\n?/g, qv = /\u0000|\uFFFD/g;
  function T0(t) {
    return (typeof t == "string" ? t : "" + t).replace(Yv, `
`).replace(qv, "");
  }
  function p0(t, l) {
    return l = T0(l), T0(t) === l;
  }
  function ht(t, l, e, u, a, n) {
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
        u = An(u), t.setAttribute(e, u);
        break;
      case "onClick":
        u != null && (t.onclick = Ll);
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
        P("beforetoggle", t), P("toggle", t), zn(t, "popover", u);
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
        zn(t, "is", u);
        break;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N")
          e = um.get(e) || e, zn(t, e, u);
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
        if (typeof u == "string") Du(t, u);
        else if (typeof u == "number" || typeof u == "bigint")
          Du(t, "" + u);
        else return;
        break;
      case "onScroll":
        u != null && P("scroll", t);
        return;
      case "onScrollEnd":
        u != null && P("scrollend", t);
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
        if (!ir.hasOwnProperty(e))
          t: {
            if (e[0] === "o" && e[1] === "n" && (a = e.endsWith("Capture"), n = e.slice(2, a ? e.length - 7 : void 0), l = t[al] || null, l = l != null ? l[e] : null, typeof l == "function" && t.removeEventListener(n, l, a), typeof u == "function")) {
              typeof l != "function" && l !== null && (e in t ? t[e] = null : t.hasAttribute(e) && t.removeAttribute(e)), t.addEventListener(n, u, a);
              break t;
            }
            it = !0, e in t ? t[e] = u : u === !0 ? t.setAttribute(e, "") : zn(t, e, u);
          }
        return;
    }
    it = !0;
  }
  function wt(t, l, e) {
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
        l = n, e = i, t.multiple = !!u, l != null ? Ru(t, !!u, l, !1) : e != null && Ru(t, !!u, e, !0);
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
  var Gv = {};
  function Qv(t, l, e, u) {
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
          var z = e[b];
          if (e.hasOwnProperty(b) && z != null)
            switch (b) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                r = z;
              default:
                u.hasOwnProperty(b) || ht(t, l, b, null, u, z);
            }
        }
        for (var v in u) {
          var b = u[v];
          if (z = e[v], u.hasOwnProperty(v) && (b != null || z != null))
            switch (v) {
              case "type":
                b !== z && (it = !0), n = b;
                break;
              case "name":
                b !== z && (it = !0), a = b;
                break;
              case "checked":
                b !== z && (it = !0), g = b;
                break;
              case "defaultChecked":
                b !== z && (it = !0), T = b;
                break;
              case "value":
                b !== z && (it = !0), i = b;
                break;
              case "defaultValue":
                b !== z && (it = !0), c = b;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (b != null)
                  throw Error(o(137, l));
                break;
              default:
                b !== z && ht(
                  t,
                  l,
                  v,
                  b,
                  u,
                  z
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
        l = c, e = i, u = b, v != null ? Ru(t, !!e, v, !1) : !!u != !!e && (l != null ? Ru(t, !!e, l, !0) : Ru(t, !!e, e ? [] : "", !1));
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
        for (var C in e)
          v = e[C], e.hasOwnProperty(C) && v != null && !u.hasOwnProperty(C) && (C === "selected" ? t.selected = !1 : ht(
            t,
            l,
            C,
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
        for (var x in e)
          v = e[x], e.hasOwnProperty(x) && v != null && !u.hasOwnProperty(x) && ht(t, l, x, null, u, v);
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
          for (var $ in e)
            v = e[$], e.hasOwnProperty($) && v !== void 0 && !u.hasOwnProperty($) && co(
              t,
              l,
              $,
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
    for (z in u)
      v = u[z], b = e[z], !u.hasOwnProperty(z) || v === b || v == null && b == null || ht(t, l, z, v, u, b);
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
  function Xv() {
    if (typeof performance.getEntriesByType == "function") {
      for (var t = 0, l = 0, e = performance.getEntriesByType("resource"), u = 0; u < e.length; u++) {
        var a = e[u], n = a.transferSize, i = a.initiatorType, c = a.duration;
        if (n && c && E0(i)) {
          for (i = 0, c = a.responseEnd, u += 1; u < e.length; u++) {
            var r = e[u], g = r.startTime;
            if (g > c) break;
            var T = r.transferSize, z = r.initiatorType;
            T && E0(z) && (r = r.responseEnd, i += T * (r < c ? 1 : (c - g) / (r - g)));
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
  function A0(t, l, e, u) {
    return e = ln(
      e
    ).createElement(t), e[Lt] = u, e[al] = l, wt(e, t, l), Yt(e), e;
  }
  function ro(t, l) {
    return t === "textarea" || t === "noscript" || typeof l.children == "string" || typeof l.children == "number" || typeof l.children == "bigint" || typeof l.dangerouslySetInnerHTML == "object" && l.dangerouslySetInnerHTML !== null && l.dangerouslySetInnerHTML.__html != null;
  }
  var so = null;
  function Lv() {
    var t = window.event;
    return t && t.type === "popstate" ? t === so ? !1 : (so = t, !0) : (so = null, !1);
  }
  var yo = typeof setTimeout == "function" ? setTimeout : void 0, Zv = typeof clearTimeout == "function" ? clearTimeout : void 0, _0 = typeof Promise == "function" ? Promise : void 0, N0 = typeof requestAnimationFrame == "function" ? requestAnimationFrame : yo, Vv = typeof queueMicrotask == "function" ? queueMicrotask : typeof _0 < "u" ? function(t) {
    return _0.resolve(null).then(t).catch(Kv);
  } : yo;
  function Kv(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function Ke(t) {
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
  function R0(t, l, e) {
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
  function D0(t, l) {
    t = t.style, l = l.style;
    var e = l != null ? l.hasOwnProperty("viewTransitionName") ? l.viewTransitionName : l.hasOwnProperty("view-transition-name") ? l["view-transition-name"] : null : null;
    t.viewTransitionName = e == null || typeof e == "boolean" ? "" : ("" + e).trim(), e = l != null ? l.hasOwnProperty("viewTransitionClass") ? l.viewTransitionClass : l.hasOwnProperty("view-transition-class") ? l["view-transition-class"] : null : null, t.viewTransitionClass = e == null || typeof e == "boolean" ? "" : ("" + e).trim(), t.display === "inline-block" && (l == null ? t.display = t.margin = "" : (e = l.display, t.display = e == null || typeof e == "boolean" ? "" : e, e = l.margin, e != null ? t.margin = e : (e = l.hasOwnProperty("marginTop") ? l.marginTop : l["margin-top"], t.marginTop = e == null || typeof e == "boolean" ? "" : e, l = l.hasOwnProperty("marginBottom") ? l.marginBottom : l["margin-bottom"], t.marginBottom = l == null || typeof l == "boolean" ? "" : l)));
  }
  function Jv(t, l, e) {
    return e = e.ownerDocument.defaultView, {
      rect: t,
      abs: l.position === "absolute" || l.position === "fixed",
      clip: l.clipPath !== "none" || l.overflow !== "visible" || l.filter !== "none" || l.mask !== "none" || l.mask !== "none" || l.borderRadius !== "0px",
      view: 0 <= t.bottom && 0 <= t.right && t.top <= e.innerHeight && t.left <= e.innerWidth
    };
  }
  function mo(t) {
    var l = t.getBoundingClientRect(), e = getComputedStyle(t);
    return Jv(l, e, t);
  }
  function wv(t) {
    return t.documentElement.clientHeight;
  }
  function $v(t) {
    this.addEventListener("load", t), this.addEventListener("error", t);
  }
  function Wv(t, l, e, u, a, n, i, c, r) {
    var g = l.nodeType === 9 ? l : l.ownerDocument;
    try {
      var T = g.startViewTransition({
        update: function() {
          var v = g.defaultView, b = v.navigation && v.navigation.transition, C = g.fonts.status;
          u();
          var x = [];
          if (C === "loaded" && (wv(g), g.fonts.status === "loading" && x.push(g.fonts.ready)), C = x.length, t !== null)
            for (var $ = t.suspenseyImages, h = 0, d = 0; d < $.length; d++) {
              var S = $[d];
              if (!S.complete) {
                var E = S.getBoundingClientRect();
                if (0 < E.bottom && 0 < E.right && E.top < v.innerHeight && E.left < v.innerWidth) {
                  if (h += k0(S), h > Hi) {
                    x.length = C;
                    break;
                  }
                  S = new Promise(
                    $v.bind(S)
                  ), x.push(S);
                }
              }
            }
          if (0 < x.length)
            return v = Promise.race([
              Promise.all(x),
              new Promise(function(U) {
                return setTimeout(U, 500);
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
      var z = [];
      return T.ready.then(
        function() {
          for (var v = g.documentElement.getAnimations({
            subtree: !0
          }), b = 0; b < v.length; b++) {
            var C = v[b], x = C.effect, $ = x.pseudoElement;
            if ($ != null && $.startsWith("::view-transition")) {
              z.push(C), C = x.getKeyframes();
              for (var h = $ = void 0, d = !0, S = 0; S < C.length; S++) {
                var E = C[S], U = E.width;
                if ($ === void 0) $ = U;
                else if ($ !== U) {
                  d = !1;
                  break;
                }
                if (U = E.height, h === void 0) h = U;
                else if (h !== U) {
                  d = !1;
                  break;
                }
                delete E.width, delete E.height, E.transform === "none" && delete E.transform;
              }
              d && $ !== void 0 && h !== void 0 && (x.setKeyframes(C), d = getComputedStyle(
                x.target,
                x.pseudoElement
              ), d.width !== $ || d.height !== h) && (d = C[0], d.width = $, d.height = h, d = C[C.length - 1], d.width = $, d.height = h, x.setKeyframes(C));
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
        for (var v = 0; v < z.length; v++)
          z[v].cancel();
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
    return l = typeof l == "number" ? { duration: l } : F({}, l), l.pseudoElement = this._selector, this._scope.animate(t, l);
  }, Eu.prototype.getAnimations = function() {
    for (var t = this._scope, l = this._selector, e = t.getAnimations({ subtree: !0 }), u = [], a = 0; a < e.length; a++) {
      var n = e[a].effect;
      n !== null && n.target === t && n.pseudoElement === l && u.push(e[a]);
    }
    return u;
  }, Eu.prototype.getComputedStyle = function() {
    return getComputedStyle(this._scope, this._selector);
  };
  function U0(t) {
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
          Fv,
          t,
          c,
          u
        );
      }
      this._eventListeners = n;
    }
  };
  function Fv(t, l, e, u) {
    return H(t).addEventListener(
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
        Iv,
        t,
        e,
        a
      ), u.splice(l, 1), n !== null && n();
    }
  };
  function Iv(t, l, e, u) {
    return H(t).removeEventListener(
      l,
      e,
      u
    ), !1;
  }
  function fa(t) {
    return t != null && typeof t != "boolean" && (t.once === !0 || t.signal instanceof AbortSignal) ? { capture: t.capture, passive: t.passive } : t;
  }
  function x0(t) {
    return t == null ? "c=0" : typeof t == "boolean" ? "c=" + (t ? "1" : "0") : "c=" + (t.capture ? "1" : "0");
  }
  function H0(t, l, e, u) {
    if (t.length === 0) return -1;
    u = x0(u);
    for (var a = 0; a < t.length; a++) {
      var n = t[a];
      if (n.type === l && n.listener === e && x0(n.optionsOrUseCapture) === u)
        return a;
    }
    return -1;
  }
  Tl.prototype.dispatchEvent = function(t) {
    var l = j(
      this._fragmentFiber
    );
    if (l === null) return !0;
    l = H(l);
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
    return t.tag === 6 ? !1 : (t = H(t), oh(t, l));
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
    var t = j(
      this._fragmentFiber
    );
    t !== null && (t = H(t), t = ln(t).activeElement, t !== null && p(
      this._fragmentFiber.child,
      !1,
      kv,
      t,
      void 0,
      void 0
    ));
  };
  function kv(t, l) {
    return t.tag === 6 ? !1 : (t = H(t), t === l || t.contains(l) ? (l.blur(), !0) : !1);
  }
  Tl.prototype.observeUsing = function(t) {
    this._observers === null && (this._observers = /* @__PURE__ */ new Set()), this._observers.add(t), p(
      this._fragmentFiber.child,
      !1,
      Pv,
      t,
      void 0,
      void 0
    );
  };
  function Pv(t, l) {
    return t.tag === 6 || (t = H(t), l.observe(t)), !1;
  }
  Tl.prototype.unobserveUsing = function(t) {
    var l = this._observers;
    if (l !== null && l.has(t)) {
      l.delete(t), p(
        this._fragmentFiber.child,
        !1,
        th,
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
  function th(t, l) {
    return t.tag === 6 || (t = H(t), l.unobserve(t)), !1;
  }
  var Gl = [], ho = !1;
  function lh(t, l, e) {
    Gl.push({
      fragmentInstance: t,
      observer: l,
      instance: e
    }), ho || (ho = !0, rh(function() {
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
      eh,
      t,
      void 0,
      void 0
    ), t;
  };
  function eh(t, l) {
    if (t.tag === 6) {
      t = t.stateNode;
      var e = t.ownerDocument.createRange();
      e.selectNodeContents(t), l.push.apply(l, e.getClientRects());
    } else
      t = H(t), l.push.apply(l, t.getClientRects());
    return !1;
  }
  Tl.prototype.getRootNode = function(t) {
    var l = j(
      this._fragmentFiber
    );
    return l === null ? this : H(l).getRootNode(t);
  }, Tl.prototype.compareDocumentPosition = function(t) {
    var l = j(
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
    var u = H(l);
    if (e.length === 0) {
      if (e = u, yt(this._fragmentFiber)) {
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
      return e === t ? a = Node.DOCUMENT_POSITION_CONTAINS : u & Node.DOCUMENT_POSITION_CONTAINED_BY && (e = Ct(l)[1], e === null ? a = Node.DOCUMENT_POSITION_PRECEDING : (t = H(e).compareDocumentPosition(
        t
      ), a = t === 0 || t & Node.DOCUMENT_POSITION_FOLLOWING ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING)), a |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
    }
    l = H(e[0]), a = H(e[e.length - 1]);
    var n = yt(this._fragmentFiber) ? l.parentElement : u;
    if (n == null)
      return Node.DOCUMENT_POSITION_DISCONNECTED;
    u = n.compareDocumentPosition(l) & Node.DOCUMENT_POSITION_CONTAINED_BY, n = n.compareDocumentPosition(a) & Node.DOCUMENT_POSITION_CONTAINED_BY;
    var i = l.compareDocumentPosition(t), c = a.compareDocumentPosition(t), r = i & Node.DOCUMENT_POSITION_CONTAINED_BY || c & Node.DOCUMENT_POSITION_CONTAINED_BY;
    return c = u && n && i & Node.DOCUMENT_POSITION_FOLLOWING && c & Node.DOCUMENT_POSITION_PRECEDING, l = u && l === t || n && a === t || r || c ? Node.DOCUMENT_POSITION_CONTAINED_BY : !u && l === t || !n && a === t ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC : i, l & Node.DOCUMENT_POSITION_DISCONNECTED || l & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC || uh(
      l,
      this._fragmentFiber,
      e[0],
      e[e.length - 1],
      t
    ) ? l : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
  };
  function uh(t, l, e, u, a) {
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
    return t & Node.DOCUMENT_POSITION_PRECEDING ? ((l = !!n) && !(l = n === e) && (l = It(
      e,
      n,
      zl
    ), l === null ? l = !1 : (p(
      l,
      !0,
      le,
      n,
      e
    ), n = ct, ct = null, l = n !== null)), l) : t & Node.DOCUMENT_POSITION_FOLLOWING ? ((l = !!n) && !(l = n === u) && (l = It(
      u,
      n,
      zl
    ), l === null ? l = !1 : (p(
      l,
      !0,
      El,
      n,
      u
    ), n = ct, Ft = ct = null, l = n !== null)), l) : !1;
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
      var u = Ct(
        this._fragmentFiber
      );
      if (u = e ? u[1] || u[0] || j(this._fragmentFiber) : u[0] || u[1], u === null) return;
      if (u.tag === 6) {
        t = H(u), B0(t, e);
        return;
      }
      if (u = H(u), u.nodeType !== 9) {
        if (u.nodeType === 11) {
          e = "host" in u ? u.host : null, e !== null && e.scrollIntoView(t);
          return;
        }
        u.scrollIntoView(t);
      }
    }
    for (u = e ? l.length - 1 : 0; u !== (e ? -1 : l.length); ) {
      var a = l[u];
      a.tag === 6 ? (a = H(a), B0(a, e)) : H(a).scrollIntoView(t), u += e ? -1 : 1;
    }
  };
  function ah(t, l) {
    return t = H(t), Y0(t, l), !1;
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
  function nh(t, l) {
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
      typeof n.rootMargin == "string" ? lh(
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
  function ih(t, l, e, u) {
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
  function ch(t, l, e) {
    if (l === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = Dl(t.nextSibling), t === null)) return null;
    return t;
  }
  function G0(t, l) {
    for (; t.nodeType !== 8; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !l || (t = Dl(t.nextSibling), t === null)) return null;
    return t;
  }
  function So(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function bo(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
  }
  function fh(t, l) {
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
  var To = null;
  function Q0(t) {
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
  function oh(t, l) {
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
  function rh(t) {
    N0(function() {
      N0(function(l) {
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
      e.hasOwnProperty(u) && a != null && ht(t, l, u, null, Gv, a);
    }
    e.dangerouslySetInnerHTML != null && (t.textContent = ""), t.onclick === Ll && (t.onclick = null), En(t);
  }
  function po(t) {
    for (var l = t.attributes; l.length; )
      t.removeAttributeNode(l[0]);
    En(t);
  }
  var Ul = /* @__PURE__ */ new Map(), V0 = /* @__PURE__ */ new Set();
  function en(t) {
    if (typeof t.getRootNode == "function") {
      var l = t.getRootNode();
      if (l.nodeType === 9 || l.nodeType === 11) return l;
    }
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  var Se = K.d;
  K.d = {
    f: sh,
    r: dh,
    D: yh,
    C: mh,
    L: vh,
    m: hh,
    X: Sh,
    S: gh,
    M: bh
  };
  function sh() {
    var t = Se.f(), l = Ai();
    return t || l;
  }
  function dh(t) {
    var l = Nu(t);
    l !== null && l.tag === 5 && l.type === "form" ? Js(l) : Se.r(t);
  }
  var oa = typeof document > "u" ? null : document;
  function K0(t, l, e) {
    var u = oa;
    if (u && typeof l == "string" && l) {
      var a = Ol(l);
      a = 'link[rel="' + t + '"][href="' + a + '"]', typeof e == "string" && (a += '[crossorigin="' + e + '"]'), V0.has(a) || (V0.add(a), t = { rel: t, crossOrigin: e, href: l }, u.querySelector(a) === null && (l = u.createElement("link"), wt(l, "link", t), Yt(l), u.head.appendChild(l)));
    }
  }
  function yh(t) {
    Se.D(t), K0("dns-prefetch", t, null);
  }
  function mh(t, l) {
    Se.C(t, l), K0("preconnect", t, l);
  }
  function vh(t, l, e) {
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
      if (!(Ul.has(n) || (t = F(
        {
          rel: "preload",
          href: l === "image" && e && e.imageSrcSet ? void 0 : t,
          as: l
        },
        e
      ), Ul.set(n, t), u.querySelector(a) !== null || l === "style" && u.querySelector(un(n)) || l === "script" && u.querySelector(an(n))))) {
        var i = u.createElement("link");
        wt(i, "link", t), l === "style" && (i[pn] = !0, i.onload = i.onerror = function() {
          ar(i);
        }), Yt(i), u.head.appendChild(i);
      }
    }
  }
  function hh(t, l) {
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
      if (!Ul.has(n) && (t = F({ rel: "modulepreload", href: t }, l), Ul.set(n, t), e.querySelector(a) === null)) {
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
        u = e.createElement("link"), wt(u, "link", t), Yt(u), e.head.appendChild(u);
      }
    }
  }
  function gh(t, l, e) {
    Se.S(t, l, e);
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
          t = F(
            { rel: "stylesheet", href: t, "data-precedence": l },
            e
          ), (e = Ul.get(n)) && Eo(t, e);
          var r = i = u.createElement("link");
          Yt(r), wt(r, "link", t), r._p = new Promise(function(g, T) {
            r.onload = g, r.onerror = T;
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
  function Sh(t, l) {
    Se.X(t, l);
    var e = oa;
    if (e && t) {
      var u = Cu(e).hoistableScripts, a = sa(t), n = u.get(a);
      n || (n = e.querySelector(an(a)), n || (t = F({ src: t, async: !0 }, l), (l = Ul.get(a)) && zo(t, l), n = e.createElement("script"), Yt(n), wt(n, "link", t), e.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, u.set(a, n));
    }
  }
  function bh(t, l) {
    Se.M(t, l);
    var e = oa;
    if (e && t) {
      var u = Cu(e).hoistableScripts, a = sa(t), n = u.get(a);
      n || (n = e.querySelector(an(a)), n || (t = F({ src: t, async: !0, type: "module" }, l), (l = Ul.get(a)) && zo(t, l), n = e.createElement("script"), Yt(n), wt(n, "link", t), e.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, u.set(a, n));
    }
  }
  function J0(t, l, e, u) {
    var a = (a = Ee.current) ? en(a) : null;
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
          )) ? n._p || (i.instance = n, i.state.loading = 5) : (n = Ul.get(t), n || (n = {
            rel: "preload",
            as: "style",
            href: e.href,
            crossOrigin: e.crossOrigin,
            integrity: e.integrity,
            media: e.media,
            hrefLang: e.hrefLang,
            referrerPolicy: e.referrerPolicy
          }, Ul.set(t, n)), Th(
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
    return F({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function Th(t, l, e, u) {
    if (l = t.querySelector(
      'link[rel="preload"][as="style"][' + l + "]"
    )) {
      if (l[pn] !== !0) {
        u.loading = 1;
        return;
      }
    } else
      l = t.createElement("link"), l[pn] = !0, l.onload = l.onerror = ar.bind(null, l), wt(l, "link", e), Yt(l), t.head.appendChild(l);
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
  function $0(t, l, e) {
    if (l.count++, l.instance === null)
      switch (l.type) {
        case "style":
          var u = t.querySelector(
            'style[data-href~="' + Ol(e.href) + '"]'
          );
          if (u)
            return l.instance = u, Yt(u), u;
          var a = F({}, e, {
            "data-href": e.href,
            "data-precedence": e.precedence,
            href: null,
            precedence: null
          });
          return u = (t.ownerDocument || t).createElement(
            "style"
          ), Yt(u), wt(u, "style", a), Ui(u, e.precedence, t), l.instance = u;
        case "stylesheet":
          a = ra(e.href);
          var n = t.querySelector(
            un(a)
          );
          if (n)
            return l.state.loading |= 4, l.instance = n, Yt(n), n;
          u = w0(e), (a = Ul.get(a)) && Eo(u, a), n = (t.ownerDocument || t).createElement("link"), Yt(n);
          var i = n;
          return i._p = new Promise(function(c, r) {
            i.onload = c, i.onerror = r;
          }), wt(n, "link", u), l.state.loading |= 4, Ui(n, e.precedence, t), l.instance = n;
        case "script":
          return n = sa(e.src), (a = t.querySelector(
            an(n)
          )) ? (l.instance = a, Yt(a), a) : (u = e, (a = Ul.get(n)) && (u = F({}, e), zo(u, a)), t = t.ownerDocument || t, a = t.createElement("script"), Yt(a), wt(a, "link", u), t.head.appendChild(a), l.instance = a);
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
  var xi = null;
  function W0(t, l, e) {
    if (xi === null) {
      var u = /* @__PURE__ */ new Map(), a = xi = /* @__PURE__ */ new Map();
      a.set(e, u);
    } else
      a = xi, u = a.get(e), u || (u = /* @__PURE__ */ new Map(), a.set(e, u));
    if (u.has(t)) return u;
    for (u.set(t, null), e = e.getElementsByTagName(t), a = 0; a < e.length; a++) {
      var n = e[a];
      if (!(n[ba] || n[Lt] || t === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
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
  function ph(t, l, e) {
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
    typeof l.decode == "function" && (t.imgCount++, l.complete || (t.imgBytes += k0(l), t.suspenseyImages.push(l)), t = Oh.bind(t), l.decode().then(t, t));
  }
  function Eh(t, l, e, u) {
    if (e.type === "stylesheet" && (typeof u.media != "string" || matchMedia(u.media).matches !== !1) && (e.state.loading & 4) === 0) {
      if (e.instance === null) {
        var a = ra(u.href), n = l.querySelector(
          un(a)
        );
        if (n) {
          l = n._p, l !== null && typeof l == "object" && typeof l.then == "function" && (t.count++, t = nn.bind(t), l.then(t, t)), e.state.loading |= 4, e.instance = n, Yt(n);
          return;
        }
        n = l.ownerDocument || l, u = w0(u), (a = Ul.get(a)) && Eo(u, a), n = n.createElement("link"), Yt(n);
        var i = n;
        i._p = new Promise(function(c, r) {
          i.onload = c, i.onerror = r;
        }), wt(n, "link", u), e.instance = n;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(e, l), (l = e.state.preload) && (e.state.loading & 3) === 0 && (t.count++, e = nn.bind(t), l.addEventListener("load", e), l.addEventListener("error", e));
    }
  }
  var Hi = 0;
  function zh(t, l) {
    return t.stylesheets && t.count === 0 && Bi(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(e) {
      var u = setTimeout(function() {
        if (t.stylesheets && Bi(t, t.stylesheets), t.unsuspend) {
          var n = t.unsuspend;
          t.unsuspend = null, n();
        }
      }, 6e4 + l);
      0 < t.imgBytes && Hi === 0 && (Hi = 62500 * Xv());
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
  function Oh() {
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
    $$typeof: Bt,
    Provider: null,
    Consumer: null,
    _currentValue: ue,
    _currentValue2: ue,
    _threadCount: 0
  };
  function _h(t, l, e, u, a, n, i, c, r) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = ec(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ec(0), this.hiddenUpdates = ec(null), this.identifierPrefix = u, this.onUncaughtError = a, this.onCaughtError = n, this.onRecoverableError = i, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = r, this.transitionTypes = null, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function ly(t, l, e, u, a, n, i, c, r, g, T, z) {
    return t = new _h(
      t,
      l,
      e,
      i,
      r,
      g,
      T,
      z,
      c
    ), l = 1, n === !0 && (l |= 24), n = nl(3, null, null, l), t.current = n, n.stateNode = t, l = Yc(), l.refCount++, t.pooledCache = l, l.refCount++, n.memoizedState = {
      element: u,
      isDehydrated: e,
      cache: l
    }, Xc(n), t;
  }
  function ey(t) {
    return t ? (t = qu, t) : qu;
  }
  function uy(t, l, e, u, a, n) {
    a = ey(a), u.context === null ? u.context = a : u.pendingContext = a, u = xe(l), u.payload = { element: e }, n = n === void 0 ? null : n, n !== null && (u.callback = n), e = He(t, u, l), e !== null && (ol(e, t, l), Ba(e, t, l));
  }
  function ay(t, l) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var e = t.retryLane;
      t.retryLane = e !== 0 && e < l ? e : l;
    }
  }
  function Ao(t, l) {
    ay(t, l), (t = t.alternate) && ay(t, l);
  }
  function ny(t) {
    if (t.tag === 13 || t.tag === 31) {
      var l = nu(t, 67108864);
      l !== null && ol(l, t, 67108864), Ao(t, 67108864);
    }
  }
  function iy(t) {
    if (t.tag === 13 || t.tag === 31) {
      var l = bl();
      l = uc(l);
      var e = nu(t, l);
      e !== null && ol(e, t, l), Ao(t, l);
    }
  }
  var ya = !0;
  function Nh(t, l, e, u) {
    var a = q.T;
    q.T = null;
    var n = K.p;
    try {
      K.p = 2, _o(t, l, e, u);
    } finally {
      K.p = n, q.T = a;
    }
  }
  function Ch(t, l, e, u) {
    var a = q.T;
    q.T = null;
    var n = K.p;
    try {
      K.p = 8, _o(t, l, e, u);
    } finally {
      K.p = n, q.T = a;
    }
  }
  function _o(t, l, e, u) {
    if (ya) {
      var a = No(u);
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
      else if (fy(t, u), l & 4 && -1 < Mh.indexOf(t)) {
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
                    kl(n), (ot & 6) === 0 && (Ei = rl() + 500, ka(0));
                  }
                }
                break;
              case 31:
              case 13:
                c = nu(n, 2), c !== null && ol(c, n, 2), Ai(), Ao(n, 2);
            }
          if (n = No(u), n === null && io(
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
  function No(t) {
    return t = rc(t), Co(t);
  }
  var Yi = null;
  function Co(t) {
    if (Yi = null, t = lu(t), t !== null) {
      var l = N(t);
      if (l === null) t = null;
      else {
        var e = l.tag;
        if (e === 13) {
          if (t = D(l), t !== null) return t;
          t = null;
        } else if (e === 31) {
          if (t = B(l), t !== null) return t;
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
        switch (Xy()) {
          case Jo:
            return 2;
          case wo:
            return 8;
          case hn:
          case Ly:
            return 32;
          case $o:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Mo = !1, Je = null, we = null, $e = null, cn = /* @__PURE__ */ new Map(), fn = /* @__PURE__ */ new Map(), We = [], Mh = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function fy(t, l) {
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
    }, l !== null && (l = Nu(l), l !== null && ny(l)), t) : (t.eventSystemFlags |= u, l = t.targetContainers, a !== null && l.indexOf(a) === -1 && l.push(a), t);
  }
  function Rh(t, l, e, u, a) {
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
      var e = N(l);
      if (e !== null) {
        if (l = e.tag, l === 13) {
          if (l = D(e), l !== null) {
            t.blockedOn = l, lr(t.priority, function() {
              iy(e);
            });
            return;
          }
        } else if (l === 31) {
          if (l = B(e), l !== null) {
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
      var e = No(t.nativeEvent);
      if (e === null) {
        e = t.nativeEvent;
        var u = new e.constructor(
          e.type,
          e
        );
        oc = u, e.target.dispatchEvent(u), oc = null;
      } else
        return l = Nu(e), l !== null && ny(l), t.blockedOn = e, !1;
      l.shift();
    }
    return !0;
  }
  function ry(t, l, e) {
    qi(t) && e.delete(l);
  }
  function Dh() {
    Mo = !1, Je !== null && qi(Je) && (Je = null), we !== null && qi(we) && (we = null), $e !== null && qi($e) && ($e = null), cn.forEach(ry), fn.forEach(ry);
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
          var n = Nu(e);
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
    Je !== null && Gi(Je, t), we !== null && Gi(we, t), $e !== null && Gi($e, t), cn.forEach(l), fn.forEach(l);
    for (var e = 0; e < We.length; e++) {
      var u = We[e];
      u.blockedOn === t && (u.blockedOn = null);
    }
    for (; 0 < We.length && (e = We[0], e.blockedOn === null); )
      oy(e), e.blockedOn === null && We.shift();
    if (e = (t.ownerDocument || t).$$reactFormReplay, e != null)
      for (u = 0; u < e.length; u += 3) {
        var a = e[u], n = e[u + 1], i = a[al] || null;
        if (typeof n == "function")
          i || sy(e);
        else if (i) {
          var c = null;
          if (n && n.hasAttribute("formAction")) {
            if (a = n, i = n[al] || null)
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
  function Ro(t) {
    this._internalRoot = t;
  }
  Xi.prototype.render = Ro.prototype.render = function(t) {
    var l = this._internalRoot;
    if (l === null) throw Error(o(409));
    var e = l.current, u = bl();
    uy(e, u, t, l, null, null);
  }, Xi.prototype.unmount = Ro.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var l = t.containerInfo;
      uy(t.current, 2, null, t, null, null), Ai(), l[_u] = null;
    }
  };
  function Xi(t) {
    this._internalRoot = t;
  }
  Xi.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var l = tr();
      t = { blockedOn: null, target: t, priority: l };
      for (var e = 0; e < We.length && l !== 0 && l < We[e].priority; e++) ;
      We.splice(e, 0, t), e === 0 && oy(t);
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
    return t = W(l), t = t !== null ? M(t) : null, t = t === null ? null : t.stateNode, t;
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
    if (!O(t)) throw Error(o(299));
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
    ), t[_u] = l.current, no(t), new Ro(l);
  }, sn.hydrateRoot = function(t, l, e) {
    if (!O(t)) throw Error(o(299));
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
    ), l.context = ey(null), e = l.current, u = bl(), u = uc(u), a = xe(u), a.callback = null, He(e, a, u), e = u, l.current.lanes = e, Sa(l, e), kl(l), t[_u] = l.current, no(t), new Xi(l);
  }, sn.version = "19.3.0", sn;
}
var zy;
function Vh() {
  if (zy) return xo.exports;
  zy = 1;
  function f() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f);
      } catch (s) {
        console.error(s);
      }
  }
  return f(), xo.exports = Zh(), xo.exports;
}
var Kh = Vh();
function Jh(f) {
  return f && typeof f == "object" ? f : typeof window > "u" ? null : window;
}
function Oy({
  snapshot: f,
  ownSeat: s = null,
  replayIndex: y = null,
  flipVertical: o = !1
} = {}) {
  const O = f && typeof f == "object" && !Array.isArray(f) ? { ...f } : {};
  return {
    ...O,
    boardCode: String(O.boardCode || ""),
    version: Number.isFinite(Number(O.version)) ? Number(O.version) : 0,
    ownSeat: s,
    replayIndex: y,
    flipVertical: !!o
  };
}
function wh({
  node: f,
  snapshot: s,
  ownSeat: y,
  replayIndex: o,
  flipVertical: O,
  onMoveClick: N,
  elmRuntime: D
} = {}) {
  const Y = Jh(D)?.Elm?.BoardIsland?.init;
  if (typeof Y != "function" || !f)
    return {
      app: null,
      sendSnapshotUpdate: () => {
      },
      cleanup: () => {
      }
    };
  const W = Oy({
    snapshot: s,
    ownSeat: y,
    replayIndex: o,
    flipVertical: O
  }), M = Y({ node: f, flags: W }), p = M?.ports?.boardMoveClicked, j = M?.ports?.boardSnapshot, yt = (H) => {
    typeof N == "function" && N(H);
  };
  return typeof p?.subscribe == "function" && p.subscribe(yt), { app: M, sendSnapshotUpdate: (H) => {
    typeof j?.send == "function" && j.send(Oy(H));
  }, cleanup: () => {
    typeof p?.unsubscribe == "function" && p.unsubscribe(yt), typeof M?.unmount == "function" && M.unmount();
  } };
}
function $h({
  snapshot: f,
  ownSeat: s,
  replayIndex: y,
  flipVertical: o,
  onMoveClick: O
}) {
  const N = pl.useRef(null), D = pl.useRef(null), B = pl.useRef(O);
  B.current = O;
  const Y = pl.useMemo(
    () => ({ snapshot: f, ownSeat: s, replayIndex: y, flipVertical: o }),
    [f, s, y, o]
  );
  return pl.useEffect(() => (D.current = wh({
    node: N.current,
    ...Y,
    onMoveClick: (W) => B.current?.(W)
  }), () => {
    D.current?.cleanup?.(), D.current = null;
  }), []), pl.useEffect(() => {
    D.current?.sendSnapshotUpdate?.(Y);
  }, [Y]), /* @__PURE__ */ A.jsx("div", { ref: N, "data-testid": "elm-board-island-host" });
}
const Wh = {
  marginTop: "20px",
  padding: "18px",
  borderRadius: "20px",
  background: "#f7fbf7",
  border: "1px solid rgba(16, 42, 26, 0.08)"
}, Fh = {
  display: "flex",
  justifyContent: "space-between",
  gap: "12px",
  alignItems: "flex-start",
  flexWrap: "wrap"
}, Ih = {
  margin: 0,
  fontSize: "1.25rem"
}, Ay = {
  margin: "4px 0 0",
  fontSize: "0.9rem",
  color: "#567062"
}, kh = {
  display: "inline-flex",
  alignItems: "center",
  gap: "8px",
  borderRadius: "999px",
  padding: "8px 12px",
  background: "rgba(16, 42, 26, 0.08)",
  fontWeight: 700
}, Ph = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))",
  gap: "12px",
  marginTop: "16px"
}, t1 = {
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
}, l1 = {
  marginTop: "16px",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: "10px 16px"
}, be = {
  paddingTop: "10px",
  borderTop: "1px solid rgba(16, 42, 26, 0.08)"
}, e1 = {
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
}), u1 = {
  margin: "8px 0 0",
  paddingLeft: "18px",
  color: "#33513f"
};
function Dy(f) {
  return f === "p1" ? "Blue" : f === "p2" ? "Red" : "Unknown";
}
function a1(f) {
  const s = String(f || "").trim();
  return s === "vacant" ? "Open" : s === "disconnected" ? "Disconnected" : s === "active" ? "Occupied" : s || "Unknown";
}
function n1(f, s) {
  return f === "p1" ? "Blue" : f === "p2" ? "Red" : s ? "Waiting List" : "Watching";
}
function i1(f) {
  return `${Number(f?.p1 || 0)} - ${Number(f?.p2 || 0)}`;
}
function c1(f) {
  if (Array.isArray(f?.moves)) return f.moves.length;
  const s = Number(f?.moveCount);
  return Number.isFinite(s) ? s : 0;
}
function f1(f) {
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
  const O = o - Number(s || 0), N = f1(Math.abs(O));
  return y === "future" ? O >= 0 ? `in ${N}` : `${N} ago` : O <= 0 ? `${N} ago` : `in ${N}`;
}
function o1(f, s) {
  const y = Number(f?.moveTimeLimitMs);
  if (!Number.isFinite(y) || y <= 0) return "Untimed";
  const o = `${Math.round(y / 1e3)}s per move`, O = Number(f?.turnStartedAt);
  if (!Number.isFinite(O) || O <= 0) return o;
  const N = O + y, D = Qo(N, s, "future");
  return D ? `${o} • deadline ${D}` : o;
}
function r1(f) {
  const s = Number(f?.watcherCount);
  return Number.isFinite(s) && s >= 0 ? s : null;
}
function _y(f, s) {
  const y = f?.[s] || {}, o = a1(y.status);
  return {
    id: s,
    label: `${Dy(s)} seat`,
    name: o === "Open" ? null : String(y.name || "").trim() || null,
    status: o
  };
}
function s1({
  snapshot: f,
  ownSeat: s = null,
  connectionStatus: y = "idle",
  isWaitingListMember: o = !1,
  claimableSeatActions: O = [],
  leaveSeatAction: N = null,
  waitingListAction: D = null,
  pauseResumeActions: B = [],
  newRoundAction: Y = null,
  nowMs: W = Date.now()
} = {}) {
  if (!f || typeof f != "object") return null;
  const M = f.game && typeof f.game == "object" ? f.game : {}, p = M.players && typeof M.players == "object" ? M.players : {}, j = Array.isArray(M.waitingList) ? M.waitingList : [], yt = String(f.boardCode || M.roomId || "").trim(), Ct = String(M.turn || "").trim();
  return {
    boardCode: yt,
    connectionStatus: String(y || "idle"),
    viewerRole: n1(String(s || "").trim(), o),
    seats: [_y(p, "p1"), _y(p, "p2")],
    sessionState: String(M.status || "waiting"),
    currentTurn: Ct ? Dy(Ct) : "Waiting",
    score: i1(M.score),
    moveCount: c1(M),
    timerSummary: o1(M, W),
    waitingListCount: j.length,
    waitingListNames: j.map((Mt) => String(Mt?.displayName || "").trim()).filter(Boolean),
    watcherCount: r1(M),
    lastActivity: Qo(M.lastActivityAt, W, "past"),
    expiry: Qo(M.expiresAt, W, "future"),
    actions: {
      claimableSeatActions: Array.isArray(O) ? O : [],
      leaveSeatAction: N,
      waitingListAction: D,
      pauseResumeActions: Array.isArray(B) ? B : [],
      newRoundAction: Y
    }
  };
}
function Ny({ label: f, value: s, children: y }) {
  return /* @__PURE__ */ A.jsxs("article", { style: t1, children: [
    /* @__PURE__ */ A.jsx("p", { style: Pl, children: f }),
    /* @__PURE__ */ A.jsx("p", { style: te, children: s }),
    y
  ] });
}
function d1({
  snapshot: f,
  ownSeat: s,
  connectionStatus: y,
  isWaitingListMember: o,
  claimableSeatActions: O,
  leaveSeatAction: N,
  waitingListAction: D,
  pauseResumeActions: B,
  newRoundAction: Y,
  onClaimSeat: W,
  onLeaveSeat: M,
  onWaitingListAction: p,
  onPauseAction: j,
  onResumeAction: yt,
  onNewRoundAction: Ct,
  nowMs: Mt
}) {
  const H = s1({
    snapshot: f,
    ownSeat: s,
    connectionStatus: y,
    isWaitingListMember: o,
    claimableSeatActions: O,
    leaveSeatAction: N,
    waitingListAction: D,
    pauseResumeActions: B,
    newRoundAction: Y,
    nowMs: Mt
  });
  return H ? /* @__PURE__ */ A.jsxs("section", { style: Wh, "aria-label": "Match details", children: [
    /* @__PURE__ */ A.jsxs("div", { style: Fh, children: [
      /* @__PURE__ */ A.jsxs("div", { children: [
        /* @__PURE__ */ A.jsx("h2", { style: Ih, children: "Match details" }),
        /* @__PURE__ */ A.jsxs("p", { style: Ay, children: [
          "Board ",
          H.boardCode || "not selected"
        ] })
      ] }),
      /* @__PURE__ */ A.jsx("div", { style: kh, children: H.viewerRole })
    ] }),
    /* @__PURE__ */ A.jsxs("div", { style: Ph, children: [
      /* @__PURE__ */ A.jsx(Ny, { label: "Connection Status", value: H.connectionStatus }),
      H.seats.map((ct) => /* @__PURE__ */ A.jsx(
        Ny,
        {
          label: ct.label,
          value: ct.name || ct.status,
          children: /* @__PURE__ */ A.jsxs("p", { style: Ay, children: [
            "Status: ",
            ct.status
          ] })
        },
        ct.id
      ))
    ] }),
    /* @__PURE__ */ A.jsxs("div", { style: l1, children: [
      /* @__PURE__ */ A.jsxs("div", { style: be, children: [
        /* @__PURE__ */ A.jsx("p", { style: Pl, children: "Session State" }),
        /* @__PURE__ */ A.jsx("p", { style: te, children: H.sessionState })
      ] }),
      /* @__PURE__ */ A.jsxs("div", { style: be, children: [
        /* @__PURE__ */ A.jsx("p", { style: Pl, children: "Current Turn" }),
        /* @__PURE__ */ A.jsx("p", { style: te, children: H.currentTurn })
      ] }),
      /* @__PURE__ */ A.jsxs("div", { style: be, children: [
        /* @__PURE__ */ A.jsx("p", { style: Pl, children: "Score" }),
        /* @__PURE__ */ A.jsx("p", { style: te, children: H.score })
      ] }),
      /* @__PURE__ */ A.jsxs("div", { style: be, children: [
        /* @__PURE__ */ A.jsx("p", { style: Pl, children: "Move Count" }),
        /* @__PURE__ */ A.jsx("p", { style: te, children: H.moveCount })
      ] }),
      /* @__PURE__ */ A.jsxs("div", { style: be, children: [
        /* @__PURE__ */ A.jsx("p", { style: Pl, children: "Move Timer" }),
        /* @__PURE__ */ A.jsx("p", { style: te, children: H.timerSummary })
      ] }),
      /* @__PURE__ */ A.jsxs("div", { style: be, children: [
        /* @__PURE__ */ A.jsx("p", { style: Pl, children: "Waiting List" }),
        /* @__PURE__ */ A.jsx("p", { style: te, children: H.waitingListCount }),
        H.waitingListNames.length > 0 ? /* @__PURE__ */ A.jsx("ul", { style: u1, children: H.waitingListNames.map((ct) => /* @__PURE__ */ A.jsx("li", { children: ct }, ct)) }) : null
      ] }),
      H.watcherCount !== null ? /* @__PURE__ */ A.jsxs("div", { style: be, children: [
        /* @__PURE__ */ A.jsx("p", { style: Pl, children: "Watchers" }),
        /* @__PURE__ */ A.jsx("p", { style: te, children: H.watcherCount })
      ] }) : null,
      H.lastActivity ? /* @__PURE__ */ A.jsxs("div", { style: be, children: [
        /* @__PURE__ */ A.jsx("p", { style: Pl, children: "Last Activity" }),
        /* @__PURE__ */ A.jsx("p", { style: te, children: H.lastActivity })
      ] }) : null,
      H.expiry ? /* @__PURE__ */ A.jsxs("div", { style: be, children: [
        /* @__PURE__ */ A.jsx("p", { style: Pl, children: "Expires" }),
        /* @__PURE__ */ A.jsx("p", { style: te, children: H.expiry })
      ] }) : null
    ] }),
    /* @__PURE__ */ A.jsxs("div", { style: e1, children: [
      H.actions.claimableSeatActions.map((ct) => /* @__PURE__ */ A.jsx(
        "button",
        {
          type: "button",
          style: dn(!1),
          onClick: () => W?.(ct.seatId),
          children: ct.label
        },
        ct.seatId
      )),
      H.actions.leaveSeatAction ? /* @__PURE__ */ A.jsx(
        "button",
        {
          type: "button",
          style: dn(!!H.actions.leaveSeatAction.danger),
          onClick: () => M?.(),
          children: H.actions.leaveSeatAction.label
        }
      ) : null,
      H.actions.waitingListAction ? /* @__PURE__ */ A.jsx(
        "button",
        {
          type: "button",
          style: dn(!1),
          onClick: () => p?.(H.actions.waitingListAction.type),
          children: H.actions.waitingListAction.label
        }
      ) : null,
      H.actions.pauseResumeActions.map((ct) => /* @__PURE__ */ A.jsx(
        "button",
        {
          type: "button",
          style: dn(!1),
          onClick: () => {
            if (ct.type === "pause") {
              j?.("pause");
              return;
            }
            yt?.("resume");
          },
          children: ct.label
        },
        ct.type
      )),
      H.actions.newRoundAction ? /* @__PURE__ */ A.jsx(
        "button",
        {
          type: "button",
          style: dn(!1),
          onClick: () => Ct?.(),
          children: H.actions.newRoundAction.label
        }
      ) : null
    ] })
  ] }) : null;
}
const y1 = {
  marginTop: "20px",
  padding: "18px",
  borderRadius: "20px",
  background: "#f7fbf7",
  border: "1px solid rgba(16, 42, 26, 0.08)"
}, m1 = {
  margin: 0,
  fontSize: "1.1rem"
}, v1 = {
  margin: "8px 0 0",
  color: "#567062",
  lineHeight: 1.5
}, h1 = {
  marginTop: "14px",
  padding: "12px 14px",
  borderRadius: "14px",
  background: "#ffffff",
  border: "1px solid rgba(16, 42, 26, 0.08)",
  overflowWrap: "anywhere"
}, g1 = {
  color: "#0a5f20",
  fontWeight: 700,
  textDecoration: "none"
}, S1 = {
  display: "flex",
  gap: "10px",
  marginTop: "14px",
  flexWrap: "wrap",
  alignItems: "flex-start"
}, b1 = {
  border: "1px solid rgba(16, 42, 26, 0.12)",
  borderRadius: "999px",
  padding: "8px 14px",
  background: "#f7fbf7",
  color: "#102a1a",
  fontWeight: 700,
  cursor: "pointer"
}, T1 = {
  display: "inline-flex",
  flexDirection: "column",
  gap: "8px",
  alignItems: "center",
  textDecoration: "none",
  color: "#102a1a",
  fontWeight: 700
}, p1 = {
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
function xy() {
  return globalThis.window?.document ?? globalThis.document ?? null;
}
function Hy(f) {
  return String(f || "").trim();
}
function E1(f) {
  return f ? typeof f.href == "string" && f.href ? f.href : `${f.origin || ""}${f.pathname || "/react"}${f.search || ""}${f.hash || ""}` : "";
}
function Lo(f, { locationLike: s = Ji() } = {}) {
  const y = Hy(f), o = E1(s);
  if (!y || !o) return "";
  const O = new URL(o);
  return O.pathname = "/react", O.search = "", O.hash = "", O.searchParams.set("board", y), O.toString();
}
function z1(f, { locationLike: s = Ji() } = {}) {
  const y = Lo(f, { locationLike: s });
  return y ? `/api/qr?url=${encodeURIComponent(y)}` : "";
}
function O1(f, s) {
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
  documentLike: o = xy()
} = {}) {
  const O = Lo(f, { locationLike: s });
  if (!O)
    return { ok: !1, error: "Share link unavailable." };
  if (typeof y?.clipboard?.writeText == "function")
    try {
      return await y.clipboard.writeText(O), { ok: !0, text: O };
    } catch {
    }
  return O1(O, o) ? { ok: !0, text: O } : { ok: !1, error: "Could not copy link. Copy it manually." };
}
function _1({
  boardCode: f,
  locationLike: s = Ji(),
  navigatorLike: y = Uy(),
  documentLike: o = xy(),
  onToast: O
}) {
  const N = Hy(f);
  if (!N) return null;
  const D = Lo(N, { locationLike: s }), B = z1(N, { locationLike: s });
  return /* @__PURE__ */ A.jsxs("section", { style: y1, "aria-label": "Share board link", children: [
    /* @__PURE__ */ A.jsx("h2", { style: m1, children: "Share" }),
    /* @__PURE__ */ A.jsx("p", { style: v1, children: "Copy the React board link or scan the QR code to open this board in the product shell." }),
    /* @__PURE__ */ A.jsx("div", { style: h1, children: /* @__PURE__ */ A.jsx("a", { href: D, style: g1, children: D }) }),
    /* @__PURE__ */ A.jsxs("div", { style: S1, children: [
      /* @__PURE__ */ A.jsx(
        "button",
        {
          type: "button",
          style: b1,
          onClick: async () => {
            const Y = await A1({
              boardCode: N,
              locationLike: s,
              navigatorLike: y,
              documentLike: o
            });
            O?.(
              Y.ok ? "Link copied to clipboard." : Y.error || "Could not copy link. Copy it manually."
            );
          },
          children: "Copy Link"
        }
      ),
      /* @__PURE__ */ A.jsxs("a", { href: D, style: T1, children: [
        /* @__PURE__ */ A.jsx(
          "img",
          {
            src: B,
            alt: `QR code for board ${N}`,
            style: p1
          }
        ),
        "Open board link"
      ] })
    ] })
  ] });
}
function N1(f) {
  if (typeof f != "function")
    throw new Error("Fetch API unavailable.");
  return f;
}
async function C1(f) {
  return f.json();
}
async function M1({ clientId: f, moveTimeLimitSeconds: s }, { fetchImpl: y = globalThis.fetch } = {}) {
  const o = N1(y), O = Number(s), N = {
    clientId: String(f || "").trim(),
    moveTimeLimitSeconds: Number.isFinite(O) ? O : 15
  }, D = await o("/api/rooms", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(N)
  });
  if (!D.ok)
    throw new Error(`Board creation failed: ${D.status}`);
  return C1(D);
}
function R1(f = globalThis.window?.location || globalThis.location) {
  const s = f?.protocol === "https:" ? "wss:" : "ws:", y = f?.host || "localhost";
  return `${s}//${y}/ws`;
}
function D1({
  roomId: f,
  clientId: s,
  onMessage: y,
  onStatus: o,
  WebSocketImpl: O = globalThis.window?.WebSocket || globalThis.WebSocket,
  socketUrl: N = R1()
} = {}) {
  if (typeof O != "function")
    throw new Error("WebSocket unavailable.");
  const D = new O(N);
  return D.onopen = () => {
    o?.("connected"), D.send(
      JSON.stringify({
        type: "watch",
        roomId: String(f || "").trim(),
        clientId: String(s || "").trim()
      })
    );
  }, D.onmessage = (B) => {
    try {
      y?.(JSON.parse(B.data));
    } catch {
      y?.({ type: "error", error: "malformed websocket message" });
    }
  }, D.onerror = () => {
    o?.("error");
  }, D.onclose = () => {
    o?.("disconnected");
  }, {
    socket: D,
    send(B) {
      D.send(JSON.stringify(B));
    },
    close() {
      D.close?.();
    }
  };
}
const Cy = "traceballElmClientId", Ki = "traceballPlayerName", U1 = "traceballOnlineMoveTimer";
function wi() {
  return globalThis.window?.localStorage || globalThis.localStorage;
}
function x1(f = Math.random) {
  return f().toString(36).slice(2, 12);
}
function H1({
  storage: f = wi(),
  random: s = Math.random
} = {}) {
  const y = f?.getItem?.(Cy);
  if (y) return y;
  const o = `traceball-elm-${x1(s)}`;
  return f?.setItem?.(Cy, o), o;
}
function jy(f = Math.random) {
  const s = (y) => y[Math.floor(f() * y.length)];
  return `${s(["Neon", "Turbo", "Cosmic", "Lucky", "Pixel", "Rocket", "Thunder"])} ${s(["Striker", "Falcon", "Comet", "Phantom", "Kicker", "Ace", "Wizard"])}`;
}
function By(f, s = "") {
  return String(f || "").replace(/\s+/g, " ").trim().slice(0, 24) || s;
}
function j1({
  storage: f = wi(),
  randomName: s = jy
} = {}) {
  const y = String(f?.getItem?.(Ki) || ""), o = By(y, "");
  if (o && o !== "Elm Player")
    return f?.setItem?.(Ki, o), o;
  const O = s();
  return f?.setItem?.(Ki, O), O;
}
function B1(f, { storage: s = wi(), randomName: y = jy } = {}) {
  const o = By(f, y());
  return s?.setItem?.(Ki, o), o;
}
function Y1(f, s = 15) {
  const y = Number(f);
  return Number.isFinite(y) && y >= 0 ? y : s;
}
function q1({
  storage: f = wi(),
  fallback: s = 15
} = {}) {
  return Y1(
    f?.getItem?.(U1),
    s
  );
}
function G1({
  clientId: f = "",
  playerName: s = "",
  connectionStatus: y = "idle",
  currentBoardCode: o = "",
  isWaitingListMember: O = !1,
  boardState: N = null,
  boardList: D = [],
  mainTab: B = "home",
  mode: Y = "online",
  toast: W = null,
  onlineMoveTimer: M = 15,
  localMoveTimer: p = 15,
  historyPanelOpen: j = !1,
  rulesPanelOpen: yt = !1
} = {}) {
  return {
    clientId: f,
    playerName: s,
    connectionStatus: y,
    currentBoardCode: o,
    isWaitingListMember: O,
    boardState: N,
    boardList: D,
    mainTab: B,
    mode: Y,
    toast: W,
    onlineSetup: {
      moveTimeLimitSeconds: M
    },
    localSetup: {
      moveTimeLimitSeconds: p
    },
    historyPanelOpen: j,
    rulesPanelOpen: yt
  };
}
function Q1(f, s, y) {
  if (!y || typeof y != "object") return !1;
  const o = String(f || "").trim(), O = String(y.boardCode || "").trim();
  if (o && O && o !== O) return !1;
  if (!s || typeof s != "object") return !0;
  const N = String(s.boardCode || "").trim();
  if (!N || N !== O) return !0;
  const D = Number(s.version), B = Number(y.version);
  return Number.isFinite(D) ? Number.isFinite(B) ? B > D : !1 : !0;
}
function X1(f, s) {
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
      return Q1(
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
const L1 = {
  minHeight: "100vh",
  display: "grid",
  placeItems: "center",
  padding: "32px 20px",
  background: "radial-gradient(circle at top, rgba(10, 143, 40, 0.18), transparent 38%), linear-gradient(180deg, #f6fbf4 0%, #e4f0e2 100%)",
  color: "#102a1a"
}, Z1 = {
  width: "min(720px, 100%)",
  borderRadius: "24px",
  padding: "28px",
  background: "rgba(255, 255, 255, 0.92)",
  boxShadow: "0 24px 70px rgba(16, 42, 26, 0.16)",
  border: "1px solid rgba(16, 42, 26, 0.08)"
}, V1 = {
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
}, $1 = {
  width: "100%",
  marginTop: "10px",
  padding: "12px 14px",
  borderRadius: "12px",
  border: "1px solid rgba(16, 42, 26, 0.14)",
  fontSize: "1rem",
  boxSizing: "border-box"
}, My = {
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
}, W1 = {
  marginTop: "24px",
  padding: "16px 18px",
  borderRadius: "18px",
  background: "#102a1a",
  color: "#f6fbf4",
  lineHeight: 1.55
}, F1 = {
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
function I1(f) {
  const s = Number(f);
  return Number.isFinite(s) ? s : 0;
}
function Yy(f) {
  const s = f?.game?.players;
  return s && typeof s == "object" ? s : null;
}
function k1(f) {
  const s = String(f || "").trim();
  return s === "active" || s === "disconnected";
}
function P1(f) {
  return f === "p1" ? "Claim Blue" : "Claim Red";
}
function tg(f) {
  return f?.game?.status === "playing" || f?.game?.status === "paused";
}
function lg() {
  return globalThis.window?.history ?? globalThis.history ?? null;
}
function Zo() {
  return globalThis.window?.location ?? globalThis.location ?? null;
}
function eg(f) {
  return f ? typeof f.href == "string" && f.href ? f.href : `${f.origin || "http://localhost"}${f.pathname || "/react"}${f.search || ""}${f.hash || ""}` : "";
}
function ug({
  locationLike: f = Zo()
} = {}) {
  const s = eg(f);
  if (!s) return "";
  const y = new URL(s);
  return Te(
    y.searchParams.get("board") || y.searchParams.get("room") || y.searchParams.get("code") || ""
  );
}
function ag(f) {
  if (!f || typeof f != "object" || String(f.type || "") !== "state") return null;
  const s = Te(f.boardCode || f.roomId), y = f.board && typeof f.board == "object", o = f.game && typeof f.game == "object";
  return !s || !y && !o ? null : {
    boardCode: s,
    version: I1(f.version),
    ...y ? { board: f.board } : {},
    ...o ? { game: f.game } : {}
  };
}
function ng(f, { historyLike: s = lg(), locationLike: y = Zo() } = {}) {
  if (!y || typeof s?.replaceState != "function")
    return null;
  const o = typeof y.href == "string" && y.href ? y.href : `${y.origin || "http://localhost"}${y.pathname || "/react"}${y.search || ""}${y.hash || ""}`, O = new URL(o);
  O.pathname = "/react", f ? O.searchParams.set("board", String(f).trim()) : O.searchParams.delete("board");
  const N = `${O.pathname}${O.search}${O.hash}`;
  return s.replaceState(s.state ?? null, "", N), N;
}
function ig({
  currentBoardCode: f,
  clientId: s,
  dispatch: y,
  onOwnSeat: o,
  onMessage: O,
  connect: N = D1
}) {
  const D = Te(f);
  return !D || typeof N != "function" ? null : N({
    roomId: D,
    clientId: String(s || ""),
    onStatus(B) {
      y?.({ type: "setConnectionStatus", status: B });
    },
    onMessage(B) {
      if (O?.(B), B?.type === "joined") {
        const W = String(B.playerId || "").trim();
        (W === "p1" || W === "p2") && (o?.(W), y?.({ type: "setWaitingListMembership", isMember: !1 }));
        return;
      }
      if (B?.type === "left") {
        o?.(null), y?.({ type: "setWaitingListMembership", isMember: !1 }), y?.({ type: "setToast", toast: "You left the board." });
        return;
      }
      if (B?.type === "waitingListJoined") {
        y?.({ type: "setWaitingListMembership", isMember: !0 });
        return;
      }
      if (B?.type === "waitingListLeft") {
        y?.({ type: "setWaitingListMembership", isMember: !1 });
        return;
      }
      if (B?.type === "BoardNotFound" && typeof B.message == "string") {
        y?.({ type: "setToast", toast: B.message });
        return;
      }
      if (B?.type === "error" && typeof B.error == "string") {
        y?.({ type: "setToast", toast: B.error });
        return;
      }
      const Y = ag(B);
      Y && y?.({ type: "receiveBoardState", boardState: Y });
    }
  });
}
function Go({
  roomId: f,
  clientId: s,
  dispatch: y,
  setOwnSeat: o,
  connectionRef: O,
  activeBoardRef: N,
  onMessage: D,
  connect: B = ig
}) {
  const Y = Te(f);
  if (!Y || typeof B != "function") return null;
  if (N?.current === Y && O?.current)
    return O.current;
  O?.current?.close?.(), O && (O.current = null), N && (N.current = Y), o?.(null);
  const W = B({
    currentBoardCode: Y,
    clientId: s,
    dispatch: y,
    onOwnSeat: o,
    onMessage: D
  });
  return O && (O.current = W), W;
}
function cg({ snapshot: f, ownSeat: s } = {}) {
  const y = String(s || "").trim();
  if (y === "p1" || y === "p2") return [];
  const o = Yy(f);
  return o ? ["p1", "p2"].filter((O) => o?.[O]?.status === "vacant").map((O) => ({ seatId: O, label: P1(O) })) : [];
}
function fg({ ownSeat: f, snapshot: s } = {}) {
  const y = String(f || "").trim();
  return y !== "p1" && y !== "p2" ? null : tg(s) ? { label: "Leave Seat (Forfeit)", danger: !0 } : { label: "Leave Seat", danger: !1 };
}
function og({
  ownSeat: f,
  snapshot: s,
  isWaitingListMember: y
} = {}) {
  const o = String(f || "").trim();
  if (o === "p1" || o === "p2") return null;
  if (y)
    return { type: "leave", label: "Leave Waiting List" };
  const O = Yy(s);
  return O && ["p1", "p2"].every(
    (D) => k1(O?.[D]?.status)
  ) ? { type: "join", label: "Join Waiting List" } : null;
}
function rg({ ownSeat: f, snapshot: s } = {}) {
  const y = String(f || "").trim();
  if (y !== "p1" && y !== "p2") return [];
  const o = String(s?.game?.status || "").trim();
  return o === "playing" ? s?.game?.turn === y ? [{ type: "pause", label: "Pause Game" }] : [] : o === "paused" ? (s?.game?.pause?.resumeTurn || s?.game?.pause?.byPlayerId || null) === y ? [{ type: "resume", label: "Resume Game" }] : [] : [];
}
function sg({ ownSeat: f, snapshot: s } = {}) {
  const y = String(f || "").trim();
  if (y !== "p1" && y !== "p2") return null;
  const o = String(s?.game?.status || "").trim();
  return o === "finished" ? { label: "Continue", reason: "between-rounds" } : o === "paused" && s?.game?.pause?.byPlayerId === y ? { label: "Start New Round", reason: "paused-owner" } : null;
}
function dg({
  clientId: f,
  dispatch: s,
  startWatching: y,
  locationLike: o = Zo()
}) {
  const O = ug({ locationLike: o });
  return O ? (s?.({ type: "setCurrentBoardCode", boardCode: O }), y?.({
    roomId: O,
    clientId: f,
    onMessage(N) {
      N?.type === "BoardNotFound" && typeof N.message == "string" && s?.({ type: "setToast", toast: N.message }), N?.type === "error" && typeof N.error == "string" && s?.({ type: "setToast", toast: N.error });
    }
  })) : null;
}
function yg(f) {
  const s = f?.point;
  if (!s || typeof s != "object") return null;
  const y = Number(s.x), o = Number(s.y);
  return !Number.isFinite(y) || !Number.isFinite(o) ? null : { x: y, y: o };
}
function Ie(f) {
  return typeof f?.send == "function" && Number(f?.socket?.readyState) === 1;
}
function mg({
  payload: f,
  ownSeat: s,
  connection: y,
  dispatch: o
}) {
  if (!Ie(y)) {
    o?.({
      type: "setToast",
      toast: "Connection unavailable. Reconnect to move."
    });
    return;
  }
  const O = String(s || "").trim();
  if (O !== "p1" && O !== "p2") {
    o?.({ type: "setToast", toast: "Join a seat to move." });
    return;
  }
  const N = yg(f);
  if (!N) {
    o?.({ type: "setToast", toast: "Invalid move target." });
    return;
  }
  try {
    y.send({ type: "move", to: N });
  } catch {
    o?.({
      type: "setToast",
      toast: "Move could not be sent. Reconnect and try again."
    });
  }
}
function vg({
  seatId: f,
  currentBoardCode: s,
  clientId: y,
  playerName: o,
  connection: O,
  dispatch: N
}) {
  if (!Ie(O)) {
    N?.({
      type: "setToast",
      toast: "Connection unavailable. Reconnect to claim a seat."
    });
    return;
  }
  const D = String(f || "").trim();
  if (D !== "p1" && D !== "p2") {
    N?.({ type: "setToast", toast: "Invalid seat selection." });
    return;
  }
  O.send({
    type: "claimSeat",
    seatId: D,
    name: String(o || "").trim(),
    roomId: Te(s),
    clientId: String(y || "").trim()
  });
}
function hg({
  currentBoardCode: f,
  clientId: s,
  playerName: y,
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
    name: String(y || "").trim(),
    roomId: Te(f),
    clientId: String(s || "").trim()
  });
}
function gg({
  currentBoardCode: f,
  clientId: s,
  connection: y,
  dispatch: o
}) {
  if (!Ie(y)) {
    o?.({
      type: "setToast",
      toast: "Connection unavailable. Reconnect to leave the waiting list."
    });
    return;
  }
  y.send({
    type: "leaveWaitingList",
    roomId: Te(f),
    clientId: String(s || "").trim()
  });
}
function Sg({ ownSeat: f, connection: s, dispatch: y }) {
  const o = String(f || "").trim();
  if (o !== "p1" && o !== "p2") {
    y?.({ type: "setToast", toast: "You are not occupying a seat." });
    return;
  }
  if (!Ie(s)) {
    y?.({
      type: "setToast",
      toast: "Connection unavailable. Reconnect to leave your seat."
    });
    return;
  }
  s.send({ type: "leave" });
}
function bg({ ownSeat: f, connection: s, dispatch: y }) {
  const o = String(f || "").trim();
  if (o !== "p1" && o !== "p2") {
    y?.({ type: "setToast", toast: "You are not occupying a seat." });
    return;
  }
  if (!Ie(s)) {
    y?.({
      type: "setToast",
      toast: "Connection unavailable. Reconnect to pause."
    });
    return;
  }
  s.send({ type: "pause" });
}
function Tg({ ownSeat: f, connection: s, dispatch: y }) {
  const o = String(f || "").trim();
  if (o !== "p1" && o !== "p2") {
    y?.({ type: "setToast", toast: "You are not occupying a seat." });
    return;
  }
  if (!Ie(s)) {
    y?.({
      type: "setToast",
      toast: "Connection unavailable. Reconnect to resume."
    });
    return;
  }
  s.send({ type: "resume" });
}
function pg({ ownSeat: f, connection: s, dispatch: y }) {
  const o = String(f || "").trim();
  if (o !== "p1" && o !== "p2") {
    y?.({ type: "setToast", toast: "You are not occupying a seat." });
    return;
  }
  if (!Ie(s)) {
    y?.({
      type: "setToast",
      toast: "Connection unavailable. Reconnect to continue."
    });
    return;
  }
  s.send({ type: "reset" });
}
async function Eg({
  clientId: f,
  moveTimeLimitSeconds: s,
  dispatch: y,
  create: o = M1,
  syncUrl: O = ng,
  startWatching: N,
  refreshBoardList: D
}) {
  try {
    const B = await o({ clientId: f, moveTimeLimitSeconds: s }), Y = Te(B?.roomId);
    if (!Y)
      throw new Error("Board creation response missing roomId.");
    return y?.({ type: "setCurrentBoardCode", boardCode: Y }), O?.(Y), N?.({ roomId: Y, clientId: f }), await D?.(), B;
  } catch (B) {
    return y?.({
      type: "setToast",
      toast: B instanceof Error && B.message ? B.message : "Board creation failed."
    }), null;
  }
}
function zg({ initialState: f }) {
  const [s, y] = pl.useReducer(X1, f), [o, O] = pl.useState(null), N = pl.useRef(null), D = pl.useRef(""), B = f?.demoBoardSnapshot || null, Y = s.boardState || B, W = String(s.connectionStatus || "idle"), M = cg({
    snapshot: Y,
    ownSeat: o
  }), p = fg({
    ownSeat: o,
    snapshot: Y
  }), j = og({
    ownSeat: o,
    snapshot: Y,
    isWaitingListMember: s.isWaitingListMember
  }), yt = rg({
    ownSeat: o,
    snapshot: Y
  }), Ct = sg({
    ownSeat: o,
    snapshot: Y
  });
  pl.useEffect(() => {
    const rt = dg({
      clientId: s.clientId,
      dispatch: y,
      startWatching: ({ roomId: Ot, clientId: ul, onMessage: kt }) => Go({
        roomId: Ot,
        clientId: ul,
        dispatch: y,
        setOwnSeat: O,
        connectionRef: N,
        activeBoardRef: D,
        onMessage: kt
      })
    });
    return () => {
      N.current === rt && rt && (D.current = "", N.current = null, rt.close?.());
    };
  }, []), pl.useEffect(() => {
    const rt = Te(s.currentBoardCode);
    if (!rt) {
      N.current = null, O(null), y({ type: "setConnectionStatus", status: "idle" });
      return;
    }
    let Ot = null;
    try {
      Ot = Go({
        roomId: rt,
        clientId: s.clientId,
        dispatch: y,
        setOwnSeat: O,
        connectionRef: N,
        activeBoardRef: D,
        onMessage: null
      });
    } catch {
      D.current = "", N.current = null, y({ type: "setConnectionStatus", status: "error" });
      return;
    }
    return () => {
      N.current === Ot && (D.current = "", N.current = null, Ot?.close?.());
    };
  }, [s.currentBoardCode, s.clientId]);
  const Mt = s.clientId && s.clientId.length > 6 ? `...${s.clientId.slice(-6)}` : "identity ready", H = (rt) => {
    const Ot = rt.target.value;
    y({ type: "setPlayerName", playerName: Ot }), B1(Ot);
  }, ct = async () => {
    await Eg({
      clientId: s.clientId,
      moveTimeLimitSeconds: s.onlineSetup.moveTimeLimitSeconds,
      dispatch: y,
      startWatching: ({ roomId: rt, clientId: Ot }) => Go({
        roomId: rt,
        clientId: Ot,
        dispatch: y,
        setOwnSeat: O,
        connectionRef: N,
        activeBoardRef: D
      })
    });
  }, Ft = (rt) => {
    vg({
      seatId: rt,
      currentBoardCode: s.currentBoardCode,
      clientId: s.clientId,
      playerName: s.playerName,
      connection: N.current,
      dispatch: y
    });
  }, le = () => {
    Sg({
      ownSeat: o,
      connection: N.current,
      dispatch: y
    });
  }, El = (rt) => {
    if (rt === "join") {
      hg({
        currentBoardCode: s.currentBoardCode,
        clientId: s.clientId,
        playerName: s.playerName,
        connection: N.current,
        dispatch: y
      });
      return;
    }
    gg({
      currentBoardCode: s.currentBoardCode,
      clientId: s.clientId,
      connection: N.current,
      dispatch: y
    });
  }, zl = () => {
    bg({
      ownSeat: o,
      connection: N.current,
      dispatch: y
    });
  }, It = () => {
    Tg({
      ownSeat: o,
      connection: N.current,
      dispatch: y
    });
  }, F = () => {
    pg({
      ownSeat: o,
      connection: N.current,
      dispatch: y
    });
  }, ut = (rt) => {
    y({ type: "setToast", toast: rt });
  };
  return /* @__PURE__ */ A.jsx("main", { style: L1, children: /* @__PURE__ */ A.jsxs("section", { style: Z1, children: [
    /* @__PURE__ */ A.jsx("p", { style: V1, children: "React product shell" }),
    /* @__PURE__ */ A.jsx("h1", { style: K1, children: "Traceball Arena" }),
    /* @__PURE__ */ A.jsx("p", { style: J1, children: "The React shell owns product state while Elm renders the board island. Online authority remains on the server." }),
    /* @__PURE__ */ A.jsxs("div", { style: w1, children: [
      /* @__PURE__ */ A.jsxs("article", { style: Zi, children: [
        /* @__PURE__ */ A.jsx("p", { style: zu, children: "Player Name" }),
        /* @__PURE__ */ A.jsx(
          "input",
          {
            "aria-label": "Player name",
            value: s.playerName || "",
            onChange: H,
            style: $1,
            placeholder: "Enter your name"
          }
        )
      ] }),
      /* @__PURE__ */ A.jsxs("article", { style: Zi, children: [
        /* @__PURE__ */ A.jsx("p", { style: zu, children: "Client Identity" }),
        /* @__PURE__ */ A.jsx("p", { style: Vi, children: Mt })
      ] }),
      /* @__PURE__ */ A.jsxs("article", { style: Zi, children: [
        /* @__PURE__ */ A.jsx("p", { style: zu, children: "Online Move Timer" }),
        /* @__PURE__ */ A.jsxs("p", { style: Vi, children: [
          s.onlineSetup.moveTimeLimitSeconds,
          "s"
        ] })
      ] }),
      /* @__PURE__ */ A.jsxs("article", { style: Zi, children: [
        /* @__PURE__ */ A.jsx("p", { style: zu, children: "Connection" }),
        /* @__PURE__ */ A.jsxs("p", { style: Vi, children: [
          /* @__PURE__ */ A.jsx(
            "span",
            {
              style: {
                ...F1,
                background: W === "connected" ? "#0a8f28" : W === "error" ? "#d64545" : "#9aa79e"
              }
            }
          ),
          W
        ] })
      ] })
    ] }),
    /* @__PURE__ */ A.jsxs("div", { style: { marginTop: "20px" }, children: [
      /* @__PURE__ */ A.jsx("p", { style: zu, children: "Selected Mode" }),
      /* @__PURE__ */ A.jsxs("div", { style: My, children: [
        /* @__PURE__ */ A.jsx(
          "button",
          {
            type: "button",
            style: Yo(s.mode === "online"),
            onClick: () => y({ type: "setMode", mode: "online" }),
            children: "Online"
          }
        ),
        /* @__PURE__ */ A.jsx(
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
    /* @__PURE__ */ A.jsxs("div", { style: { marginTop: "20px" }, children: [
      /* @__PURE__ */ A.jsx("p", { style: zu, children: "Online Actions" }),
      /* @__PURE__ */ A.jsx("div", { style: My, children: /* @__PURE__ */ A.jsx(
        "button",
        {
          type: "button",
          style: Yo(!1),
          onClick: ct,
          children: "Create Board"
        }
      ) })
    ] }),
    /* @__PURE__ */ A.jsxs("div", { style: { marginTop: "20px" }, children: [
      /* @__PURE__ */ A.jsx("p", { style: zu, children: "Active Tab" }),
      /* @__PURE__ */ A.jsx("p", { style: Vi, children: s.mainTab || "home" })
    ] }),
    s.currentBoardCode ? /* @__PURE__ */ A.jsx(
      _1,
      {
        boardCode: s.currentBoardCode,
        onToast: ut
      }
    ) : null,
    Y ? /* @__PURE__ */ A.jsx(
      d1,
      {
        snapshot: Y,
        ownSeat: o,
        connectionStatus: W,
        isWaitingListMember: s.isWaitingListMember,
        claimableSeatActions: M,
        leaveSeatAction: p,
        waitingListAction: j,
        pauseResumeActions: yt,
        newRoundAction: Ct,
        onClaimSeat: Ft,
        onLeaveSeat: le,
        onWaitingListAction: El,
        onPauseAction: zl,
        onResumeAction: It,
        onNewRoundAction: F
      }
    ) : null,
    Y ? /* @__PURE__ */ A.jsx("div", { style: qo, children: /* @__PURE__ */ A.jsx(
      $h,
      {
        snapshot: Y,
        ownSeat: o,
        replayIndex: null,
        flipVertical: !1,
        onMoveClick: (rt) => {
          console.info("Board move click", rt), mg({
            payload: rt,
            ownSeat: o,
            connection: N.current,
            dispatch: y
          });
        }
      }
    ) }) : /* @__PURE__ */ A.jsx("div", { style: qo, children: "Board island not mounted yet" }),
    s.toast ? /* @__PURE__ */ A.jsx("div", { style: { ...qo, marginTop: "10px" }, children: s.toast }) : null,
    /* @__PURE__ */ A.jsx("div", { style: W1, children: "Elm remains the board and replay correctness surface. The server remains authoritative for seats, timers, pause/resume, winners, and online move validation." })
  ] }) });
}
const Ry = document.getElementById("react-root");
if (Ry) {
  const f = G1({
    clientId: H1(),
    playerName: j1(),
    onlineMoveTimer: q1()
  });
  Kh.createRoot(Ry).render(
    /* @__PURE__ */ A.jsx(qh.StrictMode, { children: /* @__PURE__ */ A.jsx(zg, { initialState: f }) })
  );
}
