"use client";
import { Typewriter } from "react-simple-typewriter";
import React from "react";
import { motion } from "framer-motion";

export default function Type() {
  // const handleType = (count: number) => {
  //   // Access word count number
  //   console.log(count);
  // };

  // const handleDone = () => {
  //   // console.log(`Done after 5 loops!`);
  // };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2, duration: 0.4, ease: "easeIn" },
      }}
      className="App"
    >
      <h1
        style={{ paddingTop: "5rem", margin: "auto 0", fontWeight: "normal" }}
      >
        Life is simple{" "}
        <span style={{ color: "#7a34eb", fontWeight: "bold" }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={["Eat", "Sleep", "Code", "Repeat!"]}
            loop={false}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={100}
            delaySpeed={1000}
            // onLoopDone={handleDone}
            // onType={handleType}
          />
        </span>
      </h1>
    </motion.div>
  );
}
