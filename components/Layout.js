import React, { useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

const Layout = ({ children, setCategory, category, showSidebar, setShowSidebar, menuRef }) => {

    return (
        <>
            <Header setShowSidebar={setShowSidebar} showSidebar={showSidebar} category={category} setCategory={setCategory} menuRef={menuRef} />
            <Sidebar
                showSidebar={showSidebar}
                category={category}
                setCategory={setCategory}
                setShowSidebar={setShowSidebar}
                menuRef={menuRef}
            />
            {React.cloneElement(children, { category })}
        </>
    )
}

export default Layout