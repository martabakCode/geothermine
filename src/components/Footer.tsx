import Image from 'next/image';
import '../app/style.css';
const Footer = () => {
    return (
       <footer className="bg-white dark:bg-gray-900">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                <div className="mb-6 md:mb-0">
                    <a href={''} className="mb-4 flex items-center h-12">
                        <Image src={'/logo/dark-logo-vertical.png'} width={500} height={300} alt="Geothermine Logo" className="custom-image"/>
                    </a>
                    <div className="">
                        <p className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Supported by</p>
                        <a href={''} className="flex h-12">
                            <Image src={'/logo/webull.png'} width={500} height={300} alt="Webull Logo" className="custom-image"/>
                        </a>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                    
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Pages</h2>
                        <ul className="text-gray-100 dark:text-gray-10 font-medium text-sm">
                            <li className="mb-4">
                                <a href={'/'} className="hover:underline">Home</a>
                            </li>
                            <li className="mb-4">
                                <a href={'/about'} className="hover:underline">About Us</a>
                            </li>
                            <li>
                                <a href={'/service'} className="hover:underline">Service</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="my-6 border-white sm:mx-auto dark:border-white lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between">
                <span className="text-sm text-white sm:text-center dark:text-white">© 2024 <a href={''} className="hover:underline">Geothermine™</a>. All Rights Reserved.
                </span>
            </div>
            </div>
        </footer>

    );
  };
  
  export default Footer;
  