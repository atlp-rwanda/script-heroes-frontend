import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import AccommodationPage from "../components/accommodation/addAccommodation";
import UpdateAccomodationsPage from "../components/accommodation/editAccommodation";
import { getLocations } from "../../redux/actions/locations";
import { getAccommodation } from "../../redux/actions/accommodation";

const AccommodationPages = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLocations());
  }, [dispatch]);
  return <AccommodationPage />;
};

const EditAccomodation = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLocations());
    dispatch(getAccommodation());
  }, [dispatch]);

  return <UpdateAccomodationsPage />;
};

export { AccommodationPages, EditAccomodation };
