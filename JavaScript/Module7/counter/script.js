// Use event delegation to handle the click event

const counter = document.querySelector(".counter");
const countValue = document.getElementById("count");

counter.addEventListener("click", (e) => {
    const target = e.target;

    // Check if the clicked element is a button
    if (target.classList.contains("btn")) {
        const id = target.getAttribute("id");

        // Perform actions based on the button's ID
        switch (id) {
            case "increment":
                countValue.innerHTML = parseInt(countValue.innerHTML) + 1;
                break;
            case "decrement":
                if (parseInt(countValue.innerHTML) > 0) {
                    countValue.innerHTML = parseInt(countValue.innerHTML) - 1;
                }
                break;
            case "reset":
                countValue.innerHTML = 0;
                break;
            default:
                break;
        }
    }
});
