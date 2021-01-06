const validate = (state) => {
  let errors = {};
  if (!state.location) {
    errors.locationError = 'Location is required';
  }
  if (!state.destination) {
    errors.destinationError = 'Destination is required';
  }
  if (!state.start) {
    errors.startError = 'Start Date is required';
  }
  if (!state.end) {
    errors.endError = 'End Date is required';
  }
  if (!state.reason) {
    errors.reasonError = 'Travel Reason is required';
  }
  if (!state.accomodation) {
    errors.accomodationError = 'Accommodation is required';
  }
  return errors;
};
export default validate;
