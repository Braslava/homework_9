const deleteModalNode = document.querySelector('.js-delete-modal')
const openButton = document.querySelector('.js-open-modal'); 
const deleteModalCloseNodes = deleteModalNode.querySelectorAll('.js-modal__close'); 


deleteModalCloseNodes.forEach((item) => {
    item.addEventListener('click', () => {
        deleteModalNode.classList.add('hidden'); 
    });
});

openButton.addEventListener('click', ()=> {
    deleteModalNode.classList.remove('hidden'); 
});

deleteModalNode.addEventListener('click', (event) => {
    const element = event.target; 
    const isOutsideContent = !!element.closest('.js-modal-content'); 

    if (isOutsideContent === false) {
        deleteModalNode.classList.add('hidden'); 
    }
})