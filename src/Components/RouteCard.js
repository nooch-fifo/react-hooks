/*

STARTED WORKING ON NEW LANDING PAGE FOR UPDATED PORTFOLIO. UNRELEASED/UNUSED.

*/

import { Col } from "react-bootstrap";

const RouteCard = ({ header, description, image }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={image} alt=""/>
        <div className="proj-txtx">
          <h4 className="text-primary">{header}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}

export default RouteCard;