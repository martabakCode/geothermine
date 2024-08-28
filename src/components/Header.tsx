"use client"; // Add this line at the top of your file

import Link from 'next/link';
import Image from "next/image";
import 'flowbite';
import { usePathname } from 'next/navigation';

const Header = () => {
    const pathname = usePathname();
    return (
            <nav className="bg-white dark:bg-black fixed w-full z-20 top-0 start-0">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link href={'/'} className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={'/logo/dark-logo.png'} className='h-8' alt="Geothermine Logo"/>
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Geothermine</span>
                </Link>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button type="button" className="text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800">Get started</button>
                    <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-black md:dark:bg-black dark:border-gray-700">
                    <li>
                        <Link href={'/'} className={`block py-2 px-3 rounded md:p-0 ${pathname === '/' ? 'text-white bg-yellow-700 md:bg-transparent md:text-yellow-700 md:dark:text-yellow-500' : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-700 md:dark:hover:text-yellow-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'}`} aria-current="page">Home</Link>
                    </li>
                    <li>
                        <Link href={'/about'} className={`block py-2 px-3 rounded md:p-0 ${pathname === '/about' ? 'text-white bg-yellow-700 md:bg-transparent md:text-yellow-700 md:dark:text-yellow-500' : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-700 md:dark:hover:text-yellow-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'}`}>About</Link>
                    </li>
                    <li>
                        <Link href={'/service'} className={`block py-2 px-3 rounded md:p-0 ${pathname === '/service' ? 'text-white bg-yellow-700 md:bg-transparent md:text-yellow-700 md:dark:text-yellow-500' : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-700 md:dark:hover:text-yellow-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'}`}>Services</Link>
                    </li>
                    <li>
                        <Link href={'/contact'} className={`block py-2 px-3 rounded md:p-0 ${pathname === '/contact' ? 'text-white bg-yellow-700 md:bg-transparent md:text-yellow-700 md:dark:text-yellow-500' : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-700 md:dark:hover:text-yellow-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'}`}>Contact</Link>
                    </li>
                    </ul>
                </div>
                </div>
            </nav>
    );
};

export default Header;
