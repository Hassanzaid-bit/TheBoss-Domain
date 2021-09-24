
const sidebar = document.getElementById("sidebar");
const link = document.getElementById("footer-dropdown-id")

const dropdownContent = document.getElementById("footer-dropdown-content")

// const height = document.getElementsByTagName("nav").height();

// console.log(height)


function showSidebar(){
    sidebar.classList.toggle("active")
}

function myfunction(){
    link.classList.toggle("expanded")
    dropdownContent.classList.toggle("dropdown-active")
}