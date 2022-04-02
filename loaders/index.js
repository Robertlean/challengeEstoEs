const ExpressServer = require("./server/expressSErver");
const config = require("../config");
const logger = require("./logger");

module.exports = async () => {
  const server = new ExpressServer();
  logger.info("Express loaded.");

  server.start()
  logger.info(`Server listening on port localhost:${config.port}`)
}