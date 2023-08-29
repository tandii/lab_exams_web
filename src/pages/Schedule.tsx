import * as HoverCard from '@radix-ui/react-hover-card';
import { SchedulingForm } from "../components/SchedulingForm";
import { CancelScheduling } from "../components/CancelScheduling";
import dayjs from "dayjs";
import { Header } from "../components/Header";
import { useSchedulesQuantity } from '../hooks/useSchedulesQuantity';
import { getEarliestTimeAvailable } from '../utils/get-earliest-time-available'
import { clsx } from 'clsx'
import { Loading } from '../components/Loading';
import colors from 'tailwindcss/colors';

export function Schedule() {
    const { data, isLoading } = useSchedulesQuantity()

    const weekDaysInfo = [
        data?.schedulesQuantityByWeekDay.monday,
        data?.schedulesQuantityByWeekDay.tuesday,
        data?.schedulesQuantityByWeekDay.wednesday,
        data?.schedulesQuantityByWeekDay.thursday,
        data?.schedulesQuantityByWeekDay.friday,
    ]

    return (
        <>
            <Header />

            <div className="flex flex-col items-center mt-14">
                <p className="text-zinc-100 text-center">Arraste o mouse sobre os quadrados para mais informações.</p>

                <div className="flex gap-6 mt-10" >
                    {isLoading ? (
                        <div className='h-24 flex items-center'>
                            <Loading size={32} color={colors.zinc[100]} />
                        </div>
                    ) : (
                        weekDaysInfo.map((weekDay, i) => {
                            return (
                                <div className='flex flex-col items-center gap-3' key={`${weekDay?.date} - ${i}`}>
                                    <span className={weekDay && clsx(
                                        weekDay?.schedulesQuantity <= 5 && "text-blue-300",
                                        weekDay?.schedulesQuantity >= 6 && "text-green-300",
                                        weekDay?.schedulesQuantity >= 12 && "text-orange-300",
                                        weekDay?.schedulesQuantity >= 18 && "text-red-300")
                                    }>
                                        {`${dayjs(weekDay?.date).format('ddd').toLocaleUpperCase().charAt(0)}`}
                                    </span>

                                    <HoverCard.Root openDelay={80} closeDelay={80}>
                                        <HoverCard.Trigger asChild>
                                            <div className={weekDay && clsx(
                                                "h-16 w-16 rounded-lg hover:scale-110 hover:bg-gradient-to-t transition-all",
                                                weekDay?.schedulesQuantity <= 5 && "bg-blue-300 hover:from-blue-400",
                                                weekDay?.schedulesQuantity >= 6 && "bg-green-300 hover:from-green-400",
                                                weekDay?.schedulesQuantity >= 12 && "bg-orange-300 hover:from-orange-400",
                                                weekDay?.schedulesQuantity >= 18 && "bg-red-300 hover:from-red-400")
                                            } />
                                        </HoverCard.Trigger>
                                        <HoverCard.Portal>
                                            <HoverCard.Content sideOffset={6} >
                                                <div className="w-fit px-3 py-2 bg-gray-200 rounded-lg p-2">
                                                    <p className="text-sm">Horários restantes: <span className="font-medium">{24 - weekDay?.schedulesQuantity!}</span></p>
                                                    <p className="text-sm">Horário mais cedo disponível: <span className="font-medium">{getEarliestTimeAvailable(weekDay?.schedulingTimes)}</span></p>

                                                    <p className="text-sm mt-4 font-medium">Fazemos com amor! ❤️</p>
                                                </div>
                                                <HoverCard.Arrow className="fill-gray-200 text-white" />
                                            </HoverCard.Content>
                                        </HoverCard.Portal>
                                    </HoverCard.Root>
                                </div>
                            )
                        })
                    )}
                </div>

                <SchedulingForm />

                <CancelScheduling />

                <p className="text-zinc-100 w-[800px] text-center mt-10">O atendimento em nossa unidade ocorre de segunda a sexta-feira, exceto em dias de feriados. Com disponibilidade de horário para atendermos até 24 pacientes em um único dia.</p>

                <div className="mt-4">
                    <p className="text-zinc-100">Horário de atendimento pela parte da manhã: 8h ~ 10h</p>
                    <p className="text-zinc-100">Horário de atendimento pela parte da tarde: 13h30 ~ 17h</p>
                </div>

                <p className="text-zinc-100 mt-12" >Presamos pela qualidade e ótimo atendimento dos pacientes.</p>
                <p className="text-zinc-100" >Agende já o seu horário!</p>
            </div>


        </>
    )
}