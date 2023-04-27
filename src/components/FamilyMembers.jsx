import React from 'react'
import { useSelector } from 'react-redux'

const FamilyMembers = () => {

    // Bring in currentPatient from the store
    const currentPatient = useSelector((state) => state.currentPatient.currentPatient)

  return (
    <div className='familyMembers'>
        <div className="familyMembersItems">
            <h1>Emergency Family Members</h1>
            <div className="familyMembers">
                {currentPatient.familyMembers.map((member, idx) => (
                    <div className='familyMember' key={idx}>
                        <div className="familyMemberInfo">
                            <p>Name:</p>
                            <h2>{member.name}</h2>
                        </div>
                        <div className="familyMemberInfo">
                            <p>Phone Number:</p>
                            <h3>{member.phoneNumber}</h3>
                        </div>
                        <div className="familyMemberInfo">
                            <p>Email: </p>
                            <h3>{member.email}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default FamilyMembers