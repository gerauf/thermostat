
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


$('#get-weather').click(function(){
  var apiAddress = 'http://api.openweathermap.org/data/2.5/weather?units=metric';
  var location = $('#weather-location').val();
  var locationQuery = '&q=' + location;
  var apiKey = '&appid=4e70879c6ea4f476773c1d673f688f3d';
  $.get(apiAddress+locationQuery+apiKey, function(data){
      $('#weather').text(Math.round(data.main.temp));
  });
});




});
