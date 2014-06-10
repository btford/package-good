var packageGood = require('../good.js');

describe('packageGood', function () {
  it('should give a good score if you have more than one maintainer', function () {
    expect(packageGood({
      maintainers: ['me@example.com', 'you@example.com']
    }).maintainers).toBe(1);
  });

  it('should give a poor score if you have less than two maintainers', function () {
    expect(packageGood({ maintainers: ['me@example.com'] }).maintainers).toBe(0);
    expect(packageGood({ maintainers: [] }).maintainers).toBe(0);
    expect(packageGood({}).maintainers).toBe(0);
  });
});
