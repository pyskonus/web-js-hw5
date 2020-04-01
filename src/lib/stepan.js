export default class Stepan {
  static createElement(element, parent, attributes = {}) {
    // TODO: check if this is a valid tag name
    const newElement = document.createElement(element);

    if (!(newElement instanceof HTMLElement)) {
      throw new Error("Tag name invalid");
    }

    const { innerHTML, innerText } = attributes;

    for (let attribute in attributes) {
      if (['innerHTML', 'innerText'].includes(attribute)) {
        continue;
      }

      newElement.setAttribute(attribute, attributes[attribute]);
    }

    innerHTML && (newElement.innerHTML = innerHTML);
    innerText && (newElement.innerText = innerText);

    parent.appendChild(newElement);

    return newElement;
  }

  static Component = class {
    constructor(parent) {

      // TODO: 1. Create StepanError class to define all framework errors
      //       2. throw an error if parent is null or undefined, or if it's not a valid DOM object
      class stepanError extends Error {
        constructor(errorText) {
            super(errorText);
            this.error = "stepanError";
        }
      }if(typeof(parent) == undefined) {
        throw new stepanError("Parent is undefined");
      } else if (typeof(parent) == null) {
        throw new stepanError("Parent is null");
      }
      if (!(parent instanceof HTMLElement)) {
        throw new stepanError("Parent is an invalid DOM object");
      }


      this.parent = parent;
    }

    // TODO (Bonus): Ensure that every component returns a top-level root element
  }
}
