import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel"
import Autoplay from "embla-carousel-autoplay"
export default function Hero(){

    const videos = [
        "/assets/video-1.mp4",
        "/assets/video-2.mp4",
    ]

    return (
        <>
            <div className="h-[420px] relative w-full overflow-hidden">
                <Carousel className="h-full"
                opts={
                    {
                        loop:true
                    }
                }
                plugins={[
                    Autoplay({
                        delay: 4000,
                    })
                ]}
                >
                    <CarouselContent>
                        {
                            videos.map((vid,index)=>(
                                <CarouselItem key={index} >
                                    <div className="w-full h-[420] relative">
                                        <video
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        className="w-full h-full object-cover"
                                        src={vid}>
                                        </video>
                                        <div className="absolute top-0 w-full h-full bg-black/20 flex flex-col justify-center items-center text-white text-center p-6">
                                            <h2 className="text-3xl font-bold mb-2 text-white">Beauty on the Rise {index}</h2>
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