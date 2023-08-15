export interface SchedulingData {
    name: string;
    cpf: string;
    bloodGroup: string;
    gender: string;
    phone: string;
    date: string;
}

export interface SchedulesResponse {
    schedulesQuantityByWeekDay: {
        monday: {
            date: string
            schedulesQuantity: number,
            schedulingTimes: [string]
        },
        tuesday: {
            date: string
            schedulesQuantity: number,
            schedulingTimes: [string]
        },
        wednesday: {
            date: string
            schedulesQuantity: number,
            schedulingTimes: [string]
        },
        thursday: {
            date: string
            schedulesQuantity: number,
            schedulingTimes: [string]
        },
        friday: {
            date: string
            schedulesQuantity: number,
            schedulingTimes: [string]
        },
    }
}