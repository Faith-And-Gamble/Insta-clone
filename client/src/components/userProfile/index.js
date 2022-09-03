function UserProfile() {
    return (
        <div>
            <div class="container">
                <div class="profile">
                    <div class="profile-image">
                        <img src="https://i.ibb.co/q1ZH61R/IMG-0400.jpg" alt="NOT FOUND" width="180PX" height="180PX" />
                    </div>
                    <div class="profile-user-settings">
                        <h1 class="profile-user-name">___nareshsharma</h1>
                        <button class="btn profile-edit-btn">Edit Profile</button>
                        <button class="btn profile-settings-btn" aria-label="profile settings">
                            <i class="fas fa-cog" aria-hidden="false">
                            </i>
                        </button>
                    </div>
                    <div class="profile-stats">
                        <ul>
                            <li><span class="profile-stat-count">2</span> posts</li>
                            <li><span class="profile-stat-count">688</span> followers</li>
                            <li><span class="profile-stat-count">151</span> following</li>
                        </ul>
                    </div>
                    <div class="profile-bio">
                        <p><span class="profile-real-name">Naresh Sharma</span></p>
                    </div>
                </div>
            </div>

            <div className="container">
                <div class="gallery">
                    <div class="gallery-item" tabindex="0">
                        <img src="https://i.ibb.co/q1ZH61R/IMG-0400.jpg" class="gallery-image" alt="" />
                        <div class="gallery-item-info">
                            <ul>
                                <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 56</li>
                                <li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 2</li>
                            </ul>
                        </div>
                    </div>

                    <div class="gallery-item" tabindex="0">
                        <img src="" class="gallery-image" alt="" />
                        <div class="gallery-item-info">
                            <ul>
                                <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 56</li>
                                <li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 2</li>
                            </ul>
                        </div>
                    </div>

                    <div class="gallery-item" tabindex="0">
                        <img src="" class="gallery-image" alt="" />
                        <div class="gallery-item-info">
                            <ul>
                                <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 56</li>
                                <li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 2</li>
                            </ul>
                        </div>
                    </div>


                    <div class="gallery-item" tabindex="0">
                        <img src="" class="gallery-image" alt="" />
                        <div class="gallery-item-info">
                            <ul>
                                <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 56</li>
                                <li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 2</li>
                            </ul>
                        </div>
                    </div>

                </div>
                </div>
                </div>
            )
}

export default UserProfile;