import * as ToastPrimitive from "@radix-ui/react-toast";
import { CheckCircle, WarningCircle, X } from "@phosphor-icons/react";
import colors from 'tailwindcss/colors'

interface ToastRadix {
    title: string
    message: string
    type: "success" | "error"
}

export function ToastRadix({ title, message, type }: ToastRadix) {
    return (
        <ToastPrimitive.Provider swipeDirection='right' duration={5000} >
            <ToastPrimitive.Root
                className="z-50 fixed bg-gray-100 bottom-10 right-4 w-full max-w-sm rounded-lg"
            >
                <div className="flex">
                    <div className="flex my-auto pl-5">
                        {type === "success" && (
                            <CheckCircle size={24} color={colors.green[600]} weight="bold" />
                        )}
                        {type === "error" && (
                            <WarningCircle size={24} color={colors.red[600]} weight="bold" />
                        )}
                    </div>
                    <div className="flex-1 flex items-center pl-5 py-4">
                        <div className="w-full">
                            <ToastPrimitive.Title className="text-sm font-medium text-zinc-900">
                                {title}
                            </ToastPrimitive.Title>
                            <ToastPrimitive.Description className={`mt-1 text-sm ${type === "success" ? "text-green-800" : ""} ${type === "error" ? "text-red-800" : ""}`}>
                                {message}
                            </ToastPrimitive.Description>
                        </div>
                    </div>
                    <div className="flex my-auto px-3 py-2">
                        <ToastPrimitive.Close className="w-full rounded-full p-2 flex items-center justify-center text-sm font-medium text-gray-700  hover:bg-zinc-200">
                            <X />
                        </ToastPrimitive.Close>
                    </div>
                </div>
            </ToastPrimitive.Root>

            <ToastPrimitive.Viewport />
        </ToastPrimitive.Provider>
    )
}