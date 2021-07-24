import { useEffect, FC } from 'react';
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";
import { UserModel } from '../types/user';

const UserList: FC = () => {
    const { users, error, loading } = useTypedSelector(state => state.user)
    const { fetchUsers } = useActions()

    useEffect(() => {
        fetchUsers()
    }, [])

    if (loading) {
        return <h1>Идет загрузка...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            {users.map((user: UserModel) =>
                <div key={user.id}>Name: {user.name} - company: {user.company.name}</div>
            )}
        </div>
    );
};

export default UserList;
