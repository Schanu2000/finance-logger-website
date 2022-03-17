export class InVoice {
    // readonly client: string;
    // private details: string;
    // amount: number;
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owns ${this.amount} for ${this.details}`;
    }
}
