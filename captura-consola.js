window.__exerciseLogs = [];
const originalLog = console.log;
console.log = function (...valores) {
  window.__exerciseLogs.push(valores);
  originalLog.apply(console, valores);
};
