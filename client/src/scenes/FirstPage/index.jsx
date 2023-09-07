import { Box, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import Navbari from "scenes/navbari";
import RaghavPart from "scenes/RaghavPart";

const FirstPage = () => {

    return (
        <Box>
            <Navbari/>
            <RaghavPart/>
        </Box>
    );
};

export default FirstPage;