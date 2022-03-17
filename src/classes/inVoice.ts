import { HasFormatter } from '../interfaces/HasFormatter.js';

export class InVoice implements HasFormatter{
    // readonly client: string;
    // private details: string;
    // amount: number;

    constructor(
        readonly client: string,
        private details: string,
        public amount: number
    ) {}

    format() {
        return `${this.client} owns ${this.amount} for ${this.details}`;
    }
}
