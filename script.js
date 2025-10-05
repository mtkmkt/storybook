const scenes = [
  { video: 'videos/scene1.mp4', text: '93 million miles away, on the Sun… something amazing happens!', title: 'The Birth of Sunny' },
  { video: 'videos/scene2.mp4', text: 'Then, one powerful day, the Sun rumbled… Sunny got the chance of a lifetime.', title: 'The Blast Off' },
  { video: 'videos/scene3.mp4', text: 'Sunny zips past Mercury, Venus, and asteroids. Earth is coming!', title: 'Journey Through Space' },
  { video: 'videos/scene4.mp4', text: 'Ellie sees the magical auroras in the night sky.', title: "Ellie's Backyard" },
  { video: 'videos/scene5.mp4', text: 'Captain Ray floats on the ISS, watching Sunny safely pass by.', title: 'The Astronaut' },
  { video: 'videos/scene6.mp4', text: 'Farmer Rosa’s GPS glitches from solar interference.', title: "Farmer Rosa's Farm" },
  { video: 'videos/scene7.mp4', text: 'Scientists work together to keep satellites and grids safe.', title: 'Scientists in Action' },
  { video: 'videos/scene8.mp4', text: 'Sunny realizes Earth is amazing, and people are smart.', title: "Sunny's Realization" },
  { video: 'videos/scene9.mp4', text: 'Everyone enjoys the auroras. Sunny winks from space.', title: 'The Ending' },
];

let currentScene = 0;

const introScreen = document.getElementById('intro-screen');
const startBtn = document.getElementById('start-btn');
const storyContainer = document.getElementById('storybook-container');
const video = document.getElementById('scene-video');
const playBtn = document.getElementById('play-btn');
const dialogueBox = document.getElementById('dialogue-box');
const sceneTitle = document.getElementById('scene-title');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

// Start Adventure
startBtn.addEventListener('click', () => {
  introScreen.classList.add('hidden');
  storyContainer.classList.remove('hidden');
  loadScene();
});

// Play Video
playBtn.addEventListener('click', () => {
  video.play();
  video.muted = false; // enable sound
  playBtn.style.display = 'none';
});

// Navigation
nextBtn.addEventListener('click', () => {
  currentScene = Math.min(currentScene + 1, scenes.length - 1);
  loadScene();
});
prevBtn.addEventListener('click', () => {
  currentScene = Math.max(currentScene - 1, 0);
  loadScene();
});

// Load Scene
function loadScene() {
  const scene = scenes[currentScene];
  video.src = scene.video;
  video.pause();
  video.muted = true; // start muted until play
  playBtn.style.display = 'flex';
  dialogueBox.innerText = scene.text;
  sceneTitle.innerText = scene.title;
}
