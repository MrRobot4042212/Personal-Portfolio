import { useState, useEffect } from 'react';
import { MediaIcon } from './MediaIcon.jsx';
import { LiItem } from './LiItem.jsx';

export function UlBoxes({
  LiTittle,
  frontFirstTittle,
  frontSecondTittle,
  frontSecondP,
  frontfirstP,
  LiImg,
  icons = [],
  liItemNames = []
}) {
  const [thereIsImg, setThereIsImg] = useState(false);

  useEffect(() => {
    if (LiImg && LiImg.trim() !== '') {
      setThereIsImg(true);
    } else {
      setThereIsImg(false);
    }
  }, [LiImg]);

  const imgNameClass = thereIsImg ? 'li-img' : 'mi-img-row not-inserted';

  return (
    <div className="li-proyect-container">
      <h1 className="li-tittle">{LiTittle}</h1>
      {thereIsImg && <img className={imgNameClass} src={LiImg} alt="" />}
      <div className="li-content">
        {frontFirstTittle && <h1>{frontFirstTittle}</h1>}
        {frontfirstP && <p>{frontfirstP}</p>}
        {frontSecondTittle && <h2>{frontSecondTittle}</h2>}
        {frontSecondP && <p>{frontSecondP}</p>}

        <ul>
          {liItemNames.map((liItem, index) => (
            <LiItem
              key={index}
              liItemName={liItem.liItemName}
            />
          ))}
        </ul>
      </div>
      <div className="media-icons-container">
        {icons.map((icon, index) => {
          const { url, socialName, iconSrc, Download } = icon;
          return (
            <MediaIcon
              key={index}
              url={url}
              socialName={socialName}
              iconSrc={iconSrc}
              Download={Download}
            />
          );
        })}
      </div>
    </div>
  );
}
