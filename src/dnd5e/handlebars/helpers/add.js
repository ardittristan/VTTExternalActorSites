module.exports = function (...args) {
  let out = 0;
  args.forEach((arg) => {
    if (typeof arg === "number" || typeof arg === "string") out += Number(arg) || 0;
  });
  return out;
};
