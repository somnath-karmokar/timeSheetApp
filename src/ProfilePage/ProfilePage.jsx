import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { userActions } from "../_actions";
import { LeftComponent } from "../PartialComponents/LeftComponent";
import { HeaderComponent } from "../PartialComponents/HeaderComponent";
import { CalendarComponent } from "../PartialComponents/CalendarComponent";
import styles from "./ProfilePage.module.css";

function ProfilePage() {
  const users = useSelector((state) => state.users);
  const user = useSelector((state) => state.authentication.user);
  const dispatch = useDispatch();
  const [projeectShow, setProjctShow] = useState(false);
  const [projectList, setProjectList] = useState(null);
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
    setTimeEntry((timeEntry) => ({ ...timeEntry, [name]: Number(value) }));
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
        <form ref={formRef}>
          <table>
            <tbody>
              {projectList}
              <tr>
                <td>Total</td>
                <td>
                  <input type="text" />
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
