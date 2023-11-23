import row from "../../assets/Row.png";
function Calendar() {
  return (
    <div className="calendar">
      <div className="CalendarOpen">
        <div className="Calendar-text">Calendar</div>
        <img src={row} alt="" />
      </div>

      <div className="SpaceCalendar"></div>
      <div className="Upcoming">
        <div className="Upcoming-text">Upcoming</div>
        <div className="View-link">View All</div>
      </div>
      <div className="box-time">
        <div className="icon-box">M</div>
        <div>
          <div className="box-title">Montly doctor’s meet</div>
          <div className="box-time">8 April, 2021 | 04:00 PM </div>
        </div>
      </div>
    </div>
  );
}

export default Calendar;
