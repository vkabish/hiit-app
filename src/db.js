const defaultSchedule = [
  {
    "id": "0",
    "title": "Monday",
    "time": "12:00",
    "active": 0
  },
  {
    "id": "1",
    "title": "Tuesday",
    "time": "12:00",
    "active": 0
  },
  {
    "id": "2",
    "title": "Wednesday",
    "time": "12:00",
    "active": 0
  },
  {
    "id": "3",
    "title": "Thursday",
    "time": "12:00",
    "active": 0
  },
  {
    "id": "4",
    "title": "Friday",
    "time": "12:00",
    "active": 0
  },
  {
    "id": "5",
    "title": "Saturday",
    "time": "12:00",
    "active": 0
  },
  {
    "id": "6",
    "title": "Sunday",
    "time": "12:00",
    "active": 0
  }
];

const programs = [
  {
    "id": "0",
    "title": "Abdominal muscles",
    "description": "Training abdominal muscles",
    "plan": [
      {
        "id": "1",
        "title": "Raising the legs lying"
      },
      {
        "id": "2",
        "title": "twisting"
      },
      {
        "id": "3",
        "title": "rock climber"
      },
      {
        "id": "4",
        "title": "bicycle"
      },
      {
        "id": "5",
        "title": "Raising the legs lying"
      },
      {
        "id": "6",
        "title": "twisting"
      },
      {
        "id": "7",
        "title": "rock climber"
      },
      {
        "id": "8",
        "title": "bicycle"
      }
    ],
    "settings": {
      "work": 20,
      "pause": 10,
      "roundes": 2,
      "rest": 30,
      "exercises": 8
    },
    "schedule": defaultSchedule
  },
  {
    "id": "1",
    "title": "Abdominal muscles",
    "description": "Training abdominal muscles",
    "plan": [
      {
        "id": "1",
        "title": "Raising the legs lying"
      },
      {
        "id": "2",
        "title": "twisting"
      },
      {
        "id": "3",
        "title": "rock climber"
      },
      {
        "id": "4",
        "title": "bicycle"
      },
      {
        "id": "5",
        "title": "Raising the legs lying"
      },
      {
        "id": "6",
        "title": "twisting"
      },
      {
        "id": "7",
        "title": "rock climber"
      },
      {
        "id": "8",
        "title": "bicycle"
      }
    ],
    "settings": {
      "work": 45,
      "pause": 15,
      "roundes": 3,
      "rest": 120,
      "exercises": 8
    },
    "schedule": defaultSchedule
  }
];

export default programs;