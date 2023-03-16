import React from 'react';
import './Message.scss';
import successLogo from '../../../logo/accept.png';
import failedLogo from '../../../logo/cross.png';

const Message = ({ message, type }) => {
  return (
    <div className="message-box">
      <div>
        {type === "success" ? <img src={successLogo} height="20px" width="20px" /> : <img src={failedLogo} height="20px" width="20px"/>}
      </div>
      <div className='message-text'>
        {message}
      </div>
    </div>
  );
}

export default Message;
