export const createNewElement = (tag) => document.createElement(tag);

export const appendChildToParent = (parent, child) => {
    parent.appendChild(child);
}