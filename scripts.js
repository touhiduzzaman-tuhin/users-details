document.getElementById('loadUser').addEventListener('click', function(){
    const count = document.getElementById('count').value;
    const countNumber = parseInt(count);
    document.getElementById('count').value = '';
    displayUser(countNumber);
})

function displayUser(count){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(result => {
        let data = result.slice(0, count);
        document.getElementById('userDetails').innerHTML = '';
        document.getElementById('userInformations').innerHTML = '';
        const userDetails = document.getElementById('userDetails');
        for (let i = 0; i < data.length; i++) {
            const user = data[i];
            console.log(user.name);

            const userInfo = document.createElement('p');
            userInfo.innerHTML = `
                <p>
                    <strong>${user.name}</strong> --> <button onclick="userInformation(${user.id})" class='buttonDetails'> User Details</button>
                </p>
            `
            // document.getElementById('')
            userDetails.appendChild(userInfo);
        }
    })
}

function userInformation(id) {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const {name, address, email, phone, website, company} = data;
        document.getElementById('userInformations').innerHTML = `
            <h3 class='name'>Name: ${name}</h3>
            <h3>E-mail: ${email}</h3>
            <h3>Phone: ${phone}</h3>
            <h3>Company: ${company.name}</h3>
            <h3>Website: ${website}</h3>
            <h3>Address: ${address.street}, ${address.city} </h3>
        `
    })
}