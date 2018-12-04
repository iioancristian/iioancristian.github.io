document.getElementById("id_logic_version").innerHTML="Logic version: 1"
var synth = window.speechSynthesies;

function afisaza_voci()
{
	
	var lista_voci = synth.getVoices();
	
	for (var i = 0; i<lista_voci.length;i++)
		document.getElementById("id_voci").innerHTML += lista_voci[i].lang + "  " + lista_voci[i].name +"<br>";
	
	
}