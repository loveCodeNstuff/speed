# Speed Optimization #

## Summary ##

This is my repository for the speed optimization for Udacity Course

## Review Files
Since I have minified files for production I have saved the un-minified files in these locations.

HTML - views/preBuild
JS   - public/js/preBuild
css  - public/css/preBuild

### Javascript Main.js changes
* Refactored resizePizzas() took out determineDx which was causing a forced reflow and added changePizzaSizes() to the function.
* Refactored changePizzaSizes() to pass newWidth with a percentage directly to the randomPizza array.  Also added vars for the querySelectorAll('.randomPizzaContainer') and randomPizza Length so it does not have to recalculate it every loop pass.
* Refactored updatePositions() took out all variables that only needed to be calculated once out of the loop that changes .mover pizzas X axis.  Also created a loop to push all the 5 calculations that were repeating from the scrollTop calculation.  Then used a variable phaseCount to help repeat those 5 calucations inside the loop that moved the x axis of the pizzas.  Also used style.transform instead of style.left since that was causing a forced reflow.
* I added a requestAnimationFrame to the event listener for 'scroll'.
* Decreased the number of moving pizzas to 35 from 200 which wasn't needed.
* Changed image used for moving pizzas to a smaller version since the size and height.  Also removed the height and width changes to movingPizzas and added those changes to the .moving class in pizzaStyle.css file.
* Created a var for  document.querySelector("#movingPizzas1") instead of it being read every pass in loop in DOMContentLoaded event listener.

## How to run Site
Either use Staging Site Link or run on LocalHost instructions below

### Staging Site Link
#### *Disclaimer this site is hosted on Heroku which sleeps apps on free tier so let app wake up first then reload page for smoother loading :-)
[http://speedtest123.herokuapp.com/](http://speedtest123.herokuapp.com/)

### How to run site on localhost port 3000
1. Install Node.js on your computer get from this website https://nodejs.org/en/
2. Open up terminal / command prompt / git bash and cd into root of this folder
3. In terminal / command prompt / git bash type npm install
4. Wait till it installs node_modules needed to run web server
5. In terminal / command prompt / git bash type node app.js
6. Open up any web browser and go to http://localhost:3000/

### Tools and Technology used

* JavaScript
* Bootstrap
* Node.js
* Express
* Ejs
* HTML
* CSS
