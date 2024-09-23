
// Donated for flood at nowakhali 

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
   //    history
   
   
   const history = document.createElement("div");
   history.className = ' text-black border border-border-color rounded-md p-8 mt-4';
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
   history.className = ' text-black border border-border-color rounded-md p-8 mt-4';
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
   history.className = ' text-black border border-border-color rounded-md p-8 mt-4';
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



// const inputDonation =  getElementinput("input-for-donate");
// const myBlance = getElementinput("my-blance");

// document.getElementById("history").addEventListener("click", function(){

//      const bdt = getInputFromPara("bdt")
//    const donate = inputDonation + bdt
//     console.log("donate", donate)
//    const bl = myBlance;

   
//    const afterBlance = bl - inputDonation;


//      const history = document.createElement("div");
//      history.className = 'bg-blue text-black border rounded-md';
//      history.innerHTML = `
//      <p> ${afterBlance} taka is donated </p>
//      `;
//      const historyContainer = document.getElementById("history-sec");

//      history.appendChild(historyContainer)

//      const hidedonation = document.getElementById("mainContainer");
//      hidedonation.classList.add("hidden")
// })