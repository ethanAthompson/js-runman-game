
// getting html elements by their data attribute
const getRunner = document.querySelector('[data-runner]')
const getButtons = document.querySelectorAll('[data-speed')
console.log(getButtons);
// using destructuring to assign each index from the getButtons array
// returned from the queryselectorAll array. 
const [slow, ss, fast] = getButtons

// variable for going through each img
let i = 0


// variable for getting the maximum value
let maxVal = 7

// forms an array by 0 to max value
const arr = [...Array(maxVal).keys()]

// timers for Intervals
let slowInterval = 0;
let ssInterval = 0;
let fastInterval = 0;
// timers for Timeout
let slowTimeout = 0;
let ssTimeout = 0;
let fastTimeout = 0;
// initial speed for slow timer
let slowSpeed = 3000;
let miniDecrease = 10

// tracking where user is clicking
let mouseClicks = -1

// cant be faster than 50ms and no slower than 3000
let imageIterator = 0
let maxImgInteger = 7


// state for running man
let runnerState = true

// normal speed for running man
let speed = 120;

function run() {

    if (runnerState === true) {

        // This uses a Guard Clause instead of If statement
        ssInterval = setInterval(() => {

            // console.log(ssInterval);

            // switch statement to run the man
            switch (imageIterator) {

                case maxImgInteger:
                    // resets the img back to 0.png
                    imageIterator = 0
                    getRunner.src = `images/${imageIterator}.png`
                    break;

                default:
                    // On default the image goes through 0.png to 6.png
                    getRunner.src = `images/${imageIterator}.png`
                    imageIterator++
            }


        }, speed);

        // set runner state to false when user clicks SS again
        runnerState = false

        // ends the execution of this function
        return
    }

    // clears the interval for the ss interval
    clearInterval(ssInterval)

    // sets runner state to true when user Clicks SS Again
    runnerState = true


}


ss.addEventListener('click', () => {

    // default speed is 200
    run()

    // tracking speeds
    mouseClicks++
    console.log(mouseClicks);

})


slow.addEventListener('click', () => {
    console.log(runnerState);

    // clears timer 
    runnerState = false
    
    
    // clears previous interval
    clearInterval(ssInterval)

    // sets a new speed but this one decrease
    ssInterval = setInterval(() => {

        // console.log(ssInterval);

        switch (imageIterator) {

            case maxImgInteger:
                // resets the img back to 0.png
                getRunner.src = `images/${imageIterator = 0}.png`
                break;

            default:
                // On default the image goes through 0.png to 6.png
                getRunner.src = `images/${imageIterator++}.png`
        }


    }, speed);

    // decreases speed in event listener( onClick)
    if (speed  > 3000) {
        clearInterval(ssInterval)
    } else {
        speed += 10
    }
    console.log(speed);
})


fast.addEventListener('click', () => {

    // sets state to false to avoid Multiple intervals
    runnerState = false

    // clears previous interval
    clearInterval(ssInterval)

    // sets a new speed but this one decrease
    ssInterval = setInterval(() => {

        switch (imageIterator) {

            // when it hits the max integer
            case maxImgInteger:
                // resets the img back to 0.png
                imageIterator = 0
                getRunner.src = `images/${imageIterator}.png`

            default:
                // On default the image goes through 0.png to 6.png
                getRunner.src = `images/${imageIterator}.png`
                imageIterator++
        }


    }, speed);

    // increases speed in event listener( onClick)

    if (speed  < 50) {
        clearInterval(ssInterval)
    } else {
        speed -= 10

    }
    console.log(speed);
})
