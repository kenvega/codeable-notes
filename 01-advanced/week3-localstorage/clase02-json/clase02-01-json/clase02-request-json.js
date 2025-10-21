function getUsers() {
  // retorna una promesa...
  return new Promise((resolve, reject) => {
    // que después de 300ms...
    setTimeout(() => {
      // se resuelve con un string con formato JSON
      let json = `[
        {"id": 1, "name": "Leanne Graham", "email": "Sincere@april.biz"},
        {"id": 2, "name": "Ervin Howell", "email": "Shanna@melissa.tv"}
      ]`;

      resolve(json);
    }, 300);
  });
}

getUsers().then((data) => {
  console.log('data: ', data); // es un string en formato JSON
  const users= JSON.parse(data)
  console.log(users) // ya es un objeto/array

  for (const user of users) {
    const userCard = createUserCard(user)
    document.body.appendChild(userCard)
  }
})

function createUserCard(user) {
  const card = document.createElement('div')
  card.innerHTML = `
    <h2>${user.name}</h2>
    <p>Email: ${user.email}</p>
  `
  return card
}

