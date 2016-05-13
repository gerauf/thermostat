
$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

  $('#up').click(function() {
    thermostat.up();
    updateTemperature();
  });

  $('#down').click(function() {
    thermostat.down();
    updateTemperature();
  });

  $('#reset').click(function() {
    thermostat.resetTemp();
    updateTemperature();
  });

  $('#PSM-on').click(function() {
    thermostat.switchPowerSavingModeOn();
    $('#power-saving-mode').text('on');
    updateTemperature();
  });

  $('#PSM-off').click(function() {
    thermostat.switchPowerSavingModeOff();
    $('#power-saving-mode').text('off');
    updateTemperature();
  });

function updateTemperature() {
  $('#temperature').text(thermostat.temperature);
  $('#temperature').attr('class', thermostat.energyUsage());
}
});
