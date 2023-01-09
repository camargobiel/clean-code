/* Classes */

class ClassOrganization {
  variable1 = 10;
  variable2 = 20;

  constructor() {}

  publicFunction1() {
    return 1;
  }

  publicFunction2() {
    return 2;
  }

  _privateFunction1() {
    return 1;
  }

  _privateFunction2() {
    return 2;
  }
}

// Classes must be small
  // In classes we count responsibilities
  // Class name should tell the responsibilitie
  // We should be capable to describe in less than 25 words what that class do

// SRP principle (Single responsibilitie principle)
  // Classes must have one single responsibilitie

  // Wrong
  class Version {
    getPotatoFries();
    getMajorVersion();
    getCustomerName();
  }

  // Correct
  class Version {
    getMajorVersion();
    getMinusVersion();
    getBuildNumber();
  }

// Systems must have a lot small classes, and not some giant classes