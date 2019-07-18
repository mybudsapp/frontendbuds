import React from 'react';

var i=0;


const RadialMenu = () =>{

let expand = () => {
        if(i==0){
            document.getElementById("menu").style.transform="scale(3)";
            document.getElementById("plus").style.transform="rotate(45deg)";
            i=1;
        }
        else{   document.getElementById("menu").style.transform="scale(0)";
        document.getElementById("plus").style.transform="rotate(0deg)";
        i=0;
    }
}






return(
    <div>
    <div class="toggle" id="toggle" onclick={() => {expand()}}>
<i class="fa fa-plus" id="plus"></i>
  </div>
<div class="menu" id="menu">
  <a href="#">
    <i class="fa fa-microphone"></i>
  </a>
   <a href="#">
    <i class="fa fa-user"></i>
  </a>
  <a href="#">
    <i class="fa fa-video-camera"></i>
  </a>
  <a href="#">
    <i class="fa fa-envelope"></i>
  </a>
  <a href="#">
    <i class="fa fa-camera"></i>
  </a>
  <a href="#">
    <i class="fa fa-bell"></i>
  </a>
</div>
</div>

)


}
export default RadialMenu
