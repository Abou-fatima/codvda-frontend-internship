import UserCard from './UserCard';

export default function UserList({ users }) {
  if (users.length === 0) {
    return <p className="no-results">No Result.</p>;
  }

  return (
    <div className="user-grid">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}