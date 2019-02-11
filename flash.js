document.getElementById("id_logic_version").innerHTML = "Logic version: 2019.02.11.0";

var flash = instanceOfCameraControl.flashMode

function flash()
{
	onSuccess( camera );
	
	
}
var options = {
  camera: navigator.mozCameras.getListOfCameras()[0]
};
 
function onSuccess( camera ) {
  var capabilities = camera.camera.capabilities;

  if (capabilities.flashModes.indexOf('off') > -1) {
    capabilities.flashMode = 'off';
  }
};

navigator.mozCameras.getCamera(options).then(onSuccess)