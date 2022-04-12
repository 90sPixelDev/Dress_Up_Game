const characters = [{
    name:   'Nangfah',
    gender: 'Female',
    age:    5,
    rank:   'A+'
},
{
    name:   'Menelik',
    gender: 'Male',
    age:    5, 
    rank:   'A+'
},
{
    name:   'Joha',
    gender: 'Male',
    age:    7,
    rank:   'B'
},
{
    name:   'Kira',
    gender: 'Female',
    age:    4,
    rank:   'C'
},
{
    name:   'Tozan',
    gender: 'Male',
    age:    6,
    rank:   'B+'
},
{
    name:   'Filia',
    gender: 'Female',
    age:    8,
    rank:   'A'
}]

const yToOCharas = characters.sort((a, b) => a.age - b.age)

const descRank = characters.sort((a, b) => {
    if (a.rank < b.rank) return -1;
    if (a.rank > b.rank) return 1;
    return 0;
})

const ascRank = characters.sort((a, b) => {
  if (b.rank < a.rank) return -1;
  if (b.rank >a.rank) return 1;
  return 0;  
})

const charaGenderCount = characters.reduce((groupedGender, chara) => {
    const charaGen = chara.gender;
    if (!groupedGender[charaGen]) groupedGender[charaGen] = [];
    groupedGender[charaGen].push(chara)
    return groupedGender;
}, {})

const charaAgeCount = characters.reduce((groupedAge, chara) => {
    const charaAge = chara.age;
    if (!groupedAge[charaAge]) groupedAge[charaAge] = [];
    groupedAge[charaAge].push(chara)
    return groupedAge;
}, {})

