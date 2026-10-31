document.addEventListener('DOMContentLoaded', (event) => {
    const imageContainer1 = document.getElementById('interact-img1n');
    const imageContainer2 = document.getElementById('interact-img2n');
    const imageContainer3 = document.getElementById('interact-img3n');
    const imageContainer4 = document.getElementById('interact-img4n');
    const imageElement1 = imageContainer1.querySelector('.clickable-image');
    const imageElement2 = imageContainer2.querySelector('.clickable-image2');
    const imageElement3 = imageContainer3.querySelector('.clickable-image3');
    const imageElement4 = imageContainer4.querySelector('.img-1');
    const audioPlayer1 = document.getElementById('sound1');
    const audioPlayer2 = document.getElementById('sound2');
    const audioPlayer3 = document.getElementById('sound3');
    const audioPlayer4 = document.getElementById('sound4');

    //const altimage1 = "../assets/Famu Meow 5_3 (2).png";
    //const altimage2 = "../assets/Famu Meow 4_2.png";
    //const originalImage1 = "../assets/Famu Meow 5_3 (2).png";
    //const originalImage2 = "../assets/Famu Meow 4_2.png";

    let clickCount = 0;
    const targetClick = 20;

    function handleClick1() {
        audioPlayer1.currentTime = 0;
        audioPlayer1.play();

        imageElement1.classList.add('bounce');

        imageElement1.addEventListener('animationend', function handler(e) {
            imageElement1.classList.remove('bounce');
            e.currentTarget.removeEventListener(e.type, handler);
        }, { once: true });
        handleCardClick();
    }

    function handleClick2() {
        audioPlayer2.currentTime = 0;
        audioPlayer2.play();

        imageElement2.classList.add('bounce2');

        imageElement2.addEventListener('animationend', function handler(e) {
            imageElement2.classList.remove('bounce2');
            e.currentTarget.removeEventListener(e.type, handler);
        }, { once: true });
        handleCardClick();
    }

    function handleClick3() {
        audioPlayer3.currentTime = 0;
        audioPlayer3.play();
        imageElement3.classList.add('bounce3');

        imageElement3.addEventListener('animationend', function handler(e) {
            imageElement3.classList.remove('bounce3');
            e.currentTarget.removeEventListener(e.type, handler);
        }, { once: true });
    }

    //------
    function handleCardClick() {
        clickCount++;
        console.log("clickCount:" + clickCount);
        if (clickCount >= targetClick) {
            setTimeout(() => {
                window.location.href = "https://youtu.be/Crs3aiifXVw?si=71M0mRzzFYFvZcuQ";
            
            }, 20);
        }
    }
    
    //------

    function handleClick4() {
        audioPlayer4.currentTime = 0;
        audioPlayer4.play();
        imageElement4.classList.add('bounce4');

        imageElement4.addEventListener('animationend', function handler(e) {
            imageElement4.classList.remove('bounce4');
            e.currentTarget.removeEventListener(e.type, handler);
        }, { once: true });
    }
    
    imageContainer1.addEventListener('click', handleClick1);
    imageContainer2.addEventListener('click', handleClick2);
    imageContainer3.addEventListener('click', handleClick3);
    imageContainer4.addEventListener('click', handleClick4);
    
});
