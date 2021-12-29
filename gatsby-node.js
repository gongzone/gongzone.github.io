require("ts-node").register({ files: true });

const createPages = require("./gatsby-ts/gatsby-node.ts").createPages;

module.exports = {
  createPages,
};
