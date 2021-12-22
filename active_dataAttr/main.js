var lists = document.querySelectorAll(".list li"),
    boxes = document.querySelectorAll(".boxes .box"),
    listsArray = Array.from(lists),
    boxArray = Array.from(boxes);

    listsArray.forEach(function(li){
          li.addEventListener("click",function(){
            listsArray.forEach((li)=>{
              li.classList.remove("active");
              this.classList.add("active");
            })
      
            boxes.forEach((box)=>{
              box.style.display = 'none';
              document.querySelectorAll(this.dataset.go).forEach((ele)=>{
                ele.style.display = 'flex';
              })
      
            })
          });
          
    })

   






