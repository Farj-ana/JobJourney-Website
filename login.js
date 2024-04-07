document.getElementById('loginForm').addEventListener('submit', function(event) {
    // Prevent the form from actually submitting
    event.preventDefault();
    
    // Get the values from the form
    var phone = document.getElementById('phone').value;
    var password = document.getElementById('password').value;

    // Construct the request payload
    var data = {
        phone: phone,
        password: password
    };

    // Make the fetch API call to the login endpoint
    fetch('https://job-journey-backend.onrender.com/user/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // Include the Authorization header if required for all requests or handle appropriately
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTE1NDc2NTQsImZpcnN0X25hbWUiOiJBYmlyIiwiaWQiOjgsImxhc3RfbmFtZSI6Ik1vZGVyYXRvciIsInBob25lIjoiMDE1NTc3MTE3NTAifQ.kQg3FaGxEd7kx7rC7wSpb8XGKaD6zViBY393kMg-BJw'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json()) // Assuming the response is JSON
    .then(data => {
        console.log('Success:', data);
        // Handle success, such as redirecting the user or showing a success message
    })
    .catch((error) => {
        console.error('Error:', error);
        // Handle errors, such as showing an error message to the user
    });
});
