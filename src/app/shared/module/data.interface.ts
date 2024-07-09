

export interface Itodo{
    todo: string;
    id: string;
}

export interface Istd{
    fname: string;
    lname: string;
    email: string;
    contact: number;
    id: string;
    gender : string;
}

export interface IGender{
   gen : string,
   id : number
}

// export interface Iproduct {
//     productname: string;
//     productdetail: string;
//     productstatus: "In Progress" | "Dispatched" | "Delivered";
//     id: string;
// }

export interface Iproduct {
    productname: string;
    productdetail: string[];
    productstatus: productstatus;
    id: string;
    image: string;
}

export enum productstatus{
    InProgress = 'In Progress',
    Delivered = 'Delivered',
    Dispatched = 'Dispatched'
}

export interface IPassenger {
    id: number;
    fullname: string;
    checkedIn: boolean;
    checkInDate?: any | number;
    children: IChild[] | null;
}

export interface IChild {
    name: string;
    age: number;
  }