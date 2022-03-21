export interface SearchFormData {
    city: string
    checkInDate: Date
    checkOutDate: Date
    priceLimit: number
}

export interface SearchFormResults {
    id: string
    title: string
    details: string
    photos: string[]
    coordinates: number[],
    bookedDates: Date[],
    totalPrice: number
}

