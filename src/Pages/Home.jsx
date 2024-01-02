import AudioArticle from "../components/Home/AudioArticle";
import Hero from "../components/Home/Hero";
import TrendingTopics from "../components/Home/TrendingTopics";

const Home = () => {
  return (
    <div className="font-inter max-w-7xl mx-auto">
      <Hero />
      <TrendingTopics />
      <AudioArticle />
    </div>
  );
};

export default Home;
