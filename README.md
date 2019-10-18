# test-disabling-loading-routes

This project was created to demonstrate that adding a `loading` action to your
application route (or technically any level) will allow that action
implementation to control if loading states or substates are entered.

The basic implementation is:

```js
export default class ApplicationRoute extends Route {
  @action loading() {
    // for example, you can decide to use loading states or not based on the
    // query string
    if (!window.location.search.includes('skipLoading')) {
      return true;
    }
  }
}
```

In this demo, navigating should have the following results:

* when navigating to `/posts/`, the route has a 3s delay but shows `Loading!` while it waits
* when navigating to `/posts/?skipLoading`, the route has a 3s delay but shows nothing while loading
