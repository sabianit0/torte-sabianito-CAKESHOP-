<script>
    // Wait for the DOM to fully load
    document.addEventListener("DOMContentLoaded", function () {
        
        // Form submit button
        const form = document.getElementById("cake-form");
        const submitButton = form.querySelector("button[type='submit']");
        const cancelButton = form.querySelector("button[type='cancel']");

        // Alert when the Submit button is clicked
        submitButton.addEventListener("click", function (event) {
            // Prevent the default form submission
            event.preventDefault();

            // Validate form fields
            const flavor = form.querySelector("input[name='flavor']:checked");
            const size = form.querySelector("#size").value;
            const design = form.querySelector("#design").value.trim();
            const contact = form.querySelector("#contact").value.trim();

            if (!flavor || !size || !design || !contact) {
                alert("Please complete all required fields!");
            } else {
                alert("Your cake order has been placed successfully!");
                // Optionally, reset the form after successful submission
                form.reset();
            }
        });

        // Alert when the Cancel button is clicked
        cancelButton.addEventListener("click", function (event) {
            // Prevent the default behavior
            event.preventDefault();
            alert("Your order has been canceled.");
        });
    });
</script>
