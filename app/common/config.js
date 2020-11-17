const environment = process.env.env || "local";

const config = {
  local: {
    port: 3210,
    db: {
      user: "grdonda",
      pass: "",
      host: "cluster0.x5dvn.mongodb.net",
      port: 27017,
      database: "apirest",
    },
  },
  dev: {},
  hom: {},
  prd: {},
};

exports.getConfiguration = () => {
  return config[environment];
};
