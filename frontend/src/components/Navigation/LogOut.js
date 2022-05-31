import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import * as session from '../../store/session';

function LogOut ({}) {
    const dispatch = useDispatch();
    const history = useHistory();
    const logout = (e) => {
        e.preventDefault();
        dispatch(session.logout())
        history.push('/')
    };

    return (
        <button onClick={logout} id="signout-button">Sign Out</button>
    )
}

export default LogOut;
