const success = function (message) {
  return this.$toast.success(message);
};

const error = function (message) {
  return this.$toast.error(message);
};

const warning = function (message) {
  return this.$toast.warning(message);
};

const info = function (message) {
  return this.$toast.info(message);
};

export default {
  success,
  error,
  warning,
  info,
};
