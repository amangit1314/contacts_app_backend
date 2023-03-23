const { constants } = require("../constants");

const errorHandler = (err, req, res, next) => {
  const statusCode = req.statusCode ? res.statusCode : 500;

  switch (statusCode) {
    case constants.VALIDATION_ERROR:
      res.json({
        title: "Validation Failed ❗",
        message: errorHandler.message,
        stackTrace: errorHandler.stack,
      });
      break;

    case constants.NOT_FOUND:
      res.json({
        title: "Not Found ⛔",
        message: errorHandler.message,
        stackTrace: errorHandler.stack,
      });
      break;

    case constants.UNAUTHORIZED:
      res.json({
        title: "Unauthorized ⚠",
        message: errorHandler.message,
        stackTrace: errorHandler.stack,
      });
      break;

    case constants.FORBIDDEN:
      res.json({
        title: "Forbidden ❌",
        message: errorHandler.message,
        stackTrace: errorHandler.stack,
      });
      break;
    case constants.SERVER_ERROR:
      res.json({
        title: "Server Error 🤬",
        message: errorHandler.message,
        stackTrace: errorHandler.stack,
      });
      break;

    default:
      console.log("No Error, All good 😎 !");
      break;
  }
};

module.exports = errorHandler;
