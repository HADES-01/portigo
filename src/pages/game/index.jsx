import React, { useState, useEffect } from "react";
import "./game.styles.scss";
import { useIdleTimer } from "react-idle-timer";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Link from '@mui/joy/Link';

const GamePage = () => {
  const [elapsed, setElapsed] = useState(0);
  const { getElapsedTime } = useIdleTimer();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    textAlign: "center",
    bgcolor: "#2c2f30",
    border: "2px solid #000",
    boxShadow: 24,
    p: 2,
  };

  const checkModalOpen = (elapsed) => {
    let minutes = Math.round(elapsed / 1000) / 60;
    if (minutes >= 1) {
      handleOpen();
    }
  }

  const updateElapsed = () => {
    
  }

  useEffect(() => {
    setElapsed(getElapsedTime());
    let minutes = Math.round(elapsed / 1000) / 60;
    setInterval(() => {
      setElapsed(getElapsedTime())
      if(minutes > 0.5) {
        clearInterval(updateElapsed)
      }
    }, 1000);
  }, []);

  useEffect(() => {
    // console.log(elapsed)
    checkModalOpen(elapsed);
  },[elapsed])

  return (
    <div className="gameContainer">
      <iframe
        title="Mini Game"
        width="100%"
        height="100vh"
        className="miniGameFrame"
        allow="fullscreen; autoplay; encrypted-media"
        src="https://games.construct.net/4032/latest"
        frameBorder="0"
        allowFullScreen={true}
        msallowfullscreen="true"
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        allowpaymentrequest="false"
        referrerPolicy="unsafe-url"
        sandbox="allow-same-origin allow-forms allow-scripts allow-pointer-lock allow-orientation-lock allow-popups"
        scrolling="no"
      ></iframe>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="time-up-modal"
      >
        <Box sx={style}>
          <p>Our Apologies, <br /> But your free gamplay time is over!</p>
          <div className="ctaContainer">
          <p><Link href="/wallet" className="ctaAction">Recharge here</Link> &amp; resume where you left off!</p>
          <p>AIRwallet balance <span className="ctaAction">Rs.20</span></p>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default GamePage;
