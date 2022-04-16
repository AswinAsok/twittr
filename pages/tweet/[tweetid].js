import React from "react";
import axios from "axios";

const tweetid = ({ tweetdata }) => {
  console.log(tweetdata);
  return <div>Hi</div>;
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
      tweetdata: data,
    },
  };
}
