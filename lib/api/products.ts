
// fetch products by specific-category ID //

export async function getProductsBycatId(categoryId?:string){
  const url = new URL(`${process.env.NEXT_PUBLIC_WOOSTORE_SHOP_DATA}`)
  if (categoryId) {
    url.searchParams.set("category", categoryId);
  }
  const products = await fetch(url.toString()).then(res => res.json());
  return products;
}



// fetch product by product ID

export async function getProductsBySlug(productSlug:string){ 
    const url = new URL(`${process.env.NEXT_PUBLIC_WOOSTORE_SHOP_DATA}`)
     url.searchParams.set("slug", productSlug)
    const response = await fetch(url.toString(), {
      next: {
        revalidate: 60
      }
    })
    const data = await response.json()
    return data[0] || []
}