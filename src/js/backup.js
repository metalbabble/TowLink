// backup.js

//initial display
gm.info.getVehicleData(steeringUpdate, ['wheel_angle']);

//set watch
gm.info.watchVehicleData(steeringUpdate, ['wheel_angle']);

gm.info.watchVehicleData(gearStateUpdate, ['gear_state']);

//handle steering angle change
function steeringUpdate(data)
{
  var steer = document.getElementById('steer');
  console.log("Steering update. " + data);

  if(data.wheel_angle < 0)
  {
    //wheel counter-clockwise
    steer.innerHTML = "<img src='images/right.png'>";
  }
  else if(data.wheel_angle > 0)
  {
    //wheel clockwise
    steer.innerHTML = "<img src='images/left.png'>";
  }
  else
  {
    //wheel centered
    steer.innerHTML = "<img src='images/center.png'>";
  }
}

//handle changing gears
function gearStateUpdate(data)
{
  console.log(data);  
  
  // TRANSMISSION_ENGAGED_IN_REVERSE = 0x02
    if (data.gear_state == "0x02") {
      showBackup();
  }
}