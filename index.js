 //  event 1of3 //
 document.addEventListener("DOMContentLoaded", () => 
        alert("Welcome To My Website :)")
);
// event 1of3 //

fetch('https://anime-facts-rest-api.herokuapp.com/api/v1').then(res => res.json()).then(data => getttingAnimeDate(data))

function getttingAnimeDate (animeInformation) {
    const dragonBall = animeInformation.data[2];
    const demonSlayerData = animeInformation.data[9];
    const aotData = animeInformation.data[10];
    const hxhData = animeInformation.data[11];

// my header //
renderHeader()
function renderHeader(){
    document.querySelector('h1').textContent = 'My Favorite Anime of All Time!'}
// my header //
            //  My forEach if i were using all my data, but some of the data is broken so i dont know how to do a forEach for just some data //


            // animeInformation.data.forEach(animeNamesInDom)

            // function animeNamesInDom (allNames){
            //     const whereAnimeNamesWillAppend = document.querySelector('span')
            //     whereAnimeNamesWillAppend.innerHTML = ''
            //     const liForAnimeNames = document.createElement('li')
            //     liForAnimeNames.textContent = allNames.anime_name
            //     console.log(liForAnimeNames),
            //     whereAnimeNamesWillAppend.append(liForAnimeNames)
            

   // getting anime images on the DOM //

   const replacingFirstImage = document.querySelectorAll("img")[0]
   replacingFirstImage.src = dragonBall.anime_img
   

   const replacingSecondImage = document.querySelectorAll("img")[1]
   replacingSecondImage.src = demonSlayerData.anime_img
  

   const replacingThirdImage = document.querySelectorAll("img")[2]
   replacingThirdImage.src = aotData.anime_img
   

   const replacingFourthImage = document.querySelectorAll("img")[3]
   replacingFourthImage.src = hxhData.anime_img
   


   let btn = document.querySelector('#btn');
//event 2of2 //
btn.addEventListener('click',(event) => {
    console.log('I\'ve Been Clicked!');
});
//event 2of2



// event 3of3 //
let getHearts = document.querySelectorAll('.likeu1') //get all elements

getHearts.forEach(function(span) {
  span.addEventListener('click', function(e) {
    if (e.target.style.color == 'red') {
      e.target.style.color = 'grey';
    } else {
      e.target.style.color = 'red';
    }
  });
})
// event 3of3 // 


}

//     replacingFirstImage.append(gettingDBZImg)

//     const replacingSecondImage = document.querySelector('.box2')
//    replacingSecondImage.innerHTML = ''
//    const gettingDemonSlayerImg = document.createElement('img')
//     gettingDemonSlayerImg.src = demonSlayerData.anime_img
//     replacingSecondImage.append(gettingDemonSlayerImg)

//     const replacingThirdImage = document.querySelector('.box')
//    replacingThirdImage.innerHTML = ''
//    const gettingTitanImg = document.createElement('img')
//     gettingTitanImg.src = aotData.anime_img
//     replacingThirdImage.append(gettingTitanImg)

//     const replacingFourthImage = document.querySelector('.box')
//    replacingFourthImage.innerHTML = ''
//    const gettingHunterImg = document.createElement('img')
//     gettingHunterImg.src = hxhData.anime_img
//     replacingFourthImage.append(gettingHunterImg)





//     const dragonBall = animeInformation.data[2];
//     const myHeroData = animeInformation.data[12];
//     const narutoData = animeInformation.data[5];
//     const demonSlayerData = animeInformation.data[9];
//     const aotData = animeInformation.data[10];
//     const hxhData = animeInformation.data[11];

// // getting animeNames on the DOM //
//     const ulForAnimeNames = document.querySelector('ul')

//     const liForDBZ = document.createElement('li')
//     liForDBZ.textContent = dragonBall.anime_name

//     const liForMyHero = document.createElement('li')
//     liForMyHero.textContent = myHeroData.anime_name

//     const liForNaruto = document.createElement('li')
//     liForNaruto.textContent = narutoData.anime_name

//     const liForDSlayer = document.createElement('li')
//     liForDSlayer.textContent = demonSlayerData.anime_name

//     const liForAOT = document.createElement('li')
//     liForAOT.textContent = aotData.anime_name

//     const liForHxH = document.createElement('li')
//     liForHxH.textContent = hxhData.anime_name

//     ulForAnimeNames.append(liForDBZ, liForMyHero, liForNaruto, liForDSlayer, liForAOT, liForHxH)

// // getting animeNames on the DOM //

// //getting images on the DOM // 

// const imageForDBZ = document.createElement('img')
// imageForDBZ.src = dragonBall.anime_img
// liForDBZ.append(imageForDBZ)

// const imageForMyHero =document.createElement('img')
// imageForMyHero.src = myHeroData.anime_img

// const imageForNaruto =document.createElement('img')
// imageForNaruto.src =narutoData.anime_img
// liForNaruto.append(imageForNaruto)

// const imageForDSlayer =document.createElement('img')
// imageForDSlayer.src =demonSlayerData.anime_img
// liForDSlayer.append(imageForDSlayer)

// const imageForAOT =document.createElement('img')
// imageForAOT.src =aotData.anime_img
// liForAOT.append(imageForAOT)

// const imageForHxH =document.createElement('img')
// imageForHxH.src =hxhData.anime_img
// liForHxH.append(imageForHxH)




     


// }