import React from "react";

const ImageWithFallback = ({ alt, src, ...delegated }) => {

    /* Project dependent sources array */
    const sources = [{
        key: 1,
        type: "image/jpeg",
        srcset: `${src} 1x, ${src.replace(".jpg", "")}@2x.jpg 2x`,
      },
      {
        key: 2,
        type: "image/png",
        srcset: `${src.replace(".jpg", "")}.png 1x, ${src.replace(".jpg", "")}@2x.png 2x`,
      }]

    return (
        <picture>
            {sources.map(({ key, type, srcset }) => {
                return (
                    <source key={key} type={type} srcSet={srcset} />
                )
            })}
            <img alt={alt} src={src} {...delegated} />
        </picture>
    );
};

export default ImageWithFallback;