import { CircleNotch } from "@phosphor-icons/react";

interface LoadingProps {
    size: number
    color: string
}

export function Loading({ size, color }: LoadingProps) {
    return (
        <CircleNotch size={size} color={color} className="animate-spin" />
    )
}