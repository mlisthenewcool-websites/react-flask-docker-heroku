import React from 'react';
import axios from 'axios';
import Main from "../layouts/Main";

const apiUrl = 'http://localhost:5000/api'

/*
axios.interceptors.request.use(
    config => {
        const { origin } = new URL(config.url);
        const allowedOrigins = [apiUrl];
        const token = localStorage.getItem('token');
        if (allowedOrigins.includes(origin)) {
            config.headers.authorization = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);
*/

const ProtectedRoute = () => {
    /*
    const storedJwt = localStorage.getItem('token');
    const [jwt, setJwt] = useState(storedJwt || null);
    const [foods, setFoods] = useState([]);
    const [fetchError, setFetchError] = useState(null);
    */

    const getJwt = async () => await axios({
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        mode: 'cors',
        url: `${apiUrl}/auth`,
        data: {
            'username': 'user1',
            'password': 'pass1'
        }
    }).then(res => {
        localStorage.setItem('token', res.data.token);
        console.log(res.data);
        console.log(res.status);
        console.log(res.statusText);
        console.log(res.headers);
        console.log(res.config);
    }).catch(err => {
        // console.error(err)
    });

    const getTime = async () => axios({
        method: 'get',
        headers: {
            'Content-Type': 'application/json'
        },
        mode: 'cors',
        url: `${apiUrl}/time`
    }).then(res => {
        console.log(res.data);
        console.log(res.status);
        console.log(res.statusText);
        console.log(res.headers);
        console.log(res.config);
    }).catch(err => {
        // console.error(err)
    })

    return (
        <Main>
            <button onClick={() => getJwt()}>Get JWT</button>
            <button onClick={() => getTime()}>Get time</button>
        </Main>
    );
}

export default ProtectedRoute;