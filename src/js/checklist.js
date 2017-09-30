// show "ready to go" message if all checkboxes are checked
function chkCheck()
{
if(
  $('#chkCoupler').is(':checked') &
  $('#chkTirePressure').is(':checked') &
  $('#chkElectrical').is(':checked') &
  $('#chkChains').is(':checked') &
  $('#chkJacks').is(':checked'))
    {
        $("#lblReadyToGo").fadeIn();
        console.log("display ready msg");
    }

}

/*show alerts for bad trailer lights
TODO: this is temporary. a better solution (that supports multiple light failures)
would be to send a status over and overlay the PNGs 
*/
function setTrailerLightsStatusImage(filename)
{
    document.getElementById("trailerLightChecker").src=filename;
}

gm.info.watchVehicleData(lightChecker, ['trailer_leftturn_fail']);
gm.info.watchVehicleData(lightChecker, ['trailer_rightturn_fail']);
gm.info.watchVehicleData(lightChecker, ['trailer_rearright_fail']);
gm.info.watchVehicleData(lightChecker, ['trailer_rearleft_fail']);

//handle bad light singnals 
function lightChecker(data)
{
  console.log("light fail signal: " + data);
  var img = $("#trailerLightChecker");
  
  //start with the default image
  img.src="/images/trailer.png";

  //overlay fail images
  if(data.trailer_leftturn_fail || data.trailer_rearleft_fail)
  {
    img.attr("src","/images/trailer_bad_l_brake.png");
  }
  if(data.trailer_rightturn_fail || data.trailer_rearright_fail)
  {
    img.attr("src","/images/trailer_bad_r_brake.png");
  }
}