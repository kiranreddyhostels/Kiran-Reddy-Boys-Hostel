"use client";

import { useEffect } from "react";
import { App } from "@capacitor/app";

export default function BackButtonHandler() {
  useEffect(() => {
    const listener = App.addListener("backButton", ({ canGoBack }) => {
      if (canGoBack) {
        window.history.back();
      } else {
        App.exitApp();
      }
    });

    return () => {
      listener.then((handle) => handle.remove());
    };
  }, []);

  return null;
}