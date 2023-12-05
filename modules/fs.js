const fs = require("fs");
const path = require("path");

// criar pasta
fs.mkdir(path.join(__dirname, "/test"), (error) => {
  if (error) {
    return console.log("Erro: ", error);
  }

  console.log("Pasta criada com sucesso!");
});

// Criar arquivo
fs.writeFile(
  path.join(__dirname, "/test", "test.txt"),
  "Hello node!",
  (error) => {
    if (error) {
      return console.log("Erro: ", error);
    }

    console.log("Criada com sucesso");
    // adicionar conteudo no arquivo
    fs.appendFile(
      path.join(__dirname, "/test", "test.txt"),
      "Hello world!",
      (error) => {
        if (error) {
          return console.log("Erro: ", error);
        }

        console.log("Modificado com sucesso");
        // ler arquivo
        fs.readFile(
          path.join(__dirname, "/test", "test.txt"),
          "utf8",
          (error, data) => {
            if (error) {
              return console.log("Erro: ", error);
            }

            console.log(data);
          }
        );
      }
    );
  }
);
