//hacker's terminal




/*
let box1=document.querySelector(".box1");
let box2=document.querySelector(".box2");
let box3=document.querySelector(".box3");
let box4=document.querySelector(".box4");
let box5=document.querySelector(".box5");

box1.classList.add('hide');
box2.classList.add('hide');
box3.classList.add('hide');
box4.classList.add('hide');
box5.classList.add('hide');

function getData(boxElement) {
    return new Promise((resolve) => {
        setTimeout(() => {
            boxElement.classList.remove("hide");
            resolve();
        },1000);
    });
}
let t;
async function startDotAnimation() {


    t= setInterval(() => {
        let last = document.body.getElementsByTagName("div");
        last = last[last.length - 1]
        if(last.innerHTML.endsWith("...")){
            last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length-3)
        }
        else {
            last.innerHTML = last.innerHTML + "."
        }
    }, 100);
     
}

function stopDotAnimation() {
    clearInterval(t);
}
   
    

async function getAllData () {

    startDotAnimation();
    await getData(box1);
    await getData(box2);
    await getData(box3);
    await getData(box4);
    await getData(box5);
    stopDotAnimation();

}

getAllData();

*/

const addItem = async (item) => {
    await randomDelay();
    let div = document.createElement("div");
    div.innerHTML = item;
    document.body.append(div)
}

const randomDelay = () => {
    return new Promise((resolve, reject) => {
            timeout = 1 + 6 * Math.random();
            setTimeout(() => {
                resolve()
            }, timeout * 500);
        })
    }


async function main() {

    let t= setInterval(() => {
        let last = document.body.getElementsByTagName("div");
        last = last[last.length - 1]
        if(last.innerHTML.endsWith("...")){
            last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length-3)
        }
        else {
            last.innerHTML = last.innerHTML + "."
        }
    }, 100);

    let text = ["Initialized Hacking now reading your data",
        "Reading your Files",
        "Password files detected",
        "Sending all passwords and personal files to the server",
        "Cleaning up"
    ]

    for(const item of text) {
        await addItem(item)
    }

    await randomDelay()
    clearInterval(t)

}

main();
