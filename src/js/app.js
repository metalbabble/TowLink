// --------SWITCH BETWEEN TABS-----------------

function showHome () {
  $("#tabHome").fadeIn();
  $("#tabBackup").hide();
  $("#tabChecklist").hide();
}

function showBackup () {
  $("#tabHome").hide();
  $("#tabBackup").fadeIn();
  $("#tabChecklist").hide();
}

function showChecklist () {
  $("#tabHome").hide();
  $("#tabBackup").hide();
  $("#tabChecklist").fadeIn();
}

// -----------ERROR LIGHTS--------------

function toggleAlertLight (isError, alertName) {
  console.log('-alert light update-')
  //if (Boolean(isError)) {
  if (Boolean(isError)) {
    console.log('Setting error ' + alertName + 'iserror ' + isError)
    document.getElementById('alert-' + alertName).src = 'images/x-' + alertName + '.png'
  }else {
    console.log('Setting OK')
    console.log('alertname = ' + alertName)
    document.getElementById('alert-' + alertName).src = 'images/ok-' + alertName + '.png'
  }
}
