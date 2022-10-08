import "./users.css"
type Props = {
  name: string;
  color: string;
};

export default function UserBtn(props: Props) {
  return (
    <button
      className="user-btn"
      style={{ backgroundColor: `var(--${props.color})` }}
    >
      {props.name.toUpperCase()}
    </button>
  );
}
