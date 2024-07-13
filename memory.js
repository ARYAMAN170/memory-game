var play = document.querySelector('.playground');
var cards = document.querySelectorAll('.card-back,.card-front');
let tiles =4;
cards.forEach
(
function(card)
{
    card.addEventListener('click',
        function()
        { 
            cards.forEach(function(e)
            {
                e.classList.remove('active');
            });
           
            const par = card.parentElement;
            par.querySelector('.card-back').classList.add('active');
            par.querySelector('.card-front').classList.add('active');
            let rows = par.getAttribute(`rows`);
            let columns = par.getAttribute(`column`);
            play.style.gridTemplateRows = `repeat(${rows},1fr)`;
            play.style.gridTemplateColumns =`repeat(${columns},1fr)`;
            tiles = rows*columns;}
    );
});

const active = [];
function start()
{
    document.getElementById('container').style.display = 'none';
    play.style.display = 'grid';
    playground();
    var playc = document.querySelectorAll('.playcard-back');
  
    playc.forEach
    (
    function(card)
    {
    card.addEventListener('click',
        function()
        {   const plays = card.parentElement;
            plays.querySelector('.playcard-back').style.transform=`rotateY(180deg)`;
            plays.querySelector('.playcard-front').style.transform=`rotateY(360deg)`;
            
            active.push(plays.querySelector('.playcard-front').innerHTML);
            plays.querySelector('.playcard-back').classList.add(`act`);
            plays.querySelector('.playcard-front').classList.add(`act`);
        if (active.length==2)
        {   setTimeout(function() {
            if(active[0]==active[1])
            {

                playc.forEach
                (
                function(card)
                {      const pla = card.parentElement;
                    if (pla.querySelector('.playcard-back').classList.contains('act')) {
                        pla.querySelector('.playcard-back').classList.remove(`act`);
                        pla.querySelector('.playcard-front').classList.remove(`act`);
                        active.length=0;
                        console.log('class removed same')
                        }})
            }
            else
            {   
                
                    playc.forEach
                    (
                    function(card)
                    {      const pla = card.parentElement;
                        if (pla.querySelector('.playcard-back').classList.contains('act')) {
                            pla.querySelector('.playcard-back').style.transform = 'rotateY(0deg)';
                            pla.querySelector('.playcard-front').style.transform = 'rotateY(180deg)';
                            pla.querySelector('.playcard-back').classList.remove(`act`);
                            pla.querySelector('.playcard-front').classList.remove(`act`);
                            console.log('class removed diff')
                            }})
                
                active.length=0;
            }
        },1000 )}
        console.log(active);
    }
            
    );
})

}
function playground(rows,columns)
{
    play.innerHTML = "";
    const dailyObjects = ["key", "phone", "cow", "truck", "ghost", "hippo", "fish", "fire",];
    const mainobjects = [];
    const shuffledDailyObjects = _.shuffle(dailyObjects);
    for(i =0;i<tiles/2;i++)
    {
            mainobjects.push(shuffledDailyObjects[i]);
            mainobjects.push(shuffledDailyObjects[i]);
    };
    const final = _.shuffle(mainobjects);
    for(i =0;i<tiles;i++){
        play.innerHTML += `<div class="playcard" >
            <div class = " playcard-front"><i class="fa-solid fa-${final[i]}"></i></div>
            <div class = " playcard-back">?</div>
        </div>`;
    
    };
}