import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="grid h-screen hero-gradient overflow-hidden relative">
      <div className="flex flex-col justify-center items-center w-[55%] mx-auto gap-4 xl:w-[20%] xl:absolute xl:top-[25%] xl:left-[5%]">
        <h3 className="text-white text-5xl text-center">NEW COLLECTION</h3>
        <Button
          variant="heroButton"
          className="xl:py-6"
          onClick={() => navigate("/shop")}
        >
          shop now
        </Button>
      </div>

      <div className="flex flex-col items-center w-[70%] mx-auto gap-4 xl:w-[20%] xl:absolute xl:top-[25%] xl:left-[70%] text-center">
        <h3 className="text-white text-4xl lg:text-5xl">
          Customize your own shirt now!
        </h3>
        <p className="text-white italic">please commission me I need money</p>
      </div>

      <img
        src="src/assets/shirt-hero.png"
        alt="shirt-hero"
        className="absolute top-[60%] left-1/2 -translate-x-1/2 scale-150 md:scale-100 lg:top-[60%] lg:max-w-none lg:left-[50%] xl:top-[40%] 2xl:h-screen"
      />
    </div>
  );
};

export default Hero;
