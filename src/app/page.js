import Image from 'next/image'
import Avatar from "@/app/components/Avatar";

export default function Home() {
    return (
        <div className={`flex items-center`}>
            <div className={`ml-[60px] items-center`}>
                <div className={`-mt-[554px] pb-[38px]`}>
                    <div className={`font-playFairDisplay text-[50px] font-black`}>
                        VINCENT<br/> SCHWARTZ
                    </div>
                </div>
                <div className={`pb-[38px]`}>
                    <div className={`font-nunitoSans text-[16px] font-light`}>
                        BOSTON DIVORCE ATTORNEY
                    </div>
                </div>
                <div className={`pb-[38px] w-[324px]`}>
                    <div className={`font-nunitoSans text-[18px] font-normal`}>
                        A long record of successfully resolving complex divorce & family law matters.
                    </div>
                </div>
                <button className={`bg-[#000] w-[147px] h-[38px] text-[#FFFFFF]`}>Book a Call</button>
            </div>
        </div>
    )
}
