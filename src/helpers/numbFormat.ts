export const formatNumber = (numb: number) => {
    return Intl.NumberFormat('en-IN').format(numb)
}