const addbutton = document.querySelector(".add_button");
const deletebutton = document.querySelector(".delete_button");
const model = document.querySelector(".model_container");
const priorityColor = document.querySelectorAll(".priority_color");
const textArea = document.querySelector(".textarea_container");
const toolboxPriority = Array.from(
  document.querySelector(".toolbox-priority").children
);

deletebutton.addEventListener("click", (e) => {
  // toggle the class red to the delete button
  deletebutton.children[0].classList.toggle("red");
});

toolboxPriority.forEach((priority) => {
  // filter the priority color from the toolbox
  const color = priority.classList[1];
  // add click event listener to the priority color
  priority.addEventListener("click", () => {
    // filter the ticket based on the color clicked
    const allTickets = document.querySelectorAll(".ticket_container");

    allTickets.forEach((ticket) => {
      const ticketColor = ticket.children[0].style.backgroundColor;
      console.log(ticketColor);
      if (ticketColor == color) {
        ticket.style.display = "block";
      } else {
        ticket.style.display = "none";
      }
    });
  });

  // when docuble click show all the tickets
  priority.addEventListener("dblclick", () => {
    const allTickets = document.querySelectorAll(".ticket_container");
    allTickets.forEach((ticket) => {
      ticket.style.display = "block";
    });
  });
});

addbutton.addEventListener("click", () => {
  model.style.display = "flex";
});

model.addEventListener("keypress", (e) => {
  console.log(e);

  if (e.key != "Enter") {
    return;
  }

  console.log("save and close the card");
  model.style.display = "none";
});

function createTicket(priority, content) {
  console.log(`creating new ticket with ${priority} and ${content}`);

  // create Id for the ticket contains only numbers and it should be  UUID (Universally Unique Identifier)

  const id = Date.now().toString();
  console.log(id);

  // Create a new ticket and append it to the pending_count containerr
  const ticket = document.createElement("div");
  ticket.classList.add("ticket_container");

  const ticketColor = document.createElement("div");
  ticketColor.classList.add("ticket_color");
  ticketColor.style.backgroundColor = priority;

  const ticketId = document.createElement("div");
  ticketId.classList.add("ticket_id");
  ticketId.textContent = `#${id}`;

  const ticketArea = document.createElement("div");
  ticketArea.classList.add("ticket_area");
  ticketArea.textContent = content;

  const lockUnlock = document.createElement("div");
  lockUnlock.classList.add("lock_unlock");

  ticket.append(ticketColor, ticketId, ticketArea, lockUnlock);

  document.querySelector(".pending_count").appendChild(ticket);

  // add click event listener to the  ticket_color to display the color when we click on it

  ticketColor.addEventListener("click", (e) => {
    const colors = ["pink", "blue", "green", "purple"];
    const currentColor = e.target.style.backgroundColor;
    console.log(currentColor);
    let idx = colors.indexOf(currentColor);
    idx++;
    idx = idx % 4;
    e.target.style.backgroundColor = colors[idx];
  });

  ticket.addEventListener("click", (e) => {
    console.log(deletebutton.children);

    if (deletebutton.children[0].classList.contains("red")) {
      const ticketContainer = e.currentTarget;
      console.log(ticketContainer);
      ticketContainer.remove(); // Use remove() to delete the ticket from the DOM
    }
  });
}

priorityColor.forEach((color) => {
  // only one priority color can be active at a time
  color.addEventListener("click", (e) => {
    // remove the class active from all the priority color
    priorityColor.forEach((color) => {
      color.classList.remove("active");
    });

    // append the class active to the color
    color.classList.add("active");

    // find the selected color
    const selectedColor = e.target.classList[1];
    console.log(selectedColor);
    console.log(e.target);

    const content = textArea.value;
    console.log(content);

    createTicket(selectedColor, content);

    // reset the textarea content
    textArea.value = "";

    // close the model
    model.style.display = "none";
  });
});
