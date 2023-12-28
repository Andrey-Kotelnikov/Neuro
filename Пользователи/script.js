const container = document.querySelector('.container');
let names;


function getUsers() {
  return fetch('https://reqres.in/api/users', {
    headers: {
      'Content-Type': 'application/json',
    }
  })
  .then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  })
}

getUsers().then(res => {
  names = res.data;

  names.sort((a, b) => {
    const nameA = a.first_name.toUpperCase();
    const nameB = b.first_name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });

  console.log(names);
  createCards(names)
})

function createCards(data) {
  data.forEach(el => {
    const {id, email, first_name, last_name, avatar} = el
  
    container.insertAdjacentHTML('beforeend',
      `<div class='card'>
        <div class="img" style="background-image: url(${avatar});"></div>
        <div>${id}</div>
        <div>${email}</div>
        <div>${first_name}</div>
        <div>${last_name}</div>
      </div>`
    );
  });
  
}