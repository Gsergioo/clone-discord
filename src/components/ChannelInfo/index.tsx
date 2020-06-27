import React from "react";

import { Container, Title, HashtagIcon, Separator, Description } from "./styles";

const ChanelInfo: React.FC = (props) => {
    return (
        <Container>
            <HashtagIcon />
            <Title>Chat Livre</Title>
            <Separator />
            <Description>Canal aberto</Description>
        </Container>
    )
}

export default ChanelInfo;