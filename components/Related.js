import Link from "next/link"
import Image from "next/image"
import Author from "./_child/Author"

const Related = () => {
  return (
    <section className="pt-20">
        <h1 className="font-bold text-4xl py-12">Related</h1>

        <div className="flex flex-col gap-10">
            {Post()}
            {Post()}
            {Post()}
            {Post()}
            {Post()}
        </div>
    </section>
  )
}

function Post() {
    return (
        <div className="flex gap-5">
            <div className="image flex flex-col justify-start">
            <Link href={'/'}><a><Image src={'/images/img1.jpg'} className='rounded' width={300} height={200}/></a></Link>
            </div>
            <div className="info flex justify-center flex-col">
            <div className="cat">
                <Link href={'/'}><a className="text-orange-600 hover:text-orange-800">Business, Travel</a></Link>
                <Link href={'/'}><a className="text-gray-800 hover:text-gray-600">-July 10th, 2023</a></Link>
                </div>
            <div className="title">
                <Link href={'/'}><a className="text-xl font-bold text-gray-700">Your most unhappy customers are your greatest source of learning</a></Link>
            </div>
            <Author></Author>
            </div>
        </div>
    )
}

export default Related