const playerInput = document.querySelector("#player_input");
const log = document.querySelector("#log");

function useResponse(text) {
    log.innerHTML += `<b>Player:</b> ${text}<br>`
    fetch("/process_input", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({player_input: text}),
    }).then((response) => response.json()).then((data) => {
        log.innerHTML += data.message;
    }).catch((error) => {
        console.log("Error:", error);
    });
}

playerInput.addEventListener("keydown", (key) => {
    if(key.code === "Enter" && playerInput.value !== "") {
        useResponse(playerInput.value);
        playerInput.value = "";
    }
});