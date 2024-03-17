import React from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets'; 

const Navbar = () => {
  return (
    <div className='Navbar bg-neutral-800'>
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div class="relative flex h-16 items-center justify-between">
                <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                </div>
            </div>
        </div>
    </div>
  );
}

export default Navbar;
