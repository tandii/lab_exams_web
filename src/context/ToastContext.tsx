import {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useState
} from "react"

type ToastContextProps = {
    children: ReactNode
}

type ToastContextType = {
    isOpenToast: boolean
    setIsOpenToast: Dispatch<SetStateAction<boolean>>
    handleToggleToast: () => void
}

export const ToastContext = createContext({} as ToastContextType)

export function ToastProvider({ children }: ToastContextProps) {
    const [isOpenToast, setIsOpenToast] = useState(false)

    function handleToggleToast() {
        setIsOpenToast(!isOpenToast)
    }

    return (
        <ToastContext.Provider value={{ isOpenToast, handleToggleToast, setIsOpenToast }}>
            {children}
        </ToastContext.Provider>
    )
}

