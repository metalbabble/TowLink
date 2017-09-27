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