import React from "react";
import Titles from "@/components/Atoms/Typography/Titles";
import { Iframe, Container } from "./styled";
import Video from "@/components/Atoms/Video/Video";
import { Iprops } from "./types"
import Margin from "@/components/Atoms/Spacing/Margin/Margin";


const TitleAndVideo = ({
  title,
  boldTitle,
  isMp4,
  videoUrl,
  hasAutoPlay,
  hasLoop,
  hasMuted
}: Iprops) => {
  return (
    <Container>
      <Titles
      titleTag="h2"
      color={"millionGray"}
      font={"regular"}
      align="center"
      fontSize="1.9em"
      boldTitle={boldTitle}
      >
        {title}
      </Titles>

      <Margin margin={"20px 0"} />
    {  
    isMp4 ?(
      <Video
        isMp4={isMp4}
        videoUrl={videoUrl}
        hasAutoPlay={hasAutoPlay}
        hasLoop={hasLoop}
        hasMuted={hasMuted}
        title={title}
      />): (
        <Iframe
            src={`https://www.youtube.com/embed/${videoUrl}`}
            title={title}
        ></Iframe>
      )}
  </Container>
  );
};

export default TitleAndVideo;
