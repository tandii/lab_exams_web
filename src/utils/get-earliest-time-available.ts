import dayjs from "dayjs"

export function getEarliestTimeAvailable(date?: [string]) {
    let earliestTimeAvailable = ["8:00", "8:15", "8:30", "8:45", "9:00", "9:15", "9:30", "9:45", "10:00", "13:30", "13:45", "14:00", "14:15", "14:30", "14:45", "15:00", "15:15", "15:30", "15:45", "16:00", "16:15", "16:30", "16:45", "17:00"]

    date?.map(time => {
        earliestTimeAvailable = earliestTimeAvailable.filter(item => item !== dayjs(time).format('H:mm'))
    })

    return earliestTimeAvailable[0]
}