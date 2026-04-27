const boyInput = document.getElementById('boyName');
const girlInput = document.getElementById('girlName');

const result = document.getElementById("result");
const button = document.getElementById('calculateBtn');

button.addEventListener('click', (event) => {
    event.preventDefault();
    const boyName = boyInput.value.trim().toLowerCase();
    const girlName = girlInput.value.trim().toLowerCase();

    const boyLength = boyName.length;
    const girlLength = girlName.length;

    let ans;

    if (
        (boyName === "harsh" && girlName === "senior") ||
        (boyName === "kartik" && girlName === "senior")
    ) {
        ans = 100;
    } else {
        ans = 70 + ((boyLength + girlLength) % 21);
    }

    result.textContent = `Love Score: ${ans}% ❤️`;
});


console.log(`hey`)