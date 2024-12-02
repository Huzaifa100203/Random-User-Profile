// script.js
const userDisplay = document.getElementById('user-display');
const nextUserButton = document.getElementById('next-user');

// Function to fetch and display random user data
async function fetchRandomUser() {
  try {
    userDisplay.innerHTML = '<p class="loading">Loading user...</p>';
    
    const response = await fetch('https://api.freeapi.app/api/v1/public/randomusers/user/random');
    if (!response.ok) throw new Error('Failed to fetch user data');
    
    const user = await response.json();
    
    
    userDisplay.innerHTML = `
      <img src="${user.data.picture.large}" alt="Profile Picture">
      <h2>${user.data.name.first} ${user.data.name.last}</h2>
      <p>Email: ${user.data.email}</p>
      <p>Location: ${user.data.location.city}, ${user.data.location.country}</p>
    `;
  } catch (error) {
    userDisplay.innerHTML = `<p class="loading">Error: Failed to fetch Data</p>`;
  }
  
}

// Event listener for "Next User" button
nextUserButton.addEventListener('click', fetchRandomUser);

// Initial fetch
fetchRandomUser();