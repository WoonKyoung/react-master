import { useState, useEffect } from "react";
import {useHistory, useLocation} from 'react-router-dom';
import { Field, Button, Message } from "../../ui";
import {useAuth} from '../../authContext';
import {Auth} from 'aws-amplify'

function SignIn() {
    const history = useHistory();
    const location = useLocation();
    const [creds, setCreds] = useState({
        email: "",
        password: "",
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const auth = useAuth();

    useEffect(() => {
        if(auth.user) history.replace(location.state ? location.state.from : '/');
    }, [auth.user])

    const onChange = (e) => {
        setCreds((prevCreds) => ({
            ...prevCreds,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await auth.signIn(creds.email, creds.password);
        } catch (e) {
            console.error(e);
            setError(e.message);
            setLoading(false);
        }
    }

    return (
        <div>
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit}>
                <Field labelText="Email">
                    <input
                        type="email"
                        value={creds.email}
                        onChange={onChange}
                        name="email"
                        id="email"
                    />
                </Field>
                <Field labelText="Password">
                    <input
                        type="password"
                        value={creds.password}
                        onChange={onChange}
                        name="password"
                        id="password"
                    />
                </Field>
                <Button type="submit" loading={loading}>Sign in</Button>
                <Message text={error} type="error" />
            </form>

            <button className="login_btn" onClick={() => Auth.federatedSignIn()}>로그인</button>
        </div>
    );
}

export default SignIn;