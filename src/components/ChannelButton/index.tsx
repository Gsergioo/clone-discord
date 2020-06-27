import React from "react";

import { Container, HashtagIcon, InviteIcon, SettingsIcon  } from "./styles";

export interface Props {
    chanelName: string;
    selected?: boolean; 
} 

const ServerName: React.FC <Props>= ({
    chanelName,
    selected
}) => {
    return (
        <Container className={selected ? "active" : ""}>
            <div>
                <HashtagIcon />
                <span>{chanelName}</span>
            </div>

            <div>
                <InviteIcon />
                <SettingsIcon />
            </div>
        </Container>
    )
}

export default ServerName;