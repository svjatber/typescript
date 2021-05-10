interface Person{
    name: string,
    age: string
}
type PersonKeys = keyof Person
const key: PersonKeys = 'name'

type User = {
    _id: number,
    name: string,
    email?: string,
    createdAt: Date
}

type UserKeysNoMeta1 = Exclude<keyof User, 'email'| 'createdAt' > // name
type UserKeysNoMeta2 = Pick<Person,  'name' > // mane
type UserKeysNoMeta3 = Pick<User, 'email' | 'name' > // mane
const test1: UserKeysNoMeta1 = '_id'
const test2: UserKeysNoMeta2 = {
    name: 'adsdas'
}
