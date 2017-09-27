// app.js

// Watch Signals
var signals = ['gear_state']

// Watch
gm.info.watchVehicleData(function (data) {
  console.log(data)
  // signals
  // if (data.gear_state) { gearState.refresh(data.gear_state);}
  gearState.refresh(data.gear_state)

  function gearState () {
    console.log(gearState);
    // TRANSMISSION_ENGAGED_IN_REVERSE = 0x02
    if (gearState == '0x02') {
        showBackup();
    }
  }
}, signals)
