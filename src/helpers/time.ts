
export interface IConvertSeconds {
  (seconds: number): string
}

export const convertSeconds: IConvertSeconds = seconds => {
  let hrs = Math.floor(seconds / 3600);
  let min = Math.floor((seconds - (hrs * 3600)) / 60);
  let sec = seconds - (hrs * 3600) - (min * 60);
  sec = Math.round(sec * 100) / 100;

  let result = (hrs < 10 ? "0" + hrs : hrs);
  result += ":" + (min < 10 ? "0" + min : min);
  result += ":" + (sec < 10 ? "0" + sec : sec);

  return String(result);
};
