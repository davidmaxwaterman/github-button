import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import '../github-button.js';

describe('GithubButton', () => {

  it('setting the --background-color css property sets the background color', async () => {
    const el = await fixture(html`<github-button></github-button>`);

    const testColor = 'green';

    el.style.setProperty('--background-color', testColor); 

    const bgColor = window.getComputedStyle(el).getPropertyValue('background-color');

    expect(bgColor).to.equal('rgb(0, 128, 0)');
  });

  it('not setting the --background-color css property reverts to transparent', async () => {
    const el = await fixture(html`<github-button></github-button>`);

    {
      const bgColorProp = el.style.getPropertyValue('--background-color'); 
      expect(bgColorProp).to.be.empty;
    }

    {
      const bgColor = window.getComputedStyle(el).getPropertyValue('background-color');
      expect(bgColor).to.equal('rgba(0, 0, 0, 0)');
    }
  });

});
