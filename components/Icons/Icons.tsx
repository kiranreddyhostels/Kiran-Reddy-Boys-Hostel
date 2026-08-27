import { imageConfigDefault } from "next/dist/shared/lib/image-config";

interface IconsProps{
    src:string;
    alt:string;
    className?:string;
}
export default function Icon({src,alt,className=""}:IconsProps){
    return <img src={src} alt={alt} className={className}/>;
}