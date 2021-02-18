import React, { useEffect } from "react";
import TravelRequest from "../components/requests/travelRequest";
import { useDispatch } from "react-redux";

import { getLocations } from "../../redux/actions/locations";
import { getAccommodation } from "../../redux/actions/accommodation";

const CreateTravelRequest = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLocations());
    dispatch(getAccommodation());
  }, [dispatch]);
  return <TravelRequest />;
};

export default CreateTravelRequest;
