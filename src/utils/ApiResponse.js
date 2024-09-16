class ApiResponse {
    constructor(statusCode, data, message = "Success") {
        this.statusCode = statusCode;  // corrected typo
        this.data = data;
        this.message = message;
        this.success = statusCode < 400;
    }
}
export {ApiResponse}