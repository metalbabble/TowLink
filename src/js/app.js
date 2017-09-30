// -------- WATCH HANDLER --------------------
var signals = [
  'engine_oil_temp', 
  'brakes_overheated',
  'trailer_hitch',  
  'trailer_brakelght_fail', 
  'transmission_oil_temp',
  'Display_units', 
  'trailer_brakes_gain',
  'wheel_angle',
  'gear_state',
  'trailer_leftturn_fail',
  'trailer_rightturn_fail',
  'trailer_rearright_fail',
  'trailer_rearleft_fail'
]

//primary watch responder
gm.info.watchVehicleData(function (data) {
  console.log("primary watch responder got: " + data);

  //route the response
  if(data.gear_state)
  {
    gearStateUpdate(data);
  }

  if(data.wheel_angle)
  {
    steeringUpdate(data);
  }

  if(data.trailer_leftturn_fail || 
    data.trailer_rightturn_fail || 
    data.trailer_rearright_fail || 
    data.trailer_rearleft_fail)
    {
      lightChecker(data);
    }

    if(data.engine_oil_temp ||
      data.brakes_overheated != null ||
      data.trailer_hitch != null || 
      data.trailer_brakelght_fail != null ||
      data.transmission_oil_temp ||
      data.Display_units ||
      data.trailer_brakes_gain)
    {
      homeDashUpdate(data);
    }  
});

// --------SWITCH BETWEEN TABS-----------------
function showHome () {
  $("#tabHome").fadeIn();
  $("#tabBackup").hide();
  $("#tabChecklist").hide();
}

function showBackup () {
  $("#tabHome").hide();
  $("#tabBackup").fadeIn();
  $("#tabChecklist").hide();
}

function showChecklist () {
  $("#tabHome").hide();
  $("#tabBackup").hide();
  $("#tabChecklist").fadeIn();
}

// -----------ERROR LIGHTS--------------
function toggleAlertLight (isError, alertName) {
  console.log('-alert light update-')
  //if (Boolean(isError)) {
  if (Boolean(isError)) {
    console.log('Setting error ' + alertName + 'iserror ' + isError)
    document.getElementById('alert-' + alertName).src = 'images/x-' + alertName + '.png'
  }else {
    console.log('Setting OK')
    console.log('alertname = ' + alertName)
    document.getElementById('alert-' + alertName).src = 'images/ok-' + alertName + '.png'
  }
}
