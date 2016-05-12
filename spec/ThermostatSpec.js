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
    for(var temp = thermostat.DEFAULT_TEMP; temp >= thermostat.MIN_TEMP; temp--){
      thermostat.down()
    };
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

  describe('When Power Saving Mode is on', function(){
    it('has max temp of 25', function () {
      for(var temp = thermostat.DEFAULT_TEMP; temp <= thermostat.maxTemp; temp++){
        thermostat.up();
      };
      expect(thermostat.getTemperature()).toEqual(thermostat.maxTemp);
    });
  });

  describe('When Power Saving Mode is off', function(){
    it('has max temp of 32', function () {
      thermostat.turnOffPSM();
      for(var temp = thermostat.DEFAULT_TEMP; temp <= thermostat.maxTemp; temp++){
        thermostat.up();
      };
      expect(thermostat.getTemperature()).toEqual(thermostat.maxTemp);
    });
  });

  describe('Power mode', function() {
    it('default is medium mode', function() {
      expect(thermostat.getMode()).toEqual('Medium');
    });

    it('should be low mode if temp is below 18', function () {
      for(var temp = thermostat.DEFAULT_TEMP; temp >= 18; temp--){
        thermostat.down();
      };
      expect(thermostat.getMode()).toEqual('Low');
    });

    it('should be high mode if temp is above 25', function () {
      thermostat.turnOffPSM();
      for(var temp = thermostat.DEFAULT_TEMP; temp <= 25; temp++){
        thermostat.up();
      };
      expect(thermostat.getMode()).toEqual('High');
    })
  });

});
