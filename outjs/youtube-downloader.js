"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const ytdl = require("ytdl-core");
class YoutubeDonwloader {
    constructor() {
        this._urlArray = [];
        this._videoNameArray = [];
        this._path = '../downloads';
    }
    ;
    //GETTERS
    getUrlArray() {
        return this._urlArray;
    }
    ;
    getVideoNameArray() {
        return this._videoNameArray;
    }
    ;
    getPath() {
        return this._path;
    }
    ;
    //SETTERS
    async setUrlArray(url) {
        await this.setVideoNameArray(url);
        this._urlArray.push(url);
    }
    ;
    async setVideoNameArray(url) {
        await ytdl.getInfo(url).then((info) => {
            this._videoNameArray.push(info.videoDetails.title);
        });
    }
    ;
    setPath(path) {
        this._path = path;
    }
    //OTHERS
    downloadVideo() {
        this._urlArray.forEach((url, i) => {
            ytdl(url).pipe(fs.createWriteStream(`\downloads\\${this._videoNameArray[i]}.mp4`));
        });
    }
}
exports.default = YoutubeDonwloader;
