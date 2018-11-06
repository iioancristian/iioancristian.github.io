var electric = false;
function modifica()
{
document.getElementById("id_salut").innerHTML = "hello";

  
  if(electric == false) {
    document.getElementById("img_id").src = "electric.jpg";
  
  }
  else
  {
    document.getElementById("img_id").src = "electronic.jpg";
  }
}
