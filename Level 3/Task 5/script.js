document.addEventListener('DOMContentLoaded', () => {
    const userList = document.getElementById('user-list');

    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(users => {
            users.forEach(user => {
                const userDiv = document.createElement('div');
                userDiv.className = 'user';

                const userName = document.createElement('h2');
                userName.textContent = user.name;

                const userEmail = document.createElement('p');
                userEmail.textContent = `Email: ${user.email}`;

                const userPhone = document.createElement('p');
                userPhone.textContent = `Phone: ${user.phone}`;

                const userAddress = document.createElement('p');
                userAddress.textContent = `Address: ${user.address.suite}, ${user.address.street}, ${user.address.city}, ${user.address.zipcode}`;

                userDiv.appendChild(userName);
                userDiv.appendChild(userEmail);
                userDiv.appendChild(userPhone);
                userDiv.appendChild(userAddress);

                userList.appendChild(userDiv);
            });
        })
        .catch(error => {
            console.error('Error fetching users:', error);
            const errorMessage = document.createElement('p');
            errorMessage.textContent = 'Error fetching users. Please try again later.';
            userList.appendChild(errorMessage);
        });
});