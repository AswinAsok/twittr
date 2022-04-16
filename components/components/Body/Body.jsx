import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";

// https://api.twitter.com/2/tweets?ids=1511678199616335872&tweet.fields=public_metrics&expansions=attachments.media_keys&media.fields=public_metrics

const Body = () => {
  const [tweetid, setTweetid] = useState(0);

  return (
    <div>
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
        <button>Start</button>
      </Link>
    </div>
  );
};

export default Body;
