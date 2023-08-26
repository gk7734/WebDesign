import Link from "next/link";

export const navData = [
    {name: 'Services', path: '/'},
    {name: 'Pricing', path: '/'},
    {name: 'Blog', path: '/'},
]

function Navbar() {
    return (
        <nav className={`flex w-full items-center justify-end -mx-[30px] fixed`}>
            <div className={`flex`}>
                {navData.map((link) => {
                    return (
                        <div className='p-[32px] cursor-pointer'>
                            <Link href={link.path} className='flex flex-col items-center justify-between'>
                                <div className='font-normal text-[#fff] text-center text-[12px]'>
                                    {link.name}
                                </div>
                            </Link>
                        </div>
                    )
                })}
                <div className={`p-[25px] cursor-pointer`}>
                        <button className={`border-solid font-normal text-[#fff] w-[77px] h-[32px] bg-white/10 text-center opacity-15 text-[12px]`}>Call Now</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;