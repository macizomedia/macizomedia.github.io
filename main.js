const root = document.querySelector("#root");

window.addEventListener("load", () => {
  fetch("./content.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);

      return (root.innerHTML = `
              <div class="card">
                  <h2>${data.name}</h2>
                  <p>${data.title}</p>
              </div>
              <div class="card">
                  <h2>${JSON.stringify(data.experiance)}</h2>
              </div>
          `);
    });
}); 
