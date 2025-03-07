export const getMessageError = (err) => {
    if(err instanceof Error) {
        return {
            name: err.name,
            message: err.message,
            stack: err.stack,

        }
    }
    else if(err && typeof err === "object" && "message" in err) {
        return err.message;
    }else if(typeof err === "string") {
        return err;
    }
    return err;
}