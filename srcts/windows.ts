import YoutubeDonwloader from "./youtube-downloader";
import * as readlineSync from 'readline-sync';

export default class Window {
    private youtubeDownloader: YoutubeDonwloader;

    constructor(ytdl: YoutubeDonwloader) {
        this.youtubeDownloader = ytdl;
    ;}

    public run() {
        this.primaryWindown();
    };
2
    public primaryWindown() {
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
    };

    public async interateUrlArrayWindown() {
        let url = readlineSync.question("Insira url: ");
        await this.youtubeDownloader.setUrlArray(url);

        this.primaryWindown();
    };

    public choosingOption(opt) {
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
    };
}
