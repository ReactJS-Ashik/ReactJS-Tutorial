import React from 'react';

export class ClassComponentTable extends React.Component {
    render() {
        // const UserData = ["Bhanubhakta", "Manisha Koirala", "Narayan Gopal", "Indra Bahadur Rai", "Aruna Lama", "Gopal Yonzon", "Uday Sotang", "Lakshmi Prasad Devkota", "Parijat", "Motiram Bhatta"]
        return (
            <div >
                <ol style={{ listStyle: 'none', textAlign: 'left' }}>
                    <li><h3 style={{ color: "#4a4f59" }} >Class Component</h3></li>
                    {this.props.UserData.map((data, index) => (
                        <li key={index} className="items"> {data}</li>
                    ))}
                </ol>
            </div>
        )
    }
}