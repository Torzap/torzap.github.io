var gID,iVL,aNM;

function byId (gID){byID = document.getElementById(gID);return byID;};
function html (gID,iVL){byId(gID).innerHTML = iVL;};
function attr (gID,aNM,iVL){byId(gID).setAttribute(aNM, iVL);};
function hide (gID){byId(gID).setAttribute("style", "display:none;");};
function show (gID){byId(gID).setAttribute("style", "display:initial;");};

window.onload = function() {
  html("main","khe");
  html("main1","kha");
};
