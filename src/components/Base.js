import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const containerVarients = {
  hidden: {
    opacity: 0,
    x: '100vw'
  },
  visable: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      delay: 0.5
    }
  }
};

const nextVairents = {
  intial: {
    x: '-100vw'
  },
  visable: {
    x: 0
  },
  transition: {
    type: 'spring',
    stiffness: 120
  }
};

const Base = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  return (
    <motion.div
      className="base container"
      variants={containerVarients}
      initial="hidden"
      animate="visable"
    >

      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <motion.li
              key={base}
              onClick={() => addBase(base)}
              whileHover={{
                scale: 1.3,
                color: "#f8e112",
                originX: 0
              }}
              transition={{
                type: "spring",
                stiffness: 300
              }}
            >
              <span className={spanClass}>{base}</span>
            </motion.li>
          )
        })}
      </ul>

      {/* if varients are named the smae names as the varients of the parent div you don't have to define them in the child */}
      {/* example: "base container" div have varients hidden and visable & "next" div has the same names visable & hidden */}
      {/* then: <motion.div varients={nextVarients} no need for: inital and animate props></motion.div> */}
      {pizza.base && (
        <motion.div
          className="next"
          variants={nextVairents}
          initial="intial"
          animate="visable"
        >
          <Link to="/toppings">
            <motion.button
              whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 8px rgb(255, 255, 255)",
                boxShadow: "0px 0px 8px rgb(255, 255, 255)"
              }}
            >
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}

    </motion.div>
  )
}

export default Base;