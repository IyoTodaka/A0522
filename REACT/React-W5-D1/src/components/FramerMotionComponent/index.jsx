import React from "react";
import { motion, AnimatePresence } from "framer-motion";

function FramerMotionComponent() {
  const [show, setShow] = React.useState(true);
  return (
    <>
      <h3>Framer Motion</h3>
      <AnimatePresence>
        {show && (
          <motion.div
            className="row"
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: -50, opacity: 0 }}
            exit={{ y: -50, opacity: 0 }}
          >
            Hello World
          </motion.div>
        )}
      </AnimatePresence>
      <button className="btn" onClick={() => setShow(!show)}>
        {show ? "Unmount component" : "Mount component"}
      </button>
    </>
  );
}

export default FramerMotionComponent;
