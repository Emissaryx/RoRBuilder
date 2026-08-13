import { Link } from 'react-router-dom';

const RoRHeader = () => (
  <nav className="navbar ror-builder-navbar" aria-label="Main navigation">
    <div className="navbar-brand">
      <Link className="navbar-item ror-builder-brand" to="/">
        RoR Build Planner
      </Link>
    </div>
    <div className="navbar-menu is-active">
      <div className="navbar-start">
        <Link className="navbar-item" to="/">
          Build Planner
        </Link>
        <Link className="navbar-item" to="/mastery">
          Mastery Builder
        </Link>
      </div>
      <div className="navbar-end">
        <a
          className="navbar-item"
          href="https://killboard.returnofreckoning.com/"
        >
          Killboard
        </a>
      </div>
    </div>
  </nav>
);

export default RoRHeader;
