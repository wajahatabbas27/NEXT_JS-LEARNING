export interface USERDATA {
  users: User;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: ADDRESS;
}

interface ADDRESS {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}

const UserData = (props: USERDATA) => {
  const user = props.users;
  // console.log(user);

  return (
    <div style={{ textAlign: "center" }}>
      <h4>User Specific Data on the runtime</h4>
      <hr />
      <div>
        Name: <b> {user.name}</b>
      </div>
      <hr />
      <div>
        Username: <b> {user.username}</b>
      </div>
      <hr />
      <div>
        Email: <b> {user.email}</b>
      </div>
      <hr />
      <div>
        Id: <b> {user.id}</b>
      </div>
      <hr />
      <div>
        Address: &nbsp;
        <b>
          {user.address.street}, &nbsp;{user.address.suite} , &nbsp;
          {user.address.city} &nbsp; {user.address.zipcode}
        </b>
      </div>
    </div>
  );
};

export default UserData;
