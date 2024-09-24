

function getInputFromInputFild(id){
    const input = document.getElementById(id).value;
    const inputInt = parseFloat(input)
    if(isNaN(inputInt) || inputInt <= 0 ){
        alert("Invalid Amount")
        return 0;
    }
    else{
        
        return inputInt
    }
}

function getInputFromPara(id){
    const input = document.getElementById(id).innerText;
    const inputInt = parseFloat(input)
    return inputInt;
}

// function showModal(){

//     const modal = document.createElement("div");
//     modal.className = "bg-white rounded-md p-4";
//     modal.innerHTML = `
//       <dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle">
//    <div class="modal-box">
//      <h3 class="text-lg font-bold">Hello!</h3>
//      <p class="py-4">Press ESC key or click the button below to close</p>
//      <div class="modal-action">
//        <form method="dialog">
//          <!-- if there is a button in form, it will close the modal -->
//          <button class="btn">Close</button>
//        </form>
//      </div>
//    </div>
//  </dialog>
    
//     `;

//     const modalContainer = document.getElementById("modal");
//     modalContainer.appendChild(modal)
// }


// function
