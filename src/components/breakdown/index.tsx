import "./breakdown.css";

export default function Breakdown() {
  const data = [
    {
      label: "new work",
      color: "green",
      qty: 25,
    },
    {
      label: "rework",
      color: "cyan",
      qty: 15,
    },
    {
      label: "refactor",
      color: "nav",
      qty: 40,
    },
    {
      label: "bugs",
      color: "red",
      qty: 20,
    },
  ];

  return (
    <>
      <div className="breakdown">
        {data.map((d) => (
          <div
            className={`${d.label.replace(" ", "-")} bar`}
            style={{ width: d["qty"] + "%" }}
          ></div>
        ))}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          alignItems: "start",
        }}
      >
        <div className="col">
          {data.slice(0, 2).map((desc) => (
            <div className="color-desc">
              <div
                className="circle"
                style={{ backgroundColor: `var(--${desc.color})` }}
              ></div>
              <p className="desc">
                <span className="time">{desc.qty}%</span> {desc.label}
              </p>
            </div>
          ))}
        </div>
        <div className="col">
          {data.slice(2, 4).map((desc) => (
            <div className="color-desc">
              <div
                className="circle"
                style={{ backgroundColor: `var(--${desc.color})` }}
              ></div>
              <p className="desc">
                <span className="time">{desc.qty}%</span> {desc.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
