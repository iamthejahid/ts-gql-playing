export interface User {
    id: number;
    name: string;
    userName: string;
    age: number;
    nationality?: string;
}

export const UserList: { users: User[] } = {
    users: [
        {
            id: 1,
            name: "John Doe",
            userName: "JohnDoe",
            age: 24,
        },
        {
            id: 2,
            name: "Jane Doe",
            userName: "JaneDoe",
            age: 22,
        },
        {
            id: 3,
            name: "John Smith",
            userName: "JohnSmith",
            age: 25,
        },
        {
            id: 4,
            name: "Jane Smith",
            userName: "JaneSmith",
            age: 23,
        }
    ]
};
