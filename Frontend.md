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

In react-router-dom v6 useNavigate() is replaced by useNavigate().

```
import { useNavigate } from 'react-router-dom';
const navigate = useNavigate();
navigate('/');
```


-------------------------------------------------------------------------------


# Migration to React ^19.0 and Material UI ^ 6.0

### Memofeed v4.0.0 - Will be migrated to latest version of react and material ui aka mui.


### Key Changes for React Router DOM:
Switch → Routes:
Use Routes instead of Switch. It automatically picks the first matching route.

Redirect → Navigate:
Use the Navigate component for redirection.


React Rendering:
The integration with Provider remains the same.

Import useNavigate instead of useNavigate:

```import { useNavigate } from 'react-router-dom';```

Update your code: Replace ```history()``` or ```history.replace()``` with ```navigate()``` in the new API.

### Key Changes for Redux:
createStore → configureStore:
Use configureStore for better defaults and easier setup.

Middleware Setup:
Middleware is automatically included by configureStore (like redux-thunk), but you can customize it as shown above.



### Key Changes for Material UI --> MUI
@mui/material @mui/icons-material @emotion/react @emotion/styled



# ERROR HANDELING NEED HUGE IMPROVEMENT 
1) if something goes south there is no fallback actions defined!!
2) Centralised Notification system is needed.
3) Tracking user activity and logging user actions.


