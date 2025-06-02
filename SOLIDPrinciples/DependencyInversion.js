
// api/UserService.ts
export const fetchUser = () => axios.get('/api/user');

// UserProfile.tsx
import { fetchUser } from './api/UserService';

const UserProfile = () => {
  useEffect(() => {
    fetchUser().then(...);
  }, []);
};
