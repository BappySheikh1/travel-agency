

const index = () => {
    return (
      <div>
       
        <div>
          <section className="max-w-3xl p-6 mx-auto bg-secondary rounded-md shadow-md dark:bg-gray-800 mt-5">
            <h1 className="text-xl font-bold text-white capitalize dark:text-white">
              Add Tour
            </h1>
            <form>
              <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div>
                  <label
                    className="text-white dark:text-gray-200"
                    htmlFor="username"
                  >
                    Tour Name
                  </label>
                  <input
                    
                    id="username"
                    type="text"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  />
                  
                </div>

                <div>
                  <label
                    className="text-white dark:text-gray-200"
                    htmlFor="productPrice"
                  >
                     Price
                  </label>
                  <input
                   
                    id="originalPrice"
                    type="number"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  />
                
                </div>
                <div>
                  <label
                    className="text-white dark:text-gray-200"
                    htmlFor="resalePrice"
                  >
                    Days
                  </label>
                  <input
             
                    id="resalePrice"
                    type="number"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  />
                
                </div>
                <div>
                  <label
                    className="text-white dark:text-gray-200"
                    htmlFor="email"
                  >
                    Sub Name
                  </label>
                  <input
                 
                    id="email"
                    type="text"
                    disabled
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  />
                
                </div>
                <div>
                  <label
                    className="text-white dark:text-gray-200"
                    htmlFor="sellerName"
                  >
                    Information
                  </label>
                  <input
                
                    id="sellerName"
                    disabled
                    type="text"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  />
                </div>
                <div>
                  <label
                    className="text-white dark:text-gray-200"
                    htmlFor="passwordConfirmation"
                  >
                    Location
                  </label>
                  <select
                    
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  >
                    <option value="Chattogram">Chattogram</option>
                    <option value="Dhaka">Dhaka</option>
                    <option value="Kulna">Kulna</option>
                    <option value="Syhlet">Syhlet</option>
                    <option value="Barishal">Barishal</option>
                    <option value="Noakhali">Noakhali</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              
                <div>
                  <label
                    className="text-white dark:text-gray-200"
                    htmlFor="productConditon"
                  >
                    Tour Details
                  </label>
                  <select
                  
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  >
                    <option value="Excellent">Excellent</option>
                    <option value="Good">Good</option>
                    <option value="Fair">Fair</option>
                  </select>
                 
                    <span className="mt-3 text-gray-800">
                      productConditon field is required
                    </span>
                
                </div>
                <div>
                  <label
                    className="text-white dark:text-gray-200"
                    htmlFor="productCategory"
                  >
                    Tour Category
                  </label>
                 
                      <select
                      
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                      >
                        {/* {categories.map((category) => (
                          <option key={category._id} value={category?._id}>
                            {category?.name}
                          </option>
                        ))} */}
                        <option value="ab">Test</option>
                      </select>
               
                </div>
                <div>
                  <label
                    className="text-white dark:text-gray-200"
                    htmlFor="yearOfPurchase"
                  >
                   About
                  </label>
                  <select
                   
                    className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  >
                    <option value="2018">2018</option>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                  </select>
                 
                </div>
                <div>
                  <label
                    className="text-white dark:text-gray-200"
                    htmlFor="yearOfPurchase"
                  >
                    More
                  </label>
                  <select
                 
                    className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  >
                    <option value="2018">2018</option>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                  </select>
                 
                </div>

                <div>
                  <label
                    className="text-white dark:text-gray-200"
                    htmlFor="date"
                  >
                    Date
                  </label>
                  <div className="relative">
                    {/* <DatePicker
                      className="py-2 border rounded-md w-full px-4"
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                    />
                    <FaCalendarAlt className="absolute top-3 right-5" /> */}
                    <p>Coming soon</p>
                  </div>
                </div>
              </div>
              <div className="my-3">
                <label className="block text-sm font-medium text-white">
                  Tour Image
                </label>
                <div className="space-y-1 text-center">
                  <div>
                    <input
                  
                      id="proudctImage"
                      type="file"
                      className="mt-1 text-white flex justify-center px-4 py-2 w-full border-2 border-gray-300 border-dashed rounded-md"
                    />
                   
                  </div>
                </div>
              </div>
              <div>
                <label className="text-white dark:text-gray-200" htmlFor="desc">
                  Tour Description
                </label>
                <textarea
                 
                  id="desc"
                  
                  className="block h-36 w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                ></textarea>
               
             
              </div>
              <p className="text-center mt-2 text-white font-semibold">
                Note: Make Sure You Fill-Up Every Filed!
              </p>
              <div className="flex justify-center mt-6">
               
                  <input
                    type="submit"
                    value="Publish Tour"
                    className="btn btn-outline text-white"
                  />
                
              </div>
            </form>
          </section>
        </div>
      </div>
    );
};

export default index;