import Head from 'next/head';
import React from 'react';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

const blog = () => {
  return (
    <div className="bg-[url('https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-fixed bg-cover">
      <Head>
        <title>Blogs - Travel Next -The Best Travel Agency</title>
      </Head>
      <div className='backdrop-blur-sm'>
        <div className='bg-gray-800 bg-opacity-10'>
          <Navbar />
        </div>
        <div className="text-black">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <h2 className="text-4xl text-center text-secondary font-bold ">
              Latest News & Articles
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10 px-10">
              <div className="drop-shadow-lg pb-6  bg-white rounded mx-auto ">
                <div className="">
                  <img
                    className=""
                    src="https://themecrazy.net/html/tourest/img/blog/1.png"
                    alt=""
                  />
                </div>
                <div className="px-6 my-6 ">
                  <div className="flex justify-between">
                    <div className="flex items-center">
                      <div>
                        <img style={{ width: "70px" }} src="avater.png" alt="" />
                      </div>
                      <small>
                        <span className="font-bold">Bappi Shek</span> <br />

                      </small>
                    </div>
                  </div>
                  <h1 className="text-sm text-black font-bold mt-5">
                    A good traveler has no fixed plans and is not intent on
                    arriving.
                  </h1>
                </div>
                <div className="flex justify-end items-end ">
                  <p className="text-info font-bold cursor-pointer mr-5">
                    Read More
                  </p>
                </div>
              </div>
              {/* blog-1 */}
              <div className="drop-shadow-lg pb-6  bg-white rounded mx-auto ">
                <div className="">
                  <img
                    className=""
                    src="https://themecrazy.net/html/tourest/img/blog/2.png"
                    alt=""
                  />
                </div>
                <div className="px-6 my-6 ">
                  <div className="flex justify-between">
                    <div className="flex items-center">
                      <div>
                        <img style={{ width: "70px" }} src="avater.png" alt="" />
                      </div>
                      <small>
                        <span className="font-bold">Sayem Native</span> <br />

                      </small>
                    </div>
                  </div>
                  <h1 className="text-sm text-black font-bold mt-5">
                    A good traveler has no fixed plans and is not intent on
                    arriving.
                  </h1>
                </div>
                <div className="flex justify-end items-end ">
                  <p className="text-info font-bold cursor-pointer mr-5">
                    Read More
                  </p>
                </div>
              </div>
              {/* blog-2 */}
              <div className="drop-shadow-lg pb-6  bg-white rounded mx-auto ">
                <div className="">
                  <img
                    className=""
                    src="https://themecrazy.net/html/tourest/img/blog/3.png"
                    alt=""
                  />
                </div>
                <div className="px-6 my-6 ">
                  <div className="flex justify-between">
                    <div className="flex items-center">
                      <div>
                        <img
                          style={{ width: "70px" }}
                          src="avater.png"
                          alt=""
                          className="rounded-full"
                        />
                      </div>
                      <small>
                        <span className="font-bold">Md. Shakibur Rahman</span> <br />

                      </small>
                    </div>
                  </div>
                  <h1 className="text-sm text-black font-bold mt-5">
                    A good traveler has no fixed plans and is not intent on
                    arriving.
                  </h1>
                </div>
                <div className="flex justify-end items-end ">
                  <p className=" text-info font-bold cursor-pointer mr-5">
                    Read More
                  </p>
                </div>
              </div>
              {/* blog-3 */}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10 px-10">
              <div className="drop-shadow-lg pb-6  bg-white rounded mx-auto ">
                <div className="">
                  <img
                    className=""
                    src="https://themecrazy.net/html/tourest/img/blog/1.png"
                    alt=""
                  />
                </div>
                <div className="px-6 my-6 ">
                  <div className="flex justify-between">
                    <div className="flex items-center">
                      <div>
                        <img style={{ width: "70px" }} src="avater.png" alt="" />
                      </div>
                      <small>
                        <span className="font-bold">Bappi Shek</span> <br />

                      </small>
                    </div>
                  </div>
                  <h1 className="text-sm text-black font-bold mt-5">
                    A good traveler has no fixed plans and is not intent on
                    arriving.
                  </h1>
                </div>
                <div className="flex justify-end items-end ">
                  <p className="text-info font-bold cursor-pointer mr-5">
                    Read More
                  </p>
                </div>
              </div>
              {/* blog-1 */}
              <div className="drop-shadow-lg pb-6  bg-white rounded mx-auto ">
                <div className="">
                  <img
                    className=""
                    src="https://themecrazy.net/html/tourest/img/blog/2.png"
                    alt=""
                  />
                </div>
                <div className="px-6 my-6 ">
                  <div className="flex justify-between">
                    <div className="flex items-center">
                      <div>
                        <img style={{ width: "70px" }} src="avater.png" alt="" />
                      </div>
                      <small>
                        <span className="font-bold">Sayem Native</span> <br />

                      </small>
                    </div>
                  </div>
                  <h1 className="text-sm text-black font-bold mt-5">
                    A good traveler has no fixed plans and is not intent on
                    arriving.
                  </h1>
                </div>
                <div className="flex justify-end items-end ">
                  <p className="text-info font-bold cursor-pointer mr-5">
                    Read More
                  </p>
                </div>
              </div>
              {/* blog-2 */}
              <div className="drop-shadow-lg pb-6  bg-white rounded mx-auto ">
                <div className="">
                  <img
                    className=""
                    src="https://themecrazy.net/html/tourest/img/blog/3.png"
                    alt=""
                  />
                </div>
                <div className="px-6 my-6 ">
                  <div className="flex justify-between">
                    <div className="flex items-center">
                      <div>
                        <img
                          style={{ width: "70px" }}
                          src="avater.png"
                          alt=""
                          className="rounded-full"
                        />
                      </div>
                      <small>
                        <span className="font-bold">Jhon Abraham</span> <br />

                      </small>
                    </div>
                  </div>
                  <h1 className="text-sm text-black font-bold mt-5">
                    A good traveler has no fixed plans and is not intent on
                    arriving.
                  </h1>
                </div>
                <div className="flex justify-end items-end ">
                  <p className=" text-info font-bold cursor-pointer mr-5">
                    Read More
                  </p>
                </div>
              </div>
              {/* blog-3 */}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10 px-10">
              <div className="drop-shadow-lg pb-6  bg-white rounded mx-auto ">
                <div className="">
                  <img
                    className=""
                    src="https://themecrazy.net/html/tourest/img/blog/1.png"
                    alt=""
                  />
                </div>
                <div className="px-6 my-6 ">
                  <div className="flex justify-between">
                    <div className="flex items-center">
                      <div>
                        <img style={{ width: "70px" }} src="avater.png" alt="" />
                      </div>
                      <small>
                        <span className="font-bold">Bappi Shek</span> <br />

                      </small>
                    </div>
                  </div>
                  <h1 className="text-sm text-black font-bold mt-5">
                    A good traveler has no fixed plans and is not intent on
                    arriving.
                  </h1>
                </div>
                <div className="flex justify-end items-end ">
                  <p className="text-info font-bold cursor-pointer mr-5">
                    Read More
                  </p>
                </div>
              </div>
              {/* blog-1 */}
              <div className="drop-shadow-lg pb-6  bg-white rounded mx-auto ">
                <div className="">
                  <img
                    className=""
                    src="https://themecrazy.net/html/tourest/img/blog/2.png"
                    alt=""
                  />
                </div>
                <div className="px-6 my-6 ">
                  <div className="flex justify-between">
                    <div className="flex items-center">
                      <div>
                        <img style={{ width: "70px" }} src="avater.png" alt="" />
                      </div>
                      <small>
                        <span className="font-bold">Sayem Native</span> <br />

                      </small>
                    </div>
                  </div>
                  <h1 className="text-sm text-black font-bold mt-5">
                    A good traveler has no fixed plans and is not intent on
                    arriving.
                  </h1>
                </div>
                <div className="flex justify-end items-end ">
                  <p className="text-info font-bold cursor-pointer mr-5">
                    Read More
                  </p>
                </div>
              </div>
              {/* blog-2 */}
              <div className="drop-shadow-lg pb-6  bg-white rounded mx-auto ">
                <div className="">
                  <img
                    className=""
                    src="https://themecrazy.net/html/tourest/img/blog/3.png"
                    alt=""
                  />
                </div>
                <div className="px-6 my-6 ">
                  <div className="flex justify-between">
                    <div className="flex items-center">
                      <div>
                        <img
                          style={{ width: "70px" }}
                          src="avater.png"
                          alt=""
                          className="rounded-full"
                        />
                      </div>
                      <small>
                        <span className="font-bold">Jhon Abraham</span> <br />

                      </small>
                    </div>
                  </div>
                  <h1 className="text-sm text-black font-bold mt-5">
                    A good traveler has no fixed plans and is not intent on
                    arriving.
                  </h1>
                </div>
                <div className="flex justify-end items-end ">
                  <p className=" text-info font-bold cursor-pointer mr-5">
                    Read More
                  </p>
                </div>
              </div>
              {/* blog-3 */}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default blog;