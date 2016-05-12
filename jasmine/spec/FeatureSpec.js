'use strict';

describe('FeatureTest', function(){
  var thermostat;
  var powerSaving;
  var display;

  beforeEach(function(){
    powerSaving = new PowerSaving();
    thermostat = new Thermostat(powerSaving);
    display = new Display(thermostat);
  });

  it('thermostats have max temp of 25 when power saving is on',function(){
    for(var temp = 20; temp < 25; temp++){thermostat.up();};
    thermostat.up()
    expect(thermostat.temperature).toEqual(25);
  });

  it('thermostats have max temp of 35 when power saving is off',function(){
    thermostat.powerSaving.turnOff()
    for(var temp = 20; temp < 35; temp++){thermostat.up();};
    thermostat.up();
    expect(thermostat.temperature).toEqual(35);
  });

  it('diaplay colour is yellow for thermostats at default temp', function(){
    expect(display.colour()).toEqual('yellow');
  });

  it('diaplay colour is yellow when thermostat is set below 18', function(){
    for(var temp = 20; temp > 18; temp--){thermostat.down()};
    expect(display.colour()).toBe('yellow');
    thermostat.down();
    expect(display.colour()).toEqual('green');
  });

  it('diaplay colour is red when thermostat is set above 25', function(){
    thermostat.powerSaving.turnOff()
    for(var temp = 20; temp < 25; temp++){thermostat.up()};
    expect(display.colour()).toBe('yellow');
    thermostat.up();
    expect(display.colour()).toEqual('red');
  });
});
