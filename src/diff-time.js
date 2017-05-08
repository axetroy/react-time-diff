/**
 * Created by axetroy on 17-5-8.
 */
export default function diffTime(time1) {
  time1 = time1 || 0;
  return function(time2) {
    time2 = time2 || 0;

    let seconds = Math.abs(time1 - time2) / 1000;

    const days = Math.floor(seconds / (3600 * 24));
    seconds = seconds - days * 3600 * 24;

    const hours = Math.floor(seconds / 3600);
    seconds = seconds - hours * 3600;

    const minutes = Math.floor(seconds / 60);
    seconds = seconds - minutes * 60;

    return {
      days,
      hours,
      minutes,
      seconds: parseInt(seconds)
    };
  };
}
