class ApiError extends Error {
    constructor(
        statusCode,
        message= "Something went wrong",
        errors = [],
        stack = ""
    ){
        super(message)  //This line calls the constructor of the parent class (Error) with the provided message. This initializes the error message property of the ApiError instance.
        this.statusCode = statusCode //The HTTP status code associated with the error.
        this.data = null //Additional data related to the error (set to null by default).
        this.message = message //The error message.
        this.success = false; //A boolean flag indicating whether the operation associated with the error was successful (set to false by default).
        this.errors = errors  // An array containing additional error details (set to an empty array by default).

    //    These lines handle the stack trace of the error. If a stack is provided (typically when rethrowing an error), it sets the stack property of the ApiError instance. If no stack is provided, it captures the stack trace using Error.captureStackTrace() and sets it for the instance.

        if (stack) {
            this.stack = stack
        } else{
            Error.captureStackTrace(this, this.constructor)
        }

    }
}

export {ApiError}