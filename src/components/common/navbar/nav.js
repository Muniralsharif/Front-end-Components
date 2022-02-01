import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Link from "next/link";
import { AiOutlineGift, AiOutlineHeart, AiOutlineHome } from "react-icons/ai";
const NavBarWrapper = styled.div`
    @media (min-width: 640px) {
        display: flex;
    }
    box-shadow: -1px 10px 5px 0px rgba(0, 0, 0, 0.62);
    -webkit-box-shadow: -1px 10px 5px 0px rgba(0, 0, 0, 0.62);
    -moz-box-shadow: -1px 10px 5px 0px rgba(0, 0, 0, 0.62);

    ${tw`
        flex 
        justify-between
        items-center
        text-center
        w-full
        px-4
        hidden
        mb-11
    `};
`;
const LeftNav = styled.div`
    ${tw`
        flex
        justify-center
        items-center
        gap-3
        text-center
    `};
`;
const RightNav = styled.div`
    ${tw`
        flex
        justify-center
        items-center
        gap-4
        text-center
    `};
`;

const MenuItem = styled.div`
    ${tw`
        flex
        justify-center
        items-center
        text-center
        mx-auto
        gap-y-2
    `};
`;

const LogoImage = styled.img`
    ${tw`
        w-24
        h-24
    `};
`;
const NavBar = () => {
    return (
        <NavBarWrapper>
            <LeftNav>
                <Link href="/">
                    <a>
                        <LogoImage src="/assets/images/Logo.png" alt="Logo" />
                    </a>
                </Link>
            </LeftNav>
            <RightNav className="">
                <MenuItem>
                    <Link href="/">
                        <a>
                            <div className="text-center flex justify-center items-center">
                                <AiOutlineHome
                                    className="hover:text-red-600"
                                    size="30px"
                                />
                            </div>
                            <div className="text-md font-bold text-blue-400">
                                Home
                            </div>
                        </a>
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link href="/about">
                        <a>
                            <div className="text-center flex justify-center items-center">
                                <AiOutlineHeart
                                    className="hover:text-red-600"
                                    size="30px"
                                />
                            </div>
                            <div className="text-md font-bold text-blue-400">
                                About
                            </div>
                        </a>
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link href="/gifts">
                        <a>
                            <div className="text-center flex justify-center items-center">
                                <AiOutlineGift
                                    className="hover:text-red-600"
                                    size="30px"
                                />
                            </div>
                            <div className="text-md font-bold text-blue-400">
                                Gifts
                            </div>
                        </a>
                    </Link>
                </MenuItem>
            </RightNav>
        </NavBarWrapper>
    );
};

export default NavBar;
