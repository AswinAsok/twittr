import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "./logo.png";
import github from "../../public/github.png";
import styles from "./Body.module.css";

const Body = () => {
  const [tweetid, setTweetid] = useState(0);
  const [stars, setStars] = useState(0);

  useEffect(() => {
    fetch(`https://api.github.com/repos/AswinAsok/twittr`)
      .then((res) => res.json())
      .then((data) => {
        setStars(data.stargazers_count);
      });
  }, []);

  return (
    <div className={styles.container}>
      <Image src={logo} width={85} height={85} />
      <br />
      <div className={styles.heading}>
        The Ratio which Determies the Future of your Tweets.
      </div>
      <div className={styles.tagline}>
        
        On the social media platform Twitter, <a href="https://www.urbandictionary.com/define.php?term=ratioed">a ratio, or getting ratioed</a>, is
        when replies to a tweet vastly outnumber likes or retweets. This means
        people are objecting to the tweet and considering its content bad.
        
      </div>
      <div className={styles.form}>
        <div className={styles.formfield}>
          <input
            onChange={(event) => {
              setTweetid(event.target.value);
            }}
            type="text"
            name=""
            id=""
            placeholder="twitter.com/elonmusk/status/:tweetId"
          />
          <Link href={`/tweet/${tweetid}`}>
            <button className={styles.button}>Start</button>
          </Link>
        </div>

        <p className={styles.note}>
          Click on any tweet and from the url in the browser you can find the
          tweetId. <br />
          <strong>
            Enter the TweetId only <br />
            (Sample TweetId: 1515360606643228686)
          </strong>
        </p>
      </div>

      <a href="https://github.com/AswinAsok/twittr">
        <div className={styles.github}>
          <button className={styles.star}>
            <span> {stars} Stars </span>
            <Image src={github} width={50} height={50} />{" "}
          </button>
        </div>
      </a>

      <div className={styles.credits}>
        Made By{" "}
        <a href="https://github.com/Govind-S-B" target="_blank">
          Govind SB
        </a>{" "}
        ,{" "}
        <a href="https://github.com/ashwin271" target="_blank">
          Ashwin M Murali
        </a>{" "}
        and{" "}
        <a href="https://github.com/AswinAsok" target="_blank">
          Aswin Asok
        </a>{" "}
        for Saturday Hack-Night 🚀.
      </div>
    </div>
  );
};

export default Body;
