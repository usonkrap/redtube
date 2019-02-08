import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "RedTube";
    res.locals.routes = routes;
    next();
};
