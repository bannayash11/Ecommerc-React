import { createSlice } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import axios from 'axios'



const productDetailsSlice = createSlice({
  name: "productDetails",
  initialState: {},
  reducers: {
    setProductDetails: (state, action) => {
      return action.payload; // Assuming the payload is the product details object
    },
  },
});

export const { setProductDetails } = productDetailsSlice.actions;
export default productDetailsSlice.reducer;

export const fetchProductDetails = (productId) => async (dispatch) => {

const [data, setData] = useState([]);
useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/productlist');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
}, []); 

  try {
    // Make an API call to get product details based on the productId
    const productDetails = await data.getProductDetails(productId);

    // Dispatch the action to update the state with the fetched details
    dispatch(setProductDetails(productDetails));
  } catch (error) {
    console.error("Error fetching product details:", error);
  }
};
