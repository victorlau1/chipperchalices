// used in fetchCards within action to filter the most recently updated lifecycle statusDate from server response.

module.exports.getStatusDate = (jobCard) => {
  let lifecycleArr = jobCard.lifecycle;
  let mostRecent = lifecycleArr[lifecycleArr.length - 1];

  let statusDate = mostRecent.status_start_date || mostRecent.updated_at;

  if (statusDate.length > 10) {
    return statusDate.slice(0, -14);
  }

  return statusDate;
};