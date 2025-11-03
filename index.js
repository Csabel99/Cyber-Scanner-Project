/*** Dark Mode ***
  
  Purpose:
  - Use this starter code to add a dark mode feature to your website.

  When To Modify:
  - [ ] Project 5 (REQUIRED FEATURE) 
  - [ ] Any time after
***/

// Step 1: Select the theme button
let themeButton = document.getElementById("theme-button");

// Step 2: Write the callback function
const toggleDarkMode = () => {
    // Write your code here
    document.body.classList.toggle("dark-mode");
    // This section will run whenever the button is clicked
}

// Step 3: Register a 'click' event listener for the theme button,
//             and tell it to use toggleDarkMode as its callback function

    themeButton.addEventListener("click", toggleDarkMode);


/*** Form Handling [PLACEHOLDER] [ADDED IN UNIT 6] ***/

/* Purpose:
  - When the user submits the RSVP form, the name and state they 
    entered should be added to the list of participants.

  When To Modify:
  - [ ] Project 6 (REQUIRED FEATURE)
  - [ ] Project 6 (STRETCH FEATURE) 
  - [ ] Project 7 (REQUIRED FEATURE)
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Any time between / after
***/

// Step 1: Add your query for the submit RSVP button here

const rsvpButton = document.getElementById("rsvp-button");
const participantList = document.querySelector(".rsvp-participants");

let count = 3;

 // Step 2: Write your code to manipulate the DOM here
const addParticipant = (person) => {
  if (person.name && person.hometown && person.email) {
    const newParticipant = document.createElement("p");
    newParticipant.textContent = `💻 ${person.name} from ${person.hometown} (${person.email}) is joining the Cyber Scanner mission.`;
    participantList.appendChild(newParticipant);

    count++;
    const rsvpCounter = document.getElementById("rsvp-count");
    rsvpCounter.textContent = `🛡️ ${count} people have RSVP'd to this event!`;
  }
};
// Step 3: Add a click event listener to the submit RSVP button here

/*** Form Validation [PLACEHOLDER] [ADDED IN UNIT 7] ***/

/*** Form Validation ***
  
  Purpose:
  - Prevents invalid form submissions from being added to the list of participants.

  When To Modify:
  - [ ] Project 7 (REQUIRED FEATURE)
  - [ ] Project 7 (STRETCH FEATURE)
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Any time between / after
***/

// Step 1: We actually don't need to select the form button again -- we already did it in the RSVP code above.

// Step 2: Write the callback function
const validateForm = (event) => {
  event.preventDefault();

  let containsErrors = false;

  // Get all the form inputs using elements
  const rsvpInputs = document.getElementById("rsvp-form").elements;

  // loops each input field from your RSVP 
  for (let i = 0; i < rsvpInputs.length; i++) {
    const input = rsvpInputs[i];
    if (input.type !== "text" && input.type !== "email") continue; // not a text or email input will skip

    if (input.value.trim().length < 2) {
      input.classList.add("error");// if the input is less than 2 character "error" will appear
      containsErrors = true; 
    } else {
      input.classList.remove("error"); // if not removes the error
    }
  }

  // Checks email format = "@"
  const emailInput = document.getElementById("rsvp-email");
  const email = emailInput.value.trim();
  
  if (!email.includes("@")) { // if there no @
    emailInput.classList.add("error"); // it wil be an error 
    emailInput.value = "Not an Email"; // Will be on Screen input
    containsErrors = true;
  } else {
    emailInput.classList.remove("error"); // if there is @
  }

  // if Inputs have no error, The person object will be created and be added
  if (!containsErrors) {
    const person = {
      name: document.getElementById("rsvp-name").value,
      hometown: document.getElementById("rsvp-state").value,
      email: document.getElementById("rsvp-email").value
    };
    addParticipant(person);
    toggleModal(person);

    // clears the input boxes so the user can put another person to type
    for (let i = 0; i < rsvpInputs.length; i++) {
      rsvpInputs[i].value = "";
    }
  }
};

// Step 3: Replace the form button's event listener with a new one that calls validateForm()
rsvpButton.addEventListener("click", validateForm); // run the funtion when user clicks button


/*** Animations [PLACEHOLDER] [ADDED IN UNIT 8] ***/
/*** Success Modal [PLACEHOLDER] [ADDED IN UNIT 9] ***/



const toggleModal = (person) => {
    let modal = document.getElementById("success-modal");
    let modalText = document.getElementById("modal-text");
    
    // TODO: Update modal display to flex
    modal.style.display = "flex";

    // TODO: Update modal text to personalized message

    modalText.textContent =  "Thanks for RSVPing, " + person.name + "! We can't wait to see you at the event!";

    // Start animation ever 500ms
    if (motionEnabled) {
    intervalId = setInterval(animateImage, 500)
    // Set modal timeout to 5 seconds
    }
    setTimeout(() => {
      // TODO: Update modal display to none
      modal.style.display = "none";
      clearInterval(intervalId);
    }, 5000);
}

// TODO: animation variables and animateImage() function

let rotateFactor = 0;
let  modalImage =  document.querySelector("#success-modal img");
let intervalId;

const animateImage = () => {
  if(rotateFactor === 0) {
    rotateFactor = -10;
  } else {
    rotateFactor = 0;
  }

  modalImage.style.transform = "rotate(" + rotateFactor + "deg)";
}

// Select the button
const closeButton = document.getElementById("close-modal-button");

// Create the function to hide the modal
const closeModal = () => {
  let modal = document.getElementById("success-modal");
  modal.style.display = "none";
  clearInterval(intervalId); // stop waving animation if still running
};

// Add click event listener
closeButton.addEventListener("click", closeModal);


// Reduce Motion button 
let motionEnabled = true;

const reduceMotion = () => {
  motionEnabled = !motionEnabled;
};

const reduceMotionButton = document.getElementById("reduce-motion-button");
reduceMotionButton.addEventListener("click", reduceMotion);
