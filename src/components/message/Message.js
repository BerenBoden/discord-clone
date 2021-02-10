import { Avatar } from '@material-ui/core'
import React from 'react'
import '../../styles/Message.css'

const Message = () => {
    return (
        <div className="message">
            <Avatar />
            <div className="message__info">
                <h4>
                    Beren
                    <span className="message__timestamp">This is a timestamp</span>
                </h4>
            </div>
        </div>
    )
}

export default Message
