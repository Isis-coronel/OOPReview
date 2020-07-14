export class Mobile {
    private name:string;
    private model:string
    private trademark:string;
    private sdSize:number;
    private is5g: boolean;
    private color: string;
    private cameraNumber:number;
    private price:number;
        constructor(name:string, model:string,trademark:string, sdSize:number, is5g:boolean, color:string, cameraNumber:number, price:number)

        {
            this.name = name ,
            this.model= model,
            this.trademark= trademark,
            this.sdSize = sdSize,
            this.is5g = is5g,
            this.color = color,
            this.cameraNumber = cameraNumber,
            this.price = price
        }     
        
        public getName(name:string) {
           return this.name
        }

        public getmodel(model:string) {
           return this.model
        }

        public gettrademark(trademark:string) {
           return this.trademark
        }

        public getsdSize(sdSize:number) {
           return this.sdSize
        }

        public getColor(color:string) {
           return this.color
        }

        public getPrice(price:number) {
           return this.name
        }
        public getCameraNumber(cameraNumber:number) {
           return this.cameraNumber
        }

        public setName (name:string) {
            this.name 
        }

        public setmodel (model:string) {
            this.model
        }

        public settradeMark (trademark:string) {
            this.trademark
        }

        public setSdSize (sdSize:number) {
            this.sdSize 
        }

        public setColor (color:string) {
            this.color
        }

        public setCameraNumber (cameraNumber:number) {
            this.cameraNumber
        }
        
        public setPrice (price:number) {
            this.price
        }

        public showAll():string {
            return "The characteristics of the mobile name are:" + "/n" +
            "Name : " + this.name +
            "Model: " + this.model +
            "TradeMak: "+ this.trademark +
            "SD Size: " + this.sdSize +
            "Color: " + this.color +
            "Is 5g?: " + this.is5g +
            "NumberOfCameras: " + this.cameraNumber;
        }
    };

