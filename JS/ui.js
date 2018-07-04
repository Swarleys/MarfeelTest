class UI {
  constructor() {
    this.profile = document.querySelector("#profile");
  }

  showProfile({ avatar_url, name, login, bio }) {
    this.profile.classList.add("profile");

    this.clearProfile();
    this.profile.innerHTML = `
      <img class="picture" src="${avatar_url}" alt="${name}">
      <p class="login">@${login}</p>
      <h1 class="name">${name || 'No name'}</h1>
      <p class="bio">${bio || 'This is the bio...'}</p>
    `;
  }

  showRepos(repos) {
    document.querySelector('.list').innerHTML = `
    <h2 class="repositories">Repositories</h2>
    ${this.renderRepos(repos)}
    `;
  }

  renderRepos(repos) {
    return repos.map(repo => {
      return `
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
      `}).join().replace(/,/g, '');
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
