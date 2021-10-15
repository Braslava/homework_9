const modal = document.getElementById("modal");

// Get the button that opens the modal
const btn = document.getElementById("delete_all");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// Get the overlay
const overlay = document.getElementById("overlay");

// When the user clicks on the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
    overlay.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
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