document.getElementById('allset').addEventListener("click", async function(event) {
    const reader=new FileReader();
    const name=document.getElementById('itemName').value;
    const description=document.getElementById('itemDescription').value;
    const price = document.getElementById('itemPrice').value;
    const category = document.getElementById('itemCategory').value;
    let imageData =document.getElementById('itemImage').files[0];
    await reader.readAsDataURL(imageData);
    reader.onload = function(event){
        imageData = event.target.result;
        console.log(imageData);

        console.log(name, price, category, description, imageData);
        fetch('http://localhost:3000/addItem', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, description, price, category, imageData})
        })
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log('Item added successfully:', data);
        })
        .catch(function(error) {
            console.error('Error adding item:', error);
        });
    };
});

document.getElementById('loginButton').addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    fetch('http://localhost:3000/logIn', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    .then(response =>{
    //.then(data => {
        console.log(response);
        if (response.status===200) {
            document.getElementById('loginForm').style.display = 'none';
            //document.getElementById('chatApp').style.display = 'block';
        } else {
            alert('Login failed');
        }
    //})
    })
    .catch(error => console.error('Error:', error));
})

document.getElementById("showImg").addEventListener("click",async()=>{
    const x=await fetch('http://localhost:3000/getItems', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    const y=await x.json();
    //console.log(y.items[0].image);

    const node=document.createElement("img");
    node.src=y.items[0].image;
    node.style.width=500;
    node.style.height=500;
    //node.style.display='fit-content'
    document.getElementById("addElement").appendChild(node);
})