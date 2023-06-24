import { useEffect, useState } from 'react'

export const useGetTotalPrice = (cart_item: any) => {
   const [totalPrice, setTotalPrice] = useState<number>(0)
   useEffect(() => {
      const price = cart_item.reduce((t: any, c: any) => t + c?.fiyat, 0)
      setTotalPrice(price)
   }, [cart_item])
   return totalPrice
}
