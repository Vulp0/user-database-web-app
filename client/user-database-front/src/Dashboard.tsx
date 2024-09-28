import { useEffect, useRef, useState } from "react";
import axios from "axios";

function Dashboard() {
    let masterCheckbox = useRef(false);
    let selectedIDList: any[] = [];
    let [changed, setChanged] = useState(false);

    useEffect(() => {
        document.title = "Dashboard";
        
        let listOfUsers = [];
        axios.get("http://localhost:3001/allusers")
            .then((response) => {
                const tBody = document.querySelector(".tableBody");
                let count = 0;
                
                //prevents the same elements to be added again with page reload (this is only a problem in development/not a real server)
                while(tBody?.firstChild) {
                    tBody?.removeChild(tBody.firstChild);
                }

                //oh god why
                listOfUsers = Object.values(response.data);
                listOfUsers.map((elem: any) => {
                    const tRow = document.createElement("tr");

                    let checkbox = document.createElement("input");
                    checkbox.type = "checkbox";
                    checkbox.classList.add("userCheckbox");
                    checkbox.id = "row" + count.toString();
                    count++;
                    checkbox.addEventListener("change", (e) => {
                        let tgt: any = e.target;
                        let nextThValue = document.querySelector("#" + tgt.id + " + th");
                        let nextThID = Number(nextThValue?.textContent);

                        if(selectedIDList.includes(nextThID)) {
                            selectedIDList = selectedIDList.filter((elem: any) => elem != nextThID);
                        } else {
                            selectedIDList.push(nextThID);
                        }
                        // console.log(selectedIDList);
                    });
                    tRow.appendChild(checkbox);

                    let userid = document.createElement("th");
                    userid.classList.add("UserID");
                    userid.scope = "row";
                    userid.innerHTML = elem.UserID;
                    tRow.appendChild(userid);

                    let name = document.createElement("td");
                    name.classList.add("Name");
                    name.textContent = elem.Name;
                    tRow.appendChild(name);

                    let position = document.createElement("td");
                    position.classList.add("Position");
                    position.textContent = elem.Position;
                    tRow.appendChild(position);

                    let email = document.createElement("td");
                    email.classList.add("Email");
                    email.textContent = elem.Email;
                    tRow.appendChild(email);

                    let lastlogin = document.createElement("td");
                    lastlogin.classList.add("LastLogin");
                    lastlogin.textContent = elem.LastLogin;
                    tRow.appendChild(lastlogin);

                    let joindate = document.createElement("td");
                    joindate.classList.add("JoinDate");
                    joindate.textContent = elem.JoinDate;
                    tRow.appendChild(joindate);

                    let isblocked = document.createElement("td");
                    isblocked.classList.add("IsBlocked");
                    isblocked.textContent = elem.IsBlocked ? "Blocked" : "Active";
                    tRow.appendChild(isblocked);

                    tBody?.appendChild(tRow);
                });
            });
    }, [changed]);

    function selectAllCheckboxes() {
        if(!masterCheckbox.current) {
            masterCheckbox.current = true;
            let allUserCheckboxes = document.querySelectorAll(".userCheckbox");
            selectedIDList = [];
            allUserCheckboxes.forEach((elem: any) => {
                let selector = "#" + elem.id + " + th";
                selectedIDList.push(Number(document.querySelector(selector)?.textContent));
                elem.checked = true;
            });
            // console.log(selectedIDList);
        } else {
            masterCheckbox.current = false;
            let allUserCheckboxes = document.querySelectorAll(".userCheckbox");
            selectedIDList = [];
            allUserCheckboxes.forEach((elem: any) => {
                elem.checked = false;
            });
            // console.log(selectedIDList);
        }
    }

    function blockUsers() {
        axios.post("http://localhost:3001/userunlocker", {
            UserID: selectedIDList,
            ShouldBlock: true
        }).then(() => {
            setChanged(!changed);
        });
    }

    function unblockUsers() {
        axios.post("http://localhost:3001/userunlocker", {
            UserID: selectedIDList,
            ShouldBlock: false
        }).then(() => {
            setChanged(!changed);
        });
    }

    function removeUsers() {
        axios.post("http://localhost:3001/userremover", {
            UserID: selectedIDList
        }).then(() => {
            setChanged(!changed);
        });
    }

    return (
        <div id="dashboardContainer">
            <div id="topbar" className="d-flex flex-row">
                <p className="my-2 mx-2">Welcome, <span>guest</span></p>
                <button className="my-2 mx-2">Log out</button>
            </div>

            <div id="tableContainer">
                <div className="controls mb-2">
                    <button id="buttonBlock" onClick={blockUsers} className="btn btn-secondary mx-2">
                        <span className="material-symbols-sharp">lock</span>
                    </button>
                    <button id="buttonUnblock" onClick={unblockUsers} className="btn btn-secondary mx-2">
                        <span className="material-symbols-sharp">lock_open</span>
                    </button>
                    <button id="buttonDelete" onClick={removeUsers} className="btn btn-danger mx-2">
                        <span className="material-symbols-sharp">delete</span>
                    </button>
                </div>

                <table className="usersTable table table-dark table-sm">
                    <thead>
                        <tr>
                            <th><input type="checkbox" name="" id="selectAllCheckbox" className="form-check-input" onClick={selectAllCheckboxes}/></th>
                            <th>UserID</th>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Email</th>
                            <th>Last login</th>
                            <th>Sign up date</th>
                            <th>Status</th>
                        </tr>
                    </thead>

                    <tbody className="tableBody">
                        {/* this was a placeholder used to structure table rows, now unused cause rows are generated automatically from db
                            <tr class="tableRow">
                            <td><input type="checkbox"></input></td>
                            <th scope="row" className="UserID">33</th>
                            <td className="Name">John Doe</td>
                            <td className="Position">CEO</td>
                            <td className="Email">jdoe@fakemail.com</td>
                            <td className="Last login">2024-09-23T18:26:00</td>
                            <td className="Sign up date">2000-02-11T09:06:20</td>
                            <td>Active</td>
                        </tr> */}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Dashboard;