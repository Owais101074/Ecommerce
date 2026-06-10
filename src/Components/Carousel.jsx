import React from 'react'

const Carousel = () => {
  return (
    <>
     <div
        id="default-carousel"
        className="relative w-full max-w-6xl mx-auto my-10"
        data-carousel="slide"
      >
        {/* Carousel wrapper */}
        <div className="relative h-64 overflow-hidden rounded-3xl md:h-[500px] border border-slate-700 shadow-2xl">
          {/* Item 1 */}
          <div className=" duration-700 ease-in-out" data-carousel-item>
            <img
              src="https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="absolute block w-full h-full object-cover"
              alt="iPhone"
            />
          </div>

          {/* Item 2 */}
          <div className=" duration-700 ease-in-out" data-carousel-item>
            <img
              src="https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="absolute block w-full h-full object-cover"
              alt="MacBook"
            />
          </div>

          {/* Item 3 */}
          <div className=" duration-700 ease-in-out" data-carousel-item>
            <img
              src="https://images.unsplash.com/photo-1706765779494-2705542ebe74?q=80&w=1051&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="absolute block w-full h-full object-cover"
              alt="Nike Shoes"
            />
          </div>

          {/* Item 4 */}
          <div className=" duration-700 ease-in-out" data-carousel-item>
            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1400"
              className="absolute block w-full h-full object-cover"
              alt="Watch"
            />
          </div>

          {/* Item 5 */}
          <div className=" duration-700 ease-in-out" data-carousel-item>
            <img
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1400"
              className="absolute block w-full h-full object-cover"
              alt="Headphones"
            />
          </div>
        </div>

        {/* Indicators */}
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
          <button
            type="button"
            className="w-3 h-3 rounded-full bg-white"
            data-carousel-slide-to="0"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full bg-white/50"
            data-carousel-slide-to="1"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full bg-white/50"
            data-carousel-slide-to="2"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full bg-white/50"
            data-carousel-slide-to="3"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full bg-white/50"
            data-carousel-slide-to="4"
          ></button>
        </div>

        {/* Previous Button */}
        <button
          type="button"
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group"
          data-carousel-prev
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/40 group-hover:bg-black/60">
            ❮
          </span>
        </button>

        {/* Next Button */}
        <button
          type="button"
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group"
          data-carousel-next
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/40 group-hover:bg-black/60">
            ❯
          </span>
        </button>
      </div>
    </>
  )
}

export default Carousel