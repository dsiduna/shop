import React from "react";
import Link from "next/link";

interface IHeroOneButtonProps {
  title: React.ReactNode;
  description: string;
}

const Hero: React.FC = () => {
  const HeroOneButton: React.FC<IHeroOneButtonProps> = (props) => (
    <header className="text-center">
      <h1 className="text-5xl text-gray-900 font-bold whitespace-pre-line leading-hero">
        {props.title}
      </h1>
      <div className="text-2xl my-4">{props.description}</div>
    </header>
  );

  return (
    <section className="pt-20 pb-32 bg-[#f5f5f5] shadow-lg">
      <HeroOneButton
        title={
          <>
            {"Your one-stop shop for all your\n"}
            <span className="text-primary-500">Tech Solutions</span>
          </>
        }
        description="Come shop with us, today."
      />
    </section>
  );
};

export default Hero;
