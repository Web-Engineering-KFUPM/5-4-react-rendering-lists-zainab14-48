/*
   SETUP INSTRUCTIONS
   ---------------------------------------------------------
   1️ Open your VS Code terminal.
   2️ Navigate into the lab directory:
         cd 5-4-react-rendering-lists
   3️ Install dependencies:
         npm i
         (or)
         npm install
   4️ Start the development server:
         npm run dev

   ⚠️ If you get an error like “running scripts is disabled” or
      the system blocks npm commands, run this first:
         Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
      Then re-run your npm commands.

   =========================================================
   TASK 1 — Render Course Components (STUDENTS DO THIS)
   File: src/App.jsx
   ---------------------------------------------------------
   GOAL:
   Display all courses dynamically using .map() and <CourseCard />.

   STEPS:
   1️ Use the `courses` state variable (array of course objects).
   2️ Inside <section className="grid">, use:
         courses.map((course, idx) => ...)
   3️ For each course, render:
         <CourseCard ... />
   4️ Pass these props:
         - key={course.id}
         - course={course}
         - index={idx}
         - onMutateCourse={mutateCourseByIndex}

   LINE REFERENCE:
   → Go to the <section className="grid"> block near the bottom of App.jsx.
     Replace the TODO comment with your .map() code.
*/

import { useState } from "react";
import { sampleCourses } from "./data";
import CourseCard from "./components/CourseCard";
import "./index.css";

export default function App() {
  const [courses, setCourses] = useState(sampleCourses);

  // Helper function (no need to edit this)
  function mutateCourseByIndex(index, updater) {
    setCourses((cs) =>
      cs.map((c, i) => (i === index ? { ...c, tasks: updater(c.tasks) } : c))
    );
  }

  return (
    <main className="wrap">
      <header className="appHeader">
        <h1>
          Study Buddy <span className="blink">▍</span>
        </h1>
        <p className="subtitle">Lists • Keys • Conditional Rendering</p>
      </header>

      <section className="grid">
        {/* TODO (TASK 1): Render all courses using courses.map(...) */}

        {courses.map((course, idx) => (
          <CourseCard
            key={course.id}
            course={course}
            index={idx}
            onMutateCourse={mutateCourseByIndex}
          />
        ))}

      </section>
    </main>
  );
}