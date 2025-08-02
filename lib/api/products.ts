import { SearchParamsContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime"


export async function getProductsBySlug(params:any){
  const products = await fetch(`${process.env.NEXT_PUBLIC_WC_API}/products/`).then(res=> res.json())
  return products
}


export async function getProducts(categoryId:string){
  const url = new URL(`${process.env.NEXT_PUBLIC_WC_API}/products`)
  url.searchParams.set('category', categoryId)
  const products = await fetch(url.toString()).then(res => res.json());
  return products;
}

export async function getProductsCategory(){
  const categories = await fetch(`${process.env.NEXT_PUBLIC_WC_API}/categories`).then(res=> res.json())
  return categories
}