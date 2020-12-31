const monthOfBirth = prompt("In which month were you born?");
if (monthOfBirth === null) {
    console.log("You didn't enter a month");
} else {
    const month = monthOfBirth.toLowerCase();
    switch (month) {
        case 'may':
        case 'march':
        case 'april':
            console.log('You were born in spring');
            break;
    
        case 'december':
        case 'january':
        case 'february':
            console.log('You were born in winter');
            break;
    
        case 'june':
        case 'july':
        case 'august':
            console.log('You were born in summer');
            break;
    
        case 'september':
        case 'october':
        case 'november':
            console.log('You were born in autumn');
            break;
    
        default:
            console.log('You entered incorrect data');
    }
}