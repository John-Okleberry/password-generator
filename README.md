# password-generator

![Preview image of the final Password Generator](images/project-password-generator.png)

## Project Overview 

This is a website for generating highly-customizable passwords to provide users with the reassurance that secure passwords offer.

## Features

![Example image included with requirements for Hometown Homepage](images/requirements-password-generator.png)

__Requirements:__ <br/>
- Build it from "scratch" (Figma file provided as well as some limited code including an array with characters)
    - Generate Password button
    - Two fields for displaying the two passwords
- Generate two random passwords when the user clicks the button
- Each password should be 15 characters long
- Design files were provided for both a light option for the page color scheme

__Stretch Goals:__ <br/>

- Set password length
- Add "copy-on-click" functionality
- Toggle symbols and numbers on/off

</br>

**My Implementation:**<br/>

- I started by replacing all of the text and image content on the original site with information about myself and my hometown
- Hover funcationality was added to highlight each attraction as clickable
- New pages were added to contain detailed information about each attraction
- Return navigation was added to content pages that also utilized hover functionality
- The "Fire Sans" Google Font was added to the page
- Several color palettes at Coolors.co were considered but none matched the blues and greens of my source images as well

## Challenges and Learning

### Code Review Notes

- There is a way to allow the click-to-copy feature to function within Scrimba but it requires using a deprecated feature (exec command method) and this problem should not occur outside of Scrimba
- Suggestion to make the radio buttons for selecting uppercase/lowercase options a dropdown menu to save space. It becomes more obvious on mobile devices what is happening when more of the page is visible in a smaller space
- Advised to let a button occupy space on its own rather than have the width grow (This was something that I was playing around with as a means to fill larger screens but I can definitely see advantages to keeping the button size only as big as the text and padding requires)
- Add a max-width to the body advised (if this affects the background color, this could alternatively be applied to the header, main, and footer). The point is brought up that there is a point of diminishing returns when expanding content because noone really wants to look at the far corners of a larger monitor to take in website content.
- Recommended to declare variables as const instead of let when possible (this is something that I did learn and forgot on multiple projects so it has been noted mentally as well as in my own resources as a quick-reminder tool for finalizing projects)
- Recommended to split each type of password piece into it's own array (number, capital, lowercase, special) and then to compile the valid characters into a single array which is randomly drawn from
    - This eliminates the need to check if each character is valid because any character in the compiled array is valid
    - Saves on iteration effort
    - Simplifies the code
    - Makes it more clear what is being worked with based on which arrays are targeted for the compiled array


Positive Feedback

- Going above and beyond with features
- Including accessibility features like arias
- Trying to include SEO, Open Graph, and Meta tags
- Comments for every function
- Code is well structured



## Installation
Install the dependencies and run the project

npm install<br/>
npm start<br/>
Head over to https://vitejs.dev/ to learn more about configuring vite

## Contributing
Feel free to fork this project and submit pull requests. You can also open issues for any bugs you find or enhancements you think would be useful.

## Authors
John Okleberry - [Github profile](https://github.com/John-Okleberry)


About Scrimba
At Scrimba our goal is to create the best possible coding school at the cost of a gym membership! 💜 If we succeed with this, it will give anyone who wants to become a software developer a realistic shot at succeeding, regardless of where they live and the size of their wallets 🎉 The Frontend Developer Career Path aims to teach you everything you need to become a Junior Developer, or you could take a deep-dive with one of our advanced courses 🚀

Our courses
The Frontend Career Path
Become a Scrimba Pro member
Happy Coding!
