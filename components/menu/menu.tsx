import React, { useState } from 'react';
import { MenuOutlined } from '@ant-design/icons';

const Menu: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <div className="relative">
            <div onClick={handleMenuClick}>
                <MenuOutlined className="text-zinc-800 self-center cursor-pointer" />
            </div>
            {menuOpen && (
                <div className="absolute top-10 right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50">
                    <ul className="pl-6">
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            <a href="/home" onClick={closeMenu} style={{ fontSize: '16px', fontWeight: 'bold', textDecoration: 'none', color: '#658E9C' }}>Home</a>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            <a href="/map" onClick={closeMenu} style={{ fontSize: '16px', fontWeight: 'bold', textDecoration: 'none', color: '#658E9C' }}>Map</a>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            <a href="/recycle" onClick={closeMenu} style={{ fontSize: '16px', fontWeight: 'bold', textDecoration: 'none', color: '#658E9C' }}>Recycle</a>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            <a href="/transparency" onClick={closeMenu} style={{ fontSize: '16px', fontWeight: 'bold', textDecoration: 'none', color: '#658E9C' }}>Transparency</a>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            <a href="/news" onClick={closeMenu} style={{ fontSize: '16px', fontWeight: 'bold', textDecoration: 'none', color: '#658E9C' }}>News</a>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Menu;
