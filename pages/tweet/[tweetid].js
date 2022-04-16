import React from "react";
import axios from "axios";

const tweetid = ({ tweetdata }) => {
  console.log(tweetdata);
  return (
    <div>
      <p>Retweet Count: {tweetdata.public_metrics.retweet_count}</p>
      <p>Reply Count: {tweetdata.public_metrics.reply_count}</p>

      <p>Like Count: {tweetdata.public_metrics.like_count}</p>

      <p>
        Ratio: 
         {tweetdata.public_metrics.reply_count /
          (tweetdata.public_metrics.like_count +
            tweetdata.public_metrics.retweet_count)}
      </p>
    </div>
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
