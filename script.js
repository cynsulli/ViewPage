var list=[];
function renderItems(){
  document.body.querySelector(".display").innerHTML="";
  for(var i=0; i<list.length; i++){
    var ele =document.createElement("div");
    ele.innerHTML=list[i];
    document.body.querySelector(".display").appendChild(ele);
  }
}
function submit(){
  var text=document.body.querySelector(".text").value;
  if(text.length!==1){
    document.body.querySelector(".subMess").innerHTML="";
     list.push(text);
  }else{
    document.body.querySelector(".subMess").innerHTML="Needs more then 1 character"
  }
 
  renderItems();
}

document.body.querySelector(".submit").addEventListener("click", function(){
  submit();
})

renderItems();