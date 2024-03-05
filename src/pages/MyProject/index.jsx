export default function ProjectPage(){
    return(
        <>
    <div className="pl-16 bg-neutral-800 h-full">
        <div className="flex justify-between pt-7">
            <span className="text-white font-montserrat font-light text-xl">
                MyProjects
            </span>
            <p className="text-white font-montserrat text-2xl font-semibold">
            I'm designed dozens of appealing interfaces <br />for websites and web apps.Take a look at my <br /> projects below.
            </p>
            <div className="grid grid-rows-2 pr-11">
            <button className="bg-fuchsia-600 text-white h-[50px] w-[150px] font-montserrat rounded-lg">
                this is button
            </button> <br />
            <button className="bg-blue-600 text-white
            h-[50px] w-[150px] font-montserrat rounded-lg">
                this is button
            </button> <br />
            </div>
        </div>          
        <div className="grid grid-cols-3 gap-3 pt-11">
                <div className="bg-zinc-100 h-[200px] w-[400px] flex justify-center items-center">
                    <img src={"/color-logo-1_150.png"}/>
                </div>
                <div className="bg-zinc-100 h-[200px] w-[400px] flex justify-center items-center">
                    <img src={"/color-logo-2_150.png"}/>
                </div>
                <div className="bg-zinc-100 h-[200px] w-[400px] flex justify-center items-center">
                    <img src={"/color-logo-3_150.png"}/>
                </div>
                <div className="bg-zinc-100 h-[200px] w-[400px] flex justify-center items-center">
                    <img src={"/color-logo-4_150.png"}/>
                </div>
                <div className="bg-zinc-100 h-[200px] w-[400px] flex justify-center items-center">
                    <img src={"/color-logo-5_150.png"}/>
                </div>
                <div className="bg-zinc-100 h-[200px] w-[400px] flex justify-center items-center">
                    <img src={"/color-logo-6_150.png"}/>
                </div>
        </div>
        <div className="grid grid-cols-3 gap-12 pt-40 pb-20">
            <span className="bg-white h-[400px] w-[400px] cursor-pointer
            overflow-hidden inline-block">
                <img className="h-full w-full object-cover
                duration-500 hover:scale-110 transition-transform" 
                src={"/pexels-photo-2438212.jpeg"}
                />
            </span>
             <span className="bg-white h-[400px] w-[400px] cursor-pointer
            overflow-hidden inline-block">
                <img className="h-full w-full object-cover
                duration-500 hover:scale-110 transition-transform" 
                src={"/pexels-photo-3137073.jpeg"}
                />
            </span>
             <span className="bg-white h-[400px] w-[400px] cursor-pointer
            overflow-hidden inline-block">
                <img className="h-full w-full object-cover
                duration-500 hover:scale-110 transition-transform" 
                src={"/pexels-photo-3261141.jpeg"}
                />
            </span>
             <span className="bg-white h-[400px] w-[400px] cursor-pointer
            overflow-hidden inline-block">
                <img className="h-full w-full object-cover
                duration-500 hover:scale-110 transition-transform" 
                src={"/pexels-photo-3802239.jpeg"}
                />
            </span>
             <span className="bg-white h-[400px] w-[400px] cursor-pointer
            overflow-hidden inline-block">
                <img className="h-full w-full object-cover
                duration-500 hover:scale-110 transition-transform" 
                src={"/pexels-photo-4107897.jpeg"}
                />
            </span>
             <span className="bg-white h-[400px] w-[400px] cursor-pointer
            overflow-hidden inline-block">
                <img className="h-full w-full object-cover
                duration-500 hover:scale-110 transition-transform" 
                src={"/pexels-photo-7766563.jpeg"}
                />
            </span>
        </div>
    </div>
    </>
    )
}