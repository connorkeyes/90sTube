class Snail {
    constructor(el) {
        this.node = document.createElement('img');
        this.node.setAttribute('src', 'https://img.freepik.com/premium-vector/vector-cute-snail-black-white-coloring_75487-1585.jpg?w=2000');
        const coordinates = generateStartingPosition();
        this.node.style.height = '50px';
        this.node.style.width = '50px';
        this.node.style.position = 'absolute';
        this.node.style.top = `${coordinates[0]}px`;
        this.node.style.left = `${coordinates[1]}px`;
        this.node.style.zIndex = 100000;
        this.node.style.borderRadius = '6px';

        this.targetPosition = { x: 0, y: 0 };
    }

    move() {
        const leftPosition = Number(this.node.style.left.replace('px', ''));
        const topPosition = Number(this.node.style.top.replace('px', ''));

        if (leftPosition > this.targetPosition.x - 80) {
            this.node.style.left = `${leftPosition - 1}px`;
            this.node.style.transform = 'scaleX(1)';
        } else {
            this.node.style.left = `${leftPosition + 1}px`;
            this.node.style.transform = 'scaleX(-1)';
        }

        if (topPosition > this.targetPosition.y - 20) {
            this.node.style.top = `${topPosition - 1}px`;
        } else {
            this.node.style.top = `${topPosition + 1}px`;
        }
        if (Math.abs(leftPosition - (this.targetPosition.x - 80)) < 20 && Math.abs(topPosition - (this.targetPosition.y - 20)) < 20) {
            alert('snail says get back to work!');

        }
    }
}

function generateStartingPosition() {
    const startingLocations = [[-50, -50], [1000, -50], [-50, 1000], [1000, 1000]];
    const random = Math.random();
    if (random < 0.25) { return startingLocations[0] }
    else if (random < 0.5) { return startingLocations[1] }
    else if (random < 0.75) { return startingLocations[2] }
    else { return startingLocations[3] }
}

generateStartingPosition();

const icon = document.getElementById('logo-icon');
const snail = new Snail();
icon.appendChild(snail.node);

document.addEventListener('mousemove', (e) => {
    snail.targetPosition.x = e.clientX;
    snail.targetPosition.y = e.clientY;
});

// Move the snail continuously
setInterval(() => {
    snail.move();
}, 50);


const content = document.getElementById('content');


//BREAKS SNAIL
//--------------
// const ytIcon = document.querySelectorAll('yt-icon');
// ytIcon.forEach((el) => {
//     el.remove();
// });

const buttons = document.querySelectorAll('#buttons');
buttons.forEach((el) => {
    el.remove();
});

const micButton = document.querySelectorAll('yt-button-shape');

const breakingNews = document.querySelectorAll('ytd-rich-shelf-renderer');
breakingNews.forEach(e => {
    e.remove();
})

const body = document.querySelector('body');



const leftPanel = document.getElementById('guide-content');
const leftPanelMini = document.querySelector('ytd-mini-guide-renderer');
leftPanel.remove();
leftPanelMini.remove();
document.getElementById('guide').remove();

const head = document.getElementsByName('head');
console.log(head);

const contents = document.getElementById('contents');
console.log(contents);


// make background black
content.classList.add('cozy');
const topBar = document.querySelectorAll('.style-scope ytd-masthead');
topBar.forEach(e => e.classList.add('cozy'));

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

addEventListener("mousemove", (event) => {});

// remove shorts
const shorts = document.querySelector('.style-scope ytd-rich-shelf-renderer');
console.log(shorts);
shorts.remove();
