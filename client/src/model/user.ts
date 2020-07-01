export interface ICustomer {
    firstName: string,
    lastName: string,
    username: string,
    password: string,
    _id?: string
}

export interface IAdmin {
    username: string,
    password: string    
    
}
export const customerInitialState = Object.freeze({
    firstName: '',
    lastName: '',
    username: '',
    password: ''
})