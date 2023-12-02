// import React, { useState } from 'react';
// import Calenderstyles from './CalenderStyles.css';

// const Calendar1 = () => {
//   const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
//   const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);

//   const handleYearChange = (event) => {
//     setSelectedYear(parseInt(event.target.value));
//   };

//   const handleMonthChange = (event) => {
//     setSelectedMonth(parseInt(event.target.value));
//   };

//   const daysInMonth = (year, month) => {
//     return new Date(year, month + 1, 0).getDate();
//   };

//   const getMonthData = () => {
//     const year = selectedYear;
//     const month = selectedMonth - 1;

//     const firstDay = new Date(year, month, 1);
//     const lastDay = new Date(year, month, daysInMonth(year, month));

//     const startOffset = firstDay.getDay();
//     const endOffset = 6 - lastDay.getDay();

//     const totalDays = daysInMonth(year, month);
//     const prevMonthDays = daysInMonth(year, month - 1);

//     const data = [];
//     let day = 1;

//     // Add previous month's days
//     for (let i = prevMonthDays - startOffset + 1; i <= prevMonthDays; i++) {
//       data.push({ day: i, isCurrentMonth: false });
//     }

//     // Add current month's days
//     for (let i = 1; i <= totalDays; i++) {
//       data.push({ day: i, isCurrentMonth: true });
//     }

//     // Add next month's days
//     for (let i = 1; i <= endOffset; i++) {
//       data.push({ day: i, isCurrentMonth: false });
//     }

//     return data;
//   };

//   const handlePrevMonth = () => {
//     setSelectedMonth((prevMonth) => (prevMonth === 1 ? 12 : prevMonth - 1));
//   };

//   const handleNextMonth = () => {
//     setSelectedMonth((prevMonth) => (prevMonth === 12 ? 1 : prevMonth + 1));
//   };

//   const monthData = getMonthData();

//   return (
//     <div className="calendar">
//       <div className="calendar-header">
//         <button onClick={handlePrevMonth}>&lt;</button>
//         <select value={selectedMonth} onChange={handleMonthChange}>
//           {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
//             <option key={month} value={month}>
//               {new Date(2000, month - 1, 1).toLocaleString('default', { month: 'long' })}
//             </option>
//           ))}
//         </select>
//         <select value={selectedYear} onChange={handleYearChange}>
//           {Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - 50 + i).map((year) => (
//             <option key={year} value={year}>
//               {year}
//             </option>
//           ))}
//         </select>
//         <button onClick={handleNextMonth}>&gt;</button>
//       </div>
//       <div className="calendar-grid">
//         {monthData.map((dayData, index) => (
//           <div
//             key={index}
//             className={`calendar-day ${dayData.isCurrentMonth ? 'current-month' : 'other-month'}`}
//           >
//             {dayData.day}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// const Card_calender = () => {
//   return (
//     <div className="card">
//       <div className="card-header">
//         <h2>Calendar Card</h2>
//       </div>
//       <div className="card-content">
//         <Calendar1 />
//       </div>
//     </div>
//   );
// };

// const App1 = () => {
//   return (
//     <div className="app">
//       <Card_calender />
//     </div>
//   );
// };

// export default App1;

// App.js

// Calendar.js

// import React, { useState } from 'react';
// import './CalenderStyles.css';

// const Calendar1 = () => {
//   const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
//   const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);
//   const [selectedDay, setSelectedDay] = useState(null);
//   const [newTask, setNewTask] = useState('');
//   const [tasks, setTasks] = useState({});

//   const handleYearChange = (event) => {
//     setSelectedYear(parseInt(event.target.value));
//   };

//   const handleMonthChange = (event) => {
//     setSelectedMonth(parseInt(event.target.value));
//   };

//   const daysInMonth = (year, month) => {
//     return new Date(year, month + 1, 0).getDate();
//   };
//   const handlePrevMonth = () => {
//     setSelectedMonth((prevMonth) => (prevMonth === 1 ? 12 : prevMonth - 1));
//   };

//   const handleNextMonth = () => {
//     setSelectedMonth((prevMonth) => (prevMonth === 12 ? 1 : prevMonth + 1));
//   };

//   const getMonthData = () => {
//     const firstDay = new Date(selectedYear, selectedMonth - 1, 1);
//     const totalDays = daysInMonth(selectedYear, selectedMonth);
//     const startOffset = firstDay.getDay();

//     const data = [];
//     let day = 1;

//     for (let i = 0; i < 6; i++) {
//       const week = [];
//       for (let j = 0; j < 7; j++) {
//         if (i === 0 && j < startOffset) {
//           week.push({ day: null, isCurrentMonth: false });
//         } else if (day > totalDays) {
//           week.push({ day: null, isCurrentMonth: false });
//         } else {
//           week.push({ day, isCurrentMonth: true });
//           day++;
//         }
//       }
//       data.push(week);
//     }

//     return data;
//   };

//   const handleDayClick = (day) => {
//     setSelectedDay(day);
//   };

//   const handleAddTask = () => {
//     if (selectedDay) {
//       const key = `${selectedYear}-${selectedMonth}-${selectedDay}`;
//       const newTasks = { ...tasks };
//       newTasks[key] = [...(newTasks[key] || []), newTask];
//       setTasks(newTasks);
//       setNewTask('');
//     }
//   };

//   const monthData = getMonthData();

//   return (
//     <div className="app">
//       <div className="card">
//         <div className="card-header">
//           <h2>Calendar Card</h2>
//         </div>
//         <div className="card-content">
//           {selectedDay ? (
//             <div className="task-section">
//               <p>Tasks for {selectedDay}/{selectedMonth}/{selectedYear}</p>
//               <input
//                 type="text"
//                 value={newTask}
//                 onChange={(e) => setNewTask(e.target.value)}
//                 placeholder="Add a new task"
//               />
//               <button onClick={handleAddTask}>Add Task</button>
//               <div>
//                 {tasks[`${selectedYear}-${selectedMonth}-${selectedDay}`] &&
//                   tasks[`${selectedYear}-${selectedMonth}-${selectedDay}`].map((task, index) => (
//                     <div key={index}>{task}</div>
//                   ))}
//               </div>
//               <button onClick={() => setSelectedDay(null)}>Back to Calendar</button>
//             </div>
//           ) : (
//             <div className="calendar">
//               <div className="calendar-header">
//                 <button onClick={handlePrevMonth}>&lt;</button>
//                 <select value={selectedMonth} onChange={handleMonthChange}>
//                   {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
//                     <option key={month} value={month}>
//                       {new Date(2000, month - 1, 1).toLocaleString('default', { month: 'long' })}
//                     </option>
//                   ))}
//                 </select>
//                 <select value={selectedYear} onChange={handleYearChange}>
//                   {Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - 50 + i).map((year) => (
//                     <option key={year} value={year}>
//                       {year}
//                     </option>
//                   ))}
//                 </select>
//                 <button onClick={handleNextMonth}>&gt;</button>
//               </div>
//               <div className="calendar-grid">
//                 {monthData.map((week, weekIndex) => (
//                   <div key={weekIndex} className="calendar-week">
//                     {week.map((dayData, dayIndex) => (
//                       <div
//                         key={dayIndex}
//                         className={`calendar-day ${dayData.isCurrentMonth ? 'current-month' : 'other-month'}`}
//                         onClick={() => handleDayClick(dayData.day)}
//                       >
//                         {dayData.day}
//                       </div>
//                     ))}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Calendar1;


import React, { useState } from 'react';
import './CalenderStyles.css'; 

const Calendar1 = () => {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);
  const [selectedDay, setSelectedDay] = useState(null);
  const [tasks, setTasks] = useState({});
  const [newTask, setNewTask] = useState('');

  const handleYearChange = (event) => {
    setSelectedYear(parseInt(event.target.value));
  };

  const handleMonthChange = (event) => {
    setSelectedMonth(parseInt(event.target.value));
  };

  const handleDayClick = (day) => {
    setSelectedDay(day);
    setNewTask('');
  };

  const handleAddTask = () => {
    if (selectedDay) {
      setTasks((prevTasks) => ({
        ...prevTasks,
        [`${selectedYear}-${selectedMonth}-${selectedDay}`]: newTask,
      }));
    }
  };

  const daysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getMonthData = () => {
    const year = selectedYear;
    const month = selectedMonth - 1;

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month, daysInMonth(year, month));

    const startOffset = firstDay.getDay();
    const endOffset = 6 - lastDay.getDay();

    const totalDays = daysInMonth(year, month);
    const prevMonthDays = daysInMonth(year, month - 1);

    const data = [];
    let day = 1;

    // Add previous month's days
    for (let i = prevMonthDays - startOffset + 1; i <= prevMonthDays; i++) {
      data.push({ day: i, isCurrentMonth: false });
    }

    // Add current month's days
    for (let i = 1; i <= totalDays; i++) {
      data.push({ day: i, isCurrentMonth: true });
    }

    // Add next month's days
    for (let i = 1; i <= endOffset; i++) {
      data.push({ day: i, isCurrentMonth: false });
    }

    return data;
  };

  return (
    <div className="calendar">
      <div className="calendar-controls">
        <select value={selectedMonth} onChange={handleMonthChange}>
          {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
            <option key={month} value={month}>
              {new Date(2000, month - 1, 1).toLocaleString('default', { month: 'long' })}
            </option>
          ))}
        </select>
        <select value={selectedYear} onChange={handleYearChange}>
          {Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - 50 + i).map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      <div className="calendar-grid">
        {getMonthData().map((dayData, index) => (
          <div
            key={index}
            className={`calendar-day ${dayData.isCurrentMonth ? 'current-month' : 'other-month'}`}
            onClick={() => handleDayClick(dayData.day)}
          >
            {dayData.day}
          </div>
        ))}
      </div>
      {selectedDay && (
        <div className="task-form">
          <textarea
            placeholder="Add a task..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button onClick={handleAddTask}>Add Task</button>
        </div>
      )}
      {selectedDay && tasks[`${selectedYear}-${selectedMonth}-${selectedDay}`] && (
        <div className="task-display">
          <h3>Tasks for {selectedYear}-{selectedMonth}-{selectedDay}</h3>
          <p>{tasks[`${selectedYear}-${selectedMonth}-${selectedDay}`]}</p>
        </div>
      )}
    </div>
  );
};

export default Calendar1;

