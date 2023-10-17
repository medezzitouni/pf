import { client_logos } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

type Props = {
    className: string;
}
function Clients({ className }: Props) {
  return <div className={`${className} flex justify-center items-center bg-slate-400 dark:bg-transparent`}>
    <div className="w-full h-full md:w-2/4 lg:w-1/2 lg:h-4/6 flex justify-around lg:items-center bg-red-">
        {Object.values(client_logos).map((logo, idx) => (
            <Link target="_blank" href={logo.url} key={idx} className={`w-13 h-13 flex justify-center items-center bg-blue-`}>
                <Image className="object-contain aspect-video" src={`${logo.img}`} height={90} width={90} alt="logo.img" />
            </Link>
        ))}
    </div>
  </div>;

// ${ logo.img.includes('ipagency') ? 'w-15 h-full' : logo.img.includes('ametys') ? 'w-13 h-13' : 'w-12 h-12' }
// logo.img.includes('ipagency') ? 150 : 
// logo.img.includes('ipagency') ? 150 : 
}

export default Clients;
