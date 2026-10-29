import React from 'react';

function NavMessage() {
    return (
        <li className="nav-item dropdown">
            <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
                <i className="bi bi-chat-left-text"></i>
                <span className="badge bg-success badge-number">3</span>
            </a>

            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
                <li className="dropdown-header">
                    You have 3 new messages
                    <a href="#">
                        <span className="badge rounded-pill bg-primary p-2 ms-2">
                            View all
                        </span>
                    </a>
                </li>

                <li>
                    <hr className="dropdown-divider" />
                </li>

                <li className="message-item">
                    <a href="#">
                        <img
                        src="assets/items/messages-1.jpg"
                        alt=""
                        className="rounded-circle"
                        />
                        <div>
                            <h4> Maria Hudson</h4>
                            <p> Velit apserioes et ducimus soluta repundiana est ut...</p>
                            <p>4 hrs. ago</p>
                        </div>
                    </a>
                </li>

                <li>
                    <hr className="dropdown-divider" />
                </li>

                <li className="message-item">
                    <a href="#">
                        <img
                        src="assets/items/messages-1.jpg"
                        alt=""
                        className="rounded-circle"
                        />
                        <div>
                            <h4> Anna Nelson</h4>
                            <p> Velit apserioes et ducimus soluta repundiana est ut...</p>
                            <p>6 hrs. ago</p>
                        </div>
                    </a>
                </li>

                <li>
                    <hr className="dropdown-divider" />
                </li>

                <li className="message-item">
                    <a href="#">
                        <img
                        src="assets/items/messages-2.jpg"
                        alt=""
                        className="rounded-circle"
                        />
                        <div>
                            <h4> Emma White</h4>
                            <p> Velit apserioes et ducimus soluta repundiana est ut...</p>
                            <p>7 hrs. ago</p>
                        </div>
                    </a>
                </li>

                <li>
                    <hr className="dropdown-divider" />
                </li>

                <li className="message-item">
                    <a href="#">
                        <img
                        src="assets/items/messages-3.jpg"
                        alt=""
                        className="rounded-circle"
                        />
                        <div>
                            <h4> Tom Lynch</h4>
                            <p> Velit apserioes et ducimus soluta repundiana est ut...</p>
                            <p>10 hrs. ago</p>
                        </div>
                    </a>
                </li>

                <li>
                    <hr className="dropdown-divider" />
                </li>

                <li className="dropdown-footer">
                    <a href="#">Show all messages</a>
                </li>

            </ul>
        </li>
    );
}

export default NavMessage;