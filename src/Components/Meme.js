import React from "react";

const Meme = props => {
  const { images } = props;
  //   console.log(images.data);
  let random = Math.floor(Math.random() * 3 + 1);
  console.log(random);
  let meme = "";
  if (random == 1) {
    meme = images.data[0];
    // this.setState({ meme: images[0] });
  } else if (random == 2) {
    meme = images.data[1];
    // this.setState({ meme: images[1] });
  } else if (random == 3) {
    meme = images.data[2];
    // this.setState({ meme: images[2] });
  }
  console.log(meme);
  return <img src={meme} alt="Cap Meme" />;
};

export default Meme;
