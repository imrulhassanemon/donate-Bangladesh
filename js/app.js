
// Donated for flood at nowakhali 

document.getElementById("donateNow").addEventListener("click", function(){
     
    
    const myBlance = getInputFromPara("my-blance")
    const inputDonation =  getInputFromInputFild("input-for-donate")
    console.log('input', inputDonation)
   
   if(myBlance < inputDonation){
        alert("insufficient balance")
        
   }
   else{
     
   const bdt = getInputFromPara("bdt")
   const donate = inputDonation + bdt
    console.log("donate", donate)
   const bl = myBlance;
  
   console.log("this is bl ", bl)

   
   const afterBlance = bl - inputDonation;
   console.log("after bal", afterBlance)
   //    history
   
   
   const history = document.createElement("div");
   history.className = ' text-black border border-border-color rounded-md p-8 mt-4 w-3/4 mx-auto';
   history.innerHTML = `
   <p class = "font-bold text-xl"> ${inputDonation} Taka is Donated for Flood at Noakhali, Bangladesh</p>
   <p class = "pt-4">Date: ${new Date()}</p>
   `;
   const historyContainer = document.getElementById("history-sec");
   
   historyContainer.appendChild(history)
   // history end 
      
   document.getElementById("my-blance").innerText = afterBlance;
   
   document.getElementById("bdt").innerText = donate;
   
   
   console.log(afterBlance)
   document.getElementById("input-for-donate").value = ' '
   }
   

})

// campain -2 

document.getElementById("donate-2").addEventListener("click", function(){
     const myBlance = getInputFromPara("my-blance")
     console.log("my blance", myBlance)
    const inputDonation =  getInputFromInputFild("input-for-donate-2")
    console.log(inputDonation)
   
   
   if(myBlance < inputDonation){
        alert("insufficient balance")
   }else{
   const bdt = getInputFromPara("bdt-2")
   const donate = inputDonation + bdt
    console.log("donate", donate)
   const bl = myBlance;
  
   console.log("this is bl ", bl)

   
   const afterBlance = bl - inputDonation;
   console.log("after bal", afterBlance)


   const history = document.createElement("div");
   history.className = ' text-black border border-border-color rounded-md p-8 mt-4 w-3/4 mx-auto';
   history.innerHTML = `
   <p class = "font-bold text-xl"> ${inputDonation} Taka is Donated for Flood Relief in Feni, Bangladesh</p>
   <p class = "pt-4">Date: ${new Date()}</p>
   `;
   const historyContainer = document.getElementById("history-sec");
   
   historyContainer.appendChild(history)
   // history end 
      
   document.getElementById("my-blance").innerText = afterBlance;
   
   document.getElementById("bdt-2").innerText = donate;
   
   
   console.log(afterBlance)
   document.getElementById("input-for-donate-2").value = ' '
   }
})



// campain-3 

document.getElementById("donate-3").addEventListener("click", function(){
     const myBlance = getInputFromPara("my-blance")
     console.log("my blance", myBlance)
    const inputDonation =  getInputFromInputFild("input-for-donate-3")
    console.log(inputDonation)
   
   
   if(myBlance < inputDonation){
        alert("insufficient balance")
   }else{
   const bdt = getInputFromPara("bdt-3")
   const donate = inputDonation + bdt
    console.log("donate", donate)
   const bl = myBlance;
  
   console.log("this is bl ", bl)

   
   const afterBlance = bl - inputDonation;
   console.log("after bal", afterBlance)


   const history = document.createElement("div");
   history.className = ' text-black border border-border-color rounded-md p-8 mt-4 w-3/4 mx-auto';
   history.innerHTML = `
   <p class = "font-bold text-xl"> ${inputDonation}  Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</p>
   <p class = "pt-4">Date: ${new Date()}</p>
   `;
   const historyContainer = document.getElementById("history-sec");
   
   historyContainer.appendChild(history)
   // history end 
      
   document.getElementById("my-blance").innerText = afterBlance;
   
   document.getElementById("bdt-3").innerText = donate;
   
   
   console.log(afterBlance)
   document.getElementById("input-for-donate-3").value = ' '
   }
})





// history part 

// function getElementinput(id){
//     const input = document.getElementById(id).value;
//     const inputInt = parseFloat(input);
//     return inputInt
// }




document.getElementById("history").addEventListener("click", function(){
     
     document.getElementById("mainContainer").classList.add("hidden");
     document.getElementById("historyContainer").classList.remove("hidden");


     document.getElementById("history").classList.add("bg-buttonColor");
     document.getElementById("donation").classList.remove("bg-buttonColor");
  
})


document.getElementById("donation").addEventListener("click", function(){
     document.getElementById("mainContainer").classList.remove("hidden");
     document.getElementById("historyContainer").classList.add("hidden");


     document.getElementById("history").classList.remove("bg-buttonColor");
     document.getElementById("donation").classList.add("bg-buttonColor");
     
})