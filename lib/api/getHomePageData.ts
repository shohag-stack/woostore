import { Category } from "../types/types"
import categories from "../data/categories.json"
import { Product } from "../types/types"
import product from '../data/product.json'
type HomePageData = {
  categories: Category[] | undefined
  featuredProducts: Product[]
}

export async function getHomePageData(): Promise<HomePageData | undefined> {
  try {
    return {categories, featuredProducts:product}
  } 
  
  catch (err) {
    console.log(err)

  }
}