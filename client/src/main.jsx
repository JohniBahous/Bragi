import "./global.css";
import App from "./App.jsx";
import { createRoot } from "react-dom/client";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./services/queryClient.js";
import AudioEngine from "./services/AudioEngine.jsx";

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <AudioEngine />
    <App />
  </QueryClientProvider>,
);
