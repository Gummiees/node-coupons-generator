export interface CRUD {
    list: () => any[],
    getById?: (id: any) => any
}