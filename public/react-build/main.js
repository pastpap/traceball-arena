function T1(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var Mo = { exports: {} }, fn = {};
var cv;
function b1() {
  if (cv) return fn;
  cv = 1;
  var r = /* @__PURE__ */ Symbol.for("react.transitional.element"), S = /* @__PURE__ */ Symbol.for("react.fragment");
  function b(o, N, p) {
    var H = null;
    if (p !== void 0 && (H = "" + p), N.key !== void 0 && (H = "" + N.key), "key" in N) {
      p = {};
      for (var X in N)
        X !== "key" && (p[X] = N[X]);
    } else p = N;
    return N = p.ref, {
      $$typeof: r,
      type: o,
      key: H,
      ref: N !== void 0 ? N : null,
      props: p
    };
  }
  return fn.Fragment = S, fn.jsx = b, fn.jsxs = b, fn;
}
var ov;
function E1() {
  return ov || (ov = 1, Mo.exports = b1()), Mo.exports;
}
var x = E1(), Co = { exports: {} }, J = {};
var rv;
function z1() {
  if (rv) return J;
  rv = 1;
  var r = /* @__PURE__ */ Symbol.for("react.transitional.element"), S = /* @__PURE__ */ Symbol.for("react.portal"), b = /* @__PURE__ */ Symbol.for("react.fragment"), o = /* @__PURE__ */ Symbol.for("react.strict_mode"), N = /* @__PURE__ */ Symbol.for("react.profiler"), p = /* @__PURE__ */ Symbol.for("react.consumer"), H = /* @__PURE__ */ Symbol.for("react.context"), X = /* @__PURE__ */ Symbol.for("react.forward_ref"), Z = /* @__PURE__ */ Symbol.for("react.suspense"), tl = /* @__PURE__ */ Symbol.for("react.memo"), U = /* @__PURE__ */ Symbol.for("react.lazy"), E = /* @__PURE__ */ Symbol.for("react.activity"), B = /* @__PURE__ */ Symbol.for("react.view_transition"), El = Symbol.iterator;
  function Jl(d) {
    return d === null || typeof d != "object" ? null : (d = El && d[El] || d["@@iterator"], typeof d == "function" ? d : null);
  }
  var ql = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, G = Object.assign, zl = {};
  function $l(d, _, j) {
    this.props = d, this.context = _, this.refs = zl, this.updater = j || ql;
  }
  $l.prototype.isReactComponent = {}, $l.prototype.setState = function(d, _) {
    if (typeof d != "object" && typeof d != "function" && d != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, d, _, "setState");
  }, $l.prototype.forceUpdate = function(d) {
    this.updater.enqueueForceUpdate(this, d, "forceUpdate");
  };
  function lu() {
  }
  lu.prototype = $l.prototype;
  function xt(d, _, j) {
    this.props = d, this.context = _, this.refs = zl, this.updater = j || ql;
  }
  var Gt = xt.prototype = new lu();
  Gt.constructor = xt, G(Gt, $l.prototype), Gt.isPureReactComponent = !0;
  var nt = Array.isArray;
  function W() {
  }
  var fl = { H: null, A: null, T: null, S: null }, Xt = Object.prototype.hasOwnProperty;
  function Tt(d, _, j) {
    var q = j.ref;
    return {
      $$typeof: r,
      type: d,
      key: _,
      ref: q !== void 0 ? q : null,
      props: j
    };
  }
  function bt(d, _) {
    return Tt(d.type, _, d.props);
  }
  function ft(d) {
    return typeof d == "object" && d !== null && d.$$typeof === r;
  }
  function Su(d) {
    var _ = { "=": "=0", ":": "=2" };
    return "$" + d.replace(/[=:]/g, function(j) {
      return _[j];
    });
  }
  var $u = /\/+/g;
  function Rl(d, _) {
    return typeof d == "object" && d !== null && d.key != null ? Su("" + d.key) : _.toString(36);
  }
  function M(d) {
    switch (d.status) {
      case "fulfilled":
        return d.value;
      case "rejected":
        throw d.reason;
      default:
        switch (typeof d.status == "string" ? d.then(W, W) : (d.status = "pending", d.then(
          function(_) {
            d.status === "pending" && (d.status = "fulfilled", d.value = _);
          },
          function(_) {
            d.status === "pending" && (d.status = "rejected", d.reason = _);
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
  function V(d, _, j, q, el) {
    var al = typeof d;
    (al === "undefined" || al === "boolean") && (d = null);
    var il = !1;
    if (d === null) il = !0;
    else
      switch (al) {
        case "bigint":
        case "string":
        case "number":
          il = !0;
          break;
        case "object":
          switch (d.$$typeof) {
            case r:
            case S:
              il = !0;
              break;
            case U:
              return il = d._init, V(
                il(d._payload),
                _,
                j,
                q,
                el
              );
          }
      }
    if (il)
      return el = el(d), il = q === "" ? "." + Rl(d, 0) : q, nt(el) ? (j = "", il != null && (j = il.replace($u, "$&/") + "/"), V(el, _, j, "", function(uu) {
        return uu;
      })) : el != null && (ft(el) && (el = bt(
        el,
        j + (el.key == null || d && d.key === el.key ? "" : ("" + el.key).replace(
          $u,
          "$&/"
        ) + "/") + il
      )), _.push(el)), 1;
    il = 0;
    var R = q === "" ? "." : q + ":";
    if (nt(d))
      for (var K = 0; K < d.length; K++)
        q = d[K], al = R + Rl(q, K), il += V(
          q,
          _,
          j,
          al,
          el
        );
    else if (K = Jl(d), typeof K == "function")
      for (d = K.call(d), K = 0; !(q = d.next()).done; )
        q = q.value, al = R + Rl(q, K++), il += V(
          q,
          _,
          j,
          al,
          el
        );
    else if (al === "object") {
      if (typeof d.then == "function")
        return V(
          M(d),
          _,
          j,
          q,
          el
        );
      throw _ = String(d), Error(
        "Objects are not valid as a React child (found: " + (_ === "[object Object]" ? "object with keys {" + Object.keys(d).join(", ") + "}" : _) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return il;
  }
  function L(d, _, j) {
    if (d == null) return d;
    var q = [], el = 0;
    return V(d, q, "", "", function(al) {
      return _.call(j, al, el++);
    }), q;
  }
  function ml(d) {
    if (d._status === -1) {
      var _ = d._result, j = _();
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
  var ol = typeof reportError == "function" ? reportError : function(d) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var _ = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof d == "object" && d !== null && typeof d.message == "string" ? String(d.message) : String(d),
        error: d
      });
      if (!window.dispatchEvent(_)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", d);
      return;
    }
    console.error(d);
  };
  function Dt(d) {
    var _ = fl.T, j = {};
    j.types = _ !== null ? _.types : null, fl.T = j;
    try {
      var q = d(), el = fl.S;
      el !== null && el(j, q), typeof q == "object" && q !== null && typeof q.then == "function" && q.then(W, ol);
    } catch (al) {
      ol(al);
    } finally {
      _ !== null && j.types !== null && (_.types = j.types), fl.T = _;
    }
  }
  function tu(d) {
    var _ = fl.T;
    if (_ !== null) {
      var j = _.types;
      j === null ? _.types = [d] : j.indexOf(d) === -1 && j.push(d);
    } else Dt(tu.bind(null, d));
  }
  var Fu = {
    map: L,
    forEach: function(d, _, j) {
      L(
        d,
        function() {
          _.apply(this, arguments);
        },
        j
      );
    },
    count: function(d) {
      var _ = 0;
      return L(d, function() {
        _++;
      }), _;
    },
    toArray: function(d) {
      return L(d, function(_) {
        return _;
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
  return J.Activity = E, J.Children = Fu, J.Component = $l, J.Fragment = b, J.Profiler = N, J.PureComponent = xt, J.StrictMode = o, J.Suspense = Z, J.ViewTransition = B, J.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = fl, J.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(d) {
      return fl.H.useMemoCache(d);
    }
  }, J.addTransitionType = tu, J.cache = function(d) {
    return function() {
      return d.apply(null, arguments);
    };
  }, J.cacheSignal = function() {
    return null;
  }, J.cloneElement = function(d, _, j) {
    if (d == null)
      throw Error(
        "The argument must be a React element, but you passed " + d + "."
      );
    var q = G({}, d.props), el = d.key;
    if (_ != null)
      for (al in _.key !== void 0 && (el = "" + _.key), _)
        !Xt.call(_, al) || al === "key" || al === "__self" || al === "__source" || al === "ref" && _.ref === void 0 || (q[al] = _[al]);
    var al = arguments.length - 2;
    if (al === 1) q.children = j;
    else if (1 < al) {
      for (var il = Array(al), R = 0; R < al; R++)
        il[R] = arguments[R + 2];
      q.children = il;
    }
    return Tt(d.type, el, q);
  }, J.createContext = function(d) {
    return d = {
      $$typeof: H,
      _currentValue: d,
      _currentValue2: d,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, d.Provider = d, d.Consumer = {
      $$typeof: p,
      _context: d
    }, d;
  }, J.createElement = function(d, _, j) {
    var q, el = {}, al = null;
    if (_ != null)
      for (q in _.key !== void 0 && (al = "" + _.key), _)
        Xt.call(_, q) && q !== "key" && q !== "__self" && q !== "__source" && (el[q] = _[q]);
    var il = arguments.length - 2;
    if (il === 1) el.children = j;
    else if (1 < il) {
      for (var R = Array(il), K = 0; K < il; K++)
        R[K] = arguments[K + 2];
      el.children = R;
    }
    if (d && d.defaultProps)
      for (q in il = d.defaultProps, il)
        el[q] === void 0 && (el[q] = il[q]);
    return Tt(d, al, el);
  }, J.createRef = function() {
    return { current: null };
  }, J.forwardRef = function(d) {
    return { $$typeof: X, render: d };
  }, J.isValidElement = ft, J.lazy = function(d) {
    return {
      $$typeof: U,
      _payload: { _status: -1, _result: d },
      _init: ml
    };
  }, J.memo = function(d, _) {
    return {
      $$typeof: tl,
      type: d,
      compare: _ === void 0 ? null : _
    };
  }, J.startTransition = Dt, J.unstable_useCacheRefresh = function() {
    return fl.H.useCacheRefresh();
  }, J.use = function(d) {
    return fl.H.use(d);
  }, J.useActionState = function(d, _, j) {
    return fl.H.useActionState(d, _, j);
  }, J.useCallback = function(d, _) {
    return fl.H.useCallback(d, _);
  }, J.useContext = function(d) {
    return fl.H.useContext(d);
  }, J.useDebugValue = function() {
  }, J.useDeferredValue = function(d, _) {
    return fl.H.useDeferredValue(d, _);
  }, J.useEffect = function(d, _) {
    return fl.H.useEffect(d, _);
  }, J.useEffectEvent = function(d) {
    return fl.H.useEffectEvent(d);
  }, J.useId = function() {
    return fl.H.useId();
  }, J.useImperativeHandle = function(d, _, j) {
    return fl.H.useImperativeHandle(d, _, j);
  }, J.useInsertionEffect = function(d, _) {
    return fl.H.useInsertionEffect(d, _);
  }, J.useLayoutEffect = function(d, _) {
    return fl.H.useLayoutEffect(d, _);
  }, J.useMemo = function(d, _) {
    return fl.H.useMemo(d, _);
  }, J.useOptimistic = function(d, _) {
    return fl.H.useOptimistic(d, _);
  }, J.useReducer = function(d, _, j) {
    return fl.H.useReducer(d, _, j);
  }, J.useRef = function(d) {
    return fl.H.useRef(d);
  }, J.useState = function(d) {
    return fl.H.useState(d);
  }, J.useSyncExternalStore = function(d, _, j) {
    return fl.H.useSyncExternalStore(
      d,
      _,
      j
    );
  }, J.useTransition = function() {
    return fl.H.useTransition();
  }, J.version = "19.3.0", J;
}
var sv;
function jo() {
  return sv || (sv = 1, Co.exports = z1()), Co.exports;
}
var St = jo();
const O1 = /* @__PURE__ */ T1(St);
var Do = { exports: {} }, cn = {}, Uo = { exports: {} }, Ro = {};
var dv;
function _1() {
  return dv || (dv = 1, (function(r) {
    function S(M, V) {
      var L = M.length;
      M.push(V);
      l: for (; 0 < L; ) {
        var ml = L - 1 >>> 1, ol = M[ml];
        if (0 < N(ol, V))
          M[ml] = V, M[L] = ol, L = ml;
        else break l;
      }
    }
    function b(M) {
      return M.length === 0 ? null : M[0];
    }
    function o(M) {
      if (M.length === 0) return null;
      var V = M[0], L = M.pop();
      if (L !== V) {
        M[0] = L;
        l: for (var ml = 0, ol = M.length, Dt = ol >>> 1; ml < Dt; ) {
          var tu = 2 * (ml + 1) - 1, Fu = M[tu], d = tu + 1, _ = M[d];
          if (0 > N(Fu, L))
            d < ol && 0 > N(_, Fu) ? (M[ml] = _, M[d] = L, ml = d) : (M[ml] = Fu, M[tu] = L, ml = tu);
          else if (d < ol && 0 > N(_, L))
            M[ml] = _, M[d] = L, ml = d;
          else break l;
        }
      }
      return V;
    }
    function N(M, V) {
      var L = M.sortIndex - V.sortIndex;
      return L !== 0 ? L : M.id - V.id;
    }
    if (r.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var p = performance;
      r.unstable_now = function() {
        return p.now();
      };
    } else {
      var H = Date, X = H.now();
      r.unstable_now = function() {
        return H.now() - X;
      };
    }
    var Z = [], tl = [], U = 1, E = null, B = 3, El = !1, Jl = !1, ql = !1, G = !1, zl = typeof setTimeout == "function" ? setTimeout : null, $l = typeof clearTimeout == "function" ? clearTimeout : null, lu = typeof setImmediate < "u" ? setImmediate : null;
    function xt(M) {
      for (var V = b(tl); V !== null; ) {
        if (V.callback === null) o(tl);
        else if (V.startTime <= M)
          o(tl), V.sortIndex = V.expirationTime, S(Z, V);
        else break;
        V = b(tl);
      }
    }
    function Gt(M) {
      if (ql = !1, xt(M), !Jl)
        if (b(Z) !== null)
          Jl = !0, nt || (nt = !0, ft());
        else {
          var V = b(tl);
          V !== null && Rl(Gt, V.startTime - M);
        }
    }
    var nt = !1, W = -1, fl = 5, Xt = -1;
    function Tt() {
      return G ? !0 : !(r.unstable_now() - Xt < fl);
    }
    function bt() {
      if (G = !1, nt) {
        var M = r.unstable_now();
        Xt = M;
        var V = !0;
        try {
          l: {
            Jl = !1, ql && (ql = !1, $l(W), W = -1), El = !0;
            var L = B;
            try {
              t: {
                for (xt(M), E = b(Z); E !== null && !(E.expirationTime > M && Tt()); ) {
                  var ml = E.callback;
                  if (typeof ml == "function") {
                    E.callback = null, B = E.priorityLevel;
                    var ol = ml(
                      E.expirationTime <= M
                    );
                    if (M = r.unstable_now(), typeof ol == "function") {
                      E.callback = ol, xt(M), V = !0;
                      break t;
                    }
                    E === b(Z) && o(Z), xt(M);
                  } else o(Z);
                  E = b(Z);
                }
                if (E !== null) V = !0;
                else {
                  var Dt = b(tl);
                  Dt !== null && Rl(
                    Gt,
                    Dt.startTime - M
                  ), V = !1;
                }
              }
              break l;
            } finally {
              E = null, B = L, El = !1;
            }
            V = void 0;
          }
        } finally {
          V ? ft() : nt = !1;
        }
      }
    }
    var ft;
    if (typeof lu == "function")
      ft = function() {
        lu(bt);
      };
    else if (typeof MessageChannel < "u") {
      var Su = new MessageChannel(), $u = Su.port2;
      Su.port1.onmessage = bt, ft = function() {
        $u.postMessage(null);
      };
    } else
      ft = function() {
        zl(bt, 0);
      };
    function Rl(M, V) {
      W = zl(function() {
        M(r.unstable_now());
      }, V);
    }
    r.unstable_IdlePriority = 5, r.unstable_ImmediatePriority = 1, r.unstable_LowPriority = 4, r.unstable_NormalPriority = 3, r.unstable_Profiling = null, r.unstable_UserBlockingPriority = 2, r.unstable_cancelCallback = function(M) {
      M.callback = null;
    }, r.unstable_forceFrameRate = function(M) {
      0 > M || 125 < M ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : fl = 0 < M ? Math.floor(1e3 / M) : 5;
    }, r.unstable_getCurrentPriorityLevel = function() {
      return B;
    }, r.unstable_next = function(M) {
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
        return M();
      } finally {
        B = L;
      }
    }, r.unstable_requestPaint = function() {
      G = !0;
    }, r.unstable_runWithPriority = function(M, V) {
      switch (M) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          M = 3;
      }
      var L = B;
      B = M;
      try {
        return V();
      } finally {
        B = L;
      }
    }, r.unstable_scheduleCallback = function(M, V, L) {
      var ml = r.unstable_now();
      switch (typeof L == "object" && L !== null ? (L = L.delay, L = typeof L == "number" && 0 < L ? ml + L : ml) : L = ml, M) {
        case 1:
          var ol = -1;
          break;
        case 2:
          ol = 250;
          break;
        case 5:
          ol = 1073741823;
          break;
        case 4:
          ol = 1e4;
          break;
        default:
          ol = 5e3;
      }
      return ol = L + ol, M = {
        id: U++,
        callback: V,
        priorityLevel: M,
        startTime: L,
        expirationTime: ol,
        sortIndex: -1
      }, L > ml ? (M.sortIndex = L, S(tl, M), b(Z) === null && M === b(tl) && (ql ? ($l(W), W = -1) : ql = !0, Rl(Gt, L - ml))) : (M.sortIndex = ol, S(Z, M), Jl || El || (Jl = !0, nt || (nt = !0, ft()))), M;
    }, r.unstable_shouldYield = Tt, r.unstable_wrapCallback = function(M) {
      var V = B;
      return function() {
        var L = B;
        B = V;
        try {
          return M.apply(this, arguments);
        } finally {
          B = L;
        }
      };
    };
  })(Ro)), Ro;
}
var vv;
function N1() {
  return vv || (vv = 1, Uo.exports = _1()), Uo.exports;
}
var Ho = { exports: {} }, Kl = {};
var yv;
function A1() {
  if (yv) return Kl;
  yv = 1;
  var r = jo();
  function S(U) {
    var E = "https://react.dev/errors/" + U;
    if (1 < arguments.length) {
      E += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var B = 2; B < arguments.length; B++)
        E += "&args[]=" + encodeURIComponent(arguments[B]);
    }
    return "Minified React error #" + U + "; visit " + E + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function b() {
  }
  var o = {
    d: {
      f: b,
      r: function() {
        throw Error(S(522));
      },
      D: b,
      C: b,
      L: b,
      m: b,
      X: b,
      S: b,
      M: b
    },
    p: 0,
    findDOMNode: null
  }, N = /* @__PURE__ */ Symbol.for("react.portal"), p = /* @__PURE__ */ Symbol.for("react.recoverable"), H = /* @__PURE__ */ Symbol.for("react.optimistic_key");
  function X(U, E, B) {
    var El = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: N,
      key: El == null ? null : El === H ? H : "" + El,
      children: U,
      containerInfo: E,
      implementation: B
    };
  }
  var Z = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function tl(U, E) {
    if (U === "font") return "";
    if (typeof E == "string")
      return E === "use-credentials" ? E : "";
  }
  return Kl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, Kl.browser = function(U) {
    return { $$typeof: p, _reason: U };
  }, Kl.createPortal = function(U, E) {
    var B = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!E || E.nodeType !== 1 && E.nodeType !== 9 && E.nodeType !== 11)
      throw Error(S(299));
    return X(U, E, null, B);
  }, Kl.flushSync = function(U) {
    var E = Z.T, B = o.p;
    try {
      if (Z.T = null, o.p = 2, U) return U();
    } finally {
      Z.T = E, o.p = B, o.d.f();
    }
  }, Kl.preconnect = function(U, E) {
    typeof U == "string" && (E ? (E = E.crossOrigin, E = typeof E == "string" ? E === "use-credentials" ? E : "" : void 0) : E = null, o.d.C(U, E));
  }, Kl.prefetchDNS = function(U) {
    typeof U == "string" && o.d.D(U);
  }, Kl.preinit = function(U, E) {
    if (typeof U == "string" && E && typeof E.as == "string") {
      var B = E.as, El = tl(B, E.crossOrigin), Jl = typeof E.integrity == "string" ? E.integrity : void 0, ql = typeof E.fetchPriority == "string" ? E.fetchPriority : void 0;
      B === "style" ? o.d.S(
        U,
        typeof E.precedence == "string" ? E.precedence : void 0,
        {
          crossOrigin: El,
          integrity: Jl,
          fetchPriority: ql
        }
      ) : B === "script" && o.d.X(U, {
        crossOrigin: El,
        integrity: Jl,
        fetchPriority: ql,
        nonce: typeof E.nonce == "string" ? E.nonce : void 0
      });
    }
  }, Kl.preinitModule = function(U, E) {
    if (typeof U == "string")
      if (typeof E == "object" && E !== null) {
        if (E.as == null || E.as === "script") {
          var B = tl(
            E.as,
            E.crossOrigin
          );
          o.d.M(U, {
            crossOrigin: B,
            integrity: typeof E.integrity == "string" ? E.integrity : void 0,
            nonce: typeof E.nonce == "string" ? E.nonce : void 0,
            fetchPriority: typeof E.fetchPriority == "string" ? E.fetchPriority : void 0
          });
        }
      } else E == null && o.d.M(U);
  }, Kl.preload = function(U, E) {
    if (typeof U == "string" && typeof E == "object" && E !== null && typeof E.as == "string") {
      var B = E.as, El = tl(B, E.crossOrigin);
      o.d.L(U, B, {
        crossOrigin: El,
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
  }, Kl.preloadModule = function(U, E) {
    if (typeof U == "string")
      if (E) {
        var B = tl(E.as, E.crossOrigin);
        o.d.m(U, {
          as: typeof E.as == "string" && E.as !== "script" ? E.as : void 0,
          crossOrigin: B,
          integrity: typeof E.integrity == "string" ? E.integrity : void 0,
          nonce: typeof E.nonce == "string" ? E.nonce : void 0,
          fetchPriority: typeof E.fetchPriority == "string" ? E.fetchPriority : void 0
        });
      } else o.d.m(U);
  }, Kl.requestFormReset = function(U) {
    o.d.r(U);
  }, Kl.unstable_batchedUpdates = function(U, E) {
    return U(E);
  }, Kl.useFormState = function(U, E, B) {
    return Z.H.useFormState(U, E, B);
  }, Kl.useFormStatus = function() {
    return Z.H.useHostTransitionStatus();
  }, Kl.version = "19.3.0", Kl;
}
var mv;
function p1() {
  if (mv) return Ho.exports;
  mv = 1;
  function r() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (S) {
        console.error(S);
      }
  }
  return r(), Ho.exports = A1(), Ho.exports;
}
var hv;
function M1() {
  if (hv) return cn;
  hv = 1;
  var r = N1(), S = jo(), b = p1();
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
  function p(l) {
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
  function X(l) {
    if (l.tag === 31) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function Z(l) {
    if (p(l) !== l)
      throw Error(o(188));
  }
  function tl(l) {
    var t = l.alternate;
    if (!t) {
      if (t = p(l), t === null) throw Error(o(188));
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
  function E(l, t, u, e, a, n) {
    for (; l !== null; ) {
      if ((l.tag === 5 || l.tag === 27 || l.tag === 6) && u(l, e, a, n) || (l.tag !== 22 || l.memoizedState === null) && (t || l.tag !== 5 && l.tag !== 27) && E(
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
  function B(l) {
    for (l = l.return; l !== null; ) {
      if (l.tag === 3 || l.tag === 5 || l.tag === 27) return l;
      l = l.return;
    }
    return null;
  }
  function El(l) {
    var t = !1;
    for (l = l.return; l !== null && (l.tag === 4 && (t = !0), !(l.tag === 3 || l.tag === 5 || l.tag === 27)); )
      l = l.return;
    return t;
  }
  function Jl(l) {
    var t = [null, null], u = B(l);
    return u === null || ql(
      t,
      l,
      u.child,
      { foundSelf: !1 }
    ), t;
  }
  function ql(l, t, u, e) {
    for (; u !== null; ) {
      if (u === t) e.foundSelf = !0;
      else if (u.tag === 5 || u.tag === 27 || u.tag === 6) {
        if (e.foundSelf) return l[1] = u, !0;
        l[0] = u;
      } else if ((u.tag !== 22 || u.memoizedState === null) && ql(
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
  function G(l) {
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
  var zl = null, $l = null;
  function lu(l, t, u) {
    return l === u ? !0 : l === t ? (zl = l, !0) : !1;
  }
  function xt(l, t, u) {
    return l === u ? ($l = l, !1) : l === t ? ($l !== null && (zl = l), !0) : !1;
  }
  function Gt(l) {
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
  var W = Object.assign, fl = /* @__PURE__ */ Symbol.for("react.element"), Xt = /* @__PURE__ */ Symbol.for("react.transitional.element"), Tt = /* @__PURE__ */ Symbol.for("react.portal"), bt = /* @__PURE__ */ Symbol.for("react.fragment"), ft = /* @__PURE__ */ Symbol.for("react.strict_mode"), Su = /* @__PURE__ */ Symbol.for("react.profiler"), $u = /* @__PURE__ */ Symbol.for("react.consumer"), Rl = /* @__PURE__ */ Symbol.for("react.context"), M = /* @__PURE__ */ Symbol.for("react.forward_ref"), V = /* @__PURE__ */ Symbol.for("react.suspense"), L = /* @__PURE__ */ Symbol.for("react.suspense_list"), ml = /* @__PURE__ */ Symbol.for("react.memo"), ol = /* @__PURE__ */ Symbol.for("react.lazy"), Dt = /* @__PURE__ */ Symbol.for("react.activity"), tu = /* @__PURE__ */ Symbol.for("react.legacy_hidden"), Fu = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), d = /* @__PURE__ */ Symbol.for("react.view_transition"), _ = /* @__PURE__ */ Symbol.for("react.recoverable"), j = Symbol.iterator;
  function q(l) {
    return l === null || typeof l != "object" ? null : (l = j && l[j] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var el = /* @__PURE__ */ Symbol.for("react.client.reference");
  function al(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === el ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case bt:
        return "Fragment";
      case Su:
        return "Profiler";
      case ft:
        return "StrictMode";
      case V:
        return "Suspense";
      case L:
        return "SuspenseList";
      case Dt:
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
        case M:
          var t = l.render;
          return l = l.displayName, l || (l = t.displayName || t.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case ml:
          return t = l.displayName || null, t !== null ? t : al(l.type) || "Memo";
        case ol:
          t = l._payload, l = l._init;
          try {
            return al(l(t));
          } catch {
          }
      }
    return null;
  }
  var il = Array.isArray, R = S.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, K = b.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, uu = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, Jf = [], be = -1;
  function Qt(l) {
    return { current: l };
  }
  function xl(l) {
    0 > be || (l.current = Jf[be], Jf[be] = null, be--);
  }
  function gl(l, t) {
    be++, Jf[be] = l.current, l.current = t;
  }
  var Zt = Qt(null), da = Qt(null), Tu = Qt(null), dn = Qt(null);
  function vn(l, t) {
    switch (gl(Tu, t), gl(da, l), gl(Zt, null), t.nodeType) {
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
    xl(Zt), gl(Zt, l);
  }
  function Ee() {
    xl(Zt), xl(da), xl(Tu);
  }
  function wf(l) {
    var t = l.memoizedState;
    t !== null && (ca._currentValue = t.memoizedState, gl(dn, l)), t = Zt.current;
    var u = Sd(t, l.type);
    t !== u && (gl(da, l), gl(Zt, u));
  }
  function yn(l) {
    da.current === l && (xl(Zt), xl(da)), dn.current === l && (xl(dn), ca._currentValue = uu);
  }
  var $f, xo;
  function bu(l) {
    if ($f === void 0)
      try {
        throw Error();
      } catch (u) {
        var t = u.stack.trim().match(/\n( *(at )?)/);
        $f = t && t[1] || "", xo = -1 < u.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < u.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + $f + l + xo;
  }
  var Ff = !1;
  function Wf(l, t) {
    if (!l || Ff) return "";
    Ff = !0;
    var u = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var e = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
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
                } catch (A) {
                  var v = A;
                }
                Reflect.construct(l, [], O);
              } else {
                try {
                  O.call();
                } catch (A) {
                  v = A;
                }
                O = !1;
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
                  }), O = !0, new l();
                } finally {
                  O && (g !== void 0 ? Object.defineProperty(l.prototype, "props", g) : delete l.prototype.props);
                }
              }
            } else {
              try {
                throw Error();
              } catch (A) {
                v = A;
              }
              (O = l()) && typeof O.catch == "function" && O.catch(function() {
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
                  var T = `
` + c[e].replace(" at new ", " at ");
                  return l.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", l.displayName)), T;
                }
              while (1 <= e && 0 <= a);
            break;
          }
      }
    } finally {
      Ff = !1, Error.prepareStackTrace = u;
    }
    return (u = l ? l.displayName || l.name : "") ? bu(u) : "";
  }
  function Ov(l, t) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return bu(l.type);
      case 16:
        return bu("Lazy");
      case 13:
        return l.child !== t && t !== null ? bu("Suspense Fallback") : bu("Suspense");
      case 19:
        return bu("SuspenseList");
      case 0:
      case 15:
        return Wf(l.type, !1);
      case 11:
        return Wf(l.type.render, !1);
      case 1:
        return Wf(l.type, !0);
      case 31:
        return bu("Activity");
      case 30:
        return bu("ViewTransition");
      default:
        return "";
    }
  }
  function Go(l) {
    try {
      var t = "", u = null;
      do
        t += Ov(l, u), u = l, l = l.return;
      while (l);
      return t;
    } catch (e) {
      return `
Error generating stack: ` + e.message + `
` + e.stack;
    }
  }
  var If = Object.prototype.hasOwnProperty, kf = r.unstable_scheduleCallback, Pf = r.unstable_cancelCallback, _v = r.unstable_shouldYield, Nv = r.unstable_requestPaint, it = r.unstable_now, Av = r.unstable_getCurrentPriorityLevel, Xo = r.unstable_ImmediatePriority, Qo = r.unstable_UserBlockingPriority, mn = r.unstable_NormalPriority, pv = r.unstable_LowPriority, Zo = r.unstable_IdlePriority, Mv = r.log, Cv = r.unstable_setDisableYieldValue, va = null, ct = null;
  function Eu(l) {
    if (typeof Mv == "function" && Cv(l), ct && typeof ct.setStrictMode == "function")
      try {
        ct.setStrictMode(va, l);
      } catch {
      }
  }
  var ot = Math.clz32 ? Math.clz32 : Rv, Dv = Math.log, Uv = Math.LN2;
  function Rv(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (Dv(l) / Uv | 0) | 0;
  }
  var hn = 256, gn = 262144, Sn = 4194304;
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
  function Tn(l, t, u) {
    var e = l.pendingLanes;
    if (e === 0) return 0;
    var a = 0, n = l.suspendedLanes, f = l.pingedLanes;
    l = l.warmLanes;
    var i = e & 134217727;
    return i !== 0 ? (e = i & ~n, e !== 0 ? a = Wu(e) : (f &= i, f !== 0 ? a = Wu(f) : u || (u = i & ~l, u !== 0 && (a = Wu(u))))) : (i = e & ~n, i !== 0 ? a = Wu(i) : f !== 0 ? a = Wu(f) : u || (u = e & ~l, u !== 0 && (a = Wu(u)))), a === 0 ? 0 : t !== 0 && t !== a && (t & n) === 0 && (n = a & -a, u = t & -t, n >= u || n === 32 && (u & 4194048) !== 0) ? t : a;
  }
  function ya(l, t) {
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
    var l = Sn;
    return Sn <<= 1, (Sn & 62914560) === 0 && (Sn = 4194304), l;
  }
  function li(l) {
    for (var t = [], u = 0; 31 > u; u++) t.push(l);
    return t;
  }
  function ma(l, t) {
    l.pendingLanes |= t, t !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function Bv(l, t, u, e, a, n) {
    var f = l.pendingLanes;
    l.pendingLanes = u, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= u, l.entangledLanes &= u, l.errorRecoveryDisabledLanes &= u, l.shellSuspendCounter = 0;
    var i = l.entanglements, c = l.expirationTimes, m = l.hiddenUpdates;
    for (u = f & ~u; 0 < u; ) {
      var T = 31 - ot(u), O = 1 << T;
      i[T] = 0, c[T] = -1;
      var v = m[T];
      if (v !== null)
        for (m[T] = null, T = 0; T < v.length; T++) {
          var g = v[T];
          g !== null && (g.lane &= -536870913);
        }
      u &= ~O;
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
    return u = (u & 42) !== 0 ? 1 : ti(u), (u & (l.suspendedLanes | t)) !== 0 ? 0 : u;
  }
  function ti(l) {
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
  function ui(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function $o() {
    var l = K.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : tv(l.type));
  }
  function Fo(l, t) {
    var u = K.p;
    try {
      return K.p = l, t();
    } finally {
      K.p = u;
    }
  }
  var eu = Math.random().toString(36).slice(2), Gl = "__reactFiber$" + eu, Pl = "__reactProps$" + eu, ze = "__reactContainer$" + eu, Wo = "__reactEvents$" + eu, Yv = "__reactListeners$" + eu, jv = "__reactHandles$" + eu, Io = "__reactResources$" + eu, ha = "__reactMarker$" + eu, bn = "__reactLoad$" + eu;
  function En(l) {
    delete l[Gl], delete l[Pl], delete l[Yv], delete l[jv];
  }
  function Iu(l) {
    var t;
    if (t = l[Gl]) return t;
    for (var u = l.parentNode; u; ) {
      if (t = u[ze] || u[Gl]) {
        if (u = t.alternate, t.child !== null || u !== null && u.child !== null)
          for (l = Yd(l); l !== null; ) {
            if (u = l[Gl]) return u;
            l = Yd(l);
          }
        return t;
      }
      l = u, u = l.parentNode;
    }
    return null;
  }
  function Oe(l) {
    if (l = l[Gl] || l[ze]) {
      var t = l.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return l;
    }
    return null;
  }
  function ga(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(o(33));
  }
  function _e(l) {
    var t = l[Io];
    return t || (t = l[Io] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function Hl(l) {
    l[ha] = !0;
  }
  function ko(l) {
    l[bn] = void 0;
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
    return If.call(ur, l) ? !0 : If.call(tr, l) ? !1 : qv.test(l) ? ur[l] = !0 : (tr[l] = !0, !1);
  }
  var nl = !1;
  function er() {
    var l = nl;
    return nl = !1, l;
  }
  function zn(l, t, u) {
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
  function On(l, t, u) {
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
  function au(l, t, u, e) {
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
  function ei(l) {
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
  function ai(l, t, u, e, a, n, f, i) {
    l.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? l.type = f : l.removeAttribute("type"), t != null ? f === "number" ? (t === 0 && l.value === "" || l.value != t) && (l.value = "" + rt(t)) : l.value !== "" + rt(t) && (l.value = "" + rt(t)) : f !== "submit" && f !== "reset" || l.removeAttribute("value"), t != null ? f === "number" && l.value == t ? ni(l, rt(l.value)) : ni(l, rt(t)) : u != null ? ni(l, rt(u)) : e != null && l.removeAttribute("value"), a == null && n != null && (l.defaultChecked = !!n), a != null && (l.checked = a && typeof a != "function" && typeof a != "symbol"), i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? l.name = "" + rt(i) : l.removeAttribute("name");
  }
  function fr(l, t, u, e, a, n, f, i) {
    if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (l.type = n), t != null || u != null) {
      if (!(n !== "submit" && n !== "reset" || t != null)) {
        ei(l);
        return;
      }
      u = u != null ? "" + rt(u) : "", t = t != null ? "" + rt(t) : u, i || t === l.value || (l.value = t), l.defaultValue = t;
    }
    e = e ?? a, e = typeof e != "function" && typeof e != "symbol" && !!e, l.checked = i ? l.checked : !!e, l.defaultChecked = !!e, f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (l.name = f), ei(l);
  }
  function ni(l, t) {
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
        if (il(e)) {
          if (1 < e.length) throw Error(o(93));
          e = e[0];
        }
        u = e;
      }
      u == null && (u = ""), t = u;
    }
    u = rt(t), l.defaultValue = u, e = l.textContent, e === u && e !== "" && e !== null && (l.value = e), ei(l);
  }
  function pe(l, t) {
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
        !u.hasOwnProperty(e) || t != null && t.hasOwnProperty(e) || (e.indexOf("--") === 0 ? l.setProperty(e, "") : e === "float" ? l.cssFloat = "" : l[e] = "", nl = !0);
      for (var a in t)
        e = t[a], t.hasOwnProperty(a) && u[a] !== e && (or(l, a, e), nl = !0);
    } else
      for (var n in t)
        t.hasOwnProperty(n) && or(l, n, t[n]);
  }
  function fi(l) {
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
  function _n(l) {
    return Vv.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  function Vt() {
  }
  var ii = null;
  function ci(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var Me = null, Ce = null;
  function sr(l) {
    var t = Oe(l);
    if (t && (l = t.stateNode)) {
      var u = l[Pl] || null;
      l: switch (l = t.stateNode, t.type) {
        case "input":
          if (ai(
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
                ai(
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
  var oi = !1;
  function dr(l, t, u) {
    if (oi) return l(t, u);
    oi = !0;
    try {
      var e = l(t);
      return e;
    } finally {
      if (oi = !1, (Me !== null || Ce !== null) && (Nf(), Me && (t = Me, l = Ce, Ce = Me = null, sr(t), l)))
        for (t = 0; t < l.length; t++) sr(l[t]);
    }
  }
  function Sa(l, t) {
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
  var nu = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ri = !1;
  if (nu)
    try {
      var Ta = {};
      Object.defineProperty(Ta, "passive", {
        get: function() {
          ri = !0;
        }
      }), window.addEventListener("test", Ta, Ta), window.removeEventListener("test", Ta, Ta);
    } catch {
      ri = !1;
    }
  var zu = null, si = null, Nn = null;
  function vr() {
    if (Nn) return Nn;
    var l, t = si, u = t.length, e, a = "value" in zu ? zu.value : zu.textContent, n = a.length;
    for (l = 0; l < u && t[l] === a[l]; l++) ;
    var f = u - l;
    for (e = 1; e <= f && t[u - e] === a[n - e]; e++) ;
    return Nn = a.slice(l, 1 < e ? 1 - e : void 0);
  }
  function An(l) {
    var t = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && t === 13 && (l = 13)) : l = t, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function pn() {
    return !0;
  }
  function yr() {
    return !1;
  }
  function Fl(l) {
    function t(u, e, a, n, f) {
      this._reactName = u, this._targetInst = a, this.type = e, this.nativeEvent = n, this.target = f, this.currentTarget = null;
      for (var i in l)
        l.hasOwnProperty(i) && (u = l[i], this[i] = u ? u(n) : n[i]);
      return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1) ? pn : yr, this.isPropagationStopped = yr, this;
    }
    return W(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var u = this.nativeEvent;
        u && (u.preventDefault ? u.preventDefault() : typeof u.returnValue != "unknown" && (u.returnValue = !1), this.isDefaultPrevented = pn);
      },
      stopPropagation: function() {
        var u = this.nativeEvent;
        u && (u.stopPropagation ? u.stopPropagation() : typeof u.cancelBubble != "unknown" && (u.cancelBubble = !0), this.isPropagationStopped = pn);
      },
      persist: function() {
      },
      isPersistent: pn
    }), t;
  }
  var Ou = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Mn = Fl(Ou), ba = W({}, Ou, { view: 0, detail: 0 }), Lv = Fl(ba), di, vi, Ea, Cn = W({}, ba, {
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
    getModifierState: mi,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== Ea && (Ea && l.type === "mousemove" ? (di = l.screenX - Ea.screenX, vi = l.screenY - Ea.screenY) : vi = di = 0, Ea = l), di);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : vi;
    }
  }), mr = Fl(Cn), Kv = W({}, Cn, { dataTransfer: 0 }), Jv = Fl(Kv), wv = W({}, ba, { relatedTarget: 0 }), yi = Fl(wv), $v = W({}, Ou, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Fv = Fl($v), Wv = W({}, Ou, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), Iv = Fl(Wv), kv = W({}, Ou, { data: 0 }), hr = Fl(kv), Pv = {
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
  function mi() {
    return uy;
  }
  var ey = W({}, ba, {
    key: function(l) {
      if (l.key) {
        var t = Pv[l.key] || l.key;
        if (t !== "Unidentified") return t;
      }
      return l.type === "keypress" ? (l = An(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? ly[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: mi,
    charCode: function(l) {
      return l.type === "keypress" ? An(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? An(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), ay = Fl(ey), ny = W({}, Cn, {
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
  }), gr = Fl(ny), fy = W({}, Ou, { submitter: 0 }), iy = Fl(fy), cy = W({}, ba, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: mi
  }), oy = Fl(cy), ry = W({}, Ou, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), sy = Fl(ry), dy = W({}, Cn, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), vy = Fl(dy), yy = W({}, Ou, {
    newState: 0,
    oldState: 0,
    source: 0
  }), my = Fl(yy), hy = [9, 13, 27, 32], hi = nu && "CompositionEvent" in window, za = null;
  nu && "documentMode" in document && (za = document.documentMode);
  var gy = nu && "TextEvent" in window && !za, Sr = nu && (!hi || za && 8 < za && 11 >= za), Tr = " ", br = !1;
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
  var De = !1;
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
    if (De)
      return l === "compositionend" || !hi && Er(l, t) ? (l = vr(), Nn = si = zu = null, De = !1, l) : null;
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
  function Or(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!by[l.type] : t === "textarea";
  }
  function _r(l, t, u, e) {
    Me ? Ce ? Ce.push(e) : Ce = [e] : Me = e, t = Uf(t, "onChange"), 0 < t.length && (u = new Mn(
      "onChange",
      "change",
      null,
      u,
      e
    ), l.push({ event: u, listeners: t }));
  }
  var Oa = null, _a = null;
  function Ey(l) {
    sd(l, 0);
  }
  function Dn(l) {
    var t = ga(l);
    if (nr(t)) return l;
  }
  function Nr(l, t) {
    if (l === "change") return t;
  }
  var Ar = !1;
  if (nu) {
    var gi;
    if (nu) {
      var Si = "oninput" in document;
      if (!Si) {
        var pr = document.createElement("div");
        pr.setAttribute("oninput", "return;"), Si = typeof pr.oninput == "function";
      }
      gi = Si;
    } else gi = !1;
    Ar = gi && (!document.documentMode || 9 < document.documentMode);
  }
  function Mr() {
    Oa && (Oa.detachEvent("onpropertychange", Cr), _a = Oa = null);
  }
  function Cr(l) {
    if (l.propertyName === "value" && Dn(_a)) {
      var t = [];
      _r(
        t,
        _a,
        l,
        ci(l)
      ), dr(Ey, t);
    }
  }
  function zy(l, t, u) {
    l === "focusin" ? (Mr(), Oa = t, _a = u, Oa.attachEvent("onpropertychange", Cr)) : l === "focusout" && Mr();
  }
  function Oy(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return Dn(_a);
  }
  function _y(l, t) {
    if (l === "click") return Dn(t);
  }
  function Ny(l, t) {
    if (l === "input" || l === "change")
      return Dn(t);
  }
  function Ay(l, t) {
    return l === t && (l !== 0 || 1 / l === 1 / t) || l !== l && t !== t;
  }
  var st = typeof Object.is == "function" ? Object.is : Ay;
  function Na(l, t) {
    if (st(l, t)) return !0;
    if (typeof l != "object" || l === null || typeof t != "object" || t === null)
      return !1;
    var u = Object.keys(l), e = Object.keys(t);
    if (u.length !== e.length) return !1;
    for (e = 0; e < u.length; e++) {
      var a = u[e];
      if (!If.call(t, a) || !st(l[a], t[a]))
        return !1;
    }
    return !0;
  }
  function Ti(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  function Dr(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function Ur(l, t) {
    var u = Dr(l);
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
      u = Dr(u);
    }
  }
  function Rr(l, t) {
    return l && t ? l === t ? !0 : l && l.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Rr(l, t.parentNode) : "contains" in l ? l.contains(t) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Hr(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var t = Ti(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var u = typeof t.contentWindow.location.href == "string";
      } catch {
        u = !1;
      }
      if (u) l = t.contentWindow;
      else break;
      t = Ti(l.document);
    }
    return t;
  }
  function bi(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t && (t === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || t === "textarea" || l.contentEditable === "true");
  }
  var py = nu && "documentMode" in document && 11 >= document.documentMode, Ue = null, Ei = null, Aa = null, zi = !1;
  function Br(l, t, u) {
    var e = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    zi || Ue == null || Ue !== Ti(e) || (e = Ue, "selectionStart" in e && bi(e) ? e = { start: e.selectionStart, end: e.selectionEnd } : (e = (e.ownerDocument && e.ownerDocument.defaultView || window).getSelection(), e = {
      anchorNode: e.anchorNode,
      anchorOffset: e.anchorOffset,
      focusNode: e.focusNode,
      focusOffset: e.focusOffset
    }), Aa && Na(Aa, e) || (Aa = e, e = Uf(Ei, "onSelect"), 0 < e.length && (t = new Mn(
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
  }, Oi = {}, Yr = {};
  nu && (Yr = document.createElement("div").style, "AnimationEvent" in window || (delete Re.animationend.animation, delete Re.animationiteration.animation, delete Re.animationstart.animation), "TransitionEvent" in window || delete Re.transitionend.transition);
  function le(l) {
    if (Oi[l]) return Oi[l];
    if (!Re[l]) return l;
    var t = Re[l], u;
    for (u in t)
      if (t.hasOwnProperty(u) && u in Yr)
        return Oi[l] = t[u];
    return l;
  }
  var jr = le("animationend"), qr = le("animationiteration"), xr = le("animationstart"), My = le("transitionrun"), Cy = le("transitionstart"), Dy = le("transitioncancel"), Gr = le("transitionend"), Xr = /* @__PURE__ */ new Map(), _i = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  _i.push("scrollEnd");
  function Ut(l, t) {
    Xr.set(l, t), ku(t, [l]);
  }
  var Uy = 0;
  function fu(l, t) {
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
  function iu(l, t) {
    return l = Qr(l), t = Qr(t), t == null ? l === "auto" ? null : l : t === "auto" ? null : t;
  }
  var Un = typeof reportError == "function" ? reportError : function(l) {
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
  }, zt = [], He = 0, Ni = 0;
  function Rn() {
    for (var l = He, t = Ni = He = 0; t < l; ) {
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
  function Hn(l, t, u, e) {
    zt[He++] = l, zt[He++] = t, zt[He++] = u, zt[He++] = e, Ni |= e, l.lanes |= e, l = l.alternate, l !== null && (l.lanes |= e);
  }
  function Ai(l, t, u, e) {
    return Hn(l, t, u, e), Bn(l);
  }
  function te(l, t) {
    return Hn(l, null, null, t), Bn(l);
  }
  function Zr(l, t, u) {
    l.lanes |= u;
    var e = l.alternate;
    e !== null && (e.lanes |= u);
    for (var a = !1, n = l.return; n !== null; )
      n.childLanes |= u, e = n.alternate, e !== null && (e.childLanes |= u), n.tag === 22 && (l = n.stateNode, l === null || l._visibility & 1 || (a = !0)), l = n, n = n.return;
    return l.tag === 3 ? (n = l.stateNode, a && t !== null && (a = 31 - ot(u), l = n.hiddenUpdates, e = l[a], e === null ? l[a] = [t] : e.push(t), t.lane = u | 536870912), n) : null;
  }
  function Bn(l) {
    if (50 < $a)
      throw $a = 0, _f = null, Error(o(185));
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
  function pi(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function cu(l, t) {
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
  function Yn(l, t, u, e, a, n) {
    var f = 0;
    if (e = l, typeof e == "function") pi(e) && (f = 1);
    else if (typeof e == "string")
      f = f1(
        l,
        u,
        Zt.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      l: switch (e) {
        case Dt:
          return l = lt(31, u, t, a), l.elementType = Dt, l.lanes = n, l;
        case bt:
          return ue(u.children, a, n, t);
        case ft:
          f = 8, a |= 24;
          break;
        case Su:
          return l = lt(12, u, t, a | 2), l.elementType = Su, l.lanes = n, l;
        case V:
          return l = lt(13, u, t, a), l.elementType = V, l.lanes = n, l;
        case L:
          return l = lt(19, u, t, a), l.elementType = L, l.lanes = n, l;
        case tu:
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
              case M:
                f = 11;
                break l;
              case ml:
                f = 14;
                break l;
              case ol:
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
  function Ot(l, t) {
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
  var Ye = [], je = 0, jn = null, pa = 0, _t = [], Nt = 0, _u = null, Lt = 1, Kt = "";
  function ou(l, t) {
    Ye[je++] = pa, Ye[je++] = jn, jn = l, pa = t;
  }
  function Jr(l, t, u) {
    _t[Nt++] = Lt, _t[Nt++] = Kt, _t[Nt++] = _u, _u = l;
    var e = Lt;
    l = Kt;
    var a = 32 - ot(e) - 1;
    e &= ~(1 << a), u += 1;
    var n = 32 - ot(t) + a;
    if (30 < n) {
      var f = a - a % 5;
      n = (e & (1 << f) - 1).toString(32), e >>= f, a -= f, Lt = 1 << 32 - ot(t) + a | u << a | e, Kt = n + l;
    } else
      Lt = 1 << n | u << a | e, Kt = l;
  }
  function qn(l) {
    l.return !== null && (ou(l, 1), Jr(l, 1, 0));
  }
  function Di(l) {
    for (; l === jn; )
      jn = Ye[--je], Ye[je] = null, pa = Ye[--je], Ye[je] = null;
    for (; l === _u; )
      _u = _t[--Nt], _t[Nt] = null, Kt = _t[--Nt], _t[Nt] = null, Lt = _t[--Nt], _t[Nt] = null;
  }
  function wr(l, t) {
    _t[Nt++] = Lt, _t[Nt++] = Kt, _t[Nt++] = _u, Lt = t.id, Kt = t.overflow, _u = l;
  }
  var Bl = null, Sl = null, F = !1, Nu = null, At = !1, Ui = Error(o(519));
  function Au(l) {
    var t = Error(
      o(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Ma(Ot(t, l)), Ui;
  }
  function $r(l) {
    var t = l.stateNode, u = l.type, e = l.memoizedProps;
    switch (t[Gl] = l, t[Pl] = e, u) {
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
        for (u = 0; u < Wa.length; u++)
          k(Wa[u], t);
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
    u = e.children, typeof u != "string" && typeof u != "number" && typeof u != "bigint" || t.textContent === "" + u || e.suppressHydrationWarning === !0 || md(t.textContent, u) ? (e.popover != null && (k("beforetoggle", t), k("toggle", t)), e.onScroll != null && k("scroll", t), e.onScrollEnd != null && k("scrollend", t), e.onClick != null && (t.onclick = Vt), t = !0) : t = !1, t || Au(l, !0);
  }
  function xn(l) {
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
    if (!F) return xn(l), F = !0, !1;
    var t = l.tag, u;
    if ((u = t !== 3 && t !== 27) && ((u = t === 5) && (u = l.type, u = !(u !== "form" && u !== "button") || io(l.type, l.memoizedProps)), u = !u), u && Sl && Au(l), xn(l), t === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(o(317));
      Sl = Bd(l);
    } else if (t === 31) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(o(317));
      Sl = Bd(l);
    } else
      t === 27 ? (t = Sl, Zu(l.type) ? (l = go, go = null, Sl = l) : Sl = t) : Sl = Bl ? Mt(l.stateNode.nextSibling) : null;
    return !0;
  }
  function ee() {
    Sl = Bl = null, F = !1;
  }
  function Ri() {
    var l = Nu;
    return l !== null && (et === null ? et = l : et.push.apply(
      et,
      l
    ), Nu = null), l;
  }
  function Ma(l) {
    Nu === null ? Nu = [l] : Nu.push(l);
  }
  var Hi = Qt(null), ae = null, ru = null;
  function pu(l, t, u) {
    gl(Hi, t._currentValue), t._currentValue = u;
  }
  function su(l) {
    l._currentValue = Hi.current, xl(Hi);
  }
  function Gn(l, t, u) {
    for (; l !== null; ) {
      var e = l.alternate;
      if ((l.childLanes & t) !== t ? (l.childLanes |= t, e !== null && (e.childLanes |= t)) : e !== null && (e.childLanes & t) !== t && (e.childLanes |= t), l === u) break;
      l = l.return;
    }
  }
  function Bi(l, t, u, e) {
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
              n.lanes |= u, i = n.alternate, i !== null && (i.lanes |= u), Gn(
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
        f.lanes |= u, n = f.alternate, n !== null && (n.lanes |= u), Gn(f, u, l), f = null;
      } else
        a.tag === 13 && a.memoizedState !== null && a.memoizedState.dehydrated === null ? (a.lanes |= u, f = a.alternate, f !== null && (f.lanes |= u), Gn(
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
      } else if (a === dn.current) {
        if (f = a.alternate, f === null) throw Error(o(387));
        f.memoizedState.memoizedState !== a.memoizedState.memoizedState && (l !== null ? l.push(ca) : l = [ca]);
      }
      a = a.return;
    }
    return l !== null && Bi(
      t,
      l,
      u,
      e
    ), t.flags |= 262144, l !== null;
  }
  function Xn(l) {
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
    ae = l, ru = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function Xl(l) {
    return Fr(ae, l);
  }
  function Qn(l, t) {
    return ae === null && fe(l), Fr(l, t);
  }
  function Fr(l, t) {
    var u = t._currentValue;
    if (t = { context: t, memoizedValue: u, next: null }, ru === null) {
      if (l === null) throw Error(o(308));
      ru = t, l.dependencies = { lanes: 0, firstContext: t }, l.flags |= 524288;
    } else ru = ru.next = t;
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
  }, By = r.unstable_scheduleCallback, Yy = r.unstable_NormalPriority, pl = {
    $$typeof: Rl,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Yi() {
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
  var Ua = null, ji = 0, ie = 0, xe = null;
  function qy(l, t) {
    if (Ua === null) {
      var u = Ua = [];
      ji = 0, ie = kc(), xe = {
        status: "pending",
        value: void 0,
        then: function(e) {
          u.push(e);
        }
      };
    }
    return ji++, t.then(Ir, Ir), t;
  }
  function Ir() {
    if (--ji === 0 && (Da = null, Ua !== null)) {
      xe !== null && (xe.status = "fulfilled");
      var l = Ua;
      Ua = null, ie = 0, xe = null;
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
    if (L0 = it(), typeof t == "object" && t !== null && typeof t.then == "function" && qy(l, t), Da !== null)
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
  var ce = Qt(null);
  function qi() {
    var l = ce.current;
    return l !== null ? l : hl.pooledCache;
  }
  function Zn(l, t) {
    t === null ? gl(ce, ce.current) : gl(ce, t.pool);
  }
  function Pr() {
    var l = qi();
    return l === null ? null : { parent: pl._currentValue, pool: l };
  }
  var Ge = Error(o(460)), xi = Error(o(474)), Vn = Error(o(542)), Ln = { then: function() {
  } };
  function ls(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function ts(l, t, u) {
    switch (u = l[u], u === void 0 ? l.push(t) : u !== t && (t.then(Vt, Vt), t = u), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw l = t.reason, es(l), l === void 0 && !("reason" in t) ? Error(o(600)) : l;
      default:
        if (typeof t.status == "string") t.then(Vt, Vt);
        else {
          if (l = hl, l !== null && 100 < l.shellSuspendCounter)
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
            throw l = t.reason, es(l), l;
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
  function us() {
    if (re === null) throw Error(o(459));
    var l = re;
    return re = null, l;
  }
  function es(l) {
    if (l === Ge || l === Vn)
      throw Error(o(483));
  }
  var Xe = null, Ra = 0;
  function Kn(l) {
    var t = Ra;
    return Ra += 1, Xe === null && (Xe = []), ts(Xe, l, t);
  }
  function Mu(l, t) {
    t = t.props.ref, l.ref = t !== void 0 ? t : null;
  }
  function Jn(l, t) {
    throw t.$$typeof === fl ? Error(o(525)) : (l = Object.prototype.toString.call(t), Error(
      o(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : l
      )
    ));
  }
  function as(l) {
    function t(y, s) {
      if (l) {
        var h = y.deletions;
        h === null ? (y.deletions = [s], y.flags |= 16) : h.push(s);
      }
    }
    function u(y, s) {
      if (!l) return null;
      for (; s !== null; )
        t(y, s), s = s.sibling;
      return null;
    }
    function e(y) {
      for (var s = /* @__PURE__ */ new Map(); y !== null; )
        y.key === null ? s.set(y.index, y) : s.set(y.key, y), y = y.sibling;
      return s;
    }
    function a(y, s) {
      return y = cu(y, s), y.index = 0, y.sibling = null, y;
    }
    function n(y, s, h) {
      return y.index = h, l ? (h = y.alternate, h !== null ? (h = h.index, h < s ? (y.flags |= 2, s) : h) : (y.flags |= 134217730, s)) : (y.flags |= 1048576, s);
    }
    function f(y) {
      return l && y.alternate === null && (y.flags |= 134217730), y;
    }
    function i(y, s, h, z) {
      return s === null || s.tag !== 6 ? (s = Mi(h, y.mode, z), s.return = y, s) : (s = a(s, h), s.return = y, s);
    }
    function c(y, s, h, z) {
      var C = h.type;
      return C === bt ? (y = T(
        y,
        s,
        h.props.children,
        z,
        h.key
      ), Mu(y, h), y) : s !== null && (s.elementType === C || typeof C == "object" && C !== null && C.$$typeof === ol && oe(C) === s.type) ? (s = a(s, h.props), Mu(s, h), s.return = y, s) : (s = Yn(
        h.type,
        h.key,
        h.props,
        null,
        y.mode,
        z
      ), Mu(s, h), s.return = y, s);
    }
    function m(y, s, h, z) {
      return s === null || s.tag !== 4 || s.stateNode.containerInfo !== h.containerInfo || s.stateNode.implementation !== h.implementation ? (s = Ci(h, y.mode, z), s.return = y, s) : (s = a(s, h.children || []), s.return = y, s);
    }
    function T(y, s, h, z, C) {
      return s === null || s.tag !== 7 ? (s = ue(
        h,
        y.mode,
        z,
        C
      ), s.return = y, s) : (s = a(s, h), s.return = y, s);
    }
    function O(y, s, h) {
      if (typeof s == "string" && s !== "" || typeof s == "number" || typeof s == "bigint")
        return s = Mi(
          "" + s,
          y.mode,
          h
        ), s.return = y, s;
      if (typeof s == "object" && s !== null) {
        switch (s.$$typeof) {
          case Xt:
            return h = Yn(
              s.type,
              s.key,
              s.props,
              null,
              y.mode,
              h
            ), Mu(h, s), h.return = y, h;
          case Tt:
            return s = Ci(
              s,
              y.mode,
              h
            ), s.return = y, s;
          case ol:
            return s = oe(s), O(y, s, h);
        }
        if (il(s) || q(s))
          return s = ue(
            s,
            y.mode,
            h,
            null
          ), s.return = y, s;
        if (typeof s.then == "function")
          return O(y, Kn(s), h);
        if (s.$$typeof === Rl)
          return O(
            y,
            Qn(y, s),
            h
          );
        Jn(y, s);
      }
      return null;
    }
    function v(y, s, h, z) {
      var C = s !== null ? s.key : null;
      if (typeof h == "string" && h !== "" || typeof h == "number" || typeof h == "bigint")
        return C !== null ? null : i(y, s, "" + h, z);
      if (typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case Xt:
            return h.key === C ? c(y, s, h, z) : null;
          case Tt:
            return h.key === C ? m(y, s, h, z) : null;
          case ol:
            return h = oe(h), v(y, s, h, z);
        }
        if (il(h) || q(h))
          return C !== null ? null : T(y, s, h, z, null);
        if (typeof h.then == "function")
          return v(
            y,
            s,
            Kn(h),
            z
          );
        if (h.$$typeof === Rl)
          return v(
            y,
            s,
            Qn(y, h),
            z
          );
        Jn(y, h);
      }
      return null;
    }
    function g(y, s, h, z, C) {
      if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint")
        return y = y.get(h) || null, i(s, y, "" + z, C);
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case Xt:
            return y = y.get(
              z.key === null ? h : z.key
            ) || null, c(s, y, z, C);
          case Tt:
            return y = y.get(
              z.key === null ? h : z.key
            ) || null, m(s, y, z, C);
          case ol:
            return z = oe(z), g(
              y,
              s,
              h,
              z,
              C
            );
        }
        if (il(z) || q(z))
          return y = y.get(h) || null, T(s, y, z, C, null);
        if (typeof z.then == "function")
          return g(
            y,
            s,
            h,
            Kn(z),
            C
          );
        if (z.$$typeof === Rl)
          return g(
            y,
            s,
            h,
            Qn(s, z),
            C
          );
        Jn(s, z);
      }
      return null;
    }
    function A(y, s, h, z) {
      for (var C = null, ll = null, Y = s, Q = s = 0, Dl = null; Y !== null && Q < h.length; Q++) {
        Y.index > Q ? (Dl = Y, Y = null) : Dl = Y.sibling;
        var ul = v(
          y,
          Y,
          h[Q],
          z
        );
        if (ul === null) {
          Y === null && (Y = Dl);
          break;
        }
        l && Y && ul.alternate === null && t(y, Y), s = n(ul, s, Q), ll === null ? C = ul : ll.sibling = ul, ll = ul, Y = Dl;
      }
      if (Q === h.length)
        return u(y, Y), F && ou(y, Q), C;
      if (Y === null) {
        for (; Q < h.length; Q++)
          Y = O(y, h[Q], z), Y !== null && (s = n(
            Y,
            s,
            Q
          ), ll === null ? C = Y : ll.sibling = Y, ll = Y);
        return F && ou(y, Q), C;
      }
      for (Y = e(Y); Q < h.length; Q++)
        Dl = g(
          Y,
          y,
          Q,
          h[Q],
          z
        ), Dl !== null && (l && (ul = Dl.alternate, ul !== null && Y.delete(ul.key === null ? Q : ul.key)), s = n(
          Dl,
          s,
          Q
        ), ll === null ? C = Dl : ll.sibling = Dl, ll = Dl);
      return l && Y.forEach(function(wu) {
        return t(y, wu);
      }), F && ou(y, Q), C;
    }
    function D(y, s, h, z) {
      if (h == null) throw Error(o(151));
      for (var C = null, ll = null, Y = s, Q = s = 0, Dl = null, ul = h.next(); Y !== null && !ul.done; Q++, ul = h.next()) {
        Y.index > Q ? (Dl = Y, Y = null) : Dl = Y.sibling;
        var wu = v(y, Y, ul.value, z);
        if (wu === null) {
          Y === null && (Y = Dl);
          break;
        }
        l && Y && wu.alternate === null && t(y, Y), s = n(wu, s, Q), ll === null ? C = wu : ll.sibling = wu, ll = wu, Y = Dl;
      }
      if (ul.done)
        return u(y, Y), F && ou(y, Q), C;
      if (Y === null) {
        for (; !ul.done; Q++, ul = h.next())
          ul = O(y, ul.value, z), ul !== null && (s = n(ul, s, Q), ll === null ? C = ul : ll.sibling = ul, ll = ul);
        return F && ou(y, Q), C;
      }
      for (Y = e(Y); !ul.done; Q++, ul = h.next())
        ul = g(Y, y, Q, ul.value, z), ul !== null && (l && (Dl = ul.alternate, Dl !== null && Y.delete(
          Dl.key === null ? Q : Dl.key
        )), s = n(ul, s, Q), ll === null ? C = ul : ll.sibling = ul, ll = ul);
      return l && Y.forEach(function(S1) {
        return t(y, S1);
      }), F && ou(y, Q), C;
    }
    function $(y, s, h, z) {
      if (typeof h == "object" && h !== null && h.type === bt && h.key === null && h.props.ref === void 0 && (h = h.props.children), typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case Xt:
            l: {
              for (var C = h.key; s !== null; ) {
                if (s.key === C) {
                  if (C = h.type, C === bt) {
                    if (s.tag === 7) {
                      u(
                        y,
                        s.sibling
                      ), z = a(
                        s,
                        h.props.children
                      ), Mu(z, h), z.return = y, y = z;
                      break l;
                    }
                  } else if (s.elementType === C || typeof C == "object" && C !== null && C.$$typeof === ol && oe(C) === s.type) {
                    u(
                      y,
                      s.sibling
                    ), z = a(s, h.props), Mu(z, h), z.return = y, y = z;
                    break l;
                  }
                  u(y, s);
                  break;
                } else t(y, s);
                s = s.sibling;
              }
              h.type === bt ? (z = ue(
                h.props.children,
                y.mode,
                z,
                h.key
              ), Mu(z, h), z.return = y, y = z) : (z = Yn(
                h.type,
                h.key,
                h.props,
                null,
                y.mode,
                z
              ), Mu(z, h), z.return = y, y = z);
            }
            return f(y);
          case Tt:
            l: {
              for (C = h.key; s !== null; ) {
                if (s.key === C)
                  if (s.tag === 4 && s.stateNode.containerInfo === h.containerInfo && s.stateNode.implementation === h.implementation) {
                    u(
                      y,
                      s.sibling
                    ), z = a(s, h.children || []), z.return = y, y = z;
                    break l;
                  } else {
                    u(y, s);
                    break;
                  }
                else t(y, s);
                s = s.sibling;
              }
              z = Ci(h, y.mode, z), z.return = y, y = z;
            }
            return f(y);
          case ol:
            return h = oe(h), $(
              y,
              s,
              h,
              z
            );
        }
        if (il(h))
          return A(
            y,
            s,
            h,
            z
          );
        if (q(h)) {
          if (C = q(h), typeof C != "function") throw Error(o(150));
          return h = C.call(h), D(
            y,
            s,
            h,
            z
          );
        }
        if (typeof h.then == "function")
          return $(
            y,
            s,
            Kn(h),
            z
          );
        if (h.$$typeof === Rl)
          return $(
            y,
            s,
            Qn(y, h),
            z
          );
        Jn(y, h);
      }
      return typeof h == "string" && h !== "" || typeof h == "number" || typeof h == "bigint" ? (h = "" + h, s !== null && s.tag === 6 ? (u(y, s.sibling), z = a(s, h), z.return = y, y = z) : (u(y, s), z = Mi(h, y.mode, z), z.return = y, y = z), f(y)) : u(y, s);
    }
    return function(y, s, h, z) {
      try {
        Ra = 0;
        var C = $(
          y,
          s,
          h,
          z
        );
        return Xe = null, C;
      } catch (Y) {
        if (Y === Ge || Y === Vn) throw Y;
        var ll = lt(29, Y, null, y.mode);
        return ll.lanes = z, ll.return = y, ll;
      }
    };
  }
  var se = as(!0), ns = as(!1), Cu = !1;
  function Gi(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Xi(l, t) {
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
  function Uu(l, t, u) {
    var e = l.updateQueue;
    if (e === null) return null;
    if (e = e.shared, (cl & 2) !== 0) {
      var a = e.pending;
      return a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t, t = Bn(l), Zr(l, null, u), t;
    }
    return Hn(l, e, t, u), Bn(l);
  }
  function Ha(l, t, u) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (u & 4194048) !== 0)) {
      var e = t.lanes;
      e &= l.pendingLanes, u |= e, t.lanes = u, Jo(l, u);
    }
  }
  function Qi(l, t) {
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
  var Zi = !1;
  function Ba() {
    if (Zi) {
      var l = xe;
      if (l !== null) throw l;
    }
  }
  function Ya(l, t, u, e) {
    Zi = !1;
    var a = l.updateQueue;
    Cu = !1;
    var n = a.firstBaseUpdate, f = a.lastBaseUpdate, i = a.shared.pending;
    if (i !== null) {
      a.shared.pending = null;
      var c = i, m = c.next;
      c.next = null, f === null ? n = m : f.next = m, f = c;
      var T = l.alternate;
      T !== null && (T = T.updateQueue, i = T.lastBaseUpdate, i !== f && (i === null ? T.firstBaseUpdate = m : i.next = m, T.lastBaseUpdate = c));
    }
    if (n !== null) {
      var O = a.baseState;
      f = 0, T = m = c = null, i = n;
      do {
        var v = i.lane & -536870913, g = v !== i.lane;
        if (g ? (P & v) === v : (e & v) === v) {
          v !== 0 && v === ie && (Zi = !0), T !== null && (T = T.next = {
            lane: 0,
            tag: i.tag,
            payload: i.payload,
            callback: null,
            next: null
          });
          l: {
            var A = l, D = i;
            v = t;
            var $ = u;
            switch (D.tag) {
              case 1:
                if (A = D.payload, typeof A == "function") {
                  O = A.call($, O, v);
                  break l;
                }
                O = A;
                break l;
              case 3:
                A.flags = A.flags & -65537 | 128;
              case 0:
                if (A = D.payload, v = typeof A == "function" ? A.call($, O, v) : A, v == null) break l;
                O = W({}, O, v);
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
          }, T === null ? (m = T = g, c = O) : T = T.next = g, f |= v;
        if (i = i.next, i === null) {
          if (i = a.shared.pending, i === null)
            break;
          g = i, i = g.next, g.next = null, a.lastBaseUpdate = g, a.shared.pending = null;
        }
      } while (!0);
      T === null && (c = O), a.baseState = c, a.firstBaseUpdate = m, a.lastBaseUpdate = T, n === null && (a.shared.lanes = 0), xu |= f, l.lanes = f, l.memoizedState = O;
    }
  }
  function fs(l, t) {
    if (typeof l != "function")
      throw Error(o(191, l));
    l.call(t);
  }
  function is(l, t) {
    var u = l.callbacks;
    if (u !== null)
      for (l.callbacks = null, l = 0; l < u.length; l++)
        fs(u[l], t);
  }
  var Ru = Qt(null), wn = Qt(0);
  function cs(l, t) {
    l = hu, gl(wn, l), gl(Ru, t), hu = l | t.baseLanes;
  }
  function Vi() {
    gl(wn, hu), gl(Ru, Ru.current);
  }
  function Li() {
    hu = wn.current, xl(Ru), xl(wn);
  }
  var Ql = Qt(null), wl = null;
  function Hu(l) {
    var t = l.alternate;
    gl(Zl, Zl.current & 1), gl(Ql, l), wl === null && (t === null || Ru.current !== null || t.memoizedState !== null) && (wl = l);
  }
  function Ki(l) {
    gl(Zl, Zl.current), gl(Ql, l), wl === null && (wl = l);
  }
  function os(l) {
    l.tag === 22 ? (gl(Zl, Zl.current), gl(Ql, l), wl === null && (wl = l)) : Bu();
  }
  function Bu() {
    gl(Zl, Zl.current), gl(Ql, Ql.current);
  }
  function dt(l) {
    xl(Ql), wl === l && (wl = null), xl(Zl);
  }
  var Zl = Qt(0);
  function ja(l, t) {
    gl(Ql, Ql.current), gl(Zl, t);
  }
  function Ji(l) {
    xl(Zl), xl(Ql), wl === l && (wl = null);
  }
  function $n(l) {
    for (var t = l; t !== null; ) {
      if (t.tag === 13) {
        var u = t.memoizedState;
        if (u !== null && (u = u.dehydrated, u === null || mo(u) || ho(u)))
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
  var du = 0, w = null, yl = null, Ml = null, Fn = !1, Qe = !1, de = !1, Wn = 0, qa = 0, Ze = null, Gy = 0;
  function _l() {
    throw Error(o(321));
  }
  function wi(l, t) {
    if (t === null) return !1;
    for (var u = 0; u < t.length && u < l.length; u++)
      if (!st(l[u], t[u])) return !1;
    return !0;
  }
  function $i(l, t, u, e, a, n) {
    return du = n, w = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, R.H = l === null || l.memoizedState === null ? Js : ws, de = !1, n = u(e, a), de = !1, Qe && (n = ss(
      t,
      u,
      e,
      a
    )), rs(l), n;
  }
  function rs(l) {
    R.H = ef;
    var t = yl !== null && yl.next !== null;
    if (du = 0, Ml = yl = w = null, Fn = !1, qa = 0, Ze = null, t) throw Error(o(300));
    l === null || Cl || (l = l.dependencies, l !== null && Xn(l) && (Cl = !0));
  }
  function ss(l, t, u, e) {
    w = l;
    var a = 0;
    do {
      if (Qe && (Ze = null), qa = 0, Qe = !1, 25 <= a) throw Error(o(301));
      if (a += 1, Ml = yl = null, l.updateQueue != null) {
        var n = l.updateQueue;
        n.lastEffect = null, n.events = null, n.stores = null, n.memoCache != null && (n.memoCache.index = 0);
      }
      R.H = wy, n = t(u, e);
    } while (Qe);
    return n;
  }
  function Xy() {
    var l = R.H, t = l.useState()[0];
    return t = typeof t.then == "function" ? xa(t) : t, l = l.useState()[0], (yl !== null ? yl.memoizedState : null) !== l && (w.flags |= 1024), t;
  }
  function Fi() {
    var l = Wn !== 0;
    return Wn = 0, l;
  }
  function Wi(l, t, u) {
    t.updateQueue = l.updateQueue, t.flags &= -2053, l.lanes &= ~u;
  }
  function Ii(l) {
    if (Fn) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        t !== null && (t.pending = null), l = l.next;
      }
      Fn = !1;
    }
    du = 0, Ml = yl = w = null, Qe = !1, qa = Wn = 0, Ze = null;
  }
  function Wl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Ml === null ? w.memoizedState = Ml = l : Ml = Ml.next = l, Ml;
  }
  function Al() {
    if (yl === null) {
      var l = w.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = yl.next;
    var t = Ml === null ? w.memoizedState : Ml.next;
    if (t !== null)
      Ml = t, yl = l;
    else {
      if (l === null)
        throw w.alternate === null ? Error(o(467)) : Error(o(310));
      yl = l, l = {
        memoizedState: yl.memoizedState,
        baseState: yl.baseState,
        baseQueue: yl.baseQueue,
        queue: yl.queue,
        next: null
      }, Ml === null ? w.memoizedState = Ml = l : Ml = Ml.next = l;
    }
    return Ml;
  }
  function In() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function xa(l) {
    var t = qa;
    return qa += 1, Ze === null && (Ze = []), l = ts(Ze, l, t), t = w, (Ml === null ? t.memoizedState : Ml.next) === null && (t = t.alternate, R.H = t === null || t.memoizedState === null ? Js : ws), l;
  }
  function kn(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return xa(l);
      if (l.$$typeof === _) return;
      if (l.$$typeof === Rl) return Xl(l);
    }
    throw Error(o(438, String(l)));
  }
  function ki(l) {
    var t = null, u = w.updateQueue;
    if (u !== null && (t = u.memoCache), t == null) {
      var e = w.alternate;
      e !== null && (e = e.updateQueue, e !== null && (e = e.memoCache, e != null && (t = {
        data: e.data.map(function(a) {
          return a.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), u === null && (u = In(), w.updateQueue = u), u.memoCache = t, u = t.data[t.index], u === void 0)
      for (u = t.data[t.index] = Array(l), e = 0; e < l; e++)
        u[e] = Fu;
    return t.index++, u;
  }
  function vu(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function Pn(l) {
    var t = Al();
    return Pi(t, yl, l);
  }
  function Pi(l, t, u) {
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
      var i = f = null, c = null, m = t, T = !1;
      do {
        var O = m.lane & -536870913;
        if (O !== m.lane ? (P & O) === O : (du & O) === O) {
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
            }), O === ie && (T = !0);
          else if ((du & v) === v) {
            m = m.next, v === ie && (T = !0);
            continue;
          } else
            O = {
              lane: 0,
              revertLane: m.revertLane,
              gesture: null,
              action: m.action,
              hasEagerState: m.hasEagerState,
              eagerState: m.eagerState,
              next: null
            }, c === null ? (i = c = O, f = n) : c = c.next = O, w.lanes |= v, xu |= v;
          O = m.action, de && u(n, O), n = m.hasEagerState ? m.eagerState : u(n, O);
        } else
          v = {
            lane: O,
            revertLane: m.revertLane,
            gesture: m.gesture,
            action: m.action,
            hasEagerState: m.hasEagerState,
            eagerState: m.eagerState,
            next: null
          }, c === null ? (i = c = v, f = n) : c = c.next = v, w.lanes |= O, xu |= O;
        m = m.next;
      } while (m !== null && m !== t);
      if (c === null ? f = n : c.next = i, !st(n, l.memoizedState) && (Cl = !0, T && (u = xe, u !== null)))
        throw u;
      l.memoizedState = n, l.baseState = f, l.baseQueue = c, e.lastRenderedState = n;
    }
    return a === null && (e.lanes = 0), [l.memoizedState, e.dispatch];
  }
  function lc(l) {
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
      st(n, t.memoizedState) || (Cl = !0), t.memoizedState = n, t.baseQueue === null && (t.baseState = n), u.lastRenderedState = n;
    }
    return [n, e];
  }
  function ds(l, t, u) {
    var e = w, a = Al(), n = F;
    if (n) {
      if (u === void 0) throw Error(o(407));
      u = u();
    } else u = t();
    var f = !st(
      (yl || a).memoizedState,
      u
    );
    if (f && (a.memoizedState = u, Cl = !0), a = a.queue, ec(ms.bind(null, e, a, l), [
      l
    ]), l = a.getSnapshot !== t || f || Ml !== null && (Ml.memoizedState.tag & 1) !== 0, Ve(
      l ? 9 : 8,
      { destroy: void 0 },
      ys.bind(null, e, a, u, t),
      null
    ), l) {
      if (e.flags |= 2048, hl === null) throw Error(o(349));
      n || (du & 127) !== 0 || vs(e, t, u);
    }
    return u;
  }
  function vs(l, t, u) {
    l.flags |= 16384, l = { getSnapshot: t, value: u }, t = w.updateQueue, t === null ? (t = In(), w.updateQueue = t, t.stores = [l]) : (u = t.stores, u === null ? t.stores = [l] : u.push(l));
  }
  function ys(l, t, u, e) {
    t.value = u, t.getSnapshot = e, hs(t) && gs(l);
  }
  function ms(l, t, u) {
    return u(function() {
      hs(t) && gs(l);
    });
  }
  function hs(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var u = t();
      return !st(l, u);
    } catch {
      return !0;
    }
  }
  function gs(l) {
    var t = te(l, 2);
    t !== null && at(t, l, 2);
  }
  function tc(l) {
    var t = Wl();
    if (typeof l == "function") {
      var u = l;
      if (l = u(), de) {
        Eu(!0);
        try {
          u();
        } finally {
          Eu(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = l, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: vu,
      lastRenderedState: l
    }, t;
  }
  function Ss(l, t, u, e) {
    return l.baseState = u, Pi(
      l,
      yl,
      typeof e == "function" ? e : vu
    );
  }
  function Qy(l, t, u, e, a) {
    if (uf(l)) throw Error(o(485));
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
      R.T !== null ? u(!0) : n.isTransition = !1, e(n), u = t.pending, u === null ? (n.next = t.pending = n, Ts(t, n)) : (n.next = u.next, t.pending = u.next = n);
    }
  }
  function Ts(l, t) {
    var u = t.action, e = t.payload, a = l.state;
    if (t.isTransition) {
      var n = R.T, f = {};
      f.types = n !== null ? n.types : null, R.T = f;
      try {
        var i = u(a, e), c = R.S;
        c !== null && c(f, i), bs(l, t, i);
      } catch (m) {
        uc(l, t, m);
      } finally {
        n !== null && f.types !== null && (n.types = f.types), R.T = n;
      }
    } else
      try {
        n = u(a, e), bs(l, t, n);
      } catch (m) {
        uc(l, t, m);
      }
  }
  function bs(l, t, u) {
    u !== null && typeof u == "object" && typeof u.then == "function" ? u.then(
      function(e) {
        Es(l, t, e);
      },
      function(e) {
        return uc(l, t, e);
      }
    ) : Es(l, t, u);
  }
  function Es(l, t, u) {
    t.status = "fulfilled", t.value = u, zs(t), l.state = u, t = l.pending, t !== null && (u = t.next, u === t ? l.pending = null : (u = u.next, t.next = u, Ts(l, u)));
  }
  function uc(l, t, u) {
    var e = l.pending;
    if (l.pending = null, e !== null) {
      e = e.next;
      do
        t.status = "rejected", t.reason = u, zs(t), t = t.next;
      while (t !== e);
    }
    l.action = null;
  }
  function zs(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function Os(l, t) {
    return t;
  }
  function _s(l, t) {
    if (F) {
      var u = hl.formState;
      if (u !== null) {
        l: {
          var e = w;
          if (F) {
            if (Sl) {
              t: {
                for (var a = Sl, n = At; a.nodeType !== 8; ) {
                  if (!n) {
                    a = null;
                    break t;
                  }
                  if (a = Mt(
                    a.nextSibling
                  ), a === null) {
                    a = null;
                    break t;
                  }
                }
                n = a.data, a = n === "F!" || n === "F" ? a : null;
              }
              if (a) {
                Sl = Mt(
                  a.nextSibling
                ), e = a.data === "F!";
                break l;
              }
            }
            Au(e);
          }
          e = !1;
        }
        e && (t = u[0]);
      }
    }
    return u = Wl(), u.memoizedState = u.baseState = t, e = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Os,
      lastRenderedState: t
    }, u.queue = e, u = Vs.bind(
      null,
      w,
      e
    ), e.dispatch = u, e = tc(!1), n = cc.bind(
      null,
      w,
      !1,
      e.queue
    ), e = Wl(), a = {
      state: t,
      dispatch: null,
      action: l,
      pending: null
    }, e.queue = a, u = Qy.bind(
      null,
      w,
      a,
      n,
      u
    ), a.dispatch = u, e.memoizedState = l, [t, u, !1];
  }
  function Ns(l) {
    var t = Al();
    return As(t, yl, l);
  }
  function As(l, t, u) {
    if (t = Pi(
      l,
      t,
      Os
    )[0], l = Pn(vu)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var e = xa(t);
      } catch (f) {
        throw f === Ge ? Vn : f;
      }
    else e = t;
    t = Al();
    var a = t.queue, n = a.dispatch;
    return u !== t.memoizedState && (w.flags |= 2048, Ve(
      9,
      { destroy: void 0 },
      Zy.bind(null, a, u),
      null
    )), [e, n, l];
  }
  function Zy(l, t) {
    l.action = t;
  }
  function ps(l) {
    var t = Al(), u = yl;
    if (u !== null)
      return As(t, u, l);
    Al(), t = t.memoizedState, u = Al();
    var e = u.queue.dispatch;
    return u.memoizedState = l, [t, e, !1];
  }
  function Ve(l, t, u, e) {
    return l = { tag: l, create: u, deps: e, inst: t, next: null }, t = w.updateQueue, t === null && (t = In(), w.updateQueue = t), u = t.lastEffect, u === null ? t.lastEffect = l.next = l : (e = u.next, u.next = l, l.next = e, t.lastEffect = l), l;
  }
  function Ms() {
    return Al().memoizedState;
  }
  function lf(l, t, u, e) {
    var a = Wl();
    w.flags |= l, a.memoizedState = Ve(
      1 | t,
      { destroy: void 0 },
      u,
      e === void 0 ? null : e
    );
  }
  function tf(l, t, u, e) {
    var a = Al();
    e = e === void 0 ? null : e;
    var n = a.memoizedState.inst;
    yl !== null && e !== null && wi(e, yl.memoizedState.deps) ? a.memoizedState = Ve(t, n, u, e) : (w.flags |= l, a.memoizedState = Ve(
      1 | t,
      n,
      u,
      e
    ));
  }
  function Cs(l, t) {
    lf(8390656, 8, l, t);
  }
  function ec(l, t) {
    tf(2048, 8, l, t);
  }
  function Vy(l) {
    w.flags |= 4;
    var t = w.updateQueue;
    if (t === null)
      t = In(), w.updateQueue = t, t.events = [l];
    else {
      var u = t.events;
      u === null ? t.events = [l] : u.push(l);
    }
  }
  function Ds(l) {
    var t = Al().memoizedState;
    return Vy({ ref: t, nextImpl: l }), function() {
      if ((cl & 2) !== 0) throw Error(o(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function Us(l, t) {
    return tf(4, 2, l, t);
  }
  function Rs(l, t) {
    return tf(4, 4, l, t);
  }
  function Hs(l, t) {
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
  function Bs(l, t, u) {
    u = u != null ? u.concat([l]) : null, tf(4, 4, Hs.bind(null, t, l), u);
  }
  function ac() {
  }
  function Ys(l, t) {
    var u = Al();
    t = t === void 0 ? null : t;
    var e = u.memoizedState;
    return t !== null && wi(t, e[1]) ? e[0] : (u.memoizedState = [l, t], l);
  }
  function js(l, t) {
    var u = Al();
    t = t === void 0 ? null : t;
    var e = u.memoizedState;
    if (t !== null && wi(t, e[1]))
      return e[0];
    if (e = l(), de) {
      Eu(!0);
      try {
        l();
      } finally {
        Eu(!1);
      }
    }
    return u.memoizedState = [e, t], e;
  }
  function nc(l, t, u) {
    return u === void 0 || (du & 1073741824) !== 0 && (P & 261930) === 0 ? l.memoizedState = t : (l.memoizedState = u, l = J0(), w.lanes |= l, xu |= l, u);
  }
  function qs(l, t, u, e) {
    return st(u, t) ? u : Ru.current !== null ? (l = nc(l, u, e), st(l, t) || (Cl = !0), l) : (du & 106) === 0 || (du & 1073741824) !== 0 && (P & 261930) === 0 ? (Cl = !0, l.memoizedState = u) : (l = J0(), w.lanes |= l, xu |= l, t);
  }
  function xs(l, t, u, e, a) {
    var n = K.p;
    K.p = n !== 0 && 8 > n ? n : 8;
    var f = R.T, i = {};
    i.types = f !== null ? f.types : null, R.T = i, cc(l, !1, t, u);
    try {
      var c = a(), m = R.S;
      if (m !== null && m(i, c), c !== null && typeof c == "object" && typeof c.then == "function") {
        var T = xy(
          c,
          e
        );
        Ga(
          l,
          t,
          T,
          ht(l)
        );
      } else
        Ga(
          l,
          t,
          e,
          ht(l)
        );
    } catch (O) {
      Ga(
        l,
        t,
        { then: function() {
        }, status: "rejected", reason: O },
        ht()
      );
    } finally {
      K.p = n, f !== null && i.types !== null && (f.types = i.types), R.T = f;
    }
  }
  function Ly() {
  }
  function fc(l, t, u, e) {
    if (l.tag !== 5) throw Error(o(476));
    var a = Gs(l).queue;
    xs(
      l,
      a,
      t,
      uu,
      u === null ? Ly : function() {
        return Xs(l), u(e);
      }
    );
  }
  function Gs(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: uu,
      baseState: uu,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: vu,
        lastRenderedState: uu
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
        lastRenderedReducer: vu,
        lastRenderedState: u
      },
      next: null
    }, l.memoizedState = t, l = l.alternate, l !== null && (l.memoizedState = t), t;
  }
  function Xs(l) {
    var t = Gs(l);
    t.next === null && (t = l.alternate.memoizedState), Ga(
      l,
      t.next.queue,
      {},
      ht()
    );
  }
  function ic() {
    return Xl(ca);
  }
  function Qs() {
    return Al().memoizedState;
  }
  function Zs() {
    return Al().memoizedState;
  }
  function Ky(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var u = ht();
          l = Du(u);
          var e = Uu(t, l, u);
          e !== null && (at(e, t, u), Ha(e, t, u)), t = { cache: Yi() }, l.payload = t;
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
    }, uf(l) ? Ls(t, u) : (u = Ai(l, t, u, e), u !== null && (at(u, l, e), Ks(u, t, e)));
  }
  function Vs(l, t, u) {
    var e = ht();
    Ga(l, t, u, e);
  }
  function Ga(l, t, u, e) {
    var a = {
      lane: e,
      revertLane: 0,
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (uf(l)) Ls(t, a);
    else {
      var n = l.alternate;
      if (l.lanes === 0 && (n === null || n.lanes === 0) && (n = t.lastRenderedReducer, n !== null))
        try {
          var f = t.lastRenderedState, i = n(f, u);
          if (a.hasEagerState = !0, a.eagerState = i, st(i, f))
            return Hn(l, t, a, 0), hl === null && Rn(), !1;
        } catch {
        }
      if (u = Ai(l, t, a, e), u !== null)
        return at(u, l, e), Ks(u, t, e), !0;
    }
    return !1;
  }
  function cc(l, t, u, e) {
    if (e = {
      lane: 2,
      revertLane: kc(),
      gesture: null,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, uf(l)) {
      if (t) throw Error(o(479));
    } else
      t = Ai(
        l,
        u,
        e,
        2
      ), t !== null && at(t, l, 2);
  }
  function uf(l) {
    var t = l.alternate;
    return l === w || t !== null && t === w;
  }
  function Ls(l, t) {
    Qe = Fn = !0;
    var u = l.pending;
    u === null ? t.next = t : (t.next = u.next, u.next = t), l.pending = t;
  }
  function Ks(l, t, u) {
    if ((u & 4194048) !== 0) {
      var e = t.lanes;
      e &= l.pendingLanes, u |= e, t.lanes = u, Jo(l, u);
    }
  }
  var ef = {
    readContext: Xl,
    use: kn,
    useCallback: _l,
    useContext: _l,
    useEffect: _l,
    useImperativeHandle: _l,
    useLayoutEffect: _l,
    useInsertionEffect: _l,
    useMemo: _l,
    useReducer: _l,
    useRef: _l,
    useState: _l,
    useDebugValue: _l,
    useDeferredValue: _l,
    useTransition: _l,
    useSyncExternalStore: _l,
    useId: _l,
    useHostTransitionStatus: _l,
    useFormState: _l,
    useActionState: _l,
    useOptimistic: _l,
    useMemoCache: _l,
    useCacheRefresh: _l,
    useEffectEvent: _l
  }, Js = {
    readContext: Xl,
    use: kn,
    useCallback: function(l, t) {
      return Wl().memoizedState = [
        l,
        t === void 0 ? null : t
      ], l;
    },
    useContext: Xl,
    useEffect: Cs,
    useImperativeHandle: function(l, t, u) {
      u = u != null ? u.concat([l]) : null, lf(
        4194308,
        4,
        Hs.bind(null, t, l),
        u
      );
    },
    useLayoutEffect: function(l, t) {
      return lf(4194308, 4, l, t);
    },
    useInsertionEffect: function(l, t) {
      lf(4, 2, l, t);
    },
    useMemo: function(l, t) {
      var u = Wl();
      t = t === void 0 ? null : t;
      var e = l();
      if (de) {
        Eu(!0);
        try {
          l();
        } finally {
          Eu(!1);
        }
      }
      return u.memoizedState = [e, t], e;
    },
    useReducer: function(l, t, u) {
      var e = Wl();
      if (u !== void 0) {
        var a = u(t);
        if (de) {
          Eu(!0);
          try {
            u(t);
          } finally {
            Eu(!1);
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
        w,
        l
      ), [e.memoizedState, l];
    },
    useRef: function(l) {
      var t = Wl();
      return l = { current: l }, t.memoizedState = l;
    },
    useState: function(l) {
      l = tc(l);
      var t = l.queue, u = Vs.bind(null, w, t);
      return t.dispatch = u, [l.memoizedState, u];
    },
    useDebugValue: ac,
    useDeferredValue: function(l, t) {
      var u = Wl();
      return nc(u, l, t);
    },
    useTransition: function() {
      var l = tc(!1);
      return l = xs.bind(
        null,
        w,
        l.queue,
        !0,
        !1
      ), Wl().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, t, u) {
      var e = w, a = Wl();
      if (F) {
        if (u === void 0)
          throw Error(o(407));
        u = u();
      } else {
        if (u = t(), hl === null)
          throw Error(o(349));
        (P & 127) !== 0 || vs(e, t, u);
      }
      a.memoizedState = u;
      var n = { value: u, getSnapshot: t };
      return a.queue = n, Cs(ms.bind(null, e, n, l), [
        l
      ]), e.flags |= 2048, Ve(
        9,
        { destroy: void 0 },
        ys.bind(
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
      var l = Wl(), t = hl.identifierPrefix;
      if (F) {
        var u = Kt, e = Lt;
        u = (e & ~(1 << 32 - ot(e) - 1)).toString(32) + u, t = "_" + t + "R_" + u, u = Wn++, 0 < u && (t += "H" + u.toString(32)), t += "_";
      } else
        u = Gy++, t = "_" + t + "r_" + u.toString(32) + "_";
      return l.memoizedState = t;
    },
    useHostTransitionStatus: ic,
    useFormState: _s,
    useActionState: _s,
    useOptimistic: function(l) {
      var t = Wl();
      t.memoizedState = t.baseState = l;
      var u = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = u, t = cc.bind(
        null,
        w,
        !0,
        u
      ), u.dispatch = t, [l, t];
    },
    useMemoCache: ki,
    useCacheRefresh: function() {
      return Wl().memoizedState = Ky.bind(
        null,
        w
      );
    },
    useEffectEvent: function(l) {
      var t = Wl(), u = { impl: l };
      return t.memoizedState = u, function() {
        if ((cl & 2) !== 0)
          throw Error(o(440));
        return u.impl.apply(void 0, arguments);
      };
    }
  }, ws = {
    readContext: Xl,
    use: kn,
    useCallback: Ys,
    useContext: Xl,
    useEffect: ec,
    useImperativeHandle: Bs,
    useInsertionEffect: Us,
    useLayoutEffect: Rs,
    useMemo: js,
    useReducer: Pn,
    useRef: Ms,
    useState: function() {
      return Pn(vu);
    },
    useDebugValue: ac,
    useDeferredValue: function(l, t) {
      var u = Al();
      return qs(
        u,
        yl.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = Pn(vu)[0], t = Al().memoizedState;
      return [
        typeof l == "boolean" ? l : xa(l),
        t
      ];
    },
    useSyncExternalStore: ds,
    useId: Qs,
    useHostTransitionStatus: ic,
    useFormState: Ns,
    useActionState: Ns,
    useOptimistic: function(l, t) {
      var u = Al();
      return Ss(u, yl, l, t);
    },
    useMemoCache: ki,
    useCacheRefresh: Zs,
    useEffectEvent: Ds
  }, wy = {
    readContext: Xl,
    use: kn,
    useCallback: Ys,
    useContext: Xl,
    useEffect: ec,
    useImperativeHandle: Bs,
    useInsertionEffect: Us,
    useLayoutEffect: Rs,
    useMemo: js,
    useReducer: lc,
    useRef: Ms,
    useState: function() {
      return lc(vu);
    },
    useDebugValue: ac,
    useDeferredValue: function(l, t) {
      var u = Al();
      return yl === null ? nc(u, l, t) : qs(
        u,
        yl.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = lc(vu)[0], t = Al().memoizedState;
      return [
        typeof l == "boolean" ? l : xa(l),
        t
      ];
    },
    useSyncExternalStore: ds,
    useId: Qs,
    useHostTransitionStatus: ic,
    useFormState: ps,
    useActionState: ps,
    useOptimistic: function(l, t) {
      var u = Al();
      return yl !== null ? Ss(u, yl, l, t) : (u.baseState = l, [l, u.queue.dispatch]);
    },
    useMemoCache: ki,
    useCacheRefresh: Zs,
    useEffectEvent: Ds
  };
  function oc(l, t, u, e) {
    t = l.memoizedState, u = u(e, t), u = u == null ? t : W({}, t, u), l.memoizedState = u, l.lanes === 0 && (l.updateQueue.baseState = u);
  }
  var rc = {
    enqueueSetState: function(l, t, u) {
      l = l._reactInternals;
      var e = ht(), a = Du(e);
      a.payload = t, u != null && (a.callback = u), t = Uu(l, a, e), t !== null && (at(t, l, e), Ha(t, l, e));
    },
    enqueueReplaceState: function(l, t, u) {
      l = l._reactInternals;
      var e = ht(), a = Du(e);
      a.tag = 1, a.payload = t, u != null && (a.callback = u), t = Uu(l, a, e), t !== null && (at(t, l, e), Ha(t, l, e));
    },
    enqueueForceUpdate: function(l, t) {
      l = l._reactInternals;
      var u = ht(), e = Du(u);
      e.tag = 2, t != null && (e.callback = t), t = Uu(l, e, u), t !== null && (at(t, l, u), Ha(t, l, u));
    }
  };
  function $s(l, t, u, e, a, n, f) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(e, n, f) : t.prototype && t.prototype.isPureReactComponent ? !Na(u, e) || !Na(a, n) : !0;
  }
  function Fs(l, t, u, e) {
    l = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(u, e), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(u, e), t.state !== l && rc.enqueueReplaceState(t, t.state, null);
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
  function Ws(l) {
    Un(l);
  }
  function Is(l) {
    console.error(l);
  }
  function ks(l) {
    Un(l);
  }
  function af(l, t) {
    try {
      var u = l.onUncaughtError;
      u(t.value, { componentStack: t.stack });
    } catch (e) {
      setTimeout(function() {
        throw e;
      });
    }
  }
  function Ps(l, t, u) {
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
  function sc(l, t, u) {
    return u = Du(u), u.tag = 3, u.payload = { element: null }, u.callback = function() {
      af(l, t);
    }, u;
  }
  function l0(l) {
    return l = Du(l), l.tag = 3, l;
  }
  function t0(l, t, u, e) {
    var a = u.type.getDerivedStateFromError;
    if (typeof a == "function") {
      var n = e.value;
      l.payload = function() {
        return a(n);
      }, l.callback = function() {
        Ps(t, u, e);
      };
    }
    var f = u.stateNode;
    f !== null && typeof f.componentDidCatch == "function" && (l.callback = function() {
      Ps(t, u, e), typeof a != "function" && (Gu === null ? Gu = /* @__PURE__ */ new Set([this]) : Gu.add(this));
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
      ), u = Ql.current, u !== null) {
        switch (u.tag) {
          case 31:
          case 13:
          case 19:
            return wl === null ? Af() : u.alternate === null && Nl === 0 && (Nl = 3), u.flags &= -257, u.flags |= 65536, u.lanes = a, e === Ln ? u.flags |= 16384 : (t = u.updateQueue, t === null ? u.updateQueue = /* @__PURE__ */ new Set([e]) : t.add(e), Fc(l, e, a)), !1;
          case 22:
            return u.flags |= 65536, e === Ln ? u.flags |= 16384 : (t = u.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([e])
            }, u.updateQueue = t) : (u = t.retryQueue, u === null ? t.retryQueue = /* @__PURE__ */ new Set([e]) : u.add(e)), Fc(l, e, a)), !1;
        }
        throw Error(o(435, u.tag));
      }
      return Fc(l, e, a), Af(), !1;
    }
    if (F)
      return t = Ql.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = a, e !== Ui && (l = Error(o(422), { cause: e }), Ma(Ot(l, u)))) : (e !== Ui && (t = Error(o(423), {
        cause: e
      }), Ma(
        Ot(t, u)
      )), l = l.current.alternate, l.flags |= 65536, a &= -a, l.lanes |= a, e = Ot(e, u), a = sc(
        l.stateNode,
        e,
        a
      ), Qi(l, a), Nl !== 4 && (Nl = 2)), !1;
    var n = Error(o(520), { cause: e });
    if (n = Ot(n, u), wa === null ? wa = [n] : wa.push(n), Nl !== 4 && (Nl = 2), t === null) return !0;
    e = Ot(e, u), u = t;
    do {
      switch (u.tag) {
        case 3:
          return u.flags |= 65536, l = a & -a, u.lanes |= l, l = sc(u.stateNode, e, l), Qi(u, l), !1;
        case 1:
          if (t = u.type, n = u.stateNode, (u.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (Gu === null || !Gu.has(n))))
            return u.flags |= 65536, a &= -a, u.lanes |= a, a = l0(a), t0(
              a,
              l,
              u,
              e
            ), Qi(u, a), !1;
          break;
        case 22:
          if (u.memoizedState !== null)
            return u.flags |= 65536, !1;
      }
      u = u.return;
    } while (u !== null);
    return !1;
  }
  var dc = Error(o(461)), Cl = !1;
  function Ul(l, t, u, e) {
    t.child = l === null ? ns(t, null, u, e) : se(
      t,
      l.child,
      u,
      e
    );
  }
  function u0(l, t, u, e, a) {
    u = u.render;
    var n = t.ref;
    if ("ref" in e) {
      var f = {};
      for (var i in e)
        i !== "ref" && (f[i] = e[i]);
    } else f = e;
    return fe(t), e = $i(
      l,
      t,
      u,
      f,
      n,
      a
    ), i = Fi(), l !== null && !Cl ? (Wi(l, t, a), yu(l, t, a)) : (F && i && qn(t), t.flags |= 1, Ul(l, t, e, a), t.child);
  }
  function e0(l, t, u, e, a) {
    if (l === null) {
      var n = u.type;
      return typeof n == "function" && !pi(n) && n.defaultProps === void 0 && u.compare === null ? (t.tag = 15, t.type = n, a0(
        l,
        t,
        n,
        e,
        a
      )) : (l = Yn(
        u.type,
        null,
        e,
        t,
        t.mode,
        a
      ), l.ref = t.ref, l.return = t, t.child = l);
    }
    if (n = l.child, !bc(l, a)) {
      var f = n.memoizedProps;
      if (u = u.compare, u = u !== null ? u : Na, u(f, e) && l.ref === t.ref)
        return yu(l, t, a);
    }
    return t.flags |= 1, l = cu(n, e), l.ref = t.ref, l.return = t, t.child = l;
  }
  function a0(l, t, u, e, a) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (Na(n, e) && l.ref === t.ref)
        if (Cl = !1, t.pendingProps = e = n, bc(l, a))
          (l.flags & 131072) !== 0 && (Cl = !0);
        else
          return t.lanes = l.lanes, yu(l, t, a);
    }
    return vc(
      l,
      t,
      u,
      e,
      a
    );
  }
  function n0(l, t, u, e) {
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
        return f0(
          l,
          t,
          n,
          u,
          e
        );
      }
      if ((u & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && Zn(
          t,
          n !== null ? n.cachePool : null
        ), n !== null ? cs(t, n) : Vi(), os(t);
      else
        return e = t.lanes = 536870912, f0(
          l,
          t,
          n !== null ? n.baseLanes | u : u,
          u,
          e
        );
    } else
      n !== null ? (Zn(t, n.cachePool), cs(t, n), Bu(), t.memoizedState = null) : (l !== null && Zn(t, null), Vi(), Bu());
    return Ul(l, t, a, u), t.child;
  }
  function Xa(l, t) {
    return l !== null && l.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function f0(l, t, u, e, a) {
    var n = qi();
    return n = n === null ? null : { parent: pl._currentValue, pool: n }, t.memoizedState = {
      baseLanes: u,
      cachePool: n
    }, l !== null && Zn(t, null), Vi(), os(t), l !== null && ne(l, t, e, !0), t.childLanes = a, null;
  }
  function nf(l, t) {
    return t = ff(
      { mode: t.mode, children: t.children },
      l.mode
    ), t.ref = l.ref, l.child = t, t.return = l, t;
  }
  function i0(l, t, u) {
    return se(t, l.child, null, u), l = nf(t, t.pendingProps), l.flags |= 2, dt(t), t.memoizedState = null, l;
  }
  function Fy(l, t, u) {
    var e = t.pendingProps, a = (t.flags & 128) !== 0;
    if (t.flags &= -129, l === null) {
      if (F) {
        if (e.mode === "hidden")
          return l = nf(t, e), t.lanes = 536870912, l.memoizedState = { baseLanes: 0, cachePool: null }, Xa(null, l);
        if (Ki(t), (l = Sl) ? (l = Hd(
          l,
          At
        ), l = l !== null && l.data === "&" ? l : null, l !== null && (t.memoizedState = {
          dehydrated: l,
          treeContext: _u !== null ? { id: Lt, overflow: Kt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, u = Lr(l), u.return = t, t.child = u, Bl = t, Sl = null)) : l = null, l === null) throw Au(t);
        return t.lanes = 536870912, null;
      }
      return nf(t, e);
    }
    var n = l.memoizedState;
    if (n !== null) {
      var f = n.dehydrated;
      if (Ki(t), a)
        if (t.flags & 256)
          t.flags &= -257, t = i0(
            l,
            t,
            u
          );
        else if (t.memoizedState !== null)
          t.child = l.child, t.flags |= 128, t = null;
        else throw Error(o(558));
      else if (Cl || ne(l, t, u, !1), a = (u & l.childLanes) !== 0, Cl || a) {
        if (Ru.current === null) {
          if (e = hl, e !== null && (f = wo(e, u), f !== 0 && f !== n.retryLane))
            throw n.retryLane = f, te(l, f), at(e, l, f), dc;
          Af();
        }
        t = i0(
          l,
          t,
          u
        );
      } else
        l = n.treeContext, Sl = Mt(f.nextSibling), Bl = t, F = !0, Nu = null, At = !1, l !== null && wr(t, l), t = nf(t, e), t.flags |= 134221824;
      return t;
    }
    return l = cu(l.child, {
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
  function vc(l, t, u, e, a) {
    return fe(t), u = $i(
      l,
      t,
      u,
      e,
      void 0,
      a
    ), e = Fi(), l !== null && !Cl ? (Wi(l, t, a), yu(l, t, a)) : (F && e && qn(t), t.flags |= 1, Ul(l, t, u, a), t.child);
  }
  function c0(l, t, u, e, a, n) {
    return fe(t), t.updateQueue = null, u = ss(
      t,
      e,
      u,
      a
    ), rs(l), e = Fi(), l !== null && !Cl ? (Wi(l, t, n), yu(l, t, n)) : (F && e && qn(t), t.flags |= 1, Ul(l, t, u, n), t.child);
  }
  function o0(l, t, u, e, a) {
    if (fe(t), t.stateNode === null) {
      var n = Be, f = u.contextType;
      typeof f == "object" && f !== null && (n = Xl(f)), n = new u(e, n), t.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = rc, t.stateNode = n, n._reactInternals = t, n = t.stateNode, n.props = e, n.state = t.memoizedState, n.refs = {}, Gi(t), f = u.contextType, n.context = typeof f == "object" && f !== null ? Xl(f) : Be, n.state = t.memoizedState, f = u.getDerivedStateFromProps, typeof f == "function" && (oc(
        t,
        u,
        f,
        e
      ), n.state = t.memoizedState), typeof u.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (f = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), f !== n.state && rc.enqueueReplaceState(n, n.state, null), Ya(t, e, n, a), Ba(), n.state = t.memoizedState), typeof n.componentDidMount == "function" && (t.flags |= 4194308), e = !0;
    } else if (l === null) {
      n = t.stateNode;
      var i = t.memoizedProps, c = ve(u, i);
      n.props = c;
      var m = n.context, T = u.contextType;
      f = Be, typeof T == "object" && T !== null && (f = Xl(T));
      var O = u.getDerivedStateFromProps;
      T = typeof O == "function" || typeof n.getSnapshotBeforeUpdate == "function", i = t.pendingProps !== i, T || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (i || m !== f) && Fs(
        t,
        n,
        e,
        f
      ), Cu = !1;
      var v = t.memoizedState;
      n.state = v, Ya(t, e, n, a), Ba(), m = t.memoizedState, i || v !== m || Cu ? (typeof O == "function" && (oc(
        t,
        u,
        O,
        e
      ), m = t.memoizedState), (c = Cu || $s(
        t,
        u,
        c,
        e,
        v,
        m,
        f
      )) ? (T || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = e, t.memoizedState = m), n.props = e, n.state = m, n.context = f, e = c) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), e = !1);
    } else {
      n = t.stateNode, Xi(l, t), f = t.memoizedProps, T = ve(u, f), n.props = T, O = t.pendingProps, v = n.context, m = u.contextType, c = Be, typeof m == "object" && m !== null && (c = Xl(m)), i = u.getDerivedStateFromProps, (m = typeof i == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (f !== O || v !== c) && Fs(
        t,
        n,
        e,
        c
      ), Cu = !1, v = t.memoizedState, n.state = v, Ya(t, e, n, a), Ba();
      var g = t.memoizedState;
      f !== O || v !== g || Cu || l !== null && l.dependencies !== null && Xn(l.dependencies) ? (typeof i == "function" && (oc(
        t,
        u,
        i,
        e
      ), g = t.memoizedState), (T = Cu || $s(
        t,
        u,
        T,
        e,
        v,
        g,
        c
      ) || l !== null && l.dependencies !== null && Xn(l.dependencies)) ? (m || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(e, g, c), typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(
        e,
        g,
        c
      )), typeof n.componentDidUpdate == "function" && (t.flags |= 4), typeof n.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || f === l.memoizedProps && v === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || f === l.memoizedProps && v === l.memoizedState || (t.flags |= 1024), t.memoizedProps = e, t.memoizedState = g), n.props = e, n.state = g, n.context = c, e = T) : (typeof n.componentDidUpdate != "function" || f === l.memoizedProps && v === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || f === l.memoizedProps && v === l.memoizedState || (t.flags |= 1024), e = !1);
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
    )) : Ul(l, t, u, a), t.memoizedState = n.state, l = t.child) : l = yu(
      l,
      t,
      a
    ), l;
  }
  function r0(l, t, u, e) {
    return ee(), t.flags |= 256, Ul(l, t, u, e), t.child;
  }
  var yc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function mc(l) {
    return { baseLanes: l, cachePool: Pr() };
  }
  function hc(l, t, u) {
    return l = l !== null ? l.childLanes & ~u : 0, t && (l |= mt), l;
  }
  function s0(l, t, u) {
    var e = t.pendingProps, a = !1, n = (t.flags & 128) !== 0, f;
    if ((f = n) || (f = l !== null && l.memoizedState === null ? !1 : (Zl.current & 2) !== 0), f && (a = !0, t.flags &= -129), f = (t.flags & 32) !== 0, t.flags &= -33, l === null) {
      if (F) {
        if (a ? Hu(t) : Bu(), (l = Sl) ? (l = Hd(
          l,
          At
        ), l = l !== null && l.data !== "&" ? l : null, l !== null && (t.memoizedState = {
          dehydrated: l,
          treeContext: _u !== null ? { id: Lt, overflow: Kt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, u = Lr(l), u.return = t, t.child = u, Bl = t, Sl = null)) : l = null, l === null) throw Au(t);
        return ho(l) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      return n = e.children, e = e.fallback, a ? (Bu(), a = t.mode, n = ff(
        { mode: "hidden", children: n },
        a
      ), e = ue(
        e,
        a,
        u,
        null
      ), n.return = t, e.return = t, n.sibling = e, t.child = n, e = t.child, e.memoizedState = mc(u), e.childLanes = hc(
        l,
        f,
        u
      ), t.memoizedState = yc, Xa(null, e)) : (Hu(t), gc(t, n));
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
    return a ? (Bu(), a = e.fallback, n = t.mode, i = l.child, c = i.sibling, e = cu(i, {
      mode: "hidden",
      children: e.children
    }), e.subtreeFlags = i.subtreeFlags & 1206910976, c !== null ? a = cu(c, a) : (a = ue(
      a,
      n,
      u,
      null
    ), a.flags |= 2), a.return = t, e.return = t, e.sibling = a, t.child = e, Xa(null, e), e = t.child, a = l.child.memoizedState, a === null ? a = mc(u) : (n = a.cachePool, n !== null ? (i = pl._currentValue, n = n.parent !== i ? { parent: i, pool: i } : n) : n = Pr(), a = {
      baseLanes: a.baseLanes | u,
      cachePool: n
    }), e.memoizedState = a, e.childLanes = hc(
      l,
      f,
      u
    ), t.memoizedState = yc, Xa(l.child, e)) : (Hu(t), u = l.child, l = u.sibling, u = cu(u, {
      mode: "visible",
      children: e.children
    }), u.return = t, u.sibling = null, l !== null && (f = t.deletions, f === null ? (t.deletions = [l], t.flags |= 16) : f.push(l)), t.child = u, t.memoizedState = null, u);
  }
  function gc(l, t) {
    return t = ff(
      { mode: "visible", children: t },
      l.mode
    ), t.return = l, l.child = t;
  }
  function ff(l, t) {
    return l = lt(22, l, null, t), l.lanes = 0, l;
  }
  function cf(l, t, u) {
    return se(t, l.child, null, u), l = gc(
      t,
      t.pendingProps.children
    ), l.flags |= 2, t.memoizedState = null, l;
  }
  function Wy(l, t, u, e, a, n, f, i) {
    if (u)
      return t.flags & 256 ? (Hu(t), t.flags &= -257, cf(
        l,
        t,
        i
      )) : t.memoizedState !== null ? (Bu(), t.child = l.child, t.flags |= 128, null) : (Bu(), n = a.fallback, f = t.mode, a = ff(
        { mode: "visible", children: a.children },
        f
      ), n = ue(
        n,
        f,
        i,
        null
      ), n.flags |= 2, a.return = t, n.return = t, a.sibling = n, t.child = a, se(t, l.child, null, i), a = t.child, a.memoizedState = mc(i), a.childLanes = hc(
        l,
        e,
        i
      ), t.memoizedState = yc, Xa(null, a));
    if (Hu(t), ho(n)) {
      if (e = n.nextSibling && n.nextSibling.dataset, e) var c = e.dgst;
      return e = c, e !== "" && (a = Error(o(419)), a.stack = "", a.digest = e, Ma({ value: a, source: null, stack: null })), cf(
        l,
        t,
        i
      );
    }
    if (Cl || ne(l, t, i, !1), e = (i & l.childLanes) !== 0, Cl || e) {
      if (Ru.current !== null)
        return cf(
          l,
          t,
          i
        );
      if (e = hl, e !== null && (a = wo(
        e,
        i
      ), a !== 0 && a !== f.retryLane))
        throw f.retryLane = a, te(l, a), at(e, l, a), dc;
      return mo(n) || Af(), cf(
        l,
        t,
        i
      );
    }
    return mo(n) ? (t.flags |= 192, t.child = l.child, null) : (l = f.treeContext, Sl = Mt(n.nextSibling), Bl = t, F = !0, Nu = null, At = !1, l !== null && wr(t, l), t = gc(
      t,
      a.children
    ), t.flags |= 134221824, t);
  }
  function d0(l, t, u) {
    l.lanes |= t;
    var e = l.alternate;
    e !== null && (e.lanes |= t), Gn(l.return, t, u);
  }
  function v0(l) {
    for (var t = null; l !== null; ) {
      var u = l.alternate;
      u !== null && $n(u) === null && (t = l), l = l.sibling;
    }
    return t;
  }
  function of(l, t, u, e, a, n) {
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
  function Sc(l) {
    var t = l.child;
    for (l.child = null; t !== null; ) {
      var u = t.sibling;
      t.sibling = l.child, l.child = t, t = u;
    }
  }
  function Tc(l, t, u) {
    var e = t.pendingProps, a = e.revealOrder, n = e.tail;
    e = e.children;
    var f = Zl.current;
    if (t.flags & 128)
      return ja(t, f), null;
    var i = (f & 2) !== 0;
    if (i ? (f = f & 1 | 2, t.flags |= 128) : f &= 1, ja(t, f), a === "backwards" && l !== null ? (Sc(l), Ul(l, t, e, u), Sc(l)) : Ul(l, t, e, u), e = F ? pa : 0, !i && l !== null && (l.flags & 128) !== 0)
      l: for (l = t.child; l !== null; ) {
        if (l.tag === 13)
          l.memoizedState !== null && d0(l, u, t);
        else if (l.tag === 19)
          d0(l, u, t);
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
        u = v0(t.child), u === null ? (a = t.child, t.child = null) : (a = u.sibling, u.sibling = null, Sc(t)), of(
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
          if (l = a.alternate, l !== null && $n(l) === null) {
            t.child = a;
            break;
          }
          l = a.sibling, a.sibling = u, u = a, a = l;
        }
        of(
          t,
          !0,
          u,
          null,
          n,
          e
        );
        break;
      case "together":
        of(
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
        u = v0(t.child), u === null ? (a = t.child, t.child = null) : (a = u.sibling, u.sibling = null), of(
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
  function y0(l, t, u) {
    var e = t.pendingProps;
    return pu(t, t.type, e.value), Ul(l, t, e.children, u), t.child;
  }
  function yu(l, t, u) {
    if (l !== null && (t.dependencies = l.dependencies), xu |= t.lanes, (u & t.childLanes) === 0)
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
      for (l = t.child, u = cu(l, l.pendingProps), t.child = u, u.return = t; l.sibling !== null; )
        l = l.sibling, u = u.sibling = cu(l, l.pendingProps), u.return = t;
      u.sibling = null;
    }
    return t.child;
  }
  function bc(l, t) {
    return (l.lanes & t) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && Xn(l)));
  }
  function Iy(l, t, u) {
    switch (t.tag) {
      case 3:
        vn(t, t.stateNode.containerInfo), pu(t, pl, l.memoizedState.cache), ee();
        break;
      case 27:
      case 5:
        wf(t);
        break;
      case 4:
        vn(t, t.stateNode.containerInfo);
        break;
      case 10:
        pu(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, Ki(t), null;
        break;
      case 13:
        var e = t.memoizedState;
        if (e !== null) {
          if (e.dehydrated !== null)
            return Hu(t), t.flags |= 128, null;
          e = ne(
            l,
            t,
            u,
            !1
          );
          var a = t.child.childLanes;
          return e || (u & a) !== 0 ? s0(l, t, u) : (Hu(t), l = yu(
            l,
            t,
            u
          ), l !== null ? l.sibling : null);
        }
        Hu(t);
        break;
      case 19:
        if (t.flags & 128)
          return Tc(
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
            return Tc(
              l,
              t,
              u
            );
          t.flags |= 128;
        }
        if (a = t.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), ja(t, Zl.current), e) break;
        return null;
      case 22:
        return t.lanes = 0, n0(
          l,
          t,
          u,
          t.pendingProps
        );
      case 24:
        pu(t, pl, l.memoizedState.cache);
    }
    return yu(l, t, u);
  }
  function m0(l, t, u) {
    if (l !== null)
      if (l.memoizedProps !== t.pendingProps)
        Cl = !0;
      else {
        if (!bc(l, u) && (t.flags & 128) === 0)
          return Cl = !1, Iy(
            l,
            t,
            u
          );
        Cl = (l.flags & 131072) !== 0;
      }
    else
      Cl = !1, F && (t.flags & 1048576) !== 0 && Jr(t, pa, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        l: {
          var e = t.pendingProps;
          if (l = oe(t.elementType), t.type = l, typeof l == "function")
            pi(l) ? (e = ve(l, e), t.tag = 1, t = o0(
              null,
              t,
              l,
              e,
              u
            )) : (t.tag = 0, t = vc(
              null,
              t,
              l,
              e,
              u
            ));
          else {
            if (l != null) {
              var a = l.$$typeof;
              if (a === M) {
                t.tag = 11, t = u0(
                  null,
                  t,
                  l,
                  e,
                  u
                );
                break l;
              } else if (a === ml) {
                t.tag = 14, t = e0(
                  null,
                  t,
                  l,
                  e,
                  u
                );
                break l;
              } else if (a === Rl) {
                t.tag = 10, t.type = l, t = y0(
                  null,
                  t,
                  u
                );
                break l;
              }
            }
            throw t = al(l) || l, Error(o(306, t, ""));
          }
        }
        return t;
      case 0:
        return vc(
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
        ), o0(
          l,
          t,
          e,
          a,
          u
        );
      case 3:
        l: {
          if (vn(
            t,
            t.stateNode.containerInfo
          ), l === null) throw Error(o(387));
          e = t.pendingProps;
          var n = t.memoizedState;
          a = n.element, Xi(l, t), Ya(t, e, null, u);
          var f = t.memoizedState;
          if (e = f.cache, pu(t, pl, e), e !== n.cache && Bi(
            t,
            [pl],
            u,
            !0
          ), Ba(), e = f.element, n.isDehydrated)
            if (n = {
              element: e,
              isDehydrated: !1,
              cache: f.cache
            }, t.updateQueue.baseState = n, t.memoizedState = n, t.flags & 256) {
              t = r0(
                l,
                t,
                e,
                u
              );
              break l;
            } else if (e !== a) {
              a = Ot(
                Error(o(424)),
                t
              ), Ma(a), t = r0(
                l,
                t,
                e,
                u
              );
              break l;
            } else
              for (l = t.stateNode.containerInfo, l.nodeType === 9 ? l = l.body : l = l.nodeName === "HTML" ? l.ownerDocument.body : l, Sl = Mt(l.firstChild), Bl = t, F = !0, Nu = null, At = !0, u = ns(
                t,
                null,
                e,
                u
              ), t.child = u; u; )
                u.flags = u.flags & -3 | 134221824, u = u.sibling;
          else {
            if (ee(), e === a) {
              t = yu(
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
          Tu.current,
          t
        )) : t.memoizedState = Xd(
          t.type,
          l.memoizedProps,
          t.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return wf(t), l === null && F && (e = t.stateNode = jd(
          t.type,
          t.pendingProps,
          Tu.current
        ), Bl = t, At = !0, a = Sl, Zu(t.type) ? (go = a, Sl = Mt(e.firstChild)) : Sl = a), Ul(
          l,
          t,
          t.pendingProps.children,
          u
        ), Le(l, t), l === null && (t.flags |= 4194304), t.child;
      case 5:
        return l === null && F && ((a = e = Sl) && (e = Km(
          e,
          t.type,
          t.pendingProps,
          At
        ), e !== null ? (t.stateNode = e, Bl = t, Sl = Mt(e.firstChild), At = !1, a = !0) : a = !1), a || Au(t)), wf(t), a = t.type, n = t.pendingProps, f = l !== null ? l.memoizedProps : null, e = n.children, io(a, n) ? e = null : f !== null && io(a, f) && (t.flags |= 32), t.memoizedState !== null && (a = $i(
          l,
          t,
          Xy,
          null,
          null,
          u
        ), ca._currentValue = a), Le(l, t), Ul(l, t, e, u), t.child;
      case 6:
        return l === null && F && ((l = u = Sl) && (u = Jm(
          u,
          t.pendingProps,
          At
        ), u !== null ? (t.stateNode = u, Bl = t, Sl = null, l = !0) : l = !1), l || Au(t)), null;
      case 13:
        return s0(l, t, u);
      case 4:
        return vn(
          t,
          t.stateNode.containerInfo
        ), e = t.pendingProps, l === null ? t.child = se(
          t,
          null,
          e,
          u
        ) : Ul(l, t, e, u), t.child;
      case 11:
        return u0(
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
        return y0(l, t, u);
      case 9:
        return a = t.type._context, e = t.pendingProps.children, fe(t), a = Xl(a), e = e(a), t.flags |= 1, Ul(l, t, e, u), t.child;
      case 14:
        return e0(
          l,
          t,
          t.type,
          t.pendingProps,
          u
        );
      case 15:
        return a0(
          l,
          t,
          t.type,
          t.pendingProps,
          u
        );
      case 19:
        return Tc(l, t, u);
      case 31:
        return Fy(l, t, u);
      case 22:
        return n0(
          l,
          t,
          u,
          t.pendingProps
        );
      case 24:
        return fe(t), e = Xl(pl), l === null ? (a = qi(), a === null && (a = hl, n = Yi(), a.pooledCache = n, n.refCount++, n !== null && (a.pooledCacheLanes |= u), a = n), t.memoizedState = { parent: e, cache: a }, Gi(t), pu(t, pl, a)) : ((l.lanes & u) !== 0 && (Xi(l, t), Ya(t, null, null, u), Ba()), a = l.memoizedState, n = t.memoizedState, a.parent !== e ? (a = { parent: e, cache: e }, t.memoizedState = a, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = a), pu(t, pl, e)) : (e = n.cache, pu(t, pl, e), e !== a.cache && Bi(
          t,
          [pl],
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
        }), e = t.pendingProps, e.name != null && e.name !== "auto" ? t.flags |= l === null ? 18882560 : 18874368 : F && qn(t), l !== null && l.memoizedProps.name !== e.name ? t.flags |= 4194816 : Le(l, t), Ul(l, t, e.children, u), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(o(156, t.tag));
  }
  function mu(l) {
    l.flags |= 4;
  }
  function Ec(l, t, u, e, a) {
    var n;
    if ((n = (l.mode & 32) !== 0) && (n = u === null ? Ld(t, e) : Ld(t, e) && (e.src !== u.src || e.srcSet !== u.srcSet)), n) {
      if (l.flags |= 16777216, (a & 335544128) === a)
        if (l.stateNode.complete) l.flags |= 8192;
        else if (W0()) l.flags |= 8192;
        else
          throw re = Ln, xi;
    } else l.flags &= -16777217;
  }
  function h0(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !Kd(t))
      if (W0()) l.flags |= 8192;
      else
        throw re = Ln, xi;
  }
  function rf(l, t) {
    t !== null && (l.flags |= 4), l.flags & 16384 && (t = l.tag !== 22 ? Lo() : 536870912, l.lanes |= t, Fe |= t);
  }
  function Qa(l, t) {
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
  function Tl(l) {
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
        return Tl(t), null;
      case 1:
        return Tl(t), null;
      case 3:
        return u = t.stateNode, e = null, l !== null && (e = l.memoizedState.cache), t.memoizedState.cache !== e && (t.flags |= 2048), su(pl), Ee(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (l === null || l.child === null) && (qe(t) ? mu(t) : l === null || l.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Ri())), Tl(t), null;
      case 26:
        var a = t.type, n = t.memoizedState;
        return l === null ? (mu(t), n !== null ? (Tl(t), h0(t, n)) : (Tl(t), Ec(
          t,
          a,
          null,
          e,
          u
        ))) : n ? n !== l.memoizedState ? (mu(t), Tl(t), h0(t, n)) : (Tl(t), t.flags &= -16777217) : (l = l.memoizedProps, l !== e && mu(t), Tl(t), Ec(
          t,
          a,
          l,
          e,
          u
        )), null;
      case 27:
        if (yn(t), u = Tu.current, a = t.type, l !== null && t.stateNode != null)
          l.memoizedProps !== e && mu(t);
        else {
          if (!e) {
            if (t.stateNode === null)
              throw Error(o(166));
            return Tl(t), t.subtreeFlags &= -33554433, null;
          }
          l = Zt.current, qe(t) ? $r(t) : (l = jd(a, e, u), t.stateNode = l, mu(t));
        }
        return Tl(t), t.subtreeFlags &= -33554433, null;
      case 5:
        if (yn(t), a = t.type, l !== null && t.stateNode != null)
          l.memoizedProps !== e && mu(t);
        else {
          if (!e) {
            if (t.stateNode === null)
              throw Error(o(166));
            return Tl(t), t.subtreeFlags &= -33554433, null;
          }
          if (n = Zt.current, qe(t))
            $r(t);
          else {
            var f = ka(
              Tu.current
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
            n[Gl] = t, n[Pl] = e;
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
            l: switch (Ll(n, a, e), a) {
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
            e && mu(t);
          }
        }
        return Tl(t), t.subtreeFlags &= -33554433, Ec(
          t,
          t.type,
          l === null ? null : l.memoizedProps,
          t.pendingProps,
          u
        ), null;
      case 6:
        if (l && t.stateNode != null)
          l.memoizedProps !== e && mu(t);
        else {
          if (typeof e != "string" && t.stateNode === null)
            throw Error(o(166));
          if (l = Tu.current, qe(t)) {
            if (l = t.stateNode, u = t.memoizedProps, e = null, a = Bl, a !== null)
              switch (a.tag) {
                case 27:
                case 5:
                  e = a.memoizedProps;
              }
            l[Gl] = t, l = !!(l.nodeValue === u || e !== null && e.suppressHydrationWarning === !0 || md(l.nodeValue, u)), l || Au(t, !0);
          } else
            l = ka(l).createTextNode(
              e
            ), l[Gl] = t, t.stateNode = l;
        }
        return Tl(t), null;
      case 31:
        if (u = t.memoizedState, l === null || l.memoizedState !== null) {
          if (e = qe(t), u !== null) {
            if (l === null) {
              if (!e) throw Error(o(318));
              if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(o(557));
              l[Gl] = t;
            } else
              ee(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Tl(t), l = !1;
          } else
            u = Ri(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = u), l = !0;
          if (!l)
            return t.flags & 256 ? (dt(t), t) : (dt(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(o(558));
        }
        return Tl(t), null;
      case 13:
        if (e = t.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (a = qe(t), e !== null && e.dehydrated !== null) {
            if (l === null) {
              if (!a) throw Error(o(318));
              if (a = t.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(o(317));
              a[Gl] = t;
            } else
              ee(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Tl(t), a = !1;
          } else
            a = Ri(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = a), a = !0;
          if (!a)
            return t.flags & 256 ? (dt(t), t) : (dt(t), null);
        }
        return dt(t), (t.flags & 128) !== 0 ? (t.lanes = u, t) : (u = e !== null, l = l !== null && l.memoizedState !== null, u && (e = t.child, a = null, e.alternate !== null && e.alternate.memoizedState !== null && e.alternate.memoizedState.cachePool !== null && (a = e.alternate.memoizedState.cachePool.pool), n = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), n !== a && (e.flags |= 2048)), u !== l && u && (t.child.flags |= 8192), rf(t, t.updateQueue), Tl(t), null);
      case 4:
        return Ee(), l === null && uo(t.stateNode.containerInfo), t.flags |= 67108864, Tl(t), null;
      case 10:
        return su(t.type), Tl(t), null;
      case 19:
        if (Ji(t), e = t.memoizedState, e === null) return Tl(t), null;
        if (a = (t.flags & 128) !== 0, n = e.rendering, n === null)
          if (a) Qa(e, !1);
          else {
            if (Nl !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = t.child; l !== null; ) {
                if (n = $n(l), n !== null) {
                  for (t.flags |= 128, Qa(e, !1), l = n.updateQueue, t.updateQueue = l, rf(t, l), t.subtreeFlags = 0, l = u, u = t.child; u !== null; )
                    Vr(u, l), u = u.sibling;
                  return ja(
                    t,
                    Zl.current & 1 | 2
                  ), F && ou(t, e.treeForkCount), t.child;
                }
                l = l.sibling;
              }
            e.tail !== null && it() > zf && (t.flags |= 128, a = !0, Qa(e, !1), t.lanes = 4194304);
          }
        else {
          if (!a)
            if (l = $n(n), l !== null) {
              if (t.flags |= 128, a = !0, l = l.updateQueue, t.updateQueue = l, rf(t, l), Qa(e, !0), e.tail === null && e.tailMode !== "collapsed" && e.tailMode !== "visible" && !n.alternate && !F)
                return Tl(t), null;
            } else
              2 * it() - e.renderingStartTime > zf && u !== 536870912 && (t.flags |= 128, a = !0, Qa(e, !1), t.lanes = 4194304);
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
          return e.rendering = l, e.tail = l.sibling, e.renderingStartTime = it(), l.sibling = null, n = Zl.current, n = a ? n & 1 | 2 : n & 1, e.tailMode === "visible" || e.tailMode === "collapsed" || !u || F ? ja(t, n) : (u = n, gl(Ql, t), gl(Zl, u), wl === null && (wl = t)), F && ou(t, e.treeForkCount), l;
        }
        return Tl(t), null;
      case 22:
      case 23:
        return dt(t), Li(), e = t.memoizedState !== null, l !== null ? l.memoizedState !== null !== e && (t.flags |= 8192) : e && (t.flags |= 8192), e ? (u & 536870912) !== 0 && (t.flags & 128) === 0 && (Tl(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Tl(t), u = t.updateQueue, u !== null && rf(t, u.retryQueue), u = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== u && (t.flags |= 2048), l !== null && xl(ce), null;
      case 24:
        return u = null, l !== null && (u = l.memoizedState.cache), t.memoizedState.cache !== u && (t.flags |= 2048), su(pl), Tl(t), null;
      case 25:
        return null;
      case 30:
        return t.flags |= 33554432, Tl(t), null;
    }
    throw Error(o(156, t.tag));
  }
  function Py(l, t) {
    switch (Di(t), t.tag) {
      case 1:
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 3:
        return su(pl), Ee(), l = t.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (t.flags = l & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return yn(t), null;
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
        return Ji(t), l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null), t.flags |= 4, t) : null;
      case 4:
        return Ee(), null;
      case 10:
        return su(t.type), null;
      case 22:
      case 23:
        return dt(t), Li(), l !== null && xl(ce), l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 24:
        return su(pl), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function g0(l, t) {
    switch (Di(t), t.tag) {
      case 3:
        su(pl), Ee();
        break;
      case 26:
      case 27:
      case 5:
        yn(t);
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
        Ji(t);
        break;
      case 10:
        su(t.type);
        break;
      case 22:
      case 23:
        dt(t), Li(), l !== null && xl(ce);
        break;
      case 24:
        su(pl);
    }
  }
  function Za(l, t) {
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
      dl(t, t.return, i);
    }
  }
  function Yu(l, t, u) {
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
              } catch (T) {
                dl(
                  a,
                  c,
                  T
                );
              }
            }
          }
          e = e.next;
        } while (e !== n);
      }
    } catch (T) {
      dl(t, t.return, T);
    }
  }
  function S0(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var u = l.stateNode;
      try {
        is(t, u);
      } catch (e) {
        dl(l, l.return, e);
      }
    }
  }
  function T0(l, t, u) {
    u.props = ve(
      l.type,
      l.memoizedProps
    ), u.state = l.memoizedState;
    try {
      u.componentWillUnmount();
    } catch (e) {
      dl(l, t, e);
    }
  }
  function Jt(l, t) {
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
            var a = l.stateNode, n = fu(l.memoizedProps, a);
            (a.ref === null || a.ref.name !== n) && (a.ref = Ad(n)), e = a.ref;
            break;
          case 7:
            if (l.stateNode === null) {
              var f = new gt(l);
              E(
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
      dl(l, t, i);
    }
  }
  function Vl(l, t) {
    var u = l.ref, e = l.refCleanup;
    if (u !== null)
      if (typeof e == "function")
        try {
          e();
        } catch (a) {
          dl(l, t, a);
        } finally {
          l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
        }
      else if (typeof u == "function")
        try {
          u(null);
        } catch (a) {
          dl(l, t, a);
        }
      else u.current = null;
  }
  function sf(l, t) {
    if ((l.tag === 5 || l.tag === 27 || l.tag === 6) && l.alternate === null && t !== null)
      for (var u = 0; u < t.length; u++)
        Rd(
          l.stateNode,
          t[u]
        );
  }
  function b0(l) {
    for (var t = l.return; t !== null && (Oc(t) && Rd(l.stateNode, t.stateNode), !zc(t)); )
      t = t.return;
  }
  function Va(l) {
    for (var t = l.return; t !== null && (Oc(t) && Lm(l.stateNode, t.stateNode), !zc(t)); )
      t = t.return;
  }
  function zc(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 27;
  }
  function Oc(l) {
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
      dl(l, l.return, a);
    }
  }
  function Nc(l, t, u) {
    try {
      var e = l.stateNode;
      Nm(e, l.type, u, t), e[Pl] = t;
    } catch (a) {
      dl(l, l.return, a);
    }
  }
  function E0(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && Zu(l.type) || l.tag === 4;
  }
  function Ac(l) {
    l: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || E0(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && Zu(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue l;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function pc(l, t, u, e) {
    var a = l.tag;
    if (a === 5 || a === 6)
      a = l.stateNode, t ? (u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u).insertBefore(a, t) : (t = u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u, t.appendChild(a), u = u._reactRootContainer, u != null || t.onclick !== null || (t.onclick = Vt)), sf(l, e), nl = !0;
    else if (a !== 4 && (a === 27 && (sf(l, e), e = null, Zu(l.type) && (u = l.stateNode, t = null)), l = l.child, l !== null))
      for (pc(
        l,
        t,
        u,
        e
      ), l = l.sibling; l !== null; )
        pc(
          l,
          t,
          u,
          e
        ), l = l.sibling;
  }
  function df(l, t, u, e) {
    var a = l.tag;
    if (a === 5 || a === 6)
      a = l.stateNode, t ? u.insertBefore(a, t) : u.appendChild(a), sf(l, e), nl = !0;
    else if (a !== 4 && (a === 27 && (sf(l, e), e = null, Zu(l.type) && (u = l.stateNode)), l = l.child, l !== null))
      for (df(
        l,
        t,
        u,
        e
      ), l = l.sibling; l !== null; )
        df(
          l,
          t,
          u,
          e
        ), l = l.sibling;
  }
  function z0(l) {
    var t = l.stateNode, u = l.memoizedProps;
    try {
      for (var e = l.type, a = t.attributes; a.length; )
        t.removeAttributeNode(a[0]);
      Ll(t, e, u), t[Gl] = l, t[Pl] = u;
    } catch (n) {
      dl(l, l.return, n);
    }
  }
  var vf = !1, vt = null;
  function O0(l) {
    (l.tag === 30 || (l.subtreeFlags & 33554432) !== 0) && (vf = !0);
  }
  var wt = null;
  function _0() {
    var l = wt;
    return wt = null, l;
  }
  var tt = 0;
  function Ke(l, t, u, e, a) {
    return tt = 0, N0(
      l.child,
      t,
      u,
      e,
      a
    );
  }
  function N0(l, t, u, e, a) {
    for (var n = !1; l !== null; ) {
      if (l.tag === 5) {
        var f = l.stateNode;
        if (e !== null) {
          var i = ro(f);
          e.push(i), i.view && (n = !0);
        } else
          n || ro(f).view && (n = !0);
        vf = !0, _d(
          f,
          tt === 0 ? t : t + "_" + tt,
          u
        ), tt++;
      } else (l.tag !== 22 || l.memoizedState === null) && (l.tag === 30 && a || N0(
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
  function $t(l, t) {
    for (; l !== null; )
      l.tag === 5 ? Nd(l.stateNode, l.memoizedProps) : (l.tag !== 22 || l.memoizedState === null) && (l.tag === 30 && t || $t(
        l.child,
        t
      )), l = l.sibling;
  }
  function yf(l) {
    if ((l.subtreeFlags & 18874368) !== 0)
      for (l = l.child; l !== null; ) {
        if ((l.tag !== 22 || l.memoizedState === null) && (yf(l), l.tag === 30 && (l.flags & 18874368) !== 0 && l.stateNode.paired)) {
          var t = l.memoizedProps;
          if (t.name == null || t.name === "auto")
            throw Error(o(544));
          var u = t.name;
          t = iu(t.default, t.share), t !== "none" && (Ke(
            l,
            u,
            t,
            null,
            !1
          ) || $t(l.child, !1));
        }
        l = l.sibling;
      }
  }
  function Mc(l, t) {
    if (l.tag === 30) {
      var u = l.stateNode, e = l.memoizedProps, a = fu(e, u), n = iu(
        e.default,
        u.paired ? e.share : e.enter
      );
      n !== "none" ? Ke(l, a, n, null, !1) ? (yf(l), u.paired || t || Pe(l, e.onEnter)) : $t(l.child, !1) : yf(l);
    } else if ((l.subtreeFlags & 33554432) !== 0)
      for (l = l.child; l !== null; )
        Mc(l, t), l = l.sibling;
    else yf(l);
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
                  var n = iu(
                    u.default,
                    u.share
                  );
                  if (n !== "none" && (Ke(
                    l,
                    e,
                    n,
                    null,
                    !1
                  ) ? (n = l.stateNode, a.paired = n, n.paired = a, Pe(l, u.onShare)) : $t(l.child, !1)), t.delete(e), t.size === 0) break;
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
      var t = l.memoizedProps, u = fu(t, l.stateNode), e = vt !== null ? vt.get(u) : void 0, a = iu(
        t.default,
        e !== void 0 ? t.share : t.exit
      );
      a !== "none" && (Ke(l, u, a, null, !1) ? e !== void 0 ? (a = l.stateNode, e.paired = a, a.paired = e, vt.delete(u), Pe(l, t.onShare)) : Pe(l, t.onExit) : $t(l.child, !1)), vt !== null && Cc(l);
    } else if ((l.subtreeFlags & 33554432) !== 0)
      for (l = l.child; l !== null; )
        Dc(l), l = l.sibling;
    else
      vt !== null && Cc(l);
  }
  function A0(l) {
    for (l = l.child; l !== null; ) {
      if (l.tag === 30) {
        var t = l.memoizedProps, u = fu(t, l.stateNode);
        t = iu(t.default, t.update), l.flags &= -5, t !== "none" && Ke(
          l,
          u,
          t,
          l.memoizedState = [],
          !1
        );
      } else
        (l.subtreeFlags & 33554432) !== 0 && A0(l);
      l = l.sibling;
    }
  }
  function Uc(l) {
    if ((l.subtreeFlags & 18874368) !== 0)
      for (l = l.child; l !== null; ) {
        if (l.tag !== 22 || l.memoizedState === null) {
          if (l.tag === 30 && (l.flags & 18874368) !== 0) {
            var t = l.stateNode;
            t.paired !== null && (t.paired = null, $t(l.child, !1));
          }
          Uc(l);
        }
        l = l.sibling;
      }
  }
  function mf(l) {
    if (l.tag === 30)
      l.stateNode.paired = null, $t(l.child, !1), Uc(l);
    else if ((l.subtreeFlags & 33554432) !== 0)
      for (l = l.child; l !== null; )
        mf(l), l = l.sibling;
    else Uc(l);
  }
  function p0(l) {
    for (l = l.child; l !== null; )
      l.tag === 30 ? $t(l.child, !1) : (l.subtreeFlags & 33554432) !== 0 && p0(l), l = l.sibling;
  }
  function Rc(l, t, u, e, a, n, f) {
    for (var i = !1; t !== null; ) {
      if (t.tag === 5) {
        var c = t.stateNode;
        if (n !== null && tt < n.length) {
          var m = n[tt], T = ro(c);
          (m.view || T.view) && (i = !0);
          var O;
          if (O = (l.flags & 4) === 0)
            if (T.clip) O = !0;
            else {
              O = m.rect;
              var v = T.rect;
              O = O.y !== v.y || O.x !== v.x || O.height !== v.height || O.width !== v.width;
            }
          O && (l.flags |= 4), T.abs ? T = !m.abs : (m = m.rect, T = T.rect, T = m.height !== T.height || m.width !== T.width), T && (l.flags |= 32);
        } else l.flags |= 32;
        (l.flags & 4) !== 0 && _d(
          c,
          tt === 0 ? u : u + "_" + tt,
          a
        ), i && (l.flags & 4) !== 0 || (wt === null && (wt = []), wt.push(
          c,
          tt === 0 ? e : e + "_" + tt,
          t.memoizedProps
        )), tt++;
      } else (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && f ? l.flags |= t.flags & 32 : Rc(
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
  function M0(l, t) {
    for (l = l.child; l !== null; ) {
      if (l.tag === 30) {
        var u = l.memoizedProps, e = l.stateNode, a = fu(u, e), n = iu(u.default, u.update), f;
        f = l.memoizedState, l.memoizedState = null, e = l;
        var i = l.child;
        tt = 0, a = Rc(
          e,
          i,
          a,
          a,
          n,
          f,
          !1
        ), (l.flags & 4) !== 0 && a && Pe(l, u.onUpdate);
      } else
        (l.subtreeFlags & 33554432) !== 0 && M0(l);
      l = l.sibling;
    }
  }
  var Yl = !1, rl = !1, Ft = !1, Hc = !1, C0 = typeof WeakSet == "function" ? WeakSet : Set, jl = null, Wt = !1, La = !1, hf = !1, Bc = !1;
  function lm(l, t, u) {
    if (l = l.containerInfo, no = oa, l = Hr(l), bi(l)) {
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
            var i = 0, c = -1, m = -1, T = 0, O = 0, v = l, g = null;
            t: for (; ; ) {
              for (var A; v !== e || n !== 0 && v.nodeType !== 3 || (c = i + n), v !== f || a !== 0 && v.nodeType !== 3 || (m = i + a), v.nodeType === 3 && (i += v.nodeValue.length), (A = v.firstChild) !== null; )
                g = v, v = A;
              for (; ; ) {
                if (v === l) break t;
                if (g === e && ++T === n && (c = i), g === f && ++O === a && (m = i), (A = v.nextSibling) !== null) break;
                v = g, g = v.parentNode;
              }
              v = A;
            }
            e = c === -1 || m === -1 ? null : { start: c, end: m };
          } else e = null;
        }
      e = e || { start: 0, end: 0 };
    } else e = null;
    for (fo = { focusedElem: l, selectionRange: e }, oa = !1, u = (u & 335544064) === u, jl = t, t = u ? 9270 : 1024; jl !== null; ) {
      if (l = jl, u && (e = l.deletions, e !== null))
        for (n = 0; n < e.length; n++)
          u && Dc(e[n]);
      if (l.alternate === null && (l.flags & 2) !== 0)
        u && O0(l), gf(u);
      else {
        if (l.tag === 22) {
          if (e = l.alternate, l.memoizedState !== null) {
            e !== null && e.memoizedState === null && u && Dc(e), gf(u);
            continue;
          } else if (e !== null && e.memoizedState !== null) {
            u && O0(l), gf(u);
            continue;
          }
        }
        e = l.child, (l.subtreeFlags & t) !== 0 && e !== null ? (e.return = l, jl = e) : (u && A0(l), gf(u));
      }
    }
    vt = null;
  }
  function gf(l) {
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
              dl(t, t.return, i);
            }
          }
          break;
        case 3:
          if ((a & 1024) !== 0) {
            if (e = t.stateNode.containerInfo, u = e.nodeType, u === 9)
              yo(e);
            else if (u === 1)
              switch (e.nodeName) {
                case "HEAD":
                case "HTML":
                case "BODY":
                  yo(e);
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
          u && e !== null && (u = fu(
            e.memoizedProps,
            e.stateNode
          ), a = t.memoizedProps, a = iu(a.default, a.update), a !== "none" && Ke(
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
  function D0(l, t, u) {
    var e = u.flags;
    switch (u.tag) {
      case 0:
      case 11:
      case 15:
        It(l, u), e & 4 && Za(5, u);
        break;
      case 1:
        if (It(l, u), e & 4)
          if (l = u.stateNode, t === null)
            try {
              l.componentDidMount();
            } catch (f) {
              dl(u, u.return, f);
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
              dl(
                u,
                u.return,
                f
              );
            }
          }
        e & 64 && S0(u), e & 512 && Jt(u, u.return);
        break;
      case 3:
        if (It(l, u), e & 64 && (l = u.updateQueue, l !== null)) {
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
            is(l, t);
          } catch (f) {
            dl(u, u.return, f);
          }
        }
        break;
      case 27:
        t === null && e & 4 && z0(u);
      case 26:
      case 5:
        It(l, u), t === null && e & 4 && _c(u), e & 512 && Jt(u, u.return);
        break;
      case 12:
        It(l, u);
        break;
      case 31:
        It(l, u), e & 4 && B0(l, u);
        break;
      case 13:
        It(l, u), e & 4 && Y0(l, u), e & 64 && (l = u.memoizedState, l !== null && (l = l.dehydrated, l !== null && (u = dm.bind(
          null,
          u
        ), wm(l, u))));
        break;
      case 22:
        if (e = u.memoizedState !== null || Yl, !e) {
          var n = t !== null && t.memoizedState !== null || rl;
          t = Yl, a = rl, Yl = e, (rl = n) && !a ? (e = 2, (u.subtreeFlags & 8772) !== 0 && (e |= 1), Bt(
            l,
            u,
            e
          )) : It(l, u), Yl = t, rl = a;
        }
        break;
      case 30:
        It(l, u), e & 512 && Jt(u, u.return);
        break;
      case 7:
        e & 512 && Jt(u, u.return);
      default:
        It(l, u);
    }
  }
  function Yc(l, t) {
    for (l = l.child; l !== null; )
      U0(l, t), l = l.sibling;
  }
  function U0(l, t) {
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
          dl(l, l.return, c);
        }
        jc(l, t);
        break;
      case 6:
        try {
          l.stateNode.nodeValue = t ? "" : l.memoizedProps, nl = !0;
        } catch (c) {
          dl(l, l.return, c);
        }
        break;
      case 18:
        try {
          var i = l.stateNode;
          t ? Od(i, !0) : Od(l.stateNode, !1);
        } catch (c) {
          dl(l, l.return, c);
        }
        break;
      case 22:
      case 23:
        l.memoizedState === null && Yc(l, t);
        break;
      default:
        Yc(l, t);
    }
  }
  function jc(l, t) {
    if (l.subtreeFlags & 67108864)
      for (l = l.child; l !== null; ) {
        l: {
          var u = l, e = t;
          switch (u.tag) {
            case 4:
              U0(u, e);
              break l;
            case 22:
              u.memoizedState === null && jc(u, e);
              break l;
            default:
              jc(u, e);
          }
        }
        l = l.sibling;
      }
  }
  function R0(l) {
    var t = l.alternate;
    t !== null && (l.alternate = null, R0(t)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (t = l.stateNode, t !== null && En(t)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var bl = null, ut = !1;
  function Rt(l, t, u) {
    for (u = u.child; u !== null; )
      H0(l, t, u), u = u.sibling;
  }
  function H0(l, t, u) {
    if (ct && typeof ct.onCommitFiberUnmount == "function")
      try {
        ct.onCommitFiberUnmount(va, u);
      } catch {
      }
    switch (u.tag) {
      case 26:
        rl || Vl(u, t), Rt(
          l,
          t,
          u
        ), u.memoizedState ? u.memoizedState.count-- : u.stateNode && !rl && (u = u.stateNode, u.parentNode.removeChild(u));
        break;
      case 27:
        rl || Vl(u, t), Va(u);
        var e = bl, a = ut;
        Zu(u.type) && (bl = u.stateNode, ut = !1), Rt(
          l,
          t,
          u
        ), qd(
          u.stateNode,
          u.type,
          u.memoizedProps
        ), bl = e, ut = a;
        break;
      case 5:
        rl || Vl(u, t), Va(u);
      case 6:
        if (u.tag === 6 && Va(u), e = bl, a = ut, bl = null, Rt(
          l,
          t,
          u
        ), bl = e, ut = a, bl !== null)
          if (ut)
            try {
              (bl.nodeType === 9 ? bl.body : bl.nodeName === "HTML" ? bl.ownerDocument.body : bl).removeChild(u.stateNode), nl = !0;
            } catch (n) {
              dl(
                u,
                t,
                n
              );
            }
          else
            try {
              bl.removeChild(u.stateNode), nl = !0;
            } catch (n) {
              dl(
                u,
                t,
                n
              );
            }
        break;
      case 18:
        bl !== null && (ut ? (l = bl, zd(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          u.stateNode
        ), ra(l)) : zd(bl, u.stateNode));
        break;
      case 4:
        e = bl, a = ut, bl = u.stateNode.containerInfo, ut = !0, Rt(
          l,
          t,
          u
        ), bl = e, ut = a;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Yu(2, u, t), rl || Yu(4, u, t), Rt(
          l,
          t,
          u
        );
        break;
      case 1:
        rl || (Vl(u, t), e = u.stateNode, typeof e.componentWillUnmount == "function" && T0(
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
        rl = (e = rl) || u.memoizedState !== null, Rt(
          l,
          t,
          u
        ), rl = e;
        break;
      case 30:
        Vl(u, t), Rt(
          l,
          t,
          u
        );
        break;
      case 7:
        rl || Vl(u, t), Rt(
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
  function B0(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null))) {
      l = l.dehydrated;
      try {
        ra(l);
      } catch (u) {
        dl(t, t.return, u);
      }
    }
  }
  function Y0(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        ra(l);
      } catch (u) {
        dl(t, t.return, u);
      }
  }
  function tm(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var t = l.stateNode;
        return t === null && (t = l.stateNode = new C0()), t;
      case 22:
        return l = l.stateNode, t = l._retryCache, t === null && (t = l._retryCache = new C0()), t;
      default:
        throw Error(o(435, l.tag));
    }
  }
  function Sf(l, t) {
    var u = tm(l);
    t.forEach(function(e) {
      if (!u.has(e)) {
        u.add(e);
        var a = vm.bind(null, l, e);
        e.then(a, a);
      }
    });
  }
  function Il(l, t, u) {
    var e = t.deletions;
    if (e !== null)
      for (var a = 0; a < e.length; a++) {
        var n = e[a], f = l, i = t, c = i;
        l: for (; c !== null; ) {
          switch (c.tag) {
            case 27:
              if (Zu(c.type)) {
                bl = c.stateNode, ut = !1;
                break l;
              }
              break;
            case 5:
              bl = c.stateNode, ut = !1;
              break l;
            case 3:
            case 4:
              bl = c.stateNode.containerInfo, ut = !0;
              break l;
          }
          c = c.return;
        }
        if (bl === null) throw Error(o(160));
        H0(f, i, n), bl = null, ut = !1, f = n.alternate, f !== null && (f.return = null), n.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        j0(t, l, u), t = t.sibling;
  }
  var Ht = null;
  function j0(l, t, u) {
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
        Il(t, l, u), kl(l), a & 4 && (Yu(3, l, l.return), Za(3, l), Yu(5, l, l.return));
        break;
      case 1:
        Il(t, l, u), kl(l), a & 512 && (rl || e === null || Vl(e, e.return)), a & 64 && Yl && (l = l.updateQueue, l !== null && (t = l.callbacks, t !== null && (u = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = u === null ? t : u.concat(t))));
        break;
      case 26:
        if (n = Ht, Il(t, l, u), kl(l), a & 512 && (rl || e === null || Vl(e, e.return)), a & 4)
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
                        e = a.getElementsByTagName("title")[0], (!e || e[ha] || e[Gl] || e.namespaceURI === "http://www.w3.org/2000/svg" || e.hasAttribute("itemprop")) && (e = a.createElement(t), a.head.insertBefore(
                          e,
                          a.querySelector("head > title")
                        )), Ll(e, t, u), e[Gl] = l, Hl(e), t = e;
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
                        e = a.createElement(t), Ll(e, t, u), a.head.appendChild(e);
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
                        e = a.createElement(t), Ll(e, t, u), a.head.appendChild(e);
                        break;
                      default:
                        throw Error(o(468, t));
                    }
                    e[Gl] = l, Hl(e), t = e;
                  }
                  l.stateNode = t;
                }
              else
                Yl || Eo(n, l.type, l.stateNode);
            else
              l.stateNode = Zd(
                n,
                u,
                l.memoizedProps
              );
          else
            a !== u ? (a === null ? (t = e.stateNode, t === null || rl || t.parentNode.removeChild(t)) : a.count--, u === null ? Yl || Eo(n, l.type, l.stateNode) : Zd(n, u, l.memoizedProps)) : u === null && l.stateNode !== null && Nc(
              l,
              l.memoizedProps,
              e.memoizedProps
            );
        break;
      case 27:
        Il(t, l, u), kl(l), a & 512 && (rl || e === null || Vl(e, e.return)), e !== null && a & 4 && Nc(
          l,
          l.memoizedProps,
          e.memoizedProps
        );
        break;
      case 5:
        if (n = Ft, Ft = !1, Il(t, l, u), Ft = n, kl(l), a & 512 && (rl || e === null || Vl(e, e.return)), l.flags & 32) {
          t = l.stateNode;
          try {
            pe(t, ""), nl = !0;
          } catch (T) {
            dl(l, l.return, T);
          }
        }
        a & 4 && l.stateNode != null && (t = l.memoizedProps, Nc(
          l,
          t,
          e !== null ? e.memoizedProps : t
        )), a & 1024 && (Hc = !0);
        break;
      case 6:
        if (Il(t, l, u), kl(l), a & 4) {
          if (l.stateNode === null)
            throw Error(o(162));
          t = l.memoizedProps, u = l.stateNode;
          try {
            u.nodeValue = t, nl = !0;
          } catch (T) {
            dl(l, l.return, T);
          }
        }
        break;
      case 3:
        if (nl = !1, Hf = null, n = Ht, Ht = Pa(t.containerInfo), Il(t, l, u), Ht = n, kl(l), a & 4 && e !== null && e.memoizedState.isDehydrated)
          try {
            ra(t.containerInfo);
          } catch (T) {
            dl(l, l.return, T);
          }
        Hc && (Hc = !1, q0(l)), nl = !1;
        break;
      case 4:
        a = Ft, Ft = Yl, e = er(), n = Ht, Ht = Pa(
          l.stateNode.containerInfo
        ), Il(t, l, u), kl(l), Ht = n, nl && La && (hf = !0), nl = e, Ft = a;
        break;
      case 12:
        Il(t, l, u), kl(l);
        break;
      case 31:
        Il(t, l, u), kl(l), a & 4 && (t = l.updateQueue, t !== null && (l.updateQueue = null, Sf(l, t)));
        break;
      case 13:
        Il(t, l, u), kl(l), l.child.flags & 8192 && l.memoizedState !== null != (e !== null && e.memoizedState !== null) && (Ef = it()), a & 4 && (t = l.updateQueue, t !== null && (l.updateQueue = null, Sf(l, t)));
        break;
      case 22:
        n = l.memoizedState !== null, f = e !== null && e.memoizedState !== null;
        var i = Yl, c = rl, m = Ft;
        Yl = i || n, Ft = m || n, rl = c || f, Il(t, l, u), rl = c, Ft = m, Yl = i, kl(l), a & 8192 && (t = l.stateNode, t._visibility = n ? t._visibility & -2 : t._visibility | 1, !n || e === null || f || Yl || rl || (t = f || rl, u = Yl, e = rl, Yl = n || Yl, rl = t, ju(l, 2), Yl = u, rl = e), !n && Ft || Yc(l, n)), a & 4 && (t = l.updateQueue, t !== null && (u = t.retryQueue, u !== null && (t.retryQueue = null, Sf(l, u))));
        break;
      case 19:
        Il(t, l, u), kl(l), a & 4 && (t = l.updateQueue, t !== null && (l.updateQueue = null, Sf(l, t)));
        break;
      case 30:
        a & 512 && (rl || e === null || Vl(e, e.return)), a = er(), n = La, f = (u & 335544064) === u, i = l.memoizedProps, La = f && iu(
          i.default,
          i.update
        ) !== "none", Il(t, l, u), kl(l), f && e !== null && nl && (l.flags |= 4), La = n, nl = a;
        break;
      case 21:
        break;
      case 7:
        a & 512 && (rl || e === null || Vl(e, e.return)), e && e.stateNode !== null && (e.stateNode._fragmentFiber = l);
      default:
        Il(t, l, u), kl(l);
    }
  }
  function kl(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        for (var u, e = l.return; e !== null; ) {
          if (E0(e)) {
            u = e;
            break;
          }
          e = e.return;
        }
        e = null;
        for (var a = l.return; a !== null; ) {
          if (Oc(a)) {
            var n = a.stateNode;
            e === null ? e = [n] : e.push(n);
          }
          if (zc(a)) break;
          a = a.return;
        }
        var f = e;
        if (u == null) throw Error(o(160));
        switch (u.tag) {
          case 27:
            var i = u.stateNode, c = Ac(l);
            df(
              l,
              c,
              i,
              f
            );
            break;
          case 5:
            var m = u.stateNode;
            u.flags & 32 && (pe(m, ""), u.flags &= -33);
            var T = Ac(l);
            df(
              l,
              T,
              m,
              f
            );
            break;
          case 3:
          case 4:
            var O = u.stateNode.containerInfo, v = Ac(l);
            pc(
              l,
              v,
              O,
              f
            );
            break;
          default:
            throw Error(o(161));
        }
      } catch (g) {
        dl(l, l.return, g);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function q0(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var t = l;
        q0(t), t.tag === 5 && t.flags & 1024 && (t = t.stateNode, oa = !0, t.reset(), oa = !1), l = l.sibling;
      }
  }
  function Je(l, t) {
    if (t.subtreeFlags & 9270)
      for (t = t.child; t !== null; )
        x0(t, l), t = t.sibling;
    else M0(t);
  }
  function x0(l, t) {
    var u = l.alternate;
    if (u === null) Mc(l, !1);
    else
      switch (l.tag) {
        case 3:
          if (Bc = Wt = !1, _0(), Je(t, l), !Wt && !hf) {
            if (l = wt, l !== null)
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
            )), Bc = !0;
          }
          wt = null;
          break;
        case 5:
          Je(t, l);
          break;
        case 4:
          e = Wt, Wt = !1, Je(t, l), Wt && (hf = !0), Wt = e;
          break;
        case 22:
          l.memoizedState === null && (u.memoizedState !== null ? Mc(l, !1) : Je(t, l));
          break;
        case 30:
          e = Wt, a = _0(), Wt = !1, Je(t, l), Wt && (l.flags |= 4);
          var n = l.memoizedProps, f = l.stateNode;
          t = fu(n, f), f = fu(u.memoizedProps, f);
          var i = iu(n.default, n.update);
          i === "none" ? t = !1 : (n = u.memoizedState, u.memoizedState = null, u = l.child, tt = 0, t = Rc(
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
          ), wt = a) : a !== null && (a.push.apply(a, wt), wt = a), Wt = (l.flags & 32) !== 0 ? !0 : e;
          break;
        default:
          Je(t, l);
      }
  }
  function It(l, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        D0(l, t.alternate, t), t = t.sibling;
  }
  function ju(l, t) {
    for (l = l.child; l !== null; ) {
      var u = l, e = t;
      switch (u.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Yu(4, u, u.return), ju(
            u,
            e
          );
          break;
        case 1:
          Vl(u, u.return);
          var a = u.stateNode;
          typeof a.componentWillUnmount == "function" && T0(
            u,
            u.return,
            a
          ), ju(
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
          Vl(u, u.return), u.tag !== 5 && u.tag !== 27 || Va(u), ju(
            u,
            e
          );
          break;
        case 6:
          Va(u);
          break;
        case 26:
          Vl(u, u.return), a = u.stateNode, u.memoizedState !== null || a === null || rl || a.parentNode.removeChild(a), ju(
            u,
            e
          );
          break;
        case 22:
          u.memoizedState === null && ju(
            u,
            e
          );
          break;
        case 30:
          Vl(u, u.return), ju(
            u,
            e
          );
          break;
        case 7:
          Vl(u, u.return);
        default:
          ju(
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
          ), Za(4, n);
          break;
        case 1:
          if (Bt(
            a,
            n,
            u
          ), e = n, a = e.stateNode, typeof a.componentDidMount == "function")
            try {
              a.componentDidMount();
            } catch (T) {
              dl(e, e.return, T);
            }
          if (e = n, a = e.updateQueue, a !== null) {
            var c = e.stateNode;
            try {
              var m = a.shared.hiddenCallbacks;
              if (m !== null)
                for (a.shared.hiddenCallbacks = null, a = 0; a < m.length; a++)
                  fs(m[a], c);
            } catch (T) {
              dl(e, e.return, T);
            }
          }
          i && f & 64 && S0(n), Jt(n, n.return);
          break;
        case 27:
          (u & 2) !== 0 && z0(n);
        case 5:
          n.tag !== 5 && n.tag !== 27 || b0(n), Bt(
            a,
            n,
            u
          ), i && e === null && f & 4 && _c(n), Jt(n, n.return);
          break;
        case 6:
          b0(n);
          break;
        case 26:
          c = n.stateNode, n.memoizedState !== null || c === null || Yl || Eo(
            Pa(c.ownerDocument),
            n.type,
            c
          ), Bt(
            a,
            n,
            u
          ), i && e === null && f & 4 && _c(n), Jt(n, n.return);
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
          ), i && f & 4 && B0(a, n);
          break;
        case 13:
          Bt(
            a,
            n,
            u
          ), i && f & 4 && Y0(a, n);
          break;
        case 22:
          n.memoizedState === null && Bt(
            a,
            n,
            u
          ), Jt(n, n.return);
          break;
        case 30:
          Bt(
            a,
            n,
            u
          ), Jt(n, n.return);
          break;
        case 7:
          Jt(n, n.return);
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
  function qc(l, t) {
    var u = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== u && (l != null && l.refCount++, u != null && Ca(u));
  }
  function xc(l, t) {
    l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && Ca(l));
  }
  function pt(l, t, u, e) {
    var a = (u & 335544064) === u;
    if (t.subtreeFlags & (a ? 10262 : 10256))
      for (t = t.child; t !== null; )
        G0(
          l,
          t,
          u,
          e
        ), t = t.sibling;
    else a && p0(t);
  }
  function G0(l, t, u, e) {
    var a = (u & 335544064) === u;
    a && t.alternate === null && t.return !== null && t.return.alternate !== null && mf(t);
    var n = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        pt(
          l,
          t,
          u,
          e
        ), n & 2048 && Za(9, t);
        break;
      case 1:
        pt(
          l,
          t,
          u,
          e
        );
        break;
      case 3:
        pt(
          l,
          t,
          u,
          e
        ), a && Bc && (l = l.containerInfo, l = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, l.style.viewTransitionName === "root" && (l.style.viewTransitionName = ""), l = l.ownerDocument.documentElement, l !== null && l.style.viewTransitionName === "none" && (l.style.viewTransitionName = "")), n & 2048 && (n = null, t.alternate !== null && (n = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== n && (t.refCount++, n != null && Ca(n)));
        break;
      case 12:
        if (n & 2048) {
          pt(
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
            dl(t, t.return, m);
          }
        } else
          pt(
            l,
            t,
            u,
            e
          );
        break;
      case 31:
        pt(
          l,
          t,
          u,
          e
        );
        break;
      case 13:
        pt(
          l,
          t,
          u,
          e
        );
        break;
      case 23:
        break;
      case 22:
        f = t.stateNode, i = t.alternate, t.memoizedState !== null ? (a && i !== null && i.memoizedState === null && mf(i), f._visibility & 2 ? pt(
          l,
          t,
          u,
          e
        ) : Ka(
          l,
          t
        )) : (a && i !== null && i.memoizedState !== null && mf(t), f._visibility & 2 ? pt(
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
        ))), n & 2048 && qc(i, t);
        break;
      case 24:
        pt(
          l,
          t,
          u,
          e
        ), n & 2048 && xc(t.alternate, t);
        break;
      case 30:
        a && (n = t.alternate, n !== null && ($t(n.child, !0), $t(t.child, !0))), pt(
          l,
          t,
          u,
          e
        );
        break;
      default:
        pt(
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
          ), Za(8, f);
          break;
        case 23:
          break;
        case 22:
          var T = f.stateNode;
          f.memoizedState !== null ? T._visibility & 2 ? we(
            n,
            f,
            i,
            c,
            a
          ) : Ka(
            n,
            f
          ) : (T._visibility |= 2, we(
            n,
            f,
            i,
            c,
            a
          )), a && m & 2048 && qc(
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
          ), a && m & 2048 && xc(f.alternate, f);
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
  function Ka(l, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var u = l, e = t, a = e.flags;
        switch (e.tag) {
          case 22:
            Ka(u, e), a & 2048 && qc(
              e.alternate,
              e
            );
            break;
          case 24:
            Ka(u, e), a & 2048 && xc(e.alternate, e);
            break;
          default:
            Ka(u, e);
        }
        t = t.sibling;
      }
  }
  var ye = 8192;
  function me(l, t, u) {
    if (l.subtreeFlags & ye)
      for (l = l.child; l !== null; )
        X0(
          l,
          t,
          u
        ), l = l.sibling;
  }
  function X0(l, t, u) {
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
        Ht = Pa(l.stateNode.containerInfo), me(
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
  function Q0(l) {
    var t = l.alternate;
    if (t !== null && (l = t.child, l !== null)) {
      t.child = null;
      do
        t = l.sibling, l.sibling = null, l = t;
      while (l !== null);
    }
  }
  function Ja(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var u = 0; u < t.length; u++) {
          var e = t[u];
          jl = e, V0(
            e,
            l
          );
        }
      Q0(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        Z0(l), l = l.sibling;
  }
  function Z0(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        Ja(l), l.flags & 2048 && Yu(9, l, l.return);
        break;
      case 3:
        Ja(l);
        break;
      case 12:
        Ja(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null && t._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (t._visibility &= -3, Tf(l)) : Ja(l);
        break;
      default:
        Ja(l);
    }
  }
  function Tf(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var u = 0; u < t.length; u++) {
          var e = t[u];
          jl = e, V0(
            e,
            l
          );
        }
      Q0(l);
    }
    for (l = l.child; l !== null; ) {
      switch (t = l, t.tag) {
        case 0:
        case 11:
        case 15:
          Yu(8, t, t.return), Tf(t);
          break;
        case 22:
          u = t.stateNode, u._visibility & 2 && (u._visibility &= -3, Tf(t));
          break;
        default:
          Tf(t);
      }
      l = l.sibling;
    }
  }
  function V0(l, t) {
    for (; jl !== null; ) {
      var u = jl;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          Yu(8, u, t);
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
          if (R0(e), e === u) {
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
      var t = Xl(pl), u = t.data.get(l);
      return u === void 0 && (u = l(), t.data.set(l, u)), u;
    },
    cacheSignal: function() {
      return Xl(pl).controller.signal;
    }
  }, em = typeof WeakMap == "function" ? WeakMap : Map, cl = 0, hl = null, I = null, P = 0, sl = 0, yt = null, qu = !1, $e = !1, Gc = !1, hu = 0, Nl = 0, xu = 0, he = 0, bf = 0, mt = 0, Fe = 0, wa = null, et = null, Xc = !1, Ef = 0, L0 = 0, zf = 1 / 0, Of = null, Gu = null, Ol = 0, Yt = null, ge = null, kt = 0, Qc = 0, Zc = null, K0 = null, We = null, Ie = null, ke = null, $a = 0, _f = null;
  function ht() {
    return (cl & 2) !== 0 && P !== 0 ? P & -P : R.T !== null ? kc() : $o();
  }
  function J0() {
    if (mt === 0)
      if ((P & 536870912) === 0 || F) {
        var l = gn;
        gn <<= 1, (gn & 3932160) === 0 && (gn = 262144), mt = l;
      } else mt = 536870912;
    return l = Ql.current, l !== null && (l.flags |= 32), mt;
  }
  function Pe(l, t) {
    if (t != null) {
      var u = l.stateNode, e = u.ref;
      e === null && (e = u.ref = Ad(
        fu(l.memoizedProps, u)
      )), Ie === null && (Ie = []), Ie.push(t.bind(null, e));
    }
  }
  function at(l, t, u) {
    (l === hl && (sl === 2 || sl === 9) || l.cancelPendingCommit !== null) && (la(l, 0), Xu(
      l,
      P,
      mt,
      !1
    )), ma(l, u), ((cl & 2) === 0 || l !== hl) && (l === hl && ((cl & 2) === 0 && (he |= u), Nl === 4 && Xu(
      l,
      P,
      mt,
      !1
    )), Pt(l));
  }
  function w0(l, t, u) {
    if ((cl & 6) !== 0) throw Error(o(327));
    var e = !u && (t & 127) === 0 && (t & l.expiredLanes) === 0 || ya(l, t), a = e ? fm(l, t) : Lc(l, t, !0), n = e;
    do {
      if (a === 0) {
        $e && !e && Xu(l, t, 0, !1);
        break;
      } else {
        if (u = l.current.alternate, n && !am(u)) {
          a = Lc(l, t, !1), n = !1;
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
              a = wa;
              var c = i.current.memoizedState.isDehydrated;
              if (c && (la(i, f).flags |= 256), f = Lc(
                i,
                f,
                !1
              ), f !== 2 && f !== 6) {
                if (Gc && !c) {
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
          la(l, 0), Xu(l, t, 0, !0);
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
              Xu(
                e,
                t,
                mt,
                !qu
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
          if ((t & 62914560) === t && (a = Ef + 300 - it(), 10 < a)) {
            if (Xu(
              e,
              t,
              mt,
              !qu
            ), Tn(e, 0, !0) !== 0) break l;
            kt = t, e.timeoutHandle = oo(
              $0.bind(
                null,
                e,
                u,
                et,
                Of,
                Xc,
                t,
                mt,
                he,
                Fe,
                qu,
                n,
                "Throttled",
                -0,
                0
              ),
              a
            );
            break l;
          }
          $0(
            e,
            u,
            et,
            Of,
            Xc,
            t,
            mt,
            he,
            Fe,
            qu,
            n,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Pt(l);
  }
  function $0(l, t, u, e, a, n, f, i, c, m, T, O, v, g) {
    l.timeoutHandle = -1;
    var A = t.subtreeFlags, D = (n & 335544064) === n;
    if (O = null, (D || A & 8192 || (A & 16785408) === 16785408) && (O = {
      stylesheets: null,
      count: 0,
      imgCount: 0,
      imgBytes: 0,
      suspenseyImages: [],
      waitingForImages: !0,
      waitingForViewTransition: !1,
      unsuspend: Vt
    }, vt = null, X0(
      t,
      n,
      O
    ), D && (A = O, D = l.containerInfo, D = (D.nodeType === 9 ? D : D.ownerDocument).__reactViewTransition, D != null && (A.count++, A.waitingForViewTransition = !0, A = un.bind(A), D.finished.then(A, A))), A = (n & 62914560) === n ? Ef - it() : (n & 4194048) === n ? L0 - it() : 0, A = c1(
      O,
      A
    ), A !== null)) {
      kt = n, l.cancelPendingCommit = A(
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
          T,
          O,
          null,
          v,
          g
        )
      ), Xu(l, n, f, !m);
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
      T,
      O
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
  function Xu(l, t, u, e) {
    t = Vo(l, t), t &= ~bf, t &= ~he, l.suspendedLanes |= t, l.pingedLanes &= ~t, e && (l.warmLanes |= t), e = l.expirationTimes;
    for (var a = t; 0 < a; ) {
      var n = 31 - ot(a), f = 1 << n;
      e[n] = -1, a &= ~f;
    }
    u !== 0 && Ko(l, u, t);
  }
  function Nf() {
    return (cl & 6) === 0 ? (Fa(0), !1) : !0;
  }
  function Vc() {
    if (I !== null) {
      if (sl === 0)
        var l = I.return;
      else
        l = I, ru = ae = null, Ii(l), Xe = null, Ra = 0, l = I;
      for (; l !== null; )
        g0(l.alternate, l), l = l.return;
      I = null;
    }
  }
  function la(l, t) {
    var u = l.timeoutHandle;
    return u !== -1 && (l.timeoutHandle = -1, Mm(u)), u = l.cancelPendingCommit, u !== null && (l.cancelPendingCommit = null, u()), kt = 0, Vc(), hl = l, I = u = cu(l.current, null), P = t, sl = 0, yt = null, qu = !1, $e = ya(l, t), Gc = !1, Fe = mt = bf = he = xu = Nl = 0, et = wa = null, Xc = !1, hu = Vo(l, t), Rn(), u;
  }
  function F0(l, t) {
    w = null, R.H = ef, t === Ge || t === Vn ? (t = us(), sl = 3) : t === xi ? (t = us(), sl = 4) : sl = t === dc ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, yt = t, I === null && (Nl = 1, af(
      l,
      Ot(t, l.current)
    ));
  }
  function W0() {
    var l = Ql.current;
    return l === null ? !0 : (P & 4194048) === P ? wl === null : (P & 62914560) === P || (P & 536870912) !== 0 ? l === wl : !1;
  }
  function I0() {
    var l = R.H;
    return R.H = ef, l === null ? ef : l;
  }
  function k0() {
    var l = R.A;
    return R.A = um, l;
  }
  function Af() {
    Nl = 4, qu || (P & 4194048) !== P && Ql.current !== null || ($e = !0), (xu & 134217727) === 0 && (he & 134217727) === 0 || hl === null || Xu(
      hl,
      P,
      mt,
      !1
    );
  }
  function Lc(l, t, u) {
    var e = cl;
    cl |= 2;
    var a = I0(), n = k0();
    (hl !== l || P !== t) && (Of = null, la(l, t)), t = !1;
    var f = Nl;
    l: do
      try {
        if (sl !== 0 && I !== null) {
          var i = I, c = yt;
          switch (sl) {
            case 8:
              Vc(), f = 6;
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              Ql.current === null && (t = !0);
              var m = sl;
              if (sl = 0, yt = null, ta(l, i, c, m), u && $e) {
                f = 0;
                break l;
              }
              break;
            default:
              m = sl, sl = 0, yt = null, ta(l, i, c, m);
          }
        }
        nm(), f = Nl;
        break;
      } catch (T) {
        F0(l, T);
      }
    while (!0);
    return t && l.shellSuspendCounter++, ru = ae = null, cl = e, R.H = a, R.A = n, I === null && (hl = null, P = 0, Rn()), f;
  }
  function nm() {
    for (; I !== null; ) P0(I);
  }
  function fm(l, t) {
    var u = cl;
    cl |= 2;
    var e = I0(), a = k0();
    hl !== l || P !== t ? (Of = null, zf = it() + 500, la(l, t)) : $e = ya(
      l,
      t
    );
    l: do
      try {
        if (sl !== 0 && I !== null) {
          t = I;
          var n = yt;
          t: switch (sl) {
            case 1:
              sl = 0, yt = null, ta(l, t, n, 1);
              break;
            case 2:
            case 9:
              if (ls(n)) {
                sl = 0, yt = null, ld(t);
                break;
              }
              t = function() {
                sl !== 2 && sl !== 9 || hl !== l || (sl = 7), Pt(l);
              }, n.then(t, t);
              break l;
            case 3:
              sl = 7;
              break l;
            case 4:
              sl = 5;
              break l;
            case 7:
              ls(n) ? (sl = 0, yt = null, ld(t)) : (sl = 0, yt = null, ta(l, t, n, 7));
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
                    sl = 0, yt = null;
                    var c = i.sibling;
                    if (c !== null) I = c;
                    else {
                      var m = i.return;
                      m !== null ? (I = m, pf(m)) : I = null;
                    }
                    break t;
                  }
              }
              sl = 0, yt = null, ta(l, t, n, 5);
              break;
            case 6:
              sl = 0, yt = null, ta(l, t, n, 6);
              break;
            case 8:
              Vc(), Nl = 6;
              break l;
            default:
              throw Error(o(462));
          }
        }
        im();
        break;
      } catch (T) {
        F0(l, T);
      }
    while (!0);
    return ru = ae = null, R.H = e, R.A = a, cl = u, I !== null ? 0 : (hl = null, P = 0, Rn(), Nl);
  }
  function im() {
    for (; I !== null && !_v(); )
      P0(I);
  }
  function P0(l) {
    var t = m0(l.alternate, l, hu);
    l.memoizedProps = l.pendingProps, t === null ? pf(l) : I = t;
  }
  function ld(l) {
    var t = l, u = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = c0(
          u,
          t,
          t.pendingProps,
          t.type,
          void 0,
          P
        );
        break;
      case 11:
        t = c0(
          u,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          P
        );
        break;
      case 5:
        Ii(t);
        var e = t;
        e === Bl && (F ? (xn(e), e.tag === 5 && e.stateNode != null && (Sl = e.stateNode)) : (xn(e), F = !0));
      default:
        g0(u, t), t = I = Vr(t, hu), t = m0(u, t, hu);
    }
    l.memoizedProps = l.pendingProps, t === null ? pf(l) : I = t;
  }
  function ta(l, t, u, e) {
    ru = ae = null, Ii(t), Xe = null, Ra = 0;
    var a = t.return;
    try {
      if ($y(
        l,
        a,
        t,
        u,
        P
      )) {
        Nl = 1, af(
          l,
          Ot(u, l.current)
        ), I = null;
        return;
      }
    } catch (n) {
      if (a !== null) throw I = a, n;
      Nl = 1, af(
        l,
        Ot(u, l.current)
      ), I = null;
      return;
    }
    t.flags & 32768 ? (F || e === 1 ? l = !0 : $e || (P & 536870912) !== 0 ? l = !1 : (qu = l = !0, (e === 2 || e === 9 || e === 3 || e === 6) && (e = Ql.current, e !== null && e.tag === 13 && (e.flags |= 16384))), td(t, l)) : pf(t);
  }
  function pf(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        td(
          t,
          qu
        );
        return;
      }
      l = t.return;
      var u = ky(
        t.alternate,
        t,
        hu
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
  function ud(l, t, u, e, a, n, f, i, c, m, T, O) {
    l.cancelPendingCommit = null;
    do
      Mf();
    while (Ol !== 0);
    if ((cl & 6) !== 0) throw Error(o(327));
    if (t !== null) {
      if (t === l.current) throw Error(o(177));
      l === hl && (I = hl = null, P = 0), ge = t, Yt = l, kt = u, Zc = a, K0 = e, cm(
        l,
        t,
        u,
        f,
        i,
        c,
        O
      );
    }
  }
  function cm(l, t, u, e, a, n, f) {
    var i = t.lanes | t.childLanes;
    if (Qc = i, i |= Ni, Bv(
      l,
      u,
      i,
      e,
      a,
      n
    ), Ie = null, (u & 335544064) === u ? (ke = jy(l), e = 10262) : (ke = null, e = 10256), (t.subtreeFlags & e) !== 0 || (t.flags & e) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, ym(mn, function() {
      return $c(), null;
    })) : (l.callbackNode = null, l.callbackPriority = 0), vf = !1, e = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || e) {
      e = R.T, R.T = null, a = K.p, K.p = 2, n = cl, cl |= 4;
      try {
        lm(l, t, u);
      } finally {
        cl = n, K.p = a, R.T = e;
      }
    }
    Ol = 1, vf ? We = Bm(
      f,
      l.containerInfo,
      ke,
      Kc,
      Jc,
      rm,
      wc,
      $c,
      om
    ) : (Kc(), Jc(), wc());
  }
  function om(l) {
    if (Ol !== 0) {
      var t = Yt.onRecoverableError;
      t(l, { componentStack: null });
    }
  }
  function rm() {
    Ol === 3 && (Ol = 0, x0(ge, Yt), Ol = 4);
  }
  function Kc() {
    if (Ol === 1) {
      Ol = 0;
      var l = Yt, t = ge, u = kt, e = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || e) {
        e = R.T, R.T = null;
        var a = K.p;
        K.p = 2;
        var n = cl;
        cl |= 4;
        try {
          La = hf = !1, j0(t, l, u), u = fo;
          var f = Hr(l.containerInfo), i = u.focusedElem, c = u.selectionRange;
          if (f !== i && i && i.ownerDocument && Rr(
            i.ownerDocument.documentElement,
            i
          )) {
            if (c !== null && bi(i)) {
              var m = c.start, T = c.end;
              if (T === void 0 && (T = m), "selectionStart" in i)
                i.selectionStart = m, i.selectionEnd = Math.min(
                  T,
                  i.value.length
                );
              else {
                var O = i.ownerDocument || document, v = O && O.defaultView || window;
                if (v.getSelection) {
                  var g = v.getSelection(), A = i.textContent.length, D = Math.min(c.start, A), $ = c.end === void 0 ? D : Math.min(c.end, A);
                  !g.extend && D > $ && (f = $, $ = D, D = f);
                  var y = Ur(
                    i,
                    D
                  ), s = Ur(
                    i,
                    $
                  );
                  if (y && s && (g.rangeCount !== 1 || g.anchorNode !== y.node || g.anchorOffset !== y.offset || g.focusNode !== s.node || g.focusOffset !== s.offset)) {
                    var h = O.createRange();
                    h.setStart(y.node, y.offset), g.removeAllRanges(), D > $ ? (g.addRange(h), g.extend(s.node, s.offset)) : (h.setEnd(s.node, s.offset), g.addRange(h));
                  }
                }
              }
            }
            for (O = [], g = i; g = g.parentNode; )
              g.nodeType === 1 && O.push({
                element: g,
                left: g.scrollLeft,
                top: g.scrollTop
              });
            for (typeof i.focus == "function" && i.focus(), i = 0; i < O.length; i++) {
              var z = O[i];
              z.element.scrollLeft = z.left, z.element.scrollTop = z.top;
            }
          }
          oa = !!no, fo = no = null;
        } finally {
          cl = n, K.p = a, R.T = e;
        }
      }
      l.current = t, Ol = 2;
    }
  }
  function Jc() {
    if (Ol === 2) {
      Ol = 0;
      var l = Yt, t = ge, u = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || u) {
        u = R.T, R.T = null;
        var e = K.p;
        K.p = 2;
        var a = cl;
        cl |= 4;
        try {
          D0(l, t.alternate, t);
        } finally {
          cl = a, K.p = e, R.T = u;
        }
      }
      Ol = 3;
    }
  }
  function wc() {
    if (Ol === 4 || Ol === 3) {
      Ol = 0;
      var l = We;
      We = null, Nv();
      var t = Yt, u = ge, e = kt, a = K0, n = (e & 335544064) === e ? 10262 : 10256;
      if ((u.subtreeFlags & n) !== 0 || (u.flags & n) !== 0 ? Ol = 5 : (Ol = 0, ge = Yt = null, ed(t, t.pendingLanes)), n = t.pendingLanes, n === 0 && (Gu = null), ui(e), u = u.stateNode, ct && typeof ct.onCommitFiberRoot == "function")
        try {
          ct.onCommitFiberRoot(
            va,
            u,
            void 0,
            (u.current.flags & 128) === 128
          );
        } catch {
        }
      if (a !== null) {
        u = R.T, n = K.p, K.p = 2, R.T = null;
        try {
          for (var f = t.onRecoverableError, i = 0; i < a.length; i++) {
            var c = a[i];
            f(c.value, {
              componentStack: c.stack
            });
          }
        } finally {
          R.T = u, K.p = n;
        }
      }
      if (a = Ie, f = ke, ke = null, a !== null && (Ie = null, f === null && (f = []), l !== null))
        for (c = 0; c < a.length; c++)
          u = (0, a[c])(
            f
          ), u !== void 0 && l.finished.finally(u);
      (kt & 3) !== 0 && Mf(), Pt(t), n = t.pendingLanes, (e & 261930) !== 0 && (n & 42) !== 0 ? t === _f ? $a++ : ($a = 0, _f = t) : ($a = 0, _f = null), Fa(0);
    }
  }
  function ed(l, t) {
    (l.pooledCacheLanes &= t) === 0 && (t = l.pooledCache, t != null && (l.pooledCache = null, Ca(t)));
  }
  function Mf() {
    return We !== null && (We.skipTransition(), We = null), Kc(), Jc(), wc(), $c();
  }
  function $c() {
    if (Ol !== 5) return !1;
    var l = Yt, t = Qc;
    Qc = 0;
    var u = ui(kt), e = R.T, a = K.p;
    try {
      K.p = 32 > u ? 32 : u, R.T = null, u = Zc, Zc = null;
      var n = Yt, f = kt;
      if (Ol = 0, ge = Yt = null, kt = 0, (cl & 6) !== 0) throw Error(o(331));
      var i = cl;
      if (cl |= 4, Z0(n.current), G0(
        n,
        n.current,
        f,
        u
      ), cl = i, Fa(0, !1), ct && typeof ct.onPostCommitFiberRoot == "function")
        try {
          ct.onPostCommitFiberRoot(va, n);
        } catch {
        }
      return !0;
    } finally {
      K.p = a, R.T = e, ed(l, t);
    }
  }
  function ad(l, t, u) {
    t = Ot(u, t), t = sc(l.stateNode, t, 2), l = Uu(l, t, 2), l !== null && (ma(l, 2), Pt(l));
  }
  function dl(l, t, u) {
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
          if (typeof t.type.getDerivedStateFromError == "function" || typeof e.componentDidCatch == "function" && (Gu === null || !Gu.has(e))) {
            l = Ot(u, l), u = l0(2), e = Uu(t, u, 2), e !== null && (t0(
              u,
              e,
              t,
              l
            ), ma(e, 2), Pt(e));
            break;
          }
        }
        t = t.return;
      }
  }
  function Fc(l, t, u) {
    var e = l.pingCache;
    if (e === null) {
      e = l.pingCache = new em();
      var a = /* @__PURE__ */ new Set();
      e.set(t, a);
    } else
      a = e.get(t), a === void 0 && (a = /* @__PURE__ */ new Set(), e.set(t, a));
    a.has(u) || (Gc = !0, a.add(u), l = sm.bind(null, l, t, u), t.then(l, l));
  }
  function sm(l, t, u) {
    var e = l.pingCache;
    e !== null && e.delete(t), l.pingedLanes |= l.suspendedLanes & u, l.warmLanes &= ~u, hl === l && (P & u) === u && ((Nl === 4 || Nl === 3 && (P & 62914560) === P && 300 > it() - Ef) && (cl & 2) === 0 ? la(l, 0) : bf |= u, Fe === P && (Fe = 0)), Pt(l);
  }
  function nd(l, t) {
    t === 0 && (t = Lo()), l = te(l, t), l !== null && (ma(l, t), Pt(l));
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
    return kf(l, t);
  }
  var ua = null, ea = null, Wc = !1, Cf = !1, Ic = !1, Qu = 0;
  function Pt(l) {
    l !== ea && l.next === null && (ea === null ? ua = ea = l : ea = ea.next = l), Cf = !0, Wc || (Wc = !0, hm());
  }
  function Fa(l, t) {
    if (!Ic && Cf) {
      Ic = !0;
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
            n = P, n = Tn(
              e,
              e === hl ? n : 0,
              e.cancelPendingCommit !== null || e.timeoutHandle !== -1
            ), (n & 3) === 0 || ya(e, n) || (u = !0, od(e, n));
          e = e.next;
        }
      while (u);
      Ic = !1;
    }
  }
  function mm() {
    fd();
  }
  function fd() {
    Cf = Wc = !1;
    var l = 0;
    Qu !== 0 && pm() && (l = Qu);
    for (var t = it(), u = null, e = ua; e !== null; ) {
      var a = e.next, n = id(e, t);
      n === 0 ? (e.next = null, u === null ? ua = a : u.next = a, a === null && (ea = u)) : (u = e, (l !== 0 || (n & 3) !== 0) && (Cf = !0)), e = a;
    }
    Ol !== 0 && Ol !== 5 || Fa(l), Qu !== 0 && (Qu = 0);
  }
  function id(l, t) {
    for (var u = l.suspendedLanes, e = l.pingedLanes, a = l.expirationTimes, n = l.pendingLanes & -62914561; 0 < n; ) {
      var f = 31 - ot(n), i = 1 << f, c = a[f];
      c === -1 ? ((i & u) === 0 || (i & e) !== 0) && (a[f] = Hv(i, t)) : c <= t && (l.expiredLanes |= i), n &= ~i;
    }
    if (t = hl, u = P, u = Tn(
      l,
      l === t ? u : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), e = l.callbackNode, u === 0 || l === t && (sl === 2 || sl === 9) || l.cancelPendingCommit !== null)
      return e !== null && e !== null && Pf(e), l.callbackNode = null, l.callbackPriority = 0;
    if ((u & 3) === 0 || ya(l, u)) {
      if (t = u & -u, t === l.callbackPriority) return t;
      switch (e !== null && Pf(e), ui(u)) {
        case 2:
        case 8:
          u = Qo;
          break;
        case 32:
          u = mn;
          break;
        case 268435456:
          u = Zo;
          break;
        default:
          u = mn;
      }
      return e = cd.bind(null, l), u = kf(u, e), l.callbackPriority = t, l.callbackNode = u, t;
    }
    return e !== null && e !== null && Pf(e), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function cd(l, t) {
    if (Ol !== 0 && Ol !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var u = l.callbackNode;
    if (Mf() && l.callbackNode !== u)
      return null;
    var e = P;
    return e = Tn(
      l,
      l === hl ? e : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), e === 0 ? null : (w0(l, e, t), id(l, it()), l.callbackNode != null && l.callbackNode === u ? cd.bind(null, l) : null);
  }
  function od(l, t) {
    if (Mf()) return null;
    w0(l, t, !0);
  }
  function hm() {
    Cm(function() {
      (cl & 6) !== 0 ? kf(
        Xo,
        mm
      ) : fd();
    });
  }
  function kc() {
    if (Qu === 0) {
      var l = ie;
      l === 0 && (l = hn, hn <<= 1, (hn & 261888) === 0 && (hn = 256)), Qu = l;
    }
    return Qu;
  }
  function rd(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : _n(l);
  }
  function gm(l, t, u, e, a) {
    if (t === "submit" && u && u.stateNode === a) {
      var n = rd(
        (a[Pl] || null).action
      ), f = e.submitter;
      f && (t = (t = f[Pl] || null) ? rd(t.formAction) : f.getAttribute("formAction"), t !== null && (n = t, f = null));
      var i = new Mn(
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
                if (Qu !== 0) {
                  var c = new FormData(a, f);
                  fc(
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
                typeof n == "function" && (i.preventDefault(), c = new FormData(a, f), fc(
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
  for (var Pc = 0; Pc < _i.length; Pc++) {
    var lo = _i[Pc], Sm = lo.toLowerCase(), Tm = lo[0].toUpperCase() + lo.slice(1);
    Ut(
      Sm,
      "on" + Tm
    );
  }
  Ut(jr, "onAnimationEnd"), Ut(qr, "onAnimationIteration"), Ut(xr, "onAnimationStart"), Ut("dblclick", "onDoubleClick"), Ut("focusin", "onFocus"), Ut("focusout", "onBlur"), Ut(My, "onTransitionRun"), Ut(Cy, "onTransitionStart"), Ut(Dy, "onTransitionCancel"), Ut(Gr, "onTransitionEnd"), Ne("onMouseEnter", ["mouseout", "mouseover"]), Ne("onMouseLeave", ["mouseout", "mouseover"]), Ne("onPointerEnter", ["pointerout", "pointerover"]), Ne("onPointerLeave", ["pointerout", "pointerover"]), ku(
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
  var Wa = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), bm = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Wa)
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
            } catch (T) {
              Un(T);
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
            } catch (T) {
              Un(T);
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
  function to(l, t, u) {
    var e = 0;
    t && (e |= 4), dd(
      u,
      l,
      e,
      t
    );
  }
  var Df = "_reactListening" + Math.random().toString(36).slice(2);
  function uo(l) {
    if (!l[Df]) {
      l[Df] = !0, Po.forEach(function(u) {
        u !== "selectionchange" && (bm.has(u) || to(u, !1, l), to(u, !0, l));
      });
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[Df] || (t[Df] = !0, to("selectionchange", !1, t));
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
        a = Oo;
    }
    u = a.bind(
      null,
      t,
      u,
      l
    ), a = void 0, !ri || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (a = !0), e ? a !== void 0 ? l.addEventListener(t, u, {
      capture: !0,
      passive: a
    }) : l.addEventListener(t, u, !0) : a !== void 0 ? l.addEventListener(t, u, {
      passive: a
    }) : l.addEventListener(t, u, !1);
  }
  function eo(l, t, u, e, a) {
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
      var m = n, T = ci(u), O = [];
      l: {
        var v = Xr.get(l);
        if (v !== void 0) {
          var g = Mn, A = l;
          switch (l) {
            case "keypress":
              if (An(u) === 0) break l;
            case "keydown":
            case "keyup":
              g = ay;
              break;
            case "focusin":
              A = "focus", g = yi;
              break;
            case "focusout":
              A = "blur", g = yi;
              break;
            case "beforeblur":
            case "afterblur":
              g = yi;
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
          var D = (t & 4) !== 0, $ = !D && (l === "scroll" || l === "scrollend"), y = D ? v !== null ? v + "Capture" : null : v;
          D = [];
          for (var s = m, h; s !== null; ) {
            var z = s;
            if (h = z.stateNode, z = z.tag, z !== 5 && z !== 26 && z !== 27 || h === null || y === null || (z = Sa(s, y), z != null && D.push(
              Ia(s, z, h)
            )), $) break;
            s = s.return;
          }
          0 < D.length && (v = new g(
            v,
            A,
            null,
            u,
            T
          ), O.push({ event: v, listeners: D }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (g = l === "mouseover" || l === "pointerover", v = l === "mouseout" || l === "pointerout", g && u !== ii && (A = u.relatedTarget || u.fromElement) && (Iu(A) || A[ze]))
            break l;
          (v || g) && (A = T.window === T ? T : (g = T.ownerDocument) ? g.defaultView || g.parentWindow : window, v ? (g = u.relatedTarget || u.toElement, v = m, g = g ? Iu(g) : null, g !== null && ($ = p(g), D = g.tag, g !== $ || D !== 5 && D !== 27 && D !== 6) && (g = null)) : (v = null, g = m), v !== g && (D = mr, z = "onMouseLeave", y = "onMouseEnter", s = "mouse", (l === "pointerout" || l === "pointerover") && (D = gr, z = "onPointerLeave", y = "onPointerEnter", s = "pointer"), $ = v == null ? A : ga(v), h = g == null ? A : ga(g), A = new D(
            z,
            s + "leave",
            v,
            u,
            T
          ), A.target = $, A.relatedTarget = h, z = null, Iu(T) === m && (D = new D(
            y,
            s + "enter",
            g,
            u,
            T
          ), D.target = h, D.relatedTarget = $, z = D), $ = z, D = v && g ? nt(
            v,
            g,
            Em
          ) : null, v !== null && vd(
            O,
            A,
            v,
            D,
            !1
          ), g !== null && $ !== null && vd(
            O,
            $,
            g,
            D,
            !0
          )));
        }
        l: {
          if (v = m ? ga(m) : window, g = v.nodeName && v.nodeName.toLowerCase(), g === "select" || g === "input" && v.type === "file")
            var C = Nr;
          else if (Or(v))
            if (Ar)
              C = Ny;
            else {
              C = Oy;
              var ll = zy;
            }
          else
            g = v.nodeName, !g || g.toLowerCase() !== "input" || v.type !== "checkbox" && v.type !== "radio" ? m && fi(m.elementType) && (C = Nr) : C = _y;
          if (C && (C = C(l, m))) {
            _r(
              O,
              C,
              u,
              T
            );
            break l;
          }
          ll && ll(l, v, m);
        }
        switch (ll = m ? ga(m) : window, l) {
          case "focusin":
            (Or(ll) || ll.contentEditable === "true") && (Ue = ll, Ei = m, Aa = null);
            break;
          case "focusout":
            Aa = Ei = Ue = null;
            break;
          case "mousedown":
            zi = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            zi = !1, Br(O, u, T);
            break;
          case "selectionchange":
            if (py) break;
          case "keydown":
          case "keyup":
            Br(O, u, T);
        }
        var Y;
        if (hi)
          l: {
            switch (l) {
              case "compositionstart":
                var Q = "onCompositionStart";
                break l;
              case "compositionend":
                Q = "onCompositionEnd";
                break l;
              case "compositionupdate":
                Q = "onCompositionUpdate";
                break l;
            }
            Q = void 0;
          }
        else
          De ? Er(l, u) && (Q = "onCompositionEnd") : l === "keydown" && u.keyCode === 229 && (Q = "onCompositionStart");
        Q && (Sr && u.locale !== "ko" && (De || Q !== "onCompositionStart" ? Q === "onCompositionEnd" && De && (Y = vr()) : (zu = T, si = "value" in zu ? zu.value : zu.textContent, De = !0)), ll = Uf(m, Q), 0 < ll.length && (Q = new hr(
          Q,
          l,
          null,
          u,
          T
        ), O.push({ event: Q, listeners: ll }), Y ? Q.data = Y : (Y = zr(u), Y !== null && (Q.data = Y)))), (Y = gy ? Sy(l, u) : Ty(l, u)) && (Q = Uf(m, "onBeforeInput"), 0 < Q.length && (ll = new hr(
          "onBeforeInput",
          "beforeinput",
          null,
          u,
          T
        ), O.push({
          event: ll,
          listeners: Q
        }), ll.data = Y)), gm(
          O,
          l,
          m,
          u,
          T
        );
      }
      sd(O, t);
    });
  }
  function Ia(l, t, u) {
    return {
      instance: l,
      listener: t,
      currentTarget: u
    };
  }
  function Uf(l, t) {
    for (var u = t + "Capture", e = []; l !== null; ) {
      var a = l, n = a.stateNode;
      if (a = a.tag, a !== 5 && a !== 26 && a !== 27 || n === null || (a = Sa(l, u), a != null && e.unshift(
        Ia(l, a, n)
      ), a = Sa(l, t), a != null && e.push(
        Ia(l, a, n)
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
      i !== 5 && i !== 26 && i !== 27 || m === null || (c = m, a ? (m = Sa(u, n), m != null && f.unshift(
        Ia(u, m, c)
      )) : a || (m = Sa(u, n), m != null && f.push(
        Ia(u, m, c)
      ))), u = u.return;
    }
    f.length !== 0 && l.push({ event: t, listeners: f });
  }
  var zm = /\r\n?/g, Om = /\u0000|\uFFFD/g;
  function yd(l) {
    return (typeof l == "string" ? l : "" + l).replace(zm, `
`).replace(Om, "");
  }
  function md(l, t) {
    return t = yd(t), yd(l) === t;
  }
  function vl(l, t, u, e, a, n) {
    switch (u) {
      case "children":
        if (typeof e == "string")
          t === "body" || t === "textarea" && e === "" || pe(l, e);
        else if (typeof e == "number" || typeof e == "bigint")
          t !== "body" && pe(l, "" + e);
        else return;
        break;
      case "className":
        On(l, "class", e);
        break;
      case "tabIndex":
        On(l, "tabindex", e);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        On(l, u, e);
        break;
      case "style":
        rr(l, e, n);
        return;
      case "data":
        if (t !== "object") {
          On(l, "data", e);
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
        e = _n(e), l.setAttribute(u, e);
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
          typeof n == "function" && (u === "formAction" ? (t !== "input" && vl(l, t, "name", a.name, a, null), vl(
            l,
            t,
            "formEncType",
            a.formEncType,
            a,
            null
          ), vl(
            l,
            t,
            "formMethod",
            a.formMethod,
            a,
            null
          ), vl(
            l,
            t,
            "formTarget",
            a.formTarget,
            a,
            null
          )) : (vl(l, t, "encType", a.encType, a, null), vl(l, t, "method", a.method, a, null), vl(l, t, "target", a.target, a, null)));
        if (e == null || typeof e == "symbol" || typeof e == "boolean") {
          l.removeAttribute(u);
          break;
        }
        e = _n(e), l.setAttribute(u, e);
        break;
      case "onClick":
        e != null && (l.onclick = Vt);
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
        u = _n(e), l.setAttributeNS(
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
        k("beforetoggle", l), k("toggle", l), zn(l, "popover", e);
        break;
      case "xlinkActuate":
        au(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          e
        );
        break;
      case "xlinkArcrole":
        au(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          e
        );
        break;
      case "xlinkRole":
        au(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          e
        );
        break;
      case "xlinkShow":
        au(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          e
        );
        break;
      case "xlinkTitle":
        au(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          e
        );
        break;
      case "xlinkType":
        au(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          e
        );
        break;
      case "xmlBase":
        au(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          e
        );
        break;
      case "xmlLang":
        au(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          e
        );
        break;
      case "xmlSpace":
        au(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          e
        );
        break;
      case "is":
        zn(l, "is", e);
        break;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!(2 < u.length) || u[0] !== "o" && u[0] !== "O" || u[1] !== "n" && u[1] !== "N")
          u = Zv.get(u) || u, zn(l, u, e);
        else return;
    }
    nl = !0;
  }
  function ao(l, t, u, e, a, n) {
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
        if (typeof e == "string") pe(l, e);
        else if (typeof e == "number" || typeof e == "bigint")
          pe(l, "" + e);
        else return;
        break;
      case "onScroll":
        e != null && k("scroll", l);
        return;
      case "onScrollEnd":
        e != null && k("scrollend", l);
        return;
      case "onClick":
        e != null && (l.onclick = Vt);
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
            nl = !0, u in l ? l[u] = e : e === !0 ? l.setAttribute(u, "") : zn(l, u, e);
          }
        return;
    }
    nl = !0;
  }
  function Ll(l, t, u) {
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
                  vl(l, t, n, f, u, null);
              }
          }
        a && vl(l, t, "srcSet", u.srcSet, u, null), e && vl(l, t, "src", u.src, u, null);
        return;
      case "input":
        k("invalid", l);
        var i = n = f = a = null, c = null, m = null;
        for (e in u)
          if (u.hasOwnProperty(e)) {
            var T = u[e];
            if (T != null)
              switch (e) {
                case "name":
                  a = T;
                  break;
                case "type":
                  f = T;
                  break;
                case "checked":
                  c = T;
                  break;
                case "defaultChecked":
                  m = T;
                  break;
                case "value":
                  n = T;
                  break;
                case "defaultValue":
                  i = T;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (T != null)
                    throw Error(o(137, t));
                  break;
                default:
                  vl(l, t, e, T, u, null);
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
                vl(l, t, a, i, u, null);
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
                vl(l, t, f, i, u, null);
            }
        cr(l, e, a, n);
        return;
      case "option":
        for (c in u)
          u.hasOwnProperty(c) && (e = u[c], e != null) && (c === "selected" ? l.selected = e && typeof e != "function" && typeof e != "symbol" : vl(l, t, c, e, u, null));
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
        for (e = 0; e < Wa.length; e++)
          k(Wa[e], l);
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
                vl(l, t, m, e, u, null);
            }
        return;
      default:
        if (fi(t)) {
          for (T in u)
            u.hasOwnProperty(T) && (e = u[T], e !== void 0 && ao(
              l,
              t,
              T,
              e,
              u,
              void 0
            ));
          return;
        }
    }
    for (i in u)
      u.hasOwnProperty(i) && (e = u[i], e != null && vl(l, t, i, e, u, null));
  }
  var _m = {};
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
        var a = null, n = null, f = null, i = null, c = null, m = null, T = null;
        for (g in u) {
          var O = u[g];
          if (u.hasOwnProperty(g) && O != null)
            switch (g) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                c = O;
              default:
                e.hasOwnProperty(g) || vl(l, t, g, null, e, O);
            }
        }
        for (var v in e) {
          var g = e[v];
          if (O = u[v], e.hasOwnProperty(v) && (g != null || O != null))
            switch (v) {
              case "type":
                g !== O && (nl = !0), n = g;
                break;
              case "name":
                g !== O && (nl = !0), a = g;
                break;
              case "checked":
                g !== O && (nl = !0), m = g;
                break;
              case "defaultChecked":
                g !== O && (nl = !0), T = g;
                break;
              case "value":
                g !== O && (nl = !0), f = g;
                break;
              case "defaultValue":
                g !== O && (nl = !0), i = g;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (g != null)
                  throw Error(o(137, t));
                break;
              default:
                g !== O && vl(
                  l,
                  t,
                  v,
                  g,
                  e,
                  O
                );
            }
        }
        ai(
          l,
          f,
          i,
          c,
          m,
          T,
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
                e.hasOwnProperty(n) || vl(
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
                n !== c && (nl = !0), v = n;
                break;
              case "defaultValue":
                n !== c && (nl = !0), i = n;
                break;
              case "multiple":
                n !== c && (nl = !0), f = n;
              default:
                n !== c && vl(
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
                vl(l, t, i, null, e, a);
            }
        for (f in e)
          if (a = e[f], n = u[f], e.hasOwnProperty(f) && (a != null || n != null))
            switch (f) {
              case "value":
                a !== n && (nl = !0), v = a;
                break;
              case "defaultValue":
                a !== n && (nl = !0), g = a;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (a != null) throw Error(o(91));
                break;
              default:
                a !== n && vl(l, t, f, a, e, n);
            }
        ir(l, v, g);
        return;
      case "option":
        for (var A in u)
          v = u[A], u.hasOwnProperty(A) && v != null && !e.hasOwnProperty(A) && (A === "selected" ? l.selected = !1 : vl(
            l,
            t,
            A,
            null,
            e,
            v
          ));
        for (c in e)
          v = e[c], g = u[c], e.hasOwnProperty(c) && v !== g && (v != null || g != null) && (c === "selected" ? (v !== g && (nl = !0), l.selected = v && typeof v != "function" && typeof v != "symbol") : vl(
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
        for (var D in u)
          v = u[D], u.hasOwnProperty(D) && v != null && !e.hasOwnProperty(D) && vl(l, t, D, null, e, v);
        for (m in e)
          if (v = e[m], g = u[m], e.hasOwnProperty(m) && v !== g && (v != null || g != null))
            switch (m) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (v != null)
                  throw Error(o(137, t));
                break;
              default:
                vl(
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
        if (fi(t)) {
          for (var $ in u)
            v = u[$], u.hasOwnProperty($) && v !== void 0 && !e.hasOwnProperty($) && ao(
              l,
              t,
              $,
              void 0,
              e,
              v
            );
          for (T in e)
            v = e[T], g = u[T], !e.hasOwnProperty(T) || v === g || v === void 0 && g === void 0 || ao(
              l,
              t,
              T,
              v,
              e,
              g
            );
          return;
        }
    }
    for (var y in u)
      v = u[y], u.hasOwnProperty(y) && v != null && !e.hasOwnProperty(y) && vl(l, t, y, null, e, v);
    for (O in e)
      v = e[O], g = u[O], !e.hasOwnProperty(O) || v === g || v == null && g == null || vl(l, t, O, v, e, g);
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
            var T = c.transferSize, O = c.initiatorType;
            T && hd(O) && (c = c.responseEnd, f += T * (c < i ? 1 : (i - m) / (c - m)));
          }
          if (--e, t += 8 * (n + f) / (a.duration / 1e3), l++, 10 < l) break;
        }
      }
      if (0 < l) return t / l / 1e6;
    }
    return navigator.connection && (l = navigator.connection.downlink, typeof l == "number") ? l : 5;
  }
  var no = null, fo = null;
  function ka(l) {
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
    return u = ka(
      u
    ).createElement(l), u[Gl] = e, u[Pl] = t, Ll(u, l, t), Hl(u), u;
  }
  function io(l, t) {
    return l === "textarea" || l === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var co = null;
  function pm() {
    var l = window.event;
    return l && l.type === "popstate" ? l === co ? !1 : (co = l, !0) : (co = null, !1);
  }
  var oo = typeof setTimeout == "function" ? setTimeout : void 0, Mm = typeof clearTimeout == "function" ? clearTimeout : void 0, bd = typeof Promise == "function" ? Promise : void 0, Ed = typeof requestAnimationFrame == "function" ? requestAnimationFrame : oo, Cm = typeof queueMicrotask == "function" ? queueMicrotask : typeof bd < "u" ? function(l) {
    return bd.resolve(null).then(l).catch(Dm);
  } : oo;
  function Dm(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function Zu(l) {
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
          So(
            l.ownerDocument.documentElement
          );
        else if (u === "head") {
          u = l.ownerDocument.head, So(u);
          for (var n = u.firstChild; n; ) {
            var f = n.nextSibling, i = n.nodeName;
            n[ha] || i === "SCRIPT" || i === "STYLE" || i === "LINK" && n.rel.toLowerCase() === "stylesheet" || u.removeChild(n), n = f;
          }
        } else
          u === "body" && So(l.ownerDocument.body);
      u = a;
    } while (u);
    ra(t);
  }
  function Od(l, t) {
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
  function _d(l, t, u) {
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
  function ro(l) {
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
      var T = m.startViewTransition({
        update: function() {
          var v = m.defaultView, g = v.navigation && v.navigation.transition, A = m.fonts.status;
          e();
          var D = [];
          if (A === "loaded" && (Rm(m), m.fonts.status === "loading" && D.push(m.fonts.ready)), A = D.length, l !== null)
            for (var $ = l.suspenseyImages, y = 0, s = 0; s < $.length; s++) {
              var h = $[s];
              if (!h.complete) {
                var z = h.getBoundingClientRect();
                if (0 < z.bottom && 0 < z.right && z.top < v.innerHeight && z.left < v.innerWidth) {
                  if (y += Jd(h), y > Bf) {
                    D.length = A;
                    break;
                  }
                  h = new Promise(
                    Hm.bind(h)
                  ), D.push(h);
                }
              }
            }
          if (0 < D.length)
            return v = Promise.race([
              Promise.all(D),
              new Promise(function(C) {
                return setTimeout(C, 500);
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
      m.__reactViewTransition = T;
      var O = [];
      return T.ready.then(
        function() {
          for (var v = m.documentElement.getAnimations({
            subtree: !0
          }), g = 0; g < v.length; g++) {
            var A = v[g], D = A.effect, $ = D.pseudoElement;
            if ($ != null && $.startsWith("::view-transition")) {
              O.push(A), A = D.getKeyframes();
              for (var y = $ = void 0, s = !0, h = 0; h < A.length; h++) {
                var z = A[h], C = z.width;
                if ($ === void 0) $ = C;
                else if ($ !== C) {
                  s = !1;
                  break;
                }
                if (C = z.height, y === void 0) y = C;
                else if (y !== C) {
                  s = !1;
                  break;
                }
                delete z.width, delete z.height, z.transform === "none" && delete z.transform;
              }
              s && $ !== void 0 && y !== void 0 && (D.setKeyframes(A), s = getComputedStyle(
                D.target,
                D.pseudoElement
              ), s.width !== $ || s.height !== y) && (s = A[0], s.width = $, s.height = y, s = A[A.length - 1], s.width = $, s.height = y, D.setKeyframes(A));
            }
          }
          f();
        },
        function(v) {
          m.__reactViewTransition === T && (m.__reactViewTransition = null);
          try {
            typeof v == "object" && v !== null && v.name === "InvalidStateError" && (v.message === "View transition was skipped because document visibility state is hidden." || v.message === "Skipping view transition because document visibility state has become hidden." || v.message === "Skipping view transition because viewport size changed." || v.message === "Transition was aborted because of invalid state") && (v = null), v !== null && c(v);
          } finally {
            e(), a(), f();
          }
        }
      ), T.finished.finally(function() {
        for (var v = 0; v < O.length; v++)
          O[v].cancel();
        m.__reactViewTransition === T && (m.__reactViewTransition = null), i();
      }), T;
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
      if (Md(n, l, t, u) === -1) {
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
        }), E(
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
    return G(l).addEventListener(
      t,
      u,
      e
    ), !1;
  }
  gt.prototype.removeEventListener = function(l, t, u) {
    var e = this._eventListeners;
    if (e !== null && (t = Md(
      e,
      l,
      t,
      u
    ), t !== -1)) {
      var a = e[t];
      u = a.attachedListener;
      var n = a.cleanup;
      a = aa(a.optionsOrUseCapture), E(
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
    return G(l).removeEventListener(
      t,
      u,
      e
    ), !1;
  }
  function aa(l) {
    return l != null && typeof l != "boolean" && (l.once === !0 || l.signal instanceof AbortSignal) ? { capture: l.capture, passive: l.passive } : l;
  }
  function pd(l) {
    return l == null ? "c=0" : typeof l == "boolean" ? "c=" + (l ? "1" : "0") : "c=" + (l.capture ? "1" : "0");
  }
  function Md(l, t, u, e) {
    if (l.length === 0) return -1;
    e = pd(e);
    for (var a = 0; a < l.length; a++) {
      var n = l[a];
      if (n.type === t && n.listener === u && pd(n.optionsOrUseCapture) === e)
        return a;
    }
    return -1;
  }
  gt.prototype.dispatchEvent = function(l) {
    var t = B(
      this._fragmentFiber
    );
    if (t === null) return !0;
    t = G(t);
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
    E(
      this._fragmentFiber.child,
      !0,
      Cd,
      l,
      void 0,
      void 0
    );
  };
  function Cd(l, t) {
    return l.tag === 6 ? !1 : (l = G(l), $m(l, t));
  }
  gt.prototype.focusLast = function(l) {
    var t = [];
    E(
      this._fragmentFiber.child,
      !0,
      so,
      t,
      void 0,
      void 0
    );
    for (var u = t.length - 1; 0 <= u && !Cd(t[u], l); u--) ;
  };
  function so(l, t) {
    return t.push(l), !1;
  }
  gt.prototype.blur = function() {
    var l = B(
      this._fragmentFiber
    );
    l !== null && (l = G(l), l = ka(l).activeElement, l !== null && E(
      this._fragmentFiber.child,
      !1,
      qm,
      l,
      void 0,
      void 0
    ));
  };
  function qm(l, t) {
    return l.tag === 6 ? !1 : (l = G(l), l === t || l.contains(t) ? (t.blur(), !0) : !1);
  }
  gt.prototype.observeUsing = function(l) {
    this._observers === null && (this._observers = /* @__PURE__ */ new Set()), this._observers.add(l), E(
      this._fragmentFiber.child,
      !1,
      xm,
      l,
      void 0,
      void 0
    );
  };
  function xm(l, t) {
    return l.tag === 6 || (l = G(l), t.observe(l)), !1;
  }
  gt.prototype.unobserveUsing = function(l) {
    var t = this._observers;
    if (t !== null && t.has(l)) {
      t.delete(l), E(
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
    return l.tag === 6 || (l = G(l), t.unobserve(l)), !1;
  }
  var jt = [], vo = !1;
  function Xm(l, t, u) {
    jt.push({
      fragmentInstance: l,
      observer: t,
      instance: u
    }), vo || (vo = !0, Fm(function() {
      vo = !1;
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
    return E(
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
      l = G(l), t.push.apply(t, l.getClientRects());
    return !1;
  }
  gt.prototype.getRootNode = function(l) {
    var t = B(
      this._fragmentFiber
    );
    return t === null ? this : G(t).getRootNode(l);
  }, gt.prototype.compareDocumentPosition = function(l) {
    var t = B(
      this._fragmentFiber
    );
    if (t === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
    var u = [];
    E(
      this._fragmentFiber.child,
      !1,
      so,
      u,
      void 0,
      void 0
    );
    var e = G(t);
    if (u.length === 0) {
      if (u = e, El(this._fragmentFiber)) {
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
      return u === l ? a = Node.DOCUMENT_POSITION_CONTAINS : e & Node.DOCUMENT_POSITION_CONTAINED_BY && (u = Jl(t)[1], u === null ? a = Node.DOCUMENT_POSITION_PRECEDING : (l = G(u).compareDocumentPosition(
        l
      ), a = l === 0 || l & Node.DOCUMENT_POSITION_FOLLOWING ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING)), a |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
    }
    t = G(u[0]), a = G(u[u.length - 1]);
    var n = El(this._fragmentFiber) ? t.parentElement : e;
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
        for (n = t, t = B(t); n !== null; ) {
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
      Gt
    ), t === null ? t = !1 : (E(
      t,
      !0,
      lu,
      n,
      u
    ), n = zl, zl = null, t = n !== null)), t) : l & Node.DOCUMENT_POSITION_FOLLOWING ? ((t = !!n) && !(t = n === e) && (t = nt(
      e,
      n,
      Gt
    ), t === null ? t = !1 : (E(
      t,
      !0,
      xt,
      n,
      e
    ), n = zl, $l = zl = null, t = n !== null)), t) : !1;
  }
  function Dd(l, t) {
    var u = l.ownerDocument.createRange();
    u.selectNodeContents(l), l = u.getBoundingClientRect(), window.scrollTo(
      window.scrollX + l.left,
      t ? window.scrollY + l.top : window.scrollY + l.bottom - window.innerHeight
    );
  }
  gt.prototype.scrollIntoView = function(l) {
    if (typeof l == "object") throw Error(o(566));
    var t = [];
    E(
      this._fragmentFiber.child,
      !1,
      so,
      t,
      void 0,
      void 0
    );
    var u = l !== !1;
    if (t.length === 0) {
      var e = Jl(
        this._fragmentFiber
      );
      if (e = u ? e[1] || e[0] || B(this._fragmentFiber) : e[0] || e[1], e === null) return;
      if (e.tag === 6) {
        l = G(e), Dd(l, u);
        return;
      }
      if (e = G(e), e.nodeType !== 9) {
        if (e.nodeType === 11) {
          u = "host" in e ? e.host : null, u !== null && u.scrollIntoView(l);
          return;
        }
        e.scrollIntoView(l);
      }
    }
    for (e = u ? t.length - 1 : 0; e !== (u ? -1 : t.length); ) {
      var a = t[e];
      a.tag === 6 ? (a = G(a), Dd(a, u)) : G(a).scrollIntoView(l), e += u ? -1 : 1;
    }
  };
  function Vm(l, t) {
    return l = G(l), Ud(l, t), !1;
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
  function yo(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var u = t;
      switch (t = t.nextSibling, u.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          yo(u), En(u);
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
        if (!l[ha])
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
      if (l = Mt(l.nextSibling), l === null) break;
    }
    return null;
  }
  function Jm(l, t, u) {
    if (t === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !u || (l = Mt(l.nextSibling), l === null)) return null;
    return l;
  }
  function Hd(l, t) {
    for (; l.nodeType !== 8; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !t || (l = Mt(l.nextSibling), l === null)) return null;
    return l;
  }
  function mo(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function ho(l) {
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
  var go = null;
  function Bd(l) {
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
    switch (t = ka(u), l) {
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
      u.hasOwnProperty(e) && a != null && vl(l, t, e, null, _m, a);
    }
    u.dangerouslySetInnerHTML != null && (l.textContent = ""), l.onclick === Vt && (l.onclick = null), En(l);
  }
  function So(l) {
    for (var t = l.attributes; t.length; )
      l.removeAttributeNode(t[0]);
    En(l);
  }
  var Ct = /* @__PURE__ */ new Map(), xd = /* @__PURE__ */ new Set();
  function Pa(l) {
    if (typeof l.getRootNode == "function") {
      var t = l.getRootNode();
      if (t.nodeType === 9 || t.nodeType === 11) return t;
    }
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  var gu = K.d;
  K.d = {
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
    var l = gu.f(), t = Nf();
    return l || t;
  }
  function Im(l) {
    var t = Oe(l);
    t !== null && t.tag === 5 && t.type === "form" ? Xs(t) : gu.r(l);
  }
  var na = typeof document > "u" ? null : document;
  function Gd(l, t, u) {
    var e = na;
    if (e && typeof t == "string" && t) {
      var a = Et(t);
      a = 'link[rel="' + l + '"][href="' + a + '"]', typeof u == "string" && (a += '[crossorigin="' + u + '"]'), xd.has(a) || (xd.add(a), l = { rel: l, crossOrigin: u, href: t }, e.querySelector(a) === null && (t = e.createElement("link"), Ll(t, "link", l), Hl(t), e.head.appendChild(t)));
    }
  }
  function km(l) {
    gu.D(l), Gd("dns-prefetch", l, null);
  }
  function Pm(l, t) {
    gu.C(l, t), Gd("preconnect", l, t);
  }
  function l1(l, t, u) {
    gu.L(l, t, u);
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
      if (!(Ct.has(n) || (l = W(
        {
          rel: "preload",
          href: t === "image" && u && u.imageSrcSet ? void 0 : l,
          as: t
        },
        u
      ), Ct.set(n, l), e.querySelector(a) !== null || t === "style" && e.querySelector(ln(n)) || t === "script" && e.querySelector(tn(n))))) {
        var f = e.createElement("link");
        Ll(f, "link", l), t === "style" && (f[bn] = !0, f.onload = f.onerror = function() {
          ko(f);
        }), Hl(f), e.head.appendChild(f);
      }
    }
  }
  function t1(l, t) {
    gu.m(l, t);
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
      if (!Ct.has(n) && (l = W({ rel: "modulepreload", href: l }, t), Ct.set(n, l), u.querySelector(a) === null)) {
        switch (e) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (u.querySelector(tn(n)))
              return;
        }
        e = u.createElement("link"), Ll(e, "link", l), Hl(e), u.head.appendChild(e);
      }
    }
  }
  function u1(l, t, u) {
    gu.S(l, t, u);
    var e = na;
    if (e && l) {
      var a = _e(e).hoistableStyles, n = fa(l);
      t = t || "default";
      var f = a.get(n);
      if (!f) {
        var i = { loading: 0, preload: null };
        if (f = e.querySelector(
          ln(n)
        ))
          i.loading = 5;
        else {
          l = W(
            { rel: "stylesheet", href: l, "data-precedence": t },
            u
          ), (u = Ct.get(n)) && To(l, u);
          var c = f = e.createElement("link");
          Hl(c), Ll(c, "link", l), c._p = new Promise(function(m, T) {
            c.onload = m, c.onerror = T;
          }), c.addEventListener("load", function() {
            i.loading |= 1;
          }), c.addEventListener("error", function() {
            i.loading |= 2;
          }), i.loading |= 4, Rf(f, t, e);
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
    gu.X(l, t);
    var u = na;
    if (u && l) {
      var e = _e(u).hoistableScripts, a = ia(l), n = e.get(a);
      n || (n = u.querySelector(tn(a)), n || (l = W({ src: l, async: !0 }, t), (t = Ct.get(a)) && bo(l, t), n = u.createElement("script"), Hl(n), Ll(n, "link", l), u.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, e.set(a, n));
    }
  }
  function a1(l, t) {
    gu.M(l, t);
    var u = na;
    if (u && l) {
      var e = _e(u).hoistableScripts, a = ia(l), n = e.get(a);
      n || (n = u.querySelector(tn(a)), n || (l = W({ src: l, async: !0, type: "module" }, t), (t = Ct.get(a)) && bo(l, t), n = u.createElement("script"), Hl(n), Ll(n, "link", l), u.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, e.set(a, n));
    }
  }
  function Xd(l, t, u, e) {
    var a = (a = Tu.current) ? Pa(a) : null;
    if (!a) throw Error(o(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof u.precedence == "string" && typeof u.href == "string" ? (u = fa(u.href), t = _e(
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
          var n = _e(
            a
          ).hoistableStyles, f = n.get(l);
          if (f || (a = a.ownerDocument || a, f = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, n.set(l, f), (n = a.querySelector(
            ln(l)
          )) ? n._p || (f.instance = n, f.state.loading = 5) : (n = Ct.get(l), n || (n = {
            rel: "preload",
            as: "style",
            href: u.href,
            crossOrigin: u.crossOrigin,
            integrity: u.integrity,
            media: u.media,
            hrefLang: u.hrefLang,
            referrerPolicy: u.referrerPolicy
          }, Ct.set(l, n)), n1(
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
        return t = u.async, u = u.src, typeof u == "string" && t && typeof t != "function" && typeof t != "symbol" ? (u = ia(u), t = _e(
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
  function ln(l) {
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
      if (t[bn] !== !0) {
        e.loading = 1;
        return;
      }
    } else
      t = l.createElement("link"), t[bn] = !0, t.onload = t.onerror = ko.bind(null, t), Ll(t, "link", u), Hl(t), l.head.appendChild(t);
    e.preload = t, t.addEventListener("load", function() {
      return e.loading |= 1;
    }), t.addEventListener("error", function() {
      return e.loading |= 2;
    });
  }
  function ia(l) {
    return '[src="' + Et(l) + '"]';
  }
  function tn(l) {
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
          ), Hl(e), Ll(e, "style", a), Rf(e, u.precedence, l), t.instance = e;
        case "stylesheet":
          a = fa(u.href);
          var n = l.querySelector(
            ln(a)
          );
          if (n)
            return t.state.loading |= 4, t.instance = n, Hl(n), n;
          e = Qd(u), (a = Ct.get(a)) && To(e, a), n = (l.ownerDocument || l).createElement("link"), Hl(n);
          var f = n;
          return f._p = new Promise(function(i, c) {
            f.onload = i, f.onerror = c;
          }), Ll(n, "link", e), t.state.loading |= 4, Rf(n, u.precedence, l), t.instance = n;
        case "script":
          return n = ia(u.src), (a = l.querySelector(
            tn(n)
          )) ? (t.instance = a, Hl(a), a) : (e = u, (a = Ct.get(n)) && (e = W({}, u), bo(e, a)), l = l.ownerDocument || l, a = l.createElement("script"), Hl(a), Ll(a, "link", e), l.head.appendChild(a), t.instance = a);
        case "void":
          return null;
        default:
          throw Error(o(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (e = t.instance, t.state.loading |= 4, Rf(e, u.precedence, l));
    return t.instance;
  }
  function Rf(l, t, u) {
    for (var e = u.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), a = e.length ? e[e.length - 1] : null, n = a, f = 0; f < e.length; f++) {
      var i = e[f];
      if (i.dataset.precedence === t) n = i;
      else if (n !== a) break;
    }
    n ? n.parentNode.insertBefore(l, n.nextSibling) : (t = u.nodeType === 9 ? u.head : u, t.insertBefore(l, t.firstChild));
  }
  function To(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.title == null && (l.title = t.title);
  }
  function bo(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.integrity == null && (l.integrity = t.integrity);
  }
  var Hf = null;
  function Vd(l, t, u) {
    if (Hf === null) {
      var e = /* @__PURE__ */ new Map(), a = Hf = /* @__PURE__ */ new Map();
      a.set(u, e);
    } else
      a = Hf, e = a.get(u), e || (e = /* @__PURE__ */ new Map(), a.set(u, e));
    if (e.has(l)) return e;
    for (e.set(l, null), u = u.getElementsByTagName(l), a = 0; a < u.length; a++) {
      var n = u[a];
      if (!(n[ha] || n[Gl] || l === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
        var f = n.getAttribute(t) || "";
        f = l + f;
        var i = e.get(f);
        i ? i.push(n) : e.set(f, [n]);
      }
    }
    return e;
  }
  function Eo(l, t, u) {
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
          ln(a)
        );
        if (n) {
          t = n._p, t !== null && typeof t == "object" && typeof t.then == "function" && (l.count++, l = un.bind(l), t.then(l, l)), u.state.loading |= 4, u.instance = n, Hl(n);
          return;
        }
        n = t.ownerDocument || t, e = Qd(e), (a = Ct.get(a)) && To(e, a), n = n.createElement("link"), Hl(n);
        var f = n;
        f._p = new Promise(function(i, c) {
          f.onload = i, f.onerror = c;
        }), Ll(n, "link", e), u.instance = n;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(u, t), (t = u.state.preload) && (u.state.loading & 3) === 0 && (l.count++, u = un.bind(l), t.addEventListener("load", u), t.addEventListener("error", u));
    }
  }
  var Bf = 0;
  function c1(l, t) {
    return l.stylesheets && l.count === 0 && jf(l, l.stylesheets), 0 < l.count || 0 < l.imgCount ? function(u) {
      var e = setTimeout(function() {
        if (l.stylesheets && jf(l, l.stylesheets), l.unsuspend) {
          var n = l.unsuspend;
          l.unsuspend = null, n();
        }
      }, 6e4 + t);
      0 < l.imgBytes && Bf === 0 && (Bf = 62500 * Am());
      var a = setTimeout(
        function() {
          if (l.waitingForImages = !1, l.count === 0 && (l.stylesheets && jf(l, l.stylesheets), l.unsuspend)) {
            var n = l.unsuspend;
            l.unsuspend = null, n();
          }
        },
        (l.imgBytes > Bf ? 50 : 800) + t
      );
      return l.unsuspend = u, function() {
        l.unsuspend = null, clearTimeout(e), clearTimeout(a);
      };
    } : null;
  }
  function $d(l) {
    if (l.count === 0 && (l.imgCount === 0 || !l.waitingForImages)) {
      if (l.stylesheets) jf(l, l.stylesheets);
      else if (l.unsuspend) {
        var t = l.unsuspend;
        l.unsuspend = null, t();
      }
    }
  }
  function un() {
    this.count--, $d(this);
  }
  function o1() {
    this.imgCount--, $d(this);
  }
  var Yf = null;
  function jf(l, t) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, Yf = /* @__PURE__ */ new Map(), t.forEach(r1, l), Yf = null, un.call(l));
  }
  function r1(l, t) {
    if (!(t.state.loading & 4)) {
      var u = Yf.get(l);
      if (u) var e = u.get(null);
      else {
        u = /* @__PURE__ */ new Map(), Yf.set(l, u);
        for (var a = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), n = 0; n < a.length; n++) {
          var f = a[n];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") && (u.set(f.dataset.precedence, f), e = f);
        }
        e && u.set(null, e);
      }
      a = t.instance, f = a.getAttribute("data-precedence"), n = u.get(f) || e, n === e && u.set(null, a), u.set(f, a), this.count++, e = un.bind(this), a.addEventListener("load", e), a.addEventListener("error", e), n ? n.parentNode.insertBefore(a, n.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(a, l.firstChild)), t.state.loading |= 4;
    }
  }
  var ca = {
    $$typeof: Rl,
    Provider: null,
    Consumer: null,
    _currentValue: uu,
    _currentValue2: uu,
    _threadCount: 0
  };
  function s1(l, t, u, e, a, n, f, i, c) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = li(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = li(0), this.hiddenUpdates = li(null), this.identifierPrefix = e, this.onUncaughtError = a, this.onCaughtError = n, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = c, this.transitionTypes = null, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Fd(l, t, u, e, a, n, f, i, c, m, T, O) {
    return l = new s1(
      l,
      t,
      u,
      f,
      c,
      m,
      T,
      O,
      i
    ), t = 1, n === !0 && (t |= 24), n = lt(3, null, null, t), l.current = n, n.stateNode = l, t = Yi(), t.refCount++, l.pooledCache = t, t.refCount++, n.memoizedState = {
      element: e,
      isDehydrated: u,
      cache: t
    }, Gi(n), l;
  }
  function Wd(l) {
    return l ? (l = Be, l) : Be;
  }
  function Id(l, t, u, e, a, n) {
    a = Wd(a), e.context === null ? e.context = a : e.pendingContext = a, e = Du(t), e.payload = { element: u }, n = n === void 0 ? null : n, n !== null && (e.callback = n), u = Uu(l, e, t), u !== null && (at(u, l, t), Ha(u, l, t));
  }
  function kd(l, t) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var u = l.retryLane;
      l.retryLane = u !== 0 && u < t ? u : t;
    }
  }
  function zo(l, t) {
    kd(l, t), (l = l.alternate) && kd(l, t);
  }
  function Pd(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = te(l, 67108864);
      t !== null && at(t, l, 67108864), zo(l, 67108864);
    }
  }
  function lv(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = ht();
      t = ti(t);
      var u = te(l, t);
      u !== null && at(u, l, t), zo(l, t);
    }
  }
  var oa = !0;
  function d1(l, t, u, e) {
    var a = R.T;
    R.T = null;
    var n = K.p;
    try {
      K.p = 2, Oo(l, t, u, e);
    } finally {
      K.p = n, R.T = a;
    }
  }
  function v1(l, t, u, e) {
    var a = R.T;
    R.T = null;
    var n = K.p;
    try {
      K.p = 8, Oo(l, t, u, e);
    } finally {
      K.p = n, R.T = a;
    }
  }
  function Oo(l, t, u, e) {
    if (oa) {
      var a = _o(e);
      if (a === null)
        eo(
          l,
          t,
          e,
          qf,
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
          var n = Oe(a);
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
                    Pt(n), (cl & 6) === 0 && (zf = it() + 500, Fa(0));
                  }
                }
                break;
              case 31:
              case 13:
                i = te(n, 2), i !== null && at(i, n, 2), Nf(), zo(n, 2);
            }
          if (n = _o(e), n === null && eo(
            l,
            t,
            e,
            qf,
            u
          ), n === a) break;
          a = n;
        }
        a !== null && e.stopPropagation();
      } else
        eo(
          l,
          t,
          e,
          null,
          u
        );
    }
  }
  function _o(l) {
    return l = ci(l), No(l);
  }
  var qf = null;
  function No(l) {
    if (qf = null, l = Iu(l), l !== null) {
      var t = p(l);
      if (t === null) l = null;
      else {
        var u = t.tag;
        if (u === 13) {
          if (l = H(t), l !== null) return l;
          l = null;
        } else if (u === 31) {
          if (l = X(t), l !== null) return l;
          l = null;
        } else if (u === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return qf = l, null;
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
          case mn:
          case pv:
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
  var Ao = !1, Vu = null, Lu = null, Ku = null, en = /* @__PURE__ */ new Map(), an = /* @__PURE__ */ new Map(), Ju = [], y1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function uv(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        Vu = null;
        break;
      case "dragenter":
      case "dragleave":
        Lu = null;
        break;
      case "mouseover":
      case "mouseout":
        Ku = null;
        break;
      case "pointerover":
      case "pointerout":
        en.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        an.delete(t.pointerId);
    }
  }
  function nn(l, t, u, e, a, n) {
    return l === null || l.nativeEvent !== n ? (l = {
      blockedOn: t,
      domEventName: u,
      eventSystemFlags: e,
      nativeEvent: n,
      targetContainers: [a]
    }, t !== null && (t = Oe(t), t !== null && Pd(t)), l) : (l.eventSystemFlags |= e, t = l.targetContainers, a !== null && t.indexOf(a) === -1 && t.push(a), l);
  }
  function m1(l, t, u, e, a) {
    switch (t) {
      case "focusin":
        return Vu = nn(
          Vu,
          l,
          t,
          u,
          e,
          a
        ), !0;
      case "dragenter":
        return Lu = nn(
          Lu,
          l,
          t,
          u,
          e,
          a
        ), !0;
      case "mouseover":
        return Ku = nn(
          Ku,
          l,
          t,
          u,
          e,
          a
        ), !0;
      case "pointerover":
        var n = a.pointerId;
        return en.set(
          n,
          nn(
            en.get(n) || null,
            l,
            t,
            u,
            e,
            a
          )
        ), !0;
      case "gotpointercapture":
        return n = a.pointerId, an.set(
          n,
          nn(
            an.get(n) || null,
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
      var u = p(t);
      if (u !== null) {
        if (t = u.tag, t === 13) {
          if (t = H(u), t !== null) {
            l.blockedOn = t, Fo(l.priority, function() {
              lv(u);
            });
            return;
          }
        } else if (t === 31) {
          if (t = X(u), t !== null) {
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
  function xf(l) {
    if (l.blockedOn !== null) return !1;
    for (var t = l.targetContainers; 0 < t.length; ) {
      var u = _o(l.nativeEvent);
      if (u === null) {
        u = l.nativeEvent;
        var e = new u.constructor(
          u.type,
          u
        );
        ii = e, u.target.dispatchEvent(e), ii = null;
      } else
        return t = Oe(u), t !== null && Pd(t), l.blockedOn = u, !1;
      t.shift();
    }
    return !0;
  }
  function av(l, t, u) {
    xf(l) && u.delete(t);
  }
  function h1() {
    Ao = !1, Vu !== null && xf(Vu) && (Vu = null), Lu !== null && xf(Lu) && (Lu = null), Ku !== null && xf(Ku) && (Ku = null), en.forEach(av), an.forEach(av);
  }
  function Gf(l, t) {
    l.blockedOn === t && (l.blockedOn = null, Ao || (Ao = !0, r.unstable_scheduleCallback(
      r.unstable_NormalPriority,
      h1
    )));
  }
  var Xf = null;
  function nv(l) {
    Xf !== l && (Xf = l, r.unstable_scheduleCallback(
      r.unstable_NormalPriority,
      function() {
        Xf === l && (Xf = null);
        for (var t = 0; t < l.length; t += 3) {
          var u = l[t], e = l[t + 1], a = l[t + 2];
          if (typeof e != "function") {
            if (No(e || u) === null)
              continue;
            break;
          }
          var n = Oe(u);
          n !== null && (l.splice(t, 3), t -= 3, fc(
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
      return Gf(c, l);
    }
    Vu !== null && Gf(Vu, l), Lu !== null && Gf(Lu, l), Ku !== null && Gf(Ku, l), en.forEach(t), an.forEach(t);
    for (var u = 0; u < Ju.length; u++) {
      var e = Ju[u];
      e.blockedOn === l && (e.blockedOn = null);
    }
    for (; 0 < Ju.length && (u = Ju[0], u.blockedOn === null); )
      ev(u), u.blockedOn === null && Ju.shift();
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
            else if (No(a) !== null) continue;
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
  function po(l) {
    this._internalRoot = l;
  }
  Qf.prototype.render = po.prototype.render = function(l) {
    var t = this._internalRoot;
    if (t === null) throw Error(o(409));
    var u = t.current, e = ht();
    Id(u, e, l, t, null, null);
  }, Qf.prototype.unmount = po.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var t = l.containerInfo;
      Id(l.current, 2, null, l, null, null), Nf(), t[ze] = null;
    }
  };
  function Qf(l) {
    this._internalRoot = l;
  }
  Qf.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var t = $o();
      l = { blockedOn: null, target: l, priority: t };
      for (var u = 0; u < Ju.length && t !== 0 && t < Ju[u].priority; u++) ;
      Ju.splice(u, 0, l), u === 0 && ev(l);
    }
  };
  var iv = S.version;
  if (iv !== "19.3.0")
    throw Error(
      o(
        527,
        iv,
        "19.3.0"
      )
    );
  K.findDOMNode = function(l) {
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
    var Zf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Zf.isDisabled && Zf.supportsFiber)
      try {
        va = Zf.inject(
          g1
        ), ct = Zf;
      } catch {
      }
  }
  return cn.createRoot = function(l, t) {
    if (!N(l)) throw Error(o(299));
    var u = !1, e = "", a = Ws, n = Is, f = ks;
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
    ), l[ze] = t.current, uo(l), new po(t);
  }, cn.hydrateRoot = function(l, t, u) {
    if (!N(l)) throw Error(o(299));
    var e = !1, a = "", n = Ws, f = Is, i = ks, c = null;
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
    ), t.context = Wd(null), u = t.current, e = ht(), e = ti(e), a = Du(e), a.callback = null, Uu(u, a, e), u = e, t.current.lanes = u, ma(t, u), Pt(t), l[ze] = t.current, uo(l), new Qf(t);
  }, cn.version = "19.3.0", cn;
}
var gv;
function C1() {
  if (gv) return Do.exports;
  gv = 1;
  function r() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (S) {
        console.error(S);
      }
  }
  return r(), Do.exports = M1(), Do.exports;
}
var D1 = C1();
function U1(r) {
  return r && typeof r == "object" ? r : typeof window > "u" ? null : window;
}
function Sv({
  snapshot: r,
  ownSeat: S = null,
  replayIndex: b = null,
  flipVertical: o = !1
} = {}) {
  const N = r && typeof r == "object" && !Array.isArray(r) ? { ...r } : {};
  return {
    ...N,
    boardCode: String(N.boardCode || ""),
    version: Number.isFinite(Number(N.version)) ? Number(N.version) : 0,
    ownSeat: S,
    replayIndex: b,
    flipVertical: !!o
  };
}
function R1({
  node: r,
  snapshot: S,
  ownSeat: b,
  replayIndex: o,
  flipVertical: N,
  onMoveClick: p,
  elmRuntime: H
} = {}) {
  const Z = U1(H)?.Elm?.BoardIsland?.init;
  if (typeof Z != "function" || !r)
    return {
      app: null,
      sendSnapshotUpdate: () => {
      },
      cleanup: () => {
      }
    };
  const tl = Sv({
    snapshot: S,
    ownSeat: b,
    replayIndex: o,
    flipVertical: N
  }), U = Z({ node: r, flags: tl }), E = U?.ports?.boardMoveClicked, B = U?.ports?.boardSnapshot, El = (G) => {
    typeof p == "function" && p(G);
  };
  return typeof E?.subscribe == "function" && E.subscribe(El), { app: U, sendSnapshotUpdate: (G) => {
    typeof B?.send == "function" && B.send(Sv(G));
  }, cleanup: () => {
    typeof E?.unsubscribe == "function" && E.unsubscribe(El), typeof U?.unmount == "function" && U.unmount();
  } };
}
function H1({
  snapshot: r,
  ownSeat: S,
  replayIndex: b,
  flipVertical: o,
  onMoveClick: N
}) {
  const p = St.useRef(null), H = St.useRef(null), X = St.useRef(N);
  X.current = N;
  const Z = St.useMemo(
    () => ({ snapshot: r, ownSeat: S, replayIndex: b, flipVertical: o }),
    [r, S, b, o]
  );
  return St.useEffect(() => (H.current = R1({
    node: p.current,
    ...Z,
    onMoveClick: (tl) => X.current?.(tl)
  }), () => {
    H.current?.cleanup?.(), H.current = null;
  }), []), St.useEffect(() => {
    H.current?.sendSnapshotUpdate?.(Z);
  }, [Z]), /* @__PURE__ */ x.jsx("div", { ref: p, "data-testid": "elm-board-island-host" });
}
function B1(r) {
  if (typeof r != "function")
    throw new Error("Fetch API unavailable.");
  return r;
}
async function Y1(r) {
  return r.json();
}
async function j1({ clientId: r, moveTimeLimitSeconds: S }, { fetchImpl: b = globalThis.fetch } = {}) {
  const o = B1(b), N = Number(S), p = {
    clientId: String(r || "").trim(),
    moveTimeLimitSeconds: Number.isFinite(N) ? N : 15
  }, H = await o("/api/rooms", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(p)
  });
  if (!H.ok)
    throw new Error(`Board creation failed: ${H.status}`);
  return Y1(H);
}
function q1(r = globalThis.window?.location || globalThis.location) {
  const S = r?.protocol === "https:" ? "wss:" : "ws:", b = r?.host || "localhost";
  return `${S}//${b}/ws`;
}
function x1({
  roomId: r,
  clientId: S,
  onMessage: b,
  onStatus: o,
  WebSocketImpl: N = globalThis.window?.WebSocket || globalThis.WebSocket,
  socketUrl: p = q1()
} = {}) {
  if (typeof N != "function")
    throw new Error("WebSocket unavailable.");
  const H = new N(p);
  return H.onopen = () => {
    o?.("connected"), H.send(
      JSON.stringify({
        type: "watch",
        roomId: String(r || "").trim(),
        clientId: String(S || "").trim()
      })
    );
  }, H.onmessage = (X) => {
    try {
      b?.(JSON.parse(X.data));
    } catch {
      b?.({ type: "error", error: "malformed websocket message" });
    }
  }, H.onerror = () => {
    o?.("error");
  }, H.onclose = () => {
    o?.("disconnected");
  }, {
    socket: H,
    send(X) {
      H.send(JSON.stringify(X));
    },
    close() {
      H.close?.();
    }
  };
}
const Tv = "traceballElmClientId", Lf = "traceballPlayerName", G1 = "traceballOnlineMoveTimer";
function Kf() {
  return globalThis.window?.localStorage || globalThis.localStorage;
}
function X1(r = Math.random) {
  return r().toString(36).slice(2, 12);
}
function Q1({
  storage: r = Kf(),
  random: S = Math.random
} = {}) {
  const b = r?.getItem?.(Tv);
  if (b) return b;
  const o = `traceball-elm-${X1(S)}`;
  return r?.setItem?.(Tv, o), o;
}
function Ev(r = Math.random) {
  const S = (b) => b[Math.floor(r() * b.length)];
  return `${S(["Neon", "Turbo", "Cosmic", "Lucky", "Pixel", "Rocket", "Thunder"])} ${S(["Striker", "Falcon", "Comet", "Phantom", "Kicker", "Ace", "Wizard"])}`;
}
function zv(r, S = "") {
  return String(r || "").replace(/\s+/g, " ").trim().slice(0, 24) || S;
}
function Z1({
  storage: r = Kf(),
  randomName: S = Ev
} = {}) {
  const b = String(r?.getItem?.(Lf) || ""), o = zv(b, "");
  if (o && o !== "Elm Player")
    return r?.setItem?.(Lf, o), o;
  const N = S();
  return r?.setItem?.(Lf, N), N;
}
function V1(r, { storage: S = Kf(), randomName: b = Ev } = {}) {
  const o = zv(r, b());
  return S?.setItem?.(Lf, o), o;
}
function L1(r, S = 15) {
  const b = Number(r);
  return Number.isFinite(b) && b >= 0 ? b : S;
}
function K1({
  storage: r = Kf(),
  fallback: S = 15
} = {}) {
  return L1(
    r?.getItem?.(G1),
    S
  );
}
function J1({
  clientId: r = "",
  playerName: S = "",
  connectionStatus: b = "idle",
  currentBoardCode: o = "",
  boardState: N = null,
  boardList: p = [],
  mainTab: H = "home",
  mode: X = "online",
  toast: Z = null,
  onlineMoveTimer: tl = 15,
  localMoveTimer: U = 15,
  historyPanelOpen: E = !1,
  rulesPanelOpen: B = !1
} = {}) {
  return {
    clientId: r,
    playerName: S,
    connectionStatus: b,
    currentBoardCode: o,
    boardState: N,
    boardList: p,
    mainTab: H,
    mode: X,
    toast: Z,
    onlineSetup: {
      moveTimeLimitSeconds: tl
    },
    localSetup: {
      moveTimeLimitSeconds: U
    },
    historyPanelOpen: E,
    rulesPanelOpen: B
  };
}
function w1(r, S, b) {
  if (!b || typeof b != "object") return !1;
  const o = String(r || "").trim(), N = String(b.boardCode || "").trim();
  if (o && N && o !== N) return !1;
  if (!S || typeof S != "object") return !0;
  const p = String(S.boardCode || "").trim();
  if (!p || p !== N) return !0;
  const H = Number(S.version), X = Number(b.version);
  return Number.isFinite(H) ? Number.isFinite(X) ? X > H : !1 : !0;
}
function $1(r, S) {
  if (!S || typeof S != "object") return r;
  switch (S.type) {
    case "hydrateShell":
      return { ...r, ...S.payload };
    case "setPlayerName":
      return { ...r, playerName: String(S.playerName || "") };
    case "setConnectionStatus":
      return { ...r, connectionStatus: String(S.status || "idle") };
    case "setCurrentBoardCode":
      return { ...r, currentBoardCode: String(S.boardCode || "") };
    case "receiveBoardState":
      return w1(
        r.currentBoardCode,
        r.boardState,
        S.boardState
      ) ? {
        ...r,
        boardState: S.boardState,
        currentBoardCode: String(
          S.boardState?.boardCode || r.currentBoardCode || ""
        )
      } : r;
    case "receiveBoardList":
      return {
        ...r,
        boardList: Array.isArray(S.boardList) ? S.boardList : Array.isArray(S.boardList?.rooms) ? S.boardList.rooms : []
      };
    case "setMainTab":
      return { ...r, mainTab: String(S.mainTab || r.mainTab) };
    case "setMode":
      return { ...r, mode: String(S.mode || r.mode) };
    case "setToast":
      return { ...r, toast: S.toast ?? null };
    case "setHistoryPanelOpen":
      return { ...r, historyPanelOpen: !!S.open };
    case "setRulesPanelOpen":
      return { ...r, rulesPanelOpen: !!S.open };
    case "setOnlineMoveTimer":
      return {
        ...r,
        onlineSetup: {
          ...r.onlineSetup,
          moveTimeLimitSeconds: Number(S.seconds)
        }
      };
    case "setLocalMoveTimer":
      return {
        ...r,
        localSetup: {
          ...r.localSetup,
          moveTimeLimitSeconds: Number(S.seconds)
        }
      };
    default:
      return r;
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
}, Vf = {
  padding: "16px",
  borderRadius: "18px",
  background: "#f7fbf7",
  border: "1px solid rgba(16, 42, 26, 0.08)"
}, qt = {
  margin: 0,
  fontSize: "0.78rem",
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  color: "#567062"
}, on = {
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
}, rn = {
  display: "flex",
  gap: "10px",
  marginTop: "18px",
  flexWrap: "wrap"
}, sa = (r) => ({
  border: "1px solid rgba(16, 42, 26, 0.12)",
  borderRadius: "999px",
  padding: "8px 14px",
  background: r ? "#102a1a" : "#f7fbf7",
  color: r ? "#f6fbf4" : "#102a1a",
  fontWeight: 700,
  cursor: "pointer"
}), Bo = {
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
function Te(r) {
  return String(r || "").trim();
}
function ah(r) {
  const S = Number(r);
  return Number.isFinite(S) ? S : 0;
}
function nh(r) {
  const S = r?.game?.players;
  return S && typeof S == "object" ? S : null;
}
function fh(r) {
  return r === "p1" ? "Claim Blue" : "Claim Red";
}
function ih(r) {
  return r?.game?.status === "playing" || r?.game?.status === "paused";
}
function ch() {
  return globalThis.window?.history ?? globalThis.history ?? null;
}
function qo() {
  return globalThis.window?.location ?? globalThis.location ?? null;
}
function oh(r) {
  return r ? typeof r.href == "string" && r.href ? r.href : `${r.origin || "http://localhost"}${r.pathname || "/react"}${r.search || ""}${r.hash || ""}` : "";
}
function rh({
  locationLike: r = qo()
} = {}) {
  const S = oh(r);
  if (!S) return "";
  const b = new URL(S);
  return Te(
    b.searchParams.get("board") || b.searchParams.get("room") || b.searchParams.get("code") || ""
  );
}
function sh(r) {
  if (!r || typeof r != "object" || String(r.type || "") !== "state") return null;
  const S = Te(r.boardCode || r.roomId), b = r.board && typeof r.board == "object", o = r.game && typeof r.game == "object";
  return !S || !b && !o ? null : {
    boardCode: S,
    version: ah(r.version),
    ...b ? { board: r.board } : {},
    ...o ? { game: r.game } : {}
  };
}
function dh(r, { historyLike: S = ch(), locationLike: b = qo() } = {}) {
  if (!b || typeof S?.replaceState != "function")
    return null;
  const o = typeof b.href == "string" && b.href ? b.href : `${b.origin || "http://localhost"}${b.pathname || "/react"}${b.search || ""}${b.hash || ""}`, N = new URL(o);
  N.pathname = "/react", r ? N.searchParams.set("board", String(r).trim()) : N.searchParams.delete("board");
  const p = `${N.pathname}${N.search}${N.hash}`;
  return S.replaceState(S.state ?? null, "", p), p;
}
function vh({
  currentBoardCode: r,
  clientId: S,
  dispatch: b,
  onOwnSeat: o,
  onMessage: N,
  connect: p = x1
}) {
  const H = Te(r);
  return !H || typeof p != "function" ? null : p({
    roomId: H,
    clientId: String(S || ""),
    onStatus(X) {
      b?.({ type: "setConnectionStatus", status: X });
    },
    onMessage(X) {
      if (N?.(X), X?.type === "joined") {
        const tl = String(X.playerId || "").trim();
        (tl === "p1" || tl === "p2") && o?.(tl);
        return;
      }
      if (X?.type === "left") {
        o?.(null), b?.({ type: "setToast", toast: "You left the board." });
        return;
      }
      if (X?.type === "BoardNotFound" && typeof X.message == "string") {
        b?.({ type: "setToast", toast: X.message });
        return;
      }
      if (X?.type === "error" && typeof X.error == "string") {
        b?.({ type: "setToast", toast: X.error });
        return;
      }
      const Z = sh(X);
      Z && b?.({ type: "receiveBoardState", boardState: Z });
    }
  });
}
function Yo({
  roomId: r,
  clientId: S,
  dispatch: b,
  setOwnSeat: o,
  connectionRef: N,
  activeBoardRef: p,
  onMessage: H,
  connect: X = vh
}) {
  const Z = Te(r);
  if (!Z || typeof X != "function") return null;
  if (p?.current === Z && N?.current)
    return N.current;
  N?.current?.close?.(), N && (N.current = null), p && (p.current = Z), o?.(null);
  const tl = X({
    currentBoardCode: Z,
    clientId: S,
    dispatch: b,
    onOwnSeat: o,
    onMessage: H
  });
  return N && (N.current = tl), tl;
}
function yh({ snapshot: r, ownSeat: S } = {}) {
  const b = String(S || "").trim();
  if (b === "p1" || b === "p2") return [];
  const o = nh(r);
  return o ? ["p1", "p2"].filter((N) => o?.[N]?.status === "vacant").map((N) => ({ seatId: N, label: fh(N) })) : [];
}
function mh({ ownSeat: r, snapshot: S } = {}) {
  const b = String(r || "").trim();
  return b !== "p1" && b !== "p2" ? null : ih(S) ? { label: "Leave Seat (Forfeit)", danger: !0 } : { label: "Leave Seat", danger: !1 };
}
function hh({ ownSeat: r, snapshot: S } = {}) {
  const b = String(r || "").trim();
  if (b !== "p1" && b !== "p2") return [];
  const o = String(S?.game?.status || "").trim();
  return o === "playing" ? S?.game?.turn === b ? [{ type: "pause", label: "Pause Game" }] : [] : o === "paused" ? (S?.game?.pause?.resumeTurn || S?.game?.pause?.byPlayerId || null) === b ? [{ type: "resume", label: "Resume Game" }] : [] : [];
}
function gh({
  clientId: r,
  dispatch: S,
  startWatching: b,
  locationLike: o = qo()
}) {
  const N = rh({ locationLike: o });
  return N ? (S?.({ type: "setCurrentBoardCode", boardCode: N }), b?.({
    roomId: N,
    clientId: r,
    onMessage(p) {
      p?.type === "BoardNotFound" && typeof p.message == "string" && S?.({ type: "setToast", toast: p.message }), p?.type === "error" && typeof p.error == "string" && S?.({ type: "setToast", toast: p.error });
    }
  })) : null;
}
function Sh(r) {
  const S = r?.point;
  if (!S || typeof S != "object") return null;
  const b = Number(S.x), o = Number(S.y);
  return !Number.isFinite(b) || !Number.isFinite(o) ? null : { x: b, y: o };
}
function sn(r) {
  return typeof r?.send == "function" && Number(r?.socket?.readyState) === 1;
}
function Th({
  payload: r,
  ownSeat: S,
  connection: b,
  dispatch: o
}) {
  if (!sn(b)) {
    o?.({
      type: "setToast",
      toast: "Connection unavailable. Reconnect to move."
    });
    return;
  }
  const N = String(S || "").trim();
  if (N !== "p1" && N !== "p2") {
    o?.({ type: "setToast", toast: "Join a seat to move." });
    return;
  }
  const p = Sh(r);
  if (!p) {
    o?.({ type: "setToast", toast: "Invalid move target." });
    return;
  }
  try {
    b.send({ type: "move", to: p });
  } catch {
    o?.({
      type: "setToast",
      toast: "Move could not be sent. Reconnect and try again."
    });
  }
}
function bh({
  seatId: r,
  currentBoardCode: S,
  clientId: b,
  playerName: o,
  connection: N,
  dispatch: p
}) {
  if (!sn(N)) {
    p?.({
      type: "setToast",
      toast: "Connection unavailable. Reconnect to claim a seat."
    });
    return;
  }
  const H = String(r || "").trim();
  if (H !== "p1" && H !== "p2") {
    p?.({ type: "setToast", toast: "Invalid seat selection." });
    return;
  }
  N.send({
    type: "claimSeat",
    seatId: H,
    name: String(o || "").trim(),
    roomId: Te(S),
    clientId: String(b || "").trim()
  });
}
function Eh({ ownSeat: r, connection: S, dispatch: b }) {
  const o = String(r || "").trim();
  if (o !== "p1" && o !== "p2") {
    b?.({ type: "setToast", toast: "You are not occupying a seat." });
    return;
  }
  if (!sn(S)) {
    b?.({
      type: "setToast",
      toast: "Connection unavailable. Reconnect to leave your seat."
    });
    return;
  }
  S.send({ type: "leave" });
}
function zh({ ownSeat: r, connection: S, dispatch: b }) {
  const o = String(r || "").trim();
  if (o !== "p1" && o !== "p2") {
    b?.({ type: "setToast", toast: "You are not occupying a seat." });
    return;
  }
  if (!sn(S)) {
    b?.({
      type: "setToast",
      toast: "Connection unavailable. Reconnect to pause."
    });
    return;
  }
  S.send({ type: "pause" });
}
function Oh({ ownSeat: r, connection: S, dispatch: b }) {
  const o = String(r || "").trim();
  if (o !== "p1" && o !== "p2") {
    b?.({ type: "setToast", toast: "You are not occupying a seat." });
    return;
  }
  if (!sn(S)) {
    b?.({
      type: "setToast",
      toast: "Connection unavailable. Reconnect to resume."
    });
    return;
  }
  S.send({ type: "resume" });
}
async function _h({
  clientId: r,
  moveTimeLimitSeconds: S,
  dispatch: b,
  create: o = j1,
  syncUrl: N = dh,
  startWatching: p,
  refreshBoardList: H
}) {
  try {
    const X = await o({ clientId: r, moveTimeLimitSeconds: S }), Z = Te(X?.roomId);
    if (!Z)
      throw new Error("Board creation response missing roomId.");
    return b?.({ type: "setCurrentBoardCode", boardCode: Z }), N?.(Z), p?.({ roomId: Z, clientId: r }), await H?.(), X;
  } catch (X) {
    return b?.({
      type: "setToast",
      toast: X instanceof Error && X.message ? X.message : "Board creation failed."
    }), null;
  }
}
function Nh({ initialState: r }) {
  const [S, b] = St.useReducer($1, r), [o, N] = St.useState(null), p = St.useRef(null), H = St.useRef(""), X = r?.demoBoardSnapshot || null, Z = S.boardState || X, tl = String(S.connectionStatus || "idle"), U = yh({
    snapshot: Z,
    ownSeat: o
  }), E = mh({
    ownSeat: o,
    snapshot: Z
  }), B = hh({
    ownSeat: o,
    snapshot: Z
  });
  St.useEffect(() => {
    const G = gh({
      clientId: S.clientId,
      dispatch: b,
      startWatching: ({ roomId: zl, clientId: $l, onMessage: lu }) => Yo({
        roomId: zl,
        clientId: $l,
        dispatch: b,
        setOwnSeat: N,
        connectionRef: p,
        activeBoardRef: H,
        onMessage: lu
      })
    });
    return () => {
      p.current === G && G && (H.current = "", p.current = null, G.close?.());
    };
  }, []), St.useEffect(() => {
    const G = Te(S.currentBoardCode);
    if (!G) {
      p.current = null, N(null), b({ type: "setConnectionStatus", status: "idle" });
      return;
    }
    let zl = null;
    try {
      zl = Yo({
        roomId: G,
        clientId: S.clientId,
        dispatch: b,
        setOwnSeat: N,
        connectionRef: p,
        activeBoardRef: H,
        onMessage: null
      });
    } catch {
      H.current = "", p.current = null, b({ type: "setConnectionStatus", status: "error" });
      return;
    }
    return () => {
      p.current === zl && (H.current = "", p.current = null, zl?.close?.());
    };
  }, [S.currentBoardCode, S.clientId]);
  const El = S.clientId && S.clientId.length > 6 ? `...${S.clientId.slice(-6)}` : "identity ready", Jl = (G) => {
    const zl = G.target.value;
    b({ type: "setPlayerName", playerName: zl }), V1(zl);
  }, ql = async () => {
    await _h({
      clientId: S.clientId,
      moveTimeLimitSeconds: S.onlineSetup.moveTimeLimitSeconds,
      dispatch: b,
      startWatching: ({ roomId: G, clientId: zl }) => Yo({
        roomId: G,
        clientId: zl,
        dispatch: b,
        setOwnSeat: N,
        connectionRef: p,
        activeBoardRef: H
      })
    });
  };
  return /* @__PURE__ */ x.jsx("main", { style: F1, children: /* @__PURE__ */ x.jsxs("section", { style: W1, children: [
    /* @__PURE__ */ x.jsx("p", { style: I1, children: "React product shell" }),
    /* @__PURE__ */ x.jsx("h1", { style: k1, children: "Traceball Arena" }),
    /* @__PURE__ */ x.jsx("p", { style: P1, children: "The React shell owns product state only. The Elm board island is not mounted yet, and online authority remains on the server." }),
    /* @__PURE__ */ x.jsxs("div", { style: lh, children: [
      /* @__PURE__ */ x.jsxs("article", { style: Vf, children: [
        /* @__PURE__ */ x.jsx("p", { style: qt, children: "Player Name" }),
        /* @__PURE__ */ x.jsx(
          "input",
          {
            "aria-label": "Player name",
            value: S.playerName || "",
            onChange: Jl,
            style: th,
            placeholder: "Enter your name"
          }
        )
      ] }),
      /* @__PURE__ */ x.jsxs("article", { style: Vf, children: [
        /* @__PURE__ */ x.jsx("p", { style: qt, children: "Client Identity" }),
        /* @__PURE__ */ x.jsx("p", { style: on, children: El })
      ] }),
      /* @__PURE__ */ x.jsxs("article", { style: Vf, children: [
        /* @__PURE__ */ x.jsx("p", { style: qt, children: "Online Move Timer" }),
        /* @__PURE__ */ x.jsxs("p", { style: on, children: [
          S.onlineSetup.moveTimeLimitSeconds,
          "s"
        ] })
      ] }),
      /* @__PURE__ */ x.jsxs("article", { style: Vf, children: [
        /* @__PURE__ */ x.jsx("p", { style: qt, children: "Connection" }),
        /* @__PURE__ */ x.jsxs("p", { style: on, children: [
          /* @__PURE__ */ x.jsx(
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
    /* @__PURE__ */ x.jsxs("div", { style: { marginTop: "20px" }, children: [
      /* @__PURE__ */ x.jsx("p", { style: qt, children: "Selected Mode" }),
      /* @__PURE__ */ x.jsxs("div", { style: rn, children: [
        /* @__PURE__ */ x.jsx(
          "button",
          {
            type: "button",
            style: sa(S.mode === "online"),
            onClick: () => b({ type: "setMode", mode: "online" }),
            children: "Online"
          }
        ),
        /* @__PURE__ */ x.jsx(
          "button",
          {
            type: "button",
            style: sa(S.mode === "local"),
            onClick: () => b({ type: "setMode", mode: "local" }),
            children: "Local"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ x.jsxs("div", { style: { marginTop: "20px" }, children: [
      /* @__PURE__ */ x.jsx("p", { style: qt, children: "Online Actions" }),
      /* @__PURE__ */ x.jsx("div", { style: rn, children: /* @__PURE__ */ x.jsx(
        "button",
        {
          type: "button",
          style: sa(!1),
          onClick: ql,
          children: "Create Board"
        }
      ) })
    ] }),
    /* @__PURE__ */ x.jsxs("div", { style: { marginTop: "20px" }, children: [
      /* @__PURE__ */ x.jsx("p", { style: qt, children: "Active Tab" }),
      /* @__PURE__ */ x.jsx("p", { style: on, children: S.mainTab || "home" })
    ] }),
    S.currentBoardCode ? /* @__PURE__ */ x.jsxs("div", { style: { marginTop: "20px" }, children: [
      /* @__PURE__ */ x.jsx("p", { style: qt, children: "Current Board" }),
      /* @__PURE__ */ x.jsx("p", { style: on, children: S.currentBoardCode })
    ] }) : null,
    U.length > 0 ? /* @__PURE__ */ x.jsxs("div", { style: { marginTop: "20px" }, children: [
      /* @__PURE__ */ x.jsx("p", { style: qt, children: "Match" }),
      /* @__PURE__ */ x.jsx("div", { style: rn, children: U.map((G) => /* @__PURE__ */ x.jsx(
        "button",
        {
          type: "button",
          style: sa(!1),
          onClick: () => bh({
            seatId: G.seatId,
            currentBoardCode: S.currentBoardCode,
            clientId: S.clientId,
            playerName: S.playerName,
            connection: p.current,
            dispatch: b
          }),
          children: G.label
        },
        G.seatId
      )) })
    ] }) : null,
    E ? /* @__PURE__ */ x.jsxs("div", { style: { marginTop: "20px" }, children: [
      /* @__PURE__ */ x.jsx("p", { style: qt, children: "Seat" }),
      /* @__PURE__ */ x.jsx("div", { style: rn, children: /* @__PURE__ */ x.jsx(
        "button",
        {
          type: "button",
          style: sa(!1),
          onClick: () => Eh({
            ownSeat: o,
            connection: p.current,
            dispatch: b
          }),
          children: E.label
        }
      ) })
    ] }) : null,
    B.length > 0 ? /* @__PURE__ */ x.jsxs("div", { style: { marginTop: "20px" }, children: [
      /* @__PURE__ */ x.jsx("p", { style: qt, children: "Session" }),
      /* @__PURE__ */ x.jsx("div", { style: rn, children: B.map((G) => /* @__PURE__ */ x.jsx(
        "button",
        {
          type: "button",
          style: sa(!1),
          onClick: () => {
            if (G.type === "pause") {
              zh({
                ownSeat: o,
                connection: p.current,
                dispatch: b
              });
              return;
            }
            Oh({
              ownSeat: o,
              connection: p.current,
              dispatch: b
            });
          },
          children: G.label
        },
        G.type
      )) })
    ] }) : null,
    Z ? /* @__PURE__ */ x.jsx("div", { style: Bo, children: /* @__PURE__ */ x.jsx(
      H1,
      {
        snapshot: Z,
        ownSeat: o,
        replayIndex: null,
        flipVertical: !1,
        onMoveClick: (G) => {
          console.info("Board move click", G), Th({
            payload: G,
            ownSeat: o,
            connection: p.current,
            dispatch: b
          });
        }
      }
    ) }) : /* @__PURE__ */ x.jsx("div", { style: Bo, children: "Board island not mounted yet" }),
    S.toast ? /* @__PURE__ */ x.jsx("div", { style: { ...Bo, marginTop: "10px" }, children: S.toast }) : null,
    /* @__PURE__ */ x.jsx("div", { style: uh, children: "Elm remains the board and replay correctness surface. The server remains authoritative for seats, timers, pause/resume, winners, and online move validation." })
  ] }) });
}
const bv = document.getElementById("react-root");
if (bv) {
  const r = J1({
    clientId: Q1(),
    playerName: Z1(),
    onlineMoveTimer: K1()
  });
  D1.createRoot(bv).render(
    /* @__PURE__ */ x.jsx(O1.StrictMode, { children: /* @__PURE__ */ x.jsx(Nh, { initialState: r }) })
  );
}
