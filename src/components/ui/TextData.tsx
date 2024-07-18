export default function TextData({
  keyVal,
  value,
}: {
  keyVal: string;
  value: string | number;
}) {
  return (
    <p className="font-semibold py-1">
      {keyVal} :<span className="font-light"> {value}</span>
    </p>
  );
}
