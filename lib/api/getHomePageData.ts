
// call all the apis for home-page data { recent products, featured products, categories }


export async function getHomePageData() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_WOOSTORE_HOMEPAGE_DATA}`, {
            next: {
                revalidate: 60
            }
        })
        return res.json()
    }

    catch(err) {
        console.log(err)
    }
}


