'use strict';

describe('Thermostat', function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('should start at 20 degrees', function() {
    expect(thermostat.getTemperature()).toEqual(20);
  });

  it('should be able to increase the temperature', function() {
    thermostat.up()
    expect(thermostat.getTemperature()).toEqual(21);
  });

  it('should be able to decrease the temperature', function() {
    thermostat.down()
    expect(thermostat.getTemperature()).toEqual(19);
  });

});
