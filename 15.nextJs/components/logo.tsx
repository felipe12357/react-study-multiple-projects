import Image from "next/image";
const LogoComponent = () =>{
    return (
        <div className="flex justify-center mt-5">
            <div className="relative w-40 h-40">
                <Image src='/logo.svg' alt='logo' fill></Image>
            </div>
        </div>
    )    
}
export default LogoComponent;