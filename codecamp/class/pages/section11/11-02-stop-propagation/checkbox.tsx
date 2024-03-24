export default function Checkbox() {
  const qqq2 = () => {
    event?.stopPropagation();
    alert("2");
  };
  const qqq3 = () => {
    alert("3");
  };

  return (
    <span onClick={qqq2}>
      <input type="checkbox" onClick={qqq3} />
    </span>
  );
}
