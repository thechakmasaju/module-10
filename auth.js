const jwt = require('jsonwebtoken');

function generateToken(userId, secretKey) {
  const token = jwt.sign({ userId }, secretKey);
  return token;
}

module.exports = generateToken;
const jwt = require('jsonwebtoken');

function authenticate(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const decoded = jwt.verify(token, secretKey);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Unauthorized' });
  }
}

module.exports = authenticate;
