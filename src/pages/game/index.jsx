import React, { useState, useEffect } from "react";
import "./game.styles.scss";
import { useIdleTimer } from "react-idle-timer";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Link from "@mui/joy/Link";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";

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
    color: "#fff",
    transform: "translate(-50%, -50%)",
    height: "20%",
    width: "90%",
    minHeight: "150px",
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
  };

  const updateElapsed = () => {};

  useEffect(() => {
    setElapsed(getElapsedTime());
    let minutes = Math.round(elapsed / 1000) / 60;
    setInterval(() => {
      setElapsed(getElapsedTime());
      if (minutes > 0.5) {
        clearInterval(updateElapsed);
      }
    }, 1000);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    // console.log(elapsed)
    checkModalOpen(elapsed);
    // eslint-disable-next-line
  }, [elapsed]);
  const navigate = useNavigate();
  return (
    <div className="  gameContainer">
      <CloseIcon
        id="close"
        onClick={() => {
          navigate(-1);
        }}
      />
      <iframe
        title="Mini Game"
        className="miniGameFrame"
        src="https://freehtml5games.org/games/tomb-runner/index.html"
        // width="800"
        // height="600"
        scrolling="none"
        frameBorder="0"
      ></iframe>
      <Modal open={open} onClose={handleClose} aria-labelledby="time-up-modal">
        <Box sx={style}>
          <p>
            Our Apologies, <br /> But your free gamplay time is over!
          </p>
          <div className="ctaContainer">
            <p className="hell">
              <Link href="/wallet" className="ctaAction">
                Recharge here
              </Link>{" "}
              &amp; resume where you left off!
            </p>
            <p>
              AIRwallet balance: <span className="ctaAction">Rs.00</span>
            </p>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default GamePage;
