'use strict';

describe('Thermostat', function(){
  var thermostat;
  var powerSaving;

  beforeEach(function(){
    powerSaving = jasmine.createSpyObj('powerSaving',['maxTemp']);
    powerSaving.maxTemp = 25;
    thermostat = new Thermostat(powerSaving);
  });

  it('new thermostats start at 20C', function(){
    expect(thermostat.getTemperature()).toEqual(thermostat.DEFAULT_TEMP);
  });

  it('the temperature can be increased by one with the up button', function(){
    thermostat.up()
    expect(thermostat.getTemperature()).toEqual(21);
  });

  it('the temperature can be decreased by one with the down button', function(){
    thermostat.down()
    expect(thermostat.getTemperature()).toEqual(19);
  });

  it('has a minimum temp of 10C', function(){
    for(var temp = 20; temp > 10; temp--){thermostat.down()};
    expect(thermostat.getTemperature()).toEqual(10);
    thermostat.down();
    expect(thermostat.getTemperature()).toEqual(10);
  });

  it('can not exceed max temp based on power saving', function(){
    for(var temp = 20; temp < powerSaving.maxTemp; temp++){thermostat.up()};
    expect(thermostat.getTemperature()).toEqual(powerSaving.maxTemp);
    thermostat.up();
    expect(thermostat.getTemperature()).toEqual(powerSaving.maxTemp);
  });

  it('can be reset', function(){
    thermostat.reset();
    expect(thermostat.getTemperature()).toEqual(20);
  });

});
