import React, {useEffect} from 'react';
import profile from '../assets/profile.jpeg';
import { HeaderHover } from '../scripts/HeaderScripts.js';

export default function Header() {
  //effects after rendering
  useEffect(() => {
    HeaderHover();
  }, []);

  return (
    <div className="header-container">
      <div className="img-container">
        <div className="photo-container"></div>
        <div className="art-container"></div>
      </div>
    </div>
  );
}
