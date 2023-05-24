export interface Category {
   id: string
   name: string
   src: string
   subCategories: string[]
}

export interface Product {
   id: string
   image: string
   images: string[]
   name: string
   miktar: string
   fiyat: number
   fiyatIndirimli?: number
}
