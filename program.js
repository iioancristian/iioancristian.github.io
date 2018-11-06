var electronic = false;
function modifica()
{
document.getElementById("id_salut").innerHTML = "hello";
document.getElementById("img_id").src = "electric.jpg";
  
  if(electronic == false) {
    document.getElementById("img_id").src = "electric.jpg";
  
  }
  else
  {
    document.getElementById("img_id").src = "electronic.jpg";
  }
  document.getElementById("img_id").src = "electric.jpg";
}
