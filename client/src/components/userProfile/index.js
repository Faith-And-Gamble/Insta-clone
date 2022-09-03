import React from 'react';

import * as Styled from './profile.styled';

function UserProfile({ card }) {
    return (
        <div className="userprofile">
            <div className="container">
                <div className="profile">
                    <div className="profile-image">
                        <img src="https://i.ibb.co/q1ZH61R/IMG-0400.jpg" alt="NOT FOUND" width="180PX" height="180PX" />
                    </div>
                    <div className="profile-user-settings">
                        <h1 className="profile-user-name">___nareshsharma</h1>
                        <button className="btn profile-edit-btn">Edit Profile</button>
                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                        <button className="btn profile-settings-btn">
                            <i className="fa fa-gear">
                            </i>
                        </button>
                    </div>
                    <div className="profile-stats">
                        <ul>
                            <li><span className="profile-stat-count">2</span> posts</li>
                            <li><span className="profile-stat-count">688</span> followers</li>
                            <li><span className="profile-stat-count">151</span> following</li>
                        </ul>
                    </div>
                    <div className="profile-bio">
                        <p><span className="profile-real-name">Naresh Sharma</span></p>
                    </div>
                </div>
            </div>

            <Styled.Conatiner>
            {card.map((item) => (
                    <Styled.Card>
                        <Styled.Box>
                            <div className="gallery-item" tabindex="0">
                                <img src={item.src} className="gallery-image" alt="" />
                                <div className="gallery-item-info">
                                    <ul>
                                        <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><i className="fas fa-heart" aria-hidden="true"></i> 56</li>
                                        <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><i className="fas fa-comment" aria-hidden="true"></i> 2</li>
                                    </ul>
                                </div>
                            </div>
                       
                        </Styled.Box>
                    </Styled.Card>
                 ))}
            </Styled.Conatiner>
            {/* <main> */}
            {/* <div className="container">
                    <div className="cnt2">
                    <div className="gallery">
                        {card.map((item) => (
                            <div className="gallery-item" tabindex="0">
                                <img src={item.src} className="gallery-image" alt="" />
                                <div className="gallery-item-info">
                                    <ul>
                                        <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><i className="fas fa-heart" aria-hidden="true"></i> 56</li>
                                        <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><i className="fas fa-comment" aria-hidden="true"></i> 2</li>
                                    </ul>
                                </div>
                            </div>
                        ))}

                        {/* <div className="gallery-item" tabindex="0">
                        <img src="https://i.ibb.co/q1ZH61R/IMG-0400.jpg" className="gallery-image" alt="" />
                        <div className="gallery-item-info">
                            <ul>
                                <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><i className="fas fa-heart" aria-hidden="true"></i> 56</li>
                                <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><i className="fas fa-comment" aria-hidden="true"></i> 2</li>
                            </ul>
                        </div>
                    </div>

                    <div className="gallery-item" tabindex="0">
                        <img src="https://i.ibb.co/q1ZH61R/IMG-0400.jpg" className="gallery-image" alt="" />
                        <div className="gallery-item-info">
                            <ul>
                                <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><i className="fas fa-heart" aria-hidden="true"></i> 56</li>
                                <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><i className="fas fa-comment" aria-hidden="true"></i> 2</li>
                            </ul>
                        </div>
                    </div>


                    <div className="gallery-item" tabindex="0">
                        <img src="https://i.ibb.co/q1ZH61R/IMG-0400.jpg" className="gallery-image" alt="" />
                        <div className="gallery-item-info">
                            <ul>
                                <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><i className="fas fa-heart" aria-hidden="true"></i> 56</li>
                                <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><i className="fas fa-comment" aria-hidden="true"></i> 2</li>
                            </ul>
                        </div>
                    </div> */}

            {/* </div> */}
            {/* // </div> */}
            {/* </div> */}
            {/* // </main> */}
        </div>
    )
}

export default UserProfile;