
const tabs = document.querySelectorAll(".scrollable-tabs-container a");

const rightArrow = document.querySelector(".scrollable-tabs-container .right-arrow svg");

const leftArrow = document.querySelector(".scrollable-tabs-container .left-arrow svg");

const tabsList = document.querySelector(".scrollable-tabs-container ul");

const leftArrowContainer = document .querySelector(".scrollable-tabs-container .left-arrow ");

const rightArrowContainer = document.querySelector(".scrollable-tabs-container .right-arrow")


const Removeclassactive = () => {
    tabs.forEach((tab) =>{
        tab.classList.remove("active")
    })
}


tabs.forEach((tab) =>{
    tab.addEventListener("click", () =>{
        Removeclassactive()
        tab.classList.add("active");
       

    });
});

const manageIcon = () =>{
    if(tabsList.scrollLeft > 20){  // if scrollleft > 20 active class is add to the left arrow
        leftArrowContainer.classList.add("active")
    }
    else{
        leftArrowContainer.classList.remove("active") // else remove a active class to the left arrow
    }

    let maxScrollValue = tabsList.scrollWidth - tabsList.clientWidth - 20;   // scrollwidth is tells about total width of a scrollbar

    /// client width is about a client view element width

    console.log("scroll width: ", tabsList.scrollWidth);

    console.log("client width: ", tabsList.clientWidth);

    console.log(maxScrollValue)

    if(tabsList.scrollLeft >=maxScrollValue){
        rightArrowContainer.classList.remove("active")
    }
    else{
        rightArrowContainer.classList.add("active")
    }
}


rightArrow.addEventListener("click",() => {  // when the rightarrow is clicked is move left to 200 and it call the manage() function
    tabsList.scrollLeft +=200;
    manageIcon()
   
})


leftArrow.addEventListener("click",() => {
    tabsList.scrollLeft -=200;
    manageIcon()
   
})



tabsList.addEventListener("scroll",manageIcon) 