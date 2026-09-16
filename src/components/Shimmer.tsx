

export const ShimmerCard = () => {
  return (
    <>
    {Array.from({ length: 10 }).map((_, index) => (
    <div className="resCard" key={index}>
        <div className="shimmer-image"></div>
    </div>
    ))}
    </>
  );
};

export default ShimmerCard;
