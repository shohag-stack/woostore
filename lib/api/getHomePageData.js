import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

export const WooCommerce = new WooCommerceRestApi({
    url: process.env.NEXT_PUBLIC_WC_URL,
    consumerKey: process.env.NEXT_PUBLIC_WC_CONSUMER_KEY,
    consumerSecret: process.env.NEXT_PUBLIC_WC_CONSUMER_SECRET,
    version: 'wc/v3'
})

// call all the apis for home-page data { recent products, featured products, categories }

export async function getHomePageData() {
        try {
            
            const response = await WooCommerce.get('products')
            return response.data
        }
        catch (err){
            console.log(err)
        }
}

export async function getCategories() {
        try {
            
            const response = await WooCommerce.get('products/categories')
            return response.data
        }
        catch (err){
            console.log(err)
        }

        
}


export async function getFeaturedProducts() {
        try {
            
            const response = await WooCommerce.get('products', {
                per_page: 10,
                featured: true
            })
            return response.data
        }
        catch (err){
            console.log(err)
        }

        
}




// other pages data 

export async function getProductsBycatId(categoryId){
  const url = new URL(`${process.env.NEXT_PUBLIC_WOOSTORE_SHOP_DATA}`)
  if (categoryId) {
    url.searchParams.set("category", categoryId);
  }
  const products = await WooCommerce.get(url.toString()).then(res => res.json());
  return products;
}



// fetch product by product ID

export async function getProductsBySlug(productSlug) {
  try {
    const response = await WooCommerce.get("products", {
      slug: productSlug,
    });

    return response.data[0]; // WooCommerce returns an array for `slug`
  } catch (err) {
    console.error("Error fetching product by slug:", err);
  }
}

export async function getProductsBySearch(productSlug){ 
    try {
      const response = await WooCommerce.get("products", {
      productSlug,
      next: {
        revalidate: 60
      }
    })
    return response.data[0]
    }
    catch(err){
      console.error('Error fetching product by slug')
    }
}