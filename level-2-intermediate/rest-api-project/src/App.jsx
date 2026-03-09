import { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import UserList from './components/UserList';
import useDebounce from './hooks/useDebounce';
import './App.css';

function App() {
  const [query, setQuery] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    if (!debouncedQuery) {
      setUsers([]);
      return;
    }

    const fetchUsers = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          `https://api.github.com/search/users?q=${debouncedQuery}`
        );
        setUsers(response.data.items);
      } catch (err) {
        setError('An error occurred during the search.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [debouncedQuery]);

  return (
    <div className="app">
      <h1>GitHub User Search</h1>
      <SearchBar query={query} setQuery={setQuery} />
      {loading && <div className="loader">Loading...</div>}
      {error && <div className="error">{error}</div>}
      <UserList users={users} />
    </div>
  );
}

export default App;