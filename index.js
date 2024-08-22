document.addEventListener('DOMContentLoaded', function () {

    // Stretch goal variables in a single object
    const settings = {
        length: 32,
        useSpecials: false,
        useNumbers: false,
        excludeDuplicates: false,
        caseOption: 'both', // 'upper', 'lower', 'both'
    };

    // Capture the customization form elements
    let lengthEl = document.getElementById("length-el");
    let specialsEl = document.getElementById("specials-el");
    let numbersEl = document.getElementById("numbers-el");
    let duplicatesEl = document.getElementById("duplicates-el");

    /* Variables for both passwords */
    let password1 = "example1"
    let password2 = "example2"
    let password1El = document.getElementById("password1-el")
    let password2El = document.getElementById("password2-el")
    let btnGenerate = document.getElementById("btn-generate")

    /* 91 characters in array */
    const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
        "/"];


    //
    // Password Generation
    //


    /* Creates a password by grouping individual, random characters from the supplied list 
       Passes the currently compiled password for parameter checks */
    function generatePass() {

        let tempPass = ""

        for (let i = 0; i < settings.length; i++) {
            tempPass += generateChar(tempPass)
        }

        return tempPass;
    }


    /* generates a single character */
    function generateChar(tempPass) {

        let attempts = 0;
        const maxAttempts = 1000;
        let valid = false;
        let char = '';
        let index = 300;

        while (valid === false && attempts < maxAttempts) {
            index = Math.floor(Math.random() * 91)
            char = characters[index]
            valid = checkValidChar(index, tempPass);
            attempts++;
        }

        return adjustCase(char);
    }


    //
    // Parameter Checks
    //


    /* Check that the current random character is not present in the currently building password */
    function checkNotDuplicate(dupChar, tempPass) {

        for (let i = 0; i < tempPass.length; i++) {
            if (tempPass[i] === dupChar) {
                return false;
            }
        }

        return true;  // Not a duplicate
    }


    /* Use the given paramaters to verify if the randomly selected characer is valid for use */
    function checkValidChar(index, tempPass) {
        tempChar = characters[index];

        /* Character is not a number if numbers are excluded */
        if (index >= 52 && index <= 61 && settings.useNumbers === false) {
            return false;
        }

        /* Character is not a special if specials are excluded (specials start at 62) */
        if (settings.useSpecials === false && index >= 62) {
            return false;
        }

        /* If duplicate characters are excluded, verify that the current character is unique */
        if (settings.excludeDuplicates === true) {
            if (settings.caseOption === 'upper') {
                return checkNotDuplicate(tempChar.toUpperCase(), tempPass)
            }
            else if (settings.caseOption === 'lower') {
                return checkNotDuplicate(tempChar.toLowerCase(), tempPass)
            }
            return checkNotDuplicate(tempChar, tempPass);
        }

        return true; // The generated character is valid based on supplied parameters
    }


    // A function to verify that enough characters are available after filtering 
    function enoughCharacters() {
        availableChars = 91;

        if (settings.excludeDuplicates === true) {
            if (settings.useNumbers === false) {
                availableChars -= 10;
            }

            if (settings.useSpecials === false) {
                availableChars -= 29;
            }

            if (settings.caseOption === 'lower' || settings.caseOption === 'upper') {
                availableChars -= 26;
            }
        }

        if (settings.length > availableChars) {
            alert("Not enough available characters with the currently selected options. Max Length with the current settings is " + availableChars);
            return false;
        }

        return true;
    }


    //
    // Populating values
    //


    /* Adjust case if necessary if "all" upper or lower case options are selected */
    function adjustCase(caseChar) {
        if (settings.caseOption === 'upper') {
            caseChar = caseChar.toUpperCase();
        } else if (settings.caseOption === 'lower') {
            caseChar = caseChar.toLowerCase();
        } else if (settings.caseOption === 'both') {
            // Do not change the case (displayed for clarity only)
        }

        return caseChar;
    }


    /* Updates the password fields to reflect the results */
    function displayResults() {
        password1El.textContent = password1;
        password2El.textContent = password2;
    }

    /* Take all of the input from the form and apply those values to the JavaScript */
    function collectParameters() {
        settings.length = parseInt(lengthEl.value);
        settings.useSpecials = specialsEl.checked;
        settings.useNumbers = numbersEl.checked;
        settings.excludeDuplicates = duplicatesEl.checked;
        settings.caseOption = document.querySelector('input[name="case-option"]:checked').value;
    }


    //
    // Click responses
    //


    /* Everything that the button performs - Includes protection from operating on too few chars */
    function activate() {


        collectParameters()
        if (enoughCharacters()) {
            password1 = generatePass()
            password2 = generatePass()
        }

        displayResults()
    }


    /* Copy generated password text to the clipboard */
    function copyTextToClipboard(text) {
        navigator.clipboard.writeText(text).then(function () {
            console.log('Text copied to clipboard');
        }).catch(function (error) {
            console.error('Error copying text to clipboard: ', error);
        });
    }


    //
    // Event Listeners
    //


    // Button listener
    btnGenerate.addEventListener("click", activate);

    // Click to Copy listener for password1
    document.getElementById("password1-container").addEventListener("click", function () {
        copyTextToClipboard(password1El.textContent);
        alert("Copied Password 1");
    });

    // Click to Copy listener for password2
    document.getElementById("password2-container").addEventListener("click", function () {
        copyTextToClipboard(password2El.textContent);
        alert("Copied Password 2");
    });

    document.getElementById("length-el").addEventListener("input", function () {
        settings.length = parseInt(lengthEl.value);
        document.querySelector("label[for='length-el']").firstChild.textContent = "Length (8-64) [" + settings.length + "]";
    });

});