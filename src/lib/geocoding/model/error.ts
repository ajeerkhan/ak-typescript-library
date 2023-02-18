import { stat } from "fs";

 export default class ApiError {
    private code : string | undefined;
    private message?: string | undefined;
    private status : number | undefined;
    private data?: any;

    public constructor(code:string | undefined, message?: string | undefined, status ?: number | undefined, data?: any) {
        this.code = code;
        this.message = message;
    }

    public getCode(): string| undefined {
        return this.code;
    }

    public setCode(code: string): void {
       this.code = code;
    }

    public getMessage(): string | undefined {
        return this.message;
    }

    public setMessage(message: string): void {
       this.message = message;
    }

    public getStatus(): number | undefined {
        return  this.status;
    }

    public setStatus(status: number) : void {
        this.status = status;
    }

    public getData(){
        return  this.data;
    }

    public setData(data: any) : void {
        this.data = data;
    }
}