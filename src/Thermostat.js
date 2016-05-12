'use strict';

function Thermostat() {
  this.DEFAULT_TEMP = 20;
  this._temperature = this.DEFAULT_TEMP;
  this.MIN_TEMP = 10;
  this._psm = true;
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

Thermostat.prototype.reset = function () {
  this._temperature = this.DEFAULT_TEMP;
};

Thermostat.prototype.isPSMOn = function () {
  return this._psm;
};

Thermostat.prototype.turnOnPSM = function () {
  this._psm = true;
};

Thermostat.prototype.turnOffPSM = function () {
  this._psm = false;
};
