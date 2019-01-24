// import test from './test.js';
// var _test = require('./test.js');

const textarea = document.querySelector('#textarea');
const buttonAdd = document.querySelector('#button-add');
const buttonShowSnapchats = document.querySelector('#button-show-snapchats');
const showMarkedSnapchatList = document.querySelector('#button-show-marked-snapchats');
const list = document.querySelector('#list');
const makedList = document.querySelector('#list-marked');

function checkLocalStorage() {
    if(localStorage.getItem('Data') == null){
        initLocalStorage();
    }else{
        console.log("Data is ready")
    }
}

checkLocalStorage();

function initLocalStorage() {
    const Data = {
        snapchats: []
    }

    setTimeout(() => {
        localStorage.setItem('Data', JSON.stringify( Data ) );
        console.log("LocalStorage Data created")
    }, 1000);
}

function getData() {
    let Data = JSON.parse( localStorage.getItem('Data') );
    return Data;
}

function getSnapchats(){
    let textareaValue = textarea.value;
    textareaValue = textareaValue.split(",");

    //remove " from first and last element
    textareaValue[0] = textareaValue[0].replace('"', '');
    textareaValue[textareaValue.length-1] = textareaValue[textareaValue.length-1].replace('"', '');

    let trimmed = [];

    textareaValue.forEach(el => {
        trimmed.push( el.trim() )
    })

    nicknamesFiltr(textareaValue);

    console.groupCollapsed('GetSnapchats')
    console.log(trimmed)
    console.groupEnd('GetSnapchats')

    return trimmed;
}

const ways = [':', '-', 'snap', 'Snap', 'SNAP', 'sc', 'Sc', 'SC', '👻'];

function nicknamesFiltr( snapchatsArray ){
    let filteredNicknames = [];

    snapchatsArray.forEach( (elTab, i) => { // Here is problem with getting snapchats with no prefix like sc: snap- etc. All clear nicknames are romoving from array

        // ways.forEach( (elWays, i) => {
        //     if ( elTab.indexOf(elWays) >= 0 ){
        //         filteredNicknames.push( elTab.split(elWays)[1].trim() );   
        //     }
        // });

        // way above working bad, bottom is better but longer, i think I can do this better in future

        if ( elTab.indexOf( ways[0] ) >= 0 ) {
            filteredNicknames.push( elTab.split( ways[0] )[1].trim() );
            return;
        }

        if ( elTab.indexOf( ways[1] ) >= 0 ) {
            filteredNicknames.push( elTab.split( ways[1] )[1].trim() );
            return;
        }

        if ( elTab.indexOf( ways[2] ) >= 0 ) {
            filteredNicknames.push( elTab.split( ways[2] )[1].trim() );
            return;
        }

        if ( elTab.indexOf( ways[3] ) >= 0 ) {
            filteredNicknames.push( elTab.split( ways[3] )[1].trim() );
            return;
        }

        if ( elTab.indexOf( ways[4] ) >= 0 ) {
            filteredNicknames.push( elTab.split( ways[4] )[1].trim() );
            return;
        }

        if ( elTab.indexOf( ways[5] ) >= 0 ) {
            filteredNicknames.push( elTab.split( ways[5] )[1].trim() );
            return;
        }

        if ( elTab.indexOf( ways[6] ) >= 0 ) {
            filteredNicknames.push( elTab.split( ways[6] )[1].trim() );
            return;
        }

        if ( elTab.indexOf( ways[7] ) >= 0 ) {
            filteredNicknames.push( elTab.split( ways[7] )[1].trim() );
            return;
        }

        if ( elTab.indexOf( ways[8] ) >= 0 ) {
            filteredNicknames.push( elTab.split( ways[8] )[1].trim() );
            return;
        }

    });

  cleared = [... new Set(filteredNicknames)]

  return cleared;
}


function checkDoubledBeforeSend(){
    let Data = getData();
    let dataToPush = nicknamesFiltr(getSnapchats());

    if (dataToPush.length > 0){
        dataToPush.forEach(el=>{
            Data.snapchats.push(el)
        });
    }

    clearedData = [... new Set(Data.snapchats)]

    Data.snapchats = clearedData;

    return Data;
}

function sendData() {
    if( getSnapchats() == '' ){
        console.log("Can't add empty array");
    }else{
        localStorage.setItem('Data', JSON.stringify( checkDoubledBeforeSend() ) );
        showInfoAboutAddSnapchats();
    }

}

function showInfoAboutAddSnapchats () {
    const infoSection = document.querySelector('#infoaboutadd');

    infoSection.classList.remove('hidden');
    setTimeout(() => {
        infoSection.classList.add('hidden');
    }, 5000);
}

buttonAdd.addEventListener('click', ()=>{
    sendData();
})

let buttonCounter = false;
buttonShowSnapchats.addEventListener('click', ()=>{
    if (buttonCounter == false){
        showSnapchatsList();
        buttonCounter = true;
    }
})

function showSnapchatsList(){
    const Data = getData();

    // let newData = Data.snapchats[0].split(' ');


    filteredData = [... new Set(Data.snapchats) ] // here filtered data is string ! should be array
    console.table(filteredData)
    filteredData.forEach(el=>{
        const li = document.createElement('li');
        const marked = document.createElement('button');
        marked.classList.add('not-marked');

        li.classList.add('list__item');
        li.innerText = el;

        list.appendChild(li);
        li.appendChild(marked);
    })

    setTimeout(() => {
        markSnapListPosition();
        compareArrays();
    }, 1000);
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

let markedSnapchats = [];
function markSnapListPosition(){
    const snapList = document.querySelectorAll('.not-marked');

    snapList.forEach(el =>{
        el.addEventListener('click', ()=>{
            let selected_name = el.parentElement.innerText;
            console.log(selected_name)
            el.classList.add('marked');
            markedSnapchats.push(selected_name);
            addMarkedSnapchatsToData();
        })
    })
}

function checkLocalStorageMarkedSnapchats(){
    let Data = {
        snapchats: []
    }

    if(localStorage.getItem('markedData') == null){
        localStorage.setItem('markedData', JSON.stringify( Data ) );
    }else{
        console.log('Marked data was created :)')
    }
}

checkLocalStorageMarkedSnapchats();


function addMarkedSnapchatsToData(){
    let Data = JSON.parse( localStorage.getItem('markedData') );
    markedSnapchats.forEach(el=>{
        Data.snapchats.push(el)
    })

    cleared = [... new Set(Data.snapchats)]

    Data.snapchats = cleared;

    localStorage.setItem('markedData', JSON.stringify(Data))
}


function showMarked(){
    const Data = JSON.parse( localStorage.getItem('markedData') );
    filteredData = [... new Set(Data.snapchats) ]

    filteredData.forEach(el=>{
        const li = document.createElement('li');

        li.classList.add('list__item');
        li.innerText = el;

        makedList.appendChild(li);
    });
}

let button2counter = false;
showMarkedSnapchatList.addEventListener('click', ()=>{
    if (button2counter == false){
        showMarked();
        button2counter = true;
    }
});

function getMarkedData() {
    const markedData = JSON.parse( localStorage.getItem('markedData') );
    return markedData;
}


function compareArrays(){
    const Data = getData();
    const list = document.querySelector('.list');

    setTimeout(() => {
        getMarkedData().snapchats.forEach( el =>{
            if (Data.snapchats.indexOf(el) != null){
                list.children[Data.snapchats.indexOf(el)].style.color = "red";
                list.children[Data.snapchats.indexOf(el)].style.display = "none";
            }
        });
    }, 250);  
}

document.querySelector('#show-hidden').addEventListener('click', ()=>{
   if(toggle == false){
        toggleMarkedData(false);
        toggle = true;
   }else{
       toggleMarkedData(true);
       toggle = false;
   }
})

let toggle = false;
function toggleMarkedData(toggled){
    const Data = getData();
    const test = document.querySelector('.list');

    let displayType = '';
    let buttonText = '';

    if(toggled == false){
        displayType = 'list-item';
        buttonText = 'Hide Marked';
    }else{
        displayType = 'none';
        buttonText = 'Show Marked';
    }

    getMarkedData().snapchats.forEach( (el) =>{
        if (Data.snapchats.indexOf(el) != null){
            test.children[Data.snapchats.indexOf(el)].style.display = displayType;
        }
    });

    document.querySelector('#show-hidden').innerText = buttonText;
}

/// PLACE FOR CREATING NEW FEATURE AND TESTING

// Function for removing element from data

function removeSingleElementByIndex(index){
    let Data = getData();

    Data.snapchats.splice(index, 1);

    return Data;
}

function removeSnapchatByNick(nickname){
    let Data = getData();

    let nicknamePosition = Data.snapchats.indexOf(nickname);

    localStorage.setItem('Data', JSON.stringify( removeSingleElementByIndex( nicknamePosition) ) );
}

//// 