# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Xavier Huetter**

Time spent: **6** hours spent in total

Link to project: (insert your link here, should start with https://glitch.com...)

## Required Functionality

The following **required** functionality is complete:

* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [ ] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![x] http://g.recordit.co/txjJpQIrJY.gif


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
https://www.w3schools.com/colors/colors_names.asp
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
https://developers.google.com/web/updates/2017/09/autoplay-policy-changes#webaudio

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
A challenge I encountered in creating this submission was in the form of a bug I came across related to to how webpages function in Chrome. While testing the functionality of my code,
I found that the webpage would not play any audio with the buttons, while it would work correctly when I tested it in the same browser as the IDE. To get to the bottom of the issue, I
looked through the Developer Tools to see if there were any errors. I found an issue where Chrome browsers will suspend audio from a webpage until the user has interacted with the
webpage. To solve the issue, I had to add code that called the resume() function on the AudioContext variable that played the sounds for the button that would activate after the user
pressed any of the buttons on the webpage. While I initially tried to fix the issue by adding resume function calls into the startTone() and playTone() functions, there would still be
a little delay before audio would start playing. I eventually added code that I found from a google developer webpage discussing the reason for audio being suspended until user interaction
with the webpage. This added code would activate the AudioContext of the buttons once any button was pressed at all. Fixing this bug taught me a bit about how audio works on webpages,
specifically how web audio operates on Chrome browsers.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
After completing my submission, I would like to know more about designing webpages, as many of the websites I use are much more complex and sophisticated than the one I just created.
Specifically, I would like to learn how to create webpages that have interactive and dynamic backgrounds, rather than the simple single-color background my application has. I would also
like to learn how different websites are able to add advertisements that play automatically when a user visits the site. In addition, I would like to learn the different methods that websites
use to store user account information securely, as I would imagine there would be a complex system in place to accomplish such a feature.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
If I had a few more hours to work on this project, I would work on adding more of the optional features, such as adding a timer for guesses to make the game more challenging. I would also try to add to
the design of the webpage, whether it be in making a more complex background or customizing the buttons, font, and sounds to match a certain theme. After implementing all these changes, I would work on
adding additional counters to let the player know important information about the game, such as their current progress, their number of mistakes left, and their current guess. I would also work on adding
extra audio cues to let the player know if they are right or wrong.



## License

    Copyright Xavier Huetter

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
