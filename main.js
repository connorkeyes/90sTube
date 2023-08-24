class Snail {
    constructor(el) {
        this.node = document.createElement('img');
        this.node.setAttribute('src', 'https://img.freepik.com/premium-vector/vector-cute-snail-black-white-coloring_75487-1585.jpg?w=2000');
        this.node.setAttribute('id', 'snail');
        this.node.style.zIndex = 10000;
        this.node.style.borderRadius = '5px';
        // this.speed = 500;
        this.node.style.height = '50px';
        this.node.style.width = '50px';  
        this.node.style.top = '0px';
        this.node.style.left = '0px';
        // this.node.style.color = 'pink';

        el.appendChild(this.node);
        // console.log(this);
    }
    
    // move() {

    //     let leftPosition = 0;
    //     console.log('aaaaaaaaaaaaaaAAAAAAAAAAAAAAA')
    //     // console.log(leftPosition + 100);
        
        
    //     leftPosition += 200000;
    //     this.node.style.left = `${leftPosition}px`;
    //     console.log(leftPosition);
    //     console.log(`${leftPosition}`);
    //     console.log(`${leftPosition}px`);
    //     console.log(leftPosition); // --> 100
    //     //this.node.style.left = String(leftPosition) + 'px';
    //     //this.node.style.top = String(topPosition) + 'px';
        
    //     console.log(this.node.style.left)
    //     //setTimeout(this.move(), this.speed);
    // }
}

//const killerSnail = new Snail(body);
// const searchBar = document.querySelectorAll('#container');
// searchBar.forEach((el) => {
//     searchBar.setAttribute('style', 'border-radius:none');
// });


// const searchButton = document.querySelectorAll('#search-icon-legacy');
// searchButton.forEach((el) => {
//     searchButton.setAttribute('style', 'border-radius:none');
// });

const content = document.getElementById('content');

const start = document.getElementById('start')
const snail = new Snail(start)
console.log(snail);
// snail.move();

const ytIcon = document.querySelectorAll('yt-icon');
ytIcon.forEach((el) => {
    el.remove();
});

const everything = document.querySelectorAll


const buttons = document.querySelectorAll('#buttons');
buttons.forEach((el) => {
    el.remove();
});
const micButton = document.querySelectorAll('yt-button-shape');

const breakingNews = document.querySelectorAll('ytd-rich-shelf-renderer');
breakingNews.forEach(e => {
    e.remove();
})





const leftPanel = document.getElementById('guide-content');
const leftPanelMini = document.querySelector('ytd-mini-guide-renderer');
leftPanel.remove();
leftPanelMini.remove();
document.getElementById('guide').remove();

const head = document.getElementsByName('head');
console.log(head);

const contents = document.getElementById('contents');
console.log(contents);



const body = document.querySelector('body');
body.setAttribute('style', 'background-color:white');

const chips = document.querySelector('ytd-feed-filter-chip-bar-renderer');
chips.remove();


const divs = body.querySelectorAll('div');
divs.forEach((el) => {
    el.setAttribute('style', 'margin:0px 0px 0px 0px');
    el.setAttribute('style', 'padding:0px 0px 0px 0px');
    //console.log(el.style.margin);
});

const logo = document.getElementById('logo');


function adjustContent() {
    // select and remove annoying content
    const videoTitles = document.querySelectorAll('#video-title');
    const thumbnails = document.querySelectorAll('#thumbnail');
    const images = document.querySelectorAll('#avatar-link');
    thumbnails.forEach(el => el.remove());
    images.forEach(el => el.remove());
    videoTitles.forEach((el) => {
    // console.log('aaaaaaaaaaaaaAAAAAAAAAAAAAAA')
    if (el.textContent) el.textContent = el.textContent.toLowerCase();
    });

    // styling
    const titles = document.querySelectorAll('#video-title');
    titles.forEach(t => t.setAttribute('style', 'color:lightgrey;font-family: arial, sans-serif'))
    
}

// invoke adjust content to begin, invoke again every time mouse scroll
adjustContent();
document.addEventListener("scroll", (e) => {
    adjustContent();
})

// remove shorts
const shorts = document.querySelector('.style-scope ytd-rich-shelf-renderer');
console.log(shorts);
shorts.remove();


// remove padding in children of contents




// TODO: 
//
// change fonts
// remove lives
// change youtube logo
// remove subscription logos
// change spacing
// allow user to keep blacklist of words, remove videos with blacklisted words