/**
 *  @license
 *    Copyright 2018 Brigham Young University
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 **/
"use strict";

import template from './byu-random-content.html';
import * as util from 'byu-web-component-utils';

class ByuRandomContent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    //This will stamp our template for us, then let us perform actions on the stamped DOM.
    util.applyTemplate(this, 'byu-random-content', template, () => {
      setupSlotListeners(this);
    });
  }

  disconnectedCallback() {
  }

  static get observedAttributes() {
    return [];
  }

  attributeChangedCallback(attr, oldValue, newValue) {
    switch (attr) {
    }
  }
}

window.customElements.define('byu-random-content', ByuRandomContent);
window.ByuRandomContent = ByuRandomContent;

// -------------------- Helper Functions --------------------

function setupSlotListeners(component) {
  let slot = component.shadowRoot.querySelector('#content-slot');

  //this will listen to changes to the contents of our <slot>, so we can take appropriate action
  slot.addEventListener('slotchange', () => {
    console.log('here');
    for (var i = 0; i < component.children.length; i++) {
      if (component.children[i].tagName.toUpperCase() != "TEMPLATE") {
        var message = 'byu-random-content error: this component only allows template tags.'; 
        console.log(message);
        component.innerHTML = message;
        throw new DOMException(message);
        return;
      }
    }
    chooseRandomChild(component);
  }, false);
}

function chooseRandomChild(component) {
  var index = getRandomInt(component.children.length);
  setActiveIndex(index, component);
}

function setActiveIndex(index, component) {

  var children = component.children;
  console.log(children);

  var tpl = children[index];
  console.log(tpl);

  var container = component.shadowRoot.querySelector('#content-container');
  var clone = tpl.content.cloneNode(true);
  container.appendChild(clone);

  localStorage["last-random-content-index"] = index;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
