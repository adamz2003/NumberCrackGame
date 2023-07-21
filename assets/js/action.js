const code = `${setting.code()}`;
const media_success = `${setting.audio_success()}`;
const media_error = `${setting.audio_error()}`;
var i = 0;
var confirm_code = ''

function inputcode(str){
    if(i == 4){
        return
    } else {
        var audio = new Audio('./assets/media/0'+str+'.mp3');
        audio.autoplay = true;
        document.getElementById('mediaGuard').appendChild(audio)
        confirm_code += str
        console.log(confirm_code)
        i ++;
        document.getElementById('code' + (i)).innerHTML="X"
    }
}

function submitaction() {
    if(i == 4){
        if(confirm_code == code){
            window.location = './success.html'
        } else {
            window.location = './error.html'
        }
    } else {
        alert("Input is not correct!")
    }
}

function errorComfirm() {
    confirm_code = "";
    window.location = './index.html'
}

function successComfirm() {
    confirm_code = "";
    window.location = './index.html'
}

window.addEventListener('keypress', function (event) {
    console.log(window.location.pathname.indexOf("index.html"))
    if(window.location.pathname.indexOf("index.html") > 0){
        if(event.key > 0 && event.key <= 9 || event.key == "Enter"){
            if(event.key > 0 && event.key <= 9){
                inputcode(event.key)
            } else {
                submitaction()
            }
        }
    }

    if(window.location.pathname.indexOf("error.html") > 0){
        if(event.key == "Enter"){
            errorComfirm()
        }
    }
    
    if(window.location.pathname.indexOf("success.html") > 0){
        if(event.key == "Enter"){
            successComfirm()
        }
    }
})