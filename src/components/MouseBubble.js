import React, { useEffect } from 'react';
import { MouseBubble } from '../scripts/MouseBubbleScripts';

export default function Content() {
    //effects after rendering
    useEffect(() => {
        MouseBubble();
    }, []);

    return (
        <div className="mouse-bubble">
            <span className='mouse-message'></span>
        </div>
    );
}