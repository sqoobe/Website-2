const toggleButton = document.getElementById('toggle-btn')
const sidebar = document.getElementById('sidebar')

//closes sidebar
function toggleSidebar(){
    sidebar.classList.toggle('close')
    toggleButton.classList.toggle('rotate') //rotate icon

    //closes dropdown menu when toggle sidebar
    closeAllSubMenus()
}

//show dropdown menu list
function toggleSubMenu(button){

//show dropdown menu and closes other if it is shown
    if(!button.nextElementSibling.classList.contains('show')){
        closeAllSubMenus()
    }

    button.nextElementSibling.classList.toggle('show')
    button.classList.toggle('rotate')//rotate icon


    //opens sidebar if you click a dropdown menu when sidebar closed
    if(sidebar.classList.contains('close')){
        sidebar.classList.toggle('close')
        toggleButton.classList.toggle('rotate')
    }
}


//closes dropdown menu when toggle sidebar
function closeAllSubMenus(){
    Array.from(sidebar.getElementsByClassName('show')).forEach(ul => {
        ul.classList.remove('show')
        ul.previousElementSibling.classList.remove('rotate')
    })
}