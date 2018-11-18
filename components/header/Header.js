import React from "react";
import Link from "next/link";
import styled from "styled-components";

const WrapperHeader = styled.section`
    background-color: pink;
    height: 100vh;
    width: 100%;
`;

const Header = () => {
    return (
        <WrapperHeader>
            <Link href="/about">
                <a>To About</a>
            </Link>
        </WrapperHeader>
    );
};

export default Header;
