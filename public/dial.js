document.addEventListener("DOMContentLoaded", function () {
    const phoneNumberText = document.getElementById("phone-number-text");
    const numberButtons = document.querySelectorAll(".number-button");
    const deleteButton = document.getElementById("delete-button");
    const callButton = document.getElementById("call-button");

    let phoneNumber = '';

    numberButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const number = button.getAttribute("data-number");
            phoneNumber += number;
            updatePhoneNumberDisplay();
        });
    });

    deleteButton.addEventListener("click", () => {
        phoneNumber = phoneNumber.slice(0, -1);
        updatePhoneNumberDisplay();
    });

    callButton.addEventListener("click", () => {
        // Implement your call functionality here using the `phoneNumber` variable
        // For demonstration purposes, we'll log the number to the console.
        console.log('Calling: ' + phoneNumber);
    });

    function updatePhoneNumberDisplay() {
        phoneNumberText.textContent = phoneNumber;
    }
});
