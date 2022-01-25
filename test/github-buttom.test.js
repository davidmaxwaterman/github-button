import { html } from 'lit';
import { fixture, expect, nextFrame } from '@open-wc/testing';

import '../github-button.js';

describe('GithubButton', () => {
  /*
  it('', async () => {
    const el = await fixture(html`<github-button></github-button>`);
  });
*/

  it('targetWindow property exists with default value of "current"', async () => {
    const el = await fixture(html`<github-button></github-button>`);

    const { targetWindow } = el;
    const defaultValue = 'current';

    expect(targetWindow).to.equal(defaultValue);
  });

  it('setting "target-window" to "current" results in "targetWindow" value "current"', async () => {
    const expectedValue = 'current';
    const el = await fixture(
      html`<github-button target-window="${expectedValue}"></github-button>`
    );

    const { targetWindow } = el;

    expect(targetWindow).to.equal(expectedValue);
  });

  it('setting "target-window" to "new" results in "targetWindow" value "new"', async () => {
    const expectedValue = 'new';
    const el = await fixture(
      html`<github-button target-window="${expectedValue}"></github-button>`
    );

    const { targetWindow } = el;

    expect(targetWindow).to.equal(expectedValue);
  });

  it('setting "targetWindow overrides "target-window" and reflects new value to attribute', async () => {
    const el = await fixture(
      html`<github-button target-window="new"></github-button>`
    );

    // check everything is as expected before change
    {
      const attributeValue = el.getAttribute('target-window');
      expect(attributeValue).to.equal('new');
    }

    {
      const { targetWindow } = el;
      expect(targetWindow).to.equal('new');
    }

    // change property
    el.targetWindow = 'current';

    // wait for DOM to update
    await nextFrame();

    // check everything is as expected after change
    {
      const { targetWindow } = el;
      expect(targetWindow).to.equal('current');
    }

    {
      const attributeValue = el.getAttribute('target-window');
      expect(attributeValue).to.equal('current');
    }
  });

  it('clicking "github-button" without "target-window" results in window.location.href being set to link url', async () => {
    const link = 'CICCIOSGAMINO/github-button.git';
    const el = await fixture(
      html`<github-button link="${link}"></github-button>`
    );

    let detail;
    el.addEventListener('buttonClicked', event => {
      detail = event.detail;
    });

    el.shadowRoot.querySelector('button').click();

    expect(detail?.targetWindow).to.equal('current');
    expect(detail?.githubURL?.pathname).to.equal(`/${link}`);
  });

  it('Clicking github-button with ‘target-window’ set to ‘current’ results in window.locatlion.href being set to link url', async () => {
    const link = 'CICCIOSGAMINO/github-button.git';
    const el = await fixture(html`
      <github-button target-window="current" link="${link}"> </github-button>
    `);

    let detail;
    el.addEventListener('buttonClicked', event => {
      detail = event.detail;
    });

    el.shadowRoot.querySelector('button').click();

    expect(detail?.targetWindow).to.equal('current');
    expect(detail?.githubURL?.pathname).to.equal(`/${link}`);
  });

  it('Clicking github-button with ‘target-window’ set to ‘new’ results in window.open being called with link url', async () => {
    const link = 'CICCIOSGAMINO/github-button.git';
    const el = await fixture(html`
      <github-button target-window="new" link="${link}"> </github-button>
    `);

    let detail;
    el.addEventListener('buttonClicked', event => {
      detail = event.detail;
    });

    el.shadowRoot.querySelector('button').click();

    expect(detail?.targetWindow).to.equal('new');
    expect(detail?.githubURL?.pathname).to.equal(`/${link}`);
  });

  it('Setting ‘target-window’ to something other than ‘new’ or ‘current’ results in an error - and no change to property', async () => {
    const targetWindow = 'new';
    const el = await fixture(html`
      <github-button target-window="${targetWindow}"></github-button>
    `);

    try {
      el.setAttribute('target-window', 'invalidtarget');
    } catch (error) {
      expect(el.targetWindow).to.equal(targetWindow); // hasn't changed
      expect(error).to.exist;
    }
  });

  it('Setting ‘targetWindow’ to something other than ‘new’ or ‘current’ results in an error - and no change to property', async () => {
    const targetWindow = 'new';
    const el = await fixture(html`
      <github-button target-window="${targetWindow}"></github-button>
    `);

    try {
      el.targetWindow = 'invalidtarget';
    } catch (error) {
      expect(el.targetWindow).to.equal(targetWindow); // hasn't changed
      expect(error).to.exist;
    }
  });

  /*
  it('', async () => {
    const el = await fixture(html`<github-button></github-button>`);
  });
*/

  it('setting the --background-color css property sets the background color', async () => {
    const el = await fixture(html`<github-button></github-button>`);

    const testColor = 'green';

    el.style.setProperty('--background-color', testColor);

    const bgColor = window
      .getComputedStyle(el)
      .getPropertyValue('background-color');

    expect(bgColor).to.equal('rgb(0, 128, 0)');
  });

  it('not setting the --background-color css property reverts to transparent', async () => {
    const el = await fixture(html`<github-button></github-button>`);

    {
      const bgColorProp = el.style.getPropertyValue('--background-color');
      expect(bgColorProp).to.be.empty;
    }

    {
      const bgColor = window
        .getComputedStyle(el)
        .getPropertyValue('background-color');
      expect(bgColor).to.equal('rgba(0, 0, 0, 0)');
    }
  });
});
