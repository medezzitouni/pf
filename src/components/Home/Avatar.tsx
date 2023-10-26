import { profileImage } from "@/lib/constants";

type Props = {
  className?: string;
}

function Avatar({ className }: Props) {
  return <div className={`${className}`}>
  <div
    className="h-72 w-72 md:portrait:h-96 md:portrait:w-96 lg:h-96 lg:w-96 bg-cover bg-no-repeat rounded-[33%_67%_65%_35%/62%_55%_45%_38%] "
    style={{
      backgroundImage: `url(${profileImage})`,
    }}
  ></div>
</div>;
}

export default Avatar;
