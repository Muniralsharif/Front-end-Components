import React, { useState } from "react";
import Image from "next/image";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import car1Url from "../../../../public/assets/images/car1.jpg";
import car2Url from "../../../../public/assets/images/car2.jpg";
import car3Url from "../../../../public/assets/images/car3.jpg";
import car4Url from "../../../../public/assets/images/car4.jpg";
import styled from "styled-components";
import tw from "twin.macro";
const SliderImageWrapper = styled.div`
    ${tw`
        relative
        max-h-[600px]
        max-w-[1000px]
        flex
        justify-center
        items-center
    `};
`;
const StyledImage = styled(Image)`
    ${tw`
    rounded-lg
    w-full
    top-[50%]
    left-[50%]
    `};
    width: 1000px;
    height: 600px;
`;
const RightArrow = styled.div`
    ${tw`
    absolute
    text-red-500
    hover:bg-red-800
    hover:text-white
    hover:scale-[1.28]
    rounded-[50%]
    z-10
    top-1/2
    right-5
    cursor-pointer
    `};
    user-select: none;

    svg {
        padding-left: 4px;
    }
`;
const LeftArrow = styled.div`
    ${tw`
    absolute
    text-red-500
    hover:bg-red-800
    hover:text-white
    hover:scale-[1.28]
    rounded-[50%]
    z-10
    top-1/2
    left-5
    cursor-pointer
    `};
    user-select: none;
    svg {
        padding-left: 8px;
        &:hover {
        }
    }
`;

const Slide = styled.div(({ isActive }) => [
    isActive
        ? tw`   
    opacity-100
    transition-opacity
    relative
    ease-linear
    duration-[2s]

    `
        : tw` 
    opacity-0

    `,
]);
const ImageTitle = styled.span`
    ${tw`
    bg-red-700
    rounded-full
    py-2 px-4 flex
    justify-center
    items-center
    font-bold
    text-white
    absolute
    bottom-[20px]
    left-1/2
    transform
    -translate-x-1/2
    -translate-y-1/2
    
    `};
`;

const Slider = () => {
    const cars = [car1Url, car2Url, car3Url, car4Url];
    const [current, setCurrent] = useState(0);
    const length = cars.length;
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };
    const prvSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    return (
        <SliderImageWrapper>
            <RightArrow onClick={nextSlide}>
                <MdArrowForwardIos size={"2em"} />
            </RightArrow>
            <LeftArrow onClick={prvSlide}>
                <MdArrowBackIos size={"2em"} />
            </LeftArrow>
            {cars.map((image, index) => (
                <Slide isActive={current === index} key={index}>
                    {current === index && (
                        <>
                            <StyledImage
                                width={image.width}
                                height={image.height}
                                src={`${image.src}`}
                                alt={image.height}
                            />
                            <ImageTitle onClick={() => setCurrent(index)}>
                                {image.src}
                            </ImageTitle>
                        </>
                    )}
                </Slide>
            ))}
        </SliderImageWrapper>
    );
};

export default Slider;
