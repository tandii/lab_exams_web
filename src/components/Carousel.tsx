import img_1 from '../assets/img_1.jpg'
import img_2 from '../assets/img_2.jpg'
import img_3 from '../assets/img_3.jpg'
import img_4 from '../assets/img_4.jpg'
import img_5 from '../assets/img_5.jpg'
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import { clsx } from 'clsx'

const images = [
    img_1,
    img_2,
    img_3,
    img_4,
    img_5
]

export function Carousel() {
    const [slide, setSlide] = useState(0)

    function prevSlide() {
        setSlide(slide === 0 ? images.length - 1 : slide - 1)
    }

    function nextSlide() {
        setSlide(slide === images.length - 1 ? 0 : slide + 1)
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setSlide(slide === images.length - 1 ? 0 : slide + 1)
        }, 4000);
        return () => {
            window.clearInterval(timer);
        };
    }, [slide]);

    return (
        <div className="flex items-center justify-center gap-6 mt-6">
            <div className="hover:bg-zinc-500/30 cursor-pointer rounded-full p-2">
                <ArrowLeft onClick={prevSlide} className="text-zinc-500" weight="bold" size={20} />
            </div>
            <div className="flex flex-col">
                {images.map((item, i) => (
                    <img
                        key={`${item}-${i}`}
                        className={clsx(
                            "rounded-lg w-[800px] h-72 object-cover",
                            slide !== i && "hidden"
                        )}
                        src={item}
                        alt=""
                    />
                ))}
                <div className="flex justify-center items-center gap-3">
                    {
                        images.map((_, i) => (
                            <div key={i} onClick={() => setSlide(i)}
                                className={clsx(
                                    "w-2 h-2 hover:bg-slate-500/40 cursor-pointer rounded-full mt-3",
                                    slide === i ? "bg-zinc-500" : "border border-zinc-500"
                                )}
                            />
                        ))
                    }
                </div>
            </div>
            <div className="hover:bg-zinc-500/30 cursor-pointer rounded-full p-2">
                <ArrowRight onClick={nextSlide} className="text-zinc-500 " weight="bold" size={20} />
            </div>
        </div>
    )
}