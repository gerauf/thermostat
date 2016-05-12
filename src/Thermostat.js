'use strict';

function Thermostat() {
  this.DEFAULT_TEMP = 20;
  this._temperature = this.DEFAULT_TEMP;
  this.MIN_TEMP = 10;
  this._psm = true;
  this.maxTemp = 25;
}

Thermostat.prototype.getTemperature = function () {
  return this._temperature;
};

Thermostat.prototype.up = function () {
  if(this._temperature === this.maxTemp){return;};
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
  this.maxTemp = 25;
};

Thermostat.prototype.turnOffPSM = function () {
  this._psm = false;
  this.maxTemp = 32;
};

Thermostat.prototype.getMode = function () {
  if(this._temperature > 25) { return 'High' };
  if(this._temperature < 18) { return 'Low' };
  return 'Medium'
};
