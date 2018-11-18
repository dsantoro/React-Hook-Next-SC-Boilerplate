import React, { useState } from "react";

import GlobalStyling from '../GlobalStyling';
import Header from "../components/header/Header";


const Home = () => {
    const [nome, setNome] = useState("React");

    return (
        <GlobalStyling>
            <Header name={nome} />
        </GlobalStyling>
    )
};

export default Home;
