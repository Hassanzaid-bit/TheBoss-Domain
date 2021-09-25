// const height = document.getElementsByTagName("nav").height();

// console.log(height)

$(document).ready(() =>
{
    /* sidebar */
    $("#hamburger").click(() =>
    {
        $("#sidebar").toggleClass("active");
    })
    $("#close-sidebar").click(() =>
    {
        $("#sidebar").toggleClass("active");
    })

    function sidebarToggle(){
        $(this).toggleClass("active")
    }
    $(".sidebar-contentbox").click(sidebarToggle)

    $("#footer-dropdown-id").click(()=>
    {
        $("#footer-dropdown-id").toggleClass("expanded");
        $("#footer-dropdown-content").toggleClass("dropdown-active")
    })


})