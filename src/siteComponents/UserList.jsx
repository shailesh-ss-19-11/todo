import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { getApi } from '../server/Server';

const UserList = () => {
    const [userData, setuserData] = useState([]);
    const getUsersData = () => {

        getApi("users?page=2/", (data) => {
            console.log(data)
            setuserData(data)
        }, (error) => {
            console.log(error)
        })
    }
    useEffect(() => {
        getUsersData();
    }, []);


    const getsingleUser = () => {
        axios.get("https://reqres.in/api/users/2").
            then((resp) => {
                console.log(resp)

            }).catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        if (userData.length > 0) {
            getsingleUser();
        }
    }, [userData]);

    return (
        <div>
            userlist
        </div>
    );
}

export default UserList;
