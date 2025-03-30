import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="grid h-screen hero-gradient overflow-hidden relative">

      <div className="flex flex-col justify-center items-center w-[55%] mx-auto gap-8 xl:w-[20%] xl:absolute xl:top-[25%] xl:left-[5%]">
        <h3 className="text-white text-5xl">NEW COLLECTION</h3>
        <Button variant="heroButton" className="xl:py-6" onClick={() => navigate("/shop")}>shop now</Button>
      </div>

      <div className="flex flex-col items-center w-[55%] mx-auto gap-8 xl:w-[20%] xl:absolute xl:top-[25%] xl:left-[70%]">
        <h3 className="text-white text-5xl">Customize your own shirt now!</h3>
        <p className="text-white italic">please commission me I need money</p>
      </div>

      <img
        src="src/assets/shirt-hero.png"
        alt="shirt-hero"
        className="absolute top-[30%] left-[25%] max-w-none"
      />

    </div>
  );
};

export default Hero;
