var buton=document.getElementById("buton");
buton.onclick=function(){
  var cnt =document.getElementById("counter");
  var crtcnt=parseInt(cnt.innerHTML);
  crtcnt++;
  cnt.innerHTML=crtcnt;                     
}
