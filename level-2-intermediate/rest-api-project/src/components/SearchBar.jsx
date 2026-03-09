export default function SearchBar({ query, setQuery }) {
  return (
    <input
      type="text"
      placeholder="Rechercher un utilisateur GitHub..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="search-input"
    />
  );
}