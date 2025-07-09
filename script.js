// ==UserScript==
// @name         TaskTime
// @namespace    https://diligentrobots.io/
// @version      1.0.0
// @description  Overlay
// @match        https://fleet.diligentrobots.io/static/robodash/activity/*
// @grant        none
// @updateURL    https://raw.githubusercontent.com/ibetternotbedead/userscript/main/script
// @downloadURL  https://raw.githubusercontent.com/ibetternotbedead/userscript/main/script

// ==/UserScript==


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
    name: "Multicare Allenmore",
    number: "39",
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
    name: "Multicare Mary Bridge",
    number: "19",
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
    name: "Trinity - MacNeal",
    number: "11",
    projectX: "diligent-robotics",
    env: "prod-2",
    "3pod": "Pod B",
    "4pod": "Pod B",
    "5pod": "Pod B",
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
    name: "Northwestern Delnor",
    number: "37",
    projectX: "diligent-robotics",
    env: "prod-2",
    "3pod": "Pod B",
    "4pod": "Pod B",
    "5pod": "Pod B",
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
  selectedPodType: "3pod", // default pod view
  siteMappings: {}, // gets rebuilt dynamically
};

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
        // FC Button Styling
        if (HardwareEstopRobots.has(robotId)) {
          fcButton.textContent = "E";
          fcButton.style.backgroundColor = "red";
          fcButton.style.color = COLORS.white;
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
        }

        // DD Button Styling
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
            ddButton.style.backgroundColor = COLORS.white; // COLORS.white
            ddButton.style.color = COLORS.black; // COLORS.black
          } else if (timerInfo && timerInfo.type === currentType) {
            const elapsedTime = Date.now() - timerInfo.timestamp;

            if (elapsedTime > 600000) {
              ddButton.style.backgroundColor = COLORS.risk; // yellow
              ddButton.style.color = COLORS.black;
            } else {
              ddButton.style.backgroundColor = COLORS.backgroundDark; // default dark
              ddButton.style.color = COLORS.white;
            }
          } else {
            ddButton.style.backgroundColor = COLORS.backgroundDark; // default
            ddButton.style.color = COLORS.white;
          }
        } else {
          ddButton.style.backgroundColor = COLORS.backgroundDark; // fallback
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
      },
    );

    const data = await response.json();
    console.log(data);

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
            (container) => container.status === "LOADED",
          );

        if (isLoaded && taskStatus === "IDLE") {
          showNotification(`SN${elevatorId} is loaded while idle!`);
        }

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

      console.log("Busy Robots:", busyRobotsArray);

      updateTableColors();
      updateSocValues();
    } else {
      console.warn("⚠️ Invalid robot data received");
    }
  } catch (error) {
    console.error("❌ Error during asyncCall:", error);
  }
}

function updateSocValues() {
  const rows = document.querySelectorAll("tbody tr");

  rows.forEach((row) => {
    try {
      const statusDiv = row.querySelector("td:nth-child(3) .d-flex");
      let auxSocElement = row.querySelector(".aux-soc");
      let fetchSocElement = row.querySelector(".fetch-soc");
      let wrapper = row.querySelector(".soc-wrapper");

      if (!wrapper) {
        wrapper = document.createElement("td");
        wrapper.className = "soc-wrapper";
        wrapper.style.display = "flex";
        wrapper.style.alignItems = "center";
        wrapper.style.justifyContent = "center";
        row.insertBefore(wrapper, row.children[7] || null);
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

          const updateTextAndColor = (element, percent) => {
            let color;
            if (percent > 60) {
              color = COLORS.safe;
            } else if (percent >= 45) {
              color = COLORS.warning;
            } else {
              color = COLORS.failure;
            }

            element.textContent = `${percent.toFixed(0)}%`;
            element.style.color = color;
          };

          updateTextAndColor(auxSocElement, auxSocPercent);
          updateTextAndColor(fetchSocElement, fetchSocPercent);

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

function getSiteNameFromRow(row) {
  const tdWithTitle = row.querySelector("td[title]");
  return tdWithTitle ? tdWithTitle.getAttribute("title") : "";
}

function applyAllFilters() {
  const rows = document.querySelectorAll("tr.activity_tableRow__qiRKF");

  // Rebuild siteMappings dynamically based on selectedPodType
  filterState.siteMappings = siteList.reduce((acc, site) => {
    const podName = site[filterState.selectedPodType];
    if (!acc[podName]) acc[podName] = [];
    acc[podName].push(site);
    return acc;
  }, {});

  rows.forEach((row) => {
    const siteTitle = getSiteNameFromRow(row);

    // If no pod filters active, allow all rows to match pod filter
    let matchesPod = filterState.activePods.size === 0;

    // Otherwise check if the site's pod (under the selected pod type) matches any active pod filter
    for (const pod of filterState.activePods) {
      const sitesForPod = filterState.siteMappings[pod] || [];
      if (sitesForPod.some((site) => site.name === siteTitle)) {
        matchesPod = true;
        break;
      }
    }

    // Existing TS filtering logic (unchanged)
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

      let lowAux = false;
      let lowFetch = false;
      let longSameAction = false;

      try {
        const auxCell = row.querySelector(".aux-soc");
        const fetchCell = row.querySelector(".fetch-soc");
        const actionCell = row.querySelector("td[title]");

        const aux = auxCell
          ? parseFloat(auxCell.textContent.replace("%", ""))
          : 100;
        const fetch = fetchCell
          ? parseFloat(fetchCell.textContent.replace("%", ""))
          : 100;

        lowAux = aux < 40;
        lowFetch = fetch < 60;

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
            if (Date.now() - lastTime > 900000) {
              longSameAction = true;
            }
          } else {
            actionTypeMap.set(robotId, currentActionType);
            timerMap.set(robotId, Date.now());
          }
        }
      } catch (e) {
        console.warn("Error evaluating row for low battery or same action", e);
      }

      const ddButton = row.querySelector(".button-container .dd-button");
      const ddButtonIsRed =
        ddButton &&
        getComputedStyle(ddButton).backgroundColor === "rgb(255, 0, 0)";

      matchesTS =
        thirdRed ||
        fourthYellowOrRed ||
        failedDiv ||
        offlineDiv ||
        lowAux ||
        lowFetch ||
        longSameAction ||
        ddButtonIsRed;
    }

    // Show or hide the row depending on both filters
    row.style.display = matchesPod && matchesTS ? "table-row" : "none";
  });
}

async function main() {
  let sessionId = getSessionId();
  while (!sessionId) {
    console.log("⏳ Waiting for session ID...");
    await new Promise((resolve) => setTimeout(resolve, 2000));
    sessionId = getSessionId();
  }

  await fetchRobotData(sessionId);
  setInterval(() => fetchRobotData(sessionId), 5000);
  applyGlobalFailureHighlight();

  if (theadRow) {
    CreateHeaderRow();
  }

  function getSiteNameFromRow(row) {
    const tdWithTitle = row.querySelector("td[title]");
    return tdWithTitle ? tdWithTitle.getAttribute("title") : "";
  }

  function applyButtonStyles(btn) {
    btn.style.position = "fixed";
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

  highlightRows();

  const observer = new MutationObserver(() => {
    applyAllFilters();
  });

  const table = document.querySelector("table");
  observer.observe(table, { childList: true, subtree: true });

  let lastRowCount = 0;
  function addButtonsToRows() {
    const baseDDUrl =
      "https://automate.dronedeploy.com/project/diligent-robotics/robots/moxi";
    const baseMbotUrl = "https://sitexx.diligentrobots.io/app/mbot";
    const rows = document.querySelectorAll("tr.activity_tableRow__qiRKF");

    rows.forEach((row) => {
      const existingButtonContainer = row.querySelector(".button-container");
      if (existingButtonContainer) {
        return;
      }

      const buttonContainer = document.createElement("div");
      buttonContainer.className = "button-container";
      buttonContainer.style.display = "flex";
      buttonContainer.style.alignItems = "center";
      buttonContainer.style.marginRight = "10px";
      const ddButton = document.createElement("button");
      ddButton.textContent = " DD ";
      ddButton.className = "dd-button";
      ddButton.style.padding = "10px 20px";
      ddButton.style.cursor = "pointer";
      ddButton.style.marginRight = "10px";
      ddButton.style.fontSize = "14px";
      ddButton.style.textAlign = "center";
      ddButton.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
      ddButton.style.boxSizing = "border-box";
      ddButton.style.minWidth = "60px";
      ddButton.style.border = "none";
      ddButton.style.fontWeight = "bold";
      ddButton.style.color = COLORS.white;
      ddButton.style.backgroundColor = COLORS.backgroundDark;
      ddButton.style.borderRadius = "5px";
      ddButton.style.position = "relative";

      ddButton.addEventListener("click", () => {
        const numberCell = row.querySelector(
          "td.activity_tableCellHighlight__apWjX",
        );
        const titleCell = row.querySelector("td.activity_tableCell__B55ET");

        if (numberCell && titleCell) {
          const number = numberCell.textContent.trim();
          const siteName = titleCell.textContent.trim();
          const site = getSiteByName(siteName);

          if (site && site.projectX) {
            const projectX = site.projectX;
            window.open(
              `https://automate.dronedeploy.com/project/${projectX}/robots/moxi${number}/dashboard/`,
              "_blank",
              "noopener,noreferrer,width=1280,height=720",
            );
          }
        }
      });

      buttonContainer.appendChild(ddButton);

      const mbotButton = document.createElement("button");
      mbotButton.textContent = "MB";
      mbotButton.className = "mbot-button";
      mbotButton.style.padding = "10px 20px";
      mbotButton.style.cursor = "pointer";
      mbotButton.style.marginRight = "10px";
      mbotButton.style.fontSize = "14px";
      mbotButton.style.fontWeight = "bold";
      mbotButton.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
      mbotButton.style.textAlign = "center";
      mbotButton.style.boxSizing = "border-box";
      mbotButton.style.minWidth = "60px";
      mbotButton.style.border = "none";
      mbotButton.style.color = COLORS.white;
      mbotButton.style.backgroundColor = COLORS.primary;
      mbotButton.style.borderRadius = "5px";
      mbotButton.style.position = "relative";

      const fcButton = document.createElement("button");
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
            if (site && site.env) {
              const env = site.env;
              if (RobotData.has(robotId)) {
                const mapFrameId = RobotData.get(robotId).mapFrameId;
                console.log("Robot ID:", robotId);
                console.log("Map Frame ID:", mapFrameId);
                if (mapFrameId) {
                  let robotLink = `https://diligentrobots-${env}.fetchcore-cloud.com/management/#/maps/${mapFrameId}/published/robots`;
                  window.open(robotLink, "_blank");
                }
              }
            }
          }
        }
      });

      buttonContainer.appendChild(fcButton);

      function getSiteNumber(siteName) {
        for (const pod in siteMappings) {
          if (siteMappings.hasOwnProperty(pod)) {
            const site = siteMappings[pod].find((s) => s.name === siteName);
            if (site) {
              return site.number;
            }
          }
        }
        return null;
      }
      function getSiteByName(siteName) {
        for (const pod in siteMappings) {
          if (siteMappings.hasOwnProperty(pod)) {
            const site = siteMappings[pod].find((s) => s.name === siteName);
            if (site) {
              return site;
            }
          }
        }
      }

      const buttonColors = {
        ddButton: COLORS.backgroundDark,
        fcButton: COLORS.secondary,
        mbotButton: COLORS.primary,
      };

      mbotButton.addEventListener("click", () => {
        const titleCell = row.querySelector("td.activity_tableCell__B55ET");
        if (titleCell) {
          const siteName = titleCell.textContent.trim();
          const siteNumber = getSiteNumber(siteName);
          if (siteNumber) {
            window.open(
              `${baseMbotUrl.replace("xx", siteNumber)}`,
              "_blank",
              "noopener,noreferrer,width=800,height=600",
            );
          }
        }
      });

      buttonContainer.appendChild(mbotButton);
      const titleCell = row.querySelector("td.activity_tableCell__B55ET");
      if (titleCell) {
        titleCell.parentNode.insertBefore(buttonContainer, titleCell);
      } else {
        row.appendChild(buttonContainer);
      }
    });
  }

  addButtonsToRows();

  setInterval(addButtonsToRows, 5000);

  function highlightRows() {
    const rows = document.querySelectorAll("tr.activity_tableRow__qiRKF");
    rows.forEach((row) => {
      const cells = row.querySelectorAll("td");
      if (cells.length >= 4) {
        const thirdCell = cells[2];
        const fourthCell = cells[3];

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

  highlightRows();
  setInterval(highlightRows, 5000);

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
      modal.style.width = "300px";
      modal.style.textAlign = "center";

      const infoText = document.createElement("p");
      infoText.textContent = "Open all Mbot sites for:";
      infoText.style.color = COLORS.white;
      infoText.style.marginBottom = "15px";
      infoText.style.fontFamily = "Arial, sans-serif";
      infoText.style.fontSize = "18px";
      infoText.style.fontWeight = "500";
      infoText.style.textShadow = "1px 1px 2px rgba(0, 0, 0, 0.5)";
      infoText.style.lineHeight = "1.5";
      modalContent.appendChild(infoText);

      closeButton.textContent = "Close";
      closeButton.style.backgroundColor = COLORS.black;
      closeButton.style.color = COLORS.white;
      closeButton.style.border = "none";
      closeButton.style.borderRadius = "5px";
      closeButton.style.cursor = "pointer";
      closeButton.style.padding = "10px 15px";
      closeButton.style.marginTop = "15px";
      closeButton.style.transition = "background-color 0.3s";

      closeButton.addEventListener("mouseover", () => {
        closeButton.style.backgroundColor = "#515151";
      });
      closeButton.addEventListener("mouseout", () => {
        closeButton.style.backgroundColor = COLORS.black;
      });

      const pods = [
        { name: "Pod A", color: COLORS.primary },
        { name: "Pod B", color: COLORS.primary },
        { name: "Pod C", color: COLORS.primary },
        { name: "Pod D", color: COLORS.primary },
      ];

      pods.forEach((pod) => {
        const button = document.createElement("button");
        button.textContent = pod.name;
        button.style.backgroundColor = pod.color;
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
          openMBOTForPod(pod.name);
          document.body.removeChild(overlay);
        });

        modalContent.appendChild(button);
      });

      closeButton.addEventListener("click", () => {
        document.body.removeChild(overlay);
      });

      closeButton.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          document.body.removeChild(overlay);
        }
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

    function openMBOTForPod(podName) {
      const baseMbotUrl = "https://sitexx.diligentrobots.io/app/mbot";
      const siteMapping = siteMappings[podName];
      if (siteMapping) {
        siteMapping.forEach((site) => {
          const siteNumber = site.number;
          if (siteNumber) {
            window.open(
              baseMbotUrl.replace("xx", siteNumber),
              "_blank",
              "noopener,noreferrer,width=800,height=600",
            );
          } else {
            console.error(`Site number not found for site name: ${site.name}`);
          }
        });
      }
    }

    (function () {
      function createButton(text, url, onClick) {
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

        if (onClick) {
          button.addEventListener("click", onClick);
        } else if (url) {
          button.addEventListener("click", () => {
            window.open(url, "_blank", "noopener,noreferrer");
          });
        }

        return button;
      }

      const buttonConfig = [
        { label: "All Mbot for Pod:", onClick: createPodSelectionModal },
        {
          label: "IC Board",
          url: "https://diligentrobots.atlassian.net/jira/core/projects/IC/board",
        },
        {
          label: "Call Request",
          url: "https://diligentrobots.atlassian.net/jira/core/projects/IC/form/494",
        },
        {
          label: "Run books",
          url: "https://coda.io/d/Runbooks_d_A2-DtqJJR/Ops-Runbooks-Home-Page_su20ZBgR#Runbooks-Red-Team-View_tuyi_4z_",
        },
        {
          label: "ROC Coda",
          url: "https://coda.io/d/Robot-Operations-Center_dgAVnlqszp4/ROC-Home-Page_suLgyApE#_lufk6ZuB",
        },
        {
          label: "Common Commands",
          url: "https://docs.google.com/spreadsheets/d/1QBRl09EXI7lTIgEuPoGXlo6VBzPPFHLnVk-4JE6p5kg/edit?gid=1844596694#gid=1844596694",
        },
      ];

      const activityLink = document.querySelector(
        '.Sidebar_appLink__GasPQ[href="/static/robodash/activity/"]',
      );
      if (activityLink) {
        const container = document.createElement("div");
        container.style.display = "flex";
        container.style.flexWrap = "wrap";
        container.style.gap = "8px";
        container.style.marginTop = "12px";

        buttonConfig.forEach(({ label, url, onClick }) => {
          const button = createButton(label, url, onClick);
          container.appendChild(button);
        });

        const parent = activityLink.parentElement;
        parent.appendChild(container);
      } else {
        console.warn("Activity link not found — cannot insert custom buttons.");
      }
    })();

    const observer = new MutationObserver(() => {
      applyAllFilters();
    });

    const table = document.querySelector("table");
    observer.observe(table, { childList: true, subtree: true });
  })();
}

main();

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
  const controlHeader = document.createElement("th");
  const controlButton = document.createElement("button");
  controlButton.className = "activity_tableHeadButton__uGLCO";
  controlButton.textContent = "Controls";
  controlHeader.appendChild(controlButton);
  theadRow.insertBefore(controlHeader, theadRow.firstChild);
  const headers = theadRow.querySelectorAll("th");
  const socHeader = document.createElement("th");
  const socButton = document.createElement("button");
  socButton.className = "activity_tableHeadButton__uGLCO";
  socButton.textContent = "SOC";
  const arrowSpan = document.createElement("span");
  arrowSpan.className = "activity_directionArrow__FSdXF";
  arrowSpan.textContent = "↓";
  socButton.appendChild(arrowSpan);
  socHeader.appendChild(socButton);
  theadRow.insertBefore(socHeader, headers[7]);
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
  applyButtonStyles(button);
  let isActive = false;
  button.addEventListener("click", () => {
    isActive = !isActive;
    if (isActive) {
      filterState.activePods.add(podName);
      button.style.backgroundColor = COLORS.secondary;
      button.style.border = `2px solid ${COLORS.secondary}`;
    } else {
      filterState.activePods.delete(podName);
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
  button.classList.add("ts-button");
  // Use the shared styling
  applyButtonStyles(button);
  // Remove position: fixed if it's inside a container
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

function createControlBarUI() {
  // Remove the logout button and its parent column
  const logoutCol = document.querySelector(
    ".Header_header__1RJ5C .col-2.d-flex",
  );
  if (logoutCol) logoutCol.remove();
  // Create control bar wrapper
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
  // Add controls
  createPodSelector(controlBar);
  createTSButton(controlBar);
  createPodButtonsFromStructure(controlBar);
  // Append to header
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
    opacity: "1",
    transition: "opacity 0.5s ease-in-out",
    pointerEvents: "auto",
  });

  container.appendChild(notification);

  setTimeout(() => {
    notification.style.opacity = "0";
    notification.addEventListener("transitionend", () => {
      notification.remove();

      if (container.childElementCount === 0) {
        container.remove();
      }
    });
  }, 3000);
}

createControlBarUI();



