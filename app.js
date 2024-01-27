const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.status(200);
  res.send(`
  <!DOCTYPE html>
  <html>
    <head>
        <title>root</title>
        <meta
        property="og:image"
        content="https://elle-longcasting-frame.vercel.app/meta01.png"
      />
      <meta property="fc:frame" content="vNext" />
      <meta
        property="fc:frame:image"
        content="https://i.postimg.cc/bYmpZ67C/photo-2024-01-27-13-55-13.jpg"
      />
      <meta property="fc:frame:button:1" content="change image" />
      <meta
      property="fc:frame:post_url"
      content="https://express-sarvad.onrender/update-meta"
    />
    </head>
    <body>
    <p> testing </p>
    </body>
  </html>
`);
});

app.post("/update-meta", (req, res) => {
  res.status(200).send(`
      <!DOCTYPE html>
      <html>
        <head>
              <title>TEST</title>
            <meta property="fc:frame" content="vNext" />
            <meta property="fc:frame:button:1" content="success" />
            <meta property="fc:frame:image" content="https://i.postimg.cc/25S2wb4r/Image.png" />
        </head>
        <body>
        <p> testing </p>
        </body>
      </html>
  `);
});

app.listen(PORT, (error) => {
  if (!error)
    console.log(
      "Server is Successfully Running, and App is listening on port " + PORT
    );
  else console.log("Error occurred, server can't start", error);
});
