var bombLocation = Math.floor(Math.random() * 9)
var treasureLocation = Math.floor(Math.random() * 9)
var count = 10
function treasure(id) {
    count = count-1
    document.getElementById("count").innerHTML=count
    if (bombLocation===treasureLocation){
        document.getElementById(bombLocation).innerHTML="&#x2640"
        document.getElementById("outcome").innerHTML="The Bomb and Treasure are in the same location"
        window.location.reload()
    }
    else if (id===bombLocation){
        document.getElementById(bombLocation).innerHTML="&#x2620"
        document.getElementById("outcome").innerHTML="The Bomb has exploded, You Lose"
        alert("The Bomb has exploded, You Lose")
        window.location.reload()
    }
    else if (id===treasureLocation){
        document.getElementById(treasureLocation).innerHTML="&#x1f332"
        document.getElementById("outcome").innerHTML="You Win!"
        alert("You Win!")
        window.location.reload()
    }
    else {
        document.getElementById(id).innerHTML="&#x1f308"
    }
    if (counter === 0) {
        document.getElementById("outcome").innerHTML="Out of time, You Lose"
        alert("Out of Time, You Lose")
    }
}
