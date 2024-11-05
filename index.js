if (performance.navigation.type === performance.navigation.TYPE_RELOAD) 
    {
    // If page was refreshed, display a random number
    diceGame();
    } 
else 
    {
    // If this is the first load, show a 'Refresh me' message
    document.querySelector("h1").textContent = 'Refresh me';
    }

function diceGame ()
{
    var randomNumber1 = Math.floor( Math.random() * 6); 
    var randomNumber2 = Math.floor( Math.random() * 6);
    
    var imgList = ["./images/dice1.png", "./images/dice2.png", "./images/dice3.png", "./images/dice4.png", "./images/dice5.png", "./images/dice6.png"];
    var bothDices = document.querySelectorAll("img");
    
    for (var i=0; i < imgList.length; i++)
        {
            if (randomNumber1 === i)
            {
                bothDices[0].setAttribute("src", imgList[i]);
                if (randomNumber2 === i)
                {
                    bothDices[1].setAttribute("src", imgList[i]);
                }
            }
            else if (randomNumber2 === i)
                {
                    bothDices[1].setAttribute("src", imgList[i]);
                }
        }
    
    if (randomNumber1 > randomNumber2)
        {
            document.querySelector("h1").innerHTML = "Player 1 Wins"
        }
    else if (randomNumber1 === randomNumber2)
        {
            document.querySelector("h1").innerHTML = "Try Again"
        }
    else
        {
            document.querySelector("h1").innerHTML = "Player 2 Wins"
        }
    
    console.log(randomNumber1);
    console.log(randomNumber2);
}