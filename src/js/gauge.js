//Watch Signals
var signals = ['engine_oil_temp', 'brakes_overheated','trailer_brakelght_fail','transmission_oil_temp',
'trailer_hitch', 'engine_coolant_temp', 'gear_automatic'];

//Watch
gm.info.watchVehicleData(function(data){ 
    console.log(data);
   //signals
    if (data.engine_oil_temp){ engineOilTemp.refresh(data.engine_oil_temp);}
    if (data.transmission_oil_temp) {transOilTemp.refresh(data.transmission_oil_temp)}
    if (data.brakes_overheated) {brakesOverheated.refresh(data.brakes_overheated)}
    if (data.trailer_brakelght_fail) {trailerBrakeLightFail.refresh(data.trailer_brakelght_fail)}
    if (data.trailer_hitch) {trailerHitch.refresh(data.trailer_hitch)}
}, signals);
