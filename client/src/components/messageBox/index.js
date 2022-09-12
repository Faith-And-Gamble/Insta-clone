import React from 'react';
import './chatBox.css';
import PropTypes from 'prop-types';

export default function ChatBox({ chat, chatID }) {
    //send user input
    function send() {
        var usermsg = document.getElementById("send-input").value;
        var senddiv = document.querySelector(".user-input");
        senddiv.style.display = "block";

        senddiv.innerHTML = usermsg;
    }
    return (

        <main>
            <div className="preview">
                <div id="user-name">jon_snow <i className='fa fa-angle-down'></i>
                    <svg aria-label="New message" className="addicon" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M12.202 3.203H5.25a3 3 0 00-3 3V18.75a3 3 0 003 3h12.547a3 3 0 003-3v-6.952" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M10.002 17.226H6.774v-3.228L18.607 2.165a1.417 1.417 0 012.004 0l1.224 1.225a1.417 1.417 0 010 2.004z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="16.848" x2="20.076" y1="3.924" y2="7.153"></line></svg></div>
                {chatID.map((item) => (
                    <div key={item}>
                        <span id="pic-div">
                            <img id="pic" src={item.src} alt='' />
                        </span>
                        <div id="chat-username">
                            <span id="name">{item.Name}</span>
                            <span id="msg">{item.msg}</span>
                        </div>
                    </div>
                ))}
             
            </div>
            <div className="chats">
                <div className="chat-banner">
                    <div>
                        <span id="chat-pic">
                            <img id="pic" src="https://media1.popsugar-assets.com/files/thumbor/3a2OsYr_l-OV1hoy4yt_HtfmWmo/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2017/08/16/997/n/1922283/5c4f055a5994cdbec9cfb2.94125510_edit_img_image_15775818_1502923580/i/Daenerys-Targaryen-Love-Interests-Game-Thrones.jpg" alt='d' />
                        </span>
                    </div>
                    <div className='icons'>
                        <svg aria-label="Audio call" className="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M18.227 22.912c-4.913 0-9.286-3.627-11.486-5.828C4.486 14.83.731 10.291.921 5.231a3.289 3.289 0 01.908-2.138 17.116 17.116 0 011.865-1.71 2.307 2.307 0 013.004.174 13.283 13.283 0 013.658 5.325 2.551 2.551 0 01-.19 1.941l-.455.853a.463.463 0 00-.024.387 7.57 7.57 0 004.077 4.075.455.455 0 00.386-.024l.853-.455a2.548 2.548 0 011.94-.19 13.278 13.278 0 015.326 3.658 2.309 2.309 0 01.174 3.003 17.319 17.319 0 01-1.71 1.866 3.29 3.29 0 01-2.138.91 10.27 10.27 0 01-.368.006zm-13.144-20a.27.27 0 00-.167.054A15.121 15.121 0 003.28 4.47a1.289 1.289 0 00-.36.836c-.161 4.301 3.21 8.34 5.235 10.364s6.06 5.403 10.366 5.236a1.284 1.284 0 00.835-.36 15.217 15.217 0 001.504-1.637.324.324 0 00-.047-.41 11.62 11.62 0 00-4.457-3.119.545.545 0 00-.411.044l-.854.455a2.452 2.452 0 01-2.071.116 9.571 9.571 0 01-5.189-5.188 2.457 2.457 0 01.115-2.071l.456-.855a.544.544 0 00.043-.41 11.629 11.629 0 00-3.118-4.458.36.36 0 00-.244-.1z"></path></svg>
                        <svg aria-label="Video call" className="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><rect fill="none" height="18" rx="3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="16.999" x="1" y="3"></rect><path d="M17.999 9.146l2.495-2.256A1.5 1.5 0 0123 8.003v7.994a1.5 1.5 0 01-2.506 1.113L18 14.854" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                        <svg aria-label="View Thread Details" className="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12.001" cy="12.005" fill="none" r="10.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle><circle cx="11.819" cy="7.709" r="1.25"></circle><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="10.569" x2="13.432" y1="16.777" y2="16.777"></line><polyline fill="none" points="10.569 11.05 12 11.05 12 16.777" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polyline></svg>
                    </div>
                </div>
                {chat.map((item) => (
                    <div key={item} className={item.from}>{item.msg}</div>
                ))}
                <div className="user-input"></div>
                <div className="input-msg">
                    <input type="text" id="send-input" placeholder="type something" onFocus="this.value=''" />
                    <button className="send_msg" onClick={send} type="button">Send</button>
                </div>
            </div>
        </main>
    )
}

ChatBox.propTypes = {
    chat : PropTypes.array,
    chatID : PropTypes.array
}