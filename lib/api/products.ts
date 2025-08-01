
export async function getProducts(params:string){
  const products = await fetch(`${process.env.NEXT_PUBLIC_WC_API}/products/${params}`).then(res=> res.json())
  return products
}

export async function getProductsCategory(){
  const categories = await fetch(`${process.env.NEXT_PUBLIC_WC_API}/categories`).then(res=> res.json())
  console.log(categories)
  return categories
}