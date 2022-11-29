import React from "react";
import { Link } from "react-router-dom";

import "./MemberCard.css";

/** Show limited information about a member
 *
 * Is rendered by MemberList to show a "card" for each member.
 *
 * MemberList -> MemberCard
 */

function MemberCard({ name, description, logoUrl, handle }) {
  console.debug("MemberCard", logoUrl);

  return (
      <Link className="MemberCard card" to={`/members/${handle}`}>
        <div className="card-body">
          <h6 className="card-title">
            {name}
            {logoUrl && <img src={logoUrl}
                             alt={name}
                             className="float-right ml-5" />}
          </h6>
          <p><small>{description}</small></p>
        </div>
      </Link>
  );
}

export default MemberCard;
