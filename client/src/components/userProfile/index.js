import PropTypes from 'prop-types';
import React from 'react';
import './userProfile.css';

function UserProfile({
    dataOfPost
}) {
    return (
        <div className="userprofile">
            <div className="container">
                <div className="profile">
                    <div className="profile-image">
                        <div className="profile__profile__logo">
                            <img src="https://avatarfiles.alphacoders.com/117/117500.jpg" alt="Profile fgImage" />
                        </div>
                    </div>

                    <div className="profile__profile__details__userName">
                        <h4>jon_snow</h4>
                        <button>
                            Edit Profile
                        </button>
                        <button>
                            <svg aria-label="Options" className="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24">
                                <circle cx="12" cy="12" fill="none" r="8.635" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle>
                                <path d="M14.232 3.656a1.269 1.269 0 01-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 01-.796.66m-.001 16.688a1.269 1.269 0 01.796.66l.505.996h1.862l.505-.996a1.269 1.269 0 01.796-.66M3.656 9.768a1.269 1.269 0 01-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 01.66.796m16.688-.001a1.269 1.269 0 01.66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 01-.66-.796M7.678 4.522a1.269 1.269 0 01-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 01-.096 1.03m11.8 11.799a1.269 1.269 0 011.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 01.096-1.03m-14.956.001a1.269 1.269 0 01.096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 011.03.096m11.799-11.8a1.269 1.269 0 01-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 01-1.03-.096" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path>
                            </svg>
                        </button>

                    </div>
                    <div className="profile__profile__details__follower my-3">
                        <button>
                            <b>143</b> Posts
                        </button>
                        <button>
                            <b>24.7M</b> followers
                        </button>
                        <button>
                            <b>1</b> following
                        </button>
                    </div>
                    <div className="profile__profile__details__displayName">
                        <h1>Jon Snow
                            <p>Winter is coming</p>
                            <p>King in the north</p>
                            <p>last hair</p>
                            <p>stark</p>
                        </h1>
                    </div>
                </div >

            </div >
            <div className="profile__section">
                <div className="container">

                    <div className="profile__section__tab">
                        <button className="tablinks">
                            <svg aria-label="" className="_ab6-" color="#262626" fill="#262626" height="12" role="img" viewBox="0 0 24 24" width="12">
                                <rect fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="18" x="3" y="3"></rect>
                                <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="9.015" x2="9.015" y1="3" y2="21"></line>
                                <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="14.985" x2="14.985" y1="3" y2="21"></line>
                                <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="21" x2="3" y1="9.015" y2="9.015"></line>
                                <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="21" x2="3" y1="14.985" y2="14.985"></line>
                            </svg>
                            Posts</button>
                        <button className="tablinks">
                            <svg aria-label="" className="_ab6-" color="#8e8e8e" fill="#8e8e8e" height="12" role="img" viewBox="0 0 24 24" width="12">
                                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 22.5C6.2 22.5 1.5 17.8 1.5 12S6.2 1.5 12 1.5 22.5 6.2 22.5 12 17.8 22.5 12 22.5zm5-11.8l-6.8-3.9c-.5-.3-1-.3-1.5 0-.4.3-.7.7-.7 1.3v7.8c0 .5.3 1 .8 1.3.2.1.5.2.8.2s.5-.1.8-.2l6.8-3.9c.5-.3.8-.8.8-1.3s-.5-1-1-1.3zm-7.5 5.2V8.1l6.8 3.9-6.8 3.9z"></path>

                            </svg>
                            Reels</button>

                        <button className="tablinks">
                            <svg aria-label="" className="_ab6-" color="#8e8e8e" fill="#8e8e8e" height="12" role="img" viewBox="0 0 24 24" width="12">
                                <polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polygon>
                            </svg>
                            Saved</button>
                        <button className="tablinks">
                            <svg aria-label="" className="_ab6-" color="#8e8e8e" fill="#8e8e8e" height="12" role="img" viewBox="0 0 24 24" width="12">
                                <path d="M10.201 3.797L12 1.997l1.799 1.8a1.59 1.59 0 001.124.465h5.259A1.818 1.818 0 0122 6.08v14.104a1.818 1.818 0 01-1.818 1.818H3.818A1.818 1.818 0 012 20.184V6.08a1.818 1.818 0 011.818-1.818h5.26a1.59 1.59 0 001.123-.465z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                <path d="M18.598 22.002V21.4a3.949 3.949 0 00-3.948-3.949H9.495A3.949 3.949 0 005.546 21.4v.603" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                <circle cx="12.072" cy="11.075" fill="none" r="3.556" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle>
                            </svg>
                            Tagged</button>
                    </div>
                </div>
            </div>

            < main >
                <div className="container">
                    <div className="cnt2">
                        <div className="gallery">
                            {dataOfPost.map((item) => (
                                <div className="gallery-item" tabIndex="0" key={item}>
                                    <img src={item.src} className="gallery-image" alt="" />
                                    <div className="gallery-item-info">
                                        <ul>
                                            <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><i className="fas fa-heart" aria-hidden="true"></i>{item.likes}</li>
                                            <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><i className="fas fa-comment" aria-hidden="true"></i> {item.comments}</li>
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main >
        </div >
    )
}

UserProfile.propTypes = {
    dataOfPost : PropTypes.array
}

export default UserProfile;