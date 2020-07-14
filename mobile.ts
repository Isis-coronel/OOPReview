export class Mobile {
    public name:string;
    public model:string
    public trademark:string;
    public sdSize:number;
    public color: string;
    public cameraNumber:number;
    public price:number;
        constructor(name:string, model:string,trademark:string, sdSize:number,color:string, cameraNumber:number, price:number)

        {
            this.name = name ,
            this.model= model,
            this.trademark= trademark,
            this.sdSize = sdSize,
            this.color = color,
            this.price = price
        }        
    }

