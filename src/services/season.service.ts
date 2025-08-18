import { fetchPage } from '../fetchers';
import { HTMLElement, parse } from 'node-html-parser';
import { seasonUrl } from '../vars';
import { EpisodeInfo, Season } from '../interfaces/season.interface';

export class SeasonScraper {
  public async season(url: string): Promise<Season> {
    const response = await fetchPage(seasonUrl(url));

    const seasonHtml = parse(response);

    const movieNode = seasonHtml.querySelector('.main-movie-profile');

    return this.buildSeason(movieNode);
  }

  private buildSeason(
    movieNode: HTMLElement
  ): Season {
    return {
      origin: this.getOriginFromHtml(movieNode),
      description: this.getDescriptionFromHtml(movieNode),
      thumbnail: this.getThumbnailFromHtml(movieNode),
      episodeList: this.getEpisodeListFromHtml(movieNode),
    }
  }

  private getOriginFromHtml(movieNode: HTMLElement): string {
    return movieNode.querySelector('.film-info-content .origin').textContent;
  }

  private getDescriptionFromHtml(movieNode: HTMLElement): string {
    return movieNode.querySelector('.plot-full').textContent;
  }

  private getThumbnailFromHtml(movieNode: HTMLElement): string {
    return movieNode.querySelector('.film-posters img').getAttribute('src');
  }

  private getEpisodeListFromHtml(movieNode: HTMLElement): EpisodeInfo[] {
    return movieNode.querySelectorAll('.film-episodes-list li').map(container => {
      const nameContainer = container.querySelector('.film-title-name')

      return {
        name: nameContainer.textContent,
        seasonEpisodeIdentifier: container.querySelector('.film-title-info').textContent,
        linkToDetail: nameContainer.getAttribute('href'),
      }
    })
  }



}

