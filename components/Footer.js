import Link from "next/link"
import {ImFacebook} from 'react-icons/im'
import {ImTwitter} from 'react-icons/im'
import {ImYoutube} from 'react-icons/im'


const Footer = () => {
  return (
    <footer className="bg-grey-50">
      <div className="container mx-auto flex justify-center py-12">
        <div className="py-5 justify-center">
          
          <div className="flex gap-6 justify-center">
            <Link href={"/"}><a><ImFacebook color='#888888'/></a></Link>
            <Link href={"/"}><a><ImTwitter color='#888888'/></a></Link>
            <Link href={"/"}><a><ImYoutube color='#888888'/></a></Link>
          </div>

          <p className="py-5 text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, dolor!</p>
          <p className="text-gray-400 text-center">Terms & Condition</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer