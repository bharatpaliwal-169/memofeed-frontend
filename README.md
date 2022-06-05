# MemoFeed - A Social Media Full Stack Application

useSelector : helps in fetching of data from the global redux store.

useDispatch : dispatches the actions to the redux store.

```
const dispatch = useDispatch();
```

setInterval : setInterval is a method that calls a function or runs some code after specific intervals of time, as specified through the second parameter.

```
useEffect(() => {
  const interval = setInterval(() => {
    console.log('This will run every second!');
  }, 1000);
  return () => clearInterval(interval);
}, []);
```

In react-router-dom v6 useHistory() is replaced by useNavigate().

```
import { useNavigate } from 'react-router-dom';
const navigate = useNavigate();
navigate('/');
```
