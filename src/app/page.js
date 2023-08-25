import Image from 'next/image'
import Avatar from "@/app/components/Avatar";

export default function Home() {
    return (
        <div className={`flex items-center`}>
            <div className={`ml-[60px] items-center`}>
                <div className={`-mt-[394px] pb-[38px]`}>
                    <h1 className='w-[296px]'>Vincent Schwartz</h1>
                </div>
                <div className={`pb-[38px]`}>
                    Boston Divorce Attorney
                </div>
                <div className={`pb-[38px] w-[324px]`}>
                    A long record of successfully resolving complex divorce & family law matters.
                </div>
                <button className={`bg-[#000] w-[147px] h-[38px] text-[#FFFFFF]`}>Book a Call</button>
            </div>
        </div>
    )
}
