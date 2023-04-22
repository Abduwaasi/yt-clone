import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
// Assets
import logo from "/public/images/yt-logo.svg"
// Icons
import { AiOutlineMenu, AiOutlineBell } from "react-icons/ai"
import { CiSearch } from "react-icons/ci"
import { MdOutlineKeyboardVoice, MdOutlineCreateNewFolder } from "react-icons/md"
// Styles
import styles from "./Header.module.scss"
import Link from 'next/link'


const Header = ({ showSidebar, setShowSidebar, setCategory, menuRef }) => {
    const router = useRouter()
    const [value, setValue] = useState("")

    const handleShowSidebar = () => {
        setShowSidebar(!showSidebar)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        search()

    }
    function search() {
        setCategory(value)
        router.push(`/`)
        setValue("")
    }
    function handleKeyDown(e) {
        if (e.key === "Enter") {
            search()
        }
    }
    return (
        <header className={`${styles.header} horizontal-padding`}>
            <div className={styles.left}>
                <button className={styles.roundBtn} onClick={handleShowSidebar} ref={menuRef}>
                    <AiOutlineMenu size={22} color="#ffffff" />
                </button>
                <Link href="/">
                    <Image src={logo} alt="youtube logo" className={styles.logo} />
                </Link>
            </div>
            <div className={styles.middle}>
                <div className={styles.inputWrapper}>
                    <input type="search" name="search" id="search" placeholder="Search" onChange={(e) => setValue(e.target.value)} value={value} onKeyDown={handleKeyDown} />
                    <button className={styles.searchBtn} onClick={handleSubmit}>
                        <CiSearch size={22} color="#ffffff" />
                    </button>
                </div>
                <button className={styles.roundBtn}>
                    <MdOutlineKeyboardVoice size={22} color="#ffffff" />
                </button>
            </div>
            <div className={styles.right}>
                <button className={styles.roundBtn}>
                    <MdOutlineCreateNewFolder size={22} color="#ffffff" />
                </button>
                <button className={styles.roundBtn}>
                    <AiOutlineBell size={22} color="#ffffff" />
                </button>
                <button className={styles.user}>W</button>
            </div>
        </header>
    )
}

export default Header

