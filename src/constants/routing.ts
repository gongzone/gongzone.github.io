export class Routing {
  static readonly HOME = new Routing('/');
  static readonly POSTS = new Routing('/posts');
  static readonly SERIES = new Routing('/series');
  static readonly INTRODUCTION = new Routing('/introduction');
  static readonly PROJECTS = new Routing('/projects');

  private constructor(private targetLink: string) {}

  toString(addedLink?: string | null): string {
    const to = !addedLink ? this.targetLink : `${this.targetLink}${addedLink}`;

    return to;
  }

  static slugifySeries(seriesName?: string): string {
    const seriesRoute = Routing.SERIES.toString();

    switch (seriesName) {
      case 'Canvas API로 만들어보는 단진자 운동':
        return `${seriesRoute}/canvas-api-simple-pendulum`;
      default:
        return '';
    }
  }
}
