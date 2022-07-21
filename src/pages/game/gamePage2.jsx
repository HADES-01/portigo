import React, { useState, useEffect, useRef } from "react";
import "./game.styles.scss";
import Box from "@mui/material/Box";
import { useIdleTimer } from "react-idle-timer";
import Modal from "@mui/material/Modal";
import adBanner from "../../images/tgp-ad-banner.jpg";
import CloseIcon from "@mui/icons-material/Close";
import Link from "@mui/joy/Link";
import { useNavigate } from "react-router-dom";

const GamePage2 = ({ money }) => {
  const [elapsed, setElapsed] = useState(0);
  const { getElapsedTime, reset } = useIdleTimer();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setElapsed(0);
    reset();
  };

  const checkModalOpen = (elapsed) => {
    let minutes = Math.round(elapsed / 1000) / 60;
    if (minutes >= 0.1) {
      handleOpen();
    }
  };

  useEffect(() => {
    setElapsed(getElapsedTime());
    let minutes = Math.round(elapsed / 1000) / 60;
    setInterval((id) => {
      setElapsed(getElapsedTime());
      if (minutes > 0.5) {
        clearInterval(id);
      }
    }, 1000);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    // console.log(elapsed);
    checkModalOpen(elapsed);
    // eslint-disable-next-line
  }, [elapsed]);

  const navigate = useNavigate();

  return (
    <div className="gameContainer">
      <CloseIcon
        id="close"
        onClick={() => {
          navigate(-1);
        }}
      />
      <iframe
        title="Mini Game"
        className="miniGameFrame"
        src="https://freehtml5games.org/games/crazy-runner/index.html"
        scrolling="none"
        frameBorder="0"
      ></iframe>
      <Modal open={!money && open} aria-labelledby="time-up-modal">
        <Box className="modalBox">
          <CloseIcon
            fontSize="small"
            className="closeIcon"
            onClick={handleClose}
          />
          <img src={adBanner} alt="Ad Banner" className="adBannerImage" />
          <p className="ad-free">
            Wanna Enjoy Ad Free?
            <Link href="/wallet" className="ctaAction">
              Recharge Now
            </Link>
          </p>
        </Box>
      </Modal>
    </div>
  );
};

export default GamePage2;
