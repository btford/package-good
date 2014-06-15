module.exports = function (json) {

  var moreThanOneMaintainer = (json.maintainers && json.maintainers.length > 1)

  return {
    maintainers: {
      score: ~~moreThanOneMaintainer,
      suggestions: moreThanOneMaintainer ? [] : [ 'add another maintainer' ]
    }
  };
};
