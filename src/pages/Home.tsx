import { Link } from "react-router-dom"
import * as HoverCard from '@radix-ui/react-hover-card';
import * as Dialog from '@radix-ui/react-dialog';
import { useState } from "react";
import { X, CaretUp, CaretDown, Check } from "@phosphor-icons/react";
import * as Select from '@radix-ui/react-select';


export function Home() {
    const [isOpen, setIsOpen] = useState(false)

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

                <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
                    <Dialog.Trigger asChild>
                        <button className="text-zinc-50 py-2 bg-gray-500 hover:bg-gray-400/80 px-14 font-semibold rounded-lg mt-14">FAZER AGENDAMENTO</button>
                    </Dialog.Trigger>
                    <Dialog.Portal>

                        <Dialog.Overlay className="bg-black/50 data-[state=open]:animate-overlayShow fixed inset-0" />
                        <Dialog.Content className="bg-zinc-500 p-10 fixed top-[50%] left-[50%] max-w-[800px] translate-x-[-50%] translate-y-[-50%] rounded-xl">
                            <div className="bg-zinc-500 grid grid-cols-2 text-zinc-100">
                                <div className="flex flex-col gap-4">
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="name" className="font-semibold text-sm">* Nome</label>
                                        <input type="text" className="bg-zinc-800 rounded px-3 text-sm h-8 w-44 focus:outline-none" />
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="cpf" className="font-semibold text-sm">* CPF</label>
                                        <input type="text" className="bg-zinc-800 rounded px-3 text-sm h-8 w-44 focus:outline-none" />
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="bloodGroup" className="font-semibold text-sm">* Grupo sanguíneo</label>
                                        <input type="text" />
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="gender" className="font-semibold text-sm">* Sexo</label>
                                        <div className="flex gap-2">
                                            <span>
                                                <input type="radio" name="gender" /> Masculino
                                            </span>
                                            <span>
                                                <input type="radio" name="gender" /> Feminino
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-4">
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="dayWeek" className="font-semibold text-sm">* Dia da semana</label>
                                        <Select.Root defaultValue="segunda">
                                            <Select.Trigger asChild aria-label="Food" >
                                                <button className="flex items-center w-fit pl-5 pr-4 h-8 text-sm rounded gap-3 bg-zinc-800 text-zinc-100  data-[placeholder]:text-zinc-500 data-[placeholder]:text-sm outline-none">
                                                    <Select.Value />
                                                    <Select.Icon>
                                                        <CaretDown />
                                                    </Select.Icon>
                                                </button>
                                            </Select.Trigger>
                                            <Select.Portal>
                                                <Select.Content>
                                                    <Select.ScrollUpButton className="flex items-center justify-center text-gray-700 dark:text-gray-300">
                                                        <CaretUp />
                                                    </Select.ScrollUpButton>
                                                    <Select.Viewport className="bg-zinc-800 p-2 rounded-lg shadow-lg">
                                                        <Select.Group>
                                                            {["Segunda", "Terça", "Quarta", "Quinta", "Sexta"].map(
                                                                (dayWeek, i) => (
                                                                    <Select.Item
                                                                        // disabled={f === "Grapes"}
                                                                        key={`${dayWeek}-${i}`}
                                                                        value={dayWeek.toLowerCase()}
                                                                        className="relative flex items-center px-8 py-2 rounded-md text-sm text-zinc-100 bg-zinc-800 hover:bg-zinc-700"

                                                                    >
                                                                        <Select.ItemText>{dayWeek}</Select.ItemText>
                                                                        <Select.ItemIndicator className="absolute left-2 inline-flex items-center">
                                                                            <Check />
                                                                        </Select.ItemIndicator>
                                                                    </Select.Item>
                                                                )
                                                            )}
                                                        </Select.Group>
                                                    </Select.Viewport>
                                                    <Select.ScrollDownButton className="flex items-center justify-center text-gray-700 dark:text-gray-300">
                                                        <CaretDown />
                                                    </Select.ScrollDownButton>
                                                </Select.Content>
                                            </Select.Portal>
                                        </Select.Root>
                                    </div>
                                    <div>
                                        <label htmlFor="time" className="font-semibold text-sm">* Horário</label>
                                        <input type="text" />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="font-semibold text-sm">* Telefone</label>
                                        <input type="text" />
                                    </div>
                                </div>
                            </div>
                            <button className="bg-zinc-100 w-full">Agendar</button>
                            <p>O agendamento é sempre realizado na semana anterior, portanto esse exame será realizado somente na semana seguinte.</p>
                            <p>Em caso de urgência, contate-nos pelo telefone: (49) 99823-2547.</p>
                            <Dialog.Close asChild>
                                <button className="absolute top-[12px] right-[10px]" aria-label="Close">
                                    <X />
                                </button>
                            </Dialog.Close>
                        </Dialog.Content>

                    </Dialog.Portal>
                </Dialog.Root>

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