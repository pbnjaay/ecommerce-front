const productMixin = {
  props: {
    name: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    imageUrl: {
      type: String,
      required: true
    }
  }
};
export default productMixin;
