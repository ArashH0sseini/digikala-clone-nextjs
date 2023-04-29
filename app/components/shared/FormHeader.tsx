import Image from "next/image";
import DigikalaLogo from "../../assets/images//logo.svg";

interface Props {
  title?:string,
  subtitle?:string,
  description:string,
}

function FormHeader({title,subtitle,description}:Props) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-center">
        <Image
          src={DigikalaLogo}
          width="150"
          height="40"
          alt="digikala-logo"
        />
      </div>
      <div className="space-y-6">
        <h2 className="text-black font-medium text-xl">{title}</h2>
        <div className="space-y-2">
          <h3 className="font-light text-[0.80rem]">{subtitle}</h3>
          <p className="font-light text-[0.80rem]">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default FormHeader;
