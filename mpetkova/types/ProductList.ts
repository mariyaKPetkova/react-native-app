export type Product = {
  link: string
  product_id: string
  product_name: string
  image: {
    link: string
    alt: string
  }
}

export type ProductListState = {
  productList: {
    productList: Product[]
    isLoading: boolean
    error: boolean
    stratNumber: number
    totalProductCount: number
  }
}
