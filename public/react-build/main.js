function S1(d) {
  return d && d.__esModule && Object.prototype.hasOwnProperty.call(d, "default") ? d.default : d;
}
var No = { exports: {} }, nn = {};
var fv;
function T1() {
  if (fv) return nn;
  fv = 1;
  var d = /* @__PURE__ */ Symbol.for("react.transitional.element"), b = /* @__PURE__ */ Symbol.for("react.fragment");
  function _(r, A, C) {
    var j = null;
    if (C !== void 0 && (j = "" + C), A.key !== void 0 && (j = "" + A.key), "key" in A) {
      C = {};
      for (var x in A)
        x !== "key" && (C[x] = A[x]);
    } else C = A;
    return A = C.ref, {
      $$typeof: d,
      type: r,
      key: j,
      ref: A !== void 0 ? A : null,
      props: C
    };
  }
  return nn.Fragment = b, nn.jsx = _, nn.jsxs = _, nn;
}
var iv;
function b1() {
  return iv || (iv = 1, No.exports = T1()), No.exports;
}
var w = b1(), Ao = { exports: {} }, V = {};
var cv;
function E1() {
  if (cv) return V;
  cv = 1;
  var d = /* @__PURE__ */ Symbol.for("react.transitional.element"), b = /* @__PURE__ */ Symbol.for("react.portal"), _ = /* @__PURE__ */ Symbol.for("react.fragment"), r = /* @__PURE__ */ Symbol.for("react.strict_mode"), A = /* @__PURE__ */ Symbol.for("react.profiler"), C = /* @__PURE__ */ Symbol.for("react.consumer"), j = /* @__PURE__ */ Symbol.for("react.context"), x = /* @__PURE__ */ Symbol.for("react.forward_ref"), L = /* @__PURE__ */ Symbol.for("react.suspense"), tl = /* @__PURE__ */ Symbol.for("react.memo"), p = /* @__PURE__ */ Symbol.for("react.lazy"), T = /* @__PURE__ */ Symbol.for("react.activity"), B = /* @__PURE__ */ Symbol.for("react.view_transition"), ll = Symbol.iterator;
  function El(s) {
    return s === null || typeof s != "object" ? null : (s = ll && s[ll] || s["@@iterator"], typeof s == "function" ? s : null);
  }
  var jl = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, el = Object.assign, St = {};
  function at(s, O, Y) {
    this.props = s, this.context = O, this.refs = St, this.updater = Y || jl;
  }
  at.prototype.isReactComponent = {}, at.prototype.setState = function(s, O) {
    if (typeof s != "object" && typeof s != "function" && s != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, s, O, "setState");
  }, at.prototype.forceUpdate = function(s) {
    this.updater.enqueueForceUpdate(this, s, "forceUpdate");
  };
  function wu() {
  }
  wu.prototype = at.prototype;
  function jt(s, O, Y) {
    this.props = s, this.context = O, this.refs = St, this.updater = Y || jl;
  }
  var xt = jt.prototype = new wu();
  xt.constructor = jt, el(xt, at.prototype), xt.isPureReactComponent = !0;
  var et = Array.isArray;
  function F() {
  }
  var il = { H: null, A: null, T: null, S: null }, Gt = Object.prototype.hasOwnProperty;
  function Tt(s, O, Y) {
    var q = Y.ref;
    return {
      $$typeof: d,
      type: s,
      key: O,
      ref: q !== void 0 ? q : null,
      props: Y
    };
  }
  function bt(s, O) {
    return Tt(s.type, O, s.props);
  }
  function nt(s) {
    return typeof s == "object" && s !== null && s.$$typeof === d;
  }
  function hu(s) {
    var O = { "=": "=0", ":": "=2" };
    return "$" + s.replace(/[=:]/g, function(Y) {
      return O[Y];
    });
  }
  var $u = /\/+/g;
  function pl(s, O) {
    return typeof s == "object" && s !== null && s.key != null ? hu("" + s.key) : O.toString(36);
  }
  function M(s) {
    switch (s.status) {
      case "fulfilled":
        return s.value;
      case "rejected":
        throw s.reason;
      default:
        switch (typeof s.status == "string" ? s.then(F, F) : (s.status = "pending", s.then(
          function(O) {
            s.status === "pending" && (s.status = "fulfilled", s.value = O);
          },
          function(O) {
            s.status === "pending" && (s.status = "rejected", s.reason = O);
          }
        )), s.status) {
          case "fulfilled":
            return s.value;
          case "rejected":
            throw s.reason;
        }
    }
    throw s;
  }
  function X(s, O, Y, q, al) {
    var nl = typeof s;
    (nl === "undefined" || nl === "boolean") && (s = null);
    var cl = !1;
    if (s === null) cl = !0;
    else
      switch (nl) {
        case "bigint":
        case "string":
        case "number":
          cl = !0;
          break;
        case "object":
          switch (s.$$typeof) {
            case d:
            case b:
              cl = !0;
              break;
            case p:
              return cl = s._init, X(
                cl(s._payload),
                O,
                Y,
                q,
                al
              );
          }
      }
    if (cl)
      return al = al(s), cl = q === "" ? "." + pl(s, 0) : q, et(al) ? (Y = "", cl != null && (Y = cl.replace($u, "$&/") + "/"), X(al, O, Y, "", function(lu) {
        return lu;
      })) : al != null && (nt(al) && (al = bt(
        al,
        Y + (al.key == null || s && s.key === al.key ? "" : ("" + al.key).replace(
          $u,
          "$&/"
        ) + "/") + cl
      )), O.push(al)), 1;
    cl = 0;
    var R = q === "" ? "." : q + ":";
    if (et(s))
      for (var Z = 0; Z < s.length; Z++)
        q = s[Z], nl = R + pl(q, Z), cl += X(
          q,
          O,
          Y,
          nl,
          al
        );
    else if (Z = El(s), typeof Z == "function")
      for (s = Z.call(s), Z = 0; !(q = s.next()).done; )
        q = q.value, nl = R + pl(q, Z++), cl += X(
          q,
          O,
          Y,
          nl,
          al
        );
    else if (nl === "object") {
      if (typeof s.then == "function")
        return X(
          M(s),
          O,
          Y,
          q,
          al
        );
      throw O = String(s), Error(
        "Objects are not valid as a React child (found: " + (O === "[object Object]" ? "object with keys {" + Object.keys(s).join(", ") + "}" : O) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return cl;
  }
  function Q(s, O, Y) {
    if (s == null) return s;
    var q = [], al = 0;
    return X(s, q, "", "", function(nl) {
      return O.call(Y, nl, al++);
    }), q;
  }
  function hl(s) {
    if (s._status === -1) {
      var O = s._result, Y = O();
      Y.then(
        function(q) {
          (s._status === 0 || s._status === -1) && (s._status = 1, s._result = q, Y.status === void 0 && (Y.status = "fulfilled", Y.value = q));
        },
        function(q) {
          (s._status === 0 || s._status === -1) && (s._status = 2, s._result = q, Y.status === void 0 && (Y.status = "rejected", Y.reason = q));
        }
      ), s._status === -1 && (s._status = 0, s._result = Y);
    }
    if (s._status === 1) return s._result.default;
    throw s._result;
  }
  var rl = typeof reportError == "function" ? reportError : function(s) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var O = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof s == "object" && s !== null && typeof s.message == "string" ? String(s.message) : String(s),
        error: s
      });
      if (!window.dispatchEvent(O)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", s);
      return;
    }
    console.error(s);
  };
  function Ut(s) {
    var O = il.T, Y = {};
    Y.types = O !== null ? O.types : null, il.T = Y;
    try {
      var q = s(), al = il.S;
      al !== null && al(Y, q), typeof q == "object" && q !== null && typeof q.then == "function" && q.then(F, rl);
    } catch (nl) {
      rl(nl);
    } finally {
      O !== null && Y.types !== null && (O.types = Y.types), il.T = O;
    }
  }
  function Pt(s) {
    var O = il.T;
    if (O !== null) {
      var Y = O.types;
      Y === null ? O.types = [s] : Y.indexOf(s) === -1 && Y.push(s);
    } else Ut(Pt.bind(null, s));
  }
  var Fu = {
    map: Q,
    forEach: function(s, O, Y) {
      Q(
        s,
        function() {
          O.apply(this, arguments);
        },
        Y
      );
    },
    count: function(s) {
      var O = 0;
      return Q(s, function() {
        O++;
      }), O;
    },
    toArray: function(s) {
      return Q(s, function(O) {
        return O;
      }) || [];
    },
    only: function(s) {
      if (!nt(s))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return s;
    }
  };
  return V.Activity = T, V.Children = Fu, V.Component = at, V.Fragment = _, V.Profiler = A, V.PureComponent = jt, V.StrictMode = r, V.Suspense = L, V.ViewTransition = B, V.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = il, V.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(s) {
      return il.H.useMemoCache(s);
    }
  }, V.addTransitionType = Pt, V.cache = function(s) {
    return function() {
      return s.apply(null, arguments);
    };
  }, V.cacheSignal = function() {
    return null;
  }, V.cloneElement = function(s, O, Y) {
    if (s == null)
      throw Error(
        "The argument must be a React element, but you passed " + s + "."
      );
    var q = el({}, s.props), al = s.key;
    if (O != null)
      for (nl in O.key !== void 0 && (al = "" + O.key), O)
        !Gt.call(O, nl) || nl === "key" || nl === "__self" || nl === "__source" || nl === "ref" && O.ref === void 0 || (q[nl] = O[nl]);
    var nl = arguments.length - 2;
    if (nl === 1) q.children = Y;
    else if (1 < nl) {
      for (var cl = Array(nl), R = 0; R < nl; R++)
        cl[R] = arguments[R + 2];
      q.children = cl;
    }
    return Tt(s.type, al, q);
  }, V.createContext = function(s) {
    return s = {
      $$typeof: j,
      _currentValue: s,
      _currentValue2: s,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, s.Provider = s, s.Consumer = {
      $$typeof: C,
      _context: s
    }, s;
  }, V.createElement = function(s, O, Y) {
    var q, al = {}, nl = null;
    if (O != null)
      for (q in O.key !== void 0 && (nl = "" + O.key), O)
        Gt.call(O, q) && q !== "key" && q !== "__self" && q !== "__source" && (al[q] = O[q]);
    var cl = arguments.length - 2;
    if (cl === 1) al.children = Y;
    else if (1 < cl) {
      for (var R = Array(cl), Z = 0; Z < cl; Z++)
        R[Z] = arguments[Z + 2];
      al.children = R;
    }
    if (s && s.defaultProps)
      for (q in cl = s.defaultProps, cl)
        al[q] === void 0 && (al[q] = cl[q]);
    return Tt(s, nl, al);
  }, V.createRef = function() {
    return { current: null };
  }, V.forwardRef = function(s) {
    return { $$typeof: x, render: s };
  }, V.isValidElement = nt, V.lazy = function(s) {
    return {
      $$typeof: p,
      _payload: { _status: -1, _result: s },
      _init: hl
    };
  }, V.memo = function(s, O) {
    return {
      $$typeof: tl,
      type: s,
      compare: O === void 0 ? null : O
    };
  }, V.startTransition = Ut, V.unstable_useCacheRefresh = function() {
    return il.H.useCacheRefresh();
  }, V.use = function(s) {
    return il.H.use(s);
  }, V.useActionState = function(s, O, Y) {
    return il.H.useActionState(s, O, Y);
  }, V.useCallback = function(s, O) {
    return il.H.useCallback(s, O);
  }, V.useContext = function(s) {
    return il.H.useContext(s);
  }, V.useDebugValue = function() {
  }, V.useDeferredValue = function(s, O) {
    return il.H.useDeferredValue(s, O);
  }, V.useEffect = function(s, O) {
    return il.H.useEffect(s, O);
  }, V.useEffectEvent = function(s) {
    return il.H.useEffectEvent(s);
  }, V.useId = function() {
    return il.H.useId();
  }, V.useImperativeHandle = function(s, O, Y) {
    return il.H.useImperativeHandle(s, O, Y);
  }, V.useInsertionEffect = function(s, O) {
    return il.H.useInsertionEffect(s, O);
  }, V.useLayoutEffect = function(s, O) {
    return il.H.useLayoutEffect(s, O);
  }, V.useMemo = function(s, O) {
    return il.H.useMemo(s, O);
  }, V.useOptimistic = function(s, O) {
    return il.H.useOptimistic(s, O);
  }, V.useReducer = function(s, O, Y) {
    return il.H.useReducer(s, O, Y);
  }, V.useRef = function(s) {
    return il.H.useRef(s);
  }, V.useState = function(s) {
    return il.H.useState(s);
  }, V.useSyncExternalStore = function(s, O, Y) {
    return il.H.useSyncExternalStore(
      s,
      O,
      Y
    );
  }, V.useTransition = function() {
    return il.H.useTransition();
  }, V.version = "19.3.0", V;
}
var ov;
function Bo() {
  return ov || (ov = 1, Ao.exports = E1()), Ao.exports;
}
var gt = Bo();
const z1 = /* @__PURE__ */ S1(gt);
var Mo = { exports: {} }, fn = {}, Do = { exports: {} }, Co = {};
var rv;
function _1() {
  return rv || (rv = 1, (function(d) {
    function b(M, X) {
      var Q = M.length;
      M.push(X);
      l: for (; 0 < Q; ) {
        var hl = Q - 1 >>> 1, rl = M[hl];
        if (0 < A(rl, X))
          M[hl] = X, M[Q] = rl, Q = hl;
        else break l;
      }
    }
    function _(M) {
      return M.length === 0 ? null : M[0];
    }
    function r(M) {
      if (M.length === 0) return null;
      var X = M[0], Q = M.pop();
      if (Q !== X) {
        M[0] = Q;
        l: for (var hl = 0, rl = M.length, Ut = rl >>> 1; hl < Ut; ) {
          var Pt = 2 * (hl + 1) - 1, Fu = M[Pt], s = Pt + 1, O = M[s];
          if (0 > A(Fu, Q))
            s < rl && 0 > A(O, Fu) ? (M[hl] = O, M[s] = Q, hl = s) : (M[hl] = Fu, M[Pt] = Q, hl = Pt);
          else if (s < rl && 0 > A(O, Q))
            M[hl] = O, M[s] = Q, hl = s;
          else break l;
        }
      }
      return X;
    }
    function A(M, X) {
      var Q = M.sortIndex - X.sortIndex;
      return Q !== 0 ? Q : M.id - X.id;
    }
    if (d.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var C = performance;
      d.unstable_now = function() {
        return C.now();
      };
    } else {
      var j = Date, x = j.now();
      d.unstable_now = function() {
        return j.now() - x;
      };
    }
    var L = [], tl = [], p = 1, T = null, B = 3, ll = !1, El = !1, jl = !1, el = !1, St = typeof setTimeout == "function" ? setTimeout : null, at = typeof clearTimeout == "function" ? clearTimeout : null, wu = typeof setImmediate < "u" ? setImmediate : null;
    function jt(M) {
      for (var X = _(tl); X !== null; ) {
        if (X.callback === null) r(tl);
        else if (X.startTime <= M)
          r(tl), X.sortIndex = X.expirationTime, b(L, X);
        else break;
        X = _(tl);
      }
    }
    function xt(M) {
      if (jl = !1, jt(M), !El)
        if (_(L) !== null)
          El = !0, et || (et = !0, nt());
        else {
          var X = _(tl);
          X !== null && pl(xt, X.startTime - M);
        }
    }
    var et = !1, F = -1, il = 5, Gt = -1;
    function Tt() {
      return el ? !0 : !(d.unstable_now() - Gt < il);
    }
    function bt() {
      if (el = !1, et) {
        var M = d.unstable_now();
        Gt = M;
        var X = !0;
        try {
          l: {
            El = !1, jl && (jl = !1, at(F), F = -1), ll = !0;
            var Q = B;
            try {
              t: {
                for (jt(M), T = _(L); T !== null && !(T.expirationTime > M && Tt()); ) {
                  var hl = T.callback;
                  if (typeof hl == "function") {
                    T.callback = null, B = T.priorityLevel;
                    var rl = hl(
                      T.expirationTime <= M
                    );
                    if (M = d.unstable_now(), typeof rl == "function") {
                      T.callback = rl, jt(M), X = !0;
                      break t;
                    }
                    T === _(L) && r(L), jt(M);
                  } else r(L);
                  T = _(L);
                }
                if (T !== null) X = !0;
                else {
                  var Ut = _(tl);
                  Ut !== null && pl(
                    xt,
                    Ut.startTime - M
                  ), X = !1;
                }
              }
              break l;
            } finally {
              T = null, B = Q, ll = !1;
            }
            X = void 0;
          }
        } finally {
          X ? nt() : et = !1;
        }
      }
    }
    var nt;
    if (typeof wu == "function")
      nt = function() {
        wu(bt);
      };
    else if (typeof MessageChannel < "u") {
      var hu = new MessageChannel(), $u = hu.port2;
      hu.port1.onmessage = bt, nt = function() {
        $u.postMessage(null);
      };
    } else
      nt = function() {
        St(bt, 0);
      };
    function pl(M, X) {
      F = St(function() {
        M(d.unstable_now());
      }, X);
    }
    d.unstable_IdlePriority = 5, d.unstable_ImmediatePriority = 1, d.unstable_LowPriority = 4, d.unstable_NormalPriority = 3, d.unstable_Profiling = null, d.unstable_UserBlockingPriority = 2, d.unstable_cancelCallback = function(M) {
      M.callback = null;
    }, d.unstable_forceFrameRate = function(M) {
      0 > M || 125 < M ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : il = 0 < M ? Math.floor(1e3 / M) : 5;
    }, d.unstable_getCurrentPriorityLevel = function() {
      return B;
    }, d.unstable_next = function(M) {
      switch (B) {
        case 1:
        case 2:
        case 3:
          var X = 3;
          break;
        default:
          X = B;
      }
      var Q = B;
      B = X;
      try {
        return M();
      } finally {
        B = Q;
      }
    }, d.unstable_requestPaint = function() {
      el = !0;
    }, d.unstable_runWithPriority = function(M, X) {
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
      var Q = B;
      B = M;
      try {
        return X();
      } finally {
        B = Q;
      }
    }, d.unstable_scheduleCallback = function(M, X, Q) {
      var hl = d.unstable_now();
      switch (typeof Q == "object" && Q !== null ? (Q = Q.delay, Q = typeof Q == "number" && 0 < Q ? hl + Q : hl) : Q = hl, M) {
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
      return rl = Q + rl, M = {
        id: p++,
        callback: X,
        priorityLevel: M,
        startTime: Q,
        expirationTime: rl,
        sortIndex: -1
      }, Q > hl ? (M.sortIndex = Q, b(tl, M), _(L) === null && M === _(tl) && (jl ? (at(F), F = -1) : jl = !0, pl(xt, Q - hl))) : (M.sortIndex = rl, b(L, M), El || ll || (El = !0, et || (et = !0, nt()))), M;
    }, d.unstable_shouldYield = Tt, d.unstable_wrapCallback = function(M) {
      var X = B;
      return function() {
        var Q = B;
        B = X;
        try {
          return M.apply(this, arguments);
        } finally {
          B = Q;
        }
      };
    };
  })(Co)), Co;
}
var sv;
function O1() {
  return sv || (sv = 1, Do.exports = _1()), Do.exports;
}
var Uo = { exports: {} }, Kl = {};
var dv;
function N1() {
  if (dv) return Kl;
  dv = 1;
  var d = Bo();
  function b(p) {
    var T = "https://react.dev/errors/" + p;
    if (1 < arguments.length) {
      T += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var B = 2; B < arguments.length; B++)
        T += "&args[]=" + encodeURIComponent(arguments[B]);
    }
    return "Minified React error #" + p + "; visit " + T + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function _() {
  }
  var r = {
    d: {
      f: _,
      r: function() {
        throw Error(b(522));
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
  }, A = /* @__PURE__ */ Symbol.for("react.portal"), C = /* @__PURE__ */ Symbol.for("react.recoverable"), j = /* @__PURE__ */ Symbol.for("react.optimistic_key");
  function x(p, T, B) {
    var ll = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: A,
      key: ll == null ? null : ll === j ? j : "" + ll,
      children: p,
      containerInfo: T,
      implementation: B
    };
  }
  var L = d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function tl(p, T) {
    if (p === "font") return "";
    if (typeof T == "string")
      return T === "use-credentials" ? T : "";
  }
  return Kl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r, Kl.browser = function(p) {
    return { $$typeof: C, _reason: p };
  }, Kl.createPortal = function(p, T) {
    var B = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!T || T.nodeType !== 1 && T.nodeType !== 9 && T.nodeType !== 11)
      throw Error(b(299));
    return x(p, T, null, B);
  }, Kl.flushSync = function(p) {
    var T = L.T, B = r.p;
    try {
      if (L.T = null, r.p = 2, p) return p();
    } finally {
      L.T = T, r.p = B, r.d.f();
    }
  }, Kl.preconnect = function(p, T) {
    typeof p == "string" && (T ? (T = T.crossOrigin, T = typeof T == "string" ? T === "use-credentials" ? T : "" : void 0) : T = null, r.d.C(p, T));
  }, Kl.prefetchDNS = function(p) {
    typeof p == "string" && r.d.D(p);
  }, Kl.preinit = function(p, T) {
    if (typeof p == "string" && T && typeof T.as == "string") {
      var B = T.as, ll = tl(B, T.crossOrigin), El = typeof T.integrity == "string" ? T.integrity : void 0, jl = typeof T.fetchPriority == "string" ? T.fetchPriority : void 0;
      B === "style" ? r.d.S(
        p,
        typeof T.precedence == "string" ? T.precedence : void 0,
        {
          crossOrigin: ll,
          integrity: El,
          fetchPriority: jl
        }
      ) : B === "script" && r.d.X(p, {
        crossOrigin: ll,
        integrity: El,
        fetchPriority: jl,
        nonce: typeof T.nonce == "string" ? T.nonce : void 0
      });
    }
  }, Kl.preinitModule = function(p, T) {
    if (typeof p == "string")
      if (typeof T == "object" && T !== null) {
        if (T.as == null || T.as === "script") {
          var B = tl(
            T.as,
            T.crossOrigin
          );
          r.d.M(p, {
            crossOrigin: B,
            integrity: typeof T.integrity == "string" ? T.integrity : void 0,
            nonce: typeof T.nonce == "string" ? T.nonce : void 0,
            fetchPriority: typeof T.fetchPriority == "string" ? T.fetchPriority : void 0
          });
        }
      } else T == null && r.d.M(p);
  }, Kl.preload = function(p, T) {
    if (typeof p == "string" && typeof T == "object" && T !== null && typeof T.as == "string") {
      var B = T.as, ll = tl(B, T.crossOrigin);
      r.d.L(p, B, {
        crossOrigin: ll,
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
  }, Kl.preloadModule = function(p, T) {
    if (typeof p == "string")
      if (T) {
        var B = tl(T.as, T.crossOrigin);
        r.d.m(p, {
          as: typeof T.as == "string" && T.as !== "script" ? T.as : void 0,
          crossOrigin: B,
          integrity: typeof T.integrity == "string" ? T.integrity : void 0,
          nonce: typeof T.nonce == "string" ? T.nonce : void 0,
          fetchPriority: typeof T.fetchPriority == "string" ? T.fetchPriority : void 0
        });
      } else r.d.m(p);
  }, Kl.requestFormReset = function(p) {
    r.d.r(p);
  }, Kl.unstable_batchedUpdates = function(p, T) {
    return p(T);
  }, Kl.useFormState = function(p, T, B) {
    return L.H.useFormState(p, T, B);
  }, Kl.useFormStatus = function() {
    return L.H.useHostTransitionStatus();
  }, Kl.version = "19.3.0", Kl;
}
var vv;
function A1() {
  if (vv) return Uo.exports;
  vv = 1;
  function d() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(d);
      } catch (b) {
        console.error(b);
      }
  }
  return d(), Uo.exports = N1(), Uo.exports;
}
var yv;
function M1() {
  if (yv) return fn;
  yv = 1;
  var d = O1(), b = Bo(), _ = A1();
  function r(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var u = 2; u < arguments.length; u++)
        t += "&args[]=" + encodeURIComponent(arguments[u]);
    }
    return "Minified React error #" + l + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function A(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function C(l) {
    for (var t = l, u = t; u && !u.alternate; )
      t = u, (t.flags & 4098) !== 0 && (l = t.return), u = t.return;
    for (; t.return; ) t = t.return;
    return t.tag === 3 ? l : null;
  }
  function j(l) {
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
  function L(l) {
    if (C(l) !== l)
      throw Error(r(188));
  }
  function tl(l) {
    var t = l.alternate;
    if (!t) {
      if (t = C(l), t === null) throw Error(r(188));
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
          if (n === u) return L(e), l;
          if (n === a) return L(e), t;
          n = n.sibling;
        }
        throw Error(r(188));
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
          if (!f) throw Error(r(189));
        }
      }
      if (u.alternate !== a) throw Error(r(190));
    }
    if (u.tag !== 3) throw Error(r(188));
    return u.stateNode.current === u ? l : t;
  }
  function p(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null; ) {
      if (t = p(l), t !== null) return t;
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
  function B(l) {
    for (l = l.return; l !== null; ) {
      if (l.tag === 3 || l.tag === 5 || l.tag === 27) return l;
      l = l.return;
    }
    return null;
  }
  function ll(l) {
    var t = !1;
    for (l = l.return; l !== null && (l.tag === 4 && (t = !0), !(l.tag === 3 || l.tag === 5 || l.tag === 27)); )
      l = l.return;
    return t;
  }
  function El(l) {
    var t = [null, null], u = B(l);
    return u === null || jl(
      t,
      l,
      u.child,
      { foundSelf: !1 }
    ), t;
  }
  function jl(l, t, u, a) {
    for (; u !== null; ) {
      if (u === t) a.foundSelf = !0;
      else if (u.tag === 5 || u.tag === 27 || u.tag === 6) {
        if (a.foundSelf) return l[1] = u, !0;
        l[0] = u;
      } else if ((u.tag !== 22 || u.memoizedState === null) && jl(
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
  function el(l) {
    switch (l.tag) {
      case 5:
      case 27:
      case 6:
        return l.stateNode;
      case 3:
        return l.stateNode.containerInfo;
      default:
        throw Error(r(559));
    }
  }
  var St = null, at = null;
  function wu(l, t, u) {
    return l === u ? !0 : l === t ? (St = l, !0) : !1;
  }
  function jt(l, t, u) {
    return l === u ? (at = l, !1) : l === t ? (at !== null && (St = l), !0) : !1;
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
  var F = Object.assign, il = /* @__PURE__ */ Symbol.for("react.element"), Gt = /* @__PURE__ */ Symbol.for("react.transitional.element"), Tt = /* @__PURE__ */ Symbol.for("react.portal"), bt = /* @__PURE__ */ Symbol.for("react.fragment"), nt = /* @__PURE__ */ Symbol.for("react.strict_mode"), hu = /* @__PURE__ */ Symbol.for("react.profiler"), $u = /* @__PURE__ */ Symbol.for("react.consumer"), pl = /* @__PURE__ */ Symbol.for("react.context"), M = /* @__PURE__ */ Symbol.for("react.forward_ref"), X = /* @__PURE__ */ Symbol.for("react.suspense"), Q = /* @__PURE__ */ Symbol.for("react.suspense_list"), hl = /* @__PURE__ */ Symbol.for("react.memo"), rl = /* @__PURE__ */ Symbol.for("react.lazy"), Ut = /* @__PURE__ */ Symbol.for("react.activity"), Pt = /* @__PURE__ */ Symbol.for("react.legacy_hidden"), Fu = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), s = /* @__PURE__ */ Symbol.for("react.view_transition"), O = /* @__PURE__ */ Symbol.for("react.recoverable"), Y = Symbol.iterator;
  function q(l) {
    return l === null || typeof l != "object" ? null : (l = Y && l[Y] || l["@@iterator"], typeof l == "function" ? l : null);
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
      case hu:
        return "Profiler";
      case nt:
        return "StrictMode";
      case X:
        return "Suspense";
      case Q:
        return "SuspenseList";
      case Ut:
        return "Activity";
      case s:
        return "ViewTransition";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case Tt:
          return "Portal";
        case pl:
          return l.displayName || "Context";
        case $u:
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
  var cl = Array.isArray, R = b.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Z = _.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, lu = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, Vf = [], Ta = -1;
  function Xt(l) {
    return { current: l };
  }
  function xl(l) {
    0 > Ta || (l.current = Vf[Ta], Vf[Ta] = null, Ta--);
  }
  function Sl(l, t) {
    Ta++, Vf[Ta] = l.current, l.current = t;
  }
  var Qt = Xt(null), se = Xt(null), gu = Xt(null), on = Xt(null);
  function rn(l, t) {
    switch (Sl(gu, t), Sl(se, l), Sl(Qt, null), t.nodeType) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? md(l) : 0;
        break;
      default:
        if (l = t.tagName, t = t.namespaceURI)
          t = md(t), l = hd(t, l);
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
    xl(Qt), Sl(Qt, l);
  }
  function ba() {
    xl(Qt), xl(se), xl(gu);
  }
  function Lf(l) {
    var t = l.memoizedState;
    t !== null && (ie._currentValue = t.memoizedState, Sl(on, l)), t = Qt.current;
    var u = hd(t, l.type);
    t !== u && (Sl(se, l), Sl(Qt, u));
  }
  function sn(l) {
    se.current === l && (xl(Qt), xl(se)), on.current === l && (xl(on), ie._currentValue = lu);
  }
  var Kf, qo;
  function Su(l) {
    if (Kf === void 0)
      try {
        throw Error();
      } catch (u) {
        var t = u.stack.trim().match(/\n( *(at )?)/);
        Kf = t && t[1] || "", qo = -1 < u.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < u.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Kf + l + qo;
  }
  var Jf = !1;
  function wf(l, t) {
    if (!l || Jf) return "";
    Jf = !0;
    var u = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
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
                } catch (N) {
                  var v = N;
                }
                Reflect.construct(l, [], z);
              } else {
                try {
                  z.call();
                } catch (N) {
                  v = N;
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
              } catch (N) {
                v = N;
              }
              (z = l()) && typeof z.catch == "function" && z.catch(function() {
              });
            }
          } catch (N) {
            if (N && v && typeof N.stack == "string")
              return [N.stack, v.stack];
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
`), m = i.split(`
`);
        for (e = a = 0; a < c.length && !c[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; e < m.length && !m[e].includes(
          "DetermineComponentFrameRoot"
        ); )
          e++;
        if (a === c.length || e === m.length)
          for (a = c.length - 1, e = m.length - 1; 1 <= a && 0 <= e && c[a] !== m[e]; )
            e--;
        for (; 1 <= a && 0 <= e; a--, e--)
          if (c[a] !== m[e]) {
            if (a !== 1 || e !== 1)
              do
                if (a--, e--, 0 > e || c[a] !== m[e]) {
                  var S = `
` + c[a].replace(" at new ", " at ");
                  return l.displayName && S.includes("<anonymous>") && (S = S.replace("<anonymous>", l.displayName)), S;
                }
              while (1 <= a && 0 <= e);
            break;
          }
      }
    } finally {
      Jf = !1, Error.prepareStackTrace = u;
    }
    return (u = l ? l.displayName || l.name : "") ? Su(u) : "";
  }
  function zv(l, t) {
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
        return wf(l.type, !1);
      case 11:
        return wf(l.type.render, !1);
      case 1:
        return wf(l.type, !0);
      case 31:
        return Su("Activity");
      case 30:
        return Su("ViewTransition");
      default:
        return "";
    }
  }
  function jo(l) {
    try {
      var t = "", u = null;
      do
        t += zv(l, u), u = l, l = l.return;
      while (l);
      return t;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var $f = Object.prototype.hasOwnProperty, Ff = d.unstable_scheduleCallback, Wf = d.unstable_cancelCallback, _v = d.unstable_shouldYield, Ov = d.unstable_requestPaint, ft = d.unstable_now, Nv = d.unstable_getCurrentPriorityLevel, xo = d.unstable_ImmediatePriority, Go = d.unstable_UserBlockingPriority, dn = d.unstable_NormalPriority, Av = d.unstable_LowPriority, Xo = d.unstable_IdlePriority, Mv = d.log, Dv = d.unstable_setDisableYieldValue, de = null, it = null;
  function Tu(l) {
    if (typeof Mv == "function" && Dv(l), it && typeof it.setStrictMode == "function")
      try {
        it.setStrictMode(de, l);
      } catch {
      }
  }
  var ct = Math.clz32 ? Math.clz32 : Rv, Cv = Math.log, Uv = Math.LN2;
  function Rv(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (Cv(l) / Uv | 0) | 0;
  }
  var vn = 256, yn = 262144, mn = 4194304;
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
  function hn(l, t, u) {
    var a = l.pendingLanes;
    if (a === 0) return 0;
    var e = 0, n = l.suspendedLanes, f = l.pingedLanes;
    l = l.warmLanes;
    var i = a & 134217727;
    return i !== 0 ? (a = i & ~n, a !== 0 ? e = Wu(a) : (f &= i, f !== 0 ? e = Wu(f) : u || (u = i & ~l, u !== 0 && (e = Wu(u))))) : (i = a & ~n, i !== 0 ? e = Wu(i) : f !== 0 ? e = Wu(f) : u || (u = a & ~l, u !== 0 && (e = Wu(u)))), e === 0 ? 0 : t !== 0 && t !== e && (t & n) === 0 && (n = e & -e, u = t & -t, n >= u || n === 32 && (u & 4194048) !== 0) ? t : e;
  }
  function ve(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function Qo(l, t) {
    (t & 8) !== 0 && (t |= t & 32);
    var u = l.entangledLanes;
    if (u !== 0)
      for (l = l.entanglements, u &= t; 0 < u; ) {
        var a = 31 - ct(u), e = 1 << a;
        t |= l[a], u &= ~e;
      }
    return t;
  }
  function pv(l, t) {
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
  function Zo() {
    var l = mn;
    return mn <<= 1, (mn & 62914560) === 0 && (mn = 4194304), l;
  }
  function If(l) {
    for (var t = [], u = 0; 31 > u; u++) t.push(l);
    return t;
  }
  function ye(l, t) {
    l.pendingLanes |= t, t !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function Hv(l, t, u, a, e, n) {
    var f = l.pendingLanes;
    l.pendingLanes = u, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= u, l.entangledLanes &= u, l.errorRecoveryDisabledLanes &= u, l.shellSuspendCounter = 0;
    var i = l.entanglements, c = l.expirationTimes, m = l.hiddenUpdates;
    for (u = f & ~u; 0 < u; ) {
      var S = 31 - ct(u), z = 1 << S;
      i[S] = 0, c[S] = -1;
      var v = m[S];
      if (v !== null)
        for (m[S] = null, S = 0; S < v.length; S++) {
          var g = v[S];
          g !== null && (g.lane &= -536870913);
        }
      u &= ~z;
    }
    a !== 0 && Vo(l, a, 0), n !== 0 && e === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(f & ~t));
  }
  function Vo(l, t, u) {
    l.pendingLanes |= t, l.suspendedLanes &= ~t;
    var a = 31 - ct(t);
    l.entangledLanes |= t, l.entanglements[a] = l.entanglements[a] | 1073741824 | u & 261930;
  }
  function Lo(l, t) {
    var u = l.entangledLanes |= t;
    for (l = l.entanglements; u; ) {
      var a = 31 - ct(u), e = 1 << a;
      e & t | l[a] & t && (l[a] |= t), u &= ~e;
    }
  }
  function Ko(l, t) {
    var u = t & -t;
    return u = (u & 42) !== 0 ? 1 : kf(u), (u & (l.suspendedLanes | t)) !== 0 ? 0 : u;
  }
  function kf(l) {
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
  function Pf(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Jo() {
    var l = Z.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : Pd(l.type));
  }
  function wo(l, t) {
    var u = Z.p;
    try {
      return Z.p = l, t();
    } finally {
      Z.p = u;
    }
  }
  var tu = Math.random().toString(36).slice(2), Gl = "__reactFiber$" + tu, Il = "__reactProps$" + tu, Ea = "__reactContainer$" + tu, $o = "__reactEvents$" + tu, Bv = "__reactListeners$" + tu, Yv = "__reactHandles$" + tu, Fo = "__reactResources$" + tu, me = "__reactMarker$" + tu, gn = "__reactLoad$" + tu;
  function Sn(l) {
    delete l[Gl], delete l[Il], delete l[Bv], delete l[Yv];
  }
  function Iu(l) {
    var t;
    if (t = l[Gl]) return t;
    for (var u = l.parentNode; u; ) {
      if (t = u[Ea] || u[Gl]) {
        if (u = t.alternate, t.child !== null || u !== null && u.child !== null)
          for (l = Hd(l); l !== null; ) {
            if (u = l[Gl]) return u;
            l = Hd(l);
          }
        return t;
      }
      l = u, u = l.parentNode;
    }
    return null;
  }
  function za(l) {
    if (l = l[Gl] || l[Ea]) {
      var t = l.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return l;
    }
    return null;
  }
  function he(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(r(33));
  }
  function _a(l) {
    var t = l[Fo];
    return t || (t = l[Fo] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function Hl(l) {
    l[me] = !0;
  }
  function Wo(l) {
    l[gn] = void 0;
  }
  var Io = /* @__PURE__ */ new Set(), ko = {};
  function ku(l, t) {
    Oa(l, t), Oa(l + "Capture", t);
  }
  function Oa(l, t) {
    for (ko[l] = t, l = 0; l < t.length; l++)
      Io.add(t[l]);
  }
  var qv = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Po = {}, lr = {};
  function jv(l) {
    return $f.call(lr, l) ? !0 : $f.call(Po, l) ? !1 : qv.test(l) ? lr[l] = !0 : (Po[l] = !0, !1);
  }
  var fl = !1;
  function tr() {
    var l = fl;
    return fl = !1, l;
  }
  function Tn(l, t, u) {
    if (jv(t))
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
  function bn(l, t, u) {
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
  function ur(l) {
    var t = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function xv(l, t, u) {
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
  function li(l) {
    if (!l._valueTracker) {
      var t = ur(l) ? "checked" : "value";
      l._valueTracker = xv(
        l,
        t,
        "" + l[t]
      );
    }
  }
  function ar(l) {
    if (!l) return !1;
    var t = l._valueTracker;
    if (!t) return !0;
    var u = t.getValue(), a = "";
    return l && (a = ur(l) ? l.checked ? "true" : "false" : l.value), l = a, l !== u ? (t.setValue(l), !0) : !1;
  }
  var Gv = /[\n"\\]/g;
  function Et(l) {
    return l.replace(
      Gv,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function ti(l, t, u, a, e, n, f, i) {
    l.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? l.type = f : l.removeAttribute("type"), t != null ? f === "number" ? (t === 0 && l.value === "" || l.value != t) && (l.value = "" + ot(t)) : l.value !== "" + ot(t) && (l.value = "" + ot(t)) : f !== "submit" && f !== "reset" || l.removeAttribute("value"), t != null ? f === "number" && l.value == t ? ui(l, ot(l.value)) : ui(l, ot(t)) : u != null ? ui(l, ot(u)) : a != null && l.removeAttribute("value"), e == null && n != null && (l.defaultChecked = !!n), e != null && (l.checked = e && typeof e != "function" && typeof e != "symbol"), i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? l.name = "" + ot(i) : l.removeAttribute("name");
  }
  function er(l, t, u, a, e, n, f, i) {
    if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (l.type = n), t != null || u != null) {
      if (!(n !== "submit" && n !== "reset" || t != null)) {
        li(l);
        return;
      }
      u = u != null ? "" + ot(u) : "", t = t != null ? "" + ot(t) : u, i || t === l.value || (l.value = t), l.defaultValue = t;
    }
    a = a ?? e, a = typeof a != "function" && typeof a != "symbol" && !!a, l.checked = i ? l.checked : !!a, l.defaultChecked = !!a, f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (l.name = f), li(l);
  }
  function ui(l, t) {
    l.defaultValue !== "" + t && (l.defaultValue = "" + t);
  }
  function Na(l, t, u, a) {
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
  function nr(l, t, u) {
    if (t != null && (t = "" + ot(t), t !== l.value && (l.value = t), u == null)) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = u != null ? "" + ot(u) : "";
  }
  function fr(l, t, u, a) {
    if (t == null) {
      if (a != null) {
        if (u != null) throw Error(r(92));
        if (cl(a)) {
          if (1 < a.length) throw Error(r(93));
          a = a[0];
        }
        u = a;
      }
      u == null && (u = ""), t = u;
    }
    u = ot(t), l.defaultValue = u, a = l.textContent, a === u && a !== "" && a !== null && (l.value = a), li(l);
  }
  function Aa(l, t) {
    if (t) {
      var u = l.firstChild;
      if (u && u === l.lastChild && u.nodeType === 3) {
        u.nodeValue = t;
        return;
      }
    }
    l.textContent = t;
  }
  var Xv = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function ir(l, t, u) {
    var a = t.indexOf("--") === 0;
    u == null || typeof u == "boolean" || u === "" ? a ? l.setProperty(t, "") : t === "float" ? l.cssFloat = "" : l[t] = "" : a ? l.setProperty(t, u) : typeof u != "number" || u === 0 || Xv.has(t) ? t === "float" ? l.cssFloat = u : l[t] = ("" + u).trim() : l[t] = u + "px";
  }
  function cr(l, t, u) {
    if (t != null && typeof t != "object")
      throw Error(r(62));
    if (l = l.style, u != null) {
      for (var a in u)
        !u.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? l.setProperty(a, "") : a === "float" ? l.cssFloat = "" : l[a] = "", fl = !0);
      for (var e in t)
        a = t[e], t.hasOwnProperty(e) && u[e] !== a && (ir(l, e, a), fl = !0);
    } else
      for (var n in t)
        t.hasOwnProperty(n) && ir(l, n, t[n]);
  }
  function ai(l) {
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
  var Qv = /* @__PURE__ */ new Map([
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
  ]), Zv = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function En(l) {
    return Zv.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  function Zt() {
  }
  var ei = null;
  function ni(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var Ma = null, Da = null;
  function or(l) {
    var t = za(l);
    if (t && (l = t.stateNode)) {
      var u = l[Il] || null;
      l: switch (l = t.stateNode, t.type) {
        case "input":
          if (ti(
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
              var a = u[t];
              if (a !== l && a.form === l.form) {
                var e = a[Il] || null;
                if (!e) throw Error(r(90));
                ti(
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
              a = u[t], a.form === l.form && ar(a);
          }
          break l;
        case "textarea":
          nr(l, u.value, u.defaultValue);
          break l;
        case "select":
          t = u.value, t != null && Na(l, !!u.multiple, t, !1);
      }
    }
  }
  var fi = !1;
  function rr(l, t, u) {
    if (fi) return l(t, u);
    fi = !0;
    try {
      var a = l(t);
      return a;
    } finally {
      if (fi = !1, (Ma !== null || Da !== null) && (zf(), Ma && (t = Ma, l = Da, Da = Ma = null, or(t), l)))
        for (t = 0; t < l.length; t++) or(l[t]);
    }
  }
  function ge(l, t) {
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
        r(231, t, typeof u)
      );
    return u;
  }
  var au = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ii = !1;
  if (au)
    try {
      var Se = {};
      Object.defineProperty(Se, "passive", {
        get: function() {
          ii = !0;
        }
      }), window.addEventListener("test", Se, Se), window.removeEventListener("test", Se, Se);
    } catch {
      ii = !1;
    }
  var bu = null, ci = null, zn = null;
  function sr() {
    if (zn) return zn;
    var l, t = ci, u = t.length, a, e = "value" in bu ? bu.value : bu.textContent, n = e.length;
    for (l = 0; l < u && t[l] === e[l]; l++) ;
    var f = u - l;
    for (a = 1; a <= f && t[u - a] === e[n - a]; a++) ;
    return zn = e.slice(l, 1 < a ? 1 - a : void 0);
  }
  function _n(l) {
    var t = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && t === 13 && (l = 13)) : l = t, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function On() {
    return !0;
  }
  function dr() {
    return !1;
  }
  function wl(l) {
    function t(u, a, e, n, f) {
      this._reactName = u, this._targetInst = e, this.type = a, this.nativeEvent = n, this.target = f, this.currentTarget = null;
      for (var i in l)
        l.hasOwnProperty(i) && (u = l[i], this[i] = u ? u(n) : n[i]);
      return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1) ? On : dr, this.isPropagationStopped = dr, this;
    }
    return F(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var u = this.nativeEvent;
        u && (u.preventDefault ? u.preventDefault() : typeof u.returnValue != "unknown" && (u.returnValue = !1), this.isDefaultPrevented = On);
      },
      stopPropagation: function() {
        var u = this.nativeEvent;
        u && (u.stopPropagation ? u.stopPropagation() : typeof u.cancelBubble != "unknown" && (u.cancelBubble = !0), this.isPropagationStopped = On);
      },
      persist: function() {
      },
      isPersistent: On
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
  }, Nn = wl(Eu), Te = F({}, Eu, { view: 0, detail: 0 }), Vv = wl(Te), oi, ri, be, An = F({}, Te, {
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
    getModifierState: di,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== be && (be && l.type === "mousemove" ? (oi = l.screenX - be.screenX, ri = l.screenY - be.screenY) : ri = oi = 0, be = l), oi);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : ri;
    }
  }), vr = wl(An), Lv = F({}, An, { dataTransfer: 0 }), Kv = wl(Lv), Jv = F({}, Te, { relatedTarget: 0 }), si = wl(Jv), wv = F({}, Eu, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), $v = wl(wv), Fv = F({}, Eu, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), Wv = wl(Fv), Iv = F({}, Eu, { data: 0 }), yr = wl(Iv), kv = {
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
  }, Pv = {
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
  }, ly = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function ty(l) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(l) : (l = ly[l]) ? !!t[l] : !1;
  }
  function di() {
    return ty;
  }
  var uy = F({}, Te, {
    key: function(l) {
      if (l.key) {
        var t = kv[l.key] || l.key;
        if (t !== "Unidentified") return t;
      }
      return l.type === "keypress" ? (l = _n(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? Pv[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: di,
    charCode: function(l) {
      return l.type === "keypress" ? _n(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? _n(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), ay = wl(uy), ey = F({}, An, {
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
  }), mr = wl(ey), ny = F({}, Eu, { submitter: 0 }), fy = wl(ny), iy = F({}, Te, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: di
  }), cy = wl(iy), oy = F({}, Eu, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), ry = wl(oy), sy = F({}, An, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), dy = wl(sy), vy = F({}, Eu, {
    newState: 0,
    oldState: 0,
    source: 0
  }), yy = wl(vy), my = [9, 13, 27, 32], vi = au && "CompositionEvent" in window, Ee = null;
  au && "documentMode" in document && (Ee = document.documentMode);
  var hy = au && "TextEvent" in window && !Ee, hr = au && (!vi || Ee && 8 < Ee && 11 >= Ee), gr = " ", Sr = !1;
  function Tr(l, t) {
    switch (l) {
      case "keyup":
        return my.indexOf(t.keyCode) !== -1;
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
  function br(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var Ca = !1;
  function gy(l, t) {
    switch (l) {
      case "compositionend":
        return br(t);
      case "keypress":
        return t.which !== 32 ? null : (Sr = !0, gr);
      case "textInput":
        return l = t.data, l === gr && Sr ? null : l;
      default:
        return null;
    }
  }
  function Sy(l, t) {
    if (Ca)
      return l === "compositionend" || !vi && Tr(l, t) ? (l = sr(), zn = ci = bu = null, Ca = !1, l) : null;
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
        return hr && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Ty = {
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
  function Er(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!Ty[l.type] : t === "textarea";
  }
  function zr(l, t, u, a) {
    Ma ? Da ? Da.push(a) : Da = [a] : Ma = a, t = Df(t, "onChange"), 0 < t.length && (u = new Nn(
      "onChange",
      "change",
      null,
      u,
      a
    ), l.push({ event: u, listeners: t }));
  }
  var ze = null, _e = null;
  function by(l) {
    od(l, 0);
  }
  function Mn(l) {
    var t = he(l);
    if (ar(t)) return l;
  }
  function _r(l, t) {
    if (l === "change") return t;
  }
  var Or = !1;
  if (au) {
    var yi;
    if (au) {
      var mi = "oninput" in document;
      if (!mi) {
        var Nr = document.createElement("div");
        Nr.setAttribute("oninput", "return;"), mi = typeof Nr.oninput == "function";
      }
      yi = mi;
    } else yi = !1;
    Or = yi && (!document.documentMode || 9 < document.documentMode);
  }
  function Ar() {
    ze && (ze.detachEvent("onpropertychange", Mr), _e = ze = null);
  }
  function Mr(l) {
    if (l.propertyName === "value" && Mn(_e)) {
      var t = [];
      zr(
        t,
        _e,
        l,
        ni(l)
      ), rr(by, t);
    }
  }
  function Ey(l, t, u) {
    l === "focusin" ? (Ar(), ze = t, _e = u, ze.attachEvent("onpropertychange", Mr)) : l === "focusout" && Ar();
  }
  function zy(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return Mn(_e);
  }
  function _y(l, t) {
    if (l === "click") return Mn(t);
  }
  function Oy(l, t) {
    if (l === "input" || l === "change")
      return Mn(t);
  }
  function Ny(l, t) {
    return l === t && (l !== 0 || 1 / l === 1 / t) || l !== l && t !== t;
  }
  var rt = typeof Object.is == "function" ? Object.is : Ny;
  function Oe(l, t) {
    if (rt(l, t)) return !0;
    if (typeof l != "object" || l === null || typeof t != "object" || t === null)
      return !1;
    var u = Object.keys(l), a = Object.keys(t);
    if (u.length !== a.length) return !1;
    for (a = 0; a < u.length; a++) {
      var e = u[a];
      if (!$f.call(t, e) || !rt(l[e], t[e]))
        return !1;
    }
    return !0;
  }
  function hi(l) {
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
  function Cr(l, t) {
    var u = Dr(l);
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
      u = Dr(u);
    }
  }
  function Ur(l, t) {
    return l && t ? l === t ? !0 : l && l.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Ur(l, t.parentNode) : "contains" in l ? l.contains(t) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Rr(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var t = hi(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var u = typeof t.contentWindow.location.href == "string";
      } catch {
        u = !1;
      }
      if (u) l = t.contentWindow;
      else break;
      t = hi(l.document);
    }
    return t;
  }
  function gi(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t && (t === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || t === "textarea" || l.contentEditable === "true");
  }
  var Ay = au && "documentMode" in document && 11 >= document.documentMode, Ua = null, Si = null, Ne = null, Ti = !1;
  function pr(l, t, u) {
    var a = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    Ti || Ua == null || Ua !== hi(a) || (a = Ua, "selectionStart" in a && gi(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), Ne && Oe(Ne, a) || (Ne = a, a = Df(Si, "onSelect"), 0 < a.length && (t = new Nn(
      "onSelect",
      "select",
      null,
      t,
      u
    ), l.push({ event: t, listeners: a }), t.target = Ua)));
  }
  function Pu(l, t) {
    var u = {};
    return u[l.toLowerCase()] = t.toLowerCase(), u["Webkit" + l] = "webkit" + t, u["Moz" + l] = "moz" + t, u;
  }
  var Ra = {
    animationend: Pu("Animation", "AnimationEnd"),
    animationiteration: Pu("Animation", "AnimationIteration"),
    animationstart: Pu("Animation", "AnimationStart"),
    transitionrun: Pu("Transition", "TransitionRun"),
    transitionstart: Pu("Transition", "TransitionStart"),
    transitioncancel: Pu("Transition", "TransitionCancel"),
    transitionend: Pu("Transition", "TransitionEnd")
  }, bi = {}, Hr = {};
  au && (Hr = document.createElement("div").style, "AnimationEvent" in window || (delete Ra.animationend.animation, delete Ra.animationiteration.animation, delete Ra.animationstart.animation), "TransitionEvent" in window || delete Ra.transitionend.transition);
  function la(l) {
    if (bi[l]) return bi[l];
    if (!Ra[l]) return l;
    var t = Ra[l], u;
    for (u in t)
      if (t.hasOwnProperty(u) && u in Hr)
        return bi[l] = t[u];
    return l;
  }
  var Br = la("animationend"), Yr = la("animationiteration"), qr = la("animationstart"), My = la("transitionrun"), Dy = la("transitionstart"), Cy = la("transitioncancel"), jr = la("transitionend"), xr = /* @__PURE__ */ new Map(), Ei = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Ei.push("scrollEnd");
  function Rt(l, t) {
    xr.set(l, t), ku(t, [l]);
  }
  var Uy = 0;
  function eu(l, t) {
    if (l.name != null && l.name !== "auto") return l.name;
    if (t.autoName !== null) return t.autoName;
    l = Yt.identifierPrefix;
    var u = Uy++;
    return l = "_" + l + "t_" + u.toString(32) + "_", t.autoName = l;
  }
  function Gr(l) {
    if (l == null || typeof l == "string")
      return l;
    var t = null, u = Ia;
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
    return l = Gr(l), t = Gr(t), t == null ? l === "auto" ? null : l : t === "auto" ? null : t;
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
  }, zt = [], pa = 0, zi = 0;
  function Cn() {
    for (var l = pa, t = zi = pa = 0; t < l; ) {
      var u = zt[t];
      zt[t++] = null;
      var a = zt[t];
      zt[t++] = null;
      var e = zt[t];
      zt[t++] = null;
      var n = zt[t];
      if (zt[t++] = null, a !== null && e !== null) {
        var f = a.pending;
        f === null ? e.next = e : (e.next = f.next, f.next = e), a.pending = e;
      }
      n !== 0 && Xr(u, e, n);
    }
  }
  function Un(l, t, u, a) {
    zt[pa++] = l, zt[pa++] = t, zt[pa++] = u, zt[pa++] = a, zi |= a, l.lanes |= a, l = l.alternate, l !== null && (l.lanes |= a);
  }
  function _i(l, t, u, a) {
    return Un(l, t, u, a), Rn(l);
  }
  function ta(l, t) {
    return Un(l, null, null, t), Rn(l);
  }
  function Xr(l, t, u) {
    l.lanes |= u;
    var a = l.alternate;
    a !== null && (a.lanes |= u);
    for (var e = !1, n = l.return; n !== null; )
      n.childLanes |= u, a = n.alternate, a !== null && (a.childLanes |= u), n.tag === 22 && (l = n.stateNode, l === null || l._visibility & 1 || (e = !0)), l = n, n = n.return;
    return l.tag === 3 ? (n = l.stateNode, e && t !== null && (e = 31 - ct(u), l = n.hiddenUpdates, a = l[e], a === null ? l[e] = [t] : a.push(t), t.lane = u | 536870912), n) : null;
  }
  function Rn(l) {
    if (50 < we)
      throw we = 0, Ef = null, Error(r(185));
    for (var t = l.return; t !== null; )
      l = t, t = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var Ha = {};
  function Ry(l, t, u, a) {
    this.tag = l, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function kl(l, t, u, a) {
    return new Ry(l, t, u, a);
  }
  function Oi(l) {
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
  function Qr(l, t) {
    l.flags &= 1206910978;
    var u = l.alternate;
    return u === null ? (l.childLanes = 0, l.lanes = t, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = u.childLanes, l.lanes = u.lanes, l.child = u.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = u.memoizedProps, l.memoizedState = u.memoizedState, l.updateQueue = u.updateQueue, l.type = u.type, t = u.dependencies, l.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), l;
  }
  function pn(l, t, u, a, e, n) {
    var f = 0;
    if (a = l, typeof a == "function") Oi(a) && (f = 1);
    else if (typeof a == "string")
      f = n1(
        l,
        u,
        Qt.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      l: switch (a) {
        case Ut:
          return l = kl(31, u, t, e), l.elementType = Ut, l.lanes = n, l;
        case bt:
          return ua(u.children, e, n, t);
        case nt:
          f = 8, e |= 24;
          break;
        case hu:
          return l = kl(12, u, t, e | 2), l.elementType = hu, l.lanes = n, l;
        case X:
          return l = kl(13, u, t, e), l.elementType = X, l.lanes = n, l;
        case Q:
          return l = kl(19, u, t, e), l.elementType = Q, l.lanes = n, l;
        case Pt:
        case s:
          return l = e | 32, l = kl(30, u, t, l), l.elementType = s, l.lanes = n, l.stateNode = {
            autoName: null,
            paired: null,
            clones: null,
            ref: null
          }, l;
        default:
          if (typeof a == "object" && a !== null)
            switch (a.$$typeof) {
              case pl:
                f = 10;
                break l;
              case $u:
                f = 9;
                break l;
              case M:
                f = 11;
                break l;
              case hl:
                f = 14;
                break l;
              case rl:
                f = 16, a = null;
                break l;
            }
          f = 29, u = Error(
            r(130, l === null ? "null" : typeof l, "")
          ), a = null;
      }
    return t = kl(f, u, t, e), t.elementType = l, t.type = a, t.lanes = n, t;
  }
  function ua(l, t, u, a) {
    return l = kl(7, l, a, t), l.lanes = u, l;
  }
  function Ni(l, t, u) {
    return l = kl(6, l, null, t), l.lanes = u, l;
  }
  function Zr(l) {
    var t = kl(18, null, null, 0);
    return t.stateNode = l, t;
  }
  function Ai(l, t, u) {
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
  var Vr = /* @__PURE__ */ new WeakMap();
  function _t(l, t) {
    if (typeof l == "object" && l !== null) {
      var u = Vr.get(l);
      return u !== void 0 ? u : (t = {
        value: l,
        source: t,
        stack: jo(t)
      }, Vr.set(l, t), t);
    }
    return {
      value: l,
      source: t,
      stack: jo(t)
    };
  }
  var Ba = [], Ya = 0, Hn = null, Ae = 0, Ot = [], Nt = 0, zu = null, Vt = 1, Lt = "";
  function iu(l, t) {
    Ba[Ya++] = Ae, Ba[Ya++] = Hn, Hn = l, Ae = t;
  }
  function Lr(l, t, u) {
    Ot[Nt++] = Vt, Ot[Nt++] = Lt, Ot[Nt++] = zu, zu = l;
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
  function Bn(l) {
    l.return !== null && (iu(l, 1), Lr(l, 1, 0));
  }
  function Mi(l) {
    for (; l === Hn; )
      Hn = Ba[--Ya], Ba[Ya] = null, Ae = Ba[--Ya], Ba[Ya] = null;
    for (; l === zu; )
      zu = Ot[--Nt], Ot[Nt] = null, Lt = Ot[--Nt], Ot[Nt] = null, Vt = Ot[--Nt], Ot[Nt] = null;
  }
  function Kr(l, t) {
    Ot[Nt++] = Vt, Ot[Nt++] = Lt, Ot[Nt++] = zu, Vt = t.id, Lt = t.overflow, zu = l;
  }
  var Bl = null, Tl = null, $ = !1, _u = null, At = !1, Di = Error(r(519));
  function Ou(l) {
    var t = Error(
      r(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Me(_t(t, l)), Di;
  }
  function Jr(l) {
    var t = l.stateNode, u = l.type, a = l.memoizedProps;
    switch (t[Gl] = l, t[Il] = a, u) {
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
        for (u = 0; u < Fe.length; u++)
          I(Fe[u], t);
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
        I("invalid", t), er(
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
        I("invalid", t);
        break;
      case "textarea":
        I("invalid", t), fr(t, a.value, a.defaultValue, a.children);
    }
    u = a.children, typeof u != "string" && typeof u != "number" && typeof u != "bigint" || t.textContent === "" + u || a.suppressHydrationWarning === !0 || vd(t.textContent, u) ? (a.popover != null && (I("beforetoggle", t), I("toggle", t)), a.onScroll != null && I("scroll", t), a.onScrollEnd != null && I("scrollend", t), a.onClick != null && (t.onclick = Zt), t = !0) : t = !1, t || Ou(l, !0);
  }
  function Yn(l) {
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
  function qa(l) {
    if (l !== Bl) return !1;
    if (!$) return Yn(l), $ = !0, !1;
    var t = l.tag, u;
    if ((u = t !== 3 && t !== 27) && ((u = t === 5) && (u = l.type, u = !(u !== "form" && u !== "button") || eo(l.type, l.memoizedProps)), u = !u), u && Tl && Ou(l), Yn(l), t === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(r(317));
      Tl = pd(l);
    } else if (t === 31) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(r(317));
      Tl = pd(l);
    } else
      t === 27 ? (t = Tl, Xu(l.type) ? (l = yo, yo = null, Tl = l) : Tl = t) : Tl = Bl ? Dt(l.stateNode.nextSibling) : null;
    return !0;
  }
  function aa() {
    Tl = Bl = null, $ = !1;
  }
  function Ci() {
    var l = _u;
    return l !== null && (tt === null ? tt = l : tt.push.apply(
      tt,
      l
    ), _u = null), l;
  }
  function Me(l) {
    _u === null ? _u = [l] : _u.push(l);
  }
  var Ui = Xt(null), ea = null, cu = null;
  function Nu(l, t, u) {
    Sl(Ui, t._currentValue), t._currentValue = u;
  }
  function ou(l) {
    l._currentValue = Ui.current, xl(Ui);
  }
  function qn(l, t, u) {
    for (; l !== null; ) {
      var a = l.alternate;
      if ((l.childLanes & t) !== t ? (l.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), l === u) break;
      l = l.return;
    }
  }
  function Ri(l, t, u, a) {
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
              n.lanes |= u, i = n.alternate, i !== null && (i.lanes |= u), qn(
                n.return,
                u,
                l
              ), a || (f = null);
              break l;
            }
          n = i.next;
        }
      } else if (e.tag === 18) {
        if (f = e.return, f === null) throw Error(r(341));
        f.lanes |= u, n = f.alternate, n !== null && (n.lanes |= u), qn(f, u, l), f = null;
      } else
        e.tag === 13 && e.memoizedState !== null && e.memoizedState.dehydrated === null ? (e.lanes |= u, f = e.alternate, f !== null && (f.lanes |= u), qn(
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
  function na(l, t, u, a) {
    l = null;
    for (var e = t, n = !1; e !== null; ) {
      if (!n) {
        if ((e.flags & 524288) !== 0) n = !0;
        else if ((e.flags & 262144) !== 0) break;
      }
      if (e.tag === 10) {
        var f = e.alternate;
        if (f === null) throw Error(r(387));
        if (f = f.memoizedProps, f !== null) {
          var i = e.type;
          rt(e.pendingProps.value, f.value) || (l !== null ? l.push(i) : l = [i]);
        }
      } else if (e === on.current) {
        if (f = e.alternate, f === null) throw Error(r(387));
        f.memoizedState.memoizedState !== e.memoizedState.memoizedState && (l !== null ? l.push(ie) : l = [ie]);
      }
      e = e.return;
    }
    return l !== null && Ri(
      t,
      l,
      u,
      a
    ), t.flags |= 262144, l !== null;
  }
  function jn(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!rt(
        l.context._currentValue,
        l.memoizedValue
      ))
        return !0;
      l = l.next;
    }
    return !1;
  }
  function fa(l) {
    ea = l, cu = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function Xl(l) {
    return wr(ea, l);
  }
  function xn(l, t) {
    return ea === null && fa(l), wr(l, t);
  }
  function wr(l, t) {
    var u = t._currentValue;
    if (t = { context: t, memoizedValue: u, next: null }, cu === null) {
      if (l === null) throw Error(r(308));
      cu = t, l.dependencies = { lanes: 0, firstContext: t }, l.flags |= 524288;
    } else cu = cu.next = t;
    return u;
  }
  var py = typeof AbortController < "u" ? AbortController : function() {
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
  }, Hy = d.unstable_scheduleCallback, By = d.unstable_NormalPriority, Ml = {
    $$typeof: pl,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function pi() {
    return {
      controller: new py(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function De(l) {
    l.refCount--, l.refCount === 0 && Hy(By, function() {
      l.controller.abort();
    });
  }
  function $r(l, t) {
    if ((l.pendingLanes & 4194048) !== 0) {
      var u = l.transitionTypes;
      for (u === null && (u = l.transitionTypes = []), l = 0; l < t.length; l++) {
        var a = t[l];
        u.indexOf(a) === -1 && u.push(a);
      }
    }
  }
  var Ce = null;
  function Yy(l) {
    var t = l.transitionTypes;
    return l.transitionTypes = null, t;
  }
  var Ue = null, Hi = 0, ia = 0, ja = null;
  function qy(l, t) {
    if (Ue === null) {
      var u = Ue = [];
      Hi = 0, ia = Fc(), ja = {
        status: "pending",
        value: void 0,
        then: function(a) {
          u.push(a);
        }
      };
    }
    return Hi++, t.then(Fr, Fr), t;
  }
  function Fr() {
    if (--Hi === 0 && (Ce = null, Ue !== null)) {
      ja !== null && (ja.status = "fulfilled");
      var l = Ue;
      Ue = null, ia = 0, ja = null;
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function jy(l, t) {
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
  var Wr = R.S;
  R.S = function(l, t) {
    if (Zs = ft(), typeof t == "object" && t !== null && typeof t.then == "function" && qy(l, t), Ce !== null)
      for (var u = te; u !== null; )
        $r(u, Ce), u = u.next;
    if (u = l.types, u !== null) {
      for (var a = te; a !== null; )
        $r(a, u), a = a.next;
      if (ia !== 0) {
        a = Ce, a === null && (a = Ce = []);
        for (var e = 0; e < u.length; e++) {
          var n = u[e];
          a.indexOf(n) === -1 && a.push(n);
        }
      }
    }
    Wr !== null && Wr(l, t);
  };
  var ca = Xt(null);
  function Bi() {
    var l = ca.current;
    return l !== null ? l : gl.pooledCache;
  }
  function Gn(l, t) {
    t === null ? Sl(ca, ca.current) : Sl(ca, t.pool);
  }
  function Ir() {
    var l = Bi();
    return l === null ? null : { parent: Ml._currentValue, pool: l };
  }
  var xa = Error(r(460)), Yi = Error(r(474)), Xn = Error(r(542)), Qn = { then: function() {
  } };
  function kr(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function Pr(l, t, u) {
    switch (u = l[u], u === void 0 ? l.push(t) : u !== t && (t.then(Zt, Zt), t = u), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw l = t.reason, t0(l), l === void 0 && !("reason" in t) ? Error(r(600)) : l;
      default:
        if (typeof t.status == "string") t.then(Zt, Zt);
        else {
          if (l = gl, l !== null && 100 < l.shellSuspendCounter)
            throw Error(r(482));
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
            throw l = t.reason, t0(l), l;
        }
        throw ra = t, xa;
    }
  }
  function oa(l) {
    try {
      var t = l._init;
      return t(l._payload);
    } catch (u) {
      throw u !== null && typeof u == "object" && typeof u.then == "function" ? (ra = u, xa) : u;
    }
  }
  var ra = null;
  function l0() {
    if (ra === null) throw Error(r(459));
    var l = ra;
    return ra = null, l;
  }
  function t0(l) {
    if (l === xa || l === Xn)
      throw Error(r(483));
  }
  var Ga = null, Re = 0;
  function Zn(l) {
    var t = Re;
    return Re += 1, Ga === null && (Ga = []), Pr(Ga, l, t);
  }
  function Au(l, t) {
    t = t.props.ref, l.ref = t !== void 0 ? t : null;
  }
  function Vn(l, t) {
    throw t.$$typeof === il ? Error(r(525)) : (l = Object.prototype.toString.call(t), Error(
      r(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : l
      )
    ));
  }
  function u0(l) {
    function t(y, o) {
      if (l) {
        var h = y.deletions;
        h === null ? (y.deletions = [o], y.flags |= 16) : h.push(o);
      }
    }
    function u(y, o) {
      if (!l) return null;
      for (; o !== null; )
        t(y, o), o = o.sibling;
      return null;
    }
    function a(y) {
      for (var o = /* @__PURE__ */ new Map(); y !== null; )
        y.key === null ? o.set(y.index, y) : o.set(y.key, y), y = y.sibling;
      return o;
    }
    function e(y, o) {
      return y = fu(y, o), y.index = 0, y.sibling = null, y;
    }
    function n(y, o, h) {
      return y.index = h, l ? (h = y.alternate, h !== null ? (h = h.index, h < o ? (y.flags |= 2, o) : h) : (y.flags |= 134217730, o)) : (y.flags |= 1048576, o);
    }
    function f(y) {
      return l && y.alternate === null && (y.flags |= 134217730), y;
    }
    function i(y, o, h, E) {
      return o === null || o.tag !== 6 ? (o = Ni(h, y.mode, E), o.return = y, o) : (o = e(o, h), o.return = y, o);
    }
    function c(y, o, h, E) {
      var D = h.type;
      return D === bt ? (y = S(
        y,
        o,
        h.props.children,
        E,
        h.key
      ), Au(y, h), y) : o !== null && (o.elementType === D || typeof D == "object" && D !== null && D.$$typeof === rl && oa(D) === o.type) ? (o = e(o, h.props), Au(o, h), o.return = y, o) : (o = pn(
        h.type,
        h.key,
        h.props,
        null,
        y.mode,
        E
      ), Au(o, h), o.return = y, o);
    }
    function m(y, o, h, E) {
      return o === null || o.tag !== 4 || o.stateNode.containerInfo !== h.containerInfo || o.stateNode.implementation !== h.implementation ? (o = Ai(h, y.mode, E), o.return = y, o) : (o = e(o, h.children || []), o.return = y, o);
    }
    function S(y, o, h, E, D) {
      return o === null || o.tag !== 7 ? (o = ua(
        h,
        y.mode,
        E,
        D
      ), o.return = y, o) : (o = e(o, h), o.return = y, o);
    }
    function z(y, o, h) {
      if (typeof o == "string" && o !== "" || typeof o == "number" || typeof o == "bigint")
        return o = Ni(
          "" + o,
          y.mode,
          h
        ), o.return = y, o;
      if (typeof o == "object" && o !== null) {
        switch (o.$$typeof) {
          case Gt:
            return h = pn(
              o.type,
              o.key,
              o.props,
              null,
              y.mode,
              h
            ), Au(h, o), h.return = y, h;
          case Tt:
            return o = Ai(
              o,
              y.mode,
              h
            ), o.return = y, o;
          case rl:
            return o = oa(o), z(y, o, h);
        }
        if (cl(o) || q(o))
          return o = ua(
            o,
            y.mode,
            h,
            null
          ), o.return = y, o;
        if (typeof o.then == "function")
          return z(y, Zn(o), h);
        if (o.$$typeof === pl)
          return z(
            y,
            xn(y, o),
            h
          );
        Vn(y, o);
      }
      return null;
    }
    function v(y, o, h, E) {
      var D = o !== null ? o.key : null;
      if (typeof h == "string" && h !== "" || typeof h == "number" || typeof h == "bigint")
        return D !== null ? null : i(y, o, "" + h, E);
      if (typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case Gt:
            return h.key === D ? c(y, o, h, E) : null;
          case Tt:
            return h.key === D ? m(y, o, h, E) : null;
          case rl:
            return h = oa(h), v(y, o, h, E);
        }
        if (cl(h) || q(h))
          return D !== null ? null : S(y, o, h, E, null);
        if (typeof h.then == "function")
          return v(
            y,
            o,
            Zn(h),
            E
          );
        if (h.$$typeof === pl)
          return v(
            y,
            o,
            xn(y, h),
            E
          );
        Vn(y, h);
      }
      return null;
    }
    function g(y, o, h, E, D) {
      if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint")
        return y = y.get(h) || null, i(o, y, "" + E, D);
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case Gt:
            return y = y.get(
              E.key === null ? h : E.key
            ) || null, c(o, y, E, D);
          case Tt:
            return y = y.get(
              E.key === null ? h : E.key
            ) || null, m(o, y, E, D);
          case rl:
            return E = oa(E), g(
              y,
              o,
              h,
              E,
              D
            );
        }
        if (cl(E) || q(E))
          return y = y.get(h) || null, S(o, y, E, D, null);
        if (typeof E.then == "function")
          return g(
            y,
            o,
            h,
            Zn(E),
            D
          );
        if (E.$$typeof === pl)
          return g(
            y,
            o,
            h,
            xn(o, E),
            D
          );
        Vn(o, E);
      }
      return null;
    }
    function N(y, o, h, E) {
      for (var D = null, P = null, H = o, G = o = 0, Ul = null; H !== null && G < h.length; G++) {
        H.index > G ? (Ul = H, H = null) : Ul = H.sibling;
        var ul = v(
          y,
          H,
          h[G],
          E
        );
        if (ul === null) {
          H === null && (H = Ul);
          break;
        }
        l && H && ul.alternate === null && t(y, H), o = n(ul, o, G), P === null ? D = ul : P.sibling = ul, P = ul, H = Ul;
      }
      if (G === h.length)
        return u(y, H), $ && iu(y, G), D;
      if (H === null) {
        for (; G < h.length; G++)
          H = z(y, h[G], E), H !== null && (o = n(
            H,
            o,
            G
          ), P === null ? D = H : P.sibling = H, P = H);
        return $ && iu(y, G), D;
      }
      for (H = a(H); G < h.length; G++)
        Ul = g(
          H,
          y,
          G,
          h[G],
          E
        ), Ul !== null && (l && (ul = Ul.alternate, ul !== null && H.delete(ul.key === null ? G : ul.key)), o = n(
          Ul,
          o,
          G
        ), P === null ? D = Ul : P.sibling = Ul, P = Ul);
      return l && H.forEach(function(Ku) {
        return t(y, Ku);
      }), $ && iu(y, G), D;
    }
    function U(y, o, h, E) {
      if (h == null) throw Error(r(151));
      for (var D = null, P = null, H = o, G = o = 0, Ul = null, ul = h.next(); H !== null && !ul.done; G++, ul = h.next()) {
        H.index > G ? (Ul = H, H = null) : Ul = H.sibling;
        var Ku = v(y, H, ul.value, E);
        if (Ku === null) {
          H === null && (H = Ul);
          break;
        }
        l && H && Ku.alternate === null && t(y, H), o = n(Ku, o, G), P === null ? D = Ku : P.sibling = Ku, P = Ku, H = Ul;
      }
      if (ul.done)
        return u(y, H), $ && iu(y, G), D;
      if (H === null) {
        for (; !ul.done; G++, ul = h.next())
          ul = z(y, ul.value, E), ul !== null && (o = n(ul, o, G), P === null ? D = ul : P.sibling = ul, P = ul);
        return $ && iu(y, G), D;
      }
      for (H = a(H); !ul.done; G++, ul = h.next())
        ul = g(H, y, G, ul.value, E), ul !== null && (l && (Ul = ul.alternate, Ul !== null && H.delete(
          Ul.key === null ? G : Ul.key
        )), o = n(ul, o, G), P === null ? D = ul : P.sibling = ul, P = ul);
      return l && H.forEach(function(g1) {
        return t(y, g1);
      }), $ && iu(y, G), D;
    }
    function J(y, o, h, E) {
      if (typeof h == "object" && h !== null && h.type === bt && h.key === null && h.props.ref === void 0 && (h = h.props.children), typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case Gt:
            l: {
              for (var D = h.key; o !== null; ) {
                if (o.key === D) {
                  if (D = h.type, D === bt) {
                    if (o.tag === 7) {
                      u(
                        y,
                        o.sibling
                      ), E = e(
                        o,
                        h.props.children
                      ), Au(E, h), E.return = y, y = E;
                      break l;
                    }
                  } else if (o.elementType === D || typeof D == "object" && D !== null && D.$$typeof === rl && oa(D) === o.type) {
                    u(
                      y,
                      o.sibling
                    ), E = e(o, h.props), Au(E, h), E.return = y, y = E;
                    break l;
                  }
                  u(y, o);
                  break;
                } else t(y, o);
                o = o.sibling;
              }
              h.type === bt ? (E = ua(
                h.props.children,
                y.mode,
                E,
                h.key
              ), Au(E, h), E.return = y, y = E) : (E = pn(
                h.type,
                h.key,
                h.props,
                null,
                y.mode,
                E
              ), Au(E, h), E.return = y, y = E);
            }
            return f(y);
          case Tt:
            l: {
              for (D = h.key; o !== null; ) {
                if (o.key === D)
                  if (o.tag === 4 && o.stateNode.containerInfo === h.containerInfo && o.stateNode.implementation === h.implementation) {
                    u(
                      y,
                      o.sibling
                    ), E = e(o, h.children || []), E.return = y, y = E;
                    break l;
                  } else {
                    u(y, o);
                    break;
                  }
                else t(y, o);
                o = o.sibling;
              }
              E = Ai(h, y.mode, E), E.return = y, y = E;
            }
            return f(y);
          case rl:
            return h = oa(h), J(
              y,
              o,
              h,
              E
            );
        }
        if (cl(h))
          return N(
            y,
            o,
            h,
            E
          );
        if (q(h)) {
          if (D = q(h), typeof D != "function") throw Error(r(150));
          return h = D.call(h), U(
            y,
            o,
            h,
            E
          );
        }
        if (typeof h.then == "function")
          return J(
            y,
            o,
            Zn(h),
            E
          );
        if (h.$$typeof === pl)
          return J(
            y,
            o,
            xn(y, h),
            E
          );
        Vn(y, h);
      }
      return typeof h == "string" && h !== "" || typeof h == "number" || typeof h == "bigint" ? (h = "" + h, o !== null && o.tag === 6 ? (u(y, o.sibling), E = e(o, h), E.return = y, y = E) : (u(y, o), E = Ni(h, y.mode, E), E.return = y, y = E), f(y)) : u(y, o);
    }
    return function(y, o, h, E) {
      try {
        Re = 0;
        var D = J(
          y,
          o,
          h,
          E
        );
        return Ga = null, D;
      } catch (H) {
        if (H === xa || H === Xn) throw H;
        var P = kl(29, H, null, y.mode);
        return P.lanes = E, P.return = y, P;
      }
    };
  }
  var sa = u0(!0), a0 = u0(!1), Mu = !1;
  function qi(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function ji(l, t) {
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
    if (a = a.shared, (ol & 2) !== 0) {
      var e = a.pending;
      return e === null ? t.next = t : (t.next = e.next, e.next = t), a.pending = t, t = Rn(l), Xr(l, null, u), t;
    }
    return Un(l, a, t, u), Rn(l);
  }
  function pe(l, t, u) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (u & 4194048) !== 0)) {
      var a = t.lanes;
      a &= l.pendingLanes, u |= a, t.lanes = u, Lo(l, u);
    }
  }
  function xi(l, t) {
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
  var Gi = !1;
  function He() {
    if (Gi) {
      var l = ja;
      if (l !== null) throw l;
    }
  }
  function Be(l, t, u, a) {
    Gi = !1;
    var e = l.updateQueue;
    Mu = !1;
    var n = e.firstBaseUpdate, f = e.lastBaseUpdate, i = e.shared.pending;
    if (i !== null) {
      e.shared.pending = null;
      var c = i, m = c.next;
      c.next = null, f === null ? n = m : f.next = m, f = c;
      var S = l.alternate;
      S !== null && (S = S.updateQueue, i = S.lastBaseUpdate, i !== f && (i === null ? S.firstBaseUpdate = m : i.next = m, S.lastBaseUpdate = c));
    }
    if (n !== null) {
      var z = e.baseState;
      f = 0, S = m = c = null, i = n;
      do {
        var v = i.lane & -536870913, g = v !== i.lane;
        if (g ? (k & v) === v : (a & v) === v) {
          v !== 0 && v === ia && (Gi = !0), S !== null && (S = S.next = {
            lane: 0,
            tag: i.tag,
            payload: i.payload,
            callback: null,
            next: null
          });
          l: {
            var N = l, U = i;
            v = t;
            var J = u;
            switch (U.tag) {
              case 1:
                if (N = U.payload, typeof N == "function") {
                  z = N.call(J, z, v);
                  break l;
                }
                z = N;
                break l;
              case 3:
                N.flags = N.flags & -65537 | 128;
              case 0:
                if (N = U.payload, v = typeof N == "function" ? N.call(J, z, v) : N, v == null) break l;
                z = F({}, z, v);
                break l;
              case 2:
                Mu = !0;
            }
          }
          v = i.callback, v !== null && (l.flags |= 64, g && (l.flags |= 8192), g = e.callbacks, g === null ? e.callbacks = [v] : g.push(v));
        } else
          g = {
            lane: v,
            tag: i.tag,
            payload: i.payload,
            callback: i.callback,
            next: null
          }, S === null ? (m = S = g, c = z) : S = S.next = g, f |= v;
        if (i = i.next, i === null) {
          if (i = e.shared.pending, i === null)
            break;
          g = i, i = g.next, g.next = null, e.lastBaseUpdate = g, e.shared.pending = null;
        }
      } while (!0);
      S === null && (c = z), e.baseState = c, e.firstBaseUpdate = m, e.lastBaseUpdate = S, n === null && (e.shared.lanes = 0), qu |= f, l.lanes = f, l.memoizedState = z;
    }
  }
  function e0(l, t) {
    if (typeof l != "function")
      throw Error(r(191, l));
    l.call(t);
  }
  function n0(l, t) {
    var u = l.callbacks;
    if (u !== null)
      for (l.callbacks = null, l = 0; l < u.length; l++)
        e0(u[l], t);
  }
  var Uu = Xt(null), Ln = Xt(0);
  function f0(l, t) {
    l = yu, Sl(Ln, l), Sl(Uu, t), yu = l | t.baseLanes;
  }
  function Xi() {
    Sl(Ln, yu), Sl(Uu, Uu.current);
  }
  function Qi() {
    yu = Ln.current, xl(Uu), xl(Ln);
  }
  var Ql = Xt(null), Jl = null;
  function Ru(l) {
    var t = l.alternate;
    Sl(Zl, Zl.current & 1), Sl(Ql, l), Jl === null && (t === null || Uu.current !== null || t.memoizedState !== null) && (Jl = l);
  }
  function Zi(l) {
    Sl(Zl, Zl.current), Sl(Ql, l), Jl === null && (Jl = l);
  }
  function i0(l) {
    l.tag === 22 ? (Sl(Zl, Zl.current), Sl(Ql, l), Jl === null && (Jl = l)) : pu();
  }
  function pu() {
    Sl(Zl, Zl.current), Sl(Ql, Ql.current);
  }
  function st(l) {
    xl(Ql), Jl === l && (Jl = null), xl(Zl);
  }
  var Zl = Xt(0);
  function Ye(l, t) {
    Sl(Ql, Ql.current), Sl(Zl, t);
  }
  function Vi(l) {
    xl(Zl), xl(Ql), Jl === l && (Jl = null);
  }
  function Kn(l) {
    for (var t = l; t !== null; ) {
      if (t.tag === 13) {
        var u = t.memoizedState;
        if (u !== null && (u = u.dehydrated, u === null || so(u) || vo(u)))
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
  var ru = 0, K = null, ml = null, Dl = null, Jn = !1, Xa = !1, da = !1, wn = 0, qe = 0, Qa = null, xy = 0;
  function Ol() {
    throw Error(r(321));
  }
  function Li(l, t) {
    if (t === null) return !1;
    for (var u = 0; u < t.length && u < l.length; u++)
      if (!rt(l[u], t[u])) return !1;
    return !0;
  }
  function Ki(l, t, u, a, e, n) {
    return ru = n, K = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, R.H = l === null || l.memoizedState === null ? L0 : K0, da = !1, n = u(a, e), da = !1, Xa && (n = o0(
      t,
      u,
      a,
      e
    )), c0(l), n;
  }
  function c0(l) {
    R.H = lf;
    var t = ml !== null && ml.next !== null;
    if (ru = 0, Dl = ml = K = null, Jn = !1, qe = 0, Qa = null, t) throw Error(r(300));
    l === null || Cl || (l = l.dependencies, l !== null && jn(l) && (Cl = !0));
  }
  function o0(l, t, u, a) {
    K = l;
    var e = 0;
    do {
      if (Xa && (Qa = null), qe = 0, Xa = !1, 25 <= e) throw Error(r(301));
      if (e += 1, Dl = ml = null, l.updateQueue != null) {
        var n = l.updateQueue;
        n.lastEffect = null, n.events = null, n.stores = null, n.memoCache != null && (n.memoCache.index = 0);
      }
      R.H = Jy, n = t(u, a);
    } while (Xa);
    return n;
  }
  function Gy() {
    var l = R.H, t = l.useState()[0];
    return t = typeof t.then == "function" ? je(t) : t, l = l.useState()[0], (ml !== null ? ml.memoizedState : null) !== l && (K.flags |= 1024), t;
  }
  function Ji() {
    var l = wn !== 0;
    return wn = 0, l;
  }
  function wi(l, t, u) {
    t.updateQueue = l.updateQueue, t.flags &= -2053, l.lanes &= ~u;
  }
  function $i(l) {
    if (Jn) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        t !== null && (t.pending = null), l = l.next;
      }
      Jn = !1;
    }
    ru = 0, Dl = ml = K = null, Xa = !1, qe = wn = 0, Qa = null;
  }
  function $l() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Dl === null ? K.memoizedState = Dl = l : Dl = Dl.next = l, Dl;
  }
  function Al() {
    if (ml === null) {
      var l = K.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = ml.next;
    var t = Dl === null ? K.memoizedState : Dl.next;
    if (t !== null)
      Dl = t, ml = l;
    else {
      if (l === null)
        throw K.alternate === null ? Error(r(467)) : Error(r(310));
      ml = l, l = {
        memoizedState: ml.memoizedState,
        baseState: ml.baseState,
        baseQueue: ml.baseQueue,
        queue: ml.queue,
        next: null
      }, Dl === null ? K.memoizedState = Dl = l : Dl = Dl.next = l;
    }
    return Dl;
  }
  function $n() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function je(l) {
    var t = qe;
    return qe += 1, Qa === null && (Qa = []), l = Pr(Qa, l, t), t = K, (Dl === null ? t.memoizedState : Dl.next) === null && (t = t.alternate, R.H = t === null || t.memoizedState === null ? L0 : K0), l;
  }
  function Fn(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return je(l);
      if (l.$$typeof === O) return;
      if (l.$$typeof === pl) return Xl(l);
    }
    throw Error(r(438, String(l)));
  }
  function Fi(l) {
    var t = null, u = K.updateQueue;
    if (u !== null && (t = u.memoCache), t == null) {
      var a = K.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (t = {
        data: a.data.map(function(e) {
          return e.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), u === null && (u = $n(), K.updateQueue = u), u.memoCache = t, u = t.data[t.index], u === void 0)
      for (u = t.data[t.index] = Array(l), a = 0; a < l; a++)
        u[a] = Fu;
    return t.index++, u;
  }
  function su(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function Wn(l) {
    var t = Al();
    return Wi(t, ml, l);
  }
  function Wi(l, t, u) {
    var a = l.queue;
    if (a === null) throw Error(r(311));
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
      var i = f = null, c = null, m = t, S = !1;
      do {
        var z = m.lane & -536870913;
        if (z !== m.lane ? (k & z) === z : (ru & z) === z) {
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
            }), z === ia && (S = !0);
          else if ((ru & v) === v) {
            m = m.next, v === ia && (S = !0);
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
            }, c === null ? (i = c = z, f = n) : c = c.next = z, K.lanes |= v, qu |= v;
          z = m.action, da && u(n, z), n = m.hasEagerState ? m.eagerState : u(n, z);
        } else
          v = {
            lane: z,
            revertLane: m.revertLane,
            gesture: m.gesture,
            action: m.action,
            hasEagerState: m.hasEagerState,
            eagerState: m.eagerState,
            next: null
          }, c === null ? (i = c = v, f = n) : c = c.next = v, K.lanes |= z, qu |= z;
        m = m.next;
      } while (m !== null && m !== t);
      if (c === null ? f = n : c.next = i, !rt(n, l.memoizedState) && (Cl = !0, S && (u = ja, u !== null)))
        throw u;
      l.memoizedState = n, l.baseState = f, l.baseQueue = c, a.lastRenderedState = n;
    }
    return e === null && (a.lanes = 0), [l.memoizedState, a.dispatch];
  }
  function Ii(l) {
    var t = Al(), u = t.queue;
    if (u === null) throw Error(r(311));
    u.lastRenderedReducer = l;
    var a = u.dispatch, e = u.pending, n = t.memoizedState;
    if (e !== null) {
      u.pending = null;
      var f = e = e.next;
      do
        n = l(n, f.action), f = f.next;
      while (f !== e);
      rt(n, t.memoizedState) || (Cl = !0), t.memoizedState = n, t.baseQueue === null && (t.baseState = n), u.lastRenderedState = n;
    }
    return [n, a];
  }
  function r0(l, t, u) {
    var a = K, e = Al(), n = $;
    if (n) {
      if (u === void 0) throw Error(r(407));
      u = u();
    } else u = t();
    var f = !rt(
      (ml || e).memoizedState,
      u
    );
    if (f && (e.memoizedState = u, Cl = !0), e = e.queue, lc(v0.bind(null, a, e, l), [
      l
    ]), l = e.getSnapshot !== t || f || Dl !== null && (Dl.memoizedState.tag & 1) !== 0, Za(
      l ? 9 : 8,
      { destroy: void 0 },
      d0.bind(null, a, e, u, t),
      null
    ), l) {
      if (a.flags |= 2048, gl === null) throw Error(r(349));
      n || (ru & 127) !== 0 || s0(a, t, u);
    }
    return u;
  }
  function s0(l, t, u) {
    l.flags |= 16384, l = { getSnapshot: t, value: u }, t = K.updateQueue, t === null ? (t = $n(), K.updateQueue = t, t.stores = [l]) : (u = t.stores, u === null ? t.stores = [l] : u.push(l));
  }
  function d0(l, t, u, a) {
    t.value = u, t.getSnapshot = a, y0(t) && m0(l);
  }
  function v0(l, t, u) {
    return u(function() {
      y0(t) && m0(l);
    });
  }
  function y0(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var u = t();
      return !rt(l, u);
    } catch {
      return !0;
    }
  }
  function m0(l) {
    var t = ta(l, 2);
    t !== null && ut(t, l, 2);
  }
  function ki(l) {
    var t = $l();
    if (typeof l == "function") {
      var u = l;
      if (l = u(), da) {
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
      lastRenderedReducer: su,
      lastRenderedState: l
    }, t;
  }
  function h0(l, t, u, a) {
    return l.baseState = u, Wi(
      l,
      ml,
      typeof a == "function" ? a : su
    );
  }
  function Xy(l, t, u, a, e) {
    if (Pn(l)) throw Error(r(485));
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
      R.T !== null ? u(!0) : n.isTransition = !1, a(n), u = t.pending, u === null ? (n.next = t.pending = n, g0(t, n)) : (n.next = u.next, t.pending = u.next = n);
    }
  }
  function g0(l, t) {
    var u = t.action, a = t.payload, e = l.state;
    if (t.isTransition) {
      var n = R.T, f = {};
      f.types = n !== null ? n.types : null, R.T = f;
      try {
        var i = u(e, a), c = R.S;
        c !== null && c(f, i), S0(l, t, i);
      } catch (m) {
        Pi(l, t, m);
      } finally {
        n !== null && f.types !== null && (n.types = f.types), R.T = n;
      }
    } else
      try {
        n = u(e, a), S0(l, t, n);
      } catch (m) {
        Pi(l, t, m);
      }
  }
  function S0(l, t, u) {
    u !== null && typeof u == "object" && typeof u.then == "function" ? u.then(
      function(a) {
        T0(l, t, a);
      },
      function(a) {
        return Pi(l, t, a);
      }
    ) : T0(l, t, u);
  }
  function T0(l, t, u) {
    t.status = "fulfilled", t.value = u, b0(t), l.state = u, t = l.pending, t !== null && (u = t.next, u === t ? l.pending = null : (u = u.next, t.next = u, g0(l, u)));
  }
  function Pi(l, t, u) {
    var a = l.pending;
    if (l.pending = null, a !== null) {
      a = a.next;
      do
        t.status = "rejected", t.reason = u, b0(t), t = t.next;
      while (t !== a);
    }
    l.action = null;
  }
  function b0(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function E0(l, t) {
    return t;
  }
  function z0(l, t) {
    if ($) {
      var u = gl.formState;
      if (u !== null) {
        l: {
          var a = K;
          if ($) {
            if (Tl) {
              t: {
                for (var e = Tl, n = At; e.nodeType !== 8; ) {
                  if (!n) {
                    e = null;
                    break t;
                  }
                  if (e = Dt(
                    e.nextSibling
                  ), e === null) {
                    e = null;
                    break t;
                  }
                }
                n = e.data, e = n === "F!" || n === "F" ? e : null;
              }
              if (e) {
                Tl = Dt(
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
    return u = $l(), u.memoizedState = u.baseState = t, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: E0,
      lastRenderedState: t
    }, u.queue = a, u = Q0.bind(
      null,
      K,
      a
    ), a.dispatch = u, a = ki(!1), n = nc.bind(
      null,
      K,
      !1,
      a.queue
    ), a = $l(), e = {
      state: t,
      dispatch: null,
      action: l,
      pending: null
    }, a.queue = e, u = Xy.bind(
      null,
      K,
      e,
      n,
      u
    ), e.dispatch = u, a.memoizedState = l, [t, u, !1];
  }
  function _0(l) {
    var t = Al();
    return O0(t, ml, l);
  }
  function O0(l, t, u) {
    if (t = Wi(
      l,
      t,
      E0
    )[0], l = Wn(su)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var a = je(t);
      } catch (f) {
        throw f === xa ? Xn : f;
      }
    else a = t;
    t = Al();
    var e = t.queue, n = e.dispatch;
    return u !== t.memoizedState && (K.flags |= 2048, Za(
      9,
      { destroy: void 0 },
      Qy.bind(null, e, u),
      null
    )), [a, n, l];
  }
  function Qy(l, t) {
    l.action = t;
  }
  function N0(l) {
    var t = Al(), u = ml;
    if (u !== null)
      return O0(t, u, l);
    Al(), t = t.memoizedState, u = Al();
    var a = u.queue.dispatch;
    return u.memoizedState = l, [t, a, !1];
  }
  function Za(l, t, u, a) {
    return l = { tag: l, create: u, deps: a, inst: t, next: null }, t = K.updateQueue, t === null && (t = $n(), K.updateQueue = t), u = t.lastEffect, u === null ? t.lastEffect = l.next = l : (a = u.next, u.next = l, l.next = a, t.lastEffect = l), l;
  }
  function A0() {
    return Al().memoizedState;
  }
  function In(l, t, u, a) {
    var e = $l();
    K.flags |= l, e.memoizedState = Za(
      1 | t,
      { destroy: void 0 },
      u,
      a === void 0 ? null : a
    );
  }
  function kn(l, t, u, a) {
    var e = Al();
    a = a === void 0 ? null : a;
    var n = e.memoizedState.inst;
    ml !== null && a !== null && Li(a, ml.memoizedState.deps) ? e.memoizedState = Za(t, n, u, a) : (K.flags |= l, e.memoizedState = Za(
      1 | t,
      n,
      u,
      a
    ));
  }
  function M0(l, t) {
    In(8390656, 8, l, t);
  }
  function lc(l, t) {
    kn(2048, 8, l, t);
  }
  function Zy(l) {
    K.flags |= 4;
    var t = K.updateQueue;
    if (t === null)
      t = $n(), K.updateQueue = t, t.events = [l];
    else {
      var u = t.events;
      u === null ? t.events = [l] : u.push(l);
    }
  }
  function D0(l) {
    var t = Al().memoizedState;
    return Zy({ ref: t, nextImpl: l }), function() {
      if ((ol & 2) !== 0) throw Error(r(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function C0(l, t) {
    return kn(4, 2, l, t);
  }
  function U0(l, t) {
    return kn(4, 4, l, t);
  }
  function R0(l, t) {
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
  function p0(l, t, u) {
    u = u != null ? u.concat([l]) : null, kn(4, 4, R0.bind(null, t, l), u);
  }
  function tc() {
  }
  function H0(l, t) {
    var u = Al();
    t = t === void 0 ? null : t;
    var a = u.memoizedState;
    return t !== null && Li(t, a[1]) ? a[0] : (u.memoizedState = [l, t], l);
  }
  function B0(l, t) {
    var u = Al();
    t = t === void 0 ? null : t;
    var a = u.memoizedState;
    if (t !== null && Li(t, a[1]))
      return a[0];
    if (a = l(), da) {
      Tu(!0);
      try {
        l();
      } finally {
        Tu(!1);
      }
    }
    return u.memoizedState = [a, t], a;
  }
  function uc(l, t, u) {
    return u === void 0 || (ru & 1073741824) !== 0 && (k & 261930) === 0 ? l.memoizedState = t : (l.memoizedState = u, l = Ls(), K.lanes |= l, qu |= l, u);
  }
  function Y0(l, t, u, a) {
    return rt(u, t) ? u : Uu.current !== null ? (l = uc(l, u, a), rt(l, t) || (Cl = !0), l) : (ru & 106) === 0 || (ru & 1073741824) !== 0 && (k & 261930) === 0 ? (Cl = !0, l.memoizedState = u) : (l = Ls(), K.lanes |= l, qu |= l, t);
  }
  function q0(l, t, u, a, e) {
    var n = Z.p;
    Z.p = n !== 0 && 8 > n ? n : 8;
    var f = R.T, i = {};
    i.types = f !== null ? f.types : null, R.T = i, nc(l, !1, t, u);
    try {
      var c = e(), m = R.S;
      if (m !== null && m(i, c), c !== null && typeof c == "object" && typeof c.then == "function") {
        var S = jy(
          c,
          a
        );
        xe(
          l,
          t,
          S,
          mt(l)
        );
      } else
        xe(
          l,
          t,
          a,
          mt(l)
        );
    } catch (z) {
      xe(
        l,
        t,
        { then: function() {
        }, status: "rejected", reason: z },
        mt()
      );
    } finally {
      Z.p = n, f !== null && i.types !== null && (f.types = i.types), R.T = f;
    }
  }
  function Vy() {
  }
  function ac(l, t, u, a) {
    if (l.tag !== 5) throw Error(r(476));
    var e = j0(l).queue;
    q0(
      l,
      e,
      t,
      lu,
      u === null ? Vy : function() {
        return x0(l), u(a);
      }
    );
  }
  function j0(l) {
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
        lastRenderedReducer: su,
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
        lastRenderedReducer: su,
        lastRenderedState: u
      },
      next: null
    }, l.memoizedState = t, l = l.alternate, l !== null && (l.memoizedState = t), t;
  }
  function x0(l) {
    var t = j0(l);
    t.next === null && (t = l.alternate.memoizedState), xe(
      l,
      t.next.queue,
      {},
      mt()
    );
  }
  function ec() {
    return Xl(ie);
  }
  function G0() {
    return Al().memoizedState;
  }
  function X0() {
    return Al().memoizedState;
  }
  function Ly(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var u = mt();
          l = Du(u);
          var a = Cu(t, l, u);
          a !== null && (ut(a, t, u), pe(a, t, u)), t = { cache: pi() }, l.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function Ky(l, t, u) {
    var a = mt();
    u = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Pn(l) ? Z0(t, u) : (u = _i(l, t, u, a), u !== null && (ut(u, l, a), V0(u, t, a)));
  }
  function Q0(l, t, u) {
    var a = mt();
    xe(l, t, u, a);
  }
  function xe(l, t, u, a) {
    var e = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Pn(l)) Z0(t, e);
    else {
      var n = l.alternate;
      if (l.lanes === 0 && (n === null || n.lanes === 0) && (n = t.lastRenderedReducer, n !== null))
        try {
          var f = t.lastRenderedState, i = n(f, u);
          if (e.hasEagerState = !0, e.eagerState = i, rt(i, f))
            return Un(l, t, e, 0), gl === null && Cn(), !1;
        } catch {
        }
      if (u = _i(l, t, e, a), u !== null)
        return ut(u, l, a), V0(u, t, a), !0;
    }
    return !1;
  }
  function nc(l, t, u, a) {
    if (a = {
      lane: 2,
      revertLane: Fc(),
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Pn(l)) {
      if (t) throw Error(r(479));
    } else
      t = _i(
        l,
        u,
        a,
        2
      ), t !== null && ut(t, l, 2);
  }
  function Pn(l) {
    var t = l.alternate;
    return l === K || t !== null && t === K;
  }
  function Z0(l, t) {
    Xa = Jn = !0;
    var u = l.pending;
    u === null ? t.next = t : (t.next = u.next, u.next = t), l.pending = t;
  }
  function V0(l, t, u) {
    if ((u & 4194048) !== 0) {
      var a = t.lanes;
      a &= l.pendingLanes, u |= a, t.lanes = u, Lo(l, u);
    }
  }
  var lf = {
    readContext: Xl,
    use: Fn,
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
  }, L0 = {
    readContext: Xl,
    use: Fn,
    useCallback: function(l, t) {
      return $l().memoizedState = [
        l,
        t === void 0 ? null : t
      ], l;
    },
    useContext: Xl,
    useEffect: M0,
    useImperativeHandle: function(l, t, u) {
      u = u != null ? u.concat([l]) : null, In(
        4194308,
        4,
        R0.bind(null, t, l),
        u
      );
    },
    useLayoutEffect: function(l, t) {
      return In(4194308, 4, l, t);
    },
    useInsertionEffect: function(l, t) {
      In(4, 2, l, t);
    },
    useMemo: function(l, t) {
      var u = $l();
      t = t === void 0 ? null : t;
      var a = l();
      if (da) {
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
      var a = $l();
      if (u !== void 0) {
        var e = u(t);
        if (da) {
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
      }, a.queue = l, l = l.dispatch = Ky.bind(
        null,
        K,
        l
      ), [a.memoizedState, l];
    },
    useRef: function(l) {
      var t = $l();
      return l = { current: l }, t.memoizedState = l;
    },
    useState: function(l) {
      l = ki(l);
      var t = l.queue, u = Q0.bind(null, K, t);
      return t.dispatch = u, [l.memoizedState, u];
    },
    useDebugValue: tc,
    useDeferredValue: function(l, t) {
      var u = $l();
      return uc(u, l, t);
    },
    useTransition: function() {
      var l = ki(!1);
      return l = q0.bind(
        null,
        K,
        l.queue,
        !0,
        !1
      ), $l().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, t, u) {
      var a = K, e = $l();
      if ($) {
        if (u === void 0)
          throw Error(r(407));
        u = u();
      } else {
        if (u = t(), gl === null)
          throw Error(r(349));
        (k & 127) !== 0 || s0(a, t, u);
      }
      e.memoizedState = u;
      var n = { value: u, getSnapshot: t };
      return e.queue = n, M0(v0.bind(null, a, n, l), [
        l
      ]), a.flags |= 2048, Za(
        9,
        { destroy: void 0 },
        d0.bind(
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
      var l = $l(), t = gl.identifierPrefix;
      if ($) {
        var u = Lt, a = Vt;
        u = (a & ~(1 << 32 - ct(a) - 1)).toString(32) + u, t = "_" + t + "R_" + u, u = wn++, 0 < u && (t += "H" + u.toString(32)), t += "_";
      } else
        u = xy++, t = "_" + t + "r_" + u.toString(32) + "_";
      return l.memoizedState = t;
    },
    useHostTransitionStatus: ec,
    useFormState: z0,
    useActionState: z0,
    useOptimistic: function(l) {
      var t = $l();
      t.memoizedState = t.baseState = l;
      var u = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = u, t = nc.bind(
        null,
        K,
        !0,
        u
      ), u.dispatch = t, [l, t];
    },
    useMemoCache: Fi,
    useCacheRefresh: function() {
      return $l().memoizedState = Ly.bind(
        null,
        K
      );
    },
    useEffectEvent: function(l) {
      var t = $l(), u = { impl: l };
      return t.memoizedState = u, function() {
        if ((ol & 2) !== 0)
          throw Error(r(440));
        return u.impl.apply(void 0, arguments);
      };
    }
  }, K0 = {
    readContext: Xl,
    use: Fn,
    useCallback: H0,
    useContext: Xl,
    useEffect: lc,
    useImperativeHandle: p0,
    useInsertionEffect: C0,
    useLayoutEffect: U0,
    useMemo: B0,
    useReducer: Wn,
    useRef: A0,
    useState: function() {
      return Wn(su);
    },
    useDebugValue: tc,
    useDeferredValue: function(l, t) {
      var u = Al();
      return Y0(
        u,
        ml.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = Wn(su)[0], t = Al().memoizedState;
      return [
        typeof l == "boolean" ? l : je(l),
        t
      ];
    },
    useSyncExternalStore: r0,
    useId: G0,
    useHostTransitionStatus: ec,
    useFormState: _0,
    useActionState: _0,
    useOptimistic: function(l, t) {
      var u = Al();
      return h0(u, ml, l, t);
    },
    useMemoCache: Fi,
    useCacheRefresh: X0,
    useEffectEvent: D0
  }, Jy = {
    readContext: Xl,
    use: Fn,
    useCallback: H0,
    useContext: Xl,
    useEffect: lc,
    useImperativeHandle: p0,
    useInsertionEffect: C0,
    useLayoutEffect: U0,
    useMemo: B0,
    useReducer: Ii,
    useRef: A0,
    useState: function() {
      return Ii(su);
    },
    useDebugValue: tc,
    useDeferredValue: function(l, t) {
      var u = Al();
      return ml === null ? uc(u, l, t) : Y0(
        u,
        ml.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = Ii(su)[0], t = Al().memoizedState;
      return [
        typeof l == "boolean" ? l : je(l),
        t
      ];
    },
    useSyncExternalStore: r0,
    useId: G0,
    useHostTransitionStatus: ec,
    useFormState: N0,
    useActionState: N0,
    useOptimistic: function(l, t) {
      var u = Al();
      return ml !== null ? h0(u, ml, l, t) : (u.baseState = l, [l, u.queue.dispatch]);
    },
    useMemoCache: Fi,
    useCacheRefresh: X0,
    useEffectEvent: D0
  };
  function fc(l, t, u, a) {
    t = l.memoizedState, u = u(a, t), u = u == null ? t : F({}, t, u), l.memoizedState = u, l.lanes === 0 && (l.updateQueue.baseState = u);
  }
  var ic = {
    enqueueSetState: function(l, t, u) {
      l = l._reactInternals;
      var a = mt(), e = Du(a);
      e.payload = t, u != null && (e.callback = u), t = Cu(l, e, a), t !== null && (ut(t, l, a), pe(t, l, a));
    },
    enqueueReplaceState: function(l, t, u) {
      l = l._reactInternals;
      var a = mt(), e = Du(a);
      e.tag = 1, e.payload = t, u != null && (e.callback = u), t = Cu(l, e, a), t !== null && (ut(t, l, a), pe(t, l, a));
    },
    enqueueForceUpdate: function(l, t) {
      l = l._reactInternals;
      var u = mt(), a = Du(u);
      a.tag = 2, t != null && (a.callback = t), t = Cu(l, a, u), t !== null && (ut(t, l, u), pe(t, l, u));
    }
  };
  function J0(l, t, u, a, e, n, f) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(a, n, f) : t.prototype && t.prototype.isPureReactComponent ? !Oe(u, a) || !Oe(e, n) : !0;
  }
  function w0(l, t, u, a) {
    l = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(u, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(u, a), t.state !== l && ic.enqueueReplaceState(t, t.state, null);
  }
  function va(l, t) {
    var u = t;
    if ("ref" in t) {
      u = {};
      for (var a in t)
        a !== "ref" && (u[a] = t[a]);
    }
    if (l = l.defaultProps) {
      u === t && (u = F({}, u));
      for (var e in l)
        u[e] === void 0 && (u[e] = l[e]);
    }
    return u;
  }
  function $0(l) {
    Dn(l);
  }
  function F0(l) {
    console.error(l);
  }
  function W0(l) {
    Dn(l);
  }
  function tf(l, t) {
    try {
      var u = l.onUncaughtError;
      u(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function I0(l, t, u) {
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
  function cc(l, t, u) {
    return u = Du(u), u.tag = 3, u.payload = { element: null }, u.callback = function() {
      tf(l, t);
    }, u;
  }
  function k0(l) {
    return l = Du(l), l.tag = 3, l;
  }
  function P0(l, t, u, a) {
    var e = u.type.getDerivedStateFromError;
    if (typeof e == "function") {
      var n = a.value;
      l.payload = function() {
        return e(n);
      }, l.callback = function() {
        I0(t, u, a);
      };
    }
    var f = u.stateNode;
    f !== null && typeof f.componentDidCatch == "function" && (l.callback = function() {
      I0(t, u, a), typeof e != "function" && (ju === null ? ju = /* @__PURE__ */ new Set([this]) : ju.add(this));
      var i = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: i !== null ? i : ""
      });
    });
  }
  function wy(l, t, u, a, e) {
    if (u.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (t = u.alternate, t !== null && na(
        t,
        u,
        e,
        !0
      ), u = Ql.current, u !== null) {
        switch (u.tag) {
          case 31:
          case 13:
          case 19:
            return Jl === null ? _f() : u.alternate === null && Nl === 0 && (Nl = 3), u.flags &= -257, u.flags |= 65536, u.lanes = e, a === Qn ? u.flags |= 16384 : (t = u.updateQueue, t === null ? u.updateQueue = /* @__PURE__ */ new Set([a]) : t.add(a), Jc(l, a, e)), !1;
          case 22:
            return u.flags |= 65536, a === Qn ? u.flags |= 16384 : (t = u.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, u.updateQueue = t) : (u = t.retryQueue, u === null ? t.retryQueue = /* @__PURE__ */ new Set([a]) : u.add(a)), Jc(l, a, e)), !1;
        }
        throw Error(r(435, u.tag));
      }
      return Jc(l, a, e), _f(), !1;
    }
    if ($)
      return t = Ql.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = e, a !== Di && (l = Error(r(422), { cause: a }), Me(_t(l, u)))) : (a !== Di && (t = Error(r(423), {
        cause: a
      }), Me(
        _t(t, u)
      )), l = l.current.alternate, l.flags |= 65536, e &= -e, l.lanes |= e, a = _t(a, u), e = cc(
        l.stateNode,
        a,
        e
      ), xi(l, e), Nl !== 4 && (Nl = 2)), !1;
    var n = Error(r(520), { cause: a });
    if (n = _t(n, u), Je === null ? Je = [n] : Je.push(n), Nl !== 4 && (Nl = 2), t === null) return !0;
    a = _t(a, u), u = t;
    do {
      switch (u.tag) {
        case 3:
          return u.flags |= 65536, l = e & -e, u.lanes |= l, l = cc(u.stateNode, a, l), xi(u, l), !1;
        case 1:
          if (t = u.type, n = u.stateNode, (u.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (ju === null || !ju.has(n))))
            return u.flags |= 65536, e &= -e, u.lanes |= e, e = k0(e), P0(
              e,
              l,
              u,
              a
            ), xi(u, e), !1;
          break;
        case 22:
          if (u.memoizedState !== null)
            return u.flags |= 65536, !1;
      }
      u = u.return;
    } while (u !== null);
    return !1;
  }
  var oc = Error(r(461)), Cl = !1;
  function Rl(l, t, u, a) {
    t.child = l === null ? a0(t, null, u, a) : sa(
      t,
      l.child,
      u,
      a
    );
  }
  function ls(l, t, u, a, e) {
    u = u.render;
    var n = t.ref;
    if ("ref" in a) {
      var f = {};
      for (var i in a)
        i !== "ref" && (f[i] = a[i]);
    } else f = a;
    return fa(t), a = Ki(
      l,
      t,
      u,
      f,
      n,
      e
    ), i = Ji(), l !== null && !Cl ? (wi(l, t, e), du(l, t, e)) : ($ && i && Bn(t), t.flags |= 1, Rl(l, t, a, e), t.child);
  }
  function ts(l, t, u, a, e) {
    if (l === null) {
      var n = u.type;
      return typeof n == "function" && !Oi(n) && n.defaultProps === void 0 && u.compare === null ? (t.tag = 15, t.type = n, us(
        l,
        t,
        n,
        a,
        e
      )) : (l = pn(
        u.type,
        null,
        a,
        t,
        t.mode,
        e
      ), l.ref = t.ref, l.return = t, t.child = l);
    }
    if (n = l.child, !gc(l, e)) {
      var f = n.memoizedProps;
      if (u = u.compare, u = u !== null ? u : Oe, u(f, a) && l.ref === t.ref)
        return du(l, t, e);
    }
    return t.flags |= 1, l = fu(n, a), l.ref = t.ref, l.return = t, t.child = l;
  }
  function us(l, t, u, a, e) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (Oe(n, a) && l.ref === t.ref)
        if (Cl = !1, t.pendingProps = a = n, gc(l, e))
          (l.flags & 131072) !== 0 && (Cl = !0);
        else
          return t.lanes = l.lanes, du(l, t, e);
    }
    return rc(
      l,
      t,
      u,
      a,
      e
    );
  }
  function as(l, t, u, a) {
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
        return es(
          l,
          t,
          n,
          u,
          a
        );
      }
      if ((u & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && Gn(
          t,
          n !== null ? n.cachePool : null
        ), n !== null ? f0(t, n) : Xi(), i0(t);
      else
        return a = t.lanes = 536870912, es(
          l,
          t,
          n !== null ? n.baseLanes | u : u,
          u,
          a
        );
    } else
      n !== null ? (Gn(t, n.cachePool), f0(t, n), pu(), t.memoizedState = null) : (l !== null && Gn(t, null), Xi(), pu());
    return Rl(l, t, e, u), t.child;
  }
  function Ge(l, t) {
    return l !== null && l.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function es(l, t, u, a, e) {
    var n = Bi();
    return n = n === null ? null : { parent: Ml._currentValue, pool: n }, t.memoizedState = {
      baseLanes: u,
      cachePool: n
    }, l !== null && Gn(t, null), Xi(), i0(t), l !== null && na(l, t, a, !0), t.childLanes = e, null;
  }
  function uf(l, t) {
    return t = af(
      { mode: t.mode, children: t.children },
      l.mode
    ), t.ref = l.ref, l.child = t, t.return = l, t;
  }
  function ns(l, t, u) {
    return sa(t, l.child, null, u), l = uf(t, t.pendingProps), l.flags |= 2, st(t), t.memoizedState = null, l;
  }
  function $y(l, t, u) {
    var a = t.pendingProps, e = (t.flags & 128) !== 0;
    if (t.flags &= -129, l === null) {
      if ($) {
        if (a.mode === "hidden")
          return l = uf(t, a), t.lanes = 536870912, l.memoizedState = { baseLanes: 0, cachePool: null }, Ge(null, l);
        if (Zi(t), (l = Tl) ? (l = Rd(
          l,
          At
        ), l = l !== null && l.data === "&" ? l : null, l !== null && (t.memoizedState = {
          dehydrated: l,
          treeContext: zu !== null ? { id: Vt, overflow: Lt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, u = Zr(l), u.return = t, t.child = u, Bl = t, Tl = null)) : l = null, l === null) throw Ou(t);
        return t.lanes = 536870912, null;
      }
      return uf(t, a);
    }
    var n = l.memoizedState;
    if (n !== null) {
      var f = n.dehydrated;
      if (Zi(t), e)
        if (t.flags & 256)
          t.flags &= -257, t = ns(
            l,
            t,
            u
          );
        else if (t.memoizedState !== null)
          t.child = l.child, t.flags |= 128, t = null;
        else throw Error(r(558));
      else if (Cl || na(l, t, u, !1), e = (u & l.childLanes) !== 0, Cl || e) {
        if (Uu.current === null) {
          if (a = gl, a !== null && (f = Ko(a, u), f !== 0 && f !== n.retryLane))
            throw n.retryLane = f, ta(l, f), ut(a, l, f), oc;
          _f();
        }
        t = ns(
          l,
          t,
          u
        );
      } else
        l = n.treeContext, Tl = Dt(f.nextSibling), Bl = t, $ = !0, _u = null, At = !1, l !== null && Kr(t, l), t = uf(t, a), t.flags |= 134221824;
      return t;
    }
    return l = fu(l.child, {
      mode: a.mode,
      children: a.children
    }), l.ref = t.ref, t.child = l, l.return = t, l;
  }
  function Va(l, t) {
    var u = t.ref;
    if (u === null)
      l !== null && l.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof u != "function" && typeof u != "object")
        throw Error(r(284));
      (l === null || l.ref !== u) && (t.flags |= 4194816);
    }
  }
  function rc(l, t, u, a, e) {
    return fa(t), u = Ki(
      l,
      t,
      u,
      a,
      void 0,
      e
    ), a = Ji(), l !== null && !Cl ? (wi(l, t, e), du(l, t, e)) : ($ && a && Bn(t), t.flags |= 1, Rl(l, t, u, e), t.child);
  }
  function fs(l, t, u, a, e, n) {
    return fa(t), t.updateQueue = null, u = o0(
      t,
      a,
      u,
      e
    ), c0(l), a = Ji(), l !== null && !Cl ? (wi(l, t, n), du(l, t, n)) : ($ && a && Bn(t), t.flags |= 1, Rl(l, t, u, n), t.child);
  }
  function is(l, t, u, a, e) {
    if (fa(t), t.stateNode === null) {
      var n = Ha, f = u.contextType;
      typeof f == "object" && f !== null && (n = Xl(f)), n = new u(a, n), t.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = ic, t.stateNode = n, n._reactInternals = t, n = t.stateNode, n.props = a, n.state = t.memoizedState, n.refs = {}, qi(t), f = u.contextType, n.context = typeof f == "object" && f !== null ? Xl(f) : Ha, n.state = t.memoizedState, f = u.getDerivedStateFromProps, typeof f == "function" && (fc(
        t,
        u,
        f,
        a
      ), n.state = t.memoizedState), typeof u.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (f = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), f !== n.state && ic.enqueueReplaceState(n, n.state, null), Be(t, a, n, e), He(), n.state = t.memoizedState), typeof n.componentDidMount == "function" && (t.flags |= 4194308), a = !0;
    } else if (l === null) {
      n = t.stateNode;
      var i = t.memoizedProps, c = va(u, i);
      n.props = c;
      var m = n.context, S = u.contextType;
      f = Ha, typeof S == "object" && S !== null && (f = Xl(S));
      var z = u.getDerivedStateFromProps;
      S = typeof z == "function" || typeof n.getSnapshotBeforeUpdate == "function", i = t.pendingProps !== i, S || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (i || m !== f) && w0(
        t,
        n,
        a,
        f
      ), Mu = !1;
      var v = t.memoizedState;
      n.state = v, Be(t, a, n, e), He(), m = t.memoizedState, i || v !== m || Mu ? (typeof z == "function" && (fc(
        t,
        u,
        z,
        a
      ), m = t.memoizedState), (c = Mu || J0(
        t,
        u,
        c,
        a,
        v,
        m,
        f
      )) ? (S || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = m), n.props = a, n.state = m, n.context = f, a = c) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), a = !1);
    } else {
      n = t.stateNode, ji(l, t), f = t.memoizedProps, S = va(u, f), n.props = S, z = t.pendingProps, v = n.context, m = u.contextType, c = Ha, typeof m == "object" && m !== null && (c = Xl(m)), i = u.getDerivedStateFromProps, (m = typeof i == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (f !== z || v !== c) && w0(
        t,
        n,
        a,
        c
      ), Mu = !1, v = t.memoizedState, n.state = v, Be(t, a, n, e), He();
      var g = t.memoizedState;
      f !== z || v !== g || Mu || l !== null && l.dependencies !== null && jn(l.dependencies) ? (typeof i == "function" && (fc(
        t,
        u,
        i,
        a
      ), g = t.memoizedState), (S = Mu || J0(
        t,
        u,
        S,
        a,
        v,
        g,
        c
      ) || l !== null && l.dependencies !== null && jn(l.dependencies)) ? (m || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(a, g, c), typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(
        a,
        g,
        c
      )), typeof n.componentDidUpdate == "function" && (t.flags |= 4), typeof n.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || f === l.memoizedProps && v === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || f === l.memoizedProps && v === l.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = g), n.props = a, n.state = g, n.context = c, a = S) : (typeof n.componentDidUpdate != "function" || f === l.memoizedProps && v === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || f === l.memoizedProps && v === l.memoizedState || (t.flags |= 1024), a = !1);
    }
    return n = a, Va(l, t), a = (t.flags & 128) !== 0, n || a ? (n = t.stateNode, u = a && typeof u.getDerivedStateFromError != "function" ? null : n.render(), t.flags |= 1, l !== null && a ? (t.child = sa(
      t,
      l.child,
      null,
      e
    ), t.child = sa(
      t,
      null,
      u,
      e
    )) : Rl(l, t, u, e), t.memoizedState = n.state, l = t.child) : l = du(
      l,
      t,
      e
    ), l;
  }
  function cs(l, t, u, a) {
    return aa(), t.flags |= 256, Rl(l, t, u, a), t.child;
  }
  var sc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function dc(l) {
    return { baseLanes: l, cachePool: Ir() };
  }
  function vc(l, t, u) {
    return l = l !== null ? l.childLanes & ~u : 0, t && (l |= yt), l;
  }
  function os(l, t, u) {
    var a = t.pendingProps, e = !1, n = (t.flags & 128) !== 0, f;
    if ((f = n) || (f = l !== null && l.memoizedState === null ? !1 : (Zl.current & 2) !== 0), f && (e = !0, t.flags &= -129), f = (t.flags & 32) !== 0, t.flags &= -33, l === null) {
      if ($) {
        if (e ? Ru(t) : pu(), (l = Tl) ? (l = Rd(
          l,
          At
        ), l = l !== null && l.data !== "&" ? l : null, l !== null && (t.memoizedState = {
          dehydrated: l,
          treeContext: zu !== null ? { id: Vt, overflow: Lt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, u = Zr(l), u.return = t, t.child = u, Bl = t, Tl = null)) : l = null, l === null) throw Ou(t);
        return vo(l) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      return n = a.children, a = a.fallback, e ? (pu(), e = t.mode, n = af(
        { mode: "hidden", children: n },
        e
      ), a = ua(
        a,
        e,
        u,
        null
      ), n.return = t, a.return = t, n.sibling = a, t.child = n, a = t.child, a.memoizedState = dc(u), a.childLanes = vc(
        l,
        f,
        u
      ), t.memoizedState = sc, Ge(null, a)) : (Ru(t), yc(t, n));
    }
    var i = l.memoizedState;
    if (i !== null) {
      var c = i.dehydrated;
      if (c !== null)
        return Fy(
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
    return e ? (pu(), e = a.fallback, n = t.mode, i = l.child, c = i.sibling, a = fu(i, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = i.subtreeFlags & 1206910976, c !== null ? e = fu(c, e) : (e = ua(
      e,
      n,
      u,
      null
    ), e.flags |= 2), e.return = t, a.return = t, a.sibling = e, t.child = a, Ge(null, a), a = t.child, e = l.child.memoizedState, e === null ? e = dc(u) : (n = e.cachePool, n !== null ? (i = Ml._currentValue, n = n.parent !== i ? { parent: i, pool: i } : n) : n = Ir(), e = {
      baseLanes: e.baseLanes | u,
      cachePool: n
    }), a.memoizedState = e, a.childLanes = vc(
      l,
      f,
      u
    ), t.memoizedState = sc, Ge(l.child, a)) : (Ru(t), u = l.child, l = u.sibling, u = fu(u, {
      mode: "visible",
      children: a.children
    }), u.return = t, u.sibling = null, l !== null && (f = t.deletions, f === null ? (t.deletions = [l], t.flags |= 16) : f.push(l)), t.child = u, t.memoizedState = null, u);
  }
  function yc(l, t) {
    return t = af(
      { mode: "visible", children: t },
      l.mode
    ), t.return = l, l.child = t;
  }
  function af(l, t) {
    return l = kl(22, l, null, t), l.lanes = 0, l;
  }
  function ef(l, t, u) {
    return sa(t, l.child, null, u), l = yc(
      t,
      t.pendingProps.children
    ), l.flags |= 2, t.memoizedState = null, l;
  }
  function Fy(l, t, u, a, e, n, f, i) {
    if (u)
      return t.flags & 256 ? (Ru(t), t.flags &= -257, ef(
        l,
        t,
        i
      )) : t.memoizedState !== null ? (pu(), t.child = l.child, t.flags |= 128, null) : (pu(), n = e.fallback, f = t.mode, e = af(
        { mode: "visible", children: e.children },
        f
      ), n = ua(
        n,
        f,
        i,
        null
      ), n.flags |= 2, e.return = t, n.return = t, e.sibling = n, t.child = e, sa(t, l.child, null, i), e = t.child, e.memoizedState = dc(i), e.childLanes = vc(
        l,
        a,
        i
      ), t.memoizedState = sc, Ge(null, e));
    if (Ru(t), vo(n)) {
      if (a = n.nextSibling && n.nextSibling.dataset, a) var c = a.dgst;
      return a = c, a !== "" && (e = Error(r(419)), e.stack = "", e.digest = a, Me({ value: e, source: null, stack: null })), ef(
        l,
        t,
        i
      );
    }
    if (Cl || na(l, t, i, !1), a = (i & l.childLanes) !== 0, Cl || a) {
      if (Uu.current !== null)
        return ef(
          l,
          t,
          i
        );
      if (a = gl, a !== null && (e = Ko(
        a,
        i
      ), e !== 0 && e !== f.retryLane))
        throw f.retryLane = e, ta(l, e), ut(a, l, e), oc;
      return so(n) || _f(), ef(
        l,
        t,
        i
      );
    }
    return so(n) ? (t.flags |= 192, t.child = l.child, null) : (l = f.treeContext, Tl = Dt(n.nextSibling), Bl = t, $ = !0, _u = null, At = !1, l !== null && Kr(t, l), t = yc(
      t,
      e.children
    ), t.flags |= 134221824, t);
  }
  function rs(l, t, u) {
    l.lanes |= t;
    var a = l.alternate;
    a !== null && (a.lanes |= t), qn(l.return, t, u);
  }
  function ss(l) {
    for (var t = null; l !== null; ) {
      var u = l.alternate;
      u !== null && Kn(u) === null && (t = l), l = l.sibling;
    }
    return t;
  }
  function nf(l, t, u, a, e, n) {
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
  function mc(l) {
    var t = l.child;
    for (l.child = null; t !== null; ) {
      var u = t.sibling;
      t.sibling = l.child, l.child = t, t = u;
    }
  }
  function hc(l, t, u) {
    var a = t.pendingProps, e = a.revealOrder, n = a.tail;
    a = a.children;
    var f = Zl.current;
    if (t.flags & 128)
      return Ye(t, f), null;
    var i = (f & 2) !== 0;
    if (i ? (f = f & 1 | 2, t.flags |= 128) : f &= 1, Ye(t, f), e === "backwards" && l !== null ? (mc(l), Rl(l, t, a, u), mc(l)) : Rl(l, t, a, u), a = $ ? Ae : 0, !i && l !== null && (l.flags & 128) !== 0)
      l: for (l = t.child; l !== null; ) {
        if (l.tag === 13)
          l.memoizedState !== null && rs(l, u, t);
        else if (l.tag === 19)
          rs(l, u, t);
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
        u = ss(t.child), u === null ? (e = t.child, t.child = null) : (e = u.sibling, u.sibling = null, mc(t)), nf(
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
          if (l = e.alternate, l !== null && Kn(l) === null) {
            t.child = e;
            break;
          }
          l = e.sibling, e.sibling = u, u = e, e = l;
        }
        nf(
          t,
          !0,
          u,
          null,
          n,
          a
        );
        break;
      case "together":
        nf(
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
        u = ss(t.child), u === null ? (e = t.child, t.child = null) : (e = u.sibling, u.sibling = null), nf(
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
  function ds(l, t, u) {
    var a = t.pendingProps;
    return Nu(t, t.type, a.value), Rl(l, t, a.children, u), t.child;
  }
  function du(l, t, u) {
    if (l !== null && (t.dependencies = l.dependencies), qu |= t.lanes, (u & t.childLanes) === 0)
      if (l !== null) {
        if (na(
          l,
          t,
          u,
          !1
        ), (u & t.childLanes) === 0)
          return null;
      } else return null;
    if (l !== null && t.child !== l.child)
      throw Error(r(153));
    if (t.child !== null) {
      for (l = t.child, u = fu(l, l.pendingProps), t.child = u, u.return = t; l.sibling !== null; )
        l = l.sibling, u = u.sibling = fu(l, l.pendingProps), u.return = t;
      u.sibling = null;
    }
    return t.child;
  }
  function gc(l, t) {
    return (l.lanes & t) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && jn(l)));
  }
  function Wy(l, t, u) {
    switch (t.tag) {
      case 3:
        rn(t, t.stateNode.containerInfo), Nu(t, Ml, l.memoizedState.cache), aa();
        break;
      case 27:
      case 5:
        Lf(t);
        break;
      case 4:
        rn(t, t.stateNode.containerInfo);
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
          return t.flags |= 128, Zi(t), null;
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null) {
          if (a.dehydrated !== null)
            return Ru(t), t.flags |= 128, null;
          a = na(
            l,
            t,
            u,
            !1
          );
          var e = t.child.childLanes;
          return a || (u & e) !== 0 ? os(l, t, u) : (Ru(t), l = du(
            l,
            t,
            u
          ), l !== null ? l.sibling : null);
        }
        Ru(t);
        break;
      case 19:
        if (t.flags & 128)
          return hc(
            l,
            t,
            u
          );
        if (e = (l.flags & 128) !== 0, a = (u & t.childLanes) !== 0, a || (na(
          l,
          t,
          u,
          !1
        ), a = (u & t.childLanes) !== 0), e) {
          if (a)
            return hc(
              l,
              t,
              u
            );
          t.flags |= 128;
        }
        if (e = t.memoizedState, e !== null && (e.rendering = null, e.tail = null, e.lastEffect = null), Ye(t, Zl.current), a) break;
        return null;
      case 22:
        return t.lanes = 0, as(
          l,
          t,
          u,
          t.pendingProps
        );
      case 24:
        Nu(t, Ml, l.memoizedState.cache);
    }
    return du(l, t, u);
  }
  function vs(l, t, u) {
    if (l !== null)
      if (l.memoizedProps !== t.pendingProps)
        Cl = !0;
      else {
        if (!gc(l, u) && (t.flags & 128) === 0)
          return Cl = !1, Wy(
            l,
            t,
            u
          );
        Cl = (l.flags & 131072) !== 0;
      }
    else
      Cl = !1, $ && (t.flags & 1048576) !== 0 && Lr(t, Ae, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        l: {
          var a = t.pendingProps;
          if (l = oa(t.elementType), t.type = l, typeof l == "function")
            Oi(l) ? (a = va(l, a), t.tag = 1, t = is(
              null,
              t,
              l,
              a,
              u
            )) : (t.tag = 0, t = rc(
              null,
              t,
              l,
              a,
              u
            ));
          else {
            if (l != null) {
              var e = l.$$typeof;
              if (e === M) {
                t.tag = 11, t = ls(
                  null,
                  t,
                  l,
                  a,
                  u
                );
                break l;
              } else if (e === hl) {
                t.tag = 14, t = ts(
                  null,
                  t,
                  l,
                  a,
                  u
                );
                break l;
              } else if (e === pl) {
                t.tag = 10, t.type = l, t = ds(
                  null,
                  t,
                  u
                );
                break l;
              }
            }
            throw t = nl(l) || l, Error(r(306, t, ""));
          }
        }
        return t;
      case 0:
        return rc(
          l,
          t,
          t.type,
          t.pendingProps,
          u
        );
      case 1:
        return a = t.type, e = va(
          a,
          t.pendingProps
        ), is(
          l,
          t,
          a,
          e,
          u
        );
      case 3:
        l: {
          if (rn(
            t,
            t.stateNode.containerInfo
          ), l === null) throw Error(r(387));
          a = t.pendingProps;
          var n = t.memoizedState;
          e = n.element, ji(l, t), Be(t, a, null, u);
          var f = t.memoizedState;
          if (a = f.cache, Nu(t, Ml, a), a !== n.cache && Ri(
            t,
            [Ml],
            u,
            !0
          ), He(), a = f.element, n.isDehydrated)
            if (n = {
              element: a,
              isDehydrated: !1,
              cache: f.cache
            }, t.updateQueue.baseState = n, t.memoizedState = n, t.flags & 256) {
              t = cs(
                l,
                t,
                a,
                u
              );
              break l;
            } else if (a !== e) {
              e = _t(
                Error(r(424)),
                t
              ), Me(e), t = cs(
                l,
                t,
                a,
                u
              );
              break l;
            } else
              for (l = t.stateNode.containerInfo, l.nodeType === 9 ? l = l.body : l = l.nodeName === "HTML" ? l.ownerDocument.body : l, Tl = Dt(l.firstChild), Bl = t, $ = !0, _u = null, At = !0, u = a0(
                t,
                null,
                a,
                u
              ), t.child = u; u; )
                u.flags = u.flags & -3 | 134221824, u = u.sibling;
          else {
            if (aa(), a === e) {
              t = du(
                l,
                t,
                u
              );
              break l;
            }
            Rl(l, t, a, u);
          }
          t = t.child;
        }
        return t;
      case 26:
        return Va(l, t), l === null ? (u = xd(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = u : $ || (t.stateNode = gd(
          t.type,
          t.pendingProps,
          gu.current,
          t
        )) : t.memoizedState = xd(
          t.type,
          l.memoizedProps,
          t.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return Lf(t), l === null && $ && (a = t.stateNode = Bd(
          t.type,
          t.pendingProps,
          gu.current
        ), Bl = t, At = !0, e = Tl, Xu(t.type) ? (yo = e, Tl = Dt(a.firstChild)) : Tl = e), Rl(
          l,
          t,
          t.pendingProps.children,
          u
        ), Va(l, t), l === null && (t.flags |= 4194304), t.child;
      case 5:
        return l === null && $ && ((e = a = Tl) && (a = Lm(
          a,
          t.type,
          t.pendingProps,
          At
        ), a !== null ? (t.stateNode = a, Bl = t, Tl = Dt(a.firstChild), At = !1, e = !0) : e = !1), e || Ou(t)), Lf(t), e = t.type, n = t.pendingProps, f = l !== null ? l.memoizedProps : null, a = n.children, eo(e, n) ? a = null : f !== null && eo(e, f) && (t.flags |= 32), t.memoizedState !== null && (e = Ki(
          l,
          t,
          Gy,
          null,
          null,
          u
        ), ie._currentValue = e), Va(l, t), Rl(l, t, a, u), t.child;
      case 6:
        return l === null && $ && ((l = u = Tl) && (u = Km(
          u,
          t.pendingProps,
          At
        ), u !== null ? (t.stateNode = u, Bl = t, Tl = null, l = !0) : l = !1), l || Ou(t)), null;
      case 13:
        return os(l, t, u);
      case 4:
        return rn(
          t,
          t.stateNode.containerInfo
        ), a = t.pendingProps, l === null ? t.child = sa(
          t,
          null,
          a,
          u
        ) : Rl(l, t, a, u), t.child;
      case 11:
        return ls(
          l,
          t,
          t.type,
          t.pendingProps,
          u
        );
      case 7:
        return a = t.pendingProps, Va(l, t), Rl(l, t, a, u), t.child;
      case 8:
        return Rl(
          l,
          t,
          t.pendingProps.children,
          u
        ), t.child;
      case 12:
        return Rl(
          l,
          t,
          t.pendingProps.children,
          u
        ), t.child;
      case 10:
        return ds(l, t, u);
      case 9:
        return e = t.type._context, a = t.pendingProps.children, fa(t), e = Xl(e), a = a(e), t.flags |= 1, Rl(l, t, a, u), t.child;
      case 14:
        return ts(
          l,
          t,
          t.type,
          t.pendingProps,
          u
        );
      case 15:
        return us(
          l,
          t,
          t.type,
          t.pendingProps,
          u
        );
      case 19:
        return hc(l, t, u);
      case 31:
        return $y(l, t, u);
      case 22:
        return as(
          l,
          t,
          u,
          t.pendingProps
        );
      case 24:
        return fa(t), a = Xl(Ml), l === null ? (e = Bi(), e === null && (e = gl, n = pi(), e.pooledCache = n, n.refCount++, n !== null && (e.pooledCacheLanes |= u), e = n), t.memoizedState = { parent: a, cache: e }, qi(t), Nu(t, Ml, e)) : ((l.lanes & u) !== 0 && (ji(l, t), Be(t, null, null, u), He()), e = l.memoizedState, n = t.memoizedState, e.parent !== a ? (e = { parent: a, cache: a }, t.memoizedState = e, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = e), Nu(t, Ml, a)) : (a = n.cache, Nu(t, Ml, a), a !== e.cache && Ri(
          t,
          [Ml],
          u,
          !0
        ))), Rl(
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
        }), a = t.pendingProps, a.name != null && a.name !== "auto" ? t.flags |= l === null ? 18882560 : 18874368 : $ && Bn(t), l !== null && l.memoizedProps.name !== a.name ? t.flags |= 4194816 : Va(l, t), Rl(l, t, a.children, u), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(r(156, t.tag));
  }
  function vu(l) {
    l.flags |= 4;
  }
  function Sc(l, t, u, a, e) {
    var n;
    if ((n = (l.mode & 32) !== 0) && (n = u === null ? Zd(t, a) : Zd(t, a) && (a.src !== u.src || a.srcSet !== u.srcSet)), n) {
      if (l.flags |= 16777216, (e & 335544128) === e)
        if (l.stateNode.complete) l.flags |= 8192;
        else if ($s()) l.flags |= 8192;
        else
          throw ra = Qn, Yi;
    } else l.flags &= -16777217;
  }
  function ys(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !Vd(t))
      if ($s()) l.flags |= 8192;
      else
        throw ra = Qn, Yi;
  }
  function ff(l, t) {
    t !== null && (l.flags |= 4), l.flags & 16384 && (t = l.tag !== 22 ? Zo() : 536870912, l.lanes |= t, $a |= t);
  }
  function Xe(l, t) {
    if (!$)
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
  function bl(l) {
    var t = l.alternate !== null && l.alternate.child === l.child, u = 0, a = 0;
    if (t)
      for (var e = l.child; e !== null; )
        u |= e.lanes | e.childLanes, a |= e.subtreeFlags & 1206910976, a |= e.flags & 1206910976, e.return = l, e = e.sibling;
    else
      for (e = l.child; e !== null; )
        u |= e.lanes | e.childLanes, a |= e.subtreeFlags, a |= e.flags, e.return = l, e = e.sibling;
    return l.subtreeFlags |= a, l.childLanes = u, t;
  }
  function Iy(l, t, u) {
    var a = t.pendingProps;
    switch (Mi(t), t.tag) {
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
        return u = t.stateNode, a = null, l !== null && (a = l.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), ou(Ml), ba(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (l === null || l.child === null) && (qa(t) ? vu(t) : l === null || l.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Ci())), bl(t), null;
      case 26:
        var e = t.type, n = t.memoizedState;
        return l === null ? (vu(t), n !== null ? (bl(t), ys(t, n)) : (bl(t), Sc(
          t,
          e,
          null,
          a,
          u
        ))) : n ? n !== l.memoizedState ? (vu(t), bl(t), ys(t, n)) : (bl(t), t.flags &= -16777217) : (l = l.memoizedProps, l !== a && vu(t), bl(t), Sc(
          t,
          e,
          l,
          a,
          u
        )), null;
      case 27:
        if (sn(t), u = gu.current, e = t.type, l !== null && t.stateNode != null)
          l.memoizedProps !== a && vu(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(r(166));
            return bl(t), t.subtreeFlags &= -33554433, null;
          }
          l = Qt.current, qa(t) ? Jr(t) : (l = Bd(e, a, u), t.stateNode = l, vu(t));
        }
        return bl(t), t.subtreeFlags &= -33554433, null;
      case 5:
        if (sn(t), e = t.type, l !== null && t.stateNode != null)
          l.memoizedProps !== a && vu(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(r(166));
            return bl(t), t.subtreeFlags &= -33554433, null;
          }
          if (n = Qt.current, qa(t))
            Jr(t);
          else {
            var f = Ie(
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
            n[Gl] = t, n[Il] = a;
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
            l: switch (Ll(n, e, a), e) {
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
            a && vu(t);
          }
        }
        return bl(t), t.subtreeFlags &= -33554433, Sc(
          t,
          t.type,
          l === null ? null : l.memoizedProps,
          t.pendingProps,
          u
        ), null;
      case 6:
        if (l && t.stateNode != null)
          l.memoizedProps !== a && vu(t);
        else {
          if (typeof a != "string" && t.stateNode === null)
            throw Error(r(166));
          if (l = gu.current, qa(t)) {
            if (l = t.stateNode, u = t.memoizedProps, a = null, e = Bl, e !== null)
              switch (e.tag) {
                case 27:
                case 5:
                  a = e.memoizedProps;
              }
            l[Gl] = t, l = !!(l.nodeValue === u || a !== null && a.suppressHydrationWarning === !0 || vd(l.nodeValue, u)), l || Ou(t, !0);
          } else
            l = Ie(l).createTextNode(
              a
            ), l[Gl] = t, t.stateNode = l;
        }
        return bl(t), null;
      case 31:
        if (u = t.memoizedState, l === null || l.memoizedState !== null) {
          if (a = qa(t), u !== null) {
            if (l === null) {
              if (!a) throw Error(r(318));
              if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(r(557));
              l[Gl] = t;
            } else
              aa(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            bl(t), l = !1;
          } else
            u = Ci(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = u), l = !0;
          if (!l)
            return t.flags & 256 ? (st(t), t) : (st(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(r(558));
        }
        return bl(t), null;
      case 13:
        if (a = t.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (e = qa(t), a !== null && a.dehydrated !== null) {
            if (l === null) {
              if (!e) throw Error(r(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(317));
              e[Gl] = t;
            } else
              aa(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            bl(t), e = !1;
          } else
            e = Ci(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = e), e = !0;
          if (!e)
            return t.flags & 256 ? (st(t), t) : (st(t), null);
        }
        return st(t), (t.flags & 128) !== 0 ? (t.lanes = u, t) : (u = a !== null, l = l !== null && l.memoizedState !== null, u && (a = t.child, e = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (e = a.alternate.memoizedState.cachePool.pool), n = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (n = a.memoizedState.cachePool.pool), n !== e && (a.flags |= 2048)), u !== l && u && (t.child.flags |= 8192), ff(t, t.updateQueue), bl(t), null);
      case 4:
        return ba(), l === null && Pc(t.stateNode.containerInfo), t.flags |= 67108864, bl(t), null;
      case 10:
        return ou(t.type), bl(t), null;
      case 19:
        if (Vi(t), a = t.memoizedState, a === null) return bl(t), null;
        if (e = (t.flags & 128) !== 0, n = a.rendering, n === null)
          if (e) Xe(a, !1);
          else {
            if (Nl !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = t.child; l !== null; ) {
                if (n = Kn(l), n !== null) {
                  for (t.flags |= 128, Xe(a, !1), l = n.updateQueue, t.updateQueue = l, ff(t, l), t.subtreeFlags = 0, l = u, u = t.child; u !== null; )
                    Qr(u, l), u = u.sibling;
                  return Ye(
                    t,
                    Zl.current & 1 | 2
                  ), $ && iu(t, a.treeForkCount), t.child;
                }
                l = l.sibling;
              }
            a.tail !== null && ft() > Tf && (t.flags |= 128, e = !0, Xe(a, !1), t.lanes = 4194304);
          }
        else {
          if (!e)
            if (l = Kn(n), l !== null) {
              if (t.flags |= 128, e = !0, l = l.updateQueue, t.updateQueue = l, ff(t, l), Xe(a, !0), a.tail === null && a.tailMode !== "collapsed" && a.tailMode !== "visible" && !n.alternate && !$)
                return bl(t), null;
            } else
              2 * ft() - a.renderingStartTime > Tf && u !== 536870912 && (t.flags |= 128, e = !0, Xe(a, !1), t.lanes = 4194304);
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
          return a.rendering = l, a.tail = l.sibling, a.renderingStartTime = ft(), l.sibling = null, n = Zl.current, n = e ? n & 1 | 2 : n & 1, a.tailMode === "visible" || a.tailMode === "collapsed" || !u || $ ? Ye(t, n) : (u = n, Sl(Ql, t), Sl(Zl, u), Jl === null && (Jl = t)), $ && iu(t, a.treeForkCount), l;
        }
        return bl(t), null;
      case 22:
      case 23:
        return st(t), Qi(), a = t.memoizedState !== null, l !== null ? l.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (u & 536870912) !== 0 && (t.flags & 128) === 0 && (bl(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : bl(t), u = t.updateQueue, u !== null && ff(t, u.retryQueue), u = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== u && (t.flags |= 2048), l !== null && xl(ca), null;
      case 24:
        return u = null, l !== null && (u = l.memoizedState.cache), t.memoizedState.cache !== u && (t.flags |= 2048), ou(Ml), bl(t), null;
      case 25:
        return null;
      case 30:
        return t.flags |= 33554432, bl(t), null;
    }
    throw Error(r(156, t.tag));
  }
  function ky(l, t) {
    switch (Mi(t), t.tag) {
      case 1:
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 3:
        return ou(Ml), ba(), l = t.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (t.flags = l & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return sn(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (st(t), t.alternate === null)
            throw Error(r(340));
          aa();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 13:
        if (st(t), l = t.memoizedState, l !== null && l.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(r(340));
          aa();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 19:
        return Vi(t), l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null), t.flags |= 4, t) : null;
      case 4:
        return ba(), null;
      case 10:
        return ou(t.type), null;
      case 22:
      case 23:
        return st(t), Qi(), l !== null && xl(ca), l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 24:
        return ou(Ml), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function ms(l, t) {
    switch (Mi(t), t.tag) {
      case 3:
        ou(Ml), ba();
        break;
      case 26:
      case 27:
      case 5:
        sn(t);
        break;
      case 4:
        ba();
        break;
      case 31:
        t.memoizedState !== null && st(t);
        break;
      case 13:
        st(t);
        break;
      case 19:
        Vi(t);
        break;
      case 10:
        ou(t.type);
        break;
      case 22:
      case 23:
        st(t), Qi(), l !== null && xl(ca);
        break;
      case 24:
        ou(Ml);
    }
  }
  function Qe(l, t) {
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
      vl(t, t.return, i);
    }
  }
  function Hu(l, t, u) {
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
              var c = u, m = i;
              try {
                m();
              } catch (S) {
                vl(
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
      vl(t, t.return, S);
    }
  }
  function hs(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var u = l.stateNode;
      try {
        n0(t, u);
      } catch (a) {
        vl(l, l.return, a);
      }
    }
  }
  function gs(l, t, u) {
    u.props = va(
      l.type,
      l.memoizedProps
    ), u.state = l.memoizedState;
    try {
      u.componentWillUnmount();
    } catch (a) {
      vl(l, t, a);
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
            (e.ref === null || e.ref.name !== n) && (e.ref = Od(n)), a = e.ref;
            break;
          case 7:
            if (l.stateNode === null) {
              var f = new ht(l);
              T(
                l.child,
                !1,
                Zm,
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
      vl(l, t, i);
    }
  }
  function Vl(l, t) {
    var u = l.ref, a = l.refCleanup;
    if (u !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (e) {
          vl(l, t, e);
        } finally {
          l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
        }
      else if (typeof u == "function")
        try {
          u(null);
        } catch (e) {
          vl(l, t, e);
        }
      else u.current = null;
  }
  function cf(l, t) {
    if ((l.tag === 5 || l.tag === 27 || l.tag === 6) && l.alternate === null && t !== null)
      for (var u = 0; u < t.length; u++)
        Ud(
          l.stateNode,
          t[u]
        );
  }
  function Ss(l) {
    for (var t = l.return; t !== null && (bc(t) && Ud(l.stateNode, t.stateNode), !Tc(t)); )
      t = t.return;
  }
  function Ze(l) {
    for (var t = l.return; t !== null && (bc(t) && Vm(l.stateNode, t.stateNode), !Tc(t)); )
      t = t.return;
  }
  function Tc(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 27;
  }
  function bc(l) {
    return l && l.tag === 7 && l.stateNode !== null;
  }
  function Ec(l) {
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
      vl(l, l.return, e);
    }
  }
  function zc(l, t, u) {
    try {
      var a = l.stateNode;
      Om(a, l.type, u, t), a[Il] = t;
    } catch (e) {
      vl(l, l.return, e);
    }
  }
  function Ts(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && Xu(l.type) || l.tag === 4;
  }
  function _c(l) {
    l: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || Ts(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && Xu(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue l;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function Oc(l, t, u, a) {
    var e = l.tag;
    if (e === 5 || e === 6)
      e = l.stateNode, t ? (u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u).insertBefore(e, t) : (t = u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u, t.appendChild(e), u = u._reactRootContainer, u != null || t.onclick !== null || (t.onclick = Zt)), cf(l, a), fl = !0;
    else if (e !== 4 && (e === 27 && (cf(l, a), a = null, Xu(l.type) && (u = l.stateNode, t = null)), l = l.child, l !== null))
      for (Oc(
        l,
        t,
        u,
        a
      ), l = l.sibling; l !== null; )
        Oc(
          l,
          t,
          u,
          a
        ), l = l.sibling;
  }
  function of(l, t, u, a) {
    var e = l.tag;
    if (e === 5 || e === 6)
      e = l.stateNode, t ? u.insertBefore(e, t) : u.appendChild(e), cf(l, a), fl = !0;
    else if (e !== 4 && (e === 27 && (cf(l, a), a = null, Xu(l.type) && (u = l.stateNode)), l = l.child, l !== null))
      for (of(
        l,
        t,
        u,
        a
      ), l = l.sibling; l !== null; )
        of(
          l,
          t,
          u,
          a
        ), l = l.sibling;
  }
  function bs(l) {
    var t = l.stateNode, u = l.memoizedProps;
    try {
      for (var a = l.type, e = t.attributes; e.length; )
        t.removeAttributeNode(e[0]);
      Ll(t, a, u), t[Gl] = l, t[Il] = u;
    } catch (n) {
      vl(l, l.return, n);
    }
  }
  var rf = !1, dt = null;
  function Es(l) {
    (l.tag === 30 || (l.subtreeFlags & 33554432) !== 0) && (rf = !0);
  }
  var Jt = null;
  function zs() {
    var l = Jt;
    return Jt = null, l;
  }
  var Pl = 0;
  function La(l, t, u, a, e) {
    return Pl = 0, _s(
      l.child,
      t,
      u,
      a,
      e
    );
  }
  function _s(l, t, u, a, e) {
    for (var n = !1; l !== null; ) {
      if (l.tag === 5) {
        var f = l.stateNode;
        if (a !== null) {
          var i = io(f);
          a.push(i), i.view && (n = !0);
        } else
          n || io(f).view && (n = !0);
        rf = !0, zd(
          f,
          Pl === 0 ? t : t + "_" + Pl,
          u
        ), Pl++;
      } else (l.tag !== 22 || l.memoizedState === null) && (l.tag === 30 && e || _s(
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
      l.tag === 5 ? _d(l.stateNode, l.memoizedProps) : (l.tag !== 22 || l.memoizedState === null) && (l.tag === 30 && t || wt(
        l.child,
        t
      )), l = l.sibling;
  }
  function sf(l) {
    if ((l.subtreeFlags & 18874368) !== 0)
      for (l = l.child; l !== null; ) {
        if ((l.tag !== 22 || l.memoizedState === null) && (sf(l), l.tag === 30 && (l.flags & 18874368) !== 0 && l.stateNode.paired)) {
          var t = l.memoizedProps;
          if (t.name == null || t.name === "auto")
            throw Error(r(544));
          var u = t.name;
          t = nu(t.default, t.share), t !== "none" && (La(
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
  function Nc(l, t) {
    if (l.tag === 30) {
      var u = l.stateNode, a = l.memoizedProps, e = eu(a, u), n = nu(
        a.default,
        u.paired ? a.share : a.enter
      );
      n !== "none" ? La(l, e, n, null, !1) ? (sf(l), u.paired || t || ka(l, a.onEnter)) : wt(l.child, !1) : sf(l);
    } else if ((l.subtreeFlags & 33554432) !== 0)
      for (l = l.child; l !== null; )
        Nc(l, t), l = l.sibling;
    else sf(l);
  }
  function Ac(l) {
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
                  if (n !== "none" && (La(
                    l,
                    a,
                    n,
                    null,
                    !1
                  ) ? (n = l.stateNode, e.paired = n, n.paired = e, ka(l, u.onShare)) : wt(l.child, !1)), t.delete(a), t.size === 0) break;
                }
              }
            }
            Ac(l);
          }
          l = l.sibling;
        }
    }
  }
  function Mc(l) {
    if (l.tag === 30) {
      var t = l.memoizedProps, u = eu(t, l.stateNode), a = dt !== null ? dt.get(u) : void 0, e = nu(
        t.default,
        a !== void 0 ? t.share : t.exit
      );
      e !== "none" && (La(l, u, e, null, !1) ? a !== void 0 ? (e = l.stateNode, a.paired = e, e.paired = a, dt.delete(u), ka(l, t.onShare)) : ka(l, t.onExit) : wt(l.child, !1)), dt !== null && Ac(l);
    } else if ((l.subtreeFlags & 33554432) !== 0)
      for (l = l.child; l !== null; )
        Mc(l), l = l.sibling;
    else
      dt !== null && Ac(l);
  }
  function Os(l) {
    for (l = l.child; l !== null; ) {
      if (l.tag === 30) {
        var t = l.memoizedProps, u = eu(t, l.stateNode);
        t = nu(t.default, t.update), l.flags &= -5, t !== "none" && La(
          l,
          u,
          t,
          l.memoizedState = [],
          !1
        );
      } else
        (l.subtreeFlags & 33554432) !== 0 && Os(l);
      l = l.sibling;
    }
  }
  function Dc(l) {
    if ((l.subtreeFlags & 18874368) !== 0)
      for (l = l.child; l !== null; ) {
        if (l.tag !== 22 || l.memoizedState === null) {
          if (l.tag === 30 && (l.flags & 18874368) !== 0) {
            var t = l.stateNode;
            t.paired !== null && (t.paired = null, wt(l.child, !1));
          }
          Dc(l);
        }
        l = l.sibling;
      }
  }
  function df(l) {
    if (l.tag === 30)
      l.stateNode.paired = null, wt(l.child, !1), Dc(l);
    else if ((l.subtreeFlags & 33554432) !== 0)
      for (l = l.child; l !== null; )
        df(l), l = l.sibling;
    else Dc(l);
  }
  function Ns(l) {
    for (l = l.child; l !== null; )
      l.tag === 30 ? wt(l.child, !1) : (l.subtreeFlags & 33554432) !== 0 && Ns(l), l = l.sibling;
  }
  function Cc(l, t, u, a, e, n, f) {
    for (var i = !1; t !== null; ) {
      if (t.tag === 5) {
        var c = t.stateNode;
        if (n !== null && Pl < n.length) {
          var m = n[Pl], S = io(c);
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
        (l.flags & 4) !== 0 && zd(
          c,
          Pl === 0 ? u : u + "_" + Pl,
          e
        ), i && (l.flags & 4) !== 0 || (Jt === null && (Jt = []), Jt.push(
          c,
          Pl === 0 ? a : a + "_" + Pl,
          t.memoizedProps
        )), Pl++;
      } else (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && f ? l.flags |= t.flags & 32 : Cc(
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
  function As(l, t) {
    for (l = l.child; l !== null; ) {
      if (l.tag === 30) {
        var u = l.memoizedProps, a = l.stateNode, e = eu(u, a), n = nu(u.default, u.update), f;
        f = l.memoizedState, l.memoizedState = null, a = l;
        var i = l.child;
        Pl = 0, e = Cc(
          a,
          i,
          e,
          e,
          n,
          f,
          !1
        ), (l.flags & 4) !== 0 && e && ka(l, u.onUpdate);
      } else
        (l.subtreeFlags & 33554432) !== 0 && As(l);
      l = l.sibling;
    }
  }
  var Yl = !1, sl = !1, $t = !1, Uc = !1, Ms = typeof WeakSet == "function" ? WeakSet : Set, ql = null, Ft = !1, Ve = !1, vf = !1, Rc = !1;
  function Py(l, t, u) {
    if (l = l.containerInfo, uo = ce, l = Rr(l), gi(l)) {
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
            var i = 0, c = -1, m = -1, S = 0, z = 0, v = l, g = null;
            t: for (; ; ) {
              for (var N; v !== a || n !== 0 && v.nodeType !== 3 || (c = i + n), v !== f || e !== 0 && v.nodeType !== 3 || (m = i + e), v.nodeType === 3 && (i += v.nodeValue.length), (N = v.firstChild) !== null; )
                g = v, v = N;
              for (; ; ) {
                if (v === l) break t;
                if (g === a && ++S === n && (c = i), g === f && ++z === e && (m = i), (N = v.nextSibling) !== null) break;
                v = g, g = v.parentNode;
              }
              v = N;
            }
            a = c === -1 || m === -1 ? null : { start: c, end: m };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (ao = { focusedElem: l, selectionRange: a }, ce = !1, u = (u & 335544064) === u, ql = t, t = u ? 9270 : 1024; ql !== null; ) {
      if (l = ql, u && (a = l.deletions, a !== null))
        for (n = 0; n < a.length; n++)
          u && Mc(a[n]);
      if (l.alternate === null && (l.flags & 2) !== 0)
        u && Es(l), yf(u);
      else {
        if (l.tag === 22) {
          if (a = l.alternate, l.memoizedState !== null) {
            a !== null && a.memoizedState === null && u && Mc(a), yf(u);
            continue;
          } else if (a !== null && a.memoizedState !== null) {
            u && Es(l), yf(u);
            continue;
          }
        }
        a = l.child, (l.subtreeFlags & t) !== 0 && a !== null ? (a.return = l, ql = a) : (u && Os(l), yf(u));
      }
    }
    dt = null;
  }
  function yf(l) {
    for (; ql !== null; ) {
      var t = ql, u = l, a = t.alternate, e = t.flags;
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
              var f = va(
                t.type,
                e
              );
              u = n.getSnapshotBeforeUpdate(
                f,
                a
              ), n.__reactInternalSnapshotBeforeUpdate = u;
            } catch (i) {
              vl(t, t.return, i);
            }
          }
          break;
        case 3:
          if ((e & 1024) !== 0) {
            if (a = t.stateNode.containerInfo, u = a.nodeType, u === 9)
              ro(a);
            else if (u === 1)
              switch (a.nodeName) {
                case "HEAD":
                case "HTML":
                case "BODY":
                  ro(a);
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
          ), e = t.memoizedProps, e = nu(e.default, e.update), e !== "none" && La(
            a,
            u,
            e,
            a.memoizedState = [],
            !0
          ));
          break;
        default:
          if ((e & 1024) !== 0) throw Error(r(163));
      }
      if (a = t.sibling, a !== null) {
        a.return = t.return, ql = a;
        break;
      }
      ql = t.return;
    }
  }
  function Ds(l, t, u) {
    var a = u.flags;
    switch (u.tag) {
      case 0:
      case 11:
      case 15:
        Wt(l, u), a & 4 && Qe(5, u);
        break;
      case 1:
        if (Wt(l, u), a & 4)
          if (l = u.stateNode, t === null)
            try {
              l.componentDidMount();
            } catch (f) {
              vl(u, u.return, f);
            }
          else {
            var e = va(
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
              vl(
                u,
                u.return,
                f
              );
            }
          }
        a & 64 && hs(u), a & 512 && Kt(u, u.return);
        break;
      case 3:
        if (Wt(l, u), a & 64 && (l = u.updateQueue, l !== null)) {
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
            n0(l, t);
          } catch (f) {
            vl(u, u.return, f);
          }
        }
        break;
      case 27:
        t === null && a & 4 && bs(u);
      case 26:
      case 5:
        Wt(l, u), t === null && a & 4 && Ec(u), a & 512 && Kt(u, u.return);
        break;
      case 12:
        Wt(l, u);
        break;
      case 31:
        Wt(l, u), a & 4 && ps(l, u);
        break;
      case 13:
        Wt(l, u), a & 4 && Hs(l, u), a & 64 && (l = u.memoizedState, l !== null && (l = l.dehydrated, l !== null && (u = sm.bind(
          null,
          u
        ), Jm(l, u))));
        break;
      case 22:
        if (a = u.memoizedState !== null || Yl, !a) {
          var n = t !== null && t.memoizedState !== null || sl;
          t = Yl, e = sl, Yl = a, (sl = n) && !e ? (a = 2, (u.subtreeFlags & 8772) !== 0 && (a |= 1), Bt(
            l,
            u,
            a
          )) : Wt(l, u), Yl = t, sl = e;
        }
        break;
      case 30:
        Wt(l, u), a & 512 && Kt(u, u.return);
        break;
      case 7:
        a & 512 && Kt(u, u.return);
      default:
        Wt(l, u);
    }
  }
  function pc(l, t) {
    for (l = l.child; l !== null; )
      Cs(l, t), l = l.sibling;
  }
  function Cs(l, t) {
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
          vl(l, l.return, c);
        }
        Hc(l, t);
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
          t ? Ed(i, !0) : Ed(l.stateNode, !1);
        } catch (c) {
          vl(l, l.return, c);
        }
        break;
      case 22:
      case 23:
        l.memoizedState === null && pc(l, t);
        break;
      default:
        pc(l, t);
    }
  }
  function Hc(l, t) {
    if (l.subtreeFlags & 67108864)
      for (l = l.child; l !== null; ) {
        l: {
          var u = l, a = t;
          switch (u.tag) {
            case 4:
              Cs(u, a);
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
  function Us(l) {
    var t = l.alternate;
    t !== null && (l.alternate = null, Us(t)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (t = l.stateNode, t !== null && Sn(t)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var zl = null, lt = !1;
  function pt(l, t, u) {
    for (u = u.child; u !== null; )
      Rs(l, t, u), u = u.sibling;
  }
  function Rs(l, t, u) {
    if (it && typeof it.onCommitFiberUnmount == "function")
      try {
        it.onCommitFiberUnmount(de, u);
      } catch {
      }
    switch (u.tag) {
      case 26:
        sl || Vl(u, t), pt(
          l,
          t,
          u
        ), u.memoizedState ? u.memoizedState.count-- : u.stateNode && !sl && (u = u.stateNode, u.parentNode.removeChild(u));
        break;
      case 27:
        sl || Vl(u, t), Ze(u);
        var a = zl, e = lt;
        Xu(u.type) && (zl = u.stateNode, lt = !1), pt(
          l,
          t,
          u
        ), Yd(
          u.stateNode,
          u.type,
          u.memoizedProps
        ), zl = a, lt = e;
        break;
      case 5:
        sl || Vl(u, t), Ze(u);
      case 6:
        if (u.tag === 6 && Ze(u), a = zl, e = lt, zl = null, pt(
          l,
          t,
          u
        ), zl = a, lt = e, zl !== null)
          if (lt)
            try {
              (zl.nodeType === 9 ? zl.body : zl.nodeName === "HTML" ? zl.ownerDocument.body : zl).removeChild(u.stateNode), fl = !0;
            } catch (n) {
              vl(
                u,
                t,
                n
              );
            }
          else
            try {
              zl.removeChild(u.stateNode), fl = !0;
            } catch (n) {
              vl(
                u,
                t,
                n
              );
            }
        break;
      case 18:
        zl !== null && (lt ? (l = zl, bd(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          u.stateNode
        ), oe(l)) : bd(zl, u.stateNode));
        break;
      case 4:
        a = zl, e = lt, zl = u.stateNode.containerInfo, lt = !0, pt(
          l,
          t,
          u
        ), zl = a, lt = e;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Hu(2, u, t), sl || Hu(4, u, t), pt(
          l,
          t,
          u
        );
        break;
      case 1:
        sl || (Vl(u, t), a = u.stateNode, typeof a.componentWillUnmount == "function" && gs(
          u,
          t,
          a
        )), pt(
          l,
          t,
          u
        );
        break;
      case 21:
        pt(
          l,
          t,
          u
        );
        break;
      case 22:
        sl = (a = sl) || u.memoizedState !== null, pt(
          l,
          t,
          u
        ), sl = a;
        break;
      case 30:
        Vl(u, t), pt(
          l,
          t,
          u
        );
        break;
      case 7:
        sl || Vl(u, t), pt(
          l,
          t,
          u
        );
        break;
      default:
        pt(
          l,
          t,
          u
        );
    }
  }
  function ps(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null))) {
      l = l.dehydrated;
      try {
        oe(l);
      } catch (u) {
        vl(t, t.return, u);
      }
    }
  }
  function Hs(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        oe(l);
      } catch (u) {
        vl(t, t.return, u);
      }
  }
  function lm(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var t = l.stateNode;
        return t === null && (t = l.stateNode = new Ms()), t;
      case 22:
        return l = l.stateNode, t = l._retryCache, t === null && (t = l._retryCache = new Ms()), t;
      default:
        throw Error(r(435, l.tag));
    }
  }
  function mf(l, t) {
    var u = lm(l);
    t.forEach(function(a) {
      if (!u.has(a)) {
        u.add(a);
        var e = dm.bind(null, l, a);
        a.then(e, e);
      }
    });
  }
  function Fl(l, t, u) {
    var a = t.deletions;
    if (a !== null)
      for (var e = 0; e < a.length; e++) {
        var n = a[e], f = l, i = t, c = i;
        l: for (; c !== null; ) {
          switch (c.tag) {
            case 27:
              if (Xu(c.type)) {
                zl = c.stateNode, lt = !1;
                break l;
              }
              break;
            case 5:
              zl = c.stateNode, lt = !1;
              break l;
            case 3:
            case 4:
              zl = c.stateNode.containerInfo, lt = !0;
              break l;
          }
          c = c.return;
        }
        if (zl === null) throw Error(r(160));
        Rs(f, i, n), zl = null, lt = !1, f = n.alternate, f !== null && (f.return = null), n.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        Bs(t, l, u), t = t.sibling;
  }
  var Ht = null;
  function Bs(l, t, u) {
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
        Fl(t, l, u), Wl(l), e & 4 && (Hu(3, l, l.return), Qe(3, l), Hu(5, l, l.return));
        break;
      case 1:
        Fl(t, l, u), Wl(l), e & 512 && (sl || a === null || Vl(a, a.return)), e & 64 && Yl && (l = l.updateQueue, l !== null && (t = l.callbacks, t !== null && (u = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = u === null ? t : u.concat(t))));
        break;
      case 26:
        if (n = Ht, Fl(t, l, u), Wl(l), e & 512 && (sl || a === null || Vl(a, a.return)), e & 4)
          if (e = a !== null ? a.memoizedState : null, u = l.memoizedState, a === null)
            if (u === null)
              if (l.stateNode === null)
                if (Yl)
                  l.stateNode = gd(
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
                        a = e.getElementsByTagName("title")[0], (!a || a[me] || a[Gl] || a.namespaceURI === "http://www.w3.org/2000/svg" || a.hasAttribute("itemprop")) && (a = e.createElement(t), e.head.insertBefore(
                          a,
                          e.querySelector("head > title")
                        )), Ll(a, t, u), a[Gl] = l, Hl(a), t = a;
                        break l;
                      case "link":
                        if (n = Qd(
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
                        a = e.createElement(t), Ll(a, t, u), e.head.appendChild(a);
                        break;
                      case "meta":
                        if (n = Qd(
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
                        a = e.createElement(t), Ll(a, t, u), e.head.appendChild(a);
                        break;
                      default:
                        throw Error(r(468, t));
                    }
                    a[Gl] = l, Hl(a), t = a;
                  }
                  l.stateNode = t;
                }
              else
                Yl || So(n, l.type, l.stateNode);
            else
              l.stateNode = Xd(
                n,
                u,
                l.memoizedProps
              );
          else
            e !== u ? (e === null ? (t = a.stateNode, t === null || sl || t.parentNode.removeChild(t)) : e.count--, u === null ? Yl || So(n, l.type, l.stateNode) : Xd(n, u, l.memoizedProps)) : u === null && l.stateNode !== null && zc(
              l,
              l.memoizedProps,
              a.memoizedProps
            );
        break;
      case 27:
        Fl(t, l, u), Wl(l), e & 512 && (sl || a === null || Vl(a, a.return)), a !== null && e & 4 && zc(
          l,
          l.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (n = $t, $t = !1, Fl(t, l, u), $t = n, Wl(l), e & 512 && (sl || a === null || Vl(a, a.return)), l.flags & 32) {
          t = l.stateNode;
          try {
            Aa(t, ""), fl = !0;
          } catch (S) {
            vl(l, l.return, S);
          }
        }
        e & 4 && l.stateNode != null && (t = l.memoizedProps, zc(
          l,
          t,
          a !== null ? a.memoizedProps : t
        )), e & 1024 && (Uc = !0);
        break;
      case 6:
        if (Fl(t, l, u), Wl(l), e & 4) {
          if (l.stateNode === null)
            throw Error(r(162));
          t = l.memoizedProps, u = l.stateNode;
          try {
            u.nodeValue = t, fl = !0;
          } catch (S) {
            vl(l, l.return, S);
          }
        }
        break;
      case 3:
        if (fl = !1, Uf = null, n = Ht, Ht = ke(t.containerInfo), Fl(t, l, u), Ht = n, Wl(l), e & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            oe(t.containerInfo);
          } catch (S) {
            vl(l, l.return, S);
          }
        Uc && (Uc = !1, Ys(l)), fl = !1;
        break;
      case 4:
        e = $t, $t = Yl, a = tr(), n = Ht, Ht = ke(
          l.stateNode.containerInfo
        ), Fl(t, l, u), Wl(l), Ht = n, fl && Ve && (vf = !0), fl = a, $t = e;
        break;
      case 12:
        Fl(t, l, u), Wl(l);
        break;
      case 31:
        Fl(t, l, u), Wl(l), e & 4 && (t = l.updateQueue, t !== null && (l.updateQueue = null, mf(l, t)));
        break;
      case 13:
        Fl(t, l, u), Wl(l), l.child.flags & 8192 && l.memoizedState !== null != (a !== null && a.memoizedState !== null) && (Sf = ft()), e & 4 && (t = l.updateQueue, t !== null && (l.updateQueue = null, mf(l, t)));
        break;
      case 22:
        n = l.memoizedState !== null, f = a !== null && a.memoizedState !== null;
        var i = Yl, c = sl, m = $t;
        Yl = i || n, $t = m || n, sl = c || f, Fl(t, l, u), sl = c, $t = m, Yl = i, Wl(l), e & 8192 && (t = l.stateNode, t._visibility = n ? t._visibility & -2 : t._visibility | 1, !n || a === null || f || Yl || sl || (t = f || sl, u = Yl, a = sl, Yl = n || Yl, sl = t, Bu(l, 2), Yl = u, sl = a), !n && $t || pc(l, n)), e & 4 && (t = l.updateQueue, t !== null && (u = t.retryQueue, u !== null && (t.retryQueue = null, mf(l, u))));
        break;
      case 19:
        Fl(t, l, u), Wl(l), e & 4 && (t = l.updateQueue, t !== null && (l.updateQueue = null, mf(l, t)));
        break;
      case 30:
        e & 512 && (sl || a === null || Vl(a, a.return)), e = tr(), n = Ve, f = (u & 335544064) === u, i = l.memoizedProps, Ve = f && nu(
          i.default,
          i.update
        ) !== "none", Fl(t, l, u), Wl(l), f && a !== null && fl && (l.flags |= 4), Ve = n, fl = e;
        break;
      case 21:
        break;
      case 7:
        e & 512 && (sl || a === null || Vl(a, a.return)), a && a.stateNode !== null && (a.stateNode._fragmentFiber = l);
      default:
        Fl(t, l, u), Wl(l);
    }
  }
  function Wl(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        for (var u, a = l.return; a !== null; ) {
          if (Ts(a)) {
            u = a;
            break;
          }
          a = a.return;
        }
        a = null;
        for (var e = l.return; e !== null; ) {
          if (bc(e)) {
            var n = e.stateNode;
            a === null ? a = [n] : a.push(n);
          }
          if (Tc(e)) break;
          e = e.return;
        }
        var f = a;
        if (u == null) throw Error(r(160));
        switch (u.tag) {
          case 27:
            var i = u.stateNode, c = _c(l);
            of(
              l,
              c,
              i,
              f
            );
            break;
          case 5:
            var m = u.stateNode;
            u.flags & 32 && (Aa(m, ""), u.flags &= -33);
            var S = _c(l);
            of(
              l,
              S,
              m,
              f
            );
            break;
          case 3:
          case 4:
            var z = u.stateNode.containerInfo, v = _c(l);
            Oc(
              l,
              v,
              z,
              f
            );
            break;
          default:
            throw Error(r(161));
        }
      } catch (g) {
        vl(l, l.return, g);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function Ys(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var t = l;
        Ys(t), t.tag === 5 && t.flags & 1024 && (t = t.stateNode, ce = !0, t.reset(), ce = !1), l = l.sibling;
      }
  }
  function Ka(l, t) {
    if (t.subtreeFlags & 9270)
      for (t = t.child; t !== null; )
        qs(t, l), t = t.sibling;
    else As(t);
  }
  function qs(l, t) {
    var u = l.alternate;
    if (u === null) Nc(l, !1);
    else
      switch (l.tag) {
        case 3:
          if (Rc = Ft = !1, zs(), Ka(t, l), !Ft && !vf) {
            if (l = Jt, l !== null)
              for (var a = 0; a < l.length; a += 3) {
                u = l[a];
                var e = l[a + 1];
                _d(u, l[a + 2]), u = u.ownerDocument.documentElement, u !== null && u.animate(
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
            )), Rc = !0;
          }
          Jt = null;
          break;
        case 5:
          Ka(t, l);
          break;
        case 4:
          a = Ft, Ft = !1, Ka(t, l), Ft && (vf = !0), Ft = a;
          break;
        case 22:
          l.memoizedState === null && (u.memoizedState !== null ? Nc(l, !1) : Ka(t, l));
          break;
        case 30:
          a = Ft, e = zs(), Ft = !1, Ka(t, l), Ft && (l.flags |= 4);
          var n = l.memoizedProps, f = l.stateNode;
          t = eu(n, f), f = eu(u.memoizedProps, f);
          var i = nu(n.default, n.update);
          i === "none" ? t = !1 : (n = u.memoizedState, u.memoizedState = null, u = l.child, Pl = 0, t = Cc(
            l,
            u,
            t,
            f,
            i,
            n,
            !0
          ), Pl !== (n === null ? 0 : n.length) && (l.flags |= 32)), (l.flags & 4) !== 0 && t ? (ka(
            l,
            l.memoizedProps.onUpdate
          ), Jt = e) : e !== null && (e.push.apply(e, Jt), Jt = e), Ft = (l.flags & 32) !== 0 ? !0 : a;
          break;
        default:
          Ka(t, l);
      }
  }
  function Wt(l, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        Ds(l, t.alternate, t), t = t.sibling;
  }
  function Bu(l, t) {
    for (l = l.child; l !== null; ) {
      var u = l, a = t;
      switch (u.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Hu(4, u, u.return), Bu(
            u,
            a
          );
          break;
        case 1:
          Vl(u, u.return);
          var e = u.stateNode;
          typeof e.componentWillUnmount == "function" && gs(
            u,
            u.return,
            e
          ), Bu(
            u,
            a
          );
          break;
        case 27:
          (a & 2) !== 0 && Yd(
            u.stateNode,
            u.type,
            u.memoizedProps
          );
        case 5:
          Vl(u, u.return), u.tag !== 5 && u.tag !== 27 || Ze(u), Bu(
            u,
            a
          );
          break;
        case 6:
          Ze(u);
          break;
        case 26:
          Vl(u, u.return), e = u.stateNode, u.memoizedState !== null || e === null || sl || e.parentNode.removeChild(e), Bu(
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
          Vl(u, u.return), Bu(
            u,
            a
          );
          break;
        case 7:
          Vl(u, u.return);
        default:
          Bu(
            u,
            a
          );
      }
      l = l.sibling;
    }
  }
  function Bt(l, t, u) {
    for (u = (t.subtreeFlags & 8772) !== 0 ? u : u & -2, t = t.child; t !== null; ) {
      var a = t.alternate, e = l, n = t, f = n.flags, i = (u & 1) !== 0;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Bt(
            e,
            n,
            u
          ), Qe(4, n);
          break;
        case 1:
          if (Bt(
            e,
            n,
            u
          ), a = n, e = a.stateNode, typeof e.componentDidMount == "function")
            try {
              e.componentDidMount();
            } catch (S) {
              vl(a, a.return, S);
            }
          if (a = n, e = a.updateQueue, e !== null) {
            var c = a.stateNode;
            try {
              var m = e.shared.hiddenCallbacks;
              if (m !== null)
                for (e.shared.hiddenCallbacks = null, e = 0; e < m.length; e++)
                  e0(m[e], c);
            } catch (S) {
              vl(a, a.return, S);
            }
          }
          i && f & 64 && hs(n), Kt(n, n.return);
          break;
        case 27:
          (u & 2) !== 0 && bs(n);
        case 5:
          n.tag !== 5 && n.tag !== 27 || Ss(n), Bt(
            e,
            n,
            u
          ), i && a === null && f & 4 && Ec(n), Kt(n, n.return);
          break;
        case 6:
          Ss(n);
          break;
        case 26:
          c = n.stateNode, n.memoizedState !== null || c === null || Yl || So(
            ke(c.ownerDocument),
            n.type,
            c
          ), Bt(
            e,
            n,
            u
          ), i && a === null && f & 4 && Ec(n), Kt(n, n.return);
          break;
        case 12:
          Bt(
            e,
            n,
            u
          );
          break;
        case 31:
          Bt(
            e,
            n,
            u
          ), i && f & 4 && ps(e, n);
          break;
        case 13:
          Bt(
            e,
            n,
            u
          ), i && f & 4 && Hs(e, n);
          break;
        case 22:
          n.memoizedState === null && Bt(
            e,
            n,
            u
          ), Kt(n, n.return);
          break;
        case 30:
          Bt(
            e,
            n,
            u
          ), Kt(n, n.return);
          break;
        case 7:
          Kt(n, n.return);
        default:
          Bt(
            e,
            n,
            u
          );
      }
      t = t.sibling;
    }
  }
  function Bc(l, t) {
    var u = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== u && (l != null && l.refCount++, u != null && De(u));
  }
  function Yc(l, t) {
    l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && De(l));
  }
  function Mt(l, t, u, a) {
    var e = (u & 335544064) === u;
    if (t.subtreeFlags & (e ? 10262 : 10256))
      for (t = t.child; t !== null; )
        js(
          l,
          t,
          u,
          a
        ), t = t.sibling;
    else e && Ns(t);
  }
  function js(l, t, u, a) {
    var e = (u & 335544064) === u;
    e && t.alternate === null && t.return !== null && t.return.alternate !== null && df(t);
    var n = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Mt(
          l,
          t,
          u,
          a
        ), n & 2048 && Qe(9, t);
        break;
      case 1:
        Mt(
          l,
          t,
          u,
          a
        );
        break;
      case 3:
        Mt(
          l,
          t,
          u,
          a
        ), e && Rc && (l = l.containerInfo, l = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, l.style.viewTransitionName === "root" && (l.style.viewTransitionName = ""), l = l.ownerDocument.documentElement, l !== null && l.style.viewTransitionName === "none" && (l.style.viewTransitionName = "")), n & 2048 && (n = null, t.alternate !== null && (n = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== n && (t.refCount++, n != null && De(n)));
        break;
      case 12:
        if (n & 2048) {
          Mt(
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
          } catch (m) {
            vl(t, t.return, m);
          }
        } else
          Mt(
            l,
            t,
            u,
            a
          );
        break;
      case 31:
        Mt(
          l,
          t,
          u,
          a
        );
        break;
      case 13:
        Mt(
          l,
          t,
          u,
          a
        );
        break;
      case 23:
        break;
      case 22:
        f = t.stateNode, i = t.alternate, t.memoizedState !== null ? (e && i !== null && i.memoizedState === null && df(i), f._visibility & 2 ? Mt(
          l,
          t,
          u,
          a
        ) : Le(
          l,
          t
        )) : (e && i !== null && i.memoizedState !== null && df(t), f._visibility & 2 ? Mt(
          l,
          t,
          u,
          a
        ) : (f._visibility |= 2, Ja(
          l,
          t,
          u,
          a,
          (t.subtreeFlags & 10256) !== 0 || !1
        ))), n & 2048 && Bc(i, t);
        break;
      case 24:
        Mt(
          l,
          t,
          u,
          a
        ), n & 2048 && Yc(t.alternate, t);
        break;
      case 30:
        e && (n = t.alternate, n !== null && (wt(n.child, !0), wt(t.child, !0))), Mt(
          l,
          t,
          u,
          a
        );
        break;
      default:
        Mt(
          l,
          t,
          u,
          a
        );
    }
  }
  function Ja(l, t, u, a, e) {
    for (e = e && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var n = l, f = t, i = u, c = a, m = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          Ja(
            n,
            f,
            i,
            c,
            e
          ), Qe(8, f);
          break;
        case 23:
          break;
        case 22:
          var S = f.stateNode;
          f.memoizedState !== null ? S._visibility & 2 ? Ja(
            n,
            f,
            i,
            c,
            e
          ) : Le(
            n,
            f
          ) : (S._visibility |= 2, Ja(
            n,
            f,
            i,
            c,
            e
          )), e && m & 2048 && Bc(
            f.alternate,
            f
          );
          break;
        case 24:
          Ja(
            n,
            f,
            i,
            c,
            e
          ), e && m & 2048 && Yc(f.alternate, f);
          break;
        default:
          Ja(
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
  function Le(l, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var u = l, a = t, e = a.flags;
        switch (a.tag) {
          case 22:
            Le(u, a), e & 2048 && Bc(
              a.alternate,
              a
            );
            break;
          case 24:
            Le(u, a), e & 2048 && Yc(a.alternate, a);
            break;
          default:
            Le(u, a);
        }
        t = t.sibling;
      }
  }
  var ya = 8192;
  function ma(l, t, u) {
    if (l.subtreeFlags & ya)
      for (l = l.child; l !== null; )
        xs(
          l,
          t,
          u
        ), l = l.sibling;
  }
  function xs(l, t, u) {
    switch (l.tag) {
      case 26:
        ma(
          l,
          t,
          u
        ), l.flags & ya && (l.memoizedState !== null ? f1(
          u,
          Ht,
          l.memoizedState,
          l.memoizedProps
        ) : (l = l.stateNode, (t & 335544128) === t && Kd(u, l)));
        break;
      case 5:
        ma(
          l,
          t,
          u
        ), l.flags & ya && (l = l.stateNode, (t & 335544128) === t && Kd(u, l));
        break;
      case 3:
      case 4:
        var a = Ht;
        Ht = ke(l.stateNode.containerInfo), ma(
          l,
          t,
          u
        ), Ht = a;
        break;
      case 22:
        l.memoizedState === null && (a = l.alternate, a !== null && a.memoizedState !== null ? (a = ya, ya = 16777216, ma(
          l,
          t,
          u
        ), ya = a) : ma(
          l,
          t,
          u
        ));
        break;
      case 30:
        if ((l.flags & ya) !== 0 && (a = l.memoizedProps.name, a != null && a !== "auto")) {
          var e = l.stateNode;
          e.paired = null, dt === null && (dt = /* @__PURE__ */ new Map()), dt.set(a, e);
        }
        ma(
          l,
          t,
          u
        );
        break;
      default:
        ma(
          l,
          t,
          u
        );
    }
  }
  function Gs(l) {
    var t = l.alternate;
    if (t !== null && (l = t.child, l !== null)) {
      t.child = null;
      do
        t = l.sibling, l.sibling = null, l = t;
      while (l !== null);
    }
  }
  function Ke(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var u = 0; u < t.length; u++) {
          var a = t[u];
          ql = a, Qs(
            a,
            l
          );
        }
      Gs(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        Xs(l), l = l.sibling;
  }
  function Xs(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        Ke(l), l.flags & 2048 && Hu(9, l, l.return);
        break;
      case 3:
        Ke(l);
        break;
      case 12:
        Ke(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null && t._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (t._visibility &= -3, hf(l)) : Ke(l);
        break;
      default:
        Ke(l);
    }
  }
  function hf(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var u = 0; u < t.length; u++) {
          var a = t[u];
          ql = a, Qs(
            a,
            l
          );
        }
      Gs(l);
    }
    for (l = l.child; l !== null; ) {
      switch (t = l, t.tag) {
        case 0:
        case 11:
        case 15:
          Hu(8, t, t.return), hf(t);
          break;
        case 22:
          u = t.stateNode, u._visibility & 2 && (u._visibility &= -3, hf(t));
          break;
        default:
          hf(t);
      }
      l = l.sibling;
    }
  }
  function Qs(l, t) {
    for (; ql !== null; ) {
      var u = ql;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          Hu(8, u, t);
          break;
        case 23:
        case 22:
          if (u.memoizedState !== null && u.memoizedState.cachePool !== null) {
            var a = u.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          De(u.memoizedState.cache);
      }
      if (a = u.child, a !== null) a.return = u, ql = a;
      else
        l: for (u = l; ql !== null; ) {
          a = ql;
          var e = a.sibling, n = a.return;
          if (Us(a), a === u) {
            ql = null;
            break l;
          }
          if (e !== null) {
            e.return = n, ql = e;
            break l;
          }
          ql = n;
        }
    }
  }
  var tm = {
    getCacheForType: function(l) {
      var t = Xl(Ml), u = t.data.get(l);
      return u === void 0 && (u = l(), t.data.set(l, u)), u;
    },
    cacheSignal: function() {
      return Xl(Ml).controller.signal;
    }
  }, um = typeof WeakMap == "function" ? WeakMap : Map, ol = 0, gl = null, W = null, k = 0, dl = 0, vt = null, Yu = !1, wa = !1, qc = !1, yu = 0, Nl = 0, qu = 0, ha = 0, gf = 0, yt = 0, $a = 0, Je = null, tt = null, jc = !1, Sf = 0, Zs = 0, Tf = 1 / 0, bf = null, ju = null, _l = 0, Yt = null, ga = null, It = 0, xc = 0, Gc = null, Vs = null, Fa = null, Wa = null, Ia = null, we = 0, Ef = null;
  function mt() {
    return (ol & 2) !== 0 && k !== 0 ? k & -k : R.T !== null ? Fc() : Jo();
  }
  function Ls() {
    if (yt === 0)
      if ((k & 536870912) === 0 || $) {
        var l = yn;
        yn <<= 1, (yn & 3932160) === 0 && (yn = 262144), yt = l;
      } else yt = 536870912;
    return l = Ql.current, l !== null && (l.flags |= 32), yt;
  }
  function ka(l, t) {
    if (t != null) {
      var u = l.stateNode, a = u.ref;
      a === null && (a = u.ref = Od(
        eu(l.memoizedProps, u)
      )), Wa === null && (Wa = []), Wa.push(t.bind(null, a));
    }
  }
  function ut(l, t, u) {
    (l === gl && (dl === 2 || dl === 9) || l.cancelPendingCommit !== null) && (Pa(l, 0), xu(
      l,
      k,
      yt,
      !1
    )), ye(l, u), ((ol & 2) === 0 || l !== gl) && (l === gl && ((ol & 2) === 0 && (ha |= u), Nl === 4 && xu(
      l,
      k,
      yt,
      !1
    )), kt(l));
  }
  function Ks(l, t, u) {
    if ((ol & 6) !== 0) throw Error(r(327));
    var a = !u && (t & 127) === 0 && (t & l.expiredLanes) === 0 || ve(l, t), e = a ? nm(l, t) : Qc(l, t, !0), n = a;
    do {
      if (e === 0) {
        wa && !a && xu(l, t, 0, !1);
        break;
      } else {
        if (u = l.current.alternate, n && !am(u)) {
          e = Qc(l, t, !1), n = !1;
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
              e = Je;
              var c = i.current.memoizedState.isDehydrated;
              if (c && (Pa(i, f).flags |= 256), f = Qc(
                i,
                f,
                !1
              ), f !== 2 && f !== 6) {
                if (qc && !c) {
                  i.errorRecoveryDisabledLanes |= n, ha |= n, e = 4;
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
          Pa(l, 0), xu(l, t, 0, !0);
          break;
        }
        l: {
          switch (a = l, n = e, n) {
            case 0:
            case 1:
              throw Error(r(345));
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
              throw Error(r(329));
          }
          if ((t & 62914560) === t && (e = Sf + 300 - ft(), 10 < e)) {
            if (xu(
              a,
              t,
              yt,
              !Yu
            ), hn(a, 0, !0) !== 0) break l;
            It = t, a.timeoutHandle = fo(
              Js.bind(
                null,
                a,
                u,
                tt,
                bf,
                jc,
                t,
                yt,
                ha,
                $a,
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
          Js(
            a,
            u,
            tt,
            bf,
            jc,
            t,
            yt,
            ha,
            $a,
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
  function Js(l, t, u, a, e, n, f, i, c, m, S, z, v, g) {
    l.timeoutHandle = -1;
    var N = t.subtreeFlags, U = (n & 335544064) === n;
    if (z = null, (U || N & 8192 || (N & 16785408) === 16785408) && (z = {
      stylesheets: null,
      count: 0,
      imgCount: 0,
      imgBytes: 0,
      suspenseyImages: [],
      waitingForImages: !0,
      waitingForViewTransition: !1,
      unsuspend: Zt
    }, dt = null, xs(
      t,
      n,
      z
    ), U && (N = z, U = l.containerInfo, U = (U.nodeType === 9 ? U : U.ownerDocument).__reactViewTransition, U != null && (N.count++, N.waitingForViewTransition = !0, N = tn.bind(N), U.finished.then(N, N))), N = (n & 62914560) === n ? Sf - ft() : (n & 4194048) === n ? Zs - ft() : 0, N = i1(
      z,
      N
    ), N !== null)) {
      It = n, l.cancelPendingCommit = N(
        ld.bind(
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
          m,
          S,
          z,
          null,
          v,
          g
        )
      ), xu(l, n, f, !m);
      return;
    }
    ld(
      l,
      t,
      n,
      u,
      a,
      e,
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
        for (var a = 0; a < u.length; a++) {
          var e = u[a], n = e.getSnapshot;
          e = e.value;
          try {
            if (!rt(n(), e)) return !1;
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
    t = Qo(l, t), t &= ~gf, t &= ~ha, l.suspendedLanes |= t, l.pingedLanes &= ~t, a && (l.warmLanes |= t), a = l.expirationTimes;
    for (var e = t; 0 < e; ) {
      var n = 31 - ct(e), f = 1 << n;
      a[n] = -1, e &= ~f;
    }
    u !== 0 && Vo(l, u, t);
  }
  function zf() {
    return (ol & 6) === 0 ? ($e(0), !1) : !0;
  }
  function Xc() {
    if (W !== null) {
      if (dl === 0)
        var l = W.return;
      else
        l = W, cu = ea = null, $i(l), Ga = null, Re = 0, l = W;
      for (; l !== null; )
        ms(l.alternate, l), l = l.return;
      W = null;
    }
  }
  function Pa(l, t) {
    var u = l.timeoutHandle;
    return u !== -1 && (l.timeoutHandle = -1, Mm(u)), u = l.cancelPendingCommit, u !== null && (l.cancelPendingCommit = null, u()), It = 0, Xc(), gl = l, W = u = fu(l.current, null), k = t, dl = 0, vt = null, Yu = !1, wa = ve(l, t), qc = !1, $a = yt = gf = ha = qu = Nl = 0, tt = Je = null, jc = !1, yu = Qo(l, t), Cn(), u;
  }
  function ws(l, t) {
    K = null, R.H = lf, t === xa || t === Xn ? (t = l0(), dl = 3) : t === Yi ? (t = l0(), dl = 4) : dl = t === oc ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, vt = t, W === null && (Nl = 1, tf(
      l,
      _t(t, l.current)
    ));
  }
  function $s() {
    var l = Ql.current;
    return l === null ? !0 : (k & 4194048) === k ? Jl === null : (k & 62914560) === k || (k & 536870912) !== 0 ? l === Jl : !1;
  }
  function Fs() {
    var l = R.H;
    return R.H = lf, l === null ? lf : l;
  }
  function Ws() {
    var l = R.A;
    return R.A = tm, l;
  }
  function _f() {
    Nl = 4, Yu || (k & 4194048) !== k && Ql.current !== null || (wa = !0), (qu & 134217727) === 0 && (ha & 134217727) === 0 || gl === null || xu(
      gl,
      k,
      yt,
      !1
    );
  }
  function Qc(l, t, u) {
    var a = ol;
    ol |= 2;
    var e = Fs(), n = Ws();
    (gl !== l || k !== t) && (bf = null, Pa(l, t)), t = !1;
    var f = Nl;
    l: do
      try {
        if (dl !== 0 && W !== null) {
          var i = W, c = vt;
          switch (dl) {
            case 8:
              Xc(), f = 6;
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              Ql.current === null && (t = !0);
              var m = dl;
              if (dl = 0, vt = null, le(l, i, c, m), u && wa) {
                f = 0;
                break l;
              }
              break;
            default:
              m = dl, dl = 0, vt = null, le(l, i, c, m);
          }
        }
        em(), f = Nl;
        break;
      } catch (S) {
        ws(l, S);
      }
    while (!0);
    return t && l.shellSuspendCounter++, cu = ea = null, ol = a, R.H = e, R.A = n, W === null && (gl = null, k = 0, Cn()), f;
  }
  function em() {
    for (; W !== null; ) Is(W);
  }
  function nm(l, t) {
    var u = ol;
    ol |= 2;
    var a = Fs(), e = Ws();
    gl !== l || k !== t ? (bf = null, Tf = ft() + 500, Pa(l, t)) : wa = ve(
      l,
      t
    );
    l: do
      try {
        if (dl !== 0 && W !== null) {
          t = W;
          var n = vt;
          t: switch (dl) {
            case 1:
              dl = 0, vt = null, le(l, t, n, 1);
              break;
            case 2:
            case 9:
              if (kr(n)) {
                dl = 0, vt = null, ks(t);
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
              kr(n) ? (dl = 0, vt = null, ks(t)) : (dl = 0, vt = null, le(l, t, n, 7));
              break;
            case 5:
              var f = null;
              switch (W.tag) {
                case 26:
                  f = W.memoizedState;
                case 5:
                case 27:
                  var i = W;
                  if (f ? Vd(f) : i.stateNode.complete) {
                    dl = 0, vt = null;
                    var c = i.sibling;
                    if (c !== null) W = c;
                    else {
                      var m = i.return;
                      m !== null ? (W = m, Of(m)) : W = null;
                    }
                    break t;
                  }
              }
              dl = 0, vt = null, le(l, t, n, 5);
              break;
            case 6:
              dl = 0, vt = null, le(l, t, n, 6);
              break;
            case 8:
              Xc(), Nl = 6;
              break l;
            default:
              throw Error(r(462));
          }
        }
        fm();
        break;
      } catch (S) {
        ws(l, S);
      }
    while (!0);
    return cu = ea = null, R.H = a, R.A = e, ol = u, W !== null ? 0 : (gl = null, k = 0, Cn(), Nl);
  }
  function fm() {
    for (; W !== null && !_v(); )
      Is(W);
  }
  function Is(l) {
    var t = vs(l.alternate, l, yu);
    l.memoizedProps = l.pendingProps, t === null ? Of(l) : W = t;
  }
  function ks(l) {
    var t = l, u = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = fs(
          u,
          t,
          t.pendingProps,
          t.type,
          void 0,
          k
        );
        break;
      case 11:
        t = fs(
          u,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          k
        );
        break;
      case 5:
        $i(t);
        var a = t;
        a === Bl && ($ ? (Yn(a), a.tag === 5 && a.stateNode != null && (Tl = a.stateNode)) : (Yn(a), $ = !0));
      default:
        ms(u, t), t = W = Qr(t, yu), t = vs(u, t, yu);
    }
    l.memoizedProps = l.pendingProps, t === null ? Of(l) : W = t;
  }
  function le(l, t, u, a) {
    cu = ea = null, $i(t), Ga = null, Re = 0;
    var e = t.return;
    try {
      if (wy(
        l,
        e,
        t,
        u,
        k
      )) {
        Nl = 1, tf(
          l,
          _t(u, l.current)
        ), W = null;
        return;
      }
    } catch (n) {
      if (e !== null) throw W = e, n;
      Nl = 1, tf(
        l,
        _t(u, l.current)
      ), W = null;
      return;
    }
    t.flags & 32768 ? ($ || a === 1 ? l = !0 : wa || (k & 536870912) !== 0 ? l = !1 : (Yu = l = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = Ql.current, a !== null && a.tag === 13 && (a.flags |= 16384))), Ps(t, l)) : Of(t);
  }
  function Of(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        Ps(
          t,
          Yu
        );
        return;
      }
      l = t.return;
      var u = Iy(
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
    Nl === 0 && (Nl = 5);
  }
  function Ps(l, t) {
    do {
      var u = ky(l.alternate, l);
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
    Nl = 6, W = null;
  }
  function ld(l, t, u, a, e, n, f, i, c, m, S, z) {
    l.cancelPendingCommit = null;
    do
      Nf();
    while (_l !== 0);
    if ((ol & 6) !== 0) throw Error(r(327));
    if (t !== null) {
      if (t === l.current) throw Error(r(177));
      l === gl && (W = gl = null, k = 0), ga = t, Yt = l, It = u, Gc = e, Vs = a, im(
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
  function im(l, t, u, a, e, n, f) {
    var i = t.lanes | t.childLanes;
    if (xc = i, i |= zi, Hv(
      l,
      u,
      i,
      a,
      e,
      n
    ), Wa = null, (u & 335544064) === u ? (Ia = Yy(l), a = 10262) : (Ia = null, a = 10256), (t.subtreeFlags & a) !== 0 || (t.flags & a) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, vm(dn, function() {
      return Kc(), null;
    })) : (l.callbackNode = null, l.callbackPriority = 0), rf = !1, a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
      a = R.T, R.T = null, e = Z.p, Z.p = 2, n = ol, ol |= 4;
      try {
        Py(l, t, u);
      } finally {
        ol = n, Z.p = e, R.T = a;
      }
    }
    _l = 1, rf ? Fa = Hm(
      f,
      l.containerInfo,
      Ia,
      Zc,
      Vc,
      om,
      Lc,
      Kc,
      cm
    ) : (Zc(), Vc(), Lc());
  }
  function cm(l) {
    if (_l !== 0) {
      var t = Yt.onRecoverableError;
      t(l, { componentStack: null });
    }
  }
  function om() {
    _l === 3 && (_l = 0, qs(ga, Yt), _l = 4);
  }
  function Zc() {
    if (_l === 1) {
      _l = 0;
      var l = Yt, t = ga, u = It, a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        a = R.T, R.T = null;
        var e = Z.p;
        Z.p = 2;
        var n = ol;
        ol |= 4;
        try {
          Ve = vf = !1, Bs(t, l, u), u = ao;
          var f = Rr(l.containerInfo), i = u.focusedElem, c = u.selectionRange;
          if (f !== i && i && i.ownerDocument && Ur(
            i.ownerDocument.documentElement,
            i
          )) {
            if (c !== null && gi(i)) {
              var m = c.start, S = c.end;
              if (S === void 0 && (S = m), "selectionStart" in i)
                i.selectionStart = m, i.selectionEnd = Math.min(
                  S,
                  i.value.length
                );
              else {
                var z = i.ownerDocument || document, v = z && z.defaultView || window;
                if (v.getSelection) {
                  var g = v.getSelection(), N = i.textContent.length, U = Math.min(c.start, N), J = c.end === void 0 ? U : Math.min(c.end, N);
                  !g.extend && U > J && (f = J, J = U, U = f);
                  var y = Cr(
                    i,
                    U
                  ), o = Cr(
                    i,
                    J
                  );
                  if (y && o && (g.rangeCount !== 1 || g.anchorNode !== y.node || g.anchorOffset !== y.offset || g.focusNode !== o.node || g.focusOffset !== o.offset)) {
                    var h = z.createRange();
                    h.setStart(y.node, y.offset), g.removeAllRanges(), U > J ? (g.addRange(h), g.extend(o.node, o.offset)) : (h.setEnd(o.node, o.offset), g.addRange(h));
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
          ce = !!uo, ao = uo = null;
        } finally {
          ol = n, Z.p = e, R.T = a;
        }
      }
      l.current = t, _l = 2;
    }
  }
  function Vc() {
    if (_l === 2) {
      _l = 0;
      var l = Yt, t = ga, u = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || u) {
        u = R.T, R.T = null;
        var a = Z.p;
        Z.p = 2;
        var e = ol;
        ol |= 4;
        try {
          Ds(l, t.alternate, t);
        } finally {
          ol = e, Z.p = a, R.T = u;
        }
      }
      _l = 3;
    }
  }
  function Lc() {
    if (_l === 4 || _l === 3) {
      _l = 0;
      var l = Fa;
      Fa = null, Ov();
      var t = Yt, u = ga, a = It, e = Vs, n = (a & 335544064) === a ? 10262 : 10256;
      if ((u.subtreeFlags & n) !== 0 || (u.flags & n) !== 0 ? _l = 5 : (_l = 0, ga = Yt = null, td(t, t.pendingLanes)), n = t.pendingLanes, n === 0 && (ju = null), Pf(a), u = u.stateNode, it && typeof it.onCommitFiberRoot == "function")
        try {
          it.onCommitFiberRoot(
            de,
            u,
            void 0,
            (u.current.flags & 128) === 128
          );
        } catch {
        }
      if (e !== null) {
        u = R.T, n = Z.p, Z.p = 2, R.T = null;
        try {
          for (var f = t.onRecoverableError, i = 0; i < e.length; i++) {
            var c = e[i];
            f(c.value, {
              componentStack: c.stack
            });
          }
        } finally {
          R.T = u, Z.p = n;
        }
      }
      if (e = Wa, f = Ia, Ia = null, e !== null && (Wa = null, f === null && (f = []), l !== null))
        for (c = 0; c < e.length; c++)
          u = (0, e[c])(
            f
          ), u !== void 0 && l.finished.finally(u);
      (It & 3) !== 0 && Nf(), kt(t), n = t.pendingLanes, (a & 261930) !== 0 && (n & 42) !== 0 ? t === Ef ? we++ : (we = 0, Ef = t) : (we = 0, Ef = null), $e(0);
    }
  }
  function td(l, t) {
    (l.pooledCacheLanes &= t) === 0 && (t = l.pooledCache, t != null && (l.pooledCache = null, De(t)));
  }
  function Nf() {
    return Fa !== null && (Fa.skipTransition(), Fa = null), Zc(), Vc(), Lc(), Kc();
  }
  function Kc() {
    if (_l !== 5) return !1;
    var l = Yt, t = xc;
    xc = 0;
    var u = Pf(It), a = R.T, e = Z.p;
    try {
      Z.p = 32 > u ? 32 : u, R.T = null, u = Gc, Gc = null;
      var n = Yt, f = It;
      if (_l = 0, ga = Yt = null, It = 0, (ol & 6) !== 0) throw Error(r(331));
      var i = ol;
      if (ol |= 4, Xs(n.current), js(
        n,
        n.current,
        f,
        u
      ), ol = i, $e(0, !1), it && typeof it.onPostCommitFiberRoot == "function")
        try {
          it.onPostCommitFiberRoot(de, n);
        } catch {
        }
      return !0;
    } finally {
      Z.p = e, R.T = a, td(l, t);
    }
  }
  function ud(l, t, u) {
    t = _t(u, t), t = cc(l.stateNode, t, 2), l = Cu(l, t, 2), l !== null && (ye(l, 2), kt(l));
  }
  function vl(l, t, u) {
    if (l.tag === 3)
      ud(l, l, u);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          ud(
            t,
            l,
            u
          );
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (ju === null || !ju.has(a))) {
            l = _t(u, l), u = k0(2), a = Cu(t, u, 2), a !== null && (P0(
              u,
              a,
              t,
              l
            ), ye(a, 2), kt(a));
            break;
          }
        }
        t = t.return;
      }
  }
  function Jc(l, t, u) {
    var a = l.pingCache;
    if (a === null) {
      a = l.pingCache = new um();
      var e = /* @__PURE__ */ new Set();
      a.set(t, e);
    } else
      e = a.get(t), e === void 0 && (e = /* @__PURE__ */ new Set(), a.set(t, e));
    e.has(u) || (qc = !0, e.add(u), l = rm.bind(null, l, t, u), t.then(l, l));
  }
  function rm(l, t, u) {
    var a = l.pingCache;
    a !== null && a.delete(t), l.pingedLanes |= l.suspendedLanes & u, l.warmLanes &= ~u, gl === l && (k & u) === u && ((Nl === 4 || Nl === 3 && (k & 62914560) === k && 300 > ft() - Sf) && (ol & 2) === 0 ? Pa(l, 0) : gf |= u, $a === k && ($a = 0)), kt(l);
  }
  function ad(l, t) {
    t === 0 && (t = Zo()), l = ta(l, t), l !== null && (ye(l, t), kt(l));
  }
  function sm(l) {
    var t = l.memoizedState, u = 0;
    t !== null && (u = t.retryLane), ad(l, u);
  }
  function dm(l, t) {
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
        throw Error(r(314));
    }
    a !== null && a.delete(t), ad(l, u);
  }
  function vm(l, t) {
    return Ff(l, t);
  }
  var te = null, ue = null, wc = !1, Af = !1, $c = !1, Gu = 0;
  function kt(l) {
    l !== ue && l.next === null && (ue === null ? te = ue = l : ue = ue.next = l), Af = !0, wc || (wc = !0, mm());
  }
  function $e(l, t) {
    if (!$c && Af) {
      $c = !0;
      do
        for (var u = !1, a = te; a !== null; ) {
          if (l !== 0) {
            var e = a.pendingLanes;
            if (e === 0) var n = 0;
            else {
              var f = a.suspendedLanes, i = a.pingedLanes;
              n = (1 << 31 - ct(42 | l) + 1) - 1, n &= e & ~(f & ~i), n = n & 201326741 ? n & 201326741 | 1 : n ? n | 2 : 0;
            }
            n !== 0 && (u = !0, id(a, n));
          } else
            n = k, n = hn(
              a,
              a === gl ? n : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (n & 3) === 0 || ve(a, n) || (u = !0, id(a, n));
          a = a.next;
        }
      while (u);
      $c = !1;
    }
  }
  function ym() {
    ed();
  }
  function ed() {
    Af = wc = !1;
    var l = 0;
    Gu !== 0 && Am() && (l = Gu);
    for (var t = ft(), u = null, a = te; a !== null; ) {
      var e = a.next, n = nd(a, t);
      n === 0 ? (a.next = null, u === null ? te = e : u.next = e, e === null && (ue = u)) : (u = a, (l !== 0 || (n & 3) !== 0) && (Af = !0)), a = e;
    }
    _l !== 0 && _l !== 5 || $e(l), Gu !== 0 && (Gu = 0);
  }
  function nd(l, t) {
    for (var u = l.suspendedLanes, a = l.pingedLanes, e = l.expirationTimes, n = l.pendingLanes & -62914561; 0 < n; ) {
      var f = 31 - ct(n), i = 1 << f, c = e[f];
      c === -1 ? ((i & u) === 0 || (i & a) !== 0) && (e[f] = pv(i, t)) : c <= t && (l.expiredLanes |= i), n &= ~i;
    }
    if (t = gl, u = k, u = hn(
      l,
      l === t ? u : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), a = l.callbackNode, u === 0 || l === t && (dl === 2 || dl === 9) || l.cancelPendingCommit !== null)
      return a !== null && a !== null && Wf(a), l.callbackNode = null, l.callbackPriority = 0;
    if ((u & 3) === 0 || ve(l, u)) {
      if (t = u & -u, t === l.callbackPriority) return t;
      switch (a !== null && Wf(a), Pf(u)) {
        case 2:
        case 8:
          u = Go;
          break;
        case 32:
          u = dn;
          break;
        case 268435456:
          u = Xo;
          break;
        default:
          u = dn;
      }
      return a = fd.bind(null, l), u = Ff(u, a), l.callbackPriority = t, l.callbackNode = u, t;
    }
    return a !== null && a !== null && Wf(a), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function fd(l, t) {
    if (_l !== 0 && _l !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var u = l.callbackNode;
    if (Nf() && l.callbackNode !== u)
      return null;
    var a = k;
    return a = hn(
      l,
      l === gl ? a : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), a === 0 ? null : (Ks(l, a, t), nd(l, ft()), l.callbackNode != null && l.callbackNode === u ? fd.bind(null, l) : null);
  }
  function id(l, t) {
    if (Nf()) return null;
    Ks(l, t, !0);
  }
  function mm() {
    Dm(function() {
      (ol & 6) !== 0 ? Ff(
        xo,
        ym
      ) : ed();
    });
  }
  function Fc() {
    if (Gu === 0) {
      var l = ia;
      l === 0 && (l = vn, vn <<= 1, (vn & 261888) === 0 && (vn = 256)), Gu = l;
    }
    return Gu;
  }
  function cd(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : En(l);
  }
  function hm(l, t, u, a, e) {
    if (t === "submit" && u && u.stateNode === e) {
      var n = cd(
        (e[Il] || null).action
      ), f = a.submitter;
      f && (t = (t = f[Il] || null) ? cd(t.formAction) : f.getAttribute("formAction"), t !== null && (n = t, f = null));
      var i = new Nn(
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
                  ac(
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
                typeof n == "function" && (i.preventDefault(), c = new FormData(e, f), ac(
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
  for (var Wc = 0; Wc < Ei.length; Wc++) {
    var Ic = Ei[Wc], gm = Ic.toLowerCase(), Sm = Ic[0].toUpperCase() + Ic.slice(1);
    Rt(
      gm,
      "on" + Sm
    );
  }
  Rt(Br, "onAnimationEnd"), Rt(Yr, "onAnimationIteration"), Rt(qr, "onAnimationStart"), Rt("dblclick", "onDoubleClick"), Rt("focusin", "onFocus"), Rt("focusout", "onBlur"), Rt(My, "onTransitionRun"), Rt(Dy, "onTransitionStart"), Rt(Cy, "onTransitionCancel"), Rt(jr, "onTransitionEnd"), Oa("onMouseEnter", ["mouseout", "mouseover"]), Oa("onMouseLeave", ["mouseout", "mouseover"]), Oa("onPointerEnter", ["pointerout", "pointerover"]), Oa("onPointerLeave", ["pointerout", "pointerover"]), ku(
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
  var Fe = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Tm = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Fe)
  );
  function od(l, t) {
    t = (t & 4) !== 0;
    for (var u = 0; u < l.length; u++) {
      var a = l[u], e = a.event;
      a = a.listeners;
      l: {
        var n = void 0;
        if (t)
          for (var f = a.length - 1; 0 <= f; f--) {
            var i = a[f], c = i.instance, m = i.currentTarget;
            if (i = i.listener, c !== n && e.isPropagationStopped())
              break l;
            n = i, e.currentTarget = m;
            try {
              n(e);
            } catch (S) {
              Dn(S);
            }
            e.currentTarget = null, n = c;
          }
        else
          for (f = 0; f < a.length; f++) {
            if (i = a[f], c = i.instance, m = i.currentTarget, i = i.listener, c !== n && e.isPropagationStopped())
              break l;
            n = i, e.currentTarget = m;
            try {
              n(e);
            } catch (S) {
              Dn(S);
            }
            e.currentTarget = null, n = c;
          }
      }
    }
  }
  function I(l, t) {
    var u = t[$o];
    u === void 0 && (u = t[$o] = /* @__PURE__ */ new Set());
    var a = l + "__bubble";
    u.has(a) || (rd(t, l, 2, !1), u.add(a));
  }
  function kc(l, t, u) {
    var a = 0;
    t && (a |= 4), rd(
      u,
      l,
      a,
      t
    );
  }
  var Mf = "_reactListening" + Math.random().toString(36).slice(2);
  function Pc(l) {
    if (!l[Mf]) {
      l[Mf] = !0, Io.forEach(function(u) {
        u !== "selectionchange" && (Tm.has(u) || kc(u, !1, l), kc(u, !0, l));
      });
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[Mf] || (t[Mf] = !0, kc("selectionchange", !1, t));
    }
  }
  function rd(l, t, u, a) {
    switch (Pd(t)) {
      case 2:
        var e = s1;
        break;
      case 8:
        e = d1;
        break;
      default:
        e = bo;
    }
    u = e.bind(
      null,
      t,
      u,
      l
    ), e = void 0, !ii || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (e = !0), a ? e !== void 0 ? l.addEventListener(t, u, {
      capture: !0,
      passive: e
    }) : l.addEventListener(t, u, !0) : e !== void 0 ? l.addEventListener(t, u, {
      passive: e
    }) : l.addEventListener(t, u, !1);
  }
  function lo(l, t, u, a, e) {
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
            if (f = Iu(i), f === null) return;
            if (c = f.tag, c === 5 || c === 6 || c === 26 || c === 27) {
              a = n = f;
              continue l;
            }
            i = i.parentNode;
          }
        }
        a = a.return;
      }
    rr(function() {
      var m = n, S = ni(u), z = [];
      l: {
        var v = xr.get(l);
        if (v !== void 0) {
          var g = Nn, N = l;
          switch (l) {
            case "keypress":
              if (_n(u) === 0) break l;
            case "keydown":
            case "keyup":
              g = ay;
              break;
            case "focusin":
              N = "focus", g = si;
              break;
            case "focusout":
              N = "blur", g = si;
              break;
            case "beforeblur":
            case "afterblur":
              g = si;
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
              g = vr;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              g = Kv;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              g = cy;
              break;
            case Br:
            case Yr:
            case qr:
              g = $v;
              break;
            case jr:
              g = ry;
              break;
            case "scroll":
            case "scrollend":
              g = Vv;
              break;
            case "wheel":
              g = dy;
              break;
            case "copy":
            case "cut":
            case "paste":
              g = Wv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              g = mr;
              break;
            case "submit":
              g = fy;
              break;
            case "toggle":
            case "beforetoggle":
              g = yy;
          }
          var U = (t & 4) !== 0, J = !U && (l === "scroll" || l === "scrollend"), y = U ? v !== null ? v + "Capture" : null : v;
          U = [];
          for (var o = m, h; o !== null; ) {
            var E = o;
            if (h = E.stateNode, E = E.tag, E !== 5 && E !== 26 && E !== 27 || h === null || y === null || (E = ge(o, y), E != null && U.push(
              We(o, E, h)
            )), J) break;
            o = o.return;
          }
          0 < U.length && (v = new g(
            v,
            N,
            null,
            u,
            S
          ), z.push({ event: v, listeners: U }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (g = l === "mouseover" || l === "pointerover", v = l === "mouseout" || l === "pointerout", g && u !== ei && (N = u.relatedTarget || u.fromElement) && (Iu(N) || N[Ea]))
            break l;
          (v || g) && (N = S.window === S ? S : (g = S.ownerDocument) ? g.defaultView || g.parentWindow : window, v ? (g = u.relatedTarget || u.toElement, v = m, g = g ? Iu(g) : null, g !== null && (J = C(g), U = g.tag, g !== J || U !== 5 && U !== 27 && U !== 6) && (g = null)) : (v = null, g = m), v !== g && (U = vr, E = "onMouseLeave", y = "onMouseEnter", o = "mouse", (l === "pointerout" || l === "pointerover") && (U = mr, E = "onPointerLeave", y = "onPointerEnter", o = "pointer"), J = v == null ? N : he(v), h = g == null ? N : he(g), N = new U(
            E,
            o + "leave",
            v,
            u,
            S
          ), N.target = J, N.relatedTarget = h, E = null, Iu(S) === m && (U = new U(
            y,
            o + "enter",
            g,
            u,
            S
          ), U.target = h, U.relatedTarget = J, E = U), J = E, U = v && g ? et(
            v,
            g,
            bm
          ) : null, v !== null && sd(
            z,
            N,
            v,
            U,
            !1
          ), g !== null && J !== null && sd(
            z,
            J,
            g,
            U,
            !0
          )));
        }
        l: {
          if (v = m ? he(m) : window, g = v.nodeName && v.nodeName.toLowerCase(), g === "select" || g === "input" && v.type === "file")
            var D = _r;
          else if (Er(v))
            if (Or)
              D = Oy;
            else {
              D = zy;
              var P = Ey;
            }
          else
            g = v.nodeName, !g || g.toLowerCase() !== "input" || v.type !== "checkbox" && v.type !== "radio" ? m && ai(m.elementType) && (D = _r) : D = _y;
          if (D && (D = D(l, m))) {
            zr(
              z,
              D,
              u,
              S
            );
            break l;
          }
          P && P(l, v, m);
        }
        switch (P = m ? he(m) : window, l) {
          case "focusin":
            (Er(P) || P.contentEditable === "true") && (Ua = P, Si = m, Ne = null);
            break;
          case "focusout":
            Ne = Si = Ua = null;
            break;
          case "mousedown":
            Ti = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Ti = !1, pr(z, u, S);
            break;
          case "selectionchange":
            if (Ay) break;
          case "keydown":
          case "keyup":
            pr(z, u, S);
        }
        var H;
        if (vi)
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
          Ca ? Tr(l, u) && (G = "onCompositionEnd") : l === "keydown" && u.keyCode === 229 && (G = "onCompositionStart");
        G && (hr && u.locale !== "ko" && (Ca || G !== "onCompositionStart" ? G === "onCompositionEnd" && Ca && (H = sr()) : (bu = S, ci = "value" in bu ? bu.value : bu.textContent, Ca = !0)), P = Df(m, G), 0 < P.length && (G = new yr(
          G,
          l,
          null,
          u,
          S
        ), z.push({ event: G, listeners: P }), H ? G.data = H : (H = br(u), H !== null && (G.data = H)))), (H = hy ? gy(l, u) : Sy(l, u)) && (G = Df(m, "onBeforeInput"), 0 < G.length && (P = new yr(
          "onBeforeInput",
          "beforeinput",
          null,
          u,
          S
        ), z.push({
          event: P,
          listeners: G
        }), P.data = H)), hm(
          z,
          l,
          m,
          u,
          S
        );
      }
      od(z, t);
    });
  }
  function We(l, t, u) {
    return {
      instance: l,
      listener: t,
      currentTarget: u
    };
  }
  function Df(l, t) {
    for (var u = t + "Capture", a = []; l !== null; ) {
      var e = l, n = e.stateNode;
      if (e = e.tag, e !== 5 && e !== 26 && e !== 27 || n === null || (e = ge(l, u), e != null && a.unshift(
        We(l, e, n)
      ), e = ge(l, t), e != null && a.push(
        We(l, e, n)
      )), l.tag === 3) return a;
      l = l.return;
    }
    return [];
  }
  function bm(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function sd(l, t, u, a, e) {
    for (var n = t._reactName, f = []; u !== null && u !== a; ) {
      var i = u, c = i.alternate, m = i.stateNode;
      if (i = i.tag, c !== null && c === a) break;
      i !== 5 && i !== 26 && i !== 27 || m === null || (c = m, e ? (m = ge(u, n), m != null && f.unshift(
        We(u, m, c)
      )) : e || (m = ge(u, n), m != null && f.push(
        We(u, m, c)
      ))), u = u.return;
    }
    f.length !== 0 && l.push({ event: t, listeners: f });
  }
  var Em = /\r\n?/g, zm = /\u0000|\uFFFD/g;
  function dd(l) {
    return (typeof l == "string" ? l : "" + l).replace(Em, `
`).replace(zm, "");
  }
  function vd(l, t) {
    return t = dd(t), dd(l) === t;
  }
  function yl(l, t, u, a, e, n) {
    switch (u) {
      case "children":
        if (typeof a == "string")
          t === "body" || t === "textarea" && a === "" || Aa(l, a);
        else if (typeof a == "number" || typeof a == "bigint")
          t !== "body" && Aa(l, "" + a);
        else return;
        break;
      case "className":
        bn(l, "class", a);
        break;
      case "tabIndex":
        bn(l, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        bn(l, u, a);
        break;
      case "style":
        cr(l, a, n);
        return;
      case "data":
        if (t !== "object") {
          bn(l, "data", a);
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
        a = En(a), l.setAttribute(u, a);
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
          typeof n == "function" && (u === "formAction" ? (t !== "input" && yl(l, t, "name", e.name, e, null), yl(
            l,
            t,
            "formEncType",
            e.formEncType,
            e,
            null
          ), yl(
            l,
            t,
            "formMethod",
            e.formMethod,
            e,
            null
          ), yl(
            l,
            t,
            "formTarget",
            e.formTarget,
            e,
            null
          )) : (yl(l, t, "encType", e.encType, e, null), yl(l, t, "method", e.method, e, null), yl(l, t, "target", e.target, e, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          l.removeAttribute(u);
          break;
        }
        a = En(a), l.setAttribute(u, a);
        break;
      case "onClick":
        a != null && (l.onclick = Zt);
        return;
      case "onScroll":
        a != null && I("scroll", l);
        return;
      case "onScrollEnd":
        a != null && I("scrollend", l);
        return;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(r(61));
          if (u = a.__html, u != null) {
            if (e.children != null) throw Error(r(60));
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
        u = En(a), l.setAttributeNS(
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
        I("beforetoggle", l), I("toggle", l), Tn(l, "popover", a);
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
        Tn(l, "is", a);
        break;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!(2 < u.length) || u[0] !== "o" && u[0] !== "O" || u[1] !== "n" && u[1] !== "N")
          u = Qv.get(u) || u, Tn(l, u, a);
        else return;
    }
    fl = !0;
  }
  function to(l, t, u, a, e, n) {
    switch (u) {
      case "style":
        cr(l, a, n);
        return;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(r(61));
          if (u = a.__html, u != null) {
            if (e.children != null) throw Error(r(60));
            n?.__html !== u && (l.innerHTML = u);
          }
        }
        break;
      case "children":
        if (typeof a == "string") Aa(l, a);
        else if (typeof a == "number" || typeof a == "bigint")
          Aa(l, "" + a);
        else return;
        break;
      case "onScroll":
        a != null && I("scroll", l);
        return;
      case "onScrollEnd":
        a != null && I("scrollend", l);
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
        if (!ko.hasOwnProperty(u))
          l: {
            if (u[0] === "o" && u[1] === "n" && (e = u.endsWith("Capture"), n = u.slice(2, e ? u.length - 7 : void 0), t = l[Il] || null, t = t != null ? t[u] : null, typeof t == "function" && l.removeEventListener(n, t, e), typeof a == "function")) {
              typeof t != "function" && t !== null && (u in l ? l[u] = null : l.hasAttribute(u) && l.removeAttribute(u)), l.addEventListener(n, a, e);
              break l;
            }
            fl = !0, u in l ? l[u] = a : a === !0 ? l.setAttribute(u, "") : Tn(l, u, a);
          }
        return;
    }
    fl = !0;
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
        I("error", l), I("load", l);
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
                  throw Error(r(137, t));
                default:
                  yl(l, t, n, f, u, null);
              }
          }
        e && yl(l, t, "srcSet", u.srcSet, u, null), a && yl(l, t, "src", u.src, u, null);
        return;
      case "input":
        I("invalid", l);
        var i = n = f = e = null, c = null, m = null;
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
                    throw Error(r(137, t));
                  break;
                default:
                  yl(l, t, a, S, u, null);
              }
          }
        er(
          l,
          n,
          i,
          c,
          m,
          f,
          e,
          !1
        );
        return;
      case "select":
        I("invalid", l), a = f = n = null;
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
                yl(l, t, e, i, u, null);
            }
        t = n, u = f, l.multiple = !!a, t != null ? Na(l, !!a, t, !1) : u != null && Na(l, !!a, u, !0);
        return;
      case "textarea":
        I("invalid", l), n = e = a = null;
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
                if (i != null) throw Error(r(91));
                break;
              default:
                yl(l, t, f, i, u, null);
            }
        fr(l, a, e, n);
        return;
      case "option":
        for (c in u)
          u.hasOwnProperty(c) && (a = u[c], a != null) && (c === "selected" ? l.selected = a && typeof a != "function" && typeof a != "symbol" : yl(l, t, c, a, u, null));
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
        for (a = 0; a < Fe.length; a++)
          I(Fe[a], l);
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
          if (u.hasOwnProperty(m) && (a = u[m], a != null))
            switch (m) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, t));
              default:
                yl(l, t, m, a, u, null);
            }
        return;
      default:
        if (ai(t)) {
          for (S in u)
            u.hasOwnProperty(S) && (a = u[S], a !== void 0 && to(
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
      u.hasOwnProperty(i) && (a = u[i], a != null && yl(l, t, i, a, u, null));
  }
  var _m = {};
  function Om(l, t, u, a) {
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
        var e = null, n = null, f = null, i = null, c = null, m = null, S = null;
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
                a.hasOwnProperty(g) || yl(l, t, g, null, a, z);
            }
        }
        for (var v in a) {
          var g = a[v];
          if (z = u[v], a.hasOwnProperty(v) && (g != null || z != null))
            switch (v) {
              case "type":
                g !== z && (fl = !0), n = g;
                break;
              case "name":
                g !== z && (fl = !0), e = g;
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
                  throw Error(r(137, t));
                break;
              default:
                g !== z && yl(
                  l,
                  t,
                  v,
                  g,
                  a,
                  z
                );
            }
        }
        ti(
          l,
          f,
          i,
          c,
          m,
          S,
          n,
          e
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
                a.hasOwnProperty(n) || yl(
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
                  e,
                  n,
                  a,
                  c
                );
            }
        t = i, u = f, a = g, v != null ? Na(l, !!u, v, !1) : !!a != !!u && (t != null ? Na(l, !!u, t, !0) : Na(l, !!u, u ? [] : "", !1));
        return;
      case "textarea":
        g = v = null;
        for (i in u)
          if (e = u[i], u.hasOwnProperty(i) && e != null && !a.hasOwnProperty(i))
            switch (i) {
              case "value":
                break;
              case "children":
                break;
              default:
                yl(l, t, i, null, a, e);
            }
        for (f in a)
          if (e = a[f], n = u[f], a.hasOwnProperty(f) && (e != null || n != null))
            switch (f) {
              case "value":
                e !== n && (fl = !0), v = e;
                break;
              case "defaultValue":
                e !== n && (fl = !0), g = e;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (e != null) throw Error(r(91));
                break;
              default:
                e !== n && yl(l, t, f, e, a, n);
            }
        nr(l, v, g);
        return;
      case "option":
        for (var N in u)
          v = u[N], u.hasOwnProperty(N) && v != null && !a.hasOwnProperty(N) && (N === "selected" ? l.selected = !1 : yl(
            l,
            t,
            N,
            null,
            a,
            v
          ));
        for (c in a)
          v = a[c], g = u[c], a.hasOwnProperty(c) && v !== g && (v != null || g != null) && (c === "selected" ? (v !== g && (fl = !0), l.selected = v && typeof v != "function" && typeof v != "symbol") : yl(
            l,
            t,
            c,
            v,
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
        for (var U in u)
          v = u[U], u.hasOwnProperty(U) && v != null && !a.hasOwnProperty(U) && yl(l, t, U, null, a, v);
        for (m in a)
          if (v = a[m], g = u[m], a.hasOwnProperty(m) && v !== g && (v != null || g != null))
            switch (m) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (v != null)
                  throw Error(r(137, t));
                break;
              default:
                yl(
                  l,
                  t,
                  m,
                  v,
                  a,
                  g
                );
            }
        return;
      default:
        if (ai(t)) {
          for (var J in u)
            v = u[J], u.hasOwnProperty(J) && v !== void 0 && !a.hasOwnProperty(J) && to(
              l,
              t,
              J,
              void 0,
              a,
              v
            );
          for (S in a)
            v = a[S], g = u[S], !a.hasOwnProperty(S) || v === g || v === void 0 && g === void 0 || to(
              l,
              t,
              S,
              v,
              a,
              g
            );
          return;
        }
    }
    for (var y in u)
      v = u[y], u.hasOwnProperty(y) && v != null && !a.hasOwnProperty(y) && yl(l, t, y, null, a, v);
    for (z in a)
      v = a[z], g = u[z], !a.hasOwnProperty(z) || v === g || v == null && g == null || yl(l, t, z, v, a, g);
  }
  function yd(l) {
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
  function Nm() {
    if (typeof performance.getEntriesByType == "function") {
      for (var l = 0, t = 0, u = performance.getEntriesByType("resource"), a = 0; a < u.length; a++) {
        var e = u[a], n = e.transferSize, f = e.initiatorType, i = e.duration;
        if (n && i && yd(f)) {
          for (f = 0, i = e.responseEnd, a += 1; a < u.length; a++) {
            var c = u[a], m = c.startTime;
            if (m > i) break;
            var S = c.transferSize, z = c.initiatorType;
            S && yd(z) && (c = c.responseEnd, f += S * (c < i ? 1 : (i - m) / (c - m)));
          }
          if (--a, t += 8 * (n + f) / (e.duration / 1e3), l++, 10 < l) break;
        }
      }
      if (0 < l) return t / l / 1e6;
    }
    return navigator.connection && (l = navigator.connection.downlink, typeof l == "number") ? l : 5;
  }
  var uo = null, ao = null;
  function Ie(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function md(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function hd(l, t) {
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
  function gd(l, t, u, a) {
    return u = Ie(
      u
    ).createElement(l), u[Gl] = a, u[Il] = t, Ll(u, l, t), Hl(u), u;
  }
  function eo(l, t) {
    return l === "textarea" || l === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var no = null;
  function Am() {
    var l = window.event;
    return l && l.type === "popstate" ? l === no ? !1 : (no = l, !0) : (no = null, !1);
  }
  var fo = typeof setTimeout == "function" ? setTimeout : void 0, Mm = typeof clearTimeout == "function" ? clearTimeout : void 0, Sd = typeof Promise == "function" ? Promise : void 0, Td = typeof requestAnimationFrame == "function" ? requestAnimationFrame : fo, Dm = typeof queueMicrotask == "function" ? queueMicrotask : typeof Sd < "u" ? function(l) {
    return Sd.resolve(null).then(l).catch(Cm);
  } : fo;
  function Cm(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function Xu(l) {
    return l === "head";
  }
  function bd(l, t) {
    var u = t, a = 0;
    do {
      var e = u.nextSibling;
      if (l.removeChild(u), e && e.nodeType === 8)
        if (u = e.data, u === "/$" || u === "/&") {
          if (a === 0) {
            l.removeChild(e), oe(t);
            return;
          }
          a--;
        } else if (u === "$" || u === "$?" || u === "$~" || u === "$!" || u === "&")
          a++;
        else if (u === "html")
          mo(
            l.ownerDocument.documentElement
          );
        else if (u === "head") {
          u = l.ownerDocument.head, mo(u);
          for (var n = u.firstChild; n; ) {
            var f = n.nextSibling, i = n.nodeName;
            n[me] || i === "SCRIPT" || i === "STYLE" || i === "LINK" && n.rel.toLowerCase() === "stylesheet" || u.removeChild(n), n = f;
          }
        } else
          u === "body" && mo(l.ownerDocument.body);
      u = e;
    } while (u);
    oe(t);
  }
  function Ed(l, t) {
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
  function zd(l, t, u) {
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
  function _d(l, t) {
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
  function io(l) {
    var t = l.getBoundingClientRect(), u = getComputedStyle(l);
    return Um(t, u, l);
  }
  function Rm(l) {
    return l.documentElement.clientHeight;
  }
  function pm(l) {
    this.addEventListener("load", l), this.addEventListener("error", l);
  }
  function Hm(l, t, u, a, e, n, f, i, c) {
    var m = t.nodeType === 9 ? t : t.ownerDocument;
    try {
      var S = m.startViewTransition({
        update: function() {
          var v = m.defaultView, g = v.navigation && v.navigation.transition, N = m.fonts.status;
          a();
          var U = [];
          if (N === "loaded" && (Rm(m), m.fonts.status === "loading" && U.push(m.fonts.ready)), N = U.length, l !== null)
            for (var J = l.suspenseyImages, y = 0, o = 0; o < J.length; o++) {
              var h = J[o];
              if (!h.complete) {
                var E = h.getBoundingClientRect();
                if (0 < E.bottom && 0 < E.right && E.top < v.innerHeight && E.left < v.innerWidth) {
                  if (y += Ld(h), y > Rf) {
                    U.length = N;
                    break;
                  }
                  h = new Promise(
                    pm.bind(h)
                  ), U.push(h);
                }
              }
            }
          if (0 < U.length)
            return v = Promise.race([
              Promise.all(U),
              new Promise(function(D) {
                return setTimeout(D, 500);
              })
            ]).then(e, e), (g ? Promise.allSettled([g.finished, v]) : v).then(n, n);
          if (e(), g)
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
            var N = v[g], U = N.effect, J = U.pseudoElement;
            if (J != null && J.startsWith("::view-transition")) {
              z.push(N), N = U.getKeyframes();
              for (var y = J = void 0, o = !0, h = 0; h < N.length; h++) {
                var E = N[h], D = E.width;
                if (J === void 0) J = D;
                else if (J !== D) {
                  o = !1;
                  break;
                }
                if (D = E.height, y === void 0) y = D;
                else if (y !== D) {
                  o = !1;
                  break;
                }
                delete E.width, delete E.height, E.transform === "none" && delete E.transform;
              }
              o && J !== void 0 && y !== void 0 && (U.setKeyframes(N), o = getComputedStyle(
                U.target,
                U.pseudoElement
              ), o.width !== J || o.height !== y) && (o = N[0], o.width = J, o.height = y, o = N[N.length - 1], o.width = J, o.height = y, U.setKeyframes(N));
            }
          }
          f();
        },
        function(v) {
          m.__reactViewTransition === S && (m.__reactViewTransition = null);
          try {
            typeof v == "object" && v !== null && v.name === "InvalidStateError" && (v.message === "View transition was skipped because document visibility state is hidden." || v.message === "Skipping view transition because document visibility state has become hidden." || v.message === "Skipping view transition because viewport size changed." || v.message === "Transition was aborted because of invalid state") && (v = null), v !== null && c(v);
          } finally {
            a(), e(), f();
          }
        }
      ), S.finished.finally(function() {
        for (var v = 0; v < z.length; v++)
          z[v].cancel();
        m.__reactViewTransition === S && (m.__reactViewTransition = null), i();
      }), S;
    } catch {
      return a(), e(), f(), null;
    }
  }
  function Sa(l, t) {
    this._scope = document.documentElement, this._selector = "::view-transition-" + l + "(" + t + ")";
  }
  Sa.prototype.animate = function(l, t) {
    return t = typeof t == "number" ? { duration: t } : F({}, t), t.pseudoElement = this._selector, this._scope.animate(l, t);
  }, Sa.prototype.getAnimations = function() {
    for (var l = this._scope, t = this._selector, u = l.getAnimations({ subtree: !0 }), a = [], e = 0; e < u.length; e++) {
      var n = u[e].effect;
      n !== null && n.target === l && n.pseudoElement === t && a.push(u[e]);
    }
    return a;
  }, Sa.prototype.getComputedStyle = function() {
    return getComputedStyle(this._scope, this._selector);
  };
  function Od(l) {
    return {
      name: l,
      group: new Sa("group", l),
      imagePair: new Sa("image-pair", l),
      old: new Sa("old", l),
      new: new Sa("new", l)
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
      if (Ad(n, l, t, u) === -1) {
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
        ), a.addEventListener("abort", e, { once: !0 }), e = a.removeEventListener.bind(a, "abort", e)), a = ae(u), n.push({
          type: l,
          listener: t,
          optionsOrUseCapture: u,
          attachedListener: i,
          cleanup: e
        }), T(
          this._fragmentFiber.child,
          !1,
          Bm,
          l,
          i,
          a
        );
      }
      this._eventListeners = n;
    }
  };
  function Bm(l, t, u, a) {
    return el(l).addEventListener(
      t,
      u,
      a
    ), !1;
  }
  ht.prototype.removeEventListener = function(l, t, u) {
    var a = this._eventListeners;
    if (a !== null && (t = Ad(
      a,
      l,
      t,
      u
    ), t !== -1)) {
      var e = a[t];
      u = e.attachedListener;
      var n = e.cleanup;
      e = ae(e.optionsOrUseCapture), T(
        this._fragmentFiber.child,
        !1,
        Ym,
        l,
        u,
        e
      ), a.splice(t, 1), n !== null && n();
    }
  };
  function Ym(l, t, u, a) {
    return el(l).removeEventListener(
      t,
      u,
      a
    ), !1;
  }
  function ae(l) {
    return l != null && typeof l != "boolean" && (l.once === !0 || l.signal instanceof AbortSignal) ? { capture: l.capture, passive: l.passive } : l;
  }
  function Nd(l) {
    return l == null ? "c=0" : typeof l == "boolean" ? "c=" + (l ? "1" : "0") : "c=" + (l.capture ? "1" : "0");
  }
  function Ad(l, t, u, a) {
    if (l.length === 0) return -1;
    a = Nd(a);
    for (var e = 0; e < l.length; e++) {
      var n = l[e];
      if (n.type === t && n.listener === u && Nd(n.optionsOrUseCapture) === a)
        return e;
    }
    return -1;
  }
  ht.prototype.dispatchEvent = function(l) {
    var t = B(
      this._fragmentFiber
    );
    if (t === null) return !0;
    t = el(t);
    var u = this._eventListeners;
    if (u !== null && 0 < u.length || !l.bubbles) {
      var a = t.nodeType === 9 ? t.createComment("") : document.createTextNode("");
      if (u)
        for (var e = 0; e < u.length; e++) {
          var n = u[e];
          a.addEventListener(
            n.type,
            n.attachedListener,
            ae(n.optionsOrUseCapture)
          );
        }
      if (t.appendChild(a), l = a.dispatchEvent(l), u)
        for (e = 0; e < u.length; e++)
          n = u[e], a.removeEventListener(
            n.type,
            n.attachedListener,
            ae(n.optionsOrUseCapture)
          );
      return t.removeChild(a), l;
    }
    return t.dispatchEvent(l);
  }, ht.prototype.focus = function(l) {
    T(
      this._fragmentFiber.child,
      !0,
      Md,
      l,
      void 0,
      void 0
    );
  };
  function Md(l, t) {
    return l.tag === 6 ? !1 : (l = el(l), wm(l, t));
  }
  ht.prototype.focusLast = function(l) {
    var t = [];
    T(
      this._fragmentFiber.child,
      !0,
      co,
      t,
      void 0,
      void 0
    );
    for (var u = t.length - 1; 0 <= u && !Md(t[u], l); u--) ;
  };
  function co(l, t) {
    return t.push(l), !1;
  }
  ht.prototype.blur = function() {
    var l = B(
      this._fragmentFiber
    );
    l !== null && (l = el(l), l = Ie(l).activeElement, l !== null && T(
      this._fragmentFiber.child,
      !1,
      qm,
      l,
      void 0,
      void 0
    ));
  };
  function qm(l, t) {
    return l.tag === 6 ? !1 : (l = el(l), l === t || l.contains(t) ? (t.blur(), !0) : !1);
  }
  ht.prototype.observeUsing = function(l) {
    this._observers === null && (this._observers = /* @__PURE__ */ new Set()), this._observers.add(l), T(
      this._fragmentFiber.child,
      !1,
      jm,
      l,
      void 0,
      void 0
    );
  };
  function jm(l, t) {
    return l.tag === 6 || (l = el(l), t.observe(l)), !1;
  }
  ht.prototype.unobserveUsing = function(l) {
    var t = this._observers;
    if (t !== null && t.has(l)) {
      t.delete(l), T(
        this._fragmentFiber.child,
        !1,
        xm,
        l,
        void 0,
        void 0
      );
      for (var u = t = 0; u < qt.length; u++) {
        var a = qt[u];
        a.fragmentInstance === this && a.observer === l ? l.unobserve(a.instance) : qt[t++] = a;
      }
      qt.length = t;
    }
  };
  function xm(l, t) {
    return l.tag === 6 || (l = el(l), t.unobserve(l)), !1;
  }
  var qt = [], oo = !1;
  function Gm(l, t, u) {
    qt.push({
      fragmentInstance: l,
      observer: t,
      instance: u
    }), oo || (oo = !0, $m(function() {
      oo = !1;
      var a = qt;
      qt = [];
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
      Xm,
      l,
      void 0,
      void 0
    ), l;
  };
  function Xm(l, t) {
    if (l.tag === 6) {
      l = l.stateNode;
      var u = l.ownerDocument.createRange();
      u.selectNodeContents(l), t.push.apply(t, u.getClientRects());
    } else
      l = el(l), t.push.apply(t, l.getClientRects());
    return !1;
  }
  ht.prototype.getRootNode = function(l) {
    var t = B(
      this._fragmentFiber
    );
    return t === null ? this : el(t).getRootNode(l);
  }, ht.prototype.compareDocumentPosition = function(l) {
    var t = B(
      this._fragmentFiber
    );
    if (t === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
    var u = [];
    T(
      this._fragmentFiber.child,
      !1,
      co,
      u,
      void 0,
      void 0
    );
    var a = el(t);
    if (u.length === 0) {
      if (u = a, ll(this._fragmentFiber)) {
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
      return u === l ? e = Node.DOCUMENT_POSITION_CONTAINS : a & Node.DOCUMENT_POSITION_CONTAINED_BY && (u = El(t)[1], u === null ? e = Node.DOCUMENT_POSITION_PRECEDING : (l = el(u).compareDocumentPosition(
        l
      ), e = l === 0 || l & Node.DOCUMENT_POSITION_FOLLOWING ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING)), e |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
    }
    t = el(u[0]), e = el(u[u.length - 1]);
    var n = ll(this._fragmentFiber) ? t.parentElement : a;
    if (n == null)
      return Node.DOCUMENT_POSITION_DISCONNECTED;
    a = n.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY, n = n.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_CONTAINED_BY;
    var f = t.compareDocumentPosition(l), i = e.compareDocumentPosition(l), c = f & Node.DOCUMENT_POSITION_CONTAINED_BY || i & Node.DOCUMENT_POSITION_CONTAINED_BY;
    return i = a && n && f & Node.DOCUMENT_POSITION_FOLLOWING && i & Node.DOCUMENT_POSITION_PRECEDING, t = a && t === l || n && e === l || c || i ? Node.DOCUMENT_POSITION_CONTAINED_BY : !a && t === l || !n && e === l ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC : f, t & Node.DOCUMENT_POSITION_DISCONNECTED || t & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC || Qm(
      t,
      this._fragmentFiber,
      u[0],
      u[u.length - 1],
      l
    ) ? t : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
  };
  function Qm(l, t, u, a, e) {
    var n = Iu(e);
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
    return l & Node.DOCUMENT_POSITION_PRECEDING ? ((t = !!n) && !(t = n === u) && (t = et(
      u,
      n,
      xt
    ), t === null ? t = !1 : (T(
      t,
      !0,
      wu,
      n,
      u
    ), n = St, St = null, t = n !== null)), t) : l & Node.DOCUMENT_POSITION_FOLLOWING ? ((t = !!n) && !(t = n === a) && (t = et(
      a,
      n,
      xt
    ), t === null ? t = !1 : (T(
      t,
      !0,
      jt,
      n,
      a
    ), n = St, at = St = null, t = n !== null)), t) : !1;
  }
  function Dd(l, t) {
    var u = l.ownerDocument.createRange();
    u.selectNodeContents(l), l = u.getBoundingClientRect(), window.scrollTo(
      window.scrollX + l.left,
      t ? window.scrollY + l.top : window.scrollY + l.bottom - window.innerHeight
    );
  }
  ht.prototype.scrollIntoView = function(l) {
    if (typeof l == "object") throw Error(r(566));
    var t = [];
    T(
      this._fragmentFiber.child,
      !1,
      co,
      t,
      void 0,
      void 0
    );
    var u = l !== !1;
    if (t.length === 0) {
      var a = El(
        this._fragmentFiber
      );
      if (a = u ? a[1] || a[0] || B(this._fragmentFiber) : a[0] || a[1], a === null) return;
      if (a.tag === 6) {
        l = el(a), Dd(l, u);
        return;
      }
      if (a = el(a), a.nodeType !== 9) {
        if (a.nodeType === 11) {
          u = "host" in a ? a.host : null, u !== null && u.scrollIntoView(l);
          return;
        }
        a.scrollIntoView(l);
      }
    }
    for (a = u ? t.length - 1 : 0; a !== (u ? -1 : t.length); ) {
      var e = t[a];
      e.tag === 6 ? (e = el(e), Dd(e, u)) : el(e).scrollIntoView(l), a += u ? -1 : 1;
    }
  };
  function Zm(l, t) {
    return l = el(l), Cd(l, t), !1;
  }
  function Cd(l, t) {
    l.reactFragments == null && (l.reactFragments = /* @__PURE__ */ new Set()), l.reactFragments.add(t);
  }
  function Ud(l, t) {
    var u = t._eventListeners;
    if (u !== null)
      for (var a = 0; a < u.length; a++) {
        var e = u[a];
        l.addEventListener(
          e.type,
          e.attachedListener,
          ae(e.optionsOrUseCapture)
        );
      }
    l.nodeType !== 3 && (u = t._observers, u !== null && u.forEach(function(n) {
      for (var f = 0, i = 0; i < qt.length; i++) {
        var c = qt[i];
        (c.fragmentInstance !== t || c.observer !== n || c.instance !== l) && (qt[f++] = c);
      }
      qt.length = f, n.observe(l);
    }), Cd(l, t));
  }
  function Vm(l, t) {
    var u = t._eventListeners;
    if (u !== null)
      for (var a = 0; a < u.length; a++) {
        var e = u[a];
        l.removeEventListener(
          e.type,
          e.attachedListener,
          ae(e.optionsOrUseCapture)
        );
      }
    l.nodeType !== 3 && (u = t._observers, u !== null && u.forEach(function(n) {
      typeof n.rootMargin == "string" ? Gm(
        t,
        n,
        l
      ) : n.unobserve(l);
    }), l.reactFragments != null && l.reactFragments.delete(t));
  }
  function ro(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var u = t;
      switch (t = t.nextSibling, u.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          ro(u), Sn(u);
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
  function Lm(l, t, u, a) {
    for (; l.nodeType === 1; ) {
      var e = u;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (l.nodeName !== "INPUT" || l.type !== "hidden"))
          break;
      } else if (a) {
        if (!l[me])
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
      if (l = Dt(l.nextSibling), l === null) break;
    }
    return null;
  }
  function Km(l, t, u) {
    if (t === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !u || (l = Dt(l.nextSibling), l === null)) return null;
    return l;
  }
  function Rd(l, t) {
    for (; l.nodeType !== 8; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !t || (l = Dt(l.nextSibling), l === null)) return null;
    return l;
  }
  function so(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function vo(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState !== "loading";
  }
  function Jm(l, t) {
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
  function Dt(l) {
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
  var yo = null;
  function pd(l) {
    l = l.nextSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === "/$" || u === "/&") {
          if (t === 0)
            return Dt(l.nextSibling);
          t--;
        } else
          u !== "$" && u !== "$!" && u !== "$?" && u !== "$~" && u !== "&" || t++;
      }
      l = l.nextSibling;
    }
    return null;
  }
  function Hd(l) {
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
  function wm(l, t) {
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
  function $m(l) {
    Td(function() {
      Td(function(t) {
        return l(t);
      });
    });
  }
  function Bd(l, t, u) {
    switch (t = Ie(u), l) {
      case "html":
        if (l = t.documentElement, !l) throw Error(r(452));
        return l;
      case "head":
        if (l = t.head, !l) throw Error(r(453));
        return l;
      case "body":
        if (l = t.body, !l) throw Error(r(454));
        return l;
      default:
        throw Error(r(451));
    }
  }
  function Yd(l, t, u) {
    for (var a in u) {
      var e = u[a];
      u.hasOwnProperty(a) && e != null && yl(l, t, a, null, _m, e);
    }
    u.dangerouslySetInnerHTML != null && (l.textContent = ""), l.onclick === Zt && (l.onclick = null), Sn(l);
  }
  function mo(l) {
    for (var t = l.attributes; t.length; )
      l.removeAttributeNode(t[0]);
    Sn(l);
  }
  var Ct = /* @__PURE__ */ new Map(), qd = /* @__PURE__ */ new Set();
  function ke(l) {
    if (typeof l.getRootNode == "function") {
      var t = l.getRootNode();
      if (t.nodeType === 9 || t.nodeType === 11) return t;
    }
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  var mu = Z.d;
  Z.d = {
    f: Fm,
    r: Wm,
    D: Im,
    C: km,
    L: Pm,
    m: l1,
    X: u1,
    S: t1,
    M: a1
  };
  function Fm() {
    var l = mu.f(), t = zf();
    return l || t;
  }
  function Wm(l) {
    var t = za(l);
    t !== null && t.tag === 5 && t.type === "form" ? x0(t) : mu.r(l);
  }
  var ee = typeof document > "u" ? null : document;
  function jd(l, t, u) {
    var a = ee;
    if (a && typeof t == "string" && t) {
      var e = Et(t);
      e = 'link[rel="' + l + '"][href="' + e + '"]', typeof u == "string" && (e += '[crossorigin="' + u + '"]'), qd.has(e) || (qd.add(e), l = { rel: l, crossOrigin: u, href: t }, a.querySelector(e) === null && (t = a.createElement("link"), Ll(t, "link", l), Hl(t), a.head.appendChild(t)));
    }
  }
  function Im(l) {
    mu.D(l), jd("dns-prefetch", l, null);
  }
  function km(l, t) {
    mu.C(l, t), jd("preconnect", l, t);
  }
  function Pm(l, t, u) {
    mu.L(l, t, u);
    var a = ee;
    if (a && l && t) {
      var e = 'link[rel="preload"][as="' + Et(t) + '"]';
      t === "image" && u && u.imageSrcSet ? (e += '[imagesrcset="' + Et(
        u.imageSrcSet
      ) + '"]', typeof u.imageSizes == "string" && (e += '[imagesizes="' + Et(
        u.imageSizes
      ) + '"]')) : e += '[href="' + Et(l) + '"]';
      var n = e;
      switch (t) {
        case "style":
          n = ne(l);
          break;
        case "script":
          n = fe(l);
      }
      if (!(Ct.has(n) || (l = F(
        {
          rel: "preload",
          href: t === "image" && u && u.imageSrcSet ? void 0 : l,
          as: t
        },
        u
      ), Ct.set(n, l), a.querySelector(e) !== null || t === "style" && a.querySelector(Pe(n)) || t === "script" && a.querySelector(ln(n))))) {
        var f = a.createElement("link");
        Ll(f, "link", l), t === "style" && (f[gn] = !0, f.onload = f.onerror = function() {
          Wo(f);
        }), Hl(f), a.head.appendChild(f);
      }
    }
  }
  function l1(l, t) {
    mu.m(l, t);
    var u = ee;
    if (u && l) {
      var a = t && typeof t.as == "string" ? t.as : "script", e = 'link[rel="modulepreload"][as="' + Et(a) + '"][href="' + Et(l) + '"]', n = e;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = fe(l);
      }
      if (!Ct.has(n) && (l = F({ rel: "modulepreload", href: l }, t), Ct.set(n, l), u.querySelector(e) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (u.querySelector(ln(n)))
              return;
        }
        a = u.createElement("link"), Ll(a, "link", l), Hl(a), u.head.appendChild(a);
      }
    }
  }
  function t1(l, t, u) {
    mu.S(l, t, u);
    var a = ee;
    if (a && l) {
      var e = _a(a).hoistableStyles, n = ne(l);
      t = t || "default";
      var f = e.get(n);
      if (!f) {
        var i = { loading: 0, preload: null };
        if (f = a.querySelector(
          Pe(n)
        ))
          i.loading = 5;
        else {
          l = F(
            { rel: "stylesheet", href: l, "data-precedence": t },
            u
          ), (u = Ct.get(n)) && ho(l, u);
          var c = f = a.createElement("link");
          Hl(c), Ll(c, "link", l), c._p = new Promise(function(m, S) {
            c.onload = m, c.onerror = S;
          }), c.addEventListener("load", function() {
            i.loading |= 1;
          }), c.addEventListener("error", function() {
            i.loading |= 2;
          }), i.loading |= 4, Cf(f, t, a);
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
  function u1(l, t) {
    mu.X(l, t);
    var u = ee;
    if (u && l) {
      var a = _a(u).hoistableScripts, e = fe(l), n = a.get(e);
      n || (n = u.querySelector(ln(e)), n || (l = F({ src: l, async: !0 }, t), (t = Ct.get(e)) && go(l, t), n = u.createElement("script"), Hl(n), Ll(n, "link", l), u.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, a.set(e, n));
    }
  }
  function a1(l, t) {
    mu.M(l, t);
    var u = ee;
    if (u && l) {
      var a = _a(u).hoistableScripts, e = fe(l), n = a.get(e);
      n || (n = u.querySelector(ln(e)), n || (l = F({ src: l, async: !0, type: "module" }, t), (t = Ct.get(e)) && go(l, t), n = u.createElement("script"), Hl(n), Ll(n, "link", l), u.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, a.set(e, n));
    }
  }
  function xd(l, t, u, a) {
    var e = (e = gu.current) ? ke(e) : null;
    if (!e) throw Error(r(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof u.precedence == "string" && typeof u.href == "string" ? (u = ne(u.href), t = _a(
          e
        ).hoistableStyles, a = t.get(u), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, t.set(u, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (u.rel === "stylesheet" && typeof u.href == "string" && typeof u.precedence == "string") {
          l = ne(u.href);
          var n = _a(
            e
          ).hoistableStyles, f = n.get(l);
          if (f || (e = e.ownerDocument || e, f = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, n.set(l, f), (n = e.querySelector(
            Pe(l)
          )) ? n._p || (f.instance = n, f.state.loading = 5) : (n = Ct.get(l), n || (n = {
            rel: "preload",
            as: "style",
            href: u.href,
            crossOrigin: u.crossOrigin,
            integrity: u.integrity,
            media: u.media,
            hrefLang: u.hrefLang,
            referrerPolicy: u.referrerPolicy
          }, Ct.set(l, n)), e1(
            e,
            l,
            n,
            f.state
          ))), t && a === null)
            throw Error(r(528, ""));
          return f;
        }
        if (t && a !== null)
          throw Error(r(529, ""));
        return null;
      case "script":
        return t = u.async, u = u.src, typeof u == "string" && t && typeof t != "function" && typeof t != "symbol" ? (u = fe(u), t = _a(
          e
        ).hoistableScripts, a = t.get(u), a || (a = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, t.set(u, a)), a) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(r(444, l));
    }
  }
  function ne(l) {
    return 'href="' + Et(l) + '"';
  }
  function Pe(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function Gd(l) {
    return F({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function e1(l, t, u, a) {
    if (t = l.querySelector(
      'link[rel="preload"][as="style"][' + t + "]"
    )) {
      if (t[gn] !== !0) {
        a.loading = 1;
        return;
      }
    } else
      t = l.createElement("link"), t[gn] = !0, t.onload = t.onerror = Wo.bind(null, t), Ll(t, "link", u), Hl(t), l.head.appendChild(t);
    a.preload = t, t.addEventListener("load", function() {
      return a.loading |= 1;
    }), t.addEventListener("error", function() {
      return a.loading |= 2;
    });
  }
  function fe(l) {
    return '[src="' + Et(l) + '"]';
  }
  function ln(l) {
    return "script[async]" + l;
  }
  function Xd(l, t, u) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var a = l.querySelector(
            'style[data-href~="' + Et(u.href) + '"]'
          );
          if (a)
            return t.instance = a, Hl(a), a;
          var e = F({}, u, {
            "data-href": u.href,
            "data-precedence": u.precedence,
            href: null,
            precedence: null
          });
          return a = (l.ownerDocument || l).createElement(
            "style"
          ), Hl(a), Ll(a, "style", e), Cf(a, u.precedence, l), t.instance = a;
        case "stylesheet":
          e = ne(u.href);
          var n = l.querySelector(
            Pe(e)
          );
          if (n)
            return t.state.loading |= 4, t.instance = n, Hl(n), n;
          a = Gd(u), (e = Ct.get(e)) && ho(a, e), n = (l.ownerDocument || l).createElement("link"), Hl(n);
          var f = n;
          return f._p = new Promise(function(i, c) {
            f.onload = i, f.onerror = c;
          }), Ll(n, "link", a), t.state.loading |= 4, Cf(n, u.precedence, l), t.instance = n;
        case "script":
          return n = fe(u.src), (e = l.querySelector(
            ln(n)
          )) ? (t.instance = e, Hl(e), e) : (a = u, (e = Ct.get(n)) && (a = F({}, u), go(a, e)), l = l.ownerDocument || l, e = l.createElement("script"), Hl(e), Ll(e, "link", a), l.head.appendChild(e), t.instance = e);
        case "void":
          return null;
        default:
          throw Error(r(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, Cf(a, u.precedence, l));
    return t.instance;
  }
  function Cf(l, t, u) {
    for (var a = u.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), e = a.length ? a[a.length - 1] : null, n = e, f = 0; f < a.length; f++) {
      var i = a[f];
      if (i.dataset.precedence === t) n = i;
      else if (n !== e) break;
    }
    n ? n.parentNode.insertBefore(l, n.nextSibling) : (t = u.nodeType === 9 ? u.head : u, t.insertBefore(l, t.firstChild));
  }
  function ho(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.title == null && (l.title = t.title);
  }
  function go(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.integrity == null && (l.integrity = t.integrity);
  }
  var Uf = null;
  function Qd(l, t, u) {
    if (Uf === null) {
      var a = /* @__PURE__ */ new Map(), e = Uf = /* @__PURE__ */ new Map();
      e.set(u, a);
    } else
      e = Uf, a = e.get(u), a || (a = /* @__PURE__ */ new Map(), e.set(u, a));
    if (a.has(l)) return a;
    for (a.set(l, null), u = u.getElementsByTagName(l), e = 0; e < u.length; e++) {
      var n = u[e];
      if (!(n[me] || n[Gl] || l === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
        var f = n.getAttribute(t) || "";
        f = l + f;
        var i = a.get(f);
        i ? i.push(n) : a.set(f, [n]);
      }
    }
    return a;
  }
  function So(l, t, u) {
    l = l.ownerDocument || l, l.head.insertBefore(
      u,
      t === "title" ? l.querySelector("head > title") : null
    );
  }
  function n1(l, t, u) {
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
  function Zd(l, t) {
    return l === "img" && t.src != null && t.src !== "" && t.onLoad == null && t.loading !== "lazy";
  }
  function Vd(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function Ld(l) {
    return (l.width || 100) * (l.height || 100) * (typeof devicePixelRatio == "number" ? devicePixelRatio : 1) * 0.25;
  }
  function Kd(l, t) {
    typeof t.decode == "function" && (l.imgCount++, t.complete || (l.imgBytes += Ld(t), l.suspenseyImages.push(t)), l = c1.bind(l), t.decode().then(l, l));
  }
  function f1(l, t, u, a) {
    if (u.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (u.state.loading & 4) === 0) {
      if (u.instance === null) {
        var e = ne(a.href), n = t.querySelector(
          Pe(e)
        );
        if (n) {
          t = n._p, t !== null && typeof t == "object" && typeof t.then == "function" && (l.count++, l = tn.bind(l), t.then(l, l)), u.state.loading |= 4, u.instance = n, Hl(n);
          return;
        }
        n = t.ownerDocument || t, a = Gd(a), (e = Ct.get(e)) && ho(a, e), n = n.createElement("link"), Hl(n);
        var f = n;
        f._p = new Promise(function(i, c) {
          f.onload = i, f.onerror = c;
        }), Ll(n, "link", a), u.instance = n;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(u, t), (t = u.state.preload) && (u.state.loading & 3) === 0 && (l.count++, u = tn.bind(l), t.addEventListener("load", u), t.addEventListener("error", u));
    }
  }
  var Rf = 0;
  function i1(l, t) {
    return l.stylesheets && l.count === 0 && Hf(l, l.stylesheets), 0 < l.count || 0 < l.imgCount ? function(u) {
      var a = setTimeout(function() {
        if (l.stylesheets && Hf(l, l.stylesheets), l.unsuspend) {
          var n = l.unsuspend;
          l.unsuspend = null, n();
        }
      }, 6e4 + t);
      0 < l.imgBytes && Rf === 0 && (Rf = 62500 * Nm());
      var e = setTimeout(
        function() {
          if (l.waitingForImages = !1, l.count === 0 && (l.stylesheets && Hf(l, l.stylesheets), l.unsuspend)) {
            var n = l.unsuspend;
            l.unsuspend = null, n();
          }
        },
        (l.imgBytes > Rf ? 50 : 800) + t
      );
      return l.unsuspend = u, function() {
        l.unsuspend = null, clearTimeout(a), clearTimeout(e);
      };
    } : null;
  }
  function Jd(l) {
    if (l.count === 0 && (l.imgCount === 0 || !l.waitingForImages)) {
      if (l.stylesheets) Hf(l, l.stylesheets);
      else if (l.unsuspend) {
        var t = l.unsuspend;
        l.unsuspend = null, t();
      }
    }
  }
  function tn() {
    this.count--, Jd(this);
  }
  function c1() {
    this.imgCount--, Jd(this);
  }
  var pf = null;
  function Hf(l, t) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, pf = /* @__PURE__ */ new Map(), t.forEach(o1, l), pf = null, tn.call(l));
  }
  function o1(l, t) {
    if (!(t.state.loading & 4)) {
      var u = pf.get(l);
      if (u) var a = u.get(null);
      else {
        u = /* @__PURE__ */ new Map(), pf.set(l, u);
        for (var e = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), n = 0; n < e.length; n++) {
          var f = e[n];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") && (u.set(f.dataset.precedence, f), a = f);
        }
        a && u.set(null, a);
      }
      e = t.instance, f = e.getAttribute("data-precedence"), n = u.get(f) || a, n === a && u.set(null, e), u.set(f, e), this.count++, a = tn.bind(this), e.addEventListener("load", a), e.addEventListener("error", a), n ? n.parentNode.insertBefore(e, n.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(e, l.firstChild)), t.state.loading |= 4;
    }
  }
  var ie = {
    $$typeof: pl,
    Provider: null,
    Consumer: null,
    _currentValue: lu,
    _currentValue2: lu,
    _threadCount: 0
  };
  function r1(l, t, u, a, e, n, f, i, c) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = If(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = If(0), this.hiddenUpdates = If(null), this.identifierPrefix = a, this.onUncaughtError = e, this.onCaughtError = n, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = c, this.transitionTypes = null, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function wd(l, t, u, a, e, n, f, i, c, m, S, z) {
    return l = new r1(
      l,
      t,
      u,
      f,
      c,
      m,
      S,
      z,
      i
    ), t = 1, n === !0 && (t |= 24), n = kl(3, null, null, t), l.current = n, n.stateNode = l, t = pi(), t.refCount++, l.pooledCache = t, t.refCount++, n.memoizedState = {
      element: a,
      isDehydrated: u,
      cache: t
    }, qi(n), l;
  }
  function $d(l) {
    return l ? (l = Ha, l) : Ha;
  }
  function Fd(l, t, u, a, e, n) {
    e = $d(e), a.context === null ? a.context = e : a.pendingContext = e, a = Du(t), a.payload = { element: u }, n = n === void 0 ? null : n, n !== null && (a.callback = n), u = Cu(l, a, t), u !== null && (ut(u, l, t), pe(u, l, t));
  }
  function Wd(l, t) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var u = l.retryLane;
      l.retryLane = u !== 0 && u < t ? u : t;
    }
  }
  function To(l, t) {
    Wd(l, t), (l = l.alternate) && Wd(l, t);
  }
  function Id(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = ta(l, 67108864);
      t !== null && ut(t, l, 67108864), To(l, 67108864);
    }
  }
  function kd(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = mt();
      t = kf(t);
      var u = ta(l, t);
      u !== null && ut(u, l, t), To(l, t);
    }
  }
  var ce = !0;
  function s1(l, t, u, a) {
    var e = R.T;
    R.T = null;
    var n = Z.p;
    try {
      Z.p = 2, bo(l, t, u, a);
    } finally {
      Z.p = n, R.T = e;
    }
  }
  function d1(l, t, u, a) {
    var e = R.T;
    R.T = null;
    var n = Z.p;
    try {
      Z.p = 8, bo(l, t, u, a);
    } finally {
      Z.p = n, R.T = e;
    }
  }
  function bo(l, t, u, a) {
    if (ce) {
      var e = Eo(a);
      if (e === null)
        lo(
          l,
          t,
          a,
          Bf,
          u
        ), lv(l, a);
      else if (y1(
        e,
        l,
        t,
        u,
        a
      ))
        a.stopPropagation();
      else if (lv(l, a), t & 4 && -1 < v1.indexOf(l)) {
        for (; e !== null; ) {
          var n = za(e);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (n = n.stateNode, n.current.memoizedState.isDehydrated) {
                  var f = Wu(n.pendingLanes);
                  if (f !== 0) {
                    var i = n;
                    for (i.pendingLanes |= 2, i.entangledLanes |= 2; f; ) {
                      var c = 1 << 31 - ct(f);
                      i.entanglements[1] |= c, f &= ~c;
                    }
                    kt(n), (ol & 6) === 0 && (Tf = ft() + 500, $e(0));
                  }
                }
                break;
              case 31:
              case 13:
                i = ta(n, 2), i !== null && ut(i, n, 2), zf(), To(n, 2);
            }
          if (n = Eo(a), n === null && lo(
            l,
            t,
            a,
            Bf,
            u
          ), n === e) break;
          e = n;
        }
        e !== null && a.stopPropagation();
      } else
        lo(
          l,
          t,
          a,
          null,
          u
        );
    }
  }
  function Eo(l) {
    return l = ni(l), zo(l);
  }
  var Bf = null;
  function zo(l) {
    if (Bf = null, l = Iu(l), l !== null) {
      var t = C(l);
      if (t === null) l = null;
      else {
        var u = t.tag;
        if (u === 13) {
          if (l = j(t), l !== null) return l;
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
    return Bf = l, null;
  }
  function Pd(l) {
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
        switch (Nv()) {
          case xo:
            return 2;
          case Go:
            return 8;
          case dn:
          case Av:
            return 32;
          case Xo:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var _o = !1, Qu = null, Zu = null, Vu = null, un = /* @__PURE__ */ new Map(), an = /* @__PURE__ */ new Map(), Lu = [], v1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function lv(l, t) {
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
        un.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        an.delete(t.pointerId);
    }
  }
  function en(l, t, u, a, e, n) {
    return l === null || l.nativeEvent !== n ? (l = {
      blockedOn: t,
      domEventName: u,
      eventSystemFlags: a,
      nativeEvent: n,
      targetContainers: [e]
    }, t !== null && (t = za(t), t !== null && Id(t)), l) : (l.eventSystemFlags |= a, t = l.targetContainers, e !== null && t.indexOf(e) === -1 && t.push(e), l);
  }
  function y1(l, t, u, a, e) {
    switch (t) {
      case "focusin":
        return Qu = en(
          Qu,
          l,
          t,
          u,
          a,
          e
        ), !0;
      case "dragenter":
        return Zu = en(
          Zu,
          l,
          t,
          u,
          a,
          e
        ), !0;
      case "mouseover":
        return Vu = en(
          Vu,
          l,
          t,
          u,
          a,
          e
        ), !0;
      case "pointerover":
        var n = e.pointerId;
        return un.set(
          n,
          en(
            un.get(n) || null,
            l,
            t,
            u,
            a,
            e
          )
        ), !0;
      case "gotpointercapture":
        return n = e.pointerId, an.set(
          n,
          en(
            an.get(n) || null,
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
  function tv(l) {
    var t = Iu(l.target);
    if (t !== null) {
      var u = C(t);
      if (u !== null) {
        if (t = u.tag, t === 13) {
          if (t = j(u), t !== null) {
            l.blockedOn = t, wo(l.priority, function() {
              kd(u);
            });
            return;
          }
        } else if (t === 31) {
          if (t = x(u), t !== null) {
            l.blockedOn = t, wo(l.priority, function() {
              kd(u);
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
  function Yf(l) {
    if (l.blockedOn !== null) return !1;
    for (var t = l.targetContainers; 0 < t.length; ) {
      var u = Eo(l.nativeEvent);
      if (u === null) {
        u = l.nativeEvent;
        var a = new u.constructor(
          u.type,
          u
        );
        ei = a, u.target.dispatchEvent(a), ei = null;
      } else
        return t = za(u), t !== null && Id(t), l.blockedOn = u, !1;
      t.shift();
    }
    return !0;
  }
  function uv(l, t, u) {
    Yf(l) && u.delete(t);
  }
  function m1() {
    _o = !1, Qu !== null && Yf(Qu) && (Qu = null), Zu !== null && Yf(Zu) && (Zu = null), Vu !== null && Yf(Vu) && (Vu = null), un.forEach(uv), an.forEach(uv);
  }
  function qf(l, t) {
    l.blockedOn === t && (l.blockedOn = null, _o || (_o = !0, d.unstable_scheduleCallback(
      d.unstable_NormalPriority,
      m1
    )));
  }
  var jf = null;
  function av(l) {
    jf !== l && (jf = l, d.unstable_scheduleCallback(
      d.unstable_NormalPriority,
      function() {
        jf === l && (jf = null);
        for (var t = 0; t < l.length; t += 3) {
          var u = l[t], a = l[t + 1], e = l[t + 2];
          if (typeof a != "function") {
            if (zo(a || u) === null)
              continue;
            break;
          }
          var n = za(u);
          n !== null && (l.splice(t, 3), t -= 3, ac(
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
  function oe(l) {
    function t(c) {
      return qf(c, l);
    }
    Qu !== null && qf(Qu, l), Zu !== null && qf(Zu, l), Vu !== null && qf(Vu, l), un.forEach(t), an.forEach(t);
    for (var u = 0; u < Lu.length; u++) {
      var a = Lu[u];
      a.blockedOn === l && (a.blockedOn = null);
    }
    for (; 0 < Lu.length && (u = Lu[0], u.blockedOn === null); )
      tv(u), u.blockedOn === null && Lu.shift();
    if (u = (l.ownerDocument || l).$$reactFormReplay, u != null)
      for (a = 0; a < u.length; a += 3) {
        var e = u[a], n = u[a + 1], f = e[Il] || null;
        if (typeof n == "function")
          f || av(u);
        else if (f) {
          var i = null;
          if (n && n.hasAttribute("formAction")) {
            if (e = n, f = n[Il] || null)
              i = f.formAction;
            else if (zo(e) !== null) continue;
          } else i = f.action;
          typeof i == "function" ? u[a + 1] = i : (u.splice(a, 3), a -= 3), av(u);
        }
      }
  }
  function ev() {
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
  function Oo(l) {
    this._internalRoot = l;
  }
  xf.prototype.render = Oo.prototype.render = function(l) {
    var t = this._internalRoot;
    if (t === null) throw Error(r(409));
    var u = t.current, a = mt();
    Fd(u, a, l, t, null, null);
  }, xf.prototype.unmount = Oo.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var t = l.containerInfo;
      Fd(l.current, 2, null, l, null, null), zf(), t[Ea] = null;
    }
  };
  function xf(l) {
    this._internalRoot = l;
  }
  xf.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var t = Jo();
      l = { blockedOn: null, target: l, priority: t };
      for (var u = 0; u < Lu.length && t !== 0 && t < Lu[u].priority; u++) ;
      Lu.splice(u, 0, l), u === 0 && tv(l);
    }
  };
  var nv = b.version;
  if (nv !== "19.3.0")
    throw Error(
      r(
        527,
        nv,
        "19.3.0"
      )
    );
  Z.findDOMNode = function(l) {
    var t = l._reactInternals;
    if (t === void 0)
      throw typeof l.render == "function" ? Error(r(188)) : (l = Object.keys(l).join(","), Error(r(268, l)));
    return l = tl(t), l = l !== null ? p(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var h1 = {
    bundleType: 0,
    version: "19.3.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: R,
    reconcilerVersion: "19.3.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Gf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Gf.isDisabled && Gf.supportsFiber)
      try {
        de = Gf.inject(
          h1
        ), it = Gf;
      } catch {
      }
  }
  return fn.createRoot = function(l, t) {
    if (!A(l)) throw Error(r(299));
    var u = !1, a = "", e = $0, n = F0, f = W0;
    return t != null && (t.unstable_strictMode === !0 && (u = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (e = t.onUncaughtError), t.onCaughtError !== void 0 && (n = t.onCaughtError), t.onRecoverableError !== void 0 && (f = t.onRecoverableError)), t = wd(
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
      ev
    ), l[Ea] = t.current, Pc(l), new Oo(t);
  }, fn.hydrateRoot = function(l, t, u) {
    if (!A(l)) throw Error(r(299));
    var a = !1, e = "", n = $0, f = F0, i = W0, c = null;
    return u != null && (u.unstable_strictMode === !0 && (a = !0), u.identifierPrefix !== void 0 && (e = u.identifierPrefix), u.onUncaughtError !== void 0 && (n = u.onUncaughtError), u.onCaughtError !== void 0 && (f = u.onCaughtError), u.onRecoverableError !== void 0 && (i = u.onRecoverableError), u.formState !== void 0 && (c = u.formState)), t = wd(
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
      ev
    ), t.context = $d(null), u = t.current, a = mt(), a = kf(a), e = Du(a), e.callback = null, Cu(u, e, a), u = a, t.current.lanes = u, ye(t, u), kt(t), l[Ea] = t.current, Pc(l), new xf(t);
  }, fn.version = "19.3.0", fn;
}
var mv;
function D1() {
  if (mv) return Mo.exports;
  mv = 1;
  function d() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(d);
      } catch (b) {
        console.error(b);
      }
  }
  return d(), Mo.exports = M1(), Mo.exports;
}
var C1 = D1();
function U1(d) {
  return d && typeof d == "object" ? d : typeof window > "u" ? null : window;
}
function hv({
  snapshot: d,
  ownSeat: b = null,
  replayIndex: _ = null,
  flipVertical: r = !1
} = {}) {
  const A = d && typeof d == "object" && !Array.isArray(d) ? { ...d } : {};
  return {
    ...A,
    boardCode: String(A.boardCode || ""),
    version: Number.isFinite(Number(A.version)) ? Number(A.version) : 0,
    ownSeat: b,
    replayIndex: _,
    flipVertical: !!r
  };
}
function R1({
  node: d,
  snapshot: b,
  ownSeat: _,
  replayIndex: r,
  flipVertical: A,
  onMoveClick: C,
  elmRuntime: j
} = {}) {
  const L = U1(j)?.Elm?.BoardIsland?.init;
  if (typeof L != "function" || !d)
    return {
      app: null,
      sendSnapshotUpdate: () => {
      },
      cleanup: () => {
      }
    };
  const tl = hv({
    snapshot: b,
    ownSeat: _,
    replayIndex: r,
    flipVertical: A
  }), p = L({ node: d, flags: tl }), T = p?.ports?.boardMoveClicked, B = p?.ports?.boardSnapshot, ll = (el) => {
    typeof C == "function" && C(el);
  };
  return typeof T?.subscribe == "function" && T.subscribe(ll), { app: p, sendSnapshotUpdate: (el) => {
    typeof B?.send == "function" && B.send(hv(el));
  }, cleanup: () => {
    typeof T?.unsubscribe == "function" && T.unsubscribe(ll), typeof p?.unmount == "function" && p.unmount();
  } };
}
function p1({
  snapshot: d,
  ownSeat: b,
  replayIndex: _,
  flipVertical: r,
  onMoveClick: A
}) {
  const C = gt.useRef(null), j = gt.useRef(null), x = gt.useRef(A);
  x.current = A;
  const L = gt.useMemo(
    () => ({ snapshot: d, ownSeat: b, replayIndex: _, flipVertical: r }),
    [d, b, _, r]
  );
  return gt.useEffect(() => (j.current = R1({
    node: C.current,
    ...L,
    onMoveClick: (tl) => x.current?.(tl)
  }), () => {
    j.current?.cleanup?.(), j.current = null;
  }), []), gt.useEffect(() => {
    j.current?.sendSnapshotUpdate?.(L);
  }, [L]), /* @__PURE__ */ w.jsx("div", { ref: C, "data-testid": "elm-board-island-host" });
}
function H1(d) {
  if (typeof d != "function")
    throw new Error("Fetch API unavailable.");
  return d;
}
async function B1(d) {
  return d.json();
}
async function Y1({ clientId: d, moveTimeLimitSeconds: b }, { fetchImpl: _ = globalThis.fetch } = {}) {
  const r = H1(_), A = Number(b), C = {
    clientId: String(d || "").trim(),
    moveTimeLimitSeconds: Number.isFinite(A) ? A : 15
  }, j = await r("/api/rooms", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(C)
  });
  if (!j.ok)
    throw new Error(`Board creation failed: ${j.status}`);
  return B1(j);
}
function q1(d = globalThis.window?.location || globalThis.location) {
  const b = d?.protocol === "https:" ? "wss:" : "ws:", _ = d?.host || "localhost";
  return `${b}//${_}/ws`;
}
function j1({
  roomId: d,
  clientId: b,
  onMessage: _,
  onStatus: r,
  WebSocketImpl: A = globalThis.window?.WebSocket || globalThis.WebSocket,
  socketUrl: C = q1()
} = {}) {
  if (typeof A != "function")
    throw new Error("WebSocket unavailable.");
  const j = new A(C);
  return j.onopen = () => {
    r?.("connected"), j.send(
      JSON.stringify({
        type: "watch",
        roomId: String(d || "").trim(),
        clientId: String(b || "").trim()
      })
    );
  }, j.onmessage = (x) => {
    try {
      _?.(JSON.parse(x.data));
    } catch {
      _?.({ type: "error", error: "malformed websocket message" });
    }
  }, j.onerror = () => {
    r?.("error");
  }, j.onclose = () => {
    r?.("disconnected");
  }, {
    socket: j,
    send(x) {
      j.send(JSON.stringify(x));
    },
    close() {
      j.close?.();
    }
  };
}
const gv = "traceballElmClientId", Qf = "traceballPlayerName", x1 = "traceballOnlineMoveTimer";
function Zf() {
  return globalThis.window?.localStorage || globalThis.localStorage;
}
function G1(d = Math.random) {
  return d().toString(36).slice(2, 12);
}
function X1({
  storage: d = Zf(),
  random: b = Math.random
} = {}) {
  const _ = d?.getItem?.(gv);
  if (_) return _;
  const r = `traceball-elm-${G1(b)}`;
  return d?.setItem?.(gv, r), r;
}
function bv(d = Math.random) {
  const b = (_) => _[Math.floor(d() * _.length)];
  return `${b(["Neon", "Turbo", "Cosmic", "Lucky", "Pixel", "Rocket", "Thunder"])} ${b(["Striker", "Falcon", "Comet", "Phantom", "Kicker", "Ace", "Wizard"])}`;
}
function Ev(d, b = "") {
  return String(d || "").replace(/\s+/g, " ").trim().slice(0, 24) || b;
}
function Q1({
  storage: d = Zf(),
  randomName: b = bv
} = {}) {
  const _ = String(d?.getItem?.(Qf) || ""), r = Ev(_, "");
  if (r && r !== "Elm Player")
    return d?.setItem?.(Qf, r), r;
  const A = b();
  return d?.setItem?.(Qf, A), A;
}
function Z1(d, { storage: b = Zf(), randomName: _ = bv } = {}) {
  const r = Ev(d, _());
  return b?.setItem?.(Qf, r), r;
}
function V1(d, b = 15) {
  const _ = Number(d);
  return Number.isFinite(_) && _ >= 0 ? _ : b;
}
function L1({
  storage: d = Zf(),
  fallback: b = 15
} = {}) {
  return V1(
    d?.getItem?.(x1),
    b
  );
}
function K1({
  clientId: d = "",
  playerName: b = "",
  connectionStatus: _ = "idle",
  currentBoardCode: r = "",
  boardState: A = null,
  boardList: C = [],
  mainTab: j = "home",
  mode: x = "online",
  toast: L = null,
  onlineMoveTimer: tl = 15,
  localMoveTimer: p = 15,
  historyPanelOpen: T = !1,
  rulesPanelOpen: B = !1
} = {}) {
  return {
    clientId: d,
    playerName: b,
    connectionStatus: _,
    currentBoardCode: r,
    boardState: A,
    boardList: C,
    mainTab: j,
    mode: x,
    toast: L,
    onlineSetup: {
      moveTimeLimitSeconds: tl
    },
    localSetup: {
      moveTimeLimitSeconds: p
    },
    historyPanelOpen: T,
    rulesPanelOpen: B
  };
}
function J1(d, b, _) {
  if (!_ || typeof _ != "object") return !1;
  const r = String(d || "").trim(), A = String(_.boardCode || "").trim();
  if (r && A && r !== A) return !1;
  if (!b || typeof b != "object") return !0;
  const C = String(b.boardCode || "").trim();
  if (!C || C !== A) return !0;
  const j = Number(b.version), x = Number(_.version);
  return Number.isFinite(j) ? Number.isFinite(x) ? x > j : !1 : !0;
}
function w1(d, b) {
  if (!b || typeof b != "object") return d;
  switch (b.type) {
    case "hydrateShell":
      return { ...d, ...b.payload };
    case "setPlayerName":
      return { ...d, playerName: String(b.playerName || "") };
    case "setConnectionStatus":
      return { ...d, connectionStatus: String(b.status || "idle") };
    case "setCurrentBoardCode":
      return { ...d, currentBoardCode: String(b.boardCode || "") };
    case "receiveBoardState":
      return J1(
        d.currentBoardCode,
        d.boardState,
        b.boardState
      ) ? {
        ...d,
        boardState: b.boardState,
        currentBoardCode: String(
          b.boardState?.boardCode || d.currentBoardCode || ""
        )
      } : d;
    case "receiveBoardList":
      return {
        ...d,
        boardList: Array.isArray(b.boardList) ? b.boardList : Array.isArray(b.boardList?.rooms) ? b.boardList.rooms : []
      };
    case "setMainTab":
      return { ...d, mainTab: String(b.mainTab || d.mainTab) };
    case "setMode":
      return { ...d, mode: String(b.mode || d.mode) };
    case "setToast":
      return { ...d, toast: b.toast ?? null };
    case "setHistoryPanelOpen":
      return { ...d, historyPanelOpen: !!b.open };
    case "setRulesPanelOpen":
      return { ...d, rulesPanelOpen: !!b.open };
    case "setOnlineMoveTimer":
      return {
        ...d,
        onlineSetup: {
          ...d.onlineSetup,
          moveTimeLimitSeconds: Number(b.seconds)
        }
      };
    case "setLocalMoveTimer":
      return {
        ...d,
        localSetup: {
          ...d.localSetup,
          moveTimeLimitSeconds: Number(b.seconds)
        }
      };
    default:
      return d;
  }
}
const $1 = {
  minHeight: "100vh",
  display: "grid",
  placeItems: "center",
  padding: "32px 20px",
  background: "radial-gradient(circle at top, rgba(10, 143, 40, 0.18), transparent 38%), linear-gradient(180deg, #f6fbf4 0%, #e4f0e2 100%)",
  color: "#102a1a"
}, F1 = {
  width: "min(720px, 100%)",
  borderRadius: "24px",
  padding: "28px",
  background: "rgba(255, 255, 255, 0.92)",
  boxShadow: "0 24px 70px rgba(16, 42, 26, 0.16)",
  border: "1px solid rgba(16, 42, 26, 0.08)"
}, W1 = {
  margin: 0,
  fontSize: "0.85rem",
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: "#0a8f28",
  fontWeight: 700
}, I1 = {
  margin: "10px 0 12px",
  fontSize: "clamp(2rem, 4vw, 3.25rem)",
  lineHeight: 1.05
}, k1 = {
  margin: 0,
  fontSize: "1.05rem",
  lineHeight: 1.6,
  color: "#33513f"
}, P1 = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
  gap: "14px",
  marginTop: "24px"
}, Xf = {
  padding: "16px",
  borderRadius: "18px",
  background: "#f7fbf7",
  border: "1px solid rgba(16, 42, 26, 0.08)"
}, Ju = {
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
}, lh = {
  width: "100%",
  marginTop: "10px",
  padding: "12px 14px",
  borderRadius: "12px",
  border: "1px solid rgba(16, 42, 26, 0.14)",
  fontSize: "1rem",
  boxSizing: "border-box"
}, Sv = {
  display: "flex",
  gap: "10px",
  marginTop: "18px",
  flexWrap: "wrap"
}, Ro = (d) => ({
  border: "1px solid rgba(16, 42, 26, 0.12)",
  borderRadius: "999px",
  padding: "8px 14px",
  background: d ? "#102a1a" : "#f7fbf7",
  color: d ? "#f6fbf4" : "#102a1a",
  fontWeight: 700,
  cursor: "pointer"
}), po = {
  marginTop: "18px",
  padding: "16px",
  borderRadius: "16px",
  background: "#eef7f0",
  border: "1px dashed rgba(16, 42, 26, 0.18)",
  color: "#153124",
  fontWeight: 600
}, th = {
  marginTop: "24px",
  padding: "16px 18px",
  borderRadius: "18px",
  background: "#102a1a",
  color: "#f6fbf4",
  lineHeight: 1.55
}, uh = {
  display: "inline-block",
  width: "10px",
  height: "10px",
  borderRadius: "999px",
  marginRight: "8px",
  background: "#9aa79e"
};
function re(d) {
  return String(d || "").trim();
}
function ah(d) {
  const b = Number(d);
  return Number.isFinite(b) ? b : 0;
}
function eh() {
  return globalThis.window?.history ?? globalThis.history ?? null;
}
function Yo() {
  return globalThis.window?.location ?? globalThis.location ?? null;
}
function nh(d) {
  return d ? typeof d.href == "string" && d.href ? d.href : `${d.origin || "http://localhost"}${d.pathname || "/react"}${d.search || ""}${d.hash || ""}` : "";
}
function fh({
  locationLike: d = Yo()
} = {}) {
  const b = nh(d);
  if (!b) return "";
  const _ = new URL(b);
  return re(
    _.searchParams.get("board") || _.searchParams.get("room") || _.searchParams.get("code") || ""
  );
}
function ih(d) {
  if (!d || typeof d != "object" || String(d.type || "") !== "state") return null;
  const b = re(d.boardCode || d.roomId), _ = d.board && typeof d.board == "object", r = d.game && typeof d.game == "object";
  return !b || !_ && !r ? null : {
    boardCode: b,
    version: ah(d.version),
    ..._ ? { board: d.board } : {},
    ...r ? { game: d.game } : {}
  };
}
function ch(d, { historyLike: b = eh(), locationLike: _ = Yo() } = {}) {
  if (!_ || typeof b?.replaceState != "function")
    return null;
  const r = typeof _.href == "string" && _.href ? _.href : `${_.origin || "http://localhost"}${_.pathname || "/react"}${_.search || ""}${_.hash || ""}`, A = new URL(r);
  A.pathname = "/react", d ? A.searchParams.set("board", String(d).trim()) : A.searchParams.delete("board");
  const C = `${A.pathname}${A.search}${A.hash}`;
  return b.replaceState(b.state ?? null, "", C), C;
}
function oh({
  currentBoardCode: d,
  clientId: b,
  dispatch: _,
  onOwnSeat: r,
  onMessage: A,
  connect: C = j1
}) {
  const j = re(d);
  return !j || typeof C != "function" ? null : C({
    roomId: j,
    clientId: String(b || ""),
    onStatus(x) {
      _?.({ type: "setConnectionStatus", status: x });
    },
    onMessage(x) {
      if (A?.(x), x?.type === "joined") {
        const tl = String(x.playerId || "").trim();
        (tl === "p1" || tl === "p2") && r?.(tl);
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
      const L = ih(x);
      L && _?.({ type: "receiveBoardState", boardState: L });
    }
  });
}
function Ho({
  roomId: d,
  clientId: b,
  dispatch: _,
  setOwnSeat: r,
  connectionRef: A,
  activeBoardRef: C,
  onMessage: j,
  connect: x = oh
}) {
  const L = re(d);
  if (!L || typeof x != "function") return null;
  if (C?.current === L && A?.current)
    return A.current;
  A?.current?.close?.(), A && (A.current = null), C && (C.current = L), r?.(null);
  const tl = x({
    currentBoardCode: L,
    clientId: b,
    dispatch: _,
    onOwnSeat: r,
    onMessage: j
  });
  return A && (A.current = tl), tl;
}
function rh({
  clientId: d,
  dispatch: b,
  startWatching: _,
  locationLike: r = Yo()
}) {
  const A = fh({ locationLike: r });
  return A ? (b?.({ type: "setCurrentBoardCode", boardCode: A }), _?.({
    roomId: A,
    clientId: d,
    onMessage(C) {
      C?.type === "BoardNotFound" && typeof C.message == "string" && b?.({ type: "setToast", toast: C.message }), C?.type === "error" && typeof C.error == "string" && b?.({ type: "setToast", toast: C.error });
    }
  })) : null;
}
function sh(d) {
  const b = d?.point;
  if (!b || typeof b != "object") return null;
  const _ = Number(b.x), r = Number(b.y);
  return !Number.isFinite(_) || !Number.isFinite(r) ? null : { x: _, y: r };
}
function dh(d) {
  return typeof d?.send == "function" && Number(d?.socket?.readyState) === 1;
}
function vh({
  payload: d,
  ownSeat: b,
  connection: _,
  dispatch: r
}) {
  if (!dh(_)) {
    r?.({
      type: "setToast",
      toast: "Connection unavailable. Reconnect to move."
    });
    return;
  }
  const A = String(b || "").trim();
  if (A !== "p1" && A !== "p2") {
    r?.({ type: "setToast", toast: "Join a seat to move." });
    return;
  }
  const C = sh(d);
  if (!C) {
    r?.({ type: "setToast", toast: "Invalid move target." });
    return;
  }
  try {
    _.send({ type: "move", to: C });
  } catch {
    r?.({
      type: "setToast",
      toast: "Move could not be sent. Reconnect and try again."
    });
  }
}
async function yh({
  clientId: d,
  moveTimeLimitSeconds: b,
  dispatch: _,
  create: r = Y1,
  syncUrl: A = ch,
  startWatching: C,
  refreshBoardList: j
}) {
  try {
    const x = await r({ clientId: d, moveTimeLimitSeconds: b }), L = re(x?.roomId);
    if (!L)
      throw new Error("Board creation response missing roomId.");
    return _?.({ type: "setCurrentBoardCode", boardCode: L }), A?.(L), C?.({ roomId: L, clientId: d }), await j?.(), x;
  } catch (x) {
    return _?.({
      type: "setToast",
      toast: x instanceof Error && x.message ? x.message : "Board creation failed."
    }), null;
  }
}
function mh({ initialState: d }) {
  const [b, _] = gt.useReducer(w1, d), [r, A] = gt.useState(null), C = gt.useRef(null), j = gt.useRef(""), x = d?.demoBoardSnapshot || null, L = b.boardState || x, tl = String(b.connectionStatus || "idle");
  gt.useEffect(() => {
    const ll = rh({
      clientId: b.clientId,
      dispatch: _,
      startWatching: ({ roomId: El, clientId: jl, onMessage: el }) => Ho({
        roomId: El,
        clientId: jl,
        dispatch: _,
        setOwnSeat: A,
        connectionRef: C,
        activeBoardRef: j,
        onMessage: el
      })
    });
    return () => {
      C.current === ll && ll && (j.current = "", C.current = null, ll.close?.());
    };
  }, []), gt.useEffect(() => {
    const ll = re(b.currentBoardCode);
    if (!ll) {
      C.current = null, A(null), _({ type: "setConnectionStatus", status: "idle" });
      return;
    }
    let El = null;
    try {
      El = Ho({
        roomId: ll,
        clientId: b.clientId,
        dispatch: _,
        setOwnSeat: A,
        connectionRef: C,
        activeBoardRef: j,
        onMessage: null
      });
    } catch {
      j.current = "", C.current = null, _({ type: "setConnectionStatus", status: "error" });
      return;
    }
    return () => {
      C.current === El && (j.current = "", C.current = null, El?.close?.());
    };
  }, [b.currentBoardCode, b.clientId]);
  const p = b.clientId && b.clientId.length > 6 ? `...${b.clientId.slice(-6)}` : "identity ready", T = (ll) => {
    const El = ll.target.value;
    _({ type: "setPlayerName", playerName: El }), Z1(El);
  }, B = async () => {
    await yh({
      clientId: b.clientId,
      moveTimeLimitSeconds: b.onlineSetup.moveTimeLimitSeconds,
      dispatch: _,
      startWatching: ({ roomId: ll, clientId: El }) => Ho({
        roomId: ll,
        clientId: El,
        dispatch: _,
        setOwnSeat: A,
        connectionRef: C,
        activeBoardRef: j
      })
    });
  };
  return /* @__PURE__ */ w.jsx("main", { style: $1, children: /* @__PURE__ */ w.jsxs("section", { style: F1, children: [
    /* @__PURE__ */ w.jsx("p", { style: W1, children: "React product shell" }),
    /* @__PURE__ */ w.jsx("h1", { style: I1, children: "Traceball Arena" }),
    /* @__PURE__ */ w.jsx("p", { style: k1, children: "The React shell owns product state only. The Elm board island is not mounted yet, and online authority remains on the server." }),
    /* @__PURE__ */ w.jsxs("div", { style: P1, children: [
      /* @__PURE__ */ w.jsxs("article", { style: Xf, children: [
        /* @__PURE__ */ w.jsx("p", { style: Ju, children: "Player Name" }),
        /* @__PURE__ */ w.jsx(
          "input",
          {
            "aria-label": "Player name",
            value: b.playerName || "",
            onChange: T,
            style: lh,
            placeholder: "Enter your name"
          }
        )
      ] }),
      /* @__PURE__ */ w.jsxs("article", { style: Xf, children: [
        /* @__PURE__ */ w.jsx("p", { style: Ju, children: "Client Identity" }),
        /* @__PURE__ */ w.jsx("p", { style: cn, children: p })
      ] }),
      /* @__PURE__ */ w.jsxs("article", { style: Xf, children: [
        /* @__PURE__ */ w.jsx("p", { style: Ju, children: "Online Move Timer" }),
        /* @__PURE__ */ w.jsxs("p", { style: cn, children: [
          b.onlineSetup.moveTimeLimitSeconds,
          "s"
        ] })
      ] }),
      /* @__PURE__ */ w.jsxs("article", { style: Xf, children: [
        /* @__PURE__ */ w.jsx("p", { style: Ju, children: "Connection" }),
        /* @__PURE__ */ w.jsxs("p", { style: cn, children: [
          /* @__PURE__ */ w.jsx(
            "span",
            {
              style: {
                ...uh,
                background: tl === "connected" ? "#0a8f28" : tl === "error" ? "#d64545" : "#9aa79e"
              }
            }
          ),
          tl
        ] })
      ] })
    ] }),
    /* @__PURE__ */ w.jsxs("div", { style: { marginTop: "20px" }, children: [
      /* @__PURE__ */ w.jsx("p", { style: Ju, children: "Selected Mode" }),
      /* @__PURE__ */ w.jsxs("div", { style: Sv, children: [
        /* @__PURE__ */ w.jsx(
          "button",
          {
            type: "button",
            style: Ro(b.mode === "online"),
            onClick: () => _({ type: "setMode", mode: "online" }),
            children: "Online"
          }
        ),
        /* @__PURE__ */ w.jsx(
          "button",
          {
            type: "button",
            style: Ro(b.mode === "local"),
            onClick: () => _({ type: "setMode", mode: "local" }),
            children: "Local"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ w.jsxs("div", { style: { marginTop: "20px" }, children: [
      /* @__PURE__ */ w.jsx("p", { style: Ju, children: "Online Actions" }),
      /* @__PURE__ */ w.jsx("div", { style: Sv, children: /* @__PURE__ */ w.jsx(
        "button",
        {
          type: "button",
          style: Ro(!1),
          onClick: B,
          children: "Create Board"
        }
      ) })
    ] }),
    /* @__PURE__ */ w.jsxs("div", { style: { marginTop: "20px" }, children: [
      /* @__PURE__ */ w.jsx("p", { style: Ju, children: "Active Tab" }),
      /* @__PURE__ */ w.jsx("p", { style: cn, children: b.mainTab || "home" })
    ] }),
    b.currentBoardCode ? /* @__PURE__ */ w.jsxs("div", { style: { marginTop: "20px" }, children: [
      /* @__PURE__ */ w.jsx("p", { style: Ju, children: "Current Board" }),
      /* @__PURE__ */ w.jsx("p", { style: cn, children: b.currentBoardCode })
    ] }) : null,
    L ? /* @__PURE__ */ w.jsx("div", { style: po, children: /* @__PURE__ */ w.jsx(
      p1,
      {
        snapshot: L,
        ownSeat: r,
        replayIndex: null,
        flipVertical: !1,
        onMoveClick: (ll) => {
          console.info("Board move click", ll), vh({
            payload: ll,
            ownSeat: r,
            connection: C.current,
            dispatch: _
          });
        }
      }
    ) }) : /* @__PURE__ */ w.jsx("div", { style: po, children: "Board island not mounted yet" }),
    b.toast ? /* @__PURE__ */ w.jsx("div", { style: { ...po, marginTop: "10px" }, children: b.toast }) : null,
    /* @__PURE__ */ w.jsx("div", { style: th, children: "Elm remains the board and replay correctness surface. The server remains authoritative for seats, timers, pause/resume, winners, and online move validation." })
  ] }) });
}
const Tv = document.getElementById("react-root");
if (Tv) {
  const d = K1({
    clientId: X1(),
    playerName: Q1(),
    onlineMoveTimer: L1()
  });
  C1.createRoot(Tv).render(
    /* @__PURE__ */ w.jsx(z1.StrictMode, { children: /* @__PURE__ */ w.jsx(mh, { initialState: d }) })
  );
}
