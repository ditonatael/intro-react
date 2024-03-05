export default function Skills(){
    return(
        <>
        <div className="pl-16 bg-neutral-700 h-[100%] min-h-screen pt-7">
            <div className="flex justify-between">
                <span className="text-white font-montserrat font-semibold text-xl">
                MySkills
                </span>
                <span className="text-white font-montserrat text-3xl font-semibold">
                UI/UX design,<br />Application design,<br /> UX research,<br />Visual communication,<br /> Prototyping Headline
                </span>
                <span className="grid grid-cols-2 gap-3 h-[300px] pr-10">
                <span className="bg-neutral-800 w-[200px] flex justify-center items-center ">
                    <img className="object-contain" src="src/assets/5968705.png"/>
                </span>
                <span className="bg-neutral-800 w-[200px] flex justify-center items-center">
                <img className="object-contain" src="src/assets/732244.png"/>
                </span>
                <span className="bg-neutral-800 w-[200px] flex justify-center items-center"> 
                <img className="object-contain" src="src/assets/5210800.png"/>
                </span>
                <span className="bg-neutral-800 w-[200px] flex justify-center items-center">
                <img className="object-contain" src="src/assets/5968559.png"/>
                </span>
                </span>
            </div>
            <div className="mt-40 flex justify-between">
                <span>
                    <div className="text-white font-montserrat font-medium text-3xl">
                        Get your free consultation now! <br />
                    </div>
                    <div className="text-white font-montserrat text-lg font-light mt-10">
                        Small or big, your business will love our financial help and business <br/>consultations! We are happy when our clients are too…
                    </div>
                </span>
                <span className="pr-32 pt-28">
                    <button className="bg-pink-600 text-white font-bold text-xl w-[300px] h-[70px] flex justify-center items-center rounded-lg">
                        Free Consultation
                    </button>
                </span>

            </div>    
        </div>
        </>
    )
}