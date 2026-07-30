document.addEventListener("DOMContentLoaded", function () {

  const calendarEl = document.getElementById("calendar");

  const calendar = new FullCalendar.Calendar(calendarEl, {

    initialView: "dayGridMonth",

    locale: "ja",

    height: "auto",

    events: [

      {
        title: "夏祭り公演",
        start: "2026-08-15"
      },

      {
        title: "北上みちのく芸能まつり",
        start: "2026-08-08"
      },

      {
        title: "奉納演舞",
        start: "2026-09-21"
      }

    ]

  });

  calendar.render();

});