export const setCorsHeaders = (req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "https://hudos.kz");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, PUT, POST, DELETE, OPTIONS"
    );
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
  };
  