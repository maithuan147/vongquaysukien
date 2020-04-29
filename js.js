let soClick = 0;
let choquay = true;
document.getElementById('bg-quay').addEventListener('click',() =>{
    if(choquay){
        let randomViTriStop = [];
        let arrayRandom = [];
        soClick++;
        let img1 = document.getElementById('img1');
        let hieuUngVongQuay = 3240 *soClick;
        let checkbox = document.getElementById('checkbox');
        if(checkbox.checked == true){
            for(let i=0; i<10; i++){
                arrayRandom[i] = Math.floor(Math.random() * 100) + 1;
                randomViTriStop =  arrayRandom;
            }
        }else{
            randomViTriStop[0] =  Math.floor(Math.random() * 100) + 1;
        }
        let ViTriStop = Math.ceil(randomViTriStop[0]/10);
        let quayso = -ViTriStop *36 + hieuUngVongQuay + 36;
        img1.style.transform = `rotate(${quayso}deg)`;
        choquay = false;
        setTimeout(() =>{
            let randomViTriStopCeil = randomViTriStop.map((randomViTriStopString) => {
                return Math.ceil(randomViTriStopString/10); 
            });
            let quaTrung = randomViTriStopCeil.join(',');
            document.getElementById('render1').innerHTML = `Chúc mừng bạn đã trúng số ${quaTrung}`;
            choquay = true;
        },3500);
    }
})
