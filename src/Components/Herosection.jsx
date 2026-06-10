import React from "react";

const Herosection = () => {
  return (
    <>
     

      <section className="text-gray-200 body-font py-10">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col bg-slate-800/60 backdrop-blur-md border border-slate-700 rounded-3xl shadow-2xl">
          <h2 className="text-5xl font-extrabold text-amber-400 mb-9 text-center tracking-wide">
            BEST SELLING
          </h2>

          <img
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded-3xl border-4 border-slate-700 shadow-xl"
            alt="hero"
            src="https://images.unsplash.com/photo-1496502847782-9896b3af1458?q=80&w=1397&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />

          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-5xl text-4xl mb-4 font-bold text-amber-400">
              MACBOOK
            </h1>

            <p className="mb-8 leading-relaxed text-slate-300 text-lg">
              MacBook is Apple's premium laptop series known for its sleek
              design, powerful performance, and long battery life. It features
              high-resolution Retina displays, fast Apple Silicon chips, and
              seamless integration with the Apple ecosystem. MacBooks are widely
              used by students, professionals, developers, and creative artists
              for productivity and content creation.
            </p>

            <div className="flex justify-center">
              <button className="inline-flex text-slate-900 bg-amber-400 border-0 py-3 px-8 focus:outline-none hover:bg-amber-500 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105">
                BUY
              </button>

              <button className="ml-4 inline-flex text-white bg-slate-700 border-0 py-3 px-8 focus:outline-none hover:bg-slate-600 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105">
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Herosection;
