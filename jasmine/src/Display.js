function Display(thermostat){
  this.thermostat = thermostat
};

Display.prototype.colour = function () {
  if(this.thermostat.temperature < 18){
    return 'green';
  } else if (this.thermostat.temperature > 25){
    return 'red';
  }
  return 'yellow';
};
