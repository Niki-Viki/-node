const axios = require("axios");
const fs = require("fs");
const path = require("path");
const http = require("http");

const { Sequelize } = require("sequelize");

(async () => {
  const sequelize = new Sequelize("social_network", "root", "yahz", {
    database: "social_network",
    host: "localhost",
    dialect: "mysql",
  });

  const Post = sequelize.define(
    "Post",
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        autoIncrement: true,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      body: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      tableName: "posts",
      timestamps: false,
    }
  );
  await Post.sync({
    alter: true,
    force: false,
  });
  const post = await Post.create({
    title: "Я что-то старое, но вроде и новое",
    body: "sdvsdv",
  });

  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();
