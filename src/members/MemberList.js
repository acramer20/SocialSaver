import React, { useState, useEffect } from "react";
import SearchForm from "../common/SearchForm";
import JoblyApi from "../api/api";
import MemberCard from "./MemberCard";
import LoadingSpinner from "../common/LoadingSpinner";

/** Show page with list of member.
 *
 * On mount, loads members from API.
 * Re-loads filtered members on submit from search form.
 *
 * This is routed to at /members
 *
 * Routes -> { MemberCard, SearchForm }
 */

function MemberList() {
  console.debug("MemberList");

  const [members, setMembers] = useState(null);

  useEffect(function getMembersOnMount() {
    console.debug("MemberList useEffect getMembersOnMount");
    search();
  }, []);

  /** Triggered by search form submit; reloads members. */
  async function search(name) {
    let members = await JoblyApi.getMembers(name);
    setMembers(members);
  }

  if (!members) return <LoadingSpinner />;

  return (
      <div className="MemberList col-md-8 offset-md-2">
        <SearchForm searchFor={search} />
        {members.length
            ? (
                <div className="MemberList-list">
                  {members.map(c => (
                      <MemberCard
                          key={m.handle}
                          handle={m.handle}
                          name={m.name}
                          description={m.description}
                          logoUrl={m.logoUrl}
                      />
                  ))}
                </div>
            ) : (
                <p className="lead">Sorry, no results were found!</p>
            )}
      </div>
  );
}

export default MemberList;
