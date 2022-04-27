import React from "react";
import styles from "./users.module.css";

let Users = (props) => {


    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1, photoUrl: 'https://filestore.community.support.microsoft.com/api/images/f2e55cbf-8316-4d3a-9412-ecd8194b2a72?upload=true',
                followed: false, fullName: 'Serhii', status: 'i developer', location: { city: 'Kyiv', contry: 'Ukraine' }
            },
            {
                id: 2, photoUrl: 'https://filestore.community.support.microsoft.com/api/images/f2e55cbf-8316-4d3a-9412-ecd8194b2a72?upload=true',
                followed: true, fullName: 'Liza', status: 'i design', location: { city: 'Lisabon', contry: 'Portugal' }
            },
            {
                id: 3, photoUrl: 'https://filestore.community.support.microsoft.com/api/images/f2e55cbf-8316-4d3a-9412-ecd8194b2a72?upload=true',
                followed: true, fullName: 'Sasha', status: 'i product manager', location: { city: 'Baku', contry: 'Azerbaijan' }
            },
            {
                id: 4, photoUrl: 'https://filestore.community.support.microsoft.com/api/images/f2e55cbf-8316-4d3a-9412-ecd8194b2a72?upload=true',
                followed: false, fullName: 'Kate', status: 'i scrum master', location: { city: 'Kyiv', contry: 'Ukraine' }
            }
        ]
        )
    }



    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto} />
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                            : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;