import React, { Component } from "react";
import ReactDOM from "react-dom";
import './index.css';
import Header from './components/header.js';
import Footer from './components/footer.js';
class Second extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div>
        <table>
          <tr>
            <th>S.NO</th>
            <th>NAME</th>
            <th>DEPT</th>
            <th>COLLEGE NAME</th>
          </tr>
          <tr>
            <td>1.</td>
            <td>Ajay</td>
            <td>IT</td>
            <td>HICET</td>
          </tr>
          <tr>
            <td>2.</td>
            <td>Dhanush</td>
            <td>ECE</td>
            <td>HIT</td>
          </tr>
          <tr>
            <td>3.</td>
            <td>Mithun</td>
            <td>IT</td>
            <td>HICET</td>
          </tr>
          <tr>
            <td>4.</td>
            <td>Chandru</td>
            <td>BM</td>
            <td>BHARATHI</td>
          </tr>
          <tr>
            <td>5.</td>
            <td>Tharan</td>
            <td>IT</td>
            <td>HICET</td>
          </tr>
        </table>
        </div>
        <div>
          <form>
            <label>User Name : </label><br></br>
            <input type="text" name="uname" required/><br></br>
            <label>Password : </label><br></br>
            <input type="text" name="uname" required/><br></br>
            <button>submit</button>
            <button class="btn2">Reset</button>
          </form>
        </div>
        <Footer/>
      </div>
    );
  }
}
ReactDOM.render(<Second />, document.getElementById('root'));
