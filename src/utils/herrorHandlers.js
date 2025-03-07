import { configs } from "./config.js";
import {getMessageError} from "./getMessageError.js";

export const errorHandlers = (err, req, res, next) => {
    if(res.headersSent || configs.APP_DEBUG) {
        return next(err)
    }

    return res.status(500).json({
        message: getMessageError(err),
        url: req.originalUrl,
        date: new Date().toISOString(),
    })
}