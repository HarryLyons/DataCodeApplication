const fieldData = {
    "English": require('./languages/english.json'),
    "French": require('./languages/french.json'),
    "Pirate": require('./languages/pirate.json')
}
const base = require('./languages/english.json');

function changeLanguage(selectedLanguage) {
    //Should be a function to reload the page
    let currentLanguage = fieldData[selectedLanguage];
    const Greeting = document.querySelector('#greeting');
    const Username = document.querySelector('#username');
    const Password = document.querySelector('#password');
    const Login = document.querySelector('#login');

    if (currentlanguage.welcome_message != null) {
        Greeting.insertAdjacentText('afterbegin', currentlanguage.welcome_message);
    } else { Greeting.insertAdjacentText('afterbegin', base.welcome_message) }
    if (currentlanguage.username_label != null) {
        Username.insertAdjacentText('afterbegin', currentlanguage.username_label);
    } else { Username.insertAdjacentText('afterbegin', base.Username_label) }
    if (currentlanguage.password_label != null) {
        Password.insertAdjacentText('afterbegin', currentlanguage.password_label);
    } else { Password.insertAdjacentText('afterbegin', base.password_label) }
    if (currentlanguage.login_label != null) {
        Login.insertAdjacentText('afterbegin', currentlanguage.login_label);
    } else { Login.insertAdjacentText('afterbegin', base.login_label) }
};
