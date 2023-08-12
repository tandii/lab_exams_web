import { CaretUp, CaretDown, Check } from "@phosphor-icons/react";
import * as SelectPrimitive from '@radix-ui/react-select';
import { Controller, Control } from 'react-hook-form'
import { FormInput } from "./SchedulingForm";

interface SelectProps {
    values: string[]
    defaultValue: string
    name: "bloodGroup" | "weekDay"
    control: Control<FormInput>
}

export function Select({ values, defaultValue, name, control }: SelectProps) {
    return (
        <Controller
            name={name}
            defaultValue={defaultValue}
            control={control}
            render={({ field }) => (
                <SelectPrimitive.Root {...field} value={field.value} onValueChange={field.onChange} defaultValue={defaultValue} name={name}>
                    <SelectPrimitive.Trigger asChild aria-label={name} >
                        <button className="flex items-center w-fit pl-5 pr-4 h-8 text-sm rounded gap-3 bg-zinc-800 text-zinc-100  data-[placeholder]:text-zinc-500 data-[placeholder]:text-sm outline-none">
                            <SelectPrimitive.Value />
                            <SelectPrimitive.Icon>
                                <CaretDown />
                            </SelectPrimitive.Icon>
                        </button>
                    </SelectPrimitive.Trigger>
                    <SelectPrimitive.Portal>
                        <SelectPrimitive.Content>
                            <SelectPrimitive.ScrollUpButton className="flex items-center justify-center text-gray-700 dark:text-gray-300">
                                <CaretUp />
                            </SelectPrimitive.ScrollUpButton>
                            <SelectPrimitive.Viewport className="bg-zinc-800 p-2 rounded-lg shadow-lg">
                                <SelectPrimitive.Group>
                                    {values.map(
                                        (value, i) => (
                                            <SelectPrimitive.Item
                                                // disabled={value === "Grapes"}
                                                key={`${value}-${i}`}
                                                value={value.toLowerCase()}
                                                className="relative flex items-center px-8 py-2 rounded-md text-sm text-zinc-100 bg-zinc-800 hover:bg-zinc-700"

                                            >
                                                <SelectPrimitive.ItemText>{value}</SelectPrimitive.ItemText>
                                                <SelectPrimitive.ItemIndicator className="absolute left-2 inline-flex items-center">
                                                    <Check />
                                                </SelectPrimitive.ItemIndicator>
                                            </SelectPrimitive.Item>
                                        )
                                    )}
                                </SelectPrimitive.Group>
                            </SelectPrimitive.Viewport>
                            <SelectPrimitive.ScrollDownButton className="flex items-center justify-center text-gray-700 dark:text-gray-300">
                                <CaretDown />
                            </SelectPrimitive.ScrollDownButton>
                        </SelectPrimitive.Content>
                    </SelectPrimitive.Portal>
                </SelectPrimitive.Root>
            )}

        />
    )
}