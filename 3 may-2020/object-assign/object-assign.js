//Object.assign(target,sources...) built in object method 
// used to copy objects or to merge objects 

//side note methods es6 version still need to return because they use brackets 

// goPLaySong is a arrow function that returns a object literal that contains a method 
// create method then add it to a function with Object.assign(target, source) and creation of a object literal
// currentSong is the playState property for the targeted instance
const goPlaySong = (currentSong) => ({
    playSong(valueInput) {
        console.log(`${currentSong.trackName} is playing.`)
        return currentSong.batteryLevel -= valueInput
    }
})

// so the return new object from Object.assign becomes the arguements??? or from when the object literal is created 
function mp3PlayerState(trackName, batteryLevel, trackLength) {
    let playState = {
        trackName,
        batteryLevel,
        trackLength
    }
    // does playState object go into playSong? this is the bit I don't understand 
    // 
    return Object.assign(
        playState,
        goPlaySong(playState) // method being invoked or add a method to a object 
    )
}

const song1 = mp3PlayerState('Mozart-finest', 20, 12.5)

console.log(song1)
console.log(song1.playSong) // playSong method 
song1.playSong(1) // playSong method gets invoked 

//==========================================================================================================
//==========================================================================================================


// the object is already built so there is no need for the new keyword or 'this' but can still be used

const theWholeSong = {
    trackName2: 'britney',
    batteryLevelz: 20,
    playSong(valueInput) {
        console.log(`${this.trackName2} is playing.`)
        this.batteryLevelz -= valueInput
    }
}

// theWholeSong.playSong(2)
// console.log(theWholeSong)

//==========================================================================================================
//==========================================================================================================

// https://www.youtube.com/watch?v=wfMtDGfHWpA

// the outer function creates a closure, so when the closure gets invoked the statement gets invoked 
// the state is the object passed into the method and whatever matches 
// can it bark? therefore it is a barker aka is it a barker??? 

// object literal returned inside of a arrow func express 
// state is the object properties 
// the barker function returns a object literal 
// postion and speed 
const barker = (state) => ({
    bark: () => console.log('Woof, I am ' + state.name)
})
const dogRobot1 = barker({ name: 'alfie' })

console.log(dogRobot1)
dogRobot1.bark()

const driver = (state) => ({
    drive: () => console.log('Woof, dog robot is at ' + state.position + 'at a speed of' + state.speed)
})

console.log(driver({ position: '122443', speed: 25 }).drive());








