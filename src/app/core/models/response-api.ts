export class ResponseApi {
    isSuccessful: boolean;
    statusCode: number;
    message: string;
    result: any;


    constructor() {
        this.isSuccessful = false;
        this.statusCode = 0;
        this.message = "";
    }
}
