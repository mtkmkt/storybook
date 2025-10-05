const scenes = [
  { video: 'videos/scene1.mp4', text: '93 million miles away, on the Sun… something amazing happens!' },
  { video: 'videos/scene2.mp4', text: 'Then, one powerful day, the Sun rumbled… Sunny got the chance of a lifetime.' },
  { video: 'videos/scene3.mp4', text: 'Sunny zips past Mercury, Venus, and asteroids. Earth is coming!' },
  { video: 'videos/scene4.mp4', text: 'Ellie sees the magical auroras in the night sky.' },
  { video: 'videos/scene5.mp4', text: 'Captain Ray floats on the ISS, watching Sunny safely pass by.' },
  { video: 'videos/scene6.mp4', text: 'Farmer Rosa’s GPS glitches from solar interference.' },
  { video: 'videos/scene7.mp4', text: 'Scientists work together to keep satellites and grids safe.' },
  { video: 'videos/scene8.mp4', text: 'Sunny realizes Earth is amazing, and people are smart.' },
  { video: 'videos/scene9.mp4', text: 'Everyone enjoys the auroras. Sunny winks from space.' },
];

let currentScene = 0;
const video = document.getElementById('scene-video');
const dialogueBox = document.getElementById('dialogue-box');

document.getElementById('next-btn').addEventListener('click', () => {
  currentScene = Math.min(currentScene + 1, scenes.length - 1);
  loadScene();
});

document.getElementById('prev-btn').addEventListener('click', () => {
  currentScene = Math.max(currentScene - 1, 0);
  loadScene();
});

function loadScene() {
  video.src = scenes[currentScene].video;
  video.play();
  dialogueBox.innerText = scenes[currentScene].text;
}
