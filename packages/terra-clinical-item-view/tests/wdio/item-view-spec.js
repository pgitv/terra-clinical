const viewports = Terra.viewports('tiny', 'small', 'medium', 'large', 'huge', 'enormous');

describe('Clinical Item View', () => {
  describe('with one column displays', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-item-view/clinical-item-view/displays-item-view');
    });

    Terra.should.matchScreenshot({ viewports, selector: '[id=test-displays]' });

    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      selector: '[id=test-displays]',
      properties: {
        '--terra-item-view-content-color': 'green',
        '--terra-item-view-content-primary-color': 'purple',
        '--terra-item-view-content-secondary-color': 'maroon',
      },
    });
    Terra.should.beAccessible();
  });

  describe('with two column displays', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-item-view/clinical-item-view/displays-item-view');
    });

    Terra.should.matchScreenshot({ viewports, selector: '[id=test-displays-two]' });
    Terra.should.beAccessible();
  });

  describe('with two column and start displays', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-item-view/clinical-item-view/displays-item-view');
    });

    Terra.should.matchScreenshot({ viewports, selector: '[id=test-displays-two-start]' });
    Terra.should.beAccessible();
  });

  describe('with accessories', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-item-view/clinical-item-view/accessory-item-view');
    });

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible();
  });

  describe('with default comment set', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-item-view/clinical-item-view/comment-item-view');
    });

    Terra.should.matchScreenshot({ viewports, selector: '[id=ItemView1]' });
    Terra.should.beAccessible();
  });

  describe('with truncated comment set', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-item-view/clinical-item-view/comment-item-view');
    });

    Terra.should.matchScreenshot({ viewports, selector: '[id=ItemView2]' });
    Terra.should.beAccessible();
  });

  describe('with the full example word wrap - one column', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-item-view/clinical-item-view/overflow-displays-item-view');
    });

    Terra.should.matchScreenshot({ viewports, selector: '[id=ItemView-one-wrap]' });
    Terra.should.beAccessible();
  });

  describe('with the full example word wrap - two column', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-item-view/clinical-item-view/overflow-displays-item-view');
    });

    Terra.should.matchScreenshot({ viewports, selector: '[id=ItemView-two-wrap]' });
    Terra.should.beAccessible();
  });

  describe('with the full example truncated - one truncated', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-item-view/clinical-item-view/overflow-displays-item-view');
    });

    Terra.should.matchScreenshot({ selector: '[id=ItemView-one-truncate]' });
    Terra.should.beAccessible();
  });

  describe('with the full example truncated - two truncated', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-clinical-item-view/clinical-item-view/overflow-displays-item-view');
    });

    Terra.should.matchScreenshot({ selector: '[id=ItemView-one-truncate]' });
    Terra.should.beAccessible();
  });
});
