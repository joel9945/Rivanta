import https from "https";

https.get("https://www.rivantagreen.com", (res) => {
  let data = "";
  res.on("data", (chunk) => (data += chunk));
  res.on("end", () => {
    const canonical = data.match(/<link rel="canonical" href="([^"]+)"/);
    console.log("Canonical on live www.rivantagreen.com:", canonical ? canonical[1] : "NOT FOUND");
    const title = data.match(/<title>([^<]+)<\/title>/);
    console.log("Title on live www.rivantagreen.com:", title ? title[1] : "NOT FOUND");
  });
});

