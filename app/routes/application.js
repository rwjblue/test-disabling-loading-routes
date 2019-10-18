import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class ApplicationRoute extends Route {
  @action loading() {
    if (!window.location.search.includes('skipLoading')) {
      return true;
    }
  }
}
