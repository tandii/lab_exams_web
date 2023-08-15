import { useMutation, useQueryClient } from '@tanstack/react-query'
import { api } from '../lib/api'
import { SchedulingData } from '../interfaces/scheduling-data'

const postData = async (data: SchedulingData) => {
    return await api.post('/scheduling', data)
}

export function useSchedulingMutate() {
    const queryClient = useQueryClient()

    const mutate = useMutation({
        mutationFn: postData,
        onSuccess: () => {
            queryClient.invalidateQueries(['schedules'])
        }
    })

    return mutate
}