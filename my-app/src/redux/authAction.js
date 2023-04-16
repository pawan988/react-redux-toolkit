import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const BASE_URL = "http://127.0.0.1:5000";
export const signupUser = createAsyncThunk(
  "users/signupUser",
  async ({ name, email, password }, thunkAPI) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.get(
        `https://dummyjson.com/carts`,
        // { name, email, password },
        config
      );
      if (data.carts) {
        console.log("uuuuuu data aa gaya");
        return data;
      }
    } catch (e) {
      console.error("Error", e);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
