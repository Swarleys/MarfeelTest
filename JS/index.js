// Init github and ui
const github = new Github();
const ui = new UI();

const button = document.querySelector("#button");

button.addEventListener("click", (e) => {
  e.preventDefault();
  const user = document.querySelector("#searchUser").value.trim();

  if (user !== "") {
    github.getUser(user).then(data => {
      if (data.profile.message === "Not Found") {
        ui.flashError(); //Falta la interfaz
      } else {
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  }
});


