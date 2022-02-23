import React from "react"

export default function Member(props) {
    const { profile } = props

    if (!profile){
        return <h3>Loading Team...Be Up In A Min</h3>
    }

    return(
        <div className="member-container">
            <h3>{profile.name}</h3>
            <p>Email: {profile.email}</p>
            <p>Role: {profile.role}</p>
        </div>
    )
}