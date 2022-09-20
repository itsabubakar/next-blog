import {Swiper, SwiperSlide} from "swiper/react"
import Link from "next/link"
import Image from "next/image"
import Author from "./_child/Author"

const SectionThree = () => {
  return (
    <section className="container mx-auto md:px-20 py-16">
        <h1 className="font-bold text-4xl py-12 text-center">Most Popular</h1>

        {/* swiper */}
        <Swiper
          slidesPerView={2}
        >
            <SwiperSlide>{Post()}</SwiperSlide>
            <SwiperSlide>{Post()}</SwiperSlide>
            <SwiperSlide>{Post()}</SwiperSlide>
            <SwiperSlide>{Post()}</SwiperSlide>
        </Swiper>
    </section>
  )
}

function Post() {
    return (
        <div className="grid mx-4">
            <div className="images">
              <Link href={'/'}><a><Image src={'/images/img1.jpg'} width={600} height={400}/></a></Link>
            </div>

            <div className="info flex justify-center flex-col py-4">
            <div className="cat">
                <Link href={'/'}><a className="text-orange-600 hover:text-orange-800">Business, Travel</a></Link>
                <Link href={'/'}><a className="text-gray-800 hover:text-gray-600">-July 10th, 2023</a></Link>
                </div>
            <div className="title">
                <Link href={'/'}><a className="text-3xl md:text-4xl font-bold text-gray-700">Your most unhappy customers are your greatest source of learning</a></Link>
            </div>
            <p className="text-gray-500 py-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore aliquid consequuntur labore eos dolorum, voluptates placeat unde, pariatur culpa dolores exercitationem officiis sequi beatae eaque optio quaerat accusantium debitis neque?</p>
            <Author></Author>
            </div>
        </div>
    )
}

export default SectionThree