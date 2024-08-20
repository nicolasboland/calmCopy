export interface ILoggedUser {
    userStatus?: {
        status: number,
        data: boolean,
    }
    openCheckoutChat?: boolean,
    error: boolean
}