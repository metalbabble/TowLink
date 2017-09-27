//--------SWITCH BETWEEN TABS-----------------

function showHome()
{
    document.getElementById("tabHome").style.display = "block";
    document.getElementById("tabBackup").style.display = "none";
    document.getElementById("tabChecklist").style.display = "none";
}

function showBackup()
{
    document.getElementById("tabHome").style.display = "none";
    document.getElementById("tabBackup").style.display = "block";
    document.getElementById("tabChecklist").style.display = "none";
}

function showChecklist()
{
    document.getElementById("tabHome").style.display = "none";
    document.getElementById("tabBackup").style.display = "none";
    document.getElementById("tabChecklist").style.display = "block";
}

//-----------ERROR LIGHTS--------------

function toggleAlertLight(isError, alertName)
{
    console.log("-alert light update-");
    if(Boolean(isError))
    {
        console.log("Setting error");
        document.getElementById("alert-" + alertName).src = "images/x-" + alertName + ".png";
    }
    else
    {
        console.log("Setting OK");
        document.getElementById("alert-" + alertName).src = "images/ok-" + alertName + ".png";
    }
}