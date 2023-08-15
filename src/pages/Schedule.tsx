import * as HoverCard from '@radix-ui/react-hover-card';
import { SchedulingForm } from "../components/SchedulingForm";
import { CancelScheduling } from "../components/CancelScheduling";
import dayjs from "dayjs";
import { Header } from "../components/Header";
import { useSchedules } from '../hooks/useSchedules';

export function Schedule() {
    const { data } = useSchedules()

    console.log(data?.schedulesQuantityByWeekDay)

    function getEarlyTime(date?: [string]) {
        // console.log(date)
        let earliestTimeAvailable = ["8:00", "8:15", "8:30", "8:45", "9:00", "9:15", "9:30", "9:45", "10:00", "13:30", "13:45", "14:00", "14:15", "14:30", "14:45", "15:00", "15:15", "15:30", "15:45", "16:00", "16:15", "16:30", "16:45", "17:00"]

        date?.map(time => {
            // console.log(dayjs(earlyScheduling).format('DD HH:mm') )

            earliestTimeAvailable =
                earliestTimeAvailable
                    .filter(item => item !== dayjs(time).format('H:mm'))

            // console.log(dayjs(date[0]).format('DD HH:mm'), earlyScheduling[0])
            // console.log(dayjs('2023-08-17T12:00:00.000Z').format('DD HH:mm'))
            // console.log(dayjs(time).format('H:mm'), dayjs(date[0]).format('DD'))
        })


        // // console.log(dayjs(earlyScheduling).format('DD HH:mm') )
        // console.log(earliestTimeAvailable, dayjs(date?.[0]).format('DD'))

        return earliestTimeAvailable[0]
    }

    return (
        <>
            <Header />

            <div className="flex flex-col items-center mt-14">
                <p className="text-zinc-100 text-center">Arraste o mouse so bre os quadrados para mais informações.</p>

                <div className="flex gap-6 mt-10" >
                    {[
                        data?.schedulesQuantityByWeekDay.monday,
                        data?.schedulesQuantityByWeekDay.tuesday,
                        data?.schedulesQuantityByWeekDay.wednesday,
                        data?.schedulesQuantityByWeekDay.thursday,
                        data?.schedulesQuantityByWeekDay.friday,
                    ].map((weekDay, i) => {
                        return (
                            <HoverCard.Root openDelay={80} closeDelay={80} key={`${weekDay?.date} - ${i}`}>
                                <HoverCard.Trigger asChild>
                                    <div className="flex flex-col items-center gap-3">
                                        <span
                                            className={weekDay &&
                                                `${weekDay?.schedulesQuantity <= 5 ? "text-blue-300" : ''} 
                                                ${weekDay?.schedulesQuantity >= 6 && weekDay?.schedulesQuantity < 12 ? "text-green-300" : ''}
                                    P            ${weekDay?.schedulesQuantity >= 12 && weekDay?.schedulesQuantity < 16 ? "text-orange-300" : ''} 
                                                ${weekDay?.schedulesQuantity >= 16 ? "text-red-300" : ''}
                                                `}
                                        >
                                            {`${dayjs(weekDay?.date).format('ddd').toLocaleUpperCase().charAt(0)}`}
                                        </span>
                                        <div className={weekDay &&
                                            `${weekDay?.schedulesQuantity <= 5 ? "bg-blue-300 hover:from-blue-400" : ''}
                                            ${weekDay?.schedulesQuantity >= 6 && weekDay?.schedulesQuantity < 12 ? "bg-green-300 hover:from-green-400" : ''}
                                            ${weekDay?.schedulesQuantity >= 12 && weekDay?.schedulesQuantity < 16 ? "bg-orange-300 hover:from-orange-400" : ''}
                                            ${weekDay?.schedulesQuantity >= 16 ? "bg-red-300 hover:from-red-400" : ''}
                                            h-16 w-16 rounded-lg hover:scale-110 hover:bg-gradient-to-t transition-all
                                            `}
                                        />
                                    </div>
                                </HoverCard.Trigger>
                                <HoverCard.Portal>
                                    <HoverCard.Content sideOffset={6} >
                                        <div className="w-fit px-3 py-2 bg-gray-200 rounded-lg p-2">
                                            <p className="text-sm">Horários restantes: <span className="font-medium">{24 - weekDay?.schedulesQuantity!}</span></p>
                                            <p className="text-sm">Horário mais cedo disponível: <span className="font-medium">{getEarlyTime(weekDay?.schedulingTimes)}</span></p>

                                            <p className="text-sm mt-4 font-medium">Fazemos com amor! ❤️</p>
                                        </div>
                                        <HoverCard.Arrow className="fill-gray-200 text-white dark:text-gray-800" />
                                    </HoverCard.Content>
                                </HoverCard.Portal>
                            </HoverCard.Root>
                        )
                    })}

                </div>

                <SchedulingForm />

                <CancelScheduling />

                <p className="text-zinc-100 w-[800px] text-center mt-10">O atendimento em nossa unidade ocorre de segunda a sexta-feira, exceto em dias de feriados. Com disponibilidade de horário para atendermos até 24 pacientes em um único dia.</p>

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