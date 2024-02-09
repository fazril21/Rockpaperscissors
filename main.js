const paper = document.getElementById('paper')
const rock = document.getElementById('rock')
const scissors = document.getElementById('scissors')


function getComputerChoise(){
    const random = Math.random()
    if(random < 0.34) return 'batu';
    if(random >= 0.34 && random < 0.67 ) return 'gunting';
    return 'kertas';
}

function playRound(playerSelection, computerSelection){
    if (playerSelection == computerSelection) return 'HASIL DRAW';
    if (playerSelection == 'batu') return (computerSelection == 'gunting') ? 'Menang' : 
        'Kalah';
    if (playerSelection == 'gunting') return (computerSelection == 'batu') ? 'Kalah' : 
        'Menang';
    if (playerSelection == 'kertas') return (computerSelection == 'gunting') ? 'Kalah' : 
        'Menang';

}

let scoreComp = document.getElementById('scoreComp');
let scorePlayer = document.getElementById('scorePlayer')

let skorPlayer = 0;
let skorComputer = 0;


function playGame(pilihanSaya){
    const computer = getComputerChoise()
    
    const hasil = playRound (pilihanSaya,computer)
    const hasilNya = document.querySelector('.hasilNya')

    if(skorComputer == 3 || skorPlayer ==3) return;

    if(hasil == 'Menang') {
        skorPlayer += 1
        scorePlayer.textContent = skorPlayer
    }else if (hasil == 'Kalah'){
        skorComputer += 1
        scoreComp.textContent = skorComputer
    }else{}

    const finalResult = document.querySelector('.finalResult')
    if(skorComputer == 3)return finalResult.textContent = 'COMPUTER MENANG !!!!'
    if(skorPlayer == 3) return finalResult.textContent = 'SAYA MENANG !!!!'



    hasilNya.innerHTML = hasil

    const result = document.querySelector('.result')
    if(computer == 'batu') return result.src = 'img/rock.png'
    if(computer == 'kertas') return result.src = 'img/paper.png'
    if(computer == 'gunting') return result.src = 'img/scissors.png'



}

const pilihan = document.querySelectorAll('img')
pilihan.forEach(function(img){
    img.addEventListener('click',function(){
        const player = img.id
        playGame(player)
        
    })
})























