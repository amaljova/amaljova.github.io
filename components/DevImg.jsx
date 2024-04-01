const DevImg = ({ containerStyles, imageSrc, maskSrc}) => {
  return (
    <div className={`${containerStyles}`}>
      <div
        style={{
          width: "510px", // Width of your SVG
          height: "462px", // Height of your SVG
          backgroundImage: `url(${imageSrc})`,
          backgroundSize: "cover",
          maskImage:`url(${maskSrc})`,
          maskSize: "cover",
          maskRepeat: "no-repeat",
          maskPosition: "center",
        }}
      />
    </div>
  );
};

export default DevImg;


// import Image from "next/image";
// const DevImg = ({ containerStyles, imageSrc }) => {
//   return (
//     <div className={`${containerStyles}`}>
//       <Image src={imageSrc}
//       fill
//       priority
//       alt=""
//       />
//     </div>
//   );
// };
// export default DevImg;

