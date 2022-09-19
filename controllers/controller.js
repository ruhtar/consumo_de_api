const axios = require("axios");

class Controller {
  static async pesquisaPerfil(req, response) {
    let nome, bio, imagem, location;
    const { name } = req.params;
    await axios
      .get(`https://api.github.com/users/${name}`)
      .then((res) => {
        nome = res.data.name;
        bio = res.data.bio;
        location = res.data.location;
        imagem = res.data.avatar_url;
        console.log(nome, bio, location, imagem);
        return response.send(
          "<h1>" +
            nome +
            "</h1><img src=" +
            imagem +
            "/><h1> " +
            bio +
            "</h1><h2> " +
            location +
            "</h2> "
        );
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
}

module.exports = Controller;
