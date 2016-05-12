$( document ).ready(function(){
  var thermostat = new Thermostat();

  updatePSMDisplay();
  updateTemperatureAndDisplay();

  $('#temp-up').on('click', function() {
    thermostat.up();
    updateTemperatureAndDisplay();
  })

  $('#temp-down').click( function() {
    thermostat.down();
    updateTemperatureAndDisplay();
  })

  $('#temp-reset').click( function() {
    thermostat.reset();
    updateTemperatureAndDisplay();
  })

  $('#psm-toggle').click( function() {
    thermostat.psmToggle();
    updatePSMDisplay();
  });


  function updateTemperatureAndDisplay(){
    $('#temp').text(thermostat.getTemperature())
    updateDisplayMode();
  };

  function updatePSMDisplay(){
    $('#psm-mode').text(thermostat.isPSMOn() ? 'on': 'off');
  };

  function updateDisplayMode() {
    $('#temp').attr('class', thermostat.getMode())
  }
});
