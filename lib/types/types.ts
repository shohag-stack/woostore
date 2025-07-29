export type Product = {
  id: number;
  name: string;
  price: number;
  regular_price: number;
  average_rating: number;
  short_description: string;
  images: {
    src: string;
  } [];
}


export type Category = {
  id: number;
  name: string;
  slug: string;
  image: {
    src: string;
  }
}

export type CartItems = {
  id: number;
  title:string;
  price: number;
  image: string;
  quantity: number

}