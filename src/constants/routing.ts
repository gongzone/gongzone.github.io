export class Routing {
  static readonly HOME = new Routing('/');
  static readonly POSTS = new Routing('/posts');
  static readonly SERIES = new Routing('/series');
  static readonly INTRODUCTION = new Routing('/introduction');
  static readonly PROJECTS = new Routing('/projects');

  private constructor(private targetLink: string) {}

  toString(addedLink?: string | null): string {
    return `${this.targetLink}/${addedLink}`;
  }
}
