const mongoose = require(`mongoose`);
const bcrypt = require(`bcrypt`);
const documents = require(`./documents/documents`);
const User = require(`./models/userModel`);
const Brand = require("./models/brandModel");
const Product = require("./models/productModel");
const Category = require("./models/categoryModel");

const seed = async () => {
  try {
    mongoose.connect(
      `mongodb+srv://3lliu444:loulian444@mycluster.fvlcvle.mongodb.net/eComProject?retryWrites=true&w=majority&appName=MyCluster`
    );
    console.log(`clearing collection data`);
    await User.deleteMany({});
    await Brand.deleteMany({});
    await Product.deleteMany({});
    await Category.deleteMany({});
    console.log(`old data cleared`);

    console.log(`seeding database`);
    const admin = await User.create({
      username: `admin`,
      password: await bcrypt.hash(`adminPW`, 4),
      email: `admin@gmail.com`,
      favorites: [],
      isAdmin: true,
    });

    const lou = await User.create({
      username: `louUN`,
      password: await bcrypt.hash(`louPW`, 4),
      email: `lou@gmail.com`,
      favorites: [],
      isAdmin: false,
    });

    await documents();

    console.log(`database seeded`);
  } catch (error) {
    console.log(error);
  } finally {
    mongoose.connection.close();
  }
};

seed();
