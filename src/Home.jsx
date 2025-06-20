//useSelector is a React-Redux hook that lets you access state from the Redux store.
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { deleteUser } from './UserReducer';
//useDispatch is another React-Redux hook that lets you dispatch actions to the Redux store from your component.
import { useDispatch } from 'react-redux';

function Home() {
    /**
     * Following line calls useSelector to extract users from the Redux store.

        state is the entire Redux state tree.

        state.users accesses the users slice, which is probably defined in configureStore.
     */
    // useSelector((state) => {
    //     console.log("Entire Redux State:", state);
    //     return null; // prevents unnecessary re-renders
    // });

    const users = useSelector((state) => state.users);
    //console.log(users);

    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteUser({ id: id }));
    }
    return (
        <div className='container'>
            <h2>Crud App with JSON Server</h2>
            <Link to="/create" className='btn btn-success my-3'>Create +</Link>
            <table className='table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {users.map((user, index) => (
                        <tr key={user.id}>
                            <td>{index + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <Link to={`/edit/${user.id}`} className='btn btn-sm btn-primary'>Edit</Link>
                                <button onClick={() => handleDelete(user.id)} className='btn btn-sm btn-danger'>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Home