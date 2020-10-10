const user = require("../controllers/user");
module.exports = (app) => {
  app.post("/api/v1/signup", user.signup);
  app.post("/api/v1/signin", user.signin);
};
