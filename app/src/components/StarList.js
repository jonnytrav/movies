import React, { useEffect, useState } from "react";

const StarList = props => {
  return props.stars.map(star => {
    return <div>{star}</div>;
  });
};

export default StarList;
