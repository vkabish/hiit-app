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
        "title": "Twisting"
      },
      {
        "id": "3",
        "title": "Rock climber"
      },
      {
        "id": "4",
        "title": "Bicycle"
      },
      {
        "id": "5",
        "title": "Raising the legs lying"
      },
      {
        "id": "6",
        "title": "Twisting"
      },
      {
        "id": "7",
        "title": "Rock climber"
      },
      {
        "id": "8",
        "title": "Bicycle"
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
    "title": "Hips and buttocks",
    "description": "Training hips and buttocks muscles",
    "plan": [
      {
        "id": "1",
        "title": "Lunges forward"
      },
      {
        "id": "2",
        "title": "Lunges to the side"
      },
      {
        "id": "3",
        "title": "Lunges backward"
      },
      {
        "id": "4",
        "title": "Squats"
      },
      {
        "id": "5",
        "title": "Swing back with your right foot"
      },
      {
        "id": "6",
        "title": "Swing back with your right foot"
      },
      {
        "id": "7",
        "title": "Pelvic lift"
      },
      {
        "id": "8",
        "title": "Squats"
      }
    ],
    "settings": {
      "work": 20,
      "pause": 10,
      "roundes": 1,
      "rest": 120,
      "exercises": 8
    },
    "schedule": defaultSchedule
  }
];

export default programs;