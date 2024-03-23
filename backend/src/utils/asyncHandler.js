
// a function called asyncHandler that takes one argument, requestHandler.
const asyncHandler = (requestHandler) => {

    //This line returns another function that takes three arguments: req, res, and next. These are typical parameters for Express middleware functions.

    return (req, res, next) => {

        // This line converts the result of calling requestHandler(req, res, next) into a Promise using Promise.resolve(). It then attaches a .catch() to handle any errors that might occur during the execution of requestHandler. If an error occurs, it calls next(err) to pass the error to the next middleware or error-handling route.


        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }
}


export { asyncHandler }




// const asyncHandler = () => {}
// const asyncHandler = (func) => () => {}
// const asyncHandler = (func) => async () => {}


// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }