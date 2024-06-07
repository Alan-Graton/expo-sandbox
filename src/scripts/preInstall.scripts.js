const fs = require("fs");

const workingDir = process.env.EAS_BUILD_WORKINGDIR;

console.log("WORKING DIR: ", process.env.EAS_BUILD_WORKINGDIR);

console.log(
  "BEFORE: Has test file being created? ",
  fs.existsSync(`${workingDir}/meuArquivo.txt`)
);

// Exemplo de uso
fs.writeFileSync(
  `${workingDir}/meuArquivo.txt`,
  "Conteúdo do arquivo gerado durante o build."
);

console.log(
  "AFTER: Has test file being created? ",
  fs.existsSync(`${workingDir}/meuArquivo.txt`)
);
