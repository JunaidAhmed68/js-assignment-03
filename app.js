
var screenDiv = document.getElementsByClassName('screen')[0]
function getValue(value){


    switch(value){
        case '=':
            var result = eval(screenDiv.innerText);
            screenDiv.setAttribute("class","ansScreen")
            screenDiv.innerText = result;
            break;
        case 'allClear':
            screenDiv.innerText = '';
            screenDiv.setAttribute("class","screen")
            break; 
        case 'delete':
                screenDiv.innerText = screenDiv.innerText.slice(0,screenDiv.innerText.length-1);
            break;
        default:
            screenDiv.innerText += value;
    }

}
