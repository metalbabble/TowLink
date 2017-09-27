// Checklist.js
function chkCheck()
{
if(
    document.getElementById("chkCoupler").Checked &
    document.getElementById("chkTirePressure").Checked &
    document.getElementById("chkElectrical").Checked &
    document.getElementById("chkChains").Checked &
    document.getElementById("chkJack").Checked)
    {
        document.getElementById("lblReadyToGo").style.display = "block";
    }

}