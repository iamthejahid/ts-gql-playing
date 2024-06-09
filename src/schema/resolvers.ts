import { UserList } from './Fake-data';

export const resolvers = {
    Query: {
        users: () => UserList.users
    }
};
