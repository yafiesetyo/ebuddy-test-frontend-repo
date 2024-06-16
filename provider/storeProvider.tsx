"use client";

import { Provider } from "react-redux";
import React, { useRef } from "react";
import { makeStore } from "@/store/store";

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Provider store={makeStore}>{children}</Provider>;
}
