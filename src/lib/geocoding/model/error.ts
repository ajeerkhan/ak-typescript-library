 export default class ApiError {
    private code : string | undefined;
    private message: string | undefined;

    public constructor(code:string | undefined, message: string) {
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
}