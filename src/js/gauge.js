// gauge.js

// Watch Signals
var signals = ['engine_oil_temp', 'brakes_overheated', 'trailer_brakelght_fail', 'transmission_oil_temp',
  'trailer_hitch', 'engine_coolant_temp', 'gear_automatic', 'Display_units']
// Watch
gm.info.watchVehicleData(function (data) {
  console.log(data)
  // signals

  // get display units
  if (data.Display_units) { document.getElementById("units").value = data.Display_units; }
  displayUnit = document.getElementById("units").value;
  // oil temp
  if (data.engine_oil_temp) {
    console.log('displayunis ' + displayUnit);
    if (document.getElementById('units').value == '$0')
    // do not convert
    {
      engineOilTemp.refresh(data.engine_oil_temp)
      console.log('c')
    }
    // convert
    else {
      engineOilTemp.refresh(cToF(data.engine_oil_temp))
      console.log('f')
    }
  }
  // trans temp
  if (data.transmission_oil_temp) {

    console.log('displayunis ' + displayUnit);
    if (document.getElementById('units').value == '$0')
    // do not convert
    {
      transOilTemp.refresh(data.transmission_oil_temp)
      console.log('c')
    }
    // convert
    else {
      transOilTemp.refresh(cToF(data.transmission_oil_temp))
      console.log('f')
    }
  }
  
  brakesOverheated(data.brakes_overheated); 
  trailerBrakeLightFail(data.trailer_brakelght_fail); 
  trailerHitchConnected(data.trailer_hitch); 
// question: is there a tow haul mode?
}, signals)

// stoplite gagues

function brakesOverheated (val) {
  console.log(val);
  toggleAlertLight(val,"overheat");
}
function trailerBrakeLightFail (val) {
  console.log(val);
  toggleAlertLight(val,"trailerlight");
}
function trailerHitchConnected (val) {
  console.log(val);
  toggleAlertLight(!val,"hitch");
}

// Arrow Gauges
var transOilTemp = new JustGage({
  id: 'transOilTemp',
  value: 0,
  min: 0,
  max: 215,
  pointer: true,
  title: 'Transmission Oil Temperature',
  label: 'degrees',

  customSectors: [{
    color: '#ff0000',
    lo: 160,
    hi: 175
  }, {
    color: '#00ff00',
    lo: 0,
    hi: 160
  }],
  counter: true
})

var engineOilTemp = new JustGage({
  id: 'engineOilTemp',
  value: 0,
  min: 0,
  max: 215,
  pointer: true,
  title: 'Engine Oil Temperature',
  label: 'degrees',

  customSectors: [{
    color: '#ff0000',
    lo: 160,
    hi: 175
  }, {
    color: '#00ff00',
    lo: 0,
    hi: 160
  }],
  counter: true
})

// helper funcitons
function cToF(celsius) {
  return (celsius * 9 / 5 + 32)
  // console.log(celsius * 9 / 5 + 32)
}
