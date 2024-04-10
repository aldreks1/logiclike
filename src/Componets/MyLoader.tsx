import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = (props) => (
  <ContentLoader
    speed={2}
    width={1331}
    height={486}
    viewBox="0 0 1331 486"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="24" y="22" rx="18" ry="18" width="264" height="319" />
    <rect x="312" y="24" rx="18" ry="18" width="253" height="210" />
    <rect x="312" y="250" rx="18" ry="18" width="253" height="210" />
    <rect x="583" y="24" rx="18" ry="18" width="253" height="210" />
    <rect x="583" y="250" rx="18" ry="18" width="253" height="210" />
    <rect x="854" y="24" rx="18" ry="18" width="253" height="210" />
    <rect x="854" y="250" rx="18" ry="18" width="253" height="210" />
  </ContentLoader>
);

export default MyLoader;
