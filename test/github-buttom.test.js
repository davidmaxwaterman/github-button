import { html } from 'lit';
import { fixture, expect, nextFrame } from '@open-wc/testing';

import '../github-button.js';

describe('GithubButton link target', () => {
  /*
  it('', async () => {
    const el = await fixture(html`<github-button></github-button>`);
  });
*/

  it('linkTarget property exists with default value of "false"', async () => {
    const el = await fixture(html`<github-button></github-button>`);

    const { linkTarget } = el;
    const defaultValue = 'false';

    expect(linkTarget).to.equal(defaultValue);
  });

  it('setting "link-target" to "false" results in "linkTarget" value "false"', async () => {
    const expectedValue = 'false';
    const el = await fixture(
      html`<github-button link-target="${expectedValue}"></github-button>`
    );

    const { linkTarget } = el;

    expect(linkTarget).to.equal(expectedValue);
  });

  it('setting "link-target" to "true" results in "linkTarget" value "true"', async () => {
    const expectedValue = 'true';
    const el = await fixture(
      html`<github-button link-target="${expectedValue}"></github-button>`
    );

    const { linkTarget } = el;

    expect(linkTarget).to.equal(expectedValue);
  });

  it('setting "linkTarget overrides "link-target" and reflects new value to attribute', async () => {
    const el = await fixture(
      html`<github-button link-target="true"></github-button>`
    );

    // check everything is as expected before change
    {
      const attributeValue = el.getAttribute('link-target');
      expect(attributeValue).to.equal('true');
    }

    {
      const { linkTarget } = el;
      expect(linkTarget).to.equal('true');
    }

    // change property
    el.linkTarget = 'false';

    // wait for DOM to update
    await nextFrame();

    // check everything is as expected after change
    {
      const { linkTarget } = el;
      expect(linkTarget).to.equal('false');
    }

    {
      const attributeValue = el.getAttribute('link-target');
      expect(attributeValue).to.equal('false');
    }
  });

  it('clicking "github-button" without "link-target" results in window.location.href being set to link url', async () => {
    const link = 'CICCIOSGAMINO/github-button.git';
    const el = await fixture(
      html`<github-button link="${link}"></github-button>`
    );

    let detail;
    el.addEventListener('buttonClicked', event => {
      detail = event.detail;
    });

    el.shadowRoot.querySelector('button').click();

    expect(detail?.linkTarget).to.equal('false');
    expect(detail?.githubURL?.pathname).to.equal(`/${link}`);
  });

  it('Clicking github-button with ‘link-target’ set to ‘false’ results in window.locatlion.href being set to link url', async () => {
    const link = 'CICCIOSGAMINO/github-button.git';
    const el = await fixture(html`
      <github-button link-target="false" link="${link}"> </github-button>
    `);

    let detail;
    el.addEventListener('buttonClicked', event => {
      detail = event.detail;
    });

    el.shadowRoot.querySelector('button').click();

    expect(detail?.linkTarget).to.equal('false');
    expect(detail?.githubURL?.pathname).to.equal(`/${link}`);
  });

  it('Clicking github-button with ‘link-target’ set to ‘true’ results in window.open being called with link url', async () => {
    const link = 'CICCIOSGAMINO/github-button.git';
    const el = await fixture(html`
      <github-button link-target="true" link="${link}"> </github-button>
    `);

    let detail;
    el.addEventListener('buttonClicked', event => {
      detail = event.detail;
    });

    el.shadowRoot.querySelector('button').click();

    expect(detail?.linkTarget).to.equal('true');
    expect(detail?.githubURL?.pathname).to.equal(`/${link}`);
  });

  it('Clicking github-button without "link" has no effect', async () => {
    const el = await fixture(html` <github-button></github-button> `);

    let detail;
    el.addEventListener('buttonClicked', event => {
      detail = event.detail;
    });

    el.shadowRoot.querySelector('button').click();

    expect(detail).to.be.undefined;
  });

  it('Setting ‘linkTarget’ to something other than ‘true’ or ‘false’ results in an error - and no change to property', async () => {
    const linkTarget = 'true';
    const el = await fixture(html`
      <github-button link-target="${linkTarget}"></github-button>
    `);

    el.linkTarget = null;

    expect(el.linkTarget).to.equal(linkTarget); // hasn't changed
  });

  it('Setting ‘link-target’ to something other than ‘true’ or ‘false’ results in an error - and no change to property', async () => {
    const linkTarget = 'true';
    const el = await fixture(html`
      <github-button link-target="${linkTarget}"></github-button>
    `);

    el.setAttribute('link-target', 'gobbledygook');

    expect(el.linkTarget).to.equal(linkTarget); // hasn't changed
    expect(el.getAttribute('link-target')).to.equal(linkTarget); // hasn't changed
  });
});

describe('GithubButton background color', () => {
  it('not setting the background-color attribute does not set background-color css property', async () => {
    const el = await fixture(html`<github-button></github-button>`);

    const bgColor = window
      .getComputedStyle(el)
      .getPropertyValue('background-color');
    expect(bgColor).to.equal('rgba(0, 0, 0, 0)');
  });

  it('setting the background-color attribute sets the background color', async () => {
    const el = await fixture(html`<github-button background-color="green"></github-button>`);

    const bgColor = window
      .getComputedStyle(el)
      .getPropertyValue('background-color');

    expect(bgColor).to.equal('rgb(0, 128, 0)');
  });

});
