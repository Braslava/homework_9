const modal = document.getElementById("modal");

// Get the button that opens the modal
const btn = document.getElementById("delete_all");

// Get the button element X that closes the modal
const closeButton = document.getElementById("close");

// Get the button cancel that closes the modal
const cancelButton = document.getElementById("cancel");

// Get the overlay
const overlay = document.getElementById("overlay");

// When the user clicks on the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
    overlay.style.display = "block";
    cancelButton.focus();
}

// When the user clicks on button close (x), close the modal
closeButton.onclick = function () {
    modal.style.display = "none";
    overlay.style.display = "none";
}

// When the user clicks on button "cancel", close the modal
cancelButton.onclick = function () {
    modal.style.display = "none";
    overlay.style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it
// Does not work :( 
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        overlay.style.display = "none";
    }
}