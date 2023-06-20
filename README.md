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

In react-router-dom v6 useHistory() is replaced by useHistory().

```
import { useHistory } from 'react-router-dom';
const navigate = useHistory();
navigate('/');
```

React router dom migrated to v5 from v6. v6 have a lot of complexity and is not really going with the requirements of project.


# Code splitting
Code splitting allows you to strategically omit certain dependencies from bundles, then insert them only where they are needed. This means they are also not loaded until they are needed — loading JavaScript only when it is needed speeds up the page’s load time.



https://stackoverflow.com/questions/72497522/after-uploading-image-in-cloudinary-through-react-js-unable-to-get-response


Features :
1) verified badge / email verification
2) Google Signup
3) multiple images upload / carosuel
4) Add limits to no of tags, length of content in message.
5) Data re-entries as API content length is now reduced significantly.
6) Admin portal and Mod portal. {MICROSERVICE} 
  a) Admin could edit and delete any posts and content.
  b) User Management. (No of online and offline)
  c) Mock users (Enhanced testing)
  d) MODs : can only delete some content (if required)
  e) User : blocking, verification, online activity, more data colletivity.
7) Can think of max possible optimization and enhanced web security.
8) Rate Limiters needed to be implemented.
