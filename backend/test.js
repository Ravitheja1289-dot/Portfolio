import fetch from 'node-fetch';

const testSubmission = {
  name: "Test User",
  email: "test@example.com",
  message: "This is a test submission"
};

fetch('http://localhost:5000/api/contact', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(testSubmission),
})
.then(response => response.json())
.then(data => console.log('Success:', data))
.catch(error => console.error('Error:', error)); 