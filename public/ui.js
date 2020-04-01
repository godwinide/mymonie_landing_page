const bars = document.querySelector("#bars");
const menu = document.querySelector("#menu");

const state = {
    on:true
}

bars.addEventListener("click", () => {
    if(state.on){
        bars.classList.add("crossbar");
        state.on = !state.on;
        // open menu
        menu.classList.add("open-menu")
    }else{
        bars.classList.remove("crossbar");
        state.on = !state.on;
        // close menu
        menu.classList.remove("open-menu")
    }
})