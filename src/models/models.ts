export interface productBody {
  brand: string,
  category: string,
  description: string,
  discountPercentage: number,
  id: number,
  images: productImagesBody,
  price: number,
  rating: number,
  stock: number,
  thumbnail: string,
  title: string,
}

export interface userBody {
  id: number,
  age: number,
  username: string,
}

export interface productImagesBody {
  map(arg0: (imgLink: string) => JSX.Element): import("react").ReactNode;
  0: string,
  1: string,
  2: string,
  3: string
}