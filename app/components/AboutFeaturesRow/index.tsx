import Image from "next/image";

type IVerticalFeatureRowProps = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse: boolean;
};

const AboutFeaturesRow = (props: IVerticalFeatureRowProps) => {
  console.log(props);
  return (
    <div
      className={`flex sm:flex-col px-[5%] xs:px-4 items-center gap-4 py-2 ${
        props.reverse && "flex-row-reverse"
      }`}
    >
      <div className="w-full text-center sm:px-6">
        <h3 className="text-3xl text-gray-900 font-semibold">{props.title}</h3>
        <div className="mt-6 text-xl leading-9">{props.description}</div>
      </div>

      <div className="w-full flex flex-col items-center justify-center">
        <Image
          src={props.image}
          alt={props.imageAlt}
          width={350}
          height={350}
        />
      </div>
    </div>
  );
};

export { AboutFeaturesRow };
