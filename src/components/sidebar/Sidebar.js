import React from 'react'
import '../../styles/Sidebar.css'
import AddIcon from '@material-ui/icons/Add';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import MicIcon from '@material-ui/icons/Mic';
import HeadsetIcon from '@material-ui/icons/Headset';
import SettingsIcon from '@material-ui/icons/Settings';
import CallIcon from '@material-ui/icons/Call';
import SidebarChannel from './SidebarChannel';
import { Avatar } from '@material-ui/core';

const Sidebar = () => {
    return (
        <div className="sidebar">
            
            <div className="sidebar__top">
                <h3>Discord</h3>
                <ExpandMoreIcon />
            </div>

            <div className="sidebar__channels">
                <div className="sidebar__channelsHeader">
                    <div className="sidebar__header">
                        <ExpandMoreIcon />
                        <h4>Text channels</h4>
                    </div>
                    <AddIcon className="sidebar__addChannel"/>
                </div>
                <div className="sidebar__channelsList">
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                </div>
            </div>

            <div className="sidebar__voice">
                <SignalCellularAltIcon className="sidebar__voiceIcon" fontSize="large"/>
                <div className="sidebar__voiceInfo">
                    <h3>Voice Connected</h3>
                    <p>Stream</p>
                </div>

                <div className="sidebar__voiceIsons">
                    <InfoOutlinedIcon/>
                    <CallIcon />
                </div>
                <div className="sidebar__profile">
                    <Avatar />
                    <div className="sidebar__profileInfo">
                        <h3>@username</h3>
                        <p>#myId</p>
                    </div>
                    <div className="sidebar__profileIcons">
                        <MicIcon />
                        <HeadsetIcon />
                        <SettingsIcon />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
