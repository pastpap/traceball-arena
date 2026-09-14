function T1(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var Mo = { exports: {} }, on = {};
var cy;
function E1() {
  if (cy) return on;
  cy = 1;
  var r = /* @__PURE__ */ Symbol.for("react.transitional.element"), h = /* @__PURE__ */ Symbol.for("react.fragment");
  function b(o, N, p) {
    var R = null;
    if (p !== void 0 && (R = "" + p), N.key !== void 0 && (R = "" + N.key), "key" in N) {
      p = {};
      for (var G in N)
        G !== "key" && (p[G] = N[G]);
    } else p = N;
    return N = p.ref, {
      $$typeof: r,
      type: o,
      key: R,
      ref: N !== void 0 ? N : null,
      props: p
    };
  }
  return on.Fragment = h, on.jsx = b, on.jsxs = b, on;
}
var oy;
function z1() {
  return oy || (oy = 1, Mo.exports = E1()), Mo.exports;
}
var U = z1(), Co = { exports: {} }, K = {};
var ry;
function O1() {
  if (ry) return K;
  ry = 1;
  var r = /* @__PURE__ */ Symbol.for("react.transitional.element"), h = /* @__PURE__ */ Symbol.for("react.portal"), b = /* @__PURE__ */ Symbol.for("react.fragment"), o = /* @__PURE__ */ Symbol.for("react.strict_mode"), N = /* @__PURE__ */ Symbol.for("react.profiler"), p = /* @__PURE__ */ Symbol.for("react.consumer"), R = /* @__PURE__ */ Symbol.for("react.context"), G = /* @__PURE__ */ Symbol.for("react.forward_ref"), X = /* @__PURE__ */ Symbol.for("react.suspense"), tl = /* @__PURE__ */ Symbol.for("react.memo"), H = /* @__PURE__ */ Symbol.for("react.lazy"), E = /* @__PURE__ */ Symbol.for("react.activity"), j = /* @__PURE__ */ Symbol.for("react.view_transition"), Sl = Symbol.iterator;
  function ql(d) {
    return d === null || typeof d != "object" ? null : (d = Sl && d[Sl] || d["@@iterator"], typeof d == "function" ? d : null);
  }
  var Gl = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, al = Object.assign, Pl = {};
  function ll(d, _, x) {
    this.props = d, this.context = _, this.refs = Pl, this.updater = x || Gl;
  }
  ll.prototype.isReactComponent = {}, ll.prototype.setState = function(d, _) {
    if (typeof d != "object" && typeof d != "function" && d != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, d, _, "setState");
  }, ll.prototype.forceUpdate = function(d) {
    this.updater.enqueueForceUpdate(this, d, "forceUpdate");
  };
  function Rl() {
  }
  Rl.prototype = ll.prototype;
  function Et(d, _, x) {
    this.props = d, this.context = _, this.refs = Pl, this.updater = x || Gl;
  }
  var zt = Et.prototype = new Rl();
  zt.constructor = Et, al(zt, ll.prototype), zt.isPureReactComponent = !0;
  var it = Array.isArray;
  function $() {
  }
  var fl = { H: null, A: null, T: null, S: null }, Qt = Object.prototype.hasOwnProperty;
  function Ot(d, _, x) {
    var q = x.ref;
    return {
      $$typeof: r,
      type: d,
      key: _,
      ref: q !== void 0 ? q : null,
      props: x
    };
  }
  function _t(d, _) {
    return Ot(d.type, _, d.props);
  }
  function ft(d) {
    return typeof d == "object" && d !== null && d.$$typeof === r;
  }
  function bu(d) {
    var _ = { "=": "=0", ":": "=2" };
    return "$" + d.replace(/[=:]/g, function(x) {
      return _[x];
    });
  }
  var Iu = /\/+/g;
  function Hl(d, _) {
    return typeof d == "object" && d !== null && d.key != null ? bu("" + d.key) : _.toString(36);
  }
  function M(d) {
    switch (d.status) {
      case "fulfilled":
        return d.value;
      case "rejected":
        throw d.reason;
      default:
        switch (typeof d.status == "string" ? d.then($, $) : (d.status = "pending", d.then(
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
  function Z(d, _, x, q, el) {
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
            case r:
            case h:
              cl = !0;
              break;
            case H:
              return cl = d._init, Z(
                cl(d._payload),
                _,
                x,
                q,
                el
              );
          }
      }
    if (cl)
      return el = el(d), cl = q === "" ? "." + Hl(d, 0) : q, it(el) ? (x = "", cl != null && (x = cl.replace(Iu, "$&/") + "/"), Z(el, _, x, "", function(uu) {
        return uu;
      })) : el != null && (ft(el) && (el = _t(
        el,
        x + (el.key == null || d && d.key === el.key ? "" : ("" + el.key).replace(
          Iu,
          "$&/"
        ) + "/") + cl
      )), _.push(el)), 1;
    cl = 0;
    var B = q === "" ? "." : q + ":";
    if (it(d))
      for (var L = 0; L < d.length; L++)
        q = d[L], nl = B + Hl(q, L), cl += Z(
          q,
          _,
          x,
          nl,
          el
        );
    else if (L = ql(d), typeof L == "function")
      for (d = L.call(d), L = 0; !(q = d.next()).done; )
        q = q.value, nl = B + Hl(q, L++), cl += Z(
          q,
          _,
          x,
          nl,
          el
        );
    else if (nl === "object") {
      if (typeof d.then == "function")
        return Z(
          M(d),
          _,
          x,
          q,
          el
        );
      throw _ = String(d), Error(
        "Objects are not valid as a React child (found: " + (_ === "[object Object]" ? "object with keys {" + Object.keys(d).join(", ") + "}" : _) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return cl;
  }
  function V(d, _, x) {
    if (d == null) return d;
    var q = [], el = 0;
    return Z(d, q, "", "", function(nl) {
      return _.call(x, nl, el++);
    }), q;
  }
  function hl(d) {
    if (d._status === -1) {
      var _ = d._result, x = _();
      x.then(
        function(q) {
          (d._status === 0 || d._status === -1) && (d._status = 1, d._result = q, x.status === void 0 && (x.status = "fulfilled", x.value = q));
        },
        function(q) {
          (d._status === 0 || d._status === -1) && (d._status = 2, d._result = q, x.status === void 0 && (x.status = "rejected", x.reason = q));
        }
      ), d._status === -1 && (d._status = 0, d._result = x);
    }
    if (d._status === 1) return d._result.default;
    throw d._result;
  }
  var rl = typeof reportError == "function" ? reportError : function(d) {
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
  function Bt(d) {
    var _ = fl.T, x = {};
    x.types = _ !== null ? _.types : null, fl.T = x;
    try {
      var q = d(), el = fl.S;
      el !== null && el(x, q), typeof q == "object" && q !== null && typeof q.then == "function" && q.then($, rl);
    } catch (nl) {
      rl(nl);
    } finally {
      _ !== null && x.types !== null && (_.types = x.types), fl.T = _;
    }
  }
  function tu(d) {
    var _ = fl.T;
    if (_ !== null) {
      var x = _.types;
      x === null ? _.types = [d] : x.indexOf(d) === -1 && x.push(d);
    } else Bt(tu.bind(null, d));
  }
  var ku = {
    map: V,
    forEach: function(d, _, x) {
      V(
        d,
        function() {
          _.apply(this, arguments);
        },
        x
      );
    },
    count: function(d) {
      var _ = 0;
      return V(d, function() {
        _++;
      }), _;
    },
    toArray: function(d) {
      return V(d, function(_) {
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
  return K.Activity = E, K.Children = ku, K.Component = ll, K.Fragment = b, K.Profiler = N, K.PureComponent = Et, K.StrictMode = o, K.Suspense = X, K.ViewTransition = j, K.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = fl, K.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(d) {
      return fl.H.useMemoCache(d);
    }
  }, K.addTransitionType = tu, K.cache = function(d) {
    return function() {
      return d.apply(null, arguments);
    };
  }, K.cacheSignal = function() {
    return null;
  }, K.cloneElement = function(d, _, x) {
    if (d == null)
      throw Error(
        "The argument must be a React element, but you passed " + d + "."
      );
    var q = al({}, d.props), el = d.key;
    if (_ != null)
      for (nl in _.key !== void 0 && (el = "" + _.key), _)
        !Qt.call(_, nl) || nl === "key" || nl === "__self" || nl === "__source" || nl === "ref" && _.ref === void 0 || (q[nl] = _[nl]);
    var nl = arguments.length - 2;
    if (nl === 1) q.children = x;
    else if (1 < nl) {
      for (var cl = Array(nl), B = 0; B < nl; B++)
        cl[B] = arguments[B + 2];
      q.children = cl;
    }
    return Ot(d.type, el, q);
  }, K.createContext = function(d) {
    return d = {
      $$typeof: R,
      _currentValue: d,
      _currentValue2: d,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, d.Provider = d, d.Consumer = {
      $$typeof: p,
      _context: d
    }, d;
  }, K.createElement = function(d, _, x) {
    var q, el = {}, nl = null;
    if (_ != null)
      for (q in _.key !== void 0 && (nl = "" + _.key), _)
        Qt.call(_, q) && q !== "key" && q !== "__self" && q !== "__source" && (el[q] = _[q]);
    var cl = arguments.length - 2;
    if (cl === 1) el.children = x;
    else if (1 < cl) {
      for (var B = Array(cl), L = 0; L < cl; L++)
        B[L] = arguments[L + 2];
      el.children = B;
    }
    if (d && d.defaultProps)
      for (q in cl = d.defaultProps, cl)
        el[q] === void 0 && (el[q] = cl[q]);
    return Ot(d, nl, el);
  }, K.createRef = function() {
    return { current: null };
  }, K.forwardRef = function(d) {
    return { $$typeof: G, render: d };
  }, K.isValidElement = ft, K.lazy = function(d) {
    return {
      $$typeof: H,
      _payload: { _status: -1, _result: d },
      _init: hl
    };
  }, K.memo = function(d, _) {
    return {
      $$typeof: tl,
      type: d,
      compare: _ === void 0 ? null : _
    };
  }, K.startTransition = Bt, K.unstable_useCacheRefresh = function() {
    return fl.H.useCacheRefresh();
  }, K.use = function(d) {
    return fl.H.use(d);
  }, K.useActionState = function(d, _, x) {
    return fl.H.useActionState(d, _, x);
  }, K.useCallback = function(d, _) {
    return fl.H.useCallback(d, _);
  }, K.useContext = function(d) {
    return fl.H.useContext(d);
  }, K.useDebugValue = function() {
  }, K.useDeferredValue = function(d, _) {
    return fl.H.useDeferredValue(d, _);
  }, K.useEffect = function(d, _) {
    return fl.H.useEffect(d, _);
  }, K.useEffectEvent = function(d) {
    return fl.H.useEffectEvent(d);
  }, K.useId = function() {
    return fl.H.useId();
  }, K.useImperativeHandle = function(d, _, x) {
    return fl.H.useImperativeHandle(d, _, x);
  }, K.useInsertionEffect = function(d, _) {
    return fl.H.useInsertionEffect(d, _);
  }, K.useLayoutEffect = function(d, _) {
    return fl.H.useLayoutEffect(d, _);
  }, K.useMemo = function(d, _) {
    return fl.H.useMemo(d, _);
  }, K.useOptimistic = function(d, _) {
    return fl.H.useOptimistic(d, _);
  }, K.useReducer = function(d, _, x) {
    return fl.H.useReducer(d, _, x);
  }, K.useRef = function(d) {
    return fl.H.useRef(d);
  }, K.useState = function(d) {
    return fl.H.useState(d);
  }, K.useSyncExternalStore = function(d, _, x) {
    return fl.H.useSyncExternalStore(
      d,
      _,
      x
    );
  }, K.useTransition = function() {
    return fl.H.useTransition();
  }, K.version = "19.3.0", K;
}
var sy;
function Yo() {
  return sy || (sy = 1, Co.exports = O1()), Co.exports;
}
var Tt = Yo();
const _1 = /* @__PURE__ */ T1(Tt);
var Do = { exports: {} }, rn = {}, Uo = { exports: {} }, Ro = {};
var dy;
function N1() {
  return dy || (dy = 1, (function(r) {
    function h(M, Z) {
      var V = M.length;
      M.push(Z);
      l: for (; 0 < V; ) {
        var hl = V - 1 >>> 1, rl = M[hl];
        if (0 < N(rl, Z))
          M[hl] = Z, M[V] = rl, V = hl;
        else break l;
      }
    }
    function b(M) {
      return M.length === 0 ? null : M[0];
    }
    function o(M) {
      if (M.length === 0) return null;
      var Z = M[0], V = M.pop();
      if (V !== Z) {
        M[0] = V;
        l: for (var hl = 0, rl = M.length, Bt = rl >>> 1; hl < Bt; ) {
          var tu = 2 * (hl + 1) - 1, ku = M[tu], d = tu + 1, _ = M[d];
          if (0 > N(ku, V))
            d < rl && 0 > N(_, ku) ? (M[hl] = _, M[d] = V, hl = d) : (M[hl] = ku, M[tu] = V, hl = tu);
          else if (d < rl && 0 > N(_, V))
            M[hl] = _, M[d] = V, hl = d;
          else break l;
        }
      }
      return Z;
    }
    function N(M, Z) {
      var V = M.sortIndex - Z.sortIndex;
      return V !== 0 ? V : M.id - Z.id;
    }
    if (r.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var p = performance;
      r.unstable_now = function() {
        return p.now();
      };
    } else {
      var R = Date, G = R.now();
      r.unstable_now = function() {
        return R.now() - G;
      };
    }
    var X = [], tl = [], H = 1, E = null, j = 3, Sl = !1, ql = !1, Gl = !1, al = !1, Pl = typeof setTimeout == "function" ? setTimeout : null, ll = typeof clearTimeout == "function" ? clearTimeout : null, Rl = typeof setImmediate < "u" ? setImmediate : null;
    function Et(M) {
      for (var Z = b(tl); Z !== null; ) {
        if (Z.callback === null) o(tl);
        else if (Z.startTime <= M)
          o(tl), Z.sortIndex = Z.expirationTime, h(X, Z);
        else break;
        Z = b(tl);
      }
    }
    function zt(M) {
      if (Gl = !1, Et(M), !ql)
        if (b(X) !== null)
          ql = !0, it || (it = !0, ft());
        else {
          var Z = b(tl);
          Z !== null && Hl(zt, Z.startTime - M);
        }
    }
    var it = !1, $ = -1, fl = 5, Qt = -1;
    function Ot() {
      return al ? !0 : !(r.unstable_now() - Qt < fl);
    }
    function _t() {
      if (al = !1, it) {
        var M = r.unstable_now();
        Qt = M;
        var Z = !0;
        try {
          l: {
            ql = !1, Gl && (Gl = !1, ll($), $ = -1), Sl = !0;
            var V = j;
            try {
              t: {
                for (Et(M), E = b(X); E !== null && !(E.expirationTime > M && Ot()); ) {
                  var hl = E.callback;
                  if (typeof hl == "function") {
                    E.callback = null, j = E.priorityLevel;
                    var rl = hl(
                      E.expirationTime <= M
                    );
                    if (M = r.unstable_now(), typeof rl == "function") {
                      E.callback = rl, Et(M), Z = !0;
                      break t;
                    }
                    E === b(X) && o(X), Et(M);
                  } else o(X);
                  E = b(X);
                }
                if (E !== null) Z = !0;
                else {
                  var Bt = b(tl);
                  Bt !== null && Hl(
                    zt,
                    Bt.startTime - M
                  ), Z = !1;
                }
              }
              break l;
            } finally {
              E = null, j = V, Sl = !1;
            }
            Z = void 0;
          }
        } finally {
          Z ? ft() : it = !1;
        }
      }
    }
    var ft;
    if (typeof Rl == "function")
      ft = function() {
        Rl(_t);
      };
    else if (typeof MessageChannel < "u") {
      var bu = new MessageChannel(), Iu = bu.port2;
      bu.port1.onmessage = _t, ft = function() {
        Iu.postMessage(null);
      };
    } else
      ft = function() {
        Pl(_t, 0);
      };
    function Hl(M, Z) {
      $ = Pl(function() {
        M(r.unstable_now());
      }, Z);
    }
    r.unstable_IdlePriority = 5, r.unstable_ImmediatePriority = 1, r.unstable_LowPriority = 4, r.unstable_NormalPriority = 3, r.unstable_Profiling = null, r.unstable_UserBlockingPriority = 2, r.unstable_cancelCallback = function(M) {
      M.callback = null;
    }, r.unstable_forceFrameRate = function(M) {
      0 > M || 125 < M ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : fl = 0 < M ? Math.floor(1e3 / M) : 5;
    }, r.unstable_getCurrentPriorityLevel = function() {
      return j;
    }, r.unstable_next = function(M) {
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
        return M();
      } finally {
        j = V;
      }
    }, r.unstable_requestPaint = function() {
      al = !0;
    }, r.unstable_runWithPriority = function(M, Z) {
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
      var V = j;
      j = M;
      try {
        return Z();
      } finally {
        j = V;
      }
    }, r.unstable_scheduleCallback = function(M, Z, V) {
      var hl = r.unstable_now();
      switch (typeof V == "object" && V !== null ? (V = V.delay, V = typeof V == "number" && 0 < V ? hl + V : hl) : V = hl, M) {
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
      return rl = V + rl, M = {
        id: H++,
        callback: Z,
        priorityLevel: M,
        startTime: V,
        expirationTime: rl,
        sortIndex: -1
      }, V > hl ? (M.sortIndex = V, h(tl, M), b(X) === null && M === b(tl) && (Gl ? (ll($), $ = -1) : Gl = !0, Hl(zt, V - hl))) : (M.sortIndex = rl, h(X, M), ql || Sl || (ql = !0, it || (it = !0, ft()))), M;
    }, r.unstable_shouldYield = Ot, r.unstable_wrapCallback = function(M) {
      var Z = j;
      return function() {
        var V = j;
        j = Z;
        try {
          return M.apply(this, arguments);
        } finally {
          j = V;
        }
      };
    };
  })(Ro)), Ro;
}
var yy;
function A1() {
  return yy || (yy = 1, Uo.exports = N1()), Uo.exports;
}
var Ho = { exports: {} }, wl = {};
var vy;
function p1() {
  if (vy) return wl;
  vy = 1;
  var r = Yo();
  function h(H) {
    var E = "https://react.dev/errors/" + H;
    if (1 < arguments.length) {
      E += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var j = 2; j < arguments.length; j++)
        E += "&args[]=" + encodeURIComponent(arguments[j]);
    }
    return "Minified React error #" + H + "; visit " + E + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function b() {
  }
  var o = {
    d: {
      f: b,
      r: function() {
        throw Error(h(522));
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
  }, N = /* @__PURE__ */ Symbol.for("react.portal"), p = /* @__PURE__ */ Symbol.for("react.recoverable"), R = /* @__PURE__ */ Symbol.for("react.optimistic_key");
  function G(H, E, j) {
    var Sl = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: N,
      key: Sl == null ? null : Sl === R ? R : "" + Sl,
      children: H,
      containerInfo: E,
      implementation: j
    };
  }
  var X = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function tl(H, E) {
    if (H === "font") return "";
    if (typeof E == "string")
      return E === "use-credentials" ? E : "";
  }
  return wl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, wl.browser = function(H) {
    return { $$typeof: p, _reason: H };
  }, wl.createPortal = function(H, E) {
    var j = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!E || E.nodeType !== 1 && E.nodeType !== 9 && E.nodeType !== 11)
      throw Error(h(299));
    return G(H, E, null, j);
  }, wl.flushSync = function(H) {
    var E = X.T, j = o.p;
    try {
      if (X.T = null, o.p = 2, H) return H();
    } finally {
      X.T = E, o.p = j, o.d.f();
    }
  }, wl.preconnect = function(H, E) {
    typeof H == "string" && (E ? (E = E.crossOrigin, E = typeof E == "string" ? E === "use-credentials" ? E : "" : void 0) : E = null, o.d.C(H, E));
  }, wl.prefetchDNS = function(H) {
    typeof H == "string" && o.d.D(H);
  }, wl.preinit = function(H, E) {
    if (typeof H == "string" && E && typeof E.as == "string") {
      var j = E.as, Sl = tl(j, E.crossOrigin), ql = typeof E.integrity == "string" ? E.integrity : void 0, Gl = typeof E.fetchPriority == "string" ? E.fetchPriority : void 0;
      j === "style" ? o.d.S(
        H,
        typeof E.precedence == "string" ? E.precedence : void 0,
        {
          crossOrigin: Sl,
          integrity: ql,
          fetchPriority: Gl
        }
      ) : j === "script" && o.d.X(H, {
        crossOrigin: Sl,
        integrity: ql,
        fetchPriority: Gl,
        nonce: typeof E.nonce == "string" ? E.nonce : void 0
      });
    }
  }, wl.preinitModule = function(H, E) {
    if (typeof H == "string")
      if (typeof E == "object" && E !== null) {
        if (E.as == null || E.as === "script") {
          var j = tl(
            E.as,
            E.crossOrigin
          );
          o.d.M(H, {
            crossOrigin: j,
            integrity: typeof E.integrity == "string" ? E.integrity : void 0,
            nonce: typeof E.nonce == "string" ? E.nonce : void 0,
            fetchPriority: typeof E.fetchPriority == "string" ? E.fetchPriority : void 0
          });
        }
      } else E == null && o.d.M(H);
  }, wl.preload = function(H, E) {
    if (typeof H == "string" && typeof E == "object" && E !== null && typeof E.as == "string") {
      var j = E.as, Sl = tl(j, E.crossOrigin);
      o.d.L(H, j, {
        crossOrigin: Sl,
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
  }, wl.preloadModule = function(H, E) {
    if (typeof H == "string")
      if (E) {
        var j = tl(E.as, E.crossOrigin);
        o.d.m(H, {
          as: typeof E.as == "string" && E.as !== "script" ? E.as : void 0,
          crossOrigin: j,
          integrity: typeof E.integrity == "string" ? E.integrity : void 0,
          nonce: typeof E.nonce == "string" ? E.nonce : void 0,
          fetchPriority: typeof E.fetchPriority == "string" ? E.fetchPriority : void 0
        });
      } else o.d.m(H);
  }, wl.requestFormReset = function(H) {
    o.d.r(H);
  }, wl.unstable_batchedUpdates = function(H, E) {
    return H(E);
  }, wl.useFormState = function(H, E, j) {
    return X.H.useFormState(H, E, j);
  }, wl.useFormStatus = function() {
    return X.H.useHostTransitionStatus();
  }, wl.version = "19.3.0", wl;
}
var my;
function M1() {
  if (my) return Ho.exports;
  my = 1;
  function r() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (h) {
        console.error(h);
      }
  }
  return r(), Ho.exports = p1(), Ho.exports;
}
var hy;
function C1() {
  if (hy) return rn;
  hy = 1;
  var r = A1(), h = Yo(), b = M1();
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
  function R(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function G(l) {
    if (l.tag === 31) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function X(l) {
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
          if (n === u) return X(a), l;
          if (n === e) return X(a), t;
          n = n.sibling;
        }
        throw Error(o(188));
      }
      if (u.return !== e.return) u = a, e = n;
      else {
        for (var i = !1, f = a.child; f; ) {
          if (f === u) {
            i = !0, u = a, e = n;
            break;
          }
          if (f === e) {
            i = !0, e = a, u = n;
            break;
          }
          f = f.sibling;
        }
        if (!i) {
          for (f = n.child; f; ) {
            if (f === u) {
              i = !0, u = n, e = a;
              break;
            }
            if (f === e) {
              i = !0, e = n, u = a;
              break;
            }
            f = f.sibling;
          }
          if (!i) throw Error(o(189));
        }
      }
      if (u.alternate !== e) throw Error(o(190));
    }
    if (u.tag !== 3) throw Error(o(188));
    return u.stateNode.current === u ? l : t;
  }
  function H(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null; ) {
      if (t = H(l), t !== null) return t;
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
  function j(l) {
    for (l = l.return; l !== null; ) {
      if (l.tag === 3 || l.tag === 5 || l.tag === 27) return l;
      l = l.return;
    }
    return null;
  }
  function Sl(l) {
    var t = !1;
    for (l = l.return; l !== null && (l.tag === 4 && (t = !0), !(l.tag === 3 || l.tag === 5 || l.tag === 27)); )
      l = l.return;
    return t;
  }
  function ql(l) {
    var t = [null, null], u = j(l);
    return u === null || Gl(
      t,
      l,
      u.child,
      { foundSelf: !1 }
    ), t;
  }
  function Gl(l, t, u, e) {
    for (; u !== null; ) {
      if (u === t) e.foundSelf = !0;
      else if (u.tag === 5 || u.tag === 27 || u.tag === 6) {
        if (e.foundSelf) return l[1] = u, !0;
        l[0] = u;
      } else if ((u.tag !== 22 || u.memoizedState === null) && Gl(
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
  function al(l) {
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
  var Pl = null, ll = null;
  function Rl(l, t, u) {
    return l === u ? !0 : l === t ? (Pl = l, !0) : !1;
  }
  function Et(l, t, u) {
    return l === u ? (ll = l, !1) : l === t ? (ll !== null && (Pl = l), !0) : !1;
  }
  function zt(l) {
    if (l === null) return null;
    do
      l = l === null ? null : l.return;
    while (l && l.tag !== 5 && l.tag !== 27 && l.tag !== 3);
    return l || null;
  }
  function it(l, t, u) {
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
  var $ = Object.assign, fl = /* @__PURE__ */ Symbol.for("react.element"), Qt = /* @__PURE__ */ Symbol.for("react.transitional.element"), Ot = /* @__PURE__ */ Symbol.for("react.portal"), _t = /* @__PURE__ */ Symbol.for("react.fragment"), ft = /* @__PURE__ */ Symbol.for("react.strict_mode"), bu = /* @__PURE__ */ Symbol.for("react.profiler"), Iu = /* @__PURE__ */ Symbol.for("react.consumer"), Hl = /* @__PURE__ */ Symbol.for("react.context"), M = /* @__PURE__ */ Symbol.for("react.forward_ref"), Z = /* @__PURE__ */ Symbol.for("react.suspense"), V = /* @__PURE__ */ Symbol.for("react.suspense_list"), hl = /* @__PURE__ */ Symbol.for("react.memo"), rl = /* @__PURE__ */ Symbol.for("react.lazy"), Bt = /* @__PURE__ */ Symbol.for("react.activity"), tu = /* @__PURE__ */ Symbol.for("react.legacy_hidden"), ku = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), d = /* @__PURE__ */ Symbol.for("react.view_transition"), _ = /* @__PURE__ */ Symbol.for("react.recoverable"), x = Symbol.iterator;
  function q(l) {
    return l === null || typeof l != "object" ? null : (l = x && l[x] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var el = /* @__PURE__ */ Symbol.for("react.client.reference");
  function nl(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === el ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case _t:
        return "Fragment";
      case bu:
        return "Profiler";
      case ft:
        return "StrictMode";
      case Z:
        return "Suspense";
      case V:
        return "SuspenseList";
      case Bt:
        return "Activity";
      case d:
        return "ViewTransition";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case Ot:
          return "Portal";
        case Hl:
          return l.displayName || "Context";
        case Iu:
          return (l._context.displayName || "Context") + ".Consumer";
        case M:
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
  var cl = Array.isArray, B = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, L = b.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, uu = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, Ki = [], Oe = -1;
  function Zt(l) {
    return { current: l };
  }
  function Xl(l) {
    0 > Oe || (l.current = Ki[Oe], Ki[Oe] = null, Oe--);
  }
  function bl(l, t) {
    Oe++, Ki[Oe] = l.current, l.current = t;
  }
  var Vt = Zt(null), va = Zt(null), Tu = Zt(null), dn = Zt(null);
  function yn(l, t) {
    switch (bl(Tu, t), bl(va, l), bl(Vt, null), t.nodeType) {
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
    Xl(Vt), bl(Vt, l);
  }
  function _e() {
    Xl(Vt), Xl(va), Xl(Tu);
  }
  function Ji(l) {
    var t = l.memoizedState;
    t !== null && (sa._currentValue = t.memoizedState, bl(dn, l)), t = Vt.current;
    var u = Sd(t, l.type);
    t !== u && (bl(va, l), bl(Vt, u));
  }
  function vn(l) {
    va.current === l && (Xl(Vt), Xl(va)), dn.current === l && (Xl(dn), sa._currentValue = uu);
  }
  var wi, qo;
  function Eu(l) {
    if (wi === void 0)
      try {
        throw Error();
      } catch (u) {
        var t = u.stack.trim().match(/\n( *(at )?)/);
        wi = t && t[1] || "", qo = -1 < u.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < u.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + wi + l + qo;
  }
  var Wi = !1;
  function $i(l, t) {
    if (!l || Wi) return "";
    Wi = !0;
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
                  var y = A;
                }
                Reflect.construct(l, [], O);
              } else {
                try {
                  O.call();
                } catch (A) {
                  y = A;
                }
                O = !1;
                try {
                  var S = Object.getOwnPropertyDescriptor(
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
                  O && (S !== void 0 ? Object.defineProperty(l.prototype, "props", S) : delete l.prototype.props);
                }
              }
            } else {
              try {
                throw Error();
              } catch (A) {
                y = A;
              }
              (O = l()) && typeof O.catch == "function" && O.catch(function() {
              });
            }
          } catch (A) {
            if (A && y && typeof A.stack == "string")
              return [A.stack, y.stack];
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
      var n = e.DetermineComponentFrameRoot(), i = n[0], f = n[1];
      if (i && f) {
        var c = i.split(`
`), m = f.split(`
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
      Wi = !1, Error.prepareStackTrace = u;
    }
    return (u = l ? l.displayName || l.name : "") ? Eu(u) : "";
  }
  function _y(l, t) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return Eu(l.type);
      case 16:
        return Eu("Lazy");
      case 13:
        return l.child !== t && t !== null ? Eu("Suspense Fallback") : Eu("Suspense");
      case 19:
        return Eu("SuspenseList");
      case 0:
      case 15:
        return $i(l.type, !1);
      case 11:
        return $i(l.type.render, !1);
      case 1:
        return $i(l.type, !0);
      case 31:
        return Eu("Activity");
      case 30:
        return Eu("ViewTransition");
      default:
        return "";
    }
  }
  function Go(l) {
    try {
      var t = "", u = null;
      do
        t += _y(l, u), u = l, l = l.return;
      while (l);
      return t;
    } catch (e) {
      return `
Error generating stack: ` + e.message + `
` + e.stack;
    }
  }
  var Fi = Object.prototype.hasOwnProperty, Ii = r.unstable_scheduleCallback, ki = r.unstable_cancelCallback, Ny = r.unstable_shouldYield, Ay = r.unstable_requestPaint, ct = r.unstable_now, py = r.unstable_getCurrentPriorityLevel, Xo = r.unstable_ImmediatePriority, Qo = r.unstable_UserBlockingPriority, mn = r.unstable_NormalPriority, My = r.unstable_LowPriority, Zo = r.unstable_IdlePriority, Cy = r.log, Dy = r.unstable_setDisableYieldValue, ma = null, ot = null;
  function zu(l) {
    if (typeof Cy == "function" && Dy(l), ot && typeof ot.setStrictMode == "function")
      try {
        ot.setStrictMode(ma, l);
      } catch {
      }
  }
  var rt = Math.clz32 ? Math.clz32 : Hy, Uy = Math.log, Ry = Math.LN2;
  function Hy(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (Uy(l) / Ry | 0) | 0;
  }
  var hn = 256, gn = 262144, Sn = 4194304;
  function Pu(l) {
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
  function bn(l, t, u) {
    var e = l.pendingLanes;
    if (e === 0) return 0;
    var a = 0, n = l.suspendedLanes, i = l.pingedLanes;
    l = l.warmLanes;
    var f = e & 134217727;
    return f !== 0 ? (e = f & ~n, e !== 0 ? a = Pu(e) : (i &= f, i !== 0 ? a = Pu(i) : u || (u = f & ~l, u !== 0 && (a = Pu(u))))) : (f = e & ~n, f !== 0 ? a = Pu(f) : i !== 0 ? a = Pu(i) : u || (u = e & ~l, u !== 0 && (a = Pu(u)))), a === 0 ? 0 : t !== 0 && t !== a && (t & n) === 0 && (n = a & -a, u = t & -t, n >= u || n === 32 && (u & 4194048) !== 0) ? t : a;
  }
  function ha(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function Vo(l, t) {
    (t & 8) !== 0 && (t |= t & 32);
    var u = l.entangledLanes;
    if (u !== 0)
      for (l = l.entanglements, u &= t; 0 < u; ) {
        var e = 31 - rt(u), a = 1 << e;
        t |= l[e], u &= ~a;
      }
    return t;
  }
  function By(l, t) {
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
  function Pi(l) {
    for (var t = [], u = 0; 31 > u; u++) t.push(l);
    return t;
  }
  function ga(l, t) {
    l.pendingLanes |= t, t !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function jy(l, t, u, e, a, n) {
    var i = l.pendingLanes;
    l.pendingLanes = u, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= u, l.entangledLanes &= u, l.errorRecoveryDisabledLanes &= u, l.shellSuspendCounter = 0;
    var f = l.entanglements, c = l.expirationTimes, m = l.hiddenUpdates;
    for (u = i & ~u; 0 < u; ) {
      var T = 31 - rt(u), O = 1 << T;
      f[T] = 0, c[T] = -1;
      var y = m[T];
      if (y !== null)
        for (m[T] = null, T = 0; T < y.length; T++) {
          var S = y[T];
          S !== null && (S.lane &= -536870913);
        }
      u &= ~O;
    }
    e !== 0 && Ko(l, e, 0), n !== 0 && a === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(i & ~t));
  }
  function Ko(l, t, u) {
    l.pendingLanes |= t, l.suspendedLanes &= ~t;
    var e = 31 - rt(t);
    l.entangledLanes |= t, l.entanglements[e] = l.entanglements[e] | 1073741824 | u & 261930;
  }
  function Jo(l, t) {
    var u = l.entangledLanes |= t;
    for (l = l.entanglements; u; ) {
      var e = 31 - rt(u), a = 1 << e;
      a & t | l[e] & t && (l[e] |= t), u &= ~a;
    }
  }
  function wo(l, t) {
    var u = t & -t;
    return u = (u & 42) !== 0 ? 1 : lf(u), (u & (l.suspendedLanes | t)) !== 0 ? 0 : u;
  }
  function lf(l) {
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
  function tf(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Wo() {
    var l = L.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : ty(l.type));
  }
  function $o(l, t) {
    var u = L.p;
    try {
      return L.p = l, t();
    } finally {
      L.p = u;
    }
  }
  var eu = Math.random().toString(36).slice(2), Ql = "__reactFiber$" + eu, lt = "__reactProps$" + eu, Ne = "__reactContainer$" + eu, Fo = "__reactEvents$" + eu, Yy = "__reactListeners$" + eu, xy = "__reactHandles$" + eu, Io = "__reactResources$" + eu, Sa = "__reactMarker$" + eu, Tn = "__reactLoad$" + eu;
  function En(l) {
    delete l[Ql], delete l[lt], delete l[Yy], delete l[xy];
  }
  function le(l) {
    var t;
    if (t = l[Ql]) return t;
    for (var u = l.parentNode; u; ) {
      if (t = u[Ne] || u[Ql]) {
        if (u = t.alternate, t.child !== null || u !== null && u.child !== null)
          for (l = jd(l); l !== null; ) {
            if (u = l[Ql]) return u;
            l = jd(l);
          }
        return t;
      }
      l = u, u = l.parentNode;
    }
    return null;
  }
  function Ae(l) {
    if (l = l[Ql] || l[Ne]) {
      var t = l.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return l;
    }
    return null;
  }
  function ba(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(o(33));
  }
  function pe(l) {
    var t = l[Io];
    return t || (t = l[Io] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function Bl(l) {
    l[Sa] = !0;
  }
  function ko(l) {
    l[Tn] = void 0;
  }
  var Po = /* @__PURE__ */ new Set(), lr = {};
  function te(l, t) {
    Me(l, t), Me(l + "Capture", t);
  }
  function Me(l, t) {
    for (lr[l] = t, l = 0; l < t.length; l++)
      Po.add(t[l]);
  }
  var qy = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), tr = {}, ur = {};
  function Gy(l) {
    return Fi.call(ur, l) ? !0 : Fi.call(tr, l) ? !1 : qy.test(l) ? ur[l] = !0 : (tr[l] = !0, !1);
  }
  var il = !1;
  function er() {
    var l = il;
    return il = !1, l;
  }
  function zn(l, t, u) {
    if (Gy(t))
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
  function st(l) {
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
  function Xy(l, t, u) {
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
        set: function(i) {
          u = "" + i, n.call(this, i);
        }
      }), Object.defineProperty(l, t, {
        enumerable: e.enumerable
      }), {
        getValue: function() {
          return u;
        },
        setValue: function(i) {
          u = "" + i;
        },
        stopTracking: function() {
          l._valueTracker = null, delete l[t];
        }
      };
    }
  }
  function uf(l) {
    if (!l._valueTracker) {
      var t = ar(l) ? "checked" : "value";
      l._valueTracker = Xy(
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
  var Qy = /[\n"\\]/g;
  function Nt(l) {
    return l.replace(
      Qy,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function ef(l, t, u, e, a, n, i, f) {
    l.name = "", i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? l.type = i : l.removeAttribute("type"), t != null ? i === "number" ? (t === 0 && l.value === "" || l.value != t) && (l.value = "" + st(t)) : l.value !== "" + st(t) && (l.value = "" + st(t)) : i !== "submit" && i !== "reset" || l.removeAttribute("value"), t != null ? i === "number" && l.value == t ? af(l, st(l.value)) : af(l, st(t)) : u != null ? af(l, st(u)) : e != null && l.removeAttribute("value"), a == null && n != null && (l.defaultChecked = !!n), a != null && (l.checked = a && typeof a != "function" && typeof a != "symbol"), f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? l.name = "" + st(f) : l.removeAttribute("name");
  }
  function ir(l, t, u, e, a, n, i, f) {
    if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (l.type = n), t != null || u != null) {
      if (!(n !== "submit" && n !== "reset" || t != null)) {
        uf(l);
        return;
      }
      u = u != null ? "" + st(u) : "", t = t != null ? "" + st(t) : u, f || t === l.value || (l.value = t), l.defaultValue = t;
    }
    e = e ?? a, e = typeof e != "function" && typeof e != "symbol" && !!e, l.checked = f ? l.checked : !!e, l.defaultChecked = !!e, i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (l.name = i), uf(l);
  }
  function af(l, t) {
    l.defaultValue !== "" + t && (l.defaultValue = "" + t);
  }
  function Ce(l, t, u, e) {
    if (l = l.options, t) {
      t = {};
      for (var a = 0; a < u.length; a++)
        t["$" + u[a]] = !0;
      for (u = 0; u < l.length; u++)
        a = t.hasOwnProperty("$" + l[u].value), l[u].selected !== a && (l[u].selected = a), a && e && (l[u].defaultSelected = !0);
    } else {
      for (u = "" + st(u), t = null, a = 0; a < l.length; a++) {
        if (l[a].value === u) {
          l[a].selected = !0, e && (l[a].defaultSelected = !0);
          return;
        }
        t !== null || l[a].disabled || (t = l[a]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function fr(l, t, u) {
    if (t != null && (t = "" + st(t), t !== l.value && (l.value = t), u == null)) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = u != null ? "" + st(u) : "";
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
    u = st(t), l.defaultValue = u, e = l.textContent, e === u && e !== "" && e !== null && (l.value = e), uf(l);
  }
  function De(l, t) {
    if (t) {
      var u = l.firstChild;
      if (u && u === l.lastChild && u.nodeType === 3) {
        u.nodeValue = t;
        return;
      }
    }
    l.textContent = t;
  }
  var Zy = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function or(l, t, u) {
    var e = t.indexOf("--") === 0;
    u == null || typeof u == "boolean" || u === "" ? e ? l.setProperty(t, "") : t === "float" ? l.cssFloat = "" : l[t] = "" : e ? l.setProperty(t, u) : typeof u != "number" || u === 0 || Zy.has(t) ? t === "float" ? l.cssFloat = u : l[t] = ("" + u).trim() : l[t] = u + "px";
  }
  function rr(l, t, u) {
    if (t != null && typeof t != "object")
      throw Error(o(62));
    if (l = l.style, u != null) {
      for (var e in u)
        !u.hasOwnProperty(e) || t != null && t.hasOwnProperty(e) || (e.indexOf("--") === 0 ? l.setProperty(e, "") : e === "float" ? l.cssFloat = "" : l[e] = "", il = !0);
      for (var a in t)
        e = t[a], t.hasOwnProperty(a) && u[a] !== e && (or(l, a, e), il = !0);
    } else
      for (var n in t)
        t.hasOwnProperty(n) && or(l, n, t[n]);
  }
  function nf(l) {
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
  var Vy = /* @__PURE__ */ new Map([
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
  ]), Ly = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function _n(l) {
    return Ly.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  function Lt() {
  }
  var ff = null;
  function cf(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var Ue = null, Re = null;
  function sr(l) {
    var t = Ae(l);
    if (t && (l = t.stateNode)) {
      var u = l[lt] || null;
      l: switch (l = t.stateNode, t.type) {
        case "input":
          if (ef(
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
              'input[name="' + Nt(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < u.length; t++) {
              var e = u[t];
              if (e !== l && e.form === l.form) {
                var a = e[lt] || null;
                if (!a) throw Error(o(90));
                ef(
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
          fr(l, u.value, u.defaultValue);
          break l;
        case "select":
          t = u.value, t != null && Ce(l, !!u.multiple, t, !1);
      }
    }
  }
  var of = !1;
  function dr(l, t, u) {
    if (of) return l(t, u);
    of = !0;
    try {
      var e = l(t);
      return e;
    } finally {
      if (of = !1, (Ue !== null || Re !== null) && (_i(), Ue && (t = Ue, l = Re, Re = Ue = null, sr(t), l)))
        for (t = 0; t < l.length; t++) sr(l[t]);
    }
  }
  function Ta(l, t) {
    var u = l.stateNode;
    if (u === null) return null;
    var e = u[lt] || null;
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
  var nu = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), rf = !1;
  if (nu)
    try {
      var Ea = {};
      Object.defineProperty(Ea, "passive", {
        get: function() {
          rf = !0;
        }
      }), window.addEventListener("test", Ea, Ea), window.removeEventListener("test", Ea, Ea);
    } catch {
      rf = !1;
    }
  var Ou = null, sf = null, Nn = null;
  function yr() {
    if (Nn) return Nn;
    var l, t = sf, u = t.length, e, a = "value" in Ou ? Ou.value : Ou.textContent, n = a.length;
    for (l = 0; l < u && t[l] === a[l]; l++) ;
    var i = u - l;
    for (e = 1; e <= i && t[u - e] === a[n - e]; e++) ;
    return Nn = a.slice(l, 1 < e ? 1 - e : void 0);
  }
  function An(l) {
    var t = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && t === 13 && (l = 13)) : l = t, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function pn() {
    return !0;
  }
  function vr() {
    return !1;
  }
  function $l(l) {
    function t(u, e, a, n, i) {
      this._reactName = u, this._targetInst = a, this.type = e, this.nativeEvent = n, this.target = i, this.currentTarget = null;
      for (var f in l)
        l.hasOwnProperty(f) && (u = l[f], this[f] = u ? u(n) : n[f]);
      return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1) ? pn : vr, this.isPropagationStopped = vr, this;
    }
    return $(t.prototype, {
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
  var _u = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Mn = $l(_u), za = $({}, _u, { view: 0, detail: 0 }), Ky = $l(za), df, yf, Oa, Cn = $({}, za, {
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
    getModifierState: mf,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== Oa && (Oa && l.type === "mousemove" ? (df = l.screenX - Oa.screenX, yf = l.screenY - Oa.screenY) : yf = df = 0, Oa = l), df);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : yf;
    }
  }), mr = $l(Cn), Jy = $({}, Cn, { dataTransfer: 0 }), wy = $l(Jy), Wy = $({}, za, { relatedTarget: 0 }), vf = $l(Wy), $y = $({}, _u, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Fy = $l($y), Iy = $({}, _u, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), ky = $l(Iy), Py = $({}, _u, { data: 0 }), hr = $l(Py), lv = {
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
  }, tv = {
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
  }, uv = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function ev(l) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(l) : (l = uv[l]) ? !!t[l] : !1;
  }
  function mf() {
    return ev;
  }
  var av = $({}, za, {
    key: function(l) {
      if (l.key) {
        var t = lv[l.key] || l.key;
        if (t !== "Unidentified") return t;
      }
      return l.type === "keypress" ? (l = An(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? tv[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: mf,
    charCode: function(l) {
      return l.type === "keypress" ? An(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? An(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), nv = $l(av), iv = $({}, Cn, {
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
  }), gr = $l(iv), fv = $({}, _u, { submitter: 0 }), cv = $l(fv), ov = $({}, za, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: mf
  }), rv = $l(ov), sv = $({}, _u, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), dv = $l(sv), yv = $({}, Cn, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), vv = $l(yv), mv = $({}, _u, {
    newState: 0,
    oldState: 0,
    source: 0
  }), hv = $l(mv), gv = [9, 13, 27, 32], hf = nu && "CompositionEvent" in window, _a = null;
  nu && "documentMode" in document && (_a = document.documentMode);
  var Sv = nu && "TextEvent" in window && !_a, Sr = nu && (!hf || _a && 8 < _a && 11 >= _a), br = " ", Tr = !1;
  function Er(l, t) {
    switch (l) {
      case "keyup":
        return gv.indexOf(t.keyCode) !== -1;
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
  var He = !1;
  function bv(l, t) {
    switch (l) {
      case "compositionend":
        return zr(t);
      case "keypress":
        return t.which !== 32 ? null : (Tr = !0, br);
      case "textInput":
        return l = t.data, l === br && Tr ? null : l;
      default:
        return null;
    }
  }
  function Tv(l, t) {
    if (He)
      return l === "compositionend" || !hf && Er(l, t) ? (l = yr(), Nn = sf = Ou = null, He = !1, l) : null;
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
  var Ev = {
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
    return t === "input" ? !!Ev[l.type] : t === "textarea";
  }
  function _r(l, t, u, e) {
    Ue ? Re ? Re.push(e) : Re = [e] : Ue = e, t = Di(t, "onChange"), 0 < t.length && (u = new Mn(
      "onChange",
      "change",
      null,
      u,
      e
    ), l.push({ event: u, listeners: t }));
  }
  var Na = null, Aa = null;
  function zv(l) {
    sd(l, 0);
  }
  function Dn(l) {
    var t = ba(l);
    if (nr(t)) return l;
  }
  function Nr(l, t) {
    if (l === "change") return t;
  }
  var Ar = !1;
  if (nu) {
    var gf;
    if (nu) {
      var Sf = "oninput" in document;
      if (!Sf) {
        var pr = document.createElement("div");
        pr.setAttribute("oninput", "return;"), Sf = typeof pr.oninput == "function";
      }
      gf = Sf;
    } else gf = !1;
    Ar = gf && (!document.documentMode || 9 < document.documentMode);
  }
  function Mr() {
    Na && (Na.detachEvent("onpropertychange", Cr), Aa = Na = null);
  }
  function Cr(l) {
    if (l.propertyName === "value" && Dn(Aa)) {
      var t = [];
      _r(
        t,
        Aa,
        l,
        cf(l)
      ), dr(zv, t);
    }
  }
  function Ov(l, t, u) {
    l === "focusin" ? (Mr(), Na = t, Aa = u, Na.attachEvent("onpropertychange", Cr)) : l === "focusout" && Mr();
  }
  function _v(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return Dn(Aa);
  }
  function Nv(l, t) {
    if (l === "click") return Dn(t);
  }
  function Av(l, t) {
    if (l === "input" || l === "change")
      return Dn(t);
  }
  function pv(l, t) {
    return l === t && (l !== 0 || 1 / l === 1 / t) || l !== l && t !== t;
  }
  var dt = typeof Object.is == "function" ? Object.is : pv;
  function pa(l, t) {
    if (dt(l, t)) return !0;
    if (typeof l != "object" || l === null || typeof t != "object" || t === null)
      return !1;
    var u = Object.keys(l), e = Object.keys(t);
    if (u.length !== e.length) return !1;
    for (e = 0; e < u.length; e++) {
      var a = u[e];
      if (!Fi.call(t, a) || !dt(l[a], t[a]))
        return !1;
    }
    return !0;
  }
  function bf(l) {
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
    for (var t = bf(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var u = typeof t.contentWindow.location.href == "string";
      } catch {
        u = !1;
      }
      if (u) l = t.contentWindow;
      else break;
      t = bf(l.document);
    }
    return t;
  }
  function Tf(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t && (t === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || t === "textarea" || l.contentEditable === "true");
  }
  var Mv = nu && "documentMode" in document && 11 >= document.documentMode, Be = null, Ef = null, Ma = null, zf = !1;
  function Br(l, t, u) {
    var e = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    zf || Be == null || Be !== bf(e) || (e = Be, "selectionStart" in e && Tf(e) ? e = { start: e.selectionStart, end: e.selectionEnd } : (e = (e.ownerDocument && e.ownerDocument.defaultView || window).getSelection(), e = {
      anchorNode: e.anchorNode,
      anchorOffset: e.anchorOffset,
      focusNode: e.focusNode,
      focusOffset: e.focusOffset
    }), Ma && pa(Ma, e) || (Ma = e, e = Di(Ef, "onSelect"), 0 < e.length && (t = new Mn(
      "onSelect",
      "select",
      null,
      t,
      u
    ), l.push({ event: t, listeners: e }), t.target = Be)));
  }
  function ue(l, t) {
    var u = {};
    return u[l.toLowerCase()] = t.toLowerCase(), u["Webkit" + l] = "webkit" + t, u["Moz" + l] = "moz" + t, u;
  }
  var je = {
    animationend: ue("Animation", "AnimationEnd"),
    animationiteration: ue("Animation", "AnimationIteration"),
    animationstart: ue("Animation", "AnimationStart"),
    transitionrun: ue("Transition", "TransitionRun"),
    transitionstart: ue("Transition", "TransitionStart"),
    transitioncancel: ue("Transition", "TransitionCancel"),
    transitionend: ue("Transition", "TransitionEnd")
  }, Of = {}, jr = {};
  nu && (jr = document.createElement("div").style, "AnimationEvent" in window || (delete je.animationend.animation, delete je.animationiteration.animation, delete je.animationstart.animation), "TransitionEvent" in window || delete je.transitionend.transition);
  function ee(l) {
    if (Of[l]) return Of[l];
    if (!je[l]) return l;
    var t = je[l], u;
    for (u in t)
      if (t.hasOwnProperty(u) && u in jr)
        return Of[l] = t[u];
    return l;
  }
  var Yr = ee("animationend"), xr = ee("animationiteration"), qr = ee("animationstart"), Cv = ee("transitionrun"), Dv = ee("transitionstart"), Uv = ee("transitioncancel"), Gr = ee("transitionend"), Xr = /* @__PURE__ */ new Map(), _f = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  _f.push("scrollEnd");
  function jt(l, t) {
    Xr.set(l, t), te(t, [l]);
  }
  var Rv = 0;
  function iu(l, t) {
    if (l.name != null && l.name !== "auto") return l.name;
    if (t.autoName !== null) return t.autoName;
    l = Gt.identifierPrefix;
    var u = Rv++;
    return l = "_" + l + "t_" + u.toString(32) + "_", t.autoName = l;
  }
  function Qr(l) {
    if (l == null || typeof l == "string")
      return l;
    var t = null, u = ta;
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
  }, At = [], Ye = 0, Nf = 0;
  function Rn() {
    for (var l = Ye, t = Nf = Ye = 0; t < l; ) {
      var u = At[t];
      At[t++] = null;
      var e = At[t];
      At[t++] = null;
      var a = At[t];
      At[t++] = null;
      var n = At[t];
      if (At[t++] = null, e !== null && a !== null) {
        var i = e.pending;
        i === null ? a.next = a : (a.next = i.next, i.next = a), e.pending = a;
      }
      n !== 0 && Zr(u, a, n);
    }
  }
  function Hn(l, t, u, e) {
    At[Ye++] = l, At[Ye++] = t, At[Ye++] = u, At[Ye++] = e, Nf |= e, l.lanes |= e, l = l.alternate, l !== null && (l.lanes |= e);
  }
  function Af(l, t, u, e) {
    return Hn(l, t, u, e), Bn(l);
  }
  function ae(l, t) {
    return Hn(l, null, null, t), Bn(l);
  }
  function Zr(l, t, u) {
    l.lanes |= u;
    var e = l.alternate;
    e !== null && (e.lanes |= u);
    for (var a = !1, n = l.return; n !== null; )
      n.childLanes |= u, e = n.alternate, e !== null && (e.childLanes |= u), n.tag === 22 && (l = n.stateNode, l === null || l._visibility & 1 || (a = !0)), l = n, n = n.return;
    return l.tag === 3 ? (n = l.stateNode, a && t !== null && (a = 31 - rt(u), l = n.hiddenUpdates, e = l[a], e === null ? l[a] = [t] : e.push(t), t.lane = u | 536870912), n) : null;
  }
  function Bn(l) {
    if (50 < Fa)
      throw Fa = 0, Oi = null, Error(o(185));
    for (var t = l.return; t !== null; )
      l = t, t = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var xe = {};
  function Hv(l, t, u, e) {
    this.tag = l, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = e, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function tt(l, t, u, e) {
    return new Hv(l, t, u, e);
  }
  function pf(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function cu(l, t) {
    var u = l.alternate;
    return u === null ? (u = tt(
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
  function jn(l, t, u, e, a, n) {
    var i = 0;
    if (e = l, typeof e == "function") pf(e) && (i = 1);
    else if (typeof e == "string")
      i = f1(
        l,
        u,
        Vt.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      l: switch (e) {
        case Bt:
          return l = tt(31, u, t, a), l.elementType = Bt, l.lanes = n, l;
        case _t:
          return ne(u.children, a, n, t);
        case ft:
          i = 8, a |= 24;
          break;
        case bu:
          return l = tt(12, u, t, a | 2), l.elementType = bu, l.lanes = n, l;
        case Z:
          return l = tt(13, u, t, a), l.elementType = Z, l.lanes = n, l;
        case V:
          return l = tt(19, u, t, a), l.elementType = V, l.lanes = n, l;
        case tu:
        case d:
          return l = a | 32, l = tt(30, u, t, l), l.elementType = d, l.lanes = n, l.stateNode = {
            autoName: null,
            paired: null,
            clones: null,
            ref: null
          }, l;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Hl:
                i = 10;
                break l;
              case Iu:
                i = 9;
                break l;
              case M:
                i = 11;
                break l;
              case hl:
                i = 14;
                break l;
              case rl:
                i = 16, e = null;
                break l;
            }
          i = 29, u = Error(
            o(130, l === null ? "null" : typeof l, "")
          ), e = null;
      }
    return t = tt(i, u, t, a), t.elementType = l, t.type = e, t.lanes = n, t;
  }
  function ne(l, t, u, e) {
    return l = tt(7, l, e, t), l.lanes = u, l;
  }
  function Mf(l, t, u) {
    return l = tt(6, l, null, t), l.lanes = u, l;
  }
  function Lr(l) {
    var t = tt(18, null, null, 0);
    return t.stateNode = l, t;
  }
  function Cf(l, t, u) {
    return t = tt(
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
  function pt(l, t) {
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
  var qe = [], Ge = 0, Yn = null, Ca = 0, Mt = [], Ct = 0, Nu = null, Kt = 1, Jt = "";
  function ou(l, t) {
    qe[Ge++] = Ca, qe[Ge++] = Yn, Yn = l, Ca = t;
  }
  function Jr(l, t, u) {
    Mt[Ct++] = Kt, Mt[Ct++] = Jt, Mt[Ct++] = Nu, Nu = l;
    var e = Kt;
    l = Jt;
    var a = 32 - rt(e) - 1;
    e &= ~(1 << a), u += 1;
    var n = 32 - rt(t) + a;
    if (30 < n) {
      var i = a - a % 5;
      n = (e & (1 << i) - 1).toString(32), e >>= i, a -= i, Kt = 1 << 32 - rt(t) + a | u << a | e, Jt = n + l;
    } else
      Kt = 1 << n | u << a | e, Jt = l;
  }
  function xn(l) {
    l.return !== null && (ou(l, 1), Jr(l, 1, 0));
  }
  function Df(l) {
    for (; l === Yn; )
      Yn = qe[--Ge], qe[Ge] = null, Ca = qe[--Ge], qe[Ge] = null;
    for (; l === Nu; )
      Nu = Mt[--Ct], Mt[Ct] = null, Jt = Mt[--Ct], Mt[Ct] = null, Kt = Mt[--Ct], Mt[Ct] = null;
  }
  function wr(l, t) {
    Mt[Ct++] = Kt, Mt[Ct++] = Jt, Mt[Ct++] = Nu, Kt = t.id, Jt = t.overflow, Nu = l;
  }
  var jl = null, Tl = null, W = !1, Au = null, Dt = !1, Uf = Error(o(519));
  function pu(l) {
    var t = Error(
      o(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Da(pt(t, l)), Uf;
  }
  function Wr(l) {
    var t = l.stateNode, u = l.type, e = l.memoizedProps;
    switch (t[Ql] = l, t[lt] = e, u) {
      case "dialog":
        I("cancel", t), I("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        I("load", t);
        break;
      case "video":
      case "audio":
        for (u = 0; u < ka.length; u++)
          I(ka[u], t);
        break;
      case "source":
        I("error", t);
        break;
      case "img":
      case "image":
      case "link":
        I("error", t), I("load", t);
        break;
      case "details":
        I("toggle", t);
        break;
      case "input":
        I("invalid", t), ir(
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
        I("invalid", t);
        break;
      case "textarea":
        I("invalid", t), cr(t, e.value, e.defaultValue, e.children);
    }
    u = e.children, typeof u != "string" && typeof u != "number" && typeof u != "bigint" || t.textContent === "" + u || e.suppressHydrationWarning === !0 || md(t.textContent, u) ? (e.popover != null && (I("beforetoggle", t), I("toggle", t)), e.onScroll != null && I("scroll", t), e.onScrollEnd != null && I("scrollend", t), e.onClick != null && (t.onclick = Lt), t = !0) : t = !1, t || pu(l, !0);
  }
  function qn(l) {
    for (jl = l.return; jl; )
      switch (jl.tag) {
        case 5:
        case 31:
        case 13:
          Dt = !1;
          return;
        case 27:
        case 3:
          Dt = !0;
          return;
        default:
          jl = jl.return;
      }
  }
  function Xe(l) {
    if (l !== jl) return !1;
    if (!W) return qn(l), W = !0, !1;
    var t = l.tag, u;
    if ((u = t !== 3 && t !== 27) && ((u = t === 5) && (u = l.type, u = !(u !== "form" && u !== "button") || fo(l.type, l.memoizedProps)), u = !u), u && Tl && pu(l), qn(l), t === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(o(317));
      Tl = Bd(l);
    } else if (t === 31) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(o(317));
      Tl = Bd(l);
    } else
      t === 27 ? (t = Tl, Vu(l.type) ? (l = go, go = null, Tl = l) : Tl = t) : Tl = jl ? Rt(l.stateNode.nextSibling) : null;
    return !0;
  }
  function ie() {
    Tl = jl = null, W = !1;
  }
  function Rf() {
    var l = Au;
    return l !== null && (at === null ? at = l : at.push.apply(
      at,
      l
    ), Au = null), l;
  }
  function Da(l) {
    Au === null ? Au = [l] : Au.push(l);
  }
  var Hf = Zt(null), fe = null, ru = null;
  function Mu(l, t, u) {
    bl(Hf, t._currentValue), t._currentValue = u;
  }
  function su(l) {
    l._currentValue = Hf.current, Xl(Hf);
  }
  function Gn(l, t, u) {
    for (; l !== null; ) {
      var e = l.alternate;
      if ((l.childLanes & t) !== t ? (l.childLanes |= t, e !== null && (e.childLanes |= t)) : e !== null && (e.childLanes & t) !== t && (e.childLanes |= t), l === u) break;
      l = l.return;
    }
  }
  function Bf(l, t, u, e) {
    var a = l.child;
    for (a !== null && (a.return = l); a !== null; ) {
      var n = a.dependencies;
      if (n !== null) {
        var i = a.child;
        n = n.firstContext;
        l: for (; n !== null; ) {
          var f = n;
          n = a;
          for (var c = 0; c < t.length; c++)
            if (f.context === t[c]) {
              n.lanes |= u, f = n.alternate, f !== null && (f.lanes |= u), Gn(
                n.return,
                u,
                l
              ), e || (i = null);
              break l;
            }
          n = f.next;
        }
      } else if (a.tag === 18) {
        if (i = a.return, i === null) throw Error(o(341));
        i.lanes |= u, n = i.alternate, n !== null && (n.lanes |= u), Gn(i, u, l), i = null;
      } else
        a.tag === 13 && a.memoizedState !== null && a.memoizedState.dehydrated === null ? (a.lanes |= u, i = a.alternate, i !== null && (i.lanes |= u), Gn(
          a.return,
          u,
          l
        ), i = a.child, i = i !== null ? i.sibling : null) : i = a.child;
      if (i !== null) i.return = a;
      else
        for (i = a; i !== null; ) {
          if (i === l) {
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
  function ce(l, t, u, e) {
    l = null;
    for (var a = t, n = !1; a !== null; ) {
      if (!n) {
        if ((a.flags & 524288) !== 0) n = !0;
        else if ((a.flags & 262144) !== 0) break;
      }
      if (a.tag === 10) {
        var i = a.alternate;
        if (i === null) throw Error(o(387));
        if (i = i.memoizedProps, i !== null) {
          var f = a.type;
          dt(a.pendingProps.value, i.value) || (l !== null ? l.push(f) : l = [f]);
        }
      } else if (a === dn.current) {
        if (i = a.alternate, i === null) throw Error(o(387));
        i.memoizedState.memoizedState !== a.memoizedState.memoizedState && (l !== null ? l.push(sa) : l = [sa]);
      }
      a = a.return;
    }
    return l !== null && Bf(
      t,
      l,
      u,
      e
    ), t.flags |= 262144, l !== null;
  }
  function Xn(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!dt(
        l.context._currentValue,
        l.memoizedValue
      ))
        return !0;
      l = l.next;
    }
    return !1;
  }
  function oe(l) {
    fe = l, ru = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function Zl(l) {
    return $r(fe, l);
  }
  function Qn(l, t) {
    return fe === null && oe(l), $r(l, t);
  }
  function $r(l, t) {
    var u = t._currentValue;
    if (t = { context: t, memoizedValue: u, next: null }, ru === null) {
      if (l === null) throw Error(o(308));
      ru = t, l.dependencies = { lanes: 0, firstContext: t }, l.flags |= 524288;
    } else ru = ru.next = t;
    return u;
  }
  var Bv = typeof AbortController < "u" ? AbortController : function() {
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
  }, jv = r.unstable_scheduleCallback, Yv = r.unstable_NormalPriority, pl = {
    $$typeof: Hl,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function jf() {
    return {
      controller: new Bv(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Ua(l) {
    l.refCount--, l.refCount === 0 && jv(Yv, function() {
      l.controller.abort();
    });
  }
  function Fr(l, t) {
    if ((l.pendingLanes & 4194048) !== 0) {
      var u = l.transitionTypes;
      for (u === null && (u = l.transitionTypes = []), l = 0; l < t.length; l++) {
        var e = t[l];
        u.indexOf(e) === -1 && u.push(e);
      }
    }
  }
  var Ra = null;
  function xv(l) {
    var t = l.transitionTypes;
    return l.transitionTypes = null, t;
  }
  var Ha = null, Yf = 0, re = 0, Qe = null;
  function qv(l, t) {
    if (Ha === null) {
      var u = Ha = [];
      Yf = 0, re = kc(), Qe = {
        status: "pending",
        value: void 0,
        then: function(e) {
          u.push(e);
        }
      };
    }
    return Yf++, t.then(Ir, Ir), t;
  }
  function Ir() {
    if (--Yf === 0 && (Ra = null, Ha !== null)) {
      Qe !== null && (Qe.status = "fulfilled");
      var l = Ha;
      Ha = null, re = 0, Qe = null;
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function Gv(l, t) {
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
  var kr = B.S;
  B.S = function(l, t) {
    if (L0 = ct(), typeof t == "object" && t !== null && typeof t.then == "function" && qv(l, t), Ra !== null)
      for (var u = na; u !== null; )
        Fr(u, Ra), u = u.next;
    if (u = l.types, u !== null) {
      for (var e = na; e !== null; )
        Fr(e, u), e = e.next;
      if (re !== 0) {
        e = Ra, e === null && (e = Ra = []);
        for (var a = 0; a < u.length; a++) {
          var n = u[a];
          e.indexOf(n) === -1 && e.push(n);
        }
      }
    }
    kr !== null && kr(l, t);
  };
  var se = Zt(null);
  function xf() {
    var l = se.current;
    return l !== null ? l : gl.pooledCache;
  }
  function Zn(l, t) {
    t === null ? bl(se, se.current) : bl(se, t.pool);
  }
  function Pr() {
    var l = xf();
    return l === null ? null : { parent: pl._currentValue, pool: l };
  }
  var Ze = Error(o(460)), qf = Error(o(474)), Vn = Error(o(542)), Ln = { then: function() {
  } };
  function ls(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function ts(l, t, u) {
    switch (u = l[u], u === void 0 ? l.push(t) : u !== t && (t.then(Lt, Lt), t = u), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw l = t.reason, es(l), l === void 0 && !("reason" in t) ? Error(o(600)) : l;
      default:
        if (typeof t.status == "string") t.then(Lt, Lt);
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
            throw l = t.reason, es(l), l;
        }
        throw ye = t, Ze;
    }
  }
  function de(l) {
    try {
      var t = l._init;
      return t(l._payload);
    } catch (u) {
      throw u !== null && typeof u == "object" && typeof u.then == "function" ? (ye = u, Ze) : u;
    }
  }
  var ye = null;
  function us() {
    if (ye === null) throw Error(o(459));
    var l = ye;
    return ye = null, l;
  }
  function es(l) {
    if (l === Ze || l === Vn)
      throw Error(o(483));
  }
  var Ve = null, Ba = 0;
  function Kn(l) {
    var t = Ba;
    return Ba += 1, Ve === null && (Ve = []), ts(Ve, l, t);
  }
  function Cu(l, t) {
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
    function t(v, s) {
      if (l) {
        var g = v.deletions;
        g === null ? (v.deletions = [s], v.flags |= 16) : g.push(s);
      }
    }
    function u(v, s) {
      if (!l) return null;
      for (; s !== null; )
        t(v, s), s = s.sibling;
      return null;
    }
    function e(v) {
      for (var s = /* @__PURE__ */ new Map(); v !== null; )
        v.key === null ? s.set(v.index, v) : s.set(v.key, v), v = v.sibling;
      return s;
    }
    function a(v, s) {
      return v = cu(v, s), v.index = 0, v.sibling = null, v;
    }
    function n(v, s, g) {
      return v.index = g, l ? (g = v.alternate, g !== null ? (g = g.index, g < s ? (v.flags |= 2, s) : g) : (v.flags |= 134217730, s)) : (v.flags |= 1048576, s);
    }
    function i(v) {
      return l && v.alternate === null && (v.flags |= 134217730), v;
    }
    function f(v, s, g, z) {
      return s === null || s.tag !== 6 ? (s = Mf(g, v.mode, z), s.return = v, s) : (s = a(s, g), s.return = v, s);
    }
    function c(v, s, g, z) {
      var C = g.type;
      return C === _t ? (v = T(
        v,
        s,
        g.props.children,
        z,
        g.key
      ), Cu(v, g), v) : s !== null && (s.elementType === C || typeof C == "object" && C !== null && C.$$typeof === rl && de(C) === s.type) ? (s = a(s, g.props), Cu(s, g), s.return = v, s) : (s = jn(
        g.type,
        g.key,
        g.props,
        null,
        v.mode,
        z
      ), Cu(s, g), s.return = v, s);
    }
    function m(v, s, g, z) {
      return s === null || s.tag !== 4 || s.stateNode.containerInfo !== g.containerInfo || s.stateNode.implementation !== g.implementation ? (s = Cf(g, v.mode, z), s.return = v, s) : (s = a(s, g.children || []), s.return = v, s);
    }
    function T(v, s, g, z, C) {
      return s === null || s.tag !== 7 ? (s = ne(
        g,
        v.mode,
        z,
        C
      ), s.return = v, s) : (s = a(s, g), s.return = v, s);
    }
    function O(v, s, g) {
      if (typeof s == "string" && s !== "" || typeof s == "number" || typeof s == "bigint")
        return s = Mf(
          "" + s,
          v.mode,
          g
        ), s.return = v, s;
      if (typeof s == "object" && s !== null) {
        switch (s.$$typeof) {
          case Qt:
            return g = jn(
              s.type,
              s.key,
              s.props,
              null,
              v.mode,
              g
            ), Cu(g, s), g.return = v, g;
          case Ot:
            return s = Cf(
              s,
              v.mode,
              g
            ), s.return = v, s;
          case rl:
            return s = de(s), O(v, s, g);
        }
        if (cl(s) || q(s))
          return s = ne(
            s,
            v.mode,
            g,
            null
          ), s.return = v, s;
        if (typeof s.then == "function")
          return O(v, Kn(s), g);
        if (s.$$typeof === Hl)
          return O(
            v,
            Qn(v, s),
            g
          );
        Jn(v, s);
      }
      return null;
    }
    function y(v, s, g, z) {
      var C = s !== null ? s.key : null;
      if (typeof g == "string" && g !== "" || typeof g == "number" || typeof g == "bigint")
        return C !== null ? null : f(v, s, "" + g, z);
      if (typeof g == "object" && g !== null) {
        switch (g.$$typeof) {
          case Qt:
            return g.key === C ? c(v, s, g, z) : null;
          case Ot:
            return g.key === C ? m(v, s, g, z) : null;
          case rl:
            return g = de(g), y(v, s, g, z);
        }
        if (cl(g) || q(g))
          return C !== null ? null : T(v, s, g, z, null);
        if (typeof g.then == "function")
          return y(
            v,
            s,
            Kn(g),
            z
          );
        if (g.$$typeof === Hl)
          return y(
            v,
            s,
            Qn(v, g),
            z
          );
        Jn(v, g);
      }
      return null;
    }
    function S(v, s, g, z, C) {
      if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint")
        return v = v.get(g) || null, f(s, v, "" + z, C);
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case Qt:
            return v = v.get(
              z.key === null ? g : z.key
            ) || null, c(s, v, z, C);
          case Ot:
            return v = v.get(
              z.key === null ? g : z.key
            ) || null, m(s, v, z, C);
          case rl:
            return z = de(z), S(
              v,
              s,
              g,
              z,
              C
            );
        }
        if (cl(z) || q(z))
          return v = v.get(g) || null, T(s, v, z, C, null);
        if (typeof z.then == "function")
          return S(
            v,
            s,
            g,
            Kn(z),
            C
          );
        if (z.$$typeof === Hl)
          return S(
            v,
            s,
            g,
            Qn(s, z),
            C
          );
        Jn(s, z);
      }
      return null;
    }
    function A(v, s, g, z) {
      for (var C = null, P = null, Y = s, Q = s = 0, Dl = null; Y !== null && Q < g.length; Q++) {
        Y.index > Q ? (Dl = Y, Y = null) : Dl = Y.sibling;
        var ul = y(
          v,
          Y,
          g[Q],
          z
        );
        if (ul === null) {
          Y === null && (Y = Dl);
          break;
        }
        l && Y && ul.alternate === null && t(v, Y), s = n(ul, s, Q), P === null ? C = ul : P.sibling = ul, P = ul, Y = Dl;
      }
      if (Q === g.length)
        return u(v, Y), W && ou(v, Q), C;
      if (Y === null) {
        for (; Q < g.length; Q++)
          Y = O(v, g[Q], z), Y !== null && (s = n(
            Y,
            s,
            Q
          ), P === null ? C = Y : P.sibling = Y, P = Y);
        return W && ou(v, Q), C;
      }
      for (Y = e(Y); Q < g.length; Q++)
        Dl = S(
          Y,
          v,
          Q,
          g[Q],
          z
        ), Dl !== null && (l && (ul = Dl.alternate, ul !== null && Y.delete(ul.key === null ? Q : ul.key)), s = n(
          Dl,
          s,
          Q
        ), P === null ? C = Dl : P.sibling = Dl, P = Dl);
      return l && Y.forEach(function(Wu) {
        return t(v, Wu);
      }), W && ou(v, Q), C;
    }
    function D(v, s, g, z) {
      if (g == null) throw Error(o(151));
      for (var C = null, P = null, Y = s, Q = s = 0, Dl = null, ul = g.next(); Y !== null && !ul.done; Q++, ul = g.next()) {
        Y.index > Q ? (Dl = Y, Y = null) : Dl = Y.sibling;
        var Wu = y(v, Y, ul.value, z);
        if (Wu === null) {
          Y === null && (Y = Dl);
          break;
        }
        l && Y && Wu.alternate === null && t(v, Y), s = n(Wu, s, Q), P === null ? C = Wu : P.sibling = Wu, P = Wu, Y = Dl;
      }
      if (ul.done)
        return u(v, Y), W && ou(v, Q), C;
      if (Y === null) {
        for (; !ul.done; Q++, ul = g.next())
          ul = O(v, ul.value, z), ul !== null && (s = n(ul, s, Q), P === null ? C = ul : P.sibling = ul, P = ul);
        return W && ou(v, Q), C;
      }
      for (Y = e(Y); !ul.done; Q++, ul = g.next())
        ul = S(Y, v, Q, ul.value, z), ul !== null && (l && (Dl = ul.alternate, Dl !== null && Y.delete(
          Dl.key === null ? Q : Dl.key
        )), s = n(ul, s, Q), P === null ? C = ul : P.sibling = ul, P = ul);
      return l && Y.forEach(function(b1) {
        return t(v, b1);
      }), W && ou(v, Q), C;
    }
    function w(v, s, g, z) {
      if (typeof g == "object" && g !== null && g.type === _t && g.key === null && g.props.ref === void 0 && (g = g.props.children), typeof g == "object" && g !== null) {
        switch (g.$$typeof) {
          case Qt:
            l: {
              for (var C = g.key; s !== null; ) {
                if (s.key === C) {
                  if (C = g.type, C === _t) {
                    if (s.tag === 7) {
                      u(
                        v,
                        s.sibling
                      ), z = a(
                        s,
                        g.props.children
                      ), Cu(z, g), z.return = v, v = z;
                      break l;
                    }
                  } else if (s.elementType === C || typeof C == "object" && C !== null && C.$$typeof === rl && de(C) === s.type) {
                    u(
                      v,
                      s.sibling
                    ), z = a(s, g.props), Cu(z, g), z.return = v, v = z;
                    break l;
                  }
                  u(v, s);
                  break;
                } else t(v, s);
                s = s.sibling;
              }
              g.type === _t ? (z = ne(
                g.props.children,
                v.mode,
                z,
                g.key
              ), Cu(z, g), z.return = v, v = z) : (z = jn(
                g.type,
                g.key,
                g.props,
                null,
                v.mode,
                z
              ), Cu(z, g), z.return = v, v = z);
            }
            return i(v);
          case Ot:
            l: {
              for (C = g.key; s !== null; ) {
                if (s.key === C)
                  if (s.tag === 4 && s.stateNode.containerInfo === g.containerInfo && s.stateNode.implementation === g.implementation) {
                    u(
                      v,
                      s.sibling
                    ), z = a(s, g.children || []), z.return = v, v = z;
                    break l;
                  } else {
                    u(v, s);
                    break;
                  }
                else t(v, s);
                s = s.sibling;
              }
              z = Cf(g, v.mode, z), z.return = v, v = z;
            }
            return i(v);
          case rl:
            return g = de(g), w(
              v,
              s,
              g,
              z
            );
        }
        if (cl(g))
          return A(
            v,
            s,
            g,
            z
          );
        if (q(g)) {
          if (C = q(g), typeof C != "function") throw Error(o(150));
          return g = C.call(g), D(
            v,
            s,
            g,
            z
          );
        }
        if (typeof g.then == "function")
          return w(
            v,
            s,
            Kn(g),
            z
          );
        if (g.$$typeof === Hl)
          return w(
            v,
            s,
            Qn(v, g),
            z
          );
        Jn(v, g);
      }
      return typeof g == "string" && g !== "" || typeof g == "number" || typeof g == "bigint" ? (g = "" + g, s !== null && s.tag === 6 ? (u(v, s.sibling), z = a(s, g), z.return = v, v = z) : (u(v, s), z = Mf(g, v.mode, z), z.return = v, v = z), i(v)) : u(v, s);
    }
    return function(v, s, g, z) {
      try {
        Ba = 0;
        var C = w(
          v,
          s,
          g,
          z
        );
        return Ve = null, C;
      } catch (Y) {
        if (Y === Ze || Y === Vn) throw Y;
        var P = tt(29, Y, null, v.mode);
        return P.lanes = z, P.return = v, P;
      }
    };
  }
  var ve = as(!0), ns = as(!1), Du = !1;
  function Gf(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Xf(l, t) {
    l = l.updateQueue, t.updateQueue === l && (t.updateQueue = {
      baseState: l.baseState,
      firstBaseUpdate: l.firstBaseUpdate,
      lastBaseUpdate: l.lastBaseUpdate,
      shared: l.shared,
      callbacks: null
    });
  }
  function Uu(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function Ru(l, t, u) {
    var e = l.updateQueue;
    if (e === null) return null;
    if (e = e.shared, (ol & 2) !== 0) {
      var a = e.pending;
      return a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t, t = Bn(l), Zr(l, null, u), t;
    }
    return Hn(l, e, t, u), Bn(l);
  }
  function ja(l, t, u) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (u & 4194048) !== 0)) {
      var e = t.lanes;
      e &= l.pendingLanes, u |= e, t.lanes = u, Jo(l, u);
    }
  }
  function Qf(l, t) {
    var u = l.updateQueue, e = l.alternate;
    if (e !== null && (e = e.updateQueue, u === e)) {
      var a = null, n = null;
      if (u = u.firstBaseUpdate, u !== null) {
        do {
          var i = {
            lane: u.lane,
            tag: u.tag,
            payload: u.payload,
            callback: null,
            next: null
          };
          n === null ? a = n = i : n = n.next = i, u = u.next;
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
  var Zf = !1;
  function Ya() {
    if (Zf) {
      var l = Qe;
      if (l !== null) throw l;
    }
  }
  function xa(l, t, u, e) {
    Zf = !1;
    var a = l.updateQueue;
    Du = !1;
    var n = a.firstBaseUpdate, i = a.lastBaseUpdate, f = a.shared.pending;
    if (f !== null) {
      a.shared.pending = null;
      var c = f, m = c.next;
      c.next = null, i === null ? n = m : i.next = m, i = c;
      var T = l.alternate;
      T !== null && (T = T.updateQueue, f = T.lastBaseUpdate, f !== i && (f === null ? T.firstBaseUpdate = m : f.next = m, T.lastBaseUpdate = c));
    }
    if (n !== null) {
      var O = a.baseState;
      i = 0, T = m = c = null, f = n;
      do {
        var y = f.lane & -536870913, S = y !== f.lane;
        if (S ? (k & y) === y : (e & y) === y) {
          y !== 0 && y === re && (Zf = !0), T !== null && (T = T.next = {
            lane: 0,
            tag: f.tag,
            payload: f.payload,
            callback: null,
            next: null
          });
          l: {
            var A = l, D = f;
            y = t;
            var w = u;
            switch (D.tag) {
              case 1:
                if (A = D.payload, typeof A == "function") {
                  O = A.call(w, O, y);
                  break l;
                }
                O = A;
                break l;
              case 3:
                A.flags = A.flags & -65537 | 128;
              case 0:
                if (A = D.payload, y = typeof A == "function" ? A.call(w, O, y) : A, y == null) break l;
                O = $({}, O, y);
                break l;
              case 2:
                Du = !0;
            }
          }
          y = f.callback, y !== null && (l.flags |= 64, S && (l.flags |= 8192), S = a.callbacks, S === null ? a.callbacks = [y] : S.push(y));
        } else
          S = {
            lane: y,
            tag: f.tag,
            payload: f.payload,
            callback: f.callback,
            next: null
          }, T === null ? (m = T = S, c = O) : T = T.next = S, i |= y;
        if (f = f.next, f === null) {
          if (f = a.shared.pending, f === null)
            break;
          S = f, f = S.next, S.next = null, a.lastBaseUpdate = S, a.shared.pending = null;
        }
      } while (!0);
      T === null && (c = O), a.baseState = c, a.firstBaseUpdate = m, a.lastBaseUpdate = T, n === null && (a.shared.lanes = 0), Gu |= i, l.lanes = i, l.memoizedState = O;
    }
  }
  function is(l, t) {
    if (typeof l != "function")
      throw Error(o(191, l));
    l.call(t);
  }
  function fs(l, t) {
    var u = l.callbacks;
    if (u !== null)
      for (l.callbacks = null, l = 0; l < u.length; l++)
        is(u[l], t);
  }
  var Hu = Zt(null), wn = Zt(0);
  function cs(l, t) {
    l = hu, bl(wn, l), bl(Hu, t), hu = l | t.baseLanes;
  }
  function Vf() {
    bl(wn, hu), bl(Hu, Hu.current);
  }
  function Lf() {
    hu = wn.current, Xl(Hu), Xl(wn);
  }
  var Vl = Zt(null), Wl = null;
  function Bu(l) {
    var t = l.alternate;
    bl(Ll, Ll.current & 1), bl(Vl, l), Wl === null && (t === null || Hu.current !== null || t.memoizedState !== null) && (Wl = l);
  }
  function Kf(l) {
    bl(Ll, Ll.current), bl(Vl, l), Wl === null && (Wl = l);
  }
  function os(l) {
    l.tag === 22 ? (bl(Ll, Ll.current), bl(Vl, l), Wl === null && (Wl = l)) : ju();
  }
  function ju() {
    bl(Ll, Ll.current), bl(Vl, Vl.current);
  }
  function yt(l) {
    Xl(Vl), Wl === l && (Wl = null), Xl(Ll);
  }
  var Ll = Zt(0);
  function qa(l, t) {
    bl(Vl, Vl.current), bl(Ll, t);
  }
  function Jf(l) {
    Xl(Ll), Xl(Vl), Wl === l && (Wl = null);
  }
  function Wn(l) {
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
  var du = 0, J = null, ml = null, Ml = null, $n = !1, Le = !1, me = !1, Fn = 0, Ga = 0, Ke = null, Xv = 0;
  function _l() {
    throw Error(o(321));
  }
  function wf(l, t) {
    if (t === null) return !1;
    for (var u = 0; u < t.length && u < l.length; u++)
      if (!dt(l[u], t[u])) return !1;
    return !0;
  }
  function Wf(l, t, u, e, a, n) {
    return du = n, J = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, B.H = l === null || l.memoizedState === null ? Js : ws, me = !1, n = u(e, a), me = !1, Le && (n = ss(
      t,
      u,
      e,
      a
    )), rs(l), n;
  }
  function rs(l) {
    B.H = ei;
    var t = ml !== null && ml.next !== null;
    if (du = 0, Ml = ml = J = null, $n = !1, Ga = 0, Ke = null, t) throw Error(o(300));
    l === null || Cl || (l = l.dependencies, l !== null && Xn(l) && (Cl = !0));
  }
  function ss(l, t, u, e) {
    J = l;
    var a = 0;
    do {
      if (Le && (Ke = null), Ga = 0, Le = !1, 25 <= a) throw Error(o(301));
      if (a += 1, Ml = ml = null, l.updateQueue != null) {
        var n = l.updateQueue;
        n.lastEffect = null, n.events = null, n.stores = null, n.memoCache != null && (n.memoCache.index = 0);
      }
      B.H = Wv, n = t(u, e);
    } while (Le);
    return n;
  }
  function Qv() {
    var l = B.H, t = l.useState()[0];
    return t = typeof t.then == "function" ? Xa(t) : t, l = l.useState()[0], (ml !== null ? ml.memoizedState : null) !== l && (J.flags |= 1024), t;
  }
  function $f() {
    var l = Fn !== 0;
    return Fn = 0, l;
  }
  function Ff(l, t, u) {
    t.updateQueue = l.updateQueue, t.flags &= -2053, l.lanes &= ~u;
  }
  function If(l) {
    if ($n) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        t !== null && (t.pending = null), l = l.next;
      }
      $n = !1;
    }
    du = 0, Ml = ml = J = null, Le = !1, Ga = Fn = 0, Ke = null;
  }
  function Fl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Ml === null ? J.memoizedState = Ml = l : Ml = Ml.next = l, Ml;
  }
  function Al() {
    if (ml === null) {
      var l = J.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = ml.next;
    var t = Ml === null ? J.memoizedState : Ml.next;
    if (t !== null)
      Ml = t, ml = l;
    else {
      if (l === null)
        throw J.alternate === null ? Error(o(467)) : Error(o(310));
      ml = l, l = {
        memoizedState: ml.memoizedState,
        baseState: ml.baseState,
        baseQueue: ml.baseQueue,
        queue: ml.queue,
        next: null
      }, Ml === null ? J.memoizedState = Ml = l : Ml = Ml.next = l;
    }
    return Ml;
  }
  function In() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Xa(l) {
    var t = Ga;
    return Ga += 1, Ke === null && (Ke = []), l = ts(Ke, l, t), t = J, (Ml === null ? t.memoizedState : Ml.next) === null && (t = t.alternate, B.H = t === null || t.memoizedState === null ? Js : ws), l;
  }
  function kn(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return Xa(l);
      if (l.$$typeof === _) return;
      if (l.$$typeof === Hl) return Zl(l);
    }
    throw Error(o(438, String(l)));
  }
  function kf(l) {
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
    if (t == null && (t = { data: [], index: 0 }), u === null && (u = In(), J.updateQueue = u), u.memoCache = t, u = t.data[t.index], u === void 0)
      for (u = t.data[t.index] = Array(l), e = 0; e < l; e++)
        u[e] = ku;
    return t.index++, u;
  }
  function yu(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function Pn(l) {
    var t = Al();
    return Pf(t, ml, l);
  }
  function Pf(l, t, u) {
    var e = l.queue;
    if (e === null) throw Error(o(311));
    e.lastRenderedReducer = u;
    var a = l.baseQueue, n = e.pending;
    if (n !== null) {
      if (a !== null) {
        var i = a.next;
        a.next = n.next, n.next = i;
      }
      t.baseQueue = a = n, e.pending = null;
    }
    if (n = l.baseState, a === null) l.memoizedState = n;
    else {
      t = a.next;
      var f = i = null, c = null, m = t, T = !1;
      do {
        var O = m.lane & -536870913;
        if (O !== m.lane ? (k & O) === O : (du & O) === O) {
          var y = m.revertLane;
          if (y === 0)
            c !== null && (c = c.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: m.action,
              hasEagerState: m.hasEagerState,
              eagerState: m.eagerState,
              next: null
            }), O === re && (T = !0);
          else if ((du & y) === y) {
            m = m.next, y === re && (T = !0);
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
            }, c === null ? (f = c = O, i = n) : c = c.next = O, J.lanes |= y, Gu |= y;
          O = m.action, me && u(n, O), n = m.hasEagerState ? m.eagerState : u(n, O);
        } else
          y = {
            lane: O,
            revertLane: m.revertLane,
            gesture: m.gesture,
            action: m.action,
            hasEagerState: m.hasEagerState,
            eagerState: m.eagerState,
            next: null
          }, c === null ? (f = c = y, i = n) : c = c.next = y, J.lanes |= O, Gu |= O;
        m = m.next;
      } while (m !== null && m !== t);
      if (c === null ? i = n : c.next = f, !dt(n, l.memoizedState) && (Cl = !0, T && (u = Qe, u !== null)))
        throw u;
      l.memoizedState = n, l.baseState = i, l.baseQueue = c, e.lastRenderedState = n;
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
      var i = a = a.next;
      do
        n = l(n, i.action), i = i.next;
      while (i !== a);
      dt(n, t.memoizedState) || (Cl = !0), t.memoizedState = n, t.baseQueue === null && (t.baseState = n), u.lastRenderedState = n;
    }
    return [n, e];
  }
  function ds(l, t, u) {
    var e = J, a = Al(), n = W;
    if (n) {
      if (u === void 0) throw Error(o(407));
      u = u();
    } else u = t();
    var i = !dt(
      (ml || a).memoizedState,
      u
    );
    if (i && (a.memoizedState = u, Cl = !0), a = a.queue, ec(ms.bind(null, e, a, l), [
      l
    ]), l = a.getSnapshot !== t || i || Ml !== null && (Ml.memoizedState.tag & 1) !== 0, Je(
      l ? 9 : 8,
      { destroy: void 0 },
      vs.bind(null, e, a, u, t),
      null
    ), l) {
      if (e.flags |= 2048, gl === null) throw Error(o(349));
      n || (du & 127) !== 0 || ys(e, t, u);
    }
    return u;
  }
  function ys(l, t, u) {
    l.flags |= 16384, l = { getSnapshot: t, value: u }, t = J.updateQueue, t === null ? (t = In(), J.updateQueue = t, t.stores = [l]) : (u = t.stores, u === null ? t.stores = [l] : u.push(l));
  }
  function vs(l, t, u, e) {
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
      return !dt(l, u);
    } catch {
      return !0;
    }
  }
  function gs(l) {
    var t = ae(l, 2);
    t !== null && nt(t, l, 2);
  }
  function tc(l) {
    var t = Fl();
    if (typeof l == "function") {
      var u = l;
      if (l = u(), me) {
        zu(!0);
        try {
          u();
        } finally {
          zu(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = l, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: yu,
      lastRenderedState: l
    }, t;
  }
  function Ss(l, t, u, e) {
    return l.baseState = u, Pf(
      l,
      ml,
      typeof e == "function" ? e : yu
    );
  }
  function Zv(l, t, u, e, a) {
    if (ui(l)) throw Error(o(485));
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
        then: function(i) {
          n.listeners.push(i);
        }
      };
      B.T !== null ? u(!0) : n.isTransition = !1, e(n), u = t.pending, u === null ? (n.next = t.pending = n, bs(t, n)) : (n.next = u.next, t.pending = u.next = n);
    }
  }
  function bs(l, t) {
    var u = t.action, e = t.payload, a = l.state;
    if (t.isTransition) {
      var n = B.T, i = {};
      i.types = n !== null ? n.types : null, B.T = i;
      try {
        var f = u(a, e), c = B.S;
        c !== null && c(i, f), Ts(l, t, f);
      } catch (m) {
        uc(l, t, m);
      } finally {
        n !== null && i.types !== null && (n.types = i.types), B.T = n;
      }
    } else
      try {
        n = u(a, e), Ts(l, t, n);
      } catch (m) {
        uc(l, t, m);
      }
  }
  function Ts(l, t, u) {
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
    t.status = "fulfilled", t.value = u, zs(t), l.state = u, t = l.pending, t !== null && (u = t.next, u === t ? l.pending = null : (u = u.next, t.next = u, bs(l, u)));
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
    if (W) {
      var u = gl.formState;
      if (u !== null) {
        l: {
          var e = J;
          if (W) {
            if (Tl) {
              t: {
                for (var a = Tl, n = Dt; a.nodeType !== 8; ) {
                  if (!n) {
                    a = null;
                    break t;
                  }
                  if (a = Rt(
                    a.nextSibling
                  ), a === null) {
                    a = null;
                    break t;
                  }
                }
                n = a.data, a = n === "F!" || n === "F" ? a : null;
              }
              if (a) {
                Tl = Rt(
                  a.nextSibling
                ), e = a.data === "F!";
                break l;
              }
            }
            pu(e);
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
      lastRenderedReducer: Os,
      lastRenderedState: t
    }, u.queue = e, u = Vs.bind(
      null,
      J,
      e
    ), e.dispatch = u, e = tc(!1), n = cc.bind(
      null,
      J,
      !1,
      e.queue
    ), e = Fl(), a = {
      state: t,
      dispatch: null,
      action: l,
      pending: null
    }, e.queue = a, u = Zv.bind(
      null,
      J,
      a,
      n,
      u
    ), a.dispatch = u, e.memoizedState = l, [t, u, !1];
  }
  function Ns(l) {
    var t = Al();
    return As(t, ml, l);
  }
  function As(l, t, u) {
    if (t = Pf(
      l,
      t,
      Os
    )[0], l = Pn(yu)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var e = Xa(t);
      } catch (i) {
        throw i === Ze ? Vn : i;
      }
    else e = t;
    t = Al();
    var a = t.queue, n = a.dispatch;
    return u !== t.memoizedState && (J.flags |= 2048, Je(
      9,
      { destroy: void 0 },
      Vv.bind(null, a, u),
      null
    )), [e, n, l];
  }
  function Vv(l, t) {
    l.action = t;
  }
  function ps(l) {
    var t = Al(), u = ml;
    if (u !== null)
      return As(t, u, l);
    Al(), t = t.memoizedState, u = Al();
    var e = u.queue.dispatch;
    return u.memoizedState = l, [t, e, !1];
  }
  function Je(l, t, u, e) {
    return l = { tag: l, create: u, deps: e, inst: t, next: null }, t = J.updateQueue, t === null && (t = In(), J.updateQueue = t), u = t.lastEffect, u === null ? t.lastEffect = l.next = l : (e = u.next, u.next = l, l.next = e, t.lastEffect = l), l;
  }
  function Ms() {
    return Al().memoizedState;
  }
  function li(l, t, u, e) {
    var a = Fl();
    J.flags |= l, a.memoizedState = Je(
      1 | t,
      { destroy: void 0 },
      u,
      e === void 0 ? null : e
    );
  }
  function ti(l, t, u, e) {
    var a = Al();
    e = e === void 0 ? null : e;
    var n = a.memoizedState.inst;
    ml !== null && e !== null && wf(e, ml.memoizedState.deps) ? a.memoizedState = Je(t, n, u, e) : (J.flags |= l, a.memoizedState = Je(
      1 | t,
      n,
      u,
      e
    ));
  }
  function Cs(l, t) {
    li(8390656, 8, l, t);
  }
  function ec(l, t) {
    ti(2048, 8, l, t);
  }
  function Lv(l) {
    J.flags |= 4;
    var t = J.updateQueue;
    if (t === null)
      t = In(), J.updateQueue = t, t.events = [l];
    else {
      var u = t.events;
      u === null ? t.events = [l] : u.push(l);
    }
  }
  function Ds(l) {
    var t = Al().memoizedState;
    return Lv({ ref: t, nextImpl: l }), function() {
      if ((ol & 2) !== 0) throw Error(o(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function Us(l, t) {
    return ti(4, 2, l, t);
  }
  function Rs(l, t) {
    return ti(4, 4, l, t);
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
    u = u != null ? u.concat([l]) : null, ti(4, 4, Hs.bind(null, t, l), u);
  }
  function ac() {
  }
  function js(l, t) {
    var u = Al();
    t = t === void 0 ? null : t;
    var e = u.memoizedState;
    return t !== null && wf(t, e[1]) ? e[0] : (u.memoizedState = [l, t], l);
  }
  function Ys(l, t) {
    var u = Al();
    t = t === void 0 ? null : t;
    var e = u.memoizedState;
    if (t !== null && wf(t, e[1]))
      return e[0];
    if (e = l(), me) {
      zu(!0);
      try {
        l();
      } finally {
        zu(!1);
      }
    }
    return u.memoizedState = [e, t], e;
  }
  function nc(l, t, u) {
    return u === void 0 || (du & 1073741824) !== 0 && (k & 261930) === 0 ? l.memoizedState = t : (l.memoizedState = u, l = J0(), J.lanes |= l, Gu |= l, u);
  }
  function xs(l, t, u, e) {
    return dt(u, t) ? u : Hu.current !== null ? (l = nc(l, u, e), dt(l, t) || (Cl = !0), l) : (du & 106) === 0 || (du & 1073741824) !== 0 && (k & 261930) === 0 ? (Cl = !0, l.memoizedState = u) : (l = J0(), J.lanes |= l, Gu |= l, t);
  }
  function qs(l, t, u, e, a) {
    var n = L.p;
    L.p = n !== 0 && 8 > n ? n : 8;
    var i = B.T, f = {};
    f.types = i !== null ? i.types : null, B.T = f, cc(l, !1, t, u);
    try {
      var c = a(), m = B.S;
      if (m !== null && m(f, c), c !== null && typeof c == "object" && typeof c.then == "function") {
        var T = Gv(
          c,
          e
        );
        Qa(
          l,
          t,
          T,
          gt(l)
        );
      } else
        Qa(
          l,
          t,
          e,
          gt(l)
        );
    } catch (O) {
      Qa(
        l,
        t,
        { then: function() {
        }, status: "rejected", reason: O },
        gt()
      );
    } finally {
      L.p = n, i !== null && f.types !== null && (i.types = f.types), B.T = i;
    }
  }
  function Kv() {
  }
  function ic(l, t, u, e) {
    if (l.tag !== 5) throw Error(o(476));
    var a = Gs(l).queue;
    qs(
      l,
      a,
      t,
      uu,
      u === null ? Kv : function() {
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
        lastRenderedReducer: yu,
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
        lastRenderedReducer: yu,
        lastRenderedState: u
      },
      next: null
    }, l.memoizedState = t, l = l.alternate, l !== null && (l.memoizedState = t), t;
  }
  function Xs(l) {
    var t = Gs(l);
    t.next === null && (t = l.alternate.memoizedState), Qa(
      l,
      t.next.queue,
      {},
      gt()
    );
  }
  function fc() {
    return Zl(sa);
  }
  function Qs() {
    return Al().memoizedState;
  }
  function Zs() {
    return Al().memoizedState;
  }
  function Jv(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var u = gt();
          l = Uu(u);
          var e = Ru(t, l, u);
          e !== null && (nt(e, t, u), ja(e, t, u)), t = { cache: jf() }, l.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function wv(l, t, u) {
    var e = gt();
    u = {
      lane: e,
      revertLane: 0,
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, ui(l) ? Ls(t, u) : (u = Af(l, t, u, e), u !== null && (nt(u, l, e), Ks(u, t, e)));
  }
  function Vs(l, t, u) {
    var e = gt();
    Qa(l, t, u, e);
  }
  function Qa(l, t, u, e) {
    var a = {
      lane: e,
      revertLane: 0,
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (ui(l)) Ls(t, a);
    else {
      var n = l.alternate;
      if (l.lanes === 0 && (n === null || n.lanes === 0) && (n = t.lastRenderedReducer, n !== null))
        try {
          var i = t.lastRenderedState, f = n(i, u);
          if (a.hasEagerState = !0, a.eagerState = f, dt(f, i))
            return Hn(l, t, a, 0), gl === null && Rn(), !1;
        } catch {
        }
      if (u = Af(l, t, a, e), u !== null)
        return nt(u, l, e), Ks(u, t, e), !0;
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
    }, ui(l)) {
      if (t) throw Error(o(479));
    } else
      t = Af(
        l,
        u,
        e,
        2
      ), t !== null && nt(t, l, 2);
  }
  function ui(l) {
    var t = l.alternate;
    return l === J || t !== null && t === J;
  }
  function Ls(l, t) {
    Le = $n = !0;
    var u = l.pending;
    u === null ? t.next = t : (t.next = u.next, u.next = t), l.pending = t;
  }
  function Ks(l, t, u) {
    if ((u & 4194048) !== 0) {
      var e = t.lanes;
      e &= l.pendingLanes, u |= e, t.lanes = u, Jo(l, u);
    }
  }
  var ei = {
    readContext: Zl,
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
    readContext: Zl,
    use: kn,
    useCallback: function(l, t) {
      return Fl().memoizedState = [
        l,
        t === void 0 ? null : t
      ], l;
    },
    useContext: Zl,
    useEffect: Cs,
    useImperativeHandle: function(l, t, u) {
      u = u != null ? u.concat([l]) : null, li(
        4194308,
        4,
        Hs.bind(null, t, l),
        u
      );
    },
    useLayoutEffect: function(l, t) {
      return li(4194308, 4, l, t);
    },
    useInsertionEffect: function(l, t) {
      li(4, 2, l, t);
    },
    useMemo: function(l, t) {
      var u = Fl();
      t = t === void 0 ? null : t;
      var e = l();
      if (me) {
        zu(!0);
        try {
          l();
        } finally {
          zu(!1);
        }
      }
      return u.memoizedState = [e, t], e;
    },
    useReducer: function(l, t, u) {
      var e = Fl();
      if (u !== void 0) {
        var a = u(t);
        if (me) {
          zu(!0);
          try {
            u(t);
          } finally {
            zu(!1);
          }
        }
      } else a = t;
      return e.memoizedState = e.baseState = a, l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l,
        lastRenderedState: a
      }, e.queue = l, l = l.dispatch = wv.bind(
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
      l = tc(l);
      var t = l.queue, u = Vs.bind(null, J, t);
      return t.dispatch = u, [l.memoizedState, u];
    },
    useDebugValue: ac,
    useDeferredValue: function(l, t) {
      var u = Fl();
      return nc(u, l, t);
    },
    useTransition: function() {
      var l = tc(!1);
      return l = qs.bind(
        null,
        J,
        l.queue,
        !0,
        !1
      ), Fl().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, t, u) {
      var e = J, a = Fl();
      if (W) {
        if (u === void 0)
          throw Error(o(407));
        u = u();
      } else {
        if (u = t(), gl === null)
          throw Error(o(349));
        (k & 127) !== 0 || ys(e, t, u);
      }
      a.memoizedState = u;
      var n = { value: u, getSnapshot: t };
      return a.queue = n, Cs(ms.bind(null, e, n, l), [
        l
      ]), e.flags |= 2048, Je(
        9,
        { destroy: void 0 },
        vs.bind(
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
      if (W) {
        var u = Jt, e = Kt;
        u = (e & ~(1 << 32 - rt(e) - 1)).toString(32) + u, t = "_" + t + "R_" + u, u = Fn++, 0 < u && (t += "H" + u.toString(32)), t += "_";
      } else
        u = Xv++, t = "_" + t + "r_" + u.toString(32) + "_";
      return l.memoizedState = t;
    },
    useHostTransitionStatus: fc,
    useFormState: _s,
    useActionState: _s,
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
      return t.queue = u, t = cc.bind(
        null,
        J,
        !0,
        u
      ), u.dispatch = t, [l, t];
    },
    useMemoCache: kf,
    useCacheRefresh: function() {
      return Fl().memoizedState = Jv.bind(
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
  }, ws = {
    readContext: Zl,
    use: kn,
    useCallback: js,
    useContext: Zl,
    useEffect: ec,
    useImperativeHandle: Bs,
    useInsertionEffect: Us,
    useLayoutEffect: Rs,
    useMemo: Ys,
    useReducer: Pn,
    useRef: Ms,
    useState: function() {
      return Pn(yu);
    },
    useDebugValue: ac,
    useDeferredValue: function(l, t) {
      var u = Al();
      return xs(
        u,
        ml.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = Pn(yu)[0], t = Al().memoizedState;
      return [
        typeof l == "boolean" ? l : Xa(l),
        t
      ];
    },
    useSyncExternalStore: ds,
    useId: Qs,
    useHostTransitionStatus: fc,
    useFormState: Ns,
    useActionState: Ns,
    useOptimistic: function(l, t) {
      var u = Al();
      return Ss(u, ml, l, t);
    },
    useMemoCache: kf,
    useCacheRefresh: Zs,
    useEffectEvent: Ds
  }, Wv = {
    readContext: Zl,
    use: kn,
    useCallback: js,
    useContext: Zl,
    useEffect: ec,
    useImperativeHandle: Bs,
    useInsertionEffect: Us,
    useLayoutEffect: Rs,
    useMemo: Ys,
    useReducer: lc,
    useRef: Ms,
    useState: function() {
      return lc(yu);
    },
    useDebugValue: ac,
    useDeferredValue: function(l, t) {
      var u = Al();
      return ml === null ? nc(u, l, t) : xs(
        u,
        ml.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = lc(yu)[0], t = Al().memoizedState;
      return [
        typeof l == "boolean" ? l : Xa(l),
        t
      ];
    },
    useSyncExternalStore: ds,
    useId: Qs,
    useHostTransitionStatus: fc,
    useFormState: ps,
    useActionState: ps,
    useOptimistic: function(l, t) {
      var u = Al();
      return ml !== null ? Ss(u, ml, l, t) : (u.baseState = l, [l, u.queue.dispatch]);
    },
    useMemoCache: kf,
    useCacheRefresh: Zs,
    useEffectEvent: Ds
  };
  function oc(l, t, u, e) {
    t = l.memoizedState, u = u(e, t), u = u == null ? t : $({}, t, u), l.memoizedState = u, l.lanes === 0 && (l.updateQueue.baseState = u);
  }
  var rc = {
    enqueueSetState: function(l, t, u) {
      l = l._reactInternals;
      var e = gt(), a = Uu(e);
      a.payload = t, u != null && (a.callback = u), t = Ru(l, a, e), t !== null && (nt(t, l, e), ja(t, l, e));
    },
    enqueueReplaceState: function(l, t, u) {
      l = l._reactInternals;
      var e = gt(), a = Uu(e);
      a.tag = 1, a.payload = t, u != null && (a.callback = u), t = Ru(l, a, e), t !== null && (nt(t, l, e), ja(t, l, e));
    },
    enqueueForceUpdate: function(l, t) {
      l = l._reactInternals;
      var u = gt(), e = Uu(u);
      e.tag = 2, t != null && (e.callback = t), t = Ru(l, e, u), t !== null && (nt(t, l, u), ja(t, l, u));
    }
  };
  function Ws(l, t, u, e, a, n, i) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(e, n, i) : t.prototype && t.prototype.isPureReactComponent ? !pa(u, e) || !pa(a, n) : !0;
  }
  function $s(l, t, u, e) {
    l = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(u, e), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(u, e), t.state !== l && rc.enqueueReplaceState(t, t.state, null);
  }
  function he(l, t) {
    var u = t;
    if ("ref" in t) {
      u = {};
      for (var e in t)
        e !== "ref" && (u[e] = t[e]);
    }
    if (l = l.defaultProps) {
      u === t && (u = $({}, u));
      for (var a in l)
        u[a] === void 0 && (u[a] = l[a]);
    }
    return u;
  }
  function Fs(l) {
    Un(l);
  }
  function Is(l) {
    console.error(l);
  }
  function ks(l) {
    Un(l);
  }
  function ai(l, t) {
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
    return u = Uu(u), u.tag = 3, u.payload = { element: null }, u.callback = function() {
      ai(l, t);
    }, u;
  }
  function l0(l) {
    return l = Uu(l), l.tag = 3, l;
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
    var i = u.stateNode;
    i !== null && typeof i.componentDidCatch == "function" && (l.callback = function() {
      Ps(t, u, e), typeof a != "function" && (Xu === null ? Xu = /* @__PURE__ */ new Set([this]) : Xu.add(this));
      var f = e.stack;
      this.componentDidCatch(e.value, {
        componentStack: f !== null ? f : ""
      });
    });
  }
  function $v(l, t, u, e, a) {
    if (u.flags |= 32768, e !== null && typeof e == "object" && typeof e.then == "function") {
      if (t = u.alternate, t !== null && ce(
        t,
        u,
        a,
        !0
      ), u = Vl.current, u !== null) {
        switch (u.tag) {
          case 31:
          case 13:
          case 19:
            return Wl === null ? Ni() : u.alternate === null && Nl === 0 && (Nl = 3), u.flags &= -257, u.flags |= 65536, u.lanes = a, e === Ln ? u.flags |= 16384 : (t = u.updateQueue, t === null ? u.updateQueue = /* @__PURE__ */ new Set([e]) : t.add(e), $c(l, e, a)), !1;
          case 22:
            return u.flags |= 65536, e === Ln ? u.flags |= 16384 : (t = u.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([e])
            }, u.updateQueue = t) : (u = t.retryQueue, u === null ? t.retryQueue = /* @__PURE__ */ new Set([e]) : u.add(e)), $c(l, e, a)), !1;
        }
        throw Error(o(435, u.tag));
      }
      return $c(l, e, a), Ni(), !1;
    }
    if (W)
      return t = Vl.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = a, e !== Uf && (l = Error(o(422), { cause: e }), Da(pt(l, u)))) : (e !== Uf && (t = Error(o(423), {
        cause: e
      }), Da(
        pt(t, u)
      )), l = l.current.alternate, l.flags |= 65536, a &= -a, l.lanes |= a, e = pt(e, u), a = sc(
        l.stateNode,
        e,
        a
      ), Qf(l, a), Nl !== 4 && (Nl = 2)), !1;
    var n = Error(o(520), { cause: e });
    if (n = pt(n, u), $a === null ? $a = [n] : $a.push(n), Nl !== 4 && (Nl = 2), t === null) return !0;
    e = pt(e, u), u = t;
    do {
      switch (u.tag) {
        case 3:
          return u.flags |= 65536, l = a & -a, u.lanes |= l, l = sc(u.stateNode, e, l), Qf(u, l), !1;
        case 1:
          if (t = u.type, n = u.stateNode, (u.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (Xu === null || !Xu.has(n))))
            return u.flags |= 65536, a &= -a, u.lanes |= a, a = l0(a), t0(
              a,
              l,
              u,
              e
            ), Qf(u, a), !1;
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
    t.child = l === null ? ns(t, null, u, e) : ve(
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
      var i = {};
      for (var f in e)
        f !== "ref" && (i[f] = e[f]);
    } else i = e;
    return oe(t), e = Wf(
      l,
      t,
      u,
      i,
      n,
      a
    ), f = $f(), l !== null && !Cl ? (Ff(l, t, a), vu(l, t, a)) : (W && f && xn(t), t.flags |= 1, Ul(l, t, e, a), t.child);
  }
  function e0(l, t, u, e, a) {
    if (l === null) {
      var n = u.type;
      return typeof n == "function" && !pf(n) && n.defaultProps === void 0 && u.compare === null ? (t.tag = 15, t.type = n, a0(
        l,
        t,
        n,
        e,
        a
      )) : (l = jn(
        u.type,
        null,
        e,
        t,
        t.mode,
        a
      ), l.ref = t.ref, l.return = t, t.child = l);
    }
    if (n = l.child, !Tc(l, a)) {
      var i = n.memoizedProps;
      if (u = u.compare, u = u !== null ? u : pa, u(i, e) && l.ref === t.ref)
        return vu(l, t, a);
    }
    return t.flags |= 1, l = cu(n, e), l.ref = t.ref, l.return = t, t.child = l;
  }
  function a0(l, t, u, e, a) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (pa(n, e) && l.ref === t.ref)
        if (Cl = !1, t.pendingProps = e = n, Tc(l, a))
          (l.flags & 131072) !== 0 && (Cl = !0);
        else
          return t.lanes = l.lanes, vu(l, t, a);
    }
    return yc(
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
        return i0(
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
        ), n !== null ? cs(t, n) : Vf(), os(t);
      else
        return e = t.lanes = 536870912, i0(
          l,
          t,
          n !== null ? n.baseLanes | u : u,
          u,
          e
        );
    } else
      n !== null ? (Zn(t, n.cachePool), cs(t, n), ju(), t.memoizedState = null) : (l !== null && Zn(t, null), Vf(), ju());
    return Ul(l, t, a, u), t.child;
  }
  function Za(l, t) {
    return l !== null && l.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function i0(l, t, u, e, a) {
    var n = xf();
    return n = n === null ? null : { parent: pl._currentValue, pool: n }, t.memoizedState = {
      baseLanes: u,
      cachePool: n
    }, l !== null && Zn(t, null), Vf(), os(t), l !== null && ce(l, t, e, !0), t.childLanes = a, null;
  }
  function ni(l, t) {
    return t = ii(
      { mode: t.mode, children: t.children },
      l.mode
    ), t.ref = l.ref, l.child = t, t.return = l, t;
  }
  function f0(l, t, u) {
    return ve(t, l.child, null, u), l = ni(t, t.pendingProps), l.flags |= 2, yt(t), t.memoizedState = null, l;
  }
  function Fv(l, t, u) {
    var e = t.pendingProps, a = (t.flags & 128) !== 0;
    if (t.flags &= -129, l === null) {
      if (W) {
        if (e.mode === "hidden")
          return l = ni(t, e), t.lanes = 536870912, l.memoizedState = { baseLanes: 0, cachePool: null }, Za(null, l);
        if (Kf(t), (l = Tl) ? (l = Hd(
          l,
          Dt
        ), l = l !== null && l.data === "&" ? l : null, l !== null && (t.memoizedState = {
          dehydrated: l,
          treeContext: Nu !== null ? { id: Kt, overflow: Jt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, u = Lr(l), u.return = t, t.child = u, jl = t, Tl = null)) : l = null, l === null) throw pu(t);
        return t.lanes = 536870912, null;
      }
      return ni(t, e);
    }
    var n = l.memoizedState;
    if (n !== null) {
      var i = n.dehydrated;
      if (Kf(t), a)
        if (t.flags & 256)
          t.flags &= -257, t = f0(
            l,
            t,
            u
          );
        else if (t.memoizedState !== null)
          t.child = l.child, t.flags |= 128, t = null;
        else throw Error(o(558));
      else if (Cl || ce(l, t, u, !1), a = (u & l.childLanes) !== 0, Cl || a) {
        if (Hu.current === null) {
          if (e = gl, e !== null && (i = wo(e, u), i !== 0 && i !== n.retryLane))
            throw n.retryLane = i, ae(l, i), nt(e, l, i), dc;
          Ni();
        }
        t = f0(
          l,
          t,
          u
        );
      } else
        l = n.treeContext, Tl = Rt(i.nextSibling), jl = t, W = !0, Au = null, Dt = !1, l !== null && wr(t, l), t = ni(t, e), t.flags |= 134221824;
      return t;
    }
    return l = cu(l.child, {
      mode: e.mode,
      children: e.children
    }), l.ref = t.ref, t.child = l, l.return = t, l;
  }
  function we(l, t) {
    var u = t.ref;
    if (u === null)
      l !== null && l.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof u != "function" && typeof u != "object")
        throw Error(o(284));
      (l === null || l.ref !== u) && (t.flags |= 4194816);
    }
  }
  function yc(l, t, u, e, a) {
    return oe(t), u = Wf(
      l,
      t,
      u,
      e,
      void 0,
      a
    ), e = $f(), l !== null && !Cl ? (Ff(l, t, a), vu(l, t, a)) : (W && e && xn(t), t.flags |= 1, Ul(l, t, u, a), t.child);
  }
  function c0(l, t, u, e, a, n) {
    return oe(t), t.updateQueue = null, u = ss(
      t,
      e,
      u,
      a
    ), rs(l), e = $f(), l !== null && !Cl ? (Ff(l, t, n), vu(l, t, n)) : (W && e && xn(t), t.flags |= 1, Ul(l, t, u, n), t.child);
  }
  function o0(l, t, u, e, a) {
    if (oe(t), t.stateNode === null) {
      var n = xe, i = u.contextType;
      typeof i == "object" && i !== null && (n = Zl(i)), n = new u(e, n), t.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = rc, t.stateNode = n, n._reactInternals = t, n = t.stateNode, n.props = e, n.state = t.memoizedState, n.refs = {}, Gf(t), i = u.contextType, n.context = typeof i == "object" && i !== null ? Zl(i) : xe, n.state = t.memoizedState, i = u.getDerivedStateFromProps, typeof i == "function" && (oc(
        t,
        u,
        i,
        e
      ), n.state = t.memoizedState), typeof u.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (i = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), i !== n.state && rc.enqueueReplaceState(n, n.state, null), xa(t, e, n, a), Ya(), n.state = t.memoizedState), typeof n.componentDidMount == "function" && (t.flags |= 4194308), e = !0;
    } else if (l === null) {
      n = t.stateNode;
      var f = t.memoizedProps, c = he(u, f);
      n.props = c;
      var m = n.context, T = u.contextType;
      i = xe, typeof T == "object" && T !== null && (i = Zl(T));
      var O = u.getDerivedStateFromProps;
      T = typeof O == "function" || typeof n.getSnapshotBeforeUpdate == "function", f = t.pendingProps !== f, T || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (f || m !== i) && $s(
        t,
        n,
        e,
        i
      ), Du = !1;
      var y = t.memoizedState;
      n.state = y, xa(t, e, n, a), Ya(), m = t.memoizedState, f || y !== m || Du ? (typeof O == "function" && (oc(
        t,
        u,
        O,
        e
      ), m = t.memoizedState), (c = Du || Ws(
        t,
        u,
        c,
        e,
        y,
        m,
        i
      )) ? (T || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = e, t.memoizedState = m), n.props = e, n.state = m, n.context = i, e = c) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), e = !1);
    } else {
      n = t.stateNode, Xf(l, t), i = t.memoizedProps, T = he(u, i), n.props = T, O = t.pendingProps, y = n.context, m = u.contextType, c = xe, typeof m == "object" && m !== null && (c = Zl(m)), f = u.getDerivedStateFromProps, (m = typeof f == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (i !== O || y !== c) && $s(
        t,
        n,
        e,
        c
      ), Du = !1, y = t.memoizedState, n.state = y, xa(t, e, n, a), Ya();
      var S = t.memoizedState;
      i !== O || y !== S || Du || l !== null && l.dependencies !== null && Xn(l.dependencies) ? (typeof f == "function" && (oc(
        t,
        u,
        f,
        e
      ), S = t.memoizedState), (T = Du || Ws(
        t,
        u,
        T,
        e,
        y,
        S,
        c
      ) || l !== null && l.dependencies !== null && Xn(l.dependencies)) ? (m || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(e, S, c), typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(
        e,
        S,
        c
      )), typeof n.componentDidUpdate == "function" && (t.flags |= 4), typeof n.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || i === l.memoizedProps && y === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || i === l.memoizedProps && y === l.memoizedState || (t.flags |= 1024), t.memoizedProps = e, t.memoizedState = S), n.props = e, n.state = S, n.context = c, e = T) : (typeof n.componentDidUpdate != "function" || i === l.memoizedProps && y === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || i === l.memoizedProps && y === l.memoizedState || (t.flags |= 1024), e = !1);
    }
    return n = e, we(l, t), e = (t.flags & 128) !== 0, n || e ? (n = t.stateNode, u = e && typeof u.getDerivedStateFromError != "function" ? null : n.render(), t.flags |= 1, l !== null && e ? (t.child = ve(
      t,
      l.child,
      null,
      a
    ), t.child = ve(
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
  function r0(l, t, u, e) {
    return ie(), t.flags |= 256, Ul(l, t, u, e), t.child;
  }
  var vc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function mc(l) {
    return { baseLanes: l, cachePool: Pr() };
  }
  function hc(l, t, u) {
    return l = l !== null ? l.childLanes & ~u : 0, t && (l |= ht), l;
  }
  function s0(l, t, u) {
    var e = t.pendingProps, a = !1, n = (t.flags & 128) !== 0, i;
    if ((i = n) || (i = l !== null && l.memoizedState === null ? !1 : (Ll.current & 2) !== 0), i && (a = !0, t.flags &= -129), i = (t.flags & 32) !== 0, t.flags &= -33, l === null) {
      if (W) {
        if (a ? Bu(t) : ju(), (l = Tl) ? (l = Hd(
          l,
          Dt
        ), l = l !== null && l.data !== "&" ? l : null, l !== null && (t.memoizedState = {
          dehydrated: l,
          treeContext: Nu !== null ? { id: Kt, overflow: Jt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, u = Lr(l), u.return = t, t.child = u, jl = t, Tl = null)) : l = null, l === null) throw pu(t);
        return ho(l) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      return n = e.children, e = e.fallback, a ? (ju(), a = t.mode, n = ii(
        { mode: "hidden", children: n },
        a
      ), e = ne(
        e,
        a,
        u,
        null
      ), n.return = t, e.return = t, n.sibling = e, t.child = n, e = t.child, e.memoizedState = mc(u), e.childLanes = hc(
        l,
        i,
        u
      ), t.memoizedState = vc, Za(null, e)) : (Bu(t), gc(t, n));
    }
    var f = l.memoizedState;
    if (f !== null) {
      var c = f.dehydrated;
      if (c !== null)
        return Iv(
          l,
          t,
          n,
          i,
          e,
          c,
          f,
          u
        );
    }
    return a ? (ju(), a = e.fallback, n = t.mode, f = l.child, c = f.sibling, e = cu(f, {
      mode: "hidden",
      children: e.children
    }), e.subtreeFlags = f.subtreeFlags & 1206910976, c !== null ? a = cu(c, a) : (a = ne(
      a,
      n,
      u,
      null
    ), a.flags |= 2), a.return = t, e.return = t, e.sibling = a, t.child = e, Za(null, e), e = t.child, a = l.child.memoizedState, a === null ? a = mc(u) : (n = a.cachePool, n !== null ? (f = pl._currentValue, n = n.parent !== f ? { parent: f, pool: f } : n) : n = Pr(), a = {
      baseLanes: a.baseLanes | u,
      cachePool: n
    }), e.memoizedState = a, e.childLanes = hc(
      l,
      i,
      u
    ), t.memoizedState = vc, Za(l.child, e)) : (Bu(t), u = l.child, l = u.sibling, u = cu(u, {
      mode: "visible",
      children: e.children
    }), u.return = t, u.sibling = null, l !== null && (i = t.deletions, i === null ? (t.deletions = [l], t.flags |= 16) : i.push(l)), t.child = u, t.memoizedState = null, u);
  }
  function gc(l, t) {
    return t = ii(
      { mode: "visible", children: t },
      l.mode
    ), t.return = l, l.child = t;
  }
  function ii(l, t) {
    return l = tt(22, l, null, t), l.lanes = 0, l;
  }
  function fi(l, t, u) {
    return ve(t, l.child, null, u), l = gc(
      t,
      t.pendingProps.children
    ), l.flags |= 2, t.memoizedState = null, l;
  }
  function Iv(l, t, u, e, a, n, i, f) {
    if (u)
      return t.flags & 256 ? (Bu(t), t.flags &= -257, fi(
        l,
        t,
        f
      )) : t.memoizedState !== null ? (ju(), t.child = l.child, t.flags |= 128, null) : (ju(), n = a.fallback, i = t.mode, a = ii(
        { mode: "visible", children: a.children },
        i
      ), n = ne(
        n,
        i,
        f,
        null
      ), n.flags |= 2, a.return = t, n.return = t, a.sibling = n, t.child = a, ve(t, l.child, null, f), a = t.child, a.memoizedState = mc(f), a.childLanes = hc(
        l,
        e,
        f
      ), t.memoizedState = vc, Za(null, a));
    if (Bu(t), ho(n)) {
      if (e = n.nextSibling && n.nextSibling.dataset, e) var c = e.dgst;
      return e = c, e !== "" && (a = Error(o(419)), a.stack = "", a.digest = e, Da({ value: a, source: null, stack: null })), fi(
        l,
        t,
        f
      );
    }
    if (Cl || ce(l, t, f, !1), e = (f & l.childLanes) !== 0, Cl || e) {
      if (Hu.current !== null)
        return fi(
          l,
          t,
          f
        );
      if (e = gl, e !== null && (a = wo(
        e,
        f
      ), a !== 0 && a !== i.retryLane))
        throw i.retryLane = a, ae(l, a), nt(e, l, a), dc;
      return mo(n) || Ni(), fi(
        l,
        t,
        f
      );
    }
    return mo(n) ? (t.flags |= 192, t.child = l.child, null) : (l = i.treeContext, Tl = Rt(n.nextSibling), jl = t, W = !0, Au = null, Dt = !1, l !== null && wr(t, l), t = gc(
      t,
      a.children
    ), t.flags |= 134221824, t);
  }
  function d0(l, t, u) {
    l.lanes |= t;
    var e = l.alternate;
    e !== null && (e.lanes |= t), Gn(l.return, t, u);
  }
  function y0(l) {
    for (var t = null; l !== null; ) {
      var u = l.alternate;
      u !== null && Wn(u) === null && (t = l), l = l.sibling;
    }
    return t;
  }
  function ci(l, t, u, e, a, n) {
    var i = l.memoizedState;
    i === null ? l.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: e,
      tail: u,
      tailMode: a,
      treeForkCount: n
    } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = e, i.tail = u, i.tailMode = a, i.treeForkCount = n);
  }
  function Sc(l) {
    var t = l.child;
    for (l.child = null; t !== null; ) {
      var u = t.sibling;
      t.sibling = l.child, l.child = t, t = u;
    }
  }
  function bc(l, t, u) {
    var e = t.pendingProps, a = e.revealOrder, n = e.tail;
    e = e.children;
    var i = Ll.current;
    if (t.flags & 128)
      return qa(t, i), null;
    var f = (i & 2) !== 0;
    if (f ? (i = i & 1 | 2, t.flags |= 128) : i &= 1, qa(t, i), a === "backwards" && l !== null ? (Sc(l), Ul(l, t, e, u), Sc(l)) : Ul(l, t, e, u), e = W ? Ca : 0, !f && l !== null && (l.flags & 128) !== 0)
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
        u = y0(t.child), u === null ? (a = t.child, t.child = null) : (a = u.sibling, u.sibling = null, Sc(t)), ci(
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
          if (l = a.alternate, l !== null && Wn(l) === null) {
            t.child = a;
            break;
          }
          l = a.sibling, a.sibling = u, u = a, a = l;
        }
        ci(
          t,
          !0,
          u,
          null,
          n,
          e
        );
        break;
      case "together":
        ci(
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
        u = y0(t.child), u === null ? (a = t.child, t.child = null) : (a = u.sibling, u.sibling = null), ci(
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
  function v0(l, t, u) {
    var e = t.pendingProps;
    return Mu(t, t.type, e.value), Ul(l, t, e.children, u), t.child;
  }
  function vu(l, t, u) {
    if (l !== null && (t.dependencies = l.dependencies), Gu |= t.lanes, (u & t.childLanes) === 0)
      if (l !== null) {
        if (ce(
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
  function Tc(l, t) {
    return (l.lanes & t) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && Xn(l)));
  }
  function kv(l, t, u) {
    switch (t.tag) {
      case 3:
        yn(t, t.stateNode.containerInfo), Mu(t, pl, l.memoizedState.cache), ie();
        break;
      case 27:
      case 5:
        Ji(t);
        break;
      case 4:
        yn(t, t.stateNode.containerInfo);
        break;
      case 10:
        Mu(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, Kf(t), null;
        break;
      case 13:
        var e = t.memoizedState;
        if (e !== null) {
          if (e.dehydrated !== null)
            return Bu(t), t.flags |= 128, null;
          e = ce(
            l,
            t,
            u,
            !1
          );
          var a = t.child.childLanes;
          return e || (u & a) !== 0 ? s0(l, t, u) : (Bu(t), l = vu(
            l,
            t,
            u
          ), l !== null ? l.sibling : null);
        }
        Bu(t);
        break;
      case 19:
        if (t.flags & 128)
          return bc(
            l,
            t,
            u
          );
        if (a = (l.flags & 128) !== 0, e = (u & t.childLanes) !== 0, e || (ce(
          l,
          t,
          u,
          !1
        ), e = (u & t.childLanes) !== 0), a) {
          if (e)
            return bc(
              l,
              t,
              u
            );
          t.flags |= 128;
        }
        if (a = t.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), qa(t, Ll.current), e) break;
        return null;
      case 22:
        return t.lanes = 0, n0(
          l,
          t,
          u,
          t.pendingProps
        );
      case 24:
        Mu(t, pl, l.memoizedState.cache);
    }
    return vu(l, t, u);
  }
  function m0(l, t, u) {
    if (l !== null)
      if (l.memoizedProps !== t.pendingProps)
        Cl = !0;
      else {
        if (!Tc(l, u) && (t.flags & 128) === 0)
          return Cl = !1, kv(
            l,
            t,
            u
          );
        Cl = (l.flags & 131072) !== 0;
      }
    else
      Cl = !1, W && (t.flags & 1048576) !== 0 && Jr(t, Ca, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        l: {
          var e = t.pendingProps;
          if (l = de(t.elementType), t.type = l, typeof l == "function")
            pf(l) ? (e = he(l, e), t.tag = 1, t = o0(
              null,
              t,
              l,
              e,
              u
            )) : (t.tag = 0, t = yc(
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
              } else if (a === hl) {
                t.tag = 14, t = e0(
                  null,
                  t,
                  l,
                  e,
                  u
                );
                break l;
              } else if (a === Hl) {
                t.tag = 10, t.type = l, t = v0(
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
        return yc(
          l,
          t,
          t.type,
          t.pendingProps,
          u
        );
      case 1:
        return e = t.type, a = he(
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
          if (yn(
            t,
            t.stateNode.containerInfo
          ), l === null) throw Error(o(387));
          e = t.pendingProps;
          var n = t.memoizedState;
          a = n.element, Xf(l, t), xa(t, e, null, u);
          var i = t.memoizedState;
          if (e = i.cache, Mu(t, pl, e), e !== n.cache && Bf(
            t,
            [pl],
            u,
            !0
          ), Ya(), e = i.element, n.isDehydrated)
            if (n = {
              element: e,
              isDehydrated: !1,
              cache: i.cache
            }, t.updateQueue.baseState = n, t.memoizedState = n, t.flags & 256) {
              t = r0(
                l,
                t,
                e,
                u
              );
              break l;
            } else if (e !== a) {
              a = pt(
                Error(o(424)),
                t
              ), Da(a), t = r0(
                l,
                t,
                e,
                u
              );
              break l;
            } else
              for (l = t.stateNode.containerInfo, l.nodeType === 9 ? l = l.body : l = l.nodeName === "HTML" ? l.ownerDocument.body : l, Tl = Rt(l.firstChild), jl = t, W = !0, Au = null, Dt = !0, u = ns(
                t,
                null,
                e,
                u
              ), t.child = u; u; )
                u.flags = u.flags & -3 | 134221824, u = u.sibling;
          else {
            if (ie(), e === a) {
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
        return we(l, t), l === null ? (u = Xd(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = u : W || (t.stateNode = bd(
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
        return Ji(t), l === null && W && (e = t.stateNode = Yd(
          t.type,
          t.pendingProps,
          Tu.current
        ), jl = t, Dt = !0, a = Tl, Vu(t.type) ? (go = a, Tl = Rt(e.firstChild)) : Tl = a), Ul(
          l,
          t,
          t.pendingProps.children,
          u
        ), we(l, t), l === null && (t.flags |= 4194304), t.child;
      case 5:
        return l === null && W && ((a = e = Tl) && (e = Jm(
          e,
          t.type,
          t.pendingProps,
          Dt
        ), e !== null ? (t.stateNode = e, jl = t, Tl = Rt(e.firstChild), Dt = !1, a = !0) : a = !1), a || pu(t)), Ji(t), a = t.type, n = t.pendingProps, i = l !== null ? l.memoizedProps : null, e = n.children, fo(a, n) ? e = null : i !== null && fo(a, i) && (t.flags |= 32), t.memoizedState !== null && (a = Wf(
          l,
          t,
          Qv,
          null,
          null,
          u
        ), sa._currentValue = a), we(l, t), Ul(l, t, e, u), t.child;
      case 6:
        return l === null && W && ((l = u = Tl) && (u = wm(
          u,
          t.pendingProps,
          Dt
        ), u !== null ? (t.stateNode = u, jl = t, Tl = null, l = !0) : l = !1), l || pu(t)), null;
      case 13:
        return s0(l, t, u);
      case 4:
        return yn(
          t,
          t.stateNode.containerInfo
        ), e = t.pendingProps, l === null ? t.child = ve(
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
        return e = t.pendingProps, we(l, t), Ul(l, t, e, u), t.child;
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
        return v0(l, t, u);
      case 9:
        return a = t.type._context, e = t.pendingProps.children, oe(t), a = Zl(a), e = e(a), t.flags |= 1, Ul(l, t, e, u), t.child;
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
        return bc(l, t, u);
      case 31:
        return Fv(l, t, u);
      case 22:
        return n0(
          l,
          t,
          u,
          t.pendingProps
        );
      case 24:
        return oe(t), e = Zl(pl), l === null ? (a = xf(), a === null && (a = gl, n = jf(), a.pooledCache = n, n.refCount++, n !== null && (a.pooledCacheLanes |= u), a = n), t.memoizedState = { parent: e, cache: a }, Gf(t), Mu(t, pl, a)) : ((l.lanes & u) !== 0 && (Xf(l, t), xa(t, null, null, u), Ya()), a = l.memoizedState, n = t.memoizedState, a.parent !== e ? (a = { parent: e, cache: e }, t.memoizedState = a, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = a), Mu(t, pl, e)) : (e = n.cache, Mu(t, pl, e), e !== a.cache && Bf(
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
        }), e = t.pendingProps, e.name != null && e.name !== "auto" ? t.flags |= l === null ? 18882560 : 18874368 : W && xn(t), l !== null && l.memoizedProps.name !== e.name ? t.flags |= 4194816 : we(l, t), Ul(l, t, e.children, u), t.child;
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
        else if (F0()) l.flags |= 8192;
        else
          throw ye = Ln, qf;
    } else l.flags &= -16777217;
  }
  function h0(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !Kd(t))
      if (F0()) l.flags |= 8192;
      else
        throw ye = Ln, qf;
  }
  function oi(l, t) {
    t !== null && (l.flags |= 4), l.flags & 16384 && (t = l.tag !== 22 ? Lo() : 536870912, l.lanes |= t, ke |= t);
  }
  function Va(l, t) {
    if (!W)
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
  function El(l) {
    var t = l.alternate !== null && l.alternate.child === l.child, u = 0, e = 0;
    if (t)
      for (var a = l.child; a !== null; )
        u |= a.lanes | a.childLanes, e |= a.subtreeFlags & 1206910976, e |= a.flags & 1206910976, a.return = l, a = a.sibling;
    else
      for (a = l.child; a !== null; )
        u |= a.lanes | a.childLanes, e |= a.subtreeFlags, e |= a.flags, a.return = l, a = a.sibling;
    return l.subtreeFlags |= e, l.childLanes = u, t;
  }
  function Pv(l, t, u) {
    var e = t.pendingProps;
    switch (Df(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return El(t), null;
      case 1:
        return El(t), null;
      case 3:
        return u = t.stateNode, e = null, l !== null && (e = l.memoizedState.cache), t.memoizedState.cache !== e && (t.flags |= 2048), su(pl), _e(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (l === null || l.child === null) && (Xe(t) ? mu(t) : l === null || l.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Rf())), El(t), null;
      case 26:
        var a = t.type, n = t.memoizedState;
        return l === null ? (mu(t), n !== null ? (El(t), h0(t, n)) : (El(t), Ec(
          t,
          a,
          null,
          e,
          u
        ))) : n ? n !== l.memoizedState ? (mu(t), El(t), h0(t, n)) : (El(t), t.flags &= -16777217) : (l = l.memoizedProps, l !== e && mu(t), El(t), Ec(
          t,
          a,
          l,
          e,
          u
        )), null;
      case 27:
        if (vn(t), u = Tu.current, a = t.type, l !== null && t.stateNode != null)
          l.memoizedProps !== e && mu(t);
        else {
          if (!e) {
            if (t.stateNode === null)
              throw Error(o(166));
            return El(t), t.subtreeFlags &= -33554433, null;
          }
          l = Vt.current, Xe(t) ? Wr(t) : (l = Yd(a, e, u), t.stateNode = l, mu(t));
        }
        return El(t), t.subtreeFlags &= -33554433, null;
      case 5:
        if (vn(t), a = t.type, l !== null && t.stateNode != null)
          l.memoizedProps !== e && mu(t);
        else {
          if (!e) {
            if (t.stateNode === null)
              throw Error(o(166));
            return El(t), t.subtreeFlags &= -33554433, null;
          }
          if (n = Vt.current, Xe(t))
            Wr(t);
          else {
            var i = ln(
              Tu.current
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
                    n = typeof e.is == "string" ? i.createElement("select", {
                      is: e.is
                    }) : i.createElement("select"), e.multiple ? n.multiple = !0 : e.size && (n.size = e.size);
                    break;
                  default:
                    n = typeof e.is == "string" ? i.createElement(a, { is: e.is }) : i.createElement(a);
                }
            }
            n[Ql] = t, n[lt] = e;
            l: for (i = t.child; i !== null; ) {
              if (i.tag === 5 || i.tag === 6)
                n.appendChild(i.stateNode);
              else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                i.child.return = i, i = i.child;
                continue;
              }
              if (i === t) break l;
              for (; i.sibling === null; ) {
                if (i.return === null || i.return === t)
                  break l;
                i = i.return;
              }
              i.sibling.return = i.return, i = i.sibling;
            }
            t.stateNode = n;
            l: switch (Jl(n, a, e), a) {
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
        return El(t), t.subtreeFlags &= -33554433, Ec(
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
          if (l = Tu.current, Xe(t)) {
            if (l = t.stateNode, u = t.memoizedProps, e = null, a = jl, a !== null)
              switch (a.tag) {
                case 27:
                case 5:
                  e = a.memoizedProps;
              }
            l[Ql] = t, l = !!(l.nodeValue === u || e !== null && e.suppressHydrationWarning === !0 || md(l.nodeValue, u)), l || pu(t, !0);
          } else
            l = ln(l).createTextNode(
              e
            ), l[Ql] = t, t.stateNode = l;
        }
        return El(t), null;
      case 31:
        if (u = t.memoizedState, l === null || l.memoizedState !== null) {
          if (e = Xe(t), u !== null) {
            if (l === null) {
              if (!e) throw Error(o(318));
              if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(o(557));
              l[Ql] = t;
            } else
              ie(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            El(t), l = !1;
          } else
            u = Rf(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = u), l = !0;
          if (!l)
            return t.flags & 256 ? (yt(t), t) : (yt(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(o(558));
        }
        return El(t), null;
      case 13:
        if (e = t.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (a = Xe(t), e !== null && e.dehydrated !== null) {
            if (l === null) {
              if (!a) throw Error(o(318));
              if (a = t.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(o(317));
              a[Ql] = t;
            } else
              ie(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            El(t), a = !1;
          } else
            a = Rf(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = a), a = !0;
          if (!a)
            return t.flags & 256 ? (yt(t), t) : (yt(t), null);
        }
        return yt(t), (t.flags & 128) !== 0 ? (t.lanes = u, t) : (u = e !== null, l = l !== null && l.memoizedState !== null, u && (e = t.child, a = null, e.alternate !== null && e.alternate.memoizedState !== null && e.alternate.memoizedState.cachePool !== null && (a = e.alternate.memoizedState.cachePool.pool), n = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), n !== a && (e.flags |= 2048)), u !== l && u && (t.child.flags |= 8192), oi(t, t.updateQueue), El(t), null);
      case 4:
        return _e(), l === null && uo(t.stateNode.containerInfo), t.flags |= 67108864, El(t), null;
      case 10:
        return su(t.type), El(t), null;
      case 19:
        if (Jf(t), e = t.memoizedState, e === null) return El(t), null;
        if (a = (t.flags & 128) !== 0, n = e.rendering, n === null)
          if (a) Va(e, !1);
          else {
            if (Nl !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = t.child; l !== null; ) {
                if (n = Wn(l), n !== null) {
                  for (t.flags |= 128, Va(e, !1), l = n.updateQueue, t.updateQueue = l, oi(t, l), t.subtreeFlags = 0, l = u, u = t.child; u !== null; )
                    Vr(u, l), u = u.sibling;
                  return qa(
                    t,
                    Ll.current & 1 | 2
                  ), W && ou(t, e.treeForkCount), t.child;
                }
                l = l.sibling;
              }
            e.tail !== null && ct() > Ei && (t.flags |= 128, a = !0, Va(e, !1), t.lanes = 4194304);
          }
        else {
          if (!a)
            if (l = Wn(n), l !== null) {
              if (t.flags |= 128, a = !0, l = l.updateQueue, t.updateQueue = l, oi(t, l), Va(e, !0), e.tail === null && e.tailMode !== "collapsed" && e.tailMode !== "visible" && !n.alternate && !W)
                return El(t), null;
            } else
              2 * ct() - e.renderingStartTime > Ei && u !== 536870912 && (t.flags |= 128, a = !0, Va(e, !1), t.lanes = 4194304);
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
          return e.rendering = l, e.tail = l.sibling, e.renderingStartTime = ct(), l.sibling = null, n = Ll.current, n = a ? n & 1 | 2 : n & 1, e.tailMode === "visible" || e.tailMode === "collapsed" || !u || W ? qa(t, n) : (u = n, bl(Vl, t), bl(Ll, u), Wl === null && (Wl = t)), W && ou(t, e.treeForkCount), l;
        }
        return El(t), null;
      case 22:
      case 23:
        return yt(t), Lf(), e = t.memoizedState !== null, l !== null ? l.memoizedState !== null !== e && (t.flags |= 8192) : e && (t.flags |= 8192), e ? (u & 536870912) !== 0 && (t.flags & 128) === 0 && (El(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : El(t), u = t.updateQueue, u !== null && oi(t, u.retryQueue), u = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== u && (t.flags |= 2048), l !== null && Xl(se), null;
      case 24:
        return u = null, l !== null && (u = l.memoizedState.cache), t.memoizedState.cache !== u && (t.flags |= 2048), su(pl), El(t), null;
      case 25:
        return null;
      case 30:
        return t.flags |= 33554432, El(t), null;
    }
    throw Error(o(156, t.tag));
  }
  function lm(l, t) {
    switch (Df(t), t.tag) {
      case 1:
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 3:
        return su(pl), _e(), l = t.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (t.flags = l & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return vn(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (yt(t), t.alternate === null)
            throw Error(o(340));
          ie();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 13:
        if (yt(t), l = t.memoizedState, l !== null && l.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(o(340));
          ie();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 19:
        return Jf(t), l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null), t.flags |= 4, t) : null;
      case 4:
        return _e(), null;
      case 10:
        return su(t.type), null;
      case 22:
      case 23:
        return yt(t), Lf(), l !== null && Xl(se), l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 24:
        return su(pl), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function g0(l, t) {
    switch (Df(t), t.tag) {
      case 3:
        su(pl), _e();
        break;
      case 26:
      case 27:
      case 5:
        vn(t);
        break;
      case 4:
        _e();
        break;
      case 31:
        t.memoizedState !== null && yt(t);
        break;
      case 13:
        yt(t);
        break;
      case 19:
        Jf(t);
        break;
      case 10:
        su(t.type);
        break;
      case 22:
      case 23:
        yt(t), Lf(), l !== null && Xl(se);
        break;
      case 24:
        su(pl);
    }
  }
  function La(l, t) {
    try {
      var u = t.updateQueue, e = u !== null ? u.lastEffect : null;
      if (e !== null) {
        var a = e.next;
        u = a;
        do {
          if ((u.tag & l) === l) {
            e = void 0;
            var n = u.create, i = u.inst;
            e = n(), i.destroy = e;
          }
          u = u.next;
        } while (u !== a);
      }
    } catch (f) {
      yl(t, t.return, f);
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
            var i = e.inst, f = i.destroy;
            if (f !== void 0) {
              i.destroy = void 0, a = t;
              var c = u, m = f;
              try {
                m();
              } catch (T) {
                yl(
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
      yl(t, t.return, T);
    }
  }
  function S0(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var u = l.stateNode;
      try {
        fs(t, u);
      } catch (e) {
        yl(l, l.return, e);
      }
    }
  }
  function b0(l, t, u) {
    u.props = he(
      l.type,
      l.memoizedProps
    ), u.state = l.memoizedState;
    try {
      u.componentWillUnmount();
    } catch (e) {
      yl(l, t, e);
    }
  }
  function wt(l, t) {
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
            var a = l.stateNode, n = iu(l.memoizedProps, a);
            (a.ref === null || a.ref.name !== n) && (a.ref = Ad(n)), e = a.ref;
            break;
          case 7:
            if (l.stateNode === null) {
              var i = new St(l);
              E(
                l.child,
                !1,
                Lm,
                i,
                void 0,
                void 0
              ), l.stateNode = i;
            }
            e = l.stateNode;
            break;
          default:
            e = l.stateNode;
        }
        typeof u == "function" ? l.refCleanup = u(e) : u.current = e;
      }
    } catch (f) {
      yl(l, t, f);
    }
  }
  function Kl(l, t) {
    var u = l.ref, e = l.refCleanup;
    if (u !== null)
      if (typeof e == "function")
        try {
          e();
        } catch (a) {
          yl(l, t, a);
        } finally {
          l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
        }
      else if (typeof u == "function")
        try {
          u(null);
        } catch (a) {
          yl(l, t, a);
        }
      else u.current = null;
  }
  function ri(l, t) {
    if ((l.tag === 5 || l.tag === 27 || l.tag === 6) && l.alternate === null && t !== null)
      for (var u = 0; u < t.length; u++)
        Rd(
          l.stateNode,
          t[u]
        );
  }
  function T0(l) {
    for (var t = l.return; t !== null && (Oc(t) && Rd(l.stateNode, t.stateNode), !zc(t)); )
      t = t.return;
  }
  function Ka(l) {
    for (var t = l.return; t !== null && (Oc(t) && Km(l.stateNode, t.stateNode), !zc(t)); )
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
      yl(l, l.return, a);
    }
  }
  function Nc(l, t, u) {
    try {
      var e = l.stateNode;
      Am(e, l.type, u, t), e[lt] = t;
    } catch (a) {
      yl(l, l.return, a);
    }
  }
  function E0(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && Vu(l.type) || l.tag === 4;
  }
  function Ac(l) {
    l: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || E0(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && Vu(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue l;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function pc(l, t, u, e) {
    var a = l.tag;
    if (a === 5 || a === 6)
      a = l.stateNode, t ? (u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u).insertBefore(a, t) : (t = u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u, t.appendChild(a), u = u._reactRootContainer, u != null || t.onclick !== null || (t.onclick = Lt)), ri(l, e), il = !0;
    else if (a !== 4 && (a === 27 && (ri(l, e), e = null, Vu(l.type) && (u = l.stateNode, t = null)), l = l.child, l !== null))
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
  function si(l, t, u, e) {
    var a = l.tag;
    if (a === 5 || a === 6)
      a = l.stateNode, t ? u.insertBefore(a, t) : u.appendChild(a), ri(l, e), il = !0;
    else if (a !== 4 && (a === 27 && (ri(l, e), e = null, Vu(l.type) && (u = l.stateNode)), l = l.child, l !== null))
      for (si(
        l,
        t,
        u,
        e
      ), l = l.sibling; l !== null; )
        si(
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
      Jl(t, e, u), t[Ql] = l, t[lt] = u;
    } catch (n) {
      yl(l, l.return, n);
    }
  }
  var di = !1, vt = null;
  function O0(l) {
    (l.tag === 30 || (l.subtreeFlags & 33554432) !== 0) && (di = !0);
  }
  var Wt = null;
  function _0() {
    var l = Wt;
    return Wt = null, l;
  }
  var ut = 0;
  function We(l, t, u, e, a) {
    return ut = 0, N0(
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
        var i = l.stateNode;
        if (e !== null) {
          var f = ro(i);
          e.push(f), f.view && (n = !0);
        } else
          n || ro(i).view && (n = !0);
        di = !0, _d(
          i,
          ut === 0 ? t : t + "_" + ut,
          u
        ), ut++;
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
  function yi(l) {
    if ((l.subtreeFlags & 18874368) !== 0)
      for (l = l.child; l !== null; ) {
        if ((l.tag !== 22 || l.memoizedState === null) && (yi(l), l.tag === 30 && (l.flags & 18874368) !== 0 && l.stateNode.paired)) {
          var t = l.memoizedProps;
          if (t.name == null || t.name === "auto")
            throw Error(o(544));
          var u = t.name;
          t = fu(t.default, t.share), t !== "none" && (We(
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
      var u = l.stateNode, e = l.memoizedProps, a = iu(e, u), n = fu(
        e.default,
        u.paired ? e.share : e.enter
      );
      n !== "none" ? We(l, a, n, null, !1) ? (yi(l), u.paired || t || ua(l, e.onEnter)) : $t(l.child, !1) : yi(l);
    } else if ((l.subtreeFlags & 33554432) !== 0)
      for (l = l.child; l !== null; )
        Mc(l, t), l = l.sibling;
    else yi(l);
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
                  if (n !== "none" && (We(
                    l,
                    e,
                    n,
                    null,
                    !1
                  ) ? (n = l.stateNode, a.paired = n, n.paired = a, ua(l, u.onShare)) : $t(l.child, !1)), t.delete(e), t.size === 0) break;
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
      var t = l.memoizedProps, u = iu(t, l.stateNode), e = vt !== null ? vt.get(u) : void 0, a = fu(
        t.default,
        e !== void 0 ? t.share : t.exit
      );
      a !== "none" && (We(l, u, a, null, !1) ? e !== void 0 ? (a = l.stateNode, e.paired = a, a.paired = e, vt.delete(u), ua(l, t.onShare)) : ua(l, t.onExit) : $t(l.child, !1)), vt !== null && Cc(l);
    } else if ((l.subtreeFlags & 33554432) !== 0)
      for (l = l.child; l !== null; )
        Dc(l), l = l.sibling;
    else
      vt !== null && Cc(l);
  }
  function A0(l) {
    for (l = l.child; l !== null; ) {
      if (l.tag === 30) {
        var t = l.memoizedProps, u = iu(t, l.stateNode);
        t = fu(t.default, t.update), l.flags &= -5, t !== "none" && We(
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
  function vi(l) {
    if (l.tag === 30)
      l.stateNode.paired = null, $t(l.child, !1), Uc(l);
    else if ((l.subtreeFlags & 33554432) !== 0)
      for (l = l.child; l !== null; )
        vi(l), l = l.sibling;
    else Uc(l);
  }
  function p0(l) {
    for (l = l.child; l !== null; )
      l.tag === 30 ? $t(l.child, !1) : (l.subtreeFlags & 33554432) !== 0 && p0(l), l = l.sibling;
  }
  function Rc(l, t, u, e, a, n, i) {
    for (var f = !1; t !== null; ) {
      if (t.tag === 5) {
        var c = t.stateNode;
        if (n !== null && ut < n.length) {
          var m = n[ut], T = ro(c);
          (m.view || T.view) && (f = !0);
          var O;
          if (O = (l.flags & 4) === 0)
            if (T.clip) O = !0;
            else {
              O = m.rect;
              var y = T.rect;
              O = O.y !== y.y || O.x !== y.x || O.height !== y.height || O.width !== y.width;
            }
          O && (l.flags |= 4), T.abs ? T = !m.abs : (m = m.rect, T = T.rect, T = m.height !== T.height || m.width !== T.width), T && (l.flags |= 32);
        } else l.flags |= 32;
        (l.flags & 4) !== 0 && _d(
          c,
          ut === 0 ? u : u + "_" + ut,
          a
        ), f && (l.flags & 4) !== 0 || (Wt === null && (Wt = []), Wt.push(
          c,
          ut === 0 ? e : e + "_" + ut,
          t.memoizedProps
        )), ut++;
      } else (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && i ? l.flags |= t.flags & 32 : Rc(
        l,
        t.child,
        u,
        e,
        a,
        n,
        i
      ) && (f = !0));
      t = t.sibling;
    }
    return f;
  }
  function M0(l, t) {
    for (l = l.child; l !== null; ) {
      if (l.tag === 30) {
        var u = l.memoizedProps, e = l.stateNode, a = iu(u, e), n = fu(u.default, u.update), i;
        i = l.memoizedState, l.memoizedState = null, e = l;
        var f = l.child;
        ut = 0, a = Rc(
          e,
          f,
          a,
          a,
          n,
          i,
          !1
        ), (l.flags & 4) !== 0 && a && ua(l, u.onUpdate);
      } else
        (l.subtreeFlags & 33554432) !== 0 && M0(l);
      l = l.sibling;
    }
  }
  var Yl = !1, sl = !1, Ft = !1, Hc = !1, C0 = typeof WeakSet == "function" ? WeakSet : Set, xl = null, It = !1, Ja = !1, mi = !1, Bc = !1;
  function tm(l, t, u) {
    if (l = l.containerInfo, no = da, l = Hr(l), Tf(l)) {
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
            var n = a.anchorOffset, i = a.focusNode;
            a = a.focusOffset;
            try {
              e.nodeType, i.nodeType;
            } catch {
              e = null;
              break l;
            }
            var f = 0, c = -1, m = -1, T = 0, O = 0, y = l, S = null;
            t: for (; ; ) {
              for (var A; y !== e || n !== 0 && y.nodeType !== 3 || (c = f + n), y !== i || a !== 0 && y.nodeType !== 3 || (m = f + a), y.nodeType === 3 && (f += y.nodeValue.length), (A = y.firstChild) !== null; )
                S = y, y = A;
              for (; ; ) {
                if (y === l) break t;
                if (S === e && ++T === n && (c = f), S === i && ++O === a && (m = f), (A = y.nextSibling) !== null) break;
                y = S, S = y.parentNode;
              }
              y = A;
            }
            e = c === -1 || m === -1 ? null : { start: c, end: m };
          } else e = null;
        }
      e = e || { start: 0, end: 0 };
    } else e = null;
    for (io = { focusedElem: l, selectionRange: e }, da = !1, u = (u & 335544064) === u, xl = t, t = u ? 9270 : 1024; xl !== null; ) {
      if (l = xl, u && (e = l.deletions, e !== null))
        for (n = 0; n < e.length; n++)
          u && Dc(e[n]);
      if (l.alternate === null && (l.flags & 2) !== 0)
        u && O0(l), hi(u);
      else {
        if (l.tag === 22) {
          if (e = l.alternate, l.memoizedState !== null) {
            e !== null && e.memoizedState === null && u && Dc(e), hi(u);
            continue;
          } else if (e !== null && e.memoizedState !== null) {
            u && O0(l), hi(u);
            continue;
          }
        }
        e = l.child, (l.subtreeFlags & t) !== 0 && e !== null ? (e.return = l, xl = e) : (u && A0(l), hi(u));
      }
    }
    vt = null;
  }
  function hi(l) {
    for (; xl !== null; ) {
      var t = xl, u = l, e = t.alternate, a = t.flags;
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
              var i = he(
                t.type,
                a
              );
              u = n.getSnapshotBeforeUpdate(
                i,
                e
              ), n.__reactInternalSnapshotBeforeUpdate = u;
            } catch (f) {
              yl(t, t.return, f);
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
          u && e !== null && (u = iu(
            e.memoizedProps,
            e.stateNode
          ), a = t.memoizedProps, a = fu(a.default, a.update), a !== "none" && We(
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
        e.return = t.return, xl = e;
        break;
      }
      xl = t.return;
    }
  }
  function D0(l, t, u) {
    var e = u.flags;
    switch (u.tag) {
      case 0:
      case 11:
      case 15:
        kt(l, u), e & 4 && La(5, u);
        break;
      case 1:
        if (kt(l, u), e & 4)
          if (l = u.stateNode, t === null)
            try {
              l.componentDidMount();
            } catch (i) {
              yl(u, u.return, i);
            }
          else {
            var a = he(
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
            } catch (i) {
              yl(
                u,
                u.return,
                i
              );
            }
          }
        e & 64 && S0(u), e & 512 && wt(u, u.return);
        break;
      case 3:
        if (kt(l, u), e & 64 && (l = u.updateQueue, l !== null)) {
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
            fs(l, t);
          } catch (i) {
            yl(u, u.return, i);
          }
        }
        break;
      case 27:
        t === null && e & 4 && z0(u);
      case 26:
      case 5:
        kt(l, u), t === null && e & 4 && _c(u), e & 512 && wt(u, u.return);
        break;
      case 12:
        kt(l, u);
        break;
      case 31:
        kt(l, u), e & 4 && B0(l, u);
        break;
      case 13:
        kt(l, u), e & 4 && j0(l, u), e & 64 && (l = u.memoizedState, l !== null && (l = l.dehydrated, l !== null && (u = ym.bind(
          null,
          u
        ), Wm(l, u))));
        break;
      case 22:
        if (e = u.memoizedState !== null || Yl, !e) {
          var n = t !== null && t.memoizedState !== null || sl;
          t = Yl, a = sl, Yl = e, (sl = n) && !a ? (e = 2, (u.subtreeFlags & 8772) !== 0 && (e |= 1), qt(
            l,
            u,
            e
          )) : kt(l, u), Yl = t, sl = a;
        }
        break;
      case 30:
        kt(l, u), e & 512 && wt(u, u.return);
        break;
      case 7:
        e & 512 && wt(u, u.return);
      default:
        kt(l, u);
    }
  }
  function jc(l, t) {
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
            var a = l.stateNode, n = l.memoizedProps.style, i = n != null && n.hasOwnProperty("display") ? n.display : null;
            a.style.display = i == null || typeof i == "boolean" ? "" : ("" + i).trim();
          }
        } catch (c) {
          yl(l, l.return, c);
        }
        Yc(l, t);
        break;
      case 6:
        try {
          l.stateNode.nodeValue = t ? "" : l.memoizedProps, il = !0;
        } catch (c) {
          yl(l, l.return, c);
        }
        break;
      case 18:
        try {
          var f = l.stateNode;
          t ? Od(f, !0) : Od(l.stateNode, !1);
        } catch (c) {
          yl(l, l.return, c);
        }
        break;
      case 22:
      case 23:
        l.memoizedState === null && jc(l, t);
        break;
      default:
        jc(l, t);
    }
  }
  function Yc(l, t) {
    if (l.subtreeFlags & 67108864)
      for (l = l.child; l !== null; ) {
        l: {
          var u = l, e = t;
          switch (u.tag) {
            case 4:
              U0(u, e);
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
  function R0(l) {
    var t = l.alternate;
    t !== null && (l.alternate = null, R0(t)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (t = l.stateNode, t !== null && En(t)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var zl = null, et = !1;
  function Yt(l, t, u) {
    for (u = u.child; u !== null; )
      H0(l, t, u), u = u.sibling;
  }
  function H0(l, t, u) {
    if (ot && typeof ot.onCommitFiberUnmount == "function")
      try {
        ot.onCommitFiberUnmount(ma, u);
      } catch {
      }
    switch (u.tag) {
      case 26:
        sl || Kl(u, t), Yt(
          l,
          t,
          u
        ), u.memoizedState ? u.memoizedState.count-- : u.stateNode && !sl && (u = u.stateNode, u.parentNode.removeChild(u));
        break;
      case 27:
        sl || Kl(u, t), Ka(u);
        var e = zl, a = et;
        Vu(u.type) && (zl = u.stateNode, et = !1), Yt(
          l,
          t,
          u
        ), xd(
          u.stateNode,
          u.type,
          u.memoizedProps
        ), zl = e, et = a;
        break;
      case 5:
        sl || Kl(u, t), Ka(u);
      case 6:
        if (u.tag === 6 && Ka(u), e = zl, a = et, zl = null, Yt(
          l,
          t,
          u
        ), zl = e, et = a, zl !== null)
          if (et)
            try {
              (zl.nodeType === 9 ? zl.body : zl.nodeName === "HTML" ? zl.ownerDocument.body : zl).removeChild(u.stateNode), il = !0;
            } catch (n) {
              yl(
                u,
                t,
                n
              );
            }
          else
            try {
              zl.removeChild(u.stateNode), il = !0;
            } catch (n) {
              yl(
                u,
                t,
                n
              );
            }
        break;
      case 18:
        zl !== null && (et ? (l = zl, zd(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          u.stateNode
        ), ya(l)) : zd(zl, u.stateNode));
        break;
      case 4:
        e = zl, a = et, zl = u.stateNode.containerInfo, et = !0, Yt(
          l,
          t,
          u
        ), zl = e, et = a;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Yu(2, u, t), sl || Yu(4, u, t), Yt(
          l,
          t,
          u
        );
        break;
      case 1:
        sl || (Kl(u, t), e = u.stateNode, typeof e.componentWillUnmount == "function" && b0(
          u,
          t,
          e
        )), Yt(
          l,
          t,
          u
        );
        break;
      case 21:
        Yt(
          l,
          t,
          u
        );
        break;
      case 22:
        sl = (e = sl) || u.memoizedState !== null, Yt(
          l,
          t,
          u
        ), sl = e;
        break;
      case 30:
        Kl(u, t), Yt(
          l,
          t,
          u
        );
        break;
      case 7:
        sl || Kl(u, t), Yt(
          l,
          t,
          u
        );
        break;
      default:
        Yt(
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
        ya(l);
      } catch (u) {
        yl(t, t.return, u);
      }
    }
  }
  function j0(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        ya(l);
      } catch (u) {
        yl(t, t.return, u);
      }
  }
  function um(l) {
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
  function gi(l, t) {
    var u = um(l);
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
        var n = e[a], i = l, f = t, c = f;
        l: for (; c !== null; ) {
          switch (c.tag) {
            case 27:
              if (Vu(c.type)) {
                zl = c.stateNode, et = !1;
                break l;
              }
              break;
            case 5:
              zl = c.stateNode, et = !1;
              break l;
            case 3:
            case 4:
              zl = c.stateNode.containerInfo, et = !0;
              break l;
          }
          c = c.return;
        }
        if (zl === null) throw Error(o(160));
        H0(i, f, n), zl = null, et = !1, i = n.alternate, i !== null && (i.return = null), n.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        Y0(t, l, u), t = t.sibling;
  }
  var xt = null;
  function Y0(l, t, u) {
    var e = l.alternate, a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (a & 4 && (e = l.updateQueue, e = e !== null ? e.events : null, e !== null))
          for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.ref.impl = i.nextImpl;
          }
        Il(t, l, u), kl(l), a & 4 && (Yu(3, l, l.return), La(3, l), Yu(5, l, l.return));
        break;
      case 1:
        Il(t, l, u), kl(l), a & 512 && (sl || e === null || Kl(e, e.return)), a & 64 && Yl && (l = l.updateQueue, l !== null && (t = l.callbacks, t !== null && (u = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = u === null ? t : u.concat(t))));
        break;
      case 26:
        if (n = xt, Il(t, l, u), kl(l), a & 512 && (sl || e === null || Kl(e, e.return)), a & 4)
          if (a = e !== null ? e.memoizedState : null, u = l.memoizedState, e === null)
            if (u === null)
              if (l.stateNode === null)
                if (Yl)
                  l.stateNode = bd(
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
                        e = a.getElementsByTagName("title")[0], (!e || e[Sa] || e[Ql] || e.namespaceURI === "http://www.w3.org/2000/svg" || e.hasAttribute("itemprop")) && (e = a.createElement(t), a.head.insertBefore(
                          e,
                          a.querySelector("head > title")
                        )), Jl(e, t, u), e[Ql] = l, Bl(e), t = e;
                        break l;
                      case "link":
                        if (n = Vd(
                          "link",
                          "href",
                          a
                        ).get(t + (u.href || ""))) {
                          for (i = 0; i < n.length; i++)
                            if (e = n[i], e.getAttribute("href") === (u.href == null || u.href === "" ? null : u.href) && e.getAttribute("rel") === (u.rel == null ? null : u.rel) && e.getAttribute("title") === (u.title == null ? null : u.title) && e.getAttribute("crossorigin") === (u.crossOrigin == null ? null : u.crossOrigin)) {
                              n.splice(i, 1);
                              break t;
                            }
                        }
                        e = a.createElement(t), Jl(e, t, u), a.head.appendChild(e);
                        break;
                      case "meta":
                        if (n = Vd(
                          "meta",
                          "content",
                          a
                        ).get(t + (u.content || ""))) {
                          for (i = 0; i < n.length; i++)
                            if (e = n[i], e.getAttribute("content") === (u.content == null ? null : "" + u.content) && e.getAttribute("name") === (u.name == null ? null : u.name) && e.getAttribute("property") === (u.property == null ? null : u.property) && e.getAttribute("http-equiv") === (u.httpEquiv == null ? null : u.httpEquiv) && e.getAttribute("charset") === (u.charSet == null ? null : u.charSet)) {
                              n.splice(i, 1);
                              break t;
                            }
                        }
                        e = a.createElement(t), Jl(e, t, u), a.head.appendChild(e);
                        break;
                      default:
                        throw Error(o(468, t));
                    }
                    e[Ql] = l, Bl(e), t = e;
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
            a !== u ? (a === null ? (t = e.stateNode, t === null || sl || t.parentNode.removeChild(t)) : a.count--, u === null ? Yl || Eo(n, l.type, l.stateNode) : Zd(n, u, l.memoizedProps)) : u === null && l.stateNode !== null && Nc(
              l,
              l.memoizedProps,
              e.memoizedProps
            );
        break;
      case 27:
        Il(t, l, u), kl(l), a & 512 && (sl || e === null || Kl(e, e.return)), e !== null && a & 4 && Nc(
          l,
          l.memoizedProps,
          e.memoizedProps
        );
        break;
      case 5:
        if (n = Ft, Ft = !1, Il(t, l, u), Ft = n, kl(l), a & 512 && (sl || e === null || Kl(e, e.return)), l.flags & 32) {
          t = l.stateNode;
          try {
            De(t, ""), il = !0;
          } catch (T) {
            yl(l, l.return, T);
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
            u.nodeValue = t, il = !0;
          } catch (T) {
            yl(l, l.return, T);
          }
        }
        break;
      case 3:
        if (il = !1, Ri = null, n = xt, xt = tn(t.containerInfo), Il(t, l, u), xt = n, kl(l), a & 4 && e !== null && e.memoizedState.isDehydrated)
          try {
            ya(t.containerInfo);
          } catch (T) {
            yl(l, l.return, T);
          }
        Hc && (Hc = !1, x0(l)), il = !1;
        break;
      case 4:
        a = Ft, Ft = Yl, e = er(), n = xt, xt = tn(
          l.stateNode.containerInfo
        ), Il(t, l, u), kl(l), xt = n, il && Ja && (mi = !0), il = e, Ft = a;
        break;
      case 12:
        Il(t, l, u), kl(l);
        break;
      case 31:
        Il(t, l, u), kl(l), a & 4 && (t = l.updateQueue, t !== null && (l.updateQueue = null, gi(l, t)));
        break;
      case 13:
        Il(t, l, u), kl(l), l.child.flags & 8192 && l.memoizedState !== null != (e !== null && e.memoizedState !== null) && (Ti = ct()), a & 4 && (t = l.updateQueue, t !== null && (l.updateQueue = null, gi(l, t)));
        break;
      case 22:
        n = l.memoizedState !== null, i = e !== null && e.memoizedState !== null;
        var f = Yl, c = sl, m = Ft;
        Yl = f || n, Ft = m || n, sl = c || i, Il(t, l, u), sl = c, Ft = m, Yl = f, kl(l), a & 8192 && (t = l.stateNode, t._visibility = n ? t._visibility & -2 : t._visibility | 1, !n || e === null || i || Yl || sl || (t = i || sl, u = Yl, e = sl, Yl = n || Yl, sl = t, xu(l, 2), Yl = u, sl = e), !n && Ft || jc(l, n)), a & 4 && (t = l.updateQueue, t !== null && (u = t.retryQueue, u !== null && (t.retryQueue = null, gi(l, u))));
        break;
      case 19:
        Il(t, l, u), kl(l), a & 4 && (t = l.updateQueue, t !== null && (l.updateQueue = null, gi(l, t)));
        break;
      case 30:
        a & 512 && (sl || e === null || Kl(e, e.return)), a = er(), n = Ja, i = (u & 335544064) === u, f = l.memoizedProps, Ja = i && fu(
          f.default,
          f.update
        ) !== "none", Il(t, l, u), kl(l), i && e !== null && il && (l.flags |= 4), Ja = n, il = a;
        break;
      case 21:
        break;
      case 7:
        a & 512 && (sl || e === null || Kl(e, e.return)), e && e.stateNode !== null && (e.stateNode._fragmentFiber = l);
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
        var i = e;
        if (u == null) throw Error(o(160));
        switch (u.tag) {
          case 27:
            var f = u.stateNode, c = Ac(l);
            si(
              l,
              c,
              f,
              i
            );
            break;
          case 5:
            var m = u.stateNode;
            u.flags & 32 && (De(m, ""), u.flags &= -33);
            var T = Ac(l);
            si(
              l,
              T,
              m,
              i
            );
            break;
          case 3:
          case 4:
            var O = u.stateNode.containerInfo, y = Ac(l);
            pc(
              l,
              y,
              O,
              i
            );
            break;
          default:
            throw Error(o(161));
        }
      } catch (S) {
        yl(l, l.return, S);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function x0(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var t = l;
        x0(t), t.tag === 5 && t.flags & 1024 && (t = t.stateNode, da = !0, t.reset(), da = !1), l = l.sibling;
      }
  }
  function $e(l, t) {
    if (t.subtreeFlags & 9270)
      for (t = t.child; t !== null; )
        q0(t, l), t = t.sibling;
    else M0(t);
  }
  function q0(l, t) {
    var u = l.alternate;
    if (u === null) Mc(l, !1);
    else
      switch (l.tag) {
        case 3:
          if (Bc = It = !1, _0(), $e(t, l), !It && !mi) {
            if (l = Wt, l !== null)
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
          Wt = null;
          break;
        case 5:
          $e(t, l);
          break;
        case 4:
          e = It, It = !1, $e(t, l), It && (mi = !0), It = e;
          break;
        case 22:
          l.memoizedState === null && (u.memoizedState !== null ? Mc(l, !1) : $e(t, l));
          break;
        case 30:
          e = It, a = _0(), It = !1, $e(t, l), It && (l.flags |= 4);
          var n = l.memoizedProps, i = l.stateNode;
          t = iu(n, i), i = iu(u.memoizedProps, i);
          var f = fu(n.default, n.update);
          f === "none" ? t = !1 : (n = u.memoizedState, u.memoizedState = null, u = l.child, ut = 0, t = Rc(
            l,
            u,
            t,
            i,
            f,
            n,
            !0
          ), ut !== (n === null ? 0 : n.length) && (l.flags |= 32)), (l.flags & 4) !== 0 && t ? (ua(
            l,
            l.memoizedProps.onUpdate
          ), Wt = a) : a !== null && (a.push.apply(a, Wt), Wt = a), It = (l.flags & 32) !== 0 ? !0 : e;
          break;
        default:
          $e(t, l);
      }
  }
  function kt(l, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        D0(l, t.alternate, t), t = t.sibling;
  }
  function xu(l, t) {
    for (l = l.child; l !== null; ) {
      var u = l, e = t;
      switch (u.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Yu(4, u, u.return), xu(
            u,
            e
          );
          break;
        case 1:
          Kl(u, u.return);
          var a = u.stateNode;
          typeof a.componentWillUnmount == "function" && b0(
            u,
            u.return,
            a
          ), xu(
            u,
            e
          );
          break;
        case 27:
          (e & 2) !== 0 && xd(
            u.stateNode,
            u.type,
            u.memoizedProps
          );
        case 5:
          Kl(u, u.return), u.tag !== 5 && u.tag !== 27 || Ka(u), xu(
            u,
            e
          );
          break;
        case 6:
          Ka(u);
          break;
        case 26:
          Kl(u, u.return), a = u.stateNode, u.memoizedState !== null || a === null || sl || a.parentNode.removeChild(a), xu(
            u,
            e
          );
          break;
        case 22:
          u.memoizedState === null && xu(
            u,
            e
          );
          break;
        case 30:
          Kl(u, u.return), xu(
            u,
            e
          );
          break;
        case 7:
          Kl(u, u.return);
        default:
          xu(
            u,
            e
          );
      }
      l = l.sibling;
    }
  }
  function qt(l, t, u) {
    for (u = (t.subtreeFlags & 8772) !== 0 ? u : u & -2, t = t.child; t !== null; ) {
      var e = t.alternate, a = l, n = t, i = n.flags, f = (u & 1) !== 0;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          qt(
            a,
            n,
            u
          ), La(4, n);
          break;
        case 1:
          if (qt(
            a,
            n,
            u
          ), e = n, a = e.stateNode, typeof a.componentDidMount == "function")
            try {
              a.componentDidMount();
            } catch (T) {
              yl(e, e.return, T);
            }
          if (e = n, a = e.updateQueue, a !== null) {
            var c = e.stateNode;
            try {
              var m = a.shared.hiddenCallbacks;
              if (m !== null)
                for (a.shared.hiddenCallbacks = null, a = 0; a < m.length; a++)
                  is(m[a], c);
            } catch (T) {
              yl(e, e.return, T);
            }
          }
          f && i & 64 && S0(n), wt(n, n.return);
          break;
        case 27:
          (u & 2) !== 0 && z0(n);
        case 5:
          n.tag !== 5 && n.tag !== 27 || T0(n), qt(
            a,
            n,
            u
          ), f && e === null && i & 4 && _c(n), wt(n, n.return);
          break;
        case 6:
          T0(n);
          break;
        case 26:
          c = n.stateNode, n.memoizedState !== null || c === null || Yl || Eo(
            tn(c.ownerDocument),
            n.type,
            c
          ), qt(
            a,
            n,
            u
          ), f && e === null && i & 4 && _c(n), wt(n, n.return);
          break;
        case 12:
          qt(
            a,
            n,
            u
          );
          break;
        case 31:
          qt(
            a,
            n,
            u
          ), f && i & 4 && B0(a, n);
          break;
        case 13:
          qt(
            a,
            n,
            u
          ), f && i & 4 && j0(a, n);
          break;
        case 22:
          n.memoizedState === null && qt(
            a,
            n,
            u
          ), wt(n, n.return);
          break;
        case 30:
          qt(
            a,
            n,
            u
          ), wt(n, n.return);
          break;
        case 7:
          wt(n, n.return);
        default:
          qt(
            a,
            n,
            u
          );
      }
      t = t.sibling;
    }
  }
  function xc(l, t) {
    var u = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== u && (l != null && l.refCount++, u != null && Ua(u));
  }
  function qc(l, t) {
    l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && Ua(l));
  }
  function Ut(l, t, u, e) {
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
    a && t.alternate === null && t.return !== null && t.return.alternate !== null && vi(t);
    var n = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Ut(
          l,
          t,
          u,
          e
        ), n & 2048 && La(9, t);
        break;
      case 1:
        Ut(
          l,
          t,
          u,
          e
        );
        break;
      case 3:
        Ut(
          l,
          t,
          u,
          e
        ), a && Bc && (l = l.containerInfo, l = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, l.style.viewTransitionName === "root" && (l.style.viewTransitionName = ""), l = l.ownerDocument.documentElement, l !== null && l.style.viewTransitionName === "none" && (l.style.viewTransitionName = "")), n & 2048 && (n = null, t.alternate !== null && (n = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== n && (t.refCount++, n != null && Ua(n)));
        break;
      case 12:
        if (n & 2048) {
          Ut(
            l,
            t,
            u,
            e
          ), n = t.stateNode;
          try {
            var i = t.memoizedProps, f = i.id, c = i.onPostCommit;
            typeof c == "function" && c(
              f,
              t.alternate === null ? "mount" : "update",
              n.passiveEffectDuration,
              -0
            );
          } catch (m) {
            yl(t, t.return, m);
          }
        } else
          Ut(
            l,
            t,
            u,
            e
          );
        break;
      case 31:
        Ut(
          l,
          t,
          u,
          e
        );
        break;
      case 13:
        Ut(
          l,
          t,
          u,
          e
        );
        break;
      case 23:
        break;
      case 22:
        i = t.stateNode, f = t.alternate, t.memoizedState !== null ? (a && f !== null && f.memoizedState === null && vi(f), i._visibility & 2 ? Ut(
          l,
          t,
          u,
          e
        ) : wa(
          l,
          t
        )) : (a && f !== null && f.memoizedState !== null && vi(t), i._visibility & 2 ? Ut(
          l,
          t,
          u,
          e
        ) : (i._visibility |= 2, Fe(
          l,
          t,
          u,
          e,
          (t.subtreeFlags & 10256) !== 0 || !1
        ))), n & 2048 && xc(f, t);
        break;
      case 24:
        Ut(
          l,
          t,
          u,
          e
        ), n & 2048 && qc(t.alternate, t);
        break;
      case 30:
        a && (n = t.alternate, n !== null && ($t(n.child, !0), $t(t.child, !0))), Ut(
          l,
          t,
          u,
          e
        );
        break;
      default:
        Ut(
          l,
          t,
          u,
          e
        );
    }
  }
  function Fe(l, t, u, e, a) {
    for (a = a && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var n = l, i = t, f = u, c = e, m = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          Fe(
            n,
            i,
            f,
            c,
            a
          ), La(8, i);
          break;
        case 23:
          break;
        case 22:
          var T = i.stateNode;
          i.memoizedState !== null ? T._visibility & 2 ? Fe(
            n,
            i,
            f,
            c,
            a
          ) : wa(
            n,
            i
          ) : (T._visibility |= 2, Fe(
            n,
            i,
            f,
            c,
            a
          )), a && m & 2048 && xc(
            i.alternate,
            i
          );
          break;
        case 24:
          Fe(
            n,
            i,
            f,
            c,
            a
          ), a && m & 2048 && qc(i.alternate, i);
          break;
        default:
          Fe(
            n,
            i,
            f,
            c,
            a
          );
      }
      t = t.sibling;
    }
  }
  function wa(l, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var u = l, e = t, a = e.flags;
        switch (e.tag) {
          case 22:
            wa(u, e), a & 2048 && xc(
              e.alternate,
              e
            );
            break;
          case 24:
            wa(u, e), a & 2048 && qc(e.alternate, e);
            break;
          default:
            wa(u, e);
        }
        t = t.sibling;
      }
  }
  var ge = 8192;
  function Se(l, t, u) {
    if (l.subtreeFlags & ge)
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
        Se(
          l,
          t,
          u
        ), l.flags & ge && (l.memoizedState !== null ? c1(
          u,
          xt,
          l.memoizedState,
          l.memoizedProps
        ) : (l = l.stateNode, (t & 335544128) === t && wd(u, l)));
        break;
      case 5:
        Se(
          l,
          t,
          u
        ), l.flags & ge && (l = l.stateNode, (t & 335544128) === t && wd(u, l));
        break;
      case 3:
      case 4:
        var e = xt;
        xt = tn(l.stateNode.containerInfo), Se(
          l,
          t,
          u
        ), xt = e;
        break;
      case 22:
        l.memoizedState === null && (e = l.alternate, e !== null && e.memoizedState !== null ? (e = ge, ge = 16777216, Se(
          l,
          t,
          u
        ), ge = e) : Se(
          l,
          t,
          u
        ));
        break;
      case 30:
        if ((l.flags & ge) !== 0 && (e = l.memoizedProps.name, e != null && e !== "auto")) {
          var a = l.stateNode;
          a.paired = null, vt === null && (vt = /* @__PURE__ */ new Map()), vt.set(e, a);
        }
        Se(
          l,
          t,
          u
        );
        break;
      default:
        Se(
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
  function Wa(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var u = 0; u < t.length; u++) {
          var e = t[u];
          xl = e, V0(
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
        Wa(l), l.flags & 2048 && Yu(9, l, l.return);
        break;
      case 3:
        Wa(l);
        break;
      case 12:
        Wa(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null && t._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (t._visibility &= -3, Si(l)) : Wa(l);
        break;
      default:
        Wa(l);
    }
  }
  function Si(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var u = 0; u < t.length; u++) {
          var e = t[u];
          xl = e, V0(
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
          Yu(8, t, t.return), Si(t);
          break;
        case 22:
          u = t.stateNode, u._visibility & 2 && (u._visibility &= -3, Si(t));
          break;
        default:
          Si(t);
      }
      l = l.sibling;
    }
  }
  function V0(l, t) {
    for (; xl !== null; ) {
      var u = xl;
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
          Ua(u.memoizedState.cache);
      }
      if (e = u.child, e !== null) e.return = u, xl = e;
      else
        l: for (u = l; xl !== null; ) {
          e = xl;
          var a = e.sibling, n = e.return;
          if (R0(e), e === u) {
            xl = null;
            break l;
          }
          if (a !== null) {
            a.return = n, xl = a;
            break l;
          }
          xl = n;
        }
    }
  }
  var em = {
    getCacheForType: function(l) {
      var t = Zl(pl), u = t.data.get(l);
      return u === void 0 && (u = l(), t.data.set(l, u)), u;
    },
    cacheSignal: function() {
      return Zl(pl).controller.signal;
    }
  }, am = typeof WeakMap == "function" ? WeakMap : Map, ol = 0, gl = null, F = null, k = 0, dl = 0, mt = null, qu = !1, Ie = !1, Gc = !1, hu = 0, Nl = 0, Gu = 0, be = 0, bi = 0, ht = 0, ke = 0, $a = null, at = null, Xc = !1, Ti = 0, L0 = 0, Ei = 1 / 0, zi = null, Xu = null, Ol = 0, Gt = null, Te = null, Pt = 0, Qc = 0, Zc = null, K0 = null, Pe = null, la = null, ta = null, Fa = 0, Oi = null;
  function gt() {
    return (ol & 2) !== 0 && k !== 0 ? k & -k : B.T !== null ? kc() : Wo();
  }
  function J0() {
    if (ht === 0)
      if ((k & 536870912) === 0 || W) {
        var l = gn;
        gn <<= 1, (gn & 3932160) === 0 && (gn = 262144), ht = l;
      } else ht = 536870912;
    return l = Vl.current, l !== null && (l.flags |= 32), ht;
  }
  function ua(l, t) {
    if (t != null) {
      var u = l.stateNode, e = u.ref;
      e === null && (e = u.ref = Ad(
        iu(l.memoizedProps, u)
      )), la === null && (la = []), la.push(t.bind(null, e));
    }
  }
  function nt(l, t, u) {
    (l === gl && (dl === 2 || dl === 9) || l.cancelPendingCommit !== null) && (ea(l, 0), Qu(
      l,
      k,
      ht,
      !1
    )), ga(l, u), ((ol & 2) === 0 || l !== gl) && (l === gl && ((ol & 2) === 0 && (be |= u), Nl === 4 && Qu(
      l,
      k,
      ht,
      !1
    )), lu(l));
  }
  function w0(l, t, u) {
    if ((ol & 6) !== 0) throw Error(o(327));
    var e = !u && (t & 127) === 0 && (t & l.expiredLanes) === 0 || ha(l, t), a = e ? fm(l, t) : Lc(l, t, !0), n = e;
    do {
      if (a === 0) {
        Ie && !e && Qu(l, t, 0, !1);
        break;
      } else {
        if (u = l.current.alternate, n && !nm(u)) {
          a = Lc(l, t, !1), n = !1;
          continue;
        }
        if (a === 2) {
          if (n = t, l.errorRecoveryDisabledLanes & n)
            var i = 0;
          else
            i = l.pendingLanes & -536870913, i = i !== 0 ? i : i & 536870912 ? 536870912 : 0;
          if (i !== 0) {
            t = i;
            l: {
              var f = l;
              a = $a;
              var c = f.current.memoizedState.isDehydrated;
              if (c && (ea(f, i).flags |= 256), i = Lc(
                f,
                i,
                !1
              ), i !== 2 && i !== 6) {
                if (Gc && !c) {
                  f.errorRecoveryDisabledLanes |= n, be |= n, a = 4;
                  break l;
                }
                n = at, at = a, n !== null && (at === null ? at = n : at.push.apply(
                  at,
                  n
                ));
              }
              a = i;
            }
            if (n = !1, a !== 2) continue;
          }
        }
        if (a === 1) {
          ea(l, 0), Qu(l, t, 0, !0);
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
              Qu(
                e,
                t,
                ht,
                !qu
              );
              break l;
            case 2:
              at = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(o(329));
          }
          if ((t & 62914560) === t && (a = Ti + 300 - ct(), 10 < a)) {
            if (Qu(
              e,
              t,
              ht,
              !qu
            ), bn(e, 0, !0) !== 0) break l;
            Pt = t, e.timeoutHandle = oo(
              W0.bind(
                null,
                e,
                u,
                at,
                zi,
                Xc,
                t,
                ht,
                be,
                ke,
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
          W0(
            e,
            u,
            at,
            zi,
            Xc,
            t,
            ht,
            be,
            ke,
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
    lu(l);
  }
  function W0(l, t, u, e, a, n, i, f, c, m, T, O, y, S) {
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
      unsuspend: Lt
    }, vt = null, X0(
      t,
      n,
      O
    ), D && (A = O, D = l.containerInfo, D = (D.nodeType === 9 ? D : D.ownerDocument).__reactViewTransition, D != null && (A.count++, A.waitingForViewTransition = !0, A = an.bind(A), D.finished.then(A, A))), A = (n & 62914560) === n ? Ti - ct() : (n & 4194048) === n ? L0 - ct() : 0, A = o1(
      O,
      A
    ), A !== null)) {
      Pt = n, l.cancelPendingCommit = A(
        ud.bind(
          null,
          l,
          t,
          n,
          u,
          e,
          a,
          i,
          f,
          c,
          m,
          T,
          O,
          null,
          y,
          S
        )
      ), Qu(l, n, i, !m);
      return;
    }
    ud(
      l,
      t,
      n,
      u,
      e,
      a,
      i,
      f,
      c,
      m,
      T,
      O
    );
  }
  function nm(l) {
    for (var t = l; ; ) {
      var u = t.tag;
      if ((u === 0 || u === 11 || u === 15) && t.flags & 16384 && (u = t.updateQueue, u !== null && (u = u.stores, u !== null)))
        for (var e = 0; e < u.length; e++) {
          var a = u[e], n = a.getSnapshot;
          a = a.value;
          try {
            if (!dt(n(), a)) return !1;
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
  function Qu(l, t, u, e) {
    t = Vo(l, t), t &= ~bi, t &= ~be, l.suspendedLanes |= t, l.pingedLanes &= ~t, e && (l.warmLanes |= t), e = l.expirationTimes;
    for (var a = t; 0 < a; ) {
      var n = 31 - rt(a), i = 1 << n;
      e[n] = -1, a &= ~i;
    }
    u !== 0 && Ko(l, u, t);
  }
  function _i() {
    return (ol & 6) === 0 ? (Ia(0), !1) : !0;
  }
  function Vc() {
    if (F !== null) {
      if (dl === 0)
        var l = F.return;
      else
        l = F, ru = fe = null, If(l), Ve = null, Ba = 0, l = F;
      for (; l !== null; )
        g0(l.alternate, l), l = l.return;
      F = null;
    }
  }
  function ea(l, t) {
    var u = l.timeoutHandle;
    return u !== -1 && (l.timeoutHandle = -1, Cm(u)), u = l.cancelPendingCommit, u !== null && (l.cancelPendingCommit = null, u()), Pt = 0, Vc(), gl = l, F = u = cu(l.current, null), k = t, dl = 0, mt = null, qu = !1, Ie = ha(l, t), Gc = !1, ke = ht = bi = be = Gu = Nl = 0, at = $a = null, Xc = !1, hu = Vo(l, t), Rn(), u;
  }
  function $0(l, t) {
    J = null, B.H = ei, t === Ze || t === Vn ? (t = us(), dl = 3) : t === qf ? (t = us(), dl = 4) : dl = t === dc ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, mt = t, F === null && (Nl = 1, ai(
      l,
      pt(t, l.current)
    ));
  }
  function F0() {
    var l = Vl.current;
    return l === null ? !0 : (k & 4194048) === k ? Wl === null : (k & 62914560) === k || (k & 536870912) !== 0 ? l === Wl : !1;
  }
  function I0() {
    var l = B.H;
    return B.H = ei, l === null ? ei : l;
  }
  function k0() {
    var l = B.A;
    return B.A = em, l;
  }
  function Ni() {
    Nl = 4, qu || (k & 4194048) !== k && Vl.current !== null || (Ie = !0), (Gu & 134217727) === 0 && (be & 134217727) === 0 || gl === null || Qu(
      gl,
      k,
      ht,
      !1
    );
  }
  function Lc(l, t, u) {
    var e = ol;
    ol |= 2;
    var a = I0(), n = k0();
    (gl !== l || k !== t) && (zi = null, ea(l, t)), t = !1;
    var i = Nl;
    l: do
      try {
        if (dl !== 0 && F !== null) {
          var f = F, c = mt;
          switch (dl) {
            case 8:
              Vc(), i = 6;
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              Vl.current === null && (t = !0);
              var m = dl;
              if (dl = 0, mt = null, aa(l, f, c, m), u && Ie) {
                i = 0;
                break l;
              }
              break;
            default:
              m = dl, dl = 0, mt = null, aa(l, f, c, m);
          }
        }
        im(), i = Nl;
        break;
      } catch (T) {
        $0(l, T);
      }
    while (!0);
    return t && l.shellSuspendCounter++, ru = fe = null, ol = e, B.H = a, B.A = n, F === null && (gl = null, k = 0, Rn()), i;
  }
  function im() {
    for (; F !== null; ) P0(F);
  }
  function fm(l, t) {
    var u = ol;
    ol |= 2;
    var e = I0(), a = k0();
    gl !== l || k !== t ? (zi = null, Ei = ct() + 500, ea(l, t)) : Ie = ha(
      l,
      t
    );
    l: do
      try {
        if (dl !== 0 && F !== null) {
          t = F;
          var n = mt;
          t: switch (dl) {
            case 1:
              dl = 0, mt = null, aa(l, t, n, 1);
              break;
            case 2:
            case 9:
              if (ls(n)) {
                dl = 0, mt = null, ld(t);
                break;
              }
              t = function() {
                dl !== 2 && dl !== 9 || gl !== l || (dl = 7), lu(l);
              }, n.then(t, t);
              break l;
            case 3:
              dl = 7;
              break l;
            case 4:
              dl = 5;
              break l;
            case 7:
              ls(n) ? (dl = 0, mt = null, ld(t)) : (dl = 0, mt = null, aa(l, t, n, 7));
              break;
            case 5:
              var i = null;
              switch (F.tag) {
                case 26:
                  i = F.memoizedState;
                case 5:
                case 27:
                  var f = F;
                  if (i ? Kd(i) : f.stateNode.complete) {
                    dl = 0, mt = null;
                    var c = f.sibling;
                    if (c !== null) F = c;
                    else {
                      var m = f.return;
                      m !== null ? (F = m, Ai(m)) : F = null;
                    }
                    break t;
                  }
              }
              dl = 0, mt = null, aa(l, t, n, 5);
              break;
            case 6:
              dl = 0, mt = null, aa(l, t, n, 6);
              break;
            case 8:
              Vc(), Nl = 6;
              break l;
            default:
              throw Error(o(462));
          }
        }
        cm();
        break;
      } catch (T) {
        $0(l, T);
      }
    while (!0);
    return ru = fe = null, B.H = e, B.A = a, ol = u, F !== null ? 0 : (gl = null, k = 0, Rn(), Nl);
  }
  function cm() {
    for (; F !== null && !Ny(); )
      P0(F);
  }
  function P0(l) {
    var t = m0(l.alternate, l, hu);
    l.memoizedProps = l.pendingProps, t === null ? Ai(l) : F = t;
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
          k
        );
        break;
      case 11:
        t = c0(
          u,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          k
        );
        break;
      case 5:
        If(t);
        var e = t;
        e === jl && (W ? (qn(e), e.tag === 5 && e.stateNode != null && (Tl = e.stateNode)) : (qn(e), W = !0));
      default:
        g0(u, t), t = F = Vr(t, hu), t = m0(u, t, hu);
    }
    l.memoizedProps = l.pendingProps, t === null ? Ai(l) : F = t;
  }
  function aa(l, t, u, e) {
    ru = fe = null, If(t), Ve = null, Ba = 0;
    var a = t.return;
    try {
      if ($v(
        l,
        a,
        t,
        u,
        k
      )) {
        Nl = 1, ai(
          l,
          pt(u, l.current)
        ), F = null;
        return;
      }
    } catch (n) {
      if (a !== null) throw F = a, n;
      Nl = 1, ai(
        l,
        pt(u, l.current)
      ), F = null;
      return;
    }
    t.flags & 32768 ? (W || e === 1 ? l = !0 : Ie || (k & 536870912) !== 0 ? l = !1 : (qu = l = !0, (e === 2 || e === 9 || e === 3 || e === 6) && (e = Vl.current, e !== null && e.tag === 13 && (e.flags |= 16384))), td(t, l)) : Ai(t);
  }
  function Ai(l) {
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
      var u = Pv(
        t.alternate,
        t,
        hu
      );
      if (u !== null) {
        F = u;
        return;
      }
      if (t = t.sibling, t !== null) {
        F = t;
        return;
      }
      F = t = l;
    } while (t !== null);
    Nl === 0 && (Nl = 5);
  }
  function td(l, t) {
    do {
      var u = lm(l.alternate, l);
      if (u !== null) {
        u.flags &= 32767, F = u;
        return;
      }
      if (u = l.return, u !== null && (u.flags |= 32768, u.subtreeFlags = 0, u.deletions = null), !t && (l = l.sibling, l !== null)) {
        F = l;
        return;
      }
      F = l = u;
    } while (l !== null);
    Nl = 6, F = null;
  }
  function ud(l, t, u, e, a, n, i, f, c, m, T, O) {
    l.cancelPendingCommit = null;
    do
      pi();
    while (Ol !== 0);
    if ((ol & 6) !== 0) throw Error(o(327));
    if (t !== null) {
      if (t === l.current) throw Error(o(177));
      l === gl && (F = gl = null, k = 0), Te = t, Gt = l, Pt = u, Zc = a, K0 = e, om(
        l,
        t,
        u,
        i,
        f,
        c,
        O
      );
    }
  }
  function om(l, t, u, e, a, n, i) {
    var f = t.lanes | t.childLanes;
    if (Qc = f, f |= Nf, jy(
      l,
      u,
      f,
      e,
      a,
      n
    ), la = null, (u & 335544064) === u ? (ta = xv(l), e = 10262) : (ta = null, e = 10256), (t.subtreeFlags & e) !== 0 || (t.flags & e) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, mm(mn, function() {
      return Wc(), null;
    })) : (l.callbackNode = null, l.callbackPriority = 0), di = !1, e = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || e) {
      e = B.T, B.T = null, a = L.p, L.p = 2, n = ol, ol |= 4;
      try {
        tm(l, t, u);
      } finally {
        ol = n, L.p = a, B.T = e;
      }
    }
    Ol = 1, di ? Pe = jm(
      i,
      l.containerInfo,
      ta,
      Kc,
      Jc,
      sm,
      wc,
      Wc,
      rm
    ) : (Kc(), Jc(), wc());
  }
  function rm(l) {
    if (Ol !== 0) {
      var t = Gt.onRecoverableError;
      t(l, { componentStack: null });
    }
  }
  function sm() {
    Ol === 3 && (Ol = 0, q0(Te, Gt), Ol = 4);
  }
  function Kc() {
    if (Ol === 1) {
      Ol = 0;
      var l = Gt, t = Te, u = Pt, e = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || e) {
        e = B.T, B.T = null;
        var a = L.p;
        L.p = 2;
        var n = ol;
        ol |= 4;
        try {
          Ja = mi = !1, Y0(t, l, u), u = io;
          var i = Hr(l.containerInfo), f = u.focusedElem, c = u.selectionRange;
          if (i !== f && f && f.ownerDocument && Rr(
            f.ownerDocument.documentElement,
            f
          )) {
            if (c !== null && Tf(f)) {
              var m = c.start, T = c.end;
              if (T === void 0 && (T = m), "selectionStart" in f)
                f.selectionStart = m, f.selectionEnd = Math.min(
                  T,
                  f.value.length
                );
              else {
                var O = f.ownerDocument || document, y = O && O.defaultView || window;
                if (y.getSelection) {
                  var S = y.getSelection(), A = f.textContent.length, D = Math.min(c.start, A), w = c.end === void 0 ? D : Math.min(c.end, A);
                  !S.extend && D > w && (i = w, w = D, D = i);
                  var v = Ur(
                    f,
                    D
                  ), s = Ur(
                    f,
                    w
                  );
                  if (v && s && (S.rangeCount !== 1 || S.anchorNode !== v.node || S.anchorOffset !== v.offset || S.focusNode !== s.node || S.focusOffset !== s.offset)) {
                    var g = O.createRange();
                    g.setStart(v.node, v.offset), S.removeAllRanges(), D > w ? (S.addRange(g), S.extend(s.node, s.offset)) : (g.setEnd(s.node, s.offset), S.addRange(g));
                  }
                }
              }
            }
            for (O = [], S = f; S = S.parentNode; )
              S.nodeType === 1 && O.push({
                element: S,
                left: S.scrollLeft,
                top: S.scrollTop
              });
            for (typeof f.focus == "function" && f.focus(), f = 0; f < O.length; f++) {
              var z = O[f];
              z.element.scrollLeft = z.left, z.element.scrollTop = z.top;
            }
          }
          da = !!no, io = no = null;
        } finally {
          ol = n, L.p = a, B.T = e;
        }
      }
      l.current = t, Ol = 2;
    }
  }
  function Jc() {
    if (Ol === 2) {
      Ol = 0;
      var l = Gt, t = Te, u = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || u) {
        u = B.T, B.T = null;
        var e = L.p;
        L.p = 2;
        var a = ol;
        ol |= 4;
        try {
          D0(l, t.alternate, t);
        } finally {
          ol = a, L.p = e, B.T = u;
        }
      }
      Ol = 3;
    }
  }
  function wc() {
    if (Ol === 4 || Ol === 3) {
      Ol = 0;
      var l = Pe;
      Pe = null, Ay();
      var t = Gt, u = Te, e = Pt, a = K0, n = (e & 335544064) === e ? 10262 : 10256;
      if ((u.subtreeFlags & n) !== 0 || (u.flags & n) !== 0 ? Ol = 5 : (Ol = 0, Te = Gt = null, ed(t, t.pendingLanes)), n = t.pendingLanes, n === 0 && (Xu = null), tf(e), u = u.stateNode, ot && typeof ot.onCommitFiberRoot == "function")
        try {
          ot.onCommitFiberRoot(
            ma,
            u,
            void 0,
            (u.current.flags & 128) === 128
          );
        } catch {
        }
      if (a !== null) {
        u = B.T, n = L.p, L.p = 2, B.T = null;
        try {
          for (var i = t.onRecoverableError, f = 0; f < a.length; f++) {
            var c = a[f];
            i(c.value, {
              componentStack: c.stack
            });
          }
        } finally {
          B.T = u, L.p = n;
        }
      }
      if (a = la, i = ta, ta = null, a !== null && (la = null, i === null && (i = []), l !== null))
        for (c = 0; c < a.length; c++)
          u = (0, a[c])(
            i
          ), u !== void 0 && l.finished.finally(u);
      (Pt & 3) !== 0 && pi(), lu(t), n = t.pendingLanes, (e & 261930) !== 0 && (n & 42) !== 0 ? t === Oi ? Fa++ : (Fa = 0, Oi = t) : (Fa = 0, Oi = null), Ia(0);
    }
  }
  function ed(l, t) {
    (l.pooledCacheLanes &= t) === 0 && (t = l.pooledCache, t != null && (l.pooledCache = null, Ua(t)));
  }
  function pi() {
    return Pe !== null && (Pe.skipTransition(), Pe = null), Kc(), Jc(), wc(), Wc();
  }
  function Wc() {
    if (Ol !== 5) return !1;
    var l = Gt, t = Qc;
    Qc = 0;
    var u = tf(Pt), e = B.T, a = L.p;
    try {
      L.p = 32 > u ? 32 : u, B.T = null, u = Zc, Zc = null;
      var n = Gt, i = Pt;
      if (Ol = 0, Te = Gt = null, Pt = 0, (ol & 6) !== 0) throw Error(o(331));
      var f = ol;
      if (ol |= 4, Z0(n.current), G0(
        n,
        n.current,
        i,
        u
      ), ol = f, Ia(0, !1), ot && typeof ot.onPostCommitFiberRoot == "function")
        try {
          ot.onPostCommitFiberRoot(ma, n);
        } catch {
        }
      return !0;
    } finally {
      L.p = a, B.T = e, ed(l, t);
    }
  }
  function ad(l, t, u) {
    t = pt(u, t), t = sc(l.stateNode, t, 2), l = Ru(l, t, 2), l !== null && (ga(l, 2), lu(l));
  }
  function yl(l, t, u) {
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
          if (typeof t.type.getDerivedStateFromError == "function" || typeof e.componentDidCatch == "function" && (Xu === null || !Xu.has(e))) {
            l = pt(u, l), u = l0(2), e = Ru(t, u, 2), e !== null && (t0(
              u,
              e,
              t,
              l
            ), ga(e, 2), lu(e));
            break;
          }
        }
        t = t.return;
      }
  }
  function $c(l, t, u) {
    var e = l.pingCache;
    if (e === null) {
      e = l.pingCache = new am();
      var a = /* @__PURE__ */ new Set();
      e.set(t, a);
    } else
      a = e.get(t), a === void 0 && (a = /* @__PURE__ */ new Set(), e.set(t, a));
    a.has(u) || (Gc = !0, a.add(u), l = dm.bind(null, l, t, u), t.then(l, l));
  }
  function dm(l, t, u) {
    var e = l.pingCache;
    e !== null && e.delete(t), l.pingedLanes |= l.suspendedLanes & u, l.warmLanes &= ~u, gl === l && (k & u) === u && ((Nl === 4 || Nl === 3 && (k & 62914560) === k && 300 > ct() - Ti) && (ol & 2) === 0 ? ea(l, 0) : bi |= u, ke === k && (ke = 0)), lu(l);
  }
  function nd(l, t) {
    t === 0 && (t = Lo()), l = ae(l, t), l !== null && (ga(l, t), lu(l));
  }
  function ym(l) {
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
  function mm(l, t) {
    return Ii(l, t);
  }
  var na = null, ia = null, Fc = !1, Mi = !1, Ic = !1, Zu = 0;
  function lu(l) {
    l !== ia && l.next === null && (ia === null ? na = ia = l : ia = ia.next = l), Mi = !0, Fc || (Fc = !0, gm());
  }
  function Ia(l, t) {
    if (!Ic && Mi) {
      Ic = !0;
      do
        for (var u = !1, e = na; e !== null; ) {
          if (l !== 0) {
            var a = e.pendingLanes;
            if (a === 0) var n = 0;
            else {
              var i = e.suspendedLanes, f = e.pingedLanes;
              n = (1 << 31 - rt(42 | l) + 1) - 1, n &= a & ~(i & ~f), n = n & 201326741 ? n & 201326741 | 1 : n ? n | 2 : 0;
            }
            n !== 0 && (u = !0, od(e, n));
          } else
            n = k, n = bn(
              e,
              e === gl ? n : 0,
              e.cancelPendingCommit !== null || e.timeoutHandle !== -1
            ), (n & 3) === 0 || ha(e, n) || (u = !0, od(e, n));
          e = e.next;
        }
      while (u);
      Ic = !1;
    }
  }
  function hm() {
    id();
  }
  function id() {
    Mi = Fc = !1;
    var l = 0;
    Zu !== 0 && Mm() && (l = Zu);
    for (var t = ct(), u = null, e = na; e !== null; ) {
      var a = e.next, n = fd(e, t);
      n === 0 ? (e.next = null, u === null ? na = a : u.next = a, a === null && (ia = u)) : (u = e, (l !== 0 || (n & 3) !== 0) && (Mi = !0)), e = a;
    }
    Ol !== 0 && Ol !== 5 || Ia(l), Zu !== 0 && (Zu = 0);
  }
  function fd(l, t) {
    for (var u = l.suspendedLanes, e = l.pingedLanes, a = l.expirationTimes, n = l.pendingLanes & -62914561; 0 < n; ) {
      var i = 31 - rt(n), f = 1 << i, c = a[i];
      c === -1 ? ((f & u) === 0 || (f & e) !== 0) && (a[i] = By(f, t)) : c <= t && (l.expiredLanes |= f), n &= ~f;
    }
    if (t = gl, u = k, u = bn(
      l,
      l === t ? u : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), e = l.callbackNode, u === 0 || l === t && (dl === 2 || dl === 9) || l.cancelPendingCommit !== null)
      return e !== null && e !== null && ki(e), l.callbackNode = null, l.callbackPriority = 0;
    if ((u & 3) === 0 || ha(l, u)) {
      if (t = u & -u, t === l.callbackPriority) return t;
      switch (e !== null && ki(e), tf(u)) {
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
      return e = cd.bind(null, l), u = Ii(u, e), l.callbackPriority = t, l.callbackNode = u, t;
    }
    return e !== null && e !== null && ki(e), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function cd(l, t) {
    if (Ol !== 0 && Ol !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var u = l.callbackNode;
    if (pi() && l.callbackNode !== u)
      return null;
    var e = k;
    return e = bn(
      l,
      l === gl ? e : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), e === 0 ? null : (w0(l, e, t), fd(l, ct()), l.callbackNode != null && l.callbackNode === u ? cd.bind(null, l) : null);
  }
  function od(l, t) {
    if (pi()) return null;
    w0(l, t, !0);
  }
  function gm() {
    Dm(function() {
      (ol & 6) !== 0 ? Ii(
        Xo,
        hm
      ) : id();
    });
  }
  function kc() {
    if (Zu === 0) {
      var l = re;
      l === 0 && (l = hn, hn <<= 1, (hn & 261888) === 0 && (hn = 256)), Zu = l;
    }
    return Zu;
  }
  function rd(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : _n(l);
  }
  function Sm(l, t, u, e, a) {
    if (t === "submit" && u && u.stateNode === a) {
      var n = rd(
        (a[lt] || null).action
      ), i = e.submitter;
      i && (t = (t = i[lt] || null) ? rd(t.formAction) : i.getAttribute("formAction"), t !== null && (n = t, i = null));
      var f = new Mn(
        "action",
        "action",
        null,
        e,
        a
      );
      l.push({
        event: f,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (e.defaultPrevented) {
                if (Zu !== 0) {
                  var c = new FormData(a, i);
                  ic(
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
                typeof n == "function" && (f.preventDefault(), c = new FormData(a, i), ic(
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
  for (var Pc = 0; Pc < _f.length; Pc++) {
    var lo = _f[Pc], bm = lo.toLowerCase(), Tm = lo[0].toUpperCase() + lo.slice(1);
    jt(
      bm,
      "on" + Tm
    );
  }
  jt(Yr, "onAnimationEnd"), jt(xr, "onAnimationIteration"), jt(qr, "onAnimationStart"), jt("dblclick", "onDoubleClick"), jt("focusin", "onFocus"), jt("focusout", "onBlur"), jt(Cv, "onTransitionRun"), jt(Dv, "onTransitionStart"), jt(Uv, "onTransitionCancel"), jt(Gr, "onTransitionEnd"), Me("onMouseEnter", ["mouseout", "mouseover"]), Me("onMouseLeave", ["mouseout", "mouseover"]), Me("onPointerEnter", ["pointerout", "pointerover"]), Me("onPointerLeave", ["pointerout", "pointerover"]), te(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), te(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), te("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), te(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), te(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), te(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var ka = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Em = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ka)
  );
  function sd(l, t) {
    t = (t & 4) !== 0;
    for (var u = 0; u < l.length; u++) {
      var e = l[u], a = e.event;
      e = e.listeners;
      l: {
        var n = void 0;
        if (t)
          for (var i = e.length - 1; 0 <= i; i--) {
            var f = e[i], c = f.instance, m = f.currentTarget;
            if (f = f.listener, c !== n && a.isPropagationStopped())
              break l;
            n = f, a.currentTarget = m;
            try {
              n(a);
            } catch (T) {
              Un(T);
            }
            a.currentTarget = null, n = c;
          }
        else
          for (i = 0; i < e.length; i++) {
            if (f = e[i], c = f.instance, m = f.currentTarget, f = f.listener, c !== n && a.isPropagationStopped())
              break l;
            n = f, a.currentTarget = m;
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
  function I(l, t) {
    var u = t[Fo];
    u === void 0 && (u = t[Fo] = /* @__PURE__ */ new Set());
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
  var Ci = "_reactListening" + Math.random().toString(36).slice(2);
  function uo(l) {
    if (!l[Ci]) {
      l[Ci] = !0, Po.forEach(function(u) {
        u !== "selectionchange" && (Em.has(u) || to(u, !1, l), to(u, !0, l));
      });
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[Ci] || (t[Ci] = !0, to("selectionchange", !1, t));
    }
  }
  function dd(l, t, u, e) {
    switch (ty(t)) {
      case 2:
        var a = y1;
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
    ), a = void 0, !rf || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (a = !0), e ? a !== void 0 ? l.addEventListener(t, u, {
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
        var i = e.tag;
        if (i === 3 || i === 4) {
          var f = e.stateNode.containerInfo;
          if (f === a) break;
          if (i === 4)
            for (i = e.return; i !== null; ) {
              var c = i.tag;
              if ((c === 3 || c === 4) && i.stateNode.containerInfo === a)
                return;
              i = i.return;
            }
          for (; f !== null; ) {
            if (i = le(f), i === null) return;
            if (c = i.tag, c === 5 || c === 6 || c === 26 || c === 27) {
              e = n = i;
              continue l;
            }
            f = f.parentNode;
          }
        }
        e = e.return;
      }
    dr(function() {
      var m = n, T = cf(u), O = [];
      l: {
        var y = Xr.get(l);
        if (y !== void 0) {
          var S = Mn, A = l;
          switch (l) {
            case "keypress":
              if (An(u) === 0) break l;
            case "keydown":
            case "keyup":
              S = nv;
              break;
            case "focusin":
              A = "focus", S = vf;
              break;
            case "focusout":
              A = "blur", S = vf;
              break;
            case "beforeblur":
            case "afterblur":
              S = vf;
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
              S = mr;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              S = wy;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              S = rv;
              break;
            case Yr:
            case xr:
            case qr:
              S = Fy;
              break;
            case Gr:
              S = dv;
              break;
            case "scroll":
            case "scrollend":
              S = Ky;
              break;
            case "wheel":
              S = vv;
              break;
            case "copy":
            case "cut":
            case "paste":
              S = ky;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              S = gr;
              break;
            case "submit":
              S = cv;
              break;
            case "toggle":
            case "beforetoggle":
              S = hv;
          }
          var D = (t & 4) !== 0, w = !D && (l === "scroll" || l === "scrollend"), v = D ? y !== null ? y + "Capture" : null : y;
          D = [];
          for (var s = m, g; s !== null; ) {
            var z = s;
            if (g = z.stateNode, z = z.tag, z !== 5 && z !== 26 && z !== 27 || g === null || v === null || (z = Ta(s, v), z != null && D.push(
              Pa(s, z, g)
            )), w) break;
            s = s.return;
          }
          0 < D.length && (y = new S(
            y,
            A,
            null,
            u,
            T
          ), O.push({ event: y, listeners: D }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (S = l === "mouseover" || l === "pointerover", y = l === "mouseout" || l === "pointerout", S && u !== ff && (A = u.relatedTarget || u.fromElement) && (le(A) || A[Ne]))
            break l;
          (y || S) && (A = T.window === T ? T : (S = T.ownerDocument) ? S.defaultView || S.parentWindow : window, y ? (S = u.relatedTarget || u.toElement, y = m, S = S ? le(S) : null, S !== null && (w = p(S), D = S.tag, S !== w || D !== 5 && D !== 27 && D !== 6) && (S = null)) : (y = null, S = m), y !== S && (D = mr, z = "onMouseLeave", v = "onMouseEnter", s = "mouse", (l === "pointerout" || l === "pointerover") && (D = gr, z = "onPointerLeave", v = "onPointerEnter", s = "pointer"), w = y == null ? A : ba(y), g = S == null ? A : ba(S), A = new D(
            z,
            s + "leave",
            y,
            u,
            T
          ), A.target = w, A.relatedTarget = g, z = null, le(T) === m && (D = new D(
            v,
            s + "enter",
            S,
            u,
            T
          ), D.target = g, D.relatedTarget = w, z = D), w = z, D = y && S ? it(
            y,
            S,
            zm
          ) : null, y !== null && yd(
            O,
            A,
            y,
            D,
            !1
          ), S !== null && w !== null && yd(
            O,
            w,
            S,
            D,
            !0
          )));
        }
        l: {
          if (y = m ? ba(m) : window, S = y.nodeName && y.nodeName.toLowerCase(), S === "select" || S === "input" && y.type === "file")
            var C = Nr;
          else if (Or(y))
            if (Ar)
              C = Av;
            else {
              C = _v;
              var P = Ov;
            }
          else
            S = y.nodeName, !S || S.toLowerCase() !== "input" || y.type !== "checkbox" && y.type !== "radio" ? m && nf(m.elementType) && (C = Nr) : C = Nv;
          if (C && (C = C(l, m))) {
            _r(
              O,
              C,
              u,
              T
            );
            break l;
          }
          P && P(l, y, m);
        }
        switch (P = m ? ba(m) : window, l) {
          case "focusin":
            (Or(P) || P.contentEditable === "true") && (Be = P, Ef = m, Ma = null);
            break;
          case "focusout":
            Ma = Ef = Be = null;
            break;
          case "mousedown":
            zf = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            zf = !1, Br(O, u, T);
            break;
          case "selectionchange":
            if (Mv) break;
          case "keydown":
          case "keyup":
            Br(O, u, T);
        }
        var Y;
        if (hf)
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
          He ? Er(l, u) && (Q = "onCompositionEnd") : l === "keydown" && u.keyCode === 229 && (Q = "onCompositionStart");
        Q && (Sr && u.locale !== "ko" && (He || Q !== "onCompositionStart" ? Q === "onCompositionEnd" && He && (Y = yr()) : (Ou = T, sf = "value" in Ou ? Ou.value : Ou.textContent, He = !0)), P = Di(m, Q), 0 < P.length && (Q = new hr(
          Q,
          l,
          null,
          u,
          T
        ), O.push({ event: Q, listeners: P }), Y ? Q.data = Y : (Y = zr(u), Y !== null && (Q.data = Y)))), (Y = Sv ? bv(l, u) : Tv(l, u)) && (Q = Di(m, "onBeforeInput"), 0 < Q.length && (P = new hr(
          "onBeforeInput",
          "beforeinput",
          null,
          u,
          T
        ), O.push({
          event: P,
          listeners: Q
        }), P.data = Y)), Sm(
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
  function Pa(l, t, u) {
    return {
      instance: l,
      listener: t,
      currentTarget: u
    };
  }
  function Di(l, t) {
    for (var u = t + "Capture", e = []; l !== null; ) {
      var a = l, n = a.stateNode;
      if (a = a.tag, a !== 5 && a !== 26 && a !== 27 || n === null || (a = Ta(l, u), a != null && e.unshift(
        Pa(l, a, n)
      ), a = Ta(l, t), a != null && e.push(
        Pa(l, a, n)
      )), l.tag === 3) return e;
      l = l.return;
    }
    return [];
  }
  function zm(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function yd(l, t, u, e, a) {
    for (var n = t._reactName, i = []; u !== null && u !== e; ) {
      var f = u, c = f.alternate, m = f.stateNode;
      if (f = f.tag, c !== null && c === e) break;
      f !== 5 && f !== 26 && f !== 27 || m === null || (c = m, a ? (m = Ta(u, n), m != null && i.unshift(
        Pa(u, m, c)
      )) : a || (m = Ta(u, n), m != null && i.push(
        Pa(u, m, c)
      ))), u = u.return;
    }
    i.length !== 0 && l.push({ event: t, listeners: i });
  }
  var Om = /\r\n?/g, _m = /\u0000|\uFFFD/g;
  function vd(l) {
    return (typeof l == "string" ? l : "" + l).replace(Om, `
`).replace(_m, "");
  }
  function md(l, t) {
    return t = vd(t), vd(l) === t;
  }
  function vl(l, t, u, e, a, n) {
    switch (u) {
      case "children":
        if (typeof e == "string")
          t === "body" || t === "textarea" && e === "" || De(l, e);
        else if (typeof e == "number" || typeof e == "bigint")
          t !== "body" && De(l, "" + e);
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
        e != null && (l.onclick = Lt);
        return;
      case "onScroll":
        e != null && I("scroll", l);
        return;
      case "onScrollEnd":
        e != null && I("scrollend", l);
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
        I("beforetoggle", l), I("toggle", l), zn(l, "popover", e);
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
          u = Vy.get(u) || u, zn(l, u, e);
        else return;
    }
    il = !0;
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
        if (typeof e == "string") De(l, e);
        else if (typeof e == "number" || typeof e == "bigint")
          De(l, "" + e);
        else return;
        break;
      case "onScroll":
        e != null && I("scroll", l);
        return;
      case "onScrollEnd":
        e != null && I("scrollend", l);
        return;
      case "onClick":
        e != null && (l.onclick = Lt);
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
            if (u[0] === "o" && u[1] === "n" && (a = u.endsWith("Capture"), n = u.slice(2, a ? u.length - 7 : void 0), t = l[lt] || null, t = t != null ? t[u] : null, typeof t == "function" && l.removeEventListener(n, t, a), typeof e == "function")) {
              typeof t != "function" && t !== null && (u in l ? l[u] = null : l.hasAttribute(u) && l.removeAttribute(u)), l.addEventListener(n, e, a);
              break l;
            }
            il = !0, u in l ? l[u] = e : e === !0 ? l.setAttribute(u, "") : zn(l, u, e);
          }
        return;
    }
    il = !0;
  }
  function Jl(l, t, u) {
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
        I("error", l), I("load", l);
        var e = !1, a = !1, n;
        for (n in u)
          if (u.hasOwnProperty(n)) {
            var i = u[n];
            if (i != null)
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
                  vl(l, t, n, i, u, null);
              }
          }
        a && vl(l, t, "srcSet", u.srcSet, u, null), e && vl(l, t, "src", u.src, u, null);
        return;
      case "input":
        I("invalid", l);
        var f = n = i = a = null, c = null, m = null;
        for (e in u)
          if (u.hasOwnProperty(e)) {
            var T = u[e];
            if (T != null)
              switch (e) {
                case "name":
                  a = T;
                  break;
                case "type":
                  i = T;
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
                  f = T;
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
        ir(
          l,
          n,
          f,
          c,
          m,
          i,
          a,
          !1
        );
        return;
      case "select":
        I("invalid", l), e = i = n = null;
        for (a in u)
          if (u.hasOwnProperty(a) && (f = u[a], f != null))
            switch (a) {
              case "value":
                n = f;
                break;
              case "defaultValue":
                i = f;
                break;
              case "multiple":
                e = f;
              default:
                vl(l, t, a, f, u, null);
            }
        t = n, u = i, l.multiple = !!e, t != null ? Ce(l, !!e, t, !1) : u != null && Ce(l, !!e, u, !0);
        return;
      case "textarea":
        I("invalid", l), n = a = e = null;
        for (i in u)
          if (u.hasOwnProperty(i) && (f = u[i], f != null))
            switch (i) {
              case "value":
                e = f;
                break;
              case "defaultValue":
                a = f;
                break;
              case "children":
                n = f;
                break;
              case "dangerouslySetInnerHTML":
                if (f != null) throw Error(o(91));
                break;
              default:
                vl(l, t, i, f, u, null);
            }
        cr(l, e, a, n);
        return;
      case "option":
        for (c in u)
          u.hasOwnProperty(c) && (e = u[c], e != null) && (c === "selected" ? l.selected = e && typeof e != "function" && typeof e != "symbol" : vl(l, t, c, e, u, null));
        return;
      case "dialog":
        I("beforetoggle", l), I("toggle", l), I("cancel", l), I("close", l);
        break;
      case "iframe":
      case "object":
        I("load", l);
        break;
      case "video":
      case "audio":
        for (e = 0; e < ka.length; e++)
          I(ka[e], l);
        break;
      case "image":
        I("error", l), I("load", l);
        break;
      case "details":
        I("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        I("error", l), I("load", l);
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
        if (nf(t)) {
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
    for (f in u)
      u.hasOwnProperty(f) && (e = u[f], e != null && vl(l, t, f, e, u, null));
  }
  var Nm = {};
  function Am(l, t, u, e) {
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
        var a = null, n = null, i = null, f = null, c = null, m = null, T = null;
        for (S in u) {
          var O = u[S];
          if (u.hasOwnProperty(S) && O != null)
            switch (S) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                c = O;
              default:
                e.hasOwnProperty(S) || vl(l, t, S, null, e, O);
            }
        }
        for (var y in e) {
          var S = e[y];
          if (O = u[y], e.hasOwnProperty(y) && (S != null || O != null))
            switch (y) {
              case "type":
                S !== O && (il = !0), n = S;
                break;
              case "name":
                S !== O && (il = !0), a = S;
                break;
              case "checked":
                S !== O && (il = !0), m = S;
                break;
              case "defaultChecked":
                S !== O && (il = !0), T = S;
                break;
              case "value":
                S !== O && (il = !0), i = S;
                break;
              case "defaultValue":
                S !== O && (il = !0), f = S;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (S != null)
                  throw Error(o(137, t));
                break;
              default:
                S !== O && vl(
                  l,
                  t,
                  y,
                  S,
                  e,
                  O
                );
            }
        }
        ef(
          l,
          i,
          f,
          c,
          m,
          T,
          n,
          a
        );
        return;
      case "select":
        S = i = f = y = null;
        for (n in u)
          if (c = u[n], u.hasOwnProperty(n) && c != null)
            switch (n) {
              case "value":
                break;
              case "multiple":
                S = c;
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
                n !== c && (il = !0), y = n;
                break;
              case "defaultValue":
                n !== c && (il = !0), f = n;
                break;
              case "multiple":
                n !== c && (il = !0), i = n;
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
        t = f, u = i, e = S, y != null ? Ce(l, !!u, y, !1) : !!e != !!u && (t != null ? Ce(l, !!u, t, !0) : Ce(l, !!u, u ? [] : "", !1));
        return;
      case "textarea":
        S = y = null;
        for (f in u)
          if (a = u[f], u.hasOwnProperty(f) && a != null && !e.hasOwnProperty(f))
            switch (f) {
              case "value":
                break;
              case "children":
                break;
              default:
                vl(l, t, f, null, e, a);
            }
        for (i in e)
          if (a = e[i], n = u[i], e.hasOwnProperty(i) && (a != null || n != null))
            switch (i) {
              case "value":
                a !== n && (il = !0), y = a;
                break;
              case "defaultValue":
                a !== n && (il = !0), S = a;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (a != null) throw Error(o(91));
                break;
              default:
                a !== n && vl(l, t, i, a, e, n);
            }
        fr(l, y, S);
        return;
      case "option":
        for (var A in u)
          y = u[A], u.hasOwnProperty(A) && y != null && !e.hasOwnProperty(A) && (A === "selected" ? l.selected = !1 : vl(
            l,
            t,
            A,
            null,
            e,
            y
          ));
        for (c in e)
          y = e[c], S = u[c], e.hasOwnProperty(c) && y !== S && (y != null || S != null) && (c === "selected" ? (y !== S && (il = !0), l.selected = y && typeof y != "function" && typeof y != "symbol") : vl(
            l,
            t,
            c,
            y,
            e,
            S
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
          y = u[D], u.hasOwnProperty(D) && y != null && !e.hasOwnProperty(D) && vl(l, t, D, null, e, y);
        for (m in e)
          if (y = e[m], S = u[m], e.hasOwnProperty(m) && y !== S && (y != null || S != null))
            switch (m) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (y != null)
                  throw Error(o(137, t));
                break;
              default:
                vl(
                  l,
                  t,
                  m,
                  y,
                  e,
                  S
                );
            }
        return;
      default:
        if (nf(t)) {
          for (var w in u)
            y = u[w], u.hasOwnProperty(w) && y !== void 0 && !e.hasOwnProperty(w) && ao(
              l,
              t,
              w,
              void 0,
              e,
              y
            );
          for (T in e)
            y = e[T], S = u[T], !e.hasOwnProperty(T) || y === S || y === void 0 && S === void 0 || ao(
              l,
              t,
              T,
              y,
              e,
              S
            );
          return;
        }
    }
    for (var v in u)
      y = u[v], u.hasOwnProperty(v) && y != null && !e.hasOwnProperty(v) && vl(l, t, v, null, e, y);
    for (O in e)
      y = e[O], S = u[O], !e.hasOwnProperty(O) || y === S || y == null && S == null || vl(l, t, O, y, e, S);
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
  function pm() {
    if (typeof performance.getEntriesByType == "function") {
      for (var l = 0, t = 0, u = performance.getEntriesByType("resource"), e = 0; e < u.length; e++) {
        var a = u[e], n = a.transferSize, i = a.initiatorType, f = a.duration;
        if (n && f && hd(i)) {
          for (i = 0, f = a.responseEnd, e += 1; e < u.length; e++) {
            var c = u[e], m = c.startTime;
            if (m > f) break;
            var T = c.transferSize, O = c.initiatorType;
            T && hd(O) && (c = c.responseEnd, i += T * (c < f ? 1 : (f - m) / (c - m)));
          }
          if (--e, t += 8 * (n + i) / (a.duration / 1e3), l++, 10 < l) break;
        }
      }
      if (0 < l) return t / l / 1e6;
    }
    return navigator.connection && (l = navigator.connection.downlink, typeof l == "number") ? l : 5;
  }
  var no = null, io = null;
  function ln(l) {
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
  function bd(l, t, u, e) {
    return u = ln(
      u
    ).createElement(l), u[Ql] = e, u[lt] = t, Jl(u, l, t), Bl(u), u;
  }
  function fo(l, t) {
    return l === "textarea" || l === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var co = null;
  function Mm() {
    var l = window.event;
    return l && l.type === "popstate" ? l === co ? !1 : (co = l, !0) : (co = null, !1);
  }
  var oo = typeof setTimeout == "function" ? setTimeout : void 0, Cm = typeof clearTimeout == "function" ? clearTimeout : void 0, Td = typeof Promise == "function" ? Promise : void 0, Ed = typeof requestAnimationFrame == "function" ? requestAnimationFrame : oo, Dm = typeof queueMicrotask == "function" ? queueMicrotask : typeof Td < "u" ? function(l) {
    return Td.resolve(null).then(l).catch(Um);
  } : oo;
  function Um(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function Vu(l) {
    return l === "head";
  }
  function zd(l, t) {
    var u = t, e = 0;
    do {
      var a = u.nextSibling;
      if (l.removeChild(u), a && a.nodeType === 8)
        if (u = a.data, u === "/$" || u === "/&") {
          if (e === 0) {
            l.removeChild(a), ya(t);
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
            var i = n.nextSibling, f = n.nodeName;
            n[Sa] || f === "SCRIPT" || f === "STYLE" || f === "LINK" && n.rel.toLowerCase() === "stylesheet" || u.removeChild(n), n = i;
          }
        } else
          u === "body" && So(l.ownerDocument.body);
      u = a;
    } while (u);
    ya(t);
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
  function Rm(l, t, u) {
    return u = u.ownerDocument.defaultView, {
      rect: l,
      abs: t.position === "absolute" || t.position === "fixed",
      clip: t.clipPath !== "none" || t.overflow !== "visible" || t.filter !== "none" || t.mask !== "none" || t.mask !== "none" || t.borderRadius !== "0px",
      view: 0 <= l.bottom && 0 <= l.right && l.top <= u.innerHeight && l.left <= u.innerWidth
    };
  }
  function ro(l) {
    var t = l.getBoundingClientRect(), u = getComputedStyle(l);
    return Rm(t, u, l);
  }
  function Hm(l) {
    return l.documentElement.clientHeight;
  }
  function Bm(l) {
    this.addEventListener("load", l), this.addEventListener("error", l);
  }
  function jm(l, t, u, e, a, n, i, f, c) {
    var m = t.nodeType === 9 ? t : t.ownerDocument;
    try {
      var T = m.startViewTransition({
        update: function() {
          var y = m.defaultView, S = y.navigation && y.navigation.transition, A = m.fonts.status;
          e();
          var D = [];
          if (A === "loaded" && (Hm(m), m.fonts.status === "loading" && D.push(m.fonts.ready)), A = D.length, l !== null)
            for (var w = l.suspenseyImages, v = 0, s = 0; s < w.length; s++) {
              var g = w[s];
              if (!g.complete) {
                var z = g.getBoundingClientRect();
                if (0 < z.bottom && 0 < z.right && z.top < y.innerHeight && z.left < y.innerWidth) {
                  if (v += Jd(g), v > Hi) {
                    D.length = A;
                    break;
                  }
                  g = new Promise(
                    Bm.bind(g)
                  ), D.push(g);
                }
              }
            }
          if (0 < D.length)
            return y = Promise.race([
              Promise.all(D),
              new Promise(function(C) {
                return setTimeout(C, 500);
              })
            ]).then(a, a), (S ? Promise.allSettled([S.finished, y]) : y).then(n, n);
          if (a(), S)
            return S.finished.then(
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
          for (var y = m.documentElement.getAnimations({
            subtree: !0
          }), S = 0; S < y.length; S++) {
            var A = y[S], D = A.effect, w = D.pseudoElement;
            if (w != null && w.startsWith("::view-transition")) {
              O.push(A), A = D.getKeyframes();
              for (var v = w = void 0, s = !0, g = 0; g < A.length; g++) {
                var z = A[g], C = z.width;
                if (w === void 0) w = C;
                else if (w !== C) {
                  s = !1;
                  break;
                }
                if (C = z.height, v === void 0) v = C;
                else if (v !== C) {
                  s = !1;
                  break;
                }
                delete z.width, delete z.height, z.transform === "none" && delete z.transform;
              }
              s && w !== void 0 && v !== void 0 && (D.setKeyframes(A), s = getComputedStyle(
                D.target,
                D.pseudoElement
              ), s.width !== w || s.height !== v) && (s = A[0], s.width = w, s.height = v, s = A[A.length - 1], s.width = w, s.height = v, D.setKeyframes(A));
            }
          }
          i();
        },
        function(y) {
          m.__reactViewTransition === T && (m.__reactViewTransition = null);
          try {
            typeof y == "object" && y !== null && y.name === "InvalidStateError" && (y.message === "View transition was skipped because document visibility state is hidden." || y.message === "Skipping view transition because document visibility state has become hidden." || y.message === "Skipping view transition because viewport size changed." || y.message === "Transition was aborted because of invalid state") && (y = null), y !== null && c(y);
          } finally {
            e(), a(), i();
          }
        }
      ), T.finished.finally(function() {
        for (var y = 0; y < O.length; y++)
          O[y].cancel();
        m.__reactViewTransition === T && (m.__reactViewTransition = null), f();
      }), T;
    } catch {
      return e(), a(), i(), null;
    }
  }
  function Ee(l, t) {
    this._scope = document.documentElement, this._selector = "::view-transition-" + l + "(" + t + ")";
  }
  Ee.prototype.animate = function(l, t) {
    return t = typeof t == "number" ? { duration: t } : $({}, t), t.pseudoElement = this._selector, this._scope.animate(l, t);
  }, Ee.prototype.getAnimations = function() {
    for (var l = this._scope, t = this._selector, u = l.getAnimations({ subtree: !0 }), e = [], a = 0; a < u.length; a++) {
      var n = u[a].effect;
      n !== null && n.target === l && n.pseudoElement === t && e.push(u[a]);
    }
    return e;
  }, Ee.prototype.getComputedStyle = function() {
    return getComputedStyle(this._scope, this._selector);
  };
  function Ad(l) {
    return {
      name: l,
      group: new Ee("group", l),
      imagePair: new Ee("image-pair", l),
      old: new Ee("old", l),
      new: new Ee("new", l)
    };
  }
  function St(l) {
    this._fragmentFiber = l, this._observers = this._eventListeners = null;
  }
  St.prototype.addEventListener = function(l, t, u) {
    var e = null, a = null;
    if (!(u != null && typeof u != "boolean" && (e = u.signal || null, e !== null && e.aborted))) {
      this._eventListeners === null && (this._eventListeners = []);
      var n = this._eventListeners;
      if (Md(n, l, t, u) === -1) {
        var i = this, f = t;
        u != null && typeof u != "boolean" && u.once === !0 && (f = function(c) {
          i.removeEventListener(
            l,
            t,
            u
          ), typeof t == "function" ? t.call(this, c) : t.handleEvent(c);
        }), e !== null && (a = i.removeEventListener.bind(
          i,
          l,
          t,
          u
        ), e.addEventListener("abort", a, { once: !0 }), a = e.removeEventListener.bind(e, "abort", a)), e = fa(u), n.push({
          type: l,
          listener: t,
          optionsOrUseCapture: u,
          attachedListener: f,
          cleanup: a
        }), E(
          this._fragmentFiber.child,
          !1,
          Ym,
          l,
          f,
          e
        );
      }
      this._eventListeners = n;
    }
  };
  function Ym(l, t, u, e) {
    return al(l).addEventListener(
      t,
      u,
      e
    ), !1;
  }
  St.prototype.removeEventListener = function(l, t, u) {
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
      a = fa(a.optionsOrUseCapture), E(
        this._fragmentFiber.child,
        !1,
        xm,
        l,
        u,
        a
      ), e.splice(t, 1), n !== null && n();
    }
  };
  function xm(l, t, u, e) {
    return al(l).removeEventListener(
      t,
      u,
      e
    ), !1;
  }
  function fa(l) {
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
  St.prototype.dispatchEvent = function(l) {
    var t = j(
      this._fragmentFiber
    );
    if (t === null) return !0;
    t = al(t);
    var u = this._eventListeners;
    if (u !== null && 0 < u.length || !l.bubbles) {
      var e = t.nodeType === 9 ? t.createComment("") : document.createTextNode("");
      if (u)
        for (var a = 0; a < u.length; a++) {
          var n = u[a];
          e.addEventListener(
            n.type,
            n.attachedListener,
            fa(n.optionsOrUseCapture)
          );
        }
      if (t.appendChild(e), l = e.dispatchEvent(l), u)
        for (a = 0; a < u.length; a++)
          n = u[a], e.removeEventListener(
            n.type,
            n.attachedListener,
            fa(n.optionsOrUseCapture)
          );
      return t.removeChild(e), l;
    }
    return t.dispatchEvent(l);
  }, St.prototype.focus = function(l) {
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
    return l.tag === 6 ? !1 : (l = al(l), $m(l, t));
  }
  St.prototype.focusLast = function(l) {
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
  St.prototype.blur = function() {
    var l = j(
      this._fragmentFiber
    );
    l !== null && (l = al(l), l = ln(l).activeElement, l !== null && E(
      this._fragmentFiber.child,
      !1,
      qm,
      l,
      void 0,
      void 0
    ));
  };
  function qm(l, t) {
    return l.tag === 6 ? !1 : (l = al(l), l === t || l.contains(t) ? (t.blur(), !0) : !1);
  }
  St.prototype.observeUsing = function(l) {
    this._observers === null && (this._observers = /* @__PURE__ */ new Set()), this._observers.add(l), E(
      this._fragmentFiber.child,
      !1,
      Gm,
      l,
      void 0,
      void 0
    );
  };
  function Gm(l, t) {
    return l.tag === 6 || (l = al(l), t.observe(l)), !1;
  }
  St.prototype.unobserveUsing = function(l) {
    var t = this._observers;
    if (t !== null && t.has(l)) {
      t.delete(l), E(
        this._fragmentFiber.child,
        !1,
        Xm,
        l,
        void 0,
        void 0
      );
      for (var u = t = 0; u < Xt.length; u++) {
        var e = Xt[u];
        e.fragmentInstance === this && e.observer === l ? l.unobserve(e.instance) : Xt[t++] = e;
      }
      Xt.length = t;
    }
  };
  function Xm(l, t) {
    return l.tag === 6 || (l = al(l), t.unobserve(l)), !1;
  }
  var Xt = [], yo = !1;
  function Qm(l, t, u) {
    Xt.push({
      fragmentInstance: l,
      observer: t,
      instance: u
    }), yo || (yo = !0, Fm(function() {
      yo = !1;
      var e = Xt;
      Xt = [];
      for (var a = 0; a < e.length; a++) {
        var n = e[a];
        n.observer.unobserve(n.instance);
      }
    }));
  }
  St.prototype.getClientRects = function() {
    var l = [];
    return E(
      this._fragmentFiber.child,
      !1,
      Zm,
      l,
      void 0,
      void 0
    ), l;
  };
  function Zm(l, t) {
    if (l.tag === 6) {
      l = l.stateNode;
      var u = l.ownerDocument.createRange();
      u.selectNodeContents(l), t.push.apply(t, u.getClientRects());
    } else
      l = al(l), t.push.apply(t, l.getClientRects());
    return !1;
  }
  St.prototype.getRootNode = function(l) {
    var t = j(
      this._fragmentFiber
    );
    return t === null ? this : al(t).getRootNode(l);
  }, St.prototype.compareDocumentPosition = function(l) {
    var t = j(
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
    var e = al(t);
    if (u.length === 0) {
      if (u = e, Sl(this._fragmentFiber)) {
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
      return u === l ? a = Node.DOCUMENT_POSITION_CONTAINS : e & Node.DOCUMENT_POSITION_CONTAINED_BY && (u = ql(t)[1], u === null ? a = Node.DOCUMENT_POSITION_PRECEDING : (l = al(u).compareDocumentPosition(
        l
      ), a = l === 0 || l & Node.DOCUMENT_POSITION_FOLLOWING ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING)), a |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
    }
    t = al(u[0]), a = al(u[u.length - 1]);
    var n = Sl(this._fragmentFiber) ? t.parentElement : e;
    if (n == null)
      return Node.DOCUMENT_POSITION_DISCONNECTED;
    e = n.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY, n = n.compareDocumentPosition(a) & Node.DOCUMENT_POSITION_CONTAINED_BY;
    var i = t.compareDocumentPosition(l), f = a.compareDocumentPosition(l), c = i & Node.DOCUMENT_POSITION_CONTAINED_BY || f & Node.DOCUMENT_POSITION_CONTAINED_BY;
    return f = e && n && i & Node.DOCUMENT_POSITION_FOLLOWING && f & Node.DOCUMENT_POSITION_PRECEDING, t = e && t === l || n && a === l || c || f ? Node.DOCUMENT_POSITION_CONTAINED_BY : !e && t === l || !n && a === l ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC : i, t & Node.DOCUMENT_POSITION_DISCONNECTED || t & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC || Vm(
      t,
      this._fragmentFiber,
      u[0],
      u[u.length - 1],
      l
    ) ? t : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
  };
  function Vm(l, t, u, e, a) {
    var n = le(a);
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
        for (n = t, t = j(t); n !== null; ) {
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
    return l & Node.DOCUMENT_POSITION_PRECEDING ? ((t = !!n) && !(t = n === u) && (t = it(
      u,
      n,
      zt
    ), t === null ? t = !1 : (E(
      t,
      !0,
      Rl,
      n,
      u
    ), n = Pl, Pl = null, t = n !== null)), t) : l & Node.DOCUMENT_POSITION_FOLLOWING ? ((t = !!n) && !(t = n === e) && (t = it(
      e,
      n,
      zt
    ), t === null ? t = !1 : (E(
      t,
      !0,
      Et,
      n,
      e
    ), n = Pl, ll = Pl = null, t = n !== null)), t) : !1;
  }
  function Dd(l, t) {
    var u = l.ownerDocument.createRange();
    u.selectNodeContents(l), l = u.getBoundingClientRect(), window.scrollTo(
      window.scrollX + l.left,
      t ? window.scrollY + l.top : window.scrollY + l.bottom - window.innerHeight
    );
  }
  St.prototype.scrollIntoView = function(l) {
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
      var e = ql(
        this._fragmentFiber
      );
      if (e = u ? e[1] || e[0] || j(this._fragmentFiber) : e[0] || e[1], e === null) return;
      if (e.tag === 6) {
        l = al(e), Dd(l, u);
        return;
      }
      if (e = al(e), e.nodeType !== 9) {
        if (e.nodeType === 11) {
          u = "host" in e ? e.host : null, u !== null && u.scrollIntoView(l);
          return;
        }
        e.scrollIntoView(l);
      }
    }
    for (e = u ? t.length - 1 : 0; e !== (u ? -1 : t.length); ) {
      var a = t[e];
      a.tag === 6 ? (a = al(a), Dd(a, u)) : al(a).scrollIntoView(l), e += u ? -1 : 1;
    }
  };
  function Lm(l, t) {
    return l = al(l), Ud(l, t), !1;
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
          fa(a.optionsOrUseCapture)
        );
      }
    l.nodeType !== 3 && (u = t._observers, u !== null && u.forEach(function(n) {
      for (var i = 0, f = 0; f < Xt.length; f++) {
        var c = Xt[f];
        (c.fragmentInstance !== t || c.observer !== n || c.instance !== l) && (Xt[i++] = c);
      }
      Xt.length = i, n.observe(l);
    }), Ud(l, t));
  }
  function Km(l, t) {
    var u = t._eventListeners;
    if (u !== null)
      for (var e = 0; e < u.length; e++) {
        var a = u[e];
        l.removeEventListener(
          a.type,
          a.attachedListener,
          fa(a.optionsOrUseCapture)
        );
      }
    l.nodeType !== 3 && (u = t._observers, u !== null && u.forEach(function(n) {
      typeof n.rootMargin == "string" ? Qm(
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
          vo(u), En(u);
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
  function Jm(l, t, u, e) {
    for (; l.nodeType === 1; ) {
      var a = u;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!e && (l.nodeName !== "INPUT" || l.type !== "hidden"))
          break;
      } else if (e) {
        if (!l[Sa])
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
      if (l = Rt(l.nextSibling), l === null) break;
    }
    return null;
  }
  function wm(l, t, u) {
    if (t === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !u || (l = Rt(l.nextSibling), l === null)) return null;
    return l;
  }
  function Hd(l, t) {
    for (; l.nodeType !== 8; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !t || (l = Rt(l.nextSibling), l === null)) return null;
    return l;
  }
  function mo(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function ho(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState !== "loading";
  }
  function Wm(l, t) {
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
  function Rt(l) {
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
            return Rt(l.nextSibling);
          t--;
        } else
          u !== "$" && u !== "$!" && u !== "$?" && u !== "$~" && u !== "&" || t++;
      }
      l = l.nextSibling;
    }
    return null;
  }
  function jd(l) {
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
  function Yd(l, t, u) {
    switch (t = ln(u), l) {
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
  function xd(l, t, u) {
    for (var e in u) {
      var a = u[e];
      u.hasOwnProperty(e) && a != null && vl(l, t, e, null, Nm, a);
    }
    u.dangerouslySetInnerHTML != null && (l.textContent = ""), l.onclick === Lt && (l.onclick = null), En(l);
  }
  function So(l) {
    for (var t = l.attributes; t.length; )
      l.removeAttributeNode(t[0]);
    En(l);
  }
  var Ht = /* @__PURE__ */ new Map(), qd = /* @__PURE__ */ new Set();
  function tn(l) {
    if (typeof l.getRootNode == "function") {
      var t = l.getRootNode();
      if (t.nodeType === 9 || t.nodeType === 11) return t;
    }
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  var gu = L.d;
  L.d = {
    f: Im,
    r: km,
    D: Pm,
    C: l1,
    L: t1,
    m: u1,
    X: a1,
    S: e1,
    M: n1
  };
  function Im() {
    var l = gu.f(), t = _i();
    return l || t;
  }
  function km(l) {
    var t = Ae(l);
    t !== null && t.tag === 5 && t.type === "form" ? Xs(t) : gu.r(l);
  }
  var ca = typeof document > "u" ? null : document;
  function Gd(l, t, u) {
    var e = ca;
    if (e && typeof t == "string" && t) {
      var a = Nt(t);
      a = 'link[rel="' + l + '"][href="' + a + '"]', typeof u == "string" && (a += '[crossorigin="' + u + '"]'), qd.has(a) || (qd.add(a), l = { rel: l, crossOrigin: u, href: t }, e.querySelector(a) === null && (t = e.createElement("link"), Jl(t, "link", l), Bl(t), e.head.appendChild(t)));
    }
  }
  function Pm(l) {
    gu.D(l), Gd("dns-prefetch", l, null);
  }
  function l1(l, t) {
    gu.C(l, t), Gd("preconnect", l, t);
  }
  function t1(l, t, u) {
    gu.L(l, t, u);
    var e = ca;
    if (e && l && t) {
      var a = 'link[rel="preload"][as="' + Nt(t) + '"]';
      t === "image" && u && u.imageSrcSet ? (a += '[imagesrcset="' + Nt(
        u.imageSrcSet
      ) + '"]', typeof u.imageSizes == "string" && (a += '[imagesizes="' + Nt(
        u.imageSizes
      ) + '"]')) : a += '[href="' + Nt(l) + '"]';
      var n = a;
      switch (t) {
        case "style":
          n = oa(l);
          break;
        case "script":
          n = ra(l);
      }
      if (!(Ht.has(n) || (l = $(
        {
          rel: "preload",
          href: t === "image" && u && u.imageSrcSet ? void 0 : l,
          as: t
        },
        u
      ), Ht.set(n, l), e.querySelector(a) !== null || t === "style" && e.querySelector(un(n)) || t === "script" && e.querySelector(en(n))))) {
        var i = e.createElement("link");
        Jl(i, "link", l), t === "style" && (i[Tn] = !0, i.onload = i.onerror = function() {
          ko(i);
        }), Bl(i), e.head.appendChild(i);
      }
    }
  }
  function u1(l, t) {
    gu.m(l, t);
    var u = ca;
    if (u && l) {
      var e = t && typeof t.as == "string" ? t.as : "script", a = 'link[rel="modulepreload"][as="' + Nt(e) + '"][href="' + Nt(l) + '"]', n = a;
      switch (e) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = ra(l);
      }
      if (!Ht.has(n) && (l = $({ rel: "modulepreload", href: l }, t), Ht.set(n, l), u.querySelector(a) === null)) {
        switch (e) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (u.querySelector(en(n)))
              return;
        }
        e = u.createElement("link"), Jl(e, "link", l), Bl(e), u.head.appendChild(e);
      }
    }
  }
  function e1(l, t, u) {
    gu.S(l, t, u);
    var e = ca;
    if (e && l) {
      var a = pe(e).hoistableStyles, n = oa(l);
      t = t || "default";
      var i = a.get(n);
      if (!i) {
        var f = { loading: 0, preload: null };
        if (i = e.querySelector(
          un(n)
        ))
          f.loading = 5;
        else {
          l = $(
            { rel: "stylesheet", href: l, "data-precedence": t },
            u
          ), (u = Ht.get(n)) && bo(l, u);
          var c = i = e.createElement("link");
          Bl(c), Jl(c, "link", l), c._p = new Promise(function(m, T) {
            c.onload = m, c.onerror = T;
          }), c.addEventListener("load", function() {
            f.loading |= 1;
          }), c.addEventListener("error", function() {
            f.loading |= 2;
          }), f.loading |= 4, Ui(i, t, e);
        }
        i = {
          type: "stylesheet",
          instance: i,
          count: 1,
          state: f
        }, a.set(n, i);
      }
    }
  }
  function a1(l, t) {
    gu.X(l, t);
    var u = ca;
    if (u && l) {
      var e = pe(u).hoistableScripts, a = ra(l), n = e.get(a);
      n || (n = u.querySelector(en(a)), n || (l = $({ src: l, async: !0 }, t), (t = Ht.get(a)) && To(l, t), n = u.createElement("script"), Bl(n), Jl(n, "link", l), u.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, e.set(a, n));
    }
  }
  function n1(l, t) {
    gu.M(l, t);
    var u = ca;
    if (u && l) {
      var e = pe(u).hoistableScripts, a = ra(l), n = e.get(a);
      n || (n = u.querySelector(en(a)), n || (l = $({ src: l, async: !0, type: "module" }, t), (t = Ht.get(a)) && To(l, t), n = u.createElement("script"), Bl(n), Jl(n, "link", l), u.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, e.set(a, n));
    }
  }
  function Xd(l, t, u, e) {
    var a = (a = Tu.current) ? tn(a) : null;
    if (!a) throw Error(o(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof u.precedence == "string" && typeof u.href == "string" ? (u = oa(u.href), t = pe(
          a
        ).hoistableStyles, e = t.get(u), e || (e = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, t.set(u, e)), e) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (u.rel === "stylesheet" && typeof u.href == "string" && typeof u.precedence == "string") {
          l = oa(u.href);
          var n = pe(
            a
          ).hoistableStyles, i = n.get(l);
          if (i || (a = a.ownerDocument || a, i = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, n.set(l, i), (n = a.querySelector(
            un(l)
          )) ? n._p || (i.instance = n, i.state.loading = 5) : (n = Ht.get(l), n || (n = {
            rel: "preload",
            as: "style",
            href: u.href,
            crossOrigin: u.crossOrigin,
            integrity: u.integrity,
            media: u.media,
            hrefLang: u.hrefLang,
            referrerPolicy: u.referrerPolicy
          }, Ht.set(l, n)), i1(
            a,
            l,
            n,
            i.state
          ))), t && e === null)
            throw Error(o(528, ""));
          return i;
        }
        if (t && e !== null)
          throw Error(o(529, ""));
        return null;
      case "script":
        return t = u.async, u = u.src, typeof u == "string" && t && typeof t != "function" && typeof t != "symbol" ? (u = ra(u), t = pe(
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
  function oa(l) {
    return 'href="' + Nt(l) + '"';
  }
  function un(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function Qd(l) {
    return $({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function i1(l, t, u, e) {
    if (t = l.querySelector(
      'link[rel="preload"][as="style"][' + t + "]"
    )) {
      if (t[Tn] !== !0) {
        e.loading = 1;
        return;
      }
    } else
      t = l.createElement("link"), t[Tn] = !0, t.onload = t.onerror = ko.bind(null, t), Jl(t, "link", u), Bl(t), l.head.appendChild(t);
    e.preload = t, t.addEventListener("load", function() {
      return e.loading |= 1;
    }), t.addEventListener("error", function() {
      return e.loading |= 2;
    });
  }
  function ra(l) {
    return '[src="' + Nt(l) + '"]';
  }
  function en(l) {
    return "script[async]" + l;
  }
  function Zd(l, t, u) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var e = l.querySelector(
            'style[data-href~="' + Nt(u.href) + '"]'
          );
          if (e)
            return t.instance = e, Bl(e), e;
          var a = $({}, u, {
            "data-href": u.href,
            "data-precedence": u.precedence,
            href: null,
            precedence: null
          });
          return e = (l.ownerDocument || l).createElement(
            "style"
          ), Bl(e), Jl(e, "style", a), Ui(e, u.precedence, l), t.instance = e;
        case "stylesheet":
          a = oa(u.href);
          var n = l.querySelector(
            un(a)
          );
          if (n)
            return t.state.loading |= 4, t.instance = n, Bl(n), n;
          e = Qd(u), (a = Ht.get(a)) && bo(e, a), n = (l.ownerDocument || l).createElement("link"), Bl(n);
          var i = n;
          return i._p = new Promise(function(f, c) {
            i.onload = f, i.onerror = c;
          }), Jl(n, "link", e), t.state.loading |= 4, Ui(n, u.precedence, l), t.instance = n;
        case "script":
          return n = ra(u.src), (a = l.querySelector(
            en(n)
          )) ? (t.instance = a, Bl(a), a) : (e = u, (a = Ht.get(n)) && (e = $({}, u), To(e, a)), l = l.ownerDocument || l, a = l.createElement("script"), Bl(a), Jl(a, "link", e), l.head.appendChild(a), t.instance = a);
        case "void":
          return null;
        default:
          throw Error(o(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (e = t.instance, t.state.loading |= 4, Ui(e, u.precedence, l));
    return t.instance;
  }
  function Ui(l, t, u) {
    for (var e = u.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), a = e.length ? e[e.length - 1] : null, n = a, i = 0; i < e.length; i++) {
      var f = e[i];
      if (f.dataset.precedence === t) n = f;
      else if (n !== a) break;
    }
    n ? n.parentNode.insertBefore(l, n.nextSibling) : (t = u.nodeType === 9 ? u.head : u, t.insertBefore(l, t.firstChild));
  }
  function bo(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.title == null && (l.title = t.title);
  }
  function To(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.integrity == null && (l.integrity = t.integrity);
  }
  var Ri = null;
  function Vd(l, t, u) {
    if (Ri === null) {
      var e = /* @__PURE__ */ new Map(), a = Ri = /* @__PURE__ */ new Map();
      a.set(u, e);
    } else
      a = Ri, e = a.get(u), e || (e = /* @__PURE__ */ new Map(), a.set(u, e));
    if (e.has(l)) return e;
    for (e.set(l, null), u = u.getElementsByTagName(l), a = 0; a < u.length; a++) {
      var n = u[a];
      if (!(n[Sa] || n[Ql] || l === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
        var i = n.getAttribute(t) || "";
        i = l + i;
        var f = e.get(i);
        f ? f.push(n) : e.set(i, [n]);
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
    typeof t.decode == "function" && (l.imgCount++, t.complete || (l.imgBytes += Jd(t), l.suspenseyImages.push(t)), l = r1.bind(l), t.decode().then(l, l));
  }
  function c1(l, t, u, e) {
    if (u.type === "stylesheet" && (typeof e.media != "string" || matchMedia(e.media).matches !== !1) && (u.state.loading & 4) === 0) {
      if (u.instance === null) {
        var a = oa(e.href), n = t.querySelector(
          un(a)
        );
        if (n) {
          t = n._p, t !== null && typeof t == "object" && typeof t.then == "function" && (l.count++, l = an.bind(l), t.then(l, l)), u.state.loading |= 4, u.instance = n, Bl(n);
          return;
        }
        n = t.ownerDocument || t, e = Qd(e), (a = Ht.get(a)) && bo(e, a), n = n.createElement("link"), Bl(n);
        var i = n;
        i._p = new Promise(function(f, c) {
          i.onload = f, i.onerror = c;
        }), Jl(n, "link", e), u.instance = n;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(u, t), (t = u.state.preload) && (u.state.loading & 3) === 0 && (l.count++, u = an.bind(l), t.addEventListener("load", u), t.addEventListener("error", u));
    }
  }
  var Hi = 0;
  function o1(l, t) {
    return l.stylesheets && l.count === 0 && ji(l, l.stylesheets), 0 < l.count || 0 < l.imgCount ? function(u) {
      var e = setTimeout(function() {
        if (l.stylesheets && ji(l, l.stylesheets), l.unsuspend) {
          var n = l.unsuspend;
          l.unsuspend = null, n();
        }
      }, 6e4 + t);
      0 < l.imgBytes && Hi === 0 && (Hi = 62500 * pm());
      var a = setTimeout(
        function() {
          if (l.waitingForImages = !1, l.count === 0 && (l.stylesheets && ji(l, l.stylesheets), l.unsuspend)) {
            var n = l.unsuspend;
            l.unsuspend = null, n();
          }
        },
        (l.imgBytes > Hi ? 50 : 800) + t
      );
      return l.unsuspend = u, function() {
        l.unsuspend = null, clearTimeout(e), clearTimeout(a);
      };
    } : null;
  }
  function Wd(l) {
    if (l.count === 0 && (l.imgCount === 0 || !l.waitingForImages)) {
      if (l.stylesheets) ji(l, l.stylesheets);
      else if (l.unsuspend) {
        var t = l.unsuspend;
        l.unsuspend = null, t();
      }
    }
  }
  function an() {
    this.count--, Wd(this);
  }
  function r1() {
    this.imgCount--, Wd(this);
  }
  var Bi = null;
  function ji(l, t) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, Bi = /* @__PURE__ */ new Map(), t.forEach(s1, l), Bi = null, an.call(l));
  }
  function s1(l, t) {
    if (!(t.state.loading & 4)) {
      var u = Bi.get(l);
      if (u) var e = u.get(null);
      else {
        u = /* @__PURE__ */ new Map(), Bi.set(l, u);
        for (var a = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), n = 0; n < a.length; n++) {
          var i = a[n];
          (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") && (u.set(i.dataset.precedence, i), e = i);
        }
        e && u.set(null, e);
      }
      a = t.instance, i = a.getAttribute("data-precedence"), n = u.get(i) || e, n === e && u.set(null, a), u.set(i, a), this.count++, e = an.bind(this), a.addEventListener("load", e), a.addEventListener("error", e), n ? n.parentNode.insertBefore(a, n.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(a, l.firstChild)), t.state.loading |= 4;
    }
  }
  var sa = {
    $$typeof: Hl,
    Provider: null,
    Consumer: null,
    _currentValue: uu,
    _currentValue2: uu,
    _threadCount: 0
  };
  function d1(l, t, u, e, a, n, i, f, c) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Pi(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Pi(0), this.hiddenUpdates = Pi(null), this.identifierPrefix = e, this.onUncaughtError = a, this.onCaughtError = n, this.onRecoverableError = i, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = c, this.transitionTypes = null, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function $d(l, t, u, e, a, n, i, f, c, m, T, O) {
    return l = new d1(
      l,
      t,
      u,
      i,
      c,
      m,
      T,
      O,
      f
    ), t = 1, n === !0 && (t |= 24), n = tt(3, null, null, t), l.current = n, n.stateNode = l, t = jf(), t.refCount++, l.pooledCache = t, t.refCount++, n.memoizedState = {
      element: e,
      isDehydrated: u,
      cache: t
    }, Gf(n), l;
  }
  function Fd(l) {
    return l ? (l = xe, l) : xe;
  }
  function Id(l, t, u, e, a, n) {
    a = Fd(a), e.context === null ? e.context = a : e.pendingContext = a, e = Uu(t), e.payload = { element: u }, n = n === void 0 ? null : n, n !== null && (e.callback = n), u = Ru(l, e, t), u !== null && (nt(u, l, t), ja(u, l, t));
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
      var t = ae(l, 67108864);
      t !== null && nt(t, l, 67108864), zo(l, 67108864);
    }
  }
  function ly(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = gt();
      t = lf(t);
      var u = ae(l, t);
      u !== null && nt(u, l, t), zo(l, t);
    }
  }
  var da = !0;
  function y1(l, t, u, e) {
    var a = B.T;
    B.T = null;
    var n = L.p;
    try {
      L.p = 2, Oo(l, t, u, e);
    } finally {
      L.p = n, B.T = a;
    }
  }
  function v1(l, t, u, e) {
    var a = B.T;
    B.T = null;
    var n = L.p;
    try {
      L.p = 8, Oo(l, t, u, e);
    } finally {
      L.p = n, B.T = a;
    }
  }
  function Oo(l, t, u, e) {
    if (da) {
      var a = _o(e);
      if (a === null)
        eo(
          l,
          t,
          e,
          Yi,
          u
        ), uy(l, e);
      else if (h1(
        a,
        l,
        t,
        u,
        e
      ))
        e.stopPropagation();
      else if (uy(l, e), t & 4 && -1 < m1.indexOf(l)) {
        for (; a !== null; ) {
          var n = Ae(a);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (n = n.stateNode, n.current.memoizedState.isDehydrated) {
                  var i = Pu(n.pendingLanes);
                  if (i !== 0) {
                    var f = n;
                    for (f.pendingLanes |= 2, f.entangledLanes |= 2; i; ) {
                      var c = 1 << 31 - rt(i);
                      f.entanglements[1] |= c, i &= ~c;
                    }
                    lu(n), (ol & 6) === 0 && (Ei = ct() + 500, Ia(0));
                  }
                }
                break;
              case 31:
              case 13:
                f = ae(n, 2), f !== null && nt(f, n, 2), _i(), zo(n, 2);
            }
          if (n = _o(e), n === null && eo(
            l,
            t,
            e,
            Yi,
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
    return l = cf(l), No(l);
  }
  var Yi = null;
  function No(l) {
    if (Yi = null, l = le(l), l !== null) {
      var t = p(l);
      if (t === null) l = null;
      else {
        var u = t.tag;
        if (u === 13) {
          if (l = R(t), l !== null) return l;
          l = null;
        } else if (u === 31) {
          if (l = G(t), l !== null) return l;
          l = null;
        } else if (u === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return Yi = l, null;
  }
  function ty(l) {
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
        switch (py()) {
          case Xo:
            return 2;
          case Qo:
            return 8;
          case mn:
          case My:
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
  var Ao = !1, Lu = null, Ku = null, Ju = null, nn = /* @__PURE__ */ new Map(), fn = /* @__PURE__ */ new Map(), wu = [], m1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function uy(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        Lu = null;
        break;
      case "dragenter":
      case "dragleave":
        Ku = null;
        break;
      case "mouseover":
      case "mouseout":
        Ju = null;
        break;
      case "pointerover":
      case "pointerout":
        nn.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        fn.delete(t.pointerId);
    }
  }
  function cn(l, t, u, e, a, n) {
    return l === null || l.nativeEvent !== n ? (l = {
      blockedOn: t,
      domEventName: u,
      eventSystemFlags: e,
      nativeEvent: n,
      targetContainers: [a]
    }, t !== null && (t = Ae(t), t !== null && Pd(t)), l) : (l.eventSystemFlags |= e, t = l.targetContainers, a !== null && t.indexOf(a) === -1 && t.push(a), l);
  }
  function h1(l, t, u, e, a) {
    switch (t) {
      case "focusin":
        return Lu = cn(
          Lu,
          l,
          t,
          u,
          e,
          a
        ), !0;
      case "dragenter":
        return Ku = cn(
          Ku,
          l,
          t,
          u,
          e,
          a
        ), !0;
      case "mouseover":
        return Ju = cn(
          Ju,
          l,
          t,
          u,
          e,
          a
        ), !0;
      case "pointerover":
        var n = a.pointerId;
        return nn.set(
          n,
          cn(
            nn.get(n) || null,
            l,
            t,
            u,
            e,
            a
          )
        ), !0;
      case "gotpointercapture":
        return n = a.pointerId, fn.set(
          n,
          cn(
            fn.get(n) || null,
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
  function ey(l) {
    var t = le(l.target);
    if (t !== null) {
      var u = p(t);
      if (u !== null) {
        if (t = u.tag, t === 13) {
          if (t = R(u), t !== null) {
            l.blockedOn = t, $o(l.priority, function() {
              ly(u);
            });
            return;
          }
        } else if (t === 31) {
          if (t = G(u), t !== null) {
            l.blockedOn = t, $o(l.priority, function() {
              ly(u);
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
  function xi(l) {
    if (l.blockedOn !== null) return !1;
    for (var t = l.targetContainers; 0 < t.length; ) {
      var u = _o(l.nativeEvent);
      if (u === null) {
        u = l.nativeEvent;
        var e = new u.constructor(
          u.type,
          u
        );
        ff = e, u.target.dispatchEvent(e), ff = null;
      } else
        return t = Ae(u), t !== null && Pd(t), l.blockedOn = u, !1;
      t.shift();
    }
    return !0;
  }
  function ay(l, t, u) {
    xi(l) && u.delete(t);
  }
  function g1() {
    Ao = !1, Lu !== null && xi(Lu) && (Lu = null), Ku !== null && xi(Ku) && (Ku = null), Ju !== null && xi(Ju) && (Ju = null), nn.forEach(ay), fn.forEach(ay);
  }
  function qi(l, t) {
    l.blockedOn === t && (l.blockedOn = null, Ao || (Ao = !0, r.unstable_scheduleCallback(
      r.unstable_NormalPriority,
      g1
    )));
  }
  var Gi = null;
  function ny(l) {
    Gi !== l && (Gi = l, r.unstable_scheduleCallback(
      r.unstable_NormalPriority,
      function() {
        Gi === l && (Gi = null);
        for (var t = 0; t < l.length; t += 3) {
          var u = l[t], e = l[t + 1], a = l[t + 2];
          if (typeof e != "function") {
            if (No(e || u) === null)
              continue;
            break;
          }
          var n = Ae(u);
          n !== null && (l.splice(t, 3), t -= 3, ic(
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
  function ya(l) {
    function t(c) {
      return qi(c, l);
    }
    Lu !== null && qi(Lu, l), Ku !== null && qi(Ku, l), Ju !== null && qi(Ju, l), nn.forEach(t), fn.forEach(t);
    for (var u = 0; u < wu.length; u++) {
      var e = wu[u];
      e.blockedOn === l && (e.blockedOn = null);
    }
    for (; 0 < wu.length && (u = wu[0], u.blockedOn === null); )
      ey(u), u.blockedOn === null && wu.shift();
    if (u = (l.ownerDocument || l).$$reactFormReplay, u != null)
      for (e = 0; e < u.length; e += 3) {
        var a = u[e], n = u[e + 1], i = a[lt] || null;
        if (typeof n == "function")
          i || ny(u);
        else if (i) {
          var f = null;
          if (n && n.hasAttribute("formAction")) {
            if (a = n, i = n[lt] || null)
              f = i.formAction;
            else if (No(a) !== null) continue;
          } else f = i.action;
          typeof f == "function" ? u[e + 1] = f : (u.splice(e, 3), e -= 3), ny(u);
        }
      }
  }
  function iy() {
    function l(n) {
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
  Xi.prototype.render = po.prototype.render = function(l) {
    var t = this._internalRoot;
    if (t === null) throw Error(o(409));
    var u = t.current, e = gt();
    Id(u, e, l, t, null, null);
  }, Xi.prototype.unmount = po.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var t = l.containerInfo;
      Id(l.current, 2, null, l, null, null), _i(), t[Ne] = null;
    }
  };
  function Xi(l) {
    this._internalRoot = l;
  }
  Xi.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var t = Wo();
      l = { blockedOn: null, target: l, priority: t };
      for (var u = 0; u < wu.length && t !== 0 && t < wu[u].priority; u++) ;
      wu.splice(u, 0, l), u === 0 && ey(l);
    }
  };
  var fy = h.version;
  if (fy !== "19.3.0")
    throw Error(
      o(
        527,
        fy,
        "19.3.0"
      )
    );
  L.findDOMNode = function(l) {
    var t = l._reactInternals;
    if (t === void 0)
      throw typeof l.render == "function" ? Error(o(188)) : (l = Object.keys(l).join(","), Error(o(268, l)));
    return l = tl(t), l = l !== null ? H(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var S1 = {
    bundleType: 0,
    version: "19.3.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: B,
    reconcilerVersion: "19.3.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Qi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Qi.isDisabled && Qi.supportsFiber)
      try {
        ma = Qi.inject(
          S1
        ), ot = Qi;
      } catch {
      }
  }
  return rn.createRoot = function(l, t) {
    if (!N(l)) throw Error(o(299));
    var u = !1, e = "", a = Fs, n = Is, i = ks;
    return t != null && (t.unstable_strictMode === !0 && (u = !0), t.identifierPrefix !== void 0 && (e = t.identifierPrefix), t.onUncaughtError !== void 0 && (a = t.onUncaughtError), t.onCaughtError !== void 0 && (n = t.onCaughtError), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = $d(
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
      i,
      iy
    ), l[Ne] = t.current, uo(l), new po(t);
  }, rn.hydrateRoot = function(l, t, u) {
    if (!N(l)) throw Error(o(299));
    var e = !1, a = "", n = Fs, i = Is, f = ks, c = null;
    return u != null && (u.unstable_strictMode === !0 && (e = !0), u.identifierPrefix !== void 0 && (a = u.identifierPrefix), u.onUncaughtError !== void 0 && (n = u.onUncaughtError), u.onCaughtError !== void 0 && (i = u.onCaughtError), u.onRecoverableError !== void 0 && (f = u.onRecoverableError), u.formState !== void 0 && (c = u.formState)), t = $d(
      l,
      1,
      !0,
      t,
      u ?? null,
      e,
      a,
      c,
      n,
      i,
      f,
      iy
    ), t.context = Fd(null), u = t.current, e = gt(), e = lf(e), a = Uu(e), a.callback = null, Ru(u, a, e), u = e, t.current.lanes = u, ga(t, u), lu(t), l[Ne] = t.current, uo(l), new Xi(t);
  }, rn.version = "19.3.0", rn;
}
var gy;
function D1() {
  if (gy) return Do.exports;
  gy = 1;
  function r() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (h) {
        console.error(h);
      }
  }
  return r(), Do.exports = C1(), Do.exports;
}
var U1 = D1();
function R1(r) {
  return r && typeof r == "object" ? r : typeof window > "u" ? null : window;
}
function Sy({
  snapshot: r,
  ownSeat: h = null,
  replayIndex: b = null,
  flipVertical: o = !1
} = {}) {
  const N = r && typeof r == "object" && !Array.isArray(r) ? { ...r } : {};
  return {
    ...N,
    boardCode: String(N.boardCode || ""),
    version: Number.isFinite(Number(N.version)) ? Number(N.version) : 0,
    ownSeat: h,
    replayIndex: b,
    flipVertical: !!o
  };
}
function H1({
  node: r,
  snapshot: h,
  ownSeat: b,
  replayIndex: o,
  flipVertical: N,
  onMoveClick: p,
  elmRuntime: R
} = {}) {
  const X = R1(R)?.Elm?.BoardIsland?.init;
  if (typeof X != "function" || !r)
    return {
      app: null,
      sendSnapshotUpdate: () => {
      },
      cleanup: () => {
      }
    };
  const tl = Sy({
    snapshot: h,
    ownSeat: b,
    replayIndex: o,
    flipVertical: N
  }), H = X({ node: r, flags: tl }), E = H?.ports?.boardMoveClicked, j = H?.ports?.boardSnapshot, Sl = (al) => {
    typeof p == "function" && p(al);
  };
  return typeof E?.subscribe == "function" && E.subscribe(Sl), { app: H, sendSnapshotUpdate: (al) => {
    typeof j?.send == "function" && j.send(Sy(al));
  }, cleanup: () => {
    typeof E?.unsubscribe == "function" && E.unsubscribe(Sl), typeof H?.unmount == "function" && H.unmount();
  } };
}
function B1({
  snapshot: r,
  ownSeat: h,
  replayIndex: b,
  flipVertical: o,
  onMoveClick: N
}) {
  const p = Tt.useRef(null), R = Tt.useRef(null), G = Tt.useRef(N);
  G.current = N;
  const X = Tt.useMemo(
    () => ({ snapshot: r, ownSeat: h, replayIndex: b, flipVertical: o }),
    [r, h, b, o]
  );
  return Tt.useEffect(() => (R.current = H1({
    node: p.current,
    ...X,
    onMoveClick: (tl) => G.current?.(tl)
  }), () => {
    R.current?.cleanup?.(), R.current = null;
  }), []), Tt.useEffect(() => {
    R.current?.sendSnapshotUpdate?.(X);
  }, [X]), /* @__PURE__ */ U.jsx("div", { ref: p, "data-testid": "elm-board-island-host" });
}
function j1(r) {
  if (typeof r != "function")
    throw new Error("Fetch API unavailable.");
  return r;
}
async function Y1(r) {
  return r.json();
}
async function x1({ clientId: r, moveTimeLimitSeconds: h }, { fetchImpl: b = globalThis.fetch } = {}) {
  const o = j1(b), N = Number(h), p = {
    clientId: String(r || "").trim(),
    moveTimeLimitSeconds: Number.isFinite(N) ? N : 15
  }, R = await o("/api/rooms", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(p)
  });
  if (!R.ok)
    throw new Error(`Board creation failed: ${R.status}`);
  return Y1(R);
}
function q1(r = globalThis.window?.location || globalThis.location) {
  const h = r?.protocol === "https:" ? "wss:" : "ws:", b = r?.host || "localhost";
  return `${h}//${b}/ws`;
}
function G1({
  roomId: r,
  clientId: h,
  onMessage: b,
  onStatus: o,
  WebSocketImpl: N = globalThis.window?.WebSocket || globalThis.WebSocket,
  socketUrl: p = q1()
} = {}) {
  if (typeof N != "function")
    throw new Error("WebSocket unavailable.");
  const R = new N(p);
  return R.onopen = () => {
    o?.("connected"), R.send(
      JSON.stringify({
        type: "watch",
        roomId: String(r || "").trim(),
        clientId: String(h || "").trim()
      })
    );
  }, R.onmessage = (G) => {
    try {
      b?.(JSON.parse(G.data));
    } catch {
      b?.({ type: "error", error: "malformed websocket message" });
    }
  }, R.onerror = () => {
    o?.("error");
  }, R.onclose = () => {
    o?.("disconnected");
  }, {
    socket: R,
    send(G) {
      R.send(JSON.stringify(G));
    },
    close() {
      R.close?.();
    }
  };
}
const by = "traceballElmClientId", Vi = "traceballPlayerName", X1 = "traceballOnlineMoveTimer";
function Li() {
  return globalThis.window?.localStorage || globalThis.localStorage;
}
function Q1(r = Math.random) {
  return r().toString(36).slice(2, 12);
}
function Z1({
  storage: r = Li(),
  random: h = Math.random
} = {}) {
  const b = r?.getItem?.(by);
  if (b) return b;
  const o = `traceball-elm-${Q1(h)}`;
  return r?.setItem?.(by, o), o;
}
function Ey(r = Math.random) {
  const h = (b) => b[Math.floor(r() * b.length)];
  return `${h(["Neon", "Turbo", "Cosmic", "Lucky", "Pixel", "Rocket", "Thunder"])} ${h(["Striker", "Falcon", "Comet", "Phantom", "Kicker", "Ace", "Wizard"])}`;
}
function zy(r, h = "") {
  return String(r || "").replace(/\s+/g, " ").trim().slice(0, 24) || h;
}
function V1({
  storage: r = Li(),
  randomName: h = Ey
} = {}) {
  const b = String(r?.getItem?.(Vi) || ""), o = zy(b, "");
  if (o && o !== "Elm Player")
    return r?.setItem?.(Vi, o), o;
  const N = h();
  return r?.setItem?.(Vi, N), N;
}
function L1(r, { storage: h = Li(), randomName: b = Ey } = {}) {
  const o = zy(r, b());
  return h?.setItem?.(Vi, o), o;
}
function K1(r, h = 15) {
  const b = Number(r);
  return Number.isFinite(b) && b >= 0 ? b : h;
}
function J1({
  storage: r = Li(),
  fallback: h = 15
} = {}) {
  return K1(
    r?.getItem?.(X1),
    h
  );
}
function w1({
  clientId: r = "",
  playerName: h = "",
  connectionStatus: b = "idle",
  currentBoardCode: o = "",
  isWaitingListMember: N = !1,
  boardState: p = null,
  boardList: R = [],
  mainTab: G = "home",
  mode: X = "online",
  toast: tl = null,
  onlineMoveTimer: H = 15,
  localMoveTimer: E = 15,
  historyPanelOpen: j = !1,
  rulesPanelOpen: Sl = !1
} = {}) {
  return {
    clientId: r,
    playerName: h,
    connectionStatus: b,
    currentBoardCode: o,
    isWaitingListMember: N,
    boardState: p,
    boardList: R,
    mainTab: G,
    mode: X,
    toast: tl,
    onlineSetup: {
      moveTimeLimitSeconds: H
    },
    localSetup: {
      moveTimeLimitSeconds: E
    },
    historyPanelOpen: j,
    rulesPanelOpen: Sl
  };
}
function W1(r, h, b) {
  if (!b || typeof b != "object") return !1;
  const o = String(r || "").trim(), N = String(b.boardCode || "").trim();
  if (o && N && o !== N) return !1;
  if (!h || typeof h != "object") return !0;
  const p = String(h.boardCode || "").trim();
  if (!p || p !== N) return !0;
  const R = Number(h.version), G = Number(b.version);
  return Number.isFinite(R) ? Number.isFinite(G) ? G > R : !1 : !0;
}
function $1(r, h) {
  if (!h || typeof h != "object") return r;
  switch (h.type) {
    case "hydrateShell":
      return { ...r, ...h.payload };
    case "setPlayerName":
      return { ...r, playerName: String(h.playerName || "") };
    case "setConnectionStatus":
      return { ...r, connectionStatus: String(h.status || "idle") };
    case "setCurrentBoardCode":
      return {
        ...r,
        currentBoardCode: String(h.boardCode || ""),
        isWaitingListMember: !1
      };
    case "setWaitingListMembership":
      return {
        ...r,
        isWaitingListMember: !!h.isMember
      };
    case "receiveBoardState":
      return W1(
        r.currentBoardCode,
        r.boardState,
        h.boardState
      ) ? {
        ...r,
        boardState: h.boardState,
        currentBoardCode: String(
          h.boardState?.boardCode || r.currentBoardCode || ""
        )
      } : r;
    case "receiveBoardList":
      return {
        ...r,
        boardList: Array.isArray(h.boardList) ? h.boardList : Array.isArray(h.boardList?.rooms) ? h.boardList.rooms : []
      };
    case "setMainTab":
      return { ...r, mainTab: String(h.mainTab || r.mainTab) };
    case "setMode":
      return { ...r, mode: String(h.mode || r.mode) };
    case "setToast":
      return { ...r, toast: h.toast ?? null };
    case "setHistoryPanelOpen":
      return { ...r, historyPanelOpen: !!h.open };
    case "setRulesPanelOpen":
      return { ...r, rulesPanelOpen: !!h.open };
    case "setOnlineMoveTimer":
      return {
        ...r,
        onlineSetup: {
          ...r.onlineSetup,
          moveTimeLimitSeconds: Number(h.seconds)
        }
      };
    case "setLocalMoveTimer":
      return {
        ...r,
        localSetup: {
          ...r.localSetup,
          moveTimeLimitSeconds: Number(h.seconds)
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
}, lh = {
  margin: 0,
  fontSize: "1.05rem",
  lineHeight: 1.6,
  color: "#33513f"
}, th = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
  gap: "14px",
  marginTop: "24px"
}, Zi = {
  padding: "16px",
  borderRadius: "18px",
  background: "#f7fbf7",
  border: "1px solid rgba(16, 42, 26, 0.08)"
}, bt = {
  margin: 0,
  fontSize: "0.78rem",
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  color: "#567062"
}, sn = {
  margin: "8px 0 0",
  fontSize: "1rem",
  fontWeight: 700,
  wordBreak: "break-word"
}, uh = {
  width: "100%",
  marginTop: "10px",
  padding: "12px 14px",
  borderRadius: "12px",
  border: "1px solid rgba(16, 42, 26, 0.14)",
  fontSize: "1rem",
  boxSizing: "border-box"
}, ze = {
  display: "flex",
  gap: "10px",
  marginTop: "18px",
  flexWrap: "wrap"
}, $u = (r) => ({
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
}, eh = {
  marginTop: "24px",
  padding: "16px 18px",
  borderRadius: "18px",
  background: "#102a1a",
  color: "#f6fbf4",
  lineHeight: 1.55
}, ah = {
  display: "inline-block",
  width: "10px",
  height: "10px",
  borderRadius: "999px",
  marginRight: "8px",
  background: "#9aa79e"
};
function Su(r) {
  return String(r || "").trim();
}
function nh(r) {
  const h = Number(r);
  return Number.isFinite(h) ? h : 0;
}
function Oy(r) {
  const h = r?.game?.players;
  return h && typeof h == "object" ? h : null;
}
function ih(r) {
  const h = String(r || "").trim();
  return h === "active" || h === "disconnected";
}
function fh(r) {
  return r === "p1" ? "Claim Blue" : "Claim Red";
}
function ch(r) {
  return r?.game?.status === "playing" || r?.game?.status === "paused";
}
function oh() {
  return globalThis.window?.history ?? globalThis.history ?? null;
}
function xo() {
  return globalThis.window?.location ?? globalThis.location ?? null;
}
function rh(r) {
  return r ? typeof r.href == "string" && r.href ? r.href : `${r.origin || "http://localhost"}${r.pathname || "/react"}${r.search || ""}${r.hash || ""}` : "";
}
function sh({
  locationLike: r = xo()
} = {}) {
  const h = rh(r);
  if (!h) return "";
  const b = new URL(h);
  return Su(
    b.searchParams.get("board") || b.searchParams.get("room") || b.searchParams.get("code") || ""
  );
}
function dh(r) {
  if (!r || typeof r != "object" || String(r.type || "") !== "state") return null;
  const h = Su(r.boardCode || r.roomId), b = r.board && typeof r.board == "object", o = r.game && typeof r.game == "object";
  return !h || !b && !o ? null : {
    boardCode: h,
    version: nh(r.version),
    ...b ? { board: r.board } : {},
    ...o ? { game: r.game } : {}
  };
}
function yh(r, { historyLike: h = oh(), locationLike: b = xo() } = {}) {
  if (!b || typeof h?.replaceState != "function")
    return null;
  const o = typeof b.href == "string" && b.href ? b.href : `${b.origin || "http://localhost"}${b.pathname || "/react"}${b.search || ""}${b.hash || ""}`, N = new URL(o);
  N.pathname = "/react", r ? N.searchParams.set("board", String(r).trim()) : N.searchParams.delete("board");
  const p = `${N.pathname}${N.search}${N.hash}`;
  return h.replaceState(h.state ?? null, "", p), p;
}
function vh({
  currentBoardCode: r,
  clientId: h,
  dispatch: b,
  onOwnSeat: o,
  onMessage: N,
  connect: p = G1
}) {
  const R = Su(r);
  return !R || typeof p != "function" ? null : p({
    roomId: R,
    clientId: String(h || ""),
    onStatus(G) {
      b?.({ type: "setConnectionStatus", status: G });
    },
    onMessage(G) {
      if (N?.(G), G?.type === "joined") {
        const tl = String(G.playerId || "").trim();
        (tl === "p1" || tl === "p2") && (o?.(tl), b?.({ type: "setWaitingListMembership", isMember: !1 }));
        return;
      }
      if (G?.type === "left") {
        o?.(null), b?.({ type: "setWaitingListMembership", isMember: !1 }), b?.({ type: "setToast", toast: "You left the board." });
        return;
      }
      if (G?.type === "waitingListJoined") {
        b?.({ type: "setWaitingListMembership", isMember: !0 });
        return;
      }
      if (G?.type === "waitingListLeft") {
        b?.({ type: "setWaitingListMembership", isMember: !1 });
        return;
      }
      if (G?.type === "BoardNotFound" && typeof G.message == "string") {
        b?.({ type: "setToast", toast: G.message });
        return;
      }
      if (G?.type === "error" && typeof G.error == "string") {
        b?.({ type: "setToast", toast: G.error });
        return;
      }
      const X = dh(G);
      X && b?.({ type: "receiveBoardState", boardState: X });
    }
  });
}
function jo({
  roomId: r,
  clientId: h,
  dispatch: b,
  setOwnSeat: o,
  connectionRef: N,
  activeBoardRef: p,
  onMessage: R,
  connect: G = vh
}) {
  const X = Su(r);
  if (!X || typeof G != "function") return null;
  if (p?.current === X && N?.current)
    return N.current;
  N?.current?.close?.(), N && (N.current = null), p && (p.current = X), o?.(null);
  const tl = G({
    currentBoardCode: X,
    clientId: h,
    dispatch: b,
    onOwnSeat: o,
    onMessage: R
  });
  return N && (N.current = tl), tl;
}
function mh({ snapshot: r, ownSeat: h } = {}) {
  const b = String(h || "").trim();
  if (b === "p1" || b === "p2") return [];
  const o = Oy(r);
  return o ? ["p1", "p2"].filter((N) => o?.[N]?.status === "vacant").map((N) => ({ seatId: N, label: fh(N) })) : [];
}
function hh({ ownSeat: r, snapshot: h } = {}) {
  const b = String(r || "").trim();
  return b !== "p1" && b !== "p2" ? null : ch(h) ? { label: "Leave Seat (Forfeit)", danger: !0 } : { label: "Leave Seat", danger: !1 };
}
function gh({
  ownSeat: r,
  snapshot: h,
  isWaitingListMember: b
} = {}) {
  const o = String(r || "").trim();
  if (o === "p1" || o === "p2") return null;
  if (b)
    return { type: "leave", label: "Leave Waiting List" };
  const N = Oy(h);
  return N && ["p1", "p2"].every(
    (R) => ih(N?.[R]?.status)
  ) ? { type: "join", label: "Join Waiting List" } : null;
}
function Sh({ ownSeat: r, snapshot: h } = {}) {
  const b = String(r || "").trim();
  if (b !== "p1" && b !== "p2") return [];
  const o = String(h?.game?.status || "").trim();
  return o === "playing" ? h?.game?.turn === b ? [{ type: "pause", label: "Pause Game" }] : [] : o === "paused" ? (h?.game?.pause?.resumeTurn || h?.game?.pause?.byPlayerId || null) === b ? [{ type: "resume", label: "Resume Game" }] : [] : [];
}
function bh({ ownSeat: r, snapshot: h } = {}) {
  const b = String(r || "").trim();
  if (b !== "p1" && b !== "p2") return null;
  const o = String(h?.game?.status || "").trim();
  return o === "finished" ? { label: "Continue", reason: "between-rounds" } : o === "paused" && h?.game?.pause?.byPlayerId === b ? { label: "Start New Round", reason: "paused-owner" } : null;
}
function Th({
  clientId: r,
  dispatch: h,
  startWatching: b,
  locationLike: o = xo()
}) {
  const N = sh({ locationLike: o });
  return N ? (h?.({ type: "setCurrentBoardCode", boardCode: N }), b?.({
    roomId: N,
    clientId: r,
    onMessage(p) {
      p?.type === "BoardNotFound" && typeof p.message == "string" && h?.({ type: "setToast", toast: p.message }), p?.type === "error" && typeof p.error == "string" && h?.({ type: "setToast", toast: p.error });
    }
  })) : null;
}
function Eh(r) {
  const h = r?.point;
  if (!h || typeof h != "object") return null;
  const b = Number(h.x), o = Number(h.y);
  return !Number.isFinite(b) || !Number.isFinite(o) ? null : { x: b, y: o };
}
function Fu(r) {
  return typeof r?.send == "function" && Number(r?.socket?.readyState) === 1;
}
function zh({
  payload: r,
  ownSeat: h,
  connection: b,
  dispatch: o
}) {
  if (!Fu(b)) {
    o?.({
      type: "setToast",
      toast: "Connection unavailable. Reconnect to move."
    });
    return;
  }
  const N = String(h || "").trim();
  if (N !== "p1" && N !== "p2") {
    o?.({ type: "setToast", toast: "Join a seat to move." });
    return;
  }
  const p = Eh(r);
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
function Oh({
  seatId: r,
  currentBoardCode: h,
  clientId: b,
  playerName: o,
  connection: N,
  dispatch: p
}) {
  if (!Fu(N)) {
    p?.({
      type: "setToast",
      toast: "Connection unavailable. Reconnect to claim a seat."
    });
    return;
  }
  const R = String(r || "").trim();
  if (R !== "p1" && R !== "p2") {
    p?.({ type: "setToast", toast: "Invalid seat selection." });
    return;
  }
  N.send({
    type: "claimSeat",
    seatId: R,
    name: String(o || "").trim(),
    roomId: Su(h),
    clientId: String(b || "").trim()
  });
}
function _h({
  currentBoardCode: r,
  clientId: h,
  playerName: b,
  connection: o,
  dispatch: N
}) {
  if (!Fu(o)) {
    N?.({
      type: "setToast",
      toast: "Connection unavailable. Reconnect to join the waiting list."
    });
    return;
  }
  o.send({
    type: "joinWaitingList",
    name: String(b || "").trim(),
    roomId: Su(r),
    clientId: String(h || "").trim()
  });
}
function Nh({
  currentBoardCode: r,
  clientId: h,
  connection: b,
  dispatch: o
}) {
  if (!Fu(b)) {
    o?.({
      type: "setToast",
      toast: "Connection unavailable. Reconnect to leave the waiting list."
    });
    return;
  }
  b.send({
    type: "leaveWaitingList",
    roomId: Su(r),
    clientId: String(h || "").trim()
  });
}
function Ah({ ownSeat: r, connection: h, dispatch: b }) {
  const o = String(r || "").trim();
  if (o !== "p1" && o !== "p2") {
    b?.({ type: "setToast", toast: "You are not occupying a seat." });
    return;
  }
  if (!Fu(h)) {
    b?.({
      type: "setToast",
      toast: "Connection unavailable. Reconnect to leave your seat."
    });
    return;
  }
  h.send({ type: "leave" });
}
function ph({ ownSeat: r, connection: h, dispatch: b }) {
  const o = String(r || "").trim();
  if (o !== "p1" && o !== "p2") {
    b?.({ type: "setToast", toast: "You are not occupying a seat." });
    return;
  }
  if (!Fu(h)) {
    b?.({
      type: "setToast",
      toast: "Connection unavailable. Reconnect to pause."
    });
    return;
  }
  h.send({ type: "pause" });
}
function Mh({ ownSeat: r, connection: h, dispatch: b }) {
  const o = String(r || "").trim();
  if (o !== "p1" && o !== "p2") {
    b?.({ type: "setToast", toast: "You are not occupying a seat." });
    return;
  }
  if (!Fu(h)) {
    b?.({
      type: "setToast",
      toast: "Connection unavailable. Reconnect to resume."
    });
    return;
  }
  h.send({ type: "resume" });
}
function Ch({ ownSeat: r, connection: h, dispatch: b }) {
  const o = String(r || "").trim();
  if (o !== "p1" && o !== "p2") {
    b?.({ type: "setToast", toast: "You are not occupying a seat." });
    return;
  }
  if (!Fu(h)) {
    b?.({
      type: "setToast",
      toast: "Connection unavailable. Reconnect to continue."
    });
    return;
  }
  h.send({ type: "reset" });
}
async function Dh({
  clientId: r,
  moveTimeLimitSeconds: h,
  dispatch: b,
  create: o = x1,
  syncUrl: N = yh,
  startWatching: p,
  refreshBoardList: R
}) {
  try {
    const G = await o({ clientId: r, moveTimeLimitSeconds: h }), X = Su(G?.roomId);
    if (!X)
      throw new Error("Board creation response missing roomId.");
    return b?.({ type: "setCurrentBoardCode", boardCode: X }), N?.(X), p?.({ roomId: X, clientId: r }), await R?.(), G;
  } catch (G) {
    return b?.({
      type: "setToast",
      toast: G instanceof Error && G.message ? G.message : "Board creation failed."
    }), null;
  }
}
function Uh({ initialState: r }) {
  const [h, b] = Tt.useReducer($1, r), [o, N] = Tt.useState(null), p = Tt.useRef(null), R = Tt.useRef(""), G = r?.demoBoardSnapshot || null, X = h.boardState || G, tl = String(h.connectionStatus || "idle"), H = mh({
    snapshot: X,
    ownSeat: o
  }), E = hh({
    ownSeat: o,
    snapshot: X
  }), j = gh({
    ownSeat: o,
    snapshot: X,
    isWaitingListMember: h.isWaitingListMember
  }), Sl = Sh({
    ownSeat: o,
    snapshot: X
  }), ql = bh({
    ownSeat: o,
    snapshot: X
  });
  Tt.useEffect(() => {
    const ll = Th({
      clientId: h.clientId,
      dispatch: b,
      startWatching: ({ roomId: Rl, clientId: Et, onMessage: zt }) => jo({
        roomId: Rl,
        clientId: Et,
        dispatch: b,
        setOwnSeat: N,
        connectionRef: p,
        activeBoardRef: R,
        onMessage: zt
      })
    });
    return () => {
      p.current === ll && ll && (R.current = "", p.current = null, ll.close?.());
    };
  }, []), Tt.useEffect(() => {
    const ll = Su(h.currentBoardCode);
    if (!ll) {
      p.current = null, N(null), b({ type: "setConnectionStatus", status: "idle" });
      return;
    }
    let Rl = null;
    try {
      Rl = jo({
        roomId: ll,
        clientId: h.clientId,
        dispatch: b,
        setOwnSeat: N,
        connectionRef: p,
        activeBoardRef: R,
        onMessage: null
      });
    } catch {
      R.current = "", p.current = null, b({ type: "setConnectionStatus", status: "error" });
      return;
    }
    return () => {
      p.current === Rl && (R.current = "", p.current = null, Rl?.close?.());
    };
  }, [h.currentBoardCode, h.clientId]);
  const Gl = h.clientId && h.clientId.length > 6 ? `...${h.clientId.slice(-6)}` : "identity ready", al = (ll) => {
    const Rl = ll.target.value;
    b({ type: "setPlayerName", playerName: Rl }), L1(Rl);
  }, Pl = async () => {
    await Dh({
      clientId: h.clientId,
      moveTimeLimitSeconds: h.onlineSetup.moveTimeLimitSeconds,
      dispatch: b,
      startWatching: ({ roomId: ll, clientId: Rl }) => jo({
        roomId: ll,
        clientId: Rl,
        dispatch: b,
        setOwnSeat: N,
        connectionRef: p,
        activeBoardRef: R
      })
    });
  };
  return /* @__PURE__ */ U.jsx("main", { style: F1, children: /* @__PURE__ */ U.jsxs("section", { style: I1, children: [
    /* @__PURE__ */ U.jsx("p", { style: k1, children: "React product shell" }),
    /* @__PURE__ */ U.jsx("h1", { style: P1, children: "Traceball Arena" }),
    /* @__PURE__ */ U.jsx("p", { style: lh, children: "The React shell owns product state only. The Elm board island is not mounted yet, and online authority remains on the server." }),
    /* @__PURE__ */ U.jsxs("div", { style: th, children: [
      /* @__PURE__ */ U.jsxs("article", { style: Zi, children: [
        /* @__PURE__ */ U.jsx("p", { style: bt, children: "Player Name" }),
        /* @__PURE__ */ U.jsx(
          "input",
          {
            "aria-label": "Player name",
            value: h.playerName || "",
            onChange: al,
            style: uh,
            placeholder: "Enter your name"
          }
        )
      ] }),
      /* @__PURE__ */ U.jsxs("article", { style: Zi, children: [
        /* @__PURE__ */ U.jsx("p", { style: bt, children: "Client Identity" }),
        /* @__PURE__ */ U.jsx("p", { style: sn, children: Gl })
      ] }),
      /* @__PURE__ */ U.jsxs("article", { style: Zi, children: [
        /* @__PURE__ */ U.jsx("p", { style: bt, children: "Online Move Timer" }),
        /* @__PURE__ */ U.jsxs("p", { style: sn, children: [
          h.onlineSetup.moveTimeLimitSeconds,
          "s"
        ] })
      ] }),
      /* @__PURE__ */ U.jsxs("article", { style: Zi, children: [
        /* @__PURE__ */ U.jsx("p", { style: bt, children: "Connection" }),
        /* @__PURE__ */ U.jsxs("p", { style: sn, children: [
          /* @__PURE__ */ U.jsx(
            "span",
            {
              style: {
                ...ah,
                background: tl === "connected" ? "#0a8f28" : tl === "error" ? "#d64545" : "#9aa79e"
              }
            }
          ),
          tl
        ] })
      ] })
    ] }),
    /* @__PURE__ */ U.jsxs("div", { style: { marginTop: "20px" }, children: [
      /* @__PURE__ */ U.jsx("p", { style: bt, children: "Selected Mode" }),
      /* @__PURE__ */ U.jsxs("div", { style: ze, children: [
        /* @__PURE__ */ U.jsx(
          "button",
          {
            type: "button",
            style: $u(h.mode === "online"),
            onClick: () => b({ type: "setMode", mode: "online" }),
            children: "Online"
          }
        ),
        /* @__PURE__ */ U.jsx(
          "button",
          {
            type: "button",
            style: $u(h.mode === "local"),
            onClick: () => b({ type: "setMode", mode: "local" }),
            children: "Local"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ U.jsxs("div", { style: { marginTop: "20px" }, children: [
      /* @__PURE__ */ U.jsx("p", { style: bt, children: "Online Actions" }),
      /* @__PURE__ */ U.jsx("div", { style: ze, children: /* @__PURE__ */ U.jsx(
        "button",
        {
          type: "button",
          style: $u(!1),
          onClick: Pl,
          children: "Create Board"
        }
      ) })
    ] }),
    /* @__PURE__ */ U.jsxs("div", { style: { marginTop: "20px" }, children: [
      /* @__PURE__ */ U.jsx("p", { style: bt, children: "Active Tab" }),
      /* @__PURE__ */ U.jsx("p", { style: sn, children: h.mainTab || "home" })
    ] }),
    h.currentBoardCode ? /* @__PURE__ */ U.jsxs("div", { style: { marginTop: "20px" }, children: [
      /* @__PURE__ */ U.jsx("p", { style: bt, children: "Current Board" }),
      /* @__PURE__ */ U.jsx("p", { style: sn, children: h.currentBoardCode })
    ] }) : null,
    H.length > 0 ? /* @__PURE__ */ U.jsxs("div", { style: { marginTop: "20px" }, children: [
      /* @__PURE__ */ U.jsx("p", { style: bt, children: "Match" }),
      /* @__PURE__ */ U.jsx("div", { style: ze, children: H.map((ll) => /* @__PURE__ */ U.jsx(
        "button",
        {
          type: "button",
          style: $u(!1),
          onClick: () => Oh({
            seatId: ll.seatId,
            currentBoardCode: h.currentBoardCode,
            clientId: h.clientId,
            playerName: h.playerName,
            connection: p.current,
            dispatch: b
          }),
          children: ll.label
        },
        ll.seatId
      )) })
    ] }) : null,
    E ? /* @__PURE__ */ U.jsxs("div", { style: { marginTop: "20px" }, children: [
      /* @__PURE__ */ U.jsx("p", { style: bt, children: "Seat" }),
      /* @__PURE__ */ U.jsx("div", { style: ze, children: /* @__PURE__ */ U.jsx(
        "button",
        {
          type: "button",
          style: $u(!1),
          onClick: () => Ah({
            ownSeat: o,
            connection: p.current,
            dispatch: b
          }),
          children: E.label
        }
      ) })
    ] }) : null,
    j ? /* @__PURE__ */ U.jsxs("div", { style: { marginTop: "20px" }, children: [
      /* @__PURE__ */ U.jsx("p", { style: bt, children: "Waiting List" }),
      /* @__PURE__ */ U.jsx("div", { style: ze, children: /* @__PURE__ */ U.jsx(
        "button",
        {
          type: "button",
          style: $u(!1),
          onClick: () => {
            if (j.type === "join") {
              _h({
                currentBoardCode: h.currentBoardCode,
                clientId: h.clientId,
                playerName: h.playerName,
                connection: p.current,
                dispatch: b
              });
              return;
            }
            Nh({
              currentBoardCode: h.currentBoardCode,
              clientId: h.clientId,
              connection: p.current,
              dispatch: b
            });
          },
          children: j.label
        }
      ) })
    ] }) : null,
    Sl.length > 0 ? /* @__PURE__ */ U.jsxs("div", { style: { marginTop: "20px" }, children: [
      /* @__PURE__ */ U.jsx("p", { style: bt, children: "Session" }),
      /* @__PURE__ */ U.jsx("div", { style: ze, children: Sl.map((ll) => /* @__PURE__ */ U.jsx(
        "button",
        {
          type: "button",
          style: $u(!1),
          onClick: () => {
            if (ll.type === "pause") {
              ph({
                ownSeat: o,
                connection: p.current,
                dispatch: b
              });
              return;
            }
            Mh({
              ownSeat: o,
              connection: p.current,
              dispatch: b
            });
          },
          children: ll.label
        },
        ll.type
      )) })
    ] }) : null,
    ql ? /* @__PURE__ */ U.jsxs("div", { style: { marginTop: "20px" }, children: [
      /* @__PURE__ */ U.jsx("p", { style: bt, children: "Round" }),
      /* @__PURE__ */ U.jsx("div", { style: ze, children: /* @__PURE__ */ U.jsx(
        "button",
        {
          type: "button",
          style: $u(!1),
          onClick: () => Ch({
            ownSeat: o,
            connection: p.current,
            dispatch: b
          }),
          children: ql.label
        }
      ) })
    ] }) : null,
    X ? /* @__PURE__ */ U.jsx("div", { style: Bo, children: /* @__PURE__ */ U.jsx(
      B1,
      {
        snapshot: X,
        ownSeat: o,
        replayIndex: null,
        flipVertical: !1,
        onMoveClick: (ll) => {
          console.info("Board move click", ll), zh({
            payload: ll,
            ownSeat: o,
            connection: p.current,
            dispatch: b
          });
        }
      }
    ) }) : /* @__PURE__ */ U.jsx("div", { style: Bo, children: "Board island not mounted yet" }),
    h.toast ? /* @__PURE__ */ U.jsx("div", { style: { ...Bo, marginTop: "10px" }, children: h.toast }) : null,
    /* @__PURE__ */ U.jsx("div", { style: eh, children: "Elm remains the board and replay correctness surface. The server remains authoritative for seats, timers, pause/resume, winners, and online move validation." })
  ] }) });
}
const Ty = document.getElementById("react-root");
if (Ty) {
  const r = w1({
    clientId: Z1(),
    playerName: V1(),
    onlineMoveTimer: J1()
  });
  U1.createRoot(Ty).render(
    /* @__PURE__ */ U.jsx(_1.StrictMode, { children: /* @__PURE__ */ U.jsx(Uh, { initialState: r }) })
  );
}
