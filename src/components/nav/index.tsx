import "./nav.css";
import {
  FiSearch,
  FiHome,
  FiInbox,
  FiGitPullRequest,
  FiUsers,
  FiChevronRight,
  FiChevronLeft,
  FiChevronDown,
} from "react-icons/fi";
import UserBtn from "../users";
import FCMB from "../../icon.png";
import { useEffect, useRef, useState } from "react";

const users = [
  { name: "pn", color: "cyan" },
  { name: "ji", color: "green" },
  { name: "lg", color: "blue" },
  { name: "aw", color: "red" },
];

export default function Nav() {
  const [subnav, setSubnav] = useState(1);
  const [page, setPage] = useState(1);
  const [more, setMore] = useState(false);
  const [open, setOpen] = useState(false);
  const indicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (indicatorRef?.current === null) return;

    indicatorRef.current.style.top = 34 * (subnav - 1) + "px";
  }, [indicatorRef, subnav]);

  useEffect(() => {
    if (!open) setSubnav(1);
  }, [open]);

  function changePage(n: number) {
    setPage(n);
  }

  return (
    <div
      className="nav-container"
      style={{
        width: more ? "300px" : "80px",
      }}
    >
      <nav className={`main-nav`}>
        <button className="main-nav--btn-1">
          <Code />
        </button>
        <button className="main-nav--btn-2">
          <FiSearch />
        </button>

        {/* pages */}
        <div className="pages">
          <button
            className={`pages--btn ${page === 1 ? "active" : ""}`}
            onClick={() => changePage(1)}
          >
            <FiHome />
          </button>
          <button
            className={`pages--btn ${page === 2 ? "active" : ""}`}
            onClick={() => changePage(2)}
          >
            <FiInbox />
          </button>
          <button
            className={`pages--btn ${page === 3 ? "active" : ""}`}
            onClick={() => changePage(3)}
          >
            <FiGitPullRequest />
          </button>
          <button
            className={`pages--btn ${page === 4 ? "active" : ""}`}
            onClick={() => changePage(4)}
          >
            <FiUsers />
          </button>
          <button
            className={`pages--btn ${page === 5 ? "active" : ""}`}
            onClick={() => changePage(5)}
          >
            <Wallet />
          </button>
        </div>

        {/* users */}
        <div className="users">
          {users.map((user) => (
            <UserBtn key={user.name} {...user} />
          ))}
        </div>

        {/* open/close */}
        <button
          className={`open-close-btn ${more ? "open" : "close"}`}
          onClick={() => setMore((s) => !s)}
        >
          <FiChevronRight />
        </button>
      </nav>

      {/* second nav */}
      <div
        className={`sec-nav`}
        style={{
          width: more ? "100%" : "0",
          display: more ? "block" : "none",
        }}
      >
        {/* second nav header */}
        <div className="sec-nav--header">
          <button>
            <FiChevronLeft />
          </button>
          <div>
            <img src={FCMB} alt="" />
            <p>FCMB: Mobile Application</p>
          </div>
        </div>
        {/* second nav content */}
        <div className="content">
          <p className="workflow">Workflows</p>

          <button className="product-btn">
            <span>Product dev</span>
            <FiChevronDown />
          </button>

          <div className={`sub-nav`}>
            <button
              className={`sub-nav-dropdown  ${open ? "open" : ""}`}
              onClick={() => setOpen((s) => !s)}
            >
              <span>Overview</span>
              <Chevron />
            </button>
            {open && (
              <ul>
                <div className="indicator" ref={indicatorRef}></div>
                <button
                  className={`li ${subnav === 1 ? "active" : ""}`}
                  onClick={() => setSubnav(1)}
                >
                  Project stats
                </button>
                <button
                  className={`li ${subnav === 2 ? "active" : ""}`}
                  onClick={() => setSubnav(2)}
                >
                  Planning
                </button>
                <button
                  className={`li ${subnav === 3 ? "active" : ""}`}
                  onClick={() => setSubnav(3)}
                >
                  Teamwork
                </button>
                <button
                  className={`li ${subnav === 4 ? "active" : ""}`}
                  onClick={() => setSubnav(4)}
                >
                  Team health
                </button>
                <button
                  className={`li ${subnav === 5 ? "active" : ""}`}
                  onClick={() => setSubnav(5)}
                >
                  Investment
                </button>
              </ul>
            )}
            <a href="/">Action centre</a>
            <a href="/">Apps</a>
            <a href="/">Tasks</a>
            <a href="/">Code review</a>
            <a href="/">QA review</a>
            <a href="/">Notes</a>
          </div>
        </div>
      </div>
    </div>
  );
}

function Code() {
  return (
    <svg
      width={12}
      height={16}
      viewBox="0 0 12 16"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.15638 4.41454L2.14281 4.40535L2.16216 4.39219L2.17588 4.40138L2.15638 4.41454ZM2.2011 6.07568L2.21272 4.5815L6.2381 1.85988L8.16941 3.10868L10.5096 4.60741L10.5194 6.02996L11.7952 5.21401L11.7826 3.58887L8.72566 1.63114L6.20307 0L0.945033 3.55495L0.929871 5.21401L2.2011 6.07568Z"
        fill="inherit"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.15629 11.5244L2.14271 11.5153L2.16206 11.5021L2.17578 11.5113L2.15629 11.5244ZM0.909973 10.6988L0.931273 12.3239L6.19688 15.8678L11.7874 12.3239L11.7937 10.6988L10.5182 9.88406L10.5133 11.2948L6.23344 14.0079L2.20221 11.2948L2.1947 9.94523L0.909973 10.6988Z"
        fill="inherit"
      />
    </svg>
  );
}

function Wallet() {
  return (
    <svg
      width="{16}"
      height="{14}"
      viewBox="0 0 16 14"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.2453 2.96V1.48018L4.27321 1.47982V2.95965L14.2453 2.96ZM14.2454 8.87892L14.2452 5.17995L4.27311 5.17958L4.27338 8.87855L14.2454 8.87892ZM14.2453 0.000362697C15.0323 0.000362697 15.6699 0.661815 15.6699 1.48019L15.67 8.87892C15.67 9.69733 15.0326 10.3587 14.2454 10.3587L4.27338 10.3584C3.48627 10.3584 2.84877 9.69696 2.84877 8.87855L2.85573 1.47982C2.85573 0.661452 3.48609 0 4.27321 0L14.2453 0.000362697ZM1.4246 11.8397H12.1091V13.3195L1.42477 13.3191C0.637667 13.3191 0.00017093 12.6576 0.00017093 11.8393L0 3.70064H1.4246V11.8397Z"
        fill="inherit"
        fillOpacity="0.8"
      />
    </svg>
  );
}

function Chevron() {
  return (
    <svg
      width={13}
      height={9}
      viewBox="0 0 13 9"
      fill="#03293D"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.742365 2.3565C0.0553655 1.362 0.761866 -5.14542e-07 1.96637 -4.61891e-07L11.0399 -6.52759e-08C12.2444 -1.26255e-08 12.9509 1.362 12.2639 2.3565L8.33836 8.0325C8.13342 8.32982 7.85931 8.5729 7.53962 8.74082C7.21993 8.90874 6.86423 8.99647 6.50312 8.99647C6.14201 8.99647 5.7863 8.90874 5.46661 8.74082C5.14692 8.5729 4.87281 8.32982 4.66787 8.0325L0.742365 2.3565Z"
        fill="inherit"
        fillOpacity="0.25"
      />
    </svg>
  );
}
