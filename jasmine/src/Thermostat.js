function Thermostat(powerSaving) {
  this.DEFAULT_TEMP = 20;
  this.MIN_TEMP = 10;
  this.temperature = this.DEFAULT_TEMP;
  this.powerSaving = powerSaving;
  // this.isPowerSaving = true
};

Thermostat.prototype.getTemperature = function () {
  return this.temperature;
};

Thermostat.prototype.up = function () {
  if(this.temperature<this.powerSaving.maxTemp){
    this.temperature++
  };
};

Thermostat.prototype.down = function () {
  if(this.temperature>this.MIN_TEMP){
    this.temperature--;
  };
};

Thermostat.prototype.reset = function () {
    this.temperature = this.DEFAULT_TEMP;
};
