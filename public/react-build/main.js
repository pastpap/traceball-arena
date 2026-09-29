function E1(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var Jo = { exports: {} }, Su = {};
var D0;
function A1() {
  if (D0) return Su;
  D0 = 1;
  var i = /* @__PURE__ */ Symbol.for("react.transitional.element"), f = /* @__PURE__ */ Symbol.for("react.fragment");
  function s(r, E, x) {
    var M = null;
    if (x !== void 0 && (M = "" + x), E.key !== void 0 && (M = "" + E.key), "key" in E) {
      x = {};
      for (var _ in E)
        _ !== "key" && (x[_] = E[_]);
    } else x = E;
    return E = x.ref, {
      $$typeof: i,
      type: r,
      key: M,
      ref: E !== void 0 ? E : null,
      props: x
    };
  }
  return Su.Fragment = f, Su.jsx = s, Su.jsxs = s, Su;
}
var j0;
function N1() {
  return j0 || (j0 = 1, Jo.exports = A1()), Jo.exports;
}
var h = N1(), $o = { exports: {} }, K = {};
var U0;
function z1() {
  if (U0) return K;
  U0 = 1;
  var i = /* @__PURE__ */ Symbol.for("react.transitional.element"), f = /* @__PURE__ */ Symbol.for("react.portal"), s = /* @__PURE__ */ Symbol.for("react.fragment"), r = /* @__PURE__ */ Symbol.for("react.strict_mode"), E = /* @__PURE__ */ Symbol.for("react.profiler"), x = /* @__PURE__ */ Symbol.for("react.consumer"), M = /* @__PURE__ */ Symbol.for("react.context"), _ = /* @__PURE__ */ Symbol.for("react.forward_ref"), D = /* @__PURE__ */ Symbol.for("react.suspense"), J = /* @__PURE__ */ Symbol.for("react.memo"), j = /* @__PURE__ */ Symbol.for("react.lazy"), p = /* @__PURE__ */ Symbol.for("react.activity"), H = /* @__PURE__ */ Symbol.for("react.view_transition"), nt = Symbol.iterator;
  function Ot(m) {
    return m === null || typeof m != "object" ? null : (m = nt && m[nt] || m["@@iterator"], typeof m == "function" ? m : null);
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
  }, tt = Object.assign, Ft = {};
  function Z(m, O, L) {
    this.props = m, this.context = O, this.refs = Ft, this.updater = L || Nt;
  }
  Z.prototype.isReactComponent = {}, Z.prototype.setState = function(m, O) {
    if (typeof m != "object" && typeof m != "function" && m != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, m, O, "setState");
  }, Z.prototype.forceUpdate = function(m) {
    this.updater.enqueueForceUpdate(this, m, "forceUpdate");
  };
  function Tt() {
  }
  Tt.prototype = Z.prototype;
  function zl(m, O, L) {
    this.props = m, this.context = O, this.refs = Ft, this.updater = L || Nt;
  }
  var xl = zl.prototype = new Tt();
  xl.constructor = zl, tt(xl, Z.prototype), xl.isPureReactComponent = !0;
  var kt = Array.isArray;
  function k() {
  }
  var ft = { H: null, A: null, T: null, S: null }, Ol = Object.prototype.hasOwnProperty;
  function ul(m, O, L) {
    var q = L.ref;
    return {
      $$typeof: i,
      type: m,
      key: O,
      ref: q !== void 0 ? q : null,
      props: L
    };
  }
  function il(m, O) {
    return ul(m.type, O, m.props);
  }
  function Pt(m) {
    return typeof m == "object" && m !== null && m.$$typeof === i;
  }
  function Kl(m) {
    var O = { "=": "=0", ":": "=2" };
    return "$" + m.replace(/[=:]/g, function(L) {
      return O[L];
    });
  }
  var oe = /\/+/g;
  function Dt(m, O) {
    return typeof m == "object" && m !== null && m.key != null ? Kl("" + m.key) : O.toString(36);
  }
  function R(m) {
    switch (m.status) {
      case "fulfilled":
        return m.value;
      case "rejected":
        throw m.reason;
      default:
        switch (typeof m.status == "string" ? m.then(k, k) : (m.status = "pending", m.then(
          function(O) {
            m.status === "pending" && (m.status = "fulfilled", m.value = O);
          },
          function(O) {
            m.status === "pending" && (m.status = "rejected", m.reason = O);
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
  function X(m, O, L, q, it) {
    var F = typeof m;
    (F === "undefined" || F === "boolean") && (m = null);
    var ot = !1;
    if (m === null) ot = !0;
    else
      switch (F) {
        case "bigint":
        case "string":
        case "number":
          ot = !0;
          break;
        case "object":
          switch (m.$$typeof) {
            case i:
            case f:
              ot = !0;
              break;
            case j:
              return ot = m._init, X(
                ot(m._payload),
                O,
                L,
                q,
                it
              );
          }
      }
    if (ot)
      return it = it(m), ot = q === "" ? "." + Dt(m, 0) : q, kt(it) ? (L = "", ot != null && (L = ot.replace(oe, "$&/") + "/"), X(it, O, L, "", function(_l) {
        return _l;
      })) : it != null && (Pt(it) && (it = il(
        it,
        L + (it.key == null || m && m.key === it.key ? "" : ("" + it.key).replace(
          oe,
          "$&/"
        ) + "/") + ot
      )), O.push(it)), 1;
    ot = 0;
    var Y = q === "" ? "." : q + ":";
    if (kt(m))
      for (var w = 0; w < m.length; w++)
        q = m[w], F = Y + Dt(q, w), ot += X(
          q,
          O,
          L,
          F,
          it
        );
    else if (w = Ot(m), typeof w == "function")
      for (m = w.call(m), w = 0; !(q = m.next()).done; )
        q = q.value, F = Y + Dt(q, w++), ot += X(
          q,
          O,
          L,
          F,
          it
        );
    else if (F === "object") {
      if (typeof m.then == "function")
        return X(
          R(m),
          O,
          L,
          q,
          it
        );
      throw O = String(m), Error(
        "Objects are not valid as a React child (found: " + (O === "[object Object]" ? "object with keys {" + Object.keys(m).join(", ") + "}" : O) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return ot;
  }
  function V(m, O, L) {
    if (m == null) return m;
    var q = [], it = 0;
    return X(m, q, "", "", function(F) {
      return O.call(L, F, it++);
    }), q;
  }
  function mt(m) {
    if (m._status === -1) {
      var O = m._result, L = O();
      L.then(
        function(q) {
          (m._status === 0 || m._status === -1) && (m._status = 1, m._result = q, L.status === void 0 && (L.status = "fulfilled", L.value = q));
        },
        function(q) {
          (m._status === 0 || m._status === -1) && (m._status = 2, m._result = q, L.status === void 0 && (L.status = "rejected", L.reason = q));
        }
      ), m._status === -1 && (m._status = 0, m._result = L);
    }
    if (m._status === 1) return m._result.default;
    throw m._result;
  }
  var rt = typeof reportError == "function" ? reportError : function(m) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var O = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof m == "object" && m !== null && typeof m.message == "string" ? String(m.message) : String(m),
        error: m
      });
      if (!window.dispatchEvent(O)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", m);
      return;
    }
    console.error(m);
  };
  function yl(m) {
    var O = ft.T, L = {};
    L.types = O !== null ? O.types : null, ft.T = L;
    try {
      var q = m(), it = ft.S;
      it !== null && it(L, q), typeof q == "object" && q !== null && typeof q.then == "function" && q.then(k, rt);
    } catch (F) {
      rt(F);
    } finally {
      O !== null && L.types !== null && (O.types = L.types), ft.T = O;
    }
  }
  function ql(m) {
    var O = ft.T;
    if (O !== null) {
      var L = O.types;
      L === null ? O.types = [m] : L.indexOf(m) === -1 && L.push(m);
    } else yl(ql.bind(null, m));
  }
  var Jl = {
    map: V,
    forEach: function(m, O, L) {
      V(
        m,
        function() {
          O.apply(this, arguments);
        },
        L
      );
    },
    count: function(m) {
      var O = 0;
      return V(m, function() {
        O++;
      }), O;
    },
    toArray: function(m) {
      return V(m, function(O) {
        return O;
      }) || [];
    },
    only: function(m) {
      if (!Pt(m))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return m;
    }
  };
  return K.Activity = p, K.Children = Jl, K.Component = Z, K.Fragment = s, K.Profiler = E, K.PureComponent = zl, K.StrictMode = r, K.Suspense = D, K.ViewTransition = H, K.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ft, K.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(m) {
      return ft.H.useMemoCache(m);
    }
  }, K.addTransitionType = ql, K.cache = function(m) {
    return function() {
      return m.apply(null, arguments);
    };
  }, K.cacheSignal = function() {
    return null;
  }, K.cloneElement = function(m, O, L) {
    if (m == null)
      throw Error(
        "The argument must be a React element, but you passed " + m + "."
      );
    var q = tt({}, m.props), it = m.key;
    if (O != null)
      for (F in O.key !== void 0 && (it = "" + O.key), O)
        !Ol.call(O, F) || F === "key" || F === "__self" || F === "__source" || F === "ref" && O.ref === void 0 || (q[F] = O[F]);
    var F = arguments.length - 2;
    if (F === 1) q.children = L;
    else if (1 < F) {
      for (var ot = Array(F), Y = 0; Y < F; Y++)
        ot[Y] = arguments[Y + 2];
      q.children = ot;
    }
    return ul(m.type, it, q);
  }, K.createContext = function(m) {
    return m = {
      $$typeof: M,
      _currentValue: m,
      _currentValue2: m,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, m.Provider = m, m.Consumer = {
      $$typeof: x,
      _context: m
    }, m;
  }, K.createElement = function(m, O, L) {
    var q, it = {}, F = null;
    if (O != null)
      for (q in O.key !== void 0 && (F = "" + O.key), O)
        Ol.call(O, q) && q !== "key" && q !== "__self" && q !== "__source" && (it[q] = O[q]);
    var ot = arguments.length - 2;
    if (ot === 1) it.children = L;
    else if (1 < ot) {
      for (var Y = Array(ot), w = 0; w < ot; w++)
        Y[w] = arguments[w + 2];
      it.children = Y;
    }
    if (m && m.defaultProps)
      for (q in ot = m.defaultProps, ot)
        it[q] === void 0 && (it[q] = ot[q]);
    return ul(m, F, it);
  }, K.createRef = function() {
    return { current: null };
  }, K.forwardRef = function(m) {
    return { $$typeof: _, render: m };
  }, K.isValidElement = Pt, K.lazy = function(m) {
    return {
      $$typeof: j,
      _payload: { _status: -1, _result: m },
      _init: mt
    };
  }, K.memo = function(m, O) {
    return {
      $$typeof: J,
      type: m,
      compare: O === void 0 ? null : O
    };
  }, K.startTransition = yl, K.unstable_useCacheRefresh = function() {
    return ft.H.useCacheRefresh();
  }, K.use = function(m) {
    return ft.H.use(m);
  }, K.useActionState = function(m, O, L) {
    return ft.H.useActionState(m, O, L);
  }, K.useCallback = function(m, O) {
    return ft.H.useCallback(m, O);
  }, K.useContext = function(m) {
    return ft.H.useContext(m);
  }, K.useDebugValue = function() {
  }, K.useDeferredValue = function(m, O) {
    return ft.H.useDeferredValue(m, O);
  }, K.useEffect = function(m, O) {
    return ft.H.useEffect(m, O);
  }, K.useEffectEvent = function(m) {
    return ft.H.useEffectEvent(m);
  }, K.useId = function() {
    return ft.H.useId();
  }, K.useImperativeHandle = function(m, O, L) {
    return ft.H.useImperativeHandle(m, O, L);
  }, K.useInsertionEffect = function(m, O) {
    return ft.H.useInsertionEffect(m, O);
  }, K.useLayoutEffect = function(m, O) {
    return ft.H.useLayoutEffect(m, O);
  }, K.useMemo = function(m, O) {
    return ft.H.useMemo(m, O);
  }, K.useOptimistic = function(m, O) {
    return ft.H.useOptimistic(m, O);
  }, K.useReducer = function(m, O, L) {
    return ft.H.useReducer(m, O, L);
  }, K.useRef = function(m) {
    return ft.H.useRef(m);
  }, K.useState = function(m) {
    return ft.H.useState(m);
  }, K.useSyncExternalStore = function(m, O, L) {
    return ft.H.useSyncExternalStore(
      m,
      O,
      L
    );
  }, K.useTransition = function() {
    return ft.H.useTransition();
  }, K.version = "19.3.0", K;
}
var H0;
function nr() {
  return H0 || (H0 = 1, $o.exports = z1()), $o.exports;
}
var al = nr();
const x1 = /* @__PURE__ */ E1(al);
var Wo = { exports: {} }, bu = {}, Fo = { exports: {} }, Io = {};
var B0;
function O1() {
  return B0 || (B0 = 1, (function(i) {
    function f(R, X) {
      var V = R.length;
      R.push(X);
      t: for (; 0 < V; ) {
        var mt = V - 1 >>> 1, rt = R[mt];
        if (0 < E(rt, X))
          R[mt] = X, R[V] = rt, V = mt;
        else break t;
      }
    }
    function s(R) {
      return R.length === 0 ? null : R[0];
    }
    function r(R) {
      if (R.length === 0) return null;
      var X = R[0], V = R.pop();
      if (V !== X) {
        R[0] = V;
        t: for (var mt = 0, rt = R.length, yl = rt >>> 1; mt < yl; ) {
          var ql = 2 * (mt + 1) - 1, Jl = R[ql], m = ql + 1, O = R[m];
          if (0 > E(Jl, V))
            m < rt && 0 > E(O, Jl) ? (R[mt] = O, R[m] = V, mt = m) : (R[mt] = Jl, R[ql] = V, mt = ql);
          else if (m < rt && 0 > E(O, V))
            R[mt] = O, R[m] = V, mt = m;
          else break t;
        }
      }
      return X;
    }
    function E(R, X) {
      var V = R.sortIndex - X.sortIndex;
      return V !== 0 ? V : R.id - X.id;
    }
    if (i.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var x = performance;
      i.unstable_now = function() {
        return x.now();
      };
    } else {
      var M = Date, _ = M.now();
      i.unstable_now = function() {
        return M.now() - _;
      };
    }
    var D = [], J = [], j = 1, p = null, H = 3, nt = !1, Ot = !1, Nt = !1, tt = !1, Ft = typeof setTimeout == "function" ? setTimeout : null, Z = typeof clearTimeout == "function" ? clearTimeout : null, Tt = typeof setImmediate < "u" ? setImmediate : null;
    function zl(R) {
      for (var X = s(J); X !== null; ) {
        if (X.callback === null) r(J);
        else if (X.startTime <= R)
          r(J), X.sortIndex = X.expirationTime, f(D, X);
        else break;
        X = s(J);
      }
    }
    function xl(R) {
      if (Nt = !1, zl(R), !Ot)
        if (s(D) !== null)
          Ot = !0, kt || (kt = !0, Pt());
        else {
          var X = s(J);
          X !== null && Dt(xl, X.startTime - R);
        }
    }
    var kt = !1, k = -1, ft = 5, Ol = -1;
    function ul() {
      return tt ? !0 : !(i.unstable_now() - Ol < ft);
    }
    function il() {
      if (tt = !1, kt) {
        var R = i.unstable_now();
        Ol = R;
        var X = !0;
        try {
          t: {
            Ot = !1, Nt && (Nt = !1, Z(k), k = -1), nt = !0;
            var V = H;
            try {
              l: {
                for (zl(R), p = s(D); p !== null && !(p.expirationTime > R && ul()); ) {
                  var mt = p.callback;
                  if (typeof mt == "function") {
                    p.callback = null, H = p.priorityLevel;
                    var rt = mt(
                      p.expirationTime <= R
                    );
                    if (R = i.unstable_now(), typeof rt == "function") {
                      p.callback = rt, zl(R), X = !0;
                      break l;
                    }
                    p === s(D) && r(D), zl(R);
                  } else r(D);
                  p = s(D);
                }
                if (p !== null) X = !0;
                else {
                  var yl = s(J);
                  yl !== null && Dt(
                    xl,
                    yl.startTime - R
                  ), X = !1;
                }
              }
              break t;
            } finally {
              p = null, H = V, nt = !1;
            }
            X = void 0;
          }
        } finally {
          X ? Pt() : kt = !1;
        }
      }
    }
    var Pt;
    if (typeof Tt == "function")
      Pt = function() {
        Tt(il);
      };
    else if (typeof MessageChannel < "u") {
      var Kl = new MessageChannel(), oe = Kl.port2;
      Kl.port1.onmessage = il, Pt = function() {
        oe.postMessage(null);
      };
    } else
      Pt = function() {
        Ft(il, 0);
      };
    function Dt(R, X) {
      k = Ft(function() {
        R(i.unstable_now());
      }, X);
    }
    i.unstable_IdlePriority = 5, i.unstable_ImmediatePriority = 1, i.unstable_LowPriority = 4, i.unstable_NormalPriority = 3, i.unstable_Profiling = null, i.unstable_UserBlockingPriority = 2, i.unstable_cancelCallback = function(R) {
      R.callback = null;
    }, i.unstable_forceFrameRate = function(R) {
      0 > R || 125 < R ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : ft = 0 < R ? Math.floor(1e3 / R) : 5;
    }, i.unstable_getCurrentPriorityLevel = function() {
      return H;
    }, i.unstable_next = function(R) {
      switch (H) {
        case 1:
        case 2:
        case 3:
          var X = 3;
          break;
        default:
          X = H;
      }
      var V = H;
      H = X;
      try {
        return R();
      } finally {
        H = V;
      }
    }, i.unstable_requestPaint = function() {
      tt = !0;
    }, i.unstable_runWithPriority = function(R, X) {
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
      var V = H;
      H = R;
      try {
        return X();
      } finally {
        H = V;
      }
    }, i.unstable_scheduleCallback = function(R, X, V) {
      var mt = i.unstable_now();
      switch (typeof V == "object" && V !== null ? (V = V.delay, V = typeof V == "number" && 0 < V ? mt + V : mt) : V = mt, R) {
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
      return rt = V + rt, R = {
        id: j++,
        callback: X,
        priorityLevel: R,
        startTime: V,
        expirationTime: rt,
        sortIndex: -1
      }, V > mt ? (R.sortIndex = V, f(J, R), s(D) === null && R === s(J) && (Nt ? (Z(k), k = -1) : Nt = !0, Dt(xl, V - mt))) : (R.sortIndex = rt, f(D, R), Ot || nt || (Ot = !0, kt || (kt = !0, Pt()))), R;
    }, i.unstable_shouldYield = ul, i.unstable_wrapCallback = function(R) {
      var X = H;
      return function() {
        var V = H;
        H = X;
        try {
          return R.apply(this, arguments);
        } finally {
          H = V;
        }
      };
    };
  })(Io)), Io;
}
var Y0;
function _1() {
  return Y0 || (Y0 = 1, Fo.exports = O1()), Fo.exports;
}
var ko = { exports: {} }, Wt = {};
var q0;
function M1() {
  if (q0) return Wt;
  q0 = 1;
  var i = nr();
  function f(j) {
    var p = "https://react.dev/errors/" + j;
    if (1 < arguments.length) {
      p += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var H = 2; H < arguments.length; H++)
        p += "&args[]=" + encodeURIComponent(arguments[H]);
    }
    return "Minified React error #" + j + "; visit " + p + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
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
  }, E = /* @__PURE__ */ Symbol.for("react.portal"), x = /* @__PURE__ */ Symbol.for("react.recoverable"), M = /* @__PURE__ */ Symbol.for("react.optimistic_key");
  function _(j, p, H) {
    var nt = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: E,
      key: nt == null ? null : nt === M ? M : "" + nt,
      children: j,
      containerInfo: p,
      implementation: H
    };
  }
  var D = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function J(j, p) {
    if (j === "font") return "";
    if (typeof p == "string")
      return p === "use-credentials" ? p : "";
  }
  return Wt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r, Wt.browser = function(j) {
    return { $$typeof: x, _reason: j };
  }, Wt.createPortal = function(j, p) {
    var H = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!p || p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11)
      throw Error(f(299));
    return _(j, p, null, H);
  }, Wt.flushSync = function(j) {
    var p = D.T, H = r.p;
    try {
      if (D.T = null, r.p = 2, j) return j();
    } finally {
      D.T = p, r.p = H, r.d.f();
    }
  }, Wt.preconnect = function(j, p) {
    typeof j == "string" && (p ? (p = p.crossOrigin, p = typeof p == "string" ? p === "use-credentials" ? p : "" : void 0) : p = null, r.d.C(j, p));
  }, Wt.prefetchDNS = function(j) {
    typeof j == "string" && r.d.D(j);
  }, Wt.preinit = function(j, p) {
    if (typeof j == "string" && p && typeof p.as == "string") {
      var H = p.as, nt = J(H, p.crossOrigin), Ot = typeof p.integrity == "string" ? p.integrity : void 0, Nt = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0;
      H === "style" ? r.d.S(
        j,
        typeof p.precedence == "string" ? p.precedence : void 0,
        {
          crossOrigin: nt,
          integrity: Ot,
          fetchPriority: Nt
        }
      ) : H === "script" && r.d.X(j, {
        crossOrigin: nt,
        integrity: Ot,
        fetchPriority: Nt,
        nonce: typeof p.nonce == "string" ? p.nonce : void 0
      });
    }
  }, Wt.preinitModule = function(j, p) {
    if (typeof j == "string")
      if (typeof p == "object" && p !== null) {
        if (p.as == null || p.as === "script") {
          var H = J(
            p.as,
            p.crossOrigin
          );
          r.d.M(j, {
            crossOrigin: H,
            integrity: typeof p.integrity == "string" ? p.integrity : void 0,
            nonce: typeof p.nonce == "string" ? p.nonce : void 0,
            fetchPriority: typeof p.fetchPriority == "string" ? p.fetchPriority : void 0
          });
        }
      } else p == null && r.d.M(j);
  }, Wt.preload = function(j, p) {
    if (typeof j == "string" && typeof p == "object" && p !== null && typeof p.as == "string") {
      var H = p.as, nt = J(H, p.crossOrigin);
      r.d.L(j, H, {
        crossOrigin: nt,
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
  }, Wt.preloadModule = function(j, p) {
    if (typeof j == "string")
      if (p) {
        var H = J(p.as, p.crossOrigin);
        r.d.m(j, {
          as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0,
          crossOrigin: H,
          integrity: typeof p.integrity == "string" ? p.integrity : void 0,
          nonce: typeof p.nonce == "string" ? p.nonce : void 0,
          fetchPriority: typeof p.fetchPriority == "string" ? p.fetchPriority : void 0
        });
      } else r.d.m(j);
  }, Wt.requestFormReset = function(j) {
    r.d.r(j);
  }, Wt.unstable_batchedUpdates = function(j, p) {
    return j(p);
  }, Wt.useFormState = function(j, p, H) {
    return D.H.useFormState(j, p, H);
  }, Wt.useFormStatus = function() {
    return D.H.useHostTransitionStatus();
  }, Wt.version = "19.3.0", Wt;
}
var L0;
function C1() {
  if (L0) return ko.exports;
  L0 = 1;
  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (f) {
        console.error(f);
      }
  }
  return i(), ko.exports = M1(), ko.exports;
}
var G0;
function R1() {
  if (G0) return bu;
  G0 = 1;
  var i = _1(), f = nr(), s = C1();
  function r(t) {
    var l = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      l += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var e = 2; e < arguments.length; e++)
        l += "&args[]=" + encodeURIComponent(arguments[e]);
    }
    return "Minified React error #" + t + "; visit " + l + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function E(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function x(t) {
    for (var l = t, e = l; e && !e.alternate; )
      l = e, (l.flags & 4098) !== 0 && (t = l.return), e = l.return;
    for (; l.return; ) l = l.return;
    return l.tag === 3 ? t : null;
  }
  function M(t) {
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
  function D(t) {
    if (x(t) !== t)
      throw Error(r(188));
  }
  function J(t) {
    var l = t.alternate;
    if (!l) {
      if (l = x(t), l === null) throw Error(r(188));
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
          if (u === e) return D(a), t;
          if (u === n) return D(a), l;
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
  function j(t) {
    var l = t.tag;
    if (l === 5 || l === 26 || l === 27 || l === 6) return t;
    for (t = t.child; t !== null; ) {
      if (l = j(t), l !== null) return l;
      t = t.sibling;
    }
    return null;
  }
  function p(t, l, e, n, a, u) {
    for (; t !== null; ) {
      if ((t.tag === 5 || t.tag === 27 || t.tag === 6) && e(t, n, a, u) || (t.tag !== 22 || t.memoizedState === null) && (l || t.tag !== 5 && t.tag !== 27) && p(
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
  function H(t) {
    for (t = t.return; t !== null; ) {
      if (t.tag === 3 || t.tag === 5 || t.tag === 27) return t;
      t = t.return;
    }
    return null;
  }
  function nt(t) {
    var l = !1;
    for (t = t.return; t !== null && (t.tag === 4 && (l = !0), !(t.tag === 3 || t.tag === 5 || t.tag === 27)); )
      t = t.return;
    return l;
  }
  function Ot(t) {
    var l = [null, null], e = H(t);
    return e === null || Nt(
      l,
      t,
      e.child,
      { foundSelf: !1 }
    ), l;
  }
  function Nt(t, l, e, n) {
    for (; e !== null; ) {
      if (e === l) n.foundSelf = !0;
      else if (e.tag === 5 || e.tag === 27 || e.tag === 6) {
        if (n.foundSelf) return t[1] = e, !0;
        t[0] = e;
      } else if ((e.tag !== 22 || e.memoizedState === null) && Nt(
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
  function tt(t) {
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
  var Ft = null, Z = null;
  function Tt(t, l, e) {
    return t === e ? !0 : t === l ? (Ft = t, !0) : !1;
  }
  function zl(t, l, e) {
    return t === e ? (Z = t, !1) : t === l ? (Z !== null && (Ft = t), !0) : !1;
  }
  function xl(t) {
    if (t === null) return null;
    do
      t = t === null ? null : t.return;
    while (t && t.tag !== 5 && t.tag !== 27 && t.tag !== 3);
    return t || null;
  }
  function kt(t, l, e) {
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
  var k = Object.assign, ft = /* @__PURE__ */ Symbol.for("react.element"), Ol = /* @__PURE__ */ Symbol.for("react.transitional.element"), ul = /* @__PURE__ */ Symbol.for("react.portal"), il = /* @__PURE__ */ Symbol.for("react.fragment"), Pt = /* @__PURE__ */ Symbol.for("react.strict_mode"), Kl = /* @__PURE__ */ Symbol.for("react.profiler"), oe = /* @__PURE__ */ Symbol.for("react.consumer"), Dt = /* @__PURE__ */ Symbol.for("react.context"), R = /* @__PURE__ */ Symbol.for("react.forward_ref"), X = /* @__PURE__ */ Symbol.for("react.suspense"), V = /* @__PURE__ */ Symbol.for("react.suspense_list"), mt = /* @__PURE__ */ Symbol.for("react.memo"), rt = /* @__PURE__ */ Symbol.for("react.lazy"), yl = /* @__PURE__ */ Symbol.for("react.activity"), ql = /* @__PURE__ */ Symbol.for("react.legacy_hidden"), Jl = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), m = /* @__PURE__ */ Symbol.for("react.view_transition"), O = /* @__PURE__ */ Symbol.for("react.recoverable"), L = Symbol.iterator;
  function q(t) {
    return t === null || typeof t != "object" ? null : (t = L && t[L] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var it = /* @__PURE__ */ Symbol.for("react.client.reference");
  function F(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === it ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case il:
        return "Fragment";
      case Kl:
        return "Profiler";
      case Pt:
        return "StrictMode";
      case X:
        return "Suspense";
      case V:
        return "SuspenseList";
      case yl:
        return "Activity";
      case m:
        return "ViewTransition";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case ul:
          return "Portal";
        case Dt:
          return t.displayName || "Context";
        case oe:
          return (t._context.displayName || "Context") + ".Consumer";
        case R:
          var l = t.render;
          return t = t.displayName, t || (t = l.displayName || l.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case mt:
          return l = t.displayName || null, l !== null ? l : F(t.type) || "Memo";
        case rt:
          l = t._payload, t = t._init;
          try {
            return F(t(l));
          } catch {
          }
      }
    return null;
  }
  var ot = Array.isArray, Y = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, w = s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, _l = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, Aa = [], I = -1;
  function Ct(t) {
    return { current: t };
  }
  function Yt(t) {
    0 > I || (t.current = Aa[I], Aa[I] = null, I--);
  }
  function St(t, l) {
    I++, Aa[I] = t.current, t.current = l;
  }
  var $l = Ct(null), Na = Ct(null), Re = Ct(null), xu = Ct(null);
  function Ou(t, l) {
    switch (St(Re, l), St(Na, t), St($l, null), l.nodeType) {
      case 9:
      case 11:
        t = (t = l.documentElement) && (t = t.namespaceURI) ? Xy(t) : 0;
        break;
      default:
        if (t = l.tagName, l = l.namespaceURI)
          l = Xy(l), t = Qy(l, t);
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
    Yt($l), St($l, t);
  }
  function Cn() {
    Yt($l), Yt(Na), Yt(Re);
  }
  function sc(t) {
    var l = t.memoizedState;
    l !== null && (ga._currentValue = l.memoizedState, St(xu, t)), l = $l.current;
    var e = Qy(l, t.type);
    l !== e && (St(Na, t), St($l, e));
  }
  function _u(t) {
    Na.current === t && (Yt($l), Yt(Na)), xu.current === t && (Yt(xu), ga._currentValue = _l);
  }
  var dc, fr;
  function De(t) {
    if (dc === void 0)
      try {
        throw Error();
      } catch (e) {
        var l = e.stack.trim().match(/\n( *(at )?)/);
        dc = l && l[1] || "", fr = -1 < e.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + dc + t + fr;
  }
  var yc = !1;
  function mc(t, l) {
    if (!t || yc) return "";
    yc = !0;
    var e = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var n = {
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
                  var T = Object.getOwnPropertyDescriptor(
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
                  z && (T !== void 0 ? Object.defineProperty(t.prototype, "props", T) : delete t.prototype.props);
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
                  var A = `
` + d[n].replace(" at new ", " at ");
                  return t.displayName && A.includes("<anonymous>") && (A = A.replace("<anonymous>", t.displayName)), A;
                }
              while (1 <= n && 0 <= a);
            break;
          }
      }
    } finally {
      yc = !1, Error.prepareStackTrace = e;
    }
    return (e = t ? t.displayName || t.name : "") ? De(e) : "";
  }
  function xm(t, l) {
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
        return mc(t.type, !1);
      case 11:
        return mc(t.type.render, !1);
      case 1:
        return mc(t.type, !0);
      case 31:
        return De("Activity");
      case 30:
        return De("ViewTransition");
      default:
        return "";
    }
  }
  function or(t) {
    try {
      var l = "", e = null;
      do
        l += xm(t, e), e = t, t = t.return;
      while (t);
      return l;
    } catch (n) {
      return `
Error generating stack: ` + n.message + `
` + n.stack;
    }
  }
  var vc = Object.prototype.hasOwnProperty, hc = i.unstable_scheduleCallback, gc = i.unstable_cancelCallback, Om = i.unstable_shouldYield, _m = i.unstable_requestPaint, ml = i.unstable_now, Mm = i.unstable_getCurrentPriorityLevel, rr = i.unstable_ImmediatePriority, sr = i.unstable_UserBlockingPriority, Mu = i.unstable_NormalPriority, Cm = i.unstable_LowPriority, dr = i.unstable_IdlePriority, Rm = i.log, Dm = i.unstable_setDisableYieldValue, za = null, vl = null;
  function je(t) {
    if (typeof Rm == "function" && Dm(t), vl && typeof vl.setStrictMode == "function")
      try {
        vl.setStrictMode(za, t);
      } catch {
      }
  }
  var hl = Math.clz32 ? Math.clz32 : Hm, jm = Math.log, Um = Math.LN2;
  function Hm(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (jm(t) / Um | 0) | 0;
  }
  var Cu = 256, Ru = 262144, Du = 4194304;
  function cn(t) {
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
  function ju(t, l, e) {
    var n = t.pendingLanes;
    if (n === 0) return 0;
    var a = 0, u = t.suspendedLanes, c = t.pingedLanes;
    t = t.warmLanes;
    var o = n & 134217727;
    return o !== 0 ? (n = o & ~u, n !== 0 ? a = cn(n) : (c &= o, c !== 0 ? a = cn(c) : e || (e = o & ~t, e !== 0 && (a = cn(e))))) : (o = n & ~u, o !== 0 ? a = cn(o) : c !== 0 ? a = cn(c) : e || (e = n & ~t, e !== 0 && (a = cn(e)))), a === 0 ? 0 : l !== 0 && l !== a && (l & u) === 0 && (u = a & -a, e = l & -l, u >= e || u === 32 && (e & 4194048) !== 0) ? l : a;
  }
  function xa(t, l) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & l) === 0;
  }
  function yr(t, l) {
    (l & 8) !== 0 && (l |= l & 32);
    var e = t.entangledLanes;
    if (e !== 0)
      for (t = t.entanglements, e &= l; 0 < e; ) {
        var n = 31 - hl(e), a = 1 << n;
        l |= t[n], e &= ~a;
      }
    return l;
  }
  function Bm(t, l) {
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
  function mr() {
    var t = Du;
    return Du <<= 1, (Du & 62914560) === 0 && (Du = 4194304), t;
  }
  function Sc(t) {
    for (var l = [], e = 0; 31 > e; e++) l.push(t);
    return l;
  }
  function Oa(t, l) {
    t.pendingLanes |= l, l !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function Ym(t, l, e, n, a, u) {
    var c = t.pendingLanes;
    t.pendingLanes = e, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= e, t.entangledLanes &= e, t.errorRecoveryDisabledLanes &= e, t.shellSuspendCounter = 0;
    var o = t.entanglements, d = t.expirationTimes, S = t.hiddenUpdates;
    for (e = c & ~e; 0 < e; ) {
      var A = 31 - hl(e), z = 1 << A;
      o[A] = 0, d[A] = -1;
      var v = S[A];
      if (v !== null)
        for (S[A] = null, A = 0; A < v.length; A++) {
          var T = v[A];
          T !== null && (T.lane &= -536870913);
        }
      e &= ~z;
    }
    n !== 0 && vr(t, n, 0), u !== 0 && a === 0 && t.tag !== 0 && (t.suspendedLanes |= u & ~(c & ~l));
  }
  function vr(t, l, e) {
    t.pendingLanes |= l, t.suspendedLanes &= ~l;
    var n = 31 - hl(l);
    t.entangledLanes |= l, t.entanglements[n] = t.entanglements[n] | 1073741824 | e & 261930;
  }
  function hr(t, l) {
    var e = t.entangledLanes |= l;
    for (t = t.entanglements; e; ) {
      var n = 31 - hl(e), a = 1 << n;
      a & l | t[n] & l && (t[n] |= l), e &= ~a;
    }
  }
  function gr(t, l) {
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
  function pc(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Sr() {
    var t = w.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : z0(t.type));
  }
  function br(t, l) {
    var e = w.p;
    try {
      return w.p = t, l();
    } finally {
      w.p = e;
    }
  }
  var re = Math.random().toString(36).slice(2), Vt = "__reactFiber$" + re, cl = "__reactProps$" + re, Rn = "__reactContainer$" + re, pr = "__reactEvents$" + re, qm = "__reactListeners$" + re, Lm = "__reactHandles$" + re, Tr = "__reactResources$" + re, _a = "__reactMarker$" + re, Uu = "__reactLoad$" + re;
  function Hu(t) {
    delete t[Vt], delete t[cl], delete t[qm], delete t[Lm];
  }
  function fn(t) {
    var l;
    if (l = t[Vt]) return l;
    for (var e = t.parentNode; e; ) {
      if (l = e[Rn] || e[Vt]) {
        if (e = l.alternate, l.child !== null || e !== null && e.child !== null)
          for (t = u0(t); t !== null; ) {
            if (e = t[Vt]) return e;
            t = u0(t);
          }
        return l;
      }
      t = e, e = t.parentNode;
    }
    return null;
  }
  function Dn(t) {
    if (t = t[Vt] || t[Rn]) {
      var l = t.tag;
      if (l === 5 || l === 6 || l === 13 || l === 31 || l === 26 || l === 27 || l === 3)
        return t;
    }
    return null;
  }
  function Ma(t) {
    var l = t.tag;
    if (l === 5 || l === 26 || l === 27 || l === 6) return t.stateNode;
    throw Error(r(33));
  }
  function jn(t) {
    var l = t[Tr];
    return l || (l = t[Tr] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), l;
  }
  function Lt(t) {
    t[_a] = !0;
  }
  function Er(t) {
    t[Uu] = void 0;
  }
  var Ar = /* @__PURE__ */ new Set(), Nr = {};
  function on(t, l) {
    Un(t, l), Un(t + "Capture", l);
  }
  function Un(t, l) {
    for (Nr[t] = l, t = 0; t < l.length; t++)
      Ar.add(l[t]);
  }
  var Gm = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), zr = {}, xr = {};
  function Xm(t) {
    return vc.call(xr, t) ? !0 : vc.call(zr, t) ? !1 : Gm.test(t) ? xr[t] = !0 : (zr[t] = !0, !1);
  }
  var st = !1;
  function Or() {
    var t = st;
    return st = !1, t;
  }
  function Bu(t, l, e) {
    if (Xm(l))
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
  function se(t, l, e, n) {
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
  function _r(t) {
    var l = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (l === "checkbox" || l === "radio");
  }
  function Qm(t, l, e) {
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
  function Tc(t) {
    if (!t._valueTracker) {
      var l = _r(t) ? "checked" : "value";
      t._valueTracker = Qm(
        t,
        l,
        "" + t[l]
      );
    }
  }
  function Mr(t) {
    if (!t) return !1;
    var l = t._valueTracker;
    if (!l) return !0;
    var e = l.getValue(), n = "";
    return t && (n = _r(t) ? t.checked ? "true" : "false" : t.value), t = n, t !== e ? (l.setValue(t), !0) : !1;
  }
  var Vm = /[\n"\\]/g;
  function Ml(t) {
    return t.replace(
      Vm,
      function(l) {
        return "\\" + l.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Ec(t, l, e, n, a, u, c, o) {
    t.name = "", c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? t.type = c : t.removeAttribute("type"), l != null ? c === "number" ? (l === 0 && t.value === "" || t.value != l) && (t.value = "" + gl(l)) : t.value !== "" + gl(l) && (t.value = "" + gl(l)) : c !== "submit" && c !== "reset" || t.removeAttribute("value"), l != null ? c === "number" && t.value == l ? Ac(t, gl(t.value)) : Ac(t, gl(l)) : e != null ? Ac(t, gl(e)) : n != null && t.removeAttribute("value"), a == null && u != null && (t.defaultChecked = !!u), a != null && (t.checked = a && typeof a != "function" && typeof a != "symbol"), o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" ? t.name = "" + gl(o) : t.removeAttribute("name");
  }
  function Cr(t, l, e, n, a, u, c, o) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (t.type = u), l != null || e != null) {
      if (!(u !== "submit" && u !== "reset" || l != null)) {
        Tc(t);
        return;
      }
      e = e != null ? "" + gl(e) : "", l = l != null ? "" + gl(l) : e, o || l === t.value || (t.value = l), t.defaultValue = l;
    }
    n = n ?? a, n = typeof n != "function" && typeof n != "symbol" && !!n, t.checked = o ? t.checked : !!n, t.defaultChecked = !!n, c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (t.name = c), Tc(t);
  }
  function Ac(t, l) {
    t.defaultValue !== "" + l && (t.defaultValue = "" + l);
  }
  function Hn(t, l, e, n) {
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
  function Rr(t, l, e) {
    if (l != null && (l = "" + gl(l), l !== t.value && (t.value = l), e == null)) {
      t.defaultValue !== l && (t.defaultValue = l);
      return;
    }
    t.defaultValue = e != null ? "" + gl(e) : "";
  }
  function Dr(t, l, e, n) {
    if (l == null) {
      if (n != null) {
        if (e != null) throw Error(r(92));
        if (ot(n)) {
          if (1 < n.length) throw Error(r(93));
          n = n[0];
        }
        e = n;
      }
      e == null && (e = ""), l = e;
    }
    e = gl(l), t.defaultValue = e, n = t.textContent, n === e && n !== "" && n !== null && (t.value = n), Tc(t);
  }
  function Bn(t, l) {
    if (l) {
      var e = t.firstChild;
      if (e && e === t.lastChild && e.nodeType === 3) {
        e.nodeValue = l;
        return;
      }
    }
    t.textContent = l;
  }
  var Zm = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function jr(t, l, e) {
    var n = l.indexOf("--") === 0;
    e == null || typeof e == "boolean" || e === "" ? n ? t.setProperty(l, "") : l === "float" ? t.cssFloat = "" : t[l] = "" : n ? t.setProperty(l, e) : typeof e != "number" || e === 0 || Zm.has(l) ? l === "float" ? t.cssFloat = e : t[l] = ("" + e).trim() : t[l] = e + "px";
  }
  function Ur(t, l, e) {
    if (l != null && typeof l != "object")
      throw Error(r(62));
    if (t = t.style, e != null) {
      for (var n in e)
        !e.hasOwnProperty(n) || l != null && l.hasOwnProperty(n) || (n.indexOf("--") === 0 ? t.setProperty(n, "") : n === "float" ? t.cssFloat = "" : t[n] = "", st = !0);
      for (var a in l)
        n = l[a], l.hasOwnProperty(a) && e[a] !== n && (jr(t, a, n), st = !0);
    } else
      for (var u in l)
        l.hasOwnProperty(u) && jr(t, u, l[u]);
  }
  function Nc(t) {
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
  var wm = /* @__PURE__ */ new Map([
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
  ]), Km = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function qu(t) {
    return Km.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  function Wl() {
  }
  var zc = null;
  function xc(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var Yn = null, qn = null;
  function Hr(t) {
    var l = Dn(t);
    if (l && (t = l.stateNode)) {
      var e = t[cl] || null;
      t: switch (t = l.stateNode, l.type) {
        case "input":
          if (Ec(
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
              'input[name="' + Ml(
                "" + l
              ) + '"][type="radio"]'
            ), l = 0; l < e.length; l++) {
              var n = e[l];
              if (n !== t && n.form === t.form) {
                var a = n[cl] || null;
                if (!a) throw Error(r(90));
                Ec(
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
              n = e[l], n.form === t.form && Mr(n);
          }
          break t;
        case "textarea":
          Rr(t, e.value, e.defaultValue);
          break t;
        case "select":
          l = e.value, l != null && Hn(t, !!e.multiple, l, !1);
      }
    }
  }
  var Oc = !1;
  function Br(t, l, e) {
    if (Oc) return t(l, e);
    Oc = !0;
    try {
      var n = t(l);
      return n;
    } finally {
      if (Oc = !1, (Yn !== null || qn !== null) && (qi(), Yn && (l = Yn, t = qn, qn = Yn = null, Hr(l), t)))
        for (l = 0; l < t.length; l++) Hr(t[l]);
    }
  }
  function Ca(t, l) {
    var e = t.stateNode;
    if (e === null) return null;
    var n = e[cl] || null;
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
  var de = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), _c = !1;
  if (de)
    try {
      var Ra = {};
      Object.defineProperty(Ra, "passive", {
        get: function() {
          _c = !0;
        }
      }), window.addEventListener("test", Ra, Ra), window.removeEventListener("test", Ra, Ra);
    } catch {
      _c = !1;
    }
  var Ue = null, Mc = null, Lu = null;
  function Yr() {
    if (Lu) return Lu;
    var t, l = Mc, e = l.length, n, a = "value" in Ue ? Ue.value : Ue.textContent, u = a.length;
    for (t = 0; t < e && l[t] === a[t]; t++) ;
    var c = e - t;
    for (n = 1; n <= c && l[e - n] === a[u - n]; n++) ;
    return Lu = a.slice(t, 1 < n ? 1 - n : void 0);
  }
  function Gu(t) {
    var l = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && l === 13 && (t = 13)) : t = l, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function Xu() {
    return !0;
  }
  function qr() {
    return !1;
  }
  function tl(t) {
    function l(e, n, a, u, c) {
      this._reactName = e, this._targetInst = a, this.type = n, this.nativeEvent = u, this.target = c, this.currentTarget = null;
      for (var o in t)
        t.hasOwnProperty(o) && (e = t[o], this[o] = e ? e(u) : u[o]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? Xu : qr, this.isPropagationStopped = qr, this;
    }
    return k(l.prototype, {
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
  }, Qu = tl(He), Da = k({}, He, { view: 0, detail: 0 }), Jm = tl(Da), Cc, Rc, ja, Vu = k({}, Da, {
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
    getModifierState: jc,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== ja && (ja && t.type === "mousemove" ? (Cc = t.screenX - ja.screenX, Rc = t.screenY - ja.screenY) : Rc = Cc = 0, ja = t), Cc);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : Rc;
    }
  }), Lr = tl(Vu), $m = k({}, Vu, { dataTransfer: 0 }), Wm = tl($m), Fm = k({}, Da, { relatedTarget: 0 }), Dc = tl(Fm), Im = k({}, He, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), km = tl(Im), Pm = k({}, He, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), tv = tl(Pm), lv = k({}, He, { data: 0 }), Gr = tl(lv), ev = {
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
  }, nv = {
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
  }, av = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function uv(t) {
    var l = this.nativeEvent;
    return l.getModifierState ? l.getModifierState(t) : (t = av[t]) ? !!l[t] : !1;
  }
  function jc() {
    return uv;
  }
  var iv = k({}, Da, {
    key: function(t) {
      if (t.key) {
        var l = ev[t.key] || t.key;
        if (l !== "Unidentified") return l;
      }
      return t.type === "keypress" ? (t = Gu(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? nv[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: jc,
    charCode: function(t) {
      return t.type === "keypress" ? Gu(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? Gu(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), cv = tl(iv), fv = k({}, Vu, {
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
  }), Xr = tl(fv), ov = k({}, He, { submitter: 0 }), rv = tl(ov), sv = k({}, Da, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: jc
  }), dv = tl(sv), yv = k({}, He, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), mv = tl(yv), vv = k({}, Vu, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), hv = tl(vv), gv = k({}, He, {
    newState: 0,
    oldState: 0,
    source: 0
  }), Sv = tl(gv), bv = [9, 13, 27, 32], Uc = de && "CompositionEvent" in window, Ua = null;
  de && "documentMode" in document && (Ua = document.documentMode);
  var pv = de && "TextEvent" in window && !Ua, Qr = de && (!Uc || Ua && 8 < Ua && 11 >= Ua), Vr = " ", Zr = !1;
  function wr(t, l) {
    switch (t) {
      case "keyup":
        return bv.indexOf(l.keyCode) !== -1;
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
  function Kr(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var Ln = !1;
  function Tv(t, l) {
    switch (t) {
      case "compositionend":
        return Kr(l);
      case "keypress":
        return l.which !== 32 ? null : (Zr = !0, Vr);
      case "textInput":
        return t = l.data, t === Vr && Zr ? null : t;
      default:
        return null;
    }
  }
  function Ev(t, l) {
    if (Ln)
      return t === "compositionend" || !Uc && wr(t, l) ? (t = Yr(), Lu = Mc = Ue = null, Ln = !1, t) : null;
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
        return Qr && l.locale !== "ko" ? null : l.data;
      default:
        return null;
    }
  }
  var Av = {
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
  function Jr(t) {
    var l = t && t.nodeName && t.nodeName.toLowerCase();
    return l === "input" ? !!Av[t.type] : l === "textarea";
  }
  function $r(t, l, e, n) {
    Yn ? qn ? qn.push(n) : qn = [n] : Yn = n, l = Zi(l, "onChange"), 0 < l.length && (e = new Qu(
      "onChange",
      "change",
      null,
      e,
      n
    ), t.push({ event: e, listeners: l }));
  }
  var Ha = null, Ba = null;
  function Nv(t) {
    Hy(t, 0);
  }
  function Zu(t) {
    var l = Ma(t);
    if (Mr(l)) return t;
  }
  function Wr(t, l) {
    if (t === "change") return l;
  }
  var Fr = !1;
  if (de) {
    var Hc;
    if (de) {
      var Bc = "oninput" in document;
      if (!Bc) {
        var Ir = document.createElement("div");
        Ir.setAttribute("oninput", "return;"), Bc = typeof Ir.oninput == "function";
      }
      Hc = Bc;
    } else Hc = !1;
    Fr = Hc && (!document.documentMode || 9 < document.documentMode);
  }
  function kr() {
    Ha && (Ha.detachEvent("onpropertychange", Pr), Ba = Ha = null);
  }
  function Pr(t) {
    if (t.propertyName === "value" && Zu(Ba)) {
      var l = [];
      $r(
        l,
        Ba,
        t,
        xc(t)
      ), Br(Nv, l);
    }
  }
  function zv(t, l, e) {
    t === "focusin" ? (kr(), Ha = l, Ba = e, Ha.attachEvent("onpropertychange", Pr)) : t === "focusout" && kr();
  }
  function xv(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Zu(Ba);
  }
  function Ov(t, l) {
    if (t === "click") return Zu(l);
  }
  function _v(t, l) {
    if (t === "input" || t === "change")
      return Zu(l);
  }
  function Mv(t, l) {
    return t === l && (t !== 0 || 1 / t === 1 / l) || t !== t && l !== l;
  }
  var Sl = typeof Object.is == "function" ? Object.is : Mv;
  function Ya(t, l) {
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
  function Yc(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  function ts(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function ls(t, l) {
    var e = ts(t);
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
      e = ts(e);
    }
  }
  function es(t, l) {
    return t && l ? t === l ? !0 : t && t.nodeType === 3 ? !1 : l && l.nodeType === 3 ? es(t, l.parentNode) : "contains" in t ? t.contains(l) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(l) & 16) : !1 : !1;
  }
  function ns(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var l = Yc(t.document); l instanceof t.HTMLIFrameElement; ) {
      try {
        var e = typeof l.contentWindow.location.href == "string";
      } catch {
        e = !1;
      }
      if (e) t = l.contentWindow;
      else break;
      l = Yc(t.document);
    }
    return l;
  }
  function qc(t) {
    var l = t && t.nodeName && t.nodeName.toLowerCase();
    return l && (l === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || l === "textarea" || t.contentEditable === "true");
  }
  var Cv = de && "documentMode" in document && 11 >= document.documentMode, Gn = null, Lc = null, qa = null, Gc = !1;
  function as(t, l, e) {
    var n = e.window === e ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
    Gc || Gn == null || Gn !== Yc(n) || (n = Gn, "selectionStart" in n && qc(n) ? n = { start: n.selectionStart, end: n.selectionEnd } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = {
      anchorNode: n.anchorNode,
      anchorOffset: n.anchorOffset,
      focusNode: n.focusNode,
      focusOffset: n.focusOffset
    }), qa && Ya(qa, n) || (qa = n, n = Zi(Lc, "onSelect"), 0 < n.length && (l = new Qu(
      "onSelect",
      "select",
      null,
      l,
      e
    ), t.push({ event: l, listeners: n }), l.target = Gn)));
  }
  function rn(t, l) {
    var e = {};
    return e[t.toLowerCase()] = l.toLowerCase(), e["Webkit" + t] = "webkit" + l, e["Moz" + t] = "moz" + l, e;
  }
  var Xn = {
    animationend: rn("Animation", "AnimationEnd"),
    animationiteration: rn("Animation", "AnimationIteration"),
    animationstart: rn("Animation", "AnimationStart"),
    transitionrun: rn("Transition", "TransitionRun"),
    transitionstart: rn("Transition", "TransitionStart"),
    transitioncancel: rn("Transition", "TransitionCancel"),
    transitionend: rn("Transition", "TransitionEnd")
  }, Xc = {}, us = {};
  de && (us = document.createElement("div").style, "AnimationEvent" in window || (delete Xn.animationend.animation, delete Xn.animationiteration.animation, delete Xn.animationstart.animation), "TransitionEvent" in window || delete Xn.transitionend.transition);
  function sn(t) {
    if (Xc[t]) return Xc[t];
    if (!Xn[t]) return t;
    var l = Xn[t], e;
    for (e in l)
      if (l.hasOwnProperty(e) && e in us)
        return Xc[t] = l[e];
    return t;
  }
  var is = sn("animationend"), cs = sn("animationiteration"), fs = sn("animationstart"), Rv = sn("transitionrun"), Dv = sn("transitionstart"), jv = sn("transitioncancel"), os = sn("transitionend"), rs = /* @__PURE__ */ new Map(), Qc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Qc.push("scrollEnd");
  function Ll(t, l) {
    rs.set(t, l), on(l, [t]);
  }
  var Uv = 0;
  function ye(t, l) {
    if (t.name != null && t.name !== "auto") return t.name;
    if (l.autoName !== null) return l.autoName;
    t = Vl.identifierPrefix;
    var e = Uv++;
    return t = "_" + t + "t_" + e.toString(32) + "_", l.autoName = t;
  }
  function ss(t) {
    if (t == null || typeof t == "string")
      return t;
    var l = null, e = ca;
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
  function me(t, l) {
    return t = ss(t), l = ss(l), l == null ? t === "auto" ? null : t : l === "auto" ? null : l;
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
  }, Cl = [], Qn = 0, Vc = 0;
  function Ku() {
    for (var t = Qn, l = Vc = Qn = 0; l < t; ) {
      var e = Cl[l];
      Cl[l++] = null;
      var n = Cl[l];
      Cl[l++] = null;
      var a = Cl[l];
      Cl[l++] = null;
      var u = Cl[l];
      if (Cl[l++] = null, n !== null && a !== null) {
        var c = n.pending;
        c === null ? a.next = a : (a.next = c.next, c.next = a), n.pending = a;
      }
      u !== 0 && ds(e, a, u);
    }
  }
  function Ju(t, l, e, n) {
    Cl[Qn++] = t, Cl[Qn++] = l, Cl[Qn++] = e, Cl[Qn++] = n, Vc |= n, t.lanes |= n, t = t.alternate, t !== null && (t.lanes |= n);
  }
  function Zc(t, l, e, n) {
    return Ju(t, l, e, n), $u(t);
  }
  function dn(t, l) {
    return Ju(t, null, null, l), $u(t);
  }
  function ds(t, l, e) {
    t.lanes |= e;
    var n = t.alternate;
    n !== null && (n.lanes |= e);
    for (var a = !1, u = t.return; u !== null; )
      u.childLanes |= e, n = u.alternate, n !== null && (n.childLanes |= e), u.tag === 22 && (t = u.stateNode, t === null || t._visibility & 1 || (a = !0)), t = u, u = u.return;
    return t.tag === 3 ? (u = t.stateNode, a && l !== null && (a = 31 - hl(e), t = u.hiddenUpdates, n = t[a], n === null ? t[a] = [l] : n.push(l), l.lane = e | 536870912), u) : null;
  }
  function $u(t) {
    if (50 < iu)
      throw iu = 0, Yi = null, Error(r(185));
    for (var l = t.return; l !== null; )
      t = l, l = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var Vn = {};
  function Hv(t, l, e, n) {
    this.tag = t, this.key = e, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = l, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function fl(t, l, e, n) {
    return new Hv(t, l, e, n);
  }
  function wc(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function ve(t, l) {
    var e = t.alternate;
    return e === null ? (e = fl(
      t.tag,
      l,
      t.key,
      t.mode
    ), e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.alternate = t, t.alternate = e) : (e.pendingProps = l, e.type = t.type, e.flags = 0, e.subtreeFlags = 0, e.deletions = null), e.flags = t.flags & 1206910976, e.childLanes = t.childLanes, e.lanes = t.lanes, e.child = t.child, e.memoizedProps = t.memoizedProps, e.memoizedState = t.memoizedState, e.updateQueue = t.updateQueue, l = t.dependencies, e.dependencies = l === null ? null : { lanes: l.lanes, firstContext: l.firstContext }, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.refCleanup = t.refCleanup, e;
  }
  function ys(t, l) {
    t.flags &= 1206910978;
    var e = t.alternate;
    return e === null ? (t.childLanes = 0, t.lanes = l, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = e.childLanes, t.lanes = e.lanes, t.child = e.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = e.memoizedProps, t.memoizedState = e.memoizedState, t.updateQueue = e.updateQueue, t.type = e.type, l = e.dependencies, t.dependencies = l === null ? null : {
      lanes: l.lanes,
      firstContext: l.firstContext
    }), t;
  }
  function Wu(t, l, e, n, a, u) {
    var c = 0;
    if (n = t, typeof n == "function") wc(n) && (c = 1);
    else if (typeof n == "string")
      c = o1(
        t,
        e,
        $l.current
      ) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (n) {
        case yl:
          return t = fl(31, e, l, a), t.elementType = yl, t.lanes = u, t;
        case il:
          return yn(e.children, a, u, l);
        case Pt:
          c = 8, a |= 24;
          break;
        case Kl:
          return t = fl(12, e, l, a | 2), t.elementType = Kl, t.lanes = u, t;
        case X:
          return t = fl(13, e, l, a), t.elementType = X, t.lanes = u, t;
        case V:
          return t = fl(19, e, l, a), t.elementType = V, t.lanes = u, t;
        case ql:
        case m:
          return t = a | 32, t = fl(30, e, l, t), t.elementType = m, t.lanes = u, t.stateNode = {
            autoName: null,
            paired: null,
            clones: null,
            ref: null
          }, t;
        default:
          if (typeof n == "object" && n !== null)
            switch (n.$$typeof) {
              case Dt:
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
    return l = fl(c, e, l, a), l.elementType = t, l.type = n, l.lanes = u, l;
  }
  function yn(t, l, e, n) {
    return t = fl(7, t, n, l), t.lanes = e, t;
  }
  function Kc(t, l, e) {
    return t = fl(6, t, null, l), t.lanes = e, t;
  }
  function ms(t) {
    var l = fl(18, null, null, 0);
    return l.stateNode = t, l;
  }
  function Jc(t, l, e) {
    return l = fl(
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
  var vs = /* @__PURE__ */ new WeakMap();
  function Rl(t, l) {
    if (typeof t == "object" && t !== null) {
      var e = vs.get(t);
      return e !== void 0 ? e : (l = {
        value: t,
        source: l,
        stack: or(l)
      }, vs.set(t, l), l);
    }
    return {
      value: t,
      source: l,
      stack: or(l)
    };
  }
  var Zn = [], wn = 0, Fu = null, La = 0, Dl = [], jl = 0, Be = null, Fl = 1, Il = "";
  function he(t, l) {
    Zn[wn++] = La, Zn[wn++] = Fu, Fu = t, La = l;
  }
  function hs(t, l, e) {
    Dl[jl++] = Fl, Dl[jl++] = Il, Dl[jl++] = Be, Be = t;
    var n = Fl;
    t = Il;
    var a = 32 - hl(n) - 1;
    n &= ~(1 << a), e += 1;
    var u = 32 - hl(l) + a;
    if (30 < u) {
      var c = a - a % 5;
      u = (n & (1 << c) - 1).toString(32), n >>= c, a -= c, Fl = 1 << 32 - hl(l) + a | e << a | n, Il = u + t;
    } else
      Fl = 1 << u | e << a | n, Il = t;
  }
  function Iu(t) {
    t.return !== null && (he(t, 1), hs(t, 1, 0));
  }
  function $c(t) {
    for (; t === Fu; )
      Fu = Zn[--wn], Zn[wn] = null, La = Zn[--wn], Zn[wn] = null;
    for (; t === Be; )
      Be = Dl[--jl], Dl[jl] = null, Il = Dl[--jl], Dl[jl] = null, Fl = Dl[--jl], Dl[jl] = null;
  }
  function gs(t, l) {
    Dl[jl++] = Fl, Dl[jl++] = Il, Dl[jl++] = Be, Fl = l.id, Il = l.overflow, Be = t;
  }
  var Gt = null, Et = null, P = !1, Ye = null, Ul = !1, Wc = Error(r(519));
  function qe(t) {
    var l = Error(
      r(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Ga(Rl(l, t)), Wc;
  }
  function Ss(t) {
    var l = t.stateNode, e = t.type, n = t.memoizedProps;
    switch (l[Vt] = t, l[cl] = n, e) {
      case "dialog":
        et("cancel", l), et("close", l);
        break;
      case "iframe":
      case "object":
      case "embed":
        et("load", l);
        break;
      case "video":
      case "audio":
        for (e = 0; e < fu.length; e++)
          et(fu[e], l);
        break;
      case "source":
        et("error", l);
        break;
      case "img":
      case "image":
      case "link":
        et("error", l), et("load", l);
        break;
      case "details":
        et("toggle", l);
        break;
      case "input":
        et("invalid", l), Cr(
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
        et("invalid", l);
        break;
      case "textarea":
        et("invalid", l), Dr(l, n.value, n.defaultValue, n.children);
    }
    e = n.children, typeof e != "string" && typeof e != "number" && typeof e != "bigint" || l.textContent === "" + e || n.suppressHydrationWarning === !0 || Ly(l.textContent, e) ? (n.popover != null && (et("beforetoggle", l), et("toggle", l)), n.onScroll != null && et("scroll", l), n.onScrollEnd != null && et("scrollend", l), n.onClick != null && (l.onclick = Wl), l = !0) : l = !1, l || qe(t, !0);
  }
  function ku(t) {
    for (Gt = t.return; Gt; )
      switch (Gt.tag) {
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
          Gt = Gt.return;
      }
  }
  function Kn(t) {
    if (t !== Gt) return !1;
    if (!P) return ku(t), P = !0, !1;
    var l = t.tag, e;
    if ((e = l !== 3 && l !== 27) && ((e = l === 5) && (e = t.type, e = !(e !== "form" && e !== "button") || Oo(t.type, t.memoizedProps)), e = !e), e && Et && qe(t), ku(t), l === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(317));
      Et = a0(t);
    } else if (l === 31) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(317));
      Et = a0(t);
    } else
      l === 27 ? (l = Et, tn(t.type) ? (t = Bo, Bo = null, Et = t) : Et = l) : Et = Gt ? Bl(t.stateNode.nextSibling) : null;
    return !0;
  }
  function mn() {
    Et = Gt = null, P = !1;
  }
  function Fc() {
    var t = Ye;
    return t !== null && (sl === null ? sl = t : sl.push.apply(
      sl,
      t
    ), Ye = null), t;
  }
  function Ga(t) {
    Ye === null ? Ye = [t] : Ye.push(t);
  }
  var Ic = Ct(null), vn = null, ge = null;
  function Le(t, l, e) {
    St(Ic, l._currentValue), l._currentValue = e;
  }
  function Se(t) {
    t._currentValue = Ic.current, Yt(Ic);
  }
  function Pu(t, l, e) {
    for (; t !== null; ) {
      var n = t.alternate;
      if ((t.childLanes & l) !== l ? (t.childLanes |= l, n !== null && (n.childLanes |= l)) : n !== null && (n.childLanes & l) !== l && (n.childLanes |= l), t === e) break;
      t = t.return;
    }
  }
  function kc(t, l, e, n) {
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
  function hn(t, l, e, n) {
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
      } else if (a === xu.current) {
        if (c = a.alternate, c === null) throw Error(r(387));
        c.memoizedState.memoizedState !== a.memoizedState.memoizedState && (t !== null ? t.push(ga) : t = [ga]);
      }
      a = a.return;
    }
    return t !== null && kc(
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
  function gn(t) {
    vn = t, ge = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function Zt(t) {
    return bs(vn, t);
  }
  function li(t, l) {
    return vn === null && gn(t), bs(t, l);
  }
  function bs(t, l) {
    var e = l._currentValue;
    if (l = { context: l, memoizedValue: e, next: null }, ge === null) {
      if (t === null) throw Error(r(308));
      ge = l, t.dependencies = { lanes: 0, firstContext: l }, t.flags |= 524288;
    } else ge = ge.next = l;
    return e;
  }
  var Bv = typeof AbortController < "u" ? AbortController : function() {
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
  }, Yv = i.unstable_scheduleCallback, qv = i.unstable_NormalPriority, jt = {
    $$typeof: Dt,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Pc() {
    return {
      controller: new Bv(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Xa(t) {
    t.refCount--, t.refCount === 0 && Yv(qv, function() {
      t.controller.abort();
    });
  }
  function ps(t, l) {
    if ((t.pendingLanes & 4194048) !== 0) {
      var e = t.transitionTypes;
      for (e === null && (e = t.transitionTypes = []), t = 0; t < l.length; t++) {
        var n = l[t];
        e.indexOf(n) === -1 && e.push(n);
      }
    }
  }
  var Qa = null;
  function Lv(t) {
    var l = t.transitionTypes;
    return t.transitionTypes = null, l;
  }
  var Va = null, tf = 0, Sn = 0, Jn = null;
  function Gv(t, l) {
    if (Va === null) {
      var e = Va = [];
      tf = 0, Sn = So(), Jn = {
        status: "pending",
        value: void 0,
        then: function(n) {
          e.push(n);
        }
      };
    }
    return tf++, l.then(Ts, Ts), l;
  }
  function Ts() {
    if (--tf === 0 && (Qa = null, Va !== null)) {
      Jn !== null && (Jn.status = "fulfilled");
      var t = Va;
      Va = null, Sn = 0, Jn = null;
      for (var l = 0; l < t.length; l++) (0, t[l])();
    }
  }
  function Xv(t, l) {
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
  var Es = Y.S;
  Y.S = function(t, l) {
    if (my = ml(), typeof l == "object" && l !== null && typeof l.then == "function" && Gv(t, l), Qa !== null)
      for (var e = sa; e !== null; )
        ps(e, Qa), e = e.next;
    if (e = t.types, e !== null) {
      for (var n = sa; n !== null; )
        ps(n, e), n = n.next;
      if (Sn !== 0) {
        n = Qa, n === null && (n = Qa = []);
        for (var a = 0; a < e.length; a++) {
          var u = e[a];
          n.indexOf(u) === -1 && n.push(u);
        }
      }
    }
    Es !== null && Es(t, l);
  };
  var bn = Ct(null);
  function lf() {
    var t = bn.current;
    return t !== null ? t : pt.pooledCache;
  }
  function ei(t, l) {
    l === null ? St(bn, bn.current) : St(bn, l.pool);
  }
  function As() {
    var t = lf();
    return t === null ? null : { parent: jt._currentValue, pool: t };
  }
  var $n = Error(r(460)), ef = Error(r(474)), ni = Error(r(542)), ai = { then: function() {
  } };
  function Ns(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function zs(t, l, e) {
    switch (e = t[e], e === void 0 ? t.push(l) : e !== l && (l.then(Wl, Wl), l = e), l.status) {
      case "fulfilled":
        return l.value;
      case "rejected":
        throw t = l.reason, Os(t), t === void 0 && !("reason" in l) ? Error(r(600)) : t;
      default:
        if (typeof l.status == "string") l.then(Wl, Wl);
        else {
          if (t = pt, t !== null && 100 < t.shellSuspendCounter)
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
            throw t = l.reason, Os(t), t;
        }
        throw Tn = l, $n;
    }
  }
  function pn(t) {
    try {
      var l = t._init;
      return l(t._payload);
    } catch (e) {
      throw e !== null && typeof e == "object" && typeof e.then == "function" ? (Tn = e, $n) : e;
    }
  }
  var Tn = null;
  function xs() {
    if (Tn === null) throw Error(r(459));
    var t = Tn;
    return Tn = null, t;
  }
  function Os(t) {
    if (t === $n || t === ni)
      throw Error(r(483));
  }
  var Wn = null, Za = 0;
  function ui(t) {
    var l = Za;
    return Za += 1, Wn === null && (Wn = []), zs(Wn, t, l);
  }
  function Ge(t, l) {
    l = l.props.ref, t.ref = l !== void 0 ? l : null;
  }
  function ii(t, l) {
    throw l.$$typeof === ft ? Error(r(525)) : (t = Object.prototype.toString.call(l), Error(
      r(
        31,
        t === "[object Object]" ? "object with keys {" + Object.keys(l).join(", ") + "}" : t
      )
    ));
  }
  function _s(t) {
    function l(g, y) {
      if (t) {
        var b = g.deletions;
        b === null ? (g.deletions = [y], g.flags |= 16) : b.push(y);
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
    function u(g, y, b) {
      return g.index = b, t ? (b = g.alternate, b !== null ? (b = b.index, b < y ? (g.flags |= 2, y) : b) : (g.flags |= 134217730, y)) : (g.flags |= 1048576, y);
    }
    function c(g) {
      return t && g.alternate === null && (g.flags |= 134217730), g;
    }
    function o(g, y, b, N) {
      return y === null || y.tag !== 6 ? (y = Kc(b, g.mode, N), y.return = g, y) : (y = a(y, b), y.return = g, y);
    }
    function d(g, y, b, N) {
      var U = b.type;
      return U === il ? (g = A(
        g,
        y,
        b.props.children,
        N,
        b.key
      ), Ge(g, b), g) : y !== null && (y.elementType === U || typeof U == "object" && U !== null && U.$$typeof === rt && pn(U) === y.type) ? (y = a(y, b.props), Ge(y, b), y.return = g, y) : (y = Wu(
        b.type,
        b.key,
        b.props,
        null,
        g.mode,
        N
      ), Ge(y, b), y.return = g, y);
    }
    function S(g, y, b, N) {
      return y === null || y.tag !== 4 || y.stateNode.containerInfo !== b.containerInfo || y.stateNode.implementation !== b.implementation ? (y = Jc(b, g.mode, N), y.return = g, y) : (y = a(y, b.children || []), y.return = g, y);
    }
    function A(g, y, b, N, U) {
      return y === null || y.tag !== 7 ? (y = yn(
        b,
        g.mode,
        N,
        U
      ), y.return = g, y) : (y = a(y, b), y.return = g, y);
    }
    function z(g, y, b) {
      if (typeof y == "string" && y !== "" || typeof y == "number" || typeof y == "bigint")
        return y = Kc(
          "" + y,
          g.mode,
          b
        ), y.return = g, y;
      if (typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case Ol:
            return b = Wu(
              y.type,
              y.key,
              y.props,
              null,
              g.mode,
              b
            ), Ge(b, y), b.return = g, b;
          case ul:
            return y = Jc(
              y,
              g.mode,
              b
            ), y.return = g, y;
          case rt:
            return y = pn(y), z(g, y, b);
        }
        if (ot(y) || q(y))
          return y = yn(
            y,
            g.mode,
            b,
            null
          ), y.return = g, y;
        if (typeof y.then == "function")
          return z(g, ui(y), b);
        if (y.$$typeof === Dt)
          return z(
            g,
            li(g, y),
            b
          );
        ii(g, y);
      }
      return null;
    }
    function v(g, y, b, N) {
      var U = y !== null ? y.key : null;
      if (typeof b == "string" && b !== "" || typeof b == "number" || typeof b == "bigint")
        return U !== null ? null : o(g, y, "" + b, N);
      if (typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case Ol:
            return b.key === U ? d(g, y, b, N) : null;
          case ul:
            return b.key === U ? S(g, y, b, N) : null;
          case rt:
            return b = pn(b), v(g, y, b, N);
        }
        if (ot(b) || q(b))
          return U !== null ? null : A(g, y, b, N, null);
        if (typeof b.then == "function")
          return v(
            g,
            y,
            ui(b),
            N
          );
        if (b.$$typeof === Dt)
          return v(
            g,
            y,
            li(g, b),
            N
          );
        ii(g, b);
      }
      return null;
    }
    function T(g, y, b, N, U) {
      if (typeof N == "string" && N !== "" || typeof N == "number" || typeof N == "bigint")
        return g = g.get(b) || null, o(y, g, "" + N, U);
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case Ol:
            return g = g.get(
              N.key === null ? b : N.key
            ) || null, d(y, g, N, U);
          case ul:
            return g = g.get(
              N.key === null ? b : N.key
            ) || null, S(y, g, N, U);
          case rt:
            return N = pn(N), T(
              g,
              y,
              b,
              N,
              U
            );
        }
        if (ot(N) || q(N))
          return g = g.get(b) || null, A(y, g, N, U, null);
        if (typeof N.then == "function")
          return T(
            g,
            y,
            b,
            ui(N),
            U
          );
        if (N.$$typeof === Dt)
          return T(
            g,
            y,
            b,
            li(y, N),
            U
          );
        ii(y, N);
      }
      return null;
    }
    function C(g, y, b, N) {
      for (var U = null, ut = null, G = y, Q = y = 0, Bt = null; G !== null && Q < b.length; Q++) {
        G.index > Q ? (Bt = G, G = null) : Bt = G.sibling;
        var ct = v(
          g,
          G,
          b[Q],
          N
        );
        if (ct === null) {
          G === null && (G = Bt);
          break;
        }
        t && G && ct.alternate === null && l(g, G), y = u(ct, y, Q), ut === null ? U = ct : ut.sibling = ct, ut = ct, G = Bt;
      }
      if (Q === b.length)
        return e(g, G), P && he(g, Q), U;
      if (G === null) {
        for (; Q < b.length; Q++)
          G = z(g, b[Q], N), G !== null && (y = u(
            G,
            y,
            Q
          ), ut === null ? U = G : ut.sibling = G, ut = G);
        return P && he(g, Q), U;
      }
      for (G = n(G); Q < b.length; Q++)
        Bt = T(
          G,
          g,
          Q,
          b[Q],
          N
        ), Bt !== null && (t && (ct = Bt.alternate, ct !== null && G.delete(ct.key === null ? Q : ct.key)), y = u(
          Bt,
          y,
          Q
        ), ut === null ? U = Bt : ut.sibling = Bt, ut = Bt);
      return t && G.forEach(function(un) {
        return l(g, un);
      }), P && he(g, Q), U;
    }
    function B(g, y, b, N) {
      if (b == null) throw Error(r(151));
      for (var U = null, ut = null, G = y, Q = y = 0, Bt = null, ct = b.next(); G !== null && !ct.done; Q++, ct = b.next()) {
        G.index > Q ? (Bt = G, G = null) : Bt = G.sibling;
        var un = v(g, G, ct.value, N);
        if (un === null) {
          G === null && (G = Bt);
          break;
        }
        t && G && un.alternate === null && l(g, G), y = u(un, y, Q), ut === null ? U = un : ut.sibling = un, ut = un, G = Bt;
      }
      if (ct.done)
        return e(g, G), P && he(g, Q), U;
      if (G === null) {
        for (; !ct.done; Q++, ct = b.next())
          ct = z(g, ct.value, N), ct !== null && (y = u(ct, y, Q), ut === null ? U = ct : ut.sibling = ct, ut = ct);
        return P && he(g, Q), U;
      }
      for (G = n(G); !ct.done; Q++, ct = b.next())
        ct = T(G, g, Q, ct.value, N), ct !== null && (t && (Bt = ct.alternate, Bt !== null && G.delete(
          Bt.key === null ? Q : Bt.key
        )), y = u(ct, y, Q), ut === null ? U = ct : ut.sibling = ct, ut = ct);
      return t && G.forEach(function(T1) {
        return l(g, T1);
      }), P && he(g, Q), U;
    }
    function W(g, y, b, N) {
      if (typeof b == "object" && b !== null && b.type === il && b.key === null && b.props.ref === void 0 && (b = b.props.children), typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case Ol:
            t: {
              for (var U = b.key; y !== null; ) {
                if (y.key === U) {
                  if (U = b.type, U === il) {
                    if (y.tag === 7) {
                      e(
                        g,
                        y.sibling
                      ), N = a(
                        y,
                        b.props.children
                      ), Ge(N, b), N.return = g, g = N;
                      break t;
                    }
                  } else if (y.elementType === U || typeof U == "object" && U !== null && U.$$typeof === rt && pn(U) === y.type) {
                    e(
                      g,
                      y.sibling
                    ), N = a(y, b.props), Ge(N, b), N.return = g, g = N;
                    break t;
                  }
                  e(g, y);
                  break;
                } else l(g, y);
                y = y.sibling;
              }
              b.type === il ? (N = yn(
                b.props.children,
                g.mode,
                N,
                b.key
              ), Ge(N, b), N.return = g, g = N) : (N = Wu(
                b.type,
                b.key,
                b.props,
                null,
                g.mode,
                N
              ), Ge(N, b), N.return = g, g = N);
            }
            return c(g);
          case ul:
            t: {
              for (U = b.key; y !== null; ) {
                if (y.key === U)
                  if (y.tag === 4 && y.stateNode.containerInfo === b.containerInfo && y.stateNode.implementation === b.implementation) {
                    e(
                      g,
                      y.sibling
                    ), N = a(y, b.children || []), N.return = g, g = N;
                    break t;
                  } else {
                    e(g, y);
                    break;
                  }
                else l(g, y);
                y = y.sibling;
              }
              N = Jc(b, g.mode, N), N.return = g, g = N;
            }
            return c(g);
          case rt:
            return b = pn(b), W(
              g,
              y,
              b,
              N
            );
        }
        if (ot(b))
          return C(
            g,
            y,
            b,
            N
          );
        if (q(b)) {
          if (U = q(b), typeof U != "function") throw Error(r(150));
          return b = U.call(b), B(
            g,
            y,
            b,
            N
          );
        }
        if (typeof b.then == "function")
          return W(
            g,
            y,
            ui(b),
            N
          );
        if (b.$$typeof === Dt)
          return W(
            g,
            y,
            li(g, b),
            N
          );
        ii(g, b);
      }
      return typeof b == "string" && b !== "" || typeof b == "number" || typeof b == "bigint" ? (b = "" + b, y !== null && y.tag === 6 ? (e(g, y.sibling), N = a(y, b), N.return = g, g = N) : (e(g, y), N = Kc(b, g.mode, N), N.return = g, g = N), c(g)) : e(g, y);
    }
    return function(g, y, b, N) {
      try {
        Za = 0;
        var U = W(
          g,
          y,
          b,
          N
        );
        return Wn = null, U;
      } catch (G) {
        if (G === $n || G === ni) throw G;
        var ut = fl(29, G, null, g.mode);
        return ut.lanes = N, ut.return = g, ut;
      }
    };
  }
  var En = _s(!0), Ms = _s(!1), Xe = !1;
  function nf(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function af(t, l) {
    t = t.updateQueue, l.updateQueue === t && (l.updateQueue = {
      baseState: t.baseState,
      firstBaseUpdate: t.firstBaseUpdate,
      lastBaseUpdate: t.lastBaseUpdate,
      shared: t.shared,
      callbacks: null
    });
  }
  function Qe(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Ve(t, l, e) {
    var n = t.updateQueue;
    if (n === null) return null;
    if (n = n.shared, (dt & 2) !== 0) {
      var a = n.pending;
      return a === null ? l.next = l : (l.next = a.next, a.next = l), n.pending = l, l = $u(t), ds(t, null, e), l;
    }
    return Ju(t, n, l, e), $u(t);
  }
  function wa(t, l, e) {
    if (l = l.updateQueue, l !== null && (l = l.shared, (e & 4194048) !== 0)) {
      var n = l.lanes;
      n &= t.pendingLanes, e |= n, l.lanes = e, hr(t, e);
    }
  }
  function uf(t, l) {
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
  var cf = !1;
  function Ka() {
    if (cf) {
      var t = Jn;
      if (t !== null) throw t;
    }
  }
  function Ja(t, l, e, n) {
    cf = !1;
    var a = t.updateQueue;
    Xe = !1;
    var u = a.firstBaseUpdate, c = a.lastBaseUpdate, o = a.shared.pending;
    if (o !== null) {
      a.shared.pending = null;
      var d = o, S = d.next;
      d.next = null, c === null ? u = S : c.next = S, c = d;
      var A = t.alternate;
      A !== null && (A = A.updateQueue, o = A.lastBaseUpdate, o !== c && (o === null ? A.firstBaseUpdate = S : o.next = S, A.lastBaseUpdate = d));
    }
    if (u !== null) {
      var z = a.baseState;
      c = 0, A = S = d = null, o = u;
      do {
        var v = o.lane & -536870913, T = v !== o.lane;
        if (T ? (at & v) === v : (n & v) === v) {
          v !== 0 && v === Sn && (cf = !0), A !== null && (A = A.next = {
            lane: 0,
            tag: o.tag,
            payload: o.payload,
            callback: null,
            next: null
          });
          t: {
            var C = t, B = o;
            v = l;
            var W = e;
            switch (B.tag) {
              case 1:
                if (C = B.payload, typeof C == "function") {
                  z = C.call(W, z, v);
                  break t;
                }
                z = C;
                break t;
              case 3:
                C.flags = C.flags & -65537 | 128;
              case 0:
                if (C = B.payload, v = typeof C == "function" ? C.call(W, z, v) : C, v == null) break t;
                z = k({}, z, v);
                break t;
              case 2:
                Xe = !0;
            }
          }
          v = o.callback, v !== null && (t.flags |= 64, T && (t.flags |= 8192), T = a.callbacks, T === null ? a.callbacks = [v] : T.push(v));
        } else
          T = {
            lane: v,
            tag: o.tag,
            payload: o.payload,
            callback: o.callback,
            next: null
          }, A === null ? (S = A = T, d = z) : A = A.next = T, c |= v;
        if (o = o.next, o === null) {
          if (o = a.shared.pending, o === null)
            break;
          T = o, o = T.next, T.next = null, a.lastBaseUpdate = T, a.shared.pending = null;
        }
      } while (!0);
      A === null && (d = z), a.baseState = d, a.firstBaseUpdate = S, a.lastBaseUpdate = A, u === null && (a.shared.lanes = 0), Fe |= c, t.lanes = c, t.memoizedState = z;
    }
  }
  function Cs(t, l) {
    if (typeof t != "function")
      throw Error(r(191, t));
    t.call(l);
  }
  function Rs(t, l) {
    var e = t.callbacks;
    if (e !== null)
      for (t.callbacks = null, t = 0; t < e.length; t++)
        Cs(e[t], l);
  }
  var Ze = Ct(null), ci = Ct(0);
  function Ds(t, l) {
    t = Ae, St(ci, t), St(Ze, l), Ae = t | l.baseLanes;
  }
  function ff() {
    St(ci, Ae), St(Ze, Ze.current);
  }
  function of() {
    Ae = ci.current, Yt(Ze), Yt(ci);
  }
  var wt = Ct(null), It = null;
  function we(t) {
    var l = t.alternate;
    St(Kt, Kt.current & 1), St(wt, t), It === null && (l === null || Ze.current !== null || l.memoizedState !== null) && (It = t);
  }
  function rf(t) {
    St(Kt, Kt.current), St(wt, t), It === null && (It = t);
  }
  function js(t) {
    t.tag === 22 ? (St(Kt, Kt.current), St(wt, t), It === null && (It = t)) : Ke();
  }
  function Ke() {
    St(Kt, Kt.current), St(wt, wt.current);
  }
  function bl(t) {
    Yt(wt), It === t && (It = null), Yt(Kt);
  }
  var Kt = Ct(0);
  function $a(t, l) {
    St(wt, wt.current), St(Kt, l);
  }
  function sf(t) {
    Yt(Kt), Yt(wt), It === t && (It = null);
  }
  function fi(t) {
    for (var l = t; l !== null; ) {
      if (l.tag === 13) {
        var e = l.memoizedState;
        if (e !== null && (e = e.dehydrated, e === null || Uo(e) || Ho(e)))
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
  var be = 0, $ = null, bt = null, Ut = null, oi = !1, Fn = !1, An = !1, ri = 0, Wa = 0, In = null, Qv = 0;
  function _t() {
    throw Error(r(321));
  }
  function df(t, l) {
    if (l === null) return !1;
    for (var e = 0; e < l.length && e < t.length; e++)
      if (!Sl(t[e], l[e])) return !1;
    return !0;
  }
  function yf(t, l, e, n, a, u) {
    return be = u, $ = l, l.memoizedState = null, l.updateQueue = null, l.lanes = 0, Y.H = t === null || t.memoizedState === null ? hd : gd, An = !1, u = e(n, a), An = !1, Fn && (u = Hs(
      l,
      e,
      n,
      a
    )), Us(t), u;
  }
  function Us(t) {
    Y.H = gi;
    var l = bt !== null && bt.next !== null;
    if (be = 0, Ut = bt = $ = null, oi = !1, Wa = 0, In = null, l) throw Error(r(300));
    t === null || Ht || (t = t.dependencies, t !== null && ti(t) && (Ht = !0));
  }
  function Hs(t, l, e, n) {
    $ = t;
    var a = 0;
    do {
      if (Fn && (In = null), Wa = 0, Fn = !1, 25 <= a) throw Error(r(301));
      if (a += 1, Ut = bt = null, t.updateQueue != null) {
        var u = t.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      Y.H = Fv, u = l(e, n);
    } while (Fn);
    return u;
  }
  function Vv() {
    var t = Y.H, l = t.useState()[0];
    return l = typeof l.then == "function" ? Fa(l) : l, t = t.useState()[0], (bt !== null ? bt.memoizedState : null) !== t && ($.flags |= 1024), l;
  }
  function mf() {
    var t = ri !== 0;
    return ri = 0, t;
  }
  function vf(t, l, e) {
    l.updateQueue = t.updateQueue, l.flags &= -2053, t.lanes &= ~e;
  }
  function hf(t) {
    if (oi) {
      for (t = t.memoizedState; t !== null; ) {
        var l = t.queue;
        l !== null && (l.pending = null), t = t.next;
      }
      oi = !1;
    }
    be = 0, Ut = bt = $ = null, Fn = !1, Wa = ri = 0, In = null;
  }
  function ll() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Ut === null ? $.memoizedState = Ut = t : Ut = Ut.next = t, Ut;
  }
  function Rt() {
    if (bt === null) {
      var t = $.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = bt.next;
    var l = Ut === null ? $.memoizedState : Ut.next;
    if (l !== null)
      Ut = l, bt = t;
    else {
      if (t === null)
        throw $.alternate === null ? Error(r(467)) : Error(r(310));
      bt = t, t = {
        memoizedState: bt.memoizedState,
        baseState: bt.baseState,
        baseQueue: bt.baseQueue,
        queue: bt.queue,
        next: null
      }, Ut === null ? $.memoizedState = Ut = t : Ut = Ut.next = t;
    }
    return Ut;
  }
  function si() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Fa(t) {
    var l = Wa;
    return Wa += 1, In === null && (In = []), t = zs(In, t, l), l = $, (Ut === null ? l.memoizedState : Ut.next) === null && (l = l.alternate, Y.H = l === null || l.memoizedState === null ? hd : gd), t;
  }
  function di(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return Fa(t);
      if (t.$$typeof === O) return;
      if (t.$$typeof === Dt) return Zt(t);
    }
    throw Error(r(438, String(t)));
  }
  function gf(t) {
    var l = null, e = $.updateQueue;
    if (e !== null && (l = e.memoCache), l == null) {
      var n = $.alternate;
      n !== null && (n = n.updateQueue, n !== null && (n = n.memoCache, n != null && (l = {
        data: n.data.map(function(a) {
          return a.slice();
        }),
        index: 0
      })));
    }
    if (l == null && (l = { data: [], index: 0 }), e === null && (e = si(), $.updateQueue = e), e.memoCache = l, e = l.data[l.index], e === void 0)
      for (e = l.data[l.index] = Array(t), n = 0; n < t; n++)
        e[n] = Jl;
    return l.index++, e;
  }
  function pe(t, l) {
    return typeof l == "function" ? l(t) : l;
  }
  function yi(t) {
    var l = Rt();
    return Sf(l, bt, t);
  }
  function Sf(t, l, e) {
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
      var o = c = null, d = null, S = l, A = !1;
      do {
        var z = S.lane & -536870913;
        if (z !== S.lane ? (at & z) === z : (be & z) === z) {
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
            }), z === Sn && (A = !0);
          else if ((be & v) === v) {
            S = S.next, v === Sn && (A = !0);
            continue;
          } else
            z = {
              lane: 0,
              revertLane: S.revertLane,
              gesture: null,
              action: S.action,
              hasEagerState: S.hasEagerState,
              eagerState: S.eagerState,
              next: null
            }, d === null ? (o = d = z, c = u) : d = d.next = z, $.lanes |= v, Fe |= v;
          z = S.action, An && e(u, z), u = S.hasEagerState ? S.eagerState : e(u, z);
        } else
          v = {
            lane: z,
            revertLane: S.revertLane,
            gesture: S.gesture,
            action: S.action,
            hasEagerState: S.hasEagerState,
            eagerState: S.eagerState,
            next: null
          }, d === null ? (o = d = v, c = u) : d = d.next = v, $.lanes |= z, Fe |= z;
        S = S.next;
      } while (S !== null && S !== l);
      if (d === null ? c = u : d.next = o, !Sl(u, t.memoizedState) && (Ht = !0, A && (e = Jn, e !== null)))
        throw e;
      t.memoizedState = u, t.baseState = c, t.baseQueue = d, n.lastRenderedState = u;
    }
    return a === null && (n.lanes = 0), [t.memoizedState, n.dispatch];
  }
  function bf(t) {
    var l = Rt(), e = l.queue;
    if (e === null) throw Error(r(311));
    e.lastRenderedReducer = t;
    var n = e.dispatch, a = e.pending, u = l.memoizedState;
    if (a !== null) {
      e.pending = null;
      var c = a = a.next;
      do
        u = t(u, c.action), c = c.next;
      while (c !== a);
      Sl(u, l.memoizedState) || (Ht = !0), l.memoizedState = u, l.baseQueue === null && (l.baseState = u), e.lastRenderedState = u;
    }
    return [u, n];
  }
  function Bs(t, l, e) {
    var n = $, a = Rt(), u = P;
    if (u) {
      if (e === void 0) throw Error(r(407));
      e = e();
    } else e = l();
    var c = !Sl(
      (bt || a).memoizedState,
      e
    );
    if (c && (a.memoizedState = e, Ht = !0), a = a.queue, Ef(Ls.bind(null, n, a, t), [
      t
    ]), t = a.getSnapshot !== l || c || Ut !== null && (Ut.memoizedState.tag & 1) !== 0, kn(
      t ? 9 : 8,
      { destroy: void 0 },
      qs.bind(null, n, a, e, l),
      null
    ), t) {
      if (n.flags |= 2048, pt === null) throw Error(r(349));
      u || (be & 127) !== 0 || Ys(n, l, e);
    }
    return e;
  }
  function Ys(t, l, e) {
    t.flags |= 16384, t = { getSnapshot: l, value: e }, l = $.updateQueue, l === null ? (l = si(), $.updateQueue = l, l.stores = [t]) : (e = l.stores, e === null ? l.stores = [t] : e.push(t));
  }
  function qs(t, l, e, n) {
    l.value = e, l.getSnapshot = n, Gs(l) && Xs(t);
  }
  function Ls(t, l, e) {
    return e(function() {
      Gs(l) && Xs(t);
    });
  }
  function Gs(t) {
    var l = t.getSnapshot;
    t = t.value;
    try {
      var e = l();
      return !Sl(t, e);
    } catch {
      return !0;
    }
  }
  function Xs(t) {
    var l = dn(t, 2);
    l !== null && dl(l, t, 2);
  }
  function pf(t) {
    var l = ll();
    if (typeof t == "function") {
      var e = t;
      if (t = e(), An) {
        je(!0);
        try {
          e();
        } finally {
          je(!1);
        }
      }
    }
    return l.memoizedState = l.baseState = t, l.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: pe,
      lastRenderedState: t
    }, l;
  }
  function Qs(t, l, e, n) {
    return t.baseState = e, Sf(
      t,
      bt,
      typeof n == "function" ? n : pe
    );
  }
  function Zv(t, l, e, n, a) {
    if (hi(t)) throw Error(r(485));
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
      Y.T !== null ? e(!0) : u.isTransition = !1, n(u), e = l.pending, e === null ? (u.next = l.pending = u, Vs(l, u)) : (u.next = e.next, l.pending = e.next = u);
    }
  }
  function Vs(t, l) {
    var e = l.action, n = l.payload, a = t.state;
    if (l.isTransition) {
      var u = Y.T, c = {};
      c.types = u !== null ? u.types : null, Y.T = c;
      try {
        var o = e(a, n), d = Y.S;
        d !== null && d(c, o), Zs(t, l, o);
      } catch (S) {
        Tf(t, l, S);
      } finally {
        u !== null && c.types !== null && (u.types = c.types), Y.T = u;
      }
    } else
      try {
        u = e(a, n), Zs(t, l, u);
      } catch (S) {
        Tf(t, l, S);
      }
  }
  function Zs(t, l, e) {
    e !== null && typeof e == "object" && typeof e.then == "function" ? e.then(
      function(n) {
        ws(t, l, n);
      },
      function(n) {
        return Tf(t, l, n);
      }
    ) : ws(t, l, e);
  }
  function ws(t, l, e) {
    l.status = "fulfilled", l.value = e, Ks(l), t.state = e, l = t.pending, l !== null && (e = l.next, e === l ? t.pending = null : (e = e.next, l.next = e, Vs(t, e)));
  }
  function Tf(t, l, e) {
    var n = t.pending;
    if (t.pending = null, n !== null) {
      n = n.next;
      do
        l.status = "rejected", l.reason = e, Ks(l), l = l.next;
      while (l !== n);
    }
    t.action = null;
  }
  function Ks(t) {
    t = t.listeners;
    for (var l = 0; l < t.length; l++) (0, t[l])();
  }
  function Js(t, l) {
    return l;
  }
  function $s(t, l) {
    if (P) {
      var e = pt.formState;
      if (e !== null) {
        t: {
          var n = $;
          if (P) {
            if (Et) {
              l: {
                for (var a = Et, u = Ul; a.nodeType !== 8; ) {
                  if (!u) {
                    a = null;
                    break l;
                  }
                  if (a = Bl(
                    a.nextSibling
                  ), a === null) {
                    a = null;
                    break l;
                  }
                }
                u = a.data, a = u === "F!" || u === "F" ? a : null;
              }
              if (a) {
                Et = Bl(
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
    return e = ll(), e.memoizedState = e.baseState = l, n = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Js,
      lastRenderedState: l
    }, e.queue = n, e = yd.bind(
      null,
      $,
      n
    ), n.dispatch = e, n = pf(!1), u = Of.bind(
      null,
      $,
      !1,
      n.queue
    ), n = ll(), a = {
      state: l,
      dispatch: null,
      action: t,
      pending: null
    }, n.queue = a, e = Zv.bind(
      null,
      $,
      a,
      u,
      e
    ), a.dispatch = e, n.memoizedState = t, [l, e, !1];
  }
  function Ws(t) {
    var l = Rt();
    return Fs(l, bt, t);
  }
  function Fs(t, l, e) {
    if (l = Sf(
      t,
      l,
      Js
    )[0], t = yi(pe)[0], typeof l == "object" && l !== null && typeof l.then == "function")
      try {
        var n = Fa(l);
      } catch (c) {
        throw c === $n ? ni : c;
      }
    else n = l;
    l = Rt();
    var a = l.queue, u = a.dispatch;
    return e !== l.memoizedState && ($.flags |= 2048, kn(
      9,
      { destroy: void 0 },
      wv.bind(null, a, e),
      null
    )), [n, u, t];
  }
  function wv(t, l) {
    t.action = l;
  }
  function Is(t) {
    var l = Rt(), e = bt;
    if (e !== null)
      return Fs(l, e, t);
    Rt(), l = l.memoizedState, e = Rt();
    var n = e.queue.dispatch;
    return e.memoizedState = t, [l, n, !1];
  }
  function kn(t, l, e, n) {
    return t = { tag: t, create: e, deps: n, inst: l, next: null }, l = $.updateQueue, l === null && (l = si(), $.updateQueue = l), e = l.lastEffect, e === null ? l.lastEffect = t.next = t : (n = e.next, e.next = t, t.next = n, l.lastEffect = t), t;
  }
  function ks() {
    return Rt().memoizedState;
  }
  function mi(t, l, e, n) {
    var a = ll();
    $.flags |= t, a.memoizedState = kn(
      1 | l,
      { destroy: void 0 },
      e,
      n === void 0 ? null : n
    );
  }
  function vi(t, l, e, n) {
    var a = Rt();
    n = n === void 0 ? null : n;
    var u = a.memoizedState.inst;
    bt !== null && n !== null && df(n, bt.memoizedState.deps) ? a.memoizedState = kn(l, u, e, n) : ($.flags |= t, a.memoizedState = kn(
      1 | l,
      u,
      e,
      n
    ));
  }
  function Ps(t, l) {
    mi(8390656, 8, t, l);
  }
  function Ef(t, l) {
    vi(2048, 8, t, l);
  }
  function Kv(t) {
    $.flags |= 4;
    var l = $.updateQueue;
    if (l === null)
      l = si(), $.updateQueue = l, l.events = [t];
    else {
      var e = l.events;
      e === null ? l.events = [t] : e.push(t);
    }
  }
  function td(t) {
    var l = Rt().memoizedState;
    return Kv({ ref: l, nextImpl: t }), function() {
      if ((dt & 2) !== 0) throw Error(r(440));
      return l.impl.apply(void 0, arguments);
    };
  }
  function ld(t, l) {
    return vi(4, 2, t, l);
  }
  function ed(t, l) {
    return vi(4, 4, t, l);
  }
  function nd(t, l) {
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
  function ad(t, l, e) {
    e = e != null ? e.concat([t]) : null, vi(4, 4, nd.bind(null, l, t), e);
  }
  function Af() {
  }
  function ud(t, l) {
    var e = Rt();
    l = l === void 0 ? null : l;
    var n = e.memoizedState;
    return l !== null && df(l, n[1]) ? n[0] : (e.memoizedState = [t, l], t);
  }
  function id(t, l) {
    var e = Rt();
    l = l === void 0 ? null : l;
    var n = e.memoizedState;
    if (l !== null && df(l, n[1]))
      return n[0];
    if (n = t(), An) {
      je(!0);
      try {
        t();
      } finally {
        je(!1);
      }
    }
    return e.memoizedState = [n, l], n;
  }
  function Nf(t, l, e) {
    return e === void 0 || (be & 1073741824) !== 0 && (at & 261930) === 0 ? t.memoizedState = l : (t.memoizedState = e, t = hy(), $.lanes |= t, Fe |= t, e);
  }
  function cd(t, l, e, n) {
    return Sl(e, l) ? e : Ze.current !== null ? (t = Nf(t, e, n), Sl(t, l) || (Ht = !0), t) : (be & 106) === 0 || (be & 1073741824) !== 0 && (at & 261930) === 0 ? (Ht = !0, t.memoizedState = e) : (t = hy(), $.lanes |= t, Fe |= t, l);
  }
  function fd(t, l, e, n, a) {
    var u = w.p;
    w.p = u !== 0 && 8 > u ? u : 8;
    var c = Y.T, o = {};
    o.types = c !== null ? c.types : null, Y.T = o, Of(t, !1, l, e);
    try {
      var d = a(), S = Y.S;
      if (S !== null && S(o, d), d !== null && typeof d == "object" && typeof d.then == "function") {
        var A = Xv(
          d,
          n
        );
        Ia(
          t,
          l,
          A,
          Al(t)
        );
      } else
        Ia(
          t,
          l,
          n,
          Al(t)
        );
    } catch (z) {
      Ia(
        t,
        l,
        { then: function() {
        }, status: "rejected", reason: z },
        Al()
      );
    } finally {
      w.p = u, c !== null && o.types !== null && (c.types = o.types), Y.T = c;
    }
  }
  function Jv() {
  }
  function zf(t, l, e, n) {
    if (t.tag !== 5) throw Error(r(476));
    var a = od(t).queue;
    fd(
      t,
      a,
      l,
      _l,
      e === null ? Jv : function() {
        return rd(t), e(n);
      }
    );
  }
  function od(t) {
    var l = t.memoizedState;
    if (l !== null) return l;
    l = {
      memoizedState: _l,
      baseState: _l,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: pe,
        lastRenderedState: _l
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
        lastRenderedReducer: pe,
        lastRenderedState: e
      },
      next: null
    }, t.memoizedState = l, t = t.alternate, t !== null && (t.memoizedState = l), l;
  }
  function rd(t) {
    var l = od(t);
    l.next === null && (l = t.alternate.memoizedState), Ia(
      t,
      l.next.queue,
      {},
      Al()
    );
  }
  function xf() {
    return Zt(ga);
  }
  function sd() {
    return Rt().memoizedState;
  }
  function dd() {
    return Rt().memoizedState;
  }
  function $v(t) {
    for (var l = t.return; l !== null; ) {
      switch (l.tag) {
        case 24:
        case 3:
          var e = Al();
          t = Qe(e);
          var n = Ve(l, t, e);
          n !== null && (dl(n, l, e), wa(n, l, e)), l = { cache: Pc() }, t.payload = l;
          return;
      }
      l = l.return;
    }
  }
  function Wv(t, l, e) {
    var n = Al();
    e = {
      lane: n,
      revertLane: 0,
      gesture: null,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, hi(t) ? md(l, e) : (e = Zc(t, l, e, n), e !== null && (dl(e, t, n), vd(e, l, n)));
  }
  function yd(t, l, e) {
    var n = Al();
    Ia(t, l, e, n);
  }
  function Ia(t, l, e, n) {
    var a = {
      lane: n,
      revertLane: 0,
      gesture: null,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (hi(t)) md(l, a);
    else {
      var u = t.alternate;
      if (t.lanes === 0 && (u === null || u.lanes === 0) && (u = l.lastRenderedReducer, u !== null))
        try {
          var c = l.lastRenderedState, o = u(c, e);
          if (a.hasEagerState = !0, a.eagerState = o, Sl(o, c))
            return Ju(t, l, a, 0), pt === null && Ku(), !1;
        } catch {
        }
      if (e = Zc(t, l, a, n), e !== null)
        return dl(e, t, n), vd(e, l, n), !0;
    }
    return !1;
  }
  function Of(t, l, e, n) {
    if (n = {
      lane: 2,
      revertLane: So(),
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, hi(t)) {
      if (l) throw Error(r(479));
    } else
      l = Zc(
        t,
        e,
        n,
        2
      ), l !== null && dl(l, t, 2);
  }
  function hi(t) {
    var l = t.alternate;
    return t === $ || l !== null && l === $;
  }
  function md(t, l) {
    Fn = oi = !0;
    var e = t.pending;
    e === null ? l.next = l : (l.next = e.next, e.next = l), t.pending = l;
  }
  function vd(t, l, e) {
    if ((e & 4194048) !== 0) {
      var n = l.lanes;
      n &= t.pendingLanes, e |= n, l.lanes = e, hr(t, e);
    }
  }
  var gi = {
    readContext: Zt,
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
  }, hd = {
    readContext: Zt,
    use: di,
    useCallback: function(t, l) {
      return ll().memoizedState = [
        t,
        l === void 0 ? null : l
      ], t;
    },
    useContext: Zt,
    useEffect: Ps,
    useImperativeHandle: function(t, l, e) {
      e = e != null ? e.concat([t]) : null, mi(
        4194308,
        4,
        nd.bind(null, l, t),
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
      var e = ll();
      l = l === void 0 ? null : l;
      var n = t();
      if (An) {
        je(!0);
        try {
          t();
        } finally {
          je(!1);
        }
      }
      return e.memoizedState = [n, l], n;
    },
    useReducer: function(t, l, e) {
      var n = ll();
      if (e !== void 0) {
        var a = e(l);
        if (An) {
          je(!0);
          try {
            e(l);
          } finally {
            je(!1);
          }
        }
      } else a = l;
      return n.memoizedState = n.baseState = a, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: a
      }, n.queue = t, t = t.dispatch = Wv.bind(
        null,
        $,
        t
      ), [n.memoizedState, t];
    },
    useRef: function(t) {
      var l = ll();
      return t = { current: t }, l.memoizedState = t;
    },
    useState: function(t) {
      t = pf(t);
      var l = t.queue, e = yd.bind(null, $, l);
      return l.dispatch = e, [t.memoizedState, e];
    },
    useDebugValue: Af,
    useDeferredValue: function(t, l) {
      var e = ll();
      return Nf(e, t, l);
    },
    useTransition: function() {
      var t = pf(!1);
      return t = fd.bind(
        null,
        $,
        t.queue,
        !0,
        !1
      ), ll().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, l, e) {
      var n = $, a = ll();
      if (P) {
        if (e === void 0)
          throw Error(r(407));
        e = e();
      } else {
        if (e = l(), pt === null)
          throw Error(r(349));
        (at & 127) !== 0 || Ys(n, l, e);
      }
      a.memoizedState = e;
      var u = { value: e, getSnapshot: l };
      return a.queue = u, Ps(Ls.bind(null, n, u, t), [
        t
      ]), n.flags |= 2048, kn(
        9,
        { destroy: void 0 },
        qs.bind(
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
      var t = ll(), l = pt.identifierPrefix;
      if (P) {
        var e = Il, n = Fl;
        e = (n & ~(1 << 32 - hl(n) - 1)).toString(32) + e, l = "_" + l + "R_" + e, e = ri++, 0 < e && (l += "H" + e.toString(32)), l += "_";
      } else
        e = Qv++, l = "_" + l + "r_" + e.toString(32) + "_";
      return t.memoizedState = l;
    },
    useHostTransitionStatus: xf,
    useFormState: $s,
    useActionState: $s,
    useOptimistic: function(t) {
      var l = ll();
      l.memoizedState = l.baseState = t;
      var e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return l.queue = e, l = Of.bind(
        null,
        $,
        !0,
        e
      ), e.dispatch = l, [t, l];
    },
    useMemoCache: gf,
    useCacheRefresh: function() {
      return ll().memoizedState = $v.bind(
        null,
        $
      );
    },
    useEffectEvent: function(t) {
      var l = ll(), e = { impl: t };
      return l.memoizedState = e, function() {
        if ((dt & 2) !== 0)
          throw Error(r(440));
        return e.impl.apply(void 0, arguments);
      };
    }
  }, gd = {
    readContext: Zt,
    use: di,
    useCallback: ud,
    useContext: Zt,
    useEffect: Ef,
    useImperativeHandle: ad,
    useInsertionEffect: ld,
    useLayoutEffect: ed,
    useMemo: id,
    useReducer: yi,
    useRef: ks,
    useState: function() {
      return yi(pe);
    },
    useDebugValue: Af,
    useDeferredValue: function(t, l) {
      var e = Rt();
      return cd(
        e,
        bt.memoizedState,
        t,
        l
      );
    },
    useTransition: function() {
      var t = yi(pe)[0], l = Rt().memoizedState;
      return [
        typeof t == "boolean" ? t : Fa(t),
        l
      ];
    },
    useSyncExternalStore: Bs,
    useId: sd,
    useHostTransitionStatus: xf,
    useFormState: Ws,
    useActionState: Ws,
    useOptimistic: function(t, l) {
      var e = Rt();
      return Qs(e, bt, t, l);
    },
    useMemoCache: gf,
    useCacheRefresh: dd,
    useEffectEvent: td
  }, Fv = {
    readContext: Zt,
    use: di,
    useCallback: ud,
    useContext: Zt,
    useEffect: Ef,
    useImperativeHandle: ad,
    useInsertionEffect: ld,
    useLayoutEffect: ed,
    useMemo: id,
    useReducer: bf,
    useRef: ks,
    useState: function() {
      return bf(pe);
    },
    useDebugValue: Af,
    useDeferredValue: function(t, l) {
      var e = Rt();
      return bt === null ? Nf(e, t, l) : cd(
        e,
        bt.memoizedState,
        t,
        l
      );
    },
    useTransition: function() {
      var t = bf(pe)[0], l = Rt().memoizedState;
      return [
        typeof t == "boolean" ? t : Fa(t),
        l
      ];
    },
    useSyncExternalStore: Bs,
    useId: sd,
    useHostTransitionStatus: xf,
    useFormState: Is,
    useActionState: Is,
    useOptimistic: function(t, l) {
      var e = Rt();
      return bt !== null ? Qs(e, bt, t, l) : (e.baseState = t, [t, e.queue.dispatch]);
    },
    useMemoCache: gf,
    useCacheRefresh: dd,
    useEffectEvent: td
  };
  function _f(t, l, e, n) {
    l = t.memoizedState, e = e(n, l), e = e == null ? l : k({}, l, e), t.memoizedState = e, t.lanes === 0 && (t.updateQueue.baseState = e);
  }
  var Mf = {
    enqueueSetState: function(t, l, e) {
      t = t._reactInternals;
      var n = Al(), a = Qe(n);
      a.payload = l, e != null && (a.callback = e), l = Ve(t, a, n), l !== null && (dl(l, t, n), wa(l, t, n));
    },
    enqueueReplaceState: function(t, l, e) {
      t = t._reactInternals;
      var n = Al(), a = Qe(n);
      a.tag = 1, a.payload = l, e != null && (a.callback = e), l = Ve(t, a, n), l !== null && (dl(l, t, n), wa(l, t, n));
    },
    enqueueForceUpdate: function(t, l) {
      t = t._reactInternals;
      var e = Al(), n = Qe(e);
      n.tag = 2, l != null && (n.callback = l), l = Ve(t, n, e), l !== null && (dl(l, t, e), wa(l, t, e));
    }
  };
  function Sd(t, l, e, n, a, u, c) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(n, u, c) : l.prototype && l.prototype.isPureReactComponent ? !Ya(e, n) || !Ya(a, u) : !0;
  }
  function bd(t, l, e, n) {
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
      e === l && (e = k({}, e));
      for (var a in t)
        e[a] === void 0 && (e[a] = t[a]);
    }
    return e;
  }
  function pd(t) {
    wu(t);
  }
  function Td(t) {
    console.error(t);
  }
  function Ed(t) {
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
  function Ad(t, l, e) {
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
  function Cf(t, l, e) {
    return e = Qe(e), e.tag = 3, e.payload = { element: null }, e.callback = function() {
      Si(t, l);
    }, e;
  }
  function Nd(t) {
    return t = Qe(t), t.tag = 3, t;
  }
  function zd(t, l, e, n) {
    var a = e.type.getDerivedStateFromError;
    if (typeof a == "function") {
      var u = n.value;
      t.payload = function() {
        return a(u);
      }, t.callback = function() {
        Ad(l, e, n);
      };
    }
    var c = e.stateNode;
    c !== null && typeof c.componentDidCatch == "function" && (t.callback = function() {
      Ad(l, e, n), typeof a != "function" && (Ie === null ? Ie = /* @__PURE__ */ new Set([this]) : Ie.add(this));
      var o = n.stack;
      this.componentDidCatch(n.value, {
        componentStack: o !== null ? o : ""
      });
    });
  }
  function Iv(t, l, e, n, a) {
    if (e.flags |= 32768, n !== null && typeof n == "object" && typeof n.then == "function") {
      if (l = e.alternate, l !== null && hn(
        l,
        e,
        a,
        !0
      ), e = wt.current, e !== null) {
        switch (e.tag) {
          case 31:
          case 13:
          case 19:
            return It === null ? Li() : e.alternate === null && Mt === 0 && (Mt = 3), e.flags &= -257, e.flags |= 65536, e.lanes = a, n === ai ? e.flags |= 16384 : (l = e.updateQueue, l === null ? e.updateQueue = /* @__PURE__ */ new Set([n]) : l.add(n), vo(t, n, a)), !1;
          case 22:
            return e.flags |= 65536, n === ai ? e.flags |= 16384 : (l = e.updateQueue, l === null ? (l = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([n])
            }, e.updateQueue = l) : (e = l.retryQueue, e === null ? l.retryQueue = /* @__PURE__ */ new Set([n]) : e.add(n)), vo(t, n, a)), !1;
        }
        throw Error(r(435, e.tag));
      }
      return vo(t, n, a), Li(), !1;
    }
    if (P)
      return l = wt.current, l !== null ? ((l.flags & 65536) === 0 && (l.flags |= 256), l.flags |= 65536, l.lanes = a, n !== Wc && (t = Error(r(422), { cause: n }), Ga(Rl(t, e)))) : (n !== Wc && (l = Error(r(423), {
        cause: n
      }), Ga(
        Rl(l, e)
      )), t = t.current.alternate, t.flags |= 65536, a &= -a, t.lanes |= a, n = Rl(n, e), a = Cf(
        t.stateNode,
        n,
        a
      ), uf(t, a), Mt !== 4 && (Mt = 2)), !1;
    var u = Error(r(520), { cause: n });
    if (u = Rl(u, e), uu === null ? uu = [u] : uu.push(u), Mt !== 4 && (Mt = 2), l === null) return !0;
    n = Rl(n, e), e = l;
    do {
      switch (e.tag) {
        case 3:
          return e.flags |= 65536, t = a & -a, e.lanes |= t, t = Cf(e.stateNode, n, t), uf(e, t), !1;
        case 1:
          if (l = e.type, u = e.stateNode, (e.flags & 128) === 0 && (typeof l.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (Ie === null || !Ie.has(u))))
            return e.flags |= 65536, a &= -a, e.lanes |= a, a = Nd(a), zd(
              a,
              t,
              e,
              n
            ), uf(e, a), !1;
          break;
        case 22:
          if (e.memoizedState !== null)
            return e.flags |= 65536, !1;
      }
      e = e.return;
    } while (e !== null);
    return !1;
  }
  var Rf = Error(r(461)), Ht = !1;
  function qt(t, l, e, n) {
    l.child = t === null ? Ms(l, null, e, n) : En(
      l,
      t.child,
      e,
      n
    );
  }
  function xd(t, l, e, n, a) {
    e = e.render;
    var u = l.ref;
    if ("ref" in n) {
      var c = {};
      for (var o in n)
        o !== "ref" && (c[o] = n[o]);
    } else c = n;
    return gn(l), n = yf(
      t,
      l,
      e,
      c,
      u,
      a
    ), o = mf(), t !== null && !Ht ? (vf(t, l, a), Te(t, l, a)) : (P && o && Iu(l), l.flags |= 1, qt(t, l, n, a), l.child);
  }
  function Od(t, l, e, n, a) {
    if (t === null) {
      var u = e.type;
      return typeof u == "function" && !wc(u) && u.defaultProps === void 0 && e.compare === null ? (l.tag = 15, l.type = u, _d(
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
    if (u = t.child, !Lf(t, a)) {
      var c = u.memoizedProps;
      if (e = e.compare, e = e !== null ? e : Ya, e(c, n) && t.ref === l.ref)
        return Te(t, l, a);
    }
    return l.flags |= 1, t = ve(u, n), t.ref = l.ref, t.return = l, l.child = t;
  }
  function _d(t, l, e, n, a) {
    if (t !== null) {
      var u = t.memoizedProps;
      if (Ya(u, n) && t.ref === l.ref)
        if (Ht = !1, l.pendingProps = n = u, Lf(t, a))
          (t.flags & 131072) !== 0 && (Ht = !0);
        else
          return l.lanes = t.lanes, Te(t, l, a);
    }
    return Df(
      t,
      l,
      e,
      n,
      a
    );
  }
  function Md(t, l, e, n) {
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
        return Cd(
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
        ), u !== null ? Ds(l, u) : ff(), js(l);
      else
        return n = l.lanes = 536870912, Cd(
          t,
          l,
          u !== null ? u.baseLanes | e : e,
          e,
          n
        );
    } else
      u !== null ? (ei(l, u.cachePool), Ds(l, u), Ke(), l.memoizedState = null) : (t !== null && ei(l, null), ff(), Ke());
    return qt(t, l, a, e), l.child;
  }
  function ka(t, l) {
    return t !== null && t.tag === 22 || l.stateNode !== null || (l.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), l.sibling;
  }
  function Cd(t, l, e, n, a) {
    var u = lf();
    return u = u === null ? null : { parent: jt._currentValue, pool: u }, l.memoizedState = {
      baseLanes: e,
      cachePool: u
    }, t !== null && ei(l, null), ff(), js(l), t !== null && hn(t, l, n, !0), l.childLanes = a, null;
  }
  function bi(t, l) {
    return l = pi(
      { mode: l.mode, children: l.children },
      t.mode
    ), l.ref = t.ref, t.child = l, l.return = t, l;
  }
  function Rd(t, l, e) {
    return En(l, t.child, null, e), t = bi(l, l.pendingProps), t.flags |= 2, bl(l), l.memoizedState = null, t;
  }
  function kv(t, l, e) {
    var n = l.pendingProps, a = (l.flags & 128) !== 0;
    if (l.flags &= -129, t === null) {
      if (P) {
        if (n.mode === "hidden")
          return t = bi(l, n), l.lanes = 536870912, t.memoizedState = { baseLanes: 0, cachePool: null }, ka(null, t);
        if (rf(l), (t = Et) ? (t = n0(
          t,
          Ul
        ), t = t !== null && t.data === "&" ? t : null, t !== null && (l.memoizedState = {
          dehydrated: t,
          treeContext: Be !== null ? { id: Fl, overflow: Il } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, e = ms(t), e.return = l, l.child = e, Gt = l, Et = null)) : t = null, t === null) throw qe(l);
        return l.lanes = 536870912, null;
      }
      return bi(l, n);
    }
    var u = t.memoizedState;
    if (u !== null) {
      var c = u.dehydrated;
      if (rf(l), a)
        if (l.flags & 256)
          l.flags &= -257, l = Rd(
            t,
            l,
            e
          );
        else if (l.memoizedState !== null)
          l.child = t.child, l.flags |= 128, l = null;
        else throw Error(r(558));
      else if (Ht || hn(t, l, e, !1), a = (e & t.childLanes) !== 0, Ht || a) {
        if (Ze.current === null) {
          if (n = pt, n !== null && (c = gr(n, e), c !== 0 && c !== u.retryLane))
            throw u.retryLane = c, dn(t, c), dl(n, t, c), Rf;
          Li();
        }
        l = Rd(
          t,
          l,
          e
        );
      } else
        t = u.treeContext, Et = Bl(c.nextSibling), Gt = l, P = !0, Ye = null, Ul = !1, t !== null && gs(l, t), l = bi(l, n), l.flags |= 134221824;
      return l;
    }
    return t = ve(t.child, {
      mode: n.mode,
      children: n.children
    }), t.ref = l.ref, l.child = t, t.return = l, t;
  }
  function Pn(t, l) {
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
    return gn(l), e = yf(
      t,
      l,
      e,
      n,
      void 0,
      a
    ), n = mf(), t !== null && !Ht ? (vf(t, l, a), Te(t, l, a)) : (P && n && Iu(l), l.flags |= 1, qt(t, l, e, a), l.child);
  }
  function Dd(t, l, e, n, a, u) {
    return gn(l), l.updateQueue = null, e = Hs(
      l,
      n,
      e,
      a
    ), Us(t), n = mf(), t !== null && !Ht ? (vf(t, l, u), Te(t, l, u)) : (P && n && Iu(l), l.flags |= 1, qt(t, l, e, u), l.child);
  }
  function jd(t, l, e, n, a) {
    if (gn(l), l.stateNode === null) {
      var u = Vn, c = e.contextType;
      typeof c == "object" && c !== null && (u = Zt(c)), u = new e(n, u), l.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = Mf, l.stateNode = u, u._reactInternals = l, u = l.stateNode, u.props = n, u.state = l.memoizedState, u.refs = {}, nf(l), c = e.contextType, u.context = typeof c == "object" && c !== null ? Zt(c) : Vn, u.state = l.memoizedState, c = e.getDerivedStateFromProps, typeof c == "function" && (_f(
        l,
        e,
        c,
        n
      ), u.state = l.memoizedState), typeof e.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (c = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), c !== u.state && Mf.enqueueReplaceState(u, u.state, null), Ja(l, n, u, a), Ka(), u.state = l.memoizedState), typeof u.componentDidMount == "function" && (l.flags |= 4194308), n = !0;
    } else if (t === null) {
      u = l.stateNode;
      var o = l.memoizedProps, d = Nn(e, o);
      u.props = d;
      var S = u.context, A = e.contextType;
      c = Vn, typeof A == "object" && A !== null && (c = Zt(A));
      var z = e.getDerivedStateFromProps;
      A = typeof z == "function" || typeof u.getSnapshotBeforeUpdate == "function", o = l.pendingProps !== o, A || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (o || S !== c) && bd(
        l,
        u,
        n,
        c
      ), Xe = !1;
      var v = l.memoizedState;
      u.state = v, Ja(l, n, u, a), Ka(), S = l.memoizedState, o || v !== S || Xe ? (typeof z == "function" && (_f(
        l,
        e,
        z,
        n
      ), S = l.memoizedState), (d = Xe || Sd(
        l,
        e,
        d,
        n,
        v,
        S,
        c
      )) ? (A || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (l.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (l.flags |= 4194308), l.memoizedProps = n, l.memoizedState = S), u.props = n, u.state = S, u.context = c, n = d) : (typeof u.componentDidMount == "function" && (l.flags |= 4194308), n = !1);
    } else {
      u = l.stateNode, af(t, l), c = l.memoizedProps, A = Nn(e, c), u.props = A, z = l.pendingProps, v = u.context, S = e.contextType, d = Vn, typeof S == "object" && S !== null && (d = Zt(S)), o = e.getDerivedStateFromProps, (S = typeof o == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (c !== z || v !== d) && bd(
        l,
        u,
        n,
        d
      ), Xe = !1, v = l.memoizedState, u.state = v, Ja(l, n, u, a), Ka();
      var T = l.memoizedState;
      c !== z || v !== T || Xe || t !== null && t.dependencies !== null && ti(t.dependencies) ? (typeof o == "function" && (_f(
        l,
        e,
        o,
        n
      ), T = l.memoizedState), (A = Xe || Sd(
        l,
        e,
        A,
        n,
        v,
        T,
        d
      ) || t !== null && t.dependencies !== null && ti(t.dependencies)) ? (S || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(n, T, d), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(
        n,
        T,
        d
      )), typeof u.componentDidUpdate == "function" && (l.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (l.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || c === t.memoizedProps && v === t.memoizedState || (l.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || c === t.memoizedProps && v === t.memoizedState || (l.flags |= 1024), l.memoizedProps = n, l.memoizedState = T), u.props = n, u.state = T, u.context = d, n = A) : (typeof u.componentDidUpdate != "function" || c === t.memoizedProps && v === t.memoizedState || (l.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || c === t.memoizedProps && v === t.memoizedState || (l.flags |= 1024), n = !1);
    }
    return u = n, Pn(t, l), n = (l.flags & 128) !== 0, u || n ? (u = l.stateNode, e = n && typeof e.getDerivedStateFromError != "function" ? null : u.render(), l.flags |= 1, t !== null && n ? (l.child = En(
      l,
      t.child,
      null,
      a
    ), l.child = En(
      l,
      null,
      e,
      a
    )) : qt(t, l, e, a), l.memoizedState = u.state, t = l.child) : t = Te(
      t,
      l,
      a
    ), t;
  }
  function Ud(t, l, e, n) {
    return mn(), l.flags |= 256, qt(t, l, e, n), l.child;
  }
  var jf = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Uf(t) {
    return { baseLanes: t, cachePool: As() };
  }
  function Hf(t, l, e) {
    return t = t !== null ? t.childLanes & ~e : 0, l && (t |= El), t;
  }
  function Hd(t, l, e) {
    var n = l.pendingProps, a = !1, u = (l.flags & 128) !== 0, c;
    if ((c = u) || (c = t !== null && t.memoizedState === null ? !1 : (Kt.current & 2) !== 0), c && (a = !0, l.flags &= -129), c = (l.flags & 32) !== 0, l.flags &= -33, t === null) {
      if (P) {
        if (a ? we(l) : Ke(), (t = Et) ? (t = n0(
          t,
          Ul
        ), t = t !== null && t.data !== "&" ? t : null, t !== null && (l.memoizedState = {
          dehydrated: t,
          treeContext: Be !== null ? { id: Fl, overflow: Il } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, e = ms(t), e.return = l, l.child = e, Gt = l, Et = null)) : t = null, t === null) throw qe(l);
        return Ho(t) ? l.lanes = 32 : l.lanes = 536870912, null;
      }
      return u = n.children, n = n.fallback, a ? (Ke(), a = l.mode, u = pi(
        { mode: "hidden", children: u },
        a
      ), n = yn(
        n,
        a,
        e,
        null
      ), u.return = l, n.return = l, u.sibling = n, l.child = u, n = l.child, n.memoizedState = Uf(e), n.childLanes = Hf(
        t,
        c,
        e
      ), l.memoizedState = jf, ka(null, n)) : (we(l), Bf(l, u));
    }
    var o = t.memoizedState;
    if (o !== null) {
      var d = o.dehydrated;
      if (d !== null)
        return Pv(
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
    return a ? (Ke(), a = n.fallback, u = l.mode, o = t.child, d = o.sibling, n = ve(o, {
      mode: "hidden",
      children: n.children
    }), n.subtreeFlags = o.subtreeFlags & 1206910976, d !== null ? a = ve(d, a) : (a = yn(
      a,
      u,
      e,
      null
    ), a.flags |= 2), a.return = l, n.return = l, n.sibling = a, l.child = n, ka(null, n), n = l.child, a = t.child.memoizedState, a === null ? a = Uf(e) : (u = a.cachePool, u !== null ? (o = jt._currentValue, u = u.parent !== o ? { parent: o, pool: o } : u) : u = As(), a = {
      baseLanes: a.baseLanes | e,
      cachePool: u
    }), n.memoizedState = a, n.childLanes = Hf(
      t,
      c,
      e
    ), l.memoizedState = jf, ka(t.child, n)) : (we(l), e = t.child, t = e.sibling, e = ve(e, {
      mode: "visible",
      children: n.children
    }), e.return = l, e.sibling = null, t !== null && (c = l.deletions, c === null ? (l.deletions = [t], l.flags |= 16) : c.push(t)), l.child = e, l.memoizedState = null, e);
  }
  function Bf(t, l) {
    return l = pi(
      { mode: "visible", children: l },
      t.mode
    ), l.return = t, t.child = l;
  }
  function pi(t, l) {
    return t = fl(22, t, null, l), t.lanes = 0, t;
  }
  function Ti(t, l, e) {
    return En(l, t.child, null, e), t = Bf(
      l,
      l.pendingProps.children
    ), t.flags |= 2, l.memoizedState = null, t;
  }
  function Pv(t, l, e, n, a, u, c, o) {
    if (e)
      return l.flags & 256 ? (we(l), l.flags &= -257, Ti(
        t,
        l,
        o
      )) : l.memoizedState !== null ? (Ke(), l.child = t.child, l.flags |= 128, null) : (Ke(), u = a.fallback, c = l.mode, a = pi(
        { mode: "visible", children: a.children },
        c
      ), u = yn(
        u,
        c,
        o,
        null
      ), u.flags |= 2, a.return = l, u.return = l, a.sibling = u, l.child = a, En(l, t.child, null, o), a = l.child, a.memoizedState = Uf(o), a.childLanes = Hf(
        t,
        n,
        o
      ), l.memoizedState = jf, ka(null, a));
    if (we(l), Ho(u)) {
      if (n = u.nextSibling && u.nextSibling.dataset, n) var d = n.dgst;
      return n = d, n !== "" && (a = Error(r(419)), a.stack = "", a.digest = n, Ga({ value: a, source: null, stack: null })), Ti(
        t,
        l,
        o
      );
    }
    if (Ht || hn(t, l, o, !1), n = (o & t.childLanes) !== 0, Ht || n) {
      if (Ze.current !== null)
        return Ti(
          t,
          l,
          o
        );
      if (n = pt, n !== null && (a = gr(
        n,
        o
      ), a !== 0 && a !== c.retryLane))
        throw c.retryLane = a, dn(t, a), dl(n, t, a), Rf;
      return Uo(u) || Li(), Ti(
        t,
        l,
        o
      );
    }
    return Uo(u) ? (l.flags |= 192, l.child = t.child, null) : (t = c.treeContext, Et = Bl(u.nextSibling), Gt = l, P = !0, Ye = null, Ul = !1, t !== null && gs(l, t), l = Bf(
      l,
      a.children
    ), l.flags |= 134221824, l);
  }
  function Bd(t, l, e) {
    t.lanes |= l;
    var n = t.alternate;
    n !== null && (n.lanes |= l), Pu(t.return, l, e);
  }
  function Yd(t) {
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
  function Yf(t) {
    var l = t.child;
    for (t.child = null; l !== null; ) {
      var e = l.sibling;
      l.sibling = t.child, t.child = l, l = e;
    }
  }
  function qf(t, l, e) {
    var n = l.pendingProps, a = n.revealOrder, u = n.tail;
    n = n.children;
    var c = Kt.current;
    if (l.flags & 128)
      return $a(l, c), null;
    var o = (c & 2) !== 0;
    if (o ? (c = c & 1 | 2, l.flags |= 128) : c &= 1, $a(l, c), a === "backwards" && t !== null ? (Yf(t), qt(t, l, n, e), Yf(t)) : qt(t, l, n, e), n = P ? La : 0, !o && t !== null && (t.flags & 128) !== 0)
      t: for (t = l.child; t !== null; ) {
        if (t.tag === 13)
          t.memoizedState !== null && Bd(t, e, l);
        else if (t.tag === 19)
          Bd(t, e, l);
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
        e = Yd(l.child), e === null ? (a = l.child, l.child = null) : (a = e.sibling, e.sibling = null, Yf(l)), Ei(
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
        e = Yd(l.child), e === null ? (a = l.child, l.child = null) : (a = e.sibling, e.sibling = null), Ei(
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
  function qd(t, l, e) {
    var n = l.pendingProps;
    return Le(l, l.type, n.value), qt(t, l, n.children, e), l.child;
  }
  function Te(t, l, e) {
    if (t !== null && (l.dependencies = t.dependencies), Fe |= l.lanes, (e & l.childLanes) === 0)
      if (t !== null) {
        if (hn(
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
  function Lf(t, l) {
    return (t.lanes & l) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && ti(t)));
  }
  function th(t, l, e) {
    switch (l.tag) {
      case 3:
        Ou(l, l.stateNode.containerInfo), Le(l, jt, t.memoizedState.cache), mn();
        break;
      case 27:
      case 5:
        sc(l);
        break;
      case 4:
        Ou(l, l.stateNode.containerInfo);
        break;
      case 10:
        Le(
          l,
          l.type,
          l.memoizedProps.value
        );
        break;
      case 31:
        if (l.memoizedState !== null)
          return l.flags |= 128, rf(l), null;
        break;
      case 13:
        var n = l.memoizedState;
        if (n !== null) {
          if (n.dehydrated !== null)
            return we(l), l.flags |= 128, null;
          n = hn(
            t,
            l,
            e,
            !1
          );
          var a = l.child.childLanes;
          return n || (e & a) !== 0 ? Hd(t, l, e) : (we(l), t = Te(
            t,
            l,
            e
          ), t !== null ? t.sibling : null);
        }
        we(l);
        break;
      case 19:
        if (l.flags & 128)
          return qf(
            t,
            l,
            e
          );
        if (a = (t.flags & 128) !== 0, n = (e & l.childLanes) !== 0, n || (hn(
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
        if (a = l.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), $a(l, Kt.current), n) break;
        return null;
      case 22:
        return l.lanes = 0, Md(
          t,
          l,
          e,
          l.pendingProps
        );
      case 24:
        Le(l, jt, t.memoizedState.cache);
    }
    return Te(t, l, e);
  }
  function Ld(t, l, e) {
    if (t !== null)
      if (t.memoizedProps !== l.pendingProps)
        Ht = !0;
      else {
        if (!Lf(t, e) && (l.flags & 128) === 0)
          return Ht = !1, th(
            t,
            l,
            e
          );
        Ht = (t.flags & 131072) !== 0;
      }
    else
      Ht = !1, P && (l.flags & 1048576) !== 0 && hs(l, La, l.index);
    switch (l.lanes = 0, l.tag) {
      case 16:
        t: {
          var n = l.pendingProps;
          if (t = pn(l.elementType), l.type = t, typeof t == "function")
            wc(t) ? (n = Nn(t, n), l.tag = 1, l = jd(
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
                l.tag = 11, l = xd(
                  null,
                  l,
                  t,
                  n,
                  e
                );
                break t;
              } else if (a === mt) {
                l.tag = 14, l = Od(
                  null,
                  l,
                  t,
                  n,
                  e
                );
                break t;
              } else if (a === Dt) {
                l.tag = 10, l.type = t, l = qd(
                  null,
                  l,
                  e
                );
                break t;
              }
            }
            throw l = F(t) || t, Error(r(306, l, ""));
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
        ), jd(
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
          a = u.element, af(t, l), Ja(l, n, null, e);
          var c = l.memoizedState;
          if (n = c.cache, Le(l, jt, n), n !== u.cache && kc(
            l,
            [jt],
            e,
            !0
          ), Ka(), n = c.element, u.isDehydrated)
            if (u = {
              element: n,
              isDehydrated: !1,
              cache: c.cache
            }, l.updateQueue.baseState = u, l.memoizedState = u, l.flags & 256) {
              l = Ud(
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
              ), Ga(a), l = Ud(
                t,
                l,
                n,
                e
              );
              break t;
            } else
              for (t = l.stateNode.containerInfo, t.nodeType === 9 ? t = t.body : t = t.nodeName === "HTML" ? t.ownerDocument.body : t, Et = Bl(t.firstChild), Gt = l, P = !0, Ye = null, Ul = !0, e = Ms(
                l,
                null,
                n,
                e
              ), l.child = e; e; )
                e.flags = e.flags & -3 | 134221824, e = e.sibling;
          else {
            if (mn(), n === a) {
              l = Te(
                t,
                l,
                e
              );
              break t;
            }
            qt(t, l, n, e);
          }
          l = l.child;
        }
        return l;
      case 26:
        return Pn(t, l), t === null ? (e = r0(
          l.type,
          null,
          l.pendingProps,
          null
        )) ? l.memoizedState = e : P || (l.stateNode = Vy(
          l.type,
          l.pendingProps,
          Re.current,
          l
        )) : l.memoizedState = r0(
          l.type,
          t.memoizedProps,
          l.pendingProps,
          t.memoizedState
        ), null;
      case 27:
        return sc(l), t === null && P && (n = l.stateNode = i0(
          l.type,
          l.pendingProps,
          Re.current
        ), Gt = l, Ul = !0, a = Et, tn(l.type) ? (Bo = a, Et = Bl(n.firstChild)) : Et = a), qt(
          t,
          l,
          l.pendingProps.children,
          e
        ), Pn(t, l), t === null && (l.flags |= 4194304), l.child;
      case 5:
        return t === null && P && ((a = n = Et) && (n = $h(
          n,
          l.type,
          l.pendingProps,
          Ul
        ), n !== null ? (l.stateNode = n, Gt = l, Et = Bl(n.firstChild), Ul = !1, a = !0) : a = !1), a || qe(l)), sc(l), a = l.type, u = l.pendingProps, c = t !== null ? t.memoizedProps : null, n = u.children, Oo(a, u) ? n = null : c !== null && Oo(a, c) && (l.flags |= 32), l.memoizedState !== null && (a = yf(
          t,
          l,
          Vv,
          null,
          null,
          e
        ), ga._currentValue = a), Pn(t, l), qt(t, l, n, e), l.child;
      case 6:
        return t === null && P && ((t = e = Et) && (e = Wh(
          e,
          l.pendingProps,
          Ul
        ), e !== null ? (l.stateNode = e, Gt = l, Et = null, t = !0) : t = !1), t || qe(l)), null;
      case 13:
        return Hd(t, l, e);
      case 4:
        return Ou(
          l,
          l.stateNode.containerInfo
        ), n = l.pendingProps, t === null ? l.child = En(
          l,
          null,
          n,
          e
        ) : qt(t, l, n, e), l.child;
      case 11:
        return xd(
          t,
          l,
          l.type,
          l.pendingProps,
          e
        );
      case 7:
        return n = l.pendingProps, Pn(t, l), qt(t, l, n, e), l.child;
      case 8:
        return qt(
          t,
          l,
          l.pendingProps.children,
          e
        ), l.child;
      case 12:
        return qt(
          t,
          l,
          l.pendingProps.children,
          e
        ), l.child;
      case 10:
        return qd(t, l, e);
      case 9:
        return a = l.type._context, n = l.pendingProps.children, gn(l), a = Zt(a), n = n(a), l.flags |= 1, qt(t, l, n, e), l.child;
      case 14:
        return Od(
          t,
          l,
          l.type,
          l.pendingProps,
          e
        );
      case 15:
        return _d(
          t,
          l,
          l.type,
          l.pendingProps,
          e
        );
      case 19:
        return qf(t, l, e);
      case 31:
        return kv(t, l, e);
      case 22:
        return Md(
          t,
          l,
          e,
          l.pendingProps
        );
      case 24:
        return gn(l), n = Zt(jt), t === null ? (a = lf(), a === null && (a = pt, u = Pc(), a.pooledCache = u, u.refCount++, u !== null && (a.pooledCacheLanes |= e), a = u), l.memoizedState = { parent: n, cache: a }, nf(l), Le(l, jt, a)) : ((t.lanes & e) !== 0 && (af(t, l), Ja(l, null, null, e), Ka()), a = t.memoizedState, u = l.memoizedState, a.parent !== n ? (a = { parent: n, cache: n }, l.memoizedState = a, l.lanes === 0 && (l.memoizedState = l.updateQueue.baseState = a), Le(l, jt, n)) : (n = u.cache, Le(l, jt, n), n !== a.cache && kc(
          l,
          [jt],
          e,
          !0
        ))), qt(
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
        }), n = l.pendingProps, n.name != null && n.name !== "auto" ? l.flags |= t === null ? 18882560 : 18874368 : P && Iu(l), t !== null && t.memoizedProps.name !== n.name ? l.flags |= 4194816 : Pn(t, l), qt(t, l, n.children, e), l.child;
      case 29:
        throw l.pendingProps;
    }
    throw Error(r(156, l.tag));
  }
  function Ee(t) {
    t.flags |= 4;
  }
  function Gf(t, l, e, n, a) {
    var u;
    if ((u = (t.mode & 32) !== 0) && (u = e === null ? m0(l, n) : m0(l, n) && (n.src !== e.src || n.srcSet !== e.srcSet)), u) {
      if (t.flags |= 16777216, (a & 335544128) === a)
        if (t.stateNode.complete) t.flags |= 8192;
        else if (py()) t.flags |= 8192;
        else
          throw Tn = ai, ef;
    } else t.flags &= -16777217;
  }
  function Gd(t, l) {
    if (l.type !== "stylesheet" || (l.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (t.flags |= 16777216, !v0(l))
      if (py()) t.flags |= 8192;
      else
        throw Tn = ai, ef;
  }
  function Ai(t, l) {
    l !== null && (t.flags |= 4), t.flags & 16384 && (l = t.tag !== 22 ? mr() : 536870912, t.lanes |= l, aa |= l);
  }
  function Pa(t, l) {
    if (!P)
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
  function At(t) {
    var l = t.alternate !== null && t.alternate.child === t.child, e = 0, n = 0;
    if (l)
      for (var a = t.child; a !== null; )
        e |= a.lanes | a.childLanes, n |= a.subtreeFlags & 1206910976, n |= a.flags & 1206910976, a.return = t, a = a.sibling;
    else
      for (a = t.child; a !== null; )
        e |= a.lanes | a.childLanes, n |= a.subtreeFlags, n |= a.flags, a.return = t, a = a.sibling;
    return t.subtreeFlags |= n, t.childLanes = e, l;
  }
  function lh(t, l, e) {
    var n = l.pendingProps;
    switch ($c(l), l.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return At(l), null;
      case 1:
        return At(l), null;
      case 3:
        return e = l.stateNode, n = null, t !== null && (n = t.memoizedState.cache), l.memoizedState.cache !== n && (l.flags |= 2048), Se(jt), Cn(), e.pendingContext && (e.context = e.pendingContext, e.pendingContext = null), (t === null || t.child === null) && (Kn(l) ? Ee(l) : t === null || t.memoizedState.isDehydrated && (l.flags & 256) === 0 || (l.flags |= 1024, Fc())), At(l), null;
      case 26:
        var a = l.type, u = l.memoizedState;
        return t === null ? (Ee(l), u !== null ? (At(l), Gd(l, u)) : (At(l), Gf(
          l,
          a,
          null,
          n,
          e
        ))) : u ? u !== t.memoizedState ? (Ee(l), At(l), Gd(l, u)) : (At(l), l.flags &= -16777217) : (t = t.memoizedProps, t !== n && Ee(l), At(l), Gf(
          l,
          a,
          t,
          n,
          e
        )), null;
      case 27:
        if (_u(l), e = Re.current, a = l.type, t !== null && l.stateNode != null)
          t.memoizedProps !== n && Ee(l);
        else {
          if (!n) {
            if (l.stateNode === null)
              throw Error(r(166));
            return At(l), l.subtreeFlags &= -33554433, null;
          }
          t = $l.current, Kn(l) ? Ss(l) : (t = i0(a, n, e), l.stateNode = t, Ee(l));
        }
        return At(l), l.subtreeFlags &= -33554433, null;
      case 5:
        if (_u(l), a = l.type, t !== null && l.stateNode != null)
          t.memoizedProps !== n && Ee(l);
        else {
          if (!n) {
            if (l.stateNode === null)
              throw Error(r(166));
            return At(l), l.subtreeFlags &= -33554433, null;
          }
          if (u = $l.current, Kn(l))
            Ss(l);
          else {
            var c = ru(
              Re.current
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
            u[Vt] = l, u[cl] = n;
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
            t: switch ($t(u, a, n), a) {
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
            n && Ee(l);
          }
        }
        return At(l), l.subtreeFlags &= -33554433, Gf(
          l,
          l.type,
          t === null ? null : t.memoizedProps,
          l.pendingProps,
          e
        ), null;
      case 6:
        if (t && l.stateNode != null)
          t.memoizedProps !== n && Ee(l);
        else {
          if (typeof n != "string" && l.stateNode === null)
            throw Error(r(166));
          if (t = Re.current, Kn(l)) {
            if (t = l.stateNode, e = l.memoizedProps, n = null, a = Gt, a !== null)
              switch (a.tag) {
                case 27:
                case 5:
                  n = a.memoizedProps;
              }
            t[Vt] = l, t = !!(t.nodeValue === e || n !== null && n.suppressHydrationWarning === !0 || Ly(t.nodeValue, e)), t || qe(l, !0);
          } else
            t = ru(t).createTextNode(
              n
            ), t[Vt] = l, l.stateNode = t;
        }
        return At(l), null;
      case 31:
        if (e = l.memoizedState, t === null || t.memoizedState !== null) {
          if (n = Kn(l), e !== null) {
            if (t === null) {
              if (!n) throw Error(r(318));
              if (t = l.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(557));
              t[Vt] = l;
            } else
              mn(), (l.flags & 128) === 0 && (l.memoizedState = null), l.flags |= 4;
            At(l), t = !1;
          } else
            e = Fc(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = e), t = !0;
          if (!t)
            return l.flags & 256 ? (bl(l), l) : (bl(l), null);
          if ((l.flags & 128) !== 0)
            throw Error(r(558));
        }
        return At(l), null;
      case 13:
        if (n = l.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (a = Kn(l), n !== null && n.dehydrated !== null) {
            if (t === null) {
              if (!a) throw Error(r(318));
              if (a = l.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(r(317));
              a[Vt] = l;
            } else
              mn(), (l.flags & 128) === 0 && (l.memoizedState = null), l.flags |= 4;
            At(l), a = !1;
          } else
            a = Fc(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = a), a = !0;
          if (!a)
            return l.flags & 256 ? (bl(l), l) : (bl(l), null);
        }
        return bl(l), (l.flags & 128) !== 0 ? (l.lanes = e, l) : (e = n !== null, t = t !== null && t.memoizedState !== null, e && (n = l.child, a = null, n.alternate !== null && n.alternate.memoizedState !== null && n.alternate.memoizedState.cachePool !== null && (a = n.alternate.memoizedState.cachePool.pool), u = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (u = n.memoizedState.cachePool.pool), u !== a && (n.flags |= 2048)), e !== t && e && (l.child.flags |= 8192), Ai(l, l.updateQueue), At(l), null);
      case 4:
        return Cn(), t === null && Eo(l.stateNode.containerInfo), l.flags |= 67108864, At(l), null;
      case 10:
        return Se(l.type), At(l), null;
      case 19:
        if (sf(l), n = l.memoizedState, n === null) return At(l), null;
        if (a = (l.flags & 128) !== 0, u = n.rendering, u === null)
          if (a) Pa(n, !1);
          else {
            if (Mt !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = l.child; t !== null; ) {
                if (u = fi(t), u !== null) {
                  for (l.flags |= 128, Pa(n, !1), t = u.updateQueue, l.updateQueue = t, Ai(l, t), l.subtreeFlags = 0, t = e, e = l.child; e !== null; )
                    ys(e, t), e = e.sibling;
                  return $a(
                    l,
                    Kt.current & 1 | 2
                  ), P && he(l, n.treeForkCount), l.child;
                }
                t = t.sibling;
              }
            n.tail !== null && ml() > Hi && (l.flags |= 128, a = !0, Pa(n, !1), l.lanes = 4194304);
          }
        else {
          if (!a)
            if (t = fi(u), t !== null) {
              if (l.flags |= 128, a = !0, t = t.updateQueue, l.updateQueue = t, Ai(l, t), Pa(n, !0), n.tail === null && n.tailMode !== "collapsed" && n.tailMode !== "visible" && !u.alternate && !P)
                return At(l), null;
            } else
              2 * ml() - n.renderingStartTime > Hi && e !== 536870912 && (l.flags |= 128, a = !0, Pa(n, !1), l.lanes = 4194304);
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
          return n.rendering = t, n.tail = t.sibling, n.renderingStartTime = ml(), t.sibling = null, u = Kt.current, u = a ? u & 1 | 2 : u & 1, n.tailMode === "visible" || n.tailMode === "collapsed" || !e || P ? $a(l, u) : (e = u, St(wt, l), St(Kt, e), It === null && (It = l)), P && he(l, n.treeForkCount), t;
        }
        return At(l), null;
      case 22:
      case 23:
        return bl(l), of(), n = l.memoizedState !== null, t !== null ? t.memoizedState !== null !== n && (l.flags |= 8192) : n && (l.flags |= 8192), n ? (e & 536870912) !== 0 && (l.flags & 128) === 0 && (At(l), l.subtreeFlags & 6 && (l.flags |= 8192)) : At(l), e = l.updateQueue, e !== null && Ai(l, e.retryQueue), e = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), n = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (n = l.memoizedState.cachePool.pool), n !== e && (l.flags |= 2048), t !== null && Yt(bn), null;
      case 24:
        return e = null, t !== null && (e = t.memoizedState.cache), l.memoizedState.cache !== e && (l.flags |= 2048), Se(jt), At(l), null;
      case 25:
        return null;
      case 30:
        return l.flags |= 33554432, At(l), null;
    }
    throw Error(r(156, l.tag));
  }
  function eh(t, l) {
    switch ($c(l), l.tag) {
      case 1:
        return t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
      case 3:
        return Se(jt), Cn(), t = l.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (l.flags = t & -65537 | 128, l) : null;
      case 26:
      case 27:
      case 5:
        return _u(l), null;
      case 31:
        if (l.memoizedState !== null) {
          if (bl(l), l.alternate === null)
            throw Error(r(340));
          mn();
        }
        return t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
      case 13:
        if (bl(l), t = l.memoizedState, t !== null && t.dehydrated !== null) {
          if (l.alternate === null)
            throw Error(r(340));
          mn();
        }
        return t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
      case 19:
        return sf(l), t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, t = l.memoizedState, t !== null && (t.rendering = null, t.tail = null), l.flags |= 4, l) : null;
      case 4:
        return Cn(), null;
      case 10:
        return Se(l.type), null;
      case 22:
      case 23:
        return bl(l), of(), t !== null && Yt(bn), t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
      case 24:
        return Se(jt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Xd(t, l) {
    switch ($c(l), l.tag) {
      case 3:
        Se(jt), Cn();
        break;
      case 26:
      case 27:
      case 5:
        _u(l);
        break;
      case 4:
        Cn();
        break;
      case 31:
        l.memoizedState !== null && bl(l);
        break;
      case 13:
        bl(l);
        break;
      case 19:
        sf(l);
        break;
      case 10:
        Se(l.type);
        break;
      case 22:
      case 23:
        bl(l), of(), t !== null && Yt(bn);
        break;
      case 24:
        Se(jt);
    }
  }
  function tu(t, l) {
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
      ht(l, l.return, o);
    }
  }
  function Je(t, l, e) {
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
              } catch (A) {
                ht(
                  a,
                  d,
                  A
                );
              }
            }
          }
          n = n.next;
        } while (n !== u);
      }
    } catch (A) {
      ht(l, l.return, A);
    }
  }
  function Qd(t) {
    var l = t.updateQueue;
    if (l !== null) {
      var e = t.stateNode;
      try {
        Rs(l, e);
      } catch (n) {
        ht(t, t.return, n);
      }
    }
  }
  function Vd(t, l, e) {
    e.props = Nn(
      t.type,
      t.memoizedProps
    ), e.state = t.memoizedState;
    try {
      e.componentWillUnmount();
    } catch (n) {
      ht(t, l, n);
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
            var a = t.stateNode, u = ye(t.memoizedProps, a);
            (a.ref === null || a.ref.name !== u) && (a.ref = Fy(u)), n = a.ref;
            break;
          case 7:
            if (t.stateNode === null) {
              var c = new Nl(t);
              p(
                t.child,
                !1,
                Kh,
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
      ht(t, l, o);
    }
  }
  function Jt(t, l) {
    var e = t.ref, n = t.refCleanup;
    if (e !== null)
      if (typeof n == "function")
        try {
          n();
        } catch (a) {
          ht(t, l, a);
        } finally {
          t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
        }
      else if (typeof e == "function")
        try {
          e(null);
        } catch (a) {
          ht(t, l, a);
        }
      else e.current = null;
  }
  function Ni(t, l) {
    if ((t.tag === 5 || t.tag === 27 || t.tag === 6) && t.alternate === null && l !== null)
      for (var e = 0; e < l.length; e++)
        e0(
          t.stateNode,
          l[e]
        );
  }
  function Zd(t) {
    for (var l = t.return; l !== null && (Qf(l) && e0(t.stateNode, l.stateNode), !Xf(l)); )
      l = l.return;
  }
  function lu(t) {
    for (var l = t.return; l !== null && (Qf(l) && Jh(t.stateNode, l.stateNode), !Xf(l)); )
      l = l.return;
  }
  function Xf(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 27;
  }
  function Qf(t) {
    return t && t.tag === 7 && t.stateNode !== null;
  }
  function Vf(t) {
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
      ht(t, t.return, a);
    }
  }
  function Zf(t, l, e) {
    try {
      var n = t.stateNode;
      _h(n, t.type, e, l), n[cl] = l;
    } catch (a) {
      ht(t, t.return, a);
    }
  }
  function wd(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && tn(t.type) || t.tag === 4;
  }
  function wf(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || wd(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && tn(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Kf(t, l, e, n) {
    var a = t.tag;
    if (a === 5 || a === 6)
      a = t.stateNode, l ? (e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e).insertBefore(a, l) : (l = e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, l.appendChild(a), e = e._reactRootContainer, e != null || l.onclick !== null || (l.onclick = Wl)), Ni(t, n), st = !0;
    else if (a !== 4 && (a === 27 && (Ni(t, n), n = null, tn(t.type) && (e = t.stateNode, l = null)), t = t.child, t !== null))
      for (Kf(
        t,
        l,
        e,
        n
      ), t = t.sibling; t !== null; )
        Kf(
          t,
          l,
          e,
          n
        ), t = t.sibling;
  }
  function zi(t, l, e, n) {
    var a = t.tag;
    if (a === 5 || a === 6)
      a = t.stateNode, l ? e.insertBefore(a, l) : e.appendChild(a), Ni(t, n), st = !0;
    else if (a !== 4 && (a === 27 && (Ni(t, n), n = null, tn(t.type) && (e = t.stateNode)), t = t.child, t !== null))
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
  function Kd(t) {
    var l = t.stateNode, e = t.memoizedProps;
    try {
      for (var n = t.type, a = l.attributes; a.length; )
        l.removeAttributeNode(a[0]);
      $t(l, n, e), l[Vt] = t, l[cl] = e;
    } catch (u) {
      ht(t, t.return, u);
    }
  }
  var xi = !1, pl = null;
  function Jd(t) {
    (t.tag === 30 || (t.subtreeFlags & 33554432) !== 0) && (xi = !0);
  }
  var Pl = null;
  function $d() {
    var t = Pl;
    return Pl = null, t;
  }
  var ol = 0;
  function ta(t, l, e, n, a) {
    return ol = 0, Wd(
      t.child,
      l,
      e,
      n,
      a
    );
  }
  function Wd(t, l, e, n, a) {
    for (var u = !1; t !== null; ) {
      if (t.tag === 5) {
        var c = t.stateNode;
        if (n !== null) {
          var o = Co(c);
          n.push(o), o.view && (u = !0);
        } else
          u || Co(c).view && (u = !0);
        xi = !0, $y(
          c,
          ol === 0 ? l : l + "_" + ol,
          e
        ), ol++;
      } else (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && a || Wd(
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
      t.tag === 5 ? Wy(t.stateNode, t.memoizedProps) : (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && l || te(
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
          l = me(l.default, l.share), l !== "none" && (ta(
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
  function Jf(t, l) {
    if (t.tag === 30) {
      var e = t.stateNode, n = t.memoizedProps, a = ye(n, e), u = me(
        n.default,
        e.paired ? n.share : n.enter
      );
      u !== "none" ? ta(t, a, u, null, !1) ? (Oi(t), e.paired || l || fa(t, n.onEnter)) : te(t.child, !1) : Oi(t);
    } else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null; )
        Jf(t, l), t = t.sibling;
    else Oi(t);
  }
  function $f(t) {
    if (pl !== null && pl.size !== 0) {
      var l = pl;
      if ((t.subtreeFlags & 18874368) !== 0)
        for (t = t.child; t !== null; ) {
          if (t.tag !== 22 || t.memoizedState === null) {
            if (t.tag === 30 && (t.flags & 18874368) !== 0) {
              var e = t.memoizedProps, n = e.name;
              if (n != null && n !== "auto") {
                var a = l.get(n);
                if (a !== void 0) {
                  var u = me(
                    e.default,
                    e.share
                  );
                  if (u !== "none" && (ta(
                    t,
                    n,
                    u,
                    null,
                    !1
                  ) ? (u = t.stateNode, a.paired = u, u.paired = a, fa(t, e.onShare)) : te(t.child, !1)), l.delete(n), l.size === 0) break;
                }
              }
            }
            $f(t);
          }
          t = t.sibling;
        }
    }
  }
  function Wf(t) {
    if (t.tag === 30) {
      var l = t.memoizedProps, e = ye(l, t.stateNode), n = pl !== null ? pl.get(e) : void 0, a = me(
        l.default,
        n !== void 0 ? l.share : l.exit
      );
      a !== "none" && (ta(t, e, a, null, !1) ? n !== void 0 ? (a = t.stateNode, n.paired = a, a.paired = n, pl.delete(e), fa(t, l.onShare)) : fa(t, l.onExit) : te(t.child, !1)), pl !== null && $f(t);
    } else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null; )
        Wf(t), t = t.sibling;
    else
      pl !== null && $f(t);
  }
  function Fd(t) {
    for (t = t.child; t !== null; ) {
      if (t.tag === 30) {
        var l = t.memoizedProps, e = ye(l, t.stateNode);
        l = me(l.default, l.update), t.flags &= -5, l !== "none" && ta(
          t,
          e,
          l,
          t.memoizedState = [],
          !1
        );
      } else
        (t.subtreeFlags & 33554432) !== 0 && Fd(t);
      t = t.sibling;
    }
  }
  function Ff(t) {
    if ((t.subtreeFlags & 18874368) !== 0)
      for (t = t.child; t !== null; ) {
        if (t.tag !== 22 || t.memoizedState === null) {
          if (t.tag === 30 && (t.flags & 18874368) !== 0) {
            var l = t.stateNode;
            l.paired !== null && (l.paired = null, te(t.child, !1));
          }
          Ff(t);
        }
        t = t.sibling;
      }
  }
  function _i(t) {
    if (t.tag === 30)
      t.stateNode.paired = null, te(t.child, !1), Ff(t);
    else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null; )
        _i(t), t = t.sibling;
    else Ff(t);
  }
  function Id(t) {
    for (t = t.child; t !== null; )
      t.tag === 30 ? te(t.child, !1) : (t.subtreeFlags & 33554432) !== 0 && Id(t), t = t.sibling;
  }
  function If(t, l, e, n, a, u, c) {
    for (var o = !1; l !== null; ) {
      if (l.tag === 5) {
        var d = l.stateNode;
        if (u !== null && ol < u.length) {
          var S = u[ol], A = Co(d);
          (S.view || A.view) && (o = !0);
          var z;
          if (z = (t.flags & 4) === 0)
            if (A.clip) z = !0;
            else {
              z = S.rect;
              var v = A.rect;
              z = z.y !== v.y || z.x !== v.x || z.height !== v.height || z.width !== v.width;
            }
          z && (t.flags |= 4), A.abs ? A = !S.abs : (S = S.rect, A = A.rect, A = S.height !== A.height || S.width !== A.width), A && (t.flags |= 32);
        } else t.flags |= 32;
        (t.flags & 4) !== 0 && $y(
          d,
          ol === 0 ? e : e + "_" + ol,
          a
        ), o && (t.flags & 4) !== 0 || (Pl === null && (Pl = []), Pl.push(
          d,
          ol === 0 ? n : n + "_" + ol,
          l.memoizedProps
        )), ol++;
      } else (l.tag !== 22 || l.memoizedState === null) && (l.tag === 30 && c ? t.flags |= l.flags & 32 : If(
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
  function kd(t, l) {
    for (t = t.child; t !== null; ) {
      if (t.tag === 30) {
        var e = t.memoizedProps, n = t.stateNode, a = ye(e, n), u = me(e.default, e.update), c;
        c = t.memoizedState, t.memoizedState = null, n = t;
        var o = t.child;
        ol = 0, a = If(
          n,
          o,
          a,
          a,
          u,
          c,
          !1
        ), (t.flags & 4) !== 0 && a && fa(t, e.onUpdate);
      } else
        (t.subtreeFlags & 33554432) !== 0 && kd(t);
      t = t.sibling;
    }
  }
  var Xt = !1, yt = !1, le = !1, kf = !1, Pd = typeof WeakSet == "function" ? WeakSet : Set, Qt = null, ee = !1, eu = !1, Mi = !1, Pf = !1;
  function nh(t, l, e) {
    if (t = t.containerInfo, zo = Sa, t = ns(t), qc(t)) {
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
            var o = 0, d = -1, S = -1, A = 0, z = 0, v = t, T = null;
            l: for (; ; ) {
              for (var C; v !== n || u !== 0 && v.nodeType !== 3 || (d = o + u), v !== c || a !== 0 && v.nodeType !== 3 || (S = o + a), v.nodeType === 3 && (o += v.nodeValue.length), (C = v.firstChild) !== null; )
                T = v, v = C;
              for (; ; ) {
                if (v === t) break l;
                if (T === n && ++A === u && (d = o), T === c && ++z === a && (S = o), (C = v.nextSibling) !== null) break;
                v = T, T = v.parentNode;
              }
              v = C;
            }
            n = d === -1 || S === -1 ? null : { start: d, end: S };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (xo = { focusedElem: t, selectionRange: n }, Sa = !1, e = (e & 335544064) === e, Qt = l, l = e ? 9270 : 1024; Qt !== null; ) {
      if (t = Qt, e && (n = t.deletions, n !== null))
        for (u = 0; u < n.length; u++)
          e && Wf(n[u]);
      if (t.alternate === null && (t.flags & 2) !== 0)
        e && Jd(t), Ci(e);
      else {
        if (t.tag === 22) {
          if (n = t.alternate, t.memoizedState !== null) {
            n !== null && n.memoizedState === null && e && Wf(n), Ci(e);
            continue;
          } else if (n !== null && n.memoizedState !== null) {
            e && Jd(t), Ci(e);
            continue;
          }
        }
        n = t.child, (t.subtreeFlags & l) !== 0 && n !== null ? (n.return = t, Qt = n) : (e && Fd(t), Ci(e));
      }
    }
    pl = null;
  }
  function Ci(t) {
    for (; Qt !== null; ) {
      var l = Qt, e = t, n = l.alternate, a = l.flags;
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
              ht(l, l.return, o);
            }
          }
          break;
        case 3:
          if ((a & 1024) !== 0) {
            if (n = l.stateNode.containerInfo, e = n.nodeType, e === 9)
              jo(n);
            else if (e === 1)
              switch (n.nodeName) {
                case "HEAD":
                case "HTML":
                case "BODY":
                  jo(n);
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
          e && n !== null && (e = ye(
            n.memoizedProps,
            n.stateNode
          ), a = l.memoizedProps, a = me(a.default, a.update), a !== "none" && ta(
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
        n.return = l.return, Qt = n;
        break;
      }
      Qt = l.return;
    }
  }
  function ty(t, l, e) {
    var n = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        ne(t, e), n & 4 && tu(5, e);
        break;
      case 1:
        if (ne(t, e), n & 4)
          if (t = e.stateNode, l === null)
            try {
              t.componentDidMount();
            } catch (c) {
              ht(e, e.return, c);
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
              ht(
                e,
                e.return,
                c
              );
            }
          }
        n & 64 && Qd(e), n & 512 && kl(e, e.return);
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
            Rs(t, l);
          } catch (c) {
            ht(e, e.return, c);
          }
        }
        break;
      case 27:
        l === null && n & 4 && Kd(e);
      case 26:
      case 5:
        ne(t, e), l === null && n & 4 && Vf(e), n & 512 && kl(e, e.return);
        break;
      case 12:
        ne(t, e);
        break;
      case 31:
        ne(t, e), n & 4 && ay(t, e);
        break;
      case 13:
        ne(t, e), n & 4 && uy(t, e), n & 64 && (t = e.memoizedState, t !== null && (t = t.dehydrated, t !== null && (e = vh.bind(
          null,
          e
        ), Fh(t, e))));
        break;
      case 22:
        if (n = e.memoizedState !== null || Xt, !n) {
          var u = l !== null && l.memoizedState !== null || yt;
          l = Xt, a = yt, Xt = n, (yt = u) && !a ? (n = 2, (e.subtreeFlags & 8772) !== 0 && (n |= 1), Ql(
            t,
            e,
            n
          )) : ne(t, e), Xt = l, yt = a;
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
  function to(t, l) {
    for (t = t.child; t !== null; )
      ly(t, l), t = t.sibling;
  }
  function ly(t, l) {
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
          ht(t, t.return, d);
        }
        lo(t, l);
        break;
      case 6:
        try {
          t.stateNode.nodeValue = l ? "" : t.memoizedProps, st = !0;
        } catch (d) {
          ht(t, t.return, d);
        }
        break;
      case 18:
        try {
          var o = t.stateNode;
          l ? Jy(o, !0) : Jy(t.stateNode, !1);
        } catch (d) {
          ht(t, t.return, d);
        }
        break;
      case 22:
      case 23:
        t.memoizedState === null && to(t, l);
        break;
      default:
        to(t, l);
    }
  }
  function lo(t, l) {
    if (t.subtreeFlags & 67108864)
      for (t = t.child; t !== null; ) {
        t: {
          var e = t, n = l;
          switch (e.tag) {
            case 4:
              ly(e, n);
              break t;
            case 22:
              e.memoizedState === null && lo(e, n);
              break t;
            default:
              lo(e, n);
          }
        }
        t = t.sibling;
      }
  }
  function ey(t) {
    var l = t.alternate;
    l !== null && (t.alternate = null, ey(l)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (l = t.stateNode, l !== null && Hu(l)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var zt = null, rl = !1;
  function Gl(t, l, e) {
    for (e = e.child; e !== null; )
      ny(t, l, e), e = e.sibling;
  }
  function ny(t, l, e) {
    if (vl && typeof vl.onCommitFiberUnmount == "function")
      try {
        vl.onCommitFiberUnmount(za, e);
      } catch {
      }
    switch (e.tag) {
      case 26:
        yt || Jt(e, l), Gl(
          t,
          l,
          e
        ), e.memoizedState ? e.memoizedState.count-- : e.stateNode && !yt && (e = e.stateNode, e.parentNode.removeChild(e));
        break;
      case 27:
        yt || Jt(e, l), lu(e);
        var n = zt, a = rl;
        tn(e.type) && (zt = e.stateNode, rl = !1), Gl(
          t,
          l,
          e
        ), c0(
          e.stateNode,
          e.type,
          e.memoizedProps
        ), zt = n, rl = a;
        break;
      case 5:
        yt || Jt(e, l), lu(e);
      case 6:
        if (e.tag === 6 && lu(e), n = zt, a = rl, zt = null, Gl(
          t,
          l,
          e
        ), zt = n, rl = a, zt !== null)
          if (rl)
            try {
              (zt.nodeType === 9 ? zt.body : zt.nodeName === "HTML" ? zt.ownerDocument.body : zt).removeChild(e.stateNode), st = !0;
            } catch (u) {
              ht(
                e,
                l,
                u
              );
            }
          else
            try {
              zt.removeChild(e.stateNode), st = !0;
            } catch (u) {
              ht(
                e,
                l,
                u
              );
            }
        break;
      case 18:
        zt !== null && (rl ? (t = zt, Ky(
          t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
          e.stateNode
        ), ba(t)) : Ky(zt, e.stateNode));
        break;
      case 4:
        n = zt, a = rl, zt = e.stateNode.containerInfo, rl = !0, Gl(
          t,
          l,
          e
        ), zt = n, rl = a;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Je(2, e, l), yt || Je(4, e, l), Gl(
          t,
          l,
          e
        );
        break;
      case 1:
        yt || (Jt(e, l), n = e.stateNode, typeof n.componentWillUnmount == "function" && Vd(
          e,
          l,
          n
        )), Gl(
          t,
          l,
          e
        );
        break;
      case 21:
        Gl(
          t,
          l,
          e
        );
        break;
      case 22:
        yt = (n = yt) || e.memoizedState !== null, Gl(
          t,
          l,
          e
        ), yt = n;
        break;
      case 30:
        Jt(e, l), Gl(
          t,
          l,
          e
        );
        break;
      case 7:
        yt || Jt(e, l), Gl(
          t,
          l,
          e
        );
        break;
      default:
        Gl(
          t,
          l,
          e
        );
    }
  }
  function ay(t, l) {
    if (l.memoizedState === null && (t = l.alternate, t !== null && (t = t.memoizedState, t !== null))) {
      t = t.dehydrated;
      try {
        ba(t);
      } catch (e) {
        ht(l, l.return, e);
      }
    }
  }
  function uy(t, l) {
    if (l.memoizedState === null && (t = l.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
      try {
        ba(t);
      } catch (e) {
        ht(l, l.return, e);
      }
  }
  function ah(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var l = t.stateNode;
        return l === null && (l = t.stateNode = new Pd()), l;
      case 22:
        return t = t.stateNode, l = t._retryCache, l === null && (l = t._retryCache = new Pd()), l;
      default:
        throw Error(r(435, t.tag));
    }
  }
  function Ri(t, l) {
    var e = ah(t);
    l.forEach(function(n) {
      if (!e.has(n)) {
        e.add(n);
        var a = hh.bind(null, t, n);
        n.then(a, a);
      }
    });
  }
  function el(t, l, e) {
    var n = l.deletions;
    if (n !== null)
      for (var a = 0; a < n.length; a++) {
        var u = n[a], c = t, o = l, d = o;
        t: for (; d !== null; ) {
          switch (d.tag) {
            case 27:
              if (tn(d.type)) {
                zt = d.stateNode, rl = !1;
                break t;
              }
              break;
            case 5:
              zt = d.stateNode, rl = !1;
              break t;
            case 3:
            case 4:
              zt = d.stateNode.containerInfo, rl = !0;
              break t;
          }
          d = d.return;
        }
        if (zt === null) throw Error(r(160));
        ny(c, o, u), zt = null, rl = !1, c = u.alternate, c !== null && (c.return = null), u.return = null;
      }
    if (l.subtreeFlags & 13886)
      for (l = l.child; l !== null; )
        iy(l, t, e), l = l.sibling;
  }
  var Xl = null;
  function iy(t, l, e) {
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
        el(l, t, e), nl(t), a & 4 && (Je(3, t, t.return), tu(3, t), Je(5, t, t.return));
        break;
      case 1:
        el(l, t, e), nl(t), a & 512 && (yt || n === null || Jt(n, n.return)), a & 64 && Xt && (t = t.updateQueue, t !== null && (l = t.callbacks, l !== null && (e = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = e === null ? l : e.concat(l))));
        break;
      case 26:
        if (u = Xl, el(l, t, e), nl(t), a & 512 && (yt || n === null || Jt(n, n.return)), a & 4)
          if (a = n !== null ? n.memoizedState : null, e = t.memoizedState, n === null)
            if (e === null)
              if (t.stateNode === null)
                if (Xt)
                  t.stateNode = Vy(
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
                        n = a.getElementsByTagName("title")[0], (!n || n[_a] || n[Vt] || n.namespaceURI === "http://www.w3.org/2000/svg" || n.hasAttribute("itemprop")) && (n = a.createElement(l), a.head.insertBefore(
                          n,
                          a.querySelector("head > title")
                        )), $t(n, l, e), n[Vt] = t, Lt(n), l = n;
                        break t;
                      case "link":
                        if (u = y0(
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
                        n = a.createElement(l), $t(n, l, e), a.head.appendChild(n);
                        break;
                      case "meta":
                        if (u = y0(
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
                        n = a.createElement(l), $t(n, l, e), a.head.appendChild(n);
                        break;
                      default:
                        throw Error(r(468, l));
                    }
                    n[Vt] = t, Lt(n), l = n;
                  }
                  t.stateNode = l;
                }
              else
                Xt || Go(u, t.type, t.stateNode);
            else
              t.stateNode = d0(
                u,
                e,
                t.memoizedProps
              );
          else
            a !== e ? (a === null ? (l = n.stateNode, l === null || yt || l.parentNode.removeChild(l)) : a.count--, e === null ? Xt || Go(u, t.type, t.stateNode) : d0(u, e, t.memoizedProps)) : e === null && t.stateNode !== null && Zf(
              t,
              t.memoizedProps,
              n.memoizedProps
            );
        break;
      case 27:
        el(l, t, e), nl(t), a & 512 && (yt || n === null || Jt(n, n.return)), n !== null && a & 4 && Zf(
          t,
          t.memoizedProps,
          n.memoizedProps
        );
        break;
      case 5:
        if (u = le, le = !1, el(l, t, e), le = u, nl(t), a & 512 && (yt || n === null || Jt(n, n.return)), t.flags & 32) {
          l = t.stateNode;
          try {
            Bn(l, ""), st = !0;
          } catch (A) {
            ht(t, t.return, A);
          }
        }
        a & 4 && t.stateNode != null && (l = t.memoizedProps, Zf(
          t,
          l,
          n !== null ? n.memoizedProps : l
        )), a & 1024 && (kf = !0);
        break;
      case 6:
        if (el(l, t, e), nl(t), a & 4) {
          if (t.stateNode === null)
            throw Error(r(162));
          l = t.memoizedProps, e = t.stateNode;
          try {
            e.nodeValue = l, st = !0;
          } catch (A) {
            ht(t, t.return, A);
          }
        }
        break;
      case 3:
        if (st = !1, Ki = null, u = Xl, Xl = su(l.containerInfo), el(l, t, e), Xl = u, nl(t), a & 4 && n !== null && n.memoizedState.isDehydrated)
          try {
            ba(l.containerInfo);
          } catch (A) {
            ht(t, t.return, A);
          }
        kf && (kf = !1, cy(t)), st = !1;
        break;
      case 4:
        a = le, le = Xt, n = Or(), u = Xl, Xl = su(
          t.stateNode.containerInfo
        ), el(l, t, e), nl(t), Xl = u, st && eu && (Mi = !0), st = n, le = a;
        break;
      case 12:
        el(l, t, e), nl(t);
        break;
      case 31:
        el(l, t, e), nl(t), a & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, Ri(t, l)));
        break;
      case 13:
        el(l, t, e), nl(t), t.child.flags & 8192 && t.memoizedState !== null != (n !== null && n.memoizedState !== null) && (Ui = ml()), a & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, Ri(t, l)));
        break;
      case 22:
        u = t.memoizedState !== null, c = n !== null && n.memoizedState !== null;
        var o = Xt, d = yt, S = le;
        Xt = o || u, le = S || u, yt = d || c, el(l, t, e), yt = d, le = S, Xt = o, nl(t), a & 8192 && (l = t.stateNode, l._visibility = u ? l._visibility & -2 : l._visibility | 1, !u || n === null || c || Xt || yt || (l = c || yt, e = Xt, n = yt, Xt = u || Xt, yt = l, $e(t, 2), Xt = e, yt = n), !u && le || to(t, u)), a & 4 && (l = t.updateQueue, l !== null && (e = l.retryQueue, e !== null && (l.retryQueue = null, Ri(t, e))));
        break;
      case 19:
        el(l, t, e), nl(t), a & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, Ri(t, l)));
        break;
      case 30:
        a & 512 && (yt || n === null || Jt(n, n.return)), a = Or(), u = eu, c = (e & 335544064) === e, o = t.memoizedProps, eu = c && me(
          o.default,
          o.update
        ) !== "none", el(l, t, e), nl(t), c && n !== null && st && (t.flags |= 4), eu = u, st = a;
        break;
      case 21:
        break;
      case 7:
        a & 512 && (yt || n === null || Jt(n, n.return)), n && n.stateNode !== null && (n.stateNode._fragmentFiber = t);
      default:
        el(l, t, e), nl(t);
    }
  }
  function nl(t) {
    var l = t.flags;
    if (l & 2) {
      try {
        for (var e, n = t.return; n !== null; ) {
          if (wd(n)) {
            e = n;
            break;
          }
          n = n.return;
        }
        n = null;
        for (var a = t.return; a !== null; ) {
          if (Qf(a)) {
            var u = a.stateNode;
            n === null ? n = [u] : n.push(u);
          }
          if (Xf(a)) break;
          a = a.return;
        }
        var c = n;
        if (e == null) throw Error(r(160));
        switch (e.tag) {
          case 27:
            var o = e.stateNode, d = wf(t);
            zi(
              t,
              d,
              o,
              c
            );
            break;
          case 5:
            var S = e.stateNode;
            e.flags & 32 && (Bn(S, ""), e.flags &= -33);
            var A = wf(t);
            zi(
              t,
              A,
              S,
              c
            );
            break;
          case 3:
          case 4:
            var z = e.stateNode.containerInfo, v = wf(t);
            Kf(
              t,
              v,
              z,
              c
            );
            break;
          default:
            throw Error(r(161));
        }
      } catch (T) {
        ht(t, t.return, T);
      }
      t.flags &= -3;
    }
    l & 4096 && (t.flags &= -4097);
  }
  function cy(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var l = t;
        cy(l), l.tag === 5 && l.flags & 1024 && (l = l.stateNode, Sa = !0, l.reset(), Sa = !1), t = t.sibling;
      }
  }
  function la(t, l) {
    if (l.subtreeFlags & 9270)
      for (l = l.child; l !== null; )
        fy(l, t), l = l.sibling;
    else kd(l);
  }
  function fy(t, l) {
    var e = t.alternate;
    if (e === null) Jf(t, !1);
    else
      switch (t.tag) {
        case 3:
          if (Pf = ee = !1, $d(), la(l, t), !ee && !Mi) {
            if (t = Pl, t !== null)
              for (var n = 0; n < t.length; n += 3) {
                e = t[n];
                var a = t[n + 1];
                Wy(e, t[n + 2]), e = e.ownerDocument.documentElement, e !== null && e.animate(
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
            )), Pf = !0;
          }
          Pl = null;
          break;
        case 5:
          la(l, t);
          break;
        case 4:
          n = ee, ee = !1, la(l, t), ee && (Mi = !0), ee = n;
          break;
        case 22:
          t.memoizedState === null && (e.memoizedState !== null ? Jf(t, !1) : la(l, t));
          break;
        case 30:
          n = ee, a = $d(), ee = !1, la(l, t), ee && (t.flags |= 4);
          var u = t.memoizedProps, c = t.stateNode;
          l = ye(u, c), c = ye(e.memoizedProps, c);
          var o = me(u.default, u.update);
          o === "none" ? l = !1 : (u = e.memoizedState, e.memoizedState = null, e = t.child, ol = 0, l = If(
            t,
            e,
            l,
            c,
            o,
            u,
            !0
          ), ol !== (u === null ? 0 : u.length) && (t.flags |= 32)), (t.flags & 4) !== 0 && l ? (fa(
            t,
            t.memoizedProps.onUpdate
          ), Pl = a) : a !== null && (a.push.apply(a, Pl), Pl = a), ee = (t.flags & 32) !== 0 ? !0 : n;
          break;
        default:
          la(l, t);
      }
  }
  function ne(t, l) {
    if (l.subtreeFlags & 8772)
      for (l = l.child; l !== null; )
        ty(t, l.alternate, l), l = l.sibling;
  }
  function $e(t, l) {
    for (t = t.child; t !== null; ) {
      var e = t, n = l;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Je(4, e, e.return), $e(
            e,
            n
          );
          break;
        case 1:
          Jt(e, e.return);
          var a = e.stateNode;
          typeof a.componentWillUnmount == "function" && Vd(
            e,
            e.return,
            a
          ), $e(
            e,
            n
          );
          break;
        case 27:
          (n & 2) !== 0 && c0(
            e.stateNode,
            e.type,
            e.memoizedProps
          );
        case 5:
          Jt(e, e.return), e.tag !== 5 && e.tag !== 27 || lu(e), $e(
            e,
            n
          );
          break;
        case 6:
          lu(e);
          break;
        case 26:
          Jt(e, e.return), a = e.stateNode, e.memoizedState !== null || a === null || yt || a.parentNode.removeChild(a), $e(
            e,
            n
          );
          break;
        case 22:
          e.memoizedState === null && $e(
            e,
            n
          );
          break;
        case 30:
          Jt(e, e.return), $e(
            e,
            n
          );
          break;
        case 7:
          Jt(e, e.return);
        default:
          $e(
            e,
            n
          );
      }
      t = t.sibling;
    }
  }
  function Ql(t, l, e) {
    for (e = (l.subtreeFlags & 8772) !== 0 ? e : e & -2, l = l.child; l !== null; ) {
      var n = l.alternate, a = t, u = l, c = u.flags, o = (e & 1) !== 0;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          Ql(
            a,
            u,
            e
          ), tu(4, u);
          break;
        case 1:
          if (Ql(
            a,
            u,
            e
          ), n = u, a = n.stateNode, typeof a.componentDidMount == "function")
            try {
              a.componentDidMount();
            } catch (A) {
              ht(n, n.return, A);
            }
          if (n = u, a = n.updateQueue, a !== null) {
            var d = n.stateNode;
            try {
              var S = a.shared.hiddenCallbacks;
              if (S !== null)
                for (a.shared.hiddenCallbacks = null, a = 0; a < S.length; a++)
                  Cs(S[a], d);
            } catch (A) {
              ht(n, n.return, A);
            }
          }
          o && c & 64 && Qd(u), kl(u, u.return);
          break;
        case 27:
          (e & 2) !== 0 && Kd(u);
        case 5:
          u.tag !== 5 && u.tag !== 27 || Zd(u), Ql(
            a,
            u,
            e
          ), o && n === null && c & 4 && Vf(u), kl(u, u.return);
          break;
        case 6:
          Zd(u);
          break;
        case 26:
          d = u.stateNode, u.memoizedState !== null || d === null || Xt || Go(
            su(d.ownerDocument),
            u.type,
            d
          ), Ql(
            a,
            u,
            e
          ), o && n === null && c & 4 && Vf(u), kl(u, u.return);
          break;
        case 12:
          Ql(
            a,
            u,
            e
          );
          break;
        case 31:
          Ql(
            a,
            u,
            e
          ), o && c & 4 && ay(a, u);
          break;
        case 13:
          Ql(
            a,
            u,
            e
          ), o && c & 4 && uy(a, u);
          break;
        case 22:
          u.memoizedState === null && Ql(
            a,
            u,
            e
          ), kl(u, u.return);
          break;
        case 30:
          Ql(
            a,
            u,
            e
          ), kl(u, u.return);
          break;
        case 7:
          kl(u, u.return);
        default:
          Ql(
            a,
            u,
            e
          );
      }
      l = l.sibling;
    }
  }
  function eo(t, l) {
    var e = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), t = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (t = l.memoizedState.cachePool.pool), t !== e && (t != null && t.refCount++, e != null && Xa(e));
  }
  function no(t, l) {
    t = null, l.alternate !== null && (t = l.alternate.memoizedState.cache), l = l.memoizedState.cache, l !== t && (l.refCount++, t != null && Xa(t));
  }
  function Hl(t, l, e, n) {
    var a = (e & 335544064) === e;
    if (l.subtreeFlags & (a ? 10262 : 10256))
      for (l = l.child; l !== null; )
        oy(
          t,
          l,
          e,
          n
        ), l = l.sibling;
    else a && Id(l);
  }
  function oy(t, l, e, n) {
    var a = (e & 335544064) === e;
    a && l.alternate === null && l.return !== null && l.return.alternate !== null && _i(l);
    var u = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        Hl(
          t,
          l,
          e,
          n
        ), u & 2048 && tu(9, l);
        break;
      case 1:
        Hl(
          t,
          l,
          e,
          n
        );
        break;
      case 3:
        Hl(
          t,
          l,
          e,
          n
        ), a && Pf && (t = t.containerInfo, t = t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, t.style.viewTransitionName === "root" && (t.style.viewTransitionName = ""), t = t.ownerDocument.documentElement, t !== null && t.style.viewTransitionName === "none" && (t.style.viewTransitionName = "")), u & 2048 && (u = null, l.alternate !== null && (u = l.alternate.memoizedState.cache), l = l.memoizedState.cache, l !== u && (l.refCount++, u != null && Xa(u)));
        break;
      case 12:
        if (u & 2048) {
          Hl(
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
            ht(l, l.return, S);
          }
        } else
          Hl(
            t,
            l,
            e,
            n
          );
        break;
      case 31:
        Hl(
          t,
          l,
          e,
          n
        );
        break;
      case 13:
        Hl(
          t,
          l,
          e,
          n
        );
        break;
      case 23:
        break;
      case 22:
        c = l.stateNode, o = l.alternate, l.memoizedState !== null ? (a && o !== null && o.memoizedState === null && _i(o), c._visibility & 2 ? Hl(
          t,
          l,
          e,
          n
        ) : nu(
          t,
          l
        )) : (a && o !== null && o.memoizedState !== null && _i(l), c._visibility & 2 ? Hl(
          t,
          l,
          e,
          n
        ) : (c._visibility |= 2, ea(
          t,
          l,
          e,
          n,
          (l.subtreeFlags & 10256) !== 0 || !1
        ))), u & 2048 && eo(o, l);
        break;
      case 24:
        Hl(
          t,
          l,
          e,
          n
        ), u & 2048 && no(l.alternate, l);
        break;
      case 30:
        a && (u = l.alternate, u !== null && (te(u.child, !0), te(l.child, !0))), Hl(
          t,
          l,
          e,
          n
        );
        break;
      default:
        Hl(
          t,
          l,
          e,
          n
        );
    }
  }
  function ea(t, l, e, n, a) {
    for (a = a && ((l.subtreeFlags & 10256) !== 0 || !1), l = l.child; l !== null; ) {
      var u = t, c = l, o = e, d = n, S = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          ea(
            u,
            c,
            o,
            d,
            a
          ), tu(8, c);
          break;
        case 23:
          break;
        case 22:
          var A = c.stateNode;
          c.memoizedState !== null ? A._visibility & 2 ? ea(
            u,
            c,
            o,
            d,
            a
          ) : nu(
            u,
            c
          ) : (A._visibility |= 2, ea(
            u,
            c,
            o,
            d,
            a
          )), a && S & 2048 && eo(
            c.alternate,
            c
          );
          break;
        case 24:
          ea(
            u,
            c,
            o,
            d,
            a
          ), a && S & 2048 && no(c.alternate, c);
          break;
        default:
          ea(
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
  function nu(t, l) {
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; ) {
        var e = t, n = l, a = n.flags;
        switch (n.tag) {
          case 22:
            nu(e, n), a & 2048 && eo(
              n.alternate,
              n
            );
            break;
          case 24:
            nu(e, n), a & 2048 && no(n.alternate, n);
            break;
          default:
            nu(e, n);
        }
        l = l.sibling;
      }
  }
  var zn = 8192;
  function xn(t, l, e) {
    if (t.subtreeFlags & zn)
      for (t = t.child; t !== null; )
        ry(
          t,
          l,
          e
        ), t = t.sibling;
  }
  function ry(t, l, e) {
    switch (t.tag) {
      case 26:
        xn(
          t,
          l,
          e
        ), t.flags & zn && (t.memoizedState !== null ? r1(
          e,
          Xl,
          t.memoizedState,
          t.memoizedProps
        ) : (t = t.stateNode, (l & 335544128) === l && g0(e, t)));
        break;
      case 5:
        xn(
          t,
          l,
          e
        ), t.flags & zn && (t = t.stateNode, (l & 335544128) === l && g0(e, t));
        break;
      case 3:
      case 4:
        var n = Xl;
        Xl = su(t.stateNode.containerInfo), xn(
          t,
          l,
          e
        ), Xl = n;
        break;
      case 22:
        t.memoizedState === null && (n = t.alternate, n !== null && n.memoizedState !== null ? (n = zn, zn = 16777216, xn(
          t,
          l,
          e
        ), zn = n) : xn(
          t,
          l,
          e
        ));
        break;
      case 30:
        if ((t.flags & zn) !== 0 && (n = t.memoizedProps.name, n != null && n !== "auto")) {
          var a = t.stateNode;
          a.paired = null, pl === null && (pl = /* @__PURE__ */ new Map()), pl.set(n, a);
        }
        xn(
          t,
          l,
          e
        );
        break;
      default:
        xn(
          t,
          l,
          e
        );
    }
  }
  function sy(t) {
    var l = t.alternate;
    if (l !== null && (t = l.child, t !== null)) {
      l.child = null;
      do
        l = t.sibling, t.sibling = null, t = l;
      while (t !== null);
    }
  }
  function au(t) {
    var l = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (l !== null)
        for (var e = 0; e < l.length; e++) {
          var n = l[e];
          Qt = n, yy(
            n,
            t
          );
        }
      sy(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        dy(t), t = t.sibling;
  }
  function dy(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        au(t), t.flags & 2048 && Je(9, t, t.return);
        break;
      case 3:
        au(t);
        break;
      case 12:
        au(t);
        break;
      case 22:
        var l = t.stateNode;
        t.memoizedState !== null && l._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (l._visibility &= -3, Di(t)) : au(t);
        break;
      default:
        au(t);
    }
  }
  function Di(t) {
    var l = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (l !== null)
        for (var e = 0; e < l.length; e++) {
          var n = l[e];
          Qt = n, yy(
            n,
            t
          );
        }
      sy(t);
    }
    for (t = t.child; t !== null; ) {
      switch (l = t, l.tag) {
        case 0:
        case 11:
        case 15:
          Je(8, l, l.return), Di(l);
          break;
        case 22:
          e = l.stateNode, e._visibility & 2 && (e._visibility &= -3, Di(l));
          break;
        default:
          Di(l);
      }
      t = t.sibling;
    }
  }
  function yy(t, l) {
    for (; Qt !== null; ) {
      var e = Qt;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          Je(8, e, l);
          break;
        case 23:
        case 22:
          if (e.memoizedState !== null && e.memoizedState.cachePool !== null) {
            var n = e.memoizedState.cachePool.pool;
            n != null && n.refCount++;
          }
          break;
        case 24:
          Xa(e.memoizedState.cache);
      }
      if (n = e.child, n !== null) n.return = e, Qt = n;
      else
        t: for (e = t; Qt !== null; ) {
          n = Qt;
          var a = n.sibling, u = n.return;
          if (ey(n), n === e) {
            Qt = null;
            break t;
          }
          if (a !== null) {
            a.return = u, Qt = a;
            break t;
          }
          Qt = u;
        }
    }
  }
  var uh = {
    getCacheForType: function(t) {
      var l = Zt(jt), e = l.data.get(t);
      return e === void 0 && (e = t(), l.data.set(t, e)), e;
    },
    cacheSignal: function() {
      return Zt(jt).controller.signal;
    }
  }, ih = typeof WeakMap == "function" ? WeakMap : Map, dt = 0, pt = null, lt = null, at = 0, vt = 0, Tl = null, We = !1, na = !1, ao = !1, Ae = 0, Mt = 0, Fe = 0, On = 0, ji = 0, El = 0, aa = 0, uu = null, sl = null, uo = !1, Ui = 0, my = 0, Hi = 1 / 0, Bi = null, Ie = null, xt = 0, Vl = null, _n = null, ae = 0, io = 0, co = null, vy = null, ua = null, ia = null, ca = null, iu = 0, Yi = null;
  function Al() {
    return (dt & 2) !== 0 && at !== 0 ? at & -at : Y.T !== null ? So() : Sr();
  }
  function hy() {
    if (El === 0)
      if ((at & 536870912) === 0 || P) {
        var t = Ru;
        Ru <<= 1, (Ru & 3932160) === 0 && (Ru = 262144), El = t;
      } else El = 536870912;
    return t = wt.current, t !== null && (t.flags |= 32), El;
  }
  function fa(t, l) {
    if (l != null) {
      var e = t.stateNode, n = e.ref;
      n === null && (n = e.ref = Fy(
        ye(t.memoizedProps, e)
      )), ia === null && (ia = []), ia.push(l.bind(null, n));
    }
  }
  function dl(t, l, e) {
    (t === pt && (vt === 2 || vt === 9) || t.cancelPendingCommit !== null) && (oa(t, 0), ke(
      t,
      at,
      El,
      !1
    )), Oa(t, e), ((dt & 2) === 0 || t !== pt) && (t === pt && ((dt & 2) === 0 && (On |= e), Mt === 4 && ke(
      t,
      at,
      El,
      !1
    )), ue(t));
  }
  function gy(t, l, e) {
    if ((dt & 6) !== 0) throw Error(r(327));
    var n = !e && (l & 127) === 0 && (l & t.expiredLanes) === 0 || xa(t, l), a = n ? oh(t, l) : oo(t, l, !0), u = n;
    do {
      if (a === 0) {
        na && !n && ke(t, l, 0, !1);
        break;
      } else {
        if (e = t.current.alternate, u && !ch(e)) {
          a = oo(t, l, !1), u = !1;
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
              a = uu;
              var d = o.current.memoizedState.isDehydrated;
              if (d && (oa(o, c).flags |= 256), c = oo(
                o,
                c,
                !1
              ), c !== 2 && c !== 6) {
                if (ao && !d) {
                  o.errorRecoveryDisabledLanes |= u, On |= u, a = 4;
                  break t;
                }
                u = sl, sl = a, u !== null && (sl === null ? sl = u : sl.push.apply(
                  sl,
                  u
                ));
              }
              a = c;
            }
            if (u = !1, a !== 2) continue;
          }
        }
        if (a === 1) {
          oa(t, 0), ke(t, l, 0, !0);
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
              ke(
                n,
                l,
                El,
                !We
              );
              break t;
            case 2:
              sl = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if ((l & 62914560) === l && (a = Ui + 300 - ml(), 10 < a)) {
            if (ke(
              n,
              l,
              El,
              !We
            ), ju(n, 0, !0) !== 0) break t;
            ae = l, n.timeoutHandle = Mo(
              Sy.bind(
                null,
                n,
                e,
                sl,
                Bi,
                uo,
                l,
                El,
                On,
                aa,
                We,
                u,
                "Throttled",
                -0,
                0
              ),
              a
            );
            break t;
          }
          Sy(
            n,
            e,
            sl,
            Bi,
            uo,
            l,
            El,
            On,
            aa,
            We,
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
  function Sy(t, l, e, n, a, u, c, o, d, S, A, z, v, T) {
    t.timeoutHandle = -1;
    var C = l.subtreeFlags, B = (u & 335544064) === u;
    if (z = null, (B || C & 8192 || (C & 16785408) === 16785408) && (z = {
      stylesheets: null,
      count: 0,
      imgCount: 0,
      imgBytes: 0,
      suspenseyImages: [],
      waitingForImages: !0,
      waitingForViewTransition: !1,
      unsuspend: Wl
    }, pl = null, ry(
      l,
      u,
      z
    ), B && (C = z, B = t.containerInfo, B = (B.nodeType === 9 ? B : B.ownerDocument).__reactViewTransition, B != null && (C.count++, C.waitingForViewTransition = !0, C = mu.bind(C), B.finished.then(C, C))), C = (u & 62914560) === u ? Ui - ml() : (u & 4194048) === u ? my - ml() : 0, C = s1(
      z,
      C
    ), C !== null)) {
      ae = u, t.cancelPendingCommit = C(
        xy.bind(
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
          A,
          z,
          null,
          v,
          T
        )
      ), ke(t, u, c, !S);
      return;
    }
    xy(
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
      A,
      z
    );
  }
  function ch(t) {
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
  function ke(t, l, e, n) {
    l = yr(t, l), l &= ~ji, l &= ~On, t.suspendedLanes |= l, t.pingedLanes &= ~l, n && (t.warmLanes |= l), n = t.expirationTimes;
    for (var a = l; 0 < a; ) {
      var u = 31 - hl(a), c = 1 << u;
      n[u] = -1, a &= ~c;
    }
    e !== 0 && vr(t, e, l);
  }
  function qi() {
    return (dt & 6) === 0 ? (cu(0), !1) : !0;
  }
  function fo() {
    if (lt !== null) {
      if (vt === 0)
        var t = lt.return;
      else
        t = lt, ge = vn = null, hf(t), Wn = null, Za = 0, t = lt;
      for (; t !== null; )
        Xd(t.alternate, t), t = t.return;
      lt = null;
    }
  }
  function oa(t, l) {
    var e = t.timeoutHandle;
    return e !== -1 && (t.timeoutHandle = -1, Rh(e)), e = t.cancelPendingCommit, e !== null && (t.cancelPendingCommit = null, e()), ae = 0, fo(), pt = t, lt = e = ve(t.current, null), at = l, vt = 0, Tl = null, We = !1, na = xa(t, l), ao = !1, aa = El = ji = On = Fe = Mt = 0, sl = uu = null, uo = !1, Ae = yr(t, l), Ku(), e;
  }
  function by(t, l) {
    $ = null, Y.H = gi, l === $n || l === ni ? (l = xs(), vt = 3) : l === ef ? (l = xs(), vt = 4) : vt = l === Rf ? 8 : l !== null && typeof l == "object" && typeof l.then == "function" ? 6 : 1, Tl = l, lt === null && (Mt = 1, Si(
      t,
      Rl(l, t.current)
    ));
  }
  function py() {
    var t = wt.current;
    return t === null ? !0 : (at & 4194048) === at ? It === null : (at & 62914560) === at || (at & 536870912) !== 0 ? t === It : !1;
  }
  function Ty() {
    var t = Y.H;
    return Y.H = gi, t === null ? gi : t;
  }
  function Ey() {
    var t = Y.A;
    return Y.A = uh, t;
  }
  function Li() {
    Mt = 4, We || (at & 4194048) !== at && wt.current !== null || (na = !0), (Fe & 134217727) === 0 && (On & 134217727) === 0 || pt === null || ke(
      pt,
      at,
      El,
      !1
    );
  }
  function oo(t, l, e) {
    var n = dt;
    dt |= 2;
    var a = Ty(), u = Ey();
    (pt !== t || at !== l) && (Bi = null, oa(t, l)), l = !1;
    var c = Mt;
    t: do
      try {
        if (vt !== 0 && lt !== null) {
          var o = lt, d = Tl;
          switch (vt) {
            case 8:
              fo(), c = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              wt.current === null && (l = !0);
              var S = vt;
              if (vt = 0, Tl = null, ra(t, o, d, S), e && na) {
                c = 0;
                break t;
              }
              break;
            default:
              S = vt, vt = 0, Tl = null, ra(t, o, d, S);
          }
        }
        fh(), c = Mt;
        break;
      } catch (A) {
        by(t, A);
      }
    while (!0);
    return l && t.shellSuspendCounter++, ge = vn = null, dt = n, Y.H = a, Y.A = u, lt === null && (pt = null, at = 0, Ku()), c;
  }
  function fh() {
    for (; lt !== null; ) Ay(lt);
  }
  function oh(t, l) {
    var e = dt;
    dt |= 2;
    var n = Ty(), a = Ey();
    pt !== t || at !== l ? (Bi = null, Hi = ml() + 500, oa(t, l)) : na = xa(
      t,
      l
    );
    t: do
      try {
        if (vt !== 0 && lt !== null) {
          l = lt;
          var u = Tl;
          l: switch (vt) {
            case 1:
              vt = 0, Tl = null, ra(t, l, u, 1);
              break;
            case 2:
            case 9:
              if (Ns(u)) {
                vt = 0, Tl = null, Ny(l);
                break;
              }
              l = function() {
                vt !== 2 && vt !== 9 || pt !== t || (vt = 7), ue(t);
              }, u.then(l, l);
              break t;
            case 3:
              vt = 7;
              break t;
            case 4:
              vt = 5;
              break t;
            case 7:
              Ns(u) ? (vt = 0, Tl = null, Ny(l)) : (vt = 0, Tl = null, ra(t, l, u, 7));
              break;
            case 5:
              var c = null;
              switch (lt.tag) {
                case 26:
                  c = lt.memoizedState;
                case 5:
                case 27:
                  var o = lt;
                  if (c ? v0(c) : o.stateNode.complete) {
                    vt = 0, Tl = null;
                    var d = o.sibling;
                    if (d !== null) lt = d;
                    else {
                      var S = o.return;
                      S !== null ? (lt = S, Gi(S)) : lt = null;
                    }
                    break l;
                  }
              }
              vt = 0, Tl = null, ra(t, l, u, 5);
              break;
            case 6:
              vt = 0, Tl = null, ra(t, l, u, 6);
              break;
            case 8:
              fo(), Mt = 6;
              break t;
            default:
              throw Error(r(462));
          }
        }
        rh();
        break;
      } catch (A) {
        by(t, A);
      }
    while (!0);
    return ge = vn = null, Y.H = n, Y.A = a, dt = e, lt !== null ? 0 : (pt = null, at = 0, Ku(), Mt);
  }
  function rh() {
    for (; lt !== null && !Om(); )
      Ay(lt);
  }
  function Ay(t) {
    var l = Ld(t.alternate, t, Ae);
    t.memoizedProps = t.pendingProps, l === null ? Gi(t) : lt = l;
  }
  function Ny(t) {
    var l = t, e = l.alternate;
    switch (l.tag) {
      case 15:
      case 0:
        l = Dd(
          e,
          l,
          l.pendingProps,
          l.type,
          void 0,
          at
        );
        break;
      case 11:
        l = Dd(
          e,
          l,
          l.pendingProps,
          l.type.render,
          l.ref,
          at
        );
        break;
      case 5:
        hf(l);
        var n = l;
        n === Gt && (P ? (ku(n), n.tag === 5 && n.stateNode != null && (Et = n.stateNode)) : (ku(n), P = !0));
      default:
        Xd(e, l), l = lt = ys(l, Ae), l = Ld(e, l, Ae);
    }
    t.memoizedProps = t.pendingProps, l === null ? Gi(t) : lt = l;
  }
  function ra(t, l, e, n) {
    ge = vn = null, hf(l), Wn = null, Za = 0;
    var a = l.return;
    try {
      if (Iv(
        t,
        a,
        l,
        e,
        at
      )) {
        Mt = 1, Si(
          t,
          Rl(e, t.current)
        ), lt = null;
        return;
      }
    } catch (u) {
      if (a !== null) throw lt = a, u;
      Mt = 1, Si(
        t,
        Rl(e, t.current)
      ), lt = null;
      return;
    }
    l.flags & 32768 ? (P || n === 1 ? t = !0 : na || (at & 536870912) !== 0 ? t = !1 : (We = t = !0, (n === 2 || n === 9 || n === 3 || n === 6) && (n = wt.current, n !== null && n.tag === 13 && (n.flags |= 16384))), zy(l, t)) : Gi(l);
  }
  function Gi(t) {
    var l = t;
    do {
      if ((l.flags & 32768) !== 0) {
        zy(
          l,
          We
        );
        return;
      }
      t = l.return;
      var e = lh(
        l.alternate,
        l,
        Ae
      );
      if (e !== null) {
        lt = e;
        return;
      }
      if (l = l.sibling, l !== null) {
        lt = l;
        return;
      }
      lt = l = t;
    } while (l !== null);
    Mt === 0 && (Mt = 5);
  }
  function zy(t, l) {
    do {
      var e = eh(t.alternate, t);
      if (e !== null) {
        e.flags &= 32767, lt = e;
        return;
      }
      if (e = t.return, e !== null && (e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null), !l && (t = t.sibling, t !== null)) {
        lt = t;
        return;
      }
      lt = t = e;
    } while (t !== null);
    Mt = 6, lt = null;
  }
  function xy(t, l, e, n, a, u, c, o, d, S, A, z) {
    t.cancelPendingCommit = null;
    do
      Xi();
    while (xt !== 0);
    if ((dt & 6) !== 0) throw Error(r(327));
    if (l !== null) {
      if (l === t.current) throw Error(r(177));
      t === pt && (lt = pt = null, at = 0), _n = l, Vl = t, ae = e, co = a, vy = n, sh(
        t,
        l,
        e,
        c,
        o,
        d,
        z
      );
    }
  }
  function sh(t, l, e, n, a, u, c) {
    var o = l.lanes | l.childLanes;
    if (io = o, o |= Vc, Ym(
      t,
      e,
      o,
      n,
      a,
      u
    ), ia = null, (e & 335544064) === e ? (ca = Lv(t), n = 10262) : (ca = null, n = 10256), (l.subtreeFlags & n) !== 0 || (l.flags & n) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, gh(Mu, function() {
      return mo(), null;
    })) : (t.callbackNode = null, t.callbackPriority = 0), xi = !1, n = (l.flags & 13878) !== 0, (l.subtreeFlags & 13878) !== 0 || n) {
      n = Y.T, Y.T = null, a = w.p, w.p = 2, u = dt, dt |= 4;
      try {
        nh(t, l, e);
      } finally {
        dt = u, w.p = a, Y.T = n;
      }
    }
    xt = 1, xi ? ua = Yh(
      c,
      t.containerInfo,
      ca,
      ro,
      so,
      yh,
      yo,
      mo,
      dh
    ) : (ro(), so(), yo());
  }
  function dh(t) {
    if (xt !== 0) {
      var l = Vl.onRecoverableError;
      l(t, { componentStack: null });
    }
  }
  function yh() {
    xt === 3 && (xt = 0, fy(_n, Vl), xt = 4);
  }
  function ro() {
    if (xt === 1) {
      xt = 0;
      var t = Vl, l = _n, e = ae, n = (l.flags & 13878) !== 0;
      if ((l.subtreeFlags & 13878) !== 0 || n) {
        n = Y.T, Y.T = null;
        var a = w.p;
        w.p = 2;
        var u = dt;
        dt |= 4;
        try {
          eu = Mi = !1, iy(l, t, e), e = xo;
          var c = ns(t.containerInfo), o = e.focusedElem, d = e.selectionRange;
          if (c !== o && o && o.ownerDocument && es(
            o.ownerDocument.documentElement,
            o
          )) {
            if (d !== null && qc(o)) {
              var S = d.start, A = d.end;
              if (A === void 0 && (A = S), "selectionStart" in o)
                o.selectionStart = S, o.selectionEnd = Math.min(
                  A,
                  o.value.length
                );
              else {
                var z = o.ownerDocument || document, v = z && z.defaultView || window;
                if (v.getSelection) {
                  var T = v.getSelection(), C = o.textContent.length, B = Math.min(d.start, C), W = d.end === void 0 ? B : Math.min(d.end, C);
                  !T.extend && B > W && (c = W, W = B, B = c);
                  var g = ls(
                    o,
                    B
                  ), y = ls(
                    o,
                    W
                  );
                  if (g && y && (T.rangeCount !== 1 || T.anchorNode !== g.node || T.anchorOffset !== g.offset || T.focusNode !== y.node || T.focusOffset !== y.offset)) {
                    var b = z.createRange();
                    b.setStart(g.node, g.offset), T.removeAllRanges(), B > W ? (T.addRange(b), T.extend(y.node, y.offset)) : (b.setEnd(y.node, y.offset), T.addRange(b));
                  }
                }
              }
            }
            for (z = [], T = o; T = T.parentNode; )
              T.nodeType === 1 && z.push({
                element: T,
                left: T.scrollLeft,
                top: T.scrollTop
              });
            for (typeof o.focus == "function" && o.focus(), o = 0; o < z.length; o++) {
              var N = z[o];
              N.element.scrollLeft = N.left, N.element.scrollTop = N.top;
            }
          }
          Sa = !!zo, xo = zo = null;
        } finally {
          dt = u, w.p = a, Y.T = n;
        }
      }
      t.current = l, xt = 2;
    }
  }
  function so() {
    if (xt === 2) {
      xt = 0;
      var t = Vl, l = _n, e = (l.flags & 8772) !== 0;
      if ((l.subtreeFlags & 8772) !== 0 || e) {
        e = Y.T, Y.T = null;
        var n = w.p;
        w.p = 2;
        var a = dt;
        dt |= 4;
        try {
          ty(t, l.alternate, l);
        } finally {
          dt = a, w.p = n, Y.T = e;
        }
      }
      xt = 3;
    }
  }
  function yo() {
    if (xt === 4 || xt === 3) {
      xt = 0;
      var t = ua;
      ua = null, _m();
      var l = Vl, e = _n, n = ae, a = vy, u = (n & 335544064) === n ? 10262 : 10256;
      if ((e.subtreeFlags & u) !== 0 || (e.flags & u) !== 0 ? xt = 5 : (xt = 0, _n = Vl = null, Oy(l, l.pendingLanes)), u = l.pendingLanes, u === 0 && (Ie = null), pc(n), e = e.stateNode, vl && typeof vl.onCommitFiberRoot == "function")
        try {
          vl.onCommitFiberRoot(
            za,
            e,
            void 0,
            (e.current.flags & 128) === 128
          );
        } catch {
        }
      if (a !== null) {
        e = Y.T, u = w.p, w.p = 2, Y.T = null;
        try {
          for (var c = l.onRecoverableError, o = 0; o < a.length; o++) {
            var d = a[o];
            c(d.value, {
              componentStack: d.stack
            });
          }
        } finally {
          Y.T = e, w.p = u;
        }
      }
      if (a = ia, c = ca, ca = null, a !== null && (ia = null, c === null && (c = []), t !== null))
        for (d = 0; d < a.length; d++)
          e = (0, a[d])(
            c
          ), e !== void 0 && t.finished.finally(e);
      (ae & 3) !== 0 && Xi(), ue(l), u = l.pendingLanes, (n & 261930) !== 0 && (u & 42) !== 0 ? l === Yi ? iu++ : (iu = 0, Yi = l) : (iu = 0, Yi = null), cu(0);
    }
  }
  function Oy(t, l) {
    (t.pooledCacheLanes &= l) === 0 && (l = t.pooledCache, l != null && (t.pooledCache = null, Xa(l)));
  }
  function Xi() {
    return ua !== null && (ua.skipTransition(), ua = null), ro(), so(), yo(), mo();
  }
  function mo() {
    if (xt !== 5) return !1;
    var t = Vl, l = io;
    io = 0;
    var e = pc(ae), n = Y.T, a = w.p;
    try {
      w.p = 32 > e ? 32 : e, Y.T = null, e = co, co = null;
      var u = Vl, c = ae;
      if (xt = 0, _n = Vl = null, ae = 0, (dt & 6) !== 0) throw Error(r(331));
      var o = dt;
      if (dt |= 4, dy(u.current), oy(
        u,
        u.current,
        c,
        e
      ), dt = o, cu(0, !1), vl && typeof vl.onPostCommitFiberRoot == "function")
        try {
          vl.onPostCommitFiberRoot(za, u);
        } catch {
        }
      return !0;
    } finally {
      w.p = a, Y.T = n, Oy(t, l);
    }
  }
  function _y(t, l, e) {
    l = Rl(e, l), l = Cf(t.stateNode, l, 2), t = Ve(t, l, 2), t !== null && (Oa(t, 2), ue(t));
  }
  function ht(t, l, e) {
    if (t.tag === 3)
      _y(t, t, e);
    else
      for (; l !== null; ) {
        if (l.tag === 3) {
          _y(
            l,
            t,
            e
          );
          break;
        } else if (l.tag === 1) {
          var n = l.stateNode;
          if (typeof l.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (Ie === null || !Ie.has(n))) {
            t = Rl(e, t), e = Nd(2), n = Ve(l, e, 2), n !== null && (zd(
              e,
              n,
              l,
              t
            ), Oa(n, 2), ue(n));
            break;
          }
        }
        l = l.return;
      }
  }
  function vo(t, l, e) {
    var n = t.pingCache;
    if (n === null) {
      n = t.pingCache = new ih();
      var a = /* @__PURE__ */ new Set();
      n.set(l, a);
    } else
      a = n.get(l), a === void 0 && (a = /* @__PURE__ */ new Set(), n.set(l, a));
    a.has(e) || (ao = !0, a.add(e), t = mh.bind(null, t, l, e), l.then(t, t));
  }
  function mh(t, l, e) {
    var n = t.pingCache;
    n !== null && n.delete(l), t.pingedLanes |= t.suspendedLanes & e, t.warmLanes &= ~e, pt === t && (at & e) === e && ((Mt === 4 || Mt === 3 && (at & 62914560) === at && 300 > ml() - Ui) && (dt & 2) === 0 ? oa(t, 0) : ji |= e, aa === at && (aa = 0)), ue(t);
  }
  function My(t, l) {
    l === 0 && (l = mr()), t = dn(t, l), t !== null && (Oa(t, l), ue(t));
  }
  function vh(t) {
    var l = t.memoizedState, e = 0;
    l !== null && (e = l.retryLane), My(t, e);
  }
  function hh(t, l) {
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
    n !== null && n.delete(l), My(t, e);
  }
  function gh(t, l) {
    return hc(t, l);
  }
  var sa = null, da = null, ho = !1, Qi = !1, go = !1, Pe = 0;
  function ue(t) {
    t !== da && t.next === null && (da === null ? sa = da = t : da = da.next = t), Qi = !0, ho || (ho = !0, bh());
  }
  function cu(t, l) {
    if (!go && Qi) {
      go = !0;
      do
        for (var e = !1, n = sa; n !== null; ) {
          if (t !== 0) {
            var a = n.pendingLanes;
            if (a === 0) var u = 0;
            else {
              var c = n.suspendedLanes, o = n.pingedLanes;
              u = (1 << 31 - hl(42 | t) + 1) - 1, u &= a & ~(c & ~o), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (e = !0, jy(n, u));
          } else
            u = at, u = ju(
              n,
              n === pt ? u : 0,
              n.cancelPendingCommit !== null || n.timeoutHandle !== -1
            ), (u & 3) === 0 || xa(n, u) || (e = !0, jy(n, u));
          n = n.next;
        }
      while (e);
      go = !1;
    }
  }
  function Sh() {
    Cy();
  }
  function Cy() {
    Qi = ho = !1;
    var t = 0;
    Pe !== 0 && Ch() && (t = Pe);
    for (var l = ml(), e = null, n = sa; n !== null; ) {
      var a = n.next, u = Ry(n, l);
      u === 0 ? (n.next = null, e === null ? sa = a : e.next = a, a === null && (da = e)) : (e = n, (t !== 0 || (u & 3) !== 0) && (Qi = !0)), n = a;
    }
    xt !== 0 && xt !== 5 || cu(t), Pe !== 0 && (Pe = 0);
  }
  function Ry(t, l) {
    for (var e = t.suspendedLanes, n = t.pingedLanes, a = t.expirationTimes, u = t.pendingLanes & -62914561; 0 < u; ) {
      var c = 31 - hl(u), o = 1 << c, d = a[c];
      d === -1 ? ((o & e) === 0 || (o & n) !== 0) && (a[c] = Bm(o, l)) : d <= l && (t.expiredLanes |= o), u &= ~o;
    }
    if (l = pt, e = at, e = ju(
      t,
      t === l ? e : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), n = t.callbackNode, e === 0 || t === l && (vt === 2 || vt === 9) || t.cancelPendingCommit !== null)
      return n !== null && n !== null && gc(n), t.callbackNode = null, t.callbackPriority = 0;
    if ((e & 3) === 0 || xa(t, e)) {
      if (l = e & -e, l === t.callbackPriority) return l;
      switch (n !== null && gc(n), pc(e)) {
        case 2:
        case 8:
          e = sr;
          break;
        case 32:
          e = Mu;
          break;
        case 268435456:
          e = dr;
          break;
        default:
          e = Mu;
      }
      return n = Dy.bind(null, t), e = hc(e, n), t.callbackPriority = l, t.callbackNode = e, l;
    }
    return n !== null && n !== null && gc(n), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function Dy(t, l) {
    if (xt !== 0 && xt !== 5)
      return t.callbackNode = null, t.callbackPriority = 0, null;
    var e = t.callbackNode;
    if (Xi() && t.callbackNode !== e)
      return null;
    var n = at;
    return n = ju(
      t,
      t === pt ? n : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), n === 0 ? null : (gy(t, n, l), Ry(t, ml()), t.callbackNode != null && t.callbackNode === e ? Dy.bind(null, t) : null);
  }
  function jy(t, l) {
    if (Xi()) return null;
    gy(t, l, !0);
  }
  function bh() {
    Dh(function() {
      (dt & 6) !== 0 ? hc(
        rr,
        Sh
      ) : Cy();
    });
  }
  function So() {
    if (Pe === 0) {
      var t = Sn;
      t === 0 && (t = Cu, Cu <<= 1, (Cu & 261888) === 0 && (Cu = 256)), Pe = t;
    }
    return Pe;
  }
  function Uy(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : qu(t);
  }
  function ph(t, l, e, n, a) {
    if (l === "submit" && e && e.stateNode === a) {
      var u = Uy(
        (a[cl] || null).action
      ), c = n.submitter;
      c && (l = (l = c[cl] || null) ? Uy(l.formAction) : c.getAttribute("formAction"), l !== null && (u = l, c = null));
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
                if (Pe !== 0) {
                  var d = new FormData(a, c);
                  zf(
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
                typeof u == "function" && (o.preventDefault(), d = new FormData(a, c), zf(
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
  for (var bo = 0; bo < Qc.length; bo++) {
    var po = Qc[bo], Th = po.toLowerCase(), Eh = po[0].toUpperCase() + po.slice(1);
    Ll(
      Th,
      "on" + Eh
    );
  }
  Ll(is, "onAnimationEnd"), Ll(cs, "onAnimationIteration"), Ll(fs, "onAnimationStart"), Ll("dblclick", "onDoubleClick"), Ll("focusin", "onFocus"), Ll("focusout", "onBlur"), Ll(Rv, "onTransitionRun"), Ll(Dv, "onTransitionStart"), Ll(jv, "onTransitionCancel"), Ll(os, "onTransitionEnd"), Un("onMouseEnter", ["mouseout", "mouseover"]), Un("onMouseLeave", ["mouseout", "mouseover"]), Un("onPointerEnter", ["pointerout", "pointerover"]), Un("onPointerLeave", ["pointerout", "pointerover"]), on(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), on(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), on("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), on(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), on(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), on(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var fu = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Ah = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(fu)
  );
  function Hy(t, l) {
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
            } catch (A) {
              wu(A);
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
            } catch (A) {
              wu(A);
            }
            a.currentTarget = null, u = d;
          }
      }
    }
  }
  function et(t, l) {
    var e = l[pr];
    e === void 0 && (e = l[pr] = /* @__PURE__ */ new Set());
    var n = t + "__bubble";
    e.has(n) || (By(l, t, 2, !1), e.add(n));
  }
  function To(t, l, e) {
    var n = 0;
    l && (n |= 4), By(
      e,
      t,
      n,
      l
    );
  }
  var Vi = "_reactListening" + Math.random().toString(36).slice(2);
  function Eo(t) {
    if (!t[Vi]) {
      t[Vi] = !0, Ar.forEach(function(e) {
        e !== "selectionchange" && (Ah.has(e) || To(e, !1, t), To(e, !0, t));
      });
      var l = t.nodeType === 9 ? t : t.ownerDocument;
      l === null || l[Vi] || (l[Vi] = !0, To("selectionchange", !1, l));
    }
  }
  function By(t, l, e, n) {
    switch (z0(l)) {
      case 2:
        var a = v1;
        break;
      case 8:
        a = h1;
        break;
      default:
        a = Qo;
    }
    e = a.bind(
      null,
      l,
      e,
      t
    ), a = void 0, !_c || l !== "touchstart" && l !== "touchmove" && l !== "wheel" || (a = !0), n ? a !== void 0 ? t.addEventListener(l, e, {
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
            if (c = fn(o), c === null) return;
            if (d = c.tag, d === 5 || d === 6 || d === 26 || d === 27) {
              n = u = c;
              continue t;
            }
            o = o.parentNode;
          }
        }
        n = n.return;
      }
    Br(function() {
      var S = u, A = xc(e), z = [];
      t: {
        var v = rs.get(t);
        if (v !== void 0) {
          var T = Qu, C = t;
          switch (t) {
            case "keypress":
              if (Gu(e) === 0) break t;
            case "keydown":
            case "keyup":
              T = cv;
              break;
            case "focusin":
              C = "focus", T = Dc;
              break;
            case "focusout":
              C = "blur", T = Dc;
              break;
            case "beforeblur":
            case "afterblur":
              T = Dc;
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
              T = Lr;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              T = Wm;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              T = dv;
              break;
            case is:
            case cs:
            case fs:
              T = km;
              break;
            case os:
              T = mv;
              break;
            case "scroll":
            case "scrollend":
              T = Jm;
              break;
            case "wheel":
              T = hv;
              break;
            case "copy":
            case "cut":
            case "paste":
              T = tv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              T = Xr;
              break;
            case "submit":
              T = rv;
              break;
            case "toggle":
            case "beforetoggle":
              T = Sv;
          }
          var B = (l & 4) !== 0, W = !B && (t === "scroll" || t === "scrollend"), g = B ? v !== null ? v + "Capture" : null : v;
          B = [];
          for (var y = S, b; y !== null; ) {
            var N = y;
            if (b = N.stateNode, N = N.tag, N !== 5 && N !== 26 && N !== 27 || b === null || g === null || (N = Ca(y, g), N != null && B.push(
              ou(y, N, b)
            )), W) break;
            y = y.return;
          }
          0 < B.length && (v = new T(
            v,
            C,
            null,
            e,
            A
          ), z.push({ event: v, listeners: B }));
        }
      }
      if ((l & 7) === 0) {
        t: {
          if (T = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout", T && e !== zc && (C = e.relatedTarget || e.fromElement) && (fn(C) || C[Rn]))
            break t;
          (v || T) && (C = A.window === A ? A : (T = A.ownerDocument) ? T.defaultView || T.parentWindow : window, v ? (T = e.relatedTarget || e.toElement, v = S, T = T ? fn(T) : null, T !== null && (W = x(T), B = T.tag, T !== W || B !== 5 && B !== 27 && B !== 6) && (T = null)) : (v = null, T = S), v !== T && (B = Lr, N = "onMouseLeave", g = "onMouseEnter", y = "mouse", (t === "pointerout" || t === "pointerover") && (B = Xr, N = "onPointerLeave", g = "onPointerEnter", y = "pointer"), W = v == null ? C : Ma(v), b = T == null ? C : Ma(T), C = new B(
            N,
            y + "leave",
            v,
            e,
            A
          ), C.target = W, C.relatedTarget = b, N = null, fn(A) === S && (B = new B(
            g,
            y + "enter",
            T,
            e,
            A
          ), B.target = b, B.relatedTarget = W, N = B), W = N, B = v && T ? kt(
            v,
            T,
            Nh
          ) : null, v !== null && Yy(
            z,
            C,
            v,
            B,
            !1
          ), T !== null && W !== null && Yy(
            z,
            W,
            T,
            B,
            !0
          )));
        }
        t: {
          if (v = S ? Ma(S) : window, T = v.nodeName && v.nodeName.toLowerCase(), T === "select" || T === "input" && v.type === "file")
            var U = Wr;
          else if (Jr(v))
            if (Fr)
              U = _v;
            else {
              U = xv;
              var ut = zv;
            }
          else
            T = v.nodeName, !T || T.toLowerCase() !== "input" || v.type !== "checkbox" && v.type !== "radio" ? S && Nc(S.elementType) && (U = Wr) : U = Ov;
          if (U && (U = U(t, S))) {
            $r(
              z,
              U,
              e,
              A
            );
            break t;
          }
          ut && ut(t, v, S);
        }
        switch (ut = S ? Ma(S) : window, t) {
          case "focusin":
            (Jr(ut) || ut.contentEditable === "true") && (Gn = ut, Lc = S, qa = null);
            break;
          case "focusout":
            qa = Lc = Gn = null;
            break;
          case "mousedown":
            Gc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Gc = !1, as(z, e, A);
            break;
          case "selectionchange":
            if (Cv) break;
          case "keydown":
          case "keyup":
            as(z, e, A);
        }
        var G;
        if (Uc)
          t: {
            switch (t) {
              case "compositionstart":
                var Q = "onCompositionStart";
                break t;
              case "compositionend":
                Q = "onCompositionEnd";
                break t;
              case "compositionupdate":
                Q = "onCompositionUpdate";
                break t;
            }
            Q = void 0;
          }
        else
          Ln ? wr(t, e) && (Q = "onCompositionEnd") : t === "keydown" && e.keyCode === 229 && (Q = "onCompositionStart");
        Q && (Qr && e.locale !== "ko" && (Ln || Q !== "onCompositionStart" ? Q === "onCompositionEnd" && Ln && (G = Yr()) : (Ue = A, Mc = "value" in Ue ? Ue.value : Ue.textContent, Ln = !0)), ut = Zi(S, Q), 0 < ut.length && (Q = new Gr(
          Q,
          t,
          null,
          e,
          A
        ), z.push({ event: Q, listeners: ut }), G ? Q.data = G : (G = Kr(e), G !== null && (Q.data = G)))), (G = pv ? Tv(t, e) : Ev(t, e)) && (Q = Zi(S, "onBeforeInput"), 0 < Q.length && (ut = new Gr(
          "onBeforeInput",
          "beforeinput",
          null,
          e,
          A
        ), z.push({
          event: ut,
          listeners: Q
        }), ut.data = G)), ph(
          z,
          t,
          S,
          e,
          A
        );
      }
      Hy(z, l);
    });
  }
  function ou(t, l, e) {
    return {
      instance: t,
      listener: l,
      currentTarget: e
    };
  }
  function Zi(t, l) {
    for (var e = l + "Capture", n = []; t !== null; ) {
      var a = t, u = a.stateNode;
      if (a = a.tag, a !== 5 && a !== 26 && a !== 27 || u === null || (a = Ca(t, e), a != null && n.unshift(
        ou(t, a, u)
      ), a = Ca(t, l), a != null && n.push(
        ou(t, a, u)
      )), t.tag === 3) return n;
      t = t.return;
    }
    return [];
  }
  function Nh(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Yy(t, l, e, n, a) {
    for (var u = l._reactName, c = []; e !== null && e !== n; ) {
      var o = e, d = o.alternate, S = o.stateNode;
      if (o = o.tag, d !== null && d === n) break;
      o !== 5 && o !== 26 && o !== 27 || S === null || (d = S, a ? (S = Ca(e, u), S != null && c.unshift(
        ou(e, S, d)
      )) : a || (S = Ca(e, u), S != null && c.push(
        ou(e, S, d)
      ))), e = e.return;
    }
    c.length !== 0 && t.push({ event: l, listeners: c });
  }
  var zh = /\r\n?/g, xh = /\u0000|\uFFFD/g;
  function qy(t) {
    return (typeof t == "string" ? t : "" + t).replace(zh, `
`).replace(xh, "");
  }
  function Ly(t, l) {
    return l = qy(l), qy(t) === l;
  }
  function gt(t, l, e, n, a, u) {
    switch (e) {
      case "children":
        if (typeof n == "string")
          l === "body" || l === "textarea" && n === "" || Bn(t, n);
        else if (typeof n == "number" || typeof n == "bigint")
          l !== "body" && Bn(t, "" + n);
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
        Ur(t, n, u);
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
        n = qu(n), t.setAttribute(e, n);
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
        n = qu(n), t.setAttribute(e, n);
        break;
      case "onClick":
        n != null && (t.onclick = Wl);
        return;
      case "onScroll":
        n != null && et("scroll", t);
        return;
      case "onScrollEnd":
        n != null && et("scrollend", t);
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
        e = qu(n), t.setAttributeNS(
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
        et("beforetoggle", t), et("toggle", t), Bu(t, "popover", n);
        break;
      case "xlinkActuate":
        se(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          n
        );
        break;
      case "xlinkArcrole":
        se(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          n
        );
        break;
      case "xlinkRole":
        se(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          n
        );
        break;
      case "xlinkShow":
        se(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          n
        );
        break;
      case "xlinkTitle":
        se(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          n
        );
        break;
      case "xlinkType":
        se(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          n
        );
        break;
      case "xmlBase":
        se(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          n
        );
        break;
      case "xmlLang":
        se(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          n
        );
        break;
      case "xmlSpace":
        se(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          n
        );
        break;
      case "is":
        Bu(t, "is", n);
        break;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N")
          e = wm.get(e) || e, Bu(t, e, n);
        else return;
    }
    st = !0;
  }
  function No(t, l, e, n, a, u) {
    switch (e) {
      case "style":
        Ur(t, n, u);
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
        if (typeof n == "string") Bn(t, n);
        else if (typeof n == "number" || typeof n == "bigint")
          Bn(t, "" + n);
        else return;
        break;
      case "onScroll":
        n != null && et("scroll", t);
        return;
      case "onScrollEnd":
        n != null && et("scrollend", t);
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
        if (!Nr.hasOwnProperty(e))
          t: {
            if (e[0] === "o" && e[1] === "n" && (a = e.endsWith("Capture"), u = e.slice(2, a ? e.length - 7 : void 0), l = t[cl] || null, l = l != null ? l[e] : null, typeof l == "function" && t.removeEventListener(u, l, a), typeof n == "function")) {
              typeof l != "function" && l !== null && (e in t ? t[e] = null : t.hasAttribute(e) && t.removeAttribute(e)), t.addEventListener(u, n, a);
              break t;
            }
            st = !0, e in t ? t[e] = n : n === !0 ? t.setAttribute(e, "") : Bu(t, e, n);
          }
        return;
    }
    st = !0;
  }
  function $t(t, l, e) {
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
        et("error", t), et("load", t);
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
        et("invalid", t);
        var o = u = c = a = null, d = null, S = null;
        for (n in e)
          if (e.hasOwnProperty(n)) {
            var A = e[n];
            if (A != null)
              switch (n) {
                case "name":
                  a = A;
                  break;
                case "type":
                  c = A;
                  break;
                case "checked":
                  d = A;
                  break;
                case "defaultChecked":
                  S = A;
                  break;
                case "value":
                  u = A;
                  break;
                case "defaultValue":
                  o = A;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (A != null)
                    throw Error(r(137, l));
                  break;
                default:
                  gt(t, l, n, A, e, null);
              }
          }
        Cr(
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
        et("invalid", t), n = c = u = null;
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
        l = u, e = c, t.multiple = !!n, l != null ? Hn(t, !!n, l, !1) : e != null && Hn(t, !!n, e, !0);
        return;
      case "textarea":
        et("invalid", t), u = a = n = null;
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
        Dr(t, n, a, u);
        return;
      case "option":
        for (d in e)
          e.hasOwnProperty(d) && (n = e[d], n != null) && (d === "selected" ? t.selected = n && typeof n != "function" && typeof n != "symbol" : gt(t, l, d, n, e, null));
        return;
      case "dialog":
        et("beforetoggle", t), et("toggle", t), et("cancel", t), et("close", t);
        break;
      case "iframe":
      case "object":
        et("load", t);
        break;
      case "video":
      case "audio":
        for (n = 0; n < fu.length; n++)
          et(fu[n], t);
        break;
      case "image":
        et("error", t), et("load", t);
        break;
      case "details":
        et("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        et("error", t), et("load", t);
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
        if (Nc(l)) {
          for (A in e)
            e.hasOwnProperty(A) && (n = e[A], n !== void 0 && No(
              t,
              l,
              A,
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
  var Oh = {};
  function _h(t, l, e, n) {
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
        var a = null, u = null, c = null, o = null, d = null, S = null, A = null;
        for (T in e) {
          var z = e[T];
          if (e.hasOwnProperty(T) && z != null)
            switch (T) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                d = z;
              default:
                n.hasOwnProperty(T) || gt(t, l, T, null, n, z);
            }
        }
        for (var v in n) {
          var T = n[v];
          if (z = e[v], n.hasOwnProperty(v) && (T != null || z != null))
            switch (v) {
              case "type":
                T !== z && (st = !0), u = T;
                break;
              case "name":
                T !== z && (st = !0), a = T;
                break;
              case "checked":
                T !== z && (st = !0), S = T;
                break;
              case "defaultChecked":
                T !== z && (st = !0), A = T;
                break;
              case "value":
                T !== z && (st = !0), c = T;
                break;
              case "defaultValue":
                T !== z && (st = !0), o = T;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (T != null)
                  throw Error(r(137, l));
                break;
              default:
                T !== z && gt(
                  t,
                  l,
                  v,
                  T,
                  n,
                  z
                );
            }
        }
        Ec(
          t,
          c,
          o,
          d,
          S,
          A,
          u,
          a
        );
        return;
      case "select":
        T = c = o = v = null;
        for (u in e)
          if (d = e[u], e.hasOwnProperty(u) && d != null)
            switch (u) {
              case "value":
                break;
              case "multiple":
                T = d;
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
        l = o, e = c, n = T, v != null ? Hn(t, !!e, v, !1) : !!n != !!e && (l != null ? Hn(t, !!e, l, !0) : Hn(t, !!e, e ? [] : "", !1));
        return;
      case "textarea":
        T = v = null;
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
                a !== u && (st = !0), T = a;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (a != null) throw Error(r(91));
                break;
              default:
                a !== u && gt(t, l, c, a, n, u);
            }
        Rr(t, v, T);
        return;
      case "option":
        for (var C in e)
          v = e[C], e.hasOwnProperty(C) && v != null && !n.hasOwnProperty(C) && (C === "selected" ? t.selected = !1 : gt(
            t,
            l,
            C,
            null,
            n,
            v
          ));
        for (d in n)
          v = n[d], T = e[d], n.hasOwnProperty(d) && v !== T && (v != null || T != null) && (d === "selected" ? (v !== T && (st = !0), t.selected = v && typeof v != "function" && typeof v != "symbol") : gt(
            t,
            l,
            d,
            v,
            n,
            T
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
        for (var B in e)
          v = e[B], e.hasOwnProperty(B) && v != null && !n.hasOwnProperty(B) && gt(t, l, B, null, n, v);
        for (S in n)
          if (v = n[S], T = e[S], n.hasOwnProperty(S) && v !== T && (v != null || T != null))
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
                  T
                );
            }
        return;
      default:
        if (Nc(l)) {
          for (var W in e)
            v = e[W], e.hasOwnProperty(W) && v !== void 0 && !n.hasOwnProperty(W) && No(
              t,
              l,
              W,
              void 0,
              n,
              v
            );
          for (A in n)
            v = n[A], T = e[A], !n.hasOwnProperty(A) || v === T || v === void 0 && T === void 0 || No(
              t,
              l,
              A,
              v,
              n,
              T
            );
          return;
        }
    }
    for (var g in e)
      v = e[g], e.hasOwnProperty(g) && v != null && !n.hasOwnProperty(g) && gt(t, l, g, null, n, v);
    for (z in n)
      v = n[z], T = e[z], !n.hasOwnProperty(z) || v === T || v == null && T == null || gt(t, l, z, v, n, T);
  }
  function Gy(t) {
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
  function Mh() {
    if (typeof performance.getEntriesByType == "function") {
      for (var t = 0, l = 0, e = performance.getEntriesByType("resource"), n = 0; n < e.length; n++) {
        var a = e[n], u = a.transferSize, c = a.initiatorType, o = a.duration;
        if (u && o && Gy(c)) {
          for (c = 0, o = a.responseEnd, n += 1; n < e.length; n++) {
            var d = e[n], S = d.startTime;
            if (S > o) break;
            var A = d.transferSize, z = d.initiatorType;
            A && Gy(z) && (d = d.responseEnd, c += A * (d < o ? 1 : (o - S) / (d - S)));
          }
          if (--n, l += 8 * (u + c) / (a.duration / 1e3), t++, 10 < t) break;
        }
      }
      if (0 < t) return l / t / 1e6;
    }
    return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
  }
  var zo = null, xo = null;
  function ru(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Xy(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Qy(t, l) {
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
  function Vy(t, l, e, n) {
    return e = ru(
      e
    ).createElement(t), e[Vt] = n, e[cl] = l, $t(e, t, l), Lt(e), e;
  }
  function Oo(t, l) {
    return t === "textarea" || t === "noscript" || typeof l.children == "string" || typeof l.children == "number" || typeof l.children == "bigint" || typeof l.dangerouslySetInnerHTML == "object" && l.dangerouslySetInnerHTML !== null && l.dangerouslySetInnerHTML.__html != null;
  }
  var _o = null;
  function Ch() {
    var t = window.event;
    return t && t.type === "popstate" ? t === _o ? !1 : (_o = t, !0) : (_o = null, !1);
  }
  var Mo = typeof setTimeout == "function" ? setTimeout : void 0, Rh = typeof clearTimeout == "function" ? clearTimeout : void 0, Zy = typeof Promise == "function" ? Promise : void 0, wy = typeof requestAnimationFrame == "function" ? requestAnimationFrame : Mo, Dh = typeof queueMicrotask == "function" ? queueMicrotask : typeof Zy < "u" ? function(t) {
    return Zy.resolve(null).then(t).catch(jh);
  } : Mo;
  function jh(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function tn(t) {
    return t === "head";
  }
  function Ky(t, l) {
    var e = l, n = 0;
    do {
      var a = e.nextSibling;
      if (t.removeChild(e), a && a.nodeType === 8)
        if (e = a.data, e === "/$" || e === "/&") {
          if (n === 0) {
            t.removeChild(a), ba(l);
            return;
          }
          n--;
        } else if (e === "$" || e === "$?" || e === "$~" || e === "$!" || e === "&")
          n++;
        else if (e === "html")
          Yo(
            t.ownerDocument.documentElement
          );
        else if (e === "head") {
          e = t.ownerDocument.head, Yo(e);
          for (var u = e.firstChild; u; ) {
            var c = u.nextSibling, o = u.nodeName;
            u[_a] || o === "SCRIPT" || o === "STYLE" || o === "LINK" && u.rel.toLowerCase() === "stylesheet" || e.removeChild(u), u = c;
          }
        } else
          e === "body" && Yo(t.ownerDocument.body);
      e = a;
    } while (e);
    ba(l);
  }
  function Jy(t, l) {
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
  function $y(t, l, e) {
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
  function Wy(t, l) {
    t = t.style, l = l.style;
    var e = l != null ? l.hasOwnProperty("viewTransitionName") ? l.viewTransitionName : l.hasOwnProperty("view-transition-name") ? l["view-transition-name"] : null : null;
    t.viewTransitionName = e == null || typeof e == "boolean" ? "" : ("" + e).trim(), e = l != null ? l.hasOwnProperty("viewTransitionClass") ? l.viewTransitionClass : l.hasOwnProperty("view-transition-class") ? l["view-transition-class"] : null : null, t.viewTransitionClass = e == null || typeof e == "boolean" ? "" : ("" + e).trim(), t.display === "inline-block" && (l == null ? t.display = t.margin = "" : (e = l.display, t.display = e == null || typeof e == "boolean" ? "" : e, e = l.margin, e != null ? t.margin = e : (e = l.hasOwnProperty("marginTop") ? l.marginTop : l["margin-top"], t.marginTop = e == null || typeof e == "boolean" ? "" : e, l = l.hasOwnProperty("marginBottom") ? l.marginBottom : l["margin-bottom"], t.marginBottom = l == null || typeof l == "boolean" ? "" : l)));
  }
  function Uh(t, l, e) {
    return e = e.ownerDocument.defaultView, {
      rect: t,
      abs: l.position === "absolute" || l.position === "fixed",
      clip: l.clipPath !== "none" || l.overflow !== "visible" || l.filter !== "none" || l.mask !== "none" || l.mask !== "none" || l.borderRadius !== "0px",
      view: 0 <= t.bottom && 0 <= t.right && t.top <= e.innerHeight && t.left <= e.innerWidth
    };
  }
  function Co(t) {
    var l = t.getBoundingClientRect(), e = getComputedStyle(t);
    return Uh(l, e, t);
  }
  function Hh(t) {
    return t.documentElement.clientHeight;
  }
  function Bh(t) {
    this.addEventListener("load", t), this.addEventListener("error", t);
  }
  function Yh(t, l, e, n, a, u, c, o, d) {
    var S = l.nodeType === 9 ? l : l.ownerDocument;
    try {
      var A = S.startViewTransition({
        update: function() {
          var v = S.defaultView, T = v.navigation && v.navigation.transition, C = S.fonts.status;
          n();
          var B = [];
          if (C === "loaded" && (Hh(S), S.fonts.status === "loading" && B.push(S.fonts.ready)), C = B.length, t !== null)
            for (var W = t.suspenseyImages, g = 0, y = 0; y < W.length; y++) {
              var b = W[y];
              if (!b.complete) {
                var N = b.getBoundingClientRect();
                if (0 < N.bottom && 0 < N.right && N.top < v.innerHeight && N.left < v.innerWidth) {
                  if (g += h0(b), g > Ji) {
                    B.length = C;
                    break;
                  }
                  b = new Promise(
                    Bh.bind(b)
                  ), B.push(b);
                }
              }
            }
          if (0 < B.length)
            return v = Promise.race([
              Promise.all(B),
              new Promise(function(U) {
                return setTimeout(U, 500);
              })
            ]).then(a, a), (T ? Promise.allSettled([T.finished, v]) : v).then(u, u);
          if (a(), T)
            return T.finished.then(
              u,
              u
            );
          u();
        },
        types: e
      });
      S.__reactViewTransition = A;
      var z = [];
      return A.ready.then(
        function() {
          for (var v = S.documentElement.getAnimations({
            subtree: !0
          }), T = 0; T < v.length; T++) {
            var C = v[T], B = C.effect, W = B.pseudoElement;
            if (W != null && W.startsWith("::view-transition")) {
              z.push(C), C = B.getKeyframes();
              for (var g = W = void 0, y = !0, b = 0; b < C.length; b++) {
                var N = C[b], U = N.width;
                if (W === void 0) W = U;
                else if (W !== U) {
                  y = !1;
                  break;
                }
                if (U = N.height, g === void 0) g = U;
                else if (g !== U) {
                  y = !1;
                  break;
                }
                delete N.width, delete N.height, N.transform === "none" && delete N.transform;
              }
              y && W !== void 0 && g !== void 0 && (B.setKeyframes(C), y = getComputedStyle(
                B.target,
                B.pseudoElement
              ), y.width !== W || y.height !== g) && (y = C[0], y.width = W, y.height = g, y = C[C.length - 1], y.width = W, y.height = g, B.setKeyframes(C));
            }
          }
          c();
        },
        function(v) {
          S.__reactViewTransition === A && (S.__reactViewTransition = null);
          try {
            typeof v == "object" && v !== null && v.name === "InvalidStateError" && (v.message === "View transition was skipped because document visibility state is hidden." || v.message === "Skipping view transition because document visibility state has become hidden." || v.message === "Skipping view transition because viewport size changed." || v.message === "Transition was aborted because of invalid state") && (v = null), v !== null && d(v);
          } finally {
            n(), a(), c();
          }
        }
      ), A.finished.finally(function() {
        for (var v = 0; v < z.length; v++)
          z[v].cancel();
        S.__reactViewTransition === A && (S.__reactViewTransition = null), o();
      }), A;
    } catch {
      return n(), a(), c(), null;
    }
  }
  function Mn(t, l) {
    this._scope = document.documentElement, this._selector = "::view-transition-" + t + "(" + l + ")";
  }
  Mn.prototype.animate = function(t, l) {
    return l = typeof l == "number" ? { duration: l } : k({}, l), l.pseudoElement = this._selector, this._scope.animate(t, l);
  }, Mn.prototype.getAnimations = function() {
    for (var t = this._scope, l = this._selector, e = t.getAnimations({ subtree: !0 }), n = [], a = 0; a < e.length; a++) {
      var u = e[a].effect;
      u !== null && u.target === t && u.pseudoElement === l && n.push(e[a]);
    }
    return n;
  }, Mn.prototype.getComputedStyle = function() {
    return getComputedStyle(this._scope, this._selector);
  };
  function Fy(t) {
    return {
      name: t,
      group: new Mn("group", t),
      imagePair: new Mn("image-pair", t),
      old: new Mn("old", t),
      new: new Mn("new", t)
    };
  }
  function Nl(t) {
    this._fragmentFiber = t, this._observers = this._eventListeners = null;
  }
  Nl.prototype.addEventListener = function(t, l, e) {
    var n = null, a = null;
    if (!(e != null && typeof e != "boolean" && (n = e.signal || null, n !== null && n.aborted))) {
      this._eventListeners === null && (this._eventListeners = []);
      var u = this._eventListeners;
      if (ky(u, t, l, e) === -1) {
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
        ), n.addEventListener("abort", a, { once: !0 }), a = n.removeEventListener.bind(n, "abort", a)), n = ya(e), u.push({
          type: t,
          listener: l,
          optionsOrUseCapture: e,
          attachedListener: o,
          cleanup: a
        }), p(
          this._fragmentFiber.child,
          !1,
          qh,
          t,
          o,
          n
        );
      }
      this._eventListeners = u;
    }
  };
  function qh(t, l, e, n) {
    return tt(t).addEventListener(
      l,
      e,
      n
    ), !1;
  }
  Nl.prototype.removeEventListener = function(t, l, e) {
    var n = this._eventListeners;
    if (n !== null && (l = ky(
      n,
      t,
      l,
      e
    ), l !== -1)) {
      var a = n[l];
      e = a.attachedListener;
      var u = a.cleanup;
      a = ya(a.optionsOrUseCapture), p(
        this._fragmentFiber.child,
        !1,
        Lh,
        t,
        e,
        a
      ), n.splice(l, 1), u !== null && u();
    }
  };
  function Lh(t, l, e, n) {
    return tt(t).removeEventListener(
      l,
      e,
      n
    ), !1;
  }
  function ya(t) {
    return t != null && typeof t != "boolean" && (t.once === !0 || t.signal instanceof AbortSignal) ? { capture: t.capture, passive: t.passive } : t;
  }
  function Iy(t) {
    return t == null ? "c=0" : typeof t == "boolean" ? "c=" + (t ? "1" : "0") : "c=" + (t.capture ? "1" : "0");
  }
  function ky(t, l, e, n) {
    if (t.length === 0) return -1;
    n = Iy(n);
    for (var a = 0; a < t.length; a++) {
      var u = t[a];
      if (u.type === l && u.listener === e && Iy(u.optionsOrUseCapture) === n)
        return a;
    }
    return -1;
  }
  Nl.prototype.dispatchEvent = function(t) {
    var l = H(
      this._fragmentFiber
    );
    if (l === null) return !0;
    l = tt(l);
    var e = this._eventListeners;
    if (e !== null && 0 < e.length || !t.bubbles) {
      var n = l.nodeType === 9 ? l.createComment("") : document.createTextNode("");
      if (e)
        for (var a = 0; a < e.length; a++) {
          var u = e[a];
          n.addEventListener(
            u.type,
            u.attachedListener,
            ya(u.optionsOrUseCapture)
          );
        }
      if (l.appendChild(n), t = n.dispatchEvent(t), e)
        for (a = 0; a < e.length; a++)
          u = e[a], n.removeEventListener(
            u.type,
            u.attachedListener,
            ya(u.optionsOrUseCapture)
          );
      return l.removeChild(n), t;
    }
    return l.dispatchEvent(t);
  }, Nl.prototype.focus = function(t) {
    p(
      this._fragmentFiber.child,
      !0,
      Py,
      t,
      void 0,
      void 0
    );
  };
  function Py(t, l) {
    return t.tag === 6 ? !1 : (t = tt(t), Ih(t, l));
  }
  Nl.prototype.focusLast = function(t) {
    var l = [];
    p(
      this._fragmentFiber.child,
      !0,
      Ro,
      l,
      void 0,
      void 0
    );
    for (var e = l.length - 1; 0 <= e && !Py(l[e], t); e--) ;
  };
  function Ro(t, l) {
    return l.push(t), !1;
  }
  Nl.prototype.blur = function() {
    var t = H(
      this._fragmentFiber
    );
    t !== null && (t = tt(t), t = ru(t).activeElement, t !== null && p(
      this._fragmentFiber.child,
      !1,
      Gh,
      t,
      void 0,
      void 0
    ));
  };
  function Gh(t, l) {
    return t.tag === 6 ? !1 : (t = tt(t), t === l || t.contains(l) ? (l.blur(), !0) : !1);
  }
  Nl.prototype.observeUsing = function(t) {
    this._observers === null && (this._observers = /* @__PURE__ */ new Set()), this._observers.add(t), p(
      this._fragmentFiber.child,
      !1,
      Xh,
      t,
      void 0,
      void 0
    );
  };
  function Xh(t, l) {
    return t.tag === 6 || (t = tt(t), l.observe(t)), !1;
  }
  Nl.prototype.unobserveUsing = function(t) {
    var l = this._observers;
    if (l !== null && l.has(t)) {
      l.delete(t), p(
        this._fragmentFiber.child,
        !1,
        Qh,
        t,
        void 0,
        void 0
      );
      for (var e = l = 0; e < Zl.length; e++) {
        var n = Zl[e];
        n.fragmentInstance === this && n.observer === t ? t.unobserve(n.instance) : Zl[l++] = n;
      }
      Zl.length = l;
    }
  };
  function Qh(t, l) {
    return t.tag === 6 || (t = tt(t), l.unobserve(t)), !1;
  }
  var Zl = [], Do = !1;
  function Vh(t, l, e) {
    Zl.push({
      fragmentInstance: t,
      observer: l,
      instance: e
    }), Do || (Do = !0, kh(function() {
      Do = !1;
      var n = Zl;
      Zl = [];
      for (var a = 0; a < n.length; a++) {
        var u = n[a];
        u.observer.unobserve(u.instance);
      }
    }));
  }
  Nl.prototype.getClientRects = function() {
    var t = [];
    return p(
      this._fragmentFiber.child,
      !1,
      Zh,
      t,
      void 0,
      void 0
    ), t;
  };
  function Zh(t, l) {
    if (t.tag === 6) {
      t = t.stateNode;
      var e = t.ownerDocument.createRange();
      e.selectNodeContents(t), l.push.apply(l, e.getClientRects());
    } else
      t = tt(t), l.push.apply(l, t.getClientRects());
    return !1;
  }
  Nl.prototype.getRootNode = function(t) {
    var l = H(
      this._fragmentFiber
    );
    return l === null ? this : tt(l).getRootNode(t);
  }, Nl.prototype.compareDocumentPosition = function(t) {
    var l = H(
      this._fragmentFiber
    );
    if (l === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
    var e = [];
    p(
      this._fragmentFiber.child,
      !1,
      Ro,
      e,
      void 0,
      void 0
    );
    var n = tt(l);
    if (e.length === 0) {
      if (e = n, nt(this._fragmentFiber)) {
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
      return e === t ? a = Node.DOCUMENT_POSITION_CONTAINS : n & Node.DOCUMENT_POSITION_CONTAINED_BY && (e = Ot(l)[1], e === null ? a = Node.DOCUMENT_POSITION_PRECEDING : (t = tt(e).compareDocumentPosition(
        t
      ), a = t === 0 || t & Node.DOCUMENT_POSITION_FOLLOWING ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING)), a |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
    }
    l = tt(e[0]), a = tt(e[e.length - 1]);
    var u = nt(this._fragmentFiber) ? l.parentElement : n;
    if (u == null)
      return Node.DOCUMENT_POSITION_DISCONNECTED;
    n = u.compareDocumentPosition(l) & Node.DOCUMENT_POSITION_CONTAINED_BY, u = u.compareDocumentPosition(a) & Node.DOCUMENT_POSITION_CONTAINED_BY;
    var c = l.compareDocumentPosition(t), o = a.compareDocumentPosition(t), d = c & Node.DOCUMENT_POSITION_CONTAINED_BY || o & Node.DOCUMENT_POSITION_CONTAINED_BY;
    return o = n && u && c & Node.DOCUMENT_POSITION_FOLLOWING && o & Node.DOCUMENT_POSITION_PRECEDING, l = n && l === t || u && a === t || d || o ? Node.DOCUMENT_POSITION_CONTAINED_BY : !n && l === t || !u && a === t ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC : c, l & Node.DOCUMENT_POSITION_DISCONNECTED || l & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC || wh(
      l,
      this._fragmentFiber,
      e[0],
      e[e.length - 1],
      t
    ) ? l : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
  };
  function wh(t, l, e, n, a) {
    var u = fn(a);
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
        for (u = l, l = H(l); u !== null; ) {
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
    return t & Node.DOCUMENT_POSITION_PRECEDING ? ((l = !!u) && !(l = u === e) && (l = kt(
      e,
      u,
      xl
    ), l === null ? l = !1 : (p(
      l,
      !0,
      Tt,
      u,
      e
    ), u = Ft, Ft = null, l = u !== null)), l) : t & Node.DOCUMENT_POSITION_FOLLOWING ? ((l = !!u) && !(l = u === n) && (l = kt(
      n,
      u,
      xl
    ), l === null ? l = !1 : (p(
      l,
      !0,
      zl,
      u,
      n
    ), u = Ft, Z = Ft = null, l = u !== null)), l) : !1;
  }
  function t0(t, l) {
    var e = t.ownerDocument.createRange();
    e.selectNodeContents(t), t = e.getBoundingClientRect(), window.scrollTo(
      window.scrollX + t.left,
      l ? window.scrollY + t.top : window.scrollY + t.bottom - window.innerHeight
    );
  }
  Nl.prototype.scrollIntoView = function(t) {
    if (typeof t == "object") throw Error(r(566));
    var l = [];
    p(
      this._fragmentFiber.child,
      !1,
      Ro,
      l,
      void 0,
      void 0
    );
    var e = t !== !1;
    if (l.length === 0) {
      var n = Ot(
        this._fragmentFiber
      );
      if (n = e ? n[1] || n[0] || H(this._fragmentFiber) : n[0] || n[1], n === null) return;
      if (n.tag === 6) {
        t = tt(n), t0(t, e);
        return;
      }
      if (n = tt(n), n.nodeType !== 9) {
        if (n.nodeType === 11) {
          e = "host" in n ? n.host : null, e !== null && e.scrollIntoView(t);
          return;
        }
        n.scrollIntoView(t);
      }
    }
    for (n = e ? l.length - 1 : 0; n !== (e ? -1 : l.length); ) {
      var a = l[n];
      a.tag === 6 ? (a = tt(a), t0(a, e)) : tt(a).scrollIntoView(t), n += e ? -1 : 1;
    }
  };
  function Kh(t, l) {
    return t = tt(t), l0(t, l), !1;
  }
  function l0(t, l) {
    t.reactFragments == null && (t.reactFragments = /* @__PURE__ */ new Set()), t.reactFragments.add(l);
  }
  function e0(t, l) {
    var e = l._eventListeners;
    if (e !== null)
      for (var n = 0; n < e.length; n++) {
        var a = e[n];
        t.addEventListener(
          a.type,
          a.attachedListener,
          ya(a.optionsOrUseCapture)
        );
      }
    t.nodeType !== 3 && (e = l._observers, e !== null && e.forEach(function(u) {
      for (var c = 0, o = 0; o < Zl.length; o++) {
        var d = Zl[o];
        (d.fragmentInstance !== l || d.observer !== u || d.instance !== t) && (Zl[c++] = d);
      }
      Zl.length = c, u.observe(t);
    }), l0(t, l));
  }
  function Jh(t, l) {
    var e = l._eventListeners;
    if (e !== null)
      for (var n = 0; n < e.length; n++) {
        var a = e[n];
        t.removeEventListener(
          a.type,
          a.attachedListener,
          ya(a.optionsOrUseCapture)
        );
      }
    t.nodeType !== 3 && (e = l._observers, e !== null && e.forEach(function(u) {
      typeof u.rootMargin == "string" ? Vh(
        l,
        u,
        t
      ) : u.unobserve(t);
    }), t.reactFragments != null && t.reactFragments.delete(l));
  }
  function jo(t) {
    var l = t.firstChild;
    for (l && l.nodeType === 10 && (l = l.nextSibling); l; ) {
      var e = l;
      switch (l = l.nextSibling, e.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          jo(e), Hu(e);
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
  function $h(t, l, e, n) {
    for (; t.nodeType === 1; ) {
      var a = e;
      if (t.nodeName.toLowerCase() !== l.toLowerCase()) {
        if (!n && (t.nodeName !== "INPUT" || t.type !== "hidden"))
          break;
      } else if (n) {
        if (!t[_a])
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
      if (t = Bl(t.nextSibling), t === null) break;
    }
    return null;
  }
  function Wh(t, l, e) {
    if (l === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = Bl(t.nextSibling), t === null)) return null;
    return t;
  }
  function n0(t, l) {
    for (; t.nodeType !== 8; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !l || (t = Bl(t.nextSibling), t === null)) return null;
    return t;
  }
  function Uo(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function Ho(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
  }
  function Fh(t, l) {
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
  function Bl(t) {
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
  var Bo = null;
  function a0(t) {
    t = t.nextSibling;
    for (var l = 0; t; ) {
      if (t.nodeType === 8) {
        var e = t.data;
        if (e === "/$" || e === "/&") {
          if (l === 0)
            return Bl(t.nextSibling);
          l--;
        } else
          e !== "$" && e !== "$!" && e !== "$?" && e !== "$~" && e !== "&" || l++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function u0(t) {
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
  function Ih(t, l) {
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
  function kh(t) {
    wy(function() {
      wy(function(l) {
        return t(l);
      });
    });
  }
  function i0(t, l, e) {
    switch (l = ru(e), t) {
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
  function c0(t, l, e) {
    for (var n in e) {
      var a = e[n];
      e.hasOwnProperty(n) && a != null && gt(t, l, n, null, Oh, a);
    }
    e.dangerouslySetInnerHTML != null && (t.textContent = ""), t.onclick === Wl && (t.onclick = null), Hu(t);
  }
  function Yo(t) {
    for (var l = t.attributes; l.length; )
      t.removeAttributeNode(l[0]);
    Hu(t);
  }
  var Yl = /* @__PURE__ */ new Map(), f0 = /* @__PURE__ */ new Set();
  function su(t) {
    if (typeof t.getRootNode == "function") {
      var l = t.getRootNode();
      if (l.nodeType === 9 || l.nodeType === 11) return l;
    }
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  var Ne = w.d;
  w.d = {
    f: Ph,
    r: t1,
    D: l1,
    C: e1,
    L: n1,
    m: a1,
    X: i1,
    S: u1,
    M: c1
  };
  function Ph() {
    var t = Ne.f(), l = qi();
    return t || l;
  }
  function t1(t) {
    var l = Dn(t);
    l !== null && l.tag === 5 && l.type === "form" ? rd(l) : Ne.r(t);
  }
  var ma = typeof document > "u" ? null : document;
  function o0(t, l, e) {
    var n = ma;
    if (n && typeof l == "string" && l) {
      var a = Ml(l);
      a = 'link[rel="' + t + '"][href="' + a + '"]', typeof e == "string" && (a += '[crossorigin="' + e + '"]'), f0.has(a) || (f0.add(a), t = { rel: t, crossOrigin: e, href: l }, n.querySelector(a) === null && (l = n.createElement("link"), $t(l, "link", t), Lt(l), n.head.appendChild(l)));
    }
  }
  function l1(t) {
    Ne.D(t), o0("dns-prefetch", t, null);
  }
  function e1(t, l) {
    Ne.C(t, l), o0("preconnect", t, l);
  }
  function n1(t, l, e) {
    Ne.L(t, l, e);
    var n = ma;
    if (n && t && l) {
      var a = 'link[rel="preload"][as="' + Ml(l) + '"]';
      l === "image" && e && e.imageSrcSet ? (a += '[imagesrcset="' + Ml(
        e.imageSrcSet
      ) + '"]', typeof e.imageSizes == "string" && (a += '[imagesizes="' + Ml(
        e.imageSizes
      ) + '"]')) : a += '[href="' + Ml(t) + '"]';
      var u = a;
      switch (l) {
        case "style":
          u = va(t);
          break;
        case "script":
          u = ha(t);
      }
      if (!(Yl.has(u) || (t = k(
        {
          rel: "preload",
          href: l === "image" && e && e.imageSrcSet ? void 0 : t,
          as: l
        },
        e
      ), Yl.set(u, t), n.querySelector(a) !== null || l === "style" && n.querySelector(du(u)) || l === "script" && n.querySelector(yu(u))))) {
        var c = n.createElement("link");
        $t(c, "link", t), l === "style" && (c[Uu] = !0, c.onload = c.onerror = function() {
          Er(c);
        }), Lt(c), n.head.appendChild(c);
      }
    }
  }
  function a1(t, l) {
    Ne.m(t, l);
    var e = ma;
    if (e && t) {
      var n = l && typeof l.as == "string" ? l.as : "script", a = 'link[rel="modulepreload"][as="' + Ml(n) + '"][href="' + Ml(t) + '"]', u = a;
      switch (n) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = ha(t);
      }
      if (!Yl.has(u) && (t = k({ rel: "modulepreload", href: t }, l), Yl.set(u, t), e.querySelector(a) === null)) {
        switch (n) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (e.querySelector(yu(u)))
              return;
        }
        n = e.createElement("link"), $t(n, "link", t), Lt(n), e.head.appendChild(n);
      }
    }
  }
  function u1(t, l, e) {
    Ne.S(t, l, e);
    var n = ma;
    if (n && t) {
      var a = jn(n).hoistableStyles, u = va(t);
      l = l || "default";
      var c = a.get(u);
      if (!c) {
        var o = { loading: 0, preload: null };
        if (c = n.querySelector(
          du(u)
        ))
          o.loading = 5;
        else {
          t = k(
            { rel: "stylesheet", href: t, "data-precedence": l },
            e
          ), (e = Yl.get(u)) && qo(t, e);
          var d = c = n.createElement("link");
          Lt(d), $t(d, "link", t), d._p = new Promise(function(S, A) {
            d.onload = S, d.onerror = A;
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
  function i1(t, l) {
    Ne.X(t, l);
    var e = ma;
    if (e && t) {
      var n = jn(e).hoistableScripts, a = ha(t), u = n.get(a);
      u || (u = e.querySelector(yu(a)), u || (t = k({ src: t, async: !0 }, l), (l = Yl.get(a)) && Lo(t, l), u = e.createElement("script"), Lt(u), $t(u, "link", t), e.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, n.set(a, u));
    }
  }
  function c1(t, l) {
    Ne.M(t, l);
    var e = ma;
    if (e && t) {
      var n = jn(e).hoistableScripts, a = ha(t), u = n.get(a);
      u || (u = e.querySelector(yu(a)), u || (t = k({ src: t, async: !0, type: "module" }, l), (l = Yl.get(a)) && Lo(t, l), u = e.createElement("script"), Lt(u), $t(u, "link", t), e.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, n.set(a, u));
    }
  }
  function r0(t, l, e, n) {
    var a = (a = Re.current) ? su(a) : null;
    if (!a) throw Error(r(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof e.precedence == "string" && typeof e.href == "string" ? (e = va(e.href), l = jn(
          a
        ).hoistableStyles, n = l.get(e), n || (n = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, l.set(e, n)), n) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (e.rel === "stylesheet" && typeof e.href == "string" && typeof e.precedence == "string") {
          t = va(e.href);
          var u = jn(
            a
          ).hoistableStyles, c = u.get(t);
          if (c || (a = a.ownerDocument || a, c = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, u.set(t, c), (u = a.querySelector(
            du(t)
          )) ? u._p || (c.instance = u, c.state.loading = 5) : (u = Yl.get(t), u || (u = {
            rel: "preload",
            as: "style",
            href: e.href,
            crossOrigin: e.crossOrigin,
            integrity: e.integrity,
            media: e.media,
            hrefLang: e.hrefLang,
            referrerPolicy: e.referrerPolicy
          }, Yl.set(t, u)), f1(
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
        return l = e.async, e = e.src, typeof e == "string" && l && typeof l != "function" && typeof l != "symbol" ? (e = ha(e), l = jn(
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
  function va(t) {
    return 'href="' + Ml(t) + '"';
  }
  function du(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function s0(t) {
    return k({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function f1(t, l, e, n) {
    if (l = t.querySelector(
      'link[rel="preload"][as="style"][' + l + "]"
    )) {
      if (l[Uu] !== !0) {
        n.loading = 1;
        return;
      }
    } else
      l = t.createElement("link"), l[Uu] = !0, l.onload = l.onerror = Er.bind(null, l), $t(l, "link", e), Lt(l), t.head.appendChild(l);
    n.preload = l, l.addEventListener("load", function() {
      return n.loading |= 1;
    }), l.addEventListener("error", function() {
      return n.loading |= 2;
    });
  }
  function ha(t) {
    return '[src="' + Ml(t) + '"]';
  }
  function yu(t) {
    return "script[async]" + t;
  }
  function d0(t, l, e) {
    if (l.count++, l.instance === null)
      switch (l.type) {
        case "style":
          var n = t.querySelector(
            'style[data-href~="' + Ml(e.href) + '"]'
          );
          if (n)
            return l.instance = n, Lt(n), n;
          var a = k({}, e, {
            "data-href": e.href,
            "data-precedence": e.precedence,
            href: null,
            precedence: null
          });
          return n = (t.ownerDocument || t).createElement(
            "style"
          ), Lt(n), $t(n, "style", a), wi(n, e.precedence, t), l.instance = n;
        case "stylesheet":
          a = va(e.href);
          var u = t.querySelector(
            du(a)
          );
          if (u)
            return l.state.loading |= 4, l.instance = u, Lt(u), u;
          n = s0(e), (a = Yl.get(a)) && qo(n, a), u = (t.ownerDocument || t).createElement("link"), Lt(u);
          var c = u;
          return c._p = new Promise(function(o, d) {
            c.onload = o, c.onerror = d;
          }), $t(u, "link", n), l.state.loading |= 4, wi(u, e.precedence, t), l.instance = u;
        case "script":
          return u = ha(e.src), (a = t.querySelector(
            yu(u)
          )) ? (l.instance = a, Lt(a), a) : (n = e, (a = Yl.get(u)) && (n = k({}, e), Lo(n, a)), t = t.ownerDocument || t, a = t.createElement("script"), Lt(a), $t(a, "link", n), t.head.appendChild(a), l.instance = a);
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
  function Lo(t, l) {
    t.crossOrigin == null && (t.crossOrigin = l.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = l.referrerPolicy), t.integrity == null && (t.integrity = l.integrity);
  }
  var Ki = null;
  function y0(t, l, e) {
    if (Ki === null) {
      var n = /* @__PURE__ */ new Map(), a = Ki = /* @__PURE__ */ new Map();
      a.set(e, n);
    } else
      a = Ki, n = a.get(e), n || (n = /* @__PURE__ */ new Map(), a.set(e, n));
    if (n.has(t)) return n;
    for (n.set(t, null), e = e.getElementsByTagName(t), a = 0; a < e.length; a++) {
      var u = e[a];
      if (!(u[_a] || u[Vt] || t === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
        var c = u.getAttribute(l) || "";
        c = t + c;
        var o = n.get(c);
        o ? o.push(u) : n.set(c, [u]);
      }
    }
    return n;
  }
  function Go(t, l, e) {
    t = t.ownerDocument || t, t.head.insertBefore(
      e,
      l === "title" ? t.querySelector("head > title") : null
    );
  }
  function o1(t, l, e) {
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
  function m0(t, l) {
    return t === "img" && l.src != null && l.src !== "" && l.onLoad == null && l.loading !== "lazy";
  }
  function v0(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function h0(t) {
    return (t.width || 100) * (t.height || 100) * (typeof devicePixelRatio == "number" ? devicePixelRatio : 1) * 0.25;
  }
  function g0(t, l) {
    typeof l.decode == "function" && (t.imgCount++, l.complete || (t.imgBytes += h0(l), t.suspenseyImages.push(l)), t = d1.bind(t), l.decode().then(t, t));
  }
  function r1(t, l, e, n) {
    if (e.type === "stylesheet" && (typeof n.media != "string" || matchMedia(n.media).matches !== !1) && (e.state.loading & 4) === 0) {
      if (e.instance === null) {
        var a = va(n.href), u = l.querySelector(
          du(a)
        );
        if (u) {
          l = u._p, l !== null && typeof l == "object" && typeof l.then == "function" && (t.count++, t = mu.bind(t), l.then(t, t)), e.state.loading |= 4, e.instance = u, Lt(u);
          return;
        }
        u = l.ownerDocument || l, n = s0(n), (a = Yl.get(a)) && qo(n, a), u = u.createElement("link"), Lt(u);
        var c = u;
        c._p = new Promise(function(o, d) {
          c.onload = o, c.onerror = d;
        }), $t(u, "link", n), e.instance = u;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(e, l), (l = e.state.preload) && (e.state.loading & 3) === 0 && (t.count++, e = mu.bind(t), l.addEventListener("load", e), l.addEventListener("error", e));
    }
  }
  var Ji = 0;
  function s1(t, l) {
    return t.stylesheets && t.count === 0 && Wi(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(e) {
      var n = setTimeout(function() {
        if (t.stylesheets && Wi(t, t.stylesheets), t.unsuspend) {
          var u = t.unsuspend;
          t.unsuspend = null, u();
        }
      }, 6e4 + l);
      0 < t.imgBytes && Ji === 0 && (Ji = 62500 * Mh());
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
  function S0(t) {
    if (t.count === 0 && (t.imgCount === 0 || !t.waitingForImages)) {
      if (t.stylesheets) Wi(t, t.stylesheets);
      else if (t.unsuspend) {
        var l = t.unsuspend;
        t.unsuspend = null, l();
      }
    }
  }
  function mu() {
    this.count--, S0(this);
  }
  function d1() {
    this.imgCount--, S0(this);
  }
  var $i = null;
  function Wi(t, l) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, $i = /* @__PURE__ */ new Map(), l.forEach(y1, t), $i = null, mu.call(t));
  }
  function y1(t, l) {
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
      a = l.instance, c = a.getAttribute("data-precedence"), u = e.get(c) || n, u === n && e.set(null, a), e.set(c, a), this.count++, n = mu.bind(this), a.addEventListener("load", n), a.addEventListener("error", n), u ? u.parentNode.insertBefore(a, u.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(a, t.firstChild)), l.state.loading |= 4;
    }
  }
  var ga = {
    $$typeof: Dt,
    Provider: null,
    Consumer: null,
    _currentValue: _l,
    _currentValue2: _l,
    _threadCount: 0
  };
  function m1(t, l, e, n, a, u, c, o, d) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Sc(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Sc(0), this.hiddenUpdates = Sc(null), this.identifierPrefix = n, this.onUncaughtError = a, this.onCaughtError = u, this.onRecoverableError = c, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = d, this.transitionTypes = null, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function b0(t, l, e, n, a, u, c, o, d, S, A, z) {
    return t = new m1(
      t,
      l,
      e,
      c,
      d,
      S,
      A,
      z,
      o
    ), l = 1, u === !0 && (l |= 24), u = fl(3, null, null, l), t.current = u, u.stateNode = t, l = Pc(), l.refCount++, t.pooledCache = l, l.refCount++, u.memoizedState = {
      element: n,
      isDehydrated: e,
      cache: l
    }, nf(u), t;
  }
  function p0(t) {
    return t ? (t = Vn, t) : Vn;
  }
  function T0(t, l, e, n, a, u) {
    a = p0(a), n.context === null ? n.context = a : n.pendingContext = a, n = Qe(l), n.payload = { element: e }, u = u === void 0 ? null : u, u !== null && (n.callback = u), e = Ve(t, n, l), e !== null && (dl(e, t, l), wa(e, t, l));
  }
  function E0(t, l) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var e = t.retryLane;
      t.retryLane = e !== 0 && e < l ? e : l;
    }
  }
  function Xo(t, l) {
    E0(t, l), (t = t.alternate) && E0(t, l);
  }
  function A0(t) {
    if (t.tag === 13 || t.tag === 31) {
      var l = dn(t, 67108864);
      l !== null && dl(l, t, 67108864), Xo(t, 67108864);
    }
  }
  function N0(t) {
    if (t.tag === 13 || t.tag === 31) {
      var l = Al();
      l = bc(l);
      var e = dn(t, l);
      e !== null && dl(e, t, l), Xo(t, l);
    }
  }
  var Sa = !0;
  function v1(t, l, e, n) {
    var a = Y.T;
    Y.T = null;
    var u = w.p;
    try {
      w.p = 2, Qo(t, l, e, n);
    } finally {
      w.p = u, Y.T = a;
    }
  }
  function h1(t, l, e, n) {
    var a = Y.T;
    Y.T = null;
    var u = w.p;
    try {
      w.p = 8, Qo(t, l, e, n);
    } finally {
      w.p = u, Y.T = a;
    }
  }
  function Qo(t, l, e, n) {
    if (Sa) {
      var a = Vo(n);
      if (a === null)
        Ao(
          t,
          l,
          n,
          Fi,
          e
        ), x0(t, n);
      else if (S1(
        a,
        t,
        l,
        e,
        n
      ))
        n.stopPropagation();
      else if (x0(t, n), l & 4 && -1 < g1.indexOf(t)) {
        for (; a !== null; ) {
          var u = Dn(a);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                  var c = cn(u.pendingLanes);
                  if (c !== 0) {
                    var o = u;
                    for (o.pendingLanes |= 2, o.entangledLanes |= 2; c; ) {
                      var d = 1 << 31 - hl(c);
                      o.entanglements[1] |= d, c &= ~d;
                    }
                    ue(u), (dt & 6) === 0 && (Hi = ml() + 500, cu(0));
                  }
                }
                break;
              case 31:
              case 13:
                o = dn(u, 2), o !== null && dl(o, u, 2), qi(), Xo(u, 2);
            }
          if (u = Vo(n), u === null && Ao(
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
  function Vo(t) {
    return t = xc(t), Zo(t);
  }
  var Fi = null;
  function Zo(t) {
    if (Fi = null, t = fn(t), t !== null) {
      var l = x(t);
      if (l === null) t = null;
      else {
        var e = l.tag;
        if (e === 13) {
          if (t = M(l), t !== null) return t;
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
  function z0(t) {
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
        switch (Mm()) {
          case rr:
            return 2;
          case sr:
            return 8;
          case Mu:
          case Cm:
            return 32;
          case dr:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var wo = !1, ln = null, en = null, nn = null, vu = /* @__PURE__ */ new Map(), hu = /* @__PURE__ */ new Map(), an = [], g1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function x0(t, l) {
    switch (t) {
      case "focusin":
      case "focusout":
        ln = null;
        break;
      case "dragenter":
      case "dragleave":
        en = null;
        break;
      case "mouseover":
      case "mouseout":
        nn = null;
        break;
      case "pointerover":
      case "pointerout":
        vu.delete(l.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        hu.delete(l.pointerId);
    }
  }
  function gu(t, l, e, n, a, u) {
    return t === null || t.nativeEvent !== u ? (t = {
      blockedOn: l,
      domEventName: e,
      eventSystemFlags: n,
      nativeEvent: u,
      targetContainers: [a]
    }, l !== null && (l = Dn(l), l !== null && A0(l)), t) : (t.eventSystemFlags |= n, l = t.targetContainers, a !== null && l.indexOf(a) === -1 && l.push(a), t);
  }
  function S1(t, l, e, n, a) {
    switch (l) {
      case "focusin":
        return ln = gu(
          ln,
          t,
          l,
          e,
          n,
          a
        ), !0;
      case "dragenter":
        return en = gu(
          en,
          t,
          l,
          e,
          n,
          a
        ), !0;
      case "mouseover":
        return nn = gu(
          nn,
          t,
          l,
          e,
          n,
          a
        ), !0;
      case "pointerover":
        var u = a.pointerId;
        return vu.set(
          u,
          gu(
            vu.get(u) || null,
            t,
            l,
            e,
            n,
            a
          )
        ), !0;
      case "gotpointercapture":
        return u = a.pointerId, hu.set(
          u,
          gu(
            hu.get(u) || null,
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
  function O0(t) {
    var l = fn(t.target);
    if (l !== null) {
      var e = x(l);
      if (e !== null) {
        if (l = e.tag, l === 13) {
          if (l = M(e), l !== null) {
            t.blockedOn = l, br(t.priority, function() {
              N0(e);
            });
            return;
          }
        } else if (l === 31) {
          if (l = _(e), l !== null) {
            t.blockedOn = l, br(t.priority, function() {
              N0(e);
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
      var e = Vo(t.nativeEvent);
      if (e === null) {
        e = t.nativeEvent;
        var n = new e.constructor(
          e.type,
          e
        );
        zc = n, e.target.dispatchEvent(n), zc = null;
      } else
        return l = Dn(e), l !== null && A0(l), t.blockedOn = e, !1;
      l.shift();
    }
    return !0;
  }
  function _0(t, l, e) {
    Ii(t) && e.delete(l);
  }
  function b1() {
    wo = !1, ln !== null && Ii(ln) && (ln = null), en !== null && Ii(en) && (en = null), nn !== null && Ii(nn) && (nn = null), vu.forEach(_0), hu.forEach(_0);
  }
  function ki(t, l) {
    t.blockedOn === l && (t.blockedOn = null, wo || (wo = !0, i.unstable_scheduleCallback(
      i.unstable_NormalPriority,
      b1
    )));
  }
  var Pi = null;
  function M0(t) {
    Pi !== t && (Pi = t, i.unstable_scheduleCallback(
      i.unstable_NormalPriority,
      function() {
        Pi === t && (Pi = null);
        for (var l = 0; l < t.length; l += 3) {
          var e = t[l], n = t[l + 1], a = t[l + 2];
          if (typeof n != "function") {
            if (Zo(n || e) === null)
              continue;
            break;
          }
          var u = Dn(e);
          u !== null && (t.splice(l, 3), l -= 3, zf(
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
  function ba(t) {
    function l(d) {
      return ki(d, t);
    }
    ln !== null && ki(ln, t), en !== null && ki(en, t), nn !== null && ki(nn, t), vu.forEach(l), hu.forEach(l);
    for (var e = 0; e < an.length; e++) {
      var n = an[e];
      n.blockedOn === t && (n.blockedOn = null);
    }
    for (; 0 < an.length && (e = an[0], e.blockedOn === null); )
      O0(e), e.blockedOn === null && an.shift();
    if (e = (t.ownerDocument || t).$$reactFormReplay, e != null)
      for (n = 0; n < e.length; n += 3) {
        var a = e[n], u = e[n + 1], c = a[cl] || null;
        if (typeof u == "function")
          c || M0(e);
        else if (c) {
          var o = null;
          if (u && u.hasAttribute("formAction")) {
            if (a = u, c = u[cl] || null)
              o = c.formAction;
            else if (Zo(a) !== null) continue;
          } else o = c.action;
          typeof o == "function" ? e[n + 1] = o : (e.splice(n, 3), n -= 3), M0(e);
        }
      }
  }
  function C0() {
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
  function Ko(t) {
    this._internalRoot = t;
  }
  tc.prototype.render = Ko.prototype.render = function(t) {
    var l = this._internalRoot;
    if (l === null) throw Error(r(409));
    var e = l.current, n = Al();
    T0(e, n, t, l, null, null);
  }, tc.prototype.unmount = Ko.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var l = t.containerInfo;
      T0(t.current, 2, null, t, null, null), qi(), l[Rn] = null;
    }
  };
  function tc(t) {
    this._internalRoot = t;
  }
  tc.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var l = Sr();
      t = { blockedOn: null, target: t, priority: l };
      for (var e = 0; e < an.length && l !== 0 && l < an[e].priority; e++) ;
      an.splice(e, 0, t), e === 0 && O0(t);
    }
  };
  var R0 = f.version;
  if (R0 !== "19.3.0")
    throw Error(
      r(
        527,
        R0,
        "19.3.0"
      )
    );
  w.findDOMNode = function(t) {
    var l = t._reactInternals;
    if (l === void 0)
      throw typeof t.render == "function" ? Error(r(188)) : (t = Object.keys(t).join(","), Error(r(268, t)));
    return t = J(l), t = t !== null ? j(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var p1 = {
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
        za = lc.inject(
          p1
        ), vl = lc;
      } catch {
      }
  }
  return bu.createRoot = function(t, l) {
    if (!E(t)) throw Error(r(299));
    var e = !1, n = "", a = pd, u = Td, c = Ed;
    return l != null && (l.unstable_strictMode === !0 && (e = !0), l.identifierPrefix !== void 0 && (n = l.identifierPrefix), l.onUncaughtError !== void 0 && (a = l.onUncaughtError), l.onCaughtError !== void 0 && (u = l.onCaughtError), l.onRecoverableError !== void 0 && (c = l.onRecoverableError)), l = b0(
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
      C0
    ), t[Rn] = l.current, Eo(t), new Ko(l);
  }, bu.hydrateRoot = function(t, l, e) {
    if (!E(t)) throw Error(r(299));
    var n = !1, a = "", u = pd, c = Td, o = Ed, d = null;
    return e != null && (e.unstable_strictMode === !0 && (n = !0), e.identifierPrefix !== void 0 && (a = e.identifierPrefix), e.onUncaughtError !== void 0 && (u = e.onUncaughtError), e.onCaughtError !== void 0 && (c = e.onCaughtError), e.onRecoverableError !== void 0 && (o = e.onRecoverableError), e.formState !== void 0 && (d = e.formState)), l = b0(
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
      C0
    ), l.context = p0(null), e = l.current, n = Al(), n = bc(n), a = Qe(n), a.callback = null, Ve(e, a, n), e = n, l.current.lanes = e, Oa(l, e), ue(l), t[Rn] = l.current, Eo(t), new tc(l);
  }, bu.version = "19.3.0", bu;
}
var X0;
function D1() {
  if (X0) return Wo.exports;
  X0 = 1;
  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (f) {
        console.error(f);
      }
  }
  return i(), Wo.exports = R1(), Wo.exports;
}
var j1 = D1();
function U1(i) {
  return i && typeof i == "object" ? i : typeof window > "u" ? null : window;
}
function Q0({
  snapshot: i,
  ownSeat: f = null,
  replayIndex: s = null,
  flipVertical: r = !1
} = {}) {
  const E = i && typeof i == "object" && !Array.isArray(i) ? { ...i } : {};
  return {
    ...E,
    boardCode: String(E.boardCode || ""),
    version: Number.isFinite(Number(E.version)) ? Number(E.version) : 0,
    ownSeat: f,
    replayIndex: s,
    flipVertical: !!r
  };
}
function H1({
  node: i,
  snapshot: f,
  ownSeat: s,
  replayIndex: r,
  flipVertical: E,
  onMoveClick: x,
  elmRuntime: M
} = {}) {
  const D = U1(M)?.Elm?.BoardIsland?.init;
  if (typeof D != "function" || !i)
    return {
      app: null,
      sendSnapshotUpdate: () => {
      },
      cleanup: () => {
      }
    };
  const J = Q0({
    snapshot: f,
    ownSeat: s,
    replayIndex: r,
    flipVertical: E
  }), j = D({ node: i, flags: J }), p = j?.ports?.boardMoveClicked, H = j?.ports?.boardSnapshot, nt = (tt) => {
    typeof x == "function" && x(tt);
  };
  return typeof p?.subscribe == "function" && p.subscribe(nt), { app: j, sendSnapshotUpdate: (tt) => {
    typeof H?.send == "function" && H.send(Q0(tt));
  }, cleanup: () => {
    typeof p?.unsubscribe == "function" && p.unsubscribe(nt), typeof j?.unmount == "function" && j.unmount();
  } };
}
function V0({
  snapshot: i,
  ownSeat: f,
  replayIndex: s,
  flipVertical: r,
  onMoveClick: E
}) {
  const x = al.useRef(null), M = al.useRef(null), _ = al.useRef(E);
  _.current = E;
  const D = al.useMemo(
    () => ({ snapshot: i, ownSeat: f, replayIndex: s, flipVertical: r }),
    [i, f, s, r]
  );
  return al.useEffect(() => (M.current = H1({
    node: x.current,
    ...D,
    onMoveClick: (J) => _.current?.(J)
  }), () => {
    M.current?.cleanup?.(), M.current = null;
  }), []), al.useEffect(() => {
    M.current?.sendSnapshotUpdate?.(D);
  }, [D]), /* @__PURE__ */ h.jsx("div", { ref: x, "data-testid": "elm-board-island-host" });
}
const B1 = {
  marginTop: "20px",
  padding: "18px",
  borderRadius: "20px",
  background: "#f7fbf7",
  border: "1px solid rgba(16, 42, 26, 0.08)"
}, Y1 = {
  display: "flex",
  justifyContent: "space-between",
  gap: "12px",
  alignItems: "flex-start",
  flexWrap: "wrap"
}, q1 = {
  margin: 0,
  fontSize: "1.25rem"
}, Z0 = {
  margin: "4px 0 0",
  fontSize: "0.9rem",
  color: "#567062"
}, L1 = {
  display: "inline-flex",
  alignItems: "center",
  gap: "8px",
  borderRadius: "999px",
  padding: "8px 12px",
  background: "rgba(16, 42, 26, 0.08)",
  fontWeight: 700
}, G1 = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))",
  gap: "12px",
  marginTop: "16px"
}, X1 = {
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
}, Q1 = {
  marginTop: "16px",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: "10px 16px"
}, ze = {
  paddingTop: "10px",
  borderTop: "1px solid rgba(16, 42, 26, 0.08)"
}, V1 = {
  display: "flex",
  gap: "10px",
  marginTop: "16px",
  flexWrap: "wrap"
}, pa = (i = !1) => ({
  border: "1px solid rgba(16, 42, 26, 0.12)",
  borderRadius: "999px",
  padding: "8px 14px",
  background: i ? "#fff1f1" : "#f7fbf7",
  color: i ? "#9b1c1c" : "#102a1a",
  fontWeight: 700,
  cursor: "pointer"
}), Z1 = {
  margin: "8px 0 0",
  paddingLeft: "18px",
  color: "#33513f"
};
function cm(i) {
  return i === "p1" ? "Blue" : i === "p2" ? "Red" : "Unknown";
}
function w1(i) {
  const f = String(i || "").trim();
  return f === "vacant" ? "Open" : f === "disconnected" ? "Disconnected" : f === "active" ? "Occupied" : f || "Unknown";
}
function K1(i, f) {
  return i === "p1" ? "Blue" : i === "p2" ? "Red" : f ? "Waiting List" : "Watching";
}
function J1(i) {
  return `${Number(i?.p1 || 0)} - ${Number(i?.p2 || 0)}`;
}
function $1(i) {
  if (Array.isArray(i?.moves)) return i.moves.length;
  const f = Number(i?.moveCount);
  return Number.isFinite(f) ? f : 0;
}
function W1(i) {
  const f = Math.max(0, Math.ceil(Number(i || 0) / 1e3));
  if (f < 60) return `${f}s`;
  const s = Math.ceil(f / 60);
  if (s < 60) return `${s}m`;
  const r = Math.ceil(s / 60);
  return r < 24 ? `${r}h` : `${Math.ceil(r / 24)}d`;
}
function lr(i, f, s) {
  const r = Number(i);
  if (!Number.isFinite(r) || r <= 0) return null;
  const E = r - Number(f || 0), x = W1(Math.abs(E));
  return s === "future" ? E >= 0 ? `in ${x}` : `${x} ago` : E <= 0 ? `${x} ago` : `in ${x}`;
}
function F1(i, f) {
  const s = Number(i?.moveTimeLimitMs);
  if (!Number.isFinite(s) || s <= 0) return "Untimed";
  const r = `${Math.round(s / 1e3)}s per move`, E = Number(i?.turnStartedAt);
  if (!Number.isFinite(E) || E <= 0) return r;
  const x = E + s, M = lr(x, f, "future");
  return M ? `${r} • deadline ${M}` : r;
}
function I1(i) {
  const f = Number(i?.watcherCount);
  return Number.isFinite(f) && f >= 0 ? f : null;
}
function w0(i, f) {
  const s = i?.[f] || {}, r = w1(s.status);
  return {
    id: f,
    label: `${cm(f)} seat`,
    name: r === "Open" ? null : String(s.name || "").trim() || null,
    status: r
  };
}
function k1({
  snapshot: i,
  ownSeat: f = null,
  connectionStatus: s = "idle",
  isWaitingListMember: r = !1,
  claimableSeatActions: E = [],
  leaveSeatAction: x = null,
  waitingListAction: M = null,
  pauseResumeActions: _ = [],
  newRoundAction: D = null,
  freeSeatAction: J = null,
  nowMs: j = Date.now()
} = {}) {
  if (!i || typeof i != "object") return null;
  const p = i.game && typeof i.game == "object" ? i.game : {}, H = p.players && typeof p.players == "object" ? p.players : {}, nt = Array.isArray(p.waitingList) ? p.waitingList : [], Ot = String(i.boardCode || p.roomId || "").trim(), Nt = String(p.turn || "").trim();
  return {
    boardCode: Ot,
    connectionStatus: String(s || "idle"),
    viewerRole: K1(String(f || "").trim(), r),
    seats: [w0(H, "p1"), w0(H, "p2")],
    sessionState: String(p.status || "waiting"),
    currentTurn: Nt ? cm(Nt) : "Waiting",
    score: J1(p.score),
    moveCount: $1(p),
    timerSummary: F1(p, j),
    waitingListCount: nt.length,
    waitingListNames: nt.map((tt) => String(tt?.displayName || "").trim()).filter(Boolean),
    watcherCount: I1(p),
    lastActivity: lr(p.lastActivityAt, j, "past"),
    expiry: lr(p.expiresAt, j, "future"),
    actions: {
      claimableSeatActions: Array.isArray(E) ? E : [],
      leaveSeatAction: x,
      waitingListAction: M,
      pauseResumeActions: Array.isArray(_) ? _ : [],
      newRoundAction: D,
      freeSeatAction: J
    }
  };
}
function K0({ label: i, value: f, children: s }) {
  return /* @__PURE__ */ h.jsxs("article", { style: X1, children: [
    /* @__PURE__ */ h.jsx("p", { style: ie, children: i }),
    /* @__PURE__ */ h.jsx("p", { style: ce, children: f }),
    s
  ] });
}
function P1({
  snapshot: i,
  ownSeat: f,
  connectionStatus: s,
  isWaitingListMember: r,
  claimableSeatActions: E,
  leaveSeatAction: x,
  waitingListAction: M,
  pauseResumeActions: _,
  newRoundAction: D,
  freeSeatAction: J,
  onClaimSeat: j,
  onLeaveSeat: p,
  onWaitingListAction: H,
  onPauseAction: nt,
  onResumeAction: Ot,
  onNewRoundAction: Nt,
  onFreeSeatAction: tt,
  nowMs: Ft
}) {
  const Z = k1({
    snapshot: i,
    ownSeat: f,
    connectionStatus: s,
    isWaitingListMember: r,
    claimableSeatActions: E,
    leaveSeatAction: x,
    waitingListAction: M,
    pauseResumeActions: _,
    newRoundAction: D,
    freeSeatAction: J,
    nowMs: Ft
  });
  return Z ? /* @__PURE__ */ h.jsxs("section", { style: B1, "aria-label": "Match details", children: [
    /* @__PURE__ */ h.jsxs("div", { style: Y1, children: [
      /* @__PURE__ */ h.jsxs("div", { children: [
        /* @__PURE__ */ h.jsx("h2", { style: q1, children: "Match details" }),
        /* @__PURE__ */ h.jsxs("p", { style: Z0, children: [
          "Board ",
          Z.boardCode || "not selected"
        ] })
      ] }),
      /* @__PURE__ */ h.jsx("div", { style: L1, children: Z.viewerRole })
    ] }),
    /* @__PURE__ */ h.jsxs("div", { style: G1, children: [
      /* @__PURE__ */ h.jsx(K0, { label: "Connection Status", value: Z.connectionStatus }),
      Z.seats.map((Tt) => /* @__PURE__ */ h.jsx(
        K0,
        {
          label: Tt.label,
          value: Tt.name || Tt.status,
          children: /* @__PURE__ */ h.jsxs("p", { style: Z0, children: [
            "Status: ",
            Tt.status
          ] })
        },
        Tt.id
      ))
    ] }),
    /* @__PURE__ */ h.jsxs("div", { style: Q1, children: [
      /* @__PURE__ */ h.jsxs("div", { style: ze, children: [
        /* @__PURE__ */ h.jsx("p", { style: ie, children: "Session State" }),
        /* @__PURE__ */ h.jsx("p", { style: ce, children: Z.sessionState })
      ] }),
      /* @__PURE__ */ h.jsxs("div", { style: ze, children: [
        /* @__PURE__ */ h.jsx("p", { style: ie, children: "Current Turn" }),
        /* @__PURE__ */ h.jsx("p", { style: ce, children: Z.currentTurn })
      ] }),
      /* @__PURE__ */ h.jsxs("div", { style: ze, children: [
        /* @__PURE__ */ h.jsx("p", { style: ie, children: "Score" }),
        /* @__PURE__ */ h.jsx("p", { style: ce, children: Z.score })
      ] }),
      /* @__PURE__ */ h.jsxs("div", { style: ze, children: [
        /* @__PURE__ */ h.jsx("p", { style: ie, children: "Move Count" }),
        /* @__PURE__ */ h.jsx("p", { style: ce, children: Z.moveCount })
      ] }),
      /* @__PURE__ */ h.jsxs("div", { style: ze, children: [
        /* @__PURE__ */ h.jsx("p", { style: ie, children: "Move Timer" }),
        /* @__PURE__ */ h.jsx("p", { style: ce, children: Z.timerSummary })
      ] }),
      /* @__PURE__ */ h.jsxs("div", { style: ze, children: [
        /* @__PURE__ */ h.jsx("p", { style: ie, children: "Waiting List" }),
        /* @__PURE__ */ h.jsx("p", { style: ce, children: Z.waitingListCount }),
        Z.waitingListNames.length > 0 ? /* @__PURE__ */ h.jsx("ul", { style: Z1, children: Z.waitingListNames.map((Tt) => /* @__PURE__ */ h.jsx("li", { children: Tt }, Tt)) }) : null
      ] }),
      Z.watcherCount !== null ? /* @__PURE__ */ h.jsxs("div", { style: ze, children: [
        /* @__PURE__ */ h.jsx("p", { style: ie, children: "Watchers" }),
        /* @__PURE__ */ h.jsx("p", { style: ce, children: Z.watcherCount })
      ] }) : null,
      Z.lastActivity ? /* @__PURE__ */ h.jsxs("div", { style: ze, children: [
        /* @__PURE__ */ h.jsx("p", { style: ie, children: "Last Activity" }),
        /* @__PURE__ */ h.jsx("p", { style: ce, children: Z.lastActivity })
      ] }) : null,
      Z.expiry ? /* @__PURE__ */ h.jsxs("div", { style: ze, children: [
        /* @__PURE__ */ h.jsx("p", { style: ie, children: "Expires" }),
        /* @__PURE__ */ h.jsx("p", { style: ce, children: Z.expiry })
      ] }) : null
    ] }),
    /* @__PURE__ */ h.jsxs("div", { style: V1, children: [
      Z.actions.claimableSeatActions.map((Tt) => /* @__PURE__ */ h.jsx(
        "button",
        {
          type: "button",
          style: pa(!1),
          onClick: () => j?.(Tt.seatId),
          children: Tt.label
        },
        Tt.seatId
      )),
      Z.actions.leaveSeatAction ? /* @__PURE__ */ h.jsx(
        "button",
        {
          type: "button",
          style: pa(!!Z.actions.leaveSeatAction.danger),
          onClick: () => p?.(),
          children: Z.actions.leaveSeatAction.label
        }
      ) : null,
      Z.actions.waitingListAction ? /* @__PURE__ */ h.jsx(
        "button",
        {
          type: "button",
          style: pa(!1),
          onClick: () => H?.(Z.actions.waitingListAction.type),
          children: Z.actions.waitingListAction.label
        }
      ) : null,
      Z.actions.pauseResumeActions.map((Tt) => /* @__PURE__ */ h.jsx(
        "button",
        {
          type: "button",
          style: pa(!1),
          onClick: () => {
            if (Tt.type === "pause") {
              nt?.("pause");
              return;
            }
            Ot?.("resume");
          },
          children: Tt.label
        },
        Tt.type
      )),
      Z.actions.newRoundAction ? /* @__PURE__ */ h.jsx(
        "button",
        {
          type: "button",
          style: pa(!1),
          onClick: () => Nt?.(),
          children: Z.actions.newRoundAction.label
        }
      ) : null,
      Z.actions.freeSeatAction ? /* @__PURE__ */ h.jsx(
        "button",
        {
          type: "button",
          style: pa(!1),
          onClick: () => tt?.(Z.actions.freeSeatAction.seatId),
          children: Z.actions.freeSeatAction.label
        }
      ) : null
    ] })
  ] }) : null;
}
const tg = {
  marginTop: "20px",
  padding: "18px",
  borderRadius: "20px",
  background: "#f7fbf7",
  border: "1px solid rgba(16, 42, 26, 0.08)"
}, lg = {
  margin: 0,
  fontSize: "1.1rem"
}, eg = {
  margin: "8px 0 0",
  color: "#567062",
  lineHeight: 1.5
}, ng = {
  marginTop: "14px",
  padding: "12px 14px",
  borderRadius: "14px",
  background: "#ffffff",
  border: "1px solid rgba(16, 42, 26, 0.08)",
  overflowWrap: "anywhere"
}, ag = {
  color: "#0a5f20",
  fontWeight: 700,
  textDecoration: "none"
}, ug = {
  display: "flex",
  gap: "10px",
  marginTop: "14px",
  flexWrap: "wrap",
  alignItems: "flex-start"
}, ig = {
  border: "1px solid rgba(16, 42, 26, 0.12)",
  borderRadius: "999px",
  padding: "8px 14px",
  background: "#f7fbf7",
  color: "#102a1a",
  fontWeight: 700,
  cursor: "pointer"
}, cg = {
  display: "inline-flex",
  flexDirection: "column",
  gap: "8px",
  alignItems: "center",
  textDecoration: "none",
  color: "#102a1a",
  fontWeight: 700
}, fg = {
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
function fm() {
  return globalThis.window?.navigator ?? globalThis.navigator ?? null;
}
function om() {
  return globalThis.window?.document ?? globalThis.document ?? null;
}
function rm(i) {
  return String(i || "").trim();
}
function og(i) {
  return i ? typeof i.href == "string" && i.href ? i.href : `${i.origin || ""}${i.pathname || "/react"}${i.search || ""}${i.hash || ""}` : "";
}
function ar(i, { locationLike: f = oc() } = {}) {
  const s = rm(i), r = og(f);
  if (!s || !r) return "";
  const E = new URL(r);
  return E.pathname = "/react", E.search = "", E.hash = "", E.searchParams.set("board", s), E.toString();
}
function rg(i, { locationLike: f = oc() } = {}) {
  const s = ar(i, { locationLike: f });
  return s ? `/api/qr?url=${encodeURIComponent(s)}` : "";
}
function sg(i, f) {
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
async function dg({
  boardCode: i,
  locationLike: f = oc(),
  navigatorLike: s = fm(),
  documentLike: r = om()
} = {}) {
  const E = ar(i, { locationLike: f });
  if (!E)
    return { ok: !1, error: "Share link unavailable." };
  if (typeof s?.clipboard?.writeText == "function")
    try {
      return await s.clipboard.writeText(E), { ok: !0, text: E };
    } catch {
    }
  return sg(E, r) ? { ok: !0, text: E } : { ok: !1, error: "Could not copy link. Copy it manually." };
}
function yg({
  boardCode: i,
  locationLike: f = oc(),
  navigatorLike: s = fm(),
  documentLike: r = om(),
  onToast: E
}) {
  const x = rm(i);
  if (!x) return null;
  const M = ar(x, { locationLike: f }), _ = rg(x, { locationLike: f });
  return /* @__PURE__ */ h.jsxs("section", { style: tg, "aria-label": "Share board link", children: [
    /* @__PURE__ */ h.jsx("h2", { style: lg, children: "Share" }),
    /* @__PURE__ */ h.jsx("p", { style: eg, children: "Copy the React board link or scan the QR code to open this board in the product shell." }),
    /* @__PURE__ */ h.jsx("div", { style: ng, children: /* @__PURE__ */ h.jsx("a", { href: M, style: ag, children: M }) }),
    /* @__PURE__ */ h.jsxs("div", { style: ug, children: [
      /* @__PURE__ */ h.jsx(
        "button",
        {
          type: "button",
          style: ig,
          onClick: async () => {
            const D = await dg({
              boardCode: x,
              locationLike: f,
              navigatorLike: s,
              documentLike: r
            });
            E?.(
              D.ok ? "Link copied to clipboard." : D.error || "Could not copy link. Copy it manually."
            );
          },
          children: "Copy Link"
        }
      ),
      /* @__PURE__ */ h.jsxs("a", { href: M, style: cg, children: [
        /* @__PURE__ */ h.jsx(
          "img",
          {
            src: _,
            alt: `QR code for board ${x}`,
            style: fg
          }
        ),
        "Open board link"
      ] })
    ] })
  ] });
}
const mg = {
  position: "relative",
  display: "inline-flex",
  justifyContent: "flex-end"
}, vg = {
  border: "1px solid rgba(16, 42, 26, 0.12)",
  borderRadius: "999px",
  padding: "9px 14px",
  background: "#f7fbf7",
  color: "#102a1a",
  fontWeight: 700,
  cursor: "pointer"
}, hg = {
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
}, J0 = {
  border: "1px solid rgba(16, 42, 26, 0.1)",
  borderRadius: "10px",
  padding: "8px 10px",
  textAlign: "left",
  background: "#f7fbf7",
  color: "#102a1a",
  fontWeight: 700,
  cursor: "pointer"
};
function gg({
  menuOpen: i,
  onToggle: f,
  onSelectRules: s,
  onSelectHistory: r
}) {
  return /* @__PURE__ */ h.jsxs("div", { style: mg, children: [
    /* @__PURE__ */ h.jsx(
      "button",
      {
        type: "button",
        style: vg,
        "aria-expanded": !!i,
        "aria-haspopup": "menu",
        "aria-label": i ? "Close menu" : "Open menu",
        onClick: () => f?.(!i),
        children: "Menu"
      }
    ),
    i ? /* @__PURE__ */ h.jsxs("div", { style: hg, role: "menu", "aria-label": "App menu", children: [
      /* @__PURE__ */ h.jsx(
        "button",
        {
          type: "button",
          role: "menuitem",
          style: J0,
          onClick: () => s?.(),
          children: "Rules"
        }
      ),
      /* @__PURE__ */ h.jsx(
        "button",
        {
          type: "button",
          role: "menuitem",
          style: J0,
          onClick: () => r?.(),
          children: "History"
        }
      )
    ] }) : null
  ] });
}
const Sg = {
  marginTop: "18px"
}, bg = {
  display: "grid",
  gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
  gap: "8px"
}, pg = (i) => ({
  border: "1px solid rgba(16, 42, 26, 0.12)",
  borderRadius: "999px",
  padding: "8px 10px",
  background: i ? "#102a1a" : "#f7fbf7",
  color: i ? "#f6fbf4" : "#102a1a",
  fontWeight: 700,
  cursor: "pointer",
  width: "100%"
});
function Tg({ tabs: i = [], activeTab: f = "home", onChangeTab: s }) {
  const r = Array.isArray(i) ? i : [];
  return r.length === 0 ? null : /* @__PURE__ */ h.jsx("nav", { style: Sg, "aria-label": "Shell navigation", children: /* @__PURE__ */ h.jsx("div", { style: bg, children: r.map((E) => {
    const x = String(E.id || "").trim(), M = String(E.label || x || "Tab"), _ = x === f;
    return /* @__PURE__ */ h.jsx(
      "button",
      {
        type: "button",
        style: pg(_),
        "aria-label": `Go to ${M} section`,
        "aria-current": _ ? "page" : void 0,
        onClick: () => s?.(x),
        children: M
      },
      x
    );
  }) }) });
}
const Eg = {
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
}, Ag = {
  display: "grid",
  gap: "12px",
  gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
  marginTop: "10px"
}, $0 = {
  width: "100%",
  marginTop: "6px",
  padding: "10px 12px",
  borderRadius: "12px",
  border: "1px solid rgba(16, 42, 26, 0.14)",
  fontSize: "1rem",
  boxSizing: "border-box"
}, Ng = {
  display: "flex",
  gap: "8px",
  marginTop: "8px",
  flexWrap: "wrap"
}, zg = (i) => ({
  border: "1px solid rgba(16, 42, 26, 0.12)",
  borderRadius: "999px",
  padding: "6px 12px",
  background: i ? "#102a1a" : "#ffffff",
  color: i ? "#f6fbf4" : "#102a1a",
  fontWeight: 700,
  cursor: "pointer"
}), xg = {
  marginTop: "16px",
  border: "1px solid rgba(16, 42, 26, 0.12)",
  borderRadius: "999px",
  padding: "10px 16px",
  background: "#0a8f28",
  color: "#f6fbf4",
  fontWeight: 700,
  cursor: "pointer"
}, W0 = {
  marginTop: "10px",
  fontSize: "0.9rem",
  color: "#567062",
  lineHeight: 1.5
}, Og = [0, 5, 10, 15, 20, 30];
function _g({
  blueName: i,
  redName: f,
  moveTimeLimitSeconds: s,
  onChangeBlueName: r,
  onChangeRedName: E,
  onChangeMoveTimer: x,
  onStartMatch: M,
  hasActiveMatch: _
}) {
  return /* @__PURE__ */ h.jsxs("article", { style: Eg, "data-setup-card": "local", children: [
    /* @__PURE__ */ h.jsx("p", { style: ec, children: "Local setup" }),
    /* @__PURE__ */ h.jsxs("div", { style: Ag, children: [
      /* @__PURE__ */ h.jsxs("label", { children: [
        /* @__PURE__ */ h.jsx("span", { style: ec, children: "Blue player name" }),
        /* @__PURE__ */ h.jsx(
          "input",
          {
            "aria-label": "Blue player name",
            value: i || "",
            onChange: (D) => r?.(D),
            style: $0,
            placeholder: "Blue"
          }
        )
      ] }),
      /* @__PURE__ */ h.jsxs("label", { children: [
        /* @__PURE__ */ h.jsx("span", { style: ec, children: "Red player name" }),
        /* @__PURE__ */ h.jsx(
          "input",
          {
            "aria-label": "Red player name",
            value: f || "",
            onChange: (D) => E?.(D),
            style: $0,
            placeholder: "Red"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ h.jsx("p", { style: { ...ec, marginTop: "14px" }, children: "Local move timer" }),
    /* @__PURE__ */ h.jsx("div", { style: Ng, children: Og.map((D) => /* @__PURE__ */ h.jsx(
      "button",
      {
        type: "button",
        "aria-label": D === 0 ? "No local move timer" : `${D}s local move timer`,
        style: zg(Number(s) === D),
        onClick: () => x?.(D),
        children: D === 0 ? "No timer" : `${D}s`
      },
      D
    )) }),
    /* @__PURE__ */ h.jsx("p", { style: W0, children: "Timer selection is not enforced yet." }),
    /* @__PURE__ */ h.jsx(
      "button",
      {
        type: "button",
        style: xg,
        onClick: () => M?.(),
        children: _ ? "Restart Local Match" : "Start Local Match"
      }
    ),
    /* @__PURE__ */ h.jsx("p", { style: W0, children: "Local same-screen play stays on this device. No room code, invite link, or server connection is used." })
  ] });
}
function Mg({ open: i, onClose: f }) {
  return i ? /* @__PURE__ */ h.jsxs(
    "section",
    {
      className: "react-shell-modal",
      "aria-label": "Traceball rules",
      role: "dialog",
      "aria-modal": "true",
      children: [
        /* @__PURE__ */ h.jsxs("header", { className: "react-shell-modal-header", children: [
          /* @__PURE__ */ h.jsx("h2", { children: "Rules" }),
          /* @__PURE__ */ h.jsx(
            "button",
            {
              type: "button",
              className: "react-shell-modal-close",
              onClick: f,
              children: "Close"
            }
          )
        ] }),
        /* @__PURE__ */ h.jsxs("ul", { className: "react-shell-modal-list", children: [
          /* @__PURE__ */ h.jsx("li", { children: "Ball movement is one-step movement between neighboring dots." }),
          /* @__PURE__ */ h.jsx("li", { children: "You cannot reuse a segment that has already been drawn." }),
          /* @__PURE__ */ h.jsx("li", { children: "Landing on a visited dot, boundary rebound point, or gate-mouth center dot causes a bounce and grants an extra move." }),
          /* @__PURE__ */ h.jsx("li", { children: "You score by entering the opponent gate." }),
          /* @__PURE__ */ h.jsx("li", { children: "Own goal counts for the opponent." }),
          /* @__PURE__ */ h.jsx("li", { children: "No legal moves on your turn means you lose the round." }),
          /* @__PURE__ */ h.jsx("li", { children: "In online matches, server-authoritative timers and turn control decide pause, timeout, and legality." })
        ] })
      ]
    }
  ) : null;
}
function Cg(i) {
  const f = Number(i);
  return Number.isFinite(f) && f >= 0 ? f : 0;
}
function Rg({ open: i, localHistoryCount: f = 0, onClose: s }) {
  if (!i) return null;
  const r = Cg(f);
  return /* @__PURE__ */ h.jsxs(
    "section",
    {
      className: "react-shell-modal",
      "aria-label": "Match history",
      role: "dialog",
      "aria-modal": "true",
      children: [
        /* @__PURE__ */ h.jsxs("header", { className: "react-shell-modal-header", children: [
          /* @__PURE__ */ h.jsx("h2", { children: "History" }),
          /* @__PURE__ */ h.jsx(
            "button",
            {
              type: "button",
              className: "react-shell-modal-close",
              onClick: s,
              children: "Close"
            }
          )
        ] }),
        /* @__PURE__ */ h.jsx("p", { children: "History replay will move here next." }),
        /* @__PURE__ */ h.jsxs("p", { children: [
          "Local snapshots available: ",
          r
        ] }),
        /* @__PURE__ */ h.jsx("p", { className: "react-shell-modal-note", children: "This slice is UI scaffolding only and does not claim full replay controls yet." })
      ]
    }
  );
}
function Dg(i) {
  if (typeof i != "function")
    throw new Error("Fetch API unavailable.");
  return i;
}
async function jg(i) {
  return i.json();
}
async function Ug({ clientId: i, moveTimeLimitSeconds: f }, { fetchImpl: s = globalThis.fetch } = {}) {
  const r = Dg(s), E = Number(f), x = {
    clientId: String(i || "").trim(),
    moveTimeLimitSeconds: Number.isFinite(E) ? E : 15
  }, M = await r("/api/rooms", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(x)
  });
  if (!M.ok)
    throw new Error(`Board creation failed: ${M.status}`);
  return jg(M);
}
function Hg(i = globalThis.window?.location || globalThis.location) {
  const f = i?.protocol === "https:" ? "wss:" : "ws:", s = i?.host || "localhost";
  return `${f}//${s}/ws`;
}
function Bg({
  roomId: i,
  clientId: f,
  onMessage: s,
  onStatus: r,
  WebSocketImpl: E = globalThis.window?.WebSocket || globalThis.WebSocket,
  socketUrl: x = Hg()
} = {}) {
  if (typeof E != "function")
    throw new Error("WebSocket unavailable.");
  const M = new E(x);
  return M.onopen = () => {
    r?.("connected"), M.send(
      JSON.stringify({
        type: "watch",
        roomId: String(i || "").trim(),
        clientId: String(f || "").trim()
      })
    );
  }, M.onmessage = (_) => {
    try {
      s?.(JSON.parse(_.data));
    } catch {
      s?.({ type: "error", error: "malformed websocket message" });
    }
  }, M.onerror = () => {
    r?.("error");
  }, M.onclose = () => {
    r?.("disconnected");
  }, {
    socket: M,
    send(_) {
      M.send(JSON.stringify(_));
    },
    close() {
      M.close?.();
    }
  };
}
const F0 = "traceballElmClientId", nc = "traceballPlayerName", Yg = "traceballOnlineMoveTimer";
function rc() {
  return globalThis.window?.localStorage || globalThis.localStorage;
}
function qg(i = Math.random) {
  return i().toString(36).slice(2, 12);
}
function Lg({
  storage: i = rc(),
  random: f = Math.random
} = {}) {
  const s = i?.getItem?.(F0);
  if (s) return s;
  const r = `traceball-elm-${qg(f)}`;
  return i?.setItem?.(F0, r), r;
}
function sm(i = Math.random) {
  const f = (s) => s[Math.floor(i() * s.length)];
  return `${f(["Neon", "Turbo", "Cosmic", "Lucky", "Pixel", "Rocket", "Thunder"])} ${f(["Striker", "Falcon", "Comet", "Phantom", "Kicker", "Ace", "Wizard"])}`;
}
function dm(i, f = "") {
  return String(i || "").replace(/\s+/g, " ").trim().slice(0, 24) || f;
}
function Gg({
  storage: i = rc(),
  randomName: f = sm
} = {}) {
  const s = String(i?.getItem?.(nc) || ""), r = dm(s, "");
  if (r && r !== "Elm Player")
    return i?.setItem?.(nc, r), r;
  const E = f();
  return i?.setItem?.(nc, E), E;
}
function Xg(i, { storage: f = rc(), randomName: s = sm } = {}) {
  const r = dm(i, s());
  return f?.setItem?.(nc, r), r;
}
function Qg(i, f = 15) {
  const s = Number(i);
  return Number.isFinite(s) && s >= 0 ? s : f;
}
function Vg({
  storage: i = rc(),
  fallback: f = 15
} = {}) {
  return Qg(
    i?.getItem?.(Yg),
    f
  );
}
const Ta = 9, fe = 13, uc = 0, ic = fe - 1, Au = 3, Nu = 5, cc = { x: 4, y: 6 }, Zg = [0, 5e3, 1e4, 15e3, 2e4, 3e4], wg = 15e3, Kg = 10080 * 60 * 1e3;
function Jg(i, f = {}) {
  const s = Number.isFinite(f.now) ? f.now : Date.now();
  return {
    roomId: i,
    creatorClientId: bm(f.creatorClientId),
    status: "waiting",
    players: { p1: zu("p1"), p2: zu("p2") },
    turn: "p1",
    ball: { ...cc },
    visited: [Ea(cc)],
    segments: [],
    moves: [],
    score: { p1: 0, p2: 0 },
    winner: null,
    endReason: null,
    moveTimeLimitMs: Ig(
      f.moveTimeLimitMs ?? uS(f.moveTimeLimitSeconds),
      wg
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
function $g(i) {
  return {
    roomId: i.roomId,
    status: i.status,
    players: lS(i.players),
    watchers: [],
    waitingList: eS(i.waitingList),
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
    timeoutStreaks: mm(i),
    pause: i.pause || null,
    sessionId: i.sessionId || null,
    sessionStartedAt: i.sessionStartedAt || null,
    sessionEndedAt: i.sessionEndedAt || null,
    history: Array.isArray(i.history) ? i.history.slice(-10) : [],
    historyCount: Array.isArray(i.history) ? i.history.length : 0,
    createdAt: i.createdAt ?? null,
    updatedAt: i.updatedAt ?? null,
    lastActivityAt: ym(i),
    expiresAt: Wg(i),
    legalMoves: i.status === "playing" ? vm(i) : [],
    board: {
      width: Ta,
      height: fe,
      goalXMin: Au,
      goalXMax: Nu
    }
  };
}
function ym(i) {
  return Number(i?.updatedAt ?? i?.createdAt ?? 0);
}
function mm(i) {
  const f = i.timeoutStreaks || {};
  return i.timeoutStreaks = {
    p1: Number(f.p1 || 0),
    p2: Number(f.p2 || 0)
  }, i.timeoutStreaks;
}
function Wg(i) {
  return ym(i) + Kg;
}
function I0(i, f, s, r, E = Date.now()) {
  if (ur(i), !["p1", "p2"].includes(f))
    return { ok: !1, error: "Invalid seat." };
  const x = bm(r), M = nS(s, f);
  if (x) {
    for (const _ of ["p1", "p2"])
      if (i.players[_]?.clientId === x)
        return i.players[_].name = M, i.players[_].status = "active", i.players[_].disconnectedAt = null, i.players[_].canBeFreedAt = null, P0(i, x), tm(i, x), fc(i, E), { ok: !0, playerId: _, rejoined: !0 };
  }
  return i.players[f]?.status === "disconnected" ? {
    ok: !1,
    error: "That seat is reserved for the disconnected player."
  } : gm(i.players[f]) ? { ok: !1, error: "That seat is already occupied." } : (i.players[f] = {
    ...zu(f),
    name: M,
    clientId: x,
    status: "active"
  }, P0(i, x), tm(i, x), Sm(i) && i.status === "waiting" && tS(i, E), fc(i, E), { ok: !0, playerId: f });
}
function Fg(i, f, s, r = Date.now()) {
  if (i.status !== "playing")
    return { ok: !1, error: "Game is not playing." };
  if (kg(i, r))
    return { ok: !1, error: "Time expired.", timeout: !0 };
  if (i.turn !== f) return { ok: !1, error: "Not your turn." };
  const E = i.ball, x = iS(s);
  if (!x) return { ok: !1, error: "Invalid target." };
  if (!cS(E, x))
    return { ok: !1, error: "Move one point in any of 8 directions." };
  if (!pm(x))
    return { ok: !1, error: "Move stays on the pitch or through a gate." };
  if (Am(i, E, x))
    return { ok: !1, error: "That line was already used." };
  if (Tm(E, x))
    return { ok: !1, error: "The margin line is already traced." };
  if (Em(E, x))
    return { ok: !1, error: "Cannot cut through the outside corner." };
  i.consecutiveTimeouts = 0, mm(i)[f] = 0, i.pause = null;
  const M = i.visited.includes(Ea(x)), _ = fS(x), D = Nm(E, x);
  i.segments.push(D), i.ball = x, M || i.visited.push(Ea(x));
  const J = {
    playerId: f,
    from: E,
    to: x,
    segment: D,
    bounce: !1,
    at: r
  }, j = oS(f, x);
  if (j)
    return i.status = "finished", i.turnStartedAt = null, lm(i, j.winner, j.reason), J.goal = !0, i.moves.push(J), fc(i, r), { ok: !0, gameOver: !0 };
  const p = M || _;
  if (J.bounce = p, i.moves.push(J), p || (i.turn = er(f)), vm(i).length === 0) {
    i.status = "finished", i.turnStartedAt = null;
    const nt = er(i.turn);
    lm(
      i,
      nt,
      `${em(i, i.turn)} is stuck — ${em(i, nt)} wins.`
    );
  } else
    hm(i, r);
  return fc(i, r), { ok: !0, bounce: p };
}
function vm(i) {
  const f = [];
  for (let s = -1; s <= 1; s += 1)
    for (let r = -1; r <= 1; r += 1) {
      if (r === 0 && s === 0) continue;
      const E = { x: i.ball.x + r, y: i.ball.y + s };
      pm(E) && !Am(i, i.ball, E) && !Tm(i.ball, E) && !Em(i.ball, E) && f.push(E);
    }
  return f;
}
function Ig(i, f = 0) {
  const s = Number(i);
  if (!Number.isFinite(s)) return f;
  const r = Math.round(s);
  return Zg.includes(r) ? r : f;
}
function hm(i, f = Date.now()) {
  i.turnStartedAt = i.status === "playing" && i.moveTimeLimitMs > 0 ? f : null;
}
function kg(i, f = Date.now()) {
  return i.status === "playing" && i.moveTimeLimitMs > 0 && Number.isFinite(i.turnStartedAt) && f - i.turnStartedAt >= i.moveTimeLimitMs;
}
function zu(i) {
  return {
    id: i,
    name: i === "p1" ? "Blue" : "Red",
    color: i === "p1" ? "#0b7cff" : "#ff3b30",
    clientId: null,
    status: "vacant"
  };
}
function gm(i) {
  return i?.status === "active";
}
function Pg(i) {
  return ur(i), ["p1", "p2"].filter((f) => gm(i.players[f])).length;
}
function Sm(i) {
  return Pg(i) === 2;
}
function tS(i, f = Date.now()) {
  return ur(i), Sm(i) ? (i.status = "playing", i.turn = "p1", i.ball = { ...cc }, i.visited = [Ea(cc)], i.segments = [], i.moves = [], i.score = { p1: 0, p2: 0 }, i.winner = null, i.endReason = null, i.sessionId = aS(f), i.sessionStartedAt = f, i.sessionEndedAt = null, i.lastTimeout = null, i.consecutiveTimeouts = 0, i.timeoutStreaks = { p1: 0, p2: 0 }, i.pause = null, hm(i, f), i.updatedAt = f, { ok: !0 }) : { ok: !1, error: "Both seats must be filled before starting." };
}
function lS(i = {}) {
  return {
    p1: k0(i.p1, "p1"),
    p2: k0(i.p2, "p2")
  };
}
function k0(i, f) {
  const s = i || zu(f), r = s.canBeFreedAt ?? null;
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
function eS(i = []) {
  return Array.isArray(i) ? i.map((f) => ({
    displayName: String(f?.displayName || f?.name || "Guest").slice(
      0,
      24
    ),
    joinedAt: Number.isFinite(f?.joinedAt) ? f.joinedAt : null
  })) : [];
}
function ur(i) {
  i.players = i.players || {};
  for (const f of ["p1", "p2"])
    i.players[f] ? i.players[f].status || (i.players[f].status = "active") : i.players[f] = zu(f), i.players[f].color || (i.players[f].color = f === "p1" ? "#0b7cff" : "#ff3b30"), i.players[f].id || (i.players[f].id = f);
  Array.isArray(i.history) || (i.history = []), Array.isArray(i.waitingList) || (i.waitingList = []);
}
function bm(i) {
  return String(i || "").trim().slice(0, 80) || null;
}
function nS(i, f) {
  return String(i || "").trim().slice(0, 24) || (f === "p1" ? "Blue" : f === "p2" ? "Red" : "Guest");
}
function fc(i, f = Date.now()) {
  i.updatedAt = f, i.version = Number(i.version || 0) + 1;
}
function aS(i = Date.now()) {
  return `session-${i}-${Math.random().toString(36).slice(2, 8)}`;
}
function P0(i, f) {
  !f || !Array.isArray(i.watcherClientIds) || (i.watcherClientIds = i.watcherClientIds.filter((s) => s !== f));
}
function tm(i, f) {
  !f || !Array.isArray(i.waitingList) || (i.waitingList = i.waitingList.filter(
    (s) => s.clientId !== f
  ));
}
function lm(i, f, s) {
  i.winner || (i.winner = f, i.endReason = s, i.score = i.score || { p1: 0, p2: 0 }, i.score[f] = (i.score[f] || 0) + 1);
}
function em(i, f) {
  return i.players[f]?.name || f;
}
function er(i) {
  return i === "p1" ? "p2" : "p1";
}
function Ea(i) {
  return `${i.x},${i.y}`;
}
function uS(i) {
  if (!(i == null || i === ""))
    return Number(i) * 1e3;
}
function iS(i) {
  const f = Number(i?.x), s = Number(i?.y);
  return !Number.isInteger(f) || !Number.isInteger(s) ? null : { x: f, y: s };
}
function cS(i, f) {
  const s = Math.abs(i.x - f.x), r = Math.abs(i.y - f.y);
  return s <= 1 && r <= 1 && s + r > 0;
}
function pm(i) {
  const f = i.x >= 0 && i.x < Ta && i.y > uc && i.y < ic, s = i.x >= Au && i.x <= Nu && (i.y === uc || i.y === ic);
  return f || s;
}
function fS(i) {
  return i.x === 0 || i.x === Ta - 1 || i.y === 1 || i.y === fe - 2;
}
function Tm(i, f) {
  const s = Math.abs(i.x - f.x), r = Math.abs(i.y - f.y);
  return s + r !== 1 ? !1 : i.x === f.x && (i.x === 0 || i.x === Ta - 1) && i.y >= 1 && i.y <= fe - 2 && f.y >= 1 && f.y <= fe - 2 ? !0 : i.y === f.y && (i.y === 1 || i.y === fe - 2) && i.x >= 0 && i.x < Ta && f.x >= 0 && f.x < Ta ? !(Math.min(i.x, f.x) >= Au && Math.max(i.x, f.x) <= Nu) : !1;
}
function Em(i, f) {
  if (!(Math.abs(i.x - f.x) === 1 && Math.abs(i.y - f.y) === 1)) return !1;
  const r = i.y === 1 && f.y === 0 || i.y === 0 && f.y === 1, E = i.y === fe - 2 && f.y === fe - 1 || i.y === fe - 1 && f.y === fe - 2;
  return !!((r || E) && (f.x < Au || f.x > Nu || i.x < Au || i.x > Nu));
}
function Am(i, f, s) {
  return i.segments.includes(Nm(f, s));
}
function Nm(i, f) {
  const s = Ea(i), r = Ea(f);
  return s < r ? `${s}|${r}` : `${r}|${s}`;
}
function oS(i, f) {
  if (f.y !== uc && f.y !== ic) return null;
  const s = i === "p1";
  return s && f.y === uc || !s && f.y === ic ? { winner: i, reason: `${i} scored!` } : { winner: er(i), reason: `Own goal by ${i}.` };
}
const zm = "LOCAL", rS = "local-blue", sS = "local-red";
function nm(i, f) {
  return String(i || "").trim() || f;
}
function dS({
  blueName: i,
  redName: f,
  moveTimeLimitSeconds: s
} = {}) {
  const r = Jg(zm, {
    moveTimeLimitSeconds: Number(s) || 0
  });
  return I0(r, "p1", nm(i, "Blue"), rS), I0(r, "p2", nm(f, "Red"), sS), r;
}
function ac(i) {
  return !i || typeof i != "object" ? null : {
    boardCode: zm,
    version: Number(i.version) || 0,
    game: $g(i)
  };
}
function yS(i = {}) {
  const f = dS(i);
  return { game: f, snapshot: ac(f) };
}
function mS(i) {
  const f = i?.point;
  if (!f || typeof f != "object") return null;
  const s = Number(f.x), r = Number(f.y);
  return !Number.isFinite(s) || !Number.isFinite(r) ? null : { x: s, y: r };
}
function vS({ game: i, payload: f } = {}) {
  if (!i || typeof i != "object")
    return { ok: !1, error: "Start a local match first.", snapshot: null };
  const s = mS(f);
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
  } : { ...Fg(i, r, s), snapshot: ac(i) };
}
function hS(i) {
  const f = String(i?.game?.turn || "").trim();
  return f === "p1" || f === "p2" ? f : null;
}
function gS({
  clientId: i = "",
  playerName: f = "",
  connectionStatus: s = "idle",
  currentBoardCode: r = "",
  isWaitingListMember: E = !1,
  boardState: x = null,
  boardList: M = [],
  mainTab: _ = "home",
  mode: D = "online",
  toast: J = null,
  onlineMoveTimer: j = 15,
  localMoveTimer: p = 15,
  localBlueName: H = "",
  localRedName: nt = "",
  localSnapshot: Ot = null,
  historyPanelOpen: Nt = !1,
  rulesPanelOpen: tt = !1
} = {}) {
  return {
    clientId: i,
    playerName: f,
    connectionStatus: s,
    currentBoardCode: r,
    isWaitingListMember: E,
    boardState: x,
    boardList: M,
    mainTab: _,
    mode: D,
    toast: J,
    onlineSetup: {
      moveTimeLimitSeconds: j
    },
    localSetup: {
      moveTimeLimitSeconds: p,
      blueName: H,
      redName: nt
    },
    localSnapshot: Ot,
    historyPanelOpen: Nt,
    rulesPanelOpen: tt
  };
}
function SS(i, f, s) {
  if (!s || typeof s != "object") return !1;
  const r = String(i || "").trim(), E = String(s.boardCode || "").trim();
  if (r && E && r !== E) return !1;
  if (!f || typeof f != "object") return !0;
  const x = String(f.boardCode || "").trim();
  if (!x || x !== E) return !0;
  const M = Number(f.version), _ = Number(s.version);
  return Number.isFinite(M) ? Number.isFinite(_) ? _ > M : !1 : !0;
}
function bS(i, f) {
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
      return SS(
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
const pS = {
  minHeight: "100vh",
  display: "grid",
  placeItems: "center",
  padding: "32px 20px",
  background: "radial-gradient(circle at top, rgba(10, 143, 40, 0.18), transparent 38%), linear-gradient(180deg, #f6fbf4 0%, #e4f0e2 100%)",
  color: "#102a1a"
}, TS = {
  width: "min(720px, 100%)",
  borderRadius: "24px",
  padding: "28px",
  background: "rgba(255, 255, 255, 0.92)",
  boxShadow: "0 24px 70px rgba(16, 42, 26, 0.16)",
  border: "1px solid rgba(16, 42, 26, 0.08)"
}, ES = {
  margin: 0,
  fontSize: "0.85rem",
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: "#0a8f28",
  fontWeight: 700
}, AS = {
  margin: "10px 0 12px",
  fontSize: "clamp(2rem, 4vw, 3.25rem)",
  lineHeight: 1.05
}, am = {
  margin: 0,
  fontSize: "1.05rem",
  lineHeight: 1.6,
  color: "#33513f"
}, NS = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
  gap: "14px",
  marginTop: "24px"
}, xe = {
  padding: "16px",
  borderRadius: "18px",
  background: "#f7fbf7",
  border: "1px solid rgba(16, 42, 26, 0.08)"
}, wl = {
  margin: 0,
  fontSize: "0.78rem",
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  color: "#567062"
}, Oe = {
  margin: "8px 0 0",
  fontSize: "1rem",
  fontWeight: 700,
  wordBreak: "break-word"
}, zS = {
  width: "100%",
  marginTop: "10px",
  padding: "12px 14px",
  borderRadius: "12px",
  border: "1px solid rgba(16, 42, 26, 0.14)",
  fontSize: "1rem",
  boxSizing: "border-box"
}, Po = {
  display: "flex",
  gap: "10px",
  marginTop: "18px",
  flexWrap: "wrap"
}, pu = (i) => ({
  border: "1px solid rgba(16, 42, 26, 0.12)",
  borderRadius: "999px",
  padding: "8px 14px",
  background: i ? "#102a1a" : "#f7fbf7",
  color: i ? "#f6fbf4" : "#102a1a",
  fontWeight: 700,
  cursor: "pointer"
}), _e = {
  marginTop: "18px",
  padding: "16px",
  borderRadius: "16px",
  background: "#eef7f0",
  border: "1px dashed rgba(16, 42, 26, 0.18)",
  color: "#153124",
  fontWeight: 600
}, xS = {
  marginTop: "24px",
  padding: "16px 18px",
  borderRadius: "18px",
  background: "#102a1a",
  color: "#f6fbf4",
  lineHeight: 1.55
}, OS = {
  marginTop: "18px",
  display: "grid",
  gap: "14px"
}, Tu = {
  padding: "18px",
  borderRadius: "18px",
  background: "#f7fbf7",
  border: "1px solid rgba(16, 42, 26, 0.08)"
}, Eu = {
  margin: "0 0 10px",
  fontSize: "1.2rem"
}, um = {
  display: "grid",
  gap: "10px",
  gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))"
}, _S = {
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
function MS(i) {
  const f = Number(i);
  return Number.isFinite(f) ? f : 0;
}
function ir(i) {
  const f = i?.game?.players;
  return f && typeof f == "object" ? f : null;
}
function CS(i) {
  const f = String(i || "").trim();
  return f === "active" || f === "disconnected";
}
function RS(i) {
  return i === "p1" ? "Claim Blue" : "Claim Red";
}
function DS(i) {
  return i?.game?.status === "playing" || i?.game?.status === "paused";
}
function jS() {
  return globalThis.window?.history ?? globalThis.history ?? null;
}
function cr() {
  return globalThis.window?.location ?? globalThis.location ?? null;
}
function US(i) {
  return i ? typeof i.href == "string" && i.href ? i.href : `${i.origin || "http://localhost"}${i.pathname || "/react"}${i.search || ""}${i.hash || ""}` : "";
}
function HS({
  locationLike: i = cr()
} = {}) {
  const f = US(i);
  if (!f) return "";
  const s = new URL(f);
  return Me(
    s.searchParams.get("board") || s.searchParams.get("room") || s.searchParams.get("code") || ""
  );
}
function BS(i) {
  if (!i || typeof i != "object" || String(i.type || "") !== "state") return null;
  const f = Me(i.boardCode || i.roomId), s = i.board && typeof i.board == "object", r = i.game && typeof i.game == "object";
  return !f || !s && !r ? null : {
    boardCode: f,
    version: MS(i.version),
    ...s ? { board: i.board } : {},
    ...r ? { game: i.game } : {}
  };
}
function YS(i, { historyLike: f = jS(), locationLike: s = cr() } = {}) {
  if (!s || typeof f?.replaceState != "function")
    return null;
  const r = typeof s.href == "string" && s.href ? s.href : `${s.origin || "http://localhost"}${s.pathname || "/react"}${s.search || ""}${s.hash || ""}`, E = new URL(r);
  E.pathname = "/react", i ? E.searchParams.set("board", String(i).trim()) : E.searchParams.delete("board");
  const x = `${E.pathname}${E.search}${E.hash}`;
  return f.replaceState(f.state ?? null, "", x), x;
}
function qS({
  currentBoardCode: i,
  clientId: f,
  dispatch: s,
  onOwnSeat: r,
  onMessage: E,
  connect: x = Bg
}) {
  const M = Me(i);
  return !M || typeof x != "function" ? null : x({
    roomId: M,
    clientId: String(f || ""),
    onStatus(_) {
      s?.({ type: "setConnectionStatus", status: _ });
    },
    onMessage(_) {
      if (E?.(_), _?.type === "joined") {
        const J = String(_.playerId || "").trim();
        (J === "p1" || J === "p2") && (r?.(J), s?.({ type: "setWaitingListMembership", isMember: !1 }));
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
      const D = BS(_);
      D && s?.({ type: "receiveBoardState", boardState: D });
    }
  });
}
function tr({
  roomId: i,
  clientId: f,
  dispatch: s,
  setOwnSeat: r,
  connectionRef: E,
  activeBoardRef: x,
  onMessage: M,
  connect: _ = qS
}) {
  const D = Me(i);
  if (!D || typeof _ != "function") return null;
  if (x?.current === D && E?.current)
    return E.current;
  E?.current?.close?.(), E && (E.current = null), x && (x.current = D), r?.(null);
  const J = _({
    currentBoardCode: D,
    clientId: f,
    dispatch: s,
    onOwnSeat: r,
    onMessage: M
  });
  return E && (E.current = J), J;
}
function LS({ snapshot: i, ownSeat: f } = {}) {
  const s = String(f || "").trim();
  if (s === "p1" || s === "p2") return [];
  const r = ir(i);
  return r ? ["p1", "p2"].filter((E) => r?.[E]?.status === "vacant").map((E) => ({ seatId: E, label: RS(E) })) : [];
}
function GS({ ownSeat: i, snapshot: f } = {}) {
  const s = String(i || "").trim();
  return s !== "p1" && s !== "p2" ? null : DS(f) ? { label: "Leave Seat (Forfeit)", danger: !0 } : { label: "Leave Seat", danger: !1 };
}
function XS({
  ownSeat: i,
  snapshot: f,
  isWaitingListMember: s
} = {}) {
  const r = String(i || "").trim();
  if (r === "p1" || r === "p2") return null;
  if (s)
    return { type: "leave", label: "Leave Waiting List" };
  const E = ir(f);
  return E && ["p1", "p2"].every(
    (M) => CS(E?.[M]?.status)
  ) ? { type: "join", label: "Join Waiting List" } : null;
}
function QS({ ownSeat: i, snapshot: f } = {}) {
  const s = String(i || "").trim();
  if (s !== "p1" && s !== "p2") return [];
  const r = String(f?.game?.status || "").trim();
  return r === "playing" ? f?.game?.turn === s ? [{ type: "pause", label: "Pause Game" }] : [] : r === "paused" ? (f?.game?.pause?.resumeTurn || f?.game?.pause?.byPlayerId || null) === s ? [{ type: "resume", label: "Resume Game" }] : [] : [];
}
function VS({ ownSeat: i, snapshot: f } = {}) {
  const s = String(i || "").trim();
  if (s !== "p1" && s !== "p2") return null;
  const r = String(f?.game?.status || "").trim();
  return r === "finished" ? { label: "Continue", reason: "between-rounds" } : r === "paused" && f?.game?.pause?.byPlayerId === s ? { label: "Start New Round", reason: "paused-owner" } : null;
}
function ZS({ ownSeat: i, snapshot: f } = {}) {
  const s = String(i || "").trim();
  if (s !== "p1" && s !== "p2") return null;
  const r = s === "p1" ? "p2" : "p1", x = ir(f)?.[r];
  return !x || x.status !== "disconnected" || !x.canBeFreed ? null : { seatId: r, label: "Make Seat Available" };
}
function wS({
  clientId: i,
  dispatch: f,
  startWatching: s,
  locationLike: r = cr()
}) {
  const E = HS({ locationLike: r });
  return E ? (f?.({ type: "setCurrentBoardCode", boardCode: E }), s?.({
    roomId: E,
    clientId: i,
    onMessage(x) {
      x?.type === "BoardNotFound" && typeof x.message == "string" && f?.({ type: "setToast", toast: x.message }), x?.type === "error" && typeof x.error == "string" && f?.({ type: "setToast", toast: x.error });
    }
  })) : null;
}
function KS(i) {
  const f = i?.point;
  if (!f || typeof f != "object") return null;
  const s = Number(f.x), r = Number(f.y);
  return !Number.isFinite(s) || !Number.isFinite(r) ? null : { x: s, y: r };
}
function Ce(i) {
  return typeof i?.send == "function" && Number(i?.socket?.readyState) === 1;
}
function JS({
  payload: i,
  ownSeat: f,
  connection: s,
  dispatch: r
}) {
  if (!Ce(s)) {
    r?.({
      type: "setToast",
      toast: "Connection unavailable. Reconnect to move."
    });
    return;
  }
  const E = String(f || "").trim();
  if (E !== "p1" && E !== "p2") {
    r?.({ type: "setToast", toast: "Join a seat to move." });
    return;
  }
  const x = KS(i);
  if (!x) {
    r?.({ type: "setToast", toast: "Invalid move target." });
    return;
  }
  try {
    s.send({ type: "move", to: x });
  } catch {
    r?.({
      type: "setToast",
      toast: "Move could not be sent. Reconnect and try again."
    });
  }
}
function $S({
  seatId: i,
  currentBoardCode: f,
  clientId: s,
  playerName: r,
  connection: E,
  dispatch: x
}) {
  if (!Ce(E)) {
    x?.({
      type: "setToast",
      toast: "Connection unavailable. Reconnect to claim a seat."
    });
    return;
  }
  const M = String(i || "").trim();
  if (M !== "p1" && M !== "p2") {
    x?.({ type: "setToast", toast: "Invalid seat selection." });
    return;
  }
  E.send({
    type: "claimSeat",
    seatId: M,
    name: String(r || "").trim(),
    roomId: Me(f),
    clientId: String(s || "").trim()
  });
}
function WS({
  currentBoardCode: i,
  clientId: f,
  playerName: s,
  connection: r,
  dispatch: E
}) {
  if (!Ce(r)) {
    E?.({
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
function FS({
  currentBoardCode: i,
  clientId: f,
  connection: s,
  dispatch: r
}) {
  if (!Ce(s)) {
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
function IS({ ownSeat: i, connection: f, dispatch: s }) {
  const r = String(i || "").trim();
  if (r !== "p1" && r !== "p2") {
    s?.({ type: "setToast", toast: "You are not occupying a seat." });
    return;
  }
  if (!Ce(f)) {
    s?.({
      type: "setToast",
      toast: "Connection unavailable. Reconnect to leave your seat."
    });
    return;
  }
  f.send({ type: "leave" });
}
function kS({ ownSeat: i, connection: f, dispatch: s }) {
  const r = String(i || "").trim();
  if (r !== "p1" && r !== "p2") {
    s?.({ type: "setToast", toast: "You are not occupying a seat." });
    return;
  }
  if (!Ce(f)) {
    s?.({
      type: "setToast",
      toast: "Connection unavailable. Reconnect to pause."
    });
    return;
  }
  f.send({ type: "pause" });
}
function PS({ ownSeat: i, connection: f, dispatch: s }) {
  const r = String(i || "").trim();
  if (r !== "p1" && r !== "p2") {
    s?.({ type: "setToast", toast: "You are not occupying a seat." });
    return;
  }
  if (!Ce(f)) {
    s?.({
      type: "setToast",
      toast: "Connection unavailable. Reconnect to resume."
    });
    return;
  }
  f.send({ type: "resume" });
}
function tb({ ownSeat: i, connection: f, dispatch: s }) {
  const r = String(i || "").trim();
  if (r !== "p1" && r !== "p2") {
    s?.({ type: "setToast", toast: "You are not occupying a seat." });
    return;
  }
  if (!Ce(f)) {
    s?.({
      type: "setToast",
      toast: "Connection unavailable. Reconnect to continue."
    });
    return;
  }
  f.send({ type: "reset" });
}
function lb({ ownSeat: i, seatId: f, connection: s, dispatch: r }) {
  const E = String(i || "").trim();
  if (E !== "p1" && E !== "p2") {
    r?.({ type: "setToast", toast: "You are not occupying a seat." });
    return;
  }
  const x = String(f || "").trim();
  if (x !== "p1" && x !== "p2") {
    r?.({ type: "setToast", toast: "Invalid seat." });
    return;
  }
  if (!Ce(s)) {
    r?.({
      type: "setToast",
      toast: "Connection unavailable. Reconnect to free the seat."
    });
    return;
  }
  s.send({ type: "freeSeat", seatId: x });
}
async function eb({
  clientId: i,
  moveTimeLimitSeconds: f,
  dispatch: s,
  create: r = Ug,
  syncUrl: E = YS,
  startWatching: x,
  refreshBoardList: M
}) {
  try {
    const _ = await r({ clientId: i, moveTimeLimitSeconds: f }), D = Me(_?.roomId);
    if (!D)
      throw new Error("Board creation response missing roomId.");
    return s?.({ type: "setCurrentBoardCode", boardCode: D }), E?.(D), x?.({ roomId: D, clientId: i }), await M?.(), _;
  } catch (_) {
    return s?.({
      type: "setToast",
      toast: _ instanceof Error && _.message ? _.message : "Board creation failed."
    }), null;
  }
}
function nb({
  blueName: i,
  redName: f,
  moveTimeLimitSeconds: s,
  dispatch: r,
  localGameRef: E,
  createMatch: x = yS
}) {
  const { game: M, snapshot: _ } = x({
    blueName: i,
    redName: f,
    moveTimeLimitSeconds: s
  });
  return E && (E.current = M), r?.({ type: "startLocalMatch", snapshot: _ }), _;
}
function ab({
  payload: i,
  localGameRef: f,
  dispatch: s,
  applyMove: r = vS
}) {
  const E = f?.current, { error: x, snapshot: M } = r({ game: E, payload: i });
  M && s?.({ type: "receiveLocalGameState", snapshot: M }), x && s?.({ type: "setToast", toast: x });
}
function ub({ initialState: i }) {
  const [f, s] = al.useReducer(bS, i), [r, E] = al.useState(null), [x, M] = al.useState(!1), _ = al.useRef(null), D = al.useRef(""), J = al.useRef(null), j = i?.demoBoardSnapshot || null, p = f.boardState || j, H = String(f.connectionStatus || "idle"), nt = f.mode === "local", Ot = hS(f.localSnapshot), Nt = f.localSnapshot?.game?.status === "finished", tt = LS({
    snapshot: p,
    ownSeat: r
  }), Ft = GS({
    ownSeat: r,
    snapshot: p
  }), Z = XS({
    ownSeat: r,
    snapshot: p,
    isWaitingListMember: f.isWaitingListMember
  }), Tt = QS({
    ownSeat: r,
    snapshot: p
  }), zl = VS({
    ownSeat: r,
    snapshot: p
  }), xl = ZS({
    ownSeat: r,
    snapshot: p
  });
  al.useEffect(() => {
    const I = wS({
      clientId: f.clientId,
      dispatch: s,
      startWatching: ({ roomId: Ct, clientId: Yt, onMessage: St }) => tr({
        roomId: Ct,
        clientId: Yt,
        dispatch: s,
        setOwnSeat: E,
        connectionRef: _,
        activeBoardRef: D,
        onMessage: St
      })
    });
    return () => {
      _.current === I && I && (D.current = "", _.current = null, I.close?.());
    };
  }, []), al.useEffect(() => {
    const I = Me(f.currentBoardCode);
    if (!I) {
      _.current = null, E(null), s({ type: "setConnectionStatus", status: "idle" });
      return;
    }
    let Ct = null;
    try {
      Ct = tr({
        roomId: I,
        clientId: f.clientId,
        dispatch: s,
        setOwnSeat: E,
        connectionRef: _,
        activeBoardRef: D,
        onMessage: null
      });
    } catch {
      D.current = "", _.current = null, s({ type: "setConnectionStatus", status: "error" });
      return;
    }
    return () => {
      _.current === Ct && (D.current = "", _.current = null, Ct?.close?.());
    };
  }, [f.currentBoardCode, f.clientId]);
  const kt = f.clientId && f.clientId.length > 6 ? `...${f.clientId.slice(-6)}` : "identity ready", k = (I) => {
    const Ct = I.target.value;
    s({ type: "setPlayerName", playerName: Ct }), Xg(Ct);
  }, ft = async () => {
    await eb({
      clientId: f.clientId,
      moveTimeLimitSeconds: f.onlineSetup.moveTimeLimitSeconds,
      dispatch: s,
      startWatching: ({ roomId: I, clientId: Ct }) => tr({
        roomId: I,
        clientId: Ct,
        dispatch: s,
        setOwnSeat: E,
        connectionRef: _,
        activeBoardRef: D
      })
    });
  }, Ol = (I) => {
    s({ type: "setLocalBlueName", name: I.target.value });
  }, ul = (I) => {
    s({ type: "setLocalRedName", name: I.target.value });
  }, il = (I) => {
    s({ type: "setLocalMoveTimer", seconds: I });
  }, Pt = () => {
    nb({
      blueName: f.localSetup.blueName,
      redName: f.localSetup.redName,
      moveTimeLimitSeconds: f.localSetup.moveTimeLimitSeconds,
      dispatch: s,
      localGameRef: J
    });
  }, Kl = (I) => {
    ab({ payload: I, localGameRef: J, dispatch: s });
  }, oe = (I) => {
    $S({
      seatId: I,
      currentBoardCode: f.currentBoardCode,
      clientId: f.clientId,
      playerName: f.playerName,
      connection: _.current,
      dispatch: s
    });
  }, Dt = () => {
    IS({
      ownSeat: r,
      connection: _.current,
      dispatch: s
    });
  }, R = (I) => {
    if (I === "join") {
      WS({
        currentBoardCode: f.currentBoardCode,
        clientId: f.clientId,
        playerName: f.playerName,
        connection: _.current,
        dispatch: s
      });
      return;
    }
    FS({
      currentBoardCode: f.currentBoardCode,
      clientId: f.clientId,
      connection: _.current,
      dispatch: s
    });
  }, X = () => {
    kS({
      ownSeat: r,
      connection: _.current,
      dispatch: s
    });
  }, V = () => {
    PS({
      ownSeat: r,
      connection: _.current,
      dispatch: s
    });
  }, mt = () => {
    tb({
      ownSeat: r,
      connection: _.current,
      dispatch: s
    });
  }, rt = (I) => {
    lb({
      ownSeat: r,
      seatId: I,
      connection: _.current,
      dispatch: s
    });
  }, yl = (I) => {
    s({ type: "setToast", toast: I });
  }, ql = Array.isArray(p?.game?.moves) ? p.game.moves.length : 0, Jl = () => {
    M(!1), s({ type: "setHistoryPanelOpen", open: !1 }), s({ type: "setRulesPanelOpen", open: !0 });
  }, m = () => {
    M(!1), s({ type: "setRulesPanelOpen", open: !1 }), s({ type: "setHistoryPanelOpen", open: !0 });
  }, O = () => {
    s({ type: "setRulesPanelOpen", open: !1 });
  }, L = () => {
    s({ type: "setHistoryPanelOpen", open: !1 });
  }, q = [
    { id: "home", label: "Home" },
    { id: "play", label: "Play" },
    { id: "match", label: "Match" },
    f.currentBoardCode ? { id: "share", label: "Share" } : { id: "menu", label: "Menu" }
  ], F = new Set(q.map((I) => I.id)).has(f.mainTab) ? f.mainTab : "home", ot = F === "home", Y = F === "play", w = F === "match", _l = F === "share", Aa = F === "menu";
  return /* @__PURE__ */ h.jsx("main", { style: pS, children: /* @__PURE__ */ h.jsxs("section", { style: TS, children: [
    /* @__PURE__ */ h.jsxs(
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
          /* @__PURE__ */ h.jsxs("div", { style: { flex: "1 1 420px", minWidth: 0 }, children: [
            /* @__PURE__ */ h.jsx("p", { style: ES, children: "React product shell" }),
            /* @__PURE__ */ h.jsx("h1", { style: AS, children: "Traceball Arena" }),
            /* @__PURE__ */ h.jsx("p", { style: am, children: "The React shell owns product state while Elm renders the board island. Online authority remains on the server." })
          ] }),
          /* @__PURE__ */ h.jsx(
            gg,
            {
              menuOpen: x,
              onToggle: M,
              onSelectRules: Jl,
              onSelectHistory: m
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ h.jsx(
      Tg,
      {
        tabs: q,
        activeTab: F,
        onChangeTab: (I) => s({ type: "setMainTab", mainTab: I })
      }
    ),
    /* @__PURE__ */ h.jsxs("div", { style: { marginTop: "16px" }, children: [
      /* @__PURE__ */ h.jsx("p", { style: wl, children: "Active Tab" }),
      /* @__PURE__ */ h.jsx("p", { style: Oe, children: F })
    ] }),
    /* @__PURE__ */ h.jsxs("div", { style: OS, className: "shell-sections", children: [
      /* @__PURE__ */ h.jsxs(
        "section",
        {
          style: Tu,
          className: "shell-section-card",
          "data-section": "home",
          "data-visible": ot ? "true" : "false",
          children: [
            /* @__PURE__ */ h.jsx("h2", { style: Eu, children: "Home setup" }),
            /* @__PURE__ */ h.jsxs("div", { style: NS, children: [
              /* @__PURE__ */ h.jsxs("article", { style: xe, children: [
                /* @__PURE__ */ h.jsx("p", { style: wl, children: "Player Name" }),
                /* @__PURE__ */ h.jsx(
                  "input",
                  {
                    "aria-label": "Player name",
                    value: f.playerName || "",
                    onChange: k,
                    style: zS,
                    placeholder: "Enter your name"
                  }
                )
              ] }),
              /* @__PURE__ */ h.jsxs("article", { style: xe, children: [
                /* @__PURE__ */ h.jsx("p", { style: wl, children: "Client Identity" }),
                /* @__PURE__ */ h.jsx("p", { style: Oe, children: kt })
              ] })
            ] }),
            /* @__PURE__ */ h.jsxs("div", { style: { marginTop: "16px" }, children: [
              /* @__PURE__ */ h.jsx("p", { style: wl, children: "Selected Mode" }),
              /* @__PURE__ */ h.jsxs("div", { style: Po, children: [
                /* @__PURE__ */ h.jsx(
                  "button",
                  {
                    type: "button",
                    style: pu(f.mode === "online"),
                    onClick: () => s({ type: "setMode", mode: "online" }),
                    children: "Online"
                  }
                ),
                /* @__PURE__ */ h.jsx(
                  "button",
                  {
                    type: "button",
                    style: pu(f.mode === "local"),
                    onClick: () => s({ type: "setMode", mode: "local" }),
                    children: "Local"
                  }
                )
              ] })
            ] }),
            f.mode === "online" ? /* @__PURE__ */ h.jsxs(
              "article",
              {
                style: { ...xe, marginTop: "14px" },
                "data-setup-card": "online",
                children: [
                  /* @__PURE__ */ h.jsx("p", { style: wl, children: "Online setup" }),
                  /* @__PURE__ */ h.jsxs("p", { style: Oe, children: [
                    "Move timer: ",
                    f.onlineSetup.moveTimeLimitSeconds,
                    "s"
                  ] }),
                  /* @__PURE__ */ h.jsx("div", { style: Po, children: /* @__PURE__ */ h.jsx(
                    "button",
                    {
                      type: "button",
                      style: pu(!1),
                      onClick: ft,
                      children: "Create Board"
                    }
                  ) })
                ]
              }
            ) : /* @__PURE__ */ h.jsx(
              _g,
              {
                blueName: f.localSetup.blueName,
                redName: f.localSetup.redName,
                moveTimeLimitSeconds: f.localSetup.moveTimeLimitSeconds,
                onChangeBlueName: Ol,
                onChangeRedName: ul,
                onChangeMoveTimer: il,
                onStartMatch: Pt,
                hasActiveMatch: !!f.localSnapshot
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ h.jsxs(
        "section",
        {
          style: Tu,
          className: "shell-section-card",
          "data-section": "play",
          "data-visible": Y ? "true" : "false",
          children: [
            /* @__PURE__ */ h.jsx("h2", { style: Eu, children: "Play" }),
            nt ? null : /* @__PURE__ */ h.jsxs("div", { style: um, children: [
              /* @__PURE__ */ h.jsxs("article", { style: xe, children: [
                /* @__PURE__ */ h.jsx("p", { style: wl, children: "Board" }),
                /* @__PURE__ */ h.jsx("p", { style: Oe, children: f.currentBoardCode || "Not selected" })
              ] }),
              /* @__PURE__ */ h.jsxs("article", { style: xe, children: [
                /* @__PURE__ */ h.jsx("p", { style: wl, children: "Connection" }),
                /* @__PURE__ */ h.jsxs("p", { style: Oe, children: [
                  /* @__PURE__ */ h.jsx(
                    "span",
                    {
                      style: {
                        ..._S,
                        background: H === "connected" ? "#0a8f28" : H === "error" ? "#d64545" : "#9aa79e"
                      }
                    }
                  ),
                  H
                ] })
              ] })
            ] }),
            nt ? f.localSnapshot ? /* @__PURE__ */ h.jsx("div", { style: _e, children: /* @__PURE__ */ h.jsx(
              V0,
              {
                snapshot: f.localSnapshot,
                ownSeat: Ot,
                replayIndex: null,
                flipVertical: !1,
                onMoveClick: Kl
              }
            ) }) : /* @__PURE__ */ h.jsx("div", { style: _e, children: "Start a local match from Home to play on this device." }) : p ? /* @__PURE__ */ h.jsx("div", { style: _e, children: /* @__PURE__ */ h.jsx(
              V0,
              {
                snapshot: p,
                ownSeat: r,
                replayIndex: null,
                flipVertical: !1,
                onMoveClick: (I) => {
                  console.info("Board move click", I), JS({
                    payload: I,
                    ownSeat: r,
                    connection: _.current,
                    dispatch: s
                  });
                }
              }
            ) }) : /* @__PURE__ */ h.jsx("div", { style: _e, children: "Board island not mounted yet" }),
            nt && Nt ? /* @__PURE__ */ h.jsx("div", { style: _e, children: "Round over. Start a new local match from Home to play again." }) : null
          ]
        }
      ),
      /* @__PURE__ */ h.jsxs(
        "section",
        {
          style: Tu,
          className: "shell-section-card",
          "data-section": "match",
          "data-visible": w ? "true" : "false",
          children: [
            /* @__PURE__ */ h.jsx("h2", { style: Eu, children: "Match" }),
            nt ? f.localSnapshot ? /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
              /* @__PURE__ */ h.jsxs("div", { style: um, children: [
                /* @__PURE__ */ h.jsxs("article", { style: xe, children: [
                  /* @__PURE__ */ h.jsx("p", { style: wl, children: "Blue" }),
                  /* @__PURE__ */ h.jsx("p", { style: Oe, children: f.localSnapshot.game?.players?.p1?.name || "Blue" })
                ] }),
                /* @__PURE__ */ h.jsxs("article", { style: xe, children: [
                  /* @__PURE__ */ h.jsx("p", { style: wl, children: "Red" }),
                  /* @__PURE__ */ h.jsx("p", { style: Oe, children: f.localSnapshot.game?.players?.p2?.name || "Red" })
                ] }),
                /* @__PURE__ */ h.jsxs("article", { style: xe, children: [
                  /* @__PURE__ */ h.jsx("p", { style: wl, children: "Score" }),
                  /* @__PURE__ */ h.jsxs("p", { style: Oe, children: [
                    Number(f.localSnapshot.game?.score?.p1 || 0),
                    " -",
                    " ",
                    Number(f.localSnapshot.game?.score?.p2 || 0)
                  ] })
                ] }),
                /* @__PURE__ */ h.jsxs("article", { style: xe, children: [
                  /* @__PURE__ */ h.jsx("p", { style: wl, children: "Turn" }),
                  /* @__PURE__ */ h.jsx("p", { style: Oe, children: f.localSnapshot.game?.turn === "p2" ? "Red" : "Blue" })
                ] })
              ] }),
              Nt ? /* @__PURE__ */ h.jsx("div", { style: _e, children: "Round over. Start a new local match from Home to play again." }) : null
            ] }) : /* @__PURE__ */ h.jsx("div", { style: _e, children: "Start a local match from Home to see match details." }) : p ? /* @__PURE__ */ h.jsx(
              P1,
              {
                snapshot: p,
                ownSeat: r,
                connectionStatus: H,
                isWaitingListMember: f.isWaitingListMember,
                claimableSeatActions: tt,
                leaveSeatAction: Ft,
                waitingListAction: Z,
                pauseResumeActions: Tt,
                newRoundAction: zl,
                freeSeatAction: xl,
                onClaimSeat: oe,
                onLeaveSeat: Dt,
                onWaitingListAction: R,
                onPauseAction: X,
                onResumeAction: V,
                onNewRoundAction: mt,
                onFreeSeatAction: rt
              }
            ) : /* @__PURE__ */ h.jsx("div", { style: _e, children: "Open or create a board to view match details." })
          ]
        }
      ),
      f.currentBoardCode ? /* @__PURE__ */ h.jsxs(
        "section",
        {
          style: Tu,
          className: "shell-section-card",
          "data-section": "share",
          "data-visible": _l ? "true" : "false",
          children: [
            /* @__PURE__ */ h.jsx("h2", { style: Eu, children: "Share" }),
            _l ? /* @__PURE__ */ h.jsx(
              yg,
              {
                boardCode: f.currentBoardCode,
                onToast: yl
              }
            ) : null
          ]
        }
      ) : /* @__PURE__ */ h.jsxs(
        "section",
        {
          style: Tu,
          className: "shell-section-card",
          "data-section": "menu",
          "data-visible": Aa ? "true" : "false",
          children: [
            /* @__PURE__ */ h.jsx("h2", { style: Eu, children: "Menu" }),
            /* @__PURE__ */ h.jsx("p", { style: am, children: "Open lightweight product panels." }),
            /* @__PURE__ */ h.jsxs("div", { style: Po, children: [
              /* @__PURE__ */ h.jsx(
                "button",
                {
                  type: "button",
                  style: pu(!1),
                  onClick: Jl,
                  children: "Rules"
                }
              ),
              /* @__PURE__ */ h.jsx(
                "button",
                {
                  type: "button",
                  style: pu(!1),
                  onClick: m,
                  children: "History"
                }
              )
            ] })
          ]
        }
      )
    ] }),
    f.toast ? /* @__PURE__ */ h.jsx("div", { style: { ..._e, marginTop: "10px" }, children: f.toast }) : null,
    /* @__PURE__ */ h.jsx(Mg, { open: f.rulesPanelOpen, onClose: O }),
    /* @__PURE__ */ h.jsx(
      Rg,
      {
        open: f.historyPanelOpen,
        localHistoryCount: ql,
        onClose: L
      }
    ),
    /* @__PURE__ */ h.jsx("div", { style: xS, children: "Elm remains the board and replay correctness surface. The server remains authoritative for seats, timers, pause/resume, winners, and online move validation." })
  ] }) });
}
const im = document.getElementById("react-root");
if (im) {
  const i = gS({
    clientId: Lg(),
    playerName: Gg(),
    onlineMoveTimer: Vg()
  });
  j1.createRoot(im).render(
    /* @__PURE__ */ h.jsx(x1.StrictMode, { children: /* @__PURE__ */ h.jsx(ub, { initialState: i }) })
  );
}
typeof navigator < "u" && "serviceWorker" in navigator && navigator.serviceWorker.register("/sw.js").then((i) => {
  i.update?.().catch?.(() => {
  }), i.waiting && i.waiting.postMessage({ type: "SKIP_WAITING" });
}).catch(() => {
});
