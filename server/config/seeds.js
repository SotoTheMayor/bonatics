const db = require("./connection");
const { User } = require("../models");

db.once("open", async () => {
  await User.deleteMany();
  await User.create({
    userName: "Bonatics",
    email: "email@email.com",
    password: "password",
  });
  await User.create({
    userName: "Jason",
    email: "none@none.com",
    password: "password",
  });

  console.log("**Seeded!!");
  const test = await User.findOne({ userName: "Bonatics" });
  console.log(test);

  process.exit();
});
