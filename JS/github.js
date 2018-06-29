class Github {

  async getUser(user) {
    const profileRes = await fetch(`https://api.github.com/users/${user}`);
    const profile = await profileRes.json();

    const reposRes = await fetch(`https://api.github.com/users/${user}/repos`);
    const repos = await reposRes.json();

    return {
      profile,
      repos
    };
  }
}