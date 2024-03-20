
const bar = document.getElementById("tabBar");

const sidebar = document.getElementById("sidebar");


bar.addEventListener("click",function(){
    sidebar.classList.toggle("sidebar-small")
})