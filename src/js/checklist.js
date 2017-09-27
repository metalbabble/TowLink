// Checklist.js
function chkCheck()
{
if(
    document.getElementById("chkCoupler").checked &
    document.getElementById("chkTirePressure").checked &
    document.getElementById("chkElectrical").checked &
    document.getElementById("chkChains").checked &
    document.getElementById("chkJacks").checked)
    {
        document.getElementById("lblReadyToGo").style.display = "block";
    }

}