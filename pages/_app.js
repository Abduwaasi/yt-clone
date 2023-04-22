import { Layout } from "@/components"
import "../globalStyle.scss"
import { useState, useRef } from "react"
export default function App({ Component, pageProps }) {
  const [category, setCategory] = useState("New")
  const [showSidebar, setShowSidebar] = useState(false)
  const menuRef = useRef(null)
  return <Layout category={category} setCategory={setCategory} showSidebar={showSidebar} setShowSidebar={setShowSidebar} menuRef={menuRef}>
    <Component {...pageProps} category={category} />
  </Layout>

}
