import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import TopicPhoto from "../../models/TopicPhoto";

interface DashboardState {
  selectedTopic: string | null;
  selectedImage: TopicPhoto | null;
}

const initialState: DashboardState = {
  selectedTopic: null,
  selectedImage: null,
};

const authSlice = createSlice({
  name: "dashboard",
  initialState: initialState,
  reducers: {
    setSelectedTopic(state, action: PayloadAction<string>) {
      state.selectedTopic = action.payload;
    },
    setSelectedImage(state, action: PayloadAction<TopicPhoto | null>) {
      state.selectedImage = action.payload;
    },
  },
});
export default authSlice;
