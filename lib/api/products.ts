import product from "../data/product.json"
import { Product } from "../types/types"
// fetch products by specific-category ID //

export async function getProductsBycatId(categoryId?:string){
  return product
}
// fetch product by product ID

export async function getProductsBySlug(productSlug:string): Promise<Product | undefined>{ 

    return product.find((p) => p.slug === productSlug)
}

export async function getProductsBySearch(productSlug:string){ 
    return product
}