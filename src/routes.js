import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { ProductContextProvider } from "./context/ProductContext";

// pages
import Home from "./pages/Home";
import Exclusivos from "./pages/Exclusivos";
import Promocao from "./pages/Promocao";
import Favoritos from "./pages/Favoritos";
import ProdutoDetalhes from "./pages/ProdutoDetalhes";

// Layout
import Layout from "./layout/Layout";

const Index = () => {
  return (
    <BrowserRouter>
      <ProductContextProvider>
        <Routes>
          <Route element={<Layout><Home /></Layout>} path="/" />
          <Route element={<Layout><Exclusivos /></Layout>} path="/exclusivos" />
          <Route element={<Layout><Promocao /></Layout>} path="/promocao" />
          <Route element={<Layout><Favoritos /></Layout>} path="/favoritos" />
          <Route element={<Layout><ProdutoDetalhes /></Layout>} path="/produtos/:id/detalhes" />
        </Routes>
      </ProductContextProvider>
    </BrowserRouter>
  )
};

export default Index;