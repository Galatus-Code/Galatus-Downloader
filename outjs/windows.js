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
const readlineSync = __importStar(require("readline-sync"));
class Window {
    constructor(ytdl) {
        this.youtubeDownloader = ytdl;
        ;
    }
    run() {
        this.primaryWindown();
    }
    ;
    primaryWindown() {
        //console.clear();
        let opt = readlineSync.question(`
        |=======================|
        | 1. Baixar video(s).   |
        |=======================|
        | 2. Inserir outra url. |
        |=======================|
        | 3. Mostrar lista.     |
        |=======================| 
        `);
        this.choosingOption(opt);
    }
    ;
    async interateUrlArrayWindown() {
        let url = readlineSync.question("Insira url: ");
        await this.youtubeDownloader.setUrlArray(url);
        this.primaryWindown();
    }
    ;
    choosingOption(opt) {
        console.clear();
        let ytdl = this.youtubeDownloader;
        switch (opt) {
            case "1":
                ytdl.downloadVideo();
                break;
            case "2":
                this.interateUrlArrayWindown();
                break;
            case "3":
                console.log(ytdl.getVideoNameArray());
                let opt2 = readlineSync.question("Pressione 'enter' para continuar!");
                this.primaryWindown();
                break;
            default:
                let opt3 = readlineSync.question(`Selecione uma opcao valida! \nPressione 'enter' para continuar!`);
                this.primaryWindown();
                break;
        }
    }
    ;
}
exports.default = Window;
