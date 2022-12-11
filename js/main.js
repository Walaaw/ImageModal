var allproducts= Array.from(document.querySelectorAll("figure img")); 
var previose =document.querySelector(".previose");
var next =document.querySelector(".next");
var closeicon=document.querySelector(".close");
var imglayer= document.querySelector(".layer img");
var layer= document.querySelector(".layer")
var index;

for (var i = 0; i< allproducts.length; i++) {
      allproducts[i].addEventListener("click",function(e){
       layer.classList.remove("d-none");
        index=allproducts.indexOf(e.target);
       var src=e.target.getAttribute("src");
       imglayer.setAttribute("src",src);
       imglayer.style.height="300px";
      })
    }
    function getnext(){
      index++;
      if(index==allproducts.length){
        index=0;
      }
      var src= allproducts[index].getAttribute("src");
      imglayer.setAttribute("src",src);
      imglayer.style.height="300px";
    }
    function getprev(){
      index--;
      if(index==-1){
        index=(allproducts.length) -1;
      }
      var src= allproducts[index].getAttribute("src");
      imglayer.setAttribute("src",src);
      imglayer.style.height="300px";
    }
    function close(){
      document.querySelector(".layer").classList.add("d-none")
    }
next.addEventListener("click",getnext);
previose.addEventListener("click",getprev);
closeicon.addEventListener("click",close);
document.addEventListener("keyup",function(e){
  console.log(e);
  if(e.key=="ArrowRight"){
    getnext();
  }
  else if(e.key=="ArrowLeft"){
    getprev();
  }
  else if(e.key=="Escape"){
    close();
  }
}
)
layer.addEventListener("click",function(e){
  if(e.target==layer){
    close();
  }
})

