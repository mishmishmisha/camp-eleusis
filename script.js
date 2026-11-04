// Step 4a: Find all our components on the page
const envelopeScreen = document.getElementById('envelope-screen');
const detailsScreen = document.getElementById('details-screen');
const ticketScreen = document.getElementById('ticket-screen');

const openBtn = document.getElementById('open-btn');
const submitBtn = document.getElementById('submit-btn');

const guestNameInput = document.getElementById('guest-name');
const ticketHolderName = document.getElementById('ticket-holder-name');
const ticketNumber = document.getElementById('ticket-number');

// Step 4b: What happens when you click "Open Invitation"
openBtn.addEventListener('click', function() {
  envelopeScreen.classList.remove('active-screen'); // Hide Envelope
  detailsScreen.classList.add('active-screen');    // Show Details
});

// Step 4c: What happens when you type your name and click "Submit"
submitBtn.addEventListener('click', function() {
  const enteredName = guestNameInput.value.trim();

  // Make sure they didn't leave the name blank
  if (enteredName === "") {
    alert("Please enter your name before getting a ticket!");
    return;
  }

  // Put their name on the ticket
  ticketHolderName.innerText = enteredName;

  // Make up a random lucky draw ticket number
  const randomTicketNum = Math.floor(1000 + Math.random() * 9000);
  ticketNumber.innerText = "#" + randomTicketNum;

  // Switch screens to the ticket view
  detailsScreen.classList.remove('active-screen'); // Hide Details Form
  ticketScreen.classList.add('active-screen');    // Show the Ticket!
});
