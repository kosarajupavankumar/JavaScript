const allStarsDiv = document.querySelector(".stars");

const stars = document.querySelectorAll(".star");
// use the event Propagation and event bubbling to add event listener to the parent element

allStarsDiv.addEventListener("click", (event) => {
    if (event.target.classList.contains("star")) {
        const starValue = parseInt(event.target.getAttribute("data-value"));
        stars.forEach((star, index) => {
            if (index < starValue) {
                star.classList.add("filled");
            } else {
                star.classList.remove("filled");
            }
        });

        // Update the rating id
        const ratingId = document.getElementById("rating");
        if (ratingId) {
            ratingId.textContent = `${starValue}`;
        }
    }
});

// when we doing hover effect it shopuld change to filled 
allStarsDiv.addEventListener("mouseover", (event) => {
    if (event.target.classList.contains("star")) {
        const starValue = parseInt(event.target.getAttribute("data-value"));
        stars.forEach((star, index) => {
            if (index < starValue) {
                star.classList.add("filled");
            } else {
                star.classList.remove("filled");
            }
        });
    }
});