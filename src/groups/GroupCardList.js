import React from "react";
import GroupCard from "./GroupCard";

/** Show list of group cards.
 *
 * Used by both groupList and CompanyDetail to list groups. Receives an apply
 * func prop which will be called by GroupCard on apply.
 *
 * GroupList -> GroupCardList -> GroupCard
 * CompanyDetail -> GroupCardList -> GroupCard
 *
 */

function GroupCardList({ groups, apply }) {
  console.debug("GroupCardList", "groups=", groups);

  return (
      <div className="GroupCardList">
        {groups.map(group => (
            <GroupCard
                key={group.id}
                id={group.id}
                title={group.title}
                salary={group.salary}
                equity={group.equity}
                companyName={group.companyName}
            />
        ))}
      </div>
  );
}

export default GroupCardList;
