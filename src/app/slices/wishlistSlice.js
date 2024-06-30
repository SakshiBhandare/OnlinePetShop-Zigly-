import { createSlice } from '@reduxjs/toolkit';

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: {
    items: [],
  },
  reducers: {
    addToWishlist(state, action) {
      const pid = action.payload;
      if (!state.items.includes(pid)) {
        state.items.push(pid);
      }
    },
    removeFromWishlist(state, action) {
      const pid = action.payload;
      state.items = state.items.filter(id => id !== pid);
    },
    moveFromWishlistToCart(state, action) {
      const pid = action.payload;
      state.items = state.items.filter(id => id !== pid);
    //   dispatch(addToCart(pid));
    },
  },
});

export const { addToWishlist, removeFromWishlist, moveFromWishlistToCart } = wishlistSlice.actions;

export default wishlistSlice.reducer;