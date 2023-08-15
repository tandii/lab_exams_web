import { ReactNode } from "react"

interface CampaignItemProps {
    src: string
    title: string
    text: ReactNode | string
}

export function CampaignItem({ src, title, text }: CampaignItemProps) {
    return (
        <div className="flex justify-center items-center gap-10 mt-10">
            <img src={src} alt="" className="w-[440px] h-60" />
            <div className="w-[560px]">
                <h2 className="font-semibold text-zinc-100 text-lg">{title}</h2>

                <div className="text-sm text-zinc-200 indent-3 mt-2 leading-relaxed">
                    {text}
                </div>
            </div>
        </div>
    )
}