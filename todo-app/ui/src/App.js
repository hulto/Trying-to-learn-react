import React, { Component, useEffect, useState} from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { Button, Icon, Tab, Table, Menu } from 'semantic-ui-react'
import MyPagination from './components/pagination';

const apiUrl = `http://localhost:8080`;

function App() {
  let usersPerPage = 5;
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0);
  let usersShown = users.slice(page * usersPerPage, (page + 1) * usersPerPage);
  let pagesCount = Math.ceil(users.length/usersPerPage) || 1; 
  


  useEffect(() => {
    loadUsers();
  },[]);

  function range(start, end) {
      var ans = [];
      for (let i = start; i <= end; i++) {
          ans.push(i);
      }
      return ans;
  }

  const createUser = async () => {
    await axios.get(apiUrl + '/user-create');
    loadUsers();
  }

  const loadUsers = async () => {
    const res = await axios.get(apiUrl + '/users');
    setUsers(res.data);
    let count = Math.ceil(res.data.length/usersPerPage);
    setPage(count -1);
  }
      console.log(users.length)
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            < Button primary onClick={() => createUser()}>Create User</ Button >
            <p>Users list:</p>

            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>UserID</Table.HeaderCell>
                  <Table.HeaderCell>TableIndex</Table.HeaderCell>
                  <Table.HeaderCell>Blank</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {usersShown.map( (user, i)  => {
                  return(
                  <Table.Row key={i}>
                    <Table.Cell>{user._id}</Table.Cell>
                    <Table.Cell>{i+page*5}</Table.Cell>
                    <Table.Cell>BLANK</Table.Cell>
                  </Table.Row>
                  )
              })}
              </Table.Body>
              <Table.Footer>
                <Table.Row>
                  <Table.HeaderCell colSpan='3'>
                    <MyPagination activePage={page} setPageRef={setPage} pagesCount={pagesCount}></MyPagination>
                    {/* <Menu floated='right' pagination>
                      <Menu.Item as='a' icon>
                        <Icon name='chevron left' />
                      </Menu.Item>
                      {(range(1, pagesCount )).map((val,i) => (
                      <Menu.Item onClick={() => setPage(i)}>{val}</Menu.Item>
                      ))}
                      <Menu.Item as='a' icon>
                        <Icon name='chevron right' />
                      </Menu.Item>
                    </Menu> */}
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Footer>
            </Table>
          </header>
        </div>
      );

}

export default App;