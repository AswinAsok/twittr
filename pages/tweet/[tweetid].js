import React from "react";
import axios from "axios";
import Navbar from "../../components/components/Navbar/Navbar";
import styles from "./tweetid.module.css";

const tweetid = ({ tweetdata }) => {
  console.log(tweetdata);
  return (
    <>
      <Navbar />

      <div className={styles.container}>
        <div className={styles.tweet}>{tweetdata.text}</div>
        <div className={styles.count}>
          <p>
            Retweet Count <br /> {tweetdata.public_metrics.retweet_count}
          </p>
          <p>
            Reply Count
            <br />
            {tweetdata.public_metrics.reply_count}
          </p>

          <p>
            Like Count
            <br /> {tweetdata.public_metrics.like_count}
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
          If the ratio is greater than 1, it indicates a neagive response
          towards your tweets, as the number of replies is more than the number
          of likes and retweets. If its less than one you are good to go.
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
