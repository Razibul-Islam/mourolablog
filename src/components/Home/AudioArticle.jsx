import img1 from "../../assets/audio1.jpg";
import img2 from "../../assets/audio2.jpg";
import WaveSVG from "../WaveSVG";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CommentIcon from "@mui/icons-material/Comment";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { useState } from "react";

const AudioArticle = () => {
  const [isWaveActive, setIsWaveActive] = useState(false);
  const stopWave = () => {
    setIsWaveActive(!isWaveActive);
  };

  return (
    <div className="my-16">
      <div className="text-center">
        <h1 className="text-4xl font-bold leading-tight">
          Latest audio articles
        </h1>
        <p className="text-xl text-secondary mt-1 leading-snug">
          Discover the most outstanding articles in all topics of life.
        </p>
      </div>
      <div className="mt-10 relative grid grid-cols-3 gap-5">
        <div>
          <div
            className="h-72 rounded-3xl relative"
            style={{
              backgroundImage: `url(${img1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="inset-0 absolute bg-primary/30 rounded-3xl"></div>
            <div className="absolute inset-0 top-5 text-white">
              <span className="bg-primary p-2 rounded-full hover:bg-white hover:text-primary transition-colors duration-300 cursor-pointer ml-5 ">
                Electronics
              </span>

              <div className="absolute w-full bottom-16">
                <div className="flex justify-between items-center px-10">
                  <WaveSVG
                    setIsWaveActive={setIsWaveActive}
                    isWaveActive={isWaveActive}
                  />
                  <p
                    onClick={stopWave}
                    className="p-3 bg-secondary rounded-full cursor-pointer"
                  >
                    {isWaveActive ? (
                      <PauseIcon className="scale-150" />
                    ) : (
                      <PlayArrowIcon className="scale-150" />
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white text-primary w-[90%] rounded-r-3xl rounded-bl-3xl shadow-2xl -mt-14 z-10 relative p-5">
            <h1 className="text-xl font-bold mb-2">
              To cool datacenter servers
            </h1>
            <p className="text-secondary text-sm line-clamp-2">
              Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper
              augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc
              viverra...
            </p>
            <div className="flex justify-between items-center mt-5">
              <div className="flex justify-between items-center w-2/5">
                <p>
                  <FavoriteBorderIcon className="mr-2" />
                  34
                </p>
                <p>
                  <CommentIcon className="mr-2" />
                  110
                </p>
              </div>
              <p>
                <BookmarkBorderIcon />
              </p>
            </div>
          </div>
        </div>
        <div>
          <div
            className="h-72 rounded-3xl relative"
            style={{
              backgroundImage: `url(${img1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="inset-0 absolute bg-primary/30 rounded-3xl"></div>
            <div className="absolute inset-0 top-5 text-white">
              <span className="bg-primary p-2 rounded-full hover:bg-white hover:text-primary transition-colors duration-300 cursor-pointer ml-5 ">
                Electronics
              </span>

              <div className="absolute w-full bottom-16">
                <div className="flex justify-between items-center px-10">
                  <WaveSVG
                    setIsWaveActive={setIsWaveActive}
                    isWaveActive={isWaveActive}
                  />
                  <p
                    onClick={stopWave}
                    className="p-3 bg-secondary rounded-full cursor-pointer"
                  >
                    {isWaveActive ? (
                      <PauseIcon className="scale-150" />
                    ) : (
                      <PlayArrowIcon className="scale-150" />
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white text-primary w-[90%] rounded-r-3xl rounded-bl-3xl shadow-2xl -mt-14 z-10 relative p-5">
            <h1 className="text-xl font-bold mb-2">
              To cool datacenter servers
            </h1>
            <p className="text-secondary text-sm line-clamp-2">
              Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper
              augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc
              viverra...
            </p>
            <div className="flex justify-between items-center mt-5">
              <div className="flex justify-between items-center w-2/5">
                <p>
                  <FavoriteBorderIcon className="mr-2" />
                  34
                </p>
                <p>
                  <CommentIcon className="mr-2" />
                  110
                </p>
              </div>
              <p>
                <BookmarkBorderIcon />
              </p>
            </div>
          </div>
        </div>
        <div>
          <div
            className="h-72 rounded-3xl relative"
            style={{
              backgroundImage: `url(${img1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="inset-0 absolute bg-primary/30 rounded-3xl"></div>
            <div className="absolute inset-0 top-5 text-white">
              <span className="bg-primary p-2 rounded-full hover:bg-white hover:text-primary transition-colors duration-300 cursor-pointer ml-5 ">
                Electronics
              </span>

              <div className="absolute w-full bottom-16">
                <div className="flex justify-between items-center px-10">
                  <WaveSVG
                    setIsWaveActive={setIsWaveActive}
                    isWaveActive={isWaveActive}
                  />
                  <p
                    onClick={stopWave}
                    className="p-3 bg-secondary rounded-full cursor-pointer"
                  >
                    {isWaveActive ? (
                      <PauseIcon className="scale-150" />
                    ) : (
                      <PlayArrowIcon className="scale-150" />
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white text-primary w-[90%] rounded-r-3xl rounded-bl-3xl shadow-2xl -mt-14 z-10 relative p-5">
            <h1 className="text-xl font-bold mb-2">
              To cool datacenter servers
            </h1>
            <p className="text-secondary text-sm line-clamp-2">
              Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper
              augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc
              viverra...
            </p>
            <div className="flex justify-between items-center mt-5">
              <div className="flex justify-between items-center w-2/5">
                <p>
                  <FavoriteBorderIcon className="mr-2" />
                  34
                </p>
                <p>
                  <CommentIcon className="mr-2" />
                  110
                </p>
              </div>
              <p>
                <BookmarkBorderIcon />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5 mt-10">
        <div className="p-4 flex items-center justify-between bg-white shadow-xl">
          <img src={img2} className="max-w-24 h-24 object-cover rounded-full" />
          <div>
            <h1 className="text-xl font-bold">Lenovo’s smarter devices</h1>
            <p className="text-xs text-secondary my-1">
              40 Episode · 110 minutes
            </p>
            <button
              onClick={stopWave}
              className="flex items-center hover:bg-secondary rounded-full transition-colors duration-75 group"
            >
              <span className="bg-secondary p-2 rounded-full ">
                {isWaveActive ? (
                  <PauseIcon className="scale-105 text-white" />
                ) : (
                  <PlayArrowIcon className="scale-105 text-white" />
                )}
              </span>
              <span className="p-2 group-hover:text-white">
                {isWaveActive ? "Now Playing" : "Listen Now"}
              </span>
            </button>
          </div>
        </div>
        <div className="p-4 flex items-center justify-between bg-white shadow-xl">
          <img src={img2} className="max-w-24 h-24 object-cover rounded-full" />
          <div>
            <h1 className="text-xl font-bold">Lenovo’s smarter devices</h1>
            <p className="text-xs text-secondary my-1">
              40 Episode · 110 minutes
            </p>
            <button
              onClick={stopWave}
              className="flex items-center hover:bg-secondary rounded-full transition-colors duration-75 group"
            >
              <span className="bg-secondary p-2 rounded-full ">
                {isWaveActive ? (
                  <PauseIcon className="scale-105 text-white" />
                ) : (
                  <PlayArrowIcon className="scale-105 text-white" />
                )}
              </span>
              <span className="p-2 group-hover:text-white">
                {isWaveActive ? "Now Playing" : "Listen Now"}
              </span>
            </button>
          </div>
        </div>
        <div className="p-4 flex items-center justify-between bg-white shadow-xl">
          <img src={img2} className="max-w-24 h-24 object-cover rounded-full" />
          <div>
            <h1 className="text-xl font-bold">Lenovo’s smarter devices</h1>
            <p className="text-xs text-secondary my-1">
              40 Episode · 110 minutes
            </p>
            <button
              onClick={stopWave}
              className="flex items-center hover:bg-secondary rounded-full transition-colors duration-75 group"
            >
              <span className="bg-secondary p-2 rounded-full ">
                {isWaveActive ? (
                  <PauseIcon className="scale-105 text-white" />
                ) : (
                  <PlayArrowIcon className="scale-105 text-white" />
                )}
              </span>
              <span className="p-2 group-hover:text-white">
                {isWaveActive ? "Now Playing" : "Listen Now"}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioArticle;
