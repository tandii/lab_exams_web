import * as Dialog from '@radix-ui/react-dialog';
import { useState } from "react";
import { X } from "@phosphor-icons/react";
import InputMask from 'react-input-mask'
import dayjs from 'dayjs';
import ptBr from 'dayjs/locale/pt-br'
import utc from 'dayjs/plugin/utc'
import { api } from '../lib/api';
import { useForm, SubmitHandler } from 'react-hook-form'
import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { AxiosError, AxiosResponse } from 'axios';
import { ToastRadix } from './Toast';
import { useToast } from '../hooks/useToast';
import { Loading } from './Loading';
import { isValidCPF } from '../utils/is-valid-cpf';
import colors from 'tailwindcss/colors';

dayjs.locale(ptBr)
dayjs.extend(utc)

const schema = z.object({

    cpf: z.string()
        .transform(value => value.replace(/\D/g, ''))
        .refine(value => value.length === 11 || !!value.match(/(\d)\1{10}/), { message: 'O campo "CPF" é obrigatório' })
        .refine(value => !value.match(/(\d)\1{10}/), { message: 'O campo "CPF" é inválido' })
        .refine(value => isValidCPF(value), { message: 'O campo "CPF" é inválido' }),

    // cpf: z.string(),

});

export interface FormInput {
    cpf: string
}

interface SchedulingInfo {
    bloodGroup: string,
    cpf: string,
    createdAt: string,
    gender: string,
    id: string,
    name: string,
    phone: string,
    Scheduling: {
        date: string
    }
}

export function CancelScheduling() {
    const [scheduling, setScheduling] = useState<SchedulingInfo | null>(null)
    const [SuccessfulSearch, setSuccessfulSearch] = useState(true)
    const [isOpenDialog, setIsOpenDialog] = useState(false)
    const { isOpenToast, handleToggleToast } = useToast()
    const [isLoading, setIsLoading] = useState(false)
    const { register, handleSubmit, formState: { errors }, resetField } = useForm<FormInput>({
        resolver: zodResolver(schema),
        defaultValues: {
            cpf: ""
        }
    })

    // console.log(scheduling)


    const handleCancelScheduling: SubmitHandler<FormInput> = async ({ cpf }) => {
        setIsLoading(true)

        
        try {
            
            
            const response: AxiosResponse<SchedulingInfo> = await api.get(`/scheduling?cpf=${cpf}`)
            
            setScheduling({
                bloodGroup: response.data.bloodGroup,
                name: response.data.name,
                cpf: response.data.cpf?.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4"),
                gender: response.data.gender,
                id: response.data.id,
                createdAt: response.data.createdAt,
                phone: response.data.phone,
                Scheduling: {
                    date: dayjs(response.data.Scheduling.date).format('DD/MM/YYYY [~] HH[h]mm')
                },
            })
            
            resetField("cpf")

        } catch (err) {
            const error = err as AxiosError
            console.error(error.response?.data)

            if (err) {
                setSuccessfulSearch(false)
                handleToggleToast()
            }

        } finally {
            setIsLoading(false)
        }
    }

    return (
        <>
            {isOpenToast && !SuccessfulSearch && (
                <ToastRadix
                    title='Cancelar Agendamento'
                    message='Não há agendamento com este CPF!'
                    type='error'
                />
            )}

            <Dialog.Root open={isOpenDialog} onOpenChange={setIsOpenDialog}>
                <Dialog.Trigger asChild>
                    <button className="text-zinc-50 py-1 px-14 bg-red-400/60 rounded-lg mt-6 font-semibold hover:bg-red-400/70">
                        CANCELAR AGENDAMENTO
                    </button>
                </Dialog.Trigger>
                <Dialog.Portal>

                    <Dialog.Overlay className="bg-black/50 data-[state=open]:animate-overlayShow fixed inset-0" />
                    <Dialog.Content className="bg-zinc-500 px-10 py-6 fixed top-[40%] left-[50%] w-[600px] translate-x-[-50%] translate-y-[-50%] rounded-t-xl">
                        <Dialog.Title className='text-xl text-zinc-100 font-semibold mb-6'>
                            Cancelar Agendamento
                        </Dialog.Title>
                        <form onSubmit={handleSubmit(handleCancelScheduling)}>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="cpf" className="text-zinc-100 text-sm">Digite o CPF que usou para fazer o agendamento.</label>
                                <div className='flex gap-6'>
                                    <div className='flex flex-col'>
                                        <InputMask {...register("cpf")} mask='999.999.999-99' className="bg-zinc-800 text-zinc-100 rounded-l px-3 text-sm h-8 w-80 focus:outline-none  placeholder:text-violet-600" />
                                        {errors.cpf && <span className=" text-[11px] text-red-300">{errors.cpf.message}</span>}
                                    </div>
                                    <button
                                        disabled={isLoading}
                                        type="submit"
                                        className="flex justify-center items-center h-8 w-28 disabled:bg-zinc-100/70 bg-zinc-100 hover:bg-zinc-100/80 transition-all rounded-r font-semibold"
                                    >
                                        {isLoading ? <Loading color={colors.zinc[900]} size={24} /> : "BUSCAR"}
                                    </button>
                                </div>
                            </div>
                        </form>


                        <Dialog.Close asChild>
                            <button className="absolute top-3 right-3 hover:bg-zinc-50/20 p-1 rounded-full" aria-label="Close">
                                <X />
                            </button>
                        </Dialog.Close>
                        {scheduling && (
                            <form className='absolute left-0 -bottom-20 pl-4 py-3 w-full bg-zinc-500'>
                                <div className='grid grid-cols-3 '>
                                    <div className='flex flex-col gap-2'>
                                        <p className='text-zinc-100 text-sm font-semibold'>Paciente: <span className='font-normal'>{scheduling.name}</span></p>
                                        <p className='text-zinc-100 text-sm font-semibold'>Horário: <span className='font-normal'>{scheduling.Scheduling?.date}</span></p>
                                    </div>
                                    <div>
                                        <p className='text-zinc-100 text-sm font-semibold'>CPF: <span className='font-normal'>{scheduling.cpf}</span></p>
                                    </div>
                                    <div className='flex items-center justify-center'>
                                        <button
                                            type="submit"
                                            className="flex justify-center items-center h-8 w-28 disabled:bg-zinc-100/70 bg-zinc-100 hover:bg-zinc-100/80 transition-all rounded font-semibold"
                                        >
                                            CANCELAR
                                        </button>
                                    </div>
                                </div>
                            </form>
                        )}
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
        </>
    )
}