import { SearchFormData, SearchFormResults } from './search-interface'

export function cloneDate(date: Date): Date
export function addDays(date: Date, days: number): Date

export class FlatRentSdk {

    get(id: string):Promise<Object|null>
    search(parameters: SearchFormData): Promise<SearchFormResults[]|null>
    book(flatId:number, checkInDate: Date, checkOutDate: Date): number 
    _calculateDifferenceInDays(startDate: Date, endDate: Date): number
    _generateDateRange(from: Date, to: Date): Date[] 

    _generateTransactionId(): number
}
