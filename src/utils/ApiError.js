class ApiError extends Error {
    constructor(
        statusCode,
        message = "Something went wrong",
        errors = [],
        stack = ""
    ) {
        super(message);  // Call the parent class (Error) constructor with the message
        this.statusCode = statusCode;  // HTTP status code for the error
        this.data = null;  // No data since it's an error response
        this.message = message;  // Error message (can be custom or default)
        this.success = false;  // Indicates failure (since it's an error)
        this.errors = errors;  // Any additional error details (e.g., validation errors)

        if (stack) {
            this.stack = stack;  // Use the provided stack trace if given
        } else {
            Error.captureStackTrace(this, this.constructor);  // Capture the current stack trace if no stack is provided
        }
    }
}
export { ApiError };
