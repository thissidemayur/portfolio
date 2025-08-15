
export const dateFormatter = (date: Date) => {
    return new Intl.DateTimeFormat("en-IN", {
        year: "numeric",
        month: "short",
        day: "numeric"
    }).format(date)

}