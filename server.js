if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const http = require("http");
const { postgraphile } = require("postgraphile");
const PgManyToManyPlugin = require("@graphile-contrib/pg-many-to-many");
const PgSimplifyInflector = require("@graphile-contrib/pg-simplify-inflector")

http
  .createServer(
    postgraphile(
      process.env.DB_URL,
      "public",
      {
        watchPg: true,
        graphiql: true,
        enhanceGraphiql: true,
        dynamicJson: true,
        ignoreRBAC: false,
        ignoreIndexes: false,
        appendPlugins: [
          PgManyToManyPlugin,
          PgSimplifyInflector
        ]
      }
    )
  )
  .listen(process.env.PORT || 5000);