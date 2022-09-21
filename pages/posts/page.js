import Format from "../../layout/Format"
import Author from "../../components/_child/Author"
import Image from "next/image"
import Related from "../../components/Related"

const page = () => {
  return (
    <Format>
        <section className="container mx-auto md:px-2 py-16 w-1/2">
            <div className="flex justify-center">
                <Author />
            </div>

            <div className="post py-10">
                <h1 className="font-bold text-4xl text-center pb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                <p className="text-gray-500 text-xl text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quisquam quia doloremque.</p>
                <div className="py-10">
                    <Image src={"/images/img1.jpg"} width={900} height={600}/>
                </div>
                <div className="content text-gray-600 text-lg flex flex-col gap-4">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi atque quis nostrum modi eaque illo optio voluptas sunt? Error quos fugiat, eaque animi assumenda iusto rem aperiam consequatur voluptates minima!
                    </p>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi atque quis nostrum modi eaque illo optio voluptas sunt? Error quos fugiat, eaque animi assumenda iusto rem aperiam consequatur voluptates minima!
                    </p>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi atque quis nostrum modi eaque illo optio voluptas sunt? Error quos fugiat, eaque animi assumenda iusto rem aperiam consequatur voluptates minima!
                    </p>
                </div>
            </div>
            <Related />
        </section>
    </Format>
  )
}

export default page