import React, { useRef, useEffect } from 'react'
import { categories } from '@/utils/constants'
import styles from "./Sidebar.module.scss"
import { useRouter } from 'next/router'
import Link from 'next/link'
const Sidebar = ({ showSidebar, setShowSidebar, category, setCategory, menuRef }) => {
    const sidebarRef = useRef(null)
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target) && !menuRef.current.contains(event.target)) {
                setShowSidebar(false)
            }
        }

        document.addEventListener("click", handleOutsideClick)

        return () => {
            document.removeEventListener("click", handleOutsideClick)
        }

    }, [])
    const router = useRouter()

    return (
        <aside className={styles.sidebar} style={{ transform: `translate(${showSidebar ? '0' : '-200px'})` }} ref={sidebarRef}>
            {
                categories?.map((cat) => (
                    <div key={cat.name} className={styles.link} style={{ backgroundColor: cat.name === category ? "red" : "" }}>
                        <button className={styles.wrapper} onClick={() => {
                            router.push("/")
                            setShowSidebar(false)
                            setCategory(cat.name)
                        }}>
                            <span>{cat.icon}</span>
                            <span className={styles.text}>{cat.name}</span>
                        </button>
                    </div>
                ))
            }
        </aside>
    )
}

export default Sidebar