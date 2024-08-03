export function bytesToMegabytes(bytes) {
  if (bytes < 1024 * 1024) {
    return ` ${Math.round(bytes / 1024)} KB`;
  }
  const megabytes = Math.round(bytes / (1024 * 1024));
  return `${megabytes} MB`;
}

export function formatTime(seconds) {
  // Calculate hours, minutes, and seconds
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  // Format as hh:mm:ss or mm:ss
  if (hrs > 0) {
    return `${String(hrs).padStart(2, "0")}:${String(mins).padStart(
      2,
      "0"
    )}:${String(secs).padStart(2, "0")}`;
  } else {
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  }
}



export function calculateTimeDifferenceToNow(targetDate) {
  const targetDateTime = new Date(targetDate);
  const currentTime = Date.now();
  const differenceInMilliseconds = currentTime - targetDateTime;

  const seconds = Math.floor(differenceInMilliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);

  const months = Math.floor(days / 30); // Assuming 30 days in a month for simplicity
  const years = Math.floor(months / 12);

  if (seconds < 60) {
    return `${seconds} seconds`;
  } else if (minutes < 60) {
    return `${minutes} minutes`;
  } else if (hours < 24) {
    return `${hours} hours`;
  } else if (days < 7) {
    return `${days} days`;
  } else if (weeks < 5) {
    return `${weeks} weeks`;
  } else if (months < 12) {
    return `${months} months`;
  } else return `${years} years`;
}
