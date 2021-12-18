var count=0;

const value=document.querySelector("#value");
const btns=document.querySelectorAll(".btn");

btns.forEach(function(btn){
    btn.addEventListener("click", function(e){
        const clsLists=e.currentTarget.classList;
        if(clsLists.contains("decrease")){
            count--;
        }
        else if(clsLists.contains("increase")){
            count++;
        }
        else if(clsLists.contains("reset")){
            count=0;
        }
        value.textContent=count;
        if(count<0){
            value.style.color="red";
        }
        else if(count>0){
            value.style.color="green";
        }
        else{
            value.style.color="black";
        }
    });
});
