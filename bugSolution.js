```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic: updates count to 1 on mount and subsequent state changes 
    // but it only runs once.
    if (count === 0) {
      setCount(1);
    }
  }, [count]); // Add count to dependency array

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```