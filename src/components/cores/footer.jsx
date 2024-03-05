import { PiWhatsappLogoThin } from "react-icons/pi"
import { SlSocialInstagram } from "react-icons/sl"
import { SlSocialTwitter } from "react-icons/sl"

export default function Footer(){
    return(
        <div className="bg-neutral-800 h-[110px] w-[100%] 
        flex items-center justify-end gap-1 pr-7">
            <span>
            <PiWhatsappLogoThin className="text-white size-14" />
            </span>
            <span>
            <SlSocialInstagram className="text-white size-11 mr-1.5" />
            </span>
            <span>
            <SlSocialTwitter className="text-white size-12" />
            </span>
        </div>
    )
}