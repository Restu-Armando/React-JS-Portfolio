import React from 'react'

const TechBadge = ({ logo, name }) => (
  <div className="d-inline-flex align-items-center border border-secondary rounded-pill px-3 py-2  shadow-sm me-3 mb-3">
    <img
      src={logo}
      alt={`${name} Logo`}
      width={20}
      height={20}
      className="me-2"
    />
    <span className="fw-medium text-secondary badge-text">{name}</span>
  </div>
)

export default TechBadge
