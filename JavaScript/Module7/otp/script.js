// Verify that the input fields only take a number as valid input.
// Verify that the focus movies to the next input field whenever a single digit is entered.
// Verify that when Backspace or Delete key is pressed, it removes the input from current field.
// Verify that when Backspace or Delete key is pressed, the focus gets back to previous field.

const inputFields = document.querySelectorAll(".input");

inputFields.forEach((input, index) => {
    input.addEventListener("keydown", (e) => {
        if (e.key === "Backspace" || e.key === "Delete") {
            if (input.value.length === 0 && index > 0) {
                inputFields[index - 1].focus();
            } else {
                input.value = "";
            }
        }
    });

    input.addEventListener("input", (e) => {
        if (!/^\d$/.test(e.data)) {
            input.value = "";
        }

        if (input.value.length === 1 && index < inputFields.length - 1) {
            inputFields[index + 1].focus();
        }
    });
});
