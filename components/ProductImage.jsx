import React, { useState } from "react";
import ReactImageMagnify from "react-image-magnify";
function ProductImage({ style, images }) {
  const [activeImg, setActiveImg] = useState(0);

  return (
    <div className={style.product_images}>
      <div className={style.thumbs_images}>
        {images.map((image, index) => (
          <button
            className={
              index == activeImg
                ? `${style.thumb_item} ${style.active}`
                : style.thumb_item
            }
            onClick={() => setActiveImg(index)}
          >
            <img src={image.thumbnail_image} alt="" />
          </button>
        ))}
      </div>
      <div className={style.main_images}>
        <div className={style.main_img_container}>
          {/* <img src={images[activeImg].path} /> */}
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: images[activeImg].path,
                isFluidWidth: true,
                src: images[activeImg].path,
              },
              largeImage: {
                src: images[activeImg].path,
                alt: images[activeImg].filename,
                isFluidWidth: true,
                width: 1100,
                height: 600,
              },
              enlargedImagePortalId: "zoomPortion",
              enlargedImageContainerDimensions: {
                width: "200%",
                height: "100%",
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductImage;
