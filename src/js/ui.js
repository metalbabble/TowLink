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
    if(Boolean(isError))
    {
        document.getElementById("ok-" + alertName).style.display = "none";
        document.getElementById("x-" + alertName).style.display = "block";
    }
    else
    {
        document.getElementById("ok-" + alertName).style.display = "block";
        document.getElementById("x-" + alertName).style.display = "none";
    }

}