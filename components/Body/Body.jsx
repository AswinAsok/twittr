import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import logo from "./logo.png";
import styles from "./Body.module.css";

// https://api.twitter.com/2/tweets?ids=1511678199616335872&tweet.fields=public_metrics&expansions=attachments.media_keys&media.fields=public_metrics

const Body = () => {
  const [tweetid, setTweetid] = useState(0);

  return (
    <div className={styles.container}>
      <Image src={logo} width={85} height={85} />
      <br />
      <div className={styles.heading}>
        The Ratio which Determies the Future of your Tweets.
      </div>
      <div className={styles.tagline}>
        We help you find the ratio which indicates the users responses to your
        tweet. Just enter your tweet id and view the magic
      </div>
      <div className={styles.form}>
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
        <p className={styles.note}>
          Click on any tweet and from the url in the browser you can find the
          tweetId. <br />
          <strong>Enter the TweetId only.</strong>
        </p>
      </div>

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
