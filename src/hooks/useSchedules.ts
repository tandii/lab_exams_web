import { useQuery } from '@tanstack/react-query'
import { api } from '../lib/api'
import { AxiosPromise } from 'axios'
import { SchedulesQuantityResponse } from '../interfaces/scheduling-data'

const fetchData = async ():AxiosPromise<SchedulesQuantityResponse> => {
    const response = await api.get<SchedulesQuantityResponse>('/schedules-quantity')
    return response
}

export function useSchedules() {
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['schedules']
    })
    return {
        ...query,
        data: query.data?.data
    }
}