"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const windows_1 = __importDefault(require("./windows"));
const youtube_downloader_1 = __importDefault(require("./youtube-downloader"));
let ytdl = new youtube_downloader_1.default();
let window = new windows_1.default(ytdl);
window.run();
