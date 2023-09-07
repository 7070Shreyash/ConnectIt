import {
    ChatBubbleOutlineOutlined,
    FavoriteBorderOutlined,
    FavoriteOutlined,
    ShareOutlined,
  } from "@mui/icons-material";
  import { Box, Divider, IconButton, Typography, useTheme } from "@mui/material";
  import {Link} from "react-router-dom"
  import FlexBetween from "components/FlexBetween";
  import Friend from "components/Friend";
  import WidgetWrapper from "components/WidgetWrapper";
  import { useState } from "react";
  import { useDispatch, useSelector } from "react-redux";
//   import { setPost } from "state";
  
  const AlumniWidget = ({
    name,
    description,
    userPicturePath,
  }) => {
    const { palette } = useTheme();
    const main = palette.neutral.main;
    const primary = palette.primary.main;
    return (
      <WidgetWrapper m="2rem 0">
        <Box sx = {{display : "flex"}}>
         <Box sx = {{ width : "50%" , margin : "2rem"}}>
        <Typography color={main} sx={{ margin: "1rem" ,
     fontSize : "2rem" , textAlign : "center" }}>
          {name}
        </Typography>
        <Typography> {description} </Typography>
        <Box sx = {{display : "flex"}} gap="0.25rem" mb="0.5rem" mt = "0.5rem">
          <Typography sx = {{marginRight : "0.25rem"}}> Ask for Referral </Typography>
            <a href = "https://www.google.com/" target = "_blank"> <img src="../assets/linkedin.png" alt="linkedin" /></a>
          </Box>
          <Box sx = {{display : "flex"}} gap="0.25rem" mb="0.5rem" mt = "0.5rem">
          <Typography sx = {{marginRight : "0.25rem"}}> Follow him on </Typography>
            <a href = "https://www.google.com/" target = "_blank"> <img src="../assets/twitter.png" alt="twitter" /></a>
          </Box>
        </Box>
        <Box sx ={{alignSelf : "center"}} >
        {userPicturePath && (
          <img
            width="90%"
            height="auto"
            alt="image"
            style={{ borderRadius: "0.75rem", marginTop: "0.75rem" }}
            src={`/assets/${userPicturePath}`}
          />
        )}
        </Box>
        </Box>
      </WidgetWrapper>
    );
  };
  export default AlumniWidget;
  