document.getElementById("id_logic_version").innerHTML = "Logic version: 2019.02.11.1";

var flash = instanceOfCameraControl.capabilities.flashModes

function flash()
{
	onSuccess();
	
	
}
var options = {
  camera: navigator.mozCameras.getListOfCameras()[0]
};
 
function onSuccess(camera) {
  var flash = camera.camera.capabilities.flashModes;

  flash.forEach(function (value) {
    console.log(value)
  });
};

navigator.mozCameras.getCamera(options).then(onSuccess);