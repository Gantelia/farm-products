class Singleton {
  constructor(appRoute) {
    this.pageVisits = {
      [appRoute.MAIN]: 0,
      [appRoute.ORDER]: 0,
    };

    if (typeof Singleton.instance !== "object") {
      Singleton.instance = this;
    }
    return Singleton.instance;
  }

  getSingleton() {
    return this.pageVisits;
  }

  incSingleton(pageLocation) {
    this.pageVisits[pageLocation]++;
  }
}

export default Singleton;
