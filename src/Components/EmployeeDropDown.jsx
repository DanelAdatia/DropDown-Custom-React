import React, { useState, useEffect } from "react";
import Vector from "../assets/images/Vector.png";
import VectorTrue from "../assets/images/VectorTrue.png";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import "../assets/css/DropDown.css";
import EmployeeData from "../Data.json";

const EmployeeDropDown = () => {
  const [arrowShift, setArrowShift] = useState(false);
  const [allPractioners, setAllPractioners] = useState(false);
  const [isChecked, setIsChecked] = useState([]);
  const [checkIt, setCheckIt] = useState(false);

  const [allAssistants, setAllAssistants] = useState(false);
  const [isCheckedd, setIsCheckedd] = useState([]);
  const [checkItt, setCheckItt] = useState(false);

  const [search, setSearch] = useState("");

  const handleSingleCheck = (e) => {
    setCheckIt(false);
    const { name } = e.target;
    if (isChecked[name]) {
      setIsChecked(isChecked.filter((checked_name) => checked_name !== name));
      return setAllPractioners(false);
    }
    isChecked.push(name);
    setIsChecked([...isChecked]);
    setAllPractioners(isChecked.length === EmployeeData.practitioners.length);
  };

  const handleAllCheck = (e) => {
    setCheckIt(true);
    setAllPractioners(!allPractioners);
  };

  const handleSingleCheckk = (e) => {
    setCheckItt(false);
    const { name } = e.target;
    if (isCheckedd[name]) {
      setIsCheckedd(isCheckedd.filter((checked_name) => checked_name !== name));
      return setAllAssistants(false);
    }
    isCheckedd.push(name);
    setIsCheckedd([...isCheckedd]);
    setAllAssistants(isCheckedd.length === EmployeeData.assistants.length);
  };

  const handleAllCheckk = (e) => {
    setCheckItt(true);
    setAllAssistants(!allAssistants);
  };

  useEffect(() => {
    setIsChecked((current) => {
      const nextIsChecked = {};
      Object.keys(current).forEach((key) => {
        nextIsChecked[key] = allPractioners;
      });
      return nextIsChecked;
    });
  }, [allPractioners]);

  useEffect(() => {
    setIsCheckedd((current) => {
      const nextIsChecked = {};
      Object.keys(current).forEach((key) => {
        nextIsChecked[key] = allAssistants;
      });
      return nextIsChecked;
    });
  }, [allAssistants]);

  return (
    <div>
      <span className="dropdown-text">Select employee dropdown</span>

      <div className="dropdown-outer">
        <div className="dropdown-inner">
          <div className="dropdown-images">
            {EmployeeData.practitioners.map((imgs) => {
              return (
                <AvatarGroup
                  style={{
                    float: "left",
                    width: 12,
                    height: 20,
                  }}
                  max={3}
                  total={
                    EmployeeData.practitioners.length +
                    EmployeeData.assistants.length
                  }
                >
                  <Avatar
                    sx={{ width: 12, height: 20 }}
                    alt="Images"
                    src={imgs.img}
                  />
                </AvatarGroup>
              );
            })}
          </div>
          <div className="dropdown-textt">Select employee</div>
        </div>
        <div
          onClick={() => setArrowShift(!arrowShift)}
          className="dropdown-arrow"
        >
          {arrowShift === false ? (
            <img src={Vector} alt="vector" />
          ) : (
            <img src={VectorTrue} alt="vectorTrue" />
          )}
        </div>

        <div
          style={{ top: 70 }}
          className={
            arrowShift === false ? "dropdown-box" : "dropdown-box-true"
          }
        >
          <input
            className="Search"
            placeholder="Search employee..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <span className="All-Practioners">All Practioners</span>

          <input
            style={{ float: "right" }}
            type="checkbox"
            checked={allPractioners}
            onChange={handleAllCheck}
          />
          {EmployeeData.practitioners
            .filter((val) => {
              if (search === "") {
                return val;
              } else if (
                val.name
                  .toLocaleLowerCase()
                  .includes(search.toLocaleLowerCase())
              ) {
                return val;
              }
            })
            .map((data) => {
              return (
                <div>
                  <img src={data.img} className="images" alt="data" />
                  <span className="All-Practioners-data">{data.name}</span>
                  <input
                    style={{ float: "right" }}
                    type="checkbox"
                    name={data.name}
                    checked={
                      checkIt === true ? allPractioners : isChecked[data.name]
                    }
                    onChange={handleSingleCheck}
                  />
                </div>
              );
            })}
          <div>
            <span className="All-Practioners">All assistants</span>

            <input
              style={{ float: "right" }}
              type="checkbox"
              checked={allAssistants}
              onChange={handleAllCheckk}
            />
            {EmployeeData.assistants
              .filter((val) => {
                if (search === "") {
                  return val;
                } else if (
                  val.name
                    .toLocaleLowerCase()
                    .includes(search.toLocaleLowerCase())
                ) {
                  return val;
                }
              })
              .map((data) => {
                return (
                  <div>
                    <img src={data.img} className="images" alt="image2" />
                    <span className="All-Practioners-data">{data.name}</span>
                    <input
                      style={{ float: "right" }}
                      type="checkbox"
                      name={data.name}
                      checked={
                        checkItt === true
                          ? allAssistants
                          : isCheckedd[data.name]
                      }
                      onChange={handleSingleCheckk}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDropDown;
