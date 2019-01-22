import { DoctorLocator } from './../src/doctor-locator.js';


describe('Locator', function() {

  beforeEach(function() {
    locatorResults = new Locator();
    jasmine.clock().install();

  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it("should have a name and a food level of 10 when created", function() {
    expect(hangryBear.name).toEqual("Lucky");
    expect(hangryBear.foodLevel).toEqual(10);
  });

});
