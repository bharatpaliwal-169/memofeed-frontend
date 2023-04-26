# Frontend 

### Developed using React, Redux, Material-UI

### Important lookouts:
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

In react-router-dom v6 useHistory() is replaced by useHistory().

```
import { useHistory } from 'react-router-dom';
const navigate = useHistory();
navigate('/');
```

React router dom migrated to v5 from v6. v6 have a lot of complexity and is not really going with the requirements of project.
