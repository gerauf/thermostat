function PowerSaving(){
  this.isOn = true
  this.maxTemp = 25
}

PowerSaving.prototype.turnOff = function () {
  this.maxTemp = 35
  this.isOn = false
};

PowerSaving.prototype.turnOn = function () {
  this.maxTemp = 25
  this.isOn = true
};
