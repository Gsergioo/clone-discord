import React from "react";

import { Container, Messages, InputWrapper, Input, InputIcon} from "./styles";

const ServerName: React.FC = (props) => {
    return (
        <Container>
            <Messages />

            <InputWrapper>
                <Input type="text" placeholder="Conversar em chat-livre"/>
                <InputIcon />
            </InputWrapper>
        </Container>
    )
}

export default ServerName;