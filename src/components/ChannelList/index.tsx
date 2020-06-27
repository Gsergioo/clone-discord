import React from "react";

import { Container, Category, AddCategoryIcon } from "./styles";
import ChannelButton from "../ChannelButton";

const ChanelList: React.FC = (props) => {
    return (
        <Container>
            <Category>
                <span>Canais de texto</span>
                <AddCategoryIcon />
            </Category>

            <ChannelButton chanelName="chat-livre" />
            <ChannelButton chanelName="Cs-go" />
            <ChannelButton chanelName="Cs-go2" />
            <ChannelButton chanelName="Badarants" />
        </Container>
    )
}

export default ChanelList;