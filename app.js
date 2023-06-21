const express = require("express");
const cors = require("cors");
const { readFileSync, writeFileSync } = require("fs");
const app = express();

const port = 3001;
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);



app.get("/allhealth", async (req, res) => {
  const data = await readFileSync("./jsonData/healthData.json");
  const allHealthData = JSON.parse(data);
  res.send({
    status: 200,
    msg: "All health Data",
    allHealthData,
  });
});

app.post("/addHealthData", async (req, res) => {
  
  const reqHealthData = req.body;
  console.log("reqHealthData", reqHealthData);
  const data = await readFileSync("./jsonData/healthData.json");
  const allHealthData = JSON.parse(data);
  const newHealthData = [...allHealthData,reqHealthData ];

await writeFileSync('./jsonData/healthData.json', JSON.stringify(newHealthData));
res.send({ status: 200, msg: "new health Data Added" });

});

app.listen(port, () => {
  console.log("Server started on port " + port);
});


