'use strict'

describe('Display', function(){
  var display, thermostat

  beforeEach(function(){
    thermostat = jasmine.createSpyObj('thermostat',['temperature']);
    display = new Display(thermostat);
  });

  it('starts yellow', function(){
    expect(display.colour()).toEqual('yellow');
  });

  it('goes green if thermostat temp below 18',function(){
    thermostat.temperature = 18
    expect(display.colour()).toEqual('yellow');
    thermostat.temperature = 17
    expect(display.colour()).toEqual('green');
  });

  it('goes red if thermostat temp above 25', function(){
    thermostat.temperature = 25
    expect(display.colour()).toEqual('yellow');
    thermostat.temperature = 26
    expect(display.colour()).toEqual('red');
  });

});
