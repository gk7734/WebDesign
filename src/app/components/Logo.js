import Image from "next/image";
import Eximg from '/public/Logo.png'

function Logo() {
    return (
        <header className={`absolute w-full z-30 flex items-center`}>
            <div className='mt-[39px] ml-[60px] container'>
                    <Image src={Eximg} alt='logo' width={126} height={14} />
            </div>
        </header>
    );
}

export default Logo