import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "../api/api";
import JobCardList from "../groups/GroupCardList";
import LoadingSpinner from "../common/LoadingSpinner";

/** Member Detail page.
 *
 * Renders information about member, along with the jobs at that member.
 *
 * Routed at /companies/:handle
 *
 * Routes -> MemberDetail -> JobCardList
 */

function MemberDetail() {
  const { handle } = useParams();
  console.debug("MemberDetail", "handle=", handle);

  const [member, setMember] = useState(null);

  useEffect(function getMemberAndJobsForUser() {
    async function getMember() {
      setMember(await JoblyApi.getMember(handle));
    }

    getMember();
  }, [handle]);

  if (!member) return <LoadingSpinner />;

  return (
      <div className="MemberDetail col-md-8 offset-md-2">
        <h4>{member.name}</h4>
        <p>{member.description}</p>
        <JobCardList jobs={member.jobs} />
      </div>
  );
}

export default MemberDetail;
