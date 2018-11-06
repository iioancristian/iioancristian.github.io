var electronic.jpg = false;
function modifica()
{
document.getElementById("id_salut").innerHTML = "hello";
  
  if(electronic.jpg == false) {
    document.getElementById("img_id").src = "electric.jpg";
  
  }
  else
  {
    document.getElementById("img_id").src = "electronic.jpg";
  }

}
