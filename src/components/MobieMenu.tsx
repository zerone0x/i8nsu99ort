import Link from 'next/link';
import { RiMenu3Line } from 'react-icons/ri';
import React, { useState } from 'react';
function MobieMenu({ isOpen, onClose }:{isOpen:boolean, onClose:()=>void}) {
    if (!isOpen) return null;

    return (
        <div className={`fixed top-0 right-0 h-full w-64 bg-customShadowG z-50 transform transition-transform duration-300 ease-in-out`}>
    <button className="absolute top-4 right-4 text-4xl" onClick={onClose}>&times;</button>
    <ul className="mt-14 space-y-6 text-2xl ml-5">
        <li><Link href="#aboutMe"><p onClick={onClose}>About</p></Link></li>
        <li><Link href="#experience"><p onClick={onClose}>Experience</p></Link></li>
        <li><Link href="#project"><p onClick={onClose}>Project</p></Link></li>
        <li><Link href="#contact"><p onClick={onClose}>Contact</p></Link></li>
    </ul>
</div>
    );
}

export default MobieMenu;