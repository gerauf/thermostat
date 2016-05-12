'use strict';

describe('PowerSaving', function(){

  var powerSaving;

  beforeEach(function(){
    powerSaving = new PowerSaving();
  });

  it('is on by default', function(){
    expect(powerSaving.isOn).toBe(true);
  });

  it('can be turned off', function(){
    powerSaving.turnOff();
    expect(powerSaving.isOn).toBe(false);
  });

  it('can be turned back on', function(){
    powerSaving.turnOff();
    powerSaving.turnOn();
    expect(powerSaving.isOn).toBe(true);
  });

  it('max temp when on is 25C', function(){
    expect(powerSaving.maxTemp).toEqual(25);
  });

  it('max temp when off is 35C', function(){
    powerSaving.turnOff();
    expect(powerSaving.maxTemp).toEqual(35);
  });

  it('max temp returns to 25 when power saving switched back on', function(){
    powerSaving.turnOff();
    powerSaving.turnOn();
    expect(powerSaving.maxTemp).toEqual(25);
  });


});
