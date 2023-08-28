import * as Dialog from '@radix-ui/react-dialog';
import { useEffect, useState } from "react";
import { X, CaretUp, CaretDown, Check } from "@phosphor-icons/react";
import * as SelectPrimitive from '@radix-ui/react-select';
import InputMask from 'react-input-mask'
import * as RadioGroup from '@radix-ui/react-radio-group';
import { Select } from './Select';
import dayjs from 'dayjs';
import ptBr from 'dayjs/locale/pt-br'
import utc from 'dayjs/plugin/utc'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { ToastRadix } from './Toast';
import { Loading } from './Loading';
import { isValidCPF } from '../utils/is-valid-cpf';
import colors from 'tailwindcss/colors';
import { useSchedulingMutate } from '../hooks/useCreateScheduling';
import { useSchedulesQuantity } from '../hooks/useSchedulesQuantity';
import { getEarliestTimeAvailable } from '../utils/get-earliest-time-available'

dayjs.locale(ptBr)
dayjs.extend(utc)

const weekDaysItems = {
    nameInput: "weekDay",
    values: ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"],
    defaultValue: "segunda"
}

const bloodGroupItems = {
    nameInput: "bloodGroup",
    values: ["Não sei", "A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
    defaultValue: "não sei"
}

const schema = z.object({
    name: z.string().trim().min(3, { message: 'O campo "NOME" é obrigatório' }),
    time: z.string(),
    phone: z.string()
        .transform(value => value.replace(/\D/g, ''))
        .refine(value => value.length === 11, { message: 'O campo "TELEFONE" é obrigatório' }),
    cpf: z.string()
        .transform(value => value.replace(/\D/g, ''))
        .refine(value => value.length === 11 || !!value.match(/(\d)\1{10}/), { message: 'O campo "CPF" é obrigatório' })
        .refine(value => !value.match(/(\d)\1{10}/), { message: 'O campo "CPF" é inválido' })
        .refine(value => isValidCPF(value), { message: 'O campo "CPF" é inválido' }),
    gender: z.string({ required_error: 'O campo "SEXO" é obrigatório' }),
    bloodGroup: z.string(),
    weekDay: z.string()
});

export interface FormInput {
    name: string
    time: string
    phone: string
    cpf: string
    gender: string
    bloodGroup: string
    weekDay: string
}

export function SchedulingForm() {
    const [isOpenDialog, setIsOpenDialog] = useState(false)
    const { control, register, handleSubmit, formState: { errors }, reset, watch, setValue } = useForm<FormInput>({
        resolver: zodResolver(schema),
        defaultValues: {
            weekDay: weekDaysItems.defaultValue
        }
    })
    const { mutate, isSuccess, isLoading, isError } = useSchedulingMutate()
    const { data } = useSchedulesQuantity()

    const watchWeekDay = watch("weekDay")

    const [key, setKey] = useState(+new Date())

    const handleCreateScheduling: SubmitHandler<FormInput> = async ({ name, time, phone, cpf, gender, bloodGroup, weekDay }) => {
        const weekDayIndex = weekDaysItems.values.findIndex(value => value.toLowerCase() === weekDay) + 1
        const date = dayjs(new Date()).day(7).add(weekDayIndex, 'day').format("MM DD, YYYY")
        const dateUTC = new Date(`${date} ${String(time)}`).toISOString()

        const data = {
            name,
            cpf,
            bloodGroup,
            gender,
            phone,
            date: dateUTC
        }

        mutate(data)
    }

    useEffect(() => {
        if (isSuccess) {
            setIsOpenDialog(false)
            setKey(+new Date())

            reset({
                name: "",
                cpf: "",
                phone: "",
                gender: undefined,
                time: "8:15",
                bloodGroup: bloodGroupItems.defaultValue,
                weekDay: weekDaysItems.defaultValue,
            })
        }
    }, [isSuccess])

    function getDate() {
        const weekDayIndex = weekDaysItems.values.findIndex(value => value.toLowerCase() === watchWeekDay) + 1
        const date = new Date(dayjs(new Date()).day(7).add(weekDayIndex, 'day').format("MM DD, YYYY")).toISOString()

        return dayjs(date).format('DD/MM/YYYY')
    }

    function chooseWeekDay() {
        switch (watchWeekDay) {
            case "segunda":
                return data?.schedulesQuantityByWeekDay.monday
            case "terça":
                return data?.schedulesQuantityByWeekDay.tuesday
            case "quarta":
                return data?.schedulesQuantityByWeekDay.wednesday
            case "quinta":
                return data?.schedulesQuantityByWeekDay.thursday
            case "sexta":
                return data?.schedulesQuantityByWeekDay.friday
            default:
                return data?.schedulesQuantityByWeekDay.monday
        }
    }

    useEffect(() => {
        switch (watchWeekDay) {
            case "segunda":
                setValue("time", getEarliestTimeAvailable(data?.schedulesQuantityByWeekDay.monday.schedulingTimes))
                break;
            case "terça":
                setValue("time", getEarliestTimeAvailable(data?.schedulesQuantityByWeekDay.tuesday.schedulingTimes))
                break;
            case "quarta":
                setValue("time", getEarliestTimeAvailable(data?.schedulesQuantityByWeekDay.wednesday.schedulingTimes))
                break;
            case "quinta":
                setValue("time", getEarliestTimeAvailable(data?.schedulesQuantityByWeekDay.thursday.schedulingTimes))
                break;
            case "sexta":
                setValue("time", getEarliestTimeAvailable(data?.schedulesQuantityByWeekDay.friday.schedulingTimes))
                break;
            default:
                setValue("time", getEarliestTimeAvailable(data?.schedulesQuantityByWeekDay.monday.schedulingTimes))
                break;
        }
    }, [watchWeekDay, data])

    return (
        <>
            {isSuccess && (
                <ToastRadix
                    title='Criação de Agendamento'
                    message='Agendamento criado com sucesso!'
                    type='success'
                />
            )}

            {isError && (
                <ToastRadix
                    title='Criação de Agendamento'
                    message='Não foi possível criar o Agendamento!'
                    type='error'
                />
            )}

            <Dialog.Root open={isOpenDialog} onOpenChange={setIsOpenDialog}>
                <Dialog.Trigger asChild>
                    <button className="text-zinc-50 py-2 bg-gray-500 hover:bg-gray-400/80 px-14 font-semibold rounded-lg mt-14">FAZER AGENDAMENTO</button>
                </Dialog.Trigger>
                <Dialog.Portal>

                    <Dialog.Overlay className="bg-black/50 fixed inset-0" />
                    <Dialog.Content className="bg-zinc-500 p-10 fixed top-[50%] left-[50%] max-w-[800px] translate-x-[-50%] translate-y-[-50%] rounded-xl">
                        <form onSubmit={handleSubmit(handleCreateScheduling)}>
                            <div className="bg-zinc-500 grid grid-cols-2 text-zinc-100">
                                <div className="flex flex-col gap-4">
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="name" className="font-semibold text-sm">Nome</label>
                                        <input maxLength={70} type="text" {...register("name")} autoComplete='off' className="bg-zinc-800 rounded px-3 text-sm h-8 w-44 focus:outline-none" />
                                        {errors.name && <span className="-mt-2 text-[11px] text-red-300">{errors.name.message}</span>}
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="cpf" className="font-semibold text-sm">CPF</label>
                                        <InputMask {...register("cpf")} mask='999.999.999-99' className="bg-zinc-800 rounded px-3 text-sm h-8 w-44 focus:outline-none  placeholder:text-violet-600" />
                                        {errors.cpf && <span className="-mt-2 text-[11px] text-red-300">{errors.cpf.message}</span>}
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="bloodGroup" className="font-semibold text-sm">Grupo sanguíneo</label>
                                        <Select control={control} values={bloodGroupItems.values} defaultValue={bloodGroupItems.defaultValue} name="bloodGroup" />
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="gender" className="font-semibold text-sm">Sexo</label>
                                        <Controller
                                            key={key}
                                            name="gender"
                                            defaultValue={undefined}
                                            control={control}
                                            render={({ field }) => (
                                                <RadioGroup.Root
                                                    className="flex flex-row gap-4"
                                                    aria-label="Gender"
                                                    {...field}
                                                    value={field.value}
                                                    onValueChange={field.onChange}
                                                >
                                                    <div className="flex items-center gap-1">
                                                        <RadioGroup.Item
                                                            className="bg-zinc-800 w-4 h-4 rounded-full"
                                                            value="feminino"
                                                            id="r1"
                                                        >
                                                            <RadioGroup.Indicator className={` data-[state=checked]:after:bg-zinc-100 flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[8px] after:h-[8px] after:rounded-full`} />
                                                        </RadioGroup.Item>
                                                        <label className="text-zinc-100 text-sm" htmlFor="r1">
                                                            Feminino
                                                        </label>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <RadioGroup.Item
                                                            className="bg-zinc-800 w-4 h-4 rounded-full"
                                                            value="masculino"
                                                            id="r2"
                                                        >
                                                            <RadioGroup.Indicator className={`data-[state=checked]:after:bg-zinc-100 flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[8px] after:h-[8px] after:rounded-full`} />
                                                        </RadioGroup.Item>
                                                        <label className="text-zinc-100 text-sm" htmlFor="r2">
                                                            Masculino
                                                        </label>
                                                    </div>
                                                </RadioGroup.Root>
                                            )}
                                        />
                                        {errors.gender && <span className="-mt-2 text-[11px] text-red-300">{errors.gender.message}</span>}
                                    </div>
                                </div>

                                <div className="flex flex-col gap-4">
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="dayWeek" className="font-semibold text-sm">Dia da semana</label>
                                        <div className='flex items-center gap-4'>
                                            <Select control={control} values={weekDaysItems.values} defaultValue={weekDaysItems.defaultValue} name="weekDay" />
                                            <span className='text-[13px]' >{getDate()}</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="time" className="font-semibold text-sm">Horário</label>
                                        {[chooseWeekDay()].map((weekDay, i) => (
                                            <Controller
                                                name="time"
                                                control={control}
                                                key={`${weekDay?.date}-${i}`}
                                                render={({ field }) => (
                                                    <SelectPrimitive.Root {...field} value={field.value} onValueChange={field.onChange} >
                                                        <SelectPrimitive.Trigger asChild aria-label="Food" >
                                                            <button className="flex items-center w-fit pl-5 pr-4 h-8 text-sm rounded gap-3 bg-zinc-800 text-zinc-100  data-[placeholder]:text-zinc-500 data-[placeholder]:text-sm outline-none">
                                                                <SelectPrimitive.Value />
                                                                <SelectPrimitive.Icon>
                                                                    <CaretDown />
                                                                </SelectPrimitive.Icon>
                                                            </button>
                                                        </SelectPrimitive.Trigger>
                                                        <SelectPrimitive.Portal>
                                                            <SelectPrimitive.Content>
                                                                <SelectPrimitive.ScrollUpButton className="flex items-center justify-center text-zinc-50 mb-1">
                                                                    <CaretUp weight="bold" />
                                                                </SelectPrimitive.ScrollUpButton>
                                                                <SelectPrimitive.Viewport className="bg-zinc-800 p-2 rounded-lg shadow-lg">
                                                                    <SelectPrimitive.Group>
                                                                        <SelectPrimitive.Label className="text-xs text-center mb-2 text-zinc-100/60">
                                                                            Manhã
                                                                        </SelectPrimitive.Label>
                                                                        {["8:00", "8:15", "8:30", "8:45", "9:00", "9:15", "9:30", "9:45", "10:00"].map(
                                                                            (hour, i) => (
                                                                                <SelectPrimitive.Item
                                                                                    disabled={weekDay?.schedulingTimes.map(time => {
                                                                                        return dayjs(time).format('H:mm')
                                                                                    }).includes(hour)}
                                                                                    key={`${hour}-${i}`}
                                                                                    value={hour.toLowerCase()}
                                                                                    className="relative data-[disabled]:hover:bg-zinc-800 data-[disabled]:line-through flex items-center px-8 py-2 rounded-md text-sm text-zinc-100 bg-zinc-800 hover:bg-zinc-700"
                                                                                >
                                                                                    <SelectPrimitive.ItemText>{hour}</SelectPrimitive.ItemText>
                                                                                    <SelectPrimitive.ItemIndicator className="absolute left-2 inline-flex items-center">
                                                                                        <Check />
                                                                                    </SelectPrimitive.ItemIndicator>
                                                                                </SelectPrimitive.Item>
                                                                            )
                                                                        )}
                                                                    </SelectPrimitive.Group>

                                                                    <SelectPrimitive.Separator className="h-px bg-zinc-100 m-1" />

                                                                    <SelectPrimitive.Group>
                                                                        <SelectPrimitive.Label className="text-xs text-center mb-2 mt-2 text-zinc-100/60">
                                                                            Tarde
                                                                        </SelectPrimitive.Label>
                                                                        {["13:30", "13:45", "14:00", "14:15", "14:30", "14:45", "15:00", "15:15", "15:30", "15:45", "16:00", "16:15", "16:30", "16:45", "17:00"].map(
                                                                            (hour, i) => (
                                                                                <SelectPrimitive.Item
                                                                                    disabled={weekDay?.schedulingTimes.map(time => {
                                                                                        return dayjs(time).format('H:mm')
                                                                                    }).includes(hour)}
                                                                                    key={`${hour}-${i}`}
                                                                                    value={hour.toLowerCase()}
                                                                                    className="relative data-[disabled]:hover:bg-zinc-800 data-[disabled]:line-through flex items-center px-8 py-2 rounded-md text-sm text-zinc-100 bg-zinc-800 hover:bg-zinc-700"
                                                                                >
                                                                                    <SelectPrimitive.ItemText>{hour}</SelectPrimitive.ItemText>
                                                                                    <SelectPrimitive.ItemIndicator className="absolute left-2 inline-flex items-center">
                                                                                        <Check />
                                                                                    </SelectPrimitive.ItemIndicator>
                                                                                </SelectPrimitive.Item>
                                                                            )
                                                                        )}
                                                                    </SelectPrimitive.Group>
                                                                </SelectPrimitive.Viewport>
                                                                <SelectPrimitive.ScrollDownButton className="flex items-center justify-center text-zinc-50 mt-1">
                                                                    <CaretDown weight="bold" />
                                                                </SelectPrimitive.ScrollDownButton>
                                                            </SelectPrimitive.Content>
                                                        </SelectPrimitive.Portal>
                                                    </SelectPrimitive.Root>
                                                )}
                                            />
                                        ))}
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="phone" className="font-semibold text-sm">Telefone</label>
                                        <InputMask {...register("phone")} type="tel" mask='(99) 99999-9999' className="bg-zinc-800 rounded px-3 text-sm h-8 w-44 focus:outline-none  placeholder:text-violet-600" />
                                        {errors.phone && <span className="-mt-2 text-[11px] text-red-300">{errors.phone.message}</span>}
                                    </div>
                                </div>
                            </div>

                            <button disabled={isLoading} type="submit" className="flex justify-center disabled:bg-zinc-100/70 bg-zinc-100 hover:bg-zinc-100/80 transition-all w-full rounded-lg py-1 font-semibold mt-6">
                                {isLoading ? <Loading color={colors.zinc[900]} size={24} /> : "AGENDAR"}
                            </button>
                        </form>

                        <p className="text-center text-zinc-200 mt-6 text-sm">O agendamento é sempre realizado na semana anterior, portanto esse exame será realizado somente na semana seguinte.</p>
                        <p className="text-center text-zinc-100 mt-2 text-sm">Em caso de urgência, contate-nos pelo telefone: (49) 99823-2547.</p>

                        <Dialog.Close asChild>
                            <button className="absolute top-3 right-3 hover:bg-zinc-50/20 p-1 rounded-full" aria-label="Close">
                                <X size={16} />
                            </button>
                        </Dialog.Close>
                    </Dialog.Content>

                </Dialog.Portal>
            </Dialog.Root>
        </>
    )
}