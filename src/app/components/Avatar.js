import Image from "next/image";
import Eximg from '/public/Avatar.jpg'

function Avatar () {
    return (
        <div className={`w-[100%] h-[100vh]`}>
            <div className={`float-right flex w-[50%] h-[100vh] object-cover`}>
                <Image src={Eximg} alt='Avatar'/>
            </div>
        </div>
    )
}

export default Avatar;