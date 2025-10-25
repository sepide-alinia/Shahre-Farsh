export type CategoryCardItem = {
  cardImg: string;
  title: string;
  btnText: string;
  toPage: string;
  id?: number;
};

export type CategoryCardType = CategoryCardItem[];

export type Product1 = {
  id: number;
  img: string;
  description: string;
  price: number;
  priceTag: string;
};

export type Product1Type = Product1[];

export type PromoSectionPropsType ={
src:string;
arrow?:string;
title: string;
highlight: string;
description: string;
primaryBtn :{
    toPage: string;
    extraClass?: string;
    text: string;
}
secondaryBtn? :{
    toPage: string;
    extraClass?: string;
    text: string;
}
}