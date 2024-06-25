import { useState, useEffect } from 'react';

export function ContentRowLR({ Tittle, Content1, Content2, Content3, Content4, SectionImg, className }) {
    const [thereIsImg, setThereIsImg] = useState(false);

    useEffect(() => {
        if (SectionImg && SectionImg.trim() !== '') {
            setThereIsImg(true);
        } else {
            setThereIsImg(false);
        }
    }, [SectionImg]);
    
    const imgNameClass = thereIsImg ? 'mi-img-row' : 'mi-img-row not-inserted';
    const pNameClass = 'mi-content-row';

    return (
        <section className={className}>
            <h1 className="mi-tittle-row">{Tittle}</h1>
            <aside className="mi-text-container">
                {Content1 && <p className={pNameClass}>{Content1}</p>}
                {Content2 && <p className={pNameClass}>{Content2}</p>}
                {Content3 && <p className={pNameClass}>{Content3}</p>}
                {Content4 && <p className={pNameClass}>{Content4}</p>}
            </aside>
            {thereIsImg && <img className={imgNameClass} src={SectionImg} alt="" />}
        </section>
    );
}

