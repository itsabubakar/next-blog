import {ImFacebook} from 'react-icons/im'
import {ImTwitter} from 'react-icons/im'
import {ImYoutube} from 'react-icons/im'
import Link from 'next/link'


const Header = () => {
  return (
    <header className="bg-gray-50">
        <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
            <div className="md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0">
                <input type="text" placeholder="Search..." className="input-text"/>
            </div>
            <div className="shrink w-8 sm:order-2">
                <Link href={"/"}>
                     <a className='font-bold uppercase text-3xl design-font'>Design</a>
                </Link>
            </div>
            <div className="w-96 order-3 flex justify-center">
                <div className="flex gap-6">
                    <Link href={"/"}><a><ImFacebook color='#888888'/></a></Link>
                    <Link href={"/"}><a><ImTwitter color='#888888'/></a></Link>
                    <Link href={"/"}><a><ImYoutube color='#888888'/></a></Link>           
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header