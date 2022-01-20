import sample_ad from "../../assets/images/sample-ad.jpeg";
import { isMobile } from "react-device-detect";

const AD = () => {
  return (
    <aside
      className={`ad-wrapper columns large-4 xlarge-3 ${
        isMobile ? "order-1" : "order-2"
      }`}
    >
      <img src={sample_ad} alt="Sample ad" />
    </aside>
  );
};

export default AD;
