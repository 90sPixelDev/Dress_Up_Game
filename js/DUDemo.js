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

const itemSelector = (button) => {
    const buttonType = button.id;
    console.log(buttonType);
    if (buttonType.includes('head')) {
        let url = '../img/head/head_';
        setItem('head', character.head, url);
    }
    if (buttonType.includes('top')) {
        let url = '../img/top/top_';
        setItem('top', character.top, url);
    }
}

const setItem = (itemType, item, url) => {
    item++;
    character[itemType] = item;
    // document.getElementById(itemType).style.background = (`${itemType}%${item}`);
    itemString = 'url(' + `${url}${item}.png)`;
    document.getElementById(itemType).style.background = itemString;
    // document.getElementById(itemType).style.background = "url('../img/head/head_02.png')";
    console.table(itemType, item, itemString);
}