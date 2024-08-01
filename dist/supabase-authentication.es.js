/**
* @vue/shared v3.4.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Qt(e, t) {
  const n = new Set(e.split(","));
  return (r) => n.has(r);
}
const D = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, Xt = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], Y = () => {
}, Zt = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), C = Object.assign, kt = Object.prototype.hasOwnProperty, E = (e, t) => kt.call(e, t), _ = Array.isArray, G = (e) => be(e) === "[object Map]", en = (e) => be(e) === "[object Set]", N = (e) => typeof e == "function", R = (e) => typeof e == "string", se = (e) => typeof e == "symbol", S = (e) => e !== null && typeof e == "object", tn = (e) => (S(e) || N(e)) && N(e.then) && N(e.catch), nn = Object.prototype.toString, be = (e) => nn.call(e), mt = (e) => be(e).slice(8, -1), rn = (e) => be(e) === "[object Object]", ze = (e) => R(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, sn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, on = sn((e) => e.charAt(0).toUpperCase() + e.slice(1)), Z = (e, t) => !Object.is(e, t), cn = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
};
let nt;
const Et = () => nt || (nt = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ue(e) {
  if (_(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], s = R(r) ? fn(r) : Ue(r);
      if (s)
        for (const o in s)
          t[o] = s[o];
    }
    return t;
  } else if (R(e) || S(e))
    return e;
}
const ln = /;(?![^(]*\))/g, an = /:([^]+)/, un = /\/\*[^]*?\*\//g;
function fn(e) {
  const t = {};
  return e.replace(un, "").split(ln).forEach((n) => {
    if (n) {
      const r = n.split(an);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function We(e) {
  let t = "";
  if (R(e))
    t = e;
  else if (_(e))
    for (let n = 0; n < e.length; n++) {
      const r = We(e[n]);
      r && (t += r + " ");
    }
  else if (S(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
/**
* @vue/reactivity v3.4.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function ne(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let pn;
function dn(e, t = pn) {
  t && t.active && t.effects.push(e);
}
let ee;
class hn {
  constructor(t, n, r, s) {
    this.fn = t, this.trigger = n, this.scheduler = r, this.active = !0, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, dn(this, s);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      this._dirtyLevel = 1, Se();
      for (let t = 0; t < this._depsLength; t++) {
        const n = this.deps[t];
        if (n.computed && (_n(n.computed), this._dirtyLevel >= 4))
          break;
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), ve();
    }
    return this._dirtyLevel >= 4;
  }
  set dirty(t) {
    this._dirtyLevel = t ? 4 : 0;
  }
  run() {
    if (this._dirtyLevel = 0, !this.active)
      return this.fn();
    let t = U, n = ee;
    try {
      return U = !0, ee = this, this._runnings++, rt(this), this.fn();
    } finally {
      st(this), this._runnings--, ee = n, U = t;
    }
  }
  stop() {
    this.active && (rt(this), st(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function _n(e) {
  return e.value;
}
function rt(e) {
  e._trackId++, e._depsLength = 0;
}
function st(e) {
  if (e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++)
      wt(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function wt(e, t) {
  const n = e.get(t);
  n !== void 0 && t._trackId !== n && (e.delete(t), e.size === 0 && e.cleanup());
}
let U = !0, $e = 0;
const Nt = [];
function Se() {
  Nt.push(U), U = !1;
}
function ve() {
  const e = Nt.pop();
  U = e === void 0 ? !0 : e;
}
function Be() {
  $e++;
}
function Je() {
  for ($e--; !$e && Me.length; )
    Me.shift()();
}
function gn(e, t, n) {
  var r;
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const s = e.deps[e._depsLength];
    s !== t ? (s && wt(s, e), e.deps[e._depsLength++] = t) : e._depsLength++, process.env.NODE_ENV !== "production" && ((r = e.onTrack) == null || r.call(e, C({ effect: e }, n)));
  }
}
const Me = [];
function mn(e, t, n) {
  var r;
  Be();
  for (const s of e.keys()) {
    let o;
    s._dirtyLevel < t && (o ?? (o = e.get(s) === s._trackId)) && (s._shouldSchedule || (s._shouldSchedule = s._dirtyLevel === 0), s._dirtyLevel = t), s._shouldSchedule && (o ?? (o = e.get(s) === s._trackId)) && (process.env.NODE_ENV !== "production" && ((r = s.onTrigger) == null || r.call(s, C({ effect: s }, n))), s.trigger(), (!s._runnings || s.allowRecurse) && s._dirtyLevel !== 2 && (s._shouldSchedule = !1, s.scheduler && Me.push(s.scheduler)));
  }
  Je();
}
const En = (e, t) => {
  const n = /* @__PURE__ */ new Map();
  return n.cleanup = e, n.computed = t, n;
}, Ae = /* @__PURE__ */ new WeakMap(), W = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), Fe = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
function O(e, t, n) {
  if (U && ee) {
    let r = Ae.get(e);
    r || Ae.set(e, r = /* @__PURE__ */ new Map());
    let s = r.get(n);
    s || r.set(n, s = En(() => r.delete(n))), gn(
      ee,
      s,
      process.env.NODE_ENV !== "production" ? {
        target: e,
        type: t,
        key: n
      } : void 0
    );
  }
}
function A(e, t, n, r, s, o) {
  const i = Ae.get(e);
  if (!i)
    return;
  let c = [];
  if (t === "clear")
    c = [...i.values()];
  else if (n === "length" && _(e)) {
    const a = Number(r);
    i.forEach((u, h) => {
      (h === "length" || !se(h) && h >= a) && c.push(u);
    });
  } else
    switch (n !== void 0 && c.push(i.get(n)), t) {
      case "add":
        _(e) ? ze(n) && c.push(i.get("length")) : (c.push(i.get(W)), G(e) && c.push(i.get(Fe)));
        break;
      case "delete":
        _(e) || (c.push(i.get(W)), G(e) && c.push(i.get(Fe)));
        break;
      case "set":
        G(e) && c.push(i.get(W));
        break;
    }
  Be();
  for (const a of c)
    a && mn(
      a,
      4,
      process.env.NODE_ENV !== "production" ? {
        target: e,
        type: t,
        key: n,
        newValue: r,
        oldValue: s,
        oldTarget: o
      } : void 0
    );
  Je();
}
const wn = /* @__PURE__ */ Qt("__proto__,__v_isRef,__isVue"), Ot = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(se)
), ot = /* @__PURE__ */ Nn();
function Nn() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const r = p(this);
      for (let o = 0, i = this.length; o < i; o++)
        O(r, "get", o + "");
      const s = r[t](...n);
      return s === -1 || s === !1 ? r[t](...n.map(p)) : s;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      Se(), Be();
      const r = p(this)[t].apply(this, n);
      return Je(), ve(), r;
    };
  }), e;
}
function On(e) {
  se(e) || (e = String(e));
  const t = p(this);
  return O(t, "has", e), t.hasOwnProperty(e);
}
class bt {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, r) {
    const s = this._isReadonly, o = this._isShallow;
    if (n === "__v_isReactive")
      return !s;
    if (n === "__v_isReadonly")
      return s;
    if (n === "__v_isShallow")
      return o;
    if (n === "__v_raw")
      return r === (s ? o ? Vt : xt : o ? $n : yt).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the reciever is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const i = _(t);
    if (!s) {
      if (i && E(ot, n))
        return Reflect.get(ot, n, r);
      if (n === "hasOwnProperty")
        return On;
    }
    const c = Reflect.get(t, n, r);
    return (se(n) ? Ot.has(n) : wn(n)) || (s || O(t, "get", n), o) ? c : y(c) ? i && ze(n) ? c : c.value : S(c) ? s ? Ct(c) : Rt(c) : c;
  }
}
class bn extends bt {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, s) {
    let o = t[n];
    if (!this._isShallow) {
      const a = j(o);
      if (!F(r) && !j(r) && (o = p(o), r = p(r)), !_(t) && y(o) && !y(r))
        return a ? !1 : (o.value = r, !0);
    }
    const i = _(t) && ze(n) ? Number(n) < t.length : E(t, n), c = Reflect.set(t, n, r, s);
    return t === p(s) && (i ? Z(r, o) && A(t, "set", n, r, o) : A(t, "add", n, r)), c;
  }
  deleteProperty(t, n) {
    const r = E(t, n), s = t[n], o = Reflect.deleteProperty(t, n);
    return o && r && A(t, "delete", n, void 0, s), o;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!se(n) || !Ot.has(n)) && O(t, "has", n), r;
  }
  ownKeys(t) {
    return O(
      t,
      "iterate",
      _(t) ? "length" : W
    ), Reflect.ownKeys(t);
  }
}
class St extends bt {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return process.env.NODE_ENV !== "production" && ne(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return process.env.NODE_ENV !== "production" && ne(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const Sn = /* @__PURE__ */ new bn(), vn = /* @__PURE__ */ new St(), yn = /* @__PURE__ */ new St(!0), qe = (e) => e, ye = (e) => Reflect.getPrototypeOf(e);
function ie(e, t, n = !1, r = !1) {
  e = e.__v_raw;
  const s = p(e), o = p(t);
  n || (Z(t, o) && O(s, "get", t), O(s, "get", o));
  const { has: i } = ye(s), c = r ? qe : n ? Xe : Qe;
  if (i.call(s, t))
    return c(e.get(t));
  if (i.call(s, o))
    return c(e.get(o));
  e !== s && e.get(t);
}
function ce(e, t = !1) {
  const n = this.__v_raw, r = p(n), s = p(e);
  return t || (Z(e, s) && O(r, "has", e), O(r, "has", s)), e === s ? n.has(e) : n.has(e) || n.has(s);
}
function le(e, t = !1) {
  return e = e.__v_raw, !t && O(p(e), "iterate", W), Reflect.get(e, "size", e);
}
function it(e, t = !1) {
  !t && !F(e) && !j(e) && (e = p(e));
  const n = p(this);
  return ye(n).has.call(n, e) || (n.add(e), A(n, "add", e, e)), this;
}
function ct(e, t, n = !1) {
  !n && !F(t) && !j(t) && (t = p(t));
  const r = p(this), { has: s, get: o } = ye(r);
  let i = s.call(r, e);
  i ? process.env.NODE_ENV !== "production" && vt(r, s, e) : (e = p(e), i = s.call(r, e));
  const c = o.call(r, e);
  return r.set(e, t), i ? Z(t, c) && A(r, "set", e, t, c) : A(r, "add", e, t), this;
}
function lt(e) {
  const t = p(this), { has: n, get: r } = ye(t);
  let s = n.call(t, e);
  s ? process.env.NODE_ENV !== "production" && vt(t, n, e) : (e = p(e), s = n.call(t, e));
  const o = r ? r.call(t, e) : void 0, i = t.delete(e);
  return s && A(t, "delete", e, void 0, o), i;
}
function at() {
  const e = p(this), t = e.size !== 0, n = process.env.NODE_ENV !== "production" ? G(e) ? new Map(e) : new Set(e) : void 0, r = e.clear();
  return t && A(e, "clear", void 0, void 0, n), r;
}
function ae(e, t) {
  return function(r, s) {
    const o = this, i = o.__v_raw, c = p(i), a = t ? qe : e ? Xe : Qe;
    return !e && O(c, "iterate", W), i.forEach((u, h) => r.call(s, a(u), a(h), o));
  };
}
function ue(e, t, n) {
  return function(...r) {
    const s = this.__v_raw, o = p(s), i = G(o), c = e === "entries" || e === Symbol.iterator && i, a = e === "keys" && i, u = s[e](...r), h = n ? qe : t ? Xe : Qe;
    return !t && O(
      o,
      "iterate",
      a ? Fe : W
    ), {
      // iterator protocol
      next() {
        const { value: l, done: f } = u.next();
        return f ? { value: l, done: f } : {
          value: c ? [h(l[0]), h(l[1])] : h(l),
          done: f
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function T(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      ne(
        `${on(e)} operation ${n}failed: target is readonly.`,
        p(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function xn() {
  const e = {
    get(o) {
      return ie(this, o);
    },
    get size() {
      return le(this);
    },
    has: ce,
    add: it,
    set: ct,
    delete: lt,
    clear: at,
    forEach: ae(!1, !1)
  }, t = {
    get(o) {
      return ie(this, o, !1, !0);
    },
    get size() {
      return le(this);
    },
    has: ce,
    add(o) {
      return it.call(this, o, !0);
    },
    set(o, i) {
      return ct.call(this, o, i, !0);
    },
    delete: lt,
    clear: at,
    forEach: ae(!1, !0)
  }, n = {
    get(o) {
      return ie(this, o, !0);
    },
    get size() {
      return le(this, !0);
    },
    has(o) {
      return ce.call(this, o, !0);
    },
    add: T("add"),
    set: T("set"),
    delete: T("delete"),
    clear: T("clear"),
    forEach: ae(!0, !1)
  }, r = {
    get(o) {
      return ie(this, o, !0, !0);
    },
    get size() {
      return le(this, !0);
    },
    has(o) {
      return ce.call(this, o, !0);
    },
    add: T("add"),
    set: T("set"),
    delete: T("delete"),
    clear: T("clear"),
    forEach: ae(!0, !0)
  };
  return [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((o) => {
    e[o] = ue(o, !1, !1), n[o] = ue(o, !0, !1), t[o] = ue(o, !1, !0), r[o] = ue(
      o,
      !0,
      !0
    );
  }), [
    e,
    n,
    t,
    r
  ];
}
const [
  Vn,
  Rn,
  Cn,
  In
] = /* @__PURE__ */ xn();
function Ye(e, t) {
  const n = t ? e ? In : Cn : e ? Rn : Vn;
  return (r, s, o) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? r : Reflect.get(
    E(n, s) && s in r ? n : r,
    s,
    o
  );
}
const Dn = {
  get: /* @__PURE__ */ Ye(!1, !1)
}, Pn = {
  get: /* @__PURE__ */ Ye(!0, !1)
}, Tn = {
  get: /* @__PURE__ */ Ye(!0, !0)
};
function vt(e, t, n) {
  const r = p(n);
  if (r !== n && t.call(e, r)) {
    const s = mt(e);
    ne(
      `Reactive ${s} contains both the raw and reactive versions of the same object${s === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const yt = /* @__PURE__ */ new WeakMap(), $n = /* @__PURE__ */ new WeakMap(), xt = /* @__PURE__ */ new WeakMap(), Vt = /* @__PURE__ */ new WeakMap();
function Mn(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function An(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Mn(mt(e));
}
function Rt(e) {
  return j(e) ? e : Ge(
    e,
    !1,
    Sn,
    Dn,
    yt
  );
}
function Ct(e) {
  return Ge(
    e,
    !0,
    vn,
    Pn,
    xt
  );
}
function fe(e) {
  return Ge(
    e,
    !0,
    yn,
    Tn,
    Vt
  );
}
function Ge(e, t, n, r, s) {
  if (!S(e))
    return process.env.NODE_ENV !== "production" && ne(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = s.get(e);
  if (o)
    return o;
  const i = An(e);
  if (i === 0)
    return e;
  const c = new Proxy(
    e,
    i === 2 ? r : n
  );
  return s.set(e, c), c;
}
function Q(e) {
  return j(e) ? Q(e.__v_raw) : !!(e && e.__v_isReactive);
}
function j(e) {
  return !!(e && e.__v_isReadonly);
}
function F(e) {
  return !!(e && e.__v_isShallow);
}
function je(e) {
  return e ? !!e.__v_raw : !1;
}
function p(e) {
  const t = e && e.__v_raw;
  return t ? p(t) : e;
}
function Fn(e) {
  return Object.isExtensible(e) && cn(e, "__v_skip", !0), e;
}
const Qe = (e) => S(e) ? Rt(e) : e, Xe = (e) => S(e) ? Ct(e) : e;
function y(e) {
  return !!(e && e.__v_isRef === !0);
}
function jn(e) {
  return y(e) ? e.value : e;
}
const Ln = {
  get: (e, t, n) => jn(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const s = e[t];
    return y(s) && !y(n) ? (s.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function Hn(e) {
  return Q(e) ? e : new Proxy(e, Ln);
}
/**
* @vue/runtime-core v3.4.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const B = [];
function Kn(e) {
  B.push(e);
}
function zn() {
  B.pop();
}
let Ie = !1;
function g(e, ...t) {
  if (Ie) return;
  Ie = !0, Se();
  const n = B.length ? B[B.length - 1].component : null, r = n && n.appContext.config.warnHandler, s = Un();
  if (r)
    J(
      r,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((o) => {
          var i, c;
          return (c = (i = o.toString) == null ? void 0 : i.call(o)) != null ? c : JSON.stringify(o);
        }).join(""),
        n && n.proxy,
        s.map(
          ({ vnode: o }) => `at <${qt(n, o.type)}>`
        ).join(`
`),
        s
      ]
    );
  else {
    const o = [`[Vue warn]: ${e}`, ...t];
    s.length && o.push(`
`, ...Wn(s)), console.warn(...o);
  }
  ve(), Ie = !1;
}
function Un() {
  let e = B[B.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const r = e.component && e.component.parent;
    e = r && r.vnode;
  }
  return t;
}
function Wn(e) {
  const t = [];
  return e.forEach((n, r) => {
    t.push(...r === 0 ? [] : [`
`], ...Bn(n));
  }), t;
}
function Bn({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", r = e.component ? e.component.parent == null : !1, s = ` at <${qt(
    e.component,
    e.type,
    r
  )}`, o = ">" + n;
  return e.props ? [s, ...Jn(e.props), o] : [s + o];
}
function Jn(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((r) => {
    t.push(...It(r, e[r]));
  }), n.length > 3 && t.push(" ..."), t;
}
function It(e, t, n) {
  return R(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : y(t) ? (t = It(e, p(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : N(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = p(t), n ? t : [`${e}=`, t]);
}
const Dt = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush",
  15: "component update"
};
function J(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (s) {
    Ze(s, t, n);
  }
}
function he(e, t, n, r) {
  if (N(e)) {
    const s = J(e, t, n, r);
    return s && tn(s) && s.catch((o) => {
      Ze(o, t, n);
    }), s;
  }
  if (_(e)) {
    const s = [];
    for (let o = 0; o < e.length; o++)
      s.push(he(e[o], t, n, r));
    return s;
  } else process.env.NODE_ENV !== "production" && g(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function Ze(e, t, n, r = !0) {
  const s = t ? t.vnode : null;
  if (t) {
    let o = t.parent;
    const i = t.proxy, c = process.env.NODE_ENV !== "production" ? Dt[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; o; ) {
      const u = o.ec;
      if (u) {
        for (let h = 0; h < u.length; h++)
          if (u[h](e, i, c) === !1)
            return;
      }
      o = o.parent;
    }
    const a = t.appContext.config.errorHandler;
    if (a) {
      Se(), J(
        a,
        null,
        10,
        [e, i, c]
      ), ve();
      return;
    }
  }
  qn(e, n, s, r);
}
function qn(e, t, n, r = !0) {
  if (process.env.NODE_ENV !== "production") {
    const s = Dt[t];
    if (n && Kn(n), g(`Unhandled error${s ? ` during execution of ${s}` : ""}`), n && zn(), r)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let me = !1, Le = !1;
const x = [];
let M = 0;
const X = [];
let $ = null, K = 0;
const Pt = /* @__PURE__ */ Promise.resolve();
let ke = null;
const Yn = 100;
function Gn(e) {
  const t = ke || Pt;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Qn(e) {
  let t = M + 1, n = x.length;
  for (; t < n; ) {
    const r = t + n >>> 1, s = x[r], o = re(s);
    o < e || o === e && s.pre ? t = r + 1 : n = r;
  }
  return t;
}
function et(e) {
  (!x.length || !x.includes(
    e,
    me && e.allowRecurse ? M + 1 : M
  )) && (e.id == null ? x.push(e) : x.splice(Qn(e.id), 0, e), Tt());
}
function Tt() {
  !me && !Le && (Le = !0, ke = Pt.then(Mt));
}
function $t(e) {
  _(e) ? X.push(...e) : (!$ || !$.includes(
    e,
    e.allowRecurse ? K + 1 : K
  )) && X.push(e), Tt();
}
function Xn(e) {
  if (X.length) {
    const t = [...new Set(X)].sort(
      (n, r) => re(n) - re(r)
    );
    if (X.length = 0, $) {
      $.push(...t);
      return;
    }
    for ($ = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), K = 0; K < $.length; K++) {
      const n = $[K];
      process.env.NODE_ENV !== "production" && At(e, n) || n.active !== !1 && n();
    }
    $ = null, K = 0;
  }
}
const re = (e) => e.id == null ? 1 / 0 : e.id, Zn = (e, t) => {
  const n = re(e) - re(t);
  if (n === 0) {
    if (e.pre && !t.pre) return -1;
    if (t.pre && !e.pre) return 1;
  }
  return n;
};
function Mt(e) {
  Le = !1, me = !0, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), x.sort(Zn);
  const t = process.env.NODE_ENV !== "production" ? (n) => At(e, n) : Y;
  try {
    for (M = 0; M < x.length; M++) {
      const n = x[M];
      if (n && n.active !== !1) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        J(
          n,
          n.i,
          n.i ? 15 : 14
        );
      }
    }
  } finally {
    M = 0, x.length = 0, Xn(e), me = !1, ke = null, (x.length || X.length) && Mt(e);
  }
}
function At(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > Yn) {
      const r = t.i, s = r && Jt(r.type);
      return Ze(
        `Maximum recursive updates exceeded${s ? ` in component <${s}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
        null,
        10
      ), !0;
    } else
      e.set(t, n + 1);
  }
}
const De = /* @__PURE__ */ new Map();
process.env.NODE_ENV !== "production" && (Et().__VUE_HMR_RUNTIME__ = {
  createRecord: Pe(kn),
  rerender: Pe(er),
  reload: Pe(tr)
});
const Ee = /* @__PURE__ */ new Map();
function kn(e, t) {
  return Ee.has(e) ? !1 : (Ee.set(e, {
    initialDef: we(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function we(e) {
  return Yt(e) ? e.__vccOpts : e;
}
function er(e, t) {
  const n = Ee.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((r) => {
    t && (r.render = t, we(r.type).render = t), r.renderCache = [], r.effect.dirty = !0, r.update();
  }));
}
function tr(e, t) {
  const n = Ee.get(e);
  if (!n) return;
  t = we(t), ut(n.initialDef, t);
  const r = [...n.instances];
  for (let s = 0; s < r.length; s++) {
    const o = r[s], i = we(o.type);
    let c = De.get(i);
    c || (i !== n.initialDef && ut(i, t), De.set(i, c = /* @__PURE__ */ new Set())), c.add(o), o.appContext.propsCache.delete(o.type), o.appContext.emitsCache.delete(o.type), o.appContext.optionsCache.delete(o.type), o.ceReload ? (c.add(o), o.ceReload(t.styles), c.delete(o)) : o.parent ? (o.parent.effect.dirty = !0, et(() => {
      o.parent.update(), c.delete(o);
    })) : o.appContext.reload ? o.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  $t(() => {
    De.clear();
  });
}
function ut(e, t) {
  C(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function Pe(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (r) {
      console.error(r), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let q, pe = [];
function Ft(e, t) {
  var n, r;
  q = e, q ? (q.enabled = !0, pe.forEach(({ event: s, args: o }) => q.emit(s, ...o)), pe = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((r = (n = window.navigator) == null ? void 0 : n.userAgent) != null && r.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((o) => {
    Ft(o, t);
  }), setTimeout(() => {
    q || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, pe = []);
  }, 3e3)) : pe = [];
}
let P = null, nr = null;
function jt(e, t) {
  e.shapeFlag & 6 && e.component ? jt(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
const rr = Symbol.for("v-ndc"), He = (e) => e ? Tr(e) ? $r(e) : He(e.parent) : null, te = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ C(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => process.env.NODE_ENV !== "production" ? fe(e.props) : e.props,
    $attrs: (e) => process.env.NODE_ENV !== "production" ? fe(e.attrs) : e.attrs,
    $slots: (e) => process.env.NODE_ENV !== "production" ? fe(e.slots) : e.slots,
    $refs: (e) => process.env.NODE_ENV !== "production" ? fe(e.refs) : e.refs,
    $parent: (e) => He(e.parent),
    $root: (e) => He(e.root),
    $emit: (e) => e.emit,
    $options: (e) => ir(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      e.effect.dirty = !0, et(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Gn.bind(e.proxy)),
    $watch: (e) => gr.bind(e)
  })
), sr = (e) => e === "_" || e === "$", Te = (e, t) => e !== D && !e.__isScriptSetup && E(e, t), or = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: r, data: s, props: o, accessCache: i, type: c, appContext: a } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let u;
    if (t[0] !== "$") {
      const m = i[t];
      if (m !== void 0)
        switch (m) {
          case 1:
            return r[t];
          case 2:
            return s[t];
          case 4:
            return n[t];
          case 3:
            return o[t];
        }
      else {
        if (Te(r, t))
          return i[t] = 1, r[t];
        if (s !== D && E(s, t))
          return i[t] = 2, s[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (u = e.propsOptions[0]) && E(u, t)
        )
          return i[t] = 3, o[t];
        if (n !== D && E(n, t))
          return i[t] = 4, n[t];
        i[t] = 0;
      }
    }
    const h = te[t];
    let l, f;
    if (h)
      return t === "$attrs" ? (O(e.attrs, "get", ""), process.env.NODE_ENV !== "production" && void 0) : process.env.NODE_ENV !== "production" && t === "$slots" && O(e, "get", t), h(e);
    if (
      // css module (injected by vue-loader)
      (l = c.__cssModules) && (l = l[t])
    )
      return l;
    if (n !== D && E(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      f = a.config.globalProperties, E(f, t)
    )
      return f[t];
    process.env.NODE_ENV !== "production" && P && (!R(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (s !== D && sr(t[0]) && E(s, t) ? g(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === P && g(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: s, ctx: o } = e;
    return Te(s, t) ? (s[t] = n, !0) : process.env.NODE_ENV !== "production" && s.__isScriptSetup && E(s, t) ? (g(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : r !== D && E(r, t) ? (r[t] = n, !0) : E(e.props, t) ? (process.env.NODE_ENV !== "production" && g(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && g(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (process.env.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(o, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : o[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: s, propsOptions: o }
  }, i) {
    let c;
    return !!n[i] || e !== D && E(e, i) || Te(t, i) || (c = o[0]) && E(c, i) || E(r, i) || E(te, i) || E(s.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : E(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (or.ownKeys = (e) => (g(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function ft(e) {
  return _(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function ir(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: s,
    optionsCache: o,
    config: { optionMergeStrategies: i }
  } = e.appContext, c = o.get(t);
  let a;
  return c ? a = c : !s.length && !n && !r ? a = t : (a = {}, s.length && s.forEach(
    (u) => Ne(a, u, i, !0)
  ), Ne(a, t, i)), S(t) && o.set(t, a), a;
}
function Ne(e, t, n, r = !1) {
  const { mixins: s, extends: o } = t;
  o && Ne(e, o, n, !0), s && s.forEach(
    (i) => Ne(e, i, n, !0)
  );
  for (const i in t)
    if (r && i === "expose")
      process.env.NODE_ENV !== "production" && g(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const c = cr[i] || n && n[i];
      e[i] = c ? c(e[i], t[i]) : t[i];
    }
  return e;
}
const cr = {
  data: pt,
  props: ht,
  emits: ht,
  // objects
  methods: k,
  computed: k,
  // lifecycle
  beforeCreate: b,
  created: b,
  beforeMount: b,
  mounted: b,
  beforeUpdate: b,
  updated: b,
  beforeDestroy: b,
  beforeUnmount: b,
  destroyed: b,
  unmounted: b,
  activated: b,
  deactivated: b,
  errorCaptured: b,
  serverPrefetch: b,
  // assets
  components: k,
  directives: k,
  // watch
  watch: ar,
  // provide / inject
  provide: pt,
  inject: lr
};
function pt(e, t) {
  return t ? e ? function() {
    return C(
      N(e) ? e.call(this, this) : e,
      N(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function lr(e, t) {
  return k(dt(e), dt(t));
}
function dt(e) {
  if (_(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function b(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function k(e, t) {
  return e ? C(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function ht(e, t) {
  return e ? _(e) && _(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : C(
    /* @__PURE__ */ Object.create(null),
    ft(e),
    ft(t ?? {})
  ) : t;
}
function ar(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = C(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = b(e[r], t[r]);
  return n;
}
let _t = null;
function ur(e, t, n = !1) {
  const r = xe || P;
  if (r || _t) {
    const s = r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : _t._context.provides;
    if (s && e in s)
      return s[e];
    if (arguments.length > 1)
      return n && N(t) ? t.call(r && r.proxy) : t;
    process.env.NODE_ENV !== "production" && g(`injection "${String(e)}" not found.`);
  } else process.env.NODE_ENV !== "production" && g("inject() can only be used inside setup() or functional components.");
}
const fr = {}, Lt = (e) => Object.getPrototypeOf(e) === fr, pr = (e) => e.__isTeleport, gt = wr, dr = Symbol.for("v-scx"), hr = () => {
  {
    const e = ur(dr);
    return e || process.env.NODE_ENV !== "production" && g(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
}, de = {};
function _r(e, t, {
  immediate: n,
  deep: r,
  flush: s,
  once: o,
  onTrack: i,
  onTrigger: c
} = D) {
  if (t && o) {
    const d = t;
    t = (...Ce) => {
      d(...Ce), Re();
    };
  }
  process.env.NODE_ENV !== "production" && r !== void 0 && typeof r == "number" && g(
    'watch() "deep" option with number value will be used as watch depth in future versions. Please use a boolean instead to avoid potential breakage.'
  ), process.env.NODE_ENV !== "production" && !t && (n !== void 0 && g(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), r !== void 0 && g(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && g(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const a = (d) => {
    g(
      "Invalid watch source: ",
      d,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, u = xe, h = (d) => r === !0 ? d : (
    // for deep: false, only traverse root-level properties
    z(d, r === !1 ? 1 : void 0)
  );
  let l, f = !1, m = !1;
  if (y(e) ? (l = () => e.value, f = F(e)) : Q(e) ? (l = () => h(e), f = !0) : _(e) ? (m = !0, f = e.some((d) => Q(d) || F(d)), l = () => e.map((d) => {
    if (y(d))
      return d.value;
    if (Q(d))
      return h(d);
    if (N(d))
      return J(d, u, 2);
    process.env.NODE_ENV !== "production" && a(d);
  })) : N(e) ? t ? l = () => J(e, u, 2) : l = () => (w && w(), he(
    e,
    u,
    3,
    [I]
  )) : (l = Y, process.env.NODE_ENV !== "production" && a(e)), t && r) {
    const d = l;
    l = () => z(d());
  }
  let w, I = (d) => {
    w = v.onStop = () => {
      J(d, u, 4), w = v.onStop = void 0;
    };
  }, Ve;
  if (Bt)
    if (I = Y, t ? n && he(t, u, 3, [
      l(),
      m ? [] : void 0,
      I
    ]) : l(), s === "sync") {
      const d = hr();
      Ve = d.__watcherHandles || (d.__watcherHandles = []);
    } else
      return Y;
  let L = m ? new Array(e.length).fill(de) : de;
  const H = () => {
    if (!(!v.active || !v.dirty))
      if (t) {
        const d = v.run();
        (r || f || (m ? d.some((Ce, Gt) => Z(Ce, L[Gt])) : Z(d, L))) && (w && w(), he(t, u, 3, [
          d,
          // pass undefined as the old value when it's changed for the first time
          L === de ? void 0 : m && L[0] === de ? [] : L,
          I
        ]), L = d);
      } else
        v.run();
  };
  H.allowRecurse = !!t;
  let oe;
  s === "sync" ? oe = H : s === "post" ? oe = () => gt(H, u && u.suspense) : (H.pre = !0, u && (H.id = u.uid), oe = () => et(H));
  const v = new hn(l, Y, oe), Re = () => {
    v.stop();
  };
  return process.env.NODE_ENV !== "production" && (v.onTrack = i, v.onTrigger = c), t ? n ? H() : L = v.run() : s === "post" ? gt(
    v.run.bind(v),
    u && u.suspense
  ) : v.run(), Ve && Ve.push(Re), Re;
}
function gr(e, t, n) {
  const r = this.proxy, s = R(e) ? e.includes(".") ? mr(r, e) : () => r[e] : e.bind(r, r);
  let o;
  N(t) ? o = t : (o = t.handler, n = t);
  const i = Pr(this), c = _r(s, o.bind(r), n);
  return i(), c;
}
function mr(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let s = 0; s < n.length && r; s++)
      r = r[n[s]];
    return r;
  };
}
function z(e, t = 1 / 0, n) {
  if (t <= 0 || !S(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, y(e))
    z(e.value, t, n);
  else if (_(e))
    for (let r = 0; r < e.length; r++)
      z(e[r], t, n);
  else if (en(e) || G(e))
    e.forEach((r) => {
      z(r, t, n);
    });
  else if (rn(e)) {
    for (const r in e)
      z(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && z(e[r], t, n);
  }
  return e;
}
const Er = (e) => e.__isSuspense;
function wr(e, t) {
  t && t.pendingBranch ? _(e) ? t.effects.push(...e) : t.effects.push(e) : $t(e);
}
const Ht = Symbol.for("v-fgt"), Nr = Symbol.for("v-txt"), Or = Symbol.for("v-cmt"), _e = [];
let V = null;
function br(e = !1) {
  _e.push(V = e ? null : []);
}
function Sr() {
  _e.pop(), V = _e[_e.length - 1] || null;
}
function vr(e) {
  return e.dynamicChildren = V || Xt, Sr(), V && V.push(e), e;
}
function yr(e, t, n, r, s, o) {
  return vr(
    zt(
      e,
      t,
      n,
      r,
      s,
      o,
      !0
    )
  );
}
function xr(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
const Vr = (...e) => Ut(
  ...e
), Kt = ({ key: e }) => e ?? null, ge = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? R(e) || y(e) || N(e) ? { i: P, r: e, k: t, f: !!n } : e : null);
function zt(e, t = null, n = null, r = 0, s = null, o = e === Ht ? 0 : 1, i = !1, c = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Kt(t),
    ref: t && ge(t),
    scopeId: nr,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: r,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: P
  };
  return c ? (tt(a, n), o & 128 && e.normalize(a)) : n && (a.shapeFlag |= R(n) ? 8 : 16), process.env.NODE_ENV !== "production" && a.key !== a.key && g("VNode created with invalid key (NaN). VNode type:", a.type), // avoid a block node from tracking itself
  !i && // has current parent block
  V && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && V.push(a), a;
}
const Rr = process.env.NODE_ENV !== "production" ? Vr : Ut;
function Ut(e, t = null, n = null, r = 0, s = null, o = !1) {
  if ((!e || e === rr) && (process.env.NODE_ENV !== "production" && !e && g(`Invalid vnode type when creating vnode: ${e}.`), e = Or), xr(e)) {
    const c = Oe(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && tt(c, n), !o && V && (c.shapeFlag & 6 ? V[V.indexOf(e)] = c : V.push(c)), c.patchFlag = -2, c;
  }
  if (Yt(e) && (e = e.__vccOpts), t) {
    t = Cr(t);
    let { class: c, style: a } = t;
    c && !R(c) && (t.class = We(c)), S(a) && (je(a) && !_(a) && (a = C({}, a)), t.style = Ue(a));
  }
  const i = R(e) ? 1 : Er(e) ? 128 : pr(e) ? 64 : S(e) ? 4 : N(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && i & 4 && je(e) && (e = p(e), g(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), zt(
    e,
    t,
    n,
    r,
    s,
    i,
    o,
    !0
  );
}
function Cr(e) {
  return e ? je(e) || Lt(e) ? C({}, e) : e : null;
}
function Oe(e, t, n = !1, r = !1) {
  const { props: s, ref: o, patchFlag: i, children: c, transition: a } = e, u = t ? Dr(s || {}, t) : s, h = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: u,
    key: u && Kt(u),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && o ? _(o) ? o.concat(ge(t)) : [o, ge(t)] : ge(t)
    ) : o,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && i === -1 && _(c) ? c.map(Wt) : c,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Ht ? i === -1 ? 16 : i | 16 : i,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: a,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Oe(e.ssContent),
    ssFallback: e.ssFallback && Oe(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return a && r && jt(
    h,
    a.clone(h)
  ), h;
}
function Wt(e) {
  const t = Oe(e);
  return _(e.children) && (t.children = e.children.map(Wt)), t;
}
function Ir(e = " ", t = 0) {
  return Rr(Nr, null, e, t);
}
function tt(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (_(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), tt(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !Lt(t) ? t._ctx = P : s === 3 && P && (P.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else N(t) ? (t = { default: t, _ctx: P }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [Ir(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Dr(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const s in r)
      if (s === "class")
        t.class !== r.class && (t.class = We([t.class, r.class]));
      else if (s === "style")
        t.style = Ue([t.style, r.style]);
      else if (Zt(s)) {
        const o = t[s], i = r[s];
        i && o !== i && !(_(o) && o.includes(i)) && (t[s] = o ? [].concat(o, i) : i);
      } else s !== "" && (t[s] = r[s]);
  }
  return t;
}
let xe = null, Ke;
{
  const e = Et(), t = (n, r) => {
    let s;
    return (s = e[n]) || (s = e[n] = []), s.push(r), (o) => {
      s.length > 1 ? s.forEach((i) => i(o)) : s[0](o);
    };
  };
  Ke = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => xe = n
  ), t(
    "__VUE_SSR_SETTERS__",
    (n) => Bt = n
  );
}
const Pr = (e) => {
  const t = xe;
  return Ke(e), e.scope.on(), () => {
    e.scope.off(), Ke(t);
  };
};
function Tr(e) {
  return e.vnode.shapeFlag & 4;
}
let Bt = !1;
process.env.NODE_ENV;
function $r(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Hn(Fn(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in te)
        return te[n](e);
    },
    has(t, n) {
      return n in t || n in te;
    }
  })) : e.proxy;
}
const Mr = /(?:^|[-_])(\w)/g, Ar = (e) => e.replace(Mr, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Jt(e, t = !0) {
  return N(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function qt(e, t, n = !1) {
  let r = Jt(t);
  if (!r && t.__file) {
    const s = t.__file.match(/([^/\\]+)\.\w+$/);
    s && (r = s[1]);
  }
  if (!r && e && e.parent) {
    const s = (o) => {
      for (const i in o)
        if (o[i] === t)
          return i;
    };
    r = s(
      e.components || e.parent.type.components
    ) || s(e.appContext.components);
  }
  return r ? Ar(r) : n ? "App" : "Anonymous";
}
function Yt(e) {
  return N(e) && "__vccOpts" in e;
}
function Fr() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, r = { style: "color:#eb2f96" }, s = {
    __vue_custom_formatter: !0,
    header(l) {
      return S(l) ? l.__isVue ? ["div", e, "VueInstance"] : y(l) ? [
        "div",
        {},
        ["span", e, h(l)],
        "<",
        c(l.value),
        ">"
      ] : Q(l) ? [
        "div",
        {},
        ["span", e, F(l) ? "ShallowReactive" : "Reactive"],
        "<",
        c(l),
        `>${j(l) ? " (readonly)" : ""}`
      ] : j(l) ? [
        "div",
        {},
        ["span", e, F(l) ? "ShallowReadonly" : "Readonly"],
        "<",
        c(l),
        ">"
      ] : null : null;
    },
    hasBody(l) {
      return l && l.__isVue;
    },
    body(l) {
      if (l && l.__isVue)
        return [
          "div",
          {},
          ...o(l.$)
        ];
    }
  };
  function o(l) {
    const f = [];
    l.type.props && l.props && f.push(i("props", p(l.props))), l.setupState !== D && f.push(i("setup", l.setupState)), l.data !== D && f.push(i("data", p(l.data)));
    const m = a(l, "computed");
    m && f.push(i("computed", m));
    const w = a(l, "inject");
    return w && f.push(i("injected", w)), f.push([
      "div",
      {},
      [
        "span",
        {
          style: r.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: l }]
    ]), f;
  }
  function i(l, f) {
    return f = C({}, f), Object.keys(f).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        l
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(f).map((m) => [
          "div",
          {},
          ["span", r, m + ": "],
          c(f[m], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function c(l, f = !0) {
    return typeof l == "number" ? ["span", t, l] : typeof l == "string" ? ["span", n, JSON.stringify(l)] : typeof l == "boolean" ? ["span", r, l] : S(l) ? ["object", { object: f ? p(l) : l }] : ["span", n, String(l)];
  }
  function a(l, f) {
    const m = l.type;
    if (N(m))
      return;
    const w = {};
    for (const I in l.ctx)
      u(m, I, f) && (w[I] = l.ctx[I]);
    return w;
  }
  function u(l, f, m) {
    const w = l[m];
    if (_(w) && w.includes(f) || S(w) && f in w || l.extends && u(l.extends, f, m) || l.mixins && l.mixins.some((I) => u(I, f, m)))
      return !0;
  }
  function h(l) {
    return F(l) ? "ShallowRef" : l.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(s) : window.devtoolsFormatters = [s];
}
process.env.NODE_ENV;
process.env.NODE_ENV;
process.env.NODE_ENV;
/**
* vue v3.4.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function jr() {
  Fr();
}
process.env.NODE_ENV !== "production" && jr();
const Lr = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, s] of t)
    n[r] = s;
  return n;
}, Hr = {};
function Kr(e, t) {
  return br(), yr("h1", null, "this is a test");
}
const zr = /* @__PURE__ */ Lr(Hr, [["render", Kr]]);
export {
  zr as Test
};
