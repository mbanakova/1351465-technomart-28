var leftArrow=document.querySelector(".arrow-left"),rightArrow=document.querySelector(".arrow-right"),hammerdrill=document.getElementById("btn-1"),drill=document.getElementById("btn-2");leftArrow.addEventListener("click",function(e){e.preventDefault(),hammerdrill.checked=!0,leftArrow.disabled=!0,rightArrow.disabled=!1}),rightArrow.addEventListener("click",function(e){e.preventDefault(),drill.checked=!0,rightArrow.disabled=!0,leftArrow.disabled=!1});