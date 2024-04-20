import React, { useEffect, useState } from "react";
import useScrollPosition from "./useScrollPosition";

interface IProps {
  topPosition: number;
  height: number;
}

const useInvitePosition = ({ topPosition, height }: IProps) => {
  const [percentage, setPercentage] = useState(0);
  const [isEnter, setIsEnter] = useState(false);
  const [invitePosition, setInvitePosition] = useState(0);
  const [inviteHeight, setInviteHeight] = useState(0);

  const scrollPosition = useScrollPosition();

  useEffect(() => {
    setInvitePosition(topPosition);
    setInviteHeight(height);

    if (
      scrollPosition > invitePosition / 1.3 &&
      scrollPosition <= invitePosition + inviteHeight
    ) {
      setIsEnter(true);
      setPercentage(
        Math.round(((scrollPosition - invitePosition) / inviteHeight) * 100 * 2)
      );
    } else {
      setIsEnter(false);
    }
  }, [scrollPosition]);

  return { isEnter, percentage, inviteHeight, invitePosition, scrollPosition };
};

export default useInvitePosition;
