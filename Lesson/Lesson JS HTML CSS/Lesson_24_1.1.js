'use strict'

// fetch

fetch('https://reqres.in/api/users')
  .then((response) => {
    console.log(response);
    return response.json();
}).then((result) => {
  console.log(result);
}).catch((e) => {
  console.log(e);
});

async function fetchData() {
  let result = null;

  try {
    const response = await fetch('https://reqres.in/api/users');
    result = await response.json();
  } catch (e) {
    console.log(e);
  };

  console.log(result);
}

fetchData();