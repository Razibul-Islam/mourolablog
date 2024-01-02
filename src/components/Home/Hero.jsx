const Hero = () => {
  return (
    <header className="heroBg max-w-7xl mx-auto relative rounded-[40px] mt-5">
      <span className="absolute w-full h-full bg-black/50 top-0 left-0 z-0 rounded-[40px]"></span>
      <div className="z-10 relative text-white p-32 max-w-4xl">
        <h1 className="text-4xl font-bold leading-tight">Dive into the Digital World of Mourola Blog</h1>
        <p className="leading-tight">
          Explore cutting-edge insights, tech trends, and thought-provoking
          articles in the digital universe.
        </p>
        <button className="primaryBtn hover:text-white hover:border-white mt-5">
          Read More
        </button>
      </div>
    </header>
  );
};

export default Hero;
