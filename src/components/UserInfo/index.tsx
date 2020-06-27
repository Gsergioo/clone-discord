import React from "react";

import { 
    Container, 
    Profile, 
    Avatar, 
    UserData, 
    Icons, 
    MicIcon, 
    HeadphoneIcon, 
    SettingsIcon 
} from "./styles";

const UserInfo: React.FC = (props) => {
    return (
        <Container>
            <Profile>
                <Avatar />
                <UserData>
                    <strong>Guilherme Sérgio</strong>
                    <span>#3333</span>
                </UserData>
            </Profile>
            <Icons>
                <MicIcon />
                <HeadphoneIcon />
                <SettingsIcon />
            </Icons>
        </Container>
    )
}

export default UserInfo;