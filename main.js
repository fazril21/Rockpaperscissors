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

// function playGame(){
//     const computer = getComputerChoise()
//     const pilih = img.id

//     const hasil = playRound (pilih,computer)
    
//     console.log('Pilihan Saya : ',pilih)
//     console.log('Pilihan Komputer : ',computer)
//     console.log('Pilihan Saya : ',hasil)
// }

const pilihan = document.querySelectorAll('img')

pilihan.forEach(function(img){
    img.addEventListener('click',function(){
        const computer = getComputerChoise()
        const pilih = img.id 
        const hasil = playRound (pilih,computer)
        const hasilNya = document.querySelector('.hasilNya')

        hasilNya.innerHTML = hasil

        const result = document.querySelector('.result')

        if(computer == 'batu') return result.src = 'img/rock.png'
        if(computer == 'kertas') return result.src = 'img/paper.png'
        if(computer == 'gunting') return result.src = 'img/scissors.png'
        
    })
})














