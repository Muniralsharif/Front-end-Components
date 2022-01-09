import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
const BackDropWrapper = styled.div`
    ${tw`
        fixed
        bg-gray-300
        opacity-60
        backdrop-brightness-150	
        top-0
        left-0
        right-0
        bottom-0
        z-10
    `};
`;
const BackDrop = ({ toggleOpen }) => {
    return <BackDropWrapper onClick={toggleOpen} />;
};

export default BackDrop;
