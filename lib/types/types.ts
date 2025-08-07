export type Product = {
  id: number;
  name: string;
  slug: string;
  sale_price: number;
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
  regular_price: number
  price: number
  image: string;
  quantity: number

}


export type Blogs= {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  }
  excerpt: {
    rendered: string;
  }
  slug: string;
  date: string;
    featured_media: {
    source_url: string
  };
  _embedded ? : {
      "wp:featuredmedia" ? : [
        {
          source_url: string;
        }
      ]
  }
}

export type MenuItem = {
  id: number;
  title: string;
  url: string;
};

export type FooterMenuItem = {
  id: string;
  title: string;
  url: string;
}

// Fix: Footer data structure type
export type FooterData = {
  customerCare: FooterMenuItem[];
  aboutUs: FooterMenuItem[];
  policies: FooterMenuItem[];
}


export type SoloProduct = {
  id: number;
  name: string;
  price: string;
  regular_price: string;
  average_rating: string;
  images:
    {
      src: string
    }

}