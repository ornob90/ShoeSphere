import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider } from "react-router-dom";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { Toaster } from "react-hot-toast";

// const queryClient = new QueryClient();
import router from "./routes/Routes";
import DrawerProvider from "./provider/DrawerProvider";
import AuthProvider from "./provider/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <DrawerProvider>
        <RouterProvider router={router} />
      </DrawerProvider>
    </AuthProvider>
  </React.StrictMode>
);
