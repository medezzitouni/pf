import Image from "next/image";

type Props = {
  className?: string;
  src: string;
  containerStyle?: string;
  imageStyle?: string;
};

function Background({ containerStyle, imageStyle, src }: Props) {
  return (
    <div
      className={`
      ${containerStyle}
    `}
    >
      <Image
        className={imageStyle}
        src={src}
        fill
        sizes="100vw"
        alt="Med Ezzitouni"
      />
    </div>
  );
}

export default Background;
