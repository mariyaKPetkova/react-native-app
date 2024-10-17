export type ProductDetailsState = {
  productDetails: {
    productDetailsResponse: ProductDetailsResponse
    productDetails: CustomProductDetails
    isLoading: boolean
    error: boolean
    productVariants: CustomProductVariants[]
    selectedSize: SelectedSize
  }
}
export type SelectedSize = {
  size: string
  index: number
  error: boolean
}
export type CustomProductVariants = {
  imgUrl: string[]
  name: string
  id: string
}
export type CustomProductDetails = {
  name: string
  price: string
  imgUrl: string[]
  sizes: string[]
  description: string
  id: string
}
export type ImageGroups = {
  _type: string
  images: {
    _type: string
    alt: string
    dis_base_link: string
    link: string
    title: string
    index: number
  }[]
  view_type: string
}
export type VariantsImageGroups = {
  _type: string
  images: []
  variation_attributes: []
  view_type: string
}
export type VariationAttributes = {
  _type: string
  id: string
  name: string
  values: VariationAttributesValues[]
}
export type VariationAttributesValues = {
  _type: string
  name: string
  orderable: boolean
  value: string
}
export type ProductVariants = {
  _type: string
  link: string
  price: number
  product_id: string
  variation_values: {
    color: string
    size: string
  }
}
export type ProductVariantResponse = {
  _type: string
  _v: string
  c_color: string
  c_refinementColor: string
  c_size: string
  c_width: string
  id: string
  image_groups: VariantsImageGroups[]
  long_description: string
  min_order_quantity: number
  name: string
  page_description: string
  page_title: string
  short_description: string
  step_quantity: number
  type: { _type: string; variant: boolean }
  upc: string
  valid_from: { default: string }
}
export type ProductDetailsResponse = {
  _v: string
  _type: string
  currency: string
  id: string
  image_groups: ImageGroups[]
  long_description: string
  master: {
    _type: string
    link: string
    master_id: string
    price: number
  }
  min_order_quantity: number
  name: string
  page_description: string
  page_title: string
  price: number
  price_per_unit: number
  primary_category_id: string
  short_description: string
  step_quantity: number
  type: {
    _type: string
    master: boolean
  }
  variants: ProductVariants[]
  variation_attributes: VariationAttributes[]
}
