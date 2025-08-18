
export const dateFormatter = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric"
    }).format(date)

}

export const timeFormatter = (time: Date) => {
    return new Intl.DateTimeFormat("en-US", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    }).format(time)
}