const express = require('express');
const app = express();
const PORT = 4529;
const worldCup = [
  {
    Country:"Nigeria",
    Player:"Victor Oshimen",
    Coach:"Gani Fawehinmi"
  },
  {
    Country:"Argentina",
    Player:"Lionel Messi",
    Coach:"Lionel Scaloni"
  },
  {
    Country:"France",
    Player:"Kylian Mbappe",
    Coach:"Didier Deschamps"
  },
  {
    Country:"Brazil",
    Player:"Neymar Jr",
    Coach:"Tite"
  },
  {
    Country:"Germany",
    Player:"Mario Götze",
    Coach:"Joachim Löw"
  },
  {
    Country:"Spain",
    Player:"Sergio Ramos",
    Coach:"Luis Enrique"
  },
  {
    Country:"Portugal",
    Player:"Cristiano Ronaldo",
    Coach:"Fernando Santos"
  },
  {
    Country:"England",
    Player:"Harry Kane",
    Coach:"Gareth Southgate"
  },
  {
    Country:"Belgium",
    Player:"Kevin De Bruyne",
    Coach:"Roberto Martínez"
  }
]

app.get('/', (request,response) =>{
  response.send('Welcome to Backend Class');
  console.log('Have accessed the path');
})

app.get("/worldCup",(req,res) =>{
  res.send(worldCup);
})
app.get("/hurry",(req,res) =>{
  res.send("I build my first api with express js");
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  // console.log('Have accessed the path');
});
// console.log('I am a full stack developer')