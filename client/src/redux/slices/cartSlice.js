import { createSlice } from "@reduxjs/toolkit";

let sessionState = sessionStorage.getItem("cart");
sessionState = JSON.parse(sessionState);

const storeItems = (state) => {
  sessionStorage.setItem("cart", JSON.stringify(state));
};

const cartSlice = createSlice({
  name: "cart",
  initialState: sessionState || {
    itemCount: 0,
    productsList: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.itemCount++;
      state.productsList.push(action.payload);
      storeItems(state);
    },
    removeItem: (state, action) => {
      const id = action.payload;
      state.productsList = state.productsList.filter(
        (product) => product.id !== id
      );
      state.itemCount--;
      storeItems(state);
    },
    handleProductCount: (state, action) => {
      const { id, type, count } = action.payload;
      state.productsList = state.productsList.map((product) => {
        if (product.id === id) {
          switch (type) {
            case productCountTypes.INCREASE:
              product.count += count || 1;
              break;
            case productCountTypes.DECREASE:
                if (product.count !== 0)
                    product.count -= count || 1;
              break;
            default:
              break;
          }
        }
        return product;
      });
      storeItems(state);
    },
  },
});

export const productCountTypes = {
  INCREASE: "INCREASE",
  DECREASE: "DECREASE",
};

export const { addItem, removeItem, handleProductCount } = cartSlice.actions;
export default cartSlice.reducer;
