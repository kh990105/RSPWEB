let ct = 0, vt = 0, lt = 0, vper = 0;
let mrps = ['sciccors','rock','paper'];
function rps(e) {
    let str;
    let d = Math.ceil(Math.random()*3);
    let mimg = mrps[e-1]

    switch(e) {
        case 1:  //가위
            if(d == 1) {
                str = "비겼습니다.";
            }else if(d == 2) {
                str = "졌습니다.";
                ct++;
                lt++;
            }else{
                str = "이겼습니다.";
                ct++;
                vt++;
            }
        break;
        case 2: //바위
            if(d == 1) {
                str = "이겼습니다.";
                ct++;
                vt++;
            }else if(d == 2) {
                str = "비겼습니다.";
            }else{
                str = "졌습니다.";
                ct++;
                lt++;
            }
        break;
        case 3://보
            if(d == 1) {
                str = "졌습니다.";
                ct++;
                lt++;
            }else if(d == 2) {
                str = "이겼습니다.";
                ct++;
                vt++;
            }else{
                str = "비겼습니다.";
            }

        break;
    }
    if(ct != 0) {
        vper = (vt / ct) * 100;
        vper = vper.toFixed(2);
    }
    console.log(d)
    console.log(mrps[d-1])
    document.getElementById("tk").innerHTML = str;
    document.getElementById('mimg').src = "img/"+mimg+'.png';
    document.getElementById('comh').src = "img/"+ mrps[d-1] +'.png';
    document.getElementById('ct').innerHTML = ct+ '회';
    document.getElementById('vt').innerHTML = vt+ '회';
    document.getElementById('lt').innerHTML = lt+ '회';
    document.getElementById('vper').innerHTML = "승률"+ vper + "%";

    if(vt + lt == 5){
        if(vt>lt){
            document.getElementById('result').innerHTML = "최종결과 : 승리";
        }else{
            document.getElementById('result').innerHTML = "최종결과 : 패배";
        }
        document.getElementById("r").disabled = true;
        document.getElementById("s").disabled = true;
        document.getElementById("p").disabled = true;
        document.getElementById("reset").innerHTML = "<button class='reset' onclick='reset()'>다시도전</button>";
    }
}
function reset(){
    ct = 0, vt = 0, lt = 0, vper = 0;
    document.getElementById("ct").innerHTML = "";
    document.getElementById("vt").innerHTML = "";
    document.getElementById("lt").innerHTML = "";
    document.getElementById("vper").innerHTML = "";
    document.getElementById("tk").innerHTML = "";
    document.getElementById("r").disabled = false;  
    document.getElementById("s").disabled = false; 
    document.getElementById("p").disabled = false;
    document.getElementById("reset").innerHTML = "";
    document.getElementById('result').innerHTML = "";
 }