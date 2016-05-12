$( document ).ready(function(){
  var thermostat = new Thermostat();

  updatePSMDisplay();
  updateTemperatureAndDisplay();

  $('#temp-up').on('click', function(){
    thermostat.up();
    updateTemperatureAndDisplay();
  })

  $('#temp-down').click( function(){
    thermostat.down();
    updateTemperatureAndDisplay();
  })

  $('#temp-reset').click( function(){
    thermostat.reset();
    updateTemperatureAndDisplay();
  })

  $('#psm-toggle').click( function(){
    thermostat.psmToggle();
    updatePSMDisplay();
  });

  $('#get-city-temp').click( function(){
    var city = $('#city-name').val();
    apiCall(city);
  });


  function updateTemperatureAndDisplay(){
    $('#temp').text(thermostat.getTemperature())
    updateDisplayMode();
  };

  function updatePSMDisplay(){
    $('#psm-toggle').text(thermostat.isPSMOn() ? 'POWER SAVING ON': 'POWER SAVING OFF');
  };

  function updateDisplayMode() {
    $('#temp').attr('class', thermostat.getMode())
  };

  function apiCall(city){
    $.get('http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=53eeb3148fe10409cbdf2d75edc697e7&units=metric', function(data){
      $('#city-and-temp').text(city + ' temperature: ' + data.main.temp);
    });
  }


});
