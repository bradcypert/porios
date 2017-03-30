export class Podcast {
  public active: boolean;
  public description: string;
  public feed: PodcastFeed;
  public genre: string;
  public id: number;
  public name: string;
  public releaseDate: string;

  constructor(podcast?: Podcast) {
    if (podcast) {
      this.active = podcast.active;
      this.description = podcast.description;
      this.feed = new PodcastFeed(podcast.feed);
      this.genre = podcast.genre;
      this.id = podcast.id;
      this.name = podcast.name;
      this.releaseDate = podcast.releaseDate;
    }
  }
}

export class PodcastFeed {
  public copyright: string;
  public description: string;
  public items: PodcastEpisode[];
  public logo: string;
  public title: string;
  constructor(feed?: PodcastFeed) {
    if (feed) {
      this.copyright = feed.copyright;
      this.description = feed.description;
      this.items = [];
      feed.items.map((c) => {
        this.items.push(new PodcastEpisode(c));
      });
      this.logo = feed.logo;
      this.title = feed.title;
    }
  }
}

export class PodcastEpisode {
  public description: string;
  public duration: number;
  public publishedDate: string;
  public title: string;
  public url: string;
  public playing?: boolean = false;
  public loaded?: boolean = false;

  constructor(episode?: PodcastEpisode) {
    if (episode) {
      this.description = episode.description;
      this.duration = episode.duration;
      this.publishedDate = episode.publishedDate;
      this.title = episode.title;
      this.url = episode.url;
      this.playing = false;
      this.loaded = false;
    }
  }
}
