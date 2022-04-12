const character = {
    gender: 0,
    head:   0,
    top:    0,
    bottom: 0,
    feet:   0
};

const allHeads = ['head_01', 'head_02', 'head_03']
const allTops = ['top_01', 'top_02', 'top_03']
const allBottoms = ['bottom_01', 'bottom_02', 'bottom_03']
const allFeet = ['feet_01', 'feet_02', 'feet_03']

// document.getElementById('next-head').onclick = () => {
//     console.log ('Hello!');
// }

const itemSelector = (button) => {
    const buttonType = button.id;
    // switch (buttonType){
    //     case 'gender':
    //         // setItem(itemType)
    //         break;
    //     case 'head':
    //         console.log('I got heads');
    //         setItem('head', character.head);
    //         break;
    //     case '$top':
    //         console.log('I got top');
    //         setItem('top', character.top);
    //         break;
    //     case 'bottom':
    //         console.log('I got bottom');
    //         setItem('bottom', character.bottom);
    //         break;
    //     case 'feet':
    //         console.log('I got feet');
    //         setItem('feet', character.feet);
    // }
    if (buttonType.includes('%head')) {
        console.log('I got heads');
        setItem('head', character.head);
    }
    if (buttonType.includes('%top')) {
        console.log('I got top');
        setItem('top', character.top);
    }
    console.log(buttonType);
}

const setItem = (itemType, item) => {
    item++;
    document.getElementById(itemType).style.background = (`${itemType}%${item}`);
    console.log(itemType, item)
}