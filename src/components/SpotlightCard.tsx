import React from "react";

interface SpotlightCardProps extends React.PropsWithChildren {
  className?: string;
}

const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={`relative overflow-hidden rounded-3xl transition-all duration-300 ${className}`}
      style={{
        background: "radial-gradient(circle, rgba(18, 16, 16, 1) 0%, rgba(46, 15, 10, 0.86) 50%, rgba(8, 5, 4, 1) 99%)",
      }}
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default SpotlightCard;