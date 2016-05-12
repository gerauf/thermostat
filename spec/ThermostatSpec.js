'use strict';

describe('Thermostat', function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('should start at 20 degrees', function() {
    expect(thermostat.getTemperature()).toEqual(thermostat.DEFAULT_TEMP);
  });

  it('should be able to increase the temperature', function() {
    thermostat.up()
    expect(thermostat.getTemperature()).toEqual(21);
  });

  it('should be able to decrease the temperature', function() {
    thermostat.down()
    expect(thermostat.getTemperature()).toEqual(19);
  });

  it('should have a minimum temperature of 10', function() {
    for(var temp = thermostat.DEFAULT_TEMP; temp > thermostat.MIN_TEMP; temp--){
      thermostat.down()
    };
    thermostat.down();
    expect(thermostat.getTemperature()).toEqual(thermostat.MIN_TEMP);
  });

  it('should be able to reset the temperature', function() {
    thermostat.up();
    thermostat.reset();
    expect(thermostat.getTemperature()).toEqual(thermostat.DEFAULT_TEMP);
  });

  it('should be able to turn power saving mode on', function() {
    thermostat.turnOnPSM();
    expect(thermostat.isPSMOn()).toBe(true);
  });

  it('should be able to turn power saving mode off', function() {
    thermostat.turnOffPSM();
    expect(thermostat.isPSMOn()).toBe(false);
  });

  // describe('When Power Saving Mode', function(){
  //   it('')
  // });
});
