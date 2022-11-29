import React, { useContext, useState } from "react";
import "./GroupCard.css";
import UserContext from "../auth/UserContext";

/** Show limited information about a group  .
 *
 * Is rendered by GroupCardList to show a "card" for each group.
 *
 * Receives apply func prop from parent, which is called on apply.
 *
 * GroupCardList -> GroupCard
 */

function GroupCard({ id, title, salary, equity, companyName }) {
  console.debug("GroupCard");

  const { hasAppliedToGroup, applyToGroup } = useContext(UserContext);
  const [applied, setApplied] = useState();

  React.useEffect(function updateAppliedStatus() {
    console.debug("GroupCard useEffect updateAppliedStatus", "id=", id);

    setApplied(hasAppliedToGroup(id));
  }, [id, hasAppliedToGroup]);

  /** Apply for a group */
  async function handleApply(evt) {
    if (hasAppliedToGroup(id)) return;
    applyToGroup(id);
    setApplied(true);
  }

  return (
      <div className="GroupCard card"> {applied}
        <div className="card-body">
          <h6 className="card-title">{title}</h6>
          <p>{memberName}</p>
          {salary && <div><small>Salary: {formatSalary(salary)}</small></div>}
          {equity !== undefined && <div><small>Equity: {equity}</small></div>}
          <button
              className="btn btn-danger font-weight-bold text-uppercase float-right"
              onClick={handleApply}
              disabled={applied}
          >
            {applied ? "Applied" : "Apply"}
          </button>
        </div>
      </div>
  );
}

/** Render integer salary like '$1,250,343' */

function formatSalary(salary) {
  const digitsRev = [];
  const salaryStr = salary.toString();

  for (let i = salaryStr.length - 1; i >= 0; i--) {
    digitsRev.push(salaryStr[i]);
    if (i > 0 && i % 3 === 0) digitsRev.push(",");
  }

  return digitsRev.reverse().join("");
}


export default GroupCard;
