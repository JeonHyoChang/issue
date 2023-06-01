const getTimeElapsed = (targetDate) => {
  const targetTime = new Date(targetDate).getTime();
  const currentTime = Date.now();
  const timeDifference = currentTime - targetTime;

  const timeIntervals = {
    seconds: 1000,
    minutes: 60000,
    hours: 3600000,
    days: 86400000,
    weeks: 604800000,
  };

  if (timeDifference < timeIntervals.minutes) {
    const seconds = Math.floor(timeDifference / timeIntervals.seconds);
    return `${seconds}초 전`;
  } else if (timeDifference < timeIntervals.hours) {
    const minutes = Math.floor(timeDifference / timeIntervals.minutes);
    return `${minutes}분 전`;
  } else if (timeDifference < timeIntervals.days) {
    const hours = Math.floor(timeDifference / timeIntervals.hours);
    return `${hours}시간 전`;
  } else if (timeDifference < timeIntervals.weeks) {
    const days = Math.floor(timeDifference / timeIntervals.days);
    return `${days}일 전`;
  } else {
    const weeks = Math.floor(timeDifference / timeIntervals.weeks);
    return `${weeks}주 전`;
  }
};

export default getTimeElapsed;
