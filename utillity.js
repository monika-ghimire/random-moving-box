   //its give random number till n
   function randomNum(n) {
    let number = Math.floor(Math.random() * n);
    return number;
  }

  function getRandomColor()
  {
    let color = [
        "#02BCDE",
        "#8D6EA8",
        "#2E9AEA",
        "#1DEA5D",
        "#E2F40C",
        "#F5A660",
        "#F45FAA",
      ];
    let randomColor=color[randomNum(color.length)]
    return randomColor;
  }