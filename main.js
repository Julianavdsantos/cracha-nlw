const LinksSocialMedia = {
  github: 'Julianavdsantos',
  instagram: 'Juh_vdsantos',
  facebook: 'juliana.vieira.7965'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

/*pegando informaçoes no meu github. informaçao do json sendo consumida*/
function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  /*o fetch pega a resposta da url */
  fetch(url)
    /* A promisse vai pegar a resposta obtida pelo fetch, e o retorno vai para o . then() executar */
    .then(response =>
      response.json()
    ) /*arrow function| irar pegar o que esta guradado no then e passar para json*/
    .then(data => {
      userName.textContent =
        data.name /* o name,e onde esta o nome no json do github.textContent ira puxar o userbio e subistituir pela bio do git */
      userBio.textContent = data.bio
      /*o data ira armazenar a resposta da url em json| essa função ira puxar no html os elementos que quero substituir e colocar as informaçoes que estão no meu github */
      userLink.href = data.html_url
      /*trocando o link href */
      userPhoto.src = data.avatar_url
      userLogin.textContent = data.login
    })
}
getGitHubProfileInfos()
