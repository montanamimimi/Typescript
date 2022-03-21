export interface ToastMessage {
    text: string,
    type: string
}

export interface ToastAction {
    name: string,
    handler: Function
}