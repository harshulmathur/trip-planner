export class newDest{
    name?:string;
    from?:string;
    to?:string;
    constructor(json?:any){
        if(!json) return;
        this.name = json['destName'];
        this.from = json['from'];
        this.to = json['to'];
    }
}