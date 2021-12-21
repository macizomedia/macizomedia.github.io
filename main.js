const root = document.querySelector("#root");

const list = (arr) => {
  return arr.map((item) => {
    return `<p>${item}</p>`;
  });
};

const render = async () => {
  const response = await fetch("https://api.github.com/users/macizomedia");
  const data = await response.json();
  const { name, bio, avatar_url, followers, following, public_repos } = data;

  const template = `
    <div class="container">
      <div class="header">
        <img src="${avatar_url}" alt="${name}">
        <h1>${name}</h1>
        <p>${bio}</p>
      </div>
      <div class="content">

        <div class="info">
          <h2>Sobre mim</h2>
          <ul>
            <li>Seguidores: ${followers}</li>
            <li>Seguindo: ${following}</li>
            <li>Repositórios: ${public_repos}</li>
          </ul>
        </div>

        <div class="repositories">
          <h2>Repositórios</h2>
          <ul>
            ${list(data.repos_url).join("")}
          </ul>
        </div>

      </div>
    </div>
  `;

  root.innerHTML = template;
};

const init = async () => {
  await render();
};

const listAlt = (object) => {
  return Object.values(object).map((key) => {
    return `
    <hr>
    <li><strong>${key.kind}</strong>: ${key.stack}</li>
    `;
  });
};

const experiance = (data) => {
  const { position, company, startDate, endDate, location, tasks } = data;

  return `

    <div class="card-content">
      <h2>${position}</h2>
      <h3>${company}</h3>
      <h5><small>${startDate} - ${endDate}</small> // ${location}</h5>
      <div class="card-list">
        <ul class="experiance-list">
        ${list(tasks).join("")}
        </ul>
      </div>
    </div> `;
};

const education = (data) => {
  const { school, degree, major, startDate, endDate, Location } = data;
  return `
    <div class="card-content">
      <h2>${school}</h2>
      <h3>${degree}</h3>
      <p>${Location}</p>
      <p>${major}</p>
      <p>${startDate} - ${endDate}</p>
    </div>
    <div class="card-footer">
      <a href="#" target="_blank">See more</a>
    </div>
  `;
};

const main = async () => {
  const json = await fetch("./content.json");
  const data = await json.json();
  return `
    <div class="container">
      <div class="header">
        <h1>${data.name}</h1>
        <h2>${data.title}</h2>
      </div>
      <div class="content">
        <div class="experience">
          <h1>Experience</h1>
          ${data.experience.map((item) => experiance(item)).join("")}
        </div>
        <div class="aside">
          <div class="skills">
            <h1>Skills</h1>
            ${listAlt(data.skills).join("")}
          </div>
          <div class="education">
            <h1>Education</h1>
            ${data.education.map((item) => education(item)).join("")}
          </div>
        </div>
      </div>
    </div>
        `;
};

window.addEventListener("load", async () => {
  const html = await main();
  root.innerHTML = html;
});
