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

const character = {
    gender: 'female',
    head:   0,
    top:    0,
    bottom: 0,
    feet:   0
}

// ALL ITEMS IN EACH ITEM TYPE
const allGenders = ['female', 'male'];
const allHeads = ['head_1', 'head_2', 'head_3'];
const allTops = ['top_1', 'top_2', 'top_3'];
const allBottoms = ['bottom_1', 'bottom_2', 'bottom_3'];
const allFeet = ['feet_1', 'feet_2', 'feet_3'];

const itemType = ['head', 'top', 'bottom', 'feet'];

// VARIABLE TO RESPRESENT ITEM IN ARRAY THAT IS SELECTED
let currentItem = 0;

const itemSelector = (button) => {

    // SETTING UP THE VARIABLES TO USE LATER
    const url = 'url(../img/';
    let itemList;
    //THIS IS TO HAVE A SEPERATE INDEX FOR EACH ITEM TYPE CHANGE TO PREVENT BUG FROM LOGIC METHOD 1
    let itemTypeIndex;

    // SELECTING WHICH TYPE OF ITEM NEEDS TO BE CHANGED
    //FOR HEADS
    if (button.id.includes('head')){
        itemTypeIndex = itemType.indexOf('head');
        itemList = allHeads;
            // CHECKING DIRECTION TO SWITCH ITEMS
        if (button.id.includes('next')){
            character.head++;
            //MAKING SURE INDEX DOES NOT PASS THE ARRAY LENGTH
            character.head === itemList.length ? character.head = 0 : character.head = character.head;
        }
        else {
            character.head--;
            //MAKING SURE INDEX DOES NOT PASS THE ARRAY LENGTH
            character.head === -1 ? character.head = itemList.length - 1 : character.head = character.head;
        }
    
    //FOR TOPS
    }
    if (button.id.includes('top')){
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

    //FOR FEET
    if (button.id.includes('feet')){
        itemTypeIndex = itemType.indexOf('feet');
        itemList = allFeet;
        // CHECKING DIRECTION TO SWITCH ITEMS
        if (button.id.includes('next')){
            character.feet++;
            //MAKING SURE INDEX DOES NOT PASS THE ARRAY LENGTH
            character.feet === itemList.length ? character.feet = 0 : character.feet = character.feet;
        }
        else {
            character.feet--;
            //MAKING SURE INDEX DOES NOT PASS THE ARRAY LENGTH
            character.feet === -1 ? character.feet = itemList.length - 1 : character.feet = character.feet;
        }
    }

    const charaItem = itemType[itemTypeIndex];
    // USING ALL VARIABLES TO SET THE IMAGE OF THE CHARACTER (yes it's a mouthful this line here)
    document.getElementById(charaItem).style.background = url + charaItem + '/' + itemList[character[charaItem]] + '.png)';
    console.table(character);
}

const genderChange = () => {
    switch (character.gender) {
        case 'female':
            character.gender = 'male';
            break;
        case 'male':
            character.gender = 'female';
            break;
    }
    document.getElementById('chara-gender').style.background = "url('../img/gender/" + character.gender + ".png')";
    console.table(character);
}

// SO I ENDED UP DOING THE ABOVE SECOND METHOD TO MAKE IT CLEANER AND EASIER TO READ AND ALSO GET RID OF BUG FROM FIRST ONE ... BUT HONESTLY I THINK IT TURNED OUT MROE COMPLICATED LMAO
// I GUESS THE ABOVE METHOD HAPPENS WHEN YOU TAKE ON THE CHALLENGE OF MAKING ONE FUNCTION WORK FOR ALL THE BUTTONS INSTEAD OF SEPARATING THEM (I was trying to not repeat code on a bunch of different functions)
// I'm not sure what's better ... one big function for all buttons(almost) or a seperate function for each button ? I guess it would depend on scalability factor ? I mostly did one big function for all as they do the
// save for the gender button. I would definitely do a different function for other buttons