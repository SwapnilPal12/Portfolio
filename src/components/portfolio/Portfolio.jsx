import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Swadisht Restaurant App",
    img: "/Swadisht.png",
    desc: "This is a food ordering app for a restaurant made in ReactJS. It has multiple features such as filter according to the type of food, add to cart option, remove from cart option and total amount to be paid to checkout",
    demo: "https://swadisht.vercel.app/",
  },
  {
    id: 2,
    title: "Think Different",
    img: "/business.png",
    desc: "It was a Freelance project where I had to develop a frontend website which basically aims to upscale small businesses by integrating them with technology.",
    demo: "https://businesss-website.netlify.app/",
  },
  {
    id: 3,
    title: "AI Article Summarizer",
    img: "/article.png",
    desc: "As the name suggests, this app is built to summarize long articles on the website saving a lot of your time. We just have to paste the link of that article and we will get the summary of it. We don't even have to write prompt for it.",
    demo: "https://article-summarizerr.netlify.app/",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.demo} target="_blank" rel="noreferrer">
              <button>See Demo</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Creations</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
