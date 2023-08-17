export const activeClassOfChatListItem = () => {
    const array = document.querySelectorAll('.chatItemList-wrapper');
    for(let i=0; i < array.length; i++)
        {
            if (array[i].classList.contains('active')){
                array[i].classList.remove('active');
            }
        }
}