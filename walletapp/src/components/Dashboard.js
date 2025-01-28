import './dashboard.css'
const Dashboard =()=>{
    return(
        <html>
        <body className='dashboard-body'>
            <div class="dashboard">
                <h2>Dashboard</h2>
                <hr></hr>
                <table>
                  <tr>
                    <td><img className="dashboard-img" src="https://cdn.pixabay.com/animation/2022/12/05/10/47/10-47-58-930_512.gif"></img></td>
                    <td><img className="dashboard-img" src="https://cdn.dribbble.com/users/189524/screenshots/7202003/media/f56ec5c320f89eb6f6a3dad9567da9cf.gif"></img></td>
                    <td><img className="dashboard-img" src="https://images.squarespace-cdn.com/content/v1/5d7d44459dfcc319a8dc9bdc/1576699880711-4E6A04DJTDNLDDBIJEIL/3dbab8416d907cf31926def8fc364ed1.gif"></img></td>
                    <td><img className="dashboard-img" src="https://cdn.dribbble.com/users/1723669/screenshots/6089033/wallet_dribbble.gif"></img></td>
                  </tr>
                    <tr>
                        <td><a href="/profile"><button class="button-viewprofile">View Profile</button></a></td>
                        <td><a href="/sendmoney"><button class="button-sendmoney">Send Money</button></a></td>
                        <td><a href="/transactions"><button class="button-transactions">Check Transactions</button></a></td>
                        <td><a href="/addmoney"><button class="button-addmoney">Add Money from Bank Account</button></a></td>
                        <td></td>
                    </tr>
                </table>
                <div class="logout-button">
                    <a href="/"><button class="button-logout">Log Out</button></a>
                </div>
            </div>
        </body>
        </html>        
    );
}

export default Dashboard;