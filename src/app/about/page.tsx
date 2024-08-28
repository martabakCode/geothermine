
export default function Home() {
    return (
      <div className="flex flex-col min-h-screen mt-10">
        <section className="bg-white dark:bg-black">
            <div className="py-8 px-4 mx-auto lg:py-16 lg:px-6 grid grid-cols-4 gap-4">
                <div className="mx-auto col-span-2 mb-8 lg:mb-12">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-gray-50">About Geothermine</h2>
                    <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">Founded on the vision of a sustainable energy future, Geothermine merges the renewable power of geothermal energy with the innovative potential of cryptocurrency mining. Our goal is to make energy more efficient, reduce waste, and create value where it was previously untapped</p>
                </div>
                <div className="flex flex-col p-6 mx-auto max-w-lg text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                    <h3 className="mb-4 text-2xl font-semibold">Vision</h3>
                    <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">To become a global leader in energy innovation, optimizing the use of renewable resources and setting new standards for the integration of green energy with digital finance.</p>
                </div>
                <div className="flex flex-col p-6 mx-auto max-w-lg text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                    <h3 className="mb-4 text-2xl font-semibold">Mission</h3>
                    <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">To lead the global transition towards sustainable energy by combining geothermal power with advanced digital technologies, driving both environmental and economic benefits.</p>
                </div>
            </div>
            </section>
            <section className="bg-white dark:bg-yellow-700">
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
                    <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-gray-50">Our team</h2>
                        <p className="font-light text-gray-100 sm:text-xl dark:text-gray-100">Explore the whole collection of open-source web components and elements built with the utility classes from Tailwind</p>
                    </div> 
                    <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        <div className="text-center text-gray-500 dark:text-gray-400">
                            <img className="mx-auto mb-4 w-36 rounded" src={'/assets/Ghozi.png'} alt="Ghozi Avatar"/>
                            <h3 className="mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
                                <a href="#">Ghozi Abid Prayoga</a>
                            </h3>
                            <p className="text-gray-900 dark:text-gray-200">CEO & Founder</p>
                        </div>
                        <div className="text-center text-gray-500 dark:text-gray-400">
                            <img className="mx-auto mb-4 w-36 rounded" src={'/assets/Rakha.png'} alt="Rakha Avatar"/>
                            <h3 className="mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
                                <a href="#">Rakha Aryan  Maulan Hakim</a>
                            </h3>
                            <p className="text-gray-900 dark:text-gray-200">CTO & Co-Founder</p>
                        </div>
                        <div className="text-center text-gray-500 dark:text-gray-400">
                            <img className="mx-auto mb-4 w-36 rounded" src={'/assets/Rinndy.png'} alt="Rinndy Avatar"/>
                            <h3 className="mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
                                <a href="#">Rinndy Antika Dwi Purnama  </a>
                            </h3>
                            <p className="text-gray-900 dark:text-gray-200">COO & Co-Founder</p>
                        </div>
                        <div className="text-center text-gray-500 dark:text-gray-400">
                            <img className="mx-auto mb-4 w-36 rounded" src={'/assets/Athaya.png'} alt="Athaya Avatar"/>
                            <h3 className="mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
                                <a href="#">Athaya Nisrina Mansoor</a>
                            </h3>
                            <p className="text-gray-900 dark:text-gray-200">Finance & Digital Marketing</p>
                        </div>
                    </div>  
                </div>
                </section>
                <section className="bg-white dark:bg-black">
                    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our Core Values</h2>
                        </div>
                        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                            <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                                <h3 className="mb-4 text-2xl font-semibold">Sustainability</h3>
                                <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">We believe in the power of renewable energy to create a more sustainable world.</p>
                            </div>
                            <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                                <h3 className="mb-4 text-2xl font-semibold">Innovation</h3>
                                <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">We are committed to pushing the boundaries of what’s possible in energy and technology.</p>
                            </div>
                            <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                                <h3 className="mb-4 text-2xl font-semibold">Integrity</h3>
                                <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">We operate with transparency, responsibility, and a dedication to the highest ethical standards</p>
                            </div>
                        </div>
                    </div>
                    </section>
                    <section className="bg-white dark:bg-gray-900">
                        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                            <div className="max-w-screen-md">
                                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our Journey</h2>
                                <p className="mb-8 font-light text-gray-500 sm:text-xl dark:text-gray-400">Geothermine started as a bold idea—an ambitious vision to merge the worlds of renewable energy and cryptocurrency. Since our founding, we've been driven by the desire to make a positive impact on the world. Through relentless innovation and a commitment to sustainability, we have grown from a small startup to a key player in the renewable energy and crypto space.</p>
                            </div>
                        </div>
                    </section>
                    <section className="bg-white dark:bg-black">
                        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                            <div className="mx-auto max-w-screen-xl text-center p-6 rounded-xl border dark:bg-gray-900 dark:border-gray-800">
                                <h2 className="mb-4 text-3xl tracking-wide font-medium leading-wide text-gray-900 dark:text-white">Want to learn more about our journey or join our mission?</h2>
                                <a href="#" className="text-black bg-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-white dark:hover:bg-gray-100 focus:outline-none dark:focus:ring-gray-200">Get in Touch</a>
                            </div>
                        </div>
                    </section>
      </div>
    );
  }