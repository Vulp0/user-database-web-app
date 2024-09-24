import { useEffect } from "react";

function Dashboard() {
    useEffect(() => {
        document.title = "Dashboard";
    });

    return (
        <div id="dashboardContainer">
            <div id="topbar" className="d-flex flex-row">
                <p className="my-2 mx-2">Welcome, <span>guest</span></p>
                <button className="my-2 mx-2">Log out</button>
            </div>

            <div id="tableContainer">
                <div className="controls mb-2">
                    <button className="btn btn-secondary mx-2"><span className="material-symbols-sharp">lock</span></button>
                    <button className="btn btn-secondary mx-2"><span className="material-symbols-sharp">lock_open</span></button>
                    <button className="btn btn-danger mx-2"><span className="material-symbols-sharp">delete</span></button>
                </div>

                <table className="usersTable table table-striped table-dark table-hover table-sm">
                    <thead>
                        <tr>
                            <th><input type="checkbox" name="" id="" /></th>
                            <th>UserID</th>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Email</th>
                            <th>Last login</th>
                            <th>Sign up date</th>
                            <th>Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td><input type="checkbox"></input></td>
                            <th scope="row">33</th>
                            <td>John Doe</td>
                            <td>CEO</td>
                            <td>jdoe@fakemail.com</td>
                            <td>2024-09-23T18:26:00</td>
                            <td>2000-02-11T09:06:20</td>
                            <td>Active</td>
                        </tr>

                        <tr>
                            <td><input type="checkbox"></input></td>
                            <th scope="row">33</th>
                            <td>John Doe</td>
                            <td>CEO</td>
                            <td>jdoe@fakemail.com</td>
                            <td>2024-09-23T18:26:00</td>
                            <td>2000-02-11T09:06:20</td>
                            <td>Active</td>
                        </tr>

                        <tr>
                            <td><input type="checkbox"></input></td>
                            <th scope="row">33</th>
                            <td>John Doe</td>
                            <td>CEO</td>
                            <td>jdoe@fakemail.com</td>
                            <td>2024-09-23T18:26:00</td>
                            <td>2000-02-11T09:06:20</td>
                            <td>Active</td>
                        </tr>

                        <tr>
                            <td><input type="checkbox"></input></td>
                            <th scope="row">33</th>
                            <td>John Doe</td>
                            <td>CEO</td>
                            <td>jdoe@fakemail.com</td>
                            <td>2024-09-23T18:26:00</td>
                            <td>2000-02-11T09:06:20</td>
                            <td>Active</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Dashboard;