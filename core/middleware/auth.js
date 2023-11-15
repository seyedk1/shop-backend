const jwt = require("jsonwebtoken");

exports.authenticated = (req, res, next) => {
    const authHeader = req.get("Authorization");

    try {
        if (!authHeader) {
            const error = new Error("something went wrong!");
            error.statusCode = 401;
            throw error;
        }

        const token = authHeader.split(" ")[1]; //Bearer Token => ['Bearer', token]

        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

        if (!decodedToken) {
            const error = new Error("something went wrong!");
            error.statusCode = 401;
            throw error;
        }

        req.user_id = decodedToken.user.user_id;
        req.user = decodedToken.user
        next();
    } catch (err) {
        next(err);
    }
};
