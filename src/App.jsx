
import { MantineProvider } from "@mantine/core";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "@mantine/core/styles.css";
import '@mantine/carousel/styles.css';
import AppShell from "./pages/AppShell";
import Home from "./pages/Home";

export default function App() {
  return (
    <MantineProvider defaultColorScheme="light">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppShell />}>
            <Route element={<Home />} index />
          </Route>
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}
