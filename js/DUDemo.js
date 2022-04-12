//LOGIC METHOD 1

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



//LOGIC METHOD 2 ATTEMPTED WITH ARRAYS

// ALL ITEMS IN EACH ITEM TYPE
const allGenders = ['female', 'male'];
const allHeads = ['head_1', 'head_2', 'head_3'];
const allTops = ['top_1', 'top_2', 'top_3'];
const allBottoms = ['bottom_1', 'bottom_2', 'bottom_3'];
const allFeet = ['feet_1', 'feet_2', 'feet_3'];

// VARIABLE TO RESPRESENT ITEM IN ARRAY THAT IS SELECTED
let currentItem = 0;

const itemSelector = (button) => {

    // SETTING UP THE VARIABLES TO USE LATER
    const url = 'url(../img/';
    let itemType;
    let itemList;

    // SELECTING WHICH TYPE OF ITEM NEEDS TO BE CHANGED
    if (button.id.includes('head')){
        itemType = 'head';
        itemList = allHeads;
    }
    if (button.id.includes('top')){
        itemType = 'top';
        itemList = allTops;
    }
    if (button.id.includes('bottom')){
        itemType = 'bottom';
        itemList = allBottoms;
    }
    if (button.id.includes('feet')){
        itemType = 'feet';
        itemList = allFeet;
    }

    // CHECKING DIRECTION TO SWITCH ITEMS
    if (button.id.includes('next')){
        currentItem++;
        //MAKING SURE INDEX DOES NOT PASS THE ARRAY LENGTH
        currentItem === itemList.length ? currentItem = 0 : currentItem = currentItem;
    }
    if (button.id.includes('prev')){
        currentItem--;
        //MAKING SURE INDEX DOES NOT PASS THE ARRAY LENGTH
        currentItem === -1 ? currentItem = itemList.length - 1 : currentItem = currentItem;
    }
    document.getElementById(itemType).style.background = url + itemType + '/' + itemList[currentItem] + '.png)';
}
