const roller = document.querySelector("#skill_roller");

const dice = Array(6);

for(let i = 1; i <= 6; i++) {
    dice[i-1] = document.querySelector(`#dice${i}`);
}

roller.addEventListener('click', () => {
    for(let d of dice) {
        d.innerHTML = Math.floor(Math.random() * 6) + 1;
    }
})