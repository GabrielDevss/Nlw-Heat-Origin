const linksSocialMedia = {
  github: "GabrielDevss",
  youtube: "rocketseat",
  facebook: "gabriel.oliveira.psy",
  instagram: "gabriel.oliveirasz",
  twitter: "@Gabriel56525799",
};

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute("class");
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`;
  }
}

changeSocialMediaLinks();

function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
  .then(response => response.json())
  .then(data => {
    userName.textContent = data.name;
    userBio.textContent = data.bio;
    userLinkProfile.href = data.html_url;
    userImageProfile.src = data.avatar_url;
    userLogin.textContent = data.login
  });

}
getGithubProfileInfos();