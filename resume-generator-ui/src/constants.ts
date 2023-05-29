const configuration = {
  auth0: {
    domain: "YOUR_DOMAIN",
    clientId: "YOUR_CLIENT_ID",
    audience: "https://YOUR_DOMAIN/api/v2/",
    scopes: "profile email read:current_user"
  }

}

export default configuration;