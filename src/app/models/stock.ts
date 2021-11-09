export class Stock {
    
    constructor(
        public name: string,
        public code: string,
        public price: number,
        public exchange: string,
        public favorite: boolean,
        public readonly previousPrice: number
    ){}
}
