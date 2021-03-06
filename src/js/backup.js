// backup.js

//initial display
gm.info.getVehicleData(steeringUpdate, ['wheel_angle']);

//set watch
gm.info.watchVehicleData(steeringUpdate, ['wheel_angle']);

gm.info.watchVehicleData(gearStateUpdate, ['gear_state']);

//handle steering angle change
function steeringUpdate(data)
{
  var steer = $("#steer"); 
  console.log("Steering update. " + data + "steer=" + steer);

  if(data.wheel_angle < 0)
  {
    //wheel counter-clockwise
    steer.html("<img src='images/right.png'>");
  }
  if(data.wheel_angle > 0)
  {
    //wheel clockwise
    steer.html("<img src='images/left.png'>");
  }
  if(data.wheel_angle > 200)
  {
    //wheel clockwise
    steer.html("<img src='images/hardleft.png'>");
  }
  if(data.wheel_angle < -200)
  {
    //wheel clockwise
    steer.html("<img src='images/hardright.png'>");
  }
  if(data.wheel_angle == 0)
  {
    //wheel centered
    steer.html("<img src='images/center.png'>");
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