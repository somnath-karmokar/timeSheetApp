export function isInteger(x) { return typeof x === "number" && isFinite(x) && Math.floor(x) === x; }

export function isFloat(x) { return !!(x % 1); }