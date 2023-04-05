const Newsletter = () => {
  return (
    <div id="join-section" className="-mt-32 relative z-10">
      <div className="mx-auto max-w-2xl py-16 md:py-24 px-4 sm:px-6 md:max-w-7xl lg:px-24 bg-orange rounded-lg bg-newsletter">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 xl:gap-x-8">
          {/* COLUMN-1 */}
          <div>
            <h3 className="text-5xl font-bold mb-3"> Join Our Newsletter </h3>
            <h4 className="text-lg font-medium mb-7">
              Subscribe our newsletter for discounts, promo and many more.
            </h4>
            <div className="flex gap-2">
              <input
                type="Email address"
                name="q"
                className="py-4 text-sm w-full text-black bg-white rounded-md pl-4"
                placeholder="Enter your email"
                autoComplete="off"
              />
              <button className="bg-purple hover:bg-blue-700 text-white font-medium py-2 px-4 rounded">
                Subscribe
              </button>
            </div>
          </div>

          {/* COLUMN-2 */}
          <div className="hidden sm:block">
            <div className="float-right -mt-32">
              <img src={"/assets/newsletter/Free.svg"} alt="bgimg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
