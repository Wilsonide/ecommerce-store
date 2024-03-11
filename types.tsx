import { User } from "@prisma/client";


export interface Billboard{
    id : string;
    label : string;
    imageUrl: string;

}

export type Review = {
    id: string;
    userId: string;
    productId: string;
    rating: number;
    comment: string;
    createdAt: Date;
    updatedAt: Date;
    user: User;
}



export interface Category{
    id : string;
    name : string;
    billboard : Billboard;
}

export interface Product{
    id : string;
    category : Category;
    categoryId : string;
    name : string;
    isFeatured : boolean;
    size : Size;
    color : Color;
    reviews : Review[]
    Image: Image[];
    price: string,
    description : string
    quantity : number
}

export interface Image{
    id : string;
    url: string;
}

export interface Size{
    id : string;
    name : string;
    value : string;
}

export interface Color{
    id : string;
    name : string;
    value : string;
}

