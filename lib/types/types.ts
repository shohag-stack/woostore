export type Product = {
  id: number;
  name: string;
  slug: string;
  sale_price: string; // Changed from number to string to match JSON
  regular_price: string; // Changed from number to string to match JSON
  price: string; // Added this field that exists in JSON
  average_rating: string; // Changed from number to string to match JSON
  short_description: string;
  description: string; // Added this field from JSON
  on_sale: boolean; // Added this useful field
  stock_status: string; // Added this field
  images: {
    id: number;
    src: string;
    name: string;
    alt: string;
  }[];
  categories: {
    id: number;
    name: string;
    slug: string;
  }[];
}


export type Category = {
  id: number;
  title: string;
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
      "wp:featuredmedia" ? : 
        {
          source_url: string;
        }[]
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