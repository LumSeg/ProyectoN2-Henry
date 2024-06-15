// /src/middlewares

const validateMovie = (req, res, next) => {
    const { title } = req.body;

    if (!title) {
        return res.status(400).json({
            error: "Falta el dato del titulo",
        });
    } else {
        next();
    }
};

module.exports = validateMovie;