const user = require("../controllers/user");

module.exports = (app) => {
  //Define the routes
  app.post("/api/v1/signup", user.signup);
  app.post("/api/v1/signin", user.signin);
};
