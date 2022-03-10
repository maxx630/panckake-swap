export interface IActivityTab {
    img: string,
    description: string,
    title: string,
    event: 'Modified' | 'Listed',
    cryptoPrice: number,
    dollarPrice: number,
    user: string,
    date: Date
}