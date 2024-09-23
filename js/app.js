


document.getElementById("donateNow").addEventListener("click", function(){
     
    
    const myBlance = getInputFromPara("my-blance")
    const inputDonation =  getInputFromInputFild("input-for-donate")
   
   
   if(myBlance < inputDonation){
        alert("insufficient balance")
   }else{
   const bdt = getInputFromPara("bdt")
   const donate = inputDonation + bdt
    console.log("donate", donate)
   const bl = myBlance;
  
   console.log("this is bl ", bl)

   
   const afterBlance = bl - inputDonation;
   console.log("after bal", afterBlance)
   document.getElementById("my-blance").innerText = afterBlance;
   
   document.getElementById("bdt").innerText = donate;
   
   
   console.log(afterBlance)
   document.getElementById("input-for-donate").value = ' '
   }
   

   

})


// history part 


document.getElementById("")