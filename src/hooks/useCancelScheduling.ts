import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../lib/api";

const deleteData = async (cpf: string) => {
    return await api.delete('/scheduling', {
        data: {
            cpf
        }
    })
}

export function useCancelScheduling() {
    const queryClient = useQueryClient()

    const mutate = useMutation({
        mutationFn: deleteData,
        mutationKey: ['scheduling-delete'],
        onSuccess: () => {
            queryClient.invalidateQueries(['schedules'])
        }
    })

    return mutate
}