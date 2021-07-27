import React from 'react';

export function FunctionComponentTable(props) {
    // const UserData = ["Sunil Chettri", "Bhaichung Bhutia", "Prashant Tamang", "Tenzing Norgay", "Namratha Shrestha", "Swastima Khadka", "Sipora Tamang", "Daya Hang Rai", "Yama Buddha", "Jitu Rai"]
    return (
        <div >
            <ol style={{ listStyle: 'none', textAlign: 'left' }}>
                <li><h3 style={{ color: "#4a4f59" }}>Function Component</h3></li>
                {props.UserData.map((data, index) => (
                    <li key={index} className="items">
                        {data}
                    </li>
                ))}
            </ol>
        </div>
    )
}