// gauge.js

// Watch Signals
var signals = ['engine_oil_temp', 'brakes_overheated', 'trailer_brakelght_fail', 'transmission_oil_temp',
  'trailer_hitch', 'engine_coolant_temp', 'gear_automatic', 'Display_units', 'trailer_brakes_gain']

// Watch
gm.info.watchVehicleData(function (data) {
  console.log(data)
  // signals

  // get display units
  if (data.Display_units) { document.getElementById('units').value = data.Display_units; }
  displayUnit = document.getElementById('units').value

  // oil temp
  if (data.engine_oil_temp) {
    console.log('displayunis ' + displayUnit)
    if (document.getElementById('units').value == '$0')
    // do not convert
    {
      engineOilTemp.refresh(data.engine_oil_temp)
      console.log('c')
    }
    // convert
    else {
      engineOilTemp.refresh(cToF(data.engine_oil_temp))
      oilTempWarning(cToF(data.engine_oil_temp))
      console.log('f')
    }
  }
  // trans temp
  if (data.transmission_oil_temp) {
    console.log('displayunis ' + displayUnit)
    if (document.getElementById('units').value == '$0')
    // do not convert
    {
      transOilTemp.refresh(data.transmission_oil_temp)
      console.log('c')
    }
    // convert
    else {
      transOilTemp.refresh(cToF(data.transmission_oil_temp))
      transTempWarning(cToF(data.transmission_oil_temp))
      console.log('f')
    }
  }

  brakesOverheated(data.brakes_overheated)
  trailerBrakeLightFail(data.trailer_brakelght_fail)
  trailerHitchConnected(data.trailer_hitch)

  //trailer brake
  if (data.trailer_brakes_gain) {setBrakeGain(data.trailer_brakes_gain)}


}, signals)

// stoplite gagues
function brakesOverheated (val) {
  console.log(val)
  toggleAlertLight(val, 'overheat');

}
function trailerBrakeLightFail (val) {
  console.log(val)
  toggleAlertLight(val, 'trailerlight')
}
function trailerHitchConnected (val) {
  console.log(val)
  toggleAlertLight(!val, 'hitch')
}

// Arrow Gauges
var transOilTemp = new JustGage({
  id: 'transOilTemp',
  value: 0,
  min: 0,
  max: 250,
  pointer: true,
  title: 'Transmission Oil Temp',
  label: 'degrees',

  customSectors: [{
    color: '#ff0000',
    lo: 230,
    hi: 250
  }, {
    color: '#00ff00',
    lo: 0,
    hi: 229
  }],
  counter: true
})

var engineOilTemp = new JustGage({
  id: 'engineOilTemp',
  value: 0,
  min: 0,
  max: 250,
  pointer: true,
  title: 'Engine Oil Temp',
  label: 'degrees',

  customSectors: [{
    color: '#ff0000',
    lo: 220,
    hi: 250
  }, {
    color: '#00ff00',
    lo: 0,
    hi: 219
  }],
  counter: true
})

// helper funcitons
function cToF (celsius) {
  return (celsius * 9 / 5 + 32)
// console.log(celsius * 9 / 5 + 32)
}

//used for text to speach
var tssHandle

function oilTempWarning (temp) {
  console.log('engine oil temp value ' + temp)
  if (temp > 220) {
    // voice
    tssHandle = gm.voice.startTTS(success, 'Warning. Engine Oil Temperature is to high. When safe pull over.')
  }
}

function transTempWarning (temp) {
  console.log('transTempValue ' + temp)
  if (temp > 230) {
    // voice
    tssHandle = gm.voice.startTTS(success, 'Warning. Transmission Fluid Temperature is to high. When safe pull over.')
  }
}

function success () {
  // stop from speaking
  gm.voice.stopTTS(tssHandle);
}

//Trailer Brake
function setBrakeGain(units){
  console.log(units);
  document.getElementById('brakegain').style.display = "block";
  document.getElementById('brakegain').style.width = units+'%';
  document.getElementById('brakeGainValue').innerHTML = units;
}