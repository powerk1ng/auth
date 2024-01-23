import Images from "@/assets/images/SvgCollection";

const Loader = ({ width = 50, height = 50 }) => {
  return (
    <div>
      <svg width={width} height={height} style={{ pointerEvents: "none" }}>
        {Images.loader}
      </svg>
    </div>
  );
};

export default Loader;
