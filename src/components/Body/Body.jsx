import axios from "axios";
import React, { useState } from "react";
import "./Body.css";

// https://api.twitter.com/2/tweets?ids=1511678199616335872&tweet.fields=public_metrics&expansions=attachments.media_keys&media.fields=public_metrics

const getData = async (id) => {
  let url = `https://api.twitter.com/2/tweets?ids=${id}&tweet.fields=public_metrics&expansions=attachments.media_keys&media.fields=public_metrics`;
  try {
    let res = await axios.get(url, {
      headers: {
        Authorization:
           `Bearer ${process.env.REACT_APP_BEARER_TOKEN}`,
      },
    });

    console.log("Kitti Guys");
    return "success";
  } catch (error) {
    console.log(error);
    return "error";
  }
};

const Body = () => {
  const [tweetid, setTweetid] = useState(0);

  return (
    <div className="container">
      <input
        onChange={(event) => {
          setTweetid(event.target.value);
          console.log(tweetid);
        }}
        type="text"
        name=""
        id=""
      />
      <button
        onClick={() => {
          console.log(tweetid);
          getData(tweetid);
        }}
        className="search"
      >
        Start
      </button>
    </div>
  );
};

export default Body;
