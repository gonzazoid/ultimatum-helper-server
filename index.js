const express = require("express")
const app = express()
const port = 3000

app.get("/", (req, res) => {
  console.log("request\n");
  res.send("<html><body><a href=\"/ext\">ext</a></body></html>");
})

app.get("/ext", (req, res) => {
  console.log("REQUEST FOR V1!!!");
  res.download("./ext.crx", "ext.crx", { headers: {"Content-Type": "application/x-chrome-extension"} });
});

app.get("/ext_v2.crx", (req, res) => {
  console.log("REQUEST FOR V2!!!");
  res.download("./ext_v2.crx", "ext2.crx", { headers: {"Content-Type": "application/x-chrome-extension"} });
});

app.get("/update.ext", (req, res) => {
  console.log("REQUEST FOR UPDATE!!!");
  res.send(`<?xml version='1.0' encoding='UTF-8'?>
<gupdate xmlns='http://www.google.com/update2/response' protocol='2.0'>
  <app appid='hoigcanlnnificfimdjjkplfpilchhib'>
    <updatecheck codebase='http://127.0.0.1:${port}/ext_v2.crx' version='0.0.2' />
  </app>
</gupdate>`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
