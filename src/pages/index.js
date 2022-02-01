import Head from "next/head";
import tw, { styled } from "twin.macro";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import {
    decrement,
    increment,
    incrementByAmount,
    decrementByAmount,
} from "../redux/reducers/counter";
import FloatMenu from "../components/common/floatMenu";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Slider from "../components/common/slider/slider";
import NavBar from "../components/common/navbar/nav";
export default function Home() {
    const mount = 5;
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <Head>
                <title>Home</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar />
            <div className="cursor-pointer sm:hidden absolute top-3 right-5">
                <AiOutlineMenu size="30px" onClick={toggleOpen} />
            </div>
            <main className="flex flex-col items-center justify-center w-full h-full flex-1 px-4 text-center">
                <Link href="/about">
                    <h1 className="text-3xl cursor-pointer text-red-400 font-bold">
                        Go To About Page
                    </h1>
                </Link>
                <div className="flex items-center justify-center ">
                    <StyledHeader>
                        Hello from the styled tailwind component
                    </StyledHeader>
                </div>
                <div className="flex flex-row flex-wrap w-full justify-around  py-4 my-2">
                    <button
                        className="bg-blue-500 p-2 text-xl font-bold text-center text-white"
                        aria-label="Increment value"
                        onClick={() => dispatch(incrementByAmount(mount))}
                    >
                        Increment {mount}
                    </button>
                    <button
                        className="bg-blue-500 p-2 text-xl font-bold text-center text-white"
                        aria-label="Increment value"
                        onClick={() => dispatch(increment())}
                    >
                        Increment
                    </button>
                    <span className=" cursor-default px-4 w-15 h-15 flex items-center text-xl font-bold bg-red-400 text-white rounded-[50%]">
                        {count}
                    </span>
                    <button
                        className="bg-white p-2 text-center text-xl font-bold  text-red-400"
                        aria-label="Decrement value"
                        onClick={() => dispatch(decrement())}
                    >
                        Decrement
                    </button>
                    <button
                        className="bg-white p-2 text-center text-xl font-bold  text-red-400"
                        aria-label="Decrement value"
                        onClick={() => dispatch(decrementByAmount(mount))}
                    >
                        Decrement {mount}
                    </button>
                </div>

                {isOpen && <FloatMenu toggleOpen={toggleOpen} />}
                <Slider />
            </main>
        </div>
    );
}

const StyledHeader = styled.h1`
    ${tw`
    text-green-400
    w-full
    text-center
    text-5xl
    cursor-default
    sm:text-red-500
    md:text-indigo-500

    `};
`;
const Text = styled.p`
    ${tw`
    flex
    flex-col
    justify-center
    text-center
    items-center
    `};
`;
// const ConditionalButton = styled.button(({ isRed }) => [
//     isRed ? tw`bg-red-500 hover:bg-red-700` : tw`bg-blue-500 hover:bg-blue-500`,
//     tw`
//     text-white
//     font-bold
//     py-2
//     px-4
//     border
//     border-black
//     rounded
//   `,
// ]);
