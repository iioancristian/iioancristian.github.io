var electronic = false;
function modifica()
{
document.getElementById("id_salut").innerHTML = "hello";
  
  if(electronic == false) {
    document.getElementById("img_id").src = "electronic.jpg";
  
  }
  else
  {
    document.getElementById("img_id").src = "electric.jpg";
  }

}
