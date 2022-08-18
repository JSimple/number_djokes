function s(e) {
    return String(e.toFixed(6)).match(/\.((9999)|(0000))/gm);
}

export function round_num(e) {
var n =
    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
    t =
    !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
return t && s(e) ? e.toFixed(0) : e.toFixed(n);
}

export function format_polynomial(e) {
for (var n = "Joke(n) = ", t = 0; t < e.length; t++) {
    var r = e[t],
    l = 0 === t || 1 === t ? "" : "(n ** ".concat(t, ")"),
    a = r >= 0 ? "+" : "-",
    o = Math.abs(r);
    n +=
    0 === t
        ? r
        : 1 === t
        ? " ".concat(a, " ").concat(o, "n")
        : " ".concat(a, " ").concat(o).concat(l);
}
return n;
}