import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IDataTransferState {
  loading?: boolean;
  error?: boolean;
  message: string;
}

const initialState: IDataTransferState = {
  loading: false,
  error: false,
  message: "",
};

export const dataTransferSlice = createSlice({
  name: "data-transfer",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = true;
      state.message = action.payload;
    },
    setSuccess: (state, action: PayloadAction<string>) => {
      state.error = false;
      state.message = action.payload;
    },
  },
});

export const { setError, setLoading, setSuccess } = dataTransferSlice.actions;
export const dataTransferReducer = dataTransferSlice.reducer;
