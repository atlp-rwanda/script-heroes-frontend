import React, { useEffect } from "react";
import EditTravelRequest from "../components/requests/editTravelRequest";
import { useDispatch } from "react-redux";

import { getLocations } from "../../redux/actions/locations";
import { getAccommodation } from "../../redux/actions/accommodation";
import { GetUserTripRequests } from "../../redux/actions/tripRequest";

const EditTravelRequestComponent = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLocations());
    dispatch(getAccommodation());
    dispatch(GetUserTripRequests());
  }, [dispatch]);
  return <EditTravelRequest />;
};

export default EditTravelRequestComponent;
