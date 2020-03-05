import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <div className="Contact">
                <img src="https://randomuser.me/api/portraits/men/51.jpg" className="avatar"/>
                <div>
                    <div className="name">
                        Douglas Tucker
                    </div>
                    <div className="status">
                        <div className="status-online">
                        </div>
                        <div className="status-text">
                            Online
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default Contact;