export class hotel{
    hotel_name?:string;
    address?:string;
    desc?:string;
    constructor(json?:any){
        if(!json) return;
        this.hotel_name = json['name'];
        this.address = json['address'];
        this.desc = json['hotel_description'];
    }
}