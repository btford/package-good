module.exports = function (json) {
  return {
    maintainers: ~~(json.maintainers && json.maintainers.length > 1)
  }
};
