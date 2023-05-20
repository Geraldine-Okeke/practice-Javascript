Javascript testing with jest


i started by checking if nodeand npm s installed in my system with node --v and npm --v


since i have it installed . i created a file called addFive.json,the wrote an addFive(). after the function. i exported the module with 'module.exports = addFive'


then i entered this in my termnal :  'npm init -y', this created a package.json file in my folder,then i navigated into d file and changed the value for the 'test'key to 'jest'


then i went ahead to install jest using this command line 'npm install --save-dev jest', this installed package-lock.json in my folder


I created another file and name it 'addFive.test.js', where i wrote down my test 


went back to d terminal to run the test with 'npm run test'