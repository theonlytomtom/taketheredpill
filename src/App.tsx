import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home'
import IntelPage from '@/pages/Intel'
import AboutPage from '@/pages/AboutPage'
import SubscribePage from '@/pages/Subscribe'
import ProductsPage from '@/pages/Products'
import SeriesIndexPage from '@/pages/SeriesIndexPage'
import BlogPostPage from '@/pages/BlogPostPage'
import NotFound from '@/pages/NotFound'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/intel" element={<IntelPage />} />
        <Route path="/intel/series/:seriesSlug" element={<SeriesIndexPage />} />
        <Route path="/intel/series/:seriesSlug/:postSlug" element={<BlogPostPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/subscribe" element={<SubscribePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
