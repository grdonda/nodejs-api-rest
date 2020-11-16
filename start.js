const api = require("./api");
const { getConfiguration } = require("./app/common/config");
const config = getConfiguration();

if (process.env.NODE_ENV !== "testing") {
  api.listen(config.port);
  console.log(` Api rodando.... ${config.port}`);
}
