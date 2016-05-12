'use strict';

function Thermostat() {
  this._temperature = 20;
  this.MIN_TEMP = 10;
}

Thermostat.prototype.getTemperature = function () {
  return this._temperature;
};

Thermostat.prototype.up = function () {
  this._temperature++;
};

Thermostat.prototype.down = function () {
  if(this._temperature === this.MIN_TEMP){return;};
  this._temperature--;
};
