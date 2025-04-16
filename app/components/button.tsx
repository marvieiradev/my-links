export interface ButtonProps {
  type: "submit";
  text: string;
  onClick: () => void;
}

const Button = (props: ButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      type={props.type}
      className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-lg p-4 min-w-[100px] rounded-full"
    >
      {props.text}
    </button>
  );
};

export default Button;
