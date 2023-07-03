import { useUsers } from "./hooks";

export default function UserList() {
  const { data: users, error } = useUsers();

  if (users) {
    return (
      <div>
        <h1>Users</h1>
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    );
  }

  if (error) return <p>An Error Occurred</p>;

  return <p>Loading Users</p>;
}
