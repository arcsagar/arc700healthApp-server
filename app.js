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


// const newEvents = [...allEvents, {  id, title, start, end, allDay, userId }];

// await writeFileSync('./jsonData/events.json', JSON.stringify(newEvents));
// res.send({ status: 200, msg: "event added" });

app.get('/allhealth', async (req,res)=> {
  const data = await readFileSync("./jsonData/healthData.json");
  const allHealthData = JSON.parse(data);
  res.send({
    status: 200,
    msg: "All health Data",
    allHealthData,
  });
})

app.listen(port, () => {
  console.log("Server started on port " + port);
});


