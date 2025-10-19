// ==UserScript==
// @name         TaskTime
// @namespace    https://diligentrobots.io/
// @version      1.0.0
// @description  Overlay
// @match        https://fleet.diligentrobots.io/static/robodash/*
// @grant        none
// @updateURL    https://raw.githubusercontent.com/ibetternotbedead/userscript/main/script.js
// @downloadURL  https://raw.githubusercontent.com/ibetternotbedead/userscript/main/script.js

// ==/UserScript==

const spareBots = new Set([
  "86",
  "106",
  "8",
  "75",
  "115",
  "17",
  "107",
  "11",
  "30",
  "52",
  "44",
  "9",
  "32",
  "24",
  "114",
  "79",
  "63",
  "18",
  "15",
  "92",
  "122",
]);

const siteList = [
  {
    name: "Antelope Valley",
    number: "30",
    projectX: "project-3",
    env: "prod-2",
    "3pod": "Pod A",
    "4pod": "Pod A",
    "5pod": "Pod A",
  },
  {
    name: "CHLA",
    number: "14",
    projectX: "project-3",
    env: "prod-2",
    "3pod": "Pod A",
    "4pod": "Pod A",
    "5pod": "Pod A",
  },
  {
    name: "Montage",
    number: "17",
    projectX: "project-3",
    env: "prod-2",
    "3pod": "Pod A",
    "4pod": "Pod A",
    "5pod": "Pod A",
  },
  {
    name: "Cedars",
    number: "3",
    projectX: "project-3",
    env: "prod-2",
    "3pod": "Pod A",
    "4pod": "Pod A",
    "5pod": "Pod A",
  },
  {
    name: "Providence St John",
    number: "40",
    projectX: "project-3",
    env: "prod-2",
    "3pod": "Pod A",
    "4pod": "Pod A",
    "5pod": "Pod A",
  },
  {
    name: "Endeavor Elmhurst",
    number: "8",
    projectX: "diligent-robotics",
    env: "prod-2",
    "3pod": "Pod B",
    "4pod": "Pod B",
    "5pod": "Pod B",
  },
  {
    name: "Endeavor Edward",
    number: "9",
    projectX: "diligent-robotics",
    env: "prod-2",
    "3pod": "Pod B",
    "4pod": "Pod B",
    "5pod": "Pod B",
  },
  {
    name: "Northwestern Main",
    number: "12",
    projectX: "diligent-robotics",
    env: "prod-2",
    "3pod": "Pod B",
    "4pod": "Pod B",
    "5pod": "Pod E",
  },
  {
    name: "Endeavor Highland Park",
    number: "29",
    projectX: "diligent-robotics",
    env: "prod-2",
    "3pod": "Pod B",
    "4pod": "Pod B",
    "5pod": "Pod B",
  },
  {
    name: "ThedaCare Neenah",
    number: "32",
    projectX: "diligent-robotics",
    env: "prod-2",
    "3pod": "Pod B",
    "4pod": "Pod B",
    "5pod": "Pod B",
  },
  {
    name: "Northwestern Central Dupage",
    number: "38",
    projectX: "diligent-robotics",
    env: "prod-1",
    "3pod": "Pod B",
    "4pod": "Pod B",
    "5pod": "Pod B",
  },
  {
    name: "Mosaic St Joseph",
    number: "35",
    projectX: "diligent-robotics",
    env: "prod-1",
    "3pod": "Pod B",
    "4pod": "Pod B",
    "5pod": "Pod B",
  },
  {
    name: "Rochester Unity",
    number: "28",
    projectX: "diligent-robotics-project-1",
    env: "prod-3",
    "3pod": "Pod C",
    "4pod": "Pod C",
    "5pod": "Pod E",
  },
  {
    name: "Rochester General",
    number: "27",
    projectX: "diligent-robotics-project-1",
    env: "prod-2",
    "3pod": "Pod C",
    "4pod": "Pod C",
    "5pod": "Pod E",
  },
  {
    name: "THE Ohio State University",
    number: "36",
    projectX: "diligent-robotics-project-1",
    env: "prod-1",
    "3pod": "Pod C",
    "4pod": "Pod C",
    "5pod": "Pod C",
  },
  {
    name: "Valley Health VA",
    number: "18",
    projectX: "diligent-robotics-project-1",
    env: "prod-3",
    "3pod": "Pod C",
    "4pod": "Pod C",
    "5pod": "Pod C",
  },
  {
    name: "Mary Washington",
    number: "5",
    projectX: "diligent-robotics-project-1",
    env: "prod-2",
    "3pod": "Pod C",
    "4pod": "Pod C",
    "5pod": "Pod C",
  },
  {
    name: "Christiana Care",
    number: "6",
    projectX: "diligent-robotics-project-1",
    env: "prod-2",
    "3pod": "Pod C",
    "4pod": "Pod C",
    "5pod": "Pod C",
  },
  {
    name: "MUSC Shawn Jenkins",
    number: "42",
    projectX: "diligent-robotics-project-1",
    env: "prod-1",
    "3pod": "Pod C",
    "4pod": "Pod C",
    "5pod": "Pod C",
  },
  {
    name: "Carilion New River Valley",
    number: "45",
    projectX: "diligent-robotics-project-1",
    env: "prod-1",
    "3pod": "Pod C",
    "4pod": "Pod C",
    "5pod": "Pod C",
  },
  {
    name: "UTSW Cancer Center",
    number: "44",
    projectX: "diligent-robotics",
    env: "prod-1",
    "3pod": "Pod A",
    "4pod": "Pod D",
    "5pod": "Pod D",
  },
  {
    name: "UTSW-Dallas",
    number: "15",
    projectX: "diligent-robotics",
    env: "prod-2",
    "3pod": "Pod A",
    "4pod": "Pod D",
    "5pod": "Pod D",
  },
  {
    name: "El Paso Children",
    number: "43",
    projectX: "diligent-robotics-project-2",
    env: "prod-1",
    "3pod": "Pod B",
    "4pod": "Pod D",
    "5pod": "Pod D",
  },
  {
    name: "UTHSA",
    number: "41",
    projectX: "diligent-robotics",
    env: "prod-1",
    "3pod": "Pod B",
    "4pod": "Pod D",
    "5pod": "Pod D",
  },
  {
    name: "Shannon Health",
    number: "4",
    projectX: "diligent-robotics",
    env: "prod-2",
    "3pod": "Pod A",
    "4pod": "Pod D",
    "5pod": "Pod D",
  },
  {
    name: "UTMB",
    number: "21",
    projectX: "diligent-robotics",
    env: "prod-2",
    "3pod": "Pod C",
    "4pod": "Pod D",
    "5pod": "Pod D",
  },
  {
    name: "UChicago",
    number: "23",
    projectX: "diligent-robotics",
    env: "prod-2",
    "3pod": "Pod B",
    "4pod": "Pod D",
    "5pod": "Pod E",
  },
];

const buttonConfig = [
  { label: "All Mbot for Pod:" },
  {
    label: "Jira Forms",
    url: "https://diligentrobots.atlassian.net/jira/software/c/projects/DRM/form",
  },
  {
    label: "Incident Form",
    url: "https://diligentrobots.atlassian.net/jira/software/c/projects/DRM/form/560?from=directory",
  },
  {
    label: "Call Request",
    url: "https://diligentrobots.atlassian.net/jira/software/c/projects/DRM/form/529?from=directory",
  },
  {
    label: "Run books",
    url: "https://coda.io/d/Runbooks_d_A2-DtqJJR/Ops-Runbooks-Home-Page_su20ZBgR#Runbooks-Red-Team-View_tuyi_4z_",
  },
  {
    label: "ROC Coda",
    url: "https://coda.io/d/Robot-Operations-Center_dgAVnlqszp4/Autonomy-Phase_suLdgQth#_luqu3x52",
  },
  {
    label: "Common Commands",
    url: "https://docs.google.com/spreadsheets/d/1QBRl09EXI7lTIgEuPoGXlo6VBzPPFHLnVk-4JE6p5kg/edit?gid=1844596694#gid=1844596694",
  },
  {
    label: "Autoprio History",
    url: "https://apps.diligentrobots.io:4060/robotExclusions.html",
  },
];

const COLORS = {
  primary: "#39a3b6",
  backgroundDark: "#343a40",
  backgroundDarker: "#2e2e2e",
  white: "#ffffff",
  black: "#000000",
  warning: "#fff700",
  failure: "#ff0000",
  safe: "#17ff5d",
  secondary: "#22616d",
  risk: "#ff7708",
};

let ElevatorRobotIds = new Set();
let RobotData = new Map();
let busyRobotsArray = [];
let behaviorTimerMap = new Map();
let HardwareEstopRobots = new Set();
const actionTypeMap = new Map();
const timerMap = new Map();

const siteMappings = siteList.reduce((acc, site) => {
  if (!acc[site.pod]) acc[site.pod] = [];
  acc[site.pod].push(site);
  return acc;
}, {});

const filterState = {
  activePods: new Set(),
  tsOnly: false,
  selectedPodType: "4pod",
  siteMappings: {},
  robotStatus: { IDLE: false },
};

let permission = await Notification.requestPermission();

const notifiedRobots = new Set();
const activeNotifications = new Set();

const theadRow = document.querySelector("thead tr");

function getSessionId() {
  const sessionId = localStorage.getItem("persist:app");
  if (sessionId) {
    const parsedData = JSON.parse(sessionId);
    return parsedData.sessionId?.replace(/"/g, "") || null;
  }
  return window.sessionId || null;
}

function updateTableColors() {
  const rows = document.querySelectorAll("tbody tr");
  const busyRobotIds = busyRobotsArray.flat();

  rows.forEach((row) => {
    const statusDiv = row.querySelector("td:nth-child(3) .d-flex");
    const fcButton = row.querySelector(".fc-button");
    const ddButton = row.querySelector(".dd-button");

    if (statusDiv && fcButton && ddButton) {
      const robotIdText = statusDiv.textContent.trim();
      const robotIdMatch = robotIdText.match(/(\d+)$/);
      const robotId = robotIdMatch ? robotIdMatch[1] : null;

      if (robotId) {
        if (HardwareEstopRobots.has(robotId)) {
          fcButton.textContent = "E";
          fcButton.style.backgroundColor = "red";
          fcButton.style.color = COLORS.white;
          fcButton.classList.add("animated-button");
        } else {
          fcButton.textContent = "FC";
          fcButton.className = "fc-button";
          fcButton.style.padding = "10px 20px";
          fcButton.style.cursor = "pointer";
          fcButton.style.marginRight = "10px";
          fcButton.style.fontSize = "14px";
          fcButton.style.fontWeight = "bold";
          fcButton.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
          fcButton.style.textAlign = "center";
          fcButton.style.boxSizing = "border-box";
          fcButton.style.minWidth = "60px";
          fcButton.style.border = "none";
          fcButton.style.color = COLORS.white;
          fcButton.style.backgroundColor = COLORS.secondary;
          fcButton.style.borderRadius = "5px";
          fcButton.style.position = "relative";
          fcButton.classList.add("animated-button");
        }

        if (ElevatorRobotIds.has(robotId)) {
          ddButton.style.backgroundColor = "red";
          ddButton.style.color = COLORS.white;

          if (busyRobotIds.includes(robotId)) {
            ddButton.style.border = "2px solid yellow";
            ddButton.style.boxSizing = "border-box";
          }
        } else if (RobotData.has(robotId)) {
          const robotData = RobotData.get(robotId);
          const currentType = robotData.currentActionInfo?.type;
          const timerInfo = behaviorTimerMap.get(robotId);

          if (currentType === "takeelevator") {
            ddButton.style.backgroundColor = COLORS.white;
            ddButton.style.color = COLORS.black;
          } else if (timerInfo && timerInfo.type === currentType) {
            const elapsedTime = Date.now() - timerInfo.timestamp;

            if (elapsedTime > 600000) {
              ddButton.style.backgroundColor = COLORS.risk;
              ddButton.style.color = COLORS.black;
            } else {
              ddButton.style.backgroundColor = COLORS.backgroundDark;
              ddButton.style.color = COLORS.white;
            }
          } else {
            ddButton.style.backgroundColor = COLORS.backgroundDark;
            ddButton.style.color = COLORS.white;
          }
        } else {
          ddButton.style.backgroundColor = COLORS.backgroundDark;
          ddButton.style.border = "none";
          ddButton.style.color = COLORS.white;
        }
      }
    }
  });
}

async function fetchRobotData(sessionId) {
  const payload = { sessionId };

  try {
    const response = await fetch(
      "https://apps.diligentrobots.io:5001/asyncCall",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );

    const data = await response.json();

    if (data && Array.isArray(data.robots)) {
      ElevatorRobotIds.clear();
      RobotData.clear();
      busyRobotsArray = [];
      HardwareEstopRobots.clear();

      data.robots.forEach((robot) => {
        const match = robot.robotId.match(/moxi(\d+)/);
        if (!match) return;

        const elevatorId = match[1];
        const mapId = robot.map_frame_id
          ? robot.map_frame_id.match(/map(\d+)_/)?.[1]
          : null;

        RobotData.set(elevatorId, {
          auxSoc: robot.aux_battery.soc,
          fetchSoc: robot.fetch_battery.soc,
          mapFrameId: mapId,
          containersState: robot.containers_state,
          taskStatus: robot.task_status,
          semanticRoom: robot.semantic_room,
          currentActionInfo: robot.current_action_info,
        });

        const {
          containersState,
          taskStatus,
          currentActionInfo,
          semanticRoom,
          mapFrameId,
        } = RobotData.get(elevatorId);

        const isLoaded =
          containersState &&
          Object.values(containersState).some(
            (container) => container.status === "LOADED"
          );

        const isIdle = taskStatus === "IDLE";
        RobotData.set(elevatorId, {
          ...RobotData.get(elevatorId),
          forceVisible: isLoaded && isIdle,
        });

        if (
          taskStatus === "BUSY" &&
          (robot.triggered_alerts?.elevator_await_ask_user ||
            robot.triggered_alerts?.stair_detector)
        ) {
          ElevatorRobotIds.add(elevatorId);
        }

        if (taskStatus === "BUSY") {
          for (const [otherId, otherData] of RobotData.entries()) {
            if (
              otherId !== elevatorId &&
              otherData.taskStatus === "BUSY" &&
              otherData.semanticRoom === semanticRoom &&
              otherData.mapFrameId === mapId
            ) {
              busyRobotsArray.push(elevatorId, otherId);
            }
          }
        }

        if (currentActionInfo?.type) {
          const type = currentActionInfo.type;
          const prev = behaviorTimerMap.get(elevatorId);

          if (!prev || prev.type !== type) {
            behaviorTimerMap.set(elevatorId, {
              type,
              timestamp: Date.now(),
            });
          } else {
            behaviorTimerMap.set(elevatorId, {
              type,
              timestamp: prev.timestamp,
            });
          }
        } else {
          behaviorTimerMap.delete(elevatorId);
        }

        const hardwareEstop =
          robot.aggregated_estop_state?.hardware_estop?.value;
        if (hardwareEstop === true) {
          HardwareEstopRobots.add(elevatorId);
        }
      });

      updateTableColors();
      updateSocValues();
    } else {
      console.warn("Invalid robot data received");
    }
  } catch (error) {
    console.error("Error during asyncCall:", error);
  }
}

function updateSocValues() {
  const rows = document.querySelectorAll("tbody tr");

  rows.forEach((row) => {
    try {
      const statusDiv = row.querySelector("td:nth-child(3) .d-flex");
      const titleCell = row.querySelector("td.activity_tableCell__B55ET");
      const numberCell = row.querySelector("td.activity_tableCellHighlight__apWjX");
      const baseMbotUrl = "https://sitexx.diligentrobots.io/app/mbot";

      if (!titleCell || !numberCell || !statusDiv) return;

      const siteName = titleCell.textContent.trim();
      const siteNumber = getSiteNumber(siteName) || "UnknownNumber"; 
      const botNumber = numberCell.textContent.trim();
      let auxSocElement = row.querySelector(".aux-soc");
      let fetchSocElement = row.querySelector(".fetch-soc");
      let wrapper = row.querySelector(".soc-wrapper");

      if (!wrapper) {
        wrapper = document.createElement("td");
        wrapper.className = "soc-wrapper";
        wrapper.style.display = "flex";
        wrapper.style.alignItems = "center";
        wrapper.style.justifyContent = "center";
        row.insertBefore(wrapper, row.children[3] || null);
      } else {
        row.insertBefore(wrapper, row.children[3] || null);
      }

      if (!auxSocElement) {
        auxSocElement = document.createElement("div");
        auxSocElement.classList.add("soc-cell", "aux-soc");
        wrapper.appendChild(auxSocElement);
      }

      if (!fetchSocElement) {
        fetchSocElement = document.createElement("div");
        fetchSocElement.classList.add("soc-cell", "fetch-soc");
        wrapper.appendChild(fetchSocElement);
      }

      const socStyle = {
        cursor: "pointer",
        width: "40px",
        height: "40px",
        margin: "0 2px",
        borderRadius: "5px",
        display: "inline-block",
        textAlign: "center",
        lineHeight: "40px",
        fontSize: "18px",
        fontWeight: "bold",
        color: COLORS.white,
        backgroundColor: "transparent",
      };

      Object.assign(auxSocElement.style, socStyle);
      Object.assign(fetchSocElement.style, socStyle);

      if (statusDiv) {
        const robotIdText = statusDiv.textContent.trim();
        const robotIdMatch = robotIdText.match(/(\d+)$/);
        const robotId = robotIdMatch ? robotIdMatch[1] : null;

        if (robotId && RobotData.has(robotId)) {
          const { auxSoc, fetchSoc } = RobotData.get(robotId);
          const auxSocPercent = auxSoc * 100;
          const fetchSocPercent = fetchSoc * 100;

          const updateAuxSoc = (element, percent) => {
            let color;
            if (percent > 50) {
              color = COLORS.safe;
            } else if (percent > 40) {
              color = COLORS.warning;
            } else {
              color = COLORS.failure;
            }
            element.textContent = `${percent.toFixed(0)}%`;
            element.style.color = color;
          };

          const updateFetchSoc = (element, percent) => {
            let color;
            if (percent > 75) {
              color = COLORS.safe;
            } else if (percent > 65) {
              color = COLORS.warning;
            } else {
              color = COLORS.failure;
            }
            element.textContent = `${percent.toFixed(0)}%`;
            element.style.color = color;
          };

          if (row.style.display !== "none" && auxSocPercent < 39 && !row.auxAlertTriggered) {
            row.auxAlertTriggered = true;

            const auxNotification = new Notification(`SN${botNumber} ${siteName}`, {
              body: `WARNING low aux ${auxSocPercent.toFixed(0)}%`,
              icon: "https://fleet.diligentrobots.io/static/robodash/images/blue-gripper.png",
            });

            auxNotification.onclick = () => {
            if (siteNumber) {
              window.open(
                `${baseMbotUrl.replace("xx", siteNumber)}`,
                "_blank",
                "noopener,noreferrer,width=800,height=600"
              );
            }
            };
          } else if (auxSocPercent >= 39) {
            row.auxAlertTriggered = false;
          }

          if (row.style.display !== "none" && fetchSocPercent < 69 && !row.fetchAlertTriggered) {
            row.fetchAlertTriggered = true;

            const fetchNotification = new Notification(`SN${botNumber} ${siteName}`, {
              body: `WARNING low fetch ${fetchSocPercent.toFixed(0)}%`,
              icon: "https://fleet.diligentrobots.io/static/robodash/images/blue-gripper.png",
            });

            fetchNotification.onclick = () => {
          if (siteNumber) {
              window.open(
                `${baseMbotUrl.replace("xx", siteNumber)}`,
                "_blank",
                "noopener,noreferrer,width=800,height=600"
              );
            }
            };
          } else if (fetchSocPercent >= 69) {
            row.fetchAlertTriggered = false;
          }

          updateAuxSoc(auxSocElement, auxSocPercent);
          updateFetchSoc(fetchSocElement, fetchSocPercent);

          auxSocElement.style.display = "inline-block";
          fetchSocElement.style.display = "inline-block";
        } else {
          auxSocElement.style.display = "none";
          fetchSocElement.style.display = "none";
        }
      }
    } catch (error) {
      console.error("Error updating SOC values for row:", row, error);
    }
  });
}

function getSiteNumber(siteName) {
  for (const pod in siteMappings) {
    if (!siteMappings.hasOwnProperty(pod)) continue;
    const site = siteMappings[pod].find((s) => s.name === siteName);
    if (site) return site.number;
  }
  return null;
}

function getSiteByName(siteName) {
  for (const pod in siteMappings) {
    if (!siteMappings.hasOwnProperty(pod)) continue;
    const site = siteMappings[pod].find((s) => s.name === siteName);
    if (site) return site;
  }
}

function getSiteNameFromRow(row) {
  const tdWithTitle = row.querySelector("td[title]");
  return tdWithTitle ? tdWithTitle.getAttribute("title") : "";
}

function applyAllFilters() {
  const rows = document.querySelectorAll("tr.activity_tableRow__qiRKF");

  filterState.siteMappings = siteList.reduce((acc, site) => {
    const podName = site[filterState.selectedPodType];
    if (!acc[podName]) acc[podName] = [];
    acc[podName].push(site);
    return acc;
  }, {});

  const container = document.getElementById("notification-container");
  if (container) {
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
  }

  rows.forEach((row) => {
    const siteTitle = getSiteNameFromRow(row);

    let matchesPod = filterState.activePods.size === 0;
    for (const pod of filterState.activePods) {
      const sitesForPod = filterState.siteMappings[pod] || [];
      if (sitesForPod.some((site) => site.name === siteTitle)) {
        matchesPod = true;
        break;
      }
    }

    let matchesTS = true;
    if (filterState.tsOnly) {
      const cells = row.querySelectorAll("td");
      const thirdCell = cells[2];
      const fourthCell = cells[3];

      const thirdRed =
        thirdCell && getComputedStyle(thirdCell).color === "rgb(255, 0, 0)";
      const fourthYellowOrRed =
        fourthCell &&
        (getComputedStyle(fourthCell).color === "rgb(255, 247, 0)" ||
          getComputedStyle(fourthCell).color === "rgb(255, 0, 0)");

      const failedDiv = row.querySelector('div[title*="FAILED"]');
      const offlineDiv = row.querySelector('div[title*="OFFLINE"]');

      let lowAux = false,
        lowFetch = false,
        longSameAction = false;
      try {
        const auxCell = row.querySelector(".aux-soc");
        const fetchCell = row.querySelector(".fetch-soc");
        const aux = auxCell
          ? parseFloat(auxCell.textContent.replace("%", ""))
          : 100;
        const fetch = fetchCell
          ? parseFloat(fetchCell.textContent.replace("%", ""))
          : 100;
        lowAux = aux < 40;
        lowFetch = fetch < 70;

        const robotId = row
          .querySelector("td:nth-child(2)")
          ?.textContent?.trim();
        const currentActionType = row
          .querySelector("td:nth-child(5)")
          ?.textContent?.trim();
        if (robotId && currentActionType) {
          const lastAction = actionTypeMap.get(robotId);
          const lastTime = timerMap.get(robotId);
          if (lastAction === currentActionType) {
            if (Date.now() - lastTime > 900000) longSameAction = true;
          } else {
            actionTypeMap.set(robotId, currentActionType);
            timerMap.set(robotId, Date.now());
          }
        }
      } catch (e) {
        console.warn("Error evaluating row for low battery or same action", e);
      }

      const ddButton = row.querySelector(".button-container .dd-button");
      const ddColor = ddButton && getComputedStyle(ddButton).backgroundColor;
      const ddButtonIsRedOrOrange =
        ddColor === "rgb(255, 0, 0)" || ddColor === "rgb(255, 119, 8)";

      matchesTS =
        thirdRed ||
        fourthYellowOrRed ||
        failedDiv ||
        offlineDiv ||
        lowAux ||
        lowFetch ||
        longSameAction ||
        ddButtonIsRedOrOrange;
    }

    let matchesIdle = true;
    const statusCell = Array.from(
      row.querySelectorAll("td.activity_tableCell__B55ET")
    ).find((td) => td.title?.toLowerCase() === "idle");

    if (statusCell && filterState.robotStatus?.IDLE === false) {
      matchesIdle = false;
    }

    row.style.display =
      matchesPod && matchesTS && matchesIdle ? "table-row" : "none";

    const numberCell = row.querySelector(
      "td.activity_tableCellHighlight__apWjX"
    );
    const number = numberCell.textContent.trim();
    const robotData = RobotData.get(number);

    const forceVisible = robotData?.forceVisible && matchesPod;

    if (forceVisible) {
      row.style.display = "table-row";
      showNotification(`SN${number} is loaded while idle!`);
    }
  });
}

async function main() {
  let sessionId = getSessionId();
  while (!sessionId) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    sessionId = getSessionId();
  }

  await fetchRobotData(sessionId);

  const observer = new MutationObserver(() => {
    applyAllFilters();
  });

  const table = document.querySelector("table");
  observer.observe(table, { childList: true, subtree: true });

  function addButtonsToRows() {
    const baseDDUrl =
      "https://automate.dronedeploy.com/project/diligent-robotics/robots/moxi";
    const baseMbotUrl = "https://sitexx.diligentrobots.io/app/mbot";

    const rows = document.querySelectorAll("tr.activity_tableRow__qiRKF");

    rows.forEach((row) => {
      if (row.querySelector(".button-container")) return;

      const buttonContainer = document.createElement("div");
      buttonContainer.className = "button-container";
      buttonContainer.style.display = "flex";
      buttonContainer.style.alignItems = "center";
      buttonContainer.style.marginRight = "10px";

      const ddButton = document.createElement("button");
      ddButton.textContent = " DD ";
      ddButton.className = "dd-button";
      ddButton.classList.add("animated-button");
      Object.assign(ddButton.style, {
        padding: "10px 20px",
        cursor: "pointer",
        marginRight: "10px",
        fontSize: "14px",
        textAlign: "center",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        boxSizing: "border-box",
        minWidth: "60px",
        border: "none",
        fontWeight: "bold",
        color: COLORS.white,
        backgroundColor: COLORS.backgroundDark,
        borderRadius: "5px",
        position: "relative",
      });
      ddButton.addEventListener("click", () => {
        const numberCell = row.querySelector(
          "td.activity_tableCellHighlight__apWjX"
        );
        const titleCell = row.querySelector("td.activity_tableCell__B55ET");
        if (numberCell && titleCell) {
          const number = numberCell.textContent.trim();
          const siteName = titleCell.textContent.trim();
          const site = getSiteByName(siteName);
          if (site && site.projectX) {
            window.open(
              `https://automate.dronedeploy.com/project/${site.projectX}/robots/moxi${number}/dashboard/`,
              "_blank",
              "noopener,noreferrer,width=860,height=540"
            );
          }
        }
      });

      const mbotButton = document.createElement("button");
      mbotButton.textContent = "MB";
      mbotButton.className = "mbot-button";
      mbotButton.classList.add("animated-button");

      Object.assign(mbotButton.style, {
        padding: "10px 20px",
        cursor: "pointer",
        marginRight: "10px",
        fontSize: "14px",
        fontWeight: "bold",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        textAlign: "center",
        boxSizing: "border-box",
        minWidth: "60px",
        border: "none",
        color: COLORS.white,
        backgroundColor: COLORS.primary,
        borderRadius: "5px",
        position: "relative",
      });
      mbotButton.addEventListener("click", () => {
        const titleCell = row.querySelector("td.activity_tableCell__B55ET");
        if (titleCell) {
          const siteName = titleCell.textContent.trim();
          const siteNumber = getSiteNumber(siteName);
          if (siteNumber) {
            window.open(
              `${baseMbotUrl.replace("xx", siteNumber)}`,
              "_blank",
              "noopener,noreferrer,width=800,height=600"
            );
          }
        }
      });

      const fcButton = document.createElement("button");
      fcButton.textContent = "FC";
      fcButton.className = "fc-button";
      fcButton.classList.add("animated-button");
      Object.assign(fcButton.style, {
        padding: "10px 20px",
        cursor: "pointer",
        marginRight: "10px",
        fontSize: "14px",
        fontWeight: "bold",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        textAlign: "center",
        boxSizing: "border-box",
        minWidth: "60px",
        border: "none",
        color: COLORS.white,
        backgroundColor: COLORS.secondary,
        borderRadius: "5px",
        position: "relative",
      });
      fcButton.addEventListener("click", () => {
        const statusDiv = row.querySelector("td:nth-child(3) .d-flex");
        const titleCell = row.querySelector("td.activity_tableCell__B55ET");
        const siteName = titleCell ? titleCell.textContent.trim() : "";
        if (statusDiv) {
          const robotIdText = statusDiv.textContent.trim();
          const robotIdMatch = robotIdText.match(/(\d+)$/);
          const robotId = robotIdMatch ? robotIdMatch[1] : null;
          if (robotId) {
            const site = getSiteByName(siteName);
            if (site && site.env && RobotData.has(robotId)) {
              const mapFrameId = RobotData.get(robotId).mapFrameId;
              if (mapFrameId) {
                window.open(
                  `https://diligentrobots-${site.env}.fetchcore-cloud.com/management/#/maps/${mapFrameId}/published/robots`,
                  "_blank"
                );
              }
            }
          }
        }
      });

      buttonContainer.appendChild(ddButton);
      buttonContainer.appendChild(fcButton);
      buttonContainer.appendChild(mbotButton);

      function addICButton() {
        if (row.querySelector(".ic-button")) return;

        const icButton = document.createElement("button");
        icButton.textContent = "IC";
        icButton.className = "ic-button";
        icButton.classList.add("animated-button");
        Object.assign(icButton.style, {
          padding: "10px 20px",
          cursor: "pointer",
          marginRight: "10px",
          fontSize: "14px",
          fontWeight: "bold",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          textAlign: "center",
          boxSizing: "border-box",
          minWidth: "60px",
          border: "none",
          color: COLORS.white,
          backgroundColor: "#007bff",
          borderRadius: "5px",
          position: "relative",
        });

        icButton.addEventListener("click", () => {
          const titleCell = row.querySelector("td.activity_tableCell__B55ET");
          const numberCell = row.querySelector(
            "td.activity_tableCellHighlight__apWjX"
          );
          const siteName = titleCell
            ? titleCell.textContent.trim()
            : "Unknown Site";
          const siteNumber = getSiteNumber(siteName) || "UnknownNumber";
          const botNumber = numberCell
            ? numberCell.textContent.trim()
            : "UnknownSN";
          const clipboardText = `${siteName} Site${siteNumber} SN${botNumber} - `;

          navigator.clipboard
            .writeText(clipboardText)
            .then(() => console.log("Copied:", clipboardText))
            .catch((err) => console.error(err));

          window.open(
            "https://diligentrobots.atlassian.net/jira/software/c/projects/DRM/form/560?from=directory",
            "_blank",
            "noopener,noreferrer,width=800,height=600"
          );
        });

        buttonContainer.appendChild(icButton);
      }

      if (row.querySelector('div[title*="FAILED"]')) {
        addICButton();
      }

const failObserver = new MutationObserver(() => {
  const existingIC = row.querySelector(".ic-button");
  if (row.querySelector('div[title*="FAILED"]')) {
    if (!existingIC && row.style.display !== "none") {
      const titleCell = row.querySelector("td.activity_tableCell__B55ET");
      const numberCell = row.querySelector("td.activity_tableCellHighlight__apWjX");
      const siteName = titleCell ? titleCell.textContent.trim() : "Unknown Site";
      const siteNumber = getSiteNumber(siteName) || "UnknownNumber";
      const botNumber = numberCell ? numberCell.textContent.trim() : "UnknownSN";

      const site = getSiteByName(siteName);

      const notificationText = `${siteName} Site${siteNumber} SN${botNumber} - failed`;

      if (site && site.projectX) {
        const failedNotification = new Notification("Failed", {
          body: notificationText,
          icon: "https://fleet.diligentrobots.io/static/robodash/images/blue-gripper.png",
        });

        failedNotification.onclick = () => {
          window.open(
            `https://automate.dronedeploy.com/project/${site.projectX}/robots/moxi${botNumber}/dashboard/`,
            "_blank",
            "noopener,noreferrer,width=860,height=540"
          );
        };
        setTimeout(() => failedNotification.close(), 10 * 1000);
      }

      addICButton();
    }
  } else if (existingIC) {
    existingIC.remove();
  }
});

failObserver.observe(row, {
  childList: true,
  characterData: true,
  subtree: true,
});


      function addICButton2() {
        if (row.querySelector(".ic2-button")) return;

        const ic2Button = document.createElement("button");
        ic2Button.textContent = "IC";
        ic2Button.className = "ic2-button";
        ic2Button.classList.add("animated-button");
        Object.assign(ic2Button.style, {
          padding: "10px 20px",
          cursor: "pointer",
          marginRight: "10px",
          fontSize: "14px",
          fontWeight: "bold",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          textAlign: "center",
          boxSizing: "border-box",
          minWidth: "60px",
          border: "none",
          color: COLORS.white,
          backgroundColor: "#007bff",
          borderRadius: "5px",
          position: "relative",
        });

        ic2Button.addEventListener("click", () => {
          const titleCell = row.querySelector("td.activity_tableCell__B55ET");
          const numberCell = row.querySelector(
            "td.activity_tableCellHighlight__apWjX"
          );
          const siteName = titleCell
            ? titleCell.textContent.trim()
            : "Unknown Site";
          const siteNumber = getSiteNumber(siteName) || "UnknownNumber";
          const botNumber = numberCell
            ? numberCell.textContent.trim()
            : "UnknownSN";
          const clipboardText = `${siteName} Site${siteNumber} SN${botNumber} - `;

          navigator.clipboard
            .writeText(clipboardText)
            .then(() => console.log("Copied:", clipboardText))
            .catch((err) => console.error(err));

          window.open(
            "https://diligentrobots.atlassian.net/jira/software/c/projects/DRM/form/560?from=directory",
            "_blank",
            "noopener,noreferrer,width=800,height=600"
          );
        });

        buttonContainer.appendChild(ic2Button);
        setTimeout(() => ic2Button.remove(), 3000);
      }

        function addCSButton2() {
        if (row.querySelector(".cs2-button")) return;

        const cs2Button = document.createElement("button");
        cs2Button.textContent = "CS";
        cs2Button.className = "cs2-button";
        cs2Button.classList.add("animated-button");
        Object.assign(cs2Button.style, {
          padding: "10px 20px",
          cursor: "pointer",
          marginRight: "10px",
          fontSize: "14px",
          fontWeight: "bold",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          textAlign: "center",
          boxSizing: "border-box",
          minWidth: "60px",
          border: "none",
          color: COLORS.white,
          backgroundColor: "#007bff",
          borderRadius: "5px",
          position: "relative",
        });

        cs2Button.addEventListener("click", () => {
          const titleCell = row.querySelector("td.activity_tableCell__B55ET");
          const numberCell = row.querySelector(
            "td.activity_tableCellHighlight__apWjX"
          );
          const siteName = titleCell
            ? titleCell.textContent.trim()
            : "Unknown Site";
          const siteNumber = getSiteNumber(siteName) || "UnknownNumber";
          const botNumber = numberCell
            ? numberCell.textContent.trim()
            : "UnknownSN";
          const clipboardText = `${siteName} Site${siteNumber} SN${botNumber} - `;

          navigator.clipboard
            .writeText(clipboardText)
            .then(() => console.log("Copied:", clipboardText))
            .catch((err) => console.error(err));

          window.open(
            "https://diligentrobots.atlassian.net/jira/software/c/projects/DRM/form/529?from=directory",
            "_blank",
            "noopener,noreferrer,width=800,height=600"
          );
        });

        buttonContainer.appendChild(cs2Button);
        setTimeout(() => cs2Button.remove(), 3000);
      }

      function addCSButton() {
        if (row.querySelector(".cs-button")) return;

        const csButton = document.createElement("button");
        csButton.textContent = "CS";
        csButton.className = "cs-button";
        csButton.classList.add("animated-button");
        Object.assign(csButton.style, {
          padding: "10px 20px",
          cursor: "pointer",
          marginRight: "10px",
          fontSize: "14px",
          fontWeight: "bold",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          textAlign: "center",
          boxSizing: "border-box",
          minWidth: "60px",
          border: "none",
          color: COLORS.white,
          backgroundColor: "#007bff",
          borderRadius: "5px",
          position: "relative",
        });

        csButton.addEventListener("click", () => {
          const titleCell = row.querySelector("td.activity_tableCell__B55ET");
          const numberCell = row.querySelector(
            "td.activity_tableCellHighlight__apWjX"
          );
          const siteName = titleCell
            ? titleCell.textContent.trim()
            : "Unknown Site";
          const siteNumber = getSiteNumber(siteName) || "UnknownNumber";
          const botNumber = numberCell
            ? numberCell.textContent.trim()
            : "UnknownSN";
          const clipboardText = `${siteName} Site${siteNumber} SN${botNumber} - Bot is estopped`;

          navigator.clipboard
            .writeText(clipboardText)
            .then(() => console.log("Copied:", clipboardText))
            .catch((err) => console.error(err));

          window.open(
            "https://diligentrobots.atlassian.net/jira/software/c/projects/DRM/form/529?from=directory",
            "_blank",
            "noopener,noreferrer,width=800,height=600"
          );
        });

        buttonContainer.appendChild(csButton);
      }

      if (fcButton.textContent === "E") {
        addCSButton();
      }

      const fcObserver = new MutationObserver(() => {
        const existingCS = row.querySelector(".cs-button");
        if (fcButton.textContent === "E") {
          if (!existingCS) addCSButton();
        } else if (existingCS) {
          if (row.style.display !== "none") {
            const titleCell = row.querySelector("td.activity_tableCell__B55ET");
            const numberCell = row.querySelector(
              "td.activity_tableCellHighlight__apWjX"
            );
            const siteName = titleCell
              ? titleCell.textContent.trim()
              : "Unknown Site";
            const siteNumber = getSiteNumber(siteName) || "UnknownNumber";
            const botNumber = numberCell
              ? numberCell.textContent.trim()
              : "UnknownSN";
            const notificationtext = `${siteName} Site${siteNumber} SN${botNumber} - unestopped`;
            const unestopped = new Notification("Unestopped Bot 🎉", {
              body: notificationtext,
              icon: "	https://fleet.diligentrobots.io/static/robodash/images/blue-gripper.png",
            });
          unestopped.onclick = () => {
          window.open(
            `https://automate.dronedeploy.com/project/${site.projectX}/robots/moxi${botNumber}/dashboard/`,
            "_blank",
            "noopener,noreferrer,width=860,height=540"
          );
        };
            setTimeout(() => unestopped.close(), 10 * 1000);
          }
          existingCS.remove();
        }
      });
      fcObserver.observe(fcButton, {
        childList: true,
        characterData: true,
        subtree: true,
      });

      function addCRButton() {
        if (row.querySelector(".cr-button")) return;

        const crButton = document.createElement("button");
        crButton.textContent = "CS";
        crButton.className = "cr-button";
        crButton.classList.add("animated-button");
        Object.assign(crButton.style, {
          padding: "10px 20px",
          cursor: "pointer",
          marginRight: "10px",
          fontSize: "14px",
          fontWeight: "bold",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          textAlign: "center",
          boxSizing: "border-box",
          minWidth: "60px",
          border: "none",
          color: COLORS.white,
          backgroundColor: "#007bff",
          borderRadius: "5px",
          position: "relative",
        });

        crButton.addEventListener("click", () => {
          const titleCell = row.querySelector("td.activity_tableCell__B55ET");
          const numberCell = row.querySelector(
            "td.activity_tableCellHighlight__apWjX"
          );
          const siteName = titleCell
            ? titleCell.textContent.trim()
            : "Unknown Site";
          const siteNumber = getSiteNumber(siteName) || "UnknownNumber";
          const botNumber = numberCell
            ? numberCell.textContent.trim()
            : "UnknownSN";

          const cells = row.querySelectorAll("td");
          const phase = cells[5]
            ? cells[5].textContent.trim().toLowerCase()
            : "";

          let unit = "";
          let action = "";

          if (phase === "loading") {
            unit = cells[7] ? cells[7].textContent.trim() : "UnknownUnit";
            action = "load";
          } else if (phase === "unloading") {
            unit = cells[8] ? cells[8].textContent.trim() : "UnknownUnit";
            action = "unload";
          }

          const clipboardText = `${siteName} Site${siteNumber} SN${botNumber} - Unit ${unit} needs to ${action}`;

          navigator.clipboard
            .writeText(clipboardText)
            .then(() => console.log("Copied:", clipboardText))
            .catch((err) => console.error(err));

          window.open(
            "https://diligentrobots.atlassian.net/jira/software/c/projects/DRM/form/529?from=directory",
            "_blank",
            "noopener,noreferrer,width=800,height=600"
          );
        });

        buttonContainer.appendChild(crButton);
      }

      const cells = row.querySelectorAll("td");
      const fourthCell = cells[4];
      const phaseCell = cells[5];

      function processfourthCell(cell, phaseCell) {
        const timeText = cell.textContent.trim();
        const minutesMatch = timeText.match(/^(\d+)(m)?$/);

        if (minutesMatch) {
          const minutes = parseInt(minutesMatch[1], 10);
          const phase = phaseCell
            ? phaseCell.textContent.trim().toLowerCase()
            : "";

          if (minutes > 25) {
            if (phase == "loading" || phase == "unloading") {
              addCRButton();
            }
          } else {
            const existing = row.querySelector(".cr-button");
            if (existing) existing.remove();
          }
        }
        else {
          }
      }

      processfourthCell(fourthCell, phaseCell);

      const crObserver = new MutationObserver(() => {
        processfourthCell(fourthCell, phaseCell);
      });
      crObserver.observe(fourthCell, {
        childList: true,
        characterData: true,
        subtree: true,
      });
      crObserver.observe(phaseCell, {
        childList: true,
        characterData: true,
        subtree: true,
      });

      const titleCell = row.querySelector("td.activity_tableCell__B55ET");
      if (titleCell) {
        titleCell.parentNode.insertBefore(buttonContainer, titleCell);
      } else {
        row.appendChild(buttonContainer);
      }

const siteTitle = row.querySelector("td.activity_firstCol__scW3o");
if (siteTitle) {
  siteTitle.style.cursor = "pointer";

  siteTitle.addEventListener("click", () => {
    const icExists = row.querySelector(".ic-button");
    const csExists = row.querySelector(".cs-button");
    const crExists = row.querySelector(".cr-button");

    if (!icExists && !row.querySelector(".ic2-button")) {
      const ic2Button = addICButton2();
      setTimeout(() => ic2Button?.remove(), 3000);
    }

    if (!csExists && !crExists && !row.querySelector(".cs2-button")) {
      const cs2Button = addCSButton2();
      setTimeout(() => cs2Button?.remove(), 3000);
    }
  });
}



    });


  }

  function highlightSpareBots() {
    const rows = document.querySelectorAll("tbody tr");

    rows.forEach((row) => {
      const td = row.querySelector("td:nth-child(3)");
      const statusDiv = td?.querySelector(".d-flex");
      if (!statusDiv) return;

      const children = Array.from(statusDiv.childNodes);
      const textNode = children.find(
        (n) => n.nodeType === Node.TEXT_NODE && /\d+/.test(n.textContent)
      );
      if (!textNode) return;

      const robotId = textNode.textContent.trim();
      const isSpare = spareBots.has(robotId);

      if (!statusDiv.querySelector(".robot-id-span")) {
        const span = document.createElement("span");
        span.className = "robot-id-span";
        span.textContent = robotId;
        span.style.fontWeight = "bold";

        textNode.replaceWith(span);
        if (isSpare) {
          span.style.color = COLORS.primary;
        }
      } else {
        const span = statusDiv.querySelector(".robot-id-span");
        span.style.color = isSpare ? COLORS.primary : "";
      }
    });
  }

  function highlightRows() {
    const rows = document.querySelectorAll("tr.activity_tableRow__qiRKF");
    rows.forEach((row) => {
      const cells = row.querySelectorAll("td");
      if (cells.length >= 4) {
        const thirdCell = cells[3];
        const fourthCell = cells[4];

        function processthirdCell(cell) {
          const timeText = cell.textContent.trim();

          const minutesMatch = timeText.match(/^(\d+)(m)?$/);
          if (minutesMatch) {
            const minutes = parseInt(minutesMatch[1], 10);

            if (minutes > 60) {
              cell.style.color = COLORS.failure;
            } else if (minutes > 30) {
              cell.style.color = COLORS.warning;
            } else {
              cell.style.color = "";
            }

            cell.style.fontWeight = "bold";
          } else {
            cell.style.color = "";
            cell.style.fontWeight = "";
          }
        }

        function processfourthCell(cell) {
          const timeText = cell.textContent.trim();

          const minutesMatch = timeText.match(/^(\d+)(m)?$/);
          if (minutesMatch) {
            const minutes = parseInt(minutesMatch[1], 10);

            if (minutes > 20) {
              cell.style.color = COLORS.failure;
            } else if (minutes > 15) {
              cell.style.color = COLORS.warning;
            } else {
              cell.style.color = "";
            }

            cell.style.fontWeight = "bold";
          } else {
            cell.style.color = "";
            cell.style.fontWeight = "";
          }
        }
        processthirdCell(thirdCell);
        processfourthCell(fourthCell);
      }
    });
  }

  (() => {
    function createPodSelectionModal() {
      const modal = document.createElement("div");
      const overlay = document.createElement("div");
      const modalContent = document.createElement("div");
      const closeButton = document.createElement("button");

      overlay.style.position = "fixed";
      overlay.style.top = "0";
      overlay.style.left = "0";
      overlay.style.width = "100%";
      overlay.style.height = "100%";
      overlay.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
      overlay.style.zIndex = "999";
      overlay.style.display = "flex";
      overlay.style.alignItems = "center";
      overlay.style.justifyContent = "center";

      modal.style.backgroundColor = COLORS.backgroundDarker;
      modal.style.padding = "20px";
      modal.style.borderRadius = "10px";
      modal.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.2)";
      modal.style.width = "300px";/*  */
      modal.style.textAlign = "center";

      const infoText = document.createElement("p");
      infoText.textContent = `Open all MBot sites for selected ${filterState.selectedPodType.toUpperCase()}:`;
      infoText.style.color = COLORS.white;
      infoText.style.marginBottom = "15px";
      infoText.style.fontFamily = "Arial, sans-serif";
      infoText.style.fontSize = "18px";
      infoText.style.fontWeight = "500";
      infoText.style.textShadow = "1px 1px 2px rgba(0, 0, 0, 0.5)";
      infoText.style.lineHeight = "1.5";
      modalContent.appendChild(infoText);

      const siteMappings = siteList.reduce((acc, site) => {
        const podName = site[filterState.selectedPodType];
        if (!acc[podName]) acc[podName] = [];
        acc[podName].push(site);
        return acc;
      }, {});

      const sortedPods = Object.keys(siteMappings).sort();

      sortedPods.forEach((pod) => {
        const button = document.createElement("button");
        button.textContent = pod;
        button.style.backgroundColor = COLORS.primary;
        button.style.color = COLORS.white;
        button.style.border = "none";
        button.style.borderRadius = "5px";
        button.style.margin = "10px";
        button.style.cursor = "pointer";
        button.style.padding = "10px 15px";
        button.style.width = "80%";
        button.style.transition = "background-color 0.3s";
        button.style.fontSize = "16px";
        button.style.fontWeight = "bold";

        button.addEventListener("mouseover", () => {
          button.style.opacity = "0.9";
        });
        button.addEventListener("mouseout", () => {
          button.style.opacity = "1";
        });

        button.addEventListener("click", () => {
          openMBOTForPod(pod, siteMappings[pod]);
          document.body.removeChild(overlay);
        });

        modalContent.appendChild(button);
      });

      closeButton.textContent = "Close";
      closeButton.style.backgroundColor = COLORS.black;
      closeButton.style.color = COLORS.white;
      closeButton.style.border = "none";
      closeButton.style.borderRadius = "5px";
      closeButton.style.cursor = "pointer";
      closeButton.style.padding = "10px 15px";
      closeButton.style.marginTop = "15px";

      closeButton.addEventListener("click", () => {
        document.body.removeChild(overlay);
      });

      overlay.addEventListener("click", (event) => {
        if (event.target === overlay) {
          document.body.removeChild(overlay);
        }
      });

      window.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
          document.body.removeChild(overlay);
        }
      });

      modalContent.appendChild(closeButton);
      modal.appendChild(modalContent);
      overlay.appendChild(modal);
      document.body.appendChild(overlay);
    }

    function openMBOTForPod(podName, sitesForPod) {
      const baseMbotUrl = "https://sitexx.diligentrobots.io/app/mbot";

      if (sitesForPod && Array.isArray(sitesForPod)) {
        sitesForPod.forEach((site) => {
          const siteNumber = site.number;
          if (siteNumber) {
            window.open(
              baseMbotUrl.replace("xx", siteNumber),
              "_blank",
              "noopener,noreferrer,width=800,height=600"
            );
          } else {
            console.error(`Site number not found for site name: ${site.name}`);
          }
        });
      }
    }

    function insertSidebarLinks() {
      function createButton(text, url) {
        const button = document.createElement("button");
        button.textContent = text;
        button.style.width = "78px";
        button.style.height = "80px";
        button.style.fontSize = "14px";
        button.style.fontWeight = "bold";
        button.style.backgroundColor = COLORS.backgroundDarker;
        button.style.color = COLORS.white;
        button.style.border = "none";
        button.style.cursor = "pointer";
        button.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
        button.style.display = "flex";
        button.style.alignItems = "center";
        button.style.justifyContent = "center";
        button.style.transition = "background-color 0.3s";

        button.addEventListener("mouseover", () => {
          button.style.backgroundColor = "#515151";
        });
        button.addEventListener("mouseout", () => {
          button.style.backgroundColor = COLORS.backgroundDarker;
        });

        if (text === "All Mbot for Pod:") {
          button.addEventListener("click", createPodSelectionModal);
        } else if (url) {
          button.addEventListener("click", () => {
            if (text === "Incident Form" || text === "Call Request") {
              window.open(
                url,
                "_blank",
                "noopener,noreferrer,width=800,height=600"
              );
            } else {
              window.open(url, "_blank", "noopener,noreferrer");
            }
          });
        }

        return button;
      }

      const activityLink = document.querySelector(
        '.Sidebar_appLink__GasPQ[href="/static/robodash/activity/"]'
      );
      if (activityLink) {
        const container = document.createElement("div");
        container.style.display = "flex";
        container.style.flexWrap = "wrap";
        container.style.gap = "8px";
        container.style.marginTop = "12px";

        buttonConfig.forEach(({ label, url }) => {
          const button = createButton(label, url);
          container.appendChild(button);
        });

        activityLink.parentElement.appendChild(container);
      } else {
        console.warn("Activity link not found — cannot insert custom buttons.");
      }
    }

    insertSidebarLinks();

    const table = document.querySelector("table");
    if (table) {
      const observer = new MutationObserver(() => {
        applyAllFilters();
      });
      observer.observe(table, { childList: true, subtree: true });
    }
  })();

  highlightRows();
  addButtonsToRows();
  fetchRobotData(sessionId);
  highlightSpareBots();
  CreateHeaderRow();
  setupSocSorting();
  applyGlobalFailureHighlight();

  function Setinterval() {
    addButtonsToRows();
    fetchRobotData(sessionId);
    highlightSpareBots();
    highlightRows();
  }
  setInterval(Setinterval, 2000);
}

function applyGlobalFailureHighlight() {
  const style = document.createElement("style");
  style.textContent = `
      .activity_tableRow__qiRKF:has(div[title*="FAILED"]) {
        --bs-table-bg: #701414 !important;
      }
    `;
  document.head.appendChild(style);
}

function CreateHeaderRow() {
  const table = document.querySelector("table");
  if (!table) return console.warn("Table not found, cannot create header row");

  const thead = table.querySelector("thead");
  if (!thead) return console.warn("Thead not found, cannot create header row");

  const theadRow = thead.querySelector("tr");
  if (!theadRow) return console.warn("Header row not found, cannot create header row");

  // Control column
  const controlHeader = document.createElement("th");
  const controlButton = document.createElement("button");
  controlButton.className = "activity_tableHeadButton__uGLCO";
  controlButton.textContent = "Controls";
  controlHeader.appendChild(controlButton);
  theadRow.insertBefore(controlHeader, theadRow.firstChild);

  // SOC column
  const headers = theadRow.querySelectorAll("th");
  const socHeader = document.createElement("th");
  const socButton = document.createElement("button");
  socButton.id = "soc-sort-button";
  socButton.className = "activity_tableHeadButton__uGLCO";
  socButton.textContent = "SOC";

  const arrowSpan = document.createElement("span");
  arrowSpan.className = "activity_directionArrow__FSdXF";
  arrowSpan.textContent = "↓";
  socButton.appendChild(arrowSpan);

  socHeader.appendChild(socButton);
  theadRow.insertBefore(socHeader, headers[3]);
}


function setupSocSorting() {
  const socButton = document.getElementById("soc-sort-button");
  if (!socButton) return;

  const arrowSpan = socButton.querySelector("span");
  let sortBy = "aux";

  socButton.addEventListener("click", () => {
    const rows = Array.from(
      document.querySelectorAll("tr.activity_tableRow__qiRKF")
    );
    if (!rows.length) return;

    sortBy = sortBy === "aux" ? "fetch" : "aux";

    rows.sort((a, b) => {
      const aVal =
        parseInt(a.querySelector(`.${sortBy}-soc`)?.textContent) || 0;
      const bVal =
        parseInt(b.querySelector(`.${sortBy}-soc`)?.textContent) || 0;
      return aVal - bVal;
    });

    const tbody = rows[0].parentElement;
    rows.forEach((row) => tbody.appendChild(row));

    socButton.childNodes[0].nodeValue = `SOC (${sortBy}) `;
    arrowSpan.textContent = "↑";
  });
}

function highlightRows() {
  const rows = document.querySelectorAll("tr.activity_tableRow__qiRKF");
  rows.forEach((row) => {
    const cells = row.querySelectorAll("td");
    if (cells.length >= 4) {
      const thirdCell = cells[2];
      const fourthCell = cells[3];

      function processCell(cell, thresholdRed, thresholdYellow) {
        const timeText = cell.textContent.trim();
        const minutesMatch = timeText.match(/^(\d+)(m)?$/);
        if (minutesMatch) {
          const minutes = parseInt(minutesMatch[1], 10);
          if (minutes > thresholdRed) {
            cell.style.color = COLORS.failure;
          } else if (minutes > thresholdYellow) {
            cell.style.color = COLORS.warning;
          } else {
            cell.style.color = "";
          }
          cell.style.fontWeight = "bold";
        } else {
          cell.style.color = "";
          cell.style.fontWeight = "";
        }
      }

      processCell(thirdCell, 60, 30);
      processCell(fourthCell, 20, 15);
    }
  });
}

function applyButtonStyles(btn) {
  btn.style.zIndex = 9999;
  btn.style.padding = "10px 20px";
  btn.style.backgroundColor = COLORS.primary;
  btn.style.color = COLORS.white;
  btn.style.border = "none";
  btn.style.borderRadius = "5px";
  btn.style.cursor = "pointer";
  btn.style.fontWeight = "bold";
  btn.style.fontSize = "14px";
  btn.style.boxShadow = "0px 2px 5px rgba(0,0,0,0.3)";
}

function createPodButton(podName, container) {
  const button = document.createElement("button");
  button.classList.add("pod-button");
  button.textContent = podName;
  button.classList.add("animated-button");
  applyButtonStyles(button);

  let isActive = false;

  button.addEventListener("click", () => {
    isActive = !isActive;
    if (isActive) {
      filterState.activePods.add(podName);
      button.classList.add("animated-button");
      button.style.backgroundColor = COLORS.secondary;
      button.style.border = `2px solid ${COLORS.secondary}`;
    } else {
      filterState.activePods.delete(podName);
      button.classList.add("animated-button");
      button.style.backgroundColor = COLORS.primary;
      button.style.border = "none";
    }
    applyAllFilters();
  });

  button.addEventListener("mouseover", () => {
    if (!isActive) button.style.backgroundColor = COLORS.backgroundDark;
  });

  button.addEventListener("mouseout", () => {
    if (!isActive) button.style.backgroundColor = COLORS.primary;
  });

  container.appendChild(button);
}

function createPodButtonsFromStructure(container) {
  const seenPods = new Set();
  siteList.forEach((site) => {
    const podName = site[filterState.selectedPodType];
    if (podName && !seenPods.has(podName)) {
      seenPods.add(podName);
    }
  });

  const pods = Array.from(seenPods).sort();
  pods.forEach((pod) => createPodButton(pod, container));
}

function createPodSelector(containerElement) {
  const label = document.createElement("label");
  label.textContent = "Pod Structure:";
  label.style.marginRight = "6px";
  label.style.color = COLORS.white;
  label.style.fontWeight = "500";

  const select = document.createElement("select");
  select.id = "pod-selector";
  select.style.padding = "4px 8px";
  select.style.border = `1px solid ${COLORS.primary}`;
  select.style.borderRadius = "4px";
  select.style.backgroundColor = COLORS.secondary;
  select.style.color = COLORS.white;
  select.style.fontSize = "0.9rem";
  select.style.cursor = "pointer";
  select.style.outline = "none";
  select.style.boxShadow = `inset 0 1px 2px ${COLORS.black}`;

  ["3pod", "4pod", "5pod"].forEach((pod) => {
    const option = document.createElement("option");
    option.value = pod;
    option.textContent = pod.toUpperCase();
    if (pod === "4pod") option.selected = true;
    select.appendChild(option);
  });

  select.addEventListener("change", (e) => {
    const selected = e.target.value;
    filterState.selectedPodType = selected;
    filterState.activePods.clear();

    containerElement
      .querySelectorAll(".pod-button")
      .forEach((btn) => btn.remove());

    createPodButtonsFromStructure(containerElement);

    applyAllFilters();
  });

  containerElement.appendChild(label);
  containerElement.appendChild(select);
}

function createTSButton(container) {
  const button = document.createElement("button");
  button.textContent = "TS";
  button.classList.add("animated-button");
  button.classList.add("ts-button");

  applyButtonStyles(button);

  button.style.position = "static";

  button.addEventListener("click", () => {
    filterState.tsOnly = !filterState.tsOnly;
    button.style.backgroundColor = filterState.tsOnly
      ? COLORS.secondary
      : COLORS.primary;
    button.style.border = filterState.tsOnly
      ? `2px solid ${COLORS.secondary}`
      : "none";
    applyAllFilters();
  });

  button.addEventListener("mouseover", () => {
    if (!filterState.tsOnly)
      button.style.backgroundColor = COLORS.backgroundDark;
  });

  button.addEventListener("mouseout", () => {
    if (!filterState.tsOnly) button.style.backgroundColor = COLORS.primary;
  });

  container.appendChild(button);
}

function createIdleButton(container) {
  const button = document.createElement("button");
  button.textContent = "IDLE";
  button.classList.add("idle-button");
  button.classList.add("animated-button");
  applyButtonStyles(button);

  let isActive = false;

  filterState.robotStatus = filterState.robotStatus || {};
  filterState.robotStatus.IDLE = isActive;

  button.style.backgroundColor = COLORS.primary;
  button.style.border = "none";

  button.addEventListener("click", () => {
    isActive = !isActive;

    filterState.robotStatus.IDLE = isActive;

    button.style.backgroundColor = isActive ? COLORS.secondary : COLORS.primary;
    button.style.border = isActive ? `2px solid ${COLORS.secondary}` : "none";

    applyAllFilters();
  });

  button.addEventListener("mouseover", () => {
    if (!isActive) button.style.backgroundColor = COLORS.backgroundDark;
  });

  button.addEventListener("mouseout", () => {
    if (!isActive) button.style.backgroundColor = COLORS.primary;
  });

  container.appendChild(button);
}

function createControlBarUI() {
  const logoutCol = document.querySelector(
    ".Header_header__1RJ5C .col-2.d-flex"
  );
  if (logoutCol) logoutCol.remove();

  const controlBar = document.createElement("div");
  controlBar.id = "control-bar";
  controlBar.style.display = "flex";
  controlBar.style.alignItems = "center";
  controlBar.style.gap = "12px";
  controlBar.style.padding = "6px 12px";
  controlBar.style.backgroundColor = COLORS.backgroundDarker;
  controlBar.style.border = `1px solid ${COLORS.secondary}`;
  controlBar.style.borderRadius = "6px";
  controlBar.style.boxShadow = "0 2px 4px rgba(0,0,0,0.4)";
  controlBar.style.fontFamily = "inherit";
  controlBar.style.fontSize = "0.9rem";
  controlBar.style.flexWrap = "wrap";
  controlBar.style.position = "absolute";
  controlBar.style.top = "10px";
  controlBar.style.right = "20px";
  controlBar.style.zIndex = "1000";

  createPodSelector(controlBar);
  createTSButton(controlBar);
  createPodButtonsFromStructure(controlBar);
  createIdleButton(controlBar);

  const header = document.querySelector(".Header_header__1RJ5C");
  if (header) header.appendChild(controlBar);
}

function showNotification(message) {
  let container = document.getElementById("notification-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "notification-container";
    container.style.position = "fixed";
    container.style.top = "100px";
    container.style.left = "50%";
    container.style.transform = "translateX(-50%)";
    container.style.zIndex = "9999";
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.alignItems = "center";
    container.style.gap = "10px";
    document.body.appendChild(container);
  }

  const notification = document.createElement("div");
  notification.innerText = message;

  Object.assign(notification.style, {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    color: COLORS.white,
    padding: "10px 20px",
    borderRadius: "5px",
    minWidth: "200px",
    textAlign: "center",
    pointerEvents: "auto",
  });

  container.appendChild(notification);
}

function runOnceWhenActivityRowsExist(callback, delay = 1000) {
  const interval = setInterval(() => {
    const rows = document.querySelectorAll(".activity_tableRow__qiRKF");
    if (rows.length > 0) {
      clearInterval(interval);
      console.log("✅ Activity rows found — waiting before running script...");
      setTimeout(() => {
        console.log("🚀 Running script after delay...");
        callback();
      }, delay);
    } else {
      console.log("⏳ Waiting for activity rows...");
    }
  }, 1000);
}

runOnceWhenActivityRowsExist(() => {
  main();
  createControlBarUI();
  injectAnimations();

  setTimeout(() => {
    const headers = document.querySelectorAll("th");
    headers.forEach((th) => {
      if (th.textContent.includes("Time in Phase")) {
        const button = th.querySelector("button");
        if (button) {
          button.click();
        }
      }
    });
  }, 2000);
});



function injectAnimations() {
  if (document.getElementById("custom-animations")) return;
  const style = document.createElement("style");
  style.id = "custom-animations";
  style.textContent = `
    :root {
      --color-primary: #2a2d36;
      --color-secondary: #569cd6;
      --color-bg-dark: #1b1c1f;
      --color-success: #4caf50;
      --color-failure: #f44336;
    }

    .animated-button {
      transition:
        background-color 0.25s ease,
        transform 0.15s ease,
        box-shadow 0.3s ease;
    }

    .animated-button:hover {
      background-color: var(--color-bg-dark);
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0,0,0,0.4);
    }

    .animated-button:active {
      transform: scale(0.97);
      box-shadow: 0 2px 4px rgba(0,0,0,0.3);
    }

    .animated-button.active {
      background-color: var(--color-secondary) !important;
      box-shadow: 0 0 10px var(--color-secondary);
    }

    .fade-in {
      animation: fadeIn 0.4s ease forwards;
    }

    .slide-up {
      animation: slideUp 0.5s cubic-bezier(0.23, 1, 0.32, 1) forwards;
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    @keyframes slideUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .modal-overlay {
      animation: fadeIn 0.3s ease forwards;
    }
    .modal-content {
      animation: slideUp 0.3s ease forwards;
    }
  `;
  document.head.appendChild(style);
}
