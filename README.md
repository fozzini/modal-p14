# simple-modal-library
A library of React components created using `create-react-app`.

> For support for **react <18.0.0**,**react-dom <18.0.0**,**react-scripts <5.0.0**

## Install

```
npm i modal-component-p14

```

## Usage

```js
import React from 'react'
import Modal from "modal-component-p14/dist/Modal"
...
```

## Hooks

```js
const [openModal, setOpenModal] = useState(false);

```
## component

```js
{openModal && (
        <Modal closeModal={() => setOpenModal(false)}>
          <p>Employee Created!</p>
        </Modal>
 )}

```
## CSS

```css
css used : 
 
 .overlay {
  position: fixed;
  display: block; 
  overflow: auto; 
  width: 100%; 
  height: 100%; 
  top: 0; 
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5); 
  z-index: 999; 
  cursor: pointer;
}

.content {
      margin: 15% auto;
      background-color: white;
      border-radius: 0.25rem;
      width: 50vw;
      padding: 2rem;
      position: relative;
}
.icon{
    color: #000000;
    padding : 10px;
    cursor: pointer;
    background-Color: transparent;
    border: 0px;
    position: absolute;
    top: 0.3rem;
    right: 0.5rem;
}

```
