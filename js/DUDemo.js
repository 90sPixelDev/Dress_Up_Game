//LOGIC METHOD 1 (works except for gender that's not set up and also a slight bug)

// const character = {
//     gender: 1,
//     head:   1,
//     top:    1,
//     bottom: 1,
//     feet:   1
// };

// //Passing the button id through function to grab correct item
// const itemSelector = (button) => {
//     const buttonType = button.id;
//     //Determining whether going up in array of items or down
//     let isPosDir = buttonType.includes('next') ? true : false;
//     console.log(buttonType);

//     //Determining which item type to be changing tehn running the setItem function to complete the process
//     if (buttonType.includes('head')) {
//         let url = '../img/head/head_';
//         setItem('head', character.head, isPosDir, url);
//     }
//     if (buttonType.includes('top')) {
//         let url = '../img/top/top_';
//         setItem('top', character.top, isPosDir, url);
//     }
//     if (buttonType.includes('bottom')) {
//         let url = '../img/bottom/bottom_';
//         setItem('bottom', character.bottom, isPosDir, url);
//     }
//     if (buttonType.includes('feet')) {
//         let url = '../img/feet/feet_';
//         setItem('feet', character.feet, isPosDir, url);
//     }
// }

// const setItem = (itemType, itemIndex, isPosDir, url) => {
//     isPosDir ? itemIndex++ : itemIndex--;

//     //Making sure the index of items doesnt go below or above the items available
//     if (itemIndex === 0) itemIndex = 1;
//     if (itemIndex === 4) itemIndex = 3;

//     //Setting the character object values to update with the current item in scene
//     character[itemType] = itemIndex;
//     //Setting up the url of the img to use
//     itemString = 'url(' + `${url}${itemIndex}.png)`;
//     document.getElementById(itemType).style.background = itemString;
//     console.table(itemType, itemIndex, itemString);
// }



//LOGIC METHOD 2 ATTEMPTED WITH ARRAYS ----------------------------------------------

const hueSlider = document.getElementById('hue');


// VARIABLE TO RESPRESENT ITEM IN ARRAY THAT IS SELECTED
let currentItem = 0;
let itemtoColor;
let colorItem;

const character = {
    base:   0,
    hair:   0,
    top:    0,
    bottom: 0,
    shoes:  0
}

// ALL ITEMS IN EACH ITEM TYPE
const allBases = ['base_1', 'base_2', 'base_3', 'base_4', 'base_5', 'base_6', 'base_7', 'base_8', 'base_9', 'base_10'];
const allHairs = ['hair_1', 'hair_2', 'hair_3', 'hair_4', 'hair_5', 'hair_6', 'hair_7', 'hair_8', 'hair_9', 'hair_10'];
const allTops = ['top_1', 'top_2', 'top_3', 'top_4', 'top_5', 'top_6', 'top_7', 'top_8', 'top_9', 'top_10'];
const allBottoms = ['bottom_1', 'bottom_2', 'bottom_3', 'bottom_4', 'bottom_5', 'bottom_6', 'bottom_7', 'bottom_8', 'bottom_9', 'bottom_10'];
const allShoes = ['shoes_1', 'shoes_2', 'shoes_3', 'shoes_4', 'shoes_5'];

const itemType = ['base', 'hair', 'top', 'bottom', 'shoes'];

const itemTypetoColor = (radio) => {
    let tempItem = radio.id;
    itemtoColor = tempItem.replace('-color', '');
    console.log(itemtoColor);
}

const hueChange = (slider) => {
    if (itemtoColor === undefined) return;
    item = document.getElementById(itemtoColor);
    let hueValue = slider.value;
    item.style.filter = `hue-rotate(${hueValue}deg)`;
}

const brightnessChange = (slider) => {
    if (itemtoColor === undefined) return;
    item = document.getElementById(itemtoColor);
    let brightnessValue = slider.value;
    item.style.filter = `brightness(${brightnessValue}%)`;
}

const itemSelector = (button) => {

    // SETTING UP THE VARIABLES TO USE LATER
    const url = 'url(../img/';
    let itemList;
    //THIS IS TO HAVE A SEPERATE INDEX FOR EACH ITEM TYPE CHANGE TO PREVENT BUG FROM LOGIC METHOD 1
    let itemTypeIndex;

    // SELECTING WHICH TYPE OF ITEM NEEDS TO BE CHANGED
    //FOR BASES
    if (button.id.includes('base')){
        //  AUTOMATICALLY SETTING TO CHANGE THE COLOR OF THE CHANGED ITEM
        colorItem = document.getElementById('base-color');
        console.log(colorItem);
        colorItem.checked = true;
        itemTypetoColor(colorItem);

        document.getElementById('base-color').checked = true;
        console.log('Pressed Hair');
        itemTypeIndex = itemType.indexOf('base');
        itemList = allBases;
            // CHECKING DIRECTION TO SWITCH ITEMS
        if (button.id.includes('next')){
            console.log('+1 to base');
            character.base++;
            //MAKING SURE INDEX DOES NOT PASS THE ARRAY LENGTH
            character.base === itemList.length ? character.base = 0 : character.base = character.base;
            console.log(character.base);
        }
        else {
            character.base--;
            //MAKING SURE INDEX DOES NOT PASS THE ARRAY LENGTH
            character.base === -1 ? character.base = itemList.length - 1 : character.base = character.base;
        }
    }
    //FOR HEADS
    if (button.id.includes('hair')){
        //  AUTOMATICALLY SETTING TO CHANGE THE COLOR OF THE CHANGED ITEM
        colorItem = document.getElementById('hair-color');
        console.log(colorItem);
        colorItem.checked = true;
        itemTypetoColor(colorItem);

        document.getElementById('hair-color').checked = true;
        console.log('Pressed Hair');
        itemTypeIndex = itemType.indexOf('hair');
        itemList = allHairs;
            // CHECKING DIRECTION TO SWITCH ITEMS
        if (button.id.includes('next')){
            console.log('+1 to Hair');
            character.hair++;
            //MAKING SURE INDEX DOES NOT PASS THE ARRAY LENGTH
            character.hair === itemList.length ? character.hair = 0 : character.hair = character.hair;
            console.log(character.hair);
        }
        else {
            character.hair--;
            //MAKING SURE INDEX DOES NOT PASS THE ARRAY LENGTH
            character.hair === -1 ? character.hair = itemList.length - 1 : character.hair = character.hair;
        }
    
    //FOR TOPS
    }
    if (button.id.includes('top')){
        //  AUTOMATICALLY SETTING TO CHANGE THE COLOR OF THE CHANGED ITEM
        colorItem = document.getElementById('top-color');
        console.log(colorItem);
        colorItem.checked = true;
        itemTypetoColor(colorItem);

        document.getElementById('top-color').checked = true;
        itemTypeIndex = itemType.indexOf('top');
        itemList = allTops;
        // CHECKING DIRECTION TO SWITCH ITEMS
        if (button.id.includes('next')){
            character.top++;
            //MAKING SURE INDEX DOES NOT PASS THE ARRAY LENGTH
            character.top === itemList.length ? character.top = 0 : character.top = character.top;
        }
        else {
            character.top--;
            //MAKING SURE INDEX DOES NOT PASS THE ARRAY LENGTH
            character.top === -1 ? character.top = itemList.length - 1 : character.top = character.top;
        }
    }

    //FOR BOTTOMS
    if (button.id.includes('bottom')){
        //  AUTOMATICALLY SETTING TO CHANGE THE COLOR OF THE CHANGED ITEM
        colorItem = document.getElementById('bottom-color');
        console.log(colorItem);
        colorItem.checked = true;
        itemTypetoColor(colorItem);

        itemTypeIndex = itemType.indexOf('bottom');
        itemList = allBottoms;
        // CHECKING DIRECTION TO SWITCH ITEMS
        if (button.id.includes('next')){
            character.bottom++;
            //MAKING SURE INDEX DOES NOT PASS THE ARRAY LENGTH
            character.bottom === itemList.length ? character.bottom = 0 : character.bottom = character.bottom;
        }
        else {
            character.bottom--;
            //MAKING SURE INDEX DOES NOT PASS THE ARRAY LENGTH
            character.bottom === -1 ? character.bottom = itemList.length - 1 : character.bottom = character.bottom;
        }
    }

    //FOR SHOES
    if (button.id.includes('shoe')){
        //  AUTOMATICALLY SETTING TO CHANGE THE COLOR OF THE CHANGED ITEM
        colorItem = document.getElementById('shoes-color');
        console.log(colorItem);
        colorItem.checked = true;
        itemTypetoColor(colorItem);

        itemTypeIndex = itemType.indexOf('shoes');
        itemList = allShoes;
        // CHECKING DIRECTION TO SWITCH ITEMS
        if (button.id.includes('next')){
            character.shoes++;
            //MAKING SURE INDEX DOES NOT PASS THE ARRAY LENGTH
            character.shoes === itemList.length ? character.shoes = 0 : character.shoes = character.shoes;
        }
        else {
            character.shoes--;
            //MAKING SURE INDEX DOES NOT PASS THE ARRAY LENGTH
            character.shoes === -1 ? character.shoes = itemList.length - 1 : character.shoes = character.shoes;
        }
    }

    const charaItem = itemType[itemTypeIndex];
    console.log(charaItem);
    // USING ALL VARIABLES TO SET THE IMAGE OF THE CHARACTER (yes it's a mouthful this line here)
    document.getElementById(charaItem).style.background = url + charaItem + '/' + itemList[character[charaItem]] + '.png)';
    console.table(character);
}

// SO I ENDED UP DOING THE ABOVE SECOND METHOD TO MAKE IT CLEANER AND EASIER TO READ AND ALSO GET RID OF BUG FROM FIRST ONE ... BUT HONESTLY I THINK IT TURNED OUT MROE COMPLICATED LMAO
// I GUESS THE ABOVE METHOD HAPPENS WHEN YOU TAKE ON THE CHALLENGE OF MAKING ONE FUNCTION WORK FOR ALL THE BUTTONS INSTEAD OF SEPARATING THEM (I was trying to not repeat code on a bunch of different functions)
// I'm not sure what's better ... one big function for all buttons(almost) or a seperate function for each button ? I guess it would depend on scalability factor ? I mostly did one big function for all as they do the
// save for the gender button. I would definitely do a different function for other buttons

// Added a way to change the hue and breightness but when changing them together on same object it only changes the original color ... have to build a way to hold both values together on the character