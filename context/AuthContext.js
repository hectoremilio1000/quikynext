import { Auth } from "aws-amplify";
import { createContext, useState, useEffect, useContext } from "react";
import GROUPS from "../constants/groups.js";

const AuthContext = createContext({});
export const getGroupName = (groups) => {
  let groupName = ''
  if(groups.includes(GROUPS.DOCTOR)) {
    groupName = GROUPS.DOCTOR;
  } else if (groups.includes(GROUPS.PATIENT)) {
    groupName = GROUPS.PATIENT
  }
  return groupName;
}
const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState({});
  const [authEmail, setAuthEmail] = useState('');
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [groupName, setGroupName] = useState('');
  const [sub, setSub] = useState('');
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    const authUser = await Auth.currentAuthenticatedUser();
    setAuthUser(authUser);
    setSub(authUser?.attributes?.sub);
    setAuthEmail(authUser?.attributes?.email);
    setName(authUser?.attributes?.name);
    setGroups(authUser?.signInUserSession?.idToken?.payload["cognito:groups"] ?? []);
    setGroupName(getGroupName(authUser?.signInUserSession?.idToken?.payload["cognito:groups"] ?? []));
    setTimeout(()=>{setUserName(authUser?.username);},50);
  };
  useEffect(() => {
    fetchUser();
  }, []);

  useEffect(() => {
    if(userName){
      setLoading(false);
    }
  }, [userName]);

  return (
    <AuthContext.Provider value={{ name, authEmail, userName, groupName, groups, sub, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

export const useAuthContext = ()=>useContext(AuthContext)
