const character = {
    gender: 1,
    head:   1,
    top:    1,
    bottom: 1,
    feet:   1
};

const allGenders = ['female', 'male'];
const allHeads = ['head_01', 'head_02', 'head_03'];
const allTops = ['top_01', 'top_02', 'top_03'];
const allBottoms = ['bottom_01', 'bottom_02', 'bottom_03'];
const allFeet = ['feet_01', 'feet_02', 'feet_03'];

const itemCat = [allGenders, allHeads, allTops, allBottoms, allFeet];

//Passing the button id through function to grab correct item
const itemSelector = (button) => {
    const buttonType = button.id;
    //Determining whether going up in array of items or down
    let isPosDir = buttonType.includes('next') ? true : false;
    console.log(buttonType);

    //Determining which item type to be changing
    if (buttonType.includes('head')) {
        let url = '../img/head/head_';
        setItem('head', character.head, isPosDir, url);
    }
    if (buttonType.includes('top')) {
        let url = '../img/top/top_';
        setItem('top', character.top, isPosDir, url);
    }
    if (buttonType.includes('bottom')) {
        let url = '../img/bottom/bottom_';
        setItem('bottom', character.bottom, isPosDir, url);
    }
    if (buttonType.includes('feet')) {
        let url = '../img/feet/feet_';
        setItem('feet', character.feet, isPosDir, url);
    }
}

const setItem = (itemType, itemIndex, isPosDir, url) => {
    isPosDir ? itemIndex++ : itemIndex--;
    character[itemType] = itemIndex;
    itemString = 'url(' + `${url}${itemIndex}.png)`;
    document.getElementById(itemType).style.background = itemString;
    console.table(itemType, itemIndex, itemString);
}