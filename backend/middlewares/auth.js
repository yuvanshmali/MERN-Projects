import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  const { token } = req.headers;
  // check if token is available or not
  if (!token) {
    return res.json({ success: false, message: "Not Authorized, Login Again" });
  }
  // verify when token available
  try {
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    req.body = req.body || {};
    req.body.userId = token_decode.id;
    // We send this id as object while sending the token to user
    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

export default authMiddleware;
