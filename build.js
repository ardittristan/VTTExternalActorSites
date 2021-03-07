const path = require("path");
const empty = require("empty-folder");
const { exec } = require("child_process");
const FileHound = require("filehound");

empty(path.join(__dirname, "dist"), false, (o) => {
  if (o.error) console.error(o.error);

  FileHound.create()
    .paths(path.join(__dirname, "src"))
    .match("webpack.config.js")
    .find()
    .then((files) => {
      files.forEach((file) => {
        let ex = exec(`"./node_modules/.bin/webpack" --config "${file}" --mode production`);
        ex.stdout.pipe(process.stdout);
        ex.stderr.pipe(process.stderr);
      });
    });
});
