export class Podcast {
    public episodes: PodcastEpisode[];
}

export class PodcastEpisode {
    public title: string;
    public url: string;
    public playing?: boolean = false;
    public loaded?: boolean = false;

    constructor(title?: string, url?: string) {
        this.title = title;
        this.url = url;
    }

}
