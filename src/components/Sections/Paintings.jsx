import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import {paintings} from '../../data/paintings'

export default function Paintings(){
  function createPainting(src){
    return <img alt="painting" key={uuidv4()}src={src}></img>
  }
  return <div>
    <h4 className="example-heading">The Colorful World of <span>Art</span></h4>
      <div className="example-div">
        <div className="painting-grid">
           {paintings.map(createPainting)}
        </div>
      </div>
      <h4 className="logo-text">The art world has felt the influence of the Golden Ratio for centuries. Also known as the Golden Section or the Divine Proportion. During the Renaissance, painter and draftsman Leonardo Da Vinci used the proportions set forth by the Golden Ratio to construct his masterpieces. Sandro Botticelli, Michaelangelo, Georges Seurat, and others appear to have employed this technique in their artwork.</h4>
  </div>
}