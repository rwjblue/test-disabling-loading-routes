import Route from '@ember/routing/route';

export default class PostsRoute extends Route {
  model() {
    return new Promise(resolve => {
      setTimeout(resolve, 3000);
    });
  }
}
