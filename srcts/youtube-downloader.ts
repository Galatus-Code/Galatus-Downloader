import * as fs from 'fs';
import ytdl = require("ytdl-core")

export default class YoutubeDonwloader {
    private _urlArray: string[];
    private _videoNameArray: string[];
    private _path: string;

    constructor() {
        this._urlArray = [];
        this._videoNameArray = []
        this._path = 'downloads';
    };

    //GETTERS
    public getUrlArray(): string[] {
        return this._urlArray;
    };
    public getVideoNameArray(): string[] {
        return this._videoNameArray;
    };
    public getPath(): string{
        return this._path;
    };

    //SETTERS
    public async setUrlArray(url:string): Promise<void> {
        await this.setVideoNameArray(url);
        this._urlArray.push(url);
    };
    public async setVideoNameArray(url: string): Promise<void>{
        await ytdl.getInfo(url).then((info) =>{
            this._videoNameArray.push(info.videoDetails.title);
        })
    };
    public setPath(path: string): void {
        this._path = path;
    }

    //OTHERS
    public downloadVideo(): void {
        this._urlArray.forEach((url, i) =>{
            ytdl(url).pipe(fs.createWriteStream(`\downloads\\${this._videoNameArray[i]}.mp4`) )});
}
}