const throttleFunction = (func,delay) =>{
    let prev = 0;
    return(...args) =>{
        let now = new Date().getTime();
        if(now - prev>delay){
            prev= now;
            return func(...args);
        }
    }
}

document.querySelector("#center")
.addEventListener(
    "mousemove",
    throttleFunction((dets)=>{
   var div=document.createElement("div")
   div.classList.add("imageDiv");
   div.style.left = dets.clientX+ 'px';
   div.style.top = dets.clientY+ 'px';

   var img=document.createElement("img")
   img.setAttribute("src","https://www.mooc.org/hubfs/web-programming-languages.jpg");
   div.appendChild(img);

   document.body.appendChild(div);

   gsap.to(".imageDiv",{
    y: "0",
    opacity:3,
    ease: "Power3.out",
    duration:1.5
   })

   gsap.to(".imageDiv",{
    y: "100%",
    opacity:0,
    delay:2,
    ease: "power2.out",
    duration:1.5,
   })

   setTimeout(function(){
    div.remove();
   }, 2000)
}, 500 )
);