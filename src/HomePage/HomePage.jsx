import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { userActions } from '../_actions';
import { LeftComponent } from "../PartialComponents/LeftComponent";
import { HeaderComponent } from "../PartialComponents/HeaderComponent";

function HomePage() {
    
    const users = useSelector(state => state.users);
    const user = useSelector(state => state.authentication.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.getAll());
    }, []);

    function handleDeleteUser(id) {
        dispatch(userActions.delete(id));
    }

    return (
        <div className="col-lg-8 offset-lg-2">
          {/* <HeaderComponent /> */}
            <LeftComponent />
            <h1>Hi {user.firstName}!</h1>
            
            <h3>All registered users:</h3>
            {users.loading && <em>Loading users...</em>}
            {users.error && <span className="text-danger">ERROR: {users.error}</span>}
            {users.items &&
                <ul>
                    {users.items.map((user, index) =>
                        <li key={user.id}>
                            {user.firstName + ' ' + user.lastName}
                            {
                                user.deleting ? <em> - Deleting...</em>
                                : user.deleteError ? <span className="text-danger"> - ERROR: {user.deleteError}</span>
                                : <span> - <a onClick={() => handleDeleteUser(user.id)} className="text-primary">Delete</a></span>
                            }
                        </li>
                    )}
                </ul>
            }
            <p>
                <Link to="/login">Logout</Link>
            </p>
            <h3>Valentina Petrillo could this year become the first openly transgender woman to compete at the Paralympics. For the visually impaired Italian, selection for the national squad would be a dream come true - but she says she understands why other athletes may have doubts and questions about racing against her.

"I'm happy as a woman and running as a woman is all I want. I couldn't ask for more," says Valentina Petrillo.

"I've got a  
the Blind. Here she took up sport again, becoming a member of Italy's national five-a-side football team for people with sight loss.</h3>
        </div>
    );
}

export { HomePage };