import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import BackDrop from "./backDrop";
import {
    AiOutlineClose,
    AiOutlineGift,
    AiOutlineHeart,
    AiOutlineHome,
} from "react-icons/ai";
const FloatMenuWrapper = styled.div`
    ${tw`
        fixed
        object-center
        bg-gray-100
        opacity-90
        backdrop-brightness-150	
        w-[250px]
        z-30
        rounded
    `};
`;
const MenuWrapper = styled.div`
    ${tw`
        flex
        flex-col
        w-full
        items-center
        justify-center
        text-center
        relative
    `};
`;
const MenuItem = styled.div`
    ${tw`
 flex
 justify-center
 items-center
 w-full
 py-4
 gap-2
 border-b-2
 cursor-pointer
 hover:text-green-400
 `};
`;
const FloatMenu = ({ toggleOpen }) => {
    return (
        <>
            <BackDrop toggleOpen={toggleOpen} />

            <FloatMenuWrapper>
                <MenuWrapper>
                    <div className="absolute top-2 right-2 p-1 cursor-pointer hover:bg-blue-200 hover:text-red-600 rounded-[50%]">
                        <AiOutlineClose onClick={toggleOpen} />
                    </div>
                    <MenuItem>
                        <span>
                            <AiOutlineHome size="30px" />
                        </span>
                        <span className="text-md font-bold text-blue-400">
                            Home
                        </span>
                    </MenuItem>
                    <MenuItem>
                        <span>
                            <AiOutlineHeart size="30px" />
                        </span>
                        <span className="text-md font-bold text-blue-400">
                            About
                        </span>
                    </MenuItem>
                    <MenuItem>
                        <span>
                            <AiOutlineGift size="30px" />
                        </span>
                        <span className="text-md font-bold text-blue-400">
                            Gifts
                        </span>
                    </MenuItem>
                </MenuWrapper>
            </FloatMenuWrapper>
        </>
    );
};

export default FloatMenu;
