import { Link } from "react-router-dom"
import * as HoverCard from '@radix-ui/react-hover-card';


export function Home() {
    return (
        <>
            <nav className="flex items-center justify-between bg-zinc-800 w-full h-10 px-14">
                <Link to='/' className="text-zinc-100 font-semibold">
                    Lab Exams
                </Link>

                <div className="flex items-center gap-10 text-gray-100">
                    <Link to='' >Sobre</Link>
                    <Link to='' >Campanhas</Link>
                    <Link to='' className="bg-zinc-500 hover:bg-zinc-400/80 py-1 px-4 rounded-lg font-medium">AGENDAR</Link>
                </div>
            </nav>

            <div className="flex flex-col items-center mt-14">
                <p className="text-zinc-100 text-center">Arraste o mouse sobre os quadrados para mais informações.</p>

                <div className="flex gap-6 mt-10">
                    <HoverCard.Root openDelay={80} closeDelay={80}>
                        <HoverCard.Trigger asChild>
                            <div className="flex flex-col items-center gap-3">
                                <span className="text-blue-300">S</span>
                                <div className="h-16 w-16 bg-blue-300 rounded-lg hover:scale-110 hover:bg-gradient-to-t hover:from-blue-400 transition-all" />
                            </div>
                        </HoverCard.Trigger>
                        <HoverCard.Portal>
                            <HoverCard.Content sideOffset={6} >
                                <div className="w-fit px-3 py-2 bg-gray-200 rounded-lg p-2">
                                    <p className="text-sm">Horários restantes: <span className="font-medium">12</span></p>
                                    <p className="text-sm">Horário mais cedo disponível: <span className="font-medium">9:00</span></p>

                                    <p className="text-sm mt-4 font-medium">Fazemos com amor! ❤️</p>
                                </div>
                                <HoverCard.Arrow className="fill-gray-200 text-white dark:text-gray-800" />
                            </HoverCard.Content>
                        </HoverCard.Portal>
                    </HoverCard.Root>
                    <HoverCard.Root openDelay={80} closeDelay={80}>
                        <HoverCard.Trigger asChild>
                            <div className="flex flex-col items-center gap-3">
                                <span className="text-green-300">T</span>
                                <div className="h-16 w-16 bg-green-300 rounded-lg hover:scale-110 hover:bg-gradient-to-t hover:from-green-400 transition-all" />
                            </div>
                        </HoverCard.Trigger>
                        <HoverCard.Portal>
                            <HoverCard.Content sideOffset={6} >
                                <div className="w-fit px-3 py-2 bg-gray-200 rounded-lg p-2">
                                    <p className="text-sm">Horários restantes: <span className="font-medium">12</span></p>
                                    <p className="text-sm">Horário mais cedo disponível: <span className="font-medium">9:00</span></p>

                                    <p className="text-sm mt-4 font-medium">Fazemos com amor! ❤️</p>
                                </div>
                                <HoverCard.Arrow className="fill-gray-200 text-white dark:text-gray-800" />
                            </HoverCard.Content>
                        </HoverCard.Portal>
                    </HoverCard.Root>
                    <HoverCard.Root openDelay={80} closeDelay={80}>
                        <HoverCard.Trigger asChild>
                            <div className="flex flex-col items-center gap-3">
                                <span className="text-red-300">Q</span>
                                <div className="h-16 w-16 bg-red-300 rounded-lg hover:scale-110 hover:bg-gradient-to-t hover:from-red-400 transition-all" />
                            </div>
                        </HoverCard.Trigger>
                        <HoverCard.Portal>
                            <HoverCard.Content sideOffset={6} >
                                <div className="w-fit px-3 py-2 bg-gray-200 rounded-lg p-2">
                                    <p className="text-sm">Horários restantes: <span className="font-medium">12</span></p>
                                    <p className="text-sm">Horário mais cedo disponível: <span className="font-medium">9:00</span></p>

                                    <p className="text-sm mt-4 font-medium">Fazemos com amor! ❤️</p>
                                </div>
                                <HoverCard.Arrow className="fill-gray-200 text-white dark:text-gray-800" />
                            </HoverCard.Content>
                        </HoverCard.Portal>
                    </HoverCard.Root>
                    <HoverCard.Root openDelay={80} closeDelay={80}>
                        <HoverCard.Trigger asChild>
                            <div className="flex flex-col items-center gap-3">
                                <span className="text-orange-300">Q</span>
                                <div className="h-16 w-16 bg-orange-300 rounded-lg hover:scale-110 hover:bg-gradient-to-t hover:from-orange-400 transition-all" />
                            </div>
                        </HoverCard.Trigger>
                        <HoverCard.Portal>
                            <HoverCard.Content sideOffset={6} >
                                <div className="w-fit px-3 py-2 bg-gray-200 rounded-lg p-2">
                                    <p className="text-sm">Horários restantes: <span className="font-medium">12</span></p>
                                    <p className="text-sm">Horário mais cedo disponível: <span className="font-medium">9:00</span></p>

                                    <p className="text-sm mt-4 font-medium">Fazemos com amor! ❤️</p>
                                </div>
                                <HoverCard.Arrow className="fill-gray-200 text-white dark:text-gray-800" />
                            </HoverCard.Content>
                        </HoverCard.Portal>
                    </HoverCard.Root>
                    <HoverCard.Root openDelay={80} closeDelay={80}>
                        <HoverCard.Trigger asChild>
                            <div className="flex flex-col items-center gap-3">
                                <span className="text-green-300">S</span>
                                <div className="h-16 w-16 bg-green-300 rounded-lg hover:scale-110 hover:bg-gradient-to-t hover:from-green-400 transition-all" />
                            </div>
                        </HoverCard.Trigger>
                        <HoverCard.Portal>
                            <HoverCard.Content sideOffset={6} >
                                <div className="w-fit px-3 py-2 bg-gray-200 rounded-lg p-2">
                                    <p className="text-sm">Horários restantes: <span className="font-medium">12</span></p>
                                    <p className="text-sm">Horário mais cedo disponível: <span className="font-medium">9:00</span></p>

                                    <p className="text-sm mt-4 font-medium">Fazemos com amor! ❤️</p>
                                </div>
                                <HoverCard.Arrow className="fill-gray-200 text-white dark:text-gray-800" />
                            </HoverCard.Content>
                        </HoverCard.Portal>
                    </HoverCard.Root>

                </div>

                <button className="text-zinc-50 py-2 bg-gray-500 hover:bg-gray-400/80 px-14 font-semibold rounded-lg mt-14">FAZER AGENDAMENTO</button>

                <p className="text-zinc-100 w-[800px] text-center mt-10">O atendimento em nossa unidade ocorre de segunda a sexta-feira, exceto em dias de feriados. Com disponibilidade de horário para atendermos até 23 pacientes em um único dia.</p>

                <div className="mt-4">
                    <p className="text-zinc-100">Horário de atendimento pela parte da manhã: 8h ~ 11h</p>
                    <p className="text-zinc-100">Horário de atendimento pela parte da tarde: 13h30 ~ 17h</p>
                </div>

                <p className="text-zinc-100 mt-12" >Presamos pela qualidade e ótimo atendimento dos pacientes.</p>
                <p className="text-zinc-100" >Agende já o seu horário!</p>
            </div>


        </>
    )
}