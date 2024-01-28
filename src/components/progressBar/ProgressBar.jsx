const ProgressBar = ({
  radius,
  circumference,
  strokeDashoffset,
  strokeBgColor,
  strokeColor,
  strokeWidth,
  size,
  children,
}) => {
  const styles = {
    wrapper: {
      width: size,
      height: size,
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      overflow: "hidden",
      borderRadius: radius,
    },
    svg: {
      position: "absolute",
      top: 0,
      left: 0,
      height: "100%",
      width: "100%",
      transform: "rotateY(-180deg) rotateZ(-90deg)",
      overflow: "hidden",
    },
    content: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 99,
    },
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.content}>{children}</div>
      <svg style={styles.svg}>
        <circle
          cx={radius}
          cy={radius}
          r={radius}
          fill="none"
          stroke={strokeBgColor}
          strokeWidth={strokeWidth}
        />
        <circle
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          r={radius}
          cx={radius}
          cy={radius}
          fill="none"
          strokeLinecap="round"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
        />
      </svg>
    </div>
  );
};

export default ProgressBar;
