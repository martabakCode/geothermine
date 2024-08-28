
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen mt-10">
      <section className="bg-center bg-no-repeat bg-[url('https://www.fajarmasmurni.com/public/assets/images/productnsolution/fajarmasmurni_solutions_04_Coal_Fired_Geothermal_Power_Plant.jpg')] bg-gray-700 bg-blend-multiply">
          <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
              <h1 className="mb-8 text-4xl font-medium tracking-wide leading-none text-white md:text-5xl lg:text-6xl">Powering The Futures With Clean Energy & Smart Investment</h1>
              <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                  <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-900">
                  Discover Our Solutions
                  </a>
              </div>
          </div>
      </section>

      <section className="bg-white dark:bg-black">
          <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
              <div className="mr-auto place-self-center lg:col-span-7">
                  <h1 className="max-w-2xl mb-4 text-4xl font-bold tracking-thin leading-none md:text-5xl xl:text-6xl dark:text-white">Welcome to Geothermine</h1>
                  <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Geothermine is pioneering a sustainable future by merging geothermal energy with cutting-edge crypto mining technology. Our mission is to optimize energy usage, reduce waste, and generate value from every kilowatt of excess power.</p>
                  <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-900">
                  Learn More About Us
                  </a>
              </div>
              <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                  <img src={'/assets/hero.png'} alt="mockup"/>
              </div>                
          </div>
      </section>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <div className="mb-8 lg:mb-16">
                <h2 className="mb-4 text-4xl tracking-tight text-center font-extrabold text-gray-900 dark:text-white">Why Choose <span className="text-yellow-100">Geothermine?</span></h2>
            </div>
            <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                <div>
                    <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-yellow-100 lg:h-12 lg:w-12 dark:bg-yellow-900">
                      <svg className="w-5 h-5 text-yellow-600 lg:w-6 lg:h-6 dark:text-yellow-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" /></svg>
                    </div>
                    <h3 className="mb-2 text-xl font-bold dark:text-white">Sustainable Energy</h3>
                    <p className="text-gray-500 dark:text-gray-400">Utilizing renewable geothermal energy to power the future of crypto mining</p>
                </div>
                <div>
                    <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-yellow-100 lg:h-12 lg:w-12 dark:bg-yellow-900">
                      <svg className="w-5 h-5 text-yellow-600 lg:w-6 lg:h-6 dark:text-yellow-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" /></svg>
                    </div>
                    <h3 className="mb-2 text-xl font-bold dark:text-white">Maximized Efficiency</h3>
                    <p className="text-gray-500 dark:text-gray-400">Transforming excess power into profitable outcomes with minimal environmental impact.</p>
                </div>
                <div>
                    <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-yellow-100 lg:h-12 lg:w-12 dark:bg-yellow-900">
                      <svg className="w-5 h-5 text-yellow-600 lg:w-6 lg:h-6 dark:text-yellow-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" /></svg>
                    </div>
                    <h3 className="mb-2 text-xl font-bold dark:text-white">Reliable and Secure</h3>
                    <p className="text-gray-500 dark:text-gray-400">Our robust infrastructure ensures continuous, secure operations with high returns.</p>
                </div>
                
            </div>
        </div>
      </section>
      <section className="bg-white dark:bg-black">
        <div className="py-8 px-4 mx-auto sm:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-xl text-center p-6 rounded-xl border dark:bg-gray-900 dark:border-gray-800">
                <h2 className="mb-4 text-3xl tracking-wide font-medium leading-wide text-gray-900 dark:text-white">Ready to join the future of energy?</h2>
                <a href="#" className="text-black bg-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-white dark:hover:bg-gray-100 focus:outline-none dark:focus:ring-gray-200">Get Started</a>
            </div>
        </div>
    </section>

    </div>
  );
}