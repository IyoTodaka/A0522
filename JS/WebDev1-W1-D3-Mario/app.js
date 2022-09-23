function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();

	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
	);
}

//スコア表示
// const bodyTag = document.querySelector("body");
// const tag = document.querySelector("h1");
// var cScore = 0;
// tag.textContent =`Score: ${cScore}`;


const init = () => {
    //get the avatar
    //get the coin

    moveCoin();
    window.addEventListener('keyup', function(e){
        if(e.key === 'ArrowDown' || e.key === 'Down'){
            moveVertical(avatar, 50);
        }
        else if(e.key === 'ArrowUp' || e.key === 'Up'){
            moveVertical(avatar, -50);
        }
        else if(e.key === 'ArrowLeft' || e.key === 'Left'){
          
            moveVertical2(avatar, -50);
        }
        else if(e.key === 'ArrowRight' || e.key === 'Right'){
            moveVertical2(avatar, 50);
        }


        if(isTouching(avatar,coin)) moveCoin();
    });
}

//上下動作
const moveVertical = (element, amount) => {
    const currTop = extractPos(element.style.top);
    element.style.top = `${currTop + amount}px`;
}

//左右動作
const moveVertical2 = (element, amount) => {
    
    const currTop1 = extractPos(element.style.left);
    element.style.left = `${currTop1 + amount}px`;

    //アバター反転
    if(amount == 50){
        this.avatar.style.transform = "scale(1, 1)";
    }else{
        this.avatar.style.transform = "scale(-1, 1)";
    }
}

const extractPos = (position) => {
    if(!position) return 100;
    return parseInt(position.slice(0, -2))
}

const moveCoin = () => {
    const x = Math.floor(Math.random() * window.innerWidth)
    const y = Math.floor(Math.random() * window.innerHeight)
    coin.style.top = `${x}px`;
    coin.style.left= `${y}px`;
}

init();