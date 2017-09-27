// gauge.js

// Watch Signals
var signals = ['engine_oil_temp', 'brakes_overheated', 'trailer_brakelght_fail', 'transmission_oil_temp',
  'trailer_hitch', 'engine_coolant_temp', 'gear_automatic']

// Watch
gm.info.watchVehicleData(function (data) {
  console.log(data)
  // signals
  if (data.engine_oil_temp) { engineOilTemp.refresh(data.engine_oil_temp);}
  if (data.transmission_oil_temp) {transOilTemp.refresh(data.transmission_oil_temp)}
  if (data.brakes_overheated) {brakesOverheated(data.brakes_overheated); }
  if (data.trailer_brakelght_fail) {trailerBrakeLightFail(data.trailer_brakelght_fail); }
  if (data.trailer_hitch) {trailerHitchConnected(data.trailer_hitch); }
// question: is there a tow haul mode?
}, signals)

// todo: stoplite gagues

function brakesOverheated () {
  toggleAlertLight(1,"overheat");
}
function trailerBrakeLightFail () {
  toggleAlertLight(1,"trailerlight");
}
function trailerHitchConnected () {
  toggleAlertLight(1,"hitch");
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
counter: true})

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
function cToF (celsius) {
  var cTemp = celsius
  var cToFahr = cTemp * 9 / 5 + 32
  console.log(cToFahr)
}
