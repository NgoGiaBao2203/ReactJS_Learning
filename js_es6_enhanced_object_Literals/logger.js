export default logger;

function logger(log, type = TYPE_LOG) {
  console[type](log);
}
