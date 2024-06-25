import { useState } from 'react';

export function MediaIcon({ url, socialName, iconSrc, Download }) {
    const [isHovered, setIsHovered] = useState(false);

    const iconNameClassName = isHovered ? 'name-media-icon is-hovered' : 'name-media-icon';
    const iconImgClassName = isHovered ? 'img-media-icon is-hovered' : 'img-media-icon';
    
    const handleMouseOver = () => {
        setIsHovered(true);
    };

    const handleMouseOut = () => {
        setIsHovered(false);
    };

    return (
        <span>
            <a className="link-media-icon" href={url} download={Download}>
                <h4
                    className={iconNameClassName}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                >
                    {socialName}
                </h4>
                <span
                    className={iconImgClassName}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                >
                    {iconSrc}
                </span>
            </a>
        </span>
    );
}
