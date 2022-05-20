import Image from "next/image";
const ImgPreview = ({ images, handleClick }) => {
  return (
    <div className="img_preview">
      {images.map((d, idx) => {
        return (
          <div
            key={idx}
            className="small_img_container"
            onClick={() => {
              handleClick(idx);
            }}
          >
            <Image
              src={d}
              layout="responsive"
              height="150"
              width="300"
              className="small_img"
            />
          </div>
        );
      })}
    </div>
  );
};

export default ImgPreview;
