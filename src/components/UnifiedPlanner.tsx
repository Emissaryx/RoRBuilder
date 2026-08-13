import { Loadout } from './loadout/Loadout';

const UnifiedPlanner = () => (
  <div className="container is-max-widescreen planner-page">
    <div className="planner-heading">
      <h1 className="title">Return of Reckoning Build Planner</h1>
      <p className="subtitle is-6">
        Plan and share gear, renown abilities, mastery paths, tactics, and
        morales as one complete build.
      </p>
    </div>
    <Loadout />
  </div>
);

export default UnifiedPlanner;
