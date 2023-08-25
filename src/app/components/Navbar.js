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
                                <div className='font-normal text-black text-center'>
                                    {link.name}
                                </div>
                            </Link>
                        </div>
                    )
                })}
                <div className={`p-[32px] cursor-pointer`}>
                        <button className={`border-solid border-[rgba(255, 255, 255, 0.15)] font-normal text-black text-center`}>Call Now</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;