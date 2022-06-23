export type DefaultStore<D, E, L> = {
    loading: boolean
    error: false | E
    data: D,
    list?: L
}