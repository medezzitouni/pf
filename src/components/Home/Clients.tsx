import { client_logos } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

type Props = {
  className: string;
};
function Clients({ className }: Props) {
  return (
    <div className={`${className} lg:justify-end`}>
      <div className="flex justify-center items-end md:items-center md:bg-black dark:bg-transparent h-full lg:h-2/3">
        <div
          className={`
        w-full h-5/6 md:w-2/4 lg:w-1/2 lg:h-4/6 flex justify-around
        items-center bg-black md:bg-transparent
      `}
        >
          {Object.values(client_logos).map((logo, idx) => (
            <Link
              target="_blank"
              href={logo.url}
              key={idx}
              className={`w-13 h-13 flex justify-center items-center bg-blue-`}
            >
              <Image
                className="object-contain aspect-video"
                src={`${logo.img}`}
                height={90}
                width={90}
                alt="logo.img"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Clients;
