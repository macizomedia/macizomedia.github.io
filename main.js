const root = document.querySelector("#root");

const toolbar = () => {
  return `
  <div class="toolbar">
    <i class="fas fa-language"></i>
    <p id="en">🇬🇧</p>
    <p id="de">🇩🇪</p>
  </div>
  `
}

const list = (arr) => {
  return arr.map((item) => {
    return `<li class="list">${item}</li>`;
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

const heading = (data) => {
  const { name, title, location, description, image } = data;
  {
    /* <div class="frame">
   <img src="${image}" alt="${name}">
 </div> */
  }
  return `
    <div class="header">
    <h1 class="name">${name}</h1>
    <p class="title">${title}</p>
    <p class="location">${location}</p>
    <p class="description">${description}</p>
  `;
};

const contact = (data) => {
  const { medium, email, phone, github, website, linkedin } = data;
  return `<div class="contact">
            <div class="link">
            <span style="font-size: 14px; color: gray;">
              <i class="fab fa-medium"></i>
              <a href="#">${medium}</a>
            </span>
            </div>
            <div class="link">
            <span style="font-size: 14px; color: gray;">
              <i class="fab fa-github"></i>
              <a href="#">${github}</a>
            </span>
            </div>
            <div class="link">
            <span style="font-size: 14px; color: gray;">
              <i class="fas fa-envelope"></i>
              <a href="#">${email}</a>
            </span>
            </div>
            <div class="link">
            <span style="font-size: 14px; color: gray;">
              <i class="fas fa-home"></i>
              <a href="#">${website}</a>
            </span>
            </div>
          </div>
  `;
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
      <p>${startDate} - ${endDate}</p>
    </div>
  `;
};

let language = ""
let data = null

const main = async (lang) => {
  const data_en = await fetch("./en_content.json");
  const data_de = await fetch("./de_content.json");
  const english = await data_en.json();
  const german = await data_de.json();

  lang === 'en' ? data = english : data = german

  return `
    <div class="container">
  
      ${toolbar()} 
      ${heading(data)}
      ${contact(data)}
      
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
  root.innerHTML = await main('en');
  let de_btn = document.getElementById('de')
  de_btn.addEventListener('click', async () => {
    root.innerHTML = await main('po');
  })
  let en_btn = document.getElementById('en')
  en_btn.addEventListener('click', async () => {
    console.log('clickes')
    root.innerHTML = await main('en');
  })
});
