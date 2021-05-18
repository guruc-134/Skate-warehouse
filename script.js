const menu = document.querySelector(".sidebar-menu")
const sidebar = document.querySelector(".sidebar")
var sidebarShow = false
menu.addEventListener("click",()=>
{
    sidebarShow = !sidebarShow
    if (sidebarShow)
    {sidebar.style.display="block";
    menu.innerHTML = '<img src="https://img.icons8.com/ios-glyphs/50/000000/macos-close.png"/>'}
    else
    {
        sidebar.style.display="none";
    menu.innerHTML = '<img src="https://img.icons8.com/ios-filled/30/000000/menu--v3.png"/>'}
} )

function resize() {
    // console.log("height: ", window.innerHeight, "px");
    // console.log("width: ", window.innerWidth, "px");
    if(window.innerWidth >=700)
    {
        sidebarShow = true;
        sidebar.style.display="block";
    menu.innerHTML = '<img src="https://img.icons8.com/ios-glyphs/50/000000/macos-close.png"/>'}
  }
  
  window.onresize = resize;