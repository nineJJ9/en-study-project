import React from 'react';
import Auth from '../../hoc/auth';
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import cookie from 'react-cookies';
import {motion} from 'framer-motion';

function MainPage() {
    const {users, loading, error} = useSelector(state => state.user);
    console.log(users);
    const navigate = useNavigate();

    const logoutClick = () => {
        axios.get('/api/users/logout').then(res => {
            if (res.data.success) {
                cookie.remove('x_auth');
                navigate('/');
            } else {
                alert('로그아웃에 실패하였습니다.');
            }
        });
    };

    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
            {users.email ? (
                <button type="button" className="btn btn-primary" onClick={logoutClick}>
                    logout
                </button>
            ) : (
                <></>
            )}
            <h2>manin</h2>
        </motion.div>
    );
}

export default Auth(MainPage, true);