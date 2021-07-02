interface GetDateTimeIdRes{
    date: string
    time: string
    id: number
}

export const GetDateTimeId = ():GetDateTimeIdRes => {
    const current = new Date()
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`
    const time = `${current.getHours()}:${current.getMinutes()}:${current.getSeconds()}`
    const id = 1 + (Math.random() * (1000000 - 1))

    return {date, time, id}
}