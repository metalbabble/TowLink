/*************************************
 * Handles the back-up tab interactions
 *************************************/

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
  else if(data.wheel_angle > 0)
  {
    //wheel clockwise
    steer.html("<img src='images/left.png'>");
  }
  else
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