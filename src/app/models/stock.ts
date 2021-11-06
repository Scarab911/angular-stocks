export class Stock {
    
    constructor(
        private _name: string,
        private _code: string,
        public price: number,
        public previousPrice: number,
        public exchange: string,
        public favorite: boolean,
    ){

    }
    public get getName(): string {
        return this._name
    }

    public get getCode(): string {
        return this._code
    }
}
