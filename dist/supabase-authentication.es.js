/**
* @vue/shared v3.4.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Tr(t, e) {
  const n = new Set(t.split(","));
  return (o) => n.has(o);
}
const W = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, jr = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], xt = () => {
}, Vr = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // uppercase letter
(t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97), H = Object.assign, Ir = Object.prototype.hasOwnProperty, N = (t, e) => Ir.call(t, e), P = Array.isArray, vt = (t) => Ne(t) === "[object Map]", wo = (t) => Ne(t) === "[object Set]", C = (t) => typeof t == "function", B = (t) => typeof t == "string", wt = (t) => typeof t == "symbol", I = (t) => t !== null && typeof t == "object", Rr = (t) => (I(t) || C(t)) && C(t.then) && C(t.catch), Oo = Object.prototype.toString, Ne = (t) => Oo.call(t), Eo = (t) => Ne(t).slice(8, -1), xo = (t) => Ne(t) === "[object Object]", un = (t) => B(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t, dn = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (n) => e[n] || (e[n] = t(n));
}, Dr = /-(\w)/g, ye = dn((t) => t.replace(Dr, (e, n) => n ? n.toUpperCase() : "")), Ft = dn((t) => t.charAt(0).toUpperCase() + t.slice(1)), Ar = dn((t) => t ? `on${Ft(t)}` : ""), pt = (t, e) => !Object.is(t, e), Lr = (t, e, n, o = !1) => {
  Object.defineProperty(t, e, {
    configurable: !0,
    enumerable: !1,
    writable: o,
    value: n
  });
};
let Vn;
const Po = () => Vn || (Vn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function pn(t) {
  if (P(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++) {
      const o = t[n], r = B(o) ? Ur(o) : pn(o);
      if (r)
        for (const i in r)
          e[i] = r[i];
    }
    return e;
  } else if (B(t) || I(t))
    return t;
}
const Mr = /;(?![^(]*\))/g, zr = /:([^]+)/, Br = /\/\*[^]*?\*\//g;
function Ur(t) {
  const e = {};
  return t.replace(Br, "").split(Mr).forEach((n) => {
    if (n) {
      const o = n.split(zr);
      o.length > 1 && (e[o[0].trim()] = o[1].trim());
    }
  }), e;
}
function Pt(t) {
  let e = "";
  if (B(t))
    e = t;
  else if (P(t))
    for (let n = 0; n < t.length; n++) {
      const o = Pt(t[n]);
      o && (e += o + " ");
    }
  else if (I(t))
    for (const n in t)
      t[n] && (e += n + " ");
  return e.trim();
}
const ko = (t) => !!(t && t.__v_isRef === !0), Te = (t) => B(t) ? t : t == null ? "" : P(t) || I(t) && (t.toString === Oo || !C(t.toString)) ? ko(t) ? Te(t.value) : JSON.stringify(t, Co, 2) : String(t), Co = (t, e) => ko(e) ? Co(t, e.value) : vt(e) ? {
  [`Map(${e.size})`]: [...e.entries()].reduce(
    (n, [o, r], i) => (n[Ue(o, i) + " =>"] = r, n),
    {}
  )
} : wo(e) ? {
  [`Set(${e.size})`]: [...e.values()].map((n) => Ue(n))
} : wt(e) ? Ue(e) : I(e) && !P(e) && !xo(e) ? String(e) : e, Ue = (t, e = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    wt(t) ? `Symbol(${(n = t.description) != null ? n : e})` : t
  );
};
/**
* @vue/reactivity v3.4.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Nt(t, ...e) {
  console.warn(`[Vue warn] ${t}`, ...e);
}
let Fr;
function Hr(t, e = Fr) {
  e && e.active && e.effects.push(t);
}
let yt;
class No {
  constructor(e, n, o, r) {
    this.fn = e, this.trigger = n, this.scheduler = o, this.active = !0, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, Hr(this, r);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      this._dirtyLevel = 1, te();
      for (let e = 0; e < this._depsLength; e++) {
        const n = this.deps[e];
        if (n.computed && (Kr(n.computed), this._dirtyLevel >= 4))
          break;
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), ee();
    }
    return this._dirtyLevel >= 4;
  }
  set dirty(e) {
    this._dirtyLevel = e ? 4 : 0;
  }
  run() {
    if (this._dirtyLevel = 0, !this.active)
      return this.fn();
    let e = ut, n = yt;
    try {
      return ut = !0, yt = this, this._runnings++, In(this), this.fn();
    } finally {
      Rn(this), this._runnings--, yt = n, ut = e;
    }
  }
  stop() {
    this.active && (In(this), Rn(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function Kr(t) {
  return t.value;
}
function In(t) {
  t._trackId++, t._depsLength = 0;
}
function Rn(t) {
  if (t.deps.length > t._depsLength) {
    for (let e = t._depsLength; e < t.deps.length; e++)
      To(t.deps[e], t);
    t.deps.length = t._depsLength;
  }
}
function To(t, e) {
  const n = t.get(e);
  n !== void 0 && e._trackId !== n && (t.delete(e), t.size === 0 && t.cleanup());
}
let ut = !0, Ze = 0;
const jo = [];
function te() {
  jo.push(ut), ut = !1;
}
function ee() {
  const t = jo.pop();
  ut = t === void 0 ? !0 : t;
}
function fn() {
  Ze++;
}
function hn() {
  for (Ze--; !Ze && Xe.length; )
    Xe.shift()();
}
function Vo(t, e, n) {
  var o;
  if (e.get(t) !== t._trackId) {
    e.set(t, t._trackId);
    const r = t.deps[t._depsLength];
    r !== e ? (r && To(r, t), t.deps[t._depsLength++] = e) : t._depsLength++, process.env.NODE_ENV !== "production" && ((o = t.onTrack) == null || o.call(t, H({ effect: t }, n)));
  }
}
const Xe = [];
function Io(t, e, n) {
  var o;
  fn();
  for (const r of t.keys()) {
    let i;
    r._dirtyLevel < e && (i ?? (i = t.get(r) === r._trackId)) && (r._shouldSchedule || (r._shouldSchedule = r._dirtyLevel === 0), r._dirtyLevel = e), r._shouldSchedule && (i ?? (i = t.get(r) === r._trackId)) && (process.env.NODE_ENV !== "production" && ((o = r.onTrigger) == null || o.call(r, H({ effect: r }, n))), r.trigger(), (!r._runnings || r.allowRecurse) && r._dirtyLevel !== 2 && (r._shouldSchedule = !1, r.scheduler && Xe.push(r.scheduler)));
  }
  hn();
}
const Ro = (t, e) => {
  const n = /* @__PURE__ */ new Map();
  return n.cleanup = t, n.computed = e, n;
}, Qe = /* @__PURE__ */ new WeakMap(), _t = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), tn = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
function R(t, e, n) {
  if (ut && yt) {
    let o = Qe.get(t);
    o || Qe.set(t, o = /* @__PURE__ */ new Map());
    let r = o.get(n);
    r || o.set(n, r = Ro(() => o.delete(n))), Vo(
      yt,
      r,
      process.env.NODE_ENV !== "production" ? {
        target: t,
        type: e,
        key: n
      } : void 0
    );
  }
}
function dt(t, e, n, o, r, i) {
  const s = Qe.get(t);
  if (!s)
    return;
  let a = [];
  if (e === "clear")
    a = [...s.values()];
  else if (n === "length" && P(t)) {
    const c = Number(o);
    s.forEach((u, d) => {
      (d === "length" || !wt(d) && d >= c) && a.push(u);
    });
  } else
    switch (n !== void 0 && a.push(s.get(n)), e) {
      case "add":
        P(t) ? un(n) && a.push(s.get("length")) : (a.push(s.get(_t)), vt(t) && a.push(s.get(tn)));
        break;
      case "delete":
        P(t) || (a.push(s.get(_t)), vt(t) && a.push(s.get(tn)));
        break;
      case "set":
        vt(t) && a.push(s.get(_t));
        break;
    }
  fn();
  for (const c of a)
    c && Io(
      c,
      4,
      process.env.NODE_ENV !== "production" ? {
        target: t,
        type: e,
        key: n,
        newValue: o,
        oldValue: r,
        oldTarget: i
      } : void 0
    );
  hn();
}
const Wr = /* @__PURE__ */ Tr("__proto__,__v_isRef,__isVue"), Do = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((t) => t !== "arguments" && t !== "caller").map((t) => Symbol[t]).filter(wt)
), Dn = /* @__PURE__ */ Yr();
function Yr() {
  const t = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((e) => {
    t[e] = function(...n) {
      const o = $(this);
      for (let i = 0, s = this.length; i < s; i++)
        R(o, "get", i + "");
      const r = o[e](...n);
      return r === -1 || r === !1 ? o[e](...n.map($)) : r;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((e) => {
    t[e] = function(...n) {
      te(), fn();
      const o = $(this)[e].apply(this, n);
      return hn(), ee(), o;
    };
  }), t;
}
function Gr(t) {
  wt(t) || (t = String(t));
  const e = $(this);
  return R(e, "has", t), e.hasOwnProperty(t);
}
class Ao {
  constructor(e = !1, n = !1) {
    this._isReadonly = e, this._isShallow = n;
  }
  get(e, n, o) {
    const r = this._isReadonly, i = this._isShallow;
    if (n === "__v_isReactive")
      return !r;
    if (n === "__v_isReadonly")
      return r;
    if (n === "__v_isShallow")
      return i;
    if (n === "__v_raw")
      return o === (r ? i ? Uo : Bo : i ? ai : zo).get(e) || // receiver is not the reactive proxy, but has the same prototype
      // this means the reciever is a user proxy of the reactive proxy
      Object.getPrototypeOf(e) === Object.getPrototypeOf(o) ? e : void 0;
    const s = P(e);
    if (!r) {
      if (s && N(Dn, n))
        return Reflect.get(Dn, n, o);
      if (n === "hasOwnProperty")
        return Gr;
    }
    const a = Reflect.get(e, n, o);
    return (wt(n) ? Do.has(n) : Wr(n)) || (r || R(e, "get", n), i) ? a : U(a) ? s && un(n) ? a : a.value : I(a) ? r ? mn(a) : Fo(a) : a;
  }
}
class qr extends Ao {
  constructor(e = !1) {
    super(!1, e);
  }
  set(e, n, o, r) {
    let i = e[n];
    if (!this._isShallow) {
      const c = nt(i);
      if (!et(o) && !nt(o) && (i = $(i), o = $(o)), !P(e) && U(i) && !U(o))
        return c ? !1 : (i.value = o, !0);
    }
    const s = P(e) && un(n) ? Number(n) < e.length : N(e, n), a = Reflect.set(e, n, o, r);
    return e === $(r) && (s ? pt(o, i) && dt(e, "set", n, o, i) : dt(e, "add", n, o)), a;
  }
  deleteProperty(e, n) {
    const o = N(e, n), r = e[n], i = Reflect.deleteProperty(e, n);
    return i && o && dt(e, "delete", n, void 0, r), i;
  }
  has(e, n) {
    const o = Reflect.has(e, n);
    return (!wt(n) || !Do.has(n)) && R(e, "has", n), o;
  }
  ownKeys(e) {
    return R(
      e,
      "iterate",
      P(e) ? "length" : _t
    ), Reflect.ownKeys(e);
  }
}
class Lo extends Ao {
  constructor(e = !1) {
    super(!0, e);
  }
  set(e, n) {
    return process.env.NODE_ENV !== "production" && Nt(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      e
    ), !0;
  }
  deleteProperty(e, n) {
    return process.env.NODE_ENV !== "production" && Nt(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      e
    ), !0;
  }
}
const Jr = /* @__PURE__ */ new qr(), Zr = /* @__PURE__ */ new Lo(), Xr = /* @__PURE__ */ new Lo(!0), bn = (t) => t, je = (t) => Reflect.getPrototypeOf(t);
function ie(t, e, n = !1, o = !1) {
  t = t.__v_raw;
  const r = $(t), i = $(e);
  n || (pt(e, i) && R(r, "get", e), R(r, "get", i));
  const { has: s } = je(r), a = o ? bn : n ? yn : Ht;
  if (s.call(r, e))
    return a(t.get(e));
  if (s.call(r, i))
    return a(t.get(i));
  t !== r && t.get(e);
}
function se(t, e = !1) {
  const n = this.__v_raw, o = $(n), r = $(t);
  return e || (pt(t, r) && R(o, "has", t), R(o, "has", r)), t === r ? n.has(t) : n.has(t) || n.has(r);
}
function ae(t, e = !1) {
  return t = t.__v_raw, !e && R($(t), "iterate", _t), Reflect.get(t, "size", t);
}
function An(t, e = !1) {
  !e && !et(t) && !nt(t) && (t = $(t));
  const n = $(this);
  return je(n).has.call(n, t) || (n.add(t), dt(n, "add", t, t)), this;
}
function Ln(t, e, n = !1) {
  !n && !et(e) && !nt(e) && (e = $(e));
  const o = $(this), { has: r, get: i } = je(o);
  let s = r.call(o, t);
  s ? process.env.NODE_ENV !== "production" && Mo(o, r, t) : (t = $(t), s = r.call(o, t));
  const a = i.call(o, t);
  return o.set(t, e), s ? pt(e, a) && dt(o, "set", t, e, a) : dt(o, "add", t, e), this;
}
function Mn(t) {
  const e = $(this), { has: n, get: o } = je(e);
  let r = n.call(e, t);
  r ? process.env.NODE_ENV !== "production" && Mo(e, n, t) : (t = $(t), r = n.call(e, t));
  const i = o ? o.call(e, t) : void 0, s = e.delete(t);
  return r && dt(e, "delete", t, void 0, i), s;
}
function zn() {
  const t = $(this), e = t.size !== 0, n = process.env.NODE_ENV !== "production" ? vt(t) ? new Map(t) : new Set(t) : void 0, o = t.clear();
  return e && dt(t, "clear", void 0, void 0, n), o;
}
function ce(t, e) {
  return function(o, r) {
    const i = this, s = i.__v_raw, a = $(s), c = e ? bn : t ? yn : Ht;
    return !t && R(a, "iterate", _t), s.forEach((u, d) => o.call(r, c(u), c(d), i));
  };
}
function le(t, e, n) {
  return function(...o) {
    const r = this.__v_raw, i = $(r), s = vt(i), a = t === "entries" || t === Symbol.iterator && s, c = t === "keys" && s, u = r[t](...o), d = n ? bn : e ? yn : Ht;
    return !e && R(
      i,
      "iterate",
      c ? tn : _t
    ), {
      // iterator protocol
      next() {
        const { value: l, done: p } = u.next();
        return p ? { value: l, done: p } : {
          value: a ? [d(l[0]), d(l[1])] : d(l),
          done: p
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function rt(t) {
  return function(...e) {
    if (process.env.NODE_ENV !== "production") {
      const n = e[0] ? `on key "${e[0]}" ` : "";
      Nt(
        `${Ft(t)} operation ${n}failed: target is readonly.`,
        $(this)
      );
    }
    return t === "delete" ? !1 : t === "clear" ? void 0 : this;
  };
}
function Qr() {
  const t = {
    get(i) {
      return ie(this, i);
    },
    get size() {
      return ae(this);
    },
    has: se,
    add: An,
    set: Ln,
    delete: Mn,
    clear: zn,
    forEach: ce(!1, !1)
  }, e = {
    get(i) {
      return ie(this, i, !1, !0);
    },
    get size() {
      return ae(this);
    },
    has: se,
    add(i) {
      return An.call(this, i, !0);
    },
    set(i, s) {
      return Ln.call(this, i, s, !0);
    },
    delete: Mn,
    clear: zn,
    forEach: ce(!1, !0)
  }, n = {
    get(i) {
      return ie(this, i, !0);
    },
    get size() {
      return ae(this, !0);
    },
    has(i) {
      return se.call(this, i, !0);
    },
    add: rt("add"),
    set: rt("set"),
    delete: rt("delete"),
    clear: rt("clear"),
    forEach: ce(!0, !1)
  }, o = {
    get(i) {
      return ie(this, i, !0, !0);
    },
    get size() {
      return ae(this, !0);
    },
    has(i) {
      return se.call(this, i, !0);
    },
    add: rt("add"),
    set: rt("set"),
    delete: rt("delete"),
    clear: rt("clear"),
    forEach: ce(!0, !0)
  };
  return [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((i) => {
    t[i] = le(i, !1, !1), n[i] = le(i, !0, !1), e[i] = le(i, !1, !0), o[i] = le(
      i,
      !0,
      !0
    );
  }), [
    t,
    n,
    e,
    o
  ];
}
const [
  ti,
  ei,
  ni,
  oi
] = /* @__PURE__ */ Qr();
function gn(t, e) {
  const n = e ? t ? oi : ni : t ? ei : ti;
  return (o, r, i) => r === "__v_isReactive" ? !t : r === "__v_isReadonly" ? t : r === "__v_raw" ? o : Reflect.get(
    N(n, r) && r in o ? n : o,
    r,
    i
  );
}
const ri = {
  get: /* @__PURE__ */ gn(!1, !1)
}, ii = {
  get: /* @__PURE__ */ gn(!0, !1)
}, si = {
  get: /* @__PURE__ */ gn(!0, !0)
};
function Mo(t, e, n) {
  const o = $(n);
  if (o !== n && e.call(t, o)) {
    const r = Eo(t);
    Nt(
      `Reactive ${r} contains both the raw and reactive versions of the same object${r === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const zo = /* @__PURE__ */ new WeakMap(), ai = /* @__PURE__ */ new WeakMap(), Bo = /* @__PURE__ */ new WeakMap(), Uo = /* @__PURE__ */ new WeakMap();
function ci(t) {
  switch (t) {
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
function li(t) {
  return t.__v_skip || !Object.isExtensible(t) ? 0 : ci(Eo(t));
}
function Fo(t) {
  return nt(t) ? t : vn(
    t,
    !1,
    Jr,
    ri,
    zo
  );
}
function mn(t) {
  return vn(
    t,
    !0,
    Zr,
    ii,
    Bo
  );
}
function ue(t) {
  return vn(
    t,
    !0,
    Xr,
    si,
    Uo
  );
}
function vn(t, e, n, o, r) {
  if (!I(t))
    return process.env.NODE_ENV !== "production" && Nt(
      `value cannot be made ${e ? "readonly" : "reactive"}: ${String(
        t
      )}`
    ), t;
  if (t.__v_raw && !(e && t.__v_isReactive))
    return t;
  const i = r.get(t);
  if (i)
    return i;
  const s = li(t);
  if (s === 0)
    return t;
  const a = new Proxy(
    t,
    s === 2 ? o : n
  );
  return r.set(t, a), a;
}
function kt(t) {
  return nt(t) ? kt(t.__v_raw) : !!(t && t.__v_isReactive);
}
function nt(t) {
  return !!(t && t.__v_isReadonly);
}
function et(t) {
  return !!(t && t.__v_isShallow);
}
function en(t) {
  return t ? !!t.__v_raw : !1;
}
function $(t) {
  const e = t && t.__v_raw;
  return e ? $(e) : t;
}
function ui(t) {
  return Object.isExtensible(t) && Lr(t, "__v_skip", !0), t;
}
const Ht = (t) => I(t) ? Fo(t) : t, yn = (t) => I(t) ? mn(t) : t, di = "Computed is still dirty after getter evaluation, likely because a computed is mutating its own dependency in its getter. State mutations in computed getters should be avoided.  Check the docs for more details: https://vuejs.org/guide/essentials/computed.html#getters-should-be-side-effect-free";
class pi {
  constructor(e, n, o, r) {
    this.getter = e, this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this.effect = new No(
      () => e(this._value),
      () => he(
        this,
        this.effect._dirtyLevel === 2 ? 2 : 3
      )
    ), this.effect.computed = this, this.effect.active = this._cacheable = !r, this.__v_isReadonly = o;
  }
  get value() {
    const e = $(this);
    return (!e._cacheable || e.effect.dirty) && pt(e._value, e._value = e.effect.run()) && he(e, 4), Ho(e), e.effect._dirtyLevel >= 2 && (process.env.NODE_ENV !== "production" && this._warnRecursive && Nt(di, `

getter: `, this.getter), he(e, 2)), e._value;
  }
  set value(e) {
    this._setter(e);
  }
  // #region polyfill _dirty for backward compatibility third party code for Vue <= 3.3.x
  get _dirty() {
    return this.effect.dirty;
  }
  set _dirty(e) {
    this.effect.dirty = e;
  }
  // #endregion
}
function Ho(t) {
  var e;
  ut && yt && (t = $(t), Vo(
    yt,
    (e = t.dep) != null ? e : t.dep = Ro(
      () => t.dep = void 0,
      t instanceof pi ? t : void 0
    ),
    process.env.NODE_ENV !== "production" ? {
      target: t,
      type: "get",
      key: "value"
    } : void 0
  ));
}
function he(t, e = 4, n, o) {
  t = $(t);
  const r = t.dep;
  r && Io(
    r,
    e,
    process.env.NODE_ENV !== "production" ? {
      target: t,
      type: "set",
      key: "value",
      newValue: n,
      oldValue: o
    } : void 0
  );
}
function U(t) {
  return !!(t && t.__v_isRef === !0);
}
function be(t) {
  return fi(t, !1);
}
function fi(t, e) {
  return U(t) ? t : new hi(t, e);
}
class hi {
  constructor(e, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? e : $(e), this._value = n ? e : Ht(e);
  }
  get value() {
    return Ho(this), this._value;
  }
  set value(e) {
    const n = this.__v_isShallow || et(e) || nt(e);
    if (e = n ? e : $(e), pt(e, this._rawValue)) {
      const o = this._rawValue;
      this._rawValue = e, this._value = n ? e : Ht(e), he(this, 4, e, o);
    }
  }
}
function bi(t) {
  return U(t) ? t.value : t;
}
const gi = {
  get: (t, e, n) => bi(Reflect.get(t, e, n)),
  set: (t, e, n, o) => {
    const r = t[e];
    return U(r) && !U(n) ? (r.value = n, !0) : Reflect.set(t, e, n, o);
  }
};
function mi(t) {
  return kt(t) ? t : new Proxy(t, gi);
}
/**
* @vue/runtime-core v3.4.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const St = [];
function vi(t) {
  St.push(t);
}
function yi() {
  St.pop();
}
let Fe = !1;
function x(t, ...e) {
  if (Fe) return;
  Fe = !0, te();
  const n = St.length ? St[St.length - 1].component : null, o = n && n.appContext.config.warnHandler, r = _i();
  if (o)
    $t(
      o,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        t + e.map((i) => {
          var s, a;
          return (a = (s = i.toString) == null ? void 0 : s.call(i)) != null ? a : JSON.stringify(i);
        }).join(""),
        n && n.proxy,
        r.map(
          ({ vnode: i }) => `at <${hr(n, i.type)}>`
        ).join(`
`),
        r
      ]
    );
  else {
    const i = [`[Vue warn]: ${t}`, ...e];
    r.length && i.push(`
`, ...Si(r)), console.warn(...i);
  }
  ee(), Fe = !1;
}
function _i() {
  let t = St[St.length - 1];
  if (!t)
    return [];
  const e = [];
  for (; t; ) {
    const n = e[0];
    n && n.vnode === t ? n.recurseCount++ : e.push({
      vnode: t,
      recurseCount: 0
    });
    const o = t.component && t.component.parent;
    t = o && o.vnode;
  }
  return e;
}
function Si(t) {
  const e = [];
  return t.forEach((n, o) => {
    e.push(...o === 0 ? [] : [`
`], ...$i(n));
  }), e;
}
function $i({ vnode: t, recurseCount: e }) {
  const n = e > 0 ? `... (${e} recursive calls)` : "", o = t.component ? t.component.parent == null : !1, r = ` at <${hr(
    t.component,
    t.type,
    o
  )}`, i = ">" + n;
  return t.props ? [r, ...wi(t.props), i] : [r + i];
}
function wi(t) {
  const e = [], n = Object.keys(t);
  return n.slice(0, 3).forEach((o) => {
    e.push(...Ko(o, t[o]));
  }), n.length > 3 && e.push(" ..."), e;
}
function Ko(t, e, n) {
  return B(e) ? (e = JSON.stringify(e), n ? e : [`${t}=${e}`]) : typeof e == "number" || typeof e == "boolean" || e == null ? n ? e : [`${t}=${e}`] : U(e) ? (e = Ko(t, $(e.value), !0), n ? e : [`${t}=Ref<`, e, ">"]) : C(e) ? [`${t}=fn${e.name ? `<${e.name}>` : ""}`] : (e = $(e), n ? e : [`${t}=`, e]);
}
const _n = {
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
function $t(t, e, n, o) {
  try {
    return o ? t(...o) : t();
  } catch (r) {
    Sn(r, e, n);
  }
}
function Mt(t, e, n, o) {
  if (C(t)) {
    const r = $t(t, e, n, o);
    return r && Rr(r) && r.catch((i) => {
      Sn(i, e, n);
    }), r;
  }
  if (P(t)) {
    const r = [];
    for (let i = 0; i < t.length; i++)
      r.push(Mt(t[i], e, n, o));
    return r;
  } else process.env.NODE_ENV !== "production" && x(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof t}`
  );
}
function Sn(t, e, n, o = !0) {
  const r = e ? e.vnode : null;
  if (e) {
    let i = e.parent;
    const s = e.proxy, a = process.env.NODE_ENV !== "production" ? _n[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; i; ) {
      const u = i.ec;
      if (u) {
        for (let d = 0; d < u.length; d++)
          if (u[d](t, s, a) === !1)
            return;
      }
      i = i.parent;
    }
    const c = e.appContext.config.errorHandler;
    if (c) {
      te(), $t(
        c,
        null,
        10,
        [t, s, a]
      ), ee();
      return;
    }
  }
  Oi(t, n, r, o);
}
function Oi(t, e, n, o = !0) {
  if (process.env.NODE_ENV !== "production") {
    const r = _n[e];
    if (n && vi(n), x(`Unhandled error${r ? ` during execution of ${r}` : ""}`), n && yi(), o)
      throw t;
    console.error(t);
  } else
    console.error(t);
}
let _e = !1, nn = !1;
const G = [];
let st = 0;
const Ct = [];
let it = null, mt = 0;
const Wo = /* @__PURE__ */ Promise.resolve();
let $n = null;
const Ei = 100;
function Yo(t) {
  const e = $n || Wo;
  return t ? e.then(this ? t.bind(this) : t) : e;
}
function xi(t) {
  let e = st + 1, n = G.length;
  for (; e < n; ) {
    const o = e + n >>> 1, r = G[o], i = Kt(r);
    i < t || i === t && r.pre ? e = o + 1 : n = o;
  }
  return e;
}
function wn(t) {
  (!G.length || !G.includes(
    t,
    _e && t.allowRecurse ? st + 1 : st
  )) && (t.id == null ? G.push(t) : G.splice(xi(t.id), 0, t), Go());
}
function Go() {
  !_e && !nn && (nn = !0, $n = Wo.then(Jo));
}
function qo(t) {
  P(t) ? Ct.push(...t) : (!it || !it.includes(
    t,
    t.allowRecurse ? mt + 1 : mt
  )) && Ct.push(t), Go();
}
function Pi(t) {
  if (Ct.length) {
    const e = [...new Set(Ct)].sort(
      (n, o) => Kt(n) - Kt(o)
    );
    if (Ct.length = 0, it) {
      it.push(...e);
      return;
    }
    for (it = e, process.env.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()), mt = 0; mt < it.length; mt++) {
      const n = it[mt];
      process.env.NODE_ENV !== "production" && Zo(t, n) || n.active !== !1 && n();
    }
    it = null, mt = 0;
  }
}
const Kt = (t) => t.id == null ? 1 / 0 : t.id, ki = (t, e) => {
  const n = Kt(t) - Kt(e);
  if (n === 0) {
    if (t.pre && !e.pre) return -1;
    if (e.pre && !t.pre) return 1;
  }
  return n;
};
function Jo(t) {
  nn = !1, _e = !0, process.env.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()), G.sort(ki);
  const e = process.env.NODE_ENV !== "production" ? (n) => Zo(t, n) : xt;
  try {
    for (st = 0; st < G.length; st++) {
      const n = G[st];
      if (n && n.active !== !1) {
        if (process.env.NODE_ENV !== "production" && e(n))
          continue;
        $t(
          n,
          n.i,
          n.i ? 15 : 14
        );
      }
    }
  } finally {
    st = 0, G.length = 0, Pi(t), _e = !1, $n = null, (G.length || Ct.length) && Jo(t);
  }
}
function Zo(t, e) {
  if (!t.has(e))
    t.set(e, 1);
  else {
    const n = t.get(e);
    if (n > Ei) {
      const o = e.i, r = o && Pn(o.type);
      return Sn(
        `Maximum recursive updates exceeded${r ? ` in component <${r}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
        null,
        10
      ), !0;
    } else
      t.set(e, n + 1);
  }
}
const He = /* @__PURE__ */ new Map();
process.env.NODE_ENV !== "production" && (Po().__VUE_HMR_RUNTIME__ = {
  createRecord: Ke(Ci),
  rerender: Ke(Ni),
  reload: Ke(Ti)
});
const Se = /* @__PURE__ */ new Map();
function Ci(t, e) {
  return Se.has(t) ? !1 : (Se.set(t, {
    initialDef: $e(e),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function $e(t) {
  return br(t) ? t.__vccOpts : t;
}
function Ni(t, e) {
  const n = Se.get(t);
  n && (n.initialDef.render = e, [...n.instances].forEach((o) => {
    e && (o.render = e, $e(o.type).render = e), o.renderCache = [], o.effect.dirty = !0, o.update();
  }));
}
function Ti(t, e) {
  const n = Se.get(t);
  if (!n) return;
  e = $e(e), Bn(n.initialDef, e);
  const o = [...n.instances];
  for (let r = 0; r < o.length; r++) {
    const i = o[r], s = $e(i.type);
    let a = He.get(s);
    a || (s !== n.initialDef && Bn(s, e), He.set(s, a = /* @__PURE__ */ new Set())), a.add(i), i.appContext.propsCache.delete(i.type), i.appContext.emitsCache.delete(i.type), i.appContext.optionsCache.delete(i.type), i.ceReload ? (a.add(i), i.ceReload(e.styles), a.delete(i)) : i.parent ? (i.parent.effect.dirty = !0, wn(() => {
      i.parent.update(), a.delete(i);
    })) : i.appContext.reload ? i.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  qo(() => {
    He.clear();
  });
}
function Bn(t, e) {
  H(t, e);
  for (const n in t)
    n !== "__file" && !(n in e) && delete t[n];
}
function Ke(t) {
  return (e, n) => {
    try {
      return t(e, n);
    } catch (o) {
      console.error(o), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let at, Rt = [], on = !1;
function ji(t, ...e) {
  at ? at.emit(t, ...e) : on || Rt.push({ event: t, args: e });
}
function Xo(t, e) {
  var n, o;
  at = t, at ? (at.enabled = !0, Rt.forEach(({ event: r, args: i }) => at.emit(r, ...i)), Rt = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((o = (n = window.navigator) == null ? void 0 : n.userAgent) != null && o.includes("jsdom")) ? ((e.__VUE_DEVTOOLS_HOOK_REPLAY__ = e.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((i) => {
    Xo(i, e);
  }), setTimeout(() => {
    at || (e.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, on = !0, Rt = []);
  }, 3e3)) : (on = !0, Rt = []);
}
const Vi = /* @__PURE__ */ Ii(
  "component:updated"
  /* COMPONENT_UPDATED */
);
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Ii(t) {
  return (e) => {
    ji(
      t,
      e.appContext.app,
      e.uid,
      e.parent ? e.parent.uid : void 0,
      e
    );
  };
}
let T = null, Qo = null;
function Un(t) {
  const e = T;
  return T = t, Qo = t && t.type.__scopeId || null, e;
}
function Ri(t, e = T, n) {
  if (!e || t._n)
    return t;
  const o = (...r) => {
    o._d && Zn(-1);
    const i = Un(e);
    let s;
    try {
      s = t(...r);
    } finally {
      Un(i), o._d && Zn(1);
    }
    return process.env.NODE_ENV !== "production" && Vi(e), s;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
function Di(t, e) {
  if (T === null)
    return process.env.NODE_ENV !== "production" && x("withDirectives can only be used inside render functions."), t;
  const n = fr(T), o = t.dirs || (t.dirs = []);
  for (let r = 0; r < e.length; r++) {
    let [i, s, a, c = W] = e[r];
    i && (C(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && ct(s), o.push({
      dir: i,
      instance: n,
      value: s,
      oldValue: void 0,
      arg: a,
      modifiers: c
    }));
  }
  return t;
}
function tr(t, e) {
  t.shapeFlag & 6 && t.component ? tr(t.component.subTree, e) : t.shapeFlag & 128 ? (t.ssContent.transition = e.clone(t.ssContent), t.ssFallback.transition = e.clone(t.ssFallback)) : t.transition = e;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function er(t, e) {
  return C(t) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    H({ name: t.name }, e, { setup: t })
  ) : t;
}
const Ai = (t) => !!t.type.__asyncLoader;
function Li(t, e, n = ht, o = !1) {
  if (n) {
    const r = n[t] || (n[t] = []), i = e.__weh || (e.__weh = (...s) => {
      te();
      const a = pr(n), c = Mt(e, n, t, s);
      return a(), ee(), c;
    });
    return o ? r.unshift(i) : r.push(i), i;
  } else if (process.env.NODE_ENV !== "production") {
    const r = Ar(_n[t].replace(/ hook$/, ""));
    x(
      `${r} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const Mi = (t) => (e, n = ht) => {
  (!xn || t === "sp") && Li(t, (...o) => e(...o), n);
}, zi = Mi("m"), we = "components", Bi = "directives";
function Fn(t, e) {
  return On(we, t, !0, e) || t;
}
const nr = Symbol.for("v-ndc");
function Ui(t) {
  return B(t) ? On(we, t, !1) || t : t || nr;
}
function Fi(t) {
  return On(Bi, t);
}
function On(t, e, n = !0, o = !1) {
  const r = T || ht;
  if (r) {
    const i = r.type;
    if (t === we) {
      const a = Pn(
        i,
        !1
      );
      if (a && (a === e || a === ye(e) || a === Ft(ye(e))))
        return i;
    }
    const s = (
      // local registration
      // check instance[type] first which is resolved for options API
      Hn(r[t] || i[t], e) || // global registration
      Hn(r.appContext[t], e)
    );
    if (!s && o)
      return i;
    if (process.env.NODE_ENV !== "production" && n && !s) {
      const a = t === we ? `
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.` : "";
      x(`Failed to resolve ${t.slice(0, -1)}: ${e}${a}`);
    }
    return s;
  } else process.env.NODE_ENV !== "production" && x(
    `resolve${Ft(t.slice(0, -1))} can only be used in render() or setup().`
  );
}
function Hn(t, e) {
  return t && (t[e] || t[ye(e)] || t[Ft(ye(e))]);
}
function Dt(t, e, n = {}, o, r) {
  if (T.isCE || T.parent && Ai(T.parent) && T.parent.isCE)
    return e !== "default" && (n.name = e), Re("slot", n, o && o());
  let i = t[e];
  process.env.NODE_ENV !== "production" && i && i.length > 1 && (x(
    "SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."
  ), i = () => []), i && i._c && (i._d = !1), Q();
  const s = i && or(i(n)), a = Bt(
    Ve,
    {
      key: (n.key || // slot content array of a dynamic conditional slot may have a branch
      // key attached in the `createSlots` helper, respect that
      s && s.key || `_${e}`) + // #7256 force differentiate fallback content from actual content
      (!s && o ? "_fb" : "")
    },
    s || (o ? o() : []),
    s && t._ === 1 ? 64 : -2
  );
  return a.scopeId && (a.slotScopeIds = [a.scopeId + "-s"]), i && i._c && (i._d = !0), a;
}
function or(t) {
  return t.some((e) => ar(e) ? !(e.type === Ee || e.type === Ve && !or(e.children)) : !0) ? t : null;
}
const rn = (t) => t ? ds(t) ? fr(t) : rn(t.parent) : null, zt = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ H(/* @__PURE__ */ Object.create(null), {
    $: (t) => t,
    $el: (t) => t.vnode.el,
    $data: (t) => t.data,
    $props: (t) => process.env.NODE_ENV !== "production" ? ue(t.props) : t.props,
    $attrs: (t) => process.env.NODE_ENV !== "production" ? ue(t.attrs) : t.attrs,
    $slots: (t) => process.env.NODE_ENV !== "production" ? ue(t.slots) : t.slots,
    $refs: (t) => process.env.NODE_ENV !== "production" ? ue(t.refs) : t.refs,
    $parent: (t) => rn(t.parent),
    $root: (t) => rn(t.root),
    $emit: (t) => t.emit,
    $options: (t) => Wi(t),
    $forceUpdate: (t) => t.f || (t.f = () => {
      t.effect.dirty = !0, wn(t.update);
    }),
    $nextTick: (t) => t.n || (t.n = Yo.bind(t.proxy)),
    $watch: (t) => ns.bind(t)
  })
), Hi = (t) => t === "_" || t === "$", We = (t, e) => t !== W && !t.__isScriptSetup && N(t, e), Ki = {
  get({ _: t }, e) {
    if (e === "__v_skip")
      return !0;
    const { ctx: n, setupState: o, data: r, props: i, accessCache: s, type: a, appContext: c } = t;
    if (process.env.NODE_ENV !== "production" && e === "__isVue")
      return !0;
    let u;
    if (e[0] !== "$") {
      const f = s[e];
      if (f !== void 0)
        switch (f) {
          case 1:
            return o[e];
          case 2:
            return r[e];
          case 4:
            return n[e];
          case 3:
            return i[e];
        }
      else {
        if (We(o, e))
          return s[e] = 1, o[e];
        if (r !== W && N(r, e))
          return s[e] = 2, r[e];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (u = t.propsOptions[0]) && N(u, e)
        )
          return s[e] = 3, i[e];
        if (n !== W && N(n, e))
          return s[e] = 4, n[e];
        s[e] = 0;
      }
    }
    const d = zt[e];
    let l, p;
    if (d)
      return e === "$attrs" ? (R(t.attrs, "get", ""), process.env.NODE_ENV !== "production" && void 0) : process.env.NODE_ENV !== "production" && e === "$slots" && R(t, "get", e), d(t);
    if (
      // css module (injected by vue-loader)
      (l = a.__cssModules) && (l = l[e])
    )
      return l;
    if (n !== W && N(n, e))
      return s[e] = 4, n[e];
    if (
      // global properties
      p = c.config.globalProperties, N(p, e)
    )
      return p[e];
    process.env.NODE_ENV !== "production" && T && (!B(e) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    e.indexOf("__v") !== 0) && (r !== W && Hi(e[0]) && N(r, e) ? x(
      `Property ${JSON.stringify(
        e
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : t === T && x(
      `Property ${JSON.stringify(e)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: t }, e, n) {
    const { data: o, setupState: r, ctx: i } = t;
    return We(r, e) ? (r[e] = n, !0) : process.env.NODE_ENV !== "production" && r.__isScriptSetup && N(r, e) ? (x(`Cannot mutate <script setup> binding "${e}" from Options API.`), !1) : o !== W && N(o, e) ? (o[e] = n, !0) : N(t.props, e) ? (process.env.NODE_ENV !== "production" && x(`Attempting to mutate prop "${e}". Props are readonly.`), !1) : e[0] === "$" && e.slice(1) in t ? (process.env.NODE_ENV !== "production" && x(
      `Attempting to mutate public property "${e}". Properties starting with $ are reserved and readonly.`
    ), !1) : (process.env.NODE_ENV !== "production" && e in t.appContext.config.globalProperties ? Object.defineProperty(i, e, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : i[e] = n, !0);
  },
  has({
    _: { data: t, setupState: e, accessCache: n, ctx: o, appContext: r, propsOptions: i }
  }, s) {
    let a;
    return !!n[s] || t !== W && N(t, s) || We(e, s) || (a = i[0]) && N(a, s) || N(o, s) || N(zt, s) || N(r.config.globalProperties, s);
  },
  defineProperty(t, e, n) {
    return n.get != null ? t._.accessCache[e] = 0 : N(n, "value") && this.set(t, e, n.value, null), Reflect.defineProperty(t, e, n);
  }
};
process.env.NODE_ENV !== "production" && (Ki.ownKeys = (t) => (x(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(t)));
function Kn(t) {
  return P(t) ? t.reduce(
    (e, n) => (e[n] = null, e),
    {}
  ) : t;
}
function Wi(t) {
  const e = t.type, { mixins: n, extends: o } = e, {
    mixins: r,
    optionsCache: i,
    config: { optionMergeStrategies: s }
  } = t.appContext, a = i.get(e);
  let c;
  return a ? c = a : !r.length && !n && !o ? c = e : (c = {}, r.length && r.forEach(
    (u) => Oe(c, u, s, !0)
  ), Oe(c, e, s)), I(e) && i.set(e, c), c;
}
function Oe(t, e, n, o = !1) {
  const { mixins: r, extends: i } = e;
  i && Oe(t, i, n, !0), r && r.forEach(
    (s) => Oe(t, s, n, !0)
  );
  for (const s in e)
    if (o && s === "expose")
      process.env.NODE_ENV !== "production" && x(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const a = Yi[s] || n && n[s];
      t[s] = a ? a(t[s], e[s]) : e[s];
    }
  return t;
}
const Yi = {
  data: Wn,
  props: Gn,
  emits: Gn,
  // objects
  methods: At,
  computed: At,
  // lifecycle
  beforeCreate: D,
  created: D,
  beforeMount: D,
  mounted: D,
  beforeUpdate: D,
  updated: D,
  beforeDestroy: D,
  beforeUnmount: D,
  destroyed: D,
  unmounted: D,
  activated: D,
  deactivated: D,
  errorCaptured: D,
  serverPrefetch: D,
  // assets
  components: At,
  directives: At,
  // watch
  watch: qi,
  // provide / inject
  provide: Wn,
  inject: Gi
};
function Wn(t, e) {
  return e ? t ? function() {
    return H(
      C(t) ? t.call(this, this) : t,
      C(e) ? e.call(this, this) : e
    );
  } : e : t;
}
function Gi(t, e) {
  return At(Yn(t), Yn(e));
}
function Yn(t) {
  if (P(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++)
      e[t[n]] = t[n];
    return e;
  }
  return t;
}
function D(t, e) {
  return t ? [...new Set([].concat(t, e))] : e;
}
function At(t, e) {
  return t ? H(/* @__PURE__ */ Object.create(null), t, e) : e;
}
function Gn(t, e) {
  return t ? P(t) && P(e) ? [.../* @__PURE__ */ new Set([...t, ...e])] : H(
    /* @__PURE__ */ Object.create(null),
    Kn(t),
    Kn(e ?? {})
  ) : e;
}
function qi(t, e) {
  if (!t) return e;
  if (!e) return t;
  const n = H(/* @__PURE__ */ Object.create(null), t);
  for (const o in e)
    n[o] = D(t[o], e[o]);
  return n;
}
let qn = null;
function Ji(t, e, n = !1) {
  const o = ht || T;
  if (o || qn) {
    const r = o ? o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : qn._context.provides;
    if (r && t in r)
      return r[t];
    if (arguments.length > 1)
      return n && C(e) ? e.call(o && o.proxy) : e;
    process.env.NODE_ENV !== "production" && x(`injection "${String(t)}" not found.`);
  } else process.env.NODE_ENV !== "production" && x("inject() can only be used inside setup() or functional components.");
}
const Zi = {}, rr = (t) => Object.getPrototypeOf(t) === Zi, Xi = (t) => t.__isTeleport, Jn = is, Qi = Symbol.for("v-scx"), ts = () => {
  {
    const t = Ji(Qi);
    return t || process.env.NODE_ENV !== "production" && x(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), t;
  }
}, de = {};
function es(t, e, n) {
  return process.env.NODE_ENV !== "production" && !C(e) && x(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), ir(t, e, n);
}
function ir(t, e, {
  immediate: n,
  deep: o,
  flush: r,
  once: i,
  onTrack: s,
  onTrigger: a
} = W) {
  if (e && i) {
    const _ = e;
    e = (...F) => {
      _(...F), A();
    };
  }
  process.env.NODE_ENV !== "production" && o !== void 0 && typeof o == "number" && x(
    'watch() "deep" option with number value will be used as watch depth in future versions. Please use a boolean instead to avoid potential breakage.'
  ), process.env.NODE_ENV !== "production" && !e && (n !== void 0 && x(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && x(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), i !== void 0 && x(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const c = (_) => {
    x(
      "Invalid watch source: ",
      _,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, u = ht, d = (_) => o === !0 ? _ : (
    // for deep: false, only traverse root-level properties
    ct(_, o === !1 ? 1 : void 0)
  );
  let l, p = !1, f = !1;
  if (U(t) ? (l = () => t.value, p = et(t)) : kt(t) ? (l = () => d(t), p = !0) : P(t) ? (f = !0, p = t.some((_) => kt(_) || et(_)), l = () => t.map((_) => {
    if (U(_))
      return _.value;
    if (kt(_))
      return d(_);
    if (C(_))
      return $t(_, u, 2);
    process.env.NODE_ENV !== "production" && c(_);
  })) : C(t) ? e ? l = () => $t(t, u, 2) : l = () => (h && h(), Mt(
    t,
    u,
    3,
    [g]
  )) : (l = xt, process.env.NODE_ENV !== "production" && c(t)), e && o) {
    const _ = l;
    l = () => ct(_());
  }
  let h, g = (_) => {
    h = E.onStop = () => {
      $t(_, u, 4), h = E.onStop = void 0;
    };
  }, S;
  if (xn)
    if (g = xt, e ? n && Mt(e, u, 3, [
      l(),
      f ? [] : void 0,
      g
    ]) : l(), r === "sync") {
      const _ = ts();
      S = _.__watcherHandles || (_.__watcherHandles = []);
    } else
      return xt;
  let y = f ? new Array(t.length).fill(de) : de;
  const b = () => {
    if (!(!E.active || !E.dirty))
      if (e) {
        const _ = E.run();
        (o || p || (f ? _.some((F, Z) => pt(F, y[Z])) : pt(_, y))) && (h && h(), Mt(e, u, 3, [
          _,
          // pass undefined as the old value when it's changed for the first time
          y === de ? void 0 : f && y[0] === de ? [] : y,
          g
        ]), y = _);
      } else
        E.run();
  };
  b.allowRecurse = !!e;
  let m;
  r === "sync" ? m = b : r === "post" ? m = () => Jn(b, u && u.suspense) : (b.pre = !0, u && (b.id = u.uid), m = () => wn(b));
  const E = new No(l, xt, m), A = () => {
    E.stop();
  };
  return process.env.NODE_ENV !== "production" && (E.onTrack = s, E.onTrigger = a), e ? n ? b() : y = E.run() : r === "post" ? Jn(
    E.run.bind(E),
    u && u.suspense
  ) : E.run(), S && S.push(A), A;
}
function ns(t, e, n) {
  const o = this.proxy, r = B(t) ? t.includes(".") ? os(o, t) : () => o[t] : t.bind(o, o);
  let i;
  C(e) ? i = e : (i = e.handler, n = e);
  const s = pr(this), a = ir(r, i.bind(o), n);
  return s(), a;
}
function os(t, e) {
  const n = e.split(".");
  return () => {
    let o = t;
    for (let r = 0; r < n.length && o; r++)
      o = o[n[r]];
    return o;
  };
}
function ct(t, e = 1 / 0, n) {
  if (e <= 0 || !I(t) || t.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(t)))
    return t;
  if (n.add(t), e--, U(t))
    ct(t.value, e, n);
  else if (P(t))
    for (let o = 0; o < t.length; o++)
      ct(t[o], e, n);
  else if (wo(t) || vt(t))
    t.forEach((o) => {
      ct(o, e, n);
    });
  else if (xo(t)) {
    for (const o in t)
      ct(t[o], e, n);
    for (const o of Object.getOwnPropertySymbols(t))
      Object.prototype.propertyIsEnumerable.call(t, o) && ct(t[o], e, n);
  }
  return t;
}
const rs = (t) => t.__isSuspense;
function is(t, e) {
  e && e.pendingBranch ? P(t) ? e.effects.push(...t) : e.effects.push(t) : qo(t);
}
const Ve = Symbol.for("v-fgt"), ss = Symbol.for("v-txt"), Ee = Symbol.for("v-cmt"), ge = [];
let z = null;
function Q(t = !1) {
  ge.push(z = t ? null : []);
}
function as() {
  ge.pop(), z = ge[ge.length - 1] || null;
}
let Wt = 1;
function Zn(t) {
  Wt += t, t < 0 && z && (z.hasOnce = !0);
}
function sr(t) {
  return t.dynamicChildren = Wt > 0 ? z || jr : null, as(), Wt > 0 && z && z.push(t), t;
}
function xe(t, e, n, o, r, i) {
  return sr(
    Ie(
      t,
      e,
      n,
      o,
      r,
      i,
      !0
    )
  );
}
function Bt(t, e, n, o, r) {
  return sr(
    Re(
      t,
      e,
      n,
      o,
      r,
      !0
    )
  );
}
function ar(t) {
  return t ? t.__v_isVNode === !0 : !1;
}
const cs = (...t) => lr(
  ...t
), cr = ({ key: t }) => t ?? null, me = ({
  ref: t,
  ref_key: e,
  ref_for: n
}) => (typeof t == "number" && (t = "" + t), t != null ? B(t) || U(t) || C(t) ? { i: T, r: t, k: e, f: !!n } : t : null);
function Ie(t, e = null, n = null, o = 0, r = null, i = t === Ve ? 0 : 1, s = !1, a = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: e,
    key: e && cr(e),
    ref: e && me(e),
    scopeId: Qo,
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
    shapeFlag: i,
    patchFlag: o,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: T
  };
  return a ? (En(c, n), i & 128 && t.normalize(c)) : n && (c.shapeFlag |= B(n) ? 8 : 16), process.env.NODE_ENV !== "production" && c.key !== c.key && x("VNode created with invalid key (NaN). VNode type:", c.type), Wt > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  z && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && z.push(c), c;
}
const Re = process.env.NODE_ENV !== "production" ? cs : lr;
function lr(t, e = null, n = null, o = 0, r = null, i = !1) {
  if ((!t || t === nr) && (process.env.NODE_ENV !== "production" && !t && x(`Invalid vnode type when creating vnode: ${t}.`), t = Ee), ar(t)) {
    const a = Pe(
      t,
      e,
      !0
      /* mergeRef: true */
    );
    return n && En(a, n), Wt > 0 && !i && z && (a.shapeFlag & 6 ? z[z.indexOf(t)] = a : z.push(a)), a.patchFlag = -2, a;
  }
  if (br(t) && (t = t.__vccOpts), e) {
    e = ls(e);
    let { class: a, style: c } = e;
    a && !B(a) && (e.class = Pt(a)), I(c) && (en(c) && !P(c) && (c = H({}, c)), e.style = pn(c));
  }
  const s = B(t) ? 1 : rs(t) ? 128 : Xi(t) ? 64 : I(t) ? 4 : C(t) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && s & 4 && en(t) && (t = $(t), x(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    t
  )), Ie(
    t,
    e,
    n,
    o,
    r,
    s,
    i,
    !0
  );
}
function ls(t) {
  return t ? en(t) || rr(t) ? H({}, t) : t : null;
}
function Pe(t, e, n = !1, o = !1) {
  const { props: r, ref: i, patchFlag: s, children: a, transition: c } = t, u = e ? L(r || {}, e) : r, d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t.type,
    props: u,
    key: u && cr(u),
    ref: e && e.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? P(i) ? i.concat(me(e)) : [i, me(e)] : me(e)
    ) : i,
    scopeId: t.scopeId,
    slotScopeIds: t.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && s === -1 && P(a) ? a.map(ur) : a,
    target: t.target,
    targetStart: t.targetStart,
    targetAnchor: t.targetAnchor,
    staticCount: t.staticCount,
    shapeFlag: t.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: e && t.type !== Ve ? s === -1 ? 16 : s | 16 : s,
    dynamicProps: t.dynamicProps,
    dynamicChildren: t.dynamicChildren,
    appContext: t.appContext,
    dirs: t.dirs,
    transition: c,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: t.component,
    suspense: t.suspense,
    ssContent: t.ssContent && Pe(t.ssContent),
    ssFallback: t.ssFallback && Pe(t.ssFallback),
    el: t.el,
    anchor: t.anchor,
    ctx: t.ctx,
    ce: t.ce
  };
  return c && o && tr(
    d,
    c.clone(d)
  ), d;
}
function ur(t) {
  const e = Pe(t);
  return P(t.children) && (e.children = t.children.map(ur)), e;
}
function dr(t = " ", e = 0) {
  return Re(ss, null, t, e);
}
function Xn(t = "", e = !1) {
  return e ? (Q(), Bt(Ee, null, t)) : Re(Ee, null, t);
}
function En(t, e) {
  let n = 0;
  const { shapeFlag: o } = t;
  if (e == null)
    e = null;
  else if (P(e))
    n = 16;
  else if (typeof e == "object")
    if (o & 65) {
      const r = e.default;
      r && (r._c && (r._d = !1), En(t, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = e._;
      !r && !rr(e) ? e._ctx = T : r === 3 && T && (T.slots._ === 1 ? e._ = 1 : (e._ = 2, t.patchFlag |= 1024));
    }
  else C(e) ? (e = { default: e, _ctx: T }, n = 32) : (e = String(e), o & 64 ? (n = 16, e = [dr(e)]) : n = 8);
  t.children = e, t.shapeFlag |= n;
}
function L(...t) {
  const e = {};
  for (let n = 0; n < t.length; n++) {
    const o = t[n];
    for (const r in o)
      if (r === "class")
        e.class !== o.class && (e.class = Pt([e.class, o.class]));
      else if (r === "style")
        e.style = pn([e.style, o.style]);
      else if (Vr(r)) {
        const i = e[r], s = o[r];
        s && i !== s && !(P(i) && i.includes(s)) && (e[r] = i ? [].concat(i, s) : s);
      } else r !== "" && (e[r] = o[r]);
  }
  return e;
}
let ht = null;
const us = () => ht || T;
let sn;
{
  const t = Po(), e = (n, o) => {
    let r;
    return (r = t[n]) || (r = t[n] = []), r.push(o), (i) => {
      r.length > 1 ? r.forEach((s) => s(i)) : r[0](i);
    };
  };
  sn = e(
    "__VUE_INSTANCE_SETTERS__",
    (n) => ht = n
  ), e(
    "__VUE_SSR_SETTERS__",
    (n) => xn = n
  );
}
const pr = (t) => {
  const e = ht;
  return sn(t), t.scope.on(), () => {
    t.scope.off(), sn(e);
  };
};
function ds(t) {
  return t.vnode.shapeFlag & 4;
}
let xn = !1;
process.env.NODE_ENV;
function fr(t) {
  return t.exposed ? t.exposeProxy || (t.exposeProxy = new Proxy(mi(ui(t.exposed)), {
    get(e, n) {
      if (n in e)
        return e[n];
      if (n in zt)
        return zt[n](t);
    },
    has(e, n) {
      return n in e || n in zt;
    }
  })) : t.proxy;
}
const ps = /(?:^|[-_])(\w)/g, fs = (t) => t.replace(ps, (e) => e.toUpperCase()).replace(/[-_]/g, "");
function Pn(t, e = !0) {
  return C(t) ? t.displayName || t.name : t.name || e && t.__name;
}
function hr(t, e, n = !1) {
  let o = Pn(e);
  if (!o && e.__file) {
    const r = e.__file.match(/([^/\\]+)\.\w+$/);
    r && (o = r[1]);
  }
  if (!o && t && t.parent) {
    const r = (i) => {
      for (const s in i)
        if (i[s] === e)
          return s;
    };
    o = r(
      t.components || t.parent.type.components
    ) || r(t.appContext.components);
  }
  return o ? fs(o) : n ? "App" : "Anonymous";
}
function br(t) {
  return C(t) && "__vccOpts" in t;
}
function hs() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const t = { style: "color:#3ba776" }, e = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, o = { style: "color:#eb2f96" }, r = {
    __vue_custom_formatter: !0,
    header(l) {
      return I(l) ? l.__isVue ? ["div", t, "VueInstance"] : U(l) ? [
        "div",
        {},
        ["span", t, d(l)],
        "<",
        a(l.value),
        ">"
      ] : kt(l) ? [
        "div",
        {},
        ["span", t, et(l) ? "ShallowReactive" : "Reactive"],
        "<",
        a(l),
        `>${nt(l) ? " (readonly)" : ""}`
      ] : nt(l) ? [
        "div",
        {},
        ["span", t, et(l) ? "ShallowReadonly" : "Readonly"],
        "<",
        a(l),
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
          ...i(l.$)
        ];
    }
  };
  function i(l) {
    const p = [];
    l.type.props && l.props && p.push(s("props", $(l.props))), l.setupState !== W && p.push(s("setup", l.setupState)), l.data !== W && p.push(s("data", $(l.data)));
    const f = c(l, "computed");
    f && p.push(s("computed", f));
    const h = c(l, "inject");
    return h && p.push(s("injected", h)), p.push([
      "div",
      {},
      [
        "span",
        {
          style: o.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: l }]
    ]), p;
  }
  function s(l, p) {
    return p = H({}, p), Object.keys(p).length ? [
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
        ...Object.keys(p).map((f) => [
          "div",
          {},
          ["span", o, f + ": "],
          a(p[f], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function a(l, p = !0) {
    return typeof l == "number" ? ["span", e, l] : typeof l == "string" ? ["span", n, JSON.stringify(l)] : typeof l == "boolean" ? ["span", o, l] : I(l) ? ["object", { object: p ? $(l) : l }] : ["span", n, String(l)];
  }
  function c(l, p) {
    const f = l.type;
    if (C(f))
      return;
    const h = {};
    for (const g in l.ctx)
      u(f, g, p) && (h[g] = l.ctx[g]);
    return h;
  }
  function u(l, p, f) {
    const h = l[f];
    if (P(h) && h.includes(p) || I(h) && p in h || l.extends && u(l.extends, p, f) || l.mixins && l.mixins.some((g) => u(g, p, f)))
      return !0;
  }
  function d(l) {
    return et(l) ? "ShallowRef" : l.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(r) : window.devtoolsFormatters = [r];
}
process.env.NODE_ENV;
process.env.NODE_ENV;
process.env.NODE_ENV;
/**
* vue v3.4.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function bs() {
  hs();
}
process.env.NODE_ENV !== "production" && bs();
function Tt(t) {
  return t == null || t === "" || Array.isArray(t) && t.length === 0 || !(t instanceof Date) && typeof t == "object" && Object.keys(t).length === 0;
}
function kn(t) {
  return !!(t && t.constructor && t.call && t.apply);
}
function j(t) {
  return !Tt(t);
}
function ft(t, e = !0) {
  return t instanceof Object && t.constructor === Object && (e || Object.keys(t).length !== 0);
}
function J(t, ...e) {
  return kn(t) ? t(...e) : t;
}
function M(t, e = !0) {
  return typeof t == "string" && (e || t !== "");
}
function Y(t) {
  return M(t) ? t.replace(/(-|_)/g, "").toLowerCase() : t;
}
function Cn(t, e = "", n = {}) {
  const o = Y(e).split("."), r = o.shift();
  return r ? ft(t) ? Cn(J(t[Object.keys(t).find((i) => Y(i) === r) || ""], n), o.join("."), n) : void 0 : J(t, n);
}
function Nn(t, e = !0) {
  return Array.isArray(t) && (e || t.length !== 0);
}
function gr(t) {
  return j(t) && !isNaN(t);
}
function tt(t, e) {
  if (e) {
    const n = e.test(t);
    return e.lastIndex = 0, n;
  }
  return !1;
}
function Ut(t) {
  return t && t.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g, "").replace(/ {2,}/g, " ").replace(/ ([{:}]) /g, "$1").replace(/([;,]) /g, "$1").replace(/ !/g, "!").replace(/: /g, ":");
}
function gs(t) {
  return M(t, !1) ? t[0].toUpperCase() + t.slice(1) : t;
}
function mr(t) {
  return M(t) ? t.replace(/(_)/g, "-").replace(/[A-Z]/g, (e, n) => n === 0 ? e : "-" + e.toLowerCase()).toLowerCase() : t;
}
function Qn(t) {
  return M(t) ? t.replace(/[A-Z]/g, (e, n) => n === 0 ? e : "." + e.toLowerCase()).toLowerCase() : t;
}
function vr() {
  const t = /* @__PURE__ */ new Map();
  return {
    on(e, n) {
      let o = t.get(e);
      return o ? o.push(n) : o = [n], t.set(e, o), this;
    },
    off(e, n) {
      let o = t.get(e);
      return o && o.splice(o.indexOf(n) >>> 0, 1), this;
    },
    emit(e, n) {
      let o = t.get(e);
      o && o.slice().map((r) => {
        r(n);
      });
    },
    clear() {
      t.clear();
    }
  };
}
var ms = Object.defineProperty, vs = Object.defineProperties, ys = Object.getOwnPropertyDescriptors, ke = Object.getOwnPropertySymbols, yr = Object.prototype.hasOwnProperty, _r = Object.prototype.propertyIsEnumerable, to = (t, e, n) => e in t ? ms(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, Vt = (t, e) => {
  for (var n in e || (e = {}))
    yr.call(e, n) && to(t, n, e[n]);
  if (ke)
    for (var n of ke(e))
      _r.call(e, n) && to(t, n, e[n]);
  return t;
}, Ye = (t, e) => vs(t, ys(e)), It = (t, e) => {
  var n = {};
  for (var o in t)
    yr.call(t, o) && e.indexOf(o) < 0 && (n[o] = t[o]);
  if (t != null && ke)
    for (var o of ke(t))
      e.indexOf(o) < 0 && _r.call(t, o) && (n[o] = t[o]);
  return n;
}, _s = vr(), X = _s;
function eo(t, e) {
  Nn(t) ? t.push(...e || []) : ft(t) && Object.assign(t, e);
}
function Ss(t) {
  return ft(t) && t.hasOwnProperty("value") && t.hasOwnProperty("type") ? t.value : t;
}
function no(t, e = "") {
  return ["opacity", "z-index", "line-height", "font-weight", "flex", "flex-grow", "flex-shrink", "order"].some((o) => e.endsWith(o)) ? t : `${t}`.trim().split(" ").map((i) => gr(i) ? `${i}px` : i).join(" ");
}
function $s(t) {
  return t.replaceAll(/ /g, "").replace(/[^\w]/g, "-");
}
function an(t = "", e = "") {
  return $s(`${M(t, !1) && M(e, !1) ? `${t}-` : t}${e}`);
}
function Sr(t = "", e = "") {
  return `--${an(t, e)}`;
}
function $r(t, e = "", n = "", o = [], r) {
  if (M(t)) {
    const i = /{([^}]*)}/g, s = t.trim();
    if (tt(s, i)) {
      const a = s.replaceAll(i, (d) => {
        const p = d.replace(/{|}/g, "").split(".").filter((f) => !o.some((h) => tt(f, h)));
        return `var(${Sr(n, mr(p.join("-")))}${j(r) ? `, ${r}` : ""})`;
      }), c = /(\d+\s+[\+\-\*\/]\s+\d+)/g, u = /var\([^)]+\)/g;
      return tt(a.replace(u, "0"), c) ? `calc(${a})` : a;
    }
    return no(s, e);
  } else if (gr(t))
    return no(t, e);
}
function ws(t, e, n) {
  M(e, !1) && t.push(`${e}:${n};`);
}
function Lt(t, e) {
  return t ? `${t}{${e}}` : "";
}
var Ge = (...t) => Os(k.getTheme(), ...t), Os = (t = {}, e, n, o = "variable") => {
  if (e) {
    const { variable: r, options: i } = k.defaults || {}, { prefix: s, transform: a } = (t == null ? void 0 : t.options) || i || {}, u = tt(e, /{([^}]*)}/g) ? e : `{${e}}`;
    return o === "value" || a === "strict" ? k.getTokenValue(e) : $r(u, void 0, s, [r.excludedKeyRegex], n);
  }
  return "";
};
function Es(t, e = {}) {
  const n = k.defaults.variable, { prefix: o = n.prefix, selector: r = n.selector, excludedKeyRegex: i = n.excludedKeyRegex } = e, s = (u, d = "") => Object.entries(u).reduce(
    (l, [p, f]) => {
      const h = tt(p, i) ? an(d) : an(d, mr(p)), g = Ss(f);
      if (ft(g)) {
        const { variables: S, tokens: y } = s(g, h);
        eo(l.tokens, y), eo(l.variables, S);
      } else
        l.tokens.push((o ? h.replace(`${o}-`, "") : h).replaceAll("-", ".")), ws(l.variables, Sr(h), $r(g, h, o, [i]));
      return l;
    },
    { variables: [], tokens: [] }
  ), { variables: a, tokens: c } = s(t, o);
  return {
    value: a,
    tokens: c,
    declarations: a.join(""),
    css: Lt(r, a.join(""))
  };
}
var K = {
  regex: {
    rules: {
      class: {
        pattern: /^\.([a-zA-Z][\w-]*)$/,
        resolve(t) {
          return { type: "class", selector: t, matched: this.pattern.test(t.trim()) };
        }
      },
      attr: {
        pattern: /^\[(.*)\]$/,
        resolve(t) {
          return { type: "attr", selector: `:root${t}`, matched: this.pattern.test(t.trim()) };
        }
      },
      media: {
        pattern: /^@media (.*)$/,
        resolve(t) {
          return { type: "media", selector: `${t}{:root{[CSS]}}`, matched: this.pattern.test(t.trim()) };
        }
      },
      system: {
        pattern: /^system$/,
        resolve(t) {
          return { type: "system", selector: "@media (prefers-color-scheme: dark){:root{[CSS]}}", matched: this.pattern.test(t.trim()) };
        }
      },
      custom: {
        resolve(t) {
          return { type: "custom", selector: t, matched: !0 };
        }
      }
    },
    resolve(t) {
      const e = Object.keys(this.rules).filter((n) => n !== "custom").map((n) => this.rules[n]);
      return [t].flat().map((n) => {
        var o;
        return (o = e.map((r) => r.resolve(n)).find((r) => r.matched)) != null ? o : this.rules.custom.resolve(n);
      });
    }
  },
  _toVariables(t, e) {
    return Es(t, { prefix: e == null ? void 0 : e.prefix });
  },
  getCommon({ name: t = "", theme: e = {}, params: n, set: o, defaults: r }) {
    var i, s, a, c;
    const { preset: u, options: d } = e;
    let l, p, f, h;
    if (j(u)) {
      const { primitive: g, semantic: S } = u, y = S || {}, { colorScheme: b } = y, m = It(y, ["colorScheme"]), E = b || {}, { dark: A } = E, _ = It(E, ["dark"]), F = j(g) ? this._toVariables({ primitive: g }, d) : {}, Z = j(m) ? this._toVariables({ semantic: m }, d) : {}, ot = j(_) ? this._toVariables({ light: _ }, d) : {}, bt = j(A) ? this._toVariables({ dark: A }, d) : {}, [gt, Ot] = [(i = F.declarations) != null ? i : "", F.tokens], [Ae, ne] = [(s = Z.declarations) != null ? s : "", Z.tokens || []], [oe, Le] = [(a = ot.declarations) != null ? a : "", ot.tokens || []], [re, Me] = [(c = bt.declarations) != null ? c : "", bt.tokens || []];
      l = this.transformCSS(t, gt, "light", "variable", d, o, r), p = Ot;
      const ze = this.transformCSS(t, `${Ae}${oe}color-scheme:light`, "light", "variable", d, o, r), Et = this.transformCSS(t, `${re}color-scheme:dark`, "dark", "variable", d, o, r);
      f = `${ze}${Et}`, h = [.../* @__PURE__ */ new Set([...ne, ...Le, ...Me])];
    }
    return {
      primitive: {
        css: l,
        tokens: p
      },
      semantic: {
        css: f,
        tokens: h
      }
    };
  },
  getPreset({ name: t = "", preset: e = {}, options: n, params: o, set: r, defaults: i, selector: s }) {
    var a, c, u;
    const d = t.replace("-directive", ""), l = e, { colorScheme: p } = l, f = It(l, ["colorScheme"]), h = p || {}, { dark: g } = h, S = It(h, ["dark"]), y = j(f) ? this._toVariables({ [d]: f }, n) : {}, b = j(S) ? this._toVariables({ [d]: S }, n) : {}, m = j(g) ? this._toVariables({ [d]: g }, n) : {}, [E, A] = [(a = y.declarations) != null ? a : "", y.tokens || []], [_, F] = [(c = b.declarations) != null ? c : "", b.tokens || []], [Z, ot] = [(u = m.declarations) != null ? u : "", m.tokens || []], bt = [.../* @__PURE__ */ new Set([...A, ...F, ...ot])], gt = this.transformCSS(d, `${E}${_}`, "light", "variable", n, r, i, s), Ot = this.transformCSS(d, Z, "dark", "variable", n, r, i, s);
    return {
      css: `${gt}${Ot}`,
      tokens: bt
    };
  },
  getPresetC({ name: t = "", theme: e = {}, params: n, set: o, defaults: r }) {
    var i;
    const { preset: s, options: a } = e, c = (i = s == null ? void 0 : s.components) == null ? void 0 : i[t];
    return this.getPreset({ name: t, preset: c, options: a, params: n, set: o, defaults: r });
  },
  getPresetD({ name: t = "", theme: e = {}, params: n, set: o, defaults: r }) {
    var i;
    const s = t.replace("-directive", ""), { preset: a, options: c } = e, u = (i = a == null ? void 0 : a.directives) == null ? void 0 : i[s];
    return this.getPreset({ name: s, preset: u, options: c, params: n, set: o, defaults: r });
  },
  getColorSchemeOption(t, e) {
    var n;
    return this.regex.resolve((n = t.darkModeSelector) != null ? n : e.options.darkModeSelector);
  },
  getLayerOrder(t, e = {}, n, o) {
    const { cssLayer: r } = e;
    return r ? `@layer ${J(r.order || "primeui", n)}` : "";
  },
  getCommonStyleSheet({ name: t = "", theme: e = {}, params: n, props: o = {}, set: r, defaults: i }) {
    const s = this.getCommon({ name: t, theme: e, params: n, set: r, defaults: i }), a = Object.entries(o).reduce((c, [u, d]) => c.push(`${u}="${d}"`) && c, []).join(" ");
    return Object.entries(s || {}).reduce((c, [u, d]) => {
      if (d != null && d.css) {
        const l = Ut(d == null ? void 0 : d.css), p = `${u}-variables`;
        c.push(`<style type="text/css" data-primevue-style-id="${p}" ${a}>${l}</style>`);
      }
      return c;
    }, []).join("");
  },
  getStyleSheet({ name: t = "", theme: e = {}, params: n, props: o = {}, set: r, defaults: i }) {
    var s;
    const a = { name: t, theme: e, params: n, set: r, defaults: i }, c = (s = t.includes("-directive") ? this.getPresetD(a) : this.getPresetC(a)) == null ? void 0 : s.css, u = Object.entries(o).reduce((d, [l, p]) => d.push(`${l}="${p}"`) && d, []).join(" ");
    return c ? `<style type="text/css" data-primevue-style-id="${t}-variables" ${u}>${Ut(c)}</style>` : "";
  },
  createTokens(t = {}, e, n = "", o = "", r = {}) {
    return Object.entries(t).forEach(([i, s]) => {
      const a = tt(i, e.variable.excludedKeyRegex) ? n : n ? `${n}.${Qn(i)}` : Qn(i), c = o ? `${o}.${i}` : i;
      ft(s) ? this.createTokens(s, e, a, c, r) : (r[a] || (r[a] = {
        paths: [],
        computed(u, d = {}) {
          if (u) {
            const l = this.paths.find((p) => p.scheme === u) || this.paths.find((p) => p.scheme === "none");
            return l == null ? void 0 : l.computed(u, d.binding);
          }
          return this.paths.map((l) => l.computed(l.scheme, d[l.scheme]));
        }
      }), r[a].paths.push({
        path: c,
        value: s,
        scheme: c.includes("colorScheme.light") ? "light" : c.includes("colorScheme.dark") ? "dark" : "none",
        computed(u, d = {}) {
          const l = /{([^}]*)}/g;
          let p = s;
          if (d.name = this.path, d.binding || (d.binding = {}), tt(s, l)) {
            const h = s.trim().replaceAll(l, (y) => {
              var b, m;
              const E = y.replace(/{|}/g, "");
              return (m = (b = r[E]) == null ? void 0 : b.computed(u, d)) == null ? void 0 : m.value;
            }), g = /(\d+\w*\s+[\+\-\*\/]\s+\d+\w*)/g, S = /var\([^)]+\)/g;
            p = tt(h.replace(S, "0"), g) ? `calc(${h})` : h;
          }
          return Tt(d.binding) && delete d.binding, {
            colorScheme: u,
            path: this.path,
            paths: d,
            value: p.includes("undefined") ? void 0 : p
          };
        }
      }));
    }), r;
  },
  getTokenValue(t, e, n) {
    var o;
    const i = ((c) => c.split(".").filter((d) => !tt(d.toLowerCase(), n.variable.excludedKeyRegex)).join("."))(e), s = e.includes("colorScheme.light") ? "light" : e.includes("colorScheme.dark") ? "dark" : void 0, a = [(o = t[i]) == null ? void 0 : o.computed(s)].flat().filter((c) => c);
    return a.length === 1 ? a[0].value : a.reduce((c = {}, u) => {
      const d = u, { colorScheme: l } = d, p = It(d, ["colorScheme"]);
      return c[l] = p, c;
    }, void 0);
  },
  transformCSS(t, e, n, o, r = {}, i, s, a) {
    if (j(e)) {
      const { cssLayer: c } = r;
      if (o !== "style") {
        const u = this.getColorSchemeOption(r, s), d = a ? Lt(a, e) : e;
        e = n === "dark" ? u.reduce((l, { selector: p }) => (j(p) && (l += p.includes("[CSS]") ? p.replace("[CSS]", d) : Lt(p, d)), l), "") : Lt(a ?? ":root", e);
      }
      if (c) {
        const u = {
          name: "primeui",
          order: "primeui"
        };
        ft(c) && (u.name = J(c.name, { name: t, type: o })), j(u.name) && (e = Lt(`@layer ${u.name}`, e), i == null || i.layerNames(u.name));
      }
      return e;
    }
    return "";
  }
}, k = {
  defaults: {
    variable: {
      prefix: "p",
      selector: ":root",
      excludedKeyRegex: /^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states)$/gi
    },
    options: {
      prefix: "p",
      darkModeSelector: "system",
      cssLayer: !1
    }
  },
  _theme: void 0,
  _layerNames: /* @__PURE__ */ new Set(),
  _loadedStyleNames: /* @__PURE__ */ new Set(),
  _loadingStyles: /* @__PURE__ */ new Set(),
  _tokens: {},
  update(t = {}) {
    const { theme: e } = t;
    e && (this._theme = Ye(Vt({}, e), {
      options: Vt(Vt({}, this.defaults.options), e.options)
    }), this._tokens = K.createTokens(this.preset, this.defaults), this.clearLoadedStyleNames());
  },
  get theme() {
    return this._theme;
  },
  get preset() {
    var t;
    return ((t = this.theme) == null ? void 0 : t.preset) || {};
  },
  get options() {
    var t;
    return ((t = this.theme) == null ? void 0 : t.options) || {};
  },
  get tokens() {
    return this._tokens;
  },
  getTheme() {
    return this.theme;
  },
  setTheme(t) {
    this.update({ theme: t }), X.emit("theme:change", t);
  },
  getPreset() {
    return this.preset;
  },
  setPreset(t) {
    this._theme = Ye(Vt({}, this.theme), { preset: t }), this._tokens = K.createTokens(t, this.defaults), this.clearLoadedStyleNames(), X.emit("preset:change", t), X.emit("theme:change", this.theme);
  },
  getOptions() {
    return this.options;
  },
  setOptions(t) {
    this._theme = Ye(Vt({}, this.theme), { options: t }), this.clearLoadedStyleNames(), X.emit("options:change", t), X.emit("theme:change", this.theme);
  },
  getLayerNames() {
    return [...this._layerNames];
  },
  setLayerNames(t) {
    this._layerNames.add(t);
  },
  getLoadedStyleNames() {
    return this._loadedStyleNames;
  },
  isStyleNameLoaded(t) {
    return this._loadedStyleNames.has(t);
  },
  setLoadedStyleName(t) {
    this._loadedStyleNames.add(t);
  },
  deleteLoadedStyleName(t) {
    this._loadedStyleNames.delete(t);
  },
  clearLoadedStyleNames() {
    this._loadedStyleNames.clear();
  },
  getTokenValue(t) {
    return K.getTokenValue(this.tokens, t, this.defaults);
  },
  getCommon(t = "", e) {
    return K.getCommon({ name: t, theme: this.theme, params: e, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
  },
  getComponent(t = "", e) {
    const n = { name: t, theme: this.theme, params: e, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
    return K.getPresetC(n);
  },
  getDirective(t = "", e) {
    const n = { name: t, theme: this.theme, params: e, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
    return K.getPresetD(n);
  },
  getCustomPreset(t = "", e, n, o) {
    const r = { name: t, preset: e, options: this.options, selector: n, params: o, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
    return K.getPreset(r);
  },
  getLayerOrderCSS(t = "") {
    return K.getLayerOrder(t, this.options, { names: this.getLayerNames() }, this.defaults);
  },
  transformCSS(t = "", e, n = "style", o) {
    return K.transformCSS(t, e, o, n, this.options, { layerNames: this.setLayerNames.bind(this) }, this.defaults);
  },
  getCommonStyleSheet(t = "", e, n = {}) {
    return K.getCommonStyleSheet({ name: t, theme: this.theme, params: e, props: n, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
  },
  getStyleSheet(t, e, n = {}) {
    return K.getStyleSheet({ name: t, theme: this.theme, params: e, props: n, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
  },
  onStyleMounted(t) {
    this._loadingStyles.add(t);
  },
  onStyleUpdated(t) {
    this._loadingStyles.add(t);
  },
  onStyleLoaded(t, { name: e }) {
    this._loadingStyles.size && (this._loadingStyles.delete(e), X.emit(`theme:${e}:load`, t), !this._loadingStyles.size && X.emit("theme:load"));
  }
};
function xs(t, e) {
  return t ? t.classList ? t.classList.contains(e) : new RegExp("(^| )" + e + "( |$)", "gi").test(t.className) : !1;
}
function Ps(t, e) {
  if (t && e) {
    const n = (o) => {
      xs(t, o) || (t.classList ? t.classList.add(o) : t.className += " " + o);
    };
    [e].flat().filter(Boolean).forEach((o) => o.split(" ").forEach(n));
  }
}
function qe(t, e) {
  if (t && e) {
    const n = (o) => {
      t.classList ? t.classList.remove(o) : t.className = t.className.replace(new RegExp("(^|\\b)" + o.split(" ").join("|") + "(\\b|$)", "gi"), " ");
    };
    [e].flat().filter(Boolean).forEach((o) => o.split(" ").forEach(n));
  }
}
function ks(t, e) {
  return t instanceof HTMLElement ? t.offsetWidth : 0;
}
function De(t) {
  return typeof HTMLElement == "object" ? t instanceof HTMLElement : t && typeof t == "object" && t !== null && t.nodeType === 1 && typeof t.nodeName == "string";
}
function Ce(t, e = {}) {
  if (De(t)) {
    const n = (o, r) => {
      var i, s;
      const a = (i = t == null ? void 0 : t.$attrs) != null && i[o] ? [(s = t == null ? void 0 : t.$attrs) == null ? void 0 : s[o]] : [];
      return [r].flat().reduce((c, u) => {
        if (u != null) {
          const d = typeof u;
          if (d === "string" || d === "number")
            c.push(u);
          else if (d === "object") {
            const l = Array.isArray(u) ? n(o, u) : Object.entries(u).map(([p, f]) => o === "style" && (f || f === 0) ? `${p.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()}:${f}` : f ? p : void 0);
            c = l.length ? c.concat(l.filter((p) => !!p)) : c;
          }
        }
        return c;
      }, a);
    };
    Object.entries(e).forEach(([o, r]) => {
      if (r != null) {
        const i = o.match(/^on(.+)/);
        i ? t.addEventListener(i[1].toLowerCase(), r) : o === "p-bind" ? Ce(t, r) : (r = o === "class" ? [...new Set(n("class", r))].join(" ").trim() : o === "style" ? n("style", r).join(";").trim() : r, (t.$attrs = t.$attrs || {}) && (t.$attrs[o] = r), t.setAttribute(o, r));
      }
    });
  }
}
function Cs(t, e = {}, ...n) {
  {
    const o = document.createElement(t);
    return Ce(o, e), o.append(...n), o;
  }
}
function Ns(t, e) {
  return De(t) ? t.matches(e) ? t : t.querySelector(e) : null;
}
function Ts(t, e) {
  if (De(t)) {
    const n = t.getAttribute(e);
    return isNaN(n) ? n === "true" || n === "false" ? n === "true" : n : +n;
  }
}
function oo(t) {
  if (t) {
    let e = t.offsetHeight, n = getComputedStyle(t);
    return e -= parseFloat(n.paddingTop) + parseFloat(n.paddingBottom) + parseFloat(n.borderTopWidth) + parseFloat(n.borderBottomWidth), e;
  }
  return 0;
}
function js(t) {
  if (t) {
    let e = t.parentNode;
    return e && e instanceof ShadowRoot && e.host && (e = e.host), e;
  }
  return null;
}
function Vs(t) {
  if (t) {
    let e = t.getBoundingClientRect();
    return {
      top: e.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0),
      left: e.left + (window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0)
    };
  }
  return {
    top: "auto",
    left: "auto"
  };
}
function Is(t, e) {
  return t ? t.offsetHeight : 0;
}
function Rs(t) {
  return !!(t !== null && typeof t < "u" && t.nodeName && js(t));
}
function ro(t) {
  if (t) {
    let e = t.offsetWidth, n = getComputedStyle(t);
    return e -= parseFloat(n.paddingLeft) + parseFloat(n.paddingRight) + parseFloat(n.borderLeftWidth) + parseFloat(n.borderRightWidth), e;
  }
  return 0;
}
function Ds() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function As(t, e = "", n) {
  De(t) && n !== null && n !== void 0 && t.setAttribute(e, n);
}
var lt = {
  _loadedStyleNames: /* @__PURE__ */ new Set(),
  getLoadedStyleNames: function() {
    return this._loadedStyleNames;
  },
  isStyleNameLoaded: function(e) {
    return this._loadedStyleNames.has(e);
  },
  setLoadedStyleName: function(e) {
    this._loadedStyleNames.add(e);
  },
  deleteLoadedStyleName: function(e) {
    this._loadedStyleNames.delete(e);
  },
  clearLoadedStyleNames: function() {
    this._loadedStyleNames.clear();
  }
};
function Yt(t) {
  "@babel/helpers - typeof";
  return Yt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Yt(t);
}
function io(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    e && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(t, r).enumerable;
    })), n.push.apply(n, o);
  }
  return n;
}
function so(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? io(Object(n), !0).forEach(function(o) {
      Ls(t, o, n[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : io(Object(n)).forEach(function(o) {
      Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(n, o));
    });
  }
  return t;
}
function Ls(t, e, n) {
  return (e = Ms(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function Ms(t) {
  var e = zs(t, "string");
  return Yt(e) == "symbol" ? e : e + "";
}
function zs(t, e) {
  if (Yt(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(t, e || "default");
    if (Yt(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function Bs(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  us() ? zi(t) : e ? t() : Yo(t);
}
var Us = 0;
function Fs(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = be(!1), o = be(t), r = be(null), i = Ds() ? window.document : void 0, s = e.document, a = s === void 0 ? i : s, c = e.immediate, u = c === void 0 ? !0 : c, d = e.manual, l = d === void 0 ? !1 : d, p = e.name, f = p === void 0 ? "style_".concat(++Us) : p, h = e.id, g = h === void 0 ? void 0 : h, S = e.media, y = S === void 0 ? void 0 : S, b = e.nonce, m = b === void 0 ? void 0 : b, E = e.first, A = E === void 0 ? !1 : E, _ = e.onMounted, F = _ === void 0 ? void 0 : _, Z = e.onUpdated, ot = Z === void 0 ? void 0 : Z, bt = e.onLoad, gt = bt === void 0 ? void 0 : bt, Ot = e.props, Ae = Ot === void 0 ? {} : Ot, ne = function() {
  }, oe = function(Me) {
    var ze = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (a) {
      var Et = so(so({}, Ae), ze), jt = Et.name || f, jn = Et.id || g, Nr = Et.nonce || m;
      r.value = a.querySelector('style[data-primevue-style-id="'.concat(jt, '"]')) || a.getElementById(jn) || a.createElement("style"), r.value.isConnected || (o.value = Me || t, Ce(r.value, {
        type: "text/css",
        id: jn,
        media: y,
        nonce: Nr
      }), A ? a.head.prepend(r.value) : a.head.appendChild(r.value), As(r.value, "data-primevue-style-id", jt), Ce(r.value, Et), r.value.onload = function(Be) {
        return gt == null ? void 0 : gt(Be, {
          name: jt
        });
      }, F == null || F(jt)), !n.value && (ne = es(o, function(Be) {
        r.value.textContent = Be, ot == null || ot(jt);
      }, {
        immediate: !0
      }), n.value = !0);
    }
  }, Le = function() {
    !a || !n.value || (ne(), Rs(r.value) && a.head.removeChild(r.value), n.value = !1);
  };
  return u && !l && Bs(oe), {
    id: g,
    name: f,
    el: r,
    css: o,
    unload: Le,
    load: oe,
    isLoaded: mn(n)
  };
}
function Gt(t) {
  "@babel/helpers - typeof";
  return Gt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Gt(t);
}
function ao(t, e) {
  return Ys(t) || Ws(t, e) || Ks(t, e) || Hs();
}
function Hs() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ks(t, e) {
  if (t) {
    if (typeof t == "string") return co(t, e);
    var n = {}.toString.call(t).slice(8, -1);
    return n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set" ? Array.from(t) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? co(t, e) : void 0;
  }
}
function co(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, o = Array(e); n < e; n++) o[n] = t[n];
  return o;
}
function Ws(t, e) {
  var n = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (n != null) {
    var o, r, i, s, a = [], c = !0, u = !1;
    try {
      if (i = (n = n.call(t)).next, e !== 0) for (; !(c = (o = i.call(n)).done) && (a.push(o.value), a.length !== e); c = !0) ;
    } catch (d) {
      u = !0, r = d;
    } finally {
      try {
        if (!c && n.return != null && (s = n.return(), Object(s) !== s)) return;
      } finally {
        if (u) throw r;
      }
    }
    return a;
  }
}
function Ys(t) {
  if (Array.isArray(t)) return t;
}
function lo(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    e && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(t, r).enumerable;
    })), n.push.apply(n, o);
  }
  return n;
}
function Je(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? lo(Object(n), !0).forEach(function(o) {
      Gs(t, o, n[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : lo(Object(n)).forEach(function(o) {
      Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(n, o));
    });
  }
  return t;
}
function Gs(t, e, n) {
  return (e = qs(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function qs(t) {
  var e = Js(t, "string");
  return Gt(e) == "symbol" ? e : e + "";
}
function Js(t, e) {
  if (Gt(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(t, e || "default");
    if (Gt(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var Zs = function(e) {
  var n = e.dt;
  return `
* {
    box-sizing: border-box;
}

/* Non vue overlay animations */
.p-connected-overlay {
    opacity: 0;
    transform: scaleY(0.8);
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-visible {
    opacity: 1;
    transform: scaleY(1);
}

.p-connected-overlay-hidden {
    opacity: 0;
    transform: scaleY(1);
    transition: opacity 0.1s linear;
}

/* Vue based overlay animations */
.p-connected-overlay-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-connected-overlay-leave-to {
    opacity: 0;
}

.p-connected-overlay-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-leave-active {
    transition: opacity 0.1s linear;
}

/* Toggleable Content */
.p-toggleable-content-enter-from,
.p-toggleable-content-leave-to {
    max-height: 0;
}

.p-toggleable-content-enter-to,
.p-toggleable-content-leave-from {
    max-height: 1000px;
}

.p-toggleable-content-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
}

.p-toggleable-content-enter-active {
    overflow: hidden;
    transition: max-height 1s ease-in-out;
}

.p-disabled,
.p-disabled * {
    cursor: default;
    pointer-events: none;
    user-select: none;
}

.p-disabled,
.p-component:disabled {
    opacity: `.concat(n("disabled.opacity"), `;
}

.pi {
    font-size: `).concat(n("icon.size"), `;
}

.p-icon {
    width: `).concat(n("icon.size"), `;
    height: `).concat(n("icon.size"), `;
}

.p-overlay-mask {
    background: `).concat(n("mask.background"), `;
    color: `).concat(n("mask.color"), `;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-mask-enter {
    animation: p-overlay-mask-enter-animation `).concat(n("mask.transition.duration"), ` forwards;
}

.p-overlay-mask-leave {
    animation: p-overlay-mask-leave-animation `).concat(n("mask.transition.duration"), ` forwards;
}

@keyframes p-overlay-mask-enter-animation {
    from {
        background: transparent;
    }
    to {
        background: `).concat(n("mask.background"), `;
    }
}
@keyframes p-overlay-mask-leave-animation {
    from {
        background: `).concat(n("mask.background"), `;
    }
    to {
        background: transparent;
    }
}
`);
}, Xs = function(e) {
  var n = e.dt;
  return `
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: `.concat(n("scrollbar.width"), `;
}
`);
}, Qs = {}, ta = {}, V = {
  name: "base",
  css: Xs,
  theme: Zs,
  classes: Qs,
  inlineStyles: ta,
  load: function(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function(i) {
      return i;
    }, r = o(J(e, {
      dt: Ge
    }));
    return r ? Fs(Ut(r), Je({
      name: this.name
    }, n)) : {};
  },
  loadCSS: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return this.load(this.css, e);
  },
  loadTheme: function() {
    var e = this, n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return this.load(this.theme, n, function(o) {
      return k.transformCSS(n.name || e.name, o);
    });
  },
  getCommonTheme: function(e) {
    return k.getCommon(this.name, e);
  },
  getComponentTheme: function(e) {
    return k.getComponent(this.name, e);
  },
  getDirectiveTheme: function(e) {
    return k.getDirective(this.name, e);
  },
  getPresetTheme: function(e, n, o) {
    return k.getCustomPreset(this.name, e, n, o);
  },
  getLayerOrderThemeCSS: function() {
    return k.getLayerOrderCSS(this.name);
  },
  getStyleSheet: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.css) {
      var o = J(this.css, {
        dt: Ge
      }), r = Ut("".concat(o).concat(e)), i = Object.entries(n).reduce(function(s, a) {
        var c = ao(a, 2), u = c[0], d = c[1];
        return s.push("".concat(u, '="').concat(d, '"')) && s;
      }, []).join(" ");
      return '<style type="text/css" data-primevue-style-id="'.concat(this.name, '" ').concat(i, ">").concat(r, "</style>");
    }
    return "";
  },
  getCommonThemeStyleSheet: function(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return k.getCommonStyleSheet(this.name, e, n);
  },
  getThemeStyleSheet: function(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = [k.getStyleSheet(this.name, e, n)];
    if (this.theme) {
      var r = this.name === "base" ? "global-style" : "".concat(this.name, "-style"), i = J(this.theme, {
        dt: Ge
      }), s = Ut(k.transformCSS(r, i)), a = Object.entries(n).reduce(function(c, u) {
        var d = ao(u, 2), l = d[0], p = d[1];
        return c.push("".concat(l, '="').concat(p, '"')) && c;
      }, []).join(" ");
      o.push('<style type="text/css" data-primevue-style-id="'.concat(r, '" ').concat(a, ">").concat(s, "</style>"));
    }
    return o.join("");
  },
  extend: function(e) {
    return Je(Je({}, this), {}, {
      css: void 0,
      theme: void 0
    }, e);
  }
}, pe = {};
function ea(t = "pui_id_") {
  return pe.hasOwnProperty(t) || (pe[t] = 0), pe[t]++, `${t}${pe[t]}`;
}
function wr() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "pv_id_";
  return ea(t);
}
var uo = V.extend({
  name: "common"
});
function qt(t) {
  "@babel/helpers - typeof";
  return qt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, qt(t);
}
function na(t) {
  return xr(t) || oa(t) || Er(t) || Or();
}
function oa(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function fe(t, e) {
  return xr(t) || ra(t, e) || Er(t, e) || Or();
}
function Or() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Er(t, e) {
  if (t) {
    if (typeof t == "string") return po(t, e);
    var n = {}.toString.call(t).slice(8, -1);
    return n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set" ? Array.from(t) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? po(t, e) : void 0;
  }
}
function po(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, o = Array(e); n < e; n++) o[n] = t[n];
  return o;
}
function ra(t, e) {
  var n = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (n != null) {
    var o, r, i, s, a = [], c = !0, u = !1;
    try {
      if (i = (n = n.call(t)).next, e === 0) {
        if (Object(n) !== n) return;
        c = !1;
      } else for (; !(c = (o = i.call(n)).done) && (a.push(o.value), a.length !== e); c = !0) ;
    } catch (d) {
      u = !0, r = d;
    } finally {
      try {
        if (!c && n.return != null && (s = n.return(), Object(s) !== s)) return;
      } finally {
        if (u) throw r;
      }
    }
    return a;
  }
}
function xr(t) {
  if (Array.isArray(t)) return t;
}
function fo(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    e && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(t, r).enumerable;
    })), n.push.apply(n, o);
  }
  return n;
}
function w(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? fo(Object(n), !0).forEach(function(o) {
      ve(t, o, n[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : fo(Object(n)).forEach(function(o) {
      Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(n, o));
    });
  }
  return t;
}
function ve(t, e, n) {
  return (e = ia(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function ia(t) {
  var e = sa(t, "string");
  return qt(e) == "symbol" ? e : e + "";
}
function sa(t, e) {
  if (qt(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(t, e || "default");
    if (qt(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var Tn = {
  name: "BaseComponent",
  props: {
    pt: {
      type: Object,
      default: void 0
    },
    ptOptions: {
      type: Object,
      default: void 0
    },
    unstyled: {
      type: Boolean,
      default: void 0
    },
    dt: {
      type: Object,
      default: void 0
    }
  },
  inject: {
    $parentInstance: {
      default: void 0
    }
  },
  watch: {
    isUnstyled: {
      immediate: !0,
      handler: function(e) {
        e || (this._loadCoreStyles(), this._themeChangeListener(this._loadCoreStyles));
      }
    },
    dt: {
      immediate: !0,
      handler: function(e) {
        var n = this;
        e ? (this._loadScopedThemeStyles(e), this._themeChangeListener(function() {
          return n._loadScopedThemeStyles(e);
        })) : this._unloadScopedThemeStyles();
      }
    }
  },
  scopedStyleEl: void 0,
  rootEl: void 0,
  beforeCreate: function() {
    var e, n, o, r, i, s, a, c, u, d, l, p = (e = this.pt) === null || e === void 0 ? void 0 : e._usept, f = p ? (n = this.pt) === null || n === void 0 || (n = n.originalValue) === null || n === void 0 ? void 0 : n[this.$.type.name] : void 0, h = p ? (o = this.pt) === null || o === void 0 || (o = o.value) === null || o === void 0 ? void 0 : o[this.$.type.name] : this.pt;
    (r = h || f) === null || r === void 0 || (r = r.hooks) === null || r === void 0 || (i = r.onBeforeCreate) === null || i === void 0 || i.call(r);
    var g = (s = this.$primevueConfig) === null || s === void 0 || (s = s.pt) === null || s === void 0 ? void 0 : s._usept, S = g ? (a = this.$primevue) === null || a === void 0 || (a = a.config) === null || a === void 0 || (a = a.pt) === null || a === void 0 ? void 0 : a.originalValue : void 0, y = g ? (c = this.$primevue) === null || c === void 0 || (c = c.config) === null || c === void 0 || (c = c.pt) === null || c === void 0 ? void 0 : c.value : (u = this.$primevue) === null || u === void 0 || (u = u.config) === null || u === void 0 ? void 0 : u.pt;
    (d = y || S) === null || d === void 0 || (d = d[this.$.type.name]) === null || d === void 0 || (d = d.hooks) === null || d === void 0 || (l = d.onBeforeCreate) === null || l === void 0 || l.call(d);
  },
  created: function() {
    this._hook("onCreated");
  },
  beforeMount: function() {
    this._loadStyles(), this._hook("onBeforeMount");
  },
  mounted: function() {
    this.rootEl = Ns(this.$el, '[data-pc-name="'.concat(Y(this.$.type.name), '"]')), this.rootEl && (this.rootEl.setAttribute(this.$attrSelector, ""), this.rootEl.$pc = w({
      name: this.$.type.name
    }, this.$params)), this._hook("onMounted");
  },
  beforeUpdate: function() {
    this._hook("onBeforeUpdate");
  },
  updated: function() {
    this._hook("onUpdated");
  },
  beforeUnmount: function() {
    this._hook("onBeforeUnmount");
  },
  unmounted: function() {
    this._unloadScopedThemeStyles(), this._hook("onUnmounted");
  },
  methods: {
    _hook: function(e) {
      if (!this.$options.hostName) {
        var n = this._usePT(this._getPT(this.pt, this.$.type.name), this._getOptionValue, "hooks.".concat(e)), o = this._useDefaultPT(this._getOptionValue, "hooks.".concat(e));
        n == null || n(), o == null || o();
      }
    },
    _mergeProps: function(e) {
      for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
        o[r - 1] = arguments[r];
      return kn(e) ? e.apply(void 0, o) : L.apply(void 0, o);
    },
    _loadStyles: function() {
      var e = this, n = function() {
        lt.isStyleNameLoaded("base") || (V.loadCSS(e.$styleOptions), e._loadGlobalStyles(), lt.setLoadedStyleName("base")), e._loadThemeStyles();
      };
      n(), this._themeChangeListener(n);
    },
    _loadCoreStyles: function() {
      var e, n;
      !lt.isStyleNameLoaded((e = this.$style) === null || e === void 0 ? void 0 : e.name) && (n = this.$style) !== null && n !== void 0 && n.name && (uo.loadCSS(this.$styleOptions), this.$options.style && this.$style.loadCSS(this.$styleOptions), lt.setLoadedStyleName(this.$style.name));
    },
    _loadGlobalStyles: function() {
      var e = this._useGlobalPT(this._getOptionValue, "global.css", this.$params);
      j(e) && V.load(e, w({
        name: "global"
      }, this.$styleOptions));
    },
    _loadThemeStyles: function() {
      var e, n;
      if (!this.isUnstyled) {
        if (!k.isStyleNameLoaded("common")) {
          var o, r, i = ((o = this.$style) === null || o === void 0 || (r = o.getCommonTheme) === null || r === void 0 ? void 0 : r.call(o)) || {}, s = i.primitive, a = i.semantic;
          V.load(s == null ? void 0 : s.css, w({
            name: "primitive-variables"
          }, this.$styleOptions)), V.load(a == null ? void 0 : a.css, w({
            name: "semantic-variables"
          }, this.$styleOptions)), V.loadTheme(w({
            name: "global-style"
          }, this.$styleOptions)), k.setLoadedStyleName("common");
        }
        if (!k.isStyleNameLoaded((e = this.$style) === null || e === void 0 ? void 0 : e.name) && (n = this.$style) !== null && n !== void 0 && n.name) {
          var c, u, d, l, p = ((c = this.$style) === null || c === void 0 || (u = c.getComponentTheme) === null || u === void 0 ? void 0 : u.call(c)) || {}, f = p.css;
          (d = this.$style) === null || d === void 0 || d.load(f, w({
            name: "".concat(this.$style.name, "-variables")
          }, this.$styleOptions)), (l = this.$style) === null || l === void 0 || l.loadTheme(w({
            name: "".concat(this.$style.name, "-style")
          }, this.$styleOptions)), k.setLoadedStyleName(this.$style.name);
        }
        if (!k.isStyleNameLoaded("layer-order")) {
          var h, g, S = (h = this.$style) === null || h === void 0 || (g = h.getLayerOrderThemeCSS) === null || g === void 0 ? void 0 : g.call(h);
          V.load(S, w({
            name: "layer-order",
            first: !0
          }, this.$styleOptions)), k.setLoadedStyleName("layer-order");
        }
      }
    },
    _loadScopedThemeStyles: function(e) {
      var n, o, r, i = ((n = this.$style) === null || n === void 0 || (o = n.getPresetTheme) === null || o === void 0 ? void 0 : o.call(n, e, "[".concat(this.$attrSelector, "]"))) || {}, s = i.css, a = (r = this.$style) === null || r === void 0 ? void 0 : r.load(s, w({
        name: "".concat(this.$attrSelector, "-").concat(this.$style.name)
      }, this.$styleOptions));
      this.scopedStyleEl = a.el;
    },
    _unloadScopedThemeStyles: function() {
      var e;
      (e = this.scopedStyleEl) === null || e === void 0 || (e = e.value) === null || e === void 0 || e.remove();
    },
    _themeChangeListener: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function() {
      };
      lt.clearLoadedStyleNames(), X.on("theme:change", e);
    },
    _getHostInstance: function(e) {
      return e ? this.$options.hostName ? e.$.type.name === this.$options.hostName ? e : this._getHostInstance(e.$parentInstance) : e.$parentInstance : void 0;
    },
    _getPropValue: function(e) {
      var n;
      return this[e] || ((n = this._getHostInstance(this)) === null || n === void 0 ? void 0 : n[e]);
    },
    _getOptionValue: function(e) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return Cn(e, n, o);
    },
    _getPTValue: function() {
      var e, n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0, s = /./g.test(o) && !!r[o.split(".")[0]], a = this._getPropValue("ptOptions") || ((e = this.$primevueConfig) === null || e === void 0 ? void 0 : e.ptOptions) || {}, c = a.mergeSections, u = c === void 0 ? !0 : c, d = a.mergeProps, l = d === void 0 ? !1 : d, p = i ? s ? this._useGlobalPT(this._getPTClassValue, o, r) : this._useDefaultPT(this._getPTClassValue, o, r) : void 0, f = s ? void 0 : this._getPTSelf(n, this._getPTClassValue, o, w(w({}, r), {}, {
        global: p || {}
      })), h = this._getPTDatasets(o);
      return u || !u && f ? l ? this._mergeProps(l, p, f, h) : w(w(w({}, p), f), h) : w(w({}, f), h);
    },
    _getPTSelf: function() {
      for (var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
        o[r - 1] = arguments[r];
      return L(
        this._usePT.apply(this, [this._getPT(e, this.$name)].concat(o)),
        // Exp; <component :pt="{}"
        this._usePT.apply(this, [this.$_attrsPT].concat(o))
        // Exp; <component :pt:[passthrough_key]:[attribute]="{value}" or <component :pt:[passthrough_key]="() =>{value}"
      );
    },
    _getPTDatasets: function() {
      var e, n, o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", r = "data-pc-", i = o === "root" && j((e = this.pt) === null || e === void 0 ? void 0 : e["data-pc-section"]);
      return o !== "transition" && w(w({}, o === "root" && w(ve({}, "".concat(r, "name"), Y(i ? (n = this.pt) === null || n === void 0 ? void 0 : n["data-pc-section"] : this.$.type.name)), i && ve({}, "".concat(r, "extend"), Y(this.$.type.name)))), {}, ve({}, "".concat(r, "section"), Y(o)));
    },
    _getPTClassValue: function() {
      var e = this._getOptionValue.apply(this, arguments);
      return M(e) || Nn(e) ? {
        class: e
      } : e;
    },
    _getPT: function(e) {
      var n = this, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", r = arguments.length > 2 ? arguments[2] : void 0, i = function(a) {
        var c, u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, d = r ? r(a) : a, l = Y(o), p = Y(n.$name);
        return (c = u ? l !== p ? d == null ? void 0 : d[l] : void 0 : d == null ? void 0 : d[l]) !== null && c !== void 0 ? c : d;
      };
      return e != null && e.hasOwnProperty("_usept") ? {
        _usept: e._usept,
        originalValue: i(e.originalValue),
        value: i(e.value)
      } : i(e, !0);
    },
    _usePT: function(e, n, o, r) {
      var i = function(g) {
        return n(g, o, r);
      };
      if (e != null && e.hasOwnProperty("_usept")) {
        var s, a = e._usept || ((s = this.$primevueConfig) === null || s === void 0 ? void 0 : s.ptOptions) || {}, c = a.mergeSections, u = c === void 0 ? !0 : c, d = a.mergeProps, l = d === void 0 ? !1 : d, p = i(e.originalValue), f = i(e.value);
        return p === void 0 && f === void 0 ? void 0 : M(f) ? f : M(p) ? p : u || !u && f ? l ? this._mergeProps(l, p, f) : w(w({}, p), f) : f;
      }
      return i(e);
    },
    _useGlobalPT: function(e, n, o) {
      return this._usePT(this.globalPT, e, n, o);
    },
    _useDefaultPT: function(e, n, o) {
      return this._usePT(this.defaultPT, e, n, o);
    },
    ptm: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return this._getPTValue(this.pt, e, w(w({}, this.$params), n));
    },
    ptmi: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return L(this.$_attrsWithoutPT, this.ptm(e, n));
    },
    ptmo: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return this._getPTValue(e, n, w({
        instance: this
      }, o), !1);
    },
    cx: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return this.isUnstyled ? void 0 : this._getOptionValue(this.$style.classes, e, w(w({}, this.$params), n));
    },
    sx: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      if (n) {
        var r = this._getOptionValue(this.$style.inlineStyles, e, w(w({}, this.$params), o)), i = this._getOptionValue(uo.inlineStyles, e, w(w({}, this.$params), o));
        return [i, r];
      }
    }
  },
  computed: {
    globalPT: function() {
      var e, n = this;
      return this._getPT((e = this.$primevueConfig) === null || e === void 0 ? void 0 : e.pt, void 0, function(o) {
        return J(o, {
          instance: n
        });
      });
    },
    defaultPT: function() {
      var e, n = this;
      return this._getPT((e = this.$primevueConfig) === null || e === void 0 ? void 0 : e.pt, void 0, function(o) {
        return n._getOptionValue(o, n.$name, w({}, n.$params)) || J(o, w({}, n.$params));
      });
    },
    isUnstyled: function() {
      var e;
      return this.unstyled !== void 0 ? this.unstyled : (e = this.$primevueConfig) === null || e === void 0 ? void 0 : e.unstyled;
    },
    $theme: function() {
      var e;
      return (e = this.$primevueConfig) === null || e === void 0 ? void 0 : e.theme;
    },
    $style: function() {
      return w(w({
        classes: void 0,
        inlineStyles: void 0,
        load: function() {
        },
        loadCSS: function() {
        },
        loadTheme: function() {
        }
      }, (this._getHostInstance(this) || {}).$style), this.$options.style);
    },
    $styleOptions: function() {
      var e;
      return {
        nonce: (e = this.$primevueConfig) === null || e === void 0 || (e = e.csp) === null || e === void 0 ? void 0 : e.nonce
      };
    },
    $primevueConfig: function() {
      var e;
      return (e = this.$primevue) === null || e === void 0 ? void 0 : e.config;
    },
    $name: function() {
      return this.$options.hostName || this.$.type.name;
    },
    $params: function() {
      var e = this._getHostInstance(this) || this.$parent;
      return {
        instance: this,
        props: this.$props,
        state: this.$data,
        attrs: this.$attrs,
        parent: {
          instance: e,
          props: e == null ? void 0 : e.$props,
          state: e == null ? void 0 : e.$data,
          attrs: e == null ? void 0 : e.$attrs
        }
      };
    },
    $_attrsPT: function() {
      return Object.entries(this.$attrs || {}).filter(function(e) {
        var n = fe(e, 1), o = n[0];
        return o == null ? void 0 : o.startsWith("pt:");
      }).reduce(function(e, n) {
        var o = fe(n, 2), r = o[0], i = o[1], s = r.split(":"), a = na(s), c = a.slice(1);
        return c == null || c.reduce(function(u, d, l, p) {
          return !u[d] && (u[d] = l === p.length - 1 ? i : {}), u[d];
        }, e), e;
      }, {});
    },
    $_attrsWithoutPT: function() {
      return Object.entries(this.$attrs || {}).filter(function(e) {
        var n = fe(e, 1), o = n[0];
        return !(o != null && o.startsWith("pt:"));
      }).reduce(function(e, n) {
        var o = fe(n, 2), r = o[0], i = o[1];
        return e[r] = i, e;
      }, {});
    },
    $attrSelector: function() {
      return wr("pc");
    }
  }
}, aa = `
.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`, ca = V.extend({
  name: "baseicon",
  css: aa
});
function Jt(t) {
  "@babel/helpers - typeof";
  return Jt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Jt(t);
}
function ho(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    e && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(t, r).enumerable;
    })), n.push.apply(n, o);
  }
  return n;
}
function bo(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? ho(Object(n), !0).forEach(function(o) {
      la(t, o, n[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ho(Object(n)).forEach(function(o) {
      Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(n, o));
    });
  }
  return t;
}
function la(t, e, n) {
  return (e = ua(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function ua(t) {
  var e = da(t, "string");
  return Jt(e) == "symbol" ? e : e + "";
}
function da(t, e) {
  if (Jt(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(t, e || "default");
    if (Jt(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var pa = {
  name: "BaseIcon",
  extends: Tn,
  props: {
    label: {
      type: String,
      default: void 0
    },
    spin: {
      type: Boolean,
      default: !1
    }
  },
  style: ca,
  provide: function() {
    return {
      $pcIcon: this,
      $parentInstance: this
    };
  },
  methods: {
    pti: function() {
      var e = Tt(this.label);
      return bo(bo({}, !this.isUnstyled && {
        class: ["p-icon", {
          "p-icon-spin": this.spin
        }]
      }), {}, {
        role: e ? void 0 : "img",
        "aria-label": e ? void 0 : this.label,
        "aria-hidden": e
      });
    }
  }
}, Pr = {
  name: "SpinnerIcon",
  extends: pa
}, fa = /* @__PURE__ */ Ie("path", {
  d: "M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z",
  fill: "currentColor"
}, null, -1), ha = [fa];
function ba(t, e, n, o, r, i) {
  return Q(), xe("svg", L({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, t.pti()), ha, 16);
}
Pr.render = ba;
var ga = function(e) {
  var n = e.dt;
  return `
.p-badge {
    display: inline-flex;
    border-radius: `.concat(n("badge.border.radius"), `;
    align-items: center;
    justify-content: center;
    padding: `).concat(n("badge.padding"), `;
    background: `).concat(n("badge.primary.background"), `;
    color: `).concat(n("badge.primary.color"), `;
    font-size: `).concat(n("badge.font.size"), `;
    font-weight: `).concat(n("badge.font.weight"), `;
    min-width: `).concat(n("badge.min.width"), `;
    height: `).concat(n("badge.height"), `;
}

.p-badge-dot {
    width: `).concat(n("badge.dot.size"), `;
    min-width: `).concat(n("badge.dot.size"), `;
    height: `).concat(n("badge.dot.size"), `;
    border-radius: 50%;
    padding: 0;
}

.p-badge-circle {
    padding: 0;
    border-radius: 50%;
}

.p-badge-secondary {
    background: `).concat(n("badge.secondary.background"), `;
    color: `).concat(n("badge.secondary.color"), `;
}

.p-badge-success {
    background: `).concat(n("badge.success.background"), `;
    color: `).concat(n("badge.success.color"), `;
}

.p-badge-info {
    background: `).concat(n("badge.info.background"), `;
    color: `).concat(n("badge.info.color"), `;
}

.p-badge-warn {
    background: `).concat(n("badge.warn.background"), `;
    color: `).concat(n("badge.warn.color"), `;
}

.p-badge-danger {
    background: `).concat(n("badge.danger.background"), `;
    color: `).concat(n("badge.danger.color"), `;
}

.p-badge-contrast {
    background: `).concat(n("badge.contrast.background"), `;
    color: `).concat(n("badge.contrast.color"), `;
}

.p-badge-sm {
    font-size: `).concat(n("badge.sm.font.size"), `;
    min-width: `).concat(n("badge.sm.min.width"), `;
    height: `).concat(n("badge.sm.height"), `;
}

.p-badge-lg {
    font-size: `).concat(n("badge.lg.font.size"), `;
    min-width: `).concat(n("badge.lg.min.width"), `;
    height: `).concat(n("badge.lg.height"), `;
}

.p-badge-xl {
    font-size: `).concat(n("badge.xl.font.size"), `;
    min-width: `).concat(n("badge.xl.min.width"), `;
    height: `).concat(n("badge.xl.height"), `;
}
`);
}, ma = {
  root: function(e) {
    var n = e.props, o = e.instance;
    return ["p-badge p-component", {
      "p-badge-circle": j(n.value) && String(n.value).length === 1,
      "p-badge-dot": Tt(n.value) && !o.$slots.default,
      "p-badge-sm": n.size === "small",
      "p-badge-lg": n.size === "large",
      "p-badge-xl": n.size === "xlarge",
      "p-badge-info": n.severity === "info",
      "p-badge-success": n.severity === "success",
      "p-badge-warn": n.severity === "warn",
      "p-badge-danger": n.severity === "danger",
      "p-badge-secondary": n.severity === "secondary",
      "p-badge-contrast": n.severity === "contrast"
    }];
  }
}, va = V.extend({
  name: "badge",
  theme: ga,
  classes: ma
}), ya = {
  name: "BaseBadge",
  extends: Tn,
  props: {
    value: {
      type: [String, Number],
      default: null
    },
    severity: {
      type: String,
      default: null
    },
    size: {
      type: String,
      default: null
    }
  },
  style: va,
  provide: function() {
    return {
      $pcBadge: this,
      $parentInstance: this
    };
  }
}, kr = {
  name: "Badge",
  extends: ya,
  inheritAttrs: !1
};
function _a(t, e, n, o, r, i) {
  return Q(), xe("span", L({
    class: t.cx("root")
  }, t.ptmi("root")), [Dt(t.$slots, "default", {}, function() {
    return [dr(Te(t.value), 1)];
  })], 16);
}
kr.render = _a;
var go = vr();
function Zt(t) {
  "@babel/helpers - typeof";
  return Zt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Zt(t);
}
function mo(t, e) {
  return Oa(t) || wa(t, e) || $a(t, e) || Sa();
}
function Sa() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function $a(t, e) {
  if (t) {
    if (typeof t == "string") return vo(t, e);
    var n = {}.toString.call(t).slice(8, -1);
    return n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set" ? Array.from(t) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? vo(t, e) : void 0;
  }
}
function vo(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, o = Array(e); n < e; n++) o[n] = t[n];
  return o;
}
function wa(t, e) {
  var n = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (n != null) {
    var o, r, i, s, a = [], c = !0, u = !1;
    try {
      if (i = (n = n.call(t)).next, e !== 0) for (; !(c = (o = i.call(n)).done) && (a.push(o.value), a.length !== e); c = !0) ;
    } catch (d) {
      u = !0, r = d;
    } finally {
      try {
        if (!c && n.return != null && (s = n.return(), Object(s) !== s)) return;
      } finally {
        if (u) throw r;
      }
    }
    return a;
  }
}
function Oa(t) {
  if (Array.isArray(t)) return t;
}
function yo(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    e && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(t, r).enumerable;
    })), n.push.apply(n, o);
  }
  return n;
}
function O(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? yo(Object(n), !0).forEach(function(o) {
      cn(t, o, n[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : yo(Object(n)).forEach(function(o) {
      Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(n, o));
    });
  }
  return t;
}
function cn(t, e, n) {
  return (e = Ea(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function Ea(t) {
  var e = xa(t, "string");
  return Zt(e) == "symbol" ? e : e + "";
}
function xa(t, e) {
  if (Zt(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(t, e || "default");
    if (Zt(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var v = {
  _getMeta: function() {
    return [ft(arguments.length <= 0 ? void 0 : arguments[0]) || arguments.length <= 0 ? void 0 : arguments[0], J(ft(arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 0 ? void 0 : arguments[0] : arguments.length <= 1 ? void 0 : arguments[1])];
  },
  _getConfig: function(e, n) {
    var o, r, i;
    return (o = (e == null || (r = e.instance) === null || r === void 0 ? void 0 : r.$primevue) || (n == null || (i = n.ctx) === null || i === void 0 || (i = i.appContext) === null || i === void 0 || (i = i.config) === null || i === void 0 || (i = i.globalProperties) === null || i === void 0 ? void 0 : i.$primevue)) === null || o === void 0 ? void 0 : o.config;
  },
  _getOptionValue: Cn,
  _getPTValue: function() {
    var e, n, o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "", s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, c = function() {
      var b = v._getOptionValue.apply(v, arguments);
      return M(b) || Nn(b) ? {
        class: b
      } : b;
    }, u = ((e = o.binding) === null || e === void 0 || (e = e.value) === null || e === void 0 ? void 0 : e.ptOptions) || ((n = o.$primevueConfig) === null || n === void 0 ? void 0 : n.ptOptions) || {}, d = u.mergeSections, l = d === void 0 ? !0 : d, p = u.mergeProps, f = p === void 0 ? !1 : p, h = a ? v._useDefaultPT(o, o.defaultPT(), c, i, s) : void 0, g = v._usePT(o, v._getPT(r, o.$name), c, i, O(O({}, s), {}, {
      global: h || {}
    })), S = v._getPTDatasets(o, i);
    return l || !l && g ? f ? v._mergeProps(o, f, h, g, S) : O(O(O({}, h), g), S) : O(O({}, g), S);
  },
  _getPTDatasets: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", o = "data-pc-";
    return O(O({}, n === "root" && cn({}, "".concat(o, "name"), Y(e.$name))), {}, cn({}, "".concat(o, "section"), Y(n)));
  },
  _getPT: function(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", o = arguments.length > 2 ? arguments[2] : void 0, r = function(s) {
      var a, c = o ? o(s) : s, u = Y(n);
      return (a = c == null ? void 0 : c[u]) !== null && a !== void 0 ? a : c;
    };
    return e != null && e.hasOwnProperty("_usept") ? {
      _usept: e._usept,
      originalValue: r(e.originalValue),
      value: r(e.value)
    } : r(e);
  },
  _usePT: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0, o = arguments.length > 2 ? arguments[2] : void 0, r = arguments.length > 3 ? arguments[3] : void 0, i = arguments.length > 4 ? arguments[4] : void 0, s = function(S) {
      return o(S, r, i);
    };
    if (n != null && n.hasOwnProperty("_usept")) {
      var a, c = n._usept || ((a = e.$primevueConfig) === null || a === void 0 ? void 0 : a.ptOptions) || {}, u = c.mergeSections, d = u === void 0 ? !0 : u, l = c.mergeProps, p = l === void 0 ? !1 : l, f = s(n.originalValue), h = s(n.value);
      return f === void 0 && h === void 0 ? void 0 : M(h) ? h : M(f) ? f : d || !d && h ? p ? v._mergeProps(e, p, f, h) : O(O({}, f), h) : h;
    }
    return s(n);
  },
  _useDefaultPT: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = arguments.length > 2 ? arguments[2] : void 0, r = arguments.length > 3 ? arguments[3] : void 0, i = arguments.length > 4 ? arguments[4] : void 0;
    return v._usePT(e, n, o, r, i);
  },
  _loadStyles: function(e, n, o) {
    var r, i = v._getConfig(n, o), s = {
      nonce: i == null || (r = i.csp) === null || r === void 0 ? void 0 : r.nonce
    };
    v._loadCoreStyles(e.$instance, s), v._loadThemeStyles(e.$instance, s), v._loadScopedThemeStyles(e.$instance, s), v._themeChangeListener(function() {
      return v._loadThemeStyles(e.$instance, s);
    });
  },
  _loadCoreStyles: function() {
    var e, n, o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 ? arguments[1] : void 0;
    if (!lt.isStyleNameLoaded((e = o.$style) === null || e === void 0 ? void 0 : e.name) && (n = o.$style) !== null && n !== void 0 && n.name) {
      var i;
      V.loadCSS(r), o.isUnstyled() && ((i = o.$style) === null || i === void 0 || i.loadCSS(r)), lt.setLoadedStyleName(o.$style.name);
    }
  },
  _loadThemeStyles: function() {
    var e, n, o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 ? arguments[1] : void 0;
    if (!(o != null && o.isUnstyled())) {
      if (!k.isStyleNameLoaded("common")) {
        var i, s, a = ((i = o.$style) === null || i === void 0 || (s = i.getCommonTheme) === null || s === void 0 ? void 0 : s.call(i)) || {}, c = a.primitive, u = a.semantic;
        V.load(c == null ? void 0 : c.css, O({
          name: "primitive-variables"
        }, r)), V.load(u == null ? void 0 : u.css, O({
          name: "semantic-variables"
        }, r)), V.loadTheme(O({
          name: "global-style"
        }, r)), k.setLoadedStyleName("common");
      }
      if (!k.isStyleNameLoaded((e = o.$style) === null || e === void 0 ? void 0 : e.name) && (n = o.$style) !== null && n !== void 0 && n.name) {
        var d, l, p, f, h = ((d = o.$style) === null || d === void 0 || (l = d.getDirectiveTheme) === null || l === void 0 ? void 0 : l.call(d)) || {}, g = h.css;
        (p = o.$style) === null || p === void 0 || p.load(g, O({
          name: "".concat(o.$style.name, "-variables")
        }, r)), (f = o.$style) === null || f === void 0 || f.loadTheme(O({
          name: "".concat(o.$style.name, "-style")
        }, r)), k.setLoadedStyleName(o.$style.name);
      }
      if (!k.isStyleNameLoaded("layer-order")) {
        var S, y, b = (S = o.$style) === null || S === void 0 || (y = S.getLayerOrderThemeCSS) === null || y === void 0 ? void 0 : y.call(S);
        V.load(b, O({
          name: "layer-order",
          first: !0
        }, r)), k.setLoadedStyleName("layer-order");
      }
    }
  },
  _loadScopedThemeStyles: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0, o = e.preset();
    if (o && e.$attrSelector) {
      var r, i, s, a = ((r = e.$style) === null || r === void 0 || (i = r.getPresetTheme) === null || i === void 0 ? void 0 : i.call(r, o, "[".concat(e.$attrSelector, "]"))) || {}, c = a.css, u = (s = e.$style) === null || s === void 0 ? void 0 : s.load(c, O({
        name: "".concat(e.$attrSelector, "-").concat(e.$style.name)
      }, n));
      e.scopedStyleEl = u.el;
    }
  },
  _themeChangeListener: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function() {
    };
    lt.clearLoadedStyleNames(), X.on("theme:change", e);
  },
  _hook: function(e, n, o, r, i, s) {
    var a, c, u = "on".concat(gs(n)), d = v._getConfig(r, i), l = o == null ? void 0 : o.$instance, p = v._usePT(l, v._getPT(r == null || (a = r.value) === null || a === void 0 ? void 0 : a.pt, e), v._getOptionValue, "hooks.".concat(u)), f = v._useDefaultPT(l, d == null || (c = d.pt) === null || c === void 0 || (c = c.directives) === null || c === void 0 ? void 0 : c[e], v._getOptionValue, "hooks.".concat(u)), h = {
      el: o,
      binding: r,
      vnode: i,
      prevVnode: s
    };
    p == null || p(l, h), f == null || f(l, h);
  },
  _mergeProps: function() {
    for (var e = arguments.length > 1 ? arguments[1] : void 0, n = arguments.length, o = new Array(n > 2 ? n - 2 : 0), r = 2; r < n; r++)
      o[r - 2] = arguments[r];
    return kn(e) ? e.apply(void 0, o) : L.apply(void 0, o);
  },
  _extend: function(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = function(s, a, c, u, d) {
      var l, p, f;
      a._$instances = a._$instances || {};
      var h = v._getConfig(c, u), g = a._$instances[e] || {}, S = Tt(g) ? O(O({}, n), n == null ? void 0 : n.methods) : {};
      a._$instances[e] = O(O({}, g), {}, {
        /* new instance variables to pass in directive methods */
        $name: e,
        $host: a,
        $binding: c,
        $modifiers: c == null ? void 0 : c.modifiers,
        $value: c == null ? void 0 : c.value,
        $el: g.$el || a || void 0,
        $style: O({
          classes: void 0,
          inlineStyles: void 0,
          load: function() {
          },
          loadCSS: function() {
          },
          loadTheme: function() {
          }
        }, n == null ? void 0 : n.style),
        $primevueConfig: h,
        $attrSelector: a.$attrSelector,
        /* computed instance variables */
        defaultPT: function() {
          return v._getPT(h == null ? void 0 : h.pt, void 0, function(b) {
            var m;
            return b == null || (m = b.directives) === null || m === void 0 ? void 0 : m[e];
          });
        },
        isUnstyled: function() {
          var b, m;
          return ((b = a.$instance) === null || b === void 0 || (b = b.$binding) === null || b === void 0 || (b = b.value) === null || b === void 0 ? void 0 : b.unstyled) !== void 0 ? (m = a.$instance) === null || m === void 0 || (m = m.$binding) === null || m === void 0 || (m = m.value) === null || m === void 0 ? void 0 : m.unstyled : h == null ? void 0 : h.unstyled;
        },
        theme: function() {
          var b;
          return (b = a.$instance) === null || b === void 0 || (b = b.$primevueConfig) === null || b === void 0 ? void 0 : b.theme;
        },
        preset: function() {
          var b;
          return (b = a.$instance) === null || b === void 0 || (b = b.$binding) === null || b === void 0 || (b = b.value) === null || b === void 0 ? void 0 : b.dt;
        },
        /* instance's methods */
        ptm: function() {
          var b, m = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", E = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          return v._getPTValue(a.$instance, (b = a.$instance) === null || b === void 0 || (b = b.$binding) === null || b === void 0 || (b = b.value) === null || b === void 0 ? void 0 : b.pt, m, O({}, E));
        },
        ptmo: function() {
          var b = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", E = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return v._getPTValue(a.$instance, b, m, E, !1);
        },
        cx: function() {
          var b, m, E = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", A = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          return (b = a.$instance) !== null && b !== void 0 && b.isUnstyled() ? void 0 : v._getOptionValue((m = a.$instance) === null || m === void 0 || (m = m.$style) === null || m === void 0 ? void 0 : m.classes, E, O({}, A));
        },
        sx: function() {
          var b, m = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", E = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, A = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return E ? v._getOptionValue((b = a.$instance) === null || b === void 0 || (b = b.$style) === null || b === void 0 ? void 0 : b.inlineStyles, m, O({}, A)) : void 0;
        }
      }, S), a.$instance = a._$instances[e], (l = (p = a.$instance)[s]) === null || l === void 0 || l.call(p, a, c, u, d), a["$".concat(e)] = a.$instance, v._hook(e, s, a, c, u, d), a.$pd || (a.$pd = {}), a.$pd[e] = O(O({}, (f = a.$pd) === null || f === void 0 ? void 0 : f[e]), {}, {
        name: e,
        instance: a.$instance
      });
    }, r = function(s) {
      var a, c, u, d, l, p = (a = s.$instance) === null || a === void 0 ? void 0 : a.watch;
      p == null || (c = p.config) === null || c === void 0 || c.call(s.$instance, (u = s.$instance) === null || u === void 0 ? void 0 : u.$primevueConfig), go.on("config:change", function(f) {
        var h, g = f.newValue, S = f.oldValue;
        return p == null || (h = p.config) === null || h === void 0 ? void 0 : h.call(s.$instance, g, S);
      }), p == null || (d = p["config.ripple"]) === null || d === void 0 || d.call(s.$instance, (l = s.$instance) === null || l === void 0 || (l = l.$primevueConfig) === null || l === void 0 ? void 0 : l.ripple), go.on("config:ripple:change", function(f) {
        var h, g = f.newValue, S = f.oldValue;
        return p == null || (h = p["config.ripple"]) === null || h === void 0 ? void 0 : h.call(s.$instance, g, S);
      });
    };
    return {
      created: function(s, a, c, u) {
        o("created", s, a, c, u);
      },
      beforeMount: function(s, a, c, u) {
        s.$attrSelector = wr("pd"), v._loadStyles(s, a, c), o("beforeMount", s, a, c, u), r(s);
      },
      mounted: function(s, a, c, u) {
        v._loadStyles(s, a, c), o("mounted", s, a, c, u);
      },
      beforeUpdate: function(s, a, c, u) {
        o("beforeUpdate", s, a, c, u);
      },
      updated: function(s, a, c, u) {
        v._loadStyles(s, a, c), o("updated", s, a, c, u);
      },
      beforeUnmount: function(s, a, c, u) {
        o("beforeUnmount", s, a, c, u);
      },
      unmounted: function(s, a, c, u) {
        var d;
        (d = s.$instance) === null || d === void 0 || (d = d.scopedStyleEl) === null || d === void 0 || (d = d.value) === null || d === void 0 || d.remove(), o("unmounted", s, a, c, u);
      }
    };
  },
  extend: function() {
    var e = v._getMeta.apply(v, arguments), n = mo(e, 2), o = n[0], r = n[1];
    return O({
      extend: function() {
        var s = v._getMeta.apply(v, arguments), a = mo(s, 2), c = a[0], u = a[1];
        return v.extend(c, O(O(O({}, r), r == null ? void 0 : r.methods), u));
      }
    }, v._extend(o, r));
  }
}, Pa = function(e) {
  var n = e.dt;
  return `
.p-ink {
    display: block;
    position: absolute;
    background: `.concat(n("ripple.background"), `;
    border-radius: 100%;
    transform: scale(0);
    pointer-events: none;
}

.p-ink-active {
    animation: ripple 0.4s linear;
}

@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}
`);
}, ka = {
  root: "p-ink"
}, Ca = V.extend({
  name: "ripple-directive",
  theme: Pa,
  classes: ka
}), Na = v.extend({
  style: Ca
});
function Xt(t) {
  "@babel/helpers - typeof";
  return Xt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Xt(t);
}
function Ta(t) {
  return Ra(t) || Ia(t) || Va(t) || ja();
}
function ja() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Va(t, e) {
  if (t) {
    if (typeof t == "string") return ln(t, e);
    var n = {}.toString.call(t).slice(8, -1);
    return n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set" ? Array.from(t) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ln(t, e) : void 0;
  }
}
function Ia(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function Ra(t) {
  if (Array.isArray(t)) return ln(t);
}
function ln(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, o = Array(e); n < e; n++) o[n] = t[n];
  return o;
}
function _o(t, e, n) {
  return (e = Da(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function Da(t) {
  var e = Aa(t, "string");
  return Xt(e) == "symbol" ? e : e + "";
}
function Aa(t, e) {
  if (Xt(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(t, e || "default");
    if (Xt(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var La = Na.extend("ripple", {
  watch: {
    "config.ripple": function(e) {
      e ? (this.createRipple(this.$host), this.bindEvents(this.$host), this.$host.setAttribute("data-pd-ripple", !0), this.$host.style.overflow = "hidden", this.$host.style.position = "relative") : (this.remove(this.$host), this.$host.removeAttribute("data-pd-ripple"));
    }
  },
  unmounted: function(e) {
    this.remove(e);
  },
  timeout: void 0,
  methods: {
    bindEvents: function(e) {
      e.addEventListener("mousedown", this.onMouseDown.bind(this));
    },
    unbindEvents: function(e) {
      e.removeEventListener("mousedown", this.onMouseDown.bind(this));
    },
    createRipple: function(e) {
      var n = Cs("span", _o(_o({
        role: "presentation",
        "aria-hidden": !0,
        "data-p-ink": !0,
        "data-p-ink-active": !1,
        class: !this.isUnstyled() && this.cx("root"),
        onAnimationEnd: this.onAnimationEnd.bind(this)
      }, this.$attrSelector, ""), "p-bind", this.ptm("root")));
      e.appendChild(n), this.$el = n;
    },
    remove: function(e) {
      var n = this.getInk(e);
      n && (this.$host.style.overflow = "", this.$host.style.position = "", this.unbindEvents(e), n.removeEventListener("animationend", this.onAnimationEnd), n.remove());
    },
    onMouseDown: function(e) {
      var n = this, o = e.currentTarget, r = this.getInk(o);
      if (!(!r || getComputedStyle(r, null).display === "none")) {
        if (!this.isUnstyled() && qe(r, "p-ink-active"), r.setAttribute("data-p-ink-active", "false"), !oo(r) && !ro(r)) {
          var i = Math.max(ks(o), Is(o));
          r.style.height = i + "px", r.style.width = i + "px";
        }
        var s = Vs(o), a = e.pageX - s.left + document.body.scrollTop - ro(r) / 2, c = e.pageY - s.top + document.body.scrollLeft - oo(r) / 2;
        r.style.top = c + "px", r.style.left = a + "px", !this.isUnstyled() && Ps(r, "p-ink-active"), r.setAttribute("data-p-ink-active", "true"), this.timeout = setTimeout(function() {
          r && (!n.isUnstyled() && qe(r, "p-ink-active"), r.setAttribute("data-p-ink-active", "false"));
        }, 401);
      }
    },
    onAnimationEnd: function(e) {
      this.timeout && clearTimeout(this.timeout), !this.isUnstyled() && qe(e.currentTarget, "p-ink-active"), e.currentTarget.setAttribute("data-p-ink-active", "false");
    },
    getInk: function(e) {
      return e && e.children ? Ta(e.children).find(function(n) {
        return Ts(n, "data-pc-name") === "ripple";
      }) : void 0;
    }
  }
});
function Qt(t) {
  "@babel/helpers - typeof";
  return Qt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Qt(t);
}
function q(t, e, n) {
  return (e = Ma(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function Ma(t) {
  var e = za(t, "string");
  return Qt(e) == "symbol" ? e : e + "";
}
function za(t, e) {
  if (Qt(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(t, e || "default");
    if (Qt(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var Ba = function(e) {
  var n = e.dt;
  return `
.p-button {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: `.concat(n("button.primary.color"), `;
    background: `).concat(n("button.primary.background"), `;
    border: 1px solid `).concat(n("button.primary.border.color"), `;
    padding: `).concat(n("button.padding.y"), " ").concat(n("button.padding.x"), `;
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background `).concat(n("button.transition.duration"), ", color ").concat(n("button.transition.duration"), ", border-color ").concat(n("button.transition.duration"), `,
            outline-color `).concat(n("button.transition.duration"), ", box-shadow ").concat(n("button.transition.duration"), `;
    border-radius: `).concat(n("button.border.radius"), `;
    outline-color: transparent;
    gap: `).concat(n("button.gap"), `;
}

.p-button:disabled {
    cursor: default;
}

.p-button-icon-right {
    order: 1;
}

.p-button-icon-bottom {
    order: 2;
}

.p-button-icon-only {
    width: `).concat(n("button.icon.only.width"), `;
    padding-left: 0;
    padding-right: 0;
    gap: 0;
}

.p-button-icon-only.p-button-rounded {
    border-radius: 50%;
    height: `).concat(n("button.icon.only.width"), `;
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
}

.p-button-sm {
    font-size: `).concat(n("button.sm.font.size"), `;
    padding: `).concat(n("button.sm.padding.y"), " ").concat(n("button.sm.padding.x"), `;
}

.p-button-sm .p-button-icon {
    font-size: `).concat(n("button.sm.font.size"), `;
}

.p-button-lg {
    font-size: `).concat(n("button.lg.font.size"), `;
    padding: `).concat(n("button.lg.padding.y"), " ").concat(n("button.lg.padding.x"), `;
}

.p-button-lg .p-button-icon {
    font-size: `).concat(n("button.lg.font.size"), `;
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-label {
    font-weight: `).concat(n("button.label.font.weight"), `;
}

.p-button-fluid {
    width: 100%;
}

.p-button-fluid.p-button-icon-only {
    width: `).concat(n("button.icon.only.width"), `;
}

.p-button:not(:disabled):hover {
    background: `).concat(n("button.primary.hover.background"), `;
    border: 1px solid `).concat(n("button.primary.hover.border.color"), `;
    color: `).concat(n("button.primary.hover.color"), `;
}

.p-button:not(:disabled):active {
    background: `).concat(n("button.primary.active.background"), `;
    border: 1px solid `).concat(n("button.primary.active.border.color"), `;
    color: `).concat(n("button.primary.active.color"), `;
}

.p-button:focus-visible {
    box-shadow: `).concat(n("button.primary.focus.ring.shadow"), `;
    outline: `).concat(n("button.focus.ring.width"), " ").concat(n("button.focus.ring.style"), " ").concat(n("button.primary.focus.ring.color"), `;
    outline-offset: `).concat(n("button.focus.ring.offset"), `;
}

.p-button .p-badge {
    min-width: `).concat(n("button.badge.size"), `;
    height: `).concat(n("button.badge.size"), `;
    line-height: `).concat(n("button.badge.size"), `;
}

.p-button-raised {
    box-shadow: `).concat(n("button.raised.shadow"), `;
}

.p-button-rounded {
    border-radius: `).concat(n("button.rounded.border.radius"), `;
}

.p-button-secondary {
    background: `).concat(n("button.secondary.background"), `;
    border: 1px solid `).concat(n("button.secondary.border.color"), `;
    color: `).concat(n("button.secondary.color"), `;
}

.p-button-secondary:not(:disabled):hover {
    background: `).concat(n("button.secondary.hover.background"), `;
    border: 1px solid `).concat(n("button.secondary.hover.border.color"), `;
    color: `).concat(n("button.secondary.hover.color"), `;
}

.p-button-secondary:not(:disabled):active {
    background: `).concat(n("button.secondary.active.background"), `;
    border: 1px solid `).concat(n("button.secondary.active.border.color"), `;
    color: `).concat(n("button.secondary.active.color"), `;
}

.p-button-secondary:focus-visible {
    outline-color: `).concat(n("button.secondary.focus.ring.color"), `;
    box-shadow: `).concat(n("button.secondary.focus.ring.shadow"), `;
}

.p-button-success {
    background: `).concat(n("button.success.background"), `;
    border: 1px solid `).concat(n("button.success.border.color"), `;
    color: `).concat(n("button.success.color"), `;
}

.p-button-success:not(:disabled):hover {
    background: `).concat(n("button.success.hover.background"), `;
    border: 1px solid `).concat(n("button.success.hover.border.color"), `;
    color: `).concat(n("button.success.hover.color"), `;
}

.p-button-success:not(:disabled):active {
    background: `).concat(n("button.success.active.background"), `;
    border: 1px solid `).concat(n("button.success.active.border.color"), `;
    color: `).concat(n("button.success.active.color"), `;
}

.p-button-success:focus-visible {
    outline-color: `).concat(n("button.success.focus.ring.color"), `;
    box-shadow: `).concat(n("button.success.focus.ring.shadow"), `;
}

.p-button-info {
    background: `).concat(n("button.info.background"), `;
    border: 1px solid `).concat(n("button.info.border.color"), `;
    color: `).concat(n("button.info.color"), `;
}

.p-button-info:not(:disabled):hover {
    background: `).concat(n("button.info.hover.background"), `;
    border: 1px solid `).concat(n("button.info.hover.border.color"), `;
    color: `).concat(n("button.info.hover.color"), `;
}

.p-button-info:not(:disabled):active {
    background: `).concat(n("button.info.active.background"), `;
    border: 1px solid `).concat(n("button.info.active.border.color"), `;
    color: `).concat(n("button.info.active.color"), `;
}

.p-button-info:focus-visible {
    outline-color: `).concat(n("button.info.focus.ring.color"), `;
    box-shadow: `).concat(n("button.info.focus.ring.shadow"), `;
}

.p-button-warn {
    background: `).concat(n("button.warn.background"), `;
    border: 1px solid `).concat(n("button.warn.border.color"), `;
    color: `).concat(n("button.warn.color"), `;
}

.p-button-warn:not(:disabled):hover {
    background: `).concat(n("button.warn.hover.background"), `;
    border: 1px solid `).concat(n("button.warn.hover.border.color"), `;
    color: `).concat(n("button.warn.hover.color"), `;
}

.p-button-warn:not(:disabled):active {
    background: `).concat(n("button.warn.active.background"), `;
    border: 1px solid `).concat(n("button.warn.active.border.color"), `;
    color: `).concat(n("button.warn.active.color"), `;
}

.p-button-warn:focus-visible {
    outline-color: `).concat(n("button.warn.focus.ring.color"), `;
    box-shadow: `).concat(n("button.warn.focus.ring.shadow"), `;
}

.p-button-help {
    background: `).concat(n("button.help.background"), `;
    border: 1px solid `).concat(n("button.help.border.color"), `;
    color: `).concat(n("button.help.color"), `;
}

.p-button-help:not(:disabled):hover {
    background: `).concat(n("button.help.hover.background"), `;
    border: 1px solid `).concat(n("button.help.hover.border.color"), `;
    color: `).concat(n("button.help.hover.color"), `;
}

.p-button-help:not(:disabled):active {
    background: `).concat(n("button.help.active.background"), `;
    border: 1px solid `).concat(n("button.help.active.border.color"), `;
    color: `).concat(n("button.help.active.color"), `;
}

.p-button-help:focus-visible {
    outline-color: `).concat(n("button.help.focus.ring.color"), `;
    box-shadow: `).concat(n("button.help.focus.ring.shadow"), `;
}

.p-button-danger {
    background: `).concat(n("button.danger.background"), `;
    border: 1px solid `).concat(n("button.danger.border.color"), `;
    color: `).concat(n("button.danger.color"), `;
}

.p-button-danger:not(:disabled):hover {
    background: `).concat(n("button.danger.hover.background"), `;
    border: 1px solid `).concat(n("button.danger.hover.border.color"), `;
    color: `).concat(n("button.danger.hover.color"), `;
}

.p-button-danger:not(:disabled):active {
    background: `).concat(n("button.danger.active.background"), `;
    border: 1px solid `).concat(n("button.danger.active.border.color"), `;
    color: `).concat(n("button.danger.active.color"), `;
}

.p-button-danger:focus-visible {
    outline-color: `).concat(n("button.danger.focus.ring.color"), `;
    box-shadow: `).concat(n("button.danger.focus.ring.shadow"), `;
}

.p-button-contrast {
    background: `).concat(n("button.contrast.background"), `;
    border: 1px solid `).concat(n("button.contrast.border.color"), `;
    color: `).concat(n("button.contrast.color"), `;
}

.p-button-contrast:not(:disabled):hover {
    background: `).concat(n("button.contrast.hover.background"), `;
    border: 1px solid `).concat(n("button.contrast.hover.border.color"), `;
    color: `).concat(n("button.contrast.hover.color"), `;
}

.p-button-contrast:not(:disabled):active {
    background: `).concat(n("button.contrast.active.background"), `;
    border: 1px solid `).concat(n("button.contrast.active.border.color"), `;
    color: `).concat(n("button.contrast.active.color"), `;
}

.p-button-contrast:focus-visible {
    outline-color: `).concat(n("button.contrast.focus.ring.color"), `;
    box-shadow: `).concat(n("button.contrast.focus.ring.shadow"), `;
}

.p-button-outlined {
    background: transparent;
    border-color: `).concat(n("button.outlined.primary.border.color"), `;
    color: `).concat(n("button.outlined.primary.color"), `;
}

.p-button-outlined:not(:disabled):hover {
    background: `).concat(n("button.outlined.primary.hover.background"), `;
    border-color: `).concat(n("button.outlined.primary.border.color"), `;
    color: `).concat(n("button.outlined.primary.color"), `;
}

.p-button-outlined:not(:disabled):active {
    background: `).concat(n("button.outlined.primary.active.background"), `;
    border-color: `).concat(n("button.outlined.primary.border.color"), `;
    color: `).concat(n("button.outlined.primary.color"), `;
}

.p-button-outlined.p-button-secondary {
    border-color: `).concat(n("button.outlined.secondary.border.color"), `;
    color: `).concat(n("button.outlined.secondary.color"), `;
}

.p-button-outlined.p-button-secondary:not(:disabled):hover {
    background: `).concat(n("button.outlined.secondary.hover.background"), `;
    border-color: `).concat(n("button.outlined.secondary.border.color"), `;
    color: `).concat(n("button.outlined.secondary.color"), `;
}

.p-button-outlined.p-button-secondary:not(:disabled):active {
    background: `).concat(n("button.outlined.secondary.active.background"), `;
    border-color: `).concat(n("button.outlined.secondary.border.color"), `;
    color: `).concat(n("button.outlined.secondary.color"), `;
}

.p-button-outlined.p-button-success {
    border-color: `).concat(n("button.outlined.success.border.color"), `;
    color: `).concat(n("button.outlined.success.color"), `;
}

.p-button-outlined.p-button-success:not(:disabled):hover {
    background: `).concat(n("button.outlined.success.hover.background"), `;
    border-color: `).concat(n("button.outlined.success.border.color"), `;
    color: `).concat(n("button.outlined.success.color"), `;
}

.p-button-outlined.p-button-success:not(:disabled):active {
    background: `).concat(n("button.outlined.success.active.background"), `;
    border-color: `).concat(n("button.outlined.success.border.color"), `;
    color: `).concat(n("button.outlined.success.color"), `;
}

.p-button-outlined.p-button-info {
    border-color: `).concat(n("button.outlined.info.border.color"), `;
    color: `).concat(n("button.outlined.info.color"), `;
}

.p-button-outlined.p-button-info:not(:disabled):hover {
    background: `).concat(n("button.outlined.info.hover.background"), `;
    border-color: `).concat(n("button.outlined.info.border.color"), `;
    color: `).concat(n("button.outlined.info.color"), `;
}

.p-button-outlined.p-button-info:not(:disabled):active {
    background: `).concat(n("button.outlined.info.active.background"), `;
    border-color: `).concat(n("button.outlined.info.border.color"), `;
    color: `).concat(n("button.outlined.info.color"), `;
}

.p-button-outlined.p-button-warn {
    border-color: `).concat(n("button.outlined.warn.border.color"), `;
    color: `).concat(n("button.outlined.warn.color"), `;
}

.p-button-outlined.p-button-warn:not(:disabled):hover {
    background: `).concat(n("button.outlined.warn.hover.background"), `;
    border-color: `).concat(n("button.outlined.warn.border.color"), `;
    color: `).concat(n("button.outlined.warn.color"), `;
}

.p-button-outlined.p-button-warn:not(:disabled):active {
    background: `).concat(n("button.outlined.warn.active.background"), `;
    border-color: `).concat(n("button.outlined.warn.border.color"), `;
    color: `).concat(n("button.outlined.warn.color"), `;
}

.p-button-outlined.p-button-help {
    border-color: `).concat(n("button.outlined.help.border.color"), `;
    color: `).concat(n("button.outlined.help.color"), `;
}

.p-button-outlined.p-button-help:not(:disabled):hover {
    background: `).concat(n("button.outlined.help.hover.background"), `;
    border-color: `).concat(n("button.outlined.help.border.color"), `;
    color: `).concat(n("button.outlined.help.color"), `;
}

.p-button-outlined.p-button-help:not(:disabled):active {
    background: `).concat(n("button.outlined.help.active.background"), `;
    border-color: `).concat(n("button.outlined.help.border.color"), `;
    color: `).concat(n("button.outlined.help.color"), `;
}

.p-button-outlined.p-button-danger {
    border-color: `).concat(n("button.outlined.danger.border.color"), `;
    color: `).concat(n("button.outlined.danger.color"), `;
}

.p-button-outlined.p-button-danger:not(:disabled):hover {
    background: `).concat(n("button.outlined.danger.hover.background"), `;
    border-color: `).concat(n("button.outlined.danger.border.color"), `;
    color: `).concat(n("button.outlined.danger.color"), `;
}

.p-button-outlined.p-button-danger:not(:disabled):active {
    background: `).concat(n("button.outlined.danger.active.background"), `;
    border-color: `).concat(n("button.outlined.danger.border.color"), `;
    color: `).concat(n("button.outlined.danger.color"), `;
}

.p-button-outlined.p-button-contrast {
    border-color: `).concat(n("button.outlined.contrast.border.color"), `;
    color: `).concat(n("button.outlined.contrast.color"), `;
}

.p-button-outlined.p-button-contrast:not(:disabled):hover {
    background: `).concat(n("button.outlined.contrast.hover.background"), `;
    border-color: `).concat(n("button.outlined.contrast.border.color"), `;
    color: `).concat(n("button.outlined.contrast.color"), `;
}

.p-button-outlined.p-button-contrast:not(:disabled):active {
    background: `).concat(n("button.outlined.contrast.active.background"), `;
    border-color: `).concat(n("button.outlined.contrast.border.color"), `;
    color: `).concat(n("button.outlined.contrast.color"), `;
}

.p-button-outlined.p-button-plain {
    border-color: `).concat(n("button.outlined.plain.border.color"), `;
    color: `).concat(n("button.outlined.plain.color"), `;
}

.p-button-outlined.p-button-plain:not(:disabled):hover {
    background: `).concat(n("button.outlined.plain.hover.background"), `;
    border-color: `).concat(n("button.outlined.plain.border.color"), `;
    color: `).concat(n("button.outlined.plain.color"), `;
}

.p-button-outlined.p-button-plain:not(:disabled):active {
    background: `).concat(n("button.outlined.plain.active.background"), `;
    border-color: `).concat(n("button.outlined.plain.border.color"), `;
    color: `).concat(n("button.outlined.plain.color"), `;
}

.p-button-text {
    background: transparent;
    border-color: transparent;
    color: `).concat(n("button.text.primary.color"), `;
}

.p-button-text:not(:disabled):hover {
    background: `).concat(n("button.text.primary.hover.background"), `;
    border-color: transparent;
    color: `).concat(n("button.text.primary.color"), `;
}

.p-button-text:not(:disabled):active {
    background: `).concat(n("button.text.primary.active.background"), `;
    border-color: transparent;
    color: `).concat(n("button.text.primary.color"), `;
}

.p-button-text.p-button-secondary {
    background: transparent;
    border-color: transparent;
    color: `).concat(n("button.text.secondary.color"), `;
}

.p-button-text.p-button-secondary:not(:disabled):hover {
    background: `).concat(n("button.text.secondary.hover.background"), `;
    border-color: transparent;
    color: `).concat(n("button.text.secondary.color"), `;
}

.p-button-text.p-button-secondary:not(:disabled):active {
    background: `).concat(n("button.text.secondary.active.background"), `;
    border-color: transparent;
    color: `).concat(n("button.text.secondary.color"), `;
}

.p-button-text.p-button-success {
    background: transparent;
    border-color: transparent;
    color: `).concat(n("button.text.success.color"), `;
}

.p-button-text.p-button-success:not(:disabled):hover {
    background: `).concat(n("button.text.success.hover.background"), `;
    border-color: transparent;
    color: `).concat(n("button.text.success.color"), `;
}

.p-button-text.p-button-success:not(:disabled):active {
    background: `).concat(n("button.text.success.active.background"), `;
    border-color: transparent;
    color: `).concat(n("button.text.success.color"), `;
}

.p-button-text.p-button-info {
    background: transparent;
    border-color: transparent;
    color: `).concat(n("button.text.info.color"), `;
}

.p-button-text.p-button-info:not(:disabled):hover {
    background: `).concat(n("button.text.info.hover.background"), `;
    border-color: transparent;
    color: `).concat(n("button.text.info.color"), `;
}

.p-button-text.p-button-info:not(:disabled):active {
    background: `).concat(n("button.text.info.active.background"), `;
    border-color: transparent;
    color: `).concat(n("button.text.info.color"), `;
}

.p-button-text.p-button-warn {
    background: transparent;
    border-color: transparent;
    color: `).concat(n("button.text.warn.color"), `;
}

.p-button-text.p-button-warn:not(:disabled):hover {
    background: `).concat(n("button.text.warn.hover.background"), `;
    border-color: transparent;
    color: `).concat(n("button.text.warn.color"), `;
}

.p-button-text.p-button-warn:not(:disabled):active {
    background: `).concat(n("button.text.warn.active.background"), `;
    border-color: transparent;
    color: `).concat(n("button.text.warn.color"), `;
}

.p-button-text.p-button-help {
    background: transparent;
    border-color: transparent;
    color: `).concat(n("button.text.help.color"), `;
}

.p-button-text.p-button-help:not(:disabled):hover {
    background: `).concat(n("button.text.help.hover.background"), `;
    border-color: transparent;
    color: `).concat(n("button.text.help.color"), `;
}

.p-button-text.p-button-help:not(:disabled):active {
    background: `).concat(n("button.text.help.active.background"), `;
    border-color: transparent;
    color: `).concat(n("button.text.help.color"), `;
}

.p-button-text.p-button-danger {
    background: transparent;
    border-color: transparent;
    color: `).concat(n("button.text.danger.color"), `;
}

.p-button-text.p-button-danger:not(:disabled):hover {
    background: `).concat(n("button.text.danger.hover.background"), `;
    border-color: transparent;
    color: `).concat(n("button.text.danger.color"), `;
}

.p-button-text.p-button-danger:not(:disabled):active {
    background: `).concat(n("button.text.danger.active.background"), `;
    border-color: transparent;
    color: `).concat(n("button.text.danger.color"), `;
}

.p-button-text.p-button-plain {
    background: transparent;
    border-color: transparent;
    color: `).concat(n("button.text.plain.color"), `;
}

.p-button-text.p-button-plain:not(:disabled):hover {
    background: `).concat(n("button.text.plain.hover.background"), `;
    border-color: transparent;
    color: `).concat(n("button.text.plain.color"), `;
}

.p-button-text.p-button-plain:not(:disabled):active {
    background: `).concat(n("button.text.plain.active.background"), `;
    border-color: transparent;
    color: `).concat(n("button.text.plain.color"), `;
}

.p-button-link {
    background: transparent;
    border-color: transparent;
    color: `).concat(n("button.link.color"), `;
}

.p-button-link:not(:disabled):hover {
    background: transparent;
    border-color: transparent;
    color: `).concat(n("button.link.hover.color"), `;
}

.p-button-link:not(:disabled):hover .p-button-label {
    text-decoration: underline;
}

.p-button-link:not(:disabled):active {
    background: transparent;
    border-color: transparent;
    color: `).concat(n("button.link.active.color"), `;
}
`);
}, Ua = {
  root: function(e) {
    var n = e.instance, o = e.props;
    return ["p-button p-component", q(q(q(q(q(q(q(q(q({
      "p-button-icon-only": n.hasIcon && !o.label && !o.badge,
      "p-button-vertical": (o.iconPos === "top" || o.iconPos === "bottom") && o.label,
      "p-button-loading": o.loading,
      "p-button-link": o.link
    }, "p-button-".concat(o.severity), o.severity), "p-button-raised", o.raised), "p-button-rounded", o.rounded), "p-button-text", o.text), "p-button-outlined", o.outlined), "p-button-sm", o.size === "small"), "p-button-lg", o.size === "large"), "p-button-plain", o.plain), "p-button-fluid", n.hasFluid)];
  },
  loadingIcon: "p-button-loading-icon",
  icon: function(e) {
    var n = e.props;
    return ["p-button-icon", q({}, "p-button-icon-".concat(n.iconPos), n.label)];
  },
  label: "p-button-label"
}, Fa = V.extend({
  name: "button",
  theme: Ba,
  classes: Ua
}), Ha = {
  name: "BaseButton",
  extends: Tn,
  props: {
    label: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    iconPos: {
      type: String,
      default: "left"
    },
    iconClass: {
      type: String,
      default: null
    },
    badge: {
      type: String,
      default: null
    },
    badgeClass: {
      type: String,
      default: null
    },
    badgeSeverity: {
      type: String,
      default: "secondary"
    },
    loading: {
      type: Boolean,
      default: !1
    },
    loadingIcon: {
      type: String,
      default: void 0
    },
    as: {
      type: String,
      default: "BUTTON"
    },
    asChild: {
      type: Boolean,
      default: !1
    },
    link: {
      type: Boolean,
      default: !1
    },
    severity: {
      type: String,
      default: null
    },
    raised: {
      type: Boolean,
      default: !1
    },
    rounded: {
      type: Boolean,
      default: !1
    },
    text: {
      type: Boolean,
      default: !1
    },
    outlined: {
      type: Boolean,
      default: !1
    },
    size: {
      type: String,
      default: null
    },
    plain: {
      type: Boolean,
      default: !1
    },
    fluid: {
      type: Boolean,
      default: null
    }
  },
  style: Fa,
  provide: function() {
    return {
      $pcButton: this,
      $parentInstance: this
    };
  }
}, Cr = {
  name: "Button",
  extends: Ha,
  inheritAttrs: !1,
  inject: {
    $pcFluid: {
      default: null
    }
  },
  methods: {
    getPTOptions: function(e) {
      var n = e === "root" ? this.ptmi : this.ptm;
      return n(e, {
        context: {
          disabled: this.disabled
        }
      });
    }
  },
  computed: {
    disabled: function() {
      return this.$attrs.disabled || this.$attrs.disabled === "" || this.loading;
    },
    defaultAriaLabel: function() {
      return this.label ? this.label + (this.badge ? " " + this.badge : "") : this.$attrs.ariaLabel;
    },
    hasIcon: function() {
      return this.icon || this.$slots.icon;
    },
    attrs: function() {
      return L(this.asAttrs, this.a11yAttrs, this.getPTOptions("root"));
    },
    asAttrs: function() {
      return this.as === "BUTTON" ? {
        type: "button",
        disabled: this.disabled
      } : void 0;
    },
    a11yAttrs: function() {
      return {
        "aria-label": this.defaultAriaLabel,
        "data-pc-name": "button",
        "data-p-disabled": this.disabled,
        "data-p-severity": this.severity
      };
    },
    hasFluid: function() {
      return Tt(this.fluid) ? !!this.$pcFluid : this.fluid;
    }
  },
  components: {
    SpinnerIcon: Pr,
    Badge: kr
  },
  directives: {
    ripple: La
  }
};
function Ka(t, e, n, o, r, i) {
  var s = Fn("SpinnerIcon"), a = Fn("Badge"), c = Fi("ripple");
  return t.asChild ? Dt(t.$slots, "default", {
    key: 1,
    class: Pt(t.cx("root")),
    a11yAttrs: i.a11yAttrs
  }) : Di((Q(), Bt(Ui(t.as), L({
    key: 0,
    class: t.cx("root")
  }, i.attrs), {
    default: Ri(function() {
      return [Dt(t.$slots, "default", {}, function() {
        return [t.loading ? Dt(t.$slots, "loadingicon", {
          key: 0,
          class: Pt([t.cx("loadingIcon"), t.cx("icon")])
        }, function() {
          return [t.loadingIcon ? (Q(), xe("span", L({
            key: 0,
            class: [t.cx("loadingIcon"), t.cx("icon"), t.loadingIcon]
          }, t.ptm("loadingIcon")), null, 16)) : (Q(), Bt(s, L({
            key: 1,
            class: [t.cx("loadingIcon"), t.cx("icon")],
            spin: ""
          }, t.ptm("loadingIcon")), null, 16, ["class"]))];
        }) : Dt(t.$slots, "icon", {
          key: 1,
          class: Pt([t.cx("icon")])
        }, function() {
          return [t.icon ? (Q(), xe("span", L({
            key: 0,
            class: [t.cx("icon"), t.icon, t.iconClass]
          }, t.ptm("icon")), null, 16)) : Xn("", !0)];
        }), Ie("span", L({
          class: t.cx("label")
        }, t.ptm("label")), Te(t.label || " "), 17), t.badge ? (Q(), Bt(a, L({
          key: 2,
          value: t.badge,
          class: t.badgeClass,
          severity: t.badgeSeverity,
          unstyled: t.unstyled
        }, t.ptm("pcBadge")), null, 16, ["value", "class", "severity", "unstyled"])) : Xn("", !0)];
      })];
    }),
    _: 3
  }, 16, ["class"])), [[c]]);
}
Cr.render = Ka;
const Wa = /* @__PURE__ */ er({ name: "sa-navbar-addon" }), Ya = /* @__PURE__ */ er({
  ...Wa,
  setup(t) {
    console.log(Cr);
    const e = be("Test");
    return (n, o) => Te(e.value);
  }
}), So = "sa-", Ga = (t) => (t.install = (e) => {
  const n = t.name;
  n.startsWith(So) || console.warn(`THis component name need to start with ${So}`), e.component(n, t);
}, t), qa = Ga(Ya), $o = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NavbarAddonRegister: qa
}, Symbol.toStringTag, { value: "Module" })), Ja = {
  install(t, { register: e }) {
    if (e)
      for (let n in $o)
        t.use($o[n]);
  }
};
export {
  Ya as NavbarAddon,
  Ja as default
};
