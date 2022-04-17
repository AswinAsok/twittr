import React from "react";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./tweetid.module.css";
import repost from "../../public/repost.png";
import reply from "../../public/reply.png";
import heart from "../../public/heart.png";

import Image from "next/image";

const tweetid = ({ tweetdata }) => {
  return (
    <>
      <Navbar />

      <div className={styles.container}>
        <p className={styles.heading}>The Tweet and Ratio.</p>
        <div className={styles.tweet}>{tweetdata.text}</div>
        <div className={styles.count}>
          <p>
            <Image src={repost} width={35} height={35} /> <br />{" "}
            {tweetdata.public_metrics.retweet_count}
          </p>
          <p>
            <Image src={reply} width={33} height={33} /> <br />
            {tweetdata.public_metrics.reply_count}
          </p>

          <p>
            <Image src={heart} width={35} height={35} /> <br />{" "}
            {tweetdata.public_metrics.like_count}
          </p>
        </div>

        <div className={styles.ratio}>
          <p>
            The Determining Ratio
            <br />
            {tweetdata.public_metrics.reply_count /
              (tweetdata.public_metrics.like_count +
                tweetdata.public_metrics.retweet_count)}
          </p>
        </div>

        <div className={styles.about}>
          <span>Note: </span>
          If the ratio is greater than 1, it indicates a negative response
          towards your tweet, as the number of replies is more than the number
          of likes and retweets taken together. If its less than one you are
          good to go.
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
    </>
  );
};

export default tweetid;

export async function getServerSideProps(context) {
  let tweetid = context.params.tweetid;

  let data = await axios
    .get(
      `https://api.twitter.com/2/tweets?ids=${tweetid}&tweet.fields=public_metrics&expansions=attachments.media_keys&media.fields=public_metrics`,
      {
        headers: {
          Authorization: `Bearer ${process.env.TOKEN}`,
        },
      }
    )
    .then((res) => res.data);

  return {
    props: {
      tweetdata: data.data[0],
    },
  };
}
