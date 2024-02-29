import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { Route, Routes } from "react-router-dom";
import { ProductsPage } from "../pages/products/ProductsPage";
// import { RTKDemo } from "../pages/products/RTKDemo";

const defaultTheme = createTheme();

export function GeneralLayout() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Routes>
          <Route path="/products" element={<ProductsPage />} />
          {/* <Route path="/rkt" element={<RTKDemo />} /> */}
        </Routes>
      </Box>
    </ThemeProvider>
  );
}
