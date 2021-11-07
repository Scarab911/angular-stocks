export class Stock {
    
    constructor(
        public name: string,
        public code: string,
        public price: number,
        public previousPrice: number,
        public exchange: string,
        public favorite: boolean,
    ){}

    public getName(): string {
        return this.name
    }

    public getCode(): string {
        return this.code
    }
}
