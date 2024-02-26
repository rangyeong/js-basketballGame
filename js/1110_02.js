// ui 수집하기
let tagPointCom = document.querySelector('.comScore');
let tagPointUser = document.querySelector('.userScore');
let tagMsg = document.querySelector('.msg');
let tagShootLeft = document.querySelector('.shotLeft');

let btnCom = document.querySelector('.comBtn');
let btnUser = document.querySelectorAll('.userBtn');

let pointCom = 0;
let pointUser = 0;
let isComTurn = true;
let shootLeft = 15;

// 컴퓨터 슛 버튼 누르기
btnCom.onclick = comShoot;

// 사용자 슛 버튼 누르기
for(let j = 0; j < btnUser.length; j++){
    btnUser[j].onclick = function(){
        userShoot(j+2);
    }
};

// 컴퓨터 슛하기 버튼을 클릭하면 실행 할 함수 선언하기
function comShoot(){
    // 컴퓨터 차례가 아니면 명령 넘어가기.
    if(!isComTurn) return;   

    // 버튼 상태 교환하기
    btnCom.disabled = true;

    for(let i = 0; i < btnUser.length; i++){
        btnUser[i].disabled = false;
    }

    // 컴퓨터 슛 종류 설정하기 
    /*
        let shootType;
        let rdn = Math.random();
        if(rdn < 0.5){
            shootType = 2;
        } else {
            shootType = 3;
        }
    */
    /*
        let shootType;
        if(Math.random() < 0.5){
            shootType = 2;
        } else {
            shootType = 3;
        }
    */
    let shootType = Math.random() < 0.5 ? 2 : 3;
    
    // 컴퓨터 슛 종류에따라 성공 실패 결정.
    if(shootType == 2){
        // 2점 슛의 성공과 실패를 설정. => 랜덤 수 생성해서 결정
        // 2점 슛의 성공확률을 50%로 설정.
        if(Math.random() < 0.5){
            tagMsg.innerHTML = '컴퓨터가 2점 슛을 성공했습니다!';
            // 컴퓨터 슛 점수 갱신
            pointCom += shootType;
            // 컴퓨터 슛 점수 화면에 출력하기 
            tagPointCom.innerHTML = pointCom;
        } else {
            tagMsg.innerHTML = '컴퓨터가 2점 슛을 실패했습니다!';
        }
    } else {
        // 3점 슛의 성공과 실패를 설정. => 랜덤 수 생성해서 결정
        // 3점 슛의 성공확률을 30%로 설정.
        if(Math.random() < 0.3){
            tagMsg.innerHTML = '컴퓨터가 3점 슛을 성공했습니다!';
            // 컴퓨터 슛 점수 갱신
            pointCom += shootType;
            // 컴퓨터 슛 점수 화면에 출력하기 
            tagPointCom.innerHTML = pointCom;
        } else {
            tagMsg.innerHTML = '컴퓨터가 3점 슛을 실패했습니다!';
        }
    }

    // 컴퓨터 차례가 끝났음을 표시하기.
    isComTurn = false;
} // comShoot() 마지막

// 사용자 슛
function userShoot(type){
    if(isComTurn) return;

    btnCom.disabled = false;
    for(let i = 0; i < btnUser.length; i++){
        btnUser[i].disabled = true;
    }    

    if(type == 2){
        if(Math.random() < 0.5){
            tagMsg.innerHTML = '2점 슛을 성공했습니다!';
            pointUser += 2;
            tagPointUser.innerHTML = pointUser;
        } else {
            tagMsg.innerHTML = '2점 슛을 실패했습니다!';
        }
    } else {
        if(Math.random() < 0.3){
            tagMsg.innerHTML = '3점 슛을 성공했습니다!';
            pointUser += 3;
            tagPointUser.innerHTML = pointUser;
        } else {
            tagMsg.innerHTML = '3점 슛을 실패했습니다!';
        }
    }

    isComTurn = true;

    shootLeft--;
    tagShootLeft.innerHTML = shootLeft;

    if(shootLeft == 0){
        if(pointCom > pointUser){
            tagMsg.innerHTML = '졌습니다.'
        } else if(pointCom < pointUser){
            tagMsg.innerHTML = '이겼습니다.'
        } else {
            tagMsg.innerHTML = '비겼습니다.'
        }
        btnCom.disabled = true;
    }
} // userShoot() 마지막