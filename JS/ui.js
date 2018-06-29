class UI {
  constructor() {
    this.profile = document.querySelector("#profile");
  }

  showProfile(profile) {
    this.profile.classList.add("profile");

    this.clearProfile();
    this.profile.innerHTML = `
      <img class="picture" src="${profile.avatar_url}" alt="${profile.name}">
      <p class="login">@${profile.login}</p>
      <h1 class="name">${profile.name || "No name"}</h1>
      <p class="bio">${profile.bio || "this is the bio..."}</p>
    `;
  }

  showRepos(repos) {
    let output = "";

    repos.forEach(repo => {
      output += `
      <li class="border-bottom">
        <span class="left">
         <a href=""></a> ${repo.name}
        </span>
        <span class="right">
          <img src="icons/star.svg" alt="stars class="stars"> &nbsp ${repo.stargazers_count}
          &nbsp
          <img src="icons/fork.svg" alt="forks" class="forks"> &nbsp ${repo.stargazers_count}
        </span>
      </li>
      `;
    });

    document.querySelector('.list').innerHTML = `
    <h2 class="repositories">Repositories</h2>
    ${output}
    `;
  }

  flashError() {
    this.clearProfile();
    document.querySelector('#flash-error').innerHTML = `
    <div class="error">
      <p>Does not exist</p>
    </div>
    `
  }

  clearProfile() {
    document.querySelector("#profile").innerHTML = '';
    document.querySelector('.list').innerHTML = '';
    document.querySelector('#flash-error').innerHTML = '';
  }


}
