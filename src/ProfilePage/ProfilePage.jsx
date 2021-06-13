import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { userActions } from "../_actions";
import { LeftComponent } from "../PartialComponents/LeftComponent";
import { HeaderComponent } from "../PartialComponents/HeaderComponent";
import { CalendarComponent } from "../PartialComponents/CalendarComponent";
import { isInteger, isFloat } from "../_helpers";
import styles from "./ProfilePage.module.css";

function ProfilePage() {
  const users = useSelector((state) => state.users);
  const user = useSelector((state) => state.authentication.user);
  const dispatch = useDispatch();
  const [projeectShow, setProjctShow] = useState(false);
  const [projectList, setProjectList] = useState(null);
  const [totalEntry, setTotalEntry] = useState(0);
  const formRef = useRef();

  const projectListData = [
    {
      projectName: "DateCode",
    },
    {
      projectName: "Backery",
    },
    {
      projectName: "News & Mags",
    },
  ];
  const currentDate = "12-Jun-2021";
  const projObj = projectListData.reduce(
    (acc, curr) => ((acc[curr.projectName] = 0), acc),
    {}
  );
  const [timeEntry, setTimeEntry] = useState({ ...projObj });

  function handleChange(e) {
    const { name, value } = e.target;
    if (!isNaN(value))
      setTimeEntry((timeEntry) => ({ ...timeEntry, [name]: Number(value) }));
    else e.target.value = "";
  }

  function createProjectList() {
    const projList = projectListData.map((proj) => (
      <tr key={proj.projectName}>
        <td>{proj.projectName}</td>
        <td>
          <input
            onChange={handleChange}
            name={proj.projectName}
            key={proj.projectName}
            type="text"
          />
        </td>
      </tr>
    ));
    setProjectList(projList);
  }

  useEffect(() => {
    dispatch(userActions.getAll());
  }, []);

  useEffect(() => {
    const total = Object.values(timeEntry).reduce((t, value) => t + value, 0);
    setTotalEntry(isFloat(total) ? total.toFixed(2) : total);
  }, [timeEntry]);

  function calDateClick(day) {
    setProjctShow(true);
    setTimeEntry({ ...projObj });
    createProjectList();
    formRef.current.reset();
  }

  return (
    <div className={styles.container}>
      <LeftComponent />
      <div className={styles.calendarContainer}>
        <CalendarComponent
          currentDate={currentDate}
          calDateClick={calDateClick}
        />
      </div>

      <div className={projeectShow ? styles.projectList : styles.projectList2}>
        <h2>Projects</h2>
        <form ref={formRef}>
          <table>
            <tbody>
              {projectList}
              <tr>
                <td>Total</td>
                <td>
                  <input type="text" value={totalEntry} readOnly={true} />
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
}

export { ProfilePage };
