import React, { useState, useEffect, useRef } from "react";
import "./game.styles.scss";
import Box from "@mui/material/Box";
import { useIdleTimer } from "react-idle-timer";
import Modal from "@mui/material/Modal";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import adBanner from "../../images/tgp-ad-banner.png";
import CloseIcon from "@mui/icons-material/Close";
// import Link from "@mui/joy/Link";
// import { Player } from "video-react";
// import "/node_modules/video-react/dist/video-react.css"; // import css

const GamePage2 = () => {
  const ref = useRef(null);
  const [videoState, setVideoState] = useState(null);
  const [hasEnded, setHasEnded] = useState(false);
  //   const [player,setPlayer] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const { reset, getElapsedTime } = useIdleTimer();

  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleReset = () => reset();

  const onDisplayBannerShow = () => {
    handleOpen();
    setShow(false);
  };

  const onDisplayBannerHide = () => {
    handleClose();
    handleReset()
    setShow(false);
  };

  const checkShowOpen = (elapsed) => {
    let minutes = Math.round(elapsed / 1000) / 60;
    if (minutes >= 0.5) {
        handleReset()
      setShow(true);
    }
  };

  const elapseInterval = setInterval(() => {
    setElapsed(getElapsedTime());
  }, 1000);

  useEffect(() => {
    setElapsed(getElapsedTime());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    checkShowOpen(elapsed);
    // eslint-disable-next-line
  }, [elapseInterval, elapsed]);

  return (
    <div className="gameContainer">
      <InfoOutlinedIcon
        fontSize="large"
        className="adIcon"
        focusable={true}
        style={show ? { display: "block" } : { display: "none" }}
        onClick={onDisplayBannerShow}
      />
      <iframe
        title="Mini Game"
        className="miniGameFrame"
        src="https://freehtml5games.org/games/crazy-runner/index.html"
        scrolling="none"
        frameBorder="0"
      ></iframe>
      {/* <button className="adIcon" style={show ? {display: "block"} : {display: "none"}} onClick={onDisplayBannerShow}>
        {" "} */}
      {/* <div className="blob"> */}
      {/* </div> */}
      {/* </button> */}
      <Modal open={open} aria-labelledby="time-up-modal">
        <Box className="modalBox">
          <CloseIcon
            fontSize="small"
            className="closeIcon"
            onClick={onDisplayBannerHide}
          />
          {/* <div style={{position: "relative", height: "100%"}}> */}
          <img src={adBanner} alt="Ad Banner" className="adBannerImage" />
          {/* </div> */}
          {/* <Player ref={(player) => { setPlayer(player) }} autoPlay={true}>
            <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
          </Player> */}
        </Box>
      </Modal>
    </div>
  );
};

export default GamePage2;
