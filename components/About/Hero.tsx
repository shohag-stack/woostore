'use client'
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image";

type HeroData = {
  media_url: string;
  sub_title: string;
  title: string;
  type: string;
};

type Props = {
    hero: HeroData[]
}

export default function Hero({hero}:Props) {


    return (
        <>
            <div className="h-[420px] relative w-full overflow-hidden">
                <Carousel className="h-full"
                    opts={
                        {
                            loop: true
                        }
                    }
                    plugins={[
                        Autoplay({
                            delay: 3000,
                        })
                    ]}
                >
                    <CarouselContent>
                        {
                            hero.map((item, index) => (
                                <CarouselItem key={index} >
                                    <div className="w-full h-[420] relative">
                                        <video
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                            className="w-full h-full object-cover"
                                            src={item.media_url}>
                                        </video>
                                        {/* <Image src={item.media_url} alt={item.title} className="w-full" width={1080} height={1920}/> */}
                                        
                                        <div className="absolute top-0 w-full h-full bg-black/20 flex flex-col justify-center items-center text-white text-center p-6">
                                            <div className="pb-5">
                                                <h1 className="font-bold text-white text-[45px] leading-12"> {item.title}</h1>
                                                <h6 className="text-white">{item.sub_title}</h6>
                                            </div>
                                            <button className="btn-secondary">shop now</button>
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))
                        }
                    </CarouselContent>
                </Carousel>
            </div>
        </>
    )

}