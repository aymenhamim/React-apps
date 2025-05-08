const { createSlice } = require("@reduxjs/toolkit");

const initialState = [
  { id: 1, name: "Product 1", price: 100 },
  { id: 2, name: "Product 2", price: 200 },
];
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    createProduct(state, action) {
      console.log("new post created successfuly");
    },
  },
});

export const { createProduct } = productsSlice.actions;
export default productsSlice.reducer;
