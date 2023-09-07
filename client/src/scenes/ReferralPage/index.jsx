import { Box, useMediaQuery } from "@mui/material";
import Navbar from "scenes/navbar";
import AlumnisWidget from "scenes/widgets/AlumnisWidget";
import UserWidget from "scenes/widgets/UserWidget";
import FlexBetween from "components/FlexBetween";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBlogs } from "state";
import AdvertWidget from "scenes/widgets/AdvertWidget";

const ReferralPage = () => {

    const dispatch = useDispatch();
    const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const { _id } = useSelector((state) => state.user);
  const token = useSelector
  ((state) => state.token);
  const picturePath = useSelector((state) => state.user.picturePath);
    return (
        <>
        <Navbar/>
        <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
        >
        <Box flexBasis={isNonMobileScreens ? "26%" : "42%"}>
          <UserWidget userId={_id} picturePath={picturePath} />
        </Box>
        <Box
          flexBasis={isNonMobileScreens ? "72%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >
          <AlumnisWidget/>
        </Box>
      </Box>
      </>
    );
};

export default ReferralPage;