import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
      channelId: null,
      channelName: null,
  },
  reducers: {
    setChannelId: (state, action) => {
      state.app += action;
    },
  },
});

export const { setChannelId } = appSlice.actions;

export const selectChannelId = state => state.app.cahnnelId;
export const selectChannelName = state => state.app.app;

export default appSlice.reducer;