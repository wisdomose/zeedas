import { FiMoreHorizontal } from "react-icons/fi";
import { AiOutlineInfoCircle } from "react-icons/ai";
import "./body.css";
import Cycle, { cycleData } from "../doughunt";
import Idle from "../idle";
import Breakdown from "../breakdown";

export default function Body() {
  return (
    <div className="body">
      <nav>
        <FiMoreHorizontal />
      </nav>
      <main>
        <section>
          <header>
            <p className="title">Project stats</p>
            <div className="dropdown">
              <p>All time</p>
            </div>
          </header>
          <section>
            <div className="sec-1">
              <div className="box pr">
                <div className="header">
                  <div>
                    <p>Average PR Size</p>
                    <AiOutlineInfoCircle />
                  </div>
                </div>

                <div className="row">
                  {/* info */}
                  <div className="metric">
                    <div>
                      <p>968</p>
                      <span>lines</span>
                    </div>
                    <p>Line change</p>
                  </div>
                  {/* info */}
                  <div className="metric">
                    <div>
                      <p>240</p>
                      <span>kb</span>
                    </div>
                    <p>Size</p>
                  </div>
                </div>

                <div className="badge up">
                  <Up />
                  <p>24%</p>
                </div>
              </div>
              <div className="box ticket">
                <div className="header">
                  <div>
                    <p>Average Ticket Duration</p>
                    <AiOutlineInfoCircle />
                  </div>
                </div>

                <div className="row">
                  {/* info */}
                  <div className="metric">
                    <div>
                      <p>6</p>
                      <span>hours</span>
                    </div>
                    <p>Hours worked</p>
                  </div>
                </div>

                <div className="badge down">
                  <Down />
                  <p>79%</p>
                </div>
              </div>
              <div className="box cycle">
                <div className="header">
                  <div>
                    <p>Cycle Time</p>
                    <AiOutlineInfoCircle />
                  </div>
                </div>

                <div className="row">
                  <div className="badge up">
                    <Up />
                    <p>24%</p>
                  </div>
                  <div id="cycle">
                    <Cycle />
                  </div>

                  <div className="aside">
                    {cycleData.map((desc) => (
                      <div className="color-desc">
                        <div
                          className="circle"
                          style={{ backgroundColor: `${desc.color}` }}
                        ></div>
                        <p className="desc">
                          <span className="time">{desc.time}</span> {desc.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="sec-2">
              <div className="box work">
                <div className="header">
                  <div>
                    <p>Work breakdown</p>
                    <AiOutlineInfoCircle />
                  </div>
                </div>

                <div className="row">
                  {/* info */}
                  <div className="metric">
                    <div>
                      <p>968</p>
                      <span>lines</span>
                    </div>
                  </div>
                  {/* info */}
                  <div className="metric">
                    <div>
                      <p>54</p>
                      <span>tickets</span>
                    </div>
                  </div>
                  {/* info */}
                  <div className="metric">
                    <div>
                      <p>4</p>
                      <span>total weeks worked</span>
                    </div>
                  </div>
                </div>

                <div className="v">
                  <Breakdown />
                </div>
              </div>
              <div className="box idle">
                <div className="header">
                  <div>
                    <p>Idle Time Breakdown</p>
                    <AiOutlineInfoCircle />
                  </div>
                  <div>
                    <div className="idle stat">
                      <div
                        className="circle"
                        style={{ backgroundColor: "var(--gray2)" }}
                      ></div>
                      <p>Idle</p>
                    </div>
                    <div className="productive stat">
                      <div
                        className="circle"
                        style={{ backgroundColor: "var(--green)" }}
                      ></div>
                      <p>Productive</p>
                    </div>
                  </div>
                </div>
                <div id="idle">
                  <Idle />
                </div>
              </div>
            </div>
          </section>
        </section>

        <section className="planning">
          <header>
            <p className="title">Planning</p>
            <div className="dropdown">
              <p>All time</p>
            </div>
          </header>

          <section>
            <div className="box">
              <div className="header">
                <div>
                  <p>New Features added</p>
                  <AiOutlineInfoCircle />
                </div>
              </div>
              <p>No data</p>
            </div>
            <div className="box">
              <div className="header">
                <div>
                  <p>Complexity Accuracy</p>
                  <AiOutlineInfoCircle />
                </div>
              </div>
              <p>No data</p>
            </div>
            <div className="box">
              <div className="header">
                <div>
                  <p>Task Accuracy</p>
                  <AiOutlineInfoCircle />
                </div>
              </div>
              <p>No data</p>
            </div>
            <div className="box">
              <div className="header">
                <div>
                  <p>Refactor Rate</p>
                  <AiOutlineInfoCircle />
                </div>
              </div>
              <p>No data</p>
            </div>
          </section>
        </section>
      </main>
    </div>
  );
}

function Up() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-arrow-up"
    >
      <line x1={12} y1={19} x2={12} y2={5} />
      <polyline points="5 12 12 5 19 12" />
    </svg>
  );
}

function Down() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-arrow-down"
    >
      <line x1={12} y1={5} x2={12} y2={19} />
      <polyline points="19 12 12 19 5 12" />
    </svg>
  );
}
