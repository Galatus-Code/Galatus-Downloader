import Window from './windows';
import YoutubeDonwloader from './youtube-downloader';

let ytdl = new YoutubeDonwloader();
let window = new Window(ytdl);
window.run();