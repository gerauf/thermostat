function Thermostat() {
  this.DEFAULT_TEMP = 20;
  this.temperature = this.DEFAULT_TEMP;
  this.MIN_TEMP = 10;
  this.powerSavingMode = true;
  this.MAX_LIMIT_PSM_ON = 25;
  this.MAX_LIMIT_PSM_OFF = 32;
  this.MEDIUM_ENERGY_USAGE_LIMIT = 18;
}

Thermostat.prototype.getCurrentTemp = function(){
  return this.temperature;
};

Thermostat.prototype.up = function(){
  if (this.isMaxTemp()) {
    return;
  }
  this.temperature += 1 ;
};

Thermostat.prototype.down = function(){
  if (this.isMinTemp()) {
    return;
  }
  this.temperature -=1;
};

Thermostat.prototype.isMinTemp = function(){
  return this.temperature === this.MIN_TEMP;
};

Thermostat.prototype.isPowerSavingModeOn =function(){
  return this.powerSavingMode === true;
};

Thermostat.prototype.switchPowerSavingModeOff = function(){
  this.powerSavingMode = false;
};

Thermostat.prototype.switchPowerSavingModeOn = function(){
  this.powerSavingMode = true;
};

Thermostat.prototype.isMaxTemp = function(){
  if(this.isPowerSavingModeOn() === false) {
    return this.temperature === this.MAX_LIMIT_PSM_OFF;
  }
  return this.temperature === this.MAX_LIMIT_PSM_ON;
};

Thermostat.prototype.resetTemp = function() {
  this.temperature = this.DEFAULT_TEMP;
};

Thermostat.prototype.energyUsage = function() {
  if (this.temperature < this.MEDIUM_ENERGY_USAGE_LIMIT) {
    return 'low-usage';
  }
  else if (this.temperature >= this.MEDIUM_ENERGY_USAGE_LIMIT && this.temperature <= this.MAX_LIMIT_PSM_ON) {
    return 'medium-usage';
  }
  return 'high-usage';
};
