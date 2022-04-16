import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";

import styles from "./Body.module.css";

// https://api.twitter.com/2/tweets?ids=1511678199616335872&tweet.fields=public_metrics&expansions=attachments.media_keys&media.fields=public_metrics

const Body = () => {
  const [tweetid, setTweetid] = useState(0);

  return (
    <div className={styles.container}>
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
            console.log(tweetid);
          }}
          type="text"
          name=""
          id=""
        />
        <Link href={`/tweet/${tweetid}`}>
          <button className={styles.button}>Start</button>
        </Link>
      </div>
    </div>
  );
};

export default Body;
