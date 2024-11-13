const playerInput = document.querySelector("#player_input");
const log = document.querySelector("#log");

function useResponse(text) {
    log.innerHTML += `<b>Player:</b> ${text}<br>`
}

playerInput.addEventListener("keydown", (key) => {
    if(key.code === "Enter" && playerInput.value !== "") {
        useResponse(playerInput.value);
        playerInput.value = "";
    }
});