try {
  throw new Error("loopj.com js file test exception");
} catch (e) {
  Bugsnag.notifyException(e);
}