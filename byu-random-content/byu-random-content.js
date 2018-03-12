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
    this.attachShadow({mode: 'open'});
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
    switch(attr) {
    }
  }
}

window.customElements.define('byu-random-content', ByuRandomContent);
window.ByuRandomContent = ByuRandomContent;

// -------------------- Helper Functions --------------------

function setupSlotListeners(component) {
  let slot = component.shadowRoot.querySelector('#content-container');

  //this will listen to changes to the contents of our <slot>, so we can take appropriate action
  slot.addEventListener('slotchange', () => {
    console.log('here');
    chooseRandomChild(slot);
  }, false);
}

function chooseRandomChild(slot) {
  var children = slot.assignedNodes().filter(n => n.nodeType === Node.ELEMENT_NODE);

  console.log(children);
  var index = getRandomInt(children.length);

  // prevent getting the same content 2x in a row
  while (index == localStorage["last-random-content-index"])
  {
    index = getRandomInt(children.length);
  }

  setActiveIndex(index, children);
}

function setActiveIndex(index, children) {
  for (var i = 0; i < children.length; i++)
  {
    children[i].style.display = "none";
  }
  children[index].style.display = "";
  console.log(children[index]);
  localStorage["last-random-content-index"] = index;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
