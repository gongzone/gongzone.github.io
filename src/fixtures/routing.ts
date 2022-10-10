export class Routing {
  static readonly HOME = new Routing('/');
  static readonly POSTS = new Routing('/posts/');
  static readonly SERIES = new Routing('/series/');
  static readonly INTRODUCTION = new Routing('/introduction/');
  static readonly PROJECTS = new Routing('/projects/');

  private constructor(private _to: string) {}

  toString(addedTo?: string | null): string {
    return addedTo ? `${this._to}${addedTo}/` : this._to;
  }

  static slugifySeries(seriesName: string): string {
    switch (seriesName) {
      case 'Canvas API로 만들어보는 단진자 운동':
        return Routing.SERIES.toString('canvas-api-simple-pendulum');
      default:
        return Routing.SERIES.toString();
    }
  }

  static slugifyTag(tagName: string): string {
    if (tagName === 'ALL') {
      return Routing.POSTS.toString();
    }

    return `${Routing.POSTS.toString('tags')}${tagName.toLowerCase().replace('-', '')}/`;
  }
}
